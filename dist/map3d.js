"use strict";(()=>{var jT=Object.create;var Tm=Object.defineProperty;var QT=Object.getOwnPropertyDescriptor;var eA=Object.getOwnPropertyNames;var tA=Object.getPrototypeOf,nA=Object.prototype.hasOwnProperty;var Av=r=>{throw TypeError(r)};var u=(r,e)=>Tm(r,"name",{value:e,configurable:!0});var iA=(r,e)=>()=>{try{return e||r((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var rA=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of eA(e))!nA.call(r,i)&&i!==t&&Tm(r,i,{get:()=>e[i],enumerable:!(n=QT(e,i))||n.enumerable});return r};var sA=(r,e,t)=>(t=r!=null?jT(tA(r)):{},rA(e||!r||!r.__esModule?Tm(t,"default",{value:r,enumerable:!0}):t,r));var Am=(r,e,t)=>e.has(r)||Av("Cannot "+t);var p=(r,e,t)=>(Am(r,e,"read from private field"),t?t.call(r):e.get(r)),G=(r,e,t)=>e.has(r)?Av("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,t),z=(r,e,t,n)=>(Am(r,e,"write to private field"),n?n.call(r,t):e.set(r,t),t),T=(r,e,t)=>(Am(r,e,"access private method"),t);var ki=(r,e,t,n)=>({set _(i){z(r,e,i,t)},get _(){return p(r,e,n)}});var Cv=iA(Ro=>{"use strict";var or,Rs=Ro&&Ro.__classPrivateFieldGet||function(r,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?r!==e||!n:!e.has(r))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(r):n?n.value:e.get(r)};Object.defineProperty(Ro,"__esModule",{value:!0}),Ro.EventEmitter=void 0;var Rm=class Rm{constructor(){or.set(this,{})}on(e,t){e in Rs(this,or,"f")||(Rs(this,or,"f")[e]=[]),Rs(this,or,"f")[e].push(t)}once(e,t){let n=u((...i)=>{t(...i),this.off(e,n)},"i");this.on(e,n)}off(e,t){if(!(e in Rs(this,or,"f")))return;let n=Rs(this,or,"f")[e].indexOf(t);n!==-1&&Rs(this,or,"f")[e].splice(n,1)}emit(e,...t){e in Rs(this,or,"f")&&Rs(this,or,"f")[e].forEach((n=>n(...t)))}};u(Rm,"i");var Kh=Rm;Ro.EventEmitter=Kh,or=new WeakMap,Ro.default=Kh});var Rv="civMap3D";var Pv=sA(Cv());var ar,lr,Ga,Pm=class Pm extends Pv.EventEmitter{constructor(t,n){super();G(this,ar);G(this,lr);G(this,Ga);z(this,lr,t),z(this,Ga,t.lockVerticalEdges),z(this,ar,n)}center(){return p(this,ar).centre()}isVisible(t,n,i=0){return p(this,ar).visible(t,n,i)}lockVerticalEdges(){return p(this,Ga)}nativeTileSize(){return p(this,lr).art.nativeTileSize()}openCity(t){let{cityOpener:n}=p(this,lr);return n.opens(t,this)?(n.open(t,this),!0):!1}playerId(){return p(this,lr).playerId}render(){p(this,ar).changed()}scale(){return p(this,lr).art.scale()}setCenter(t,n){p(this,ar).centreOn(t,n)}setLockVerticalEdges(t){z(this,Ga,t),p(this,ar).changed()}setZoom(){p(this,ar).changed()}transport(){return p(this,lr).transport}zoom(){return p(this,lr).art.zoom()}};ar=new WeakMap,lr=new WeakMap,Ga=new WeakMap,u(Pm,"MapPortal3D");var Cm=Pm,Iv=Cm;var oA=u((r,e)=>{let[t,n]=r.centre(0,0);return Object.fromEntries(e.directions().map(i=>{let[s,o]=e.offset(i,0,0),[a,l]=r.centre(s,o);return[i,[a-t,l-n]]}))},"groundDirections"),Lv=oA;var SM=0,d0=1,wM=2;var vu=1,xf=2,wl=3,Si=0,Bn=1,sn=2,Yo=0,El=1,f0=2,p0=3,m0=4,EM=5;var $o=100,TM=101,AM=102,RM=103,CM=104,PM=200,IM=201,LM=202,NM=203,g0=204,x0=205,DM=206,OM=207,UM=208,FM=209,BM=210,kM=211,zM=212,GM=213,VM=214,Td=0,Ad=1,Rd=2,cl=3,Cd=4,Pd=5,Id=6,Ld=7,b0=0,HM=1,WM=2,gr=0,y0=1,_0=2,v0=3,Mu=4,M0=5,S0=6,w0=7,n0="attached",XM="detached",E0=300,Ko=301,Tl=302,bf=303,yf=304,Xn=1e3,Wn=1001,ul=1002,Wt=1003,_f=1004;var Zo=1005;var zt=1006,Al=1007;var wn=1008;var En=1009,T0=1010,A0=1011,Rl=1012,vf=1013,Xi=1014,si=1015,oi=1016,Mf=1017,Sf=1018,Jo=1020,R0=35902,C0=35899,P0=1021,I0=1022,Kn=1023,es=1026,cs=1027,wf=1028,Ef=1029,xr=1030,Tf=1031;var Af=1033,Su=33776,wu=33777,Eu=33778,Tu=33779,Rf=35840,Cf=35841,Pf=35842,If=35843,Lf=36196,Nf=37492,Df=37496,Of=37488,Uf=37489,Au=37490,Ff=37491,Bf=37808,kf=37809,zf=37810,Gf=37811,Vf=37812,Hf=37813,Wf=37814,Xf=37815,qf=37816,Yf=37817,$f=37818,Kf=37819,Zf=37820,Jf=37821,jf=36492,Qf=36494,ep=36495,tp=36283,np=36284,Ru=36285,ip=36286,qM=2200,rp=2201,YM=2202,Uo=2300,Fo=2301,wd=2302,i0=2303,No=2400,Do=2401,Kc=2402,sp=2500,$M=2501,L0=0,Cu=1,Cl=2,KM=3200;var op=0,ZM=1,qi="",Lt="srgb",Nn="srgb-linear",Zc="linear",St="srgb";var Ed=7680;var JM=519,jM=512,QM=513,eS=514,N0=515,tS=516,nS=517,D0=518,O0=519,U0=35044;var F0="300 es",Mi=2e3,hl=2001;function aA(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}u(aA,"arrayNeedsUint32");function lA(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}u(lA,"isTypedArray");function dl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}u(dl,"createElementNS");function iS(){let r=dl("canvas");return r.style.display="block",r}u(iS,"createCanvasElement");var Nv={},fl=null;function Jc(...r){let e="THREE."+r.shift();fl?fl("log",e,...r):console.log(e,...r)}u(Jc,"log");function rS(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}u(rS,"enhanceLogMessage");function ze(...r){r=rS(r);let e="THREE."+r.shift();if(fl)fl("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}u(ze,"warn");function qe(...r){r=rS(r);let e="THREE."+r.shift();if(fl)fl("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}u(qe,"error");function Oo(...r){let e=r.join(" ");e in Nv||(Nv[e]=!0,ze(...r))}u(Oo,"warnOnce");function sS(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}u(s,"probe"),setTimeout(s,t)})}u(sS,"probeAsync");var oS={[Td]:Td,[Rd]:Id,[Cd]:Cd,[cl]:Pd,[Ad]:Ad,[Id]:Rd,[Ld]:Ld,[Pd]:cl},q0=class q0{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}};u(q0,"EventDispatcher");var Hi=q0,_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dv=1234567,qc=Math.PI/180,Bo=180/Math.PI;function br(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_n[r&255]+_n[r>>8&255]+_n[r>>16&255]+_n[r>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]).toLowerCase()}u(br,"generateUUID");function lt(r,e,t){return Math.max(e,Math.min(t,r))}u(lt,"clamp");function B0(r,e){return(r%e+e)%e}u(B0,"euclideanModulo");function cA(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}u(cA,"mapLinear");function uA(r,e,t){return r!==e?(t-r)/(e-r):0}u(uA,"inverseLerp");function Yc(r,e,t){return(1-t)*r+t*e}u(Yc,"lerp");function hA(r,e,t,n){return Yc(r,e,1-Math.exp(-t*n))}u(hA,"damp");function dA(r,e=1){return e-Math.abs(B0(r,e*2)-e)}u(dA,"pingpong");function fA(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}u(fA,"smoothstep");function pA(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}u(pA,"smootherstep");function mA(r,e){return r+Math.floor(Math.random()*(e-r+1))}u(mA,"randInt");function gA(r,e){return r+Math.random()*(e-r)}u(gA,"randFloat");function xA(r){return r*(.5-Math.random())}u(xA,"randFloatSpread");function bA(r){r!==void 0&&(Dv=r);let e=Dv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}u(bA,"seededRandom");function yA(r){return r*qc}u(yA,"degToRad");function _A(r){return r*Bo}u(_A,"radToDeg");function vA(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}u(vA,"isPowerOfTwo");function MA(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}u(MA,"ceilPowerOfTwo");function k0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}u(k0,"floorPowerOfTwo");function SA(r,e,t,n,i){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),f=s((e-n)/2),d=o((e-n)/2),m=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*h,l*f,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*f,a*c);break;case"ZXZ":r.set(l*f,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*g,l*m,a*c);break;case"YXY":r.set(l*m,a*h,l*g,a*c);break;case"ZYZ":r.set(l*g,l*m,a*h,a*c);break;default:ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}u(SA,"setQuaternionFromProperEuler");function ap(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}u(ap,"getNormalizationScale");function z0(r,e){if(e.constructor===Float32Array)return r;let t=ap(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/t,-1)}u(z0,"denormalize");function G0(r,e){if(e.constructor===Float32Array)return r;let t=ap(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*t)}u(G0,"normalize");var lp={DEG2RAD:qc,RAD2DEG:Bo,generateUUID:br,clamp:lt,euclideanModulo:B0,mapLinear:cA,inverseLerp:uA,lerp:Yc,damp:hA,pingpong:dA,smoothstep:fA,smootherstep:pA,randInt:mA,randFloat:gA,randFloatSpread:xA,seededRandom:bA,degToRad:yA,radToDeg:_A,isPowerOfTwo:vA,ceilPowerOfTwo:MA,floorPowerOfTwo:k0,setQuaternionFromProperEuler:SA,normalize:G0,denormalize:z0},Jd=class Jd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};u(Jd,"Vector2"),Jd.prototype.isVector2=!0;var ke=Jd,Y0=class Y0{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],d=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(f!==_||l!==d||c!==m||h!==g){let x=l*d+c*m+h*g+f*_;x<0&&(d=-d,m=-m,g=-g,_=-_,x=-x);let b=1-a;if(x<.9995){let v=Math.acos(x),S=Math.sin(v);b=Math.sin(b*v)/S,a=Math.sin(a*v)/S,l=l*b+d*a,c=c*b+m*a,h=h*b+g*a,f=f*b+_*a}else{l=l*b+d*a,c=c*b+m*a,h=h*b+g*a,f=f*b+_*a;let v=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=v,c*=v,h*=v,f*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+h*f+l*m-c*d,e[t+1]=l*g+h*d+c*f-a*m,e[t+2]=c*g+h*m+a*d-l*f,e[t+3]=h*g-a*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(s/2),d=l(n/2),m=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*f+c*m*g,this._y=c*m*f-d*h*g,this._z=c*h*g+d*m*f,this._w=c*h*f-d*m*g;break;case"YXZ":this._x=d*h*f+c*m*g,this._y=c*m*f-d*h*g,this._z=c*h*g-d*m*f,this._w=c*h*f+d*m*g;break;case"ZXY":this._x=d*h*f-c*m*g,this._y=c*m*f+d*h*g,this._z=c*h*g+d*m*f,this._w=c*h*f-d*m*g;break;case"ZYX":this._x=d*h*f-c*m*g,this._y=c*m*f+d*h*g,this._z=c*h*g-d*m*f,this._w=c*h*f+d*m*g;break;case"YZX":this._x=d*h*f+c*m*g,this._y=c*m*f+d*h*g,this._z=c*h*g-d*m*f,this._w=c*h*f-d*m*g;break;case"XZY":this._x=d*h*f-c*m*g,this._y=c*m*f-d*h*g,this._z=c*h*g+d*m*f,this._w=c*h*f+d*m*g;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=n+a+f;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-i)*m}else if(n>a&&n>f){let m=2*Math.sqrt(1+n-a-f);this._w=(h-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+c)/m}else if(a>f){let m=2*Math.sqrt(1+a-n-f);this._w=(s-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+f-n-a);this._w=(o-i)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};u(Y0,"Quaternion");var Kt=Y0,jd=class jd{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ov.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ov.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-s*i),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*h,this.y=n+l*h+a*c-s*f,this.z=i+l*f+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Im.copy(this).projectOnVector(e),this.sub(Im)}reflect(e){return this.sub(Im.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};u(jd,"Vector3"),jd.prototype.isVector3=!0;var X=jd,Im=new X,Ov=new Kt,Qd=class Qd{constructor(e,t,n,i,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],m=n[5],g=n[8],_=i[0],x=i[3],b=i[6],v=i[1],S=i[4],M=i[7],R=i[2],E=i[5],y=i[8];return s[0]=o*_+a*v+l*R,s[3]=o*x+a*S+l*E,s[6]=o*b+a*M+l*y,s[1]=c*_+h*v+f*R,s[4]=c*x+h*S+f*E,s[7]=c*b+h*M+f*y,s[2]=d*_+m*v+g*R,s[5]=d*x+m*S+g*E,s[8]=d*b+m*M+g*y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,d=a*l-h*s,m=c*s-o*l,g=t*f+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=f*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Oo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Lm.makeScale(e,t)),this}rotate(e){return Oo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Lm.makeRotation(-e)),this}translate(e,t){return Oo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Lm.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};u(Qd,"Matrix3"),Qd.prototype.isMatrix3=!0;var Ye=Qd,Lm=new Ye,Uv=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fv=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wA(){let r={enabled:!0,workingColorSpace:Nn,spaces:{},convert:u(function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===St&&(i.r=Qr(i.r),i.g=Qr(i.g),i.b=Qr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(i.r=ll(i.r),i.g=ll(i.g),i.b=ll(i.b))),i},"convert"),workingToColorSpace:u(function(i,s){return this.convert(i,this.workingColorSpace,s)},"workingToColorSpace"),colorSpaceToWorking:u(function(i,s){return this.convert(i,s,this.workingColorSpace)},"colorSpaceToWorking"),getPrimaries:u(function(i){return this.spaces[i].primaries},"getPrimaries"),getTransfer:u(function(i){return i===qi?Zc:this.spaces[i].transfer},"getTransfer"),getToneMappingMode:u(function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},"getToneMappingMode"),getLuminanceCoefficients:u(function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},"getLuminanceCoefficients"),define:u(function(i){Object.assign(this.spaces,i)},"define"),_getMatrix:u(function(i,s,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},"_getMatrix"),_getDrawingBufferColorSpace:u(function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},"_getDrawingBufferColorSpace"),_getUnpackColorSpace:u(function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},"_getUnpackColorSpace")},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Nn]:{primaries:e,whitePoint:n,transfer:Zc,toXYZ:Uv,fromXYZ:Fv,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:e,whitePoint:n,transfer:St,toXYZ:Uv,fromXYZ:Fv,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),r}u(wA,"createColorManagement");var st=wA();function Qr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}u(Qr,"SRGBToLinear");function ll(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}u(ll,"LinearToSRGB");var Va,$0=class $0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Va===void 0&&(Va=dl("canvas")),Va.width=e.width,Va.height=e.height;let i=Va.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Va}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=dl("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Qr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qr(t[n]/255)*255):t[n]=Qr(t[n]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};u($0,"ImageUtils");var Nd=$0,EA=0,K0=class K0{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:EA++}),this.uuid=br(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Nm(i[o].image)):s.push(Nm(i[o]))}else s=Nm(i);n.url=s}return t||(e.images[this.uuid]=n),n}};u(K0,"TextureSource");var pl=K0;function Nm(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Nd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}u(Nm,"serializeImage");var TA=0,Dm=new X,ol=class ol extends Hi{constructor(e=ol.DEFAULT_IMAGE,t=ol.DEFAULT_MAPPING,n=Wn,i=Wn,s=zt,o=wn,a=Kn,l=En,c=ol.DEFAULT_ANISOTROPY,h=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:TA++}),this.uuid=br(),this.name="",this.source=new pl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Dm).x}get height(){return this.source.getSize(Dm).y}get depth(){return this.source.getSize(Dm).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ze(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==E0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xn:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case ul:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xn:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case ul:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};u(ol,"Texture");var rn=ol;rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=E0;rn.DEFAULT_ANISOTROPY=1;var ef=class ef{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],m=l[5],g=l[9],_=l[2],x=l[6],b=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+x)<.1&&Math.abs(c+m+b-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,M=(m+1)/2,R=(b+1)/2,E=(h+d)/4,y=(f+_)/4,w=(g+x)/4;return S>M&&S>R?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=E/n,s=y/n):M>R?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=E/i,s=w/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=y/s,i=w/s),this.set(n,i,s,t),this}let v=Math.sqrt((x-g)*(x-g)+(f-_)*(f-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(x-g)/v,this.y=(f-_)/v,this.z=(d-h)/v,this.w=Math.acos((c+m+b-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};u(ef,"Vector4"),ef.prototype.isVector4=!0;var wt=ef,Z0=class Z0 extends Hi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new rn({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new pl(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};u(Z0,"RenderTarget");var Dd=Z0,J0=class J0 extends Dd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}};u(J0,"WebGLRenderTarget");var ii=J0,j0=class j0 extends rn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};u(j0,"DataArrayTexture");var ko=j0;var Q0=class Q0 extends rn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};u(Q0,"Data3DTexture");var Od=Q0;var $c=class $c{constructor(e,t,n,i,s,o,a,l,c,h,f,d,m,g,_,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,h,f,d,m,g,_,x)}set(e,t,n,i,s,o,a,l,c,h,f,d,m,g,_,x){let b=this.elements;return b[0]=e,b[4]=t,b[8]=n,b[12]=i,b[1]=s,b[5]=o,b[9]=a,b[13]=l,b[2]=c,b[6]=h,b[10]=f,b[14]=d,b[3]=m,b[7]=g,b[11]=_,b[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $c().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Ha.setFromMatrixColumn(e,0).length(),s=1/Ha.setFromMatrixColumn(e,1).length(),o=1/Ha.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let d=o*h,m=o*f,g=a*h,_=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,m=l*f,g=c*h,_=c*f;t[0]=d+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,m=l*f,g=c*h,_=c*f;t[0]=d-_*a,t[4]=-o*f,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,m=o*f,g=a*h,_=a*f;t[0]=l*h,t[4]=g*c-m,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*f,t[8]=g*f+m,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*f+g,t[10]=d-_*f}else if(e.order==="XZY"){let d=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+_,t[5]=o*h,t[9]=m*f-g,t[2]=g*f-m,t[6]=a*h,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(AA,e,RA)}lookAt(e,t,n){let i=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Cs.crossVectors(n,ti),Cs.lengthSq()===0&&(Math.abs(n.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Cs.crossVectors(n,ti)),Cs.normalize(),Zh.crossVectors(ti,Cs),i[0]=Cs.x,i[4]=Zh.x,i[8]=ti.x,i[1]=Cs.y,i[5]=Zh.y,i[9]=ti.y,i[2]=Cs.z,i[6]=Zh.z,i[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],m=n[13],g=n[2],_=n[6],x=n[10],b=n[14],v=n[3],S=n[7],M=n[11],R=n[15],E=i[0],y=i[4],w=i[8],L=i[12],I=i[1],D=i[5],k=i[9],$=i[13],F=i[2],j=i[6],ce=i[10],V=i[14],ne=i[3],Z=i[7],re=i[11],ae=i[15];return s[0]=o*E+a*I+l*F+c*ne,s[4]=o*y+a*D+l*j+c*Z,s[8]=o*w+a*k+l*ce+c*re,s[12]=o*L+a*$+l*V+c*ae,s[1]=h*E+f*I+d*F+m*ne,s[5]=h*y+f*D+d*j+m*Z,s[9]=h*w+f*k+d*ce+m*re,s[13]=h*L+f*$+d*V+m*ae,s[2]=g*E+_*I+x*F+b*ne,s[6]=g*y+_*D+x*j+b*Z,s[10]=g*w+_*k+x*ce+b*re,s[14]=g*L+_*$+x*V+b*ae,s[3]=v*E+S*I+M*F+R*ne,s[7]=v*y+S*D+M*j+R*Z,s[11]=v*w+S*k+M*ce+R*re,s[15]=v*L+S*$+M*V+R*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],m=e[14],g=e[3],_=e[7],x=e[11],b=e[15],v=l*m-c*d,S=a*m-c*f,M=a*d-l*f,R=o*m-c*h,E=o*d-l*h,y=o*f-a*h;return t*(_*v-x*S+b*M)-n*(g*v-x*R+b*E)+i*(g*S-_*R+b*y)-s*(g*M-_*E+x*y)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(s*h-a*l)+i*(s*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],m=e[11],g=e[12],_=e[13],x=e[14],b=e[15],v=t*a-n*o,S=t*l-i*o,M=t*c-s*o,R=n*l-i*a,E=n*c-s*a,y=i*c-s*l,w=h*_-f*g,L=h*x-d*g,I=h*b-m*g,D=f*x-d*_,k=f*b-m*_,$=d*b-m*x,F=v*$-S*k+M*D+R*I-E*L+y*w;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let j=1/F;return e[0]=(a*$-l*k+c*D)*j,e[1]=(i*k-n*$-s*D)*j,e[2]=(_*y-x*E+b*R)*j,e[3]=(d*E-f*y-m*R)*j,e[4]=(l*I-o*$-c*L)*j,e[5]=(t*$-i*I+s*L)*j,e[6]=(x*M-g*y-b*S)*j,e[7]=(h*y-d*M+m*S)*j,e[8]=(o*k-a*I+c*w)*j,e[9]=(n*I-t*k-s*w)*j,e[10]=(g*E-_*M+b*v)*j,e[11]=(f*M-h*E-m*v)*j,e[12]=(a*L-o*D-l*w)*j,e[13]=(t*D-n*L+i*w)*j,e[14]=(_*S-g*R-x*v)*j,e[15]=(h*R-f*S+d*v)*j,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,f=a+a,d=s*c,m=s*h,g=s*f,_=o*h,x=o*f,b=a*f,v=l*c,S=l*h,M=l*f,R=n.x,E=n.y,y=n.z;return i[0]=(1-(_+b))*R,i[1]=(m+M)*R,i[2]=(g-S)*R,i[3]=0,i[4]=(m-M)*E,i[5]=(1-(d+b))*E,i[6]=(x+v)*E,i[7]=0,i[8]=(g+S)*y,i[9]=(x-v)*y,i[10]=(1-(d+_))*y,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let o=Ha.set(i[0],i[1],i[2]).length(),a=Ha.set(i[4],i[5],i[6]).length(),l=Ha.set(i[8],i[9],i[10]).length();s<0&&(o=-o),zi.copy(this);let c=1/o,h=1/a,f=1/l;return zi.elements[0]*=c,zi.elements[1]*=c,zi.elements[2]*=c,zi.elements[4]*=h,zi.elements[5]*=h,zi.elements[6]*=h,zi.elements[8]*=f,zi.elements[9]*=f,zi.elements[10]*=f,t.setFromRotationMatrix(zi),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,s,o,a=Mi,l=!1){let c=this.elements,h=2*s/(t-e),f=2*s/(n-i),d=(t+e)/(t-e),m=(n+i)/(n-i),g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===Mi)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===hl)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Mi,l=!1){let c=this.elements,h=2/(t-e),f=2/(n-i),d=-(t+e)/(t-e),m=-(n+i)/(n-i),g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===Mi)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===hl)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};u($c,"Matrix4"),$c.prototype.isMatrix4=!0;var Xe=$c,Ha=new X,zi=new Xe,AA=new X(0,0,0),RA=new X(1,1,1),Cs=new X,Zh=new X,ti=new X,Bv=new Xe,kv=new Kt,tf=class tf{constructor(e=0,t=0,n=0,i=tf.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-lt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bv,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kv.setFromEuler(this),this.setFromQuaternion(kv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};u(tf,"Euler");var ri=tf;ri.DEFAULT_ORDER="XYZ";var eg=class eg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};u(eg,"Layers");var ml=eg,CA=0,zv=new X,Wa=new Kt,Xr=new Xe,Jh=new X,Dc=new X,PA=new X,IA=new Kt,Gv=new X(1,0,0),Vv=new X(0,1,0),Hv=new X(0,0,1),Wv={type:"added"},LA={type:"removed"},Xa={type:"childadded",child:null},Om={type:"childremoved",child:null},al=class al extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:CA++}),this.uuid=br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=al.DEFAULT_UP.clone();let e=new X,t=new ri,n=new Kt,i=new X(1,1,1);function s(){n.setFromEuler(t,!1)}u(s,"onRotationChange");function o(){t.setFromQuaternion(n,void 0,!1)}u(o,"onQuaternionChange"),t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new Ye}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=al.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=al.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wa.setFromAxisAngle(e,t),this.quaternion.multiply(Wa),this}rotateOnWorldAxis(e,t){return Wa.setFromAxisAngle(e,t),this.quaternion.premultiply(Wa),this}rotateX(e){return this.rotateOnAxis(Gv,e)}rotateY(e){return this.rotateOnAxis(Vv,e)}rotateZ(e){return this.rotateOnAxis(Hv,e)}translateOnAxis(e,t){return zv.copy(e).applyQuaternion(this.quaternion),this.position.add(zv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gv,e)}translateY(e){return this.translateOnAxis(Vv,e)}translateZ(e){return this.translateOnAxis(Hv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Jh.copy(e):Jh.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Dc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xr.lookAt(Dc,Jh,this.up):Xr.lookAt(Jh,Dc,this.up),this.quaternion.setFromRotationMatrix(Xr),i&&(Xr.extractRotation(i.matrixWorld),Wa.setFromRotationMatrix(Xr),this.quaternion.premultiply(Wa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wv),Xa.child=e,this.dispatchEvent(Xa),Xa.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(LA),Om.child=e,this.dispatchEvent(Om),Om.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wv),Xa.child=e,this.dispatchEvent(Xa),Xa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dc,e,PA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dc,IA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(u(s,"serialize"),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}u(o,"extractFromCache")}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};u(al,"Object3D");var Ft=al;Ft.DEFAULT_UP=new X(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var tg=class tg extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}};u(tg,"Group");var Ht=tg,NA={type:"move"},ng=class ng{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let x=t.getJointPose(_,n),b=this._getHandJoint(c,_);x!==null&&(b.matrix.fromArray(x.transform.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale),b.matrixWorldNeedsUpdate=!0,b.jointRadius=x.radius),b.visible=x!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(NA)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};u(ng,"WebXRController");var gl=ng,aS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ps={h:0,s:0,l:0},jh={h:0,s:0,l:0};function Um(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}u(Um,"hue2rgb");var ig=class ig{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=st.workingColorSpace){if(e=B0(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Um(o,s,e+1/3),this.g=Um(o,s,e),this.b=Um(o,s,e-1/3)}return st.colorSpaceToWorking(this,i),this}setStyle(e,t=Lt){function n(s){s!==void 0&&parseFloat(s)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}u(n,"handleAlpha");let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){let n=aS[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qr(e.r),this.g=Qr(e.g),this.b=Qr(e.b),this}copyLinearToSRGB(e){return this.r=ll(e.r),this.g=ll(e.g),this.b=ll(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return st.workingToColorSpace(vn.copy(this),e),Math.round(lt(vn.r*255,0,255))*65536+Math.round(lt(vn.g*255,0,255))*256+Math.round(lt(vn.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(vn.copy(this),t);let n=vn.r,i=vn.g,s=vn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=Lt){st.workingToColorSpace(vn.copy(this),e);let t=vn.r,n=vn.g,i=vn.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ps),this.setHSL(Ps.h+e,Ps.s+t,Ps.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ps),e.getHSL(jh);let n=Yc(Ps.h,jh.h,t),i=Yc(Ps.s,jh.s,t),s=Yc(Ps.l,jh.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};u(ig,"Color");var Se=ig,vn=new Se;Se.NAMES=aS;var nf=class nf{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Se(e),this.near=t,this.far=n}clone(){return new nf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}};u(nf,"Fog");var jc=nf,rg=class rg extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}};u(rg,"Scene");var Qc=rg,Gi=new X,qr=new X,Fm=new X,Yr=new X,qa=new X,Ya=new X,Xv=new X,Bm=new X,km=new X,zm=new X,Gm=new wt,Vm=new wt,Hm=new wt,Os=class Os{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Gi.subVectors(e,t),i.cross(Gi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Gi.subVectors(i,t),qr.subVectors(n,t),Fm.subVectors(e,t);let o=Gi.dot(Gi),a=Gi.dot(qr),l=Gi.dot(Fm),c=qr.dot(qr),h=qr.dot(Fm),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;let d=1/f,m=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Yr)===null?!1:Yr.x>=0&&Yr.y>=0&&Yr.x+Yr.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Yr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Yr.x),l.addScaledVector(o,Yr.y),l.addScaledVector(a,Yr.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Gm.setScalar(0),Vm.setScalar(0),Hm.setScalar(0),Gm.fromBufferAttribute(e,t),Vm.fromBufferAttribute(e,n),Hm.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Gm,s.x),o.addScaledVector(Vm,s.y),o.addScaledVector(Hm,s.z),o}static isFrontFacing(e,t,n,i){return Gi.subVectors(n,t),qr.subVectors(e,t),Gi.cross(qr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gi.subVectors(this.c,this.b),qr.subVectors(this.a,this.b),Gi.cross(qr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Os.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Os.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Os.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Os.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Os.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;qa.subVectors(i,n),Ya.subVectors(s,n),Bm.subVectors(e,n);let l=qa.dot(Bm),c=Ya.dot(Bm);if(l<=0&&c<=0)return t.copy(n);km.subVectors(e,i);let h=qa.dot(km),f=Ya.dot(km);if(h>=0&&f<=h)return t.copy(i);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(n).addScaledVector(qa,o);zm.subVectors(e,s);let m=qa.dot(zm),g=Ya.dot(zm);if(g>=0&&m<=g)return t.copy(s);let _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ya,a);let x=h*g-m*f;if(x<=0&&f-h>=0&&m-g>=0)return Xv.subVectors(s,i),a=(f-h)/(f-h+(m-g)),t.copy(i).addScaledVector(Xv,a);let b=1/(x+_+d);return o=_*b,a=d*b,t.copy(n).addScaledVector(qa,o).addScaledVector(Ya,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};u(Os,"Triangle");var Jr=Os,sg=class sg{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Vi):Vi.fromBufferAttribute(s,o),Vi.applyMatrix4(e.matrixWorld),this.expandByPoint(Vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qh.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qh.copy(n.boundingBox)),Qh.applyMatrix4(e.matrixWorld),this.union(Qh)}let i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vi),Vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oc),ed.subVectors(this.max,Oc),$a.subVectors(e.a,Oc),Ka.subVectors(e.b,Oc),Za.subVectors(e.c,Oc),Is.subVectors(Ka,$a),Ls.subVectors(Za,Ka),Co.subVectors($a,Za);let t=[0,-Is.z,Is.y,0,-Ls.z,Ls.y,0,-Co.z,Co.y,Is.z,0,-Is.x,Ls.z,0,-Ls.x,Co.z,0,-Co.x,-Is.y,Is.x,0,-Ls.y,Ls.x,0,-Co.y,Co.x,0];return!Wm(t,$a,Ka,Za,ed)||(t=[1,0,0,0,1,0,0,0,1],!Wm(t,$a,Ka,Za,ed))?!1:(td.crossVectors(Is,Ls),t=[td.x,td.y,td.z],Wm(t,$a,Ka,Za,ed))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($r[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$r[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$r[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$r[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$r[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$r[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$r[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$r[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($r),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}};u(sg,"Box3");var Mn=sg,$r=[new X,new X,new X,new X,new X,new X,new X,new X],Vi=new X,Qh=new Mn,$a=new X,Ka=new X,Za=new X,Is=new X,Ls=new X,Co=new X,Oc=new X,ed=new X,td=new X,Po=new X;function Wm(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Po.fromArray(r,s);let a=i.x*Math.abs(Po.x)+i.y*Math.abs(Po.y)+i.z*Math.abs(Po.z),l=e.dot(Po),c=t.dot(Po),h=n.dot(Po);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}u(Wm,"satForAxes");var jr=DA();function DA(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}u(DA,"_generateTables");function OA(r){Math.abs(r)>65504&&ze("DataUtils.toHalfFloat(): Value out of range."),r=lt(r,-65504,65504),jr.floatView[0]=r;let e=jr.uint32View[0],t=e>>23&511;return jr.baseTable[t]+((e&8388607)>>jr.shiftTable[t])}u(OA,"toHalfFloat");function UA(r){let e=r>>10;return jr.uint32View[0]=jr.mantissaTable[jr.offsetTable[e]+(r&1023)]+jr.exponentTable[e],jr.floatView[0]}u(UA,"fromHalfFloat");var og=class og{static toHalfFloat(e){return OA(e)}static fromHalfFloat(e){return UA(e)}};u(og,"DataUtils");var hr=og,tn=new X,nd=new ke,FA=0,ag=class ag extends Hi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:FA++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=U0,this.updateRanges=[],this.gpuType=si,this.version=0,this._normalizationScale=e!==void 0?ap(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)nd.fromBufferAttribute(this,t),nd.applyMatrix3(e),this.setXY(t,nd.x,nd.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):z0(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):G0(e,this.array)}};u(ag,"BufferAttribute");var _t=ag;var lg=class lg extends _t{constructor(e,t,n){super(new Uint16Array(e),t,n)}};u(lg,"Uint16BufferAttribute");var eu=lg;var cg=class cg extends _t{constructor(e,t,n){super(new Uint32Array(e),t,n)}};u(cg,"Uint32BufferAttribute");var tu=cg;var ug=class ug extends _t{constructor(e,t,n){super(new Float32Array(e),t,n)}};u(ug,"Float32BufferAttribute");var Pt=ug,BA=new Mn,Uc=new X,Xm=new X,hg=class hg{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):BA.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uc.subVectors(e,this.center);let t=Uc.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Uc,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xm.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uc.copy(e.center).add(Xm)),this.expandByPoint(Uc.copy(e.center).sub(Xm))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};u(hg,"Sphere");var Sn=hg,kA=0,vi=new Xe,qm=new Ft,Ja=new X,ni=new Mn,Fc=new Mn,un=new X,rf=class rf extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kA++}),this.uuid=br(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(aA(e)?tu:eu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ye().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,t,n){return vi.makeTranslation(e,t,n),this.applyMatrix4(vi),this}scale(e,t,n){return vi.makeScale(e,t,n),this.applyMatrix4(vi),this}lookAt(e){return qm.lookAt(e),qm.updateMatrix(),this.applyMatrix4(qm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ja).negate(),this.translate(Ja.x,Ja.y,Ja.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Pt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];ni.setFromBufferAttribute(s),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){let n=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Fc.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(ni.min,Fc.min),ni.expandByPoint(un),un.addVectors(ni.max,Fc.max),ni.expandByPoint(un)):(ni.expandByPoint(Fc.min),ni.expandByPoint(Fc.max))}ni.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)un.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(un));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)un.fromBufferAttribute(a,c),l&&(Ja.fromBufferAttribute(e,c),un.add(Ja)),i=Math.max(i,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new _t(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let L=0;L<n.count;L++)a[L]=new X,l[L]=new X;let h=new X,f=new X,d=new X,m=new ke,g=new ke,_=new ke,x=new X,b=new X;function v(L,I,D){c[L]=c[I]=c[D]=1,h.fromBufferAttribute(n,L),f.fromBufferAttribute(n,I),d.fromBufferAttribute(n,D),m.fromBufferAttribute(s,L),g.fromBufferAttribute(s,I),_.fromBufferAttribute(s,D),f.sub(h),d.sub(h),g.sub(m),_.sub(m);let k=1/(g.x*_.y-_.x*g.y);isFinite(k)&&(x.copy(f).multiplyScalar(_.y).addScaledVector(d,-g.y).multiplyScalar(k),b.copy(d).multiplyScalar(g.x).addScaledVector(f,-_.x).multiplyScalar(k),a[L].add(x),a[I].add(x),a[D].add(x),l[L].add(b),l[I].add(b),l[D].add(b))}u(v,"handleTriangle");let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let L=0,I=S.length;L<I;++L){let D=S[L],k=D.start,$=D.count;for(let F=k,j=k+$;F<j;F+=3)v(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let M=new X,R=new X,E=new X,y=new X;function w(L){E.fromBufferAttribute(i,L),y.copy(E);let I=a[L];M.copy(I),M.sub(E.multiplyScalar(E.dot(I))).normalize(),R.crossVectors(y,I);let k=R.dot(l[L])<0?-1:1;o.setXYZW(L,M.x,M.y,M.z,k)}u(w,"handleVertex");for(let L=0,I=n.count;L<I;++L)c[L]&&w(L);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new _t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let i=new X,s=new X,o=new X,a=new X,l=new X,c=new X,h=new X,f=new X;if(e)for(let d=0,m=e.count;d<m;d+=3){let g=e.getX(d+0),_=e.getX(d+1),x=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,x),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h),m=0,g=0;for(let _=0,x=l.length;_<x;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let b=0;b<h;b++)d[g++]=c[m++]}return new _t(d,h,f)}if(u(e,"convertBufferAttribute"),this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new rf,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){let d=c[h],m=e(d,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let m=c[f];h.push(m.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],f=s[c];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};u(rf,"BufferGeometry");var Et=rf,dg=class dg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=U0,this.updateRanges=[],this.version=0,this.uuid=br()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=qv(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=qv(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};u(dg,"InterleavedBuffer");var zo=dg;function qv(r){return r.buffer._uuid===void 0&&(r.buffer._uuid=br()),r.byteOffset===0&&r.byteLength===r.buffer.byteLength?r.buffer._uuid:r.buffer._uuid+":"+r.byteOffset+":"+r.byteLength}u(qv,"getArrayKey");var Ln=new X,sf=class sf{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?ap(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.applyMatrix4(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.applyNormalMatrix(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.transformDirection(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Jc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new _t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new sf(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Jc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):z0(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):G0(e,this.data.array)}};u(sf,"InterleavedBufferAttribute");var Fs=sf,Ym=new X,zA=new X,GA=new Ye,fg=class fg{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Ym.subVectors(n,t).cross(zA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Ym),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||GA.getNormalMatrix(e),i=this.coplanarPoint(Ym).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}};u(fg,"Plane");var Hn=fg,VA=0,pg=class pg extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:VA++}),this.uuid=br(),this.name="",this.type="Material",this.blending=El,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=g0,this.blendDst=x0,this.blendEquation=$o,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=cl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=JM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ed,this.stencilZFail=Ed,this.stencilZPass=Ed,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(u(i,"extractFromCache"),t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Se().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Hn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ke().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ke().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};u(pg,"Material");var Dn=pg,mg=class mg extends Dn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};u(mg,"SpriteMaterial");var Bs=mg,ja,Bc=new X,Qa=new X,el=new X,tl=new ke,kc=new ke,lS=new Xe,id=new X,zc=new X,rd=new X,Yv=new ke,$m=new ke,$v=new ke,gg=class gg extends Ft{constructor(e=new Bs){if(super(),this.isSprite=!0,this.type="Sprite",ja===void 0){ja=new Et;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new zo(t,5);ja.setIndex([0,1,2,0,2,3]),ja.setAttribute("position",new Fs(n,3,0,!1)),ja.setAttribute("uv",new Fs(n,2,3,!1))}this.geometry=ja,this.material=e,this.center=new ke(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&qe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qa.setFromMatrixScale(this.matrixWorld),lS.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),el.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qa.multiplyScalar(-el.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let o=this.center;sd(id.set(-.5,-.5,0),el,o,Qa,i,s),sd(zc.set(.5,-.5,0),el,o,Qa,i,s),sd(rd.set(.5,.5,0),el,o,Qa,i,s),Yv.set(0,0),$m.set(1,0),$v.set(1,1);let a=e.ray.intersectTriangle(id,zc,rd,!1,Bc);if(a===null&&(sd(zc.set(-.5,.5,0),el,o,Qa,i,s),$m.set(0,1),a=e.ray.intersectTriangle(id,rd,zc,!1,Bc),a===null))return;let l=e.ray.origin.distanceTo(Bc);l<e.near||l>e.far||t.push({distance:l,point:Bc.clone(),uv:Jr.getInterpolation(Bc,id,zc,rd,Yv,$m,$v,new ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};u(gg,"Sprite");var ts=gg;function sd(r,e,t,n,i,s){tl.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(kc.x=s*tl.x-i*tl.y,kc.y=i*tl.x+s*tl.y):kc.copy(tl),r.copy(e),r.x+=kc.x,r.y+=kc.y,r.applyMatrix4(lS)}u(sd,"transformVertex");var Kr=new X,Km=new X,od=new X,ad=new X,xg=class xg{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Kr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kr.copy(this.origin).addScaledVector(this.direction,t),Kr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Km.copy(e).add(t).multiplyScalar(.5),od.copy(t).sub(e).normalize(),ad.copy(this.origin).sub(Km);let s=e.distanceTo(t)*.5,o=-this.direction.dot(od),a=ad.dot(this.direction),l=-ad.dot(od),c=ad.lengthSq(),h=Math.abs(1-o*o),f,d,m,g;if(h>0)if(f=o*l-a,d=o*a-l,g=s*h,f>=0)if(d>=-g)if(d<=g){let _=1/h;f*=_,d*=_,m=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Km).addScaledVector(od,d),m}intersectSphere(e,t){if(e.radius<0)return null;Kr.subVectors(e.center,this.origin);let n=Kr.dot(this.direction),i=Kr.dot(Kr)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Kr)!==null}intersectTriangle(e,t,n,i,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=e.x-o.x,d=e.y-o.y,m=e.z-o.z,g=t.x-o.x,_=t.y-o.y,x=t.z-o.z,b=n.x-o.x,v=n.y-o.y,S=n.z-o.z,M=Math.abs(l),R=Math.abs(c),E=Math.abs(h),y,w,L,I,D,k,$,F,j,ce,V,ne;if(M>=R&&M>=E?(L=l,k=f,j=g,ne=b,l>=0?(y=c,w=h,I=d,D=m,$=_,F=x,ce=v,V=S):(y=h,w=c,I=m,D=d,$=x,F=_,ce=S,V=v)):R>=E?(L=c,k=d,j=_,ne=v,c>=0?(y=h,w=l,I=m,D=f,$=x,F=g,ce=S,V=b):(y=l,w=h,I=f,D=m,$=g,F=x,ce=b,V=S)):(L=h,k=m,j=x,ne=S,h>=0?(y=l,w=c,I=f,D=d,$=g,F=_,ce=b,V=v):(y=c,w=l,I=d,D=f,$=_,F=g,ce=v,V=b)),L===0)return null;let Z=y/L,re=w/L,ae=1/L,fe=I-Z*k,ve=D-re*k,ee=$-Z*j,me=F-re*j,he=ce-Z*ne,pe=V-re*ne,de=he*me-pe*ee,Ie=fe*pe-ve*he,$e=ee*ve-me*fe;if(i){if(de<0||Ie<0||$e<0)return null}else if((de<0||Ie<0||$e<0)&&(de>0||Ie>0||$e>0))return null;let Re=de+Ie+$e;if(Re===0)return null;let nt=ae*(de*k+Ie*j+$e*ne);return(Re>0?nt<0:nt>0)?null:this.at(nt/Re,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};u(xg,"Ray");var ks=xg,bg=class bg extends Dn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=b0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};u(bg,"MeshBasicMaterial");var On=bg,Kv=new Xe,Io=new ks,ld=new Sn,Zv=new X,cd=new X,ud=new X,hd=new X,Zm=new X,dd=new X,Jv=new X,fd=new X,yg=class yg extends Ft{constructor(e=new Et,t=new On){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){dd.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],f=s[l];h!==0&&(Zm.fromBufferAttribute(f,e),o?dd.addScaledVector(Zm,h):dd.addScaledVector(Zm.sub(t),h))}t.add(dd)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ld.copy(n.boundingSphere),ld.applyMatrix4(s),Io.copy(e.ray).recast(e.near),!(ld.containsPoint(Io.origin)===!1&&(Io.intersectSphere(ld,Zv)===null||Io.origin.distanceToSquared(Zv)>(e.far-e.near)**2))&&(Kv.copy(s).invert(),Io.copy(e.ray).applyMatrix4(Kv),!(n.boundingBox!==null&&Io.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Io)))}_computeIntersections(e,t,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let x=d[g],b=o[x.materialIndex],v=Math.max(x.start,m.start),S=Math.min(a.count,Math.min(x.start+x.count,m.start+m.count));for(let M=v,R=S;M<R;M+=3){let E=a.getX(M),y=a.getX(M+1),w=a.getX(M+2);i=pd(this,b,e,n,c,h,f,E,y,w),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let x=g,b=_;x<b;x+=3){let v=a.getX(x),S=a.getX(x+1),M=a.getX(x+2);i=pd(this,o,e,n,c,h,f,v,S,M),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let x=d[g],b=o[x.materialIndex],v=Math.max(x.start,m.start),S=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let M=v,R=S;M<R;M+=3){let E=M,y=M+1,w=M+2;i=pd(this,b,e,n,c,h,f,E,y,w),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{let g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let x=g,b=_;x<b;x+=3){let v=x,S=x+1,M=x+2;i=pd(this,o,e,n,c,h,f,v,S,M),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}}};u(yg,"Mesh");var Ze=yg;function HA(r,e,t,n,i,s,o,a){let l;if(e.side===Bn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Si,a),l===null)return null;fd.copy(a),fd.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(fd);return c<t.near||c>t.far?null:{distance:c,point:fd.clone(),object:r}}u(HA,"checkIntersection$1");function pd(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,cd),r.getVertexPosition(l,ud),r.getVertexPosition(c,hd);let h=HA(r,e,t,n,cd,ud,hd,Jv);if(h){let f=new X;Jr.getBarycoord(Jv,cd,ud,hd,f),i&&(h.uv=Jr.getInterpolatedAttribute(i,a,l,c,f,new ke)),s&&(h.uv1=Jr.getInterpolatedAttribute(s,a,l,c,f,new ke)),o&&(h.normal=Jr.getInterpolatedAttribute(o,a,l,c,f,new X),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new X,materialIndex:0};Jr.getNormal(cd,ud,hd,d.normal),h.face=d,h.barycoord=f}return h}u(pd,"checkGeometryIntersection");var Gc=new wt,jv=new wt,Qv=new wt,WA=new wt,eM=new Xe,md=new X,Jm=new Sn,tM=new Xe,jm=new ks,_g=class _g extends Ze{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=n0,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Mn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,md),this.boundingBox.expandByPoint(md)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Sn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,md),this.boundingSphere.expandByPoint(md)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jm.copy(this.boundingSphere),Jm.applyMatrix4(i),e.ray.intersectsSphere(Jm)!==!1&&(tM.copy(i).invert(),jm.copy(e.ray).applyMatrix4(tM),!(this.boundingBox!==null&&jm.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,jm)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new wt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===n0?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===XM?this.bindMatrixInverse.copy(this.bindMatrix).invert():ze("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;jv.fromBufferAttribute(i.attributes.skinIndex,e),Qv.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Gc.copy(t),t.set(0,0,0,0)):(Gc.set(t.x,t.y,t.z,1),t.set(0,0,0)),Gc.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let o=Qv.getComponent(s);if(o!==0){let a=jv.getComponent(s);eM.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(WA.copy(Gc).applyMatrix4(eM),o)}}return t.isVector4&&(t.w=Gc.w),t.applyMatrix4(this.bindMatrixInverse)}};u(_g,"SkinnedMesh");var nu=_g,vg=class vg extends Ft{constructor(){super(),this.isBone=!0,this.type="Bone"}};u(vg,"Bone");var xl=vg,Mg=class Mg extends rn{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Wt,h=Wt,f,d){super(null,o,a,l,c,h,i,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};u(Mg,"DataTexture");var zs=Mg,nM=new Xe,XA=new Xe,of=class of{constructor(e=[],t=[]){this.uuid=br(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ze("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:XA;nM.multiplyMatrices(a,t[s]),nM.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new of(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new zs(t,e,e,Kn,si);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],o=t[s];o===void 0&&(ze("Skeleton: No bone found with UUID:",s),o=new xl),this.bones.push(o),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}};u(of,"Skeleton");var iu=of,Sg=class Sg extends _t{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};u(Sg,"InstancedBufferAttribute");var qn=Sg,nl=new Xe,iM=new Xe,gd=[],rM=new Mn,qA=new Xe,Vc=new Ze,Hc=new Sn,wg=class wg extends Ze{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new qn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,qA)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,nl),rM.copy(e.boundingBox).applyMatrix4(nl),this.boundingBox.union(rM)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Sn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,nl),Hc.copy(e.boundingSphere).applyMatrix4(nl),this.boundingSphere.union(Hc)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Vc.geometry=this.geometry,Vc.material=this.material,Vc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hc.copy(this.boundingSphere),Hc.applyMatrix4(n),e.ray.intersectsSphere(Hc)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,nl),iM.multiplyMatrices(n,nl),Vc.matrixWorld=iM,Vc.raycast(e,gd);for(let o=0,a=gd.length;o<a;o++){let l=gd[o];l.instanceId=s,l.object=this,t.push(l)}gd.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new qn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new zs(new Float32Array(i*this.count),i,this.count,wf,si));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}};u(wg,"InstancedMesh");var ru=wg,Lo=new Sn,YA=new ke(.5,.5),xd=new X,Eg=class Eg{constructor(e=new Hn,t=new Hn,n=new Hn,i=new Hn,s=new Hn,o=new Hn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mi,n=!1){let i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],f=s[5],d=s[6],m=s[7],g=s[8],_=s[9],x=s[10],b=s[11],v=s[12],S=s[13],M=s[14],R=s[15];if(i[0].setComponents(c-o,m-h,b-g,R-v).normalize(),i[1].setComponents(c+o,m+h,b+g,R+v).normalize(),i[2].setComponents(c+a,m+f,b+_,R+S).normalize(),i[3].setComponents(c-a,m-f,b-_,R-S).normalize(),n)i[4].setComponents(l,d,x,M).normalize(),i[5].setComponents(c-l,m-d,b-x,R-M).normalize();else if(i[4].setComponents(c-l,m-d,b-x,R-M).normalize(),t===Mi)i[5].setComponents(c+l,m+d,b+x,R+M).normalize();else if(t===hl)i[5].setComponents(l,d,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Lo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Lo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Lo)}intersectsSprite(e){Lo.center.set(0,0,0);let t=YA.distanceTo(e.center);return Lo.radius=.7071067811865476+t,Lo.applyMatrix4(e.matrixWorld),this.intersectsSphere(Lo)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(xd.x=i.normal.x>0?e.max.x:e.min.x,xd.y=i.normal.y>0?e.max.y:e.min.y,xd.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(xd)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};u(Eg,"Frustum");var Gs=Eg,sM=new Xe,af=class af{constructor(){this.coordinateSystem=Mi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let s=t[i];sM.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new Gs),n[i].setFromProjectionMatrix(sM,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Gs),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new af().copy(this)}};u(af,"FrustumArray");var Ud=af;var Tg=class Tg extends Dn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}};u(Tg,"LineBasicMaterial");var bl=Tg,Fd=new X,Bd=new X,oM=new Xe,Wc=new ks,bd=new Sn,Qm=new X,aM=new X,Ag=class Ag extends Ft{constructor(e=new Et,t=new bl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Fd.fromBufferAttribute(t,i-1),Bd.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Fd.distanceTo(Bd);e.setAttribute("lineDistance",new Pt(n,1))}else ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bd.copy(n.boundingSphere),bd.applyMatrix4(i),bd.radius+=s,e.ray.intersectsSphere(bd)===!1)return;oM.copy(i).invert(),Wc.copy(e.ray).applyMatrix4(oM);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=m,x=g-1;_<x;_+=c){let b=h.getX(_),v=h.getX(_+1),S=yd(this,e,Wc,l,b,v,_);S&&t.push(S)}if(this.isLineLoop){let _=h.getX(g-1),x=h.getX(m),b=yd(this,e,Wc,l,_,x,g-1);b&&t.push(b)}}else{let m=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=m,x=g-1;_<x;_+=c){let b=yd(this,e,Wc,l,_,_+1,_);b&&t.push(b)}if(this.isLineLoop){let _=yd(this,e,Wc,l,g-1,m,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};u(Ag,"Line");var Go=Ag;function yd(r,e,t,n,i,s,o){let a=r.geometry.attributes.position;if(Fd.fromBufferAttribute(a,i),Bd.fromBufferAttribute(a,s),t.distanceSqToSegment(Fd,Bd,Qm,aM)>n)return;Qm.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Qm);if(!(c<e.near||c>e.far))return{distance:c,point:aM.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}u(yd,"checkIntersection");var lM=new X,cM=new X,Rg=class Rg extends Go{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)lM.fromBufferAttribute(t,i),cM.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+lM.distanceTo(cM);e.setAttribute("lineDistance",new Pt(n,1))}else ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};u(Rg,"LineSegments");var su=Rg,Cg=class Cg extends Go{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}};u(Cg,"LineLoop");var ou=Cg,Pg=class Pg extends Dn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};u(Pg,"PointsMaterial");var yl=Pg,uM=new Xe,r0=new ks,_d=new Sn,vd=new X,Ig=class Ig extends Ft{constructor(e=new Et,t=new yl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_d.copy(n.boundingSphere),_d.applyMatrix4(i),_d.radius+=s,e.ray.intersectsSphere(_d)===!1)return;uM.copy(i).invert(),r0.copy(e.ray).applyMatrix4(uM);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=d,_=m;g<_;g++){let x=c.getX(g);vd.fromBufferAttribute(f,x),hM(vd,x,l,i,e,t,this)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let g=d,_=m;g<_;g++)vd.fromBufferAttribute(f,g),hM(vd,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};u(Ig,"Points");var au=Ig;function hM(r,e,t,n,i,s,o){let a=r0.distanceSqToPoint(r);if(a<t){let l=new X;r0.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}u(hM,"testPoint");var Lg=class Lg extends rn{constructor(e=[],t=Ko,n,i,s,o,a,l,c,h){super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};u(Lg,"CubeTexture");var lu=Lg,Ng=class Ng extends rn{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};u(Ng,"CanvasTexture");var Vs=Ng;var Dg=class Dg extends rn{constructor(e,t,n=Xi,i,s,o,a=Wt,l=Wt,c,h=es,f=1){if(h!==es&&h!==cs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}};u(Dg,"DepthTexture");var ns=Dg,Og=class Og extends ns{constructor(e,t=Xi,n=Ko,i,s,o=Wt,a=Wt,l,c=es){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,i,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}};u(Og,"CubeDepthTexture");var cu=Og,Ug=class Ug extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};u(Ug,"ExternalTexture");var uu=Ug,lf=class lf extends Et{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],f=[],d=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(h,3)),this.setAttribute("uv",new Pt(f,2));function g(_,x,b,v,S,M,R,E,y,w,L){let I=M/y,D=R/w,k=M/2,$=R/2,F=E/2,j=y+1,ce=w+1,V=0,ne=0,Z=new X;for(let re=0;re<ce;re++){let ae=re*D-$;for(let fe=0;fe<j;fe++){let ve=fe*I-k;Z[_]=ve*v,Z[x]=ae*S,Z[b]=F,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[x]=0,Z[b]=E>0?1:-1,h.push(Z.x,Z.y,Z.z),f.push(fe/y),f.push(1-re/w),V+=1}}for(let re=0;re<w;re++)for(let ae=0;ae<y;ae++){let fe=d+ae+j*re,ve=d+ae+j*(re+1),ee=d+(ae+1)+j*(re+1),me=d+(ae+1)+j*re;l.push(fe,ve,me),l.push(ve,ee,me),ne+=6}a.addGroup(m,ne,L),m+=ne,d+=V}u(g,"buildPlane")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lf(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};u(lf,"BoxGeometry");var dr=lf;var cf=class cf extends Et{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],f=[],d=[],m=[],g=0,_=[],x=n/2,b=0;v(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Pt(f,3)),this.setAttribute("normal",new Pt(d,3)),this.setAttribute("uv",new Pt(m,2));function v(){let M=new X,R=new X,E=0,y=(t-e)/n;for(let w=0;w<=s;w++){let L=[],I=w/s,D=I*(t-e)+e;for(let k=0;k<=i;k++){let $=k/i,F=$*l+a,j=Math.sin(F),ce=Math.cos(F);R.x=D*j,R.y=-I*n+x,R.z=D*ce,f.push(R.x,R.y,R.z),M.set(j,y,ce).normalize(),d.push(M.x,M.y,M.z),m.push($,1-I),L.push(g++)}_.push(L)}for(let w=0;w<i;w++)for(let L=0;L<s;L++){let I=_[L][w],D=_[L+1][w],k=_[L+1][w+1],$=_[L][w+1];(e>0||L!==0)&&(h.push(I,D,$),E+=3),(t>0||L!==s-1)&&(h.push(D,k,$),E+=3)}c.addGroup(b,E,0),b+=E}u(v,"generateTorso");function S(M){let R=g,E=new ke,y=new X,w=0,L=M===!0?e:t,I=M===!0?1:-1;for(let k=1;k<=i;k++)f.push(0,x*I,0),d.push(0,I,0),m.push(.5,.5),g++;let D=g;for(let k=0;k<=i;k++){let F=k/i*l+a,j=Math.cos(F),ce=Math.sin(F);y.x=L*ce,y.y=x*I,y.z=L*j,f.push(y.x,y.y,y.z),d.push(0,I,0),E.x=j*.5+.5,E.y=ce*.5*I+.5,m.push(E.x,E.y),g++}for(let k=0;k<i;k++){let $=R+k,F=D+k;M===!0?h.push(F,F+1,$):h.push(F+1,F,$),w+=3}c.addGroup(b,w,M===!0?1:2),b+=w}u(S,"generateCap")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};u(cf,"CylinderGeometry");var Yn=cf,uf=class uf extends Yn{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new uf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};u(uf,"ConeGeometry");var Wi=uf,hf=class hf extends Et{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Pt(s,3)),this.setAttribute("normal",new Pt(s.slice(),3)),this.setAttribute("uv",new Pt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let S=new X,M=new X,R=new X;for(let E=0;E<t.length;E+=3)m(t[E+0],S),m(t[E+1],M),m(t[E+2],R),l(S,M,R,v)}u(a,"subdivide");function l(v,S,M,R){let E=R+1,y=[];for(let w=0;w<=E;w++){y[w]=[];let L=v.clone().lerp(M,w/E),I=S.clone().lerp(M,w/E),D=E-w;for(let k=0;k<=D;k++)k===0&&w===E?y[w][k]=L:y[w][k]=L.clone().lerp(I,k/D)}for(let w=0;w<E;w++)for(let L=0;L<2*(E-w)-1;L++){let I=Math.floor(L/2);L%2===0?(d(y[w][I+1]),d(y[w+1][I]),d(y[w][I])):(d(y[w][I+1]),d(y[w+1][I+1]),d(y[w+1][I]))}}u(l,"subdivideFace");function c(v){let S=new X;for(let M=0;M<s.length;M+=3)S.x=s[M+0],S.y=s[M+1],S.z=s[M+2],S.normalize().multiplyScalar(v),s[M+0]=S.x,s[M+1]=S.y,s[M+2]=S.z}u(c,"applyRadius");function h(){let v=new X;for(let S=0;S<s.length;S+=3){v.x=s[S+0],v.y=s[S+1],v.z=s[S+2];let M=x(v)/2/Math.PI+.5,R=b(v)/Math.PI+.5;o.push(M,1-R)}g(),f()}u(h,"generateUVs");function f(){for(let v=0;v<o.length;v+=6){let S=o[v+0],M=o[v+2],R=o[v+4],E=Math.max(S,M,R),y=Math.min(S,M,R);E>.9&&y<.1&&(S<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),R<.2&&(o[v+4]+=1))}}u(f,"correctSeam");function d(v){s.push(v.x,v.y,v.z)}u(d,"pushVertex");function m(v,S){let M=v*3;S.x=e[M+0],S.y=e[M+1],S.z=e[M+2]}u(m,"getVertexByIndex");function g(){let v=new X,S=new X,M=new X,R=new X,E=new ke,y=new ke,w=new ke;for(let L=0,I=0;L<s.length;L+=9,I+=6){v.set(s[L+0],s[L+1],s[L+2]),S.set(s[L+3],s[L+4],s[L+5]),M.set(s[L+6],s[L+7],s[L+8]),E.set(o[I+0],o[I+1]),y.set(o[I+2],o[I+3]),w.set(o[I+4],o[I+5]),R.copy(v).add(S).add(M).divideScalar(3);let D=x(R);_(E,I+0,v,D),_(y,I+2,S,D),_(w,I+4,M,D)}}u(g,"correctUVs");function _(v,S,M,R){R<0&&v.x===1&&(o[S]=v.x-1),M.x===0&&M.z===0&&(o[S]=R/2/Math.PI+.5)}u(_,"correctUV");function x(v){return Math.atan2(v.z,-v.x)}u(x,"azimuth");function b(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}u(b,"inclination")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hf(e.vertices,e.indices,e.radius,e.detail)}};u(hf,"PolyhedronGeometry");var kd=hf;var df=class df extends kd{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new df(e.radius,e.detail)}};u(df,"IcosahedronGeometry");var Hs=df;var ff=class ff extends Et{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=e/a,d=t/l,m=[],g=[],_=[],x=[];for(let b=0;b<h;b++){let v=b*d-o;for(let S=0;S<c;S++){let M=S*f-s;g.push(M,-v,0),_.push(0,0,1),x.push(S/a),x.push(1-b/l)}}for(let b=0;b<l;b++)for(let v=0;v<a;v++){let S=v+c*b,M=v+c*(b+1),R=v+1+c*(b+1),E=v+1+c*b;m.push(S,M,E),m.push(M,R,E)}this.setIndex(m),this.setAttribute("position",new Pt(g,3)),this.setAttribute("normal",new Pt(_,3)),this.setAttribute("uv",new Pt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ff(e.width,e.height,e.widthSegments,e.heightSegments)}};u(ff,"PlaneGeometry");var fr=ff;var pf=class pf extends Et{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new X,d=new X,m=[],g=[],_=[],x=[];for(let b=0;b<=n;b++){let v=[],S=b/n,M=o+S*a,R=e*Math.cos(M),E=Math.sqrt(e*e-R*R),y=0;b===0&&o===0?y=.5/t:b===n&&l===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){let L=w/t,I=i+L*s;f.x=-E*Math.cos(I),f.y=R,f.z=E*Math.sin(I),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),x.push(L+y,1-S),v.push(c++)}h.push(v)}for(let b=0;b<n;b++)for(let v=0;v<t;v++){let S=h[b][v+1],M=h[b][v],R=h[b+1][v],E=h[b+1][v+1];(b!==0||o>0)&&m.push(S,M,E),(b!==n-1||l<Math.PI)&&m.push(M,R,E)}this.setIndex(m),this.setAttribute("position",new Pt(g,3)),this.setAttribute("normal",new Pt(_,3)),this.setAttribute("uv",new Pt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};u(pf,"SphereGeometry");var Ws=pf;var mf=class mf extends Et{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],f=[],d=new X,m=new X,g=new X;for(let _=0;_<=n;_++){let x=o+_/n*a;for(let b=0;b<=i;b++){let v=b/i*s;m.x=(e+t*Math.cos(x))*Math.cos(v),m.y=(e+t*Math.cos(x))*Math.sin(v),m.z=t*Math.sin(x),c.push(m.x,m.y,m.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),g.subVectors(m,d).normalize(),h.push(g.x,g.y,g.z),f.push(b/i),f.push(_/n)}}for(let _=1;_<=n;_++)for(let x=1;x<=i;x++){let b=(i+1)*_+x-1,v=(i+1)*(_-1)+x-1,S=(i+1)*(_-1)+x,M=(i+1)*_+x;l.push(b,v,M),l.push(v,S,M)}this.setIndex(l),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(h,3)),this.setAttribute("uv",new Pt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};u(mf,"TorusGeometry");var is=mf;function jo(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];if(dM(i))i.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(dM(i[0])){let s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}u(jo,"cloneUniforms");function Tn(r){let e={};for(let t=0;t<r.length;t++){let n=jo(r[t]);for(let i in n)e[i]=n[i]}return e}u(Tn,"mergeUniforms");function dM(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}u(dM,"isThreeObject");function $A(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}u($A,"cloneUniformsGroups");function V0(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}u(V0,"getUnlitUniformColorSpace");var Qo={clone:jo,merge:Tn},KA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Fg=class Fg extends Dn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=KA,this.fragmentShader=ZA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jo(e.uniforms),this.uniformsGroups=$A(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Se().setHex(i.value);break;case"v2":this.uniforms[n].value=new ke().fromArray(i.value);break;case"v3":this.uniforms[n].value=new X().fromArray(i.value);break;case"v4":this.uniforms[n].value=new wt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ye().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Xe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}};u(Fg,"ShaderMaterial");var Un=Fg,Bg=class Bg extends Un{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};u(Bg,"RawShaderMaterial");var zd=Bg,kg=class kg extends Dn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=op,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};u(kg,"MeshStandardMaterial");var Zt=kg,zg=class zg extends Zt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ke(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:u(function(){return lt(2.5*(this.ior-1)/(this.ior+1),0,1)},"get"),set:u(function(t){this.ior=(1+.4*t)/(1-.4*t)},"set")}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Oo('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Oo('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};u(zg,"MeshPhysicalMaterial");var Fn=zg;var Gg=class Gg extends Dn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=KM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};u(Gg,"MeshDepthMaterial");var Gd=Gg,Vg=class Vg extends Dn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};u(Vg,"MeshDistanceMaterial");var Vd=Vg;function Ds(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}u(Ds,"convertArray");function Xc(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}u(Xc,"hasTangents");function JA(r){function e(i,s){return r[i]-r[s]}u(e,"compareTime");let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}u(JA,"getKeyframeOrder");function fM(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){let a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}u(fM,"sortedArray");function jA(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}u(jA,"flattenJSON");var Hg=class Hg{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}};u(Hg,"Interpolant");var pr=Hg,Wg=class Wg extends pr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:No,endingEnd:No}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Do:s=e,a=2*t-n;break;case Kc:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Do:o=e,l=2*n-t;break;case Kc:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(i-t),_=g*g,x=_*g,b=-d*x+2*d*_-d*g,v=(1+d)*x+(-1.5-2*d)*_+(-.5+d)*g+1,S=(-1-m)*x+(1.5+m)*_+.5*g,M=m*x-m*_;for(let R=0;R!==a;++R)s[R]=b*o[h+R]+v*o[c+R]+S*o[l+R]+M*o[f+R];return s}};u(Wg,"CubicInterpolant");var Hd=Wg,Xg=class Xg extends pr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),f=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*f+o[l+d]*h;return s}};u(Xg,"LinearInterpolant");var hu=Xg,qg=class qg extends pr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}};u(qg,"DiscreteInterpolant");var Wd=qg,Yg=class Yg extends pr{interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(n-t)/(i-t),_=1-g;for(let x=0;x!==a;++x)s[x]=o[c+x]*_+o[l+x]*g;return s}let d=a*2,m=e-1;for(let g=0;g!==a;++g){let _=o[c+g],x=o[l+g],b=m*d+g*2,v=f[b],S=f[b+1],M=e*d+g*2,R=h[M],E=h[M+1],y=eR(n,t,v,R,i);s[g]=cS(y,_,S,E,x)}return s}};u(Yg,"BezierInterpolant");var Xd=Yg;function cS(r,e,t,n,i){let s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*n+r*r*r*i}u(cS,"cubicBezier");function QA(r,e,t,n,i){let s=1-r;return 3*s*s*(t-e)+6*s*r*(n-t)+3*r*r*(i-n)}u(QA,"cubicBezierSlope");function eR(r,e,t,n,i){let s=(r-e)/(i-e);for(let o=0;o<8;o++){let a=cS(s,e,t,n,i)-r;if(Math.abs(a)<1e-10)break;let l=QA(s,e,t,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}u(eR,"solveBezierParameter");var $g=class $g{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ds(t,this.TimeBufferType),this.values=Ds(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ds(e.times,Array),values:Ds(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Xc(e.settings)&&(n.settings={inTangents:Ds(e.settings.inTangents,Array),outTangents:Ds(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Wd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Hd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Xd(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Uo:t=this.InterpolantFactoryMethodDiscrete;break;case Fo:t=this.InterpolantFactoryMethodLinear;break;case wd:t=this.InterpolantFactoryMethodSmooth;break;case i0:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ze("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Uo;case this.InterpolantFactoryMethodLinear:return Fo;case this.InterpolantFactoryMethodSmooth:return wd;case this.InterpolantFactoryMethodBezier:return i0}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;Xc(this.settings)&&(pM(this.settings.inTangents,e),pM(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Xc(this.settings)&&(mM(this.settings.inTangents,e),mM(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(qe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){qe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){qe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&lA(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){qe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===wd,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let f=a*n,d=f-n,m=f+n;for(let g=0;g!==n;++g){let _=t[f+g];if(_!==t[d+g]||_!==t[m+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,d=o*n;for(let m=0;m!==n;++m)t[d+m]=t[f+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Xc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};u($g,"KeyframeTrack");var $n=$g;function pM(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]+=e}u(pM,"shiftTangentTimes");function mM(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]*=e}u(mM,"scaleTangentTimes");$n.prototype.ValueTypeName="";$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=Fo;var Kg=class Kg extends $n{constructor(e,t,n){super(e,t,n)}};u(Kg,"BooleanKeyframeTrack");var rs=Kg;rs.prototype.ValueTypeName="bool";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=Uo;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Zg=class Zg extends $n{constructor(e,t,n,i){super(e,t,n,i)}};u(Zg,"ColorKeyframeTrack");var du=Zg;du.prototype.ValueTypeName="color";var Jg=class Jg extends $n{constructor(e,t,n,i){super(e,t,n,i)}};u(Jg,"NumberKeyframeTrack");var ss=Jg;ss.prototype.ValueTypeName="number";var jg=class jg extends pr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)Kt.slerpFlat(s,0,o,c-a,o,c,l);return s}};u(jg,"QuaternionLinearInterpolant");var qd=jg,Qg=class Qg extends $n{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new qd(this.times,this.values,this.getValueSize(),e)}};u(Qg,"QuaternionKeyframeTrack");var os=Qg;os.prototype.ValueTypeName="quaternion";os.prototype.InterpolantFactoryMethodSmooth=void 0;var ex=class ex extends $n{constructor(e,t,n){super(e,t,n)}};u(ex,"StringKeyframeTrack");var as=ex;as.prototype.ValueTypeName="string";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=Uo;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var tx=class tx extends $n{constructor(e,t,n,i){super(e,t,n,i)}};u(tx,"VectorKeyframeTrack");var Xs=tx;Xs.prototype.ValueTypeName="vector";var nx=class nx{constructor(e="",t=-1,n=[],i=sp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=br(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(nR(n[o]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push($n.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);let h=JA(l);l=fM(l,1,h),c=fM(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new ss(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(s);if(h&&h.length>1){let f=h[1],d=i[f];d||(i[f]=d=[]),d.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};u(nx,"AnimationClip");var Vo=nx;function tR(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ss;case"vector":case"vector2":case"vector3":case"vector4":return Xs;case"color":return du;case"quaternion":return os;case"bool":case"boolean":return rs;case"string":return as}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}u(tR,"getTrackTypeForValueTypeName");function nR(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=tR(r.type);if(r.times===void 0){let n=[],i=[];jA(r.keys,n,i,"value"),r.times=n,r.values=i}let t;return e.parse!==void 0?t=e.parse(r):t=new e(r.name,r.times,r.values,r.interpolation),Xc(r.settings)&&(t.settings={inTangents:Ds(r.settings.inTangents,Float32Array),outTangents:Ds(r.settings.outTangents,Float32Array)}),t}u(nR,"parseKeyframeTrack");var ur={enabled:!1,files:{},add:u(function(r,e){this.enabled!==!1&&(gM(r)||(this.files[r]=e))},"add"),get:u(function(r){if(this.enabled!==!1&&!gM(r))return this.files[r]},"get"),remove:u(function(r){delete this.files[r]},"remove"),clear:u(function(){this.files={}},"clear")};function gM(r){try{let e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}u(gM,"isBlobURL");var ix=class ix{constructor(e,t,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let m=c[f],g=c[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}};u(ix,"LoadingManager");var _l=ix,uS=new _l,rx=class rx{constructor(e){this.manager=e!==void 0?e:uS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};u(rx,"Loader");var mr=rx;mr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zr={},sx=class sx extends Error{constructor(e,t){super(e),this.response=t}};u(sx,"HttpError");var s0=sx,ox=class ox extends mr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=ur.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Zr[e]!==void 0){Zr[e].push({onLoad:t,onProgress:n,onError:i});return}Zr[e]=[],Zr[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&ze("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Zr[e],f=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=d?parseInt(d):0,g=m!==0,_=0,x=new ReadableStream({start(b){v();function v(){f.read().then(({done:S,value:M})=>{if(S)b.close();else{_+=M.byteLength;let R=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:m});for(let E=0,y=h.length;E<y;E++){let w=h[E];w.onProgress&&w.onProgress(R)}b.enqueue(M),v()}},S=>{b.error(S)})}u(v,"readData")}});return new Response(x)}else throw new s0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(d);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{ur.add(`file:${e}`,c);let h=Zr[e];delete Zr[e];for(let f=0,d=h.length;f<d;f++){let m=h[f];m.onLoad&&m.onLoad(c)}}).catch(c=>{let h=Zr[e];if(h===void 0)throw this.manager.itemError(e),c;delete Zr[e];for(let f=0,d=h.length;f<d;f++){let m=h[f];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};u(ox,"FileLoader");var vl=ox;var il=new WeakMap,ax=class ax extends mr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=ur.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let f=il.get(o);f===void 0&&(f=[],il.set(o,f)),f.push({onLoad:t,onError:i})}return o}let a=dl("img");function l(){h(),t&&t(this);let f=il.get(this)||[];for(let d=0;d<f.length;d++){let m=f[d];m.onLoad&&m.onLoad(this)}il.delete(this),s.manager.itemEnd(e)}u(l,"onImageLoad");function c(f){h(),i&&i(f),ur.remove(`image:${e}`);let d=il.get(this)||[];for(let m=0;m<d.length;m++){let g=d[m];g.onError&&g.onError(f)}il.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}u(c,"onImageError");function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return u(h,"removeEventListeners"),a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ur.add(`image:${e}`,a),s.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};u(ax,"ImageLoader");var Yd=ax;var lx=class lx extends mr{constructor(e){super(e)}load(e,t,n,i){let s=new rn,o=new Yd(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}};u(lx,"TextureLoader");var fu=lx,cx=class cx extends Ft{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};u(cx,"Light");var Ho=cx,ux=class ux extends Ho{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}};u(ux,"HemisphereLight");var pu=ux,e0=new Xe,xM=new X,bM=new X,hx=class hx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gs,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;xM.setFromMatrixPosition(e.matrixWorld),t.position.copy(xM),bM.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bM),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){e0.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(e0,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,o=i?i.z/s.x:1,a=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;e.coordinateSystem===hl||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(e0)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};u(hx,"LightShadow");var Ml=hx,Md=new X,Sd=new Kt,cr=new X,dx=class dx extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Md,Sd,cr),cr.x===1&&cr.y===1&&cr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Md,Sd,cr.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Md,Sd,cr),cr.x===1&&cr.y===1&&cr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Md,Sd,cr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};u(dx,"Camera");var mu=dx,Ns=new X,yM=new ke,_M=new ke,fx=class fx extends mu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Bo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(qc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bo*2*Math.atan(Math.tan(qc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ns.x,Ns.y).multiplyScalar(-e/Ns.z),Ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ns.x,Ns.y).multiplyScalar(-e/Ns.z)}getViewSize(e,t){return this.getViewBounds(e,yM,_M),t.subVectors(_M,yM)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(qc*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};u(fx,"PerspectiveCamera");var nn=fx,px=class px extends Ml{constructor(){super(new nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Bo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}};u(px,"SpotLightShadow");var o0=px,mx=class mx extends Ho{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new o0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}};u(mx,"SpotLight");var gu=mx,gx=class gx extends Ml{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0}};u(gx,"PointLightShadow");var a0=gx,xx=class xx extends Ho{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new a0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}};u(xx,"PointLight");var xu=xx,bx=class bx extends mu{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};u(bx,"OrthographicCamera");var Wo=bx,yx=class yx extends Ml{constructor(){super(new Wo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};u(yx,"DirectionalLightShadow");var l0=yx,_x=class _x extends Ho{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new l0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};u(_x,"DirectionalLight");var Xo=_x;var vx=class vx{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};u(vx,"LoaderUtils");var ls=vx,Mx=class Mx extends Et{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};u(Mx,"InstancedBufferGeometry");var bu=Mx;var t0=new WeakMap,Sx=class Sx extends mr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ze("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ze("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=ur.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t0.has(o)===!0?(i&&i(t0.get(o)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return ur.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),t0.set(l,c),ur.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});ur.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};u(Sx,"ImageBitmapLoader");var yu=Sx;var rl=-90,sl=1,wx=class wx extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new nn(rl,sl,e,t);i.layers=this.layers,this.add(i);let s=new nn(rl,sl,e,t);s.layers=this.layers,this.add(s);let o=new nn(rl,sl,e,t);o.layers=this.layers,this.add(o);let a=new nn(rl,sl,e,t);a.layers=this.layers,this.add(a);let l=new nn(rl,sl,e,t);l.layers=this.layers,this.add(l);let c=new nn(rl,sl,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===Mi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}};u(wx,"CubeCamera");var Sl=wx,Ex=class Ex extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};u(Ex,"ArrayCamera");var $d=Ex;var Tx=class Tx{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,s=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Kt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){let o=this._workIndex*s;Kt.multiplyQuaternionsFlat(e,o,e,t,e,n),Kt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){let o=1-i;for(let a=0;a!==s;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}};u(Tx,"PropertyMixer");var Kd=Tx,H0="\\[\\]\\.:\\/",iR=new RegExp("["+H0+"]","g"),W0="[^"+H0+"]",rR="[^"+H0.replace("\\.","")+"]",sR=/((?:WC+[\/:])*)/.source.replace("WC",W0),oR=/(WCOD+)?/.source.replace("WCOD",rR),aR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",W0),lR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",W0),cR=new RegExp("^"+sR+oR+aR+lR+"$"),uR=["material","materials","bones","map"],Ax=class Ax{constructor(e,t,n){let i=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}};u(Ax,"Composite");var c0=Ax,Us=class Us{constructor(e,t,n){this.path=t,this.parsedPath=n||Us.parseTrackName(t),this.node=Us.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Us.Composite(e,t,n):new Us(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(iR,"")}static parseTrackName(e){let t=cR.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);uR.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=u(function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},"searchNodeSubtree"),i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=Us.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;qe("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};u(Us,"PropertyBinding");var Mt=Us;Mt.Composite=c0;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Rx=class Rx{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let s=t.tracks,o=s.length,a=new Array(o),l={endingStart:No,endingEnd:No};for(let c=0;c!==o;++c){let h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=rp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,s=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case $M:for(let h=0,f=l.length;h!==f;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case sp:default:for(let h=0,f=l.length;h!==f;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,s=this._loopCount,o=n===YM;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===qM){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=s,this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Do,i.endingEnd=Do):(e?i.endingStart=this.zeroSlopeAtStart?Do:No:i.endingStart=Kc,t?i.endingEnd=this.zeroSlopeAtEnd?Do:No:i.endingEnd=Kc)}_scheduleFading(e,t,n){let i=this._mixer,s=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}};u(Rx,"AnimationAction");var Zd=Rx,hR=new Float32Array(1),Cx=class Cx extends Hi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let f=0;f!==s;++f){let d=i[f],m=d.name,g=h[m];if(g!==void 0)++g.referenceCount,o[f]=g;else{if(g=o[f],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,m));continue}let _=t&&t._propertyBindings[f].binding.parsedPath;g=new Kd(Mt.create(n,m,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,m),o[f]=g}a[f].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,s=this._actionsByClip,o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let f=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete f[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,s=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new hu(new Float32Array(2),new Float32Array(2),1,hR),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let i=t||this._root,s=i.uuid,o=typeof e=="string"?Vo.findByName(i,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=sp),l!==void 0){let f=l.actionByRoot[s];if(f!==void 0&&f.blendMode===n)return f;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new Zd(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(e,t){let n=t||this._root,i=n.uuid,s=typeof e=="string"?Vo.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){let o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,f=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,f._cacheIndex=h,t[h]=f,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(let o in s){let a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};u(Cx,"AnimationMixer");var qo=Cx;var vM=new Xe,Px=class Px{constructor(e,t,n=0,i=1/0){this.ray=new ks(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ml,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return vM.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vM),this}intersectObject(e,t=!0,n=[]){return u0(e,this,n,t),n.sort(MM),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)u0(e[i],this,n,t);return n.sort(MM),n}};u(Px,"Raycaster");var _u=Px;function MM(r,e){return r.distance-e.distance}u(MM,"ascSort");function u0(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let s=r.children;for(let o=0,a=s.length;o<a;o++)u0(s[o],e,t,!0)}}u(u0,"intersect");var gf=class gf{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};u(gf,"Matrix2"),gf.prototype.isMatrix2=!0;var h0=gf;function X0(r,e,t,n){let i=dR(n);switch(t){case P0:return r*e;case wf:return r*e/i.components*i.byteLength;case Ef:return r*e/i.components*i.byteLength;case xr:return r*e*2/i.components*i.byteLength;case Tf:return r*e*2/i.components*i.byteLength;case I0:return r*e*3/i.components*i.byteLength;case Kn:return r*e*4/i.components*i.byteLength;case Af:return r*e*4/i.components*i.byteLength;case Su:case wu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Eu:case Tu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Cf:case If:return Math.max(r,16)*Math.max(e,8)/4;case Rf:case Pf:return Math.max(r,8)*Math.max(e,8)/2;case Lf:case Nf:case Of:case Uf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Df:case Au:case Ff:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Bf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case kf:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case zf:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Gf:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Hf:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Wf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Xf:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case qf:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Yf:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case $f:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Kf:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Zf:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Jf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case jf:case Qf:case ep:return Math.ceil(r/4)*Math.ceil(e/4)*16;case tp:case np:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ru:case ip:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}u(X0,"getByteLength");function dR(r){switch(r){case En:case T0:return{byteLength:1,components:1};case Rl:case A0:case oi:return{byteLength:2,components:1};case Mf:case Sf:return{byteLength:2,components:4};case Xi:case vf:case si:return{byteLength:4,components:1};case R0:case C0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}u(dR,"getTextureTypeByteLength");typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function LS(){let r=null,e=!1,t=null,n=null;function i(s,o){n=r.requestAnimationFrame(i),t(s,o)}return u(i,"onAnimationFrame"),{start:u(function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},"start"),stop:u(function(){r!==null&&r.cancelAnimationFrame(n),e=!1},"stop"),setAnimationLoop:u(function(s){t=s},"setAnimationLoop"),setContext:u(function(s){r=s},"setContext")}}u(LS,"WebGLAnimation");function pR(r){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,f=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=r.HALF_FLOAT:m=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=r.SHORT;else if(c instanceof Uint32Array)m=r.UNSIGNED_INT;else if(c instanceof Int32Array)m=r.INT;else if(c instanceof Int8Array)m=r.BYTE;else if(c instanceof Uint8Array)m=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}u(t,"createBuffer");function n(a,l,c){let h=l.array,f=l.updateRanges;if(r.bindBuffer(c,a),f.length===0)r.bufferSubData(c,0,h);else{f.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<f.length;m++){let g=f[d],_=f[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let m=0,g=f.length;m<g;m++){let _=f[m];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}u(n,"updateBuffer");function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}u(i,"get");function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}u(s,"remove");function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return u(o,"update"),{get:i,remove:s,update:o}}u(pR,"WebGLAttributes");var mR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gR=`#ifdef USE_ALPHAHASH
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
#endif`,xR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_R=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vR=`#ifdef USE_AOMAP
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
#endif`,MR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SR=`#ifdef USE_BATCHING
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
#endif`,wR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ER=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,AR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,RR=`#ifdef USE_IRIDESCENCE
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
#endif`,CR=`#ifdef USE_BUMPMAP
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
#endif`,PR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,IR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,DR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,OR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,UR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,FR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,BR=`#define PI 3.141592653589793
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
} // validated`,kR=`vec3 transformedNormal = objectNormal;
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
#endif`,zR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,GR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,VR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,WR="gl_FragColor = linearToOutputTexel( gl_FragColor );",XR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qR=`#ifdef USE_ENVMAP
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
#endif`,YR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,$R=`#ifdef USE_ENVMAP
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
#endif`,KR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZR=`#ifdef USE_ENVMAP
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
#endif`,JR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tC=`#ifdef USE_GRADIENTMAP
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
}`,nC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sC=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,oC=`#ifdef USE_ENVMAP
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
#endif`,aC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hC=`PhysicalMaterial material;
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
#endif`,dC=`uniform sampler2D dfgLUT;
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
}`,fC=`
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
#endif`,pC=`#if defined( RE_IndirectDiffuse )
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
#endif`,mC=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gC=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,xC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_C=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,MC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,SC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wC=`#if defined( USE_POINTS_UV )
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
#endif`,EC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,AC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,RC=`#if defined( USE_MORPHCOLORS )
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
#endif`,CC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PC=`#ifdef USE_MORPHTARGETS
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
#endif`,IC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,NC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,DC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,FC=`#ifdef USE_NORMALMAP
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
#endif`,BC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,HC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,WC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,XC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$C=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,KC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ZC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,QC=`float getShadowMask() {
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
}`,eP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tP=`#ifdef USE_SKINNING
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
#endif`,nP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iP=`#ifdef USE_SKINNING
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
#endif`,rP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aP=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lP=`#ifdef USE_TRANSMISSION
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
#endif`,cP=`#ifdef USE_TRANSMISSION
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
#endif`,uP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,pP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mP=`uniform sampler2D t2D;
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
}`,gP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xP=`uniform float backgroundBlurriness;
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
}`,bP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_P=`#include <common>
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
}`,vP=`#if DEPTH_PACKING == 3200
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
}`,MP=`#define DISTANCE
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
}`,SP=`#define DISTANCE
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
}`,wP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,EP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TP=`uniform float scale;
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
}`,AP=`uniform vec3 diffuse;
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
}`,RP=`#include <common>
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
}`,CP=`uniform vec3 diffuse;
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
}`,PP=`#define LAMBERT
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
}`,IP=`#define LAMBERT
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
}`,LP=`#define MATCAP
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
}`,NP=`#define MATCAP
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
}`,DP=`#define NORMAL
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
}`,OP=`#define NORMAL
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
}`,UP=`#define PHONG
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
}`,FP=`#define PHONG
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
}`,BP=`#define STANDARD
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
}`,kP=`#define STANDARD
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
}`,zP=`#define TOON
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
}`,GP=`#define TOON
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
}`,VP=`uniform float size;
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
}`,HP=`uniform vec3 diffuse;
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
}`,WP=`#include <common>
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
}`,XP=`uniform vec3 color;
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
}`,qP=`uniform float rotation;
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
}`,YP=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:mR,alphahash_pars_fragment:gR,alphamap_fragment:xR,alphamap_pars_fragment:bR,alphatest_fragment:yR,alphatest_pars_fragment:_R,aomap_fragment:vR,aomap_pars_fragment:MR,batching_pars_vertex:SR,batching_vertex:wR,begin_vertex:ER,beginnormal_vertex:TR,bsdfs:AR,iridescence_fragment:RR,bumpmap_pars_fragment:CR,clipping_planes_fragment:PR,clipping_planes_pars_fragment:IR,clipping_planes_pars_vertex:LR,clipping_planes_vertex:NR,color_fragment:DR,color_pars_fragment:OR,color_pars_vertex:UR,color_vertex:FR,common:BR,defaultnormal_vertex:kR,displacementmap_pars_vertex:zR,displacementmap_vertex:GR,emissivemap_fragment:VR,emissivemap_pars_fragment:HR,colorspace_fragment:WR,colorspace_pars_fragment:XR,envmap_fragment:qR,envmap_common_pars_fragment:YR,envmap_pars_fragment:$R,envmap_pars_vertex:KR,envmap_physical_pars_fragment:oC,envmap_vertex:ZR,fog_vertex:JR,fog_pars_vertex:jR,fog_fragment:QR,fog_pars_fragment:eC,gradientmap_pars_fragment:tC,lightmap_pars_fragment:nC,lights_lambert_fragment:iC,lights_lambert_pars_fragment:rC,lights_pars_begin:sC,lights_toon_fragment:aC,lights_toon_pars_fragment:lC,lights_phong_fragment:cC,lights_phong_pars_fragment:uC,lights_physical_fragment:hC,lights_physical_pars_fragment:dC,lights_fragment_begin:fC,lights_fragment_maps:pC,lights_fragment_end:mC,lightprobes_pars_fragment:gC,logdepthbuf_fragment:xC,logdepthbuf_pars_fragment:bC,logdepthbuf_pars_vertex:yC,logdepthbuf_vertex:_C,map_fragment:vC,map_pars_fragment:MC,map_particle_fragment:SC,map_particle_pars_fragment:wC,metalnessmap_fragment:EC,metalnessmap_pars_fragment:TC,morphinstance_vertex:AC,morphcolor_vertex:RC,morphnormal_vertex:CC,morphtarget_pars_vertex:PC,morphtarget_vertex:IC,normal_fragment_begin:LC,normal_fragment_maps:NC,normal_pars_fragment:DC,normal_pars_vertex:OC,normal_vertex:UC,normalmap_pars_fragment:FC,clearcoat_normal_fragment_begin:BC,clearcoat_normal_fragment_maps:kC,clearcoat_pars_fragment:zC,iridescence_pars_fragment:GC,opaque_fragment:VC,packing:HC,premultiplied_alpha_fragment:WC,project_vertex:XC,dithering_fragment:qC,dithering_pars_fragment:YC,roughnessmap_fragment:$C,roughnessmap_pars_fragment:KC,shadowmap_pars_fragment:ZC,shadowmap_pars_vertex:JC,shadowmap_vertex:jC,shadowmask_pars_fragment:QC,skinbase_vertex:eP,skinning_pars_vertex:tP,skinning_vertex:nP,skinnormal_vertex:iP,specularmap_fragment:rP,specularmap_pars_fragment:sP,tonemapping_fragment:oP,tonemapping_pars_fragment:aP,transmission_fragment:lP,transmission_pars_fragment:cP,uv_pars_fragment:uP,uv_pars_vertex:hP,uv_vertex:dP,worldpos_vertex:fP,background_vert:pP,background_frag:mP,backgroundCube_vert:gP,backgroundCube_frag:xP,cube_vert:bP,cube_frag:yP,depth_vert:_P,depth_frag:vP,distance_vert:MP,distance_frag:SP,equirect_vert:wP,equirect_frag:EP,linedashed_vert:TP,linedashed_frag:AP,meshbasic_vert:RP,meshbasic_frag:CP,meshlambert_vert:PP,meshlambert_frag:IP,meshmatcap_vert:LP,meshmatcap_frag:NP,meshnormal_vert:DP,meshnormal_frag:OP,meshphong_vert:UP,meshphong_frag:FP,meshphysical_vert:BP,meshphysical_frag:kP,meshtoon_vert:zP,meshtoon_frag:GP,points_vert:VP,points_frag:HP,shadow_vert:WP,shadow_frag:XP,sprite_vert:qP,sprite_frag:YP},Te={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},_r={basic:{uniforms:Tn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Tn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Se(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Tn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Tn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Tn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Se(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Tn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Tn([Te.points,Te.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Tn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Tn([Te.common,Te.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Tn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Tn([Te.sprite,Te.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:Tn([Te.common,Te.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:Tn([Te.lights,Te.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};_r.physical={uniforms:Tn([_r.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var cp={r:0,b:0,g:0},$P=new Xe,NS=new Ye;NS.set(-1,0,0,0,1,0,0,0,1);function KP(r,e,t,n,i,s){let o=new Se(0),a=i===!0?0:1,l,c,h=null,f=0,d=null;function m(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){let M=v.backgroundBlurriness>0;S=e.get(S,M)}return S}u(m,"getBackground");function g(v){let S=!1,M=m(v);M===null?x(o,a):M&&M.isColor&&(x(M,1),S=!0);let R=r.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}u(g,"render");function _(v,S){let M=m(S);M&&M.isCubeTexture?(c===void 0&&(c=new Ze(new dr(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:jo(_r.backgroundCube.uniforms),vertexShader:_r.backgroundCube.vertexShader,fragmentShader:_r.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,E,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:u(function(){return this.uniforms.envMap.value},"get")}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4($P.makeRotationFromEuler(S.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(NS),c.material.toneMapped=st.getTransfer(M.colorSpace)!==St,(h!==M||f!==M.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,d=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Ze(new fr(2,2),new Un({name:"BackgroundMaterial",uniforms:jo(_r.background.uniforms),vertexShader:_r.background.vertexShader,fragmentShader:_r.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:u(function(){return this.uniforms.t2D.value},"get")}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=st.getTransfer(M.colorSpace)!==St,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,d=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}u(_,"addToRenderList");function x(v,S){v.getRGB(cp,V0(r)),t.buffers.color.setClear(cp.r,cp.g,cp.b,S,s)}u(x,"setClear");function b(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return u(b,"dispose"),{getClearColor:u(function(){return o},"getClearColor"),setClearColor:u(function(v,S=1){o.set(v),a=S,x(o,a)},"setClearColor"),getClearAlpha:u(function(){return a},"getClearAlpha"),setClearAlpha:u(function(v){a=v,x(o,a)},"setClearAlpha"),render:g,addToRenderList:_,dispose:b}}u(KP,"WebGLBackground");function ZP(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,o=!1;function a(D,k,$,F,j){let ce=!1,V=f(D,F,$,k);s!==V&&(s=V,c(s.object)),ce=m(D,F,$,j),ce&&g(D,F,$,j),j!==null&&e.update(j,r.ELEMENT_ARRAY_BUFFER),(ce||o)&&(o=!1,M(D,k,$,F),j!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}u(a,"setup");function l(){return r.createVertexArray()}u(l,"createVertexArrayObject");function c(D){return r.bindVertexArray(D)}u(c,"bindVertexArrayObject");function h(D){return r.deleteVertexArray(D)}u(h,"deleteVertexArrayObject");function f(D,k,$,F){let j=F.wireframe===!0,ce=n[k.id];ce===void 0&&(ce={},n[k.id]=ce);let V=D.isInstancedMesh===!0?D.id:0,ne=ce[V];ne===void 0&&(ne={},ce[V]=ne);let Z=ne[$.id];Z===void 0&&(Z={},ne[$.id]=Z);let re=Z[j];return re===void 0&&(re=d(l()),Z[j]=re),re}u(f,"getBindingState");function d(D){let k=[],$=[],F=[];for(let j=0;j<t;j++)k[j]=0,$[j]=0,F[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:$,attributeDivisors:F,object:D,attributes:{},index:null}}u(d,"createBindingState");function m(D,k,$,F){let j=s.attributes,ce=k.attributes,V=0,ne=$.getAttributes();for(let Z in ne)if(ne[Z].location>=0){let ae=j[Z],fe=ce[Z];if(fe===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(fe=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(fe=D.instanceColor)),ae===void 0||ae.attribute!==fe||fe&&ae.data!==fe.data)return!0;V++}return s.attributesNum!==V||s.index!==F}u(m,"needsUpdate");function g(D,k,$,F){let j={},ce=k.attributes,V=0,ne=$.getAttributes();for(let Z in ne)if(ne[Z].location>=0){let ae=ce[Z];ae===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(ae=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(ae=D.instanceColor));let fe={};fe.attribute=ae,ae&&ae.data&&(fe.data=ae.data),j[Z]=fe,V++}s.attributes=j,s.attributesNum=V,s.index=F}u(g,"saveCache");function _(){let D=s.newAttributes;for(let k=0,$=D.length;k<$;k++)D[k]=0}u(_,"initAttributes");function x(D){b(D,0)}u(x,"enableAttribute");function b(D,k){let $=s.newAttributes,F=s.enabledAttributes,j=s.attributeDivisors;$[D]=1,F[D]===0&&(r.enableVertexAttribArray(D),F[D]=1),j[D]!==k&&(r.vertexAttribDivisor(D,k),j[D]=k)}u(b,"enableAttributeAndDivisor");function v(){let D=s.newAttributes,k=s.enabledAttributes;for(let $=0,F=k.length;$<F;$++)k[$]!==D[$]&&(r.disableVertexAttribArray($),k[$]=0)}u(v,"disableUnusedAttributes");function S(D,k,$,F,j,ce,V){V===!0?r.vertexAttribIPointer(D,k,$,j,ce):r.vertexAttribPointer(D,k,$,F,j,ce)}u(S,"vertexAttribPointer");function M(D,k,$,F){_();let j=F.attributes,ce=$.getAttributes(),V=k.defaultAttributeValues;for(let ne in ce){let Z=ce[ne];if(Z.location>=0){let re=j[ne];if(re===void 0&&(ne==="instanceMatrix"&&D.instanceMatrix&&(re=D.instanceMatrix),ne==="instanceColor"&&D.instanceColor&&(re=D.instanceColor)),re!==void 0){let ae=re.normalized,fe=re.itemSize,ve=e.get(re);if(ve===void 0)continue;let ee=ve.buffer,me=ve.type,he=ve.bytesPerElement,pe=me===r.INT||me===r.UNSIGNED_INT||re.gpuType===vf;if(re.isInterleavedBufferAttribute){let de=re.data,Ie=de.isInterleavedBuffer===!0?de.stride:de.itemSize,$e=re.offset;if(de.isInstancedInterleavedBuffer||de.isInstancedBufferAttribute){for(let Re=0;Re<Z.locationSize;Re++)b(Z.location+Re,de.meshPerAttribute);D.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Re=0;Re<Z.locationSize;Re++)x(Z.location+Re);r.bindBuffer(r.ARRAY_BUFFER,ee);for(let Re=0;Re<Z.locationSize;Re++)S(Z.location+Re,fe/Z.locationSize,me,ae,Ie*he,($e+fe/Z.locationSize*Re)*he,pe)}else{if(re.isInstancedBufferAttribute){for(let de=0;de<Z.locationSize;de++)b(Z.location+de,re.meshPerAttribute);D.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let de=0;de<Z.locationSize;de++)x(Z.location+de);r.bindBuffer(r.ARRAY_BUFFER,ee);for(let de=0;de<Z.locationSize;de++)S(Z.location+de,fe/Z.locationSize,me,ae,fe*he,fe/Z.locationSize*de*he,pe)}}else if(V!==void 0){let ae=V[ne];if(ae!==void 0)switch(ae.length){case 2:r.vertexAttrib2fv(Z.location,ae);break;case 3:r.vertexAttrib3fv(Z.location,ae);break;case 4:r.vertexAttrib4fv(Z.location,ae);break;default:r.vertexAttrib1fv(Z.location,ae)}}}}v()}u(M,"setupVertexAttributes");function R(){L();for(let D in n){let k=n[D];for(let $ in k){let F=k[$];for(let j in F){let ce=F[j];for(let V in ce)h(ce[V].object),delete ce[V];delete F[j]}}delete n[D]}}u(R,"dispose");function E(D){if(n[D.id]===void 0)return;let k=n[D.id];for(let $ in k){let F=k[$];for(let j in F){let ce=F[j];for(let V in ce)h(ce[V].object),delete ce[V];delete F[j]}}delete n[D.id]}u(E,"releaseStatesOfGeometry");function y(D){for(let k in n){let $=n[k];for(let F in $){let j=$[F];if(j[D.id]===void 0)continue;let ce=j[D.id];for(let V in ce)h(ce[V].object),delete ce[V];delete j[D.id]}}}u(y,"releaseStatesOfProgram");function w(D){for(let k in n){let $=n[k],F=D.isInstancedMesh===!0?D.id:0,j=$[F];if(j!==void 0){for(let ce in j){let V=j[ce];for(let ne in V)h(V[ne].object),delete V[ne];delete j[ce]}delete $[F],Object.keys($).length===0&&delete n[k]}}}u(w,"releaseStatesOfObject");function L(){I(),o=!0,s!==i&&(s=i,c(s.object))}u(L,"reset");function I(){i.geometry=null,i.program=null,i.wireframe=!1}return u(I,"resetDefaultState"),{setup:a,reset:L,resetDefaultState:I,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfObject:w,releaseStatesOfProgram:y,initAttributes:_,enableAttribute:x,disableUnusedAttributes:v}}u(ZP,"WebGLBindingStates");function JP(r,e,t){let n;function i(l){n=l}u(i,"setMode");function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}u(s,"render");function o(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}u(o,"renderInstances");function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let m=0;m<h;m++)d+=c[m];t.update(d,n,1)}u(a,"renderMultiDraw"),this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}u(JP,"WebGLBufferRenderer");function jP(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let y=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}u(s,"getMaxAnisotropy");function o(y){return!(y!==Kn&&n.convert(y)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}u(o,"textureFormatReadable");function a(y){let w=y===oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==En&&y!==si&&!w&&n.convert(y)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}u(a,"textureTypeReadable");function l(y){if(y==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}u(l,"getMaxPrecision");let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(ze("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&ze("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),b=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:x,maxAttributes:b,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:M,maxSamples:R,samples:E}}u(jP,"WebGLCapabilities");function QP(r){let e=this,t=null,n=0,i=!1,s=!1,o=new Hn,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let m=f.length!==0||d||n!==0||i;return i=d,n=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,m){let g=f.clippingPlanes,_=f.clipIntersection,x=f.clipShadows,b=r.get(f);if(!i||g===null||g.length===0||s&&!x)s?h(null):c();else{let v=s?0:n,S=v*4,M=b.clippingState||null;l.value=M,M=h(g,d,S,m);for(let R=0;R!==S;++R)M[R]=t[R];b.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}u(c,"resetGlobalState");function h(f,d,m,g){let _=f!==null?f.length:0,x=null;if(_!==0){if(x=l.value,g!==!0||x===null){let b=m+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(x===null||x.length<b)&&(x=new Float32Array(b));for(let S=0,M=m;S!==_;++S,M+=4)o.copy(f[S]).applyMatrix4(v,a),o.normal.toArray(x,M),x[M+3]=o.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,x}u(h,"projectPlanes")}u(QP,"WebGLClipping");var Gx=class Gx extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new lu(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new dr(5,5,5),s=new Un({name:"CubemapFromEquirect",uniforms:jo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bn,blending:Yo});s.uniforms.tEquirect.value=t;let o=new Ze(i,s),a=t.minFilter;return t.minFilter===wn&&(t.minFilter=zt),new Sl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}};u(Gx,"WebGLCubeRenderTarget");var Lu=Gx,hS=256,e2=3,t2=20,DS=256,OS=16,n2=3,i2=new X,r2=new Se,fp=class fp{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Sl(1,10,null),this._boxMesh=new Ze(new dr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:o=256,position:a=i2}=s,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,d=l.autoClearColor,m=l.autoClearDepth,g=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(r2));let x=new Sl(n,i,h);return x.position.copy(a),x.update(l,e),l.autoClear=f,l.autoClearColor=d,l.autoClearDepth=m,l.autoClearStencil=g,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(hS,k0(e))}_fromTexture(e,t){e.mapping===Ko||e.mapping===Tl?this._setSize(e.image.length===0?hS:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=dS(e,!1,!1),n=Math.log2(e)-e2;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=dS(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=e,s.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),s.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ko||e.mapping===Tl?(this._cubemapMaterial===null&&(this._cubemapMaterial=pS()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=fS()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=s2(),this._integrationMaterial=o2());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/OS);for(let o=0;o<=n;o++){let a=fp.lodToRoughness(o,n);if(o>n-n2)s.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(DS*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=a2());let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(s,0,n)}};u(fp,"PMREMGenerator");var hp=fp;function dS(r,e,t){return new Lu(r,{minFilter:wn,generateMipmaps:e,type:oi,colorSpace:Nn,depthBuffer:t})}u(dS,"_createRenderTarget");function Nu(r,e,t){return new Un({name:r,uniforms:e,vertexShader:it.cube_vert,fragmentShader:t,side:Bn,blending:Yo,depthTest:!1,depthWrite:!1})}u(Nu,"_getMaterial");function s2(){return Nu("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${DS}u

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
	`)}u(s2,"_getGGXMaterial");function o2(){return Nu("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:OS}},`

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
	`)}u(o2,"_getIntegrationMaterial");function a2(){return Nu("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${t2}
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
	`)}u(a2,"_getBlurMaterial");function fS(){return Nu("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}u(fS,"_getEquirectMaterial");function pS(){return Nu("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}u(pS,"_getCubemapMaterial");function l2(r){let e=new WeakMap,t=new WeakMap,n=null;function i(d,m=!1){return d==null?null:m?o(d):s(d)}u(i,"get");function s(d){if(d&&d.isTexture){let m=d.mapping;if(m===bf||m===yf)if(e.has(d)){let g=e.get(d).texture;return a(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let _=new Lu(g.height);return _.fromEquirectangularTexture(r,d),e.set(d,_),d.addEventListener("dispose",c),a(_.texture,d.mapping)}else return null}}return d}u(s,"getCube");function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let m=d.mapping,g=m===bf||m===yf,_=m===Ko||m===Tl;if(g||_){let x=t.get(d),b=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==b)return n===null&&(n=new hp(r)),x=g?n.fromEquirectangular(d,x):n.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),x.texture;if(x!==void 0)return x.texture;{let v=d.image;return g&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new hp(r)),x=g?n.fromEquirectangular(d):n.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),d.addEventListener("dispose",h),x.texture):null}}}return d}u(o,"getPMREM");function a(d,m){return m===bf?d.mapping=Ko:m===yf&&(d.mapping=Tl),d}u(a,"mapTextureMapping");function l(d){let m=0,g=6;for(let _=0;_<g;_++)d[_]!==void 0&&m++;return m===g}u(l,"isCubeTextureComplete");function c(d){let m=d.target;m.removeEventListener("dispose",c);let g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}u(c,"onCubemapDispose");function h(d){let m=d.target;m.removeEventListener("dispose",h);let g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}u(h,"onPMREMDispose");function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return u(f,"dispose"),{get:i,dispose:f}}u(l2,"WebGLEnvironments");function c2(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=r.getExtension(n);return e[n]=i,i}return u(t,"getExtension"),{has:u(function(n){return t(n)!==null},"has"),init:u(function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},"init"),get:u(function(n){let i=t(n);return i===null&&Oo("WebGLRenderer: "+n+" extension not supported."),i},"get")}}u(c2,"WebGLExtensions");function u2(r,e,t,n){let i={},s=new WeakMap,o=new FinalizationRegistry(g=>delete i[g]);function a(g){l(g.target)}u(a,"onGeometryDispose");function l(g){g.index!==null&&e.remove(g.index);for(let x in g.attributes)e.remove(g.attributes[x]);g.removeEventListener("dispose",a),delete i[g.id],o.unregister(g);let _=s.get(g);_&&(e.remove(_),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}u(l,"destroyGeometry");function c(g,_){return i[_.id]!==void 0||(_.addEventListener("dispose",a),i[_.id]=new WeakRef(_),o.register(_,_.id,_),t.memory.geometries++),_}u(c,"get");function h(g){let _=g.attributes;for(let x in _)e.update(_[x],r.ARRAY_BUFFER)}u(h,"update");function f(g){let _=g.index,x=g.attributes.position,b=0;if(x===void 0)return;let v=_!==null?_.array.length:x.array.length/3-1,S=x.count>=65535?tu:eu,M=new S(Math.ceil(v/3)*6,1),R=M.array;if(_!==null){let y=_.array;b=_.version;for(let w=0,L=0;w<v;w+=3){let I=y[w+0],D=y[w+1],k=y[w+2];R[L++]=I,R[L++]=D,R[L++]=D,R[L++]=k,R[L++]=k,R[L++]=I}}else{b=x.version;for(let y=0,w=0;y<v;y+=3){let L=y+0,I=y+1,D=y+2;R[w++]=L,R[w++]=I,R[w++]=I,R[w++]=D,R[w++]=D,R[w++]=L}}M.version=b;let E=s.get(g);E&&e.remove(E),s.set(g,M)}u(f,"updateWireframeAttribute");function d(g){let _=s.get(g);if(_){let x=g.index;x!==null&&_.version<x.version&&f(g)}else f(g);return s.get(g)}u(d,"getWireframeAttribute");function m(){for(let g in i){let _=i[g].deref();_!==void 0&&l(_)}}return u(m,"dispose"),{get:c,update:h,getWireframeAttribute:d,dispose:m}}u(u2,"WebGLGeometries");function h2(r,e,t){let n;function i(f){n=f}u(i,"setMode");let s,o;function a(f){s=f.type,o=f.bytesPerElement}u(a,"setIndex");function l(f,d){r.drawElements(n,d,s,f*o),t.update(d,n,1)}u(l,"render");function c(f,d,m){m!==0&&(r.drawElementsInstanced(n,d,s,f*o,m),t.update(d,n,m))}u(c,"renderInstances");function h(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,m);let _=0;for(let x=0;x<m;x++)_+=d[x];t.update(_,n,1)}u(h,"renderMultiDraw"),this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}u(h2,"WebGLIndexedBufferRenderer");function d2(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:qe("WebGLInfo: Unknown draw mode:",o);break}}u(n,"update");function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return u(i,"reset"),{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}u(d2,"WebGLInfo");function f2(r,e,t){let n=new WeakMap,i=new wt;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==f){let I=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",I)};var m=I;u(I,"disposeTexture"),d!==void 0&&d.texture.dispose();let g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,b=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],M=0;g===!0&&(M=1),_===!0&&(M=2),x===!0&&(M=3);let R=a.attributes.position.count*M,E=1;R>e.maxTextureSize&&(E=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);let y=new Float32Array(R*E*4*f),w=new ko(y,R,E,f);w.type=si,w.needsUpdate=!0;let L=M*4;for(let D=0;D<f;D++){let k=b[D],$=v[D],F=S[D],j=R*E*4*D;for(let ce=0;ce<k.count;ce++){let V=ce*L;g===!0&&(i.fromBufferAttribute(k,ce),y[j+V+0]=i.x,y[j+V+1]=i.y,y[j+V+2]=i.z,y[j+V+3]=0),_===!0&&(i.fromBufferAttribute($,ce),y[j+V+4]=i.x,y[j+V+5]=i.y,y[j+V+6]=i.z,y[j+V+7]=0),x===!0&&(i.fromBufferAttribute(F,ce),y[j+V+8]=i.x,y[j+V+9]=i.y,y[j+V+10]=i.z,y[j+V+11]=F.itemSize===4?i.w:1)}}d={count:f,texture:w,size:new ke(R,E)},n.set(a,d),a.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let x=0;x<c.length;x++)g+=c[x];let _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return u(s,"update"),{update:s}}u(f2,"WebGLMorphtargets");function p2(r,e,t,n,i){let s=new WeakMap;function o(c){let h=i.render.frame,f=c.geometry,d=e.get(c,f);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let m=c.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return d}u(o,"update");function a(){s=new WeakMap}u(a,"dispose");function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return u(l,"onInstancedMeshDispose"),{update:o,dispose:a}}u(p2,"WebGLObjects");var m2={[y0]:"LINEAR_TONE_MAPPING",[_0]:"REINHARD_TONE_MAPPING",[v0]:"CINEON_TONE_MAPPING",[Mu]:"ACES_FILMIC_TONE_MAPPING",[S0]:"AGX_TONE_MAPPING",[w0]:"NEUTRAL_TONE_MAPPING",[M0]:"CUSTOM_TONE_MAPPING"};function g2(r,e,t,n,i,s){let o=new ii(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Et;h.setAttribute("position",new Pt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Pt([0,2,0,0,2,0],2));let f=new zd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ze(h,f),m=new Wo(-1,1,1,-1,0,1),g=null,_=null,x=!1,b,v=null,S=[],M=!1;this.setSize=function(R,E){o.setSize(R,E),a!==null&&a.setSize(R,E),l!==null&&l.setSize(R,E);for(let y=0;y<S.length;y++){let w=S[y];w.setSize&&w.setSize(R,E)}},this.setEffects=function(R){S=R,M=S.length>0&&S[0].isRenderPass===!0;let E=o.width,y=o.height;S.length>0&&a===null&&(a=new ii(E,y,{type:oi,depthBuffer:!1,stencilBuffer:!1}),l=new ii(E,y,{type:oi,depthBuffer:!1,stencilBuffer:!1}));let w=i===!0&&S.some(L=>L.needsDepthTexture===!0);w!==(o.depthTexture!==null)&&(w===!0&&c===null&&(c=new ns(E,y),s===!0&&(c.format=cs,c.type=Jo)),o.dispose(),o.depthTexture=w?c:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w);for(let L=0;L<S.length;L++){let I=S[L];I.setSize&&I.setSize(E,y),w&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(c)}},this.begin=function(R,E){if(x||R.toneMapping===gr&&S.length===0)return!1;if(v=E,E!==null){let y=E.width,w=E.height;(o.width!==y||o.height!==w)&&this.setSize(y,w)}return M===!1&&R.setRenderTarget(o),b=R.toneMapping,R.toneMapping=gr,!0},this.hasRenderPass=function(){return M},this.end=function(R,E){R.toneMapping=b,x=!0;let y=o,w=a;for(let L=0;L<S.length;L++){let I=S[L];I.enabled!==!1&&(I.render(R,w,y,E),I.needsSwap!==!1&&(y=w,w=w===a?l:a))}if(g!==R.outputColorSpace||_!==R.toneMapping){g=R.outputColorSpace,_=R.toneMapping,f.defines={},st.getTransfer(g)===St&&(f.defines.SRGB_TRANSFER="");let L=m2[_];L&&(f.defines[L]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=y.texture,R.setRenderTarget(v),R.render(d,m),v=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}u(g2,"WebGLOutput");var US=new rn,FS=new ns(1,1),BS=new cu(1),kS=new ko,zS=new Od,GS=new lu,mS=[],gS=[],xS=new Float32Array(16),bS=new Float32Array(9),yS=new Float32Array(4);function Il(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=mS[i];if(s===void 0&&(s=new Float32Array(i),mS[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}u(Il,"flatten");function on(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}u(on,"arraysEqual");function an(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}u(an,"copyArray");function pp(r,e){let t=gS[e];t===void 0&&(t=new Int32Array(e),gS[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}u(pp,"allocTexUnits");function x2(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}u(x2,"setValueV1f");function b2(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;r.uniform2fv(this.addr,e),an(t,e)}}u(b2,"setValueV2f");function y2(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;r.uniform3fv(this.addr,e),an(t,e)}}u(y2,"setValueV3f");function _2(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;r.uniform4fv(this.addr,e),an(t,e)}}u(_2,"setValueV4f");function v2(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;yS.set(n),r.uniformMatrix2fv(this.addr,!1,yS),an(t,n)}}u(v2,"setValueM2");function M2(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;bS.set(n),r.uniformMatrix3fv(this.addr,!1,bS),an(t,n)}}u(M2,"setValueM3");function S2(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;xS.set(n),r.uniformMatrix4fv(this.addr,!1,xS),an(t,n)}}u(S2,"setValueM4");function w2(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}u(w2,"setValueV1i");function E2(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;r.uniform2iv(this.addr,e),an(t,e)}}u(E2,"setValueV2i");function T2(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;r.uniform3iv(this.addr,e),an(t,e)}}u(T2,"setValueV3i");function A2(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;r.uniform4iv(this.addr,e),an(t,e)}}u(A2,"setValueV4i");function R2(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}u(R2,"setValueV1ui");function C2(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;r.uniform2uiv(this.addr,e),an(t,e)}}u(C2,"setValueV2ui");function P2(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;r.uniform3uiv(this.addr,e),an(t,e)}}u(P2,"setValueV3ui");function I2(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;r.uniform4uiv(this.addr,e),an(t,e)}}u(I2,"setValueV4ui");function mp(r){return r.version===0&&(r.compareFunction=O0,r.needsUpdate=!0),r}u(mp,"initShadowTexture");function L2(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?s=mp(FS):s=US,t.setTexture2D(e||s,i)}u(L2,"setValueT1");function N2(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||zS,i)}u(N2,"setValueT3D1");function D2(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=mp(BS):s=GS,t.setTextureCube(e||s,i)}u(D2,"setValueT6");function O2(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||kS,i)}u(O2,"setValueT2DArray1");function U2(r){switch(r){case 5126:return x2;case 35664:return b2;case 35665:return y2;case 35666:return _2;case 35674:return v2;case 35675:return M2;case 35676:return S2;case 5124:case 35670:return w2;case 35667:case 35671:return E2;case 35668:case 35672:return T2;case 35669:case 35673:return A2;case 5125:return R2;case 36294:return C2;case 36295:return P2;case 36296:return I2;case 35678:case 36198:case 36298:case 36306:case 35682:return L2;case 35679:case 36299:case 36307:return N2;case 35680:case 36300:case 36308:case 36293:return D2;case 36289:case 36303:case 36311:case 36292:return O2}}u(U2,"getSingularSetter");function F2(r,e){r.uniform1fv(this.addr,e)}u(F2,"setValueV1fArray");function B2(r,e){let t=Il(e,this.size,2);r.uniform2fv(this.addr,t)}u(B2,"setValueV2fArray");function k2(r,e){let t=Il(e,this.size,3);r.uniform3fv(this.addr,t)}u(k2,"setValueV3fArray");function z2(r,e){let t=Il(e,this.size,4);r.uniform4fv(this.addr,t)}u(z2,"setValueV4fArray");function G2(r,e){let t=Il(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}u(G2,"setValueM2Array");function V2(r,e){let t=Il(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}u(V2,"setValueM3Array");function H2(r,e){let t=Il(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}u(H2,"setValueM4Array");function W2(r,e){r.uniform1iv(this.addr,e)}u(W2,"setValueV1iArray");function X2(r,e){r.uniform2iv(this.addr,e)}u(X2,"setValueV2iArray");function q2(r,e){r.uniform3iv(this.addr,e)}u(q2,"setValueV3iArray");function Y2(r,e){r.uniform4iv(this.addr,e)}u(Y2,"setValueV4iArray");function $2(r,e){r.uniform1uiv(this.addr,e)}u($2,"setValueV1uiArray");function K2(r,e){r.uniform2uiv(this.addr,e)}u(K2,"setValueV2uiArray");function Z2(r,e){r.uniform3uiv(this.addr,e)}u(Z2,"setValueV3uiArray");function J2(r,e){r.uniform4uiv(this.addr,e)}u(J2,"setValueV4uiArray");function j2(r,e,t){let n=this.cache,i=e.length,s=pp(t,i);on(n,s)||(r.uniform1iv(this.addr,s),an(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=mp(FS):o=US;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,s[a])}u(j2,"setValueT1Array");function Q2(r,e,t){let n=this.cache,i=e.length,s=pp(t,i);on(n,s)||(r.uniform1iv(this.addr,s),an(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||zS,s[o])}u(Q2,"setValueT3DArray");function eI(r,e,t){let n=this.cache,i=e.length,s=pp(t,i);on(n,s)||(r.uniform1iv(this.addr,s),an(n,s));let o;this.type===r.SAMPLER_CUBE_SHADOW?o=mp(BS):o=GS;for(let a=0;a!==i;++a)t.setTextureCube(e[a]||o,s[a])}u(eI,"setValueT6Array");function tI(r,e,t){let n=this.cache,i=e.length,s=pp(t,i);on(n,s)||(r.uniform1iv(this.addr,s),an(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||kS,s[o])}u(tI,"setValueT2DArrayArray");function nI(r){switch(r){case 5126:return F2;case 35664:return B2;case 35665:return k2;case 35666:return z2;case 35674:return G2;case 35675:return V2;case 35676:return H2;case 5124:case 35670:return W2;case 35667:case 35671:return X2;case 35668:case 35672:return q2;case 35669:case 35673:return Y2;case 5125:return $2;case 36294:return K2;case 36295:return Z2;case 36296:return J2;case 35678:case 36198:case 36298:case 36306:case 35682:return j2;case 35679:case 36299:case 36307:return Q2;case 35680:case 36300:case 36308:case 36293:return eI;case 36289:case 36303:case 36311:case 36292:return tI}}u(nI,"getPureArraySetter");var Vx=class Vx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=U2(t.type)}};u(Vx,"SingleUniform");var Nx=Vx,Hx=class Hx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nI(t.type)}};u(Hx,"PureArrayUniform");var Dx=Hx,Wx=class Wx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(e,t[a.id],n)}}};u(Wx,"StructuredUniform");var Ox=Wx,Ix=/(\w+)(\])?(\[|\.)?/g;function _S(r,e){r.seq.push(e),r.map[e.id]=e}u(_S,"addUniform");function iI(r,e,t){let n=r.name,i=n.length;for(Ix.lastIndex=0;;){let s=Ix.exec(n),o=Ix.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){_S(t,c===void 0?new Nx(a,r,e):new Dx(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new Ox(a),_S(t,f)),t=f}}}u(iI,"parseUniform");var Xx=class Xx{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);iI(a,l,this)}let i=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let o=e[i];o.id in t&&n.push(o)}return n}};u(Xx,"WebGLUniforms");var Pl=Xx;function vS(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}u(vS,"WebGLShader");var rI=37297,sI=0;function oI(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}u(oI,"handleSource");var MS=new Ye;function aI(r){st._getMatrix(MS,st.workingColorSpace,r);let e=`mat3( ${MS.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(r)){case Zc:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}u(aI,"getEncodingComponents");function SS(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+oI(r.getShaderSource(e),a)}else return s}u(SS,"getShaderErrors");function lI(r,e){let t=aI(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}u(lI,"getTexelEncodingFunction");var cI={[y0]:"Linear",[_0]:"Reinhard",[v0]:"Cineon",[Mu]:"ACESFilmic",[S0]:"AgX",[w0]:"Neutral",[M0]:"Custom"};function uI(r,e){let t=cI[e];return t===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}u(uI,"getToneMappingFunction");var up=new X;function hI(){st.getLuminanceCoefficients(up);let r=up.x.toFixed(4),e=up.y.toFixed(4),t=up.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}u(hI,"getLuminanceFunction");function dI(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Iu).join(`
`)}u(dI,"generateVertexExtensions");function fI(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}u(fI,"generateDefines");function pI(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}u(pI,"fetchAttributeLocations");function Iu(r){return r!==""}u(Iu,"filterEmptyLine");function wS(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}u(wS,"replaceLightNums");function ES(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}u(ES,"replaceClippingPlaneNums");var mI=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ux(r){return r.replace(mI,gI)}u(Ux,"resolveIncludes");function gI(r,e){let t=it[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ux(t)}u(gI,"includeReplacer");var xI=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function TS(r){return r.replace(xI,bI)}u(TS,"unrollLoops");function bI(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}u(bI,"loopReplacer");function AS(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}u(AS,"generatePrecision");var yI={[vu]:"SHADOWMAP_TYPE_PCF",[wl]:"SHADOWMAP_TYPE_VSM"};function _I(r){return yI[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}u(_I,"generateShadowMapTypeDefine");var vI={[Tl]:"ENVMAP_MODE_REFRACTION"};function MI(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":vI[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}u(MI,"generateEnvMapModeDefine");var SI={[b0]:"ENVMAP_BLENDING_MULTIPLY",[HM]:"ENVMAP_BLENDING_MIX",[WM]:"ENVMAP_BLENDING_ADD"};function wI(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":SI[r.combine]||"ENVMAP_BLENDING_NONE"}u(wI,"generateEnvMapBlendingDefine");function EI(r,e,t,n){let i=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=_I(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=MI(t),f=wI(t),d=dI(t),m=fI(s),g=i.createProgram(),_,x,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Iu).join(`
`),_.length>0&&(_+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Iu).join(`
`),x.length>0&&(x+=`
`)):(_=[AS(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Iu).join(`
`),x=[AS(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gr?"#define TONE_MAPPING":"",t.toneMapping!==gr?it.tonemapping_pars_fragment:"",t.toneMapping!==gr?uI("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,lI("linearToOutputTexel",t.outputColorSpace),hI(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Iu).join(`
`)),o=Ux(o),o=wS(o,t),o=ES(o,t),a=Ux(a),a=wS(a,t),a=ES(a,t),o=TS(o),a=TS(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,x=["#define varying in",t.glslVersion===F0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===F0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let v=b+_+o,S=b+x+a,M=vS(i,i.VERTEX_SHADER,v),R=vS(i,i.FRAGMENT_SHADER,S);i.attachShader(g,M),i.attachShader(g,R),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function E(I){if(r.debug.checkShaderErrors){let D=i.getProgramInfoLog(g)||"",k=i.getShaderInfoLog(M)||"",$=i.getShaderInfoLog(R)||"",F=D.trim(),j=k.trim(),ce=$.trim(),V=!0,ne=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(V=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,M,R);else{let Z=SS(i,M,"vertex"),re=SS(i,R,"fragment");qe("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+F+`
`+Z+`
`+re)}else F!==""?ze("WebGLProgram: Program Info Log:",F):(j===""||ce==="")&&(ne=!1);ne&&(I.diagnostics={runnable:V,programLog:F,vertexShader:{log:j,prefix:_},fragmentShader:{log:ce,prefix:x}})}i.deleteShader(M),i.deleteShader(R),y=new Pl(i,g),w=pI(i,g)}u(E,"onFirstUse");let y;this.getUniforms=function(){return y===void 0&&E(this),y};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=i.getProgramParameter(g,rI)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sI++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=R,this}u(EI,"WebGLProgram");var TI=0,qx=class qx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Bx(e),t.set(e,n)),n}};u(qx,"WebGLShaderCache");var Fx=qx,Yx=class Yx{constructor(e){this.id=TI++,this.code=e,this.usedTimes=0}};u(Yx,"WebGLShaderStage");var Bx=Yx;function AI(r){return r===xr||r===Au||r===Ru}u(AI,"isPackedRGFormat");function RI(r,e,t,n,i,s){let o=new ml,a=new Fx,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}u(m,"getChannel");function g(y,w,L,I,D,k){let $=I.fog,F=D.geometry,j=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,ce=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,V=e.get(y.envMap||j,ce),ne=d[y.type],Z=n.precision;y.precision!==null&&(Z=n.getMaxPrecision(y.precision),Z!==y.precision&&ze("WebGLProgram.getParameters:",y.precision,"not supported, using",Z,"instead."));let re=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ae=re!==void 0?re.length:0,fe=0;F.morphAttributes.position!==void 0&&(fe=1),F.morphAttributes.normal!==void 0&&(fe=2),F.morphAttributes.color!==void 0&&(fe=3);let ve,ee,me,he;if(ne){let Me=_r[ne];ve=Me.vertexShader,ee=Me.fragmentShader}else{ve=y.vertexShader,ee=y.fragmentShader;let Me=a.getVertexShaderStage(y),mt=a.getFragmentShaderStage(y);a.update(y,Me,mt),me=Me.id,he=mt.id}let pe=r.getRenderTarget(),de=r.state.buffers.depth.getReversed(),Ie=D.isInstancedMesh===!0,$e=D.isBatchedMesh===!0,Re=!!y.map,nt=!!y.matcap,rt=!!V,Ve=rt&&V.isPMREMTexture===!0,Rt=!!y.aoMap,Tt=!!y.lightMap,gt=!!y.bumpMap&&y.wireframe===!1,ct=!!y.normalMap,xt=!!y.displacementMap,yt=!!y.emissiveMap,At=!!y.metalnessMap,Ot=!!y.roughnessMap,ut=y.anisotropy>0,Y=y.clearcoat>0,Ut=y.diffuseRoughness>0,ht=y.dispersion>0,et=y.retroreflectivity>0,be=y.iridescence>0,pt=y.sheen>0,Ue=y.transmission>0,We=ut&&!!y.anisotropyMap,N=Y&&!!y.clearcoatMap,A=Y&&!!y.clearcoatNormalMap,J=Y&&!!y.clearcoatRoughnessMap,U=Ut&&!!y.diffuseRoughnessMap,B=be&&!!y.iridescenceMap,H=be&&!!y.iridescenceThicknessMap,te=pt&&!!y.sheenColorMap,q=pt&&!!y.sheenRoughnessMap,K=!!y.specularMap,ue=!!y.specularColorMap,O=!!y.specularIntensityMap,se=Ue&&!!y.transmissionMap,oe=Ue&&!!y.thicknessMap,ye=!!y.gradientMap,ge=!!y.alphaMap,_e=y.alphaTest>0,Fe=!!y.alphaHash,je=!!y.extensions,xe=gr;y.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(xe=r.toneMapping);let Ge=Ve?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Le={shaderID:ne,shaderType:y.type,shaderName:y.name,vertexShader:ve,fragmentShader:ee,defines:y.defines,customVertexShaderID:me,customFragmentShaderID:he,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:Z,batching:$e,batchingColor:$e&&D._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&D.instanceColor!==null,instancingMorph:Ie&&D.morphTexture!==null,outputColorSpace:pe===null?r.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Re,matcap:nt,envMap:rt,envMapMode:rt&&V.mapping,envMapPMREM:Ve,envMapMaxLod:Ve?Ge.length-1:null,envMapSize:Ve?Ge[0].width:null,aoMap:Rt,lightMap:Tt,bumpMap:gt,normalMap:ct,displacementMap:xt,emissiveMap:yt,normalMapObjectSpace:ct&&y.normalMapType===ZM,normalMapTangentSpace:ct&&y.normalMapType===op,packedNormalMap:ct&&y.normalMapType===op&&AI(y.normalMap.format),metalnessMap:At,roughnessMap:Ot,anisotropy:ut,anisotropyMap:We,clearcoat:Y,clearcoatMap:N,clearcoatNormalMap:A,clearcoatRoughnessMap:J,diffuseRoughness:Ut,diffuseRoughnessMap:U,dispersion:ht,retroreflection:et,iridescence:be,iridescenceMap:B,iridescenceThicknessMap:H,sheen:pt,sheenColorMap:te,sheenRoughnessMap:q,specularMap:K,specularColorMap:ue,specularIntensityMap:O,transmission:Ue,transmissionMap:se,thicknessMap:oe,gradientMap:ye,opaque:y.transparent===!1&&y.blending===El&&y.alphaToCoverage===!1,alphaMap:ge,alphaTest:_e,alphaHash:Fe,combine:y.combine,mapUv:Re&&m(y.map.channel),aoMapUv:Rt&&m(y.aoMap.channel),lightMapUv:Tt&&m(y.lightMap.channel),bumpMapUv:gt&&m(y.bumpMap.channel),normalMapUv:ct&&m(y.normalMap.channel),displacementMapUv:xt&&m(y.displacementMap.channel),emissiveMapUv:yt&&m(y.emissiveMap.channel),metalnessMapUv:At&&m(y.metalnessMap.channel),roughnessMapUv:Ot&&m(y.roughnessMap.channel),anisotropyMapUv:We&&m(y.anisotropyMap.channel),clearcoatMapUv:N&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:A&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&m(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:U&&m(y.diffuseRoughnessMap.channel),iridescenceMapUv:B&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:H&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:te&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:q&&m(y.sheenRoughnessMap.channel),specularMapUv:K&&m(y.specularMap.channel),specularColorMapUv:ue&&m(y.specularColorMap.channel),specularIntensityMapUv:O&&m(y.specularIntensityMap.channel),transmissionMapUv:se&&m(y.transmissionMap.channel),thicknessMapUv:oe&&m(y.thicknessMap.channel),alphaMapUv:ge&&m(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ct||ut),vertexNormals:!!F.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!F.attributes.uv&&(Re||ge),fog:!!$,useFog:y.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||F.attributes.normal===void 0&&ct===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:de,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:fe,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:k.filter(Me=>Me.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:xe,decodeVideoTexture:Re&&y.map.isVideoTexture===!0&&st.getTransfer(y.map.colorSpace)===St,decodeVideoTextureEmissive:yt&&y.emissiveMap.isVideoTexture===!0&&st.getTransfer(y.emissiveMap.colorSpace)===St,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===sn,flipSided:y.side===Bn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:je&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&y.extensions.multiDraw===!0||$e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Le.vertexUv1s=l.has(1),Le.vertexUv2s=l.has(2),Le.vertexUv3s=l.has(3),l.clear(),Le}u(g,"getParameters");function _(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let L in y.defines)w.push(L),w.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(x(w,y),b(w,y),w.push(r.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}u(_,"getProgramCacheKey");function x(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapPMREM),y.push(w.envMapMaxLod),y.push(w.envMapSize),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.diffuseRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.numSunLights),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numSunLightShadows),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.numLightProbeGrids),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}u(x,"getProgramCacheKeyParameters");function b(y,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.diffuseRoughness&&o.enable(25),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),y.push(o.mask)}u(b,"getProgramCacheKeyBooleans");function v(y){let w=d[y.type],L;if(w){let I=_r[w];L=Qo.clone(I.uniforms)}else L=y.uniforms;return L}u(v,"getUniforms");function S(y,w){let L=h.get(w);return L!==void 0?++L.usedTimes:(L=new EI(r,w,y,i),c.push(L),h.set(w,L)),L}u(S,"acquireProgram");function M(y){if(--y.usedTimes===0){let w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}u(M,"releaseProgram");function R(y){a.remove(y)}u(R,"releaseShaderCache");function E(){a.dispose()}return u(E,"dispose"),{getParameters:g,getProgramCacheKey:_,getUniforms:v,acquireProgram:S,releaseProgram:M,releaseShaderCache:R,programs:c,dispose:E}}u(RI,"WebGLPrograms");function CI(){let r=new WeakMap;function e(o){return r.has(o)}u(e,"has");function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}u(t,"get");function n(o){r.delete(o)}u(n,"remove");function i(o,a,l){r.get(o)[a]=l}u(i,"update");function s(){r=new WeakMap}return u(s,"dispose"),{has:e,get:t,remove:n,update:i,dispose:s}}u(CI,"WebGLProperties");function PI(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}u(PI,"painterSortStable");function RS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}u(RS,"reversePainterSortStable");function CS(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}u(s,"init");function o(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}u(o,"materialVariant");function a(d,m,g,_,x,b){let v=r[e];return v===void 0?(v={id:d.id,object:d,geometry:m,material:g,materialVariant:o(d),groupOrder:_,renderOrder:d.renderOrder,z:x,group:b},r[e]=v):(v.id=d.id,v.object=d,v.geometry=m,v.material=g,v.materialVariant=o(d),v.groupOrder=_,v.renderOrder=d.renderOrder,v.z=x,v.group=b),e++,v}u(a,"getNextRenderItem");function l(d,m,g,_,x,b,v){v.reversedDepth===!0&&(x=-x);let S=a(d,m,g,_,x,b);g.transmission>0?n.push(S):g.transparent===!0?i.push(S):t.push(S)}u(l,"push");function c(d,m,g,_,x,b){let v=a(d,m,g,_,x,b);g.transmission>0?n.unshift(v):g.transparent===!0?i.unshift(v):t.unshift(v)}u(c,"unshift");function h(d,m){t.length>1&&t.sort(d||PI),n.length>1&&n.sort(m||RS),i.length>1&&i.sort(m||RS)}u(h,"sort");function f(){for(let d=e,m=r.length;d<m;d++){let g=r[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return u(f,"finish"),{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:f,sort:h}}u(CS,"WebGLRenderList");function II(){let r=new WeakMap;function e(n,i){let s=r.get(n),o;return s===void 0?(o=new CS,r.set(n,[o])):i>=s.length?(o=new CS,s.push(o)):o=s[i],o}u(e,"get");function t(){r=new WeakMap}return u(t,"dispose"),{get:e,dispose:t}}u(II,"WebGLRenderLists");function LI(){let r={};return{get:u(function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new X,color:new Se};break;case"SpotLight":t={position:new X,direction:new X,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new X,halfWidth:new X,halfHeight:new X};break}return r[e.id]=t,t},"get")}}u(LI,"UniformsCache");function NI(){let r={};return{get:u(function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t},"get")}}u(NI,"ShadowUniformsCache");var DI=0;function OI(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}u(OI,"shadowCastingAndTexturingLightsFirst");function UI(r){let e=new LI,t=NI(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new X);let i=new X,s=new Xe,o=new Xe;function a(c){let h=0,f=0,d=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let m=0,g=0,_=0,x=0,b=0,v=0,S=0,M=0,R=0,E=0,y=0,w=0,L=0,I=0;c.sort(OI);for(let k=0,$=c.length;k<$;k++){let F=c[k],j=F.color,ce=F.intensity,V=F.distance,ne=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===xr?ne=F.shadow.map.texture:ne=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)h+=j.r*ce,f+=j.g*ce,d+=j.b*ce;else if(F.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(F.sh.coefficients[Z],ce);I++}else if(F.isSunLight){let Z=e.get(F);if(Z.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let re=F.shadow,ae=t.get(F);ae.shadowIntensity=re.intensity,ae.shadowBias=re.bias,ae.shadowNormalBias=re.normalBias,ae.shadowRadius=re.radius,ae.shadowMapSize.copy(re.mapSize).multiply(re.getFrameExtents()),n.sunShadow[g]=ae,n.sunShadowMap[g]=ne;let fe=re.getViewportCount();for(let ve=0;ve<fe;ve++)n.sunShadowMatrix[_+ve]=re.getMatrix(ve),n.sunShadowCascade[_+ve]=re._cascadeData[ve];_+=fe,g++}n.sun[m]=Z,m++}else if(F.isDirectionalLight){let Z=e.get(F);if(Z.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let re=F.shadow,ae=t.get(F);ae.shadowIntensity=re.intensity,ae.shadowBias=re.bias,ae.shadowNormalBias=re.normalBias,ae.shadowRadius=re.radius,ae.shadowMapSize=re.mapSize,n.directionalShadow[x]=ae,n.directionalShadowMap[x]=ne,n.directionalShadowMatrix[x]=F.shadow.matrix,R++}n.directional[x]=Z,x++}else if(F.isSpotLight){let Z=e.get(F);Z.position.setFromMatrixPosition(F.matrixWorld),Z.color.copy(j).multiplyScalar(ce),Z.distance=V,Z.coneCos=Math.cos(F.angle),Z.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),Z.decay=F.decay,n.spot[v]=Z;let re=F.shadow;if(F.map&&(n.spotLightMap[w]=F.map,w++,re.updateMatrices(F),F.castShadow&&L++),n.spotLightMatrix[v]=re.matrix,F.castShadow){let ae=t.get(F);ae.shadowIntensity=re.intensity,ae.shadowBias=re.bias,ae.shadowNormalBias=re.normalBias,ae.shadowRadius=re.radius,ae.shadowMapSize=re.mapSize,n.spotShadow[v]=ae,n.spotShadowMap[v]=ne,y++}v++}else if(F.isRectAreaLight){let Z=e.get(F);Z.color.copy(j).multiplyScalar(ce),Z.halfWidth.set(F.width*.5,0,0),Z.halfHeight.set(0,F.height*.5,0),n.rectArea[S]=Z,S++}else if(F.isPointLight){let Z=e.get(F);if(Z.color.copy(F.color).multiplyScalar(F.intensity),Z.distance=F.distance,Z.decay=F.decay,F.castShadow){let re=F.shadow,ae=t.get(F);ae.shadowIntensity=re.intensity,ae.shadowBias=re.bias,ae.shadowNormalBias=re.normalBias,ae.shadowRadius=re.radius,ae.shadowMapSize=re.mapSize,ae.shadowCameraNear=re.camera.near,ae.shadowCameraFar=re.camera.far,n.pointShadow[b]=ae,n.pointShadowMap[b]=ne,n.pointShadowMatrix[b]=F.shadow.matrix,E++}n.point[b]=Z,b++}else if(F.isHemisphereLight){let Z=e.get(F);Z.skyColor.copy(F.color).multiplyScalar(ce),Z.groundColor.copy(F.groundColor).multiplyScalar(ce),n.hemi[M]=Z,M++}}S>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let D=n.hash;(D.sunLength!==m||D.directionalLength!==x||D.pointLength!==b||D.spotLength!==v||D.rectAreaLength!==S||D.hemiLength!==M||D.numSunShadows!==g||D.numDirectionalShadows!==R||D.numPointShadows!==E||D.numSpotShadows!==y||D.numSpotMaps!==w||D.numLightProbes!==I)&&(n.sun.length=m,n.directional.length=x,n.spot.length=v,n.rectArea.length=S,n.point.length=b,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.spotLightMatrix.length=y+w-L,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=I,D.sunLength=m,D.directionalLength=x,D.pointLength=b,D.spotLength=v,D.rectAreaLength=S,D.hemiLength=M,D.numSunShadows=g,D.numDirectionalShadows=R,D.numPointShadows=E,D.numSpotShadows=y,D.numSpotMaps=w,D.numLightProbes=I,n.version=DI++)}u(a,"setup");function l(c,h){let f=0,d=0,m=0,g=0,_=0,x=0,b=h.matrixWorldInverse;for(let v=0,S=c.length;v<S;v++){let M=c[v];if(M.isSunLight){let R=n.sun[f];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(b),f++}else if(M.isDirectionalLight){let R=n.directional[d];R.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(i),R.direction.transformDirection(b),d++}else if(M.isSpotLight){let R=n.spot[g];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(b),R.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(i),R.direction.transformDirection(b),g++}else if(M.isRectAreaLight){let R=n.rectArea[_];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(b),o.identity(),s.copy(M.matrixWorld),s.premultiply(b),o.extractRotation(s),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){let R=n.point[m];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(b),m++}else if(M.isHemisphereLight){let R=n.hemi[x];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(b),x++}}}return u(l,"setupView"),{setup:a,setupView:l,state:n}}u(UI,"WebGLLights");function PS(r){let e=new UI(r),t=[],n=[],i=[];function s(f){h.camera=f,t.length=0,n.length=0,i.length=0}u(s,"init");function o(f){f.isLightProbeGrid?i.push(f):t.push(f)}u(o,"pushLight");function a(f){n.push(f)}u(a,"pushShadow");function l(){e.setup(t),i.sort((f,d)=>f.priority-d.priority||f.id-d.id)}u(l,"setupLights");function c(f){e.setupView(t,f)}u(c,"setupLightsView");let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}u(PS,"WebGLRenderState");function FI(r){let e=new WeakMap;function t(i,s=0){let o=e.get(i),a;return o===void 0?(a=new PS(r),e.set(i,[a])):s>=o.length?(a=new PS(r),o.push(a)):a=o[s],a}u(t,"get");function n(){e=new WeakMap}return u(n,"dispose"),{get:t,dispose:n}}u(FI,"WebGLRenderStates");var BI=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kI=`uniform sampler2D shadow_pass;
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
}`,zI=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],GI=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],IS=new Xe,Pu=new X,Lx=new X;function VI(r,e,t){let n=new Gs,i=new ke,s=new ke,o=new wt,a=new Gd,l=new Vd,c={},h=t.maxTextureSize,f={[Si]:Bn,[Bn]:Si,[sn]:sn},d=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:BI,fragmentShader:kI}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new Et;g.setAttribute("position",new _t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ze(g,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vu;let b=this.type;this.render=function(E,y,w){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||E.length===0)return;this.type===xf&&(ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=vu);let L=r.getRenderTarget(),I=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),k=r.state;k.setBlending(Yo),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let $=b!==this.type;$&&y.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(j=>j.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,j=E.length;F<j;F++){let ce=E[F],V=ce.shadow;if(V===void 0){ze("WebGLShadowMap:",ce,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);let ne=V.getFrameExtents();i.multiply(ne),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ne.x),i.x=s.x*ne.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ne.y),i.y=s.y*ne.y,V.mapSize.y=s.y));let Z=r.state.buffers.depth.getReversed();if(V.camera._reversedDepth=Z,V.map===null||$===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===wl){if(ce.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new ii(i.x,i.y,{format:xr,type:oi,minFilter:zt,magFilter:zt,generateMipmaps:!1}),V.map.texture.name=ce.name+".shadowMap",V.map.depthTexture=new ns(i.x,i.y,si),V.map.depthTexture.name=ce.name+".shadowMapDepth",V.map.depthTexture.format=es,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Wt,V.map.depthTexture.magFilter=Wt}else ce.isPointLight?(V.map=new Lu(i.x),V.map.depthTexture=new cu(i.x,Xi)):(V.map=new ii(i.x,i.y),V.map.depthTexture=new ns(i.x,i.y,Xi)),V.map.depthTexture.name=ce.name+".shadowMap",V.map.depthTexture.format=es,this.type===vu?(V.map.depthTexture.compareFunction=Z?D0:N0,V.map.depthTexture.minFilter=zt,V.map.depthTexture.magFilter=zt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Wt,V.map.depthTexture.magFilter=Wt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==i.x||V.map.height!==i.y)&&V.map.setSize(i.x,i.y);let re=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();ce.isPointLight!==!0&&V.updateMatrices(ce,w);let ae=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:w.layers;for(let fe=0;fe<re;fe++){let ve=V.getCamera(fe);if(ce.isPointLight){let ee=V.camera,me=V.matrix,he=ce.distance||ee.far;he!==ee.far&&(ee.far=he,ee.updateProjectionMatrix()),Pu.setFromMatrixPosition(ce.matrixWorld),ee.position.copy(Pu),Lx.copy(ee.position),Lx.add(zI[fe]),ee.up.copy(GI[fe]),ee.lookAt(Lx),ee.updateMatrixWorld(),me.makeTranslation(-Pu.x,-Pu.y,-Pu.z),IS.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),V._frustum.setFromProjectionMatrix(IS,ee.coordinateSystem,ee.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)r.setRenderTarget(V.map,fe),r.clear();else{fe===0&&(r.setRenderTarget(V.map),r.clear());let ee=V.getViewport(fe);o.set(s.x*ee.x,s.y*ee.y,s.x*ee.z,s.y*ee.w),k.viewport(o)}n=V.getFrustum(fe),M(y,w,ve,ce,ae,this.type)}V.isPointLightShadow!==!0&&this.type===wl&&v(V,w),V.needsUpdate=!1}b=this.type,x.needsUpdate=!1,r.setRenderTarget(L,I,D)};function v(E,y){let w=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null?E.mapPass=new ii(i.x,i.y,{format:xr,type:oi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(y,null,w,d,_,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value.set(E.map.width,E.map.height),m.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(y,null,w,m,_,null)}u(v,"VSMPass");function S(E,y,w,L){let I=null,D=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)I=D;else if(I=w.isPointLight===!0?l:a,r.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let k=I.uuid,$=y.uuid,F=c[k];F===void 0&&(F={},c[k]=F);let j=F[$];j===void 0&&(j=I.clone(),F[$]=j,y.addEventListener("dispose",R)),I=j}if(I.visible=y.visible,I.wireframe=y.wireframe,L===wl?I.side=y.shadowSide!==null?y.shadowSide:y.side:I.side=y.shadowSide!==null?y.shadowSide:f[y.side],I.alphaMap=y.alphaMap,I.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,I.map=y.map,I.clipShadows=y.clipShadows,I.clippingPlanes=y.clippingPlanes,I.clipIntersection=y.clipIntersection,I.displacementMap=y.displacementMap,I.displacementScale=y.displacementScale,I.displacementBias=y.displacementBias,I.wireframeLinewidth=y.wireframeLinewidth,I.linewidth=y.linewidth,w.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let k=r.properties.get(I);k.light=w}return I}u(S,"getDepthMaterial");function M(E,y,w,L,I,D){if(E.visible===!1)return;if(E.layers.test(I)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===wl)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);let F=e.update(E),j=E.material;if(Array.isArray(j)){let ce=F.groups;for(let V=0,ne=ce.length;V<ne;V++){let Z=ce[V],re=j[Z.materialIndex];if(re&&re.visible){let ae=S(E,re,L,D);E.onBeforeShadow(r,E,y,w,F,ae,Z),r.renderBufferDirect(w,null,F,ae,E,Z),E.onAfterShadow(r,E,y,w,F,ae,Z)}}}else if(j.visible){let ce=S(E,j,L,D);E.onBeforeShadow(r,E,y,w,F,ce,null),r.renderBufferDirect(w,null,F,ce,E,null),E.onAfterShadow(r,E,y,w,F,ce,null)}}let $=E.children;for(let F=0,j=$.length;F<j;F++)M($[F],y,w,L,I,D)}u(M,"renderObject");function R(E){E.target.removeEventListener("dispose",R);for(let w in c){let L=c[w],I=E.target.uuid;I in L&&(L[I].dispose(),delete L[I])}}u(R,"onMaterialDispose")}u(VI,"WebGLShadowMap");function HI(r,e){function t(){let O=!1,se=new wt,oe=null,ye=new wt(0,0,0,0);return{setMask:u(function(ge){oe!==ge&&!O&&(r.colorMask(ge,ge,ge,ge),oe=ge)},"setMask"),setLocked:u(function(ge){O=ge},"setLocked"),setClear:u(function(ge,_e,Fe,je,xe){xe===!0&&(ge*=je,_e*=je,Fe*=je),se.set(ge,_e,Fe,je),ye.equals(se)===!1&&(r.clearColor(ge,_e,Fe,je),ye.copy(se))},"setClear"),reset:u(function(){O=!1,oe=null,ye.set(-1,0,0,0)},"reset")}}u(t,"ColorBuffer");function n(){let O=!1,se=!1,oe=null,ye=null,ge=null;return{setReversed:u(function(_e){if(se!==_e){let Fe=e.get("EXT_clip_control");_e?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),se=_e;let je=ge;ge=null,this.setClear(je)}},"setReversed"),getReversed:u(function(){return se},"getReversed"),setTest:u(function(_e){_e?de(r.DEPTH_TEST):Ie(r.DEPTH_TEST)},"setTest"),setMask:u(function(_e){oe!==_e&&!O&&(r.depthMask(_e),oe=_e)},"setMask"),setFunc:u(function(_e){if(se&&(_e=oS[_e]),ye!==_e){switch(_e){case Td:r.depthFunc(r.NEVER);break;case Ad:r.depthFunc(r.ALWAYS);break;case Rd:r.depthFunc(r.LESS);break;case cl:r.depthFunc(r.LEQUAL);break;case Cd:r.depthFunc(r.EQUAL);break;case Pd:r.depthFunc(r.GEQUAL);break;case Id:r.depthFunc(r.GREATER);break;case Ld:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ye=_e}},"setFunc"),setLocked:u(function(_e){O=_e},"setLocked"),setClear:u(function(_e){ge!==_e&&(ge=_e,se&&(_e=1-_e),r.clearDepth(_e))},"setClear"),reset:u(function(){O=!1,oe=null,ye=null,ge=null,se=!1},"reset")}}u(n,"DepthBuffer");function i(){let O=!1,se=null,oe=null,ye=null,ge=null,_e=null,Fe=null,je=null,xe=null;return{setTest:u(function(Ge){O||(Ge?de(r.STENCIL_TEST):Ie(r.STENCIL_TEST))},"setTest"),setMask:u(function(Ge){se!==Ge&&!O&&(r.stencilMask(Ge),se=Ge)},"setMask"),setFunc:u(function(Ge,Le,Me){(oe!==Ge||ye!==Le||ge!==Me)&&(r.stencilFunc(Ge,Le,Me),oe=Ge,ye=Le,ge=Me)},"setFunc"),setOp:u(function(Ge,Le,Me){(_e!==Ge||Fe!==Le||je!==Me)&&(r.stencilOp(Ge,Le,Me),_e=Ge,Fe=Le,je=Me)},"setOp"),setLocked:u(function(Ge){O=Ge},"setLocked"),setClear:u(function(Ge){xe!==Ge&&(r.clearStencil(Ge),xe=Ge)},"setClear"),reset:u(function(){O=!1,se=null,oe=null,ye=null,ge=null,_e=null,Fe=null,je=null,xe=null},"reset")}}u(i,"StencilBuffer");let s=new t,o=new n,a=new i,l={},c=new WeakMap,h={},f={},d={},m=new WeakMap,g=[],_=null,x=!1,b=null,v=null,S=null,M=null,R=null,E=null,y=null,w=new Se(0,0,0),L=0,I=!1,D=null,k=null,$=null,F=null,j=null,ce=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,ne=0,Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(Z)[1]),V=ne>=1):Z.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),V=ne>=2);let re=null,ae={},fe=r.getParameter(r.SCISSOR_BOX),ve=r.getParameter(r.VIEWPORT),ee=new wt().fromArray(fe),me=new wt().fromArray(ve);function he(O,se,oe,ye){let ge=new Uint8Array(4),_e=r.createTexture();r.bindTexture(O,_e),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Fe=0;Fe<oe;Fe++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(se,0,r.RGBA,1,1,ye,0,r.RGBA,r.UNSIGNED_BYTE,ge):r.texImage2D(se+Fe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ge);return _e}u(he,"createTexture");let pe={};pe[r.TEXTURE_2D]=he(r.TEXTURE_2D,r.TEXTURE_2D,1),pe[r.TEXTURE_CUBE_MAP]=he(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[r.TEXTURE_2D_ARRAY]=he(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),pe[r.TEXTURE_3D]=he(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(r.DEPTH_TEST),o.setFunc(cl),gt(!1),ct(d0),de(r.CULL_FACE),Rt(Yo);function de(O){h[O]!==!0&&(r.enable(O),h[O]=!0)}u(de,"enable");function Ie(O){h[O]!==!1&&(r.disable(O),h[O]=!1)}u(Ie,"disable");function $e(O,se){return d[O]!==se?(r.bindFramebuffer(O,se),d[O]=se,O===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=se),O===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=se),!0):!1}u($e,"bindFramebuffer");function Re(O,se){let oe=g,ye=!1;if(O){oe=m.get(se),oe===void 0&&(oe=[],m.set(se,oe));let ge=O.textures;if(oe.length!==ge.length||oe[0]!==r.COLOR_ATTACHMENT0){for(let _e=0,Fe=ge.length;_e<Fe;_e++)oe[_e]=r.COLOR_ATTACHMENT0+_e;oe.length=ge.length,ye=!0}}else oe[0]!==r.BACK&&(oe[0]=r.BACK,ye=!0);ye&&r.drawBuffers(oe)}u(Re,"drawBuffers");function nt(O){return _!==O?(r.useProgram(O),_=O,!0):!1}u(nt,"useProgram");let rt={[$o]:r.FUNC_ADD,[TM]:r.FUNC_SUBTRACT,[AM]:r.FUNC_REVERSE_SUBTRACT};rt[RM]=r.MIN,rt[CM]=r.MAX;let Ve={[PM]:r.ZERO,[IM]:r.ONE,[LM]:r.SRC_COLOR,[g0]:r.SRC_ALPHA,[BM]:r.SRC_ALPHA_SATURATE,[UM]:r.DST_COLOR,[DM]:r.DST_ALPHA,[NM]:r.ONE_MINUS_SRC_COLOR,[x0]:r.ONE_MINUS_SRC_ALPHA,[FM]:r.ONE_MINUS_DST_COLOR,[OM]:r.ONE_MINUS_DST_ALPHA,[kM]:r.CONSTANT_COLOR,[zM]:r.ONE_MINUS_CONSTANT_COLOR,[GM]:r.CONSTANT_ALPHA,[VM]:r.ONE_MINUS_CONSTANT_ALPHA};function Rt(O,se,oe,ye,ge,_e,Fe,je,xe,Ge){if(O===Yo){x===!0&&(Ie(r.BLEND),x=!1);return}if(x===!1&&(de(r.BLEND),x=!0),O!==EM){if(O!==b||Ge!==I){if((v!==$o||R!==$o)&&(r.blendEquation(r.FUNC_ADD),v=$o,R=$o),Ge)switch(O){case El:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case f0:r.blendFunc(r.ONE,r.ONE);break;case p0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case m0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:qe("WebGLState: Invalid blending: ",O);break}else switch(O){case El:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case f0:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case p0:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case m0:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",O);break}S=null,M=null,E=null,y=null,w.set(0,0,0),L=0,b=O,I=Ge}return}ge=ge||se,_e=_e||oe,Fe=Fe||ye,(se!==v||ge!==R)&&(r.blendEquationSeparate(rt[se],rt[ge]),v=se,R=ge),(oe!==S||ye!==M||_e!==E||Fe!==y)&&(r.blendFuncSeparate(Ve[oe],Ve[ye],Ve[_e],Ve[Fe]),S=oe,M=ye,E=_e,y=Fe),(je.equals(w)===!1||xe!==L)&&(r.blendColor(je.r,je.g,je.b,xe),w.copy(je),L=xe),b=O,I=!1}u(Rt,"setBlending");function Tt(O,se){O.side===sn?Ie(r.CULL_FACE):de(r.CULL_FACE);let oe=O.side===Bn;se&&(oe=!oe),gt(oe),O.blending===El&&O.transparent===!1?Rt(Yo):Rt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);let ye=O.stencilWrite;a.setTest(ye),ye&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),yt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?de(r.SAMPLE_ALPHA_TO_COVERAGE):Ie(r.SAMPLE_ALPHA_TO_COVERAGE)}u(Tt,"setMaterial");function gt(O){D!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),D=O)}u(gt,"setFlipSided");function ct(O){O!==SM?(de(r.CULL_FACE),O!==k&&(O===d0?r.cullFace(r.BACK):O===wM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ie(r.CULL_FACE),k=O}u(ct,"setCullFace");function xt(O){O!==$&&(V&&r.lineWidth(O),$=O)}u(xt,"setLineWidth");function yt(O,se,oe){O?(de(r.POLYGON_OFFSET_FILL),(F!==se||j!==oe)&&(F=se,j=oe,o.getReversed()&&(se=-se,oe=-oe),r.polygonOffset(se,oe))):Ie(r.POLYGON_OFFSET_FILL)}u(yt,"setPolygonOffset");function At(O){O?de(r.SCISSOR_TEST):Ie(r.SCISSOR_TEST)}u(At,"setScissorTest");function Ot(O){O===void 0&&(O=r.TEXTURE0+ce-1),re!==O&&(r.activeTexture(O),re=O)}u(Ot,"activeTexture");function ut(O,se,oe){oe===void 0&&(re===null?oe=r.TEXTURE0+ce-1:oe=re);let ye=ae[oe];ye===void 0&&(ye={type:void 0,texture:void 0},ae[oe]=ye),(ye.type!==O||ye.texture!==se)&&(re!==oe&&(r.activeTexture(oe),re=oe),r.bindTexture(O,se||pe[O]),ye.type=O,ye.texture=se)}u(ut,"bindTexture");function Y(){let O=ae[re];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}u(Y,"unbindTexture");function Ut(){try{r.compressedTexImage2D(...arguments)}catch(O){qe("WebGLState:",O)}}u(Ut,"compressedTexImage2D");function ht(){try{r.compressedTexImage3D(...arguments)}catch(O){qe("WebGLState:",O)}}u(ht,"compressedTexImage3D");function et(){try{r.texSubImage2D(...arguments)}catch(O){qe("WebGLState:",O)}}u(et,"texSubImage2D");function be(){try{r.texSubImage3D(...arguments)}catch(O){qe("WebGLState:",O)}}u(be,"texSubImage3D");function pt(){try{r.compressedTexSubImage2D(...arguments)}catch(O){qe("WebGLState:",O)}}u(pt,"compressedTexSubImage2D");function Ue(){try{r.compressedTexSubImage3D(...arguments)}catch(O){qe("WebGLState:",O)}}u(Ue,"compressedTexSubImage3D");function We(){try{r.texStorage2D(...arguments)}catch(O){qe("WebGLState:",O)}}u(We,"texStorage2D");function N(){try{r.texStorage3D(...arguments)}catch(O){qe("WebGLState:",O)}}u(N,"texStorage3D");function A(){try{r.texImage2D(...arguments)}catch(O){qe("WebGLState:",O)}}u(A,"texImage2D");function J(){try{r.texImage3D(...arguments)}catch(O){qe("WebGLState:",O)}}u(J,"texImage3D");function U(O){return f[O]!==void 0?f[O]:r.getParameter(O)}u(U,"getParameter");function B(O,se){f[O]!==se&&(r.pixelStorei(O,se),f[O]=se)}u(B,"pixelStorei");function H(O){ee.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),ee.copy(O))}u(H,"scissor");function te(O){me.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),me.copy(O))}u(te,"viewport");function q(O,se){let oe=c.get(se);oe===void 0&&(oe=new WeakMap,c.set(se,oe));let ye=oe.get(O);ye===void 0&&(ye=r.getUniformBlockIndex(se,O.name),r.uniformBlockBinding(se,ye,ye),oe.set(O,ye))}u(q,"updateUBOMapping");function K(O,se,oe){let ge=c.get(se).get(O);l[ge]!==oe&&(r.bindBufferBase(r.UNIFORM_BUFFER,ge,oe),l[ge]=oe)}u(K,"uniformBlockBinding");function ue(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},f={},re=null,ae={},d={},l={},m=new WeakMap,g=[],_=null,x=!1,b=null,v=null,S=null,M=null,R=null,E=null,y=null,w=new Se(0,0,0),L=0,I=!1,D=null,k=null,$=null,F=null,j=null,ee.set(0,0,r.canvas.width,r.canvas.height),me.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return u(ue,"reset"),{buffers:{color:s,depth:o,stencil:a},enable:de,disable:Ie,bindFramebuffer:$e,drawBuffers:Re,useProgram:nt,setBlending:Rt,setMaterial:Tt,setFlipSided:gt,setCullFace:ct,setLineWidth:xt,setPolygonOffset:yt,setScissorTest:At,activeTexture:Ot,bindTexture:ut,unbindTexture:Y,compressedTexImage2D:Ut,compressedTexImage3D:ht,texImage2D:A,texImage3D:J,pixelStorei:B,getParameter:U,updateUBOMapping:q,uniformBlockBinding:K,texStorage2D:We,texStorage3D:N,texSubImage2D:et,texSubImage3D:be,compressedTexSubImage2D:pt,compressedTexSubImage3D:Ue,scissor:H,viewport:te,reset:ue}}u(HI,"WebGLState");function WI(r,e,t,n,i,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,h=new WeakMap,f=new Set,d,m=new WeakMap,g=new Set,_=new FinalizationRegistry(N=>g.delete(N)),x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,A){return x?new OffscreenCanvas(N,A):dl("canvas")}u(b,"createCanvas");function v(N,A,J){let U=1,B=We(N);if((B.width>J||B.height>J)&&(U=J/Math.max(B.width,B.height)),U<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let H=Math.floor(U*B.width),te=Math.floor(U*B.height);d===void 0&&(d=b(H,te));let q=A?b(H,te):d;return q.width=H,q.height=te,q.getContext("2d").drawImage(N,0,0,H,te),ze("WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+H+"x"+te+")."),q}else return"data"in N&&ze("WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),N;return N}u(v,"resizeImage");function S(N){return N.generateMipmaps}u(S,"textureNeedsGenerateMipmaps");function M(N){r.generateMipmap(N)}u(M,"generateMipmap");function R(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}u(R,"getTargetType");function E(N,A,J,U,B,H=!1){if(N!==null){if(r[N]!==void 0)return r[N];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let te;U&&(te=e.get("EXT_texture_norm16"),te||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=A;if(A===r.RED&&(J===r.FLOAT&&(q=r.R32F),J===r.HALF_FLOAT&&(q=r.R16F),J===r.UNSIGNED_BYTE&&(q=r.R8),J===r.UNSIGNED_SHORT&&te&&(q=te.R16_EXT),J===r.SHORT&&te&&(q=te.R16_SNORM_EXT)),A===r.RED_INTEGER&&(J===r.UNSIGNED_BYTE&&(q=r.R8UI),J===r.UNSIGNED_SHORT&&(q=r.R16UI),J===r.UNSIGNED_INT&&(q=r.R32UI),J===r.BYTE&&(q=r.R8I),J===r.SHORT&&(q=r.R16I),J===r.INT&&(q=r.R32I)),A===r.RG&&(J===r.FLOAT&&(q=r.RG32F),J===r.HALF_FLOAT&&(q=r.RG16F),J===r.UNSIGNED_BYTE&&(q=r.RG8),J===r.UNSIGNED_SHORT&&te&&(q=te.RG16_EXT),J===r.SHORT&&te&&(q=te.RG16_SNORM_EXT)),A===r.RG_INTEGER&&(J===r.UNSIGNED_BYTE&&(q=r.RG8UI),J===r.UNSIGNED_SHORT&&(q=r.RG16UI),J===r.UNSIGNED_INT&&(q=r.RG32UI),J===r.BYTE&&(q=r.RG8I),J===r.SHORT&&(q=r.RG16I),J===r.INT&&(q=r.RG32I)),A===r.RGB_INTEGER&&(J===r.UNSIGNED_BYTE&&(q=r.RGB8UI),J===r.UNSIGNED_SHORT&&(q=r.RGB16UI),J===r.UNSIGNED_INT&&(q=r.RGB32UI),J===r.BYTE&&(q=r.RGB8I),J===r.SHORT&&(q=r.RGB16I),J===r.INT&&(q=r.RGB32I)),A===r.RGBA_INTEGER&&(J===r.UNSIGNED_BYTE&&(q=r.RGBA8UI),J===r.UNSIGNED_SHORT&&(q=r.RGBA16UI),J===r.UNSIGNED_INT&&(q=r.RGBA32UI),J===r.BYTE&&(q=r.RGBA8I),J===r.SHORT&&(q=r.RGBA16I),J===r.INT&&(q=r.RGBA32I)),A===r.RGB&&(J===r.UNSIGNED_SHORT&&te&&(q=te.RGB16_EXT),J===r.SHORT&&te&&(q=te.RGB16_SNORM_EXT),J===r.UNSIGNED_INT_5_9_9_9_REV&&(q=r.RGB9_E5),J===r.UNSIGNED_INT_10F_11F_11F_REV&&(q=r.R11F_G11F_B10F)),A===r.RGBA){let K=H?Zc:st.getTransfer(B);J===r.FLOAT&&(q=r.RGBA32F),J===r.HALF_FLOAT&&(q=r.RGBA16F),J===r.UNSIGNED_BYTE&&(q=K===St?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT&&te&&(q=te.RGBA16_EXT),J===r.SHORT&&te&&(q=te.RGBA16_SNORM_EXT),J===r.UNSIGNED_SHORT_4_4_4_4&&(q=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(q=r.RGB5_A1)}return(q===r.R16F||q===r.R32F||q===r.RG16F||q===r.RG32F||q===r.RGBA16F||q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),q}u(E,"getInternalFormat");function y(N,A){let J;return N?A===null||A===Xi||A===Jo?J=r.DEPTH24_STENCIL8:A===si?J=r.DEPTH32F_STENCIL8:A===Rl&&(J=r.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Xi||A===Jo?J=r.DEPTH_COMPONENT24:A===si?J=r.DEPTH_COMPONENT32F:A===Rl&&(J=r.DEPTH_COMPONENT16),J}u(y,"getInternalDepthFormat");function w(N,A){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==Wt&&N.minFilter!==zt?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}u(w,"getMipLevels");function L(N){let A=new WeakRef(N);n.get(N).__ref=A,g.add(A),_.register(N,A,A)}u(L,"track");function I(N){let A=n.get(N).__ref;A!==void 0&&(g.delete(A),_.unregister(A))}u(I,"untrack");function D(N){$(N.target)}u(D,"onTextureDispose");function k(N){F(N.target)}u(k,"onRenderTargetDispose");function $(N){N.removeEventListener("dispose",D),I(N),ce(N),N.isVideoTexture&&h.delete(N),N.isHTMLTexture&&f.delete(N)}u($,"destroyTexture");function F(N){N.removeEventListener("dispose",k),I(N),ne(N)}u(F,"destroyRenderTarget");function j(){for(let N of g){let A=N.deref();A!==void 0&&(A.isRenderTarget===!0?F(A):$(A))}g.clear(),f.clear()}u(j,"dispose");function ce(N){let A=n.get(N);if(A.__webglInit===void 0)return;let J=N.source,U=m.get(J);if(U){let B=U[A.__cacheKey];B.usedTimes--,B.usedTimes===0&&V(N),Object.keys(U).length===0&&m.delete(J)}n.remove(N)}u(ce,"deallocateTexture");function V(N){let A=n.get(N);r.deleteTexture(A.__webglTexture);let J=N.source,U=m.get(J);delete U[A.__cacheKey],o.memory.textures--}u(V,"deleteTexture");function ne(N){let A=n.get(N);A.__depthDisposeCallback&&A.__depthDisposeCallback();let J=N.depthTexture;if(J&&J.renderTarget===N&&$(J),N.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(A.__webglFramebuffer[B]))for(let H=0;H<A.__webglFramebuffer[B].length;H++)r.deleteFramebuffer(A.__webglFramebuffer[B][H]);else r.deleteFramebuffer(A.__webglFramebuffer[B]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[B])}else{if(Array.isArray(A.__webglFramebuffer))for(let B=0;B<A.__webglFramebuffer.length;B++)r.deleteFramebuffer(A.__webglFramebuffer[B]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let B=0;B<A.__webglColorRenderbuffer.length;B++)A.__webglColorRenderbuffer[B]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[B]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let U=N.textures;for(let B=0,H=U.length;B<H;B++){let te=n.get(U[B]);te.__webglTexture&&(r.deleteTexture(te.__webglTexture),o.memory.textures--),n.remove(U[B])}n.remove(N)}u(ne,"deallocateRenderTarget");let Z=0;function re(){Z=0}u(re,"resetTextureUnits");function ae(){return Z}u(ae,"getTextureUnits");function fe(N){Z=N}u(fe,"setTextureUnits");function ve(){let N=Z;return N>=i.maxTextures&&ze("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+i.maxTextures),Z+=1,N}u(ve,"allocateTextureUnit");function ee(N){let A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.mipmapsAutoUpdate),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}u(ee,"getTextureCacheKey");function me(N,A){let J=n.get(N);if(N.isVideoTexture&&pt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&J.__version!==N.version){let U=N.image;if(U===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(J,N,A);return}}else N.isExternalTexture&&(J.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+A)}u(me,"setTexture2D");function he(N,A){let J=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&J.__version!==N.version){Tt(J,N,A);return}else N.isExternalTexture&&(J.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+A)}u(he,"setTexture2DArray");function pe(N,A){let J=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&J.__version!==N.version){Tt(J,N,A);return}t.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+A)}u(pe,"setTexture3D");function de(N,A){let J=n.get(N);if(N.version>0&&J.__version!==N.version){gt(J,N,A);return}t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+A)}u(de,"setTextureCube");let Ie={[Xn]:r.REPEAT,[Wn]:r.CLAMP_TO_EDGE,[ul]:r.MIRRORED_REPEAT},$e={[Wt]:r.NEAREST,[_f]:r.NEAREST_MIPMAP_NEAREST,[Zo]:r.NEAREST_MIPMAP_LINEAR,[zt]:r.LINEAR,[Al]:r.LINEAR_MIPMAP_NEAREST,[wn]:r.LINEAR_MIPMAP_LINEAR},Re={[jM]:r.NEVER,[O0]:r.ALWAYS,[QM]:r.LESS,[N0]:r.LEQUAL,[eS]:r.EQUAL,[D0]:r.GEQUAL,[tS]:r.GREATER,[nS]:r.NOTEQUAL};function nt(N,A){if(A.type===si&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===zt||A.magFilter===Al||A.magFilter===Zo||A.magFilter===wn||A.minFilter===zt||A.minFilter===Al||A.minFilter===Zo||A.minFilter===wn)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,Ie[A.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,Ie[A.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,Ie[A.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,$e[A.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,$e[A.minFilter]),A.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,Re[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Wt||A.minFilter!==Zo&&A.minFilter!==wn||A.type===si&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let J=e.get("EXT_texture_filter_anisotropic");r.texParameterf(N,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}u(nt,"setTextureParameters");function rt(N,A){let J=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",D),L(A));let U=A.source,B=m.get(U);B===void 0&&(B={},m.set(U,B));let H=ee(A);if(H!==N.__cacheKey){B[H]===void 0&&(B[H]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,J=!0),B[H].usedTimes++;let te=B[N.__cacheKey];te!==void 0&&(B[N.__cacheKey].usedTimes--,te.usedTimes===0&&V(A)),N.__cacheKey=H,N.__webglTexture=B[H].texture}return J}u(rt,"initTexture");function Ve(N,A,J){return Math.floor(Math.floor(N/J)/A)}u(Ve,"getRow");function Rt(N,A,J,U){let H=N.updateRanges;if(H.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,A.width,A.height,J,U,A.data);else{H.sort((O,se)=>O.start-se.start);let te=0;for(let O=1;O<H.length;O++){let se=H[te],oe=H[O],ye=se.start+se.count,ge=Ve(oe.start,A.width,4),_e=Ve(se.start,A.width,4);oe.start<=ye+1&&ge===_e&&Ve(oe.start+oe.count-1,A.width,4)===ge?se.count=Math.max(se.count,oe.start+oe.count-se.start):(++te,H[te]=oe)}H.length=te+1;let q=t.getParameter(r.UNPACK_ROW_LENGTH),K=t.getParameter(r.UNPACK_SKIP_PIXELS),ue=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,A.width);for(let O=0,se=H.length;O<se;O++){let oe=H[O],ye=Math.floor(oe.start/4),ge=Math.ceil(oe.count/4),_e=ye%A.width,Fe=Math.floor(ye/A.width),je=ge,xe=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(r.UNPACK_SKIP_ROWS,Fe),t.texSubImage2D(r.TEXTURE_2D,0,_e,Fe,je,xe,J,U,A.data)}N.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,q),t.pixelStorei(r.UNPACK_SKIP_PIXELS,K),t.pixelStorei(r.UNPACK_SKIP_ROWS,ue)}}u(Rt,"updateTexture");function Tt(N,A,J){let U=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(U=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(U=r.TEXTURE_3D);let B=rt(N,A),H=A.source;t.bindTexture(U,N.__webglTexture,r.TEXTURE0+J);let te=n.get(H);if(H.version!==te.__version||B===!0){if(t.activeTexture(r.TEXTURE0+J),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let xe=st.getPrimaries(st.workingColorSpace),Ge=A.colorSpace===qi?null:st.getPrimaries(A.colorSpace),Le=A.colorSpace===qi||xe===Ge?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le)}t.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment);let K=v(A.image,!1,i.maxTextureSize);K=Ue(A,K);let ue=s.convert(A.format,A.colorSpace),O=s.convert(A.type),se=E(A.internalFormat,ue,O,A.normalized,A.colorSpace,A.isVideoTexture);nt(U,A);let oe,ye=A.mipmaps,ge=A.isVideoTexture!==!0,_e=te.__version===void 0||B===!0,Fe=H.dataReady,je=w(A,K);if(A.isDepthTexture)se=y(A.format===cs,A.type),_e&&(ge?t.texStorage2D(r.TEXTURE_2D,1,se,K.width,K.height):t.texImage2D(r.TEXTURE_2D,0,se,K.width,K.height,0,ue,O,null));else if(A.isDataTexture)if(ye.length>0){ge&&_e&&t.texStorage2D(r.TEXTURE_2D,je,se,ye[0].width,ye[0].height);for(let xe=0,Ge=ye.length;xe<Ge;xe++)oe=ye[xe],ge?Fe&&t.texSubImage2D(r.TEXTURE_2D,xe,0,0,oe.width,oe.height,ue,O,oe.data):t.texImage2D(r.TEXTURE_2D,xe,se,oe.width,oe.height,0,ue,O,oe.data);A.generateMipmaps=!1}else ge?(_e&&t.texStorage2D(r.TEXTURE_2D,je,se,K.width,K.height),Fe&&Rt(A,K,ue,O)):t.texImage2D(r.TEXTURE_2D,0,se,K.width,K.height,0,ue,O,K.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ge&&_e&&t.texStorage3D(r.TEXTURE_2D_ARRAY,je,se,ye[0].width,ye[0].height,K.depth);for(let xe=0,Ge=ye.length;xe<Ge;xe++)if(oe=ye[xe],A.format!==Kn)if(ue!==null)if(ge){if(Fe)if(A.layerUpdates.size>0){let Le=X0(oe.width,oe.height,A.format,A.type);for(let Me of A.layerUpdates){let mt=oe.data.subarray(Me*Le/oe.data.BYTES_PER_ELEMENT,(Me+1)*Le/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,xe,0,0,Me,oe.width,oe.height,1,ue,mt)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,xe,0,0,0,oe.width,oe.height,K.depth,ue,oe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,xe,se,oe.width,oe.height,K.depth,0,oe.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ge?Fe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,xe,0,0,0,oe.width,oe.height,K.depth,ue,O,oe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,xe,se,oe.width,oe.height,K.depth,0,ue,O,oe.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{ge&&_e&&t.texStorage2D(r.TEXTURE_2D,je,se,ye[0].width,ye[0].height);for(let xe=0,Ge=ye.length;xe<Ge;xe++)oe=ye[xe],A.format!==Kn?ue!==null?ge?Fe&&t.compressedTexSubImage2D(r.TEXTURE_2D,xe,0,0,oe.width,oe.height,ue,oe.data):t.compressedTexImage2D(r.TEXTURE_2D,xe,se,oe.width,oe.height,0,oe.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?Fe&&t.texSubImage2D(r.TEXTURE_2D,xe,0,0,oe.width,oe.height,ue,O,oe.data):t.texImage2D(r.TEXTURE_2D,xe,se,oe.width,oe.height,0,ue,O,oe.data)}else if(A.isDataArrayTexture)if(ge){if(_e&&t.texStorage3D(r.TEXTURE_2D_ARRAY,je,se,K.width,K.height,K.depth),Fe)if(A.layerUpdates.size>0){let xe=X0(K.width,K.height,A.format,A.type);for(let Ge of A.layerUpdates){let Le=K.data.subarray(Ge*xe/K.data.BYTES_PER_ELEMENT,(Ge+1)*xe/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ge,K.width,K.height,1,ue,O,Le)}A.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ue,O,K.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,se,K.width,K.height,K.depth,0,ue,O,K.data);else if(A.isData3DTexture)ge?(_e&&t.texStorage3D(r.TEXTURE_3D,je,se,K.width,K.height,K.depth),Fe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ue,O,K.data)):t.texImage3D(r.TEXTURE_3D,0,se,K.width,K.height,K.depth,0,ue,O,K.data);else if(A.isFramebufferTexture){if(_e)if(ge)t.texStorage2D(r.TEXTURE_2D,je,se,K.width,K.height);else{let xe=K.width,Ge=K.height;for(let Le=0;Le<je;Le++)t.texImage2D(r.TEXTURE_2D,Le,se,xe,Ge,0,ue,O,null),xe>>=1,Ge>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in r){let xe=r.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),K.parentNode!==xe){xe.appendChild(K),f.add(A),xe.onpaint=Ge=>{let Le=Ge.changedElements;for(let Me of f)Le.includes(Me.image)&&(Me.needsUpdate=!0)},xe.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,K);else{let Le=r.RGBA,Me=r.RGBA,mt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Le,Me,mt,K)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ye.length>0){if(ge&&_e){let xe=We(ye[0]);t.texStorage2D(r.TEXTURE_2D,je,se,xe.width,xe.height)}for(let xe=0,Ge=ye.length;xe<Ge;xe++)oe=ye[xe],ge?Fe&&t.texSubImage2D(r.TEXTURE_2D,xe,0,0,ue,O,oe):t.texImage2D(r.TEXTURE_2D,xe,se,ue,O,oe);A.generateMipmaps=!1}else if(ge){if(_e){let xe=We(K);t.texStorage2D(r.TEXTURE_2D,je,se,xe.width,xe.height)}Fe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ue,O,K)}else t.texImage2D(r.TEXTURE_2D,0,se,ue,O,K);S(A)&&A.mipmapsAutoUpdate===!0&&M(U),te.__version=H.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}u(Tt,"uploadTexture");function gt(N,A,J){if(A.image.length!==6)return;let U=rt(N,A),B=A.source;t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+J);let H=n.get(B);if(B.version!==H.__version||U===!0){t.activeTexture(r.TEXTURE0+J);let te=st.getPrimaries(st.workingColorSpace),q=A.colorSpace===qi?null:st.getPrimaries(A.colorSpace),K=A.colorSpace===qi||te===q?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let ue=A.isCompressedTexture||A.image[0].isCompressedTexture,O=A.image[0]&&A.image[0].isDataTexture,se=[];for(let Me=0;Me<6;Me++)!ue&&!O?se[Me]=v(A.image[Me],!0,i.maxCubemapSize):se[Me]=O?A.image[Me].image:A.image[Me],se[Me]=Ue(A,se[Me]);let oe=se[0],ye=s.convert(A.format,A.colorSpace),ge=s.convert(A.type),_e=E(A.internalFormat,ye,ge,A.normalized,A.colorSpace),Fe=A.isVideoTexture!==!0,je=H.__version===void 0||U===!0,xe=B.dataReady,Ge=w(A,oe);nt(r.TEXTURE_CUBE_MAP,A);let Le;if(A.isDepthTexture){if(_e=y(A.format===cs,A.type),je)if(Fe)t.texStorage2D(r.TEXTURE_CUBE_MAP,1,_e,oe.width,oe.height);else for(let Me=0;Me<6;Me++)t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,_e,oe.width,oe.height,0,ye,ge,null)}else if(ue){Fe&&je&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ge,_e,oe.width,oe.height);for(let Me=0;Me<6;Me++){Le=se[Me].mipmaps;for(let mt=0;mt<Le.length;mt++){let Qt=Le[mt];A.format!==Kn?ye!==null?Fe?xe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,mt,0,0,Qt.width,Qt.height,ye,Qt.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,mt,_e,Qt.width,Qt.height,0,Qt.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?xe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,mt,0,0,Qt.width,Qt.height,ye,ge,Qt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,mt,_e,Qt.width,Qt.height,0,ye,ge,Qt.data)}}}else{if(Le=A.mipmaps,Fe&&je){Le.length>0&&Ge++;let Me=We(se[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ge,_e,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(O){Fe?xe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,se[Me].width,se[Me].height,ye,ge,se[Me].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,_e,se[Me].width,se[Me].height,0,ye,ge,se[Me].data);for(let mt=0;mt<Le.length;mt++){let Ts=Le[mt].image[Me].image;Fe?xe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,mt+1,0,0,Ts.width,Ts.height,ye,ge,Ts.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,mt+1,_e,Ts.width,Ts.height,0,ye,ge,Ts.data)}}else{Fe?xe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,ye,ge,se[Me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,_e,ye,ge,se[Me]);for(let mt=0;mt<Le.length;mt++){let Qt=Le[mt];Fe?xe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,mt+1,0,0,ye,ge,Qt.image[Me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,mt+1,_e,ye,ge,Qt.image[Me])}}}S(A)&&A.mipmapsAutoUpdate===!0&&M(r.TEXTURE_CUBE_MAP),H.__version=B.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}u(gt,"uploadCubeTexture");function ct(N,A,J,U,B,H){let te=s.convert(J.format,J.colorSpace),q=s.convert(J.type),K=E(J.internalFormat,te,q,J.normalized,J.colorSpace),ue=n.get(A),O=n.get(J);if(O.__renderTarget=A,!ue.__hasExternalTextures){let se=Math.max(1,A.width>>H),oe=Math.max(1,A.height>>H);B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY?t.texImage3D(B,H,K,se,oe,A.depth,0,te,q,null):t.texImage2D(B,H,K,se,oe,0,te,q,null)}t.bindFramebuffer(r.FRAMEBUFFER,N),be(A)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,U,B,O.__webglTexture,0,et(A)):(B===r.TEXTURE_2D||B>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,U,B,O.__webglTexture,H),t.bindFramebuffer(r.FRAMEBUFFER,null)}u(ct,"setupFrameBufferTexture");function xt(N,A,J){if(r.bindRenderbuffer(r.RENDERBUFFER,N),A.depthBuffer){let U=A.depthTexture,B=U&&U.isDepthTexture?U.type:null,H=y(A.stencilBuffer,B),te=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;be(A)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,et(A),H,A.width,A.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,et(A),H,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,H,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,N)}else{let U=A.textures;for(let B=0;B<U.length;B++){let H=U[B],te=s.convert(H.format,H.colorSpace),q=s.convert(H.type),K=E(H.internalFormat,te,q,H.normalized,H.colorSpace);be(A)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,et(A),K,A.width,A.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,et(A),K,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,K,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}u(xt,"setupRenderBufferStorage");function yt(N,A,J){let U=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let B=n.get(A.depthTexture);B.__renderTarget=A;let H=U?A.depthTexture.image[0]:A.depthTexture.image;(!B.__webglTexture||H.width!==A.width||H.height!==A.height)&&(H.width=A.width,H.height=A.height,A.depthTexture.needsUpdate=!0),U?de(A.depthTexture,0):me(A.depthTexture,0);let te=B.__webglTexture,q=et(A),K=U?r.TEXTURE_CUBE_MAP_POSITIVE_X+J:r.TEXTURE_2D,ue=A.depthTexture.format===cs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(A.depthTexture.format===es)be(A)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ue,K,te,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,ue,K,te,0);else if(A.depthTexture.format===cs)be(A)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ue,K,te,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,ue,K,te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}u(yt,"setupDepthTexture");function At(N){let A=n.get(N),J=N.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==N.depthTexture){let U=N.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),U){let B=u(()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,U.removeEventListener("dispose",B)},"disposeEvent");U.addEventListener("dispose",B),A.__depthDisposeCallback=B}A.__boundDepthTexture=U}if(N.depthTexture&&!A.__autoAllocateDepthBuffer)if(J)for(let U=0;U<6;U++)yt(A.__webglFramebuffer[U],N,U);else N.texture.mipmaps.length>0?yt(A.__webglFramebuffer[0],N,0):yt(A.__webglFramebuffer,N,0);else if(J){A.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[U]),A.__webglDepthbuffer[U]===void 0)A.__webglDepthbuffer[U]=r.createRenderbuffer(),xt(A.__webglDepthbuffer[U],N,!1);else{let B=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,H=A.__webglDepthbuffer[U];r.bindRenderbuffer(r.RENDERBUFFER,H),r.framebufferRenderbuffer(r.FRAMEBUFFER,B,r.RENDERBUFFER,H)}}else if(N.texture.mipmaps.length>0?t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),xt(A.__webglDepthbuffer,N,!1);else{let B=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,H=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,H),r.framebufferRenderbuffer(r.FRAMEBUFFER,B,r.RENDERBUFFER,H)}t.bindFramebuffer(r.FRAMEBUFFER,null)}u(At,"setupDepthRenderbuffer");function Ot(N,A,J){let U=n.get(N);A!==void 0&&ct(U.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),J!==void 0&&At(N)}u(Ot,"rebindTextures");function ut(N){let A=N.texture,J=n.get(N),U=n.get(A);N.addEventListener("dispose",k),L(N);let B=N.textures,H=N.isWebGLCubeRenderTarget===!0,te=B.length>1;if(te||(U.__webglTexture===void 0&&(U.__webglTexture=r.createTexture()),U.__version=A.version,o.memory.textures++),H){J.__webglFramebuffer=[];for(let q=0;q<6;q++)if(A.mipmaps.length>0){J.__webglFramebuffer[q]=[];for(let K=0;K<A.mipmaps.length;K++)J.__webglFramebuffer[q][K]=r.createFramebuffer()}else J.__webglFramebuffer[q]=r.createFramebuffer()}else{if(A.mipmaps.length>0){J.__webglFramebuffer=[];for(let q=0;q<A.mipmaps.length;q++)J.__webglFramebuffer[q]=r.createFramebuffer()}else J.__webglFramebuffer=r.createFramebuffer();if(te)for(let q=0,K=B.length;q<K;q++){let ue=n.get(B[q]);ue.__webglTexture===void 0&&(ue.__webglTexture=r.createTexture(),o.memory.textures++)}if(N.samples>0&&be(N)===!1){J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let q=0;q<B.length;q++){let K=B[q];J.__webglColorRenderbuffer[q]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[q]);let ue=s.convert(K.format,K.colorSpace),O=s.convert(K.type),se=E(K.internalFormat,ue,O,K.normalized,K.colorSpace,N.isXRRenderTarget===!0),oe=et(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,se,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+q,r.RENDERBUFFER,J.__webglColorRenderbuffer[q])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),xt(J.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(H){t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture),nt(r.TEXTURE_CUBE_MAP,A);for(let q=0;q<6;q++)if(A.mipmaps.length>0)for(let K=0;K<A.mipmaps.length;K++)ct(J.__webglFramebuffer[q][K],N,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+q,K);else ct(J.__webglFramebuffer[q],N,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);S(A)?M(r.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}else if(te){for(let q=0,K=B.length;q<K;q++){let ue=B[q],O=n.get(ue),se=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(se=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,O.__webglTexture),nt(se,ue),ct(J.__webglFramebuffer,N,ue,r.COLOR_ATTACHMENT0+q,se,0),S(ue)&&M(se)}t.unbindTexture()}else{let q=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(q=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(q,U.__webglTexture),nt(q,A),A.mipmaps.length>0)for(let K=0;K<A.mipmaps.length;K++)ct(J.__webglFramebuffer[K],N,A,r.COLOR_ATTACHMENT0,q,K);else ct(J.__webglFramebuffer,N,A,r.COLOR_ATTACHMENT0,q,0);S(A)?M(q):A.mipmaps.length>0&&r.texParameteri(q,r.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}N.depthBuffer&&At(N)}u(ut,"setupRenderTarget");function Y(N){let A=N.textures;for(let J=0,U=A.length;J<U;J++){let B=A[J];if(S(B)&&B.mipmapsAutoUpdate===!0){let H=R(N),te=n.get(B).__webglTexture;t.bindTexture(H,te),M(H),t.unbindTexture()}}}u(Y,"updateRenderTargetMipmap");let Ut=[];function ht(N){if(N.samples>0){if(be(N)===!1){let A=N.textures,J=N.width,U=N.height,B=r.COLOR_BUFFER_BIT,H=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,te=n.get(N),q=A.length>1;if(q)for(let ue=0;ue<A.length;ue++)t.bindFramebuffer(r.FRAMEBUFFER,te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer),N.texture.mipmaps.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,te.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let ue=0;ue<A.length;ue++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(B|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(B|=r.STENCIL_BUFFER_BIT)),q){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,te.__webglColorRenderbuffer[ue]);let O=n.get(A[ue]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,O,0)}r.blitFramebuffer(0,0,J,U,0,0,J,U,B,r.NEAREST),l===!0&&(Ut.length=0,Ut.push(r.COLOR_ATTACHMENT0+ue),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&Ut.push(H),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ut))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),q)for(let ue=0;ue<A.length;ue++){t.bindFramebuffer(r.FRAMEBUFFER,te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,te.__webglColorRenderbuffer[ue]);let O=n.get(A[ue]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,O,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let A=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}u(ht,"updateMultisampleRenderTarget");function et(N){return Math.min(i.maxSamples,N.samples)}u(et,"getRenderTargetSamples");function be(N){let A=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}u(be,"useMultisampledRTT");function pt(N){let A=o.render.frame;h.get(N)!==A&&(h.set(N,A),N.update())}u(pt,"updateVideoTexture");function Ue(N,A){let J=N.colorSpace,U=N.format,B=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||J!==Nn&&J!==qi&&(st.getTransfer(J)===St?(U!==Kn||B!==En)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",J)),A}u(Ue,"verifyColorSpace");function We(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}u(We,"getDimensions"),this.allocateTextureUnit=ve,this.resetTextureUnits=re,this.getTextureUnits=ae,this.setTextureUnits=fe,this.setTexture2D=me,this.setTexture2DArray=he,this.setTexture3D=pe,this.setTextureCube=de,this.rebindTextures=Ot,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=be,this.dispose=j}u(WI,"WebGLTextures");function XI(r,e){function t(n,i=qi){let s,o=st.getTransfer(i);if(n===En)return r.UNSIGNED_BYTE;if(n===Mf)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Sf)return r.UNSIGNED_SHORT_5_5_5_1;if(n===R0)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===C0)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===T0)return r.BYTE;if(n===A0)return r.SHORT;if(n===Rl)return r.UNSIGNED_SHORT;if(n===vf)return r.INT;if(n===Xi)return r.UNSIGNED_INT;if(n===si)return r.FLOAT;if(n===oi)return r.HALF_FLOAT;if(n===P0)return r.ALPHA;if(n===I0)return r.RGB;if(n===Kn)return r.RGBA;if(n===es)return r.DEPTH_COMPONENT;if(n===cs)return r.DEPTH_STENCIL;if(n===wf)return r.RED;if(n===Ef)return r.RED_INTEGER;if(n===xr)return r.RG;if(n===Tf)return r.RG_INTEGER;if(n===Af)return r.RGBA_INTEGER;if(n===Su||n===wu||n===Eu||n===Tu)if(o===St)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Su)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Eu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Tu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Su)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Eu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Tu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rf||n===Cf||n===Pf||n===If)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Rf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===If)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lf||n===Nf||n===Df||n===Of||n===Uf||n===Au||n===Ff)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Lf||n===Nf)return o===St?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Df)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Of)return s.COMPRESSED_R11_EAC;if(n===Uf)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Au)return s.COMPRESSED_RG11_EAC;if(n===Ff)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Bf||n===kf||n===zf||n===Gf||n===Vf||n===Hf||n===Wf||n===Xf||n===qf||n===Yf||n===$f||n===Kf||n===Zf||n===Jf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Bf)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===kf)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zf)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gf)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vf)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Hf)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wf)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xf)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qf)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yf)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$f)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Kf)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zf)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jf)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jf||n===Qf||n===ep)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===jf)return o===St?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ep)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tp||n===np||n===Ru||n===ip)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===tp)return s.COMPRESSED_RED_RGTC1_EXT;if(n===np)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ru)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ip)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Jo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return u(t,"convert"),{convert:t}}u(XI,"WebGLUtils");var qI=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YI=`
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

}`,$x=class $x{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new uu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Un({vertexShader:qI,fragmentShader:YI,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ze(new fr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};u($x,"WebXRDepthSensing");var kx=$x,Kx=class Kx extends Hi{constructor(e,t){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,m=null,g=null,_=typeof XRWebGLBinding<"u",x=new kx,b={},v=t.getContextAttributes(),S=null,M=null,R=[],E=[],y=new ke,w=null,L=null,I=new nn;I.viewport=new wt;let D=new nn;D.viewport=new wt;let k=[I,D],$=new $d,F=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let me=R[ee];return me===void 0&&(me=new gl,R[ee]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ee){let me=R[ee];return me===void 0&&(me=new gl,R[ee]=me),me.getGripSpace()},this.getHand=function(ee){let me=R[ee];return me===void 0&&(me=new gl,R[ee]=me),me.getHandSpace()};function ce(ee){let me=E.indexOf(ee.inputSource);if(me===-1)return;let he=R[me];he!==void 0&&(he.update(ee.inputSource,ee.frame,c||o),he.dispatchEvent({type:ee.type,data:ee.inputSource}))}u(ce,"onSessionEvent");function V(){i.removeEventListener("select",ce),i.removeEventListener("selectstart",ce),i.removeEventListener("selectend",ce),i.removeEventListener("squeeze",ce),i.removeEventListener("squeezestart",ce),i.removeEventListener("squeezeend",ce),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",ne);for(let ee=0;ee<R.length;ee++){let me=E[ee];me!==null&&(E[ee]=null,R[ee].disconnect(me))}F=null,j=null,x.reset();for(let ee in b)delete b[ee];if(e.setRenderTarget(S),m=null,d=null,f=null,i=null,M=null,ve.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(y.width,y.height,!1),L!==null){let ee=L.camera;ee.fov=L.fov,ee.zoom=L.zoom,ee.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}u(V,"onSessionEnd"),this.setFramebufferScaleFactor=function(ee){s=ee,n.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,n.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(ee){if(i=ee,i!==null){if(S=e.getRenderTarget(),i.addEventListener("select",ce),i.addEventListener("selectstart",ce),i.addEventListener("selectend",ce),i.addEventListener("squeeze",ce),i.addEventListener("squeezestart",ce),i.addEventListener("squeezeend",ce),i.addEventListener("end",V),i.addEventListener("inputsourceschange",ne),v.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(y),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,pe=null,de=null;v.depth&&(de=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=v.stencil?cs:es,pe=v.stencil?Jo:Xi);let Ie={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Ie),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new ii(d.textureWidth,d.textureHeight,{format:Kn,type:En,depthTexture:new ns(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let he={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,he),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new ii(m.framebufferWidth,m.framebufferHeight,{format:Kn,type:En,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ve.setContext(i),ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ne(ee){for(let me=0;me<ee.removed.length;me++){let he=ee.removed[me],pe=E.indexOf(he);pe>=0&&(E[pe]=null,R[pe].disconnect(he))}for(let me=0;me<ee.added.length;me++){let he=ee.added[me],pe=E.indexOf(he);if(pe===-1){for(let Ie=0;Ie<R.length;Ie++)if(Ie>=E.length){E.push(he),pe=Ie;break}else if(E[Ie]===null){E[Ie]=he,pe=Ie;break}if(pe===-1)break}let de=R[pe];de&&de.connect(he)}}u(ne,"onInputSourcesChange");function Z(ee,me){me===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(me.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}u(Z,"updateCamera"),this.updateCamera=function(ee){if(i===null)return;let me=ee.near,he=ee.far;x.texture!==null&&(x.depthNear>0&&(me=x.depthNear),x.depthFar>0&&(he=x.depthFar)),$.near=D.near=I.near=me,$.far=D.far=I.far=he,(F!==$.near||j!==$.far)&&(i.updateRenderState({depthNear:$.near,depthFar:$.far}),F=$.near,j=$.far),$.layers.mask=ee.layers.mask|6,I.layers.mask=$.layers.mask&-5,D.layers.mask=$.layers.mask&-3;let pe=ee.parent,de=$.cameras;Z($,pe);for(let Ie=0;Ie<de.length;Ie++)Z(de[Ie],pe);$.projectionMatrix.copy(I.projectionMatrix),$.projectionMatrixInverse.copy(I.projectionMatrixInverse),L===null&&ee.isPerspectiveCamera&&(L={camera:ee,fov:ee.fov,zoom:ee.zoom}),re(ee,$,pe)};function re(ee,me,he){he===null?ee.matrix.copy(me.matrixWorld):(ee.matrix.copy(he.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(me.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(me.projectionMatrix),ee.projectionMatrixInverse.copy(me.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Bo*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}u(re,"updateUserCamera"),this.getCamera=function(){return $},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(ee){l=ee,d!==null&&(d.fixedFoveation=ee),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ee)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh($)},this.getCameraTexture=function(ee){return b[ee]};let ae=null;function fe(ee,me){if(h=me.getViewerPose(c||o),g=me,h!==null){let he=h.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let pe=!1;he.length!==$.cameras.length&&($.cameras.length=0,pe=!0);for(let Re=0;Re<he.length;Re++){let nt=he[Re],rt=null;if(m!==null)rt=m.getViewport(nt);else{let Rt=f.getViewSubImage(d,nt);rt=Rt.viewport,Re===0&&(e.setRenderTargetTextures(M,Rt.colorTexture,Rt.depthStencilTexture),e.setRenderTarget(M))}let Ve=k[Re];Ve===void 0&&(Ve=new nn,Ve.layers.enable(Re),Ve.viewport=new wt,k[Re]=Ve),Ve.matrix.fromArray(nt.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(nt.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(rt.x,rt.y,rt.width,rt.height),Re===0&&($.matrix.copy(Ve.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),pe===!0&&$.cameras.push(Ve)}let de=i.enabledFeatures;if(de&&de.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){f=n.getBinding();let Re=f.getDepthInformation(he[0]);Re&&Re.isValid&&Re.texture&&x.init(Re,i.renderState)}if(de&&de.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let Re=0;Re<he.length;Re++){let nt=he[Re].camera;if(nt){let rt=b[nt];rt||(rt=new uu,b[nt]=rt);let Ve=f.getCameraImage(nt);rt.sourceTexture=Ve}}}}for(let he=0;he<R.length;he++){let pe=E[he],de=R[he];pe!==null&&de!==void 0&&de.update(pe,me,c||o)}ae&&ae(ee,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),g=null}u(fe,"onAnimationFrame");let ve=new LS;ve.setAnimationLoop(fe),this.setAnimationLoop=function(ee){ae=ee},this.dispose=function(){}}};u(Kx,"WebXRManager");var zx=Kx,$I=new Xe,VS=new Ye;VS.set(-1,0,0,0,1,0,0,0,1);function KI(r,e){function t(x,b){x.matrixAutoUpdate===!0&&x.updateMatrix(),b.value.copy(x.matrix)}u(t,"refreshTransformUniform");function n(x,b){b.color.getRGB(x.fogColor.value,V0(r)),b.isFog?(x.fogNear.value=b.near,x.fogFar.value=b.far):b.isFogExp2&&(x.fogDensity.value=b.density)}u(n,"refreshFogUniforms");function i(x,b,v,S,M){b.isNodeMaterial?b.uniformsNeedUpdate=!1:b.isMeshBasicMaterial?s(x,b):b.isMeshLambertMaterial?(s(x,b),b.envMap&&(x.envMapIntensity.value=b.envMapIntensity)):b.isMeshToonMaterial?(s(x,b),f(x,b)):b.isMeshPhongMaterial?(s(x,b),h(x,b),b.envMap&&(x.envMapIntensity.value=b.envMapIntensity)):b.isMeshStandardMaterial?(s(x,b),d(x,b),b.isMeshPhysicalMaterial&&m(x,b,M)):b.isMeshMatcapMaterial?(s(x,b),g(x,b)):b.isMeshDepthMaterial?s(x,b):b.isMeshDistanceMaterial?(s(x,b),_(x,b)):b.isMeshNormalMaterial?s(x,b):b.isLineBasicMaterial?(o(x,b),b.isLineDashedMaterial&&a(x,b)):b.isPointsMaterial?l(x,b,v,S):b.isSpriteMaterial?c(x,b):b.isShadowMaterial?(x.color.value.copy(b.color),x.opacity.value=b.opacity):b.isShaderMaterial&&(b.uniformsNeedUpdate=!1)}u(i,"refreshMaterialUniforms");function s(x,b){x.opacity.value=b.opacity,b.color&&x.diffuse.value.copy(b.color),b.emissive&&x.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity),b.map&&(x.map.value=b.map,t(b.map,x.mapTransform)),b.alphaMap&&(x.alphaMap.value=b.alphaMap,t(b.alphaMap,x.alphaMapTransform)),b.bumpMap&&(x.bumpMap.value=b.bumpMap,t(b.bumpMap,x.bumpMapTransform),x.bumpScale.value=b.bumpScale,b.side===Bn&&(x.bumpScale.value*=-1)),b.normalMap&&(x.normalMap.value=b.normalMap,t(b.normalMap,x.normalMapTransform),x.normalScale.value.copy(b.normalScale),b.side===Bn&&x.normalScale.value.negate()),b.displacementMap&&(x.displacementMap.value=b.displacementMap,t(b.displacementMap,x.displacementMapTransform),x.displacementScale.value=b.displacementScale,x.displacementBias.value=b.displacementBias),b.emissiveMap&&(x.emissiveMap.value=b.emissiveMap,t(b.emissiveMap,x.emissiveMapTransform)),b.specularMap&&(x.specularMap.value=b.specularMap,t(b.specularMap,x.specularMapTransform)),b.alphaTest>0&&(x.alphaTest.value=b.alphaTest);let v=e.get(b),S=v.envMap,M=v.envMapRotation;S&&(x.envMap.value=S,x.envMapRotation.value.setFromMatrix4($I.makeRotationFromEuler(M)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(VS),x.reflectivity.value=b.reflectivity,x.ior.value=b.ior,x.refractionRatio.value=b.refractionRatio),b.lightMap&&(x.lightMap.value=b.lightMap,x.lightMapIntensity.value=b.lightMapIntensity,t(b.lightMap,x.lightMapTransform)),b.aoMap&&(x.aoMap.value=b.aoMap,x.aoMapIntensity.value=b.aoMapIntensity,t(b.aoMap,x.aoMapTransform))}u(s,"refreshUniformsCommon");function o(x,b){x.diffuse.value.copy(b.color),x.opacity.value=b.opacity,b.map&&(x.map.value=b.map,t(b.map,x.mapTransform))}u(o,"refreshUniformsLine");function a(x,b){x.dashSize.value=b.dashSize,x.totalSize.value=b.dashSize+b.gapSize,x.scale.value=b.scale}u(a,"refreshUniformsDash");function l(x,b,v,S){x.diffuse.value.copy(b.color),x.opacity.value=b.opacity,x.size.value=b.size*v,x.scale.value=S*.5,b.map&&(x.map.value=b.map,t(b.map,x.uvTransform)),b.alphaMap&&(x.alphaMap.value=b.alphaMap,t(b.alphaMap,x.alphaMapTransform)),b.alphaTest>0&&(x.alphaTest.value=b.alphaTest)}u(l,"refreshUniformsPoints");function c(x,b){x.diffuse.value.copy(b.color),x.opacity.value=b.opacity,x.rotation.value=b.rotation,b.map&&(x.map.value=b.map,t(b.map,x.mapTransform)),b.alphaMap&&(x.alphaMap.value=b.alphaMap,t(b.alphaMap,x.alphaMapTransform)),b.alphaTest>0&&(x.alphaTest.value=b.alphaTest)}u(c,"refreshUniformsSprites");function h(x,b){x.specular.value.copy(b.specular),x.shininess.value=Math.max(b.shininess,1e-4)}u(h,"refreshUniformsPhong");function f(x,b){b.gradientMap&&(x.gradientMap.value=b.gradientMap)}u(f,"refreshUniformsToon");function d(x,b){x.metalness.value=b.metalness,b.metalnessMap&&(x.metalnessMap.value=b.metalnessMap,t(b.metalnessMap,x.metalnessMapTransform)),x.roughness.value=b.roughness,b.roughnessMap&&(x.roughnessMap.value=b.roughnessMap,t(b.roughnessMap,x.roughnessMapTransform)),b.envMap&&(x.envMapIntensity.value=b.envMapIntensity)}u(d,"refreshUniformsStandard");function m(x,b,v){x.ior.value=b.ior,b.diffuseRoughness>0&&(x.diffuseRoughness.value=b.diffuseRoughness,b.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=b.diffuseRoughnessMap,t(b.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),b.sheen>0&&(x.sheenColor.value.copy(b.sheenColor).multiplyScalar(b.sheen),x.sheenRoughness.value=b.sheenRoughness,b.sheenColorMap&&(x.sheenColorMap.value=b.sheenColorMap,t(b.sheenColorMap,x.sheenColorMapTransform)),b.sheenRoughnessMap&&(x.sheenRoughnessMap.value=b.sheenRoughnessMap,t(b.sheenRoughnessMap,x.sheenRoughnessMapTransform))),b.clearcoat>0&&(x.clearcoat.value=b.clearcoat,x.clearcoatRoughness.value=b.clearcoatRoughness,b.clearcoatMap&&(x.clearcoatMap.value=b.clearcoatMap,t(b.clearcoatMap,x.clearcoatMapTransform)),b.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=b.clearcoatRoughnessMap,t(b.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),b.clearcoatNormalMap&&(x.clearcoatNormalMap.value=b.clearcoatNormalMap,t(b.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(b.clearcoatNormalScale),b.side===Bn&&x.clearcoatNormalScale.value.negate())),b.dispersion>0&&(x.dispersion.value=b.dispersion),b.retroreflectivity>0&&(x.retroreflectivity.value=b.retroreflectivity),b.iridescence>0&&(x.iridescence.value=b.iridescence,x.iridescenceIOR.value=b.iridescenceIOR,x.iridescenceThicknessMinimum.value=b.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=b.iridescenceThicknessMaximum,b.iridescenceMap&&(x.iridescenceMap.value=b.iridescenceMap,t(b.iridescenceMap,x.iridescenceMapTransform)),b.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=b.iridescenceThicknessMap,t(b.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),b.transmission>0&&(x.transmission.value=b.transmission,x.transmissionSamplerMap.value=v.texture,x.transmissionSamplerSize.value.set(v.width,v.height),b.transmissionMap&&(x.transmissionMap.value=b.transmissionMap,t(b.transmissionMap,x.transmissionMapTransform)),x.thickness.value=b.thickness,b.thicknessMap&&(x.thicknessMap.value=b.thicknessMap,t(b.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=b.attenuationDistance,x.attenuationColor.value.copy(b.attenuationColor)),b.anisotropy>0&&(x.anisotropyVector.value.set(b.anisotropy*Math.cos(b.anisotropyRotation),b.anisotropy*Math.sin(b.anisotropyRotation)),b.anisotropyMap&&(x.anisotropyMap.value=b.anisotropyMap,t(b.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=b.specularIntensity,x.specularColor.value.copy(b.specularColor),b.specularColorMap&&(x.specularColorMap.value=b.specularColorMap,t(b.specularColorMap,x.specularColorMapTransform)),b.specularIntensityMap&&(x.specularIntensityMap.value=b.specularIntensityMap,t(b.specularIntensityMap,x.specularIntensityMapTransform))}u(m,"refreshUniformsPhysical");function g(x,b){b.matcap&&(x.matcap.value=b.matcap)}u(g,"refreshUniformsMatcap");function _(x,b){let v=e.get(b).light;x.referencePosition.value.setFromMatrixPosition(v.matrixWorld),x.nearDistance.value=v.shadow.camera.near,x.farDistance.value=v.shadow.camera.far}return u(_,"refreshUniformsDistance"),{refreshFogUniforms:n,refreshMaterialUniforms:i}}u(KI,"WebGLMaterials");function ZI(r,e,t,n){let i={},s={};function o(v,S){let M=S.program;n.uniformBlockBinding(v,M,i[v.id])}u(o,"bind");function a(v,S){let M=i[v.id];M===void 0&&(g(v),M=l(v),i[v.id]=M,v.addEventListener("dispose",x));let R=S.program;n.updateUBOMapping(v,R);let E=e.render.frame;s[v.id]!==E&&(c(v),s[v.id]=E)}u(a,"update");function l(v){let S=r.createBuffer(),M=v.__size,R=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,M,R),r.bindBuffer(r.UNIFORM_BUFFER,null),S}u(l,"createBuffer");function c(v){let S=i[v.id],M=v.uniforms,R=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let E=0,y=M.length;E<y;E++){let w=M[E];if(Array.isArray(w))for(let L=0,I=w.length;L<I;L++)h(w[L],E,L,R);else h(w,E,0,R)}r.bindBuffer(r.UNIFORM_BUFFER,null)}u(c,"updateBufferData");function h(v,S,M,R){if(d(v,S,M,R)===!0){let E=v.__offset,y=v.value;if(Array.isArray(y)){let w=0;for(let L=0;L<y.length;L++){let I=y[L],D=_(I,!0);f(I,v.__data,w),w+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else f(y,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,E,v.__data)}}u(h,"updateUniform");function f(v,S,M){typeof v=="number"||typeof v=="boolean"?S[M]=v:v.isMatrix3?(S[M]=v.elements[0],S[M+1]=v.elements[1],S[M+2]=v.elements[2],S[M+3]=0,S[M+4]=v.elements[3],S[M+5]=v.elements[4],S[M+6]=v.elements[5],S[M+7]=0,S[M+8]=v.elements[6],S[M+9]=v.elements[7],S[M+10]=v.elements[8],S[M+11]=0):ArrayBuffer.isView(v)?S.set(v.subarray(0,S.length-M),M):v.toArray(S,M)}u(f,"writeUniformValue");function d(v,S,M,R){let E=v.value,y=S+"_"+M;if(Array.isArray(E)){R[y]===void 0&&(R[y]=[]);let w=R[y],L=!1;for(let I=0;I<E.length;I++)m(E[I],w,I)===!0&&(L=!0);return L}return m(E,R,y)}u(d,"hasUniformChanged");function m(v,S,M){if(S[M]===void 0)return typeof v=="number"||typeof v=="boolean"?S[M]=v:ArrayBuffer.isView(v)?S[M]=v.slice():S[M]=v.clone(),!0;{let R=S[M];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return S[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}u(m,"hasValueChanged");function g(v){let S=v.uniforms,M=0,R=16;for(let y=0,w=S.length;y<w;y++){let L=Array.isArray(S[y])?S[y]:[S[y]];for(let I=0,D=L.length;I<D;I++){let k=L[I],$=Array.isArray(k.value)?k.value:[k.value],F=Array.isArray(S[y])||Array.isArray(k.value),j=M;for(let V=0,ne=$.length;V<ne;V++){let Z=$[V],re=_(Z,F),ae=M%R,fe=ae%re.boundary,ve=ae+fe;M+=fe,ve!==0&&R-ve<re.storage&&(M+=R-ve),V===0&&(j=M),M+=re.storage}let ce=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new ce((M-j)/Float32Array.BYTES_PER_ELEMENT),k.__offset=j}}let E=M%R;return E>0&&(M+=R-E),v.__size=M,v.__cache={},this}u(g,"prepareUniformsGroup");function _(v,S){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=16,M.storage=48):v.isMatrix4?(M.boundary=16,M.storage=64):v.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",v),S===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}u(_,"getUniformSize");function x(v){let S=v.target;S.removeEventListener("dispose",x),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}u(x,"onUniformsGroupsDispose");function b(){for(let v in i)r.deleteBuffer(i[v]);i={},s={}}return u(b,"dispose"),{bind:o,update:a,dispose:b}}u(ZI,"WebGLUniformsGroups");var JI=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),yr=null;function jI(){return yr===null&&(yr=new zs(JI,16,16,xr,oi),yr.name="DFG_LUT",yr.minFilter=zt,yr.magFilter=zt,yr.wrapS=Wn,yr.wrapT=Wn,yr.generateMipmaps=!1,yr.needsUpdate=!0),yr}u(jI,"getDFGLUT");var Zx=class Zx{constructor(e={}){let{canvas:t=iS(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:m=En}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let _=m,x=new Set([Af,Tf,Ef]),b=new Set([En,Xi,Rl,Jo,Mf,Sf]),v=new Uint32Array(4),S=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},R=null,E=null,y=[],w=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,D=!1,k=null,$=null,F=null,j=null;this._outputColorSpace=Lt;let ce=0,V=0,ne=null,Z=-1,re=null,ae=new wt,fe=new wt,ve=null,ee=new Se(0),me=0,he=t.width,pe=t.height,de=1,Ie=null,$e=null,Re=new wt(0,0,he,pe),nt=new wt(0,0,he,pe),rt=!1,Ve=new Gs,Rt=new Ud,Tt=!1,gt=!1,ct=new Xe,xt=new X,yt=new wt,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ot=!1;function ut(){return ne===null?de:1}u(ut,"getTargetPixelRatio");let Y=n;function Ut(C,W){return t.getContext(C,W)}u(Ut,"getContext");let ht,et,be,pt,Ue,We,N,A,J,U,B,H,te,q,K,ue,O,se,oe,ye,ge,_e,Fe;try{let C={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",Me,!1),Y===null){let W="webgl2";if(Y=Ut(W,C),Y===null)throw Ut(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}je()}catch(C){throw t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),qe("WebGLRenderer: "+C.message),C}function je(){ht=new c2(Y),ht.init(),ge=new XI(Y,ht),et=new jP(Y,ht,e,ge),be=new HI(Y,ht),et.reversedDepthBuffer&&d&&be.buffers.depth.setReversed(!0),$=Y.createFramebuffer(),F=Y.createFramebuffer(),j=Y.createFramebuffer(),pt=new d2(Y),Ue=new CI,We=new WI(Y,ht,be,Ue,et,ge,pt),N=new l2(I),A=new pR(Y),_e=new ZP(Y,A),J=new u2(Y,A,pt,_e),U=new p2(Y,J,A,_e,pt),se=new f2(Y,et,We),K=new QP(Ue),B=new RI(I,N,ht,et,_e,K),H=new KI(I,Ue),te=new II,q=new FI(ht),O=new KP(I,N,be,U,g,l),ue=new VI(I,U,et),Fe=new ZI(Y,pt,et,be),oe=new JP(Y,ht,pt),ye=new h2(Y,ht,pt),pt.programs=B.programs,I.capabilities=et,I.extensions=ht,I.properties=Ue,I.renderLists=te,I.shadowMap=ue,I.state=be,I.info=pt}u(je,"initGLContext"),_!==En&&(L=new g2(_,t.width,t.height,a,i,s));let xe=new zx(I,Y);this.xr=xe,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){let C=ht.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=ht.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(C){C!==void 0&&(de=C,this.setSize(he,pe,!1))},this.getSize=function(C){return C.set(he,pe)},this.setSize=function(C,W,le=!0){if(xe.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}he=C,pe=W,t.width=Math.floor(C*de),t.height=Math.floor(W*de),le===!0&&(t.style.width=C+"px",t.style.height=W+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(he*de,pe*de).floor()},this.setDrawingBufferSize=function(C,W,le){he=C,pe=W,de=le,t.width=Math.floor(C*le),t.height=Math.floor(W*le),this.setViewport(0,0,C,W)},this.setEffects=function(C){if(_===En){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let W=0;W<C.length;W++)if(C[W].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(ae)},this.getViewport=function(C){return C.copy(Re)},this.setViewport=function(C,W,le,Q){C.isVector4?Re.set(C.x,C.y,C.z,C.w):Re.set(C,W,le,Q),be.viewport(ae.copy(Re).multiplyScalar(ut()).round())},this.getScissor=function(C){return C.copy(nt)},this.setScissor=function(C,W,le,Q){C.isVector4?nt.set(C.x,C.y,C.z,C.w):nt.set(C,W,le,Q),be.scissor(fe.copy(nt).multiplyScalar(ut()).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(C){be.setScissorTest(rt=C)},this.setOpaqueSort=function(C){Ie=C},this.setTransparentSort=function(C){$e=C},this.getClearColor=function(C){return C.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor(...arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha(...arguments)},this.clear=function(C=!0,W=!0,le=!0){let Q=0;if(C){let ie=!1;if(ne!==null){let Ee=ne.texture.format;ie=x.has(Ee)}if(ie){let Ee=ne.texture.type,Ne=b.has(Ee),we=O.getClearColor(),Ce=O.getClearAlpha(),Be=we.r,Ke=we.g,dt=we.b;Ne?(v[0]=Be,v[1]=Ke,v[2]=dt,v[3]=Ce,Y.clearBufferuiv(Y.COLOR,0,v)):(S[0]=Be,S[1]=Ke,S[2]=dt,S[3]=Ce,Y.clearBufferiv(Y.COLOR,0,S))}else Q|=Y.COLOR_BUFFER_BIT}W&&(Q|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),le&&(Q|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&Y.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),k=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),O.dispose(),te.dispose(),q.dispose(),We.dispose(),Ue.dispose(),N.dispose(),U.dispose(),J.dispose(),_e.dispose(),Fe.dispose(),B.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",xv),xe.removeEventListener("sessionend",bv),Eo.stop()};function Ge(C){C.preventDefault(),Jc("WebGLRenderer: Context Lost."),D=!0}u(Ge,"onContextLost");function Le(){Jc("WebGLRenderer: Context Restored."),D=!1;let C=pt.autoReset,W=ue.enabled,le=ue.autoUpdate,Q=ue.needsUpdate,ie=ue.type;je(),pt.autoReset=C,ue.enabled=W,ue.autoUpdate=le,ue.needsUpdate=Q,ue.type=ie}u(Le,"onContextRestore");function Me(C){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}u(Me,"onContextCreationError");function mt(C){let W=C.target;W.removeEventListener("dispose",mt),Qt(W)}u(mt,"onMaterialDispose");function Qt(C){Ts(C),Ue.remove(C)}u(Qt,"deallocateMaterial");function Ts(C){let W=Ue.get(C).programs;W!==void 0&&(W.forEach(function(le){B.releaseProgram(le)}),C.isShaderMaterial&&B.releaseShaderCache(C))}u(Ts,"releaseMaterialProgramReferences"),this.renderBufferDirect=function(C,W,le,Q,ie,Ee){W===null&&(W=At);let Ne=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,we=KT(C,W,le,Q,ie);be.setMaterial(Q,Ne);let Ce=le.index,Be=1;if(Q.wireframe===!0){if(Ce=J.getWireframeAttribute(le),Ce===void 0)return;Be=2}let Ke=le.drawRange,dt=le.attributes.position,De=Ke.start*Be,ft=(Ke.start+Ke.count)*Be;Ee!==null&&(De=Math.max(De,Ee.start*Be),ft=Math.min(ft,(Ee.start+Ee.count)*Be)),Ce!==null?(De=Math.max(De,0),ft=Math.min(ft,Ce.count)):dt!=null&&(De=Math.max(De,0),ft=Math.min(ft,dt.count));let en=ft-De;if(en<0||en===1/0)return;_e.setup(ie,Q,we,le,Ce);let It,Ct=oe;if(Ce!==null&&(It=A.get(Ce),Ct=ye,Ct.setIndex(It)),ie.isMesh)Q.wireframe===!0?(be.setLineWidth(Q.wireframeLinewidth*ut()),Ct.setMode(Y.LINES)):Ct.setMode(Y.TRIANGLES);else if(ie.isLine){let bn=Q.linewidth;bn===void 0&&(bn=1),be.setLineWidth(bn*ut()),ie.isLineSegments?Ct.setMode(Y.LINES):ie.isLineLoop?Ct.setMode(Y.LINE_LOOP):Ct.setMode(Y.LINE_STRIP)}else ie.isPoints?Ct.setMode(Y.POINTS):ie.isSprite&&Ct.setMode(Y.TRIANGLES);if(ie.isBatchedMesh)if(ht.get("WEBGL_multi_draw"))Ct.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{let bn=ie._multiDrawStarts,Oe=ie._multiDrawCounts,In=ie._multiDrawCount,vt=Ce?A.get(Ce).bytesPerElement:1,To=Ue.get(Q).currentProgram.getUniforms();for(let yn=0;yn<In;yn++)To.setValue(Y,"_gl_DrawID",yn),Ct.render(bn[yn]/vt,Oe[yn])}else if(ie.isInstancedMesh)Ct.renderInstances(De,en,ie.count);else if(le.isInstancedBufferGeometry){let bn=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Oe=Math.min(le.instanceCount,bn);Ct.renderInstances(De,en,Oe)}else Ct.render(De,en)};function gv(C,W,le,Q){k!==null&&C.isNodeMaterial&&k.setObject(Q,C),Tt===!0&&K.setState(C,le,!1),C.transparent===!0&&C.side===sn&&C.forceSinglePass===!1?(C.side=Bn,C.needsUpdate=!0,Nc(C,W,Q),C.side=Si,C.needsUpdate=!0,Nc(C,W,Q),C.side=sn):Nc(C,W,Q)}u(gv,"prepareMaterial"),this.compile=function(C,W,le=null){le===null&&(le=C),k!==null&&k.renderStart(C,W,le),E=q.get(le),E.init(W),w.push(E),le.traverseVisible(function(ie){ie.isLight&&ie.layers.test(W.layers)&&(E.pushLight(ie),ie.castShadow&&E.pushShadow(ie))}),C!==le&&C.traverseVisible(function(ie){ie.isLight&&ie.layers.test(W.layers)&&(E.pushLight(ie),ie.castShadow&&E.pushShadow(ie))}),E.setupLights(),k!==null&&k.updateLights(E.state.lightsArray),gt=this.localClippingEnabled,Tt=K.init(this.clippingPlanes,gt),Tt===!0&&K.setGlobalState(this.clippingPlanes,W),k!==null&&ue.render(E.state.shadowsArray,le,W);let Q=new Set;return C.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;let Ee=ie.material;if(Ee)if(Array.isArray(Ee))for(let Ne=0;Ne<Ee.length;Ne++){let we=Ee[Ne];gv(we,le,W,ie),Q.add(we)}else gv(Ee,le,W,ie),Q.add(Ee)}),E=w.pop(),k!==null&&k.renderEnd(),Q},this.compileAsync=function(C,W,le=null){let Q=this.compile(C,W,le);return new Promise(ie=>{function Ee(){if(Q.forEach(function(Ne){let Ce=Ue.get(Ne).currentProgram;(Ce===void 0||Ce.isReady())&&Q.delete(Ne)}),Q.size===0){ie(C);return}setTimeout(Ee,10)}u(Ee,"checkMaterialsReady"),ht.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let wm=null;function YT(C){wm&&wm(C)}u(YT,"onAnimationFrame");function xv(){Eo.stop()}u(xv,"onXRSessionStart");function bv(){Eo.start()}u(bv,"onXRSessionEnd");let Eo=new LS;Eo.setAnimationLoop(YT),typeof self<"u"&&Eo.setContext(self),this.setAnimationLoop=function(C){wm=C,xe.setAnimationLoop(C),C===null?Eo.stop():Eo.start()},xe.addEventListener("sessionstart",xv),xe.addEventListener("sessionend",bv),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;k!==null&&k.renderStart(C,W);let le=xe.enabled===!0&&xe.isPresenting===!0,Q=L!==null&&(ne===null||le)&&L.begin(I,ne);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(W),W=xe.getCamera()),C.isScene===!0&&C.onBeforeRender(I,C,W,ne),E=q.get(C,w.length),E.init(W),E.state.textureUnits=We.getTextureUnits(),w.push(E),ct.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),W.isArrayCamera?Rt.setFromArrayCamera(W):Ve.setFromProjectionMatrix(ct,Mi,W.reversedDepth),gt=this.localClippingEnabled,Tt=K.init(this.clippingPlanes,gt),R=te.get(C,y.length),R.init(),y.push(R),this.info.render.frame++,xe.enabled===!0&&xe.isPresenting===!0){let Ne=I.xr.getDepthSensingMesh();Ne!==null&&Em(Ne,W,-1/0,I.sortObjects)}Em(C,W,0,I.sortObjects),R.finish(),k!==null&&k.updateLights(E.state.lightsArray),I.sortObjects===!0&&R.sort(Ie,$e),Ot=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,Ot&&O.addToRenderList(R,C),this.info.autoReset===!0&&this.info.reset(),Tt===!0&&K.beginShadows();let ie=E.state.shadowsArray;if(ue.render(ie,C,W),Tt===!0&&K.endShadows(),(Q&&L.hasRenderPass())===!1){let Ne=R.opaque,we=R.transmissive;if(E.setupLights(),W.isArrayCamera){let Ce=W.cameras;if(we.length>0)for(let Be=0,Ke=Ce.length;Be<Ke;Be++){let dt=Ce[Be];_v(Ne,we,C,dt)}Ot&&O.render(C);for(let Be=0,Ke=Ce.length;Be<Ke;Be++){let dt=Ce[Be];yv(R,C,dt,dt.viewport)}}else we.length>0&&_v(Ne,we,C,W),Ot&&O.render(C),yv(R,C,W)}ne!==null&&V===0&&(We.updateMultisampleRenderTarget(ne),We.updateRenderTargetMipmap(ne)),Q&&L.end(I),C.isScene===!0&&C.onAfterRender(I,C,W),_e.resetDefaultState(),Z=-1,re=null,w.pop(),w.length>0?(E=w[w.length-1],We.setTextureUnits(E.state.textureUnits),Tt===!0&&K.setGlobalState(I.clippingPlanes,E.state.camera)):E=null,y.pop(),y.length>0?R=y[y.length-1]:R=null,k!==null&&k.renderEnd()};function Em(C,W,le,Q){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)le=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)E.pushLight(C),C.castShadow&&E.pushShadow(C);else if(C.isSprite){let Ne=W.isArrayCamera?Rt:Ve;if(!C.frustumCulled||C.intersectsFrustum(Ne)){Q&&yt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ct);let we=U.update(C),Ce=C.material;Ce.visible&&R.push(C,we,Ce,le,yt.z,null,W)}}else if(C.isMesh||C.isLine||C.isPoints){let Ne=W.isArrayCamera?Rt:Ve;if(!C.frustumCulled||C.intersectsFrustum(Ne)){let we=U.update(C),Ce=C.material;if(Q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),yt.copy(C.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),yt.copy(we.boundingSphere.center)),yt.applyMatrix4(C.matrixWorld).applyMatrix4(ct)),Array.isArray(Ce)){let Be=we.groups;for(let Ke=0,dt=Be.length;Ke<dt;Ke++){let De=Be[Ke],ft=Ce[De.materialIndex];ft&&ft.visible&&R.push(C,we,ft,le,yt.z,De,W)}}else Ce.visible&&R.push(C,we,Ce,le,yt.z,null,W)}}}let Ee=C.children;for(let Ne=0,we=Ee.length;Ne<we;Ne++)Em(Ee[Ne],W,le,Q)}u(Em,"projectObject");function yv(C,W,le,Q){let{opaque:ie,transmissive:Ee,transparent:Ne}=C;E.setupLightsView(le),Tt===!0&&K.setGlobalState(I.clippingPlanes,le),Q&&be.viewport(ae.copy(Q)),ie.length>0&&Yh(ie,W,le),Ee.length>0&&Yh(Ee,W,le),Ne.length>0&&Yh(Ne,W,le),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}u(yv,"renderScene");function _v(C,W,le,Q){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Q.id]===void 0){let De=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Q.id]=new ii(1,1,{generateMipmaps:!0,type:De?oi:En,minFilter:wn,samples:Math.max(4,et.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:st.workingColorSpace})}let Ee=E.state.transmissionRenderTarget[Q.id],Ne=Q.viewport||ae;Ee.setSize(Ne.z*I.transmissionResolutionScale,Ne.w*I.transmissionResolutionScale);let we=I.getRenderTarget(),Ce=I.getActiveCubeFace(),Be=I.getActiveMipmapLevel();I.setRenderTarget(Ee),I.getClearColor(ee),me=I.getClearAlpha(),me<1&&I.setClearColor(16777215,.5),I.clear(),Ot&&O.render(le);let Ke=I.toneMapping;I.toneMapping=gr;let dt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),E.setupLightsView(Q),Tt===!0&&K.setGlobalState(I.clippingPlanes,Q),Yh(C,le,Q),We.updateMultisampleRenderTarget(Ee),We.updateRenderTargetMipmap(Ee),ht.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let ft=0,en=W.length;ft<en;ft++){let It=W[ft],{object:Ct,geometry:bn,material:Oe,group:In}=It;if(Oe.side===sn&&Ct.layers.test(Q.layers)){let vt=Oe.side;Oe.side=Bn,Oe.needsUpdate=!0,vv(Ct,le,Q,bn,Oe,In),Oe.side=vt,Oe.needsUpdate=!0,De=!0}}De===!0&&(We.updateMultisampleRenderTarget(Ee),We.updateRenderTargetMipmap(Ee))}I.setRenderTarget(we,Ce,Be),I.setClearColor(ee,me),dt!==void 0&&(Q.viewport=dt),I.toneMapping=Ke}u(_v,"renderTransmissionPass");function Yh(C,W,le){let Q=W.isScene===!0?W.overrideMaterial:null;for(let ie=0,Ee=C.length;ie<Ee;ie++){let Ne=C[ie],{object:we,geometry:Ce,group:Be}=Ne,Ke=Ne.material;Ke.allowOverride===!0&&Q!==null&&(Ke=Q),we.layers.test(le.layers)&&vv(we,W,le,Ce,Ke,Be)}}u(Yh,"renderObjects");function vv(C,W,le,Q,ie,Ee){k!==null&&ie.isNodeMaterial&&k.setObject(C,ie),C.onBeforeRender(I,W,le,Q,ie,Ee),C.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ie.onBeforeRender(I,W,le,Q,C,Ee),ie.transparent===!0&&ie.side===sn&&ie.forceSinglePass===!1?(ie.side=Bn,ie.needsUpdate=!0,I.renderBufferDirect(le,W,Q,ie,C,Ee),ie.side=Si,ie.needsUpdate=!0,I.renderBufferDirect(le,W,Q,ie,C,Ee),ie.side=sn):I.renderBufferDirect(le,W,Q,ie,C,Ee),C.onAfterRender(I,W,le,Q,ie,Ee)}u(vv,"renderObject");function Mv(C){let W=0;for(let le of C)le.texture!==null&&W++;return W}u(Mv,"countLightProbeGrids");function Nc(C,W,le){W.isScene!==!0&&(W=At);let Q=Ue.get(C),ie=E.state.lights,Ee=E.state.shadowsArray,Ne=ie.state.version,we=B.getParameters(C,ie.state,Ee,W,le,E.state.lightProbeGridArray),Ce=B.getProgramCacheKey(we),Be=Q.programs;Q.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?W.environment:null,Q.fog=W.fog;let Ke=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;Q.envMap=N.get(C.envMap||Q.environment,Ke),Q.envMapRotation=Q.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,Be===void 0&&(C.addEventListener("dispose",mt),Be=new Map,Q.programs=Be,Q.programVariants=new Map);let dt=Be.get(Ce);if(dt!==void 0){if(Q.currentProgram===dt&&Q.lightsStateVersion===Ne)return wv(C,we),dt}else we.uniforms=B.getUniforms(C),k!==null&&C.isNodeMaterial&&k.build(C,le,we),C.onBeforeCompile(we,I),dt=B.acquireProgram(we,Ce),Be.set(Ce,dt),Q.uniforms=we.uniforms;let De=Q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(De.clippingPlanes=K.uniform),wv(C,we),Q.needsLights=JT(C),Q.lightsStateVersion=Ne,Q.needsLights&&(De.ambientLightColor.value=ie.state.ambient,De.lightProbe.value=ie.state.probe,De.sunLights.value=ie.state.sun,De.sunLightShadows.value=ie.state.sunShadow,De.directionalLights.value=ie.state.directional,De.directionalLightShadows.value=ie.state.directionalShadow,De.spotLights.value=ie.state.spot,De.spotLightShadows.value=ie.state.spotShadow,De.rectAreaLights.value=ie.state.rectArea,De.ltc_1.value=ie.state.rectAreaLTC1,De.ltc_2.value=ie.state.rectAreaLTC2,De.pointLights.value=ie.state.point,De.pointLightShadows.value=ie.state.pointShadow,De.hemisphereLights.value=ie.state.hemi,De.sunShadowMatrix.value=ie.state.sunShadowMatrix,De.sunShadowCascade.value=ie.state.sunShadowCascade,De.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,De.spotLightMatrix.value=ie.state.spotLightMatrix,De.spotLightMap.value=ie.state.spotLightMap,De.pointShadowMatrix.value=ie.state.pointShadowMatrix),Q.numLightProbeGrids=Mv(E.state.lightProbeGridArray),Q.currentProgram=dt,Q.uniformsList=null,dt}u(Nc,"getProgram");function $T(C,W,le,Q,ie){let Ee=Ue.get(C),Ne=Ee.currentProgram.id+","+Q+","+ie,we=Ee.programVariants.get(Ne);return we===void 0?(we=Nc(C,W,le),Ee.programVariants.set(Ne,we)):(Ee.currentProgram=we,Ee.uniformsList=null,Ee.outputColorSpace=Q,Ee.toneMapping=ie),we}u($T,"getProgramVariant");function Sv(C){if(C.uniformsList===null){let W=C.currentProgram.getUniforms();C.uniformsList=Pl.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}u(Sv,"getUniformList");function wv(C,W){let le=Ue.get(C);le.outputColorSpace=W.outputColorSpace,le.batching=W.batching,le.batchingColor=W.batchingColor,le.instancing=W.instancing,le.instancingColor=W.instancingColor,le.instancingMorph=W.instancingMorph,le.skinning=W.skinning,le.morphTargets=W.morphTargets,le.morphNormals=W.morphNormals,le.morphColors=W.morphColors,le.morphTargetsCount=W.morphTargetsCount,le.numClippingPlanes=W.numClippingPlanes,le.numIntersection=W.numClipIntersection,le.vertexAlphas=W.vertexAlphas,le.vertexTangents=W.vertexTangents,le.toneMapping=W.toneMapping}u(wv,"updateCommonMaterialProperties");function KT(C,W,le,Q,ie){W.isScene!==!0&&(W=At),We.resetTextureUnits();let Ee=W.fog,Ne=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?W.environment:null,we=ne===null?I.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:st.workingColorSpace,Ce=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,Be=N.get(Q.envMap||Ne,Ce),Ke=Q.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,dt=!!le.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),De=!!le.morphAttributes.position,ft=!!le.morphAttributes.normal,en=!!le.morphAttributes.color,It=gr;Q.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(It=I.toneMapping);let Ct=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,bn=Ct!==void 0?Ct.length:0,Oe=Ue.get(Q),In=E.state.lights;if(Tt===!0&&(gt===!0||C!==re)){let Vt=C===re&&Q.id===Z;K.setState(Q,C,Vt)}let vt=!1,To=!1;Q.version===Oe.__version?Oe.needsLights&&Oe.lightsStateVersion!==In.state.version||ie.isBatchedMesh&&Oe.batching===!1||!ie.isBatchedMesh&&Oe.batching===!0||ie.isBatchedMesh&&Oe.batchingColor===!0&&ie._colorsTexture===null||ie.isBatchedMesh&&Oe.batchingColor===!1&&ie._colorsTexture!==null||ie.isInstancedMesh&&Oe.instancing===!1||!ie.isInstancedMesh&&Oe.instancing===!0||ie.isSkinnedMesh&&Oe.skinning===!1||!ie.isSkinnedMesh&&Oe.skinning===!0||ie.isInstancedMesh&&Oe.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&Oe.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&Oe.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&Oe.instancingMorph===!1&&ie.morphTexture!==null||Oe.envMap!==Be||Q.fog===!0&&Oe.fog!==Ee||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==K.numPlanes||Oe.numIntersection!==K.numIntersection)||Oe.vertexAlphas!==Ke||Oe.vertexTangents!==dt||Oe.morphTargets!==De||Oe.morphNormals!==ft||Oe.morphColors!==en||Oe.morphTargetsCount!==bn||Oe.numLightProbeGrids!==Mv(E.state.lightProbeGridArray)?vt=!0:(Oe.outputColorSpace!==we||Oe.toneMapping!==It)&&(To=!0):(vt=!0,Oe.__version=Q.version);let yn=Oe.currentProgram;(vt===!0||To===!0)&&(yn=To===!0?$T(Q,W,ie,we,It):Nc(Q,W,ie),k&&Q.isNodeMaterial&&k.onUpdateProgram(Q,yn,Oe));let $h=!1,As=!1,Ao=!1,bt=yn.getUniforms(),gn=Oe.uniforms;if(be.useProgram(yn.program)&&($h=!0,As=!0,Ao=!0),Q.id!==Z&&(Z=Q.id,As=!0),$h||re!==C){be.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),bt.setValue(Y,"projectionMatrix",C.projectionMatrix),bt.setValue(Y,"viewMatrix",C.matrixWorldInverse);let cn=bt.map.cameraPosition;cn!==void 0&&cn.setValue(Y,xt.setFromMatrixPosition(C.matrixWorld)),et.logarithmicDepthBuffer&&bt.setValue(Y,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&bt.setValue(Y,"isOrthographic",C.isOrthographicCamera===!0),re!==C&&(re=C,As=!0,Ao=!0)}if(Oe.needsLights&&(In.state.sunShadowMap.length>0&&bt.setValue(Y,"sunShadowMap",In.state.sunShadowMap,We),In.state.directionalShadowMap.length>0&&bt.setValue(Y,"directionalShadowMap",In.state.directionalShadowMap,We),In.state.spotShadowMap.length>0&&bt.setValue(Y,"spotShadowMap",In.state.spotShadowMap,We),In.state.pointShadowMap.length>0&&bt.setValue(Y,"pointShadowMap",In.state.pointShadowMap,We)),ie.isSkinnedMesh){bt.setOptional(Y,ie,"bindMatrix"),bt.setOptional(Y,ie,"bindMatrixInverse");let Vt=ie.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),bt.setValue(Y,"boneTexture",Vt.boneTexture,We))}ie.isBatchedMesh&&(bt.setOptional(Y,ie,"batchingTexture"),bt.setValue(Y,"batchingTexture",ie._matricesTexture,We),bt.setOptional(Y,ie,"batchingIdTexture"),bt.setValue(Y,"batchingIdTexture",ie._indirectTexture,We),bt.setOptional(Y,ie,"batchingColorTexture"),ie._colorsTexture!==null&&bt.setValue(Y,"batchingColorTexture",ie._colorsTexture,We));let Bi=le.morphAttributes;if((Bi.position!==void 0||Bi.normal!==void 0||Bi.color!==void 0)&&se.update(ie,le,yn),(As||Oe.receiveShadow!==ie.receiveShadow)&&(Oe.receiveShadow=ie.receiveShadow,bt.setValue(Y,"receiveShadow",ie.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&W.environment!==null&&(gn.envMapIntensity.value=W.environmentIntensity),gn.dfgLUT!==void 0&&(gn.dfgLUT.value=jI()),As){if(bt.setValue(Y,"toneMappingExposure",I.toneMappingExposure),Oe.needsLights&&ZT(gn,Ao),Ee&&Q.fog===!0&&H.refreshFogUniforms(gn,Ee),H.refreshMaterialUniforms(gn,Q,de,pe,E.state.transmissionRenderTarget[C.id]),Oe.needsLights&&Oe.numLightProbeGrids>0){let Vt=M,cn=0;for(let Wr of E.state.lightProbeGridArray)Wr.texture!==null&&(Vt.textures[cn]=Wr.texture,Vt.min[cn]=Wr.boundingBox.min,Vt.max[cn]=Wr.boundingBox.max,Vt.resolution[cn]=Wr.resolution,cn++);for(let Wr in Vt)Vt[Wr].length=cn;gn.probesSH.value=Vt.textures,gn.probesMin.value=Vt.min,gn.probesMax.value=Vt.max,gn.probesResolution.value=Vt.resolution}Pl.upload(Y,Sv(Oe),gn,We)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Pl.upload(Y,Sv(Oe),gn,We),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&bt.setValue(Y,"center",ie.center),bt.setValue(Y,"modelViewMatrix",ie.modelViewMatrix),bt.setValue(Y,"normalMatrix",ie.normalMatrix),bt.setValue(Y,"modelMatrix",ie.matrixWorld),Q.uniformsGroups!==void 0){let Vt=Q.uniformsGroups;for(let cn=0,Wr=Vt.length;cn<Wr;cn++){let Tv=Vt[cn];Fe.update(Tv,yn),Fe.bind(Tv,yn)}}return yn}u(KT,"setProgram");function ZT(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.sunLights.needsUpdate=W,C.sunLightShadows.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}u(ZT,"markUniformsLightsNeedsUpdate");function JT(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}u(JT,"materialNeedsLights"),this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(C,W,le){let Q=Ue.get(C);Q.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),Ue.get(C.texture).__webglTexture=W,Ue.get(C.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:le,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,W){let le=Ue.get(C);le.__webglFramebuffer=W,le.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,le=0){ne=C,ce=W,V=le;let Q=null,ie=!1,Ee=!1;if(C){let we=Ue.get(C);if(we.__useDefaultFramebuffer!==void 0){be.bindFramebuffer(Y.FRAMEBUFFER,we.__webglFramebuffer),ae.copy(C.viewport),fe.copy(C.scissor),ve=C.scissorTest,be.viewport(ae),be.scissor(fe),be.setScissorTest(ve),Z=-1;return}else if(we.__webglFramebuffer===void 0)We.setupRenderTarget(C);else if(we.__hasExternalTextures)We.rebindTextures(C,Ue.get(C.texture).__webglTexture,Ue.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Ke=C.depthTexture;if(we.__boundDepthTexture!==Ke){if(Ke!==null&&Ue.has(Ke)&&(C.width!==Ke.image.width||C.height!==Ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(C)}}let Ce=C.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(Ee=!0);let Be=Ue.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Be[W])?Q=Be[W][le]:Q=Be[W],ie=!0):C.samples>0&&We.useMultisampledRTT(C)===!1?Q=Ue.get(C).__webglMultisampledFramebuffer:Array.isArray(Be)?Q=Be[le]:Q=Be,ae.copy(C.viewport),fe.copy(C.scissor),ve=C.scissorTest}else ae.copy(Re).multiplyScalar(de).floor(),fe.copy(nt).multiplyScalar(de).floor(),ve=rt;if(le!==0&&(Q=$),be.bindFramebuffer(Y.FRAMEBUFFER,Q)&&be.drawBuffers(C,Q),be.viewport(ae),be.scissor(fe),be.setScissorTest(ve),ie){let we=Ue.get(C.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+W,we.__webglTexture,le)}else if(Ee){let we=W;for(let Ce=0;Ce<C.textures.length;Ce++){let Be=Ue.get(C.textures[Ce]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Ce,Be.__webglTexture,le,we)}}else if(C!==null&&le!==0){let we=Ue.get(C.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,we.__webglTexture,le)}Z=-1};function Ev(C){let W=Ue.get(C);return(W.__readFormat!==C.format||W.__readType!==C.type)&&(W.__readFormat=C.format,W.__readType=C.type,W.__formatReadable=et.textureFormatReadable(C.format),W.__typeReadable=et.textureTypeReadable(C.type)),W}u(Ev,"getReadableState"),this.readRenderTargetPixels=function(C,W,le,Q,ie,Ee,Ne,we=0){if(!(C&&C.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Ue.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ce=Ce[Ne],Array.isArray(Ce)&&(Ce=Ce[0])),Ce){be.bindFramebuffer(Y.FRAMEBUFFER,Ce);try{let Be=C.textures[we],Ke=Be.format,dt=Be.type;C.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+we);let De=Ev(Be);if(De.__formatReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-Q&&le>=0&&le<=C.height-ie&&Y.readPixels(W,le,Q,ie,ge.convert(Ke),ge.convert(dt),Ee)}finally{let Be=ne!==null?Ue.get(ne).__webglFramebuffer:null;be.bindFramebuffer(Y.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(C,W,le,Q,ie,Ee,Ne,we=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Ue.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ce=Ce[Ne],Array.isArray(Ce)&&(Ce=Ce[0])),Ce)if(W>=0&&W<=C.width-Q&&le>=0&&le<=C.height-ie){be.bindFramebuffer(Y.FRAMEBUFFER,Ce);let Be=C.textures[we],Ke=Be.format,dt=Be.type;C.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+we);let De=Ev(Be);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ft=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,ft),Y.bufferData(Y.PIXEL_PACK_BUFFER,Ee.byteLength,Y.STREAM_READ),Y.readPixels(W,le,Q,ie,ge.convert(Ke),ge.convert(dt),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);let en=ne!==null?Ue.get(ne).__webglFramebuffer:null;be.bindFramebuffer(Y.FRAMEBUFFER,en);let It=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await sS(Y,It,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,ft),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Ee),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(ft),Y.deleteSync(It),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,W=null,le=0){let Q=Math.pow(2,-le),ie=Math.floor(C.image.width*Q),Ee=Math.floor(C.image.height*Q),Ne=W!==null?W.x:0,we=W!==null?W.y:0;We.setTexture2D(C,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,le,0,0,Ne,we,ie,Ee),be.unbindTexture()},this.copyTextureToTexture=function(C,W,le=null,Q=null,ie=0,Ee=0){let Ne,we,Ce,Be,Ke,dt,De,ft,en,It=C.isCompressedTexture?C.mipmaps[Ee]:C.image;if(le!==null)Ne=le.max.x-le.min.x,we=le.max.y-le.min.y,Ce=le.isBox3?le.max.z-le.min.z:1,Be=le.min.x,Ke=le.min.y,dt=le.isBox3?le.min.z:0;else{let bt=Math.pow(2,-ie);Ne=Math.floor(It.width*bt),we=Math.floor(It.height*bt),C.isDataArrayTexture?Ce=It.depth:C.isData3DTexture?Ce=Math.floor(It.depth*bt):Ce=1,Be=0,Ke=0,dt=0}Q!==null?(De=Q.x,ft=Q.y,en=Q.z):(De=0,ft=0,en=0);let Ct=ge.convert(W.format),bn=ge.convert(W.type),Oe;W.isData3DTexture?(We.setTexture3D(W,0),Oe=Y.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(We.setTexture2DArray(W,0),Oe=Y.TEXTURE_2D_ARRAY):(We.setTexture2D(W,0),Oe=Y.TEXTURE_2D),be.activeTexture(Y.TEXTURE0),be.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,W.flipY),be.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),be.pixelStorei(Y.UNPACK_ALIGNMENT,W.unpackAlignment);let In=be.getParameter(Y.UNPACK_ROW_LENGTH),vt=be.getParameter(Y.UNPACK_IMAGE_HEIGHT),To=be.getParameter(Y.UNPACK_SKIP_PIXELS),yn=be.getParameter(Y.UNPACK_SKIP_ROWS),$h=be.getParameter(Y.UNPACK_SKIP_IMAGES);be.pixelStorei(Y.UNPACK_ROW_LENGTH,It.width),be.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,It.height),be.pixelStorei(Y.UNPACK_SKIP_PIXELS,Be),be.pixelStorei(Y.UNPACK_SKIP_ROWS,Ke),be.pixelStorei(Y.UNPACK_SKIP_IMAGES,dt);let As=C.isDataArrayTexture||C.isData3DTexture,Ao=W.isDataArrayTexture||W.isData3DTexture;if(C.isDepthTexture){let bt=Ue.get(C),gn=Ue.get(W),Bi=Ue.get(bt.__renderTarget),Vt=Ue.get(gn.__renderTarget);be.bindFramebuffer(Y.READ_FRAMEBUFFER,Bi.__webglFramebuffer),be.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let cn=0;cn<Ce;cn++)As&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ue.get(C).__webglTexture,ie,dt+cn),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ue.get(W).__webglTexture,Ee,en+cn)),Y.blitFramebuffer(Be,Ke,Be+Ne,Ke+we,De,ft,De+Ne,ft+we,Y.DEPTH_BUFFER_BIT,Y.NEAREST);be.bindFramebuffer(Y.READ_FRAMEBUFFER,null),be.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(ie!==0||C.isRenderTargetTexture||Ue.has(C)){let bt=Ue.get(C),gn=Ue.get(W);be.bindFramebuffer(Y.READ_FRAMEBUFFER,F),be.bindFramebuffer(Y.DRAW_FRAMEBUFFER,j);for(let Bi=0;Bi<Ce;Bi++)As?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,bt.__webglTexture,ie,dt+Bi):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,bt.__webglTexture,ie),Ao?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,gn.__webglTexture,Ee,en+Bi):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,gn.__webglTexture,Ee),ie!==0?Y.blitFramebuffer(Be,Ke,Be+Ne,Ke+we,De,ft,De+Ne,ft+we,Y.COLOR_BUFFER_BIT,Y.NEAREST):Ao?Y.copyTexSubImage3D(Oe,Ee,De,ft,en+Bi,Be,Ke,Ne,we):Y.copyTexSubImage2D(Oe,Ee,De,ft,Be,Ke,Ne,we);be.bindFramebuffer(Y.READ_FRAMEBUFFER,null),be.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Ao?C.isDataTexture||C.isData3DTexture?Y.texSubImage3D(Oe,Ee,De,ft,en,Ne,we,Ce,Ct,bn,It.data):W.isCompressedArrayTexture?Y.compressedTexSubImage3D(Oe,Ee,De,ft,en,Ne,we,Ce,Ct,It.data):Y.texSubImage3D(Oe,Ee,De,ft,en,Ne,we,Ce,Ct,bn,It):C.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Ee,De,ft,Ne,we,Ct,bn,It.data):C.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Ee,De,ft,It.width,It.height,Ct,It.data):Y.texSubImage2D(Y.TEXTURE_2D,Ee,De,ft,Ne,we,Ct,bn,It);be.pixelStorei(Y.UNPACK_ROW_LENGTH,In),be.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,vt),be.pixelStorei(Y.UNPACK_SKIP_PIXELS,To),be.pixelStorei(Y.UNPACK_SKIP_ROWS,yn),be.pixelStorei(Y.UNPACK_SKIP_IMAGES,$h),Ee===0&&W.generateMipmaps===!0&&W.mipmapsAutoUpdate===!0&&Y.generateMipmap(Oe),be.unbindTexture()},this.initRenderTarget=function(C){Ue.get(C).__webglFramebuffer===void 0&&We.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?We.setTextureCube(C,0):C.isData3DTexture?We.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?We.setTexture2DArray(C,0):We.setTexture2D(C,0),be.unbindTexture()},this.resetState=function(){ce=0,V=0,ne=null,be.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}};u(Zx,"WebGLRenderer");var dp=Zx;var HS=u(r=>{let e=Math.min(1,Math.max(0,r))**.5;return 4*e*(1-e)},"swell"),QI=u(r=>1-(1-r)*(1-r),"easeOut"),gp=u(r=>{let e=Math.sin(r*12.9898)*43758.5453;return e-Math.floor(e)},"share"),Jx=u((r,e=0)=>{let t=Math.min(1,Math.max(0,r)),n=QI(t);return Array.from({length:7},(i,s)=>{if(s===0)return{at:[0,.08+.22*n,0],size:.09*HS(t),shade:0};let o=(s-1)/6*Math.PI*2+(gp(e+s*7)-.5)*.6,a=(.12+gp(e+s*13)*.08)*n,l=.05+(.08+gp(e+s*17)*.1)*n;return{at:[Math.cos(o)*a,l,Math.sin(o)*a],size:(.055+gp(e+s*19)*.03)*HS(t*1.1),shade:s%2===0?0:1}})},"puffAt");var Zn=["grass","plains","sand","rock","snow","forest","mud","tundra"],vr={shore:-.03,deep:-.15,reach:3},xp={relief:{base:0,roughness:0,shape:"flat"},colour:"#1b1f24",surface:"grass"},XS={relief:{base:.03,roughness:.015,shape:"rolling"},colour:"#6b8746",surface:"grass"},WS={Ocean:{relief:{base:vr.deep,roughness:.003,shape:"rolling"},colour:"#33505f",surface:"sand"},Grassland:XS,Plains:{relief:{base:.025,roughness:.01,shape:"rolling"},colour:"#99935a",surface:"plains"},Desert:{relief:{base:.025,roughness:.025,shape:"rolling"},colour:"#c4ab78",surface:"sand"},Tundra:{relief:{base:.035,roughness:.015,shape:"rolling"},colour:"#8a8d78",surface:"tundra"},Arctic:{relief:{base:.05,roughness:.02,shape:"rolling"},colour:"#dfe6ea",surface:"snow"},Glacier:{relief:{base:.08,roughness:.03,shape:"rolling"},colour:"#e7eff3",surface:"snow"},Forest:{relief:{base:.04,roughness:.02,shape:"rolling"},colour:"#40583a",surface:"forest"},Jungle:{relief:{base:.03,roughness:.02,shape:"rolling"},colour:"#355a36",surface:"forest"},Swamp:{relief:{base:.005,roughness:.004,shape:"flat"},colour:"#4f5b3d",surface:"mud"},River:{relief:{base:.012,roughness:.006,shape:"rolling"},colour:"#5d7c4f",surface:"grass"},Hills:{relief:{base:.12,roughness:.04,shape:"ridged"},colour:"#7b7650",surface:"plains"},Mountains:{relief:{base:.35,roughness:.08,shape:"peaked"},colour:"#77726a",surface:"rock"}},ea=u(r=>r==="Unknown"?xp:(Object.prototype.hasOwnProperty.call(WS,r)?WS[r]:void 0)??XS,"terrainEntry");var e3=u((r,e,t)=>{let n=Math.imul(r,374761393)+Math.imul(e,668265263)+Math.imul(t,1442695041)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296},"hash"),qS=Float64Array.from({length:32},(r,e)=>(e%2===0?Math.cos:Math.sin)(Math.floor(e/2)*(Math.PI/8))),YS=u(r=>r*r*r*(r*(r*6-15)+10),"fade"),Mr=u(({cell:r,period:e,seed:t})=>{let n=Math.max(1,Math.round(e.u/r)),i=e.u/n,s=e.v===null?null:Math.max(1,Math.round(e.v/r)),o=e.v===null||s===null?r:e.v/s,a=u(h=>(h%n+n)%n,"wrapU"),l=u(h=>s===null?h:(h%s+s)%s,"wrapV"),c=u((h,f,d,m)=>{let g=Math.floor(e3(h,f,t)*16)*2;return(qS[g]??0)*d+(qS[g+1]??0)*m},"slope");return(h,f)=>{let d=h/i,m=f/o,g=Math.floor(d),_=Math.floor(m),x=d-g,b=m-_,v=YS(x),S=YS(b),M=a(g),R=a(g+1),E=l(_),y=l(_+1),w=c(M,E,x,b)+(c(R,E,x-1,b)-c(M,E,x,b))*v,L=c(M,y,x,b-1)+(c(R,y,x-1,b-1)-c(M,y,x,b-1))*v;return Math.max(-1,Math.min(1,(w+(L-w)*S)*1.4))}},"periodicNoise"),ai=u(r=>{let e=r.map((n,i)=>.5**i),t=e.reduce((n,i)=>n+i,0);return(n,i)=>r.reduce((s,o,a)=>s+o(n,i)*(e[a]??0),0)/t},"fractalNoise");var qs=128,_p=.5,bp=u(r=>(e,t)=>1-2*Math.abs(r(e,t)),"ridge"),t3={grass:{grain:u(({noise:r})=>ai([r(64,1),r(16,2),r(4,25)]),"grain"),shade:.3,bumps:u(({noise:r})=>ai([r(4,3),r(12,4)]),"bumps"),steep:2.5,rough:.9,roughVaries:.05},plains:{grain:u(({noise:r})=>ai([r(64,5),r(8,6)]),"grain"),shade:.3,bumps:u(({noise:r})=>ai([r(8,7),r(24,8)]),"bumps"),steep:2.2,rough:.92,roughVaries:.04},sand:{grain:u(({noise:r,wave:e,texels:t})=>{let n=e(7,3),i=r(64,9),s=r(32,10);return(o,a)=>.7*n(o+t(6)*i(o,a),a)+.3*s(o,a)},"grain"),shade:.12,bumps:u(({noise:r,wave:e,texels:t})=>{let n=e(7,3),i=r(64,9);return(s,o)=>n(s+t(6)*i(s,o),o)},"bumps"),steep:1.5,rough:.88,roughVaries:.04},rock:{grain:u(({noise:r})=>ai([bp(r(24,11)),bp(r(12,12)),r(6,13)]),"grain"),shade:.35,bumps:u(({noise:r})=>ai([bp(r(24,11)),bp(r(12,12)),r(6,13)]),"bumps"),steep:2.5,rough:.75,roughVaries:.1},snow:{grain:u(({noise:r})=>r(64,14),"grain"),shade:.06,bumps:u(({noise:r})=>r(32,15),"bumps"),steep:.8,rough:.55,roughVaries:.05},forest:{grain:u(({noise:r})=>ai([r(10,16),r(40,17)]),"grain"),shade:.3,bumps:u(({noise:r})=>r(8,18),"bumps"),steep:2,rough:.9,roughVaries:.05},mud:{grain:u(({noise:r})=>r(48,19),"grain"),shade:.25,bumps:u(({noise:r})=>ai([r(32,20),r(8,21)]),"bumps"),steep:1.2,rough:.65,roughVaries:.25},tundra:{grain:u(({noise:r})=>ai([r(4,22),r(48,23)]),"grain"),shade:.3,bumps:u(({noise:r})=>r(6,24),"bumps"),steep:2,rough:.9,roughVaries:.05}},yp=u(r=>Math.max(0,Math.min(255,Math.round(r*255))),"byte"),n3=u((r=qs,[e,t]=[0,0])=>{let n=new Uint8Array(r*r*4*Zn.length),i={u:r,v:r};return Zn.forEach((s,o)=>{let a=t3[s],l=u((S,M)=>Mr({cell:S*r/qs,period:i,seed:7919*(o+1)+M}),"noise"),c=u((S,M)=>(R,E)=>Math.sin(2*Math.PI*(S*R+M*E)/r),"wave"),h={noise:l,wave:c,texels:u(S=>S*r/qs,"texels")},f=a.grain(h),d=a.bumps(h),m=o*r*r*4,g=new Float32Array(r*r);for(let S=0;S<r;S++)for(let M=0;M<r;M++)g[S*r+M]=d(M+e,S+t);let _=u((S,M)=>g[(M+r)%r*r+(S+r)%r]??0,"height"),x=new Float32Array(r*r),b=0;for(let S=0;S<r;S++)for(let M=0;M<r;M++)x[S*r+M]=f(M+e,S+t),b+=x[S*r+M]??0;let v=b/(r*r);for(let S=0;S<r;S++)for(let M=0;M<r;M++){let R=m+(S*r+M)*4,E=(x[S*r+M]??0)-v,y=(_(M+1,S)-_(M-1,S))/2*(r/qs),w=(_(M,S+1)-_(M,S-1))/2*(r/qs);n[R]=yp(a.shade*E+.5),n[R+1]=yp((1-Math.max(-1,Math.min(1,y*a.steep)))/2),n[R+2]=yp((1-Math.max(-1,Math.min(1,w*a.steep)))/2),n[R+3]=yp(a.rough+a.roughVaries*E)}}),n},"surfaceTextures"),$S=n3;var Yi={rockFrom:.97,rockTo:.88,snowAtEquator:.4,snowAtPoles:.26,snowDeepens:.04,snowSlips:.85,snowHolds:.95,wetFrom:.1,wetTo:.4,wetUpTo:.03};var $i=u(r=>Number.isInteger(r)?`${r}.0`:`${r}`,"number"),KS=`
float coverLatitude(float v, float extent) {
  float down = mod(v, extent);

  return min(1.0, abs(2.0 * down / extent - 1.0));
}

float coverRock(float upright) {
  return 1.0 - smoothstep(${$i(Yi.rockTo)}, ${$i(Yi.rockFrom)}, upright);
}

float coverSnow(float height, float upright, float latitude) {
  float line = ${$i(Yi.snowAtEquator)} + (${$i(Yi.snowAtPoles)} - ${$i(Yi.snowAtEquator)}) * latitude;

  return smoothstep(line, line + ${$i(Yi.snowDeepens)}, height) * smoothstep(${$i(Yi.snowSlips)}, ${$i(Yi.snowHolds)}, upright);
}

float coverWet(float height, float shore) {
  return smoothstep(${$i(Yi.wetFrom)}, ${$i(Yi.wetTo)}, shore) * (1.0 - smoothstep(0.0, ${$i(Yi.wetUpTo)}, height));
}
`;var i3=u(r=>[r.u/Math.max(1,Math.round(r.u/_p)),r.v===null?_p:r.v/Math.max(1,Math.round(r.v/_p))],"surfaceTile"),r3=Zn.map((r,e)=>`vec4 surface${e} = texture(surfaceDetail, vec3(surfaceAt, ${e}.0));
  surface += vSurfaces${e<4?"A":"B"}.${"xyzw"[e%4]} * surface${e};`).join(`
  `),s3=null,o3=u(()=>s3??=$S(),"made"),a3=u((r,e)=>{let t=new ko(o3(),qs,qs,Zn.length),n=new Zt({roughness:.92,vertexColors:!0}),[i,s]=i3(r);return t.format=Kn,t.type=En,t.wrapS=Xn,t.wrapT=Xn,t.magFilter=zt,t.minFilter=wn,t.generateMipmaps=!0,t.anisotropy=4,t.colorSpace=qi,t.needsUpdate=!0,n.onBeforeCompile=o=>{o.uniforms.surfaceDetail={value:t},o.uniforms.surfaceTile={value:new ke(i,s)},o.uniforms.groundExtent={value:e},o.uniforms.rockColour={value:new Se(ea("Mountains").colour)},o.uniforms.snowColour={value:new Se(ea("Glacier").colour)},o.vertexShader=`attribute vec4 surfacesA;
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
${KS}
${o.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
  // Every surface sampled, so their smaller copies are chosen alike across where they meet.
  vec2 surfaceAt = vGround / surfaceTile;
  float surfaceTotal = dot(vSurfacesA, vec4(1.0)) + dot(vSurfacesB, vec4(1.0));
  vec4 surface = vec4(0.0);
  ${r3}
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
  surface = mix(surface, surface${Zn.indexOf("rock")}, rockShare);
  diffuseColor.rgb = mix(diffuseColor.rgb, snowColour, snowShare);
  surface = mix(surface, surface${Zn.indexOf("snow")}, snowShare);
  diffuseColor.rgb *= 0.5 + surface.r;
  // Wet: darker, and shinier.
  diffuseColor.rgb *= 1.0 - 0.3 * wetShare;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
  roughnessFactor = mix(surface.a, 0.3, wetShare);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
  // The detail's bumps tilt the ground east and south, as the view sees it, along the ground's own slope.
  vec3 surfaceTilt = mat3(viewMatrix) * vec3(surface.g * 2.0 - 1.0, 0.0, surface.b * 2.0 - 1.0);
  normal = normalize(normal + surfaceTilt - dot(surfaceTilt, normal) * normal);`)}`},n.customProgramCacheKey=()=>"land-surfaces-cover",{material:n,detail:t}},"landMaterial"),ZS=a3;function vp(r,e=!1){let t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new Et;l.morphTargetsRelative=a;let c=0;for(let h=0;h<r.length;++h){let f=r[h],d=0,m=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in f.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;s[g]===void 0&&(s[g]=[]),s[g].push(f.attributes[g]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in f.morphAttributes){if(!i.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[g].length!==r[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;o[g]===void 0&&(o[g]=[]),o[g].push(f.morphAttributes[g]),m++}if(m!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let g;if(t)g=f.index.count;else if(f.attributes.position!==void 0)g=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,g,h),c+=g}}if(t){let h=0,f=[];for(let d=0;d<r.length;++d){let m=r[d].index;for(let g=0;g<m.count;++g)f.push(m.getX(g)+h);h+=r[d].attributes.position.count}l.setIndex(f)}for(let h in s){let f=JS(s[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<f;++d){let m=[];for(let _=0;_<o[h].length;++_)m.push(o[h][_][d]);let g=JS(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}u(vp,"mergeGeometries");function JS(r){let e,t,n,i=-1,s=0;for(let c=0;c<r.length;++c){let h=r[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let o=new e(s),a=new _t(o,t,n),l=0;for(let c=0;c<r.length;++c){let h=r[c];if(h.isInterleavedBufferAttribute){let f=l/t;for(let d=0,m=h.count;d<m;d++)for(let g=0;g<t;g++){let _=h.getComponent(d,g);a.setComponent(d+f,g,_)}}else o.set(h.array,l);l+=h.count*t}return i!==void 0&&(a.gpuType=i),a}u(JS,"mergeAttributes");function jx(r,e){if(e===L0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Cl||e===Cu){let t=r.getIndex();if(t===null){let s=[],o=r.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)s.push(a);r.setIndex(s),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===Cl)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}u(jx,"toTrianglesDrawMode");var ta={radius:.42,thickness:.025},Qx=ta.radius-ta.thickness,Mp=.07,Ou=.04,nb=.25,Bt=.004,eb=.08,Du=.012,wp=.045,Ep=.02,iw=625341585,l3=.18,c3=30,u3=5,h3=u(r=>Math.min(c3,u3+Math.max(0,r-1)*2),"lotsFor"),d3=u(r=>Math.floor(Math.max(0,r-1)/6),"tierFor"),ib=u(r=>{let e=2166136261;for(let t=0;t<r.length;t++)e=Math.imul(e^r.charCodeAt(t),16777619);return e>>>0},"citySeed"),rw=u((r,e,t,n=[])=>({seed:r,lots:h3(e),tier:d3(e),ways:[...t],sea:[...n]}),"planFor"),f3=u((r,e)=>{let[t,n]=r.centre,i=e.map(l=>{let[c,h]=r.toward(l),f=Math.hypot(c-t,h-n);return{offset:l,du:f===0?0:(c-t)/f,dv:f===0?0:(h-n)/f}}),s=i.reduce((l,{du:c})=>l+c,0),o=i.reduce((l,{dv:c})=>l+c,0),a=u(({du:l,dv:c})=>l*s+c*o,"most");return i.length===0?[]:[i.reduce((l,c)=>a(c)>a(l)?c:l).offset]},"quayOf"),Jn=u((r,e)=>{let t=Math.imul(r^Math.imul(e+1,2654435761),2246822507);return t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,(t>>>0)/4294967296},"share"),Uu=u((r,e,t)=>{let n=t[0]-e[0],i=t[1]-e[1],s=n*n+i*i;return s===0?0:((r[0]-e[0])*n+(r[1]-e[1])*i)/s},"along"),Nl=u(({at:[r,e],width:t,facing:n})=>{let i=t/2,s=[Math.cos(n)*i,-Math.sin(n)*i],o=[Math.sin(n)*i,Math.cos(n)*i];return[[r-s[0]-o[0],e-s[1]-o[1]],[r+s[0]-o[0],e+s[1]-o[1]],[r+s[0]+o[0],e+s[1]+o[1]],[r-s[0]+o[0],e-s[1]+o[1]]]},"footprintOf"),p3=u(([r,e])=>{let t=Math.hypot(e[0]-r[0],e[1]-r[1]),n=-(e[1]-r[1])/t*(Ou/2),i=(e[0]-r[0])/t*(Ou/2);return[[r[0]+n,r[1]+i],[e[0]+n,e[1]+i],[e[0]-n,e[1]-i],[r[0]-n,r[1]-i]]},"stripOf"),Tp=u((r,e,t)=>[r,e].some(n=>n.some((i,s)=>{let o=n[(s+1)%n.length],a=Math.hypot(o[0]-i[0],o[1]-i[1]),l=-(o[1]-i[1])/a,c=(o[0]-i[0])/a,h=u(m=>m.map(([g,_])=>g*l+_*c),"onto"),f=h(r),d=h(e);return Math.min(...d)-Math.max(...f)>=t||Math.min(...f)-Math.max(...d)>=t})),"apart"),Ll=u((r,e)=>{let[t,n,,i]=e,s=Uu(r,t,n),o=Uu(r,t,i),a=Math.hypot(n[0]-t[0],n[1]-t[1]);return Math.hypot(Math.max(0,-s,s-1),Math.max(0,-o,o-1))*a},"fromFootprint"),sw=u((r,{seed:e,lots:t,tier:n,ways:i,sea:s},o)=>{let[a,l]=r.centre,c=[...i,...f3(r,s)].flatMap(x=>{let[b,v]=r.toward(x),S=[(a+b)/2,(l+v)/2],M=S[0]-a,R=S[1]-l,E=Math.hypot(M,R);return E===0?[]:[[[a+M/E*Mp,l+R/E*Mp],S]]}),h=c.map(p3),f=u((x,b)=>{let v=c.map(([S,M])=>{let R=Uu(x,S,M),E=[S[0]+(M[0]-S[0])*R,S[1]+(M[1]-S[1])*R];return{t:R,near:E,off:Math.hypot(E[0]-x[0],E[1]-x[1])}}).filter(({t:S,off:M})=>S>=0&&S<=1&&M<=Ou/2+b+Bt&&M>0).sort((S,M)=>S.off-M.off)[0];return v===void 0?Math.atan2(a-x[0],l-x[1]):Math.atan2(v.near[0]-x[0],v.near[1]-x[1])},"facingAt"),d=Math.ceil(Qx/eb),m=[];for(let x=-d;x<=d;x++)for(let b=-d;b<=d;b++){let v=(x+d)*(d*2+1)+(b+d),S=[a+b*eb+(Jn(e,v*4)-.5)*2*Du,l+x*eb+(Jn(e,v*4+1)-.5)*2*Du],M=Math.hypot(S[0]-a,S[1]-l),R=wp+Jn(e,v*4+2)*Ep;M>Qx||!r.owns(S[0],S[1])||m.push({at:S,width:R,facing:f(S,R),roof:Jn(e^iw,v),storeys:1+(M<l3?n:0)+(Jn(e,v*4+3)<.2?1:0),order:M+Jn(e,v*4+3)*.03})}m.sort((x,b)=>x.order-b.order);let g=[],_=[];return m.forEach(({at:x,width:b,facing:v,storeys:S,roof:M})=>{let R=Nl({at:x,width:b,facing:v});R.every(([E,y])=>Math.hypot(E-a,y-l)<=Qx-Bt)&&Ll([a,l],R)>=Mp+Bt&&Ll(o,R)>=nb+Bt&&h.every(E=>Tp(R,E,Bt))&&_.every(E=>Tp(R,E,Bt))&&(g.push({at:x,width:b,facing:v,storeys:S,roof:M}),_.push(R))}),{plaza:{at:[a,l],radius:Mp},streets:c,lots:g.slice(0,t)}},"sprawl"),jS=4,m3=.62,g3=.05,ow=12,tb=.085,Sp=.055,x3=.13,QS=32,b3=1821285621,aw=u(r=>r<jS?0:Math.min(ow,r-jS+1),"suburbStepsFor"),y3=u(r=>r<=0?0:m3+(Math.min(r,ow)-1)*g3,"suburbReach"),_3=u(r=>1-.55*Math.min(1,Math.max(0,(r-.5)/.7)),"builtShare"),ew=u(([r,e],t)=>{let n=Math.hypot(e[0]-r[0],e[1]-r[1]),i=-(e[1]-r[1])/n*t,s=(e[0]-r[0])/n*t;return[[r[0]+i,r[1]+s],[e[0]+i,e[1]+s],[e[0]-i,e[1]-s],[r[0]-i,r[1]-s]]},"strip"),tw=u(r=>r.slice(1).map((e,t)=>[r[t],e]).filter(([e,t])=>Math.hypot(t[0]-e[0],t[1]-e[1])>0),"piecesOf"),nw=u((r,e,t)=>Math.min(...e.map(([n])=>n))-Math.max(...r.map(([n])=>n))>=t||Math.min(...r.map(([n])=>n))-Math.max(...e.map(([n])=>n))>=t||Math.min(...e.map(([,n])=>n))-Math.max(...r.map(([,n])=>n))>=t||Math.min(...r.map(([,n])=>n))-Math.max(...e.map(([,n])=>n))>=t,"boxesApart"),lw=u((r,{seed:e,steps:t,city:n},i)=>{let s=y3(t);if(s===0)return[];let[o,a]=r.centre,l=r.toward(n),c=e^Math.imul(b3,(n[0]+7)*31+(n[1]+7)),h=i.runs.flatMap(({points:E})=>tw(E)),f=[...h.map(E=>({line:E,wide:Sp})),...i.lanes.filter(([E,y])=>Math.hypot(y[0]-E[0],y[1]-E[1])>0).map(E=>({line:E,wide:x3}))],d=[...f.map(({line:E,wide:y})=>ew(E,y)),...i.lines.filter(([E,y])=>Math.hypot(y[0]-E[0],y[1]-E[1])>0).map(E=>ew(E,Sp))],m=u((E,y)=>{let w=f.map(({line:[L,I],wide:D})=>{let k=Uu(E,L,I),$=[L[0]+(I[0]-L[0])*k,L[1]+(I[1]-L[1])*k];return{t:k,near:$,off:Math.hypot($[0]-E[0],$[1]-E[1]),wide:D}}).filter(({t:L,off:I,wide:D})=>L>=0&&L<=1&&I<=D+y+Bt&&I>0).sort((L,I)=>L.off-I.off)[0];return w===void 0?Math.atan2(l[0]-E[0],l[1]-E[1]):Math.atan2(w.near[0]-E[0],w.near[1]-E[1])},"facingAt"),g=Math.ceil(.75/tb),_=[],x=u(E=>wp+Jn(c,E*5+2)*Ep,"widthOf"),b=u(E=>Math.min(1/0,...h.map(([y,w])=>{let L=Math.max(0,Math.min(1,Uu(E,y,w)));return Math.hypot(y[0]+(w[0]-y[0])*L-E[0],y[1]+(w[1]-y[1])*L-E[1])})),"fromRuns"),v=u((E,y,w)=>{let L=Math.hypot(y[0]-l[0],y[1]-l[1]),I=L+Jn(c,E*5+3)*.03,D=x(E);I<=s&&Jn(c,E*5+4)<_3(L)&&r.owns(y[0],y[1])&&(!w||b(y)>=Sp+Bt*2+wp+Ep)&&_.push({at:y,width:D,facing:m(y,D),roof:Jn(c^iw,E),storeys:1+(Jn(c,E*5+3)<.15?1:0),order:I})},"consider");for(let E=-g;E<=g;E++)for(let y=-g;y<=g;y++){let w=(E+g)*(g*2+1)+(y+g);v(w,[o+y*tb+(Jn(c,w*5)-.5)*2*Du,a+E*tb+(Jn(c,w*5+1)-.5)*2*Du],!0)}i.runs.forEach(({key:E,points:y})=>{let w=tw(y).map(([D,k])=>({from:D,to:k,length:Math.hypot(k[0]-D[0],k[1]-D[1])})),L=w.reduce((D,k)=>D+k.length,0),I=Math.min(QS,Math.floor(L/(wp+Ep+Bt*2)));for(let D=0;D<I;D++)[1,-1].forEach((k,$)=>{let F=(g*2+1)**2+(E*QS+D)*2+$,j=Sp+x(F)/2+Bt*2,ce=(D+.5)/I*L+(Jn(c,F*5)-.5)*Du;for(let[V,{from:ne,to:Z,length:re}]of w.entries()){if(ce<=re||V===w.length-1){let ae=(Z[0]-ne[0])/re,fe=(Z[1]-ne[1])/re;v(F,[ne[0]+ae*ce-fe*j*k,ne[1]+fe*ce+ae*j*k],!1);break}ce-=re}})}),_.sort((E,y)=>E.order-y.order);let S=u(([E,y],w)=>(Math.hypot(E-w[0],y-w[1])**2-Math.hypot(E-l[0],y-l[1])**2)/(2*Math.hypot(w[0]-l[0],w[1]-l[1])),"nearer"),M=[],R=[];return _.forEach(({at:E,width:y,facing:w,storeys:L,roof:I})=>{let D=Nl({at:E,width:y,facing:w});Nl({at:E,width:y+Bt*2,facing:w}).every(([k,$])=>r.owns(k,$))&&i.others.every(k=>D.every($=>S($,k)>=Bt/2))&&Ll(l,D)>=ta.radius+ta.thickness+Bt&&i.stands.every(k=>Ll(k,D)>=nb+Bt)&&Ll(r.centre,D)>=nb+Bt&&[E,...D].every(([k,$])=>(i.ground?.(k,$)??0)>=0)&&i.taken.every(([k,$,F])=>Ll([k,$],D)>=F+Bt)&&d.every(k=>nw(D,k,Bt)||Tp(D,k,Bt))&&R.every(k=>nw(D,k,Bt)||Tp(D,k,Bt))&&(M.push({at:E,width:y,facing:w,storeys:L,roof:I}),R.push(D))}),M},"suburb");var cw="#c79a72",v3="#5a4a3a";var An="#7a5532",ob="#5f6266",uw="#8a8f96",Ki="#5d6447",rb="#e8e0cc",dw="#6e4b2f",na="#8a8580",hw="#5b3e27",Dl="#7d858c",M3=new X(0,1,0),Ae=new dr(1,1,1),hn=new Yn(.5,.5,1,10),ia=new Wi(.5,1,10),Ol=new Ws(.5,10,8),lb=class lb{constructor(){this.parts=[]}add(e){return this.parts.push(e),this}addAll(e,t,n=0){let i=Math.cos(n),s=Math.sin(n);return e.parts.forEach(o=>{let[a,l,c]=o.at;this.parts.push({...o,at:[t[0]+a*i+c*s,t[1]+l,t[2]-a*s+c*i],yaw:(o.yaw??0)+n})}),this}};u(lb,"Parts");var dn=lb,S3=u((r,e,t)=>{switch(r){case"ancient":t.add({shape:Ol,colour:e[1],at:[0,.172,0],size:[.048,.03,.048]});break;case"medieval":t.add({shape:ia,colour:ob,at:[0,.188,0],size:[.05,.04,.05]});break;case"renaissance":t.add({shape:Ae,colour:"#2a2a2a",at:[0,.178,0],size:[.06,.016,.06]});break;case"industrial":t.add({shape:hn,colour:e[0],at:[0,.18,0],size:[.046,.022,.046]});break;default:t.add({shape:Ol,colour:Ki,at:[0,.172,0],size:[.052,.034,.052]})}},"headgear"),w3=u((r,e,t,n)=>{switch(r){case"club":n.add({shape:hn,colour:An,at:[.04,.1,.01],size:[.014,.08,.014],turn:[0,0,.5]});break;case"spear":n.add({shape:hn,colour:An,at:[.04,.12,0],size:[.006,.2,.006]}),n.add({shape:ia,colour:ob,at:[.04,.23,0],size:[.012,.025,.012]});break;case"pike":n.add({shape:hn,colour:An,at:[.04,.15,0],size:[.006,.28,.006]}),n.add({shape:ia,colour:uw,at:[.04,.3,0],size:[.012,.03,.012]});break;case"sword":n.add({shape:Ae,colour:uw,at:[.045,.12,.012],size:[.008,.07,.004],turn:[.3,0,0]});break;case"bow":n.add({shape:Ae,colour:An,at:[-.04,.11,.02],size:[.006,.11,.006]});break;case"lance":n.add({shape:hn,colour:An,at:[.04,.14,.05],size:[.006,.24,.006],turn:[1.1,0,0]});break;case"musket":case"rifle":n.add({shape:Ae,colour:r==="rifle"?"#3a3a3a":An,at:[.03,.12,.02],size:[.008,.11,.01],turn:[0,0,.4]});break;case"case":n.add({shape:Ae,colour:"#3b2a1e",at:[.042,.072,.008],size:[.03,.022,.009]});break;case"pack":n.add({shape:Ae,colour:"#7a6a48",at:[0,.115,-.025],size:[.042,.05,.022]}).add({shape:hn,colour:An,at:[.042,.1,.012],size:[.006,.19,.006]});break;default:}e==="ancient"&&(r==="spear"||r==="sword")&&n.add({shape:hn,colour:t[1],at:[-.035,.1,.012],size:[.05,.008,.05],turn:[Math.PI/2,0,.2]})},"carried"),E3={snow:{coat:"#e8eaec",legs:"#d4d7da"},irregular:{coat:"#6a5a40",legs:"#4a4036"}},ab=u((r,e,t,{legs:n=!0,dress:i}={})=>{let s=new dn,o=i===void 0?void 0:E3[i],a=o?.coat??(r==="modern"?Ki:t[0]),l=o?.legs??(r==="ancient"?cw:r==="modern"?Ki:v3);return n&&(s.add({shape:Ae,colour:l,at:[-.012,.04,0],size:[.018,.08,.02]}),s.add({shape:Ae,colour:l,at:[.012,.04,0],size:[.018,.08,.02]})),s.add({shape:Ae,colour:a,at:[0,.112,0],size:[.05,.065,.028]}),s.add({shape:Ae,colour:t[1],at:[0,.088,0],size:[.052,.012,.03]}),s.add({shape:Ae,colour:a,at:[-.032,.11,0],size:[.014,.055,.016]}),s.add({shape:Ae,colour:a,at:[.032,.11,0],size:[.014,.055,.016]}),s.add({shape:Ol,colour:cw,at:[0,.16,0],size:[.034,.038,.034]}),i==="snow"?s.add({shape:Ol,colour:"#f2f3f4",at:[0,.172,-.002],size:[.044,.034,.044]}):i==="irregular"?s.add({shape:Ol,colour:t[1],at:[0,.176,0],size:[.042,.016,.042]}):S3(r,t,s),i==="parachute"&&s.add({shape:Ae,colour:"#4d5340",at:[0,.112,-.026],size:[.046,.06,.026]}),w3(e,r,t,s),s},"person"),Fu=u(r=>r<=1?[[0,0]]:r===2?[[-.045,0],[.045,.02]]:[[0,-.04],[-.06,.04],[.06,.04]],"formation"),sb=u((r=dw)=>new dn().add({shape:Ae,colour:r,at:[0,.09,0],size:[.05,.05,.14]}).add({shape:Ae,colour:r,at:[0,.13,.08],size:[.03,.06,.03],turn:[.5,0,0]}).add({shape:Ae,colour:r,at:[0,.155,.105],size:[.026,.026,.05]}).add({shape:Ae,colour:r,at:[-.017,.035,.05],size:[.012,.07,.012]}).add({shape:Ae,colour:r,at:[.017,.035,.05],size:[.012,.07,.012]}).add({shape:Ae,colour:r,at:[-.017,.035,-.05],size:[.012,.07,.012]}).add({shape:Ae,colour:r,at:[.017,.035,-.05],size:[.012,.07,.012]}),"horse"),T3=u((r,e,t)=>new dn().addAll(sb(),[0,0,0]).add({shape:Ae,colour:t[0],at:[0,.118,0],size:[.056,.01,.06]}).addAll(ab(r,e,t,{legs:!1}),[0,.04,0]),"rider"),A3=u(r=>new dn().add({shape:Ae,colour:na,at:[0,.12,0],size:[.09,.08,.17]}).add({shape:Ae,colour:na,at:[0,.14,.1],size:[.07,.07,.06]}).add({shape:hn,colour:na,at:[0,.08,.14],size:[.016,.09,.016],turn:[.3,0,0]}).add({shape:Ae,colour:na,at:[-.03,.04,.05],size:[.025,.08,.025]}).add({shape:Ae,colour:na,at:[.03,.04,.05],size:[.025,.08,.025]}).add({shape:Ae,colour:na,at:[-.03,.04,-.05],size:[.025,.08,.025]}).add({shape:Ae,colour:na,at:[.03,.04,-.05],size:[.025,.08,.025]}).add({shape:Ae,colour:r[0],at:[0,.18,-.01],size:[.07,.03,.07]}).add({shape:Ae,colour:r[1],at:[0,.2,-.01],size:[.074,.008,.074]}),"elephant"),Rn=u((r,e=.05)=>({shape:hn,colour:An,at:r,size:[e,.01,e],turn:[0,0,Math.PI/2]}),"wheel"),R3=u((r,e,t)=>{if(e==="chariot")return new dn().addAll(sb(),[0,0,.09]).add({shape:Ae,colour:An,at:[0,.055,-.04],size:[.064,.035,.05]}).add({shape:Ae,colour:r[0],at:[0,.075,-.016],size:[.066,.012,.006]}).add(Rn([-.042,.035,-.045],.065)).add(Rn([.042,.035,-.045],.065)).addAll(ab(t,"spear",r,{legs:!1}),[0,0,-.045]);let n=new dn().addAll(sb(t==="ancient"?"#8a7a64":dw),[0,0,.1]).add({shape:Ae,colour:An,at:[0,.07,-.06],size:[.07,.04,.1]}).add({shape:Ae,colour:r[0],at:[0,.092,-.06],size:[.072,.008,.102]}).add(Rn([-.042,.03,-.03])).add(Rn([.042,.03,-.03])).add(Rn([-.042,.03,-.09])).add(Rn([.042,.03,-.09]));return e==="wagon"?n.add({shape:hn,colour:rb,at:[0,.1,-.06],size:[.07,.1,.07],turn:[Math.PI/2,0,0]}):n.add({shape:Ae,colour:rb,at:[-.016,.112,-.04],size:[.032,.03,.04]}).add({shape:Ae,colour:r[0],at:[.018,.11,-.08],size:[.03,.026,.036]}).add({shape:Ae,colour:"#8a5a2a",at:[.014,.112,-.035],size:[.026,.03,.03]}),n},"cart"),C3=u((r,e,t)=>{if(r==="ancient"||r==="medieval")return new dn().add({shape:Ae,colour:An,at:[0,.04,0],size:[.08,.025,.14]}).add({shape:Ae,colour:An,at:[0,.09,-.02],size:[.012,.12,.012],turn:[-.7,0,0]}).add({shape:Ae,colour:e[0],at:[0,.055,.05],size:[.082,.012,.03]}).add(Rn([-.045,.03,.04],.045)).add(Rn([.045,.03,.04],.045)).add(Rn([-.045,.03,-.04],.045)).add(Rn([.045,.03,-.04],.045));let n=t?.19:r==="renaissance"?.12:.16,i=r==="renaissance"?"#3d3a36":r==="modern"?Ki:ob;return new dn().add({shape:hn,colour:i,at:[0,.07,.04],size:[.024,n,.024],turn:[1.35,0,0]}).add({shape:Ae,colour:r==="modern"?Ki:An,at:[0,.045,-.02],size:[.05,.03,.09]}).add({shape:Ae,colour:e[0],at:[0,.064,-.02],size:[.052,.008,.06]}).add(Rn([-.04,.035,0],.07)).add(Rn([.04,.035,0],.07))},"siege"),P3=u((r,e,t)=>{if(r==="industrial")return new dn().add({shape:Ae,colour:Dl,at:[0,.07,-.03],size:[.08,.07,.12]}).add({shape:Ae,colour:e[0],at:[0,.06,.07],size:[.07,.05,.05]}).add(Rn([-.045,.025,.06],.045)).add(Rn([.045,.025,.06],.045)).add(Rn([-.045,.025,-.06],.045)).add(Rn([.045,.025,-.06],.045));let n=new dn().add({shape:Ae,colour:Ki,at:[0,.045,0],size:[.1,.05,.17]}).add({shape:Ae,colour:"#2e2e2a",at:[-.055,.028,0],size:[.022,.05,.18]}).add({shape:Ae,colour:"#2e2e2a",at:[.055,.028,0],size:[.022,.05,.18]}).add({shape:Ae,colour:e[0],at:[0,.072,-.05],size:[.08,.006,.04]});return t?n.add({shape:Ae,colour:Ki,at:[0,.088,-.01],size:[.07,.035,.08]}).add({shape:hn,colour:Ki,at:[0,.09,.08],size:[.014,.13,.014],turn:[Math.PI/2,0,0]}):n.add({shape:Ae,colour:Ki,at:[0,.07,.06],size:[.09,.03,.05],turn:[.4,0,0]}),n},"vehicle"),I3=u((r,e)=>{let t=r.large?1.25:1,n=.3*t,i=.07*t,s=new dn;switch(r.hull){case"oars":case"sail":{s.add({shape:Ae,colour:hw,at:[0,.03,0],size:[i,.045,n*.8]}).add({shape:ia,colour:hw,at:[0,.03,n*.45],size:[i,.1,.045],turn:[Math.PI/2,0,0]}).add({shape:Ae,colour:e[0],at:[0,.056,0],size:[i+.004,.008,n*.82]});let o=r.hull==="oars"?1:r.large?3:2;for(let a=0;a<o;a++){let l=(a-(o-1)/2)*.09*t;s.add({shape:hn,colour:An,at:[0,.14,l],size:[.008,.2,.008]}).add({shape:Ae,colour:a===0?e[1]:rb,at:[0,.16,l],size:[i*1.3,.09,.005]})}return(r.guns??0)>0&&s.add({shape:Ae,colour:"#1f1f1f",at:[0,.036,0],size:[i+.006,.009,n*.66]}),r.hull==="oars"&&s.add({shape:Ae,colour:An,at:[-i*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,.4]}).add({shape:Ae,colour:An,at:[i*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,-.4]}),s}case"submarine":return s.add({shape:hn,colour:"#33383d",at:[0,.018,0],size:[.05,n,.05],turn:[Math.PI/2,0,0]}).add({shape:Ae,colour:"#33383d",at:[0,.055,.02],size:[.02,.04,.05]}).add({shape:Ae,colour:e[0],at:[0,.078,.02],size:[.022,.006,.052]});case"carrier":return s.add({shape:Ae,colour:Dl,at:[0,.035,0],size:[i*1.1,.05,n*1.15]}).add({shape:Ae,colour:"#55595e",at:[0,.062,0],size:[i*1.5,.008,n*1.2]}).add({shape:Ae,colour:Dl,at:[i*.55,.09,.02],size:[.02,.05,.06]}).add({shape:Ae,colour:e[0],at:[i*.55,.12,.02],size:[.022,.008,.062]});default:return s.add({shape:Ae,colour:r.era==="industrial"?"#4a4a48":Dl,at:[0,.03,0],size:[i,.045,n*.85]}).add({shape:ia,colour:r.era==="industrial"?"#4a4a48":Dl,at:[0,.03,n*.47],size:[i,.08,.045],turn:[Math.PI/2,0,0]}).add({shape:Ae,colour:Dl,at:[0,.075,-.02],size:[i*.6,.05,n*.3]}).add({shape:hn,colour:e[0],at:[0,.12,-.03],size:[.022,.05,.022]}).add({shape:Ae,colour:e[1],at:[0,.056,0],size:[i+.004,.006,n*.86]}),[.3,-.34,.14].slice(0,r.guns??0).forEach(o=>{let a=o>0?1:-1;s.add({shape:Ae,colour:"#5f666c",at:[0,.066,n*o],size:[.035,.02,.035]}).add({shape:hn,colour:"#5f666c",at:[0,.07,n*o+a*.04],size:[.008,.06,.008],turn:[Math.PI/2,0,0]})}),r.missiles&&[-1,1].forEach(o=>s.add({shape:Ae,colour:"#4a5056",at:[o*i*.22,.072,-n*.3],size:[.022,.022,.05],turn:[-.5,0,0]})),s}},"ship"),L3=u((r,e)=>{let t=r.large?1.3:1,n=r.stealth?"#2c3034":r.large?"#6e7378":"#7d8890";return new dn().add({shape:hn,colour:n,at:[0,.3,0],size:[.03*t,.2*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:ia,colour:n,at:[0,.3,.12*t],size:[.03*t,.05*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:Ae,colour:n,at:[0,.3,.01],size:[.26*t,.006,.05*t]}).add({shape:Ae,colour:e[0],at:[0,.304,.01],size:[.06*t,.004,.052*t]}).add({shape:Ae,colour:n,at:[0,.3,-.09*t],size:[.09*t,.005,.03*t]}).add({shape:Ae,colour:e[1],at:[0,.325,-.09*t],size:[.005,.045,.03*t]})},"aircraft"),N3=u(r=>new dn().add({shape:Ol,colour:Ki,at:[0,.27,.02],size:[.06,.055,.09]}).add({shape:Ae,colour:Ki,at:[0,.275,-.08],size:[.015,.015,.12]}).add({shape:Ae,colour:r[0],at:[0,.3,-.13],size:[.004,.04,.025]}).add({shape:Ae,colour:"#2e2e2e",at:[0,.31,.02],size:[.24,.003,.012]}).add({shape:Ae,colour:"#2e2e2e",at:[0,.31,.02],size:[.012,.003,.24]}),"helicopter"),D3=u((r,e)=>{let t=e?1.4:1;return new dn().add({shape:hn,colour:"#d8d8d8",at:[0,.14*t,0],size:[.024*t,.18*t,.024*t]}).add({shape:ia,colour:e?"#c8a020":r[0],at:[0,.255*t,0],size:[.024*t,.05*t,.024*t]}).add({shape:Ae,colour:r[1],at:[0,.06*t,0],size:[.07*t,.03*t,.004]}).add({shape:Ae,colour:r[1],at:[0,.06*t,0],size:[.004,.03*t,.07*t]})},"missile"),fw=u((r,e)=>{switch(r.shape){case"foot":{let t=new dn;return Fu(r.squad).forEach(([n,i],s)=>t.addAll(ab(r.era,r.gear??"none",e,{dress:r.dress}),[n,0,i],s*.3-.3)),t}case"mounted":{let t=new dn;return Fu(r.squad).forEach(([n,i])=>t.addAll(T3(r.era,r.gear??"none",e),[n*1.4,0,i])),t}case"elephant":return A3(e);case"cart":return R3(e,r.cart??"wagon",r.era);case"siege":return C3(r.era,e,r.large===!0);case"vehicle":return P3(r.era,e,r.large===!0);case"ship":return I3(r,e);case"aircraft":return L3(r,e);case"helicopter":return N3(e);default:return D3(e,r.large===!0)}},"figureParts"),O3=u(({at:r,size:e,turn:t=[0,0,0],yaw:n=0})=>new Xe().compose(new X(...r),new Kt().setFromAxisAngle(M3,n).multiply(new Kt().setFromEuler(new ri(...t))),new X(...e)),"partMatrix"),Ap=u(r=>{let e=r.map(n=>{let{shape:i,colour:s}=n,o=i.clone(),a=new Se(s),l=o.getAttribute("position").count,c=new Float32Array(l*3);for(let h=0;h<l;h++)c.set([a.r,a.g,a.b],h*3);return o.applyMatrix4(O3(n)),o.setAttribute("color",new _t(c,3)),o}),t=(e.length===0?null:vp(e))??new Et;return e.forEach(n=>n.dispose()),t.computeBoundingBox(),t.computeBoundingSphere(),t},"mergeParts"),pw=u((r,e)=>Ap(fw(r,e).parts),"figureGeometry"),U3=new Yn(.19,.2,1,28),F3=new is(.22,.014,4,32),B3=new is(1,.03,3,40),k3="#dfe9ea",z3=[[.11,.2],[.16,.27]],mw=u((r,e,{fortified:t,scale:n,stand:i,part:s="whole",ripples:o=!1})=>{let a=r.shape==="ship",l=a?0:i,c=s==="base"?[]:fw(r,e).parts.map(h=>({...h,at:[h.at[0]*n,h.at[1]*n+l,h.at[2]*n],size:[h.size[0]*n,h.size[1]*n,h.size[2]*n]}));if(s==="figures")return Ap(c);if(a||c.push({shape:U3,colour:e[1],at:[0,i/2,0],size:[1,i,1]}),a&&o){let h=(r.large?1.25:1)*n;z3.forEach(([f,d])=>c.push({shape:B3,colour:k3,at:[0,.006,0],size:[f*h,d*h,.15],turn:[Math.PI/2,0,0]}))}return t&&c.push({shape:F3,colour:"#b5ab98",at:[0,l+.015,0],size:[1,1,2.5],turn:[Math.PI/2,0,0]}),Ap(c)},"unitBodyGeometry"),G3=new is(ta.radius,ta.thickness,6,24),gw=u(()=>Ap([{shape:G3,colour:"#8d8577",at:[0,.02,0],size:[1,1,2.5],turn:[Math.PI/2,0,0]}]),"wallsGeometry");function Ys(r){let e=new Map,t=new Map,n=r.clone();return xw(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let s=i,o=e.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}u(Ys,"clone");function xw(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)xw(r.children[n],e.children[n],t)}u(xw,"parallelTraverse");var Bb=class Bb extends mr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new mb(t)}),this.register(function(t){return new gb(t)}),this.register(function(t){return new xb(t)}),this.register(function(t){return new Tb(t)}),this.register(function(t){return new Ab(t)}),this.register(function(t){return new Rb(t)}),this.register(function(t){return new yb(t)}),this.register(function(t){return new _b(t)}),this.register(function(t){return new vb(t)}),this.register(function(t){return new Mb(t)}),this.register(function(t){return new pb(t)}),this.register(function(t){return new Sb(t)}),this.register(function(t){return new bb(t)}),this.register(function(t){return new Eb(t)}),this.register(function(t){return new wb(t)}),this.register(function(t){return new db(t)}),this.register(function(t){return new Cp(t,ot.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Cp(t,ot.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Cb(t)})}load(e,t,n,i){let s=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=ls.extractUrlBase(e);o=ls.resolveURL(c,this.path)}else o=ls.extractUrlBase(e);this.manager.itemStart(e);let a=u(function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},"_onError"),l=new vl(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Mw){try{o[ot.KHR_BINARY_GLTF]=new Pb(e)}catch(f){i&&i(f);return}s=JSON.parse(o[ot.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Fb(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let f=this.pluginCallbacks[h](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let f=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(f){case ot.KHR_MATERIALS_UNLIT:o[f]=new fb;break;case ot.KHR_DRACO_MESH_COMPRESSION:o[f]=new Ib(s,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:o[f]=new Lb;break;case ot.KHR_MESH_QUANTIZATION:o[f]=new Nb;break;default:d.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};u(Bb,"GLTFLoader");var Rp=Bb;function V3(){let r={};return{get:u(function(e){return r[e]},"get"),add:u(function(e,t){r[e]=t},"add"),remove:u(function(e){delete r[e]},"remove"),removeAll:u(function(){r={}},"removeAll")}}u(V3,"GLTFRegistry");function Xt(r,e,t){let n=r.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}u(Xt,"getMaterialExtension");var ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},kb=class kb{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,h=new Se(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Nn);let f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Xo(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new xu(h),c.distance=f;break;case"spot":c=new gu(h),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Sr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}};u(kb,"GLTFLightsExtension");var db=kb,zb=class zb{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return On}extendParams(e,t,n){let i=[];e.color=new Se(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Nn),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Lt))}return Promise.all(i)}};u(zb,"GLTFMaterialsUnlitExtension");var fb=zb,Gb=class Gb{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}};u(Gb,"GLTFMaterialsEmissiveStrengthExtension");var pb=Gb,Vb=class Vb{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ke(s,s)}return Promise.all(i)}};u(Vb,"GLTFMaterialsClearcoatExtension");var mb=Vb,Hb=class Hb{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}};u(Hb,"GLTFMaterialsDiffuseRoughnessExtension");var gb=Hb,Wb=class Wb{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}};u(Wb,"GLTFMaterialsDispersionExtension");var xb=Wb,Xb=class Xb{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}};u(Xb,"GLTFMaterialsIridescenceExtension");var bb=Xb,qb=class qb{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Se(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Nn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Lt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}};u(qb,"GLTFMaterialsSheenExtension");var yb=qb,Yb=class Yb{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}};u(Yb,"GLTFMaterialsTransmissionExtension");var _b=Yb,$b=class $b{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Se().setRGB(s[0],s[1],s[2],Nn),Promise.all(i)}};u($b,"GLTFMaterialsVolumeExtension");var vb=$b,Kb=class Kb{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}};u(Kb,"GLTFMaterialsIorExtension");var Mb=Kb,Zb=class Zb{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return t.specularColor=new Se().setRGB(s[0],s[1],s[2],Nn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Lt)),Promise.all(i)}};u(Zb,"GLTFMaterialsSpecularExtension");var Sb=Zb,Jb=class Jb{constructor(e){this.parser=e,this.name=ot.EXT_MATERIALS_BUMP}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}};u(Jb,"GLTFMaterialsBumpExtension");var wb=Jb,jb=class jb{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}};u(jb,"GLTFMaterialsAnisotropyExtension");var Eb=jb,Qb=class Qb{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}};u(Qb,"GLTFTextureBasisUExtension");var Tb=Qb,ey=class ey{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}};u(ey,"GLTFTextureWebPExtension");var Ab=ey,ty=class ty{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}};u(ty,"GLTFTextureAVIFExtension");var Rb=ty,ny=class ny{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,f=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,f,d,i.mode,i.filter).then(function(m){return m.buffer}):o.ready.then(function(){let m=new ArrayBuffer(h*f);return o.decodeGltfBuffer(new Uint8Array(m),h,f,d,i.mode,i.filter),m})})}else return null}};u(ny,"GLTFMeshoptCompression");var Cp=ny,iy=class iy{constructor(e){this.name=ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==wi.TRIANGLES&&c.mode!==wi.TRIANGLE_STRIP&&c.mode!==wi.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),f=h.isGroup?h.children:[h],d=c[0].count,m=[];for(let g of f){let _=new Xe,x=new X,b=new Kt,v=new X(1,1,1),S=new ru(g.geometry,g.material,d);for(let R=0;R<d;R++)l.TRANSLATION&&x.fromBufferAttribute(l.TRANSLATION,R),l.ROTATION&&b.fromBufferAttribute(l.ROTATION,R),l.SCALE&&v.fromBufferAttribute(l.SCALE,R),S.setMatrixAt(R,_.compose(x,b,v));let M=null;for(let R in l)if(R==="_COLOR_0"){let E=l[R];S.instanceColor=new qn(E.array,E.itemSize,E.normalized)}else if(R!=="TRANSLATION"&&R!=="ROTATION"&&R!=="SCALE"){if(M===null){let y=S.geometry;M=new Et,M.name=y.name;for(let w in y.attributes)M.setAttribute(w,y.attributes[w]);for(let w in y.morphAttributes)M.morphAttributes[w]=y.morphAttributes[w];y.index!==null&&M.setIndex(y.index),M.morphTargetsRelative=y.morphTargetsRelative;for(let w of y.groups)M.addGroup(w.start,w.count,w.materialIndex);y.boundingBox!==null&&(M.boundingBox=y.boundingBox.clone()),y.boundingSphere!==null&&(M.boundingSphere=y.boundingSphere.clone()),M.drawRange.start=y.drawRange.start,M.drawRange.count=y.drawRange.count,M.userData=Object.assign({},y.userData),S.geometry=M}let E=l[R];M.setAttribute(R,new qn(E.array,E.itemSize,E.normalized))}Ft.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),m.push(S)}return h.isGroup?(h.clear(),h.add(...m),h):m[0]}))}};u(iy,"GLTFMeshGpuInstancing");var Cb=iy,Mw="glTF",Bu=12,bw={JSON:1313821514,BIN:5130562},ry=class ry{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Bu),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Mw)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Bu,s=new DataView(e,Bu),o=0;for(;o<i;){let a=s.getUint32(o,!0);o+=4;let l=s.getUint32(o,!0);if(o+=4,l===bw.JSON){let c=new Uint8Array(e,Bu+o,a);this.content=n.decode(c)}else if(l===bw.BIN){let c=Bu+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}};u(ry,"GLTFBinaryExtension");var Pb=ry,sy=class sy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let f=Ob[h]||h.toLowerCase();a[f]=o[h]}for(let h in e.attributes){let f=Ob[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],m=Ul[d.componentType];c[f]=m.name,l[f]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(f,d){i.decodeDracoFile(h,function(m){for(let g in m.attributes){let _=m.attributes[g],x=l[g];x!==void 0&&(_.normalized=x)}f(m)},a,c,Nn,d)})})}};u(sy,"GLTFDracoMeshCompressionExtension");var Ib=sy,oy=class oy{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}};u(oy,"GLTFTextureTransformExtension");var Lb=oy,ay=class ay{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}};u(ay,"GLTFMeshQuantizationExtension");var Nb=ay,ly=class ly extends pr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,f=(n-t)/h,d=f*f,m=d*f,g=e*c,_=g-c,x=-2*m+3*d,b=m-d,v=1-x,S=b-d+f;for(let M=0;M!==a;M++){let R=o[_+M+a],E=o[_+M+l]*h,y=o[g+M+a],w=o[g+M]*h;s[M]=v*R+S*E+x*y+b*w}return s}};u(ly,"GLTFCubicSplineInterpolant");var Pp=ly,H3=new Kt,cy=class cy extends Pp{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return H3.fromArray(s).normalize().toArray(s),s}};u(cy,"GLTFCubicSplineQuaternionInterpolant");var Db=cy,wi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ul={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},yw={9728:Wt,9729:zt,9984:_f,9985:Al,9986:Zo,9987:wn},_w={33071:Wn,33648:ul,10497:Xn},cb={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ob={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},$s={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},W3={CUBICSPLINE:void 0,LINEAR:Fo,STEP:Uo},ub={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function X3(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Zt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Si})),r.DefaultMaterial}u(X3,"createDefaultMaterial");function ra(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}u(ra,"addUnknownExtensionsToUserData");function Sr(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}u(Sr,"assignExtrasToUserData");function q3(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){let f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let f=e[c];if(n){let d=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):r.attributes.position;o.push(d)}if(i){let d=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):r.attributes.normal;a.push(d)}if(s){let d=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],f=c[1],d=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=f),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}u(q3,"addMorphTargets");function Y3(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}u(Y3,"updateMorphTargets");function $3(r){let e,t=r.extensions&&r.extensions[ot.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+hb(t.attributes):e=r.indices+":"+hb(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+hb(r.targets[n]);return e}u($3,"createPrimitiveKey");function hb(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}u(hb,"createAttributesKey");function Ub(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}u(Ub,"getNormalizedComponentScale");function K3(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}u(K3,"getImageURIMimeType");var Z3=new Xe,uy=class uy{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new V3,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?(this.textureLoader=new fu(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new yu(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new vl(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ra(s,a,i),Sr(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=u((o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())s(h,a.children[c])},"updateMappings");return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,o){n.load(ls.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=cb[i.type],a=Ul[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new _t(c,o,l))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){let a=o[0],l=cb[i.type],c=Ul[i.componentType],h=c.BYTES_PER_ELEMENT,f=h*l,d=i.byteOffset||0,m=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,_,x;if(m&&m!==f){let b=Math.floor(d/m),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+b+":"+i.count,S=t.cache.get(v);S||(_=new c(a,b*m,i.count*m/h),S=new zo(_,m/h),t.cache.add(v,S)),x=new Fs(S,l,d%m/h,g)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),x=new _t(_,l,g);if(i.sparse!==void 0){let b=cb.SCALAR,v=Ul[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,R=new v(o[1],S,i.sparse.count*b),E=new c(o[2],M,i.sparse.count*l);a!==null&&(x=new _t(x.array.slice(),x.itemSize,x.normalized)),x.normalized=!1;for(let y=0,w=R.length;y<w;y++){let L=R[y];if(x.setX(L,E[y*l]),l>=2&&x.setY(L,E[y*l+1]),l>=3&&x.setZ(L,E[y*l+2]),l>=4&&x.setW(L,E[y*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}x.normalized=g}return x})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){let i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(s.samplers||{})[o.sampler]||{};return h.magFilter=yw[d.magFilter]||zt,h.minFilter=yw[d.minFilter]||wn,h.wrapS=_w[d.wrapS]||Xn,h.wrapT=_w[d.wrapT]||Xn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Wt&&h.minFilter!==zt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(d){return new Promise(function(m,g){t.parse(d,m,g)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;let m=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(m),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(d){return new Promise(function(m,g){let _=m;t.isImageBitmapLoader===!0&&(_=u(function(x){let b=new rn(x);b.needsUpdate=!0,m(b)},"onLoad")),t.load(ls.resolveURL(d,s.path),_,void 0,g)})})}let f=h.then(function(d){return c===!0&&a.revokeObjectURL(l),Sr(d,o),d.userData.mimeType=o.mimeType||K3(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=f,f}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[ot.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=s.associations.get(o);o=s.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new yl,Dn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new bl,Dn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Zt}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],o,a={},l=s.extensions||{},c=[];if(l[ot.KHR_MATERIALS_UNLIT]){let f=i[ot.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,s,t))}else{let f=s.pbrMetallicRoughness||{};if(a.color=new Se(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){let d=f.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Nn),a.opacity=d[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,Lt)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=sn);let h=s.alphaMode||ub.OPAQUE;if(h===ub.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===ub.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==On&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new ke(1,1),s.normalTexture.scale!==void 0)){let f=s.normalTexture.scale;a.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&o!==On&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==On){let f=s.emissiveFactor;a.emissive=new Se().setRGB(f[0],f[1],f[2],Nn)}return s.emissiveTexture!==void 0&&o!==On&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Lt)),Promise.all(c).then(function(){let f=new o(a);return s.name&&(f.name=s.name),Sr(f,s),t.associations.set(f,{materials:e}),s.extensions&&ra(i,f,s),f})}createUniqueName(e){let t=Mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return vw(l,a,t)})}u(s,"createDracoPrimitive");let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=$3(c),f=i[h];if(f)o.push(f.promise);else{let d;c.extensions&&c.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=vw(new Et,c,t),c.mode===wi.TRIANGLE_STRIP?d=d.then(m=>jx(m,Cu)):c.mode===wi.TRIANGLE_FAN&&(d=d.then(m=>jx(m,Cl))),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?X3(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],f=[];for(let m=0,g=h.length;m<g;m++){let _=h[m],x=o[m],b,v=c[m];if(x.mode===wi.TRIANGLES||x.mode===wi.TRIANGLE_STRIP||x.mode===wi.TRIANGLE_FAN||x.mode===void 0){let S=s.isSkinnedMesh===!0,M=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");S&&M===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),b=S&&M?new nu(_,v):new Ze(_,v),b.isSkinnedMesh===!0&&b.normalizeSkinWeights()}else if(x.mode===wi.LINES)b=new su(_,v);else if(x.mode===wi.LINE_STRIP)b=new Go(_,v);else if(x.mode===wi.LINE_LOOP)b=new ou(_,v);else if(x.mode===wi.POINTS)b=new au(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(b.geometry.morphAttributes).length>0&&Y3(b,s),b.name=t.createUniqueName(s.name||"mesh_"+e),Sr(b,s),x.extensions&&ra(i,b,x),t.assignFinalMaterial(b),f.push(b)}for(let m=0,g=f.length;m<g;m++)t.associations.set(f[m],{meshes:e,primitives:m});if(f.length===1)return s.extensions&&ra(i,f[0],s),f[0];let d=new Ht;s.extensions&&ra(i,d,s),t.associations.set(d,{meshes:e});for(let m=0,g=f.length;m<g;m++)d.add(f[m]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new nn(lp.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Wo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Sr(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let f=o[c];if(f){a.push(f);let d=new Xe;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new iu(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let f=0,d=i.channels.length;f<d;f++){let m=i.channels[f],g=i.samplers[m.sampler],_=m.target,x=_.node,b=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",x)),a.push(this.getDependency("accessor",b)),l.push(this.getDependency("accessor",v)),c.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(f){let d=f[0],m=f[1],g=f[2],_=f[3],x=f[4],b=[];for(let S=0,M=d.length;S<M;S++){let R=d[S],E=m[S],y=g[S],w=_[S],L=x[S];if(R===void 0)continue;R.updateMatrix&&R.updateMatrix();let I=n._createAnimationTracks(R,E,y,w,L);if(I)for(let D=0;D<I.length;D++)b.push(I[D])}let v=new Vo(s,void 0,b);return Sr(v,i),v})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){let h=c[0],f=c[1],d=c[2];d!==null&&h.traverse(function(m){m.isSkinnedMesh&&m.bind(d,Z3)});for(let m=0,g=f.length;m<g;m++)h.add(f[m]);if(h.userData.pivot!==void 0&&f.length>0){let m=h.userData.pivot,g=f[0];h.pivot=new X().fromArray(m),h.position.x-=m[0],h.position.y-=m[1],h.position.z-=m[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(s.isBone===!0?h=new xl:c.length>1?h=new Ht:c.length===1?h=c[0]:h=new Ft,h!==c[0])for(let f=0,d=c.length;f<d;f++)h.add(c[f]);if(s.name&&(h.userData.name=s.name,h.name=o),Sr(h,s),s.extensions&&ra(n,h,s),s.matrix!==void 0){let f=new Xe;f.fromArray(s.matrix),h.applyMatrix4(f)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){let f=i.associations.get(h);i.associations.set(h,{...f})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new Ht;n.name&&(s.name=i.createUniqueName(n.name)),Sr(s,n),n.extensions&&ra(t,s,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,f=l.length;h<f;h++){let d=l[h];d.parent!==null?s.add(Ys(d)):s.add(d)}let c=u(h=>{let f=new Map;for(let[d,m]of i.associations)(d instanceof Dn||d instanceof rn)&&f.set(d,m);return h.traverse(d=>{let m=i.associations.get(d);m!=null&&f.set(d,m)}),f},"reduceAssociations");return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){let o=[],a=e.name?e.name:e.uuid,l=[];function c(m){m.morphTargetInfluences&&l.push(m.name?m.name:m.uuid)}u(c,"collectMorphTargets"),$s[s.path]===$s.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let h;switch($s[s.path]){case $s.weights:h=ss;break;case $s.rotation:h=os;break;case $s.translation:case $s.scale:h=Xs;break;default:n.itemSize===1?h=ss:h=Xs;break}let f=i.interpolation!==void 0?W3[i.interpolation]:Fo,d=this._getArrayFromAccessor(n);for(let m=0,g=l.length;m<g;m++){let _=new h(l[m]+"."+$s[s.path],t.array,d,f);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Ub(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=u(function(n){let i=this instanceof os?Db:Pp;return new i(this.times,this.values,this.getValueSize()/3,n)},"InterpolantFactoryMethodGLTFCubicSpline"),e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};u(uy,"GLTFParser");var Fb=uy;function J3(r,e,t){let n=e.attributes,i=new Mn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new X(l[0],l[1],l[2]),new X(c[0],c[1],c[2])),a.normalized){let h=Ub(Ul[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let a=new X,l=new X;for(let c=0,h=s.length;c<h;c++){let f=s[c];if(f.POSITION!==void 0){let d=t.json.accessors[f.POSITION],m=d.min,g=d.max;if(m!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),d.normalized){let _=Ub(Ul[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;let o=new Sn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}u(J3,"computeBounds");function vw(r,e,t){let n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}u(s,"assignAttributeAccessor");for(let o in n){let a=Ob[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){let o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return st.workingColorSpace!==Nn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),Sr(r,e),J3(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?q3(r,e.targets,t):r})}u(vw,"addPrimitiveAttributes");var dy=["idle","move","fight","die","work","settle"],j3=["bottle","arrow","bullet","shell"],Zi=u(r=>typeof r=="object"&&r!==null&&!Array.isArray(r),"isObject"),li=u(r=>typeof r=="string"&&r!=="","isText"),Sw=u(r=>typeof r=="number"&&Number.isFinite(r)&&r>0,"isScale"),ww=u(r=>Zi(r)&&li(r.name)&&li(r.url)&&(r.attribution===void 0||li(r.attribution)),"isLicence"),Ew=u(r=>li(r)&&r.endsWith(".glb")&&!r.startsWith("/")&&!/[\\%?#\u0000-\u0020]/.test(r)&&!/^[a-z][a-z0-9+.-]*:/i.test(r)&&r.split("/").every(e=>e!==""&&e!=="."&&e!==".."),"isFile"),hy=u(r=>dy.includes(r),"isRole"),Q3=u(r=>Zi(r)&&typeof r.at=="number"&&Number.isFinite(r.at)&&r.at>=0&&li(r.joint)&&(r.kind===void 0||j3.includes(r.kind)),"isShot"),eL=u(r=>{if(!Zi(r)||!Ew(r.file)||!Zi(r.clips))return;let e={};if(Object.entries(r.clips).forEach(([i,s])=>{hy(i)&&li(s)&&(e[i]=s)}),Object.keys(e).length===0||Object.entries(r.clips).some(([i,s])=>hy(i)&&!li(s)))return;if(r.shots===void 0)return{file:r.file,clips:e};if(!Zi(r.shots))return;let t={},n=Object.entries(r.shots).filter(([i])=>hy(i));if(n.every(([i,s])=>e[i]!==void 0&&Array.isArray(s)&&s.every(Q3)))return n.forEach(([i,s])=>t[i]=s),{file:r.file,clips:e,shots:t}},"riggedOf"),Tw=u(r=>{if(!Zi(r))return"not an object";if(r.schema!==1||r.kind!=="models")return"not a set of models (schema 1)";if(!li(r.id)||!li(r.name))return"no id or name";if(!ww(r.licence))return"no licence";if(!Array.isArray(r.credits)||r.credits.length===0||!r.credits.every(s=>Zi(s)&&li(s.work)&&li(s.author)&&li(s.url)&&ww(s.licence)))return"no credits";if(!Sw(r.scale))return"no scale";let e=r.models;if(!Zi(e))return"no models";let t=Object.entries(e).find(([,s])=>!Zi(s)||!Ew(s.file)||s.scale!==void 0&&!Sw(s.scale));if(t!==void 0)return`model ${t[0]}: no glTF binary beside the manifest, or no scale`;let n=r.names;if(!Zi(n)||!Zi(n.unit))return"no unit names";let i=Object.entries(n.unit).find(([,s])=>!li(s)||!Object.prototype.hasOwnProperty.call(e,s));return i!==void 0?`unit ${i[0]}: drawn by a model the set hasn't`:{...r,models:Object.fromEntries(Object.entries(e).map(([s,o])=>{let{rigged:a,...l}=o,c=eL(a);return[s,c===void 0?l:{...l,rigged:c}]}))}},"readModelManifest"),Aw=u(r=>{let e=new Map;return Object.entries(r.names.unit).forEach(([t,n])=>e.set(n,[...e.get(n)??[],t])),e},"unitTypesOf"),fy=u((r,e)=>r.models[e]?.scale??r.scale,"scaleOf");var Cw=u(r=>Pw(r.geometry,Array.isArray(r.material)?r.material[0]:r.material),"rigPart"),Pw=u((r,e)=>{let t=e;return{geometry:r,map:t.map??null,tinted:t.userData?.playerColour===!0,cutout:t.alphaTest>0,doubleSided:t.side===sn}},"partOf"),tL=u(r=>{let e=[];return r.updateMatrixWorld(!0),r.traverse(t=>{let n=t;if(!n.isMesh)return;(Array.isArray(n.material)?n.material:[n.material]).slice(0,1).forEach(s=>{let o=n.geometry.clone();o.applyMatrix4(n.matrixWorld),o.computeBoundingBox(),e.push(Pw(o,s))})}),e},"partsOf"),nL=u(({animations:r,scene:e},t)=>{let n=new Map,i=new Map;return dy.forEach(s=>{let o=t.clips[s];if(o===void 0)return;let a=r.find(f=>f.name===o);if(a===void 0)throw new Error(`${t.file}: no clip ${o}`);let l=a.tracks.find(({name:f})=>e.getObjectByName(Mt.parseTrackName(f).nodeName)===void 0);if(l!==void 0)throw new Error(`${t.file}: clip ${o} moves a node it can't name (${l.name})`);let c=(t.shots?.[s]??[]).map(f=>({...f,joint:Mt.sanitizeNodeName(f.joint)})),h=c.find(({joint:f})=>e.getObjectByName(f)===void 0);if(h!==void 0)throw new Error(`${t.file}: clip ${o} shoots from a node it hasn't (${h.joint})`);n.set(s,a),i.set(s,c)}),{clips:n,shots:i}},"clipsOf"),iL=u(r=>{if(r.byteLength<20)return!1;let e=new DataView(r),t=e.getUint32(12,!0);if(e.getUint32(0,!0)!==1179937895||e.getUint32(4,!0)!==2||e.getUint32(8,!0)!==r.byteLength||e.getUint32(16,!0)!==1313821514||20+t>r.byteLength)return!1;let n=[];for(let i=12;i<r.byteLength;){if(i+8>r.byteLength)return!1;let s=e.getUint32(i,!0);if(n.push(e.getUint32(i+4,!0)),i+=8+s,i>r.byteLength)return!1}if(n.length>2||n.length===2&&n[1]!==5130562)return!1;try{let i=JSON.parse(new TextDecoder().decode(new Uint8Array(r,20,t))),s=u(a=>Array.isArray(a)?a.some(s):typeof a=="object"&&a!==null&&(Object.prototype.hasOwnProperty.call(a,"uri")||Object.values(a).some(s)),"reads"),o=u(a=>a===void 0||Array.isArray(a),"listed");return typeof i=="object"&&i!==null&&!Array.isArray(i)&&o(i.buffers)&&o(i.images)&&i.extensionsUsed===void 0&&i.extensionsRequired===void 0&&!s(i)}catch{return!1}},"selfContained"),rL=u(r=>{let e=new _l,t=`blob:${r}/`;return e.setURLModifier(n=>{if(!n.startsWith(t)&&!/^data:/i.test(n))throw new Error(`${n}: a model reads nothing from elsewhere`);return n}),e},"modelManager"),Rw=u((r,e)=>{try{let t=new URL(r,e);return t.origin===new URL(e).origin?t.href:null}catch{return null}},"onSite"),Ip=u((r,e)=>`${r}#${e}`,"modelKey"),Iw=u(async(r,e,t,n=()=>{})=>{let i=Rw(r,location.href);if(i===null)throw new Error(`${r}: not on this site`);let s=await fetch(i,{redirect:"error",credentials:"omit"});if(!s.ok)throw new Error(`${r}: ${s.status}`);let o=Tw(await s.json());if(typeof o=="string")throw new Error(`${r}: ${o}`);let a=new Rp(rL(location.origin)),l=Aw(o),c=new URL(".",i).href,h=u(async f=>{let d=Rw(f,i);if(d===null||!d.startsWith(c))throw new Error(`${f}: not beside the manifest`);let m=await fetch(d,{redirect:"error",credentials:"omit"});if(!m.ok)throw new Error(`${d}: ${m.status}`);let g=await m.arrayBuffer();if(!iL(g))throw new Error(`${d}: not a glTF binary whole in itself`);return a.parseAsync(g,"")},"parsed");return await Promise.all([...l.keys()].map(async f=>{let d=o.models[f];try{let m=await h(d.file);e(f,{parts:tL(m.scene),scale:fy(o,f)},l.get(f)??[])}catch(m){t(f,m);return}if(d.rigged!==void 0)try{let m=await h(d.rigged.file),{clips:g,shots:_}=nL(m,d.rigged);n(f,{scene:m.scene,clips:g,shots:_,scale:fy(o,f)},l.get(f)??[])}catch(m){t(f,m)}})),o},"loadModels");var Lw=.08,Nw=u(r=>{let e=new Se(r),t=.2126*e.r+.7152*e.g+.0722*e.b;if(t>=Lw)return e;let n=(Lw-t)/(1-t);return e.setRGB(e.r+(1-e.r)*n,e.g+(1-e.g)*n,e.b+(1-e.b)*n)},"ownerTint"),my=class my extends Zt{constructor(t={}){let{tint:n,...i}=t;super(i);this.isTintedMaterial=!0;this.tint=new Se(1,1,1);n!==void 0&&this.tint.copy(n)}onBeforeCompile(t){t.uniforms.tint={value:this.tint},t.fragmentShader=`uniform vec3 tint;
${t.fragmentShader.replace("#include <map_fragment>",`#ifdef USE_MAP
        vec4 texel = texture2D( map, vMapUv );
        diffuseColor.rgb *= texel.rgb * mix( tint, vec3( 1.0 ), texel.a );
      #endif`)}`}customProgramCacheKey(){return"tinted"}copy(t){return super.copy(t),this.tint.copy(t.tint),this}};u(my,"TintedMaterial");var py=my,Dw=py;var sL=.1,Ow=1.1,Uw=u(r=>{let e=[];return r.traverse(t=>{t.isSkinnedMesh&&e.push(t)}),e},"skinnedOf"),oL=u(r=>{let e=r.elements,t=[0,4,8].map(o=>[e[o],e[o+1],e[o+2]]),n=u((o,a)=>o[0]*a[0]+o[1]*a[1]+o[2]*a[2],"dot"),i=t.map(o=>n(o,o)),s=[[0,1],[0,2],[1,2]].every(([o,a])=>Math.abs(n(t[o],t[a]))<=1e-4*Math.sqrt(i[o]*i[a]));return Math.sqrt(s?Math.max(...i):i.reduce((o,a)=>o+a,0))},"stretchOf"),aL=u(r=>{let e=new Map,{boneInverses:t}=r.skeleton,n=r.geometry.getAttribute("position"),i=r.geometry.getAttribute("skinIndex"),s=r.geometry.getAttribute("skinWeight"),o=new X;if(n===void 0||i===void 0||s===void 0)return e;for(let a=0;a<n.count;a++){o.fromBufferAttribute(n,a).applyMatrix4(r.bindMatrix);for(let l=0;l<4;l++){let c=i.getComponent(a,l),h=t[c];if(s.getComponent(a,l)===0||h===void 0)continue;let f=e.get(c);f===void 0&&(f={at:new X().setFromMatrixPosition(h.clone().invert()),reach:0},e.set(c,f)),f.reach=Math.max(f.reach,o.distanceTo(f.at))}}return e},"reachOf"),lL=u(r=>{let e=Ys(r.scene),t=Uw(e),n=t.map(aL),i=t.map(()=>new Mn),s=new Xe,o=new X,a=new X,l=new Mn,c=u(()=>{e.updateMatrixWorld(!0),t.forEach((f,d)=>{let{bones:m,boneInverses:g}=f.skeleton;l.makeEmpty(),n[d].forEach(({at:_,reach:x},b)=>{s.multiplyMatrices(m[b].matrixWorld,g[b]),o.copy(_).applyMatrix4(s);let v=x*oL(s);l.expandByPoint(a.copy(o).addScalar(v)),l.expandByPoint(a.copy(o).addScalar(-v))}),l.isEmpty()||i[d].union(l.applyMatrix4(f.bindMatrixInverse))})},"take"),h=new qo(e);c(),r.clips.forEach(f=>{h.stopAllAction(),h.clipAction(f).play();for(let d=0;d<f.duration;d+=sL)h.setTime(d),c();h.setTime(Math.max(0,f.duration-1e-4)),c()}),h.stopAllAction(),h.uncacheRoot(e),Uw(r.scene).forEach((f,d)=>{let m=i[d];if(m===void 0||m.isEmpty()){f.frustumCulled=!1;return}let g=m.getBoundingSphere(new Sn),_=m.getSize(new X);g.radius*=Ow,f.boundingSphere=g,f.boundingBox=m.clone().expandByVector(_.multiplyScalar((Ow-1)/2)),f.frustumCulled=!0})},"boundClips"),Fw=lL;var xn=u((r,e,t=3)=>({shape:"foot",era:r,gear:e,squad:t}),"foot"),ku=u((r,e,t=2)=>({shape:"mounted",era:r,gear:e,squad:t}),"mounted"),ci=u((r,e,t=!1,n=0,i=!1)=>({shape:"ship",era:r,hull:e,squad:1,large:t,guns:n,missiles:i}),"ship"),zu=u((r,e=!1,t=!1)=>({shape:"aircraft",era:r,squad:1,large:e,stealth:t}),"aircraft"),gy=u((r,e)=>({shape:"cart",era:r,cart:e,squad:1}),"cart"),Bw={Warrior:xn("ancient","club"),Spearman:xn("ancient","spear"),Swordman:xn("ancient","sword"),Archer:xn("ancient","bow"),Horseman:ku("ancient","spear"),Chariot:gy("ancient","chariot"),Elephant:{shape:"elephant",era:"ancient",squad:1},Catapult:{shape:"siege",era:"ancient",squad:1},Trireme:ci("ancient","oars"),Settlers:gy("ancient","wagon"),Diplomat:xn("ancient","case",1),Caravan:gy("ancient","goods"),Explorer:xn("ancient","pack",1),Pikeman:xn("medieval","pike"),Knight:ku("medieval","lance"),Crusader:ku("medieval","sword"),Fanatic:xn("medieval","sword"),Sail:ci("medieval","sail"),Musketman:xn("renaissance","musket"),Dragoon:ku("renaissance","musket"),Cannon:{shape:"siege",era:"renaissance",squad:1},Frigate:ci("renaissance","sail",!0,1),Galleon:ci("renaissance","sail",!0),Rifleman:xn("industrial","rifle"),AlpineTrooper:{...xn("industrial","rifle"),dress:"snow"},Partisan:{...xn("industrial","rifle"),dress:"irregular"},Cavalry:ku("industrial","rifle"),Artillery:{shape:"siege",era:"industrial",squad:1},Engineer:xn("industrial","none",2),Ironclad:ci("industrial","steam",!1,1),Transport:ci("industrial","steam",!0),Freight:{shape:"vehicle",era:"industrial",squad:1},Spy:xn("industrial","none",1),MechanizedInfantry:{shape:"vehicle",era:"modern",squad:1},Marine:xn("modern","rifle"),Paratrooper:{...xn("modern","rifle",1),dress:"parachute"},Tank:{shape:"vehicle",era:"modern",squad:1,large:!0},Howitzer:{shape:"siege",era:"modern",squad:1,large:!0},Destroyer:ci("modern","steam",!1,1),Cruiser:ci("modern","steam",!0,2),MissileCruiser:ci("modern","steam",!0,1,!0),Battleship:ci("modern","steam",!0,3),Submarine:ci("modern","submarine"),Carrier:ci("modern","carrier",!0),Fighter:zu("modern"),StealthFighter:zu("modern",!1,!0),Bomber:zu("modern",!0),StealthBomber:zu("modern",!0,!0),Helicopter:{shape:"helicopter",era:"modern",squad:1},CruiseMissile:{shape:"missile",era:"modern",squad:1},Nuclear:{shape:"missile",era:"modern",squad:1,large:!0}},Fl=u((r,e=[])=>(Object.prototype.hasOwnProperty.call(Bw,r)?Bw[r]:void 0)??(e.includes("Naval")||e.includes("NavalTransport")?ci("industrial","steam"):e.includes("Air")?zu("modern"):xn("ancient","spear")),"unitLook"),Bl=u(r=>r.shape==="aircraft"||r.shape==="helicopter"||r.shape==="missile","airborne");var My=2,kw=.285,xy=.03,Hw="#fff4b0",cL=.04,Lp=.004,by=.018,zw=.01,Gw=.022,Vw=.03,Ww=.03,Np=.002,uL="#4caf50",hL="#e0b030",dL="#d04030",fL=256,sa,Ji,oa,aa,us,la,ca,ua,Ks,Hu,ha,da,hs,zl,Zs,yy,_y,Ey=class Ey{constructor(){G(this,Zs);G(this,sa,new Map);G(this,Ji,new Map);G(this,oa,new Map);G(this,aa,new Map);G(this,us,new Map);G(this,la,new Map);G(this,ca,new Map);G(this,ua,new Map);G(this,Ks,new Map);G(this,Hu,new WeakSet);G(this,ha,null);G(this,da,new Map);G(this,hs,null);G(this,zl,0);this.figureMaterial=new Zt({vertexColors:!0,roughness:.8,metalness:.05});this.geometries={ring:new is(.23,.018,8,36)}}material(e,t=!1){let n=`${e}${t?" glow":""}`,i=p(this,sa).get(n);return i===void 0&&(i=new Zt({color:new Se(e),roughness:.75,metalness:.05,...t?{emissive:new Se(e),emissiveIntensity:.6}:{}}),p(this,sa).set(n,i)),i}addModel(e,t){let n=p(this,us).get(e);n!==void 0&&n!==t&&T(this,Zs,yy).call(this,e,n),p(this,us).set(e,t)}addRig(e,t){p(this,us).has(e)&&(p(this,Hu).has(t)||(Fw(t),p(this,Hu).add(t)),p(this,Ks).set(e,t))}rigOf(e){return p(this,Ks).get(e)??null}rigFigures(e,t,n,i=1){let s=p(this,Ks).get(e);if(s===void 0)return null;let o=t.shape==="ship",a=Bl(t),l=vy(t),c=s.scale*i,h=o?0:xy+(a?kw*i:0);return Fu(l).map(([f,d])=>{let m=Ys(s.scene),g=0;return m.name=Xu,m.position.set(f*i,h,d*i),m.scale.setScalar(c),m.traverse(_=>{let x=_;x.isMesh&&(x.material=T(this,Zs,_y).call(this,e,g++,{...Cw(x),geometry:x.geometry},n,!0))}),m})}modelFigures(e,t,n,i=1){let s=p(this,us).get(e);if(s===void 0)return null;let o=t.shape==="ship",a=Bl(t),l=vy(t),c=JSON.stringify([e,l,i,o,a]),h=JSON.stringify([e,l,i,o,a,n[0]]),f=p(this,la).get(c),d=p(this,ca).get(h);if(f===void 0){let m=s.scale*i,g=o?0:xy+(a?kw*i:0),_=Fu(l).map(([v,S])=>new Xe().makeTranslation(v*i,g,S*i).multiply(new Xe().makeScale(m,m,m))),x=g;f={geometries:s.parts.map(v=>{let S=_.map(R=>v.geometry.clone().applyMatrix4(R)),M=(S.length===1?S[0].clone():vp(S))??new Et;return S.forEach(R=>R.dispose()),M.computeBoundingBox(),M.computeBoundingSphere(),x=Math.max(x,M.boundingBox?.max.y??g),M}),top:x},p(this,la).set(c,f)}return d===void 0&&(d={meshes:f.geometries.map((m,g)=>[m,T(this,Zs,_y).call(this,e,g,s.parts[g],n)]),top:f.top},p(this,ca).set(h,d)),d}body(e,t,n,i=1,s="whole",o=!1){let a=o&&e.shape==="ship"&&s!=="figures",l=JSON.stringify([e,t,n,i,s,a]),c=p(this,aa).get(l);return c===void 0&&(c=mw(e,t,{fortified:n,scale:i,stand:xy,part:s,ripples:a}),p(this,aa).set(l,c)),c}walls(){return p(this,ha)??z(this,ha,gw()),p(this,ha)}figure(e,t){let n=JSON.stringify([e,t]),i=p(this,oa).get(n);return i===void 0&&(i=pw(e,t),p(this,oa).set(n,i)),i}plain(e){let t=p(this,da).get(e);return t===void 0&&(t=new Bs({color:new Se(e),sizeAttenuation:!1,depthTest:!1}),p(this,da).set(e,t)),t}pointer(){if(p(this,hs)===null){let e=document.createElement("canvas"),t=e.getContext("2d");e.width=32,e.height=32,t!==null&&(t.fillStyle=Hw,t.strokeStyle="#3a3420",t.lineWidth=3,t.beginPath(),t.moveTo(3,5),t.lineTo(29,5),t.lineTo(16,28),t.closePath(),t.fill(),t.stroke());let n=new Vs(e);n.colorSpace=Lt,z(this,hs,new Bs({map:n,sizeAttenuation:!1,depthTest:!1,transparent:!0}))}return p(this,hs)}label(e,t,n){let i=`${e}\0${t}\0${n}`,s=p(this,Ji).get(i);if(s===void 0){let o=document.createElement("canvas"),a=o.getContext("2d"),l="600 28px system-ui, sans-serif",c=40;a!==null&&(a.font=l,o.width=Math.ceil(a.measureText(e).width)+24,o.height=c,a.font=l,a.fillStyle=t,a.beginPath(),a.roundRect?.(0,0,o.width,c,10),a.fill(),a.fillStyle=n,a.textBaseline="middle",a.fillText(e,12,c/2+1));let h=new Vs(o);h.colorSpace=Lt,s=new Bs({map:h,sizeAttenuation:!1,depthTest:!1,transparent:!0}),p(this,Ji).set(i,s)}return s}get sweepDue(){return p(this,Ji).size>Math.max(fL,p(this,zl)*2)}sweep(e){let t=new Set;for(let n of e)n.traverse(i=>{i instanceof Ze&&t.add(i.geometry),i instanceof ts&&t.add(i.material)});p(this,Ji).forEach((n,i)=>{t.has(n)||(n.map?.dispose(),n.dispose(),p(this,Ji).delete(i))}),z(this,zl,p(this,Ji).size)}dispose(){Object.values(this.geometries).forEach(e=>e.dispose()),p(this,oa).forEach(e=>e.dispose()),p(this,aa).forEach(e=>e.dispose()),p(this,ha)?.dispose(),z(this,ha,null),p(this,aa).clear(),[...p(this,us)].forEach(([e,t])=>T(this,Zs,yy).call(this,e,t)),this.figureMaterial.dispose(),p(this,da).forEach(e=>e.dispose()),p(this,hs)?.map?.dispose(),p(this,hs)?.dispose(),p(this,da).clear(),z(this,hs,null),p(this,sa).forEach(e=>e.dispose()),p(this,Ji).forEach(e=>{e.map?.dispose(),e.dispose()}),p(this,sa).clear(),p(this,Ji).clear(),p(this,oa).clear(),z(this,zl,0)}};sa=new WeakMap,Ji=new WeakMap,oa=new WeakMap,aa=new WeakMap,us=new WeakMap,la=new WeakMap,ca=new WeakMap,ua=new WeakMap,Ks=new WeakMap,Hu=new WeakMap,ha=new WeakMap,da=new WeakMap,hs=new WeakMap,zl=new WeakMap,Zs=new WeakSet,yy=u(function(e,t){let n=u(i=>JSON.parse(i)[0]===e,"ours");p(this,Ks).get(e)?.scene.traverse(i=>{let s=i;s.isMesh&&(s.geometry.dispose(),[s.material].flat().forEach(o=>{o.map?.dispose(),o.dispose()}))}),p(this,Ks).delete(e),t.parts.forEach(({geometry:i,map:s})=>{i.dispose(),s?.dispose()}),p(this,us).delete(e),[...p(this,la)].forEach(([i,{geometries:s}])=>{n(i)&&(s.forEach(o=>o.dispose()),p(this,la).delete(i))}),[...p(this,ca).keys()].filter(n).forEach(i=>p(this,ca).delete(i)),[...p(this,ua)].forEach(([i,s])=>{n(i)&&(s.dispose(),p(this,ua).delete(i))})},"#letGoOfModel"),_y=u(function(e,t,n,i,s=!1){let o=JSON.stringify([e,t,n.tinted?i[0]:null,s]),a=p(this,ua).get(o);if(a===void 0){let l={map:n.map,roughness:.85,metalness:0};a=n.cutout?new Zt({...l,alphaTest:.5,side:sn}):new Dw({...l,tint:n.tinted?Nw(i[0]):new Se(1,1,1),side:n.doubleSided?sn:Si}),p(this,ua).set(o,a)}return a},"#modelMaterial"),u(Ey,"MarkerKit");var Op=Ey,Xw=u(r=>{let{r:e,g:t,b:n}=new Se(r);return .2126*e+.7152*t+.0722*n>.35?"#111111":"#ffffff"},"textOn"),kl=u((r,e,t,n)=>(r.position.set(e,t,n),r),"place"),pL=u(r=>[r.count>1?String(r.count):"",r.status??"",r.veteran?"\u2605":""].filter(e=>e!=="").join(" "),"flagText"),mL=3,gL=4,Gu=u((r,e,t,n,i=mL)=>{let s=new ts(r);return s.scale.set(e,t,1),s.center.set(.5,-n/t),s.renderOrder=i,s.frustumCulled=!1,s},"badge"),qw=u((r,e,t)=>{let n=r.map?.image,i=n&&n.height>0&&n.width>0?n.width/n.height:1;return Gu(r,e*i,e,t)},"label"),Dp=[0,.36,0],xL=u((r,e)=>{let t=new Ht;return e.walled&&t.add(new Ze(r.walls(),r.figureMaterial)),e.unnamed!==!0&&t.add(kl(qw(r.label(`${e.name}  ${e.size}${e.disorder?" !":""}`,e.colours[0],Xw(e.colours[0])),Ww,0),...Dp)),t},"drawCity"),bL=u((r,e,t=null,n=!1,i=t===null,s=!1)=>{let o=new Ht,{ring:a}=r.geometries,l=Fl(e.type,e.kinds),c=n&&Bl(l),h=e.model===void 0?null:r.modelFigures(e.model,l,e.colours,e.size),f=h===null?r.body(l,e.colours,e.fortified,e.size,c?"figures":"whole",i):null,d=c?new Ht:o,m=h?.top??f?.boundingBox?.max.y??.3,g=t?.at??[0,m+cL,0],_=e.health!==null,x=(t?.over??0)+(_?Lp+Np:0),b=x+zw+Np,v=pL(e),S=b+(v===""?0:Gw+Np),M=h===null?new Ze(f,r.figureMaterial):new Ht,R=s&&h!==null&&e.model!==void 0?r.rigFigures(e.model,l,e.colours,e.size):null;if(R!==null?R.forEach(E=>M.add(E)):h?.meshes.forEach(([E,y])=>M.add(new Ze(E,y))),M.name=Sy,M.rotation.y=e.facing,d.add(M),c||h!==null){let E=r.body(l,e.colours,e.fortified,e.size,"base",i);E.getAttribute("position")!==void 0&&o.add(new Ze(E,r.figureMaterial))}if(c&&(d.name=wy,o.add(d)),e.health!==null){let E=Math.max(0,Math.min(1,e.health));if(d.add(kl(Gu(r.plain("#202020"),by,Lp,t?.over??0),...g)),E>0){let y=Gu(r.plain(E>.5?uL:E>.25?hL:dL),by*E,Lp*.6,(t?.over??0)+Lp*.2);y.center.x=1/(2*E),d.add(kl(y,...g))}}if(d.add(kl(Gu(r.plain(e.colours[0]),by,zw,x),...g)),v!==""&&d.add(kl(qw(r.label(v,e.colours[0],Xw(e.colours[0])),Gw,b),...g)),e.active){let E=new Ze(a,r.material(Hw,!0));E.rotation.x=Math.PI/2,E.position.y=.01,o.add(E),d.add(kl(Gu(r.pointer(),Vw,Vw,S,gL),...g))}return o},"drawUnit"),Wu="unit",Sy="figures",vy=u(r=>r.shape==="foot"?r.squad:1,"figuresOf"),Yw=u(({type:r,kinds:e})=>vy(Fl(r,e)),"markerFigures"),Xu="rig figure",wy="aloft",fa=.26,$w=u((r,e,t=!1,n=!1)=>{let i=new Ht;if(e.city!==null&&i.add(xL(r,e.city)),e.unit!==null){let s=e.inCity??e.city!==null?fa:0,o=bL(r,e.unit,e.city===null?null:{at:[Dp[0],Dp[1],Dp[2]-s],over:Ww+Np},t,s===0,n);o.name=Wu,o.position.z=s,i.add(o)}return i},"drawMarker"),Vu=new WeakMap,Up=new WeakMap,yL=.5,qu=u((r,e,t)=>{r.forEach(n=>n.traverse(i=>{if(!(i instanceof Ze||i instanceof ts))return;let s=Vu.get(i)??i.material,o=t.get(s);o===void 0&&(o=s.clone(),i instanceof ts?o.transparent=!0:o.alphaHash=!0,t.set(s,o)),Vu.has(i)||(Vu.set(i,s),Up.set(i,i.castShadow)),i.material=o,i.castShadow=(Up.get(i)??!1)&&e>=yL})),t.forEach((n,i)=>{n.opacity=i.opacity*e})},"fade"),Kw=u((r,e)=>{r.forEach(t=>t.traverse(n=>{let i=Vu.get(n);i===void 0||!(n instanceof Ze||n instanceof ts)||(n.material=i,n.castShadow=Up.get(n)??n.castShadow,Vu.delete(n),Up.delete(n))})),Gl(e)},"unfaded"),Gl=u(r=>{r.forEach(e=>e.dispose()),r.clear()},"unfade");var _L=12,vL=14,ML=1.6,SL=2,wL=-1,EL=-2,Jw=1e3/30-4,TL=u((r,{distance:e,focus:t},n,i,s,o)=>{let a=new Set;if(e>(s.size>0?vL:_L))return a;let l=u((c,h,f)=>f===null?c-h:c-h-f*Math.round((c-h)/f),"apart");for(let c of r){let[h,f]=c.split(",").map(Number),[d,m]=n(h,f),g=s.has(c);Math.hypot(l(d,t[0],i.u),l(m,t[1],i.v))<=e*(g?SL:ML)&&o(h,f,g?EL:wL)&&a.add(c)}return a},"idleSquares"),Zw=4,jw=u((r,e,t,n)=>{let i=[...e].filter(o=>!r.has(o)&&!n(o)),s=[...r].filter(o=>!e.has(o)&&!n(o)&&t(o));return{stand:i,start:s.slice(0,Zw),waiting:s.length>Zw}},"idleChanges"),Qw=TL;var e1=new _u,AL=u((r,e,t)=>{let n=[],i=new Map;for(let[o,a]of r)a.forEach(l=>l.getObjectByName(Wu)?.traverseVisible(c=>{c instanceof Ze&&(n.push(c),i.set(c,o))}));if(n.length===0)return null;e1.setFromCamera(new ke(t[0],t[1]),e);let[s]=e1.intersectObjects(n,!1);return s===void 0?null:i.get(s.object)??null},"unitUnder"),t1=AL;var Js=u(r=>r*Math.PI/180,"degrees"),Ty=Js(25),n1=Js(80),i1=5,RL=90,CL=1.12,Vl=Js(40),Ay=Js(45),PL={above:{yaw:0,pitch:Js(80)},classic:{yaw:0,pitch:Js(55)},isometric:{yaw:Js(45),pitch:Js(30)}};var r1=u(r=>({focus:r,...PL.classic,distance:24}),"defaultOrbit"),Fp=u((r,e,t)=>Math.min(t,Math.max(e,r)),"clamp"),s1=u(r=>{let e=Math.PI*2;return(r%e+e)%e},"normaliseYaw"),ma=u(r=>({...r,yaw:s1(r.yaw),pitch:Fp(r.pitch,Ty,n1),distance:Fp(r.distance,i1,RL)}),"clampOrbit"),Hl=u((r,e)=>ma({...r,distance:r.distance/CL**e}),"zoomed"),Bp=u(({yaw:r,pitch:e})=>{let t=Math.sin(r),n=Math.cos(r),i=Math.sin(e),s=Math.cos(e);return{forward:[t*s,-i,-n*s],right:[n,0,t],up:[t*i,s,-n*i]}},"basis"),Wl=u((r,e)=>{let{forward:t}=Bp(r),[n,i]=r.focus;return[n-t[0]*r.distance,e-t[1]*r.distance,i-t[2]*r.distance]},"eye"),Xl=u((r,e,[t,n,i],s)=>{let{forward:o,right:a,up:l}=Bp(r),c=Wl(r,e),h=[t-c[0],n-c[1],i-c[2]],f=u(g=>(h[0]??0)*g[0]+(h[1]??0)*g[1]+(h[2]??0)*g[2],"dot"),d=f(o),m=Math.tan(Vl/2);return d<=1e-6?null:[f(a)/(d*m*s),f(l)/(d*m)]},"toScreen"),Ry=u((r,e,[t,n],i)=>{let{forward:s,right:o,up:a}=Bp(r),l=Math.tan(Vl/2);return{from:Wl(r,e),direction:[0,1,2].map(c=>(s[c]??0)+t*l*i*(o[c]??0)+n*l*(a[c]??0))}},"rayThrough"),pa=u((r,e,t,n,i=e)=>{let{from:s,direction:o}=Ry(r,e,t,n);if(o[1]>-1e-6)return null;let a=(i-s[1])/o[1];return a<=0?null:[s[0]+o[0]*a,s[2]+o[2]*a]},"groundAt"),o1=u((r,e,t,n,i)=>{let s=pa(r,e,t,i),o=pa(r,e,n,i);if(s!==null&&o!==null)return{...r,focus:[r.focus[0]+s[0]-o[0],r.focus[1]+s[1]-o[1]]};let a=(t[0]-n[0])*i,l=(t[1]-n[1])/Math.sin(r.pitch),c=r.distance*Math.tan(Vl/2),{right:h}=Bp(r),f=[Math.sin(r.yaw),-Math.cos(r.yaw)];return{...r,focus:[r.focus[0]+(a*h[0]+l*(f[0]??0))*c,r.focus[1]+(a*h[2]+l*(f[1]??0))*c]}},"panned"),a1=u((r,e,t)=>{let n=u((o,a)=>(o%a+a)%a,"wrap"),[i,s]=r.focus;return{...r,yaw:s1(r.yaw),focus:[n(i,e.u),e.v===null?Fp(s,0,t):n(s,e.v)]}},"settled"),l1=u((r,e,t,n,i)=>{let s=u((l,c)=>c===null?l:l-c*Math.round(l/c),"short"),o=Math.PI*2,a=t*t*(3-2*t);return{focus:[r.focus[0]+s(e.focus[0]-r.focus[0],n.u)*a,r.focus[1]+s(e.focus[1]-r.focus[1],n.v)*a],yaw:r.yaw+(i??s(e.yaw-r.yaw,o))*a,pitch:r.pitch+(e.pitch-r.pitch)*a,distance:r.distance+(e.distance-r.distance)*a}},"between"),ds=u((r,e)=>{let t=e===void 0?1/0:Math.min(e.u,e.v??1/0)/2,n=t<i1?1/0:t,i=Math.min(r*3.5,r+n);return{near:Math.min(r*1.2,(r+i)/2),far:i}},"sightFor"),c1=u((r,e)=>{let t=Vl/2,n=u(i=>{let s=i/(r*Math.cos(t));return Math.atan2(s*Math.sin(t),s*Math.cos(t)-1)},"meeting");return Fp(Ty+n(ds(r,e).far)-n(ds(r).far),Ty,n1)},"lowestPitch");var IL=new Se("#3f8a8c"),LL=new Se("#173a52"),NL=new Se("#e8eeee"),u1=`
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
`,DL=`
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
`,js,Ei,ui,Py=class Py{constructor(e,t){G(this,js);G(this,Ei);G(this,ui);z(this,js,e),z(this,Ei,new Uint16Array(e.columns*e.rows*2));for(let i=0;i<p(this,Ei).length;i+=2)p(this,Ei)[i]=hr.toHalfFloat(0),p(this,Ei)[i+1]=hr.toHalfFloat(1);z(this,ui,new zs(p(this,Ei),e.columns,e.rows,xr,oi)),p(this,ui).wrapS=Xn,p(this,ui).wrapT=e.wrapsV?Xn:Wn,p(this,ui).magFilter=zt,p(this,ui).minFilter=zt,p(this,ui).needsUpdate=!0;let n=new Un({uniforms:Qo.merge([Te.fog,{ground:{value:null},cell:{value:new ke},size:{value:new ke},shallow:{value:IL.clone()},deep:{value:LL.clone()},foam:{value:NL.clone()},sky:{value:t.clone()},sunDirection:{value:new X(.5,.7,.4).normalize()},sunColour:{value:new Se("#fff0d8")},extentV:{value:0},wrapsV:{value:!1}}]),vertexShader:u1,fragmentShader:DL,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=p(this,ui),n.uniforms.cell.value.set(e.spacingU,e.spacingV),n.uniforms.size.value.set(e.columns,e.rows),n.uniforms.extentV.value=e.rows*e.spacingV,n.uniforms.wrapsV.value=e.wrapsV,this.mesh=new Ze(new fr(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=1}setChunk(e){let{columns:t,rows:n,spacingU:i,spacingV:s}=p(this,js),o=Math.round(e.u/i),a=Math.round(e.v/s),l=e.positions.length/3;for(let c=0;c<l;c++){let h=o+Math.round((e.positions[c*3]??0)/i),f=a+Math.round((e.positions[c*3+2]??0)/s);if(h>=0&&h<t&&f>=0&&f<n){let d=(f*t+h)*2;p(this,Ei)[d]=hr.toHalfFloat(e.positions[c*3+1]??0),p(this,Ei)[d+1]=hr.toHalfFloat(e.unseen[c]??0)}}p(this,ui).needsUpdate=!0}height(e,t){return hr.fromHalfFloat(p(this,Ei)[(t*p(this,js).columns+e)*2]??0)}unseen(e,t){return hr.fromHalfFloat(p(this,Ei)[(t*p(this,js).columns+e)*2+1]??0)>.5}texture(){return p(this,ui)}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=p(this,js).wrapsV&&e}follow(e,t,n,i){this.mesh.position.set(e,0,t),this.mesh.scale.set(n,n,1),this.mesh.material.uniforms.sunDirection.value.copy(i).normalize()}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),p(this,ui).dispose()}};js=new WeakMap,Ei=new WeakMap,ui=new WeakMap,u(Py,"Water");var Cy=Py,h1=Cy,OL=`
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
`,UL=.18,Yu,Iy=class Iy{constructor(e,t){G(this,Yu);z(this,Yu,t.wrapsV);let n=new Un({uniforms:Qo.merge([Te.fog,{ground:{value:null},cell:{value:new ke},size:{value:new ke},extent:{value:new ke},wrapsV:{value:!1}}]),vertexShader:u1,fragmentShader:OL,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=e,n.uniforms.cell.value.set(t.spacingU,t.spacingV),n.uniforms.size.value.set(t.columns,t.rows),n.uniforms.extent.value.set(t.columns*t.spacingU,t.rows*t.spacingV),n.uniforms.wrapsV.value=t.wrapsV,this.mesh=new Ze(new fr(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=2}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=p(this,Yu)&&e}follow(e,t,n){this.mesh.position.set(e,UL,t),this.mesh.scale.set(n,n,1)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}};Yu=new WeakMap,u(Iy,"Clouds");var kp=Iy;var FL=.6,BL=.05,ga=64,d1=.125,kL=`
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
`,zL=`
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
`,f1=u(r=>{let e=Math.max(1,Math.ceil(Math.sqrt(r)));return[e,Math.max(1,Math.ceil(r/e))]},"atlasCells"),GL=u((r,e)=>{let[t]=f1(r.length),n=ga*(1-2*d1);return r.flatMap((i,s)=>{let o=e(i);if(o===null||o[0]<=0||o[1]<=0)return[];let a=n/Math.max(o[0],o[1]),l=o[0]*a,c=o[1]*a;return[{_:i,x:s%t*ga+(ga-l)/2,y:Math.floor(s/t)*ga+(ga-c)/2,width:l,height:c}]})},"atlasPlaces"),VL=u(r=>{let{naturalWidth:e,naturalHeight:t,width:n,height:i}=r;return[e??(typeof n=="number"?n:0),t??(typeof i=="number"?i:0)]},"imageSize"),Qs,hi,$u,xa,Ku,zp,ql,p1,m1,Ny=class Ny{constructor(e){G(this,ql);G(this,Qs,null);G(this,hi,null);G(this,$u,"");G(this,xa);G(this,Ku,new WeakMap);G(this,zp,1);z(this,xa,e),this.material=new Un({uniforms:Qo.merge([Te.fog,{atlas:{value:null},lean:{value:1},lift:{value:BL},bias:{value:FL},cells:{value:[1,1]},pad:{value:d1}}]),vertexShader:kL,fragmentShader:zL,fog:!0,toneMapped:!1})}lean(e){this.material.uniforms.lean.value=Math.sin(e)}set(e){if(p(this,Qs)?.dispose(),z(this,Qs,null),e===null||e.count===0)return null;T(this,ql,m1).call(this,e);let t=new bu,n=new fr(1,1);return t.index=n.index,t.setAttribute("position",n.getAttribute("position")),t.setAttribute("uv",n.getAttribute("uv")),t.setAttribute("anchor",new qn(e.anchors,3)),t.setAttribute("slot",new qn(e.slots,2)),t.setAttribute("size",new qn(e.sizes,1)),t.setAttribute("cell",new qn(e.cells,1)),t.instanceCount=e.count,z(this,Qs,t),t}make(){let e=new Ze(p(this,Qs)??void 0,this.material);return e.frustumCulled=!1,e.castShadow=!1,e.receiveShadow=!1,e}dispose(){p(this,Qs)?.dispose(),p(this,hi)?.dispose(),this.material.dispose()}};Qs=new WeakMap,hi=new WeakMap,$u=new WeakMap,xa=new WeakMap,Ku=new WeakMap,zp=new WeakMap,ql=new WeakSet,p1=u(function(e){if(e===null)return 0;let t=p(this,Ku).get(e);return t===void 0&&(t=ki(this,zp)._++,p(this,Ku).set(e,t)),t},"#imageId"),m1=u(function(e){let t=e.names.map(a=>`${a}:${T(this,ql,p1).call(this,p(this,xa).call(this,a))}`).join(",");if(t===p(this,$u)&&p(this,hi)!==null)return;let[n,i]=f1(e.names.length),s=document.createElement("canvas"),o=s.getContext("2d");s.width=n*ga,s.height=i*ga,o!==null&&(o.imageSmoothingEnabled=!1,GL(e.names,a=>{let l=p(this,xa).call(this,a);return l===null?null:VL(l)}).forEach(({_:a,x:l,y:c,width:h,height:f})=>{let d=p(this,xa).call(this,a);d!==null&&o.drawImage(d,l,c,h,f)})),p(this,hi)?.dispose(),z(this,hi,new Vs(s)),p(this,hi).colorSpace=Lt,p(this,hi).premultiplyAlpha=!0,p(this,hi).magFilter=Wt,p(this,hi).minFilter=wn,p(this,hi).generateMipmaps=!0,z(this,$u,t),this.material.uniforms.atlas.value=p(this,hi),this.material.uniforms.cells.value=[n,i]},"#drawAtlas"),u(Ny,"YieldIcons");var Ly=Ny,g1=Ly;var Oy=["idle","move","work"],b1=2,Dy=.13,y1=u((r,e)=>({figures:e,stagger:Dy,clips:Object.fromEntries([...r.clips].map(([t,n])=>[t,{duration:n.duration,shots:r.shots.get(t)??[]}]))}),"rigFacts"),HL=u((r,e,t)=>{if(!(e>0))return 0;let n=Math.max(0,t);return Oy.includes(r)?n%e:Math.min(n,e-1e-4)},"clipTime"),WL=10,_1=u(r=>{let e=2166136261;for(let t=0;t<r.length;t++)e=Math.imul(e^r.charCodeAt(t),16777619);return(e>>>0)/2**32*WL},"idlePhase"),x1=u((r,e,t)=>Oy.includes(r)?e+t*Dy:e-t*Dy,"figureSeconds"),Gp=u((r,e,t,n,i,s)=>r.getObjectsByProperty("name",Xu).forEach((o,a)=>{let l=t===null?0:x1(t,n,a),c=t!==null&&s!==void 0&&!Oy.includes(t)&&l<0,h=c?s.role:t,f=c?x1(s.role,s.seconds,a):l,d=h===null?void 0:e.clips.get(h),m=i.get(o)??{mixer:new qo(o),role:null},g=d===void 0?null:h;i.set(o,m),m.role!==g&&(m.mixer.stopAllAction(),m.role=g,d!==void 0&&m.mixer.clipAction(d).setLoop(rp,1/0).play()),d!==void 0&&g!==null&&m.mixer.setTime(HL(g,d.duration,f))}),"poseFigures");var XL=u(r=>{let e=2166136261;for(let t=0;t<r.length;t++)e=Math.imul(e^r.charCodeAt(t),16777619);return(e>>>0)%1e5},"seedOf"),Fy=.07,v1="flash",Uy=10466244,qL=14082796,YL=5984576,$L=16773336,Vp=u((r,e,t)=>{let n=u((i,s)=>{if(s===null)return[0];let o=[];for(let a=Math.floor((i-e)/s);a*s<=i+e;a++)o.push(a*s);return o},"along");return n(r[0],t.u).flatMap(i=>n(r[1],t.v).map(s=>[i,s]))},"copiesNear"),By=u((r,e)=>Math.min(ds(r.distance,e).far,r.distance*2.2),"markerSight"),KL=u((r,e,t,[n,i])=>{let s=r?.getObjectsByProperty("name",Xu)[e]?.getObjectByName(t);if(s===void 0)return null;let o=s.getWorldPosition(new X);return[o.x-n,o.y,o.z-i]},"jointOf"),M1=u((r,e)=>()=>e?Ys(r):r.clone(),"copyOf"),fs=u(r=>r.traverse(e=>{e.isSkinnedMesh&&e.skeleton.dispose()}),"letGoOfSkeletons"),ZL=u((r,e)=>{let{near:t,far:n}=ds(r.distance,e);return{near:t,far:n,land:Vp(r.focus,n,e),markers:Vp(r.focus,By(r,e),e)}},"sightOf"),JL=u(r=>[new Hn(new X(0,0,1),0),new Hn(new X(0,0,-1),r)],"polesAt"),jL=u((r,[e,t],n,i,s)=>r.flatMap(([o,a])=>[[o,a],...s&&i!==null&&t>n?[[o,a-i]]:[],...s&&i!==null&&e<0?[[o,a+i]]:[]]),"overlayCopies"),S1=2048,w1=Math.hypot(30,40,20),E1=u((r,{period:e,ground:t,yieldIcon:n})=>{let i=new dp({antialias:!0,canvas:r}),s=new Qc,o=new nn(Vl*180/Math.PI,1,.1,400),a=new Ht,{material:l,detail:c}=ZS(e,t.rows*t.spacingV),h=new Xo($L,2.6),f=new Map,d=new Map,m=new Zt({vertexColors:!0,roughness:.9,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,clipShadows:!0}),g=t.rows*t.spacingV,_=JL(g),x=new Map,b=new Set,v=new Map,S=new WeakMap,M=new Map,R=new Hs(1,1),E=u(U=>new Zt({color:new Se(U),roughness:1,metalness:0,flatShading:!0}),"puffGrey"),y=[E("#d8d5cf"),E("#a9a59d")],w=new Hs(1,0),L=new On({color:new Se("#fff1b8")}),I=new Map,D=new Yn(.0015,.0015,.07,4),k=new Wi(.004,.012,4),$=new Zt({color:new Se("#7a5a3a"),roughness:.8,metalness:0}),F=new Yn(.0025,.0025,.09,4),j=new On({color:new Se("#ffe08a")}),ce=new Hs(.012,1),V=new Zt({color:new Se("#2b2b2b"),roughness:.5,metalness:.6}),ne=new Yn(.006,.009,.03,6),Z=new Zt({color:new Se("#3d5a3a"),roughness:.3,metalness:0}),re=new Hs(.011,0),ae=new On({color:new Se("#ffb347")}),fe=new Map,ve=new On({color:new Se("#dfe8e8"),side:sn}),ee=new Ht,me=new Op,he=new Ht,pe=new g1(n??(()=>null)),de=new h1(t,new Se(Uy)),Ie=new kp(de.texture(),t),$e=new jc(Uy,30,110),Re=0,nt=[[0,0]],rt="0,0",Ve=[[0,0]],Rt="0,0",Tt=!1,gt=null,ct=!1;i.outputColorSpace=Lt,i.localClippingEnabled=!0,i.toneMapping=Mu,i.shadowMap.enabled=!0,i.shadowMap.type=xf,s.background=new Se(Uy),s.fog=$e,s.add(new pu(qL,YL,.9)),s.add(a),s.add(ee),s.add(he),s.add(de.mesh),s.add(Ie.mesh),h.position.set(30,40,20),h.castShadow=!0,h.shadow.mapSize.set(S1,S1),h.shadow.bias=-4e-4,h.shadow.normalBias=.02,s.add(h),s.add(h.target);let xt=u((U,B,H=nt)=>H.map(([te,q])=>{let K=U.make();return K.position.set(U.at[0]+te,U.at[1],U.at[2]+q),B.add(K),K.updateMatrixWorld(!0),K}),"copiesOf"),yt=u(U=>xt(U,a,jL(nt,U.span,g,e.v,Tt)),"overlayCopiesOf"),At=u(U=>U.flatMap(B=>{let H=B.getObjectByName(Wu);return H===void 0?[]:[H]}),"unitParts"),Ot=u(U=>U.drawn.forEach(B=>{let H=B.getObjectByName(Sy),te=B.getObjectByName(wy);H!==void 0&&(H.rotation.y=U.facing),te!==void 0&&(te.position.y=U.aloft)}),"pose"),ut=new X(0,1,0),Y=new X,Ut=u(U=>U.drawn.forEach(B=>{U.kind==="bottle"?B.rotation.set(U.through*Math.PI*3,0,0):(U.kind==="arrow"||U.kind==="bullet")&&B.quaternion.setFromUnitVectors(ut,Y.set(...U.heading).normalize()),U.kind==="bullet"&&B.scale.set(1,Math.min(1,Math.max(.01,U.through*10)),1)}),"tumble"),ht=u(U=>{let B=new Ht;if(U==="arrow"){let H=new Ze(k,V);H.position.y=.04,B.add(new Ze(D,$),H)}else if(U==="bullet"){let H=new Ze(F,j);H.position.y=-.045,B.add(H)}else if(U==="shell")B.add(new Ze(ce,V));else{let H=new Ze(re,ae);H.position.y=.02,B.add(new Ze(ne,Z),H)}return B},"shotMade"),et=u(U=>{let B=Jx(U.through,U.seed),H=Math.max(0,1-U.through*5);U.drawn.forEach(te=>{te.scale.setScalar(Math.max(U.size,1e-4)),te.children.forEach((q,K)=>{if(q.name===v1){q.position.set(0,U.flash??0,0),q.scale.setScalar(Math.max(Fy*H,1e-4)),q.visible=H>0;return}let ue=B[K];if(ue===void 0){q.visible=!1;return}q.position.set(...ue.at),q.scale.setScalar(Math.max(ue.size,1e-4)),q.visible=ue.size>0})})},"shapePuff"),be=u((U,B=!1,H=!1)=>{let te=$w(me,U,B,H);return te.traverse(q=>{q.castShadow=q instanceof Ze}),te},"markerOf"),pt=u(()=>{me.sweepDue&&me.sweep([...[...x.values(),...v.values()].flatMap(({original:U})=>U===void 0?[]:[U]),...[...x.values()].flatMap(({idling:U})=>U===void 0?[]:[U.original])])},"sweep"),Ue=u(U=>{let B=U.unit?.model,H=B===void 0?null:me.rigOf(B);return H!==null&&H.clips.has("idle")?H:null},"idleRig"),We=u((U,B,H)=>{let te=U.original;if(B===null){U.idling=void 0,U.make=()=>te.clone();return}let q=be(U.marker,!1,!0);U.idling={rig:B,original:q,phase:H},U.make=M1(q,!0)},"drawIdling"),N=u(U=>{U.drawn.forEach(B=>{ee.remove(B),fs(B)}),U.drawn=xt(U,ee,Ve)},"redraw"),A=u((U,B)=>{let{idling:H}=U;H!==void 0&&U.drawn.forEach(te=>Gp(te,H.rig,"idle",B+H.phase,S))},"poseIdling");return{render:u(()=>i.render(s,o),"render"),resize:u((U,B,H)=>{i.setPixelRatio(H),i.setSize(U,B,!1),o.aspect=B>0?U/B:1,o.updateProjectionMatrix()},"resize"),setChunk:u((U,B,H)=>{let te=`${U},${B}`,q=new Et;q.setAttribute("position",new _t(H.positions,3)),q.setAttribute("normal",new _t(H.normals,3)),q.setAttribute("color",new _t(H.colours,3)),q.setAttribute("surfacesA",new _t(H.surfacesA,4,!0)),q.setAttribute("surfacesB",new _t(H.surfacesB,4,!0)),q.setAttribute("shore",new _t(H.shore,1,!0)),q.setIndex(new _t(H.indices,1)),q.computeBoundingSphere();let K=f.get(te);K!==void 0&&(K.drawn.forEach(O=>a.remove(O)),K.geometry.dispose());let ue={geometry:q,at:[H.u,0,H.v],make:u(()=>{let O=new Ze(q,l);return O.castShadow=!0,O.receiveShadow=!0,O},"make"),drawn:[]};ue.drawn=xt(ue,a),f.set(te,ue),de.setChunk(H)},"setChunk"),setOverlay:u((U,B,H)=>{let te=`${U},${B}`,q=d.get(te);if(q!==void 0&&(q.drawn.forEach(se=>a.remove(se)),q.geometry.dispose(),d.delete(te)),H===null)return;let K=new Et;K.setAttribute("position",new _t(H.positions,3)),K.setAttribute("normal",new _t(H.normals,3)),K.setAttribute("color",new _t(H.colours,3)),K.computeBoundingSphere(),K.computeBoundingBox();let ue=K.boundingBox,O={geometry:K,span:[H.v+(ue?.min.z??0),H.v+(ue?.max.z??0)],at:[H.u,0,H.v],make:u(()=>{let se=new Ze(K,m);return se.castShadow=!0,se.receiveShadow=!0,se},"make"),drawn:[]};O.drawn=yt(O),d.set(te,O)},"setOverlay"),unitAt:u(U=>(o.updateMatrixWorld(),t1([...x].map(([B,{drawn:H}])=>[B,H]),o,U)),"unitAt"),setMarker:u((U,B,H)=>{let te=x.get(U);if(te?.drawn.forEach(ue=>{ee.remove(ue),fs(ue)}),te?.idling!==void 0&&fs(te.idling.original),te?.faded!==void 0&&Gl(te.faded),x.delete(U),b.delete(U),H===null)return;let q=be(H),K={at:B,marker:H,make:u(()=>q.clone(),"make"),drawn:[],original:q};te?.idling!==void 0&&We(K,Ue(H),te.idling.phase),K.drawn=xt(K,ee,Ve),x.set(U,K),K.idling!==void 0&&(b.add(U),A(K,Re)),pt()},"setMarker"),idle:u((U,B)=>{let{stand:H,start:te,waiting:q}=jw(U,b,K=>{let ue=x.get(K);return ue!==void 0&&Ue(ue.marker)!==null},K=>(x.get(K)?.opacity??1)<1);return Re=B,H.forEach(K=>{let ue=x.get(K);fs(ue.idling.original),We(ue,null,0),N(ue),b.delete(K)}),te.forEach(K=>{let ue=x.get(K);We(ue,Ue(ue.marker),_1(K)),N(ue),b.add(K)}),b.forEach(K=>A(x.get(K),B)),b.size>0||q},"idle"),setWalker:u((U,B)=>{let H=v.get(U);if(H?.drawn.forEach(O=>{ee.remove(O),fs(O)}),H?.original!==void 0&&fs(H.original),H!==void 0&&Gl(H.faded),v.delete(U),B===null)return;let te=B.unit?.model,q=te===void 0?null:me.rigOf(te),K=be(B,!0,q!==null),ue={at:H?.at??[0,0,0],facing:H?.facing??B.unit?.facing??0,aloft:H?.aloft??0,opacity:1,faded:new Map,make:M1(K,q!==null),drawn:[],original:K,rig:q,posed:null};ue.drawn=xt(ue,ee,Ve),Ot(ue),v.set(U,ue),pt()},"setWalker"),placeWalker:u((U,B,H,te=0)=>{let q=v.get(U);q!==void 0&&(q.at=B,q.facing=H,q.aloft=te,q.drawn.forEach((K,ue)=>{let[O,se]=Ve[ue]??[0,0];K.position.set(B[0]+O,B[1],B[2]+se)}),Ot(q))},"placeWalker"),poseWalker:u((U,B,H,te)=>{let q=v.get(U);q===void 0||q.rig===null||(q.posed={role:B,seconds:H,before:te},q.drawn.forEach(K=>Gp(K,q.rig,B,H,S,te)))},"poseWalker"),rigFacts:u(U=>{let{unit:B}=U,H=B?.model===void 0?null:me.rigOf(B.model);return B===null||H===null?null:y1(H,Yw(B))},"rigFacts"),jointAt:u((U,B,H)=>{let te=v.get(U);return te===void 0||te.rig===null?null:KL(te.drawn[0],B,H,Ve[0]??[0,0])},"jointAt"),shot:u((U,B,H=0,te="bottle",q=[0,-1,0])=>{let K=I.get(U);if(B===null){K?.drawn.forEach(O=>ee.remove(O)),I.delete(U);return}let ue=K??{at:B,kind:te,through:H,heading:q,make:u(()=>ht(te),"make"),drawn:[]};K===void 0&&(ue.drawn=xt(ue,ee,Ve),I.set(U,ue)),ue.at=B,ue.through=H,ue.heading=q,ue.drawn.forEach((O,se)=>{let[oe,ye]=Ve[se]??[0,0];O.position.set(B[0]+oe,B[1],B[2]+ye)}),Ut(ue)},"shot"),fadeMarker:u((U,B)=>{let H=x.get(U),te=Math.min(1,Math.max(0,B));if(!(H===void 0||te===(H.opacity??1))){if(H.opacity=te,H.faded??=new Map,te===1){Kw(At(H.drawn),H.faded);return}qu(At(H.drawn),te,H.faded)}},"fadeMarker"),wake:u((U,B,H=[])=>{let te=fe.get(U);if(B===null){te?.drawn.forEach(ue=>ee.remove(ue)),te?.shape.dispose(),fe.delete(U);return}let q=new Et;q.setAttribute("position",new _t(Float32Array.from(H),3));let K=te??{at:B,shape:q,make:u(()=>new Ze(K.shape,ve),"make"),drawn:[]};te===void 0?(K.drawn=xt(K,ee,Ve),fe.set(U,K)):(te.shape.dispose(),te.shape=q,te.drawn.forEach(ue=>{ue.geometry=q})),K.at=B,K.drawn.forEach((ue,O)=>{let[se,oe]=Ve[O]??[0,0];ue.position.set(B[0]+se,B[1],B[2]+oe)})},"wake"),puff:u((U,B,H=0,te=1,q=null)=>{let K=M.get(U);if(B===null){K?.drawn.forEach(se=>ee.remove(se)),M.delete(U);return}let ue=XL(U),O=K??{at:B,through:H,seed:ue,size:te,flash:q,make:u(()=>{let se=new Ht;if(Jx(0,ue).forEach(({shade:oe})=>se.add(new Ze(R,y[oe]))),q!==null){let oe=new Ze(w,L);oe.name=v1,se.add(oe)}return se},"make"),drawn:[]};K===void 0&&(O.drawn=xt(O,ee,Ve),M.set(U,O)),O.at=B,O.through=H,O.drawn.forEach((se,oe)=>{let[ye,ge]=Ve[oe]??[0,0];se.position.set(B[0]+ye,B[1],B[2]+ge)}),et(O)},"puff"),fadeWalker:u((U,B)=>{let H=v.get(U),te=Math.min(1,Math.max(0,B));H===void 0||te===H.opacity||(H.opacity=te,qu(H.drawn,te,H.faded))},"fadeWalker"),setYields:u(U=>{gt?.drawn.forEach(B=>he.remove(B)),gt=null,pe.set(U)!==null&&(gt={at:[0,0,0],make:u(()=>pe.make(),"make"),drawn:[]},gt.drawn=xt(gt,he))},"setYields"),view:u((U,B,H=e)=>{let[te,q]=U.focus,[K,ue,O]=Wl(U,B),se=ZL(U,H),{near:oe,far:ye}=se;o.position.set(K,ue,O),o.lookAt(te,B,q),o.far=ye*1.2,o.near=Math.max(.1,U.distance*.02),o.updateProjectionMatrix(),$e.near=oe,$e.far=ye;let ge=U.distance*2.2,_e=h.shadow.camera;h.position.set(te+30,B+40,q+20),h.target.position.set(te,B,q),_e.left=-ge,_e.right=ge,_e.top=ge,_e.bottom=-ge,_e.near=Math.max(.5,w1-ge*1.6),_e.far=w1+ge*1.6,_e.updateProjectionMatrix(),de.follow(te,q,ye*2.2,h.position.clone().sub(h.target.position)),Ie.follow(te,q,ye*2.2),de.pastThePoles(H.v!==null),Ie.pastThePoles(H.v!==null),m.clippingPlanes=H.v===null?_:null,Tt=H.v===null;let Fe=se.land,je=`${Fe.join(";")}${Tt?" stopped":""}`,xe=se.markers,Ge=xe.join(";");je!==rt&&(nt=Fe,rt=je,f.forEach(Le=>{Le.drawn.forEach(Me=>a.remove(Me)),Le.drawn=xt(Le,a)}),d.forEach(Le=>{Le.drawn.forEach(Me=>a.remove(Me)),Le.drawn=yt(Le)}),gt!==null&&(gt.drawn.forEach(Le=>he.remove(Le)),gt.drawn=xt(gt,he))),pe.lean(U.pitch),Ge!==Rt&&(Ve=xe,Rt=Ge,[...x.values(),...v.values(),...M.values(),...fe.values(),...I.values()].forEach(Le=>{Le.drawn.forEach(Me=>{ee.remove(Me),fs(Me)}),Le.drawn=xt(Le,ee,Ve)}),v.forEach(Ot),v.forEach(({drawn:Le,rig:Me,posed:mt})=>{Me!==null&&mt!==null&&Le.forEach(Qt=>Gp(Qt,Me,mt.role,mt.seconds,S,mt.before))}),b.forEach(Le=>{let Me=x.get(Le);Me!==void 0&&A(Me,Re)}),M.forEach(et),I.forEach(Ut),v.forEach(Le=>{Le.opacity<1&&qu(Le.drawn,Le.opacity,Le.faded)}),x.forEach(Le=>{Le.faded!==void 0&&(Le.opacity??1)<1&&qu(At(Le.drawn),Le.opacity??1,Le.faded)}))},"view"),loadModels:u(async(U,B)=>{await Iw(U,(H,te,q)=>{if(ct){te.parts.forEach(({geometry:ue,map:O})=>{ue.dispose(),O?.dispose()});return}let K=Ip(U,H);me.addModel(K,te),B(K,q)},(H,te)=>console.warn(`The 3D map's model ${Ip(U,H)}:`,te),(H,te,q)=>{let K=Ip(U,H);ct||(me.addRig(K,te),me.rigOf(K)===te&&B(K,q))})},"loadModels"),stats:u(()=>({drawCalls:i.info.render.calls,triangles:i.info.render.triangles,geometries:i.info.memory.geometries}),"stats"),dispose:u(()=>{ct=!0,f.forEach(({geometry:U})=>U.dispose()),f.clear(),d.forEach(({geometry:U})=>U.dispose()),d.clear(),m.dispose(),x.forEach(({faded:U,drawn:B,idling:H})=>{U!==void 0&&Gl(U),[...B,...H===void 0?[]:[H.original]].forEach(fs)}),x.clear(),b.clear(),v.forEach(({faded:U,drawn:B,original:H})=>{Gl(U),[...B,...H===void 0?[]:[H]].forEach(fs)}),v.clear(),M.clear(),fe.forEach(({shape:U})=>U.dispose()),fe.clear(),ve.dispose(),R.dispose(),y.forEach(U=>U.dispose()),I.clear(),ne.dispose(),Z.dispose(),re.dispose(),ae.dispose(),w.dispose(),L.dispose(),D.dispose(),k.dispose(),$.dispose(),F.dispose(),j.dispose(),ce.dispose(),V.dispose(),me.dispose(),pe.dispose(),de.dispose(),Ie.dispose(),l.dispose(),c.dispose(),i.dispose()},"dispose")}},"createStage");var ky=.25,ba={bottle:{flight:350,arc:ky,hit:1,muzzle:0,burst:!1},arrow:{flight:450,arc:.2,hit:.3,muzzle:0,burst:!1},bullet:{flight:80,arc:0,hit:.35,muzzle:.35,burst:!1},shell:{flight:700,arc:.35,hit:1.6,muzzle:.8,burst:!0}},Hp=u(r=>r.kind??"bottle","kindOf"),QL=.06,zy=.05,Gy=500,T1=400,A1=u(r=>ba[r].flight+Gy,"shotOver"),R1=u((r,e,t)=>r.flatMap(({at:n,joint:i,kind:s},o)=>Array.from({length:Math.max(1,e)},(a,l)=>({figure:l,shot:o,joint:i,leaves:n+l*t,at:n,kind:Hp({kind:s})}))).sort((n,i)=>n.leaves-i.leaves),"shotTimes"),C1=u((r,e)=>e===null?[...r]:r.filter(({at:t})=>t<e),"shotsFired"),P1=u((r,e,t,n)=>{let i=e[0]-r[0],s=e[2]-r[2],o=Math.hypot(i,s),a=(t-(Math.max(1,n)-1)/2)*QL;return o===0?[e[0],e[1],e[2]]:[e[0]-s/o*a,e[1],e[2]+i/o*a]},"landsAt"),I1=u((r,e,t,n=ky)=>{let i=Math.min(1,Math.max(0,t)),s=n*Math.hypot(e[0]-r[0],e[2]-r[2])*4*i*(1-i);return[r[0]+(e[0]-r[0])*i,r[1]+(e[1]-r[1])*i+s,r[2]+(e[2]-r[2])*i]},"shotAt"),L1=u((r,e,t,n=ky)=>{let i=Math.min(1,Math.max(0,t)),s=e[0]-r[0],o=e[2]-r[2],a=e[1]-r[1]+n*Math.hypot(s,o)*4*(1-2*i),l=Math.hypot(s,a,o);return l===0?[0,-1,0]:[s/l,a/l,o/l]},"shotHeading");var ps=1/Math.sqrt(3),N1=1.5*ps,eN=u((r,e)=>{let t=-r-e,n=Math.round(r),i=Math.round(e),s=Math.round(t),o=Math.abs(n-r),a=Math.abs(i-e),l=Math.abs(s-t);return o>a&&o>l?n=-i-s:a>l&&(i=-n-s),[n,i]},"roundAxial"),tN=u(({height:r,width:e,wrapsY:t})=>{let n=u((i,s)=>[i+.5+(s&1)*.5,ps+s*N1],"centre");return{topologyId:"hex-odd-r",centre:n,outline:u((i,s)=>{let[o,a]=n(i,s);return[[o,a-ps],[o+.5,a-ps/2],[o+.5,a+ps/2],[o,a+ps],[o-.5,a+ps/2],[o-.5,a-ps/2]]},"outline"),tileAt:u((i,s)=>{let o=i-.5,a=s-ps,[l,c]=eN(o-a*Math.sqrt(3)/3,a*2*Math.sqrt(3)/3);return[l+(c-(c&1))/2,c]},"tileAt"),period:u(()=>({u:e,v:t?r*N1:null}),"period")}},"hexOddRLayout"),D1=tN;var nN=u(({height:r,width:e,wrapsY:t})=>({topologyId:"square",centre:u((n,i)=>[n+.5,i+.5],"centre"),outline:u((n,i)=>[[n,i],[n+1,i],[n+1,i+1],[n,i+1]],"outline"),tileAt:u((n,i)=>[Math.floor(n),Math.floor(i)],"tileAt"),period:u(()=>({u:e,v:t?r:null}),"period")}),"squareLayout"),O1=nN;var wr=Math.SQRT2/2,iN=u(({height:r,width:e,wrapsY:t})=>{let n=u((i,s)=>[(2*i+(s&1)+1)*wr,(s+1)*wr],"centre");return{topologyId:"staggered-iso",centre:n,outline:u((i,s)=>{let[o,a]=n(i,s);return[[o,a-wr],[o+wr,a],[o,a+wr],[o-wr,a]]},"outline"),tileAt:u((i,s)=>{let o=i/wr,a=s/wr,l=Math.floor((o+a)/2-1+.5),c=Math.floor((a-o)/2+.5),h=l+c;return[Math.floor((l-c)/2),h]},"tileAt"),period:u(()=>({u:e*2*wr,v:t?r*wr:null}),"period")}},"staggeredIsoLayout"),U1=iN;var F1={square:O1,"staggered-iso":U1,"hex-odd-r":D1},rN=u(r=>{if(!Object.prototype.hasOwnProperty.call(F1,r.topologyId))throw new Error(`No ground layout for the ${r.topologyId} grid.`);if(r.wrapsY&&r.topologyId!=="square"&&r.height%2!==0)throw new Error(`The ${r.topologyId} grid can't wrap over the poles with an odd number of rows (${r.height}).`);return F1[r.topologyId](r)},"groundLayoutFor"),B1=rN;var Zu=u(r=>{let e=r/1.2;if(e>=1)return 0;let t=1-e;return t*t*t*t*(4*e+1)},"weight");var Wp=.65,Vy=u(r=>{let e=u(t=>{let n=parseInt(r.slice(t,t+2),16)/255;return n<=.04045?n/12.92:((n+.055)/1.055)**2.4},"channel");return[e(1),e(3),e(5)]},"linear"),ms=.22,Xp=.12,Hy={low:.2,high:.5},k1=u((r,e,t,n,i,s,o,a,l)=>{let c=s-t,h=o-n,f=c*c+h*h,d=f===0?0:Math.max(0,Math.min(1,((r-t)*c+(e-n)*h)/f)),m=Zu(Math.hypot(r-t-c*d,e-n-h*d)),g=1-d;return m===0?-1/0:m*m*(i+(a-i)*(1-g*g*g)+l)},"halfRidge"),Ju=u((r,e,t,n)=>{let i=Math.imul(r,374761393)+Math.imul(e,668265263)+Math.imul(t,2246822519)+Math.imul(n,3266489917)|0;return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967296},"chance"),sN=u((r,e,t)=>({u:(Ju(r,e,t,1)*2-1)*ms,v:(Ju(r,e,t,2)*2-1)*ms,scale:.75+Ju(r,e,t,3)*.5}),"peakOf"),oN=u(({layout:r,ranges:e=!0,seed:t=1,source:n})=>{let{width:i,height:s,wrapsY:o}=n,a=r.period(),l=ai([Mr({cell:.7,period:a,seed:t}),Mr({cell:.35,period:a,seed:t+1}),Mr({cell:.17,period:a,seed:t+2})]),c=ai([Mr({cell:.45,period:a,seed:t+3}),Mr({cell:.22,period:a,seed:t+4})]),h=u((V,ne)=>1-2*Math.abs(c(V,ne)),"ridged"),f=Mr({cell:.8,period:a,seed:t+5}),d=Mr({cell:.8,period:a,seed:t+6}),m={flat:null,rolling:"rolling",ridged:"ridged",peaked:"ridged"},g=[],_=[],x=[],b=[],v=[],S=u((V,ne)=>{let Z=(V%i+i)%i;return!o&&(ne<0||ne>=s)?null:(ne%s+s)%s*i+Z},"index"),M=u(V=>{let ne=new Array(i*s).fill(1/0),Z=[];V.forEach((re,ae)=>{re&&(ne[ae]=0,Z.push([ae%i,Math.floor(ae/i)]))});for(let[re,ae]of Z){let fe=ne[ae*i+re]??1/0;fe>=vr.reach||n.neighbours(re,ae).forEach(([ve,ee])=>{let me=ee*i+ve;(ne[me]??1/0)>fe+1&&(ne[me]=fe+1,Z.push([ve,ee]))})}return ne},"distancesFromLand"),R=u((V,ne)=>{let Z=n.terrainAt(V,ne);return`${Z}${Z!=="Unknown"&&n.waterAt(V,ne)?" water":""}`},"readAs"),E=u(V=>{if(V!==void 0&&_.length>0&&V.every(([he,pe])=>{let de=S(he,pe);return de===null||_[de]===R(he,pe)}))return[];let ne=[],Z=[],re=[];for(let he=0;he<s;he++)for(let pe=0;pe<i;pe++){let de=n.terrainAt(pe,he);ne.push(de),Z.push(de!=="Unknown"&&n.waterAt(pe,he)),re.push(ea(de))}let ae=M(ne.map((he,pe)=>he!=="Unknown"&&!Z[pe])),fe=ne.map((he,pe)=>`${he}${Z[pe]?" water":""}`),ve=[];fe.forEach((he,pe)=>{_[pe]!==he&&ve.push([pe%i,Math.floor(pe/i)])}),_=fe,g=re.map((he,pe)=>{let de=he===xp,Ie=pe%i,$e=Math.floor(pe/i),Re=sN(Ie,$e,t);if(!Z[pe])return{relief:he.relief,colour:Vy(he.colour),surface:Zn.indexOf(he.surface),water:!1,unknown:de,peak:Re};let nt=Math.min(ae[pe]??1/0,vr.reach),rt=vr.shore+(vr.deep-vr.shore)*Math.max(0,nt-1)/Math.max(1,vr.reach-1);return{relief:{...he.relief,base:rt},colour:Vy(he.colour),surface:Zn.indexOf("sand"),water:!0,unknown:de,peak:Re}});let ee=v,me=new Map(ve.map(([he,pe])=>[`${he},${pe}`,[he,pe]]));return v=g.map(({relief:he,unknown:pe},de)=>!pe&&!Z[de]&&he.shape==="peaked"),ve.some(([he,pe])=>{let de=pe*i+he;return v[de]===!0||ee[de]===!0})&&([x,b]=$()),ve.forEach(([he,pe])=>{let de=pe*i+he;v[de]!==!0&&ee[de]!==!0||n.neighbours(he,pe).forEach(([Ie,$e])=>{let Re=S(Ie,$e);Re!==null&&v[Re]===!0&&me.set(`${Ie},${$e}`,[Ie,$e])})}),[...me.values()]},"refresh"),y=u(V=>{let[ne,Z]=r.centre(0,V);return Math.max(...r.outline(0,V).map(([re,ae])=>Math.hypot(re-ne,ae-Z)))},"cornerOf"),w=u((V,ne)=>{let[Z,re]=r.centre(0,V),ae=[];for(let fe=-8;fe<=8;fe++)for(let ve=-6;ve<=6;ve++){let[ee,me]=r.centre(ve,V+fe);Math.hypot(ee-Z,me-re)<ne+1e-9&&ae.push([ve,fe])}return ae},"offsetsWithin"),L=u((V,ne,Z,re)=>{if(i>=6&&(!o||s>=6)){let he=u((Ie,$e)=>{let Re=(Ie%$e+$e)%$e;return Re*2<$e?Re:Re-$e},"nearest"),pe=he(Z-V,i),de=o?he(re-ne,s):re-ne;return pe===0&&de===0?[]:[[pe,de]]}let ae=u((he,pe)=>{let de=(he%pe+pe)%pe;return de===0?[0]:[de,de-pe]},"copies"),[fe,ve]=r.centre(V,ne),ee=ae(Z-V,i).flatMap(he=>(o?ae(re-ne,s):[re-ne]).flatMap(pe=>{if(he===0&&pe===0)return[];let[de,Ie]=r.centre(V+he,ne+pe);return[[he,pe,Math.hypot(de-fe,Ie-ve)]]})),me=Math.min(...ee.map(([,,he])=>he));return ee.filter(([,,he])=>he<=me+1e-9).map(([he,pe])=>[he,pe])},"stepsTo"),I=Math.max(...[0,1].flatMap(V=>{let[ne,Z]=r.centre(0,V);return n.neighbours(0,V).flatMap(([re,ae])=>L(0,V,re,ae).map(([fe,ve])=>{let[ee,me]=r.centre(fe,V+ve);return Math.hypot(ee-ne,me-Z)}))}),1),D=[0,1].map(V=>{let[ne,Z]=r.centre(0,V);return w(V,I+ms*Math.SQRT2+Xp+1.2+Math.max(y(0),y(1))).flatMap(([re,ae])=>{let[fe,ve]=r.centre(re,V+ae);return[re,ae,fe-ne,ve-Z]})}),k=u((V,ne,Z,re,ae,fe)=>{let ve=ae-Z,ee=fe-re,me=ve*ve+ee*ee,he=me===0?0:Math.max(0,Math.min(1,((V-Z)*ve+(ne-re)*ee)/me));return Math.hypot(V-Z-ve*he,ne-re-ee*he)},"toSegment"),$=u(()=>{let V=g.map(()=>[]),ne=g.map(()=>[]),Z=Math.max(y(0),y(1));return e?(g.forEach((re,ae)=>{if(v[ae]!==!0)return;let fe=ae%i,ve=Math.floor(ae/i),[ee,me]=r.centre(fe,ve),he=new Map;n.neighbours(fe,ve).forEach(([pe,de])=>{let Ie=S(pe,de);Ie!==null&&v[Ie]===!0&&L(fe,ve,pe,de).forEach(([$e,Re])=>he.set(`${$e},${Re}`,[$e,Re,Ie]))}),he.forEach(([pe,de,Ie])=>{let $e=g[Ie];if($e===void 0||de<0||de===0&&pe<0)return;let[Re,nt]=r.centre(fe+pe,ve+de),{peak:rt,relief:Ve}=re,{peak:Rt,relief:Tt}=$e,gt=rt.u,ct=rt.v,xt=Re-ee+Rt.u,yt=nt-me+Rt.v,At=Ve.base*Wp*rt.scale,Ot=Tt.base*Wp*Rt.scale,ut=Math.hypot(xt-gt,yt-ct)||1,Y=16+(de+2)*5+(pe+2),Ut=(Ju(fe,ve,t,Y)*2-1)*Xp,ht=Hy.low+(Hy.high-Hy.low)*Ju(fe,ve,t,Y+32),et=(gt+xt)/2-(yt-ct)/ut*Ut,be=(ct+yt)/2+(xt-gt)/ut*Ut,pt=Math.max(Math.hypot(gt-et,ct-be),Math.hypot(xt-et,yt-be))+1.2,Ue={au:gt,av:ct,ah:At,mu:et,mv:be,mh:ht*Math.min(At,Ot),bu:xt,bv:yt,bh:Ot,roughness:(Ve.roughness+Tt.roughness)/2,cu:et,cv:be,reach:pt*pt},We=(Math.sqrt(Ue.reach)+Z)**2,N=D[ve&1]??[];for(let A=0;A<N.length;A+=4){let J=N[A+2],U=N[A+3];if((J-et)**2+(U-be)**2>=We||Math.min(k(J,U,gt,ct,et,be),k(J,U,et,be,xt,yt))>=1.2+Z)continue;let B=S(fe+N[A],ve+N[A+1]);B!==null&&(V[B]?.push(Ue),ne[B]?.push(J,U))}})}),[V,ne]):[V,ne]},"ranges"),F=u(V=>{let[ne,Z]=r.centre(0,V),re=Math.max(...r.outline(0,V).map(([fe,ve])=>Math.hypot(fe-ne,ve-Z))),ae=[];for(let fe=-6;fe<=6;fe++)for(let ve=-4;ve<=4;ve++){let[ee,me]=r.centre(ve,V+fe);Math.hypot(ee-ne,me-Z)<1.2+re+ms*Math.SQRT2+1e-9&&ae.push([ve,fe])}return ae},"offsetsFor"),j=[F(0),F(1)],ce=u((V,ne)=>{let[Z,re]=r.tileAt(V,ne),ae=S(Z,re),fe=ae===null?null:g[ae]??null;if(fe===null||fe.unknown)return{height:0,colour:Vy(xp.colour),surfaces:Zn.map(()=>0),shore:0,unseen:!0};let ve=null,ee=null,me=u(At=>At==="rolling"?ve??=l(V,ne):ee??=h(V,ne),"noiseHere"),he=0,pe=0,de=0,Ie=0,$e=Zn.map(()=>0),Re=0,nt=0,rt=0,Ve=0,Rt=0,Tt=V+ms*f(V,ne),gt=ne+ms*d(V,ne);(j[re&1]??[]).forEach(([At,Ot])=>{let ut=Z+At,Y=re+Ot,Ut=S(ut,Y);if(Ut===null)return;let ht=g[Ut];if(ht===void 0)return;let[et,be]=r.centre(ut,Y),{relief:pt,colour:Ue,peak:We,surface:N}=ht,A=Zu(Math.hypot(V-et,ne-be)),J=pt.shape==="peaked"?Zu(Math.hypot(V-et-We.u,ne-be-We.v)):0,U=Zu(Math.hypot(Tt-et,gt-be))**3;if(A>0){let B=m[pt.shape],H=B===null?0:pt.roughness*me(B);pt.shape==="peaked"?pe+=A*(pt.base*(1-Wp)+H*.5):pe+=A*(pt.base+H),he+=A}if(J>0){let B=pt.roughness*me("ridged");de+=J*J*(pt.base*Wp*We.scale+B*.5)}Ie+=U,ht.unknown||($e[N]=($e[N]??0)+U,Re+=U,nt+=ht.water?U:0),rt+=U*Ue[0],Ve+=U*Ue[1],Rt+=U*Ue[2]});let ct=ae===null?[]:x[ae]??[],xt=ae===null?[]:b[ae]??[],yt=de;if(ct.length>0){let[At,Ot]=r.centre(Z,re);ct.forEach((ut,Y)=>{let Ut=V-At+(xt[Y*2]??0),ht=ne-Ot+(xt[Y*2+1]??0);if((Ut-ut.cu)**2+(ht-ut.cv)**2>=ut.reach)return;let et=ut.roughness*me("ridged")*.5;yt=Math.max(yt,k1(Ut,ht,ut.au,ut.av,ut.ah,ut.mu,ut.mv,ut.mh,et),k1(Ut,ht,ut.bu,ut.bv,ut.bh,ut.mu,ut.mv,ut.mh,et))})}return{height:(he>0?pe/he:0)+yt,colour:Ie>0?[rt/Ie,Ve/Ie,Rt/Ie]:fe.colour,surfaces:Re>0?$e.map(At=>At/Re):Zn.map((At,Ot)=>Ot===fe.surface?1:0),shore:Re>0?nt/Re:fe.water?1:0,unseen:!1}},"sample");return E(),{sample:ce,height:u((V,ne)=>ce(V,ne).height,"height"),refresh:E}},"createRelief"),z1=oN;var G1=u((r,e,{size:t=16,perUnit:n=8}={})=>{let{u:i,v:s}=r.period(),o=s??Math.max(...r.outline(0,e-1).map(([,f])=>f),...r.outline(1,e-1).map(([,f])=>f)),a=Math.max(1,Math.round(i/t)),l=Math.max(1,Math.round(o/t)),c=Math.max(2,Math.round(i/a*n)),h=Math.max(2,Math.round(o/l*n));return{chunksU:a,chunksV:l,stepsU:c,stepsV:h,spacingU:i/a/c,spacingV:o/l/h}},"chunkGrid"),V1=u((r,e,t,n)=>{let{stepsU:i,stepsV:s,spacingU:o,spacingV:a}=r,l=t*i,c=n*s,h=u((L,I)=>[L*o,I*a],"at"),f=i+3,d=new Float64Array(f*(s+3)),m=(i+1)*(s+1),g=new Float32Array(m*3),_=new Uint8Array(m*4),x=new Uint8Array(m*4),b=new Uint8Array(m),v=new Float32Array(m);for(let L=-1;L<=s+1;L++)for(let I=-1;I<=i+1;I++){let D=e.sample(...h(l+I,c+L)),{height:k,colour:$}=D;if(d[(L+1)*f+(I+1)]=k,I>=0&&I<=i&&L>=0&&L<=s){let F=L*(i+1)+I;g.set($,F*3),D.surfaces.forEach((j,ce)=>{(ce<4?_:x)[F*4+ce%4]=Math.round(j*255)}),b[F]=Math.round(D.shore*255),v[F]=D.unseen?1:0}}let S=u((L,I)=>d[(I+1)*f+(L+1)]??0,"height"),M=new Float32Array(m*3),R=new Float32Array(m*3),[E,y]=h(l,c);for(let L=0;L<=s;L++)for(let I=0;I<=i;I++){let D=L*(i+1)+I,[k,$]=h(l+I,c+L),F=(S(I+1,L)-S(I-1,L))/(2*o),j=(S(I,L+1)-S(I,L-1))/(2*a),ce=Math.hypot(F,1,j);M[D*3]=k-E,M[D*3+1]=S(I,L),M[D*3+2]=$-y,R[D*3]=-F/ce,R[D*3+1]=1/ce,R[D*3+2]=-j/ce}let w=new Uint32Array(i*s*6);for(let L=0;L<s;L++)for(let I=0;I<i;I++){let D=L*(i+1)+I,k=D+1,$=D+i+1,F=$+1,j=(L*i+I)*6;w.set([D,$,k,k,$,F],j)}return{u:E,v:y,positions:M,normals:R,colours:g,surfacesA:_,surfacesB:x,shore:b,unseen:v,indices:w}},"buildChunk"),Wy=u((r,e,t,n)=>{let i=r.stepsU*r.spacingU,s=r.stepsV*r.spacingV,o=e.period().v!==null,a=new Set;return t.forEach(([l,c])=>{let[h,f]=e.centre(l,c);for(let d=Math.floor((h-n)/i);d<=Math.floor((h+n)/i);d++)for(let m=Math.floor((f-n)/s);m<=Math.floor((f+n)/s);m++){if(!o&&(m<0||m>=r.chunksV))continue;let g=(d%r.chunksU+r.chunksU)%r.chunksU,_=o?(m%r.chunksV+r.chunksV)%r.chunksV:m;a.add(`${g},${_}`)}}),[...a].map(l=>l.split(",").map(Number))},"chunksNear");var di=u((r,e,t,n,i)=>({kind:r,count:e,size:t,colour:n,detail:i}),"plant"),H1={Forest:{plants:[di("conifer",8,[.95,1.4],"#2c5230","#4a3424")],conifers:[.15,.95],canopy:"woods"},Jungle:{plants:[di("broadleaf",7,[1.05,1.55],"#2b6a2a","#4d3a26"),di("palm",2,[.9,1.2],"#3f8a34","#6b5236")],canopy:"woods"},Swamp:{plants:[di("reeds",7,[.8,1.2],"#7a8a4a","#5a6a38"),di("deadTree",2,[.8,1.1],"#4a4036","#4a4036")],canopy:"swamp"},Grassland:{plants:[di("bush",2,[.8,1.2],"#4e7a32","#4e7a32")]},Plains:{plants:[di("shrub",3,[.7,1.1],"#7a7a3a","#6a5a36")]},Tundra:{plants:[di("scrub",4,[.7,1.1],"#6a6a4e","#5a5444")]},Hills:{plants:[di("shrub",2,[.8,1.1],"#5e6e36","#5e5036"),di("rock",1,[.8,1.2],"#7d756a","#7d756a")]},Mountains:{plants:[di("rock",3,[.9,1.4],"#77706a","#77706a")]},Desert:{plants:[di("rock",2,[.7,1.1],"#a8936a","#a8936a"),di("cactus",1,[.8,1.1],"#5a7a3e","#5a7a3e")]}},$l=u(r=>Object.prototype.hasOwnProperty.call(H1,r)?H1[r]:null,"growthOf");var W1=["Ocean"],aN=["Mountains"],lN=["Mine","Fortress","Airbase"],cN=["River"],Cn=u((r,e)=>(r.improvements??[]).some(({_:t})=>t===e),"has"),uN=["Irrigation","Farmland","Fortress","Airbase"],X1=u(r=>r.city||uN.some(e=>Cn(r,e))?null:$l(r.terrain?._??"Unknown")?.canopy??null,"woodsOf"),hN=u((r,e)=>{if(r.city){let d=r.city;return{road:null,railroad:null,irrigation:null,mine:!1,fortress:!1,airbase:!1,pollution:!1,specials:[],hut:!1,terrain:r.terrain?._??"Unknown",vegetation:!1,woods:[],paths:[],city:rw(ib(String(d.id??d.name??"")),d.growth?.size??1,e.filter(({tile:m})=>Cn(m,"Road")&&(Cn(r,"Road")||Cn(m,"Railroad"))).map(({offset:m})=>m),e.filter(({tile:m})=>W1.includes(m.terrain?._??"")).map(({offset:m})=>m)),suburbs:[],beside:[]}}let t=Cn(r,"Road"),n=Cn(r,"Railroad"),i=t?e.filter(d=>Cn(d.tile,"Road")).map(({offset:d})=>d):[],s=t?e.filter(d=>!!d.tile.city||Cn(d.tile,"Railroad")).map(({offset:d})=>d):[],o=u((d,m)=>d[0]===m[0]&&d[1]===m[1],"same"),a=i.length===0&&s.length===0,l={road:t?{joins:i.filter(d=>!n||!s.some(m=>o(m,d))),alone:a&&!n}:null,railroad:t&&n?{joins:s,alone:a}:null,irrigation:Cn(r,"Farmland")?"farmland":Cn(r,"Irrigation")?"irrigation":null,mine:Cn(r,"Mine"),fortress:Cn(r,"Fortress"),airbase:Cn(r,"Airbase"),pollution:Cn(r,"Pollution"),specials:(r.terrain?.features??[]).map(({_:d})=>d).filter(d=>!cN.includes(d)).map(d=>[r.terrain._,d]),hut:r.goodyHut!==null&&r.goodyHut!==void 0,terrain:r.terrain?._??"Unknown",vegetation:$l(r.terrain?._??"Unknown")!==null,woods:[],paths:[],city:null,suburbs:[],beside:[]},c=X1(r),h=r.terrain?._??"Unknown";return r.isWater!==!0&&!W1.includes(h)&&h!=="Unknown"&&!aN.includes(h)&&!lN.some(d=>Cn(r,d))&&(l.suburbs=e.flatMap(({offset:d,tile:{city:m}})=>{let g=m?aw(m.growth?.size??1):0;return m&&g>0?[{seed:ib(String(m.id??m.name??"")),steps:g,city:d}]:[]}).sort((d,m)=>d.seed-m.seed||d.city[0]-m.city[0]||d.city[1]-m.city[1])),l.suburbs.length>0&&(l.beside=e.filter(({tile:{city:d}})=>!!d).map(({offset:d})=>d)),c!==null&&(l.woods=e.filter(d=>X1(d.tile)===c).map(({offset:d})=>d)),(c!==null||l.suburbs.length>0)&&(l.paths=e.filter(d=>!!d.tile.city||Cn(d.tile,"Road")).map(({offset:d})=>d)),l.road===null&&l.irrigation===null&&!l.mine&&!l.fortress&&!l.airbase&&!l.pollution&&l.specials.length===0&&!l.hut&&!l.vegetation&&l.suburbs.length===0?null:l},"overlayFor"),q1=hN;var Gt=u((r,e,t,n)=>({shape:r,colour:e,count:t,...n===void 0?{}:{detail:n}}),"look"),Y1={Coal:Gt("rocks","#26262a",4),Gold:Gt("rocks","#d8b13a",3),Gems:Gt("rocks","#59c2d6",4,"#b05ad0"),Iron:Gt("rocks","#8a5a44",4),Wheat:Gt("crop","#d9b84a",5,"#a88a2c"),Spice:Gt("crop","#c0452e",4,"#5d7a2a"),Wine:Gt("crop","#6a2c5e",4,"#5d7a2a"),Silk:Gt("crop","#e9e2cf",3,"#4f7a34"),Fruit:Gt("crop","#e08a2a",4,"#3f7a2a"),Horse:Gt("animal","#7a4e2a",2,"#3a2a1c"),Buffalo:Gt("animal","#4a3424",3,"#2a1e16"),Game:Gt("animal","#a9835a",2,"#5a4430"),"Tundra:Game":Gt("animal","#8f7e66",2,"#e8e2d6"),Furs:Gt("animal","#b0602a",2,"#f0e8dc"),Ivory:Gt("animal","#8a8580",1,"#f2ead8"),Seal:Gt("animal","#6e7072",2,"#4a4c4e"),Pheasant:Gt("bird","#8a3a22",2,"#3d6a3a"),Fish:Gt("fish","#b8c4cc",5),Whales:Gt("whale","#3a4048",1),Oil:Gt("derrick","#222224",1,"#121214"),Oasis:Gt("oasis","#3f7a32",3,"#3f86a8"),Peat:Gt("peat","#4a3624",4),Shield:Gt("logs","#7a5532",4,"#c9a47a")},dN=Gt("cairn","#9a9690",5),$1=u((r,e)=>{let t=u(n=>Object.prototype.hasOwnProperty.call(Y1,n)?Y1[n]:void 0,"own");return t(`${r}:${e}`)??t(e)??dN},"specialLook");var Jy=u(()=>({positions:[],normals:[],colours:[]}),"soup"),zn={field:.01,road:.014,ballast:.016,rail:.02,smear:.024},Zl=.06,K1="#8c7a58",Z1="#5f5953",fN="#a9abae",pN="#5e432b",mN="#4f87b0",gN="#7da33f",xN=["#c2b448","#8fae3e"],J1="#9d968a",bN="#4a4c50",$y="#6b4a2e",yN="#7a6a58",_N="#b89a5a",vN="#c9b48e",j1="#34322a",kn=new dr(1,1,1),Jl=new Yn(.5,.5,1,8),jy=new Wi(.5,1,8),aE=new Wi(.5,1,4),Kl=new Ws(.5,8,6),ju=new Yn(.5,.5,1,4,1,!0),Qu=new Wi(.5,1,5,1,!0),qp=new Ws(.5,5,3),Xy={mine:[3,.72],hut:[11,.64],special:u(r=>[r+1,.72],"special")},MN=.05,lE=.22,Q1=72,Ti=u((r,e)=>{let t=Math.imul(r^Math.imul(e+1,2654435761),2246822507);return t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,(t>>>0)/4294967296},"fraction"),Qy=.05,eE=new Map,Yp=u(r=>{let e=eE.get(r);if(e===void 0){let{r:t,g:n,b:i}=new Se(r);e=[t,n,i],eE.set(r,e)}return e},"colourOf"),tE=new WeakMap,SN=u(r=>{let e=tE.get(r);if(e===void 0){let t=r.index===null?r:r.toNonIndexed();e={positions:new Float32Array(t.getAttribute("position").array),normals:new Float32Array(t.getAttribute("normal").array)},tE.set(r,e),t!==r&&t.dispose()}return e},"trianglesOf"),wN=new Xe,EN=new Ye,TN=new X,AN=new Kt,RN=new ri,CN=new X,Nt,cE,qt,i_=class i_{constructor(e,t){G(this,Nt);this.lines=[];this.runs=[];this.past=[];this.taken=[];this.grown=[];this.soup=e,this.place=t}ground(e,t,n=!1){let i=this.place.heightAt(e,t);return n?Math.max(0,i):i}strip(e,t,n,i,s){let o=Yp(i),a=Math.hypot(t[0]-e[0],t[1]-e[1]);if(a===0)return;let l=Math.max(1,Math.ceil(a/Zl)),c=Math.max(1,Math.ceil(n/Zl)),h=[-(t[1]-e[1])/a*n,(t[0]-e[0])/a*n],f=u((d,m)=>[e[0]+(t[0]-e[0])*d+h[0]*(m-.5),e[1]+(t[1]-e[1])*d+h[1]*(m-.5)],"at");for(let d=0;d<l;d++)for(let m=0;m<c;m++){let[g,_]=f(d/l,(m+1)/c),[x,b]=f((d+1)/l,(m+1)/c),[v,S]=f(d/l,m/c),[M,R]=f((d+1)/l,m/c);T(this,Nt,qt).call(this,g,_,s,o),T(this,Nt,qt).call(this,x,b,s,o),T(this,Nt,qt).call(this,v,S,s,o),T(this,Nt,qt).call(this,x,b,s,o),T(this,Nt,qt).call(this,M,R,s,o),T(this,Nt,qt).call(this,v,S,s,o)}}ribbon(e,t,n,i,s){let o=Yp(n),a=e.map((l,c)=>{let h=e[c-1]??l,f=e[c+1]??l,[d,m]=s?.[c]??[f[0]-h[0],f[1]-h[1]],g=Math.hypot(d,m);return g===0?[0,0]:[-m/g*t,d/g*t]});for(let l=0;l+1<e.length;l++){let c=e[l],h=e[l+1],f=a[l],d=a[l+1],m=Math.hypot(h[0]-c[0],h[1]-c[1]);if(m===0)continue;let g=Math.max(1,Math.ceil(m/Zl)),_=Math.max(1,Math.ceil(t/Zl)),x=u((b,v)=>[c[0]+(h[0]-c[0])*b+(f[0]+(d[0]-f[0])*b)*(v-.5),c[1]+(h[1]-c[1])*b+(f[1]+(d[1]-f[1])*b)*(v-.5)],"at");for(let b=0;b<g;b++)for(let v=0;v<_;v++){let[S,M]=x(b/g,(v+1)/_),[R,E]=x((b+1)/g,(v+1)/_),[y,w]=x(b/g,v/_),[L,I]=x((b+1)/g,v/_);T(this,Nt,qt).call(this,S,M,i,o),T(this,Nt,qt).call(this,R,E,i,o),T(this,Nt,qt).call(this,y,w,i,o),T(this,Nt,qt).call(this,R,E,i,o),T(this,Nt,qt).call(this,L,I,i,o),T(this,Nt,qt).call(this,y,w,i,o)}}}disc(e,t,n,i,s=12){let o=Yp(n),[a,l]=e,c=Math.max(1,Math.ceil(t/Zl)),h=u((f,d)=>{let m=d/s*Math.PI*2,g=f/c*t;return[a+Math.cos(m)*g,l+Math.sin(m)*g]},"at");for(let f=0;f<c;f++)for(let d=0;d<s;d++){let m=h(f+1,d),g=h(f+1,d+1);if(f===0)T(this,Nt,qt).call(this,a,l,i,o),T(this,Nt,qt).call(this,...g,i,o),T(this,Nt,qt).call(this,...m,i,o);else{let _=h(f,d),x=h(f,d+1);T(this,Nt,qt).call(this,..._,i,o),T(this,Nt,qt).call(this,...x,i,o),T(this,Nt,qt).call(this,...m,i,o),T(this,Nt,qt).call(this,...x,i,o),T(this,Nt,qt).call(this,...g,i,o),T(this,Nt,qt).call(this,...m,i,o)}}}solid(e,t,n,i,s=[0,0,0]){let{positions:o,normals:a}=SN(e),l=wN.compose(TN.set(...t),AN.setFromEuler(RN.set(...s)),CN.set(...n)),c=l.elements,h=EN.getNormalMatrix(l).elements,[f,d,m]=Yp(i),g=this.soup;for(let _=0;_<o.length;_+=3){let x=o[_],b=o[_+1],v=o[_+2],S=a[_],M=a[_+1],R=a[_+2],E=h[0]*S+h[3]*M+h[6]*R,y=h[1]*S+h[4]*M+h[7]*R,w=h[2]*S+h[5]*M+h[8]*R,L=Math.hypot(E,y,w)||1;g.positions.push(c[0]*x+c[4]*b+c[8]*v+c[12],c[1]*x+c[5]*b+c[9]*v+c[13],c[2]*x+c[6]*b+c[10]*v+c[14]),g.normals.push(E/L,y/L,w/L),g.colours.push(f,d,m)}}spot(e,t){let n=Ti(this.place.seed,e)*Math.PI*2,[i,s]=this.place.centre;return[i+Math.cos(n)*t*this.place.radius,s+Math.sin(n)*t*this.place.radius]}clearance(e,t,n){let[i,s]=this.place.centre,o=Math.hypot(e-i,t-s)-lE-n;return this.lines.forEach(([a,l])=>{o=Math.min(o,qN(e,t,a,l)-MN-n)}),this.taken.forEach(([a,l,c])=>{o=Math.min(o,Math.hypot(e-a,t-l)-c-n)}),o}hasRoom(e,t,n){return this.clearance(e,t,n)>=0}claim(e,t,n){let i=Ti(this.place.seed,e)*Math.PI*2,[s,o]=this.place.centre,a=[s,o],l=-1/0;for(let c of[t,t*.88,t*1.1])for(let h=0;h<Q1;h++){let f=i+h/Q1*Math.PI*2,d=[s+Math.cos(f)*c*this.place.radius,o+Math.sin(f)*c*this.place.radius],m=this.clearance(d[0],d[1],n);if(m>=0)return this.taken.push([d[0],d[1],n]),d;m>l&&(a=d,l=m)}return this.taken.push([a[0],a[1],n]),a}};Nt=new WeakSet,cE=u(function(e,t){let n=Qy,i=(this.place.heightAt(e+n,t)-this.place.heightAt(e-n,t))/(2*n),s=(this.place.heightAt(e,t+n)-this.place.heightAt(e,t-n))/(2*n),o=Math.hypot(i,1,s);return[-i/o,1/o,-s/o]},"#normal"),qt=u(function(e,t,n,i){this.soup.positions.push(e,this.ground(e,t)+n,t),this.soup.normals.push(...T(this,Nt,cE).call(this,e,t)),this.soup.colours.push(...i)},"#point"),u(i_,"Layer");var Ky=i_,Kp=u((r,e)=>{let[t,n]=r.centre,[i,s]=r.toward(e);return[(t+i)/2,(n+s)/2]},"halfway"),e_=u(r=>r.alone||r.joins.length>0,"drawn"),PN=.09,IN=8,Zy=u(([r,e])=>300+(r+3)*7+(e+3),"wayIndex"),Zp=u((r,e)=>{let[t,n]=r.centre,[i,s]=Kp(r,e),o=i-t,a=s-n,l=Math.hypot(o,a);if(l===0)return{points:[[t,n]],ways:[[0,0]]};let c=(Ti(r.seed,Zy(e))*2-1)*PN*l/(4/9),h=[-a/l,o/l],f=[t+o/3+h[0]*c,n+a/3+h[1]*c],d=[t+o*2/3,n+a*2/3],m=Math.max(IN,Math.ceil(l*1.02/Zl)),g=Array.from({length:m+1},(_,x)=>x/m);return{points:g.map(_=>{let x=(1-_)**3,b=3*(1-_)**2*_,v=3*(1-_)*_**2,S=_**3;return[x*t+b*f[0]+v*d[0]+S*i,x*n+b*f[1]+v*d[1]+S*s]}),ways:g.map(_=>{let x=3*(1-_)**2,b=6*(1-_)*_,v=3*_**2,S=x*(f[0]-t)+b*(d[0]-f[0])+v*(i-d[0]),M=x*(f[1]-n)+b*(d[1]-f[1])+v*(s-d[1]),R=Math.hypot(S,M);return R===0?[o/l,a/l]:[S/R,M/R]})}},"roadHalf"),LN=u((r,e)=>{let{place:t}=r;e_(e)&&(e.joins.forEach(n=>{let{points:i,ways:s}=Zp(t,n);r.ribbon(i,.07,K1,zn.road,s)}),r.disc(t.centre,e.alone?.09:.035,K1,zn.road))},"road"),NN=u((r,e)=>{if(!e_(e))return;let{place:t}=r;(e.alone?[[t.centre[0]+.12,t.centre[1]],[t.centre[0]-.12,t.centre[1]]]:e.joins.map(i=>Kp(t,i))).forEach(i=>{let[s,o]=t.centre,a=Math.hypot(i[0]-s,i[1]-o),l=a===0?[0,0]:[-(i[1]-o)/a*.025,(i[0]-s)/a*.025];r.strip(t.centre,i,.1,Z1,zn.ballast);for(let c=.1;c<1;c+=.2){let h=[s+(i[0]-s)*c,o+(i[1]-o)*c];r.strip([h[0]+l[0]*1.8,h[1]+l[1]*1.8],[h[0]-l[0]*1.8,h[1]-l[1]*1.8],.014,pN,zn.ballast+.002)}[1,-1].forEach(c=>r.strip([s+l[0]*c,o+l[1]*c],[i[0]+l[0]*c,i[1]+l[1]*c],.01,fN,zn.rail))}),r.disc(t.centre,.05,Z1,zn.ballast)},"railroad"),qy=.04,DN=u((r,e,t,n,i)=>{let s=i.filter(l=>Math.min(...l.map(([,c])=>c))-Bt<t+n/2&&Math.max(...l.map(([,c])=>c))+Bt>t-n/2).map(l=>[Math.min(...l.map(([c])=>c))-Bt,Math.max(...l.map(([c])=>c))+Bt]).sort((l,c)=>l[0]-c[0]),o=[],a=r;return s.forEach(([l,c])=>{l-a>=qy&&o.push([a,Math.min(l,e)]),a=Math.max(a,c)}),e-a>=qy&&o.push([a,e]),o.filter(([l,c])=>c-l>=qy)},"rowAround"),ON=u((r,e,t)=>{let{centre:n,inner:i}=r.place,s=e==="farmland"?6:4,o=i*.9,a=o*2/s,l=u((c,h,f,d)=>DN(n[0]-o,n[0]+o,c,h,t).forEach(([m,g])=>r.strip([m,c],[g,c],h,f,d)),"across");for(let c=0;c<s;c++)l(n[1]-o+a*(c+.5),a*.8,e==="farmland"?xN[c%2]:gN,zn.field),c>0&&l(n[1]-o+a*c,.016,mN,zn.field+.001)},"fields"),nE=["#9c5a3c","#7d4a36","#6f6a64","#8b6b4a"],iE="#a39a88",UN="#c4b8a2",FN=.045,rE=.86,BN=u((r,e)=>{let{place:t}=r,[n,i]=t.centre,{plaza:s,streets:o,lots:a}=sw(t,e,[n,i+fa]);r.disc(s.at,s.radius,iE,zn.road,16),o.forEach(([l,c])=>r.strip(l,c,Ou,iE,zn.road)),a.forEach(l=>uE(r,l))},"city"),uE=u((r,e)=>{let{at:[t,n],width:i,facing:s,storeys:o}=e,a=[[t,n],...Nl(e)].map(([h,f])=>r.ground(h,f)),l=Math.min(...a)-.005,c=Math.max(...a)+FN*o;r.solid(kn,[t,(l+c)/2,n],[i*rE,c-l,i*rE],UN,[0,s,0]),r.solid(aE,[t,c+i*.2,n],[i*Math.SQRT2,i*.4,i*Math.SQRT2],nE[Math.floor(e.roof*nE.length)],[0,s+Math.PI/4,0])},"house"),kN=u((r,e)=>{if(e.suburbs.length===0)return[];let{place:t}=r,n=u((a,l)=>a[0]===l[0]&&a[1]===l[1],"same"),i=u(a=>{let[l,c]=t.toward(a);return[l,c+fa]},"standOf"),s={runs:[...r.runs],lines:[...r.past],lanes:e.beside.filter(a=>![...e.road?.joins??[],...e.railroad?.joins??[]].some(l=>n(l,a))).map(a=>[[t.centre[0],t.centre[1]],i(a)]),stands:e.beside.map(i),taken:r.taken,ground:u((a,l)=>t.heightAt(a,l),"ground")};return e.suburbs.flatMap(a=>lw(t,a,{...s,others:e.beside.filter(l=>!n(l,a.city)).map(l=>t.toward(l))})).map(a=>(uE(r,a),r.taken.push([a.at[0],a.at[1],a.width/2*Math.SQRT2]),Nl(a)))},"suburbs"),zN=u((r,[e,t])=>{let n=r.ground(e,t);r.solid(kn,[e-.02,n+.05,t],[.01,.11,.01],$y,[0,0,-.3]),r.solid(kn,[e+.02,n+.05,t],[.01,.11,.01],$y,[0,0,.3]),r.solid(Jl,[e,n+.1,t],[.05,.008,.05],"#3a3a3a",[Math.PI/2,0,0]),[[.07,.03],[-.05,.06]].forEach(([i,s])=>{let o=e+i,a=t+s;r.solid(jy,[o,r.ground(o,a)+.02,a],[.07,.04,.07],yN)})},"mine"),GN=u(r=>{let[e,t]=r.place.centre,n=r.place.radius*.62,i=r.ground(e,t);[[0,-n,n*2,.025],[0,n,n*2,.025],[-n,0,.025,n*2],[n,0,.025,n*2]].forEach(([s,o,a,l])=>{let c=e+s,h=t+o;r.solid(kn,[c,Math.max(i,r.ground(c,h))+.02,h],[a,.05,l],J1)}),[[-n,-n],[n,-n],[-n,n],[n,n]].forEach(([s,o])=>{let a=e+s,l=t+o;r.solid(Jl,[a,r.ground(a,l)+.035,l],[.045,.07,.045],J1)})},"fortress"),VN=u(r=>{let[e,t]=r.place.centre,n=r.place.radius*.75,[i,s]=r.claim(5,.6,.08);r.strip([e-n,t+.12],[e+n,t+.12],.12,bN,zn.road+.002),r.strip([e-n*.9,t+.12],[e+n*.9,t+.12],.008,"#e8e8e8",zn.road+.004),r.solid(kn,[i,r.ground(i,s)+.03,s],[.12,.06,.08],"#8a9096")},"airbase"),HN=u(r=>{let e=r.place.radius;r.disc(r.place.centre,e*.55,j1,zn.smear,14),r.disc(r.spot(7,.5),e*.25,j1,zn.smear+.001)},"pollution"),WN=u((r,e,t,n)=>{let i=e.detail??e.colour,s=u((a,l)=>[t[0]+(Ti(r.place.seed,n*31+a*2)-.5)*l,t[1]+(Ti(r.place.seed,n*31+a*2+1)-.5)*l],"jitter"),o=e.shape==="fish"||e.shape==="whale";for(let a=0;a<e.count;a++){let[l,c]=e.count===1?[t[0],t[1]]:s(a,.1),h=r.ground(l,c,o),f=Ti(r.place.seed,n*31+a+17)*Math.PI*2;switch(e.shape){case"rocks":r.solid(Kl,[l,h+.012,c],[.05,.035,.045],a%2===1?i:e.colour,[0,f,0]);break;case"crop":r.solid(Jl,[l,h+.02,c],[.008,.04,.008],i),r.solid(Kl,[l,h+.05,c],[.045,.04,.045],e.colour);break;case"animal":{let d=e.count===1?1.5:1;r.solid(kn,[l,h+.04*d,c],[.035*d,.03*d,.07*d],e.colour,[0,f,0]),r.solid(kn,[l+Math.sin(f)*.04*d,h+.055*d,c+Math.cos(f)*.04*d],[.022*d,.024*d,.03*d],i,[0,f,0]),r.solid(kn,[l,h+.013*d,c],[.03*d,.026*d,.055*d],i,[0,f,0]);break}case"bird":r.solid(Kl,[l,h+.02,c],[.03,.025,.04],e.colour,[0,f,0]),r.solid(kn,[l-Math.sin(f)*.03,h+.025,c-Math.cos(f)*.03],[.008,.006,.04],i,[.4,f,0]);break;case"fish":r.solid(Kl,[l,h+.006,c],[.012,.01,.035],e.colour,[0,f,0]);break;case"whale":r.solid(Kl,[l,h,c],[.07,.05,.2],e.colour,[0,f,0]),r.solid(kn,[l-Math.sin(f)*.11,h+.02,c-Math.cos(f)*.11],[.08,.006,.03],e.colour,[0,f,0]);break;case"derrick":r.solid(kn,[l,h+.008,c],[.08,.016,.08],i),r.solid(aE,[l,h+.1,c],[.06,.18,.06],e.colour,[0,Math.PI/4,0]);break;case"oasis":a===0&&r.disc([l,c],.07,i,zn.field+.002);{let[d,m]=s(a+5,.1),g=r.ground(d,m);r.solid(Jl,[d,g+.06,m],[.012,.12,.012],$y),r.solid(jy,[d,g+.125,m],[.09,.03,.09],e.colour)}break;case"peat":case"logs":r.solid(e.shape==="logs"?Jl:kn,[l,h+.012,c],e.shape==="logs"?[.022,.09,.022]:[.05,.02,.035],a%2===1&&e.detail!==void 0?e.detail:e.colour,e.shape==="logs"?[0,f,Math.PI/2]:[0,f,0]);break;default:r.solid(Kl,[t[0],r.ground(t[0],t[1])+.012+a*.018,t[1]],[.05-a*.007,.025,.05-a*.007],e.colour)}}},"special"),XN=u((r,e)=>{[0,1,2].forEach(t=>{let n=t/3*Math.PI*2+Ti(r.place.seed,12)*Math.PI,i=e[0]+Math.cos(n)*.06,s=e[1]+Math.sin(n)*.06,o=r.ground(i,s);r.solid(Jl,[i,o+.02,s],[.05,.04,.05],vN),r.solid(jy,[i,o+.055,s],[.065,.035,.065],_N)})},"hut"),hE={conifer:.06,broadleaf:.07,palm:.06,deadTree:.05,bush:.035,shrub:.03,scrub:.03,reeds:.03,rock:.04,cactus:.03},dE=u((r,e,t,n,i,s,o)=>{let a=r.ground(n,i),{colour:l,detail:c}=e;switch(t){case"conifer":r.solid(ju,[n,a+.025*s,i],[.016*s,.05*s,.016*s],c),r.solid(Qu,[n,a+.09*s,i],[.11*s,.12*s,.11*s],l),r.solid(Qu,[n,a+.16*s,i],[.08*s,.1*s,.08*s],l);break;case"broadleaf":r.solid(ju,[n,a+.04*s,i],[.018*s,.08*s,.018*s],c),r.solid(qp,[n,a+.12*s,i],[.13*s,.11*s,.13*s],l,[0,o,0]);break;case"palm":r.solid(ju,[n,a+.08*s,i],[.012*s,.16*s,.012*s],c,[.12,o,0]),r.solid(Qu,[n+.01*s,a+.165*s,i],[.15*s,.03*s,.15*s],l,[0,o,0]);break;case"deadTree":r.solid(ju,[n,a+.06*s,i],[.014*s,.12*s,.014*s],c),r.solid(kn,[n+.02*s,a+.09*s,i],[.006*s,.05*s,.006*s],c,[0,o,-.7]);break;case"bush":r.solid(qp,[n,a+.02*s,i],[.06*s,.045*s,.06*s],l,[0,o,0]);break;case"shrub":r.solid(Qu,[n,a+.025*s,i],[.05*s,.05*s,.05*s],l,[0,o,0]),r.solid(Qu,[n+.02*s,a+.018*s,i+.01*s],[.035*s,.036*s,.035*s],l,[0,o,0]);break;case"scrub":r.solid(qp,[n,a+.008*s,i],[.05*s,.02*s,.05*s],l,[0,o,0]);break;case"reeds":[-1,0,1].forEach(h=>r.solid(kn,[n+h*.008*s,a+.035*s,i],[.005,.07*s,.005],h===0?l:c,[0,o,h*.18]));break;case"rock":r.solid(qp,[n,a+.012*s,i],[.07*s,.04*s,.06*s],l,[0,o,0]);break;default:r.solid(ju,[n,a+.05*s,i],[.018*s,.1*s,.018*s],l),r.solid(kn,[n+.015*s,a+.06*s,i],[.025*s,.01*s,.01*s],l,[0,o,0])}},"grow"),qN=u((r,e,t,n)=>{let i=n[0]-t[0],s=n[1]-t[1],o=i*i+s*s,a=o===0?0:Math.max(0,Math.min(1,((r-t[0])*i+(e-t[1])*s)/o));return Math.hypot(r-(t[0]+i*a),e-(t[1]+s*a))},"distanceTo"),YN=u((r,e)=>{let t=$l(e.terrain);if(t===null)return;let{centre:n,radius:i,seed:s,latitude:o}=r.place;t.plants.forEach((a,l)=>{for(let c=0;c<a.count;c++){let h=1e3+l*97+c*7,f=a.size[0]+(a.size[1]-a.size[0])*Ti(s,h),d=t.conifers,m=d!==void 0&&Ti(s,h+1)>=d[0]+(d[1]-d[0])*o?"broadleaf":a.kind,g=hE[m]*f;for(let _=0;_<6;_++){let x=Ti(s,h+2+_*2)*Math.PI*2,b=Math.sqrt(Ti(s,h+3+_*2))*i*.92,v=n[0]+Math.cos(x)*b,S=n[1]+Math.sin(x)*b;if(r.hasRoom(v,S,g)){dE(r,a,m,v,S,f,x),r.taken.push([v,S,g]),r.grown.push([v,S,m]);break}}}})},"plants"),Yy=.26,sE=.3,$N=.15,oE=.5,$p=[.9,1.3],ya=u((r,e,t)=>Ti(Math.imul(r,73856093)^Math.imul(e,19349663)^1540483477,t),"pointFraction"),KN=u((r,e,t)=>{let{centre:n,outline:i,owns:s,around:o,period:a,toward:l,latitude:c}=e,h=Math.max(1,Math.round(a.u/Yy)),f=a.u/h,d=a.v===null?null:Math.max(1,Math.round(a.v/Yy)),m=a.v===null||d===null?Yy:a.v/d,g=i.map(([y])=>y),_=i.map(([,y])=>y),[x,b]=[Math.floor(Math.min(...g)/f)-1,Math.ceil(Math.max(...g)/f)],[v,S]=[Math.floor(Math.min(..._)/m)-1,Math.ceil(Math.max(..._)/m)],M=o.filter(([y,w])=>!r.woods.some(([L,I])=>L===y&&I===w)).map(y=>{let[w,L]=l(y),I=Math.hypot(w-n[0],L-n[1]);return{mu:w,mv:L,length:I}}),R=t.plants.reduce((y,{count:w})=>y+w,0),E=[];for(let y=v;y<=S;y++)for(let w=x;w<=b;w++){let L=(w%h+h)%h,I=d===null?y:(y%d+d)%d,D=(w+.5+(ya(L,I,0)*2-1)*sE)*f,k=(y+.5+(ya(L,I,1)*2-1)*sE)*m;if(!s(D,k))continue;let $=M.reduce((Z,{mu:re,mv:ae,length:fe})=>{let ve=fe/2-((D-n[0])*(re-n[0])+(k-n[1])*(ae-n[1]))/fe;return Math.min(Z,Math.max(0,ve)/$N)},1);if(ya(L,I,2)>=oE+(1-oE)*$)continue;let F=ya(L,I,3)*R,j=t.plants[0];for(let Z of t.plants)if(j=Z,F-=Z.count,F<0)break;let ce=t.conifers,V=ce!==void 0&&ya(L,I,4)>=ce[0]+(ce[1]-ce[0])*c?"broadleaf":j.kind,ne=j.size[0]+(j.size[1]-j.size[0])*ya(L,I,5);E.push({u:D,v:k,kind:V,plant:j,room:hE[V]*ne*$p[1],size:ne*($p[0]+($p[1]-$p[0])*$),facing:ya(L,I,6)*Math.PI*2})}return E},"woodsPlants"),ZN=u((r,e)=>{let{centre:t,around:n,toward:i}=r.place,s=Math.max(...n.map(a=>{let[l,c]=i(a);return Math.hypot(l-t[0],c-t[1])})),o=e.paths.map(a=>i(a));o.forEach((a,l)=>o.slice(l+1).forEach(c=>{Math.hypot(c[0]-a[0],c[1]-a[1])<=s+1e-6&&(r.lines.push([a,c]),r.past.push([a,c]))}))},"pathsPast"),JN=u((r,e,t)=>{let{heightAt:n}=r.place;KN(e,r.place,t).forEach(({u:i,v:s,kind:o,plant:a,size:l,room:c,facing:h})=>{o!=="reeds"&&n(i,s)<0||r.hasRoom(i,s,c)&&(dE(r,a,o,i,s,l,h),r.grown.push([i,s,o]))})},"woods"),t_=u((r,e,t)=>{let n=new Ky(t,e),{centre:i,radius:s}=e;if(r.city!==null)return BN(n,r.city),{taken:n.taken,lines:n.lines,grown:n.grown};if([r.road,r.railroad].forEach(l=>{l!==null&&e_(l)&&(l.joins.forEach(c=>{if(l===r.road){let h=Zp(e,c).points;h.slice(1).forEach((f,d)=>n.lines.push([h[d],f])),n.runs.push({key:Zy(c),points:h});return}n.lines.push([i,Kp(e,c)]),n.runs.push({key:Zy(c)+100,points:[i,Kp(e,c)]})}),l.alone&&n.lines.push([i,i]))}),r.fortress){let l=s*.62,c=[[-l,-l],[l,-l],[l,l],[-l,l]].map(([h,f])=>[i[0]+h,i[1]+f]);c.forEach((h,f)=>n.lines.push([h,c[(f+1)%4]]))}if(r.airbase){let l=s*.75;n.lines.push([[i[0]-l,i[1]+.12],[i[0]+l,i[1]+.12]])}r.road!==null&&LN(n,r.road),r.railroad!==null&&NN(n,r.railroad),r.front===!0&&n.taken.push([i[0],i[1]+fa,lE]),r.mine&&zN(n,n.claim(...Xy.mine,.1)),r.fortress&&GN(n),r.airbase&&VN(n),r.pollution&&HN(n),r.specials.forEach(([l,c],h)=>WN(n,$1(l,c),n.claim(...Xy.special(h),.1),h+1)),r.hut&&XN(n,n.claim(...Xy.hut,.13)),ZN(n,r);let o=kN(n,r);r.irrigation!==null&&ON(n,r.irrigation,o);let a=$l(r.terrain);return a!==null&&r.irrigation===null&&!r.fortress&&!r.airbase&&(a.canopy!==void 0?JN(n,r,a):YN(n,r)),{taken:n.taken,lines:n.lines,grown:n.grown}},"layOverlay"),jN=u((r,e,t)=>{let n=Jy();return t.forEach(({overlay:i,place:s})=>t_(i,s,n)),n_(r,e,n)},"overlayMesh"),n_=u((r,e,t)=>{let n=new Float32Array(t.positions);for(let i=0;i<n.length;i+=3)n[i]=n[i]-r,n[i+2]=n[i+2]-e;return{u:r,v:e,positions:n,normals:new Float32Array(t.normals),colours:new Float32Array(t.colours)}},"meshOf"),fE=jN;var pE=u((r,e)=>Math.imul(r,73856093)^Math.imul(e,19349663),"squareSeed"),eo,ln,ji,jl,ih,fi,pi,fn,Ql,_a,to,va,no,io,rh,sh,Je,s_,o_,a_,mE,gE,l_,eh,c_,Jp,th,jp,nh,u_=class u_{constructor(e){G(this,Je);G(this,eo);G(this,ln);G(this,ji,[]);G(this,jl);G(this,ih);G(this,fi);G(this,pi,new Set);G(this,fn,null);G(this,Ql,null);G(this,_a,new Map);G(this,to,new Map);G(this,va,u(()=>{},"#keptCity"));G(this,no,!0);G(this,io,[0,0]);G(this,rh);G(this,sh);z(this,fi,e);let t=e.topology(),n=e.width(),i=e.height(),s=t.wrapsY();this.layout=B1({width:n,height:i,topologyId:e.topologyId(),wrapsY:s}),z(this,eo,z1({layout:this.layout,source:{width:n,height:i,wrapsY:s,terrainAt:u((d,m)=>e.get(d,m).terrain._,"terrainAt"),waterAt:u((d,m)=>e.get(d,m).isWater,"waterAt"),neighbours:u((d,m)=>t.directions().map(g=>t.neighbour(d,m,g)).filter(g=>g!==null),"neighbours")}})),z(this,ln,G1(this.layout,i));let[o,a]=this.layout.centre(0,0),l=Math.max(...this.layout.outline(0,0).map(([d,m])=>Math.hypot(d-o,m-a))),c=Math.max(...t.directions().map(d=>t.offset(d,0,0)).map(([d,m])=>{let[g,_]=this.layout.centre(d,m);return Math.hypot(g-o,_-a)}));z(this,jl,1.2+l+ms*Math.SQRT2+Math.max((vr.reach-1)*c,c/2+ms*Math.SQRT2+Xp)),z(this,ih,l+Qy+Math.max(p(this,ln).spacingU,p(this,ln).spacingV));let h=this.layout.outline(0,0),f=h.flatMap(([d,m],g)=>{let[_,x]=h[(g+1)%h.length],b=Math.hypot(_-d,x-m);return b===0?[]:[{away:Math.abs((_-d)*(a-m)-(x-m)*(o-d))/b,normal:[(x-m)/b,(d-_)/b]}]});z(this,rh,Math.min(...f.map(({away:d})=>d))),z(this,sh,Math.min(...f.map(({away:d,normal:[m,g]})=>d/(Math.abs(m)+Math.abs(g)))))}surfaceAt(e,t,n=new Map){let{spacingU:i,spacingV:s}=p(this,ln),o=Math.floor(e/i),a=Math.floor(t/s),l=e/i-o,c=t/s-a,h=u((_,x)=>{let b=`${_},${x}`,v=n.get(b);return v===void 0&&(v=p(this,eo).height(_*i,x*s),n.set(b,v)),v},"at"),f=h(o,a),d=h(o+1,a),m=h(o,a+1);if(l+c<=1)return f+(d-f)*l+(m-f)*c;let g=h(o+1,a+1);return g+(m-g)*(1-l)+(d-g)*(1-c)}ground(){let{chunksU:e,chunksV:t,stepsU:n,stepsV:i,spacingU:s,spacingV:o}=p(this,ln);return{columns:e*n,rows:t*i,spacingU:s,spacingV:o,wrapsV:this.layout.period().v!==null}}extentV(){return p(this,ln).chunksV*p(this,ln).stepsV*p(this,ln).spacingV}heightAt(e,t){return p(this,eo).height(e,t)}queueAll(e,t){let{chunksU:n,chunksV:i}=p(this,ln),s=[];for(let o=0;o<i;o++)for(let a=0;a<n;a++)s.push(`${a},${o}`);z(this,ji,T(this,Je,nh).call(this,s,e,t)),z(this,io,[e,t]),s.forEach(o=>p(this,pi).add(o)),T(this,Je,a_).call(this)}changed(e,t,n,i=!1){if(e.length===0&&!i)return[];z(this,io,[t,n]),T(this,Je,s_).call(this,e.length===0?[...T(this,Je,th).call(this).values()].flat():T(this,Je,jp).call(this,e));let s=p(this,eo).refresh(i?void 0:e);if(s.length===0)return s;let o=Wy(p(this,ln),this.layout,s,p(this,jl)).map(([a,l])=>`${a},${l}`);return T(this,Je,a_).call(this,Wy(p(this,ln),this.layout,s,p(this,jl)+p(this,ih)).map(([a,l])=>`${a},${l}`)),z(this,ji,T(this,Je,nh).call(this,[...new Set([...p(this,ji),...o])],t,n)),s}showTowns(e,t,n){if(e===p(this,no))return;let i=[...T(this,Je,th).call(this).values()].flat().filter(([s,o])=>T(this,Je,o_).call(this,s,o));z(this,no,e),z(this,io,[t,n]),T(this,Je,s_).call(this,T(this,Je,jp).call(this,i))}refocus(e,t){z(this,ji,T(this,Je,nh).call(this,p(this,ji),e,t)),z(this,io,[e,t])}pending(){return p(this,ji).length}overlaysPending(){return p(this,pi).size+(p(this,fn)===null||p(this,pi).has(p(this,fn).key)?0:1)}build(e,t){let n=performance.now(),i=u(()=>t!==null&&performance.now()-n>=t,"spent");for(;p(this,ji).length>0;){if(i())return;let o=p(this,ji).shift(),[a,l]=o.split(",").map(Number);e.setChunk(a,l,V1(p(this,ln),p(this,eo),a,l)),p(this,pi).add(o)}let s=!1;for(;p(this,pi).size>0||p(this,fn)!==null;){if(p(this,fn)!==null&&p(this,pi).has(p(this,fn).key)&&z(this,fn,null),p(this,fn)===null){if(s&&i())return;let g=T(this,Je,nh).call(this,[...p(this,pi)],...p(this,io))[0],_=T(this,Je,th).call(this).get(g)??[],x=T(this,Je,gE).call(this,g,_);if(p(this,pi).delete(g),x!==null){let[b,v]=g.split(",").map(Number);_.forEach(([S,M],R)=>p(this,_a).set(`${S},${M}`,x.signatures[R])),e.setOverlay(b,v,x.mesh),s=!0;continue}z(this,fn,{key:g,squares:_,done:0,laid:Jy(),signatures:[],heights:new Map,keep:!0})}let o=p(this,fn);for(;o.done<o.squares.length;){let[g,_]=o.squares[o.done],x=T(this,Je,c_).call(this,g,_,o.heights);if(o.signatures.push(p(this,_a).get(`${g},${_}`)),o.done++,x!==null&&t_(x.overlay,x.place,o.laid),o.done<o.squares.length&&i())return}let[a,l]=o.key.split(",").map(Number),{stepsU:c,stepsV:h,spacingU:f,spacingV:d}=p(this,ln),m=o.laid.positions.length===0?null:n_(a*c*f,l*h*d,o.laid);if(z(this,fn,null),o.keep){let g={signatures:o.signatures,mesh:m};p(this,to).set(o.key,T(this,Je,jp).call(this,o.squares).some(([_,x])=>T(this,Je,o_).call(this,_,x))?{...p(this,to).get(o.key),[p(this,no)?"shown":"hidden"]:g}:{shown:g,hidden:g})}e.setOverlay(a,l,m),s=!0}}keepCities(e){z(this,va,e)}roadPath(e,t,n,i){let s=p(this,fi).topology(),o=u((M,R,E,y)=>{let w=s.directions().find(L=>{let I=s.neighbour(M,R,L);return I!==null&&I[0]===E&&I[1]===y});return w===void 0?null:s.offset(w,M,R)},"offsetTo"),a=o(e,t,n,i),l=o(n,i,e,t);if(a===null||l===null)return null;let c=u((M,R,E)=>{let y=T(this,Je,eh).call(this,M,R),w=u(I=>I!==null&&I.joins.some(([D,k])=>D===E[0]&&k===E[1]),"joins"),L=this.layout.centre(M,R);if(w(y?.road??null))return Zp({centre:L,toward:u(([I,D])=>this.layout.centre(M+I,R+D),"toward"),seed:pE(M,R)},E).points;if(w(y?.railroad??null)){let[I,D]=this.layout.centre(M+E[0],R+E[1]);return[[L[0],L[1]],[(L[0]+I)/2,(L[1]+D)/2]]}return null},"half"),h=c(e,t,a),f=c(n,i,l);if(h===null&&f===null)return null;let d=this.layout.centre(e,t),m=this.layout.centre(n,i),g=this.layout.centre(e+a[0],t+a[1]),_=this.layout.centre(n+l[0],i+l[1]),x=[(d[0]+g[0])/2,(d[1]+g[1])/2],b=[(m[0]+_[0])/2,(m[1]+_[1])/2],v=[b[0]-x[0],b[1]-x[1]];return[...(h??[d,x]).map(([M,R])=>[M+v[0],R+v[1]]),...(f??[m,b]).slice(0,-1).reverse()].map(([M,R])=>[M-m[0],R-m[1]])}overlayOf(e,t){let{stepsU:n,stepsV:i,spacingU:s,spacingV:o}=p(this,ln),a=new Map,l=(T(this,Je,th).call(this).get(`${e},${t}`)??[]).flatMap(([c,h])=>T(this,Je,c_).call(this,c,h,a)??[]);return l.length===0?null:fE(e*n*s,t*i*o,l)}overlayKeyOf(e,t){return T(this,Je,Jp).call(this,e,t)}};eo=new WeakMap,ln=new WeakMap,ji=new WeakMap,jl=new WeakMap,ih=new WeakMap,fi=new WeakMap,pi=new WeakMap,fn=new WeakMap,Ql=new WeakMap,_a=new WeakMap,to=new WeakMap,va=new WeakMap,no=new WeakMap,io=new WeakMap,rh=new WeakMap,sh=new WeakMap,Je=new WeakSet,s_=u(function(e){e.forEach(([t,n])=>{let i=T(this,Je,Jp).call(this,t,n);if(p(this,pi).has(i)||p(this,fn)?.key===i&&!T(this,Je,mE).call(this,p(this,fn),t,n))return;JSON.stringify(T(this,Je,eh).call(this,t,n))!==(p(this,_a).get(`${t},${n}`)??"null")&&p(this,pi).add(i)})},"#layAgain"),o_=u(function(e,t){return!!p(this,fi).get(e,t).city||!!p(this,va).call(this,e,t)},"#townAt"),a_=u(function(e){let t=e===void 0?null:new Set(e);t===null?p(this,to).clear():t.forEach(n=>p(this,to).delete(n)),p(this,fn)!==null&&(t===null||t.has(p(this,fn).key))&&(p(this,fn).keep=!1)},"#landChanged"),mE=u(function(e,t,n){return e.squares.slice(0,e.done).some(([i,s])=>i===t&&s===n)},"#reached"),gE=u(function(e,t){let n=p(this,to).get(e);if(n===void 0)return null;let i=t.map(([s,o])=>JSON.stringify(T(this,Je,eh).call(this,s,o)));return[n.shown,n.hidden].find(s=>s!==void 0&&s.signatures.length===i.length&&s.signatures.every((o,a)=>o===i[a]))??null},"#madeAs"),l_=u(function(e,t){let n=p(this,fi).get(e,t),i=p(this,no)?p(this,va).call(this,e,t):null;return i===void 0?n:{...n,city:i}},"#shownAt"),eh=u(function(e,t){let n=p(this,fi).topology(),i=q1(T(this,Je,l_).call(this,e,t),n.directions().flatMap(o=>{let a=n.neighbour(e,t,o);return a===null?[]:[{offset:n.offset(o,e,t),tile:T(this,Je,l_).call(this,a[0],a[1])}]})),s=p(this,va).call(this,e,t);return i!==null&&!p(this,no)&&(s===void 0?p(this,fi).get(e,t).city:s)?{...i,front:!0}:i},"#overlayAt"),c_=u(function(e,t,n){let i=T(this,Je,eh).call(this,e,t);if(p(this,_a).set(`${e},${t}`,JSON.stringify(i)),i===null)return null;let[s,o]=this.layout.centre(e,t),a=p(this,fi).topology();return{overlay:i,place:{centre:[s,o],toward:u(([l,c])=>this.layout.centre(e+l,t+c),"toward"),radius:p(this,rh),inner:p(this,sh),heightAt:u((l,c)=>this.surfaceAt(l,c,n),"heightAt"),seed:pE(e,t),latitude:Math.min(1,Math.abs(2*o/this.extentV()-1)),outline:this.layout.outline(e,t),owns:u((l,c)=>{let[h,f]=this.layout.tileAt(l,c);return h===e&&f===t},"owns"),around:a.directions().filter(l=>a.neighbour(e,t,l)!==null).map(l=>a.offset(l,e,t)),period:this.layout.period()}}},"#square"),Jp=u(function(e,t){let{chunksU:n,chunksV:i,stepsU:s,stepsV:o,spacingU:a,spacingV:l}=p(this,ln),[c,h]=this.layout.centre(e,t),f=Math.floor(c/(s*a)),d=Math.floor(h/(o*l));return`${Math.min(n-1,Math.max(0,f))},${Math.min(i-1,Math.max(0,d))}`},"#chunkOf"),th=u(function(){if(p(this,Ql)===null){let e=new Map;for(let t=0;t<p(this,fi).height();t++)for(let n=0;n<p(this,fi).width();n++){let i=T(this,Je,Jp).call(this,n,t);e.set(i,[...e.get(i)??[],[n,t]])}z(this,Ql,e)}return p(this,Ql)},"#chunksOfSquares"),jp=u(function(e){let t=p(this,fi).topology(),n=new Map;return e.forEach(([i,s])=>[[i,s],...t.directions().map(o=>t.neighbour(i,s,o)).filter(o=>o!==null)].forEach(o=>n.set(o.join(),o))),[...n.values()]},"#besides"),nh=u(function(e,t,n){let{stepsU:i,stepsV:s,spacingU:o,spacingV:a}=p(this,ln),l=i*o,c=s*a,{u:h,v:f}=this.layout.period(),d=u((g,_)=>Math.abs(_===null?g:g-_*Math.round(g/_)),"round"),m=u(g=>{let[_,x]=g.split(",").map(Number);return Math.hypot(d((_+.5)*l-t,h),d((x+.5)*c-n,f))},"distance");return[...e].sort((g,_)=>m(g)-m(_))},"#nearestFirst"),u(u_,"Land");var r_=u_,xE=r_;var QN=u(()=>typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches===!0,"prefersReducedMotion"),Ai=QN;var bE=u((r,e,t=100)=>{let n=r.filter(({time:a})=>e-a<=t);if(n.length<2)return{x:0,y:0};let i=n[0],s=n[n.length-1],o=s.time-i.time;return o<=0?{x:0,y:0}:{x:(s.x-i.x)/o,y:(s.y-i.y)/o}},"releaseVelocity");var eD=8,tD=.92,nD=.02,yE=3,iD=50,rD=8,sD=10,_E=250,oh,ah,ec,tc,Ma,ro,h_=class h_{constructor({pointerId:e,clientX:t,clientY:n,timeStamp:i}){G(this,oh);G(this,ah);G(this,ec);G(this,tc);G(this,Ma,!1);G(this,ro);this.pointerId=e,z(this,oh,t),z(this,ah,n),z(this,ec,t),z(this,tc,n),z(this,ro,[{x:t,y:n,time:i}])}dragging(){return p(this,Ma)}move({pointerId:e,clientX:t,clientY:n,timeStamp:i}){if(e!==this.pointerId||!p(this,Ma)&&Math.hypot(t-p(this,oh),n-p(this,ah))<eD)return null;let s=!p(this,Ma),o=p(this,ec)-t,a=p(this,tc)-n;return z(this,Ma,!0),z(this,ec,t),z(this,tc,n),p(this,ro).push({x:t,y:n,time:i}),p(this,ro).length>20&&p(this,ro).shift(),{dx:o,dy:a,started:s}}releaseVelocity(e){return bE(p(this,ro),e)}};oh=new WeakMap,ah=new WeakMap,ec=new WeakMap,tc=new WeakMap,Ma=new WeakMap,ro=new WeakMap,u(h_,"Press");var Qp=h_,Er,lh,d_=class d_{constructor(e){G(this,Er,null);G(this,lh);z(this,lh,e)}start(e){this.stop();let t=Math.hypot(e.x,e.y),n=t>yE?yE/t:1,i=e.x*n,s=e.y*n,o=null,a=u(l=>{let c=o===null?16:Math.min(l-o,64);if(o=l,Math.hypot(i,s)<nD){z(this,Er,null);return}p(this,lh).call(this,-i*c,-s*c);let h=Math.pow(tD,c/16);i*=h,s*=h,z(this,Er,window.requestAnimationFrame(a))},"step");z(this,Er,window.requestAnimationFrame(a))}gliding(){return p(this,Er)!==null}stop(){p(this,Er)!==null&&(window.cancelAnimationFrame(p(this,Er)),z(this,Er,null))}};Er=new WeakMap,lh=new WeakMap,u(d_,"Glide");var em=d_,Sa,ch,uh,nc,f_=class f_{constructor(){G(this,Sa,0);G(this,ch,0);G(this,uh,-1/0);G(this,nc,0)}turned(e,t){let n=e.deltaMode===0,i=e.deltaY;if(i===0||e.ctrlKey&&t!==null&&e.timeStamp-t<=_E)return 0;let s=Math.sign(i),o=e.timeStamp-p(this,uh)>_E||s!==p(this,ch);if(z(this,uh,e.timeStamp),z(this,ch,s),o&&(z(this,Sa,0),z(this,nc,0)),n&&!e.ctrlKey&&p(this,nc)>=sD)return 0;if(!o&&n){if(z(this,Sa,p(this,Sa)+i),Math.abs(p(this,Sa))<(e.ctrlKey?rD:iD))return 0;z(this,Sa,0)}return n&&!e.ctrlKey&&z(this,nc,p(this,nc)+1),i<0?1:-1}};Sa=new WeakMap,ch=new WeakMap,uh=new WeakMap,nc=new WeakMap,u(f_,"WheelTurn");var tm=f_;var oD=350,aD=.006,vE=.004,Tr,pn,Gn,ic,Ar,Qi,sm,Ci,Pi,so,rc,mi,oo,Pe,Ri,nm,im,ME,m_,gs,g_,SE,xs,wE,EE,TE,AE,hh,RE,CE,PE,rm,x_=class x_{constructor(e,t,n=null){G(this,Pe);G(this,Tr);G(this,pn);G(this,Gn,null);G(this,ic,[0,0]);G(this,Ar,null);G(this,Qi);G(this,sm,new tm);G(this,Ci,new Map);G(this,Pi,null);G(this,so,null);G(this,rc,[]);G(this,mi);G(this,oo,null);z(this,Tr,e),z(this,pn,t),z(this,mi,n),z(this,Qi,new em((i,s)=>{let[o,a]=T(this,Pe,ME).call(this);T(this,Pe,g_).call(this,[o,a],[o-i,a-s])})),T(this,Pe,Ri).call(this,"pointerdown",i=>T(this,Pe,SE).call(this,i)),T(this,Pe,Ri).call(this,"pointermove",i=>T(this,Pe,EE).call(this,i)),T(this,Pe,Ri).call(this,"pointerup",i=>T(this,Pe,TE).call(this,i)),T(this,Pe,Ri).call(this,"pointercancel",i=>T(this,Pe,AE).call(this,i)),T(this,Pe,Ri).call(this,"wheel",i=>T(this,Pe,CE).call(this,i),{passive:!1}),T(this,Pe,Ri).call(this,"gesturestart",i=>T(this,Pe,rm).call(this,i,"start"),{passive:!1}),T(this,Pe,Ri).call(this,"gesturechange",i=>T(this,Pe,rm).call(this,i,"change"),{passive:!1}),T(this,Pe,Ri).call(this,"gestureend",i=>T(this,Pe,rm).call(this,i,"end"),{passive:!1}),T(this,Pe,Ri).call(this,"contextmenu",i=>T(this,Pe,wE).call(this,i)),T(this,Pe,Ri).call(this,"pointerleave",()=>p(this,mi)?.hover(null)),T(this,Pe,Ri).call(this,"touchstart",i=>i.preventDefault(),{passive:!1})}dragging(){return p(this,Gn)?.dragging()===!0||p(this,Ar)!==null}moving(){return this.dragging()||p(this,Pi)!==null||p(this,Qi).gliding()}dispose(){p(this,Qi).stop(),T(this,Pe,xs).call(this),p(this,rc).forEach(([e,t,n])=>p(this,Tr).removeEventListener(e,t,n)),z(this,rc,[])}};Tr=new WeakMap,pn=new WeakMap,Gn=new WeakMap,ic=new WeakMap,Ar=new WeakMap,Qi=new WeakMap,sm=new WeakMap,Ci=new WeakMap,Pi=new WeakMap,so=new WeakMap,rc=new WeakMap,mi=new WeakMap,oo=new WeakMap,Pe=new WeakSet,Ri=u(function(e,t,n){p(this,Tr).addEventListener(e,t,n),p(this,rc).push([e,t,n])},"#listen"),nm=u(function(){return{width:p(this,Tr).clientWidth||1,height:p(this,Tr).clientHeight||1}},"#box"),im=u(function([e,t]){let{width:n,height:i}=T(this,Pe,nm).call(this);return[e/n*2-1,1-t/i*2]},"#screen"),ME=u(function(){let{width:e,height:t}=T(this,Pe,nm).call(this);return[e/2,t/2]},"#middle"),m_=u(function(){let{width:e,height:t}=T(this,Pe,nm).call(this);return e/t},"#aspect"),gs=u(function(e){let t=p(this,Tr).getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]},"#at"),g_=u(function(e,t){p(this,pn).setOrbit(o1(p(this,pn).orbit(),p(this,pn).lookHeight(),T(this,Pe,im).call(this,e),T(this,Pe,im).call(this,t),T(this,Pe,m_).call(this)))},"#pan"),SE=u(function(e){if(p(this,Qi).stop(),p(this,mi)?.hover(null),e.pointerType==="touch"&&(p(this,Ci).set(e.pointerId,T(this,Pe,gs).call(this,e)),p(this,Ci).size===2)){z(this,Gn,null),T(this,Pe,xs).call(this),z(this,Pi,T(this,Pe,hh).call(this));return}if(e.isPrimary&&e.button!==2){if(p(this,Tr).setPointerCapture?.(e.pointerId),e.button===1||e.button===0&&e.altKey){e.preventDefault(),z(this,Ar,{pointerId:e.pointerId,x:e.clientX,y:e.clientY});return}if(e.button===0){let t=new Qp(e),[n,i]=T(this,Pe,gs).call(this,e),{clientX:s,clientY:o}=e;z(this,Gn,t),z(this,ic,[n,i]),T(this,Pe,xs).call(this),z(this,oo,window.setTimeout(()=>{z(this,oo,null),p(this,Gn)===t&&!t.dragging()&&p(this,mi)?.menu(n,i,s,o,!0)===!0&&z(this,Gn,null)},oD))}}},"#down"),xs=u(function(){p(this,oo)!==null&&(window.clearTimeout(p(this,oo)),z(this,oo,null))},"#stopHold"),wE=u(function(e){if(p(this,mi)===null||!p(this,mi).menuOnRightClick()||(e.preventDefault(),p(this,mi).menuOpen()))return;let[t,n]=T(this,Pe,gs).call(this,e);p(this,mi).menu(t,n,e.clientX,e.clientY,!1)&&(T(this,Pe,xs).call(this),z(this,Gn,null))},"#rightClick"),EE=u(function(e){if(p(this,Ci).has(e.pointerId)&&(p(this,Ci).set(e.pointerId,T(this,Pe,gs).call(this,e)),p(this,Pi)!==null)){T(this,Pe,RE).call(this);return}let t=p(this,Ar);if(t!==null&&t.pointerId===e.pointerId){let s=p(this,pn).orbit();p(this,pn).setOrbit(ma({...s,yaw:s.yaw-(e.clientX-t.x)*aD,pitch:s.pitch+(e.clientY-t.y)*vE})),t.x=e.clientX,t.y=e.clientY;return}let n=p(this,Gn);if(n===null){if(e.pointerType==="mouse"&&e.buttons===0&&!p(this,Qi).gliding()){let[s,o]=T(this,Pe,gs).call(this,e);p(this,mi)?.hover({x:s,y:o,clientX:e.clientX,clientY:e.clientY})}return}if(n.move(e)===null)return;T(this,Pe,xs).call(this);let i=T(this,Pe,gs).call(this,e);T(this,Pe,g_).call(this,p(this,ic),i),z(this,ic,i)},"#move"),TE=u(function(e){if(p(this,Ci).delete(e.pointerId),p(this,Pi)!==null){z(this,Pi,p(this,Ci).size<2?null:T(this,Pe,hh).call(this));return}if(p(this,Ar)?.pointerId===e.pointerId){z(this,Ar,null);return}let t=p(this,Gn);if(!(t===null||t.pointerId!==e.pointerId)){if(z(this,Gn,null),T(this,Pe,xs).call(this),!t.dragging()){let[n,i]=T(this,Pe,gs).call(this,e);p(this,mi)?.click(n,i,e.clientX,e.clientY);return}Ai()||p(this,Qi).start(t.releaseVelocity(e.timeStamp))}},"#up"),AE=u(function(e){p(this,Ci).delete(e.pointerId),p(this,Pi)!==null&&z(this,Pi,p(this,Ci).size<2?null:T(this,Pe,hh).call(this)),p(this,Gn)?.pointerId===e.pointerId&&(z(this,Gn,null),T(this,Pe,xs).call(this)),p(this,Ar)?.pointerId===e.pointerId&&z(this,Ar,null)},"#cancel"),hh=u(function(){let[e,t]=[...p(this,Ci).values()];return e===void 0||t===void 0?null:{distance:Math.max(1,Math.hypot(t[0]-e[0],t[1]-e[1])),angle:Math.atan2(t[1]-e[1],t[0]-e[0]),middleY:(e[1]+t[1])/2,orbit:p(this,pn).orbit()}},"#measurePair"),RE=u(function(){let e=p(this,Pi),t=T(this,Pe,hh).call(this);e===null||t===null||p(this,pn).setOrbit(ma({...e.orbit,distance:e.orbit.distance*(e.distance/t.distance),yaw:e.orbit.yaw-(t.angle-e.angle),pitch:e.orbit.pitch+(t.middleY-e.middleY)*vE}))},"#twoFingers"),CE=u(function(e){e.preventDefault();let t=p(this,sm).turned(e,p(this,so)?.at??null);t!==0&&(p(this,Qi).stop(),T(this,Pe,PE).call(this,t,T(this,Pe,gs).call(this,e)))},"#wheelTurned"),PE=u(function(e,t){let n=p(this,pn).orbit(),i=p(this,pn).lookHeight(),s=T(this,Pe,im).call(this,t),o=T(this,Pe,m_).call(this),a=p(this,pn).settle(Hl(n,e)),l=pa(n,i,s,o),c=pa(a,i,s,o);if(l===null||c===null||a.distance===n.distance){p(this,pn).setOrbit(a);return}p(this,pn).setOrbit({...a,focus:[a.focus[0]+l[0]-c[0],a.focus[1]+l[1]-c[1]]})},"#zoomAbout"),rm=u(function(e,t){if(e.preventDefault(),p(this,Pi)!==null){z(this,so,null);return}if(t==="end"){z(this,so,null);return}if(t==="start"){p(this,Qi).stop(),z(this,Gn,null),T(this,Pe,xs).call(this),z(this,so,{orbit:p(this,pn).orbit(),at:e.timeStamp});return}let n=p(this,so);n!==null&&(n.at=e.timeStamp,p(this,pn).setOrbit(ma({...n.orbit,distance:n.orbit.distance/Math.max(.05,e.scale),yaw:n.orbit.yaw-e.rotation*Math.PI/180})))},"#safari"),u(x_,"CameraInput");var p_=x_,IE=p_;var lD=["#9a9a9a","#4a4a4a"],dh=u(r=>{let e=r.civilization?.attributes?.find(t=>t.name==="colors")?.value;return!Array.isArray(e)||typeof e[0]!="string"?lD:[e[0],typeof e[1]=="string"?e[1]:e[0]]},"coloursOf"),b_=u((r,e)=>r.find(t=>t.id===e)??[...r].sort((t,n)=>(n.defence?.value??0)-(t.defence?.value??0))[0]??null,"unitOnTop"),cD=u(r=>{let{current:e,max:t}=r.hitPoints??{current:0,max:0};return t>0&&e<t?Math.max(0,e/t):null},"healthOf"),uD=u((r,e,t,n={},i=()=>0,s=1,o=()=>null)=>{let a=r.units??[],l=b_(a,e),c=l!==null&&l.id===e,h=l===null?null:o(l._),f=t&&r.city?{name:n.cityName?.(r.city)??r.city.name,size:r.city.growth?.size??1,colours:dh(r.city.player),walled:r.city.walled===!0,disorder:r.city.civilDisorderDeclared===!0}:null,d=l!==null&&(t||c)?{id:l.id,type:l._,kinds:l.__??[],colours:dh(l.player),count:a.length,active:c,busy:l.busy!==null&&l.busy!==void 0,fortified:(l.improvements??[]).some(({_:m})=>m==="Fortified"),veteran:(l.improvements??[]).some(({_:m})=>m==="Veteran"),health:cD(l),status:(l.busy?n.unitStatus?.(l):null)||null,facing:i(l),size:s,...h===null?{}:{model:h}}:null;return f===null&&d===null?null:{city:f,unit:d,inCity:!!r.city}},"markerFor"),y_=uD;var UE={step:250,ramp:100,most:2e3},FE={step:125,ramp:50,most:1e3},BE=u(r=>({step:r.step/2,ramp:r.ramp/2,most:r.most/2}),"quicker"),hD=50,LE=.3,NE=1,dD=.05,fD=.02,__=u((r,e)=>r.x===e.x&&r.y===e.y,"sameSquare"),DE=u((r,e)=>{let{started:t,from:n,speed:i,rising:s,rise:o,top:a,going:l,stopping:c,fall:h,to:f}=r,d=Math.max(0,e-t);if(d<s)return{along:n+i*d+o*d*d/2,speed:i+o*d};let m=n+(i+a)/2*s;if(d<s+l)return{along:m+a*(d-s),speed:a};let g=m+a*l,_=d-s-l;return _<c?{along:g+a*_-h*_*_/2,speed:a-h*_}:{along:f,speed:0}},"motionAt"),fh=u(r=>r.started+r.rising+r.going+r.stopping,"motionEnds"),OE=u((r,e,t,n,i)=>{let s=Math.max(0,n-e),o=Math.max(1,i.ramp),a=Math.max(1/i.step,i.most>o*2?s/(i.most-o):0),l=a/o;if(s<=0)return{started:r,from:n,speed:0,rising:0,rise:0,top:0,going:0,stopping:0,fall:0,to:n};if(t*t/(2*l)>=s){let x=2*s/t;return{started:r,from:e,speed:t,rising:0,rise:0,top:t,going:0,stopping:x,fall:t/x,to:n}}let c=Math.min(a,Math.sqrt(l*s+t*t/2)),h=Math.abs(c-t)/l,f=c>=t?l:-l,d=c/l,m=(t+c)/2*h,g=c*d/2,_=Math.max(0,(s-m-g)/c);return{started:r,from:e,speed:t,rising:h,rise:f,top:c,going:_,stopping:d,fall:l,to:n}},"plan"),sc=u((r,e,t)=>t===null?r:r+t*Math.round((e-r)/t),"nearest"),ph=u((r,e)=>r[0]===e[0]&&r[1]===e[1]?null:Math.atan2(e[0]-r[0],e[1]-r[1]),"wayOf"),v_=u(r=>r*r*(3-2*r),"eased"),oc=u((r,e,t)=>{let n=e-r-Math.PI*2*Math.round((e-r)/(Math.PI*2));return r+n*t},"turnTowards"),ac,Pn,Ii,xh,bh,tt,kE,zE,S_,w_,GE,E_,om,mh,gh,T_,wa,A_=class A_{constructor(e){G(this,tt);G(this,ac);G(this,Pn,new Map);G(this,Ii,new Map);G(this,xh,[]);G(this,bh,0);z(this,ac,e)}walking(e){return p(this,Ii).has(e)}size(){return p(this,Pn).size}step(e,t,n,i,s,o,a,l=!1){let c=p(this,Ii).get(e),h=c===void 0?void 0:p(this,Pn).get(c),f=h===void 0?i:T(this,tt,om).call(this,h,o),d=h===void 0?0:T(this,tt,gh).call(this,h,T(this,tt,mh).call(this,h,o)),m=[...p(this,Pn).values()].find(g=>g!==h&&(l||!g.flies)&&T(this,tt,kE).call(this,g,t,n,o)&&T(this,tt,GE).call(this,T(this,tt,om).call(this,g,g.stepped),h===void 0?i:T(this,tt,om).call(this,h,g.stepped))&&LE*Math.abs(v_(T(this,tt,gh).call(this,g,T(this,tt,mh).call(this,g,o)))-v_(d))<fD);if(m!==void 0)return h!==void 0&&T(this,tt,w_).call(this,h,e),m.units.push(e),p(this,Ii).set(e,m.id),m.id;if(h!==void 0&&__(h.squares[h.squares.length-1],t)){if(h.units.length>1){let g={...h,id:`walk-${++ki(this,bh)._}`,units:h.units.filter(_=>_!==e),points:[...h.points],squares:[...h.squares]};p(this,Pn).set(g.id,g),g.units.forEach(_=>p(this,Ii).set(_,g.id)),h.units=[e]}return T(this,tt,S_).call(this,h,n,s,o,a,l),h.id}return h!==void 0&&T(this,tt,w_).call(this,h,e),T(this,tt,zE).call(this,e,t,n,f,s,o,a,{flies:l,climbed:d})}at(e){let t=[],n=[];return p(this,Pn).forEach(i=>{let s=T(this,tt,wa).call(this,i,e);if(e>=fh(i.motion)){n.push(s),T(this,tt,E_).call(this,i);return}t.push(s)}),{going:t,ended:n}}dropped(){return p(this,xh).splice(0)}endsAt(e){let t=p(this,Ii).get(e),n=t===void 0?void 0:p(this,Pn).get(t);return n===void 0?null:fh(n.motion)}nextEnd(){let e=null;return p(this,Pn).forEach(t=>{let n=fh(t.motion);e=e===null?n:Math.min(e,n)}),e}endWhere(e,t){let n=[];return p(this,Pn).forEach(i=>{e(i.units)&&(n.push(T(this,tt,wa).call(this,i,Math.max(t,fh(i.motion)))),T(this,tt,E_).call(this,i))}),n}endAll(e){let t=[...p(this,Pn).values()].map(n=>T(this,tt,wa).call(this,n,Math.max(e,fh(n.motion))));return p(this,Pn).clear(),p(this,Ii).clear(),t}};ac=new WeakMap,Pn=new WeakMap,Ii=new WeakMap,xh=new WeakMap,bh=new WeakMap,tt=new WeakSet,kE=u(function(e,t,n,i){let s=e.squares.length-1;return s>0&&i-e.stepped<=hD&&__(e.squares[s-1],t)&&__(e.squares[s],n)},"#justMade"),zE=u(function(e,t,n,i,s,o,a,{flies:l,climbed:c}){let h=`walk-${++ki(this,bh)._}`,f={id:h,units:[e],from:t,points:[i],squares:[t],stepped:o,motion:OE(o,0,0,0,a),turned:null,flies:l,flown:0,climb:{from:c,at:0}};return p(this,Pn).set(h,f),p(this,Ii).set(e,h),T(this,tt,S_).call(this,f,n,s,o,a,l),h},"#setOff"),S_=u(function(e,t,n,i,s,o){let{u:a,v:l}=p(this,ac),c=e.points[e.points.length-1],h=c.middle??c.at,{along:f,speed:d}=DE(e.motion,i),m=Math.max(0,Math.floor(f)-1),g=e.points.length>1?T(this,tt,wa).call(this,e,i).facing:null,_=e.points.length-1,x=f-(_-1),b=T(this,tt,mh).call(this,e,i);e.points.length>1&&(e.climb={from:T(this,tt,gh).call(this,e,b),at:e.flown+b}),e.flies=o,c.middle!==void 0&&x*Math.hypot(c.middle[0]-c.at[0],c.middle[1]-c.at[1])<.01&&(e.points[_]={at:c.middle,lift:0,middle:c.middle,...c.via===void 0?{}:{via:c.via}}),e.points.splice(0,m),e.squares.splice(0,m),e.flown+=m,e.points.push({at:[sc(n.at[0],c.at[0],a),sc(n.at[1],c.at[1],l)],lift:n.lift,...n.middle===void 0?{}:{middle:[sc(n.middle[0],h[0],a),sc(n.middle[1],h[1],l)]},...n.via===void 0?{}:{via:n.via}}),e.squares.push(t),e.stepped=i,e.motion=OE(i,f-m,d,e.points.length-1,s),e.turned=null,g!==null&&(e.turned={offset:oc(0,g-T(this,tt,wa).call(this,e,i).facing,1),at:i,over:s.step/2})},"#goOn"),w_=u(function(e,t){e.units=e.units.filter(n=>n!==t),p(this,Ii).delete(t),e.units.length===0&&(p(this,Pn).delete(e.id),p(this,xh).push(e.id))},"#leave"),GE=u(function(e,t){let{u:n,v:i}=p(this,ac);return Math.hypot(sc(e.at[0],t.at[0],n)-t.at[0],sc(e.at[1],t.at[1],i)-t.at[1])<dD},"#beside"),E_=u(function(e){p(this,Pn).delete(e.id),e.units.forEach(t=>p(this,Ii).delete(t))},"#end"),om=u(function(e,t){let{at:n,lift:i}=T(this,tt,wa).call(this,e,t);return{at:n,lift:i}},"#drawn"),mh=u(function(e,t){return Math.min(e.points.length-1,Math.max(0,DE(e.motion,t).along))},"#along"),gh=u(function(e,t){return e.flies?Math.max(0,Math.min(1,e.climb.from+(e.flown+t-e.climb.at)/NE,(e.points.length-1-t)/NE)):0},"#climbed"),T_=u(function(e,t,n){let i=e.points[t],s=e.points[t+1]??i,o=u(x=>x.middle??x.at,"middle");if(s.via===void 0||s.via.length===0)return{at:[i.at[0]+(s.at[0]-i.at[0])*n,i.at[1]+(s.at[1]-i.at[1])*n],way:s===i?null:ph(o(i),o(s))};let[a,l]=o(s),c=[i.at,...s.via.map(([x,b])=>[a+x,l+b]),s.at],h=c.slice(1).map((x,b)=>Math.hypot(x[0]-c[b][0],x[1]-c[b][1])),f=h.reduce((x,b)=>x+b,0),d=ph(o(i),o(s)),m=c.slice(1).map((x,b)=>ph(c[b],x)??d??0),g=c.map((x,b)=>{let v=m[b-1],S=m[b];return v===void 0?S:S===void 0?v:oc(v,S,.5)}),_=Math.min(1,Math.max(0,n))*f;for(let x=0;x<h.length;x++){let b=h[x],v=c[x],S=c[x+1];if(_<=b||x===h.length-1){let M=b===0?0:Math.min(1,_/b);return{at:[v[0]+(S[0]-v[0])*M,v[1]+(S[1]-v[1])*M],way:oc(g[x],g[x+1],M)}}_-=b}return{at:[s.at[0],s.at[1]],way:ph(o(i),o(s))}},"#stepAt"),wa=u(function(e,t){let{points:n,squares:i,turned:s}=e,o=n.length-1,a=T(this,tt,mh).call(this,e,t),l=Math.min(o-1,Math.floor(a)),c=a-l,h=n[l],f=n[l+1]??h,{at:d,way:m}=T(this,tt,T_).call(this,e,l,c),g=u((M,R)=>M<0||M>=o?null:T(this,tt,T_).call(this,e,M,R).way,"way"),_=u(M=>{let R=g(M,1),E=g(M+1,0);return R===null||E===null?null:oc(0,E-R,1)},"turnAt"),x=m??0,b=ph(h.middle??h.at,f.middle??f.at),v=(()=>{if(c>.75){let M=_(l);if(M!==null)return x+M*(c-.75)*2;if(l===o-1&&b!==null)return oc(x,b,(c-.75)*4)}else if(c<.25){let M=_(l-1);if(M!==null)return x-M*(.5-c*2);if(l===0&&b!==null)return oc(b,x,c*4)}return x})(),S=s!==null&&t-s.at<s.over?v+s.offset*(1-Math.max(0,t-s.at)/s.over):v;return{id:e.id,units:[...e.units],at:d,lift:h.lift+(f.lift-h.lift)*c,aloft:LE*v_(T(this,tt,gh).call(this,e,a)),facing:S,from:e.from,before:i[o-1]??i[o],to:i[o]}},"#walker"),u(A_,"Walks");var M_=A_,VE=M_;var pD=u(({kind:r,start:e,duration:t},n)=>{let i=t<=0?1:Math.min(1,Math.max(0,(n-e)/t));return r==="in"?i:1-i},"fadeAt"),Rr,am,C_=class C_{constructor(){G(this,Rr,new Map);G(this,am,0)}size(){return p(this,Rr).size}add(e,t,n=500){let i=`fade-${++ki(this,am)._}`;return p(this,Rr).set(i,{id:i,kind:e,start:t,duration:n}),i}at(e){let t=[],n=[];return p(this,Rr).forEach((i,s)=>{if(e>=i.start+i.duration){n.push(s),p(this,Rr).delete(s);return}t.push({id:s,kind:i.kind,opacity:pD(i,e)})}),{going:t,ended:n}}end(e){p(this,Rr).delete(e)}endAll(){let e=[...p(this,Rr).keys()];return p(this,Rr).clear(),e}};Rr=new WeakMap,am=new WeakMap,u(C_,"Fades");var R_=C_,HE=R_;var Cr,L_=class L_{constructor(){G(this,Cr,new Map)}size(){return p(this,Cr).size}trail(e,t,n){let i=p(this,Cr).get(e),[s,o]=i?.points??[];if(i===void 0||s===void 0||o===void 0||n-o.time>=1200){p(this,Cr).set(e,{points:[{at:t,time:n},{at:t,time:n}]});return}s.at=t,s.time=n;let a=t[0]-o.at[0],l=t[1]-o.at[1],c=Math.hypot(a,l),h=Math.floor(c/.04),[f,d]=o.at,m=o.time;i.points.splice(1,0,...Array.from({length:h},(g,_)=>{let x=(h-_)*.04/c;return{at:[f+a*x,d+l*x],time:m+(n-m)*x}}))}at(e){let t=[],n=[];return p(this,Cr).forEach((i,s)=>{if(i.points=i.points.filter(({time:o})=>e-o<1200),i.points.length===0){p(this,Cr).delete(s),n.push(s);return}t.push({id:s,points:i.points.map(({at:o,time:a})=>({at:o,age:Math.max(0,e-a)}))})}),{going:t,gone:n}}endAll(){let e=[...p(this,Cr).keys()];return p(this,Cr).clear(),e}};Cr=new WeakMap,u(L_,"Wakes");var I_=L_,P_={start:.03,by:.17,over:.5},mD=.016,gD=.004,WE=u(r=>{let[e]=r,t=[];if(e===void 0)return t;let n=r.map((o,a)=>{let l=r[a-1]??o,c=r[a+1]??o,h=l.at[0]-c.at[0],f=l.at[1]-c.at[1],d=Math.hypot(h,f);return d===0?null:[-f/d,h/d]}),i=r.reduce((o,a,l)=>{let c=r[l-1];return o.push(c===void 0?0:o[l-1]+Math.hypot(a.at[0]-c.at[0],a.at[1]-c.at[1])),o},[]),s=u((o,a)=>{let l=r[o],c=n[o],h=Math.min(1,l.age/1200);if(c==null)return null;let f=P_.start+P_.by*Math.min(1,i[o]/P_.over),d=mD*(1-h),m=[l.at[0]-e.at[0]+c[0]*f*a,l.at[1]-e.at[1]+c[1]*f*a];return[[m[0]-c[0]*d/2,m[1]-c[1]*d/2],[m[0]+c[0]*d/2,m[1]+c[1]*d/2]]},"edges");for(let o=0;o+1<r.length;o++)[1,-1].forEach(a=>{let l=s(o,a),c=s(o+1,a);if(l===null||c===null)return;let[h,f]=l,[d,m]=c;[h,d,f,f,d,m].forEach(([g,_])=>t.push(g,gD,_))});return t},"wakeShape"),XE=I_;var qE={reach:200,back:300,fade:600},X4=ba.bottle.flight,YE=u(r=>({...r,reach:r.reach/2,back:r.back/2,fade:r.fade/2,...r.falls===void 0?{}:{falls:r.falls/2},...r.clips===void 0?{}:{clips:{...r.clips,rate:r.clips.rate*2}}}),"quickerBattle"),$E=u((r,e,t)=>{let n=e?.clips.fight,i=t?.clips.die;if(n===void 0&&i===void 0)return r;let s=u(h=>Math.max(0,(h?.figures??1)-1)*(h?.stagger??0),"tail"),o=n?.shots??[],a=o.length===0?void 0:Math.min(...o.map(h=>h.at*1e3+ba[Hp(h)].flight)),l=o.length===0?0:Math.max(...o.map(h=>(h.at+s(e))*1e3+A1(Hp(h)))),c=a===void 0?r.reach:a;return{...r,reach:c,back:n===void 0?r.back:Math.max(r.back,(n.duration+s(e))*1e3-c,l-c),...a===void 0?{}:{lunge:0},...i===void 0?{}:{falls:(i.duration+s(t))*1e3},clips:{rate:1,fight:n!==void 0,die:i!==void 0}}},"clipPace"),KE=u((r,e)=>e||r.clips?.fight===!0?Math.max(r.back,(r.falls??0)+r.fade):(r.falls??0)+r.fade,"afterBlow"),z_=u((r,e=!0)=>r.reach+KE(r,e),"battleLength"),G_=.45,Ea=u(r=>r.start+r.pace.reach,"blowAt"),N_=u(r=>Ea(r)+KE(r.pace,r.won),"battleEnds"),D_=u(r=>Math.min(1,Math.max(0,r)),"clamp"),xD=u(r=>r*r,"easeIn"),bD=u(r=>r*r*(3-2*r),"easeInOut"),yD=u((r,e)=>{let{reach:t,back:n,fade:i,lunge:s=1,falls:o=0}=r.pace,a=e-Ea(r),l=a<o?1:1-D_(i<=0?1:(a-o)/i);return a<0?{reach:xD(D_(t<=0?1:(e-r.start)/t))*s,attacker:1,fallen:1}:r.won?{reach:(1-bD(D_(n<=0?1:a/n)))*s,attacker:1,fallen:l}:{reach:s,attacker:l,fallen:0}},"battleAt"),O_=u((r,e)=>r.x===e.x&&r.y===e.y,"sameSquare"),_D=u((r,e)=>r.attacker===e.attacker||r.attacker===e.defender,"waitsFor"),Jt,er,Pr,lm,jt,ao,F_,B_,k_,ZE,V_=class V_{constructor(){G(this,jt);G(this,Jt,[]);G(this,er,new Set);G(this,Pr,new Set);G(this,lm,0)}size(){return p(this,Jt).length}attacking(e){return p(this,Jt).some(t=>t.attacker===e&&!T(this,jt,ao).call(this,t))}holds(e){return p(this,Jt).some(t=>t.attacker===e&&!p(this,Pr).has(t.id))}released(e){return p(this,Pr).has(e)}fighting(e){return p(this,Jt).some(t=>t.attacker===e||t.defender===e)}awaitingBlow(e){return p(this,Jt).find(t=>!p(this,er).has(t.id)&&O_(t.defenderSquare,e))??null}add(e,t,n,i=t){let s={...e,id:`battle-${++ki(this,lm)._}`,start:T(this,jt,B_).call(this,e,n,p(this,Jt).filter(o=>!T(this,jt,ao).call(this,o)),Math.max(t,i)),notBefore:i,pace:n};return p(this,Jt).push(s),s}at(e){let t=[],n=[],i=[],s=new Set;return p(this,Jt).forEach(o=>{if(e>=Ea(o)&&!p(this,er).has(o.id)&&(p(this,er).add(o.id),n.push(o)),e>=N_(o)){i.push(o);return}t.push(...T(this,jt,ZE).call(this,o,e,s))}),T(this,jt,k_).call(this,i),{going:t,struck:n,ended:i}}endWhere(e,t,n=()=>!1){let i=p(this,Jt).filter(e),s=u(c=>n(c)||p(this,Pr).has(c.id),"spared"),o=p(this,Jt).filter((c,h)=>i.includes(c)||!p(this,er).has(c.id)&&i.some(f=>p(this,Jt).indexOf(f)>h&&O_(f.defenderSquare,c.defenderSquare))),a=o.filter(c=>i.includes(c)||!s(c)),l=o.filter(c=>!p(this,er).has(c.id));return l.forEach(c=>p(this,er).add(c.id)),T(this,jt,k_).call(this,a),a.length>0&&T(this,jt,F_).call(this,t),{struck:l,ended:a}}longest(e){return p(this,Jt).filter(t=>e.includes(t.attacker)&&!T(this,jt,ao).call(this,t)).reduce((t,{pace:n,won:i})=>Math.max(t,z_(n,i)),0)}busyUntil(e){return p(this,Jt).filter(t=>e.includes(t.attacker)&&!T(this,jt,ao).call(this,t)).reduce((t,n)=>Math.max(t??0,N_(n)),null)}moveOn(e,t,n=!1){let i=u(l=>p(this,er).has(l.id)||t>=Ea(l),"fallen"),s=u(l=>i(l)&&(l.attacker===e?l.won||n:!l.won),"goesOn"),o=p(this,Jt).filter(l=>l.attacker===e&&s(l)&&!p(this,Pr).has(l.id));o.forEach(l=>p(this,Pr).add(l.id));let a=this.endWhere(l=>(l.attacker===e||!n&&l.defender===e)&&!s(l),t,l=>(l.attacker===e||l.defender===e)&&s(l));return o.length>0&&T(this,jt,F_).call(this,t),{...a,released:o}}endAll(e){return this.endWhere(()=>!0,e)}};Jt=new WeakMap,er=new WeakMap,Pr=new WeakMap,lm=new WeakMap,jt=new WeakSet,ao=u(function(e){return e.won&&p(this,Pr).has(e.id)},"#movedOn"),F_=u(function(e){p(this,Jt).forEach((t,n)=>{t.start>e&&(t.start=T(this,jt,B_).call(this,t,t.pace,p(this,Jt).slice(0,n).filter(i=>!T(this,jt,ao).call(this,i)),Math.max(e,t.notBefore)))})},"#restart"),B_=u(function(e,t,n,i){return n.reduce((s,o)=>_D(o,e)?Math.max(s,N_(o)):O_(o.defenderSquare,e.defenderSquare)?Math.max(s,Ea(o)-t.reach):s,i)},"#startOf"),k_=u(function(e){e.length!==0&&(z(this,Jt,p(this,Jt).filter(t=>!e.includes(t))),e.forEach(t=>{p(this,er).delete(t.id),p(this,Pr).delete(t.id)}))},"#take"),ZE=u(function(e,t,n){let{reach:i,attacker:s,fallen:o}=yD(e,t),{from:a,edge:l,fallsAt:c}=e,{clips:h}=e.pace,f=Ea(e),d=u((x,b)=>({clip:{role:x,seconds:(t-b)/1e3*(h?.rate??1)}}),"playing"),m=h===void 0?{}:!e.won&&t>=f&&h.die?{clip:{...d("die",f).clip,...h.fight?{before:d("fight",e.start).clip}:{}}}:h.fight?d("fight",e.start):{},g=[],_=!n.has(e.attacker)&&!T(this,jt,ao).call(this,e);return T(this,jt,ao).call(this,e)||n.add(e.attacker),_&&(s>0||h?.fight===!0)&&g.push({id:e.id,battle:e.id,unit:e.attacker,fallen:!1,at:[a.at[0]+(l[0]-a.at[0])*i,a.at[1]+(l[1]-a.at[1])*i],lift:a.lift*(1-i),facing:e.facing,opacity:s,...m,...h?.fight?{fought:(t-e.start)/1e3*h.rate}:{}}),e.won&&t>=Ea(e)&&o>0&&g.push({id:`${e.id}-fallen`,battle:e.id,unit:e.defender,fallen:!0,at:[c.at[0],c.at[1]],lift:c.lift,facing:e.defenderFacing,opacity:o,...h?.die?d("die",f):{}}),g},"#fighters"),u(V_,"Battles");var U_=V_,JE=U_;var vD=1,MD=.04,SD=12,wD=u((r,e,t,n,i,{water:s=0,ceiling:o=vD}={})=>{let{from:a,direction:l}=Ry(r,e,t,n),[c,h,f]=a,[d,m,g]=l;if(m>-1e-6)return null;let _=u(y=>[c+d*y,h+m*y,f+g*y],"at"),x=u(y=>{let[w,L,I]=_(y);return L-Math.max(s,i(w,I))},"above"),b=Math.max(0,(h-o)/-m),v=(h-s)/-m,S=MD/Math.max(1e-6,Math.hypot(d,g)),M=b;for(let y=b;;y=Math.min(v,y+S)){if(x(y)<=0){let w=M,L=y;for(let k=0;k<SD;k++){let $=(w+L)/2;x($)>0?w=$:L=$}let[I,,D]=_(L);return[I,D]}if(y>=v)break;M=y}let[R,,E]=_(v);return[R,E]},"pickGround"),jE=wD;var cm=4,lo,yh,Ta,Aa,jn,lc,co,bs,_h,vh,Mh,tr,um,QE,W_,X_=class X_{constructor(e,t,n,i,s){G(this,tr);G(this,lo);G(this,yh);G(this,Ta);G(this,Aa);G(this,jn);G(this,lc);G(this,co);G(this,bs);G(this,_h);G(this,vh);G(this,Mh,u(e=>{let t=p(this,lo).getBoundingClientRect(),n=t.width>0?(e.clientX-t.left)/t.width:0,i=t.height>0?(e.clientY-t.top)/t.height:0;p(this,vh).call(this,n*p(this,jn),i*p(this,lc))},"#click"));z(this,lo,e),z(this,Ta,t),z(this,Aa,n),z(this,jn,t.period().u),z(this,lc,i),z(this,vh,s),z(this,bs,document.createElement("canvas"));let{v:o}=t.period();z(this,co,o),z(this,_h,[[0,0],[-p(this,jn),0],...o===null?[]:[[0,-o],[-p(this,jn),-o]]]);let a=Math.max(1,Math.round(p(this,jn)*cm)),l=Math.max(1,Math.round(p(this,lc)*cm));[e,p(this,bs)].forEach(c=>{c.width=a,c.height=l}),z(this,yh,e.getContext("2d")),e.addEventListener("click",p(this,Mh))}dispose(){p(this,lo).removeEventListener("click",p(this,Mh))}redraw(){let e=p(this,bs).getContext("2d");if(e===null)return;let t=p(this,Aa).width(),n=p(this,Aa).height(),i=[];e.fillStyle="#000000",e.fillRect(0,0,p(this,bs).width,p(this,bs).height);for(let s=0;s<n;s++)for(let o=0;o<t;o++){let a=p(this,Aa).get(o,s),l=a.terrain?._??"Unknown";if(l==="Unknown")continue;e.fillStyle=ea(l).colour,p(this,_h).forEach(([f,d])=>{T(this,tr,QE).call(this,e,o,s,f,d),e.fill()});let[c,h]=p(this,Ta).centre(o,s);if(a.city)i.push([c,h,dh(a.city.player)[0],2.2]);else if((a.units??[]).length>0){let f=b_(a.units,null);f!==null&&i.push([c,h,dh(f.player)[0],1.4])}}i.forEach(([s,o,a,l])=>T(this,tr,W_).call(this,s,o).forEach(([c,h])=>{e.fillStyle="#000000",e.fillRect(c-l-.5,h-l-.5,l*2+1,l*2+1),e.fillStyle=a,e.fillRect(c-l,h-l,l*2,l*2)}))}show(e,t){let n=p(this,yh);if(n===null)return;if(n.clearRect(0,0,p(this,lo).width,p(this,lo).height),n.drawImage(p(this,bs),0,0),t!==null){let[h,f]=p(this,Ta).centre(t.x,t.y);n.fillStyle="#ffffff",T(this,tr,W_).call(this,h,f).forEach(([d,m])=>n.fillRect(d-2,m-2,4,4))}if(e===null||e.length<3)return;n.strokeStyle="#ffffff",n.lineWidth=1;let i=p(this,co),s=Math.min(...e.map(([h])=>h)),o=Math.min(...e.map(([,h])=>h)),a=-p(this,jn)*Math.floor(s/p(this,jn)),l=i===null?0:-i*Math.floor(o/i);(i===null?[0]:[-i,0,i]).forEach(h=>[-p(this,jn),0,p(this,jn)].forEach(f=>{n.beginPath(),e.forEach(([d,m],g)=>{let[_,x]=T(this,tr,um).call(this,d+a+f,m+l+h);g===0?n.moveTo(_,x):n.lineTo(_,x)}),n.closePath(),n.stroke()}))}};lo=new WeakMap,yh=new WeakMap,Ta=new WeakMap,Aa=new WeakMap,jn=new WeakMap,lc=new WeakMap,co=new WeakMap,bs=new WeakMap,_h=new WeakMap,vh=new WeakMap,Mh=new WeakMap,tr=new WeakSet,um=u(function(e,t){return[e*cm,t*cm]},"#px"),QE=u(function(e,t,n,i=0,s=0){e.beginPath(),p(this,Ta).outline(t,n).forEach(([o,a],l)=>{let[c,h]=T(this,tr,um).call(this,o+i,a+s);l===0?e.moveTo(c,h):e.lineTo(c,h)}),e.closePath()},"#outline"),W_=u(function(e,t){return(p(this,co)===null?[0]:[-p(this,co),0,p(this,co)]).flatMap(i=>[-p(this,jn),0,p(this,jn)].map(s=>T(this,tr,um).call(this,e+s,t+i)))},"#everywhere"),u(X_,"Minimap3D");var H_=X_,eT=H_;var ED=u(r=>Object.entries(r.reduce((e,t)=>(e[t._]=(e[t._]??0)+t.value,e),{})).map(([e,t])=>({_:e,value:Math.floor(t)})).filter(({value:e})=>e>0),"netTileYields"),tT=u(r=>{let e=ED(r).sort((n,i)=>n._.charCodeAt(0)-i._.charCodeAt(0)).flatMap(({_:n,value:i})=>Array.from({length:i},()=>n)),t=Math.min(6,Math.max(2,Math.ceil(e.length/2)));return{columns:t,icons:e.slice(0,t*2).map((n,i)=>({_:n,column:i%t,row:Math.floor(i/t)}))}},"tileYieldGrid");var nT=u((r,e)=>(r.squareYieldsApplied?void 0:e?.squareYields?.find(({x:t,y:n})=>t===r.x&&n===r.y)?.yields)??r.yields??[],"squareYields"),iT=u(r=>r.city??r.workedBy??null,"squareCity");var TD=.9,AD=u(r=>{let{columns:e,icons:t}=tT(r),n=Math.min(e,t.length),i=Math.ceil(t.length/e);return{columns:e,slots:t.map(({_:s,column:o,row:a})=>({_:s,right:o-(n-1)/2,up:(i-1)/2-a}))}},"yieldSlots"),RD=u((r,e)=>TD*e/Math.hypot(r,2),"yieldIconSize"),rT=u((r,e)=>{let[t,n]=r.centre(0,0);return Math.min(...e.edgeDirections().map(i=>{let[s,o]=e.offset(i,0,0),[a,l]=r.centre(s,o);return Math.hypot(a-t,l-n)}))},"innerOf"),sT=u(({at:r,yields:e},t)=>{let{columns:n,slots:i}=AD(e);return i.length===0?null:{at:r,size:RD(n,t),slots:i}},"laidYields"),oT=u(r=>{let e=[...r],t=e.reduce((o,{slots:a})=>o+a.length,0),n={count:t,anchors:new Float32Array(t*3),slots:new Float32Array(t*2),sizes:new Float32Array(t),cells:new Float32Array(t),names:[]},i=new Map,s=0;return e.forEach(({at:o,size:a,slots:l})=>{l.forEach(({_:c,right:h,up:f})=>{let d=i.get(c);d===void 0&&(d=n.names.push(c)-1,i.set(c,d)),n.anchors[s*3]=o[0],n.anchors[s*3+1]=o[1],n.anchors[s*3+2]=o[2],n.slots[s*2]=h,n.slots[s*2+1]=f,n.sizes[s]=a,n.cells[s]=d,s++})}),n},"yieldMesh");var aT=u((r,{orbit:e,look:t,width:n,height:i,period:s,reach:o})=>{let a=n/i,l=Wl(e,t),c=[(e.focus[0]-l[0])/e.distance,(t-l[1])/e.distance,(e.focus[1]-l[2])/e.distance],{near:h,far:f}=ds(e.distance,s),d=Vp(e.focus,By(e,s),s),m=u(([_,x])=>[(_+1)/2*n,(1-x)/2*i],"onScreen"),g=[];return r.forEach(({key:_,centre:x,outline:b})=>d.forEach(([v,S])=>{let M=u(([k,$,F])=>[k+v,$,F+S],"moved"),R=M(x),E=(R[0]-l[0])*c[0]+(R[1]-l[1])*c[1]+(R[2]-l[2])*c[2];if(E>f)return;let y=Xl(e,t,R,a);if(y===null)return;let[w]=m(y);if(w<-o||w>n+o)return;let L=b.map(k=>Xl(e,t,M(k),a));if(L.some(k=>k===null))return;let I=Math.max(...L.map(k=>m(k)[1]));if(I<-o||I>i)return;let D=Math.min(1,Math.max(0,(E-h)/(f-h)));g.push({key:_,x:w,y:I,clear:1-D*D*(3-2*D)})})),g.sort((_,x)=>_.y-x.y)},"bannerPlaces");var cT=10,CD=4e3,uT=u(r=>r-Math.PI*2*Math.round(r/(Math.PI*2)),"shortTurn"),PD=350,ID=2e3,LD=8,hT=u(r=>({...r,...r.hitPoints?{hitPoints:{...r.hitPoints}}:{},...r.defence?{defence:{...r.defence}}:{},...r.improvements?{improvements:[...r.improvements]}:{}}),"keptUnit"),dT=u(r=>Object.fromEntries(Object.entries(r).map(([e,t])=>[e,Array.isArray(t)?[...t]:t!==null&&typeof t=="object"?{...t}:t])),"copied"),ND=u(r=>r&&{...r,...r.growth?{growth:dT(r.growth)}:{},...r.build?{build:dT(r.build)}:{},...r.yields?{yields:r.yields.map(e=>({...e}))}:{}},"keptCity"),DD=500,OD=.25,UD=400,FD=.5,kt,Rh,Ch,He,Qe,Pa,hc,Ph,at,Dt,Vn,dc,Ih,Ia,mo,fc,Lh,Nh,gi,pc,Li,mn,Ni,La,go,mc,Qn,ys,Di,xo,gc,xc,$t,xi,bo,Lr,_s,Nr,vs,Dh,yo,_o,bi,Na,bc,Dr,Da,Or,Oi,ei,Ui,Ur,Fr,Oh,Uh,Fh,Br,kr,Ms,Ss,yi,yc,_c,ws,Fi,rr,vc,Bh,Mc,vo,kh,Oa,zr,zh,Es,Sc,wc,Ua,Ec,Fa,Mo,Ba,Tc,sr,Gh,_i,So,Ac,Vh,Rc,Hh,wo,Gr,ka,za,Wh,Xh,Cc,Vr,Pc,qh,Ic,Lc,Hr,P,fT,Y_,pT,mT,cc,$_,uo,gT,xT,uc,hm,K_,Sh,ho,Z_,wh,J_,Eh,j_,dm,bT,yT,_T,vT,fm,pm,Q_,ev,MT,mm,ST,wT,ET,gm,TT,tv,nv,AT,Ra,xm,RT,CT,PT,bm,fo,ym,iv,IT,LT,rv,NT,sv,po,DT,ov,Ir,nr,Th,OT,UT,av,ir,FT,_m,BT,vm,lv,cv,uv,kT,zT,GT,VT,Ca,Mm,hv,Sm,HT,WT,dv,Yt,Ah,XT,fv,pv,mv=class mv{constructor(e,t=E1){G(this,P);G(this,kt);G(this,Rh);G(this,Ch,[]);G(this,He);G(this,Qe);G(this,Pa,null);G(this,hc,0);G(this,Ph,"");G(this,at);G(this,Dt,null);G(this,Vn,null);G(this,dc);G(this,Ih);G(this,Ia);G(this,mo,null);G(this,fc,null);G(this,Lh);G(this,Nh,!1);G(this,gi);G(this,pc);G(this,Li,new Map);G(this,mn);G(this,Ni,new Map);G(this,La,new Map);G(this,go,new Map);G(this,mc,new Map);G(this,Qn,new Map);G(this,ys,new Set);G(this,Di,new Map);G(this,xo,0);G(this,gc,new Map);G(this,xc,new Map);G(this,$t,new JE);G(this,xi,new HE);G(this,bo,new XE);G(this,Lr,new Map);G(this,_s,new Map);G(this,Nr,new Map);G(this,vs,new Map);G(this,Dh,!1);G(this,yo,new Map);G(this,_o,null);G(this,bi,new Map);G(this,Na,new Map);G(this,bc,new Set);G(this,Dr,new Set);G(this,Da,new Map);G(this,Or,new Map);G(this,Oi,new Set);G(this,ei);G(this,Ui,null);G(this,Ur,null);G(this,Fr,null);G(this,Oh,u(()=>{T(this,P,Ra).call(this)&&z(this,Fr,null),T(this,P,xm).call(this)},"#pressed"));G(this,Uh,u(e=>{let t=e.target;e.ctrlKey||e.metaKey||e.altKey||["Shift","Control","Alt","Meta","CapsLock"].includes(e.key)||t!==null&&(t.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(t.tagName))||T(this,P,xm).call(this)},"#keyed"));G(this,Fh);G(this,Br,null);G(this,kr,null);G(this,Ms,!1);G(this,Ss);G(this,yi,u(()=>{let e=p(this,kr);e!==null&&(e.timer!==null&&window.clearTimeout(e.timer),z(this,kr,null),document.removeEventListener("keydown",p(this,yi),!0),e.open&&p(this,gi).endTooltip(p(this,kt)))},"#endHover"));G(this,yc,null);G(this,_c,!0);G(this,ws,new Map);G(this,Fi);G(this,rr,new Map);G(this,vc,!1);G(this,Bh,!1);G(this,Mc,"");G(this,vo,new Map);G(this,kh,null);G(this,Oa,[]);G(this,zr,null);G(this,zh,u(()=>{},"#stopRestyled"));G(this,Es,null);G(this,Sc,!1);G(this,wc,-1/0);G(this,Ua,new Set);G(this,Ec,new Set);G(this,Fa,new Map);G(this,Mo,new Map);G(this,Ba,[]);G(this,Tc,0);G(this,sr,null);G(this,Gh,null);G(this,_i,!0);G(this,So);G(this,Ac,new Map);G(this,Vh,u(e=>p(this,Ac).get(e)?.id??null,"#modelOf"));G(this,Rc,!1);G(this,Hh,u(()=>{},"#stopUnitSize"));G(this,wo,!1);G(this,Gr,!0);G(this,ka,!1);G(this,za,new Map);G(this,Wh);G(this,Xh,u(()=>{},"#stopArtChanged"));G(this,Cc,!1);G(this,Vr);G(this,Pc);G(this,qh,"");G(this,Ic,u(()=>T(this,P,pv).call(this),"#resizeHandler"));G(this,Lc,null);G(this,Hr,!1);z(this,kt,e.mapCanvas),z(this,Rh,e.coveredBy),z(this,Vr,e.art),z(this,Fi,e.cityBanners??null),z(this,pc,{cityName:e.cityName,unitStatus:e.unitStatus}),z(this,So,My*(e.unitSize?.get()??1)),z(this,Pc,e.art.id()),this.world=e.world,z(this,He,new xE(e.world)),p(this,He).keepCities((i,s)=>{let o=`${i},${s}`;for(let a of p(this,bi).values())if(a.square===o)return a.city}),z(this,mn,new VE(p(this,He).layout.period())),z(this,ei,e.walks),z(this,Wh,rT(p(this,He).layout,e.world.topology())),z(this,Ba,e.world.tiles()),z(this,Tc,p(this,Ba).length),z(this,Ih,e.cameraDistance),z(this,Lh,e.lockVerticalEdges);let n=e.cameraDistance.get();if(z(this,at,T(this,P,Ir).call(this,{...r1(p(this,He).layout.centre(0,0)),...n===null?{}:{distance:n}})),z(this,Ia,p(this,at).distance),this.portal=new Iv(e,{centre:u(()=>T(this,P,DT).call(this),"centre"),centreOn:u((i,s)=>T(this,P,CT).call(this,i,s),"centreOn"),changed:u(()=>{z(this,at,T(this,P,Ir).call(this,p(this,at))),T(this,P,Yt).call(this)},"changed"),visible:u((i,s,o)=>T(this,P,fo).call(this,i,s,o),"visible")}),z(this,Qe,t(e.mapCanvas,{period:p(this,He).layout.period(),ground:p(this,He).ground(),yieldIcon:e.yieldIcon})),e.minimapCanvas!==null&&z(this,yc,new eT(e.minimapCanvas,p(this,He).layout,e.world,p(this,He).extentV(),(i,s)=>{z(this,Fr,null),T(this,P,Th).call(this,{...p(this,Dt)?.to??p(this,at),focus:[i,s]})})),e.debug&&e.mapCanvas.parentElement&&(z(this,Pa,T(this,P,XT).call(this,e.mapCanvas.parentElement)),window.civMap3DView=this),p(this,Fi)!==null&&e.mapCanvas.parentElement){let i=document.createElement("canvas");i.className="map3d-banners",i.setAttribute("aria-hidden","true"),Object.assign(i.style,{left:"0",pointerEvents:"none",position:"absolute",top:"0"}),e.mapCanvas.after(i),z(this,zr,i)}else z(this,Fi,null);z(this,Mc,T(this,P,vm).call(this)),p(this,He).queueAll(...T(this,P,po).call(this)),T(this,P,Ca).call(this),this.portal.on("activate-unit",i=>e.activateUnit(i)),z(this,gi,e.squares),z(this,Ss,e.playerId),z(this,Fh,e.transport),z(this,dc,new IE(e.mapCanvas,{orbit:u(()=>p(this,at),"orbit"),lookHeight:u(()=>p(this,Vn)??0,"lookHeight"),setOrbit:u(i=>this.setOrbit(i),"setOrbit"),settle:u(i=>T(this,P,Ir).call(this,i),"settle")},{click:u((i,s)=>T(this,P,IT).call(this,i,s),"click"),menu:u((i,s,o,a,l)=>T(this,P,LT).call(this,i,s,o,a,l),"menu"),menuOnRightClick:u(()=>p(this,gi).menuOnRightClick(),"menuOnRightClick"),menuOpen:u(()=>p(this,gi).menuOpen(),"menuOpen"),hover:u(i=>T(this,P,NT).call(this,i),"hover")})),window.addEventListener("resize",p(this,Ic)),document.addEventListener("keydown",p(this,Uh),!0),e.mapCanvas.addEventListener("pointerdown",p(this,Oh),!0),typeof ResizeObserver<"u"&&e.mapCanvas.parentElement&&(z(this,Lc,new ResizeObserver(p(this,Ic))),p(this,Lc).observe(e.mapCanvas.parentElement)),T(this,P,pv).call(this),T(this,P,Yt).call(this),z(this,Hh,e.unitSize?.onChange(()=>{let i=My*(e.unitSize?.get()??1);i!==p(this,So)&&!p(this,Hr)&&(z(this,So,i),T(this,P,Ca).call(this),T(this,P,Yt).call(this))})??(()=>{})),z(this,Xh,e.artChanged?.(()=>{p(this,Hr)||(z(this,Gr,!0),T(this,P,lv).call(this))})??(()=>{})),z(this,zh,p(this,Fi)?.restyled(()=>{p(this,Hr)||T(this,P,lv).call(this)})??(()=>{})),e.models?.forEach(({url:i},s)=>T(this,P,fT).call(this,i,s))}land(){return p(this,He)}orbit(){return p(this,at)}moving(){return p(this,Dt)!==null||p(this,dc).moving()}setOrbit(e){p(this,yi).call(this),z(this,Dt,null),z(this,at,T(this,P,Ir).call(this,e)),T(this,P,Yt).call(this)}activeUnit(){return{unit:p(this,sr),pendingTile:p(this,Gh)}}centre(e){this.portal.setCenter(e.x,e.y)}turnBy(e){let t=p(this,Dt)?.to??p(this,at);T(this,P,Th).call(this,{...t,yaw:t.yaw+e*Ay},T(this,P,Y_).call(this)+e*Ay)}heading(){return{turn:(p(this,Dt)?.to??p(this,at)).yaw,directions:Lv(p(this,He).layout,this.world.topology())}}faceNorth(){T(this,P,Th).call(this,{...p(this,Dt)?.to??p(this,at),yaw:0},uT(-p(this,at).yaw))}debugViewModes(){return[]}dispose(){T(this,P,dv).call(this,!0),z(this,Hr,!0),p(this,mn).endAll(0),p(this,$t).endAll(0),p(this,xi).endAll(),p(this,Nr).clear(),p(this,vs).clear(),p(this,yo).clear(),z(this,_o,null),p(this,Lr).clear(),p(this,_s).clear(),p(this,bi).clear(),p(this,Na).clear(),p(this,bc).clear(),p(this,Da).clear(),p(this,Or).clear(),p(this,Oi).clear(),p(this,Qn).clear(),p(this,ys).clear(),p(this,Di).clear(),document.removeEventListener("keydown",p(this,Uh),!0),p(this,kt).removeEventListener("pointerdown",p(this,Oh),!0),p(this,Hh).call(this),p(this,Xh).call(this),p(this,zh).call(this),p(this,zr)?.remove(),p(this,rr).clear(),p(this,vo).clear(),p(this,yi).call(this),p(this,dc).dispose(),p(this,yc)?.dispose(),window.removeEventListener("resize",p(this,Ic)),p(this,Lc)?.disconnect(),p(this,Es)!==null&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(p(this,Es)),z(this,Es,null),p(this,Pa)?.remove(),p(this,Qe).dispose();let e=window;e.civMap3DView===this&&delete e.civMap3DView}endPicking(){let e=p(this,Br);e!==null&&(z(this,Br,null),p(this,kt).classList.remove("picking-tile"),e.window?.close())}flush(){T(this,P,av).call(this),T(this,P,Yt).call(this)}mapEvent(e){if(e.kind==="moved"){T(this,P,mT).call(this,e.unit,e.from,e.to),T(this,P,bm).call(this,e.unit.id,e.from,e.to);return}T(this,P,bm).call(this,e.attacker.id,e.attacker.tile,e.defender.tile),T(this,P,bm).call(this,e.defender.id,e.defender.tile,e.attacker.tile),T(this,P,pT).call(this,e)}measureCovered(){let e=p(this,kt).getBoundingClientRect();z(this,Ch,p(this,Rh).map(t=>{let n=t.getBoundingClientRect(),i=t.parentElement?.getBoundingClientRect()??n;return{left:Math.max(n.left,i.left,e.left)-e.left,top:Math.max(n.top,i.top,e.top)-e.top,right:Math.min(n.right,i.right,e.right)-e.left,bottom:Math.min(n.bottom,i.bottom,e.bottom)-e.top}}).filter(({left:t,top:n,right:i,bottom:s})=>i>t&&s>n))}pickTile(e,t,n){this.endPicking();let i={accept:e,onPick:t,window:null};z(this,Br,i),p(this,kt).classList.add("picking-tile"),i.window=p(this,gi).prompt(n,()=>{p(this,Br)===i&&(z(this,Br,null),p(this,kt).classList.remove("picking-tile"))})}picking(){return p(this,Br)!==null}queueTile(e){let t=`${e.x},${e.y}`;p(this,Fa).set(t,e),p(this,gc).set(t,++ki(this,xo)._)}redrawArt(){let e=p(this,Vr).id();return e===p(this,Pc)?"unchanged":(z(this,Pc,e),z(this,Gr,!0),"redrawn")}releaseTiles(){let e=p(this,Dh)&&T(this,P,mm).call(this);e&&p(this,Fa).size>0&&p(this,_o)===null&&z(this,_o,new Set([...p(this,_s).keys(),...p(this,Ni).keys()])),p(this,Fa).forEach((t,n)=>{let i=p(this,gc).get(n)??0;e&&!p(this,yo).has(n)&&p(this,yo).set(n,p(this,Lr).get(n)??{units:[],shown:null,ringed:!1,inCity:!1}),p(this,Mo).set(n,t),p(this,xc).set(n,i),p(this,bi).forEach(s=>{s.square===n&&i>s.after&&(s.patched=!0)})}),p(this,Fa).clear(),p(this,gc).clear(),p(this,Mo).size>0&&T(this,P,Yt).call(this)}setActiveUnit(e,t){let n=p(this,sr)?.tile;if(z(this,sr,e),z(this,Gh,t??null),T(this,P,Ra).call(this)&&T(this,P,RT).call(this)&&T(this,P,xm).call(this),T(this,P,Ra).call(this)){T(this,P,Yt).call(this);return}z(this,Fr,null);let i=p(this,Ur);z(this,Ui,e?.id??null),z(this,Ur,e?.tile??null),[n,i,e?.tile].forEach(s=>{s&&T(this,P,ir).call(this,s.x,s.y)}),T(this,P,Yt).call(this)}setWaiting(e){z(this,Cc,e),e&&p(this,yi).call(this)}showActiveUnit(e){p(this,_i)||(z(this,_i,!0),p(this,He).showTowns(!0,...T(this,P,po).call(this)),T(this,P,Ca).call(this),T(this,P,Yt).call(this))}shown(){return{units:p(this,_i),yields:p(this,wo),waiting:p(this,Cc)}}tilesPending(){return p(this,Mo).size}toggleUnits(){z(this,_i,!p(this,_i)),p(this,He).showTowns(p(this,_i),...T(this,P,po).call(this)),T(this,P,Ca).call(this),z(this,Ms,!0),T(this,P,Yt).call(this)}toggleYields(){z(this,wo,!p(this,wo)),z(this,Gr,!0),z(this,Ms,!0),T(this,P,Yt).call(this)}zoomBy(e){p(this,yi).call(this),z(this,at,T(this,P,Ir).call(this,Hl(p(this,at),e))),p(this,Dt)!==null&&(p(this,Dt).from=T(this,P,Ir).call(this,Hl(p(this,Dt).from,e)),p(this,Dt).to=T(this,P,Ir).call(this,Hl(p(this,Dt).to,e))),T(this,P,Yt).call(this)}};kt=new WeakMap,Rh=new WeakMap,Ch=new WeakMap,He=new WeakMap,Qe=new WeakMap,Pa=new WeakMap,hc=new WeakMap,Ph=new WeakMap,at=new WeakMap,Dt=new WeakMap,Vn=new WeakMap,dc=new WeakMap,Ih=new WeakMap,Ia=new WeakMap,mo=new WeakMap,fc=new WeakMap,Lh=new WeakMap,Nh=new WeakMap,gi=new WeakMap,pc=new WeakMap,Li=new WeakMap,mn=new WeakMap,Ni=new WeakMap,La=new WeakMap,go=new WeakMap,mc=new WeakMap,Qn=new WeakMap,ys=new WeakMap,Di=new WeakMap,xo=new WeakMap,gc=new WeakMap,xc=new WeakMap,$t=new WeakMap,xi=new WeakMap,bo=new WeakMap,Lr=new WeakMap,_s=new WeakMap,Nr=new WeakMap,vs=new WeakMap,Dh=new WeakMap,yo=new WeakMap,_o=new WeakMap,bi=new WeakMap,Na=new WeakMap,bc=new WeakMap,Dr=new WeakMap,Da=new WeakMap,Or=new WeakMap,Oi=new WeakMap,ei=new WeakMap,Ui=new WeakMap,Ur=new WeakMap,Fr=new WeakMap,Oh=new WeakMap,Uh=new WeakMap,Fh=new WeakMap,Br=new WeakMap,kr=new WeakMap,Ms=new WeakMap,Ss=new WeakMap,yi=new WeakMap,yc=new WeakMap,_c=new WeakMap,ws=new WeakMap,Fi=new WeakMap,rr=new WeakMap,vc=new WeakMap,Bh=new WeakMap,Mc=new WeakMap,vo=new WeakMap,kh=new WeakMap,Oa=new WeakMap,zr=new WeakMap,zh=new WeakMap,Es=new WeakMap,Sc=new WeakMap,wc=new WeakMap,Ua=new WeakMap,Ec=new WeakMap,Fa=new WeakMap,Mo=new WeakMap,Ba=new WeakMap,Tc=new WeakMap,sr=new WeakMap,Gh=new WeakMap,_i=new WeakMap,So=new WeakMap,Ac=new WeakMap,Vh=new WeakMap,Rc=new WeakMap,Hh=new WeakMap,wo=new WeakMap,Gr=new WeakMap,ka=new WeakMap,za=new WeakMap,Wh=new WeakMap,Xh=new WeakMap,Cc=new WeakMap,Vr=new WeakMap,Pc=new WeakMap,qh=new WeakMap,Ic=new WeakMap,Lc=new WeakMap,Hr=new WeakMap,P=new WeakSet,fT=u(function(e,t){p(this,Qe).loadModels?.(e,(n,i)=>{if(p(this,Hr))return;let s=i.filter(o=>(p(this,Ac).get(o)?.rank??1/0)>=t);s.length!==0&&(s.forEach(o=>p(this,Ac).set(o,{id:n,rank:t})),z(this,Rc,!0),T(this,P,Yt).call(this))}).catch(n=>console.warn("The 3D map's models couldn't be loaded:",n))},"#loadModels"),Y_=u(function(){let e=p(this,Dt);return e===null?0:e.turn*(1-e.drawn)},"#turnLeft"),pT=u(function({attacker:e,defender:t,winner:n}){let i=p(this,ei)?.speed()??"normal",s=performance.now();if(typeof requestAnimationFrame!="function"||Ai()||i==="off"||e.player!==p(this,Ss)&&t.player!==p(this,Ss)&&!(p(this,ei)?.rivals()??!0)||!T(this,P,fo).call(this,e.tile.x,e.tile.y,-.5)&&!T(this,P,fo).call(this,t.tile.x,t.tile.y,-.5))return;let o=this.world.get(e.tile.x,e.tile.y).units.find(({id:$})=>$===e.id),a=`${t.tile.x},${t.tile.y}`,l=this.world.get(t.tile.x,t.tile.y),c=[...p(this,bi).values()].filter(({square:$,patched:F})=>$===a&&!F).at(-1),h=c===void 0?l.units.filter(({id:$})=>!p(this,Oi).has($)).map(hT):c.units.filter(({id:$})=>!(c.won&&$===c.defender));if(p(this,Oi).has(e.id)||!h.some(({id:$})=>$===t.id))return;let f=u($=>{let F=$===void 0?null:T(this,P,wh).call(this,[$]);return F===null?null:p(this,Qe).rigFacts?.(F)??null},"facts"),d=f(o??p(this,Ni).get(e.id)),m=$E(qE,d,n==="attacker"?f(h.find(({id:$})=>$===t.id)):d),g=i==="fast"?YE(m):m,_=p(this,$t).busyUntil([e.id,t.id]),x=Math.max(z_(g),p(this,$t).longest([e.id,t.id]));_!==null&&_-s>Math.max(ID,2*x)&&T(this,P,pm).call(this,p(this,$t).endWhere($=>($.attacker===e.id||$.attacker===t.id)&&!p(this,$t).released($.id),s)),T(this,P,$_).call(this,e.id);let[b,v]=p(this,He).layout.centre(e.tile.x,e.tile.y),[S,M]=p(this,He).layout.centre(t.tile.x,t.tile.y),{u:R,v:E}=p(this,He).layout.period(),y=u(($,F)=>F===null?$:$-F*Math.round($/F),"short"),w=y(S-b,R),L=y(M-v,E),I=`${e.tile.x},${e.tile.y}`,D=p(this,$t).add({attacker:e.id,defender:t.id,attackerSquare:e.tile,defenderSquare:t.tile,won:n==="attacker",from:T(this,P,cc).call(this,e.tile),edge:[b+w*G_,v+L*G_],fallsAt:T(this,P,cc).call(this,t.tile),facing:p(this,Li).get(e.id)??Math.atan2(w,L),defenderFacing:p(this,Li).get(t.id)??Math.atan2(-w,-L)},s,g,p(this,mn).endsAt(e.id)??s),k=d?.clips.fight?.shots??[];g.clips?.fight&&d!==null&&k.length>0&&p(this,Da).set(D.id,{times:C1(R1(k,d.figures,d.stagger),n!=="attacker"&&g.clips.die?g.reach/1e3*g.clips.rate:null),left:new Set,target:T(this,P,Sh).call(this,D.fallsAt.at,D.fallsAt.lift+zy),figures:d.figures,rate:g.clips.rate}),p(this,bi).set(D.id,{square:a,city:c?.city??ND(l.city),units:h,after:p(this,xo),won:n==="attacker",defender:t.id,patched:!1}),o!==void 0&&p(this,Ni).set(e.id,o),[e.id,t.id].forEach($=>p(this,Di).set($,{squares:[I,a],after:p(this,xo)})),T(this,P,ir).call(this,e.tile.x,e.tile.y),T(this,P,ir).call(this,t.tile.x,t.tile.y),T(this,P,Yt).call(this)},"#fight"),mT=u(function(e,t,n){let i=p(this,ei)?.speed()??"normal";if(e.id===p(this,Ui)&&z(this,Ur,n),typeof requestAnimationFrame!="function"||Ai()||i==="off")return;if(e.player!==p(this,Ss)&&p(this,$t).attacking(e.id)){p(this,Di).set(e.id,{squares:[`${t.x},${t.y}`,`${n.x},${n.y}`],after:p(this,xo)});return}T(this,P,Q_).call(this,p(this,$t).moveOn(e.id,performance.now()));let s=p(this,mn).walking(e.id),o=this.world.get(t.x,t.y).units.find(({id:f})=>f===e.id)??(T(this,P,uo).call(this,e.id)?p(this,Ni).get(e.id):void 0),a=e.player===p(this,Ss);if(o===void 0||!a&&!s&&(!(p(this,ei)?.rivals()??!0)||!T(this,P,fo).call(this,t.x,t.y,-.5)&&!T(this,P,fo).call(this,n.x,n.y,-.5)))return;let l=a?UE:FE;p(this,Ni).set(e.id,o),p(this,Di).set(e.id,{squares:[`${t.x},${t.y}`,`${n.x},${n.y}`],after:p(this,xo)}),T(this,P,$_).call(this,e.id);let c=Bl(Fl(o._,o.__??[])),h=c?void 0:p(this,He).roadPath(t.x,t.y,n.x,n.y)?.slice(1,-1);p(this,mn).step(e.id,t,n,T(this,P,cc).call(this,t),{...T(this,P,cc).call(this,n),...h===void 0?{}:{via:h}},performance.now(),i==="fast"?BE(l):l,c),T(this,P,Yt).call(this)},"#walk"),cc=u(function({x:e,y:t},n=!!this.world.get(e,t).city){let[i,s]=p(this,He).layout.centre(e,t),o=Math.max(0,p(this,He).surfaceAt(i,s)),a=[i,s+(n?fa:0)];return{at:a,lift:o-Math.max(0,p(this,He).surfaceAt(...a)),middle:[i,s]}},"#standing"),$_=u(function(e){p(this,ys).delete(e)&&p(this,Qn).forEach((t,n)=>{let i=t.units.filter(s=>s!==e);if(i.length!==t.units.length){if(i.length===0){p(this,Qn).delete(n),T(this,P,ho).call(this,n);return}p(this,Qn).set(n,{...t,units:i})}})},"#stepsOn"),uo=u(function(e){return p(this,mn).walking(e)||p(this,ys).has(e)||p(this,$t).attacking(e)||p(this,Oi).has(e)},"#leftOff"),gT=u(function(e){if(p(this,mn).dropped().forEach(i=>T(this,P,ho).call(this,i)),p(this,Qn).forEach(i=>T(this,P,uc).call(this,i)),p(this,mn).size()===0)return;if(Ai()||(p(this,ei)?.speed()??"normal")==="off"){T(this,P,Eh).call(this,p(this,mn).endAll(e));return}let{going:t,ended:n}=p(this,mn).at(e);T(this,P,Eh).call(this,n),t.forEach(i=>{T(this,P,uc).call(this,i,!0)!==null&&i.units.some(o=>{let a=p(this,Ni).get(o);return a!==void 0&&Fl(a._,a.__??[]).shape==="ship"})&&p(this,bo).trail(i.id,i.at,e)})},"#placeWalkers"),xT=u(function(e){if(p(this,bo).size()===0)return;if(Ai()||(p(this,ei)?.speed()??"normal")==="off"){p(this,bo).endAll().forEach(i=>p(this,Qe).wake(i,null));return}let{going:t,gone:n}=p(this,bo).at(e);n.forEach(i=>p(this,Qe).wake(i,null)),t.forEach(({id:i,points:s})=>{let[o]=s;if(o===void 0){p(this,Qe).wake(i,null);return}let[a,l]=T(this,P,K_).call(this,o.at);p(this,Qe).wake(i,[a,0,l],WE(s))})},"#placeWakes"),uc=u(function(e,t=!1){let n=T(this,P,Z_).call(this,e.units),i=null;if(t){let s=p(this,mc).get(e.id),o=(s?.by??0)+(s===void 0?0:Math.hypot(e.at[0]-s.at[0],e.at[1]-s.at[1]));p(this,mc).set(e.id,{at:[e.at[0],e.at[1]],by:o}),i={role:"move",seconds:o/b1}}return T(this,P,hm).call(this,e,n,1,i),n},"#drawWalker"),hm=u(function({id:e,at:t,lift:n,facing:i,aloft:s=0},o,a=1,l=null){let c=o===null?null:JSON.stringify(o);c!==(p(this,go).get(e)??null)&&(p(this,Qe).setWalker(e,o),c===null?p(this,go).delete(e):p(this,go).set(e,c)),o!==null&&(p(this,Qe).placeWalker(e,T(this,P,Sh).call(this,t,n),i,s),p(this,Qe).fadeWalker(e,a),p(this,Qe).poseWalker?.(e,l?.role??null,l?.seconds??0,l?.before))},"#drawFigure"),K_=u(function(e){let{u:t,v:n}=p(this,He).layout.period(),i=u((s,o)=>o===null?s:(s%o+o)%o,"within");return[i(e[0],t),i(e[1],n)]},"#wrapped"),Sh=u(function(e,t){let[n,i]=T(this,P,K_).call(this,e);return[n,Math.max(0,p(this,He).surfaceAt(n,i))+t,i]},"#onLand"),ho=u(function(e){p(this,mc).delete(e),p(this,go).delete(e)&&p(this,Qe).setWalker(e,null)},"#takeAway"),Z_=u(function(e){let t=e.flatMap(n=>{let i=p(this,Ni).get(n);return i===void 0?[]:[i]});return T(this,P,wh).call(this,t)},"#walkerMarker"),wh=u(function(e,t=p(this,Ui)){return y_({city:null,units:e},t,p(this,_i),p(this,pc),()=>0,p(this,So),p(this,Vh))},"#unitsMarker"),J_=u(function({units:e}){return e.some(t=>p(this,Di).has(t))},"#awaitsPatch"),Eh=u(function(e){let t=new Set;e.forEach(n=>{let i={...n,units:n.units.filter(s=>!p(this,$t).attacking(s))};if(i.units.length>0&&T(this,P,J_).call(this,i)){p(this,Qn).set(i.id,i),i.units.forEach(s=>p(this,ys).add(s)),T(this,P,uc).call(this,i);return}T(this,P,ho).call(this,n.id),n.units.forEach(s=>p(this,ys).delete(s)),T(this,P,j_).call(this,n.units,t)}),T(this,P,dm).call(this,t)},"#walksEnded"),j_=u(function(e,t){e.forEach(n=>{T(this,P,uo).call(this,n)&&!p(this,Oi).has(n)||(p(this,La).get(n)?.forEach(i=>t.add(i)),p(this,La).delete(n),p(this,Ni).delete(n))})},"#release"),dm=u(function(e){let t=p(this,Ui);t!==null&&t!==(p(this,sr)?.id??null)&&!p(this,mn).walking(t)&&!p(this,$t).holds(t)&&T(this,P,AT).call(this,e),e.forEach(n=>{let[i,s]=n.split(",").map(Number);T(this,P,ir).call(this,i,s)})},"#released"),bT=u(function(e){let t=new Set;if(p(this,$t).size()===0){T(this,P,fm).call(this,t);return}if(Ai()||(p(this,ei)?.speed()??"normal")==="off"){T(this,P,pm).call(this,p(this,$t).endAll(e)),T(this,P,fm).call(this,t);return}let{going:n,struck:i,ended:s}=p(this,$t).at(e);i.forEach(o=>T(this,P,ev).call(this,o,!0)),n.forEach(o=>{if(!o.fallen&&p(this,mn).walking(o.unit)){T(this,P,ho).call(this,o.id);return}T(this,P,TT).call(this,o)&&t.add(T(this,P,vT).call(this,o))}),T(this,P,yT).call(this,e,n,t),T(this,P,tv).call(this,s),T(this,P,fm).call(this,t)},"#placeBattles"),yT=u(function(e,t,n){t.forEach(({id:i,battle:s,at:o,lift:a,fallen:l,fought:c})=>{let h=p(this,Da).get(s);h===void 0||l||c===void 0||h.times.forEach((f,d)=>{if(h.left.has(d)||c<f.leaves)return;let m=p(this,Qe).jointAt?.(i,f.figure,f.joint)??T(this,P,Sh).call(this,o,a+zy),{u:g,v:_}=p(this,He).layout.period(),x=u((S,M,R)=>R===null?S:S+R*Math.round((M-S)/R),"near"),b=[x(h.target[0],m[0],g),h.target[1],x(h.target[2],m[2],_)],v=e-(c-f.leaves)*1e3/h.rate;h.left.add(d),p(this,Or).set(`${s}-shot-${d}`,{battle:s,kind:f.kind,from:m,to:P1(m,b,f.figure,h.figures),leaves:v,lands:v+ba[f.kind].flight/h.rate,rate:h.rate})})}),p(this,Or).forEach(({battle:i,kind:s,from:o,to:a,leaves:l,lands:c,rate:h},f)=>{let d=ba[s],m=`${f}-muzzle`,g=`${f}-hit`;if(!p(this,go).has(i)&&!(p(this,$t).released(i)&&p(this,_i))){p(this,Qe).shot?.(f,null),p(this,Or).delete(f);return}let _=d.muzzle>0&&(e-l)*h/T1,x=e<c?!1:(e-c)*h/Gy;if(_!==!1&&_<1&&(p(this,Dr).add(m),p(this,Qe).puff(m,o,_,d.muzzle,0),n.add(m)),x===!1){let b=(e-l)/(c-l);p(this,Qe).shot?.(f,I1(o,a,b,d.arc),b,s,L1(o,a,b,d.arc));return}p(this,Qe).shot?.(f,null),x<1&&(p(this,Dr).add(g),p(this,Qe).puff(g,a,x,d.hit,d.burst?Fy:null),n.add(g)),x>=1&&(_===!1||_>=1)&&p(this,Or).delete(f)})},"#placeShots"),_T=u(function(e){p(this,Da).delete(e),p(this,Or).forEach((t,n)=>{t.battle===e&&(p(this,Qe).shot?.(n,null),p(this,Qe).puff(`${n}-hit`,null),p(this,Dr).delete(`${n}-hit`),p(this,Qe).puff(`${n}-muzzle`,null),p(this,Dr).delete(`${n}-muzzle`),p(this,Or).delete(n))})},"#shotsOver"),vT=u(function({battle:e,at:t,lift:n,opacity:i}){let s=`${e}-puff`;return p(this,Dr).add(s),p(this,Qe).puff(s,T(this,P,Sh).call(this,t,n),1-i),s},"#puff"),fm=u(function(e){p(this,Dr).forEach(t=>{e.has(t)||(p(this,Dr).delete(t),p(this,Qe).puff(t,null))})},"#puffsOver"),pm=u(function({struck:e,ended:t}){e.forEach(n=>T(this,P,ev).call(this,n,!t.includes(n))),T(this,P,tv).call(this,t)},"#battlesOver"),Q_=u(function({struck:e,ended:t,released:n}){let i=new Set;T(this,P,pm).call(this,{struck:e,ended:t}),n.forEach(s=>{s.won&&(p(this,bc).add(s.id),T(this,P,nv).call(this,s,i))}),T(this,P,dm).call(this,i)},"#movedOn"),ev=u(function(e,t){let{square:n,units:i}=p(this,bi).get(e.id)??{square:"",units:[]},{x:s,y:o}=e.defenderSquare,a=[...p(this,bi).entries()].find(([f,d])=>f!==e.id&&d.square===n)?.[1],l=new Set((a?.units??this.world.get(s,o).units).map(({id:f})=>f)),c=e.won?e.defender:e.attacker,h=i.filter(({id:f})=>e.won&&f===e.defender||!l.has(f)&&!T(this,P,uo).call(this,f));p(this,bi).delete(e.id),p(this,He).changed([[s,o]],...T(this,P,po).call(this)),p(this,Di).has(c)&&p(this,Oi).add(c),t&&e.won&&h.length>0&&p(this,Na).set(e.id,h),T(this,P,ir).call(this,s,o)},"#blow"),MT=u(function(e,t,{shown:n,ringed:i,inCity:s}){if((p(this,Lr).get(e)?.units??[]).forEach(({id:o})=>{p(this,_s).get(o)===e&&p(this,_s).delete(o)}),t.length===0?p(this,Lr).delete(e):p(this,Lr).set(e,{units:t.map(hT),shown:n,ringed:i,inCity:s}),t.forEach(({id:o})=>p(this,_s).set(o,e)),p(this,Nr).size>0){let o=[...p(this,Nr).entries()].filter(([,a])=>a.units.some(l=>t.some(({id:c})=>c===l.id))).map(([a])=>a);o.forEach(a=>p(this,xi).end(a)),T(this,P,gm).call(this,o)}},"#drawnOn"),mm=u(function(){return typeof requestAnimationFrame=="function"&&!Ai()&&(p(this,ei)?.speed()??"normal")!=="off"},"#fadesShown"),ST=u(function(e){return p(this,_s).has(e)||T(this,P,uo).call(this,e)},"#drawnAnywhere"),wT=u(function(e,t){let n=[],i=[];if(e.forEach((l,c)=>{let h=l.units.filter(({id:d})=>!T(this,P,ST).call(this,d)),f=p(this,Lr).get(c)?.shown??null;l.shown!==null&&h.some(({id:d})=>d===l.shown)&&n.push([c,l,h]),l.units.length===0&&f!==null&&!t.has(f)&&i.push([c,f])}),n.length+i.length===0||n.length+i.length>LD)return;let s=u(([l])=>{let[c,h]=l.split(",").map(Number);return T(this,P,fo).call(this,c,h,0)},"onScreen"),o=performance.now(),a=(p(this,ei)?.speed()??"normal")==="fast"?500/2:500;n.filter(s).forEach(([l,c,h])=>{let[f,d]=l.split(",").map(Number);p(this,Nr).set(p(this,xi).add("out",o,a),{units:[...h.filter(({id:m})=>m===c.shown),...h.filter(({id:m})=>m!==c.shown)],shown:c.ringed?c.shown:null,at:T(this,P,cc).call(this,{x:f,y:d},c.inCity),facing:c.shown===null?0:p(this,Li).get(c.shown)??0})}),i.filter(s).forEach(([l,c])=>{p(this,vs).set(p(this,xi).add("in",o,a),{key:l,unit:c}),p(this,Qe).fadeMarker(l,0)}),T(this,P,Yt).call(this)},"#fadeChanged"),ET=u(function(e){if(p(this,xi).size()===0)return;if(!T(this,P,mm).call(this)){T(this,P,gm).call(this,p(this,xi).endAll());return}let{going:t,ended:n}=p(this,xi).at(e),i=[];t.forEach(({id:s,opacity:o})=>{let a=p(this,Nr).get(s),l=p(this,vs).get(s);if(a!==void 0){let c=T(this,P,wh).call(this,a.units,a.shown);if(c===null){p(this,xi).end(s),i.push(s);return}T(this,P,hm).call(this,{id:s,at:[a.at.at[0],a.at.at[1]],lift:a.at.lift,facing:a.facing},c,o);return}if(l!==void 0){if((p(this,Lr).get(l.key)?.shown??null)!==l.unit){p(this,xi).end(s),i.push(s);return}p(this,Qe).fadeMarker(l.key,o)}}),T(this,P,gm).call(this,[...n,...i])},"#placeFades"),gm=u(function(e){e.forEach(t=>{let n=p(this,vs).get(t);p(this,Nr).delete(t)&&T(this,P,ho).call(this,t),n!==void 0&&(p(this,vs).delete(t),[...p(this,vs).values()].some(({key:i})=>i===n.key)||p(this,Qe).fadeMarker(n.key,1))})},"#fadesOver"),TT=u(function(e){let t=p(this,Na).get(e.battle);if(e.fallen&&t===void 0)return!1;let n=e.fallen?T(this,P,wh).call(this,t):T(this,P,Z_).call(this,[e.unit]);return T(this,P,hm).call(this,e,n,e.opacity,e.clip??null),n!==null&&(e.fallen||e.opacity<1)},"#drawFighter"),tv=u(function(e){if(e.length===0)return;let t=new Set;e.forEach(n=>{let{id:i}=n;T(this,P,_T).call(this,i),T(this,P,ho).call(this,`${i}-fallen`),p(this,Na).delete(i),p(this,bi).delete(i)&&p(this,He).changed([[n.defenderSquare.x,n.defenderSquare.y]],...T(this,P,po).call(this)),p(this,bc).delete(i)||T(this,P,nv).call(this,n,t)}),T(this,P,dm).call(this,t)},"#battlesEnded"),nv=u(function(e,t){let{id:n,attacker:i,won:s,from:o,attackerSquare:a,facing:l}=e;if(p(this,Di).has(i)&&!T(this,P,uo).call(this,i))if(!s)p(this,Oi).add(i);else{let c={id:n,units:[i],at:[o.at[0],o.at[1]],lift:o.lift,aloft:0,facing:l,from:a,before:a,to:a};p(this,Qn).set(n,c),p(this,ys).add(i),T(this,P,uc).call(this,c);return}T(this,P,ho).call(this,n),T(this,P,j_).call(this,[i],t)},"#attackerDone"),AT=u(function(e){let t=p(this,sr);[p(this,Ur),t?.tile].forEach(i=>{i&&e.add(`${i.x},${i.y}`)}),z(this,Ui,t?.id??null),z(this,Ur,t?.tile??null),p(this,Qn).forEach(i=>T(this,P,uc).call(this,i));let n=p(this,Fr);n!==null&&(z(this,Fr,null),T(this,P,ov).call(this,n.x,n.y))},"#caughtUp"),Ra=u(function(){let e=p(this,Ui);return e!==null&&e!==(p(this,sr)?.id??null)&&(p(this,mn).walking(e)||p(this,$t).holds(e))},"#holding"),xm=u(function(){let e=p(this,Ui);e===null||!T(this,P,Ra).call(this)||(T(this,P,Eh).call(this,p(this,mn).endWhere(t=>t.includes(e),performance.now())),T(this,P,Q_).call(this,p(this,$t).moveOn(e,performance.now(),!0)),T(this,P,Yt).call(this))},"#hurry"),RT=u(function(){let e=p(this,Ur),t=e===null?void 0:this.world.get(e.x,e.y).units.find(({id:n})=>n===p(this,Ui));return t!==void 0&&t.active!==!1&&(t.moves?.value??0)>0},"#ringedOffered"),CT=u(function(e,t){if(T(this,P,Ra).call(this)){z(this,Fr,{x:e,y:t});return}T(this,P,ov).call(this,e,t)},"#centreSoon"),PT=u(function(e){if(p(this,Di).forEach(({squares:n,after:i},s)=>{n.some(o=>(e.get(o)??0)>i)&&(p(this,Di).delete(s),p(this,Oi).delete(s))}),p(this,Qn).size===0)return;let t=[...p(this,Qn).values()].filter(n=>!T(this,P,J_).call(this,n));t.forEach(n=>p(this,Qn).delete(n.id)),T(this,P,Eh).call(this,t)},"#patched"),bm=u(function(e,t,n){let[i,s]=p(this,He).layout.centre(t.x,t.y),[o,a]=p(this,He).layout.centre(n.x,n.y),{u:l,v:c}=p(this,He).layout.period(),h=u((m,g)=>g===null?m:m-g*Math.round(m/g),"short"),f=h(o-i,l),d=h(a-s,c);f===0&&d===0||(p(this,Li).delete(e),p(this,Li).set(e,Math.round(Math.atan2(f,d)*1e3)/1e3),p(this,Li).size>CD&&p(this,Li).delete(p(this,Li).keys().next().value),[t,n].forEach(({x:m,y:g})=>T(this,P,ir).call(this,m,g)),T(this,P,Yt).call(this))},"#face"),fo=u(function(e,t,n){let i=p(this,kt).clientWidth,s=p(this,kt).clientHeight;if(i<=0||s<=0)return!1;let o=p(this,Fr),a=o===null?p(this,Dt)?.to??p(this,at):{...p(this,Dt)?.to??p(this,at),focus:p(this,He).layout.centre(o.x,o.y)},[l,c]=p(this,He).layout.centre(e,t),{u:h,v:f}=T(this,P,nr).call(this),[d,m]=a.focus,g=u((w,L,I)=>I===null?w:w+I*Math.round((L-w)/I),"nearest"),_=[g(l,d,h),Math.max(0,p(this,He).heightAt(l,c)),g(c,m,f)],x=i/s,b=p(this,Vn)??0,v=Xl(a,b,_,x),S=Xl(a,b,[_[0]+Math.cos(a.yaw),_[1],_[2]+Math.sin(a.yaw)],x);if(v===null||S===null)return!1;let M=(v[0]+1)/2*i,R=(1-v[1])/2*s,E=Math.abs(S[0]-v[0])*(i/2),y=(n+.5)*E;return M>=y&&M<=i-y&&R>=y&&R<=s-y&&!p(this,Ch).some(({left:w,top:L,right:I,bottom:D})=>M>=w-E/2&&M<=I+E/2&&R>=L-E/2&&R<=D+E/2)},"#visible"),ym=u(function(e,t){let n=p(this,kt).clientWidth,i=p(this,kt).clientHeight;if(n<=0||i<=0)return null;let s=[e/n*2-1,1-t/i*2],o=p(this,Qe).unitAt?.(s)??null;if(o!==null){let[m,g]=o.split(",").map(Number);return this.world.get(m,g)}let a=jE(p(this,at),p(this,Vn)??0,s,n/i,(m,g)=>p(this,He).heightAt(m,g));if(a===null)return null;let[l,c]=p(this,He).layout.tileAt(...a),h=this.world.width(),f=this.world.height();return!(T(this,P,nr).call(this).v!==null)&&(c<0||c>=f)?null:this.world.get((l%h+h)%h,(c%f+f)%f)},"#tileAt"),iv=u(function(e,t){for(let n=p(this,Oa).length-1;n>=0;n--){let{key:i,left:s,top:o,right:a,bottom:l}=p(this,Oa)[n];if(e>=s&&e<a&&t>=o&&t<l){let[c,h]=i.split(",").map(Number),f=this.world.get(c,h);if(f?.city)return{tile:f,box:{left:s,top:o,bottom:l}}}}return null},"#bannerAt"),IT=u(function(e,t){let n=T(this,P,ym).call(this,e,t);n!==null&&this.portal.emit("tile-clicked",n.x,n.y);let i=p(this,Br);if(i!==null){n!==null&&i.accept(n)&&(this.endPicking(),i.onPick(n));return}let s=T(this,P,iv).call(this,e,t)?.tile.city??null;(n!==null||s!==null)&&p(this,gi).click(this.portal,n,s)},"#clicked"),LT=u(function(e,t,n,i,s){let o=p(this,sr),a=T(this,P,ym).call(this,e,t);return o===null||a===null?!1:(this.endPicking(),p(this,gi).menu(this.portal,n,i,o,a,p(this,Fh),s),!0)},"#menu"),rv=u(function(e,t){let n=T(this,P,iv).call(this,e,t);if(n!==null)return{key:`banner ${n.tile.x},${n.tile.y}`,...n};let i=T(this,P,ym).call(this,e,t);return i===null?null:{key:`${i.x},${i.y}`,tile:i,box:null}},"#subjectAt"),NT=u(function(e){let t=e===null||p(this,Cc)||p(this,gi).menuOpen()?null:T(this,P,rv).call(this,e.x,e.y),n=p(this,kr);if(t===null||e===null){p(this,yi).call(this);return}let{key:i,tile:{x:s,y:o}}=t;if(n!==null&&n.key===i){Object.assign(n,{canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY});return}p(this,yi).call(this);let a={key:i,x:s,y:o,canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY,timer:null,open:!1};a.timer=window.setTimeout(()=>{a.timer=null,T(this,P,sv).call(this,a)},UD),z(this,kr,a),document.addEventListener("keydown",p(this,yi),!0)},"#hovered"),sv=u(function(e){let t=typeof document.elementFromPoint!="function"||document.elementFromPoint(e.clientX,e.clientY)===p(this,kt),n=t?T(this,P,rv).call(this,e.canvasX,e.canvasY):null;if(n===null||n.key!==e.key){p(this,yi).call(this);return}let i=n.box===null?null:p(this,kt).getBoundingClientRect(),s=p(this,gi).tooltip(p(this,kt),n.tile,p(this,Ss),i===null||n.box===null?{left:e.clientX-10,top:e.clientY-10,bottom:e.clientY+10}:{left:i.left+n.box.left,top:i.top+n.box.top,bottom:i.top+n.box.bottom});!s&&e.open&&p(this,gi).endTooltip(p(this,kt)),e.open=s},"#showHover"),po=u(function(){return[...p(this,at).focus]},"#focus"),DT=u(function(){let[e,t]=p(this,He).layout.tileAt(...p(this,at).focus),n=this.world.width(),i=this.world.height();return{x:(e%n+n)%n,y:T(this,P,nr).call(this).v===null?Math.min(i-1,Math.max(0,t)):(t%i+i)%i}},"#centreSquare"),ov=u(function(e,t){let[n,i]=p(this,He).layout.centre(e,t),[s,o]=(p(this,Dt)?.to??p(this,at)).focus;if(n===s&&i===o)return;let a={...p(this,Dt)?.to??p(this,at),focus:[n,i]},{u:l,v:c}=T(this,P,nr).call(this),h=u((g,_)=>_===null?g:g-_*Math.round(g/_),"short"),[f,d]=p(this,at).focus,m=Math.hypot(h(n-f,l),h(i-d,c));if(!p(this,Nh)||m>p(this,at).distance*1.5){z(this,Nh,!0),this.setOrbit(a);return}T(this,P,Th).call(this,a)},"#centreOn"),Ir=u(function(e){let t=ma(e),n=T(this,P,nr).call(this);return a1({...t,pitch:Math.max(t.pitch,c1(t.distance,n))},n,p(this,He).extentV())},"#settle"),nr=u(function(){let e=p(this,He).layout.period();return this.portal?.lockVerticalEdges()??p(this,Lh)?{u:e.u,v:null}:e},"#period"),Th=u(function(e,t=T(this,P,Y_).call(this)+uT(e.yaw-(p(this,Dt)?.to??p(this,at)).yaw)){p(this,yi).call(this),typeof requestAnimationFrame!="function"||Ai()?(z(this,Dt,null),z(this,at,T(this,P,Ir).call(this,e))):z(this,Dt,{from:p(this,at),to:e,started:null,turn:t,drawn:0}),T(this,P,Yt).call(this)},"#moveTo"),OT=u(function(e){let t=p(this,Dt);if(t===null)return!1;t.started??=e;let n=Math.min(1,(e-t.started)/PD);return t.drawn=n*n*(3-2*n),z(this,at,T(this,P,Ir).call(this,l1(t.from,t.to,n,T(this,P,nr).call(this),t.turn))),n>=1&&z(this,Dt,null),n<1},"#moveCamera"),UT=u(function(e){let[t,n]=p(this,at).focus,i=Math.max(0,p(this,He).heightAt(t,n));return!e||p(this,Vn)===null||Ai()?(z(this,Vn,i),!1):(z(this,Vn,p(this,Vn)+(i-p(this,Vn))*OD),Math.abs(i-p(this,Vn))<.002?(z(this,Vn,i),!1):!0)},"#followHeight"),av=u(function(){let e=[...p(this,Mo).values()].map(({x:h,y:f})=>[h,f]),t=this.world.tiles(),n=t!==p(this,Ba)||t.length!==p(this,Tc);z(this,Ba,t),z(this,Tc,t.length),p(this,Mo).clear();let i=T(this,P,zT).call(this,p(this,He).changed(e,...T(this,P,po).call(this),n)),s=new Set(e.map(([h,f])=>`${h},${f}`)),o=new Map([...s].map(h=>[h,p(this,xc).get(h)??0]));p(this,xc).clear();let a=p(this,yo),l=p(this,_o);z(this,yo,new Map),z(this,_o,null),p(this,Nr).forEach(({units:[h]})=>{h!==void 0&&l?.add(h.id)}),e.forEach(([h,f])=>T(this,P,ir).call(this,h,f)),i.forEach(([h,f])=>{let d=`${h},${f}`;!n&&!s.has(d)&&p(this,ws).has(d)&&T(this,P,ir).call(this,h,f)}),T(this,P,kT).call(this,e,i),i.forEach(([h,f])=>p(this,vo).delete(`${h},${f}`));let c=p(this,kr);c!==null&&c.open&&e.some(([h,f])=>h===c.x&&f===c.y)&&z(this,Ms,!0),(e.length>0||n)&&z(this,_c,!0),n&&(z(this,Gr,!0),p(this,ws).forEach((h,f)=>{let[d,m]=f.split(",").map(Number);T(this,P,ir).call(this,d,m)})),l!==null&&T(this,P,mm).call(this)&&!(n&&s.size*2>=t.length)&&T(this,P,wT).call(this,a,l),e.length>0&&T(this,P,PT).call(this,o)},"#takeTiles"),ir=u(function(e,t){let n=`${e},${t}`,i=this.world.get(e,t),s=p(this,$t).awaitingBlow({x:e,y:t}),o=s===null?void 0:p(this,bi).get(s.id),a=o===void 0?i.units:[...o.units,...i.units.filter(({id:v})=>!o.units.some(S=>S.id===v))];i.units.filter(({id:v})=>T(this,P,uo).call(this,v)&&!p(this,Oi).has(v)).forEach(v=>{let S=p(this,La).get(v.id)??new Set;S.add(n),p(this,La).set(v.id,S),p(this,Ni).set(v.id,v)});let c=a.filter(({id:v})=>!T(this,P,uo).call(this,v)),h=o===void 0?i.city:o.city,f=y_(o===void 0&&c.length===i.units.length?i:{city:h,units:c},p(this,Ui),p(this,_i),p(this,pc),v=>p(this,Li).get(v.id)??0,p(this,So),p(this,Vh)),d=f?.city&&T(this,P,FT).call(this,n,i,h)!==null?{...f,city:{...f.city,unnamed:!0}}:f;h||(p(this,rr).delete(n),p(this,vo).delete(n)),T(this,P,MT).call(this,n,c,{shown:d?.unit?.id??null,ringed:d?.unit?.active===!0,inCity:(d?.unit??null)!==null&&d?.inCity===!0});let[m,g]=p(this,He).layout.centre(e,t),_=[m,Math.max(0,p(this,He).surfaceAt(m,g)),g],x=d===null?null:JSON.stringify([d,_]);x!==(p(this,ws).get(n)??null)&&(p(this,Qe).setMarker(n,_,d),T(this,P,VT).call(this,n,x),d?.unit?p(this,Ec).add(n):p(this,Ec).delete(n))},"#mark"),FT=u(function(e,t,n){if(p(this,Fi)===null||!n)return null;let i=T(this,P,_m).call(this),s={...t,city:n},o=p(this,rr).get(e),a="!",l=null;try{if(a=String(p(this,Fi).key(s)),o?.signature===a)return o.banner;l=p(this,Fi).paint(s,i)}catch(c){p(this,Bh)||(z(this,Bh,!0),console.error(c))}return p(this,rr).set(e,{signature:a,banner:l}),l},"#bannerOf"),_m=u(function(){return(p(this,kh)??(window.devicePixelRatio||1))*(p(this,Vr).zoom()/p(this,Vr).scale())},"#bannerDensity"),BT=u(function(e){let t=p(this,vo).get(e);if(t===void 0){let[n,i]=e.split(",").map(Number),[s,o]=p(this,He).layout.centre(n,i),a=u((l,c)=>Math.max(0,p(this,He).surfaceAt(l,c)),"up");t={key:e,centre:[s,a(s,o),o],outline:p(this,He).layout.outline(n,i).map(([l,c])=>[l,a(l,c),c])},p(this,vo).set(e,t)}return t},"#bannerSiteOf"),vm=u(function(){return`${p(this,Vr).id()} ${p(this,Vr).scale()} ${T(this,P,_m).call(this)}`},"#bannersFor"),lv=u(function(){T(this,P,cv).call(this),T(this,P,Yt).call(this)},"#paintBannersAgain"),cv=u(function(){z(this,Mc,T(this,P,vm).call(this)),p(this,rr).clear(),T(this,P,Ca).call(this),z(this,Ms,!0)},"#repaintBanners"),uv=u(function(){let e=p(this,zr);if(e===null||p(this,Fi)===null)return;T(this,P,vm).call(this)!==p(this,Mc)&&T(this,P,cv).call(this);let t=e.getContext("2d");if(z(this,Oa,[]),t===null||(p(this,vc)&&(t.clearRect(0,0,e.width,e.height),z(this,vc,!1)),!p(this,_i)||p(this,wo)&&p(this,Fi).giveWayToYields))return;let n=p(this,kt).clientWidth,i=p(this,kt).clientHeight,s=e.width/Math.max(1,n),o=[];if(n<=0||i<=0)return;let a=0;p(this,rr).forEach(({banner:c},h)=>{c!==null&&(a=Math.max(a,c.width/s),o.push(T(this,P,BT).call(this,h)))});let l=Math.round(p(this,Vr).scale()*T(this,P,_m).call(this));aT(o,{orbit:p(this,at),look:p(this,Vn)??0,width:n,height:i,period:T(this,P,nr).call(this),reach:a}).forEach(({key:c,x:h,y:f,clear:d})=>{let m=p(this,rr).get(c)?.banner;if(m){let g=Math.round(h*s-m.centre),_=Math.round(f*s)+l;t.globalAlpha=d,t.drawImage(m.image,g,_),z(this,vc,!0),d>=FD&&p(this,Oa).push({key:c,left:g/s,top:_/s,right:(g+m.width)/s,bottom:(_+m.height)/s})}}),t.globalAlpha=1},"#drawBanners"),kT=u(function(e,t){e.length===0&&t.length===0||(e.forEach(([n,i])=>p(this,za).delete(`${n},${i}`)),t.forEach(([n,i])=>p(this,za).delete(`${n},${i}`)),z(this,Gr,!0))},"#yieldsChanged"),zT=u(function(e){let t=this.world.topology(),n=new Map;return e.forEach(([i,s])=>{n.set(`${i},${s}`,[i,s]),t.directions().forEach(o=>{let a=t.neighbour(i,s,o);a!==null&&n.set(`${a[0]},${a[1]}`,a)})}),[...n.values()]},"#besides"),GT=u(function(){if(!p(this,wo)){p(this,ka)&&(p(this,Qe).setYields(null),z(this,ka,!1));return}if(!p(this,Gr)&&p(this,ka))return;let e=[];this.world.tiles().forEach(t=>{let n=`${t.x},${t.y}`,i=nT(t,iT(t)),s=p(this,za).get(n);if(s===void 0||s.of!==i){let[o,a]=p(this,He).layout.centre(t.x,t.y);s={of:i,laid:i.length===0?null:sT({at:[o,Math.max(0,p(this,He).surfaceAt(o,a)),a],yields:i},p(this,Wh))},p(this,za).set(n,s)}s.laid!==null&&e.push(s.laid)}),p(this,Qe).setYields(oT(e)),z(this,Gr,!1),z(this,ka,!0)},"#showYields"),VT=u(function(e,t){t===null?p(this,ws).delete(e):p(this,ws).set(e,t)},"#remember"),Ca=u(function(){let e=new Set([...p(this,ws).keys(),...p(this,rr).keys()]);this.world.tiles().forEach(({x:t,y:n})=>e.add(`${t},${n}`)),e.forEach(t=>{let[n,i]=t.split(",").map(Number);T(this,P,ir).call(this,n,i)})},"#markAll"),Mm=u(function(e,t=!1){let n=performance.now();if(t){let c=T(this,P,hv).call(this,n,!1);p(this,Qe).render(),z(this,hc,performance.now()-n),T(this,P,fv).call(this),c&&T(this,P,Ah).call(this);return}let i=T(this,P,OT).call(this,n),[s,o]=T(this,P,po).call(this);p(this,Rc)&&(z(this,Rc,!1),T(this,P,Ca).call(this)),T(this,P,av).call(this),T(this,P,gT).call(this,n),T(this,P,xT).call(this,n),T(this,P,bT).call(this,n),T(this,P,ET).call(this,n),`${s},${o}`!==p(this,Ph)&&(z(this,Ph,`${s},${o}`),p(this,He).refocus(s,o)),p(this,He).build(p(this,Qe),e);let a=T(this,P,UT).call(this,e!==null);T(this,P,GT).call(this),p(this,Qe).view(p(this,at),p(this,Vn)??0,T(this,P,nr).call(this));let l=T(this,P,hv).call(this,n,!0);p(this,Qe).render(),T(this,P,uv).call(this),p(this,Ms)&&(z(this,Ms,!1),p(this,kr)?.open&&T(this,P,sv).call(this,p(this,kr))),T(this,P,HT).call(this),T(this,P,dv).call(this),z(this,hc,performance.now()-n),z(this,Dh,!0),T(this,P,fv).call(this),p(this,He).pending()>0||p(this,He).overlaysPending()>0||p(this,mn).size()>0||p(this,$t).size()>0||p(this,xi).size()>0||p(this,bo).size()>0||i||a?T(this,P,Yt).call(this):l&&T(this,P,Ah).call(this)},"#frameDrawn"),hv=u(function(e,t){if(p(this,Qe).idle===void 0)return!1;(t||!T(this,P,Sm).call(this))&&z(this,Ua,T(this,P,Sm).call(this)?Qw(p(this,Ec),p(this,at),(i,s)=>p(this,He).layout.centre(i,s),T(this,P,nr).call(this),p(this,Ua),(i,s,o)=>T(this,P,fo).call(this,i,s,o)):new Set);let n=p(this,Qe).idle(p(this,Ua),e/1e3)&&T(this,P,Sm).call(this);return n||z(this,Ua,new Set),n},"#idle"),Sm=u(function(){return typeof requestAnimationFrame=="function"&&!Ai()&&(p(this,ei)?.speed()??"normal")!=="off"},"#mayIdle"),HT=u(function(){let e=p(this,yc);if(e===null)return;p(this,_c)&&(z(this,_c,!1),e.redraw());let t=T(this,P,Ra).call(this)?p(this,Ur):p(this,sr)?.tile??null;e.show(T(this,P,WT).call(this),t===null?null:{x:t.x,y:t.y})},"#showMinimap"),WT=u(function(){let e=p(this,kt).clientWidth,t=p(this,kt).clientHeight;if(e<=0||t<=0)return null;let n=e/t,i=p(this,Vn)??0,s=ds(p(this,at).distance,T(this,P,nr).call(this)).far,[o,a]=p(this,at).focus,l=u((h,f)=>{for(let d=f;d>=-1;d-=.05){let m=pa(p(this,at),i,[h,d],n);if(m!==null){let g=Math.hypot(m[0]-o,m[1]-a),_=g>s?s/g:1;return[o+(m[0]-o)*_,a+(m[1]-a)*_]}}return null},"corner"),c=[l(-1,-1),l(1,-1),l(1,1),l(-1,1)];return c.every(h=>h!==null)?c:null},"#patch"),dv=u(function(e=!1){let t=(e?p(this,Dt)?.to??p(this,at):p(this,at)).distance,n=u(()=>{p(this,mo)!==null&&clearTimeout(p(this,mo)),z(this,mo,null),z(this,fc,null)},"stop"),i=u(()=>{n(),z(this,Ia,t),p(this,Ih).set(t)},"keep");if(e){n(),t!==p(this,Ia)&&i();return}if(p(this,Dt)!==null||t===p(this,Ia)){n();return}p(this,mo)!==null&&t===p(this,fc)||(n(),z(this,fc,t),z(this,mo,setTimeout(i,DD)))},"#keepDistance"),Yt=u(function(){if(!p(this,Hr)){if(typeof requestAnimationFrame!="function"){T(this,P,Mm).call(this,null);return}z(this,Sc,!0),T(this,P,Ah).call(this)}},"#draw"),Ah=u(function(){p(this,Hr)||p(this,Es)!==null||z(this,Es,requestAnimationFrame(e=>{let t=typeof e=="number"?e:performance.now();if(z(this,Es,null),p(this,Sc)){z(this,Sc,!1),z(this,wc,t),T(this,P,Mm).call(this,cT);return}if(t-p(this,wc)<Jw){T(this,P,Ah).call(this);return}z(this,wc,t),T(this,P,Mm).call(this,cT,!0)}))},"#ask"),XT=u(function(e){let t=document.createElement("pre");return t.className="map3d-stats",t.setAttribute("aria-hidden","true"),Object.assign(t.style,{background:"var(--ui-overlay-bg, rgba(0, 0, 0, 0.6))",color:"var(--ui-overlay-fg, #fff)",font:"12px/1.4 monospace",left:"0.5rem",margin:"0",padding:"0.25rem 0.5rem",pointerEvents:"none",position:"absolute",bottom:"0.5rem"}),e.append(t),t},"#statsOverlay"),fv=u(function(){if(p(this,Pa)===null)return;let{drawCalls:e,triangles:t,geometries:n}=p(this,Qe).stats();p(this,Pa).textContent=[`frame ${p(this,hc).toFixed(1)} ms`,`draw calls ${e}`,`triangles ${t.toLocaleString()}`,`geometries ${n}`,`chunks waiting ${p(this,He).pending()}`].join(`
`)},"#showStats"),pv=u(function(){let e=p(this,kt).parentElement,t=e?.offsetWidth??0,n=e?.offsetHeight??0,i=window.devicePixelRatio||1,s=`${t}\xD7${n}@${i}`;t===0||n===0||s===p(this,qh)||(z(this,qh,s),p(this,Qe).resize(t,n,i),p(this,zr)!==null&&(Object.assign(p(this,zr).style,{height:`${n}px`,left:`${p(this,kt).offsetLeft||0}px`,top:`${p(this,kt).offsetTop||0}px`,width:`${t}px`}),p(this,zr).width=Math.round(t*i),p(this,zr).height=Math.round(n*i),z(this,kh,i)),this.measureCovered(),p(this,Qe).render(),T(this,P,uv).call(this))},"#resize"),u(mv,"MapView3D");var q_=mv,qT=q_;var BD={createMapView3D:u(r=>new qT(r),"createMapView3D")};globalThis[Rv]=BD;})();
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
