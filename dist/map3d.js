"use strict";(()=>{var RE=Object.create;var Yp=Object.defineProperty;var CE=Object.getOwnPropertyDescriptor;var PE=Object.getOwnPropertyNames;var IE=Object.getPrototypeOf,LE=Object.prototype.hasOwnProperty;var D_=s=>{throw TypeError(s)};var u=(s,e)=>Yp(s,"name",{value:e,configurable:!0});var NE=(s,e)=>()=>{try{return e||s((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var DE=(s,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of PE(e))!LE.call(s,i)&&i!==t&&Yp(s,i,{get:()=>e[i],enumerable:!(n=CE(e,i))||n.enumerable});return s};var UE=(s,e,t)=>(t=s!=null?RE(IE(s)):{},DE(e||!s||!s.__esModule?Yp(t,"default",{value:s,enumerable:!0}):t,s));var $p=(s,e,t)=>e.has(s)||D_("Cannot "+t);var f=(s,e,t)=>($p(s,e,"read from private field"),t?t.call(s):e.get(s)),G=(s,e,t)=>e.has(s)?D_("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t),k=(s,e,t,n)=>($p(s,e,"write to private field"),n?n.call(s,t):e.set(s,t),t),R=(s,e,t)=>($p(s,e,"access private method"),t);var Di=(s,e,t,n)=>({set _(i){k(s,e,i,t)},get _(){return f(s,e,n)}});var O_=NE(po=>{"use strict";var ji,_r=po&&po.__classPrivateFieldGet||function(s,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?s!==e||!n:!e.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(s):n?n.value:e.get(s)};Object.defineProperty(po,"__esModule",{value:!0}),po.EventEmitter=void 0;var Kp=class Kp{constructor(){ji.set(this,{})}on(e,t){e in _r(this,ji,"f")||(_r(this,ji,"f")[e]=[]),_r(this,ji,"f")[e].push(t)}once(e,t){let n=u((...i)=>{t(...i),this.off(e,n)},"i");this.on(e,n)}off(e,t){if(!(e in _r(this,ji,"f")))return;let n=_r(this,ji,"f")[e].indexOf(t);n!==-1&&_r(this,ji,"f")[e].splice(n,1)}emit(e,...t){e in _r(this,ji,"f")&&_r(this,ji,"f")[e].forEach((n=>n(...t)))}};u(Kp,"i");var Eh=Kp;po.EventEmitter=Eh,ji=new WeakMap,po.default=Eh});var U_="civMap3D";var F_=UE(O_());var Os,Qi,Sa,Jp=class Jp extends F_.EventEmitter{constructor(t,n){super();G(this,Os);G(this,Qi);G(this,Sa);k(this,Qi,t),k(this,Sa,t.lockVerticalEdges),k(this,Os,n)}center(){return f(this,Os).centre()}isVisible(t,n,i=0){return f(this,Os).visible(t,n,i)}lockVerticalEdges(){return f(this,Sa)}nativeTileSize(){return f(this,Qi).art.nativeTileSize()}openCity(t){let{cityOpener:n}=f(this,Qi);return n.opens(t,this)?(n.open(t,this),!0):!1}playerId(){return f(this,Qi).playerId}render(){f(this,Os).changed()}scale(){return f(this,Qi).art.scale()}setCenter(t,n){f(this,Os).centreOn(t,n)}setLockVerticalEdges(t){k(this,Sa,t)}setZoom(){f(this,Os).changed()}transport(){return f(this,Qi).transport}zoom(){return f(this,Qi).art.zoom()}};Os=new WeakMap,Qi=new WeakMap,Sa=new WeakMap,u(Jp,"MapPortal3D");var Zp=Jp,B_=Zp;var OE=u((s,e)=>{let[t,n]=s.centre(0,0);return Object.fromEntries(e.directions().map(i=>{let[r,o]=e.offset(i,0,0),[a,l]=s.centre(r,o);return[i,[a-t,l-n]]}))},"groundDirections"),k_=OE;var Pv=0,Om=1,Iv=2;var Kc=1,Xd=2,ol=3,yi=0,Dn=1,jt=2,Co=0,al=1,Fm=2,Bm=3,km=4,Lv=5;var Po=100,Nv=101,Dv=102,Uv=103,Ov=104,Fv=200,Bv=201,kv=202,zv=203,zm=204,Gm=205,Gv=206,Vv=207,Hv=208,Wv=209,Xv=210,qv=211,Yv=212,$v=213,Kv=214,nd=0,id=1,sd=2,Xa=3,rd=4,od=5,ad=6,ld=7,Vm=0,Zv=1,Jv=2,cs=0,Hm=1,Wm=2,Xm=3,Zc=4,qm=5,Ym=6,$m=7,Sm="attached",jv="detached",Km=300,Io=301,ll=302,qd=303,Yd=304,Gn=1e3,zn=1001,qa=1002,Ht=1003,$d=1004;var Lo=1005;var zt=1006,cl=1007;var vn=1008;var Mn=1009,Zm=1010,Jm=1011,ul=1012,Kd=1013,Bi=1014,ti=1015,ni=1016,Zd=1017,Jd=1018,No=1020,jm=35902,Qm=35899,e0=1021,t0=1022,Xn=1023,qs=1026,nr=1027,jd=1028,Qd=1029,us=1030,ef=1031;var tf=1033,Jc=33776,jc=33777,Qc=33778,eu=33779,nf=35840,sf=35841,rf=35842,of=35843,af=36196,lf=37492,cf=37496,uf=37488,hf=37489,tu=37490,df=37491,ff=37808,pf=37809,mf=37810,gf=37811,xf=37812,bf=37813,yf=37814,_f=37815,vf=37816,Mf=37817,Sf=37818,wf=37819,Ef=37820,Tf=37821,Af=36492,Rf=36494,Cf=36495,Pf=36283,If=36284,nu=36285,Lf=36286;var _o=2300,vo=2301,ed=2302,wm=2303,Em=2400,Tm=2401,Am=2402,Qv=2500;var n0=0,iu=1,hl=2,eM=3200;var Nf=0,tM=1,ki="",Lt="srgb",Pn="srgb-linear",Sc="linear",St="srgb";var td=7680;var nM=519,iM=512,sM=513,rM=514,i0=515,oM=516,aM=517,s0=518,r0=519,o0=35044;var a0="300 es",xi=2e3,Ya=2001;function FE(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}u(FE,"arrayNeedsUint32");function BE(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}u(BE,"isTypedArray");function $a(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}u($a,"createElementNS");function lM(){let s=$a("canvas");return s.style.display="block",s}u(lM,"createCanvasElement");var z_={},Ka=null;function wc(...s){let e="THREE."+s.shift();Ka?Ka("log",e,...s):console.log(e,...s)}u(wc,"log");function cM(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}u(cM,"enhanceLogMessage");function He(...s){s=cM(s);let e="THREE."+s.shift();if(Ka)Ka("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}u(He,"warn");function Je(...s){s=cM(s);let e="THREE."+s.shift();if(Ka)Ka("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}u(Je,"error");function yo(...s){let e=s.join(" ");e in z_||(z_[e]=!0,He(...s))}u(yo,"warnOnce");function uM(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}u(r,"probe"),setTimeout(r,t)})}u(uM,"probeAsync");var hM={[nd]:nd,[sd]:ad,[rd]:rd,[Xa]:od,[id]:id,[ad]:sd,[ld]:ld,[od]:Xa},g0=class g0{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}};u(g0,"EventDispatcher");var ns=g0,yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],G_=1234567,_c=Math.PI/180,Mo=180/Math.PI;function hs(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}u(hs,"generateUUID");function ht(s,e,t){return Math.max(e,Math.min(t,s))}u(ht,"clamp");function l0(s,e){return(s%e+e)%e}u(l0,"euclideanModulo");function kE(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}u(kE,"mapLinear");function zE(s,e,t){return s!==e?(t-s)/(e-s):0}u(zE,"inverseLerp");function vc(s,e,t){return(1-t)*s+t*e}u(vc,"lerp");function GE(s,e,t,n){return vc(s,e,1-Math.exp(-t*n))}u(GE,"damp");function VE(s,e=1){return e-Math.abs(l0(s,e*2)-e)}u(VE,"pingpong");function HE(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}u(HE,"smoothstep");function WE(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}u(WE,"smootherstep");function XE(s,e){return s+Math.floor(Math.random()*(e-s+1))}u(XE,"randInt");function qE(s,e){return s+Math.random()*(e-s)}u(qE,"randFloat");function YE(s){return s*(.5-Math.random())}u(YE,"randFloatSpread");function $E(s){s!==void 0&&(G_=s);let e=G_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}u($E,"seededRandom");function KE(s){return s*_c}u(KE,"degToRad");function ZE(s){return s*Mo}u(ZE,"radToDeg");function JE(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}u(JE,"isPowerOfTwo");function jE(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}u(jE,"ceilPowerOfTwo");function c0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}u(c0,"floorPowerOfTwo");function QE(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),p=r((e-n)/2),d=o((e-n)/2),m=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*p,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*p,a*c);break;case"ZXZ":s.set(l*p,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*m,a*c);break;case"YXY":s.set(l*m,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*m,a*h,a*c);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}u(QE,"setQuaternionFromProperEuler");function Df(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}u(Df,"getNormalizationScale");function u0(s,e){if(e.constructor===Float32Array)return s;let t=Df(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}u(u0,"denormalize");function h0(s,e){if(e.constructor===Float32Array)return s;let t=Df(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}u(h0,"normalize");var Uf={DEG2RAD:_c,RAD2DEG:Mo,generateUUID:hs,clamp:ht,euclideanModulo:l0,mapLinear:kE,inverseLerp:zE,lerp:vc,damp:GE,pingpong:VE,smoothstep:HE,smootherstep:WE,randInt:XE,randFloat:qE,randFloatSpread:YE,seededRandom:$E,degToRad:KE,radToDeg:ZE,isPowerOfTwo:JE,ceilPowerOfTwo:jE,floorPowerOfTwo:c0,setQuaternionFromProperEuler:QE,normalize:h0,denormalize:u0},Td=class Td{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};u(Td,"Vector2"),Td.prototype.isVector2=!0;var Ve=Td,x0=class x0{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],p=n[i+3],d=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(p!==_||l!==d||c!==m||h!==g){let x=l*d+c*m+h*g+p*_;x<0&&(d=-d,m=-m,g=-g,_=-_,x=-x);let b=1-a;if(x<.9995){let v=Math.acos(x),w=Math.sin(v);b=Math.sin(b*v)/w,a=Math.sin(a*v)/w,l=l*b+d*a,c=c*b+m*a,h=h*b+g*a,p=p*b+_*a}else{l=l*b+d*a,c=c*b+m*a,h=h*b+g*a,p=p*b+_*a;let v=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=v,c*=v,h*=v,p*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],p=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+h*p+l*m-c*d,e[t+1]=l*g+h*d+c*p-a*m,e[t+2]=c*g+h*m+a*d-l*p,e[t+3]=h*g-a*p-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),p=a(r/2),d=l(n/2),m=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*p+c*m*g,this._y=c*m*p-d*h*g,this._z=c*h*g+d*m*p,this._w=c*h*p-d*m*g;break;case"YXZ":this._x=d*h*p+c*m*g,this._y=c*m*p-d*h*g,this._z=c*h*g-d*m*p,this._w=c*h*p+d*m*g;break;case"ZXY":this._x=d*h*p-c*m*g,this._y=c*m*p+d*h*g,this._z=c*h*g+d*m*p,this._w=c*h*p-d*m*g;break;case"ZYX":this._x=d*h*p-c*m*g,this._y=c*m*p+d*h*g,this._z=c*h*g-d*m*p,this._w=c*h*p+d*m*g;break;case"YZX":this._x=d*h*p+c*m*g,this._y=c*m*p+d*h*g,this._z=c*h*g-d*m*p,this._w=c*h*p-d*m*g;break;case"XZY":this._x=d*h*p-c*m*g,this._y=c*m*p-d*h*g,this._z=c*h*g+d*m*p,this._w=c*h*p+d*m*g;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],p=t[10],d=n+a+p;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-i)*m}else if(n>a&&n>p){let m=2*Math.sqrt(1+n-a-p);this._w=(h-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+c)/m}else if(a>p){let m=2*Math.sqrt(1+a-n-p);this._w=(r-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+p-n-a);this._w=(o-i)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};u(x0,"Quaternion");var an=x0,Ad=class Ad{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(V_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(V_.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),p=2*(r*n-o*t);return this.x=t+l*c+o*p-a*h,this.y=n+l*h+a*c-r*p,this.z=i+l*p+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jp.copy(this).projectOnVector(e),this.sub(jp)}reflect(e){return this.sub(jp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};u(Ad,"Vector3"),Ad.prototype.isVector3=!0;var H=Ad,jp=new H,V_=new an,Rd=class Rd{constructor(e,t,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],p=n[7],d=n[2],m=n[5],g=n[8],_=i[0],x=i[3],b=i[6],v=i[1],w=i[4],M=i[7],A=i[2],E=i[5],y=i[8];return r[0]=o*_+a*v+l*A,r[3]=o*x+a*w+l*E,r[6]=o*b+a*M+l*y,r[1]=c*_+h*v+p*A,r[4]=c*x+h*w+p*E,r[7]=c*b+h*M+p*y,r[2]=d*_+m*v+g*A,r[5]=d*x+m*w+g*E,r[8]=d*b+m*M+g*y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],p=h*o-a*c,d=a*l-h*r,m=c*r-o*l,g=t*p+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=p*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return yo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qp.makeScale(e,t)),this}rotate(e){return yo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qp.makeRotation(-e)),this}translate(e,t){return yo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qp.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};u(Rd,"Matrix3"),Rd.prototype.isMatrix3=!0;var je=Rd,Qp=new je,H_=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),W_=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eT(){let s={enabled:!0,workingColorSpace:Pn,spaces:{},convert:u(function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===St&&(i.r=Xs(i.r),i.g=Xs(i.g),i.b=Xs(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(i.r=Wa(i.r),i.g=Wa(i.g),i.b=Wa(i.b))),i},"convert"),workingToColorSpace:u(function(i,r){return this.convert(i,this.workingColorSpace,r)},"workingToColorSpace"),colorSpaceToWorking:u(function(i,r){return this.convert(i,r,this.workingColorSpace)},"colorSpaceToWorking"),getPrimaries:u(function(i){return this.spaces[i].primaries},"getPrimaries"),getTransfer:u(function(i){return i===ki?Sc:this.spaces[i].transfer},"getTransfer"),getToneMappingMode:u(function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},"getToneMappingMode"),getLuminanceCoefficients:u(function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},"getLuminanceCoefficients"),define:u(function(i){Object.assign(this.spaces,i)},"define"),_getMatrix:u(function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},"_getMatrix"),_getDrawingBufferColorSpace:u(function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},"_getDrawingBufferColorSpace"),_getUnpackColorSpace:u(function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},"_getUnpackColorSpace")},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Pn]:{primaries:e,whitePoint:n,transfer:Sc,toXYZ:H_,fromXYZ:W_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:e,whitePoint:n,transfer:St,toXYZ:H_,fromXYZ:W_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),s}u(eT,"createColorManagement");var lt=eT();function Xs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}u(Xs,"SRGBToLinear");function Wa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}u(Wa,"LinearToSRGB");var wa,b0=class b0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{wa===void 0&&(wa=$a("canvas")),wa.width=e.width,wa.height=e.height;let i=wa.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=wa}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=$a("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Xs(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xs(t[n]/255)*255):t[n]=Xs(t[n]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};u(b0,"ImageUtils");var cd=b0,tT=0,y0=class y0{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:tT++}),this.uuid=hs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(em(i[o].image)):r.push(em(i[o]))}else r=em(i);n.url=r}return t||(e.images[this.uuid]=n),n}};u(y0,"TextureSource");var Za=y0;function em(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?cd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}u(em,"serializeImage");var nT=0,tm=new H,Va=class Va extends ns{constructor(e=Va.DEFAULT_IMAGE,t=Va.DEFAULT_MAPPING,n=zn,i=zn,r=zt,o=vn,a=Xn,l=Mn,c=Va.DEFAULT_ANISOTROPY,h=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nT++}),this.uuid=hs(),this.name="",this.source=new Za(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(tm).x}get height(){return this.source.getSize(tm).y}get depth(){return this.source.getSize(tm).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Km)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gn:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gn:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};u(Va,"Texture");var Jt=Va;Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=Km;Jt.DEFAULT_ANISOTROPY=1;var Cd=class Cd{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],p=l[8],d=l[1],m=l[5],g=l[9],_=l[2],x=l[6],b=l[10];if(Math.abs(h-d)<.01&&Math.abs(p-_)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+_)<.1&&Math.abs(g+x)<.1&&Math.abs(c+m+b-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,M=(m+1)/2,A=(b+1)/2,E=(h+d)/4,y=(p+_)/4,S=(g+x)/4;return w>M&&w>A?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=E/n,r=y/n):M>A?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=E/i,r=S/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=y/r,i=S/r),this.set(n,i,r,t),this}let v=Math.sqrt((x-g)*(x-g)+(p-_)*(p-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(x-g)/v,this.y=(p-_)/v,this.z=(d-h)/v,this.w=Math.acos((c+m+b-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};u(Cd,"Vector4"),Cd.prototype.isVector4=!0;var Et=Cd,_0=class _0 extends ns{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Jt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Za(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};u(_0,"RenderTarget");var ud=_0,v0=class v0 extends ud{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}};u(v0,"WebGLRenderTarget");var jn=v0,M0=class M0 extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};u(M0,"DataArrayTexture");var So=M0;var S0=class S0 extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};u(S0,"Data3DTexture");var hd=S0;var Mc=class Mc{constructor(e,t,n,i,r,o,a,l,c,h,p,d,m,g,_,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,p,d,m,g,_,x)}set(e,t,n,i,r,o,a,l,c,h,p,d,m,g,_,x){let b=this.elements;return b[0]=e,b[4]=t,b[8]=n,b[12]=i,b[1]=r,b[5]=o,b[9]=a,b[13]=l,b[2]=c,b[6]=h,b[10]=p,b[14]=d,b[3]=m,b[7]=g,b[11]=_,b[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Ea.setFromMatrixColumn(e,0).length(),r=1/Ea.setFromMatrixColumn(e,1).length(),o=1/Ea.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let d=o*h,m=o*p,g=a*h,_=a*p;t[0]=l*h,t[4]=-l*p,t[8]=c,t[1]=m+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,m=l*p,g=c*h,_=c*p;t[0]=d+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*p,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,m=l*p,g=c*h,_=c*p;t[0]=d-_*a,t[4]=-o*p,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,m=o*p,g=a*h,_=a*p;t[0]=l*h,t[4]=g*c-m,t[8]=d*c+_,t[1]=l*p,t[5]=_*c+d,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*p,t[8]=g*p+m,t[1]=p,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*p+g,t[10]=d-_*p}else if(e.order==="XZY"){let d=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-p,t[8]=c*h,t[1]=d*p+_,t[5]=o*h,t[9]=m*p-g,t[2]=g*p-m,t[6]=a*h,t[10]=_*p+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iT,e,sT)}lookAt(e,t,n){let i=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),vr.crossVectors(n,Zn),vr.lengthSq()===0&&(Math.abs(n.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),vr.crossVectors(n,Zn)),vr.normalize(),Th.crossVectors(Zn,vr),i[0]=vr.x,i[4]=Th.x,i[8]=Zn.x,i[1]=vr.y,i[5]=Th.y,i[9]=Zn.y,i[2]=vr.z,i[6]=Th.z,i[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],p=n[5],d=n[9],m=n[13],g=n[2],_=n[6],x=n[10],b=n[14],v=n[3],w=n[7],M=n[11],A=n[15],E=i[0],y=i[4],S=i[8],I=i[12],P=i[1],D=i[5],U=i[9],X=i[13],O=i[2],Y=i[6],te=i[10],B=i[14],Z=i[3],W=i[7],$=i[11],Q=i[15];return r[0]=o*E+a*P+l*O+c*Z,r[4]=o*y+a*D+l*Y+c*W,r[8]=o*S+a*U+l*te+c*$,r[12]=o*I+a*X+l*B+c*Q,r[1]=h*E+p*P+d*O+m*Z,r[5]=h*y+p*D+d*Y+m*W,r[9]=h*S+p*U+d*te+m*$,r[13]=h*I+p*X+d*B+m*Q,r[2]=g*E+_*P+x*O+b*Z,r[6]=g*y+_*D+x*Y+b*W,r[10]=g*S+_*U+x*te+b*$,r[14]=g*I+_*X+x*B+b*Q,r[3]=v*E+w*P+M*O+A*Z,r[7]=v*y+w*D+M*Y+A*W,r[11]=v*S+w*U+M*te+A*$,r[15]=v*I+w*X+M*B+A*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],p=e[6],d=e[10],m=e[14],g=e[3],_=e[7],x=e[11],b=e[15],v=l*m-c*d,w=a*m-c*p,M=a*d-l*p,A=o*m-c*h,E=o*d-l*h,y=o*p-a*h;return t*(_*v-x*w+b*M)-n*(g*v-x*A+b*E)+i*(g*w-_*A+b*y)-r*(g*M-_*E+x*y)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],p=e[9],d=e[10],m=e[11],g=e[12],_=e[13],x=e[14],b=e[15],v=t*a-n*o,w=t*l-i*o,M=t*c-r*o,A=n*l-i*a,E=n*c-r*a,y=i*c-r*l,S=h*_-p*g,I=h*x-d*g,P=h*b-m*g,D=p*x-d*_,U=p*b-m*_,X=d*b-m*x,O=v*X-w*U+M*D+A*P-E*I+y*S;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Y=1/O;return e[0]=(a*X-l*U+c*D)*Y,e[1]=(i*U-n*X-r*D)*Y,e[2]=(_*y-x*E+b*A)*Y,e[3]=(d*E-p*y-m*A)*Y,e[4]=(l*P-o*X-c*I)*Y,e[5]=(t*X-i*P+r*I)*Y,e[6]=(x*M-g*y-b*w)*Y,e[7]=(h*y-d*M+m*w)*Y,e[8]=(o*U-a*P+c*S)*Y,e[9]=(n*P-t*U-r*S)*Y,e[10]=(g*E-_*M+b*v)*Y,e[11]=(p*M-h*E-m*v)*Y,e[12]=(a*I-o*D-l*S)*Y,e[13]=(t*D-n*I+i*S)*Y,e[14]=(_*w-g*A-x*v)*Y,e[15]=(h*A-p*w+d*v)*Y,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,p=a+a,d=r*c,m=r*h,g=r*p,_=o*h,x=o*p,b=a*p,v=l*c,w=l*h,M=l*p,A=n.x,E=n.y,y=n.z;return i[0]=(1-(_+b))*A,i[1]=(m+M)*A,i[2]=(g-w)*A,i[3]=0,i[4]=(m-M)*E,i[5]=(1-(d+b))*E,i[6]=(x+v)*E,i[7]=0,i[8]=(g+w)*y,i[9]=(x-v)*y,i[10]=(1-(d+_))*y,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Ea.set(i[0],i[1],i[2]).length(),a=Ea.set(i[4],i[5],i[6]).length(),l=Ea.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Ui.copy(this);let c=1/o,h=1/a,p=1/l;return Ui.elements[0]*=c,Ui.elements[1]*=c,Ui.elements[2]*=c,Ui.elements[4]*=h,Ui.elements[5]*=h,Ui.elements[6]*=h,Ui.elements[8]*=p,Ui.elements[9]*=p,Ui.elements[10]*=p,t.setFromRotationMatrix(Ui),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,o,a=xi,l=!1){let c=this.elements,h=2*r/(t-e),p=2*r/(n-i),d=(t+e)/(t-e),m=(n+i)/(n-i),g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===xi)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ya)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=p,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=xi,l=!1){let c=this.elements,h=2/(t-e),p=2/(n-i),d=-(t+e)/(t-e),m=-(n+i)/(n-i),g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===xi)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Ya)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=p,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};u(Mc,"Matrix4"),Mc.prototype.isMatrix4=!0;var Ke=Mc,Ea=new H,Ui=new Ke,iT=new H(0,0,0),sT=new H(1,1,1),vr=new H,Th=new H,Zn=new H,X_=new Ke,q_=new an,Pd=class Pd{constructor(e=0,t=0,n=0,i=Pd.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],p=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ht(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return X_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(X_,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return q_.setFromEuler(this),this.setFromQuaternion(q_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};u(Pd,"Euler");var Qn=Pd;Qn.DEFAULT_ORDER="XYZ";var w0=class w0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};u(w0,"Layers");var Ja=w0,rT=0,Y_=new H,Ta=new an,Fs=new Ke,Ah=new H,lc=new H,oT=new H,aT=new an,$_=new H(1,0,0),K_=new H(0,1,0),Z_=new H(0,0,1),J_={type:"added"},lT={type:"removed"},Aa={type:"childadded",child:null},nm={type:"childremoved",child:null},Ha=class Ha extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rT++}),this.uuid=hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ha.DEFAULT_UP.clone();let e=new H,t=new Qn,n=new an,i=new H(1,1,1);function r(){n.setFromEuler(t,!1)}u(r,"onRotationChange");function o(){t.setFromQuaternion(n,void 0,!1)}u(o,"onQuaternionChange"),t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ke},normalMatrix:{value:new je}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=Ha.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ha.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ta.setFromAxisAngle(e,t),this.quaternion.multiply(Ta),this}rotateOnWorldAxis(e,t){return Ta.setFromAxisAngle(e,t),this.quaternion.premultiply(Ta),this}rotateX(e){return this.rotateOnAxis($_,e)}rotateY(e){return this.rotateOnAxis(K_,e)}rotateZ(e){return this.rotateOnAxis(Z_,e)}translateOnAxis(e,t){return Y_.copy(e).applyQuaternion(this.quaternion),this.position.add(Y_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($_,e)}translateY(e){return this.translateOnAxis(K_,e)}translateZ(e){return this.translateOnAxis(Z_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ah.copy(e):Ah.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),lc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fs.lookAt(lc,Ah,this.up):Fs.lookAt(Ah,lc,this.up),this.quaternion.setFromRotationMatrix(Fs),i&&(Fs.extractRotation(i.matrixWorld),Ta.setFromRotationMatrix(Fs),this.quaternion.premultiply(Ta.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(J_),Aa.child=e,this.dispatchEvent(Aa),Aa.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lT),nm.child=e,this.dispatchEvent(nm),nm.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fs.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(J_),Aa.child=e,this.dispatchEvent(Aa),Aa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lc,e,oT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lc,aT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(u(r,"serialize"),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),p=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}u(o,"extractFromCache")}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};u(Ha,"Object3D");var Ot=Ha;Ot.DEFAULT_UP=new H(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var E0=class E0 extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}};u(E0,"Group");var Xt=E0,cT={type:"move"},T0=class T0{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let x=t.getJointPose(_,n),b=this._getHandJoint(c,_);x!==null&&(b.matrix.fromArray(x.transform.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale),b.matrixWorldNeedsUpdate=!0,b.jointRadius=x.radius),b.visible=x!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=h.position.distanceTo(p.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cT)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Xt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};u(T0,"WebXRController");var ja=T0,dM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mr={h:0,s:0,l:0},Rh={h:0,s:0,l:0};function im(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}u(im,"hue2rgb");var A0=class A0{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=lt.workingColorSpace){if(e=l0(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=im(o,r,e+1/3),this.g=im(o,r,e),this.b=im(o,r,e-1/3)}return lt.colorSpaceToWorking(this,i),this}setStyle(e,t=Lt){function n(r){r!==void 0&&parseFloat(r)<1&&He("Color: Alpha component of "+e+" will be ignored.")}u(n,"handleAlpha");let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){let n=dM[e.toLowerCase()];return n!==void 0?this.setHex(n,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}copyLinearToSRGB(e){return this.r=Wa(e.r),this.g=Wa(e.g),this.b=Wa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return lt.workingToColorSpace(_n.copy(this),e),Math.round(ht(_n.r*255,0,255))*65536+Math.round(ht(_n.g*255,0,255))*256+Math.round(ht(_n.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(_n.copy(this),t);let n=_n.r,i=_n.g,r=_n.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let p=o-a;switch(c=h<=.5?p/(o+a):p/(2-o-a),o){case n:l=(i-r)/p+(i<r?6:0);break;case i:l=(r-n)/p+2;break;case r:l=(n-i)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Lt){lt.workingToColorSpace(_n.copy(this),e);let t=_n.r,n=_n.g,i=_n.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Mr),this.setHSL(Mr.h+e,Mr.s+t,Mr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mr),e.getHSL(Rh);let n=vc(Mr.h,Rh.h,t),i=vc(Mr.s,Rh.s,t),r=vc(Mr.l,Rh.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};u(A0,"Color");var Pe=A0,_n=new Pe;Pe.NAMES=dM;var Id=class Id{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Pe(e),this.near=t,this.far=n}clone(){return new Id(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}};u(Id,"Fog");var Ec=Id,R0=class R0 extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}};u(R0,"Scene");var Tc=R0,Oi=new H,Bs=new H,sm=new H,ks=new H,Ra=new H,Ca=new H,j_=new H,rm=new H,om=new H,am=new H,lm=new Et,cm=new Et,um=new Et,Ar=class Ar{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Oi.subVectors(e,t),i.cross(Oi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Oi.subVectors(i,t),Bs.subVectors(n,t),sm.subVectors(e,t);let o=Oi.dot(Oi),a=Oi.dot(Bs),l=Oi.dot(sm),c=Bs.dot(Bs),h=Bs.dot(sm),p=o*c-a*a;if(p===0)return r.set(0,0,0),null;let d=1/p,m=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ks)===null?!1:ks.x>=0&&ks.y>=0&&ks.x+ks.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,ks)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ks.x),l.addScaledVector(o,ks.y),l.addScaledVector(a,ks.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return lm.setScalar(0),cm.setScalar(0),um.setScalar(0),lm.fromBufferAttribute(e,t),cm.fromBufferAttribute(e,n),um.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(lm,r.x),o.addScaledVector(cm,r.y),o.addScaledVector(um,r.z),o}static isFrontFacing(e,t,n,i){return Oi.subVectors(n,t),Bs.subVectors(e,t),Oi.cross(Bs).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),Bs.subVectors(this.a,this.b),Oi.cross(Bs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ar.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ar.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Ar.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Ar.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ar.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;Ra.subVectors(i,n),Ca.subVectors(r,n),rm.subVectors(e,n);let l=Ra.dot(rm),c=Ca.dot(rm);if(l<=0&&c<=0)return t.copy(n);om.subVectors(e,i);let h=Ra.dot(om),p=Ca.dot(om);if(h>=0&&p<=h)return t.copy(i);let d=l*p-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(n).addScaledVector(Ra,o);am.subVectors(e,r);let m=Ra.dot(am),g=Ca.dot(am);if(g>=0&&m<=g)return t.copy(r);let _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ca,a);let x=h*g-m*p;if(x<=0&&p-h>=0&&m-g>=0)return j_.subVectors(r,i),a=(p-h)/(p-h+(m-g)),t.copy(i).addScaledVector(j_,a);let b=1/(x+_+d);return o=_*b,a=d*b,t.copy(n).addScaledVector(Ra,o).addScaledVector(Ca,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};u(Ar,"Triangle");var Hs=Ar,C0=class C0{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fi):Fi.fromBufferAttribute(r,o),Fi.applyMatrix4(e.matrixWorld),this.expandByPoint(Fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ch.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ch.copy(n.boundingBox)),Ch.applyMatrix4(e.matrixWorld),this.union(Ch)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fi),Fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cc),Ph.subVectors(this.max,cc),Pa.subVectors(e.a,cc),Ia.subVectors(e.b,cc),La.subVectors(e.c,cc),Sr.subVectors(Ia,Pa),wr.subVectors(La,Ia),mo.subVectors(Pa,La);let t=[0,-Sr.z,Sr.y,0,-wr.z,wr.y,0,-mo.z,mo.y,Sr.z,0,-Sr.x,wr.z,0,-wr.x,mo.z,0,-mo.x,-Sr.y,Sr.x,0,-wr.y,wr.x,0,-mo.y,mo.x,0];return!hm(t,Pa,Ia,La,Ph)||(t=[1,0,0,0,1,0,0,0,1],!hm(t,Pa,Ia,La,Ph))?!1:(Ih.crossVectors(Sr,wr),t=[Ih.x,Ih.y,Ih.z],hm(t,Pa,Ia,La,Ph))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}};u(C0,"Box3");var ei=C0,zs=[new H,new H,new H,new H,new H,new H,new H,new H],Fi=new H,Ch=new ei,Pa=new H,Ia=new H,La=new H,Sr=new H,wr=new H,mo=new H,cc=new H,Ph=new H,Ih=new H,go=new H;function hm(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){go.fromArray(s,r);let a=i.x*Math.abs(go.x)+i.y*Math.abs(go.y)+i.z*Math.abs(go.z),l=e.dot(go),c=t.dot(go),h=n.dot(go);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}u(hm,"satForAxes");var Ws=uT();function uT(){let s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}u(uT,"_generateTables");function hT(s){Math.abs(s)>65504&&He("DataUtils.toHalfFloat(): Value out of range."),s=ht(s,-65504,65504),Ws.floatView[0]=s;let e=Ws.uint32View[0],t=e>>23&511;return Ws.baseTable[t]+((e&8388607)>>Ws.shiftTable[t])}u(hT,"toHalfFloat");function dT(s){let e=s>>10;return Ws.uint32View[0]=Ws.mantissaTable[Ws.offsetTable[e]+(s&1023)]+Ws.exponentTable[e],Ws.floatView[0]}u(dT,"fromHalfFloat");var P0=class P0{static toHalfFloat(e){return hT(e)}static fromHalfFloat(e){return dT(e)}};u(P0,"DataUtils");var is=P0,Kt=new H,Lh=new Ve,fT=0,I0=class I0 extends ns{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fT++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=o0,this.updateRanges=[],this.gpuType=ti,this.version=0,this._normalizationScale=e!==void 0?Df(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Lh.fromBufferAttribute(this,t),Lh.applyMatrix3(e),this.setXY(t,Lh.x,Lh.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):u0(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):h0(e,this.array)}};u(I0,"BufferAttribute");var yt=I0;var L0=class L0 extends yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};u(L0,"Uint16BufferAttribute");var Ac=L0;var N0=class N0 extends yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};u(N0,"Uint32BufferAttribute");var Rc=N0;var D0=class D0 extends yt{constructor(e,t,n){super(new Float32Array(e),t,n)}};u(D0,"Float32BufferAttribute");var Pt=D0,pT=new ei,uc=new H,dm=new H,U0=class U0{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):pT.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;uc.subVectors(e,this.center);let t=uc.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(uc,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dm.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(uc.copy(e.center).add(dm)),this.expandByPoint(uc.copy(e.center).sub(dm))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};u(U0,"Sphere");var Vn=U0,mT=0,gi=new Ke,fm=new Ot,Na=new H,Jn=new ei,hc=new ei,on=new H,Ld=class Ld extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mT++}),this.uuid=hs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(FE(e)?Rc:Ac)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return gi.makeRotationFromQuaternion(e),this.applyMatrix4(gi),this}rotateX(e){return gi.makeRotationX(e),this.applyMatrix4(gi),this}rotateY(e){return gi.makeRotationY(e),this.applyMatrix4(gi),this}rotateZ(e){return gi.makeRotationZ(e),this.applyMatrix4(gi),this}translate(e,t,n){return gi.makeTranslation(e,t,n),this.applyMatrix4(gi),this}scale(e,t,n){return gi.makeScale(e,t,n),this.applyMatrix4(gi),this}lookAt(e){return fm.lookAt(e),fm.updateMatrix(),this.applyMatrix4(fm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Na).negate(),this.translate(Na.x,Na.y,Na.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Pt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Jn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let n=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];hc.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(Jn.min,hc.min),Jn.expandByPoint(on),on.addVectors(Jn.max,hc.max),Jn.expandByPoint(on)):(Jn.expandByPoint(hc.min),Jn.expandByPoint(hc.max))}Jn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)on.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(on));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)on.fromBufferAttribute(a,c),l&&(Na.fromBufferAttribute(e,c),on.add(Na)),i=Math.max(i,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new yt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let I=0;I<n.count;I++)a[I]=new H,l[I]=new H;let h=new H,p=new H,d=new H,m=new Ve,g=new Ve,_=new Ve,x=new H,b=new H;function v(I,P,D){c[I]=c[P]=c[D]=1,h.fromBufferAttribute(n,I),p.fromBufferAttribute(n,P),d.fromBufferAttribute(n,D),m.fromBufferAttribute(r,I),g.fromBufferAttribute(r,P),_.fromBufferAttribute(r,D),p.sub(h),d.sub(h),g.sub(m),_.sub(m);let U=1/(g.x*_.y-_.x*g.y);isFinite(U)&&(x.copy(p).multiplyScalar(_.y).addScaledVector(d,-g.y).multiplyScalar(U),b.copy(d).multiplyScalar(g.x).addScaledVector(p,-_.x).multiplyScalar(U),a[I].add(x),a[P].add(x),a[D].add(x),l[I].add(b),l[P].add(b),l[D].add(b))}u(v,"handleTriangle");let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let I=0,P=w.length;I<P;++I){let D=w[I],U=D.start,X=D.count;for(let O=U,Y=U+X;O<Y;O+=3)v(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let M=new H,A=new H,E=new H,y=new H;function S(I){E.fromBufferAttribute(i,I),y.copy(E);let P=a[I];M.copy(P),M.sub(E.multiplyScalar(E.dot(P))).normalize(),A.crossVectors(y,P);let U=A.dot(l[I])<0?-1:1;o.setXYZW(I,M.x,M.y,M.z,U)}u(S,"handleVertex");for(let I=0,P=n.count;I<P;++I)c[I]&&S(I);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let i=new H,r=new H,o=new H,a=new H,l=new H,c=new H,h=new H,p=new H;if(e)for(let d=0,m=e.count;d<m;d+=3){let g=e.getX(d+0),_=e.getX(d+1),x=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,x),h.subVectors(o,r),p.subVectors(i,r),h.cross(p),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),p.subVectors(i,r),h.cross(p),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,p=a.normalized,d=new c.constructor(l.length*h),m=0,g=0;for(let _=0,x=l.length;_<x;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let b=0;b<h;b++)d[g++]=c[m++]}return new yt(d,h,p)}if(u(e,"convertBufferAttribute"),this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Ld,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,p=c.length;h<p;h++){let d=c[h],m=e(d,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,d=c.length;p<d;p++){let m=c[p];h.push(m.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],p=r[c];for(let d=0,m=p.length;d<m;d++)h.push(p[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};u(Ld,"BufferGeometry");var Tt=Ld,O0=class O0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=o0,this.updateRanges=[],this.version=0,this.uuid=hs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Q_(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Q_(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};u(O0,"InterleavedBuffer");var wo=O0;function Q_(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=hs()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}u(Q_,"getArrayKey");var Cn=new H,Nd=class Nd{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?Df(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){wc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Nd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){wc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):u0(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):h0(e,this.data.array)}};u(Nd,"InterleavedBufferAttribute");var Cr=Nd,pm=new H,gT=new H,xT=new je,F0=class F0{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=pm.subVectors(n,t).cross(gT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(pm),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||xT.getNormalMatrix(e),i=this.coplanarPoint(pm).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}};u(F0,"Plane");var kn=F0,bT=0,B0=class B0 extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bT++}),this.uuid=hs(),this.name="",this.type="Material",this.blending=al,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zm,this.blendDst=Gm,this.blendEquation=Po,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Xa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=td,this.stencilZFail=td,this.stencilZPass=td,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(u(i,"extractFromCache"),t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Pe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new kn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ve().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ve().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};u(B0,"Material");var In=B0,k0=class k0 extends In{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};u(k0,"SpriteMaterial");var Pr=k0,Da,dc=new H,Ua=new H,Oa=new H,Fa=new Ve,fc=new Ve,fM=new Ke,Nh=new H,pc=new H,Dh=new H,ev=new Ve,mm=new Ve,tv=new Ve,z0=class z0 extends Ot{constructor(e=new Pr){if(super(),this.isSprite=!0,this.type="Sprite",Da===void 0){Da=new Tt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new wo(t,5);Da.setIndex([0,1,2,0,2,3]),Da.setAttribute("position",new Cr(n,3,0,!1)),Da.setAttribute("uv",new Cr(n,2,3,!1))}this.geometry=Da,this.material=e,this.center=new Ve(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Je('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ua.setFromMatrixScale(this.matrixWorld),fM.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Oa.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ua.multiplyScalar(-Oa.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;Uh(Nh.set(-.5,-.5,0),Oa,o,Ua,i,r),Uh(pc.set(.5,-.5,0),Oa,o,Ua,i,r),Uh(Dh.set(.5,.5,0),Oa,o,Ua,i,r),ev.set(0,0),mm.set(1,0),tv.set(1,1);let a=e.ray.intersectTriangle(Nh,pc,Dh,!1,dc);if(a===null&&(Uh(pc.set(-.5,.5,0),Oa,o,Ua,i,r),mm.set(0,1),a=e.ray.intersectTriangle(Nh,Dh,pc,!1,dc),a===null))return;let l=e.ray.origin.distanceTo(dc);l<e.near||l>e.far||t.push({distance:l,point:dc.clone(),uv:Hs.getInterpolation(dc,Nh,pc,Dh,ev,mm,tv,new Ve),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};u(z0,"Sprite");var Ys=z0;function Uh(s,e,t,n,i,r){Fa.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(fc.x=r*Fa.x-i*Fa.y,fc.y=i*Fa.x+r*Fa.y):fc.copy(Fa),s.copy(e),s.x+=fc.x,s.y+=fc.y,s.applyMatrix4(fM)}u(Uh,"transformVertex");var Gs=new H,gm=new H,Oh=new H,Fh=new H,G0=class G0{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Gs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gs.copy(this.origin).addScaledVector(this.direction,t),Gs.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){gm.copy(e).add(t).multiplyScalar(.5),Oh.copy(t).sub(e).normalize(),Fh.copy(this.origin).sub(gm);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Oh),a=Fh.dot(this.direction),l=-Fh.dot(Oh),c=Fh.lengthSq(),h=Math.abs(1-o*o),p,d,m,g;if(h>0)if(p=o*l-a,d=o*a-l,g=r*h,p>=0)if(d>=-g)if(d<=g){let _=1/h;p*=_,d*=_,m=p*(p+o*d+2*a)+d*(o*p+d+2*l)+c}else d=r,p=Math.max(0,-(o*d+a)),m=-p*p+d*(d+2*l)+c;else d=-r,p=Math.max(0,-(o*d+a)),m=-p*p+d*(d+2*l)+c;else d<=-g?(p=Math.max(0,-(-o*r+a)),d=p>0?-r:Math.min(Math.max(-r,-l),r),m=-p*p+d*(d+2*l)+c):d<=g?(p=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(p=Math.max(0,-(o*r+a)),d=p>0?r:Math.min(Math.max(-r,-l),r),m=-p*p+d*(d+2*l)+c);else d=o>0?-r:r,p=Math.max(0,-(o*d+a)),m=-p*p+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(gm).addScaledVector(Oh,d),m}intersectSphere(e,t){if(e.radius<0)return null;Gs.subVectors(e.center,this.origin);let n=Gs.dot(this.direction),i=Gs.dot(Gs)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),p>=0?(a=(e.min.z-d.z)*p,l=(e.max.z-d.z)*p):(a=(e.max.z-d.z)*p,l=(e.min.z-d.z)*p),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Gs)!==null}intersectTriangle(e,t,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,p=e.x-o.x,d=e.y-o.y,m=e.z-o.z,g=t.x-o.x,_=t.y-o.y,x=t.z-o.z,b=n.x-o.x,v=n.y-o.y,w=n.z-o.z,M=Math.abs(l),A=Math.abs(c),E=Math.abs(h),y,S,I,P,D,U,X,O,Y,te,B,Z;if(M>=A&&M>=E?(I=l,U=p,Y=g,Z=b,l>=0?(y=c,S=h,P=d,D=m,X=_,O=x,te=v,B=w):(y=h,S=c,P=m,D=d,X=x,O=_,te=w,B=v)):A>=E?(I=c,U=d,Y=_,Z=v,c>=0?(y=h,S=l,P=m,D=p,X=x,O=g,te=w,B=b):(y=l,S=h,P=p,D=m,X=g,O=x,te=b,B=w)):(I=h,U=m,Y=x,Z=w,h>=0?(y=l,S=c,P=p,D=d,X=g,O=_,te=b,B=v):(y=c,S=l,P=d,D=p,X=_,O=g,te=v,B=b)),I===0)return null;let W=y/I,$=S/I,Q=1/I,ue=P-W*U,ye=D-$*U,j=X-W*Y,me=O-$*Y,le=te-W*Z,fe=B-$*Z,de=le*me-fe*j,Oe=ue*fe-ye*le,re=j*ye-me*ue;if(i){if(de<0||Oe<0||re<0)return null}else if((de<0||Oe<0||re<0)&&(de>0||Oe>0||re>0))return null;let ie=de+Oe+re;if(ie===0)return null;let he=Q*(de*U+Oe*Y+re*Z);return(ie>0?he<0:he>0)?null:this.at(he/ie,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};u(G0,"Ray");var Ir=G0,V0=class V0 extends In{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=Vm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};u(V0,"MeshBasicMaterial");var bi=V0,nv=new Ke,xo=new Ir,Bh=new Vn,iv=new H,kh=new H,zh=new H,Gh=new H,xm=new H,Vh=new H,sv=new H,Hh=new H,H0=class H0 extends Ot{constructor(e=new Tt,t=new bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Vh.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],p=r[l];h!==0&&(xm.fromBufferAttribute(p,e),o?Vh.addScaledVector(xm,h):Vh.addScaledVector(xm.sub(t),h))}t.add(Vh)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bh.copy(n.boundingSphere),Bh.applyMatrix4(r),xo.copy(e.ray).recast(e.near),!(Bh.containsPoint(xo.origin)===!1&&(xo.intersectSphere(Bh,iv)===null||xo.origin.distanceToSquared(iv)>(e.far-e.near)**2))&&(nv.copy(r).invert(),xo.copy(e.ray).applyMatrix4(nv),!(n.boundingBox!==null&&xo.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xo)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let x=d[g],b=o[x.materialIndex],v=Math.max(x.start,m.start),w=Math.min(a.count,Math.min(x.start+x.count,m.start+m.count));for(let M=v,A=w;M<A;M+=3){let E=a.getX(M),y=a.getX(M+1),S=a.getX(M+2);i=Wh(this,b,e,n,c,h,p,E,y,S),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let x=g,b=_;x<b;x+=3){let v=a.getX(x),w=a.getX(x+1),M=a.getX(x+2);i=Wh(this,o,e,n,c,h,p,v,w,M),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let x=d[g],b=o[x.materialIndex],v=Math.max(x.start,m.start),w=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let M=v,A=w;M<A;M+=3){let E=M,y=M+1,S=M+2;i=Wh(this,b,e,n,c,h,p,E,y,S),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{let g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let x=g,b=_;x<b;x+=3){let v=x,w=x+1,M=x+2;i=Wh(this,o,e,n,c,h,p,v,w,M),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}}};u(H0,"Mesh");var dt=H0;function yT(s,e,t,n,i,r,o,a){let l;if(e.side===Dn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===yi,a),l===null)return null;Hh.copy(a),Hh.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Hh);return c<t.near||c>t.far?null:{distance:c,point:Hh.clone(),object:s}}u(yT,"checkIntersection$1");function Wh(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,kh),s.getVertexPosition(l,zh),s.getVertexPosition(c,Gh);let h=yT(s,e,t,n,kh,zh,Gh,sv);if(h){let p=new H;Hs.getBarycoord(sv,kh,zh,Gh,p),i&&(h.uv=Hs.getInterpolatedAttribute(i,a,l,c,p,new Ve)),r&&(h.uv1=Hs.getInterpolatedAttribute(r,a,l,c,p,new Ve)),o&&(h.normal=Hs.getInterpolatedAttribute(o,a,l,c,p,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new H,materialIndex:0};Hs.getNormal(kh,zh,Gh,d.normal),h.face=d,h.barycoord=p}return h}u(Wh,"checkGeometryIntersection");var mc=new Et,rv=new Et,ov=new Et,_T=new Et,av=new Ke,Xh=new H,bm=new Vn,lv=new Ke,ym=new Ir,W0=class W0 extends dt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Sm,this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ei),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xh),this.boundingBox.expandByPoint(Xh)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Vn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xh),this.boundingSphere.expandByPoint(Xh)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bm.copy(this.boundingSphere),bm.applyMatrix4(i),e.ray.intersectsSphere(bm)!==!1&&(lv.copy(i).invert(),ym.copy(e.ray).applyMatrix4(lv),!(this.boundingBox!==null&&ym.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ym)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Et,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Sm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===jv?this.bindMatrixInverse.copy(this.bindMatrix).invert():He("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;rv.fromBufferAttribute(i.attributes.skinIndex,e),ov.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(mc.copy(t),t.set(0,0,0,0)):(mc.set(t.x,t.y,t.z,1),t.set(0,0,0)),mc.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=ov.getComponent(r);if(o!==0){let a=rv.getComponent(r);av.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(_T.copy(mc).applyMatrix4(av),o)}}return t.isVector4&&(t.w=mc.w),t.applyMatrix4(this.bindMatrixInverse)}};u(W0,"SkinnedMesh");var Cc=W0,X0=class X0 extends Ot{constructor(){super(),this.isBone=!0,this.type="Bone"}};u(X0,"Bone");var Qa=X0,q0=class q0 extends Jt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Ht,h=Ht,p,d){super(null,o,a,l,c,h,i,r,p,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};u(q0,"DataTexture");var Lr=q0,cv=new Ke,vT=new Ke,Dd=class Dd{constructor(e=[],t=[]){this.uuid=hs(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){He("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:vT;cv.multiplyMatrices(a,t[r]),cv.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Dd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Lr(t,e,e,Xn,ti);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(He("Skeleton: No bone found with UUID:",r),o=new Qa),this.bones.push(o),this.boneInverses.push(new Ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}};u(Dd,"Skeleton");var Pc=Dd,Y0=class Y0 extends yt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};u(Y0,"InstancedBufferAttribute");var Hn=Y0,Ba=new Ke,uv=new Ke,qh=[],hv=new ei,MT=new Ke,gc=new dt,xc=new Vn,$0=class $0 extends dt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Hn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,MT)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ba),hv.copy(e.boundingBox).applyMatrix4(Ba),this.boundingBox.union(hv)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ba),xc.copy(e.boundingSphere).applyMatrix4(Ba),this.boundingSphere.union(xc)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(gc.geometry=this.geometry,gc.material=this.material,gc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xc.copy(this.boundingSphere),xc.applyMatrix4(n),e.ray.intersectsSphere(xc)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ba),uv.multiplyMatrices(n,Ba),gc.matrixWorld=uv,gc.raycast(e,qh);for(let o=0,a=qh.length;o<a;o++){let l=qh[o];l.instanceId=r,l.object=this,t.push(l)}qh.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Hn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Lr(new Float32Array(i*this.count),i,this.count,jd,ti));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}};u($0,"InstancedMesh");var Ic=$0,bo=new Vn,ST=new Ve(.5,.5),Yh=new H,K0=class K0{constructor(e=new kn,t=new kn,n=new kn,i=new kn,r=new kn,o=new kn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xi,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],p=r[5],d=r[6],m=r[7],g=r[8],_=r[9],x=r[10],b=r[11],v=r[12],w=r[13],M=r[14],A=r[15];if(i[0].setComponents(c-o,m-h,b-g,A-v).normalize(),i[1].setComponents(c+o,m+h,b+g,A+v).normalize(),i[2].setComponents(c+a,m+p,b+_,A+w).normalize(),i[3].setComponents(c-a,m-p,b-_,A-w).normalize(),n)i[4].setComponents(l,d,x,M).normalize(),i[5].setComponents(c-l,m-d,b-x,A-M).normalize();else if(i[4].setComponents(c-l,m-d,b-x,A-M).normalize(),t===xi)i[5].setComponents(c+l,m+d,b+x,A+M).normalize();else if(t===Ya)i[5].setComponents(l,d,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bo)}intersectsSprite(e){bo.center.set(0,0,0);let t=ST.distanceTo(e.center);return bo.radius=.7071067811865476+t,bo.applyMatrix4(e.matrixWorld),this.intersectsSphere(bo)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Yh.x=i.normal.x>0?e.max.x:e.min.x,Yh.y=i.normal.y>0?e.max.y:e.min.y,Yh.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Yh)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};u(K0,"Frustum");var Nr=K0,dv=new Ke,Ud=class Ud{constructor(){this.coordinateSystem=xi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let r=t[i];dv.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Nr),n[i].setFromProjectionMatrix(dv,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Nr),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new Ud().copy(this)}};u(Ud,"FrustumArray");var dd=Ud;var Z0=class Z0 extends In{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}};u(Z0,"LineBasicMaterial");var el=Z0,fd=new H,pd=new H,fv=new Ke,bc=new Ir,$h=new Vn,_m=new H,pv=new H,J0=class J0 extends Ot{constructor(e=new Tt,t=new el){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)fd.fromBufferAttribute(t,i-1),pd.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=fd.distanceTo(pd);e.setAttribute("lineDistance",new Pt(n,1))}else He("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$h.copy(n.boundingSphere),$h.applyMatrix4(i),$h.radius+=r,e.ray.intersectsSphere($h)===!1)return;fv.copy(i).invert(),bc.copy(e.ray).applyMatrix4(fv);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=m,x=g-1;_<x;_+=c){let b=h.getX(_),v=h.getX(_+1),w=Kh(this,e,bc,l,b,v,_);w&&t.push(w)}if(this.isLineLoop){let _=h.getX(g-1),x=h.getX(m),b=Kh(this,e,bc,l,_,x,g-1);b&&t.push(b)}}else{let m=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=m,x=g-1;_<x;_+=c){let b=Kh(this,e,bc,l,_,_+1,_);b&&t.push(b)}if(this.isLineLoop){let _=Kh(this,e,bc,l,g-1,m,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};u(J0,"Line");var Eo=J0;function Kh(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(fd.fromBufferAttribute(a,i),pd.fromBufferAttribute(a,r),t.distanceSqToSegment(fd,pd,_m,pv)>n)return;_m.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(_m);if(!(c<e.near||c>e.far))return{distance:c,point:pv.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}u(Kh,"checkIntersection");var mv=new H,gv=new H,j0=class j0 extends Eo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)mv.fromBufferAttribute(t,i),gv.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+mv.distanceTo(gv);e.setAttribute("lineDistance",new Pt(n,1))}else He("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};u(j0,"LineSegments");var Lc=j0,Q0=class Q0 extends Eo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}};u(Q0,"LineLoop");var Nc=Q0,eg=class eg extends In{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};u(eg,"PointsMaterial");var tl=eg,xv=new Ke,Rm=new Ir,Zh=new Vn,Jh=new H,tg=class tg extends Ot{constructor(e=new Tt,t=new tl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zh.copy(n.boundingSphere),Zh.applyMatrix4(i),Zh.radius+=r,e.ray.intersectsSphere(Zh)===!1)return;xv.copy(i).invert(),Rm.copy(e.ray).applyMatrix4(xv);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,p=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=d,_=m;g<_;g++){let x=c.getX(g);Jh.fromBufferAttribute(p,x),bv(Jh,x,l,i,e,t,this)}}else{let d=Math.max(0,o.start),m=Math.min(p.count,o.start+o.count);for(let g=d,_=m;g<_;g++)Jh.fromBufferAttribute(p,g),bv(Jh,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};u(tg,"Points");var Dc=tg;function bv(s,e,t,n,i,r,o){let a=Rm.distanceSqToPoint(s);if(a<t){let l=new H;Rm.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}u(bv,"testPoint");var ng=class ng extends Jt{constructor(e=[],t=Io,n,i,r,o,a,l,c,h){super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};u(ng,"CubeTexture");var Uc=ng,ig=class ig extends Jt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};u(ig,"CanvasTexture");var Dr=ig;var sg=class sg extends Jt{constructor(e,t,n=Bi,i,r,o,a=Ht,l=Ht,c,h=qs,p=1){if(h!==qs&&h!==nr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:p};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Za(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}};u(sg,"DepthTexture");var $s=sg,rg=class rg extends $s{constructor(e,t=Bi,n=Io,i,r,o=Ht,a=Ht,l,c=qs){let h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,n,i,r,o,a,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}};u(rg,"CubeDepthTexture");var Oc=rg,og=class og extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};u(og,"ExternalTexture");var Fc=og,Od=class Od extends Tt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],p=[],d=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(h,3)),this.setAttribute("uv",new Pt(p,2));function g(_,x,b,v,w,M,A,E,y,S,I){let P=M/y,D=A/S,U=M/2,X=A/2,O=E/2,Y=y+1,te=S+1,B=0,Z=0,W=new H;for(let $=0;$<te;$++){let Q=$*D-X;for(let ue=0;ue<Y;ue++){let ye=ue*P-U;W[_]=ye*v,W[x]=Q*w,W[b]=O,c.push(W.x,W.y,W.z),W[_]=0,W[x]=0,W[b]=E>0?1:-1,h.push(W.x,W.y,W.z),p.push(ue/y),p.push(1-$/S),B+=1}}for(let $=0;$<S;$++)for(let Q=0;Q<y;Q++){let ue=d+Q+Y*$,ye=d+Q+Y*($+1),j=d+(Q+1)+Y*($+1),me=d+(Q+1)+Y*$;l.push(ue,ye,me),l.push(ye,j,me),Z+=6}a.addGroup(m,Z,I),m+=Z,d+=B}u(g,"buildPlane")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Od(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};u(Od,"BoxGeometry");var ss=Od;var Fd=class Fd extends Tt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],p=[],d=[],m=[],g=0,_=[],x=n/2,b=0;v(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Pt(p,3)),this.setAttribute("normal",new Pt(d,3)),this.setAttribute("uv",new Pt(m,2));function v(){let M=new H,A=new H,E=0,y=(t-e)/n;for(let S=0;S<=r;S++){let I=[],P=S/r,D=P*(t-e)+e;for(let U=0;U<=i;U++){let X=U/i,O=X*l+a,Y=Math.sin(O),te=Math.cos(O);A.x=D*Y,A.y=-P*n+x,A.z=D*te,p.push(A.x,A.y,A.z),M.set(Y,y,te).normalize(),d.push(M.x,M.y,M.z),m.push(X,1-P),I.push(g++)}_.push(I)}for(let S=0;S<i;S++)for(let I=0;I<r;I++){let P=_[I][S],D=_[I+1][S],U=_[I+1][S+1],X=_[I][S+1];(e>0||I!==0)&&(h.push(P,D,X),E+=3),(t>0||I!==r-1)&&(h.push(D,U,X),E+=3)}c.addGroup(b,E,0),b+=E}u(v,"generateTorso");function w(M){let A=g,E=new Ve,y=new H,S=0,I=M===!0?e:t,P=M===!0?1:-1;for(let U=1;U<=i;U++)p.push(0,x*P,0),d.push(0,P,0),m.push(.5,.5),g++;let D=g;for(let U=0;U<=i;U++){let O=U/i*l+a,Y=Math.cos(O),te=Math.sin(O);y.x=I*te,y.y=x*P,y.z=I*Y,p.push(y.x,y.y,y.z),d.push(0,P,0),E.x=Y*.5+.5,E.y=te*.5*P+.5,m.push(E.x,E.y),g++}for(let U=0;U<i;U++){let X=A+U,O=D+U;M===!0?h.push(O,O+1,X):h.push(O+1,O,X),S+=3}c.addGroup(b,S,M===!0?1:2),b+=S}u(w,"generateCap")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fd(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};u(Fd,"CylinderGeometry");var rs=Fd,Bd=class Bd extends rs{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Bd(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};u(Bd,"ConeGeometry");var Ks=Bd,kd=class kd extends Tt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Pt(r,3)),this.setAttribute("normal",new Pt(r.slice(),3)),this.setAttribute("uv",new Pt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let w=new H,M=new H,A=new H;for(let E=0;E<t.length;E+=3)m(t[E+0],w),m(t[E+1],M),m(t[E+2],A),l(w,M,A,v)}u(a,"subdivide");function l(v,w,M,A){let E=A+1,y=[];for(let S=0;S<=E;S++){y[S]=[];let I=v.clone().lerp(M,S/E),P=w.clone().lerp(M,S/E),D=E-S;for(let U=0;U<=D;U++)U===0&&S===E?y[S][U]=I:y[S][U]=I.clone().lerp(P,U/D)}for(let S=0;S<E;S++)for(let I=0;I<2*(E-S)-1;I++){let P=Math.floor(I/2);I%2===0?(d(y[S][P+1]),d(y[S+1][P]),d(y[S][P])):(d(y[S][P+1]),d(y[S+1][P+1]),d(y[S+1][P]))}}u(l,"subdivideFace");function c(v){let w=new H;for(let M=0;M<r.length;M+=3)w.x=r[M+0],w.y=r[M+1],w.z=r[M+2],w.normalize().multiplyScalar(v),r[M+0]=w.x,r[M+1]=w.y,r[M+2]=w.z}u(c,"applyRadius");function h(){let v=new H;for(let w=0;w<r.length;w+=3){v.x=r[w+0],v.y=r[w+1],v.z=r[w+2];let M=x(v)/2/Math.PI+.5,A=b(v)/Math.PI+.5;o.push(M,1-A)}g(),p()}u(h,"generateUVs");function p(){for(let v=0;v<o.length;v+=6){let w=o[v+0],M=o[v+2],A=o[v+4],E=Math.max(w,M,A),y=Math.min(w,M,A);E>.9&&y<.1&&(w<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),A<.2&&(o[v+4]+=1))}}u(p,"correctSeam");function d(v){r.push(v.x,v.y,v.z)}u(d,"pushVertex");function m(v,w){let M=v*3;w.x=e[M+0],w.y=e[M+1],w.z=e[M+2]}u(m,"getVertexByIndex");function g(){let v=new H,w=new H,M=new H,A=new H,E=new Ve,y=new Ve,S=new Ve;for(let I=0,P=0;I<r.length;I+=9,P+=6){v.set(r[I+0],r[I+1],r[I+2]),w.set(r[I+3],r[I+4],r[I+5]),M.set(r[I+6],r[I+7],r[I+8]),E.set(o[P+0],o[P+1]),y.set(o[P+2],o[P+3]),S.set(o[P+4],o[P+5]),A.copy(v).add(w).add(M).divideScalar(3);let D=x(A);_(E,P+0,v,D),_(y,P+2,w,D),_(S,P+4,M,D)}}u(g,"correctUVs");function _(v,w,M,A){A<0&&v.x===1&&(o[w]=v.x-1),M.x===0&&M.z===0&&(o[w]=A/2/Math.PI+.5)}u(_,"correctUV");function x(v){return Math.atan2(v.z,-v.x)}u(x,"azimuth");function b(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}u(b,"inclination")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kd(e.vertices,e.indices,e.radius,e.detail)}};u(kd,"PolyhedronGeometry");var md=kd;var zd=class zd extends md{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new zd(e.radius,e.detail)}};u(zd,"IcosahedronGeometry");var Bc=zd;var Gd=class Gd extends Tt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,p=e/a,d=t/l,m=[],g=[],_=[],x=[];for(let b=0;b<h;b++){let v=b*d-o;for(let w=0;w<c;w++){let M=w*p-r;g.push(M,-v,0),_.push(0,0,1),x.push(w/a),x.push(1-b/l)}}for(let b=0;b<l;b++)for(let v=0;v<a;v++){let w=v+c*b,M=v+c*(b+1),A=v+1+c*(b+1),E=v+1+c*b;m.push(w,M,E),m.push(M,A,E)}this.setIndex(m),this.setAttribute("position",new Pt(g,3)),this.setAttribute("normal",new Pt(_,3)),this.setAttribute("uv",new Pt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gd(e.width,e.height,e.widthSegments,e.heightSegments)}};u(Gd,"PlaneGeometry");var os=Gd;var Vd=class Vd extends Tt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],p=new H,d=new H,m=[],g=[],_=[],x=[];for(let b=0;b<=n;b++){let v=[],w=b/n,M=o+w*a,A=e*Math.cos(M),E=Math.sqrt(e*e-A*A),y=0;b===0&&o===0?y=.5/t:b===n&&l===Math.PI&&(y=-.5/t);for(let S=0;S<=t;S++){let I=S/t,P=i+I*r;p.x=-E*Math.cos(P),p.y=A,p.z=E*Math.sin(P),g.push(p.x,p.y,p.z),d.copy(p).normalize(),_.push(d.x,d.y,d.z),x.push(I+y,1-w),v.push(c++)}h.push(v)}for(let b=0;b<n;b++)for(let v=0;v<t;v++){let w=h[b][v+1],M=h[b][v],A=h[b+1][v],E=h[b+1][v+1];(b!==0||o>0)&&m.push(w,M,E),(b!==n-1||l<Math.PI)&&m.push(M,A,E)}this.setIndex(m),this.setAttribute("position",new Pt(g,3)),this.setAttribute("normal",new Pt(_,3)),this.setAttribute("uv",new Pt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};u(Vd,"SphereGeometry");var Ur=Vd;var Hd=class Hd extends Tt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],p=[],d=new H,m=new H,g=new H;for(let _=0;_<=n;_++){let x=o+_/n*a;for(let b=0;b<=i;b++){let v=b/i*r;m.x=(e+t*Math.cos(x))*Math.cos(v),m.y=(e+t*Math.cos(x))*Math.sin(v),m.z=t*Math.sin(x),c.push(m.x,m.y,m.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),g.subVectors(m,d).normalize(),h.push(g.x,g.y,g.z),p.push(b/i),p.push(_/n)}}for(let _=1;_<=n;_++)for(let x=1;x<=i;x++){let b=(i+1)*_+x-1,v=(i+1)*(_-1)+x-1,w=(i+1)*(_-1)+x,M=(i+1)*_+x;l.push(b,v,M),l.push(v,w,M)}this.setIndex(l),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(h,3)),this.setAttribute("uv",new Pt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};u(Hd,"TorusGeometry");var Zs=Hd;function Do(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(yv(i))i.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(yv(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}u(Do,"cloneUniforms");function Sn(s){let e={};for(let t=0;t<s.length;t++){let n=Do(s[t]);for(let i in n)e[i]=n[i]}return e}u(Sn,"mergeUniforms");function yv(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}u(yv,"isThreeObject");function wT(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}u(wT,"cloneUniformsGroups");function d0(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}u(d0,"getUnlitUniformColorSpace");var Uo={clone:Do,merge:Sn},ET=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ag=class ag extends In{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ET,this.fragmentShader=TT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Do(e.uniforms),this.uniformsGroups=wT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Pe().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ve().fromArray(i.value);break;case"v3":this.uniforms[n].value=new H().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Et().fromArray(i.value);break;case"m3":this.uniforms[n].value=new je().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ke().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}};u(ag,"ShaderMaterial");var Ln=ag,lg=class lg extends Ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};u(lg,"RawShaderMaterial");var gd=lg,cg=class cg extends In{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nf,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};u(cg,"MeshStandardMaterial");var ln=cg,ug=class ug extends ln{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ve(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:u(function(){return ht(2.5*(this.ior-1)/(this.ior+1),0,1)},"get"),set:u(function(t){this.ior=(1+.4*t)/(1-.4*t)},"set")}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return yo('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){yo('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};u(ug,"MeshPhysicalMaterial");var Nn=ug;var hg=class hg extends In{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};u(hg,"MeshDepthMaterial");var xd=hg,dg=class dg extends In{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};u(dg,"MeshDistanceMaterial");var bd=dg;function Tr(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}u(Tr,"convertArray");function yc(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}u(yc,"hasTangents");function AT(s){function e(i,r){return s[i]-s[r]}u(e,"compareTime");let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}u(AT,"getKeyframeOrder");function _v(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}u(_v,"sortedArray");function RT(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}u(RT,"flattenJSON");var fg=class fg{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}};u(fg,"Interpolant");var as=fg,pg=class pg extends as{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Em,endingEnd:Em}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Tm:r=e,a=2*t-n;break;case Am:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Tm:o=e,l=2*n-t;break;case Am:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(i-t),_=g*g,x=_*g,b=-d*x+2*d*_-d*g,v=(1+d)*x+(-1.5-2*d)*_+(-.5+d)*g+1,w=(-1-m)*x+(1.5+m)*_+.5*g,M=m*x-m*_;for(let A=0;A!==a;++A)r[A]=b*o[h+A]+v*o[c+A]+w*o[l+A]+M*o[p+A];return r}};u(pg,"CubicInterpolant");var yd=pg,mg=class mg extends as{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),p=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*p+o[l+d]*h;return r}};u(mg,"LinearInterpolant");var _d=mg,gg=class gg extends as{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}};u(gg,"DiscreteInterpolant");var vd=gg,xg=class xg extends as{interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,p=this.outTangents;if(!h||!p){let g=(n-t)/(i-t),_=1-g;for(let x=0;x!==a;++x)r[x]=o[c+x]*_+o[l+x]*g;return r}let d=a*2,m=e-1;for(let g=0;g!==a;++g){let _=o[c+g],x=o[l+g],b=m*d+g*2,v=p[b],w=p[b+1],M=e*d+g*2,A=h[M],E=h[M+1],y=PT(n,t,v,A,i);r[g]=pM(y,_,w,E,x)}return r}};u(xg,"BezierInterpolant");var Md=xg;function pM(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}u(pM,"cubicBezier");function CT(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}u(CT,"cubicBezierSlope");function PT(s,e,t,n,i){let r=(s-e)/(i-e);for(let o=0;o<8;o++){let a=pM(r,e,t,n,i)-s;if(Math.abs(a)<1e-10)break;let l=CT(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}u(PT,"solveBezierParameter");var bg=class bg{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Tr(t,this.TimeBufferType),this.values=Tr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Tr(e.times,Array),values:Tr(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),yc(e.settings)&&(n.settings={inTangents:Tr(e.settings.inTangents,Array),outTangents:Tr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new vd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _d(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Md(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case _o:t=this.InterpolantFactoryMethodDiscrete;break;case vo:t=this.InterpolantFactoryMethodLinear;break;case ed:t=this.InterpolantFactoryMethodSmooth;break;case wm:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return He("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _o;case this.InterpolantFactoryMethodLinear:return vo;case this.InterpolantFactoryMethodSmooth:return ed;case this.InterpolantFactoryMethodBezier:return wm}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;yc(this.settings)&&(vv(this.settings.inTangents,e),vv(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;yc(this.settings)&&(Mv(this.settings.inTangents,e),Mv(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Je("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Je("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Je("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Je("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&BE(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Je("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ed,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let p=a*n,d=p-n,m=p+n;for(let g=0;g!==n;++g){let _=t[p+g];if(_!==t[d+g]||_!==t[m+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let p=a*n,d=o*n;for(let m=0;m!==n;++m)t[d+m]=t[p+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,yc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};u(bg,"KeyframeTrack");var Wn=bg;function vv(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}u(vv,"shiftTangentTimes");function Mv(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}u(Mv,"scaleTangentTimes");Wn.prototype.ValueTypeName="";Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=vo;var yg=class yg extends Wn{constructor(e,t,n){super(e,t,n)}};u(yg,"BooleanKeyframeTrack");var Js=yg;Js.prototype.ValueTypeName="bool";Js.prototype.ValueBufferType=Array;Js.prototype.DefaultInterpolation=_o;Js.prototype.InterpolantFactoryMethodLinear=void 0;Js.prototype.InterpolantFactoryMethodSmooth=void 0;var _g=class _g extends Wn{constructor(e,t,n,i){super(e,t,n,i)}};u(_g,"ColorKeyframeTrack");var kc=_g;kc.prototype.ValueTypeName="color";var vg=class vg extends Wn{constructor(e,t,n,i){super(e,t,n,i)}};u(vg,"NumberKeyframeTrack");var js=vg;js.prototype.ValueTypeName="number";var Mg=class Mg extends as{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)an.slerpFlat(r,0,o,c-a,o,c,l);return r}};u(Mg,"QuaternionLinearInterpolant");var Sd=Mg,Sg=class Sg extends Wn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Sd(this.times,this.values,this.getValueSize(),e)}};u(Sg,"QuaternionKeyframeTrack");var Qs=Sg;Qs.prototype.ValueTypeName="quaternion";Qs.prototype.InterpolantFactoryMethodSmooth=void 0;var wg=class wg extends Wn{constructor(e,t,n){super(e,t,n)}};u(wg,"StringKeyframeTrack");var er=wg;er.prototype.ValueTypeName="string";er.prototype.ValueBufferType=Array;er.prototype.DefaultInterpolation=_o;er.prototype.InterpolantFactoryMethodLinear=void 0;er.prototype.InterpolantFactoryMethodSmooth=void 0;var Eg=class Eg extends Wn{constructor(e,t,n,i){super(e,t,n,i)}};u(Eg,"VectorKeyframeTrack");var Or=Eg;Or.prototype.ValueTypeName="vector";var Tg=class Tg{constructor(e="",t=-1,n=[],i=Qv){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=hs(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(LT(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Wn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=AT(l);l=_v(l,1,h),c=_v(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new js(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let p=h[1],d=i[p];d||(i[p]=d=[]),d.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};u(Tg,"AnimationClip");var zc=Tg;function IT(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return js;case"vector":case"vector2":case"vector3":case"vector4":return Or;case"color":return kc;case"quaternion":return Qs;case"bool":case"boolean":return Js;case"string":return er}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}u(IT,"getTrackTypeForValueTypeName");function LT(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=IT(s.type);if(s.times===void 0){let n=[],i=[];RT(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),yc(s.settings)&&(t.settings={inTangents:Tr(s.settings.inTangents,Float32Array),outTangents:Tr(s.settings.outTangents,Float32Array)}),t}u(LT,"parseKeyframeTrack");var ts={enabled:!1,files:{},add:u(function(s,e){this.enabled!==!1&&(Sv(s)||(this.files[s]=e))},"add"),get:u(function(s){if(this.enabled!==!1&&!Sv(s))return this.files[s]},"get"),remove:u(function(s){delete this.files[s]},"remove"),clear:u(function(){this.files={}},"clear")};function Sv(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}u(Sv,"isBlobURL");var Ag=class Ag{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,d=c.length;p<d;p+=2){let m=c[p],g=c[p+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}};u(Ag,"LoadingManager");var nl=Ag,mM=new nl,Rg=class Rg{constructor(e){this.manager=e!==void 0?e:mM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};u(Rg,"Loader");var ls=Rg;ls.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vs={},Cg=class Cg extends Error{constructor(e,t){super(e),this.response=t}};u(Cg,"HttpError");var Cm=Cg,Pg=class Pg extends ls{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ts.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Vs[e]!==void 0){Vs[e].push({onLoad:t,onProgress:n,onError:i});return}Vs[e]=[],Vs[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&He("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Vs[e],p=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=d?parseInt(d):0,g=m!==0,_=0,x=new ReadableStream({start(b){v();function v(){p.read().then(({done:w,value:M})=>{if(w)b.close();else{_+=M.byteLength;let A=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:m});for(let E=0,y=h.length;E<y;E++){let S=h[E];S.onProgress&&S.onProgress(A)}b.enqueue(M),v()}},w=>{b.error(w)})}u(v,"readData")}});return new Response(x)}else throw new Cm(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let p=/charset="?([^;"\s]*)"?/i.exec(a),d=p&&p[1]?p[1].toLowerCase():void 0,m=new TextDecoder(d);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{ts.add(`file:${e}`,c);let h=Vs[e];delete Vs[e];for(let p=0,d=h.length;p<d;p++){let m=h[p];m.onLoad&&m.onLoad(c)}}).catch(c=>{let h=Vs[e];if(h===void 0)throw this.manager.itemError(e),c;delete Vs[e];for(let p=0,d=h.length;p<d;p++){let m=h[p];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};u(Pg,"FileLoader");var il=Pg;var ka=new WeakMap,Ig=class Ig extends ls{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ts.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let p=ka.get(o);p===void 0&&(p=[],ka.set(o,p)),p.push({onLoad:t,onError:i})}return o}let a=$a("img");function l(){h(),t&&t(this);let p=ka.get(this)||[];for(let d=0;d<p.length;d++){let m=p[d];m.onLoad&&m.onLoad(this)}ka.delete(this),r.manager.itemEnd(e)}u(l,"onImageLoad");function c(p){h(),i&&i(p),ts.remove(`image:${e}`);let d=ka.get(this)||[];for(let m=0;m<d.length;m++){let g=d[m];g.onError&&g.onError(p)}ka.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}u(c,"onImageError");function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return u(h,"removeEventListeners"),a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ts.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};u(Ig,"ImageLoader");var wd=Ig;var Lg=class Lg extends ls{constructor(e){super(e)}load(e,t,n,i){let r=new Jt,o=new wd(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}};u(Lg,"TextureLoader");var Gc=Lg,Ng=class Ng extends Ot{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};u(Ng,"Light");var To=Ng,Dg=class Dg extends To{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}};u(Dg,"HemisphereLight");var Vc=Dg,vm=new Ke,wv=new H,Ev=new H,Ug=class Ug{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nr,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;wv.setFromMatrixPosition(e.matrixWorld),t.position.copy(wv),Ev.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ev),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){vm.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(vm,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===Ya||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(vm)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};u(Ug,"LightShadow");var sl=Ug,jh=new H,Qh=new an,es=new H,Og=class Og extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(jh,Qh,es),es.x===1&&es.y===1&&es.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jh,Qh,es.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(jh,Qh,es),es.x===1&&es.y===1&&es.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jh,Qh,es.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};u(Og,"Camera");var Hc=Og,Er=new H,Tv=new Ve,Av=new Ve,Fg=class Fg extends Hc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Mo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_c*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mo*2*Math.atan(Math.tan(_c*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Er.x,Er.y).multiplyScalar(-e/Er.z),Er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Er.x,Er.y).multiplyScalar(-e/Er.z)}getViewSize(e,t){return this.getViewBounds(e,Tv,Av),t.subVectors(Av,Tv)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(_c*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};u(Fg,"PerspectiveCamera");var Zt=Fg,Bg=class Bg extends sl{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Mo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}};u(Bg,"SpotLightShadow");var Pm=Bg,kg=class kg extends To{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Pm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}};u(kg,"SpotLight");var Wc=kg,zg=class zg extends sl{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0}};u(zg,"PointLightShadow");var Im=zg,Gg=class Gg extends To{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Im}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}};u(Gg,"PointLight");var Xc=Gg,Vg=class Vg extends Hc{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};u(Vg,"OrthographicCamera");var Ao=Vg,Hg=class Hg extends sl{constructor(){super(new Ao(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};u(Hg,"DirectionalLightShadow");var Lm=Hg,Wg=class Wg extends To{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new Lm}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};u(Wg,"DirectionalLight");var Ro=Wg;var Xg=class Xg{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};u(Xg,"LoaderUtils");var tr=Xg,qg=class qg extends Tt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};u(qg,"InstancedBufferGeometry");var qc=qg;var Mm=new WeakMap,Yg=class Yg extends ls{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&He("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&He("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ts.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{Mm.has(o)===!0?(i&&i(Mm.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ts.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Mm.set(l,c),ts.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ts.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};u(Yg,"ImageBitmapLoader");var Yc=Yg;var za=-90,Ga=1,$g=class $g extends Ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Zt(za,Ga,e,t);i.layers=this.layers,this.add(i);let r=new Zt(za,Ga,e,t);r.layers=this.layers,this.add(r);let o=new Zt(za,Ga,e,t);o.layers=this.layers,this.add(o);let a=new Zt(za,Ga,e,t);a.layers=this.layers,this.add(a);let l=new Zt(za,Ga,e,t);l.layers=this.layers,this.add(l);let c=new Zt(za,Ga,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===xi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ya)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}};u($g,"CubeCamera");var rl=$g,Kg=class Kg extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};u(Kg,"ArrayCamera");var Ed=Kg;var f0="\\[\\]\\.:\\/",NT=new RegExp("["+f0+"]","g"),p0="[^"+f0+"]",DT="[^"+f0.replace("\\.","")+"]",UT=/((?:WC+[\/:])*)/.source.replace("WC",p0),OT=/(WCOD+)?/.source.replace("WCOD",DT),FT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",p0),BT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",p0),kT=new RegExp("^"+UT+OT+FT+BT+"$"),zT=["material","materials","bones","map"],Zg=class Zg{constructor(e,t,n){let i=n||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}};u(Zg,"Composite");var Nm=Zg,Rr=class Rr{constructor(e,t,n){this.path=t,this.parsedPath=n||Rr.parseTrackName(t),this.node=Rr.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Rr.Composite(e,t,n):new Rr(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(NT,"")}static parseTrackName(e){let t=kT.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);zT.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=u(function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},"searchNodeSubtree"),i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=Rr.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){He("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;Je("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};u(Rr,"PropertyBinding");var Ct=Rr;Ct.Composite=Nm;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var aN=new Float32Array(1);var Rv=new Ke,Jg=class Jg{constructor(e,t,n=0,i=1/0){this.ray=new Ir(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ja,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Rv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rv),this}intersectObject(e,t=!0,n=[]){return Dm(e,this,n,t),n.sort(Cv),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Dm(e[i],this,n,t);return n.sort(Cv),n}};u(Jg,"Raycaster");var $c=Jg;function Cv(s,e){return s.distance-e.distance}u(Cv,"ascSort");function Dm(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Dm(r[o],e,t,!0)}}u(Dm,"intersect");var Wd=class Wd{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};u(Wd,"Matrix2"),Wd.prototype.isMatrix2=!0;var Um=Wd;function m0(s,e,t,n){let i=GT(n);switch(t){case e0:return s*e;case jd:return s*e/i.components*i.byteLength;case Qd:return s*e/i.components*i.byteLength;case us:return s*e*2/i.components*i.byteLength;case ef:return s*e*2/i.components*i.byteLength;case t0:return s*e*3/i.components*i.byteLength;case Xn:return s*e*4/i.components*i.byteLength;case tf:return s*e*4/i.components*i.byteLength;case Jc:case jc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Qc:case eu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sf:case of:return Math.max(s,16)*Math.max(e,8)/4;case nf:case rf:return Math.max(s,8)*Math.max(e,8)/2;case af:case lf:case uf:case hf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case cf:case tu:case df:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ff:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case mf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case gf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case xf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case bf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case yf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case _f:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case vf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Mf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Sf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case wf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ef:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Tf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Af:case Rf:case Cf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Pf:case If:return Math.ceil(s/4)*Math.ceil(e/4)*8;case nu:case Lf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}u(m0,"getByteLength");function GT(s){switch(s){case Mn:case Zm:return{byteLength:1,components:1};case ul:case Jm:case ni:return{byteLength:2,components:1};case Zd:case Jd:return{byteLength:2,components:4};case Bi:case Kd:case ti:return{byteLength:4,components:1};case jm:case Qm:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}u(GT,"getTextureTypeByteLength");typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function FM(){let s=null,e=!1,t=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),t(r,o)}return u(i,"onAnimationFrame"),{start:u(function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},"start"),stop:u(function(){s!==null&&s.cancelAnimationFrame(n),e=!1},"stop"),setAnimationLoop:u(function(r){t=r},"setAnimationLoop"),setContext:u(function(r){s=r},"setContext")}}u(FM,"WebGLAnimation");function HT(s){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,p=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=s.SHORT;else if(c instanceof Uint32Array)m=s.UNSIGNED_INT;else if(c instanceof Int32Array)m=s.INT;else if(c instanceof Int8Array)m=s.BYTE;else if(c instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}u(t,"createBuffer");function n(a,l,c){let h=l.array,p=l.updateRanges;if(s.bindBuffer(c,a),p.length===0)s.bufferSubData(c,0,h);else{p.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<p.length;m++){let g=p[d],_=p[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,p[d]=_)}p.length=d+1;for(let m=0,g=p.length;m<g;m++){let _=p[m];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}u(n,"updateBuffer");function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}u(i,"get");function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}u(r,"remove");function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return u(o,"update"),{get:i,remove:r,update:o}}u(HT,"WebGLAttributes");var WT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,XT=`#ifdef USE_ALPHAHASH
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
#endif`,qT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$T=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,KT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZT=`#ifdef USE_AOMAP
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
#endif`,JT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jT=`#ifdef USE_BATCHING
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
#endif`,QT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iA=`#ifdef USE_IRIDESCENCE
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
#endif`,sA=`#ifdef USE_BUMPMAP
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
#endif`,rA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,oA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,uA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,fA=`#define PI 3.141592653589793
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
} // validated`,pA=`vec3 transformedNormal = objectNormal;
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
#endif`,mA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yA="gl_FragColor = linearToOutputTexel( gl_FragColor );",_A=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vA=`#ifdef USE_ENVMAP
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
#endif`,MA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,SA=`#ifdef USE_ENVMAP
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
#endif`,wA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,EA=`#ifdef USE_ENVMAP
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
#endif`,TA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,RA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PA=`#ifdef USE_GRADIENTMAP
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
}`,IA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DA=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,UA=`#ifdef USE_ENVMAP
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
#endif`,OA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zA=`PhysicalMaterial material;
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
#endif`,GA=`uniform sampler2D dfgLUT;
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
}`,VA=`
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
#endif`,HA=`#if defined( RE_IndirectDiffuse )
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
#endif`,WA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XA=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,qA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$A=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,QA=`#if defined( USE_POINTS_UV )
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
#endif`,eR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iR=`#if defined( USE_MORPHCOLORS )
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
#endif`,sR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rR=`#ifdef USE_MORPHTARGETS
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
#endif`,oR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,dR=`#ifdef USE_NORMALMAP
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
#endif`,fR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_R=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,MR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ER=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,TR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,AR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,RR=`float getShadowMask() {
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
}`,CR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PR=`#ifdef USE_SKINNING
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
#endif`,IR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LR=`#ifdef USE_SKINNING
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
#endif`,NR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,FR=`#ifdef USE_TRANSMISSION
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
#endif`,BR=`#ifdef USE_TRANSMISSION
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
#endif`,kR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,HR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WR=`uniform sampler2D t2D;
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
}`,XR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qR=`uniform float backgroundBlurriness;
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
}`,YR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$R=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KR=`#include <common>
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
}`,ZR=`#if DEPTH_PACKING == 3200
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
}`,JR=`#define DISTANCE
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
}`,jR=`#define DISTANCE
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
}`,QR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tC=`uniform float scale;
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
}`,nC=`uniform vec3 diffuse;
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
}`,iC=`#include <common>
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
}`,sC=`uniform vec3 diffuse;
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
}`,rC=`#define LAMBERT
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
}`,oC=`#define LAMBERT
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
}`,aC=`#define MATCAP
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
}`,lC=`#define MATCAP
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
}`,cC=`#define NORMAL
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
}`,uC=`#define NORMAL
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
}`,hC=`#define PHONG
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
}`,dC=`#define PHONG
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
}`,fC=`#define STANDARD
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
}`,pC=`#define STANDARD
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
}`,mC=`#define TOON
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
}`,gC=`#define TOON
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
}`,xC=`uniform float size;
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
}`,bC=`uniform vec3 diffuse;
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
}`,yC=`#include <common>
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
}`,_C=`uniform vec3 color;
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
}`,vC=`uniform float rotation;
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
}`,MC=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:WT,alphahash_pars_fragment:XT,alphamap_fragment:qT,alphamap_pars_fragment:YT,alphatest_fragment:$T,alphatest_pars_fragment:KT,aomap_fragment:ZT,aomap_pars_fragment:JT,batching_pars_vertex:jT,batching_vertex:QT,begin_vertex:eA,beginnormal_vertex:tA,bsdfs:nA,iridescence_fragment:iA,bumpmap_pars_fragment:sA,clipping_planes_fragment:rA,clipping_planes_pars_fragment:oA,clipping_planes_pars_vertex:aA,clipping_planes_vertex:lA,color_fragment:cA,color_pars_fragment:uA,color_pars_vertex:hA,color_vertex:dA,common:fA,defaultnormal_vertex:pA,displacementmap_pars_vertex:mA,displacementmap_vertex:gA,emissivemap_fragment:xA,emissivemap_pars_fragment:bA,colorspace_fragment:yA,colorspace_pars_fragment:_A,envmap_fragment:vA,envmap_common_pars_fragment:MA,envmap_pars_fragment:SA,envmap_pars_vertex:wA,envmap_physical_pars_fragment:UA,envmap_vertex:EA,fog_vertex:TA,fog_pars_vertex:AA,fog_fragment:RA,fog_pars_fragment:CA,gradientmap_pars_fragment:PA,lightmap_pars_fragment:IA,lights_lambert_fragment:LA,lights_lambert_pars_fragment:NA,lights_pars_begin:DA,lights_toon_fragment:OA,lights_toon_pars_fragment:FA,lights_phong_fragment:BA,lights_phong_pars_fragment:kA,lights_physical_fragment:zA,lights_physical_pars_fragment:GA,lights_fragment_begin:VA,lights_fragment_maps:HA,lights_fragment_end:WA,lightprobes_pars_fragment:XA,logdepthbuf_fragment:qA,logdepthbuf_pars_fragment:YA,logdepthbuf_pars_vertex:$A,logdepthbuf_vertex:KA,map_fragment:ZA,map_pars_fragment:JA,map_particle_fragment:jA,map_particle_pars_fragment:QA,metalnessmap_fragment:eR,metalnessmap_pars_fragment:tR,morphinstance_vertex:nR,morphcolor_vertex:iR,morphnormal_vertex:sR,morphtarget_pars_vertex:rR,morphtarget_vertex:oR,normal_fragment_begin:aR,normal_fragment_maps:lR,normal_pars_fragment:cR,normal_pars_vertex:uR,normal_vertex:hR,normalmap_pars_fragment:dR,clearcoat_normal_fragment_begin:fR,clearcoat_normal_fragment_maps:pR,clearcoat_pars_fragment:mR,iridescence_pars_fragment:gR,opaque_fragment:xR,packing:bR,premultiplied_alpha_fragment:yR,project_vertex:_R,dithering_fragment:vR,dithering_pars_fragment:MR,roughnessmap_fragment:SR,roughnessmap_pars_fragment:wR,shadowmap_pars_fragment:ER,shadowmap_pars_vertex:TR,shadowmap_vertex:AR,shadowmask_pars_fragment:RR,skinbase_vertex:CR,skinning_pars_vertex:PR,skinning_vertex:IR,skinnormal_vertex:LR,specularmap_fragment:NR,specularmap_pars_fragment:DR,tonemapping_fragment:UR,tonemapping_pars_fragment:OR,transmission_fragment:FR,transmission_pars_fragment:BR,uv_pars_fragment:kR,uv_pars_vertex:zR,uv_vertex:GR,worldpos_vertex:VR,background_vert:HR,background_frag:WR,backgroundCube_vert:XR,backgroundCube_frag:qR,cube_vert:YR,cube_frag:$R,depth_vert:KR,depth_frag:ZR,distance_vert:JR,distance_frag:jR,equirect_vert:QR,equirect_frag:eC,linedashed_vert:tC,linedashed_frag:nC,meshbasic_vert:iC,meshbasic_frag:sC,meshlambert_vert:rC,meshlambert_frag:oC,meshmatcap_vert:aC,meshmatcap_frag:lC,meshnormal_vert:cC,meshnormal_frag:uC,meshphong_vert:hC,meshphong_frag:dC,meshphysical_vert:fC,meshphysical_frag:pC,meshtoon_vert:mC,meshtoon_frag:gC,points_vert:xC,points_frag:bC,shadow_vert:yC,shadow_frag:_C,sprite_vert:vC,sprite_frag:MC},Ce={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},fs={basic:{uniforms:Sn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Sn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Pe(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Sn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Sn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Sn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Pe(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Sn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Sn([Ce.points,Ce.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Sn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Sn([Ce.common,Ce.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Sn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Sn([Ce.sprite,Ce.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:Sn([Ce.common,Ce.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:Sn([Ce.lights,Ce.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};fs.physical={uniforms:Sn([fs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};var Of={r:0,b:0,g:0},SC=new Ke,BM=new je;BM.set(-1,0,0,0,1,0,0,0,1);function wC(s,e,t,n,i,r){let o=new Pe(0),a=i===!0?0:1,l,c,h=null,p=0,d=null;function m(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){let M=v.backgroundBlurriness>0;w=e.get(w,M)}return w}u(m,"getBackground");function g(v){let w=!1,M=m(v);M===null?x(o,a):M&&M.isColor&&(x(M,1),w=!0);let A=s.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}u(g,"render");function _(v,w){let M=m(w);M&&M.isCubeTexture?(c===void 0&&(c=new dt(new ss(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:Do(fs.backgroundCube.uniforms),vertexShader:fs.backgroundCube.vertexShader,fragmentShader:fs.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,E,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:u(function(){return this.uniforms.envMap.value},"get")}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(SC.makeRotationFromEuler(w.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(BM),c.material.toneMapped=lt.getTransfer(M.colorSpace)!==St,(h!==M||p!==M.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,p=M.version,d=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new dt(new os(2,2),new Ln({name:"BackgroundMaterial",uniforms:Do(fs.background.uniforms),vertexShader:fs.background.vertexShader,fragmentShader:fs.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:u(function(){return this.uniforms.t2D.value},"get")}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=lt.getTransfer(M.colorSpace)!==St,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||p!==M.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,p=M.version,d=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}u(_,"addToRenderList");function x(v,w){v.getRGB(Of,d0(s)),t.buffers.color.setClear(Of.r,Of.g,Of.b,w,r)}u(x,"setClear");function b(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return u(b,"dispose"),{getClearColor:u(function(){return o},"getClearColor"),setClearColor:u(function(v,w=1){o.set(v),a=w,x(o,a)},"setClearColor"),getClearAlpha:u(function(){return a},"getClearAlpha"),setClearAlpha:u(function(v){a=v,x(o,a)},"setClearAlpha"),render:g,addToRenderList:_,dispose:b}}u(wC,"WebGLBackground");function EC(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(D,U,X,O,Y){let te=!1,B=p(D,O,X,U);r!==B&&(r=B,c(r.object)),te=m(D,O,X,Y),te&&g(D,O,X,Y),Y!==null&&e.update(Y,s.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,M(D,U,X,O),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}u(a,"setup");function l(){return s.createVertexArray()}u(l,"createVertexArrayObject");function c(D){return s.bindVertexArray(D)}u(c,"bindVertexArrayObject");function h(D){return s.deleteVertexArray(D)}u(h,"deleteVertexArrayObject");function p(D,U,X,O){let Y=O.wireframe===!0,te=n[U.id];te===void 0&&(te={},n[U.id]=te);let B=D.isInstancedMesh===!0?D.id:0,Z=te[B];Z===void 0&&(Z={},te[B]=Z);let W=Z[X.id];W===void 0&&(W={},Z[X.id]=W);let $=W[Y];return $===void 0&&($=d(l()),W[Y]=$),$}u(p,"getBindingState");function d(D){let U=[],X=[],O=[];for(let Y=0;Y<t;Y++)U[Y]=0,X[Y]=0,O[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:X,attributeDivisors:O,object:D,attributes:{},index:null}}u(d,"createBindingState");function m(D,U,X,O){let Y=r.attributes,te=U.attributes,B=0,Z=X.getAttributes();for(let W in Z)if(Z[W].location>=0){let Q=Y[W],ue=te[W];if(ue===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(ue=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(ue=D.instanceColor)),Q===void 0||Q.attribute!==ue||ue&&Q.data!==ue.data)return!0;B++}return r.attributesNum!==B||r.index!==O}u(m,"needsUpdate");function g(D,U,X,O){let Y={},te=U.attributes,B=0,Z=X.getAttributes();for(let W in Z)if(Z[W].location>=0){let Q=te[W];Q===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor));let ue={};ue.attribute=Q,Q&&Q.data&&(ue.data=Q.data),Y[W]=ue,B++}r.attributes=Y,r.attributesNum=B,r.index=O}u(g,"saveCache");function _(){let D=r.newAttributes;for(let U=0,X=D.length;U<X;U++)D[U]=0}u(_,"initAttributes");function x(D){b(D,0)}u(x,"enableAttribute");function b(D,U){let X=r.newAttributes,O=r.enabledAttributes,Y=r.attributeDivisors;X[D]=1,O[D]===0&&(s.enableVertexAttribArray(D),O[D]=1),Y[D]!==U&&(s.vertexAttribDivisor(D,U),Y[D]=U)}u(b,"enableAttributeAndDivisor");function v(){let D=r.newAttributes,U=r.enabledAttributes;for(let X=0,O=U.length;X<O;X++)U[X]!==D[X]&&(s.disableVertexAttribArray(X),U[X]=0)}u(v,"disableUnusedAttributes");function w(D,U,X,O,Y,te,B){B===!0?s.vertexAttribIPointer(D,U,X,Y,te):s.vertexAttribPointer(D,U,X,O,Y,te)}u(w,"vertexAttribPointer");function M(D,U,X,O){_();let Y=O.attributes,te=X.getAttributes(),B=U.defaultAttributeValues;for(let Z in te){let W=te[Z];if(W.location>=0){let $=Y[Z];if($===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&($=D.instanceColor)),$!==void 0){let Q=$.normalized,ue=$.itemSize,ye=e.get($);if(ye===void 0)continue;let j=ye.buffer,me=ye.type,le=ye.bytesPerElement,fe=me===s.INT||me===s.UNSIGNED_INT||$.gpuType===Kd;if($.isInterleavedBufferAttribute){let de=$.data,Oe=de.isInterleavedBuffer===!0?de.stride:de.itemSize,re=$.offset;if(de.isInstancedInterleavedBuffer||de.isInstancedBufferAttribute){for(let ie=0;ie<W.locationSize;ie++)b(W.location+ie,de.meshPerAttribute);D.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ie=0;ie<W.locationSize;ie++)x(W.location+ie);s.bindBuffer(s.ARRAY_BUFFER,j);for(let ie=0;ie<W.locationSize;ie++)w(W.location+ie,ue/W.locationSize,me,Q,Oe*le,(re+ue/W.locationSize*ie)*le,fe)}else{if($.isInstancedBufferAttribute){for(let de=0;de<W.locationSize;de++)b(W.location+de,$.meshPerAttribute);D.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let de=0;de<W.locationSize;de++)x(W.location+de);s.bindBuffer(s.ARRAY_BUFFER,j);for(let de=0;de<W.locationSize;de++)w(W.location+de,ue/W.locationSize,me,Q,ue*le,ue/W.locationSize*de*le,fe)}}else if(B!==void 0){let Q=B[Z];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(W.location,Q);break;case 3:s.vertexAttrib3fv(W.location,Q);break;case 4:s.vertexAttrib4fv(W.location,Q);break;default:s.vertexAttrib1fv(W.location,Q)}}}}v()}u(M,"setupVertexAttributes");function A(){I();for(let D in n){let U=n[D];for(let X in U){let O=U[X];for(let Y in O){let te=O[Y];for(let B in te)h(te[B].object),delete te[B];delete O[Y]}}delete n[D]}}u(A,"dispose");function E(D){if(n[D.id]===void 0)return;let U=n[D.id];for(let X in U){let O=U[X];for(let Y in O){let te=O[Y];for(let B in te)h(te[B].object),delete te[B];delete O[Y]}}delete n[D.id]}u(E,"releaseStatesOfGeometry");function y(D){for(let U in n){let X=n[U];for(let O in X){let Y=X[O];if(Y[D.id]===void 0)continue;let te=Y[D.id];for(let B in te)h(te[B].object),delete te[B];delete Y[D.id]}}}u(y,"releaseStatesOfProgram");function S(D){for(let U in n){let X=n[U],O=D.isInstancedMesh===!0?D.id:0,Y=X[O];if(Y!==void 0){for(let te in Y){let B=Y[te];for(let Z in B)h(B[Z].object),delete B[Z];delete Y[te]}delete X[O],Object.keys(X).length===0&&delete n[U]}}}u(S,"releaseStatesOfObject");function I(){P(),o=!0,r!==i&&(r=i,c(r.object))}u(I,"reset");function P(){i.geometry=null,i.program=null,i.wireframe=!1}return u(P,"resetDefaultState"),{setup:a,reset:I,resetDefaultState:P,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:y,initAttributes:_,enableAttribute:x,disableUnusedAttributes:v}}u(EC,"WebGLBindingStates");function TC(s,e,t){let n;function i(l){n=l}u(i,"setMode");function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}u(r,"render");function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}u(o,"renderInstances");function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let m=0;m<h;m++)d+=c[m];t.update(d,n,1)}u(a,"renderMultiDraw"),this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}u(TC,"WebGLBufferRenderer");function AC(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let y=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}u(r,"getMaxAnisotropy");function o(y){return!(y!==Xn&&n.convert(y)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}u(o,"textureFormatReadable");function a(y){let S=y===ni&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==Mn&&y!==ti&&!S&&n.convert(y)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}u(a,"textureTypeReadable");function l(y){if(y==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}u(l,"getMaxPrecision");let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(He("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&p===!1;t.reversedDepthBuffer===!0&&p===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&p===!0&&He("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),b=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:x,maxAttributes:b,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:M,maxSamples:A,samples:E}}u(AC,"WebGLCapabilities");function RC(s){let e=this,t=null,n=0,i=!1,r=!1,o=new kn,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){let m=p.length!==0||d||n!==0||i;return i=d,n=p.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){t=h(p,d,0)},this.setState=function(p,d,m){let g=p.clippingPlanes,_=p.clipIntersection,x=p.clipShadows,b=s.get(p);if(!i||g===null||g.length===0||r&&!x)r?h(null):c();else{let v=r?0:n,w=v*4,M=b.clippingState||null;l.value=M,M=h(g,d,w,m);for(let A=0;A!==w;++A)M[A]=t[A];b.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}u(c,"resetGlobalState");function h(p,d,m,g){let _=p!==null?p.length:0,x=null;if(_!==0){if(x=l.value,g!==!0||x===null){let b=m+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(x===null||x.length<b)&&(x=new Float32Array(b));for(let w=0,M=m;w!==_;++w,M+=4)o.copy(p[w]).applyMatrix4(v,a),o.normal.toArray(x,M),x[M+3]=o.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,x}u(h,"projectPlanes")}u(RC,"WebGLClipping");var lx=class lx extends jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Uc(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ss(5,5,5),r=new Ln({name:"CubemapFromEquirect",uniforms:Do(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dn,blending:Co});r.uniforms.tEquirect.value=t;let o=new dt(i,r),a=t.minFilter;return t.minFilter===vn&&(t.minFilter=zt),new rl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}};u(lx,"WebGLCubeRenderTarget");var ou=lx,gM=256,CC=3,PC=20,kM=256,zM=16,IC=3,LC=new H,NC=new Pe,zf=class zf{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new rl(1,10,null),this._boxMesh=new dt(new ss(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=LC}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,d=l.autoClearColor,m=l.autoClearDepth,g=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(NC));let x=new rl(n,i,h);return x.position.copy(a),x.update(l,e),l.autoClear=p,l.autoClearColor=d,l.autoClearDepth=m,l.autoClearStencil=g,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(gM,c0(e))}_fromTexture(e,t){e.mapping===Io||e.mapping===ll?this._setSize(e.image.length===0?gM:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=xM(e,!1,!1),n=Math.log2(e)-CC;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=xM(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Io||e.mapping===ll?(this._cubemapMaterial===null&&(this._cubemapMaterial=yM()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=bM()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=DC(),this._integrationMaterial=UC());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/zM);for(let o=0;o<=n;o++){let a=zf.lodToRoughness(o,n);if(o>n-IC)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(kM*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=OC());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}};u(zf,"PMREMGenerator");var Bf=zf;function xM(s,e,t){return new ou(s,{minFilter:vn,generateMipmaps:e,type:ni,colorSpace:Pn,depthBuffer:t})}u(xM,"_createRenderTarget");function au(s,e,t){return new Ln({name:s,uniforms:e,vertexShader:at.cube_vert,fragmentShader:t,side:Dn,blending:Co,depthTest:!1,depthWrite:!1})}u(au,"_getMaterial");function DC(){return au("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${kM}u

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
	`)}u(DC,"_getGGXMaterial");function UC(){return au("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:zM}},`

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
	`)}u(UC,"_getIntegrationMaterial");function OC(){return au("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${PC}
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
	`)}u(OC,"_getBlurMaterial");function bM(){return au("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}u(bM,"_getEquirectMaterial");function yM(){return au("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}u(yM,"_getCubemapMaterial");function FC(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,m=!1){return d==null?null:m?o(d):r(d)}u(i,"get");function r(d){if(d&&d.isTexture){let m=d.mapping;if(m===qd||m===Yd)if(e.has(d)){let g=e.get(d).texture;return a(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let _=new ou(g.height);return _.fromEquirectangularTexture(s,d),e.set(d,_),d.addEventListener("dispose",c),a(_.texture,d.mapping)}else return null}}return d}u(r,"getCube");function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let m=d.mapping,g=m===qd||m===Yd,_=m===Io||m===ll;if(g||_){let x=t.get(d),b=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==b)return n===null&&(n=new Bf(s)),x=g?n.fromEquirectangular(d,x):n.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),x.texture;if(x!==void 0)return x.texture;{let v=d.image;return g&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new Bf(s)),x=g?n.fromEquirectangular(d):n.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),d.addEventListener("dispose",h),x.texture):null}}}return d}u(o,"getPMREM");function a(d,m){return m===qd?d.mapping=Io:m===Yd&&(d.mapping=ll),d}u(a,"mapTextureMapping");function l(d){let m=0,g=6;for(let _=0;_<g;_++)d[_]!==void 0&&m++;return m===g}u(l,"isCubeTextureComplete");function c(d){let m=d.target;m.removeEventListener("dispose",c);let g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}u(c,"onCubemapDispose");function h(d){let m=d.target;m.removeEventListener("dispose",h);let g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}u(h,"onPMREMDispose");function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return u(p,"dispose"),{get:i,dispose:p}}u(FC,"WebGLEnvironments");function BC(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return u(t,"getExtension"),{has:u(function(n){return t(n)!==null},"has"),init:u(function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},"init"),get:u(function(n){let i=t(n);return i===null&&yo("WebGLRenderer: "+n+" extension not supported."),i},"get")}}u(BC,"WebGLExtensions");function kC(s,e,t,n){let i={},r=new WeakMap,o=new FinalizationRegistry(g=>delete i[g]);function a(g){l(g.target)}u(a,"onGeometryDispose");function l(g){g.index!==null&&e.remove(g.index);for(let x in g.attributes)e.remove(g.attributes[x]);g.removeEventListener("dispose",a),delete i[g.id],o.unregister(g);let _=r.get(g);_&&(e.remove(_),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}u(l,"destroyGeometry");function c(g,_){return i[_.id]!==void 0||(_.addEventListener("dispose",a),i[_.id]=new WeakRef(_),o.register(_,_.id,_),t.memory.geometries++),_}u(c,"get");function h(g){let _=g.attributes;for(let x in _)e.update(_[x],s.ARRAY_BUFFER)}u(h,"update");function p(g){let _=g.index,x=g.attributes.position,b=0;if(x===void 0)return;let v=_!==null?_.array.length:x.array.length/3-1,w=x.count>=65535?Rc:Ac,M=new w(Math.ceil(v/3)*6,1),A=M.array;if(_!==null){let y=_.array;b=_.version;for(let S=0,I=0;S<v;S+=3){let P=y[S+0],D=y[S+1],U=y[S+2];A[I++]=P,A[I++]=D,A[I++]=D,A[I++]=U,A[I++]=U,A[I++]=P}}else{b=x.version;for(let y=0,S=0;y<v;y+=3){let I=y+0,P=y+1,D=y+2;A[S++]=I,A[S++]=P,A[S++]=P,A[S++]=D,A[S++]=D,A[S++]=I}}M.version=b;let E=r.get(g);E&&e.remove(E),r.set(g,M)}u(p,"updateWireframeAttribute");function d(g){let _=r.get(g);if(_){let x=g.index;x!==null&&_.version<x.version&&p(g)}else p(g);return r.get(g)}u(d,"getWireframeAttribute");function m(){for(let g in i){let _=i[g].deref();_!==void 0&&l(_)}}return u(m,"dispose"),{get:c,update:h,getWireframeAttribute:d,dispose:m}}u(kC,"WebGLGeometries");function zC(s,e,t){let n;function i(p){n=p}u(i,"setMode");let r,o;function a(p){r=p.type,o=p.bytesPerElement}u(a,"setIndex");function l(p,d){s.drawElements(n,d,r,p*o),t.update(d,n,1)}u(l,"render");function c(p,d,m){m!==0&&(s.drawElementsInstanced(n,d,r,p*o,m),t.update(d,n,m))}u(c,"renderInstances");function h(p,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,m);let _=0;for(let x=0;x<m;x++)_+=d[x];t.update(_,n,1)}u(h,"renderMultiDraw"),this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}u(zC,"WebGLIndexedBufferRenderer");function GC(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:Je("WebGLInfo: Unknown draw mode:",o);break}}u(n,"update");function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return u(i,"reset"),{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}u(GC,"WebGLInfo");function VC(s,e,t){let n=new WeakMap,i=new Et;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==p){let P=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",P)};var m=P;u(P,"disposeTexture"),d!==void 0&&d.texture.dispose();let g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,b=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],M=0;g===!0&&(M=1),_===!0&&(M=2),x===!0&&(M=3);let A=a.attributes.position.count*M,E=1;A>e.maxTextureSize&&(E=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);let y=new Float32Array(A*E*4*p),S=new So(y,A,E,p);S.type=ti,S.needsUpdate=!0;let I=M*4;for(let D=0;D<p;D++){let U=b[D],X=v[D],O=w[D],Y=A*E*4*D;for(let te=0;te<U.count;te++){let B=te*I;g===!0&&(i.fromBufferAttribute(U,te),y[Y+B+0]=i.x,y[Y+B+1]=i.y,y[Y+B+2]=i.z,y[Y+B+3]=0),_===!0&&(i.fromBufferAttribute(X,te),y[Y+B+4]=i.x,y[Y+B+5]=i.y,y[Y+B+6]=i.z,y[Y+B+7]=0),x===!0&&(i.fromBufferAttribute(O,te),y[Y+B+8]=i.x,y[Y+B+9]=i.y,y[Y+B+10]=i.z,y[Y+B+11]=O.itemSize===4?i.w:1)}}d={count:p,texture:S,size:new Ve(A,E)},n.set(a,d),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let x=0;x<c.length;x++)g+=c[x];let _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return u(r,"update"),{update:r}}u(VC,"WebGLMorphtargets");function HC(s,e,t,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,p=c.geometry,d=e.get(c,p);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return d}u(o,"update");function a(){r=new WeakMap}u(a,"dispose");function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return u(l,"onInstancedMeshDispose"),{update:o,dispose:a}}u(HC,"WebGLObjects");var WC={[Hm]:"LINEAR_TONE_MAPPING",[Wm]:"REINHARD_TONE_MAPPING",[Xm]:"CINEON_TONE_MAPPING",[Zc]:"ACES_FILMIC_TONE_MAPPING",[Ym]:"AGX_TONE_MAPPING",[$m]:"NEUTRAL_TONE_MAPPING",[qm]:"CUSTOM_TONE_MAPPING"};function XC(s,e,t,n,i,r){let o=new jn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Tt;h.setAttribute("position",new Pt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Pt([0,2,0,0,2,0],2));let p=new gd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new dt(h,p),m=new Ao(-1,1,1,-1,0,1),g=null,_=null,x=!1,b,v=null,w=[],M=!1;this.setSize=function(A,E){o.setSize(A,E),a!==null&&a.setSize(A,E),l!==null&&l.setSize(A,E);for(let y=0;y<w.length;y++){let S=w[y];S.setSize&&S.setSize(A,E)}},this.setEffects=function(A){w=A,M=w.length>0&&w[0].isRenderPass===!0;let E=o.width,y=o.height;w.length>0&&a===null&&(a=new jn(E,y,{type:ni,depthBuffer:!1,stencilBuffer:!1}),l=new jn(E,y,{type:ni,depthBuffer:!1,stencilBuffer:!1}));let S=i===!0&&w.some(I=>I.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new $s(E,y),r===!0&&(c.format=nr,c.type=No)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let I=0;I<w.length;I++){let P=w[I];P.setSize&&P.setSize(E,y),S&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(A,E){if(x||A.toneMapping===cs&&w.length===0)return!1;if(v=E,E!==null){let y=E.width,S=E.height;(o.width!==y||o.height!==S)&&this.setSize(y,S)}return M===!1&&A.setRenderTarget(o),b=A.toneMapping,A.toneMapping=cs,!0},this.hasRenderPass=function(){return M},this.end=function(A,E){A.toneMapping=b,x=!0;let y=o,S=a;for(let I=0;I<w.length;I++){let P=w[I];P.enabled!==!1&&(P.render(A,S,y,E),P.needsSwap!==!1&&(y=S,S=S===a?l:a))}if(g!==A.outputColorSpace||_!==A.toneMapping){g=A.outputColorSpace,_=A.toneMapping,p.defines={},lt.getTransfer(g)===St&&(p.defines.SRGB_TRANSFER="");let I=WC[_];I&&(p.defines[I]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=y.texture,A.setRenderTarget(v),A.render(d,m),v=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),p.dispose()}}u(XC,"WebGLOutput");var GM=new Jt,VM=new $s(1,1),HM=new Oc(1),WM=new So,XM=new hd,qM=new Uc,_M=[],vM=[],MM=new Float32Array(16),SM=new Float32Array(9),wM=new Float32Array(4);function fl(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=_M[i];if(r===void 0&&(r=new Float32Array(i),_M[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}u(fl,"flatten");function Qt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}u(Qt,"arraysEqual");function en(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}u(en,"copyArray");function Gf(s,e){let t=vM[e];t===void 0&&(t=new Int32Array(e),vM[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}u(Gf,"allocTexUnits");function qC(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}u(qC,"setValueV1f");function YC(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2fv(this.addr,e),en(t,e)}}u(YC,"setValueV2f");function $C(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;s.uniform3fv(this.addr,e),en(t,e)}}u($C,"setValueV3f");function KC(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4fv(this.addr,e),en(t,e)}}u(KC,"setValueV4f");function ZC(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;wM.set(n),s.uniformMatrix2fv(this.addr,!1,wM),en(t,n)}}u(ZC,"setValueM2");function JC(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;SM.set(n),s.uniformMatrix3fv(this.addr,!1,SM),en(t,n)}}u(JC,"setValueM3");function jC(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;MM.set(n),s.uniformMatrix4fv(this.addr,!1,MM),en(t,n)}}u(jC,"setValueM4");function QC(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}u(QC,"setValueV1i");function eP(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2iv(this.addr,e),en(t,e)}}u(eP,"setValueV2i");function tP(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;s.uniform3iv(this.addr,e),en(t,e)}}u(tP,"setValueV3i");function nP(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4iv(this.addr,e),en(t,e)}}u(nP,"setValueV4i");function iP(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}u(iP,"setValueV1ui");function sP(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2uiv(this.addr,e),en(t,e)}}u(sP,"setValueV2ui");function rP(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;s.uniform3uiv(this.addr,e),en(t,e)}}u(rP,"setValueV3ui");function oP(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4uiv(this.addr,e),en(t,e)}}u(oP,"setValueV4ui");function Vf(s){return s.version===0&&(s.compareFunction=r0,s.needsUpdate=!0),s}u(Vf,"initShadowTexture");function aP(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Vf(VM):r=GM,t.setTexture2D(e||r,i)}u(aP,"setValueT1");function lP(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||XM,i)}u(lP,"setValueT3D1");function cP(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Vf(HM):r=qM,t.setTextureCube(e||r,i)}u(cP,"setValueT6");function uP(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||WM,i)}u(uP,"setValueT2DArray1");function hP(s){switch(s){case 5126:return qC;case 35664:return YC;case 35665:return $C;case 35666:return KC;case 35674:return ZC;case 35675:return JC;case 35676:return jC;case 5124:case 35670:return QC;case 35667:case 35671:return eP;case 35668:case 35672:return tP;case 35669:case 35673:return nP;case 5125:return iP;case 36294:return sP;case 36295:return rP;case 36296:return oP;case 35678:case 36198:case 36298:case 36306:case 35682:return aP;case 35679:case 36299:case 36307:return lP;case 35680:case 36300:case 36308:case 36293:return cP;case 36289:case 36303:case 36311:case 36292:return uP}}u(hP,"getSingularSetter");function dP(s,e){s.uniform1fv(this.addr,e)}u(dP,"setValueV1fArray");function fP(s,e){let t=fl(e,this.size,2);s.uniform2fv(this.addr,t)}u(fP,"setValueV2fArray");function pP(s,e){let t=fl(e,this.size,3);s.uniform3fv(this.addr,t)}u(pP,"setValueV3fArray");function mP(s,e){let t=fl(e,this.size,4);s.uniform4fv(this.addr,t)}u(mP,"setValueV4fArray");function gP(s,e){let t=fl(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}u(gP,"setValueM2Array");function xP(s,e){let t=fl(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}u(xP,"setValueM3Array");function bP(s,e){let t=fl(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}u(bP,"setValueM4Array");function yP(s,e){s.uniform1iv(this.addr,e)}u(yP,"setValueV1iArray");function _P(s,e){s.uniform2iv(this.addr,e)}u(_P,"setValueV2iArray");function vP(s,e){s.uniform3iv(this.addr,e)}u(vP,"setValueV3iArray");function MP(s,e){s.uniform4iv(this.addr,e)}u(MP,"setValueV4iArray");function SP(s,e){s.uniform1uiv(this.addr,e)}u(SP,"setValueV1uiArray");function wP(s,e){s.uniform2uiv(this.addr,e)}u(wP,"setValueV2uiArray");function EP(s,e){s.uniform3uiv(this.addr,e)}u(EP,"setValueV3uiArray");function TP(s,e){s.uniform4uiv(this.addr,e)}u(TP,"setValueV4uiArray");function AP(s,e,t){let n=this.cache,i=e.length,r=Gf(t,i);Qt(n,r)||(s.uniform1iv(this.addr,r),en(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Vf(VM):o=GM;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}u(AP,"setValueT1Array");function RP(s,e,t){let n=this.cache,i=e.length,r=Gf(t,i);Qt(n,r)||(s.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||XM,r[o])}u(RP,"setValueT3DArray");function CP(s,e,t){let n=this.cache,i=e.length,r=Gf(t,i);Qt(n,r)||(s.uniform1iv(this.addr,r),en(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=Vf(HM):o=qM;for(let a=0;a!==i;++a)t.setTextureCube(e[a]||o,r[a])}u(CP,"setValueT6Array");function PP(s,e,t){let n=this.cache,i=e.length,r=Gf(t,i);Qt(n,r)||(s.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||WM,r[o])}u(PP,"setValueT2DArrayArray");function IP(s){switch(s){case 5126:return dP;case 35664:return fP;case 35665:return pP;case 35666:return mP;case 35674:return gP;case 35675:return xP;case 35676:return bP;case 5124:case 35670:return yP;case 35667:case 35671:return _P;case 35668:case 35672:return vP;case 35669:case 35673:return MP;case 5125:return SP;case 36294:return wP;case 36295:return EP;case 36296:return TP;case 35678:case 36198:case 36298:case 36306:case 35682:return AP;case 35679:case 36299:case 36307:return RP;case 35680:case 36300:case 36308:case 36293:return CP;case 36289:case 36303:case 36311:case 36292:return PP}}u(IP,"getPureArraySetter");var cx=class cx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hP(t.type)}};u(cx,"SingleUniform");var ex=cx,ux=class ux{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=IP(t.type)}};u(ux,"PureArrayUniform");var tx=ux,hx=class hx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}};u(hx,"StructuredUniform");var nx=hx,jg=/(\w+)(\])?(\[|\.)?/g;function EM(s,e){s.seq.push(e),s.map[e.id]=e}u(EM,"addUniform");function LP(s,e,t){let n=s.name,i=n.length;for(jg.lastIndex=0;;){let r=jg.exec(n),o=jg.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){EM(t,c===void 0?new ex(a,s,e):new tx(a,s,e));break}else{let p=t.map[a];p===void 0&&(p=new nx(a),EM(t,p)),t=p}}}u(LP,"parseUniform");var dx=class dx{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);LP(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};u(dx,"WebGLUniforms");var dl=dx;function TM(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}u(TM,"WebGLShader");var NP=37297,DP=0;function UP(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}u(UP,"handleSource");var AM=new je;function OP(s){lt._getMatrix(AM,lt.workingColorSpace,s);let e=`mat3( ${AM.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(s)){case Sc:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}u(OP,"getEncodingComponents");function RM(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+UP(s.getShaderSource(e),a)}else return r}u(RM,"getShaderErrors");function FP(s,e){let t=OP(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}u(FP,"getTexelEncodingFunction");var BP={[Hm]:"Linear",[Wm]:"Reinhard",[Xm]:"Cineon",[Zc]:"ACESFilmic",[Ym]:"AgX",[$m]:"Neutral",[qm]:"Custom"};function kP(s,e){let t=BP[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}u(kP,"getToneMappingFunction");var Ff=new H;function zP(){lt.getLuminanceCoefficients(Ff);let s=Ff.x.toFixed(4),e=Ff.y.toFixed(4),t=Ff.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}u(zP,"getLuminanceFunction");function GP(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ru).join(`
`)}u(GP,"generateVertexExtensions");function VP(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}u(VP,"generateDefines");function HP(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}u(HP,"fetchAttributeLocations");function ru(s){return s!==""}u(ru,"filterEmptyLine");function CM(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}u(CM,"replaceLightNums");function PM(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}u(PM,"replaceClippingPlaneNums");var WP=/^[ \t]*#include +<([\w\d./]+)>/gm;function ix(s){return s.replace(WP,XP)}u(ix,"resolveIncludes");function XP(s,e){let t=at[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return ix(t)}u(XP,"includeReplacer");var qP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function IM(s){return s.replace(qP,YP)}u(IM,"unrollLoops");function YP(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}u(YP,"loopReplacer");function LM(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}u(LM,"generatePrecision");var $P={[Kc]:"SHADOWMAP_TYPE_PCF",[ol]:"SHADOWMAP_TYPE_VSM"};function KP(s){return $P[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}u(KP,"generateShadowMapTypeDefine");var ZP={[ll]:"ENVMAP_MODE_REFRACTION"};function JP(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":ZP[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}u(JP,"generateEnvMapModeDefine");var jP={[Vm]:"ENVMAP_BLENDING_MULTIPLY",[Zv]:"ENVMAP_BLENDING_MIX",[Jv]:"ENVMAP_BLENDING_ADD"};function QP(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":jP[s.combine]||"ENVMAP_BLENDING_NONE"}u(QP,"generateEnvMapBlendingDefine");function e2(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=KP(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=JP(t),p=QP(t),d=GP(t),m=VP(r),g=i.createProgram(),_,x,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ru).join(`
`),_.length>0&&(_+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ru).join(`
`),x.length>0&&(x+=`
`)):(_=[LM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ru).join(`
`),x=[LM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cs?"#define TONE_MAPPING":"",t.toneMapping!==cs?at.tonemapping_pars_fragment:"",t.toneMapping!==cs?kP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,FP("linearToOutputTexel",t.outputColorSpace),zP(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ru).join(`
`)),o=ix(o),o=CM(o,t),o=PM(o,t),a=ix(a),a=CM(a,t),a=PM(a,t),o=IM(o),a=IM(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,x=["#define varying in",t.glslVersion===a0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===a0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let v=b+_+o,w=b+x+a,M=TM(i,i.VERTEX_SHADER,v),A=TM(i,i.FRAGMENT_SHADER,w);i.attachShader(g,M),i.attachShader(g,A),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function E(P){if(s.debug.checkShaderErrors){let D=i.getProgramInfoLog(g)||"",U=i.getShaderInfoLog(M)||"",X=i.getShaderInfoLog(A)||"",O=D.trim(),Y=U.trim(),te=X.trim(),B=!0,Z=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,M,A);else{let W=RM(i,M,"vertex"),$=RM(i,A,"fragment");Je("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+W+`
`+$)}else O!==""?He("WebGLProgram: Program Info Log:",O):(Y===""||te==="")&&(Z=!1);Z&&(P.diagnostics={runnable:B,programLog:O,vertexShader:{log:Y,prefix:_},fragmentShader:{log:te,prefix:x}})}i.deleteShader(M),i.deleteShader(A),y=new dl(i,g),S=HP(i,g)}u(E,"onFirstUse");let y;this.getUniforms=function(){return y===void 0&&E(this),y};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(g,NP)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=DP++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=A,this}u(e2,"WebGLProgram");var t2=0,fx=class fx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new rx(e),t.set(e,n)),n}};u(fx,"WebGLShaderCache");var sx=fx,px=class px{constructor(e){this.id=t2++,this.code=e,this.usedTimes=0}};u(px,"WebGLShaderStage");var rx=px;function n2(s){return s===us||s===tu||s===nu}u(n2,"isPackedRGFormat");function i2(s,e,t,n,i,r){let o=new Ja,a=new sx,l=new Set,c=[],h=new Map,p=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}u(m,"getChannel");function g(y,S,I,P,D,U){let X=P.fog,O=D.geometry,Y=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,te=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,B=e.get(y.envMap||Y,te),Z=d[y.type],W=n.precision;y.precision!==null&&(W=n.getMaxPrecision(y.precision),W!==y.precision&&He("WebGLProgram.getParameters:",y.precision,"not supported, using",W,"instead."));let $=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Q=$!==void 0?$.length:0,ue=0;O.morphAttributes.position!==void 0&&(ue=1),O.morphAttributes.normal!==void 0&&(ue=2),O.morphAttributes.color!==void 0&&(ue=3);let ye,j,me,le;if(Z){let Le=fs[Z];ye=Le.vertexShader,j=Le.fragmentShader}else{ye=y.vertexShader,j=y.fragmentShader;let Le=a.getVertexShaderStage(y),wt=a.getFragmentShaderStage(y);a.update(y,Le,wt),me=Le.id,le=wt.id}let fe=s.getRenderTarget(),de=s.state.buffers.depth.getReversed(),Oe=D.isInstancedMesh===!0,re=D.isBatchedMesh===!0,ie=!!y.map,he=!!y.matcap,ge=!!B,xe=ge&&B.isPMREMTexture===!0,Ne=!!y.aoMap,$e=!!y.lightMap,it=!!y.bumpMap&&y.wireframe===!1,Qe=!!y.normalMap,Mt=!!y.displacementMap,ft=!!y.emissiveMap,bt=!!y.metalnessMap,kt=!!y.roughnessMap,ut=y.anisotropy>0,V=y.clearcoat>0,Ut=y.diffuseRoughness>0,ze=y.dispersion>0,et=y.retroreflectivity>0,_e=y.iridescence>0,_t=y.sheen>0,We=y.transmission>0,Ze=ut&&!!y.anisotropyMap,L=V&&!!y.clearcoatMap,T=V&&!!y.clearcoatNormalMap,q=V&&!!y.clearcoatRoughnessMap,pe=Ut&&!!y.diffuseRoughnessMap,oe=_e&&!!y.iridescenceMap,Me=_e&&!!y.iridescenceThicknessMap,Ae=_t&&!!y.sheenColorMap,se=_t&&!!y.sheenRoughnessMap,ae=!!y.specularMap,we=!!y.specularColorMap,F=!!y.specularIntensityMap,ce=We&&!!y.transmissionMap,ne=We&&!!y.thicknessMap,Ee=!!y.gradientMap,ve=!!y.alphaMap,Se=y.alphaTest>0,Xe=!!y.alphaHash,ot=!!y.extensions,be=cs;y.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(be=s.toneMapping);let qe=xe?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,st={shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:ye,fragmentShader:j,defines:y.defines,customVertexShaderID:me,customFragmentShaderID:le,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:W,batching:re,batchingColor:re&&D._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&D.instanceColor!==null,instancingMorph:Oe&&D.morphTexture!==null,outputColorSpace:fe===null?s.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:ie,matcap:he,envMap:ge,envMapMode:ge&&B.mapping,envMapPMREM:xe,envMapMaxLod:xe?qe.length-1:null,envMapSize:xe?qe[0].width:null,aoMap:Ne,lightMap:$e,bumpMap:it,normalMap:Qe,displacementMap:Mt,emissiveMap:ft,normalMapObjectSpace:Qe&&y.normalMapType===tM,normalMapTangentSpace:Qe&&y.normalMapType===Nf,packedNormalMap:Qe&&y.normalMapType===Nf&&n2(y.normalMap.format),metalnessMap:bt,roughnessMap:kt,anisotropy:ut,anisotropyMap:Ze,clearcoat:V,clearcoatMap:L,clearcoatNormalMap:T,clearcoatRoughnessMap:q,diffuseRoughness:Ut,diffuseRoughnessMap:pe,dispersion:ze,retroreflection:et,iridescence:_e,iridescenceMap:oe,iridescenceThicknessMap:Me,sheen:_t,sheenColorMap:Ae,sheenRoughnessMap:se,specularMap:ae,specularColorMap:we,specularIntensityMap:F,transmission:We,transmissionMap:ce,thicknessMap:ne,gradientMap:Ee,opaque:y.transparent===!1&&y.blending===al&&y.alphaToCoverage===!1,alphaMap:ve,alphaTest:Se,alphaHash:Xe,combine:y.combine,mapUv:ie&&m(y.map.channel),aoMapUv:Ne&&m(y.aoMap.channel),lightMapUv:$e&&m(y.lightMap.channel),bumpMapUv:it&&m(y.bumpMap.channel),normalMapUv:Qe&&m(y.normalMap.channel),displacementMapUv:Mt&&m(y.displacementMap.channel),emissiveMapUv:ft&&m(y.emissiveMap.channel),metalnessMapUv:bt&&m(y.metalnessMap.channel),roughnessMapUv:kt&&m(y.roughnessMap.channel),anisotropyMapUv:Ze&&m(y.anisotropyMap.channel),clearcoatMapUv:L&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:T&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&m(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:pe&&m(y.diffuseRoughnessMap.channel),iridescenceMapUv:oe&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:se&&m(y.sheenRoughnessMap.channel),specularMapUv:ae&&m(y.specularMap.channel),specularColorMapUv:we&&m(y.specularColorMap.channel),specularIntensityMapUv:F&&m(y.specularIntensityMap.channel),transmissionMapUv:ce&&m(y.transmissionMap.channel),thicknessMapUv:ne&&m(y.thicknessMap.channel),alphaMapUv:ve&&m(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Qe||ut),vertexNormals:!!O.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!O.attributes.uv&&(ie||ve),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||O.attributes.normal===void 0&&Qe===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:de,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ue,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:U.filter(Le=>Le.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:be,decodeVideoTexture:ie&&y.map.isVideoTexture===!0&&lt.getTransfer(y.map.colorSpace)===St,decodeVideoTextureEmissive:ft&&y.emissiveMap.isVideoTexture===!0&&lt.getTransfer(y.emissiveMap.colorSpace)===St,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===jt,flipSided:y.side===Dn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ot&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&y.extensions.multiDraw===!0||re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return st.vertexUv1s=l.has(1),st.vertexUv2s=l.has(2),st.vertexUv3s=l.has(3),l.clear(),st}u(g,"getParameters");function _(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let I in y.defines)S.push(I),S.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(x(S,y),b(S,y),S.push(s.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}u(_,"getProgramCacheKey");function x(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapPMREM),y.push(S.envMapMaxLod),y.push(S.envMapSize),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.diffuseRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.numSunLights),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numSunLightShadows),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.numLightProbeGrids),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}u(x,"getProgramCacheKeyParameters");function b(y,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),y.push(o.mask)}u(b,"getProgramCacheKeyBooleans");function v(y){let S=d[y.type],I;if(S){let P=fs[S];I=Uo.clone(P.uniforms)}else I=y.uniforms;return I}u(v,"getUniforms");function w(y,S){let I=h.get(S);return I!==void 0?++I.usedTimes:(I=new e2(s,S,y,i),c.push(I),h.set(S,I)),I}u(w,"acquireProgram");function M(y){if(--y.usedTimes===0){let S=c.indexOf(y);c[S]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}u(M,"releaseProgram");function A(y){a.remove(y)}u(A,"releaseShaderCache");function E(){a.dispose()}return u(E,"dispose"),{getParameters:g,getProgramCacheKey:_,getUniforms:v,acquireProgram:w,releaseProgram:M,releaseShaderCache:A,programs:c,dispose:E}}u(i2,"WebGLPrograms");function s2(){let s=new WeakMap;function e(o){return s.has(o)}u(e,"has");function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}u(t,"get");function n(o){s.delete(o)}u(n,"remove");function i(o,a,l){s.get(o)[a]=l}u(i,"update");function r(){s=new WeakMap}return u(r,"dispose"),{has:e,get:t,remove:n,update:i,dispose:r}}u(s2,"WebGLProperties");function r2(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}u(r2,"painterSortStable");function NM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}u(NM,"reversePainterSortStable");function DM(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}u(r,"init");function o(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}u(o,"materialVariant");function a(d,m,g,_,x,b){let v=s[e];return v===void 0?(v={id:d.id,object:d,geometry:m,material:g,materialVariant:o(d),groupOrder:_,renderOrder:d.renderOrder,z:x,group:b},s[e]=v):(v.id=d.id,v.object=d,v.geometry=m,v.material=g,v.materialVariant=o(d),v.groupOrder=_,v.renderOrder=d.renderOrder,v.z=x,v.group=b),e++,v}u(a,"getNextRenderItem");function l(d,m,g,_,x,b,v){v.reversedDepth===!0&&(x=-x);let w=a(d,m,g,_,x,b);g.transmission>0?n.push(w):g.transparent===!0?i.push(w):t.push(w)}u(l,"push");function c(d,m,g,_,x,b){let v=a(d,m,g,_,x,b);g.transmission>0?n.unshift(v):g.transparent===!0?i.unshift(v):t.unshift(v)}u(c,"unshift");function h(d,m){t.length>1&&t.sort(d||r2),n.length>1&&n.sort(m||NM),i.length>1&&i.sort(m||NM)}u(h,"sort");function p(){for(let d=e,m=s.length;d<m;d++){let g=s[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return u(p,"finish"),{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:p,sort:h}}u(DM,"WebGLRenderList");function o2(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new DM,s.set(n,[o])):i>=r.length?(o=new DM,r.push(o)):o=r[i],o}u(e,"get");function t(){s=new WeakMap}return u(t,"dispose"),{get:e,dispose:t}}u(o2,"WebGLRenderLists");function a2(){let s={};return{get:u(function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new H,color:new Pe};break;case"SpotLight":t={position:new H,direction:new H,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new H,halfWidth:new H,halfHeight:new H};break}return s[e.id]=t,t},"get")}}u(a2,"UniformsCache");function l2(){let s={};return{get:u(function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t},"get")}}u(l2,"ShadowUniformsCache");var c2=0;function u2(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}u(u2,"shadowCastingAndTexturingLightsFirst");function h2(s){let e=new a2,t=l2(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let i=new H,r=new Ke,o=new Ke;function a(c){let h=0,p=0,d=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let m=0,g=0,_=0,x=0,b=0,v=0,w=0,M=0,A=0,E=0,y=0,S=0,I=0,P=0;c.sort(u2);for(let U=0,X=c.length;U<X;U++){let O=c[U],Y=O.color,te=O.intensity,B=O.distance,Z=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===us?Z=O.shadow.map.texture:Z=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)h+=Y.r*te,p+=Y.g*te,d+=Y.b*te;else if(O.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(O.sh.coefficients[W],te);P++}else if(O.isSunLight){let W=e.get(O);if(W.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let $=O.shadow,Q=t.get(O);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[g]=Q,n.sunShadowMap[g]=Z;let ue=$.getViewportCount();for(let ye=0;ye<ue;ye++)n.sunShadowMatrix[_+ye]=$.getMatrix(ye),n.sunShadowCascade[_+ye]=$._cascadeData[ye];_+=ue,g++}n.sun[m]=W,m++}else if(O.isDirectionalLight){let W=e.get(O);if(W.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let $=O.shadow,Q=t.get(O);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,n.directionalShadow[x]=Q,n.directionalShadowMap[x]=Z,n.directionalShadowMatrix[x]=O.shadow.matrix,A++}n.directional[x]=W,x++}else if(O.isSpotLight){let W=e.get(O);W.position.setFromMatrixPosition(O.matrixWorld),W.color.copy(Y).multiplyScalar(te),W.distance=B,W.coneCos=Math.cos(O.angle),W.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),W.decay=O.decay,n.spot[v]=W;let $=O.shadow;if(O.map&&(n.spotLightMap[S]=O.map,S++,$.updateMatrices(O),O.castShadow&&I++),n.spotLightMatrix[v]=$.matrix,O.castShadow){let Q=t.get(O);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,n.spotShadow[v]=Q,n.spotShadowMap[v]=Z,y++}v++}else if(O.isRectAreaLight){let W=e.get(O);W.color.copy(Y).multiplyScalar(te),W.halfWidth.set(O.width*.5,0,0),W.halfHeight.set(0,O.height*.5,0),n.rectArea[w]=W,w++}else if(O.isPointLight){let W=e.get(O);if(W.color.copy(O.color).multiplyScalar(O.intensity),W.distance=O.distance,W.decay=O.decay,O.castShadow){let $=O.shadow,Q=t.get(O);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,Q.shadowCameraNear=$.camera.near,Q.shadowCameraFar=$.camera.far,n.pointShadow[b]=Q,n.pointShadowMap[b]=Z,n.pointShadowMatrix[b]=O.shadow.matrix,E++}n.point[b]=W,b++}else if(O.isHemisphereLight){let W=e.get(O);W.skyColor.copy(O.color).multiplyScalar(te),W.groundColor.copy(O.groundColor).multiplyScalar(te),n.hemi[M]=W,M++}}w>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=d;let D=n.hash;(D.sunLength!==m||D.directionalLength!==x||D.pointLength!==b||D.spotLength!==v||D.rectAreaLength!==w||D.hemiLength!==M||D.numSunShadows!==g||D.numDirectionalShadows!==A||D.numPointShadows!==E||D.numSpotShadows!==y||D.numSpotMaps!==S||D.numLightProbes!==P)&&(n.sun.length=m,n.directional.length=x,n.spot.length=v,n.rectArea.length=w,n.point.length=b,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.spotLightMatrix.length=y+S-I,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=P,D.sunLength=m,D.directionalLength=x,D.pointLength=b,D.spotLength=v,D.rectAreaLength=w,D.hemiLength=M,D.numSunShadows=g,D.numDirectionalShadows=A,D.numPointShadows=E,D.numSpotShadows=y,D.numSpotMaps=S,D.numLightProbes=P,n.version=c2++)}u(a,"setup");function l(c,h){let p=0,d=0,m=0,g=0,_=0,x=0,b=h.matrixWorldInverse;for(let v=0,w=c.length;v<w;v++){let M=c[v];if(M.isSunLight){let A=n.sun[p];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(b),p++}else if(M.isDirectionalLight){let A=n.directional[d];A.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(b),d++}else if(M.isSpotLight){let A=n.spot[g];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(b),A.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(b),g++}else if(M.isRectAreaLight){let A=n.rectArea[_];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(b),o.identity(),r.copy(M.matrixWorld),r.premultiply(b),o.extractRotation(r),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){let A=n.point[m];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(b),m++}else if(M.isHemisphereLight){let A=n.hemi[x];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(b),x++}}}return u(l,"setupView"),{setup:a,setupView:l,state:n}}u(h2,"WebGLLights");function UM(s){let e=new h2(s),t=[],n=[],i=[];function r(p){h.camera=p,t.length=0,n.length=0,i.length=0}u(r,"init");function o(p){p.isLightProbeGrid?i.push(p):t.push(p)}u(o,"pushLight");function a(p){n.push(p)}u(a,"pushShadow");function l(){e.setup(t),i.sort((p,d)=>p.priority-d.priority||p.id-d.id)}u(l,"setupLights");function c(p){e.setupView(t,p)}u(c,"setupLightsView");let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}u(UM,"WebGLRenderState");function d2(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new UM(s),e.set(i,[a])):r>=o.length?(a=new UM(s),o.push(a)):a=o[r],a}u(t,"get");function n(){e=new WeakMap}return u(n,"dispose"),{get:t,dispose:n}}u(d2,"WebGLRenderStates");var f2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p2=`uniform sampler2D shadow_pass;
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
}`,m2=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],g2=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],OM=new Ke,su=new H,Qg=new H;function x2(s,e,t){let n=new Nr,i=new Ve,r=new Ve,o=new Et,a=new xd,l=new bd,c={},h=t.maxTextureSize,p={[yi]:Dn,[Dn]:yi,[jt]:jt},d=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:f2,fragmentShader:p2}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new Tt;g.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new dt(g,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kc;let b=this.type;this.render=function(E,y,S){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||E.length===0)return;this.type===Xd&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Kc);let I=s.getRenderTarget(),P=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Co),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let X=b!==this.type;X&&y.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(Y=>Y.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,Y=E.length;O<Y;O++){let te=E[O],B=te.shadow;if(B===void 0){He("WebGLShadowMap:",te,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);let Z=B.getFrameExtents();i.multiply(Z),r.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Z.x),i.x=r.x*Z.x,B.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Z.y),i.y=r.y*Z.y,B.mapSize.y=r.y));let W=s.state.buffers.depth.getReversed();if(B.camera._reversedDepth=W,B.map===null||X===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===ol){if(te.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new jn(i.x,i.y,{format:us,type:ni,minFilter:zt,magFilter:zt,generateMipmaps:!1}),B.map.texture.name=te.name+".shadowMap",B.map.depthTexture=new $s(i.x,i.y,ti),B.map.depthTexture.name=te.name+".shadowMapDepth",B.map.depthTexture.format=qs,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ht,B.map.depthTexture.magFilter=Ht}else te.isPointLight?(B.map=new ou(i.x),B.map.depthTexture=new Oc(i.x,Bi)):(B.map=new jn(i.x,i.y),B.map.depthTexture=new $s(i.x,i.y,Bi)),B.map.depthTexture.name=te.name+".shadowMap",B.map.depthTexture.format=qs,this.type===Kc?(B.map.depthTexture.compareFunction=W?s0:i0,B.map.depthTexture.minFilter=zt,B.map.depthTexture.magFilter=zt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ht,B.map.depthTexture.magFilter=Ht);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==i.x||B.map.height!==i.y)&&B.map.setSize(i.x,i.y);let $=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();te.isPointLight!==!0&&B.updateMatrices(te,S);let Q=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:S.layers;for(let ue=0;ue<$;ue++){let ye=B.getCamera(ue);if(te.isPointLight){let j=B.camera,me=B.matrix,le=te.distance||j.far;le!==j.far&&(j.far=le,j.updateProjectionMatrix()),su.setFromMatrixPosition(te.matrixWorld),j.position.copy(su),Qg.copy(j.position),Qg.add(m2[ue]),j.up.copy(g2[ue]),j.lookAt(Qg),j.updateMatrixWorld(),me.makeTranslation(-su.x,-su.y,-su.z),OM.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),B._frustum.setFromProjectionMatrix(OM,j.coordinateSystem,j.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)s.setRenderTarget(B.map,ue),s.clear();else{ue===0&&(s.setRenderTarget(B.map),s.clear());let j=B.getViewport(ue);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),U.viewport(o)}n=B.getFrustum(ue),M(y,S,ye,te,Q,this.type)}B.isPointLightShadow!==!0&&this.type===ol&&v(B,S),B.needsUpdate=!1}b=this.type,x.needsUpdate=!1,s.setRenderTarget(I,P,D)};function v(E,y){let S=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null?E.mapPass=new jn(i.x,i.y,{format:us,type:ni}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(y,null,S,d,_,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value.set(E.map.width,E.map.height),m.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(y,null,S,m,_,null)}u(v,"VSMPass");function w(E,y,S,I){let P=null,D=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)P=D;else if(P=S.isPointLight===!0?l:a,s.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let U=P.uuid,X=y.uuid,O=c[U];O===void 0&&(O={},c[U]=O);let Y=O[X];Y===void 0&&(Y=P.clone(),O[X]=Y,y.addEventListener("dispose",A)),P=Y}if(P.visible=y.visible,P.wireframe=y.wireframe,I===ol?P.side=y.shadowSide!==null?y.shadowSide:y.side:P.side=y.shadowSide!==null?y.shadowSide:p[y.side],P.alphaMap=y.alphaMap,P.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,P.map=y.map,P.clipShadows=y.clipShadows,P.clippingPlanes=y.clippingPlanes,P.clipIntersection=y.clipIntersection,P.displacementMap=y.displacementMap,P.displacementScale=y.displacementScale,P.displacementBias=y.displacementBias,P.wireframeLinewidth=y.wireframeLinewidth,P.linewidth=y.linewidth,S.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let U=s.properties.get(P);U.light=S}return P}u(w,"getDepthMaterial");function M(E,y,S,I,P,D){if(E.visible===!1)return;if(E.layers.test(P)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===ol)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let O=e.update(E),Y=E.material;if(Array.isArray(Y)){let te=O.groups;for(let B=0,Z=te.length;B<Z;B++){let W=te[B],$=Y[W.materialIndex];if($&&$.visible){let Q=w(E,$,I,D);E.onBeforeShadow(s,E,y,S,O,Q,W),s.renderBufferDirect(S,null,O,Q,E,W),E.onAfterShadow(s,E,y,S,O,Q,W)}}}else if(Y.visible){let te=w(E,Y,I,D);E.onBeforeShadow(s,E,y,S,O,te,null),s.renderBufferDirect(S,null,O,te,E,null),E.onAfterShadow(s,E,y,S,O,te,null)}}let X=E.children;for(let O=0,Y=X.length;O<Y;O++)M(X[O],y,S,I,P,D)}u(M,"renderObject");function A(E){E.target.removeEventListener("dispose",A);for(let S in c){let I=c[S],P=E.target.uuid;P in I&&(I[P].dispose(),delete I[P])}}u(A,"onMaterialDispose")}u(x2,"WebGLShadowMap");function b2(s,e){function t(){let F=!1,ce=new Et,ne=null,Ee=new Et(0,0,0,0);return{setMask:u(function(ve){ne!==ve&&!F&&(s.colorMask(ve,ve,ve,ve),ne=ve)},"setMask"),setLocked:u(function(ve){F=ve},"setLocked"),setClear:u(function(ve,Se,Xe,ot,be){be===!0&&(ve*=ot,Se*=ot,Xe*=ot),ce.set(ve,Se,Xe,ot),Ee.equals(ce)===!1&&(s.clearColor(ve,Se,Xe,ot),Ee.copy(ce))},"setClear"),reset:u(function(){F=!1,ne=null,Ee.set(-1,0,0,0)},"reset")}}u(t,"ColorBuffer");function n(){let F=!1,ce=!1,ne=null,Ee=null,ve=null;return{setReversed:u(function(Se){if(ce!==Se){let Xe=e.get("EXT_clip_control");Se?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),ce=Se;let ot=ve;ve=null,this.setClear(ot)}},"setReversed"),getReversed:u(function(){return ce},"getReversed"),setTest:u(function(Se){Se?de(s.DEPTH_TEST):Oe(s.DEPTH_TEST)},"setTest"),setMask:u(function(Se){ne!==Se&&!F&&(s.depthMask(Se),ne=Se)},"setMask"),setFunc:u(function(Se){if(ce&&(Se=hM[Se]),Ee!==Se){switch(Se){case nd:s.depthFunc(s.NEVER);break;case id:s.depthFunc(s.ALWAYS);break;case sd:s.depthFunc(s.LESS);break;case Xa:s.depthFunc(s.LEQUAL);break;case rd:s.depthFunc(s.EQUAL);break;case od:s.depthFunc(s.GEQUAL);break;case ad:s.depthFunc(s.GREATER);break;case ld:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ee=Se}},"setFunc"),setLocked:u(function(Se){F=Se},"setLocked"),setClear:u(function(Se){ve!==Se&&(ve=Se,ce&&(Se=1-Se),s.clearDepth(Se))},"setClear"),reset:u(function(){F=!1,ne=null,Ee=null,ve=null,ce=!1},"reset")}}u(n,"DepthBuffer");function i(){let F=!1,ce=null,ne=null,Ee=null,ve=null,Se=null,Xe=null,ot=null,be=null;return{setTest:u(function(qe){F||(qe?de(s.STENCIL_TEST):Oe(s.STENCIL_TEST))},"setTest"),setMask:u(function(qe){ce!==qe&&!F&&(s.stencilMask(qe),ce=qe)},"setMask"),setFunc:u(function(qe,st,Le){(ne!==qe||Ee!==st||ve!==Le)&&(s.stencilFunc(qe,st,Le),ne=qe,Ee=st,ve=Le)},"setFunc"),setOp:u(function(qe,st,Le){(Se!==qe||Xe!==st||ot!==Le)&&(s.stencilOp(qe,st,Le),Se=qe,Xe=st,ot=Le)},"setOp"),setLocked:u(function(qe){F=qe},"setLocked"),setClear:u(function(qe){be!==qe&&(s.clearStencil(qe),be=qe)},"setClear"),reset:u(function(){F=!1,ce=null,ne=null,Ee=null,ve=null,Se=null,Xe=null,ot=null,be=null},"reset")}}u(i,"StencilBuffer");let r=new t,o=new n,a=new i,l={},c=new WeakMap,h={},p={},d={},m=new WeakMap,g=[],_=null,x=!1,b=null,v=null,w=null,M=null,A=null,E=null,y=null,S=new Pe(0,0,0),I=0,P=!1,D=null,U=null,X=null,O=null,Y=null,te=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,Z=0,W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=Z>=1):W.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=Z>=2);let $=null,Q={},ue=s.getParameter(s.SCISSOR_BOX),ye=s.getParameter(s.VIEWPORT),j=new Et().fromArray(ue),me=new Et().fromArray(ye);function le(F,ce,ne,Ee){let ve=new Uint8Array(4),Se=s.createTexture();s.bindTexture(F,Se),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Xe=0;Xe<ne;Xe++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(ce,0,s.RGBA,1,1,Ee,0,s.RGBA,s.UNSIGNED_BYTE,ve):s.texImage2D(ce+Xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ve);return Se}u(le,"createTexture");let fe={};fe[s.TEXTURE_2D]=le(s.TEXTURE_2D,s.TEXTURE_2D,1),fe[s.TEXTURE_CUBE_MAP]=le(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[s.TEXTURE_2D_ARRAY]=le(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),fe[s.TEXTURE_3D]=le(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(s.DEPTH_TEST),o.setFunc(Xa),it(!1),Qe(Om),de(s.CULL_FACE),Ne(Co);function de(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}u(de,"enable");function Oe(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}u(Oe,"disable");function re(F,ce){return d[F]!==ce?(s.bindFramebuffer(F,ce),d[F]=ce,F===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ce),F===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ce),!0):!1}u(re,"bindFramebuffer");function ie(F,ce){let ne=g,Ee=!1;if(F){ne=m.get(ce),ne===void 0&&(ne=[],m.set(ce,ne));let ve=F.textures;if(ne.length!==ve.length||ne[0]!==s.COLOR_ATTACHMENT0){for(let Se=0,Xe=ve.length;Se<Xe;Se++)ne[Se]=s.COLOR_ATTACHMENT0+Se;ne.length=ve.length,Ee=!0}}else ne[0]!==s.BACK&&(ne[0]=s.BACK,Ee=!0);Ee&&s.drawBuffers(ne)}u(ie,"drawBuffers");function he(F){return _!==F?(s.useProgram(F),_=F,!0):!1}u(he,"useProgram");let ge={[Po]:s.FUNC_ADD,[Nv]:s.FUNC_SUBTRACT,[Dv]:s.FUNC_REVERSE_SUBTRACT};ge[Uv]=s.MIN,ge[Ov]=s.MAX;let xe={[Fv]:s.ZERO,[Bv]:s.ONE,[kv]:s.SRC_COLOR,[zm]:s.SRC_ALPHA,[Xv]:s.SRC_ALPHA_SATURATE,[Hv]:s.DST_COLOR,[Gv]:s.DST_ALPHA,[zv]:s.ONE_MINUS_SRC_COLOR,[Gm]:s.ONE_MINUS_SRC_ALPHA,[Wv]:s.ONE_MINUS_DST_COLOR,[Vv]:s.ONE_MINUS_DST_ALPHA,[qv]:s.CONSTANT_COLOR,[Yv]:s.ONE_MINUS_CONSTANT_COLOR,[$v]:s.CONSTANT_ALPHA,[Kv]:s.ONE_MINUS_CONSTANT_ALPHA};function Ne(F,ce,ne,Ee,ve,Se,Xe,ot,be,qe){if(F===Co){x===!0&&(Oe(s.BLEND),x=!1);return}if(x===!1&&(de(s.BLEND),x=!0),F!==Lv){if(F!==b||qe!==P){if((v!==Po||A!==Po)&&(s.blendEquation(s.FUNC_ADD),v=Po,A=Po),qe)switch(F){case al:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fm:s.blendFunc(s.ONE,s.ONE);break;case Bm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case km:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Je("WebGLState: Invalid blending: ",F);break}else switch(F){case al:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Bm:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case km:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",F);break}w=null,M=null,E=null,y=null,S.set(0,0,0),I=0,b=F,P=qe}return}ve=ve||ce,Se=Se||ne,Xe=Xe||Ee,(ce!==v||ve!==A)&&(s.blendEquationSeparate(ge[ce],ge[ve]),v=ce,A=ve),(ne!==w||Ee!==M||Se!==E||Xe!==y)&&(s.blendFuncSeparate(xe[ne],xe[Ee],xe[Se],xe[Xe]),w=ne,M=Ee,E=Se,y=Xe),(ot.equals(S)===!1||be!==I)&&(s.blendColor(ot.r,ot.g,ot.b,be),S.copy(ot),I=be),b=F,P=!1}u(Ne,"setBlending");function $e(F,ce){F.side===jt?Oe(s.CULL_FACE):de(s.CULL_FACE);let ne=F.side===Dn;ce&&(ne=!ne),it(ne),F.blending===al&&F.transparent===!1?Ne(Co):Ne(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let Ee=F.stencilWrite;a.setTest(Ee),Ee&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ft(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):Oe(s.SAMPLE_ALPHA_TO_COVERAGE)}u($e,"setMaterial");function it(F){D!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),D=F)}u(it,"setFlipSided");function Qe(F){F!==Pv?(de(s.CULL_FACE),F!==U&&(F===Om?s.cullFace(s.BACK):F===Iv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Oe(s.CULL_FACE),U=F}u(Qe,"setCullFace");function Mt(F){F!==X&&(B&&s.lineWidth(F),X=F)}u(Mt,"setLineWidth");function ft(F,ce,ne){F?(de(s.POLYGON_OFFSET_FILL),(O!==ce||Y!==ne)&&(O=ce,Y=ne,o.getReversed()&&(ce=-ce,ne=-ne),s.polygonOffset(ce,ne))):Oe(s.POLYGON_OFFSET_FILL)}u(ft,"setPolygonOffset");function bt(F){F?de(s.SCISSOR_TEST):Oe(s.SCISSOR_TEST)}u(bt,"setScissorTest");function kt(F){F===void 0&&(F=s.TEXTURE0+te-1),$!==F&&(s.activeTexture(F),$=F)}u(kt,"activeTexture");function ut(F,ce,ne){ne===void 0&&($===null?ne=s.TEXTURE0+te-1:ne=$);let Ee=Q[ne];Ee===void 0&&(Ee={type:void 0,texture:void 0},Q[ne]=Ee),(Ee.type!==F||Ee.texture!==ce)&&($!==ne&&(s.activeTexture(ne),$=ne),s.bindTexture(F,ce||fe[F]),Ee.type=F,Ee.texture=ce)}u(ut,"bindTexture");function V(){let F=Q[$];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}u(V,"unbindTexture");function Ut(){try{s.compressedTexImage2D(...arguments)}catch(F){Je("WebGLState:",F)}}u(Ut,"compressedTexImage2D");function ze(){try{s.compressedTexImage3D(...arguments)}catch(F){Je("WebGLState:",F)}}u(ze,"compressedTexImage3D");function et(){try{s.texSubImage2D(...arguments)}catch(F){Je("WebGLState:",F)}}u(et,"texSubImage2D");function _e(){try{s.texSubImage3D(...arguments)}catch(F){Je("WebGLState:",F)}}u(_e,"texSubImage3D");function _t(){try{s.compressedTexSubImage2D(...arguments)}catch(F){Je("WebGLState:",F)}}u(_t,"compressedTexSubImage2D");function We(){try{s.compressedTexSubImage3D(...arguments)}catch(F){Je("WebGLState:",F)}}u(We,"compressedTexSubImage3D");function Ze(){try{s.texStorage2D(...arguments)}catch(F){Je("WebGLState:",F)}}u(Ze,"texStorage2D");function L(){try{s.texStorage3D(...arguments)}catch(F){Je("WebGLState:",F)}}u(L,"texStorage3D");function T(){try{s.texImage2D(...arguments)}catch(F){Je("WebGLState:",F)}}u(T,"texImage2D");function q(){try{s.texImage3D(...arguments)}catch(F){Je("WebGLState:",F)}}u(q,"texImage3D");function pe(F){return p[F]!==void 0?p[F]:s.getParameter(F)}u(pe,"getParameter");function oe(F,ce){p[F]!==ce&&(s.pixelStorei(F,ce),p[F]=ce)}u(oe,"pixelStorei");function Me(F){j.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),j.copy(F))}u(Me,"scissor");function Ae(F){me.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),me.copy(F))}u(Ae,"viewport");function se(F,ce){let ne=c.get(ce);ne===void 0&&(ne=new WeakMap,c.set(ce,ne));let Ee=ne.get(F);Ee===void 0&&(Ee=s.getUniformBlockIndex(ce,F.name),s.uniformBlockBinding(ce,Ee,Ee),ne.set(F,Ee))}u(se,"updateUBOMapping");function ae(F,ce,ne){let ve=c.get(ce).get(F);l[ve]!==ne&&(s.bindBufferBase(s.UNIFORM_BUFFER,ve,ne),l[ve]=ne)}u(ae,"uniformBlockBinding");function we(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},p={},$=null,Q={},d={},l={},m=new WeakMap,g=[],_=null,x=!1,b=null,v=null,w=null,M=null,A=null,E=null,y=null,S=new Pe(0,0,0),I=0,P=!1,D=null,U=null,X=null,O=null,Y=null,j.set(0,0,s.canvas.width,s.canvas.height),me.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return u(we,"reset"),{buffers:{color:r,depth:o,stencil:a},enable:de,disable:Oe,bindFramebuffer:re,drawBuffers:ie,useProgram:he,setBlending:Ne,setMaterial:$e,setFlipSided:it,setCullFace:Qe,setLineWidth:Mt,setPolygonOffset:ft,setScissorTest:bt,activeTexture:kt,bindTexture:ut,unbindTexture:V,compressedTexImage2D:Ut,compressedTexImage3D:ze,texImage2D:T,texImage3D:q,pixelStorei:oe,getParameter:pe,updateUBOMapping:se,uniformBlockBinding:ae,texStorage2D:Ze,texStorage3D:L,texSubImage2D:et,texSubImage3D:_e,compressedTexSubImage2D:_t,compressedTexSubImage3D:We,scissor:Me,viewport:Ae,reset:we}}u(b2,"WebGLState");function y2(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,h=new WeakMap,p=new Set,d,m=new WeakMap,g=new Set,_=new FinalizationRegistry(L=>g.delete(L)),x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,T){return x?new OffscreenCanvas(L,T):$a("canvas")}u(b,"createCanvas");function v(L,T,q){let pe=1,oe=Ze(L);if((oe.width>q||oe.height>q)&&(pe=q/Math.max(oe.width,oe.height)),pe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let Me=Math.floor(pe*oe.width),Ae=Math.floor(pe*oe.height);d===void 0&&(d=b(Me,Ae));let se=T?b(Me,Ae):d;return se.width=Me,se.height=Ae,se.getContext("2d").drawImage(L,0,0,Me,Ae),He("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+Me+"x"+Ae+")."),se}else return"data"in L&&He("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),L;return L}u(v,"resizeImage");function w(L){return L.generateMipmaps}u(w,"textureNeedsGenerateMipmaps");function M(L){s.generateMipmap(L)}u(M,"generateMipmap");function A(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}u(A,"getTargetType");function E(L,T,q,pe,oe,Me=!1){if(L!==null){if(s[L]!==void 0)return s[L];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Ae;pe&&(Ae=e.get("EXT_texture_norm16"),Ae||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let se=T;if(T===s.RED&&(q===s.FLOAT&&(se=s.R32F),q===s.HALF_FLOAT&&(se=s.R16F),q===s.UNSIGNED_BYTE&&(se=s.R8),q===s.UNSIGNED_SHORT&&Ae&&(se=Ae.R16_EXT),q===s.SHORT&&Ae&&(se=Ae.R16_SNORM_EXT)),T===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(se=s.R8UI),q===s.UNSIGNED_SHORT&&(se=s.R16UI),q===s.UNSIGNED_INT&&(se=s.R32UI),q===s.BYTE&&(se=s.R8I),q===s.SHORT&&(se=s.R16I),q===s.INT&&(se=s.R32I)),T===s.RG&&(q===s.FLOAT&&(se=s.RG32F),q===s.HALF_FLOAT&&(se=s.RG16F),q===s.UNSIGNED_BYTE&&(se=s.RG8),q===s.UNSIGNED_SHORT&&Ae&&(se=Ae.RG16_EXT),q===s.SHORT&&Ae&&(se=Ae.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(se=s.RG8UI),q===s.UNSIGNED_SHORT&&(se=s.RG16UI),q===s.UNSIGNED_INT&&(se=s.RG32UI),q===s.BYTE&&(se=s.RG8I),q===s.SHORT&&(se=s.RG16I),q===s.INT&&(se=s.RG32I)),T===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(se=s.RGB8UI),q===s.UNSIGNED_SHORT&&(se=s.RGB16UI),q===s.UNSIGNED_INT&&(se=s.RGB32UI),q===s.BYTE&&(se=s.RGB8I),q===s.SHORT&&(se=s.RGB16I),q===s.INT&&(se=s.RGB32I)),T===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(se=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(se=s.RGBA16UI),q===s.UNSIGNED_INT&&(se=s.RGBA32UI),q===s.BYTE&&(se=s.RGBA8I),q===s.SHORT&&(se=s.RGBA16I),q===s.INT&&(se=s.RGBA32I)),T===s.RGB&&(q===s.UNSIGNED_SHORT&&Ae&&(se=Ae.RGB16_EXT),q===s.SHORT&&Ae&&(se=Ae.RGB16_SNORM_EXT),q===s.UNSIGNED_INT_5_9_9_9_REV&&(se=s.RGB9_E5),q===s.UNSIGNED_INT_10F_11F_11F_REV&&(se=s.R11F_G11F_B10F)),T===s.RGBA){let ae=Me?Sc:lt.getTransfer(oe);q===s.FLOAT&&(se=s.RGBA32F),q===s.HALF_FLOAT&&(se=s.RGBA16F),q===s.UNSIGNED_BYTE&&(se=ae===St?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT&&Ae&&(se=Ae.RGBA16_EXT),q===s.SHORT&&Ae&&(se=Ae.RGBA16_SNORM_EXT),q===s.UNSIGNED_SHORT_4_4_4_4&&(se=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(se=s.RGB5_A1)}return(se===s.R16F||se===s.R32F||se===s.RG16F||se===s.RG32F||se===s.RGBA16F||se===s.RGBA32F)&&e.get("EXT_color_buffer_float"),se}u(E,"getInternalFormat");function y(L,T){let q;return L?T===null||T===Bi||T===No?q=s.DEPTH24_STENCIL8:T===ti?q=s.DEPTH32F_STENCIL8:T===ul&&(q=s.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Bi||T===No?q=s.DEPTH_COMPONENT24:T===ti?q=s.DEPTH_COMPONENT32F:T===ul&&(q=s.DEPTH_COMPONENT16),q}u(y,"getInternalDepthFormat");function S(L,T){return w(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ht&&L.minFilter!==zt?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}u(S,"getMipLevels");function I(L){let T=new WeakRef(L);n.get(L).__ref=T,g.add(T),_.register(L,T,T)}u(I,"track");function P(L){let T=n.get(L).__ref;T!==void 0&&(g.delete(T),_.unregister(T))}u(P,"untrack");function D(L){X(L.target)}u(D,"onTextureDispose");function U(L){O(L.target)}u(U,"onRenderTargetDispose");function X(L){L.removeEventListener("dispose",D),P(L),te(L),L.isVideoTexture&&h.delete(L),L.isHTMLTexture&&p.delete(L)}u(X,"destroyTexture");function O(L){L.removeEventListener("dispose",U),P(L),Z(L)}u(O,"destroyRenderTarget");function Y(){for(let L of g){let T=L.deref();T!==void 0&&(T.isRenderTarget===!0?O(T):X(T))}g.clear(),p.clear()}u(Y,"dispose");function te(L){let T=n.get(L);if(T.__webglInit===void 0)return;let q=L.source,pe=m.get(q);if(pe){let oe=pe[T.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&B(L),Object.keys(pe).length===0&&m.delete(q)}n.remove(L)}u(te,"deallocateTexture");function B(L){let T=n.get(L);s.deleteTexture(T.__webglTexture);let q=L.source,pe=m.get(q);delete pe[T.__cacheKey],o.memory.textures--}u(B,"deleteTexture");function Z(L){let T=n.get(L);T.__depthDisposeCallback&&T.__depthDisposeCallback();let q=L.depthTexture;if(q&&q.renderTarget===L&&X(q),L.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(T.__webglFramebuffer[oe]))for(let Me=0;Me<T.__webglFramebuffer[oe].length;Me++)s.deleteFramebuffer(T.__webglFramebuffer[oe][Me]);else s.deleteFramebuffer(T.__webglFramebuffer[oe]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[oe])}else{if(Array.isArray(T.__webglFramebuffer))for(let oe=0;oe<T.__webglFramebuffer.length;oe++)s.deleteFramebuffer(T.__webglFramebuffer[oe]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let oe=0;oe<T.__webglColorRenderbuffer.length;oe++)T.__webglColorRenderbuffer[oe]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[oe]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let pe=L.textures;for(let oe=0,Me=pe.length;oe<Me;oe++){let Ae=n.get(pe[oe]);Ae.__webglTexture&&(s.deleteTexture(Ae.__webglTexture),o.memory.textures--),n.remove(pe[oe])}n.remove(L)}u(Z,"deallocateRenderTarget");let W=0;function $(){W=0}u($,"resetTextureUnits");function Q(){return W}u(Q,"getTextureUnits");function ue(L){W=L}u(ue,"setTextureUnits");function ye(){let L=W;return L>=i.maxTextures&&He("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+i.maxTextures),W+=1,L}u(ye,"allocateTextureUnit");function j(L){let T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.mipmapsAutoUpdate),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}u(j,"getTextureCacheKey");function me(L,T){let q=n.get(L);if(L.isVideoTexture&&_t(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&q.__version!==L.version){let pe=L.image;if(pe===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{$e(q,L,T);return}}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+T)}u(me,"setTexture2D");function le(L,T){let q=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){$e(q,L,T);return}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+T)}u(le,"setTexture2DArray");function fe(L,T){let q=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){$e(q,L,T);return}t.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+T)}u(fe,"setTexture3D");function de(L,T){let q=n.get(L);if(L.version>0&&q.__version!==L.version){it(q,L,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+T)}u(de,"setTextureCube");let Oe={[Gn]:s.REPEAT,[zn]:s.CLAMP_TO_EDGE,[qa]:s.MIRRORED_REPEAT},re={[Ht]:s.NEAREST,[$d]:s.NEAREST_MIPMAP_NEAREST,[Lo]:s.NEAREST_MIPMAP_LINEAR,[zt]:s.LINEAR,[cl]:s.LINEAR_MIPMAP_NEAREST,[vn]:s.LINEAR_MIPMAP_LINEAR},ie={[iM]:s.NEVER,[r0]:s.ALWAYS,[sM]:s.LESS,[i0]:s.LEQUAL,[rM]:s.EQUAL,[s0]:s.GEQUAL,[oM]:s.GREATER,[aM]:s.NOTEQUAL};function he(L,T){if(T.type===ti&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===zt||T.magFilter===cl||T.magFilter===Lo||T.magFilter===vn||T.minFilter===zt||T.minFilter===cl||T.minFilter===Lo||T.minFilter===vn)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,Oe[T.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,Oe[T.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,Oe[T.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,re[T.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,re[T.minFilter]),T.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,ie[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ht||T.minFilter!==Lo&&T.minFilter!==vn||T.type===ti&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}u(he,"setTextureParameters");function ge(L,T){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",D),I(T));let pe=T.source,oe=m.get(pe);oe===void 0&&(oe={},m.set(pe,oe));let Me=j(T);if(Me!==L.__cacheKey){oe[Me]===void 0&&(oe[Me]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,q=!0),oe[Me].usedTimes++;let Ae=oe[L.__cacheKey];Ae!==void 0&&(oe[L.__cacheKey].usedTimes--,Ae.usedTimes===0&&B(T)),L.__cacheKey=Me,L.__webglTexture=oe[Me].texture}return q}u(ge,"initTexture");function xe(L,T,q){return Math.floor(Math.floor(L/q)/T)}u(xe,"getRow");function Ne(L,T,q,pe){let Me=L.updateRanges;if(Me.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,q,pe,T.data);else{Me.sort((F,ce)=>F.start-ce.start);let Ae=0;for(let F=1;F<Me.length;F++){let ce=Me[Ae],ne=Me[F],Ee=ce.start+ce.count,ve=xe(ne.start,T.width,4),Se=xe(ce.start,T.width,4);ne.start<=Ee+1&&ve===Se&&xe(ne.start+ne.count-1,T.width,4)===ve?ce.count=Math.max(ce.count,ne.start+ne.count-ce.start):(++Ae,Me[Ae]=ne)}Me.length=Ae+1;let se=t.getParameter(s.UNPACK_ROW_LENGTH),ae=t.getParameter(s.UNPACK_SKIP_PIXELS),we=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let F=0,ce=Me.length;F<ce;F++){let ne=Me[F],Ee=Math.floor(ne.start/4),ve=Math.ceil(ne.count/4),Se=Ee%T.width,Xe=Math.floor(Ee/T.width),ot=ve,be=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(s.UNPACK_SKIP_ROWS,Xe),t.texSubImage2D(s.TEXTURE_2D,0,Se,Xe,ot,be,q,pe,T.data)}L.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,se),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(s.UNPACK_SKIP_ROWS,we)}}u(Ne,"updateTexture");function $e(L,T,q){let pe=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pe=s.TEXTURE_3D);let oe=ge(L,T),Me=T.source;t.bindTexture(pe,L.__webglTexture,s.TEXTURE0+q);let Ae=n.get(Me);if(Me.version!==Ae.__version||oe===!0){if(t.activeTexture(s.TEXTURE0+q),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let be=lt.getPrimaries(lt.workingColorSpace),qe=T.colorSpace===ki?null:lt.getPrimaries(T.colorSpace),st=T.colorSpace===ki||be===qe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,st)}t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let ae=v(T.image,!1,i.maxTextureSize);ae=We(T,ae);let we=r.convert(T.format,T.colorSpace),F=r.convert(T.type),ce=E(T.internalFormat,we,F,T.normalized,T.colorSpace,T.isVideoTexture);he(pe,T);let ne,Ee=T.mipmaps,ve=T.isVideoTexture!==!0,Se=Ae.__version===void 0||oe===!0,Xe=Me.dataReady,ot=S(T,ae);if(T.isDepthTexture)ce=y(T.format===nr,T.type),Se&&(ve?t.texStorage2D(s.TEXTURE_2D,1,ce,ae.width,ae.height):t.texImage2D(s.TEXTURE_2D,0,ce,ae.width,ae.height,0,we,F,null));else if(T.isDataTexture)if(Ee.length>0){ve&&Se&&t.texStorage2D(s.TEXTURE_2D,ot,ce,Ee[0].width,Ee[0].height);for(let be=0,qe=Ee.length;be<qe;be++)ne=Ee[be],ve?Xe&&t.texSubImage2D(s.TEXTURE_2D,be,0,0,ne.width,ne.height,we,F,ne.data):t.texImage2D(s.TEXTURE_2D,be,ce,ne.width,ne.height,0,we,F,ne.data);T.generateMipmaps=!1}else ve?(Se&&t.texStorage2D(s.TEXTURE_2D,ot,ce,ae.width,ae.height),Xe&&Ne(T,ae,we,F)):t.texImage2D(s.TEXTURE_2D,0,ce,ae.width,ae.height,0,we,F,ae.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ve&&Se&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ot,ce,Ee[0].width,Ee[0].height,ae.depth);for(let be=0,qe=Ee.length;be<qe;be++)if(ne=Ee[be],T.format!==Xn)if(we!==null)if(ve){if(Xe)if(T.layerUpdates.size>0){let st=m0(ne.width,ne.height,T.format,T.type);for(let Le of T.layerUpdates){let wt=ne.data.subarray(Le*st/ne.data.BYTES_PER_ELEMENT,(Le+1)*st/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,Le,ne.width,ne.height,1,we,wt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,0,ne.width,ne.height,ae.depth,we,ne.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,be,ce,ne.width,ne.height,ae.depth,0,ne.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ve?Xe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,0,ne.width,ne.height,ae.depth,we,F,ne.data):t.texImage3D(s.TEXTURE_2D_ARRAY,be,ce,ne.width,ne.height,ae.depth,0,we,F,ne.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{ve&&Se&&t.texStorage2D(s.TEXTURE_2D,ot,ce,Ee[0].width,Ee[0].height);for(let be=0,qe=Ee.length;be<qe;be++)ne=Ee[be],T.format!==Xn?we!==null?ve?Xe&&t.compressedTexSubImage2D(s.TEXTURE_2D,be,0,0,ne.width,ne.height,we,ne.data):t.compressedTexImage2D(s.TEXTURE_2D,be,ce,ne.width,ne.height,0,ne.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?Xe&&t.texSubImage2D(s.TEXTURE_2D,be,0,0,ne.width,ne.height,we,F,ne.data):t.texImage2D(s.TEXTURE_2D,be,ce,ne.width,ne.height,0,we,F,ne.data)}else if(T.isDataArrayTexture)if(ve){if(Se&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ot,ce,ae.width,ae.height,ae.depth),Xe)if(T.layerUpdates.size>0){let be=m0(ae.width,ae.height,T.format,T.type);for(let qe of T.layerUpdates){let st=ae.data.subarray(qe*be/ae.data.BYTES_PER_ELEMENT,(qe+1)*be/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,qe,ae.width,ae.height,1,we,F,st)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,we,F,ae.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ce,ae.width,ae.height,ae.depth,0,we,F,ae.data);else if(T.isData3DTexture)ve?(Se&&t.texStorage3D(s.TEXTURE_3D,ot,ce,ae.width,ae.height,ae.depth),Xe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,we,F,ae.data)):t.texImage3D(s.TEXTURE_3D,0,ce,ae.width,ae.height,ae.depth,0,we,F,ae.data);else if(T.isFramebufferTexture){if(Se)if(ve)t.texStorage2D(s.TEXTURE_2D,ot,ce,ae.width,ae.height);else{let be=ae.width,qe=ae.height;for(let st=0;st<ot;st++)t.texImage2D(s.TEXTURE_2D,st,ce,be,qe,0,we,F,null),be>>=1,qe>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){let be=s.canvas;if(be.hasAttribute("layoutsubtree")||be.setAttribute("layoutsubtree","true"),ae.parentNode!==be){be.appendChild(ae),p.add(T),be.onpaint=qe=>{let st=qe.changedElements;for(let Le of p)st.includes(Le.image)&&(Le.needsUpdate=!0)},be.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ae);else{let st=s.RGBA,Le=s.RGBA,wt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,st,Le,wt,ae)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ee.length>0){if(ve&&Se){let be=Ze(Ee[0]);t.texStorage2D(s.TEXTURE_2D,ot,ce,be.width,be.height)}for(let be=0,qe=Ee.length;be<qe;be++)ne=Ee[be],ve?Xe&&t.texSubImage2D(s.TEXTURE_2D,be,0,0,we,F,ne):t.texImage2D(s.TEXTURE_2D,be,ce,we,F,ne);T.generateMipmaps=!1}else if(ve){if(Se){let be=Ze(ae);t.texStorage2D(s.TEXTURE_2D,ot,ce,be.width,be.height)}Xe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,we,F,ae)}else t.texImage2D(s.TEXTURE_2D,0,ce,we,F,ae);w(T)&&T.mipmapsAutoUpdate===!0&&M(pe),Ae.__version=Me.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}u($e,"uploadTexture");function it(L,T,q){if(T.image.length!==6)return;let pe=ge(L,T),oe=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+q);let Me=n.get(oe);if(oe.version!==Me.__version||pe===!0){t.activeTexture(s.TEXTURE0+q);let Ae=lt.getPrimaries(lt.workingColorSpace),se=T.colorSpace===ki?null:lt.getPrimaries(T.colorSpace),ae=T.colorSpace===ki||Ae===se?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let we=T.isCompressedTexture||T.image[0].isCompressedTexture,F=T.image[0]&&T.image[0].isDataTexture,ce=[];for(let Le=0;Le<6;Le++)!we&&!F?ce[Le]=v(T.image[Le],!0,i.maxCubemapSize):ce[Le]=F?T.image[Le].image:T.image[Le],ce[Le]=We(T,ce[Le]);let ne=ce[0],Ee=r.convert(T.format,T.colorSpace),ve=r.convert(T.type),Se=E(T.internalFormat,Ee,ve,T.normalized,T.colorSpace),Xe=T.isVideoTexture!==!0,ot=Me.__version===void 0||pe===!0,be=oe.dataReady,qe=S(T,ne);he(s.TEXTURE_CUBE_MAP,T);let st;if(T.isDepthTexture){if(Se=y(T.format===nr,T.type),ot)if(Xe)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,Se,ne.width,ne.height);else for(let Le=0;Le<6;Le++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Se,ne.width,ne.height,0,Ee,ve,null)}else if(we){Xe&&ot&&t.texStorage2D(s.TEXTURE_CUBE_MAP,qe,Se,ne.width,ne.height);for(let Le=0;Le<6;Le++){st=ce[Le].mipmaps;for(let wt=0;wt<st.length;wt++){let sn=st[wt];T.format!==Xn?Ee!==null?Xe?be&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,wt,0,0,sn.width,sn.height,Ee,sn.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,wt,Se,sn.width,sn.height,0,sn.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?be&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,wt,0,0,sn.width,sn.height,Ee,ve,sn.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,wt,Se,sn.width,sn.height,0,Ee,ve,sn.data)}}}else{if(st=T.mipmaps,Xe&&ot){st.length>0&&qe++;let Le=Ze(ce[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,qe,Se,Le.width,Le.height)}for(let Le=0;Le<6;Le++)if(F){Xe?be&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,ce[Le].width,ce[Le].height,Ee,ve,ce[Le].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Se,ce[Le].width,ce[Le].height,0,Ee,ve,ce[Le].data);for(let wt=0;wt<st.length;wt++){let br=st[wt].image[Le].image;Xe?be&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,wt+1,0,0,br.width,br.height,Ee,ve,br.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,wt+1,Se,br.width,br.height,0,Ee,ve,br.data)}}else{Xe?be&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,Ee,ve,ce[Le]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Se,Ee,ve,ce[Le]);for(let wt=0;wt<st.length;wt++){let sn=st[wt];Xe?be&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,wt+1,0,0,Ee,ve,sn.image[Le]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,wt+1,Se,Ee,ve,sn.image[Le])}}}w(T)&&T.mipmapsAutoUpdate===!0&&M(s.TEXTURE_CUBE_MAP),Me.__version=oe.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}u(it,"uploadCubeTexture");function Qe(L,T,q,pe,oe,Me){let Ae=r.convert(q.format,q.colorSpace),se=r.convert(q.type),ae=E(q.internalFormat,Ae,se,q.normalized,q.colorSpace),we=n.get(T),F=n.get(q);if(F.__renderTarget=T,!we.__hasExternalTextures){let ce=Math.max(1,T.width>>Me),ne=Math.max(1,T.height>>Me);oe===s.TEXTURE_3D||oe===s.TEXTURE_2D_ARRAY?t.texImage3D(oe,Me,ae,ce,ne,T.depth,0,Ae,se,null):t.texImage2D(oe,Me,ae,ce,ne,0,Ae,se,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),_e(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,oe,F.__webglTexture,0,et(T)):(oe===s.TEXTURE_2D||oe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,oe,F.__webglTexture,Me),t.bindFramebuffer(s.FRAMEBUFFER,null)}u(Qe,"setupFrameBufferTexture");function Mt(L,T,q){if(s.bindRenderbuffer(s.RENDERBUFFER,L),T.depthBuffer){let pe=T.depthTexture,oe=pe&&pe.isDepthTexture?pe.type:null,Me=y(T.stencilBuffer,oe),Ae=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;_e(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,et(T),Me,T.width,T.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,et(T),Me,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Me,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ae,s.RENDERBUFFER,L)}else{let pe=T.textures;for(let oe=0;oe<pe.length;oe++){let Me=pe[oe],Ae=r.convert(Me.format,Me.colorSpace),se=r.convert(Me.type),ae=E(Me.internalFormat,Ae,se,Me.normalized,Me.colorSpace);_e(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,et(T),ae,T.width,T.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,et(T),ae,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ae,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}u(Mt,"setupRenderBufferStorage");function ft(L,T,q){let pe=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let oe=n.get(T.depthTexture);oe.__renderTarget=T;let Me=pe?T.depthTexture.image[0]:T.depthTexture.image;(!oe.__webglTexture||Me.width!==T.width||Me.height!==T.height)&&(Me.width=T.width,Me.height=T.height,T.depthTexture.needsUpdate=!0),pe?de(T.depthTexture,0):me(T.depthTexture,0);let Ae=oe.__webglTexture,se=et(T),ae=pe?s.TEXTURE_CUBE_MAP_POSITIVE_X+q:s.TEXTURE_2D,we=T.depthTexture.format===nr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===qs)_e(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,we,ae,Ae,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,we,ae,Ae,0);else if(T.depthTexture.format===nr)_e(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,we,ae,Ae,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,we,ae,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}u(ft,"setupDepthTexture");function bt(L){let T=n.get(L),q=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){let pe=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pe){let oe=u(()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pe.removeEventListener("dispose",oe)},"disposeEvent");pe.addEventListener("dispose",oe),T.__depthDisposeCallback=oe}T.__boundDepthTexture=pe}if(L.depthTexture&&!T.__autoAllocateDepthBuffer)if(q)for(let pe=0;pe<6;pe++)ft(T.__webglFramebuffer[pe],L,pe);else L.texture.mipmaps.length>0?ft(T.__webglFramebuffer[0],L,0):ft(T.__webglFramebuffer,L,0);else if(q){T.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[pe]),T.__webglDepthbuffer[pe]===void 0)T.__webglDepthbuffer[pe]=s.createRenderbuffer(),Mt(T.__webglDepthbuffer[pe],L,!1);else{let oe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=T.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,oe,s.RENDERBUFFER,Me)}}else if(L.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Mt(T.__webglDepthbuffer,L,!1);else{let oe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,oe,s.RENDERBUFFER,Me)}t.bindFramebuffer(s.FRAMEBUFFER,null)}u(bt,"setupDepthRenderbuffer");function kt(L,T,q){let pe=n.get(L);T!==void 0&&Qe(pe.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&bt(L)}u(kt,"rebindTextures");function ut(L){let T=L.texture,q=n.get(L),pe=n.get(T);L.addEventListener("dispose",U),I(L);let oe=L.textures,Me=L.isWebGLCubeRenderTarget===!0,Ae=oe.length>1;if(Ae||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=T.version,o.memory.textures++),Me){q.__webglFramebuffer=[];for(let se=0;se<6;se++)if(T.mipmaps.length>0){q.__webglFramebuffer[se]=[];for(let ae=0;ae<T.mipmaps.length;ae++)q.__webglFramebuffer[se][ae]=s.createFramebuffer()}else q.__webglFramebuffer[se]=s.createFramebuffer()}else{if(T.mipmaps.length>0){q.__webglFramebuffer=[];for(let se=0;se<T.mipmaps.length;se++)q.__webglFramebuffer[se]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(Ae)for(let se=0,ae=oe.length;se<ae;se++){let we=n.get(oe[se]);we.__webglTexture===void 0&&(we.__webglTexture=s.createTexture(),o.memory.textures++)}if(L.samples>0&&_e(L)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let se=0;se<oe.length;se++){let ae=oe[se];q.__webglColorRenderbuffer[se]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[se]);let we=r.convert(ae.format,ae.colorSpace),F=r.convert(ae.type),ce=E(ae.internalFormat,we,F,ae.normalized,ae.colorSpace,L.isXRRenderTarget===!0),ne=et(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,ce,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+se,s.RENDERBUFFER,q.__webglColorRenderbuffer[se])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),Mt(q.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Me){t.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),he(s.TEXTURE_CUBE_MAP,T);for(let se=0;se<6;se++)if(T.mipmaps.length>0)for(let ae=0;ae<T.mipmaps.length;ae++)Qe(q.__webglFramebuffer[se][ae],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ae);else Qe(q.__webglFramebuffer[se],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);w(T)?M(s.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(Ae){for(let se=0,ae=oe.length;se<ae;se++){let we=oe[se],F=n.get(we),ce=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ce=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ce,F.__webglTexture),he(ce,we),Qe(q.__webglFramebuffer,L,we,s.COLOR_ATTACHMENT0+se,ce,0),w(we)&&M(ce)}t.unbindTexture()}else{let se=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(se=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(se,pe.__webglTexture),he(se,T),T.mipmaps.length>0)for(let ae=0;ae<T.mipmaps.length;ae++)Qe(q.__webglFramebuffer[ae],L,T,s.COLOR_ATTACHMENT0,se,ae);else Qe(q.__webglFramebuffer,L,T,s.COLOR_ATTACHMENT0,se,0);w(T)?M(se):T.mipmaps.length>0&&s.texParameteri(se,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}L.depthBuffer&&bt(L)}u(ut,"setupRenderTarget");function V(L){let T=L.textures;for(let q=0,pe=T.length;q<pe;q++){let oe=T[q];if(w(oe)&&oe.mipmapsAutoUpdate===!0){let Me=A(L),Ae=n.get(oe).__webglTexture;t.bindTexture(Me,Ae),M(Me),t.unbindTexture()}}}u(V,"updateRenderTargetMipmap");let Ut=[];function ze(L){if(L.samples>0){if(_e(L)===!1){let T=L.textures,q=L.width,pe=L.height,oe=s.COLOR_BUFFER_BIT,Me=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=n.get(L),se=T.length>1;if(se)for(let we=0;we<T.length;we++)t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let we=0;we<T.length;we++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(oe|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(oe|=s.STENCIL_BUFFER_BIT)),se){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[we]);let F=n.get(T[we]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,F,0)}s.blitFramebuffer(0,0,q,pe,0,0,q,pe,oe,s.NEAREST),l===!0&&(Ut.length=0,Ut.push(s.COLOR_ATTACHMENT0+we),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&Ut.push(Me),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ut))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),se)for(let we=0;we<T.length;we++){t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[we]);let F=n.get(T[we]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,F,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let T=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}u(ze,"updateMultisampleRenderTarget");function et(L){return Math.min(i.maxSamples,L.samples)}u(et,"getRenderTargetSamples");function _e(L){let T=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}u(_e,"useMultisampledRTT");function _t(L){let T=o.render.frame;h.get(L)!==T&&(h.set(L,T),L.update())}u(_t,"updateVideoTexture");function We(L,T){let q=L.colorSpace,pe=L.format,oe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==Pn&&q!==ki&&(lt.getTransfer(q)===St?(pe!==Xn||oe!==Mn)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",q)),T}u(We,"verifyColorSpace");function Ze(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}u(Ze,"getDimensions"),this.allocateTextureUnit=ye,this.resetTextureUnits=$,this.getTextureUnits=Q,this.setTextureUnits=ue,this.setTexture2D=me,this.setTexture2DArray=le,this.setTexture3D=fe,this.setTextureCube=de,this.rebindTextures=kt,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=_e,this.dispose=Y}u(y2,"WebGLTextures");function _2(s,e){function t(n,i=ki){let r,o=lt.getTransfer(i);if(n===Mn)return s.UNSIGNED_BYTE;if(n===Zd)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Jd)return s.UNSIGNED_SHORT_5_5_5_1;if(n===jm)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Qm)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Zm)return s.BYTE;if(n===Jm)return s.SHORT;if(n===ul)return s.UNSIGNED_SHORT;if(n===Kd)return s.INT;if(n===Bi)return s.UNSIGNED_INT;if(n===ti)return s.FLOAT;if(n===ni)return s.HALF_FLOAT;if(n===e0)return s.ALPHA;if(n===t0)return s.RGB;if(n===Xn)return s.RGBA;if(n===qs)return s.DEPTH_COMPONENT;if(n===nr)return s.DEPTH_STENCIL;if(n===jd)return s.RED;if(n===Qd)return s.RED_INTEGER;if(n===us)return s.RG;if(n===ef)return s.RG_INTEGER;if(n===tf)return s.RGBA_INTEGER;if(n===Jc||n===jc||n===Qc||n===eu)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Jc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===eu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Jc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===eu)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nf||n===sf||n===rf||n===of)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===nf)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sf)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===rf)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===of)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===af||n===lf||n===cf||n===uf||n===hf||n===tu||n===df)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===af||n===lf)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===cf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===uf)return r.COMPRESSED_R11_EAC;if(n===hf)return r.COMPRESSED_SIGNED_R11_EAC;if(n===tu)return r.COMPRESSED_RG11_EAC;if(n===df)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ff||n===pf||n===mf||n===gf||n===xf||n===bf||n===yf||n===_f||n===vf||n===Mf||n===Sf||n===wf||n===Ef||n===Tf)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ff)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===mf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_f)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ef)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Tf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Af||n===Rf||n===Cf)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Af)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rf)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Cf)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pf||n===If||n===nu||n===Lf)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Pf)return r.COMPRESSED_RED_RGTC1_EXT;if(n===If)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Lf)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===No?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return u(t,"convert"),{convert:t}}u(_2,"WebGLUtils");var v2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M2=`
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

}`,mx=class mx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Fc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ln({vertexShader:v2,fragmentShader:M2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new os(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};u(mx,"WebXRDepthSensing");var ox=mx,gx=class gx extends ns{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,p=null,d=null,m=null,g=null,_=typeof XRWebGLBinding<"u",x=new ox,b={},v=t.getContextAttributes(),w=null,M=null,A=[],E=[],y=new Ve,S=null,I=null,P=new Zt;P.viewport=new Et;let D=new Zt;D.viewport=new Et;let U=[P,D],X=new Ed,O=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let me=A[j];return me===void 0&&(me=new ja,A[j]=me),me.getTargetRaySpace()},this.getControllerGrip=function(j){let me=A[j];return me===void 0&&(me=new ja,A[j]=me),me.getGripSpace()},this.getHand=function(j){let me=A[j];return me===void 0&&(me=new ja,A[j]=me),me.getHandSpace()};function te(j){let me=E.indexOf(j.inputSource);if(me===-1)return;let le=A[me];le!==void 0&&(le.update(j.inputSource,j.frame,c||o),le.dispatchEvent({type:j.type,data:j.inputSource}))}u(te,"onSessionEvent");function B(){i.removeEventListener("select",te),i.removeEventListener("selectstart",te),i.removeEventListener("selectend",te),i.removeEventListener("squeeze",te),i.removeEventListener("squeezestart",te),i.removeEventListener("squeezeend",te),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",Z);for(let j=0;j<A.length;j++){let me=E[j];me!==null&&(E[j]=null,A[j].disconnect(me))}O=null,Y=null,x.reset();for(let j in b)delete b[j];if(e.setRenderTarget(w),m=null,d=null,p=null,i=null,M=null,ye.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(y.width,y.height,!1),I!==null){let j=I.camera;j.fov=I.fov,j.zoom=I.zoom,j.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}u(B,"onSessionEnd"),this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return p===null&&_&&(p=new XRWebGLBinding(i,t)),p},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(w=e.getRenderTarget(),i.addEventListener("select",te),i.addEventListener("selectstart",te),i.addEventListener("selectend",te),i.addEventListener("squeeze",te),i.addEventListener("squeezestart",te),i.addEventListener("squeezeend",te),i.addEventListener("end",B),i.addEventListener("inputsourceschange",Z),v.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(y),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,fe=null,de=null;v.depth&&(de=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=v.stencil?nr:qs,fe=v.stencil?No:Bi);let Oe={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};p=this.getBinding(),d=p.createProjectionLayer(Oe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new jn(d.textureWidth,d.textureHeight,{format:Xn,type:Mn,depthTexture:new $s(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let le={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,le),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new jn(m.framebufferWidth,m.framebufferHeight,{format:Xn,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ye.setContext(i),ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(j){for(let me=0;me<j.removed.length;me++){let le=j.removed[me],fe=E.indexOf(le);fe>=0&&(E[fe]=null,A[fe].disconnect(le))}for(let me=0;me<j.added.length;me++){let le=j.added[me],fe=E.indexOf(le);if(fe===-1){for(let Oe=0;Oe<A.length;Oe++)if(Oe>=E.length){E.push(le),fe=Oe;break}else if(E[Oe]===null){E[Oe]=le,fe=Oe;break}if(fe===-1)break}let de=A[fe];de&&de.connect(le)}}u(Z,"onInputSourcesChange");function W(j,me){me===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(me.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}u(W,"updateCamera"),this.updateCamera=function(j){if(i===null)return;let me=j.near,le=j.far;x.texture!==null&&(x.depthNear>0&&(me=x.depthNear),x.depthFar>0&&(le=x.depthFar)),X.near=D.near=P.near=me,X.far=D.far=P.far=le,(O!==X.near||Y!==X.far)&&(i.updateRenderState({depthNear:X.near,depthFar:X.far}),O=X.near,Y=X.far),X.layers.mask=j.layers.mask|6,P.layers.mask=X.layers.mask&-5,D.layers.mask=X.layers.mask&-3;let fe=j.parent,de=X.cameras;W(X,fe);for(let Oe=0;Oe<de.length;Oe++)W(de[Oe],fe);X.projectionMatrix.copy(P.projectionMatrix),X.projectionMatrixInverse.copy(P.projectionMatrixInverse),I===null&&j.isPerspectiveCamera&&(I={camera:j,fov:j.fov,zoom:j.zoom}),$(j,X,fe)};function $(j,me,le){le===null?j.matrix.copy(me.matrixWorld):(j.matrix.copy(le.matrixWorld),j.matrix.invert(),j.matrix.multiply(me.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(me.projectionMatrix),j.projectionMatrixInverse.copy(me.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Mo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}u($,"updateUserCamera"),this.getCamera=function(){return X},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(X)},this.getCameraTexture=function(j){return b[j]};let Q=null;function ue(j,me){if(h=me.getViewerPose(c||o),g=me,h!==null){let le=h.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let fe=!1;le.length!==X.cameras.length&&(X.cameras.length=0,fe=!0);for(let ie=0;ie<le.length;ie++){let he=le[ie],ge=null;if(m!==null)ge=m.getViewport(he);else{let Ne=p.getViewSubImage(d,he);ge=Ne.viewport,ie===0&&(e.setRenderTargetTextures(M,Ne.colorTexture,Ne.depthStencilTexture),e.setRenderTarget(M))}let xe=U[ie];xe===void 0&&(xe=new Zt,xe.layers.enable(ie),xe.viewport=new Et,U[ie]=xe),xe.matrix.fromArray(he.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(he.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(ge.x,ge.y,ge.width,ge.height),ie===0&&(X.matrix.copy(xe.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),fe===!0&&X.cameras.push(xe)}let de=i.enabledFeatures;if(de&&de.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){p=n.getBinding();let ie=p.getDepthInformation(le[0]);ie&&ie.isValid&&ie.texture&&x.init(ie,i.renderState)}if(de&&de.includes("camera-access")&&_){e.state.unbindTexture(),p=n.getBinding();for(let ie=0;ie<le.length;ie++){let he=le[ie].camera;if(he){let ge=b[he];ge||(ge=new Fc,b[he]=ge);let xe=p.getCameraImage(he);ge.sourceTexture=xe}}}}for(let le=0;le<A.length;le++){let fe=E[le],de=A[le];fe!==null&&de!==void 0&&de.update(fe,me,c||o)}Q&&Q(j,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),g=null}u(ue,"onAnimationFrame");let ye=new FM;ye.setAnimationLoop(ue),this.setAnimationLoop=function(j){Q=j},this.dispose=function(){}}};u(gx,"WebXRManager");var ax=gx,S2=new Ke,YM=new je;YM.set(-1,0,0,0,1,0,0,0,1);function w2(s,e){function t(x,b){x.matrixAutoUpdate===!0&&x.updateMatrix(),b.value.copy(x.matrix)}u(t,"refreshTransformUniform");function n(x,b){b.color.getRGB(x.fogColor.value,d0(s)),b.isFog?(x.fogNear.value=b.near,x.fogFar.value=b.far):b.isFogExp2&&(x.fogDensity.value=b.density)}u(n,"refreshFogUniforms");function i(x,b,v,w,M){b.isNodeMaterial?b.uniformsNeedUpdate=!1:b.isMeshBasicMaterial?r(x,b):b.isMeshLambertMaterial?(r(x,b),b.envMap&&(x.envMapIntensity.value=b.envMapIntensity)):b.isMeshToonMaterial?(r(x,b),p(x,b)):b.isMeshPhongMaterial?(r(x,b),h(x,b),b.envMap&&(x.envMapIntensity.value=b.envMapIntensity)):b.isMeshStandardMaterial?(r(x,b),d(x,b),b.isMeshPhysicalMaterial&&m(x,b,M)):b.isMeshMatcapMaterial?(r(x,b),g(x,b)):b.isMeshDepthMaterial?r(x,b):b.isMeshDistanceMaterial?(r(x,b),_(x,b)):b.isMeshNormalMaterial?r(x,b):b.isLineBasicMaterial?(o(x,b),b.isLineDashedMaterial&&a(x,b)):b.isPointsMaterial?l(x,b,v,w):b.isSpriteMaterial?c(x,b):b.isShadowMaterial?(x.color.value.copy(b.color),x.opacity.value=b.opacity):b.isShaderMaterial&&(b.uniformsNeedUpdate=!1)}u(i,"refreshMaterialUniforms");function r(x,b){x.opacity.value=b.opacity,b.color&&x.diffuse.value.copy(b.color),b.emissive&&x.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity),b.map&&(x.map.value=b.map,t(b.map,x.mapTransform)),b.alphaMap&&(x.alphaMap.value=b.alphaMap,t(b.alphaMap,x.alphaMapTransform)),b.bumpMap&&(x.bumpMap.value=b.bumpMap,t(b.bumpMap,x.bumpMapTransform),x.bumpScale.value=b.bumpScale,b.side===Dn&&(x.bumpScale.value*=-1)),b.normalMap&&(x.normalMap.value=b.normalMap,t(b.normalMap,x.normalMapTransform),x.normalScale.value.copy(b.normalScale),b.side===Dn&&x.normalScale.value.negate()),b.displacementMap&&(x.displacementMap.value=b.displacementMap,t(b.displacementMap,x.displacementMapTransform),x.displacementScale.value=b.displacementScale,x.displacementBias.value=b.displacementBias),b.emissiveMap&&(x.emissiveMap.value=b.emissiveMap,t(b.emissiveMap,x.emissiveMapTransform)),b.specularMap&&(x.specularMap.value=b.specularMap,t(b.specularMap,x.specularMapTransform)),b.alphaTest>0&&(x.alphaTest.value=b.alphaTest);let v=e.get(b),w=v.envMap,M=v.envMapRotation;w&&(x.envMap.value=w,x.envMapRotation.value.setFromMatrix4(S2.makeRotationFromEuler(M)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(YM),x.reflectivity.value=b.reflectivity,x.ior.value=b.ior,x.refractionRatio.value=b.refractionRatio),b.lightMap&&(x.lightMap.value=b.lightMap,x.lightMapIntensity.value=b.lightMapIntensity,t(b.lightMap,x.lightMapTransform)),b.aoMap&&(x.aoMap.value=b.aoMap,x.aoMapIntensity.value=b.aoMapIntensity,t(b.aoMap,x.aoMapTransform))}u(r,"refreshUniformsCommon");function o(x,b){x.diffuse.value.copy(b.color),x.opacity.value=b.opacity,b.map&&(x.map.value=b.map,t(b.map,x.mapTransform))}u(o,"refreshUniformsLine");function a(x,b){x.dashSize.value=b.dashSize,x.totalSize.value=b.dashSize+b.gapSize,x.scale.value=b.scale}u(a,"refreshUniformsDash");function l(x,b,v,w){x.diffuse.value.copy(b.color),x.opacity.value=b.opacity,x.size.value=b.size*v,x.scale.value=w*.5,b.map&&(x.map.value=b.map,t(b.map,x.uvTransform)),b.alphaMap&&(x.alphaMap.value=b.alphaMap,t(b.alphaMap,x.alphaMapTransform)),b.alphaTest>0&&(x.alphaTest.value=b.alphaTest)}u(l,"refreshUniformsPoints");function c(x,b){x.diffuse.value.copy(b.color),x.opacity.value=b.opacity,x.rotation.value=b.rotation,b.map&&(x.map.value=b.map,t(b.map,x.mapTransform)),b.alphaMap&&(x.alphaMap.value=b.alphaMap,t(b.alphaMap,x.alphaMapTransform)),b.alphaTest>0&&(x.alphaTest.value=b.alphaTest)}u(c,"refreshUniformsSprites");function h(x,b){x.specular.value.copy(b.specular),x.shininess.value=Math.max(b.shininess,1e-4)}u(h,"refreshUniformsPhong");function p(x,b){b.gradientMap&&(x.gradientMap.value=b.gradientMap)}u(p,"refreshUniformsToon");function d(x,b){x.metalness.value=b.metalness,b.metalnessMap&&(x.metalnessMap.value=b.metalnessMap,t(b.metalnessMap,x.metalnessMapTransform)),x.roughness.value=b.roughness,b.roughnessMap&&(x.roughnessMap.value=b.roughnessMap,t(b.roughnessMap,x.roughnessMapTransform)),b.envMap&&(x.envMapIntensity.value=b.envMapIntensity)}u(d,"refreshUniformsStandard");function m(x,b,v){x.ior.value=b.ior,b.diffuseRoughness>0&&(x.diffuseRoughness.value=b.diffuseRoughness,b.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=b.diffuseRoughnessMap,t(b.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),b.sheen>0&&(x.sheenColor.value.copy(b.sheenColor).multiplyScalar(b.sheen),x.sheenRoughness.value=b.sheenRoughness,b.sheenColorMap&&(x.sheenColorMap.value=b.sheenColorMap,t(b.sheenColorMap,x.sheenColorMapTransform)),b.sheenRoughnessMap&&(x.sheenRoughnessMap.value=b.sheenRoughnessMap,t(b.sheenRoughnessMap,x.sheenRoughnessMapTransform))),b.clearcoat>0&&(x.clearcoat.value=b.clearcoat,x.clearcoatRoughness.value=b.clearcoatRoughness,b.clearcoatMap&&(x.clearcoatMap.value=b.clearcoatMap,t(b.clearcoatMap,x.clearcoatMapTransform)),b.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=b.clearcoatRoughnessMap,t(b.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),b.clearcoatNormalMap&&(x.clearcoatNormalMap.value=b.clearcoatNormalMap,t(b.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(b.clearcoatNormalScale),b.side===Dn&&x.clearcoatNormalScale.value.negate())),b.dispersion>0&&(x.dispersion.value=b.dispersion),b.retroreflectivity>0&&(x.retroreflectivity.value=b.retroreflectivity),b.iridescence>0&&(x.iridescence.value=b.iridescence,x.iridescenceIOR.value=b.iridescenceIOR,x.iridescenceThicknessMinimum.value=b.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=b.iridescenceThicknessMaximum,b.iridescenceMap&&(x.iridescenceMap.value=b.iridescenceMap,t(b.iridescenceMap,x.iridescenceMapTransform)),b.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=b.iridescenceThicknessMap,t(b.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),b.transmission>0&&(x.transmission.value=b.transmission,x.transmissionSamplerMap.value=v.texture,x.transmissionSamplerSize.value.set(v.width,v.height),b.transmissionMap&&(x.transmissionMap.value=b.transmissionMap,t(b.transmissionMap,x.transmissionMapTransform)),x.thickness.value=b.thickness,b.thicknessMap&&(x.thicknessMap.value=b.thicknessMap,t(b.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=b.attenuationDistance,x.attenuationColor.value.copy(b.attenuationColor)),b.anisotropy>0&&(x.anisotropyVector.value.set(b.anisotropy*Math.cos(b.anisotropyRotation),b.anisotropy*Math.sin(b.anisotropyRotation)),b.anisotropyMap&&(x.anisotropyMap.value=b.anisotropyMap,t(b.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=b.specularIntensity,x.specularColor.value.copy(b.specularColor),b.specularColorMap&&(x.specularColorMap.value=b.specularColorMap,t(b.specularColorMap,x.specularColorMapTransform)),b.specularIntensityMap&&(x.specularIntensityMap.value=b.specularIntensityMap,t(b.specularIntensityMap,x.specularIntensityMapTransform))}u(m,"refreshUniformsPhysical");function g(x,b){b.matcap&&(x.matcap.value=b.matcap)}u(g,"refreshUniformsMatcap");function _(x,b){let v=e.get(b).light;x.referencePosition.value.setFromMatrixPosition(v.matrixWorld),x.nearDistance.value=v.shadow.camera.near,x.farDistance.value=v.shadow.camera.far}return u(_,"refreshUniformsDistance"),{refreshFogUniforms:n,refreshMaterialUniforms:i}}u(w2,"WebGLMaterials");function E2(s,e,t,n){let i={},r={};function o(v,w){let M=w.program;n.uniformBlockBinding(v,M,i[v.id])}u(o,"bind");function a(v,w){let M=i[v.id];M===void 0&&(g(v),M=l(v),i[v.id]=M,v.addEventListener("dispose",x));let A=w.program;n.updateUBOMapping(v,A);let E=e.render.frame;r[v.id]!==E&&(c(v),r[v.id]=E)}u(a,"update");function l(v){let w=s.createBuffer(),M=v.__size,A=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,M,A),s.bindBuffer(s.UNIFORM_BUFFER,null),w}u(l,"createBuffer");function c(v){let w=i[v.id],M=v.uniforms,A=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let E=0,y=M.length;E<y;E++){let S=M[E];if(Array.isArray(S))for(let I=0,P=S.length;I<P;I++)h(S[I],E,I,A);else h(S,E,0,A)}s.bindBuffer(s.UNIFORM_BUFFER,null)}u(c,"updateBufferData");function h(v,w,M,A){if(d(v,w,M,A)===!0){let E=v.__offset,y=v.value;if(Array.isArray(y)){let S=0;for(let I=0;I<y.length;I++){let P=y[I],D=_(P,!0);p(P,v.__data,S),S+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else p(y,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,v.__data)}}u(h,"updateUniform");function p(v,w,M){typeof v=="number"||typeof v=="boolean"?w[M]=v:v.isMatrix3?(w[M]=v.elements[0],w[M+1]=v.elements[1],w[M+2]=v.elements[2],w[M+3]=0,w[M+4]=v.elements[3],w[M+5]=v.elements[4],w[M+6]=v.elements[5],w[M+7]=0,w[M+8]=v.elements[6],w[M+9]=v.elements[7],w[M+10]=v.elements[8],w[M+11]=0):ArrayBuffer.isView(v)?w.set(v.subarray(0,w.length-M),M):v.toArray(w,M)}u(p,"writeUniformValue");function d(v,w,M,A){let E=v.value,y=w+"_"+M;if(Array.isArray(E)){A[y]===void 0&&(A[y]=[]);let S=A[y],I=!1;for(let P=0;P<E.length;P++)m(E[P],S,P)===!0&&(I=!0);return I}return m(E,A,y)}u(d,"hasUniformChanged");function m(v,w,M){if(w[M]===void 0)return typeof v=="number"||typeof v=="boolean"?w[M]=v:ArrayBuffer.isView(v)?w[M]=v.slice():w[M]=v.clone(),!0;{let A=w[M];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return w[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(A.equals(v)===!1)return A.copy(v),!0}}return!1}u(m,"hasValueChanged");function g(v){let w=v.uniforms,M=0,A=16;for(let y=0,S=w.length;y<S;y++){let I=Array.isArray(w[y])?w[y]:[w[y]];for(let P=0,D=I.length;P<D;P++){let U=I[P],X=Array.isArray(U.value)?U.value:[U.value],O=Array.isArray(w[y])||Array.isArray(U.value),Y=M;for(let B=0,Z=X.length;B<Z;B++){let W=X[B],$=_(W,O),Q=M%A,ue=Q%$.boundary,ye=Q+ue;M+=ue,ye!==0&&A-ye<$.storage&&(M+=A-ye),B===0&&(Y=M),M+=$.storage}let te=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new te((M-Y)/Float32Array.BYTES_PER_ELEMENT),U.__offset=Y}}let E=M%A;return E>0&&(M+=A-E),v.__size=M,v.__cache={},this}u(g,"prepareUniformsGroup");function _(v,w){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=16,M.storage=48):v.isMatrix4?(M.boundary=16,M.storage=64):v.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):He("WebGLRenderer: Unsupported uniform value type.",v),w===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}u(_,"getUniformSize");function x(v){let w=v.target;w.removeEventListener("dispose",x),s.deleteBuffer(i[w.id]),delete i[w.id],delete r[w.id]}u(x,"onUniformsGroupsDispose");function b(){for(let v in i)s.deleteBuffer(i[v]);i={},r={}}return u(b,"dispose"),{bind:o,update:a,dispose:b}}u(E2,"WebGLUniformsGroups");var T2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ds=null;function A2(){return ds===null&&(ds=new Lr(T2,16,16,us,ni),ds.name="DFG_LUT",ds.minFilter=zt,ds.magFilter=zt,ds.wrapS=zn,ds.wrapT=zn,ds.generateMipmaps=!1,ds.needsUpdate=!0),ds}u(A2,"getDFGLUT");var xx=class xx{constructor(e={}){let{canvas:t=lM(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:m=Mn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let _=m,x=new Set([tf,ef,Qd]),b=new Set([Mn,Bi,ul,No,Zd,Jd]),v=new Uint32Array(4),w=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},A=null,E=null,y=[],S=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=cs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,D=!1,U=null,X=null,O=null,Y=null;this._outputColorSpace=Lt;let te=0,B=0,Z=null,W=-1,$=null,Q=new Et,ue=new Et,ye=null,j=new Pe(0),me=0,le=t.width,fe=t.height,de=1,Oe=null,re=null,ie=new Et(0,0,le,fe),he=new Et(0,0,le,fe),ge=!1,xe=new Nr,Ne=new dd,$e=!1,it=!1,Qe=new Ke,Mt=new H,ft=new Et,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},kt=!1;function ut(){return Z===null?de:1}u(ut,"getTargetPixelRatio");let V=n;function Ut(C,z){return t.getContext(C,z)}u(Ut,"getContext");let ze,et,_e,_t,We,Ze,L,T,q,pe,oe,Me,Ae,se,ae,we,F,ce,ne,Ee,ve,Se,Xe;try{let C={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",qe,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",Le,!1),V===null){let z="webgl2";if(V=Ut(z,C),V===null)throw Ut(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ot()}catch(C){throw t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),Je("WebGLRenderer: "+C.message),C}function ot(){ze=new BC(V),ze.init(),ve=new _2(V,ze),et=new AC(V,ze,e,ve),_e=new b2(V,ze),et.reversedDepthBuffer&&d&&_e.buffers.depth.setReversed(!0),X=V.createFramebuffer(),O=V.createFramebuffer(),Y=V.createFramebuffer(),_t=new GC(V),We=new s2,Ze=new y2(V,ze,_e,We,et,ve,_t),L=new FC(P),T=new HT(V),Se=new EC(V,T),q=new kC(V,T,_t,Se),pe=new HC(V,q,T,Se,_t),ce=new VC(V,et,Ze),ae=new RC(We),oe=new i2(P,L,ze,et,Se,ae),Me=new w2(P,We),Ae=new o2,se=new d2(ze),F=new wC(P,L,_e,pe,g,l),we=new x2(P,pe,et),Xe=new E2(V,_t,et,_e),ne=new TC(V,ze,_t),Ee=new zC(V,ze,_t),_t.programs=oe.programs,P.capabilities=et,P.extensions=ze,P.properties=We,P.renderLists=Ae,P.shadowMap=we,P.state=_e,P.info=_t}u(ot,"initGLContext"),_!==Mn&&(I=new XC(_,t.width,t.height,a,i,r));let be=new ax(P,V);this.xr=be,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let C=ze.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=ze.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(C){C!==void 0&&(de=C,this.setSize(le,fe,!1))},this.getSize=function(C){return C.set(le,fe)},this.setSize=function(C,z,ee=!0){if(be.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}le=C,fe=z,t.width=Math.floor(C*de),t.height=Math.floor(z*de),ee===!0&&(t.style.width=C+"px",t.style.height=z+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,C,z)},this.getDrawingBufferSize=function(C){return C.set(le*de,fe*de).floor()},this.setDrawingBufferSize=function(C,z,ee){le=C,fe=z,de=ee,t.width=Math.floor(C*ee),t.height=Math.floor(z*ee),this.setViewport(0,0,C,z)},this.setEffects=function(C){if(_===Mn){Je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let z=0;z<C.length;z++)if(C[z].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(Q)},this.getViewport=function(C){return C.copy(ie)},this.setViewport=function(C,z,ee,K){C.isVector4?ie.set(C.x,C.y,C.z,C.w):ie.set(C,z,ee,K),_e.viewport(Q.copy(ie).multiplyScalar(ut()).round())},this.getScissor=function(C){return C.copy(he)},this.setScissor=function(C,z,ee,K){C.isVector4?he.set(C.x,C.y,C.z,C.w):he.set(C,z,ee,K),_e.scissor(ue.copy(he).multiplyScalar(ut()).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(C){_e.setScissorTest(ge=C)},this.setOpaqueSort=function(C){Oe=C},this.setTransparentSort=function(C){re=C},this.getClearColor=function(C){return C.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(C=!0,z=!0,ee=!0){let K=0;if(C){let J=!1;if(Z!==null){let Re=Z.texture.format;J=x.has(Re)}if(J){let Re=Z.texture.type,Fe=b.has(Re),Te=F.getClearColor(),De=F.getClearAlpha(),Ge=Te.r,tt=Te.g,pt=Te.b;Fe?(v[0]=Ge,v[1]=tt,v[2]=pt,v[3]=De,V.clearBufferuiv(V.COLOR,0,v)):(w[0]=Ge,w[1]=tt,w[2]=pt,w[3]=De,V.clearBufferiv(V.COLOR,0,w))}else K|=V.COLOR_BUFFER_BIT}z&&(K|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ee&&(K|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&V.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),U=C},this.dispose=function(){t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),F.dispose(),Ae.dispose(),se.dispose(),Ze.dispose(),We.dispose(),L.dispose(),pe.dispose(),q.dispose(),Se.dispose(),Xe.dispose(),oe.dispose(),be.dispose(),be.removeEventListener("sessionstart",w_),be.removeEventListener("sessionend",E_),uo.stop()};function qe(C){C.preventDefault(),wc("WebGLRenderer: Context Lost."),D=!0}u(qe,"onContextLost");function st(){wc("WebGLRenderer: Context Restored."),D=!1;let C=_t.autoReset,z=we.enabled,ee=we.autoUpdate,K=we.needsUpdate,J=we.type;ot(),_t.autoReset=C,we.enabled=z,we.autoUpdate=ee,we.needsUpdate=K,we.type=J}u(st,"onContextRestore");function Le(C){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}u(Le,"onContextCreationError");function wt(C){let z=C.target;z.removeEventListener("dispose",wt),sn(z)}u(wt,"onMaterialDispose");function sn(C){br(C),We.remove(C)}u(sn,"deallocateMaterial");function br(C){let z=We.get(C).programs;z!==void 0&&(z.forEach(function(ee){oe.releaseProgram(ee)}),C.isShaderMaterial&&oe.releaseShaderCache(C))}u(br,"releaseMaterialProgramReferences"),this.renderBufferDirect=function(C,z,ee,K,J,Re){z===null&&(z=bt);let Fe=J.isMesh&&J.matrixWorld.determinantAffine()<0,Te=EE(C,z,ee,K,J);_e.setMaterial(K,Fe);let De=ee.index,Ge=1;if(K.wireframe===!0){if(De=q.getWireframeAttribute(ee),De===void 0)return;Ge=2}let tt=ee.drawRange,pt=ee.attributes.position,Be=tt.start*Ge,mt=(tt.start+tt.count)*Ge;Re!==null&&(Be=Math.max(Be,Re.start*Ge),mt=Math.min(mt,(Re.start+Re.count)*Ge)),De!==null?(Be=Math.max(Be,0),mt=Math.min(mt,De.count)):pt!=null&&(Be=Math.max(Be,0),mt=Math.min(mt,pt.count));let $t=mt-Be;if($t<0||$t===1/0)return;Se.setup(J,K,Te,ee,De);let It,Rt=ne;if(De!==null&&(It=T.get(De),Rt=Ee,Rt.setIndex(It)),J.isMesh)K.wireframe===!0?(_e.setLineWidth(K.wireframeLinewidth*ut()),Rt.setMode(V.LINES)):Rt.setMode(V.TRIANGLES);else if(J.isLine){let xn=K.linewidth;xn===void 0&&(xn=1),_e.setLineWidth(xn*ut()),J.isLineSegments?Rt.setMode(V.LINES):J.isLineLoop?Rt.setMode(V.LINE_LOOP):Rt.setMode(V.LINE_STRIP)}else J.isPoints?Rt.setMode(V.POINTS):J.isSprite&&Rt.setMode(V.TRIANGLES);if(J.isBatchedMesh)if(ze.get("WEBGL_multi_draw"))Rt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let xn=J._multiDrawStarts,ke=J._multiDrawCounts,Rn=J._multiDrawCount,vt=De?T.get(De).bytesPerElement:1,ho=We.get(K).currentProgram.getUniforms();for(let bn=0;bn<Rn;bn++)ho.setValue(V,"_gl_DrawID",bn),Rt.render(xn[bn]/vt,ke[bn])}else if(J.isInstancedMesh)Rt.renderInstances(Be,$t,J.count);else if(ee.isInstancedBufferGeometry){let xn=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,ke=Math.min(ee.instanceCount,xn);Rt.renderInstances(Be,$t,ke)}else Rt.render(Be,$t)};function S_(C,z,ee,K){U!==null&&C.isNodeMaterial&&U.setObject(K,C),$e===!0&&ae.setState(C,ee,!1),C.transparent===!0&&C.side===jt&&C.forceSinglePass===!1?(C.side=Dn,C.needsUpdate=!0,ac(C,z,K),C.side=yi,C.needsUpdate=!0,ac(C,z,K),C.side=jt):ac(C,z,K)}u(S_,"prepareMaterial"),this.compile=function(C,z,ee=null){ee===null&&(ee=C),U!==null&&U.renderStart(C,z,ee),E=se.get(ee),E.init(z),S.push(E),ee.traverseVisible(function(J){J.isLight&&J.layers.test(z.layers)&&(E.pushLight(J),J.castShadow&&E.pushShadow(J))}),C!==ee&&C.traverseVisible(function(J){J.isLight&&J.layers.test(z.layers)&&(E.pushLight(J),J.castShadow&&E.pushShadow(J))}),E.setupLights(),U!==null&&U.updateLights(E.state.lightsArray),it=this.localClippingEnabled,$e=ae.init(this.clippingPlanes,it),$e===!0&&ae.setGlobalState(this.clippingPlanes,z),U!==null&&we.render(E.state.shadowsArray,ee,z);let K=new Set;return C.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let Re=J.material;if(Re)if(Array.isArray(Re))for(let Fe=0;Fe<Re.length;Fe++){let Te=Re[Fe];S_(Te,ee,z,J),K.add(Te)}else S_(Re,ee,z,J),K.add(Re)}),E=S.pop(),U!==null&&U.renderEnd(),K},this.compileAsync=function(C,z,ee=null){let K=this.compile(C,z,ee);return new Promise(J=>{function Re(){if(K.forEach(function(Fe){let De=We.get(Fe).currentProgram;(De===void 0||De.isReady())&&K.delete(Fe)}),K.size===0){J(C);return}setTimeout(Re,10)}u(Re,"checkMaterialsReady"),ze.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Xp=null;function SE(C){Xp&&Xp(C)}u(SE,"onAnimationFrame");function w_(){uo.stop()}u(w_,"onXRSessionStart");function E_(){uo.start()}u(E_,"onXRSessionEnd");let uo=new FM;uo.setAnimationLoop(SE),typeof self<"u"&&uo.setContext(self),this.setAnimationLoop=function(C){Xp=C,be.setAnimationLoop(C),C===null?uo.stop():uo.start()},be.addEventListener("sessionstart",w_),be.addEventListener("sessionend",E_),this.render=function(C,z){if(z!==void 0&&z.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;U!==null&&U.renderStart(C,z);let ee=be.enabled===!0&&be.isPresenting===!0,K=I!==null&&(Z===null||ee)&&I.begin(P,Z);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(z),z=be.getCamera()),C.isScene===!0&&C.onBeforeRender(P,C,z,Z),E=se.get(C,S.length),E.init(z),E.state.textureUnits=Ze.getTextureUnits(),S.push(E),Qe.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),z.isArrayCamera?Ne.setFromArrayCamera(z):xe.setFromProjectionMatrix(Qe,xi,z.reversedDepth),it=this.localClippingEnabled,$e=ae.init(this.clippingPlanes,it),A=Ae.get(C,y.length),A.init(),y.push(A),this.info.render.frame++,be.enabled===!0&&be.isPresenting===!0){let Fe=P.xr.getDepthSensingMesh();Fe!==null&&qp(Fe,z,-1/0,P.sortObjects)}qp(C,z,0,P.sortObjects),A.finish(),U!==null&&U.updateLights(E.state.lightsArray),P.sortObjects===!0&&A.sort(Oe,re),kt=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,kt&&F.addToRenderList(A,C),this.info.autoReset===!0&&this.info.reset(),$e===!0&&ae.beginShadows();let J=E.state.shadowsArray;if(we.render(J,C,z),$e===!0&&ae.endShadows(),(K&&I.hasRenderPass())===!1){let Fe=A.opaque,Te=A.transmissive;if(E.setupLights(),z.isArrayCamera){let De=z.cameras;if(Te.length>0)for(let Ge=0,tt=De.length;Ge<tt;Ge++){let pt=De[Ge];A_(Fe,Te,C,pt)}kt&&F.render(C);for(let Ge=0,tt=De.length;Ge<tt;Ge++){let pt=De[Ge];T_(A,C,pt,pt.viewport)}}else Te.length>0&&A_(Fe,Te,C,z),kt&&F.render(C),T_(A,C,z)}Z!==null&&B===0&&(Ze.updateMultisampleRenderTarget(Z),Ze.updateRenderTargetMipmap(Z)),K&&I.end(P),C.isScene===!0&&C.onAfterRender(P,C,z),Se.resetDefaultState(),W=-1,$=null,S.pop(),S.length>0?(E=S[S.length-1],Ze.setTextureUnits(E.state.textureUnits),$e===!0&&ae.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,y.pop(),y.length>0?A=y[y.length-1]:A=null,U!==null&&U.renderEnd()};function qp(C,z,ee,K){if(C.visible===!1)return;if(C.layers.test(z.layers)){if(C.isGroup)ee=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(z);else if(C.isLight)E.pushLight(C),C.castShadow&&E.pushShadow(C);else if(C.isSprite){let Fe=z.isArrayCamera?Ne:xe;if(!C.frustumCulled||C.intersectsFrustum(Fe)){K&&ft.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Qe);let Te=pe.update(C),De=C.material;De.visible&&A.push(C,Te,De,ee,ft.z,null,z)}}else if(C.isMesh||C.isLine||C.isPoints){let Fe=z.isArrayCamera?Ne:xe;if(!C.frustumCulled||C.intersectsFrustum(Fe)){let Te=pe.update(C),De=C.material;if(K&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ft.copy(C.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),ft.copy(Te.boundingSphere.center)),ft.applyMatrix4(C.matrixWorld).applyMatrix4(Qe)),Array.isArray(De)){let Ge=Te.groups;for(let tt=0,pt=Ge.length;tt<pt;tt++){let Be=Ge[tt],mt=De[Be.materialIndex];mt&&mt.visible&&A.push(C,Te,mt,ee,ft.z,Be,z)}}else De.visible&&A.push(C,Te,De,ee,ft.z,null,z)}}}let Re=C.children;for(let Fe=0,Te=Re.length;Fe<Te;Fe++)qp(Re[Fe],z,ee,K)}u(qp,"projectObject");function T_(C,z,ee,K){let{opaque:J,transmissive:Re,transparent:Fe}=C;E.setupLightsView(ee),$e===!0&&ae.setGlobalState(P.clippingPlanes,ee),K&&_e.viewport(Q.copy(K)),J.length>0&&Sh(J,z,ee),Re.length>0&&Sh(Re,z,ee),Fe.length>0&&Sh(Fe,z,ee),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}u(T_,"renderScene");function A_(C,z,ee,K){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[K.id]===void 0){let Be=ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[K.id]=new jn(1,1,{generateMipmaps:!0,type:Be?ni:Mn,minFilter:vn,samples:Math.max(4,et.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:lt.workingColorSpace})}let Re=E.state.transmissionRenderTarget[K.id],Fe=K.viewport||Q;Re.setSize(Fe.z*P.transmissionResolutionScale,Fe.w*P.transmissionResolutionScale);let Te=P.getRenderTarget(),De=P.getActiveCubeFace(),Ge=P.getActiveMipmapLevel();P.setRenderTarget(Re),P.getClearColor(j),me=P.getClearAlpha(),me<1&&P.setClearColor(16777215,.5),P.clear(),kt&&F.render(ee);let tt=P.toneMapping;P.toneMapping=cs;let pt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),E.setupLightsView(K),$e===!0&&ae.setGlobalState(P.clippingPlanes,K),Sh(C,ee,K),Ze.updateMultisampleRenderTarget(Re),Ze.updateRenderTargetMipmap(Re),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let mt=0,$t=z.length;mt<$t;mt++){let It=z[mt],{object:Rt,geometry:xn,material:ke,group:Rn}=It;if(ke.side===jt&&Rt.layers.test(K.layers)){let vt=ke.side;ke.side=Dn,ke.needsUpdate=!0,R_(Rt,ee,K,xn,ke,Rn),ke.side=vt,ke.needsUpdate=!0,Be=!0}}Be===!0&&(Ze.updateMultisampleRenderTarget(Re),Ze.updateRenderTargetMipmap(Re))}P.setRenderTarget(Te,De,Ge),P.setClearColor(j,me),pt!==void 0&&(K.viewport=pt),P.toneMapping=tt}u(A_,"renderTransmissionPass");function Sh(C,z,ee){let K=z.isScene===!0?z.overrideMaterial:null;for(let J=0,Re=C.length;J<Re;J++){let Fe=C[J],{object:Te,geometry:De,group:Ge}=Fe,tt=Fe.material;tt.allowOverride===!0&&K!==null&&(tt=K),Te.layers.test(ee.layers)&&R_(Te,z,ee,De,tt,Ge)}}u(Sh,"renderObjects");function R_(C,z,ee,K,J,Re){U!==null&&J.isNodeMaterial&&U.setObject(C,J),C.onBeforeRender(P,z,ee,K,J,Re),C.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(P,z,ee,K,C,Re),J.transparent===!0&&J.side===jt&&J.forceSinglePass===!1?(J.side=Dn,J.needsUpdate=!0,P.renderBufferDirect(ee,z,K,J,C,Re),J.side=yi,J.needsUpdate=!0,P.renderBufferDirect(ee,z,K,J,C,Re),J.side=jt):P.renderBufferDirect(ee,z,K,J,C,Re),C.onAfterRender(P,z,ee,K,J,Re)}u(R_,"renderObject");function C_(C){let z=0;for(let ee of C)ee.texture!==null&&z++;return z}u(C_,"countLightProbeGrids");function ac(C,z,ee){z.isScene!==!0&&(z=bt);let K=We.get(C),J=E.state.lights,Re=E.state.shadowsArray,Fe=J.state.version,Te=oe.getParameters(C,J.state,Re,z,ee,E.state.lightProbeGridArray),De=oe.getProgramCacheKey(Te),Ge=K.programs;K.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?z.environment:null,K.fog=z.fog;let tt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;K.envMap=L.get(C.envMap||K.environment,tt),K.envMapRotation=K.environment!==null&&C.envMap===null?z.environmentRotation:C.envMapRotation,Ge===void 0&&(C.addEventListener("dispose",wt),Ge=new Map,K.programs=Ge,K.programVariants=new Map);let pt=Ge.get(De);if(pt!==void 0){if(K.currentProgram===pt&&K.lightsStateVersion===Fe)return I_(C,Te),pt}else Te.uniforms=oe.getUniforms(C),U!==null&&C.isNodeMaterial&&U.build(C,ee,Te),C.onBeforeCompile(Te,P),pt=oe.acquireProgram(Te,De),Ge.set(De,pt),K.uniforms=Te.uniforms;let Be=K.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Be.clippingPlanes=ae.uniform),I_(C,Te),K.needsLights=AE(C),K.lightsStateVersion=Fe,K.needsLights&&(Be.ambientLightColor.value=J.state.ambient,Be.lightProbe.value=J.state.probe,Be.sunLights.value=J.state.sun,Be.sunLightShadows.value=J.state.sunShadow,Be.directionalLights.value=J.state.directional,Be.directionalLightShadows.value=J.state.directionalShadow,Be.spotLights.value=J.state.spot,Be.spotLightShadows.value=J.state.spotShadow,Be.rectAreaLights.value=J.state.rectArea,Be.ltc_1.value=J.state.rectAreaLTC1,Be.ltc_2.value=J.state.rectAreaLTC2,Be.pointLights.value=J.state.point,Be.pointLightShadows.value=J.state.pointShadow,Be.hemisphereLights.value=J.state.hemi,Be.sunShadowMatrix.value=J.state.sunShadowMatrix,Be.sunShadowCascade.value=J.state.sunShadowCascade,Be.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Be.spotLightMatrix.value=J.state.spotLightMatrix,Be.spotLightMap.value=J.state.spotLightMap,Be.pointShadowMatrix.value=J.state.pointShadowMatrix),K.numLightProbeGrids=C_(E.state.lightProbeGridArray),K.currentProgram=pt,K.uniformsList=null,pt}u(ac,"getProgram");function wE(C,z,ee,K,J){let Re=We.get(C),Fe=Re.currentProgram.id+","+K+","+J,Te=Re.programVariants.get(Fe);return Te===void 0?(Te=ac(C,z,ee),Re.programVariants.set(Fe,Te)):(Re.currentProgram=Te,Re.uniformsList=null,Re.outputColorSpace=K,Re.toneMapping=J),Te}u(wE,"getProgramVariant");function P_(C){if(C.uniformsList===null){let z=C.currentProgram.getUniforms();C.uniformsList=dl.seqWithValue(z.seq,C.uniforms)}return C.uniformsList}u(P_,"getUniformList");function I_(C,z){let ee=We.get(C);ee.outputColorSpace=z.outputColorSpace,ee.batching=z.batching,ee.batchingColor=z.batchingColor,ee.instancing=z.instancing,ee.instancingColor=z.instancingColor,ee.instancingMorph=z.instancingMorph,ee.skinning=z.skinning,ee.morphTargets=z.morphTargets,ee.morphNormals=z.morphNormals,ee.morphColors=z.morphColors,ee.morphTargetsCount=z.morphTargetsCount,ee.numClippingPlanes=z.numClippingPlanes,ee.numIntersection=z.numClipIntersection,ee.vertexAlphas=z.vertexAlphas,ee.vertexTangents=z.vertexTangents,ee.toneMapping=z.toneMapping}u(I_,"updateCommonMaterialProperties");function EE(C,z,ee,K,J){z.isScene!==!0&&(z=bt),Ze.resetTextureUnits();let Re=z.fog,Fe=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?z.environment:null,Te=Z===null?P.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:lt.workingColorSpace,De=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Ge=L.get(K.envMap||Fe,De),tt=K.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pt=!!ee.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Be=!!ee.morphAttributes.position,mt=!!ee.morphAttributes.normal,$t=!!ee.morphAttributes.color,It=cs;K.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(It=P.toneMapping);let Rt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,xn=Rt!==void 0?Rt.length:0,ke=We.get(K),Rn=E.state.lights;if($e===!0&&(it===!0||C!==$)){let Vt=C===$&&K.id===W;ae.setState(K,C,Vt)}let vt=!1,ho=!1;K.version===ke.__version?ke.needsLights&&ke.lightsStateVersion!==Rn.state.version||J.isBatchedMesh&&ke.batching===!1||!J.isBatchedMesh&&ke.batching===!0||J.isBatchedMesh&&ke.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&ke.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&ke.instancing===!1||!J.isInstancedMesh&&ke.instancing===!0||J.isSkinnedMesh&&ke.skinning===!1||!J.isSkinnedMesh&&ke.skinning===!0||J.isInstancedMesh&&ke.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&ke.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&ke.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&ke.instancingMorph===!1&&J.morphTexture!==null||ke.envMap!==Ge||K.fog===!0&&ke.fog!==Re||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==ae.numPlanes||ke.numIntersection!==ae.numIntersection)||ke.vertexAlphas!==tt||ke.vertexTangents!==pt||ke.morphTargets!==Be||ke.morphNormals!==mt||ke.morphColors!==$t||ke.morphTargetsCount!==xn||ke.numLightProbeGrids!==C_(E.state.lightProbeGridArray)?vt=!0:(ke.outputColorSpace!==Te||ke.toneMapping!==It)&&(ho=!0):(vt=!0,ke.__version=K.version);let bn=ke.currentProgram;(vt===!0||ho===!0)&&(bn=ho===!0?wE(K,z,J,Te,It):ac(K,z,J),U&&K.isNodeMaterial&&U.onUpdateProgram(K,bn,ke));let wh=!1,yr=!1,fo=!1,xt=bn.getUniforms(),pn=ke.uniforms;if(_e.useProgram(bn.program)&&(wh=!0,yr=!0,fo=!0),K.id!==W&&(W=K.id,yr=!0),wh||$!==C){_e.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),xt.setValue(V,"projectionMatrix",C.projectionMatrix),xt.setValue(V,"viewMatrix",C.matrixWorldInverse);let rn=xt.map.cameraPosition;rn!==void 0&&rn.setValue(V,Mt.setFromMatrixPosition(C.matrixWorld)),et.logarithmicDepthBuffer&&xt.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&xt.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),$!==C&&($=C,yr=!0,fo=!0)}if(ke.needsLights&&(Rn.state.sunShadowMap.length>0&&xt.setValue(V,"sunShadowMap",Rn.state.sunShadowMap,Ze),Rn.state.directionalShadowMap.length>0&&xt.setValue(V,"directionalShadowMap",Rn.state.directionalShadowMap,Ze),Rn.state.spotShadowMap.length>0&&xt.setValue(V,"spotShadowMap",Rn.state.spotShadowMap,Ze),Rn.state.pointShadowMap.length>0&&xt.setValue(V,"pointShadowMap",Rn.state.pointShadowMap,Ze)),J.isSkinnedMesh){xt.setOptional(V,J,"bindMatrix"),xt.setOptional(V,J,"bindMatrixInverse");let Vt=J.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),xt.setValue(V,"boneTexture",Vt.boneTexture,Ze))}J.isBatchedMesh&&(xt.setOptional(V,J,"batchingTexture"),xt.setValue(V,"batchingTexture",J._matricesTexture,Ze),xt.setOptional(V,J,"batchingIdTexture"),xt.setValue(V,"batchingIdTexture",J._indirectTexture,Ze),xt.setOptional(V,J,"batchingColorTexture"),J._colorsTexture!==null&&xt.setValue(V,"batchingColorTexture",J._colorsTexture,Ze));let Ni=ee.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&ce.update(J,ee,bn),(yr||ke.receiveShadow!==J.receiveShadow)&&(ke.receiveShadow=J.receiveShadow,xt.setValue(V,"receiveShadow",J.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&z.environment!==null&&(pn.envMapIntensity.value=z.environmentIntensity),pn.dfgLUT!==void 0&&(pn.dfgLUT.value=A2()),yr){if(xt.setValue(V,"toneMappingExposure",P.toneMappingExposure),ke.needsLights&&TE(pn,fo),Re&&K.fog===!0&&Me.refreshFogUniforms(pn,Re),Me.refreshMaterialUniforms(pn,K,de,fe,E.state.transmissionRenderTarget[C.id]),ke.needsLights&&ke.numLightProbeGrids>0){let Vt=M,rn=0;for(let Us of E.state.lightProbeGridArray)Us.texture!==null&&(Vt.textures[rn]=Us.texture,Vt.min[rn]=Us.boundingBox.min,Vt.max[rn]=Us.boundingBox.max,Vt.resolution[rn]=Us.resolution,rn++);for(let Us in Vt)Vt[Us].length=rn;pn.probesSH.value=Vt.textures,pn.probesMin.value=Vt.min,pn.probesMax.value=Vt.max,pn.probesResolution.value=Vt.resolution}dl.upload(V,P_(ke),pn,Ze)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(dl.upload(V,P_(ke),pn,Ze),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&xt.setValue(V,"center",J.center),xt.setValue(V,"modelViewMatrix",J.modelViewMatrix),xt.setValue(V,"normalMatrix",J.normalMatrix),xt.setValue(V,"modelMatrix",J.matrixWorld),K.uniformsGroups!==void 0){let Vt=K.uniformsGroups;for(let rn=0,Us=Vt.length;rn<Us;rn++){let N_=Vt[rn];Xe.update(N_,bn),Xe.bind(N_,bn)}}return bn}u(EE,"setProgram");function TE(C,z){C.ambientLightColor.needsUpdate=z,C.lightProbe.needsUpdate=z,C.sunLights.needsUpdate=z,C.sunLightShadows.needsUpdate=z,C.directionalLights.needsUpdate=z,C.directionalLightShadows.needsUpdate=z,C.pointLights.needsUpdate=z,C.pointLightShadows.needsUpdate=z,C.spotLights.needsUpdate=z,C.spotLightShadows.needsUpdate=z,C.rectAreaLights.needsUpdate=z,C.hemisphereLights.needsUpdate=z}u(TE,"markUniformsLightsNeedsUpdate");function AE(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}u(AE,"materialNeedsLights"),this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(C,z,ee){let K=We.get(C);K.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),We.get(C.texture).__webglTexture=z,We.get(C.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:ee,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,z){let ee=We.get(C);ee.__webglFramebuffer=z,ee.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(C,z=0,ee=0){Z=C,te=z,B=ee;let K=null,J=!1,Re=!1;if(C){let Te=We.get(C);if(Te.__useDefaultFramebuffer!==void 0){_e.bindFramebuffer(V.FRAMEBUFFER,Te.__webglFramebuffer),Q.copy(C.viewport),ue.copy(C.scissor),ye=C.scissorTest,_e.viewport(Q),_e.scissor(ue),_e.setScissorTest(ye),W=-1;return}else if(Te.__webglFramebuffer===void 0)Ze.setupRenderTarget(C);else if(Te.__hasExternalTextures)Ze.rebindTextures(C,We.get(C.texture).__webglTexture,We.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let tt=C.depthTexture;if(Te.__boundDepthTexture!==tt){if(tt!==null&&We.has(tt)&&(C.width!==tt.image.width||C.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ze.setupDepthRenderbuffer(C)}}let De=C.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Re=!0);let Ge=We.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ge[z])?K=Ge[z][ee]:K=Ge[z],J=!0):C.samples>0&&Ze.useMultisampledRTT(C)===!1?K=We.get(C).__webglMultisampledFramebuffer:Array.isArray(Ge)?K=Ge[ee]:K=Ge,Q.copy(C.viewport),ue.copy(C.scissor),ye=C.scissorTest}else Q.copy(ie).multiplyScalar(de).floor(),ue.copy(he).multiplyScalar(de).floor(),ye=ge;if(ee!==0&&(K=X),_e.bindFramebuffer(V.FRAMEBUFFER,K)&&_e.drawBuffers(C,K),_e.viewport(Q),_e.scissor(ue),_e.setScissorTest(ye),J){let Te=We.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+z,Te.__webglTexture,ee)}else if(Re){let Te=z;for(let De=0;De<C.textures.length;De++){let Ge=We.get(C.textures[De]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+De,Ge.__webglTexture,ee,Te)}}else if(C!==null&&ee!==0){let Te=We.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Te.__webglTexture,ee)}W=-1};function L_(C){let z=We.get(C);return(z.__readFormat!==C.format||z.__readType!==C.type)&&(z.__readFormat=C.format,z.__readType=C.type,z.__formatReadable=et.textureFormatReadable(C.format),z.__typeReadable=et.textureTypeReadable(C.type)),z}u(L_,"getReadableState"),this.readRenderTargetPixels=function(C,z,ee,K,J,Re,Fe,Te=0){if(!(C&&C.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=We.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Fe!==void 0&&(De=De[Fe],Array.isArray(De)&&(De=De[0])),De){_e.bindFramebuffer(V.FRAMEBUFFER,De);try{let Ge=C.textures[Te],tt=Ge.format,pt=Ge.type;C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Te);let Be=L_(Ge);if(Be.__formatReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Be.__typeReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=C.width-K&&ee>=0&&ee<=C.height-J&&V.readPixels(z,ee,K,J,ve.convert(tt),ve.convert(pt),Re)}finally{let Ge=Z!==null?We.get(Z).__webglFramebuffer:null;_e.bindFramebuffer(V.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(C,z,ee,K,J,Re,Fe,Te=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=We.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Fe!==void 0&&(De=De[Fe],Array.isArray(De)&&(De=De[0])),De)if(z>=0&&z<=C.width-K&&ee>=0&&ee<=C.height-J){_e.bindFramebuffer(V.FRAMEBUFFER,De);let Ge=C.textures[Te],tt=Ge.format,pt=Ge.type;C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Te);let Be=L_(Ge);if(Be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let mt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,mt),V.bufferData(V.PIXEL_PACK_BUFFER,Re.byteLength,V.STREAM_READ),V.readPixels(z,ee,K,J,ve.convert(tt),ve.convert(pt),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let $t=Z!==null?We.get(Z).__webglFramebuffer:null;_e.bindFramebuffer(V.FRAMEBUFFER,$t);let It=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await uM(V,It,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,mt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Re),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(mt),V.deleteSync(It),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,z=null,ee=0){let K=Math.pow(2,-ee),J=Math.floor(C.image.width*K),Re=Math.floor(C.image.height*K),Fe=z!==null?z.x:0,Te=z!==null?z.y:0;Ze.setTexture2D(C,0),V.copyTexSubImage2D(V.TEXTURE_2D,ee,0,0,Fe,Te,J,Re),_e.unbindTexture()},this.copyTextureToTexture=function(C,z,ee=null,K=null,J=0,Re=0){let Fe,Te,De,Ge,tt,pt,Be,mt,$t,It=C.isCompressedTexture?C.mipmaps[Re]:C.image;if(ee!==null)Fe=ee.max.x-ee.min.x,Te=ee.max.y-ee.min.y,De=ee.isBox3?ee.max.z-ee.min.z:1,Ge=ee.min.x,tt=ee.min.y,pt=ee.isBox3?ee.min.z:0;else{let xt=Math.pow(2,-J);Fe=Math.floor(It.width*xt),Te=Math.floor(It.height*xt),C.isDataArrayTexture?De=It.depth:C.isData3DTexture?De=Math.floor(It.depth*xt):De=1,Ge=0,tt=0,pt=0}K!==null?(Be=K.x,mt=K.y,$t=K.z):(Be=0,mt=0,$t=0);let Rt=ve.convert(z.format),xn=ve.convert(z.type),ke;z.isData3DTexture?(Ze.setTexture3D(z,0),ke=V.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Ze.setTexture2DArray(z,0),ke=V.TEXTURE_2D_ARRAY):(Ze.setTexture2D(z,0),ke=V.TEXTURE_2D),_e.activeTexture(V.TEXTURE0),_e.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,z.flipY),_e.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),_e.pixelStorei(V.UNPACK_ALIGNMENT,z.unpackAlignment);let Rn=_e.getParameter(V.UNPACK_ROW_LENGTH),vt=_e.getParameter(V.UNPACK_IMAGE_HEIGHT),ho=_e.getParameter(V.UNPACK_SKIP_PIXELS),bn=_e.getParameter(V.UNPACK_SKIP_ROWS),wh=_e.getParameter(V.UNPACK_SKIP_IMAGES);_e.pixelStorei(V.UNPACK_ROW_LENGTH,It.width),_e.pixelStorei(V.UNPACK_IMAGE_HEIGHT,It.height),_e.pixelStorei(V.UNPACK_SKIP_PIXELS,Ge),_e.pixelStorei(V.UNPACK_SKIP_ROWS,tt),_e.pixelStorei(V.UNPACK_SKIP_IMAGES,pt);let yr=C.isDataArrayTexture||C.isData3DTexture,fo=z.isDataArrayTexture||z.isData3DTexture;if(C.isDepthTexture){let xt=We.get(C),pn=We.get(z),Ni=We.get(xt.__renderTarget),Vt=We.get(pn.__renderTarget);_e.bindFramebuffer(V.READ_FRAMEBUFFER,Ni.__webglFramebuffer),_e.bindFramebuffer(V.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let rn=0;rn<De;rn++)yr&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,We.get(C).__webglTexture,J,pt+rn),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,We.get(z).__webglTexture,Re,$t+rn)),V.blitFramebuffer(Ge,tt,Ge+Fe,tt+Te,Be,mt,Be+Fe,mt+Te,V.DEPTH_BUFFER_BIT,V.NEAREST);_e.bindFramebuffer(V.READ_FRAMEBUFFER,null),_e.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(J!==0||C.isRenderTargetTexture||We.has(C)){let xt=We.get(C),pn=We.get(z);_e.bindFramebuffer(V.READ_FRAMEBUFFER,O),_e.bindFramebuffer(V.DRAW_FRAMEBUFFER,Y);for(let Ni=0;Ni<De;Ni++)yr?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,xt.__webglTexture,J,pt+Ni):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,xt.__webglTexture,J),fo?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,pn.__webglTexture,Re,$t+Ni):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,pn.__webglTexture,Re),J!==0?V.blitFramebuffer(Ge,tt,Ge+Fe,tt+Te,Be,mt,Be+Fe,mt+Te,V.COLOR_BUFFER_BIT,V.NEAREST):fo?V.copyTexSubImage3D(ke,Re,Be,mt,$t+Ni,Ge,tt,Fe,Te):V.copyTexSubImage2D(ke,Re,Be,mt,Ge,tt,Fe,Te);_e.bindFramebuffer(V.READ_FRAMEBUFFER,null),_e.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else fo?C.isDataTexture||C.isData3DTexture?V.texSubImage3D(ke,Re,Be,mt,$t,Fe,Te,De,Rt,xn,It.data):z.isCompressedArrayTexture?V.compressedTexSubImage3D(ke,Re,Be,mt,$t,Fe,Te,De,Rt,It.data):V.texSubImage3D(ke,Re,Be,mt,$t,Fe,Te,De,Rt,xn,It):C.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Re,Be,mt,Fe,Te,Rt,xn,It.data):C.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Re,Be,mt,It.width,It.height,Rt,It.data):V.texSubImage2D(V.TEXTURE_2D,Re,Be,mt,Fe,Te,Rt,xn,It);_e.pixelStorei(V.UNPACK_ROW_LENGTH,Rn),_e.pixelStorei(V.UNPACK_IMAGE_HEIGHT,vt),_e.pixelStorei(V.UNPACK_SKIP_PIXELS,ho),_e.pixelStorei(V.UNPACK_SKIP_ROWS,bn),_e.pixelStorei(V.UNPACK_SKIP_IMAGES,wh),Re===0&&z.generateMipmaps===!0&&z.mipmapsAutoUpdate===!0&&V.generateMipmap(ke),_e.unbindTexture()},this.initRenderTarget=function(C){We.get(C).__webglFramebuffer===void 0&&Ze.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Ze.setTextureCube(C,0):C.isData3DTexture?Ze.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Ze.setTexture2DArray(C,0):Ze.setTexture2D(C,0),_e.unbindTexture()},this.resetState=function(){te=0,B=0,Z=null,_e.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};u(xx,"WebGLRenderer");var kf=xx;var $M=u(s=>{let e=Math.min(1,Math.max(0,s))**.5;return 4*e*(1-e)},"swell"),R2=u(s=>1-(1-s)*(1-s),"easeOut"),Hf=u(s=>{let e=Math.sin(s*12.9898)*43758.5453;return e-Math.floor(e)},"share"),bx=u((s,e=0)=>{let t=Math.min(1,Math.max(0,s)),n=R2(t);return Array.from({length:7},(i,r)=>{if(r===0)return{at:[0,.08+.22*n,0],size:.09*$M(t),shade:0};let o=(r-1)/6*Math.PI*2+(Hf(e+r*7)-.5)*.6,a=(.12+Hf(e+r*13)*.08)*n,l=.05+(.08+Hf(e+r*17)*.1)*n;return{at:[Math.cos(o)*a,l,Math.sin(o)*a],size:(.055+Hf(e+r*19)*.03)*$M(t*1.1),shade:r%2===0?0:1}})},"puffAt");var qn=["grass","plains","sand","rock","snow","forest","mud","tundra"],ps={shore:-.03,deep:-.15,reach:3},Wf={relief:{base:0,roughness:0,shape:"flat"},colour:"#1b1f24",surface:"grass"},ZM={relief:{base:.03,roughness:.015,shape:"rolling"},colour:"#6b8746",surface:"grass"},KM={Ocean:{relief:{base:ps.deep,roughness:.003,shape:"rolling"},colour:"#33505f",surface:"sand"},Grassland:ZM,Plains:{relief:{base:.025,roughness:.01,shape:"rolling"},colour:"#99935a",surface:"plains"},Desert:{relief:{base:.025,roughness:.025,shape:"rolling"},colour:"#c4ab78",surface:"sand"},Tundra:{relief:{base:.035,roughness:.015,shape:"rolling"},colour:"#8a8d78",surface:"tundra"},Arctic:{relief:{base:.05,roughness:.02,shape:"rolling"},colour:"#dfe6ea",surface:"snow"},Glacier:{relief:{base:.08,roughness:.03,shape:"rolling"},colour:"#e7eff3",surface:"snow"},Forest:{relief:{base:.04,roughness:.02,shape:"rolling"},colour:"#40583a",surface:"forest"},Jungle:{relief:{base:.03,roughness:.02,shape:"rolling"},colour:"#355a36",surface:"forest"},Swamp:{relief:{base:.005,roughness:.004,shape:"flat"},colour:"#4f5b3d",surface:"mud"},River:{relief:{base:.012,roughness:.006,shape:"rolling"},colour:"#5d7c4f",surface:"grass"},Hills:{relief:{base:.12,roughness:.04,shape:"ridged"},colour:"#7b7650",surface:"plains"},Mountains:{relief:{base:.35,roughness:.08,shape:"peaked"},colour:"#77726a",surface:"rock"}},Oo=u(s=>s==="Unknown"?Wf:(Object.prototype.hasOwnProperty.call(KM,s)?KM[s]:void 0)??ZM,"terrainEntry");var C2=u((s,e,t)=>{let n=Math.imul(s,374761393)+Math.imul(e,668265263)+Math.imul(t,1442695041)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296},"hash"),JM=Float64Array.from({length:32},(s,e)=>(e%2===0?Math.cos:Math.sin)(Math.floor(e/2)*(Math.PI/8))),jM=u(s=>s*s*s*(s*(s*6-15)+10),"fade"),ms=u(({cell:s,period:e,seed:t})=>{let n=Math.max(1,Math.round(e.u/s)),i=e.u/n,r=e.v===null?null:Math.max(1,Math.round(e.v/s)),o=e.v===null||r===null?s:e.v/r,a=u(h=>(h%n+n)%n,"wrapU"),l=u(h=>r===null?h:(h%r+r)%r,"wrapV"),c=u((h,p,d,m)=>{let g=Math.floor(C2(h,p,t)*16)*2;return(JM[g]??0)*d+(JM[g+1]??0)*m},"slope");return(h,p)=>{let d=h/i,m=p/o,g=Math.floor(d),_=Math.floor(m),x=d-g,b=m-_,v=jM(x),w=jM(b),M=a(g),A=a(g+1),E=l(_),y=l(_+1),S=c(M,E,x,b)+(c(A,E,x-1,b)-c(M,E,x,b))*v,I=c(M,y,x,b-1)+(c(A,y,x-1,b-1)-c(M,y,x,b-1))*v;return Math.max(-1,Math.min(1,(S+(I-S)*w)*1.4))}},"periodicNoise"),ii=u(s=>{let e=s.map((n,i)=>.5**i),t=e.reduce((n,i)=>n+i,0);return(n,i)=>s.reduce((r,o,a)=>r+o(n,i)*(e[a]??0),0)/t},"fractalNoise");var Fr=128,Yf=.5,Xf=u(s=>(e,t)=>1-2*Math.abs(s(e,t)),"ridge"),P2={grass:{grain:u(({noise:s})=>ii([s(64,1),s(16,2),s(4,25)]),"grain"),shade:.3,bumps:u(({noise:s})=>ii([s(4,3),s(12,4)]),"bumps"),steep:2.5,rough:.9,roughVaries:.05},plains:{grain:u(({noise:s})=>ii([s(64,5),s(8,6)]),"grain"),shade:.3,bumps:u(({noise:s})=>ii([s(8,7),s(24,8)]),"bumps"),steep:2.2,rough:.92,roughVaries:.04},sand:{grain:u(({noise:s,wave:e,texels:t})=>{let n=e(7,3),i=s(64,9),r=s(32,10);return(o,a)=>.7*n(o+t(6)*i(o,a),a)+.3*r(o,a)},"grain"),shade:.12,bumps:u(({noise:s,wave:e,texels:t})=>{let n=e(7,3),i=s(64,9);return(r,o)=>n(r+t(6)*i(r,o),o)},"bumps"),steep:1.5,rough:.88,roughVaries:.04},rock:{grain:u(({noise:s})=>ii([Xf(s(24,11)),Xf(s(12,12)),s(6,13)]),"grain"),shade:.35,bumps:u(({noise:s})=>ii([Xf(s(24,11)),Xf(s(12,12)),s(6,13)]),"bumps"),steep:2.5,rough:.75,roughVaries:.1},snow:{grain:u(({noise:s})=>s(64,14),"grain"),shade:.06,bumps:u(({noise:s})=>s(32,15),"bumps"),steep:.8,rough:.55,roughVaries:.05},forest:{grain:u(({noise:s})=>ii([s(10,16),s(40,17)]),"grain"),shade:.3,bumps:u(({noise:s})=>s(8,18),"bumps"),steep:2,rough:.9,roughVaries:.05},mud:{grain:u(({noise:s})=>s(48,19),"grain"),shade:.25,bumps:u(({noise:s})=>ii([s(32,20),s(8,21)]),"bumps"),steep:1.2,rough:.65,roughVaries:.25},tundra:{grain:u(({noise:s})=>ii([s(4,22),s(48,23)]),"grain"),shade:.3,bumps:u(({noise:s})=>s(6,24),"bumps"),steep:2,rough:.9,roughVaries:.05}},qf=u(s=>Math.max(0,Math.min(255,Math.round(s*255))),"byte"),I2=u((s=Fr,[e,t]=[0,0])=>{let n=new Uint8Array(s*s*4*qn.length),i={u:s,v:s};return qn.forEach((r,o)=>{let a=P2[r],l=u((w,M)=>ms({cell:w*s/Fr,period:i,seed:7919*(o+1)+M}),"noise"),c=u((w,M)=>(A,E)=>Math.sin(2*Math.PI*(w*A+M*E)/s),"wave"),h={noise:l,wave:c,texels:u(w=>w*s/Fr,"texels")},p=a.grain(h),d=a.bumps(h),m=o*s*s*4,g=new Float32Array(s*s);for(let w=0;w<s;w++)for(let M=0;M<s;M++)g[w*s+M]=d(M+e,w+t);let _=u((w,M)=>g[(M+s)%s*s+(w+s)%s]??0,"height"),x=new Float32Array(s*s),b=0;for(let w=0;w<s;w++)for(let M=0;M<s;M++)x[w*s+M]=p(M+e,w+t),b+=x[w*s+M]??0;let v=b/(s*s);for(let w=0;w<s;w++)for(let M=0;M<s;M++){let A=m+(w*s+M)*4,E=(x[w*s+M]??0)-v,y=(_(M+1,w)-_(M-1,w))/2*(s/Fr),S=(_(M,w+1)-_(M,w-1))/2*(s/Fr);n[A]=qf(a.shade*E+.5),n[A+1]=qf((1-Math.max(-1,Math.min(1,y*a.steep)))/2),n[A+2]=qf((1-Math.max(-1,Math.min(1,S*a.steep)))/2),n[A+3]=qf(a.rough+a.roughVaries*E)}}),n},"surfaceTextures"),QM=I2;var zi={rockFrom:.97,rockTo:.88,snowAtEquator:.4,snowAtPoles:.26,snowDeepens:.04,snowSlips:.85,snowHolds:.95,wetFrom:.1,wetTo:.4,wetUpTo:.03};var Gi=u(s=>Number.isInteger(s)?`${s}.0`:`${s}`,"number"),eS=`
float coverLatitude(float v, float extent) {
  float down = mod(v, extent);

  return min(1.0, abs(2.0 * down / extent - 1.0));
}

float coverRock(float upright) {
  return 1.0 - smoothstep(${Gi(zi.rockTo)}, ${Gi(zi.rockFrom)}, upright);
}

float coverSnow(float height, float upright, float latitude) {
  float line = ${Gi(zi.snowAtEquator)} + (${Gi(zi.snowAtPoles)} - ${Gi(zi.snowAtEquator)}) * latitude;

  return smoothstep(line, line + ${Gi(zi.snowDeepens)}, height) * smoothstep(${Gi(zi.snowSlips)}, ${Gi(zi.snowHolds)}, upright);
}

float coverWet(float height, float shore) {
  return smoothstep(${Gi(zi.wetFrom)}, ${Gi(zi.wetTo)}, shore) * (1.0 - smoothstep(0.0, ${Gi(zi.wetUpTo)}, height));
}
`;var L2=u(s=>[s.u/Math.max(1,Math.round(s.u/Yf)),s.v===null?Yf:s.v/Math.max(1,Math.round(s.v/Yf))],"surfaceTile"),N2=qn.map((s,e)=>`vec4 surface${e} = texture(surfaceDetail, vec3(surfaceAt, ${e}.0));
  surface += vSurfaces${e<4?"A":"B"}.${"xyzw"[e%4]} * surface${e};`).join(`
  `),D2=null,U2=u(()=>D2??=QM(),"made"),O2=u((s,e)=>{let t=new So(U2(),Fr,Fr,qn.length),n=new ln({roughness:.92,vertexColors:!0}),[i,r]=L2(s);return t.format=Xn,t.type=Mn,t.wrapS=Gn,t.wrapT=Gn,t.magFilter=zt,t.minFilter=vn,t.generateMipmaps=!0,t.anisotropy=4,t.colorSpace=ki,t.needsUpdate=!0,n.onBeforeCompile=o=>{o.uniforms.surfaceDetail={value:t},o.uniforms.surfaceTile={value:new Ve(i,r)},o.uniforms.groundExtent={value:e},o.uniforms.rockColour={value:new Pe(Oo("Mountains").colour)},o.uniforms.snowColour={value:new Pe(Oo("Glacier").colour)},o.vertexShader=`attribute vec4 surfacesA;
attribute vec4 surfacesB;
attribute float shore;
varying vec4 vSurfacesA;
varying vec4 vSurfacesB;
varying vec2 vGround;
varying float vHeight;
varying float vShore;
${o.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
  vSurfacesA = surfacesA;
  vSurfacesB = surfacesB;
  vShore = shore;
  // Where it is on the ground, at this copy of the world: east and south; and how high.
  vec4 groundAt = modelMatrix * vec4(transformed, 1.0);
  vGround = groundAt.xz;
  vHeight = groundAt.y;`)}`,o.fragmentShader=`uniform highp sampler2DArray surfaceDetail;
uniform vec2 surfaceTile;
uniform float groundExtent;
uniform vec3 rockColour;
uniform vec3 snowColour;
varying vec4 vSurfacesA;
varying vec4 vSurfacesB;
varying vec2 vGround;
varying float vHeight;
varying float vShore;
${eS}
${o.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
  // Every surface sampled, so their smaller copies are chosen alike across where they meet.
  vec2 surfaceAt = vGround / surfaceTile;
  float surfaceTotal = dot(vSurfacesA, vec4(1.0)) + dot(vSurfacesB, vec4(1.0));
  vec4 surface = vec4(0.0);
  ${N2}
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
  surface = mix(surface, surface${qn.indexOf("rock")}, rockShare);
  diffuseColor.rgb = mix(diffuseColor.rgb, snowColour, snowShare);
  surface = mix(surface, surface${qn.indexOf("snow")}, snowShare);
  diffuseColor.rgb *= 0.5 + surface.r;
  // Wet: darker, and shinier.
  diffuseColor.rgb *= 1.0 - 0.3 * wetShare;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
  roughnessFactor = mix(surface.a, 0.3, wetShare);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
  // The detail's bumps tilt the ground east and south, as the view sees it, along the ground's own slope.
  vec3 surfaceTilt = mat3(viewMatrix) * vec3(surface.g * 2.0 - 1.0, 0.0, surface.b * 2.0 - 1.0);
  normal = normalize(normal + surfaceTilt - dot(surfaceTilt, normal) * normal);`)}`},n.customProgramCacheKey=()=>"land-surfaces-cover",{material:n,detail:t}},"landMaterial"),tS=O2;function $f(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Tt;l.morphTargetsRelative=a;let c=0;for(let h=0;h<s.length;++h){let p=s[h],d=0,m=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in p.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(p.attributes[g]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in p.morphAttributes){if(!i.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(p.morphAttributes[g].length!==s[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;o[g]===void 0&&(o[g]=[]),o[g].push(p.morphAttributes[g]),m++}if(m!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let g;if(t)g=p.index.count;else if(p.attributes.position!==void 0)g=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,g,h),c+=g}}if(t){let h=0,p=[];for(let d=0;d<s.length;++d){let m=s[d].index;for(let g=0;g<m.count;++g)p.push(m.getX(g)+h);h+=s[d].attributes.position.count}l.setIndex(p)}for(let h in r){let p=nS(r[h]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,p)}for(let h in o){let p=o[h][0].length;if(p!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<p;++d){let m=[];for(let _=0;_<o[h].length;++_)m.push(o[h][_][d]);let g=nS(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}u($f,"mergeGeometries");function nS(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new yt(o,t,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let p=l/t;for(let d=0,m=h.count;d<m;d++)for(let g=0;g<t;g++){let _=h.getComponent(d,g);a.setComponent(d+p,g,_)}}else o.set(h.array,l);l+=h.count*t}return i!==void 0&&(a.gpuType=i),a}u(nS,"mergeAttributes");function yx(s,e){if(e===n0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===hl||e===iu){let t=s.getIndex();if(t===null){let r=[],o=s.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===hl)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}u(yx,"toTrianglesDrawMode");var Fo={radius:.42,thickness:.025},_x=Fo.radius-Fo.thickness,Kf=.07,cu=.04,Sx=.25,Ft=.004,vx=.08,lu=.012,Jf=.045,jf=.02,lS=625341585,F2=.18,B2=30,k2=5,z2=u(s=>Math.min(B2,k2+Math.max(0,s-1)*2),"lotsFor"),G2=u(s=>Math.floor(Math.max(0,s-1)/6),"tierFor"),wx=u(s=>{let e=2166136261;for(let t=0;t<s.length;t++)e=Math.imul(e^s.charCodeAt(t),16777619);return e>>>0},"citySeed"),cS=u((s,e,t,n=[])=>({seed:s,lots:z2(e),tier:G2(e),ways:[...t],sea:[...n]}),"planFor"),V2=u((s,e)=>{let[t,n]=s.centre,i=e.map(l=>{let[c,h]=s.toward(l),p=Math.hypot(c-t,h-n);return{offset:l,du:p===0?0:(c-t)/p,dv:p===0?0:(h-n)/p}}),r=i.reduce((l,{du:c})=>l+c,0),o=i.reduce((l,{dv:c})=>l+c,0),a=u(({du:l,dv:c})=>l*r+c*o,"most");return i.length===0?[]:[i.reduce((l,c)=>a(c)>a(l)?c:l).offset]},"quayOf"),Yn=u((s,e)=>{let t=Math.imul(s^Math.imul(e+1,2654435761),2246822507);return t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,(t>>>0)/4294967296},"share"),uu=u((s,e,t)=>{let n=t[0]-e[0],i=t[1]-e[1],r=n*n+i*i;return r===0?0:((s[0]-e[0])*n+(s[1]-e[1])*i)/r},"along"),ml=u(({at:[s,e],width:t,facing:n})=>{let i=t/2,r=[Math.cos(n)*i,-Math.sin(n)*i],o=[Math.sin(n)*i,Math.cos(n)*i];return[[s-r[0]-o[0],e-r[1]-o[1]],[s+r[0]-o[0],e+r[1]-o[1]],[s+r[0]+o[0],e+r[1]+o[1]],[s-r[0]+o[0],e-r[1]+o[1]]]},"footprintOf"),H2=u(([s,e])=>{let t=Math.hypot(e[0]-s[0],e[1]-s[1]),n=-(e[1]-s[1])/t*(cu/2),i=(e[0]-s[0])/t*(cu/2);return[[s[0]+n,s[1]+i],[e[0]+n,e[1]+i],[e[0]-n,e[1]-i],[s[0]-n,s[1]-i]]},"stripOf"),Qf=u((s,e,t)=>[s,e].some(n=>n.some((i,r)=>{let o=n[(r+1)%n.length],a=Math.hypot(o[0]-i[0],o[1]-i[1]),l=-(o[1]-i[1])/a,c=(o[0]-i[0])/a,h=u(m=>m.map(([g,_])=>g*l+_*c),"onto"),p=h(s),d=h(e);return Math.min(...d)-Math.max(...p)>=t||Math.min(...p)-Math.max(...d)>=t})),"apart"),pl=u((s,e)=>{let[t,n,,i]=e,r=uu(s,t,n),o=uu(s,t,i),a=Math.hypot(n[0]-t[0],n[1]-t[1]);return Math.hypot(Math.max(0,-r,r-1),Math.max(0,-o,o-1))*a},"fromFootprint"),uS=u((s,{seed:e,lots:t,tier:n,ways:i,sea:r},o)=>{let[a,l]=s.centre,c=[...i,...V2(s,r)].flatMap(x=>{let[b,v]=s.toward(x),w=[(a+b)/2,(l+v)/2],M=w[0]-a,A=w[1]-l,E=Math.hypot(M,A);return E===0?[]:[[[a+M/E*Kf,l+A/E*Kf],w]]}),h=c.map(H2),p=u((x,b)=>{let v=c.map(([w,M])=>{let A=uu(x,w,M),E=[w[0]+(M[0]-w[0])*A,w[1]+(M[1]-w[1])*A];return{t:A,near:E,off:Math.hypot(E[0]-x[0],E[1]-x[1])}}).filter(({t:w,off:M})=>w>=0&&w<=1&&M<=cu/2+b+Ft&&M>0).sort((w,M)=>w.off-M.off)[0];return v===void 0?Math.atan2(a-x[0],l-x[1]):Math.atan2(v.near[0]-x[0],v.near[1]-x[1])},"facingAt"),d=Math.ceil(_x/vx),m=[];for(let x=-d;x<=d;x++)for(let b=-d;b<=d;b++){let v=(x+d)*(d*2+1)+(b+d),w=[a+b*vx+(Yn(e,v*4)-.5)*2*lu,l+x*vx+(Yn(e,v*4+1)-.5)*2*lu],M=Math.hypot(w[0]-a,w[1]-l),A=Jf+Yn(e,v*4+2)*jf;M>_x||!s.owns(w[0],w[1])||m.push({at:w,width:A,facing:p(w,A),roof:Yn(e^lS,v),storeys:1+(M<F2?n:0)+(Yn(e,v*4+3)<.2?1:0),order:M+Yn(e,v*4+3)*.03})}m.sort((x,b)=>x.order-b.order);let g=[],_=[];return m.forEach(({at:x,width:b,facing:v,storeys:w,roof:M})=>{let A=ml({at:x,width:b,facing:v});A.every(([E,y])=>Math.hypot(E-a,y-l)<=_x-Ft)&&pl([a,l],A)>=Kf+Ft&&pl(o,A)>=Sx+Ft&&h.every(E=>Qf(A,E,Ft))&&_.every(E=>Qf(A,E,Ft))&&(g.push({at:x,width:b,facing:v,storeys:w,roof:M}),_.push(A))}),{plaza:{at:[a,l],radius:Kf},streets:c,lots:g.slice(0,t)}},"sprawl"),iS=4,W2=.62,X2=.05,hS=12,Mx=.085,Zf=.055,q2=.13,sS=32,Y2=1821285621,dS=u(s=>s<iS?0:Math.min(hS,s-iS+1),"suburbStepsFor"),$2=u(s=>s<=0?0:W2+(Math.min(s,hS)-1)*X2,"suburbReach"),K2=u(s=>1-.55*Math.min(1,Math.max(0,(s-.5)/.7)),"builtShare"),rS=u(([s,e],t)=>{let n=Math.hypot(e[0]-s[0],e[1]-s[1]),i=-(e[1]-s[1])/n*t,r=(e[0]-s[0])/n*t;return[[s[0]+i,s[1]+r],[e[0]+i,e[1]+r],[e[0]-i,e[1]-r],[s[0]-i,s[1]-r]]},"strip"),oS=u(s=>s.slice(1).map((e,t)=>[s[t],e]).filter(([e,t])=>Math.hypot(t[0]-e[0],t[1]-e[1])>0),"piecesOf"),aS=u((s,e,t)=>Math.min(...e.map(([n])=>n))-Math.max(...s.map(([n])=>n))>=t||Math.min(...s.map(([n])=>n))-Math.max(...e.map(([n])=>n))>=t||Math.min(...e.map(([,n])=>n))-Math.max(...s.map(([,n])=>n))>=t||Math.min(...s.map(([,n])=>n))-Math.max(...e.map(([,n])=>n))>=t,"boxesApart"),fS=u((s,{seed:e,steps:t,city:n},i)=>{let r=$2(t);if(r===0)return[];let[o,a]=s.centre,l=s.toward(n),c=e^Math.imul(Y2,(n[0]+7)*31+(n[1]+7)),h=i.runs.flatMap(({points:E})=>oS(E)),p=[...h.map(E=>({line:E,wide:Zf})),...i.lanes.filter(([E,y])=>Math.hypot(y[0]-E[0],y[1]-E[1])>0).map(E=>({line:E,wide:q2}))],d=[...p.map(({line:E,wide:y})=>rS(E,y)),...i.lines.filter(([E,y])=>Math.hypot(y[0]-E[0],y[1]-E[1])>0).map(E=>rS(E,Zf))],m=u((E,y)=>{let S=p.map(({line:[I,P],wide:D})=>{let U=uu(E,I,P),X=[I[0]+(P[0]-I[0])*U,I[1]+(P[1]-I[1])*U];return{t:U,near:X,off:Math.hypot(X[0]-E[0],X[1]-E[1]),wide:D}}).filter(({t:I,off:P,wide:D})=>I>=0&&I<=1&&P<=D+y+Ft&&P>0).sort((I,P)=>I.off-P.off)[0];return S===void 0?Math.atan2(l[0]-E[0],l[1]-E[1]):Math.atan2(S.near[0]-E[0],S.near[1]-E[1])},"facingAt"),g=Math.ceil(.75/Mx),_=[],x=u(E=>Jf+Yn(c,E*5+2)*jf,"widthOf"),b=u(E=>Math.min(1/0,...h.map(([y,S])=>{let I=Math.max(0,Math.min(1,uu(E,y,S)));return Math.hypot(y[0]+(S[0]-y[0])*I-E[0],y[1]+(S[1]-y[1])*I-E[1])})),"fromRuns"),v=u((E,y,S)=>{let I=Math.hypot(y[0]-l[0],y[1]-l[1]),P=I+Yn(c,E*5+3)*.03,D=x(E);P<=r&&Yn(c,E*5+4)<K2(I)&&s.owns(y[0],y[1])&&(!S||b(y)>=Zf+Ft*2+Jf+jf)&&_.push({at:y,width:D,facing:m(y,D),roof:Yn(c^lS,E),storeys:1+(Yn(c,E*5+3)<.15?1:0),order:P})},"consider");for(let E=-g;E<=g;E++)for(let y=-g;y<=g;y++){let S=(E+g)*(g*2+1)+(y+g);v(S,[o+y*Mx+(Yn(c,S*5)-.5)*2*lu,a+E*Mx+(Yn(c,S*5+1)-.5)*2*lu],!0)}i.runs.forEach(({key:E,points:y})=>{let S=oS(y).map(([D,U])=>({from:D,to:U,length:Math.hypot(U[0]-D[0],U[1]-D[1])})),I=S.reduce((D,U)=>D+U.length,0),P=Math.min(sS,Math.floor(I/(Jf+jf+Ft*2)));for(let D=0;D<P;D++)[1,-1].forEach((U,X)=>{let O=(g*2+1)**2+(E*sS+D)*2+X,Y=Zf+x(O)/2+Ft*2,te=(D+.5)/P*I+(Yn(c,O*5)-.5)*lu;for(let[B,{from:Z,to:W,length:$}]of S.entries()){if(te<=$||B===S.length-1){let Q=(W[0]-Z[0])/$,ue=(W[1]-Z[1])/$;v(O,[Z[0]+Q*te-ue*Y*U,Z[1]+ue*te+Q*Y*U],!1);break}te-=$}})}),_.sort((E,y)=>E.order-y.order);let w=u(([E,y],S)=>(Math.hypot(E-S[0],y-S[1])**2-Math.hypot(E-l[0],y-l[1])**2)/(2*Math.hypot(S[0]-l[0],S[1]-l[1])),"nearer"),M=[],A=[];return _.forEach(({at:E,width:y,facing:S,storeys:I,roof:P})=>{let D=ml({at:E,width:y,facing:S});ml({at:E,width:y+Ft*2,facing:S}).every(([U,X])=>s.owns(U,X))&&i.others.every(U=>D.every(X=>w(X,U)>=Ft/2))&&pl(l,D)>=Fo.radius+Fo.thickness+Ft&&i.stands.every(U=>pl(U,D)>=Sx+Ft)&&pl(s.centre,D)>=Sx+Ft&&[E,...D].every(([U,X])=>(i.ground?.(U,X)??0)>=0)&&i.taken.every(([U,X,O])=>pl([U,X],D)>=O+Ft)&&d.every(U=>aS(D,U,Ft)||Qf(D,U,Ft))&&A.every(U=>aS(D,U,Ft)||Qf(D,U,Ft))&&(M.push({at:E,width:y,facing:S,storeys:I,roof:P}),A.push(D))}),M},"suburb");var pS="#c79a72",Z2="#5a4a3a";var wn="#7a5532",Ax="#5f6266",mS="#8a8f96",Vi="#5d6447",Ex="#e8e0cc",xS="#6e4b2f",Bo="#8a8580",gS="#5b3e27",gl="#7d858c",J2=new H(0,1,0),Ie=new ss(1,1,1),cn=new rs(.5,.5,1,10),ko=new Ks(.5,1,10),xl=new Ur(.5,10,8),Cx=class Cx{constructor(){this.parts=[]}add(e){return this.parts.push(e),this}addAll(e,t,n=0){let i=Math.cos(n),r=Math.sin(n);return e.parts.forEach(o=>{let[a,l,c]=o.at;this.parts.push({...o,at:[t[0]+a*i+c*r,t[1]+l,t[2]-a*r+c*i],yaw:(o.yaw??0)+n})}),this}};u(Cx,"Parts");var un=Cx,j2=u((s,e,t)=>{switch(s){case"ancient":t.add({shape:xl,colour:e[1],at:[0,.172,0],size:[.048,.03,.048]});break;case"medieval":t.add({shape:ko,colour:Ax,at:[0,.188,0],size:[.05,.04,.05]});break;case"renaissance":t.add({shape:Ie,colour:"#2a2a2a",at:[0,.178,0],size:[.06,.016,.06]});break;case"industrial":t.add({shape:cn,colour:e[0],at:[0,.18,0],size:[.046,.022,.046]});break;default:t.add({shape:xl,colour:Vi,at:[0,.172,0],size:[.052,.034,.052]})}},"headgear"),Q2=u((s,e,t,n)=>{switch(s){case"club":n.add({shape:cn,colour:wn,at:[.04,.1,.01],size:[.014,.08,.014],turn:[0,0,.5]});break;case"spear":n.add({shape:cn,colour:wn,at:[.04,.12,0],size:[.006,.2,.006]}),n.add({shape:ko,colour:Ax,at:[.04,.23,0],size:[.012,.025,.012]});break;case"pike":n.add({shape:cn,colour:wn,at:[.04,.15,0],size:[.006,.28,.006]}),n.add({shape:ko,colour:mS,at:[.04,.3,0],size:[.012,.03,.012]});break;case"sword":n.add({shape:Ie,colour:mS,at:[.045,.12,.012],size:[.008,.07,.004],turn:[.3,0,0]});break;case"bow":n.add({shape:Ie,colour:wn,at:[-.04,.11,.02],size:[.006,.11,.006]});break;case"lance":n.add({shape:cn,colour:wn,at:[.04,.14,.05],size:[.006,.24,.006],turn:[1.1,0,0]});break;case"musket":case"rifle":n.add({shape:Ie,colour:s==="rifle"?"#3a3a3a":wn,at:[.03,.12,.02],size:[.008,.11,.01],turn:[0,0,.4]});break;case"case":n.add({shape:Ie,colour:"#3b2a1e",at:[.042,.072,.008],size:[.03,.022,.009]});break;case"pack":n.add({shape:Ie,colour:"#7a6a48",at:[0,.115,-.025],size:[.042,.05,.022]}).add({shape:cn,colour:wn,at:[.042,.1,.012],size:[.006,.19,.006]});break;default:}e==="ancient"&&(s==="spear"||s==="sword")&&n.add({shape:cn,colour:t[1],at:[-.035,.1,.012],size:[.05,.008,.05],turn:[Math.PI/2,0,.2]})},"carried"),eI={snow:{coat:"#e8eaec",legs:"#d4d7da"},irregular:{coat:"#6a5a40",legs:"#4a4036"}},Rx=u((s,e,t,{legs:n=!0,dress:i}={})=>{let r=new un,o=i===void 0?void 0:eI[i],a=o?.coat??(s==="modern"?Vi:t[0]),l=o?.legs??(s==="ancient"?pS:s==="modern"?Vi:Z2);return n&&(r.add({shape:Ie,colour:l,at:[-.012,.04,0],size:[.018,.08,.02]}),r.add({shape:Ie,colour:l,at:[.012,.04,0],size:[.018,.08,.02]})),r.add({shape:Ie,colour:a,at:[0,.112,0],size:[.05,.065,.028]}),r.add({shape:Ie,colour:t[1],at:[0,.088,0],size:[.052,.012,.03]}),r.add({shape:Ie,colour:a,at:[-.032,.11,0],size:[.014,.055,.016]}),r.add({shape:Ie,colour:a,at:[.032,.11,0],size:[.014,.055,.016]}),r.add({shape:xl,colour:pS,at:[0,.16,0],size:[.034,.038,.034]}),i==="snow"?r.add({shape:xl,colour:"#f2f3f4",at:[0,.172,-.002],size:[.044,.034,.044]}):i==="irregular"?r.add({shape:xl,colour:t[1],at:[0,.176,0],size:[.042,.016,.042]}):j2(s,t,r),i==="parachute"&&r.add({shape:Ie,colour:"#4d5340",at:[0,.112,-.026],size:[.046,.06,.026]}),Q2(e,s,t,r),r},"person"),ep=u(s=>s<=1?[[0,0]]:s===2?[[-.045,0],[.045,.02]]:[[0,-.04],[-.06,.04],[.06,.04]],"formation"),Tx=u((s=xS)=>new un().add({shape:Ie,colour:s,at:[0,.09,0],size:[.05,.05,.14]}).add({shape:Ie,colour:s,at:[0,.13,.08],size:[.03,.06,.03],turn:[.5,0,0]}).add({shape:Ie,colour:s,at:[0,.155,.105],size:[.026,.026,.05]}).add({shape:Ie,colour:s,at:[-.017,.035,.05],size:[.012,.07,.012]}).add({shape:Ie,colour:s,at:[.017,.035,.05],size:[.012,.07,.012]}).add({shape:Ie,colour:s,at:[-.017,.035,-.05],size:[.012,.07,.012]}).add({shape:Ie,colour:s,at:[.017,.035,-.05],size:[.012,.07,.012]}),"horse"),tI=u((s,e,t)=>new un().addAll(Tx(),[0,0,0]).add({shape:Ie,colour:t[0],at:[0,.118,0],size:[.056,.01,.06]}).addAll(Rx(s,e,t,{legs:!1}),[0,.04,0]),"rider"),nI=u(s=>new un().add({shape:Ie,colour:Bo,at:[0,.12,0],size:[.09,.08,.17]}).add({shape:Ie,colour:Bo,at:[0,.14,.1],size:[.07,.07,.06]}).add({shape:cn,colour:Bo,at:[0,.08,.14],size:[.016,.09,.016],turn:[.3,0,0]}).add({shape:Ie,colour:Bo,at:[-.03,.04,.05],size:[.025,.08,.025]}).add({shape:Ie,colour:Bo,at:[.03,.04,.05],size:[.025,.08,.025]}).add({shape:Ie,colour:Bo,at:[-.03,.04,-.05],size:[.025,.08,.025]}).add({shape:Ie,colour:Bo,at:[.03,.04,-.05],size:[.025,.08,.025]}).add({shape:Ie,colour:s[0],at:[0,.18,-.01],size:[.07,.03,.07]}).add({shape:Ie,colour:s[1],at:[0,.2,-.01],size:[.074,.008,.074]}),"elephant"),En=u((s,e=.05)=>({shape:cn,colour:wn,at:s,size:[e,.01,e],turn:[0,0,Math.PI/2]}),"wheel"),iI=u((s,e,t)=>{if(e==="chariot")return new un().addAll(Tx(),[0,0,.09]).add({shape:Ie,colour:wn,at:[0,.055,-.04],size:[.064,.035,.05]}).add({shape:Ie,colour:s[0],at:[0,.075,-.016],size:[.066,.012,.006]}).add(En([-.042,.035,-.045],.065)).add(En([.042,.035,-.045],.065)).addAll(Rx(t,"spear",s,{legs:!1}),[0,0,-.045]);let n=new un().addAll(Tx(t==="ancient"?"#8a7a64":xS),[0,0,.1]).add({shape:Ie,colour:wn,at:[0,.07,-.06],size:[.07,.04,.1]}).add({shape:Ie,colour:s[0],at:[0,.092,-.06],size:[.072,.008,.102]}).add(En([-.042,.03,-.03])).add(En([.042,.03,-.03])).add(En([-.042,.03,-.09])).add(En([.042,.03,-.09]));return e==="wagon"?n.add({shape:cn,colour:Ex,at:[0,.1,-.06],size:[.07,.1,.07],turn:[Math.PI/2,0,0]}):n.add({shape:Ie,colour:Ex,at:[-.016,.112,-.04],size:[.032,.03,.04]}).add({shape:Ie,colour:s[0],at:[.018,.11,-.08],size:[.03,.026,.036]}).add({shape:Ie,colour:"#8a5a2a",at:[.014,.112,-.035],size:[.026,.03,.03]}),n},"cart"),sI=u((s,e,t)=>{if(s==="ancient"||s==="medieval")return new un().add({shape:Ie,colour:wn,at:[0,.04,0],size:[.08,.025,.14]}).add({shape:Ie,colour:wn,at:[0,.09,-.02],size:[.012,.12,.012],turn:[-.7,0,0]}).add({shape:Ie,colour:e[0],at:[0,.055,.05],size:[.082,.012,.03]}).add(En([-.045,.03,.04],.045)).add(En([.045,.03,.04],.045)).add(En([-.045,.03,-.04],.045)).add(En([.045,.03,-.04],.045));let n=t?.19:s==="renaissance"?.12:.16,i=s==="renaissance"?"#3d3a36":s==="modern"?Vi:Ax;return new un().add({shape:cn,colour:i,at:[0,.07,.04],size:[.024,n,.024],turn:[1.35,0,0]}).add({shape:Ie,colour:s==="modern"?Vi:wn,at:[0,.045,-.02],size:[.05,.03,.09]}).add({shape:Ie,colour:e[0],at:[0,.064,-.02],size:[.052,.008,.06]}).add(En([-.04,.035,0],.07)).add(En([.04,.035,0],.07))},"siege"),rI=u((s,e,t)=>{if(s==="industrial")return new un().add({shape:Ie,colour:gl,at:[0,.07,-.03],size:[.08,.07,.12]}).add({shape:Ie,colour:e[0],at:[0,.06,.07],size:[.07,.05,.05]}).add(En([-.045,.025,.06],.045)).add(En([.045,.025,.06],.045)).add(En([-.045,.025,-.06],.045)).add(En([.045,.025,-.06],.045));let n=new un().add({shape:Ie,colour:Vi,at:[0,.045,0],size:[.1,.05,.17]}).add({shape:Ie,colour:"#2e2e2a",at:[-.055,.028,0],size:[.022,.05,.18]}).add({shape:Ie,colour:"#2e2e2a",at:[.055,.028,0],size:[.022,.05,.18]}).add({shape:Ie,colour:e[0],at:[0,.072,-.05],size:[.08,.006,.04]});return t?n.add({shape:Ie,colour:Vi,at:[0,.088,-.01],size:[.07,.035,.08]}).add({shape:cn,colour:Vi,at:[0,.09,.08],size:[.014,.13,.014],turn:[Math.PI/2,0,0]}):n.add({shape:Ie,colour:Vi,at:[0,.07,.06],size:[.09,.03,.05],turn:[.4,0,0]}),n},"vehicle"),oI=u((s,e)=>{let t=s.large?1.25:1,n=.3*t,i=.07*t,r=new un;switch(s.hull){case"oars":case"sail":{r.add({shape:Ie,colour:gS,at:[0,.03,0],size:[i,.045,n*.8]}).add({shape:ko,colour:gS,at:[0,.03,n*.45],size:[i,.1,.045],turn:[Math.PI/2,0,0]}).add({shape:Ie,colour:e[0],at:[0,.056,0],size:[i+.004,.008,n*.82]});let o=s.hull==="oars"?1:s.large?3:2;for(let a=0;a<o;a++){let l=(a-(o-1)/2)*.09*t;r.add({shape:cn,colour:wn,at:[0,.14,l],size:[.008,.2,.008]}).add({shape:Ie,colour:a===0?e[1]:Ex,at:[0,.16,l],size:[i*1.3,.09,.005]})}return(s.guns??0)>0&&r.add({shape:Ie,colour:"#1f1f1f",at:[0,.036,0],size:[i+.006,.009,n*.66]}),s.hull==="oars"&&r.add({shape:Ie,colour:wn,at:[-i*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,.4]}).add({shape:Ie,colour:wn,at:[i*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,-.4]}),r}case"submarine":return r.add({shape:cn,colour:"#33383d",at:[0,.018,0],size:[.05,n,.05],turn:[Math.PI/2,0,0]}).add({shape:Ie,colour:"#33383d",at:[0,.055,.02],size:[.02,.04,.05]}).add({shape:Ie,colour:e[0],at:[0,.078,.02],size:[.022,.006,.052]});case"carrier":return r.add({shape:Ie,colour:gl,at:[0,.035,0],size:[i*1.1,.05,n*1.15]}).add({shape:Ie,colour:"#55595e",at:[0,.062,0],size:[i*1.5,.008,n*1.2]}).add({shape:Ie,colour:gl,at:[i*.55,.09,.02],size:[.02,.05,.06]}).add({shape:Ie,colour:e[0],at:[i*.55,.12,.02],size:[.022,.008,.062]});default:return r.add({shape:Ie,colour:s.era==="industrial"?"#4a4a48":gl,at:[0,.03,0],size:[i,.045,n*.85]}).add({shape:ko,colour:s.era==="industrial"?"#4a4a48":gl,at:[0,.03,n*.47],size:[i,.08,.045],turn:[Math.PI/2,0,0]}).add({shape:Ie,colour:gl,at:[0,.075,-.02],size:[i*.6,.05,n*.3]}).add({shape:cn,colour:e[0],at:[0,.12,-.03],size:[.022,.05,.022]}).add({shape:Ie,colour:e[1],at:[0,.056,0],size:[i+.004,.006,n*.86]}),[.3,-.34,.14].slice(0,s.guns??0).forEach(o=>{let a=o>0?1:-1;r.add({shape:Ie,colour:"#5f666c",at:[0,.066,n*o],size:[.035,.02,.035]}).add({shape:cn,colour:"#5f666c",at:[0,.07,n*o+a*.04],size:[.008,.06,.008],turn:[Math.PI/2,0,0]})}),s.missiles&&[-1,1].forEach(o=>r.add({shape:Ie,colour:"#4a5056",at:[o*i*.22,.072,-n*.3],size:[.022,.022,.05],turn:[-.5,0,0]})),r}},"ship"),aI=u((s,e)=>{let t=s.large?1.3:1,n=s.stealth?"#2c3034":s.large?"#6e7378":"#7d8890";return new un().add({shape:cn,colour:n,at:[0,.3,0],size:[.03*t,.2*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:ko,colour:n,at:[0,.3,.12*t],size:[.03*t,.05*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:Ie,colour:n,at:[0,.3,.01],size:[.26*t,.006,.05*t]}).add({shape:Ie,colour:e[0],at:[0,.304,.01],size:[.06*t,.004,.052*t]}).add({shape:Ie,colour:n,at:[0,.3,-.09*t],size:[.09*t,.005,.03*t]}).add({shape:Ie,colour:e[1],at:[0,.325,-.09*t],size:[.005,.045,.03*t]})},"aircraft"),lI=u(s=>new un().add({shape:xl,colour:Vi,at:[0,.27,.02],size:[.06,.055,.09]}).add({shape:Ie,colour:Vi,at:[0,.275,-.08],size:[.015,.015,.12]}).add({shape:Ie,colour:s[0],at:[0,.3,-.13],size:[.004,.04,.025]}).add({shape:Ie,colour:"#2e2e2e",at:[0,.31,.02],size:[.24,.003,.012]}).add({shape:Ie,colour:"#2e2e2e",at:[0,.31,.02],size:[.012,.003,.24]}),"helicopter"),cI=u((s,e)=>{let t=e?1.4:1;return new un().add({shape:cn,colour:"#d8d8d8",at:[0,.14*t,0],size:[.024*t,.18*t,.024*t]}).add({shape:ko,colour:e?"#c8a020":s[0],at:[0,.255*t,0],size:[.024*t,.05*t,.024*t]}).add({shape:Ie,colour:s[1],at:[0,.06*t,0],size:[.07*t,.03*t,.004]}).add({shape:Ie,colour:s[1],at:[0,.06*t,0],size:[.004,.03*t,.07*t]})},"missile"),bS=u((s,e)=>{switch(s.shape){case"foot":{let t=new un;return ep(s.squad).forEach(([n,i],r)=>t.addAll(Rx(s.era,s.gear??"none",e,{dress:s.dress}),[n,0,i],r*.3-.3)),t}case"mounted":{let t=new un;return ep(s.squad).forEach(([n,i])=>t.addAll(tI(s.era,s.gear??"none",e),[n*1.4,0,i])),t}case"elephant":return nI(e);case"cart":return iI(e,s.cart??"wagon",s.era);case"siege":return sI(s.era,e,s.large===!0);case"vehicle":return rI(s.era,e,s.large===!0);case"ship":return oI(s,e);case"aircraft":return aI(s,e);case"helicopter":return lI(e);default:return cI(e,s.large===!0)}},"figureParts"),uI=u(({at:s,size:e,turn:t=[0,0,0],yaw:n=0})=>new Ke().compose(new H(...s),new an().setFromAxisAngle(J2,n).multiply(new an().setFromEuler(new Qn(...t))),new H(...e)),"partMatrix"),tp=u(s=>{let e=s.map(n=>{let{shape:i,colour:r}=n,o=i.clone(),a=new Pe(r),l=o.getAttribute("position").count,c=new Float32Array(l*3);for(let h=0;h<l;h++)c.set([a.r,a.g,a.b],h*3);return o.applyMatrix4(uI(n)),o.setAttribute("color",new yt(c,3)),o}),t=(e.length===0?null:$f(e))??new Tt;return e.forEach(n=>n.dispose()),t.computeBoundingBox(),t.computeBoundingSphere(),t},"mergeParts"),yS=u((s,e)=>tp(bS(s,e).parts),"figureGeometry"),hI=new rs(.19,.2,1,28),dI=new Zs(.22,.014,4,32),fI=new Zs(1,.03,3,40),pI="#dfe9ea",mI=[[.11,.2],[.16,.27]],_S=u((s,e,{fortified:t,scale:n,stand:i,part:r="whole",ripples:o=!1})=>{let a=s.shape==="ship",l=a?0:i,c=r==="base"?[]:bS(s,e).parts.map(h=>({...h,at:[h.at[0]*n,h.at[1]*n+l,h.at[2]*n],size:[h.size[0]*n,h.size[1]*n,h.size[2]*n]}));if(r==="figures")return tp(c);if(a||c.push({shape:hI,colour:e[1],at:[0,i/2,0],size:[1,i,1]}),a&&o){let h=(s.large?1.25:1)*n;mI.forEach(([p,d])=>c.push({shape:fI,colour:pI,at:[0,.006,0],size:[p*h,d*h,.15],turn:[Math.PI/2,0,0]}))}return t&&c.push({shape:dI,colour:"#b5ab98",at:[0,l+.015,0],size:[1,1,2.5],turn:[Math.PI/2,0,0]}),tp(c)},"unitBodyGeometry"),gI=new Zs(Fo.radius,Fo.thickness,6,24),vS=u(()=>tp([{shape:gI,colour:"#8d8577",at:[0,.02,0],size:[1,1,2.5],turn:[Math.PI/2,0,0]}]),"wallsGeometry");var MS=.08,SS=u(s=>{let e=new Pe(s),t=.2126*e.r+.7152*e.g+.0722*e.b;if(t>=MS)return e;let n=(MS-t)/(1-t);return e.setRGB(e.r+(1-e.r)*n,e.g+(1-e.g)*n,e.b+(1-e.b)*n)},"ownerTint"),Ix=class Ix extends ln{constructor(t={}){let{tint:n,...i}=t;super(i);this.isTintedMaterial=!0;this.tint=new Pe(1,1,1);n!==void 0&&this.tint.copy(n)}onBeforeCompile(t){t.uniforms.tint={value:this.tint},t.fragmentShader=`uniform vec3 tint;
${t.fragmentShader.replace("#include <map_fragment>",`#ifdef USE_MAP
        vec4 texel = texture2D( map, vMapUv );
        diffuseColor.rgb *= texel.rgb * mix( tint, vec3( 1.0 ), texel.a );
      #endif`)}`}customProgramCacheKey(){return"tinted"}copy(t){return super.copy(t),this.tint.copy(t.tint),this}};u(Ix,"TintedMaterial");var Px=Ix,wS=Px;var mn=u((s,e,t=3)=>({shape:"foot",era:s,gear:e,squad:t}),"foot"),hu=u((s,e,t=2)=>({shape:"mounted",era:s,gear:e,squad:t}),"mounted"),si=u((s,e,t=!1,n=0,i=!1)=>({shape:"ship",era:s,hull:e,squad:1,large:t,guns:n,missiles:i}),"ship"),du=u((s,e=!1,t=!1)=>({shape:"aircraft",era:s,squad:1,large:e,stealth:t}),"aircraft"),Lx=u((s,e)=>({shape:"cart",era:s,cart:e,squad:1}),"cart"),ES={Warrior:mn("ancient","club"),Spearman:mn("ancient","spear"),Swordman:mn("ancient","sword"),Archer:mn("ancient","bow"),Horseman:hu("ancient","spear"),Chariot:Lx("ancient","chariot"),Elephant:{shape:"elephant",era:"ancient",squad:1},Catapult:{shape:"siege",era:"ancient",squad:1},Trireme:si("ancient","oars"),Settlers:Lx("ancient","wagon"),Diplomat:mn("ancient","case",1),Caravan:Lx("ancient","goods"),Explorer:mn("ancient","pack",1),Pikeman:mn("medieval","pike"),Knight:hu("medieval","lance"),Crusader:hu("medieval","sword"),Fanatic:mn("medieval","sword"),Sail:si("medieval","sail"),Musketman:mn("renaissance","musket"),Dragoon:hu("renaissance","musket"),Cannon:{shape:"siege",era:"renaissance",squad:1},Frigate:si("renaissance","sail",!0,1),Galleon:si("renaissance","sail",!0),Rifleman:mn("industrial","rifle"),AlpineTrooper:{...mn("industrial","rifle"),dress:"snow"},Partisan:{...mn("industrial","rifle"),dress:"irregular"},Cavalry:hu("industrial","rifle"),Artillery:{shape:"siege",era:"industrial",squad:1},Engineer:mn("industrial","none",2),Ironclad:si("industrial","steam",!1,1),Transport:si("industrial","steam",!0),Freight:{shape:"vehicle",era:"industrial",squad:1},Spy:mn("industrial","none",1),MechanizedInfantry:{shape:"vehicle",era:"modern",squad:1},Marine:mn("modern","rifle"),Paratrooper:{...mn("modern","rifle"),dress:"parachute"},Tank:{shape:"vehicle",era:"modern",squad:1,large:!0},Howitzer:{shape:"siege",era:"modern",squad:1,large:!0},Destroyer:si("modern","steam",!1,1),Cruiser:si("modern","steam",!0,2),MissileCruiser:si("modern","steam",!0,1,!0),Battleship:si("modern","steam",!0,3),Submarine:si("modern","submarine"),Carrier:si("modern","carrier",!0),Fighter:du("modern"),StealthFighter:du("modern",!1,!0),Bomber:du("modern",!0),StealthBomber:du("modern",!0,!0),Helicopter:{shape:"helicopter",era:"modern",squad:1},CruiseMissile:{shape:"missile",era:"modern",squad:1},Nuclear:{shape:"missile",era:"modern",squad:1,large:!0}},fu=u((s,e=[])=>(Object.prototype.hasOwnProperty.call(ES,s)?ES[s]:void 0)??(e.includes("Naval")||e.includes("NavalTransport")?si("industrial","steam"):e.includes("Air")?du("modern"):mn("ancient","spear")),"unitLook"),pu=u(s=>s.shape==="aircraft"||s.shape==="helicopter"||s.shape==="missile","airborne");var Ux=2,xI=.285,TS=.03,PS="#fff4b0",bI=.04,np=.004,Nx=.018,AS=.01,RS=.022,CS=.03,IS=.03,ip=.002,yI="#4caf50",_I="#e0b030",vI="#d04030",MI=256,zo,Hi,Go,Vo,Br,Ho,Wo,Xo,qo,Yo,ir,yl,$o,Dx,LS,Bx=class Bx{constructor(){G(this,$o);G(this,zo,new Map);G(this,Hi,new Map);G(this,Go,new Map);G(this,Vo,new Map);G(this,Br,new Map);G(this,Ho,new Map);G(this,Wo,new Map);G(this,Xo,new Map);G(this,qo,null);G(this,Yo,new Map);G(this,ir,null);G(this,yl,0);this.figureMaterial=new ln({vertexColors:!0,roughness:.8,metalness:.05});this.geometries={ring:new Zs(.23,.018,8,36)}}material(e,t=!1){let n=`${e}${t?" glow":""}`,i=f(this,zo).get(n);return i===void 0&&(i=new ln({color:new Pe(e),roughness:.75,metalness:.05,...t?{emissive:new Pe(e),emissiveIntensity:.6}:{}}),f(this,zo).set(n,i)),i}addModel(e,t){let n=f(this,Br).get(e);n!==void 0&&n!==t&&R(this,$o,Dx).call(this,e,n),f(this,Br).set(e,t)}modelFigures(e,t,n,i=1){let r=f(this,Br).get(e);if(r===void 0)return null;let o=t.shape==="ship",a=pu(t),l=t.shape==="foot"?t.squad:1,c=JSON.stringify([e,l,i,o,a]),h=JSON.stringify([e,l,i,o,a,n[0]]),p=f(this,Ho).get(c),d=f(this,Wo).get(h);if(p===void 0){let m=r.scale*i,g=o?0:TS+(a?xI*i:0),_=ep(l).map(([v,w])=>new Ke().makeTranslation(v*i,g,w*i).multiply(new Ke().makeScale(m,m,m))),x=g;p={geometries:r.parts.map(v=>{let w=_.map(A=>v.geometry.clone().applyMatrix4(A)),M=(w.length===1?w[0].clone():$f(w))??new Tt;return w.forEach(A=>A.dispose()),M.computeBoundingBox(),M.computeBoundingSphere(),x=Math.max(x,M.boundingBox?.max.y??g),M}),top:x},f(this,Ho).set(c,p)}return d===void 0&&(d={meshes:p.geometries.map((m,g)=>[m,R(this,$o,LS).call(this,e,g,r.parts[g],n)]),top:p.top},f(this,Wo).set(h,d)),d}body(e,t,n,i=1,r="whole",o=!1){let a=o&&e.shape==="ship"&&r!=="figures",l=JSON.stringify([e,t,n,i,r,a]),c=f(this,Vo).get(l);return c===void 0&&(c=_S(e,t,{fortified:n,scale:i,stand:TS,part:r,ripples:a}),f(this,Vo).set(l,c)),c}walls(){return f(this,qo)??k(this,qo,vS()),f(this,qo)}figure(e,t){let n=JSON.stringify([e,t]),i=f(this,Go).get(n);return i===void 0&&(i=yS(e,t),f(this,Go).set(n,i)),i}plain(e){let t=f(this,Yo).get(e);return t===void 0&&(t=new Pr({color:new Pe(e),sizeAttenuation:!1,depthTest:!1}),f(this,Yo).set(e,t)),t}pointer(){if(f(this,ir)===null){let e=document.createElement("canvas"),t=e.getContext("2d");e.width=32,e.height=32,t!==null&&(t.fillStyle=PS,t.strokeStyle="#3a3420",t.lineWidth=3,t.beginPath(),t.moveTo(3,5),t.lineTo(29,5),t.lineTo(16,28),t.closePath(),t.fill(),t.stroke());let n=new Dr(e);n.colorSpace=Lt,k(this,ir,new Pr({map:n,sizeAttenuation:!1,depthTest:!1,transparent:!0}))}return f(this,ir)}label(e,t,n){let i=`${e}\0${t}\0${n}`,r=f(this,Hi).get(i);if(r===void 0){let o=document.createElement("canvas"),a=o.getContext("2d"),l="600 28px system-ui, sans-serif",c=40;a!==null&&(a.font=l,o.width=Math.ceil(a.measureText(e).width)+24,o.height=c,a.font=l,a.fillStyle=t,a.beginPath(),a.roundRect?.(0,0,o.width,c,10),a.fill(),a.fillStyle=n,a.textBaseline="middle",a.fillText(e,12,c/2+1));let h=new Dr(o);h.colorSpace=Lt,r=new Pr({map:h,sizeAttenuation:!1,depthTest:!1,transparent:!0}),f(this,Hi).set(i,r)}return r}get sweepDue(){return f(this,Hi).size>Math.max(MI,f(this,yl)*2)}sweep(e){let t=new Set;for(let n of e)n.traverse(i=>{i instanceof dt&&t.add(i.geometry),i instanceof Ys&&t.add(i.material)});f(this,Hi).forEach((n,i)=>{t.has(n)||(n.map?.dispose(),n.dispose(),f(this,Hi).delete(i))}),k(this,yl,f(this,Hi).size)}dispose(){Object.values(this.geometries).forEach(e=>e.dispose()),f(this,Go).forEach(e=>e.dispose()),f(this,Vo).forEach(e=>e.dispose()),f(this,qo)?.dispose(),k(this,qo,null),f(this,Vo).clear(),[...f(this,Br)].forEach(([e,t])=>R(this,$o,Dx).call(this,e,t)),this.figureMaterial.dispose(),f(this,Yo).forEach(e=>e.dispose()),f(this,ir)?.map?.dispose(),f(this,ir)?.dispose(),f(this,Yo).clear(),k(this,ir,null),f(this,zo).forEach(e=>e.dispose()),f(this,Hi).forEach(e=>{e.map?.dispose(),e.dispose()}),f(this,zo).clear(),f(this,Hi).clear(),f(this,Go).clear(),k(this,yl,0)}};zo=new WeakMap,Hi=new WeakMap,Go=new WeakMap,Vo=new WeakMap,Br=new WeakMap,Ho=new WeakMap,Wo=new WeakMap,Xo=new WeakMap,qo=new WeakMap,Yo=new WeakMap,ir=new WeakMap,yl=new WeakMap,$o=new WeakSet,Dx=u(function(e,t){let n=u(i=>JSON.parse(i)[0]===e,"ours");t.parts.forEach(({geometry:i,map:r})=>{i.dispose(),r?.dispose()}),f(this,Br).delete(e),[...f(this,Ho)].forEach(([i,{geometries:r}])=>{n(i)&&(r.forEach(o=>o.dispose()),f(this,Ho).delete(i))}),[...f(this,Wo).keys()].filter(n).forEach(i=>f(this,Wo).delete(i)),[...f(this,Xo)].forEach(([i,r])=>{n(i)&&(r.dispose(),f(this,Xo).delete(i))})},"#letGoOfModel"),LS=u(function(e,t,n,i){let r=JSON.stringify([e,t,n.tinted?i[0]:null]),o=f(this,Xo).get(r);if(o===void 0){let a={map:n.map,roughness:.85,metalness:0};o=n.cutout?new ln({...a,alphaTest:.5,side:jt}):new wS({...a,tint:n.tinted?SS(i[0]):new Pe(1,1,1),side:n.doubleSided?jt:yi}),f(this,Xo).set(r,o)}return o},"#modelMaterial"),u(Bx,"MarkerKit");var rp=Bx,NS=u(s=>{let{r:e,g:t,b:n}=new Pe(s);return .2126*e+.7152*t+.0722*n>.35?"#111111":"#ffffff"},"textOn"),bl=u((s,e,t,n)=>(s.position.set(e,t,n),s),"place"),SI=u(s=>[s.count>1?String(s.count):"",s.status??"",s.veteran?"\u2605":""].filter(e=>e!=="").join(" "),"flagText"),wI=3,EI=4,mu=u((s,e,t,n,i=wI)=>{let r=new Ys(s);return r.scale.set(e,t,1),r.center.set(.5,-n/t),r.renderOrder=i,r.frustumCulled=!1,r},"badge"),DS=u((s,e,t)=>{let n=s.map?.image,i=n&&n.height>0&&n.width>0?n.width/n.height:1;return mu(s,e*i,e,t)},"label"),sp=[0,.36,0],TI=u((s,e)=>{let t=new Xt;return e.walled&&t.add(new dt(s.walls(),s.figureMaterial)),e.unnamed!==!0&&t.add(bl(DS(s.label(`${e.name}  ${e.size}${e.disorder?" !":""}`,e.colours[0],NS(e.colours[0])),IS,0),...sp)),t},"drawCity"),AI=u((s,e,t=null,n=!1,i=t===null)=>{let r=new Xt,{ring:o}=s.geometries,a=fu(e.type,e.kinds),l=n&&pu(a),c=e.model===void 0?null:s.modelFigures(e.model,a,e.colours,e.size),h=c===null?s.body(a,e.colours,e.fortified,e.size,l?"figures":"whole",i):null,p=l?new Xt:r,d=c?.top??h?.boundingBox?.max.y??.3,m=t?.at??[0,d+bI,0],g=e.health!==null,_=(t?.over??0)+(g?np+ip:0),x=_+AS+ip,b=SI(e),v=x+(b===""?0:RS+ip),w=c===null?new dt(h,s.figureMaterial):new Xt;if(c?.meshes.forEach(([M,A])=>w.add(new dt(M,A))),w.name=Ox,w.rotation.y=e.facing,p.add(w),l||c!==null){let M=s.body(a,e.colours,e.fortified,e.size,"base",i);M.getAttribute("position")!==void 0&&r.add(new dt(M,s.figureMaterial))}if(l&&(p.name=Fx,r.add(p)),e.health!==null){let M=Math.max(0,Math.min(1,e.health));if(p.add(bl(mu(s.plain("#202020"),Nx,np,t?.over??0),...m)),M>0){let A=mu(s.plain(M>.5?yI:M>.25?_I:vI),Nx*M,np*.6,(t?.over??0)+np*.2);A.center.x=1/(2*M),p.add(bl(A,...m))}}if(p.add(bl(mu(s.plain(e.colours[0]),Nx,AS,_),...m)),b!==""&&p.add(bl(DS(s.label(b,e.colours[0],NS(e.colours[0])),RS,x),...m)),e.active){let M=new dt(o,s.material(PS,!0));M.rotation.x=Math.PI/2,M.position.y=.01,r.add(M),p.add(bl(mu(s.pointer(),CS,CS,v,EI),...m))}return r},"drawUnit"),xu="unit",Ox="figures",Fx="aloft",Ko=.26,US=u((s,e,t=!1)=>{let n=new Xt;if(e.city!==null&&n.add(TI(s,e.city)),e.unit!==null){let i=e.inCity??e.city!==null?Ko:0,r=AI(s,e.unit,e.city===null?null:{at:[sp[0],sp[1],sp[2]-i],over:IS+ip},t,i===0);r.name=xu,r.position.z=i,n.add(r)}return n},"drawMarker"),gu=new WeakMap,op=new WeakMap,RI=.5,bu=u((s,e,t)=>{s.forEach(n=>n.traverse(i=>{if(!(i instanceof dt||i instanceof Ys))return;let r=gu.get(i)??i.material,o=t.get(r);o===void 0&&(o=r.clone(),i instanceof Ys?o.transparent=!0:o.alphaHash=!0,t.set(r,o)),gu.has(i)||(gu.set(i,r),op.set(i,i.castShadow)),i.material=o,i.castShadow=(op.get(i)??!1)&&e>=RI})),t.forEach((n,i)=>{n.opacity=i.opacity*e})},"fade"),OS=u((s,e)=>{s.forEach(t=>t.traverse(n=>{let i=gu.get(n);i===void 0||!(n instanceof dt||n instanceof Ys)||(n.material=i,n.castShadow=op.get(n)??n.castShadow,gu.delete(n),op.delete(n))})),_l(e)},"unfaded"),_l=u(s=>{s.forEach(e=>e.dispose()),s.clear()},"unfade");var FS=new $c,CI=u((s,e,t)=>{let n=[],i=new Map;for(let[o,a]of s)a.forEach(l=>l.getObjectByName(xu)?.traverseVisible(c=>{c instanceof dt&&(n.push(c),i.set(c,o))}));if(n.length===0)return null;FS.setFromCamera(new Ve(t[0],t[1]),e);let[r]=FS.intersectObjects(n,!1);return r===void 0?null:i.get(r.object)??null},"unitUnder"),BS=CI;var kr=u(s=>s*Math.PI/180,"degrees"),PI=kr(25),II=kr(80),LI=5,NI=90,DI=1.12,yu=kr(40),zx=kr(45),UI={above:{yaw:0,pitch:kr(80)},classic:{yaw:0,pitch:kr(55)},isometric:{yaw:kr(45),pitch:kr(30)}};var kS=u(s=>({focus:s,...UI.classic,distance:24}),"defaultOrbit"),kx=u((s,e,t)=>Math.min(t,Math.max(e,s)),"clamp"),zS=u(s=>{let e=Math.PI*2;return(s%e+e)%e},"normaliseYaw"),Zo=u(s=>({...s,yaw:zS(s.yaw),pitch:kx(s.pitch,PI,II),distance:kx(s.distance,LI,NI)}),"clampOrbit"),Ml=u((s,e)=>Zo({...s,distance:s.distance/DI**e}),"zoomed"),ap=u(({yaw:s,pitch:e})=>{let t=Math.sin(s),n=Math.cos(s),i=Math.sin(e),r=Math.cos(e);return{forward:[t*r,-i,-n*r],right:[n,0,t],up:[t*i,r,-n*i]}},"basis"),Sl=u((s,e)=>{let{forward:t}=ap(s),[n,i]=s.focus;return[n-t[0]*s.distance,e-t[1]*s.distance,i-t[2]*s.distance]},"eye"),wl=u((s,e,[t,n,i],r)=>{let{forward:o,right:a,up:l}=ap(s),c=Sl(s,e),h=[t-c[0],n-c[1],i-c[2]],p=u(g=>(h[0]??0)*g[0]+(h[1]??0)*g[1]+(h[2]??0)*g[2],"dot"),d=p(o),m=Math.tan(yu/2);return d<=1e-6?null:[p(a)/(d*m*r),p(l)/(d*m)]},"toScreen"),Gx=u((s,e,[t,n],i)=>{let{forward:r,right:o,up:a}=ap(s),l=Math.tan(yu/2);return{from:Sl(s,e),direction:[0,1,2].map(c=>(r[c]??0)+t*l*i*(o[c]??0)+n*l*(a[c]??0))}},"rayThrough"),vl=u((s,e,t,n,i=e)=>{let{from:r,direction:o}=Gx(s,e,t,n);if(o[1]>-1e-6)return null;let a=(i-r[1])/o[1];return a<=0?null:[r[0]+o[0]*a,r[2]+o[2]*a]},"groundAt"),GS=u((s,e,t,n,i)=>{let r=vl(s,e,t,i),o=vl(s,e,n,i);if(r!==null&&o!==null)return{...s,focus:[s.focus[0]+r[0]-o[0],s.focus[1]+r[1]-o[1]]};let a=(t[0]-n[0])*i,l=(t[1]-n[1])/Math.sin(s.pitch),c=s.distance*Math.tan(yu/2),{right:h}=ap(s),p=[Math.sin(s.yaw),-Math.cos(s.yaw)];return{...s,focus:[s.focus[0]+(a*h[0]+l*(p[0]??0))*c,s.focus[1]+(a*h[2]+l*(p[1]??0))*c]}},"panned"),VS=u((s,e,t)=>{let n=u((o,a)=>(o%a+a)%a,"wrap"),[i,r]=s.focus;return{...s,yaw:zS(s.yaw),focus:[n(i,e.u),e.v===null?kx(r,0,t):n(r,e.v)]}},"settled"),HS=u((s,e,t,n,i)=>{let r=u((l,c)=>c===null?l:l-c*Math.round(l/c),"short"),o=Math.PI*2,a=t*t*(3-2*t);return{focus:[s.focus[0]+r(e.focus[0]-s.focus[0],n.u)*a,s.focus[1]+r(e.focus[1]-s.focus[1],n.v)*a],yaw:s.yaw+(i??r(e.yaw-s.yaw,o))*a,pitch:s.pitch+(e.pitch-s.pitch)*a,distance:s.distance+(e.distance-s.distance)*a}},"between"),Jo=u(s=>({near:s*1.2,far:s*3.5}),"sightFor");var OI=new Pe("#3f8a8c"),FI=new Pe("#173a52"),BI=new Pe("#e8eeee"),WS=`
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
`,kI=`
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
`,zr,_i,ri,Hx=class Hx{constructor(e,t){G(this,zr);G(this,_i);G(this,ri);k(this,zr,e),k(this,_i,new Uint16Array(e.columns*e.rows*2));for(let i=0;i<f(this,_i).length;i+=2)f(this,_i)[i]=is.toHalfFloat(0),f(this,_i)[i+1]=is.toHalfFloat(1);k(this,ri,new Lr(f(this,_i),e.columns,e.rows,us,ni)),f(this,ri).wrapS=Gn,f(this,ri).wrapT=e.wrapsV?Gn:zn,f(this,ri).magFilter=zt,f(this,ri).minFilter=zt,f(this,ri).needsUpdate=!0;let n=new Ln({uniforms:Uo.merge([Ce.fog,{ground:{value:null},cell:{value:new Ve},size:{value:new Ve},shallow:{value:OI.clone()},deep:{value:FI.clone()},foam:{value:BI.clone()},sky:{value:t.clone()},sunDirection:{value:new H(.5,.7,.4).normalize()},sunColour:{value:new Pe("#fff0d8")},extentV:{value:0},wrapsV:{value:!1}}]),vertexShader:WS,fragmentShader:kI,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=f(this,ri),n.uniforms.cell.value.set(e.spacingU,e.spacingV),n.uniforms.size.value.set(e.columns,e.rows),n.uniforms.extentV.value=e.rows*e.spacingV,n.uniforms.wrapsV.value=e.wrapsV,this.mesh=new dt(new os(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=1}setChunk(e){let{columns:t,rows:n,spacingU:i,spacingV:r}=f(this,zr),o=Math.round(e.u/i),a=Math.round(e.v/r),l=e.positions.length/3;for(let c=0;c<l;c++){let h=o+Math.round((e.positions[c*3]??0)/i),p=a+Math.round((e.positions[c*3+2]??0)/r);if(h>=0&&h<t&&p>=0&&p<n){let d=(p*t+h)*2;f(this,_i)[d]=is.toHalfFloat(e.positions[c*3+1]??0),f(this,_i)[d+1]=is.toHalfFloat(e.unseen[c]??0)}}f(this,ri).needsUpdate=!0}height(e,t){return is.fromHalfFloat(f(this,_i)[(t*f(this,zr).columns+e)*2]??0)}unseen(e,t){return is.fromHalfFloat(f(this,_i)[(t*f(this,zr).columns+e)*2+1]??0)>.5}texture(){return f(this,ri)}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=f(this,zr).wrapsV&&e}follow(e,t,n,i){this.mesh.position.set(e,0,t),this.mesh.scale.set(n,n,1),this.mesh.material.uniforms.sunDirection.value.copy(i).normalize()}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),f(this,ri).dispose()}};zr=new WeakMap,_i=new WeakMap,ri=new WeakMap,u(Hx,"Water");var Vx=Hx,XS=Vx,zI=`
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
`,GI=.18,_u,Wx=class Wx{constructor(e,t){G(this,_u);k(this,_u,t.wrapsV);let n=new Ln({uniforms:Uo.merge([Ce.fog,{ground:{value:null},cell:{value:new Ve},size:{value:new Ve},extent:{value:new Ve},wrapsV:{value:!1}}]),vertexShader:WS,fragmentShader:zI,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=e,n.uniforms.cell.value.set(t.spacingU,t.spacingV),n.uniforms.size.value.set(t.columns,t.rows),n.uniforms.extent.value.set(t.columns*t.spacingU,t.rows*t.spacingV),n.uniforms.wrapsV.value=t.wrapsV,this.mesh=new dt(new os(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=2}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=f(this,_u)&&e}follow(e,t,n){this.mesh.position.set(e,GI,t),this.mesh.scale.set(n,n,1)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}};_u=new WeakMap,u(Wx,"Clouds");var lp=Wx;var VI=.6,HI=.05,jo=64,qS=.125,WI=`
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
`,XI=`
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
`,YS=u(s=>{let e=Math.max(1,Math.ceil(Math.sqrt(s)));return[e,Math.max(1,Math.ceil(s/e))]},"atlasCells"),qI=u((s,e)=>{let[t]=YS(s.length),n=jo*(1-2*qS);return s.flatMap((i,r)=>{let o=e(i);if(o===null||o[0]<=0||o[1]<=0)return[];let a=n/Math.max(o[0],o[1]),l=o[0]*a,c=o[1]*a;return[{_:i,x:r%t*jo+(jo-l)/2,y:Math.floor(r/t)*jo+(jo-c)/2,width:l,height:c}]})},"atlasPlaces"),YI=u(s=>{let{naturalWidth:e,naturalHeight:t,width:n,height:i}=s;return[e??(typeof n=="number"?n:0),t??(typeof i=="number"?i:0)]},"imageSize"),Gr,oi,vu,Qo,Mu,cp,El,$S,KS,qx=class qx{constructor(e){G(this,El);G(this,Gr,null);G(this,oi,null);G(this,vu,"");G(this,Qo);G(this,Mu,new WeakMap);G(this,cp,1);k(this,Qo,e),this.material=new Ln({uniforms:Uo.merge([Ce.fog,{atlas:{value:null},lean:{value:1},lift:{value:HI},bias:{value:VI},cells:{value:[1,1]},pad:{value:qS}}]),vertexShader:WI,fragmentShader:XI,fog:!0,toneMapped:!1})}lean(e){this.material.uniforms.lean.value=Math.sin(e)}set(e){if(f(this,Gr)?.dispose(),k(this,Gr,null),e===null||e.count===0)return null;R(this,El,KS).call(this,e);let t=new qc,n=new os(1,1);return t.index=n.index,t.setAttribute("position",n.getAttribute("position")),t.setAttribute("uv",n.getAttribute("uv")),t.setAttribute("anchor",new Hn(e.anchors,3)),t.setAttribute("slot",new Hn(e.slots,2)),t.setAttribute("size",new Hn(e.sizes,1)),t.setAttribute("cell",new Hn(e.cells,1)),t.instanceCount=e.count,k(this,Gr,t),t}make(){let e=new dt(f(this,Gr)??void 0,this.material);return e.frustumCulled=!1,e.castShadow=!1,e.receiveShadow=!1,e}dispose(){f(this,Gr)?.dispose(),f(this,oi)?.dispose(),this.material.dispose()}};Gr=new WeakMap,oi=new WeakMap,vu=new WeakMap,Qo=new WeakMap,Mu=new WeakMap,cp=new WeakMap,El=new WeakSet,$S=u(function(e){if(e===null)return 0;let t=f(this,Mu).get(e);return t===void 0&&(t=Di(this,cp)._++,f(this,Mu).set(e,t)),t},"#imageId"),KS=u(function(e){let t=e.names.map(a=>`${a}:${R(this,El,$S).call(this,f(this,Qo).call(this,a))}`).join(",");if(t===f(this,vu)&&f(this,oi)!==null)return;let[n,i]=YS(e.names.length),r=document.createElement("canvas"),o=r.getContext("2d");r.width=n*jo,r.height=i*jo,o!==null&&(o.imageSmoothingEnabled=!1,qI(e.names,a=>{let l=f(this,Qo).call(this,a);return l===null?null:YI(l)}).forEach(({_:a,x:l,y:c,width:h,height:p})=>{let d=f(this,Qo).call(this,a);d!==null&&o.drawImage(d,l,c,h,p)})),f(this,oi)?.dispose(),k(this,oi,new Dr(r)),f(this,oi).colorSpace=Lt,f(this,oi).premultiplyAlpha=!0,f(this,oi).magFilter=Ht,f(this,oi).minFilter=vn,f(this,oi).generateMipmaps=!0,k(this,vu,t),this.material.uniforms.atlas.value=f(this,oi),this.material.uniforms.cells.value=[n,i]},"#drawAtlas"),u(qx,"YieldIcons");var Xx=qx,ZS=Xx;function JS(s){let e=new Map,t=new Map,n=s.clone();return jS(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}u(JS,"clone");function jS(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)jS(s.children[n],e.children[n],t)}u(jS,"parallelTraverse");var Mb=class Mb extends ls{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Qx(t)}),this.register(function(t){return new eb(t)}),this.register(function(t){return new tb(t)}),this.register(function(t){return new ub(t)}),this.register(function(t){return new hb(t)}),this.register(function(t){return new db(t)}),this.register(function(t){return new ib(t)}),this.register(function(t){return new sb(t)}),this.register(function(t){return new rb(t)}),this.register(function(t){return new ob(t)}),this.register(function(t){return new jx(t)}),this.register(function(t){return new ab(t)}),this.register(function(t){return new nb(t)}),this.register(function(t){return new cb(t)}),this.register(function(t){return new lb(t)}),this.register(function(t){return new Zx(t)}),this.register(function(t){return new hp(t,ct.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new hp(t,ct.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new fb(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=tr.extractUrlBase(e);o=tr.resolveURL(c,this.path)}else o=tr.extractUrlBase(e);this.manager.itemStart(e);let a=u(function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},"_onError"),l=new il(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===iw){try{o[ct.KHR_BINARY_GLTF]=new pb(e)}catch(p){i&&i(p);return}r=JSON.parse(o[ct.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new vb(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let p=this.pluginCallbacks[h](c);p.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[p.name]=p,o[p.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let p=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(p){case ct.KHR_MATERIALS_UNLIT:o[p]=new Jx;break;case ct.KHR_DRACO_MESH_COMPRESSION:o[p]=new mb(r,this.dracoLoader);break;case ct.KHR_TEXTURE_TRANSFORM:o[p]=new gb;break;case ct.KHR_MESH_QUANTIZATION:o[p]=new xb;break;default:d.indexOf(p)>=0&&a[p]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+p+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};u(Mb,"GLTFLoader");var up=Mb;function $I(){let s={};return{get:u(function(e){return s[e]},"get"),add:u(function(e,t){s[e]=t},"add"),remove:u(function(e){delete s[e]},"remove"),removeAll:u(function(){s={}},"removeAll")}}u($I,"GLTFRegistry");function Wt(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}u(Wt,"getMaterialExtension");var ct={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Sb=class Sb{constructor(e){this.parser=e,this.name=ct.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Pe(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Pn);let p=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ro(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Xc(h),c.distance=p;break;case"spot":c=new Wc(h),c.distance=p,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),gs(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}};u(Sb,"GLTFLightsExtension");var Zx=Sb,wb=class wb{constructor(){this.name=ct.KHR_MATERIALS_UNLIT}getMaterialType(){return bi}extendParams(e,t,n){let i=[];e.color=new Pe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Pn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Lt))}return Promise.all(i)}};u(wb,"GLTFMaterialsUnlitExtension");var Jx=wb,Eb=class Eb{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}};u(Eb,"GLTFMaterialsEmissiveStrengthExtension");var jx=Eb,Tb=class Tb{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ve(r,r)}return Promise.all(i)}};u(Tb,"GLTFMaterialsClearcoatExtension");var Qx=Tb,Ab=class Ab{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}};u(Ab,"GLTFMaterialsDiffuseRoughnessExtension");var eb=Ab,Rb=class Rb{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}};u(Rb,"GLTFMaterialsDispersionExtension");var tb=Rb,Cb=class Cb{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}};u(Cb,"GLTFMaterialsIridescenceExtension");var nb=Cb,Pb=class Pb{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SHEEN}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Pe(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Pn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Lt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}};u(Pb,"GLTFMaterialsSheenExtension");var ib=Pb,Ib=class Ib{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}};u(Ib,"GLTFMaterialsTransmissionExtension");var sb=Ib,Lb=class Lb{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_VOLUME}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Pe().setRGB(r[0],r[1],r[2],Pn),Promise.all(i)}};u(Lb,"GLTFMaterialsVolumeExtension");var rb=Lb,Nb=class Nb{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IOR}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}};u(Nb,"GLTFMaterialsIorExtension");var ob=Nb,Db=class Db{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Pe().setRGB(r[0],r[1],r[2],Pn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Lt)),Promise.all(i)}};u(Db,"GLTFMaterialsSpecularExtension");var ab=Db,Ub=class Ub{constructor(e){this.parser=e,this.name=ct.EXT_MATERIALS_BUMP}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}};u(Ub,"GLTFMaterialsBumpExtension");var lb=Ub,Ob=class Ob{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}};u(Ob,"GLTFMaterialsAnisotropyExtension");var cb=Ob,Fb=class Fb{constructor(e){this.parser=e,this.name=ct.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}};u(Fb,"GLTFTextureBasisUExtension");var ub=Fb,Bb=class Bb{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}};u(Bb,"GLTFTextureWebPExtension");var hb=Bb,kb=class kb{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}};u(kb,"GLTFTextureAVIFExtension");var db=kb,zb=class zb{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,p=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,p,d,i.mode,i.filter).then(function(m){return m.buffer}):o.ready.then(function(){let m=new ArrayBuffer(h*p);return o.decodeGltfBuffer(new Uint8Array(m),h,p,d,i.mode,i.filter),m})})}else return null}};u(zb,"GLTFMeshoptCompression");var hp=zb,Gb=class Gb{constructor(e){this.name=ct.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==vi.TRIANGLES&&c.mode!==vi.TRIANGLE_STRIP&&c.mode!==vi.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),p=h.isGroup?h.children:[h],d=c[0].count,m=[];for(let g of p){let _=new Ke,x=new H,b=new an,v=new H(1,1,1),w=new Ic(g.geometry,g.material,d);for(let A=0;A<d;A++)l.TRANSLATION&&x.fromBufferAttribute(l.TRANSLATION,A),l.ROTATION&&b.fromBufferAttribute(l.ROTATION,A),l.SCALE&&v.fromBufferAttribute(l.SCALE,A),w.setMatrixAt(A,_.compose(x,b,v));let M=null;for(let A in l)if(A==="_COLOR_0"){let E=l[A];w.instanceColor=new Hn(E.array,E.itemSize,E.normalized)}else if(A!=="TRANSLATION"&&A!=="ROTATION"&&A!=="SCALE"){if(M===null){let y=w.geometry;M=new Tt,M.name=y.name;for(let S in y.attributes)M.setAttribute(S,y.attributes[S]);for(let S in y.morphAttributes)M.morphAttributes[S]=y.morphAttributes[S];y.index!==null&&M.setIndex(y.index),M.morphTargetsRelative=y.morphTargetsRelative;for(let S of y.groups)M.addGroup(S.start,S.count,S.materialIndex);y.boundingBox!==null&&(M.boundingBox=y.boundingBox.clone()),y.boundingSphere!==null&&(M.boundingSphere=y.boundingSphere.clone()),M.drawRange.start=y.drawRange.start,M.drawRange.count=y.drawRange.count,M.userData=Object.assign({},y.userData),w.geometry=M}let E=l[A];M.setAttribute(A,new Hn(E.array,E.itemSize,E.normalized))}Ot.prototype.copy.call(w,g),this.parser.assignFinalMaterial(w),m.push(w)}return h.isGroup?(h.clear(),h.add(...m),h):m[0]}))}};u(Gb,"GLTFMeshGpuInstancing");var fb=Gb,iw="glTF",Su=12,QS={JSON:1313821514,BIN:5130562},Vb=class Vb{constructor(e){this.name=ct.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Su),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==iw)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Su,r=new DataView(e,Su),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===QS.JSON){let c=new Uint8Array(e,Su+o,a);this.content=n.decode(c)}else if(l===QS.BIN){let c=Su+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}};u(Vb,"GLTFBinaryExtension");var pb=Vb,Hb=class Hb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ct.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let p=yb[h]||h.toLowerCase();a[p]=o[h]}for(let h in e.attributes){let p=yb[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],m=Tl[d.componentType];c[p]=m.name,l[p]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(p,d){i.decodeDracoFile(h,function(m){for(let g in m.attributes){let _=m.attributes[g],x=l[g];x!==void 0&&(_.normalized=x)}p(m)},a,c,Pn,d)})})}};u(Hb,"GLTFDracoMeshCompressionExtension");var mb=Hb,Wb=class Wb{constructor(){this.name=ct.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}};u(Wb,"GLTFTextureTransformExtension");var gb=Wb,Xb=class Xb{constructor(){this.name=ct.KHR_MESH_QUANTIZATION}};u(Xb,"GLTFMeshQuantizationExtension");var xb=Xb,qb=class qb extends as{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,p=(n-t)/h,d=p*p,m=d*p,g=e*c,_=g-c,x=-2*m+3*d,b=m-d,v=1-x,w=b-d+p;for(let M=0;M!==a;M++){let A=o[_+M+a],E=o[_+M+l]*h,y=o[g+M+a],S=o[g+M]*h;r[M]=v*A+w*E+x*y+b*S}return r}};u(qb,"GLTFCubicSplineInterpolant");var dp=qb,KI=new an,Yb=class Yb extends dp{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return KI.fromArray(r).normalize().toArray(r),r}};u(Yb,"GLTFCubicSplineQuaternionInterpolant");var bb=Yb,vi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Tl={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ew={9728:Ht,9729:zt,9984:$d,9985:cl,9986:Lo,9987:vn},tw={33071:zn,33648:qa,10497:Gn},Yx={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},yb={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Vr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ZI={CUBICSPLINE:void 0,LINEAR:vo,STEP:_o},$x={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function JI(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ln({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:yi})),s.DefaultMaterial}u(JI,"createDefaultMaterial");function ea(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}u(ea,"addUnknownExtensionsToUserData");function gs(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}u(gs,"assignExtrasToUserData");function jI(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let p=e[c];if(p.POSITION!==void 0&&(n=!0),p.NORMAL!==void 0&&(i=!0),p.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let p=e[c];if(n){let d=p.POSITION!==void 0?t.getDependency("accessor",p.POSITION):s.attributes.position;o.push(d)}if(i){let d=p.NORMAL!==void 0?t.getDependency("accessor",p.NORMAL):s.attributes.normal;a.push(d)}if(r){let d=p.COLOR_0!==void 0?t.getDependency("accessor",p.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],p=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=p),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}u(jI,"addMorphTargets");function QI(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}u(QI,"updateMorphTargets");function e3(s){let e,t=s.extensions&&s.extensions[ct.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Kx(t.attributes):e=s.indices+":"+Kx(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Kx(s.targets[n]);return e}u(e3,"createPrimitiveKey");function Kx(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}u(Kx,"createAttributesKey");function _b(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}u(_b,"getNormalizedComponentScale");function t3(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}u(t3,"getImageURIMimeType");var n3=new Ke,$b=class $b{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new $I,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?(this.textureLoader=new Gc(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Yc(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new il(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ea(r,a,i),gs(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=u((o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])},"updateMappings");return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ct.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(tr.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Yx[i.type],a=Tl[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new yt(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Yx[i.type],c=Tl[i.componentType],h=c.BYTES_PER_ELEMENT,p=h*l,d=i.byteOffset||0,m=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,_,x;if(m&&m!==p){let b=Math.floor(d/m),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+b+":"+i.count,w=t.cache.get(v);w||(_=new c(a,b*m,i.count*m/h),w=new wo(_,m/h),t.cache.add(v,w)),x=new Cr(w,l,d%m/h,g)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),x=new yt(_,l,g);if(i.sparse!==void 0){let b=Yx.SCALAR,v=Tl[i.sparse.indices.componentType],w=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,A=new v(o[1],w,i.sparse.count*b),E=new c(o[2],M,i.sparse.count*l);a!==null&&(x=new yt(x.array.slice(),x.itemSize,x.normalized)),x.normalized=!1;for(let y=0,S=A.length;y<S;y++){let I=A[y];if(x.setX(I,E[y*l]),l>=2&&x.setY(I,E[y*l+1]),l>=3&&x.setZ(I,E[y*l+2]),l>=4&&x.setW(I,E[y*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}x.normalized=g}return x})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=ew[d.magFilter]||zt,h.minFilter=ew[d.minFilter]||vn,h.wrapS=tw[d.wrapS]||Gn,h.wrapT=tw[d.wrapT]||Gn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ht&&h.minFilter!==zt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(d){return new Promise(function(m,g){t.parse(d,m,g)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;let m=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(m),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(d){return new Promise(function(m,g){let _=m;t.isImageBitmapLoader===!0&&(_=u(function(x){let b=new Jt(x);b.needsUpdate=!0,m(b)},"onLoad")),t.load(tr.resolveURL(d,r.path),_,void 0,g)})})}let p=h.then(function(d){return c===!0&&a.revokeObjectURL(l),gs(d,o),d.userData.mimeType=o.mimeType||t3(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=p,p}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ct.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ct.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[ct.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new tl,In.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new el,In.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ln}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[ct.KHR_MATERIALS_UNLIT]){let p=i[ct.KHR_MATERIALS_UNLIT];o=p.getMaterialType(),c.push(p.extendParams(a,r,t))}else{let p=r.pbrMetallicRoughness||{};if(a.color=new Pe(1,1,1),a.opacity=1,Array.isArray(p.baseColorFactor)){let d=p.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Pn),a.opacity=d[3]}p.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",p.baseColorTexture,Lt)),a.metalness=p.metallicFactor!==void 0?p.metallicFactor:1,a.roughness=p.roughnessFactor!==void 0?p.roughnessFactor:1,p.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",p.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",p.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=jt);let h=r.alphaMode||$x.OPAQUE;if(h===$x.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===$x.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==bi&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ve(1,1),r.normalTexture.scale!==void 0)){let p=r.normalTexture.scale;a.normalScale.set(p,p)}if(r.occlusionTexture!==void 0&&o!==bi&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==bi){let p=r.emissiveFactor;a.emissive=new Pe().setRGB(p[0],p[1],p[2],Pn)}return r.emissiveTexture!==void 0&&o!==bi&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Lt)),Promise.all(c).then(function(){let p=new o(a);return r.name&&(p.name=r.name),gs(p,r),t.associations.set(p,{materials:e}),r.extensions&&ea(i,p,r),p})}createUniqueName(e){let t=Ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ct.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return nw(l,a,t)})}u(r,"createDracoPrimitive");let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=e3(c),p=i[h];if(p)o.push(p.promise);else{let d;c.extensions&&c.extensions[ct.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=nw(new Tt,c,t),c.mode===vi.TRIANGLE_STRIP?d=d.then(m=>yx(m,iu)):c.mode===vi.TRIANGLE_FAN&&(d=d.then(m=>yx(m,hl))),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?JI(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],p=[];for(let m=0,g=h.length;m<g;m++){let _=h[m],x=o[m],b,v=c[m];if(x.mode===vi.TRIANGLES||x.mode===vi.TRIANGLE_STRIP||x.mode===vi.TRIANGLE_FAN||x.mode===void 0){let w=r.isSkinnedMesh===!0,M=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");w&&M===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),b=w&&M?new Cc(_,v):new dt(_,v),b.isSkinnedMesh===!0&&b.normalizeSkinWeights()}else if(x.mode===vi.LINES)b=new Lc(_,v);else if(x.mode===vi.LINE_STRIP)b=new Eo(_,v);else if(x.mode===vi.LINE_LOOP)b=new Nc(_,v);else if(x.mode===vi.POINTS)b=new Dc(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(b.geometry.morphAttributes).length>0&&QI(b,r),b.name=t.createUniqueName(r.name||"mesh_"+e),gs(b,r),x.extensions&&ea(i,b,x),t.assignFinalMaterial(b),p.push(b)}for(let m=0,g=p.length;m<g;m++)t.associations.set(p[m],{meshes:e,primitives:m});if(p.length===1)return r.extensions&&ea(i,p[0],r),p[0];let d=new Xt;r.extensions&&ea(i,d,r),t.associations.set(d,{meshes:e});for(let m=0,g=p.length;m<g;m++)d.add(p[m]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Zt(Uf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ao(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),gs(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let p=o[c];if(p){a.push(p);let d=new Ke;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Pc(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let p=0,d=i.channels.length;p<d;p++){let m=i.channels[p],g=i.samplers[m.sampler],_=m.target,x=_.node,b=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",x)),a.push(this.getDependency("accessor",b)),l.push(this.getDependency("accessor",v)),c.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(p){let d=p[0],m=p[1],g=p[2],_=p[3],x=p[4],b=[];for(let w=0,M=d.length;w<M;w++){let A=d[w],E=m[w],y=g[w],S=_[w],I=x[w];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();let P=n._createAnimationTracks(A,E,y,S,I);if(P)for(let D=0;D<P.length;D++)b.push(P[D])}let v=new zc(r,void 0,b);return gs(v,i),v})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],p=c[1],d=c[2];d!==null&&h.traverse(function(m){m.isSkinnedMesh&&m.bind(d,n3)});for(let m=0,g=p.length;m<g;m++)h.add(p[m]);if(h.userData.pivot!==void 0&&p.length>0){let m=h.userData.pivot,g=p[0];h.pivot=new H().fromArray(m),h.position.x-=m[0],h.position.y-=m[1],h.position.z-=m[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Qa:c.length>1?h=new Xt:c.length===1?h=c[0]:h=new Ot,h!==c[0])for(let p=0,d=c.length;p<d;p++)h.add(c[p]);if(r.name&&(h.userData.name=r.name,h.name=o),gs(h,r),r.extensions&&ea(n,h,r),r.matrix!==void 0){let p=new Ke;p.fromArray(r.matrix),h.applyMatrix4(p)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let p=i.associations.get(h);i.associations.set(h,{...p})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Xt;n.name&&(r.name=i.createUniqueName(n.name)),gs(r,n),n.extensions&&ea(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,p=l.length;h<p;h++){let d=l[h];d.parent!==null?r.add(JS(d)):r.add(d)}let c=u(h=>{let p=new Map;for(let[d,m]of i.associations)(d instanceof In||d instanceof Jt)&&p.set(d,m);return h.traverse(d=>{let m=i.associations.get(d);m!=null&&p.set(d,m)}),p},"reduceAssociations");return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(m){m.morphTargetInfluences&&l.push(m.name?m.name:m.uuid)}u(c,"collectMorphTargets"),Vr[r.path]===Vr.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let h;switch(Vr[r.path]){case Vr.weights:h=js;break;case Vr.rotation:h=Qs;break;case Vr.translation:case Vr.scale:h=Or;break;default:n.itemSize===1?h=js:h=Or;break}let p=i.interpolation!==void 0?ZI[i.interpolation]:vo,d=this._getArrayFromAccessor(n);for(let m=0,g=l.length;m<g;m++){let _=new h(l[m]+"."+Vr[r.path],t.array,d,p);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=_b(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=u(function(n){let i=this instanceof Qs?bb:dp;return new i(this.times,this.values,this.getValueSize()/3,n)},"InterpolantFactoryMethodGLTFCubicSpline"),e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};u($b,"GLTFParser");var vb=$b;function i3(s,e,t){let n=e.attributes,i=new ei;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new H(l[0],l[1],l[2]),new H(c[0],c[1],c[2])),a.normalized){let h=_b(Tl[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new H,l=new H;for(let c=0,h=r.length;c<h;c++){let p=r[c];if(p.POSITION!==void 0){let d=t.json.accessors[p.POSITION],m=d.min,g=d.max;if(m!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),d.normalized){let _=_b(Tl[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new Vn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}u(i3,"computeBounds");function nw(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}u(r,"assignAttributeAccessor");for(let o in n){let a=yb[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return lt.workingColorSpace!==Pn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${lt.workingColorSpace}" not supported.`),gs(s,e),i3(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?jI(s,e.targets,t):s})}u(nw,"addPrimitiveAttributes");var ta=u(s=>typeof s=="object"&&s!==null&&!Array.isArray(s),"isObject"),xs=u(s=>typeof s=="string"&&s!=="","isText"),sw=u(s=>typeof s=="number"&&Number.isFinite(s)&&s>0,"isScale"),rw=u(s=>ta(s)&&xs(s.name)&&xs(s.url)&&(s.attribution===void 0||xs(s.attribution)),"isLicence"),s3=u(s=>xs(s)&&s.endsWith(".glb")&&!s.startsWith("/")&&!/[\\%?#\u0000-\u0020]/.test(s)&&!/^[a-z][a-z0-9+.-]*:/i.test(s)&&s.split("/").every(e=>e!==""&&e!=="."&&e!==".."),"isFile"),ow=u(s=>{if(!ta(s))return"not an object";if(s.schema!==1||s.kind!=="models")return"not a set of models (schema 1)";if(!xs(s.id)||!xs(s.name))return"no id or name";if(!rw(s.licence))return"no licence";if(!Array.isArray(s.credits)||s.credits.length===0||!s.credits.every(r=>ta(r)&&xs(r.work)&&xs(r.author)&&xs(r.url)&&rw(r.licence)))return"no credits";if(!sw(s.scale))return"no scale";let e=s.models;if(!ta(e))return"no models";let t=Object.entries(e).find(([,r])=>!ta(r)||!s3(r.file)||r.scale!==void 0&&!sw(r.scale));if(t!==void 0)return`model ${t[0]}: no glTF binary beside the manifest, or no scale`;let n=s.names;if(!ta(n)||!ta(n.unit))return"no unit names";let i=Object.entries(n.unit).find(([,r])=>!xs(r)||!Object.prototype.hasOwnProperty.call(e,r));return i!==void 0?`unit ${i[0]}: drawn by a model the set hasn't`:s},"readModelManifest"),aw=u(s=>{let e=new Map;return Object.entries(s.names.unit).forEach(([t,n])=>e.set(n,[...e.get(n)??[],t])),e},"unitTypesOf"),lw=u((s,e)=>s.models[e]?.scale??s.scale,"scaleOf");var r3=u(s=>{let e=[];return s.updateMatrixWorld(!0),s.traverse(t=>{let n=t;if(!n.isMesh)return;(Array.isArray(n.material)?n.material:[n.material]).slice(0,1).forEach(r=>{let o=r,a=n.geometry.clone();a.applyMatrix4(n.matrixWorld),a.computeBoundingBox(),e.push({geometry:a,map:o.map??null,tinted:o.userData?.playerColour===!0,cutout:o.alphaTest>0,doubleSided:o.side===jt})})}),e},"partsOf"),o3=u(s=>{if(s.byteLength<20)return!1;let e=new DataView(s),t=e.getUint32(12,!0);if(e.getUint32(0,!0)!==1179937895||e.getUint32(4,!0)!==2||e.getUint32(8,!0)!==s.byteLength||e.getUint32(16,!0)!==1313821514||20+t>s.byteLength)return!1;let n=[];for(let i=12;i<s.byteLength;){if(i+8>s.byteLength)return!1;let r=e.getUint32(i,!0);if(n.push(e.getUint32(i+4,!0)),i+=8+r,i>s.byteLength)return!1}if(n.length>2||n.length===2&&n[1]!==5130562)return!1;try{let i=JSON.parse(new TextDecoder().decode(new Uint8Array(s,20,t))),r=u(a=>Array.isArray(a)?a.some(r):typeof a=="object"&&a!==null&&(Object.prototype.hasOwnProperty.call(a,"uri")||Object.values(a).some(r)),"reads"),o=u(a=>a===void 0||Array.isArray(a),"listed");return typeof i=="object"&&i!==null&&!Array.isArray(i)&&o(i.buffers)&&o(i.images)&&i.extensionsUsed===void 0&&i.extensionsRequired===void 0&&!r(i)}catch{return!1}},"selfContained"),a3=u(s=>{let e=new nl,t=`blob:${s}/`;return e.setURLModifier(n=>{if(!n.startsWith(t)&&!/^data:/i.test(n))throw new Error(`${n}: a model reads nothing from elsewhere`);return n}),e},"modelManager"),cw=u((s,e)=>{try{let t=new URL(s,e);return t.origin===new URL(e).origin?t.href:null}catch{return null}},"onSite"),uw=u(async(s,e,t)=>{let n=cw(s,location.href);if(n===null)throw new Error(`${s}: not on this site`);let i=await fetch(n,{redirect:"error",credentials:"omit"});if(!i.ok)throw new Error(`${s}: ${i.status}`);let r=ow(await i.json());if(typeof r=="string")throw new Error(`${s}: ${r}`);let o=new up(a3(location.origin)),a=aw(r),l=new URL(".",n).href;return await Promise.all([...a.keys()].map(async c=>{try{let h=cw(r.models[c].file,n);if(h===null||!h.startsWith(l))throw new Error(`${r.models[c].file}: not beside the manifest`);let p=await fetch(h,{redirect:"error",credentials:"omit"});if(!p.ok)throw new Error(`${h}: ${p.status}`);let d=await p.arrayBuffer();if(!o3(d))throw new Error(`${h}: not a glTF binary whole in itself`);let m=await o.parseAsync(d,"");e(c,{parts:r3(m.scene),scale:lw(r,c)},a.get(c)??[])}catch(h){t(c,h)}})),r},"loadModels");var Kb=10466244,l3=14082796,c3=5984576,u3=16773336,fp=u((s,e,t)=>{let n=u((i,r)=>{if(r===null)return[0];let o=[];for(let a=Math.floor((i-e)/r);a*r<=i+e;a++)o.push(a*r);return o},"along");return n(s[0],t.u).flatMap(i=>n(s[1],t.v).map(r=>[i,r]))},"copiesNear"),Zb=u(s=>Math.min(Jo(s.distance).far,s.distance*2.2),"markerSight"),h3=u(s=>[new kn(new H(0,0,1),0),new kn(new H(0,0,-1),s)],"polesAt"),d3=u((s,[e,t],n,i,r)=>s.flatMap(([o,a])=>[[o,a],...r&&i!==null&&t>n?[[o,a-i]]:[],...r&&i!==null&&e<0?[[o,a+i]]:[]]),"overlayCopies"),hw=2048,dw=Math.hypot(30,40,20),fw=u((s,{period:e,ground:t,yieldIcon:n})=>{let i=new kf({antialias:!0,canvas:s}),r=new Tc,o=new Zt(yu*180/Math.PI,1,.1,400),a=new Xt,{material:l,detail:c}=tS(e,t.rows*t.spacingV),h=new Ro(u3,2.6),p=new Map,d=new Map,m=new ln({vertexColors:!0,roughness:.9,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,clipShadows:!0}),g=t.rows*t.spacingV,_=h3(g),x=new Map,b=new Map,v=new Map,w=new Bc(1,1),M=u(re=>new ln({color:new Pe(re),roughness:1,metalness:0,flatShading:!0}),"puffGrey"),A=[M("#d8d5cf"),M("#a9a59d")],E=new Map,y=new bi({color:new Pe("#dfe8e8"),side:jt}),S=new Xt,I=new rp,P=new Xt,D=new ZS(n??(()=>null)),U=new XS(t,new Pe(Kb)),X=new lp(U.texture(),t),O=new Ec(Kb,30,110),Y=[[0,0]],te="0,0",B=[[0,0]],Z="0,0",W=!1,$=null,Q=!1;i.outputColorSpace=Lt,i.localClippingEnabled=!0,i.toneMapping=Zc,i.shadowMap.enabled=!0,i.shadowMap.type=Xd,r.background=new Pe(Kb),r.fog=O,r.add(new Vc(l3,c3,.9)),r.add(a),r.add(S),r.add(P),r.add(U.mesh),r.add(X.mesh),h.position.set(30,40,20),h.castShadow=!0,h.shadow.mapSize.set(hw,hw),h.shadow.bias=-4e-4,h.shadow.normalBias=.02,r.add(h),r.add(h.target);let ue=u((re,ie,he=Y)=>he.map(([ge,xe])=>{let Ne=re.make();return Ne.position.set(re.at[0]+ge,re.at[1],re.at[2]+xe),ie.add(Ne),Ne.updateMatrixWorld(!0),Ne}),"copiesOf"),ye=u(re=>ue(re,a,d3(Y,re.span,g,e.v,W)),"overlayCopiesOf"),j=u(re=>re.flatMap(ie=>{let he=ie.getObjectByName(xu);return he===void 0?[]:[he]}),"unitParts"),me=u(re=>re.drawn.forEach(ie=>{let he=ie.getObjectByName(Ox),ge=ie.getObjectByName(Fx);he!==void 0&&(he.rotation.y=re.facing),ge!==void 0&&(ge.position.y=re.aloft)}),"pose"),le=u(re=>{let ie=bx(re.through,re.seed);re.drawn.forEach(he=>he.children.forEach((ge,xe)=>{let Ne=ie[xe];if(Ne===void 0){ge.visible=!1;return}ge.position.set(...Ne.at),ge.scale.setScalar(Math.max(Ne.size,1e-4)),ge.visible=Ne.size>0}))},"shapePuff"),fe=u((re,ie=!1)=>{let he=US(I,re,ie);return he.traverse(ge=>{ge.castShadow=ge instanceof dt}),he},"markerOf"),de=u(()=>{I.sweepDue&&I.sweep([...x.values(),...b.values()].flatMap(({original:re})=>re===void 0?[]:[re]))},"sweep");return{render:u(()=>i.render(r,o),"render"),resize:u((re,ie,he)=>{i.setPixelRatio(he),i.setSize(re,ie,!1),o.aspect=ie>0?re/ie:1,o.updateProjectionMatrix()},"resize"),setChunk:u((re,ie,he)=>{let ge=`${re},${ie}`,xe=new Tt;xe.setAttribute("position",new yt(he.positions,3)),xe.setAttribute("normal",new yt(he.normals,3)),xe.setAttribute("color",new yt(he.colours,3)),xe.setAttribute("surfacesA",new yt(he.surfacesA,4,!0)),xe.setAttribute("surfacesB",new yt(he.surfacesB,4,!0)),xe.setAttribute("shore",new yt(he.shore,1,!0)),xe.setIndex(new yt(he.indices,1)),xe.computeBoundingSphere();let Ne=p.get(ge);Ne!==void 0&&(Ne.drawn.forEach(it=>a.remove(it)),Ne.geometry.dispose());let $e={geometry:xe,at:[he.u,0,he.v],make:u(()=>{let it=new dt(xe,l);return it.castShadow=!0,it.receiveShadow=!0,it},"make"),drawn:[]};$e.drawn=ue($e,a),p.set(ge,$e),U.setChunk(he)},"setChunk"),setOverlay:u((re,ie,he)=>{let ge=`${re},${ie}`,xe=d.get(ge);if(xe!==void 0&&(xe.drawn.forEach(Qe=>a.remove(Qe)),xe.geometry.dispose(),d.delete(ge)),he===null)return;let Ne=new Tt;Ne.setAttribute("position",new yt(he.positions,3)),Ne.setAttribute("normal",new yt(he.normals,3)),Ne.setAttribute("color",new yt(he.colours,3)),Ne.computeBoundingSphere(),Ne.computeBoundingBox();let $e=Ne.boundingBox,it={geometry:Ne,span:[he.v+($e?.min.z??0),he.v+($e?.max.z??0)],at:[he.u,0,he.v],make:u(()=>{let Qe=new dt(Ne,m);return Qe.castShadow=!0,Qe.receiveShadow=!0,Qe},"make"),drawn:[]};it.drawn=ye(it),d.set(ge,it)},"setOverlay"),unitAt:u(re=>(o.updateMatrixWorld(),BS([...x].map(([ie,{drawn:he}])=>[ie,he]),o,re)),"unitAt"),setMarker:u((re,ie,he)=>{let ge=x.get(re);if(ge?.drawn.forEach($e=>S.remove($e)),ge?.faded!==void 0&&_l(ge.faded),x.delete(re),he===null)return;let xe=fe(he),Ne={at:ie,make:u(()=>xe.clone(),"make"),drawn:[],original:xe};Ne.drawn=ue(Ne,S,B),x.set(re,Ne),de()},"setMarker"),setWalker:u((re,ie)=>{let he=b.get(re);if(he?.drawn.forEach(Ne=>S.remove(Ne)),he!==void 0&&_l(he.faded),b.delete(re),ie===null)return;let ge=fe(ie,!0),xe={at:he?.at??[0,0,0],facing:he?.facing??ie.unit?.facing??0,aloft:he?.aloft??0,opacity:1,faded:new Map,make:u(()=>ge.clone(),"make"),drawn:[],original:ge};xe.drawn=ue(xe,S,B),me(xe),b.set(re,xe),de()},"setWalker"),placeWalker:u((re,ie,he,ge=0)=>{let xe=b.get(re);xe!==void 0&&(xe.at=ie,xe.facing=he,xe.aloft=ge,xe.drawn.forEach((Ne,$e)=>{let[it,Qe]=B[$e]??[0,0];Ne.position.set(ie[0]+it,ie[1],ie[2]+Qe)}),me(xe))},"placeWalker"),fadeMarker:u((re,ie)=>{let he=x.get(re),ge=Math.min(1,Math.max(0,ie));if(!(he===void 0||ge===(he.opacity??1))){if(he.opacity=ge,he.faded??=new Map,ge===1){OS(j(he.drawn),he.faded);return}bu(j(he.drawn),ge,he.faded)}},"fadeMarker"),wake:u((re,ie,he=[])=>{let ge=E.get(re);if(ie===null){ge?.drawn.forEach($e=>S.remove($e)),ge?.shape.dispose(),E.delete(re);return}let xe=new Tt;xe.setAttribute("position",new yt(Float32Array.from(he),3));let Ne=ge??{at:ie,shape:xe,make:u(()=>new dt(Ne.shape,y),"make"),drawn:[]};ge===void 0?(Ne.drawn=ue(Ne,S,B),E.set(re,Ne)):(ge.shape.dispose(),ge.shape=xe,ge.drawn.forEach($e=>{$e.geometry=xe})),Ne.at=ie,Ne.drawn.forEach(($e,it)=>{let[Qe,Mt]=B[it]??[0,0];$e.position.set(ie[0]+Qe,ie[1],ie[2]+Mt)})},"wake"),puff:u((re,ie,he=0)=>{let ge=v.get(re);if(ie===null){ge?.drawn.forEach($e=>S.remove($e)),v.delete(re);return}let xe=Number(re.replace(/\D/g,""))||0,Ne=ge??{at:ie,through:he,seed:xe,make:u(()=>{let $e=new Xt;return bx(0,xe).forEach(({shade:it})=>$e.add(new dt(w,A[it]))),$e},"make"),drawn:[]};ge===void 0&&(Ne.drawn=ue(Ne,S,B),v.set(re,Ne)),Ne.at=ie,Ne.through=he,Ne.drawn.forEach(($e,it)=>{let[Qe,Mt]=B[it]??[0,0];$e.position.set(ie[0]+Qe,ie[1],ie[2]+Mt)}),le(Ne)},"puff"),fadeWalker:u((re,ie)=>{let he=b.get(re),ge=Math.min(1,Math.max(0,ie));he===void 0||ge===he.opacity||(he.opacity=ge,bu(he.drawn,ge,he.faded))},"fadeWalker"),setYields:u(re=>{$?.drawn.forEach(ie=>P.remove(ie)),$=null,D.set(re)!==null&&($={at:[0,0,0],make:u(()=>D.make(),"make"),drawn:[]},$.drawn=ue($,P))},"setYields"),view:u((re,ie,he=e)=>{let[ge,xe]=re.focus,[Ne,$e,it]=Sl(re,ie),{near:Qe,far:Mt}=Jo(re.distance);o.position.set(Ne,$e,it),o.lookAt(ge,ie,xe),o.far=Mt*1.2,o.near=Math.max(.1,re.distance*.02),o.updateProjectionMatrix(),O.near=Qe,O.far=Mt;let ft=re.distance*2.2,bt=h.shadow.camera;h.position.set(ge+30,ie+40,xe+20),h.target.position.set(ge,ie,xe),bt.left=-ft,bt.right=ft,bt.top=ft,bt.bottom=-ft,bt.near=Math.max(.5,dw-ft*1.6),bt.far=dw+ft*1.6,bt.updateProjectionMatrix(),U.follow(ge,xe,Mt*2.2,h.position.clone().sub(h.target.position)),X.follow(ge,xe,Mt*2.2),U.pastThePoles(he.v!==null),X.pastThePoles(he.v!==null),m.clippingPlanes=he.v===null?_:null,W=he.v===null;let kt=fp(re.focus,Mt,he),ut=`${kt.join(";")}${W?" stopped":""}`,V=fp(re.focus,Zb(re),he),Ut=V.join(";");ut!==te&&(Y=kt,te=ut,p.forEach(ze=>{ze.drawn.forEach(et=>a.remove(et)),ze.drawn=ue(ze,a)}),d.forEach(ze=>{ze.drawn.forEach(et=>a.remove(et)),ze.drawn=ye(ze)}),$!==null&&($.drawn.forEach(ze=>P.remove(ze)),$.drawn=ue($,P))),D.lean(re.pitch),Ut!==Z&&(B=V,Z=Ut,[...x.values(),...b.values(),...v.values(),...E.values()].forEach(ze=>{ze.drawn.forEach(et=>S.remove(et)),ze.drawn=ue(ze,S,B)}),b.forEach(me),v.forEach(le),b.forEach(ze=>{ze.opacity<1&&bu(ze.drawn,ze.opacity,ze.faded)}),x.forEach(ze=>{ze.faded!==void 0&&(ze.opacity??1)<1&&bu(j(ze.drawn),ze.opacity??1,ze.faded)}))},"view"),loadModels:u(async(re,ie)=>{await uw(re,(he,ge,xe)=>{if(Q){ge.parts.forEach(({geometry:Ne,map:$e})=>{Ne.dispose(),$e?.dispose()});return}I.addModel(he,ge),ie(he,xe)},(he,ge)=>console.warn(`The 3D map's model ${he}:`,ge))},"loadModels"),stats:u(()=>({drawCalls:i.info.render.calls,triangles:i.info.render.triangles,geometries:i.info.memory.geometries}),"stats"),dispose:u(()=>{Q=!0,p.forEach(({geometry:re})=>re.dispose()),p.clear(),d.forEach(({geometry:re})=>re.dispose()),d.clear(),m.dispose(),x.forEach(({faded:re})=>re!==void 0&&_l(re)),x.clear(),b.forEach(({faded:re})=>_l(re)),b.clear(),v.clear(),E.forEach(({shape:re})=>re.dispose()),E.clear(),y.dispose(),w.dispose(),A.forEach(re=>re.dispose()),I.dispose(),D.dispose(),U.dispose(),X.dispose(),l.dispose(),c.dispose(),i.dispose()},"dispose")}},"createStage");var sr=1/Math.sqrt(3),pw=1.5*sr,f3=u((s,e)=>{let t=-s-e,n=Math.round(s),i=Math.round(e),r=Math.round(t),o=Math.abs(n-s),a=Math.abs(i-e),l=Math.abs(r-t);return o>a&&o>l?n=-i-r:a>l&&(i=-n-r),[n,i]},"roundAxial"),p3=u(({height:s,width:e,wrapsY:t})=>{let n=u((i,r)=>[i+.5+(r&1)*.5,sr+r*pw],"centre");return{topologyId:"hex-odd-r",centre:n,outline:u((i,r)=>{let[o,a]=n(i,r);return[[o,a-sr],[o+.5,a-sr/2],[o+.5,a+sr/2],[o,a+sr],[o-.5,a+sr/2],[o-.5,a-sr/2]]},"outline"),tileAt:u((i,r)=>{let o=i-.5,a=r-sr,[l,c]=f3(o-a*Math.sqrt(3)/3,a*2*Math.sqrt(3)/3);return[l+(c-(c&1))/2,c]},"tileAt"),period:u(()=>({u:e,v:t?s*pw:null}),"period")}},"hexOddRLayout"),mw=p3;var m3=u(({height:s,width:e,wrapsY:t})=>({topologyId:"square",centre:u((n,i)=>[n+.5,i+.5],"centre"),outline:u((n,i)=>[[n,i],[n+1,i],[n+1,i+1],[n,i+1]],"outline"),tileAt:u((n,i)=>[Math.floor(n),Math.floor(i)],"tileAt"),period:u(()=>({u:e,v:t?s:null}),"period")}),"squareLayout"),gw=m3;var bs=Math.SQRT2/2,g3=u(({height:s,width:e,wrapsY:t})=>{let n=u((i,r)=>[(2*i+(r&1)+1)*bs,(r+1)*bs],"centre");return{topologyId:"staggered-iso",centre:n,outline:u((i,r)=>{let[o,a]=n(i,r);return[[o,a-bs],[o+bs,a],[o,a+bs],[o-bs,a]]},"outline"),tileAt:u((i,r)=>{let o=i/bs,a=r/bs,l=Math.floor((o+a)/2-1+.5),c=Math.floor((a-o)/2+.5),h=l+c;return[Math.floor((l-c)/2),h]},"tileAt"),period:u(()=>({u:e*2*bs,v:t?s*bs:null}),"period")}},"staggeredIsoLayout"),xw=g3;var bw={square:gw,"staggered-iso":xw,"hex-odd-r":mw},x3=u(s=>{if(!Object.prototype.hasOwnProperty.call(bw,s.topologyId))throw new Error(`No ground layout for the ${s.topologyId} grid.`);if(s.wrapsY&&s.topologyId!=="square"&&s.height%2!==0)throw new Error(`The ${s.topologyId} grid can't wrap over the poles with an odd number of rows (${s.height}).`);return bw[s.topologyId](s)},"groundLayoutFor"),yw=x3;var wu=u(s=>{let e=s/1.2;if(e>=1)return 0;let t=1-e;return t*t*t*t*(4*e+1)},"weight");var pp=.65,Jb=u(s=>{let e=u(t=>{let n=parseInt(s.slice(t,t+2),16)/255;return n<=.04045?n/12.92:((n+.055)/1.055)**2.4},"channel");return[e(1),e(3),e(5)]},"linear"),rr=.22,mp=.12,jb={low:.2,high:.5},_w=u((s,e,t,n,i,r,o,a,l)=>{let c=r-t,h=o-n,p=c*c+h*h,d=p===0?0:Math.max(0,Math.min(1,((s-t)*c+(e-n)*h)/p)),m=wu(Math.hypot(s-t-c*d,e-n-h*d)),g=1-d;return m===0?-1/0:m*m*(i+(a-i)*(1-g*g*g)+l)},"halfRidge"),Eu=u((s,e,t,n)=>{let i=Math.imul(s,374761393)+Math.imul(e,668265263)+Math.imul(t,2246822519)+Math.imul(n,3266489917)|0;return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967296},"chance"),b3=u((s,e,t)=>({u:(Eu(s,e,t,1)*2-1)*rr,v:(Eu(s,e,t,2)*2-1)*rr,scale:.75+Eu(s,e,t,3)*.5}),"peakOf"),y3=u(({layout:s,ranges:e=!0,seed:t=1,source:n})=>{let{width:i,height:r,wrapsY:o}=n,a=s.period(),l=ii([ms({cell:.7,period:a,seed:t}),ms({cell:.35,period:a,seed:t+1}),ms({cell:.17,period:a,seed:t+2})]),c=ii([ms({cell:.45,period:a,seed:t+3}),ms({cell:.22,period:a,seed:t+4})]),h=u((B,Z)=>1-2*Math.abs(c(B,Z)),"ridged"),p=ms({cell:.8,period:a,seed:t+5}),d=ms({cell:.8,period:a,seed:t+6}),m={flat:null,rolling:"rolling",ridged:"ridged",peaked:"ridged"},g=[],_=[],x=[],b=[],v=[],w=u((B,Z)=>{let W=(B%i+i)%i;return!o&&(Z<0||Z>=r)?null:(Z%r+r)%r*i+W},"index"),M=u(B=>{let Z=new Array(i*r).fill(1/0),W=[];B.forEach(($,Q)=>{$&&(Z[Q]=0,W.push([Q%i,Math.floor(Q/i)]))});for(let[$,Q]of W){let ue=Z[Q*i+$]??1/0;ue>=ps.reach||n.neighbours($,Q).forEach(([ye,j])=>{let me=j*i+ye;(Z[me]??1/0)>ue+1&&(Z[me]=ue+1,W.push([ye,j]))})}return Z},"distancesFromLand"),A=u((B,Z)=>{let W=n.terrainAt(B,Z);return`${W}${W!=="Unknown"&&n.waterAt(B,Z)?" water":""}`},"readAs"),E=u(B=>{if(B!==void 0&&_.length>0&&B.every(([le,fe])=>{let de=w(le,fe);return de===null||_[de]===A(le,fe)}))return[];let Z=[],W=[],$=[];for(let le=0;le<r;le++)for(let fe=0;fe<i;fe++){let de=n.terrainAt(fe,le);Z.push(de),W.push(de!=="Unknown"&&n.waterAt(fe,le)),$.push(Oo(de))}let Q=M(Z.map((le,fe)=>le!=="Unknown"&&!W[fe])),ue=Z.map((le,fe)=>`${le}${W[fe]?" water":""}`),ye=[];ue.forEach((le,fe)=>{_[fe]!==le&&ye.push([fe%i,Math.floor(fe/i)])}),_=ue,g=$.map((le,fe)=>{let de=le===Wf,Oe=fe%i,re=Math.floor(fe/i),ie=b3(Oe,re,t);if(!W[fe])return{relief:le.relief,colour:Jb(le.colour),surface:qn.indexOf(le.surface),water:!1,unknown:de,peak:ie};let he=Math.min(Q[fe]??1/0,ps.reach),ge=ps.shore+(ps.deep-ps.shore)*Math.max(0,he-1)/Math.max(1,ps.reach-1);return{relief:{...le.relief,base:ge},colour:Jb(le.colour),surface:qn.indexOf("sand"),water:!0,unknown:de,peak:ie}});let j=v,me=new Map(ye.map(([le,fe])=>[`${le},${fe}`,[le,fe]]));return v=g.map(({relief:le,unknown:fe},de)=>!fe&&!W[de]&&le.shape==="peaked"),ye.some(([le,fe])=>{let de=fe*i+le;return v[de]===!0||j[de]===!0})&&([x,b]=X()),ye.forEach(([le,fe])=>{let de=fe*i+le;v[de]!==!0&&j[de]!==!0||n.neighbours(le,fe).forEach(([Oe,re])=>{let ie=w(Oe,re);ie!==null&&v[ie]===!0&&me.set(`${Oe},${re}`,[Oe,re])})}),[...me.values()]},"refresh"),y=u(B=>{let[Z,W]=s.centre(0,B);return Math.max(...s.outline(0,B).map(([$,Q])=>Math.hypot($-Z,Q-W)))},"cornerOf"),S=u((B,Z)=>{let[W,$]=s.centre(0,B),Q=[];for(let ue=-8;ue<=8;ue++)for(let ye=-6;ye<=6;ye++){let[j,me]=s.centre(ye,B+ue);Math.hypot(j-W,me-$)<Z+1e-9&&Q.push([ye,ue])}return Q},"offsetsWithin"),I=u((B,Z,W,$)=>{if(i>=6&&(!o||r>=6)){let le=u((Oe,re)=>{let ie=(Oe%re+re)%re;return ie*2<re?ie:ie-re},"nearest"),fe=le(W-B,i),de=o?le($-Z,r):$-Z;return fe===0&&de===0?[]:[[fe,de]]}let Q=u((le,fe)=>{let de=(le%fe+fe)%fe;return de===0?[0]:[de,de-fe]},"copies"),[ue,ye]=s.centre(B,Z),j=Q(W-B,i).flatMap(le=>(o?Q($-Z,r):[$-Z]).flatMap(fe=>{if(le===0&&fe===0)return[];let[de,Oe]=s.centre(B+le,Z+fe);return[[le,fe,Math.hypot(de-ue,Oe-ye)]]})),me=Math.min(...j.map(([,,le])=>le));return j.filter(([,,le])=>le<=me+1e-9).map(([le,fe])=>[le,fe])},"stepsTo"),P=Math.max(...[0,1].flatMap(B=>{let[Z,W]=s.centre(0,B);return n.neighbours(0,B).flatMap(([$,Q])=>I(0,B,$,Q).map(([ue,ye])=>{let[j,me]=s.centre(ue,B+ye);return Math.hypot(j-Z,me-W)}))}),1),D=[0,1].map(B=>{let[Z,W]=s.centre(0,B);return S(B,P+rr*Math.SQRT2+mp+1.2+Math.max(y(0),y(1))).flatMap(([$,Q])=>{let[ue,ye]=s.centre($,B+Q);return[$,Q,ue-Z,ye-W]})}),U=u((B,Z,W,$,Q,ue)=>{let ye=Q-W,j=ue-$,me=ye*ye+j*j,le=me===0?0:Math.max(0,Math.min(1,((B-W)*ye+(Z-$)*j)/me));return Math.hypot(B-W-ye*le,Z-$-j*le)},"toSegment"),X=u(()=>{let B=g.map(()=>[]),Z=g.map(()=>[]),W=Math.max(y(0),y(1));return e?(g.forEach(($,Q)=>{if(v[Q]!==!0)return;let ue=Q%i,ye=Math.floor(Q/i),[j,me]=s.centre(ue,ye),le=new Map;n.neighbours(ue,ye).forEach(([fe,de])=>{let Oe=w(fe,de);Oe!==null&&v[Oe]===!0&&I(ue,ye,fe,de).forEach(([re,ie])=>le.set(`${re},${ie}`,[re,ie,Oe]))}),le.forEach(([fe,de,Oe])=>{let re=g[Oe];if(re===void 0||de<0||de===0&&fe<0)return;let[ie,he]=s.centre(ue+fe,ye+de),{peak:ge,relief:xe}=$,{peak:Ne,relief:$e}=re,it=ge.u,Qe=ge.v,Mt=ie-j+Ne.u,ft=he-me+Ne.v,bt=xe.base*pp*ge.scale,kt=$e.base*pp*Ne.scale,ut=Math.hypot(Mt-it,ft-Qe)||1,V=16+(de+2)*5+(fe+2),Ut=(Eu(ue,ye,t,V)*2-1)*mp,ze=jb.low+(jb.high-jb.low)*Eu(ue,ye,t,V+32),et=(it+Mt)/2-(ft-Qe)/ut*Ut,_e=(Qe+ft)/2+(Mt-it)/ut*Ut,_t=Math.max(Math.hypot(it-et,Qe-_e),Math.hypot(Mt-et,ft-_e))+1.2,We={au:it,av:Qe,ah:bt,mu:et,mv:_e,mh:ze*Math.min(bt,kt),bu:Mt,bv:ft,bh:kt,roughness:(xe.roughness+$e.roughness)/2,cu:et,cv:_e,reach:_t*_t},Ze=(Math.sqrt(We.reach)+W)**2,L=D[ye&1]??[];for(let T=0;T<L.length;T+=4){let q=L[T+2],pe=L[T+3];if((q-et)**2+(pe-_e)**2>=Ze||Math.min(U(q,pe,it,Qe,et,_e),U(q,pe,et,_e,Mt,ft))>=1.2+W)continue;let oe=w(ue+L[T],ye+L[T+1]);oe!==null&&(B[oe]?.push(We),Z[oe]?.push(q,pe))}})}),[B,Z]):[B,Z]},"ranges"),O=u(B=>{let[Z,W]=s.centre(0,B),$=Math.max(...s.outline(0,B).map(([ue,ye])=>Math.hypot(ue-Z,ye-W))),Q=[];for(let ue=-6;ue<=6;ue++)for(let ye=-4;ye<=4;ye++){let[j,me]=s.centre(ye,B+ue);Math.hypot(j-Z,me-W)<1.2+$+rr*Math.SQRT2+1e-9&&Q.push([ye,ue])}return Q},"offsetsFor"),Y=[O(0),O(1)],te=u((B,Z)=>{let[W,$]=s.tileAt(B,Z),Q=w(W,$),ue=Q===null?null:g[Q]??null;if(ue===null||ue.unknown)return{height:0,colour:Jb(Wf.colour),surfaces:qn.map(()=>0),shore:0,unseen:!0};let ye=null,j=null,me=u(bt=>bt==="rolling"?ye??=l(B,Z):j??=h(B,Z),"noiseHere"),le=0,fe=0,de=0,Oe=0,re=qn.map(()=>0),ie=0,he=0,ge=0,xe=0,Ne=0,$e=B+rr*p(B,Z),it=Z+rr*d(B,Z);(Y[$&1]??[]).forEach(([bt,kt])=>{let ut=W+bt,V=$+kt,Ut=w(ut,V);if(Ut===null)return;let ze=g[Ut];if(ze===void 0)return;let[et,_e]=s.centre(ut,V),{relief:_t,colour:We,peak:Ze,surface:L}=ze,T=wu(Math.hypot(B-et,Z-_e)),q=_t.shape==="peaked"?wu(Math.hypot(B-et-Ze.u,Z-_e-Ze.v)):0,pe=wu(Math.hypot($e-et,it-_e))**3;if(T>0){let oe=m[_t.shape],Me=oe===null?0:_t.roughness*me(oe);_t.shape==="peaked"?fe+=T*(_t.base*(1-pp)+Me*.5):fe+=T*(_t.base+Me),le+=T}if(q>0){let oe=_t.roughness*me("ridged");de+=q*q*(_t.base*pp*Ze.scale+oe*.5)}Oe+=pe,ze.unknown||(re[L]=(re[L]??0)+pe,ie+=pe,he+=ze.water?pe:0),ge+=pe*We[0],xe+=pe*We[1],Ne+=pe*We[2]});let Qe=Q===null?[]:x[Q]??[],Mt=Q===null?[]:b[Q]??[],ft=de;if(Qe.length>0){let[bt,kt]=s.centre(W,$);Qe.forEach((ut,V)=>{let Ut=B-bt+(Mt[V*2]??0),ze=Z-kt+(Mt[V*2+1]??0);if((Ut-ut.cu)**2+(ze-ut.cv)**2>=ut.reach)return;let et=ut.roughness*me("ridged")*.5;ft=Math.max(ft,_w(Ut,ze,ut.au,ut.av,ut.ah,ut.mu,ut.mv,ut.mh,et),_w(Ut,ze,ut.bu,ut.bv,ut.bh,ut.mu,ut.mv,ut.mh,et))})}return{height:(le>0?fe/le:0)+ft,colour:Oe>0?[ge/Oe,xe/Oe,Ne/Oe]:ue.colour,surfaces:ie>0?re.map(bt=>bt/ie):qn.map((bt,kt)=>kt===ue.surface?1:0),shore:ie>0?he/ie:ue.water?1:0,unseen:!1}},"sample");return E(),{sample:te,height:u((B,Z)=>te(B,Z).height,"height"),refresh:E}},"createRelief"),vw=y3;var Mw=u((s,e,{size:t=16,perUnit:n=8}={})=>{let{u:i,v:r}=s.period(),o=r??Math.max(...s.outline(0,e-1).map(([,p])=>p),...s.outline(1,e-1).map(([,p])=>p)),a=Math.max(1,Math.round(i/t)),l=Math.max(1,Math.round(o/t)),c=Math.max(2,Math.round(i/a*n)),h=Math.max(2,Math.round(o/l*n));return{chunksU:a,chunksV:l,stepsU:c,stepsV:h,spacingU:i/a/c,spacingV:o/l/h}},"chunkGrid"),Sw=u((s,e,t,n)=>{let{stepsU:i,stepsV:r,spacingU:o,spacingV:a}=s,l=t*i,c=n*r,h=u((I,P)=>[I*o,P*a],"at"),p=i+3,d=new Float64Array(p*(r+3)),m=(i+1)*(r+1),g=new Float32Array(m*3),_=new Uint8Array(m*4),x=new Uint8Array(m*4),b=new Uint8Array(m),v=new Float32Array(m);for(let I=-1;I<=r+1;I++)for(let P=-1;P<=i+1;P++){let D=e.sample(...h(l+P,c+I)),{height:U,colour:X}=D;if(d[(I+1)*p+(P+1)]=U,P>=0&&P<=i&&I>=0&&I<=r){let O=I*(i+1)+P;g.set(X,O*3),D.surfaces.forEach((Y,te)=>{(te<4?_:x)[O*4+te%4]=Math.round(Y*255)}),b[O]=Math.round(D.shore*255),v[O]=D.unseen?1:0}}let w=u((I,P)=>d[(P+1)*p+(I+1)]??0,"height"),M=new Float32Array(m*3),A=new Float32Array(m*3),[E,y]=h(l,c);for(let I=0;I<=r;I++)for(let P=0;P<=i;P++){let D=I*(i+1)+P,[U,X]=h(l+P,c+I),O=(w(P+1,I)-w(P-1,I))/(2*o),Y=(w(P,I+1)-w(P,I-1))/(2*a),te=Math.hypot(O,1,Y);M[D*3]=U-E,M[D*3+1]=w(P,I),M[D*3+2]=X-y,A[D*3]=-O/te,A[D*3+1]=1/te,A[D*3+2]=-Y/te}let S=new Uint32Array(i*r*6);for(let I=0;I<r;I++)for(let P=0;P<i;P++){let D=I*(i+1)+P,U=D+1,X=D+i+1,O=X+1,Y=(I*i+P)*6;S.set([D,X,U,U,X,O],Y)}return{u:E,v:y,positions:M,normals:A,colours:g,surfacesA:_,surfacesB:x,shore:b,unseen:v,indices:S}},"buildChunk"),Qb=u((s,e,t,n)=>{let i=s.stepsU*s.spacingU,r=s.stepsV*s.spacingV,o=e.period().v!==null,a=new Set;return t.forEach(([l,c])=>{let[h,p]=e.centre(l,c);for(let d=Math.floor((h-n)/i);d<=Math.floor((h+n)/i);d++)for(let m=Math.floor((p-n)/r);m<=Math.floor((p+n)/r);m++){if(!o&&(m<0||m>=s.chunksV))continue;let g=(d%s.chunksU+s.chunksU)%s.chunksU,_=o?(m%s.chunksV+s.chunksV)%s.chunksV:m;a.add(`${g},${_}`)}}),[...a].map(l=>l.split(",").map(Number))},"chunksNear");var ai=u((s,e,t,n,i)=>({kind:s,count:e,size:t,colour:n,detail:i}),"plant"),ww={Forest:{plants:[ai("conifer",8,[.95,1.4],"#2c5230","#4a3424")],conifers:[.15,.95],canopy:"woods"},Jungle:{plants:[ai("broadleaf",7,[1.05,1.55],"#2b6a2a","#4d3a26"),ai("palm",2,[.9,1.2],"#3f8a34","#6b5236")],canopy:"woods"},Swamp:{plants:[ai("reeds",7,[.8,1.2],"#7a8a4a","#5a6a38"),ai("deadTree",2,[.8,1.1],"#4a4036","#4a4036")],canopy:"swamp"},Grassland:{plants:[ai("bush",2,[.8,1.2],"#4e7a32","#4e7a32")]},Plains:{plants:[ai("shrub",3,[.7,1.1],"#7a7a3a","#6a5a36")]},Tundra:{plants:[ai("scrub",4,[.7,1.1],"#6a6a4e","#5a5444")]},Hills:{plants:[ai("shrub",2,[.8,1.1],"#5e6e36","#5e5036"),ai("rock",1,[.8,1.2],"#7d756a","#7d756a")]},Mountains:{plants:[ai("rock",3,[.9,1.4],"#77706a","#77706a")]},Desert:{plants:[ai("rock",2,[.7,1.1],"#a8936a","#a8936a"),ai("cactus",1,[.8,1.1],"#5a7a3e","#5a7a3e")]}},Rl=u(s=>Object.prototype.hasOwnProperty.call(ww,s)?ww[s]:null,"growthOf");var Ew=["Ocean"],_3=["Mountains"],v3=["Mine","Fortress","Airbase"],M3=["River"],Tn=u((s,e)=>(s.improvements??[]).some(({_:t})=>t===e),"has"),S3=["Irrigation","Farmland","Fortress","Airbase"],Tw=u(s=>s.city||S3.some(e=>Tn(s,e))?null:Rl(s.terrain?._??"Unknown")?.canopy??null,"woodsOf"),w3=u((s,e)=>{if(s.city){let d=s.city;return{road:null,railroad:null,irrigation:null,mine:!1,fortress:!1,airbase:!1,pollution:!1,specials:[],hut:!1,terrain:s.terrain?._??"Unknown",vegetation:!1,woods:[],paths:[],city:cS(wx(String(d.id??d.name??"")),d.growth?.size??1,e.filter(({tile:m})=>Tn(m,"Road")&&(Tn(s,"Road")||Tn(m,"Railroad"))).map(({offset:m})=>m),e.filter(({tile:m})=>Ew.includes(m.terrain?._??"")).map(({offset:m})=>m)),suburbs:[],beside:[]}}let t=Tn(s,"Road"),n=Tn(s,"Railroad"),i=t?e.filter(d=>Tn(d.tile,"Road")).map(({offset:d})=>d):[],r=t?e.filter(d=>!!d.tile.city||Tn(d.tile,"Railroad")).map(({offset:d})=>d):[],o=u((d,m)=>d[0]===m[0]&&d[1]===m[1],"same"),a=i.length===0&&r.length===0,l={road:t?{joins:i.filter(d=>!n||!r.some(m=>o(m,d))),alone:a&&!n}:null,railroad:t&&n?{joins:r,alone:a}:null,irrigation:Tn(s,"Farmland")?"farmland":Tn(s,"Irrigation")?"irrigation":null,mine:Tn(s,"Mine"),fortress:Tn(s,"Fortress"),airbase:Tn(s,"Airbase"),pollution:Tn(s,"Pollution"),specials:(s.terrain?.features??[]).map(({_:d})=>d).filter(d=>!M3.includes(d)).map(d=>[s.terrain._,d]),hut:s.goodyHut!==null&&s.goodyHut!==void 0,terrain:s.terrain?._??"Unknown",vegetation:Rl(s.terrain?._??"Unknown")!==null,woods:[],paths:[],city:null,suburbs:[],beside:[]},c=Tw(s),h=s.terrain?._??"Unknown";return s.isWater!==!0&&!Ew.includes(h)&&h!=="Unknown"&&!_3.includes(h)&&!v3.some(d=>Tn(s,d))&&(l.suburbs=e.flatMap(({offset:d,tile:{city:m}})=>{let g=m?dS(m.growth?.size??1):0;return m&&g>0?[{seed:wx(String(m.id??m.name??"")),steps:g,city:d}]:[]}).sort((d,m)=>d.seed-m.seed||d.city[0]-m.city[0]||d.city[1]-m.city[1])),l.suburbs.length>0&&(l.beside=e.filter(({tile:{city:d}})=>!!d).map(({offset:d})=>d)),c!==null&&(l.woods=e.filter(d=>Tw(d.tile)===c).map(({offset:d})=>d)),(c!==null||l.suburbs.length>0)&&(l.paths=e.filter(d=>!!d.tile.city||Tn(d.tile,"Road")).map(({offset:d})=>d)),l.road===null&&l.irrigation===null&&!l.mine&&!l.fortress&&!l.airbase&&!l.pollution&&l.specials.length===0&&!l.hut&&!l.vegetation&&l.suburbs.length===0?null:l},"overlayFor"),Aw=w3;var Gt=u((s,e,t,n)=>({shape:s,colour:e,count:t,...n===void 0?{}:{detail:n}}),"look"),Rw={Coal:Gt("rocks","#26262a",4),Gold:Gt("rocks","#d8b13a",3),Gems:Gt("rocks","#59c2d6",4,"#b05ad0"),Iron:Gt("rocks","#8a5a44",4),Wheat:Gt("crop","#d9b84a",5,"#a88a2c"),Spice:Gt("crop","#c0452e",4,"#5d7a2a"),Wine:Gt("crop","#6a2c5e",4,"#5d7a2a"),Silk:Gt("crop","#e9e2cf",3,"#4f7a34"),Fruit:Gt("crop","#e08a2a",4,"#3f7a2a"),Horse:Gt("animal","#7a4e2a",2,"#3a2a1c"),Buffalo:Gt("animal","#4a3424",3,"#2a1e16"),Game:Gt("animal","#a9835a",2,"#5a4430"),"Tundra:Game":Gt("animal","#8f7e66",2,"#e8e2d6"),Furs:Gt("animal","#b0602a",2,"#f0e8dc"),Ivory:Gt("animal","#8a8580",1,"#f2ead8"),Seal:Gt("animal","#6e7072",2,"#4a4c4e"),Pheasant:Gt("bird","#8a3a22",2,"#3d6a3a"),Fish:Gt("fish","#b8c4cc",5),Whales:Gt("whale","#3a4048",1),Oil:Gt("derrick","#222224",1,"#121214"),Oasis:Gt("oasis","#3f7a32",3,"#3f86a8"),Peat:Gt("peat","#4a3624",4),Shield:Gt("logs","#7a5532",4,"#c9a47a")},E3=Gt("cairn","#9a9690",5),Cw=u((s,e)=>{let t=u(n=>Object.prototype.hasOwnProperty.call(Rw,n)?Rw[n]:void 0,"own");return t(`${s}:${e}`)??t(e)??E3},"specialLook");var oy=u(()=>({positions:[],normals:[],colours:[]}),"soup"),On={field:.01,road:.014,ballast:.016,rail:.02,smear:.024},Pl=.06,Pw="#8c7a58",Iw="#5f5953",T3="#a9abae",A3="#5e432b",R3="#4f87b0",C3="#7da33f",P3=["#c2b448","#8fae3e"],Lw="#9d968a",I3="#4a4c50",iy="#6b4a2e",L3="#7a6a58",N3="#b89a5a",D3="#c9b48e",Nw="#34322a",Un=new ss(1,1,1),Il=new rs(.5,.5,1,8),ay=new Ks(.5,1,8),Vw=new Ks(.5,1,4),Cl=new Ur(.5,8,6),Tu=new rs(.5,.5,1,4,1,!0),Au=new Ks(.5,1,5,1,!0),gp=new Ur(.5,5,3),ey={mine:[3,.72],hut:[11,.64],special:u(s=>[s+1,.72],"special")},U3=.05,Hw=.22,Dw=72,Mi=u((s,e)=>{let t=Math.imul(s^Math.imul(e+1,2654435761),2246822507);return t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,(t>>>0)/4294967296},"fraction"),ly=.05,Uw=new Map,xp=u(s=>{let e=Uw.get(s);if(e===void 0){let{r:t,g:n,b:i}=new Pe(s);e=[t,n,i],Uw.set(s,e)}return e},"colourOf"),Ow=new WeakMap,O3=u(s=>{let e=Ow.get(s);if(e===void 0){let t=s.index===null?s:s.toNonIndexed();e={positions:new Float32Array(t.getAttribute("position").array),normals:new Float32Array(t.getAttribute("normal").array)},Ow.set(s,e),t!==s&&t.dispose()}return e},"trianglesOf"),F3=new Ke,B3=new je,k3=new H,z3=new an,G3=new Qn,V3=new H,Nt,Ww,qt,dy=class dy{constructor(e,t){G(this,Nt);this.lines=[];this.runs=[];this.past=[];this.taken=[];this.grown=[];this.soup=e,this.place=t}ground(e,t,n=!1){let i=this.place.heightAt(e,t);return n?Math.max(0,i):i}strip(e,t,n,i,r){let o=xp(i),a=Math.hypot(t[0]-e[0],t[1]-e[1]);if(a===0)return;let l=Math.max(1,Math.ceil(a/Pl)),c=Math.max(1,Math.ceil(n/Pl)),h=[-(t[1]-e[1])/a*n,(t[0]-e[0])/a*n],p=u((d,m)=>[e[0]+(t[0]-e[0])*d+h[0]*(m-.5),e[1]+(t[1]-e[1])*d+h[1]*(m-.5)],"at");for(let d=0;d<l;d++)for(let m=0;m<c;m++){let[g,_]=p(d/l,(m+1)/c),[x,b]=p((d+1)/l,(m+1)/c),[v,w]=p(d/l,m/c),[M,A]=p((d+1)/l,m/c);R(this,Nt,qt).call(this,g,_,r,o),R(this,Nt,qt).call(this,x,b,r,o),R(this,Nt,qt).call(this,v,w,r,o),R(this,Nt,qt).call(this,x,b,r,o),R(this,Nt,qt).call(this,M,A,r,o),R(this,Nt,qt).call(this,v,w,r,o)}}ribbon(e,t,n,i,r){let o=xp(n),a=e.map((l,c)=>{let h=e[c-1]??l,p=e[c+1]??l,[d,m]=r?.[c]??[p[0]-h[0],p[1]-h[1]],g=Math.hypot(d,m);return g===0?[0,0]:[-m/g*t,d/g*t]});for(let l=0;l+1<e.length;l++){let c=e[l],h=e[l+1],p=a[l],d=a[l+1],m=Math.hypot(h[0]-c[0],h[1]-c[1]);if(m===0)continue;let g=Math.max(1,Math.ceil(m/Pl)),_=Math.max(1,Math.ceil(t/Pl)),x=u((b,v)=>[c[0]+(h[0]-c[0])*b+(p[0]+(d[0]-p[0])*b)*(v-.5),c[1]+(h[1]-c[1])*b+(p[1]+(d[1]-p[1])*b)*(v-.5)],"at");for(let b=0;b<g;b++)for(let v=0;v<_;v++){let[w,M]=x(b/g,(v+1)/_),[A,E]=x((b+1)/g,(v+1)/_),[y,S]=x(b/g,v/_),[I,P]=x((b+1)/g,v/_);R(this,Nt,qt).call(this,w,M,i,o),R(this,Nt,qt).call(this,A,E,i,o),R(this,Nt,qt).call(this,y,S,i,o),R(this,Nt,qt).call(this,A,E,i,o),R(this,Nt,qt).call(this,I,P,i,o),R(this,Nt,qt).call(this,y,S,i,o)}}}disc(e,t,n,i,r=12){let o=xp(n),[a,l]=e,c=Math.max(1,Math.ceil(t/Pl)),h=u((p,d)=>{let m=d/r*Math.PI*2,g=p/c*t;return[a+Math.cos(m)*g,l+Math.sin(m)*g]},"at");for(let p=0;p<c;p++)for(let d=0;d<r;d++){let m=h(p+1,d),g=h(p+1,d+1);if(p===0)R(this,Nt,qt).call(this,a,l,i,o),R(this,Nt,qt).call(this,...g,i,o),R(this,Nt,qt).call(this,...m,i,o);else{let _=h(p,d),x=h(p,d+1);R(this,Nt,qt).call(this,..._,i,o),R(this,Nt,qt).call(this,...x,i,o),R(this,Nt,qt).call(this,...m,i,o),R(this,Nt,qt).call(this,...x,i,o),R(this,Nt,qt).call(this,...g,i,o),R(this,Nt,qt).call(this,...m,i,o)}}}solid(e,t,n,i,r=[0,0,0]){let{positions:o,normals:a}=O3(e),l=F3.compose(k3.set(...t),z3.setFromEuler(G3.set(...r)),V3.set(...n)),c=l.elements,h=B3.getNormalMatrix(l).elements,[p,d,m]=xp(i),g=this.soup;for(let _=0;_<o.length;_+=3){let x=o[_],b=o[_+1],v=o[_+2],w=a[_],M=a[_+1],A=a[_+2],E=h[0]*w+h[3]*M+h[6]*A,y=h[1]*w+h[4]*M+h[7]*A,S=h[2]*w+h[5]*M+h[8]*A,I=Math.hypot(E,y,S)||1;g.positions.push(c[0]*x+c[4]*b+c[8]*v+c[12],c[1]*x+c[5]*b+c[9]*v+c[13],c[2]*x+c[6]*b+c[10]*v+c[14]),g.normals.push(E/I,y/I,S/I),g.colours.push(p,d,m)}}spot(e,t){let n=Mi(this.place.seed,e)*Math.PI*2,[i,r]=this.place.centre;return[i+Math.cos(n)*t*this.place.radius,r+Math.sin(n)*t*this.place.radius]}clearance(e,t,n){let[i,r]=this.place.centre,o=Math.hypot(e-i,t-r)-Hw-n;return this.lines.forEach(([a,l])=>{o=Math.min(o,rL(e,t,a,l)-U3-n)}),this.taken.forEach(([a,l,c])=>{o=Math.min(o,Math.hypot(e-a,t-l)-c-n)}),o}hasRoom(e,t,n){return this.clearance(e,t,n)>=0}claim(e,t,n){let i=Mi(this.place.seed,e)*Math.PI*2,[r,o]=this.place.centre,a=[r,o],l=-1/0;for(let c of[t,t*.88,t*1.1])for(let h=0;h<Dw;h++){let p=i+h/Dw*Math.PI*2,d=[r+Math.cos(p)*c*this.place.radius,o+Math.sin(p)*c*this.place.radius],m=this.clearance(d[0],d[1],n);if(m>=0)return this.taken.push([d[0],d[1],n]),d;m>l&&(a=d,l=m)}return this.taken.push([a[0],a[1],n]),a}};Nt=new WeakSet,Ww=u(function(e,t){let n=ly,i=(this.place.heightAt(e+n,t)-this.place.heightAt(e-n,t))/(2*n),r=(this.place.heightAt(e,t+n)-this.place.heightAt(e,t-n))/(2*n),o=Math.hypot(i,1,r);return[-i/o,1/o,-r/o]},"#normal"),qt=u(function(e,t,n,i){this.soup.positions.push(e,this.ground(e,t)+n,t),this.soup.normals.push(...R(this,Nt,Ww).call(this,e,t)),this.soup.colours.push(...i)},"#point"),u(dy,"Layer");var sy=dy,yp=u((s,e)=>{let[t,n]=s.centre,[i,r]=s.toward(e);return[(t+i)/2,(n+r)/2]},"halfway"),cy=u(s=>s.alone||s.joins.length>0,"drawn"),H3=.09,W3=8,ry=u(([s,e])=>300+(s+3)*7+(e+3),"wayIndex"),_p=u((s,e)=>{let[t,n]=s.centre,[i,r]=yp(s,e),o=i-t,a=r-n,l=Math.hypot(o,a);if(l===0)return{points:[[t,n]],ways:[[0,0]]};let c=(Mi(s.seed,ry(e))*2-1)*H3*l/(4/9),h=[-a/l,o/l],p=[t+o/3+h[0]*c,n+a/3+h[1]*c],d=[t+o*2/3,n+a*2/3],m=Math.max(W3,Math.ceil(l*1.02/Pl)),g=Array.from({length:m+1},(_,x)=>x/m);return{points:g.map(_=>{let x=(1-_)**3,b=3*(1-_)**2*_,v=3*(1-_)*_**2,w=_**3;return[x*t+b*p[0]+v*d[0]+w*i,x*n+b*p[1]+v*d[1]+w*r]}),ways:g.map(_=>{let x=3*(1-_)**2,b=6*(1-_)*_,v=3*_**2,w=x*(p[0]-t)+b*(d[0]-p[0])+v*(i-d[0]),M=x*(p[1]-n)+b*(d[1]-p[1])+v*(r-d[1]),A=Math.hypot(w,M);return A===0?[o/l,a/l]:[w/A,M/A]})}},"roadHalf"),X3=u((s,e)=>{let{place:t}=s;cy(e)&&(e.joins.forEach(n=>{let{points:i,ways:r}=_p(t,n);s.ribbon(i,.07,Pw,On.road,r)}),s.disc(t.centre,e.alone?.09:.035,Pw,On.road))},"road"),q3=u((s,e)=>{if(!cy(e))return;let{place:t}=s;(e.alone?[[t.centre[0]+.12,t.centre[1]],[t.centre[0]-.12,t.centre[1]]]:e.joins.map(i=>yp(t,i))).forEach(i=>{let[r,o]=t.centre,a=Math.hypot(i[0]-r,i[1]-o),l=a===0?[0,0]:[-(i[1]-o)/a*.025,(i[0]-r)/a*.025];s.strip(t.centre,i,.1,Iw,On.ballast);for(let c=.1;c<1;c+=.2){let h=[r+(i[0]-r)*c,o+(i[1]-o)*c];s.strip([h[0]+l[0]*1.8,h[1]+l[1]*1.8],[h[0]-l[0]*1.8,h[1]-l[1]*1.8],.014,A3,On.ballast+.002)}[1,-1].forEach(c=>s.strip([r+l[0]*c,o+l[1]*c],[i[0]+l[0]*c,i[1]+l[1]*c],.01,T3,On.rail))}),s.disc(t.centre,.05,Iw,On.ballast)},"railroad"),ty=.04,Y3=u((s,e,t,n,i)=>{let r=i.filter(l=>Math.min(...l.map(([,c])=>c))-Ft<t+n/2&&Math.max(...l.map(([,c])=>c))+Ft>t-n/2).map(l=>[Math.min(...l.map(([c])=>c))-Ft,Math.max(...l.map(([c])=>c))+Ft]).sort((l,c)=>l[0]-c[0]),o=[],a=s;return r.forEach(([l,c])=>{l-a>=ty&&o.push([a,Math.min(l,e)]),a=Math.max(a,c)}),e-a>=ty&&o.push([a,e]),o.filter(([l,c])=>c-l>=ty)},"rowAround"),$3=u((s,e,t)=>{let{centre:n,inner:i}=s.place,r=e==="farmland"?6:4,o=i*.9,a=o*2/r,l=u((c,h,p,d)=>Y3(n[0]-o,n[0]+o,c,h,t).forEach(([m,g])=>s.strip([m,c],[g,c],h,p,d)),"across");for(let c=0;c<r;c++)l(n[1]-o+a*(c+.5),a*.8,e==="farmland"?P3[c%2]:C3,On.field),c>0&&l(n[1]-o+a*c,.016,R3,On.field+.001)},"fields"),Fw=["#9c5a3c","#7d4a36","#6f6a64","#8b6b4a"],Bw="#a39a88",K3="#c4b8a2",Z3=.045,kw=.86,J3=u((s,e)=>{let{place:t}=s,[n,i]=t.centre,{plaza:r,streets:o,lots:a}=uS(t,e,[n,i+Ko]);s.disc(r.at,r.radius,Bw,On.road,16),o.forEach(([l,c])=>s.strip(l,c,cu,Bw,On.road)),a.forEach(l=>Xw(s,l))},"city"),Xw=u((s,e)=>{let{at:[t,n],width:i,facing:r,storeys:o}=e,a=[[t,n],...ml(e)].map(([h,p])=>s.ground(h,p)),l=Math.min(...a)-.005,c=Math.max(...a)+Z3*o;s.solid(Un,[t,(l+c)/2,n],[i*kw,c-l,i*kw],K3,[0,r,0]),s.solid(Vw,[t,c+i*.2,n],[i*Math.SQRT2,i*.4,i*Math.SQRT2],Fw[Math.floor(e.roof*Fw.length)],[0,r+Math.PI/4,0])},"house"),j3=u((s,e)=>{if(e.suburbs.length===0)return[];let{place:t}=s,n=u((a,l)=>a[0]===l[0]&&a[1]===l[1],"same"),i=u(a=>{let[l,c]=t.toward(a);return[l,c+Ko]},"standOf"),r={runs:[...s.runs],lines:[...s.past],lanes:e.beside.filter(a=>![...e.road?.joins??[],...e.railroad?.joins??[]].some(l=>n(l,a))).map(a=>[[t.centre[0],t.centre[1]],i(a)]),stands:e.beside.map(i),taken:s.taken,ground:u((a,l)=>t.heightAt(a,l),"ground")};return e.suburbs.flatMap(a=>fS(t,a,{...r,others:e.beside.filter(l=>!n(l,a.city)).map(l=>t.toward(l))})).map(a=>(Xw(s,a),s.taken.push([a.at[0],a.at[1],a.width/2*Math.SQRT2]),ml(a)))},"suburbs"),Q3=u((s,[e,t])=>{let n=s.ground(e,t);s.solid(Un,[e-.02,n+.05,t],[.01,.11,.01],iy,[0,0,-.3]),s.solid(Un,[e+.02,n+.05,t],[.01,.11,.01],iy,[0,0,.3]),s.solid(Il,[e,n+.1,t],[.05,.008,.05],"#3a3a3a",[Math.PI/2,0,0]),[[.07,.03],[-.05,.06]].forEach(([i,r])=>{let o=e+i,a=t+r;s.solid(ay,[o,s.ground(o,a)+.02,a],[.07,.04,.07],L3)})},"mine"),eL=u(s=>{let[e,t]=s.place.centre,n=s.place.radius*.62,i=s.ground(e,t);[[0,-n,n*2,.025],[0,n,n*2,.025],[-n,0,.025,n*2],[n,0,.025,n*2]].forEach(([r,o,a,l])=>{let c=e+r,h=t+o;s.solid(Un,[c,Math.max(i,s.ground(c,h))+.02,h],[a,.05,l],Lw)}),[[-n,-n],[n,-n],[-n,n],[n,n]].forEach(([r,o])=>{let a=e+r,l=t+o;s.solid(Il,[a,s.ground(a,l)+.035,l],[.045,.07,.045],Lw)})},"fortress"),tL=u(s=>{let[e,t]=s.place.centre,n=s.place.radius*.75,[i,r]=s.claim(5,.6,.08);s.strip([e-n,t+.12],[e+n,t+.12],.12,I3,On.road+.002),s.strip([e-n*.9,t+.12],[e+n*.9,t+.12],.008,"#e8e8e8",On.road+.004),s.solid(Un,[i,s.ground(i,r)+.03,r],[.12,.06,.08],"#8a9096")},"airbase"),nL=u(s=>{let e=s.place.radius;s.disc(s.place.centre,e*.55,Nw,On.smear,14),s.disc(s.spot(7,.5),e*.25,Nw,On.smear+.001)},"pollution"),iL=u((s,e,t,n)=>{let i=e.detail??e.colour,r=u((a,l)=>[t[0]+(Mi(s.place.seed,n*31+a*2)-.5)*l,t[1]+(Mi(s.place.seed,n*31+a*2+1)-.5)*l],"jitter"),o=e.shape==="fish"||e.shape==="whale";for(let a=0;a<e.count;a++){let[l,c]=e.count===1?[t[0],t[1]]:r(a,.1),h=s.ground(l,c,o),p=Mi(s.place.seed,n*31+a+17)*Math.PI*2;switch(e.shape){case"rocks":s.solid(Cl,[l,h+.012,c],[.05,.035,.045],a%2===1?i:e.colour,[0,p,0]);break;case"crop":s.solid(Il,[l,h+.02,c],[.008,.04,.008],i),s.solid(Cl,[l,h+.05,c],[.045,.04,.045],e.colour);break;case"animal":{let d=e.count===1?1.5:1;s.solid(Un,[l,h+.04*d,c],[.035*d,.03*d,.07*d],e.colour,[0,p,0]),s.solid(Un,[l+Math.sin(p)*.04*d,h+.055*d,c+Math.cos(p)*.04*d],[.022*d,.024*d,.03*d],i,[0,p,0]),s.solid(Un,[l,h+.013*d,c],[.03*d,.026*d,.055*d],i,[0,p,0]);break}case"bird":s.solid(Cl,[l,h+.02,c],[.03,.025,.04],e.colour,[0,p,0]),s.solid(Un,[l-Math.sin(p)*.03,h+.025,c-Math.cos(p)*.03],[.008,.006,.04],i,[.4,p,0]);break;case"fish":s.solid(Cl,[l,h+.006,c],[.012,.01,.035],e.colour,[0,p,0]);break;case"whale":s.solid(Cl,[l,h,c],[.07,.05,.2],e.colour,[0,p,0]),s.solid(Un,[l-Math.sin(p)*.11,h+.02,c-Math.cos(p)*.11],[.08,.006,.03],e.colour,[0,p,0]);break;case"derrick":s.solid(Un,[l,h+.008,c],[.08,.016,.08],i),s.solid(Vw,[l,h+.1,c],[.06,.18,.06],e.colour,[0,Math.PI/4,0]);break;case"oasis":a===0&&s.disc([l,c],.07,i,On.field+.002);{let[d,m]=r(a+5,.1),g=s.ground(d,m);s.solid(Il,[d,g+.06,m],[.012,.12,.012],iy),s.solid(ay,[d,g+.125,m],[.09,.03,.09],e.colour)}break;case"peat":case"logs":s.solid(e.shape==="logs"?Il:Un,[l,h+.012,c],e.shape==="logs"?[.022,.09,.022]:[.05,.02,.035],a%2===1&&e.detail!==void 0?e.detail:e.colour,e.shape==="logs"?[0,p,Math.PI/2]:[0,p,0]);break;default:s.solid(Cl,[t[0],s.ground(t[0],t[1])+.012+a*.018,t[1]],[.05-a*.007,.025,.05-a*.007],e.colour)}}},"special"),sL=u((s,e)=>{[0,1,2].forEach(t=>{let n=t/3*Math.PI*2+Mi(s.place.seed,12)*Math.PI,i=e[0]+Math.cos(n)*.06,r=e[1]+Math.sin(n)*.06,o=s.ground(i,r);s.solid(Il,[i,o+.02,r],[.05,.04,.05],D3),s.solid(ay,[i,o+.055,r],[.065,.035,.065],N3)})},"hut"),qw={conifer:.06,broadleaf:.07,palm:.06,deadTree:.05,bush:.035,shrub:.03,scrub:.03,reeds:.03,rock:.04,cactus:.03},Yw=u((s,e,t,n,i,r,o)=>{let a=s.ground(n,i),{colour:l,detail:c}=e;switch(t){case"conifer":s.solid(Tu,[n,a+.025*r,i],[.016*r,.05*r,.016*r],c),s.solid(Au,[n,a+.09*r,i],[.11*r,.12*r,.11*r],l),s.solid(Au,[n,a+.16*r,i],[.08*r,.1*r,.08*r],l);break;case"broadleaf":s.solid(Tu,[n,a+.04*r,i],[.018*r,.08*r,.018*r],c),s.solid(gp,[n,a+.12*r,i],[.13*r,.11*r,.13*r],l,[0,o,0]);break;case"palm":s.solid(Tu,[n,a+.08*r,i],[.012*r,.16*r,.012*r],c,[.12,o,0]),s.solid(Au,[n+.01*r,a+.165*r,i],[.15*r,.03*r,.15*r],l,[0,o,0]);break;case"deadTree":s.solid(Tu,[n,a+.06*r,i],[.014*r,.12*r,.014*r],c),s.solid(Un,[n+.02*r,a+.09*r,i],[.006*r,.05*r,.006*r],c,[0,o,-.7]);break;case"bush":s.solid(gp,[n,a+.02*r,i],[.06*r,.045*r,.06*r],l,[0,o,0]);break;case"shrub":s.solid(Au,[n,a+.025*r,i],[.05*r,.05*r,.05*r],l,[0,o,0]),s.solid(Au,[n+.02*r,a+.018*r,i+.01*r],[.035*r,.036*r,.035*r],l,[0,o,0]);break;case"scrub":s.solid(gp,[n,a+.008*r,i],[.05*r,.02*r,.05*r],l,[0,o,0]);break;case"reeds":[-1,0,1].forEach(h=>s.solid(Un,[n+h*.008*r,a+.035*r,i],[.005,.07*r,.005],h===0?l:c,[0,o,h*.18]));break;case"rock":s.solid(gp,[n,a+.012*r,i],[.07*r,.04*r,.06*r],l,[0,o,0]);break;default:s.solid(Tu,[n,a+.05*r,i],[.018*r,.1*r,.018*r],l),s.solid(Un,[n+.015*r,a+.06*r,i],[.025*r,.01*r,.01*r],l,[0,o,0])}},"grow"),rL=u((s,e,t,n)=>{let i=n[0]-t[0],r=n[1]-t[1],o=i*i+r*r,a=o===0?0:Math.max(0,Math.min(1,((s-t[0])*i+(e-t[1])*r)/o));return Math.hypot(s-(t[0]+i*a),e-(t[1]+r*a))},"distanceTo"),oL=u((s,e)=>{let t=Rl(e.terrain);if(t===null)return;let{centre:n,radius:i,seed:r,latitude:o}=s.place;t.plants.forEach((a,l)=>{for(let c=0;c<a.count;c++){let h=1e3+l*97+c*7,p=a.size[0]+(a.size[1]-a.size[0])*Mi(r,h),d=t.conifers,m=d!==void 0&&Mi(r,h+1)>=d[0]+(d[1]-d[0])*o?"broadleaf":a.kind,g=qw[m]*p;for(let _=0;_<6;_++){let x=Mi(r,h+2+_*2)*Math.PI*2,b=Math.sqrt(Mi(r,h+3+_*2))*i*.92,v=n[0]+Math.cos(x)*b,w=n[1]+Math.sin(x)*b;if(s.hasRoom(v,w,g)){Yw(s,a,m,v,w,p,x),s.taken.push([v,w,g]),s.grown.push([v,w,m]);break}}}})},"plants"),ny=.26,zw=.3,aL=.15,Gw=.5,bp=[.9,1.3],na=u((s,e,t)=>Mi(Math.imul(s,73856093)^Math.imul(e,19349663)^1540483477,t),"pointFraction"),lL=u((s,e,t)=>{let{centre:n,outline:i,owns:r,around:o,period:a,toward:l,latitude:c}=e,h=Math.max(1,Math.round(a.u/ny)),p=a.u/h,d=a.v===null?null:Math.max(1,Math.round(a.v/ny)),m=a.v===null||d===null?ny:a.v/d,g=i.map(([y])=>y),_=i.map(([,y])=>y),[x,b]=[Math.floor(Math.min(...g)/p)-1,Math.ceil(Math.max(...g)/p)],[v,w]=[Math.floor(Math.min(..._)/m)-1,Math.ceil(Math.max(..._)/m)],M=o.filter(([y,S])=>!s.woods.some(([I,P])=>I===y&&P===S)).map(y=>{let[S,I]=l(y),P=Math.hypot(S-n[0],I-n[1]);return{mu:S,mv:I,length:P}}),A=t.plants.reduce((y,{count:S})=>y+S,0),E=[];for(let y=v;y<=w;y++)for(let S=x;S<=b;S++){let I=(S%h+h)%h,P=d===null?y:(y%d+d)%d,D=(S+.5+(na(I,P,0)*2-1)*zw)*p,U=(y+.5+(na(I,P,1)*2-1)*zw)*m;if(!r(D,U))continue;let X=M.reduce((W,{mu:$,mv:Q,length:ue})=>{let ye=ue/2-((D-n[0])*($-n[0])+(U-n[1])*(Q-n[1]))/ue;return Math.min(W,Math.max(0,ye)/aL)},1);if(na(I,P,2)>=Gw+(1-Gw)*X)continue;let O=na(I,P,3)*A,Y=t.plants[0];for(let W of t.plants)if(Y=W,O-=W.count,O<0)break;let te=t.conifers,B=te!==void 0&&na(I,P,4)>=te[0]+(te[1]-te[0])*c?"broadleaf":Y.kind,Z=Y.size[0]+(Y.size[1]-Y.size[0])*na(I,P,5);E.push({u:D,v:U,kind:B,plant:Y,room:qw[B]*Z*bp[1],size:Z*(bp[0]+(bp[1]-bp[0])*X),facing:na(I,P,6)*Math.PI*2})}return E},"woodsPlants"),cL=u((s,e)=>{let{centre:t,around:n,toward:i}=s.place,r=Math.max(...n.map(a=>{let[l,c]=i(a);return Math.hypot(l-t[0],c-t[1])})),o=e.paths.map(a=>i(a));o.forEach((a,l)=>o.slice(l+1).forEach(c=>{Math.hypot(c[0]-a[0],c[1]-a[1])<=r+1e-6&&(s.lines.push([a,c]),s.past.push([a,c]))}))},"pathsPast"),uL=u((s,e,t)=>{let{heightAt:n}=s.place;lL(e,s.place,t).forEach(({u:i,v:r,kind:o,plant:a,size:l,room:c,facing:h})=>{o!=="reeds"&&n(i,r)<0||s.hasRoom(i,r,c)&&(Yw(s,a,o,i,r,l,h),s.grown.push([i,r,o]))})},"woods"),uy=u((s,e,t)=>{let n=new sy(t,e),{centre:i,radius:r}=e;if(s.city!==null)return J3(n,s.city),{taken:n.taken,lines:n.lines,grown:n.grown};if([s.road,s.railroad].forEach(l=>{l!==null&&cy(l)&&(l.joins.forEach(c=>{if(l===s.road){let h=_p(e,c).points;h.slice(1).forEach((p,d)=>n.lines.push([h[d],p])),n.runs.push({key:ry(c),points:h});return}n.lines.push([i,yp(e,c)]),n.runs.push({key:ry(c)+100,points:[i,yp(e,c)]})}),l.alone&&n.lines.push([i,i]))}),s.fortress){let l=r*.62,c=[[-l,-l],[l,-l],[l,l],[-l,l]].map(([h,p])=>[i[0]+h,i[1]+p]);c.forEach((h,p)=>n.lines.push([h,c[(p+1)%4]]))}if(s.airbase){let l=r*.75;n.lines.push([[i[0]-l,i[1]+.12],[i[0]+l,i[1]+.12]])}s.road!==null&&X3(n,s.road),s.railroad!==null&&q3(n,s.railroad),s.front===!0&&n.taken.push([i[0],i[1]+Ko,Hw]),s.mine&&Q3(n,n.claim(...ey.mine,.1)),s.fortress&&eL(n),s.airbase&&tL(n),s.pollution&&nL(n),s.specials.forEach(([l,c],h)=>iL(n,Cw(l,c),n.claim(...ey.special(h),.1),h+1)),s.hut&&sL(n,n.claim(...ey.hut,.13)),cL(n,s);let o=j3(n,s);s.irrigation!==null&&$3(n,s.irrigation,o);let a=Rl(s.terrain);return a!==null&&s.irrigation===null&&!s.fortress&&!s.airbase&&(a.canopy!==void 0?uL(n,s,a):oL(n,s)),{taken:n.taken,lines:n.lines,grown:n.grown}},"layOverlay"),hL=u((s,e,t)=>{let n=oy();return t.forEach(({overlay:i,place:r})=>uy(i,r,n)),hy(s,e,n)},"overlayMesh"),hy=u((s,e,t)=>{let n=new Float32Array(t.positions);for(let i=0;i<n.length;i+=3)n[i]=n[i]-s,n[i+2]=n[i+2]-e;return{u:s,v:e,positions:n,normals:new Float32Array(t.normals),colours:new Float32Array(t.colours)}},"meshOf"),$w=hL;var Kw=u((s,e)=>Math.imul(s,73856093)^Math.imul(e,19349663),"squareSeed"),Hr,tn,Wi,Ll,Iu,li,ci,hn,Nl,ia,Wr,sa,Xr,qr,Lu,Nu,nt,py,my,gy,Zw,Jw,xy,Ru,by,vp,Cu,Mp,Pu,yy=class yy{constructor(e){G(this,nt);G(this,Hr);G(this,tn);G(this,Wi,[]);G(this,Ll);G(this,Iu);G(this,li);G(this,ci,new Set);G(this,hn,null);G(this,Nl,null);G(this,ia,new Map);G(this,Wr,new Map);G(this,sa,u(()=>{},"#keptCity"));G(this,Xr,!0);G(this,qr,[0,0]);G(this,Lu);G(this,Nu);k(this,li,e);let t=e.topology(),n=e.width(),i=e.height(),r=t.wrapsY();this.layout=yw({width:n,height:i,topologyId:e.topologyId(),wrapsY:r}),k(this,Hr,vw({layout:this.layout,source:{width:n,height:i,wrapsY:r,terrainAt:u((d,m)=>e.get(d,m).terrain._,"terrainAt"),waterAt:u((d,m)=>e.get(d,m).isWater,"waterAt"),neighbours:u((d,m)=>t.directions().map(g=>t.neighbour(d,m,g)).filter(g=>g!==null),"neighbours")}})),k(this,tn,Mw(this.layout,i));let[o,a]=this.layout.centre(0,0),l=Math.max(...this.layout.outline(0,0).map(([d,m])=>Math.hypot(d-o,m-a))),c=Math.max(...t.directions().map(d=>t.offset(d,0,0)).map(([d,m])=>{let[g,_]=this.layout.centre(d,m);return Math.hypot(g-o,_-a)}));k(this,Ll,1.2+l+rr*Math.SQRT2+Math.max((ps.reach-1)*c,c/2+rr*Math.SQRT2+mp)),k(this,Iu,l+ly+Math.max(f(this,tn).spacingU,f(this,tn).spacingV));let h=this.layout.outline(0,0),p=h.flatMap(([d,m],g)=>{let[_,x]=h[(g+1)%h.length],b=Math.hypot(_-d,x-m);return b===0?[]:[{away:Math.abs((_-d)*(a-m)-(x-m)*(o-d))/b,normal:[(x-m)/b,(d-_)/b]}]});k(this,Lu,Math.min(...p.map(({away:d})=>d))),k(this,Nu,Math.min(...p.map(({away:d,normal:[m,g]})=>d/(Math.abs(m)+Math.abs(g)))))}surfaceAt(e,t,n=new Map){let{spacingU:i,spacingV:r}=f(this,tn),o=Math.floor(e/i),a=Math.floor(t/r),l=e/i-o,c=t/r-a,h=u((_,x)=>{let b=`${_},${x}`,v=n.get(b);return v===void 0&&(v=f(this,Hr).height(_*i,x*r),n.set(b,v)),v},"at"),p=h(o,a),d=h(o+1,a),m=h(o,a+1);if(l+c<=1)return p+(d-p)*l+(m-p)*c;let g=h(o+1,a+1);return g+(m-g)*(1-l)+(d-g)*(1-c)}ground(){let{chunksU:e,chunksV:t,stepsU:n,stepsV:i,spacingU:r,spacingV:o}=f(this,tn);return{columns:e*n,rows:t*i,spacingU:r,spacingV:o,wrapsV:this.layout.period().v!==null}}extentV(){return f(this,tn).chunksV*f(this,tn).stepsV*f(this,tn).spacingV}heightAt(e,t){return f(this,Hr).height(e,t)}queueAll(e,t){let{chunksU:n,chunksV:i}=f(this,tn),r=[];for(let o=0;o<i;o++)for(let a=0;a<n;a++)r.push(`${a},${o}`);k(this,Wi,R(this,nt,Pu).call(this,r,e,t)),k(this,qr,[e,t]),r.forEach(o=>f(this,ci).add(o)),R(this,nt,gy).call(this)}changed(e,t,n,i=!1){if(e.length===0&&!i)return[];k(this,qr,[t,n]),R(this,nt,py).call(this,e.length===0?[...R(this,nt,Cu).call(this).values()].flat():R(this,nt,Mp).call(this,e));let r=f(this,Hr).refresh(i?void 0:e);if(r.length===0)return r;let o=Qb(f(this,tn),this.layout,r,f(this,Ll)).map(([a,l])=>`${a},${l}`);return R(this,nt,gy).call(this,Qb(f(this,tn),this.layout,r,f(this,Ll)+f(this,Iu)).map(([a,l])=>`${a},${l}`)),k(this,Wi,R(this,nt,Pu).call(this,[...new Set([...f(this,Wi),...o])],t,n)),r}showTowns(e,t,n){if(e===f(this,Xr))return;let i=[...R(this,nt,Cu).call(this).values()].flat().filter(([r,o])=>R(this,nt,my).call(this,r,o));k(this,Xr,e),k(this,qr,[t,n]),R(this,nt,py).call(this,R(this,nt,Mp).call(this,i))}refocus(e,t){k(this,Wi,R(this,nt,Pu).call(this,f(this,Wi),e,t)),k(this,qr,[e,t])}pending(){return f(this,Wi).length}overlaysPending(){return f(this,ci).size+(f(this,hn)===null||f(this,ci).has(f(this,hn).key)?0:1)}build(e,t){let n=performance.now(),i=u(()=>t!==null&&performance.now()-n>=t,"spent");for(;f(this,Wi).length>0;){if(i())return;let o=f(this,Wi).shift(),[a,l]=o.split(",").map(Number);e.setChunk(a,l,Sw(f(this,tn),f(this,Hr),a,l)),f(this,ci).add(o)}let r=!1;for(;f(this,ci).size>0||f(this,hn)!==null;){if(f(this,hn)!==null&&f(this,ci).has(f(this,hn).key)&&k(this,hn,null),f(this,hn)===null){if(r&&i())return;let g=R(this,nt,Pu).call(this,[...f(this,ci)],...f(this,qr))[0],_=R(this,nt,Cu).call(this).get(g)??[],x=R(this,nt,Jw).call(this,g,_);if(f(this,ci).delete(g),x!==null){let[b,v]=g.split(",").map(Number);_.forEach(([w,M],A)=>f(this,ia).set(`${w},${M}`,x.signatures[A])),e.setOverlay(b,v,x.mesh),r=!0;continue}k(this,hn,{key:g,squares:_,done:0,laid:oy(),signatures:[],heights:new Map,keep:!0})}let o=f(this,hn);for(;o.done<o.squares.length;){let[g,_]=o.squares[o.done],x=R(this,nt,by).call(this,g,_,o.heights);if(o.signatures.push(f(this,ia).get(`${g},${_}`)),o.done++,x!==null&&uy(x.overlay,x.place,o.laid),o.done<o.squares.length&&i())return}let[a,l]=o.key.split(",").map(Number),{stepsU:c,stepsV:h,spacingU:p,spacingV:d}=f(this,tn),m=o.laid.positions.length===0?null:hy(a*c*p,l*h*d,o.laid);if(k(this,hn,null),o.keep){let g={signatures:o.signatures,mesh:m};f(this,Wr).set(o.key,R(this,nt,Mp).call(this,o.squares).some(([_,x])=>R(this,nt,my).call(this,_,x))?{...f(this,Wr).get(o.key),[f(this,Xr)?"shown":"hidden"]:g}:{shown:g,hidden:g})}e.setOverlay(a,l,m),r=!0}}keepCities(e){k(this,sa,e)}roadPath(e,t,n,i){let r=f(this,li).topology(),o=u((M,A,E,y)=>{let S=r.directions().find(I=>{let P=r.neighbour(M,A,I);return P!==null&&P[0]===E&&P[1]===y});return S===void 0?null:r.offset(S,M,A)},"offsetTo"),a=o(e,t,n,i),l=o(n,i,e,t);if(a===null||l===null)return null;let c=u((M,A,E)=>{let y=R(this,nt,Ru).call(this,M,A),S=u(P=>P!==null&&P.joins.some(([D,U])=>D===E[0]&&U===E[1]),"joins"),I=this.layout.centre(M,A);if(S(y?.road??null))return _p({centre:I,toward:u(([P,D])=>this.layout.centre(M+P,A+D),"toward"),seed:Kw(M,A)},E).points;if(S(y?.railroad??null)){let[P,D]=this.layout.centre(M+E[0],A+E[1]);return[[I[0],I[1]],[(I[0]+P)/2,(I[1]+D)/2]]}return null},"half"),h=c(e,t,a),p=c(n,i,l);if(h===null&&p===null)return null;let d=this.layout.centre(e,t),m=this.layout.centre(n,i),g=this.layout.centre(e+a[0],t+a[1]),_=this.layout.centre(n+l[0],i+l[1]),x=[(d[0]+g[0])/2,(d[1]+g[1])/2],b=[(m[0]+_[0])/2,(m[1]+_[1])/2],v=[b[0]-x[0],b[1]-x[1]];return[...(h??[d,x]).map(([M,A])=>[M+v[0],A+v[1]]),...(p??[m,b]).slice(0,-1).reverse()].map(([M,A])=>[M-m[0],A-m[1]])}overlayOf(e,t){let{stepsU:n,stepsV:i,spacingU:r,spacingV:o}=f(this,tn),a=new Map,l=(R(this,nt,Cu).call(this).get(`${e},${t}`)??[]).flatMap(([c,h])=>R(this,nt,by).call(this,c,h,a)??[]);return l.length===0?null:$w(e*n*r,t*i*o,l)}overlayKeyOf(e,t){return R(this,nt,vp).call(this,e,t)}};Hr=new WeakMap,tn=new WeakMap,Wi=new WeakMap,Ll=new WeakMap,Iu=new WeakMap,li=new WeakMap,ci=new WeakMap,hn=new WeakMap,Nl=new WeakMap,ia=new WeakMap,Wr=new WeakMap,sa=new WeakMap,Xr=new WeakMap,qr=new WeakMap,Lu=new WeakMap,Nu=new WeakMap,nt=new WeakSet,py=u(function(e){e.forEach(([t,n])=>{let i=R(this,nt,vp).call(this,t,n);if(f(this,ci).has(i)||f(this,hn)?.key===i&&!R(this,nt,Zw).call(this,f(this,hn),t,n))return;JSON.stringify(R(this,nt,Ru).call(this,t,n))!==(f(this,ia).get(`${t},${n}`)??"null")&&f(this,ci).add(i)})},"#layAgain"),my=u(function(e,t){return!!f(this,li).get(e,t).city||!!f(this,sa).call(this,e,t)},"#townAt"),gy=u(function(e){let t=e===void 0?null:new Set(e);t===null?f(this,Wr).clear():t.forEach(n=>f(this,Wr).delete(n)),f(this,hn)!==null&&(t===null||t.has(f(this,hn).key))&&(f(this,hn).keep=!1)},"#landChanged"),Zw=u(function(e,t,n){return e.squares.slice(0,e.done).some(([i,r])=>i===t&&r===n)},"#reached"),Jw=u(function(e,t){let n=f(this,Wr).get(e);if(n===void 0)return null;let i=t.map(([r,o])=>JSON.stringify(R(this,nt,Ru).call(this,r,o)));return[n.shown,n.hidden].find(r=>r!==void 0&&r.signatures.length===i.length&&r.signatures.every((o,a)=>o===i[a]))??null},"#madeAs"),xy=u(function(e,t){let n=f(this,li).get(e,t),i=f(this,Xr)?f(this,sa).call(this,e,t):null;return i===void 0?n:{...n,city:i}},"#shownAt"),Ru=u(function(e,t){let n=f(this,li).topology(),i=Aw(R(this,nt,xy).call(this,e,t),n.directions().flatMap(o=>{let a=n.neighbour(e,t,o);return a===null?[]:[{offset:n.offset(o,e,t),tile:R(this,nt,xy).call(this,a[0],a[1])}]})),r=f(this,sa).call(this,e,t);return i!==null&&!f(this,Xr)&&(r===void 0?f(this,li).get(e,t).city:r)?{...i,front:!0}:i},"#overlayAt"),by=u(function(e,t,n){let i=R(this,nt,Ru).call(this,e,t);if(f(this,ia).set(`${e},${t}`,JSON.stringify(i)),i===null)return null;let[r,o]=this.layout.centre(e,t),a=f(this,li).topology();return{overlay:i,place:{centre:[r,o],toward:u(([l,c])=>this.layout.centre(e+l,t+c),"toward"),radius:f(this,Lu),inner:f(this,Nu),heightAt:u((l,c)=>this.surfaceAt(l,c,n),"heightAt"),seed:Kw(e,t),latitude:Math.min(1,Math.abs(2*o/this.extentV()-1)),outline:this.layout.outline(e,t),owns:u((l,c)=>{let[h,p]=this.layout.tileAt(l,c);return h===e&&p===t},"owns"),around:a.directions().filter(l=>a.neighbour(e,t,l)!==null).map(l=>a.offset(l,e,t)),period:this.layout.period()}}},"#square"),vp=u(function(e,t){let{chunksU:n,chunksV:i,stepsU:r,stepsV:o,spacingU:a,spacingV:l}=f(this,tn),[c,h]=this.layout.centre(e,t),p=Math.floor(c/(r*a)),d=Math.floor(h/(o*l));return`${Math.min(n-1,Math.max(0,p))},${Math.min(i-1,Math.max(0,d))}`},"#chunkOf"),Cu=u(function(){if(f(this,Nl)===null){let e=new Map;for(let t=0;t<f(this,li).height();t++)for(let n=0;n<f(this,li).width();n++){let i=R(this,nt,vp).call(this,n,t);e.set(i,[...e.get(i)??[],[n,t]])}k(this,Nl,e)}return f(this,Nl)},"#chunksOfSquares"),Mp=u(function(e){let t=f(this,li).topology(),n=new Map;return e.forEach(([i,r])=>[[i,r],...t.directions().map(o=>t.neighbour(i,r,o)).filter(o=>o!==null)].forEach(o=>n.set(o.join(),o))),[...n.values()]},"#besides"),Pu=u(function(e,t,n){let{stepsU:i,stepsV:r,spacingU:o,spacingV:a}=f(this,tn),l=i*o,c=r*a,{u:h,v:p}=this.layout.period(),d=u((g,_)=>Math.abs(_===null?g:g-_*Math.round(g/_)),"round"),m=u(g=>{let[_,x]=g.split(",").map(Number);return Math.hypot(d((_+.5)*l-t,h),d((x+.5)*c-n,p))},"distance");return[...e].sort((g,_)=>m(g)-m(_))},"#nearestFirst"),u(yy,"Land");var fy=yy,jw=fy;var dL=u(()=>typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches===!0,"prefersReducedMotion"),Xi=dL;var Qw=u((s,e,t=100)=>{let n=s.filter(({time:a})=>e-a<=t);if(n.length<2)return{x:0,y:0};let i=n[0],r=n[n.length-1],o=r.time-i.time;return o<=0?{x:0,y:0}:{x:(r.x-i.x)/o,y:(r.y-i.y)/o}},"releaseVelocity");var fL=8,pL=.92,mL=.02,e1=3,gL=50,xL=8,bL=10,t1=250,Du,Uu,Dl,Ul,ra,Yr,_y=class _y{constructor({pointerId:e,clientX:t,clientY:n,timeStamp:i}){G(this,Du);G(this,Uu);G(this,Dl);G(this,Ul);G(this,ra,!1);G(this,Yr);this.pointerId=e,k(this,Du,t),k(this,Uu,n),k(this,Dl,t),k(this,Ul,n),k(this,Yr,[{x:t,y:n,time:i}])}dragging(){return f(this,ra)}move({pointerId:e,clientX:t,clientY:n,timeStamp:i}){if(e!==this.pointerId||!f(this,ra)&&Math.hypot(t-f(this,Du),n-f(this,Uu))<fL)return null;let r=!f(this,ra),o=f(this,Dl)-t,a=f(this,Ul)-n;return k(this,ra,!0),k(this,Dl,t),k(this,Ul,n),f(this,Yr).push({x:t,y:n,time:i}),f(this,Yr).length>20&&f(this,Yr).shift(),{dx:o,dy:a,started:r}}releaseVelocity(e){return Qw(f(this,Yr),e)}};Du=new WeakMap,Uu=new WeakMap,Dl=new WeakMap,Ul=new WeakMap,ra=new WeakMap,Yr=new WeakMap,u(_y,"Press");var Sp=_y,ys,Ou,vy=class vy{constructor(e){G(this,ys,null);G(this,Ou);k(this,Ou,e)}start(e){this.stop();let t=Math.hypot(e.x,e.y),n=t>e1?e1/t:1,i=e.x*n,r=e.y*n,o=null,a=u(l=>{let c=o===null?16:Math.min(l-o,64);if(o=l,Math.hypot(i,r)<mL){k(this,ys,null);return}f(this,Ou).call(this,-i*c,-r*c);let h=Math.pow(pL,c/16);i*=h,r*=h,k(this,ys,window.requestAnimationFrame(a))},"step");k(this,ys,window.requestAnimationFrame(a))}gliding(){return f(this,ys)!==null}stop(){f(this,ys)!==null&&(window.cancelAnimationFrame(f(this,ys)),k(this,ys,null))}};ys=new WeakMap,Ou=new WeakMap,u(vy,"Glide");var wp=vy,oa,Fu,Bu,Ol,My=class My{constructor(){G(this,oa,0);G(this,Fu,0);G(this,Bu,-1/0);G(this,Ol,0)}turned(e,t){let n=e.deltaMode===0,i=e.deltaY;if(i===0||e.ctrlKey&&t!==null&&e.timeStamp-t<=t1)return 0;let r=Math.sign(i),o=e.timeStamp-f(this,Bu)>t1||r!==f(this,Fu);if(k(this,Bu,e.timeStamp),k(this,Fu,r),o&&(k(this,oa,0),k(this,Ol,0)),n&&!e.ctrlKey&&f(this,Ol)>=bL)return 0;if(!o&&n){if(k(this,oa,f(this,oa)+i),Math.abs(f(this,oa))<(e.ctrlKey?xL:gL))return 0;k(this,oa,0)}return n&&!e.ctrlKey&&k(this,Ol,f(this,Ol)+1),i<0?1:-1}};oa=new WeakMap,Fu=new WeakMap,Bu=new WeakMap,Ol=new WeakMap,u(My,"WheelTurn");var Ep=My;var yL=350,_L=.006,n1=.004,_s,gn,Fn,Fl,vs,qi,Cp,wi,Ei,$r,Bl,ui,Kr,Ue,Si,Tp,Ap,i1,wy,or,Ey,s1,ar,r1,o1,a1,l1,ku,c1,u1,h1,Rp,Ty=class Ty{constructor(e,t,n=null){G(this,Ue);G(this,_s);G(this,gn);G(this,Fn,null);G(this,Fl,[0,0]);G(this,vs,null);G(this,qi);G(this,Cp,new Ep);G(this,wi,new Map);G(this,Ei,null);G(this,$r,null);G(this,Bl,[]);G(this,ui);G(this,Kr,null);k(this,_s,e),k(this,gn,t),k(this,ui,n),k(this,qi,new wp((i,r)=>{let[o,a]=R(this,Ue,i1).call(this);R(this,Ue,Ey).call(this,[o,a],[o-i,a-r])})),R(this,Ue,Si).call(this,"pointerdown",i=>R(this,Ue,s1).call(this,i)),R(this,Ue,Si).call(this,"pointermove",i=>R(this,Ue,o1).call(this,i)),R(this,Ue,Si).call(this,"pointerup",i=>R(this,Ue,a1).call(this,i)),R(this,Ue,Si).call(this,"pointercancel",i=>R(this,Ue,l1).call(this,i)),R(this,Ue,Si).call(this,"wheel",i=>R(this,Ue,u1).call(this,i),{passive:!1}),R(this,Ue,Si).call(this,"gesturestart",i=>R(this,Ue,Rp).call(this,i,"start"),{passive:!1}),R(this,Ue,Si).call(this,"gesturechange",i=>R(this,Ue,Rp).call(this,i,"change"),{passive:!1}),R(this,Ue,Si).call(this,"gestureend",i=>R(this,Ue,Rp).call(this,i,"end"),{passive:!1}),R(this,Ue,Si).call(this,"contextmenu",i=>R(this,Ue,r1).call(this,i)),R(this,Ue,Si).call(this,"pointerleave",()=>f(this,ui)?.hover(null)),R(this,Ue,Si).call(this,"touchstart",i=>i.preventDefault(),{passive:!1})}dragging(){return f(this,Fn)?.dragging()===!0||f(this,vs)!==null}moving(){return this.dragging()||f(this,Ei)!==null||f(this,qi).gliding()}dispose(){f(this,qi).stop(),R(this,Ue,ar).call(this),f(this,Bl).forEach(([e,t,n])=>f(this,_s).removeEventListener(e,t,n)),k(this,Bl,[])}};_s=new WeakMap,gn=new WeakMap,Fn=new WeakMap,Fl=new WeakMap,vs=new WeakMap,qi=new WeakMap,Cp=new WeakMap,wi=new WeakMap,Ei=new WeakMap,$r=new WeakMap,Bl=new WeakMap,ui=new WeakMap,Kr=new WeakMap,Ue=new WeakSet,Si=u(function(e,t,n){f(this,_s).addEventListener(e,t,n),f(this,Bl).push([e,t,n])},"#listen"),Tp=u(function(){return{width:f(this,_s).clientWidth||1,height:f(this,_s).clientHeight||1}},"#box"),Ap=u(function([e,t]){let{width:n,height:i}=R(this,Ue,Tp).call(this);return[e/n*2-1,1-t/i*2]},"#screen"),i1=u(function(){let{width:e,height:t}=R(this,Ue,Tp).call(this);return[e/2,t/2]},"#middle"),wy=u(function(){let{width:e,height:t}=R(this,Ue,Tp).call(this);return e/t},"#aspect"),or=u(function(e){let t=f(this,_s).getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]},"#at"),Ey=u(function(e,t){f(this,gn).setOrbit(GS(f(this,gn).orbit(),f(this,gn).lookHeight(),R(this,Ue,Ap).call(this,e),R(this,Ue,Ap).call(this,t),R(this,Ue,wy).call(this)))},"#pan"),s1=u(function(e){if(f(this,qi).stop(),f(this,ui)?.hover(null),e.pointerType==="touch"&&(f(this,wi).set(e.pointerId,R(this,Ue,or).call(this,e)),f(this,wi).size===2)){k(this,Fn,null),R(this,Ue,ar).call(this),k(this,Ei,R(this,Ue,ku).call(this));return}if(e.isPrimary&&e.button!==2){if(f(this,_s).setPointerCapture?.(e.pointerId),e.button===1||e.button===0&&e.altKey){e.preventDefault(),k(this,vs,{pointerId:e.pointerId,x:e.clientX,y:e.clientY});return}if(e.button===0){let t=new Sp(e),[n,i]=R(this,Ue,or).call(this,e),{clientX:r,clientY:o}=e;k(this,Fn,t),k(this,Fl,[n,i]),R(this,Ue,ar).call(this),k(this,Kr,window.setTimeout(()=>{k(this,Kr,null),f(this,Fn)===t&&!t.dragging()&&f(this,ui)?.menu(n,i,r,o,!0)===!0&&k(this,Fn,null)},yL))}}},"#down"),ar=u(function(){f(this,Kr)!==null&&(window.clearTimeout(f(this,Kr)),k(this,Kr,null))},"#stopHold"),r1=u(function(e){if(f(this,ui)===null||!f(this,ui).menuOnRightClick()||(e.preventDefault(),f(this,ui).menuOpen()))return;let[t,n]=R(this,Ue,or).call(this,e);f(this,ui).menu(t,n,e.clientX,e.clientY,!1)&&(R(this,Ue,ar).call(this),k(this,Fn,null))},"#rightClick"),o1=u(function(e){if(f(this,wi).has(e.pointerId)&&(f(this,wi).set(e.pointerId,R(this,Ue,or).call(this,e)),f(this,Ei)!==null)){R(this,Ue,c1).call(this);return}let t=f(this,vs);if(t!==null&&t.pointerId===e.pointerId){let r=f(this,gn).orbit();f(this,gn).setOrbit(Zo({...r,yaw:r.yaw-(e.clientX-t.x)*_L,pitch:r.pitch+(e.clientY-t.y)*n1})),t.x=e.clientX,t.y=e.clientY;return}let n=f(this,Fn);if(n===null){if(e.pointerType==="mouse"&&e.buttons===0&&!f(this,qi).gliding()){let[r,o]=R(this,Ue,or).call(this,e);f(this,ui)?.hover({x:r,y:o,clientX:e.clientX,clientY:e.clientY})}return}if(n.move(e)===null)return;R(this,Ue,ar).call(this);let i=R(this,Ue,or).call(this,e);R(this,Ue,Ey).call(this,f(this,Fl),i),k(this,Fl,i)},"#move"),a1=u(function(e){if(f(this,wi).delete(e.pointerId),f(this,Ei)!==null){k(this,Ei,f(this,wi).size<2?null:R(this,Ue,ku).call(this));return}if(f(this,vs)?.pointerId===e.pointerId){k(this,vs,null);return}let t=f(this,Fn);if(!(t===null||t.pointerId!==e.pointerId)){if(k(this,Fn,null),R(this,Ue,ar).call(this),!t.dragging()){let[n,i]=R(this,Ue,or).call(this,e);f(this,ui)?.click(n,i,e.clientX,e.clientY);return}Xi()||f(this,qi).start(t.releaseVelocity(e.timeStamp))}},"#up"),l1=u(function(e){f(this,wi).delete(e.pointerId),f(this,Ei)!==null&&k(this,Ei,f(this,wi).size<2?null:R(this,Ue,ku).call(this)),f(this,Fn)?.pointerId===e.pointerId&&(k(this,Fn,null),R(this,Ue,ar).call(this)),f(this,vs)?.pointerId===e.pointerId&&k(this,vs,null)},"#cancel"),ku=u(function(){let[e,t]=[...f(this,wi).values()];return e===void 0||t===void 0?null:{distance:Math.max(1,Math.hypot(t[0]-e[0],t[1]-e[1])),angle:Math.atan2(t[1]-e[1],t[0]-e[0]),middleY:(e[1]+t[1])/2,orbit:f(this,gn).orbit()}},"#measurePair"),c1=u(function(){let e=f(this,Ei),t=R(this,Ue,ku).call(this);e===null||t===null||f(this,gn).setOrbit(Zo({...e.orbit,distance:e.orbit.distance*(e.distance/t.distance),yaw:e.orbit.yaw-(t.angle-e.angle),pitch:e.orbit.pitch+(t.middleY-e.middleY)*n1}))},"#twoFingers"),u1=u(function(e){e.preventDefault();let t=f(this,Cp).turned(e,f(this,$r)?.at??null);t!==0&&(f(this,qi).stop(),R(this,Ue,h1).call(this,t,R(this,Ue,or).call(this,e)))},"#wheelTurned"),h1=u(function(e,t){let n=f(this,gn).orbit(),i=Ml(n,e),r=vl(n,f(this,gn).lookHeight(),R(this,Ue,Ap).call(this,t),R(this,Ue,wy).call(this));if(r===null||i.distance===n.distance){f(this,gn).setOrbit(i);return}let o=1-i.distance/n.distance;f(this,gn).setOrbit({...i,focus:[n.focus[0]+(r[0]-n.focus[0])*o,n.focus[1]+(r[1]-n.focus[1])*o]})},"#zoomAbout"),Rp=u(function(e,t){if(e.preventDefault(),f(this,Ei)!==null){k(this,$r,null);return}if(t==="end"){k(this,$r,null);return}if(t==="start"){f(this,qi).stop(),k(this,Fn,null),R(this,Ue,ar).call(this),k(this,$r,{orbit:f(this,gn).orbit(),at:e.timeStamp});return}let n=f(this,$r);n!==null&&(n.at=e.timeStamp,f(this,gn).setOrbit(Zo({...n.orbit,distance:n.orbit.distance/Math.max(.05,e.scale),yaw:n.orbit.yaw-e.rotation*Math.PI/180})))},"#safari"),u(Ty,"CameraInput");var Sy=Ty,d1=Sy;var vL=["#9a9a9a","#4a4a4a"],zu=u(s=>{let e=s.civilization?.attributes?.find(t=>t.name==="colors")?.value;return!Array.isArray(e)||typeof e[0]!="string"?vL:[e[0],typeof e[1]=="string"?e[1]:e[0]]},"coloursOf"),Ay=u((s,e)=>s.find(t=>t.id===e)??[...s].sort((t,n)=>(n.defence?.value??0)-(t.defence?.value??0))[0]??null,"unitOnTop"),ML=u(s=>{let{current:e,max:t}=s.hitPoints??{current:0,max:0};return t>0&&e<t?Math.max(0,e/t):null},"healthOf"),SL=u((s,e,t,n={},i=()=>0,r=1,o=()=>null)=>{let a=s.units??[],l=Ay(a,e),c=l!==null&&l.id===e,h=l===null?null:o(l._),p=t&&s.city?{name:n.cityName?.(s.city)??s.city.name,size:s.city.growth?.size??1,colours:zu(s.city.player),walled:s.city.walled===!0,disorder:s.city.civilDisorderDeclared===!0}:null,d=l!==null&&(t||c)?{id:l.id,type:l._,kinds:l.__??[],colours:zu(l.player),count:a.length,active:c,busy:l.busy!==null&&l.busy!==void 0,fortified:(l.improvements??[]).some(({_:m})=>m==="Fortified"),veteran:(l.improvements??[]).some(({_:m})=>m==="Veteran"),health:ML(l),status:(l.busy?n.unitStatus?.(l):null)||null,facing:i(l),size:r,...h===null?{}:{model:h}}:null;return p===null&&d===null?null:{city:p,unit:d,inCity:!!s.city}},"markerFor"),Ry=SL;var x1={step:250,ramp:100,most:2e3},b1={step:125,ramp:50,most:1e3},y1=u(s=>({step:s.step/2,ramp:s.ramp/2,most:s.most/2}),"quicker"),wL=50,f1=.3,p1=1,EL=.05,TL=.02,Cy=u((s,e)=>s.x===e.x&&s.y===e.y,"sameSquare"),m1=u((s,e)=>{let{started:t,from:n,speed:i,rising:r,rise:o,top:a,going:l,stopping:c,fall:h,to:p}=s,d=Math.max(0,e-t);if(d<r)return{along:n+i*d+o*d*d/2,speed:i+o*d};let m=n+(i+a)/2*r;if(d<r+l)return{along:m+a*(d-r),speed:a};let g=m+a*l,_=d-r-l;return _<c?{along:g+a*_-h*_*_/2,speed:a-h*_}:{along:p,speed:0}},"motionAt"),Gu=u(s=>s.started+s.rising+s.going+s.stopping,"motionEnds"),g1=u((s,e,t,n,i)=>{let r=Math.max(0,n-e),o=Math.max(1,i.ramp),a=Math.max(1/i.step,i.most>o*2?r/(i.most-o):0),l=a/o;if(r<=0)return{started:s,from:n,speed:0,rising:0,rise:0,top:0,going:0,stopping:0,fall:0,to:n};if(t*t/(2*l)>=r){let x=2*r/t;return{started:s,from:e,speed:t,rising:0,rise:0,top:t,going:0,stopping:x,fall:t/x,to:n}}let c=Math.min(a,Math.sqrt(l*r+t*t/2)),h=Math.abs(c-t)/l,p=c>=t?l:-l,d=c/l,m=(t+c)/2*h,g=c*d/2,_=Math.max(0,(r-m-g)/c);return{started:s,from:e,speed:t,rising:h,rise:p,top:c,going:_,stopping:d,fall:l,to:n}},"plan"),kl=u((s,e,t)=>t===null?s:s+t*Math.round((e-s)/t),"nearest"),Vu=u((s,e)=>s[0]===e[0]&&s[1]===e[1]?null:Math.atan2(e[0]-s[0],e[1]-s[1]),"wayOf"),Py=u(s=>s*s*(3-2*s),"eased"),zl=u((s,e,t)=>{let n=e-s-Math.PI*2*Math.round((e-s)/(Math.PI*2));return s+n*t},"turnTowards"),Gl,An,Ti,Xu,qu,rt,_1,v1,Ly,Ny,M1,Dy,Pp,Hu,Wu,Uy,aa,Oy=class Oy{constructor(e){G(this,rt);G(this,Gl);G(this,An,new Map);G(this,Ti,new Map);G(this,Xu,[]);G(this,qu,0);k(this,Gl,e)}walking(e){return f(this,Ti).has(e)}size(){return f(this,An).size}step(e,t,n,i,r,o,a,l=!1){let c=f(this,Ti).get(e),h=c===void 0?void 0:f(this,An).get(c),p=h===void 0?i:R(this,rt,Pp).call(this,h,o),d=h===void 0?0:R(this,rt,Wu).call(this,h,R(this,rt,Hu).call(this,h,o)),m=[...f(this,An).values()].find(g=>g!==h&&(l||!g.flies)&&R(this,rt,_1).call(this,g,t,n,o)&&R(this,rt,M1).call(this,R(this,rt,Pp).call(this,g,g.stepped),h===void 0?i:R(this,rt,Pp).call(this,h,g.stepped))&&f1*Math.abs(Py(R(this,rt,Wu).call(this,g,R(this,rt,Hu).call(this,g,o)))-Py(d))<TL);if(m!==void 0)return h!==void 0&&R(this,rt,Ny).call(this,h,e),m.units.push(e),f(this,Ti).set(e,m.id),m.id;if(h!==void 0&&Cy(h.squares[h.squares.length-1],t)){if(h.units.length>1){let g={...h,id:`walk-${++Di(this,qu)._}`,units:h.units.filter(_=>_!==e),points:[...h.points],squares:[...h.squares]};f(this,An).set(g.id,g),g.units.forEach(_=>f(this,Ti).set(_,g.id)),h.units=[e]}return R(this,rt,Ly).call(this,h,n,r,o,a,l),h.id}return h!==void 0&&R(this,rt,Ny).call(this,h,e),R(this,rt,v1).call(this,e,t,n,p,r,o,a,{flies:l,climbed:d})}at(e){let t=[],n=[];return f(this,An).forEach(i=>{let r=R(this,rt,aa).call(this,i,e);if(e>=Gu(i.motion)){n.push(r),R(this,rt,Dy).call(this,i);return}t.push(r)}),{going:t,ended:n}}dropped(){return f(this,Xu).splice(0)}endsAt(e){let t=f(this,Ti).get(e),n=t===void 0?void 0:f(this,An).get(t);return n===void 0?null:Gu(n.motion)}nextEnd(){let e=null;return f(this,An).forEach(t=>{let n=Gu(t.motion);e=e===null?n:Math.min(e,n)}),e}endWhere(e,t){let n=[];return f(this,An).forEach(i=>{e(i.units)&&(n.push(R(this,rt,aa).call(this,i,Math.max(t,Gu(i.motion)))),R(this,rt,Dy).call(this,i))}),n}endAll(e){let t=[...f(this,An).values()].map(n=>R(this,rt,aa).call(this,n,Math.max(e,Gu(n.motion))));return f(this,An).clear(),f(this,Ti).clear(),t}};Gl=new WeakMap,An=new WeakMap,Ti=new WeakMap,Xu=new WeakMap,qu=new WeakMap,rt=new WeakSet,_1=u(function(e,t,n,i){let r=e.squares.length-1;return r>0&&i-e.stepped<=wL&&Cy(e.squares[r-1],t)&&Cy(e.squares[r],n)},"#justMade"),v1=u(function(e,t,n,i,r,o,a,{flies:l,climbed:c}){let h=`walk-${++Di(this,qu)._}`,p={id:h,units:[e],from:t,points:[i],squares:[t],stepped:o,motion:g1(o,0,0,0,a),turned:null,flies:l,flown:0,climb:{from:c,at:0}};return f(this,An).set(h,p),f(this,Ti).set(e,h),R(this,rt,Ly).call(this,p,n,r,o,a,l),h},"#setOff"),Ly=u(function(e,t,n,i,r,o){let{u:a,v:l}=f(this,Gl),c=e.points[e.points.length-1],h=c.middle??c.at,{along:p,speed:d}=m1(e.motion,i),m=Math.max(0,Math.floor(p)-1),g=e.points.length>1?R(this,rt,aa).call(this,e,i).facing:null,_=e.points.length-1,x=p-(_-1),b=R(this,rt,Hu).call(this,e,i);e.points.length>1&&(e.climb={from:R(this,rt,Wu).call(this,e,b),at:e.flown+b}),e.flies=o,c.middle!==void 0&&x*Math.hypot(c.middle[0]-c.at[0],c.middle[1]-c.at[1])<.01&&(e.points[_]={at:c.middle,lift:0,middle:c.middle,...c.via===void 0?{}:{via:c.via}}),e.points.splice(0,m),e.squares.splice(0,m),e.flown+=m,e.points.push({at:[kl(n.at[0],c.at[0],a),kl(n.at[1],c.at[1],l)],lift:n.lift,...n.middle===void 0?{}:{middle:[kl(n.middle[0],h[0],a),kl(n.middle[1],h[1],l)]},...n.via===void 0?{}:{via:n.via}}),e.squares.push(t),e.stepped=i,e.motion=g1(i,p-m,d,e.points.length-1,r),e.turned=null,g!==null&&(e.turned={offset:zl(0,g-R(this,rt,aa).call(this,e,i).facing,1),at:i,over:r.step/2})},"#goOn"),Ny=u(function(e,t){e.units=e.units.filter(n=>n!==t),f(this,Ti).delete(t),e.units.length===0&&(f(this,An).delete(e.id),f(this,Xu).push(e.id))},"#leave"),M1=u(function(e,t){let{u:n,v:i}=f(this,Gl);return Math.hypot(kl(e.at[0],t.at[0],n)-t.at[0],kl(e.at[1],t.at[1],i)-t.at[1])<EL},"#beside"),Dy=u(function(e){f(this,An).delete(e.id),e.units.forEach(t=>f(this,Ti).delete(t))},"#end"),Pp=u(function(e,t){let{at:n,lift:i}=R(this,rt,aa).call(this,e,t);return{at:n,lift:i}},"#drawn"),Hu=u(function(e,t){return Math.min(e.points.length-1,Math.max(0,m1(e.motion,t).along))},"#along"),Wu=u(function(e,t){return e.flies?Math.max(0,Math.min(1,e.climb.from+(e.flown+t-e.climb.at)/p1,(e.points.length-1-t)/p1)):0},"#climbed"),Uy=u(function(e,t,n){let i=e.points[t],r=e.points[t+1]??i,o=u(x=>x.middle??x.at,"middle");if(r.via===void 0||r.via.length===0)return{at:[i.at[0]+(r.at[0]-i.at[0])*n,i.at[1]+(r.at[1]-i.at[1])*n],way:r===i?null:Vu(o(i),o(r))};let[a,l]=o(r),c=[i.at,...r.via.map(([x,b])=>[a+x,l+b]),r.at],h=c.slice(1).map((x,b)=>Math.hypot(x[0]-c[b][0],x[1]-c[b][1])),p=h.reduce((x,b)=>x+b,0),d=Vu(o(i),o(r)),m=c.slice(1).map((x,b)=>Vu(c[b],x)??d??0),g=c.map((x,b)=>{let v=m[b-1],w=m[b];return v===void 0?w:w===void 0?v:zl(v,w,.5)}),_=Math.min(1,Math.max(0,n))*p;for(let x=0;x<h.length;x++){let b=h[x],v=c[x],w=c[x+1];if(_<=b||x===h.length-1){let M=b===0?0:Math.min(1,_/b);return{at:[v[0]+(w[0]-v[0])*M,v[1]+(w[1]-v[1])*M],way:zl(g[x],g[x+1],M)}}_-=b}return{at:[r.at[0],r.at[1]],way:Vu(o(i),o(r))}},"#stepAt"),aa=u(function(e,t){let{points:n,squares:i,turned:r}=e,o=n.length-1,a=R(this,rt,Hu).call(this,e,t),l=Math.min(o-1,Math.floor(a)),c=a-l,h=n[l],p=n[l+1]??h,{at:d,way:m}=R(this,rt,Uy).call(this,e,l,c),g=u((M,A)=>M<0||M>=o?null:R(this,rt,Uy).call(this,e,M,A).way,"way"),_=u(M=>{let A=g(M,1),E=g(M+1,0);return A===null||E===null?null:zl(0,E-A,1)},"turnAt"),x=m??0,b=Vu(h.middle??h.at,p.middle??p.at),v=(()=>{if(c>.75){let M=_(l);if(M!==null)return x+M*(c-.75)*2;if(l===o-1&&b!==null)return zl(x,b,(c-.75)*4)}else if(c<.25){let M=_(l-1);if(M!==null)return x-M*(.5-c*2);if(l===0&&b!==null)return zl(b,x,c*4)}return x})(),w=r!==null&&t-r.at<r.over?v+r.offset*(1-Math.max(0,t-r.at)/r.over):v;return{id:e.id,units:[...e.units],at:d,lift:h.lift+(p.lift-h.lift)*c,aloft:f1*Py(R(this,rt,Wu).call(this,e,a)),facing:w,from:e.from,before:i[o-1]??i[o],to:i[o]}},"#walker"),u(Oy,"Walks");var Iy=Oy,S1=Iy;var AL=u(({kind:s,start:e,duration:t},n)=>{let i=t<=0?1:Math.min(1,Math.max(0,(n-e)/t));return s==="in"?i:1-i},"fadeAt"),Ms,Ip,By=class By{constructor(){G(this,Ms,new Map);G(this,Ip,0)}size(){return f(this,Ms).size}add(e,t,n=500){let i=`fade-${++Di(this,Ip)._}`;return f(this,Ms).set(i,{id:i,kind:e,start:t,duration:n}),i}at(e){let t=[],n=[];return f(this,Ms).forEach((i,r)=>{if(e>=i.start+i.duration){n.push(r),f(this,Ms).delete(r);return}t.push({id:r,kind:i.kind,opacity:AL(i,e)})}),{going:t,ended:n}}end(e){f(this,Ms).delete(e)}endAll(){let e=[...f(this,Ms).keys()];return f(this,Ms).clear(),e}};Ms=new WeakMap,Ip=new WeakMap,u(By,"Fades");var Fy=By,w1=Fy;var Ss,Gy=class Gy{constructor(){G(this,Ss,new Map)}size(){return f(this,Ss).size}trail(e,t,n){let i=f(this,Ss).get(e),[r,o]=i?.points??[];if(i===void 0||r===void 0||o===void 0||n-o.time>=1200){f(this,Ss).set(e,{points:[{at:t,time:n},{at:t,time:n}]});return}r.at=t,r.time=n;let a=t[0]-o.at[0],l=t[1]-o.at[1],c=Math.hypot(a,l),h=Math.floor(c/.04),[p,d]=o.at,m=o.time;i.points.splice(1,0,...Array.from({length:h},(g,_)=>{let x=(h-_)*.04/c;return{at:[p+a*x,d+l*x],time:m+(n-m)*x}}))}at(e){let t=[],n=[];return f(this,Ss).forEach((i,r)=>{if(i.points=i.points.filter(({time:o})=>e-o<1200),i.points.length===0){f(this,Ss).delete(r),n.push(r);return}t.push({id:r,points:i.points.map(({at:o,time:a})=>({at:o,age:Math.max(0,e-a)}))})}),{going:t,gone:n}}endAll(){let e=[...f(this,Ss).keys()];return f(this,Ss).clear(),e}};Ss=new WeakMap,u(Gy,"Wakes");var zy=Gy,ky={start:.03,by:.17,over:.5},RL=.016,CL=.004,E1=u(s=>{let[e]=s,t=[];if(e===void 0)return t;let n=s.map((o,a)=>{let l=s[a-1]??o,c=s[a+1]??o,h=l.at[0]-c.at[0],p=l.at[1]-c.at[1],d=Math.hypot(h,p);return d===0?null:[-p/d,h/d]}),i=s.reduce((o,a,l)=>{let c=s[l-1];return o.push(c===void 0?0:o[l-1]+Math.hypot(a.at[0]-c.at[0],a.at[1]-c.at[1])),o},[]),r=u((o,a)=>{let l=s[o],c=n[o],h=Math.min(1,l.age/1200);if(c==null)return null;let p=ky.start+ky.by*Math.min(1,i[o]/ky.over),d=RL*(1-h),m=[l.at[0]-e.at[0]+c[0]*p*a,l.at[1]-e.at[1]+c[1]*p*a];return[[m[0]-c[0]*d/2,m[1]-c[1]*d/2],[m[0]+c[0]*d/2,m[1]+c[1]*d/2]]},"edges");for(let o=0;o+1<s.length;o++)[1,-1].forEach(a=>{let l=r(o,a),c=r(o+1,a);if(l===null||c===null)return;let[h,p]=l,[d,m]=c;[h,d,p,p,d,m].forEach(([g,_])=>t.push(g,CL,_))});return t},"wakeShape"),T1=zy;var $y={reach:200,back:300,fade:600},A1=u(s=>({reach:s.reach/2,back:s.back/2,fade:s.fade/2}),"quickerBattle"),Ky=.45,Yu=u(s=>s.start+s.pace.reach,"blowAt"),Vy=u(s=>Yu(s)+(s.won?Math.max(s.pace.back,s.pace.fade):s.pace.fade),"battleEnds"),Hy=u(s=>Math.min(1,Math.max(0,s)),"clamp"),PL=u(s=>s*s,"easeIn"),IL=u(s=>s*s*(3-2*s),"easeInOut"),LL=u((s,e)=>{let{reach:t,back:n,fade:i}=s.pace,r=e-Yu(s),o=1-Hy(i<=0?1:r/i);return r<0?{reach:PL(Hy(t<=0?1:(e-s.start)/t)),attacker:1,fallen:1}:s.won?{reach:1-IL(Hy(n<=0?1:r/n)),attacker:1,fallen:o}:{reach:1,attacker:o,fallen:0}},"battleAt"),Wy=u((s,e)=>s.x===e.x&&s.y===e.y,"sameSquare"),NL=u((s,e)=>s.attacker===e.attacker||s.attacker===e.defender,"waitsFor"),dn,ws,Lp,Es,qy,Yy,R1,Zy=class Zy{constructor(){G(this,Es);G(this,dn,[]);G(this,ws,new Set);G(this,Lp,0)}size(){return f(this,dn).length}attacking(e){return f(this,dn).some(t=>t.attacker===e)}fighting(e){return f(this,dn).some(t=>t.attacker===e||t.defender===e)}awaitingBlow(e){return f(this,dn).find(t=>!f(this,ws).has(t.id)&&Wy(t.defenderSquare,e))??null}add(e,t,n,i=t){let r={...e,id:`battle-${++Di(this,Lp)._}`,start:R(this,Es,qy).call(this,e,n,f(this,dn),Math.max(t,i)),notBefore:i,pace:n};return f(this,dn).push(r),r}at(e){let t=[],n=[],i=[],r=new Set;return f(this,dn).forEach(o=>{if(e>=Yu(o)&&!f(this,ws).has(o.id)&&(f(this,ws).add(o.id),n.push(o)),e>=Vy(o)){i.push(o);return}t.push(...R(this,Es,R1).call(this,o,e,r))}),R(this,Es,Yy).call(this,i),{going:t,struck:n,ended:i}}endWhere(e,t){let n=f(this,dn).filter(e),i=f(this,dn).filter((o,a)=>n.includes(o)||!f(this,ws).has(o.id)&&n.some(l=>f(this,dn).indexOf(l)>a&&Wy(l.defenderSquare,o.defenderSquare))),r=i.filter(o=>!f(this,ws).has(o.id));return r.forEach(o=>f(this,ws).add(o.id)),R(this,Es,Yy).call(this,i),i.length>0&&f(this,dn).forEach((o,a)=>{o.start>t&&(o.start=R(this,Es,qy).call(this,o,o.pace,f(this,dn).slice(0,a),Math.max(t,o.notBefore)))}),{struck:r,ended:i}}busyUntil(e){return f(this,dn).filter(({attacker:t})=>e.includes(t)).reduce((t,n)=>Math.max(t??0,Vy(n)),null)}endAll(e){return this.endWhere(()=>!0,e)}};dn=new WeakMap,ws=new WeakMap,Lp=new WeakMap,Es=new WeakSet,qy=u(function(e,t,n,i){return n.reduce((r,o)=>NL(o,e)?Math.max(r,Vy(o)):Wy(o.defenderSquare,e.defenderSquare)?Math.max(r,Yu(o)-t.reach):r,i)},"#startOf"),Yy=u(function(e){e.length!==0&&(k(this,dn,f(this,dn).filter(t=>!e.includes(t))),e.forEach(t=>f(this,ws).delete(t.id)))},"#take"),R1=u(function(e,t,n){let{reach:i,attacker:r,fallen:o}=LL(e,t),{from:a,edge:l,fallsAt:c}=e,h=[],p=!n.has(e.attacker);return n.add(e.attacker),r>0&&p&&h.push({id:e.id,battle:e.id,unit:e.attacker,fallen:!1,at:[a.at[0]+(l[0]-a.at[0])*i,a.at[1]+(l[1]-a.at[1])*i],lift:a.lift*(1-i),facing:e.facing,opacity:r}),e.won&&t>=Yu(e)&&o>0&&h.push({id:`${e.id}-fallen`,battle:e.id,unit:e.defender,fallen:!0,at:[c.at[0],c.at[1]],lift:c.lift,facing:e.defenderFacing,opacity:o}),h},"#fighters"),u(Zy,"Battles");var Xy=Zy,C1=Xy;var DL=1,UL=.04,OL=12,FL=u((s,e,t,n,i,{water:r=0,ceiling:o=DL}={})=>{let{from:a,direction:l}=Gx(s,e,t,n),[c,h,p]=a,[d,m,g]=l;if(m>-1e-6)return null;let _=u(y=>[c+d*y,h+m*y,p+g*y],"at"),x=u(y=>{let[S,I,P]=_(y);return I-Math.max(r,i(S,P))},"above"),b=Math.max(0,(h-o)/-m),v=(h-r)/-m,w=UL/Math.max(1e-6,Math.hypot(d,g)),M=b;for(let y=b;;y=Math.min(v,y+w)){if(x(y)<=0){let S=M,I=y;for(let U=0;U<OL;U++){let X=(S+I)/2;x(X)>0?S=X:I=X}let[P,,D]=_(I);return[P,D]}if(y>=v)break;M=y}let[A,,E]=_(v);return[A,E]},"pickGround"),P1=FL;var Np=4,Zr,$u,la,ca,$n,Vl,Jr,lr,Ku,Zu,Ju,Yi,Dp,I1,jy,Qy=class Qy{constructor(e,t,n,i,r){G(this,Yi);G(this,Zr);G(this,$u);G(this,la);G(this,ca);G(this,$n);G(this,Vl);G(this,Jr);G(this,lr);G(this,Ku);G(this,Zu);G(this,Ju,u(e=>{let t=f(this,Zr).getBoundingClientRect(),n=t.width>0?(e.clientX-t.left)/t.width:0,i=t.height>0?(e.clientY-t.top)/t.height:0;f(this,Zu).call(this,n*f(this,$n),i*f(this,Vl))},"#click"));k(this,Zr,e),k(this,la,t),k(this,ca,n),k(this,$n,t.period().u),k(this,Vl,i),k(this,Zu,r),k(this,lr,document.createElement("canvas"));let{v:o}=t.period();k(this,Jr,o),k(this,Ku,[[0,0],[-f(this,$n),0],...o===null?[]:[[0,-o],[-f(this,$n),-o]]]);let a=Math.max(1,Math.round(f(this,$n)*Np)),l=Math.max(1,Math.round(f(this,Vl)*Np));[e,f(this,lr)].forEach(c=>{c.width=a,c.height=l}),k(this,$u,e.getContext("2d")),e.addEventListener("click",f(this,Ju))}dispose(){f(this,Zr).removeEventListener("click",f(this,Ju))}redraw(){let e=f(this,lr).getContext("2d");if(e===null)return;let t=f(this,ca).width(),n=f(this,ca).height(),i=[];e.fillStyle="#000000",e.fillRect(0,0,f(this,lr).width,f(this,lr).height);for(let r=0;r<n;r++)for(let o=0;o<t;o++){let a=f(this,ca).get(o,r),l=a.terrain?._??"Unknown";if(l==="Unknown")continue;e.fillStyle=Oo(l).colour,f(this,Ku).forEach(([p,d])=>{R(this,Yi,I1).call(this,e,o,r,p,d),e.fill()});let[c,h]=f(this,la).centre(o,r);if(a.city)i.push([c,h,zu(a.city.player)[0],2.2]);else if((a.units??[]).length>0){let p=Ay(a.units,null);p!==null&&i.push([c,h,zu(p.player)[0],1.4])}}i.forEach(([r,o,a,l])=>R(this,Yi,jy).call(this,r,o).forEach(([c,h])=>{e.fillStyle="#000000",e.fillRect(c-l-.5,h-l-.5,l*2+1,l*2+1),e.fillStyle=a,e.fillRect(c-l,h-l,l*2,l*2)}))}show(e,t){let n=f(this,$u);if(n===null)return;if(n.clearRect(0,0,f(this,Zr).width,f(this,Zr).height),n.drawImage(f(this,lr),0,0),t!==null){let[h,p]=f(this,la).centre(t.x,t.y);n.fillStyle="#ffffff",R(this,Yi,jy).call(this,h,p).forEach(([d,m])=>n.fillRect(d-2,m-2,4,4))}if(e===null||e.length<3)return;n.strokeStyle="#ffffff",n.lineWidth=1;let i=f(this,Jr),r=Math.min(...e.map(([h])=>h)),o=Math.min(...e.map(([,h])=>h)),a=-f(this,$n)*Math.floor(r/f(this,$n)),l=i===null?0:-i*Math.floor(o/i);(i===null?[0]:[-i,0,i]).forEach(h=>[-f(this,$n),0,f(this,$n)].forEach(p=>{n.beginPath(),e.forEach(([d,m],g)=>{let[_,x]=R(this,Yi,Dp).call(this,d+a+p,m+l+h);g===0?n.moveTo(_,x):n.lineTo(_,x)}),n.closePath(),n.stroke()}))}};Zr=new WeakMap,$u=new WeakMap,la=new WeakMap,ca=new WeakMap,$n=new WeakMap,Vl=new WeakMap,Jr=new WeakMap,lr=new WeakMap,Ku=new WeakMap,Zu=new WeakMap,Ju=new WeakMap,Yi=new WeakSet,Dp=u(function(e,t){return[e*Np,t*Np]},"#px"),I1=u(function(e,t,n,i=0,r=0){e.beginPath(),f(this,la).outline(t,n).forEach(([o,a],l)=>{let[c,h]=R(this,Yi,Dp).call(this,o+i,a+r);l===0?e.moveTo(c,h):e.lineTo(c,h)}),e.closePath()},"#outline"),jy=u(function(e,t){return(f(this,Jr)===null?[0]:[-f(this,Jr),0,f(this,Jr)]).flatMap(i=>[-f(this,$n),0,f(this,$n)].map(r=>R(this,Yi,Dp).call(this,e+r,t+i)))},"#everywhere"),u(Qy,"Minimap3D");var Jy=Qy,L1=Jy;var BL=u(s=>Object.entries(s.reduce((e,t)=>(e[t._]=(e[t._]??0)+t.value,e),{})).map(([e,t])=>({_:e,value:Math.floor(t)})).filter(({value:e})=>e>0),"netTileYields"),N1=u(s=>{let e=BL(s).sort((n,i)=>n._.charCodeAt(0)-i._.charCodeAt(0)).flatMap(({_:n,value:i})=>Array.from({length:i},()=>n)),t=Math.min(6,Math.max(2,Math.ceil(e.length/2)));return{columns:t,icons:e.slice(0,t*2).map((n,i)=>({_:n,column:i%t,row:Math.floor(i/t)}))}},"tileYieldGrid");var D1=u((s,e)=>(s.squareYieldsApplied?void 0:e?.squareYields?.find(({x:t,y:n})=>t===s.x&&n===s.y)?.yields)??s.yields??[],"squareYields"),U1=u(s=>s.city??s.workedBy??null,"squareCity");var kL=.9,zL=u(s=>{let{columns:e,icons:t}=N1(s),n=Math.min(e,t.length),i=Math.ceil(t.length/e);return{columns:e,slots:t.map(({_:r,column:o,row:a})=>({_:r,right:o-(n-1)/2,up:(i-1)/2-a}))}},"yieldSlots"),GL=u((s,e)=>kL*e/Math.hypot(s,2),"yieldIconSize"),O1=u((s,e)=>{let[t,n]=s.centre(0,0);return Math.min(...e.edgeDirections().map(i=>{let[r,o]=e.offset(i,0,0),[a,l]=s.centre(r,o);return Math.hypot(a-t,l-n)}))},"innerOf"),F1=u(({at:s,yields:e},t)=>{let{columns:n,slots:i}=zL(e);return i.length===0?null:{at:s,size:GL(n,t),slots:i}},"laidYields"),B1=u(s=>{let e=[...s],t=e.reduce((o,{slots:a})=>o+a.length,0),n={count:t,anchors:new Float32Array(t*3),slots:new Float32Array(t*2),sizes:new Float32Array(t),cells:new Float32Array(t),names:[]},i=new Map,r=0;return e.forEach(({at:o,size:a,slots:l})=>{l.forEach(({_:c,right:h,up:p})=>{let d=i.get(c);d===void 0&&(d=n.names.push(c)-1,i.set(c,d)),n.anchors[r*3]=o[0],n.anchors[r*3+1]=o[1],n.anchors[r*3+2]=o[2],n.slots[r*2]=h,n.slots[r*2+1]=p,n.sizes[r]=a,n.cells[r]=d,r++})}),n},"yieldMesh");var k1=u((s,{orbit:e,look:t,width:n,height:i,period:r,reach:o})=>{let a=n/i,l=Sl(e,t),c=[(e.focus[0]-l[0])/e.distance,(t-l[1])/e.distance,(e.focus[1]-l[2])/e.distance],{near:h,far:p}=Jo(e.distance),d=fp(e.focus,Zb(e),r),m=u(([_,x])=>[(_+1)/2*n,(1-x)/2*i],"onScreen"),g=[];return s.forEach(({key:_,centre:x,outline:b})=>d.forEach(([v,w])=>{let M=u(([U,X,O])=>[U+v,X,O+w],"moved"),A=M(x),E=(A[0]-l[0])*c[0]+(A[1]-l[1])*c[1]+(A[2]-l[2])*c[2];if(E>p)return;let y=wl(e,t,A,a);if(y===null)return;let[S]=m(y);if(S<-o||S>n+o)return;let I=b.map(U=>wl(e,t,M(U),a));if(I.some(U=>U===null))return;let P=Math.max(...I.map(U=>m(U)[1]));if(P<-o||P>i)return;let D=Math.min(1,Math.max(0,(E-h)/(p-h)));g.push({key:_,x:S,y:P,clear:1-D*D*(3-2*D)})})),g.sort((_,x)=>_.y-x.y)},"bannerPlaces");var VL=10,HL=4e3,G1=u(s=>s-Math.PI*2*Math.round(s/(Math.PI*2)),"shortTurn"),WL=350,XL=2e3,qL=8,V1=u(s=>({...s,...s.hitPoints?{hitPoints:{...s.hitPoints}}:{},...s.defence?{defence:{...s.defence}}:{},...s.improvements?{improvements:[...s.improvements]}:{}}),"keptUnit"),H1=u(s=>Object.fromEntries(Object.entries(s).map(([e,t])=>[e,Array.isArray(t)?[...t]:t!==null&&typeof t=="object"?{...t}:t])),"copied"),YL=u(s=>s&&{...s,...s.growth?{growth:H1(s.growth)}:{},...s.build?{build:H1(s.build)}:{},...s.yields?{yields:s.yields.map(e=>({...e}))}:{}},"keptCity"),$L=500,KL=.25,ZL=400,JL=.5,Bt,nh,ih,Ye,At,fa,sh,rh,gt,Dt,Bn,Xl,oh,pa,to,ql,ah,lh,hi,Yl,Ai,fn,Ki,ma,ga,Kn,ur,Ri,no,$l,Kl,nn,di,io,Ts,hr,As,dr,ch,so,ro,fi,xa,Zl,Ci,pi,Pi,Rs,Cs,uh,hh,dh,Ps,Is,fr,pr,mi,Jl,jl,mr,Ii,Zi,Ql,fh,ec,oo,ph,ba,Ls,mh,gr,ya,ao,_a,tc,Ji,gh,Li,lo,xh,bh,nc,yh,co,Ns,va,Ma,_h,vh,ic,Ds,sc,Mh,rc,oc,xr,N,W1,t_,X1,q1,Hl,n_,jr,Y1,$1,Wl,Up,i_,s_,Qr,r_,Op,o_,ju,a_,l_,K1,Z1,Fp,Qu,c_,J1,Bp,j1,Q1,eE,kp,tE,u_,nE,ua,zp,iE,sE,rE,Gp,ha,Vp,h_,oE,aE,d_,lE,f_,eo,cE,p_,eh,cr,th,uE,hE,m_,$i,dE,Hp,fE,Wp,g_,x_,b_,pE,mE,gE,xE,da,y_,bE,yE,__,Yt,_E,vE,v_,M_=class M_{constructor(e,t=fw){G(this,N);G(this,Bt);G(this,nh);G(this,ih,[]);G(this,Ye);G(this,At);G(this,fa,null);G(this,sh,0);G(this,rh,"");G(this,gt);G(this,Dt,null);G(this,Bn,null);G(this,Xl);G(this,oh);G(this,pa);G(this,to,null);G(this,ql,null);G(this,ah);G(this,lh,!1);G(this,hi);G(this,Yl);G(this,Ai,new Map);G(this,fn);G(this,Ki,new Map);G(this,ma,new Map);G(this,ga,new Map);G(this,Kn,new Map);G(this,ur,new Set);G(this,Ri,new Map);G(this,no,0);G(this,$l,new Map);G(this,Kl,new Map);G(this,nn,new C1);G(this,di,new w1);G(this,io,new T1);G(this,Ts,new Map);G(this,hr,new Map);G(this,As,new Map);G(this,dr,new Map);G(this,ch,!1);G(this,so,new Map);G(this,ro,null);G(this,fi,new Map);G(this,xa,new Map);G(this,Zl,new Set);G(this,Ci,new Set);G(this,pi);G(this,Pi,null);G(this,Rs,null);G(this,Cs,null);G(this,uh,u(()=>{R(this,N,ua).call(this)&&k(this,Cs,null),R(this,N,zp).call(this)},"#pressed"));G(this,hh,u(e=>{let t=e.target;e.ctrlKey||e.metaKey||e.altKey||["Shift","Control","Alt","Meta","CapsLock"].includes(e.key)||t!==null&&(t.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(t.tagName))||R(this,N,zp).call(this)},"#keyed"));G(this,dh);G(this,Ps,null);G(this,Is,null);G(this,fr,!1);G(this,pr);G(this,mi,u(()=>{let e=f(this,Is);e!==null&&(e.timer!==null&&window.clearTimeout(e.timer),k(this,Is,null),document.removeEventListener("keydown",f(this,mi),!0),e.open&&f(this,hi).endTooltip(f(this,Bt)))},"#endHover"));G(this,Jl,null);G(this,jl,!0);G(this,mr,new Map);G(this,Ii);G(this,Zi,new Map);G(this,Ql,!1);G(this,fh,!1);G(this,ec,"");G(this,oo,new Map);G(this,ph,null);G(this,ba,[]);G(this,Ls,null);G(this,mh,u(()=>{},"#stopRestyled"));G(this,gr,null);G(this,ya,new Map);G(this,ao,new Map);G(this,_a,[]);G(this,tc,0);G(this,Ji,null);G(this,gh,null);G(this,Li,!0);G(this,lo);G(this,xh,new Map);G(this,bh,u(e=>f(this,xh).get(e)??null,"#modelOf"));G(this,nc,!1);G(this,yh,u(()=>{},"#stopUnitSize"));G(this,co,!1);G(this,Ns,!0);G(this,va,!1);G(this,Ma,new Map);G(this,_h);G(this,vh,u(()=>{},"#stopArtChanged"));G(this,ic,!1);G(this,Ds);G(this,sc);G(this,Mh,"");G(this,rc,u(()=>R(this,N,v_).call(this),"#resizeHandler"));G(this,oc,null);G(this,xr,!1);k(this,Bt,e.mapCanvas),k(this,nh,e.coveredBy),k(this,Ds,e.art),k(this,Ii,e.cityBanners??null),k(this,Yl,{cityName:e.cityName,unitStatus:e.unitStatus}),k(this,lo,Ux*(e.unitSize?.get()??1)),k(this,sc,e.art.id()),this.world=e.world,k(this,Ye,new jw(e.world)),f(this,Ye).keepCities((i,r)=>{let o=`${i},${r}`;for(let a of f(this,fi).values())if(a.square===o)return a.city}),k(this,fn,new S1(f(this,Ye).layout.period())),k(this,pi,e.walks),k(this,_h,O1(f(this,Ye).layout,e.world.topology())),k(this,_a,e.world.tiles()),k(this,tc,f(this,_a).length),k(this,oh,e.cameraDistance),k(this,ah,e.lockVerticalEdges);let n=e.cameraDistance.get();if(k(this,gt,R(this,N,eh).call(this,{...kS(f(this,Ye).layout.centre(0,0)),...n===null?{}:{distance:n}})),k(this,pa,f(this,gt).distance),this.portal=new B_(e,{centre:u(()=>R(this,N,cE).call(this),"centre"),centreOn:u((i,r)=>R(this,N,sE).call(this,i,r),"centreOn"),changed:u(()=>R(this,N,Yt).call(this),"changed"),visible:u((i,r,o)=>R(this,N,ha).call(this,i,r,o),"visible")}),k(this,At,t(e.mapCanvas,{period:f(this,Ye).layout.period(),ground:f(this,Ye).ground(),yieldIcon:e.yieldIcon})),e.minimapCanvas!==null&&k(this,Jl,new L1(e.minimapCanvas,f(this,Ye).layout,e.world,f(this,Ye).extentV(),(i,r)=>{k(this,Cs,null),R(this,N,th).call(this,{...f(this,Dt)?.to??f(this,gt),focus:[i,r]})})),e.debug&&e.mapCanvas.parentElement&&(k(this,fa,R(this,N,_E).call(this,e.mapCanvas.parentElement)),window.civMap3DView=this),f(this,Ii)!==null&&e.mapCanvas.parentElement){let i=document.createElement("canvas");i.className="map3d-banners",i.setAttribute("aria-hidden","true"),Object.assign(i.style,{left:"0",pointerEvents:"none",position:"absolute",top:"0"}),e.mapCanvas.after(i),k(this,Ls,i)}else k(this,Ii,null);k(this,ec,R(this,N,Wp).call(this)),f(this,Ye).queueAll(...R(this,N,eo).call(this)),R(this,N,da).call(this),this.portal.on("activate-unit",i=>e.activateUnit(i)),k(this,hi,e.squares),k(this,pr,e.playerId),k(this,dh,e.transport),k(this,Xl,new d1(e.mapCanvas,{orbit:u(()=>f(this,gt),"orbit"),lookHeight:u(()=>f(this,Bn)??0,"lookHeight"),setOrbit:u(i=>this.setOrbit(i),"setOrbit")},{click:u((i,r)=>R(this,N,oE).call(this,i,r),"click"),menu:u((i,r,o,a,l)=>R(this,N,aE).call(this,i,r,o,a,l),"menu"),menuOnRightClick:u(()=>f(this,hi).menuOnRightClick(),"menuOnRightClick"),menuOpen:u(()=>f(this,hi).menuOpen(),"menuOpen"),hover:u(i=>R(this,N,lE).call(this,i),"hover")})),window.addEventListener("resize",f(this,rc)),document.addEventListener("keydown",f(this,hh),!0),e.mapCanvas.addEventListener("pointerdown",f(this,uh),!0),typeof ResizeObserver<"u"&&e.mapCanvas.parentElement&&(k(this,oc,new ResizeObserver(f(this,rc))),f(this,oc).observe(e.mapCanvas.parentElement)),R(this,N,v_).call(this),R(this,N,Yt).call(this),k(this,yh,e.unitSize?.onChange(()=>{let i=Ux*(e.unitSize?.get()??1);i!==f(this,lo)&&!f(this,xr)&&(k(this,lo,i),R(this,N,da).call(this),R(this,N,Yt).call(this))})??(()=>{})),k(this,vh,e.artChanged?.(()=>{f(this,xr)||(k(this,Ns,!0),R(this,N,g_).call(this))})??(()=>{})),k(this,mh,f(this,Ii)?.restyled(()=>{f(this,xr)||R(this,N,g_).call(this)})??(()=>{})),e.models!==void 0&&R(this,N,W1).call(this,e.models.url)}land(){return f(this,Ye)}orbit(){return f(this,gt)}moving(){return f(this,Dt)!==null||f(this,Xl).moving()}setOrbit(e){f(this,mi).call(this),k(this,Dt,null),k(this,gt,R(this,N,eh).call(this,e)),R(this,N,Yt).call(this)}activeUnit(){return{unit:f(this,Ji),pendingTile:f(this,gh)}}centre(e){this.portal.setCenter(e.x,e.y)}turnBy(e){let t=f(this,Dt)?.to??f(this,gt);R(this,N,th).call(this,{...t,yaw:t.yaw+e*zx},R(this,N,t_).call(this)+e*zx)}heading(){return{turn:(f(this,Dt)?.to??f(this,gt)).yaw,directions:k_(f(this,Ye).layout,this.world.topology())}}faceNorth(){R(this,N,th).call(this,{...f(this,Dt)?.to??f(this,gt),yaw:0},G1(-f(this,gt).yaw))}debugViewModes(){return[]}dispose(){R(this,N,__).call(this,!0),k(this,xr,!0),f(this,fn).endAll(0),f(this,nn).endAll(0),f(this,di).endAll(),f(this,As).clear(),f(this,dr).clear(),f(this,so).clear(),k(this,ro,null),f(this,Ts).clear(),f(this,hr).clear(),f(this,fi).clear(),f(this,xa).clear(),f(this,Ci).clear(),f(this,Kn).clear(),f(this,ur).clear(),f(this,Ri).clear(),document.removeEventListener("keydown",f(this,hh),!0),f(this,Bt).removeEventListener("pointerdown",f(this,uh),!0),f(this,yh).call(this),f(this,vh).call(this),f(this,mh).call(this),f(this,Ls)?.remove(),f(this,Zi).clear(),f(this,oo).clear(),f(this,mi).call(this),f(this,Xl).dispose(),f(this,Jl)?.dispose(),window.removeEventListener("resize",f(this,rc)),f(this,oc)?.disconnect(),f(this,gr)!==null&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(f(this,gr)),k(this,gr,null),f(this,fa)?.remove(),f(this,At).dispose();let e=window;e.civMap3DView===this&&delete e.civMap3DView}endPicking(){let e=f(this,Ps);e!==null&&(k(this,Ps,null),f(this,Bt).classList.remove("picking-tile"),e.window?.close())}flush(){R(this,N,m_).call(this),R(this,N,Yt).call(this)}mapEvent(e){if(e.kind==="moved"){R(this,N,q1).call(this,e.unit,e.from,e.to),R(this,N,Gp).call(this,e.unit.id,e.from,e.to);return}R(this,N,Gp).call(this,e.attacker.id,e.attacker.tile,e.defender.tile),R(this,N,Gp).call(this,e.defender.id,e.defender.tile,e.attacker.tile),R(this,N,X1).call(this,e)}measureCovered(){let e=f(this,Bt).getBoundingClientRect();k(this,ih,f(this,nh).map(t=>{let n=t.getBoundingClientRect(),i=t.parentElement?.getBoundingClientRect()??n;return{left:Math.max(n.left,i.left,e.left)-e.left,top:Math.max(n.top,i.top,e.top)-e.top,right:Math.min(n.right,i.right,e.right)-e.left,bottom:Math.min(n.bottom,i.bottom,e.bottom)-e.top}}).filter(({left:t,top:n,right:i,bottom:r})=>i>t&&r>n))}pickTile(e,t,n){this.endPicking();let i={accept:e,onPick:t,window:null};k(this,Ps,i),f(this,Bt).classList.add("picking-tile"),i.window=f(this,hi).prompt(n,()=>{f(this,Ps)===i&&(k(this,Ps,null),f(this,Bt).classList.remove("picking-tile"))})}picking(){return f(this,Ps)!==null}queueTile(e){let t=`${e.x},${e.y}`;f(this,ya).set(t,e),f(this,$l).set(t,++Di(this,no)._)}redrawArt(){let e=f(this,Ds).id();return e===f(this,sc)?"unchanged":(k(this,sc,e),k(this,Ns,!0),"redrawn")}releaseTiles(){let e=f(this,ch)&&R(this,N,Bp).call(this);e&&f(this,ya).size>0&&f(this,ro)===null&&k(this,ro,new Set([...f(this,hr).keys(),...f(this,Ki).keys()])),f(this,ya).forEach((t,n)=>{let i=f(this,$l).get(n)??0;e&&!f(this,so).has(n)&&f(this,so).set(n,f(this,Ts).get(n)??{units:[],shown:null,ringed:!1,inCity:!1}),f(this,ao).set(n,t),f(this,Kl).set(n,i),f(this,fi).forEach(r=>{r.square===n&&i>r.after&&(r.patched=!0)})}),f(this,ya).clear(),f(this,$l).clear(),f(this,ao).size>0&&R(this,N,Yt).call(this)}setActiveUnit(e,t){let n=f(this,Ji)?.tile;if(k(this,Ji,e),k(this,gh,t??null),R(this,N,ua).call(this)&&R(this,N,iE).call(this)&&R(this,N,zp).call(this),R(this,N,ua).call(this)){R(this,N,Yt).call(this);return}k(this,Cs,null);let i=f(this,Rs);k(this,Pi,e?.id??null),k(this,Rs,e?.tile??null),[n,i,e?.tile].forEach(r=>{r&&R(this,N,$i).call(this,r.x,r.y)}),R(this,N,Yt).call(this)}setWaiting(e){k(this,ic,e),e&&f(this,mi).call(this)}showActiveUnit(e){f(this,Li)||(k(this,Li,!0),f(this,Ye).showTowns(!0,...R(this,N,eo).call(this)),R(this,N,da).call(this),R(this,N,Yt).call(this))}shown(){return{units:f(this,Li),yields:f(this,co),waiting:f(this,ic)}}tilesPending(){return f(this,ao).size}toggleUnits(){k(this,Li,!f(this,Li)),f(this,Ye).showTowns(f(this,Li),...R(this,N,eo).call(this)),R(this,N,da).call(this),k(this,fr,!0),R(this,N,Yt).call(this)}toggleYields(){k(this,co,!f(this,co)),k(this,Ns,!0),k(this,fr,!0),R(this,N,Yt).call(this)}zoomBy(e){f(this,mi).call(this),k(this,gt,Ml(f(this,gt),e)),f(this,Dt)!==null&&(f(this,Dt).from=Ml(f(this,Dt).from,e),f(this,Dt).to=Ml(f(this,Dt).to,e)),R(this,N,Yt).call(this)}};Bt=new WeakMap,nh=new WeakMap,ih=new WeakMap,Ye=new WeakMap,At=new WeakMap,fa=new WeakMap,sh=new WeakMap,rh=new WeakMap,gt=new WeakMap,Dt=new WeakMap,Bn=new WeakMap,Xl=new WeakMap,oh=new WeakMap,pa=new WeakMap,to=new WeakMap,ql=new WeakMap,ah=new WeakMap,lh=new WeakMap,hi=new WeakMap,Yl=new WeakMap,Ai=new WeakMap,fn=new WeakMap,Ki=new WeakMap,ma=new WeakMap,ga=new WeakMap,Kn=new WeakMap,ur=new WeakMap,Ri=new WeakMap,no=new WeakMap,$l=new WeakMap,Kl=new WeakMap,nn=new WeakMap,di=new WeakMap,io=new WeakMap,Ts=new WeakMap,hr=new WeakMap,As=new WeakMap,dr=new WeakMap,ch=new WeakMap,so=new WeakMap,ro=new WeakMap,fi=new WeakMap,xa=new WeakMap,Zl=new WeakMap,Ci=new WeakMap,pi=new WeakMap,Pi=new WeakMap,Rs=new WeakMap,Cs=new WeakMap,uh=new WeakMap,hh=new WeakMap,dh=new WeakMap,Ps=new WeakMap,Is=new WeakMap,fr=new WeakMap,pr=new WeakMap,mi=new WeakMap,Jl=new WeakMap,jl=new WeakMap,mr=new WeakMap,Ii=new WeakMap,Zi=new WeakMap,Ql=new WeakMap,fh=new WeakMap,ec=new WeakMap,oo=new WeakMap,ph=new WeakMap,ba=new WeakMap,Ls=new WeakMap,mh=new WeakMap,gr=new WeakMap,ya=new WeakMap,ao=new WeakMap,_a=new WeakMap,tc=new WeakMap,Ji=new WeakMap,gh=new WeakMap,Li=new WeakMap,lo=new WeakMap,xh=new WeakMap,bh=new WeakMap,nc=new WeakMap,yh=new WeakMap,co=new WeakMap,Ns=new WeakMap,va=new WeakMap,Ma=new WeakMap,_h=new WeakMap,vh=new WeakMap,ic=new WeakMap,Ds=new WeakMap,sc=new WeakMap,Mh=new WeakMap,rc=new WeakMap,oc=new WeakMap,xr=new WeakMap,N=new WeakSet,W1=u(function(e){f(this,At).loadModels?.(e,(t,n)=>{f(this,xr)||(n.forEach(i=>f(this,xh).set(i,t)),k(this,nc,!0),R(this,N,Yt).call(this))}).catch(t=>console.warn("The 3D map's models couldn't be loaded:",t))},"#loadModels"),t_=u(function(){let e=f(this,Dt);return e===null?0:e.turn*(1-e.drawn)},"#turnLeft"),X1=u(function({attacker:e,defender:t,winner:n}){let i=f(this,pi)?.speed()??"normal",r=performance.now();if(typeof requestAnimationFrame!="function"||Xi()||i==="off"||e.player!==f(this,pr)&&t.player!==f(this,pr)&&!(f(this,pi)?.rivals()??!0)||!R(this,N,ha).call(this,e.tile.x,e.tile.y,-.5)&&!R(this,N,ha).call(this,t.tile.x,t.tile.y,-.5))return;let o=this.world.get(e.tile.x,e.tile.y).units.find(({id:y})=>y===e.id),a=`${t.tile.x},${t.tile.y}`,l=this.world.get(t.tile.x,t.tile.y),c=[...f(this,fi).values()].filter(({square:y,patched:S})=>y===a&&!S).at(-1),h=c===void 0?l.units.filter(({id:y})=>!f(this,Ci).has(y)).map(V1):c.units.filter(({id:y})=>!(c.won&&y===c.defender));if(f(this,Ci).has(e.id)||!h.some(({id:y})=>y===t.id))return;let p=f(this,nn).busyUntil([e.id,t.id]);p!==null&&p-r>XL&&R(this,N,Qu).call(this,f(this,nn).endWhere(y=>y.attacker===e.id||y.attacker===t.id,r)),R(this,N,n_).call(this,e.id);let[d,m]=f(this,Ye).layout.centre(e.tile.x,e.tile.y),[g,_]=f(this,Ye).layout.centre(t.tile.x,t.tile.y),{u:x,v:b}=f(this,Ye).layout.period(),v=u((y,S)=>S===null?y:y-S*Math.round(y/S),"short"),w=v(g-d,x),M=v(_-m,b),A=`${e.tile.x},${e.tile.y}`,E=f(this,nn).add({attacker:e.id,defender:t.id,attackerSquare:e.tile,defenderSquare:t.tile,won:n==="attacker",from:R(this,N,Hl).call(this,e.tile),edge:[d+w*Ky,m+M*Ky],fallsAt:R(this,N,Hl).call(this,t.tile),facing:f(this,Ai).get(e.id)??Math.atan2(w,M),defenderFacing:f(this,Ai).get(t.id)??Math.atan2(-w,-M)},r,i==="fast"?A1($y):$y,f(this,fn).endsAt(e.id)??r);f(this,fi).set(E.id,{square:a,city:c?.city??YL(l.city),units:h,after:f(this,no),won:n==="attacker",defender:t.id,patched:!1}),o!==void 0&&f(this,Ki).set(e.id,o),[e.id,t.id].forEach(y=>f(this,Ri).set(y,{squares:[A,a],after:f(this,no)})),R(this,N,$i).call(this,e.tile.x,e.tile.y),R(this,N,$i).call(this,t.tile.x,t.tile.y),R(this,N,Yt).call(this)},"#fight"),q1=u(function(e,t,n){let i=f(this,pi)?.speed()??"normal";if(e.id===f(this,Pi)&&k(this,Rs,n),typeof requestAnimationFrame!="function"||Xi()||i==="off")return;if(e.player!==f(this,pr)&&f(this,nn).attacking(e.id)){f(this,Ri).set(e.id,{squares:[`${t.x},${t.y}`,`${n.x},${n.y}`],after:f(this,no)});return}R(this,N,Qu).call(this,f(this,nn).endWhere(({attacker:p,defender:d})=>p===e.id||d===e.id,performance.now()));let r=f(this,fn).walking(e.id),o=this.world.get(t.x,t.y).units.find(({id:p})=>p===e.id)??(R(this,N,jr).call(this,e.id)?f(this,Ki).get(e.id):void 0),a=e.player===f(this,pr);if(o===void 0||!a&&!r&&(!(f(this,pi)?.rivals()??!0)||!R(this,N,ha).call(this,t.x,t.y,-.5)&&!R(this,N,ha).call(this,n.x,n.y,-.5)))return;let l=a?x1:b1;f(this,Ki).set(e.id,o),f(this,Ri).set(e.id,{squares:[`${t.x},${t.y}`,`${n.x},${n.y}`],after:f(this,no)}),R(this,N,n_).call(this,e.id);let c=pu(fu(o._,o.__??[])),h=c?void 0:f(this,Ye).roadPath(t.x,t.y,n.x,n.y)?.slice(1,-1);f(this,fn).step(e.id,t,n,R(this,N,Hl).call(this,t),{...R(this,N,Hl).call(this,n),...h===void 0?{}:{via:h}},performance.now(),i==="fast"?y1(l):l,c),R(this,N,Yt).call(this)},"#walk"),Hl=u(function({x:e,y:t},n=!!this.world.get(e,t).city){let[i,r]=f(this,Ye).layout.centre(e,t),o=Math.max(0,f(this,Ye).surfaceAt(i,r)),a=[i,r+(n?Ko:0)];return{at:a,lift:o-Math.max(0,f(this,Ye).surfaceAt(...a)),middle:[i,r]}},"#standing"),n_=u(function(e){f(this,ur).delete(e)&&f(this,Kn).forEach((t,n)=>{let i=t.units.filter(r=>r!==e);if(i.length!==t.units.length){if(i.length===0){f(this,Kn).delete(n),R(this,N,Qr).call(this,n);return}f(this,Kn).set(n,{...t,units:i})}})},"#stepsOn"),jr=u(function(e){return f(this,fn).walking(e)||f(this,ur).has(e)||f(this,nn).attacking(e)||f(this,Ci).has(e)},"#leftOff"),Y1=u(function(e){if(f(this,fn).dropped().forEach(i=>R(this,N,Qr).call(this,i)),f(this,Kn).forEach(i=>R(this,N,Wl).call(this,i)),f(this,fn).size()===0)return;if(Xi()||(f(this,pi)?.speed()??"normal")==="off"){R(this,N,ju).call(this,f(this,fn).endAll(e));return}let{going:t,ended:n}=f(this,fn).at(e);R(this,N,ju).call(this,n),t.forEach(i=>{R(this,N,Wl).call(this,i)!==null&&i.units.some(o=>{let a=f(this,Ki).get(o);return a!==void 0&&fu(a._,a.__??[]).shape==="ship"})&&f(this,io).trail(i.id,i.at,e)})},"#placeWalkers"),$1=u(function(e){if(f(this,io).size()===0)return;if(Xi()||(f(this,pi)?.speed()??"normal")==="off"){f(this,io).endAll().forEach(i=>f(this,At).wake(i,null));return}let{going:t,gone:n}=f(this,io).at(e);n.forEach(i=>f(this,At).wake(i,null)),t.forEach(({id:i,points:r})=>{let[o]=r;if(o===void 0){f(this,At).wake(i,null);return}let[a,l]=R(this,N,i_).call(this,o.at);f(this,At).wake(i,[a,0,l],E1(r))})},"#placeWakes"),Wl=u(function(e){let t=R(this,N,r_).call(this,e.units);return R(this,N,Up).call(this,e,t),t},"#drawWalker"),Up=u(function({id:e,at:t,lift:n,facing:i,aloft:r=0},o,a=1){let l=o===null?null:JSON.stringify(o);l!==(f(this,ga).get(e)??null)&&(f(this,At).setWalker(e,o),l===null?f(this,ga).delete(e):f(this,ga).set(e,l)),o!==null&&(f(this,At).placeWalker(e,R(this,N,s_).call(this,t,n),i,r),f(this,At).fadeWalker(e,a))},"#drawFigure"),i_=u(function(e){let{u:t,v:n}=f(this,Ye).layout.period(),i=u((r,o)=>o===null?r:(r%o+o)%o,"within");return[i(e[0],t),i(e[1],n)]},"#wrapped"),s_=u(function(e,t){let[n,i]=R(this,N,i_).call(this,e);return[n,Math.max(0,f(this,Ye).surfaceAt(n,i))+t,i]},"#onLand"),Qr=u(function(e){f(this,ga).delete(e)&&f(this,At).setWalker(e,null)},"#takeAway"),r_=u(function(e){let t=e.flatMap(n=>{let i=f(this,Ki).get(n);return i===void 0?[]:[i]});return R(this,N,Op).call(this,t)},"#walkerMarker"),Op=u(function(e,t=f(this,Pi)){return Ry({city:null,units:e},t,f(this,Li),f(this,Yl),()=>0,f(this,lo),f(this,bh))},"#unitsMarker"),o_=u(function({units:e}){return e.some(t=>f(this,Ri).has(t))},"#awaitsPatch"),ju=u(function(e){let t=new Set;e.forEach(n=>{let i={...n,units:n.units.filter(r=>!f(this,nn).attacking(r))};if(i.units.length>0&&R(this,N,o_).call(this,i)){f(this,Kn).set(i.id,i),i.units.forEach(r=>f(this,ur).add(r)),R(this,N,Wl).call(this,i);return}R(this,N,Qr).call(this,n.id),n.units.forEach(r=>f(this,ur).delete(r)),R(this,N,a_).call(this,n.units,t)}),R(this,N,l_).call(this,t)},"#walksEnded"),a_=u(function(e,t){e.forEach(n=>{R(this,N,jr).call(this,n)&&!f(this,Ci).has(n)||(f(this,ma).get(n)?.forEach(i=>t.add(i)),f(this,ma).delete(n),f(this,Ki).delete(n))})},"#release"),l_=u(function(e){let t=f(this,Pi);t!==null&&t!==(f(this,Ji)?.id??null)&&!f(this,fn).walking(t)&&!f(this,nn).attacking(t)&&R(this,N,nE).call(this,e),e.forEach(n=>{let[i,r]=n.split(",").map(Number);R(this,N,$i).call(this,i,r)})},"#released"),K1=u(function(e){let t=new Set;if(f(this,nn).size()===0){R(this,N,Fp).call(this,t);return}if(Xi()||(f(this,pi)?.speed()??"normal")==="off"){R(this,N,Qu).call(this,f(this,nn).endAll(e)),R(this,N,Fp).call(this,t);return}let{going:n,struck:i,ended:r}=f(this,nn).at(e);i.forEach(o=>R(this,N,c_).call(this,o,!0)),n.forEach(o=>{if(!o.fallen&&f(this,fn).walking(o.unit)){R(this,N,Qr).call(this,o.id);return}R(this,N,tE).call(this,o)&&t.add(R(this,N,Z1).call(this,o))}),R(this,N,u_).call(this,r),R(this,N,Fp).call(this,t)},"#placeBattles"),Z1=u(function({battle:e,at:t,lift:n,opacity:i}){let r=`${e}-puff`;return f(this,Zl).add(r),f(this,At).puff(r,R(this,N,s_).call(this,t,n),1-i),r},"#puff"),Fp=u(function(e){f(this,Zl).forEach(t=>{e.has(t)||(f(this,Zl).delete(t),f(this,At).puff(t,null))})},"#puffsOver"),Qu=u(function({struck:e,ended:t}){e.forEach(n=>R(this,N,c_).call(this,n,!1)),R(this,N,u_).call(this,t)},"#battlesOver"),c_=u(function(e,t){let{square:n,units:i}=f(this,fi).get(e.id)??{square:"",units:[]},{x:r,y:o}=e.defenderSquare,a=[...f(this,fi).entries()].find(([p,d])=>p!==e.id&&d.square===n)?.[1],l=new Set((a?.units??this.world.get(r,o).units).map(({id:p})=>p)),c=e.won?e.defender:e.attacker,h=i.filter(({id:p})=>e.won&&p===e.defender||!l.has(p)&&!R(this,N,jr).call(this,p));f(this,fi).delete(e.id),f(this,Ye).changed([[r,o]],...R(this,N,eo).call(this)),f(this,Ri).has(c)&&f(this,Ci).add(c),t&&e.won&&h.length>0&&f(this,xa).set(e.id,h),R(this,N,$i).call(this,r,o)},"#blow"),J1=u(function(e,t,{shown:n,ringed:i,inCity:r}){if((f(this,Ts).get(e)?.units??[]).forEach(({id:o})=>{f(this,hr).get(o)===e&&f(this,hr).delete(o)}),t.length===0?f(this,Ts).delete(e):f(this,Ts).set(e,{units:t.map(V1),shown:n,ringed:i,inCity:r}),t.forEach(({id:o})=>f(this,hr).set(o,e)),f(this,As).size>0){let o=[...f(this,As).entries()].filter(([,a])=>a.units.some(l=>t.some(({id:c})=>c===l.id))).map(([a])=>a);o.forEach(a=>f(this,di).end(a)),R(this,N,kp).call(this,o)}},"#drawnOn"),Bp=u(function(){return typeof requestAnimationFrame=="function"&&!Xi()&&(f(this,pi)?.speed()??"normal")!=="off"},"#fadesShown"),j1=u(function(e){return f(this,hr).has(e)||R(this,N,jr).call(this,e)},"#drawnAnywhere"),Q1=u(function(e,t){let n=[],i=[];if(e.forEach((l,c)=>{let h=l.units.filter(({id:d})=>!R(this,N,j1).call(this,d)),p=f(this,Ts).get(c)?.shown??null;l.shown!==null&&h.some(({id:d})=>d===l.shown)&&n.push([c,l,h]),l.units.length===0&&p!==null&&!t.has(p)&&i.push([c,p])}),n.length+i.length===0||n.length+i.length>qL)return;let r=u(([l])=>{let[c,h]=l.split(",").map(Number);return R(this,N,ha).call(this,c,h,0)},"onScreen"),o=performance.now(),a=(f(this,pi)?.speed()??"normal")==="fast"?500/2:500;n.filter(r).forEach(([l,c,h])=>{let[p,d]=l.split(",").map(Number);f(this,As).set(f(this,di).add("out",o,a),{units:[...h.filter(({id:m})=>m===c.shown),...h.filter(({id:m})=>m!==c.shown)],shown:c.ringed?c.shown:null,at:R(this,N,Hl).call(this,{x:p,y:d},c.inCity),facing:c.shown===null?0:f(this,Ai).get(c.shown)??0})}),i.filter(r).forEach(([l,c])=>{f(this,dr).set(f(this,di).add("in",o,a),{key:l,unit:c}),f(this,At).fadeMarker(l,0)}),R(this,N,Yt).call(this)},"#fadeChanged"),eE=u(function(e){if(f(this,di).size()===0)return;if(!R(this,N,Bp).call(this)){R(this,N,kp).call(this,f(this,di).endAll());return}let{going:t,ended:n}=f(this,di).at(e),i=[];t.forEach(({id:r,opacity:o})=>{let a=f(this,As).get(r),l=f(this,dr).get(r);if(a!==void 0){let c=R(this,N,Op).call(this,a.units,a.shown);if(c===null){f(this,di).end(r),i.push(r);return}R(this,N,Up).call(this,{id:r,at:[a.at.at[0],a.at.at[1]],lift:a.at.lift,facing:a.facing},c,o);return}if(l!==void 0){if((f(this,Ts).get(l.key)?.shown??null)!==l.unit){f(this,di).end(r),i.push(r);return}f(this,At).fadeMarker(l.key,o)}}),R(this,N,kp).call(this,[...n,...i])},"#placeFades"),kp=u(function(e){e.forEach(t=>{let n=f(this,dr).get(t);f(this,As).delete(t)&&R(this,N,Qr).call(this,t),n!==void 0&&(f(this,dr).delete(t),[...f(this,dr).values()].some(({key:i})=>i===n.key)||f(this,At).fadeMarker(n.key,1))})},"#fadesOver"),tE=u(function(e){let t=f(this,xa).get(e.battle);if(e.fallen&&t===void 0)return!1;let n=e.fallen?R(this,N,Op).call(this,t):R(this,N,r_).call(this,[e.unit]);return R(this,N,Up).call(this,e,n,e.opacity),n!==null&&(e.fallen||e.opacity<1)},"#drawFighter"),u_=u(function(e){if(e.length===0)return;let t=new Set;e.forEach(n=>{let{id:i,attacker:r,won:o,from:a,attackerSquare:l,facing:c}=n;if(R(this,N,Qr).call(this,`${i}-fallen`),f(this,xa).delete(i),f(this,fi).delete(i)&&f(this,Ye).changed([[n.defenderSquare.x,n.defenderSquare.y]],...R(this,N,eo).call(this)),f(this,Ri).has(r)&&!R(this,N,jr).call(this,r))if(!o)f(this,Ci).add(r);else{let h={id:i,units:[r],at:[a.at[0],a.at[1]],lift:a.lift,aloft:0,facing:c,from:l,before:l,to:l};f(this,Kn).set(i,h),f(this,ur).add(r),R(this,N,Wl).call(this,h);return}R(this,N,Qr).call(this,i),R(this,N,a_).call(this,[r],t)}),R(this,N,l_).call(this,t)},"#battlesEnded"),nE=u(function(e){let t=f(this,Ji);[f(this,Rs),t?.tile].forEach(i=>{i&&e.add(`${i.x},${i.y}`)}),k(this,Pi,t?.id??null),k(this,Rs,t?.tile??null),f(this,Kn).forEach(i=>R(this,N,Wl).call(this,i));let n=f(this,Cs);n!==null&&(k(this,Cs,null),R(this,N,p_).call(this,n.x,n.y))},"#caughtUp"),ua=u(function(){let e=f(this,Pi);return e!==null&&e!==(f(this,Ji)?.id??null)&&(f(this,fn).walking(e)||f(this,nn).attacking(e))},"#holding"),zp=u(function(){let e=f(this,Pi);e===null||!R(this,N,ua).call(this)||(R(this,N,ju).call(this,f(this,fn).endWhere(t=>t.includes(e),performance.now())),R(this,N,Qu).call(this,f(this,nn).endWhere(({attacker:t})=>t===e,performance.now())),R(this,N,Yt).call(this))},"#hurry"),iE=u(function(){let e=f(this,Rs),t=e===null?void 0:this.world.get(e.x,e.y).units.find(({id:n})=>n===f(this,Pi));return t!==void 0&&t.active!==!1&&(t.moves?.value??0)>0},"#ringedOffered"),sE=u(function(e,t){if(R(this,N,ua).call(this)){k(this,Cs,{x:e,y:t});return}R(this,N,p_).call(this,e,t)},"#centreSoon"),rE=u(function(e){if(f(this,Ri).forEach(({squares:n,after:i},r)=>{n.some(o=>(e.get(o)??0)>i)&&(f(this,Ri).delete(r),f(this,Ci).delete(r))}),f(this,Kn).size===0)return;let t=[...f(this,Kn).values()].filter(n=>!R(this,N,o_).call(this,n));t.forEach(n=>f(this,Kn).delete(n.id)),R(this,N,ju).call(this,t)},"#patched"),Gp=u(function(e,t,n){let[i,r]=f(this,Ye).layout.centre(t.x,t.y),[o,a]=f(this,Ye).layout.centre(n.x,n.y),{u:l,v:c}=f(this,Ye).layout.period(),h=u((m,g)=>g===null?m:m-g*Math.round(m/g),"short"),p=h(o-i,l),d=h(a-r,c);p===0&&d===0||(f(this,Ai).delete(e),f(this,Ai).set(e,Math.round(Math.atan2(p,d)*1e3)/1e3),f(this,Ai).size>HL&&f(this,Ai).delete(f(this,Ai).keys().next().value),[t,n].forEach(({x:m,y:g})=>R(this,N,$i).call(this,m,g)),R(this,N,Yt).call(this))},"#face"),ha=u(function(e,t,n){let i=f(this,Bt).clientWidth,r=f(this,Bt).clientHeight;if(i<=0||r<=0)return!1;let o=f(this,Cs),a=o===null?f(this,Dt)?.to??f(this,gt):{...f(this,Dt)?.to??f(this,gt),focus:f(this,Ye).layout.centre(o.x,o.y)},[l,c]=f(this,Ye).layout.centre(e,t),{u:h,v:p}=R(this,N,cr).call(this),[d,m]=a.focus,g=u((S,I,P)=>P===null?S:S+P*Math.round((I-S)/P),"nearest"),_=[g(l,d,h),Math.max(0,f(this,Ye).heightAt(l,c)),g(c,m,p)],x=i/r,b=f(this,Bn)??0,v=wl(a,b,_,x),w=wl(a,b,[_[0]+Math.cos(a.yaw),_[1],_[2]+Math.sin(a.yaw)],x);if(v===null||w===null)return!1;let M=(v[0]+1)/2*i,A=(1-v[1])/2*r,E=Math.abs(w[0]-v[0])*(i/2),y=(n+.5)*E;return M>=y&&M<=i-y&&A>=y&&A<=r-y&&!f(this,ih).some(({left:S,top:I,right:P,bottom:D})=>M>=S-E/2&&M<=P+E/2&&A>=I-E/2&&A<=D+E/2)},"#visible"),Vp=u(function(e,t){let n=f(this,Bt).clientWidth,i=f(this,Bt).clientHeight;if(n<=0||i<=0)return null;let r=[e/n*2-1,1-t/i*2],o=f(this,At).unitAt?.(r)??null;if(o!==null){let[m,g]=o.split(",").map(Number);return this.world.get(m,g)}let a=P1(f(this,gt),f(this,Bn)??0,r,n/i,(m,g)=>f(this,Ye).heightAt(m,g));if(a===null)return null;let[l,c]=f(this,Ye).layout.tileAt(...a),h=this.world.width(),p=this.world.height();return!(R(this,N,cr).call(this).v!==null)&&(c<0||c>=p)?null:this.world.get((l%h+h)%h,(c%p+p)%p)},"#tileAt"),h_=u(function(e,t){for(let n=f(this,ba).length-1;n>=0;n--){let{key:i,left:r,top:o,right:a,bottom:l}=f(this,ba)[n];if(e>=r&&e<a&&t>=o&&t<l){let[c,h]=i.split(",").map(Number),p=this.world.get(c,h);if(p?.city)return{tile:p,box:{left:r,top:o,bottom:l}}}}return null},"#bannerAt"),oE=u(function(e,t){let n=R(this,N,Vp).call(this,e,t);n!==null&&this.portal.emit("tile-clicked",n.x,n.y);let i=f(this,Ps);if(i!==null){n!==null&&i.accept(n)&&(this.endPicking(),i.onPick(n));return}let r=R(this,N,h_).call(this,e,t)?.tile.city??null;(n!==null||r!==null)&&f(this,hi).click(this.portal,n,r)},"#clicked"),aE=u(function(e,t,n,i,r){let o=f(this,Ji),a=R(this,N,Vp).call(this,e,t);return o===null||a===null?!1:(this.endPicking(),f(this,hi).menu(this.portal,n,i,o,a,f(this,dh),r),!0)},"#menu"),d_=u(function(e,t){let n=R(this,N,h_).call(this,e,t);if(n!==null)return{key:`banner ${n.tile.x},${n.tile.y}`,...n};let i=R(this,N,Vp).call(this,e,t);return i===null?null:{key:`${i.x},${i.y}`,tile:i,box:null}},"#subjectAt"),lE=u(function(e){let t=e===null||f(this,ic)||f(this,hi).menuOpen()?null:R(this,N,d_).call(this,e.x,e.y),n=f(this,Is);if(t===null||e===null){f(this,mi).call(this);return}let{key:i,tile:{x:r,y:o}}=t;if(n!==null&&n.key===i){Object.assign(n,{canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY});return}f(this,mi).call(this);let a={key:i,x:r,y:o,canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY,timer:null,open:!1};a.timer=window.setTimeout(()=>{a.timer=null,R(this,N,f_).call(this,a)},ZL),k(this,Is,a),document.addEventListener("keydown",f(this,mi),!0)},"#hovered"),f_=u(function(e){let t=typeof document.elementFromPoint!="function"||document.elementFromPoint(e.clientX,e.clientY)===f(this,Bt),n=t?R(this,N,d_).call(this,e.canvasX,e.canvasY):null;if(n===null||n.key!==e.key){f(this,mi).call(this);return}let i=n.box===null?null:f(this,Bt).getBoundingClientRect(),r=f(this,hi).tooltip(f(this,Bt),n.tile,f(this,pr),i===null||n.box===null?{left:e.clientX-10,top:e.clientY-10,bottom:e.clientY+10}:{left:i.left+n.box.left,top:i.top+n.box.top,bottom:i.top+n.box.bottom});!r&&e.open&&f(this,hi).endTooltip(f(this,Bt)),e.open=r},"#showHover"),eo=u(function(){return[...f(this,gt).focus]},"#focus"),cE=u(function(){let[e,t]=f(this,Ye).layout.tileAt(...f(this,gt).focus),n=this.world.width(),i=this.world.height();return{x:(e%n+n)%n,y:R(this,N,cr).call(this).v===null?Math.min(i-1,Math.max(0,t)):(t%i+i)%i}},"#centreSquare"),p_=u(function(e,t){let[n,i]=f(this,Ye).layout.centre(e,t),[r,o]=(f(this,Dt)?.to??f(this,gt)).focus;if(n===r&&i===o)return;let a={...f(this,Dt)?.to??f(this,gt),focus:[n,i]},{u:l,v:c}=R(this,N,cr).call(this),h=u((g,_)=>_===null?g:g-_*Math.round(g/_),"short"),[p,d]=f(this,gt).focus,m=Math.hypot(h(n-p,l),h(i-d,c));if(!f(this,lh)||m>f(this,gt).distance*1.5){k(this,lh,!0),this.setOrbit(a);return}R(this,N,th).call(this,a)},"#centreOn"),eh=u(function(e){return VS(Zo(e),R(this,N,cr).call(this),f(this,Ye).extentV())},"#settle"),cr=u(function(){let e=f(this,Ye).layout.period();return this.portal?.lockVerticalEdges()??f(this,ah)?{u:e.u,v:null}:e},"#period"),th=u(function(e,t=R(this,N,t_).call(this)+G1(e.yaw-(f(this,Dt)?.to??f(this,gt)).yaw)){f(this,mi).call(this),typeof requestAnimationFrame!="function"||Xi()?(k(this,Dt,null),k(this,gt,R(this,N,eh).call(this,e))):k(this,Dt,{from:f(this,gt),to:e,started:null,turn:t,drawn:0}),R(this,N,Yt).call(this)},"#moveTo"),uE=u(function(e){let t=f(this,Dt);if(t===null)return!1;t.started??=e;let n=Math.min(1,(e-t.started)/WL);return t.drawn=n*n*(3-2*n),k(this,gt,R(this,N,eh).call(this,HS(t.from,t.to,n,R(this,N,cr).call(this),t.turn))),n>=1&&k(this,Dt,null),n<1},"#moveCamera"),hE=u(function(e){let[t,n]=f(this,gt).focus,i=Math.max(0,f(this,Ye).heightAt(t,n));return!e||f(this,Bn)===null||Xi()?(k(this,Bn,i),!1):(k(this,Bn,f(this,Bn)+(i-f(this,Bn))*KL),Math.abs(i-f(this,Bn))<.002?(k(this,Bn,i),!1):!0)},"#followHeight"),m_=u(function(){let e=[...f(this,ao).values()].map(({x:h,y:p})=>[h,p]),t=this.world.tiles(),n=t!==f(this,_a)||t.length!==f(this,tc);k(this,_a,t),k(this,tc,t.length),f(this,ao).clear();let i=R(this,N,mE).call(this,f(this,Ye).changed(e,...R(this,N,eo).call(this),n)),r=new Set(e.map(([h,p])=>`${h},${p}`)),o=new Map([...r].map(h=>[h,f(this,Kl).get(h)??0]));f(this,Kl).clear();let a=f(this,so),l=f(this,ro);k(this,so,new Map),k(this,ro,null),f(this,As).forEach(({units:[h]})=>{h!==void 0&&l?.add(h.id)}),e.forEach(([h,p])=>R(this,N,$i).call(this,h,p)),i.forEach(([h,p])=>{let d=`${h},${p}`;!n&&!r.has(d)&&f(this,mr).has(d)&&R(this,N,$i).call(this,h,p)}),R(this,N,pE).call(this,e,i),i.forEach(([h,p])=>f(this,oo).delete(`${h},${p}`));let c=f(this,Is);c!==null&&c.open&&e.some(([h,p])=>h===c.x&&p===c.y)&&k(this,fr,!0),(e.length>0||n)&&k(this,jl,!0),n&&(k(this,Ns,!0),f(this,mr).forEach((h,p)=>{let[d,m]=p.split(",").map(Number);R(this,N,$i).call(this,d,m)})),l!==null&&R(this,N,Bp).call(this)&&!(n&&r.size*2>=t.length)&&R(this,N,Q1).call(this,a,l),e.length>0&&R(this,N,rE).call(this,o)},"#takeTiles"),$i=u(function(e,t){let n=`${e},${t}`,i=this.world.get(e,t),r=f(this,nn).awaitingBlow({x:e,y:t}),o=r===null?void 0:f(this,fi).get(r.id),a=o===void 0?i.units:[...o.units,...i.units.filter(({id:v})=>!o.units.some(w=>w.id===v))];i.units.filter(({id:v})=>R(this,N,jr).call(this,v)&&!f(this,Ci).has(v)).forEach(v=>{let w=f(this,ma).get(v.id)??new Set;w.add(n),f(this,ma).set(v.id,w),f(this,Ki).set(v.id,v)});let c=a.filter(({id:v})=>!R(this,N,jr).call(this,v)),h=o===void 0?i.city:o.city,p=Ry(o===void 0&&c.length===i.units.length?i:{city:h,units:c},f(this,Pi),f(this,Li),f(this,Yl),v=>f(this,Ai).get(v.id)??0,f(this,lo),f(this,bh)),d=p?.city&&R(this,N,dE).call(this,n,i,h)!==null?{...p,city:{...p.city,unnamed:!0}}:p;h||(f(this,Zi).delete(n),f(this,oo).delete(n)),R(this,N,J1).call(this,n,c,{shown:d?.unit?.id??null,ringed:d?.unit?.active===!0,inCity:(d?.unit??null)!==null&&d?.inCity===!0});let[m,g]=f(this,Ye).layout.centre(e,t),_=[m,Math.max(0,f(this,Ye).surfaceAt(m,g)),g],x=d===null?null:JSON.stringify([d,_]);x!==(f(this,mr).get(n)??null)&&(f(this,At).setMarker(n,_,d),R(this,N,xE).call(this,n,x))},"#mark"),dE=u(function(e,t,n){if(f(this,Ii)===null||!n)return null;let i=R(this,N,Hp).call(this),r={...t,city:n},o=f(this,Zi).get(e),a="!",l=null;try{if(a=String(f(this,Ii).key(r)),o?.signature===a)return o.banner;l=f(this,Ii).paint(r,i)}catch(c){f(this,fh)||(k(this,fh,!0),console.error(c))}return f(this,Zi).set(e,{signature:a,banner:l}),l},"#bannerOf"),Hp=u(function(){return(f(this,ph)??(window.devicePixelRatio||1))*(f(this,Ds).zoom()/f(this,Ds).scale())},"#bannerDensity"),fE=u(function(e){let t=f(this,oo).get(e);if(t===void 0){let[n,i]=e.split(",").map(Number),[r,o]=f(this,Ye).layout.centre(n,i),a=u((l,c)=>Math.max(0,f(this,Ye).surfaceAt(l,c)),"up");t={key:e,centre:[r,a(r,o),o],outline:f(this,Ye).layout.outline(n,i).map(([l,c])=>[l,a(l,c),c])},f(this,oo).set(e,t)}return t},"#bannerSiteOf"),Wp=u(function(){return`${f(this,Ds).id()} ${f(this,Ds).scale()} ${R(this,N,Hp).call(this)}`},"#bannersFor"),g_=u(function(){R(this,N,x_).call(this),R(this,N,Yt).call(this)},"#paintBannersAgain"),x_=u(function(){k(this,ec,R(this,N,Wp).call(this)),f(this,Zi).clear(),R(this,N,da).call(this),k(this,fr,!0)},"#repaintBanners"),b_=u(function(){let e=f(this,Ls);if(e===null||f(this,Ii)===null)return;R(this,N,Wp).call(this)!==f(this,ec)&&R(this,N,x_).call(this);let t=e.getContext("2d");if(k(this,ba,[]),t===null||(f(this,Ql)&&(t.clearRect(0,0,e.width,e.height),k(this,Ql,!1)),!f(this,Li)||f(this,co)&&f(this,Ii).giveWayToYields))return;let n=f(this,Bt).clientWidth,i=f(this,Bt).clientHeight,r=e.width/Math.max(1,n),o=[];if(n<=0||i<=0)return;let a=0;f(this,Zi).forEach(({banner:c},h)=>{c!==null&&(a=Math.max(a,c.width/r),o.push(R(this,N,fE).call(this,h)))});let l=Math.round(f(this,Ds).scale()*R(this,N,Hp).call(this));k1(o,{orbit:f(this,gt),look:f(this,Bn)??0,width:n,height:i,period:R(this,N,cr).call(this),reach:a}).forEach(({key:c,x:h,y:p,clear:d})=>{let m=f(this,Zi).get(c)?.banner;if(m){let g=Math.round(h*r-m.centre),_=Math.round(p*r)+l;t.globalAlpha=d,t.drawImage(m.image,g,_),k(this,Ql,!0),d>=JL&&f(this,ba).push({key:c,left:g/r,top:_/r,right:(g+m.width)/r,bottom:(_+m.height)/r})}}),t.globalAlpha=1},"#drawBanners"),pE=u(function(e,t){e.length===0&&t.length===0||(e.forEach(([n,i])=>f(this,Ma).delete(`${n},${i}`)),t.forEach(([n,i])=>f(this,Ma).delete(`${n},${i}`)),k(this,Ns,!0))},"#yieldsChanged"),mE=u(function(e){let t=this.world.topology(),n=new Map;return e.forEach(([i,r])=>{n.set(`${i},${r}`,[i,r]),t.directions().forEach(o=>{let a=t.neighbour(i,r,o);a!==null&&n.set(`${a[0]},${a[1]}`,a)})}),[...n.values()]},"#besides"),gE=u(function(){if(!f(this,co)){f(this,va)&&(f(this,At).setYields(null),k(this,va,!1));return}if(!f(this,Ns)&&f(this,va))return;let e=[];this.world.tiles().forEach(t=>{let n=`${t.x},${t.y}`,i=D1(t,U1(t)),r=f(this,Ma).get(n);if(r===void 0||r.of!==i){let[o,a]=f(this,Ye).layout.centre(t.x,t.y);r={of:i,laid:i.length===0?null:F1({at:[o,Math.max(0,f(this,Ye).surfaceAt(o,a)),a],yields:i},f(this,_h))},f(this,Ma).set(n,r)}r.laid!==null&&e.push(r.laid)}),f(this,At).setYields(B1(e)),k(this,Ns,!1),k(this,va,!0)},"#showYields"),xE=u(function(e,t){t===null?f(this,mr).delete(e):f(this,mr).set(e,t)},"#remember"),da=u(function(){let e=new Set([...f(this,mr).keys(),...f(this,Zi).keys()]);this.world.tiles().forEach(({x:t,y:n})=>e.add(`${t},${n}`)),e.forEach(t=>{let[n,i]=t.split(",").map(Number);R(this,N,$i).call(this,n,i)})},"#markAll"),y_=u(function(e){let t=performance.now(),n=R(this,N,uE).call(this,t),[i,r]=R(this,N,eo).call(this);f(this,nc)&&(k(this,nc,!1),R(this,N,da).call(this)),R(this,N,m_).call(this),R(this,N,Y1).call(this,t),R(this,N,$1).call(this,t),R(this,N,K1).call(this,t),R(this,N,eE).call(this,t),`${i},${r}`!==f(this,rh)&&(k(this,rh,`${i},${r}`),f(this,Ye).refocus(i,r)),f(this,Ye).build(f(this,At),e);let o=R(this,N,hE).call(this,e!==null);R(this,N,gE).call(this),f(this,At).view(f(this,gt),f(this,Bn)??0,R(this,N,cr).call(this)),f(this,At).render(),R(this,N,b_).call(this),f(this,fr)&&(k(this,fr,!1),f(this,Is)?.open&&R(this,N,f_).call(this,f(this,Is))),R(this,N,bE).call(this),R(this,N,__).call(this),k(this,sh,performance.now()-t),k(this,ch,!0),R(this,N,vE).call(this),(f(this,Ye).pending()>0||f(this,Ye).overlaysPending()>0||f(this,fn).size()>0||f(this,nn).size()>0||f(this,di).size()>0||f(this,io).size()>0||n||o)&&R(this,N,Yt).call(this)},"#frameDrawn"),bE=u(function(){let e=f(this,Jl);if(e===null)return;f(this,jl)&&(k(this,jl,!1),e.redraw());let t=R(this,N,ua).call(this)?f(this,Rs):f(this,Ji)?.tile??null;e.show(R(this,N,yE).call(this),t===null?null:{x:t.x,y:t.y})},"#showMinimap"),yE=u(function(){let e=f(this,Bt).clientWidth,t=f(this,Bt).clientHeight;if(e<=0||t<=0)return null;let n=e/t,i=f(this,Bn)??0,r=Jo(f(this,gt).distance).far,[o,a]=f(this,gt).focus,l=u((h,p)=>{for(let d=p;d>=-1;d-=.05){let m=vl(f(this,gt),i,[h,d],n);if(m!==null){let g=Math.hypot(m[0]-o,m[1]-a),_=g>r?r/g:1;return[o+(m[0]-o)*_,a+(m[1]-a)*_]}}return null},"corner"),c=[l(-1,-1),l(1,-1),l(1,1),l(-1,1)];return c.every(h=>h!==null)?c:null},"#patch"),__=u(function(e=!1){let t=(e?f(this,Dt)?.to??f(this,gt):f(this,gt)).distance,n=u(()=>{f(this,to)!==null&&clearTimeout(f(this,to)),k(this,to,null),k(this,ql,null)},"stop"),i=u(()=>{n(),k(this,pa,t),f(this,oh).set(t)},"keep");if(e){n(),t!==f(this,pa)&&i();return}if(f(this,Dt)!==null||t===f(this,pa)){n();return}f(this,to)!==null&&t===f(this,ql)||(n(),k(this,ql,t),k(this,to,setTimeout(i,$L)))},"#keepDistance"),Yt=u(function(){if(!f(this,xr)){if(typeof requestAnimationFrame!="function"){R(this,N,y_).call(this,null);return}f(this,gr)===null&&k(this,gr,requestAnimationFrame(()=>{k(this,gr,null),R(this,N,y_).call(this,VL)}))}},"#draw"),_E=u(function(e){let t=document.createElement("pre");return t.className="map3d-stats",t.setAttribute("aria-hidden","true"),Object.assign(t.style,{background:"var(--ui-overlay-bg, rgba(0, 0, 0, 0.6))",color:"var(--ui-overlay-fg, #fff)",font:"12px/1.4 monospace",left:"0.5rem",margin:"0",padding:"0.25rem 0.5rem",pointerEvents:"none",position:"absolute",bottom:"0.5rem"}),e.append(t),t},"#statsOverlay"),vE=u(function(){if(f(this,fa)===null)return;let{drawCalls:e,triangles:t,geometries:n}=f(this,At).stats();f(this,fa).textContent=[`frame ${f(this,sh).toFixed(1)} ms`,`draw calls ${e}`,`triangles ${t.toLocaleString()}`,`geometries ${n}`,`chunks waiting ${f(this,Ye).pending()}`].join(`
`)},"#showStats"),v_=u(function(){let e=f(this,Bt).parentElement,t=e?.offsetWidth??0,n=e?.offsetHeight??0,i=window.devicePixelRatio||1,r=`${t}\xD7${n}@${i}`;t===0||n===0||r===f(this,Mh)||(k(this,Mh,r),f(this,At).resize(t,n,i),f(this,Ls)!==null&&(Object.assign(f(this,Ls).style,{height:`${n}px`,left:`${f(this,Bt).offsetLeft||0}px`,top:`${f(this,Bt).offsetTop||0}px`,width:`${t}px`}),f(this,Ls).width=Math.round(t*i),f(this,Ls).height=Math.round(n*i),k(this,ph,i)),this.measureCovered(),f(this,At).render(),R(this,N,b_).call(this))},"#resize"),u(M_,"MapView3D");var e_=M_,ME=e_;var jL={createMapView3D:u(s=>new ME(s),"createMapView3D")};globalThis[U_]=jL;})();
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
