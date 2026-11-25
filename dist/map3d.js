"use strict";(()=>{var pT=Object.create;var Om=Object.defineProperty;var mT=Object.getOwnPropertyDescriptor;var gT=Object.getOwnPropertyNames;var bT=Object.getPrototypeOf,xT=Object.prototype.hasOwnProperty;var kv=r=>{throw TypeError(r)};var u=(r,e)=>Om(r,"name",{value:e,configurable:!0});var yT=(r,e)=>()=>{try{return e||r((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var _T=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of gT(e))!xT.call(r,i)&&i!==t&&Om(r,i,{get:()=>e[i],enumerable:!(n=mT(e,i))||n.enumerable});return r};var vT=(r,e,t)=>(t=r!=null?pT(bT(r)):{},_T(e||!r||!r.__esModule?Om(t,"default",{value:r,enumerable:!0}):t,r));var Um=(r,e,t)=>e.has(r)||kv("Cannot "+t);var p=(r,e,t)=>(Um(r,e,"read from private field"),t?t.call(r):e.get(r)),z=(r,e,t)=>e.has(r)?kv("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,t),k=(r,e,t,n)=>(Um(r,e,"write to private field"),n?n.call(r,t):e.set(r,t),t),A=(r,e,t)=>(Um(r,e,"access private method"),t);var Gi=(r,e,t,n)=>({set _(i){k(r,e,i,t)},get _(){return p(r,e,n)}});var Gv=yT(Io=>{"use strict";var ur,Ps=Io&&Io.__classPrivateFieldGet||function(r,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?r!==e||!n:!e.has(r))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(r):n?n.value:e.get(r)};Object.defineProperty(Io,"__esModule",{value:!0}),Io.EventEmitter=void 0;var Fm=class Fm{constructor(){ur.set(this,{})}on(e,t){e in Ps(this,ur,"f")||(Ps(this,ur,"f")[e]=[]),Ps(this,ur,"f")[e].push(t)}once(e,t){let n=u((...i)=>{t(...i),this.off(e,n)},"i");this.on(e,n)}off(e,t){if(!(e in Ps(this,ur,"f")))return;let n=Ps(this,ur,"f")[e].indexOf(t);n!==-1&&Ps(this,ur,"f")[e].splice(n,1)}emit(e,...t){e in Ps(this,ur,"f")&&Ps(this,ur,"f")[e].forEach((n=>n(...t)))}};u(Fm,"i");var rd=Fm;Io.EventEmitter=rd,ur=new WeakMap,Io.default=rd});var zv="civMap3D";var Vv=vT(Gv());var hr,dr,qa,km=class km extends Vv.EventEmitter{constructor(t,n){super();z(this,hr);z(this,dr);z(this,qa);k(this,dr,t),k(this,qa,t.lockVerticalEdges),k(this,hr,n)}center(){return p(this,hr).centre()}isVisible(t,n,i=0){return p(this,hr).visible(t,n,i)}lockVerticalEdges(){return p(this,qa)}nativeTileSize(){return p(this,dr).art.nativeTileSize()}openCity(t){let{cityOpener:n}=p(this,dr);return n.opens(t,this)?(n.open(t,this),!0):!1}playerId(){return p(this,dr).playerId}render(){p(this,hr).changed()}scale(){return p(this,dr).art.scale()}setCenter(t,n){p(this,hr).centreOn(t,n)}setLockVerticalEdges(t){k(this,qa,t),p(this,hr).changed()}setZoom(){p(this,hr).changed()}transport(){return p(this,dr).transport}zoom(){return p(this,dr).art.zoom()}};hr=new WeakMap,dr=new WeakMap,qa=new WeakMap,u(km,"MapPortal3D");var Bm=km,Hv=Bm;var MT=u((r,e)=>{let[t,n]=r.centre(0,0);return Object.fromEntries(e.directions().map(i=>{let[s,o]=e.offset(i,0,0),[a,l]=r.centre(s,o);return[i,[a-t,l-n]]}))},"groundDirections"),Wv=MT;var OM=0,v0=1,UM=2;var Tu=1,Tf=2,Cl=3,wi=0,Gn=1,rn=2,Zo=0,Pl=1,M0=2,S0=3,w0=4,FM=5;var Jo=100,BM=101,kM=102,zM=103,GM=104,VM=200,HM=201,WM=202,XM=203,E0=204,A0=205,qM=206,YM=207,$M=208,KM=209,ZM=210,JM=211,jM=212,QM=213,eS=214,Od=0,Ud=1,Fd=2,pl=3,Bd=4,kd=5,zd=6,Gd=7,T0=0,tS=1,nS=2,_r=0,R0=1,C0=2,P0=3,Ru=4,I0=5,L0=6,N0=7,h0="attached",iS="detached",D0=300,jo=301,Il=302,Rf=303,Cf=304,qn=1e3,Xn=1001,ml=1002,qt=1003,Pf=1004;var Qo=1005;var Gt=1006,Ll=1007;var Tn=1008;var Rn=1009,O0=1010,U0=1011,Nl=1012,If=1013,Yi=1014,si=1015,oi=1016,Lf=1017,Nf=1018,ea=1020,F0=35902,B0=35899,k0=1021,z0=1022,Kn=1023,is=1026,ds=1027,Df=1028,Of=1029,vr=1030,Uf=1031;var Ff=1033,Cu=33776,Pu=33777,Iu=33778,Lu=33779,Bf=35840,kf=35841,zf=35842,Gf=35843,Vf=36196,Hf=37492,Wf=37496,Xf=37488,qf=37489,Nu=37490,Yf=37491,$f=37808,Kf=37809,Zf=37810,Jf=37811,jf=37812,Qf=37813,ep=37814,tp=37815,np=37816,ip=37817,rp=37818,sp=37819,op=37820,ap=37821,lp=36492,cp=36494,up=36495,hp=36283,dp=36284,Du=36285,fp=36286,rS=2200,pp=2201,sS=2202,ko=2300,zo=2301,Nd=2302,d0=2303,Uo=2400,Fo=2401,eu=2402,mp=2500,oS=2501,G0=0,Ou=1,Dl=2,aS=3200;var gp=0,lS=1,$i="",Nt="srgb",Un="srgb-linear",tu="linear",wt="srgb";var Dd=7680;var cS=519,uS=512,hS=513,dS=514,V0=515,fS=516,pS=517,H0=518,W0=519,X0=35044;var q0="300 es",Si=2e3,gl=2001;function ST(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}u(ST,"arrayNeedsUint32");function wT(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}u(wT,"isTypedArray");function bl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}u(bl,"createElementNS");function mS(){let r=bl("canvas");return r.style.display="block",r}u(mS,"createCanvasElement");var Xv={},xl=null;function nu(...r){let e="THREE."+r.shift();xl?xl("log",e,...r):console.log(e,...r)}u(nu,"log");function gS(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}u(gS,"enhanceLogMessage");function ke(...r){r=gS(r);let e="THREE."+r.shift();if(xl)xl("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}u(ke,"warn");function We(...r){r=gS(r);let e="THREE."+r.shift();if(xl)xl("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}u(We,"error");function Bo(...r){let e=r.join(" ");e in Xv||(Xv[e]=!0,ke(...r))}u(Bo,"warnOnce");function bS(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}u(s,"probe"),setTimeout(s,t)})}u(bS,"probeAsync");var xS={[Od]:Od,[Fd]:zd,[Bd]:Bd,[pl]:kd,[Ud]:Ud,[zd]:Fd,[Gd]:Gd,[kd]:pl},tg=class tg{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}};u(tg,"EventDispatcher");var Xi=tg,Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qv=1234567,Jc=Math.PI/180,Go=180/Math.PI;function Mr(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mn[r&255]+Mn[r>>8&255]+Mn[r>>16&255]+Mn[r>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]).toLowerCase()}u(Mr,"generateUUID");function pt(r,e,t){return Math.max(e,Math.min(t,r))}u(pt,"clamp");function Y0(r,e){return(r%e+e)%e}u(Y0,"euclideanModulo");function ET(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}u(ET,"mapLinear");function AT(r,e,t){return r!==e?(t-r)/(e-r):0}u(AT,"inverseLerp");function jc(r,e,t){return(1-t)*r+t*e}u(jc,"lerp");function TT(r,e,t,n){return jc(r,e,1-Math.exp(-t*n))}u(TT,"damp");function RT(r,e=1){return e-Math.abs(Y0(r,e*2)-e)}u(RT,"pingpong");function CT(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}u(CT,"smoothstep");function PT(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}u(PT,"smootherstep");function IT(r,e){return r+Math.floor(Math.random()*(e-r+1))}u(IT,"randInt");function LT(r,e){return r+Math.random()*(e-r)}u(LT,"randFloat");function NT(r){return r*(.5-Math.random())}u(NT,"randFloatSpread");function DT(r){r!==void 0&&(qv=r);let e=qv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}u(DT,"seededRandom");function OT(r){return r*Jc}u(OT,"degToRad");function UT(r){return r*Go}u(UT,"radToDeg");function FT(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}u(FT,"isPowerOfTwo");function BT(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}u(BT,"ceilPowerOfTwo");function $0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}u($0,"floorPowerOfTwo");function kT(r,e,t,n,i){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),d=s((e-n)/2),f=o((e-n)/2),m=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*h,l*d,l*f,a*c);break;case"YZY":r.set(l*f,a*h,l*d,a*c);break;case"ZXZ":r.set(l*d,l*f,a*h,a*c);break;case"XZX":r.set(a*h,l*g,l*m,a*c);break;case"YXY":r.set(l*m,a*h,l*g,a*c);break;case"ZYZ":r.set(l*g,l*m,a*h,a*c);break;default:ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}u(kT,"setQuaternionFromProperEuler");function bp(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}u(bp,"getNormalizationScale");function K0(r,e){if(e.constructor===Float32Array)return r;let t=bp(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/t,-1)}u(K0,"denormalize");function Z0(r,e){if(e.constructor===Float32Array)return r;let t=bp(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*t)}u(Z0,"normalize");var xp={DEG2RAD:Jc,RAD2DEG:Go,generateUUID:Mr,clamp:pt,euclideanModulo:Y0,mapLinear:ET,inverseLerp:AT,lerp:jc,damp:TT,pingpong:RT,smoothstep:CT,smootherstep:PT,randInt:IT,randFloat:LT,randFloatSpread:NT,seededRandom:DT,degToRad:OT,radToDeg:UT,isPowerOfTwo:FT,ceilPowerOfTwo:BT,floorPowerOfTwo:$0,setQuaternionFromProperEuler:kT,normalize:Z0,denormalize:K0},af=class af{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};u(af,"Vector2"),af.prototype.isVector2=!0;var Fe=af,ng=class ng{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],f=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(d!==_||l!==f||c!==m||h!==g){let b=l*f+c*m+h*g+d*_;b<0&&(f=-f,m=-m,g=-g,_=-_,b=-b);let x=1-a;if(b<.9995){let v=Math.acos(b),S=Math.sin(v);x=Math.sin(x*v)/S,a=Math.sin(a*v)/S,l=l*x+f*a,c=c*x+m*a,h=h*x+g*a,d=d*x+_*a}else{l=l*x+f*a,c=c*x+m*a,h=h*x+g*a,d=d*x+_*a;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[o],f=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+h*d+l*m-c*f,e[t+1]=l*g+h*f+c*d-a*m,e[t+2]=c*g+h*m+a*f-l*d,e[t+3]=h*g-a*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(s/2),f=l(n/2),m=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"YZX":this._x=f*h*d+c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d-f*m*g;break;case"XZY":this._x=f*h*d-c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d+f*m*g;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-i)*m}else if(n>a&&n>d){let m=2*Math.sqrt(1+n-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+c)/m}else if(a>d){let m=2*Math.sqrt(1+a-n-d);this._w=(s-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-n-a);this._w=(o-i)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};u(ng,"Quaternion");var Jt=ng,lf=class lf{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yv.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-s*i),d=2*(s*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-s*d,this.z=i+l*d+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zm.copy(this).projectOnVector(e),this.sub(zm)}reflect(e){return this.sub(zm.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};u(lf,"Vector3"),lf.prototype.isVector3=!0;var X=lf,zm=new X,Yv=new Jt,cf=class cf{constructor(e,t,n,i,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],m=n[5],g=n[8],_=i[0],b=i[3],x=i[6],v=i[1],S=i[4],M=i[7],R=i[2],E=i[5],y=i[8];return s[0]=o*_+a*v+l*R,s[3]=o*b+a*S+l*E,s[6]=o*x+a*M+l*y,s[1]=c*_+h*v+d*R,s[4]=c*b+h*S+d*E,s[7]=c*x+h*M+d*y,s[2]=f*_+m*v+g*R,s[5]=f*b+m*S+g*E,s[8]=f*x+m*M+g*y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*s,m=c*s-o*l,g=t*d+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Bo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Gm.makeScale(e,t)),this}rotate(e){return Bo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Gm.makeRotation(-e)),this}translate(e,t){return Bo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Gm.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};u(cf,"Matrix3"),cf.prototype.isMatrix3=!0;var Xe=cf,Gm=new Xe,$v=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kv=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zT(){let r={enabled:!0,workingColorSpace:Un,spaces:{},convert:u(function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===wt&&(i.r=ns(i.r),i.g=ns(i.g),i.b=ns(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===wt&&(i.r=fl(i.r),i.g=fl(i.g),i.b=fl(i.b))),i},"convert"),workingToColorSpace:u(function(i,s){return this.convert(i,this.workingColorSpace,s)},"workingToColorSpace"),colorSpaceToWorking:u(function(i,s){return this.convert(i,s,this.workingColorSpace)},"colorSpaceToWorking"),getPrimaries:u(function(i){return this.spaces[i].primaries},"getPrimaries"),getTransfer:u(function(i){return i===$i?tu:this.spaces[i].transfer},"getTransfer"),getToneMappingMode:u(function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},"getToneMappingMode"),getLuminanceCoefficients:u(function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},"getLuminanceCoefficients"),define:u(function(i){Object.assign(this.spaces,i)},"define"),_getMatrix:u(function(i,s,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},"_getMatrix"),_getDrawingBufferColorSpace:u(function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},"_getDrawingBufferColorSpace"),_getUnpackColorSpace:u(function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},"_getUnpackColorSpace")},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Un]:{primaries:e,whitePoint:n,transfer:tu,toXYZ:$v,fromXYZ:Kv,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:n,transfer:wt,toXYZ:$v,fromXYZ:Kv,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),r}u(zT,"createColorManagement");var ct=zT();function ns(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}u(ns,"SRGBToLinear");function fl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}u(fl,"LinearToSRGB");var Ya,ig=class ig{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ya===void 0&&(Ya=bl("canvas")),Ya.width=e.width,Ya.height=e.height;let i=Ya.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ya}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=bl("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ns(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ns(t[n]/255)*255):t[n]=ns(t[n]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};u(ig,"ImageUtils");var Vd=ig,GT=0,rg=class rg{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:GT++}),this.uuid=Mr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Vm(i[o].image)):s.push(Vm(i[o]))}else s=Vm(i);n.url=s}return t||(e.images[this.uuid]=n),n}};u(rg,"TextureSource");var yl=rg;function Vm(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Vd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}u(Vm,"serializeImage");var VT=0,Hm=new X,hl=class hl extends Xi{constructor(e=hl.DEFAULT_IMAGE,t=hl.DEFAULT_MAPPING,n=Xn,i=Xn,s=Gt,o=Tn,a=Kn,l=Rn,c=hl.DEFAULT_ANISOTROPY,h=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:VT++}),this.uuid=Mr(),this.name="",this.source=new yl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Hm).x}get height(){return this.source.getSize(Hm).y}get depth(){return this.source.getSize(Hm).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==D0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qn:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case ml:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qn:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case ml:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};u(hl,"Texture");var on=hl;on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=D0;on.DEFAULT_ANISOTROPY=1;var uf=class uf{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],g=l[9],_=l[2],b=l[6],x=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-b)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+b)<.1&&Math.abs(c+m+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,M=(m+1)/2,R=(x+1)/2,E=(h+f)/4,y=(d+_)/4,w=(g+b)/4;return S>M&&S>R?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=E/n,s=y/n):M>R?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=E/i,s=w/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=y/s,i=w/s),this.set(n,i,s,t),this}let v=Math.sqrt((b-g)*(b-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(b-g)/v,this.y=(d-_)/v,this.z=(f-h)/v,this.w=Math.acos((c+m+x-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};u(uf,"Vector4"),uf.prototype.isVector4=!0;var Tt=uf,sg=class sg extends Xi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new on({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new yl(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};u(sg,"RenderTarget");var Hd=sg,og=class og extends Hd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}};u(og,"WebGLRenderTarget");var ii=og,ag=class ag extends on{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=qt,this.minFilter=qt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};u(ag,"DataArrayTexture");var Vo=ag;var lg=class lg extends on{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=qt,this.minFilter=qt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};u(lg,"Data3DTexture");var Wd=lg;var Qc=class Qc{constructor(e,t,n,i,s,o,a,l,c,h,d,f,m,g,_,b){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,h,d,f,m,g,_,b)}set(e,t,n,i,s,o,a,l,c,h,d,f,m,g,_,b){let x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=s,x[5]=o,x[9]=a,x[13]=l,x[2]=c,x[6]=h,x[10]=d,x[14]=f,x[3]=m,x[7]=g,x[11]=_,x[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/$a.setFromMatrixColumn(e,0).length(),s=1/$a.setFromMatrixColumn(e,1).length(),o=1/$a.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*h,m=o*d,g=a*h,_=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,m=l*d,g=c*h,_=c*d;t[0]=f+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,m=l*d,g=c*h,_=c*d;t[0]=f-_*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,m=o*d,g=a*h,_=a*d;t[0]=l*h,t[4]=g*c-m,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-f*d,t[8]=g*d+m,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*d+g,t[10]=f-_*d}else if(e.order==="XZY"){let f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+_,t[5]=o*h,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*h,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(HT,e,WT)}lookAt(e,t,n){let i=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Is.crossVectors(n,ti),Is.lengthSq()===0&&(Math.abs(n.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Is.crossVectors(n,ti)),Is.normalize(),sd.crossVectors(ti,Is),i[0]=Is.x,i[4]=sd.x,i[8]=ti.x,i[1]=Is.y,i[5]=sd.y,i[9]=ti.y,i[2]=Is.z,i[6]=sd.z,i[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],m=n[13],g=n[2],_=n[6],b=n[10],x=n[14],v=n[3],S=n[7],M=n[11],R=n[15],E=i[0],y=i[4],w=i[8],L=i[12],I=i[1],O=i[5],B=i[9],$=i[13],F=i[2],j=i[6],ce=i[10],G=i[14],ee=i[3],Z=i[7],ne=i[11],ae=i[15];return s[0]=o*E+a*I+l*F+c*ee,s[4]=o*y+a*O+l*j+c*Z,s[8]=o*w+a*B+l*ce+c*ne,s[12]=o*L+a*$+l*G+c*ae,s[1]=h*E+d*I+f*F+m*ee,s[5]=h*y+d*O+f*j+m*Z,s[9]=h*w+d*B+f*ce+m*ne,s[13]=h*L+d*$+f*G+m*ae,s[2]=g*E+_*I+b*F+x*ee,s[6]=g*y+_*O+b*j+x*Z,s[10]=g*w+_*B+b*ce+x*ne,s[14]=g*L+_*$+b*G+x*ae,s[3]=v*E+S*I+M*F+R*ee,s[7]=v*y+S*O+M*j+R*Z,s[11]=v*w+S*B+M*ce+R*ne,s[15]=v*L+S*$+M*G+R*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],m=e[14],g=e[3],_=e[7],b=e[11],x=e[15],v=l*m-c*f,S=a*m-c*d,M=a*f-l*d,R=o*m-c*h,E=o*f-l*h,y=o*d-a*h;return t*(_*v-b*S+x*M)-n*(g*v-b*R+x*E)+i*(g*S-_*R+x*y)-s*(g*M-_*E+b*y)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(s*h-a*l)+i*(s*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],m=e[11],g=e[12],_=e[13],b=e[14],x=e[15],v=t*a-n*o,S=t*l-i*o,M=t*c-s*o,R=n*l-i*a,E=n*c-s*a,y=i*c-s*l,w=h*_-d*g,L=h*b-f*g,I=h*x-m*g,O=d*b-f*_,B=d*x-m*_,$=f*x-m*b,F=v*$-S*B+M*O+R*I-E*L+y*w;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let j=1/F;return e[0]=(a*$-l*B+c*O)*j,e[1]=(i*B-n*$-s*O)*j,e[2]=(_*y-b*E+x*R)*j,e[3]=(f*E-d*y-m*R)*j,e[4]=(l*I-o*$-c*L)*j,e[5]=(t*$-i*I+s*L)*j,e[6]=(b*M-g*y-x*S)*j,e[7]=(h*y-f*M+m*S)*j,e[8]=(o*B-a*I+c*w)*j,e[9]=(n*I-t*B-s*w)*j,e[10]=(g*E-_*M+x*v)*j,e[11]=(d*M-h*E-m*v)*j,e[12]=(a*L-o*O-l*w)*j,e[13]=(t*O-n*L+i*w)*j,e[14]=(_*S-g*R-b*v)*j,e[15]=(h*R-d*S+f*v)*j,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,d=a+a,f=s*c,m=s*h,g=s*d,_=o*h,b=o*d,x=a*d,v=l*c,S=l*h,M=l*d,R=n.x,E=n.y,y=n.z;return i[0]=(1-(_+x))*R,i[1]=(m+M)*R,i[2]=(g-S)*R,i[3]=0,i[4]=(m-M)*E,i[5]=(1-(f+x))*E,i[6]=(b+v)*E,i[7]=0,i[8]=(g+S)*y,i[9]=(b-v)*y,i[10]=(1-(f+_))*y,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let o=$a.set(i[0],i[1],i[2]).length(),a=$a.set(i[4],i[5],i[6]).length(),l=$a.set(i[8],i[9],i[10]).length();s<0&&(o=-o),Vi.copy(this);let c=1/o,h=1/a,d=1/l;return Vi.elements[0]*=c,Vi.elements[1]*=c,Vi.elements[2]*=c,Vi.elements[4]*=h,Vi.elements[5]*=h,Vi.elements[6]*=h,Vi.elements[8]*=d,Vi.elements[9]*=d,Vi.elements[10]*=d,t.setFromRotationMatrix(Vi),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,s,o,a=Si,l=!1){let c=this.elements,h=2*s/(t-e),d=2*s/(n-i),f=(t+e)/(t-e),m=(n+i)/(n-i),g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===Si)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===gl)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Si,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-i),f=-(t+e)/(t-e),m=-(n+i)/(n-i),g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===Si)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===gl)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};u(Qc,"Matrix4"),Qc.prototype.isMatrix4=!0;var He=Qc,$a=new X,Vi=new He,HT=new X(0,0,0),WT=new X(1,1,1),Is=new X,sd=new X,ti=new X,Zv=new He,Jv=new Jt,hf=class hf{constructor(e=0,t=0,n=0,i=hf.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zv,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jv.setFromEuler(this),this.setFromQuaternion(Jv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};u(hf,"Euler");var ri=hf;ri.DEFAULT_ORDER="XYZ";var cg=class cg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};u(cg,"Layers");var _l=cg,XT=0,jv=new X,Ka=new Jt,$r=new He,od=new X,kc=new X,qT=new X,YT=new Jt,Qv=new X(1,0,0),eM=new X(0,1,0),tM=new X(0,0,1),nM={type:"added"},$T={type:"removed"},Za={type:"childadded",child:null},Wm={type:"childremoved",child:null},dl=class dl extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:XT++}),this.uuid=Mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dl.DEFAULT_UP.clone();let e=new X,t=new ri,n=new Jt,i=new X(1,1,1);function s(){n.setFromEuler(t,!1)}u(s,"onRotationChange");function o(){t.setFromQuaternion(n,void 0,!1)}u(o,"onQuaternionChange"),t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new He},normalMatrix:{value:new Xe}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=dl.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dl.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _l,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ka.setFromAxisAngle(e,t),this.quaternion.multiply(Ka),this}rotateOnWorldAxis(e,t){return Ka.setFromAxisAngle(e,t),this.quaternion.premultiply(Ka),this}rotateX(e){return this.rotateOnAxis(Qv,e)}rotateY(e){return this.rotateOnAxis(eM,e)}rotateZ(e){return this.rotateOnAxis(tM,e)}translateOnAxis(e,t){return jv.copy(e).applyQuaternion(this.quaternion),this.position.add(jv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qv,e)}translateY(e){return this.translateOnAxis(eM,e)}translateZ(e){return this.translateOnAxis(tM,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($r.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?od.copy(e):od.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),kc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$r.lookAt(kc,od,this.up):$r.lookAt(od,kc,this.up),this.quaternion.setFromRotationMatrix($r),i&&($r.extractRotation(i.matrixWorld),Ka.setFromRotationMatrix($r),this.quaternion.premultiply(Ka.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nM),Za.child=e,this.dispatchEvent(Za),Za.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($T),Wm.child=e,this.dispatchEvent(Wm),Wm.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$r.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$r.multiply(e.parent.matrixWorld)),e.applyMatrix4($r),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nM),Za.child=e,this.dispatchEvent(Za),Za.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kc,e,qT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kc,YT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(u(s,"serialize"),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}u(o,"extractFromCache")}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};u(dl,"Object3D");var Ut=dl;Ut.DEFAULT_UP=new X(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ug=class ug extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}};u(ug,"Group");var Xt=ug,KT={type:"move"},hg=class hg{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let b=t.getJointPose(_,n),x=this._getHandJoint(c,_);b!==null&&(x.matrix.fromArray(b.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=b.radius),x.visible=b!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(KT)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Xt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};u(hg,"WebXRController");var vl=hg,yS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ls={h:0,s:0,l:0},ad={h:0,s:0,l:0};function Xm(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}u(Xm,"hue2rgb");var dg=class dg{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ct.workingColorSpace){if(e=Y0(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Xm(o,s,e+1/3),this.g=Xm(o,s,e),this.b=Xm(o,s,e-1/3)}return ct.colorSpaceToWorking(this,i),this}setStyle(e,t=Nt){function n(s){s!==void 0&&parseFloat(s)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}u(n,"handleAlpha");let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){let n=yS[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}copyLinearToSRGB(e){return this.r=fl(e.r),this.g=fl(e.g),this.b=fl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return ct.workingToColorSpace(Sn.copy(this),e),Math.round(pt(Sn.r*255,0,255))*65536+Math.round(pt(Sn.g*255,0,255))*256+Math.round(pt(Sn.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(Sn.copy(this),t);let n=Sn.r,i=Sn.g,s=Sn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=Nt){ct.workingToColorSpace(Sn.copy(this),e);let t=Sn.r,n=Sn.g,i=Sn.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ls),this.setHSL(Ls.h+e,Ls.s+t,Ls.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ls),e.getHSL(ad);let n=jc(Ls.h,ad.h,t),i=jc(Ls.s,ad.s,t),s=jc(Ls.l,ad.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};u(dg,"Color");var Se=dg,Sn=new Se;Se.NAMES=yS;var df=class df{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Se(e),this.near=t,this.far=n}clone(){return new df(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}};u(df,"Fog");var iu=df,fg=class fg extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}};u(fg,"Scene");var ru=fg,Hi=new X,Kr=new X,qm=new X,Zr=new X,Ja=new X,ja=new X,iM=new X,Ym=new X,$m=new X,Km=new X,Zm=new Tt,Jm=new Tt,jm=new Tt,Fs=class Fs{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Hi.subVectors(e,t),i.cross(Hi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Hi.subVectors(i,t),Kr.subVectors(n,t),qm.subVectors(e,t);let o=Hi.dot(Hi),a=Hi.dot(Kr),l=Hi.dot(qm),c=Kr.dot(Kr),h=Kr.dot(qm),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let f=1/d,m=(c*l-a*h)*f,g=(o*h-a*l)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Zr)===null?!1:Zr.x>=0&&Zr.y>=0&&Zr.x+Zr.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Zr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Zr.x),l.addScaledVector(o,Zr.y),l.addScaledVector(a,Zr.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Zm.setScalar(0),Jm.setScalar(0),jm.setScalar(0),Zm.fromBufferAttribute(e,t),Jm.fromBufferAttribute(e,n),jm.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Zm,s.x),o.addScaledVector(Jm,s.y),o.addScaledVector(jm,s.z),o}static isFrontFacing(e,t,n,i){return Hi.subVectors(n,t),Kr.subVectors(e,t),Hi.cross(Kr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hi.subVectors(this.c,this.b),Kr.subVectors(this.a,this.b),Hi.cross(Kr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fs.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fs.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Fs.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Fs.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fs.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;Ja.subVectors(i,n),ja.subVectors(s,n),Ym.subVectors(e,n);let l=Ja.dot(Ym),c=ja.dot(Ym);if(l<=0&&c<=0)return t.copy(n);$m.subVectors(e,i);let h=Ja.dot($m),d=ja.dot($m);if(h>=0&&d<=h)return t.copy(i);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(n).addScaledVector(Ja,o);Km.subVectors(e,s);let m=Ja.dot(Km),g=ja.dot(Km);if(g>=0&&m<=g)return t.copy(s);let _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ja,a);let b=h*g-m*d;if(b<=0&&d-h>=0&&m-g>=0)return iM.subVectors(s,i),a=(d-h)/(d-h+(m-g)),t.copy(i).addScaledVector(iM,a);let x=1/(b+_+f);return o=_*x,a=f*x,t.copy(n).addScaledVector(Ja,o).addScaledVector(ja,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};u(Fs,"Triangle");var es=Fs,pg=class pg{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wi):Wi.fromBufferAttribute(s,o),Wi.applyMatrix4(e.matrixWorld),this.expandByPoint(Wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ld.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ld.copy(n.boundingBox)),ld.applyMatrix4(e.matrixWorld),this.union(ld)}let i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wi),Wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zc),cd.subVectors(this.max,zc),Qa.subVectors(e.a,zc),el.subVectors(e.b,zc),tl.subVectors(e.c,zc),Ns.subVectors(el,Qa),Ds.subVectors(tl,el),Lo.subVectors(Qa,tl);let t=[0,-Ns.z,Ns.y,0,-Ds.z,Ds.y,0,-Lo.z,Lo.y,Ns.z,0,-Ns.x,Ds.z,0,-Ds.x,Lo.z,0,-Lo.x,-Ns.y,Ns.x,0,-Ds.y,Ds.x,0,-Lo.y,Lo.x,0];return!Qm(t,Qa,el,tl,cd)||(t=[1,0,0,0,1,0,0,0,1],!Qm(t,Qa,el,tl,cd))?!1:(ud.crossVectors(Ns,Ds),t=[ud.x,ud.y,ud.z],Qm(t,Qa,el,tl,cd))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}};u(pg,"Box3");var wn=pg,Jr=[new X,new X,new X,new X,new X,new X,new X,new X],Wi=new X,ld=new wn,Qa=new X,el=new X,tl=new X,Ns=new X,Ds=new X,Lo=new X,zc=new X,cd=new X,ud=new X,No=new X;function Qm(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){No.fromArray(r,s);let a=i.x*Math.abs(No.x)+i.y*Math.abs(No.y)+i.z*Math.abs(No.z),l=e.dot(No),c=t.dot(No),h=n.dot(No);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}u(Qm,"satForAxes");var ts=ZT();function ZT(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}u(ZT,"_generateTables");function JT(r){Math.abs(r)>65504&&ke("DataUtils.toHalfFloat(): Value out of range."),r=pt(r,-65504,65504),ts.floatView[0]=r;let e=ts.uint32View[0],t=e>>23&511;return ts.baseTable[t]+((e&8388607)>>ts.shiftTable[t])}u(JT,"toHalfFloat");function jT(r){let e=r>>10;return ts.uint32View[0]=ts.mantissaTable[ts.offsetTable[e]+(r&1023)]+ts.exponentTable[e],ts.floatView[0]}u(jT,"fromHalfFloat");var mg=class mg{static toHalfFloat(e){return JT(e)}static fromHalfFloat(e){return jT(e)}};u(mg,"DataUtils");var mr=mg,nn=new X,hd=new Fe,QT=0,gg=class gg extends Xi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:QT++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=X0,this.updateRanges=[],this.gpuType=si,this.version=0,this._normalizationScale=e!==void 0?bp(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hd.fromBufferAttribute(this,t),hd.applyMatrix3(e),this.setXY(t,hd.x,hd.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):K0(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Z0(e,this.array)}};u(gg,"BufferAttribute");var xt=gg;var bg=class bg extends xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};u(bg,"Uint16BufferAttribute");var su=bg;var xg=class xg extends xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};u(xg,"Uint32BufferAttribute");var ou=xg;var yg=class yg extends xt{constructor(e,t,n){super(new Float32Array(e),t,n)}};u(yg,"Float32BufferAttribute");var Et=yg,eR=new wn,Gc=new X,e0=new X,_g=class _g{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):eR.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gc.subVectors(e,this.center);let t=Gc.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Gc,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(e0.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gc.copy(e.center).add(e0)),this.expandByPoint(Gc.copy(e.center).sub(e0))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};u(_g,"Sphere");var En=_g,tR=0,Mi=new He,t0=new Ut,nl=new X,ni=new wn,Vc=new wn,hn=new X,ff=class ff extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tR++}),this.uuid=Mr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ST(e)?ou:su)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Xe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Mi.makeRotationFromQuaternion(e),this.applyMatrix4(Mi),this}rotateX(e){return Mi.makeRotationX(e),this.applyMatrix4(Mi),this}rotateY(e){return Mi.makeRotationY(e),this.applyMatrix4(Mi),this}rotateZ(e){return Mi.makeRotationZ(e),this.applyMatrix4(Mi),this}translate(e,t,n){return Mi.makeTranslation(e,t,n),this.applyMatrix4(Mi),this}scale(e,t,n){return Mi.makeScale(e,t,n),this.applyMatrix4(Mi),this}lookAt(e){return t0.lookAt(e),t0.updateMatrix(),this.applyMatrix4(t0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nl).negate(),this.translate(nl.x,nl.y,nl.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Et(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];ni.setFromBufferAttribute(s),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new En);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){let n=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Vc.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(ni.min,Vc.min),ni.expandByPoint(hn),hn.addVectors(ni.max,Vc.max),ni.expandByPoint(hn)):(ni.expandByPoint(Vc.min),ni.expandByPoint(Vc.max))}ni.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)hn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(hn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)hn.fromBufferAttribute(a,c),l&&(nl.fromBufferAttribute(e,c),hn.add(nl)),i=Math.max(i,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new xt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let L=0;L<n.count;L++)a[L]=new X,l[L]=new X;let h=new X,d=new X,f=new X,m=new Fe,g=new Fe,_=new Fe,b=new X,x=new X;function v(L,I,O){c[L]=c[I]=c[O]=1,h.fromBufferAttribute(n,L),d.fromBufferAttribute(n,I),f.fromBufferAttribute(n,O),m.fromBufferAttribute(s,L),g.fromBufferAttribute(s,I),_.fromBufferAttribute(s,O),d.sub(h),f.sub(h),g.sub(m),_.sub(m);let B=1/(g.x*_.y-_.x*g.y);isFinite(B)&&(b.copy(d).multiplyScalar(_.y).addScaledVector(f,-g.y).multiplyScalar(B),x.copy(f).multiplyScalar(g.x).addScaledVector(d,-_.x).multiplyScalar(B),a[L].add(b),a[I].add(b),a[O].add(b),l[L].add(x),l[I].add(x),l[O].add(x))}u(v,"handleTriangle");let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let L=0,I=S.length;L<I;++L){let O=S[L],B=O.start,$=O.count;for(let F=B,j=B+$;F<j;F+=3)v(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let M=new X,R=new X,E=new X,y=new X;function w(L){E.fromBufferAttribute(i,L),y.copy(E);let I=a[L];M.copy(I),M.sub(E.multiplyScalar(E.dot(I))).normalize(),R.crossVectors(y,I);let B=R.dot(l[L])<0?-1:1;o.setXYZW(L,M.x,M.y,M.z,B)}u(w,"handleVertex");for(let L=0,I=n.count;L<I;++L)c[L]&&w(L);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let i=new X,s=new X,o=new X,a=new X,l=new X,c=new X,h=new X,d=new X;if(e)for(let f=0,m=e.count;f<m;f+=3){let g=e.getX(f+0),_=e.getX(f+1),b=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,b),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,b),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(b,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),m=0,g=0;for(let _=0,b=l.length;_<b;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let x=0;x<h;x++)f[g++]=c[m++]}return new xt(f,h,d)}if(u(e,"convertBufferAttribute"),this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new ff,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],d=s[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};u(ff,"BufferGeometry");var Mt=ff,vg=class vg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=X0,this.updateRanges=[],this.version=0,this.uuid=Mr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=rM(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=rM(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};u(vg,"InterleavedBuffer");var Ho=vg;function rM(r){return r.buffer._uuid===void 0&&(r.buffer._uuid=Mr()),r.byteOffset===0&&r.byteLength===r.buffer.byteLength?r.buffer._uuid:r.buffer._uuid+":"+r.byteOffset+":"+r.byteLength}u(rM,"getArrayKey");var On=new X,pf=class pf{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?bp(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyMatrix4(e),this.setXYZ(t,On.x,On.y,On.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyNormalMatrix(e),this.setXYZ(t,On.x,On.y,On.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.transformDirection(e),this.setXYZ(t,On.x,On.y,On.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){nu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new pf(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){nu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):K0(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Z0(e,this.data.array)}};u(pf,"InterleavedBufferAttribute");var ks=pf,n0=new X,nR=new X,iR=new Xe,Mg=class Mg{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=n0.subVectors(n,t).cross(nR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(n0),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||iR.getNormalMatrix(e),i=this.coplanarPoint(n0).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}};u(Mg,"Plane");var Wn=Mg,rR=0,Sg=class Sg extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rR++}),this.uuid=Mr(),this.name="",this.type="Material",this.blending=Pl,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=E0,this.blendDst=A0,this.blendEquation=Jo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=pl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dd,this.stencilZFail=Dd,this.stencilZPass=Dd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(u(i,"extractFromCache"),t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Se().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Wn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Fe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Fe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};u(Sg,"Material");var Fn=Sg,wg=class wg extends Fn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};u(wg,"SpriteMaterial");var zs=wg,il,Hc=new X,rl=new X,sl=new X,ol=new Fe,Wc=new Fe,_S=new He,dd=new X,Xc=new X,fd=new X,sM=new Fe,i0=new Fe,oM=new Fe,Eg=class Eg extends Ut{constructor(e=new zs){if(super(),this.isSprite=!0,this.type="Sprite",il===void 0){il=new Mt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ho(t,5);il.setIndex([0,1,2,0,2,3]),il.setAttribute("position",new ks(n,3,0,!1)),il.setAttribute("uv",new ks(n,2,3,!1))}this.geometry=il,this.material=e,this.center=new Fe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&We('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rl.setFromMatrixScale(this.matrixWorld),_S.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),sl.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rl.multiplyScalar(-sl.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let o=this.center;pd(dd.set(-.5,-.5,0),sl,o,rl,i,s),pd(Xc.set(.5,-.5,0),sl,o,rl,i,s),pd(fd.set(.5,.5,0),sl,o,rl,i,s),sM.set(0,0),i0.set(1,0),oM.set(1,1);let a=e.ray.intersectTriangle(dd,Xc,fd,!1,Hc);if(a===null&&(pd(Xc.set(-.5,.5,0),sl,o,rl,i,s),i0.set(0,1),a=e.ray.intersectTriangle(dd,fd,Xc,!1,Hc),a===null))return;let l=e.ray.origin.distanceTo(Hc);l<e.near||l>e.far||t.push({distance:l,point:Hc.clone(),uv:es.getInterpolation(Hc,dd,Xc,fd,sM,i0,oM,new Fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};u(Eg,"Sprite");var rs=Eg;function pd(r,e,t,n,i,s){ol.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Wc.x=s*ol.x-i*ol.y,Wc.y=i*ol.x+s*ol.y):Wc.copy(ol),r.copy(e),r.x+=Wc.x,r.y+=Wc.y,r.applyMatrix4(_S)}u(pd,"transformVertex");var jr=new X,r0=new X,md=new X,gd=new X,Ag=class Ag{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=jr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jr.copy(this.origin).addScaledVector(this.direction,t),jr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){r0.copy(e).add(t).multiplyScalar(.5),md.copy(t).sub(e).normalize(),gd.copy(this.origin).sub(r0);let s=e.distanceTo(t)*.5,o=-this.direction.dot(md),a=gd.dot(this.direction),l=-gd.dot(md),c=gd.lengthSq(),h=Math.abs(1-o*o),d,f,m,g;if(h>0)if(d=o*l-a,f=o*a-l,g=s*h,d>=0)if(f>=-g)if(f<=g){let _=1/h;d*=_,f*=_,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(r0).addScaledVector(md,f),m}intersectSphere(e,t){if(e.radius<0)return null;jr.subVectors(e.center,this.origin);let n=jr.dot(this.direction),i=jr.dot(jr)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,jr)!==null}intersectTriangle(e,t,n,i,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=e.x-o.x,f=e.y-o.y,m=e.z-o.z,g=t.x-o.x,_=t.y-o.y,b=t.z-o.z,x=n.x-o.x,v=n.y-o.y,S=n.z-o.z,M=Math.abs(l),R=Math.abs(c),E=Math.abs(h),y,w,L,I,O,B,$,F,j,ce,G,ee;if(M>=R&&M>=E?(L=l,B=d,j=g,ee=x,l>=0?(y=c,w=h,I=f,O=m,$=_,F=b,ce=v,G=S):(y=h,w=c,I=m,O=f,$=b,F=_,ce=S,G=v)):R>=E?(L=c,B=f,j=_,ee=v,c>=0?(y=h,w=l,I=m,O=d,$=b,F=g,ce=S,G=x):(y=l,w=h,I=d,O=m,$=g,F=b,ce=x,G=S)):(L=h,B=m,j=b,ee=S,h>=0?(y=l,w=c,I=d,O=f,$=g,F=_,ce=x,G=v):(y=c,w=l,I=f,O=d,$=_,F=g,ce=v,G=x)),L===0)return null;let Z=y/L,ne=w/L,ae=1/L,pe=I-Z*B,ye=O-ne*B,oe=$-Z*j,de=F-ne*j,ue=ce-Z*ee,fe=G-ne*ee,he=ue*de-fe*oe,Ie=pe*fe-ye*ue,qe=oe*ye-de*pe;if(i){if(he<0||Ie<0||qe<0)return null}else if((he<0||Ie<0||qe<0)&&(he>0||Ie>0||qe>0))return null;let Re=he+Ie+qe;if(Re===0)return null;let st=ae*(he*B+Ie*j+qe*ee);return(Re>0?st<0:st>0)?null:this.at(st/Re,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};u(Ag,"Ray");var Gs=Ag,Tg=class Tg extends Fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=T0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};u(Tg,"MeshBasicMaterial");var An=Tg,aM=new He,Do=new Gs,bd=new En,lM=new X,xd=new X,yd=new X,_d=new X,s0=new X,vd=new X,cM=new X,Md=new X,Rg=class Rg extends Ut{constructor(e=new Mt,t=new An){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){vd.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],d=s[l];h!==0&&(s0.fromBufferAttribute(d,e),o?vd.addScaledVector(s0,h):vd.addScaledVector(s0.sub(t),h))}t.add(vd)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bd.copy(n.boundingSphere),bd.applyMatrix4(s),Do.copy(e.ray).recast(e.near),!(bd.containsPoint(Do.origin)===!1&&(Do.intersectSphere(bd,lM)===null||Do.origin.distanceToSquared(lM)>(e.far-e.near)**2))&&(aM.copy(s).invert(),Do.copy(e.ray).applyMatrix4(aM),!(n.boundingBox!==null&&Do.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Do)))}_computeIntersections(e,t,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let b=f[g],x=o[b.materialIndex],v=Math.max(b.start,m.start),S=Math.min(a.count,Math.min(b.start+b.count,m.start+m.count));for(let M=v,R=S;M<R;M+=3){let E=a.getX(M),y=a.getX(M+1),w=a.getX(M+2);i=Sd(this,x,e,n,c,h,d,E,y,w),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=b.materialIndex,t.push(i))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let b=g,x=_;b<x;b+=3){let v=a.getX(b),S=a.getX(b+1),M=a.getX(b+2);i=Sd(this,o,e,n,c,h,d,v,S,M),i&&(i.faceIndex=Math.floor(b/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let b=f[g],x=o[b.materialIndex],v=Math.max(b.start,m.start),S=Math.min(l.count,Math.min(b.start+b.count,m.start+m.count));for(let M=v,R=S;M<R;M+=3){let E=M,y=M+1,w=M+2;i=Sd(this,x,e,n,c,h,d,E,y,w),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=b.materialIndex,t.push(i))}}else{let g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let b=g,x=_;b<x;b+=3){let v=b,S=b+1,M=b+2;i=Sd(this,o,e,n,c,h,d,v,S,M),i&&(i.faceIndex=Math.floor(b/3),t.push(i))}}}};u(Rg,"Mesh");var $e=Rg;function sR(r,e,t,n,i,s,o,a){let l;if(e.side===Gn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===wi,a),l===null)return null;Md.copy(a),Md.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Md);return c<t.near||c>t.far?null:{distance:c,point:Md.clone(),object:r}}u(sR,"checkIntersection$1");function Sd(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,xd),r.getVertexPosition(l,yd),r.getVertexPosition(c,_d);let h=sR(r,e,t,n,xd,yd,_d,cM);if(h){let d=new X;es.getBarycoord(cM,xd,yd,_d,d),i&&(h.uv=es.getInterpolatedAttribute(i,a,l,c,d,new Fe)),s&&(h.uv1=es.getInterpolatedAttribute(s,a,l,c,d,new Fe)),o&&(h.normal=es.getInterpolatedAttribute(o,a,l,c,d,new X),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new X,materialIndex:0};es.getNormal(xd,yd,_d,f.normal),h.face=f,h.barycoord=d}return h}u(Sd,"checkGeometryIntersection");var qc=new Tt,uM=new Tt,hM=new Tt,oR=new Tt,dM=new He,wd=new X,o0=new En,fM=new He,a0=new Gs,Cg=class Cg extends $e{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=h0,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new wn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,wd),this.boundingBox.expandByPoint(wd)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new En),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,wd),this.boundingSphere.expandByPoint(wd)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),o0.copy(this.boundingSphere),o0.applyMatrix4(i),e.ray.intersectsSphere(o0)!==!1&&(fM.copy(i).invert(),a0.copy(e.ray).applyMatrix4(fM),!(this.boundingBox!==null&&a0.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,a0)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Tt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===h0?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===iS?this.bindMatrixInverse.copy(this.bindMatrix).invert():ke("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;uM.fromBufferAttribute(i.attributes.skinIndex,e),hM.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(qc.copy(t),t.set(0,0,0,0)):(qc.set(t.x,t.y,t.z,1),t.set(0,0,0)),qc.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let o=hM.getComponent(s);if(o!==0){let a=uM.getComponent(s);dM.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(oR.copy(qc).applyMatrix4(dM),o)}}return t.isVector4&&(t.w=qc.w),t.applyMatrix4(this.bindMatrixInverse)}};u(Cg,"SkinnedMesh");var au=Cg,Pg=class Pg extends Ut{constructor(){super(),this.isBone=!0,this.type="Bone"}};u(Pg,"Bone");var Ml=Pg,Ig=class Ig extends on{constructor(e=null,t=1,n=1,i,s,o,a,l,c=qt,h=qt,d,f){super(null,o,a,l,c,h,i,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};u(Ig,"DataTexture");var Vs=Ig,pM=new He,aR=new He,mf=class mf{constructor(e=[],t=[]){this.uuid=Mr(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ke("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new He;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:aR;pM.multiplyMatrices(a,t[s]),pM.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new mf(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Vs(t,e,e,Kn,si);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],o=t[s];o===void 0&&(ke("Skeleton: No bone found with UUID:",s),o=new Ml),this.bones.push(o),this.boneInverses.push(new He().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}};u(mf,"Skeleton");var lu=mf,Lg=class Lg extends xt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};u(Lg,"InstancedBufferAttribute");var Yn=Lg,al=new He,mM=new He,Ed=[],gM=new wn,lR=new He,Yc=new $e,$c=new En,Ng=class Ng extends $e{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Yn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,lR)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,al),gM.copy(e.boundingBox).applyMatrix4(al),this.boundingBox.union(gM)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new En),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,al),$c.copy(e.boundingSphere).applyMatrix4(al),this.boundingSphere.union($c)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Yc.geometry=this.geometry,Yc.material=this.material,Yc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$c.copy(this.boundingSphere),$c.applyMatrix4(n),e.ray.intersectsSphere($c)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,al),mM.multiplyMatrices(n,al),Yc.matrixWorld=mM,Yc.raycast(e,Ed);for(let o=0,a=Ed.length;o<a;o++){let l=Ed[o];l.instanceId=s,l.object=this,t.push(l)}Ed.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Yn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Vs(new Float32Array(i*this.count),i,this.count,Df,si));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}};u(Ng,"InstancedMesh");var cu=Ng,Oo=new En,cR=new Fe(.5,.5),Ad=new X,Dg=class Dg{constructor(e=new Wn,t=new Wn,n=new Wn,i=new Wn,s=new Wn,o=new Wn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Si,n=!1){let i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],d=s[5],f=s[6],m=s[7],g=s[8],_=s[9],b=s[10],x=s[11],v=s[12],S=s[13],M=s[14],R=s[15];if(i[0].setComponents(c-o,m-h,x-g,R-v).normalize(),i[1].setComponents(c+o,m+h,x+g,R+v).normalize(),i[2].setComponents(c+a,m+d,x+_,R+S).normalize(),i[3].setComponents(c-a,m-d,x-_,R-S).normalize(),n)i[4].setComponents(l,f,b,M).normalize(),i[5].setComponents(c-l,m-f,x-b,R-M).normalize();else if(i[4].setComponents(c-l,m-f,x-b,R-M).normalize(),t===Si)i[5].setComponents(c+l,m+f,x+b,R+M).normalize();else if(t===gl)i[5].setComponents(l,f,b,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Oo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Oo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Oo)}intersectsSprite(e){Oo.center.set(0,0,0);let t=cR.distanceTo(e.center);return Oo.radius=.7071067811865476+t,Oo.applyMatrix4(e.matrixWorld),this.intersectsSphere(Oo)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Ad.x=i.normal.x>0?e.max.x:e.min.x,Ad.y=i.normal.y>0?e.max.y:e.min.y,Ad.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ad)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};u(Dg,"Frustum");var Hs=Dg,bM=new He,gf=class gf{constructor(){this.coordinateSystem=Si,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let s=t[i];bM.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new Hs),n[i].setFromProjectionMatrix(bM,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Hs),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new gf().copy(this)}};u(gf,"FrustumArray");var Xd=gf;var Og=class Og extends Fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}};u(Og,"LineBasicMaterial");var Sl=Og,qd=new X,Yd=new X,xM=new He,Kc=new Gs,Td=new En,l0=new X,yM=new X,Ug=class Ug extends Ut{constructor(e=new Mt,t=new Sl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)qd.fromBufferAttribute(t,i-1),Yd.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=qd.distanceTo(Yd);e.setAttribute("lineDistance",new Et(n,1))}else ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Td.copy(n.boundingSphere),Td.applyMatrix4(i),Td.radius+=s,e.ray.intersectsSphere(Td)===!1)return;xM.copy(i).invert(),Kc.copy(e.ray).applyMatrix4(xM);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=m,b=g-1;_<b;_+=c){let x=h.getX(_),v=h.getX(_+1),S=Rd(this,e,Kc,l,x,v,_);S&&t.push(S)}if(this.isLineLoop){let _=h.getX(g-1),b=h.getX(m),x=Rd(this,e,Kc,l,_,b,g-1);x&&t.push(x)}}else{let m=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=m,b=g-1;_<b;_+=c){let x=Rd(this,e,Kc,l,_,_+1,_);x&&t.push(x)}if(this.isLineLoop){let _=Rd(this,e,Kc,l,g-1,m,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};u(Ug,"Line");var Wo=Ug;function Rd(r,e,t,n,i,s,o){let a=r.geometry.attributes.position;if(qd.fromBufferAttribute(a,i),Yd.fromBufferAttribute(a,s),t.distanceSqToSegment(qd,Yd,l0,yM)>n)return;l0.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(l0);if(!(c<e.near||c>e.far))return{distance:c,point:yM.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}u(Rd,"checkIntersection");var _M=new X,vM=new X,Fg=class Fg extends Wo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)_M.fromBufferAttribute(t,i),vM.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+_M.distanceTo(vM);e.setAttribute("lineDistance",new Et(n,1))}else ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};u(Fg,"LineSegments");var uu=Fg,Bg=class Bg extends Wo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}};u(Bg,"LineLoop");var hu=Bg,kg=class kg extends Fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};u(kg,"PointsMaterial");var wl=kg,MM=new He,f0=new Gs,Cd=new En,Pd=new X,zg=class zg extends Ut{constructor(e=new Mt,t=new wl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cd.copy(n.boundingSphere),Cd.applyMatrix4(i),Cd.radius+=s,e.ray.intersectsSphere(Cd)===!1)return;MM.copy(i).invert(),f0.copy(e.ray).applyMatrix4(MM);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=f,_=m;g<_;g++){let b=c.getX(g);Pd.fromBufferAttribute(d,b),SM(Pd,b,l,i,e,t,this)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let g=f,_=m;g<_;g++)Pd.fromBufferAttribute(d,g),SM(Pd,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};u(zg,"Points");var du=zg;function SM(r,e,t,n,i,s,o){let a=f0.distanceSqToPoint(r);if(a<t){let l=new X;f0.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}u(SM,"testPoint");var Gg=class Gg extends on{constructor(e=[],t=jo,n,i,s,o,a,l,c,h){super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};u(Gg,"CubeTexture");var fu=Gg,Vg=class Vg extends on{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};u(Vg,"CanvasTexture");var Ws=Vg;var Hg=class Hg extends on{constructor(e,t,n=Yi,i,s,o,a=qt,l=qt,c,h=is,d=1){if(h!==is&&h!==ds)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}};u(Hg,"DepthTexture");var ss=Hg,Wg=class Wg extends ss{constructor(e,t=Yi,n=jo,i,s,o=qt,a=qt,l,c=is){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}};u(Wg,"CubeDepthTexture");var pu=Wg,Xg=class Xg extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};u(Xg,"ExternalTexture");var mu=Xg,bf=class bf extends Mt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(h,3)),this.setAttribute("uv",new Et(d,2));function g(_,b,x,v,S,M,R,E,y,w,L){let I=M/y,O=R/w,B=M/2,$=R/2,F=E/2,j=y+1,ce=w+1,G=0,ee=0,Z=new X;for(let ne=0;ne<ce;ne++){let ae=ne*O-$;for(let pe=0;pe<j;pe++){let ye=pe*I-B;Z[_]=ye*v,Z[b]=ae*S,Z[x]=F,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[b]=0,Z[x]=E>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(pe/y),d.push(1-ne/w),G+=1}}for(let ne=0;ne<w;ne++)for(let ae=0;ae<y;ae++){let pe=f+ae+j*ne,ye=f+ae+j*(ne+1),oe=f+(ae+1)+j*(ne+1),de=f+(ae+1)+j*ne;l.push(pe,ye,de),l.push(ye,oe,de),ee+=6}a.addGroup(m,ee,L),m+=ee,f+=G}u(g,"buildPlane")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bf(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};u(bf,"BoxGeometry");var gr=bf;var xf=class xf extends Mt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new X,h=new Fe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){let m=n+d/t*i;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Et(o,3)),this.setAttribute("normal",new Et(a,3)),this.setAttribute("uv",new Et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xf(e.radius,e.segments,e.thetaStart,e.thetaLength)}};u(xf,"CircleGeometry");var gu=xf,yf=class yf extends Mt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],d=[],f=[],m=[],g=0,_=[],b=n/2,x=0;v(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Et(d,3)),this.setAttribute("normal",new Et(f,3)),this.setAttribute("uv",new Et(m,2));function v(){let M=new X,R=new X,E=0,y=(t-e)/n;for(let w=0;w<=s;w++){let L=[],I=w/s,O=I*(t-e)+e;for(let B=0;B<=i;B++){let $=B/i,F=$*l+a,j=Math.sin(F),ce=Math.cos(F);R.x=O*j,R.y=-I*n+b,R.z=O*ce,d.push(R.x,R.y,R.z),M.set(j,y,ce).normalize(),f.push(M.x,M.y,M.z),m.push($,1-I),L.push(g++)}_.push(L)}for(let w=0;w<i;w++)for(let L=0;L<s;L++){let I=_[L][w],O=_[L+1][w],B=_[L+1][w+1],$=_[L][w+1];(e>0||L!==0)&&(h.push(I,O,$),E+=3),(t>0||L!==s-1)&&(h.push(O,B,$),E+=3)}c.addGroup(x,E,0),x+=E}u(v,"generateTorso");function S(M){let R=g,E=new Fe,y=new X,w=0,L=M===!0?e:t,I=M===!0?1:-1;for(let B=1;B<=i;B++)d.push(0,b*I,0),f.push(0,I,0),m.push(.5,.5),g++;let O=g;for(let B=0;B<=i;B++){let F=B/i*l+a,j=Math.cos(F),ce=Math.sin(F);y.x=L*ce,y.y=b*I,y.z=L*j,d.push(y.x,y.y,y.z),f.push(0,I,0),E.x=j*.5+.5,E.y=ce*.5*I+.5,m.push(E.x,E.y),g++}for(let B=0;B<i;B++){let $=R+B,F=O+B;M===!0?h.push(F,F+1,$):h.push(F+1,F,$),w+=3}c.addGroup(x,w,M===!0?1:2),x+=w}u(S,"generateCap")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};u(yf,"CylinderGeometry");var Bn=yf,_f=class _f extends Bn{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new _f(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};u(_f,"ConeGeometry");var qi=_f,vf=class vf extends Mt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Et(s,3)),this.setAttribute("normal",new Et(s.slice(),3)),this.setAttribute("uv",new Et(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let S=new X,M=new X,R=new X;for(let E=0;E<t.length;E+=3)m(t[E+0],S),m(t[E+1],M),m(t[E+2],R),l(S,M,R,v)}u(a,"subdivide");function l(v,S,M,R){let E=R+1,y=[];for(let w=0;w<=E;w++){y[w]=[];let L=v.clone().lerp(M,w/E),I=S.clone().lerp(M,w/E),O=E-w;for(let B=0;B<=O;B++)B===0&&w===E?y[w][B]=L:y[w][B]=L.clone().lerp(I,B/O)}for(let w=0;w<E;w++)for(let L=0;L<2*(E-w)-1;L++){let I=Math.floor(L/2);L%2===0?(f(y[w][I+1]),f(y[w+1][I]),f(y[w][I])):(f(y[w][I+1]),f(y[w+1][I+1]),f(y[w+1][I]))}}u(l,"subdivideFace");function c(v){let S=new X;for(let M=0;M<s.length;M+=3)S.x=s[M+0],S.y=s[M+1],S.z=s[M+2],S.normalize().multiplyScalar(v),s[M+0]=S.x,s[M+1]=S.y,s[M+2]=S.z}u(c,"applyRadius");function h(){let v=new X;for(let S=0;S<s.length;S+=3){v.x=s[S+0],v.y=s[S+1],v.z=s[S+2];let M=b(v)/2/Math.PI+.5,R=x(v)/Math.PI+.5;o.push(M,1-R)}g(),d()}u(h,"generateUVs");function d(){for(let v=0;v<o.length;v+=6){let S=o[v+0],M=o[v+2],R=o[v+4],E=Math.max(S,M,R),y=Math.min(S,M,R);E>.9&&y<.1&&(S<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),R<.2&&(o[v+4]+=1))}}u(d,"correctSeam");function f(v){s.push(v.x,v.y,v.z)}u(f,"pushVertex");function m(v,S){let M=v*3;S.x=e[M+0],S.y=e[M+1],S.z=e[M+2]}u(m,"getVertexByIndex");function g(){let v=new X,S=new X,M=new X,R=new X,E=new Fe,y=new Fe,w=new Fe;for(let L=0,I=0;L<s.length;L+=9,I+=6){v.set(s[L+0],s[L+1],s[L+2]),S.set(s[L+3],s[L+4],s[L+5]),M.set(s[L+6],s[L+7],s[L+8]),E.set(o[I+0],o[I+1]),y.set(o[I+2],o[I+3]),w.set(o[I+4],o[I+5]),R.copy(v).add(S).add(M).divideScalar(3);let O=b(R);_(E,I+0,v,O),_(y,I+2,S,O),_(w,I+4,M,O)}}u(g,"correctUVs");function _(v,S,M,R){R<0&&v.x===1&&(o[S]=v.x-1),M.x===0&&M.z===0&&(o[S]=R/2/Math.PI+.5)}u(_,"correctUV");function b(v){return Math.atan2(v.z,-v.x)}u(b,"azimuth");function x(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}u(x,"inclination")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vf(e.vertices,e.indices,e.radius,e.detail)}};u(vf,"PolyhedronGeometry");var $d=vf;var Mf=class Mf extends $d{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Mf(e.radius,e.detail)}};u(Mf,"IcosahedronGeometry");var Xs=Mf;var Sf=class Sf extends Mt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=e/a,f=t/l,m=[],g=[],_=[],b=[];for(let x=0;x<h;x++){let v=x*f-o;for(let S=0;S<c;S++){let M=S*d-s;g.push(M,-v,0),_.push(0,0,1),b.push(S/a),b.push(1-x/l)}}for(let x=0;x<l;x++)for(let v=0;v<a;v++){let S=v+c*x,M=v+c*(x+1),R=v+1+c*(x+1),E=v+1+c*x;m.push(S,M,E),m.push(M,R,E)}this.setIndex(m),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(_,3)),this.setAttribute("uv",new Et(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sf(e.width,e.height,e.widthSegments,e.heightSegments)}};u(Sf,"PlaneGeometry");var br=Sf;var wf=class wf extends Mt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new X,f=new X,m=[],g=[],_=[],b=[];for(let x=0;x<=n;x++){let v=[],S=x/n,M=o+S*a,R=e*Math.cos(M),E=Math.sqrt(e*e-R*R),y=0;x===0&&o===0?y=.5/t:x===n&&l===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){let L=w/t,I=i+L*s;d.x=-E*Math.cos(I),d.y=R,d.z=E*Math.sin(I),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),b.push(L+y,1-S),v.push(c++)}h.push(v)}for(let x=0;x<n;x++)for(let v=0;v<t;v++){let S=h[x][v+1],M=h[x][v],R=h[x+1][v],E=h[x+1][v+1];(x!==0||o>0)&&m.push(S,M,E),(x!==n-1||l<Math.PI)&&m.push(M,R,E)}this.setIndex(m),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(_,3)),this.setAttribute("uv",new Et(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};u(wf,"SphereGeometry");var qs=wf;var Ef=class Ef extends Mt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],d=[],f=new X,m=new X,g=new X;for(let _=0;_<=n;_++){let b=o+_/n*a;for(let x=0;x<=i;x++){let v=x/i*s;m.x=(e+t*Math.cos(b))*Math.cos(v),m.y=(e+t*Math.cos(b))*Math.sin(v),m.z=t*Math.sin(b),c.push(m.x,m.y,m.z),f.x=e*Math.cos(v),f.y=e*Math.sin(v),g.subVectors(m,f).normalize(),h.push(g.x,g.y,g.z),d.push(x/i),d.push(_/n)}}for(let _=1;_<=n;_++)for(let b=1;b<=i;b++){let x=(i+1)*_+b-1,v=(i+1)*(_-1)+b-1,S=(i+1)*(_-1)+b,M=(i+1)*_+b;l.push(x,v,M),l.push(v,S,M)}this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(h,3)),this.setAttribute("uv",new Et(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ef(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};u(Ef,"TorusGeometry");var os=Ef;function ta(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];if(wM(i))i.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(wM(i[0])){let s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}u(ta,"cloneUniforms");function Cn(r){let e={};for(let t=0;t<r.length;t++){let n=ta(r[t]);for(let i in n)e[i]=n[i]}return e}u(Cn,"mergeUniforms");function wM(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}u(wM,"isThreeObject");function uR(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}u(uR,"cloneUniformsGroups");function J0(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}u(J0,"getUnlitUniformColorSpace");var na={clone:ta,merge:Cn},hR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qg=class qg extends Fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hR,this.fragmentShader=dR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ta(e.uniforms),this.uniformsGroups=uR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Se().setHex(i.value);break;case"v2":this.uniforms[n].value=new Fe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new X().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Tt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Xe().fromArray(i.value);break;case"m4":this.uniforms[n].value=new He().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}};u(qg,"ShaderMaterial");var kn=qg,Yg=class Yg extends kn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};u(Yg,"RawShaderMaterial");var Kd=Yg,$g=class $g extends Fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gp,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};u($g,"MeshStandardMaterial");var jt=$g,Kg=class Kg extends jt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Fe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:u(function(){return pt(2.5*(this.ior-1)/(this.ior+1),0,1)},"get"),set:u(function(t){this.ior=(1+.4*t)/(1-.4*t)},"set")}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Bo('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Bo('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};u(Kg,"MeshPhysicalMaterial");var zn=Kg;var Zg=class Zg extends Fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};u(Zg,"MeshDepthMaterial");var Zd=Zg,Jg=class Jg extends Fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};u(Jg,"MeshDistanceMaterial");var Jd=Jg;function Us(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}u(Us,"convertArray");function Zc(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}u(Zc,"hasTangents");function fR(r){function e(i,s){return r[i]-r[s]}u(e,"compareTime");let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}u(fR,"getKeyframeOrder");function EM(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){let a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}u(EM,"sortedArray");function pR(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}u(pR,"flattenJSON");var jg=class jg{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}};u(jg,"Interpolant");var xr=jg,Qg=class Qg extends xr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Uo,endingEnd:Uo}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Fo:s=e,a=2*t-n;break;case eu:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Fo:o=e,l=2*n-t;break;case eu:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(n-t)/(i-t),_=g*g,b=_*g,x=-f*b+2*f*_-f*g,v=(1+f)*b+(-1.5-2*f)*_+(-.5+f)*g+1,S=(-1-m)*b+(1.5+m)*_+.5*g,M=m*b-m*_;for(let R=0;R!==a;++R)s[R]=x*o[h+R]+v*o[c+R]+S*o[l+R]+M*o[d+R];return s}};u(Qg,"CubicInterpolant");var jd=Qg,eb=class eb extends xr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),d=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*d+o[l+f]*h;return s}};u(eb,"LinearInterpolant");var bu=eb,tb=class tb extends xr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}};u(tb,"DiscreteInterpolant");var Qd=tb,nb=class nb extends xr{interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-t)/(i-t),_=1-g;for(let b=0;b!==a;++b)s[b]=o[c+b]*_+o[l+b]*g;return s}let f=a*2,m=e-1;for(let g=0;g!==a;++g){let _=o[c+g],b=o[l+g],x=m*f+g*2,v=d[x],S=d[x+1],M=e*f+g*2,R=h[M],E=h[M+1],y=gR(n,t,v,R,i);s[g]=vS(y,_,S,E,b)}return s}};u(nb,"BezierInterpolant");var ef=nb;function vS(r,e,t,n,i){let s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*n+r*r*r*i}u(vS,"cubicBezier");function mR(r,e,t,n,i){let s=1-r;return 3*s*s*(t-e)+6*s*r*(n-t)+3*r*r*(i-n)}u(mR,"cubicBezierSlope");function gR(r,e,t,n,i){let s=(r-e)/(i-e);for(let o=0;o<8;o++){let a=vS(s,e,t,n,i)-r;if(Math.abs(a)<1e-10)break;let l=mR(s,e,t,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}u(gR,"solveBezierParameter");var ib=class ib{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Us(t,this.TimeBufferType),this.values=Us(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Us(e.times,Array),values:Us(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Zc(e.settings)&&(n.settings={inTangents:Us(e.settings.inTangents,Array),outTangents:Us(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Qd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new bu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new jd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ef(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ko:t=this.InterpolantFactoryMethodDiscrete;break;case zo:t=this.InterpolantFactoryMethodLinear;break;case Nd:t=this.InterpolantFactoryMethodSmooth;break;case d0:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ke("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ko;case this.InterpolantFactoryMethodLinear:return zo;case this.InterpolantFactoryMethodSmooth:return Nd;case this.InterpolantFactoryMethodBezier:return d0}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;Zc(this.settings)&&(AM(this.settings.inTangents,e),AM(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Zc(this.settings)&&(TM(this.settings.inTangents,e),TM(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){We("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){We("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&wT(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){We("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Nd,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let d=a*n,f=d-n,m=d+n;for(let g=0;g!==n;++g){let _=t[d+g];if(_!==t[f+g]||_!==t[m+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,f=o*n;for(let m=0;m!==n;++m)t[f+m]=t[d+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Zc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};u(ib,"KeyframeTrack");var $n=ib;function AM(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]+=e}u(AM,"shiftTangentTimes");function TM(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]*=e}u(TM,"scaleTangentTimes");$n.prototype.ValueTypeName="";$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=zo;var rb=class rb extends $n{constructor(e,t,n){super(e,t,n)}};u(rb,"BooleanKeyframeTrack");var as=rb;as.prototype.ValueTypeName="bool";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=ko;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var sb=class sb extends $n{constructor(e,t,n,i){super(e,t,n,i)}};u(sb,"ColorKeyframeTrack");var xu=sb;xu.prototype.ValueTypeName="color";var ob=class ob extends $n{constructor(e,t,n,i){super(e,t,n,i)}};u(ob,"NumberKeyframeTrack");var ls=ob;ls.prototype.ValueTypeName="number";var ab=class ab extends xr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)Jt.slerpFlat(s,0,o,c-a,o,c,l);return s}};u(ab,"QuaternionLinearInterpolant");var tf=ab,lb=class lb extends $n{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new tf(this.times,this.values,this.getValueSize(),e)}};u(lb,"QuaternionKeyframeTrack");var cs=lb;cs.prototype.ValueTypeName="quaternion";cs.prototype.InterpolantFactoryMethodSmooth=void 0;var cb=class cb extends $n{constructor(e,t,n){super(e,t,n)}};u(cb,"StringKeyframeTrack");var us=cb;us.prototype.ValueTypeName="string";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=ko;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var ub=class ub extends $n{constructor(e,t,n,i){super(e,t,n,i)}};u(ub,"VectorKeyframeTrack");var Ys=ub;Ys.prototype.ValueTypeName="vector";var hb=class hb{constructor(e="",t=-1,n=[],i=mp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Mr(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(xR(n[o]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push($n.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);let h=fR(l);l=EM(l,1,h),c=EM(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new ls(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(s);if(h&&h.length>1){let d=h[1],f=i[d];f||(i[d]=f=[]),f.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};u(hb,"AnimationClip");var Xo=hb;function bR(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ls;case"vector":case"vector2":case"vector3":case"vector4":return Ys;case"color":return xu;case"quaternion":return cs;case"bool":case"boolean":return as;case"string":return us}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}u(bR,"getTrackTypeForValueTypeName");function xR(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=bR(r.type);if(r.times===void 0){let n=[],i=[];pR(r.keys,n,i,"value"),r.times=n,r.values=i}let t;return e.parse!==void 0?t=e.parse(r):t=new e(r.name,r.times,r.values,r.interpolation),Zc(r.settings)&&(t.settings={inTangents:Us(r.settings.inTangents,Float32Array),outTangents:Us(r.settings.outTangents,Float32Array)}),t}u(xR,"parseKeyframeTrack");var pr={enabled:!1,files:{},add:u(function(r,e){this.enabled!==!1&&(RM(r)||(this.files[r]=e))},"add"),get:u(function(r){if(this.enabled!==!1&&!RM(r))return this.files[r]},"get"),remove:u(function(r){delete this.files[r]},"remove"),clear:u(function(){this.files={}},"clear")};function RM(r){try{let e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}u(RM,"isBlobURL");var db=class db{constructor(e,t,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}};u(db,"LoadingManager");var El=db,MS=new El,fb=class fb{constructor(e){this.manager=e!==void 0?e:MS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};u(fb,"Loader");var yr=fb;yr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qr={},pb=class pb extends Error{constructor(e,t){super(e),this.response=t}};u(pb,"HttpError");var p0=pb,mb=class mb extends yr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=pr.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Qr[e]!==void 0){Qr[e].push({onLoad:t,onProgress:n,onError:i});return}Qr[e]=[],Qr[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&ke("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Qr[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=f?parseInt(f):0,g=m!==0,_=0,b=new ReadableStream({start(x){v();function v(){d.read().then(({done:S,value:M})=>{if(S)x.close();else{_+=M.byteLength;let R=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:m});for(let E=0,y=h.length;E<y;E++){let w=h[E];w.onProgress&&w.onProgress(R)}x.enqueue(M),v()}},S=>{x.error(S)})}u(v,"readData")}});return new Response(b)}else throw new p0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{pr.add(`file:${e}`,c);let h=Qr[e];delete Qr[e];for(let d=0,f=h.length;d<f;d++){let m=h[d];m.onLoad&&m.onLoad(c)}}).catch(c=>{let h=Qr[e];if(h===void 0)throw this.manager.itemError(e),c;delete Qr[e];for(let d=0,f=h.length;d<f;d++){let m=h[d];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};u(mb,"FileLoader");var Al=mb;var ll=new WeakMap,gb=class gb extends yr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=pr.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let d=ll.get(o);d===void 0&&(d=[],ll.set(o,d)),d.push({onLoad:t,onError:i})}return o}let a=bl("img");function l(){h(),t&&t(this);let d=ll.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onLoad&&m.onLoad(this)}ll.delete(this),s.manager.itemEnd(e)}u(l,"onImageLoad");function c(d){h(),i&&i(d),pr.remove(`image:${e}`);let f=ll.get(this)||[];for(let m=0;m<f.length;m++){let g=f[m];g.onError&&g.onError(d)}ll.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}u(c,"onImageError");function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return u(h,"removeEventListeners"),a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),pr.add(`image:${e}`,a),s.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};u(gb,"ImageLoader");var nf=gb;var bb=class bb extends yr{constructor(e){super(e)}load(e,t,n,i){let s=new on,o=new nf(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}};u(bb,"TextureLoader");var yu=bb,xb=class xb extends Ut{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};u(xb,"Light");var qo=xb,yb=class yb extends qo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}};u(yb,"HemisphereLight");var _u=yb,c0=new He,CM=new X,PM=new X,_b=class _b{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hs,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;CM.setFromMatrixPosition(e.matrixWorld),t.position.copy(CM),PM.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(PM),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){c0.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(c0,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,o=i?i.z/s.x:1,a=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;e.coordinateSystem===gl||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(c0)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};u(_b,"LightShadow");var Tl=_b,Id=new X,Ld=new Jt,fr=new X,vb=class vb extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=Si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Id,Ld,fr),fr.x===1&&fr.y===1&&fr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Id,Ld,fr.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Id,Ld,fr),fr.x===1&&fr.y===1&&fr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Id,Ld,fr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};u(vb,"Camera");var vu=vb,Os=new X,IM=new Fe,LM=new Fe,Mb=class Mb extends vu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Go*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Jc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Go*2*Math.atan(Math.tan(Jc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Os.x,Os.y).multiplyScalar(-e/Os.z),Os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Os.x,Os.y).multiplyScalar(-e/Os.z)}getViewSize(e,t){return this.getViewBounds(e,IM,LM),t.subVectors(LM,IM)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Jc*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};u(Mb,"PerspectiveCamera");var sn=Mb,Sb=class Sb extends Tl{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Go*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}};u(Sb,"SpotLightShadow");var m0=Sb,wb=class wb extends qo{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new m0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}};u(wb,"SpotLight");var Mu=wb,Eb=class Eb extends Tl{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0}};u(Eb,"PointLightShadow");var g0=Eb,Ab=class Ab extends qo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new g0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}};u(Ab,"PointLight");var Su=Ab,Tb=class Tb extends vu{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};u(Tb,"OrthographicCamera");var Yo=Tb,Rb=class Rb extends Tl{constructor(){super(new Yo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};u(Rb,"DirectionalLightShadow");var b0=Rb,Cb=class Cb extends qo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new b0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};u(Cb,"DirectionalLight");var $o=Cb;var Pb=class Pb{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};u(Pb,"LoaderUtils");var hs=Pb,Ib=class Ib extends Mt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};u(Ib,"InstancedBufferGeometry");var wu=Ib;var u0=new WeakMap,Lb=class Lb extends yr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ke("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ke("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=pr.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{u0.has(o)===!0?(i&&i(u0.get(o)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return pr.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),u0.set(l,c),pr.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});pr.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};u(Lb,"ImageBitmapLoader");var Eu=Lb;var cl=-90,ul=1,Nb=class Nb extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new sn(cl,ul,e,t);i.layers=this.layers,this.add(i);let s=new sn(cl,ul,e,t);s.layers=this.layers,this.add(s);let o=new sn(cl,ul,e,t);o.layers=this.layers,this.add(o);let a=new sn(cl,ul,e,t);a.layers=this.layers,this.add(a);let l=new sn(cl,ul,e,t);l.layers=this.layers,this.add(l);let c=new sn(cl,ul,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===Si)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===gl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let b=!1;e.isWebGLRenderer===!0?b=e.state.buffers.depth.getReversed():b=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,i),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}};u(Nb,"CubeCamera");var Rl=Nb,Db=class Db extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};u(Db,"ArrayCamera");var rf=Db;var Ob=class Ob{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,s=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Jt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){let o=this._workIndex*s;Jt.multiplyQuaternionsFlat(e,o,e,t,e,n),Jt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){let o=1-i;for(let a=0;a!==s;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}};u(Ob,"PropertyMixer");var sf=Ob,j0="\\[\\]\\.:\\/",yR=new RegExp("["+j0+"]","g"),Q0="[^"+j0+"]",_R="[^"+j0.replace("\\.","")+"]",vR=/((?:WC+[\/:])*)/.source.replace("WC",Q0),MR=/(WCOD+)?/.source.replace("WCOD",_R),SR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Q0),wR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Q0),ER=new RegExp("^"+vR+MR+SR+wR+"$"),AR=["material","materials","bones","map"],Ub=class Ub{constructor(e,t,n){let i=n||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}};u(Ub,"Composite");var x0=Ub,Bs=class Bs{constructor(e,t,n){this.path=t,this.parsedPath=n||Bs.parseTrackName(t),this.node=Bs.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Bs.Composite(e,t,n):new Bs(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yR,"")}static parseTrackName(e){let t=ER.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);AR.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=u(function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},"searchNodeSubtree"),i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=Bs.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;We("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};u(Bs,"PropertyBinding");var vt=Bs;vt.Composite=x0;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Fb=class Fb{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let s=t.tracks,o=s.length,a=new Array(o),l={endingStart:Uo,endingEnd:Uo};for(let c=0;c!==o;++c){let h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=pp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,s=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case oS:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case mp:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,s=this._loopCount,o=n===sS;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===rS){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=s,this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Fo,i.endingEnd=Fo):(e?i.endingStart=this.zeroSlopeAtStart?Fo:Uo:i.endingStart=eu,t?i.endingEnd=this.zeroSlopeAtEnd?Fo:Uo:i.endingEnd=eu)}_scheduleFading(e,t,n){let i=this._mixer,s=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}};u(Fb,"AnimationAction");var of=Fb,TR=new Float32Array(1),Bb=class Bb extends Xi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==s;++d){let f=i[d],m=f.name,g=h[m];if(g!==void 0)++g.referenceCount,o[d]=g;else{if(g=o[d],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,m));continue}let _=t&&t._propertyBindings[d].binding.parsedPath;g=new sf(vt.create(n,m,_),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,m),o[d]=g}a[d].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,s=this._actionsByClip,o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let d=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete d[f],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,s=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new bu(new Float32Array(2),new Float32Array(2),1,TR),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let i=t||this._root,s=i.uuid,o=typeof e=="string"?Xo.findByName(i,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=mp),l!==void 0){let d=l.actionByRoot[s];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new of(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(e,t){let n=t||this._root,i=n.uuid,s=typeof e=="string"?Xo.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){let o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(let o in s){let a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};u(Bb,"AnimationMixer");var Ko=Bb;var NM=new He,kb=class kb{constructor(e,t,n=0,i=1/0){this.ray=new Gs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new _l,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):We("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return NM.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(NM),this}intersectObject(e,t=!0,n=[]){return y0(e,this,n,t),n.sort(DM),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)y0(e[i],this,n,t);return n.sort(DM),n}};u(kb,"Raycaster");var Au=kb;function DM(r,e){return r.distance-e.distance}u(DM,"ascSort");function y0(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let s=r.children;for(let o=0,a=s.length;o<a;o++)y0(s[o],e,t,!0)}}u(y0,"intersect");var Af=class Af{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};u(Af,"Matrix2"),Af.prototype.isMatrix2=!0;var _0=Af;function eg(r,e,t,n){let i=RR(n);switch(t){case k0:return r*e;case Df:return r*e/i.components*i.byteLength;case Of:return r*e/i.components*i.byteLength;case vr:return r*e*2/i.components*i.byteLength;case Uf:return r*e*2/i.components*i.byteLength;case z0:return r*e*3/i.components*i.byteLength;case Kn:return r*e*4/i.components*i.byteLength;case Ff:return r*e*4/i.components*i.byteLength;case Cu:case Pu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Iu:case Lu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case kf:case Gf:return Math.max(r,16)*Math.max(e,8)/4;case Bf:case zf:return Math.max(r,8)*Math.max(e,8)/2;case Vf:case Hf:case Xf:case qf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Wf:case Nu:case Yf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case $f:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Kf:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Zf:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Jf:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case jf:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Qf:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ep:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case tp:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case np:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case ip:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case rp:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case sp:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case op:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case ap:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case lp:case cp:case up:return Math.ceil(r/4)*Math.ceil(e/4)*16;case hp:case dp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Du:case fp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}u(eg,"getByteLength");function RR(r){switch(r){case Rn:case O0:return{byteLength:1,components:1};case Nl:case U0:case oi:return{byteLength:2,components:1};case Lf:case Nf:return{byteLength:2,components:4};case Yi:case If:case si:return{byteLength:4,components:1};case F0:case B0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}u(RR,"getTextureTypeByteLength");typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function WS(){let r=null,e=!1,t=null,n=null;function i(s,o){n=r.requestAnimationFrame(i),t(s,o)}return u(i,"onAnimationFrame"),{start:u(function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},"start"),stop:u(function(){r!==null&&r.cancelAnimationFrame(n),e=!1},"stop"),setAnimationLoop:u(function(s){t=s},"setAnimationLoop"),setContext:u(function(s){r=s},"setContext")}}u(WS,"WebGLAnimation");function PR(r){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=r.HALF_FLOAT:m=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=r.SHORT;else if(c instanceof Uint32Array)m=r.UNSIGNED_INT;else if(c instanceof Int32Array)m=r.INT;else if(c instanceof Int8Array)m=r.BYTE;else if(c instanceof Uint8Array)m=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}u(t,"createBuffer");function n(a,l,c){let h=l.array,d=l.updateRanges;if(r.bindBuffer(c,a),d.length===0)r.bufferSubData(c,0,h);else{d.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<d.length;m++){let g=d[f],_=d[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let m=0,g=d.length;m<g;m++){let _=d[m];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}u(n,"updateBuffer");function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}u(i,"get");function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}u(s,"remove");function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return u(o,"update"),{get:i,remove:s,update:o}}u(PR,"WebGLAttributes");var IR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,LR=`#ifdef USE_ALPHAHASH
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
#endif`,NR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,DR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,UR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,FR=`#ifdef USE_AOMAP
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
#endif`,BR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kR=`#ifdef USE_BATCHING
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
#endif`,zR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,GR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,VR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,HR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,WR=`#ifdef USE_IRIDESCENCE
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
#endif`,XR=`#ifdef USE_BUMPMAP
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
#endif`,qR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,YR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$R=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,KR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ZR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,JR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,jR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,QR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,eC=`#define PI 3.141592653589793
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
} // validated`,tC=`vec3 transformedNormal = objectNormal;
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
#endif`,nC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oC="gl_FragColor = linearToOutputTexel( gl_FragColor );",aC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lC=`#ifdef USE_ENVMAP
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
#endif`,cC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,uC=`#ifdef USE_ENVMAP
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
#endif`,hC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dC=`#ifdef USE_ENVMAP
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
#endif`,fC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bC=`#ifdef USE_GRADIENTMAP
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
}`,xC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_C=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vC=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,MC=`#ifdef USE_ENVMAP
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
#endif`,SC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,EC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TC=`PhysicalMaterial material;
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
#endif`,RC=`uniform sampler2D dfgLUT;
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
}`,CC=`
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
#endif`,PC=`#if defined( RE_IndirectDiffuse )
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
#endif`,IC=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LC=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,NC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,FC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zC=`#if defined( USE_POINTS_UV )
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
#endif`,GC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,WC=`#if defined( USE_MORPHCOLORS )
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
#endif`,XC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qC=`#ifdef USE_MORPHTARGETS
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
#endif`,YC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$C=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,KC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ZC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,QC=`#ifdef USE_NORMALMAP
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
#endif`,e2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,t2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,n2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,i2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,r2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,o2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,a2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,l2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,c2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,u2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,h2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,d2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,f2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,p2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,m2=`float getShadowMask() {
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
}`,g2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,b2=`#ifdef USE_SKINNING
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
#endif`,x2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,y2=`#ifdef USE_SKINNING
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
#endif`,_2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,v2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,M2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,S2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,w2=`#ifdef USE_TRANSMISSION
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
#endif`,E2=`#ifdef USE_TRANSMISSION
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
#endif`,A2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,P2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,I2=`uniform sampler2D t2D;
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
}`,L2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N2=`uniform float backgroundBlurriness;
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
}`,D2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U2=`#include <common>
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
}`,F2=`#if DEPTH_PACKING == 3200
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
}`,B2=`#define DISTANCE
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
}`,k2=`#define DISTANCE
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
}`,z2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,G2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V2=`uniform float scale;
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
}`,H2=`uniform vec3 diffuse;
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
}`,W2=`#include <common>
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
}`,X2=`uniform vec3 diffuse;
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
}`,q2=`#define LAMBERT
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
}`,Y2=`#define LAMBERT
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
}`,$2=`#define MATCAP
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
}`,K2=`#define MATCAP
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
}`,Z2=`#define NORMAL
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
}`,J2=`#define NORMAL
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
}`,j2=`#define PHONG
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
}`,Q2=`#define PHONG
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
}`,eP=`#define STANDARD
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
}`,tP=`#define STANDARD
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
}`,nP=`#define TOON
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
}`,iP=`#define TOON
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
}`,rP=`uniform float size;
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
}`,sP=`uniform vec3 diffuse;
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
}`,oP=`#include <common>
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
}`,aP=`uniform vec3 color;
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
}`,lP=`uniform float rotation;
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
}`,cP=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:IR,alphahash_pars_fragment:LR,alphamap_fragment:NR,alphamap_pars_fragment:DR,alphatest_fragment:OR,alphatest_pars_fragment:UR,aomap_fragment:FR,aomap_pars_fragment:BR,batching_pars_vertex:kR,batching_vertex:zR,begin_vertex:GR,beginnormal_vertex:VR,bsdfs:HR,iridescence_fragment:WR,bumpmap_pars_fragment:XR,clipping_planes_fragment:qR,clipping_planes_pars_fragment:YR,clipping_planes_pars_vertex:$R,clipping_planes_vertex:KR,color_fragment:ZR,color_pars_fragment:JR,color_pars_vertex:jR,color_vertex:QR,common:eC,defaultnormal_vertex:tC,displacementmap_pars_vertex:nC,displacementmap_vertex:iC,emissivemap_fragment:rC,emissivemap_pars_fragment:sC,colorspace_fragment:oC,colorspace_pars_fragment:aC,envmap_fragment:lC,envmap_common_pars_fragment:cC,envmap_pars_fragment:uC,envmap_pars_vertex:hC,envmap_physical_pars_fragment:MC,envmap_vertex:dC,fog_vertex:fC,fog_pars_vertex:pC,fog_fragment:mC,fog_pars_fragment:gC,gradientmap_pars_fragment:bC,lightmap_pars_fragment:xC,lights_lambert_fragment:yC,lights_lambert_pars_fragment:_C,lights_pars_begin:vC,lights_toon_fragment:SC,lights_toon_pars_fragment:wC,lights_phong_fragment:EC,lights_phong_pars_fragment:AC,lights_physical_fragment:TC,lights_physical_pars_fragment:RC,lights_fragment_begin:CC,lights_fragment_maps:PC,lights_fragment_end:IC,lightprobes_pars_fragment:LC,logdepthbuf_fragment:NC,logdepthbuf_pars_fragment:DC,logdepthbuf_pars_vertex:OC,logdepthbuf_vertex:UC,map_fragment:FC,map_pars_fragment:BC,map_particle_fragment:kC,map_particle_pars_fragment:zC,metalnessmap_fragment:GC,metalnessmap_pars_fragment:VC,morphinstance_vertex:HC,morphcolor_vertex:WC,morphnormal_vertex:XC,morphtarget_pars_vertex:qC,morphtarget_vertex:YC,normal_fragment_begin:$C,normal_fragment_maps:KC,normal_pars_fragment:ZC,normal_pars_vertex:JC,normal_vertex:jC,normalmap_pars_fragment:QC,clearcoat_normal_fragment_begin:e2,clearcoat_normal_fragment_maps:t2,clearcoat_pars_fragment:n2,iridescence_pars_fragment:i2,opaque_fragment:r2,packing:s2,premultiplied_alpha_fragment:o2,project_vertex:a2,dithering_fragment:l2,dithering_pars_fragment:c2,roughnessmap_fragment:u2,roughnessmap_pars_fragment:h2,shadowmap_pars_fragment:d2,shadowmap_pars_vertex:f2,shadowmap_vertex:p2,shadowmask_pars_fragment:m2,skinbase_vertex:g2,skinning_pars_vertex:b2,skinning_vertex:x2,skinnormal_vertex:y2,specularmap_fragment:_2,specularmap_pars_fragment:v2,tonemapping_fragment:M2,tonemapping_pars_fragment:S2,transmission_fragment:w2,transmission_pars_fragment:E2,uv_pars_fragment:A2,uv_pars_vertex:T2,uv_vertex:R2,worldpos_vertex:C2,background_vert:P2,background_frag:I2,backgroundCube_vert:L2,backgroundCube_frag:N2,cube_vert:D2,cube_frag:O2,depth_vert:U2,depth_frag:F2,distance_vert:B2,distance_frag:k2,equirect_vert:z2,equirect_frag:G2,linedashed_vert:V2,linedashed_frag:H2,meshbasic_vert:W2,meshbasic_frag:X2,meshlambert_vert:q2,meshlambert_frag:Y2,meshmatcap_vert:$2,meshmatcap_frag:K2,meshnormal_vert:Z2,meshnormal_frag:J2,meshphong_vert:j2,meshphong_frag:Q2,meshphysical_vert:eP,meshphysical_frag:tP,meshtoon_vert:nP,meshtoon_frag:iP,points_vert:rP,points_frag:sP,shadow_vert:oP,shadow_frag:aP,sprite_vert:lP,sprite_frag:cP},Ae={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},wr={basic:{uniforms:Cn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Cn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Se(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Cn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Cn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Cn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Se(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Cn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Cn([Ae.points,Ae.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Cn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Cn([Ae.common,Ae.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Cn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Cn([Ae.sprite,Ae.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:Cn([Ae.common,Ae.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:Cn([Ae.lights,Ae.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};wr.physical={uniforms:Cn([wr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Xe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};var yp={r:0,b:0,g:0},uP=new He,XS=new Xe;XS.set(-1,0,0,0,1,0,0,0,1);function hP(r,e,t,n,i,s){let o=new Se(0),a=i===!0?0:1,l,c,h=null,d=0,f=null;function m(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){let M=v.backgroundBlurriness>0;S=e.get(S,M)}return S}u(m,"getBackground");function g(v){let S=!1,M=m(v);M===null?b(o,a):M&&M.isColor&&(b(M,1),S=!0);let R=r.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}u(g,"render");function _(v,S){let M=m(S);M&&M.isCubeTexture?(c===void 0&&(c=new $e(new gr(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:ta(wr.backgroundCube.uniforms),vertexShader:wr.backgroundCube.vertexShader,fragmentShader:wr.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,E,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:u(function(){return this.uniforms.envMap.value},"get")}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(uP.makeRotationFromEuler(S.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(XS),c.material.toneMapped=ct.getTransfer(M.colorSpace)!==wt,(h!==M||d!==M.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,f=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new $e(new br(2,2),new kn({name:"BackgroundMaterial",uniforms:ta(wr.background.uniforms),vertexShader:wr.background.vertexShader,fragmentShader:wr.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:u(function(){return this.uniforms.t2D.value},"get")}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ct.getTransfer(M.colorSpace)!==wt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,f=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}u(_,"addToRenderList");function b(v,S){v.getRGB(yp,J0(r)),t.buffers.color.setClear(yp.r,yp.g,yp.b,S,s)}u(b,"setClear");function x(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return u(x,"dispose"),{getClearColor:u(function(){return o},"getClearColor"),setClearColor:u(function(v,S=1){o.set(v),a=S,b(o,a)},"setClearColor"),getClearAlpha:u(function(){return a},"getClearAlpha"),setClearAlpha:u(function(v){a=v,b(o,a)},"setClearAlpha"),render:g,addToRenderList:_,dispose:x}}u(hP,"WebGLBackground");function dP(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null),s=i,o=!1;function a(O,B,$,F,j){let ce=!1,G=d(O,F,$,B);s!==G&&(s=G,c(s.object)),ce=m(O,F,$,j),ce&&g(O,F,$,j),j!==null&&e.update(j,r.ELEMENT_ARRAY_BUFFER),(ce||o)&&(o=!1,M(O,B,$,F),j!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}u(a,"setup");function l(){return r.createVertexArray()}u(l,"createVertexArrayObject");function c(O){return r.bindVertexArray(O)}u(c,"bindVertexArrayObject");function h(O){return r.deleteVertexArray(O)}u(h,"deleteVertexArrayObject");function d(O,B,$,F){let j=F.wireframe===!0,ce=n[B.id];ce===void 0&&(ce={},n[B.id]=ce);let G=O.isInstancedMesh===!0?O.id:0,ee=ce[G];ee===void 0&&(ee={},ce[G]=ee);let Z=ee[$.id];Z===void 0&&(Z={},ee[$.id]=Z);let ne=Z[j];return ne===void 0&&(ne=f(l()),Z[j]=ne),ne}u(d,"getBindingState");function f(O){let B=[],$=[],F=[];for(let j=0;j<t;j++)B[j]=0,$[j]=0,F[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:$,attributeDivisors:F,object:O,attributes:{},index:null}}u(f,"createBindingState");function m(O,B,$,F){let j=s.attributes,ce=B.attributes,G=0,ee=$.getAttributes();for(let Z in ee)if(ee[Z].location>=0){let ae=j[Z],pe=ce[Z];if(pe===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(pe=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(pe=O.instanceColor)),ae===void 0||ae.attribute!==pe||pe&&ae.data!==pe.data)return!0;G++}return s.attributesNum!==G||s.index!==F}u(m,"needsUpdate");function g(O,B,$,F){let j={},ce=B.attributes,G=0,ee=$.getAttributes();for(let Z in ee)if(ee[Z].location>=0){let ae=ce[Z];ae===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(ae=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(ae=O.instanceColor));let pe={};pe.attribute=ae,ae&&ae.data&&(pe.data=ae.data),j[Z]=pe,G++}s.attributes=j,s.attributesNum=G,s.index=F}u(g,"saveCache");function _(){let O=s.newAttributes;for(let B=0,$=O.length;B<$;B++)O[B]=0}u(_,"initAttributes");function b(O){x(O,0)}u(b,"enableAttribute");function x(O,B){let $=s.newAttributes,F=s.enabledAttributes,j=s.attributeDivisors;$[O]=1,F[O]===0&&(r.enableVertexAttribArray(O),F[O]=1),j[O]!==B&&(r.vertexAttribDivisor(O,B),j[O]=B)}u(x,"enableAttributeAndDivisor");function v(){let O=s.newAttributes,B=s.enabledAttributes;for(let $=0,F=B.length;$<F;$++)B[$]!==O[$]&&(r.disableVertexAttribArray($),B[$]=0)}u(v,"disableUnusedAttributes");function S(O,B,$,F,j,ce,G){G===!0?r.vertexAttribIPointer(O,B,$,j,ce):r.vertexAttribPointer(O,B,$,F,j,ce)}u(S,"vertexAttribPointer");function M(O,B,$,F){_();let j=F.attributes,ce=$.getAttributes(),G=B.defaultAttributeValues;for(let ee in ce){let Z=ce[ee];if(Z.location>=0){let ne=j[ee];if(ne===void 0&&(ee==="instanceMatrix"&&O.instanceMatrix&&(ne=O.instanceMatrix),ee==="instanceColor"&&O.instanceColor&&(ne=O.instanceColor)),ne!==void 0){let ae=ne.normalized,pe=ne.itemSize,ye=e.get(ne);if(ye===void 0)continue;let oe=ye.buffer,de=ye.type,ue=ye.bytesPerElement,fe=de===r.INT||de===r.UNSIGNED_INT||ne.gpuType===If;if(ne.isInterleavedBufferAttribute){let he=ne.data,Ie=he.isInterleavedBuffer===!0?he.stride:he.itemSize,qe=ne.offset;if(he.isInstancedInterleavedBuffer||he.isInstancedBufferAttribute){for(let Re=0;Re<Z.locationSize;Re++)x(Z.location+Re,he.meshPerAttribute);O.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Re=0;Re<Z.locationSize;Re++)b(Z.location+Re);r.bindBuffer(r.ARRAY_BUFFER,oe);for(let Re=0;Re<Z.locationSize;Re++)S(Z.location+Re,pe/Z.locationSize,de,ae,Ie*ue,(qe+pe/Z.locationSize*Re)*ue,fe)}else{if(ne.isInstancedBufferAttribute){for(let he=0;he<Z.locationSize;he++)x(Z.location+he,ne.meshPerAttribute);O.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let he=0;he<Z.locationSize;he++)b(Z.location+he);r.bindBuffer(r.ARRAY_BUFFER,oe);for(let he=0;he<Z.locationSize;he++)S(Z.location+he,pe/Z.locationSize,de,ae,pe*ue,pe/Z.locationSize*he*ue,fe)}}else if(G!==void 0){let ae=G[ee];if(ae!==void 0)switch(ae.length){case 2:r.vertexAttrib2fv(Z.location,ae);break;case 3:r.vertexAttrib3fv(Z.location,ae);break;case 4:r.vertexAttrib4fv(Z.location,ae);break;default:r.vertexAttrib1fv(Z.location,ae)}}}}v()}u(M,"setupVertexAttributes");function R(){L();for(let O in n){let B=n[O];for(let $ in B){let F=B[$];for(let j in F){let ce=F[j];for(let G in ce)h(ce[G].object),delete ce[G];delete F[j]}}delete n[O]}}u(R,"dispose");function E(O){if(n[O.id]===void 0)return;let B=n[O.id];for(let $ in B){let F=B[$];for(let j in F){let ce=F[j];for(let G in ce)h(ce[G].object),delete ce[G];delete F[j]}}delete n[O.id]}u(E,"releaseStatesOfGeometry");function y(O){for(let B in n){let $=n[B];for(let F in $){let j=$[F];if(j[O.id]===void 0)continue;let ce=j[O.id];for(let G in ce)h(ce[G].object),delete ce[G];delete j[O.id]}}}u(y,"releaseStatesOfProgram");function w(O){for(let B in n){let $=n[B],F=O.isInstancedMesh===!0?O.id:0,j=$[F];if(j!==void 0){for(let ce in j){let G=j[ce];for(let ee in G)h(G[ee].object),delete G[ee];delete j[ce]}delete $[F],Object.keys($).length===0&&delete n[B]}}}u(w,"releaseStatesOfObject");function L(){I(),o=!0,s!==i&&(s=i,c(s.object))}u(L,"reset");function I(){i.geometry=null,i.program=null,i.wireframe=!1}return u(I,"resetDefaultState"),{setup:a,reset:L,resetDefaultState:I,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfObject:w,releaseStatesOfProgram:y,initAttributes:_,enableAttribute:b,disableUnusedAttributes:v}}u(dP,"WebGLBindingStates");function fP(r,e,t){let n;function i(l){n=l}u(i,"setMode");function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}u(s,"render");function o(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}u(o,"renderInstances");function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let m=0;m<h;m++)f+=c[m];t.update(f,n,1)}u(a,"renderMultiDraw"),this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}u(fP,"WebGLBufferRenderer");function pP(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let y=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}u(s,"getMaxAnisotropy");function o(y){return!(y!==Kn&&n.convert(y)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}u(o,"textureFormatReadable");function a(y){let w=y===oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==Rn&&y!==si&&!w&&n.convert(y)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}u(a,"textureTypeReadable");function l(y){if(y==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}u(l,"getMaxPrecision");let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(ke("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&ke("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),b=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:b,maxAttributes:x,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:M,maxSamples:R,samples:E}}u(pP,"WebGLCapabilities");function mP(r){let e=this,t=null,n=0,i=!1,s=!1,o=new Wn,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let m=d.length!==0||f||n!==0||i;return i=f,n=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,m){let g=d.clippingPlanes,_=d.clipIntersection,b=d.clipShadows,x=r.get(d);if(!i||g===null||g.length===0||s&&!b)s?h(null):c();else{let v=s?0:n,S=v*4,M=x.clippingState||null;l.value=M,M=h(g,f,S,m);for(let R=0;R!==S;++R)M[R]=t[R];x.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}u(c,"resetGlobalState");function h(d,f,m,g){let _=d!==null?d.length:0,b=null;if(_!==0){if(b=l.value,g!==!0||b===null){let x=m+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(b===null||b.length<x)&&(b=new Float32Array(x));for(let S=0,M=m;S!==_;++S,M+=4)o.copy(d[S]).applyMatrix4(v,a),o.normal.toArray(b,M),b[M+3]=o.constant}l.value=b,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,b}u(h,"projectPlanes")}u(mP,"WebGLClipping");var Zb=class Zb extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new fu(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new gr(5,5,5),s=new kn({name:"CubemapFromEquirect",uniforms:ta(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gn,blending:Zo});s.uniforms.tEquirect.value=t;let o=new $e(i,s),a=t.minFilter;return t.minFilter===Tn&&(t.minFilter=Gt),new Rl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}};u(Zb,"WebGLCubeRenderTarget");var Bu=Zb,SS=256,gP=3,bP=20,qS=256,YS=16,xP=3,yP=new X,_P=new Se,Sp=class Sp{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Rl(1,10,null),this._boxMesh=new $e(new gr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:o=256,position:a=yP}=s,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,f=l.autoClearColor,m=l.autoClearDepth,g=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(_P));let b=new Rl(n,i,h);return b.position.copy(a),b.update(l,e),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=m,l.autoClearStencil=g,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=AS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ES(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(SS,$0(e))}_fromTexture(e,t){e.mapping===jo||e.mapping===Il?this._setSize(e.image.length===0?SS:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=wS(e,!1,!1),n=Math.log2(e)-gP;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=wS(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=e,s.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),s.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===jo||e.mapping===Il?(this._cubemapMaterial===null&&(this._cubemapMaterial=AS()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ES()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=vP(),this._integrationMaterial=MP());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/YS);for(let o=0;o<=n;o++){let a=Sp.lodToRoughness(o,n);if(o>n-xP)s.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(qS*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=SP());let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(s,0,n)}};u(Sp,"PMREMGenerator");var vp=Sp;function wS(r,e,t){return new Bu(r,{minFilter:Tn,generateMipmaps:e,type:oi,colorSpace:Un,depthBuffer:t})}u(wS,"_createRenderTarget");function ku(r,e,t){return new kn({name:r,uniforms:e,vertexShader:at.cube_vert,fragmentShader:t,side:Gn,blending:Zo,depthTest:!1,depthWrite:!1})}u(ku,"_getMaterial");function vP(){return ku("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${qS}u

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
	`)}u(vP,"_getGGXMaterial");function MP(){return ku("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:YS}},`

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
	`)}u(MP,"_getIntegrationMaterial");function SP(){return ku("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${bP}
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
	`)}u(SP,"_getBlurMaterial");function ES(){return ku("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}u(ES,"_getEquirectMaterial");function AS(){return ku("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}u(AS,"_getCubemapMaterial");function wP(r){let e=new WeakMap,t=new WeakMap,n=null;function i(f,m=!1){return f==null?null:m?o(f):s(f)}u(i,"get");function s(f){if(f&&f.isTexture){let m=f.mapping;if(m===Rf||m===Cf)if(e.has(f)){let g=e.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let _=new Bu(g.height);return _.fromEquirectangularTexture(r,f),e.set(f,_),f.addEventListener("dispose",c),a(_.texture,f.mapping)}else return null}}return f}u(s,"getCube");function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let m=f.mapping,g=m===Rf||m===Cf,_=m===jo||m===Il;if(g||_){let b=t.get(f),x=b!==void 0?b.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return n===null&&(n=new vp(r)),b=g?n.fromEquirectangular(f,b):n.fromCubemap(f,b),b.texture.pmremVersion=f.pmremVersion,t.set(f,b),b.texture;if(b!==void 0)return b.texture;{let v=f.image;return g&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new vp(r)),b=g?n.fromEquirectangular(f):n.fromCubemap(f),b.texture.pmremVersion=f.pmremVersion,t.set(f,b),f.addEventListener("dispose",h),b.texture):null}}}return f}u(o,"getPMREM");function a(f,m){return m===Rf?f.mapping=jo:m===Cf&&(f.mapping=Il),f}u(a,"mapTextureMapping");function l(f){let m=0,g=6;for(let _=0;_<g;_++)f[_]!==void 0&&m++;return m===g}u(l,"isCubeTextureComplete");function c(f){let m=f.target;m.removeEventListener("dispose",c);let g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}u(c,"onCubemapDispose");function h(f){let m=f.target;m.removeEventListener("dispose",h);let g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}u(h,"onPMREMDispose");function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return u(d,"dispose"),{get:i,dispose:d}}u(wP,"WebGLEnvironments");function EP(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=r.getExtension(n);return e[n]=i,i}return u(t,"getExtension"),{has:u(function(n){return t(n)!==null},"has"),init:u(function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},"init"),get:u(function(n){let i=t(n);return i===null&&Bo("WebGLRenderer: "+n+" extension not supported."),i},"get")}}u(EP,"WebGLExtensions");function AP(r,e,t,n){let i={},s=new WeakMap,o=new FinalizationRegistry(g=>delete i[g]);function a(g){l(g.target)}u(a,"onGeometryDispose");function l(g){g.index!==null&&e.remove(g.index);for(let b in g.attributes)e.remove(g.attributes[b]);g.removeEventListener("dispose",a),delete i[g.id],o.unregister(g);let _=s.get(g);_&&(e.remove(_),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}u(l,"destroyGeometry");function c(g,_){return i[_.id]!==void 0||(_.addEventListener("dispose",a),i[_.id]=new WeakRef(_),o.register(_,_.id,_),t.memory.geometries++),_}u(c,"get");function h(g){let _=g.attributes;for(let b in _)e.update(_[b],r.ARRAY_BUFFER)}u(h,"update");function d(g){let _=g.index,b=g.attributes.position,x=0;if(b===void 0)return;let v=_!==null?_.array.length:b.array.length/3-1,S=b.count>=65535?ou:su,M=new S(Math.ceil(v/3)*6,1),R=M.array;if(_!==null){let y=_.array;x=_.version;for(let w=0,L=0;w<v;w+=3){let I=y[w+0],O=y[w+1],B=y[w+2];R[L++]=I,R[L++]=O,R[L++]=O,R[L++]=B,R[L++]=B,R[L++]=I}}else{x=b.version;for(let y=0,w=0;y<v;y+=3){let L=y+0,I=y+1,O=y+2;R[w++]=L,R[w++]=I,R[w++]=I,R[w++]=O,R[w++]=O,R[w++]=L}}M.version=x;let E=s.get(g);E&&e.remove(E),s.set(g,M)}u(d,"updateWireframeAttribute");function f(g){let _=s.get(g);if(_){let b=g.index;b!==null&&_.version<b.version&&d(g)}else d(g);return s.get(g)}u(f,"getWireframeAttribute");function m(){for(let g in i){let _=i[g].deref();_!==void 0&&l(_)}}return u(m,"dispose"),{get:c,update:h,getWireframeAttribute:f,dispose:m}}u(AP,"WebGLGeometries");function TP(r,e,t){let n;function i(d){n=d}u(i,"setMode");let s,o;function a(d){s=d.type,o=d.bytesPerElement}u(a,"setIndex");function l(d,f){r.drawElements(n,f,s,d*o),t.update(f,n,1)}u(l,"render");function c(d,f,m){m!==0&&(r.drawElementsInstanced(n,f,s,d*o,m),t.update(f,n,m))}u(c,"renderInstances");function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,m);let _=0;for(let b=0;b<m;b++)_+=f[b];t.update(_,n,1)}u(h,"renderMultiDraw"),this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}u(TP,"WebGLIndexedBufferRenderer");function RP(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:We("WebGLInfo: Unknown draw mode:",o);break}}u(n,"update");function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return u(i,"reset"),{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}u(RP,"WebGLInfo");function CP(r,e,t){let n=new WeakMap,i=new Tt;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==d){let I=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",I)};var m=I;u(I,"disposeTexture"),f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],M=0;g===!0&&(M=1),_===!0&&(M=2),b===!0&&(M=3);let R=a.attributes.position.count*M,E=1;R>e.maxTextureSize&&(E=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);let y=new Float32Array(R*E*4*d),w=new Vo(y,R,E,d);w.type=si,w.needsUpdate=!0;let L=M*4;for(let O=0;O<d;O++){let B=x[O],$=v[O],F=S[O],j=R*E*4*O;for(let ce=0;ce<B.count;ce++){let G=ce*L;g===!0&&(i.fromBufferAttribute(B,ce),y[j+G+0]=i.x,y[j+G+1]=i.y,y[j+G+2]=i.z,y[j+G+3]=0),_===!0&&(i.fromBufferAttribute($,ce),y[j+G+4]=i.x,y[j+G+5]=i.y,y[j+G+6]=i.z,y[j+G+7]=0),b===!0&&(i.fromBufferAttribute(F,ce),y[j+G+8]=i.x,y[j+G+9]=i.y,y[j+G+10]=i.z,y[j+G+11]=F.itemSize===4?i.w:1)}}f={count:d,texture:w,size:new Fe(R,E)},n.set(a,f),a.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let b=0;b<c.length;b++)g+=c[b];let _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return u(s,"update"),{update:s}}u(CP,"WebGLMorphtargets");function PP(r,e,t,n,i){let s=new WeakMap;function o(c){let h=i.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let m=c.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return f}u(o,"update");function a(){s=new WeakMap}u(a,"dispose");function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return u(l,"onInstancedMeshDispose"),{update:o,dispose:a}}u(PP,"WebGLObjects");var IP={[R0]:"LINEAR_TONE_MAPPING",[C0]:"REINHARD_TONE_MAPPING",[P0]:"CINEON_TONE_MAPPING",[Ru]:"ACES_FILMIC_TONE_MAPPING",[L0]:"AGX_TONE_MAPPING",[N0]:"NEUTRAL_TONE_MAPPING",[I0]:"CUSTOM_TONE_MAPPING"};function LP(r,e,t,n,i,s){let o=new ii(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Mt;h.setAttribute("position",new Et([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Et([0,2,0,0,2,0],2));let d=new Kd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new $e(h,d),m=new Yo(-1,1,1,-1,0,1),g=null,_=null,b=!1,x,v=null,S=[],M=!1;this.setSize=function(R,E){o.setSize(R,E),a!==null&&a.setSize(R,E),l!==null&&l.setSize(R,E);for(let y=0;y<S.length;y++){let w=S[y];w.setSize&&w.setSize(R,E)}},this.setEffects=function(R){S=R,M=S.length>0&&S[0].isRenderPass===!0;let E=o.width,y=o.height;S.length>0&&a===null&&(a=new ii(E,y,{type:oi,depthBuffer:!1,stencilBuffer:!1}),l=new ii(E,y,{type:oi,depthBuffer:!1,stencilBuffer:!1}));let w=i===!0&&S.some(L=>L.needsDepthTexture===!0);w!==(o.depthTexture!==null)&&(w===!0&&c===null&&(c=new ss(E,y),s===!0&&(c.format=ds,c.type=ea)),o.dispose(),o.depthTexture=w?c:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w);for(let L=0;L<S.length;L++){let I=S[L];I.setSize&&I.setSize(E,y),w&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(c)}},this.begin=function(R,E){if(b||R.toneMapping===_r&&S.length===0)return!1;if(v=E,E!==null){let y=E.width,w=E.height;(o.width!==y||o.height!==w)&&this.setSize(y,w)}return M===!1&&R.setRenderTarget(o),x=R.toneMapping,R.toneMapping=_r,!0},this.hasRenderPass=function(){return M},this.end=function(R,E){R.toneMapping=x,b=!0;let y=o,w=a;for(let L=0;L<S.length;L++){let I=S[L];I.enabled!==!1&&(I.render(R,w,y,E),I.needsSwap!==!1&&(y=w,w=w===a?l:a))}if(g!==R.outputColorSpace||_!==R.toneMapping){g=R.outputColorSpace,_=R.toneMapping,d.defines={},ct.getTransfer(g)===wt&&(d.defines.SRGB_TRANSFER="");let L=IP[_];L&&(d.defines[L]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=y.texture,R.setRenderTarget(v),R.render(f,m),v=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}u(LP,"WebGLOutput");var $S=new on,KS=new ss(1,1),ZS=new pu(1),JS=new Vo,jS=new Wd,QS=new fu,TS=[],RS=[],CS=new Float32Array(16),PS=new Float32Array(9),IS=new Float32Array(4);function Ul(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=TS[i];if(s===void 0&&(s=new Float32Array(i),TS[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}u(Ul,"flatten");function an(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}u(an,"arraysEqual");function ln(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}u(ln,"copyArray");function wp(r,e){let t=RS[e];t===void 0&&(t=new Int32Array(e),RS[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}u(wp,"allocTexUnits");function NP(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}u(NP,"setValueV1f");function DP(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2fv(this.addr,e),ln(t,e)}}u(DP,"setValueV2f");function OP(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;r.uniform3fv(this.addr,e),ln(t,e)}}u(OP,"setValueV3f");function UP(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4fv(this.addr,e),ln(t,e)}}u(UP,"setValueV4f");function FP(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;IS.set(n),r.uniformMatrix2fv(this.addr,!1,IS),ln(t,n)}}u(FP,"setValueM2");function BP(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;PS.set(n),r.uniformMatrix3fv(this.addr,!1,PS),ln(t,n)}}u(BP,"setValueM3");function kP(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;CS.set(n),r.uniformMatrix4fv(this.addr,!1,CS),ln(t,n)}}u(kP,"setValueM4");function zP(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}u(zP,"setValueV1i");function GP(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2iv(this.addr,e),ln(t,e)}}u(GP,"setValueV2i");function VP(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;r.uniform3iv(this.addr,e),ln(t,e)}}u(VP,"setValueV3i");function HP(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4iv(this.addr,e),ln(t,e)}}u(HP,"setValueV4i");function WP(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}u(WP,"setValueV1ui");function XP(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2uiv(this.addr,e),ln(t,e)}}u(XP,"setValueV2ui");function qP(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;r.uniform3uiv(this.addr,e),ln(t,e)}}u(qP,"setValueV3ui");function YP(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4uiv(this.addr,e),ln(t,e)}}u(YP,"setValueV4ui");function Ep(r){return r.version===0&&(r.compareFunction=W0,r.needsUpdate=!0),r}u(Ep,"initShadowTexture");function $P(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?s=Ep(KS):s=$S,t.setTexture2D(e||s,i)}u($P,"setValueT1");function KP(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||jS,i)}u(KP,"setValueT3D1");function ZP(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=Ep(ZS):s=QS,t.setTextureCube(e||s,i)}u(ZP,"setValueT6");function JP(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||JS,i)}u(JP,"setValueT2DArray1");function jP(r){switch(r){case 5126:return NP;case 35664:return DP;case 35665:return OP;case 35666:return UP;case 35674:return FP;case 35675:return BP;case 35676:return kP;case 5124:case 35670:return zP;case 35667:case 35671:return GP;case 35668:case 35672:return VP;case 35669:case 35673:return HP;case 5125:return WP;case 36294:return XP;case 36295:return qP;case 36296:return YP;case 35678:case 36198:case 36298:case 36306:case 35682:return $P;case 35679:case 36299:case 36307:return KP;case 35680:case 36300:case 36308:case 36293:return ZP;case 36289:case 36303:case 36311:case 36292:return JP}}u(jP,"getSingularSetter");function QP(r,e){r.uniform1fv(this.addr,e)}u(QP,"setValueV1fArray");function eI(r,e){let t=Ul(e,this.size,2);r.uniform2fv(this.addr,t)}u(eI,"setValueV2fArray");function tI(r,e){let t=Ul(e,this.size,3);r.uniform3fv(this.addr,t)}u(tI,"setValueV3fArray");function nI(r,e){let t=Ul(e,this.size,4);r.uniform4fv(this.addr,t)}u(nI,"setValueV4fArray");function iI(r,e){let t=Ul(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}u(iI,"setValueM2Array");function rI(r,e){let t=Ul(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}u(rI,"setValueM3Array");function sI(r,e){let t=Ul(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}u(sI,"setValueM4Array");function oI(r,e){r.uniform1iv(this.addr,e)}u(oI,"setValueV1iArray");function aI(r,e){r.uniform2iv(this.addr,e)}u(aI,"setValueV2iArray");function lI(r,e){r.uniform3iv(this.addr,e)}u(lI,"setValueV3iArray");function cI(r,e){r.uniform4iv(this.addr,e)}u(cI,"setValueV4iArray");function uI(r,e){r.uniform1uiv(this.addr,e)}u(uI,"setValueV1uiArray");function hI(r,e){r.uniform2uiv(this.addr,e)}u(hI,"setValueV2uiArray");function dI(r,e){r.uniform3uiv(this.addr,e)}u(dI,"setValueV3uiArray");function fI(r,e){r.uniform4uiv(this.addr,e)}u(fI,"setValueV4uiArray");function pI(r,e,t){let n=this.cache,i=e.length,s=wp(t,i);an(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=Ep(KS):o=$S;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,s[a])}u(pI,"setValueT1Array");function mI(r,e,t){let n=this.cache,i=e.length,s=wp(t,i);an(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||jS,s[o])}u(mI,"setValueT3DArray");function gI(r,e,t){let n=this.cache,i=e.length,s=wp(t,i);an(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));let o;this.type===r.SAMPLER_CUBE_SHADOW?o=Ep(ZS):o=QS;for(let a=0;a!==i;++a)t.setTextureCube(e[a]||o,s[a])}u(gI,"setValueT6Array");function bI(r,e,t){let n=this.cache,i=e.length,s=wp(t,i);an(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||JS,s[o])}u(bI,"setValueT2DArrayArray");function xI(r){switch(r){case 5126:return QP;case 35664:return eI;case 35665:return tI;case 35666:return nI;case 35674:return iI;case 35675:return rI;case 35676:return sI;case 5124:case 35670:return oI;case 35667:case 35671:return aI;case 35668:case 35672:return lI;case 35669:case 35673:return cI;case 5125:return uI;case 36294:return hI;case 36295:return dI;case 36296:return fI;case 35678:case 36198:case 36298:case 36306:case 35682:return pI;case 35679:case 36299:case 36307:return mI;case 35680:case 36300:case 36308:case 36293:return gI;case 36289:case 36303:case 36311:case 36292:return bI}}u(xI,"getPureArraySetter");var Jb=class Jb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=jP(t.type)}};u(Jb,"SingleUniform");var Vb=Jb,jb=class jb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xI(t.type)}};u(jb,"PureArrayUniform");var Hb=jb,Qb=class Qb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(e,t[a.id],n)}}};u(Qb,"StructuredUniform");var Wb=Qb,zb=/(\w+)(\])?(\[|\.)?/g;function LS(r,e){r.seq.push(e),r.map[e.id]=e}u(LS,"addUniform");function yI(r,e,t){let n=r.name,i=n.length;for(zb.lastIndex=0;;){let s=zb.exec(n),o=zb.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){LS(t,c===void 0?new Vb(a,r,e):new Hb(a,r,e));break}else{let d=t.map[a];d===void 0&&(d=new Wb(a),LS(t,d)),t=d}}}u(yI,"parseUniform");var ex=class ex{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);yI(a,l,this)}let i=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let o=e[i];o.id in t&&n.push(o)}return n}};u(ex,"WebGLUniforms");var Ol=ex;function NS(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}u(NS,"WebGLShader");var _I=37297,vI=0;function MI(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}u(MI,"handleSource");var DS=new Xe;function SI(r){ct._getMatrix(DS,ct.workingColorSpace,r);let e=`mat3( ${DS.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(r)){case tu:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}u(SI,"getEncodingComponents");function OS(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+MI(r.getShaderSource(e),a)}else return s}u(OS,"getShaderErrors");function wI(r,e){let t=SI(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}u(wI,"getTexelEncodingFunction");var EI={[R0]:"Linear",[C0]:"Reinhard",[P0]:"Cineon",[Ru]:"ACESFilmic",[L0]:"AgX",[N0]:"Neutral",[I0]:"Custom"};function AI(r,e){let t=EI[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}u(AI,"getToneMappingFunction");var _p=new X;function TI(){ct.getLuminanceCoefficients(_p);let r=_p.x.toFixed(4),e=_p.y.toFixed(4),t=_p.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}u(TI,"getLuminanceFunction");function RI(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fu).join(`
`)}u(RI,"generateVertexExtensions");function CI(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}u(CI,"generateDefines");function PI(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}u(PI,"fetchAttributeLocations");function Fu(r){return r!==""}u(Fu,"filterEmptyLine");function US(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}u(US,"replaceLightNums");function FS(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}u(FS,"replaceClippingPlaneNums");var II=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xb(r){return r.replace(II,LI)}u(Xb,"resolveIncludes");function LI(r,e){let t=at[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Xb(t)}u(LI,"includeReplacer");var NI=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function BS(r){return r.replace(NI,DI)}u(BS,"unrollLoops");function DI(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}u(DI,"loopReplacer");function kS(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}u(kS,"generatePrecision");var OI={[Tu]:"SHADOWMAP_TYPE_PCF",[Cl]:"SHADOWMAP_TYPE_VSM"};function UI(r){return OI[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}u(UI,"generateShadowMapTypeDefine");var FI={[Il]:"ENVMAP_MODE_REFRACTION"};function BI(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":FI[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}u(BI,"generateEnvMapModeDefine");var kI={[T0]:"ENVMAP_BLENDING_MULTIPLY",[tS]:"ENVMAP_BLENDING_MIX",[nS]:"ENVMAP_BLENDING_ADD"};function zI(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":kI[r.combine]||"ENVMAP_BLENDING_NONE"}u(zI,"generateEnvMapBlendingDefine");function GI(r,e,t,n){let i=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=UI(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=BI(t),d=zI(t),f=RI(t),m=CI(s),g=i.createProgram(),_,b,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Fu).join(`
`),_.length>0&&(_+=`
`),b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Fu).join(`
`),b.length>0&&(b+=`
`)):(_=[kS(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fu).join(`
`),b=[kS(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_r?"#define TONE_MAPPING":"",t.toneMapping!==_r?at.tonemapping_pars_fragment:"",t.toneMapping!==_r?AI("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,wI("linearToOutputTexel",t.outputColorSpace),TI(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fu).join(`
`)),o=Xb(o),o=US(o,t),o=FS(o,t),a=Xb(a),a=US(a,t),a=FS(a,t),o=BS(o),a=BS(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,b=["#define varying in",t.glslVersion===q0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===q0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);let v=x+_+o,S=x+b+a,M=NS(i,i.VERTEX_SHADER,v),R=NS(i,i.FRAGMENT_SHADER,S);i.attachShader(g,M),i.attachShader(g,R),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function E(I){if(r.debug.checkShaderErrors){let O=i.getProgramInfoLog(g)||"",B=i.getShaderInfoLog(M)||"",$=i.getShaderInfoLog(R)||"",F=O.trim(),j=B.trim(),ce=$.trim(),G=!0,ee=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,M,R);else{let Z=OS(i,M,"vertex"),ne=OS(i,R,"fragment");We("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+F+`
`+Z+`
`+ne)}else F!==""?ke("WebGLProgram: Program Info Log:",F):(j===""||ce==="")&&(ee=!1);ee&&(I.diagnostics={runnable:G,programLog:F,vertexShader:{log:j,prefix:_},fragmentShader:{log:ce,prefix:b}})}i.deleteShader(M),i.deleteShader(R),y=new Ol(i,g),w=PI(i,g)}u(E,"onFirstUse");let y;this.getUniforms=function(){return y===void 0&&E(this),y};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=i.getProgramParameter(g,_I)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vI++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=R,this}u(GI,"WebGLProgram");var VI=0,tx=class tx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Yb(e),t.set(e,n)),n}};u(tx,"WebGLShaderCache");var qb=tx,nx=class nx{constructor(e){this.id=VI++,this.code=e,this.usedTimes=0}};u(nx,"WebGLShaderStage");var Yb=nx;function HI(r){return r===vr||r===Nu||r===Du}u(HI,"isPackedRGFormat");function WI(r,e,t,n,i,s){let o=new _l,a=new qb,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}u(m,"getChannel");function g(y,w,L,I,O,B){let $=I.fog,F=O.geometry,j=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,ce=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,G=e.get(y.envMap||j,ce),ee=f[y.type],Z=n.precision;y.precision!==null&&(Z=n.getMaxPrecision(y.precision),Z!==y.precision&&ke("WebGLProgram.getParameters:",y.precision,"not supported, using",Z,"instead."));let ne=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ae=ne!==void 0?ne.length:0,pe=0;F.morphAttributes.position!==void 0&&(pe=1),F.morphAttributes.normal!==void 0&&(pe=2),F.morphAttributes.color!==void 0&&(pe=3);let ye,oe,de,ue;if(ee){let ge=wr[ee];ye=ge.vertexShader,oe=ge.fragmentShader}else{ye=y.vertexShader,oe=y.fragmentShader;let ge=a.getVertexShaderStage(y),nt=a.getFragmentShaderStage(y);a.update(y,ge,nt),de=ge.id,ue=nt.id}let fe=r.getRenderTarget(),he=r.state.buffers.depth.getReversed(),Ie=O.isInstancedMesh===!0,qe=O.isBatchedMesh===!0,Re=!!y.map,st=!!y.matcap,ot=!!G,Ye=ot&&G.isPMREMTexture===!0,dt=!!y.aoMap,Rt=!!y.lightMap,Ct=!!y.bumpMap&&y.wireframe===!1,je=!!y.normalMap,kt=!!y.displacementMap,tt=!!y.emissiveMap,Pt=!!y.metalnessMap,Ot=!!y.roughnessMap,lt=y.anisotropy>0,Y=y.clearcoat>0,zt=y.diffuseRoughness>0,ft=y.dispersion>0,it=y.retroreflectivity>0,ve=y.iridescence>0,bt=y.sheen>0,Ue=y.transmission>0,Ve=lt&&!!y.anisotropyMap,N=Y&&!!y.clearcoatMap,T=Y&&!!y.clearcoatNormalMap,J=Y&&!!y.clearcoatRoughnessMap,me=zt&&!!y.diffuseRoughnessMap,U=ve&&!!y.iridescenceMap,K=ve&&!!y.iridescenceThicknessMap,V=bt&&!!y.sheenColorMap,H=bt&&!!y.sheenRoughnessMap,q=!!y.specularMap,ie=!!y.specularColorMap,D=!!y.specularIntensityMap,se=Ue&&!!y.transmissionMap,re=Ue&&!!y.thicknessMap,be=!!y.gradientMap,xe=!!y.alphaMap,Me=y.alphaTest>0,Le=!!y.alphaHash,Qe=!!y.extensions,_e=_r;y.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(_e=r.toneMapping);let ze=Ye?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Ke={shaderID:ee,shaderType:y.type,shaderName:y.name,vertexShader:ye,fragmentShader:oe,defines:y.defines,customVertexShaderID:de,customFragmentShaderID:ue,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:Z,batching:qe,batchingColor:qe&&O._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&O.instanceColor!==null,instancingMorph:Ie&&O.morphTexture!==null,outputColorSpace:fe===null?r.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Re,matcap:st,envMap:ot,envMapMode:ot&&G.mapping,envMapPMREM:Ye,envMapMaxLod:Ye?ze.length-1:null,envMapSize:Ye?ze[0].width:null,aoMap:dt,lightMap:Rt,bumpMap:Ct,normalMap:je,displacementMap:kt,emissiveMap:tt,normalMapObjectSpace:je&&y.normalMapType===lS,normalMapTangentSpace:je&&y.normalMapType===gp,packedNormalMap:je&&y.normalMapType===gp&&HI(y.normalMap.format),metalnessMap:Pt,roughnessMap:Ot,anisotropy:lt,anisotropyMap:Ve,clearcoat:Y,clearcoatMap:N,clearcoatNormalMap:T,clearcoatRoughnessMap:J,diffuseRoughness:zt,diffuseRoughnessMap:me,dispersion:ft,retroreflection:it,iridescence:ve,iridescenceMap:U,iridescenceThicknessMap:K,sheen:bt,sheenColorMap:V,sheenRoughnessMap:H,specularMap:q,specularColorMap:ie,specularIntensityMap:D,transmission:Ue,transmissionMap:se,thicknessMap:re,gradientMap:be,opaque:y.transparent===!1&&y.blending===Pl&&y.alphaToCoverage===!1,alphaMap:xe,alphaTest:Me,alphaHash:Le,combine:y.combine,mapUv:Re&&m(y.map.channel),aoMapUv:dt&&m(y.aoMap.channel),lightMapUv:Rt&&m(y.lightMap.channel),bumpMapUv:Ct&&m(y.bumpMap.channel),normalMapUv:je&&m(y.normalMap.channel),displacementMapUv:kt&&m(y.displacementMap.channel),emissiveMapUv:tt&&m(y.emissiveMap.channel),metalnessMapUv:Pt&&m(y.metalnessMap.channel),roughnessMapUv:Ot&&m(y.roughnessMap.channel),anisotropyMapUv:Ve&&m(y.anisotropyMap.channel),clearcoatMapUv:N&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:T&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&m(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:me&&m(y.diffuseRoughnessMap.channel),iridescenceMapUv:U&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:K&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:V&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:H&&m(y.sheenRoughnessMap.channel),specularMapUv:q&&m(y.specularMap.channel),specularColorMapUv:ie&&m(y.specularColorMap.channel),specularIntensityMapUv:D&&m(y.specularIntensityMap.channel),transmissionMapUv:se&&m(y.transmissionMap.channel),thicknessMapUv:re&&m(y.thicknessMap.channel),alphaMapUv:xe&&m(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(je||lt),vertexNormals:!!F.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!F.attributes.uv&&(Re||xe),fog:!!$,useFog:y.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||F.attributes.normal===void 0&&je===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:he,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:pe,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:B.filter(ge=>ge.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:_e,decodeVideoTexture:Re&&y.map.isVideoTexture===!0&&ct.getTransfer(y.map.colorSpace)===wt,decodeVideoTextureEmissive:tt&&y.emissiveMap.isVideoTexture===!0&&ct.getTransfer(y.emissiveMap.colorSpace)===wt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===rn,flipSided:y.side===Gn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Qe&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&y.extensions.multiDraw===!0||qe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ke.vertexUv1s=l.has(1),Ke.vertexUv2s=l.has(2),Ke.vertexUv3s=l.has(3),l.clear(),Ke}u(g,"getParameters");function _(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let L in y.defines)w.push(L),w.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(b(w,y),x(w,y),w.push(r.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}u(_,"getProgramCacheKey");function b(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapPMREM),y.push(w.envMapMaxLod),y.push(w.envMapSize),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.diffuseRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.numSunLights),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numSunLightShadows),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.numLightProbeGrids),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}u(b,"getProgramCacheKeyParameters");function x(y,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.diffuseRoughness&&o.enable(25),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),y.push(o.mask)}u(x,"getProgramCacheKeyBooleans");function v(y){let w=f[y.type],L;if(w){let I=wr[w];L=na.clone(I.uniforms)}else L=y.uniforms;return L}u(v,"getUniforms");function S(y,w){let L=h.get(w);return L!==void 0?++L.usedTimes:(L=new GI(r,w,y,i),c.push(L),h.set(w,L)),L}u(S,"acquireProgram");function M(y){if(--y.usedTimes===0){let w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}u(M,"releaseProgram");function R(y){a.remove(y)}u(R,"releaseShaderCache");function E(){a.dispose()}return u(E,"dispose"),{getParameters:g,getProgramCacheKey:_,getUniforms:v,acquireProgram:S,releaseProgram:M,releaseShaderCache:R,programs:c,dispose:E}}u(WI,"WebGLPrograms");function XI(){let r=new WeakMap;function e(o){return r.has(o)}u(e,"has");function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}u(t,"get");function n(o){r.delete(o)}u(n,"remove");function i(o,a,l){r.get(o)[a]=l}u(i,"update");function s(){r=new WeakMap}return u(s,"dispose"),{has:e,get:t,remove:n,update:i,dispose:s}}u(XI,"WebGLProperties");function qI(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}u(qI,"painterSortStable");function zS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}u(zS,"reversePainterSortStable");function GS(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}u(s,"init");function o(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}u(o,"materialVariant");function a(f,m,g,_,b,x){let v=r[e];return v===void 0?(v={id:f.id,object:f,geometry:m,material:g,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:b,group:x},r[e]=v):(v.id=f.id,v.object=f,v.geometry=m,v.material=g,v.materialVariant=o(f),v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=b,v.group=x),e++,v}u(a,"getNextRenderItem");function l(f,m,g,_,b,x,v){v.reversedDepth===!0&&(b=-b);let S=a(f,m,g,_,b,x);g.transmission>0?n.push(S):g.transparent===!0?i.push(S):t.push(S)}u(l,"push");function c(f,m,g,_,b,x){let v=a(f,m,g,_,b,x);g.transmission>0?n.unshift(v):g.transparent===!0?i.unshift(v):t.unshift(v)}u(c,"unshift");function h(f,m){t.length>1&&t.sort(f||qI),n.length>1&&n.sort(m||zS),i.length>1&&i.sort(m||zS)}u(h,"sort");function d(){for(let f=e,m=r.length;f<m;f++){let g=r[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return u(d,"finish"),{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:h}}u(GS,"WebGLRenderList");function YI(){let r=new WeakMap;function e(n,i){let s=r.get(n),o;return s===void 0?(o=new GS,r.set(n,[o])):i>=s.length?(o=new GS,s.push(o)):o=s[i],o}u(e,"get");function t(){r=new WeakMap}return u(t,"dispose"),{get:e,dispose:t}}u(YI,"WebGLRenderLists");function $I(){let r={};return{get:u(function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new X,color:new Se};break;case"SpotLight":t={position:new X,direction:new X,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new X,halfWidth:new X,halfHeight:new X};break}return r[e.id]=t,t},"get")}}u($I,"UniformsCache");function KI(){let r={};return{get:u(function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t},"get")}}u(KI,"ShadowUniformsCache");var ZI=0;function JI(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}u(JI,"shadowCastingAndTexturingLightsFirst");function jI(r){let e=new $I,t=KI(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new X);let i=new X,s=new He,o=new He;function a(c){let h=0,d=0,f=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let m=0,g=0,_=0,b=0,x=0,v=0,S=0,M=0,R=0,E=0,y=0,w=0,L=0,I=0;c.sort(JI);for(let B=0,$=c.length;B<$;B++){let F=c[B],j=F.color,ce=F.intensity,G=F.distance,ee=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===vr?ee=F.shadow.map.texture:ee=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)h+=j.r*ce,d+=j.g*ce,f+=j.b*ce;else if(F.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(F.sh.coefficients[Z],ce);I++}else if(F.isSunLight){let Z=e.get(F);if(Z.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let ne=F.shadow,ae=t.get(F);ae.shadowIntensity=ne.intensity,ae.shadowBias=ne.bias,ae.shadowNormalBias=ne.normalBias,ae.shadowRadius=ne.radius,ae.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),n.sunShadow[g]=ae,n.sunShadowMap[g]=ee;let pe=ne.getViewportCount();for(let ye=0;ye<pe;ye++)n.sunShadowMatrix[_+ye]=ne.getMatrix(ye),n.sunShadowCascade[_+ye]=ne._cascadeData[ye];_+=pe,g++}n.sun[m]=Z,m++}else if(F.isDirectionalLight){let Z=e.get(F);if(Z.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let ne=F.shadow,ae=t.get(F);ae.shadowIntensity=ne.intensity,ae.shadowBias=ne.bias,ae.shadowNormalBias=ne.normalBias,ae.shadowRadius=ne.radius,ae.shadowMapSize=ne.mapSize,n.directionalShadow[b]=ae,n.directionalShadowMap[b]=ee,n.directionalShadowMatrix[b]=F.shadow.matrix,R++}n.directional[b]=Z,b++}else if(F.isSpotLight){let Z=e.get(F);Z.position.setFromMatrixPosition(F.matrixWorld),Z.color.copy(j).multiplyScalar(ce),Z.distance=G,Z.coneCos=Math.cos(F.angle),Z.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),Z.decay=F.decay,n.spot[v]=Z;let ne=F.shadow;if(F.map&&(n.spotLightMap[w]=F.map,w++,ne.updateMatrices(F),F.castShadow&&L++),n.spotLightMatrix[v]=ne.matrix,F.castShadow){let ae=t.get(F);ae.shadowIntensity=ne.intensity,ae.shadowBias=ne.bias,ae.shadowNormalBias=ne.normalBias,ae.shadowRadius=ne.radius,ae.shadowMapSize=ne.mapSize,n.spotShadow[v]=ae,n.spotShadowMap[v]=ee,y++}v++}else if(F.isRectAreaLight){let Z=e.get(F);Z.color.copy(j).multiplyScalar(ce),Z.halfWidth.set(F.width*.5,0,0),Z.halfHeight.set(0,F.height*.5,0),n.rectArea[S]=Z,S++}else if(F.isPointLight){let Z=e.get(F);if(Z.color.copy(F.color).multiplyScalar(F.intensity),Z.distance=F.distance,Z.decay=F.decay,F.castShadow){let ne=F.shadow,ae=t.get(F);ae.shadowIntensity=ne.intensity,ae.shadowBias=ne.bias,ae.shadowNormalBias=ne.normalBias,ae.shadowRadius=ne.radius,ae.shadowMapSize=ne.mapSize,ae.shadowCameraNear=ne.camera.near,ae.shadowCameraFar=ne.camera.far,n.pointShadow[x]=ae,n.pointShadowMap[x]=ee,n.pointShadowMatrix[x]=F.shadow.matrix,E++}n.point[x]=Z,x++}else if(F.isHemisphereLight){let Z=e.get(F);Z.skyColor.copy(F.color).multiplyScalar(ce),Z.groundColor.copy(F.groundColor).multiplyScalar(ce),n.hemi[M]=Z,M++}}S>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let O=n.hash;(O.sunLength!==m||O.directionalLength!==b||O.pointLength!==x||O.spotLength!==v||O.rectAreaLength!==S||O.hemiLength!==M||O.numSunShadows!==g||O.numDirectionalShadows!==R||O.numPointShadows!==E||O.numSpotShadows!==y||O.numSpotMaps!==w||O.numLightProbes!==I)&&(n.sun.length=m,n.directional.length=b,n.spot.length=v,n.rectArea.length=S,n.point.length=x,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.spotLightMatrix.length=y+w-L,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=I,O.sunLength=m,O.directionalLength=b,O.pointLength=x,O.spotLength=v,O.rectAreaLength=S,O.hemiLength=M,O.numSunShadows=g,O.numDirectionalShadows=R,O.numPointShadows=E,O.numSpotShadows=y,O.numSpotMaps=w,O.numLightProbes=I,n.version=ZI++)}u(a,"setup");function l(c,h){let d=0,f=0,m=0,g=0,_=0,b=0,x=h.matrixWorldInverse;for(let v=0,S=c.length;v<S;v++){let M=c[v];if(M.isSunLight){let R=n.sun[d];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(x),d++}else if(M.isDirectionalLight){let R=n.directional[f];R.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(i),R.direction.transformDirection(x),f++}else if(M.isSpotLight){let R=n.spot[g];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(x),R.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(i),R.direction.transformDirection(x),g++}else if(M.isRectAreaLight){let R=n.rectArea[_];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(x),o.identity(),s.copy(M.matrixWorld),s.premultiply(x),o.extractRotation(s),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){let R=n.point[m];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(x),m++}else if(M.isHemisphereLight){let R=n.hemi[b];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(x),b++}}}return u(l,"setupView"),{setup:a,setupView:l,state:n}}u(jI,"WebGLLights");function VS(r){let e=new jI(r),t=[],n=[],i=[];function s(d){h.camera=d,t.length=0,n.length=0,i.length=0}u(s,"init");function o(d){d.isLightProbeGrid?i.push(d):t.push(d)}u(o,"pushLight");function a(d){n.push(d)}u(a,"pushShadow");function l(){e.setup(t),i.sort((d,f)=>d.priority-f.priority||d.id-f.id)}u(l,"setupLights");function c(d){e.setupView(t,d)}u(c,"setupLightsView");let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}u(VS,"WebGLRenderState");function QI(r){let e=new WeakMap;function t(i,s=0){let o=e.get(i),a;return o===void 0?(a=new VS(r),e.set(i,[a])):s>=o.length?(a=new VS(r),o.push(a)):a=o[s],a}u(t,"get");function n(){e=new WeakMap}return u(n,"dispose"),{get:t,dispose:n}}u(QI,"WebGLRenderStates");var e3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t3=`uniform sampler2D shadow_pass;
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
}`,n3=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],i3=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],HS=new He,Uu=new X,Gb=new X;function r3(r,e,t){let n=new Hs,i=new Fe,s=new Fe,o=new Tt,a=new Zd,l=new Jd,c={},h=t.maxTextureSize,d={[wi]:Gn,[Gn]:wi,[rn]:rn},f=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:e3,fragmentShader:t3}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new Mt;g.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new $e(g,f),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tu;let x=this.type;this.render=function(E,y,w){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||E.length===0)return;this.type===Tf&&(ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Tu);let L=r.getRenderTarget(),I=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),B=r.state;B.setBlending(Zo),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let $=x!==this.type;$&&y.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(j=>j.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,j=E.length;F<j;F++){let ce=E[F],G=ce.shadow;if(G===void 0){ke("WebGLShadowMap:",ce,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let ee=G.getFrameExtents();i.multiply(ee),s.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ee.x),i.x=s.x*ee.x,G.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ee.y),i.y=s.y*ee.y,G.mapSize.y=s.y));let Z=r.state.buffers.depth.getReversed();if(G.camera._reversedDepth=Z,G.map===null||$===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Cl){if(ce.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ii(i.x,i.y,{format:vr,type:oi,minFilter:Gt,magFilter:Gt,generateMipmaps:!1}),G.map.texture.name=ce.name+".shadowMap",G.map.depthTexture=new ss(i.x,i.y,si),G.map.depthTexture.name=ce.name+".shadowMapDepth",G.map.depthTexture.format=is,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=qt,G.map.depthTexture.magFilter=qt}else ce.isPointLight?(G.map=new Bu(i.x),G.map.depthTexture=new pu(i.x,Yi)):(G.map=new ii(i.x,i.y),G.map.depthTexture=new ss(i.x,i.y,Yi)),G.map.depthTexture.name=ce.name+".shadowMap",G.map.depthTexture.format=is,this.type===Tu?(G.map.depthTexture.compareFunction=Z?H0:V0,G.map.depthTexture.minFilter=Gt,G.map.depthTexture.magFilter=Gt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=qt,G.map.depthTexture.magFilter=qt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==i.x||G.map.height!==i.y)&&G.map.setSize(i.x,i.y);let ne=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();ce.isPointLight!==!0&&G.updateMatrices(ce,w);let ae=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:w.layers;for(let pe=0;pe<ne;pe++){let ye=G.getCamera(pe);if(ce.isPointLight){let oe=G.camera,de=G.matrix,ue=ce.distance||oe.far;ue!==oe.far&&(oe.far=ue,oe.updateProjectionMatrix()),Uu.setFromMatrixPosition(ce.matrixWorld),oe.position.copy(Uu),Gb.copy(oe.position),Gb.add(n3[pe]),oe.up.copy(i3[pe]),oe.lookAt(Gb),oe.updateMatrixWorld(),de.makeTranslation(-Uu.x,-Uu.y,-Uu.z),HS.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),G._frustum.setFromProjectionMatrix(HS,oe.coordinateSystem,oe.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,pe),r.clear();else{pe===0&&(r.setRenderTarget(G.map),r.clear());let oe=G.getViewport(pe);o.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),B.viewport(o)}n=G.getFrustum(pe),M(y,w,ye,ce,ae,this.type)}G.isPointLightShadow!==!0&&this.type===Cl&&v(G,w),G.needsUpdate=!1}x=this.type,b.needsUpdate=!1,r.setRenderTarget(L,I,O)};function v(E,y){let w=e.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null?E.mapPass=new ii(i.x,i.y,{format:vr,type:oi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(y,null,w,f,_,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value.set(E.map.width,E.map.height),m.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(y,null,w,m,_,null)}u(v,"VSMPass");function S(E,y,w,L){let I=null,O=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(O!==void 0)I=O;else if(I=w.isPointLight===!0?l:a,r.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let B=I.uuid,$=y.uuid,F=c[B];F===void 0&&(F={},c[B]=F);let j=F[$];j===void 0&&(j=I.clone(),F[$]=j,y.addEventListener("dispose",R)),I=j}if(I.visible=y.visible,I.wireframe=y.wireframe,L===Cl?I.side=y.shadowSide!==null?y.shadowSide:y.side:I.side=y.shadowSide!==null?y.shadowSide:d[y.side],I.alphaMap=y.alphaMap,I.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,I.map=y.map,I.clipShadows=y.clipShadows,I.clippingPlanes=y.clippingPlanes,I.clipIntersection=y.clipIntersection,I.displacementMap=y.displacementMap,I.displacementScale=y.displacementScale,I.displacementBias=y.displacementBias,I.wireframeLinewidth=y.wireframeLinewidth,I.linewidth=y.linewidth,w.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let B=r.properties.get(I);B.light=w}return I}u(S,"getDepthMaterial");function M(E,y,w,L,I,O){if(E.visible===!1)return;if(E.layers.test(I)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&O===Cl)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);let F=e.update(E),j=E.material;if(Array.isArray(j)){let ce=F.groups;for(let G=0,ee=ce.length;G<ee;G++){let Z=ce[G],ne=j[Z.materialIndex];if(ne&&ne.visible){let ae=S(E,ne,L,O);E.onBeforeShadow(r,E,y,w,F,ae,Z),r.renderBufferDirect(w,null,F,ae,E,Z),E.onAfterShadow(r,E,y,w,F,ae,Z)}}}else if(j.visible){let ce=S(E,j,L,O);E.onBeforeShadow(r,E,y,w,F,ce,null),r.renderBufferDirect(w,null,F,ce,E,null),E.onAfterShadow(r,E,y,w,F,ce,null)}}let $=E.children;for(let F=0,j=$.length;F<j;F++)M($[F],y,w,L,I,O)}u(M,"renderObject");function R(E){E.target.removeEventListener("dispose",R);for(let w in c){let L=c[w],I=E.target.uuid;I in L&&(L[I].dispose(),delete L[I])}}u(R,"onMaterialDispose")}u(r3,"WebGLShadowMap");function s3(r,e){function t(){let D=!1,se=new Tt,re=null,be=new Tt(0,0,0,0);return{setMask:u(function(xe){re!==xe&&!D&&(r.colorMask(xe,xe,xe,xe),re=xe)},"setMask"),setLocked:u(function(xe){D=xe},"setLocked"),setClear:u(function(xe,Me,Le,Qe,_e){_e===!0&&(xe*=Qe,Me*=Qe,Le*=Qe),se.set(xe,Me,Le,Qe),be.equals(se)===!1&&(r.clearColor(xe,Me,Le,Qe),be.copy(se))},"setClear"),reset:u(function(){D=!1,re=null,be.set(-1,0,0,0)},"reset")}}u(t,"ColorBuffer");function n(){let D=!1,se=!1,re=null,be=null,xe=null;return{setReversed:u(function(Me){if(se!==Me){let Le=e.get("EXT_clip_control");Me?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),se=Me;let Qe=xe;xe=null,this.setClear(Qe)}},"setReversed"),getReversed:u(function(){return se},"getReversed"),setTest:u(function(Me){Me?he(r.DEPTH_TEST):Ie(r.DEPTH_TEST)},"setTest"),setMask:u(function(Me){re!==Me&&!D&&(r.depthMask(Me),re=Me)},"setMask"),setFunc:u(function(Me){if(se&&(Me=xS[Me]),be!==Me){switch(Me){case Od:r.depthFunc(r.NEVER);break;case Ud:r.depthFunc(r.ALWAYS);break;case Fd:r.depthFunc(r.LESS);break;case pl:r.depthFunc(r.LEQUAL);break;case Bd:r.depthFunc(r.EQUAL);break;case kd:r.depthFunc(r.GEQUAL);break;case zd:r.depthFunc(r.GREATER);break;case Gd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}be=Me}},"setFunc"),setLocked:u(function(Me){D=Me},"setLocked"),setClear:u(function(Me){xe!==Me&&(xe=Me,se&&(Me=1-Me),r.clearDepth(Me))},"setClear"),reset:u(function(){D=!1,re=null,be=null,xe=null,se=!1},"reset")}}u(n,"DepthBuffer");function i(){let D=!1,se=null,re=null,be=null,xe=null,Me=null,Le=null,Qe=null,_e=null;return{setTest:u(function(ze){D||(ze?he(r.STENCIL_TEST):Ie(r.STENCIL_TEST))},"setTest"),setMask:u(function(ze){se!==ze&&!D&&(r.stencilMask(ze),se=ze)},"setMask"),setFunc:u(function(ze,Ke,ge){(re!==ze||be!==Ke||xe!==ge)&&(r.stencilFunc(ze,Ke,ge),re=ze,be=Ke,xe=ge)},"setFunc"),setOp:u(function(ze,Ke,ge){(Me!==ze||Le!==Ke||Qe!==ge)&&(r.stencilOp(ze,Ke,ge),Me=ze,Le=Ke,Qe=ge)},"setOp"),setLocked:u(function(ze){D=ze},"setLocked"),setClear:u(function(ze){_e!==ze&&(r.clearStencil(ze),_e=ze)},"setClear"),reset:u(function(){D=!1,se=null,re=null,be=null,xe=null,Me=null,Le=null,Qe=null,_e=null},"reset")}}u(i,"StencilBuffer");let s=new t,o=new n,a=new i,l={},c=new WeakMap,h={},d={},f={},m=new WeakMap,g=[],_=null,b=!1,x=null,v=null,S=null,M=null,R=null,E=null,y=null,w=new Se(0,0,0),L=0,I=!1,O=null,B=null,$=null,F=null,j=null,ce=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,ee=0,Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(Z)[1]),G=ee>=1):Z.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),G=ee>=2);let ne=null,ae={},pe=r.getParameter(r.SCISSOR_BOX),ye=r.getParameter(r.VIEWPORT),oe=new Tt().fromArray(pe),de=new Tt().fromArray(ye);function ue(D,se,re,be){let xe=new Uint8Array(4),Me=r.createTexture();r.bindTexture(D,Me),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Le=0;Le<re;Le++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(se,0,r.RGBA,1,1,be,0,r.RGBA,r.UNSIGNED_BYTE,xe):r.texImage2D(se+Le,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,xe);return Me}u(ue,"createTexture");let fe={};fe[r.TEXTURE_2D]=ue(r.TEXTURE_2D,r.TEXTURE_2D,1),fe[r.TEXTURE_CUBE_MAP]=ue(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[r.TEXTURE_2D_ARRAY]=ue(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),fe[r.TEXTURE_3D]=ue(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(r.DEPTH_TEST),o.setFunc(pl),Ct(!1),je(v0),he(r.CULL_FACE),dt(Zo);function he(D){h[D]!==!0&&(r.enable(D),h[D]=!0)}u(he,"enable");function Ie(D){h[D]!==!1&&(r.disable(D),h[D]=!1)}u(Ie,"disable");function qe(D,se){return f[D]!==se?(r.bindFramebuffer(D,se),f[D]=se,D===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=se),D===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=se),!0):!1}u(qe,"bindFramebuffer");function Re(D,se){let re=g,be=!1;if(D){re=m.get(se),re===void 0&&(re=[],m.set(se,re));let xe=D.textures;if(re.length!==xe.length||re[0]!==r.COLOR_ATTACHMENT0){for(let Me=0,Le=xe.length;Me<Le;Me++)re[Me]=r.COLOR_ATTACHMENT0+Me;re.length=xe.length,be=!0}}else re[0]!==r.BACK&&(re[0]=r.BACK,be=!0);be&&r.drawBuffers(re)}u(Re,"drawBuffers");function st(D){return _!==D?(r.useProgram(D),_=D,!0):!1}u(st,"useProgram");let ot={[Jo]:r.FUNC_ADD,[BM]:r.FUNC_SUBTRACT,[kM]:r.FUNC_REVERSE_SUBTRACT};ot[zM]=r.MIN,ot[GM]=r.MAX;let Ye={[VM]:r.ZERO,[HM]:r.ONE,[WM]:r.SRC_COLOR,[E0]:r.SRC_ALPHA,[ZM]:r.SRC_ALPHA_SATURATE,[$M]:r.DST_COLOR,[qM]:r.DST_ALPHA,[XM]:r.ONE_MINUS_SRC_COLOR,[A0]:r.ONE_MINUS_SRC_ALPHA,[KM]:r.ONE_MINUS_DST_COLOR,[YM]:r.ONE_MINUS_DST_ALPHA,[JM]:r.CONSTANT_COLOR,[jM]:r.ONE_MINUS_CONSTANT_COLOR,[QM]:r.CONSTANT_ALPHA,[eS]:r.ONE_MINUS_CONSTANT_ALPHA};function dt(D,se,re,be,xe,Me,Le,Qe,_e,ze){if(D===Zo){b===!0&&(Ie(r.BLEND),b=!1);return}if(b===!1&&(he(r.BLEND),b=!0),D!==FM){if(D!==x||ze!==I){if((v!==Jo||R!==Jo)&&(r.blendEquation(r.FUNC_ADD),v=Jo,R=Jo),ze)switch(D){case Pl:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case M0:r.blendFunc(r.ONE,r.ONE);break;case S0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case w0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:We("WebGLState: Invalid blending: ",D);break}else switch(D){case Pl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case M0:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case S0:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case w0:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",D);break}S=null,M=null,E=null,y=null,w.set(0,0,0),L=0,x=D,I=ze}return}xe=xe||se,Me=Me||re,Le=Le||be,(se!==v||xe!==R)&&(r.blendEquationSeparate(ot[se],ot[xe]),v=se,R=xe),(re!==S||be!==M||Me!==E||Le!==y)&&(r.blendFuncSeparate(Ye[re],Ye[be],Ye[Me],Ye[Le]),S=re,M=be,E=Me,y=Le),(Qe.equals(w)===!1||_e!==L)&&(r.blendColor(Qe.r,Qe.g,Qe.b,_e),w.copy(Qe),L=_e),x=D,I=!1}u(dt,"setBlending");function Rt(D,se){D.side===rn?Ie(r.CULL_FACE):he(r.CULL_FACE);let re=D.side===Gn;se&&(re=!re),Ct(re),D.blending===Pl&&D.transparent===!1?dt(Zo):dt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);let be=D.stencilWrite;a.setTest(be),be&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),tt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?he(r.SAMPLE_ALPHA_TO_COVERAGE):Ie(r.SAMPLE_ALPHA_TO_COVERAGE)}u(Rt,"setMaterial");function Ct(D){O!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),O=D)}u(Ct,"setFlipSided");function je(D){D!==OM?(he(r.CULL_FACE),D!==B&&(D===v0?r.cullFace(r.BACK):D===UM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ie(r.CULL_FACE),B=D}u(je,"setCullFace");function kt(D){D!==$&&(G&&r.lineWidth(D),$=D)}u(kt,"setLineWidth");function tt(D,se,re){D?(he(r.POLYGON_OFFSET_FILL),(F!==se||j!==re)&&(F=se,j=re,o.getReversed()&&(se=-se,re=-re),r.polygonOffset(se,re))):Ie(r.POLYGON_OFFSET_FILL)}u(tt,"setPolygonOffset");function Pt(D){D?he(r.SCISSOR_TEST):Ie(r.SCISSOR_TEST)}u(Pt,"setScissorTest");function Ot(D){D===void 0&&(D=r.TEXTURE0+ce-1),ne!==D&&(r.activeTexture(D),ne=D)}u(Ot,"activeTexture");function lt(D,se,re){re===void 0&&(ne===null?re=r.TEXTURE0+ce-1:re=ne);let be=ae[re];be===void 0&&(be={type:void 0,texture:void 0},ae[re]=be),(be.type!==D||be.texture!==se)&&(ne!==re&&(r.activeTexture(re),ne=re),r.bindTexture(D,se||fe[D]),be.type=D,be.texture=se)}u(lt,"bindTexture");function Y(){let D=ae[ne];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}u(Y,"unbindTexture");function zt(){try{r.compressedTexImage2D(...arguments)}catch(D){We("WebGLState:",D)}}u(zt,"compressedTexImage2D");function ft(){try{r.compressedTexImage3D(...arguments)}catch(D){We("WebGLState:",D)}}u(ft,"compressedTexImage3D");function it(){try{r.texSubImage2D(...arguments)}catch(D){We("WebGLState:",D)}}u(it,"texSubImage2D");function ve(){try{r.texSubImage3D(...arguments)}catch(D){We("WebGLState:",D)}}u(ve,"texSubImage3D");function bt(){try{r.compressedTexSubImage2D(...arguments)}catch(D){We("WebGLState:",D)}}u(bt,"compressedTexSubImage2D");function Ue(){try{r.compressedTexSubImage3D(...arguments)}catch(D){We("WebGLState:",D)}}u(Ue,"compressedTexSubImage3D");function Ve(){try{r.texStorage2D(...arguments)}catch(D){We("WebGLState:",D)}}u(Ve,"texStorage2D");function N(){try{r.texStorage3D(...arguments)}catch(D){We("WebGLState:",D)}}u(N,"texStorage3D");function T(){try{r.texImage2D(...arguments)}catch(D){We("WebGLState:",D)}}u(T,"texImage2D");function J(){try{r.texImage3D(...arguments)}catch(D){We("WebGLState:",D)}}u(J,"texImage3D");function me(D){return d[D]!==void 0?d[D]:r.getParameter(D)}u(me,"getParameter");function U(D,se){d[D]!==se&&(r.pixelStorei(D,se),d[D]=se)}u(U,"pixelStorei");function K(D){oe.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),oe.copy(D))}u(K,"scissor");function V(D){de.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),de.copy(D))}u(V,"viewport");function H(D,se){let re=c.get(se);re===void 0&&(re=new WeakMap,c.set(se,re));let be=re.get(D);be===void 0&&(be=r.getUniformBlockIndex(se,D.name),r.uniformBlockBinding(se,be,be),re.set(D,be))}u(H,"updateUBOMapping");function q(D,se,re){let xe=c.get(se).get(D);l[xe]!==re&&(r.bindBufferBase(r.UNIFORM_BUFFER,xe,re),l[xe]=re)}u(q,"uniformBlockBinding");function ie(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},ne=null,ae={},f={},l={},m=new WeakMap,g=[],_=null,b=!1,x=null,v=null,S=null,M=null,R=null,E=null,y=null,w=new Se(0,0,0),L=0,I=!1,O=null,B=null,$=null,F=null,j=null,oe.set(0,0,r.canvas.width,r.canvas.height),de.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return u(ie,"reset"),{buffers:{color:s,depth:o,stencil:a},enable:he,disable:Ie,bindFramebuffer:qe,drawBuffers:Re,useProgram:st,setBlending:dt,setMaterial:Rt,setFlipSided:Ct,setCullFace:je,setLineWidth:kt,setPolygonOffset:tt,setScissorTest:Pt,activeTexture:Ot,bindTexture:lt,unbindTexture:Y,compressedTexImage2D:zt,compressedTexImage3D:ft,texImage2D:T,texImage3D:J,pixelStorei:U,getParameter:me,updateUBOMapping:H,uniformBlockBinding:q,texStorage2D:Ve,texStorage3D:N,texSubImage2D:it,texSubImage3D:ve,compressedTexSubImage2D:bt,compressedTexSubImage3D:Ue,scissor:K,viewport:V,reset:ie}}u(s3,"WebGLState");function o3(r,e,t,n,i,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Fe,h=new WeakMap,d=new Set,f,m=new WeakMap,g=new Set,_=new FinalizationRegistry(N=>g.delete(N)),b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(N,T){return b?new OffscreenCanvas(N,T):bl("canvas")}u(x,"createCanvas");function v(N,T,J){let me=1,U=Ve(N);if((U.width>J||U.height>J)&&(me=J/Math.max(U.width,U.height)),me<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let K=Math.floor(me*U.width),V=Math.floor(me*U.height);f===void 0&&(f=x(K,V));let H=T?x(K,V):f;return H.width=K,H.height=V,H.getContext("2d").drawImage(N,0,0,K,V),ke("WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+K+"x"+V+")."),H}else return"data"in N&&ke("WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),N;return N}u(v,"resizeImage");function S(N){return N.generateMipmaps}u(S,"textureNeedsGenerateMipmaps");function M(N){r.generateMipmap(N)}u(M,"generateMipmap");function R(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}u(R,"getTargetType");function E(N,T,J,me,U,K=!1){if(N!==null){if(r[N]!==void 0)return r[N];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let V;me&&(V=e.get("EXT_texture_norm16"),V||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let H=T;if(T===r.RED&&(J===r.FLOAT&&(H=r.R32F),J===r.HALF_FLOAT&&(H=r.R16F),J===r.UNSIGNED_BYTE&&(H=r.R8),J===r.UNSIGNED_SHORT&&V&&(H=V.R16_EXT),J===r.SHORT&&V&&(H=V.R16_SNORM_EXT)),T===r.RED_INTEGER&&(J===r.UNSIGNED_BYTE&&(H=r.R8UI),J===r.UNSIGNED_SHORT&&(H=r.R16UI),J===r.UNSIGNED_INT&&(H=r.R32UI),J===r.BYTE&&(H=r.R8I),J===r.SHORT&&(H=r.R16I),J===r.INT&&(H=r.R32I)),T===r.RG&&(J===r.FLOAT&&(H=r.RG32F),J===r.HALF_FLOAT&&(H=r.RG16F),J===r.UNSIGNED_BYTE&&(H=r.RG8),J===r.UNSIGNED_SHORT&&V&&(H=V.RG16_EXT),J===r.SHORT&&V&&(H=V.RG16_SNORM_EXT)),T===r.RG_INTEGER&&(J===r.UNSIGNED_BYTE&&(H=r.RG8UI),J===r.UNSIGNED_SHORT&&(H=r.RG16UI),J===r.UNSIGNED_INT&&(H=r.RG32UI),J===r.BYTE&&(H=r.RG8I),J===r.SHORT&&(H=r.RG16I),J===r.INT&&(H=r.RG32I)),T===r.RGB_INTEGER&&(J===r.UNSIGNED_BYTE&&(H=r.RGB8UI),J===r.UNSIGNED_SHORT&&(H=r.RGB16UI),J===r.UNSIGNED_INT&&(H=r.RGB32UI),J===r.BYTE&&(H=r.RGB8I),J===r.SHORT&&(H=r.RGB16I),J===r.INT&&(H=r.RGB32I)),T===r.RGBA_INTEGER&&(J===r.UNSIGNED_BYTE&&(H=r.RGBA8UI),J===r.UNSIGNED_SHORT&&(H=r.RGBA16UI),J===r.UNSIGNED_INT&&(H=r.RGBA32UI),J===r.BYTE&&(H=r.RGBA8I),J===r.SHORT&&(H=r.RGBA16I),J===r.INT&&(H=r.RGBA32I)),T===r.RGB&&(J===r.UNSIGNED_SHORT&&V&&(H=V.RGB16_EXT),J===r.SHORT&&V&&(H=V.RGB16_SNORM_EXT),J===r.UNSIGNED_INT_5_9_9_9_REV&&(H=r.RGB9_E5),J===r.UNSIGNED_INT_10F_11F_11F_REV&&(H=r.R11F_G11F_B10F)),T===r.RGBA){let q=K?tu:ct.getTransfer(U);J===r.FLOAT&&(H=r.RGBA32F),J===r.HALF_FLOAT&&(H=r.RGBA16F),J===r.UNSIGNED_BYTE&&(H=q===wt?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT&&V&&(H=V.RGBA16_EXT),J===r.SHORT&&V&&(H=V.RGBA16_SNORM_EXT),J===r.UNSIGNED_SHORT_4_4_4_4&&(H=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(H=r.RGB5_A1)}return(H===r.R16F||H===r.R32F||H===r.RG16F||H===r.RG32F||H===r.RGBA16F||H===r.RGBA32F)&&e.get("EXT_color_buffer_float"),H}u(E,"getInternalFormat");function y(N,T){let J;return N?T===null||T===Yi||T===ea?J=r.DEPTH24_STENCIL8:T===si?J=r.DEPTH32F_STENCIL8:T===Nl&&(J=r.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Yi||T===ea?J=r.DEPTH_COMPONENT24:T===si?J=r.DEPTH_COMPONENT32F:T===Nl&&(J=r.DEPTH_COMPONENT16),J}u(y,"getInternalDepthFormat");function w(N,T){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==qt&&N.minFilter!==Gt?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}u(w,"getMipLevels");function L(N){let T=new WeakRef(N);n.get(N).__ref=T,g.add(T),_.register(N,T,T)}u(L,"track");function I(N){let T=n.get(N).__ref;T!==void 0&&(g.delete(T),_.unregister(T))}u(I,"untrack");function O(N){$(N.target)}u(O,"onTextureDispose");function B(N){F(N.target)}u(B,"onRenderTargetDispose");function $(N){N.removeEventListener("dispose",O),I(N),ce(N),N.isVideoTexture&&h.delete(N),N.isHTMLTexture&&d.delete(N)}u($,"destroyTexture");function F(N){N.removeEventListener("dispose",B),I(N),ee(N)}u(F,"destroyRenderTarget");function j(){for(let N of g){let T=N.deref();T!==void 0&&(T.isRenderTarget===!0?F(T):$(T))}g.clear(),d.clear()}u(j,"dispose");function ce(N){let T=n.get(N);if(T.__webglInit===void 0)return;let J=N.source,me=m.get(J);if(me){let U=me[T.__cacheKey];U.usedTimes--,U.usedTimes===0&&G(N),Object.keys(me).length===0&&m.delete(J)}n.remove(N)}u(ce,"deallocateTexture");function G(N){let T=n.get(N);r.deleteTexture(T.__webglTexture);let J=N.source,me=m.get(J);delete me[T.__cacheKey],o.memory.textures--}u(G,"deleteTexture");function ee(N){let T=n.get(N);T.__depthDisposeCallback&&T.__depthDisposeCallback();let J=N.depthTexture;if(J&&J.renderTarget===N&&$(J),N.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(T.__webglFramebuffer[U]))for(let K=0;K<T.__webglFramebuffer[U].length;K++)r.deleteFramebuffer(T.__webglFramebuffer[U][K]);else r.deleteFramebuffer(T.__webglFramebuffer[U]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[U])}else{if(Array.isArray(T.__webglFramebuffer))for(let U=0;U<T.__webglFramebuffer.length;U++)r.deleteFramebuffer(T.__webglFramebuffer[U]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let U=0;U<T.__webglColorRenderbuffer.length;U++)T.__webglColorRenderbuffer[U]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[U]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let me=N.textures;for(let U=0,K=me.length;U<K;U++){let V=n.get(me[U]);V.__webglTexture&&(r.deleteTexture(V.__webglTexture),o.memory.textures--),n.remove(me[U])}n.remove(N)}u(ee,"deallocateRenderTarget");let Z=0;function ne(){Z=0}u(ne,"resetTextureUnits");function ae(){return Z}u(ae,"getTextureUnits");function pe(N){Z=N}u(pe,"setTextureUnits");function ye(){let N=Z;return N>=i.maxTextures&&ke("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+i.maxTextures),Z+=1,N}u(ye,"allocateTextureUnit");function oe(N){let T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.mipmapsAutoUpdate),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}u(oe,"getTextureCacheKey");function de(N,T){let J=n.get(N);if(N.isVideoTexture&&bt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&J.__version!==N.version){let me=N.image;if(me===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(J,N,T);return}}else N.isExternalTexture&&(J.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+T)}u(de,"setTexture2D");function ue(N,T){let J=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&J.__version!==N.version){Rt(J,N,T);return}else N.isExternalTexture&&(J.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+T)}u(ue,"setTexture2DArray");function fe(N,T){let J=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&J.__version!==N.version){Rt(J,N,T);return}t.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+T)}u(fe,"setTexture3D");function he(N,T){let J=n.get(N);if(N.version>0&&J.__version!==N.version){Ct(J,N,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+T)}u(he,"setTextureCube");let Ie={[qn]:r.REPEAT,[Xn]:r.CLAMP_TO_EDGE,[ml]:r.MIRRORED_REPEAT},qe={[qt]:r.NEAREST,[Pf]:r.NEAREST_MIPMAP_NEAREST,[Qo]:r.NEAREST_MIPMAP_LINEAR,[Gt]:r.LINEAR,[Ll]:r.LINEAR_MIPMAP_NEAREST,[Tn]:r.LINEAR_MIPMAP_LINEAR},Re={[uS]:r.NEVER,[W0]:r.ALWAYS,[hS]:r.LESS,[V0]:r.LEQUAL,[dS]:r.EQUAL,[H0]:r.GEQUAL,[fS]:r.GREATER,[pS]:r.NOTEQUAL};function st(N,T){if(T.type===si&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Gt||T.magFilter===Ll||T.magFilter===Qo||T.magFilter===Tn||T.minFilter===Gt||T.minFilter===Ll||T.minFilter===Qo||T.minFilter===Tn)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,Ie[T.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,Ie[T.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,Ie[T.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,qe[T.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,qe[T.minFilter]),T.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,Re[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===qt||T.minFilter!==Qo&&T.minFilter!==Tn||T.type===si&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let J=e.get("EXT_texture_filter_anisotropic");r.texParameterf(N,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}u(st,"setTextureParameters");function ot(N,T){let J=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",O),L(T));let me=T.source,U=m.get(me);U===void 0&&(U={},m.set(me,U));let K=oe(T);if(K!==N.__cacheKey){U[K]===void 0&&(U[K]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,J=!0),U[K].usedTimes++;let V=U[N.__cacheKey];V!==void 0&&(U[N.__cacheKey].usedTimes--,V.usedTimes===0&&G(T)),N.__cacheKey=K,N.__webglTexture=U[K].texture}return J}u(ot,"initTexture");function Ye(N,T,J){return Math.floor(Math.floor(N/J)/T)}u(Ye,"getRow");function dt(N,T,J,me){let K=N.updateRanges;if(K.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,J,me,T.data);else{K.sort((D,se)=>D.start-se.start);let V=0;for(let D=1;D<K.length;D++){let se=K[V],re=K[D],be=se.start+se.count,xe=Ye(re.start,T.width,4),Me=Ye(se.start,T.width,4);re.start<=be+1&&xe===Me&&Ye(re.start+re.count-1,T.width,4)===xe?se.count=Math.max(se.count,re.start+re.count-se.start):(++V,K[V]=re)}K.length=V+1;let H=t.getParameter(r.UNPACK_ROW_LENGTH),q=t.getParameter(r.UNPACK_SKIP_PIXELS),ie=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let D=0,se=K.length;D<se;D++){let re=K[D],be=Math.floor(re.start/4),xe=Math.ceil(re.count/4),Me=be%T.width,Le=Math.floor(be/T.width),Qe=xe,_e=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,Me),t.pixelStorei(r.UNPACK_SKIP_ROWS,Le),t.texSubImage2D(r.TEXTURE_2D,0,Me,Le,Qe,_e,J,me,T.data)}N.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,H),t.pixelStorei(r.UNPACK_SKIP_PIXELS,q),t.pixelStorei(r.UNPACK_SKIP_ROWS,ie)}}u(dt,"updateTexture");function Rt(N,T,J){let me=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(me=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(me=r.TEXTURE_3D);let U=ot(N,T),K=T.source;t.bindTexture(me,N.__webglTexture,r.TEXTURE0+J);let V=n.get(K);if(K.version!==V.__version||U===!0){if(t.activeTexture(r.TEXTURE0+J),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let _e=ct.getPrimaries(ct.workingColorSpace),ze=T.colorSpace===$i?null:ct.getPrimaries(T.colorSpace),Ke=T.colorSpace===$i||_e===ze?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke)}t.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment);let q=v(T.image,!1,i.maxTextureSize);q=Ue(T,q);let ie=s.convert(T.format,T.colorSpace),D=s.convert(T.type),se=E(T.internalFormat,ie,D,T.normalized,T.colorSpace,T.isVideoTexture);st(me,T);let re,be=T.mipmaps,xe=T.isVideoTexture!==!0,Me=V.__version===void 0||U===!0,Le=K.dataReady,Qe=w(T,q);if(T.isDepthTexture)se=y(T.format===ds,T.type),Me&&(xe?t.texStorage2D(r.TEXTURE_2D,1,se,q.width,q.height):t.texImage2D(r.TEXTURE_2D,0,se,q.width,q.height,0,ie,D,null));else if(T.isDataTexture)if(be.length>0){xe&&Me&&t.texStorage2D(r.TEXTURE_2D,Qe,se,be[0].width,be[0].height);for(let _e=0,ze=be.length;_e<ze;_e++)re=be[_e],xe?Le&&t.texSubImage2D(r.TEXTURE_2D,_e,0,0,re.width,re.height,ie,D,re.data):t.texImage2D(r.TEXTURE_2D,_e,se,re.width,re.height,0,ie,D,re.data);T.generateMipmaps=!1}else xe?(Me&&t.texStorage2D(r.TEXTURE_2D,Qe,se,q.width,q.height),Le&&dt(T,q,ie,D)):t.texImage2D(r.TEXTURE_2D,0,se,q.width,q.height,0,ie,D,q.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){xe&&Me&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Qe,se,be[0].width,be[0].height,q.depth);for(let _e=0,ze=be.length;_e<ze;_e++)if(re=be[_e],T.format!==Kn)if(ie!==null)if(xe){if(Le)if(T.layerUpdates.size>0){let Ke=eg(re.width,re.height,T.format,T.type);for(let ge of T.layerUpdates){let nt=re.data.subarray(ge*Ke/re.data.BYTES_PER_ELEMENT,(ge+1)*Ke/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,ge,re.width,re.height,1,ie,nt)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,0,re.width,re.height,q.depth,ie,re.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,_e,se,re.width,re.height,q.depth,0,re.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xe?Le&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,0,re.width,re.height,q.depth,ie,D,re.data):t.texImage3D(r.TEXTURE_2D_ARRAY,_e,se,re.width,re.height,q.depth,0,ie,D,re.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{xe&&Me&&t.texStorage2D(r.TEXTURE_2D,Qe,se,be[0].width,be[0].height);for(let _e=0,ze=be.length;_e<ze;_e++)re=be[_e],T.format!==Kn?ie!==null?xe?Le&&t.compressedTexSubImage2D(r.TEXTURE_2D,_e,0,0,re.width,re.height,ie,re.data):t.compressedTexImage2D(r.TEXTURE_2D,_e,se,re.width,re.height,0,re.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?Le&&t.texSubImage2D(r.TEXTURE_2D,_e,0,0,re.width,re.height,ie,D,re.data):t.texImage2D(r.TEXTURE_2D,_e,se,re.width,re.height,0,ie,D,re.data)}else if(T.isDataArrayTexture)if(xe){if(Me&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Qe,se,q.width,q.height,q.depth),Le)if(T.layerUpdates.size>0){let _e=eg(q.width,q.height,T.format,T.type);for(let ze of T.layerUpdates){let Ke=q.data.subarray(ze*_e/q.data.BYTES_PER_ELEMENT,(ze+1)*_e/q.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ze,q.width,q.height,1,ie,D,Ke)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,ie,D,q.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,se,q.width,q.height,q.depth,0,ie,D,q.data);else if(T.isData3DTexture)xe?(Me&&t.texStorage3D(r.TEXTURE_3D,Qe,se,q.width,q.height,q.depth),Le&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,ie,D,q.data)):t.texImage3D(r.TEXTURE_3D,0,se,q.width,q.height,q.depth,0,ie,D,q.data);else if(T.isFramebufferTexture){if(Me)if(xe)t.texStorage2D(r.TEXTURE_2D,Qe,se,q.width,q.height);else{let _e=q.width,ze=q.height;for(let Ke=0;Ke<Qe;Ke++)t.texImage2D(r.TEXTURE_2D,Ke,se,_e,ze,0,ie,D,null),_e>>=1,ze>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in r){let _e=r.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),q.parentNode!==_e){_e.appendChild(q),d.add(T),_e.onpaint=ze=>{let Ke=ze.changedElements;for(let ge of d)Ke.includes(ge.image)&&(ge.needsUpdate=!0)},_e.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,q);else{let Ke=r.RGBA,ge=r.RGBA,nt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Ke,ge,nt,q)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(be.length>0){if(xe&&Me){let _e=Ve(be[0]);t.texStorage2D(r.TEXTURE_2D,Qe,se,_e.width,_e.height)}for(let _e=0,ze=be.length;_e<ze;_e++)re=be[_e],xe?Le&&t.texSubImage2D(r.TEXTURE_2D,_e,0,0,ie,D,re):t.texImage2D(r.TEXTURE_2D,_e,se,ie,D,re);T.generateMipmaps=!1}else if(xe){if(Me){let _e=Ve(q);t.texStorage2D(r.TEXTURE_2D,Qe,se,_e.width,_e.height)}Le&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ie,D,q)}else t.texImage2D(r.TEXTURE_2D,0,se,ie,D,q);S(T)&&T.mipmapsAutoUpdate===!0&&M(me),V.__version=K.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}u(Rt,"uploadTexture");function Ct(N,T,J){if(T.image.length!==6)return;let me=ot(N,T),U=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+J);let K=n.get(U);if(U.version!==K.__version||me===!0){t.activeTexture(r.TEXTURE0+J);let V=ct.getPrimaries(ct.workingColorSpace),H=T.colorSpace===$i?null:ct.getPrimaries(T.colorSpace),q=T.colorSpace===$i||V===H?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,q);let ie=T.isCompressedTexture||T.image[0].isCompressedTexture,D=T.image[0]&&T.image[0].isDataTexture,se=[];for(let ge=0;ge<6;ge++)!ie&&!D?se[ge]=v(T.image[ge],!0,i.maxCubemapSize):se[ge]=D?T.image[ge].image:T.image[ge],se[ge]=Ue(T,se[ge]);let re=se[0],be=s.convert(T.format,T.colorSpace),xe=s.convert(T.type),Me=E(T.internalFormat,be,xe,T.normalized,T.colorSpace),Le=T.isVideoTexture!==!0,Qe=K.__version===void 0||me===!0,_e=U.dataReady,ze=w(T,re);st(r.TEXTURE_CUBE_MAP,T);let Ke;if(T.isDepthTexture){if(Me=y(T.format===ds,T.type),Qe)if(Le)t.texStorage2D(r.TEXTURE_CUBE_MAP,1,Me,re.width,re.height);else for(let ge=0;ge<6;ge++)t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Me,re.width,re.height,0,be,xe,null)}else if(ie){Le&&Qe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ze,Me,re.width,re.height);for(let ge=0;ge<6;ge++){Ke=se[ge].mipmaps;for(let nt=0;nt<Ke.length;nt++){let Ht=Ke[nt];T.format!==Kn?be!==null?Le?_e&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,nt,0,0,Ht.width,Ht.height,be,Ht.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,nt,Me,Ht.width,Ht.height,0,Ht.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?_e&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,nt,0,0,Ht.width,Ht.height,be,xe,Ht.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,nt,Me,Ht.width,Ht.height,0,be,xe,Ht.data)}}}else{if(Ke=T.mipmaps,Le&&Qe){Ke.length>0&&ze++;let ge=Ve(se[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ze,Me,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(D){Le?_e&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,se[ge].width,se[ge].height,be,xe,se[ge].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Me,se[ge].width,se[ge].height,0,be,xe,se[ge].data);for(let nt=0;nt<Ke.length;nt++){let cr=Ke[nt].image[ge].image;Le?_e&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,nt+1,0,0,cr.width,cr.height,be,xe,cr.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,nt+1,Me,cr.width,cr.height,0,be,xe,cr.data)}}else{Le?_e&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,be,xe,se[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Me,be,xe,se[ge]);for(let nt=0;nt<Ke.length;nt++){let Ht=Ke[nt];Le?_e&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,nt+1,0,0,be,xe,Ht.image[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,nt+1,Me,be,xe,Ht.image[ge])}}}S(T)&&T.mipmapsAutoUpdate===!0&&M(r.TEXTURE_CUBE_MAP),K.__version=U.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}u(Ct,"uploadCubeTexture");function je(N,T,J,me,U,K){let V=s.convert(J.format,J.colorSpace),H=s.convert(J.type),q=E(J.internalFormat,V,H,J.normalized,J.colorSpace),ie=n.get(T),D=n.get(J);if(D.__renderTarget=T,!ie.__hasExternalTextures){let se=Math.max(1,T.width>>K),re=Math.max(1,T.height>>K);U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?t.texImage3D(U,K,q,se,re,T.depth,0,V,H,null):t.texImage2D(U,K,q,se,re,0,V,H,null)}t.bindFramebuffer(r.FRAMEBUFFER,N),ve(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,U,D.__webglTexture,0,it(T)):(U===r.TEXTURE_2D||U>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&U<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,me,U,D.__webglTexture,K),t.bindFramebuffer(r.FRAMEBUFFER,null)}u(je,"setupFrameBufferTexture");function kt(N,T,J){if(r.bindRenderbuffer(r.RENDERBUFFER,N),T.depthBuffer){let me=T.depthTexture,U=me&&me.isDepthTexture?me.type:null,K=y(T.stencilBuffer,U),V=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ve(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,it(T),K,T.width,T.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,it(T),K,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,K,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,V,r.RENDERBUFFER,N)}else{let me=T.textures;for(let U=0;U<me.length;U++){let K=me[U],V=s.convert(K.format,K.colorSpace),H=s.convert(K.type),q=E(K.internalFormat,V,H,K.normalized,K.colorSpace);ve(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,it(T),q,T.width,T.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,it(T),q,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,q,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}u(kt,"setupRenderBufferStorage");function tt(N,T,J){let me=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let U=n.get(T.depthTexture);U.__renderTarget=T;let K=me?T.depthTexture.image[0]:T.depthTexture.image;(!U.__webglTexture||K.width!==T.width||K.height!==T.height)&&(K.width=T.width,K.height=T.height,T.depthTexture.needsUpdate=!0),me?he(T.depthTexture,0):de(T.depthTexture,0);let V=U.__webglTexture,H=it(T),q=me?r.TEXTURE_CUBE_MAP_POSITIVE_X+J:r.TEXTURE_2D,ie=T.depthTexture.format===ds?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===is)ve(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,q,V,0,H):r.framebufferTexture2D(r.FRAMEBUFFER,ie,q,V,0);else if(T.depthTexture.format===ds)ve(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,q,V,0,H):r.framebufferTexture2D(r.FRAMEBUFFER,ie,q,V,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}u(tt,"setupDepthTexture");function Pt(N){let T=n.get(N),J=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){let me=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),me){let U=u(()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,me.removeEventListener("dispose",U)},"disposeEvent");me.addEventListener("dispose",U),T.__depthDisposeCallback=U}T.__boundDepthTexture=me}if(N.depthTexture&&!T.__autoAllocateDepthBuffer)if(J)for(let me=0;me<6;me++)tt(T.__webglFramebuffer[me],N,me);else N.texture.mipmaps.length>0?tt(T.__webglFramebuffer[0],N,0):tt(T.__webglFramebuffer,N,0);else if(J){T.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[me]),T.__webglDepthbuffer[me]===void 0)T.__webglDepthbuffer[me]=r.createRenderbuffer(),kt(T.__webglDepthbuffer[me],N,!1);else{let U=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=T.__webglDepthbuffer[me];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,U,r.RENDERBUFFER,K)}}else if(N.texture.mipmaps.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),kt(T.__webglDepthbuffer,N,!1);else{let U=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,U,r.RENDERBUFFER,K)}t.bindFramebuffer(r.FRAMEBUFFER,null)}u(Pt,"setupDepthRenderbuffer");function Ot(N,T,J){let me=n.get(N);T!==void 0&&je(me.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),J!==void 0&&Pt(N)}u(Ot,"rebindTextures");function lt(N){let T=N.texture,J=n.get(N),me=n.get(T);N.addEventListener("dispose",B),L(N);let U=N.textures,K=N.isWebGLCubeRenderTarget===!0,V=U.length>1;if(V||(me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture()),me.__version=T.version,o.memory.textures++),K){J.__webglFramebuffer=[];for(let H=0;H<6;H++)if(T.mipmaps.length>0){J.__webglFramebuffer[H]=[];for(let q=0;q<T.mipmaps.length;q++)J.__webglFramebuffer[H][q]=r.createFramebuffer()}else J.__webglFramebuffer[H]=r.createFramebuffer()}else{if(T.mipmaps.length>0){J.__webglFramebuffer=[];for(let H=0;H<T.mipmaps.length;H++)J.__webglFramebuffer[H]=r.createFramebuffer()}else J.__webglFramebuffer=r.createFramebuffer();if(V)for(let H=0,q=U.length;H<q;H++){let ie=n.get(U[H]);ie.__webglTexture===void 0&&(ie.__webglTexture=r.createTexture(),o.memory.textures++)}if(N.samples>0&&ve(N)===!1){J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let H=0;H<U.length;H++){let q=U[H];J.__webglColorRenderbuffer[H]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[H]);let ie=s.convert(q.format,q.colorSpace),D=s.convert(q.type),se=E(q.internalFormat,ie,D,q.normalized,q.colorSpace,N.isXRRenderTarget===!0),re=it(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,re,se,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+H,r.RENDERBUFFER,J.__webglColorRenderbuffer[H])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),kt(J.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){t.bindTexture(r.TEXTURE_CUBE_MAP,me.__webglTexture),st(r.TEXTURE_CUBE_MAP,T);for(let H=0;H<6;H++)if(T.mipmaps.length>0)for(let q=0;q<T.mipmaps.length;q++)je(J.__webglFramebuffer[H][q],N,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+H,q);else je(J.__webglFramebuffer[H],N,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+H,0);S(T)?M(r.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(V){for(let H=0,q=U.length;H<q;H++){let ie=U[H],D=n.get(ie),se=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(se=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,D.__webglTexture),st(se,ie),je(J.__webglFramebuffer,N,ie,r.COLOR_ATTACHMENT0+H,se,0),S(ie)&&M(se)}t.unbindTexture()}else{let H=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(H=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(H,me.__webglTexture),st(H,T),T.mipmaps.length>0)for(let q=0;q<T.mipmaps.length;q++)je(J.__webglFramebuffer[q],N,T,r.COLOR_ATTACHMENT0,H,q);else je(J.__webglFramebuffer,N,T,r.COLOR_ATTACHMENT0,H,0);S(T)?M(H):T.mipmaps.length>0&&r.texParameteri(H,r.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}N.depthBuffer&&Pt(N)}u(lt,"setupRenderTarget");function Y(N){let T=N.textures;for(let J=0,me=T.length;J<me;J++){let U=T[J];if(S(U)&&U.mipmapsAutoUpdate===!0){let K=R(N),V=n.get(U).__webglTexture;t.bindTexture(K,V),M(K),t.unbindTexture()}}}u(Y,"updateRenderTargetMipmap");let zt=[];function ft(N){if(N.samples>0){if(ve(N)===!1){let T=N.textures,J=N.width,me=N.height,U=r.COLOR_BUFFER_BIT,K=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,V=n.get(N),H=T.length>1;if(H)for(let ie=0;ie<T.length;ie++)t.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,V.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,V.__webglMultisampledFramebuffer),N.texture.mipmaps.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,V.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,V.__webglFramebuffer);for(let ie=0;ie<T.length;ie++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(U|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(U|=r.STENCIL_BUFFER_BIT)),H){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,V.__webglColorRenderbuffer[ie]);let D=n.get(T[ie]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,D,0)}r.blitFramebuffer(0,0,J,me,0,0,J,me,U,r.NEAREST),l===!0&&(zt.length=0,zt.push(r.COLOR_ATTACHMENT0+ie),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&zt.push(K),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,zt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),H)for(let ie=0;ie<T.length;ie++){t.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,V.__webglColorRenderbuffer[ie]);let D=n.get(T[ie]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,V.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.TEXTURE_2D,D,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,V.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let T=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}u(ft,"updateMultisampleRenderTarget");function it(N){return Math.min(i.maxSamples,N.samples)}u(it,"getRenderTargetSamples");function ve(N){let T=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}u(ve,"useMultisampledRTT");function bt(N){let T=o.render.frame;h.get(N)!==T&&(h.set(N,T),N.update())}u(bt,"updateVideoTexture");function Ue(N,T){let J=N.colorSpace,me=N.format,U=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||J!==Un&&J!==$i&&(ct.getTransfer(J)===wt?(me!==Kn||U!==Rn)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",J)),T}u(Ue,"verifyColorSpace");function Ve(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}u(Ve,"getDimensions"),this.allocateTextureUnit=ye,this.resetTextureUnits=ne,this.getTextureUnits=ae,this.setTextureUnits=pe,this.setTexture2D=de,this.setTexture2DArray=ue,this.setTexture3D=fe,this.setTextureCube=he,this.rebindTextures=Ot,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=je,this.useMultisampledRTT=ve,this.dispose=j}u(o3,"WebGLTextures");function a3(r,e){function t(n,i=$i){let s,o=ct.getTransfer(i);if(n===Rn)return r.UNSIGNED_BYTE;if(n===Lf)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Nf)return r.UNSIGNED_SHORT_5_5_5_1;if(n===F0)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===B0)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===O0)return r.BYTE;if(n===U0)return r.SHORT;if(n===Nl)return r.UNSIGNED_SHORT;if(n===If)return r.INT;if(n===Yi)return r.UNSIGNED_INT;if(n===si)return r.FLOAT;if(n===oi)return r.HALF_FLOAT;if(n===k0)return r.ALPHA;if(n===z0)return r.RGB;if(n===Kn)return r.RGBA;if(n===is)return r.DEPTH_COMPONENT;if(n===ds)return r.DEPTH_STENCIL;if(n===Df)return r.RED;if(n===Of)return r.RED_INTEGER;if(n===vr)return r.RG;if(n===Uf)return r.RG_INTEGER;if(n===Ff)return r.RGBA_INTEGER;if(n===Cu||n===Pu||n===Iu||n===Lu)if(o===wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Cu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Pu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Iu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Lu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Cu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Pu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Iu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Lu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Bf||n===kf||n===zf||n===Gf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Bf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===kf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Gf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vf||n===Hf||n===Wf||n===Xf||n===qf||n===Nu||n===Yf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Vf||n===Hf)return o===wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Wf)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Xf)return s.COMPRESSED_R11_EAC;if(n===qf)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Nu)return s.COMPRESSED_RG11_EAC;if(n===Yf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$f||n===Kf||n===Zf||n===Jf||n===jf||n===Qf||n===ep||n===tp||n===np||n===ip||n===rp||n===sp||n===op||n===ap)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===$f)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Kf)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zf)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jf)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jf)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qf)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ep)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tp)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===np)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ip)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===rp)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sp)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===op)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ap)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lp||n===cp||n===up)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===lp)return o===wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===up)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hp||n===dp||n===Du||n===fp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===hp)return s.COMPRESSED_RED_RGTC1_EXT;if(n===dp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Du)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ea?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return u(t,"convert"),{convert:t}}u(a3,"WebGLUtils");var l3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,c3=`
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

}`,ix=class ix{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new mu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new kn({vertexShader:l3,fragmentShader:c3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $e(new br(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};u(ix,"WebXRDepthSensing");var $b=ix,rx=class rx extends Xi{constructor(e,t){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,g=null,_=typeof XRWebGLBinding<"u",b=new $b,x={},v=t.getContextAttributes(),S=null,M=null,R=[],E=[],y=new Fe,w=null,L=null,I=new sn;I.viewport=new Tt;let O=new sn;O.viewport=new Tt;let B=[I,O],$=new rf,F=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let de=R[oe];return de===void 0&&(de=new vl,R[oe]=de),de.getTargetRaySpace()},this.getControllerGrip=function(oe){let de=R[oe];return de===void 0&&(de=new vl,R[oe]=de),de.getGripSpace()},this.getHand=function(oe){let de=R[oe];return de===void 0&&(de=new vl,R[oe]=de),de.getHandSpace()};function ce(oe){let de=E.indexOf(oe.inputSource);if(de===-1)return;let ue=R[de];ue!==void 0&&(ue.update(oe.inputSource,oe.frame,c||o),ue.dispatchEvent({type:oe.type,data:oe.inputSource}))}u(ce,"onSessionEvent");function G(){i.removeEventListener("select",ce),i.removeEventListener("selectstart",ce),i.removeEventListener("selectend",ce),i.removeEventListener("squeeze",ce),i.removeEventListener("squeezestart",ce),i.removeEventListener("squeezeend",ce),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",ee);for(let oe=0;oe<R.length;oe++){let de=E[oe];de!==null&&(E[oe]=null,R[oe].disconnect(de))}F=null,j=null,b.reset();for(let oe in x)delete x[oe];if(e.setRenderTarget(S),m=null,f=null,d=null,i=null,M=null,ye.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(y.width,y.height,!1),L!==null){let oe=L.camera;oe.fov=L.fov,oe.zoom=L.zoom,oe.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}u(G,"onSessionEnd"),this.setFramebufferScaleFactor=function(oe){s=oe,n.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){a=oe,n.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(oe){c=oe},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(oe){if(i=oe,i!==null){if(S=e.getRenderTarget(),i.addEventListener("select",ce),i.addEventListener("selectstart",ce),i.addEventListener("selectend",ce),i.addEventListener("squeeze",ce),i.addEventListener("squeezestart",ce),i.addEventListener("squeezeend",ce),i.addEventListener("end",G),i.addEventListener("inputsourceschange",ee),v.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(y),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,fe=null,he=null;v.depth&&(he=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=v.stencil?ds:is,fe=v.stencil?ea:Yi);let Ie={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Ie),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new ii(f.textureWidth,f.textureHeight,{format:Kn,type:Rn,depthTexture:new ss(f.textureWidth,f.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ue={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,ue),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new ii(m.framebufferWidth,m.framebufferHeight,{format:Kn,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ye.setContext(i),ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function ee(oe){for(let de=0;de<oe.removed.length;de++){let ue=oe.removed[de],fe=E.indexOf(ue);fe>=0&&(E[fe]=null,R[fe].disconnect(ue))}for(let de=0;de<oe.added.length;de++){let ue=oe.added[de],fe=E.indexOf(ue);if(fe===-1){for(let Ie=0;Ie<R.length;Ie++)if(Ie>=E.length){E.push(ue),fe=Ie;break}else if(E[Ie]===null){E[Ie]=ue,fe=Ie;break}if(fe===-1)break}let he=R[fe];he&&he.connect(ue)}}u(ee,"onInputSourcesChange");function Z(oe,de){de===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(de.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}u(Z,"updateCamera"),this.updateCamera=function(oe){if(i===null)return;let de=oe.near,ue=oe.far;b.texture!==null&&(b.depthNear>0&&(de=b.depthNear),b.depthFar>0&&(ue=b.depthFar)),$.near=O.near=I.near=de,$.far=O.far=I.far=ue,(F!==$.near||j!==$.far)&&(i.updateRenderState({depthNear:$.near,depthFar:$.far}),F=$.near,j=$.far),$.layers.mask=oe.layers.mask|6,I.layers.mask=$.layers.mask&-5,O.layers.mask=$.layers.mask&-3;let fe=oe.parent,he=$.cameras;Z($,fe);for(let Ie=0;Ie<he.length;Ie++)Z(he[Ie],fe);$.projectionMatrix.copy(I.projectionMatrix),$.projectionMatrixInverse.copy(I.projectionMatrixInverse),L===null&&oe.isPerspectiveCamera&&(L={camera:oe,fov:oe.fov,zoom:oe.zoom}),ne(oe,$,fe)};function ne(oe,de,ue){ue===null?oe.matrix.copy(de.matrixWorld):(oe.matrix.copy(ue.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(de.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(de.projectionMatrix),oe.projectionMatrixInverse.copy(de.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Go*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}u(ne,"updateUserCamera"),this.getCamera=function(){return $},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(oe){l=oe,f!==null&&(f.fixedFoveation=oe),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=oe)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh($)},this.getCameraTexture=function(oe){return x[oe]};let ae=null;function pe(oe,de){if(h=de.getViewerPose(c||o),g=de,h!==null){let ue=h.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let fe=!1;ue.length!==$.cameras.length&&($.cameras.length=0,fe=!0);for(let Re=0;Re<ue.length;Re++){let st=ue[Re],ot=null;if(m!==null)ot=m.getViewport(st);else{let dt=d.getViewSubImage(f,st);ot=dt.viewport,Re===0&&(e.setRenderTargetTextures(M,dt.colorTexture,dt.depthStencilTexture),e.setRenderTarget(M))}let Ye=B[Re];Ye===void 0&&(Ye=new sn,Ye.layers.enable(Re),Ye.viewport=new Tt,B[Re]=Ye),Ye.matrix.fromArray(st.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(st.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(ot.x,ot.y,ot.width,ot.height),Re===0&&($.matrix.copy(Ye.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),fe===!0&&$.cameras.push(Ye)}let he=i.enabledFeatures;if(he&&he.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let Re=d.getDepthInformation(ue[0]);Re&&Re.isValid&&Re.texture&&b.init(Re,i.renderState)}if(he&&he.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let Re=0;Re<ue.length;Re++){let st=ue[Re].camera;if(st){let ot=x[st];ot||(ot=new mu,x[st]=ot);let Ye=d.getCameraImage(st);ot.sourceTexture=Ye}}}}for(let ue=0;ue<R.length;ue++){let fe=E[ue],he=R[ue];fe!==null&&he!==void 0&&he.update(fe,de,c||o)}ae&&ae(oe,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),g=null}u(pe,"onAnimationFrame");let ye=new WS;ye.setAnimationLoop(pe),this.setAnimationLoop=function(oe){ae=oe},this.dispose=function(){}}};u(rx,"WebXRManager");var Kb=rx,u3=new He,ew=new Xe;ew.set(-1,0,0,0,1,0,0,0,1);function h3(r,e){function t(b,x){b.matrixAutoUpdate===!0&&b.updateMatrix(),x.value.copy(b.matrix)}u(t,"refreshTransformUniform");function n(b,x){x.color.getRGB(b.fogColor.value,J0(r)),x.isFog?(b.fogNear.value=x.near,b.fogFar.value=x.far):x.isFogExp2&&(b.fogDensity.value=x.density)}u(n,"refreshFogUniforms");function i(b,x,v,S,M){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?s(b,x):x.isMeshLambertMaterial?(s(b,x),x.envMap&&(b.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(s(b,x),d(b,x)):x.isMeshPhongMaterial?(s(b,x),h(b,x),x.envMap&&(b.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(s(b,x),f(b,x),x.isMeshPhysicalMaterial&&m(b,x,M)):x.isMeshMatcapMaterial?(s(b,x),g(b,x)):x.isMeshDepthMaterial?s(b,x):x.isMeshDistanceMaterial?(s(b,x),_(b,x)):x.isMeshNormalMaterial?s(b,x):x.isLineBasicMaterial?(o(b,x),x.isLineDashedMaterial&&a(b,x)):x.isPointsMaterial?l(b,x,v,S):x.isSpriteMaterial?c(b,x):x.isShadowMaterial?(b.color.value.copy(x.color),b.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}u(i,"refreshMaterialUniforms");function s(b,x){b.opacity.value=x.opacity,x.color&&b.diffuse.value.copy(x.color),x.emissive&&b.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(b.map.value=x.map,t(x.map,b.mapTransform)),x.alphaMap&&(b.alphaMap.value=x.alphaMap,t(x.alphaMap,b.alphaMapTransform)),x.bumpMap&&(b.bumpMap.value=x.bumpMap,t(x.bumpMap,b.bumpMapTransform),b.bumpScale.value=x.bumpScale,x.side===Gn&&(b.bumpScale.value*=-1)),x.normalMap&&(b.normalMap.value=x.normalMap,t(x.normalMap,b.normalMapTransform),b.normalScale.value.copy(x.normalScale),x.side===Gn&&b.normalScale.value.negate()),x.displacementMap&&(b.displacementMap.value=x.displacementMap,t(x.displacementMap,b.displacementMapTransform),b.displacementScale.value=x.displacementScale,b.displacementBias.value=x.displacementBias),x.emissiveMap&&(b.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,b.emissiveMapTransform)),x.specularMap&&(b.specularMap.value=x.specularMap,t(x.specularMap,b.specularMapTransform)),x.alphaTest>0&&(b.alphaTest.value=x.alphaTest);let v=e.get(x),S=v.envMap,M=v.envMapRotation;S&&(b.envMap.value=S,b.envMapRotation.value.setFromMatrix4(u3.makeRotationFromEuler(M)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&b.envMapRotation.value.premultiply(ew),b.reflectivity.value=x.reflectivity,b.ior.value=x.ior,b.refractionRatio.value=x.refractionRatio),x.lightMap&&(b.lightMap.value=x.lightMap,b.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,b.lightMapTransform)),x.aoMap&&(b.aoMap.value=x.aoMap,b.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,b.aoMapTransform))}u(s,"refreshUniformsCommon");function o(b,x){b.diffuse.value.copy(x.color),b.opacity.value=x.opacity,x.map&&(b.map.value=x.map,t(x.map,b.mapTransform))}u(o,"refreshUniformsLine");function a(b,x){b.dashSize.value=x.dashSize,b.totalSize.value=x.dashSize+x.gapSize,b.scale.value=x.scale}u(a,"refreshUniformsDash");function l(b,x,v,S){b.diffuse.value.copy(x.color),b.opacity.value=x.opacity,b.size.value=x.size*v,b.scale.value=S*.5,x.map&&(b.map.value=x.map,t(x.map,b.uvTransform)),x.alphaMap&&(b.alphaMap.value=x.alphaMap,t(x.alphaMap,b.alphaMapTransform)),x.alphaTest>0&&(b.alphaTest.value=x.alphaTest)}u(l,"refreshUniformsPoints");function c(b,x){b.diffuse.value.copy(x.color),b.opacity.value=x.opacity,b.rotation.value=x.rotation,x.map&&(b.map.value=x.map,t(x.map,b.mapTransform)),x.alphaMap&&(b.alphaMap.value=x.alphaMap,t(x.alphaMap,b.alphaMapTransform)),x.alphaTest>0&&(b.alphaTest.value=x.alphaTest)}u(c,"refreshUniformsSprites");function h(b,x){b.specular.value.copy(x.specular),b.shininess.value=Math.max(x.shininess,1e-4)}u(h,"refreshUniformsPhong");function d(b,x){x.gradientMap&&(b.gradientMap.value=x.gradientMap)}u(d,"refreshUniformsToon");function f(b,x){b.metalness.value=x.metalness,x.metalnessMap&&(b.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,b.metalnessMapTransform)),b.roughness.value=x.roughness,x.roughnessMap&&(b.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,b.roughnessMapTransform)),x.envMap&&(b.envMapIntensity.value=x.envMapIntensity)}u(f,"refreshUniformsStandard");function m(b,x,v){b.ior.value=x.ior,x.diffuseRoughness>0&&(b.diffuseRoughness.value=x.diffuseRoughness,x.diffuseRoughnessMap&&(b.diffuseRoughnessMap.value=x.diffuseRoughnessMap,t(x.diffuseRoughnessMap,b.diffuseRoughnessMapTransform))),x.sheen>0&&(b.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),b.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(b.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,b.sheenColorMapTransform)),x.sheenRoughnessMap&&(b.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,b.sheenRoughnessMapTransform))),x.clearcoat>0&&(b.clearcoat.value=x.clearcoat,b.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(b.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,b.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(b.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Gn&&b.clearcoatNormalScale.value.negate())),x.dispersion>0&&(b.dispersion.value=x.dispersion),x.retroreflectivity>0&&(b.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(b.iridescence.value=x.iridescence,b.iridescenceIOR.value=x.iridescenceIOR,b.iridescenceThicknessMinimum.value=x.iridescenceThicknessMinimum,b.iridescenceThicknessMaximum.value=x.iridescenceThicknessMaximum,x.iridescenceMap&&(b.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,b.iridescenceMapTransform)),x.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),x.transmission>0&&(b.transmission.value=x.transmission,b.transmissionSamplerMap.value=v.texture,b.transmissionSamplerSize.value.set(v.width,v.height),x.transmissionMap&&(b.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,b.transmissionMapTransform)),b.thickness.value=x.thickness,x.thicknessMap&&(b.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=x.attenuationDistance,b.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(b.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(b.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=x.specularIntensity,b.specularColor.value.copy(x.specularColor),x.specularColorMap&&(b.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,b.specularColorMapTransform)),x.specularIntensityMap&&(b.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,b.specularIntensityMapTransform))}u(m,"refreshUniformsPhysical");function g(b,x){x.matcap&&(b.matcap.value=x.matcap)}u(g,"refreshUniformsMatcap");function _(b,x){let v=e.get(x).light;b.referencePosition.value.setFromMatrixPosition(v.matrixWorld),b.nearDistance.value=v.shadow.camera.near,b.farDistance.value=v.shadow.camera.far}return u(_,"refreshUniformsDistance"),{refreshFogUniforms:n,refreshMaterialUniforms:i}}u(h3,"WebGLMaterials");function d3(r,e,t,n){let i={},s={};function o(v,S){let M=S.program;n.uniformBlockBinding(v,M,i[v.id])}u(o,"bind");function a(v,S){let M=i[v.id];M===void 0&&(g(v),M=l(v),i[v.id]=M,v.addEventListener("dispose",b));let R=S.program;n.updateUBOMapping(v,R);let E=e.render.frame;s[v.id]!==E&&(c(v),s[v.id]=E)}u(a,"update");function l(v){let S=r.createBuffer(),M=v.__size,R=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,M,R),r.bindBuffer(r.UNIFORM_BUFFER,null),S}u(l,"createBuffer");function c(v){let S=i[v.id],M=v.uniforms,R=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let E=0,y=M.length;E<y;E++){let w=M[E];if(Array.isArray(w))for(let L=0,I=w.length;L<I;L++)h(w[L],E,L,R);else h(w,E,0,R)}r.bindBuffer(r.UNIFORM_BUFFER,null)}u(c,"updateBufferData");function h(v,S,M,R){if(f(v,S,M,R)===!0){let E=v.__offset,y=v.value;if(Array.isArray(y)){let w=0;for(let L=0;L<y.length;L++){let I=y[L],O=_(I,!0);d(I,v.__data,w),w+=O.storage/Float32Array.BYTES_PER_ELEMENT}}else d(y,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,E,v.__data)}}u(h,"updateUniform");function d(v,S,M){typeof v=="number"||typeof v=="boolean"?S[M]=v:v.isMatrix3?(S[M]=v.elements[0],S[M+1]=v.elements[1],S[M+2]=v.elements[2],S[M+3]=0,S[M+4]=v.elements[3],S[M+5]=v.elements[4],S[M+6]=v.elements[5],S[M+7]=0,S[M+8]=v.elements[6],S[M+9]=v.elements[7],S[M+10]=v.elements[8],S[M+11]=0):ArrayBuffer.isView(v)?S.set(v.subarray(0,S.length-M),M):v.toArray(S,M)}u(d,"writeUniformValue");function f(v,S,M,R){let E=v.value,y=S+"_"+M;if(Array.isArray(E)){R[y]===void 0&&(R[y]=[]);let w=R[y],L=!1;for(let I=0;I<E.length;I++)m(E[I],w,I)===!0&&(L=!0);return L}return m(E,R,y)}u(f,"hasUniformChanged");function m(v,S,M){if(S[M]===void 0)return typeof v=="number"||typeof v=="boolean"?S[M]=v:ArrayBuffer.isView(v)?S[M]=v.slice():S[M]=v.clone(),!0;{let R=S[M];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return S[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}u(m,"hasValueChanged");function g(v){let S=v.uniforms,M=0,R=16;for(let y=0,w=S.length;y<w;y++){let L=Array.isArray(S[y])?S[y]:[S[y]];for(let I=0,O=L.length;I<O;I++){let B=L[I],$=Array.isArray(B.value)?B.value:[B.value],F=Array.isArray(S[y])||Array.isArray(B.value),j=M;for(let G=0,ee=$.length;G<ee;G++){let Z=$[G],ne=_(Z,F),ae=M%R,pe=ae%ne.boundary,ye=ae+pe;M+=pe,ye!==0&&R-ye<ne.storage&&(M+=R-ye),G===0&&(j=M),M+=ne.storage}let ce=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new ce((M-j)/Float32Array.BYTES_PER_ELEMENT),B.__offset=j}}let E=M%R;return E>0&&(M+=R-E),v.__size=M,v.__cache={},this}u(g,"prepareUniformsGroup");function _(v,S){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=16,M.storage=48):v.isMatrix4?(M.boundary=16,M.storage=64):v.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",v),S===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}u(_,"getUniformSize");function b(v){let S=v.target;S.removeEventListener("dispose",b),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}u(b,"onUniformsGroupsDispose");function x(){for(let v in i)r.deleteBuffer(i[v]);i={},s={}}return u(x,"dispose"),{bind:o,update:a,dispose:x}}u(d3,"WebGLUniformsGroups");var f3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Sr=null;function p3(){return Sr===null&&(Sr=new Vs(f3,16,16,vr,oi),Sr.name="DFG_LUT",Sr.minFilter=Gt,Sr.magFilter=Gt,Sr.wrapS=Xn,Sr.wrapT=Xn,Sr.generateMipmaps=!1,Sr.needsUpdate=!0),Sr}u(p3,"getDFGLUT");var sx=class sx{constructor(e={}){let{canvas:t=mS(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:m=Rn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let _=m,b=new Set([Ff,Uf,Of]),x=new Set([Rn,Yi,Nl,ea,Lf,Nf]),v=new Uint32Array(4),S=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},R=null,E=null,y=[],w=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_r,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,O=!1,B=null,$=null,F=null,j=null;this._outputColorSpace=Nt;let ce=0,G=0,ee=null,Z=-1,ne=null,ae=new Tt,pe=new Tt,ye=null,oe=new Se(0),de=0,ue=t.width,fe=t.height,he=1,Ie=null,qe=null,Re=new Tt(0,0,ue,fe),st=new Tt(0,0,ue,fe),ot=!1,Ye=new Hs,dt=new Xd,Rt=!1,Ct=!1,je=new He,kt=new X,tt=new Tt,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ot=!1;function lt(){return ee===null?he:1}u(lt,"getTargetPixelRatio");let Y=n;function zt(C,W){return t.getContext(C,W)}u(zt,"getContext");let ft,it,ve,bt,Ue,Ve,N,T,J,me,U,K,V,H,q,ie,D,se,re,be,xe,Me,Le;try{let C={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",ze,!1),t.addEventListener("webglcontextrestored",Ke,!1),t.addEventListener("webglcontextcreationerror",ge,!1),Y===null){let W="webgl2";if(Y=zt(W,C),Y===null)throw zt(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qe()}catch(C){throw t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),We("WebGLRenderer: "+C.message),C}function Qe(){ft=new EP(Y),ft.init(),xe=new a3(Y,ft),it=new pP(Y,ft,e,xe),ve=new s3(Y,ft),it.reversedDepthBuffer&&f&&ve.buffers.depth.setReversed(!0),$=Y.createFramebuffer(),F=Y.createFramebuffer(),j=Y.createFramebuffer(),bt=new RP(Y),Ue=new XI,Ve=new o3(Y,ft,ve,Ue,it,xe,bt),N=new wP(I),T=new PR(Y),Me=new dP(Y,T),J=new AP(Y,T,bt,Me),me=new PP(Y,J,T,Me,bt),se=new CP(Y,it,Ve),q=new mP(Ue),U=new WI(I,N,ft,it,Me,q),K=new h3(I,Ue),V=new YI,H=new QI(ft),D=new hP(I,N,ve,me,g,l),ie=new r3(I,me,it),Le=new d3(Y,bt,it,ve),re=new fP(Y,ft,bt),be=new TP(Y,ft,bt),bt.programs=U.programs,I.capabilities=it,I.extensions=ft,I.properties=Ue,I.renderLists=V,I.shadowMap=ie,I.state=ve,I.info=bt}u(Qe,"initGLContext"),_!==Rn&&(L=new LP(_,t.width,t.height,a,i,s));let _e=new Kb(I,Y);this.xr=_e,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){let C=ft.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=ft.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(C){C!==void 0&&(he=C,this.setSize(ue,fe,!1))},this.getSize=function(C){return C.set(ue,fe)},this.setSize=function(C,W,le=!0){if(_e.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}ue=C,fe=W,t.width=Math.floor(C*he),t.height=Math.floor(W*he),le===!0&&(t.style.width=C+"px",t.style.height=W+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(ue*he,fe*he).floor()},this.setDrawingBufferSize=function(C,W,le){ue=C,fe=W,he=le,t.width=Math.floor(C*le),t.height=Math.floor(W*le),this.setViewport(0,0,C,W)},this.setEffects=function(C){if(_===Rn){We("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let W=0;W<C.length;W++)if(C[W].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(ae)},this.getViewport=function(C){return C.copy(Re)},this.setViewport=function(C,W,le,Q){C.isVector4?Re.set(C.x,C.y,C.z,C.w):Re.set(C,W,le,Q),ve.viewport(ae.copy(Re).multiplyScalar(lt()).round())},this.getScissor=function(C){return C.copy(st)},this.setScissor=function(C,W,le,Q){C.isVector4?st.set(C.x,C.y,C.z,C.w):st.set(C,W,le,Q),ve.scissor(pe.copy(st).multiplyScalar(lt()).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(C){ve.setScissorTest(ot=C)},this.setOpaqueSort=function(C){Ie=C},this.setTransparentSort=function(C){qe=C},this.getClearColor=function(C){return C.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(C=!0,W=!0,le=!0){let Q=0;if(C){let te=!1;if(ee!==null){let Ee=ee.texture.format;te=b.has(Ee)}if(te){let Ee=ee.texture.type,Ne=x.has(Ee),we=D.getClearColor(),Ce=D.getClearAlpha(),Be=we.r,Ze=we.g,mt=we.b;Ne?(v[0]=Be,v[1]=Ze,v[2]=mt,v[3]=Ce,Y.clearBufferuiv(Y.COLOR,0,v)):(S[0]=Be,S[1]=Ze,S[2]=mt,S[3]=Ce,Y.clearBufferiv(Y.COLOR,0,S))}else Q|=Y.COLOR_BUFFER_BIT}W&&(Q|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),le&&(Q|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&Y.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),B=C},this.dispose=function(){t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),D.dispose(),V.dispose(),H.dispose(),Ve.dispose(),Ue.dispose(),N.dispose(),me.dispose(),J.dispose(),Me.dispose(),Le.dispose(),U.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Cv),_e.removeEventListener("sessionend",Pv),Ro.stop()};function ze(C){C.preventDefault(),nu("WebGLRenderer: Context Lost."),O=!0}u(ze,"onContextLost");function Ke(){nu("WebGLRenderer: Context Restored."),O=!1;let C=bt.autoReset,W=ie.enabled,le=ie.autoUpdate,Q=ie.needsUpdate,te=ie.type;Qe(),bt.autoReset=C,ie.enabled=W,ie.autoUpdate=le,ie.needsUpdate=Q,ie.type=te}u(Ke,"onContextRestore");function ge(C){We("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}u(ge,"onContextCreationError");function nt(C){let W=C.target;W.removeEventListener("dispose",nt),Ht(W)}u(nt,"onMaterialDispose");function Ht(C){cr(C),Ue.remove(C)}u(Ht,"deallocateMaterial");function cr(C){let W=Ue.get(C).programs;W!==void 0&&(W.forEach(function(le){U.releaseProgram(le)}),C.isShaderMaterial&&U.releaseShaderCache(C))}u(cr,"releaseMaterialProgramReferences"),this.renderBufferDirect=function(C,W,le,Q,te,Ee){W===null&&(W=Pt);let Ne=te.isMesh&&te.matrixWorld.determinantAffine()<0,we=hT(C,W,le,Q,te);ve.setMaterial(Q,Ne);let Ce=le.index,Be=1;if(Q.wireframe===!0){if(Ce=J.getWireframeAttribute(le),Ce===void 0)return;Be=2}let Ze=le.drawRange,mt=le.attributes.position,De=Ze.start*Be,gt=(Ze.start+Ze.count)*Be;Ee!==null&&(De=Math.max(De,Ee.start*Be),gt=Math.min(gt,(Ee.start+Ee.count)*Be)),Ce!==null?(De=Math.max(De,0),gt=Math.min(gt,Ce.count)):mt!=null&&(De=Math.max(De,0),gt=Math.min(gt,mt.count));let tn=gt-De;if(tn<0||tn===1/0)return;Me.setup(te,Q,we,le,Ce);let Lt,It=re;if(Ce!==null&&(Lt=T.get(Ce),It=be,It.setIndex(Lt)),te.isMesh)Q.wireframe===!0?(ve.setLineWidth(Q.wireframeLinewidth*lt()),It.setMode(Y.LINES)):It.setMode(Y.TRIANGLES);else if(te.isLine){let _n=Q.linewidth;_n===void 0&&(_n=1),ve.setLineWidth(_n*lt()),te.isLineSegments?It.setMode(Y.LINES):te.isLineLoop?It.setMode(Y.LINE_LOOP):It.setMode(Y.LINE_STRIP)}else te.isPoints?It.setMode(Y.POINTS):te.isSprite&&It.setMode(Y.TRIANGLES);if(te.isBatchedMesh)if(ft.get("WEBGL_multi_draw"))It.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{let _n=te._multiDrawStarts,Oe=te._multiDrawCounts,Dn=te._multiDrawCount,_t=Ce?T.get(Ce).bytesPerElement:1,Co=Ue.get(Q).currentProgram.getUniforms();for(let vn=0;vn<Dn;vn++)Co.setValue(Y,"_gl_DrawID",vn),It.render(_n[vn]/_t,Oe[vn])}else if(te.isInstancedMesh)It.renderInstances(De,tn,te.count);else if(le.isInstancedBufferGeometry){let _n=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Oe=Math.min(le.instanceCount,_n);It.renderInstances(De,tn,Oe)}else It.render(De,tn)};function Rv(C,W,le,Q){B!==null&&C.isNodeMaterial&&B.setObject(Q,C),Rt===!0&&q.setState(C,le,!1),C.transparent===!0&&C.side===rn&&C.forceSinglePass===!1?(C.side=Gn,C.needsUpdate=!0,Bc(C,W,Q),C.side=wi,C.needsUpdate=!0,Bc(C,W,Q),C.side=rn):Bc(C,W,Q)}u(Rv,"prepareMaterial"),this.compile=function(C,W,le=null){le===null&&(le=C),B!==null&&B.renderStart(C,W,le),E=H.get(le),E.init(W),w.push(E),le.traverseVisible(function(te){te.isLight&&te.layers.test(W.layers)&&(E.pushLight(te),te.castShadow&&E.pushShadow(te))}),C!==le&&C.traverseVisible(function(te){te.isLight&&te.layers.test(W.layers)&&(E.pushLight(te),te.castShadow&&E.pushShadow(te))}),E.setupLights(),B!==null&&B.updateLights(E.state.lightsArray),Ct=this.localClippingEnabled,Rt=q.init(this.clippingPlanes,Ct),Rt===!0&&q.setGlobalState(this.clippingPlanes,W),B!==null&&ie.render(E.state.shadowsArray,le,W);let Q=new Set;return C.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;let Ee=te.material;if(Ee)if(Array.isArray(Ee))for(let Ne=0;Ne<Ee.length;Ne++){let we=Ee[Ne];Rv(we,le,W,te),Q.add(we)}else Rv(Ee,le,W,te),Q.add(Ee)}),E=w.pop(),B!==null&&B.renderEnd(),Q},this.compileAsync=function(C,W,le=null){let Q=this.compile(C,W,le);return new Promise(te=>{function Ee(){if(Q.forEach(function(Ne){let Ce=Ue.get(Ne).currentProgram;(Ce===void 0||Ce.isReady())&&Q.delete(Ne)}),Q.size===0){te(C);return}setTimeout(Ee,10)}u(Ee,"checkMaterialsReady"),ft.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Nm=null;function cT(C){Nm&&Nm(C)}u(cT,"onAnimationFrame");function Cv(){Ro.stop()}u(Cv,"onXRSessionStart");function Pv(){Ro.start()}u(Pv,"onXRSessionEnd");let Ro=new WS;Ro.setAnimationLoop(cT),typeof self<"u"&&Ro.setContext(self),this.setAnimationLoop=function(C){Nm=C,_e.setAnimationLoop(C),C===null?Ro.stop():Ro.start()},_e.addEventListener("sessionstart",Cv),_e.addEventListener("sessionend",Pv),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;B!==null&&B.renderStart(C,W);let le=_e.enabled===!0&&_e.isPresenting===!0,Q=L!==null&&(ee===null||le)&&L.begin(I,ee);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(W),W=_e.getCamera()),C.isScene===!0&&C.onBeforeRender(I,C,W,ee),E=H.get(C,w.length),E.init(W),E.state.textureUnits=Ve.getTextureUnits(),w.push(E),je.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),W.isArrayCamera?dt.setFromArrayCamera(W):Ye.setFromProjectionMatrix(je,Si,W.reversedDepth),Ct=this.localClippingEnabled,Rt=q.init(this.clippingPlanes,Ct),R=V.get(C,y.length),R.init(),y.push(R),this.info.render.frame++,_e.enabled===!0&&_e.isPresenting===!0){let Ne=I.xr.getDepthSensingMesh();Ne!==null&&Dm(Ne,W,-1/0,I.sortObjects)}Dm(C,W,0,I.sortObjects),R.finish(),B!==null&&B.updateLights(E.state.lightsArray),I.sortObjects===!0&&R.sort(Ie,qe),Ot=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,Ot&&D.addToRenderList(R,C),this.info.autoReset===!0&&this.info.reset(),Rt===!0&&q.beginShadows();let te=E.state.shadowsArray;if(ie.render(te,C,W),Rt===!0&&q.endShadows(),(Q&&L.hasRenderPass())===!1){let Ne=R.opaque,we=R.transmissive;if(E.setupLights(),W.isArrayCamera){let Ce=W.cameras;if(we.length>0)for(let Be=0,Ze=Ce.length;Be<Ze;Be++){let mt=Ce[Be];Lv(Ne,we,C,mt)}Ot&&D.render(C);for(let Be=0,Ze=Ce.length;Be<Ze;Be++){let mt=Ce[Be];Iv(R,C,mt,mt.viewport)}}else we.length>0&&Lv(Ne,we,C,W),Ot&&D.render(C),Iv(R,C,W)}ee!==null&&G===0&&(Ve.updateMultisampleRenderTarget(ee),Ve.updateRenderTargetMipmap(ee)),Q&&L.end(I),C.isScene===!0&&C.onAfterRender(I,C,W),Me.resetDefaultState(),Z=-1,ne=null,w.pop(),w.length>0?(E=w[w.length-1],Ve.setTextureUnits(E.state.textureUnits),Rt===!0&&q.setGlobalState(I.clippingPlanes,E.state.camera)):E=null,y.pop(),y.length>0?R=y[y.length-1]:R=null,B!==null&&B.renderEnd()};function Dm(C,W,le,Q){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)le=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)E.pushLight(C),C.castShadow&&E.pushShadow(C);else if(C.isSprite){let Ne=W.isArrayCamera?dt:Ye;if(!C.frustumCulled||C.intersectsFrustum(Ne)){Q&&tt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(je);let we=me.update(C),Ce=C.material;Ce.visible&&R.push(C,we,Ce,le,tt.z,null,W)}}else if(C.isMesh||C.isLine||C.isPoints){let Ne=W.isArrayCamera?dt:Ye;if(!C.frustumCulled||C.intersectsFrustum(Ne)){let we=me.update(C),Ce=C.material;if(Q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),tt.copy(C.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),tt.copy(we.boundingSphere.center)),tt.applyMatrix4(C.matrixWorld).applyMatrix4(je)),Array.isArray(Ce)){let Be=we.groups;for(let Ze=0,mt=Be.length;Ze<mt;Ze++){let De=Be[Ze],gt=Ce[De.materialIndex];gt&&gt.visible&&R.push(C,we,gt,le,tt.z,De,W)}}else Ce.visible&&R.push(C,we,Ce,le,tt.z,null,W)}}}let Ee=C.children;for(let Ne=0,we=Ee.length;Ne<we;Ne++)Dm(Ee[Ne],W,le,Q)}u(Dm,"projectObject");function Iv(C,W,le,Q){let{opaque:te,transmissive:Ee,transparent:Ne}=C;E.setupLightsView(le),Rt===!0&&q.setGlobalState(I.clippingPlanes,le),Q&&ve.viewport(ae.copy(Q)),te.length>0&&nd(te,W,le),Ee.length>0&&nd(Ee,W,le),Ne.length>0&&nd(Ne,W,le),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}u(Iv,"renderScene");function Lv(C,W,le,Q){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Q.id]===void 0){let De=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Q.id]=new ii(1,1,{generateMipmaps:!0,type:De?oi:Rn,minFilter:Tn,samples:Math.max(4,it.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ct.workingColorSpace})}let Ee=E.state.transmissionRenderTarget[Q.id],Ne=Q.viewport||ae;Ee.setSize(Ne.z*I.transmissionResolutionScale,Ne.w*I.transmissionResolutionScale);let we=I.getRenderTarget(),Ce=I.getActiveCubeFace(),Be=I.getActiveMipmapLevel();I.setRenderTarget(Ee),I.getClearColor(oe),de=I.getClearAlpha(),de<1&&I.setClearColor(16777215,.5),I.clear(),Ot&&D.render(le);let Ze=I.toneMapping;I.toneMapping=_r;let mt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),E.setupLightsView(Q),Rt===!0&&q.setGlobalState(I.clippingPlanes,Q),nd(C,le,Q),Ve.updateMultisampleRenderTarget(Ee),Ve.updateRenderTargetMipmap(Ee),ft.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let gt=0,tn=W.length;gt<tn;gt++){let Lt=W[gt],{object:It,geometry:_n,material:Oe,group:Dn}=Lt;if(Oe.side===rn&&It.layers.test(Q.layers)){let _t=Oe.side;Oe.side=Gn,Oe.needsUpdate=!0,Nv(It,le,Q,_n,Oe,Dn),Oe.side=_t,Oe.needsUpdate=!0,De=!0}}De===!0&&(Ve.updateMultisampleRenderTarget(Ee),Ve.updateRenderTargetMipmap(Ee))}I.setRenderTarget(we,Ce,Be),I.setClearColor(oe,de),mt!==void 0&&(Q.viewport=mt),I.toneMapping=Ze}u(Lv,"renderTransmissionPass");function nd(C,W,le){let Q=W.isScene===!0?W.overrideMaterial:null;for(let te=0,Ee=C.length;te<Ee;te++){let Ne=C[te],{object:we,geometry:Ce,group:Be}=Ne,Ze=Ne.material;Ze.allowOverride===!0&&Q!==null&&(Ze=Q),we.layers.test(le.layers)&&Nv(we,W,le,Ce,Ze,Be)}}u(nd,"renderObjects");function Nv(C,W,le,Q,te,Ee){B!==null&&te.isNodeMaterial&&B.setObject(C,te),C.onBeforeRender(I,W,le,Q,te,Ee),C.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),te.onBeforeRender(I,W,le,Q,C,Ee),te.transparent===!0&&te.side===rn&&te.forceSinglePass===!1?(te.side=Gn,te.needsUpdate=!0,I.renderBufferDirect(le,W,Q,te,C,Ee),te.side=wi,te.needsUpdate=!0,I.renderBufferDirect(le,W,Q,te,C,Ee),te.side=rn):I.renderBufferDirect(le,W,Q,te,C,Ee),C.onAfterRender(I,W,le,Q,te,Ee)}u(Nv,"renderObject");function Dv(C){let W=0;for(let le of C)le.texture!==null&&W++;return W}u(Dv,"countLightProbeGrids");function Bc(C,W,le){W.isScene!==!0&&(W=Pt);let Q=Ue.get(C),te=E.state.lights,Ee=E.state.shadowsArray,Ne=te.state.version,we=U.getParameters(C,te.state,Ee,W,le,E.state.lightProbeGridArray),Ce=U.getProgramCacheKey(we),Be=Q.programs;Q.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?W.environment:null,Q.fog=W.fog;let Ze=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;Q.envMap=N.get(C.envMap||Q.environment,Ze),Q.envMapRotation=Q.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,Be===void 0&&(C.addEventListener("dispose",nt),Be=new Map,Q.programs=Be,Q.programVariants=new Map);let mt=Be.get(Ce);if(mt!==void 0){if(Q.currentProgram===mt&&Q.lightsStateVersion===Ne)return Uv(C,we),mt}else we.uniforms=U.getUniforms(C),B!==null&&C.isNodeMaterial&&B.build(C,le,we),C.onBeforeCompile(we,I),mt=U.acquireProgram(we,Ce),Be.set(Ce,mt),Q.uniforms=we.uniforms;let De=Q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(De.clippingPlanes=q.uniform),Uv(C,we),Q.needsLights=fT(C),Q.lightsStateVersion=Ne,Q.needsLights&&(De.ambientLightColor.value=te.state.ambient,De.lightProbe.value=te.state.probe,De.sunLights.value=te.state.sun,De.sunLightShadows.value=te.state.sunShadow,De.directionalLights.value=te.state.directional,De.directionalLightShadows.value=te.state.directionalShadow,De.spotLights.value=te.state.spot,De.spotLightShadows.value=te.state.spotShadow,De.rectAreaLights.value=te.state.rectArea,De.ltc_1.value=te.state.rectAreaLTC1,De.ltc_2.value=te.state.rectAreaLTC2,De.pointLights.value=te.state.point,De.pointLightShadows.value=te.state.pointShadow,De.hemisphereLights.value=te.state.hemi,De.sunShadowMatrix.value=te.state.sunShadowMatrix,De.sunShadowCascade.value=te.state.sunShadowCascade,De.directionalShadowMatrix.value=te.state.directionalShadowMatrix,De.spotLightMatrix.value=te.state.spotLightMatrix,De.spotLightMap.value=te.state.spotLightMap,De.pointShadowMatrix.value=te.state.pointShadowMatrix),Q.numLightProbeGrids=Dv(E.state.lightProbeGridArray),Q.currentProgram=mt,Q.uniformsList=null,mt}u(Bc,"getProgram");function uT(C,W,le,Q,te){let Ee=Ue.get(C),Ne=Ee.currentProgram.id+","+Q+","+te,we=Ee.programVariants.get(Ne);return we===void 0?(we=Bc(C,W,le),Ee.programVariants.set(Ne,we)):(Ee.currentProgram=we,Ee.uniformsList=null,Ee.outputColorSpace=Q,Ee.toneMapping=te),we}u(uT,"getProgramVariant");function Ov(C){if(C.uniformsList===null){let W=C.currentProgram.getUniforms();C.uniformsList=Ol.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}u(Ov,"getUniformList");function Uv(C,W){let le=Ue.get(C);le.outputColorSpace=W.outputColorSpace,le.batching=W.batching,le.batchingColor=W.batchingColor,le.instancing=W.instancing,le.instancingColor=W.instancingColor,le.instancingMorph=W.instancingMorph,le.skinning=W.skinning,le.morphTargets=W.morphTargets,le.morphNormals=W.morphNormals,le.morphColors=W.morphColors,le.morphTargetsCount=W.morphTargetsCount,le.numClippingPlanes=W.numClippingPlanes,le.numIntersection=W.numClipIntersection,le.vertexAlphas=W.vertexAlphas,le.vertexTangents=W.vertexTangents,le.toneMapping=W.toneMapping}u(Uv,"updateCommonMaterialProperties");function hT(C,W,le,Q,te){W.isScene!==!0&&(W=Pt),Ve.resetTextureUnits();let Ee=W.fog,Ne=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?W.environment:null,we=ee===null?I.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ct.workingColorSpace,Ce=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,Be=N.get(Q.envMap||Ne,Ce),Ze=Q.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,mt=!!le.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),De=!!le.morphAttributes.position,gt=!!le.morphAttributes.normal,tn=!!le.morphAttributes.color,Lt=_r;Q.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Lt=I.toneMapping);let It=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,_n=It!==void 0?It.length:0,Oe=Ue.get(Q),Dn=E.state.lights;if(Rt===!0&&(Ct===!0||C!==ne)){let Wt=C===ne&&Q.id===Z;q.setState(Q,C,Wt)}let _t=!1,Co=!1;Q.version===Oe.__version?Oe.needsLights&&Oe.lightsStateVersion!==Dn.state.version||te.isBatchedMesh&&Oe.batching===!1||!te.isBatchedMesh&&Oe.batching===!0||te.isBatchedMesh&&Oe.batchingColor===!0&&te._colorsTexture===null||te.isBatchedMesh&&Oe.batchingColor===!1&&te._colorsTexture!==null||te.isInstancedMesh&&Oe.instancing===!1||!te.isInstancedMesh&&Oe.instancing===!0||te.isSkinnedMesh&&Oe.skinning===!1||!te.isSkinnedMesh&&Oe.skinning===!0||te.isInstancedMesh&&Oe.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Oe.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Oe.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Oe.instancingMorph===!1&&te.morphTexture!==null||Oe.envMap!==Be||Q.fog===!0&&Oe.fog!==Ee||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==q.numPlanes||Oe.numIntersection!==q.numIntersection)||Oe.vertexAlphas!==Ze||Oe.vertexTangents!==mt||Oe.morphTargets!==De||Oe.morphNormals!==gt||Oe.morphColors!==tn||Oe.morphTargetsCount!==_n||Oe.numLightProbeGrids!==Dv(E.state.lightProbeGridArray)?_t=!0:(Oe.outputColorSpace!==we||Oe.toneMapping!==Lt)&&(Co=!0):(_t=!0,Oe.__version=Q.version);let vn=Oe.currentProgram;(_t===!0||Co===!0)&&(vn=Co===!0?uT(Q,W,te,we,Lt):Bc(Q,W,te),B&&Q.isNodeMaterial&&B.onUpdateProgram(Q,vn,Oe));let id=!1,Cs=!1,Po=!1,yt=vn.getUniforms(),xn=Oe.uniforms;if(ve.useProgram(vn.program)&&(id=!0,Cs=!0,Po=!0),Q.id!==Z&&(Z=Q.id,Cs=!0),id||ne!==C){ve.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),yt.setValue(Y,"projectionMatrix",C.projectionMatrix),yt.setValue(Y,"viewMatrix",C.matrixWorldInverse);let un=yt.map.cameraPosition;un!==void 0&&un.setValue(Y,kt.setFromMatrixPosition(C.matrixWorld)),it.logarithmicDepthBuffer&&yt.setValue(Y,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&yt.setValue(Y,"isOrthographic",C.isOrthographicCamera===!0),ne!==C&&(ne=C,Cs=!0,Po=!0)}if(Oe.needsLights&&(Dn.state.sunShadowMap.length>0&&yt.setValue(Y,"sunShadowMap",Dn.state.sunShadowMap,Ve),Dn.state.directionalShadowMap.length>0&&yt.setValue(Y,"directionalShadowMap",Dn.state.directionalShadowMap,Ve),Dn.state.spotShadowMap.length>0&&yt.setValue(Y,"spotShadowMap",Dn.state.spotShadowMap,Ve),Dn.state.pointShadowMap.length>0&&yt.setValue(Y,"pointShadowMap",Dn.state.pointShadowMap,Ve)),te.isSkinnedMesh){yt.setOptional(Y,te,"bindMatrix"),yt.setOptional(Y,te,"bindMatrixInverse");let Wt=te.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),yt.setValue(Y,"boneTexture",Wt.boneTexture,Ve))}te.isBatchedMesh&&(yt.setOptional(Y,te,"batchingTexture"),yt.setValue(Y,"batchingTexture",te._matricesTexture,Ve),yt.setOptional(Y,te,"batchingIdTexture"),yt.setValue(Y,"batchingIdTexture",te._indirectTexture,Ve),yt.setOptional(Y,te,"batchingColorTexture"),te._colorsTexture!==null&&yt.setValue(Y,"batchingColorTexture",te._colorsTexture,Ve));let zi=le.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&se.update(te,le,vn),(Cs||Oe.receiveShadow!==te.receiveShadow)&&(Oe.receiveShadow=te.receiveShadow,yt.setValue(Y,"receiveShadow",te.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&W.environment!==null&&(xn.envMapIntensity.value=W.environmentIntensity),xn.dfgLUT!==void 0&&(xn.dfgLUT.value=p3()),Cs){if(yt.setValue(Y,"toneMappingExposure",I.toneMappingExposure),Oe.needsLights&&dT(xn,Po),Ee&&Q.fog===!0&&K.refreshFogUniforms(xn,Ee),K.refreshMaterialUniforms(xn,Q,he,fe,E.state.transmissionRenderTarget[C.id]),Oe.needsLights&&Oe.numLightProbeGrids>0){let Wt=M,un=0;for(let Yr of E.state.lightProbeGridArray)Yr.texture!==null&&(Wt.textures[un]=Yr.texture,Wt.min[un]=Yr.boundingBox.min,Wt.max[un]=Yr.boundingBox.max,Wt.resolution[un]=Yr.resolution,un++);for(let Yr in Wt)Wt[Yr].length=un;xn.probesSH.value=Wt.textures,xn.probesMin.value=Wt.min,xn.probesMax.value=Wt.max,xn.probesResolution.value=Wt.resolution}Ol.upload(Y,Ov(Oe),xn,Ve)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Ol.upload(Y,Ov(Oe),xn,Ve),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&yt.setValue(Y,"center",te.center),yt.setValue(Y,"modelViewMatrix",te.modelViewMatrix),yt.setValue(Y,"normalMatrix",te.normalMatrix),yt.setValue(Y,"modelMatrix",te.matrixWorld),Q.uniformsGroups!==void 0){let Wt=Q.uniformsGroups;for(let un=0,Yr=Wt.length;un<Yr;un++){let Bv=Wt[un];Le.update(Bv,vn),Le.bind(Bv,vn)}}return vn}u(hT,"setProgram");function dT(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.sunLights.needsUpdate=W,C.sunLightShadows.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}u(dT,"markUniformsLightsNeedsUpdate");function fT(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}u(fT,"materialNeedsLights"),this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(C,W,le){let Q=Ue.get(C);Q.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),Ue.get(C.texture).__webglTexture=W,Ue.get(C.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:le,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,W){let le=Ue.get(C);le.__webglFramebuffer=W,le.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,le=0){ee=C,ce=W,G=le;let Q=null,te=!1,Ee=!1;if(C){let we=Ue.get(C);if(we.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(Y.FRAMEBUFFER,we.__webglFramebuffer),ae.copy(C.viewport),pe.copy(C.scissor),ye=C.scissorTest,ve.viewport(ae),ve.scissor(pe),ve.setScissorTest(ye),Z=-1;return}else if(we.__webglFramebuffer===void 0)Ve.setupRenderTarget(C);else if(we.__hasExternalTextures)Ve.rebindTextures(C,Ue.get(C.texture).__webglTexture,Ue.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Ze=C.depthTexture;if(we.__boundDepthTexture!==Ze){if(Ze!==null&&Ue.has(Ze)&&(C.width!==Ze.image.width||C.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ve.setupDepthRenderbuffer(C)}}let Ce=C.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(Ee=!0);let Be=Ue.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Be[W])?Q=Be[W][le]:Q=Be[W],te=!0):C.samples>0&&Ve.useMultisampledRTT(C)===!1?Q=Ue.get(C).__webglMultisampledFramebuffer:Array.isArray(Be)?Q=Be[le]:Q=Be,ae.copy(C.viewport),pe.copy(C.scissor),ye=C.scissorTest}else ae.copy(Re).multiplyScalar(he).floor(),pe.copy(st).multiplyScalar(he).floor(),ye=ot;if(le!==0&&(Q=$),ve.bindFramebuffer(Y.FRAMEBUFFER,Q)&&ve.drawBuffers(C,Q),ve.viewport(ae),ve.scissor(pe),ve.setScissorTest(ye),te){let we=Ue.get(C.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+W,we.__webglTexture,le)}else if(Ee){let we=W;for(let Ce=0;Ce<C.textures.length;Ce++){let Be=Ue.get(C.textures[Ce]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Ce,Be.__webglTexture,le,we)}}else if(C!==null&&le!==0){let we=Ue.get(C.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,we.__webglTexture,le)}Z=-1};function Fv(C){let W=Ue.get(C);return(W.__readFormat!==C.format||W.__readType!==C.type)&&(W.__readFormat=C.format,W.__readType=C.type,W.__formatReadable=it.textureFormatReadable(C.format),W.__typeReadable=it.textureTypeReadable(C.type)),W}u(Fv,"getReadableState"),this.readRenderTargetPixels=function(C,W,le,Q,te,Ee,Ne,we=0){if(!(C&&C.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Ue.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ce=Ce[Ne],Array.isArray(Ce)&&(Ce=Ce[0])),Ce){ve.bindFramebuffer(Y.FRAMEBUFFER,Ce);try{let Be=C.textures[we],Ze=Be.format,mt=Be.type;C.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+we);let De=Fv(Be);if(De.__formatReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-Q&&le>=0&&le<=C.height-te&&Y.readPixels(W,le,Q,te,xe.convert(Ze),xe.convert(mt),Ee)}finally{let Be=ee!==null?Ue.get(ee).__webglFramebuffer:null;ve.bindFramebuffer(Y.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(C,W,le,Q,te,Ee,Ne,we=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Ue.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ce=Ce[Ne],Array.isArray(Ce)&&(Ce=Ce[0])),Ce)if(W>=0&&W<=C.width-Q&&le>=0&&le<=C.height-te){ve.bindFramebuffer(Y.FRAMEBUFFER,Ce);let Be=C.textures[we],Ze=Be.format,mt=Be.type;C.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+we);let De=Fv(Be);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let gt=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,gt),Y.bufferData(Y.PIXEL_PACK_BUFFER,Ee.byteLength,Y.STREAM_READ),Y.readPixels(W,le,Q,te,xe.convert(Ze),xe.convert(mt),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);let tn=ee!==null?Ue.get(ee).__webglFramebuffer:null;ve.bindFramebuffer(Y.FRAMEBUFFER,tn);let Lt=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await bS(Y,Lt,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,gt),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Ee),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(gt),Y.deleteSync(Lt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,W=null,le=0){let Q=Math.pow(2,-le),te=Math.floor(C.image.width*Q),Ee=Math.floor(C.image.height*Q),Ne=W!==null?W.x:0,we=W!==null?W.y:0;Ve.setTexture2D(C,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,le,0,0,Ne,we,te,Ee),ve.unbindTexture()},this.copyTextureToTexture=function(C,W,le=null,Q=null,te=0,Ee=0){let Ne,we,Ce,Be,Ze,mt,De,gt,tn,Lt=C.isCompressedTexture?C.mipmaps[Ee]:C.image;if(le!==null)Ne=le.max.x-le.min.x,we=le.max.y-le.min.y,Ce=le.isBox3?le.max.z-le.min.z:1,Be=le.min.x,Ze=le.min.y,mt=le.isBox3?le.min.z:0;else{let yt=Math.pow(2,-te);Ne=Math.floor(Lt.width*yt),we=Math.floor(Lt.height*yt),C.isDataArrayTexture?Ce=Lt.depth:C.isData3DTexture?Ce=Math.floor(Lt.depth*yt):Ce=1,Be=0,Ze=0,mt=0}Q!==null?(De=Q.x,gt=Q.y,tn=Q.z):(De=0,gt=0,tn=0);let It=xe.convert(W.format),_n=xe.convert(W.type),Oe;W.isData3DTexture?(Ve.setTexture3D(W,0),Oe=Y.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(Ve.setTexture2DArray(W,0),Oe=Y.TEXTURE_2D_ARRAY):(Ve.setTexture2D(W,0),Oe=Y.TEXTURE_2D),ve.activeTexture(Y.TEXTURE0),ve.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,W.flipY),ve.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),ve.pixelStorei(Y.UNPACK_ALIGNMENT,W.unpackAlignment);let Dn=ve.getParameter(Y.UNPACK_ROW_LENGTH),_t=ve.getParameter(Y.UNPACK_IMAGE_HEIGHT),Co=ve.getParameter(Y.UNPACK_SKIP_PIXELS),vn=ve.getParameter(Y.UNPACK_SKIP_ROWS),id=ve.getParameter(Y.UNPACK_SKIP_IMAGES);ve.pixelStorei(Y.UNPACK_ROW_LENGTH,Lt.width),ve.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Lt.height),ve.pixelStorei(Y.UNPACK_SKIP_PIXELS,Be),ve.pixelStorei(Y.UNPACK_SKIP_ROWS,Ze),ve.pixelStorei(Y.UNPACK_SKIP_IMAGES,mt);let Cs=C.isDataArrayTexture||C.isData3DTexture,Po=W.isDataArrayTexture||W.isData3DTexture;if(C.isDepthTexture){let yt=Ue.get(C),xn=Ue.get(W),zi=Ue.get(yt.__renderTarget),Wt=Ue.get(xn.__renderTarget);ve.bindFramebuffer(Y.READ_FRAMEBUFFER,zi.__webglFramebuffer),ve.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let un=0;un<Ce;un++)Cs&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ue.get(C).__webglTexture,te,mt+un),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ue.get(W).__webglTexture,Ee,tn+un)),Y.blitFramebuffer(Be,Ze,Be+Ne,Ze+we,De,gt,De+Ne,gt+we,Y.DEPTH_BUFFER_BIT,Y.NEAREST);ve.bindFramebuffer(Y.READ_FRAMEBUFFER,null),ve.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(te!==0||C.isRenderTargetTexture||Ue.has(C)){let yt=Ue.get(C),xn=Ue.get(W);ve.bindFramebuffer(Y.READ_FRAMEBUFFER,F),ve.bindFramebuffer(Y.DRAW_FRAMEBUFFER,j);for(let zi=0;zi<Ce;zi++)Cs?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,yt.__webglTexture,te,mt+zi):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,yt.__webglTexture,te),Po?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,xn.__webglTexture,Ee,tn+zi):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,xn.__webglTexture,Ee),te!==0?Y.blitFramebuffer(Be,Ze,Be+Ne,Ze+we,De,gt,De+Ne,gt+we,Y.COLOR_BUFFER_BIT,Y.NEAREST):Po?Y.copyTexSubImage3D(Oe,Ee,De,gt,tn+zi,Be,Ze,Ne,we):Y.copyTexSubImage2D(Oe,Ee,De,gt,Be,Ze,Ne,we);ve.bindFramebuffer(Y.READ_FRAMEBUFFER,null),ve.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Po?C.isDataTexture||C.isData3DTexture?Y.texSubImage3D(Oe,Ee,De,gt,tn,Ne,we,Ce,It,_n,Lt.data):W.isCompressedArrayTexture?Y.compressedTexSubImage3D(Oe,Ee,De,gt,tn,Ne,we,Ce,It,Lt.data):Y.texSubImage3D(Oe,Ee,De,gt,tn,Ne,we,Ce,It,_n,Lt):C.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Ee,De,gt,Ne,we,It,_n,Lt.data):C.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Ee,De,gt,Lt.width,Lt.height,It,Lt.data):Y.texSubImage2D(Y.TEXTURE_2D,Ee,De,gt,Ne,we,It,_n,Lt);ve.pixelStorei(Y.UNPACK_ROW_LENGTH,Dn),ve.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,_t),ve.pixelStorei(Y.UNPACK_SKIP_PIXELS,Co),ve.pixelStorei(Y.UNPACK_SKIP_ROWS,vn),ve.pixelStorei(Y.UNPACK_SKIP_IMAGES,id),Ee===0&&W.generateMipmaps===!0&&W.mipmapsAutoUpdate===!0&&Y.generateMipmap(Oe),ve.unbindTexture()},this.initRenderTarget=function(C){Ue.get(C).__webglFramebuffer===void 0&&Ve.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Ve.setTextureCube(C,0):C.isData3DTexture?Ve.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Ve.setTexture2DArray(C,0):Ve.setTexture2D(C,0),ve.unbindTexture()},this.resetState=function(){ce=0,G=0,ee=null,ve.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};u(sx,"WebGLRenderer");var Mp=sx;var tw=u(r=>{let e=Math.min(1,Math.max(0,r))**.5;return 4*e*(1-e)},"swell"),m3=u(r=>1-(1-r)*(1-r),"easeOut"),Ap=u(r=>{let e=Math.sin(r*12.9898)*43758.5453;return e-Math.floor(e)},"share"),ox=u((r,e=0)=>{let t=Math.min(1,Math.max(0,r)),n=m3(t);return Array.from({length:7},(i,s)=>{if(s===0)return{at:[0,.08+.22*n,0],size:.09*tw(t),shade:0};let o=(s-1)/6*Math.PI*2+(Ap(e+s*7)-.5)*.6,a=(.12+Ap(e+s*13)*.08)*n,l=.05+(.08+Ap(e+s*17)*.1)*n;return{at:[Math.cos(o)*a,l,Math.sin(o)*a],size:(.055+Ap(e+s*19)*.03)*tw(t*1.1),shade:s%2===0?0:1}})},"puffAt");var Zn=["grass","plains","sand","rock","snow","forest","mud","tundra"],Ei={shore:-.03,deep:-.15,reach:3},Tp={relief:{base:0,roughness:0,shape:"flat"},colour:"#1b1f24",surface:"grass"},iw={relief:{base:.03,roughness:.015,shape:"rolling"},colour:"#6b8746",surface:"grass"},nw={Ocean:{relief:{base:Ei.deep,roughness:.003,shape:"rolling"},colour:"#33505f",surface:"sand"},Grassland:iw,Plains:{relief:{base:.025,roughness:.01,shape:"rolling"},colour:"#99935a",surface:"plains"},Desert:{relief:{base:.025,roughness:.025,shape:"rolling"},colour:"#c4ab78",surface:"sand"},Tundra:{relief:{base:.035,roughness:.015,shape:"rolling"},colour:"#8a8d78",surface:"tundra"},Arctic:{relief:{base:.05,roughness:.02,shape:"rolling"},colour:"#dfe6ea",surface:"snow"},Glacier:{relief:{base:.08,roughness:.03,shape:"rolling"},colour:"#e7eff3",surface:"snow"},Forest:{relief:{base:.04,roughness:.02,shape:"rolling"},colour:"#40583a",surface:"forest"},Jungle:{relief:{base:.03,roughness:.02,shape:"rolling"},colour:"#355a36",surface:"forest"},Swamp:{relief:{base:.005,roughness:.004,shape:"flat"},colour:"#4f5b3d",surface:"mud"},River:{relief:{base:.012,roughness:.006,shape:"rolling"},colour:"#5d7c4f",surface:"grass"},Hills:{relief:{base:.12,roughness:.04,shape:"ridged"},colour:"#7b7650",surface:"plains"},Mountains:{relief:{base:.35,roughness:.08,shape:"peaked"},colour:"#77726a",surface:"rock"}},ia=u(r=>r==="Unknown"?Tp:(Object.prototype.hasOwnProperty.call(nw,r)?nw[r]:void 0)??iw,"terrainEntry");var g3=u((r,e,t)=>{let n=Math.imul(r,374761393)+Math.imul(e,668265263)+Math.imul(t,1442695041)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296},"hash"),rw=Float64Array.from({length:32},(r,e)=>(e%2===0?Math.cos:Math.sin)(Math.floor(e/2)*(Math.PI/8))),sw=u(r=>r*r*r*(r*(r*6-15)+10),"fade"),Er=u(({cell:r,period:e,seed:t})=>{let n=Math.max(1,Math.round(e.u/r)),i=e.u/n,s=e.v===null?null:Math.max(1,Math.round(e.v/r)),o=e.v===null||s===null?r:e.v/s,a=u(h=>(h%n+n)%n,"wrapU"),l=u(h=>s===null?h:(h%s+s)%s,"wrapV"),c=u((h,d,f,m)=>{let g=Math.floor(g3(h,d,t)*16)*2;return(rw[g]??0)*f+(rw[g+1]??0)*m},"slope");return(h,d)=>{let f=h/i,m=d/o,g=Math.floor(f),_=Math.floor(m),b=f-g,x=m-_,v=sw(b),S=sw(x),M=a(g),R=a(g+1),E=l(_),y=l(_+1),w=c(M,E,b,x)+(c(R,E,b-1,x)-c(M,E,b,x))*v,L=c(M,y,b,x-1)+(c(R,y,b-1,x-1)-c(M,y,b,x-1))*v;return Math.max(-1,Math.min(1,(w+(L-w)*S)*1.4))}},"periodicNoise"),ai=u(r=>{let e=r.map((n,i)=>.5**i),t=e.reduce((n,i)=>n+i,0);return(n,i)=>r.reduce((s,o,a)=>s+o(n,i)*(e[a]??0),0)/t},"fractalNoise");var $s=128,Pp=.5,Rp=u(r=>(e,t)=>1-2*Math.abs(r(e,t)),"ridge"),b3={grass:{grain:u(({noise:r})=>ai([r(64,1),r(16,2),r(4,25)]),"grain"),shade:.3,bumps:u(({noise:r})=>ai([r(4,3),r(12,4)]),"bumps"),steep:2.5,rough:.9,roughVaries:.05},plains:{grain:u(({noise:r})=>ai([r(64,5),r(8,6)]),"grain"),shade:.3,bumps:u(({noise:r})=>ai([r(8,7),r(24,8)]),"bumps"),steep:2.2,rough:.92,roughVaries:.04},sand:{grain:u(({noise:r,wave:e,texels:t})=>{let n=e(7,3),i=r(64,9),s=r(32,10);return(o,a)=>.7*n(o+t(6)*i(o,a),a)+.3*s(o,a)},"grain"),shade:.12,bumps:u(({noise:r,wave:e,texels:t})=>{let n=e(7,3),i=r(64,9);return(s,o)=>n(s+t(6)*i(s,o),o)},"bumps"),steep:1.5,rough:.88,roughVaries:.04},rock:{grain:u(({noise:r})=>ai([Rp(r(24,11)),Rp(r(12,12)),r(6,13)]),"grain"),shade:.35,bumps:u(({noise:r})=>ai([Rp(r(24,11)),Rp(r(12,12)),r(6,13)]),"bumps"),steep:2.5,rough:.75,roughVaries:.1},snow:{grain:u(({noise:r})=>r(64,14),"grain"),shade:.06,bumps:u(({noise:r})=>r(32,15),"bumps"),steep:.8,rough:.55,roughVaries:.05},forest:{grain:u(({noise:r})=>ai([r(10,16),r(40,17)]),"grain"),shade:.3,bumps:u(({noise:r})=>r(8,18),"bumps"),steep:2,rough:.9,roughVaries:.05},mud:{grain:u(({noise:r})=>r(48,19),"grain"),shade:.25,bumps:u(({noise:r})=>ai([r(32,20),r(8,21)]),"bumps"),steep:1.2,rough:.65,roughVaries:.25},tundra:{grain:u(({noise:r})=>ai([r(4,22),r(48,23)]),"grain"),shade:.3,bumps:u(({noise:r})=>r(6,24),"bumps"),steep:2,rough:.9,roughVaries:.05}},Cp=u(r=>Math.max(0,Math.min(255,Math.round(r*255))),"byte"),x3=u((r=$s,[e,t]=[0,0])=>{let n=new Uint8Array(r*r*4*Zn.length),i={u:r,v:r};return Zn.forEach((s,o)=>{let a=b3[s],l=u((S,M)=>Er({cell:S*r/$s,period:i,seed:7919*(o+1)+M}),"noise"),c=u((S,M)=>(R,E)=>Math.sin(2*Math.PI*(S*R+M*E)/r),"wave"),h={noise:l,wave:c,texels:u(S=>S*r/$s,"texels")},d=a.grain(h),f=a.bumps(h),m=o*r*r*4,g=new Float32Array(r*r);for(let S=0;S<r;S++)for(let M=0;M<r;M++)g[S*r+M]=f(M+e,S+t);let _=u((S,M)=>g[(M+r)%r*r+(S+r)%r]??0,"height"),b=new Float32Array(r*r),x=0;for(let S=0;S<r;S++)for(let M=0;M<r;M++)b[S*r+M]=d(M+e,S+t),x+=b[S*r+M]??0;let v=x/(r*r);for(let S=0;S<r;S++)for(let M=0;M<r;M++){let R=m+(S*r+M)*4,E=(b[S*r+M]??0)-v,y=(_(M+1,S)-_(M-1,S))/2*(r/$s),w=(_(M,S+1)-_(M,S-1))/2*(r/$s);n[R]=Cp(a.shade*E+.5),n[R+1]=Cp((1-Math.max(-1,Math.min(1,y*a.steep)))/2),n[R+2]=Cp((1-Math.max(-1,Math.min(1,w*a.steep)))/2),n[R+3]=Cp(a.rough+a.roughVaries*E)}}),n},"surfaceTextures"),ow=x3;var Ki={rockFrom:.97,rockTo:.88,snowAtEquator:.4,snowAtPoles:.26,snowDeepens:.04,snowSlips:.85,snowHolds:.95,wetFrom:.1,wetTo:.4,wetUpTo:.03};var Zi=u(r=>Number.isInteger(r)?`${r}.0`:`${r}`,"number"),aw=`
float coverLatitude(float v, float extent) {
  float down = mod(v, extent);

  return min(1.0, abs(2.0 * down / extent - 1.0));
}

float coverRock(float upright) {
  return 1.0 - smoothstep(${Zi(Ki.rockTo)}, ${Zi(Ki.rockFrom)}, upright);
}

float coverSnow(float height, float upright, float latitude) {
  float line = ${Zi(Ki.snowAtEquator)} + (${Zi(Ki.snowAtPoles)} - ${Zi(Ki.snowAtEquator)}) * latitude;

  return smoothstep(line, line + ${Zi(Ki.snowDeepens)}, height) * smoothstep(${Zi(Ki.snowSlips)}, ${Zi(Ki.snowHolds)}, upright);
}

float coverWet(float height, float shore) {
  return smoothstep(${Zi(Ki.wetFrom)}, ${Zi(Ki.wetTo)}, shore) * (1.0 - smoothstep(0.0, ${Zi(Ki.wetUpTo)}, height));
}
`;var y3=u(r=>[r.u/Math.max(1,Math.round(r.u/Pp)),r.v===null?Pp:r.v/Math.max(1,Math.round(r.v/Pp))],"surfaceTile"),_3=Zn.map((r,e)=>`vec4 surface${e} = texture(surfaceDetail, vec3(surfaceAt, ${e}.0));
  surface += vSurfaces${e<4?"A":"B"}.${"xyzw"[e%4]} * surface${e};`).join(`
  `),v3=null,M3=u(()=>v3??=ow(),"made"),S3=u((r,e)=>{let t=new Vo(M3(),$s,$s,Zn.length),n=new jt({roughness:.92,vertexColors:!0}),[i,s]=y3(r);return t.format=Kn,t.type=Rn,t.wrapS=qn,t.wrapT=qn,t.magFilter=Gt,t.minFilter=Tn,t.generateMipmaps=!0,t.anisotropy=4,t.colorSpace=$i,t.needsUpdate=!0,n.onBeforeCompile=o=>{o.uniforms.surfaceDetail={value:t},o.uniforms.surfaceTile={value:new Fe(i,s)},o.uniforms.groundExtent={value:e},o.uniforms.rockColour={value:new Se(ia("Mountains").colour)},o.uniforms.snowColour={value:new Se(ia("Glacier").colour)},o.vertexShader=`attribute vec4 surfacesA;
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
${aw}
${o.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
  // Every surface sampled, so their smaller copies are chosen alike across where they meet.
  vec2 surfaceAt = vGround / surfaceTile;
  float surfaceTotal = dot(vSurfacesA, vec4(1.0)) + dot(vSurfacesB, vec4(1.0));
  vec4 surface = vec4(0.0);
  ${_3}
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
  normal = normalize(normal + surfaceTilt - dot(surfaceTilt, normal) * normal);`)}`},n.customProgramCacheKey=()=>"land-surfaces-cover",{material:n,detail:t}},"landMaterial"),lw=S3;function Ip(r,e=!1){let t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new Mt;l.morphTargetsRelative=a;let c=0;for(let h=0;h<r.length;++h){let d=r[h],f=0,m=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in d.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;s[g]===void 0&&(s[g]=[]),s[g].push(d.attributes[g]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in d.morphAttributes){if(!i.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[g].length!==r[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;o[g]===void 0&&(o[g]=[]),o[g].push(d.morphAttributes[g]),m++}if(m!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let g;if(t)g=d.index.count;else if(d.attributes.position!==void 0)g=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,g,h),c+=g}}if(t){let h=0,d=[];for(let f=0;f<r.length;++f){let m=r[f].index;for(let g=0;g<m.count;++g)d.push(m.getX(g)+h);h+=r[f].attributes.position.count}l.setIndex(d)}for(let h in s){let d=cw(s[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){let m=[];for(let _=0;_<o[h].length;++_)m.push(o[h][_][f]);let g=cw(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}u(Ip,"mergeGeometries");function cw(r){let e,t,n,i=-1,s=0;for(let c=0;c<r.length;++c){let h=r[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let o=new e(s),a=new xt(o,t,n),l=0;for(let c=0;c<r.length;++c){let h=r[c];if(h.isInterleavedBufferAttribute){let d=l/t;for(let f=0,m=h.count;f<m;f++)for(let g=0;g<t;g++){let _=h.getComponent(f,g);a.setComponent(f+d,g,_)}}else o.set(h.array,l);l+=h.count*t}return i!==void 0&&(a.gpuType=i),a}u(cw,"mergeAttributes");function ax(r,e){if(e===G0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Dl||e===Ou){let t=r.getIndex();if(t===null){let s=[],o=r.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)s.push(a);r.setIndex(s),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===Dl)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}u(ax,"toTrianglesDrawMode");var ra={radius:.42,thickness:.025},lx=ra.radius-ra.thickness,Lp=.07,Gu=.04,hx=.25,Ft=.004,cx=.08,zu=.012,Dp=.045,Op=.02,mw=625341585,w3=.18,E3=30,A3=5,T3=u(r=>Math.min(E3,A3+Math.max(0,r-1)*2),"lotsFor"),R3=u(r=>Math.floor(Math.max(0,r-1)/6),"tierFor"),dx=u(r=>{let e=2166136261;for(let t=0;t<r.length;t++)e=Math.imul(e^r.charCodeAt(t),16777619);return e>>>0},"citySeed"),gw=u((r,e,t,n=[])=>({seed:r,lots:T3(e),tier:R3(e),ways:[...t],sea:[...n]}),"planFor"),C3=u((r,e)=>{let[t,n]=r.centre,i=e.map(l=>{let[c,h]=r.toward(l),d=Math.hypot(c-t,h-n);return{offset:l,du:d===0?0:(c-t)/d,dv:d===0?0:(h-n)/d}}),s=i.reduce((l,{du:c})=>l+c,0),o=i.reduce((l,{dv:c})=>l+c,0),a=u(({du:l,dv:c})=>l*s+c*o,"most");return i.length===0?[]:[i.reduce((l,c)=>a(c)>a(l)?c:l).offset]},"quayOf"),Jn=u((r,e)=>{let t=Math.imul(r^Math.imul(e+1,2654435761),2246822507);return t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,(t>>>0)/4294967296},"share"),Vu=u((r,e,t)=>{let n=t[0]-e[0],i=t[1]-e[1],s=n*n+i*i;return s===0?0:((r[0]-e[0])*n+(r[1]-e[1])*i)/s},"along"),Bl=u(({at:[r,e],width:t,facing:n})=>{let i=t/2,s=[Math.cos(n)*i,-Math.sin(n)*i],o=[Math.sin(n)*i,Math.cos(n)*i];return[[r-s[0]-o[0],e-s[1]-o[1]],[r+s[0]-o[0],e+s[1]-o[1]],[r+s[0]+o[0],e+s[1]+o[1]],[r-s[0]+o[0],e-s[1]+o[1]]]},"footprintOf"),P3=u(([r,e])=>{let t=Math.hypot(e[0]-r[0],e[1]-r[1]),n=-(e[1]-r[1])/t*(Gu/2),i=(e[0]-r[0])/t*(Gu/2);return[[r[0]+n,r[1]+i],[e[0]+n,e[1]+i],[e[0]-n,e[1]-i],[r[0]-n,r[1]-i]]},"stripOf"),Up=u((r,e,t)=>[r,e].some(n=>n.some((i,s)=>{let o=n[(s+1)%n.length],a=Math.hypot(o[0]-i[0],o[1]-i[1]),l=-(o[1]-i[1])/a,c=(o[0]-i[0])/a,h=u(m=>m.map(([g,_])=>g*l+_*c),"onto"),d=h(r),f=h(e);return Math.min(...f)-Math.max(...d)>=t||Math.min(...d)-Math.max(...f)>=t})),"apart"),Fl=u((r,e)=>{let[t,n,,i]=e,s=Vu(r,t,n),o=Vu(r,t,i),a=Math.hypot(n[0]-t[0],n[1]-t[1]);return Math.hypot(Math.max(0,-s,s-1),Math.max(0,-o,o-1))*a},"fromFootprint"),bw=u((r,{seed:e,lots:t,tier:n,ways:i,sea:s},o)=>{let[a,l]=r.centre,c=[...i,...C3(r,s)].flatMap(b=>{let[x,v]=r.toward(b),S=[(a+x)/2,(l+v)/2],M=S[0]-a,R=S[1]-l,E=Math.hypot(M,R);return E===0?[]:[[[a+M/E*Lp,l+R/E*Lp],S]]}),h=c.map(P3),d=u((b,x)=>{let v=c.map(([S,M])=>{let R=Vu(b,S,M),E=[S[0]+(M[0]-S[0])*R,S[1]+(M[1]-S[1])*R];return{t:R,near:E,off:Math.hypot(E[0]-b[0],E[1]-b[1])}}).filter(({t:S,off:M})=>S>=0&&S<=1&&M<=Gu/2+x+Ft&&M>0).sort((S,M)=>S.off-M.off)[0];return v===void 0?Math.atan2(a-b[0],l-b[1]):Math.atan2(v.near[0]-b[0],v.near[1]-b[1])},"facingAt"),f=Math.ceil(lx/cx),m=[];for(let b=-f;b<=f;b++)for(let x=-f;x<=f;x++){let v=(b+f)*(f*2+1)+(x+f),S=[a+x*cx+(Jn(e,v*4)-.5)*2*zu,l+b*cx+(Jn(e,v*4+1)-.5)*2*zu],M=Math.hypot(S[0]-a,S[1]-l),R=Dp+Jn(e,v*4+2)*Op;M>lx||!r.owns(S[0],S[1])||m.push({at:S,width:R,facing:d(S,R),roof:Jn(e^mw,v),storeys:1+(M<w3?n:0)+(Jn(e,v*4+3)<.2?1:0),order:M+Jn(e,v*4+3)*.03})}m.sort((b,x)=>b.order-x.order);let g=[],_=[];return m.forEach(({at:b,width:x,facing:v,storeys:S,roof:M})=>{let R=Bl({at:b,width:x,facing:v});R.every(([E,y])=>Math.hypot(E-a,y-l)<=lx-Ft)&&Fl([a,l],R)>=Lp+Ft&&Fl(o,R)>=hx+Ft&&h.every(E=>Up(R,E,Ft))&&_.every(E=>Up(R,E,Ft))&&(g.push({at:b,width:x,facing:v,storeys:S,roof:M}),_.push(R))}),{plaza:{at:[a,l],radius:Lp},streets:c,lots:g.slice(0,t)}},"sprawl"),uw=4,I3=.62,L3=.05,xw=12,ux=.085,Np=.055,N3=.13,hw=32,D3=1821285621,yw=u(r=>r<uw?0:Math.min(xw,r-uw+1),"suburbStepsFor"),O3=u(r=>r<=0?0:I3+(Math.min(r,xw)-1)*L3,"suburbReach"),U3=u(r=>1-.55*Math.min(1,Math.max(0,(r-.5)/.7)),"builtShare"),dw=u(([r,e],t)=>{let n=Math.hypot(e[0]-r[0],e[1]-r[1]),i=-(e[1]-r[1])/n*t,s=(e[0]-r[0])/n*t;return[[r[0]+i,r[1]+s],[e[0]+i,e[1]+s],[e[0]-i,e[1]-s],[r[0]-i,r[1]-s]]},"strip"),fw=u(r=>r.slice(1).map((e,t)=>[r[t],e]).filter(([e,t])=>Math.hypot(t[0]-e[0],t[1]-e[1])>0),"piecesOf"),pw=u((r,e,t)=>Math.min(...e.map(([n])=>n))-Math.max(...r.map(([n])=>n))>=t||Math.min(...r.map(([n])=>n))-Math.max(...e.map(([n])=>n))>=t||Math.min(...e.map(([,n])=>n))-Math.max(...r.map(([,n])=>n))>=t||Math.min(...r.map(([,n])=>n))-Math.max(...e.map(([,n])=>n))>=t,"boxesApart"),_w=u((r,{seed:e,steps:t,city:n},i)=>{let s=O3(t);if(s===0)return[];let[o,a]=r.centre,l=r.toward(n),c=e^Math.imul(D3,(n[0]+7)*31+(n[1]+7)),h=i.runs.flatMap(({points:E})=>fw(E)),d=[...h.map(E=>({line:E,wide:Np})),...i.lanes.filter(([E,y])=>Math.hypot(y[0]-E[0],y[1]-E[1])>0).map(E=>({line:E,wide:N3}))],f=[...d.map(({line:E,wide:y})=>dw(E,y)),...i.lines.filter(([E,y])=>Math.hypot(y[0]-E[0],y[1]-E[1])>0).map(E=>dw(E,Np))],m=u((E,y)=>{let w=d.map(({line:[L,I],wide:O})=>{let B=Vu(E,L,I),$=[L[0]+(I[0]-L[0])*B,L[1]+(I[1]-L[1])*B];return{t:B,near:$,off:Math.hypot($[0]-E[0],$[1]-E[1]),wide:O}}).filter(({t:L,off:I,wide:O})=>L>=0&&L<=1&&I<=O+y+Ft&&I>0).sort((L,I)=>L.off-I.off)[0];return w===void 0?Math.atan2(l[0]-E[0],l[1]-E[1]):Math.atan2(w.near[0]-E[0],w.near[1]-E[1])},"facingAt"),g=Math.ceil(.75/ux),_=[],b=u(E=>Dp+Jn(c,E*5+2)*Op,"widthOf"),x=u(E=>Math.min(1/0,...h.map(([y,w])=>{let L=Math.max(0,Math.min(1,Vu(E,y,w)));return Math.hypot(y[0]+(w[0]-y[0])*L-E[0],y[1]+(w[1]-y[1])*L-E[1])})),"fromRuns"),v=u((E,y,w)=>{let L=Math.hypot(y[0]-l[0],y[1]-l[1]),I=L+Jn(c,E*5+3)*.03,O=b(E);I<=s&&Jn(c,E*5+4)<U3(L)&&r.owns(y[0],y[1])&&(!w||x(y)>=Np+Ft*2+Dp+Op)&&_.push({at:y,width:O,facing:m(y,O),roof:Jn(c^mw,E),storeys:1+(Jn(c,E*5+3)<.15?1:0),order:I})},"consider");for(let E=-g;E<=g;E++)for(let y=-g;y<=g;y++){let w=(E+g)*(g*2+1)+(y+g);v(w,[o+y*ux+(Jn(c,w*5)-.5)*2*zu,a+E*ux+(Jn(c,w*5+1)-.5)*2*zu],!0)}i.runs.forEach(({key:E,points:y})=>{let w=fw(y).map(([O,B])=>({from:O,to:B,length:Math.hypot(B[0]-O[0],B[1]-O[1])})),L=w.reduce((O,B)=>O+B.length,0),I=Math.min(hw,Math.floor(L/(Dp+Op+Ft*2)));for(let O=0;O<I;O++)[1,-1].forEach((B,$)=>{let F=(g*2+1)**2+(E*hw+O)*2+$,j=Np+b(F)/2+Ft*2,ce=(O+.5)/I*L+(Jn(c,F*5)-.5)*zu;for(let[G,{from:ee,to:Z,length:ne}]of w.entries()){if(ce<=ne||G===w.length-1){let ae=(Z[0]-ee[0])/ne,pe=(Z[1]-ee[1])/ne;v(F,[ee[0]+ae*ce-pe*j*B,ee[1]+pe*ce+ae*j*B],!1);break}ce-=ne}})}),_.sort((E,y)=>E.order-y.order);let S=u(([E,y],w)=>(Math.hypot(E-w[0],y-w[1])**2-Math.hypot(E-l[0],y-l[1])**2)/(2*Math.hypot(w[0]-l[0],w[1]-l[1])),"nearer"),M=[],R=[];return _.forEach(({at:E,width:y,facing:w,storeys:L,roof:I})=>{let O=Bl({at:E,width:y,facing:w});Bl({at:E,width:y+Ft*2,facing:w}).every(([B,$])=>r.owns(B,$))&&i.others.every(B=>O.every($=>S($,B)>=Ft/2))&&Fl(l,O)>=ra.radius+ra.thickness+Ft&&i.stands.every(B=>Fl(B,O)>=hx+Ft)&&Fl(r.centre,O)>=hx+Ft&&[E,...O].every(([B,$])=>(i.ground?.(B,$)??0)>=0)&&i.taken.every(([B,$,F])=>Fl([B,$],O)>=F+Ft)&&f.every(B=>pw(O,B,Ft)||Up(O,B,Ft))&&R.every(B=>pw(O,B,Ft)||Up(O,B,Ft))&&(M.push({at:E,width:y,facing:w,storeys:L,roof:I}),R.push(O))}),M},"suburb");var vw="#c79a72",F3="#5a4a3a";var Pn="#7a5532",mx="#5f6266",Mw="#8a8f96",Ji="#5d6447",fx="#e8e0cc",ww="#6e4b2f",sa="#8a8580",Sw="#5b3e27",kl="#7d858c",B3=new X(0,1,0),Te=new gr(1,1,1),dn=new Bn(.5,.5,1,10),oa=new qi(.5,1,10),zl=new qs(.5,10,8),bx=class bx{constructor(){this.parts=[]}add(e){return this.parts.push(e),this}addAll(e,t,n=0){let i=Math.cos(n),s=Math.sin(n);return e.parts.forEach(o=>{let[a,l,c]=o.at;this.parts.push({...o,at:[t[0]+a*i+c*s,t[1]+l,t[2]-a*s+c*i],yaw:(o.yaw??0)+n})}),this}};u(bx,"Parts");var fn=bx,k3=u((r,e,t)=>{switch(r){case"ancient":t.add({shape:zl,colour:e[1],at:[0,.172,0],size:[.048,.03,.048]});break;case"medieval":t.add({shape:oa,colour:mx,at:[0,.188,0],size:[.05,.04,.05]});break;case"renaissance":t.add({shape:Te,colour:"#2a2a2a",at:[0,.178,0],size:[.06,.016,.06]});break;case"industrial":t.add({shape:dn,colour:e[0],at:[0,.18,0],size:[.046,.022,.046]});break;default:t.add({shape:zl,colour:Ji,at:[0,.172,0],size:[.052,.034,.052]})}},"headgear"),z3=u((r,e,t,n)=>{switch(r){case"club":n.add({shape:dn,colour:Pn,at:[.04,.1,.01],size:[.014,.08,.014],turn:[0,0,.5]});break;case"spear":n.add({shape:dn,colour:Pn,at:[.04,.12,0],size:[.006,.2,.006]}),n.add({shape:oa,colour:mx,at:[.04,.23,0],size:[.012,.025,.012]});break;case"pike":n.add({shape:dn,colour:Pn,at:[.04,.15,0],size:[.006,.28,.006]}),n.add({shape:oa,colour:Mw,at:[.04,.3,0],size:[.012,.03,.012]});break;case"sword":n.add({shape:Te,colour:Mw,at:[.045,.12,.012],size:[.008,.07,.004],turn:[.3,0,0]});break;case"bow":n.add({shape:Te,colour:Pn,at:[-.04,.11,.02],size:[.006,.11,.006]});break;case"lance":n.add({shape:dn,colour:Pn,at:[.04,.14,.05],size:[.006,.24,.006],turn:[1.1,0,0]});break;case"musket":case"rifle":n.add({shape:Te,colour:r==="rifle"?"#3a3a3a":Pn,at:[.03,.12,.02],size:[.008,.11,.01],turn:[0,0,.4]});break;case"case":n.add({shape:Te,colour:"#3b2a1e",at:[.042,.072,.008],size:[.03,.022,.009]});break;case"pack":n.add({shape:Te,colour:"#7a6a48",at:[0,.115,-.025],size:[.042,.05,.022]}).add({shape:dn,colour:Pn,at:[.042,.1,.012],size:[.006,.19,.006]});break;default:}e==="ancient"&&(r==="spear"||r==="sword")&&n.add({shape:dn,colour:t[1],at:[-.035,.1,.012],size:[.05,.008,.05],turn:[Math.PI/2,0,.2]})},"carried"),G3={snow:{coat:"#e8eaec",legs:"#d4d7da"},irregular:{coat:"#6a5a40",legs:"#4a4036"}},gx=u((r,e,t,{legs:n=!0,dress:i}={})=>{let s=new fn,o=i===void 0?void 0:G3[i],a=o?.coat??(r==="modern"?Ji:t[0]),l=o?.legs??(r==="ancient"?vw:r==="modern"?Ji:F3);return n&&(s.add({shape:Te,colour:l,at:[-.012,.04,0],size:[.018,.08,.02]}),s.add({shape:Te,colour:l,at:[.012,.04,0],size:[.018,.08,.02]})),s.add({shape:Te,colour:a,at:[0,.112,0],size:[.05,.065,.028]}),s.add({shape:Te,colour:t[1],at:[0,.088,0],size:[.052,.012,.03]}),s.add({shape:Te,colour:a,at:[-.032,.11,0],size:[.014,.055,.016]}),s.add({shape:Te,colour:a,at:[.032,.11,0],size:[.014,.055,.016]}),s.add({shape:zl,colour:vw,at:[0,.16,0],size:[.034,.038,.034]}),i==="snow"?s.add({shape:zl,colour:"#f2f3f4",at:[0,.172,-.002],size:[.044,.034,.044]}):i==="irregular"?s.add({shape:zl,colour:t[1],at:[0,.176,0],size:[.042,.016,.042]}):k3(r,t,s),i==="parachute"&&s.add({shape:Te,colour:"#4d5340",at:[0,.112,-.026],size:[.046,.06,.026]}),z3(e,r,t,s),s},"person"),Hu=u(r=>r<=1?[[0,0]]:r===2?[[-.045,0],[.045,.02]]:[[0,-.04],[-.06,.04],[.06,.04]],"formation"),px=u((r=ww)=>new fn().add({shape:Te,colour:r,at:[0,.09,0],size:[.05,.05,.14]}).add({shape:Te,colour:r,at:[0,.13,.08],size:[.03,.06,.03],turn:[.5,0,0]}).add({shape:Te,colour:r,at:[0,.155,.105],size:[.026,.026,.05]}).add({shape:Te,colour:r,at:[-.017,.035,.05],size:[.012,.07,.012]}).add({shape:Te,colour:r,at:[.017,.035,.05],size:[.012,.07,.012]}).add({shape:Te,colour:r,at:[-.017,.035,-.05],size:[.012,.07,.012]}).add({shape:Te,colour:r,at:[.017,.035,-.05],size:[.012,.07,.012]}),"horse"),V3=u((r,e,t)=>new fn().addAll(px(),[0,0,0]).add({shape:Te,colour:t[0],at:[0,.118,0],size:[.056,.01,.06]}).addAll(gx(r,e,t,{legs:!1}),[0,.04,0]),"rider"),H3=u(r=>new fn().add({shape:Te,colour:sa,at:[0,.12,0],size:[.09,.08,.17]}).add({shape:Te,colour:sa,at:[0,.14,.1],size:[.07,.07,.06]}).add({shape:dn,colour:sa,at:[0,.08,.14],size:[.016,.09,.016],turn:[.3,0,0]}).add({shape:Te,colour:sa,at:[-.03,.04,.05],size:[.025,.08,.025]}).add({shape:Te,colour:sa,at:[.03,.04,.05],size:[.025,.08,.025]}).add({shape:Te,colour:sa,at:[-.03,.04,-.05],size:[.025,.08,.025]}).add({shape:Te,colour:sa,at:[.03,.04,-.05],size:[.025,.08,.025]}).add({shape:Te,colour:r[0],at:[0,.18,-.01],size:[.07,.03,.07]}).add({shape:Te,colour:r[1],at:[0,.2,-.01],size:[.074,.008,.074]}),"elephant"),In=u((r,e=.05)=>({shape:dn,colour:Pn,at:r,size:[e,.01,e],turn:[0,0,Math.PI/2]}),"wheel"),W3=u((r,e,t)=>{if(e==="chariot")return new fn().addAll(px(),[0,0,.09]).add({shape:Te,colour:Pn,at:[0,.055,-.04],size:[.064,.035,.05]}).add({shape:Te,colour:r[0],at:[0,.075,-.016],size:[.066,.012,.006]}).add(In([-.042,.035,-.045],.065)).add(In([.042,.035,-.045],.065)).addAll(gx(t,"spear",r,{legs:!1}),[0,0,-.045]);let n=new fn().addAll(px(t==="ancient"?"#8a7a64":ww),[0,0,.1]).add({shape:Te,colour:Pn,at:[0,.07,-.06],size:[.07,.04,.1]}).add({shape:Te,colour:r[0],at:[0,.092,-.06],size:[.072,.008,.102]}).add(In([-.042,.03,-.03])).add(In([.042,.03,-.03])).add(In([-.042,.03,-.09])).add(In([.042,.03,-.09]));return e==="wagon"?n.add({shape:dn,colour:fx,at:[0,.1,-.06],size:[.07,.1,.07],turn:[Math.PI/2,0,0]}):n.add({shape:Te,colour:fx,at:[-.016,.112,-.04],size:[.032,.03,.04]}).add({shape:Te,colour:r[0],at:[.018,.11,-.08],size:[.03,.026,.036]}).add({shape:Te,colour:"#8a5a2a",at:[.014,.112,-.035],size:[.026,.03,.03]}),n},"cart"),X3=u((r,e,t)=>{if(r==="ancient"||r==="medieval")return new fn().add({shape:Te,colour:Pn,at:[0,.04,0],size:[.08,.025,.14]}).add({shape:Te,colour:Pn,at:[0,.09,-.02],size:[.012,.12,.012],turn:[-.7,0,0]}).add({shape:Te,colour:e[0],at:[0,.055,.05],size:[.082,.012,.03]}).add(In([-.045,.03,.04],.045)).add(In([.045,.03,.04],.045)).add(In([-.045,.03,-.04],.045)).add(In([.045,.03,-.04],.045));let n=t?.19:r==="renaissance"?.12:.16,i=r==="renaissance"?"#3d3a36":r==="modern"?Ji:mx;return new fn().add({shape:dn,colour:i,at:[0,.07,.04],size:[.024,n,.024],turn:[1.35,0,0]}).add({shape:Te,colour:r==="modern"?Ji:Pn,at:[0,.045,-.02],size:[.05,.03,.09]}).add({shape:Te,colour:e[0],at:[0,.064,-.02],size:[.052,.008,.06]}).add(In([-.04,.035,0],.07)).add(In([.04,.035,0],.07))},"siege"),q3=u((r,e,t)=>{if(r==="industrial")return new fn().add({shape:Te,colour:kl,at:[0,.07,-.03],size:[.08,.07,.12]}).add({shape:Te,colour:e[0],at:[0,.06,.07],size:[.07,.05,.05]}).add(In([-.045,.025,.06],.045)).add(In([.045,.025,.06],.045)).add(In([-.045,.025,-.06],.045)).add(In([.045,.025,-.06],.045));let n=new fn().add({shape:Te,colour:Ji,at:[0,.045,0],size:[.1,.05,.17]}).add({shape:Te,colour:"#2e2e2a",at:[-.055,.028,0],size:[.022,.05,.18]}).add({shape:Te,colour:"#2e2e2a",at:[.055,.028,0],size:[.022,.05,.18]}).add({shape:Te,colour:e[0],at:[0,.072,-.05],size:[.08,.006,.04]});return t?n.add({shape:Te,colour:Ji,at:[0,.088,-.01],size:[.07,.035,.08]}).add({shape:dn,colour:Ji,at:[0,.09,.08],size:[.014,.13,.014],turn:[Math.PI/2,0,0]}):n.add({shape:Te,colour:Ji,at:[0,.07,.06],size:[.09,.03,.05],turn:[.4,0,0]}),n},"vehicle"),Y3=u((r,e)=>{let t=r.large?1.25:1,n=.3*t,i=.07*t,s=new fn;switch(r.hull){case"oars":case"sail":{s.add({shape:Te,colour:Sw,at:[0,.03,0],size:[i,.045,n*.8]}).add({shape:oa,colour:Sw,at:[0,.03,n*.45],size:[i,.1,.045],turn:[Math.PI/2,0,0]}).add({shape:Te,colour:e[0],at:[0,.056,0],size:[i+.004,.008,n*.82]});let o=r.hull==="oars"?1:r.large?3:2;for(let a=0;a<o;a++){let l=(a-(o-1)/2)*.09*t;s.add({shape:dn,colour:Pn,at:[0,.14,l],size:[.008,.2,.008]}).add({shape:Te,colour:a===0?e[1]:fx,at:[0,.16,l],size:[i*1.3,.09,.005]})}return(r.guns??0)>0&&s.add({shape:Te,colour:"#1f1f1f",at:[0,.036,0],size:[i+.006,.009,n*.66]}),r.hull==="oars"&&s.add({shape:Te,colour:Pn,at:[-i*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,.4]}).add({shape:Te,colour:Pn,at:[i*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,-.4]}),s}case"submarine":return s.add({shape:dn,colour:"#33383d",at:[0,.018,0],size:[.05,n,.05],turn:[Math.PI/2,0,0]}).add({shape:Te,colour:"#33383d",at:[0,.055,.02],size:[.02,.04,.05]}).add({shape:Te,colour:e[0],at:[0,.078,.02],size:[.022,.006,.052]});case"carrier":return s.add({shape:Te,colour:kl,at:[0,.035,0],size:[i*1.1,.05,n*1.15]}).add({shape:Te,colour:"#55595e",at:[0,.062,0],size:[i*1.5,.008,n*1.2]}).add({shape:Te,colour:kl,at:[i*.55,.09,.02],size:[.02,.05,.06]}).add({shape:Te,colour:e[0],at:[i*.55,.12,.02],size:[.022,.008,.062]});default:return s.add({shape:Te,colour:r.era==="industrial"?"#4a4a48":kl,at:[0,.03,0],size:[i,.045,n*.85]}).add({shape:oa,colour:r.era==="industrial"?"#4a4a48":kl,at:[0,.03,n*.47],size:[i,.08,.045],turn:[Math.PI/2,0,0]}).add({shape:Te,colour:kl,at:[0,.075,-.02],size:[i*.6,.05,n*.3]}).add({shape:dn,colour:e[0],at:[0,.12,-.03],size:[.022,.05,.022]}).add({shape:Te,colour:e[1],at:[0,.056,0],size:[i+.004,.006,n*.86]}),[.3,-.34,.14].slice(0,r.guns??0).forEach(o=>{let a=o>0?1:-1;s.add({shape:Te,colour:"#5f666c",at:[0,.066,n*o],size:[.035,.02,.035]}).add({shape:dn,colour:"#5f666c",at:[0,.07,n*o+a*.04],size:[.008,.06,.008],turn:[Math.PI/2,0,0]})}),r.missiles&&[-1,1].forEach(o=>s.add({shape:Te,colour:"#4a5056",at:[o*i*.22,.072,-n*.3],size:[.022,.022,.05],turn:[-.5,0,0]})),s}},"ship"),$3=u((r,e)=>{let t=r.large?1.3:1,n=r.stealth?"#2c3034":r.large?"#6e7378":"#7d8890";return new fn().add({shape:dn,colour:n,at:[0,.3,0],size:[.03*t,.2*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:oa,colour:n,at:[0,.3,.12*t],size:[.03*t,.05*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:Te,colour:n,at:[0,.3,.01],size:[.26*t,.006,.05*t]}).add({shape:Te,colour:e[0],at:[0,.304,.01],size:[.06*t,.004,.052*t]}).add({shape:Te,colour:n,at:[0,.3,-.09*t],size:[.09*t,.005,.03*t]}).add({shape:Te,colour:e[1],at:[0,.325,-.09*t],size:[.005,.045,.03*t]})},"aircraft"),K3=u(r=>new fn().add({shape:zl,colour:Ji,at:[0,.27,.02],size:[.06,.055,.09]}).add({shape:Te,colour:Ji,at:[0,.275,-.08],size:[.015,.015,.12]}).add({shape:Te,colour:r[0],at:[0,.3,-.13],size:[.004,.04,.025]}).add({shape:Te,colour:"#2e2e2e",at:[0,.31,.02],size:[.24,.003,.012]}).add({shape:Te,colour:"#2e2e2e",at:[0,.31,.02],size:[.012,.003,.24]}),"helicopter"),Z3=u((r,e)=>{let t=e?1.4:1;return new fn().add({shape:dn,colour:"#d8d8d8",at:[0,.14*t,0],size:[.024*t,.18*t,.024*t]}).add({shape:oa,colour:e?"#c8a020":r[0],at:[0,.255*t,0],size:[.024*t,.05*t,.024*t]}).add({shape:Te,colour:r[1],at:[0,.06*t,0],size:[.07*t,.03*t,.004]}).add({shape:Te,colour:r[1],at:[0,.06*t,0],size:[.004,.03*t,.07*t]})},"missile"),Ew=u((r,e)=>{switch(r.shape){case"foot":{let t=new fn;return Hu(r.squad).forEach(([n,i],s)=>t.addAll(gx(r.era,r.gear??"none",e,{dress:r.dress}),[n,0,i],s*.3-.3)),t}case"mounted":{let t=new fn;return Hu(r.squad).forEach(([n,i])=>t.addAll(V3(r.era,r.gear??"none",e),[n*1.4,0,i])),t}case"elephant":return H3(e);case"cart":return W3(e,r.cart??"wagon",r.era);case"siege":return X3(r.era,e,r.large===!0);case"vehicle":return q3(r.era,e,r.large===!0);case"ship":return Y3(r,e);case"aircraft":return $3(r,e);case"helicopter":return K3(e);default:return Z3(e,r.large===!0)}},"figureParts"),J3=u(({at:r,size:e,turn:t=[0,0,0],yaw:n=0})=>new He().compose(new X(...r),new Jt().setFromAxisAngle(B3,n).multiply(new Jt().setFromEuler(new ri(...t))),new X(...e)),"partMatrix"),Fp=u(r=>{let e=r.map(n=>{let{shape:i,colour:s}=n,o=i.clone(),a=new Se(s),l=o.getAttribute("position").count,c=new Float32Array(l*3);for(let h=0;h<l;h++)c.set([a.r,a.g,a.b],h*3);return o.applyMatrix4(J3(n)),o.setAttribute("color",new xt(c,3)),o}),t=(e.length===0?null:Ip(e))??new Mt;return e.forEach(n=>n.dispose()),t.computeBoundingBox(),t.computeBoundingSphere(),t},"mergeParts"),Aw=u((r,e)=>Fp(Ew(r,e).parts),"figureGeometry"),j3=new Bn(.19,.2,1,28),Q3=new os(.22,.014,4,32),eL=new os(1,.03,3,40),tL="#dfe9ea",nL=[[.11,.2],[.16,.27]],Tw=u((r,e,{fortified:t,scale:n,stand:i,part:s="whole",ripples:o=!1})=>{let a=r.shape==="ship",l=a?0:i,c=s==="base"?[]:Ew(r,e).parts.map(h=>({...h,at:[h.at[0]*n,h.at[1]*n+l,h.at[2]*n],size:[h.size[0]*n,h.size[1]*n,h.size[2]*n]}));if(s==="figures")return Fp(c);if(a||c.push({shape:j3,colour:e[1],at:[0,i/2,0],size:[1,i,1]}),a&&o){let h=(r.large?1.25:1)*n;nL.forEach(([d,f])=>c.push({shape:eL,colour:tL,at:[0,.006,0],size:[d*h,f*h,.15],turn:[Math.PI/2,0,0]}))}return t&&c.push({shape:Q3,colour:"#b5ab98",at:[0,l+.015,0],size:[1,1,2.5],turn:[Math.PI/2,0,0]}),Fp(c)},"unitBodyGeometry"),iL=new os(ra.radius,ra.thickness,6,24),Rw=u(()=>Fp([{shape:iL,colour:"#8d8577",at:[0,.02,0],size:[1,1,2.5],turn:[Math.PI/2,0,0]}]),"wallsGeometry");function Ks(r){let e=new Map,t=new Map,n=r.clone();return Cw(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let s=i,o=e.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}u(Ks,"clone");function Cw(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)Cw(r.children[n],e.children[n],t)}u(Cw,"parallelTraverse");var Yx=class Yx extends yr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new wx(t)}),this.register(function(t){return new Ex(t)}),this.register(function(t){return new Ax(t)}),this.register(function(t){return new Ox(t)}),this.register(function(t){return new Ux(t)}),this.register(function(t){return new Fx(t)}),this.register(function(t){return new Rx(t)}),this.register(function(t){return new Cx(t)}),this.register(function(t){return new Px(t)}),this.register(function(t){return new Ix(t)}),this.register(function(t){return new Sx(t)}),this.register(function(t){return new Lx(t)}),this.register(function(t){return new Tx(t)}),this.register(function(t){return new Dx(t)}),this.register(function(t){return new Nx(t)}),this.register(function(t){return new vx(t)}),this.register(function(t){return new kp(t,ut.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new kp(t,ut.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Bx(t)})}load(e,t,n,i){let s=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=hs.extractUrlBase(e);o=hs.resolveURL(c,this.path)}else o=hs.extractUrlBase(e);this.manager.itemStart(e);let a=u(function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},"_onError"),l=new Al(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Dw){try{o[ut.KHR_BINARY_GLTF]=new kx(e)}catch(d){i&&i(d);return}s=JSON.parse(o[ut.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new qx(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let d=s.extensionsUsed[h],f=s.extensionsRequired||[];switch(d){case ut.KHR_MATERIALS_UNLIT:o[d]=new Mx;break;case ut.KHR_DRACO_MESH_COMPRESSION:o[d]=new zx(s,this.dracoLoader);break;case ut.KHR_TEXTURE_TRANSFORM:o[d]=new Gx;break;case ut.KHR_MESH_QUANTIZATION:o[d]=new Vx;break;default:f.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};u(Yx,"GLTFLoader");var Bp=Yx;function rL(){let r={};return{get:u(function(e){return r[e]},"get"),add:u(function(e,t){r[e]=t},"add"),remove:u(function(e){delete r[e]},"remove"),removeAll:u(function(){r={}},"removeAll")}}u(rL,"GLTFRegistry");function Yt(r,e,t){let n=r.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}u(Yt,"getMaterialExtension");var ut={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},$x=class $x{constructor(e){this.parser=e,this.name=ut.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,h=new Se(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Un);let d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new $o(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Su(h),c.distance=d;break;case"spot":c=new Mu(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ar(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}};u($x,"GLTFLightsExtension");var vx=$x,Kx=class Kx{constructor(){this.name=ut.KHR_MATERIALS_UNLIT}getMaterialType(){return An}extendParams(e,t,n){let i=[];e.color=new Se(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Un),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Nt))}return Promise.all(i)}};u(Kx,"GLTFMaterialsUnlitExtension");var Mx=Kx,Zx=class Zx{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}};u(Zx,"GLTFMaterialsEmissiveStrengthExtension");var Sx=Zx,Jx=class Jx{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Fe(s,s)}return Promise.all(i)}};u(Jx,"GLTFMaterialsClearcoatExtension");var wx=Jx,jx=class jx{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}};u(jx,"GLTFMaterialsDiffuseRoughnessExtension");var Ex=jx,Qx=class Qx{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}};u(Qx,"GLTFMaterialsDispersionExtension");var Ax=Qx,ey=class ey{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}};u(ey,"GLTFMaterialsIridescenceExtension");var Tx=ey,ty=class ty{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SHEEN}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Se(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Un)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Nt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}};u(ty,"GLTFMaterialsSheenExtension");var Rx=ty,ny=class ny{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}};u(ny,"GLTFMaterialsTransmissionExtension");var Cx=ny,iy=class iy{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_VOLUME}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Se().setRGB(s[0],s[1],s[2],Un),Promise.all(i)}};u(iy,"GLTFMaterialsVolumeExtension");var Px=iy,ry=class ry{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IOR}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}};u(ry,"GLTFMaterialsIorExtension");var Ix=ry,sy=class sy{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return t.specularColor=new Se().setRGB(s[0],s[1],s[2],Un),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Nt)),Promise.all(i)}};u(sy,"GLTFMaterialsSpecularExtension");var Lx=sy,oy=class oy{constructor(e){this.parser=e,this.name=ut.EXT_MATERIALS_BUMP}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}};u(oy,"GLTFMaterialsBumpExtension");var Nx=oy,ay=class ay{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}};u(ay,"GLTFMaterialsAnisotropyExtension");var Dx=ay,ly=class ly{constructor(e){this.parser=e,this.name=ut.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}};u(ly,"GLTFTextureBasisUExtension");var Ox=ly,cy=class cy{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}};u(cy,"GLTFTextureWebPExtension");var Ux=cy,uy=class uy{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}};u(uy,"GLTFTextureAVIFExtension");var Fx=uy,hy=class hy{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,d=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,f,i.mode,i.filter).then(function(m){return m.buffer}):o.ready.then(function(){let m=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(m),h,d,f,i.mode,i.filter),m})})}else return null}};u(hy,"GLTFMeshoptCompression");var kp=hy,dy=class dy{constructor(e){this.name=ut.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Ai.TRIANGLES&&c.mode!==Ai.TRIANGLE_STRIP&&c.mode!==Ai.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),d=h.isGroup?h.children:[h],f=c[0].count,m=[];for(let g of d){let _=new He,b=new X,x=new Jt,v=new X(1,1,1),S=new cu(g.geometry,g.material,f);for(let R=0;R<f;R++)l.TRANSLATION&&b.fromBufferAttribute(l.TRANSLATION,R),l.ROTATION&&x.fromBufferAttribute(l.ROTATION,R),l.SCALE&&v.fromBufferAttribute(l.SCALE,R),S.setMatrixAt(R,_.compose(b,x,v));let M=null;for(let R in l)if(R==="_COLOR_0"){let E=l[R];S.instanceColor=new Yn(E.array,E.itemSize,E.normalized)}else if(R!=="TRANSLATION"&&R!=="ROTATION"&&R!=="SCALE"){if(M===null){let y=S.geometry;M=new Mt,M.name=y.name;for(let w in y.attributes)M.setAttribute(w,y.attributes[w]);for(let w in y.morphAttributes)M.morphAttributes[w]=y.morphAttributes[w];y.index!==null&&M.setIndex(y.index),M.morphTargetsRelative=y.morphTargetsRelative;for(let w of y.groups)M.addGroup(w.start,w.count,w.materialIndex);y.boundingBox!==null&&(M.boundingBox=y.boundingBox.clone()),y.boundingSphere!==null&&(M.boundingSphere=y.boundingSphere.clone()),M.drawRange.start=y.drawRange.start,M.drawRange.count=y.drawRange.count,M.userData=Object.assign({},y.userData),S.geometry=M}let E=l[R];M.setAttribute(R,new Yn(E.array,E.itemSize,E.normalized))}Ut.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),m.push(S)}return h.isGroup?(h.clear(),h.add(...m),h):m[0]}))}};u(dy,"GLTFMeshGpuInstancing");var Bx=dy,Dw="glTF",Wu=12,Pw={JSON:1313821514,BIN:5130562},fy=class fy{constructor(e){this.name=ut.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Wu),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Dw)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Wu,s=new DataView(e,Wu),o=0;for(;o<i;){let a=s.getUint32(o,!0);o+=4;let l=s.getUint32(o,!0);if(o+=4,l===Pw.JSON){let c=new Uint8Array(e,Wu+o,a);this.content=n.decode(c)}else if(l===Pw.BIN){let c=Wu+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}};u(fy,"GLTFBinaryExtension");var kx=fy,py=class py{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ut.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let d=Wx[h]||h.toLowerCase();a[d]=o[h]}for(let h in e.attributes){let d=Wx[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],m=Gl[f.componentType];c[d]=m.name,l[d]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(d,f){i.decodeDracoFile(h,function(m){for(let g in m.attributes){let _=m.attributes[g],b=l[g];b!==void 0&&(_.normalized=b)}d(m)},a,c,Un,f)})})}};u(py,"GLTFDracoMeshCompressionExtension");var zx=py,my=class my{constructor(){this.name=ut.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}};u(my,"GLTFTextureTransformExtension");var Gx=my,gy=class gy{constructor(){this.name=ut.KHR_MESH_QUANTIZATION}};u(gy,"GLTFMeshQuantizationExtension");var Vx=gy,by=class by extends xr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,d=(n-t)/h,f=d*d,m=f*d,g=e*c,_=g-c,b=-2*m+3*f,x=m-f,v=1-b,S=x-f+d;for(let M=0;M!==a;M++){let R=o[_+M+a],E=o[_+M+l]*h,y=o[g+M+a],w=o[g+M]*h;s[M]=v*R+S*E+b*y+x*w}return s}};u(by,"GLTFCubicSplineInterpolant");var zp=by,sL=new Jt,xy=class xy extends zp{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return sL.fromArray(s).normalize().toArray(s),s}};u(xy,"GLTFCubicSplineQuaternionInterpolant");var Hx=xy,Ai={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Gl={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Iw={9728:qt,9729:Gt,9984:Pf,9985:Ll,9986:Qo,9987:Tn},Lw={33071:Xn,33648:ml,10497:qn},xx={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Wx={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Zs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},oL={CUBICSPLINE:void 0,LINEAR:zo,STEP:ko},yx={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function aL(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new jt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:wi})),r.DefaultMaterial}u(aL,"createDefaultMaterial");function aa(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}u(aa,"addUnknownExtensionsToUserData");function Ar(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}u(Ar,"assignExtrasToUserData");function lL(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){let d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let d=e[c];if(n){let f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):r.attributes.position;o.push(f)}if(i){let f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):r.attributes.normal;a.push(f)}if(s){let f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],d=c[1],f=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=d),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}u(lL,"addMorphTargets");function cL(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}u(cL,"updateMorphTargets");function uL(r){let e,t=r.extensions&&r.extensions[ut.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+_x(t.attributes):e=r.indices+":"+_x(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+_x(r.targets[n]);return e}u(uL,"createPrimitiveKey");function _x(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}u(_x,"createAttributesKey");function Xx(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}u(Xx,"getNormalizedComponentScale");function hL(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}u(hL,"getImageURIMimeType");var dL=new He,yy=class yy{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new rL,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?(this.textureLoader=new yu(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Eu(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Al(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return aa(s,a,i),Ar(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=u((o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())s(h,a.children[c])},"updateMappings");return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ut.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,o){n.load(hs.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=xx[i.type],a=Gl[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new xt(c,o,l))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){let a=o[0],l=xx[i.type],c=Gl[i.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,f=i.byteOffset||0,m=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,_,b;if(m&&m!==d){let x=Math.floor(f/m),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+x+":"+i.count,S=t.cache.get(v);S||(_=new c(a,x*m,i.count*m/h),S=new Ho(_,m/h),t.cache.add(v,S)),b=new ks(S,l,f%m/h,g)}else a===null?_=new c(i.count*l):_=new c(a,f,i.count*l),b=new xt(_,l,g);if(i.sparse!==void 0){let x=xx.SCALAR,v=Gl[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,R=new v(o[1],S,i.sparse.count*x),E=new c(o[2],M,i.sparse.count*l);a!==null&&(b=new xt(b.array.slice(),b.itemSize,b.normalized)),b.normalized=!1;for(let y=0,w=R.length;y<w;y++){let L=R[y];if(b.setX(L,E[y*l]),l>=2&&b.setY(L,E[y*l+1]),l>=3&&b.setZ(L,E[y*l+2]),l>=4&&b.setW(L,E[y*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}b.normalized=g}return b})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){let i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(s.samplers||{})[o.sampler]||{};return h.magFilter=Iw[f.magFilter]||Gt,h.minFilter=Iw[f.minFilter]||Tn,h.wrapS=Lw[f.wrapS]||qn,h.wrapT=Lw[f.wrapT]||qn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==qt&&h.minFilter!==Gt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(m,g){t.parse(f,m,g)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;let m=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(m),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(f){return new Promise(function(m,g){let _=m;t.isImageBitmapLoader===!0&&(_=u(function(b){let x=new on(b);x.needsUpdate=!0,m(x)},"onLoad")),t.load(hs.resolveURL(f,s.path),_,void 0,g)})})}let d=h.then(function(f){return c===!0&&a.revokeObjectURL(l),Ar(f,o),f.userData.mimeType=o.mimeType||hL(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[ut.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ut.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=s.associations.get(o);o=s.extensions[ut.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new wl,Fn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Sl,Fn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return jt}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],o,a={},l=s.extensions||{},c=[];if(l[ut.KHR_MATERIALS_UNLIT]){let d=i[ut.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,s,t))}else{let d=s.pbrMetallicRoughness||{};if(a.color=new Se(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){let f=d.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Un),a.opacity=f[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,Nt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=rn);let h=s.alphaMode||yx.OPAQUE;if(h===yx.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===yx.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==An&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Fe(1,1),s.normalTexture.scale!==void 0)){let d=s.normalTexture.scale;a.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&o!==An&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==An){let d=s.emissiveFactor;a.emissive=new Se().setRGB(d[0],d[1],d[2],Un)}return s.emissiveTexture!==void 0&&o!==An&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Nt)),Promise.all(c).then(function(){let d=new o(a);return s.name&&(d.name=s.name),Ar(d,s),t.associations.set(d,{materials:e}),s.extensions&&aa(i,d,s),d})}createUniqueName(e){let t=vt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[ut.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Nw(l,a,t)})}u(s,"createDracoPrimitive");let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=uL(c),d=i[h];if(d)o.push(d.promise);else{let f;c.extensions&&c.extensions[ut.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=Nw(new Mt,c,t),c.mode===Ai.TRIANGLE_STRIP?f=f.then(m=>ax(m,Ou)):c.mode===Ai.TRIANGLE_FAN&&(f=f.then(m=>ax(m,Dl))),i[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?aL(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let m=0,g=h.length;m<g;m++){let _=h[m],b=o[m],x,v=c[m];if(b.mode===Ai.TRIANGLES||b.mode===Ai.TRIANGLE_STRIP||b.mode===Ai.TRIANGLE_FAN||b.mode===void 0){let S=s.isSkinnedMesh===!0,M=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");S&&M===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),x=S&&M?new au(_,v):new $e(_,v),x.isSkinnedMesh===!0&&x.normalizeSkinWeights()}else if(b.mode===Ai.LINES)x=new uu(_,v);else if(b.mode===Ai.LINE_STRIP)x=new Wo(_,v);else if(b.mode===Ai.LINE_LOOP)x=new hu(_,v);else if(b.mode===Ai.POINTS)x=new du(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+b.mode);Object.keys(x.geometry.morphAttributes).length>0&&cL(x,s),x.name=t.createUniqueName(s.name||"mesh_"+e),Ar(x,s),b.extensions&&aa(i,x,b),t.assignFinalMaterial(x),d.push(x)}for(let m=0,g=d.length;m<g;m++)t.associations.set(d[m],{meshes:e,primitives:m});if(d.length===1)return s.extensions&&aa(i,d[0],s),d[0];let f=new Xt;s.extensions&&aa(i,f,s),t.associations.set(f,{meshes:e});for(let m=0,g=d.length;m<g;m++)f.add(d[m]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new sn(xp.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Yo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ar(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let d=o[c];if(d){a.push(d);let f=new He;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new lu(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let d=0,f=i.channels.length;d<f;d++){let m=i.channels[d],g=i.samplers[m.sampler],_=m.target,b=_.node,x=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",b)),a.push(this.getDependency("accessor",x)),l.push(this.getDependency("accessor",v)),c.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){let f=d[0],m=d[1],g=d[2],_=d[3],b=d[4],x=[];for(let S=0,M=f.length;S<M;S++){let R=f[S],E=m[S],y=g[S],w=_[S],L=b[S];if(R===void 0)continue;R.updateMatrix&&R.updateMatrix();let I=n._createAnimationTracks(R,E,y,w,L);if(I)for(let O=0;O<I.length;O++)x.push(I[O])}let v=new Xo(s,void 0,x);return Ar(v,i),v})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){let h=c[0],d=c[1],f=c[2];f!==null&&h.traverse(function(m){m.isSkinnedMesh&&m.bind(f,dL)});for(let m=0,g=d.length;m<g;m++)h.add(d[m]);if(h.userData.pivot!==void 0&&d.length>0){let m=h.userData.pivot,g=d[0];h.pivot=new X().fromArray(m),h.position.x-=m[0],h.position.y-=m[1],h.position.z-=m[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(s.isBone===!0?h=new Ml:c.length>1?h=new Xt:c.length===1?h=c[0]:h=new Ut,h!==c[0])for(let d=0,f=c.length;d<f;d++)h.add(c[d]);if(s.name&&(h.userData.name=s.name,h.name=o),Ar(h,s),s.extensions&&aa(n,h,s),s.matrix!==void 0){let d=new He;d.fromArray(s.matrix),h.applyMatrix4(d)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){let d=i.associations.get(h);i.associations.set(h,{...d})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new Xt;n.name&&(s.name=i.createUniqueName(n.name)),Ar(s,n),n.extensions&&aa(t,s,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,d=l.length;h<d;h++){let f=l[h];f.parent!==null?s.add(Ks(f)):s.add(f)}let c=u(h=>{let d=new Map;for(let[f,m]of i.associations)(f instanceof Fn||f instanceof on)&&d.set(f,m);return h.traverse(f=>{let m=i.associations.get(f);m!=null&&d.set(f,m)}),d},"reduceAssociations");return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){let o=[],a=e.name?e.name:e.uuid,l=[];function c(m){m.morphTargetInfluences&&l.push(m.name?m.name:m.uuid)}u(c,"collectMorphTargets"),Zs[s.path]===Zs.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let h;switch(Zs[s.path]){case Zs.weights:h=ls;break;case Zs.rotation:h=cs;break;case Zs.translation:case Zs.scale:h=Ys;break;default:n.itemSize===1?h=ls:h=Ys;break}let d=i.interpolation!==void 0?oL[i.interpolation]:zo,f=this._getArrayFromAccessor(n);for(let m=0,g=l.length;m<g;m++){let _=new h(l[m]+"."+Zs[s.path],t.array,f,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Xx(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=u(function(n){let i=this instanceof cs?Hx:zp;return new i(this.times,this.values,this.getValueSize()/3,n)},"InterpolantFactoryMethodGLTFCubicSpline"),e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};u(yy,"GLTFParser");var qx=yy;function fL(r,e,t){let n=e.attributes,i=new wn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new X(l[0],l[1],l[2]),new X(c[0],c[1],c[2])),a.normalized){let h=Xx(Gl[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let a=new X,l=new X;for(let c=0,h=s.length;c<h;c++){let d=s[c];if(d.POSITION!==void 0){let f=t.json.accessors[d.POSITION],m=f.min,g=f.max;if(m!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),f.normalized){let _=Xx(Gl[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;let o=new En;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}u(fL,"computeBounds");function Nw(r,e,t){let n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}u(s,"assignAttributeAccessor");for(let o in n){let a=Wx[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){let o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return ct.workingColorSpace!==Un&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ct.workingColorSpace}" not supported.`),Ar(r,e),fL(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?lL(r,e.targets,t):r})}u(Nw,"addPrimitiveAttributes");var vy=["idle","move","fight","die","work","settle"],pL=["bottle","arrow","bullet","shell"],ji=u(r=>typeof r=="object"&&r!==null&&!Array.isArray(r),"isObject"),li=u(r=>typeof r=="string"&&r!=="","isText"),Ow=u(r=>typeof r=="number"&&Number.isFinite(r)&&r>0,"isScale"),Uw=u(r=>ji(r)&&li(r.name)&&li(r.url)&&(r.attribution===void 0||li(r.attribution)),"isLicence"),Fw=u(r=>li(r)&&r.endsWith(".glb")&&!r.startsWith("/")&&!/[\\%?#\u0000-\u0020]/.test(r)&&!/^[a-z][a-z0-9+.-]*:/i.test(r)&&r.split("/").every(e=>e!==""&&e!=="."&&e!==".."),"isFile"),_y=u(r=>vy.includes(r),"isRole"),mL=u(r=>ji(r)&&typeof r.at=="number"&&Number.isFinite(r.at)&&r.at>=0&&li(r.joint)&&(r.kind===void 0||pL.includes(r.kind)),"isShot"),gL=u(r=>{if(!ji(r)||!Fw(r.file)||!ji(r.clips))return;let e={};if(Object.entries(r.clips).forEach(([i,s])=>{_y(i)&&li(s)&&(e[i]=s)}),Object.keys(e).length===0||Object.entries(r.clips).some(([i,s])=>_y(i)&&!li(s)))return;if(r.shots===void 0)return{file:r.file,clips:e};if(!ji(r.shots))return;let t={},n=Object.entries(r.shots).filter(([i])=>_y(i));if(n.every(([i,s])=>e[i]!==void 0&&Array.isArray(s)&&s.every(mL)))return n.forEach(([i,s])=>t[i]=s),{file:r.file,clips:e,shots:t}},"riggedOf"),Bw=u(r=>{if(!ji(r))return"not an object";if(r.schema!==1||r.kind!=="models")return"not a set of models (schema 1)";if(!li(r.id)||!li(r.name))return"no id or name";if(!Uw(r.licence))return"no licence";if(!Array.isArray(r.credits)||r.credits.length===0||!r.credits.every(s=>ji(s)&&li(s.work)&&li(s.author)&&li(s.url)&&Uw(s.licence)))return"no credits";if(!Ow(r.scale))return"no scale";let e=r.models;if(!ji(e))return"no models";let t=Object.entries(e).find(([,s])=>!ji(s)||!Fw(s.file)||s.scale!==void 0&&!Ow(s.scale));if(t!==void 0)return`model ${t[0]}: no glTF binary beside the manifest, or no scale`;let n=r.names;if(!ji(n)||!ji(n.unit))return"no unit names";let i=Object.entries(n.unit).find(([,s])=>!li(s)||!Object.prototype.hasOwnProperty.call(e,s));return i!==void 0?`unit ${i[0]}: drawn by a model the set hasn't`:{...r,models:Object.fromEntries(Object.entries(e).map(([s,o])=>{let{rigged:a,...l}=o,c=gL(a);return[s,c===void 0?l:{...l,rigged:c}]}))}},"readModelManifest"),kw=u(r=>{let e=new Map;return Object.entries(r.names.unit).forEach(([t,n])=>e.set(n,[...e.get(n)??[],t])),e},"unitTypesOf"),My=u((r,e)=>r.models[e]?.scale??r.scale,"scaleOf");var Gw=u(r=>Vw(r.geometry,Array.isArray(r.material)?r.material[0]:r.material),"rigPart"),Vw=u((r,e)=>{let t=e;return{geometry:r,map:t.map??null,tinted:t.userData?.playerColour===!0,cutout:t.alphaTest>0,doubleSided:t.side===rn}},"partOf"),bL=u(r=>{let e=[];return r.updateMatrixWorld(!0),r.traverse(t=>{let n=t;if(!n.isMesh)return;(Array.isArray(n.material)?n.material:[n.material]).slice(0,1).forEach(s=>{let o=n.geometry.clone();o.applyMatrix4(n.matrixWorld),o.computeBoundingBox(),e.push(Vw(o,s))})}),e},"partsOf"),xL=u(({animations:r,scene:e},t)=>{let n=new Map,i=new Map;return vy.forEach(s=>{let o=t.clips[s];if(o===void 0)return;let a=r.find(d=>d.name===o);if(a===void 0)throw new Error(`${t.file}: no clip ${o}`);let l=a.tracks.find(({name:d})=>e.getObjectByName(vt.parseTrackName(d).nodeName)===void 0);if(l!==void 0)throw new Error(`${t.file}: clip ${o} moves a node it can't name (${l.name})`);let c=(t.shots?.[s]??[]).map(d=>({...d,joint:vt.sanitizeNodeName(d.joint)})),h=c.find(({joint:d})=>e.getObjectByName(d)===void 0);if(h!==void 0)throw new Error(`${t.file}: clip ${o} shoots from a node it hasn't (${h.joint})`);n.set(s,a),i.set(s,c)}),{clips:n,shots:i}},"clipsOf"),yL=u(r=>{if(r.byteLength<20)return!1;let e=new DataView(r),t=e.getUint32(12,!0);if(e.getUint32(0,!0)!==1179937895||e.getUint32(4,!0)!==2||e.getUint32(8,!0)!==r.byteLength||e.getUint32(16,!0)!==1313821514||20+t>r.byteLength)return!1;let n=[];for(let i=12;i<r.byteLength;){if(i+8>r.byteLength)return!1;let s=e.getUint32(i,!0);if(n.push(e.getUint32(i+4,!0)),i+=8+s,i>r.byteLength)return!1}if(n.length>2||n.length===2&&n[1]!==5130562)return!1;try{let i=JSON.parse(new TextDecoder().decode(new Uint8Array(r,20,t))),s=u(a=>Array.isArray(a)?a.some(s):typeof a=="object"&&a!==null&&(Object.prototype.hasOwnProperty.call(a,"uri")||Object.values(a).some(s)),"reads"),o=u(a=>a===void 0||Array.isArray(a),"listed");return typeof i=="object"&&i!==null&&!Array.isArray(i)&&o(i.buffers)&&o(i.images)&&i.extensionsUsed===void 0&&i.extensionsRequired===void 0&&!s(i)}catch{return!1}},"selfContained"),_L=u(r=>{let e=new El,t=`blob:${r}/`;return e.setURLModifier(n=>{if(!n.startsWith(t)&&!/^data:/i.test(n))throw new Error(`${n}: a model reads nothing from elsewhere`);return n}),e},"modelManager"),zw=u((r,e)=>{try{let t=new URL(r,e);return t.origin===new URL(e).origin?t.href:null}catch{return null}},"onSite"),Gp=u((r,e)=>`${r}#${e}`,"modelKey"),Hw=u(async(r,e,t,n=()=>{})=>{let i=zw(r,location.href);if(i===null)throw new Error(`${r}: not on this site`);let s=await fetch(i,{redirect:"error",credentials:"omit"});if(!s.ok)throw new Error(`${r}: ${s.status}`);let o=Bw(await s.json());if(typeof o=="string")throw new Error(`${r}: ${o}`);let a=new Bp(_L(location.origin)),l=kw(o),c=new URL(".",i).href,h=u(async d=>{let f=zw(d,i);if(f===null||!f.startsWith(c))throw new Error(`${d}: not beside the manifest`);let m=await fetch(f,{redirect:"error",credentials:"omit"});if(!m.ok)throw new Error(`${f}: ${m.status}`);let g=await m.arrayBuffer();if(!yL(g))throw new Error(`${f}: not a glTF binary whole in itself`);return a.parseAsync(g,"")},"parsed");return await Promise.all([...l.keys()].map(async d=>{let f=o.models[d];try{let m=await h(f.file);e(d,{parts:bL(m.scene),scale:My(o,d)},l.get(d)??[])}catch(m){t(d,m);return}if(f.rigged!==void 0)try{let m=await h(f.rigged.file),{clips:g,shots:_}=xL(m,f.rigged);n(d,{scene:m.scene,clips:g,shots:_,scale:My(o,d)},l.get(d)??[])}catch(m){t(d,m)}})),o},"loadModels");var Ww=.08,Xw=u(r=>{let e=new Se(r),t=.2126*e.r+.7152*e.g+.0722*e.b;if(t>=Ww)return e;let n=(Ww-t)/(1-t);return e.setRGB(e.r+(1-e.r)*n,e.g+(1-e.g)*n,e.b+(1-e.b)*n)},"ownerTint"),wy=class wy extends jt{constructor(t={}){let{tint:n,...i}=t;super(i);this.isTintedMaterial=!0;this.tint=new Se(1,1,1);n!==void 0&&this.tint.copy(n)}onBeforeCompile(t){t.uniforms.tint={value:this.tint},t.fragmentShader=`uniform vec3 tint;
${t.fragmentShader.replace("#include <map_fragment>",`#ifdef USE_MAP
        vec4 texel = texture2D( map, vMapUv );
        diffuseColor.rgb *= texel.rgb * mix( tint, vec3( 1.0 ), texel.a );
      #endif`)}`}customProgramCacheKey(){return"tinted"}copy(t){return super.copy(t),this.tint.copy(t.tint),this}};u(wy,"TintedMaterial");var Sy=wy,qw=Sy;var vL=.1,Yw=1.1,$w=u(r=>{let e=[];return r.traverse(t=>{t.isSkinnedMesh&&e.push(t)}),e},"skinnedOf"),ML=u(r=>{let e=r.elements,t=[0,4,8].map(o=>[e[o],e[o+1],e[o+2]]),n=u((o,a)=>o[0]*a[0]+o[1]*a[1]+o[2]*a[2],"dot"),i=t.map(o=>n(o,o)),s=[[0,1],[0,2],[1,2]].every(([o,a])=>Math.abs(n(t[o],t[a]))<=1e-4*Math.sqrt(i[o]*i[a]));return Math.sqrt(s?Math.max(...i):i.reduce((o,a)=>o+a,0))},"stretchOf"),SL=u(r=>{let e=new Map,{boneInverses:t}=r.skeleton,n=r.geometry.getAttribute("position"),i=r.geometry.getAttribute("skinIndex"),s=r.geometry.getAttribute("skinWeight"),o=new X;if(n===void 0||i===void 0||s===void 0)return e;for(let a=0;a<n.count;a++){o.fromBufferAttribute(n,a).applyMatrix4(r.bindMatrix);for(let l=0;l<4;l++){let c=i.getComponent(a,l),h=t[c];if(s.getComponent(a,l)===0||h===void 0)continue;let d=e.get(c);d===void 0&&(d={at:new X().setFromMatrixPosition(h.clone().invert()),reach:0},e.set(c,d)),d.reach=Math.max(d.reach,o.distanceTo(d.at))}}return e},"reachOf"),wL=u(r=>{let e=Ks(r.scene),t=$w(e),n=t.map(SL),i=t.map(()=>new wn),s=new He,o=new X,a=new X,l=new wn,c=u(()=>{e.updateMatrixWorld(!0),t.forEach((d,f)=>{let{bones:m,boneInverses:g}=d.skeleton;l.makeEmpty(),n[f].forEach(({at:_,reach:b},x)=>{s.multiplyMatrices(m[x].matrixWorld,g[x]),o.copy(_).applyMatrix4(s);let v=b*ML(s);l.expandByPoint(a.copy(o).addScalar(v)),l.expandByPoint(a.copy(o).addScalar(-v))}),l.isEmpty()||i[f].union(l.applyMatrix4(d.bindMatrixInverse))})},"take"),h=new Ko(e);c(),r.clips.forEach(d=>{h.stopAllAction(),h.clipAction(d).play();for(let f=0;f<d.duration;f+=vL)h.setTime(f),c();h.setTime(Math.max(0,d.duration-1e-4)),c()}),h.stopAllAction(),h.uncacheRoot(e),$w(r.scene).forEach((d,f)=>{let m=i[f];if(m===void 0||m.isEmpty()){d.frustumCulled=!1;return}let g=m.getBoundingSphere(new En),_=m.getSize(new X);g.radius*=Yw,d.boundingSphere=g,d.boundingBox=m.clone().expandByVector(_.multiplyScalar((Yw-1)/2)),d.frustumCulled=!0})},"boundClips"),Kw=wL;var yn=u((r,e,t=3)=>({shape:"foot",era:r,gear:e,squad:t}),"foot"),Xu=u((r,e,t=2)=>({shape:"mounted",era:r,gear:e,squad:t}),"mounted"),ci=u((r,e,t=!1,n=0,i=!1)=>({shape:"ship",era:r,hull:e,squad:1,large:t,guns:n,missiles:i}),"ship"),qu=u((r,e=!1,t=!1)=>({shape:"aircraft",era:r,squad:1,large:e,stealth:t}),"aircraft"),Ey=u((r,e)=>({shape:"cart",era:r,cart:e,squad:1}),"cart"),Zw={Warrior:yn("ancient","club"),Spearman:yn("ancient","spear"),Swordman:yn("ancient","sword"),Archer:yn("ancient","bow"),Horseman:Xu("ancient","spear"),Chariot:Ey("ancient","chariot"),Elephant:{shape:"elephant",era:"ancient",squad:1},Catapult:{shape:"siege",era:"ancient",squad:1},Trireme:ci("ancient","oars"),Settlers:Ey("ancient","wagon"),Diplomat:yn("ancient","case",1),Caravan:Ey("ancient","goods"),Explorer:yn("ancient","pack",1),Pikeman:yn("medieval","pike"),Knight:Xu("medieval","lance"),Crusader:Xu("medieval","sword"),Fanatic:yn("medieval","sword"),Sail:ci("medieval","sail"),Musketman:yn("renaissance","musket"),Dragoon:Xu("renaissance","musket"),Cannon:{shape:"siege",era:"renaissance",squad:1},Frigate:ci("renaissance","sail",!0,1),Galleon:ci("renaissance","sail",!0),Rifleman:yn("industrial","rifle"),AlpineTrooper:{...yn("industrial","rifle"),dress:"snow"},Partisan:{...yn("industrial","rifle"),dress:"irregular"},Cavalry:Xu("industrial","rifle"),Artillery:{shape:"siege",era:"industrial",squad:1},Engineer:yn("industrial","none",2),Ironclad:ci("industrial","steam",!1,1),Transport:ci("industrial","steam",!0),Freight:{shape:"vehicle",era:"industrial",squad:1},Spy:yn("industrial","none",1),MechanizedInfantry:{shape:"vehicle",era:"modern",squad:1},Marine:yn("modern","rifle"),Paratrooper:{...yn("modern","rifle",1),dress:"parachute"},Tank:{shape:"vehicle",era:"modern",squad:1,large:!0},Howitzer:{shape:"siege",era:"modern",squad:1,large:!0},Destroyer:ci("modern","steam",!1,1),Cruiser:ci("modern","steam",!0,2),MissileCruiser:ci("modern","steam",!0,1,!0),Battleship:ci("modern","steam",!0,3),Submarine:ci("modern","submarine"),Carrier:ci("modern","carrier",!0),Fighter:qu("modern"),StealthFighter:qu("modern",!1,!0),Bomber:qu("modern",!0),StealthBomber:qu("modern",!0,!0),Helicopter:{shape:"helicopter",era:"modern",squad:1},CruiseMissile:{shape:"missile",era:"modern",squad:1},Nuclear:{shape:"missile",era:"modern",squad:1,large:!0}},Vl=u((r,e=[])=>(Object.prototype.hasOwnProperty.call(Zw,r)?Zw[r]:void 0)??(e.includes("Naval")||e.includes("NavalTransport")?ci("industrial","steam"):e.includes("Air")?qu("modern"):yn("ancient","spear")),"unitLook"),Hl=u(r=>r.shape==="aircraft"||r.shape==="helicopter"||r.shape==="missile","airborne");var Iy=2,Jw=.285,Ay=.03,t1="#fff4b0",EL=.04,Vp=.004,Ty=.018,jw=.01,Qw=.022,e1=.03,n1=.03,Hp=.002,AL="#4caf50",TL="#e0b030",RL="#d04030",CL=256,la,Qi,ca,ua,fs,ha,da,fa,Js,Ku,pa,ma,ps,Xl,js,Ry,Cy,Dy=class Dy{constructor(){z(this,js);z(this,la,new Map);z(this,Qi,new Map);z(this,ca,new Map);z(this,ua,new Map);z(this,fs,new Map);z(this,ha,new Map);z(this,da,new Map);z(this,fa,new Map);z(this,Js,new Map);z(this,Ku,new WeakSet);z(this,pa,null);z(this,ma,new Map);z(this,ps,null);z(this,Xl,0);this.figureMaterial=new jt({vertexColors:!0,roughness:.8,metalness:.05});this.geometries={ring:new os(.23,.018,8,36)}}material(e,t=!1){let n=`${e}${t?" glow":""}`,i=p(this,la).get(n);return i===void 0&&(i=new jt({color:new Se(e),roughness:.75,metalness:.05,...t?{emissive:new Se(e),emissiveIntensity:.6}:{}}),p(this,la).set(n,i)),i}addModel(e,t){let n=p(this,fs).get(e);n!==void 0&&n!==t&&A(this,js,Ry).call(this,e,n),p(this,fs).set(e,t)}addRig(e,t){p(this,fs).has(e)&&(p(this,Ku).has(t)||(Kw(t),p(this,Ku).add(t)),p(this,Js).set(e,t))}rigOf(e){return p(this,Js).get(e)??null}rigFigures(e,t,n,i=1){let s=p(this,Js).get(e);if(s===void 0)return null;let o=t.shape==="ship",a=Hl(t),l=Py(t),c=s.scale*i,h=o?0:Ay+(a?Jw*i:0);return Hu(l).map(([d,f])=>{let m=Ks(s.scene),g=0;return m.name=Ju,m.position.set(d*i,h,f*i),m.scale.setScalar(c),m.traverse(_=>{let b=_;b.isMesh&&(b.material=A(this,js,Cy).call(this,e,g++,{...Gw(b),geometry:b.geometry},n,!0))}),m})}modelFigures(e,t,n,i=1){let s=p(this,fs).get(e);if(s===void 0)return null;let o=t.shape==="ship",a=Hl(t),l=Py(t),c=JSON.stringify([e,l,i,o,a]),h=JSON.stringify([e,l,i,o,a,n[0]]),d=p(this,ha).get(c),f=p(this,da).get(h);if(d===void 0){let m=s.scale*i,g=o?0:Ay+(a?Jw*i:0),_=Hu(l).map(([v,S])=>new He().makeTranslation(v*i,g,S*i).multiply(new He().makeScale(m,m,m))),b=g;d={geometries:s.parts.map(v=>{let S=_.map(R=>v.geometry.clone().applyMatrix4(R)),M=(S.length===1?S[0].clone():Ip(S))??new Mt;return S.forEach(R=>R.dispose()),M.computeBoundingBox(),M.computeBoundingSphere(),b=Math.max(b,M.boundingBox?.max.y??g),M}),top:b},p(this,ha).set(c,d)}return f===void 0&&(f={meshes:d.geometries.map((m,g)=>[m,A(this,js,Cy).call(this,e,g,s.parts[g],n)]),top:d.top},p(this,da).set(h,f)),f}body(e,t,n,i=1,s="whole",o=!1){let a=o&&e.shape==="ship"&&s!=="figures",l=JSON.stringify([e,t,n,i,s,a]),c=p(this,ua).get(l);return c===void 0&&(c=Tw(e,t,{fortified:n,scale:i,stand:Ay,part:s,ripples:a}),p(this,ua).set(l,c)),c}walls(){return p(this,pa)??k(this,pa,Rw()),p(this,pa)}figure(e,t){let n=JSON.stringify([e,t]),i=p(this,ca).get(n);return i===void 0&&(i=Aw(e,t),p(this,ca).set(n,i)),i}plain(e){let t=p(this,ma).get(e);return t===void 0&&(t=new zs({color:new Se(e),sizeAttenuation:!1,depthTest:!1}),p(this,ma).set(e,t)),t}pointer(){if(p(this,ps)===null){let e=document.createElement("canvas"),t=e.getContext("2d");e.width=32,e.height=32,t!==null&&(t.fillStyle=t1,t.strokeStyle="#3a3420",t.lineWidth=3,t.beginPath(),t.moveTo(3,5),t.lineTo(29,5),t.lineTo(16,28),t.closePath(),t.fill(),t.stroke());let n=new Ws(e);n.colorSpace=Nt,k(this,ps,new zs({map:n,sizeAttenuation:!1,depthTest:!1,transparent:!0}))}return p(this,ps)}label(e,t,n){let i=`${e}\0${t}\0${n}`,s=p(this,Qi).get(i);if(s===void 0){let o=document.createElement("canvas"),a=o.getContext("2d"),l="600 28px system-ui, sans-serif",c=40;a!==null&&(a.font=l,o.width=Math.ceil(a.measureText(e).width)+24,o.height=c,a.font=l,a.fillStyle=t,a.beginPath(),a.roundRect?.(0,0,o.width,c,10),a.fill(),a.fillStyle=n,a.textBaseline="middle",a.fillText(e,12,c/2+1));let h=new Ws(o);h.colorSpace=Nt,s=new zs({map:h,sizeAttenuation:!1,depthTest:!1,transparent:!0}),p(this,Qi).set(i,s)}return s}get sweepDue(){return p(this,Qi).size>Math.max(CL,p(this,Xl)*2)}sweep(e){let t=new Set;for(let n of e)n.traverse(i=>{i instanceof $e&&t.add(i.geometry),i instanceof rs&&t.add(i.material)});p(this,Qi).forEach((n,i)=>{t.has(n)||(n.map?.dispose(),n.dispose(),p(this,Qi).delete(i))}),k(this,Xl,p(this,Qi).size)}dispose(){Object.values(this.geometries).forEach(e=>e.dispose()),p(this,ca).forEach(e=>e.dispose()),p(this,ua).forEach(e=>e.dispose()),p(this,pa)?.dispose(),k(this,pa,null),p(this,ua).clear(),[...p(this,fs)].forEach(([e,t])=>A(this,js,Ry).call(this,e,t)),this.figureMaterial.dispose(),p(this,ma).forEach(e=>e.dispose()),p(this,ps)?.map?.dispose(),p(this,ps)?.dispose(),p(this,ma).clear(),k(this,ps,null),p(this,la).forEach(e=>e.dispose()),p(this,Qi).forEach(e=>{e.map?.dispose(),e.dispose()}),p(this,la).clear(),p(this,Qi).clear(),p(this,ca).clear(),k(this,Xl,0)}};la=new WeakMap,Qi=new WeakMap,ca=new WeakMap,ua=new WeakMap,fs=new WeakMap,ha=new WeakMap,da=new WeakMap,fa=new WeakMap,Js=new WeakMap,Ku=new WeakMap,pa=new WeakMap,ma=new WeakMap,ps=new WeakMap,Xl=new WeakMap,js=new WeakSet,Ry=u(function(e,t){let n=u(i=>JSON.parse(i)[0]===e,"ours");p(this,Js).get(e)?.scene.traverse(i=>{let s=i;s.isMesh&&(s.geometry.dispose(),[s.material].flat().forEach(o=>{o.map?.dispose(),o.dispose()}))}),p(this,Js).delete(e),t.parts.forEach(({geometry:i,map:s})=>{i.dispose(),s?.dispose()}),p(this,fs).delete(e),[...p(this,ha)].forEach(([i,{geometries:s}])=>{n(i)&&(s.forEach(o=>o.dispose()),p(this,ha).delete(i))}),[...p(this,da).keys()].filter(n).forEach(i=>p(this,da).delete(i)),[...p(this,fa)].forEach(([i,s])=>{n(i)&&(s.dispose(),p(this,fa).delete(i))})},"#letGoOfModel"),Cy=u(function(e,t,n,i,s=!1){let o=JSON.stringify([e,t,n.tinted?i[0]:null,s]),a=p(this,fa).get(o);if(a===void 0){let l={map:n.map,roughness:.85,metalness:0};a=n.cutout?new jt({...l,alphaTest:.5,side:rn}):new qw({...l,tint:n.tinted?Xw(i[0]):new Se(1,1,1),side:n.doubleSided?rn:wi}),p(this,fa).set(o,a)}return a},"#modelMaterial"),u(Dy,"MarkerKit");var Xp=Dy,i1=u(r=>{let{r:e,g:t,b:n}=new Se(r);return .2126*e+.7152*t+.0722*n>.35?"#111111":"#ffffff"},"textOn"),Wl=u((r,e,t,n)=>(r.position.set(e,t,n),r),"place"),PL=u(r=>[r.count>1?String(r.count):"",r.status??"",r.veteran?"\u2605":""].filter(e=>e!=="").join(" "),"flagText"),IL=3,LL=4,Yu=u((r,e,t,n,i=IL)=>{let s=new rs(r);return s.scale.set(e,t,1),s.center.set(.5,-n/t),s.renderOrder=i,s.frustumCulled=!1,s},"badge"),r1=u((r,e,t)=>{let n=r.map?.image,i=n&&n.height>0&&n.width>0?n.width/n.height:1;return Yu(r,e*i,e,t)},"label"),Wp=[0,.36,0],NL=u((r,e)=>{let t=new Xt;return e.walled&&t.add(new $e(r.walls(),r.figureMaterial)),e.unnamed!==!0&&t.add(Wl(r1(r.label(`${e.name}  ${e.size}${e.disorder?" !":""}`,e.colours[0],i1(e.colours[0])),n1,0),...Wp)),t},"drawCity"),DL=u((r,e,t=null,n=!1,i=t===null,s=!1)=>{let o=new Xt,{ring:a}=r.geometries,l=Vl(e.type,e.kinds),c=n&&Hl(l),h=e.model===void 0?null:r.modelFigures(e.model,l,e.colours,e.size),d=h===null?r.body(l,e.colours,e.fortified,e.size,c?"figures":"whole",i):null,f=c?new Xt:o,m=h?.top??d?.boundingBox?.max.y??.3,g=t?.at??[0,m+EL,0],_=e.health!==null,b=(t?.over??0)+(_?Vp+Hp:0),x=b+jw+Hp,v=PL(e),S=x+(v===""?0:Qw+Hp),M=h===null?new $e(d,r.figureMaterial):new Xt,R=s&&h!==null&&e.model!==void 0?r.rigFigures(e.model,l,e.colours,e.size):null;if(R!==null?R.forEach(E=>M.add(E)):h?.meshes.forEach(([E,y])=>M.add(new $e(E,y))),M.name=Ly,M.rotation.y=e.facing,f.add(M),c||h!==null){let E=r.body(l,e.colours,e.fortified,e.size,"base",i);E.getAttribute("position")!==void 0&&o.add(new $e(E,r.figureMaterial))}if(c&&(f.name=Ny,o.add(f)),e.health!==null){let E=Math.max(0,Math.min(1,e.health));if(f.add(Wl(Yu(r.plain("#202020"),Ty,Vp,t?.over??0),...g)),E>0){let y=Yu(r.plain(E>.5?AL:E>.25?TL:RL),Ty*E,Vp*.6,(t?.over??0)+Vp*.2);y.center.x=1/(2*E),f.add(Wl(y,...g))}}if(f.add(Wl(Yu(r.plain(e.colours[0]),Ty,jw,b),...g)),v!==""&&f.add(Wl(r1(r.label(v,e.colours[0],i1(e.colours[0])),Qw,x),...g)),e.active){let E=new $e(a,r.material(t1,!0));E.rotation.x=Math.PI/2,E.position.y=.01,o.add(E),f.add(Wl(Yu(r.pointer(),e1,e1,S,LL),...g))}return o},"drawUnit"),Zu="unit",Ly="figures",Py=u(r=>r.shape==="foot"?r.squad:1,"figuresOf"),s1=u(({type:r,kinds:e})=>Py(Vl(r,e)),"markerFigures"),Ju="rig figure",Ny="aloft",ga=.26,o1=u((r,e,t=!1,n=!1)=>{let i=new Xt;if(e.city!==null&&i.add(NL(r,e.city)),e.unit!==null){let s=e.inCity??e.city!==null?ga:0,o=DL(r,e.unit,e.city===null?null:{at:[Wp[0],Wp[1],Wp[2]-s],over:n1+Hp},t,s===0,n);o.name=Zu,o.position.z=s,i.add(o)}return i},"drawMarker"),$u=new WeakMap,qp=new WeakMap,OL=.5,ju=u((r,e,t)=>{r.forEach(n=>n.traverse(i=>{if(!(i instanceof $e||i instanceof rs))return;let s=$u.get(i)??i.material,o=t.get(s);o===void 0&&(o=s.clone(),i instanceof rs?o.transparent=!0:o.alphaHash=!0,t.set(s,o)),$u.has(i)||($u.set(i,s),qp.set(i,i.castShadow)),i.material=o,i.castShadow=(qp.get(i)??!1)&&e>=OL})),t.forEach((n,i)=>{n.opacity=i.opacity*e})},"fade"),a1=u((r,e)=>{r.forEach(t=>t.traverse(n=>{let i=$u.get(n);i===void 0||!(n instanceof $e||n instanceof rs)||(n.material=i,n.castShadow=qp.get(n)??n.castShadow,$u.delete(n),qp.delete(n))})),ql(e)},"unfaded"),ql=u(r=>{r.forEach(e=>e.dispose()),r.clear()},"unfade");var UL=12,FL=14,BL=1.6,kL=2,zL=-1,GL=-2,c1=1e3/30-4,VL=u((r,{distance:e,focus:t},n,i,s,o)=>{let a=new Set;if(e>(s.size>0?FL:UL))return a;let l=u((c,h,d)=>d===null?c-h:c-h-d*Math.round((c-h)/d),"apart");for(let c of r){let[h,d]=c.split(",").map(Number),[f,m]=n(h,d),g=s.has(c);Math.hypot(l(f,t[0],i.u),l(m,t[1],i.v))<=e*(g?kL:BL)&&o(h,d,g?GL:zL)&&a.add(c)}return a},"idleSquares"),l1=4,u1=u((r,e,t,n)=>{let i=[...e].filter(o=>!r.has(o)&&!n(o)),s=[...r].filter(o=>!e.has(o)&&!n(o)&&t(o));return{stand:i,start:s.slice(0,l1),waiting:s.length>l1}},"idleChanges"),h1=VL;var d1=new Au,HL=u((r,e,t)=>{let n=[],i=new Map;for(let[o,a]of r)a.forEach(l=>l.getObjectByName(Zu)?.traverseVisible(c=>{c instanceof $e&&(n.push(c),i.set(c,o))}));if(n.length===0)return null;d1.setFromCamera(new Fe(t[0],t[1]),e);let[s]=d1.intersectObjects(n,!1);return s===void 0?null:i.get(s.object)??null},"unitUnder"),f1=HL;var Qs=u(r=>r*Math.PI/180,"degrees"),Oy=Qs(25),p1=Qs(80),m1=5,WL=90,XL=1.12,Yl=Qs(40),Uy=Qs(45),qL={above:{yaw:0,pitch:Qs(80)},classic:{yaw:0,pitch:Qs(55)},isometric:{yaw:Qs(45),pitch:Qs(30)}};var g1=u(r=>({focus:r,...qL.classic,distance:24}),"defaultOrbit"),Yp=u((r,e,t)=>Math.min(t,Math.max(e,r)),"clamp"),b1=u(r=>{let e=Math.PI*2;return(r%e+e)%e},"normaliseYaw"),xa=u(r=>({...r,yaw:b1(r.yaw),pitch:Yp(r.pitch,Oy,p1),distance:Yp(r.distance,m1,WL)}),"clampOrbit"),$l=u((r,e)=>xa({...r,distance:r.distance/XL**e}),"zoomed"),$p=u(({yaw:r,pitch:e})=>{let t=Math.sin(r),n=Math.cos(r),i=Math.sin(e),s=Math.cos(e);return{forward:[t*s,-i,-n*s],right:[n,0,t],up:[t*i,s,-n*i]}},"basis"),Kl=u((r,e)=>{let{forward:t}=$p(r),[n,i]=r.focus;return[n-t[0]*r.distance,e-t[1]*r.distance,i-t[2]*r.distance]},"eye"),Zl=u((r,e,[t,n,i],s)=>{let{forward:o,right:a,up:l}=$p(r),c=Kl(r,e),h=[t-c[0],n-c[1],i-c[2]],d=u(g=>(h[0]??0)*g[0]+(h[1]??0)*g[1]+(h[2]??0)*g[2],"dot"),f=d(o),m=Math.tan(Yl/2);return f<=1e-6?null:[d(a)/(f*m*s),d(l)/(f*m)]},"toScreen"),Fy=u((r,e,[t,n],i)=>{let{forward:s,right:o,up:a}=$p(r),l=Math.tan(Yl/2);return{from:Kl(r,e),direction:[0,1,2].map(c=>(s[c]??0)+t*l*i*(o[c]??0)+n*l*(a[c]??0))}},"rayThrough"),ba=u((r,e,t,n,i=e)=>{let{from:s,direction:o}=Fy(r,e,t,n);if(o[1]>-1e-6)return null;let a=(i-s[1])/o[1];return a<=0?null:[s[0]+o[0]*a,s[2]+o[2]*a]},"groundAt"),x1=u((r,e,t,n,i)=>{let s=ba(r,e,t,i),o=ba(r,e,n,i);if(s!==null&&o!==null)return{...r,focus:[r.focus[0]+s[0]-o[0],r.focus[1]+s[1]-o[1]]};let a=(t[0]-n[0])*i,l=(t[1]-n[1])/Math.sin(r.pitch),c=r.distance*Math.tan(Yl/2),{right:h}=$p(r),d=[Math.sin(r.yaw),-Math.cos(r.yaw)];return{...r,focus:[r.focus[0]+(a*h[0]+l*(d[0]??0))*c,r.focus[1]+(a*h[2]+l*(d[1]??0))*c]}},"panned"),y1=u((r,e,t)=>{let n=u((o,a)=>(o%a+a)%a,"wrap"),[i,s]=r.focus;return{...r,yaw:b1(r.yaw),focus:[n(i,e.u),e.v===null?Yp(s,0,t):n(s,e.v)]}},"settled"),_1=u((r,e,t,n,i)=>{let s=u((l,c)=>c===null?l:l-c*Math.round(l/c),"short"),o=Math.PI*2,a=t*t*(3-2*t);return{focus:[r.focus[0]+s(e.focus[0]-r.focus[0],n.u)*a,r.focus[1]+s(e.focus[1]-r.focus[1],n.v)*a],yaw:r.yaw+(i??s(e.yaw-r.yaw,o))*a,pitch:r.pitch+(e.pitch-r.pitch)*a,distance:r.distance+(e.distance-r.distance)*a}},"between"),ms=u((r,e)=>{let t=e===void 0?1/0:Math.min(e.u,e.v??1/0)/2,n=t<m1?1/0:t,i=Math.min(r*3.5,r+n);return{near:Math.min(r*1.2,(r+i)/2),far:i}},"sightFor"),v1=u((r,e)=>{let t=Yl/2,n=u(i=>{let s=i/(r*Math.cos(t));return Math.atan2(s*Math.sin(t),s*Math.cos(t)-1)},"meeting");return Yp(Oy+n(ms(r,e).far)-n(ms(r).far),Oy,p1)},"lowestPitch");var YL=1,M1=1.5,$L=2,KL=new Se("#3f8a8c"),ZL=new Se("#173a52"),JL=new Se("#e8eeee"),S1=`
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
`,jL=`
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
`,eo,Ti,ui,ky=class ky{constructor(e,t){z(this,eo);z(this,Ti);z(this,ui);k(this,eo,e),k(this,Ti,new Uint16Array(e.columns*e.rows*2));for(let i=0;i<p(this,Ti).length;i+=2)p(this,Ti)[i]=mr.toHalfFloat(0),p(this,Ti)[i+1]=mr.toHalfFloat(1);k(this,ui,new Vs(p(this,Ti),e.columns,e.rows,vr,oi)),p(this,ui).wrapS=qn,p(this,ui).wrapT=e.wrapsV?qn:Xn,p(this,ui).magFilter=Gt,p(this,ui).minFilter=Gt,p(this,ui).needsUpdate=!0;let n=new kn({uniforms:na.merge([Ae.fog,{ground:{value:null},cell:{value:new Fe},size:{value:new Fe},shallow:{value:KL.clone()},deep:{value:ZL.clone()},foam:{value:JL.clone()},sky:{value:t.clone()},sunDirection:{value:new X(.5,.7,.4).normalize()},sunColour:{value:new Se("#fff0d8")},extentV:{value:0},wrapsV:{value:!1}}]),vertexShader:S1,fragmentShader:jL,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=p(this,ui),n.uniforms.cell.value.set(e.spacingU,e.spacingV),n.uniforms.size.value.set(e.columns,e.rows),n.uniforms.extentV.value=e.rows*e.spacingV,n.uniforms.wrapsV.value=e.wrapsV,this.mesh=new $e(new br(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=YL}setChunk(e){let{columns:t,rows:n,spacingU:i,spacingV:s}=p(this,eo),o=Math.round(e.u/i),a=Math.round(e.v/s),l=e.positions.length/3;for(let c=0;c<l;c++){let h=o+Math.round((e.positions[c*3]??0)/i),d=a+Math.round((e.positions[c*3+2]??0)/s);if(h>=0&&h<t&&d>=0&&d<n){let f=(d*t+h)*2;p(this,Ti)[f]=mr.toHalfFloat(e.positions[c*3+1]??0),p(this,Ti)[f+1]=mr.toHalfFloat(e.unseen[c]??0)}}p(this,ui).needsUpdate=!0}height(e,t){return mr.fromHalfFloat(p(this,Ti)[(t*p(this,eo).columns+e)*2]??0)}unseen(e,t){return mr.fromHalfFloat(p(this,Ti)[(t*p(this,eo).columns+e)*2+1]??0)>.5}texture(){return p(this,ui)}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=p(this,eo).wrapsV&&e}follow(e,t,n,i){this.mesh.position.set(e,0,t),this.mesh.scale.set(n,n,1),this.mesh.material.uniforms.sunDirection.value.copy(i).normalize()}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),p(this,ui).dispose()}};eo=new WeakMap,Ti=new WeakMap,ui=new WeakMap,u(ky,"Water");var By=ky,w1=By,QL=`
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
`,eN=.18,Qu,zy=class zy{constructor(e,t){z(this,Qu);k(this,Qu,t.wrapsV);let n=new kn({uniforms:na.merge([Ae.fog,{ground:{value:null},cell:{value:new Fe},size:{value:new Fe},extent:{value:new Fe},wrapsV:{value:!1}}]),vertexShader:S1,fragmentShader:QL,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=e,n.uniforms.cell.value.set(t.spacingU,t.spacingV),n.uniforms.size.value.set(t.columns,t.rows),n.uniforms.extent.value.set(t.columns*t.spacingU,t.rows*t.spacingV),n.uniforms.wrapsV.value=t.wrapsV,this.mesh=new $e(new br(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=$L}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=p(this,Qu)&&e}follow(e,t,n){this.mesh.position.set(e,eN,t),this.mesh.scale.set(n,n,1)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}};Qu=new WeakMap,u(zy,"Clouds");var Kp=zy;var tN=.6,nN=.05,ya=64,E1=.125,iN=`
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
`,rN=`
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
`,A1=u(r=>{let e=Math.max(1,Math.ceil(Math.sqrt(r)));return[e,Math.max(1,Math.ceil(r/e))]},"atlasCells"),sN=u((r,e)=>{let[t]=A1(r.length),n=ya*(1-2*E1);return r.flatMap((i,s)=>{let o=e(i);if(o===null||o[0]<=0||o[1]<=0)return[];let a=n/Math.max(o[0],o[1]),l=o[0]*a,c=o[1]*a;return[{_:i,x:s%t*ya+(ya-l)/2,y:Math.floor(s/t)*ya+(ya-c)/2,width:l,height:c}]})},"atlasPlaces"),oN=u(r=>{let{naturalWidth:e,naturalHeight:t,width:n,height:i}=r;return[e??(typeof n=="number"?n:0),t??(typeof i=="number"?i:0)]},"imageSize"),to,hi,eh,_a,th,Zp,Jl,T1,R1,Vy=class Vy{constructor(e){z(this,Jl);z(this,to,null);z(this,hi,null);z(this,eh,"");z(this,_a);z(this,th,new WeakMap);z(this,Zp,1);k(this,_a,e),this.material=new kn({uniforms:na.merge([Ae.fog,{atlas:{value:null},lean:{value:1},lift:{value:nN},bias:{value:tN},cells:{value:[1,1]},pad:{value:E1}}]),vertexShader:iN,fragmentShader:rN,fog:!0,toneMapped:!1})}lean(e){this.material.uniforms.lean.value=Math.sin(e)}set(e){if(p(this,to)?.dispose(),k(this,to,null),e===null||e.count===0)return null;A(this,Jl,R1).call(this,e);let t=new wu,n=new br(1,1);return t.index=n.index,t.setAttribute("position",n.getAttribute("position")),t.setAttribute("uv",n.getAttribute("uv")),t.setAttribute("anchor",new Yn(e.anchors,3)),t.setAttribute("slot",new Yn(e.slots,2)),t.setAttribute("size",new Yn(e.sizes,1)),t.setAttribute("cell",new Yn(e.cells,1)),t.instanceCount=e.count,k(this,to,t),t}make(){let e=new $e(p(this,to)??void 0,this.material);return e.frustumCulled=!1,e.castShadow=!1,e.receiveShadow=!1,e}dispose(){p(this,to)?.dispose(),p(this,hi)?.dispose(),this.material.dispose()}};to=new WeakMap,hi=new WeakMap,eh=new WeakMap,_a=new WeakMap,th=new WeakMap,Zp=new WeakMap,Jl=new WeakSet,T1=u(function(e){if(e===null)return 0;let t=p(this,th).get(e);return t===void 0&&(t=Gi(this,Zp)._++,p(this,th).set(e,t)),t},"#imageId"),R1=u(function(e){let t=e.names.map(a=>`${a}:${A(this,Jl,T1).call(this,p(this,_a).call(this,a))}`).join(",");if(t===p(this,eh)&&p(this,hi)!==null)return;let[n,i]=A1(e.names.length),s=document.createElement("canvas"),o=s.getContext("2d");s.width=n*ya,s.height=i*ya,o!==null&&(o.imageSmoothingEnabled=!1,sN(e.names,a=>{let l=p(this,_a).call(this,a);return l===null?null:oN(l)}).forEach(({_:a,x:l,y:c,width:h,height:d})=>{let f=p(this,_a).call(this,a);f!==null&&o.drawImage(f,l,c,h,d)})),p(this,hi)?.dispose(),k(this,hi,new Ws(s)),p(this,hi).colorSpace=Nt,p(this,hi).premultiplyAlpha=!0,p(this,hi).magFilter=qt,p(this,hi).minFilter=Tn,p(this,hi).generateMipmaps=!0,k(this,eh,t),this.material.uniforms.atlas.value=p(this,hi),this.material.uniforms.cells.value=[n,i]},"#drawAtlas"),u(Vy,"YieldIcons");var Gy=Vy,C1=Gy;var Wy=["idle","move","work"],I1=2,Hy=.13,L1=u((r,e)=>({figures:e,stagger:Hy,clips:Object.fromEntries([...r.clips].map(([t,n])=>[t,{duration:n.duration,shots:r.shots.get(t)??[]}]))}),"rigFacts"),aN=u((r,e,t)=>{if(!(e>0))return 0;let n=Math.max(0,t);return Wy.includes(r)?n%e:Math.min(n,e-1e-4)},"clipTime"),lN=10,N1=u(r=>{let e=2166136261;for(let t=0;t<r.length;t++)e=Math.imul(e^r.charCodeAt(t),16777619);return(e>>>0)/2**32*lN},"idlePhase"),P1=u((r,e,t)=>Wy.includes(r)?e+t*Hy:e-t*Hy,"figureSeconds"),Jp=u((r,e,t,n,i,s)=>r.getObjectsByProperty("name",Ju).forEach((o,a)=>{let l=t===null?0:P1(t,n,a),c=t!==null&&s!==void 0&&!Wy.includes(t)&&l<0,h=c?s.role:t,d=c?P1(s.role,s.seconds,a):l,f=h===null?void 0:e.clips.get(h),m=i.get(o)??{mixer:new Ko(o),role:null},g=f===void 0?null:h;i.set(o,m),m.role!==g&&(m.mixer.stopAllAction(),m.role=g,f!==void 0&&m.mixer.clipAction(f).setLoop(pp,1/0).play()),f!==void 0&&g!==null&&m.mixer.setTime(aN(g,f.duration,d))}),"poseFigures");var cN=u(r=>{let e=2166136261;for(let t=0;t<r.length;t++)e=Math.imul(e^r.charCodeAt(t),16777619);return(e>>>0)%1e5},"seedOf"),qy=.07,D1="flash",Xy=10466244,uN=14082796,hN=5984576,dN=16773336,jp=u((r,e,t)=>{let n=u((i,s)=>{if(s===null)return[0];let o=[];for(let a=Math.floor((i-e)/s);a*s<=i+e;a++)o.push(a*s);return o},"along");return n(r[0],t.u).flatMap(i=>n(r[1],t.v).map(s=>[i,s]))},"copiesNear"),Yy=u((r,e)=>Math.min(ms(r.distance,e).far,r.distance*2.2),"markerSight"),fN=u((r,e,t,[n,i])=>{let s=r?.getObjectsByProperty("name",Ju)[e]?.getObjectByName(t);if(s===void 0)return null;let o=s.getWorldPosition(new X);return[o.x-n,o.y,o.z-i]},"jointOf"),O1=u((r,e)=>()=>e?Ks(r):r.clone(),"copyOf"),gs=u(r=>r.traverse(e=>{e.isSkinnedMesh&&e.skeleton.dispose()}),"letGoOfSkeletons"),pN=u((r,e)=>{let{near:t,far:n}=ms(r.distance,e);return{near:t,far:n,land:jp(r.focus,n,e),markers:jp(r.focus,Yy(r,e),e)}},"sightOf"),mN=u(r=>[new Wn(new X(0,0,1),0),new Wn(new X(0,0,-1),r)],"polesAt"),gN=u((r,[e,t],n,i,s)=>r.flatMap(([o,a])=>[[o,a],...s&&i!==null&&t>n?[[o,a-i]]:[],...s&&i!==null&&e<0?[[o,a+i]]:[]]),"overlayCopies"),U1=2048,F1=Math.hypot(30,40,20),B1=u((r,{period:e,ground:t,yieldIcon:n})=>{let i=new Mp({antialias:!0,canvas:r}),s=new ru,o=new sn(Yl*180/Math.PI,1,.1,400),a=new Xt,{material:l,detail:c}=lw(e,t.rows*t.spacingV),h=new $o(dN,2.6),d=new Map,f=new Map,m=new jt({vertexColors:!0,roughness:.9,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,clipShadows:!0}),g=new An({vertexColors:!0,transparent:!0,depthWrite:!1,fog:!0,side:rn,forceSinglePass:!0}),_=t.rows*t.spacingV,b=mN(_),x=new Map,v=new Set,S=new Map,M=new WeakMap,R=new Map,E=new Xs(1,1),y=u(U=>new jt({color:new Se(U),roughness:1,metalness:0,flatShading:!0}),"puffGrey"),w=[y("#d8d5cf"),y("#a9a59d")],L=new Xs(1,0),I=new An({color:new Se("#fff1b8")}),O=new Map,B=new Bn(.0015,.0015,.07,4),$=new qi(.004,.012,4),F=new jt({color:new Se("#7a5a3a"),roughness:.8,metalness:0}),j=new Bn(.0025,.0025,.09,4),ce=new An({color:new Se("#ffe08a")}),G=new Xs(.012,1),ee=new jt({color:new Se("#2b2b2b"),roughness:.5,metalness:.6}),Z=new Bn(.006,.009,.03,6),ne=new jt({color:new Se("#3d5a3a"),roughness:.3,metalness:0}),ae=new Xs(.011,0),pe=new An({color:new Se("#ffb347")}),ye=new Map,oe=new An({color:new Se("#dfe8e8"),side:rn}),de=new Xt,ue=new Xp,fe=new Xt,he=new C1(n??(()=>null)),Ie=new w1(t,new Se(Xy)),qe=new Kp(Ie.texture(),t),Re=new iu(Xy,30,110),st=0,ot=[[0,0]],Ye="0,0",dt=[[0,0]],Rt="0,0",Ct=!1,je=null,kt=!1;i.outputColorSpace=Nt,i.localClippingEnabled=!0,i.toneMapping=Ru,i.shadowMap.enabled=!0,i.shadowMap.type=Tf,s.background=new Se(Xy),s.fog=Re,s.add(new _u(uN,hN,.9)),s.add(a),s.add(de),s.add(fe),s.add(Ie.mesh),s.add(qe.mesh),h.position.set(30,40,20),h.castShadow=!0,h.shadow.mapSize.set(U1,U1),h.shadow.bias=-4e-4,h.shadow.normalBias=.02,s.add(h),s.add(h.target);let tt=u((U,K,V=ot)=>V.map(([H,q])=>{let ie=U.make();return ie.position.set(U.at[0]+H,U.at[1],U.at[2]+q),K.add(ie),ie.updateMatrixWorld(!0),ie}),"copiesOf"),Pt=u(U=>tt(U,a,gN(ot,U.span,_,e.v,Ct)),"overlayCopiesOf"),Ot=u(U=>U.flatMap(K=>{let V=K.getObjectByName(Zu);return V===void 0?[]:[V]}),"unitParts"),lt=u(U=>U.drawn.forEach(K=>{let V=K.getObjectByName(Ly),H=K.getObjectByName(Ny);V!==void 0&&(V.rotation.y=U.facing),H!==void 0&&(H.position.y=U.aloft)}),"pose"),Y=new X(0,1,0),zt=new X,ft=u(U=>U.drawn.forEach(K=>{U.kind==="bottle"?K.rotation.set(U.through*Math.PI*3,0,0):(U.kind==="arrow"||U.kind==="bullet")&&K.quaternion.setFromUnitVectors(Y,zt.set(...U.heading).normalize()),U.kind==="bullet"&&K.scale.set(1,Math.min(1,Math.max(.01,U.through*10)),1)}),"tumble"),it=u(U=>{let K=new Xt;if(U==="arrow"){let V=new $e($,ee);V.position.y=.04,K.add(new $e(B,F),V)}else if(U==="bullet"){let V=new $e(j,ce);V.position.y=-.045,K.add(V)}else if(U==="shell")K.add(new $e(G,ee));else{let V=new $e(ae,pe);V.position.y=.02,K.add(new $e(Z,ne),V)}return K},"shotMade"),ve=u(U=>{let K=ox(U.through,U.seed),V=Math.max(0,1-U.through*5);U.drawn.forEach(H=>{H.scale.setScalar(Math.max(U.size,1e-4)),H.children.forEach((q,ie)=>{if(q.name===D1){q.position.set(0,U.flash??0,0),q.scale.setScalar(Math.max(qy*V,1e-4)),q.visible=V>0;return}let D=K[ie];if(D===void 0){q.visible=!1;return}q.position.set(...D.at),q.scale.setScalar(Math.max(D.size,1e-4)),q.visible=D.size>0})})},"shapePuff"),bt=u((U,K=!1,V=!1)=>{let H=o1(ue,U,K,V);return H.traverse(q=>{q.castShadow=q instanceof $e}),H},"markerOf"),Ue=u(()=>{ue.sweepDue&&ue.sweep([...[...x.values(),...S.values()].flatMap(({original:U})=>U===void 0?[]:[U]),...[...x.values()].flatMap(({idling:U})=>U===void 0?[]:[U.original])])},"sweep"),Ve=u(U=>{let K=U.unit?.model,V=K===void 0?null:ue.rigOf(K);return V!==null&&V.clips.has("idle")?V:null},"idleRig"),N=u((U,K,V)=>{let H=U.original;if(K===null){U.idling=void 0,U.make=()=>H.clone();return}let q=bt(U.marker,!1,!0);U.idling={rig:K,original:q,phase:V},U.make=O1(q,!0)},"drawIdling"),T=u(U=>{U.drawn.forEach(K=>{de.remove(K),gs(K)}),U.drawn=tt(U,de,dt)},"redraw"),J=u((U,K)=>{let{idling:V}=U;V!==void 0&&U.drawn.forEach(H=>Jp(H,V.rig,"idle",K+V.phase,M))},"poseIdling");return{render:u(()=>i.render(s,o),"render"),resize:u((U,K,V)=>{i.setPixelRatio(V),i.setSize(U,K,!1),o.aspect=K>0?U/K:1,o.updateProjectionMatrix()},"resize"),setChunk:u((U,K,V)=>{let H=`${U},${K}`,q=new Mt;q.setAttribute("position",new xt(V.positions,3)),q.setAttribute("normal",new xt(V.normals,3)),q.setAttribute("color",new xt(V.colours,3)),q.setAttribute("surfacesA",new xt(V.surfacesA,4,!0)),q.setAttribute("surfacesB",new xt(V.surfacesB,4,!0)),q.setAttribute("shore",new xt(V.shore,1,!0)),q.setIndex(new xt(V.indices,1)),q.computeBoundingSphere();let ie=d.get(H);ie!==void 0&&(ie.drawn.forEach(se=>a.remove(se)),ie.geometry.dispose());let D={geometry:q,at:[V.u,0,V.v],make:u(()=>{let se=new $e(q,l);return se.castShadow=!0,se.receiveShadow=!0,se},"make"),drawn:[]};D.drawn=tt(D,a),d.set(H,D),Ie.setChunk(V)},"setChunk"),setOverlay:u((U,K,V)=>{let H=`${U},${K}`,q=f.get(H);if(q!==void 0&&(q.drawn.forEach(be=>a.remove(be)),q.geometry.dispose(),q.haze?.dispose(),f.delete(H)),V===null)return;let ie=new Mt;ie.setAttribute("position",new xt(V.positions,3)),ie.setAttribute("normal",new xt(V.normals,3)),ie.setAttribute("color",new xt(V.colours,3)),ie.computeBoundingSphere(),ie.computeBoundingBox();let D=V.haze.positions.length===0?null:new Mt;D!==null&&(D.setAttribute("position",new xt(V.haze.positions,3)),D.setAttribute("color",new xt(V.haze.colours,4)),D.computeBoundingSphere(),D.computeBoundingBox());let se=ie.boundingBox.clone().union(D?.boundingBox??ie.boundingBox),re={geometry:ie,haze:D,span:[V.v+(se?.min.z??0),V.v+(se?.max.z??0)],at:[V.u,0,V.v],make:u(()=>{let be=new $e(ie,m);if(be.castShadow=!0,be.receiveShadow=!0,D!==null){let xe=new $e(D,g);xe.renderOrder=M1,be.add(xe)}return be},"make"),drawn:[]};re.drawn=Pt(re),f.set(H,re)},"setOverlay"),unitAt:u(U=>(o.updateMatrixWorld(),f1([...x].map(([K,{drawn:V}])=>[K,V]),o,U)),"unitAt"),setMarker:u((U,K,V)=>{let H=x.get(U);if(H?.drawn.forEach(D=>{de.remove(D),gs(D)}),H?.idling!==void 0&&gs(H.idling.original),H?.faded!==void 0&&ql(H.faded),x.delete(U),v.delete(U),V===null)return;let q=bt(V),ie={at:K,marker:V,make:u(()=>q.clone(),"make"),drawn:[],original:q};H?.idling!==void 0&&N(ie,Ve(V),H.idling.phase),ie.drawn=tt(ie,de,dt),x.set(U,ie),ie.idling!==void 0&&(v.add(U),J(ie,st)),Ue()},"setMarker"),idle:u((U,K)=>{let{stand:V,start:H,waiting:q}=u1(U,v,ie=>{let D=x.get(ie);return D!==void 0&&Ve(D.marker)!==null},ie=>(x.get(ie)?.opacity??1)<1);return st=K,V.forEach(ie=>{let D=x.get(ie);gs(D.idling.original),N(D,null,0),T(D),v.delete(ie)}),H.forEach(ie=>{let D=x.get(ie);N(D,Ve(D.marker),N1(ie)),T(D),v.add(ie)}),v.forEach(ie=>J(x.get(ie),K)),v.size>0||q},"idle"),setWalker:u((U,K)=>{let V=S.get(U);if(V?.drawn.forEach(se=>{de.remove(se),gs(se)}),V?.original!==void 0&&gs(V.original),V!==void 0&&ql(V.faded),S.delete(U),K===null)return;let H=K.unit?.model,q=H===void 0?null:ue.rigOf(H),ie=bt(K,!0,q!==null),D={at:V?.at??[0,0,0],facing:V?.facing??K.unit?.facing??0,aloft:V?.aloft??0,opacity:1,faded:new Map,make:O1(ie,q!==null),drawn:[],original:ie,rig:q,posed:null};D.drawn=tt(D,de,dt),lt(D),S.set(U,D),Ue()},"setWalker"),placeWalker:u((U,K,V,H=0)=>{let q=S.get(U);q!==void 0&&(q.at=K,q.facing=V,q.aloft=H,q.drawn.forEach((ie,D)=>{let[se,re]=dt[D]??[0,0];ie.position.set(K[0]+se,K[1],K[2]+re)}),lt(q))},"placeWalker"),poseWalker:u((U,K,V,H)=>{let q=S.get(U);q===void 0||q.rig===null||(q.posed={role:K,seconds:V,before:H},q.drawn.forEach(ie=>Jp(ie,q.rig,K,V,M,H)))},"poseWalker"),rigFacts:u(U=>{let{unit:K}=U,V=K?.model===void 0?null:ue.rigOf(K.model);return K===null||V===null?null:L1(V,s1(K))},"rigFacts"),jointAt:u((U,K,V)=>{let H=S.get(U);return H===void 0||H.rig===null?null:fN(H.drawn[0],K,V,dt[0]??[0,0])},"jointAt"),shot:u((U,K,V=0,H="bottle",q=[0,-1,0])=>{let ie=O.get(U);if(K===null){ie?.drawn.forEach(se=>de.remove(se)),O.delete(U);return}let D=ie??{at:K,kind:H,through:V,heading:q,make:u(()=>it(H),"make"),drawn:[]};ie===void 0&&(D.drawn=tt(D,de,dt),O.set(U,D)),D.at=K,D.through=V,D.heading=q,D.drawn.forEach((se,re)=>{let[be,xe]=dt[re]??[0,0];se.position.set(K[0]+be,K[1],K[2]+xe)}),ft(D)},"shot"),fadeMarker:u((U,K)=>{let V=x.get(U),H=Math.min(1,Math.max(0,K));if(!(V===void 0||H===(V.opacity??1))){if(V.opacity=H,V.faded??=new Map,H===1){a1(Ot(V.drawn),V.faded);return}ju(Ot(V.drawn),H,V.faded)}},"fadeMarker"),wake:u((U,K,V=[])=>{let H=ye.get(U);if(K===null){H?.drawn.forEach(D=>de.remove(D)),H?.shape.dispose(),ye.delete(U);return}let q=new Mt;q.setAttribute("position",new xt(Float32Array.from(V),3));let ie=H??{at:K,shape:q,make:u(()=>new $e(ie.shape,oe),"make"),drawn:[]};H===void 0?(ie.drawn=tt(ie,de,dt),ye.set(U,ie)):(H.shape.dispose(),H.shape=q,H.drawn.forEach(D=>{D.geometry=q})),ie.at=K,ie.drawn.forEach((D,se)=>{let[re,be]=dt[se]??[0,0];D.position.set(K[0]+re,K[1],K[2]+be)})},"wake"),puff:u((U,K,V=0,H=1,q=null)=>{let ie=R.get(U);if(K===null){ie?.drawn.forEach(re=>de.remove(re)),R.delete(U);return}let D=cN(U),se=ie??{at:K,through:V,seed:D,size:H,flash:q,make:u(()=>{let re=new Xt;if(ox(0,D).forEach(({shade:be})=>re.add(new $e(E,w[be]))),q!==null){let be=new $e(L,I);be.name=D1,re.add(be)}return re},"make"),drawn:[]};ie===void 0&&(se.drawn=tt(se,de,dt),R.set(U,se)),se.at=K,se.through=V,se.drawn.forEach((re,be)=>{let[xe,Me]=dt[be]??[0,0];re.position.set(K[0]+xe,K[1],K[2]+Me)}),ve(se)},"puff"),fadeWalker:u((U,K)=>{let V=S.get(U),H=Math.min(1,Math.max(0,K));V===void 0||H===V.opacity||(V.opacity=H,ju(V.drawn,H,V.faded))},"fadeWalker"),setYields:u(U=>{je?.drawn.forEach(K=>fe.remove(K)),je=null,he.set(U)!==null&&(je={at:[0,0,0],make:u(()=>he.make(),"make"),drawn:[]},je.drawn=tt(je,fe))},"setYields"),view:u((U,K,V=e)=>{let[H,q]=U.focus,[ie,D,se]=Kl(U,K),re=pN(U,V),{near:be,far:xe}=re;o.position.set(ie,D,se),o.lookAt(H,K,q),o.far=xe*1.2,o.near=Math.max(.1,U.distance*.02),o.updateProjectionMatrix(),Re.near=be,Re.far=xe;let Me=U.distance*2.2,Le=h.shadow.camera;h.position.set(H+30,K+40,q+20),h.target.position.set(H,K,q),Le.left=-Me,Le.right=Me,Le.top=Me,Le.bottom=-Me,Le.near=Math.max(.5,F1-Me*1.6),Le.far=F1+Me*1.6,Le.updateProjectionMatrix(),Ie.follow(H,q,xe*2.2,h.position.clone().sub(h.target.position)),qe.follow(H,q,xe*2.2),Ie.pastThePoles(V.v!==null),qe.pastThePoles(V.v!==null),m.clippingPlanes=V.v===null?b:null,g.clippingPlanes=m.clippingPlanes,Ct=V.v===null;let Qe=re.land,_e=`${Qe.join(";")}${Ct?" stopped":""}`,ze=re.markers,Ke=ze.join(";");_e!==Ye&&(ot=Qe,Ye=_e,d.forEach(ge=>{ge.drawn.forEach(nt=>a.remove(nt)),ge.drawn=tt(ge,a)}),f.forEach(ge=>{ge.drawn.forEach(nt=>a.remove(nt)),ge.drawn=Pt(ge)}),je!==null&&(je.drawn.forEach(ge=>fe.remove(ge)),je.drawn=tt(je,fe))),he.lean(U.pitch),Ke!==Rt&&(dt=ze,Rt=Ke,[...x.values(),...S.values(),...R.values(),...ye.values(),...O.values()].forEach(ge=>{ge.drawn.forEach(nt=>{de.remove(nt),gs(nt)}),ge.drawn=tt(ge,de,dt)}),S.forEach(lt),S.forEach(({drawn:ge,rig:nt,posed:Ht})=>{nt!==null&&Ht!==null&&ge.forEach(cr=>Jp(cr,nt,Ht.role,Ht.seconds,M,Ht.before))}),v.forEach(ge=>{let nt=x.get(ge);nt!==void 0&&J(nt,st)}),R.forEach(ve),O.forEach(ft),S.forEach(ge=>{ge.opacity<1&&ju(ge.drawn,ge.opacity,ge.faded)}),x.forEach(ge=>{ge.faded!==void 0&&(ge.opacity??1)<1&&ju(Ot(ge.drawn),ge.opacity??1,ge.faded)}))},"view"),loadModels:u(async(U,K)=>{await Hw(U,(V,H,q)=>{if(kt){H.parts.forEach(({geometry:D,map:se})=>{D.dispose(),se?.dispose()});return}let ie=Gp(U,V);ue.addModel(ie,H),K(ie,q)},(V,H)=>console.warn(`The 3D map's model ${Gp(U,V)}:`,H),(V,H,q)=>{let ie=Gp(U,V);kt||(ue.addRig(ie,H),ue.rigOf(ie)===H&&K(ie,q))})},"loadModels"),stats:u(()=>({drawCalls:i.info.render.calls,triangles:i.info.render.triangles,geometries:i.info.memory.geometries}),"stats"),dispose:u(()=>{kt=!0,d.forEach(({geometry:U})=>U.dispose()),d.clear(),f.forEach(({geometry:U,haze:K})=>{U.dispose(),K?.dispose()}),f.clear(),m.dispose(),g.dispose(),x.forEach(({faded:U,drawn:K,idling:V})=>{U!==void 0&&ql(U),[...K,...V===void 0?[]:[V.original]].forEach(gs)}),x.clear(),v.clear(),S.forEach(({faded:U,drawn:K,original:V})=>{ql(U),[...K,...V===void 0?[]:[V]].forEach(gs)}),S.clear(),R.clear(),ye.forEach(({shape:U})=>U.dispose()),ye.clear(),oe.dispose(),E.dispose(),w.forEach(U=>U.dispose()),O.clear(),Z.dispose(),ne.dispose(),ae.dispose(),pe.dispose(),L.dispose(),I.dispose(),B.dispose(),$.dispose(),F.dispose(),j.dispose(),ce.dispose(),G.dispose(),ee.dispose(),ue.dispose(),he.dispose(),Ie.dispose(),qe.dispose(),l.dispose(),c.dispose(),i.dispose()},"dispose")}},"createStage");var $y=.25,va={bottle:{flight:350,arc:$y,hit:1,muzzle:0,burst:!1},arrow:{flight:450,arc:.2,hit:.3,muzzle:0,burst:!1},bullet:{flight:80,arc:0,hit:.35,muzzle:.35,burst:!1},shell:{flight:700,arc:.35,hit:1.6,muzzle:.8,burst:!0}},Qp=u(r=>r.kind??"bottle","kindOf"),bN=.06,Ky=.05,Zy=500,k1=400,z1=u(r=>va[r].flight+Zy,"shotOver"),G1=u((r,e,t)=>r.flatMap(({at:n,joint:i,kind:s},o)=>Array.from({length:Math.max(1,e)},(a,l)=>({figure:l,shot:o,joint:i,leaves:n+l*t,at:n,kind:Qp({kind:s})}))).sort((n,i)=>n.leaves-i.leaves),"shotTimes"),V1=u((r,e)=>e===null?[...r]:r.filter(({at:t})=>t<e),"shotsFired"),H1=u((r,e,t,n)=>{let i=e[0]-r[0],s=e[2]-r[2],o=Math.hypot(i,s),a=(t-(Math.max(1,n)-1)/2)*bN;return o===0?[e[0],e[1],e[2]]:[e[0]-s/o*a,e[1],e[2]+i/o*a]},"landsAt"),W1=u((r,e,t,n=$y)=>{let i=Math.min(1,Math.max(0,t)),s=n*Math.hypot(e[0]-r[0],e[2]-r[2])*4*i*(1-i);return[r[0]+(e[0]-r[0])*i,r[1]+(e[1]-r[1])*i+s,r[2]+(e[2]-r[2])*i]},"shotAt"),X1=u((r,e,t,n=$y)=>{let i=Math.min(1,Math.max(0,t)),s=e[0]-r[0],o=e[2]-r[2],a=e[1]-r[1]+n*Math.hypot(s,o)*4*(1-2*i),l=Math.hypot(s,a,o);return l===0?[0,-1,0]:[s/l,a/l,o/l]},"shotHeading");var bs=1/Math.sqrt(3),q1=1.5*bs,xN=u((r,e)=>{let t=-r-e,n=Math.round(r),i=Math.round(e),s=Math.round(t),o=Math.abs(n-r),a=Math.abs(i-e),l=Math.abs(s-t);return o>a&&o>l?n=-i-s:a>l&&(i=-n-s),[n,i]},"roundAxial"),yN=u(({height:r,width:e,wrapsY:t})=>{let n=u((i,s)=>[i+.5+(s&1)*.5,bs+s*q1],"centre");return{topologyId:"hex-odd-r",centre:n,outline:u((i,s)=>{let[o,a]=n(i,s);return[[o,a-bs],[o+.5,a-bs/2],[o+.5,a+bs/2],[o,a+bs],[o-.5,a+bs/2],[o-.5,a-bs/2]]},"outline"),tileAt:u((i,s)=>{let o=i-.5,a=s-bs,[l,c]=xN(o-a*Math.sqrt(3)/3,a*2*Math.sqrt(3)/3);return[l+(c-(c&1))/2,c]},"tileAt"),period:u(()=>({u:e,v:t?r*q1:null}),"period")}},"hexOddRLayout"),Y1=yN;var _N=u(({height:r,width:e,wrapsY:t})=>({topologyId:"square",centre:u((n,i)=>[n+.5,i+.5],"centre"),outline:u((n,i)=>[[n,i],[n+1,i],[n+1,i+1],[n,i+1]],"outline"),tileAt:u((n,i)=>[Math.floor(n),Math.floor(i)],"tileAt"),period:u(()=>({u:e,v:t?r:null}),"period")}),"squareLayout"),$1=_N;var Tr=Math.SQRT2/2,vN=u(({height:r,width:e,wrapsY:t})=>{let n=u((i,s)=>[(2*i+(s&1)+1)*Tr,(s+1)*Tr],"centre");return{topologyId:"staggered-iso",centre:n,outline:u((i,s)=>{let[o,a]=n(i,s);return[[o,a-Tr],[o+Tr,a],[o,a+Tr],[o-Tr,a]]},"outline"),tileAt:u((i,s)=>{let o=i/Tr,a=s/Tr,l=Math.floor((o+a)/2-1+.5),c=Math.floor((a-o)/2+.5),h=l+c;return[Math.floor((l-c)/2),h]},"tileAt"),period:u(()=>({u:e*2*Tr,v:t?r*Tr:null}),"period")}},"staggeredIsoLayout"),K1=vN;var Z1={square:$1,"staggered-iso":K1,"hex-odd-r":Y1},MN=u(r=>{if(!Object.prototype.hasOwnProperty.call(Z1,r.topologyId))throw new Error(`No ground layout for the ${r.topologyId} grid.`);if(r.wrapsY&&r.topologyId!=="square"&&r.height%2!==0)throw new Error(`The ${r.topologyId} grid can't wrap over the poles with an odd number of rows (${r.height}).`);return Z1[r.topologyId](r)},"groundLayoutFor"),J1=MN;var nh=u(r=>{let e=r/1.2;if(e>=1)return 0;let t=1-e;return t*t*t*t*(4*e+1)},"weight");var em=.65,Jy=u(r=>{let e=u(t=>{let n=parseInt(r.slice(t,t+2),16)/255;return n<=.04045?n/12.92:((n+.055)/1.055)**2.4},"channel");return[e(1),e(3),e(5)]},"linear"),xs=.22,tm=.12,jy={low:.2,high:.5},j1=u((r,e,t,n,i,s,o,a,l)=>{let c=s-t,h=o-n,d=c*c+h*h,f=d===0?0:Math.max(0,Math.min(1,((r-t)*c+(e-n)*h)/d)),m=nh(Math.hypot(r-t-c*f,e-n-h*f)),g=1-f;return m===0?-1/0:m*m*(i+(a-i)*(1-g*g*g)+l)},"halfRidge"),ih=u((r,e,t,n)=>{let i=Math.imul(r,374761393)+Math.imul(e,668265263)+Math.imul(t,2246822519)+Math.imul(n,3266489917)|0;return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967296},"chance"),SN=u((r,e,t)=>({u:(ih(r,e,t,1)*2-1)*xs,v:(ih(r,e,t,2)*2-1)*xs,scale:.75+ih(r,e,t,3)*.5}),"peakOf"),wN=u(({layout:r,ranges:e=!0,seed:t=1,source:n})=>{let{width:i,height:s,wrapsY:o}=n,a=r.period(),l=ai([Er({cell:.7,period:a,seed:t}),Er({cell:.35,period:a,seed:t+1}),Er({cell:.17,period:a,seed:t+2})]),c=ai([Er({cell:.45,period:a,seed:t+3}),Er({cell:.22,period:a,seed:t+4})]),h=u((G,ee)=>1-2*Math.abs(c(G,ee)),"ridged"),d=Er({cell:.8,period:a,seed:t+5}),f=Er({cell:.8,period:a,seed:t+6}),m={flat:null,rolling:"rolling",ridged:"ridged",peaked:"ridged"},g=[],_=[],b=[],x=[],v=[],S=u((G,ee)=>{let Z=(G%i+i)%i;return!o&&(ee<0||ee>=s)?null:(ee%s+s)%s*i+Z},"index"),M=u(G=>{let ee=new Array(i*s).fill(1/0),Z=[];G.forEach((ne,ae)=>{ne&&(ee[ae]=0,Z.push([ae%i,Math.floor(ae/i)]))});for(let[ne,ae]of Z){let pe=ee[ae*i+ne]??1/0;pe>=Ei.reach||n.neighbours(ne,ae).forEach(([ye,oe])=>{let de=oe*i+ye;(ee[de]??1/0)>pe+1&&(ee[de]=pe+1,Z.push([ye,oe]))})}return ee},"distancesFromLand"),R=u((G,ee)=>{let Z=n.terrainAt(G,ee);return`${Z}${Z!=="Unknown"&&n.waterAt(G,ee)?" water":""}`},"readAs"),E=u(G=>{if(G!==void 0&&_.length>0&&G.every(([ue,fe])=>{let he=S(ue,fe);return he===null||_[he]===R(ue,fe)}))return[];let ee=[],Z=[],ne=[];for(let ue=0;ue<s;ue++)for(let fe=0;fe<i;fe++){let he=n.terrainAt(fe,ue);ee.push(he),Z.push(he!=="Unknown"&&n.waterAt(fe,ue)),ne.push(ia(he))}let ae=M(ee.map((ue,fe)=>ue!=="Unknown"&&!Z[fe])),pe=ee.map((ue,fe)=>`${ue}${Z[fe]?" water":""}`),ye=[];pe.forEach((ue,fe)=>{_[fe]!==ue&&ye.push([fe%i,Math.floor(fe/i)])}),_=pe,g=ne.map((ue,fe)=>{let he=ue===Tp,Ie=fe%i,qe=Math.floor(fe/i),Re=SN(Ie,qe,t);if(!Z[fe])return{relief:ue.relief,colour:Jy(ue.colour),surface:Zn.indexOf(ue.surface),water:!1,unknown:he,peak:Re};let st=Math.min(ae[fe]??1/0,Ei.reach),ot=Ei.shore+(Ei.deep-Ei.shore)*Math.max(0,st-1)/Math.max(1,Ei.reach-1);return{relief:{...ue.relief,base:ot},colour:Jy(ue.colour),surface:Zn.indexOf("sand"),water:!0,unknown:he,peak:Re}});let oe=v,de=new Map(ye.map(([ue,fe])=>[`${ue},${fe}`,[ue,fe]]));return v=g.map(({relief:ue,unknown:fe},he)=>!fe&&!Z[he]&&ue.shape==="peaked"),ye.some(([ue,fe])=>{let he=fe*i+ue;return v[he]===!0||oe[he]===!0})&&([b,x]=$()),ye.forEach(([ue,fe])=>{let he=fe*i+ue;v[he]!==!0&&oe[he]!==!0||n.neighbours(ue,fe).forEach(([Ie,qe])=>{let Re=S(Ie,qe);Re!==null&&v[Re]===!0&&de.set(`${Ie},${qe}`,[Ie,qe])})}),[...de.values()]},"refresh"),y=u(G=>{let[ee,Z]=r.centre(0,G);return Math.max(...r.outline(0,G).map(([ne,ae])=>Math.hypot(ne-ee,ae-Z)))},"cornerOf"),w=u((G,ee)=>{let[Z,ne]=r.centre(0,G),ae=[];for(let pe=-8;pe<=8;pe++)for(let ye=-6;ye<=6;ye++){let[oe,de]=r.centre(ye,G+pe);Math.hypot(oe-Z,de-ne)<ee+1e-9&&ae.push([ye,pe])}return ae},"offsetsWithin"),L=u((G,ee,Z,ne)=>{if(i>=6&&(!o||s>=6)){let ue=u((Ie,qe)=>{let Re=(Ie%qe+qe)%qe;return Re*2<qe?Re:Re-qe},"nearest"),fe=ue(Z-G,i),he=o?ue(ne-ee,s):ne-ee;return fe===0&&he===0?[]:[[fe,he]]}let ae=u((ue,fe)=>{let he=(ue%fe+fe)%fe;return he===0?[0]:[he,he-fe]},"copies"),[pe,ye]=r.centre(G,ee),oe=ae(Z-G,i).flatMap(ue=>(o?ae(ne-ee,s):[ne-ee]).flatMap(fe=>{if(ue===0&&fe===0)return[];let[he,Ie]=r.centre(G+ue,ee+fe);return[[ue,fe,Math.hypot(he-pe,Ie-ye)]]})),de=Math.min(...oe.map(([,,ue])=>ue));return oe.filter(([,,ue])=>ue<=de+1e-9).map(([ue,fe])=>[ue,fe])},"stepsTo"),I=Math.max(...[0,1].flatMap(G=>{let[ee,Z]=r.centre(0,G);return n.neighbours(0,G).flatMap(([ne,ae])=>L(0,G,ne,ae).map(([pe,ye])=>{let[oe,de]=r.centre(pe,G+ye);return Math.hypot(oe-ee,de-Z)}))}),1),O=[0,1].map(G=>{let[ee,Z]=r.centre(0,G);return w(G,I+xs*Math.SQRT2+tm+1.2+Math.max(y(0),y(1))).flatMap(([ne,ae])=>{let[pe,ye]=r.centre(ne,G+ae);return[ne,ae,pe-ee,ye-Z]})}),B=u((G,ee,Z,ne,ae,pe)=>{let ye=ae-Z,oe=pe-ne,de=ye*ye+oe*oe,ue=de===0?0:Math.max(0,Math.min(1,((G-Z)*ye+(ee-ne)*oe)/de));return Math.hypot(G-Z-ye*ue,ee-ne-oe*ue)},"toSegment"),$=u(()=>{let G=g.map(()=>[]),ee=g.map(()=>[]),Z=Math.max(y(0),y(1));return e?(g.forEach((ne,ae)=>{if(v[ae]!==!0)return;let pe=ae%i,ye=Math.floor(ae/i),[oe,de]=r.centre(pe,ye),ue=new Map;n.neighbours(pe,ye).forEach(([fe,he])=>{let Ie=S(fe,he);Ie!==null&&v[Ie]===!0&&L(pe,ye,fe,he).forEach(([qe,Re])=>ue.set(`${qe},${Re}`,[qe,Re,Ie]))}),ue.forEach(([fe,he,Ie])=>{let qe=g[Ie];if(qe===void 0||he<0||he===0&&fe<0)return;let[Re,st]=r.centre(pe+fe,ye+he),{peak:ot,relief:Ye}=ne,{peak:dt,relief:Rt}=qe,Ct=ot.u,je=ot.v,kt=Re-oe+dt.u,tt=st-de+dt.v,Pt=Ye.base*em*ot.scale,Ot=Rt.base*em*dt.scale,lt=Math.hypot(kt-Ct,tt-je)||1,Y=16+(he+2)*5+(fe+2),zt=(ih(pe,ye,t,Y)*2-1)*tm,ft=jy.low+(jy.high-jy.low)*ih(pe,ye,t,Y+32),it=(Ct+kt)/2-(tt-je)/lt*zt,ve=(je+tt)/2+(kt-Ct)/lt*zt,bt=Math.max(Math.hypot(Ct-it,je-ve),Math.hypot(kt-it,tt-ve))+1.2,Ue={au:Ct,av:je,ah:Pt,mu:it,mv:ve,mh:ft*Math.min(Pt,Ot),bu:kt,bv:tt,bh:Ot,roughness:(Ye.roughness+Rt.roughness)/2,cu:it,cv:ve,reach:bt*bt},Ve=(Math.sqrt(Ue.reach)+Z)**2,N=O[ye&1]??[];for(let T=0;T<N.length;T+=4){let J=N[T+2],me=N[T+3];if((J-it)**2+(me-ve)**2>=Ve||Math.min(B(J,me,Ct,je,it,ve),B(J,me,it,ve,kt,tt))>=1.2+Z)continue;let U=S(pe+N[T],ye+N[T+1]);U!==null&&(G[U]?.push(Ue),ee[U]?.push(J,me))}})}),[G,ee]):[G,ee]},"ranges"),F=u(G=>{let[ee,Z]=r.centre(0,G),ne=Math.max(...r.outline(0,G).map(([pe,ye])=>Math.hypot(pe-ee,ye-Z))),ae=[];for(let pe=-6;pe<=6;pe++)for(let ye=-4;ye<=4;ye++){let[oe,de]=r.centre(ye,G+pe);Math.hypot(oe-ee,de-Z)<1.2+ne+xs*Math.SQRT2+1e-9&&ae.push([ye,pe])}return ae},"offsetsFor"),j=[F(0),F(1)],ce=u((G,ee)=>{let[Z,ne]=r.tileAt(G,ee),ae=S(Z,ne),pe=ae===null?null:g[ae]??null;if(pe===null||pe.unknown)return{height:0,colour:Jy(Tp.colour),surfaces:Zn.map(()=>0),shore:0,unseen:!0};let ye=null,oe=null,de=u(Pt=>Pt==="rolling"?ye??=l(G,ee):oe??=h(G,ee),"noiseHere"),ue=0,fe=0,he=0,Ie=0,qe=Zn.map(()=>0),Re=0,st=0,ot=0,Ye=0,dt=0,Rt=G+xs*d(G,ee),Ct=ee+xs*f(G,ee);(j[ne&1]??[]).forEach(([Pt,Ot])=>{let lt=Z+Pt,Y=ne+Ot,zt=S(lt,Y);if(zt===null)return;let ft=g[zt];if(ft===void 0)return;let[it,ve]=r.centre(lt,Y),{relief:bt,colour:Ue,peak:Ve,surface:N}=ft,T=nh(Math.hypot(G-it,ee-ve)),J=bt.shape==="peaked"?nh(Math.hypot(G-it-Ve.u,ee-ve-Ve.v)):0,me=nh(Math.hypot(Rt-it,Ct-ve))**3;if(T>0){let U=m[bt.shape],K=U===null?0:bt.roughness*de(U);bt.shape==="peaked"?fe+=T*(bt.base*(1-em)+K*.5):fe+=T*(bt.base+K),ue+=T}if(J>0){let U=bt.roughness*de("ridged");he+=J*J*(bt.base*em*Ve.scale+U*.5)}Ie+=me,ft.unknown||(qe[N]=(qe[N]??0)+me,Re+=me,st+=ft.water?me:0),ot+=me*Ue[0],Ye+=me*Ue[1],dt+=me*Ue[2]});let je=ae===null?[]:b[ae]??[],kt=ae===null?[]:x[ae]??[],tt=he;if(je.length>0){let[Pt,Ot]=r.centre(Z,ne);je.forEach((lt,Y)=>{let zt=G-Pt+(kt[Y*2]??0),ft=ee-Ot+(kt[Y*2+1]??0);if((zt-lt.cu)**2+(ft-lt.cv)**2>=lt.reach)return;let it=lt.roughness*de("ridged")*.5;tt=Math.max(tt,j1(zt,ft,lt.au,lt.av,lt.ah,lt.mu,lt.mv,lt.mh,it),j1(zt,ft,lt.bu,lt.bv,lt.bh,lt.mu,lt.mv,lt.mh,it))})}return{height:(ue>0?fe/ue:0)+tt,colour:Ie>0?[ot/Ie,Ye/Ie,dt/Ie]:pe.colour,surfaces:Re>0?qe.map(Pt=>Pt/Re):Zn.map((Pt,Ot)=>Ot===pe.surface?1:0),shore:Re>0?st/Re:pe.water?1:0,unseen:!1}},"sample");return E(),{sample:ce,height:u((G,ee)=>ce(G,ee).height,"height"),refresh:E}},"createRelief"),Q1=wN;var eE=u((r,e,{size:t=16,perUnit:n=8}={})=>{let{u:i,v:s}=r.period(),o=s??Math.max(...r.outline(0,e-1).map(([,d])=>d),...r.outline(1,e-1).map(([,d])=>d)),a=Math.max(1,Math.round(i/t)),l=Math.max(1,Math.round(o/t)),c=Math.max(2,Math.round(i/a*n)),h=Math.max(2,Math.round(o/l*n));return{chunksU:a,chunksV:l,stepsU:c,stepsV:h,spacingU:i/a/c,spacingV:o/l/h}},"chunkGrid"),tE=u((r,e,t,n)=>{let{stepsU:i,stepsV:s,spacingU:o,spacingV:a}=r,l=t*i,c=n*s,h=u((L,I)=>[L*o,I*a],"at"),d=i+3,f=new Float64Array(d*(s+3)),m=(i+1)*(s+1),g=new Float32Array(m*3),_=new Uint8Array(m*4),b=new Uint8Array(m*4),x=new Uint8Array(m),v=new Float32Array(m);for(let L=-1;L<=s+1;L++)for(let I=-1;I<=i+1;I++){let O=e.sample(...h(l+I,c+L)),{height:B,colour:$}=O;if(f[(L+1)*d+(I+1)]=B,I>=0&&I<=i&&L>=0&&L<=s){let F=L*(i+1)+I;g.set($,F*3),O.surfaces.forEach((j,ce)=>{(ce<4?_:b)[F*4+ce%4]=Math.round(j*255)}),x[F]=Math.round(O.shore*255),v[F]=O.unseen?1:0}}let S=u((L,I)=>f[(I+1)*d+(L+1)]??0,"height"),M=new Float32Array(m*3),R=new Float32Array(m*3),[E,y]=h(l,c);for(let L=0;L<=s;L++)for(let I=0;I<=i;I++){let O=L*(i+1)+I,[B,$]=h(l+I,c+L),F=(S(I+1,L)-S(I-1,L))/(2*o),j=(S(I,L+1)-S(I,L-1))/(2*a),ce=Math.hypot(F,1,j);M[O*3]=B-E,M[O*3+1]=S(I,L),M[O*3+2]=$-y,R[O*3]=-F/ce,R[O*3+1]=1/ce,R[O*3+2]=-j/ce}let w=new Uint32Array(i*s*6);for(let L=0;L<s;L++)for(let I=0;I<i;I++){let O=L*(i+1)+I,B=O+1,$=O+i+1,F=$+1,j=(L*i+I)*6;w.set([O,$,B,B,$,F],j)}return{u:E,v:y,positions:M,normals:R,colours:g,surfacesA:_,surfacesB:b,shore:x,unseen:v,indices:w}},"buildChunk"),Qy=u((r,e,t,n)=>{let i=r.stepsU*r.spacingU,s=r.stepsV*r.spacingV,o=e.period().v!==null,a=new Set;return t.forEach(([l,c])=>{let[h,d]=e.centre(l,c);for(let f=Math.floor((h-n)/i);f<=Math.floor((h+n)/i);f++)for(let m=Math.floor((d-n)/s);m<=Math.floor((d+n)/s);m++){if(!o&&(m<0||m>=r.chunksV))continue;let g=(f%r.chunksU+r.chunksU)%r.chunksU,_=o?(m%r.chunksV+r.chunksV)%r.chunksV:m;a.add(`${g},${_}`)}}),[...a].map(l=>l.split(",").map(Number))},"chunksNear");var di=u((r,e,t,n,i)=>({kind:r,count:e,size:t,colour:n,detail:i}),"plant"),nE={Forest:{plants:[di("conifer",8,[.95,1.4],"#2c5230","#4a3424")],conifers:[.15,.95],canopy:"woods"},Jungle:{plants:[di("broadleaf",7,[1.05,1.55],"#2b6a2a","#4d3a26"),di("palm",2,[.9,1.2],"#3f8a34","#6b5236")],canopy:"woods"},Swamp:{plants:[di("reeds",7,[.8,1.2],"#7a8a4a","#5a6a38"),di("deadTree",2,[.8,1.1],"#4a4036","#4a4036")],canopy:"swamp"},Grassland:{plants:[di("bush",2,[.8,1.2],"#4e7a32","#4e7a32")]},Plains:{plants:[di("shrub",3,[.7,1.1],"#7a7a3a","#6a5a36")]},Tundra:{plants:[di("scrub",4,[.7,1.1],"#6a6a4e","#5a5444")]},Hills:{plants:[di("shrub",2,[.8,1.1],"#5e6e36","#5e5036"),di("rock",1,[.8,1.2],"#7d756a","#7d756a")]},Mountains:{plants:[di("rock",3,[.9,1.4],"#77706a","#77706a")]},Desert:{plants:[di("rock",2,[.7,1.1],"#a8936a","#a8936a"),di("cactus",1,[.8,1.1],"#5a7a3e","#5a7a3e")]}},Ql=u(r=>Object.prototype.hasOwnProperty.call(nE,r)?nE[r]:null,"growthOf");var iE=["Ocean"],EN=["Mountains"],AN=["Mine","Fortress","Airbase"],TN=["River"],Ln=u((r,e)=>(r.improvements??[]).some(({_:t})=>t===e),"has"),RN=["Irrigation","Farmland","Fortress","Airbase"],rE=u(r=>r.city||RN.some(e=>Ln(r,e))?null:Ql(r.terrain?._??"Unknown")?.canopy??null,"woodsOf"),CN=u((r,e)=>{if(r.city){let f=r.city;return{road:null,railroad:null,irrigation:null,mine:!1,fortress:!1,airbase:!1,pollution:!1,specials:[],hut:!1,terrain:r.terrain?._??"Unknown",vegetation:!1,woods:[],paths:[],city:gw(dx(String(f.id??f.name??"")),f.growth?.size??1,e.filter(({tile:m})=>Ln(m,"Road")&&(Ln(r,"Road")||Ln(m,"Railroad"))).map(({offset:m})=>m),e.filter(({tile:m})=>iE.includes(m.terrain?._??"")).map(({offset:m})=>m)),suburbs:[],beside:[]}}let t=Ln(r,"Road"),n=Ln(r,"Railroad"),i=t?e.filter(f=>Ln(f.tile,"Road")).map(({offset:f})=>f):[],s=t?e.filter(f=>!!f.tile.city||Ln(f.tile,"Railroad")).map(({offset:f})=>f):[],o=u((f,m)=>f[0]===m[0]&&f[1]===m[1],"same"),a=i.length===0&&s.length===0,l={road:t?{joins:i.filter(f=>!n||!s.some(m=>o(m,f))),alone:a&&!n}:null,railroad:t&&n?{joins:s,alone:a}:null,irrigation:Ln(r,"Farmland")?"farmland":Ln(r,"Irrigation")?"irrigation":null,mine:Ln(r,"Mine"),fortress:Ln(r,"Fortress"),airbase:Ln(r,"Airbase"),pollution:Ln(r,"Pollution"),specials:(r.terrain?.features??[]).map(({_:f})=>f).filter(f=>!TN.includes(f)).map(f=>[r.terrain._,f]),hut:r.goodyHut!==null&&r.goodyHut!==void 0,terrain:r.terrain?._??"Unknown",vegetation:Ql(r.terrain?._??"Unknown")!==null,woods:[],paths:[],city:null,suburbs:[],beside:[]},c=rE(r),h=r.terrain?._??"Unknown";return r.isWater!==!0&&!iE.includes(h)&&h!=="Unknown"&&!EN.includes(h)&&!AN.some(f=>Ln(r,f))&&(l.suburbs=e.flatMap(({offset:f,tile:{city:m}})=>{let g=m?yw(m.growth?.size??1):0;return m&&g>0?[{seed:dx(String(m.id??m.name??"")),steps:g,city:f}]:[]}).sort((f,m)=>f.seed-m.seed||f.city[0]-m.city[0]||f.city[1]-m.city[1])),l.suburbs.length>0&&(l.beside=e.filter(({tile:{city:f}})=>!!f).map(({offset:f})=>f)),c!==null&&(l.woods=e.filter(f=>rE(f.tile)===c).map(({offset:f})=>f)),(c!==null||l.suburbs.length>0)&&(l.paths=e.filter(f=>!!f.tile.city||Ln(f.tile,"Road")).map(({offset:f})=>f)),l.road===null&&l.irrigation===null&&!l.mine&&!l.fortress&&!l.airbase&&!l.pollution&&l.specials.length===0&&!l.hut&&!l.vegetation&&l.suburbs.length===0?null:l},"overlayFor"),sE=CN;var Vt=u((r,e,t,n,i,s)=>({shape:r,colour:e,count:t,...n===void 0?{}:{detail:n},...i===void 0?{}:{pale:i},...s===void 0?{}:{coats:s}}),"look"),oE={Coal:Vt("rocks","#26262a",4),Gold:Vt("rocks","#d8b13a",3),Gems:Vt("rocks","#59c2d6",4,"#b05ad0"),Iron:Vt("rocks","#8a5a44",4),Wheat:Vt("crop","#d9b84a",5,"#a88a2c"),Spice:Vt("crop","#c0452e",4,"#5d7a2a"),Wine:Vt("crop","#6a2c5e",4,"#5d7a2a"),Silk:Vt("crop","#e9e2cf",3,"#4f7a34"),Fruit:Vt("crop","#e08a2a",4,"#3f7a2a"),Horse:Vt("horse","#6b4226",3,"#241a12","#e8e2d6",["#9c5b2e","#cfc9bd"]),Buffalo:Vt("ox","#4a3424",3,"#2a1e16","#d8ccb0"),Game:Vt("deer","#a9835a",2,"#5a4430","#ece2cc"),"Tundra:Game":Vt("deer","#7d6c56",2,"#4a3e30","#ece6da"),Furs:Vt("fox","#b0602a",2,"#2e2218","#f0e8dc"),Ivory:Vt("elephant","#8a8580",1,"#77726d","#f2ead8"),Seal:Vt("seal","#55585b",2,"#3a3c3e","#8a8d90"),Pheasant:Vt("bird","#8a3a22",3,"#2f5a3a","#d8b040"),Fish:Vt("fish","#b8c4cc",5),Whales:Vt("whale","#3a4048",1),Oil:Vt("derrick","#222224",1,"#121214"),Oasis:Vt("oasis","#3f7a32",3,"#3f86a8"),Peat:Vt("peat","#4a3624",4),Shield:Vt("logs","#7a5532",6,"#e2c690")},PN=Vt("cairn","#9a9690",5),aE=u((r,e)=>{let t=u(n=>Object.prototype.hasOwnProperty.call(oE,n)?oE[n]:void 0,"own");return t(`${r}:${e}`)??t(e)??PN},"specialLook");var St=u((r,e,t,n,i=0,s=0)=>({shape:r,colour:e,at:t,size:n,...i===0?{}:{pitch:i},...s===0?{}:{roll:s}}),"part"),er=u((r,e,[t,n,i],s,o=0,a=0)=>[St(r,e,[-t,n,i],s,o,a),St(r,e,[t,n,i],s,o,-a)],"pair"),rh=u((r,e,t,n,i,s=0)=>[t,-t].flatMap(o=>[...er(r,"coat",[e,n/2,o],[i,n,i]),...s===0?[]:er("box","detail",[e,s/2,o],[i*1.15,s,i*1.25])]),"legs"),e_={horse:[St("sphere","coat",[0,.1,0],[.058,.062,.16]),...rh("box",.017,.052,.08,.015,.012),St("box","coat",[0,.143,.085],[.03,.032,.08],-.93),St("box","detail",[0,.156,.076],[.011,.014,.076],-.93),St("box","coat",[0,.168,.132],[.027,.03,.062],.55),St("box","detail",[0,.086,-.094],[.014,.014,.07],-.93)],ox:[St("sphere","coat",[0,.088,0],[.08,.075,.16]),St("sphere","coat",[0,.118,.04],[.065,.06,.07]),...rh("box",.024,.05,.06,.02,.01),St("box","detail",[0,.085,.1],[.042,.045,.05],.35),...er("cone","pale",[.03,.11,.098],[.01,.04,.01],0,1.1),St("box","detail",[0,.08,-.085],[.01,.01,.05],-1.1)],deer:[St("sphere","coat",[0,.09,0],[.042,.048,.11]),...rh("box",.012,.038,.072,.01,.008),St("box","coat",[0,.125,.058],[.02,.022,.055],-1.1),St("box","coat",[0,.15,.078],[.02,.022,.042],.45),...er("box","pale",[.012,.18,.068],[.005,.05,.005],0,.45),...er("box","pale",[.02,.19,.08],[.004,.028,.004],-.6,.2),St("ball","pale",[0,.1,-.058],[.018,.018,.014])],elephant:[St("sphere","coat",[0,.125,0],[.11,.1,.17]),...rh("cylinder",.032,.052,.085,.036),St("sphere","coat",[0,.155,.095],[.075,.075,.065]),...er("box","detail",[.046,.155,.083],[.01,.065,.05],0,.2),St("cylinder","coat",[0,.092,.132],[.02,.095,.02],-.3),...er("cone","pale",[.022,.108,.135],[.012,.065,.012],1.05),St("box","detail",[0,.11,-.09],[.008,.008,.05],-1.2)],fox:[St("sphere","coat",[0,.05,0],[.03,.032,.08]),...rh("box",.009,.027,.037,.008,.008),St("ball","coat",[0,.068,.048],[.032,.03,.036]),St("cone","detail",[0,.064,.074],[.015,.032,.015],Math.PI/2),...er("cone","coat",[.009,.088,.046],[.011,.02,.011]),St("sphere","coat",[0,.046,-.064],[.024,.024,.075],-.4),St("ball","pale",[0,.031,-.1],[.017,.017,.026],-.4)],seal:[St("sphere","coat",[0,.026,0],[.065,.05,.16],-.15),St("sphere","coat",[0,.058,.078],[.042,.04,.048]),St("ball","pale",[0,.052,.1],[.022,.02,.026]),...er("box","detail",[.036,.012,.036],[.048,.007,.022],0,.3),...er("box","detail",[.014,.012,-.09],[.02,.006,.045],0,.15)],bird:[St("ball","coat",[0,.036,0],[.038,.036,.058]),St("ball","detail",[0,.058,.03],[.022,.026,.024]),St("cone","pale",[0,.057,.046],[.007,.014,.007],Math.PI/2),St("box","coat",[0,.046,-.062],[.01,.005,.085],.35),...er("box","detail",[.008,.009,.004],[.004,.018,.004])]},lE=u(r=>e_[r].reduce((e,{at:t,size:[n,i,s],pitch:o=0,roll:a=0})=>{let l=Math.cos(o),c=Math.sin(o),h=Math.cos(a),d=Math.sin(a),f=(Math.abs(h)*n+Math.abs(d)*i)/2,m=(Math.abs(c*d)*n+Math.abs(c*h)*i+Math.abs(l)*s)/2;return{across:Math.max(e.across,Math.abs(t[0])+f),along:Math.max(e.along,Math.abs(t[2])+m)}},{across:0,along:0}),"beastReach");var c_=u(()=>({positions:[],normals:[],colours:[],haze:{positions:[],colours:[]}}),"soup"),fi={field:.01,road:.014,ballast:.016,rail:.02},no=.06,cE="#8c7a58",uE="#5f5953",IN="#a9abae",LN="#5e432b",NN="#4f87b0",DN="#7da33f",ON=["#c2b448","#8fae3e"],hE="#9d968a",UN="#4a4c50",o_="#6b4a2e",dE="#eef3f5",FN="#7a6a58",BN="#b89a5a",kN="#c9b48e",t_="#584b34",ec=[.07,.16],u_=1.4,Ri=new gr(1,1,1),tc=new Bn(.5,.5,1,8),ch=new qi(.5,1,8),SE=new qi(.5,1,4),Sa=new qs(.5,8,6),sh=new Bn(.5,.5,1,4,1,!0),oh=new qi(.5,1,5,1,!0),lh=new qs(.5,5,3),zN=new Bn(.5,.5,1,8,1,!0),GN=new gu(.5,8),n_={mine:[3,.72],hut:[11,.64],special:u(r=>[r+1,.85],"special")},VN=[.2,.16,.13,.1],HN=.03,WN=.05,wE=.22,fE=72,pn=u((r,e)=>{let t=Math.imul(r^Math.imul(e+1,2654435761),2246822507);return t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,(t>>>0)/4294967296},"fraction"),h_=.05,pE=new Map,ah=u(r=>{let e=pE.get(r);if(e===void 0){let{r:t,g:n,b:i}=new Se(r);e=[t,n,i],pE.set(r,e)}return e},"colourOf"),mE=new WeakMap,XN=u(r=>{let e=mE.get(r);if(e===void 0){let t=r.index===null?r:r.toNonIndexed();e={positions:new Float32Array(t.getAttribute("position").array),normals:new Float32Array(t.getAttribute("normal").array)},mE.set(r,e),t!==r&&t.dispose()}return e},"trianglesOf"),qN=new He,YN=new Xe,$N=new X,KN=new Jt,ZN=new ri,JN=new X,At,EE,$t,im,m_=class m_{constructor(e,t){z(this,At);this.lines=[];this.runs=[];this.past=[];this.taken=[];this.grown=[];this.soup=e,this.place=t}ground(e,t,n=!1){let i=this.place.heightAt(e,t);return n?Math.max(0,i):i}strip(e,t,n,i,s){let o=ah(i),a=Math.hypot(t[0]-e[0],t[1]-e[1]);if(a===0)return;let l=Math.max(1,Math.ceil(a/no)),c=Math.max(1,Math.ceil(n/no)),h=[-(t[1]-e[1])/a*n,(t[0]-e[0])/a*n],d=u((f,m)=>[e[0]+(t[0]-e[0])*f+h[0]*(m-.5),e[1]+(t[1]-e[1])*f+h[1]*(m-.5)],"at");for(let f=0;f<l;f++)for(let m=0;m<c;m++){let[g,_]=d(f/l,(m+1)/c),[b,x]=d((f+1)/l,(m+1)/c),[v,S]=d(f/l,m/c),[M,R]=d((f+1)/l,m/c);A(this,At,$t).call(this,g,_,s,o),A(this,At,$t).call(this,b,x,s,o),A(this,At,$t).call(this,v,S,s,o),A(this,At,$t).call(this,b,x,s,o),A(this,At,$t).call(this,M,R,s,o),A(this,At,$t).call(this,v,S,s,o)}}ribbon(e,t,n,i,s){let o=ah(n),a=e.map((l,c)=>{let h=e[c-1]??l,d=e[c+1]??l,[f,m]=s?.[c]??[d[0]-h[0],d[1]-h[1]],g=Math.hypot(f,m);return g===0?[0,0]:[-m/g*t,f/g*t]});for(let l=0;l+1<e.length;l++){let c=e[l],h=e[l+1],d=a[l],f=a[l+1],m=Math.hypot(h[0]-c[0],h[1]-c[1]);if(m===0)continue;let g=Math.max(1,Math.ceil(m/no)),_=Math.max(1,Math.ceil(t/no)),b=u((x,v)=>[c[0]+(h[0]-c[0])*x+(d[0]+(f[0]-d[0])*x)*(v-.5),c[1]+(h[1]-c[1])*x+(d[1]+(f[1]-d[1])*x)*(v-.5)],"at");for(let x=0;x<g;x++)for(let v=0;v<_;v++){let[S,M]=b(x/g,(v+1)/_),[R,E]=b((x+1)/g,(v+1)/_),[y,w]=b(x/g,v/_),[L,I]=b((x+1)/g,v/_);A(this,At,$t).call(this,S,M,i,o),A(this,At,$t).call(this,R,E,i,o),A(this,At,$t).call(this,y,w,i,o),A(this,At,$t).call(this,R,E,i,o),A(this,At,$t).call(this,L,I,i,o),A(this,At,$t).call(this,y,w,i,o)}}}haze(e,t,n,i,s,o){let[a,l,c]=ah(n),[h,d]=e,f=Math.max(2,Math.ceil(t/no)),m=Math.max(14,Math.ceil(2*Math.PI*t/no)),g=u((x,v)=>{let S=v/m*Math.PI*2,M=x/f*t;return[h+Math.cos(S)*M,d+Math.sin(S)*M]},"at"),_=u((x,v)=>{let S=x/f,M=(1-S*S)**1.5,R=.65+.35*pn(o,x*97+v%m);return i*M*R},"solid"),b=u((x,v)=>{let[S,M]=x===0?[h,d]:g(x,v);this.soup.haze.positions.push(S,this.ground(S,M,!0)+s,M),this.soup.haze.colours.push(a,l,c,_(x,v))},"point");for(let x=0;x<f;x++)for(let v=0;v<m;v++)x===0?(b(0,0),b(1,v+1),b(1,v)):(b(x,v),b(x,v+1),b(x+1,v),b(x,v+1),b(x+1,v+1),b(x+1,v))}disc(e,t,n,i,s=12){let o=ah(n),[a,l]=e,c=Math.max(1,Math.ceil(t/no)),h=u((d,f)=>{let m=f/s*Math.PI*2,g=d/c*t;return[a+Math.cos(m)*g,l+Math.sin(m)*g]},"at");for(let d=0;d<c;d++)for(let f=0;f<s;f++){let m=h(d+1,f),g=h(d+1,f+1);if(d===0)A(this,At,$t).call(this,a,l,i,o),A(this,At,$t).call(this,...g,i,o),A(this,At,$t).call(this,...m,i,o);else{let _=h(d,f),b=h(d,f+1);A(this,At,$t).call(this,..._,i,o),A(this,At,$t).call(this,...b,i,o),A(this,At,$t).call(this,...m,i,o),A(this,At,$t).call(this,...b,i,o),A(this,At,$t).call(this,...g,i,o),A(this,At,$t).call(this,...m,i,o)}}}solid(e,t,n,i,s=[0,0,0],o="XYZ"){let{positions:a,normals:l}=XN(e),c=qN.compose($N.set(...t),KN.setFromEuler(ZN.set(...s,o)),JN.set(...n)),h=c.elements,d=YN.getNormalMatrix(c).elements,[f,m,g]=ah(i),_=this.soup;for(let b=0;b<a.length;b+=3){let x=a[b],v=a[b+1],S=a[b+2],M=l[b],R=l[b+1],E=l[b+2],y=d[0]*M+d[3]*R+d[6]*E,w=d[1]*M+d[4]*R+d[7]*E,L=d[2]*M+d[5]*R+d[8]*E,I=Math.hypot(y,w,L)||1;_.positions.push(h[0]*x+h[4]*v+h[8]*S+h[12],h[1]*x+h[5]*v+h[9]*S+h[13],h[2]*x+h[6]*v+h[10]*S+h[14]),_.normals.push(y/I,w/I,L/I),_.colours.push(f,m,g)}}spot(e,t){let n=pn(this.place.seed,e)*Math.PI*2,[i,s]=this.place.centre;return[i+Math.cos(n)*t*this.place.radius,s+Math.sin(n)*t*this.place.radius]}clearance(e,t,n,i=!1){let[s,o]=this.place.centre,{outline:a}=this.place,l=Math.hypot(e-s,t-o)-wE-n;if(this.lines.forEach(([c,h])=>{l=Math.min(l,_E(e,t,c,h)-WN-n)}),this.taken.forEach(([c,h,d])=>{l=Math.min(l,Math.hypot(e-c,t-h)-d-n)}),i){let c=Math.min(...a.map((h,d)=>_E(e,t,h,a[(d+1)%a.length])))*(this.place.owns(e,t)?1:-1);l=Math.min(l,c+HN-n)}return l}hasRoom(e,t,n){return this.clearance(e,t,n)>=0}claim(e,t,n){let{at:i}=A(this,At,im).call(this,e,t,n);return this.taken.push([i[0],i[1],n]),i}claimMost(e,t,n){let i=A(this,At,im).call(this,e,t,n[0],!0),s=n[0];for(let o of n.slice(1)){if(i.clear>=0)break;i=A(this,At,im).call(this,e,t,o,!0),s=o}return this.taken.push([i.at[0],i.at[1],s]),[i.at[0],i.at[1],s]}};At=new WeakSet,EE=u(function(e,t){let n=h_,i=(this.place.heightAt(e+n,t)-this.place.heightAt(e-n,t))/(2*n),s=(this.place.heightAt(e,t+n)-this.place.heightAt(e,t-n))/(2*n),o=Math.hypot(i,1,s);return[-i/o,1/o,-s/o]},"#normal"),$t=u(function(e,t,n,i){this.soup.positions.push(e,this.ground(e,t)+n,t),this.soup.normals.push(...A(this,At,EE).call(this,e,t)),this.soup.colours.push(...i)},"#point"),im=u(function(e,t,n,i=!1){let s=pn(this.place.seed,e)*Math.PI*2,[o,a]=this.place.centre,l=[o,a],c=-1/0;for(let h of i?[t,t*.94,t*.88,t*1.1]:[t,t*.88,t*1.1])for(let d=0;d<fE;d++){let f=s+d/fE*Math.PI*2,m=[o+Math.cos(f)*h*this.place.radius,a+Math.sin(f)*h*this.place.radius],g=this.clearance(m[0],m[1],n,i);if(g>=0)return{at:m,clear:g};g>c&&(l=m,c=g)}return{at:l,clear:c}},"#search"),u(m_,"Layer");var a_=m_,rm=u((r,e)=>{let[t,n]=r.centre,[i,s]=r.toward(e);return[(t+i)/2,(n+s)/2]},"halfway"),d_=u(r=>r.alone||r.joins.length>0,"drawn"),jN=.09,QN=8,l_=u(([r,e])=>300+(r+3)*7+(e+3),"wayIndex"),sm=u((r,e)=>{let[t,n]=r.centre,[i,s]=rm(r,e),o=i-t,a=s-n,l=Math.hypot(o,a);if(l===0)return{points:[[t,n]],ways:[[0,0]]};let c=(pn(r.seed,l_(e))*2-1)*jN*l/(4/9),h=[-a/l,o/l],d=[t+o/3+h[0]*c,n+a/3+h[1]*c],f=[t+o*2/3,n+a*2/3],m=Math.max(QN,Math.ceil(l*1.02/no)),g=Array.from({length:m+1},(_,b)=>b/m);return{points:g.map(_=>{let b=(1-_)**3,x=3*(1-_)**2*_,v=3*(1-_)*_**2,S=_**3;return[b*t+x*d[0]+v*f[0]+S*i,b*n+x*d[1]+v*f[1]+S*s]}),ways:g.map(_=>{let b=3*(1-_)**2,x=6*(1-_)*_,v=3*_**2,S=b*(d[0]-t)+x*(f[0]-d[0])+v*(i-f[0]),M=b*(d[1]-n)+x*(f[1]-d[1])+v*(s-f[1]),R=Math.hypot(S,M);return R===0?[o/l,a/l]:[S/R,M/R]})}},"roadHalf"),eD=u((r,e)=>{let{place:t}=r;d_(e)&&(e.joins.forEach(n=>{let{points:i,ways:s}=sm(t,n);r.ribbon(i,.07,cE,fi.road,s)}),r.disc(t.centre,e.alone?.09:.035,cE,fi.road))},"road"),tD=u((r,e)=>{if(!d_(e))return;let{place:t}=r;(e.alone?[[t.centre[0]+.12,t.centre[1]],[t.centre[0]-.12,t.centre[1]]]:e.joins.map(i=>rm(t,i))).forEach(i=>{let[s,o]=t.centre,a=Math.hypot(i[0]-s,i[1]-o),l=a===0?[0,0]:[-(i[1]-o)/a*.025,(i[0]-s)/a*.025];r.strip(t.centre,i,.1,uE,fi.ballast);for(let c=.1;c<1;c+=.2){let h=[s+(i[0]-s)*c,o+(i[1]-o)*c];r.strip([h[0]+l[0]*1.8,h[1]+l[1]*1.8],[h[0]-l[0]*1.8,h[1]-l[1]*1.8],.014,LN,fi.ballast+.002)}[1,-1].forEach(c=>r.strip([s+l[0]*c,o+l[1]*c],[i[0]+l[0]*c,i[1]+l[1]*c],.01,IN,fi.rail))}),r.disc(t.centre,.05,uE,fi.ballast)},"railroad"),i_=.04,nD=u((r,e,t,n,i)=>{let s=i.filter(l=>Math.min(...l.map(([,c])=>c))-Ft<t+n/2&&Math.max(...l.map(([,c])=>c))+Ft>t-n/2).map(l=>[Math.min(...l.map(([c])=>c))-Ft,Math.max(...l.map(([c])=>c))+Ft]).sort((l,c)=>l[0]-c[0]),o=[],a=r;return s.forEach(([l,c])=>{l-a>=i_&&o.push([a,Math.min(l,e)]),a=Math.max(a,c)}),e-a>=i_&&o.push([a,e]),o.filter(([l,c])=>c-l>=i_)},"rowAround"),iD=u((r,e,t)=>{let{centre:n,inner:i}=r.place,s=e==="farmland"?6:4,o=i*.9,a=o*2/s,l=u((c,h,d,f)=>nD(n[0]-o,n[0]+o,c,h,t).forEach(([m,g])=>r.strip([m,c],[g,c],h,d,f)),"across");for(let c=0;c<s;c++)l(n[1]-o+a*(c+.5),a*.8,e==="farmland"?ON[c%2]:DN,fi.field),c>0&&l(n[1]-o+a*c,.016,NN,fi.field+.001)},"fields"),gE=["#9c5a3c","#7d4a36","#6f6a64","#8b6b4a"],bE="#a39a88",rD="#c4b8a2",sD=.045,xE=.86,oD=u((r,e)=>{let{place:t}=r,[n,i]=t.centre,{plaza:s,streets:o,lots:a}=bw(t,e,[n,i+ga]);r.disc(s.at,s.radius,bE,fi.road,16),o.forEach(([l,c])=>r.strip(l,c,Gu,bE,fi.road)),a.forEach(l=>AE(r,l))},"city"),AE=u((r,e)=>{let{at:[t,n],width:i,facing:s,storeys:o}=e,a=[[t,n],...Bl(e)].map(([h,d])=>r.ground(h,d)),l=Math.min(...a)-.005,c=Math.max(...a)+sD*o;r.solid(Ri,[t,(l+c)/2,n],[i*xE,c-l,i*xE],rD,[0,s,0]),r.solid(SE,[t,c+i*.2,n],[i*Math.SQRT2,i*.4,i*Math.SQRT2],gE[Math.floor(e.roof*gE.length)],[0,s+Math.PI/4,0])},"house"),aD=u((r,e)=>{if(e.suburbs.length===0)return[];let{place:t}=r,n=u((a,l)=>a[0]===l[0]&&a[1]===l[1],"same"),i=u(a=>{let[l,c]=t.toward(a);return[l,c+ga]},"standOf"),s={runs:[...r.runs],lines:[...r.past],lanes:e.beside.filter(a=>![...e.road?.joins??[],...e.railroad?.joins??[]].some(l=>n(l,a))).map(a=>[[t.centre[0],t.centre[1]],i(a)]),stands:e.beside.map(i),taken:r.taken,ground:u((a,l)=>t.heightAt(a,l),"ground")};return e.suburbs.flatMap(a=>_w(t,a,{...s,others:e.beside.filter(l=>!n(l,a.city)).map(l=>t.toward(l))})).map(a=>(AE(r,a),r.taken.push([a.at[0],a.at[1],a.width/2*Math.SQRT2]),Bl(a)))},"suburbs"),lD=u((r,[e,t])=>{let n=r.ground(e,t);r.solid(Ri,[e-.02,n+.05,t],[.01,.11,.01],o_,[0,0,-.3]),r.solid(Ri,[e+.02,n+.05,t],[.01,.11,.01],o_,[0,0,.3]),r.solid(tc,[e,n+.1,t],[.05,.008,.05],"#3a3a3a",[Math.PI/2,0,0]),[[.07,.03],[-.05,.06]].forEach(([i,s])=>{let o=e+i,a=t+s;r.solid(ch,[o,r.ground(o,a)+.02,a],[.07,.04,.07],FN)})},"mine"),cD=u(r=>{let[e,t]=r.place.centre,n=r.place.radius*.62,i=r.ground(e,t);[[0,-n,n*2,.025],[0,n,n*2,.025],[-n,0,.025,n*2],[n,0,.025,n*2]].forEach(([s,o,a,l])=>{let c=e+s,h=t+o;r.solid(Ri,[c,Math.max(i,r.ground(c,h))+.02,h],[a,.05,l],hE)}),[[-n,-n],[n,-n],[-n,n],[n,n]].forEach(([s,o])=>{let a=e+s,l=t+o;r.solid(tc,[a,r.ground(a,l)+.035,l],[.045,.07,.045],hE)})},"fortress"),uD=u(r=>{let[e,t]=r.place.centre,n=r.place.radius*.75,[i,s]=r.claim(5,.6,.08);r.strip([e-n,t+.12],[e+n,t+.12],.12,UN,fi.road+.002),r.strip([e-n*.9,t+.12],[e+n*.9,t+.12],.008,"#e8e8e8",fi.road+.004),r.solid(Ri,[i,r.ground(i,s)+.03,s],[.12,.06,.08],"#8a9096")},"airbase"),hD=u(r=>{let{radius:e,seed:t}=r.place;r.haze(r.place.centre,e*u_,t_,.85,ec[0],t),r.haze(r.place.centre,e*1.2,t_,.5,(ec[0]+ec[1])/2,t+7);for(let n=0;n<3;n++)r.haze(r.spot(11+n,.45),e*(.55+.2*pn(t,50+n)),t_,.5,ec[0]+(ec[1]-ec[0])*((n+1)/3),t+n+1)},"pollution"),dD={box:Ri,sphere:Sa,ball:lh,cylinder:tc,cone:ch},fD=u((r,e,[t,n],i,s,o)=>{let a=r.ground(t,n),l=Math.cos(s),c=Math.sin(s);e_[e].forEach(({shape:h,colour:d,at:[f,m,g],size:_,pitch:b=0,roll:x=0})=>r.solid(dD[h],[t+(f*l+g*c)*i,a+m*i,n+(g*l-f*c)*i],[_[0]*i,_[1]*i,_[2]*i],o[d],[b,s,x],"YXZ"))},"beast"),pD=u((r,e,t,n,i,s)=>{let{seed:o}=r.place,{across:a,along:l}=lE(t),c=pn(o,s*31+17)*Math.PI*2,h=Array.from({length:e.count},(b,x)=>({side:(x-(e.count-1)/2)*a*2.3,ahead:e.count===1?0:(pn(o,s*31+x+60)-.5)*l*.3})),d=Math.max(...h.map(({side:b,ahead:x})=>Math.hypot(Math.abs(b)+a,Math.abs(x)+l)))*1.08,f=Math.min(1.1,i/d),m=[e.colour,...e.coats??[]],g=Math.cos(c),_=Math.sin(c);h.forEach(({side:b,ahead:x},v)=>{let S=[n[0]+(b*g+x*_)*f,n[1]+(x*g-b*_)*f];wa(r.ground(...S))||fD(r,t,S,f,c+(pn(o,s*31+v+70)-.5)*.4,{coat:m[v%m.length],detail:e.detail??e.colour,pale:e.pale??e.detail??e.colour})})},"herd"),yE=u((r,e,t,n,i)=>{let s=pn(r.place.seed,i*31+5)*Math.PI*2;return Array.from({length:e},(o,a)=>{let l=s+a/e*Math.PI*2;return e===1?[t[0],t[1],l]:[t[0]+Math.cos(l)*n,t[1]+Math.sin(l)*n,l]})},"ring"),mD=u((r,e,[t,n],i,s)=>{let o=r.ground(t,n),a=Math.cos(i),l=Math.sin(i),c=.025*s,h=.17*s,d=e.detail??e.colour,f=e.count;for(let m=0;f>0;m++){let g=Math.min(f,Math.max(1,3-m));for(let _=0;_<g;_++){let b=(_-(g-1)/2)*c*2.05,x=c+m*c*1.75,v=u(S=>[t+b*a+S*l,o+x,n+S*a-b*l],"at");r.solid(zN,v(0),[c*2,h,c*2],e.colour,[Math.PI/2,i,0],"YXZ"),[-1,1].forEach(S=>r.solid(GN,v(S*h/2),[c*2,c*2,1],d,[0,i+(S<0?Math.PI:0),0]))}f-=g}},"logStack"),gD={rocks:.07+.039,crop:.075+.0375,fish:.08+.0325,whale:Math.hypot(.13+.0175,.0475),derrick:Math.SQRT1_2*.11,oasis:.09+.055,peat:.075+Math.hypot(.0375,.025),logs:Math.hypot(.025*2.05+.025,.085),cairn:.0375},wa=u(r=>r<Ei.shore,"inTheSea"),r_=.16*Math.sin(.15)*.5,bD=u((r,e,t,n,i)=>{let{seed:s}=r.place,o=e.detail??e.colour,a=pn(s,i*31+17)*Math.PI*2,l=Math.min(e.shape==="logs"?1.2:1,(n-(e.shape==="oasis"?r_:0))/(gD[e.shape]??n));switch(e.shape){case"horse":case"ox":case"deer":case"fox":case"elephant":case"seal":case"bird":pD(r,e,e.shape,t,n,i);return;case"logs":wa(r.ground(...t))||mD(r,e,t,a,l);return;case"rocks":{[[t[0],t[1],1.3],...yE(r,e.count-1,t,.07*l,i).map(([h,d])=>[h,d,1])].forEach(([h,d,f],m)=>{let g=r.ground(h,d);wa(g)||r.solid(Sa,[h,g+.016*f,d],[.078*f*l,.055*f,.068*f*l],m%2===1?o:e.colour,[0,pn(s,i*31+m+17)*Math.PI*2,0])});return}default:}yE(r,e.count,t,(e.shape==="fish"?.08:.075)*l,i).forEach(([c,h,d],f)=>{let m=e.shape==="fish"||e.shape==="whale",g=r.ground(c,h,m),_=pn(s,i*31+f+17)*Math.PI*2;if(!(!m&&e.shape!=="oasis"&&e.shape!=="cairn"&&wa(g)))switch(e.shape){case"crop":r.solid(tc,[c,g+.03,h],[.014*l,.06,.014*l],o),r.solid(Sa,[c,g+.08,h],[.075*l,.065,.075*l],e.colour);break;case"fish":{let b=f%3===1;r.solid(Sa,[c,g+(b?.035:.01),h],[.024*l,.018,.065*l],e.colour,[b?-.6:0,-d,0],"YXZ");break}case"whale":{let b=u(x=>[c+Math.sin(_)*x*l,h+Math.cos(_)*x*l],"ahead");r.solid(Sa,[c,g,h],[.085*l,.06,.24*l],e.colour,[0,_,0]),r.solid(Ri,[b(-.13)[0],g+.02,b(-.13)[1]],[.095*l,.007,.035*l],e.colour,[0,_,0]),r.solid(ch,[b(.06)[0],g+.07,b(.06)[1]],[.035*l,.09,.035*l],dE),r.solid(Sa,[b(.06)[0],g+.12,b(.06)[1]],[.06*l,.03,.06*l],dE);break}case"derrick":r.solid(Ri,[c,g+.01,h],[.11*l,.02,.11*l],o),r.solid(SE,[c,g+.13,h],[.075*l,.24,.075*l],e.colour,[0,Math.PI/4,0]);break;case"oasis":{f===0&&!wa(r.ground(...t))&&r.disc(t,.1*l,o,fi.field+.002);let[b,x]=[t[0]+Math.cos(d)*.09*l,t[1]+Math.sin(d)*.09*l],v=r.ground(b,x);if(wa(v))break;r.solid(tc,[b,v+.08,x],[.014,.16,.014],o_,[.15,Math.PI/2-d,0],"YXZ"),r.solid(ch,[b+Math.cos(d)*r_,v+.165,x+Math.sin(d)*r_],[.11*l,.035,.11*l],e.colour);break}case"peat":r.solid(Ri,[c,g+.015,h],[.075*l,.03,.05*l],e.colour,[0,_,0]);break;default:if(wa(r.ground(...t)))break;r.solid(Sa,[t[0],r.ground(t[0],t[1])+.018+f*.027,t[1]],[(.075-f*.01)*l,.037,(.075-f*.01)*l],e.colour)}})},"special"),xD=u((r,e)=>{[0,1,2].forEach(t=>{let n=t/3*Math.PI*2+pn(r.place.seed,12)*Math.PI,i=e[0]+Math.cos(n)*.06,s=e[1]+Math.sin(n)*.06,o=r.ground(i,s);r.solid(tc,[i,o+.02,s],[.05,.04,.05],kN),r.solid(ch,[i,o+.055,s],[.065,.035,.065],BN)})},"hut"),TE={conifer:.06,broadleaf:.07,palm:.06,deadTree:.05,bush:.035,shrub:.03,scrub:.03,reeds:.03,rock:.04,cactus:.03},RE=u((r,e,t,n,i,s,o)=>{let a=r.ground(n,i),{colour:l,detail:c}=e;switch(t){case"conifer":r.solid(sh,[n,a+.025*s,i],[.016*s,.05*s,.016*s],c),r.solid(oh,[n,a+.09*s,i],[.11*s,.12*s,.11*s],l),r.solid(oh,[n,a+.16*s,i],[.08*s,.1*s,.08*s],l);break;case"broadleaf":r.solid(sh,[n,a+.04*s,i],[.018*s,.08*s,.018*s],c),r.solid(lh,[n,a+.12*s,i],[.13*s,.11*s,.13*s],l,[0,o,0]);break;case"palm":r.solid(sh,[n,a+.08*s,i],[.012*s,.16*s,.012*s],c,[.12,o,0]),r.solid(oh,[n+.01*s,a+.165*s,i],[.15*s,.03*s,.15*s],l,[0,o,0]);break;case"deadTree":r.solid(sh,[n,a+.06*s,i],[.014*s,.12*s,.014*s],c),r.solid(Ri,[n+.02*s,a+.09*s,i],[.006*s,.05*s,.006*s],c,[0,o,-.7]);break;case"bush":r.solid(lh,[n,a+.02*s,i],[.06*s,.045*s,.06*s],l,[0,o,0]);break;case"shrub":r.solid(oh,[n,a+.025*s,i],[.05*s,.05*s,.05*s],l,[0,o,0]),r.solid(oh,[n+.02*s,a+.018*s,i+.01*s],[.035*s,.036*s,.035*s],l,[0,o,0]);break;case"scrub":r.solid(lh,[n,a+.008*s,i],[.05*s,.02*s,.05*s],l,[0,o,0]);break;case"reeds":[-1,0,1].forEach(h=>r.solid(Ri,[n+h*.008*s,a+.035*s,i],[.005,.07*s,.005],h===0?l:c,[0,o,h*.18]));break;case"rock":r.solid(lh,[n,a+.012*s,i],[.07*s,.04*s,.06*s],l,[0,o,0]);break;default:r.solid(sh,[n,a+.05*s,i],[.018*s,.1*s,.018*s],l),r.solid(Ri,[n+.015*s,a+.06*s,i],[.025*s,.01*s,.01*s],l,[0,o,0])}},"grow"),_E=u((r,e,t,n)=>{let i=n[0]-t[0],s=n[1]-t[1],o=i*i+s*s,a=o===0?0:Math.max(0,Math.min(1,((r-t[0])*i+(e-t[1])*s)/o));return Math.hypot(r-(t[0]+i*a),e-(t[1]+s*a))},"distanceTo"),yD=u((r,e)=>{let t=Ql(e.terrain);if(t===null)return;let{centre:n,radius:i,seed:s,latitude:o}=r.place;t.plants.forEach((a,l)=>{for(let c=0;c<a.count;c++){let h=1e3+l*97+c*7,d=a.size[0]+(a.size[1]-a.size[0])*pn(s,h),f=t.conifers,m=f!==void 0&&pn(s,h+1)>=f[0]+(f[1]-f[0])*o?"broadleaf":a.kind,g=TE[m]*d;for(let _=0;_<6;_++){let b=pn(s,h+2+_*2)*Math.PI*2,x=Math.sqrt(pn(s,h+3+_*2))*i*.92,v=n[0]+Math.cos(b)*x,S=n[1]+Math.sin(b)*x;if(r.hasRoom(v,S,g)){RE(r,a,m,v,S,d,b),r.taken.push([v,S,g]),r.grown.push([v,S,m]);break}}}})},"plants"),s_=.26,vE=.3,_D=.15,ME=.5,nm=[.9,1.3],Ma=u((r,e,t)=>pn(Math.imul(r,73856093)^Math.imul(e,19349663)^1540483477,t),"pointFraction"),vD=u((r,e,t)=>{let{centre:n,outline:i,owns:s,around:o,period:a,toward:l,latitude:c}=e,h=Math.max(1,Math.round(a.u/s_)),d=a.u/h,f=a.v===null?null:Math.max(1,Math.round(a.v/s_)),m=a.v===null||f===null?s_:a.v/f,g=i.map(([y])=>y),_=i.map(([,y])=>y),[b,x]=[Math.floor(Math.min(...g)/d)-1,Math.ceil(Math.max(...g)/d)],[v,S]=[Math.floor(Math.min(..._)/m)-1,Math.ceil(Math.max(..._)/m)],M=o.filter(([y,w])=>!r.woods.some(([L,I])=>L===y&&I===w)).map(y=>{let[w,L]=l(y),I=Math.hypot(w-n[0],L-n[1]);return{mu:w,mv:L,length:I}}),R=t.plants.reduce((y,{count:w})=>y+w,0),E=[];for(let y=v;y<=S;y++)for(let w=b;w<=x;w++){let L=(w%h+h)%h,I=f===null?y:(y%f+f)%f,O=(w+.5+(Ma(L,I,0)*2-1)*vE)*d,B=(y+.5+(Ma(L,I,1)*2-1)*vE)*m;if(!s(O,B))continue;let $=M.reduce((Z,{mu:ne,mv:ae,length:pe})=>{let ye=pe/2-((O-n[0])*(ne-n[0])+(B-n[1])*(ae-n[1]))/pe;return Math.min(Z,Math.max(0,ye)/_D)},1);if(Ma(L,I,2)>=ME+(1-ME)*$)continue;let F=Ma(L,I,3)*R,j=t.plants[0];for(let Z of t.plants)if(j=Z,F-=Z.count,F<0)break;let ce=t.conifers,G=ce!==void 0&&Ma(L,I,4)>=ce[0]+(ce[1]-ce[0])*c?"broadleaf":j.kind,ee=j.size[0]+(j.size[1]-j.size[0])*Ma(L,I,5);E.push({u:O,v:B,kind:G,plant:j,room:TE[G]*ee*nm[1],size:ee*(nm[0]+(nm[1]-nm[0])*$),facing:Ma(L,I,6)*Math.PI*2})}return E},"woodsPlants"),MD=u((r,e)=>{let{centre:t,around:n,toward:i}=r.place,s=Math.max(...n.map(a=>{let[l,c]=i(a);return Math.hypot(l-t[0],c-t[1])})),o=e.paths.map(a=>i(a));o.forEach((a,l)=>o.slice(l+1).forEach(c=>{Math.hypot(c[0]-a[0],c[1]-a[1])<=s+1e-6&&(r.lines.push([a,c]),r.past.push([a,c]))}))},"pathsPast"),SD=u((r,e,t)=>{let{heightAt:n}=r.place;vD(e,r.place,t).forEach(({u:i,v:s,kind:o,plant:a,size:l,room:c,facing:h})=>{o!=="reeds"&&n(i,s)<0||r.hasRoom(i,s,c)&&(RE(r,a,o,i,s,l,h),r.grown.push([i,s,o]))})},"woods"),f_=u((r,e,t)=>{let n=new a_(t,e),{centre:i,radius:s}=e;if(r.city!==null)return oD(n,r.city),{taken:n.taken,lines:n.lines,grown:n.grown};if([r.road,r.railroad].forEach(l=>{l!==null&&d_(l)&&(l.joins.forEach(c=>{if(l===r.road){let h=sm(e,c).points;h.slice(1).forEach((d,f)=>n.lines.push([h[f],d])),n.runs.push({key:l_(c),points:h});return}n.lines.push([i,rm(e,c)]),n.runs.push({key:l_(c)+100,points:[i,rm(e,c)]})}),l.alone&&n.lines.push([i,i]))}),r.fortress){let l=s*.62,c=[[-l,-l],[l,-l],[l,l],[-l,l]].map(([h,d])=>[i[0]+h,i[1]+d]);c.forEach((h,d)=>n.lines.push([h,c[(d+1)%4]]))}if(r.airbase){let l=s*.75;n.lines.push([[i[0]-l,i[1]+.12],[i[0]+l,i[1]+.12]])}r.road!==null&&eD(n,r.road),r.railroad!==null&&tD(n,r.railroad),r.front===!0&&n.taken.push([i[0],i[1]+ga,wE]),r.mine&&lD(n,n.claim(...n_.mine,.1)),r.fortress&&cD(n),r.airbase&&uD(n),r.pollution&&hD(n),r.specials.forEach(([l,c],h)=>{let[d,f,m]=n.claimMost(...n_.special(h),VN);bD(n,aE(l,c),[d,f],m,h+1)}),r.hut&&xD(n,n.claim(...n_.hut,.13)),MD(n,r);let o=aD(n,r);r.irrigation!==null&&iD(n,r.irrigation,o);let a=Ql(r.terrain);return a!==null&&r.irrigation===null&&!r.fortress&&!r.airbase&&(a.canopy!==void 0?SD(n,r,a):yD(n,r)),{taken:n.taken,lines:n.lines,grown:n.grown}},"layOverlay"),wD=u((r,e,t)=>{let n=c_();return t.forEach(({overlay:i,place:s})=>f_(i,s,n)),p_(r,e,n)},"overlayMesh"),p_=u((r,e,t)=>{let n=new Float32Array(t.positions);for(let s=0;s<n.length;s+=3)n[s]=n[s]-r,n[s+2]=n[s+2]-e;let i=new Float32Array(t.haze.positions);for(let s=0;s<i.length;s+=3)i[s]=i[s]-r,i[s+2]=i[s+2]-e;return{u:r,v:e,positions:n,normals:new Float32Array(t.normals),colours:new Float32Array(t.colours),haze:{positions:i,colours:new Float32Array(t.haze.colours)}}},"meshOf"),CE=wD;var PE=u((r,e)=>Math.imul(r,73856093)^Math.imul(e,19349663),"squareSeed"),io,cn,tr,nc,fh,pi,mi,mn,ic,Ea,ro,Aa,so,oo,rc,ph,Je,b_,x_,y_,IE,LE,__,uh,v_,om,hh,am,dh,M_=class M_{constructor(e){z(this,Je);z(this,io);z(this,cn);z(this,tr,[]);z(this,nc);z(this,fh);z(this,pi);z(this,mi,new Set);z(this,mn,null);z(this,ic,null);z(this,Ea,new Map);z(this,ro,new Map);z(this,Aa,u(()=>{},"#keptCity"));z(this,so,!0);z(this,oo,[0,0]);z(this,rc);z(this,ph);k(this,pi,e);let t=e.topology(),n=e.width(),i=e.height(),s=t.wrapsY();this.layout=J1({width:n,height:i,topologyId:e.topologyId(),wrapsY:s}),k(this,io,Q1({layout:this.layout,source:{width:n,height:i,wrapsY:s,terrainAt:u((f,m)=>e.get(f,m).terrain._,"terrainAt"),waterAt:u((f,m)=>e.get(f,m).isWater,"waterAt"),neighbours:u((f,m)=>t.directions().map(g=>t.neighbour(f,m,g)).filter(g=>g!==null),"neighbours")}})),k(this,cn,eE(this.layout,i));let[o,a]=this.layout.centre(0,0),l=Math.max(...this.layout.outline(0,0).map(([f,m])=>Math.hypot(f-o,m-a))),c=Math.max(...t.directions().map(f=>t.offset(f,0,0)).map(([f,m])=>{let[g,_]=this.layout.centre(f,m);return Math.hypot(g-o,_-a)}));k(this,nc,1.2+l+xs*Math.SQRT2+Math.max((Ei.reach-1)*c,c/2+xs*Math.SQRT2+tm));let h=this.layout.outline(0,0),d=h.flatMap(([f,m],g)=>{let[_,b]=h[(g+1)%h.length],x=Math.hypot(_-f,b-m);return x===0?[]:[{away:Math.abs((_-f)*(a-m)-(b-m)*(o-f))/x,normal:[(b-m)/x,(f-_)/x]}]});k(this,rc,Math.min(...d.map(({away:f})=>f))),k(this,fh,Math.max(l,u_*p(this,rc))+h_+Math.max(p(this,cn).spacingU,p(this,cn).spacingV)),k(this,ph,Math.min(...d.map(({away:f,normal:[m,g]})=>f/(Math.abs(m)+Math.abs(g)))))}surfaceAt(e,t,n=new Map){let{spacingU:i,spacingV:s}=p(this,cn),o=Math.floor(e/i),a=Math.floor(t/s),l=e/i-o,c=t/s-a,h=u((_,b)=>{let x=`${_},${b}`,v=n.get(x);return v===void 0&&(v=p(this,io).height(_*i,b*s),n.set(x,v)),v},"at"),d=h(o,a),f=h(o+1,a),m=h(o,a+1);if(l+c<=1)return d+(f-d)*l+(m-d)*c;let g=h(o+1,a+1);return g+(m-g)*(1-l)+(f-g)*(1-c)}ground(){let{chunksU:e,chunksV:t,stepsU:n,stepsV:i,spacingU:s,spacingV:o}=p(this,cn);return{columns:e*n,rows:t*i,spacingU:s,spacingV:o,wrapsV:this.layout.period().v!==null}}extentV(){return p(this,cn).chunksV*p(this,cn).stepsV*p(this,cn).spacingV}heightAt(e,t){return p(this,io).height(e,t)}queueAll(e,t){let{chunksU:n,chunksV:i}=p(this,cn),s=[];for(let o=0;o<i;o++)for(let a=0;a<n;a++)s.push(`${a},${o}`);k(this,tr,A(this,Je,dh).call(this,s,e,t)),k(this,oo,[e,t]),s.forEach(o=>p(this,mi).add(o)),A(this,Je,y_).call(this)}changed(e,t,n,i=!1){if(e.length===0&&!i)return[];k(this,oo,[t,n]),A(this,Je,b_).call(this,e.length===0?[...A(this,Je,hh).call(this).values()].flat():A(this,Je,am).call(this,e));let s=p(this,io).refresh(i?void 0:e);if(s.length===0)return s;let o=Qy(p(this,cn),this.layout,s,p(this,nc)).map(([a,l])=>`${a},${l}`);return A(this,Je,y_).call(this,Qy(p(this,cn),this.layout,s,p(this,nc)+p(this,fh)).map(([a,l])=>`${a},${l}`)),k(this,tr,A(this,Je,dh).call(this,[...new Set([...p(this,tr),...o])],t,n)),s}showTowns(e,t,n){if(e===p(this,so))return;let i=[...A(this,Je,hh).call(this).values()].flat().filter(([s,o])=>A(this,Je,x_).call(this,s,o));k(this,so,e),k(this,oo,[t,n]),A(this,Je,b_).call(this,A(this,Je,am).call(this,i))}refocus(e,t){k(this,tr,A(this,Je,dh).call(this,p(this,tr),e,t)),k(this,oo,[e,t])}pending(){return p(this,tr).length}overlaysPending(){return p(this,mi).size+(p(this,mn)===null||p(this,mi).has(p(this,mn).key)?0:1)}build(e,t){let n=performance.now(),i=u(()=>t!==null&&performance.now()-n>=t,"spent");for(;p(this,tr).length>0;){if(i())return;let o=p(this,tr).shift(),[a,l]=o.split(",").map(Number);e.setChunk(a,l,tE(p(this,cn),p(this,io),a,l)),p(this,mi).add(o)}let s=!1;for(;p(this,mi).size>0||p(this,mn)!==null;){if(p(this,mn)!==null&&p(this,mi).has(p(this,mn).key)&&k(this,mn,null),p(this,mn)===null){if(s&&i())return;let g=A(this,Je,dh).call(this,[...p(this,mi)],...p(this,oo))[0],_=A(this,Je,hh).call(this).get(g)??[],b=A(this,Je,LE).call(this,g,_);if(p(this,mi).delete(g),b!==null){let[x,v]=g.split(",").map(Number);_.forEach(([S,M],R)=>p(this,Ea).set(`${S},${M}`,b.signatures[R])),e.setOverlay(x,v,b.mesh),s=!0;continue}k(this,mn,{key:g,squares:_,done:0,laid:c_(),signatures:[],heights:new Map,keep:!0})}let o=p(this,mn);for(;o.done<o.squares.length;){let[g,_]=o.squares[o.done],b=A(this,Je,v_).call(this,g,_,o.heights);if(o.signatures.push(p(this,Ea).get(`${g},${_}`)),o.done++,b!==null&&f_(b.overlay,b.place,o.laid),o.done<o.squares.length&&i())return}let[a,l]=o.key.split(",").map(Number),{stepsU:c,stepsV:h,spacingU:d,spacingV:f}=p(this,cn),m=o.laid.positions.length===0&&o.laid.haze.positions.length===0?null:p_(a*c*d,l*h*f,o.laid);if(k(this,mn,null),o.keep){let g={signatures:o.signatures,mesh:m};p(this,ro).set(o.key,A(this,Je,am).call(this,o.squares).some(([_,b])=>A(this,Je,x_).call(this,_,b))?{...p(this,ro).get(o.key),[p(this,so)?"shown":"hidden"]:g}:{shown:g,hidden:g})}e.setOverlay(a,l,m),s=!0}}keepCities(e){k(this,Aa,e)}roadPath(e,t,n,i){let s=p(this,pi).topology(),o=u((M,R,E,y)=>{let w=s.directions().find(L=>{let I=s.neighbour(M,R,L);return I!==null&&I[0]===E&&I[1]===y});return w===void 0?null:s.offset(w,M,R)},"offsetTo"),a=o(e,t,n,i),l=o(n,i,e,t);if(a===null||l===null)return null;let c=u((M,R,E)=>{let y=A(this,Je,uh).call(this,M,R),w=u(I=>I!==null&&I.joins.some(([O,B])=>O===E[0]&&B===E[1]),"joins"),L=this.layout.centre(M,R);if(w(y?.road??null))return sm({centre:L,toward:u(([I,O])=>this.layout.centre(M+I,R+O),"toward"),seed:PE(M,R)},E).points;if(w(y?.railroad??null)){let[I,O]=this.layout.centre(M+E[0],R+E[1]);return[[L[0],L[1]],[(L[0]+I)/2,(L[1]+O)/2]]}return null},"half"),h=c(e,t,a),d=c(n,i,l);if(h===null&&d===null)return null;let f=this.layout.centre(e,t),m=this.layout.centre(n,i),g=this.layout.centre(e+a[0],t+a[1]),_=this.layout.centre(n+l[0],i+l[1]),b=[(f[0]+g[0])/2,(f[1]+g[1])/2],x=[(m[0]+_[0])/2,(m[1]+_[1])/2],v=[x[0]-b[0],x[1]-b[1]];return[...(h??[f,b]).map(([M,R])=>[M+v[0],R+v[1]]),...(d??[m,x]).slice(0,-1).reverse()].map(([M,R])=>[M-m[0],R-m[1]])}overlayOf(e,t){let{stepsU:n,stepsV:i,spacingU:s,spacingV:o}=p(this,cn),a=new Map,l=(A(this,Je,hh).call(this).get(`${e},${t}`)??[]).flatMap(([c,h])=>A(this,Je,v_).call(this,c,h,a)??[]);return l.length===0?null:CE(e*n*s,t*i*o,l)}overlayKeyOf(e,t){return A(this,Je,om).call(this,e,t)}};io=new WeakMap,cn=new WeakMap,tr=new WeakMap,nc=new WeakMap,fh=new WeakMap,pi=new WeakMap,mi=new WeakMap,mn=new WeakMap,ic=new WeakMap,Ea=new WeakMap,ro=new WeakMap,Aa=new WeakMap,so=new WeakMap,oo=new WeakMap,rc=new WeakMap,ph=new WeakMap,Je=new WeakSet,b_=u(function(e){e.forEach(([t,n])=>{let i=A(this,Je,om).call(this,t,n);if(p(this,mi).has(i)||p(this,mn)?.key===i&&!A(this,Je,IE).call(this,p(this,mn),t,n))return;JSON.stringify(A(this,Je,uh).call(this,t,n))!==(p(this,Ea).get(`${t},${n}`)??"null")&&p(this,mi).add(i)})},"#layAgain"),x_=u(function(e,t){return!!p(this,pi).get(e,t).city||!!p(this,Aa).call(this,e,t)},"#townAt"),y_=u(function(e){let t=e===void 0?null:new Set(e);t===null?p(this,ro).clear():t.forEach(n=>p(this,ro).delete(n)),p(this,mn)!==null&&(t===null||t.has(p(this,mn).key))&&(p(this,mn).keep=!1)},"#landChanged"),IE=u(function(e,t,n){return e.squares.slice(0,e.done).some(([i,s])=>i===t&&s===n)},"#reached"),LE=u(function(e,t){let n=p(this,ro).get(e);if(n===void 0)return null;let i=t.map(([s,o])=>JSON.stringify(A(this,Je,uh).call(this,s,o)));return[n.shown,n.hidden].find(s=>s!==void 0&&s.signatures.length===i.length&&s.signatures.every((o,a)=>o===i[a]))??null},"#madeAs"),__=u(function(e,t){let n=p(this,pi).get(e,t),i=p(this,so)?p(this,Aa).call(this,e,t):null;return i===void 0?n:{...n,city:i}},"#shownAt"),uh=u(function(e,t){let n=p(this,pi).topology(),i=sE(A(this,Je,__).call(this,e,t),n.directions().flatMap(o=>{let a=n.neighbour(e,t,o);return a===null?[]:[{offset:n.offset(o,e,t),tile:A(this,Je,__).call(this,a[0],a[1])}]})),s=p(this,Aa).call(this,e,t);return i!==null&&!p(this,so)&&(s===void 0?p(this,pi).get(e,t).city:s)?{...i,front:!0}:i},"#overlayAt"),v_=u(function(e,t,n){let i=A(this,Je,uh).call(this,e,t);if(p(this,Ea).set(`${e},${t}`,JSON.stringify(i)),i===null)return null;let[s,o]=this.layout.centre(e,t),a=p(this,pi).topology();return{overlay:i,place:{centre:[s,o],toward:u(([l,c])=>this.layout.centre(e+l,t+c),"toward"),radius:p(this,rc),inner:p(this,ph),heightAt:u((l,c)=>this.surfaceAt(l,c,n),"heightAt"),seed:PE(e,t),latitude:Math.min(1,Math.abs(2*o/this.extentV()-1)),outline:this.layout.outline(e,t),owns:u((l,c)=>{let[h,d]=this.layout.tileAt(l,c);return h===e&&d===t},"owns"),around:a.directions().filter(l=>a.neighbour(e,t,l)!==null).map(l=>a.offset(l,e,t)),period:this.layout.period()}}},"#square"),om=u(function(e,t){let{chunksU:n,chunksV:i,stepsU:s,stepsV:o,spacingU:a,spacingV:l}=p(this,cn),[c,h]=this.layout.centre(e,t),d=Math.floor(c/(s*a)),f=Math.floor(h/(o*l));return`${Math.min(n-1,Math.max(0,d))},${Math.min(i-1,Math.max(0,f))}`},"#chunkOf"),hh=u(function(){if(p(this,ic)===null){let e=new Map;for(let t=0;t<p(this,pi).height();t++)for(let n=0;n<p(this,pi).width();n++){let i=A(this,Je,om).call(this,n,t);e.set(i,[...e.get(i)??[],[n,t]])}k(this,ic,e)}return p(this,ic)},"#chunksOfSquares"),am=u(function(e){let t=p(this,pi).topology(),n=new Map;return e.forEach(([i,s])=>[[i,s],...t.directions().map(o=>t.neighbour(i,s,o)).filter(o=>o!==null)].forEach(o=>n.set(o.join(),o))),[...n.values()]},"#besides"),dh=u(function(e,t,n){let{stepsU:i,stepsV:s,spacingU:o,spacingV:a}=p(this,cn),l=i*o,c=s*a,{u:h,v:d}=this.layout.period(),f=u((g,_)=>Math.abs(_===null?g:g-_*Math.round(g/_)),"round"),m=u(g=>{let[_,b]=g.split(",").map(Number);return Math.hypot(f((_+.5)*l-t,h),f((b+.5)*c-n,d))},"distance");return[...e].sort((g,_)=>m(g)-m(_))},"#nearestFirst"),u(M_,"Land");var g_=M_,NE=g_;var ED=u(()=>typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches===!0,"prefersReducedMotion"),Ci=ED;var DE=u((r,e,t=100)=>{let n=r.filter(({time:a})=>e-a<=t);if(n.length<2)return{x:0,y:0};let i=n[0],s=n[n.length-1],o=s.time-i.time;return o<=0?{x:0,y:0}:{x:(s.x-i.x)/o,y:(s.y-i.y)/o}},"releaseVelocity");var AD=8,TD=.92,RD=.02,OE=3,CD=50,PD=8,ID=10,UE=250,mh,gh,sc,oc,Ta,ao,S_=class S_{constructor({pointerId:e,clientX:t,clientY:n,timeStamp:i}){z(this,mh);z(this,gh);z(this,sc);z(this,oc);z(this,Ta,!1);z(this,ao);this.pointerId=e,k(this,mh,t),k(this,gh,n),k(this,sc,t),k(this,oc,n),k(this,ao,[{x:t,y:n,time:i}])}dragging(){return p(this,Ta)}move({pointerId:e,clientX:t,clientY:n,timeStamp:i}){if(e!==this.pointerId||!p(this,Ta)&&Math.hypot(t-p(this,mh),n-p(this,gh))<AD)return null;let s=!p(this,Ta),o=p(this,sc)-t,a=p(this,oc)-n;return k(this,Ta,!0),k(this,sc,t),k(this,oc,n),p(this,ao).push({x:t,y:n,time:i}),p(this,ao).length>20&&p(this,ao).shift(),{dx:o,dy:a,started:s}}releaseVelocity(e){return DE(p(this,ao),e)}};mh=new WeakMap,gh=new WeakMap,sc=new WeakMap,oc=new WeakMap,Ta=new WeakMap,ao=new WeakMap,u(S_,"Press");var lm=S_,Rr,bh,w_=class w_{constructor(e){z(this,Rr,null);z(this,bh);k(this,bh,e)}start(e){this.stop();let t=Math.hypot(e.x,e.y),n=t>OE?OE/t:1,i=e.x*n,s=e.y*n,o=null,a=u(l=>{let c=o===null?16:Math.min(l-o,64);if(o=l,Math.hypot(i,s)<RD){k(this,Rr,null);return}p(this,bh).call(this,-i*c,-s*c);let h=Math.pow(TD,c/16);i*=h,s*=h,k(this,Rr,window.requestAnimationFrame(a))},"step");k(this,Rr,window.requestAnimationFrame(a))}gliding(){return p(this,Rr)!==null}stop(){p(this,Rr)!==null&&(window.cancelAnimationFrame(p(this,Rr)),k(this,Rr,null))}};Rr=new WeakMap,bh=new WeakMap,u(w_,"Glide");var cm=w_,Ra,xh,yh,ac,E_=class E_{constructor(){z(this,Ra,0);z(this,xh,0);z(this,yh,-1/0);z(this,ac,0)}turned(e,t){let n=e.deltaMode===0,i=e.deltaY;if(i===0||e.ctrlKey&&t!==null&&e.timeStamp-t<=UE)return 0;let s=Math.sign(i),o=e.timeStamp-p(this,yh)>UE||s!==p(this,xh);if(k(this,yh,e.timeStamp),k(this,xh,s),o&&(k(this,Ra,0),k(this,ac,0)),n&&!e.ctrlKey&&p(this,ac)>=ID)return 0;if(!o&&n){if(k(this,Ra,p(this,Ra)+i),Math.abs(p(this,Ra))<(e.ctrlKey?PD:CD))return 0;k(this,Ra,0)}return n&&!e.ctrlKey&&k(this,ac,p(this,ac)+1),i<0?1:-1}};Ra=new WeakMap,xh=new WeakMap,yh=new WeakMap,ac=new WeakMap,u(E_,"WheelTurn");var um=E_;var LD=350,ND=.006,FE=.004,Cr,gn,Vn,lc,Pr,nr,pm,Ii,Li,lo,cc,gi,co,Pe,Pi,hm,dm,BE,T_,ys,R_,kE,_s,zE,GE,VE,HE,_h,WE,XE,qE,fm,C_=class C_{constructor(e,t,n=null){z(this,Pe);z(this,Cr);z(this,gn);z(this,Vn,null);z(this,lc,[0,0]);z(this,Pr,null);z(this,nr);z(this,pm,new um);z(this,Ii,new Map);z(this,Li,null);z(this,lo,null);z(this,cc,[]);z(this,gi);z(this,co,null);k(this,Cr,e),k(this,gn,t),k(this,gi,n),k(this,nr,new cm((i,s)=>{let[o,a]=A(this,Pe,BE).call(this);A(this,Pe,R_).call(this,[o,a],[o-i,a-s])})),A(this,Pe,Pi).call(this,"pointerdown",i=>A(this,Pe,kE).call(this,i)),A(this,Pe,Pi).call(this,"pointermove",i=>A(this,Pe,GE).call(this,i)),A(this,Pe,Pi).call(this,"pointerup",i=>A(this,Pe,VE).call(this,i)),A(this,Pe,Pi).call(this,"pointercancel",i=>A(this,Pe,HE).call(this,i)),A(this,Pe,Pi).call(this,"wheel",i=>A(this,Pe,XE).call(this,i),{passive:!1}),A(this,Pe,Pi).call(this,"gesturestart",i=>A(this,Pe,fm).call(this,i,"start"),{passive:!1}),A(this,Pe,Pi).call(this,"gesturechange",i=>A(this,Pe,fm).call(this,i,"change"),{passive:!1}),A(this,Pe,Pi).call(this,"gestureend",i=>A(this,Pe,fm).call(this,i,"end"),{passive:!1}),A(this,Pe,Pi).call(this,"contextmenu",i=>A(this,Pe,zE).call(this,i)),A(this,Pe,Pi).call(this,"pointerleave",()=>p(this,gi)?.hover(null)),A(this,Pe,Pi).call(this,"touchstart",i=>i.preventDefault(),{passive:!1})}dragging(){return p(this,Vn)?.dragging()===!0||p(this,Pr)!==null}moving(){return this.dragging()||p(this,Li)!==null||p(this,nr).gliding()}dispose(){p(this,nr).stop(),A(this,Pe,_s).call(this),p(this,cc).forEach(([e,t,n])=>p(this,Cr).removeEventListener(e,t,n)),k(this,cc,[])}};Cr=new WeakMap,gn=new WeakMap,Vn=new WeakMap,lc=new WeakMap,Pr=new WeakMap,nr=new WeakMap,pm=new WeakMap,Ii=new WeakMap,Li=new WeakMap,lo=new WeakMap,cc=new WeakMap,gi=new WeakMap,co=new WeakMap,Pe=new WeakSet,Pi=u(function(e,t,n){p(this,Cr).addEventListener(e,t,n),p(this,cc).push([e,t,n])},"#listen"),hm=u(function(){return{width:p(this,Cr).clientWidth||1,height:p(this,Cr).clientHeight||1}},"#box"),dm=u(function([e,t]){let{width:n,height:i}=A(this,Pe,hm).call(this);return[e/n*2-1,1-t/i*2]},"#screen"),BE=u(function(){let{width:e,height:t}=A(this,Pe,hm).call(this);return[e/2,t/2]},"#middle"),T_=u(function(){let{width:e,height:t}=A(this,Pe,hm).call(this);return e/t},"#aspect"),ys=u(function(e){let t=p(this,Cr).getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]},"#at"),R_=u(function(e,t){p(this,gn).setOrbit(x1(p(this,gn).orbit(),p(this,gn).lookHeight(),A(this,Pe,dm).call(this,e),A(this,Pe,dm).call(this,t),A(this,Pe,T_).call(this)))},"#pan"),kE=u(function(e){if(p(this,nr).stop(),p(this,gi)?.hover(null),e.pointerType==="touch"&&(p(this,Ii).set(e.pointerId,A(this,Pe,ys).call(this,e)),p(this,Ii).size===2)){k(this,Vn,null),A(this,Pe,_s).call(this),k(this,Li,A(this,Pe,_h).call(this));return}if(e.isPrimary&&e.button!==2){if(p(this,Cr).setPointerCapture?.(e.pointerId),e.button===1||e.button===0&&e.altKey){e.preventDefault(),k(this,Pr,{pointerId:e.pointerId,x:e.clientX,y:e.clientY});return}if(e.button===0){let t=new lm(e),[n,i]=A(this,Pe,ys).call(this,e),{clientX:s,clientY:o}=e;k(this,Vn,t),k(this,lc,[n,i]),A(this,Pe,_s).call(this),k(this,co,window.setTimeout(()=>{k(this,co,null),p(this,Vn)===t&&!t.dragging()&&p(this,gi)?.menu(n,i,s,o,!0)===!0&&k(this,Vn,null)},LD))}}},"#down"),_s=u(function(){p(this,co)!==null&&(window.clearTimeout(p(this,co)),k(this,co,null))},"#stopHold"),zE=u(function(e){if(p(this,gi)===null||!p(this,gi).menuOnRightClick()||(e.preventDefault(),p(this,gi).menuOpen()))return;let[t,n]=A(this,Pe,ys).call(this,e);p(this,gi).menu(t,n,e.clientX,e.clientY,!1)&&(A(this,Pe,_s).call(this),k(this,Vn,null))},"#rightClick"),GE=u(function(e){if(p(this,Ii).has(e.pointerId)&&(p(this,Ii).set(e.pointerId,A(this,Pe,ys).call(this,e)),p(this,Li)!==null)){A(this,Pe,WE).call(this);return}let t=p(this,Pr);if(t!==null&&t.pointerId===e.pointerId){let s=p(this,gn).orbit();p(this,gn).setOrbit(xa({...s,yaw:s.yaw-(e.clientX-t.x)*ND,pitch:s.pitch+(e.clientY-t.y)*FE})),t.x=e.clientX,t.y=e.clientY;return}let n=p(this,Vn);if(n===null){if(e.pointerType==="mouse"&&e.buttons===0&&!p(this,nr).gliding()){let[s,o]=A(this,Pe,ys).call(this,e);p(this,gi)?.hover({x:s,y:o,clientX:e.clientX,clientY:e.clientY})}return}if(n.move(e)===null)return;A(this,Pe,_s).call(this);let i=A(this,Pe,ys).call(this,e);A(this,Pe,R_).call(this,p(this,lc),i),k(this,lc,i)},"#move"),VE=u(function(e){if(p(this,Ii).delete(e.pointerId),p(this,Li)!==null){k(this,Li,p(this,Ii).size<2?null:A(this,Pe,_h).call(this));return}if(p(this,Pr)?.pointerId===e.pointerId){k(this,Pr,null);return}let t=p(this,Vn);if(!(t===null||t.pointerId!==e.pointerId)){if(k(this,Vn,null),A(this,Pe,_s).call(this),!t.dragging()){let[n,i]=A(this,Pe,ys).call(this,e);p(this,gi)?.click(n,i,e.clientX,e.clientY);return}Ci()||p(this,nr).start(t.releaseVelocity(e.timeStamp))}},"#up"),HE=u(function(e){p(this,Ii).delete(e.pointerId),p(this,Li)!==null&&k(this,Li,p(this,Ii).size<2?null:A(this,Pe,_h).call(this)),p(this,Vn)?.pointerId===e.pointerId&&(k(this,Vn,null),A(this,Pe,_s).call(this)),p(this,Pr)?.pointerId===e.pointerId&&k(this,Pr,null)},"#cancel"),_h=u(function(){let[e,t]=[...p(this,Ii).values()];return e===void 0||t===void 0?null:{distance:Math.max(1,Math.hypot(t[0]-e[0],t[1]-e[1])),angle:Math.atan2(t[1]-e[1],t[0]-e[0]),middleY:(e[1]+t[1])/2,orbit:p(this,gn).orbit()}},"#measurePair"),WE=u(function(){let e=p(this,Li),t=A(this,Pe,_h).call(this);e===null||t===null||p(this,gn).setOrbit(xa({...e.orbit,distance:e.orbit.distance*(e.distance/t.distance),yaw:e.orbit.yaw-(t.angle-e.angle),pitch:e.orbit.pitch+(t.middleY-e.middleY)*FE}))},"#twoFingers"),XE=u(function(e){e.preventDefault();let t=p(this,pm).turned(e,p(this,lo)?.at??null);t!==0&&(p(this,nr).stop(),A(this,Pe,qE).call(this,t,A(this,Pe,ys).call(this,e)))},"#wheelTurned"),qE=u(function(e,t){let n=p(this,gn).orbit(),i=p(this,gn).lookHeight(),s=A(this,Pe,dm).call(this,t),o=A(this,Pe,T_).call(this),a=p(this,gn).settle($l(n,e)),l=ba(n,i,s,o),c=ba(a,i,s,o);if(l===null||c===null||a.distance===n.distance){p(this,gn).setOrbit(a);return}p(this,gn).setOrbit({...a,focus:[a.focus[0]+l[0]-c[0],a.focus[1]+l[1]-c[1]]})},"#zoomAbout"),fm=u(function(e,t){if(e.preventDefault(),p(this,Li)!==null){k(this,lo,null);return}if(t==="end"){k(this,lo,null);return}if(t==="start"){p(this,nr).stop(),k(this,Vn,null),A(this,Pe,_s).call(this),k(this,lo,{orbit:p(this,gn).orbit(),at:e.timeStamp});return}let n=p(this,lo);n!==null&&(n.at=e.timeStamp,p(this,gn).setOrbit(xa({...n.orbit,distance:n.orbit.distance/Math.max(.05,e.scale),yaw:n.orbit.yaw-e.rotation*Math.PI/180})))},"#safari"),u(C_,"CameraInput");var A_=C_,YE=A_;var DD=["#9a9a9a","#4a4a4a"],vh=u(r=>{let e=r.civilization?.attributes?.find(t=>t.name==="colors")?.value;return!Array.isArray(e)||typeof e[0]!="string"?DD:[e[0],typeof e[1]=="string"?e[1]:e[0]]},"coloursOf"),P_=u((r,e)=>r.find(t=>t.id===e)??[...r].sort((t,n)=>(n.defence?.value??0)-(t.defence?.value??0))[0]??null,"unitOnTop"),OD=u(r=>{let{current:e,max:t}=r.hitPoints??{current:0,max:0};return t>0&&e<t?Math.max(0,e/t):null},"healthOf"),UD=u((r,e,t,n={},i=()=>0,s=1,o=()=>null)=>{let a=r.units??[],l=P_(a,e),c=l!==null&&l.id===e,h=l===null?null:o(l._),d=t&&r.city?{name:n.cityName?.(r.city)??r.city.name,size:r.city.growth?.size??1,colours:vh(r.city.player),walled:r.city.walled===!0,disorder:r.city.civilDisorderDeclared===!0}:null,f=l!==null&&(t||c)?{id:l.id,type:l._,kinds:l.__??[],colours:vh(l.player),count:a.length,active:c,busy:l.busy!==null&&l.busy!==void 0,fortified:(l.improvements??[]).some(({_:m})=>m==="Fortified"),veteran:(l.improvements??[]).some(({_:m})=>m==="Veteran"),health:OD(l),status:(l.busy?n.unitStatus?.(l):null)||null,facing:i(l),size:s,...h===null?{}:{model:h}}:null;return d===null&&f===null?null:{city:d,unit:f,inCity:!!r.city}},"markerFor"),I_=UD;var jE={step:250,ramp:100,most:2e3},QE={step:125,ramp:50,most:1e3},eA=u(r=>({step:r.step/2,ramp:r.ramp/2,most:r.most/2}),"quicker"),FD=50,$E=.3,KE=1,BD=.05,kD=.02,L_=u((r,e)=>r.x===e.x&&r.y===e.y,"sameSquare"),ZE=u((r,e)=>{let{started:t,from:n,speed:i,rising:s,rise:o,top:a,going:l,stopping:c,fall:h,to:d}=r,f=Math.max(0,e-t);if(f<s)return{along:n+i*f+o*f*f/2,speed:i+o*f};let m=n+(i+a)/2*s;if(f<s+l)return{along:m+a*(f-s),speed:a};let g=m+a*l,_=f-s-l;return _<c?{along:g+a*_-h*_*_/2,speed:a-h*_}:{along:d,speed:0}},"motionAt"),Mh=u(r=>r.started+r.rising+r.going+r.stopping,"motionEnds"),JE=u((r,e,t,n,i)=>{let s=Math.max(0,n-e),o=Math.max(1,i.ramp),a=Math.max(1/i.step,i.most>o*2?s/(i.most-o):0),l=a/o;if(s<=0)return{started:r,from:n,speed:0,rising:0,rise:0,top:0,going:0,stopping:0,fall:0,to:n};if(t*t/(2*l)>=s){let b=2*s/t;return{started:r,from:e,speed:t,rising:0,rise:0,top:t,going:0,stopping:b,fall:t/b,to:n}}let c=Math.min(a,Math.sqrt(l*s+t*t/2)),h=Math.abs(c-t)/l,d=c>=t?l:-l,f=c/l,m=(t+c)/2*h,g=c*f/2,_=Math.max(0,(s-m-g)/c);return{started:r,from:e,speed:t,rising:h,rise:d,top:c,going:_,stopping:f,fall:l,to:n}},"plan"),uc=u((r,e,t)=>t===null?r:r+t*Math.round((e-r)/t),"nearest"),Sh=u((r,e)=>r[0]===e[0]&&r[1]===e[1]?null:Math.atan2(e[0]-r[0],e[1]-r[1]),"wayOf"),N_=u(r=>r*r*(3-2*r),"eased"),hc=u((r,e,t)=>{let n=e-r-Math.PI*2*Math.round((e-r)/(Math.PI*2));return r+n*t},"turnTowards"),dc,Nn,Ni,Ah,Th,rt,tA,nA,O_,U_,iA,F_,mm,wh,Eh,B_,Ca,k_=class k_{constructor(e){z(this,rt);z(this,dc);z(this,Nn,new Map);z(this,Ni,new Map);z(this,Ah,[]);z(this,Th,0);k(this,dc,e)}walking(e){return p(this,Ni).has(e)}size(){return p(this,Nn).size}step(e,t,n,i,s,o,a,l=!1){let c=p(this,Ni).get(e),h=c===void 0?void 0:p(this,Nn).get(c),d=h===void 0?i:A(this,rt,mm).call(this,h,o),f=h===void 0?0:A(this,rt,Eh).call(this,h,A(this,rt,wh).call(this,h,o)),m=[...p(this,Nn).values()].find(g=>g!==h&&(l||!g.flies)&&A(this,rt,tA).call(this,g,t,n,o)&&A(this,rt,iA).call(this,A(this,rt,mm).call(this,g,g.stepped),h===void 0?i:A(this,rt,mm).call(this,h,g.stepped))&&$E*Math.abs(N_(A(this,rt,Eh).call(this,g,A(this,rt,wh).call(this,g,o)))-N_(f))<kD);if(m!==void 0)return h!==void 0&&A(this,rt,U_).call(this,h,e),m.units.push(e),p(this,Ni).set(e,m.id),m.id;if(h!==void 0&&L_(h.squares[h.squares.length-1],t)){if(h.units.length>1){let g={...h,id:`walk-${++Gi(this,Th)._}`,units:h.units.filter(_=>_!==e),points:[...h.points],squares:[...h.squares]};p(this,Nn).set(g.id,g),g.units.forEach(_=>p(this,Ni).set(_,g.id)),h.units=[e]}return A(this,rt,O_).call(this,h,n,s,o,a,l),h.id}return h!==void 0&&A(this,rt,U_).call(this,h,e),A(this,rt,nA).call(this,e,t,n,d,s,o,a,{flies:l,climbed:f})}at(e){let t=[],n=[];return p(this,Nn).forEach(i=>{let s=A(this,rt,Ca).call(this,i,e);if(e>=Mh(i.motion)){n.push(s),A(this,rt,F_).call(this,i);return}t.push(s)}),{going:t,ended:n}}dropped(){return p(this,Ah).splice(0)}endsAt(e){let t=p(this,Ni).get(e),n=t===void 0?void 0:p(this,Nn).get(t);return n===void 0?null:Mh(n.motion)}nextEnd(){let e=null;return p(this,Nn).forEach(t=>{let n=Mh(t.motion);e=e===null?n:Math.min(e,n)}),e}endWhere(e,t){let n=[];return p(this,Nn).forEach(i=>{e(i.units)&&(n.push(A(this,rt,Ca).call(this,i,Math.max(t,Mh(i.motion)))),A(this,rt,F_).call(this,i))}),n}endAll(e){let t=[...p(this,Nn).values()].map(n=>A(this,rt,Ca).call(this,n,Math.max(e,Mh(n.motion))));return p(this,Nn).clear(),p(this,Ni).clear(),t}};dc=new WeakMap,Nn=new WeakMap,Ni=new WeakMap,Ah=new WeakMap,Th=new WeakMap,rt=new WeakSet,tA=u(function(e,t,n,i){let s=e.squares.length-1;return s>0&&i-e.stepped<=FD&&L_(e.squares[s-1],t)&&L_(e.squares[s],n)},"#justMade"),nA=u(function(e,t,n,i,s,o,a,{flies:l,climbed:c}){let h=`walk-${++Gi(this,Th)._}`,d={id:h,units:[e],from:t,points:[i],squares:[t],stepped:o,motion:JE(o,0,0,0,a),turned:null,flies:l,flown:0,climb:{from:c,at:0}};return p(this,Nn).set(h,d),p(this,Ni).set(e,h),A(this,rt,O_).call(this,d,n,s,o,a,l),h},"#setOff"),O_=u(function(e,t,n,i,s,o){let{u:a,v:l}=p(this,dc),c=e.points[e.points.length-1],h=c.middle??c.at,{along:d,speed:f}=ZE(e.motion,i),m=Math.max(0,Math.floor(d)-1),g=e.points.length>1?A(this,rt,Ca).call(this,e,i).facing:null,_=e.points.length-1,b=d-(_-1),x=A(this,rt,wh).call(this,e,i);e.points.length>1&&(e.climb={from:A(this,rt,Eh).call(this,e,x),at:e.flown+x}),e.flies=o,c.middle!==void 0&&b*Math.hypot(c.middle[0]-c.at[0],c.middle[1]-c.at[1])<.01&&(e.points[_]={at:c.middle,lift:0,middle:c.middle,...c.via===void 0?{}:{via:c.via}}),e.points.splice(0,m),e.squares.splice(0,m),e.flown+=m,e.points.push({at:[uc(n.at[0],c.at[0],a),uc(n.at[1],c.at[1],l)],lift:n.lift,...n.middle===void 0?{}:{middle:[uc(n.middle[0],h[0],a),uc(n.middle[1],h[1],l)]},...n.via===void 0?{}:{via:n.via}}),e.squares.push(t),e.stepped=i,e.motion=JE(i,d-m,f,e.points.length-1,s),e.turned=null,g!==null&&(e.turned={offset:hc(0,g-A(this,rt,Ca).call(this,e,i).facing,1),at:i,over:s.step/2})},"#goOn"),U_=u(function(e,t){e.units=e.units.filter(n=>n!==t),p(this,Ni).delete(t),e.units.length===0&&(p(this,Nn).delete(e.id),p(this,Ah).push(e.id))},"#leave"),iA=u(function(e,t){let{u:n,v:i}=p(this,dc);return Math.hypot(uc(e.at[0],t.at[0],n)-t.at[0],uc(e.at[1],t.at[1],i)-t.at[1])<BD},"#beside"),F_=u(function(e){p(this,Nn).delete(e.id),e.units.forEach(t=>p(this,Ni).delete(t))},"#end"),mm=u(function(e,t){let{at:n,lift:i}=A(this,rt,Ca).call(this,e,t);return{at:n,lift:i}},"#drawn"),wh=u(function(e,t){return Math.min(e.points.length-1,Math.max(0,ZE(e.motion,t).along))},"#along"),Eh=u(function(e,t){return e.flies?Math.max(0,Math.min(1,e.climb.from+(e.flown+t-e.climb.at)/KE,(e.points.length-1-t)/KE)):0},"#climbed"),B_=u(function(e,t,n){let i=e.points[t],s=e.points[t+1]??i,o=u(b=>b.middle??b.at,"middle");if(s.via===void 0||s.via.length===0)return{at:[i.at[0]+(s.at[0]-i.at[0])*n,i.at[1]+(s.at[1]-i.at[1])*n],way:s===i?null:Sh(o(i),o(s))};let[a,l]=o(s),c=[i.at,...s.via.map(([b,x])=>[a+b,l+x]),s.at],h=c.slice(1).map((b,x)=>Math.hypot(b[0]-c[x][0],b[1]-c[x][1])),d=h.reduce((b,x)=>b+x,0),f=Sh(o(i),o(s)),m=c.slice(1).map((b,x)=>Sh(c[x],b)??f??0),g=c.map((b,x)=>{let v=m[x-1],S=m[x];return v===void 0?S:S===void 0?v:hc(v,S,.5)}),_=Math.min(1,Math.max(0,n))*d;for(let b=0;b<h.length;b++){let x=h[b],v=c[b],S=c[b+1];if(_<=x||b===h.length-1){let M=x===0?0:Math.min(1,_/x);return{at:[v[0]+(S[0]-v[0])*M,v[1]+(S[1]-v[1])*M],way:hc(g[b],g[b+1],M)}}_-=x}return{at:[s.at[0],s.at[1]],way:Sh(o(i),o(s))}},"#stepAt"),Ca=u(function(e,t){let{points:n,squares:i,turned:s}=e,o=n.length-1,a=A(this,rt,wh).call(this,e,t),l=Math.min(o-1,Math.floor(a)),c=a-l,h=n[l],d=n[l+1]??h,{at:f,way:m}=A(this,rt,B_).call(this,e,l,c),g=u((M,R)=>M<0||M>=o?null:A(this,rt,B_).call(this,e,M,R).way,"way"),_=u(M=>{let R=g(M,1),E=g(M+1,0);return R===null||E===null?null:hc(0,E-R,1)},"turnAt"),b=m??0,x=Sh(h.middle??h.at,d.middle??d.at),v=(()=>{if(c>.75){let M=_(l);if(M!==null)return b+M*(c-.75)*2;if(l===o-1&&x!==null)return hc(b,x,(c-.75)*4)}else if(c<.25){let M=_(l-1);if(M!==null)return b-M*(.5-c*2);if(l===0&&x!==null)return hc(x,b,c*4)}return b})(),S=s!==null&&t-s.at<s.over?v+s.offset*(1-Math.max(0,t-s.at)/s.over):v;return{id:e.id,units:[...e.units],at:f,lift:h.lift+(d.lift-h.lift)*c,aloft:$E*N_(A(this,rt,Eh).call(this,e,a)),facing:S,from:e.from,before:i[o-1]??i[o],to:i[o]}},"#walker"),u(k_,"Walks");var D_=k_,rA=D_;var zD=u(({kind:r,start:e,duration:t},n)=>{let i=t<=0?1:Math.min(1,Math.max(0,(n-e)/t));return r==="in"?i:1-i},"fadeAt"),Ir,gm,G_=class G_{constructor(){z(this,Ir,new Map);z(this,gm,0)}size(){return p(this,Ir).size}add(e,t,n=500){let i=`fade-${++Gi(this,gm)._}`;return p(this,Ir).set(i,{id:i,kind:e,start:t,duration:n}),i}at(e){let t=[],n=[];return p(this,Ir).forEach((i,s)=>{if(e>=i.start+i.duration){n.push(s),p(this,Ir).delete(s);return}t.push({id:s,kind:i.kind,opacity:zD(i,e)})}),{going:t,ended:n}}end(e){p(this,Ir).delete(e)}endAll(){let e=[...p(this,Ir).keys()];return p(this,Ir).clear(),e}};Ir=new WeakMap,gm=new WeakMap,u(G_,"Fades");var z_=G_,sA=z_;var Lr,W_=class W_{constructor(){z(this,Lr,new Map)}size(){return p(this,Lr).size}trail(e,t,n){let i=p(this,Lr).get(e),[s,o]=i?.points??[];if(i===void 0||s===void 0||o===void 0||n-o.time>=1200){p(this,Lr).set(e,{points:[{at:t,time:n},{at:t,time:n}]});return}s.at=t,s.time=n;let a=t[0]-o.at[0],l=t[1]-o.at[1],c=Math.hypot(a,l),h=Math.floor(c/.04),[d,f]=o.at,m=o.time;i.points.splice(1,0,...Array.from({length:h},(g,_)=>{let b=(h-_)*.04/c;return{at:[d+a*b,f+l*b],time:m+(n-m)*b}}))}at(e){let t=[],n=[];return p(this,Lr).forEach((i,s)=>{if(i.points=i.points.filter(({time:o})=>e-o<1200),i.points.length===0){p(this,Lr).delete(s),n.push(s);return}t.push({id:s,points:i.points.map(({at:o,time:a})=>({at:o,age:Math.max(0,e-a)}))})}),{going:t,gone:n}}endAll(){let e=[...p(this,Lr).keys()];return p(this,Lr).clear(),e}};Lr=new WeakMap,u(W_,"Wakes");var H_=W_,V_={start:.03,by:.17,over:.5},GD=.016,VD=.004,oA=u(r=>{let[e]=r,t=[];if(e===void 0)return t;let n=r.map((o,a)=>{let l=r[a-1]??o,c=r[a+1]??o,h=l.at[0]-c.at[0],d=l.at[1]-c.at[1],f=Math.hypot(h,d);return f===0?null:[-d/f,h/f]}),i=r.reduce((o,a,l)=>{let c=r[l-1];return o.push(c===void 0?0:o[l-1]+Math.hypot(a.at[0]-c.at[0],a.at[1]-c.at[1])),o},[]),s=u((o,a)=>{let l=r[o],c=n[o],h=Math.min(1,l.age/1200);if(c==null)return null;let d=V_.start+V_.by*Math.min(1,i[o]/V_.over),f=GD*(1-h),m=[l.at[0]-e.at[0]+c[0]*d*a,l.at[1]-e.at[1]+c[1]*d*a];return[[m[0]-c[0]*f/2,m[1]-c[1]*f/2],[m[0]+c[0]*f/2,m[1]+c[1]*f/2]]},"edges");for(let o=0;o+1<r.length;o++)[1,-1].forEach(a=>{let l=s(o,a),c=s(o+1,a);if(l===null||c===null)return;let[h,d]=l,[f,m]=c;[h,f,d,d,f,m].forEach(([g,_])=>t.push(g,VD,_))});return t},"wakeShape"),aA=H_;var lA={reach:200,back:300,fade:600},M5=va.bottle.flight,cA=u(r=>({...r,reach:r.reach/2,back:r.back/2,fade:r.fade/2,...r.falls===void 0?{}:{falls:r.falls/2},...r.clips===void 0?{}:{clips:{...r.clips,rate:r.clips.rate*2}}}),"quickerBattle"),uA=u((r,e,t)=>{let n=e?.clips.fight,i=t?.clips.die;if(n===void 0&&i===void 0)return r;let s=u(h=>Math.max(0,(h?.figures??1)-1)*(h?.stagger??0),"tail"),o=n?.shots??[],a=o.length===0?void 0:Math.min(...o.map(h=>h.at*1e3+va[Qp(h)].flight)),l=o.length===0?0:Math.max(...o.map(h=>(h.at+s(e))*1e3+z1(Qp(h)))),c=a===void 0?r.reach:a;return{...r,reach:c,back:n===void 0?r.back:Math.max(r.back,(n.duration+s(e))*1e3-c,l-c),...a===void 0?{}:{lunge:0},...i===void 0?{}:{falls:(i.duration+s(t))*1e3},clips:{rate:1,fight:n!==void 0,die:i!==void 0}}},"clipPace"),hA=u((r,e)=>e||r.clips?.fight===!0?Math.max(r.back,(r.falls??0)+r.fade):(r.falls??0)+r.fade,"afterBlow"),j_=u((r,e=!0)=>r.reach+hA(r,e),"battleLength"),Q_=.45,Pa=u(r=>r.start+r.pace.reach,"blowAt"),X_=u(r=>Pa(r)+hA(r.pace,r.won),"battleEnds"),q_=u(r=>Math.min(1,Math.max(0,r)),"clamp"),HD=u(r=>r*r,"easeIn"),WD=u(r=>r*r*(3-2*r),"easeInOut"),XD=u((r,e)=>{let{reach:t,back:n,fade:i,lunge:s=1,falls:o=0}=r.pace,a=e-Pa(r),l=a<o?1:1-q_(i<=0?1:(a-o)/i);return a<0?{reach:HD(q_(t<=0?1:(e-r.start)/t))*s,attacker:1,fallen:1}:r.won?{reach:(1-WD(q_(n<=0?1:a/n)))*s,attacker:1,fallen:l}:{reach:s,attacker:l,fallen:0}},"battleAt"),Y_=u((r,e)=>r.x===e.x&&r.y===e.y,"sameSquare"),qD=u((r,e)=>r.attacker===e.attacker||r.attacker===e.defender,"waitsFor"),Qt,ir,Nr,bm,en,uo,K_,Z_,J_,dA,ev=class ev{constructor(){z(this,en);z(this,Qt,[]);z(this,ir,new Set);z(this,Nr,new Set);z(this,bm,0)}size(){return p(this,Qt).length}attacking(e){return p(this,Qt).some(t=>t.attacker===e&&!A(this,en,uo).call(this,t))}holds(e){return p(this,Qt).some(t=>t.attacker===e&&!p(this,Nr).has(t.id))}released(e){return p(this,Nr).has(e)}fighting(e){return p(this,Qt).some(t=>t.attacker===e||t.defender===e)}awaitingBlow(e){return p(this,Qt).find(t=>!p(this,ir).has(t.id)&&Y_(t.defenderSquare,e))??null}add(e,t,n,i=t){let s={...e,id:`battle-${++Gi(this,bm)._}`,start:A(this,en,Z_).call(this,e,n,p(this,Qt).filter(o=>!A(this,en,uo).call(this,o)),Math.max(t,i)),notBefore:i,pace:n};return p(this,Qt).push(s),s}at(e){let t=[],n=[],i=[],s=new Set;return p(this,Qt).forEach(o=>{if(e>=Pa(o)&&!p(this,ir).has(o.id)&&(p(this,ir).add(o.id),n.push(o)),e>=X_(o)){i.push(o);return}t.push(...A(this,en,dA).call(this,o,e,s))}),A(this,en,J_).call(this,i),{going:t,struck:n,ended:i}}endWhere(e,t,n=()=>!1){let i=p(this,Qt).filter(e),s=u(c=>n(c)||p(this,Nr).has(c.id),"spared"),o=p(this,Qt).filter((c,h)=>i.includes(c)||!p(this,ir).has(c.id)&&i.some(d=>p(this,Qt).indexOf(d)>h&&Y_(d.defenderSquare,c.defenderSquare))),a=o.filter(c=>i.includes(c)||!s(c)),l=o.filter(c=>!p(this,ir).has(c.id));return l.forEach(c=>p(this,ir).add(c.id)),A(this,en,J_).call(this,a),a.length>0&&A(this,en,K_).call(this,t),{struck:l,ended:a}}longest(e){return p(this,Qt).filter(t=>e.includes(t.attacker)&&!A(this,en,uo).call(this,t)).reduce((t,{pace:n,won:i})=>Math.max(t,j_(n,i)),0)}busyUntil(e){return p(this,Qt).filter(t=>e.includes(t.attacker)&&!A(this,en,uo).call(this,t)).reduce((t,n)=>Math.max(t??0,X_(n)),null)}moveOn(e,t,n=!1){let i=u(l=>p(this,ir).has(l.id)||t>=Pa(l),"fallen"),s=u(l=>i(l)&&(l.attacker===e?l.won||n:!l.won),"goesOn"),o=p(this,Qt).filter(l=>l.attacker===e&&s(l)&&!p(this,Nr).has(l.id));o.forEach(l=>p(this,Nr).add(l.id));let a=this.endWhere(l=>(l.attacker===e||!n&&l.defender===e)&&!s(l),t,l=>(l.attacker===e||l.defender===e)&&s(l));return o.length>0&&A(this,en,K_).call(this,t),{...a,released:o}}endAll(e){return this.endWhere(()=>!0,e)}};Qt=new WeakMap,ir=new WeakMap,Nr=new WeakMap,bm=new WeakMap,en=new WeakSet,uo=u(function(e){return e.won&&p(this,Nr).has(e.id)},"#movedOn"),K_=u(function(e){p(this,Qt).forEach((t,n)=>{t.start>e&&(t.start=A(this,en,Z_).call(this,t,t.pace,p(this,Qt).slice(0,n).filter(i=>!A(this,en,uo).call(this,i)),Math.max(e,t.notBefore)))})},"#restart"),Z_=u(function(e,t,n,i){return n.reduce((s,o)=>qD(o,e)?Math.max(s,X_(o)):Y_(o.defenderSquare,e.defenderSquare)?Math.max(s,Pa(o)-t.reach):s,i)},"#startOf"),J_=u(function(e){e.length!==0&&(k(this,Qt,p(this,Qt).filter(t=>!e.includes(t))),e.forEach(t=>{p(this,ir).delete(t.id),p(this,Nr).delete(t.id)}))},"#take"),dA=u(function(e,t,n){let{reach:i,attacker:s,fallen:o}=XD(e,t),{from:a,edge:l,fallsAt:c}=e,{clips:h}=e.pace,d=Pa(e),f=u((b,x)=>({clip:{role:b,seconds:(t-x)/1e3*(h?.rate??1)}}),"playing"),m=h===void 0?{}:!e.won&&t>=d&&h.die?{clip:{...f("die",d).clip,...h.fight?{before:f("fight",e.start).clip}:{}}}:h.fight?f("fight",e.start):{},g=[],_=!n.has(e.attacker)&&!A(this,en,uo).call(this,e);return A(this,en,uo).call(this,e)||n.add(e.attacker),_&&(s>0||h?.fight===!0)&&g.push({id:e.id,battle:e.id,unit:e.attacker,fallen:!1,at:[a.at[0]+(l[0]-a.at[0])*i,a.at[1]+(l[1]-a.at[1])*i],lift:a.lift*(1-i),facing:e.facing,opacity:s,...m,...h?.fight?{fought:(t-e.start)/1e3*h.rate}:{}}),e.won&&t>=Pa(e)&&o>0&&g.push({id:`${e.id}-fallen`,battle:e.id,unit:e.defender,fallen:!0,at:[c.at[0],c.at[1]],lift:c.lift,facing:e.defenderFacing,opacity:o,...h?.die?f("die",d):{}}),g},"#fighters"),u(ev,"Battles");var $_=ev,fA=$_;var YD=1,$D=.04,KD=12,ZD=u((r,e,t,n,i,{water:s=0,ceiling:o=YD}={})=>{let{from:a,direction:l}=Fy(r,e,t,n),[c,h,d]=a,[f,m,g]=l;if(m>-1e-6)return null;let _=u(y=>[c+f*y,h+m*y,d+g*y],"at"),b=u(y=>{let[w,L,I]=_(y);return L-Math.max(s,i(w,I))},"above"),x=Math.max(0,(h-o)/-m),v=(h-s)/-m,S=$D/Math.max(1e-6,Math.hypot(f,g)),M=x;for(let y=x;;y=Math.min(v,y+S)){if(b(y)<=0){let w=M,L=y;for(let B=0;B<KD;B++){let $=(w+L)/2;b($)>0?w=$:L=$}let[I,,O]=_(L);return[I,O]}if(y>=v)break;M=y}let[R,,E]=_(v);return[R,E]},"pickGround"),pA=ZD;var xm=4,ho,Rh,Ia,La,jn,fc,fo,vs,Ch,Ph,Ih,rr,ym,mA,nv,iv=class iv{constructor(e,t,n,i,s){z(this,rr);z(this,ho);z(this,Rh);z(this,Ia);z(this,La);z(this,jn);z(this,fc);z(this,fo);z(this,vs);z(this,Ch);z(this,Ph);z(this,Ih,u(e=>{let t=p(this,ho).getBoundingClientRect(),n=t.width>0?(e.clientX-t.left)/t.width:0,i=t.height>0?(e.clientY-t.top)/t.height:0;p(this,Ph).call(this,n*p(this,jn),i*p(this,fc))},"#click"));k(this,ho,e),k(this,Ia,t),k(this,La,n),k(this,jn,t.period().u),k(this,fc,i),k(this,Ph,s),k(this,vs,document.createElement("canvas"));let{v:o}=t.period();k(this,fo,o),k(this,Ch,[[0,0],[-p(this,jn),0],...o===null?[]:[[0,-o],[-p(this,jn),-o]]]);let a=Math.max(1,Math.round(p(this,jn)*xm)),l=Math.max(1,Math.round(p(this,fc)*xm));[e,p(this,vs)].forEach(c=>{c.width=a,c.height=l}),k(this,Rh,e.getContext("2d")),e.addEventListener("click",p(this,Ih))}dispose(){p(this,ho).removeEventListener("click",p(this,Ih))}redraw(){let e=p(this,vs).getContext("2d");if(e===null)return;let t=p(this,La).width(),n=p(this,La).height(),i=[];e.fillStyle="#000000",e.fillRect(0,0,p(this,vs).width,p(this,vs).height);for(let s=0;s<n;s++)for(let o=0;o<t;o++){let a=p(this,La).get(o,s),l=a.terrain?._??"Unknown";if(l==="Unknown")continue;e.fillStyle=ia(l).colour,p(this,Ch).forEach(([d,f])=>{A(this,rr,mA).call(this,e,o,s,d,f),e.fill()});let[c,h]=p(this,Ia).centre(o,s);if(a.city)i.push([c,h,vh(a.city.player)[0],2.2]);else if((a.units??[]).length>0){let d=P_(a.units,null);d!==null&&i.push([c,h,vh(d.player)[0],1.4])}}i.forEach(([s,o,a,l])=>A(this,rr,nv).call(this,s,o).forEach(([c,h])=>{e.fillStyle="#000000",e.fillRect(c-l-.5,h-l-.5,l*2+1,l*2+1),e.fillStyle=a,e.fillRect(c-l,h-l,l*2,l*2)}))}show(e,t){let n=p(this,Rh);if(n===null)return;if(n.clearRect(0,0,p(this,ho).width,p(this,ho).height),n.drawImage(p(this,vs),0,0),t!==null){let[h,d]=p(this,Ia).centre(t.x,t.y);n.fillStyle="#ffffff",A(this,rr,nv).call(this,h,d).forEach(([f,m])=>n.fillRect(f-2,m-2,4,4))}if(e===null||e.length<3)return;n.strokeStyle="#ffffff",n.lineWidth=1;let i=p(this,fo),s=Math.min(...e.map(([h])=>h)),o=Math.min(...e.map(([,h])=>h)),a=-p(this,jn)*Math.floor(s/p(this,jn)),l=i===null?0:-i*Math.floor(o/i);(i===null?[0]:[-i,0,i]).forEach(h=>[-p(this,jn),0,p(this,jn)].forEach(d=>{n.beginPath(),e.forEach(([f,m],g)=>{let[_,b]=A(this,rr,ym).call(this,f+a+d,m+l+h);g===0?n.moveTo(_,b):n.lineTo(_,b)}),n.closePath(),n.stroke()}))}};ho=new WeakMap,Rh=new WeakMap,Ia=new WeakMap,La=new WeakMap,jn=new WeakMap,fc=new WeakMap,fo=new WeakMap,vs=new WeakMap,Ch=new WeakMap,Ph=new WeakMap,Ih=new WeakMap,rr=new WeakSet,ym=u(function(e,t){return[e*xm,t*xm]},"#px"),mA=u(function(e,t,n,i=0,s=0){e.beginPath(),p(this,Ia).outline(t,n).forEach(([o,a],l)=>{let[c,h]=A(this,rr,ym).call(this,o+i,a+s);l===0?e.moveTo(c,h):e.lineTo(c,h)}),e.closePath()},"#outline"),nv=u(function(e,t){return(p(this,fo)===null?[0]:[-p(this,fo),0,p(this,fo)]).flatMap(i=>[-p(this,jn),0,p(this,jn)].map(s=>A(this,rr,ym).call(this,e+s,t+i)))},"#everywhere"),u(iv,"Minimap3D");var tv=iv,gA=tv;var JD=u(r=>Object.entries(r.reduce((e,t)=>(e[t._]=(e[t._]??0)+t.value,e),{})).map(([e,t])=>({_:e,value:Math.floor(t)})).filter(({value:e})=>e>0),"netTileYields"),bA=u(r=>{let e=JD(r).sort((n,i)=>n._.charCodeAt(0)-i._.charCodeAt(0)).flatMap(({_:n,value:i})=>Array.from({length:i},()=>n)),t=Math.min(6,Math.max(2,Math.ceil(e.length/2)));return{columns:t,icons:e.slice(0,t*2).map((n,i)=>({_:n,column:i%t,row:Math.floor(i/t)}))}},"tileYieldGrid");var xA=u((r,e)=>(r.squareYieldsApplied?void 0:e?.squareYields?.find(({x:t,y:n})=>t===r.x&&n===r.y)?.yields)??r.yields??[],"squareYields"),yA=u(r=>r.city??r.workedBy??null,"squareCity");var jD=.9,QD=u(r=>{let{columns:e,icons:t}=bA(r),n=Math.min(e,t.length),i=Math.ceil(t.length/e);return{columns:e,slots:t.map(({_:s,column:o,row:a})=>({_:s,right:o-(n-1)/2,up:(i-1)/2-a}))}},"yieldSlots"),eO=u((r,e)=>jD*e/Math.hypot(r,2),"yieldIconSize"),_A=u((r,e)=>{let[t,n]=r.centre(0,0);return Math.min(...e.edgeDirections().map(i=>{let[s,o]=e.offset(i,0,0),[a,l]=r.centre(s,o);return Math.hypot(a-t,l-n)}))},"innerOf"),vA=u(({at:r,yields:e},t)=>{let{columns:n,slots:i}=QD(e);return i.length===0?null:{at:r,size:eO(n,t),slots:i}},"laidYields"),MA=u(r=>{let e=[...r],t=e.reduce((o,{slots:a})=>o+a.length,0),n={count:t,anchors:new Float32Array(t*3),slots:new Float32Array(t*2),sizes:new Float32Array(t),cells:new Float32Array(t),names:[]},i=new Map,s=0;return e.forEach(({at:o,size:a,slots:l})=>{l.forEach(({_:c,right:h,up:d})=>{let f=i.get(c);f===void 0&&(f=n.names.push(c)-1,i.set(c,f)),n.anchors[s*3]=o[0],n.anchors[s*3+1]=o[1],n.anchors[s*3+2]=o[2],n.slots[s*2]=h,n.slots[s*2+1]=d,n.sizes[s]=a,n.cells[s]=f,s++})}),n},"yieldMesh");var SA=u((r,{orbit:e,look:t,width:n,height:i,period:s,reach:o})=>{let a=n/i,l=Kl(e,t),c=[(e.focus[0]-l[0])/e.distance,(t-l[1])/e.distance,(e.focus[1]-l[2])/e.distance],{near:h,far:d}=ms(e.distance,s),f=jp(e.focus,Yy(e,s),s),m=u(([_,b])=>[(_+1)/2*n,(1-b)/2*i],"onScreen"),g=[];return r.forEach(({key:_,centre:b,outline:x})=>f.forEach(([v,S])=>{let M=u(([B,$,F])=>[B+v,$,F+S],"moved"),R=M(b),E=(R[0]-l[0])*c[0]+(R[1]-l[1])*c[1]+(R[2]-l[2])*c[2];if(E>d)return;let y=Zl(e,t,R,a);if(y===null)return;let[w]=m(y);if(w<-o||w>n+o)return;let L=x.map(B=>Zl(e,t,M(B),a));if(L.some(B=>B===null))return;let I=Math.max(...L.map(B=>m(B)[1]));if(I<-o||I>i)return;let O=Math.min(1,Math.max(0,(E-h)/(d-h)));g.push({key:_,x:w,y:I,clear:1-O*O*(3-2*O)})})),g.sort((_,b)=>_.y-b.y)},"bannerPlaces");var EA=10,tO=4e3,AA=u(r=>r-Math.PI*2*Math.round(r/(Math.PI*2)),"shortTurn"),nO=350,iO=2e3,rO=8,TA=u(r=>({...r,...r.hitPoints?{hitPoints:{...r.hitPoints}}:{},...r.defence?{defence:{...r.defence}}:{},...r.improvements?{improvements:[...r.improvements]}:{}}),"keptUnit"),RA=u(r=>Object.fromEntries(Object.entries(r).map(([e,t])=>[e,Array.isArray(t)?[...t]:t!==null&&typeof t=="object"?{...t}:t])),"copied"),sO=u(r=>r&&{...r,...r.growth?{growth:RA(r.growth)}:{},...r.build?{build:RA(r.build)}:{},...r.yields?{yields:r.yields.map(e=>({...e}))}:{}},"keptCity"),oO=500,aO=.25,lO=400,cO=.5,Bt,Fh,Bh,Ge,et,Oa,gc,kh,ht,Dt,Hn,bc,zh,Ua,xo,xc,Gh,Vh,bi,yc,Di,bn,Oi,Fa,yo,_c,Qn,Ms,Ui,_o,vc,Mc,Zt,xi,vo,Or,Ss,Ur,ws,Hh,Mo,So,yi,Ba,Sc,Fr,ka,Br,Fi,ei,Bi,kr,zr,Wh,Xh,qh,Gr,Vr,Es,As,_i,wc,Ec,Ts,ki,ar,Ac,Yh,Tc,wo,$h,za,Hr,Kh,Rs,Rc,Cc,Ga,Pc,Va,Eo,Ha,Ic,lr,Zh,vi,Ao,Lc,Jh,Nc,jh,To,Wr,Wa,Xa,Qh,ed,Dc,Xr,Oc,td,Uc,Fc,qr,P,CA,sv,PA,IA,pc,ov,po,LA,NA,mc,_m,av,Lh,mo,lv,Nh,cv,Dh,uv,vm,DA,OA,UA,FA,Mm,Sm,hv,dv,BA,wm,kA,zA,GA,Em,VA,fv,pv,HA,Na,Am,WA,XA,qA,Tm,go,Rm,mv,YA,$A,gv,KA,bv,bo,ZA,xv,Dr,sr,Oh,JA,jA,yv,or,QA,Cm,eT,Pm,_v,vv,Mv,tT,nT,iT,rT,Da,Im,Sv,Lm,sT,oT,wv,Kt,Uh,aT,Ev,Av,Tv=class Tv{constructor(e,t=B1){z(this,P);z(this,Bt);z(this,Fh);z(this,Bh,[]);z(this,Ge);z(this,et);z(this,Oa,null);z(this,gc,0);z(this,kh,"");z(this,ht);z(this,Dt,null);z(this,Hn,null);z(this,bc);z(this,zh);z(this,Ua);z(this,xo,null);z(this,xc,null);z(this,Gh);z(this,Vh,!1);z(this,bi);z(this,yc);z(this,Di,new Map);z(this,bn);z(this,Oi,new Map);z(this,Fa,new Map);z(this,yo,new Map);z(this,_c,new Map);z(this,Qn,new Map);z(this,Ms,new Set);z(this,Ui,new Map);z(this,_o,0);z(this,vc,new Map);z(this,Mc,new Map);z(this,Zt,new fA);z(this,xi,new sA);z(this,vo,new aA);z(this,Or,new Map);z(this,Ss,new Map);z(this,Ur,new Map);z(this,ws,new Map);z(this,Hh,!1);z(this,Mo,new Map);z(this,So,null);z(this,yi,new Map);z(this,Ba,new Map);z(this,Sc,new Set);z(this,Fr,new Set);z(this,ka,new Map);z(this,Br,new Map);z(this,Fi,new Set);z(this,ei);z(this,Bi,null);z(this,kr,null);z(this,zr,null);z(this,Wh,u(()=>{A(this,P,Na).call(this)&&k(this,zr,null),A(this,P,Am).call(this)},"#pressed"));z(this,Xh,u(e=>{let t=e.target;e.ctrlKey||e.metaKey||e.altKey||["Shift","Control","Alt","Meta","CapsLock"].includes(e.key)||t!==null&&(t.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(t.tagName))||A(this,P,Am).call(this)},"#keyed"));z(this,qh);z(this,Gr,null);z(this,Vr,null);z(this,Es,!1);z(this,As);z(this,_i,u(()=>{let e=p(this,Vr);e!==null&&(e.timer!==null&&window.clearTimeout(e.timer),k(this,Vr,null),document.removeEventListener("keydown",p(this,_i),!0),e.open&&p(this,bi).endTooltip(p(this,Bt)))},"#endHover"));z(this,wc,null);z(this,Ec,!0);z(this,Ts,new Map);z(this,ki);z(this,ar,new Map);z(this,Ac,!1);z(this,Yh,!1);z(this,Tc,"");z(this,wo,new Map);z(this,$h,null);z(this,za,[]);z(this,Hr,null);z(this,Kh,u(()=>{},"#stopRestyled"));z(this,Rs,null);z(this,Rc,!1);z(this,Cc,-1/0);z(this,Ga,new Set);z(this,Pc,new Set);z(this,Va,new Map);z(this,Eo,new Map);z(this,Ha,[]);z(this,Ic,0);z(this,lr,null);z(this,Zh,null);z(this,vi,!0);z(this,Ao);z(this,Lc,new Map);z(this,Jh,u(e=>p(this,Lc).get(e)?.id??null,"#modelOf"));z(this,Nc,!1);z(this,jh,u(()=>{},"#stopUnitSize"));z(this,To,!1);z(this,Wr,!0);z(this,Wa,!1);z(this,Xa,new Map);z(this,Qh);z(this,ed,u(()=>{},"#stopArtChanged"));z(this,Dc,!1);z(this,Xr);z(this,Oc);z(this,td,"");z(this,Uc,u(()=>A(this,P,Av).call(this),"#resizeHandler"));z(this,Fc,null);z(this,qr,!1);k(this,Bt,e.mapCanvas),k(this,Fh,e.coveredBy),k(this,Xr,e.art),k(this,ki,e.cityBanners??null),k(this,yc,{cityName:e.cityName,unitStatus:e.unitStatus}),k(this,Ao,Iy*(e.unitSize?.get()??1)),k(this,Oc,e.art.id()),this.world=e.world,k(this,Ge,new NE(e.world)),p(this,Ge).keepCities((i,s)=>{let o=`${i},${s}`;for(let a of p(this,yi).values())if(a.square===o)return a.city}),k(this,bn,new rA(p(this,Ge).layout.period())),k(this,ei,e.walks),k(this,Qh,_A(p(this,Ge).layout,e.world.topology())),k(this,Ha,e.world.tiles()),k(this,Ic,p(this,Ha).length),k(this,zh,e.cameraDistance),k(this,Gh,e.lockVerticalEdges);let n=e.cameraDistance.get();if(k(this,ht,A(this,P,Dr).call(this,{...g1(p(this,Ge).layout.centre(0,0)),...n===null?{}:{distance:n}})),k(this,Ua,p(this,ht).distance),this.portal=new Hv(e,{centre:u(()=>A(this,P,ZA).call(this),"centre"),centreOn:u((i,s)=>A(this,P,XA).call(this,i,s),"centreOn"),changed:u(()=>{k(this,ht,A(this,P,Dr).call(this,p(this,ht))),A(this,P,Kt).call(this)},"changed"),visible:u((i,s,o)=>A(this,P,go).call(this,i,s,o),"visible")}),k(this,et,t(e.mapCanvas,{period:p(this,Ge).layout.period(),ground:p(this,Ge).ground(),yieldIcon:e.yieldIcon})),e.minimapCanvas!==null&&k(this,wc,new gA(e.minimapCanvas,p(this,Ge).layout,e.world,p(this,Ge).extentV(),(i,s)=>{k(this,zr,null),A(this,P,Oh).call(this,{...p(this,Dt)?.to??p(this,ht),focus:[i,s]})})),e.debug&&e.mapCanvas.parentElement&&(k(this,Oa,A(this,P,aT).call(this,e.mapCanvas.parentElement)),window.civMap3DView=this),p(this,ki)!==null&&e.mapCanvas.parentElement){let i=document.createElement("canvas");i.className="map3d-banners",i.setAttribute("aria-hidden","true"),Object.assign(i.style,{left:"0",pointerEvents:"none",position:"absolute",top:"0"}),e.mapCanvas.after(i),k(this,Hr,i)}else k(this,ki,null);k(this,Tc,A(this,P,Pm).call(this)),p(this,Ge).queueAll(...A(this,P,bo).call(this)),A(this,P,Da).call(this),this.portal.on("activate-unit",i=>e.activateUnit(i)),k(this,bi,e.squares),k(this,As,e.playerId),k(this,qh,e.transport),k(this,bc,new YE(e.mapCanvas,{orbit:u(()=>p(this,ht),"orbit"),lookHeight:u(()=>p(this,Hn)??0,"lookHeight"),setOrbit:u(i=>this.setOrbit(i),"setOrbit"),settle:u(i=>A(this,P,Dr).call(this,i),"settle")},{click:u((i,s)=>A(this,P,YA).call(this,i,s),"click"),menu:u((i,s,o,a,l)=>A(this,P,$A).call(this,i,s,o,a,l),"menu"),menuOnRightClick:u(()=>p(this,bi).menuOnRightClick(),"menuOnRightClick"),menuOpen:u(()=>p(this,bi).menuOpen(),"menuOpen"),hover:u(i=>A(this,P,KA).call(this,i),"hover")})),window.addEventListener("resize",p(this,Uc)),document.addEventListener("keydown",p(this,Xh),!0),e.mapCanvas.addEventListener("pointerdown",p(this,Wh),!0),typeof ResizeObserver<"u"&&e.mapCanvas.parentElement&&(k(this,Fc,new ResizeObserver(p(this,Uc))),p(this,Fc).observe(e.mapCanvas.parentElement)),A(this,P,Av).call(this),A(this,P,Kt).call(this),k(this,jh,e.unitSize?.onChange(()=>{let i=Iy*(e.unitSize?.get()??1);i!==p(this,Ao)&&!p(this,qr)&&(k(this,Ao,i),A(this,P,Da).call(this),A(this,P,Kt).call(this))})??(()=>{})),k(this,ed,e.artChanged?.(()=>{p(this,qr)||(k(this,Wr,!0),A(this,P,_v).call(this))})??(()=>{})),k(this,Kh,p(this,ki)?.restyled(()=>{p(this,qr)||A(this,P,_v).call(this)})??(()=>{})),e.models?.forEach(({url:i},s)=>A(this,P,CA).call(this,i,s))}land(){return p(this,Ge)}orbit(){return p(this,ht)}moving(){return p(this,Dt)!==null||p(this,bc).moving()}setOrbit(e){p(this,_i).call(this),k(this,Dt,null),k(this,ht,A(this,P,Dr).call(this,e)),A(this,P,Kt).call(this)}activeUnit(){return{unit:p(this,lr),pendingTile:p(this,Zh)}}centre(e){this.portal.setCenter(e.x,e.y)}turnBy(e){let t=p(this,Dt)?.to??p(this,ht);A(this,P,Oh).call(this,{...t,yaw:t.yaw+e*Uy},A(this,P,sv).call(this)+e*Uy)}heading(){return{turn:(p(this,Dt)?.to??p(this,ht)).yaw,directions:Wv(p(this,Ge).layout,this.world.topology())}}faceNorth(){A(this,P,Oh).call(this,{...p(this,Dt)?.to??p(this,ht),yaw:0},AA(-p(this,ht).yaw))}debugViewModes(){return[]}dispose(){A(this,P,wv).call(this,!0),k(this,qr,!0),p(this,bn).endAll(0),p(this,Zt).endAll(0),p(this,xi).endAll(),p(this,Ur).clear(),p(this,ws).clear(),p(this,Mo).clear(),k(this,So,null),p(this,Or).clear(),p(this,Ss).clear(),p(this,yi).clear(),p(this,Ba).clear(),p(this,Sc).clear(),p(this,ka).clear(),p(this,Br).clear(),p(this,Fi).clear(),p(this,Qn).clear(),p(this,Ms).clear(),p(this,Ui).clear(),document.removeEventListener("keydown",p(this,Xh),!0),p(this,Bt).removeEventListener("pointerdown",p(this,Wh),!0),p(this,jh).call(this),p(this,ed).call(this),p(this,Kh).call(this),p(this,Hr)?.remove(),p(this,ar).clear(),p(this,wo).clear(),p(this,_i).call(this),p(this,bc).dispose(),p(this,wc)?.dispose(),window.removeEventListener("resize",p(this,Uc)),p(this,Fc)?.disconnect(),p(this,Rs)!==null&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(p(this,Rs)),k(this,Rs,null),p(this,Oa)?.remove(),p(this,et).dispose();let e=window;e.civMap3DView===this&&delete e.civMap3DView}endPicking(){let e=p(this,Gr);e!==null&&(k(this,Gr,null),p(this,Bt).classList.remove("picking-tile"),e.window?.close())}flush(){A(this,P,yv).call(this),A(this,P,Kt).call(this)}mapEvent(e){if(e.kind==="moved"){A(this,P,IA).call(this,e.unit,e.from,e.to),A(this,P,Tm).call(this,e.unit.id,e.from,e.to);return}A(this,P,Tm).call(this,e.attacker.id,e.attacker.tile,e.defender.tile),A(this,P,Tm).call(this,e.defender.id,e.defender.tile,e.attacker.tile),A(this,P,PA).call(this,e)}measureCovered(){let e=p(this,Bt).getBoundingClientRect();k(this,Bh,p(this,Fh).map(t=>{let n=t.getBoundingClientRect(),i=t.parentElement?.getBoundingClientRect()??n;return{left:Math.max(n.left,i.left,e.left)-e.left,top:Math.max(n.top,i.top,e.top)-e.top,right:Math.min(n.right,i.right,e.right)-e.left,bottom:Math.min(n.bottom,i.bottom,e.bottom)-e.top}}).filter(({left:t,top:n,right:i,bottom:s})=>i>t&&s>n))}pickTile(e,t,n){this.endPicking();let i={accept:e,onPick:t,window:null};k(this,Gr,i),p(this,Bt).classList.add("picking-tile"),i.window=p(this,bi).prompt(n,()=>{p(this,Gr)===i&&(k(this,Gr,null),p(this,Bt).classList.remove("picking-tile"))})}picking(){return p(this,Gr)!==null}queueTile(e){let t=`${e.x},${e.y}`;p(this,Va).set(t,e),p(this,vc).set(t,++Gi(this,_o)._)}redrawArt(){let e=p(this,Xr).id();return e===p(this,Oc)?"unchanged":(k(this,Oc,e),k(this,Wr,!0),"redrawn")}releaseTiles(){let e=p(this,Hh)&&A(this,P,wm).call(this);e&&p(this,Va).size>0&&p(this,So)===null&&k(this,So,new Set([...p(this,Ss).keys(),...p(this,Oi).keys()])),p(this,Va).forEach((t,n)=>{let i=p(this,vc).get(n)??0;e&&!p(this,Mo).has(n)&&p(this,Mo).set(n,p(this,Or).get(n)??{units:[],shown:null,ringed:!1,inCity:!1}),p(this,Eo).set(n,t),p(this,Mc).set(n,i),p(this,yi).forEach(s=>{s.square===n&&i>s.after&&(s.patched=!0)})}),p(this,Va).clear(),p(this,vc).clear(),p(this,Eo).size>0&&A(this,P,Kt).call(this)}setActiveUnit(e,t){let n=p(this,lr)?.tile;if(k(this,lr,e),k(this,Zh,t??null),A(this,P,Na).call(this)&&A(this,P,WA).call(this)&&A(this,P,Am).call(this),A(this,P,Na).call(this)){A(this,P,Kt).call(this);return}k(this,zr,null);let i=p(this,kr);k(this,Bi,e?.id??null),k(this,kr,e?.tile??null),[n,i,e?.tile].forEach(s=>{s&&A(this,P,or).call(this,s.x,s.y)}),A(this,P,Kt).call(this)}setWaiting(e){k(this,Dc,e),e&&p(this,_i).call(this)}showActiveUnit(e){p(this,vi)||(k(this,vi,!0),p(this,Ge).showTowns(!0,...A(this,P,bo).call(this)),A(this,P,Da).call(this),A(this,P,Kt).call(this))}shown(){return{units:p(this,vi),yields:p(this,To),waiting:p(this,Dc)}}tilesPending(){return p(this,Eo).size}toggleUnits(){k(this,vi,!p(this,vi)),p(this,Ge).showTowns(p(this,vi),...A(this,P,bo).call(this)),A(this,P,Da).call(this),k(this,Es,!0),A(this,P,Kt).call(this)}toggleYields(){k(this,To,!p(this,To)),k(this,Wr,!0),k(this,Es,!0),A(this,P,Kt).call(this)}zoomBy(e){p(this,_i).call(this),k(this,ht,A(this,P,Dr).call(this,$l(p(this,ht),e))),p(this,Dt)!==null&&(p(this,Dt).from=A(this,P,Dr).call(this,$l(p(this,Dt).from,e)),p(this,Dt).to=A(this,P,Dr).call(this,$l(p(this,Dt).to,e))),A(this,P,Kt).call(this)}};Bt=new WeakMap,Fh=new WeakMap,Bh=new WeakMap,Ge=new WeakMap,et=new WeakMap,Oa=new WeakMap,gc=new WeakMap,kh=new WeakMap,ht=new WeakMap,Dt=new WeakMap,Hn=new WeakMap,bc=new WeakMap,zh=new WeakMap,Ua=new WeakMap,xo=new WeakMap,xc=new WeakMap,Gh=new WeakMap,Vh=new WeakMap,bi=new WeakMap,yc=new WeakMap,Di=new WeakMap,bn=new WeakMap,Oi=new WeakMap,Fa=new WeakMap,yo=new WeakMap,_c=new WeakMap,Qn=new WeakMap,Ms=new WeakMap,Ui=new WeakMap,_o=new WeakMap,vc=new WeakMap,Mc=new WeakMap,Zt=new WeakMap,xi=new WeakMap,vo=new WeakMap,Or=new WeakMap,Ss=new WeakMap,Ur=new WeakMap,ws=new WeakMap,Hh=new WeakMap,Mo=new WeakMap,So=new WeakMap,yi=new WeakMap,Ba=new WeakMap,Sc=new WeakMap,Fr=new WeakMap,ka=new WeakMap,Br=new WeakMap,Fi=new WeakMap,ei=new WeakMap,Bi=new WeakMap,kr=new WeakMap,zr=new WeakMap,Wh=new WeakMap,Xh=new WeakMap,qh=new WeakMap,Gr=new WeakMap,Vr=new WeakMap,Es=new WeakMap,As=new WeakMap,_i=new WeakMap,wc=new WeakMap,Ec=new WeakMap,Ts=new WeakMap,ki=new WeakMap,ar=new WeakMap,Ac=new WeakMap,Yh=new WeakMap,Tc=new WeakMap,wo=new WeakMap,$h=new WeakMap,za=new WeakMap,Hr=new WeakMap,Kh=new WeakMap,Rs=new WeakMap,Rc=new WeakMap,Cc=new WeakMap,Ga=new WeakMap,Pc=new WeakMap,Va=new WeakMap,Eo=new WeakMap,Ha=new WeakMap,Ic=new WeakMap,lr=new WeakMap,Zh=new WeakMap,vi=new WeakMap,Ao=new WeakMap,Lc=new WeakMap,Jh=new WeakMap,Nc=new WeakMap,jh=new WeakMap,To=new WeakMap,Wr=new WeakMap,Wa=new WeakMap,Xa=new WeakMap,Qh=new WeakMap,ed=new WeakMap,Dc=new WeakMap,Xr=new WeakMap,Oc=new WeakMap,td=new WeakMap,Uc=new WeakMap,Fc=new WeakMap,qr=new WeakMap,P=new WeakSet,CA=u(function(e,t){p(this,et).loadModels?.(e,(n,i)=>{if(p(this,qr))return;let s=i.filter(o=>(p(this,Lc).get(o)?.rank??1/0)>=t);s.length!==0&&(s.forEach(o=>p(this,Lc).set(o,{id:n,rank:t})),k(this,Nc,!0),A(this,P,Kt).call(this))}).catch(n=>console.warn("The 3D map's models couldn't be loaded:",n))},"#loadModels"),sv=u(function(){let e=p(this,Dt);return e===null?0:e.turn*(1-e.drawn)},"#turnLeft"),PA=u(function({attacker:e,defender:t,winner:n}){let i=p(this,ei)?.speed()??"normal",s=performance.now();if(typeof requestAnimationFrame!="function"||Ci()||i==="off"||e.player!==p(this,As)&&t.player!==p(this,As)&&!(p(this,ei)?.rivals()??!0)||!A(this,P,go).call(this,e.tile.x,e.tile.y,-.5)&&!A(this,P,go).call(this,t.tile.x,t.tile.y,-.5))return;let o=this.world.get(e.tile.x,e.tile.y).units.find(({id:$})=>$===e.id),a=`${t.tile.x},${t.tile.y}`,l=this.world.get(t.tile.x,t.tile.y),c=[...p(this,yi).values()].filter(({square:$,patched:F})=>$===a&&!F).at(-1),h=c===void 0?l.units.filter(({id:$})=>!p(this,Fi).has($)).map(TA):c.units.filter(({id:$})=>!(c.won&&$===c.defender));if(p(this,Fi).has(e.id)||!h.some(({id:$})=>$===t.id))return;let d=u($=>{let F=$===void 0?null:A(this,P,Nh).call(this,[$]);return F===null?null:p(this,et).rigFacts?.(F)??null},"facts"),f=d(o??p(this,Oi).get(e.id)),m=uA(lA,f,n==="attacker"?d(h.find(({id:$})=>$===t.id)):f),g=i==="fast"?cA(m):m,_=p(this,Zt).busyUntil([e.id,t.id]),b=Math.max(j_(g),p(this,Zt).longest([e.id,t.id]));_!==null&&_-s>Math.max(iO,2*b)&&A(this,P,Sm).call(this,p(this,Zt).endWhere($=>($.attacker===e.id||$.attacker===t.id)&&!p(this,Zt).released($.id),s)),A(this,P,ov).call(this,e.id);let[x,v]=p(this,Ge).layout.centre(e.tile.x,e.tile.y),[S,M]=p(this,Ge).layout.centre(t.tile.x,t.tile.y),{u:R,v:E}=p(this,Ge).layout.period(),y=u(($,F)=>F===null?$:$-F*Math.round($/F),"short"),w=y(S-x,R),L=y(M-v,E),I=`${e.tile.x},${e.tile.y}`,O=p(this,Zt).add({attacker:e.id,defender:t.id,attackerSquare:e.tile,defenderSquare:t.tile,won:n==="attacker",from:A(this,P,pc).call(this,e.tile),edge:[x+w*Q_,v+L*Q_],fallsAt:A(this,P,pc).call(this,t.tile),facing:p(this,Di).get(e.id)??Math.atan2(w,L),defenderFacing:p(this,Di).get(t.id)??Math.atan2(-w,-L)},s,g,p(this,bn).endsAt(e.id)??s),B=f?.clips.fight?.shots??[];g.clips?.fight&&f!==null&&B.length>0&&p(this,ka).set(O.id,{times:V1(G1(B,f.figures,f.stagger),n!=="attacker"&&g.clips.die?g.reach/1e3*g.clips.rate:null),left:new Set,target:A(this,P,Lh).call(this,O.fallsAt.at,O.fallsAt.lift+Ky),figures:f.figures,rate:g.clips.rate}),p(this,yi).set(O.id,{square:a,city:c?.city??sO(l.city),units:h,after:p(this,_o),won:n==="attacker",defender:t.id,patched:!1}),o!==void 0&&p(this,Oi).set(e.id,o),[e.id,t.id].forEach($=>p(this,Ui).set($,{squares:[I,a],after:p(this,_o)})),A(this,P,or).call(this,e.tile.x,e.tile.y),A(this,P,or).call(this,t.tile.x,t.tile.y),A(this,P,Kt).call(this)},"#fight"),IA=u(function(e,t,n){let i=p(this,ei)?.speed()??"normal";if(e.id===p(this,Bi)&&k(this,kr,n),typeof requestAnimationFrame!="function"||Ci()||i==="off")return;if(e.player!==p(this,As)&&p(this,Zt).attacking(e.id)){p(this,Ui).set(e.id,{squares:[`${t.x},${t.y}`,`${n.x},${n.y}`],after:p(this,_o)});return}A(this,P,hv).call(this,p(this,Zt).moveOn(e.id,performance.now()));let s=p(this,bn).walking(e.id),o=this.world.get(t.x,t.y).units.find(({id:d})=>d===e.id)??(A(this,P,po).call(this,e.id)?p(this,Oi).get(e.id):void 0),a=e.player===p(this,As);if(o===void 0||!a&&!s&&(!(p(this,ei)?.rivals()??!0)||!A(this,P,go).call(this,t.x,t.y,-.5)&&!A(this,P,go).call(this,n.x,n.y,-.5)))return;let l=a?jE:QE;p(this,Oi).set(e.id,o),p(this,Ui).set(e.id,{squares:[`${t.x},${t.y}`,`${n.x},${n.y}`],after:p(this,_o)}),A(this,P,ov).call(this,e.id);let c=Hl(Vl(o._,o.__??[])),h=c?void 0:p(this,Ge).roadPath(t.x,t.y,n.x,n.y)?.slice(1,-1);p(this,bn).step(e.id,t,n,A(this,P,pc).call(this,t),{...A(this,P,pc).call(this,n),...h===void 0?{}:{via:h}},performance.now(),i==="fast"?eA(l):l,c),A(this,P,Kt).call(this)},"#walk"),pc=u(function({x:e,y:t},n=!!this.world.get(e,t).city){let[i,s]=p(this,Ge).layout.centre(e,t),o=Math.max(0,p(this,Ge).surfaceAt(i,s)),a=[i,s+(n?ga:0)];return{at:a,lift:o-Math.max(0,p(this,Ge).surfaceAt(...a)),middle:[i,s]}},"#standing"),ov=u(function(e){p(this,Ms).delete(e)&&p(this,Qn).forEach((t,n)=>{let i=t.units.filter(s=>s!==e);if(i.length!==t.units.length){if(i.length===0){p(this,Qn).delete(n),A(this,P,mo).call(this,n);return}p(this,Qn).set(n,{...t,units:i})}})},"#stepsOn"),po=u(function(e){return p(this,bn).walking(e)||p(this,Ms).has(e)||p(this,Zt).attacking(e)||p(this,Fi).has(e)},"#leftOff"),LA=u(function(e){if(p(this,bn).dropped().forEach(i=>A(this,P,mo).call(this,i)),p(this,Qn).forEach(i=>A(this,P,mc).call(this,i)),p(this,bn).size()===0)return;if(Ci()||(p(this,ei)?.speed()??"normal")==="off"){A(this,P,Dh).call(this,p(this,bn).endAll(e));return}let{going:t,ended:n}=p(this,bn).at(e);A(this,P,Dh).call(this,n),t.forEach(i=>{A(this,P,mc).call(this,i,!0)!==null&&i.units.some(o=>{let a=p(this,Oi).get(o);return a!==void 0&&Vl(a._,a.__??[]).shape==="ship"})&&p(this,vo).trail(i.id,i.at,e)})},"#placeWalkers"),NA=u(function(e){if(p(this,vo).size()===0)return;if(Ci()||(p(this,ei)?.speed()??"normal")==="off"){p(this,vo).endAll().forEach(i=>p(this,et).wake(i,null));return}let{going:t,gone:n}=p(this,vo).at(e);n.forEach(i=>p(this,et).wake(i,null)),t.forEach(({id:i,points:s})=>{let[o]=s;if(o===void 0){p(this,et).wake(i,null);return}let[a,l]=A(this,P,av).call(this,o.at);p(this,et).wake(i,[a,0,l],oA(s))})},"#placeWakes"),mc=u(function(e,t=!1){let n=A(this,P,lv).call(this,e.units),i=null;if(t){let s=p(this,_c).get(e.id),o=(s?.by??0)+(s===void 0?0:Math.hypot(e.at[0]-s.at[0],e.at[1]-s.at[1]));p(this,_c).set(e.id,{at:[e.at[0],e.at[1]],by:o}),i={role:"move",seconds:o/I1}}return A(this,P,_m).call(this,e,n,1,i),n},"#drawWalker"),_m=u(function({id:e,at:t,lift:n,facing:i,aloft:s=0},o,a=1,l=null){let c=o===null?null:JSON.stringify(o);c!==(p(this,yo).get(e)??null)&&(p(this,et).setWalker(e,o),c===null?p(this,yo).delete(e):p(this,yo).set(e,c)),o!==null&&(p(this,et).placeWalker(e,A(this,P,Lh).call(this,t,n),i,s),p(this,et).fadeWalker(e,a),p(this,et).poseWalker?.(e,l?.role??null,l?.seconds??0,l?.before))},"#drawFigure"),av=u(function(e){let{u:t,v:n}=p(this,Ge).layout.period(),i=u((s,o)=>o===null?s:(s%o+o)%o,"within");return[i(e[0],t),i(e[1],n)]},"#wrapped"),Lh=u(function(e,t){let[n,i]=A(this,P,av).call(this,e);return[n,Math.max(0,p(this,Ge).surfaceAt(n,i))+t,i]},"#onLand"),mo=u(function(e){p(this,_c).delete(e),p(this,yo).delete(e)&&p(this,et).setWalker(e,null)},"#takeAway"),lv=u(function(e){let t=e.flatMap(n=>{let i=p(this,Oi).get(n);return i===void 0?[]:[i]});return A(this,P,Nh).call(this,t)},"#walkerMarker"),Nh=u(function(e,t=p(this,Bi)){return I_({city:null,units:e},t,p(this,vi),p(this,yc),()=>0,p(this,Ao),p(this,Jh))},"#unitsMarker"),cv=u(function({units:e}){return e.some(t=>p(this,Ui).has(t))},"#awaitsPatch"),Dh=u(function(e){let t=new Set;e.forEach(n=>{let i={...n,units:n.units.filter(s=>!p(this,Zt).attacking(s))};if(i.units.length>0&&A(this,P,cv).call(this,i)){p(this,Qn).set(i.id,i),i.units.forEach(s=>p(this,Ms).add(s)),A(this,P,mc).call(this,i);return}A(this,P,mo).call(this,n.id),n.units.forEach(s=>p(this,Ms).delete(s)),A(this,P,uv).call(this,n.units,t)}),A(this,P,vm).call(this,t)},"#walksEnded"),uv=u(function(e,t){e.forEach(n=>{A(this,P,po).call(this,n)&&!p(this,Fi).has(n)||(p(this,Fa).get(n)?.forEach(i=>t.add(i)),p(this,Fa).delete(n),p(this,Oi).delete(n))})},"#release"),vm=u(function(e){let t=p(this,Bi);t!==null&&t!==(p(this,lr)?.id??null)&&!p(this,bn).walking(t)&&!p(this,Zt).holds(t)&&A(this,P,HA).call(this,e),e.forEach(n=>{let[i,s]=n.split(",").map(Number);A(this,P,or).call(this,i,s)})},"#released"),DA=u(function(e){let t=new Set;if(p(this,Zt).size()===0){A(this,P,Mm).call(this,t);return}if(Ci()||(p(this,ei)?.speed()??"normal")==="off"){A(this,P,Sm).call(this,p(this,Zt).endAll(e)),A(this,P,Mm).call(this,t);return}let{going:n,struck:i,ended:s}=p(this,Zt).at(e);i.forEach(o=>A(this,P,dv).call(this,o,!0)),n.forEach(o=>{if(!o.fallen&&p(this,bn).walking(o.unit)){A(this,P,mo).call(this,o.id);return}A(this,P,VA).call(this,o)&&t.add(A(this,P,FA).call(this,o))}),A(this,P,OA).call(this,e,n,t),A(this,P,fv).call(this,s),A(this,P,Mm).call(this,t)},"#placeBattles"),OA=u(function(e,t,n){t.forEach(({id:i,battle:s,at:o,lift:a,fallen:l,fought:c})=>{let h=p(this,ka).get(s);h===void 0||l||c===void 0||h.times.forEach((d,f)=>{if(h.left.has(f)||c<d.leaves)return;let m=p(this,et).jointAt?.(i,d.figure,d.joint)??A(this,P,Lh).call(this,o,a+Ky),{u:g,v:_}=p(this,Ge).layout.period(),b=u((S,M,R)=>R===null?S:S+R*Math.round((M-S)/R),"near"),x=[b(h.target[0],m[0],g),h.target[1],b(h.target[2],m[2],_)],v=e-(c-d.leaves)*1e3/h.rate;h.left.add(f),p(this,Br).set(`${s}-shot-${f}`,{battle:s,kind:d.kind,from:m,to:H1(m,x,d.figure,h.figures),leaves:v,lands:v+va[d.kind].flight/h.rate,rate:h.rate})})}),p(this,Br).forEach(({battle:i,kind:s,from:o,to:a,leaves:l,lands:c,rate:h},d)=>{let f=va[s],m=`${d}-muzzle`,g=`${d}-hit`;if(!p(this,yo).has(i)&&!(p(this,Zt).released(i)&&p(this,vi))){p(this,et).shot?.(d,null),p(this,Br).delete(d);return}let _=f.muzzle>0&&(e-l)*h/k1,b=e<c?!1:(e-c)*h/Zy;if(_!==!1&&_<1&&(p(this,Fr).add(m),p(this,et).puff(m,o,_,f.muzzle,0),n.add(m)),b===!1){let x=(e-l)/(c-l);p(this,et).shot?.(d,W1(o,a,x,f.arc),x,s,X1(o,a,x,f.arc));return}p(this,et).shot?.(d,null),b<1&&(p(this,Fr).add(g),p(this,et).puff(g,a,b,f.hit,f.burst?qy:null),n.add(g)),b>=1&&(_===!1||_>=1)&&p(this,Br).delete(d)})},"#placeShots"),UA=u(function(e){p(this,ka).delete(e),p(this,Br).forEach((t,n)=>{t.battle===e&&(p(this,et).shot?.(n,null),p(this,et).puff(`${n}-hit`,null),p(this,Fr).delete(`${n}-hit`),p(this,et).puff(`${n}-muzzle`,null),p(this,Fr).delete(`${n}-muzzle`),p(this,Br).delete(n))})},"#shotsOver"),FA=u(function({battle:e,at:t,lift:n,opacity:i}){let s=`${e}-puff`;return p(this,Fr).add(s),p(this,et).puff(s,A(this,P,Lh).call(this,t,n),1-i),s},"#puff"),Mm=u(function(e){p(this,Fr).forEach(t=>{e.has(t)||(p(this,Fr).delete(t),p(this,et).puff(t,null))})},"#puffsOver"),Sm=u(function({struck:e,ended:t}){e.forEach(n=>A(this,P,dv).call(this,n,!t.includes(n))),A(this,P,fv).call(this,t)},"#battlesOver"),hv=u(function({struck:e,ended:t,released:n}){let i=new Set;A(this,P,Sm).call(this,{struck:e,ended:t}),n.forEach(s=>{s.won&&(p(this,Sc).add(s.id),A(this,P,pv).call(this,s,i))}),A(this,P,vm).call(this,i)},"#movedOn"),dv=u(function(e,t){let{square:n,units:i}=p(this,yi).get(e.id)??{square:"",units:[]},{x:s,y:o}=e.defenderSquare,a=[...p(this,yi).entries()].find(([d,f])=>d!==e.id&&f.square===n)?.[1],l=new Set((a?.units??this.world.get(s,o).units).map(({id:d})=>d)),c=e.won?e.defender:e.attacker,h=i.filter(({id:d})=>e.won&&d===e.defender||!l.has(d)&&!A(this,P,po).call(this,d));p(this,yi).delete(e.id),p(this,Ge).changed([[s,o]],...A(this,P,bo).call(this)),p(this,Ui).has(c)&&p(this,Fi).add(c),t&&e.won&&h.length>0&&p(this,Ba).set(e.id,h),A(this,P,or).call(this,s,o)},"#blow"),BA=u(function(e,t,{shown:n,ringed:i,inCity:s}){if((p(this,Or).get(e)?.units??[]).forEach(({id:o})=>{p(this,Ss).get(o)===e&&p(this,Ss).delete(o)}),t.length===0?p(this,Or).delete(e):p(this,Or).set(e,{units:t.map(TA),shown:n,ringed:i,inCity:s}),t.forEach(({id:o})=>p(this,Ss).set(o,e)),p(this,Ur).size>0){let o=[...p(this,Ur).entries()].filter(([,a])=>a.units.some(l=>t.some(({id:c})=>c===l.id))).map(([a])=>a);o.forEach(a=>p(this,xi).end(a)),A(this,P,Em).call(this,o)}},"#drawnOn"),wm=u(function(){return typeof requestAnimationFrame=="function"&&!Ci()&&(p(this,ei)?.speed()??"normal")!=="off"},"#fadesShown"),kA=u(function(e){return p(this,Ss).has(e)||A(this,P,po).call(this,e)},"#drawnAnywhere"),zA=u(function(e,t){let n=[],i=[];if(e.forEach((l,c)=>{let h=l.units.filter(({id:f})=>!A(this,P,kA).call(this,f)),d=p(this,Or).get(c)?.shown??null;l.shown!==null&&h.some(({id:f})=>f===l.shown)&&n.push([c,l,h]),l.units.length===0&&d!==null&&!t.has(d)&&i.push([c,d])}),n.length+i.length===0||n.length+i.length>rO)return;let s=u(([l])=>{let[c,h]=l.split(",").map(Number);return A(this,P,go).call(this,c,h,0)},"onScreen"),o=performance.now(),a=(p(this,ei)?.speed()??"normal")==="fast"?500/2:500;n.filter(s).forEach(([l,c,h])=>{let[d,f]=l.split(",").map(Number);p(this,Ur).set(p(this,xi).add("out",o,a),{units:[...h.filter(({id:m})=>m===c.shown),...h.filter(({id:m})=>m!==c.shown)],shown:c.ringed?c.shown:null,at:A(this,P,pc).call(this,{x:d,y:f},c.inCity),facing:c.shown===null?0:p(this,Di).get(c.shown)??0})}),i.filter(s).forEach(([l,c])=>{p(this,ws).set(p(this,xi).add("in",o,a),{key:l,unit:c}),p(this,et).fadeMarker(l,0)}),A(this,P,Kt).call(this)},"#fadeChanged"),GA=u(function(e){if(p(this,xi).size()===0)return;if(!A(this,P,wm).call(this)){A(this,P,Em).call(this,p(this,xi).endAll());return}let{going:t,ended:n}=p(this,xi).at(e),i=[];t.forEach(({id:s,opacity:o})=>{let a=p(this,Ur).get(s),l=p(this,ws).get(s);if(a!==void 0){let c=A(this,P,Nh).call(this,a.units,a.shown);if(c===null){p(this,xi).end(s),i.push(s);return}A(this,P,_m).call(this,{id:s,at:[a.at.at[0],a.at.at[1]],lift:a.at.lift,facing:a.facing},c,o);return}if(l!==void 0){if((p(this,Or).get(l.key)?.shown??null)!==l.unit){p(this,xi).end(s),i.push(s);return}p(this,et).fadeMarker(l.key,o)}}),A(this,P,Em).call(this,[...n,...i])},"#placeFades"),Em=u(function(e){e.forEach(t=>{let n=p(this,ws).get(t);p(this,Ur).delete(t)&&A(this,P,mo).call(this,t),n!==void 0&&(p(this,ws).delete(t),[...p(this,ws).values()].some(({key:i})=>i===n.key)||p(this,et).fadeMarker(n.key,1))})},"#fadesOver"),VA=u(function(e){let t=p(this,Ba).get(e.battle);if(e.fallen&&t===void 0)return!1;let n=e.fallen?A(this,P,Nh).call(this,t):A(this,P,lv).call(this,[e.unit]);return A(this,P,_m).call(this,e,n,e.opacity,e.clip??null),n!==null&&(e.fallen||e.opacity<1)},"#drawFighter"),fv=u(function(e){if(e.length===0)return;let t=new Set;e.forEach(n=>{let{id:i}=n;A(this,P,UA).call(this,i),A(this,P,mo).call(this,`${i}-fallen`),p(this,Ba).delete(i),p(this,yi).delete(i)&&p(this,Ge).changed([[n.defenderSquare.x,n.defenderSquare.y]],...A(this,P,bo).call(this)),p(this,Sc).delete(i)||A(this,P,pv).call(this,n,t)}),A(this,P,vm).call(this,t)},"#battlesEnded"),pv=u(function(e,t){let{id:n,attacker:i,won:s,from:o,attackerSquare:a,facing:l}=e;if(p(this,Ui).has(i)&&!A(this,P,po).call(this,i))if(!s)p(this,Fi).add(i);else{let c={id:n,units:[i],at:[o.at[0],o.at[1]],lift:o.lift,aloft:0,facing:l,from:a,before:a,to:a};p(this,Qn).set(n,c),p(this,Ms).add(i),A(this,P,mc).call(this,c);return}A(this,P,mo).call(this,n),A(this,P,uv).call(this,[i],t)},"#attackerDone"),HA=u(function(e){let t=p(this,lr);[p(this,kr),t?.tile].forEach(i=>{i&&e.add(`${i.x},${i.y}`)}),k(this,Bi,t?.id??null),k(this,kr,t?.tile??null),p(this,Qn).forEach(i=>A(this,P,mc).call(this,i));let n=p(this,zr);n!==null&&(k(this,zr,null),A(this,P,xv).call(this,n.x,n.y))},"#caughtUp"),Na=u(function(){let e=p(this,Bi);return e!==null&&e!==(p(this,lr)?.id??null)&&(p(this,bn).walking(e)||p(this,Zt).holds(e))},"#holding"),Am=u(function(){let e=p(this,Bi);e===null||!A(this,P,Na).call(this)||(A(this,P,Dh).call(this,p(this,bn).endWhere(t=>t.includes(e),performance.now())),A(this,P,hv).call(this,p(this,Zt).moveOn(e,performance.now(),!0)),A(this,P,Kt).call(this))},"#hurry"),WA=u(function(){let e=p(this,kr),t=e===null?void 0:this.world.get(e.x,e.y).units.find(({id:n})=>n===p(this,Bi));return t!==void 0&&t.active!==!1&&(t.moves?.value??0)>0},"#ringedOffered"),XA=u(function(e,t){if(A(this,P,Na).call(this)){k(this,zr,{x:e,y:t});return}A(this,P,xv).call(this,e,t)},"#centreSoon"),qA=u(function(e){if(p(this,Ui).forEach(({squares:n,after:i},s)=>{n.some(o=>(e.get(o)??0)>i)&&(p(this,Ui).delete(s),p(this,Fi).delete(s))}),p(this,Qn).size===0)return;let t=[...p(this,Qn).values()].filter(n=>!A(this,P,cv).call(this,n));t.forEach(n=>p(this,Qn).delete(n.id)),A(this,P,Dh).call(this,t)},"#patched"),Tm=u(function(e,t,n){let[i,s]=p(this,Ge).layout.centre(t.x,t.y),[o,a]=p(this,Ge).layout.centre(n.x,n.y),{u:l,v:c}=p(this,Ge).layout.period(),h=u((m,g)=>g===null?m:m-g*Math.round(m/g),"short"),d=h(o-i,l),f=h(a-s,c);d===0&&f===0||(p(this,Di).delete(e),p(this,Di).set(e,Math.round(Math.atan2(d,f)*1e3)/1e3),p(this,Di).size>tO&&p(this,Di).delete(p(this,Di).keys().next().value),[t,n].forEach(({x:m,y:g})=>A(this,P,or).call(this,m,g)),A(this,P,Kt).call(this))},"#face"),go=u(function(e,t,n){let i=p(this,Bt).clientWidth,s=p(this,Bt).clientHeight;if(i<=0||s<=0)return!1;let o=p(this,zr),a=o===null?p(this,Dt)?.to??p(this,ht):{...p(this,Dt)?.to??p(this,ht),focus:p(this,Ge).layout.centre(o.x,o.y)},[l,c]=p(this,Ge).layout.centre(e,t),{u:h,v:d}=A(this,P,sr).call(this),[f,m]=a.focus,g=u((w,L,I)=>I===null?w:w+I*Math.round((L-w)/I),"nearest"),_=[g(l,f,h),Math.max(0,p(this,Ge).heightAt(l,c)),g(c,m,d)],b=i/s,x=p(this,Hn)??0,v=Zl(a,x,_,b),S=Zl(a,x,[_[0]+Math.cos(a.yaw),_[1],_[2]+Math.sin(a.yaw)],b);if(v===null||S===null)return!1;let M=(v[0]+1)/2*i,R=(1-v[1])/2*s,E=Math.abs(S[0]-v[0])*(i/2),y=(n+.5)*E;return M>=y&&M<=i-y&&R>=y&&R<=s-y&&!p(this,Bh).some(({left:w,top:L,right:I,bottom:O})=>M>=w-E/2&&M<=I+E/2&&R>=L-E/2&&R<=O+E/2)},"#visible"),Rm=u(function(e,t){let n=p(this,Bt).clientWidth,i=p(this,Bt).clientHeight;if(n<=0||i<=0)return null;let s=[e/n*2-1,1-t/i*2],o=p(this,et).unitAt?.(s)??null;if(o!==null){let[m,g]=o.split(",").map(Number);return this.world.get(m,g)}let a=pA(p(this,ht),p(this,Hn)??0,s,n/i,(m,g)=>p(this,Ge).heightAt(m,g));if(a===null)return null;let[l,c]=p(this,Ge).layout.tileAt(...a),h=this.world.width(),d=this.world.height();return!(A(this,P,sr).call(this).v!==null)&&(c<0||c>=d)?null:this.world.get((l%h+h)%h,(c%d+d)%d)},"#tileAt"),mv=u(function(e,t){for(let n=p(this,za).length-1;n>=0;n--){let{key:i,left:s,top:o,right:a,bottom:l}=p(this,za)[n];if(e>=s&&e<a&&t>=o&&t<l){let[c,h]=i.split(",").map(Number),d=this.world.get(c,h);if(d?.city)return{tile:d,box:{left:s,top:o,bottom:l}}}}return null},"#bannerAt"),YA=u(function(e,t){let n=A(this,P,Rm).call(this,e,t);n!==null&&this.portal.emit("tile-clicked",n.x,n.y);let i=p(this,Gr);if(i!==null){n!==null&&i.accept(n)&&(this.endPicking(),i.onPick(n));return}let s=A(this,P,mv).call(this,e,t)?.tile.city??null;(n!==null||s!==null)&&p(this,bi).click(this.portal,n,s)},"#clicked"),$A=u(function(e,t,n,i,s){let o=p(this,lr),a=A(this,P,Rm).call(this,e,t);return o===null||a===null?!1:(this.endPicking(),p(this,bi).menu(this.portal,n,i,o,a,p(this,qh),s),!0)},"#menu"),gv=u(function(e,t){let n=A(this,P,mv).call(this,e,t);if(n!==null)return{key:`banner ${n.tile.x},${n.tile.y}`,...n};let i=A(this,P,Rm).call(this,e,t);return i===null?null:{key:`${i.x},${i.y}`,tile:i,box:null}},"#subjectAt"),KA=u(function(e){let t=e===null||p(this,Dc)||p(this,bi).menuOpen()?null:A(this,P,gv).call(this,e.x,e.y),n=p(this,Vr);if(t===null||e===null){p(this,_i).call(this);return}let{key:i,tile:{x:s,y:o}}=t;if(n!==null&&n.key===i){Object.assign(n,{canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY});return}p(this,_i).call(this);let a={key:i,x:s,y:o,canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY,timer:null,open:!1};a.timer=window.setTimeout(()=>{a.timer=null,A(this,P,bv).call(this,a)},lO),k(this,Vr,a),document.addEventListener("keydown",p(this,_i),!0)},"#hovered"),bv=u(function(e){let t=typeof document.elementFromPoint!="function"||document.elementFromPoint(e.clientX,e.clientY)===p(this,Bt),n=t?A(this,P,gv).call(this,e.canvasX,e.canvasY):null;if(n===null||n.key!==e.key){p(this,_i).call(this);return}let i=n.box===null?null:p(this,Bt).getBoundingClientRect(),s=p(this,bi).tooltip(p(this,Bt),n.tile,p(this,As),i===null||n.box===null?{left:e.clientX-10,top:e.clientY-10,bottom:e.clientY+10}:{left:i.left+n.box.left,top:i.top+n.box.top,bottom:i.top+n.box.bottom});!s&&e.open&&p(this,bi).endTooltip(p(this,Bt)),e.open=s},"#showHover"),bo=u(function(){return[...p(this,ht).focus]},"#focus"),ZA=u(function(){let[e,t]=p(this,Ge).layout.tileAt(...p(this,ht).focus),n=this.world.width(),i=this.world.height();return{x:(e%n+n)%n,y:A(this,P,sr).call(this).v===null?Math.min(i-1,Math.max(0,t)):(t%i+i)%i}},"#centreSquare"),xv=u(function(e,t){let[n,i]=p(this,Ge).layout.centre(e,t),[s,o]=(p(this,Dt)?.to??p(this,ht)).focus;if(n===s&&i===o)return;let a={...p(this,Dt)?.to??p(this,ht),focus:[n,i]},{u:l,v:c}=A(this,P,sr).call(this),h=u((g,_)=>_===null?g:g-_*Math.round(g/_),"short"),[d,f]=p(this,ht).focus,m=Math.hypot(h(n-d,l),h(i-f,c));if(!p(this,Vh)||m>p(this,ht).distance*1.5){k(this,Vh,!0),this.setOrbit(a);return}A(this,P,Oh).call(this,a)},"#centreOn"),Dr=u(function(e){let t=xa(e),n=A(this,P,sr).call(this);return y1({...t,pitch:Math.max(t.pitch,v1(t.distance,n))},n,p(this,Ge).extentV())},"#settle"),sr=u(function(){let e=p(this,Ge).layout.period();return this.portal?.lockVerticalEdges()??p(this,Gh)?{u:e.u,v:null}:e},"#period"),Oh=u(function(e,t=A(this,P,sv).call(this)+AA(e.yaw-(p(this,Dt)?.to??p(this,ht)).yaw)){p(this,_i).call(this),typeof requestAnimationFrame!="function"||Ci()?(k(this,Dt,null),k(this,ht,A(this,P,Dr).call(this,e))):k(this,Dt,{from:p(this,ht),to:e,started:null,turn:t,drawn:0}),A(this,P,Kt).call(this)},"#moveTo"),JA=u(function(e){let t=p(this,Dt);if(t===null)return!1;t.started??=e;let n=Math.min(1,(e-t.started)/nO);return t.drawn=n*n*(3-2*n),k(this,ht,A(this,P,Dr).call(this,_1(t.from,t.to,n,A(this,P,sr).call(this),t.turn))),n>=1&&k(this,Dt,null),n<1},"#moveCamera"),jA=u(function(e){let[t,n]=p(this,ht).focus,i=Math.max(0,p(this,Ge).heightAt(t,n));return!e||p(this,Hn)===null||Ci()?(k(this,Hn,i),!1):(k(this,Hn,p(this,Hn)+(i-p(this,Hn))*aO),Math.abs(i-p(this,Hn))<.002?(k(this,Hn,i),!1):!0)},"#followHeight"),yv=u(function(){let e=[...p(this,Eo).values()].map(({x:h,y:d})=>[h,d]),t=this.world.tiles(),n=t!==p(this,Ha)||t.length!==p(this,Ic);k(this,Ha,t),k(this,Ic,t.length),p(this,Eo).clear();let i=A(this,P,nT).call(this,p(this,Ge).changed(e,...A(this,P,bo).call(this),n)),s=new Set(e.map(([h,d])=>`${h},${d}`)),o=new Map([...s].map(h=>[h,p(this,Mc).get(h)??0]));p(this,Mc).clear();let a=p(this,Mo),l=p(this,So);k(this,Mo,new Map),k(this,So,null),p(this,Ur).forEach(({units:[h]})=>{h!==void 0&&l?.add(h.id)}),e.forEach(([h,d])=>A(this,P,or).call(this,h,d)),i.forEach(([h,d])=>{let f=`${h},${d}`;!n&&!s.has(f)&&p(this,Ts).has(f)&&A(this,P,or).call(this,h,d)}),A(this,P,tT).call(this,e,i),i.forEach(([h,d])=>p(this,wo).delete(`${h},${d}`));let c=p(this,Vr);c!==null&&c.open&&e.some(([h,d])=>h===c.x&&d===c.y)&&k(this,Es,!0),(e.length>0||n)&&k(this,Ec,!0),n&&(k(this,Wr,!0),p(this,Ts).forEach((h,d)=>{let[f,m]=d.split(",").map(Number);A(this,P,or).call(this,f,m)})),l!==null&&A(this,P,wm).call(this)&&!(n&&s.size*2>=t.length)&&A(this,P,zA).call(this,a,l),e.length>0&&A(this,P,qA).call(this,o)},"#takeTiles"),or=u(function(e,t){let n=`${e},${t}`,i=this.world.get(e,t),s=p(this,Zt).awaitingBlow({x:e,y:t}),o=s===null?void 0:p(this,yi).get(s.id),a=o===void 0?i.units:[...o.units,...i.units.filter(({id:v})=>!o.units.some(S=>S.id===v))];i.units.filter(({id:v})=>A(this,P,po).call(this,v)&&!p(this,Fi).has(v)).forEach(v=>{let S=p(this,Fa).get(v.id)??new Set;S.add(n),p(this,Fa).set(v.id,S),p(this,Oi).set(v.id,v)});let c=a.filter(({id:v})=>!A(this,P,po).call(this,v)),h=o===void 0?i.city:o.city,d=I_(o===void 0&&c.length===i.units.length?i:{city:h,units:c},p(this,Bi),p(this,vi),p(this,yc),v=>p(this,Di).get(v.id)??0,p(this,Ao),p(this,Jh)),f=d?.city&&A(this,P,QA).call(this,n,i,h)!==null?{...d,city:{...d.city,unnamed:!0}}:d;h||(p(this,ar).delete(n),p(this,wo).delete(n)),A(this,P,BA).call(this,n,c,{shown:f?.unit?.id??null,ringed:f?.unit?.active===!0,inCity:(f?.unit??null)!==null&&f?.inCity===!0});let[m,g]=p(this,Ge).layout.centre(e,t),_=[m,Math.max(0,p(this,Ge).surfaceAt(m,g)),g],b=f===null?null:JSON.stringify([f,_]);b!==(p(this,Ts).get(n)??null)&&(p(this,et).setMarker(n,_,f),A(this,P,rT).call(this,n,b),f?.unit?p(this,Pc).add(n):p(this,Pc).delete(n))},"#mark"),QA=u(function(e,t,n){if(p(this,ki)===null||!n)return null;let i=A(this,P,Cm).call(this),s={...t,city:n},o=p(this,ar).get(e),a="!",l=null;try{if(a=String(p(this,ki).key(s)),o?.signature===a)return o.banner;l=p(this,ki).paint(s,i)}catch(c){p(this,Yh)||(k(this,Yh,!0),console.error(c))}return p(this,ar).set(e,{signature:a,banner:l}),l},"#bannerOf"),Cm=u(function(){return(p(this,$h)??(window.devicePixelRatio||1))*(p(this,Xr).zoom()/p(this,Xr).scale())},"#bannerDensity"),eT=u(function(e){let t=p(this,wo).get(e);if(t===void 0){let[n,i]=e.split(",").map(Number),[s,o]=p(this,Ge).layout.centre(n,i),a=u((l,c)=>Math.max(0,p(this,Ge).surfaceAt(l,c)),"up");t={key:e,centre:[s,a(s,o),o],outline:p(this,Ge).layout.outline(n,i).map(([l,c])=>[l,a(l,c),c])},p(this,wo).set(e,t)}return t},"#bannerSiteOf"),Pm=u(function(){return`${p(this,Xr).id()} ${p(this,Xr).scale()} ${A(this,P,Cm).call(this)}`},"#bannersFor"),_v=u(function(){A(this,P,vv).call(this),A(this,P,Kt).call(this)},"#paintBannersAgain"),vv=u(function(){k(this,Tc,A(this,P,Pm).call(this)),p(this,ar).clear(),A(this,P,Da).call(this),k(this,Es,!0)},"#repaintBanners"),Mv=u(function(){let e=p(this,Hr);if(e===null||p(this,ki)===null)return;A(this,P,Pm).call(this)!==p(this,Tc)&&A(this,P,vv).call(this);let t=e.getContext("2d");if(k(this,za,[]),t===null||(p(this,Ac)&&(t.clearRect(0,0,e.width,e.height),k(this,Ac,!1)),!p(this,vi)||p(this,To)&&p(this,ki).giveWayToYields))return;let n=p(this,Bt).clientWidth,i=p(this,Bt).clientHeight,s=e.width/Math.max(1,n),o=[];if(n<=0||i<=0)return;let a=0;p(this,ar).forEach(({banner:c},h)=>{c!==null&&(a=Math.max(a,c.width/s),o.push(A(this,P,eT).call(this,h)))});let l=Math.round(p(this,Xr).scale()*A(this,P,Cm).call(this));SA(o,{orbit:p(this,ht),look:p(this,Hn)??0,width:n,height:i,period:A(this,P,sr).call(this),reach:a}).forEach(({key:c,x:h,y:d,clear:f})=>{let m=p(this,ar).get(c)?.banner;if(m){let g=Math.round(h*s-m.centre),_=Math.round(d*s)+l;t.globalAlpha=f,t.drawImage(m.image,g,_),k(this,Ac,!0),f>=cO&&p(this,za).push({key:c,left:g/s,top:_/s,right:(g+m.width)/s,bottom:(_+m.height)/s})}}),t.globalAlpha=1},"#drawBanners"),tT=u(function(e,t){e.length===0&&t.length===0||(e.forEach(([n,i])=>p(this,Xa).delete(`${n},${i}`)),t.forEach(([n,i])=>p(this,Xa).delete(`${n},${i}`)),k(this,Wr,!0))},"#yieldsChanged"),nT=u(function(e){let t=this.world.topology(),n=new Map;return e.forEach(([i,s])=>{n.set(`${i},${s}`,[i,s]),t.directions().forEach(o=>{let a=t.neighbour(i,s,o);a!==null&&n.set(`${a[0]},${a[1]}`,a)})}),[...n.values()]},"#besides"),iT=u(function(){if(!p(this,To)){p(this,Wa)&&(p(this,et).setYields(null),k(this,Wa,!1));return}if(!p(this,Wr)&&p(this,Wa))return;let e=[];this.world.tiles().forEach(t=>{let n=`${t.x},${t.y}`,i=xA(t,yA(t)),s=p(this,Xa).get(n);if(s===void 0||s.of!==i){let[o,a]=p(this,Ge).layout.centre(t.x,t.y);s={of:i,laid:i.length===0?null:vA({at:[o,Math.max(0,p(this,Ge).surfaceAt(o,a)),a],yields:i},p(this,Qh))},p(this,Xa).set(n,s)}s.laid!==null&&e.push(s.laid)}),p(this,et).setYields(MA(e)),k(this,Wr,!1),k(this,Wa,!0)},"#showYields"),rT=u(function(e,t){t===null?p(this,Ts).delete(e):p(this,Ts).set(e,t)},"#remember"),Da=u(function(){let e=new Set([...p(this,Ts).keys(),...p(this,ar).keys()]);this.world.tiles().forEach(({x:t,y:n})=>e.add(`${t},${n}`)),e.forEach(t=>{let[n,i]=t.split(",").map(Number);A(this,P,or).call(this,n,i)})},"#markAll"),Im=u(function(e,t=!1){let n=performance.now();if(t){let c=A(this,P,Sv).call(this,n,!1);p(this,et).render(),k(this,gc,performance.now()-n),A(this,P,Ev).call(this),c&&A(this,P,Uh).call(this);return}let i=A(this,P,JA).call(this,n),[s,o]=A(this,P,bo).call(this);p(this,Nc)&&(k(this,Nc,!1),A(this,P,Da).call(this)),A(this,P,yv).call(this),A(this,P,LA).call(this,n),A(this,P,NA).call(this,n),A(this,P,DA).call(this,n),A(this,P,GA).call(this,n),`${s},${o}`!==p(this,kh)&&(k(this,kh,`${s},${o}`),p(this,Ge).refocus(s,o)),p(this,Ge).build(p(this,et),e);let a=A(this,P,jA).call(this,e!==null);A(this,P,iT).call(this),p(this,et).view(p(this,ht),p(this,Hn)??0,A(this,P,sr).call(this));let l=A(this,P,Sv).call(this,n,!0);p(this,et).render(),A(this,P,Mv).call(this),p(this,Es)&&(k(this,Es,!1),p(this,Vr)?.open&&A(this,P,bv).call(this,p(this,Vr))),A(this,P,sT).call(this),A(this,P,wv).call(this),k(this,gc,performance.now()-n),k(this,Hh,!0),A(this,P,Ev).call(this),p(this,Ge).pending()>0||p(this,Ge).overlaysPending()>0||p(this,bn).size()>0||p(this,Zt).size()>0||p(this,xi).size()>0||p(this,vo).size()>0||i||a?A(this,P,Kt).call(this):l&&A(this,P,Uh).call(this)},"#frameDrawn"),Sv=u(function(e,t){if(p(this,et).idle===void 0)return!1;(t||!A(this,P,Lm).call(this))&&k(this,Ga,A(this,P,Lm).call(this)?h1(p(this,Pc),p(this,ht),(i,s)=>p(this,Ge).layout.centre(i,s),A(this,P,sr).call(this),p(this,Ga),(i,s,o)=>A(this,P,go).call(this,i,s,o)):new Set);let n=p(this,et).idle(p(this,Ga),e/1e3)&&A(this,P,Lm).call(this);return n||k(this,Ga,new Set),n},"#idle"),Lm=u(function(){return typeof requestAnimationFrame=="function"&&!Ci()&&(p(this,ei)?.speed()??"normal")!=="off"},"#mayIdle"),sT=u(function(){let e=p(this,wc);if(e===null)return;p(this,Ec)&&(k(this,Ec,!1),e.redraw());let t=A(this,P,Na).call(this)?p(this,kr):p(this,lr)?.tile??null;e.show(A(this,P,oT).call(this),t===null?null:{x:t.x,y:t.y})},"#showMinimap"),oT=u(function(){let e=p(this,Bt).clientWidth,t=p(this,Bt).clientHeight;if(e<=0||t<=0)return null;let n=e/t,i=p(this,Hn)??0,s=ms(p(this,ht).distance,A(this,P,sr).call(this)).far,[o,a]=p(this,ht).focus,l=u((h,d)=>{for(let f=d;f>=-1;f-=.05){let m=ba(p(this,ht),i,[h,f],n);if(m!==null){let g=Math.hypot(m[0]-o,m[1]-a),_=g>s?s/g:1;return[o+(m[0]-o)*_,a+(m[1]-a)*_]}}return null},"corner"),c=[l(-1,-1),l(1,-1),l(1,1),l(-1,1)];return c.every(h=>h!==null)?c:null},"#patch"),wv=u(function(e=!1){let t=(e?p(this,Dt)?.to??p(this,ht):p(this,ht)).distance,n=u(()=>{p(this,xo)!==null&&clearTimeout(p(this,xo)),k(this,xo,null),k(this,xc,null)},"stop"),i=u(()=>{n(),k(this,Ua,t),p(this,zh).set(t)},"keep");if(e){n(),t!==p(this,Ua)&&i();return}if(p(this,Dt)!==null||t===p(this,Ua)){n();return}p(this,xo)!==null&&t===p(this,xc)||(n(),k(this,xc,t),k(this,xo,setTimeout(i,oO)))},"#keepDistance"),Kt=u(function(){if(!p(this,qr)){if(typeof requestAnimationFrame!="function"){A(this,P,Im).call(this,null);return}k(this,Rc,!0),A(this,P,Uh).call(this)}},"#draw"),Uh=u(function(){p(this,qr)||p(this,Rs)!==null||k(this,Rs,requestAnimationFrame(e=>{let t=typeof e=="number"?e:performance.now();if(k(this,Rs,null),p(this,Rc)){k(this,Rc,!1),k(this,Cc,t),A(this,P,Im).call(this,EA);return}if(t-p(this,Cc)<c1){A(this,P,Uh).call(this);return}k(this,Cc,t),A(this,P,Im).call(this,EA,!0)}))},"#ask"),aT=u(function(e){let t=document.createElement("pre");return t.className="map3d-stats",t.setAttribute("aria-hidden","true"),Object.assign(t.style,{background:"var(--ui-overlay-bg, rgba(0, 0, 0, 0.6))",color:"var(--ui-overlay-fg, #fff)",font:"12px/1.4 monospace",left:"0.5rem",margin:"0",padding:"0.25rem 0.5rem",pointerEvents:"none",position:"absolute",bottom:"0.5rem"}),e.append(t),t},"#statsOverlay"),Ev=u(function(){if(p(this,Oa)===null)return;let{drawCalls:e,triangles:t,geometries:n}=p(this,et).stats();p(this,Oa).textContent=[`frame ${p(this,gc).toFixed(1)} ms`,`draw calls ${e}`,`triangles ${t.toLocaleString()}`,`geometries ${n}`,`chunks waiting ${p(this,Ge).pending()}`].join(`
`)},"#showStats"),Av=u(function(){let e=p(this,Bt).parentElement,t=e?.offsetWidth??0,n=e?.offsetHeight??0,i=window.devicePixelRatio||1,s=`${t}\xD7${n}@${i}`;t===0||n===0||s===p(this,td)||(k(this,td,s),p(this,et).resize(t,n,i),p(this,Hr)!==null&&(Object.assign(p(this,Hr).style,{height:`${n}px`,left:`${p(this,Bt).offsetLeft||0}px`,top:`${p(this,Bt).offsetTop||0}px`,width:`${t}px`}),p(this,Hr).width=Math.round(t*i),p(this,Hr).height=Math.round(n*i),k(this,$h,i)),this.measureCovered(),p(this,et).render(),A(this,P,Mv).call(this))},"#resize"),u(Tv,"MapView3D");var rv=Tv,lT=rv;var uO={createMapView3D:u(r=>new lT(r),"createMapView3D")};globalThis[zv]=uO;})();
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
