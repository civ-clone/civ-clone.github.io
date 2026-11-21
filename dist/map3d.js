"use strict";(()=>{var SM=Object.create;var _f=Object.defineProperty;var wM=Object.getOwnPropertyDescriptor;var EM=Object.getOwnPropertyNames;var AM=Object.getPrototypeOf,TM=Object.prototype.hasOwnProperty;var px=i=>{throw TypeError(i)};var l=(i,e)=>_f(i,"name",{value:e,configurable:!0});var CM=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var RM=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of EM(e))!TM.call(i,r)&&r!==t&&_f(i,r,{get:()=>e[r],enumerable:!(n=wM(e,r))||n.enumerable});return i};var PM=(i,e,t)=>(t=i!=null?SM(AM(i)):{},RM(e||!i||!i.__esModule?_f(t,"default",{value:i,enumerable:!0}):t,i));var yf=(i,e,t)=>e.has(i)||px("Cannot "+t);var d=(i,e,t)=>(yf(i,e,"read from private field"),t?t.call(i):e.get(i)),V=(i,e,t)=>e.has(i)?px("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t),z=(i,e,t,n)=>(yf(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t),C=(i,e,t)=>(yf(i,e,"access private method"),t);var _i=(i,e,t,n)=>({set _(r){z(i,e,r,t)},get _(){return d(i,e,n)}});var gx=CM(Fs=>{"use strict";var Bi,Wr=Fs&&Fs.__classPrivateFieldGet||function(i,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?i!==e||!n:!e.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(i):n?n.value:e.get(i)};Object.defineProperty(Fs,"__esModule",{value:!0}),Fs.EventEmitter=void 0;var bf=class bf{constructor(){Bi.set(this,{})}on(e,t){e in Wr(this,Bi,"f")||(Wr(this,Bi,"f")[e]=[]),Wr(this,Bi,"f")[e].push(t)}once(e,t){let n=l((...r)=>{t(...r),this.off(e,n)},"i");this.on(e,n)}off(e,t){if(!(e in Wr(this,Bi,"f")))return;let n=Wr(this,Bi,"f")[e].indexOf(t);n!==-1&&Wr(this,Bi,"f")[e].splice(n,1)}emit(e,...t){e in Wr(this,Bi,"f")&&Wr(this,Bi,"f")[e].forEach((n=>n(...t)))}};l(bf,"i");var iu=bf;Fs.EventEmitter=iu,Bi=new WeakMap,Fs.default=iu});var mx="civMap3D";var xx=PM(gx());var Xr,ki,Ra,Mf=class Mf extends xx.EventEmitter{constructor(t,n){super();V(this,Xr);V(this,ki);V(this,Ra);z(this,ki,t),z(this,Ra,t.lockVerticalEdges),z(this,Xr,n)}center(){return d(this,Xr).centre()}isVisible(t,n,r=0){return d(this,Xr).visible(t,n,r)}lockVerticalEdges(){return d(this,Ra)}nativeTileSize(){return d(this,ki).art.nativeTileSize()}openCity(t){let{cityOpener:n}=d(this,ki);return n.opens(t,this)?(n.open(t,this),!0):!1}playerId(){return d(this,ki).playerId}render(){d(this,Xr).changed()}scale(){return d(this,ki).art.scale()}setCenter(t,n){d(this,Xr).centreOn(t,n)}setLockVerticalEdges(t){z(this,Ra,t)}setZoom(){}transport(){return d(this,ki).transport}zoom(){return d(this,ki).art.zoom()}};Xr=new WeakMap,ki=new WeakMap,Ra=new WeakMap,l(Mf,"MapPortal3D");var vf=Mf,_x=vf;var IM=l((i,e)=>{let[t,n]=i.centre(0,0);return Object.fromEntries(e.directions().map(r=>{let[s,a]=e.offset(r,0,0),[o,c]=i.centre(s,a);return[r,[o-t,c-n]]}))},"groundDirections"),yx=IM;var qx=0,Qf=1,Yx=2;var Ll=1,wh=2,ao=3,os=0,An=1,ai=2,Vs=0,oo=1,ep=2,tp=3,np=4,$x=5;var Hs=100,Zx=101,Jx=102,Kx=103,jx=104,Qx=200,e_=201,t_=202,n_=203,ip=204,rp=205,i_=206,r_=207,s_=208,a_=209,o_=210,l_=211,c_=212,u_=213,h_=214,Ru=0,Pu=1,Iu=2,Ja=3,Lu=4,Du=5,Nu=6,Uu=7,sp=0,d_=1,f_=2,Yi=0,ap=1,op=2,lp=3,Dl=4,cp=5,up=6,hp=7;var dp=300,Ws=301,lo=302,Eh=303,Ah=304,Gi=1e3,ri=1001,Fu=1002,Ht=1003,p_=1004;var Nl=1005;var Wt=1006,Th=1007;var Gn=1008;var pn=1009,fp=1010,pp=1011,co=1012,Ch=1013,Si=1014,wi=1015,Vn=1016,Rh=1017,Ph=1018,Xs=1020,mp=35902,gp=35899,xp=1021,_p=1022,Hn=1023,Mr=1026,Rr=1027,yp=1028,Ih=1029,$i=1030,Lh=1031;var Dh=1033,Ul=33776,Fl=33777,Ol=33778,Bl=33779,Nh=35840,Uh=35841,Fh=35842,Oh=35843,Bh=36196,kh=37492,zh=37496,Gh=37488,Vh=37489,kl=37490,Hh=37491,Wh=37808,Xh=37809,qh=37810,Yh=37811,$h=37812,Zh=37813,Jh=37814,Kh=37815,jh=37816,Qh=37817,ed=37818,td=37819,nd=37820,id=37821,rd=36492,sd=36494,ad=36495,od=36283,ld=36284,zl=36285,cd=36286;var ul=2300,Ou=2301,Tu=2302,qf=2303,Yf=2400,$f=2401,Zf=2402;var m_=3200;var ud=0,g_=1,Ei="",Vt="srgb",hl="srgb-linear",dl="linear",_t="srgb";var Cu=7680;var x_=519,__=512,y_=513,b_=514,bp=515,v_=516,M_=517,vp=518,Mp=519,Sp=35044;var wp="300 es",si=2e3,Ka=2001;function LM(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}l(LM,"arrayNeedsUint32");function DM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}l(DM,"isTypedArray");function fl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}l(fl,"createElementNS");function S_(){let i=fl("canvas");return i.style.display="block",i}l(S_,"createCanvasElement");var bx={},ja=null;function pl(...i){let e="THREE."+i.shift();ja?ja("log",e,...i):console.log(e,...i)}l(pl,"log");function w_(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}l(w_,"enhanceLogMessage");function Ye(...i){i=w_(i);let e="THREE."+i.shift();if(ja)ja("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}l(Ye,"warn");function $e(...i){i=w_(i);let e="THREE."+i.shift();if(ja)ja("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}l($e,"error");function ll(...i){let e=i.join(" ");e in bx||(bx[e]=!0,Ye(...i))}l(ll,"warnOnce");function E_(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}l(s,"probe"),setTimeout(s,t)})}l(E_,"probeAsync");var A_={[Ru]:Ru,[Iu]:Nu,[Lu]:Lu,[Ja]:Du,[Pu]:Pu,[Nu]:Iu,[Uu]:Uu,[Du]:Ja},Rp=class Rp{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}};l(Rp,"EventDispatcher");var Vi=Rp,dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Sf=Math.PI/180,Bu=180/Math.PI;function qs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}l(qs,"generateUUID");function ft(i,e,t){return Math.max(e,Math.min(t,i))}l(ft,"clamp");function NM(i,e){return(i%e+e)%e}l(NM,"euclideanModulo");function wf(i,e,t){return(1-t)*i+t*e}l(wf,"lerp");function T_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}l(T_,"floorPowerOfTwo");function hd(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}l(hd,"getNormalizationScale");function C_(i,e){if(e.constructor===Float32Array)return i;let t=hd(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}l(C_,"denormalize");function R_(i,e){if(e.constructor===Float32Array)return i;let t=hd(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}l(R_,"normalize");var ah=class ah{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};l(ah,"Vector2"),ah.prototype.isVector2=!0;var He=ah,Pp=class Pp{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],u=n[r+1],h=n[r+2],p=n[r+3],f=s[a+0],m=s[a+1],x=s[a+2],b=s[a+3];if(p!==b||c!==f||u!==m||h!==x){let g=c*f+u*m+h*x+p*b;g<0&&(f=-f,m=-m,x=-x,b=-b,g=-g);let _=1-o;if(g<.9995){let v=Math.acos(g),E=Math.sin(v);_=Math.sin(_*v)/E,o=Math.sin(o*v)/E,c=c*_+f*o,u=u*_+m*o,h=h*_+x*o,p=p*_+b*o}else{c=c*_+f*o,u=u*_+m*o,h=h*_+x*o,p=p*_+b*o;let v=1/Math.sqrt(c*c+u*u+h*h+p*p);c*=v,u*=v,h*=v,p*=v}}e[t]=c,e[t+1]=u,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],c=n[r+1],u=n[r+2],h=n[r+3],p=s[a],f=s[a+1],m=s[a+2],x=s[a+3];return e[t]=o*x+h*p+c*m-u*f,e[t+1]=c*x+h*f+u*p-o*m,e[t+2]=u*x+h*m+o*f-c*p,e[t+3]=h*x-o*p-c*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(n/2),h=o(r/2),p=o(s/2),f=c(n/2),m=c(r/2),x=c(s/2);switch(a){case"XYZ":this._x=f*h*p+u*m*x,this._y=u*m*p-f*h*x,this._z=u*h*x+f*m*p,this._w=u*h*p-f*m*x;break;case"YXZ":this._x=f*h*p+u*m*x,this._y=u*m*p-f*h*x,this._z=u*h*x-f*m*p,this._w=u*h*p+f*m*x;break;case"ZXY":this._x=f*h*p-u*m*x,this._y=u*m*p+f*h*x,this._z=u*h*x+f*m*p,this._w=u*h*p-f*m*x;break;case"ZYX":this._x=f*h*p-u*m*x,this._y=u*m*p+f*h*x,this._z=u*h*x-f*m*p,this._w=u*h*p+f*m*x;break;case"YZX":this._x=f*h*p+u*m*x,this._y=u*m*p+f*h*x,this._z=u*h*x-f*m*p,this._w=u*h*p-f*m*x;break;case"XZY":this._x=f*h*p-u*m*x,this._y=u*m*p-f*h*x,this._z=u*h*x+f*m*p,this._w=u*h*p+f*m*x;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],u=t[2],h=t[6],p=t[10],f=n+o+p;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(n>o&&n>p){let m=2*Math.sqrt(1+n-o-p);this._w=(h-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>p){let m=2*Math.sqrt(1+o-n-p);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+p-n-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,u=t._z,h=t._w;return this._x=n*h+a*o+r*u-s*c,this._y=r*h+a*c+s*o-n*u,this._z=s*h+a*u+n*c-r*o,this._w=a*h-n*o-r*c-s*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let u=Math.acos(o),h=Math.sin(u);c=Math.sin(c*u)/h,t=Math.sin(t*u)/h,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};l(Pp,"Quaternion");var Sn=Pp,oh=class oh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vx.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*r-o*n),h=2*(o*t-s*r),p=2*(s*n-a*t);return this.x=t+c*u+a*p-o*h,this.y=n+c*h+o*u-s*p,this.z=r+c*p+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ef.copy(this).projectOnVector(e),this.sub(Ef)}reflect(e){return this.sub(Ef.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};l(oh,"Vector3"),oh.prototype.isVector3=!0;var W=oh,Ef=new W,vx=new Sn,lh=class lh{constructor(e,t,n,r,s,a,o,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,u)}set(e,t,n,r,s,a,o,c,u){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],h=n[4],p=n[7],f=n[2],m=n[5],x=n[8],b=r[0],g=r[3],_=r[6],v=r[1],E=r[4],M=r[7],R=r[2],A=r[5],y=r[8];return s[0]=a*b+o*v+c*R,s[3]=a*g+o*E+c*A,s[6]=a*_+o*M+c*y,s[1]=u*b+h*v+p*R,s[4]=u*g+h*E+p*A,s[7]=u*_+h*M+p*y,s[2]=f*b+m*v+x*R,s[5]=f*g+m*E+x*A,s[8]=f*_+m*M+x*y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8];return t*a*h-t*o*u-n*s*h+n*o*c+r*s*u-r*a*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],p=h*a-o*u,f=o*c-h*s,m=u*s-a*c,x=t*p+n*f+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/x;return e[0]=p*b,e[1]=(r*u-h*n)*b,e[2]=(o*n-r*a)*b,e[3]=f*b,e[4]=(h*t-r*c)*b,e[5]=(r*s-o*t)*b,e[6]=m*b,e[7]=(n*c-u*t)*b,e[8]=(a*t-n*s)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*a+u*o)+a+e,-r*u,r*c,-r*(-u*a+c*o)+o+t,0,0,1),this}scale(e,t){return ll("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Af.makeScale(e,t)),this}rotate(e){return ll("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Af.makeRotation(-e)),this}translate(e,t){return ll("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Af.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};l(lh,"Matrix3"),lh.prototype.isMatrix3=!0;var Ze=lh,Af=new Ze,Mx=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sx=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function UM(){let i={enabled:!0,workingColorSpace:hl,spaces:{},convert:l(function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===_t&&(r.r=vr(r.r),r.g=vr(r.g),r.b=vr(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_t&&(r.r=Za(r.r),r.g=Za(r.g),r.b=Za(r.b))),r},"convert"),workingToColorSpace:l(function(r,s){return this.convert(r,this.workingColorSpace,s)},"workingToColorSpace"),colorSpaceToWorking:l(function(r,s){return this.convert(r,s,this.workingColorSpace)},"colorSpaceToWorking"),getPrimaries:l(function(r){return this.spaces[r].primaries},"getPrimaries"),getTransfer:l(function(r){return r===Ei?dl:this.spaces[r].transfer},"getTransfer"),getToneMappingMode:l(function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},"getToneMappingMode"),getLuminanceCoefficients:l(function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},"getLuminanceCoefficients"),define:l(function(r){Object.assign(this.spaces,r)},"define"),_getMatrix:l(function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},"_getMatrix"),_getDrawingBufferColorSpace:l(function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},"_getDrawingBufferColorSpace"),_getUnpackColorSpace:l(function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},"_getUnpackColorSpace")},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[hl]:{primaries:e,whitePoint:n,transfer:dl,toXYZ:Mx,fromXYZ:Sx,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:Mx,fromXYZ:Sx,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),i}l(UM,"createColorManagement");var dt=UM();function vr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}l(vr,"SRGBToLinear");function Za(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}l(Za,"LinearToSRGB");var Pa,Ip=class Ip{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Pa===void 0&&(Pa=fl("canvas")),Pa.width=e.width,Pa.height=e.height;let r=Pa.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Pa}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=fl("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=vr(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vr(t[n]/255)*255):t[n]=vr(t[n]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};l(Ip,"ImageUtils");var ku=Ip,FM=0,Lp=class Lp{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:FM++}),this.uuid=qs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Tf(r[a].image)):s.push(Tf(r[a]))}else s=Tf(r);n.url=s}return t||(e.images[this.uuid]=n),n}};l(Lp,"TextureSource");var Qa=Lp;function Tf(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ku.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}l(Tf,"serializeImage");var OM=0,Cf=new W,Ya=class Ya extends Vi{constructor(e=Ya.DEFAULT_IMAGE,t=Ya.DEFAULT_MAPPING,n=ri,r=ri,s=Wt,a=Gn,o=Hn,c=pn,u=Ya.DEFAULT_ANISOTROPY,h=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=qs(),this.name="",this.source=new Qa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Cf).x}get height(){return this.source.getSize(Cf).y}get depth(){return this.source.getSize(Cf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gi:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case Fu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gi:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case Fu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};l(Ya,"Texture");var wn=Ya;wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=dp;wn.DEFAULT_ANISOTROPY=1;var ch=class ch{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,u=c[0],h=c[4],p=c[8],f=c[1],m=c[5],x=c[9],b=c[2],g=c[6],_=c[10];if(Math.abs(h-f)<.01&&Math.abs(p-b)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+b)<.1&&Math.abs(x+g)<.1&&Math.abs(u+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(u+1)/2,M=(m+1)/2,R=(_+1)/2,A=(h+f)/4,y=(p+b)/4,S=(x+g)/4;return E>M&&E>R?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=A/n,s=y/n):M>R?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=A/r,s=S/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=y/s,r=S/s),this.set(n,r,s,t),this}let v=Math.sqrt((g-x)*(g-x)+(p-b)*(p-b)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(g-x)/v,this.y=(p-b)/v,this.z=(f-h)/v,this.w=Math.acos((u+m+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};l(ch,"Vector4"),ch.prototype.isVector4=!0;var Nt=ch,Dp=class Dp extends Vi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t),this.textures=[];let r=n.count;for(let s=0;s<r;s++)this.textures[s]=new wn({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Qa(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};l(Dp,"RenderTarget");var zu=Dp,Np=class Np extends zu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}};l(Np,"WebGLRenderTarget");var Bn=Np,Up=class Up extends wn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};l(Up,"DataArrayTexture");var Gs=Up;var Fp=class Fp extends wn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};l(Fp,"Data3DTexture");var Gu=Fp;var cl=class cl{constructor(e,t,n,r,s,a,o,c,u,h,p,f,m,x,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,u,h,p,f,m,x,b,g)}set(e,t,n,r,s,a,o,c,u,h,p,f,m,x,b,g){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=s,_[5]=a,_[9]=o,_[13]=c,_[2]=u,_[6]=h,_[10]=p,_[14]=f,_[3]=m,_[7]=x,_[11]=b,_[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Ia.setFromMatrixColumn(e,0).length(),s=1/Ia.setFromMatrixColumn(e,1).length(),a=1/Ia.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),u=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){let f=a*h,m=a*p,x=o*h,b=o*p;t[0]=c*h,t[4]=-c*p,t[8]=u,t[1]=m+x*u,t[5]=f-b*u,t[9]=-o*c,t[2]=b-f*u,t[6]=x+m*u,t[10]=a*c}else if(e.order==="YXZ"){let f=c*h,m=c*p,x=u*h,b=u*p;t[0]=f+b*o,t[4]=x*o-m,t[8]=a*u,t[1]=a*p,t[5]=a*h,t[9]=-o,t[2]=m*o-x,t[6]=b+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*h,m=c*p,x=u*h,b=u*p;t[0]=f-b*o,t[4]=-a*p,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*h,t[9]=b-f*o,t[2]=-a*u,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*h,m=a*p,x=o*h,b=o*p;t[0]=c*h,t[4]=x*u-m,t[8]=f*u+b,t[1]=c*p,t[5]=b*u+f,t[9]=m*u-x,t[2]=-u,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,m=a*u,x=o*c,b=o*u;t[0]=c*h,t[4]=b-f*p,t[8]=x*p+m,t[1]=p,t[5]=a*h,t[9]=-o*h,t[2]=-u*h,t[6]=m*p+x,t[10]=f-b*p}else if(e.order==="XZY"){let f=a*c,m=a*u,x=o*c,b=o*u;t[0]=c*h,t[4]=-p,t[8]=u*h,t[1]=f*p+b,t[5]=a*h,t[9]=m*p-x,t[2]=x*p-m,t[6]=o*h,t[10]=b*p+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(BM,e,kM)}lookAt(e,t,n){let r=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),qr.crossVectors(n,Fn),qr.lengthSq()===0&&(Math.abs(n.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),qr.crossVectors(n,Fn)),qr.normalize(),ru.crossVectors(Fn,qr),r[0]=qr.x,r[4]=ru.x,r[8]=Fn.x,r[1]=qr.y,r[5]=ru.y,r[9]=Fn.y,r[2]=qr.z,r[6]=ru.z,r[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],h=n[1],p=n[5],f=n[9],m=n[13],x=n[2],b=n[6],g=n[10],_=n[14],v=n[3],E=n[7],M=n[11],R=n[15],A=r[0],y=r[4],S=r[8],L=r[12],P=r[1],D=r[5],O=r[9],X=r[13],U=r[2],Y=r[6],ne=r[10],B=r[14],J=r[3],H=r[7],$=r[11],j=r[15];return s[0]=a*A+o*P+c*U+u*J,s[4]=a*y+o*D+c*Y+u*H,s[8]=a*S+o*O+c*ne+u*$,s[12]=a*L+o*X+c*B+u*j,s[1]=h*A+p*P+f*U+m*J,s[5]=h*y+p*D+f*Y+m*H,s[9]=h*S+p*O+f*ne+m*$,s[13]=h*L+p*X+f*B+m*j,s[2]=x*A+b*P+g*U+_*J,s[6]=x*y+b*D+g*Y+_*H,s[10]=x*S+b*O+g*ne+_*$,s[14]=x*L+b*X+g*B+_*j,s[3]=v*A+E*P+M*U+R*J,s[7]=v*y+E*D+M*Y+R*H,s[11]=v*S+E*O+M*ne+R*$,s[15]=v*L+E*X+M*B+R*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],u=e[13],h=e[2],p=e[6],f=e[10],m=e[14],x=e[3],b=e[7],g=e[11],_=e[15],v=c*m-u*f,E=o*m-u*p,M=o*f-c*p,R=a*m-u*h,A=a*f-c*h,y=a*p-o*h;return t*(b*v-g*E+_*M)-n*(x*v-g*R+_*A)+r*(x*E-b*R+_*y)-s*(x*M-b*A+g*y)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],u=e[6],h=e[10];return t*(a*h-o*u)-n*(s*h-o*c)+r*(s*u-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],p=e[9],f=e[10],m=e[11],x=e[12],b=e[13],g=e[14],_=e[15],v=t*o-n*a,E=t*c-r*a,M=t*u-s*a,R=n*c-r*o,A=n*u-s*o,y=r*u-s*c,S=h*b-p*x,L=h*g-f*x,P=h*_-m*x,D=p*g-f*b,O=p*_-m*b,X=f*_-m*g,U=v*X-E*O+M*D+R*P-A*L+y*S;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Y=1/U;return e[0]=(o*X-c*O+u*D)*Y,e[1]=(r*O-n*X-s*D)*Y,e[2]=(b*y-g*A+_*R)*Y,e[3]=(f*A-p*y-m*R)*Y,e[4]=(c*P-a*X-u*L)*Y,e[5]=(t*X-r*P+s*L)*Y,e[6]=(g*M-x*y-_*E)*Y,e[7]=(h*y-f*M+m*E)*Y,e[8]=(a*O-o*P+u*S)*Y,e[9]=(n*P-t*O-s*S)*Y,e[10]=(x*A-b*M+_*v)*Y,e[11]=(p*M-h*A-m*v)*Y,e[12]=(o*L-a*D-c*S)*Y,e[13]=(t*D-n*L+r*S)*Y,e[14]=(b*E-x*R-g*v)*Y,e[15]=(h*R-p*E+f*v)*Y,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,u=s*a,h=s*o;return this.set(u*a+n,u*o-r*c,u*c+r*o,0,u*o+r*c,h*o+n,h*c-r*a,0,u*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,u=s+s,h=a+a,p=o+o,f=s*u,m=s*h,x=s*p,b=a*h,g=a*p,_=o*p,v=c*u,E=c*h,M=c*p,R=n.x,A=n.y,y=n.z;return r[0]=(1-(b+_))*R,r[1]=(m+M)*R,r[2]=(x-E)*R,r[3]=0,r[4]=(m-M)*A,r[5]=(1-(f+_))*A,r[6]=(g+v)*A,r[7]=0,r[8]=(x+E)*y,r[9]=(g-v)*y,r[10]=(1-(f+b))*y,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Ia.set(r[0],r[1],r[2]).length(),o=Ia.set(r[4],r[5],r[6]).length(),c=Ia.set(r[8],r[9],r[10]).length();s<0&&(a=-a),yi.copy(this);let u=1/a,h=1/o,p=1/c;return yi.elements[0]*=u,yi.elements[1]*=u,yi.elements[2]*=u,yi.elements[4]*=h,yi.elements[5]*=h,yi.elements[6]*=h,yi.elements[8]*=p,yi.elements[9]*=p,yi.elements[10]*=p,t.setFromRotationMatrix(yi),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=si,c=!1){let u=this.elements,h=2*s/(t-e),p=2*s/(n-r),f=(t+e)/(t-e),m=(n+r)/(n-r),x,b;if(c)x=s/(a-s),b=a*s/(a-s);else if(o===si)x=-(a+s)/(a-s),b=-2*a*s/(a-s);else if(o===Ka)x=-a/(a-s),b=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=p,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=x,u[14]=b,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=si,c=!1){let u=this.elements,h=2/(t-e),p=2/(n-r),f=-(t+e)/(t-e),m=-(n+r)/(n-r),x,b;if(c)x=1/(a-s),b=a/(a-s);else if(o===si)x=-2/(a-s),b=-(a+s)/(a-s);else if(o===Ka)x=-1/(a-s),b=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=p,u[9]=0,u[13]=m,u[2]=0,u[6]=0,u[10]=x,u[14]=b,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};l(cl,"Matrix4"),cl.prototype.isMatrix4=!0;var bt=cl,Ia=new W,yi=new bt,BM=new W(0,0,0),kM=new W(1,1,1),qr=new W,ru=new W,Fn=new W,wx=new bt,Ex=new Sn,uh=class uh{constructor(e=0,t=0,n=0,r=uh.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],h=r[9],p=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ft(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wx,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ex.setFromEuler(this),this.setFromQuaternion(Ex,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};l(uh,"Euler");var kn=uh;kn.DEFAULT_ORDER="XYZ";var Op=class Op{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};l(Op,"Layers");var ml=Op,zM=0,Ax=new W,La=new Sn,pr=new bt,su=new W,tl=new W,GM=new W,VM=new Sn,Tx=new W(1,0,0),Cx=new W(0,1,0),Rx=new W(0,0,1),Px={type:"added"},HM={type:"removed"},Da={type:"childadded",child:null},Rf={type:"childremoved",child:null},$a=class $a extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$a.DEFAULT_UP.clone();let e=new W,t=new kn,n=new Sn,r=new W(1,1,1);function s(){n.setFromEuler(t,!1)}l(s,"onRotationChange");function a(){t.setFromQuaternion(n,void 0,!1)}l(a,"onQuaternionChange"),t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new Ze}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=$a.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$a.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return La.setFromAxisAngle(e,t),this.quaternion.multiply(La),this}rotateOnWorldAxis(e,t){return La.setFromAxisAngle(e,t),this.quaternion.premultiply(La),this}rotateX(e){return this.rotateOnAxis(Tx,e)}rotateY(e){return this.rotateOnAxis(Cx,e)}rotateZ(e){return this.rotateOnAxis(Rx,e)}translateOnAxis(e,t){return Ax.copy(e).applyQuaternion(this.quaternion),this.position.add(Ax.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tx,e)}translateY(e){return this.translateOnAxis(Cx,e)}translateZ(e){return this.translateOnAxis(Rx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?su.copy(e):su.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pr.lookAt(tl,su,this.up):pr.lookAt(su,tl,this.up),this.quaternion.setFromRotationMatrix(pr),r&&(pr.extractRotation(r.matrixWorld),La.setFromRotationMatrix(pr),this.quaternion.premultiply(La.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Px),Da.child=e,this.dispatchEvent(Da),Da.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(HM),Rf.child=e,this.dispatchEvent(Rf),Rf.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pr.multiply(e.parent.matrixWorld)),e.applyMatrix4(pr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Px),Da.child=e,this.dispatchEvent(Da),Da.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,e,GM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,VM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(l(s,"serialize"),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){let p=c[u];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),p=a(e.shapes),f=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=r,n;function a(o){let c=[];for(let u in o){let h=o[u];delete h.metadata,c.push(h)}return c}l(a,"extractFromCache")}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};l($a,"Object3D");var on=$a;on.DEFAULT_UP=new W(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Bp=class Bp extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}};l(Bp,"Group");var an=Bp,WM={type:"move"},kp=class kp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(let b of e.hand.values()){let g=t.getJointPose(b,n),_=this._getHandJoint(u,b);g!==null&&(_.matrix.fromArray(g.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=g.radius),_.visible=g!==null}let h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],f=h.position.distanceTo(p.position),m=.02,x=.005;u.inputState.pinching&&f>m+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(WM)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new an;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};l(kp,"WebXRController");var eo=kp,P_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yr={h:0,s:0,l:0},au={h:0,s:0,l:0};function Pf(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}l(Pf,"hue2rgb");var zp=class zp{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=dt.workingColorSpace){if(e=NM(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Pf(a,s,e+1/3),this.g=Pf(a,s,e),this.b=Pf(a,s,e-1/3)}return dt.colorSpaceToWorking(this,r),this}setStyle(e,t=Vt){function n(s){s!==void 0&&parseFloat(s)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}l(n,"handleAlpha");let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){let n=P_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}copyLinearToSRGB(e){return this.r=Za(e.r),this.g=Za(e.g),this.b=Za(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return dt.workingToColorSpace(fn.copy(this),e),Math.round(ft(fn.r*255,0,255))*65536+Math.round(ft(fn.g*255,0,255))*256+Math.round(ft(fn.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(fn.copy(this),t);let n=fn.r,r=fn.g,s=fn.b,a=Math.max(n,r,s),o=Math.min(n,r,s),c,u,h=(o+a)/2;if(o===a)c=0,u=0;else{let p=a-o;switch(u=h<=.5?p/(a+o):p/(2-a-o),a){case n:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-n)/p+2;break;case s:c=(n-r)/p+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=Vt){dt.workingToColorSpace(fn.copy(this),e);let t=fn.r,n=fn.g,r=fn.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Yr),this.setHSL(Yr.h+e,Yr.s+t,Yr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yr),e.getHSL(au);let n=wf(Yr.h,au.h,t),r=wf(Yr.s,au.s,t),s=wf(Yr.l,au.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};l(zp,"Color");var Be=zp,fn=new Be;Be.NAMES=P_;var hh=class hh{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Be(e),this.near=t,this.far=n}clone(){return new hh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}};l(hh,"Fog");var gl=hh,Gp=class Gp extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}};l(Gp,"Scene");var xl=Gp,bi=new W,mr=new W,If=new W,gr=new W,Na=new W,Ua=new W,Ix=new W,Lf=new W,Df=new W,Nf=new W,Uf=new Nt,Ff=new Nt,Of=new Nt,Kr=class Kr{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),bi.subVectors(e,t),r.cross(bi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){bi.subVectors(r,t),mr.subVectors(n,t),If.subVectors(e,t);let a=bi.dot(bi),o=bi.dot(mr),c=bi.dot(If),u=mr.dot(mr),h=mr.dot(If),p=a*u-o*o;if(p===0)return s.set(0,0,0),null;let f=1/p,m=(u*c-o*h)*f,x=(a*h-o*c)*f;return s.set(1-m-x,x,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,gr)===null?!1:gr.x>=0&&gr.y>=0&&gr.x+gr.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,gr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,gr.x),c.addScaledVector(a,gr.y),c.addScaledVector(o,gr.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Uf.setScalar(0),Ff.setScalar(0),Of.setScalar(0),Uf.fromBufferAttribute(e,t),Ff.fromBufferAttribute(e,n),Of.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Uf,s.x),a.addScaledVector(Ff,s.y),a.addScaledVector(Of,s.z),a}static isFrontFacing(e,t,n,r){return bi.subVectors(n,t),mr.subVectors(e,t),bi.cross(mr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),mr.subVectors(this.a,this.b),bi.cross(mr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Kr.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Kr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;Na.subVectors(r,n),Ua.subVectors(s,n),Lf.subVectors(e,n);let c=Na.dot(Lf),u=Ua.dot(Lf);if(c<=0&&u<=0)return t.copy(n);Df.subVectors(e,r);let h=Na.dot(Df),p=Ua.dot(Df);if(h>=0&&p<=h)return t.copy(r);let f=c*p-h*u;if(f<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(Na,a);Nf.subVectors(e,s);let m=Na.dot(Nf),x=Ua.dot(Nf);if(x>=0&&m<=x)return t.copy(s);let b=m*u-c*x;if(b<=0&&u>=0&&x<=0)return o=u/(u-x),t.copy(n).addScaledVector(Ua,o);let g=h*x-m*p;if(g<=0&&p-h>=0&&m-x>=0)return Ix.subVectors(s,r),o=(p-h)/(p-h+(m-x)),t.copy(r).addScaledVector(Ix,o);let _=1/(g+b+f);return a=b*_,o=f*_,t.copy(n).addScaledVector(Na,a).addScaledVector(Ua,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};l(Kr,"Triangle");var yr=Kr,Vp=class Vp{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,vi):vi.fromBufferAttribute(s,a),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ou.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ou.copy(n.boundingBox)),ou.applyMatrix4(e.matrixWorld),this.union(ou)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nl),lu.subVectors(this.max,nl),Fa.subVectors(e.a,nl),Oa.subVectors(e.b,nl),Ba.subVectors(e.c,nl),$r.subVectors(Oa,Fa),Zr.subVectors(Ba,Oa),Os.subVectors(Fa,Ba);let t=[0,-$r.z,$r.y,0,-Zr.z,Zr.y,0,-Os.z,Os.y,$r.z,0,-$r.x,Zr.z,0,-Zr.x,Os.z,0,-Os.x,-$r.y,$r.x,0,-Zr.y,Zr.x,0,-Os.y,Os.x,0];return!Bf(t,Fa,Oa,Ba,lu)||(t=[1,0,0,0,1,0,0,0,1],!Bf(t,Fa,Oa,Ba,lu))?!1:(cu.crossVectors($r,Zr),t=[cu.x,cu.y,cu.z],Bf(t,Fa,Oa,Ba,lu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}};l(Vp,"Box3");var Qr=Vp,xr=[new W,new W,new W,new W,new W,new W,new W,new W],vi=new W,ou=new Qr,Fa=new W,Oa=new W,Ba=new W,$r=new W,Zr=new W,Os=new W,nl=new W,lu=new W,cu=new W,Bs=new W;function Bf(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Bs.fromArray(i,s);let o=r.x*Math.abs(Bs.x)+r.y*Math.abs(Bs.y)+r.z*Math.abs(Bs.z),c=e.dot(Bs),u=t.dot(Bs),h=n.dot(Bs);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}l(Bf,"satForAxes");var br=XM();function XM(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){let u=c-127;u<-27?(n[c]=0,n[c|256]=32768,r[c]=24,r[c|256]=24):u<-14?(n[c]=1024>>-u-14,n[c|256]=1024>>-u-14|32768,r[c]=-u-1,r[c|256]=-u-1):u<=15?(n[c]=u+15<<10,n[c|256]=u+15<<10|32768,r[c]=13,r[c|256]=13):u<128?(n[c]=31744,n[c|256]=64512,r[c]=24,r[c|256]=24):(n[c]=31744,n[c|256]=64512,r[c]=13,r[c|256]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let u=c<<13,h=0;for(;(u&8388608)===0;)u<<=1,h-=8388608;u&=-8388609,h+=947912704,s[c]=u|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}l(XM,"_generateTables");function qM(i){Math.abs(i)>65504&&Ye("DataUtils.toHalfFloat(): Value out of range."),i=ft(i,-65504,65504),br.floatView[0]=i;let e=br.uint32View[0],t=e>>23&511;return br.baseTable[t]+((e&8388607)>>br.shiftTable[t])}l(qM,"toHalfFloat");function YM(i){let e=i>>10;return br.uint32View[0]=br.mantissaTable[br.offsetTable[e]+(i&1023)]+br.exponentTable[e],br.floatView[0]}l(YM,"fromHalfFloat");var Hp=class Hp{static toHalfFloat(e){return qM(e)}static fromHalfFloat(e){return YM(e)}};l(Hp,"DataUtils");var Hi=Hp,Gt=new W,uu=new He,$M=0,Wp=class Wp extends Vi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$M++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sp,this.updateRanges=[],this.gpuType=wi,this.version=0,this._normalizationScale=e!==void 0?hd(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)uu.fromBufferAttribute(this,t),uu.applyMatrix3(e),this.setXY(t,uu.x,uu.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):C_(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):R_(e,this.array)}};l(Wp,"BufferAttribute");var Mt=Wp;var Xp=class Xp extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};l(Xp,"Uint16BufferAttribute");var _l=Xp;var qp=class qp extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};l(qp,"Uint32BufferAttribute");var yl=qp;var Yp=class Yp extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}};l(Yp,"Float32BufferAttribute");var It=Yp,ZM=new Qr,il=new W,kf=new W,$p=class $p{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ZM.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;il.subVectors(e,this.center);let t=il.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(il,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(il.copy(e.center).add(kf)),this.expandByPoint(il.copy(e.center).sub(kf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};l($p,"Sphere");var to=$p,JM=0,ii=new bt,zf=new on,ka=new W,On=new Qr,rl=new Qr,jt=new W,dh=class dh extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:JM++}),this.uuid=qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(LM(e)?yl:_l)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,n){return ii.makeTranslation(e,t,n),this.applyMatrix4(ii),this}scale(e,t,n){return ii.makeScale(e,t,n),this.applyMatrix4(ii),this}lookAt(e){return zf.lookAt(e),zf.updateMatrix(),this.applyMatrix4(zf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ka).negate(),this.translate(ka.x,ka.y,ka.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new It(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];On.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new to);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){let n=this.boundingSphere.center;if(On.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];rl.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(On.min,rl.min),On.expandByPoint(jt),jt.addVectors(On.max,rl.max),On.expandByPoint(jt)):(On.expandByPoint(rl.min),On.expandByPoint(rl.max))}On.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(jt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)jt.fromBufferAttribute(o,u),c&&(ka.fromBufferAttribute(e,u),jt.add(ka)),r=Math.max(r,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Mt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],u=new Uint8Array(n.count);for(let L=0;L<n.count;L++)o[L]=new W,c[L]=new W;let h=new W,p=new W,f=new W,m=new He,x=new He,b=new He,g=new W,_=new W;function v(L,P,D){u[L]=u[P]=u[D]=1,h.fromBufferAttribute(n,L),p.fromBufferAttribute(n,P),f.fromBufferAttribute(n,D),m.fromBufferAttribute(s,L),x.fromBufferAttribute(s,P),b.fromBufferAttribute(s,D),p.sub(h),f.sub(h),x.sub(m),b.sub(m);let O=1/(x.x*b.y-b.x*x.y);isFinite(O)&&(g.copy(p).multiplyScalar(b.y).addScaledVector(f,-x.y).multiplyScalar(O),_.copy(f).multiplyScalar(x.x).addScaledVector(p,-b.x).multiplyScalar(O),o[L].add(g),o[P].add(g),o[D].add(g),c[L].add(_),c[P].add(_),c[D].add(_))}l(v,"handleTriangle");let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let L=0,P=E.length;L<P;++L){let D=E[L],O=D.start,X=D.count;for(let U=O,Y=O+X;U<Y;U+=3)v(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let M=new W,R=new W,A=new W,y=new W;function S(L){A.fromBufferAttribute(r,L),y.copy(A);let P=o[L];M.copy(P),M.sub(A.multiplyScalar(A.dot(P))).normalize(),R.crossVectors(y,P);let O=R.dot(c[L])<0?-1:1;a.setXYZW(L,M.x,M.y,M.z,O)}l(S,"handleVertex");for(let L=0,P=n.count;L<P;++L)u[L]&&S(L);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let r=new W,s=new W,a=new W,o=new W,c=new W,u=new W,h=new W,p=new W;if(e)for(let f=0,m=e.count;f<m;f+=3){let x=e.getX(f+0),b=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,b),a.fromBufferAttribute(t,g),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,g),o.add(h),c.add(h),u.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,c){let u=o.array,h=o.itemSize,p=o.normalized,f=new u.constructor(c.length*h),m=0,x=0;for(let b=0,g=c.length;b<g;b++){o.isInterleavedBufferAttribute?m=c[b]*o.data.stride+o.offset:m=c[b]*h;for(let _=0;_<h;_++)f[x++]=u[m++]}return new Mt(f,h,p)}if(l(e,"convertBufferAttribute"),this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new dh,n=this.index.array,r=this.attributes;for(let o in r){let c=r[o],u=e(c,n);t.setAttribute(o,u)}let s=this.morphAttributes;for(let o in s){let c=[],u=s[o];for(let h=0,p=u.length;h<p;h++){let f=u[h],m=e(f,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let u=n[c];e.data.attributes[c]=u.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let u=this.morphAttributes[c],h=[];for(let p=0,f=u.length;p<f;p++){let m=u[p];h.push(m.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let u in r){let h=r[u];this.setAttribute(u,h.clone(t))}let s=e.morphAttributes;for(let u in s){let h=[],p=s[u];for(let f=0,m=p.length;f<m;f++)h.push(p[f].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let u=0,h=a.length;u<h;u++){let p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};l(dh,"BufferGeometry");var Ot=dh,Zp=class Zp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Sp,this.updateRanges=[],this.version=0,this.uuid=qs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Lx(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Lx(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};l(Zp,"InterleavedBuffer");var bl=Zp;function Lx(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=qs()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}l(Lx,"getArrayKey");var vn=new W,fh=class fh{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e!==void 0?hd(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){pl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){pl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):C_(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):R_(e,this.data.array)}};l(fh,"InterleavedBufferAttribute");var no=fh,Gf=new W,KM=new W,jM=new Ze,Jp=class Jp{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Gf.subVectors(n,t).cross(KM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Gf),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||jM.getNormalMatrix(e),r=this.coplanarPoint(Gf).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}};l(Jp,"Plane");var Pn=Jp,QM=0,Kp=class Kp extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:QM++}),this.uuid=qs(),this.name="",this.type="Material",this.blending=oo,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ip,this.blendDst=rp,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Ja,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=x_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cu,this.stencilZFail=Cu,this.stencilZPass=Cu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(l(r,"extractFromCache"),t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Pn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new He().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new He().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};l(Kp,"Material");var Sr=Kp,jp=class jp extends Sr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};l(jp,"SpriteMaterial");var es=jp,za,sl=new W,Ga=new W,Va=new W,Ha=new He,al=new He,I_=new bt,hu=new W,ol=new W,du=new W,Dx=new He,Vf=new He,Nx=new He,Qp=class Qp extends on{constructor(e=new es){if(super(),this.isSprite=!0,this.type="Sprite",za===void 0){za=new Ot;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new bl(t,5);za.setIndex([0,1,2,0,2,3]),za.setAttribute("position",new no(n,3,0,!1)),za.setAttribute("uv",new no(n,2,3,!1))}this.geometry=za,this.material=e,this.center=new He(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&$e('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ga.setFromMatrixScale(this.matrixWorld),I_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Va.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ga.multiplyScalar(-Va.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let a=this.center;fu(hu.set(-.5,-.5,0),Va,a,Ga,r,s),fu(ol.set(.5,-.5,0),Va,a,Ga,r,s),fu(du.set(.5,.5,0),Va,a,Ga,r,s),Dx.set(0,0),Vf.set(1,0),Nx.set(1,1);let o=e.ray.intersectTriangle(hu,ol,du,!1,sl);if(o===null&&(fu(ol.set(-.5,.5,0),Va,a,Ga,r,s),Vf.set(0,1),o=e.ray.intersectTriangle(hu,du,ol,!1,sl),o===null))return;let c=e.ray.origin.distanceTo(sl);c<e.near||c>e.far||t.push({distance:c,point:sl.clone(),uv:yr.getInterpolation(sl,hu,ol,du,Dx,Vf,Nx,new He),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};l(Qp,"Sprite");var wr=Qp;function fu(i,e,t,n,r,s){Ha.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(al.x=s*Ha.x-r*Ha.y,al.y=r*Ha.x+s*Ha.y):al.copy(Ha),i.copy(e),i.x+=al.x,i.y+=al.y,i.applyMatrix4(I_)}l(fu,"transformVertex");var _r=new W,Hf=new W,pu=new W,mu=new W,em=class em{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_r)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=_r.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_r.copy(this.origin).addScaledVector(this.direction,t),_r.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Hf.copy(e).add(t).multiplyScalar(.5),pu.copy(t).sub(e).normalize(),mu.copy(this.origin).sub(Hf);let s=e.distanceTo(t)*.5,a=-this.direction.dot(pu),o=mu.dot(this.direction),c=-mu.dot(pu),u=mu.lengthSq(),h=Math.abs(1-a*a),p,f,m,x;if(h>0)if(p=a*c-o,f=a*o-c,x=s*h,p>=0)if(f>=-x)if(f<=x){let b=1/h;p*=b,f*=b,m=p*(p+a*f+2*o)+f*(a*p+f+2*c)+u}else f=s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*c)+u;else f=-s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*c)+u;else f<=-x?(p=Math.max(0,-(-a*s+o)),f=p>0?-s:Math.min(Math.max(-s,-c),s),m=-p*p+f*(f+2*c)+u):f<=x?(p=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+u):(p=Math.max(0,-(a*s+o)),f=p>0?s:Math.min(Math.max(-s,-c),s),m=-p*p+f*(f+2*c)+u);else f=a>0?-s:s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Hf).addScaledVector(pu,f),m}intersectSphere(e,t){if(e.radius<0)return null;_r.subVectors(e.center,this.origin);let n=_r.dot(this.direction),r=_r.dot(_r)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c,u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-f.z)*p,c=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,c=(e.min.z-f.z)*p),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,_r)!==null}intersectTriangle(e,t,n,r,s){let a=this.origin,o=this.direction,c=o.x,u=o.y,h=o.z,p=e.x-a.x,f=e.y-a.y,m=e.z-a.z,x=t.x-a.x,b=t.y-a.y,g=t.z-a.z,_=n.x-a.x,v=n.y-a.y,E=n.z-a.z,M=Math.abs(c),R=Math.abs(u),A=Math.abs(h),y,S,L,P,D,O,X,U,Y,ne,B,J;if(M>=R&&M>=A?(L=c,O=p,Y=x,J=_,c>=0?(y=u,S=h,P=f,D=m,X=b,U=g,ne=v,B=E):(y=h,S=u,P=m,D=f,X=g,U=b,ne=E,B=v)):R>=A?(L=u,O=f,Y=b,J=v,u>=0?(y=h,S=c,P=m,D=p,X=g,U=x,ne=E,B=_):(y=c,S=h,P=p,D=m,X=x,U=g,ne=_,B=E)):(L=h,O=m,Y=g,J=E,h>=0?(y=c,S=u,P=p,D=f,X=x,U=b,ne=_,B=v):(y=u,S=c,P=f,D=p,X=b,U=x,ne=v,B=_)),L===0)return null;let H=y/L,$=S/L,j=1/L,he=P-H*O,ge=D-$*O,Q=X-H*Y,pe=U-$*Y,le=ne-H*J,de=B-$*J,ue=le*pe-de*Q,ee=he*de-ge*le,me=Q*ge-pe*he;if(r){if(ue<0||ee<0||me<0)return null}else if((ue<0||ee<0||me<0)&&(ue>0||ee>0||me>0))return null;let ie=ue+ee+me;if(ie===0)return null;let xe=j*(ue*O+ee*Y+me*J);return(ie>0?xe<0:xe>0)?null:this.at(xe/ie,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};l(em,"Ray");var Vu=em,tm=class tm extends Sr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=sp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};l(tm,"MeshBasicMaterial");var io=tm,Ux=new bt,ks=new Vu,gu=new to,Fx=new W,xu=new W,_u=new W,yu=new W,Wf=new W,bu=new W,Ox=new W,vu=new W,nm=class nm extends on{constructor(e=new Ot,t=new io){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){bu.set(0,0,0);for(let c=0,u=s.length;c<u;c++){let h=o[c],p=s[c];h!==0&&(Wf.fromBufferAttribute(p,e),a?bu.addScaledVector(Wf,h):bu.addScaledVector(Wf.sub(t),h))}t.add(bu)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gu.copy(n.boundingSphere),gu.applyMatrix4(s),ks.copy(e.ray).recast(e.near),!(gu.containsPoint(ks.origin)===!1&&(ks.intersectSphere(gu,Fx)===null||ks.origin.distanceToSquared(Fx)>(e.far-e.near)**2))&&(Ux.copy(s).invert(),ks.copy(e.ray).applyMatrix4(Ux),!(n.boundingBox!==null&&ks.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ks)))}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,b=f.length;x<b;x++){let g=f[x],_=a[g.materialIndex],v=Math.max(g.start,m.start),E=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let M=v,R=E;M<R;M+=3){let A=o.getX(M),y=o.getX(M+1),S=o.getX(M+2);r=Mu(this,_,e,n,u,h,p,A,y,S),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let x=Math.max(0,m.start),b=Math.min(o.count,m.start+m.count);for(let g=x,_=b;g<_;g+=3){let v=o.getX(g),E=o.getX(g+1),M=o.getX(g+2);r=Mu(this,a,e,n,u,h,p,v,E,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,b=f.length;x<b;x++){let g=f[x],_=a[g.materialIndex],v=Math.max(g.start,m.start),E=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let M=v,R=E;M<R;M+=3){let A=M,y=M+1,S=M+2;r=Mu(this,_,e,n,u,h,p,A,y,S),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let x=Math.max(0,m.start),b=Math.min(c.count,m.start+m.count);for(let g=x,_=b;g<_;g+=3){let v=g,E=g+1,M=g+2;r=Mu(this,a,e,n,u,h,p,v,E,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};l(nm,"Mesh");var vt=nm;function eS(i,e,t,n,r,s,a,o){let c;if(e.side===An?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===os,o),c===null)return null;vu.copy(o),vu.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(vu);return u<t.near||u>t.far?null:{distance:u,point:vu.clone(),object:i}}l(eS,"checkIntersection$1");function Mu(i,e,t,n,r,s,a,o,c,u){i.getVertexPosition(o,xu),i.getVertexPosition(c,_u),i.getVertexPosition(u,yu);let h=eS(i,e,t,n,xu,_u,yu,Ox);if(h){let p=new W;yr.getBarycoord(Ox,xu,_u,yu,p),r&&(h.uv=yr.getInterpolatedAttribute(r,o,c,u,p,new He)),s&&(h.uv1=yr.getInterpolatedAttribute(s,o,c,u,p,new He)),a&&(h.normal=yr.getInterpolatedAttribute(a,o,c,u,p,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:u,normal:new W,materialIndex:0};yr.getNormal(xu,_u,yu,f.normal),h.face=f,h.barycoord=p}return h}l(Mu,"checkGeometryIntersection");var im=class im extends wn{constructor(e=null,t=1,n=1,r,s,a,o,c,u=Ht,h=Ht,p,f){super(null,a,o,c,u,h,r,s,p,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};l(im,"DataTexture");var ro=im;var rm=class rm extends Mt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};l(rm,"InstancedBufferAttribute");var Er=rm;var zs=new to,tS=new He(.5,.5),Su=new W,sm=class sm{constructor(e=new Pn,t=new Pn,n=new Pn,r=new Pn,s=new Pn,a=new Pn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=si,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],u=s[3],h=s[4],p=s[5],f=s[6],m=s[7],x=s[8],b=s[9],g=s[10],_=s[11],v=s[12],E=s[13],M=s[14],R=s[15];if(r[0].setComponents(u-a,m-h,_-x,R-v).normalize(),r[1].setComponents(u+a,m+h,_+x,R+v).normalize(),r[2].setComponents(u+o,m+p,_+b,R+E).normalize(),r[3].setComponents(u-o,m-p,_-b,R-E).normalize(),n)r[4].setComponents(c,f,g,M).normalize(),r[5].setComponents(u-c,m-f,_-g,R-M).normalize();else if(r[4].setComponents(u-c,m-f,_-g,R-M).normalize(),t===si)r[5].setComponents(u+c,m+f,_+g,R+M).normalize();else if(t===Ka)r[5].setComponents(c,f,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zs)}intersectsSprite(e){zs.center.set(0,0,0);let t=tS.distanceTo(e.center);return zs.radius=.7071067811865476+t,zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Su.x=r.normal.x>0?e.max.x:e.min.x,Su.y=r.normal.y>0?e.max.y:e.min.y,Su.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Su)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};l(sm,"Frustum");var ts=sm,Bx=new bt,ph=class ph{constructor(){this.coordinateSystem=si,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let r=0;r<t.length;r++){let s=t[r];Bx.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[r]===void 0&&(n[r]=new ts),n[r].setFromProjectionMatrix(Bx,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new ts),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new ph().copy(this)}};l(ph,"FrustumArray");var Hu=ph;var am=class am extends wn{constructor(e=[],t=Ws,n,r,s,a,o,c,u,h){super(e,t,n,r,s,a,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};l(am,"CubeTexture");var vl=am,om=class om extends wn{constructor(e,t,n,r,s,a,o,c,u){super(e,t,n,r,s,a,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};l(om,"CanvasTexture");var ns=om;var lm=class lm extends wn{constructor(e,t,n=Si,r,s,a,o=Ht,c=Ht,u,h=Mr,p=1){if(h!==Mr&&h!==Rr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:p};super(f,r,s,a,o,c,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}};l(lm,"DepthTexture");var Ar=lm,cm=class cm extends Ar{constructor(e,t=Si,n=Ws,r,s,a=Ht,o=Ht,c,u=Mr){let h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,n,r,s,a,o,c,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}};l(cm,"CubeDepthTexture");var Ml=cm,um=class um extends wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};l(um,"ExternalTexture");var Sl=um,mh=class mh extends Ot{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],u=[],h=[],p=[],f=0,m=0;x("z","y","x",-1,-1,n,t,e,a,s,0),x("z","y","x",1,-1,n,t,-e,a,s,1),x("x","z","y",1,1,e,n,t,r,a,2),x("x","z","y",1,-1,e,n,-t,r,a,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new It(u,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(p,2));function x(b,g,_,v,E,M,R,A,y,S,L){let P=M/y,D=R/S,O=M/2,X=R/2,U=A/2,Y=y+1,ne=S+1,B=0,J=0,H=new W;for(let $=0;$<ne;$++){let j=$*D-X;for(let he=0;he<Y;he++){let ge=he*P-O;H[b]=ge*v,H[g]=j*E,H[_]=U,u.push(H.x,H.y,H.z),H[b]=0,H[g]=0,H[_]=A>0?1:-1,h.push(H.x,H.y,H.z),p.push(he/y),p.push(1-$/S),B+=1}}for(let $=0;$<S;$++)for(let j=0;j<y;j++){let he=f+j+Y*$,ge=f+j+Y*($+1),Q=f+(j+1)+Y*($+1),pe=f+(j+1)+Y*$;c.push(he,ge,pe),c.push(ge,Q,pe),J+=6}o.addGroup(m,J,L),m+=J,f+=B}l(x,"buildPlane")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mh(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};l(mh,"BoxGeometry");var Wi=mh;var gh=class gh extends Ot{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let u=this;r=Math.floor(r),s=Math.floor(s);let h=[],p=[],f=[],m=[],x=0,b=[],g=n/2,_=0;v(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new It(p,3)),this.setAttribute("normal",new It(f,3)),this.setAttribute("uv",new It(m,2));function v(){let M=new W,R=new W,A=0,y=(t-e)/n;for(let S=0;S<=s;S++){let L=[],P=S/s,D=P*(t-e)+e;for(let O=0;O<=r;O++){let X=O/r,U=X*c+o,Y=Math.sin(U),ne=Math.cos(U);R.x=D*Y,R.y=-P*n+g,R.z=D*ne,p.push(R.x,R.y,R.z),M.set(Y,y,ne).normalize(),f.push(M.x,M.y,M.z),m.push(X,1-P),L.push(x++)}b.push(L)}for(let S=0;S<r;S++)for(let L=0;L<s;L++){let P=b[L][S],D=b[L+1][S],O=b[L+1][S+1],X=b[L][S+1];(e>0||L!==0)&&(h.push(P,D,X),A+=3),(t>0||L!==s-1)&&(h.push(D,O,X),A+=3)}u.addGroup(_,A,0),_+=A}l(v,"generateTorso");function E(M){let R=x,A=new He,y=new W,S=0,L=M===!0?e:t,P=M===!0?1:-1;for(let O=1;O<=r;O++)p.push(0,g*P,0),f.push(0,P,0),m.push(.5,.5),x++;let D=x;for(let O=0;O<=r;O++){let U=O/r*c+o,Y=Math.cos(U),ne=Math.sin(U);y.x=L*ne,y.y=g*P,y.z=L*Y,p.push(y.x,y.y,y.z),f.push(0,P,0),A.x=Y*.5+.5,A.y=ne*.5*P+.5,m.push(A.x,A.y),x++}for(let O=0;O<r;O++){let X=R+O,U=D+O;M===!0?h.push(U,U+1,X):h.push(U+1,U,X),S+=3}u.addGroup(_,S,M===!0?1:2),_+=S}l(E,"generateCap")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};l(gh,"CylinderGeometry");var Xi=gh,xh=class xh extends Xi{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new xh(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};l(xh,"ConeGeometry");var Tr=xh,_h=class _h extends Ot{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],a=[];o(r),u(n),h(),this.setAttribute("position",new It(s,3)),this.setAttribute("normal",new It(s.slice(),3)),this.setAttribute("uv",new It(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let E=new W,M=new W,R=new W;for(let A=0;A<t.length;A+=3)m(t[A+0],E),m(t[A+1],M),m(t[A+2],R),c(E,M,R,v)}l(o,"subdivide");function c(v,E,M,R){let A=R+1,y=[];for(let S=0;S<=A;S++){y[S]=[];let L=v.clone().lerp(M,S/A),P=E.clone().lerp(M,S/A),D=A-S;for(let O=0;O<=D;O++)O===0&&S===A?y[S][O]=L:y[S][O]=L.clone().lerp(P,O/D)}for(let S=0;S<A;S++)for(let L=0;L<2*(A-S)-1;L++){let P=Math.floor(L/2);L%2===0?(f(y[S][P+1]),f(y[S+1][P]),f(y[S][P])):(f(y[S][P+1]),f(y[S+1][P+1]),f(y[S+1][P]))}}l(c,"subdivideFace");function u(v){let E=new W;for(let M=0;M<s.length;M+=3)E.x=s[M+0],E.y=s[M+1],E.z=s[M+2],E.normalize().multiplyScalar(v),s[M+0]=E.x,s[M+1]=E.y,s[M+2]=E.z}l(u,"applyRadius");function h(){let v=new W;for(let E=0;E<s.length;E+=3){v.x=s[E+0],v.y=s[E+1],v.z=s[E+2];let M=g(v)/2/Math.PI+.5,R=_(v)/Math.PI+.5;a.push(M,1-R)}x(),p()}l(h,"generateUVs");function p(){for(let v=0;v<a.length;v+=6){let E=a[v+0],M=a[v+2],R=a[v+4],A=Math.max(E,M,R),y=Math.min(E,M,R);A>.9&&y<.1&&(E<.2&&(a[v+0]+=1),M<.2&&(a[v+2]+=1),R<.2&&(a[v+4]+=1))}}l(p,"correctSeam");function f(v){s.push(v.x,v.y,v.z)}l(f,"pushVertex");function m(v,E){let M=v*3;E.x=e[M+0],E.y=e[M+1],E.z=e[M+2]}l(m,"getVertexByIndex");function x(){let v=new W,E=new W,M=new W,R=new W,A=new He,y=new He,S=new He;for(let L=0,P=0;L<s.length;L+=9,P+=6){v.set(s[L+0],s[L+1],s[L+2]),E.set(s[L+3],s[L+4],s[L+5]),M.set(s[L+6],s[L+7],s[L+8]),A.set(a[P+0],a[P+1]),y.set(a[P+2],a[P+3]),S.set(a[P+4],a[P+5]),R.copy(v).add(E).add(M).divideScalar(3);let D=g(R);b(A,P+0,v,D),b(y,P+2,E,D),b(S,P+4,M,D)}}l(x,"correctUVs");function b(v,E,M,R){R<0&&v.x===1&&(a[E]=v.x-1),M.x===0&&M.z===0&&(a[E]=R/2/Math.PI+.5)}l(b,"correctUV");function g(v){return Math.atan2(v.z,-v.x)}l(g,"azimuth");function _(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}l(_,"inclination")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _h(e.vertices,e.indices,e.radius,e.detail)}};l(_h,"PolyhedronGeometry");var Wu=_h;var yh=class yh extends Wu{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new yh(e.radius,e.detail)}};l(yh,"IcosahedronGeometry");var wl=yh;var bh=class bh extends Ot{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),u=o+1,h=c+1,p=e/o,f=t/c,m=[],x=[],b=[],g=[];for(let _=0;_<h;_++){let v=_*f-a;for(let E=0;E<u;E++){let M=E*p-s;x.push(M,-v,0),b.push(0,0,1),g.push(E/o),g.push(1-_/c)}}for(let _=0;_<c;_++)for(let v=0;v<o;v++){let E=v+u*_,M=v+u*(_+1),R=v+1+u*(_+1),A=v+1+u*_;m.push(E,M,A),m.push(M,R,A)}this.setIndex(m),this.setAttribute("position",new It(x,3)),this.setAttribute("normal",new It(b,3)),this.setAttribute("uv",new It(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bh(e.width,e.height,e.widthSegments,e.heightSegments)}};l(bh,"PlaneGeometry");var qi=bh;var vh=class vh extends Ot{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),u=0,h=[],p=new W,f=new W,m=[],x=[],b=[],g=[];for(let _=0;_<=n;_++){let v=[],E=_/n,M=a+E*o,R=e*Math.cos(M),A=Math.sqrt(e*e-R*R),y=0;_===0&&a===0?y=.5/t:_===n&&c===Math.PI&&(y=-.5/t);for(let S=0;S<=t;S++){let L=S/t,P=r+L*s;p.x=-A*Math.cos(P),p.y=R,p.z=A*Math.sin(P),x.push(p.x,p.y,p.z),f.copy(p).normalize(),b.push(f.x,f.y,f.z),g.push(L+y,1-E),v.push(u++)}h.push(v)}for(let _=0;_<n;_++)for(let v=0;v<t;v++){let E=h[_][v+1],M=h[_][v],R=h[_+1][v],A=h[_+1][v+1];(_!==0||a>0)&&m.push(E,M,A),(_!==n-1||c<Math.PI)&&m.push(M,R,A)}this.setIndex(m),this.setAttribute("position",new It(x,3)),this.setAttribute("normal",new It(b,3)),this.setAttribute("uv",new It(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};l(vh,"SphereGeometry");var is=vh;var Mh=class Mh extends Ot{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let c=[],u=[],h=[],p=[],f=new W,m=new W,x=new W;for(let b=0;b<=n;b++){let g=a+b/n*o;for(let _=0;_<=r;_++){let v=_/r*s;m.x=(e+t*Math.cos(g))*Math.cos(v),m.y=(e+t*Math.cos(g))*Math.sin(v),m.z=t*Math.sin(g),u.push(m.x,m.y,m.z),f.x=e*Math.cos(v),f.y=e*Math.sin(v),x.subVectors(m,f).normalize(),h.push(x.x,x.y,x.z),p.push(_/r),p.push(b/n)}}for(let b=1;b<=n;b++)for(let g=1;g<=r;g++){let _=(r+1)*b+g-1,v=(r+1)*(b-1)+g-1,E=(r+1)*(b-1)+g,M=(r+1)*b+g;c.push(_,v,M),c.push(v,E,M)}this.setIndex(c),this.setAttribute("position",new It(u,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};l(Mh,"TorusGeometry");var Cr=Mh;function Ys(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(kx(r))r.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(kx(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}l(Ys,"cloneUniforms");function mn(i){let e={};for(let t=0;t<i.length;t++){let n=Ys(i[t]);for(let r in n)e[r]=n[r]}return e}l(mn,"mergeUniforms");function kx(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}l(kx,"isThreeObject");function nS(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}l(nS,"cloneUniformsGroups");function Ep(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}l(Ep,"getUnlitUniformColorSpace");var $s={clone:Ys,merge:mn},iS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hm=class hm extends Sr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iS,this.fragmentShader=rS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=nS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Be().setHex(r.value);break;case"v2":this.uniforms[n].value=new He().fromArray(r.value);break;case"v3":this.uniforms[n].value=new W().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Nt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Ze().fromArray(r.value);break;case"m4":this.uniforms[n].value=new bt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}};l(hm,"ShaderMaterial");var En=hm,dm=class dm extends En{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};l(dm,"RawShaderMaterial");var Xu=dm,fm=class fm extends Sr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ud,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};l(fm,"MeshStandardMaterial");var Mi=fm;var pm=class pm extends Sr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=m_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};l(pm,"MeshDepthMaterial");var qu=pm,mm=class mm extends Sr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};l(mm,"MeshDistanceMaterial");var Yu=mm;function Wa(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}l(Wa,"convertArray");function wu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}l(wu,"hasTangents");var gm=class gm{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}};l(gm,"Interpolant");var rs=gm,xm=class xm extends rs{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yf,endingEnd:Yf}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case $f:s=e,o=2*t-n;break;case Zf:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case $f:a=e,c=2*n-t;break;case Zf:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}let u=(n-t)*.5,h=this.valueSize;this._weightPrev=u/(t-o),this._weightNext=u/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=this._offsetPrev,p=this._offsetNext,f=this._weightPrev,m=this._weightNext,x=(n-t)/(r-t),b=x*x,g=b*x,_=-f*g+2*f*b-f*x,v=(1+f)*g+(-1.5-2*f)*b+(-.5+f)*x+1,E=(-1-m)*g+(1.5+m)*b+.5*x,M=m*g-m*b;for(let R=0;R!==o;++R)s[R]=_*a[h+R]+v*a[u+R]+E*a[c+R]+M*a[p+R];return s}};l(xm,"CubicInterpolant");var $u=xm,_m=class _m extends rs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=(n-t)/(r-t),p=1-h;for(let f=0;f!==o;++f)s[f]=a[u+f]*p+a[c+f]*h;return s}};l(_m,"LinearInterpolant");var Zu=_m,ym=class ym extends rs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}};l(ym,"DiscreteInterpolant");var Ju=ym,bm=class bm extends rs{interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let x=(n-t)/(r-t),b=1-x;for(let g=0;g!==o;++g)s[g]=a[u+g]*b+a[c+g]*x;return s}let f=o*2,m=e-1;for(let x=0;x!==o;++x){let b=a[u+x],g=a[c+x],_=m*f+x*2,v=p[_],E=p[_+1],M=e*f+x*2,R=h[M],A=h[M+1],y=aS(n,t,v,R,r);s[x]=L_(y,b,E,A,g)}return s}};l(bm,"BezierInterpolant");var Ku=bm;function L_(i,e,t,n,r){let s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}l(L_,"cubicBezier");function sS(i,e,t,n,r){let s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}l(sS,"cubicBezierSlope");function aS(i,e,t,n,r){let s=(i-e)/(r-e);for(let a=0;a<8;a++){let o=L_(s,e,t,n,r)-i;if(Math.abs(o)<1e-10)break;let c=sS(s,e,t,n,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}l(aS,"solveBezierParameter");var vm=class vm{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wa(t,this.TimeBufferType),this.values=Wa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Wa(e.times,Array),values:Wa(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),wu(e.settings)&&(n.settings={inTangents:Wa(e.settings.inTangents,Array),outTangents:Wa(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ju(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Zu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $u(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ku(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ul:t=this.InterpolantFactoryMethodDiscrete;break;case Ou:t=this.InterpolantFactoryMethodLinear;break;case Tu:t=this.InterpolantFactoryMethodSmooth;break;case qf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ye("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ul;case this.InterpolantFactoryMethodLinear:return Ou;case this.InterpolantFactoryMethodSmooth:return Tu;case this.InterpolantFactoryMethodBezier:return qf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;wu(this.settings)&&(zx(this.settings.inTangents,e),zx(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;wu(this.settings)&&(Gx(this.settings.inTangents,e),Gx(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&($e("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&($e("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){$e("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){$e("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&DM(r))for(let o=0,c=r.length;o!==c;++o){let u=r[o];if(isNaN(u)){$e("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Tu,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,u=e[o],h=e[o+1];if(u!==h&&(o!==1||u!==e[0]))if(r)c=!0;else{let p=o*n,f=p-n,m=p+n;for(let x=0;x!==n;++x){let b=t[p+x];if(b!==t[f+x]||b!==t[m+x]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let p=o*n,f=a*n;for(let m=0;m!==n;++m)t[f+m]=t[p+m]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,u=0;u!==n;++u)t[c+u]=t[o+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,wu(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};l(vm,"KeyframeTrack");var zn=vm;function zx(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}l(zx,"shiftTangentTimes");function Gx(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}l(Gx,"scaleTangentTimes");zn.prototype.ValueTypeName="";zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=Ou;var Mm=class Mm extends zn{constructor(e,t,n){super(e,t,n)}};l(Mm,"BooleanKeyframeTrack");var ss=Mm;ss.prototype.ValueTypeName="bool";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=ul;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Sm=class Sm extends zn{constructor(e,t,n,r){super(e,t,n,r)}};l(Sm,"ColorKeyframeTrack");var ju=Sm;ju.prototype.ValueTypeName="color";var wm=class wm extends zn{constructor(e,t,n,r){super(e,t,n,r)}};l(wm,"NumberKeyframeTrack");var Qu=wm;Qu.prototype.ValueTypeName="number";var Em=class Em extends rs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t),u=e*o;for(let h=u+o;u!==h;u+=4)Sn.slerpFlat(s,0,a,u-o,a,u,c);return s}};l(Em,"QuaternionLinearInterpolant");var eh=Em,Am=class Am extends zn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new eh(this.times,this.values,this.getValueSize(),e)}};l(Am,"QuaternionKeyframeTrack");var El=Am;El.prototype.ValueTypeName="quaternion";El.prototype.InterpolantFactoryMethodSmooth=void 0;var Tm=class Tm extends zn{constructor(e,t,n){super(e,t,n)}};l(Tm,"StringKeyframeTrack");var as=Tm;as.prototype.ValueTypeName="string";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=ul;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var Cm=class Cm extends zn{constructor(e,t,n,r){super(e,t,n,r)}};l(Cm,"VectorKeyframeTrack");var th=Cm;th.prototype.ValueTypeName="vector";var Rm=class Rm{constructor(e,t,n){let r=this,s=!1,a=0,o=0,c,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,p){return u.push(h,p),this},this.removeHandler=function(h){let p=u.indexOf(h);return p!==-1&&u.splice(p,2),this},this.getHandler=function(h){for(let p=0,f=u.length;p<f;p+=2){let m=u[p],x=u[p+1];if(m.global&&(m.lastIndex=0),m.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}};l(Rm,"LoadingManager");var nh=Rm,D_=new nh,Pm=class Pm{constructor(e){this.manager=e!==void 0?e:D_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};l(Pm,"Loader");var ih=Pm;ih.DEFAULT_MATERIAL_NAME="__DEFAULT";var Im=class Im extends on{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};l(Im,"Light");var Al=Im,Lm=class Lm extends Al{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}};l(Lm,"HemisphereLight");var Tl=Lm,Xf=new bt,Vx=new W,Hx=new W,Dm=class Dm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=pn,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ts,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Vx.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vx),Hx.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hx),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Xf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Xf,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,u=r?r.y/s.y:0;e.coordinateSystem===Ka||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),t.multiply(Xf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};l(Dm,"LightShadow");var rh=Dm,Eu=new W,Au=new Sn,zi=new W,Nm=class Nm extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Eu,Au,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Eu,Au,zi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Eu,Au,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Eu,Au,zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};l(Nm,"Camera");var Cl=Nm,Jr=new W,Wx=new He,Xx=new He,Um=class Um extends Cl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Bu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Sf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bu*2*Math.atan(Math.tan(Sf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Jr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jr.x,Jr.y).multiplyScalar(-e/Jr.z),Jr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jr.x,Jr.y).multiplyScalar(-e/Jr.z)}getViewSize(e,t){return this.getViewBounds(e,Wx,Xx),t.subVectors(Xx,Wx)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Sf*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/u,r*=a.width/c,n*=a.height/u}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};l(Um,"PerspectiveCamera");var Mn=Um;var Fm=class Fm extends Cl{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};l(Fm,"OrthographicCamera");var Rl=Fm,Om=class Om extends rh{constructor(){super(new Rl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};l(Om,"DirectionalLightShadow");var Jf=Om,Bm=class Bm extends Al{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new Jf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};l(Bm,"DirectionalLight");var Pl=Bm;var km=class km extends Ot{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};l(km,"InstancedBufferGeometry");var Il=km;var Xa=-90,qa=1,zm=class zm extends on{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Mn(Xa,qa,e,t);r.layers=this.layers,this.add(r);let s=new Mn(Xa,qa,e,t);s.layers=this.layers,this.add(s);let a=new Mn(Xa,qa,e,t);a.layers=this.layers,this.add(a);let o=new Mn(Xa,qa,e,t);o.layers=this.layers,this.add(o);let c=new Mn(Xa,qa,e,t);c.layers=this.layers,this.add(c);let u=new Mn(Xa,qa,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(let u of t)this.remove(u);if(e===si)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ka)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,u,h]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.mipmapsAutoUpdate=b,e.setRenderTarget(n,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,f,m),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}};l(zm,"CubeCamera");var so=zm,Gm=class Gm extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};l(Gm,"ArrayCamera");var sh=Gm;var Ap="\\[\\]\\.:\\/",oS=new RegExp("["+Ap+"]","g"),Tp="[^"+Ap+"]",lS="[^"+Ap.replace("\\.","")+"]",cS=/((?:WC+[\/:])*)/.source.replace("WC",Tp),uS=/(WCOD+)?/.source.replace("WCOD",lS),hS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tp),dS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tp),fS=new RegExp("^"+cS+uS+hS+dS+"$"),pS=["material","materials","bones","map"],Vm=class Vm{constructor(e,t,n){let r=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}};l(Vm,"Composite");var Kf=Vm,jr=class jr{constructor(e,t,n){this.path=t,this.parsedPath=n||jr.parseTrackName(t),this.node=jr.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new jr.Composite(e,t,n):new jr(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(oS,"")}static parseTrackName(e){let t=fS.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);pS.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=l(function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},"searchNodeSubtree"),r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=jr.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){$e("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){$e("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){$e("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){$e("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){$e("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let a=e[r];if(a===void 0){let u=t.nodeName;$e("PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};l(jr,"PropertyBinding");var Pt=jr;Pt.Composite=Kf;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var S2=new Float32Array(1);var Sh=class Sh{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};l(Sh,"Matrix2"),Sh.prototype.isMatrix2=!0;var jf=Sh;function Cp(i,e,t,n){let r=mS(n);switch(t){case xp:return i*e;case yp:return i*e/r.components*r.byteLength;case Ih:return i*e/r.components*r.byteLength;case $i:return i*e*2/r.components*r.byteLength;case Lh:return i*e*2/r.components*r.byteLength;case _p:return i*e*3/r.components*r.byteLength;case Hn:return i*e*4/r.components*r.byteLength;case Dh:return i*e*4/r.components*r.byteLength;case Ul:case Fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ol:case Bl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uh:case Oh:return Math.max(i,16)*Math.max(e,8)/4;case Nh:case Fh:return Math.max(i,8)*Math.max(e,8)/2;case Bh:case kh:case Gh:case Vh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case zh:case kl:case Hh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case qh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case $h:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Jh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Kh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case jh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ed:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case td:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case nd:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case id:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case rd:case sd:case ad:return Math.ceil(i/4)*Math.ceil(e/4)*16;case od:case ld:return Math.ceil(i/4)*Math.ceil(e/4)*8;case zl:case cd:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}l(Cp,"getByteLength");function mS(i){switch(i){case pn:case fp:return{byteLength:1,components:1};case co:case pp:case Vn:return{byteLength:2,components:1};case Rh:case Ph:return{byteLength:2,components:4};case Si:case Ch:case wi:return{byteLength:4,components:1};case mp:case gp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}l(mS,"getTextureTypeByteLength");typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function ty(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return l(r,"onAnimationFrame"),{start:l(function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},"start"),stop:l(function(){i!==null&&i.cancelAnimationFrame(n),e=!1},"stop"),setAnimationLoop:l(function(s){t=s},"setAnimationLoop"),setContext:l(function(s){i=s},"setContext")}}l(ty,"WebGLAnimation");function vS(i){let e=new WeakMap;function t(o,c){let u=o.array,h=o.usage,p=u.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,u,h),o.onUploadCallback();let m;if(u instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=i.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=i.SHORT;else if(u instanceof Uint32Array)m=i.UNSIGNED_INT;else if(u instanceof Int32Array)m=i.INT;else if(u instanceof Int8Array)m=i.BYTE;else if(u instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}l(t,"createBuffer");function n(o,c,u){let h=c.array,p=c.updateRanges;if(i.bindBuffer(u,o),p.length===0)i.bufferSubData(u,0,h);else{p.sort((m,x)=>m.start-x.start);let f=0;for(let m=1;m<p.length;m++){let x=p[f],b=p[m];b.start<=x.start+x.count+1?x.count=Math.max(x.count,b.start+b.count-x.start):(++f,p[f]=b)}p.length=f+1;for(let m=0,x=p.length;m<x;m++){let b=p[m];i.bufferSubData(u,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}l(n,"updateBuffer");function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}l(r,"get");function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}l(s,"remove");function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=e.get(o);if(u===void 0)e.set(o,t(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,c),u.version=o.version}}return l(a,"update"),{get:r,remove:s,update:a}}l(vS,"WebGLAttributes");var MS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SS=`#ifdef USE_ALPHAHASH
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
#endif`,wS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ES=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,TS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CS=`#ifdef USE_AOMAP
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
#endif`,RS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PS=`#ifdef USE_BATCHING
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
#endif`,IS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,LS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,DS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,NS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,US=`#ifdef USE_IRIDESCENCE
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
#endif`,FS=`#ifdef USE_BUMPMAP
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
#endif`,OS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,BS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,VS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,HS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,WS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,XS=`#define PI 3.141592653589793
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
} // validated`,qS=`vec3 transformedNormal = objectNormal;
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
#endif`,YS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$S=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ZS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KS="gl_FragColor = linearToOutputTexel( gl_FragColor );",jS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,QS=`#ifdef USE_ENVMAP
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
#endif`,ew=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,tw=`#ifdef USE_ENVMAP
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
#endif`,nw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iw=`#ifdef USE_ENVMAP
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
#endif`,rw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ow=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lw=`#ifdef USE_GRADIENTMAP
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
}`,cw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dw=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,fw=`#ifdef USE_ENVMAP
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
#endif`,pw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_w=`PhysicalMaterial material;
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
#endif`,yw=`uniform sampler2D dfgLUT;
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
}`,bw=`
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
#endif`,vw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sw=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,ww=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ew=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Aw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Iw=`#if defined( USE_POINTS_UV )
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
#endif`,Lw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Uw=`#if defined( USE_MORPHCOLORS )
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
#endif`,Fw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ow=`#ifdef USE_MORPHTARGETS
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
#endif`,Bw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ww=`#ifdef USE_NORMALMAP
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
#endif`,Xw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$w=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,e1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,t1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,i1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,s1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,a1=`float getShadowMask() {
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
}`,o1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,l1=`#ifdef USE_SKINNING
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
#endif`,c1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,u1=`#ifdef USE_SKINNING
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
#endif`,h1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,d1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,m1=`#ifdef USE_TRANSMISSION
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
#endif`,g1=`#ifdef USE_TRANSMISSION
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
#endif`,x1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,v1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,M1=`uniform sampler2D t2D;
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
}`,S1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w1=`uniform float backgroundBlurriness;
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
}`,E1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T1=`#include <common>
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
}`,C1=`#if DEPTH_PACKING == 3200
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
}`,R1=`#define DISTANCE
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
}`,P1=`#define DISTANCE
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
}`,I1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D1=`uniform float scale;
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
}`,N1=`uniform vec3 diffuse;
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
}`,U1=`#include <common>
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
}`,F1=`uniform vec3 diffuse;
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
}`,O1=`#define LAMBERT
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
}`,B1=`#define LAMBERT
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
}`,k1=`#define MATCAP
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
}`,z1=`#define MATCAP
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
}`,G1=`#define NORMAL
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
}`,V1=`#define NORMAL
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
}`,H1=`#define PHONG
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
}`,W1=`#define PHONG
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
}`,X1=`#define STANDARD
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
}`,q1=`#define STANDARD
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
}`,Y1=`#define TOON
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
}`,$1=`#define TOON
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
}`,Z1=`uniform float size;
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
}`,J1=`uniform vec3 diffuse;
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
}`,K1=`#include <common>
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
}`,j1=`uniform vec3 color;
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
}`,Q1=`uniform float rotation;
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
}`,eE=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:MS,alphahash_pars_fragment:SS,alphamap_fragment:wS,alphamap_pars_fragment:ES,alphatest_fragment:AS,alphatest_pars_fragment:TS,aomap_fragment:CS,aomap_pars_fragment:RS,batching_pars_vertex:PS,batching_vertex:IS,begin_vertex:LS,beginnormal_vertex:DS,bsdfs:NS,iridescence_fragment:US,bumpmap_pars_fragment:FS,clipping_planes_fragment:OS,clipping_planes_pars_fragment:BS,clipping_planes_pars_vertex:kS,clipping_planes_vertex:zS,color_fragment:GS,color_pars_fragment:VS,color_pars_vertex:HS,color_vertex:WS,common:XS,defaultnormal_vertex:qS,displacementmap_pars_vertex:YS,displacementmap_vertex:$S,emissivemap_fragment:ZS,emissivemap_pars_fragment:JS,colorspace_fragment:KS,colorspace_pars_fragment:jS,envmap_fragment:QS,envmap_common_pars_fragment:ew,envmap_pars_fragment:tw,envmap_pars_vertex:nw,envmap_physical_pars_fragment:fw,envmap_vertex:iw,fog_vertex:rw,fog_pars_vertex:sw,fog_fragment:aw,fog_pars_fragment:ow,gradientmap_pars_fragment:lw,lightmap_pars_fragment:cw,lights_lambert_fragment:uw,lights_lambert_pars_fragment:hw,lights_pars_begin:dw,lights_toon_fragment:pw,lights_toon_pars_fragment:mw,lights_phong_fragment:gw,lights_phong_pars_fragment:xw,lights_physical_fragment:_w,lights_physical_pars_fragment:yw,lights_fragment_begin:bw,lights_fragment_maps:vw,lights_fragment_end:Mw,lightprobes_pars_fragment:Sw,logdepthbuf_fragment:ww,logdepthbuf_pars_fragment:Ew,logdepthbuf_pars_vertex:Aw,logdepthbuf_vertex:Tw,map_fragment:Cw,map_pars_fragment:Rw,map_particle_fragment:Pw,map_particle_pars_fragment:Iw,metalnessmap_fragment:Lw,metalnessmap_pars_fragment:Dw,morphinstance_vertex:Nw,morphcolor_vertex:Uw,morphnormal_vertex:Fw,morphtarget_pars_vertex:Ow,morphtarget_vertex:Bw,normal_fragment_begin:kw,normal_fragment_maps:zw,normal_pars_fragment:Gw,normal_pars_vertex:Vw,normal_vertex:Hw,normalmap_pars_fragment:Ww,clearcoat_normal_fragment_begin:Xw,clearcoat_normal_fragment_maps:qw,clearcoat_pars_fragment:Yw,iridescence_pars_fragment:$w,opaque_fragment:Zw,packing:Jw,premultiplied_alpha_fragment:Kw,project_vertex:jw,dithering_fragment:Qw,dithering_pars_fragment:e1,roughnessmap_fragment:t1,roughnessmap_pars_fragment:n1,shadowmap_pars_fragment:i1,shadowmap_pars_vertex:r1,shadowmap_vertex:s1,shadowmask_pars_fragment:a1,skinbase_vertex:o1,skinning_pars_vertex:l1,skinning_vertex:c1,skinnormal_vertex:u1,specularmap_fragment:h1,specularmap_pars_fragment:d1,tonemapping_fragment:f1,tonemapping_pars_fragment:p1,transmission_fragment:m1,transmission_pars_fragment:g1,uv_pars_fragment:x1,uv_pars_vertex:_1,uv_vertex:y1,worldpos_vertex:b1,background_vert:v1,background_frag:M1,backgroundCube_vert:S1,backgroundCube_frag:w1,cube_vert:E1,cube_frag:A1,depth_vert:T1,depth_frag:C1,distance_vert:R1,distance_frag:P1,equirect_vert:I1,equirect_frag:L1,linedashed_vert:D1,linedashed_frag:N1,meshbasic_vert:U1,meshbasic_frag:F1,meshlambert_vert:O1,meshlambert_frag:B1,meshmatcap_vert:k1,meshmatcap_frag:z1,meshnormal_vert:G1,meshnormal_frag:V1,meshphong_vert:H1,meshphong_frag:W1,meshphysical_vert:X1,meshphysical_frag:q1,meshtoon_vert:Y1,meshtoon_frag:$1,points_vert:Z1,points_frag:J1,shadow_vert:K1,shadow_frag:j1,sprite_vert:Q1,sprite_frag:eE},Pe={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Ji={basic:{uniforms:mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:mn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:mn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Be(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:mn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:mn([Pe.points,Pe.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:mn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:mn([Pe.common,Pe.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:mn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:mn([Pe.sprite,Pe.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distance:{uniforms:mn([Pe.common,Pe.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distance_vert,fragmentShader:st.distance_frag},shadow:{uniforms:mn([Pe.lights,Pe.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Ji.physical={uniforms:mn([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var dd={r:0,b:0,g:0},tE=new bt,ny=new Ze;ny.set(-1,0,0,0,1,0,0,0,1);function nE(i,e,t,n,r,s){let a=new Be(0),o=r===!0?0:1,c,u,h=null,p=0,f=null;function m(v){let E=v.isScene===!0?v.background:null;if(E&&E.isTexture){let M=v.backgroundBlurriness>0;E=e.get(E,M)}return E}l(m,"getBackground");function x(v){let E=!1,M=m(v);M===null?g(a,o):M&&M.isColor&&(g(M,1),E=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}l(x,"render");function b(v,E){let M=m(E);M&&M.isCubeTexture?(u===void 0&&(u=new vt(new Wi(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:Ys(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:l(function(){return this.uniforms.envMap.value},"get")}),n.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(tE.makeRotationFromEuler(E.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(ny),u.material.toneMapped=dt.getTransfer(M.colorSpace)!==_t,(h!==M||p!==M.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=M,p=M.version,f=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new vt(new qi(2,2),new En({name:"BackgroundMaterial",uniforms:Ys(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:l(function(){return this.uniforms.t2D.value},"get")}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=dt.getTransfer(M.colorSpace)!==_t,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||p!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,p=M.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}l(b,"addToRenderList");function g(v,E){v.getRGB(dd,Ep(i)),t.buffers.color.setClear(dd.r,dd.g,dd.b,E,s)}l(g,"setClear");function _(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return l(_,"dispose"),{getClearColor:l(function(){return a},"getClearColor"),setClearColor:l(function(v,E=1){a.set(v),o=E,g(a,o)},"setClearColor"),getClearAlpha:l(function(){return o},"getClearAlpha"),setClearAlpha:l(function(v){o=v,g(a,o)},"setClearAlpha"),render:x,addToRenderList:b,dispose:_}}l(nE,"WebGLBackground");function iE(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,a=!1;function o(D,O,X,U,Y){let ne=!1,B=p(D,U,X,O);s!==B&&(s=B,u(s.object)),ne=m(D,U,X,Y),ne&&x(D,U,X,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(ne||a)&&(a=!1,M(D,O,X,U),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}l(o,"setup");function c(){return i.createVertexArray()}l(c,"createVertexArrayObject");function u(D){return i.bindVertexArray(D)}l(u,"bindVertexArrayObject");function h(D){return i.deleteVertexArray(D)}l(h,"deleteVertexArrayObject");function p(D,O,X,U){let Y=U.wireframe===!0,ne=n[O.id];ne===void 0&&(ne={},n[O.id]=ne);let B=D.isInstancedMesh===!0?D.id:0,J=ne[B];J===void 0&&(J={},ne[B]=J);let H=J[X.id];H===void 0&&(H={},J[X.id]=H);let $=H[Y];return $===void 0&&($=f(c()),H[Y]=$),$}l(p,"getBindingState");function f(D){let O=[],X=[],U=[];for(let Y=0;Y<t;Y++)O[Y]=0,X[Y]=0,U[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:X,attributeDivisors:U,object:D,attributes:{},index:null}}l(f,"createBindingState");function m(D,O,X,U){let Y=s.attributes,ne=O.attributes,B=0,J=X.getAttributes();for(let H in J)if(J[H].location>=0){let j=Y[H],he=ne[H];if(he===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(he=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(he=D.instanceColor)),j===void 0||j.attribute!==he||he&&j.data!==he.data)return!0;B++}return s.attributesNum!==B||s.index!==U}l(m,"needsUpdate");function x(D,O,X,U){let Y={},ne=O.attributes,B=0,J=X.getAttributes();for(let H in J)if(J[H].location>=0){let j=ne[H];j===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(j=D.instanceColor));let he={};he.attribute=j,j&&j.data&&(he.data=j.data),Y[H]=he,B++}s.attributes=Y,s.attributesNum=B,s.index=U}l(x,"saveCache");function b(){let D=s.newAttributes;for(let O=0,X=D.length;O<X;O++)D[O]=0}l(b,"initAttributes");function g(D){_(D,0)}l(g,"enableAttribute");function _(D,O){let X=s.newAttributes,U=s.enabledAttributes,Y=s.attributeDivisors;X[D]=1,U[D]===0&&(i.enableVertexAttribArray(D),U[D]=1),Y[D]!==O&&(i.vertexAttribDivisor(D,O),Y[D]=O)}l(_,"enableAttributeAndDivisor");function v(){let D=s.newAttributes,O=s.enabledAttributes;for(let X=0,U=O.length;X<U;X++)O[X]!==D[X]&&(i.disableVertexAttribArray(X),O[X]=0)}l(v,"disableUnusedAttributes");function E(D,O,X,U,Y,ne,B){B===!0?i.vertexAttribIPointer(D,O,X,Y,ne):i.vertexAttribPointer(D,O,X,U,Y,ne)}l(E,"vertexAttribPointer");function M(D,O,X,U){b();let Y=U.attributes,ne=X.getAttributes(),B=O.defaultAttributeValues;for(let J in ne){let H=ne[J];if(H.location>=0){let $=Y[J];if($===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&($=D.instanceColor)),$!==void 0){let j=$.normalized,he=$.itemSize,ge=e.get($);if(ge===void 0)continue;let Q=ge.buffer,pe=ge.type,le=ge.bytesPerElement,de=pe===i.INT||pe===i.UNSIGNED_INT||$.gpuType===Ch;if($.isInterleavedBufferAttribute){let ue=$.data,ee=ue.isInterleavedBuffer===!0?ue.stride:ue.itemSize,me=$.offset;if(ue.isInstancedInterleavedBuffer||ue.isInstancedBufferAttribute){for(let ie=0;ie<H.locationSize;ie++)_(H.location+ie,ue.meshPerAttribute);D.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ie=0;ie<H.locationSize;ie++)g(H.location+ie);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let ie=0;ie<H.locationSize;ie++)E(H.location+ie,he/H.locationSize,pe,j,ee*le,(me+he/H.locationSize*ie)*le,de)}else{if($.isInstancedBufferAttribute){for(let ue=0;ue<H.locationSize;ue++)_(H.location+ue,$.meshPerAttribute);D.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ue=0;ue<H.locationSize;ue++)g(H.location+ue);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let ue=0;ue<H.locationSize;ue++)E(H.location+ue,he/H.locationSize,pe,j,he*le,he/H.locationSize*ue*le,de)}}else if(B!==void 0){let j=B[J];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(H.location,j);break;case 3:i.vertexAttrib3fv(H.location,j);break;case 4:i.vertexAttrib4fv(H.location,j);break;default:i.vertexAttrib1fv(H.location,j)}}}}v()}l(M,"setupVertexAttributes");function R(){L();for(let D in n){let O=n[D];for(let X in O){let U=O[X];for(let Y in U){let ne=U[Y];for(let B in ne)h(ne[B].object),delete ne[B];delete U[Y]}}delete n[D]}}l(R,"dispose");function A(D){if(n[D.id]===void 0)return;let O=n[D.id];for(let X in O){let U=O[X];for(let Y in U){let ne=U[Y];for(let B in ne)h(ne[B].object),delete ne[B];delete U[Y]}}delete n[D.id]}l(A,"releaseStatesOfGeometry");function y(D){for(let O in n){let X=n[O];for(let U in X){let Y=X[U];if(Y[D.id]===void 0)continue;let ne=Y[D.id];for(let B in ne)h(ne[B].object),delete ne[B];delete Y[D.id]}}}l(y,"releaseStatesOfProgram");function S(D){for(let O in n){let X=n[O],U=D.isInstancedMesh===!0?D.id:0,Y=X[U];if(Y!==void 0){for(let ne in Y){let B=Y[ne];for(let J in B)h(B[J].object),delete B[J];delete Y[ne]}delete X[U],Object.keys(X).length===0&&delete n[O]}}}l(S,"releaseStatesOfObject");function L(){P(),a=!0,s!==r&&(s=r,u(s.object))}l(L,"reset");function P(){r.geometry=null,r.program=null,r.wireframe=!1}return l(P,"resetDefaultState"),{setup:o,reset:L,resetDefaultState:P,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfObject:S,releaseStatesOfProgram:y,initAttributes:b,enableAttribute:g,disableUnusedAttributes:v}}l(iE,"WebGLBindingStates");function rE(i,e,t){let n;function r(c){n=c}l(r,"setMode");function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}l(s,"render");function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}l(a,"renderInstances");function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];t.update(f,n,1)}l(o,"renderMultiDraw"),this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}l(rE,"WebGLBufferRenderer");function sE(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let y=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}l(s,"getMaxAnisotropy");function a(y){return!(y!==Hn&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}l(a,"textureFormatReadable");function o(y){let S=y===Vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==pn&&y!==wi&&!S&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}l(o,"textureTypeReadable");function c(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}l(c,"getMaxPrecision");let u=t.precision!==void 0?t.precision:"highp",h=c(u);h!==u&&(Ye("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);let p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&p===!1;t.reversedDepthBuffer===!0&&p===!1&&Ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&p===!0&&Ye("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:x,maxTextureSize:b,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:M,maxSamples:R,samples:A}}l(sE,"WebGLCapabilities");function aE(i){let e=this,t=null,n=0,r=!1,s=!1,a=new Pn,o=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){let m=p.length!==0||f||n!==0||r;return r=f,n=p.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){t=h(p,f,0)},this.setState=function(p,f,m){let x=p.clippingPlanes,b=p.clipIntersection,g=p.clipShadows,_=i.get(p);if(!r||x===null||x.length===0||s&&!g)s?h(null):u();else{let v=s?0:n,E=v*4,M=_.clippingState||null;c.value=M,M=h(x,f,E,m);for(let R=0;R!==E;++R)M[R]=t[R];_.clippingState=M,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}l(u,"resetGlobalState");function h(p,f,m,x){let b=p!==null?p.length:0,g=null;if(b!==0){if(g=c.value,x!==!0||g===null){let _=m+b*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<_)&&(g=new Float32Array(_));for(let E=0,M=m;E!==b;++E,M+=4)a.copy(p[E]).applyMatrix4(v,o),a.normal.toArray(g,M),g[M+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}l(h,"projectPlanes")}l(aE,"WebGLClipping");var Qm=class Qm extends Bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new vl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Wi(5,5,5),s=new En({name:"CubemapFromEquirect",uniforms:Ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:An,blending:Vs});s.uniforms.tEquirect.value=t;let a=new vt(r,s),o=t.minFilter;return t.minFilter===Gn&&(t.minFilter=Wt),new so(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}};l(Qm,"WebGLCubeRenderTarget");var Hl=Qm,N_=256,oE=3,lE=20,iy=256,ry=16,cE=3,uE=new W,hE=new Be,gd=class gd{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new so(1,10,null),this._boxMesh=new vt(new Wi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=uE}=s,c=this._renderer;this._setSize(a);let u=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let p=c.autoClear,f=c.autoClearColor,m=c.autoClearDepth,x=c.autoClearStencil,b=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,b===null&&(e.background=c.getClearColor(hE));let g=new so(n,r,h);return g.position.copy(o),g.update(c,e),c.autoClear=p,c.autoClearColor=f,c.autoClearDepth=m,c.autoClearStencil=x,e.background=b,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(u,t)),this._applyPMREM(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=O_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=F_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(N_,T_(e))}_fromTexture(e,t){e.mapping===Ws||e.mapping===lo?this._setSize(e.image.length===0?N_:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=U_(e,!1,!1),n=Math.log2(e)-oE;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=U_(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,s=this._cubeCamera;r.material=n,s.renderTarget=e,s.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ws||e.mapping===lo?(this._cubemapMaterial===null&&(this._cubemapMaterial=O_()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=F_()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=dE(),this._integrationMaterial=fE());let t=this._cubeSize,n=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/ry);for(let a=0;a<=n;a++){let o=gd.lodToRoughness(a,n);if(a>n-cE)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(iy*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=pE());let n=this._blurMaterial,r=n.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(s,0,n)}};l(gd,"PMREMGenerator");var pd=gd;function U_(i,e,t){return new Hl(i,{minFilter:Gn,generateMipmaps:e,type:Vn,colorSpace:hl,depthBuffer:t})}l(U_,"_createRenderTarget");function Wl(i,e,t){return new En({name:i,uniforms:e,vertexShader:st.cube_vert,fragmentShader:t,side:An,blending:Vs,depthTest:!1,depthWrite:!1})}l(Wl,"_getMaterial");function dE(){return Wl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${iy}u

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
	`)}l(dE,"_getGGXMaterial");function fE(){return Wl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ry}},`

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
	`)}l(fE,"_getIntegrationMaterial");function pE(){return Wl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${lE}
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
	`)}l(pE,"_getBlurMaterial");function F_(){return Wl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}l(F_,"_getEquirectMaterial");function O_(){return Wl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}l(O_,"_getCubemapMaterial");function mE(i){let e=new WeakMap,t=new WeakMap,n=null;function r(f,m=!1){return f==null?null:m?a(f):s(f)}l(r,"get");function s(f){if(f&&f.isTexture){let m=f.mapping;if(m===Eh||m===Ah)if(e.has(f)){let x=e.get(f).texture;return o(x,f.mapping)}else{let x=f.image;if(x&&x.height>0){let b=new Hl(x.height);return b.fromEquirectangularTexture(i,f),e.set(f,b),f.addEventListener("dispose",u),o(b.texture,f.mapping)}else return null}}return f}l(s,"getCube");function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let m=f.mapping,x=m===Eh||m===Ah,b=m===Ws||m===lo;if(x||b){let g=t.get(f),_=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return n===null&&(n=new pd(i)),g=x?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{let v=f.image;return x&&v&&v.height>0||b&&v&&c(v)?(n===null&&(n=new pd(i)),g=x?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}l(a,"getPMREM");function o(f,m){return m===Eh?f.mapping=Ws:m===Ah&&(f.mapping=lo),f}l(o,"mapTextureMapping");function c(f){let m=0,x=6;for(let b=0;b<x;b++)f[b]!==void 0&&m++;return m===x}l(c,"isCubeTextureComplete");function u(f){let m=f.target;m.removeEventListener("dispose",u);let x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}l(u,"onCubemapDispose");function h(f){let m=f.target;m.removeEventListener("dispose",h);let x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}l(h,"onPMREMDispose");function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return l(p,"dispose"),{get:r,dispose:p}}l(mE,"WebGLEnvironments");function gE(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return l(t,"getExtension"),{has:l(function(n){return t(n)!==null},"has"),init:l(function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},"init"),get:l(function(n){let r=t(n);return r===null&&ll("WebGLRenderer: "+n+" extension not supported."),r},"get")}}l(gE,"WebGLExtensions");function xE(i,e,t,n){let r={},s=new WeakMap,a=new FinalizationRegistry(x=>delete r[x]);function o(x){c(x.target)}l(o,"onGeometryDispose");function c(x){x.index!==null&&e.remove(x.index);for(let g in x.attributes)e.remove(x.attributes[g]);x.removeEventListener("dispose",o),delete r[x.id],a.unregister(x);let b=s.get(x);b&&(e.remove(b),s.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}l(c,"destroyGeometry");function u(x,b){return r[b.id]!==void 0||(b.addEventListener("dispose",o),r[b.id]=new WeakRef(b),a.register(b,b.id,b),t.memory.geometries++),b}l(u,"get");function h(x){let b=x.attributes;for(let g in b)e.update(b[g],i.ARRAY_BUFFER)}l(h,"update");function p(x){let b=x.index,g=x.attributes.position,_=0;if(g===void 0)return;let v=b!==null?b.array.length:g.array.length/3-1,E=g.count>=65535?yl:_l,M=new E(Math.ceil(v/3)*6,1),R=M.array;if(b!==null){let y=b.array;_=b.version;for(let S=0,L=0;S<v;S+=3){let P=y[S+0],D=y[S+1],O=y[S+2];R[L++]=P,R[L++]=D,R[L++]=D,R[L++]=O,R[L++]=O,R[L++]=P}}else{_=g.version;for(let y=0,S=0;y<v;y+=3){let L=y+0,P=y+1,D=y+2;R[S++]=L,R[S++]=P,R[S++]=P,R[S++]=D,R[S++]=D,R[S++]=L}}M.version=_;let A=s.get(x);A&&e.remove(A),s.set(x,M)}l(p,"updateWireframeAttribute");function f(x){let b=s.get(x);if(b){let g=x.index;g!==null&&b.version<g.version&&p(x)}else p(x);return s.get(x)}l(f,"getWireframeAttribute");function m(){for(let x in r){let b=r[x].deref();b!==void 0&&c(b)}}return l(m,"dispose"),{get:u,update:h,getWireframeAttribute:f,dispose:m}}l(xE,"WebGLGeometries");function _E(i,e,t){let n;function r(p){n=p}l(r,"setMode");let s,a;function o(p){s=p.type,a=p.bytesPerElement}l(o,"setIndex");function c(p,f){i.drawElements(n,f,s,p*a),t.update(f,n,1)}l(c,"render");function u(p,f,m){m!==0&&(i.drawElementsInstanced(n,f,s,p*a,m),t.update(f,n,m))}l(u,"renderInstances");function h(p,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,p,0,m);let b=0;for(let g=0;g<m;g++)b+=f[g];t.update(b,n,1)}l(h,"renderMultiDraw"),this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}l(_E,"WebGLIndexedBufferRenderer");function yE(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:$e("WebGLInfo: Unknown draw mode:",a);break}}l(n,"update");function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return l(r,"reset"),{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}l(yE,"WebGLInfo");function bE(i,e,t){let n=new WeakMap,r=new Nt;function s(a,o,c){let u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==p){let P=function(){S.dispose(),n.delete(o),o.removeEventListener("dispose",P)};var m=P;l(P,"disposeTexture"),f!==void 0&&f.texture.dispose();let x=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],M=0;x===!0&&(M=1),b===!0&&(M=2),g===!0&&(M=3);let R=o.attributes.position.count*M,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);let y=new Float32Array(R*A*4*p),S=new Gs(y,R,A,p);S.type=wi,S.needsUpdate=!0;let L=M*4;for(let D=0;D<p;D++){let O=_[D],X=v[D],U=E[D],Y=R*A*4*D;for(let ne=0;ne<O.count;ne++){let B=ne*L;x===!0&&(r.fromBufferAttribute(O,ne),y[Y+B+0]=r.x,y[Y+B+1]=r.y,y[Y+B+2]=r.z,y[Y+B+3]=0),b===!0&&(r.fromBufferAttribute(X,ne),y[Y+B+4]=r.x,y[Y+B+5]=r.y,y[Y+B+6]=r.z,y[Y+B+7]=0),g===!0&&(r.fromBufferAttribute(U,ne),y[Y+B+8]=r.x,y[Y+B+9]=r.y,y[Y+B+10]=r.z,y[Y+B+11]=U.itemSize===4?r.w:1)}}f={count:p,texture:S,size:new He(R,A)},n.set(o,f),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let x=0;for(let g=0;g<u.length;g++)x+=u[g];let b=o.morphTargetsRelative?1:1-x;c.getUniforms().setValue(i,"morphTargetBaseInfluence",b),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return l(s,"update"),{update:s}}l(bE,"WebGLMorphtargets");function vE(i,e,t,n,r){let s=new WeakMap;function a(u){let h=r.render.frame,p=u.geometry,f=e.get(u,p);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),s.get(u)!==h&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),s.set(u,h))),u.isSkinnedMesh){let m=u.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return f}l(a,"update");function o(){s=new WeakMap}l(o,"dispose");function c(u){let h=u.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return l(c,"onInstancedMeshDispose"),{update:a,dispose:o}}l(vE,"WebGLObjects");var ME={[ap]:"LINEAR_TONE_MAPPING",[op]:"REINHARD_TONE_MAPPING",[lp]:"CINEON_TONE_MAPPING",[Dl]:"ACES_FILMIC_TONE_MAPPING",[up]:"AGX_TONE_MAPPING",[hp]:"NEUTRAL_TONE_MAPPING",[cp]:"CUSTOM_TONE_MAPPING"};function SE(i,e,t,n,r,s){let a=new Bn(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,u=null,h=new Ot;h.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new It([0,2,0,0,2,0],2));let p=new Xu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new vt(h,p),m=new Rl(-1,1,1,-1,0,1),x=null,b=null,g=!1,_,v=null,E=[],M=!1;this.setSize=function(R,A){a.setSize(R,A),o!==null&&o.setSize(R,A),c!==null&&c.setSize(R,A);for(let y=0;y<E.length;y++){let S=E[y];S.setSize&&S.setSize(R,A)}},this.setEffects=function(R){E=R,M=E.length>0&&E[0].isRenderPass===!0;let A=a.width,y=a.height;E.length>0&&o===null&&(o=new Bn(A,y,{type:Vn,depthBuffer:!1,stencilBuffer:!1}),c=new Bn(A,y,{type:Vn,depthBuffer:!1,stencilBuffer:!1}));let S=r===!0&&E.some(L=>L.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&u===null&&(u=new Ar(A,y),s===!0&&(u.format=Rr,u.type=Xs)),a.dispose(),a.depthTexture=S?u:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let L=0;L<E.length;L++){let P=E[L];P.setSize&&P.setSize(A,y),S&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(u)}},this.begin=function(R,A){if(g||R.toneMapping===Yi&&E.length===0)return!1;if(v=A,A!==null){let y=A.width,S=A.height;(a.width!==y||a.height!==S)&&this.setSize(y,S)}return M===!1&&R.setRenderTarget(a),_=R.toneMapping,R.toneMapping=Yi,!0},this.hasRenderPass=function(){return M},this.end=function(R,A){R.toneMapping=_,g=!0;let y=a,S=o;for(let L=0;L<E.length;L++){let P=E[L];P.enabled!==!1&&(P.render(R,S,y,A),P.needsSwap!==!1&&(y=S,S=S===o?c:o))}if(x!==R.outputColorSpace||b!==R.toneMapping){x=R.outputColorSpace,b=R.toneMapping,p.defines={},dt.getTransfer(x)===_t&&(p.defines.SRGB_TRANSFER="");let L=ME[b];L&&(p.defines[L]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=y.texture,R.setRenderTarget(v),R.render(f,m),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),p.dispose()}}l(SE,"WebGLOutput");var sy=new wn,ay=new Ar(1,1),oy=new Ml(1),ly=new Gs,cy=new Gu,uy=new vl,B_=[],k_=[],z_=new Float32Array(16),G_=new Float32Array(9),V_=new Float32Array(4);function ho(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=B_[r];if(s===void 0&&(s=new Float32Array(r),B_[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}l(ho,"flatten");function qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}l(qt,"arraysEqual");function Yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}l(Yt,"copyArray");function xd(i,e){let t=k_[e];t===void 0&&(t=new Int32Array(e),k_[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}l(xd,"allocTexUnits");function wE(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}l(wE,"setValueV1f");function EE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2fv(this.addr,e),Yt(t,e)}}l(EE,"setValueV2f");function AE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;i.uniform3fv(this.addr,e),Yt(t,e)}}l(AE,"setValueV3f");function TE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4fv(this.addr,e),Yt(t,e)}}l(TE,"setValueV4f");function CE(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;V_.set(n),i.uniformMatrix2fv(this.addr,!1,V_),Yt(t,n)}}l(CE,"setValueM2");function RE(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;G_.set(n),i.uniformMatrix3fv(this.addr,!1,G_),Yt(t,n)}}l(RE,"setValueM3");function PE(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;z_.set(n),i.uniformMatrix4fv(this.addr,!1,z_),Yt(t,n)}}l(PE,"setValueM4");function IE(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}l(IE,"setValueV1i");function LE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2iv(this.addr,e),Yt(t,e)}}l(LE,"setValueV2i");function DE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3iv(this.addr,e),Yt(t,e)}}l(DE,"setValueV3i");function NE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4iv(this.addr,e),Yt(t,e)}}l(NE,"setValueV4i");function UE(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}l(UE,"setValueV1ui");function FE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2uiv(this.addr,e),Yt(t,e)}}l(FE,"setValueV2ui");function OE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3uiv(this.addr,e),Yt(t,e)}}l(OE,"setValueV3ui");function BE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4uiv(this.addr,e),Yt(t,e)}}l(BE,"setValueV4ui");function _d(i){return i.version===0&&(i.compareFunction=Mp,i.needsUpdate=!0),i}l(_d,"initShadowTexture");function kE(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?s=_d(ay):s=sy,t.setTexture2D(e||s,r)}l(kE,"setValueT1");function zE(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||cy,r)}l(zE,"setValueT3D1");function GE(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_CUBE_SHADOW?s=_d(oy):s=uy,t.setTextureCube(e||s,r)}l(GE,"setValueT6");function VE(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||ly,r)}l(VE,"setValueT2DArray1");function HE(i){switch(i){case 5126:return wE;case 35664:return EE;case 35665:return AE;case 35666:return TE;case 35674:return CE;case 35675:return RE;case 35676:return PE;case 5124:case 35670:return IE;case 35667:case 35671:return LE;case 35668:case 35672:return DE;case 35669:case 35673:return NE;case 5125:return UE;case 36294:return FE;case 36295:return OE;case 36296:return BE;case 35678:case 36198:case 36298:case 36306:case 35682:return kE;case 35679:case 36299:case 36307:return zE;case 35680:case 36300:case 36308:case 36293:return GE;case 36289:case 36303:case 36311:case 36292:return VE}}l(HE,"getSingularSetter");function WE(i,e){i.uniform1fv(this.addr,e)}l(WE,"setValueV1fArray");function XE(i,e){let t=ho(e,this.size,2);i.uniform2fv(this.addr,t)}l(XE,"setValueV2fArray");function qE(i,e){let t=ho(e,this.size,3);i.uniform3fv(this.addr,t)}l(qE,"setValueV3fArray");function YE(i,e){let t=ho(e,this.size,4);i.uniform4fv(this.addr,t)}l(YE,"setValueV4fArray");function $E(i,e){let t=ho(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}l($E,"setValueM2Array");function ZE(i,e){let t=ho(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}l(ZE,"setValueM3Array");function JE(i,e){let t=ho(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}l(JE,"setValueM4Array");function KE(i,e){i.uniform1iv(this.addr,e)}l(KE,"setValueV1iArray");function jE(i,e){i.uniform2iv(this.addr,e)}l(jE,"setValueV2iArray");function QE(i,e){i.uniform3iv(this.addr,e)}l(QE,"setValueV3iArray");function eA(i,e){i.uniform4iv(this.addr,e)}l(eA,"setValueV4iArray");function tA(i,e){i.uniform1uiv(this.addr,e)}l(tA,"setValueV1uiArray");function nA(i,e){i.uniform2uiv(this.addr,e)}l(nA,"setValueV2uiArray");function iA(i,e){i.uniform3uiv(this.addr,e)}l(iA,"setValueV3uiArray");function rA(i,e){i.uniform4uiv(this.addr,e)}l(rA,"setValueV4uiArray");function sA(i,e,t){let n=this.cache,r=e.length,s=xd(t,r);qt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=_d(ay):a=sy;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}l(sA,"setValueT1Array");function aA(i,e,t){let n=this.cache,r=e.length,s=xd(t,r);qt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||cy,s[a])}l(aA,"setValueT3DArray");function oA(i,e,t){let n=this.cache,r=e.length,s=xd(t,r);qt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=_d(oy):a=uy;for(let o=0;o!==r;++o)t.setTextureCube(e[o]||a,s[o])}l(oA,"setValueT6Array");function lA(i,e,t){let n=this.cache,r=e.length,s=xd(t,r);qt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||ly,s[a])}l(lA,"setValueT2DArrayArray");function cA(i){switch(i){case 5126:return WE;case 35664:return XE;case 35665:return qE;case 35666:return YE;case 35674:return $E;case 35675:return ZE;case 35676:return JE;case 5124:case 35670:return KE;case 35667:case 35671:return jE;case 35668:case 35672:return QE;case 35669:case 35673:return eA;case 5125:return tA;case 36294:return nA;case 36295:return iA;case 36296:return rA;case 35678:case 36198:case 36298:case 36306:case 35682:return sA;case 35679:case 36299:case 36307:return aA;case 35680:case 36300:case 36308:case 36293:return oA;case 36289:case 36303:case 36311:case 36292:return lA}}l(cA,"getPureArraySetter");var e0=class e0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=HE(t.type)}};l(e0,"SingleUniform");var Xm=e0,t0=class t0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cA(t.type)}};l(t0,"PureArrayUniform");var qm=t0,n0=class n0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}};l(n0,"StructuredUniform");var Ym=n0,Hm=/(\w+)(\])?(\[|\.)?/g;function H_(i,e){i.seq.push(e),i.map[e.id]=e}l(H_,"addUniform");function uA(i,e,t){let n=i.name,r=n.length;for(Hm.lastIndex=0;;){let s=Hm.exec(n),a=Hm.lastIndex,o=s[1],c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){H_(t,u===void 0?new Xm(o,i,e):new qm(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new Ym(o),H_(t,p)),t=p}}}l(uA,"parseUniform");var i0=class i0{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);uA(o,c,this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};l(i0,"WebGLUniforms");var uo=i0;function W_(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}l(W_,"WebGLShader");var hA=37297,dA=0;function fA(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}l(fA,"handleSource");var X_=new Ze;function pA(i){dt._getMatrix(X_,dt.workingColorSpace,i);let e=`mat3( ${X_.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case dl:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}l(pA,"getEncodingComponents");function q_(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+fA(i.getShaderSource(e),o)}else return s}l(q_,"getShaderErrors");function mA(i,e){let t=pA(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}l(mA,"getTexelEncodingFunction");var gA={[ap]:"Linear",[op]:"Reinhard",[lp]:"Cineon",[Dl]:"ACESFilmic",[up]:"AgX",[hp]:"Neutral",[cp]:"Custom"};function xA(i,e){let t=gA[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}l(xA,"getToneMappingFunction");var fd=new W;function _A(){dt.getLuminanceCoefficients(fd);let i=fd.x.toFixed(4),e=fd.y.toFixed(4),t=fd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}l(_A,"getLuminanceFunction");function yA(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vl).join(`
`)}l(yA,"generateVertexExtensions");function bA(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}l(bA,"generateDefines");function vA(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),a=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}l(vA,"fetchAttributeLocations");function Vl(i){return i!==""}l(Vl,"filterEmptyLine");function Y_(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}l(Y_,"replaceLightNums");function $_(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}l($_,"replaceClippingPlaneNums");var MA=/^[ \t]*#include +<([\w\d./]+)>/gm;function $m(i){return i.replace(MA,SA)}l($m,"resolveIncludes");function SA(i,e){let t=st[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return $m(t)}l(SA,"includeReplacer");var wA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Z_(i){return i.replace(wA,EA)}l(Z_,"unrollLoops");function EA(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}l(EA,"loopReplacer");function J_(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}l(J_,"generatePrecision");var AA={[Ll]:"SHADOWMAP_TYPE_PCF",[ao]:"SHADOWMAP_TYPE_VSM"};function TA(i){return AA[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}l(TA,"generateShadowMapTypeDefine");var CA={[lo]:"ENVMAP_MODE_REFRACTION"};function RA(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":CA[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}l(RA,"generateEnvMapModeDefine");var PA={[sp]:"ENVMAP_BLENDING_MULTIPLY",[d_]:"ENVMAP_BLENDING_MIX",[f_]:"ENVMAP_BLENDING_ADD"};function IA(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":PA[i.combine]||"ENVMAP_BLENDING_NONE"}l(IA,"generateEnvMapBlendingDefine");function LA(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=TA(t),u=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=RA(t),p=IA(t),f=yA(t),m=bA(s),x=r.createProgram(),b,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Vl).join(`
`),b.length>0&&(b+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Vl).join(`
`),g.length>0&&(g+=`
`)):(b=[J_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vl).join(`
`),g=[J_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yi?"#define TONE_MAPPING":"",t.toneMapping!==Yi?st.tonemapping_pars_fragment:"",t.toneMapping!==Yi?xA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,mA("linearToOutputTexel",t.outputColorSpace),_A(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vl).join(`
`)),a=$m(a),a=Y_(a,t),a=$_(a,t),o=$m(o),o=Y_(o,t),o=$_(o,t),a=Z_(a),o=Z_(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,b=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,g=["#define varying in",t.glslVersion===wp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=_+b+a,E=_+g+o,M=W_(r,r.VERTEX_SHADER,v),R=W_(r,r.FRAGMENT_SHADER,E);r.attachShader(x,M),r.attachShader(x,R),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(P){if(i.debug.checkShaderErrors){let D=r.getProgramInfoLog(x)||"",O=r.getShaderInfoLog(M)||"",X=r.getShaderInfoLog(R)||"",U=D.trim(),Y=O.trim(),ne=X.trim(),B=!0,J=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,M,R);else{let H=q_(r,M,"vertex"),$=q_(r,R,"fragment");$e("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+H+`
`+$)}else U!==""?Ye("WebGLProgram: Program Info Log:",U):(Y===""||ne==="")&&(J=!1);J&&(P.diagnostics={runnable:B,programLog:U,vertexShader:{log:Y,prefix:b},fragmentShader:{log:ne,prefix:g}})}r.deleteShader(M),r.deleteShader(R),y=new uo(r,x),S=vA(r,x)}l(A,"onFirstUse");let y;this.getUniforms=function(){return y===void 0&&A(this),y};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(x,hA)),L},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dA++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=R,this}l(LA,"WebGLProgram");var DA=0,r0=class r0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Jm(e),t.set(e,n)),n}};l(r0,"WebGLShaderCache");var Zm=r0,s0=class s0{constructor(e){this.id=DA++,this.code=e,this.usedTimes=0}};l(s0,"WebGLShaderStage");var Jm=s0;function NA(i){return i===$i||i===kl||i===zl}l(NA,"isPackedRGFormat");function UA(i,e,t,n,r,s){let a=new ml,o=new Zm,c=new Set,u=[],h=new Map,p=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}l(m,"getChannel");function x(y,S,L,P,D,O){let X=P.fog,U=D.geometry,Y=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,ne=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,B=e.get(y.envMap||Y,ne),J=f[y.type],H=n.precision;y.precision!==null&&(H=n.getMaxPrecision(y.precision),H!==y.precision&&Ye("WebGLProgram.getParameters:",y.precision,"not supported, using",H,"instead."));let $=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,j=$!==void 0?$.length:0,he=0;U.morphAttributes.position!==void 0&&(he=1),U.morphAttributes.normal!==void 0&&(he=2),U.morphAttributes.color!==void 0&&(he=3);let ge,Q,pe,le;if(J){let Le=Ji[J];ge=Le.vertexShader,Q=Le.fragmentShader}else{ge=y.vertexShader,Q=y.fragmentShader;let Le=o.getVertexShaderStage(y),yt=o.getFragmentShaderStage(y);o.update(y,Le,yt),pe=Le.id,le=yt.id}let de=i.getRenderTarget(),ue=i.state.buffers.depth.getReversed(),ee=D.isInstancedMesh===!0,me=D.isBatchedMesh===!0,ie=!!y.map,xe=!!y.matcap,Se=!!B,be=Se&&B.isPMREMTexture===!0,qe=!!y.aoMap,Ke=!!y.lightMap,lt=!!y.bumpMap&&y.wireframe===!1,je=!!y.normalMap,St=!!y.displacementMap,ct=!!y.emissiveMap,wt=!!y.metalnessMap,Dt=!!y.roughnessMap,ot=y.anisotropy>0,G=y.clearcoat>0,Je=y.diffuseRoughness>0,tt=y.dispersion>0,at=y.retroreflectivity>0,ye=y.iridescence>0,gt=y.sheen>0,ze=y.transmission>0,We=ot&&!!y.anisotropyMap,I=G&&!!y.clearcoatMap,w=G&&!!y.clearcoatNormalMap,q=G&&!!y.clearcoatRoughnessMap,fe=Je&&!!y.diffuseRoughnessMap,ae=ye&&!!y.iridescenceMap,Me=ye&&!!y.iridescenceThicknessMap,Ce=gt&&!!y.sheenColorMap,se=gt&&!!y.sheenRoughnessMap,oe=!!y.specularMap,Ee=!!y.specularColorMap,F=!!y.specularIntensityMap,ce=ze&&!!y.transmissionMap,re=ze&&!!y.thicknessMap,Ae=!!y.gradientMap,ve=!!y.alphaMap,we=y.alphaTest>0,Ge=!!y.alphaHash,rt=!!y.extensions,_e=Yi;y.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(_e=i.toneMapping);let Ve=be?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,nt={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:ge,fragmentShader:Q,defines:y.defines,customVertexShaderID:pe,customFragmentShaderID:le,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:H,batching:me,batchingColor:me&&D._colorsTexture!==null,instancing:ee,instancingColor:ee&&D.instanceColor!==null,instancingMorph:ee&&D.morphTexture!==null,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:ie,matcap:xe,envMap:Se,envMapMode:Se&&B.mapping,envMapPMREM:be,envMapMaxLod:be?Ve.length-1:null,envMapSize:be?Ve[0].width:null,aoMap:qe,lightMap:Ke,bumpMap:lt,normalMap:je,displacementMap:St,emissiveMap:ct,normalMapObjectSpace:je&&y.normalMapType===g_,normalMapTangentSpace:je&&y.normalMapType===ud,packedNormalMap:je&&y.normalMapType===ud&&NA(y.normalMap.format),metalnessMap:wt,roughnessMap:Dt,anisotropy:ot,anisotropyMap:We,clearcoat:G,clearcoatMap:I,clearcoatNormalMap:w,clearcoatRoughnessMap:q,diffuseRoughness:Je,diffuseRoughnessMap:fe,dispersion:tt,retroreflection:at,iridescence:ye,iridescenceMap:ae,iridescenceThicknessMap:Me,sheen:gt,sheenColorMap:Ce,sheenRoughnessMap:se,specularMap:oe,specularColorMap:Ee,specularIntensityMap:F,transmission:ze,transmissionMap:ce,thicknessMap:re,gradientMap:Ae,opaque:y.transparent===!1&&y.blending===oo&&y.alphaToCoverage===!1,alphaMap:ve,alphaTest:we,alphaHash:Ge,combine:y.combine,mapUv:ie&&m(y.map.channel),aoMapUv:qe&&m(y.aoMap.channel),lightMapUv:Ke&&m(y.lightMap.channel),bumpMapUv:lt&&m(y.bumpMap.channel),normalMapUv:je&&m(y.normalMap.channel),displacementMapUv:St&&m(y.displacementMap.channel),emissiveMapUv:ct&&m(y.emissiveMap.channel),metalnessMapUv:wt&&m(y.metalnessMap.channel),roughnessMapUv:Dt&&m(y.roughnessMap.channel),anisotropyMapUv:We&&m(y.anisotropyMap.channel),clearcoatMapUv:I&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:w&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&m(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:fe&&m(y.diffuseRoughnessMap.channel),iridescenceMapUv:ae&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:se&&m(y.sheenRoughnessMap.channel),specularMapUv:oe&&m(y.specularMap.channel),specularColorMapUv:Ee&&m(y.specularColorMap.channel),specularIntensityMapUv:F&&m(y.specularIntensityMap.channel),transmissionMapUv:ce&&m(y.transmissionMap.channel),thicknessMapUv:re&&m(y.thicknessMap.channel),alphaMapUv:ve&&m(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(je||ot),vertexNormals:!!U.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!U.attributes.uv&&(ie||ve),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||U.attributes.normal===void 0&&je===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ue,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:he,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:O.filter(Le=>Le.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:_e,decodeVideoTexture:ie&&y.map.isVideoTexture===!0&&dt.getTransfer(y.map.colorSpace)===_t,decodeVideoTextureEmissive:ct&&y.emissiveMap.isVideoTexture===!0&&dt.getTransfer(y.emissiveMap.colorSpace)===_t,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ai,flipSided:y.side===An,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:rt&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&y.extensions.multiDraw===!0||me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}l(x,"getParameters");function b(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let L in y.defines)S.push(L),S.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(g(S,y),_(S,y),S.push(i.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}l(b,"getProgramCacheKey");function g(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapPMREM),y.push(S.envMapMaxLod),y.push(S.envMapSize),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.diffuseRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.numSunLights),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numSunLightShadows),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.numLightProbeGrids),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}l(g,"getProgramCacheKeyParameters");function _(y,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),y.push(a.mask)}l(_,"getProgramCacheKeyBooleans");function v(y){let S=f[y.type],L;if(S){let P=Ji[S];L=$s.clone(P.uniforms)}else L=y.uniforms;return L}l(v,"getUniforms");function E(y,S){let L=h.get(S);return L!==void 0?++L.usedTimes:(L=new LA(i,S,y,r),u.push(L),h.set(S,L)),L}l(E,"acquireProgram");function M(y){if(--y.usedTimes===0){let S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),h.delete(y.cacheKey),y.destroy()}}l(M,"releaseProgram");function R(y){o.remove(y)}l(R,"releaseShaderCache");function A(){o.dispose()}return l(A,"dispose"),{getParameters:x,getProgramCacheKey:b,getUniforms:v,acquireProgram:E,releaseProgram:M,releaseShaderCache:R,programs:u,dispose:A}}l(UA,"WebGLPrograms");function FA(){let i=new WeakMap;function e(a){return i.has(a)}l(e,"has");function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}l(t,"get");function n(a){i.delete(a)}l(n,"remove");function r(a,o,c){i.get(a)[o]=c}l(r,"update");function s(){i=new WeakMap}return l(s,"dispose"),{has:e,get:t,remove:n,update:r,dispose:s}}l(FA,"WebGLProperties");function OA(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}l(OA,"painterSortStable");function K_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}l(K_,"reversePainterSortStable");function j_(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}l(s,"init");function a(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}l(a,"materialVariant");function o(f,m,x,b,g,_){let v=i[e];return v===void 0?(v={id:f.id,object:f,geometry:m,material:x,materialVariant:a(f),groupOrder:b,renderOrder:f.renderOrder,z:g,group:_},i[e]=v):(v.id=f.id,v.object=f,v.geometry=m,v.material=x,v.materialVariant=a(f),v.groupOrder=b,v.renderOrder=f.renderOrder,v.z=g,v.group=_),e++,v}l(o,"getNextRenderItem");function c(f,m,x,b,g,_,v){v.reversedDepth===!0&&(g=-g);let E=o(f,m,x,b,g,_);x.transmission>0?n.push(E):x.transparent===!0?r.push(E):t.push(E)}l(c,"push");function u(f,m,x,b,g,_){let v=o(f,m,x,b,g,_);x.transmission>0?n.unshift(v):x.transparent===!0?r.unshift(v):t.unshift(v)}l(u,"unshift");function h(f,m){t.length>1&&t.sort(f||OA),n.length>1&&n.sort(m||K_),r.length>1&&r.sort(m||K_)}l(h,"sort");function p(){for(let f=e,m=i.length;f<m;f++){let x=i[f];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return l(p,"finish"),{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:u,finish:p,sort:h}}l(j_,"WebGLRenderList");function BA(){let i=new WeakMap;function e(n,r){let s=i.get(n),a;return s===void 0?(a=new j_,i.set(n,[a])):r>=s.length?(a=new j_,s.push(a)):a=s[r],a}l(e,"get");function t(){i=new WeakMap}return l(t,"dispose"),{get:e,dispose:t}}l(BA,"WebGLRenderLists");function kA(){let i={};return{get:l(function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new W,color:new Be};break;case"SpotLight":t={position:new W,direction:new W,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t},"get")}}l(kA,"UniformsCache");function zA(){let i={};return{get:l(function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t},"get")}}l(zA,"ShadowUniformsCache");var GA=0;function VA(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}l(VA,"shadowCastingAndTexturingLightsFirst");function HA(i){let e=new kA,t=zA(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new W);let r=new W,s=new bt,a=new bt;function o(u){let h=0,p=0,f=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let m=0,x=0,b=0,g=0,_=0,v=0,E=0,M=0,R=0,A=0,y=0,S=0,L=0,P=0;u.sort(VA);for(let O=0,X=u.length;O<X;O++){let U=u[O],Y=U.color,ne=U.intensity,B=U.distance,J=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===$i?J=U.shadow.map.texture:J=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=Y.r*ne,p+=Y.g*ne,f+=Y.b*ne;else if(U.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(U.sh.coefficients[H],ne);P++}else if(U.isSunLight){let H=e.get(U);if(H.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let $=U.shadow,j=t.get(U);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[x]=j,n.sunShadowMap[x]=J;let he=$.getViewportCount();for(let ge=0;ge<he;ge++)n.sunShadowMatrix[b+ge]=$.getMatrix(ge),n.sunShadowCascade[b+ge]=$._cascadeData[ge];b+=he,x++}n.sun[m]=H,m++}else if(U.isDirectionalLight){let H=e.get(U);if(H.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let $=U.shadow,j=t.get(U);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,n.directionalShadow[g]=j,n.directionalShadowMap[g]=J,n.directionalShadowMatrix[g]=U.shadow.matrix,R++}n.directional[g]=H,g++}else if(U.isSpotLight){let H=e.get(U);H.position.setFromMatrixPosition(U.matrixWorld),H.color.copy(Y).multiplyScalar(ne),H.distance=B,H.coneCos=Math.cos(U.angle),H.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),H.decay=U.decay,n.spot[v]=H;let $=U.shadow;if(U.map&&(n.spotLightMap[S]=U.map,S++,$.updateMatrices(U),U.castShadow&&L++),n.spotLightMatrix[v]=$.matrix,U.castShadow){let j=t.get(U);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,n.spotShadow[v]=j,n.spotShadowMap[v]=J,y++}v++}else if(U.isRectAreaLight){let H=e.get(U);H.color.copy(Y).multiplyScalar(ne),H.halfWidth.set(U.width*.5,0,0),H.halfHeight.set(0,U.height*.5,0),n.rectArea[E]=H,E++}else if(U.isPointLight){let H=e.get(U);if(H.color.copy(U.color).multiplyScalar(U.intensity),H.distance=U.distance,H.decay=U.decay,U.castShadow){let $=U.shadow,j=t.get(U);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,j.shadowCameraNear=$.camera.near,j.shadowCameraFar=$.camera.far,n.pointShadow[_]=j,n.pointShadowMap[_]=J,n.pointShadowMatrix[_]=U.shadow.matrix,A++}n.point[_]=H,_++}else if(U.isHemisphereLight){let H=e.get(U);H.skyColor.copy(U.color).multiplyScalar(ne),H.groundColor.copy(U.groundColor).multiplyScalar(ne),n.hemi[M]=H,M++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pe.LTC_FLOAT_1,n.rectAreaLTC2=Pe.LTC_FLOAT_2):(n.rectAreaLTC1=Pe.LTC_HALF_1,n.rectAreaLTC2=Pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=f;let D=n.hash;(D.sunLength!==m||D.directionalLength!==g||D.pointLength!==_||D.spotLength!==v||D.rectAreaLength!==E||D.hemiLength!==M||D.numSunShadows!==x||D.numDirectionalShadows!==R||D.numPointShadows!==A||D.numSpotShadows!==y||D.numSpotMaps!==S||D.numLightProbes!==P)&&(n.sun.length=m,n.directional.length=g,n.spot.length=v,n.rectArea.length=E,n.point.length=_,n.hemi.length=M,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=y,n.spotShadowMap.length=y,n.spotLightMatrix.length=y+S-L,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=P,D.sunLength=m,D.directionalLength=g,D.pointLength=_,D.spotLength=v,D.rectAreaLength=E,D.hemiLength=M,D.numSunShadows=x,D.numDirectionalShadows=R,D.numPointShadows=A,D.numSpotShadows=y,D.numSpotMaps=S,D.numLightProbes=P,n.version=GA++)}l(o,"setup");function c(u,h){let p=0,f=0,m=0,x=0,b=0,g=0,_=h.matrixWorldInverse;for(let v=0,E=u.length;v<E;v++){let M=u[v];if(M.isSunLight){let R=n.sun[p];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(_),p++}else if(M.isDirectionalLight){let R=n.directional[f];R.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(_),f++}else if(M.isSpotLight){let R=n.spot[x];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(_),R.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(_),x++}else if(M.isRectAreaLight){let R=n.rectArea[b];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(_),a.identity(),s.copy(M.matrixWorld),s.premultiply(_),a.extractRotation(s),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),b++}else if(M.isPointLight){let R=n.point[m];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(_),m++}else if(M.isHemisphereLight){let R=n.hemi[g];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(_),g++}}}return l(c,"setupView"),{setup:o,setupView:c,state:n}}l(HA,"WebGLLights");function Q_(i){let e=new HA(i),t=[],n=[],r=[];function s(p){h.camera=p,t.length=0,n.length=0,r.length=0}l(s,"init");function a(p){p.isLightProbeGrid?r.push(p):t.push(p)}l(a,"pushLight");function o(p){n.push(p)}l(o,"pushShadow");function c(){e.setup(t),r.sort((p,f)=>p.priority-f.priority||p.id-f.id)}l(c,"setupLights");function u(p){e.setupView(t,p)}l(u,"setupLightsView");let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o}}l(Q_,"WebGLRenderState");function WA(i){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new Q_(i),e.set(r,[o])):s>=a.length?(o=new Q_(i),a.push(o)):o=a[s],o}l(t,"get");function n(){e=new WeakMap}return l(n,"dispose"),{get:t,dispose:n}}l(WA,"WebGLRenderStates");var XA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qA=`uniform sampler2D shadow_pass;
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
}`,YA=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],$A=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],ey=new bt,Gl=new W,Wm=new W;function ZA(i,e,t){let n=new ts,r=new He,s=new He,a=new Nt,o=new qu,c=new Yu,u={},h=t.maxTextureSize,p={[os]:An,[An]:os,[ai]:ai},f=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:XA,fragmentShader:qA}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let x=new Ot;x.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new vt(x,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ll;let _=this.type;this.render=function(A,y,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===wh&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ll);let L=i.getRenderTarget(),P=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Vs),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let X=_!==this.type;X&&y.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(Y=>Y.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,Y=A.length;U<Y;U++){let ne=A[U],B=ne.shadow;if(B===void 0){Ye("WebGLShadowMap:",ne,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);let J=B.getFrameExtents();r.multiply(J),s.copy(B.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/J.x),r.x=s.x*J.x,B.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/J.y),r.y=s.y*J.y,B.mapSize.y=s.y));let H=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=H,B.map===null||X===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===ao){if(ne.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Bn(r.x,r.y,{format:$i,type:Vn,minFilter:Wt,magFilter:Wt,generateMipmaps:!1}),B.map.texture.name=ne.name+".shadowMap",B.map.depthTexture=new Ar(r.x,r.y,wi),B.map.depthTexture.name=ne.name+".shadowMapDepth",B.map.depthTexture.format=Mr,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ht,B.map.depthTexture.magFilter=Ht}else ne.isPointLight?(B.map=new Hl(r.x),B.map.depthTexture=new Ml(r.x,Si)):(B.map=new Bn(r.x,r.y),B.map.depthTexture=new Ar(r.x,r.y,Si)),B.map.depthTexture.name=ne.name+".shadowMap",B.map.depthTexture.format=Mr,this.type===Ll?(B.map.depthTexture.compareFunction=H?vp:bp,B.map.depthTexture.minFilter=Wt,B.map.depthTexture.magFilter=Wt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ht,B.map.depthTexture.magFilter=Ht);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==r.x||B.map.height!==r.y)&&B.map.setSize(r.x,r.y);let $=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();ne.isPointLight!==!0&&B.updateMatrices(ne,S);let j=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:S.layers;for(let he=0;he<$;he++){let ge=B.getCamera(he);if(ne.isPointLight){let Q=B.camera,pe=B.matrix,le=ne.distance||Q.far;le!==Q.far&&(Q.far=le,Q.updateProjectionMatrix()),Gl.setFromMatrixPosition(ne.matrixWorld),Q.position.copy(Gl),Wm.copy(Q.position),Wm.add(YA[he]),Q.up.copy($A[he]),Q.lookAt(Wm),Q.updateMatrixWorld(),pe.makeTranslation(-Gl.x,-Gl.y,-Gl.z),ey.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),B._frustum.setFromProjectionMatrix(ey,Q.coordinateSystem,Q.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,he),i.clear();else{he===0&&(i.setRenderTarget(B.map),i.clear());let Q=B.getViewport(he);a.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),O.viewport(a)}n=B.getFrustum(he),M(y,S,ge,ne,j,this.type)}B.isPointLightShadow!==!0&&this.type===ao&&v(B,S),B.needsUpdate=!1}_=this.type,g.needsUpdate=!1,i.setRenderTarget(L,P,D)};function v(A,y){let S=e.update(b);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null?A.mapPass=new Bn(r.x,r.y,{format:$i,type:Vn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(y,null,S,f,b,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value.set(A.map.width,A.map.height),m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(y,null,S,m,b,null)}l(v,"VSMPass");function E(A,y,S,L){let P=null,D=S.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)P=D;else if(P=S.isPointLight===!0?c:o,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let O=P.uuid,X=y.uuid,U=u[O];U===void 0&&(U={},u[O]=U);let Y=U[X];Y===void 0&&(Y=P.clone(),U[X]=Y,y.addEventListener("dispose",R)),P=Y}if(P.visible=y.visible,P.wireframe=y.wireframe,L===ao?P.side=y.shadowSide!==null?y.shadowSide:y.side:P.side=y.shadowSide!==null?y.shadowSide:p[y.side],P.alphaMap=y.alphaMap,P.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,P.map=y.map,P.clipShadows=y.clipShadows,P.clippingPlanes=y.clippingPlanes,P.clipIntersection=y.clipIntersection,P.displacementMap=y.displacementMap,P.displacementScale=y.displacementScale,P.displacementBias=y.displacementBias,P.wireframeLinewidth=y.wireframeLinewidth,P.linewidth=y.linewidth,S.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let O=i.properties.get(P);O.light=S}return P}l(E,"getDepthMaterial");function M(A,y,S,L,P,D){if(A.visible===!1)return;if(A.layers.test(P)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&D===ao)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,A.matrixWorld);let U=e.update(A),Y=A.material;if(Array.isArray(Y)){let ne=U.groups;for(let B=0,J=ne.length;B<J;B++){let H=ne[B],$=Y[H.materialIndex];if($&&$.visible){let j=E(A,$,L,D);A.onBeforeShadow(i,A,y,S,U,j,H),i.renderBufferDirect(S,null,U,j,A,H),A.onAfterShadow(i,A,y,S,U,j,H)}}}else if(Y.visible){let ne=E(A,Y,L,D);A.onBeforeShadow(i,A,y,S,U,ne,null),i.renderBufferDirect(S,null,U,ne,A,null),A.onAfterShadow(i,A,y,S,U,ne,null)}}let X=A.children;for(let U=0,Y=X.length;U<Y;U++)M(X[U],y,S,L,P,D)}l(M,"renderObject");function R(A){A.target.removeEventListener("dispose",R);for(let S in u){let L=u[S],P=A.target.uuid;P in L&&(L[P].dispose(),delete L[P])}}l(R,"onMaterialDispose")}l(ZA,"WebGLShadowMap");function JA(i,e){function t(){let F=!1,ce=new Nt,re=null,Ae=new Nt(0,0,0,0);return{setMask:l(function(ve){re!==ve&&!F&&(i.colorMask(ve,ve,ve,ve),re=ve)},"setMask"),setLocked:l(function(ve){F=ve},"setLocked"),setClear:l(function(ve,we,Ge,rt,_e){_e===!0&&(ve*=rt,we*=rt,Ge*=rt),ce.set(ve,we,Ge,rt),Ae.equals(ce)===!1&&(i.clearColor(ve,we,Ge,rt),Ae.copy(ce))},"setClear"),reset:l(function(){F=!1,re=null,Ae.set(-1,0,0,0)},"reset")}}l(t,"ColorBuffer");function n(){let F=!1,ce=!1,re=null,Ae=null,ve=null;return{setReversed:l(function(we){if(ce!==we){let Ge=e.get("EXT_clip_control");we?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),ce=we;let rt=ve;ve=null,this.setClear(rt)}},"setReversed"),getReversed:l(function(){return ce},"getReversed"),setTest:l(function(we){we?ue(i.DEPTH_TEST):ee(i.DEPTH_TEST)},"setTest"),setMask:l(function(we){re!==we&&!F&&(i.depthMask(we),re=we)},"setMask"),setFunc:l(function(we){if(ce&&(we=A_[we]),Ae!==we){switch(we){case Ru:i.depthFunc(i.NEVER);break;case Pu:i.depthFunc(i.ALWAYS);break;case Iu:i.depthFunc(i.LESS);break;case Ja:i.depthFunc(i.LEQUAL);break;case Lu:i.depthFunc(i.EQUAL);break;case Du:i.depthFunc(i.GEQUAL);break;case Nu:i.depthFunc(i.GREATER);break;case Uu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ae=we}},"setFunc"),setLocked:l(function(we){F=we},"setLocked"),setClear:l(function(we){ve!==we&&(ve=we,ce&&(we=1-we),i.clearDepth(we))},"setClear"),reset:l(function(){F=!1,re=null,Ae=null,ve=null,ce=!1},"reset")}}l(n,"DepthBuffer");function r(){let F=!1,ce=null,re=null,Ae=null,ve=null,we=null,Ge=null,rt=null,_e=null;return{setTest:l(function(Ve){F||(Ve?ue(i.STENCIL_TEST):ee(i.STENCIL_TEST))},"setTest"),setMask:l(function(Ve){ce!==Ve&&!F&&(i.stencilMask(Ve),ce=Ve)},"setMask"),setFunc:l(function(Ve,nt,Le){(re!==Ve||Ae!==nt||ve!==Le)&&(i.stencilFunc(Ve,nt,Le),re=Ve,Ae=nt,ve=Le)},"setFunc"),setOp:l(function(Ve,nt,Le){(we!==Ve||Ge!==nt||rt!==Le)&&(i.stencilOp(Ve,nt,Le),we=Ve,Ge=nt,rt=Le)},"setOp"),setLocked:l(function(Ve){F=Ve},"setLocked"),setClear:l(function(Ve){_e!==Ve&&(i.clearStencil(Ve),_e=Ve)},"setClear"),reset:l(function(){F=!1,ce=null,re=null,Ae=null,ve=null,we=null,Ge=null,rt=null,_e=null},"reset")}}l(r,"StencilBuffer");let s=new t,a=new n,o=new r,c={},u=new WeakMap,h={},p={},f={},m=new WeakMap,x=[],b=null,g=!1,_=null,v=null,E=null,M=null,R=null,A=null,y=null,S=new Be(0,0,0),L=0,P=!1,D=null,O=null,X=null,U=null,Y=null,ne=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,J=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(H)[1]),B=J>=1):H.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),B=J>=2);let $=null,j={},he=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),Q=new Nt().fromArray(he),pe=new Nt().fromArray(ge);function le(F,ce,re,Ae){let ve=new Uint8Array(4),we=i.createTexture();i.bindTexture(F,we),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ge=0;Ge<re;Ge++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,Ae,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(ce+Ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return we}l(le,"createTexture");let de={};de[i.TEXTURE_2D]=le(i.TEXTURE_2D,i.TEXTURE_2D,1),de[i.TEXTURE_CUBE_MAP]=le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[i.TEXTURE_2D_ARRAY]=le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),de[i.TEXTURE_3D]=le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ue(i.DEPTH_TEST),a.setFunc(Ja),lt(!1),je(Qf),ue(i.CULL_FACE),qe(Vs);function ue(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}l(ue,"enable");function ee(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}l(ee,"disable");function me(F,ce){return f[F]!==ce?(i.bindFramebuffer(F,ce),f[F]=ce,F===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ce),F===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ce),!0):!1}l(me,"bindFramebuffer");function ie(F,ce){let re=x,Ae=!1;if(F){re=m.get(ce),re===void 0&&(re=[],m.set(ce,re));let ve=F.textures;if(re.length!==ve.length||re[0]!==i.COLOR_ATTACHMENT0){for(let we=0,Ge=ve.length;we<Ge;we++)re[we]=i.COLOR_ATTACHMENT0+we;re.length=ve.length,Ae=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,Ae=!0);Ae&&i.drawBuffers(re)}l(ie,"drawBuffers");function xe(F){return b!==F?(i.useProgram(F),b=F,!0):!1}l(xe,"useProgram");let Se={[Hs]:i.FUNC_ADD,[Zx]:i.FUNC_SUBTRACT,[Jx]:i.FUNC_REVERSE_SUBTRACT};Se[Kx]=i.MIN,Se[jx]=i.MAX;let be={[Qx]:i.ZERO,[e_]:i.ONE,[t_]:i.SRC_COLOR,[ip]:i.SRC_ALPHA,[o_]:i.SRC_ALPHA_SATURATE,[s_]:i.DST_COLOR,[i_]:i.DST_ALPHA,[n_]:i.ONE_MINUS_SRC_COLOR,[rp]:i.ONE_MINUS_SRC_ALPHA,[a_]:i.ONE_MINUS_DST_COLOR,[r_]:i.ONE_MINUS_DST_ALPHA,[l_]:i.CONSTANT_COLOR,[c_]:i.ONE_MINUS_CONSTANT_COLOR,[u_]:i.CONSTANT_ALPHA,[h_]:i.ONE_MINUS_CONSTANT_ALPHA};function qe(F,ce,re,Ae,ve,we,Ge,rt,_e,Ve){if(F===Vs){g===!0&&(ee(i.BLEND),g=!1);return}if(g===!1&&(ue(i.BLEND),g=!0),F!==$x){if(F!==_||Ve!==P){if((v!==Hs||R!==Hs)&&(i.blendEquation(i.FUNC_ADD),v=Hs,R=Hs),Ve)switch(F){case oo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ep:i.blendFunc(i.ONE,i.ONE);break;case tp:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case np:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:$e("WebGLState: Invalid blending: ",F);break}else switch(F){case oo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ep:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case tp:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case np:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",F);break}E=null,M=null,A=null,y=null,S.set(0,0,0),L=0,_=F,P=Ve}return}ve=ve||ce,we=we||re,Ge=Ge||Ae,(ce!==v||ve!==R)&&(i.blendEquationSeparate(Se[ce],Se[ve]),v=ce,R=ve),(re!==E||Ae!==M||we!==A||Ge!==y)&&(i.blendFuncSeparate(be[re],be[Ae],be[we],be[Ge]),E=re,M=Ae,A=we,y=Ge),(rt.equals(S)===!1||_e!==L)&&(i.blendColor(rt.r,rt.g,rt.b,_e),S.copy(rt),L=_e),_=F,P=!1}l(qe,"setBlending");function Ke(F,ce){F.side===ai?ee(i.CULL_FACE):ue(i.CULL_FACE);let re=F.side===An;ce&&(re=!re),lt(re),F.blending===oo&&F.transparent===!1?qe(Vs):qe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);let Ae=F.stencilWrite;o.setTest(Ae),Ae&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ct(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ue(i.SAMPLE_ALPHA_TO_COVERAGE):ee(i.SAMPLE_ALPHA_TO_COVERAGE)}l(Ke,"setMaterial");function lt(F){D!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),D=F)}l(lt,"setFlipSided");function je(F){F!==qx?(ue(i.CULL_FACE),F!==O&&(F===Qf?i.cullFace(i.BACK):F===Yx?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ee(i.CULL_FACE),O=F}l(je,"setCullFace");function St(F){F!==X&&(B&&i.lineWidth(F),X=F)}l(St,"setLineWidth");function ct(F,ce,re){F?(ue(i.POLYGON_OFFSET_FILL),(U!==ce||Y!==re)&&(U=ce,Y=re,a.getReversed()&&(ce=-ce,re=-re),i.polygonOffset(ce,re))):ee(i.POLYGON_OFFSET_FILL)}l(ct,"setPolygonOffset");function wt(F){F?ue(i.SCISSOR_TEST):ee(i.SCISSOR_TEST)}l(wt,"setScissorTest");function Dt(F){F===void 0&&(F=i.TEXTURE0+ne-1),$!==F&&(i.activeTexture(F),$=F)}l(Dt,"activeTexture");function ot(F,ce,re){re===void 0&&($===null?re=i.TEXTURE0+ne-1:re=$);let Ae=j[re];Ae===void 0&&(Ae={type:void 0,texture:void 0},j[re]=Ae),(Ae.type!==F||Ae.texture!==ce)&&($!==re&&(i.activeTexture(re),$=re),i.bindTexture(F,ce||de[F]),Ae.type=F,Ae.texture=ce)}l(ot,"bindTexture");function G(){let F=j[$];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}l(G,"unbindTexture");function Je(){try{i.compressedTexImage2D(...arguments)}catch(F){$e("WebGLState:",F)}}l(Je,"compressedTexImage2D");function tt(){try{i.compressedTexImage3D(...arguments)}catch(F){$e("WebGLState:",F)}}l(tt,"compressedTexImage3D");function at(){try{i.texSubImage2D(...arguments)}catch(F){$e("WebGLState:",F)}}l(at,"texSubImage2D");function ye(){try{i.texSubImage3D(...arguments)}catch(F){$e("WebGLState:",F)}}l(ye,"texSubImage3D");function gt(){try{i.compressedTexSubImage2D(...arguments)}catch(F){$e("WebGLState:",F)}}l(gt,"compressedTexSubImage2D");function ze(){try{i.compressedTexSubImage3D(...arguments)}catch(F){$e("WebGLState:",F)}}l(ze,"compressedTexSubImage3D");function We(){try{i.texStorage2D(...arguments)}catch(F){$e("WebGLState:",F)}}l(We,"texStorage2D");function I(){try{i.texStorage3D(...arguments)}catch(F){$e("WebGLState:",F)}}l(I,"texStorage3D");function w(){try{i.texImage2D(...arguments)}catch(F){$e("WebGLState:",F)}}l(w,"texImage2D");function q(){try{i.texImage3D(...arguments)}catch(F){$e("WebGLState:",F)}}l(q,"texImage3D");function fe(F){return p[F]!==void 0?p[F]:i.getParameter(F)}l(fe,"getParameter");function ae(F,ce){p[F]!==ce&&(i.pixelStorei(F,ce),p[F]=ce)}l(ae,"pixelStorei");function Me(F){Q.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Q.copy(F))}l(Me,"scissor");function Ce(F){pe.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),pe.copy(F))}l(Ce,"viewport");function se(F,ce){let re=u.get(ce);re===void 0&&(re=new WeakMap,u.set(ce,re));let Ae=re.get(F);Ae===void 0&&(Ae=i.getUniformBlockIndex(ce,F.name),i.uniformBlockBinding(ce,Ae,Ae),re.set(F,Ae))}l(se,"updateUBOMapping");function oe(F,ce,re){let ve=u.get(ce).get(F);c[ve]!==re&&(i.bindBufferBase(i.UNIFORM_BUFFER,ve,re),c[ve]=re)}l(oe,"uniformBlockBinding");function Ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},$=null,j={},f={},c={},m=new WeakMap,x=[],b=null,g=!1,_=null,v=null,E=null,M=null,R=null,A=null,y=null,S=new Be(0,0,0),L=0,P=!1,D=null,O=null,X=null,U=null,Y=null,Q.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return l(Ee,"reset"),{buffers:{color:s,depth:a,stencil:o},enable:ue,disable:ee,bindFramebuffer:me,drawBuffers:ie,useProgram:xe,setBlending:qe,setMaterial:Ke,setFlipSided:lt,setCullFace:je,setLineWidth:St,setPolygonOffset:ct,setScissorTest:wt,activeTexture:Dt,bindTexture:ot,unbindTexture:G,compressedTexImage2D:Je,compressedTexImage3D:tt,texImage2D:w,texImage3D:q,pixelStorei:ae,getParameter:fe,updateUBOMapping:se,uniformBlockBinding:oe,texStorage2D:We,texStorage3D:I,texSubImage2D:at,texSubImage3D:ye,compressedTexSubImage2D:gt,compressedTexSubImage3D:ze,scissor:Me,viewport:Ce,reset:Ee}}l(JA,"WebGLState");function KA(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new He,h=new WeakMap,p=new Set,f,m=new WeakMap,x=new Set,b=new FinalizationRegistry(I=>x.delete(I)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(I,w){return g?new OffscreenCanvas(I,w):fl("canvas")}l(_,"createCanvas");function v(I,w,q){let fe=1,ae=We(I);if((ae.width>q||ae.height>q)&&(fe=q/Math.max(ae.width,ae.height)),fe<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let Me=Math.floor(fe*ae.width),Ce=Math.floor(fe*ae.height);f===void 0&&(f=_(Me,Ce));let se=w?_(Me,Ce):f;return se.width=Me,se.height=Ce,se.getContext("2d").drawImage(I,0,0,Me,Ce),Ye("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+Me+"x"+Ce+")."),se}else return"data"in I&&Ye("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),I;return I}l(v,"resizeImage");function E(I){return I.generateMipmaps}l(E,"textureNeedsGenerateMipmaps");function M(I){i.generateMipmap(I)}l(M,"generateMipmap");function R(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}l(R,"getTargetType");function A(I,w,q,fe,ae,Me=!1){if(I!==null){if(i[I]!==void 0)return i[I];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Ce;fe&&(Ce=e.get("EXT_texture_norm16"),Ce||Ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let se=w;if(w===i.RED&&(q===i.FLOAT&&(se=i.R32F),q===i.HALF_FLOAT&&(se=i.R16F),q===i.UNSIGNED_BYTE&&(se=i.R8),q===i.UNSIGNED_SHORT&&Ce&&(se=Ce.R16_EXT),q===i.SHORT&&Ce&&(se=Ce.R16_SNORM_EXT)),w===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(se=i.R8UI),q===i.UNSIGNED_SHORT&&(se=i.R16UI),q===i.UNSIGNED_INT&&(se=i.R32UI),q===i.BYTE&&(se=i.R8I),q===i.SHORT&&(se=i.R16I),q===i.INT&&(se=i.R32I)),w===i.RG&&(q===i.FLOAT&&(se=i.RG32F),q===i.HALF_FLOAT&&(se=i.RG16F),q===i.UNSIGNED_BYTE&&(se=i.RG8),q===i.UNSIGNED_SHORT&&Ce&&(se=Ce.RG16_EXT),q===i.SHORT&&Ce&&(se=Ce.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(se=i.RG8UI),q===i.UNSIGNED_SHORT&&(se=i.RG16UI),q===i.UNSIGNED_INT&&(se=i.RG32UI),q===i.BYTE&&(se=i.RG8I),q===i.SHORT&&(se=i.RG16I),q===i.INT&&(se=i.RG32I)),w===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(se=i.RGB8UI),q===i.UNSIGNED_SHORT&&(se=i.RGB16UI),q===i.UNSIGNED_INT&&(se=i.RGB32UI),q===i.BYTE&&(se=i.RGB8I),q===i.SHORT&&(se=i.RGB16I),q===i.INT&&(se=i.RGB32I)),w===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(se=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(se=i.RGBA16UI),q===i.UNSIGNED_INT&&(se=i.RGBA32UI),q===i.BYTE&&(se=i.RGBA8I),q===i.SHORT&&(se=i.RGBA16I),q===i.INT&&(se=i.RGBA32I)),w===i.RGB&&(q===i.UNSIGNED_SHORT&&Ce&&(se=Ce.RGB16_EXT),q===i.SHORT&&Ce&&(se=Ce.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(se=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(se=i.R11F_G11F_B10F)),w===i.RGBA){let oe=Me?dl:dt.getTransfer(ae);q===i.FLOAT&&(se=i.RGBA32F),q===i.HALF_FLOAT&&(se=i.RGBA16F),q===i.UNSIGNED_BYTE&&(se=oe===_t?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&Ce&&(se=Ce.RGBA16_EXT),q===i.SHORT&&Ce&&(se=Ce.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)}return(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}l(A,"getInternalFormat");function y(I,w){let q;return I?w===null||w===Si||w===Xs?q=i.DEPTH24_STENCIL8:w===wi?q=i.DEPTH32F_STENCIL8:w===co&&(q=i.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Si||w===Xs?q=i.DEPTH_COMPONENT24:w===wi?q=i.DEPTH_COMPONENT32F:w===co&&(q=i.DEPTH_COMPONENT16),q}l(y,"getInternalDepthFormat");function S(I,w){return E(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ht&&I.minFilter!==Wt?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}l(S,"getMipLevels");function L(I){let w=new WeakRef(I);n.get(I).__ref=w,x.add(w),b.register(I,w,w)}l(L,"track");function P(I){let w=n.get(I).__ref;w!==void 0&&(x.delete(w),b.unregister(w))}l(P,"untrack");function D(I){X(I.target)}l(D,"onTextureDispose");function O(I){U(I.target)}l(O,"onRenderTargetDispose");function X(I){I.removeEventListener("dispose",D),P(I),ne(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&p.delete(I)}l(X,"destroyTexture");function U(I){I.removeEventListener("dispose",O),P(I),J(I)}l(U,"destroyRenderTarget");function Y(){for(let I of x){let w=I.deref();w!==void 0&&(w.isRenderTarget===!0?U(w):X(w))}x.clear(),p.clear()}l(Y,"dispose");function ne(I){let w=n.get(I);if(w.__webglInit===void 0)return;let q=I.source,fe=m.get(q);if(fe){let ae=fe[w.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&B(I),Object.keys(fe).length===0&&m.delete(q)}n.remove(I)}l(ne,"deallocateTexture");function B(I){let w=n.get(I);i.deleteTexture(w.__webglTexture);let q=I.source,fe=m.get(q);delete fe[w.__cacheKey],a.memory.textures--}l(B,"deleteTexture");function J(I){let w=n.get(I);w.__depthDisposeCallback&&w.__depthDisposeCallback();let q=I.depthTexture;if(q&&q.renderTarget===I&&X(q),I.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(w.__webglFramebuffer[ae]))for(let Me=0;Me<w.__webglFramebuffer[ae].length;Me++)i.deleteFramebuffer(w.__webglFramebuffer[ae][Me]);else i.deleteFramebuffer(w.__webglFramebuffer[ae]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[ae])}else{if(Array.isArray(w.__webglFramebuffer))for(let ae=0;ae<w.__webglFramebuffer.length;ae++)i.deleteFramebuffer(w.__webglFramebuffer[ae]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ae=0;ae<w.__webglColorRenderbuffer.length;ae++)w.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[ae]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let fe=I.textures;for(let ae=0,Me=fe.length;ae<Me;ae++){let Ce=n.get(fe[ae]);Ce.__webglTexture&&(i.deleteTexture(Ce.__webglTexture),a.memory.textures--),n.remove(fe[ae])}n.remove(I)}l(J,"deallocateRenderTarget");let H=0;function $(){H=0}l($,"resetTextureUnits");function j(){return H}l(j,"getTextureUnits");function he(I){H=I}l(he,"setTextureUnits");function ge(){let I=H;return I>=r.maxTextures&&Ye("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+r.maxTextures),H+=1,I}l(ge,"allocateTextureUnit");function Q(I){let w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.mipmapsAutoUpdate),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}l(Q,"getTextureCacheKey");function pe(I,w){let q=n.get(I);if(I.isVideoTexture&&gt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&q.__version!==I.version){let fe=I.image;if(fe===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{Ke(q,I,w);return}}else I.isExternalTexture&&(q.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+w)}l(pe,"setTexture2D");function le(I,w){let q=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){Ke(q,I,w);return}else I.isExternalTexture&&(q.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+w)}l(le,"setTexture2DArray");function de(I,w){let q=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){Ke(q,I,w);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+w)}l(de,"setTexture3D");function ue(I,w){let q=n.get(I);if(I.version>0&&q.__version!==I.version){lt(q,I,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+w)}l(ue,"setTextureCube");let ee={[Gi]:i.REPEAT,[ri]:i.CLAMP_TO_EDGE,[Fu]:i.MIRRORED_REPEAT},me={[Ht]:i.NEAREST,[p_]:i.NEAREST_MIPMAP_NEAREST,[Nl]:i.NEAREST_MIPMAP_LINEAR,[Wt]:i.LINEAR,[Th]:i.LINEAR_MIPMAP_NEAREST,[Gn]:i.LINEAR_MIPMAP_LINEAR},ie={[__]:i.NEVER,[Mp]:i.ALWAYS,[y_]:i.LESS,[bp]:i.LEQUAL,[b_]:i.EQUAL,[vp]:i.GEQUAL,[v_]:i.GREATER,[M_]:i.NOTEQUAL};function xe(I,w){if(w.type===wi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Wt||w.magFilter===Th||w.magFilter===Nl||w.magFilter===Gn||w.minFilter===Wt||w.minFilter===Th||w.minFilter===Nl||w.minFilter===Gn)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,ee[w.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,ee[w.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,ee[w.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,me[w.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,me[w.minFilter]),w.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,ie[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ht||w.minFilter!==Nl&&w.minFilter!==Gn||w.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}l(xe,"setTextureParameters");function Se(I,w){let q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",D),L(w));let fe=w.source,ae=m.get(fe);ae===void 0&&(ae={},m.set(fe,ae));let Me=Q(w);if(Me!==I.__cacheKey){ae[Me]===void 0&&(ae[Me]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),ae[Me].usedTimes++;let Ce=ae[I.__cacheKey];Ce!==void 0&&(ae[I.__cacheKey].usedTimes--,Ce.usedTimes===0&&B(w)),I.__cacheKey=Me,I.__webglTexture=ae[Me].texture}return q}l(Se,"initTexture");function be(I,w,q){return Math.floor(Math.floor(I/q)/w)}l(be,"getRow");function qe(I,w,q,fe){let Me=I.updateRanges;if(Me.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,q,fe,w.data);else{Me.sort((F,ce)=>F.start-ce.start);let Ce=0;for(let F=1;F<Me.length;F++){let ce=Me[Ce],re=Me[F],Ae=ce.start+ce.count,ve=be(re.start,w.width,4),we=be(ce.start,w.width,4);re.start<=Ae+1&&ve===we&&be(re.start+re.count-1,w.width,4)===ve?ce.count=Math.max(ce.count,re.start+re.count-ce.start):(++Ce,Me[Ce]=re)}Me.length=Ce+1;let se=t.getParameter(i.UNPACK_ROW_LENGTH),oe=t.getParameter(i.UNPACK_SKIP_PIXELS),Ee=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let F=0,ce=Me.length;F<ce;F++){let re=Me[F],Ae=Math.floor(re.start/4),ve=Math.ceil(re.count/4),we=Ae%w.width,Ge=Math.floor(Ae/w.width),rt=ve,_e=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,we),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ge),t.texSubImage2D(i.TEXTURE_2D,0,we,Ge,rt,_e,q,fe,w.data)}I.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,se),t.pixelStorei(i.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ee)}}l(qe,"updateTexture");function Ke(I,w,q){let fe=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(fe=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(fe=i.TEXTURE_3D);let ae=Se(I,w),Me=w.source;t.bindTexture(fe,I.__webglTexture,i.TEXTURE0+q);let Ce=n.get(Me);if(Me.version!==Ce.__version||ae===!0){if(t.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let _e=dt.getPrimaries(dt.workingColorSpace),Ve=w.colorSpace===Ei?null:dt.getPrimaries(w.colorSpace),nt=w.colorSpace===Ei||_e===Ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt)}t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let oe=v(w.image,!1,r.maxTextureSize);oe=ze(w,oe);let Ee=s.convert(w.format,w.colorSpace),F=s.convert(w.type),ce=A(w.internalFormat,Ee,F,w.normalized,w.colorSpace,w.isVideoTexture);xe(fe,w);let re,Ae=w.mipmaps,ve=w.isVideoTexture!==!0,we=Ce.__version===void 0||ae===!0,Ge=Me.dataReady,rt=S(w,oe);if(w.isDepthTexture)ce=y(w.format===Rr,w.type),we&&(ve?t.texStorage2D(i.TEXTURE_2D,1,ce,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,ce,oe.width,oe.height,0,Ee,F,null));else if(w.isDataTexture)if(Ae.length>0){ve&&we&&t.texStorage2D(i.TEXTURE_2D,rt,ce,Ae[0].width,Ae[0].height);for(let _e=0,Ve=Ae.length;_e<Ve;_e++)re=Ae[_e],ve?Ge&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,re.width,re.height,Ee,F,re.data):t.texImage2D(i.TEXTURE_2D,_e,ce,re.width,re.height,0,Ee,F,re.data);w.generateMipmaps=!1}else ve?(we&&t.texStorage2D(i.TEXTURE_2D,rt,ce,oe.width,oe.height),Ge&&qe(w,oe,Ee,F)):t.texImage2D(i.TEXTURE_2D,0,ce,oe.width,oe.height,0,Ee,F,oe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ve&&we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,rt,ce,Ae[0].width,Ae[0].height,oe.depth);for(let _e=0,Ve=Ae.length;_e<Ve;_e++)if(re=Ae[_e],w.format!==Hn)if(Ee!==null)if(ve){if(Ge)if(w.layerUpdates.size>0){let nt=Cp(re.width,re.height,w.format,w.type);for(let Le of w.layerUpdates){let yt=re.data.subarray(Le*nt/re.data.BYTES_PER_ELEMENT,(Le+1)*nt/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,Le,re.width,re.height,1,Ee,yt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,re.width,re.height,oe.depth,Ee,re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,_e,ce,re.width,re.height,oe.depth,0,re.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ve?Ge&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,re.width,re.height,oe.depth,Ee,F,re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,_e,ce,re.width,re.height,oe.depth,0,Ee,F,re.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{ve&&we&&t.texStorage2D(i.TEXTURE_2D,rt,ce,Ae[0].width,Ae[0].height);for(let _e=0,Ve=Ae.length;_e<Ve;_e++)re=Ae[_e],w.format!==Hn?Ee!==null?ve?Ge&&t.compressedTexSubImage2D(i.TEXTURE_2D,_e,0,0,re.width,re.height,Ee,re.data):t.compressedTexImage2D(i.TEXTURE_2D,_e,ce,re.width,re.height,0,re.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?Ge&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,re.width,re.height,Ee,F,re.data):t.texImage2D(i.TEXTURE_2D,_e,ce,re.width,re.height,0,Ee,F,re.data)}else if(w.isDataArrayTexture)if(ve){if(we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,rt,ce,oe.width,oe.height,oe.depth),Ge)if(w.layerUpdates.size>0){let _e=Cp(oe.width,oe.height,w.format,w.type);for(let Ve of w.layerUpdates){let nt=oe.data.subarray(Ve*_e/oe.data.BYTES_PER_ELEMENT,(Ve+1)*_e/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ve,oe.width,oe.height,1,Ee,F,nt)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Ee,F,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ce,oe.width,oe.height,oe.depth,0,Ee,F,oe.data);else if(w.isData3DTexture)ve?(we&&t.texStorage3D(i.TEXTURE_3D,rt,ce,oe.width,oe.height,oe.depth),Ge&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Ee,F,oe.data)):t.texImage3D(i.TEXTURE_3D,0,ce,oe.width,oe.height,oe.depth,0,Ee,F,oe.data);else if(w.isFramebufferTexture){if(we)if(ve)t.texStorage2D(i.TEXTURE_2D,rt,ce,oe.width,oe.height);else{let _e=oe.width,Ve=oe.height;for(let nt=0;nt<rt;nt++)t.texImage2D(i.TEXTURE_2D,nt,ce,_e,Ve,0,Ee,F,null),_e>>=1,Ve>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let _e=i.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),oe.parentNode!==_e){_e.appendChild(oe),p.add(w),_e.onpaint=Ve=>{let nt=Ve.changedElements;for(let Le of p)nt.includes(Le.image)&&(Le.needsUpdate=!0)},_e.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,oe);else{let nt=i.RGBA,Le=i.RGBA,yt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,nt,Le,yt,oe)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(ve&&we){let _e=We(Ae[0]);t.texStorage2D(i.TEXTURE_2D,rt,ce,_e.width,_e.height)}for(let _e=0,Ve=Ae.length;_e<Ve;_e++)re=Ae[_e],ve?Ge&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,Ee,F,re):t.texImage2D(i.TEXTURE_2D,_e,ce,Ee,F,re);w.generateMipmaps=!1}else if(ve){if(we){let _e=We(oe);t.texStorage2D(i.TEXTURE_2D,rt,ce,_e.width,_e.height)}Ge&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,F,oe)}else t.texImage2D(i.TEXTURE_2D,0,ce,Ee,F,oe);E(w)&&w.mipmapsAutoUpdate===!0&&M(fe),Ce.__version=Me.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}l(Ke,"uploadTexture");function lt(I,w,q){if(w.image.length!==6)return;let fe=Se(I,w),ae=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+q);let Me=n.get(ae);if(ae.version!==Me.__version||fe===!0){t.activeTexture(i.TEXTURE0+q);let Ce=dt.getPrimaries(dt.workingColorSpace),se=w.colorSpace===Ei?null:dt.getPrimaries(w.colorSpace),oe=w.colorSpace===Ei||Ce===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let Ee=w.isCompressedTexture||w.image[0].isCompressedTexture,F=w.image[0]&&w.image[0].isDataTexture,ce=[];for(let Le=0;Le<6;Le++)!Ee&&!F?ce[Le]=v(w.image[Le],!0,r.maxCubemapSize):ce[Le]=F?w.image[Le].image:w.image[Le],ce[Le]=ze(w,ce[Le]);let re=ce[0],Ae=s.convert(w.format,w.colorSpace),ve=s.convert(w.type),we=A(w.internalFormat,Ae,ve,w.normalized,w.colorSpace),Ge=w.isVideoTexture!==!0,rt=Me.__version===void 0||fe===!0,_e=ae.dataReady,Ve=S(w,re);xe(i.TEXTURE_CUBE_MAP,w);let nt;if(w.isDepthTexture){if(we=y(w.format===Rr,w.type),rt)if(Ge)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,we,re.width,re.height);else for(let Le=0;Le<6;Le++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,we,re.width,re.height,0,Ae,ve,null)}else if(Ee){Ge&&rt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ve,we,re.width,re.height);for(let Le=0;Le<6;Le++){nt=ce[Le].mipmaps;for(let yt=0;yt<nt.length;yt++){let Jt=nt[yt];w.format!==Hn?Ae!==null?Ge?_e&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,yt,0,0,Jt.width,Jt.height,Ae,Jt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,yt,we,Jt.width,Jt.height,0,Jt.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,yt,0,0,Jt.width,Jt.height,Ae,ve,Jt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,yt,we,Jt.width,Jt.height,0,Ae,ve,Jt.data)}}}else{if(nt=w.mipmaps,Ge&&rt){nt.length>0&&Ve++;let Le=We(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ve,we,Le.width,Le.height)}for(let Le=0;Le<6;Le++)if(F){Ge?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,ce[Le].width,ce[Le].height,Ae,ve,ce[Le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,we,ce[Le].width,ce[Le].height,0,Ae,ve,ce[Le].data);for(let yt=0;yt<nt.length;yt++){let Vr=nt[yt].image[Le].image;Ge?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,yt+1,0,0,Vr.width,Vr.height,Ae,ve,Vr.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,yt+1,we,Vr.width,Vr.height,0,Ae,ve,Vr.data)}}else{Ge?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,Ae,ve,ce[Le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,we,Ae,ve,ce[Le]);for(let yt=0;yt<nt.length;yt++){let Jt=nt[yt];Ge?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,yt+1,0,0,Ae,ve,Jt.image[Le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,yt+1,we,Ae,ve,Jt.image[Le])}}}E(w)&&w.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),Me.__version=ae.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}l(lt,"uploadCubeTexture");function je(I,w,q,fe,ae,Me){let Ce=s.convert(q.format,q.colorSpace),se=s.convert(q.type),oe=A(q.internalFormat,Ce,se,q.normalized,q.colorSpace),Ee=n.get(w),F=n.get(q);if(F.__renderTarget=w,!Ee.__hasExternalTextures){let ce=Math.max(1,w.width>>Me),re=Math.max(1,w.height>>Me);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,Me,oe,ce,re,w.depth,0,Ce,se,null):t.texImage2D(ae,Me,oe,ce,re,0,Ce,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),ye(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,ae,F.__webglTexture,0,at(w)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,fe,ae,F.__webglTexture,Me),t.bindFramebuffer(i.FRAMEBUFFER,null)}l(je,"setupFrameBufferTexture");function St(I,w,q){if(i.bindRenderbuffer(i.RENDERBUFFER,I),w.depthBuffer){let fe=w.depthTexture,ae=fe&&fe.isDepthTexture?fe.type:null,Me=y(w.stencilBuffer,ae),Ce=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ye(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at(w),Me,w.width,w.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,at(w),Me,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Me,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,I)}else{let fe=w.textures;for(let ae=0;ae<fe.length;ae++){let Me=fe[ae],Ce=s.convert(Me.format,Me.colorSpace),se=s.convert(Me.type),oe=A(Me.internalFormat,Ce,se,Me.normalized,Me.colorSpace);ye(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at(w),oe,w.width,w.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,at(w),oe,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,oe,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}l(St,"setupRenderBufferStorage");function ct(I,w,q){let fe=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ae=n.get(w.depthTexture);ae.__renderTarget=w;let Me=fe?w.depthTexture.image[0]:w.depthTexture.image;(!ae.__webglTexture||Me.width!==w.width||Me.height!==w.height)&&(Me.width=w.width,Me.height=w.height,w.depthTexture.needsUpdate=!0),fe?ue(w.depthTexture,0):pe(w.depthTexture,0);let Ce=ae.__webglTexture,se=at(w),oe=fe?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,Ee=w.depthTexture.format===Rr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===Mr)ye(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ee,oe,Ce,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,Ee,oe,Ce,0);else if(w.depthTexture.format===Rr)ye(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ee,oe,Ce,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,Ee,oe,Ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}l(ct,"setupDepthTexture");function wt(I){let w=n.get(I),q=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){let fe=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),fe){let ae=l(()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,fe.removeEventListener("dispose",ae)},"disposeEvent");fe.addEventListener("dispose",ae),w.__depthDisposeCallback=ae}w.__boundDepthTexture=fe}if(I.depthTexture&&!w.__autoAllocateDepthBuffer)if(q)for(let fe=0;fe<6;fe++)ct(w.__webglFramebuffer[fe],I,fe);else I.texture.mipmaps.length>0?ct(w.__webglFramebuffer[0],I,0):ct(w.__webglFramebuffer,I,0);else if(q){w.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[fe]),w.__webglDepthbuffer[fe]===void 0)w.__webglDepthbuffer[fe]=i.createRenderbuffer(),St(w.__webglDepthbuffer[fe],I,!1);else{let ae=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=w.__webglDepthbuffer[fe];i.bindRenderbuffer(i.RENDERBUFFER,Me),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,Me)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),St(w.__webglDepthbuffer,I,!1);else{let ae=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Me),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,Me)}t.bindFramebuffer(i.FRAMEBUFFER,null)}l(wt,"setupDepthRenderbuffer");function Dt(I,w,q){let fe=n.get(I);w!==void 0&&je(fe.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&wt(I)}l(Dt,"rebindTextures");function ot(I){let w=I.texture,q=n.get(I),fe=n.get(w);I.addEventListener("dispose",O),L(I);let ae=I.textures,Me=I.isWebGLCubeRenderTarget===!0,Ce=ae.length>1;if(Ce||(fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture()),fe.__version=w.version,a.memory.textures++),Me){q.__webglFramebuffer=[];for(let se=0;se<6;se++)if(w.mipmaps.length>0){q.__webglFramebuffer[se]=[];for(let oe=0;oe<w.mipmaps.length;oe++)q.__webglFramebuffer[se][oe]=i.createFramebuffer()}else q.__webglFramebuffer[se]=i.createFramebuffer()}else{if(w.mipmaps.length>0){q.__webglFramebuffer=[];for(let se=0;se<w.mipmaps.length;se++)q.__webglFramebuffer[se]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let se=0,oe=ae.length;se<oe;se++){let Ee=n.get(ae[se]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&ye(I)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let se=0;se<ae.length;se++){let oe=ae[se];q.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[se]);let Ee=s.convert(oe.format,oe.colorSpace),F=s.convert(oe.type),ce=A(oe.internalFormat,Ee,F,oe.normalized,oe.colorSpace,I.isXRRenderTarget===!0),re=at(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,re,ce,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,q.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),St(q.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Me){t.bindTexture(i.TEXTURE_CUBE_MAP,fe.__webglTexture),xe(i.TEXTURE_CUBE_MAP,w);for(let se=0;se<6;se++)if(w.mipmaps.length>0)for(let oe=0;oe<w.mipmaps.length;oe++)je(q.__webglFramebuffer[se][oe],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,oe);else je(q.__webglFramebuffer[se],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);E(w)?M(i.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}else if(Ce){for(let se=0,oe=ae.length;se<oe;se++){let Ee=ae[se],F=n.get(Ee),ce=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ce=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,F.__webglTexture),xe(ce,Ee),je(q.__webglFramebuffer,I,Ee,i.COLOR_ATTACHMENT0+se,ce,0),E(Ee)&&M(ce)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(se=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,fe.__webglTexture),xe(se,w),w.mipmaps.length>0)for(let oe=0;oe<w.mipmaps.length;oe++)je(q.__webglFramebuffer[oe],I,w,i.COLOR_ATTACHMENT0,se,oe);else je(q.__webglFramebuffer,I,w,i.COLOR_ATTACHMENT0,se,0);E(w)?M(se):w.mipmaps.length>0&&i.texParameteri(se,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&wt(I)}l(ot,"setupRenderTarget");function G(I){let w=I.textures;for(let q=0,fe=w.length;q<fe;q++){let ae=w[q];if(E(ae)&&ae.mipmapsAutoUpdate===!0){let Me=R(I),Ce=n.get(ae).__webglTexture;t.bindTexture(Me,Ce),M(Me),t.unbindTexture()}}}l(G,"updateRenderTargetMipmap");let Je=[];function tt(I){if(I.samples>0){if(ye(I)===!1){let w=I.textures,q=I.width,fe=I.height,ae=i.COLOR_BUFFER_BIT,Me=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(I),se=w.length>1;if(se)for(let Ee=0;Ee<w.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Ee=0;Ee<w.length;Ee++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ee]);let F=n.get(w[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,F,0)}i.blitFramebuffer(0,0,q,fe,0,0,q,fe,ae,i.NEAREST),c===!0&&(Je.length=0,Je.push(i.COLOR_ATTACHMENT0+Ee),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&Je.push(Me),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Je))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let Ee=0;Ee<w.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ee]);let F=n.get(w[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,F,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&c){let w=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}l(tt,"updateMultisampleRenderTarget");function at(I){return Math.min(r.maxSamples,I.samples)}l(at,"getRenderTargetSamples");function ye(I){let w=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}l(ye,"useMultisampledRTT");function gt(I){let w=a.render.frame;h.get(I)!==w&&(h.set(I,w),I.update())}l(gt,"updateVideoTexture");function ze(I,w){let q=I.colorSpace,fe=I.format,ae=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||q!==hl&&q!==Ei&&(dt.getTransfer(q)===_t?(fe!==Hn||ae!==pn)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",q)),w}l(ze,"verifyColorSpace");function We(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(u.width=I.naturalWidth||I.width,u.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(u.width=I.displayWidth,u.height=I.displayHeight):(u.width=I.width,u.height=I.height),u}l(We,"getDimensions"),this.allocateTextureUnit=ge,this.resetTextureUnits=$,this.getTextureUnits=j,this.setTextureUnits=he,this.setTexture2D=pe,this.setTexture2DArray=le,this.setTexture3D=de,this.setTextureCube=ue,this.rebindTextures=Dt,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=je,this.useMultisampledRTT=ye,this.dispose=Y}l(KA,"WebGLTextures");function jA(i,e){function t(n,r=Ei){let s,a=dt.getTransfer(r);if(n===pn)return i.UNSIGNED_BYTE;if(n===Rh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ph)return i.UNSIGNED_SHORT_5_5_5_1;if(n===mp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gp)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===fp)return i.BYTE;if(n===pp)return i.SHORT;if(n===co)return i.UNSIGNED_SHORT;if(n===Ch)return i.INT;if(n===Si)return i.UNSIGNED_INT;if(n===wi)return i.FLOAT;if(n===Vn)return i.HALF_FLOAT;if(n===xp)return i.ALPHA;if(n===_p)return i.RGB;if(n===Hn)return i.RGBA;if(n===Mr)return i.DEPTH_COMPONENT;if(n===Rr)return i.DEPTH_STENCIL;if(n===yp)return i.RED;if(n===Ih)return i.RED_INTEGER;if(n===$i)return i.RG;if(n===Lh)return i.RG_INTEGER;if(n===Dh)return i.RGBA_INTEGER;if(n===Ul||n===Fl||n===Ol||n===Bl)if(a===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ul)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ul)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ol)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Bl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Nh||n===Uh||n===Fh||n===Oh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Nh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Uh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bh||n===kh||n===zh||n===Gh||n===Vh||n===kl||n===Hh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Bh||n===kh)return a===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===zh)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Gh)return s.COMPRESSED_R11_EAC;if(n===Vh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===kl)return s.COMPRESSED_RG11_EAC;if(n===Hh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Wh||n===Xh||n===qh||n===Yh||n===$h||n===Zh||n===Jh||n===Kh||n===jh||n===Qh||n===ed||n===td||n===nd||n===id)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Wh)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xh)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qh)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yh)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$h)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zh)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jh)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Kh)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jh)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qh)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ed)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===td)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nd)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===id)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rd||n===sd||n===ad)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===rd)return a===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ad)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===od||n===ld||n===zl||n===cd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===od)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ld)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return l(t,"convert"),{convert:t}}l(jA,"WebGLUtils");var QA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eT=`
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

}`,a0=class a0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Sl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new En({vertexShader:QA,fragmentShader:eT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vt(new qi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};l(a0,"WebXRDepthSensing");var Km=a0,o0=class o0 extends Vi{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",c=1,u=null,h=null,p=null,f=null,m=null,x=null,b=typeof XRWebGLBinding<"u",g=new Km,_={},v=t.getContextAttributes(),E=null,M=null,R=[],A=[],y=new He,S=null,L=null,P=new Mn;P.viewport=new Nt;let D=new Mn;D.viewport=new Nt;let O=[P,D],X=new sh,U=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let pe=R[Q];return pe===void 0&&(pe=new eo,R[Q]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(Q){let pe=R[Q];return pe===void 0&&(pe=new eo,R[Q]=pe),pe.getGripSpace()},this.getHand=function(Q){let pe=R[Q];return pe===void 0&&(pe=new eo,R[Q]=pe),pe.getHandSpace()};function ne(Q){let pe=A.indexOf(Q.inputSource);if(pe===-1)return;let le=R[pe];le!==void 0&&(le.update(Q.inputSource,Q.frame,u||a),le.dispatchEvent({type:Q.type,data:Q.inputSource}))}l(ne,"onSessionEvent");function B(){r.removeEventListener("select",ne),r.removeEventListener("selectstart",ne),r.removeEventListener("selectend",ne),r.removeEventListener("squeeze",ne),r.removeEventListener("squeezestart",ne),r.removeEventListener("squeezeend",ne),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",J);for(let Q=0;Q<R.length;Q++){let pe=A[Q];pe!==null&&(A[Q]=null,R[Q].disconnect(pe))}U=null,Y=null,g.reset();for(let Q in _)delete _[Q];if(e.setRenderTarget(E),m=null,f=null,p=null,r=null,M=null,ge.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(y.width,y.height,!1),L!==null){let Q=L.camera;Q.fov=L.fov,Q.zoom=L.zoom,Q.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}l(B,"onSessionEnd"),this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(Q){u=Q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",ne),r.addEventListener("selectstart",ne),r.addEventListener("selectend",ne),r.addEventListener("squeeze",ne),r.addEventListener("squeezestart",ne),r.addEventListener("squeezeend",ne),r.addEventListener("end",B),r.addEventListener("inputsourceschange",J),v.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(y),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,de=null,ue=null;v.depth&&(ue=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=v.stencil?Rr:Mr,de=v.stencil?Xs:Si);let ee={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};p=this.getBinding(),f=p.createProjectionLayer(ee),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Bn(f.textureWidth,f.textureHeight,{format:Hn,type:pn,depthTexture:new Ar(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let le={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new Bn(m.framebufferWidth,m.framebufferHeight,{format:Hn,type:pn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),ge.setContext(r),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function J(Q){for(let pe=0;pe<Q.removed.length;pe++){let le=Q.removed[pe],de=A.indexOf(le);de>=0&&(A[de]=null,R[de].disconnect(le))}for(let pe=0;pe<Q.added.length;pe++){let le=Q.added[pe],de=A.indexOf(le);if(de===-1){for(let ee=0;ee<R.length;ee++)if(ee>=A.length){A.push(le),de=ee;break}else if(A[ee]===null){A[ee]=le,de=ee;break}if(de===-1)break}let ue=R[de];ue&&ue.connect(le)}}l(J,"onInputSourcesChange");function H(Q,pe){pe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(pe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}l(H,"updateCamera"),this.updateCamera=function(Q){if(r===null)return;let pe=Q.near,le=Q.far;g.texture!==null&&(g.depthNear>0&&(pe=g.depthNear),g.depthFar>0&&(le=g.depthFar)),X.near=D.near=P.near=pe,X.far=D.far=P.far=le,(U!==X.near||Y!==X.far)&&(r.updateRenderState({depthNear:X.near,depthFar:X.far}),U=X.near,Y=X.far),X.layers.mask=Q.layers.mask|6,P.layers.mask=X.layers.mask&-5,D.layers.mask=X.layers.mask&-3;let de=Q.parent,ue=X.cameras;H(X,de);for(let ee=0;ee<ue.length;ee++)H(ue[ee],de);X.projectionMatrix.copy(P.projectionMatrix),X.projectionMatrixInverse.copy(P.projectionMatrixInverse),L===null&&Q.isPerspectiveCamera&&(L={camera:Q,fov:Q.fov,zoom:Q.zoom}),$(Q,X,de)};function $(Q,pe,le){le===null?Q.matrix.copy(pe.matrixWorld):(Q.matrix.copy(le.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(pe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(pe.projectionMatrix),Q.projectionMatrixInverse.copy(pe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Bu*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}l($,"updateUserCamera"),this.getCamera=function(){return X},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(Q){c=Q,f!==null&&(f.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(X)},this.getCameraTexture=function(Q){return _[Q]};let j=null;function he(Q,pe){if(h=pe.getViewerPose(u||a),x=pe,h!==null){let le=h.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let de=!1;le.length!==X.cameras.length&&(X.cameras.length=0,de=!0);for(let ie=0;ie<le.length;ie++){let xe=le[ie],Se=null;if(m!==null)Se=m.getViewport(xe);else{let qe=p.getViewSubImage(f,xe);Se=qe.viewport,ie===0&&(e.setRenderTargetTextures(M,qe.colorTexture,qe.depthStencilTexture),e.setRenderTarget(M))}let be=O[ie];be===void 0&&(be=new Mn,be.layers.enable(ie),be.viewport=new Nt,O[ie]=be),be.matrix.fromArray(xe.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(xe.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Se.x,Se.y,Se.width,Se.height),ie===0&&(X.matrix.copy(be.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),de===!0&&X.cameras.push(be)}let ue=r.enabledFeatures;if(ue&&ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){p=n.getBinding();let ie=p.getDepthInformation(le[0]);ie&&ie.isValid&&ie.texture&&g.init(ie,r.renderState)}if(ue&&ue.includes("camera-access")&&b){e.state.unbindTexture(),p=n.getBinding();for(let ie=0;ie<le.length;ie++){let xe=le[ie].camera;if(xe){let Se=_[xe];Se||(Se=new Sl,_[xe]=Se);let be=p.getCameraImage(xe);Se.sourceTexture=be}}}}for(let le=0;le<R.length;le++){let de=A[le],ue=R[le];de!==null&&ue!==void 0&&ue.update(de,pe,u||a)}j&&j(Q,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),x=null}l(he,"onAnimationFrame");let ge=new ty;ge.setAnimationLoop(he),this.setAnimationLoop=function(Q){j=Q},this.dispose=function(){}}};l(o0,"WebXRManager");var jm=o0,tT=new bt,hy=new Ze;hy.set(-1,0,0,0,1,0,0,0,1);function nT(i,e){function t(g,_){g.matrixAutoUpdate===!0&&g.updateMatrix(),_.value.copy(g.matrix)}l(t,"refreshTransformUniform");function n(g,_){_.color.getRGB(g.fogColor.value,Ep(i)),_.isFog?(g.fogNear.value=_.near,g.fogFar.value=_.far):_.isFogExp2&&(g.fogDensity.value=_.density)}l(n,"refreshFogUniforms");function r(g,_,v,E,M){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?s(g,_):_.isMeshLambertMaterial?(s(g,_),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(s(g,_),p(g,_)):_.isMeshPhongMaterial?(s(g,_),h(g,_),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(s(g,_),f(g,_),_.isMeshPhysicalMaterial&&m(g,_,M)):_.isMeshMatcapMaterial?(s(g,_),x(g,_)):_.isMeshDepthMaterial?s(g,_):_.isMeshDistanceMaterial?(s(g,_),b(g,_)):_.isMeshNormalMaterial?s(g,_):_.isLineBasicMaterial?(a(g,_),_.isLineDashedMaterial&&o(g,_)):_.isPointsMaterial?c(g,_,v,E):_.isSpriteMaterial?u(g,_):_.isShadowMaterial?(g.color.value.copy(_.color),g.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}l(r,"refreshMaterialUniforms");function s(g,_){g.opacity.value=_.opacity,_.color&&g.diffuse.value.copy(_.color),_.emissive&&g.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(g.map.value=_.map,t(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.bumpMap&&(g.bumpMap.value=_.bumpMap,t(_.bumpMap,g.bumpMapTransform),g.bumpScale.value=_.bumpScale,_.side===An&&(g.bumpScale.value*=-1)),_.normalMap&&(g.normalMap.value=_.normalMap,t(_.normalMap,g.normalMapTransform),g.normalScale.value.copy(_.normalScale),_.side===An&&g.normalScale.value.negate()),_.displacementMap&&(g.displacementMap.value=_.displacementMap,t(_.displacementMap,g.displacementMapTransform),g.displacementScale.value=_.displacementScale,g.displacementBias.value=_.displacementBias),_.emissiveMap&&(g.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,g.emissiveMapTransform)),_.specularMap&&(g.specularMap.value=_.specularMap,t(_.specularMap,g.specularMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);let v=e.get(_),E=v.envMap,M=v.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(tT.makeRotationFromEuler(M)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(hy),g.reflectivity.value=_.reflectivity,g.ior.value=_.ior,g.refractionRatio.value=_.refractionRatio),_.lightMap&&(g.lightMap.value=_.lightMap,g.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,g.lightMapTransform)),_.aoMap&&(g.aoMap.value=_.aoMap,g.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,g.aoMapTransform))}l(s,"refreshUniformsCommon");function a(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,_.map&&(g.map.value=_.map,t(_.map,g.mapTransform))}l(a,"refreshUniformsLine");function o(g,_){g.dashSize.value=_.dashSize,g.totalSize.value=_.dashSize+_.gapSize,g.scale.value=_.scale}l(o,"refreshUniformsDash");function c(g,_,v,E){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.size.value=_.size*v,g.scale.value=E*.5,_.map&&(g.map.value=_.map,t(_.map,g.uvTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}l(c,"refreshUniformsPoints");function u(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.rotation.value=_.rotation,_.map&&(g.map.value=_.map,t(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}l(u,"refreshUniformsSprites");function h(g,_){g.specular.value.copy(_.specular),g.shininess.value=Math.max(_.shininess,1e-4)}l(h,"refreshUniformsPhong");function p(g,_){_.gradientMap&&(g.gradientMap.value=_.gradientMap)}l(p,"refreshUniformsToon");function f(g,_){g.metalness.value=_.metalness,_.metalnessMap&&(g.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,g.metalnessMapTransform)),g.roughness.value=_.roughness,_.roughnessMap&&(g.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,g.roughnessMapTransform)),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)}l(f,"refreshUniformsStandard");function m(g,_,v){g.ior.value=_.ior,_.diffuseRoughness>0&&(g.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=_.diffuseRoughnessMap,t(_.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),_.sheen>0&&(g.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),g.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(g.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,g.sheenColorMapTransform)),_.sheenRoughnessMap&&(g.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,g.sheenRoughnessMapTransform))),_.clearcoat>0&&(g.clearcoat.value=_.clearcoat,g.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(g.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,g.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(g.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===An&&g.clearcoatNormalScale.value.negate())),_.dispersion>0&&(g.dispersion.value=_.dispersion),_.retroreflectivity>0&&(g.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(g.iridescence.value=_.iridescence,g.iridescenceIOR.value=_.iridescenceIOR,g.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap&&(g.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,g.iridescenceMapTransform)),_.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),_.transmission>0&&(g.transmission.value=_.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),_.transmissionMap&&(g.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,g.transmissionMapTransform)),g.thickness.value=_.thickness,_.thicknessMap&&(g.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=_.attenuationDistance,g.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(g.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(g.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=_.specularIntensity,g.specularColor.value.copy(_.specularColor),_.specularColorMap&&(g.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,g.specularColorMapTransform)),_.specularIntensityMap&&(g.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,g.specularIntensityMapTransform))}l(m,"refreshUniformsPhysical");function x(g,_){_.matcap&&(g.matcap.value=_.matcap)}l(x,"refreshUniformsMatcap");function b(g,_){let v=e.get(_).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return l(b,"refreshUniformsDistance"),{refreshFogUniforms:n,refreshMaterialUniforms:r}}l(nT,"WebGLMaterials");function iT(i,e,t,n){let r={},s={};function a(v,E){let M=E.program;n.uniformBlockBinding(v,M,r[v.id])}l(a,"bind");function o(v,E){let M=r[v.id];M===void 0&&(x(v),M=c(v),r[v.id]=M,v.addEventListener("dispose",g));let R=E.program;n.updateUBOMapping(v,R);let A=e.render.frame;s[v.id]!==A&&(u(v),s[v.id]=A)}l(o,"update");function c(v){let E=i.createBuffer(),M=v.__size,R=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,M,R),i.bindBuffer(i.UNIFORM_BUFFER,null),E}l(c,"createBuffer");function u(v){let E=r[v.id],M=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let A=0,y=M.length;A<y;A++){let S=M[A];if(Array.isArray(S))for(let L=0,P=S.length;L<P;L++)h(S[L],A,L,R);else h(S,A,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}l(u,"updateBufferData");function h(v,E,M,R){if(f(v,E,M,R)===!0){let A=v.__offset,y=v.value;if(Array.isArray(y)){let S=0;for(let L=0;L<y.length;L++){let P=y[L],D=b(P,!0);p(P,v.__data,S),S+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else p(y,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,v.__data)}}l(h,"updateUniform");function p(v,E,M){typeof v=="number"||typeof v=="boolean"?E[M]=v:v.isMatrix3?(E[M]=v.elements[0],E[M+1]=v.elements[1],E[M+2]=v.elements[2],E[M+3]=0,E[M+4]=v.elements[3],E[M+5]=v.elements[4],E[M+6]=v.elements[5],E[M+7]=0,E[M+8]=v.elements[6],E[M+9]=v.elements[7],E[M+10]=v.elements[8],E[M+11]=0):ArrayBuffer.isView(v)?E.set(v.subarray(0,E.length-M),M):v.toArray(E,M)}l(p,"writeUniformValue");function f(v,E,M,R){let A=v.value,y=E+"_"+M;if(Array.isArray(A)){R[y]===void 0&&(R[y]=[]);let S=R[y],L=!1;for(let P=0;P<A.length;P++)m(A[P],S,P)===!0&&(L=!0);return L}return m(A,R,y)}l(f,"hasUniformChanged");function m(v,E,M){if(E[M]===void 0)return typeof v=="number"||typeof v=="boolean"?E[M]=v:ArrayBuffer.isView(v)?E[M]=v.slice():E[M]=v.clone(),!0;{let R=E[M];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return E[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}l(m,"hasValueChanged");function x(v){let E=v.uniforms,M=0,R=16;for(let y=0,S=E.length;y<S;y++){let L=Array.isArray(E[y])?E[y]:[E[y]];for(let P=0,D=L.length;P<D;P++){let O=L[P],X=Array.isArray(O.value)?O.value:[O.value],U=Array.isArray(E[y])||Array.isArray(O.value),Y=M;for(let B=0,J=X.length;B<J;B++){let H=X[B],$=b(H,U),j=M%R,he=j%$.boundary,ge=j+he;M+=he,ge!==0&&R-ge<$.storage&&(M+=R-ge),B===0&&(Y=M),M+=$.storage}let ne=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new ne((M-Y)/Float32Array.BYTES_PER_ELEMENT),O.__offset=Y}}let A=M%R;return A>0&&(M+=R-A),v.__size=M,v.__cache={},this}l(x,"prepareUniformsGroup");function b(v,E){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=16,M.storage=48):v.isMatrix4?(M.boundary=16,M.storage=64):v.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Ye("WebGLRenderer: Unsupported uniform value type.",v),E===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}l(b,"getUniformSize");function g(v){let E=v.target;E.removeEventListener("dispose",g),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}l(g,"onUniformsGroupsDispose");function _(){for(let v in r)i.deleteBuffer(r[v]);r={},s={}}return l(_,"dispose"),{bind:a,update:o,dispose:_}}l(iT,"WebGLUniformsGroups");var rT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Zi=null;function sT(){return Zi===null&&(Zi=new ro(rT,16,16,$i,Vn),Zi.name="DFG_LUT",Zi.minFilter=Wt,Zi.magFilter=Wt,Zi.wrapS=ri,Zi.wrapT=ri,Zi.generateMipmaps=!1,Zi.needsUpdate=!0),Zi}l(sT,"getDFGLUT");var l0=class l0{constructor(e={}){let{canvas:t=S_(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:m=pn}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let b=m,g=new Set([Dh,Lh,Ih]),_=new Set([pn,Si,co,Xs,Rh,Ph]),v=new Uint32Array(4),E=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},R=null,A=null,y=[],S=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,D=!1,O=null,X=null,U=null,Y=null;this._outputColorSpace=Vt;let ne=0,B=0,J=null,H=-1,$=null,j=new Nt,he=new Nt,ge=null,Q=new Be(0),pe=0,le=t.width,de=t.height,ue=1,ee=null,me=null,ie=new Nt(0,0,le,de),xe=new Nt(0,0,le,de),Se=!1,be=new ts,qe=new Hu,Ke=!1,lt=!1,je=new bt,St=new W,ct=new Nt,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Dt=!1;function ot(){return J===null?ue:1}l(ot,"getTargetPixelRatio");let G=n;function Je(T,k){return t.getContext(T,k)}l(Je,"getContext");let tt,at,ye,gt,ze,We,I,w,q,fe,ae,Me,Ce,se,oe,Ee,F,ce,re,Ae,ve,we,Ge;try{let T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ve,!1),t.addEventListener("webglcontextrestored",nt,!1),t.addEventListener("webglcontextcreationerror",Le,!1),G===null){let k="webgl2";if(G=Je(k,T),G===null)throw Je(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}rt()}catch(T){throw t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),$e("WebGLRenderer: "+T.message),T}function rt(){tt=new gE(G),tt.init(),ve=new jA(G,tt),at=new sE(G,tt,e,ve),ye=new JA(G,tt),at.reversedDepthBuffer&&f&&ye.buffers.depth.setReversed(!0),X=G.createFramebuffer(),U=G.createFramebuffer(),Y=G.createFramebuffer(),gt=new yE(G),ze=new FA,We=new KA(G,tt,ye,ze,at,ve,gt),I=new mE(P),w=new vS(G),we=new iE(G,w),q=new xE(G,w,gt,we),fe=new vE(G,q,w,we,gt),ce=new bE(G,at,We),oe=new aE(ze),ae=new UA(P,I,tt,at,we,oe),Me=new nT(P,ze),Ce=new BA,se=new WA(tt),F=new nE(P,I,ye,fe,x,c),Ee=new ZA(P,fe,at),Ge=new iT(G,gt,at,ye),re=new rE(G,tt,gt),Ae=new _E(G,tt,gt),gt.programs=ae.programs,P.capabilities=at,P.extensions=tt,P.properties=ze,P.renderLists=Ce,P.shadowMap=Ee,P.state=ye,P.info=gt}l(rt,"initGLContext"),b!==pn&&(L=new SE(b,t.width,t.height,o,r,s));let _e=new jm(P,G);this.xr=_e,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let T=tt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=tt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(T){T!==void 0&&(ue=T,this.setSize(le,de,!1))},this.getSize=function(T){return T.set(le,de)},this.setSize=function(T,k,te=!0){if(_e.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}le=T,de=k,t.width=Math.floor(T*ue),t.height=Math.floor(k*ue),te===!0&&(t.style.width=T+"px",t.style.height=k+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(le*ue,de*ue).floor()},this.setDrawingBufferSize=function(T,k,te){le=T,de=k,ue=te,t.width=Math.floor(T*te),t.height=Math.floor(k*te),this.setViewport(0,0,T,k)},this.setEffects=function(T){if(b===pn){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let k=0;k<T.length;k++)if(T[k].isOutputPass===!0){Ye("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(j)},this.getViewport=function(T){return T.copy(ie)},this.setViewport=function(T,k,te,Z){T.isVector4?ie.set(T.x,T.y,T.z,T.w):ie.set(T,k,te,Z),ye.viewport(j.copy(ie).multiplyScalar(ot()).round())},this.getScissor=function(T){return T.copy(xe)},this.setScissor=function(T,k,te,Z){T.isVector4?xe.set(T.x,T.y,T.z,T.w):xe.set(T,k,te,Z),ye.scissor(he.copy(xe).multiplyScalar(ot()).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(T){ye.setScissorTest(Se=T)},this.setOpaqueSort=function(T){ee=T},this.setTransparentSort=function(T){me=T},this.getClearColor=function(T){return T.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(T=!0,k=!0,te=!0){let Z=0;if(T){let K=!1;if(J!==null){let Re=J.texture.format;K=g.has(Re)}if(K){let Re=J.texture.type,Ue=_.has(Re),Te=F.getClearColor(),De=F.getClearAlpha(),ke=Te.r,Qe=Te.g,ut=Te.b;Ue?(v[0]=ke,v[1]=Qe,v[2]=ut,v[3]=De,G.clearBufferuiv(G.COLOR,0,v)):(E[0]=ke,E[1]=Qe,E[2]=ut,E[3]=De,G.clearBufferiv(G.COLOR,0,E))}else Z|=G.COLOR_BUFFER_BIT}k&&(Z|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(Z|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&G.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),O=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),F.dispose(),Ce.dispose(),se.dispose(),We.dispose(),ze.dispose(),I.dispose(),fe.dispose(),q.dispose(),we.dispose(),Ge.dispose(),ae.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",rx),_e.removeEventListener("sessionend",sx),Ds.stop()};function Ve(T){T.preventDefault(),pl("WebGLRenderer: Context Lost."),D=!0}l(Ve,"onContextLost");function nt(){pl("WebGLRenderer: Context Restored."),D=!1;let T=gt.autoReset,k=Ee.enabled,te=Ee.autoUpdate,Z=Ee.needsUpdate,K=Ee.type;rt(),gt.autoReset=T,Ee.enabled=k,Ee.autoUpdate=te,Ee.needsUpdate=Z,Ee.type=K}l(nt,"onContextRestore");function Le(T){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}l(Le,"onContextCreationError");function yt(T){let k=T.target;k.removeEventListener("dispose",yt),Jt(k)}l(yt,"onMaterialDispose");function Jt(T){Vr(T),ze.remove(T)}l(Jt,"deallocateMaterial");function Vr(T){let k=ze.get(T).programs;k!==void 0&&(k.forEach(function(te){ae.releaseProgram(te)}),T.isShaderMaterial&&ae.releaseShaderCache(T))}l(Vr,"releaseMaterialProgramReferences"),this.renderBufferDirect=function(T,k,te,Z,K,Re){k===null&&(k=wt);let Ue=K.isMesh&&K.matrixWorld.determinantAffine()<0,Te=bM(T,k,te,Z,K);ye.setMaterial(Z,Ue);let De=te.index,ke=1;if(Z.wireframe===!0){if(De=q.getWireframeAttribute(te),De===void 0)return;ke=2}let Qe=te.drawRange,ut=te.attributes.position,Fe=Qe.start*ke,ht=(Qe.start+Qe.count)*ke;Re!==null&&(Fe=Math.max(Fe,Re.start*ke),ht=Math.min(ht,(Re.start+Re.count)*ke)),De!==null?(Fe=Math.max(Fe,0),ht=Math.min(ht,De.count)):ut!=null&&(Fe=Math.max(Fe,0),ht=Math.min(ht,ut.count));let zt=ht-Fe;if(zt<0||zt===1/0)return;we.setup(K,Z,Te,te,De);let Tt,Et=re;if(De!==null&&(Tt=w.get(De),Et=Ae,Et.setIndex(Tt)),K.isMesh)Z.wireframe===!0?(ye.setLineWidth(Z.wireframeLinewidth*ot()),Et.setMode(G.LINES)):Et.setMode(G.TRIANGLES);else if(K.isLine){let un=Z.linewidth;un===void 0&&(un=1),ye.setLineWidth(un*ot()),K.isLineSegments?Et.setMode(G.LINES):K.isLineLoop?Et.setMode(G.LINE_LOOP):Et.setMode(G.LINE_STRIP)}else K.isPoints?Et.setMode(G.POINTS):K.isSprite&&Et.setMode(G.TRIANGLES);if(K.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))Et.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let un=K._multiDrawStarts,Oe=K._multiDrawCounts,bn=K._multiDrawCount,xt=De?w.get(De).bytesPerElement:1,Ns=ze.get(Z).currentProgram.getUniforms();for(let hn=0;hn<bn;hn++)Ns.setValue(G,"_gl_DrawID",hn),Et.render(un[hn]/xt,Oe[hn])}else if(K.isInstancedMesh)Et.renderInstances(Fe,zt,K.count);else if(te.isInstancedBufferGeometry){let un=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Oe=Math.min(te.instanceCount,un);Et.renderInstances(Fe,zt,Oe)}else Et.render(Fe,zt)};function ix(T,k,te,Z){O!==null&&T.isNodeMaterial&&O.setObject(Z,T),Ke===!0&&oe.setState(T,te,!1),T.transparent===!0&&T.side===ai&&T.forceSinglePass===!1?(T.side=An,T.needsUpdate=!0,el(T,k,Z),T.side=os,T.needsUpdate=!0,el(T,k,Z),T.side=ai):el(T,k,Z)}l(ix,"prepareMaterial"),this.compile=function(T,k,te=null){te===null&&(te=T),O!==null&&O.renderStart(T,k,te),A=se.get(te),A.init(k),S.push(A),te.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(A.pushLight(K),K.castShadow&&A.pushShadow(K))}),T!==te&&T.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(A.pushLight(K),K.castShadow&&A.pushShadow(K))}),A.setupLights(),O!==null&&O.updateLights(A.state.lightsArray),lt=this.localClippingEnabled,Ke=oe.init(this.clippingPlanes,lt),Ke===!0&&oe.setGlobalState(this.clippingPlanes,k),O!==null&&Ee.render(A.state.shadowsArray,te,k);let Z=new Set;return T.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Re=K.material;if(Re)if(Array.isArray(Re))for(let Ue=0;Ue<Re.length;Ue++){let Te=Re[Ue];ix(Te,te,k,K),Z.add(Te)}else ix(Re,te,k,K),Z.add(Re)}),A=S.pop(),O!==null&&O.renderEnd(),Z},this.compileAsync=function(T,k,te=null){let Z=this.compile(T,k,te);return new Promise(K=>{function Re(){if(Z.forEach(function(Ue){let De=ze.get(Ue).currentProgram;(De===void 0||De.isReady())&&Z.delete(Ue)}),Z.size===0){K(T);return}setTimeout(Re,10)}l(Re,"checkMaterialsReady"),tt.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let gf=null;function _M(T){gf&&gf(T)}l(_M,"onAnimationFrame");function rx(){Ds.stop()}l(rx,"onXRSessionStart");function sx(){Ds.start()}l(sx,"onXRSessionEnd");let Ds=new ty;Ds.setAnimationLoop(_M),typeof self<"u"&&Ds.setContext(self),this.setAnimationLoop=function(T){gf=T,_e.setAnimationLoop(T),T===null?Ds.stop():Ds.start()},_e.addEventListener("sessionstart",rx),_e.addEventListener("sessionend",sx),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;O!==null&&O.renderStart(T,k);let te=_e.enabled===!0&&_e.isPresenting===!0,Z=L!==null&&(J===null||te)&&L.begin(P,J);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(k),k=_e.getCamera()),T.isScene===!0&&T.onBeforeRender(P,T,k,J),A=se.get(T,S.length),A.init(k),A.state.textureUnits=We.getTextureUnits(),S.push(A),je.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),k.isArrayCamera?qe.setFromArrayCamera(k):be.setFromProjectionMatrix(je,si,k.reversedDepth),lt=this.localClippingEnabled,Ke=oe.init(this.clippingPlanes,lt),R=Ce.get(T,y.length),R.init(),y.push(R),this.info.render.frame++,_e.enabled===!0&&_e.isPresenting===!0){let Ue=P.xr.getDepthSensingMesh();Ue!==null&&xf(Ue,k,-1/0,P.sortObjects)}xf(T,k,0,P.sortObjects),R.finish(),O!==null&&O.updateLights(A.state.lightsArray),P.sortObjects===!0&&R.sort(ee,me),Dt=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,Dt&&F.addToRenderList(R,T),this.info.autoReset===!0&&this.info.reset(),Ke===!0&&oe.beginShadows();let K=A.state.shadowsArray;if(Ee.render(K,T,k),Ke===!0&&oe.endShadows(),(Z&&L.hasRenderPass())===!1){let Ue=R.opaque,Te=R.transmissive;if(A.setupLights(),k.isArrayCamera){let De=k.cameras;if(Te.length>0)for(let ke=0,Qe=De.length;ke<Qe;ke++){let ut=De[ke];ox(Ue,Te,T,ut)}Dt&&F.render(T);for(let ke=0,Qe=De.length;ke<Qe;ke++){let ut=De[ke];ax(R,T,ut,ut.viewport)}}else Te.length>0&&ox(Ue,Te,T,k),Dt&&F.render(T),ax(R,T,k)}J!==null&&B===0&&(We.updateMultisampleRenderTarget(J),We.updateRenderTargetMipmap(J)),Z&&L.end(P),T.isScene===!0&&T.onAfterRender(P,T,k),we.resetDefaultState(),H=-1,$=null,S.pop(),S.length>0?(A=S[S.length-1],We.setTextureUnits(A.state.textureUnits),Ke===!0&&oe.setGlobalState(P.clippingPlanes,A.state.camera)):A=null,y.pop(),y.length>0?R=y[y.length-1]:R=null,O!==null&&O.renderEnd()};function xf(T,k,te,Z){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)te=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)A.pushLight(T),T.castShadow&&A.pushShadow(T);else if(T.isSprite){let Ue=k.isArrayCamera?qe:be;if(!T.frustumCulled||T.intersectsFrustum(Ue)){Z&&ct.setFromMatrixPosition(T.matrixWorld).applyMatrix4(je);let Te=fe.update(T),De=T.material;De.visible&&R.push(T,Te,De,te,ct.z,null,k)}}else if(T.isMesh||T.isLine||T.isPoints){let Ue=k.isArrayCamera?qe:be;if(!T.frustumCulled||T.intersectsFrustum(Ue)){let Te=fe.update(T),De=T.material;if(Z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ct.copy(T.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),ct.copy(Te.boundingSphere.center)),ct.applyMatrix4(T.matrixWorld).applyMatrix4(je)),Array.isArray(De)){let ke=Te.groups;for(let Qe=0,ut=ke.length;Qe<ut;Qe++){let Fe=ke[Qe],ht=De[Fe.materialIndex];ht&&ht.visible&&R.push(T,Te,ht,te,ct.z,Fe,k)}}else De.visible&&R.push(T,Te,De,te,ct.z,null,k)}}}let Re=T.children;for(let Ue=0,Te=Re.length;Ue<Te;Ue++)xf(Re[Ue],k,te,Z)}l(xf,"projectObject");function ax(T,k,te,Z){let{opaque:K,transmissive:Re,transparent:Ue}=T;A.setupLightsView(te),Ke===!0&&oe.setGlobalState(P.clippingPlanes,te),Z&&ye.viewport(j.copy(Z)),K.length>0&&tu(K,k,te),Re.length>0&&tu(Re,k,te),Ue.length>0&&tu(Ue,k,te),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}l(ax,"renderScene");function ox(T,k,te,Z){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[Z.id]===void 0){let Fe=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[Z.id]=new Bn(1,1,{generateMipmaps:!0,type:Fe?Vn:pn,minFilter:Gn,samples:Math.max(4,at.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}let Re=A.state.transmissionRenderTarget[Z.id],Ue=Z.viewport||j;Re.setSize(Ue.z*P.transmissionResolutionScale,Ue.w*P.transmissionResolutionScale);let Te=P.getRenderTarget(),De=P.getActiveCubeFace(),ke=P.getActiveMipmapLevel();P.setRenderTarget(Re),P.getClearColor(Q),pe=P.getClearAlpha(),pe<1&&P.setClearColor(16777215,.5),P.clear(),Dt&&F.render(te);let Qe=P.toneMapping;P.toneMapping=Yi;let ut=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),A.setupLightsView(Z),Ke===!0&&oe.setGlobalState(P.clippingPlanes,Z),tu(T,te,Z),We.updateMultisampleRenderTarget(Re),We.updateRenderTargetMipmap(Re),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let ht=0,zt=k.length;ht<zt;ht++){let Tt=k[ht],{object:Et,geometry:un,material:Oe,group:bn}=Tt;if(Oe.side===ai&&Et.layers.test(Z.layers)){let xt=Oe.side;Oe.side=An,Oe.needsUpdate=!0,lx(Et,te,Z,un,Oe,bn),Oe.side=xt,Oe.needsUpdate=!0,Fe=!0}}Fe===!0&&(We.updateMultisampleRenderTarget(Re),We.updateRenderTargetMipmap(Re))}P.setRenderTarget(Te,De,ke),P.setClearColor(Q,pe),ut!==void 0&&(Z.viewport=ut),P.toneMapping=Qe}l(ox,"renderTransmissionPass");function tu(T,k,te){let Z=k.isScene===!0?k.overrideMaterial:null;for(let K=0,Re=T.length;K<Re;K++){let Ue=T[K],{object:Te,geometry:De,group:ke}=Ue,Qe=Ue.material;Qe.allowOverride===!0&&Z!==null&&(Qe=Z),Te.layers.test(te.layers)&&lx(Te,k,te,De,Qe,ke)}}l(tu,"renderObjects");function lx(T,k,te,Z,K,Re){O!==null&&K.isNodeMaterial&&O.setObject(T,K),T.onBeforeRender(P,k,te,Z,K,Re),T.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),K.onBeforeRender(P,k,te,Z,T,Re),K.transparent===!0&&K.side===ai&&K.forceSinglePass===!1?(K.side=An,K.needsUpdate=!0,P.renderBufferDirect(te,k,Z,K,T,Re),K.side=os,K.needsUpdate=!0,P.renderBufferDirect(te,k,Z,K,T,Re),K.side=ai):P.renderBufferDirect(te,k,Z,K,T,Re),T.onAfterRender(P,k,te,Z,K,Re)}l(lx,"renderObject");function cx(T){let k=0;for(let te of T)te.texture!==null&&k++;return k}l(cx,"countLightProbeGrids");function el(T,k,te){k.isScene!==!0&&(k=wt);let Z=ze.get(T),K=A.state.lights,Re=A.state.shadowsArray,Ue=K.state.version,Te=ae.getParameters(T,K.state,Re,k,te,A.state.lightProbeGridArray),De=ae.getProgramCacheKey(Te),ke=Z.programs;Z.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?k.environment:null,Z.fog=k.fog;let Qe=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;Z.envMap=I.get(T.envMap||Z.environment,Qe),Z.envMapRotation=Z.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,ke===void 0&&(T.addEventListener("dispose",yt),ke=new Map,Z.programs=ke,Z.programVariants=new Map);let ut=ke.get(De);if(ut!==void 0){if(Z.currentProgram===ut&&Z.lightsStateVersion===Ue)return hx(T,Te),ut}else Te.uniforms=ae.getUniforms(T),O!==null&&T.isNodeMaterial&&O.build(T,te,Te),T.onBeforeCompile(Te,P),ut=ae.acquireProgram(Te,De),ke.set(De,ut),Z.uniforms=Te.uniforms;let Fe=Z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Fe.clippingPlanes=oe.uniform),hx(T,Te),Z.needsLights=MM(T),Z.lightsStateVersion=Ue,Z.needsLights&&(Fe.ambientLightColor.value=K.state.ambient,Fe.lightProbe.value=K.state.probe,Fe.sunLights.value=K.state.sun,Fe.sunLightShadows.value=K.state.sunShadow,Fe.directionalLights.value=K.state.directional,Fe.directionalLightShadows.value=K.state.directionalShadow,Fe.spotLights.value=K.state.spot,Fe.spotLightShadows.value=K.state.spotShadow,Fe.rectAreaLights.value=K.state.rectArea,Fe.ltc_1.value=K.state.rectAreaLTC1,Fe.ltc_2.value=K.state.rectAreaLTC2,Fe.pointLights.value=K.state.point,Fe.pointLightShadows.value=K.state.pointShadow,Fe.hemisphereLights.value=K.state.hemi,Fe.sunShadowMatrix.value=K.state.sunShadowMatrix,Fe.sunShadowCascade.value=K.state.sunShadowCascade,Fe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Fe.spotLightMatrix.value=K.state.spotLightMatrix,Fe.spotLightMap.value=K.state.spotLightMap,Fe.pointShadowMatrix.value=K.state.pointShadowMatrix),Z.numLightProbeGrids=cx(A.state.lightProbeGridArray),Z.currentProgram=ut,Z.uniformsList=null,ut}l(el,"getProgram");function yM(T,k,te,Z,K){let Re=ze.get(T),Ue=Re.currentProgram.id+","+Z+","+K,Te=Re.programVariants.get(Ue);return Te===void 0?(Te=el(T,k,te),Re.programVariants.set(Ue,Te)):(Re.currentProgram=Te,Re.uniformsList=null,Re.outputColorSpace=Z,Re.toneMapping=K),Te}l(yM,"getProgramVariant");function ux(T){if(T.uniformsList===null){let k=T.currentProgram.getUniforms();T.uniformsList=uo.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}l(ux,"getUniformList");function hx(T,k){let te=ze.get(T);te.outputColorSpace=k.outputColorSpace,te.batching=k.batching,te.batchingColor=k.batchingColor,te.instancing=k.instancing,te.instancingColor=k.instancingColor,te.instancingMorph=k.instancingMorph,te.skinning=k.skinning,te.morphTargets=k.morphTargets,te.morphNormals=k.morphNormals,te.morphColors=k.morphColors,te.morphTargetsCount=k.morphTargetsCount,te.numClippingPlanes=k.numClippingPlanes,te.numIntersection=k.numClipIntersection,te.vertexAlphas=k.vertexAlphas,te.vertexTangents=k.vertexTangents,te.toneMapping=k.toneMapping}l(hx,"updateCommonMaterialProperties");function bM(T,k,te,Z,K){k.isScene!==!0&&(k=wt),We.resetTextureUnits();let Re=k.fog,Ue=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?k.environment:null,Te=J===null?P.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:dt.workingColorSpace,De=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,ke=I.get(Z.envMap||Ue,De),Qe=Z.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,ut=!!te.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Fe=!!te.morphAttributes.position,ht=!!te.morphAttributes.normal,zt=!!te.morphAttributes.color,Tt=Yi;Z.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Tt=P.toneMapping);let Et=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,un=Et!==void 0?Et.length:0,Oe=ze.get(Z),bn=A.state.lights;if(Ke===!0&&(lt===!0||T!==$)){let Ft=T===$&&Z.id===H;oe.setState(Z,T,Ft)}let xt=!1,Ns=!1;Z.version===Oe.__version?Oe.needsLights&&Oe.lightsStateVersion!==bn.state.version||K.isBatchedMesh&&Oe.batching===!1||!K.isBatchedMesh&&Oe.batching===!0||K.isBatchedMesh&&Oe.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Oe.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Oe.instancing===!1||!K.isInstancedMesh&&Oe.instancing===!0||K.isSkinnedMesh&&Oe.skinning===!1||!K.isSkinnedMesh&&Oe.skinning===!0||K.isInstancedMesh&&Oe.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Oe.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Oe.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Oe.instancingMorph===!1&&K.morphTexture!==null||Oe.envMap!==ke||Z.fog===!0&&Oe.fog!==Re||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==oe.numPlanes||Oe.numIntersection!==oe.numIntersection)||Oe.vertexAlphas!==Qe||Oe.vertexTangents!==ut||Oe.morphTargets!==Fe||Oe.morphNormals!==ht||Oe.morphColors!==zt||Oe.morphTargetsCount!==un||Oe.numLightProbeGrids!==cx(A.state.lightProbeGridArray)?xt=!0:(Oe.outputColorSpace!==Te||Oe.toneMapping!==Tt)&&(Ns=!0):(xt=!0,Oe.__version=Z.version);let hn=Oe.currentProgram;(xt===!0||Ns===!0)&&(hn=Ns===!0?yM(Z,k,K,Te,Tt):el(Z,k,K),O&&Z.isNodeMaterial&&O.onUpdateProgram(Z,hn,Oe));let nu=!1,Hr=!1,Us=!1,mt=hn.getUniforms(),sn=Oe.uniforms;if(ye.useProgram(hn.program)&&(nu=!0,Hr=!0,Us=!0),Z.id!==H&&(H=Z.id,Hr=!0),nu||$!==T){ye.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),mt.setValue(G,"projectionMatrix",T.projectionMatrix),mt.setValue(G,"viewMatrix",T.matrixWorldInverse);let Kt=mt.map.cameraPosition;Kt!==void 0&&Kt.setValue(G,St.setFromMatrixPosition(T.matrixWorld)),at.logarithmicDepthBuffer&&mt.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&mt.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),$!==T&&($=T,Hr=!0,Us=!0)}if(Oe.needsLights&&(bn.state.sunShadowMap.length>0&&mt.setValue(G,"sunShadowMap",bn.state.sunShadowMap,We),bn.state.directionalShadowMap.length>0&&mt.setValue(G,"directionalShadowMap",bn.state.directionalShadowMap,We),bn.state.spotShadowMap.length>0&&mt.setValue(G,"spotShadowMap",bn.state.spotShadowMap,We),bn.state.pointShadowMap.length>0&&mt.setValue(G,"pointShadowMap",bn.state.pointShadowMap,We)),K.isSkinnedMesh){mt.setOptional(G,K,"bindMatrix"),mt.setOptional(G,K,"bindMatrixInverse");let Ft=K.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),mt.setValue(G,"boneTexture",Ft.boneTexture,We))}K.isBatchedMesh&&(mt.setOptional(G,K,"batchingTexture"),mt.setValue(G,"batchingTexture",K._matricesTexture,We),mt.setOptional(G,K,"batchingIdTexture"),mt.setValue(G,"batchingIdTexture",K._indirectTexture,We),mt.setOptional(G,K,"batchingColorTexture"),K._colorsTexture!==null&&mt.setValue(G,"batchingColorTexture",K._colorsTexture,We));let xi=te.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&ce.update(K,te,hn),(Hr||Oe.receiveShadow!==K.receiveShadow)&&(Oe.receiveShadow=K.receiveShadow,mt.setValue(G,"receiveShadow",K.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&k.environment!==null&&(sn.envMapIntensity.value=k.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=sT()),Hr){if(mt.setValue(G,"toneMappingExposure",P.toneMappingExposure),Oe.needsLights&&vM(sn,Us),Re&&Z.fog===!0&&Me.refreshFogUniforms(sn,Re),Me.refreshMaterialUniforms(sn,Z,ue,de,A.state.transmissionRenderTarget[T.id]),Oe.needsLights&&Oe.numLightProbeGrids>0){let Ft=M,Kt=0;for(let fr of A.state.lightProbeGridArray)fr.texture!==null&&(Ft.textures[Kt]=fr.texture,Ft.min[Kt]=fr.boundingBox.min,Ft.max[Kt]=fr.boundingBox.max,Ft.resolution[Kt]=fr.resolution,Kt++);for(let fr in Ft)Ft[fr].length=Kt;sn.probesSH.value=Ft.textures,sn.probesMin.value=Ft.min,sn.probesMax.value=Ft.max,sn.probesResolution.value=Ft.resolution}uo.upload(G,ux(Oe),sn,We)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(uo.upload(G,ux(Oe),sn,We),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&mt.setValue(G,"center",K.center),mt.setValue(G,"modelViewMatrix",K.modelViewMatrix),mt.setValue(G,"normalMatrix",K.normalMatrix),mt.setValue(G,"modelMatrix",K.matrixWorld),Z.uniformsGroups!==void 0){let Ft=Z.uniformsGroups;for(let Kt=0,fr=Ft.length;Kt<fr;Kt++){let fx=Ft[Kt];Ge.update(fx,hn),Ge.bind(fx,hn)}}return hn}l(bM,"setProgram");function vM(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.sunLights.needsUpdate=k,T.sunLightShadows.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}l(vM,"markUniformsLightsNeedsUpdate");function MM(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}l(MM,"materialNeedsLights"),this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(T,k,te){let Z=ze.get(T);Z.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),ze.get(T.texture).__webglTexture=k,ze.get(T.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:te,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,k){let te=ze.get(T);te.__webglFramebuffer=k,te.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,te=0){J=T,ne=k,B=te;let Z=null,K=!1,Re=!1;if(T){let Te=ze.get(T);if(Te.__useDefaultFramebuffer!==void 0){ye.bindFramebuffer(G.FRAMEBUFFER,Te.__webglFramebuffer),j.copy(T.viewport),he.copy(T.scissor),ge=T.scissorTest,ye.viewport(j),ye.scissor(he),ye.setScissorTest(ge),H=-1;return}else if(Te.__webglFramebuffer===void 0)We.setupRenderTarget(T);else if(Te.__hasExternalTextures)We.rebindTextures(T,ze.get(T.texture).__webglTexture,ze.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Qe=T.depthTexture;if(Te.__boundDepthTexture!==Qe){if(Qe!==null&&ze.has(Qe)&&(T.width!==Qe.image.width||T.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(T)}}let De=T.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Re=!0);let ke=ze.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ke[k])?Z=ke[k][te]:Z=ke[k],K=!0):T.samples>0&&We.useMultisampledRTT(T)===!1?Z=ze.get(T).__webglMultisampledFramebuffer:Array.isArray(ke)?Z=ke[te]:Z=ke,j.copy(T.viewport),he.copy(T.scissor),ge=T.scissorTest}else j.copy(ie).multiplyScalar(ue).floor(),he.copy(xe).multiplyScalar(ue).floor(),ge=Se;if(te!==0&&(Z=X),ye.bindFramebuffer(G.FRAMEBUFFER,Z)&&ye.drawBuffers(T,Z),ye.viewport(j),ye.scissor(he),ye.setScissorTest(ge),K){let Te=ze.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+k,Te.__webglTexture,te)}else if(Re){let Te=k;for(let De=0;De<T.textures.length;De++){let ke=ze.get(T.textures[De]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+De,ke.__webglTexture,te,Te)}}else if(T!==null&&te!==0){let Te=ze.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Te.__webglTexture,te)}H=-1};function dx(T){let k=ze.get(T);return(k.__readFormat!==T.format||k.__readType!==T.type)&&(k.__readFormat=T.format,k.__readType=T.type,k.__formatReadable=at.textureFormatReadable(T.format),k.__typeReadable=at.textureTypeReadable(T.type)),k}l(dx,"getReadableState"),this.readRenderTargetPixels=function(T,k,te,Z,K,Re,Ue,Te=0){if(!(T&&T.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=ze.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ue!==void 0&&(De=De[Ue],Array.isArray(De)&&(De=De[0])),De){ye.bindFramebuffer(G.FRAMEBUFFER,De);try{let ke=T.textures[Te],Qe=ke.format,ut=ke.type;T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Te);let Fe=dx(ke);if(Fe.__formatReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Fe.__typeReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-Z&&te>=0&&te<=T.height-K&&G.readPixels(k,te,Z,K,ve.convert(Qe),ve.convert(ut),Re)}finally{let ke=J!==null?ze.get(J).__webglFramebuffer:null;ye.bindFramebuffer(G.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(T,k,te,Z,K,Re,Ue,Te=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=ze.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ue!==void 0&&(De=De[Ue],Array.isArray(De)&&(De=De[0])),De)if(k>=0&&k<=T.width-Z&&te>=0&&te<=T.height-K){ye.bindFramebuffer(G.FRAMEBUFFER,De);let ke=T.textures[Te],Qe=ke.format,ut=ke.type;T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Te);let Fe=dx(ke);if(Fe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Fe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ht=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ht),G.bufferData(G.PIXEL_PACK_BUFFER,Re.byteLength,G.STREAM_READ),G.readPixels(k,te,Z,K,ve.convert(Qe),ve.convert(ut),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let zt=J!==null?ze.get(J).__webglFramebuffer:null;ye.bindFramebuffer(G.FRAMEBUFFER,zt);let Tt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await E_(G,Tt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ht),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Re),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(ht),G.deleteSync(Tt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,k=null,te=0){let Z=Math.pow(2,-te),K=Math.floor(T.image.width*Z),Re=Math.floor(T.image.height*Z),Ue=k!==null?k.x:0,Te=k!==null?k.y:0;We.setTexture2D(T,0),G.copyTexSubImage2D(G.TEXTURE_2D,te,0,0,Ue,Te,K,Re),ye.unbindTexture()},this.copyTextureToTexture=function(T,k,te=null,Z=null,K=0,Re=0){let Ue,Te,De,ke,Qe,ut,Fe,ht,zt,Tt=T.isCompressedTexture?T.mipmaps[Re]:T.image;if(te!==null)Ue=te.max.x-te.min.x,Te=te.max.y-te.min.y,De=te.isBox3?te.max.z-te.min.z:1,ke=te.min.x,Qe=te.min.y,ut=te.isBox3?te.min.z:0;else{let mt=Math.pow(2,-K);Ue=Math.floor(Tt.width*mt),Te=Math.floor(Tt.height*mt),T.isDataArrayTexture?De=Tt.depth:T.isData3DTexture?De=Math.floor(Tt.depth*mt):De=1,ke=0,Qe=0,ut=0}Z!==null?(Fe=Z.x,ht=Z.y,zt=Z.z):(Fe=0,ht=0,zt=0);let Et=ve.convert(k.format),un=ve.convert(k.type),Oe;k.isData3DTexture?(We.setTexture3D(k,0),Oe=G.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(We.setTexture2DArray(k,0),Oe=G.TEXTURE_2D_ARRAY):(We.setTexture2D(k,0),Oe=G.TEXTURE_2D),ye.activeTexture(G.TEXTURE0),ye.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,k.flipY),ye.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),ye.pixelStorei(G.UNPACK_ALIGNMENT,k.unpackAlignment);let bn=ye.getParameter(G.UNPACK_ROW_LENGTH),xt=ye.getParameter(G.UNPACK_IMAGE_HEIGHT),Ns=ye.getParameter(G.UNPACK_SKIP_PIXELS),hn=ye.getParameter(G.UNPACK_SKIP_ROWS),nu=ye.getParameter(G.UNPACK_SKIP_IMAGES);ye.pixelStorei(G.UNPACK_ROW_LENGTH,Tt.width),ye.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Tt.height),ye.pixelStorei(G.UNPACK_SKIP_PIXELS,ke),ye.pixelStorei(G.UNPACK_SKIP_ROWS,Qe),ye.pixelStorei(G.UNPACK_SKIP_IMAGES,ut);let Hr=T.isDataArrayTexture||T.isData3DTexture,Us=k.isDataArrayTexture||k.isData3DTexture;if(T.isDepthTexture){let mt=ze.get(T),sn=ze.get(k),xi=ze.get(mt.__renderTarget),Ft=ze.get(sn.__renderTarget);ye.bindFramebuffer(G.READ_FRAMEBUFFER,xi.__webglFramebuffer),ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Kt=0;Kt<De;Kt++)Hr&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ze.get(T).__webglTexture,K,ut+Kt),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ze.get(k).__webglTexture,Re,zt+Kt)),G.blitFramebuffer(ke,Qe,ke+Ue,Qe+Te,Fe,ht,Fe+Ue,ht+Te,G.DEPTH_BUFFER_BIT,G.NEAREST);ye.bindFramebuffer(G.READ_FRAMEBUFFER,null),ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(K!==0||T.isRenderTargetTexture||ze.has(T)){let mt=ze.get(T),sn=ze.get(k);ye.bindFramebuffer(G.READ_FRAMEBUFFER,U),ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,Y);for(let xi=0;xi<De;xi++)Hr?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,mt.__webglTexture,K,ut+xi):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,mt.__webglTexture,K),Us?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,sn.__webglTexture,Re,zt+xi):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,sn.__webglTexture,Re),K!==0?G.blitFramebuffer(ke,Qe,ke+Ue,Qe+Te,Fe,ht,Fe+Ue,ht+Te,G.COLOR_BUFFER_BIT,G.NEAREST):Us?G.copyTexSubImage3D(Oe,Re,Fe,ht,zt+xi,ke,Qe,Ue,Te):G.copyTexSubImage2D(Oe,Re,Fe,ht,ke,Qe,Ue,Te);ye.bindFramebuffer(G.READ_FRAMEBUFFER,null),ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Us?T.isDataTexture||T.isData3DTexture?G.texSubImage3D(Oe,Re,Fe,ht,zt,Ue,Te,De,Et,un,Tt.data):k.isCompressedArrayTexture?G.compressedTexSubImage3D(Oe,Re,Fe,ht,zt,Ue,Te,De,Et,Tt.data):G.texSubImage3D(Oe,Re,Fe,ht,zt,Ue,Te,De,Et,un,Tt):T.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Re,Fe,ht,Ue,Te,Et,un,Tt.data):T.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Re,Fe,ht,Tt.width,Tt.height,Et,Tt.data):G.texSubImage2D(G.TEXTURE_2D,Re,Fe,ht,Ue,Te,Et,un,Tt);ye.pixelStorei(G.UNPACK_ROW_LENGTH,bn),ye.pixelStorei(G.UNPACK_IMAGE_HEIGHT,xt),ye.pixelStorei(G.UNPACK_SKIP_PIXELS,Ns),ye.pixelStorei(G.UNPACK_SKIP_ROWS,hn),ye.pixelStorei(G.UNPACK_SKIP_IMAGES,nu),Re===0&&k.generateMipmaps===!0&&k.mipmapsAutoUpdate===!0&&G.generateMipmap(Oe),ye.unbindTexture()},this.initRenderTarget=function(T){ze.get(T).__webglFramebuffer===void 0&&We.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?We.setTextureCube(T,0):T.isData3DTexture?We.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?We.setTexture2DArray(T,0):We.setTexture2D(T,0),ye.unbindTexture()},this.resetState=function(){ne=0,B=0,J=null,ye.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};l(l0,"WebGLRenderer");var md=l0;var dy=l(i=>{let e=Math.min(1,Math.max(0,i))**.5;return 4*e*(1-e)},"swell"),aT=l(i=>1-(1-i)*(1-i),"easeOut"),yd=l(i=>{let e=Math.sin(i*12.9898)*43758.5453;return e-Math.floor(e)},"share"),c0=l((i,e=0)=>{let t=Math.min(1,Math.max(0,i)),n=aT(t);return Array.from({length:7},(r,s)=>{if(s===0)return{at:[0,.08+.22*n,0],size:.09*dy(t),shade:0};let a=(s-1)/6*Math.PI*2+(yd(e+s*7)-.5)*.6,o=(.12+yd(e+s*13)*.08)*n,c=.05+(.08+yd(e+s*17)*.1)*n;return{at:[Math.cos(a)*o,c,Math.sin(a)*o],size:(.055+yd(e+s*19)*.03)*dy(t*1.1),shade:s%2===0?0:1}})},"puffAt");var In=["grass","plains","sand","rock","snow","forest","mud","tundra"],Ki={shore:-.03,deep:-.15,reach:3},bd={relief:{base:0,roughness:0,shape:"flat"},colour:"#1b1f24",surface:"grass"},py={relief:{base:.03,roughness:.015,shape:"rolling"},colour:"#6b8746",surface:"grass"},fy={Ocean:{relief:{base:Ki.deep,roughness:.003,shape:"rolling"},colour:"#33505f",surface:"sand"},Grassland:py,Plains:{relief:{base:.025,roughness:.01,shape:"rolling"},colour:"#99935a",surface:"plains"},Desert:{relief:{base:.025,roughness:.025,shape:"rolling"},colour:"#c4ab78",surface:"sand"},Tundra:{relief:{base:.035,roughness:.015,shape:"rolling"},colour:"#8a8d78",surface:"tundra"},Arctic:{relief:{base:.05,roughness:.02,shape:"rolling"},colour:"#dfe6ea",surface:"snow"},Glacier:{relief:{base:.08,roughness:.03,shape:"rolling"},colour:"#e7eff3",surface:"snow"},Forest:{relief:{base:.04,roughness:.02,shape:"rolling"},colour:"#40583a",surface:"forest"},Jungle:{relief:{base:.03,roughness:.02,shape:"rolling"},colour:"#355a36",surface:"forest"},Swamp:{relief:{base:.005,roughness:.004,shape:"flat"},colour:"#4f5b3d",surface:"mud"},River:{relief:{base:.012,roughness:.006,shape:"rolling"},colour:"#5d7c4f",surface:"grass"},Hills:{relief:{base:.12,roughness:.04,shape:"ridged"},colour:"#7b7650",surface:"plains"},Mountains:{relief:{base:.35,roughness:.08,shape:"peaked"},colour:"#77726a",surface:"rock"}},Zs=l(i=>i==="Unknown"?bd:(Object.prototype.hasOwnProperty.call(fy,i)?fy[i]:void 0)??py,"terrainEntry");var oT=l((i,e,t)=>{let n=Math.imul(i,374761393)+Math.imul(e,668265263)+Math.imul(t,1442695041)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296},"hash"),my=Float64Array.from({length:32},(i,e)=>(e%2===0?Math.cos:Math.sin)(Math.floor(e/2)*(Math.PI/8))),gy=l(i=>i*i*i*(i*(i*6-15)+10),"fade"),ji=l(({cell:i,period:e,seed:t})=>{let n=Math.max(1,Math.round(e.u/i)),r=e.u/n,s=e.v===null?null:Math.max(1,Math.round(e.v/i)),a=e.v===null||s===null?i:e.v/s,o=l(h=>(h%n+n)%n,"wrapU"),c=l(h=>s===null?h:(h%s+s)%s,"wrapV"),u=l((h,p,f,m)=>{let x=Math.floor(oT(h,p,t)*16)*2;return(my[x]??0)*f+(my[x+1]??0)*m},"slope");return(h,p)=>{let f=h/r,m=p/a,x=Math.floor(f),b=Math.floor(m),g=f-x,_=m-b,v=gy(g),E=gy(_),M=o(x),R=o(x+1),A=c(b),y=c(b+1),S=u(M,A,g,_)+(u(R,A,g-1,_)-u(M,A,g,_))*v,L=u(M,y,g,_-1)+(u(R,y,g-1,_-1)-u(M,y,g,_-1))*v;return Math.max(-1,Math.min(1,(S+(L-S)*E)*1.4))}},"periodicNoise"),Wn=l(i=>{let e=i.map((n,r)=>.5**r),t=e.reduce((n,r)=>n+r,0);return(n,r)=>i.reduce((s,a,o)=>s+a(n,r)*(e[o]??0),0)/t},"fractalNoise");var ls=128,Sd=.5,vd=l(i=>(e,t)=>1-2*Math.abs(i(e,t)),"ridge"),lT={grass:{grain:l(({noise:i})=>Wn([i(64,1),i(16,2),i(4,25)]),"grain"),shade:.3,bumps:l(({noise:i})=>Wn([i(4,3),i(12,4)]),"bumps"),steep:2.5,rough:.9,roughVaries:.05},plains:{grain:l(({noise:i})=>Wn([i(64,5),i(8,6)]),"grain"),shade:.3,bumps:l(({noise:i})=>Wn([i(8,7),i(24,8)]),"bumps"),steep:2.2,rough:.92,roughVaries:.04},sand:{grain:l(({noise:i,wave:e,texels:t})=>{let n=e(7,3),r=i(64,9),s=i(32,10);return(a,o)=>.7*n(a+t(6)*r(a,o),o)+.3*s(a,o)},"grain"),shade:.12,bumps:l(({noise:i,wave:e,texels:t})=>{let n=e(7,3),r=i(64,9);return(s,a)=>n(s+t(6)*r(s,a),a)},"bumps"),steep:1.5,rough:.88,roughVaries:.04},rock:{grain:l(({noise:i})=>Wn([vd(i(24,11)),vd(i(12,12)),i(6,13)]),"grain"),shade:.35,bumps:l(({noise:i})=>Wn([vd(i(24,11)),vd(i(12,12)),i(6,13)]),"bumps"),steep:2.5,rough:.75,roughVaries:.1},snow:{grain:l(({noise:i})=>i(64,14),"grain"),shade:.06,bumps:l(({noise:i})=>i(32,15),"bumps"),steep:.8,rough:.55,roughVaries:.05},forest:{grain:l(({noise:i})=>Wn([i(10,16),i(40,17)]),"grain"),shade:.3,bumps:l(({noise:i})=>i(8,18),"bumps"),steep:2,rough:.9,roughVaries:.05},mud:{grain:l(({noise:i})=>i(48,19),"grain"),shade:.25,bumps:l(({noise:i})=>Wn([i(32,20),i(8,21)]),"bumps"),steep:1.2,rough:.65,roughVaries:.25},tundra:{grain:l(({noise:i})=>Wn([i(4,22),i(48,23)]),"grain"),shade:.3,bumps:l(({noise:i})=>i(6,24),"bumps"),steep:2,rough:.9,roughVaries:.05}},Md=l(i=>Math.max(0,Math.min(255,Math.round(i*255))),"byte"),cT=l((i=ls,[e,t]=[0,0])=>{let n=new Uint8Array(i*i*4*In.length),r={u:i,v:i};return In.forEach((s,a)=>{let o=lT[s],c=l((E,M)=>ji({cell:E*i/ls,period:r,seed:7919*(a+1)+M}),"noise"),u=l((E,M)=>(R,A)=>Math.sin(2*Math.PI*(E*R+M*A)/i),"wave"),h={noise:c,wave:u,texels:l(E=>E*i/ls,"texels")},p=o.grain(h),f=o.bumps(h),m=a*i*i*4,x=new Float32Array(i*i);for(let E=0;E<i;E++)for(let M=0;M<i;M++)x[E*i+M]=f(M+e,E+t);let b=l((E,M)=>x[(M+i)%i*i+(E+i)%i]??0,"height"),g=new Float32Array(i*i),_=0;for(let E=0;E<i;E++)for(let M=0;M<i;M++)g[E*i+M]=p(M+e,E+t),_+=g[E*i+M]??0;let v=_/(i*i);for(let E=0;E<i;E++)for(let M=0;M<i;M++){let R=m+(E*i+M)*4,A=(g[E*i+M]??0)-v,y=(b(M+1,E)-b(M-1,E))/2*(i/ls),S=(b(M,E+1)-b(M,E-1))/2*(i/ls);n[R]=Md(o.shade*A+.5),n[R+1]=Md((1-Math.max(-1,Math.min(1,y*o.steep)))/2),n[R+2]=Md((1-Math.max(-1,Math.min(1,S*o.steep)))/2),n[R+3]=Md(o.rough+o.roughVaries*A)}}),n},"surfaceTextures"),xy=cT;var Ai={rockFrom:.97,rockTo:.88,snowAtEquator:.4,snowAtPoles:.26,snowDeepens:.04,snowSlips:.85,snowHolds:.95,wetFrom:.1,wetTo:.4,wetUpTo:.03};var Ti=l(i=>Number.isInteger(i)?`${i}.0`:`${i}`,"number"),_y=`
float coverLatitude(float v, float extent) {
  float down = mod(v, extent);

  return min(1.0, abs(2.0 * down / extent - 1.0));
}

float coverRock(float upright) {
  return 1.0 - smoothstep(${Ti(Ai.rockTo)}, ${Ti(Ai.rockFrom)}, upright);
}

float coverSnow(float height, float upright, float latitude) {
  float line = ${Ti(Ai.snowAtEquator)} + (${Ti(Ai.snowAtPoles)} - ${Ti(Ai.snowAtEquator)}) * latitude;

  return smoothstep(line, line + ${Ti(Ai.snowDeepens)}, height) * smoothstep(${Ti(Ai.snowSlips)}, ${Ti(Ai.snowHolds)}, upright);
}

float coverWet(float height, float shore) {
  return smoothstep(${Ti(Ai.wetFrom)}, ${Ti(Ai.wetTo)}, shore) * (1.0 - smoothstep(0.0, ${Ti(Ai.wetUpTo)}, height));
}
`;var uT=l(i=>[i.u/Math.max(1,Math.round(i.u/Sd)),i.v===null?Sd:i.v/Math.max(1,Math.round(i.v/Sd))],"surfaceTile"),hT=In.map((i,e)=>`vec4 surface${e} = texture(surfaceDetail, vec3(surfaceAt, ${e}.0));
  surface += vSurfaces${e<4?"A":"B"}.${"xyzw"[e%4]} * surface${e};`).join(`
  `),dT=null,fT=l(()=>dT??=xy(),"made"),pT=l((i,e)=>{let t=new Gs(fT(),ls,ls,In.length),n=new Mi({roughness:.92,vertexColors:!0}),[r,s]=uT(i);return t.format=Hn,t.type=pn,t.wrapS=Gi,t.wrapT=Gi,t.magFilter=Wt,t.minFilter=Gn,t.generateMipmaps=!0,t.anisotropy=4,t.colorSpace=Ei,t.needsUpdate=!0,n.onBeforeCompile=a=>{a.uniforms.surfaceDetail={value:t},a.uniforms.surfaceTile={value:new He(r,s)},a.uniforms.groundExtent={value:e},a.uniforms.rockColour={value:new Be(Zs("Mountains").colour)},a.uniforms.snowColour={value:new Be(Zs("Glacier").colour)},a.vertexShader=`attribute vec4 surfacesA;
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
${_y}
${a.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
  // Every surface sampled, so their smaller copies are chosen alike across where they meet.
  vec2 surfaceAt = vGround / surfaceTile;
  float surfaceTotal = dot(vSurfacesA, vec4(1.0)) + dot(vSurfacesB, vec4(1.0));
  vec4 surface = vec4(0.0);
  ${hT}
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
  normal = normalize(normal + surfaceTilt - dot(surfaceTilt, normal) * normal);`)}`},n.customProgramCacheKey=()=>"land-surfaces-cover",{material:n,detail:t}},"landMaterial"),yy=pT;function vy(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,c=new Ot;c.morphTargetsRelative=o;let u=0;for(let h=0;h<i.length;++h){let p=i[h],f=0,m=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let x in p.attributes){if(!n.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+x+'" attribute exists among all geometries, or in none of them.'),null;s[x]===void 0&&(s[x]=[]),s[x].push(p.attributes[x]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let x in p.morphAttributes){if(!r.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(p.morphAttributes[x].length!==i[0].morphAttributes[x].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+x+'" morph attribute.'),null;a[x]===void 0&&(a[x]=[]),a[x].push(p.morphAttributes[x]),m++}if(m!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let x;if(t)x=p.index.count;else if(p.attributes.position!==void 0)x=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(u,x,h),u+=x}}if(t){let h=0,p=[];for(let f=0;f<i.length;++f){let m=i[f].index;for(let x=0;x<m.count;++x)p.push(m.getX(x)+h);h+=i[f].attributes.position.count}c.setIndex(p)}for(let h in s){let p=by(s[h]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,p)}for(let h in a){let p=a[h][0].length;if(p!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<p;++f){let m=[];for(let b=0;b<a[h].length;++b)m.push(a[h][b][f]);let x=by(m);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(x)}}}return c}l(vy,"mergeGeometries");function by(i){let e,t,n,r=-1,s=0;for(let u=0;u<i.length;++u){let h=i[u];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let a=new e(s),o=new Mt(a,t,n),c=0;for(let u=0;u<i.length;++u){let h=i[u];if(h.isInterleavedBufferAttribute){let p=c/t;for(let f=0,m=h.count;f<m;f++)for(let x=0;x<t;x++){let b=h.getComponent(f,x);o.setComponent(f+p,x,b)}}else a.set(h.array,c);c+=h.count*t}return r!==void 0&&(o.gpuType=r),o}l(by,"mergeAttributes");var Js={radius:.42,thickness:.025},u0=Js.radius-Js.thickness,wd=.07,ql=.04,f0=.25,Lt=.004,h0=.08,Xl=.012,Ad=.045,Td=.02,Ty=625341585,mT=.18,gT=30,xT=5,_T=l(i=>Math.min(gT,xT+Math.max(0,i-1)*2),"lotsFor"),yT=l(i=>Math.floor(Math.max(0,i-1)/6),"tierFor"),p0=l(i=>{let e=2166136261;for(let t=0;t<i.length;t++)e=Math.imul(e^i.charCodeAt(t),16777619);return e>>>0},"citySeed"),Cy=l((i,e,t,n=[])=>({seed:i,lots:_T(e),tier:yT(e),ways:[...t],sea:[...n]}),"planFor"),bT=l((i,e)=>{let[t,n]=i.centre,r=e.map(c=>{let[u,h]=i.toward(c),p=Math.hypot(u-t,h-n);return{offset:c,du:p===0?0:(u-t)/p,dv:p===0?0:(h-n)/p}}),s=r.reduce((c,{du:u})=>c+u,0),a=r.reduce((c,{dv:u})=>c+u,0),o=l(({du:c,dv:u})=>c*s+u*a,"most");return r.length===0?[]:[r.reduce((c,u)=>o(u)>o(c)?u:c).offset]},"quayOf"),Ln=l((i,e)=>{let t=Math.imul(i^Math.imul(e+1,2654435761),2246822507);return t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,(t>>>0)/4294967296},"share"),Yl=l((i,e,t)=>{let n=t[0]-e[0],r=t[1]-e[1],s=n*n+r*r;return s===0?0:((i[0]-e[0])*n+(i[1]-e[1])*r)/s},"along"),po=l(({at:[i,e],width:t,facing:n})=>{let r=t/2,s=[Math.cos(n)*r,-Math.sin(n)*r],a=[Math.sin(n)*r,Math.cos(n)*r];return[[i-s[0]-a[0],e-s[1]-a[1]],[i+s[0]-a[0],e+s[1]-a[1]],[i+s[0]+a[0],e+s[1]+a[1]],[i-s[0]+a[0],e-s[1]+a[1]]]},"footprintOf"),vT=l(([i,e])=>{let t=Math.hypot(e[0]-i[0],e[1]-i[1]),n=-(e[1]-i[1])/t*(ql/2),r=(e[0]-i[0])/t*(ql/2);return[[i[0]+n,i[1]+r],[e[0]+n,e[1]+r],[e[0]-n,e[1]-r],[i[0]-n,i[1]-r]]},"stripOf"),Cd=l((i,e,t)=>[i,e].some(n=>n.some((r,s)=>{let a=n[(s+1)%n.length],o=Math.hypot(a[0]-r[0],a[1]-r[1]),c=-(a[1]-r[1])/o,u=(a[0]-r[0])/o,h=l(m=>m.map(([x,b])=>x*c+b*u),"onto"),p=h(i),f=h(e);return Math.min(...f)-Math.max(...p)>=t||Math.min(...p)-Math.max(...f)>=t})),"apart"),fo=l((i,e)=>{let[t,n,,r]=e,s=Yl(i,t,n),a=Yl(i,t,r),o=Math.hypot(n[0]-t[0],n[1]-t[1]);return Math.hypot(Math.max(0,-s,s-1),Math.max(0,-a,a-1))*o},"fromFootprint"),Ry=l((i,{seed:e,lots:t,tier:n,ways:r,sea:s},a)=>{let[o,c]=i.centre,u=[...r,...bT(i,s)].flatMap(g=>{let[_,v]=i.toward(g),E=[(o+_)/2,(c+v)/2],M=E[0]-o,R=E[1]-c,A=Math.hypot(M,R);return A===0?[]:[[[o+M/A*wd,c+R/A*wd],E]]}),h=u.map(vT),p=l((g,_)=>{let v=u.map(([E,M])=>{let R=Yl(g,E,M),A=[E[0]+(M[0]-E[0])*R,E[1]+(M[1]-E[1])*R];return{t:R,near:A,off:Math.hypot(A[0]-g[0],A[1]-g[1])}}).filter(({t:E,off:M})=>E>=0&&E<=1&&M<=ql/2+_+Lt&&M>0).sort((E,M)=>E.off-M.off)[0];return v===void 0?Math.atan2(o-g[0],c-g[1]):Math.atan2(v.near[0]-g[0],v.near[1]-g[1])},"facingAt"),f=Math.ceil(u0/h0),m=[];for(let g=-f;g<=f;g++)for(let _=-f;_<=f;_++){let v=(g+f)*(f*2+1)+(_+f),E=[o+_*h0+(Ln(e,v*4)-.5)*2*Xl,c+g*h0+(Ln(e,v*4+1)-.5)*2*Xl],M=Math.hypot(E[0]-o,E[1]-c),R=Ad+Ln(e,v*4+2)*Td;M>u0||!i.owns(E[0],E[1])||m.push({at:E,width:R,facing:p(E,R),roof:Ln(e^Ty,v),storeys:1+(M<mT?n:0)+(Ln(e,v*4+3)<.2?1:0),order:M+Ln(e,v*4+3)*.03})}m.sort((g,_)=>g.order-_.order);let x=[],b=[];return m.forEach(({at:g,width:_,facing:v,storeys:E,roof:M})=>{let R=po({at:g,width:_,facing:v});R.every(([A,y])=>Math.hypot(A-o,y-c)<=u0-Lt)&&fo([o,c],R)>=wd+Lt&&fo(a,R)>=f0+Lt&&h.every(A=>Cd(R,A,Lt))&&b.every(A=>Cd(R,A,Lt))&&(x.push({at:g,width:_,facing:v,storeys:E,roof:M}),b.push(R))}),{plaza:{at:[o,c],radius:wd},streets:u,lots:x.slice(0,t)}},"sprawl"),My=4,MT=.62,ST=.05,Py=12,d0=.085,Ed=.055,wT=.13,Sy=32,ET=1821285621,Iy=l(i=>i<My?0:Math.min(Py,i-My+1),"suburbStepsFor"),AT=l(i=>i<=0?0:MT+(Math.min(i,Py)-1)*ST,"suburbReach"),TT=l(i=>1-.55*Math.min(1,Math.max(0,(i-.5)/.7)),"builtShare"),wy=l(([i,e],t)=>{let n=Math.hypot(e[0]-i[0],e[1]-i[1]),r=-(e[1]-i[1])/n*t,s=(e[0]-i[0])/n*t;return[[i[0]+r,i[1]+s],[e[0]+r,e[1]+s],[e[0]-r,e[1]-s],[i[0]-r,i[1]-s]]},"strip"),Ey=l(i=>i.slice(1).map((e,t)=>[i[t],e]).filter(([e,t])=>Math.hypot(t[0]-e[0],t[1]-e[1])>0),"piecesOf"),Ay=l((i,e,t)=>Math.min(...e.map(([n])=>n))-Math.max(...i.map(([n])=>n))>=t||Math.min(...i.map(([n])=>n))-Math.max(...e.map(([n])=>n))>=t||Math.min(...e.map(([,n])=>n))-Math.max(...i.map(([,n])=>n))>=t||Math.min(...i.map(([,n])=>n))-Math.max(...e.map(([,n])=>n))>=t,"boxesApart"),Ly=l((i,{seed:e,steps:t,city:n},r)=>{let s=AT(t);if(s===0)return[];let[a,o]=i.centre,c=i.toward(n),u=e^Math.imul(ET,(n[0]+7)*31+(n[1]+7)),h=r.runs.flatMap(({points:A})=>Ey(A)),p=[...h.map(A=>({line:A,wide:Ed})),...r.lanes.filter(([A,y])=>Math.hypot(y[0]-A[0],y[1]-A[1])>0).map(A=>({line:A,wide:wT}))],f=[...p.map(({line:A,wide:y})=>wy(A,y)),...r.lines.filter(([A,y])=>Math.hypot(y[0]-A[0],y[1]-A[1])>0).map(A=>wy(A,Ed))],m=l((A,y)=>{let S=p.map(({line:[L,P],wide:D})=>{let O=Yl(A,L,P),X=[L[0]+(P[0]-L[0])*O,L[1]+(P[1]-L[1])*O];return{t:O,near:X,off:Math.hypot(X[0]-A[0],X[1]-A[1]),wide:D}}).filter(({t:L,off:P,wide:D})=>L>=0&&L<=1&&P<=D+y+Lt&&P>0).sort((L,P)=>L.off-P.off)[0];return S===void 0?Math.atan2(c[0]-A[0],c[1]-A[1]):Math.atan2(S.near[0]-A[0],S.near[1]-A[1])},"facingAt"),x=Math.ceil(.75/d0),b=[],g=l(A=>Ad+Ln(u,A*5+2)*Td,"widthOf"),_=l(A=>Math.min(1/0,...h.map(([y,S])=>{let L=Math.max(0,Math.min(1,Yl(A,y,S)));return Math.hypot(y[0]+(S[0]-y[0])*L-A[0],y[1]+(S[1]-y[1])*L-A[1])})),"fromRuns"),v=l((A,y,S)=>{let L=Math.hypot(y[0]-c[0],y[1]-c[1]),P=L+Ln(u,A*5+3)*.03,D=g(A);P<=s&&Ln(u,A*5+4)<TT(L)&&i.owns(y[0],y[1])&&(!S||_(y)>=Ed+Lt*2+Ad+Td)&&b.push({at:y,width:D,facing:m(y,D),roof:Ln(u^Ty,A),storeys:1+(Ln(u,A*5+3)<.15?1:0),order:P})},"consider");for(let A=-x;A<=x;A++)for(let y=-x;y<=x;y++){let S=(A+x)*(x*2+1)+(y+x);v(S,[a+y*d0+(Ln(u,S*5)-.5)*2*Xl,o+A*d0+(Ln(u,S*5+1)-.5)*2*Xl],!0)}r.runs.forEach(({key:A,points:y})=>{let S=Ey(y).map(([D,O])=>({from:D,to:O,length:Math.hypot(O[0]-D[0],O[1]-D[1])})),L=S.reduce((D,O)=>D+O.length,0),P=Math.min(Sy,Math.floor(L/(Ad+Td+Lt*2)));for(let D=0;D<P;D++)[1,-1].forEach((O,X)=>{let U=(x*2+1)**2+(A*Sy+D)*2+X,Y=Ed+g(U)/2+Lt*2,ne=(D+.5)/P*L+(Ln(u,U*5)-.5)*Xl;for(let[B,{from:J,to:H,length:$}]of S.entries()){if(ne<=$||B===S.length-1){let j=(H[0]-J[0])/$,he=(H[1]-J[1])/$;v(U,[J[0]+j*ne-he*Y*O,J[1]+he*ne+j*Y*O],!1);break}ne-=$}})}),b.sort((A,y)=>A.order-y.order);let E=l(([A,y],S)=>(Math.hypot(A-S[0],y-S[1])**2-Math.hypot(A-c[0],y-c[1])**2)/(2*Math.hypot(S[0]-c[0],S[1]-c[1])),"nearer"),M=[],R=[];return b.forEach(({at:A,width:y,facing:S,storeys:L,roof:P})=>{let D=po({at:A,width:y,facing:S});po({at:A,width:y+Lt*2,facing:S}).every(([O,X])=>i.owns(O,X))&&r.others.every(O=>D.every(X=>E(X,O)>=Lt/2))&&fo(c,D)>=Js.radius+Js.thickness+Lt&&r.stands.every(O=>fo(O,D)>=f0+Lt)&&fo(i.centre,D)>=f0+Lt&&[A,...D].every(([O,X])=>(r.ground?.(O,X)??0)>=0)&&r.taken.every(([O,X,U])=>fo([O,X],D)>=U+Lt)&&f.every(O=>Ay(D,O,Lt)||Cd(D,O,Lt))&&R.every(O=>Ay(D,O,Lt)||Cd(D,O,Lt))&&(M.push({at:A,width:y,facing:S,storeys:L,roof:P}),R.push(D))}),M},"suburb");var Dy="#c79a72",CT="#5a4a3a";var gn="#7a5532",x0="#5f6266",Ny="#8a8f96",Ci="#5d6447",m0="#e8e0cc",Oy="#6e4b2f",Ks="#8a8580",Uy="#5b3e27",mo="#7d858c",RT=new W(0,1,0),Ie=new Wi(1,1,1),Qt=new Xi(.5,.5,1,10),js=new Tr(.5,1,10),go=new is(.5,10,8),y0=class y0{constructor(){this.parts=[]}add(e){return this.parts.push(e),this}addAll(e,t,n=0){let r=Math.cos(n),s=Math.sin(n);return e.parts.forEach(a=>{let[o,c,u]=a.at;this.parts.push({...a,at:[t[0]+o*r+u*s,t[1]+c,t[2]-o*s+u*r],yaw:(a.yaw??0)+n})}),this}};l(y0,"Parts");var en=y0,PT=l((i,e,t)=>{switch(i){case"ancient":t.add({shape:go,colour:e[1],at:[0,.172,0],size:[.048,.03,.048]});break;case"medieval":t.add({shape:js,colour:x0,at:[0,.188,0],size:[.05,.04,.05]});break;case"renaissance":t.add({shape:Ie,colour:"#2a2a2a",at:[0,.178,0],size:[.06,.016,.06]});break;case"industrial":t.add({shape:Qt,colour:e[0],at:[0,.18,0],size:[.046,.022,.046]});break;default:t.add({shape:go,colour:Ci,at:[0,.172,0],size:[.052,.034,.052]})}},"headgear"),IT=l((i,e,t,n)=>{switch(i){case"club":n.add({shape:Qt,colour:gn,at:[.04,.1,.01],size:[.014,.08,.014],turn:[0,0,.5]});break;case"spear":n.add({shape:Qt,colour:gn,at:[.04,.12,0],size:[.006,.2,.006]}),n.add({shape:js,colour:x0,at:[.04,.23,0],size:[.012,.025,.012]});break;case"pike":n.add({shape:Qt,colour:gn,at:[.04,.15,0],size:[.006,.28,.006]}),n.add({shape:js,colour:Ny,at:[.04,.3,0],size:[.012,.03,.012]});break;case"sword":n.add({shape:Ie,colour:Ny,at:[.045,.12,.012],size:[.008,.07,.004],turn:[.3,0,0]});break;case"bow":n.add({shape:Ie,colour:gn,at:[-.04,.11,.02],size:[.006,.11,.006]});break;case"lance":n.add({shape:Qt,colour:gn,at:[.04,.14,.05],size:[.006,.24,.006],turn:[1.1,0,0]});break;case"musket":case"rifle":n.add({shape:Ie,colour:i==="rifle"?"#3a3a3a":gn,at:[.03,.12,.02],size:[.008,.11,.01],turn:[0,0,.4]});break;case"case":n.add({shape:Ie,colour:"#3b2a1e",at:[.042,.072,.008],size:[.03,.022,.009]});break;case"pack":n.add({shape:Ie,colour:"#7a6a48",at:[0,.115,-.025],size:[.042,.05,.022]}).add({shape:Qt,colour:gn,at:[.042,.1,.012],size:[.006,.19,.006]});break;default:}e==="ancient"&&(i==="spear"||i==="sword")&&n.add({shape:Qt,colour:t[1],at:[-.035,.1,.012],size:[.05,.008,.05],turn:[Math.PI/2,0,.2]})},"carried"),LT={snow:{coat:"#e8eaec",legs:"#d4d7da"},irregular:{coat:"#6a5a40",legs:"#4a4036"}},_0=l((i,e,t,{legs:n=!0,dress:r}={})=>{let s=new en,a=r===void 0?void 0:LT[r],o=a?.coat??(i==="modern"?Ci:t[0]),c=a?.legs??(i==="ancient"?Dy:i==="modern"?Ci:CT);return n&&(s.add({shape:Ie,colour:c,at:[-.012,.04,0],size:[.018,.08,.02]}),s.add({shape:Ie,colour:c,at:[.012,.04,0],size:[.018,.08,.02]})),s.add({shape:Ie,colour:o,at:[0,.112,0],size:[.05,.065,.028]}),s.add({shape:Ie,colour:t[1],at:[0,.088,0],size:[.052,.012,.03]}),s.add({shape:Ie,colour:o,at:[-.032,.11,0],size:[.014,.055,.016]}),s.add({shape:Ie,colour:o,at:[.032,.11,0],size:[.014,.055,.016]}),s.add({shape:go,colour:Dy,at:[0,.16,0],size:[.034,.038,.034]}),r==="snow"?s.add({shape:go,colour:"#f2f3f4",at:[0,.172,-.002],size:[.044,.034,.044]}):r==="irregular"?s.add({shape:go,colour:t[1],at:[0,.176,0],size:[.042,.016,.042]}):PT(i,t,s),r==="parachute"&&s.add({shape:Ie,colour:"#4d5340",at:[0,.112,-.026],size:[.046,.06,.026]}),IT(e,i,t,s),s},"person"),Fy=l(i=>i<=1?[[0,0]]:i===2?[[-.045,0],[.045,.02]]:[[0,-.04],[-.06,.04],[.06,.04]],"formation"),g0=l((i=Oy)=>new en().add({shape:Ie,colour:i,at:[0,.09,0],size:[.05,.05,.14]}).add({shape:Ie,colour:i,at:[0,.13,.08],size:[.03,.06,.03],turn:[.5,0,0]}).add({shape:Ie,colour:i,at:[0,.155,.105],size:[.026,.026,.05]}).add({shape:Ie,colour:i,at:[-.017,.035,.05],size:[.012,.07,.012]}).add({shape:Ie,colour:i,at:[.017,.035,.05],size:[.012,.07,.012]}).add({shape:Ie,colour:i,at:[-.017,.035,-.05],size:[.012,.07,.012]}).add({shape:Ie,colour:i,at:[.017,.035,-.05],size:[.012,.07,.012]}),"horse"),DT=l((i,e,t)=>new en().addAll(g0(),[0,0,0]).add({shape:Ie,colour:t[0],at:[0,.118,0],size:[.056,.01,.06]}).addAll(_0(i,e,t,{legs:!1}),[0,.04,0]),"rider"),NT=l(i=>new en().add({shape:Ie,colour:Ks,at:[0,.12,0],size:[.09,.08,.17]}).add({shape:Ie,colour:Ks,at:[0,.14,.1],size:[.07,.07,.06]}).add({shape:Qt,colour:Ks,at:[0,.08,.14],size:[.016,.09,.016],turn:[.3,0,0]}).add({shape:Ie,colour:Ks,at:[-.03,.04,.05],size:[.025,.08,.025]}).add({shape:Ie,colour:Ks,at:[.03,.04,.05],size:[.025,.08,.025]}).add({shape:Ie,colour:Ks,at:[-.03,.04,-.05],size:[.025,.08,.025]}).add({shape:Ie,colour:Ks,at:[.03,.04,-.05],size:[.025,.08,.025]}).add({shape:Ie,colour:i[0],at:[0,.18,-.01],size:[.07,.03,.07]}).add({shape:Ie,colour:i[1],at:[0,.2,-.01],size:[.074,.008,.074]}),"elephant"),xn=l((i,e=.05)=>({shape:Qt,colour:gn,at:i,size:[e,.01,e],turn:[0,0,Math.PI/2]}),"wheel"),UT=l((i,e,t)=>{if(e==="chariot")return new en().addAll(g0(),[0,0,.09]).add({shape:Ie,colour:gn,at:[0,.055,-.04],size:[.064,.035,.05]}).add({shape:Ie,colour:i[0],at:[0,.075,-.016],size:[.066,.012,.006]}).add(xn([-.042,.035,-.045],.065)).add(xn([.042,.035,-.045],.065)).addAll(_0(t,"spear",i,{legs:!1}),[0,0,-.045]);let n=new en().addAll(g0(t==="ancient"?"#8a7a64":Oy),[0,0,.1]).add({shape:Ie,colour:gn,at:[0,.07,-.06],size:[.07,.04,.1]}).add({shape:Ie,colour:i[0],at:[0,.092,-.06],size:[.072,.008,.102]}).add(xn([-.042,.03,-.03])).add(xn([.042,.03,-.03])).add(xn([-.042,.03,-.09])).add(xn([.042,.03,-.09]));return e==="wagon"?n.add({shape:Qt,colour:m0,at:[0,.1,-.06],size:[.07,.1,.07],turn:[Math.PI/2,0,0]}):n.add({shape:Ie,colour:m0,at:[-.016,.112,-.04],size:[.032,.03,.04]}).add({shape:Ie,colour:i[0],at:[.018,.11,-.08],size:[.03,.026,.036]}).add({shape:Ie,colour:"#8a5a2a",at:[.014,.112,-.035],size:[.026,.03,.03]}),n},"cart"),FT=l((i,e,t)=>{if(i==="ancient"||i==="medieval")return new en().add({shape:Ie,colour:gn,at:[0,.04,0],size:[.08,.025,.14]}).add({shape:Ie,colour:gn,at:[0,.09,-.02],size:[.012,.12,.012],turn:[-.7,0,0]}).add({shape:Ie,colour:e[0],at:[0,.055,.05],size:[.082,.012,.03]}).add(xn([-.045,.03,.04],.045)).add(xn([.045,.03,.04],.045)).add(xn([-.045,.03,-.04],.045)).add(xn([.045,.03,-.04],.045));let n=t?.19:i==="renaissance"?.12:.16,r=i==="renaissance"?"#3d3a36":i==="modern"?Ci:x0;return new en().add({shape:Qt,colour:r,at:[0,.07,.04],size:[.024,n,.024],turn:[1.35,0,0]}).add({shape:Ie,colour:i==="modern"?Ci:gn,at:[0,.045,-.02],size:[.05,.03,.09]}).add({shape:Ie,colour:e[0],at:[0,.064,-.02],size:[.052,.008,.06]}).add(xn([-.04,.035,0],.07)).add(xn([.04,.035,0],.07))},"siege"),OT=l((i,e,t)=>{if(i==="industrial")return new en().add({shape:Ie,colour:mo,at:[0,.07,-.03],size:[.08,.07,.12]}).add({shape:Ie,colour:e[0],at:[0,.06,.07],size:[.07,.05,.05]}).add(xn([-.045,.025,.06],.045)).add(xn([.045,.025,.06],.045)).add(xn([-.045,.025,-.06],.045)).add(xn([.045,.025,-.06],.045));let n=new en().add({shape:Ie,colour:Ci,at:[0,.045,0],size:[.1,.05,.17]}).add({shape:Ie,colour:"#2e2e2a",at:[-.055,.028,0],size:[.022,.05,.18]}).add({shape:Ie,colour:"#2e2e2a",at:[.055,.028,0],size:[.022,.05,.18]}).add({shape:Ie,colour:e[0],at:[0,.072,-.05],size:[.08,.006,.04]});return t?n.add({shape:Ie,colour:Ci,at:[0,.088,-.01],size:[.07,.035,.08]}).add({shape:Qt,colour:Ci,at:[0,.09,.08],size:[.014,.13,.014],turn:[Math.PI/2,0,0]}):n.add({shape:Ie,colour:Ci,at:[0,.07,.06],size:[.09,.03,.05],turn:[.4,0,0]}),n},"vehicle"),BT=l((i,e)=>{let t=i.large?1.25:1,n=.3*t,r=.07*t,s=new en;switch(i.hull){case"oars":case"sail":{s.add({shape:Ie,colour:Uy,at:[0,.03,0],size:[r,.045,n*.8]}).add({shape:js,colour:Uy,at:[0,.03,n*.45],size:[r,.1,.045],turn:[Math.PI/2,0,0]}).add({shape:Ie,colour:e[0],at:[0,.056,0],size:[r+.004,.008,n*.82]});let a=i.hull==="oars"?1:i.large?3:2;for(let o=0;o<a;o++){let c=(o-(a-1)/2)*.09*t;s.add({shape:Qt,colour:gn,at:[0,.14,c],size:[.008,.2,.008]}).add({shape:Ie,colour:o===0?e[1]:m0,at:[0,.16,c],size:[r*1.3,.09,.005]})}return(i.guns??0)>0&&s.add({shape:Ie,colour:"#1f1f1f",at:[0,.036,0],size:[r+.006,.009,n*.66]}),i.hull==="oars"&&s.add({shape:Ie,colour:gn,at:[-r*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,.4]}).add({shape:Ie,colour:gn,at:[r*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,-.4]}),s}case"submarine":return s.add({shape:Qt,colour:"#33383d",at:[0,.018,0],size:[.05,n,.05],turn:[Math.PI/2,0,0]}).add({shape:Ie,colour:"#33383d",at:[0,.055,.02],size:[.02,.04,.05]}).add({shape:Ie,colour:e[0],at:[0,.078,.02],size:[.022,.006,.052]});case"carrier":return s.add({shape:Ie,colour:mo,at:[0,.035,0],size:[r*1.1,.05,n*1.15]}).add({shape:Ie,colour:"#55595e",at:[0,.062,0],size:[r*1.5,.008,n*1.2]}).add({shape:Ie,colour:mo,at:[r*.55,.09,.02],size:[.02,.05,.06]}).add({shape:Ie,colour:e[0],at:[r*.55,.12,.02],size:[.022,.008,.062]});default:return s.add({shape:Ie,colour:i.era==="industrial"?"#4a4a48":mo,at:[0,.03,0],size:[r,.045,n*.85]}).add({shape:js,colour:i.era==="industrial"?"#4a4a48":mo,at:[0,.03,n*.47],size:[r,.08,.045],turn:[Math.PI/2,0,0]}).add({shape:Ie,colour:mo,at:[0,.075,-.02],size:[r*.6,.05,n*.3]}).add({shape:Qt,colour:e[0],at:[0,.12,-.03],size:[.022,.05,.022]}).add({shape:Ie,colour:e[1],at:[0,.056,0],size:[r+.004,.006,n*.86]}),[.3,-.34,.14].slice(0,i.guns??0).forEach(a=>{let o=a>0?1:-1;s.add({shape:Ie,colour:"#5f666c",at:[0,.066,n*a],size:[.035,.02,.035]}).add({shape:Qt,colour:"#5f666c",at:[0,.07,n*a+o*.04],size:[.008,.06,.008],turn:[Math.PI/2,0,0]})}),i.missiles&&[-1,1].forEach(a=>s.add({shape:Ie,colour:"#4a5056",at:[a*r*.22,.072,-n*.3],size:[.022,.022,.05],turn:[-.5,0,0]})),s}},"ship"),kT=l((i,e)=>{let t=i.large?1.3:1,n=i.stealth?"#2c3034":i.large?"#6e7378":"#7d8890";return new en().add({shape:Qt,colour:n,at:[0,.3,0],size:[.03*t,.2*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:js,colour:n,at:[0,.3,.12*t],size:[.03*t,.05*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:Ie,colour:n,at:[0,.3,.01],size:[.26*t,.006,.05*t]}).add({shape:Ie,colour:e[0],at:[0,.304,.01],size:[.06*t,.004,.052*t]}).add({shape:Ie,colour:n,at:[0,.3,-.09*t],size:[.09*t,.005,.03*t]}).add({shape:Ie,colour:e[1],at:[0,.325,-.09*t],size:[.005,.045,.03*t]})},"aircraft"),zT=l(i=>new en().add({shape:go,colour:Ci,at:[0,.27,.02],size:[.06,.055,.09]}).add({shape:Ie,colour:Ci,at:[0,.275,-.08],size:[.015,.015,.12]}).add({shape:Ie,colour:i[0],at:[0,.3,-.13],size:[.004,.04,.025]}).add({shape:Ie,colour:"#2e2e2e",at:[0,.31,.02],size:[.24,.003,.012]}).add({shape:Ie,colour:"#2e2e2e",at:[0,.31,.02],size:[.012,.003,.24]}),"helicopter"),GT=l((i,e)=>{let t=e?1.4:1;return new en().add({shape:Qt,colour:"#d8d8d8",at:[0,.14*t,0],size:[.024*t,.18*t,.024*t]}).add({shape:js,colour:e?"#c8a020":i[0],at:[0,.255*t,0],size:[.024*t,.05*t,.024*t]}).add({shape:Ie,colour:i[1],at:[0,.06*t,0],size:[.07*t,.03*t,.004]}).add({shape:Ie,colour:i[1],at:[0,.06*t,0],size:[.004,.03*t,.07*t]})},"missile"),By=l((i,e)=>{switch(i.shape){case"foot":{let t=new en;return Fy(i.squad).forEach(([n,r],s)=>t.addAll(_0(i.era,i.gear??"none",e,{dress:i.dress}),[n,0,r],s*.3-.3)),t}case"mounted":{let t=new en;return Fy(i.squad).forEach(([n,r])=>t.addAll(DT(i.era,i.gear??"none",e),[n*1.4,0,r])),t}case"elephant":return NT(e);case"cart":return UT(e,i.cart??"wagon",i.era);case"siege":return FT(i.era,e,i.large===!0);case"vehicle":return OT(i.era,e,i.large===!0);case"ship":return BT(i,e);case"aircraft":return kT(i,e);case"helicopter":return zT(e);default:return GT(e,i.large===!0)}},"figureParts"),VT=l(({at:i,size:e,turn:t=[0,0,0],yaw:n=0})=>new bt().compose(new W(...i),new Sn().setFromAxisAngle(RT,n).multiply(new Sn().setFromEuler(new kn(...t))),new W(...e)),"partMatrix"),Rd=l(i=>{let e=i.map(n=>{let{shape:r,colour:s}=n,a=r.clone(),o=new Be(s),c=a.getAttribute("position").count,u=new Float32Array(c*3);for(let h=0;h<c;h++)u.set([o.r,o.g,o.b],h*3);return a.applyMatrix4(VT(n)),a.setAttribute("color",new Mt(u,3)),a}),t=vy(e)??new Ot;return e.forEach(n=>n.dispose()),t.computeBoundingBox(),t.computeBoundingSphere(),t},"mergeParts"),ky=l((i,e)=>Rd(By(i,e).parts),"figureGeometry"),HT=new Xi(.19,.2,1,28),WT=new Cr(.22,.014,4,32),XT=new Cr(1,.03,3,40),qT="#dfe9ea",YT=[[.11,.2],[.16,.27]],zy=l((i,e,{fortified:t,scale:n,stand:r,part:s="whole",ripples:a=!1})=>{let o=i.shape==="ship",c=o?0:r,u=s==="base"?[]:By(i,e).parts.map(h=>({...h,at:[h.at[0]*n,h.at[1]*n+c,h.at[2]*n],size:[h.size[0]*n,h.size[1]*n,h.size[2]*n]}));if(s==="figures")return Rd(u);if(o||u.push({shape:HT,colour:e[1],at:[0,r/2,0],size:[1,r,1]}),o&&a&&s==="whole"){let h=(i.large?1.25:1)*n;YT.forEach(([p,f])=>u.push({shape:XT,colour:qT,at:[0,.006,0],size:[p*h,f*h,.15],turn:[Math.PI/2,0,0]}))}return t&&u.push({shape:WT,colour:"#b5ab98",at:[0,c+.015,0],size:[1,1,2.5],turn:[Math.PI/2,0,0]}),Rd(u)},"unitBodyGeometry"),$T=new Cr(Js.radius,Js.thickness,6,24),Gy=l(()=>Rd([{shape:$T,colour:"#8d8577",at:[0,.02,0],size:[1,1,2.5],turn:[Math.PI/2,0,0]}]),"wallsGeometry");var ln=l((i,e,t=3)=>({shape:"foot",era:i,gear:e,squad:t}),"foot"),$l=l((i,e,t=2)=>({shape:"mounted",era:i,gear:e,squad:t}),"mounted"),Xn=l((i,e,t=!1,n=0,r=!1)=>({shape:"ship",era:i,hull:e,squad:1,large:t,guns:n,missiles:r}),"ship"),Zl=l((i,e=!1,t=!1)=>({shape:"aircraft",era:i,squad:1,large:e,stealth:t}),"aircraft"),b0=l((i,e)=>({shape:"cart",era:i,cart:e,squad:1}),"cart"),Vy={Warrior:ln("ancient","club"),Spearman:ln("ancient","spear"),Swordman:ln("ancient","sword"),Archer:ln("ancient","bow"),Horseman:$l("ancient","spear"),Chariot:b0("ancient","chariot"),Elephant:{shape:"elephant",era:"ancient",squad:1},Catapult:{shape:"siege",era:"ancient",squad:1},Trireme:Xn("ancient","oars"),Settlers:b0("ancient","wagon"),Diplomat:ln("ancient","case",1),Caravan:b0("ancient","goods"),Explorer:ln("ancient","pack",1),Pikeman:ln("medieval","pike"),Knight:$l("medieval","lance"),Crusader:$l("medieval","sword"),Fanatic:ln("medieval","sword"),Sail:Xn("medieval","sail"),Musketman:ln("renaissance","musket"),Dragoon:$l("renaissance","musket"),Cannon:{shape:"siege",era:"renaissance",squad:1},Frigate:Xn("renaissance","sail",!0,1),Galleon:Xn("renaissance","sail",!0),Rifleman:ln("industrial","rifle"),AlpineTrooper:{...ln("industrial","rifle"),dress:"snow"},Partisan:{...ln("industrial","rifle"),dress:"irregular"},Cavalry:$l("industrial","rifle"),Artillery:{shape:"siege",era:"industrial",squad:1},Engineer:ln("industrial","none",2),Ironclad:Xn("industrial","steam",!1,1),Transport:Xn("industrial","steam",!0),Freight:{shape:"vehicle",era:"industrial",squad:1},Spy:ln("industrial","none",1),MechanizedInfantry:{shape:"vehicle",era:"modern",squad:1},Marine:ln("modern","rifle"),Paratrooper:{...ln("modern","rifle"),dress:"parachute"},Tank:{shape:"vehicle",era:"modern",squad:1,large:!0},Howitzer:{shape:"siege",era:"modern",squad:1,large:!0},Destroyer:Xn("modern","steam",!1,1),Cruiser:Xn("modern","steam",!0,2),MissileCruiser:Xn("modern","steam",!0,1,!0),Battleship:Xn("modern","steam",!0,3),Submarine:Xn("modern","submarine"),Carrier:Xn("modern","carrier",!0),Fighter:Zl("modern"),StealthFighter:Zl("modern",!1,!0),Bomber:Zl("modern",!0),StealthBomber:Zl("modern",!0,!0),Helicopter:{shape:"helicopter",era:"modern",squad:1},CruiseMissile:{shape:"missile",era:"modern",squad:1},Nuclear:{shape:"missile",era:"modern",squad:1,large:!0}},Jl=l((i,e=[])=>(Object.prototype.hasOwnProperty.call(Vy,i)?Vy[i]:void 0)??(e.includes("Naval")||e.includes("NavalTransport")?Xn("industrial","steam"):e.includes("Air")?Zl("modern"):ln("ancient","spear")),"unitLook"),Pd=l(i=>i.shape==="aircraft"||i.shape==="helicopter"||i.shape==="missile","airborne");var ZT=.03,qy="#fff4b0",JT=.04,Id=.004,v0=.018,Hy=.01,Wy=.022,Xy=.03,Yy=.03,Ld=.002,KT="#4caf50",jT="#e0b030",QT="#d04030",eC=256,Qs,Ri,ea,ta,na,ia,Pr,_o,E0=class E0{constructor(){V(this,Qs,new Map);V(this,Ri,new Map);V(this,ea,new Map);V(this,ta,new Map);V(this,na,null);V(this,ia,new Map);V(this,Pr,null);V(this,_o,0);this.figureMaterial=new Mi({vertexColors:!0,roughness:.8,metalness:.05});this.geometries={ring:new Cr(.23,.018,8,36)}}material(e,t=!1){let n=`${e}${t?" glow":""}`,r=d(this,Qs).get(n);return r===void 0&&(r=new Mi({color:new Be(e),roughness:.75,metalness:.05,...t?{emissive:new Be(e),emissiveIntensity:.6}:{}}),d(this,Qs).set(n,r)),r}body(e,t,n,r=1,s="whole",a=!1){let o=a&&e.shape==="ship"&&s==="whole",c=JSON.stringify([e,t,n,r,s,o]),u=d(this,ta).get(c);return u===void 0&&(u=zy(e,t,{fortified:n,scale:r,stand:ZT,part:s,ripples:o}),d(this,ta).set(c,u)),u}walls(){return d(this,na)??z(this,na,Gy()),d(this,na)}figure(e,t){let n=JSON.stringify([e,t]),r=d(this,ea).get(n);return r===void 0&&(r=ky(e,t),d(this,ea).set(n,r)),r}plain(e){let t=d(this,ia).get(e);return t===void 0&&(t=new es({color:new Be(e),sizeAttenuation:!1,depthTest:!1}),d(this,ia).set(e,t)),t}pointer(){if(d(this,Pr)===null){let e=document.createElement("canvas"),t=e.getContext("2d");e.width=32,e.height=32,t!==null&&(t.fillStyle=qy,t.strokeStyle="#3a3420",t.lineWidth=3,t.beginPath(),t.moveTo(3,5),t.lineTo(29,5),t.lineTo(16,28),t.closePath(),t.fill(),t.stroke());let n=new ns(e);n.colorSpace=Vt,z(this,Pr,new es({map:n,sizeAttenuation:!1,depthTest:!1,transparent:!0}))}return d(this,Pr)}label(e,t,n){let r=`${e}\0${t}\0${n}`,s=d(this,Ri).get(r);if(s===void 0){let a=document.createElement("canvas"),o=a.getContext("2d"),c="600 28px system-ui, sans-serif",u=40;o!==null&&(o.font=c,a.width=Math.ceil(o.measureText(e).width)+24,a.height=u,o.font=c,o.fillStyle=t,o.beginPath(),o.roundRect?.(0,0,a.width,u,10),o.fill(),o.fillStyle=n,o.textBaseline="middle",o.fillText(e,12,u/2+1));let h=new ns(a);h.colorSpace=Vt,s=new es({map:h,sizeAttenuation:!1,depthTest:!1,transparent:!0}),d(this,Ri).set(r,s)}return s}get sweepDue(){return d(this,Ri).size>Math.max(eC,d(this,_o)*2)}sweep(e){let t=new Set;for(let n of e)n.traverse(r=>{r instanceof vt&&t.add(r.geometry),r instanceof wr&&t.add(r.material)});d(this,Ri).forEach((n,r)=>{t.has(n)||(n.map?.dispose(),n.dispose(),d(this,Ri).delete(r))}),z(this,_o,d(this,Ri).size)}dispose(){Object.values(this.geometries).forEach(e=>e.dispose()),d(this,ea).forEach(e=>e.dispose()),d(this,ta).forEach(e=>e.dispose()),d(this,na)?.dispose(),z(this,na,null),d(this,ta).clear(),this.figureMaterial.dispose(),d(this,ia).forEach(e=>e.dispose()),d(this,Pr)?.map?.dispose(),d(this,Pr)?.dispose(),d(this,ia).clear(),z(this,Pr,null),d(this,Qs).forEach(e=>e.dispose()),d(this,Ri).forEach(e=>{e.map?.dispose(),e.dispose()}),d(this,Qs).clear(),d(this,Ri).clear(),d(this,ea).clear(),z(this,_o,0)}};Qs=new WeakMap,Ri=new WeakMap,ea=new WeakMap,ta=new WeakMap,na=new WeakMap,ia=new WeakMap,Pr=new WeakMap,_o=new WeakMap,l(E0,"MarkerKit");var Nd=E0,$y=l(i=>{let{r:e,g:t,b:n}=new Be(i);return .2126*e+.7152*t+.0722*n>.35?"#111111":"#ffffff"},"textOn"),xo=l((i,e,t,n)=>(i.position.set(e,t,n),i),"place"),tC=l(i=>[i.count>1?String(i.count):"",i.status??"",i.veteran?"\u2605":""].filter(e=>e!=="").join(" "),"flagText"),nC=3,iC=4,Kl=l((i,e,t,n,r=nC)=>{let s=new wr(i);return s.scale.set(e,t,1),s.center.set(.5,-n/t),s.renderOrder=r,s.frustumCulled=!1,s},"badge"),Zy=l((i,e,t)=>{let n=i.map?.image,r=n&&n.height>0&&n.width>0?n.width/n.height:1;return Kl(i,e*r,e,t)},"label"),Dd=[0,.36,0],rC=l((i,e)=>{let t=new an;return e.walled&&t.add(new vt(i.walls(),i.figureMaterial)),t.add(xo(Zy(i.label(`${e.name}  ${e.size}${e.disorder?" !":""}`,e.colours[0],$y(e.colours[0])),Yy,0),...Dd)),t},"drawCity"),sC=l((i,e,t=null,n=!1,r=t===null)=>{let s=new an,{ring:a}=i.geometries,o=Jl(e.type,e.kinds),c=n&&Pd(o),u=i.body(o,e.colours,e.fortified,e.size,c?"figures":"whole",r),h=c?new an:s,p=u.boundingBox?.max.y??.3,f=t?.at??[0,p+JT,0],m=e.health!==null,x=(t?.over??0)+(m?Id+Ld:0),b=x+Hy+Ld,g=tC(e),_=b+(g===""?0:Wy+Ld),v=new vt(u,i.figureMaterial);if(v.name=S0,v.rotation.y=e.facing,h.add(v),c&&(h.name=w0,s.add(new vt(i.body(o,e.colours,e.fortified,e.size,"base"),i.figureMaterial),h)),e.health!==null){let E=Math.max(0,Math.min(1,e.health));if(h.add(xo(Kl(i.plain("#202020"),v0,Id,t?.over??0),...f)),E>0){let M=Kl(i.plain(E>.5?KT:E>.25?jT:QT),v0*E,Id*.6,(t?.over??0)+Id*.2);M.center.x=1/(2*E),h.add(xo(M,...f))}}if(h.add(xo(Kl(i.plain(e.colours[0]),v0,Hy,x),...f)),g!==""&&h.add(xo(Zy(i.label(g,e.colours[0],$y(e.colours[0])),Wy,b),...f)),e.active){let E=new vt(a,i.material(qy,!0));E.rotation.x=Math.PI/2,E.position.y=.01,s.add(E),h.add(xo(Kl(i.pointer(),Xy,Xy,_,iC),...f))}return s},"drawUnit"),M0="unit",S0="figures",w0="aloft",ra=.26,Jy=l((i,e,t=!1)=>{let n=new an;if(e.city!==null&&n.add(rC(i,e.city)),e.unit!==null){let r=e.inCity??e.city!==null?ra:0,s=sC(i,e.unit,e.city===null?null:{at:[Dd[0],Dd[1],Dd[2]-r],over:Yy+Ld},t,r===0);s.name=M0,s.position.z=r,n.add(s)}return n},"drawMarker"),jl=new WeakMap,Ud=new WeakMap,aC=.5,Ql=l((i,e,t)=>{i.forEach(n=>n.traverse(r=>{if(!(r instanceof vt||r instanceof wr))return;let s=jl.get(r)??r.material,a=t.get(s);a===void 0&&(a=s.clone(),r instanceof wr?a.transparent=!0:a.alphaHash=!0,t.set(s,a)),jl.has(r)||(jl.set(r,s),Ud.set(r,r.castShadow)),r.material=a,r.castShadow=(Ud.get(r)??!1)&&e>=aC})),t.forEach((n,r)=>{n.opacity=r.opacity*e})},"fade"),Ky=l((i,e)=>{i.forEach(t=>t.traverse(n=>{let r=jl.get(n);r===void 0||!(n instanceof vt||n instanceof wr)||(n.material=r,n.castShadow=Ud.get(n)??n.castShadow,jl.delete(n),Ud.delete(n))})),yo(e)},"unfaded"),yo=l(i=>{i.forEach(e=>e.dispose()),i.clear()},"unfade");var cs=l(i=>i*Math.PI/180,"degrees"),oC=cs(25),lC=cs(80),cC=5,uC=90,hC=1.12,ec=cs(40),T0=cs(45),dC={above:{yaw:0,pitch:cs(80)},classic:{yaw:0,pitch:cs(55)},isometric:{yaw:cs(45),pitch:cs(30)}};var jy=l(i=>({focus:i,...dC.classic,distance:24}),"defaultOrbit"),A0=l((i,e,t)=>Math.min(t,Math.max(e,i)),"clamp"),Qy=l(i=>{let e=Math.PI*2;return(i%e+e)%e},"normaliseYaw"),sa=l(i=>({...i,yaw:Qy(i.yaw),pitch:A0(i.pitch,oC,lC),distance:A0(i.distance,cC,uC)}),"clampOrbit"),vo=l((i,e)=>sa({...i,distance:i.distance/hC**e}),"zoomed"),Fd=l(({yaw:i,pitch:e})=>{let t=Math.sin(i),n=Math.cos(i),r=Math.sin(e),s=Math.cos(e);return{forward:[t*s,-r,-n*s],right:[n,0,t],up:[t*r,s,-n*r]}},"basis"),Od=l((i,e)=>{let{forward:t}=Fd(i),[n,r]=i.focus;return[n-t[0]*i.distance,e-t[1]*i.distance,r-t[2]*i.distance]},"eye"),C0=l((i,e,[t,n,r],s)=>{let{forward:a,right:o,up:c}=Fd(i),u=Od(i,e),h=[t-u[0],n-u[1],r-u[2]],p=l(x=>(h[0]??0)*x[0]+(h[1]??0)*x[1]+(h[2]??0)*x[2],"dot"),f=p(a),m=Math.tan(ec/2);return f<=1e-6?null:[p(o)/(f*m*s),p(c)/(f*m)]},"toScreen"),R0=l((i,e,[t,n],r)=>{let{forward:s,right:a,up:o}=Fd(i),c=Math.tan(ec/2);return{from:Od(i,e),direction:[0,1,2].map(u=>(s[u]??0)+t*c*r*(a[u]??0)+n*c*(o[u]??0))}},"rayThrough"),bo=l((i,e,t,n,r=e)=>{let{from:s,direction:a}=R0(i,e,t,n);if(a[1]>-1e-6)return null;let o=(r-s[1])/a[1];return o<=0?null:[s[0]+a[0]*o,s[2]+a[2]*o]},"groundAt"),eb=l((i,e,t,n,r)=>{let s=bo(i,e,t,r),a=bo(i,e,n,r);if(s!==null&&a!==null)return{...i,focus:[i.focus[0]+s[0]-a[0],i.focus[1]+s[1]-a[1]]};let o=(t[0]-n[0])*r,c=(t[1]-n[1])/Math.sin(i.pitch),u=i.distance*Math.tan(ec/2),{right:h}=Fd(i),p=[Math.sin(i.yaw),-Math.cos(i.yaw)];return{...i,focus:[i.focus[0]+(o*h[0]+c*(p[0]??0))*u,i.focus[1]+(o*h[2]+c*(p[1]??0))*u]}},"panned"),tb=l((i,e,t)=>{let n=l((a,o)=>(a%o+o)%o,"wrap"),[r,s]=i.focus;return{...i,yaw:Qy(i.yaw),focus:[n(r,e.u),e.v===null?A0(s,0,t):n(s,e.v)]}},"settled"),nb=l((i,e,t,n,r)=>{let s=l((c,u)=>u===null?c:c-u*Math.round(c/u),"short"),a=Math.PI*2,o=t*t*(3-2*t);return{focus:[i.focus[0]+s(e.focus[0]-i.focus[0],n.u)*o,i.focus[1]+s(e.focus[1]-i.focus[1],n.v)*o],yaw:i.yaw+(r??s(e.yaw-i.yaw,a))*o,pitch:i.pitch+(e.pitch-i.pitch)*o,distance:i.distance+(e.distance-i.distance)*o}},"between"),Bd=l(i=>({near:i*1.2,far:i*3.5}),"sightFor");var fC=new Be("#3f8a8c"),pC=new Be("#173a52"),mC=new Be("#e8eeee"),ib=`
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
`,gC=`
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
`,us,oi,qn,I0=class I0{constructor(e,t){V(this,us);V(this,oi);V(this,qn);z(this,us,e),z(this,oi,new Uint16Array(e.columns*e.rows*2));for(let r=0;r<d(this,oi).length;r+=2)d(this,oi)[r]=Hi.toHalfFloat(0),d(this,oi)[r+1]=Hi.toHalfFloat(1);z(this,qn,new ro(d(this,oi),e.columns,e.rows,$i,Vn)),d(this,qn).wrapS=Gi,d(this,qn).wrapT=e.wrapsV?Gi:ri,d(this,qn).magFilter=Wt,d(this,qn).minFilter=Wt,d(this,qn).needsUpdate=!0;let n=new En({uniforms:$s.merge([Pe.fog,{ground:{value:null},cell:{value:new He},size:{value:new He},shallow:{value:fC.clone()},deep:{value:pC.clone()},foam:{value:mC.clone()},sky:{value:t.clone()},sunDirection:{value:new W(.5,.7,.4).normalize()},sunColour:{value:new Be("#fff0d8")},extentV:{value:0},wrapsV:{value:!1}}]),vertexShader:ib,fragmentShader:gC,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=d(this,qn),n.uniforms.cell.value.set(e.spacingU,e.spacingV),n.uniforms.size.value.set(e.columns,e.rows),n.uniforms.extentV.value=e.rows*e.spacingV,n.uniforms.wrapsV.value=e.wrapsV,this.mesh=new vt(new qi(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=1}setChunk(e){let{columns:t,rows:n,spacingU:r,spacingV:s}=d(this,us),a=Math.round(e.u/r),o=Math.round(e.v/s),c=e.positions.length/3;for(let u=0;u<c;u++){let h=a+Math.round((e.positions[u*3]??0)/r),p=o+Math.round((e.positions[u*3+2]??0)/s);if(h>=0&&h<t&&p>=0&&p<n){let f=(p*t+h)*2;d(this,oi)[f]=Hi.toHalfFloat(e.positions[u*3+1]??0),d(this,oi)[f+1]=Hi.toHalfFloat(e.unseen[u]??0)}}d(this,qn).needsUpdate=!0}height(e,t){return Hi.fromHalfFloat(d(this,oi)[(t*d(this,us).columns+e)*2]??0)}unseen(e,t){return Hi.fromHalfFloat(d(this,oi)[(t*d(this,us).columns+e)*2+1]??0)>.5}texture(){return d(this,qn)}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=d(this,us).wrapsV&&e}follow(e,t,n,r){this.mesh.position.set(e,0,t),this.mesh.scale.set(n,n,1),this.mesh.material.uniforms.sunDirection.value.copy(r).normalize()}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),d(this,qn).dispose()}};us=new WeakMap,oi=new WeakMap,qn=new WeakMap,l(I0,"Water");var P0=I0,rb=P0,xC=`
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
`,_C=.18,tc,L0=class L0{constructor(e,t){V(this,tc);z(this,tc,t.wrapsV);let n=new En({uniforms:$s.merge([Pe.fog,{ground:{value:null},cell:{value:new He},size:{value:new He},extent:{value:new He},wrapsV:{value:!1}}]),vertexShader:ib,fragmentShader:xC,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=e,n.uniforms.cell.value.set(t.spacingU,t.spacingV),n.uniforms.size.value.set(t.columns,t.rows),n.uniforms.extent.value.set(t.columns*t.spacingU,t.rows*t.spacingV),n.uniforms.wrapsV.value=t.wrapsV,this.mesh=new vt(new qi(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=2}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=d(this,tc)&&e}follow(e,t,n){this.mesh.position.set(e,_C,t),this.mesh.scale.set(n,n,1)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}};tc=new WeakMap,l(L0,"Clouds");var kd=L0;var yC=.6,bC=.05,aa=64,sb=.125,vC=`
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
`,MC=`
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
`,ab=l(i=>{let e=Math.max(1,Math.ceil(Math.sqrt(i)));return[e,Math.max(1,Math.ceil(i/e))]},"atlasCells"),SC=l((i,e)=>{let[t]=ab(i.length),n=aa*(1-2*sb);return i.flatMap((r,s)=>{let a=e(r);if(a===null||a[0]<=0||a[1]<=0)return[];let o=n/Math.max(a[0],a[1]),c=a[0]*o,u=a[1]*o;return[{_:r,x:s%t*aa+(aa-c)/2,y:Math.floor(s/t)*aa+(aa-u)/2,width:c,height:u}]})},"atlasPlaces"),wC=l(i=>{let{naturalWidth:e,naturalHeight:t,width:n,height:r}=i;return[e??(typeof n=="number"?n:0),t??(typeof r=="number"?r:0)]},"imageSize"),hs,Yn,nc,oa,ic,zd,Mo,ob,lb,N0=class N0{constructor(e){V(this,Mo);V(this,hs,null);V(this,Yn,null);V(this,nc,"");V(this,oa);V(this,ic,new WeakMap);V(this,zd,1);z(this,oa,e),this.material=new En({uniforms:$s.merge([Pe.fog,{atlas:{value:null},lean:{value:1},lift:{value:bC},bias:{value:yC},cells:{value:[1,1]},pad:{value:sb}}]),vertexShader:vC,fragmentShader:MC,fog:!0,toneMapped:!1})}lean(e){this.material.uniforms.lean.value=Math.sin(e)}set(e){if(d(this,hs)?.dispose(),z(this,hs,null),e===null||e.count===0)return null;C(this,Mo,lb).call(this,e);let t=new Il,n=new qi(1,1);return t.index=n.index,t.setAttribute("position",n.getAttribute("position")),t.setAttribute("uv",n.getAttribute("uv")),t.setAttribute("anchor",new Er(e.anchors,3)),t.setAttribute("slot",new Er(e.slots,2)),t.setAttribute("size",new Er(e.sizes,1)),t.setAttribute("cell",new Er(e.cells,1)),t.instanceCount=e.count,z(this,hs,t),t}make(){let e=new vt(d(this,hs)??void 0,this.material);return e.frustumCulled=!1,e.castShadow=!1,e.receiveShadow=!1,e}dispose(){d(this,hs)?.dispose(),d(this,Yn)?.dispose(),this.material.dispose()}};hs=new WeakMap,Yn=new WeakMap,nc=new WeakMap,oa=new WeakMap,ic=new WeakMap,zd=new WeakMap,Mo=new WeakSet,ob=l(function(e){if(e===null)return 0;let t=d(this,ic).get(e);return t===void 0&&(t=_i(this,zd)._++,d(this,ic).set(e,t)),t},"#imageId"),lb=l(function(e){let t=e.names.map(o=>`${o}:${C(this,Mo,ob).call(this,d(this,oa).call(this,o))}`).join(",");if(t===d(this,nc)&&d(this,Yn)!==null)return;let[n,r]=ab(e.names.length),s=document.createElement("canvas"),a=s.getContext("2d");s.width=n*aa,s.height=r*aa,a!==null&&(a.imageSmoothingEnabled=!1,SC(e.names,o=>{let c=d(this,oa).call(this,o);return c===null?null:wC(c)}).forEach(({_:o,x:c,y:u,width:h,height:p})=>{let f=d(this,oa).call(this,o);f!==null&&a.drawImage(f,c,u,h,p)})),d(this,Yn)?.dispose(),z(this,Yn,new ns(s)),d(this,Yn).colorSpace=Vt,d(this,Yn).premultiplyAlpha=!0,d(this,Yn).magFilter=Ht,d(this,Yn).minFilter=Gn,d(this,Yn).generateMipmaps=!0,z(this,nc,t),this.material.uniforms.atlas.value=d(this,Yn),this.material.uniforms.cells.value=[n,r]},"#drawAtlas"),l(N0,"YieldIcons");var D0=N0,cb=D0;var U0=10466244,EC=14082796,AC=5984576,TC=16773336,ub=l((i,e,t)=>{let n=l((r,s)=>{if(s===null)return[0];let a=[];for(let o=Math.floor((r-e)/s);o*s<=r+e;o++)a.push(o*s);return a},"along");return n(i[0],t.u).flatMap(r=>n(i[1],t.v).map(s=>[r,s]))},"copiesNear"),CC=l(i=>[new Pn(new W(0,0,1),0),new Pn(new W(0,0,-1),i)],"polesAt"),RC=l((i,[e,t],n,r,s)=>i.flatMap(([a,o])=>[[a,o],...s&&r!==null&&t>n?[[a,o-r]]:[],...s&&r!==null&&e<0?[[a,o+r]]:[]]),"overlayCopies"),hb=2048,db=Math.hypot(30,40,20),fb=l((i,{period:e,ground:t,yieldIcon:n})=>{let r=new md({antialias:!0,canvas:i}),s=new xl,a=new Mn(ec*180/Math.PI,1,.1,400),o=new an,{material:c,detail:u}=yy(e,t.rows*t.spacingV),h=new Pl(TC,2.6),p=new Map,f=new Map,m=new Mi({vertexColors:!0,roughness:.9,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,clipShadows:!0}),x=t.rows*t.spacingV,b=CC(x),g=new Map,_=new Map,v=new Map,E=new wl(1,1),M=l(ee=>new Mi({color:new Be(ee),roughness:1,metalness:0,flatShading:!0}),"puffGrey"),R=[M("#d8d5cf"),M("#a9a59d")],A=new Map,y=new io({color:new Be("#dfe8e8"),side:ai}),S=new an,L=new Nd,P=new an,D=new cb(n??(()=>null)),O=new rb(t,new Be(U0)),X=new kd(O.texture(),t),U=new gl(U0,30,110),Y=[[0,0]],ne="0,0",B=[[0,0]],J="0,0",H=!1,$=null;r.outputColorSpace=Vt,r.localClippingEnabled=!0,r.toneMapping=Dl,r.shadowMap.enabled=!0,r.shadowMap.type=wh,s.background=new Be(U0),s.fog=U,s.add(new Tl(EC,AC,.9)),s.add(o),s.add(S),s.add(P),s.add(O.mesh),s.add(X.mesh),h.position.set(30,40,20),h.castShadow=!0,h.shadow.mapSize.set(hb,hb),h.shadow.bias=-4e-4,h.shadow.normalBias=.02,s.add(h),s.add(h.target);let j=l((ee,me,ie=Y)=>ie.map(([xe,Se])=>{let be=ee.make();return be.position.set(ee.at[0]+xe,ee.at[1],ee.at[2]+Se),me.add(be),be}),"copiesOf"),he=l(ee=>j(ee,o,RC(Y,ee.span,x,e.v,H)),"overlayCopiesOf"),ge=l(ee=>ee.flatMap(me=>{let ie=me.getObjectByName(M0);return ie===void 0?[]:[ie]}),"unitParts"),Q=l(ee=>ee.drawn.forEach(me=>{let ie=me.getObjectByName(S0),xe=me.getObjectByName(w0);ie!==void 0&&(ie.rotation.y=ee.facing),xe!==void 0&&(xe.position.y=ee.aloft)}),"pose"),pe=l(ee=>{let me=c0(ee.through,ee.seed);ee.drawn.forEach(ie=>ie.children.forEach((xe,Se)=>{let be=me[Se];if(be===void 0){xe.visible=!1;return}xe.position.set(...be.at),xe.scale.setScalar(Math.max(be.size,1e-4)),xe.visible=be.size>0}))},"shapePuff"),le=l((ee,me=!1)=>{let ie=Jy(L,ee,me);return ie.traverse(xe=>{xe.castShadow=xe instanceof vt}),ie},"markerOf"),de=l(()=>{L.sweepDue&&L.sweep([...g.values(),..._.values()].flatMap(({original:ee})=>ee===void 0?[]:[ee]))},"sweep");return{render:l(()=>r.render(s,a),"render"),resize:l((ee,me,ie)=>{r.setPixelRatio(ie),r.setSize(ee,me,!1),a.aspect=me>0?ee/me:1,a.updateProjectionMatrix()},"resize"),setChunk:l((ee,me,ie)=>{let xe=`${ee},${me}`,Se=new Ot;Se.setAttribute("position",new Mt(ie.positions,3)),Se.setAttribute("normal",new Mt(ie.normals,3)),Se.setAttribute("color",new Mt(ie.colours,3)),Se.setAttribute("surfacesA",new Mt(ie.surfacesA,4,!0)),Se.setAttribute("surfacesB",new Mt(ie.surfacesB,4,!0)),Se.setAttribute("shore",new Mt(ie.shore,1,!0)),Se.setIndex(new Mt(ie.indices,1)),Se.computeBoundingSphere();let be=p.get(xe);be!==void 0&&(be.drawn.forEach(Ke=>o.remove(Ke)),be.geometry.dispose());let qe={geometry:Se,at:[ie.u,0,ie.v],make:l(()=>{let Ke=new vt(Se,c);return Ke.castShadow=!0,Ke.receiveShadow=!0,Ke},"make"),drawn:[]};qe.drawn=j(qe,o),p.set(xe,qe),O.setChunk(ie)},"setChunk"),setOverlay:l((ee,me,ie)=>{let xe=`${ee},${me}`,Se=f.get(xe);if(Se!==void 0&&(Se.drawn.forEach(lt=>o.remove(lt)),Se.geometry.dispose(),f.delete(xe)),ie===null)return;let be=new Ot;be.setAttribute("position",new Mt(ie.positions,3)),be.setAttribute("normal",new Mt(ie.normals,3)),be.setAttribute("color",new Mt(ie.colours,3)),be.computeBoundingSphere(),be.computeBoundingBox();let qe=be.boundingBox,Ke={geometry:be,span:[ie.v+(qe?.min.z??0),ie.v+(qe?.max.z??0)],at:[ie.u,0,ie.v],make:l(()=>{let lt=new vt(be,m);return lt.castShadow=!0,lt.receiveShadow=!0,lt},"make"),drawn:[]};Ke.drawn=he(Ke),f.set(xe,Ke)},"setOverlay"),setMarker:l((ee,me,ie)=>{let xe=g.get(ee);if(xe?.drawn.forEach(qe=>S.remove(qe)),xe?.faded!==void 0&&yo(xe.faded),g.delete(ee),ie===null)return;let Se=le(ie),be={at:me,make:l(()=>Se.clone(),"make"),drawn:[],original:Se};be.drawn=j(be,S,B),g.set(ee,be),de()},"setMarker"),setWalker:l((ee,me)=>{let ie=_.get(ee);if(ie?.drawn.forEach(be=>S.remove(be)),ie!==void 0&&yo(ie.faded),_.delete(ee),me===null)return;let xe=le(me,!0),Se={at:ie?.at??[0,0,0],facing:ie?.facing??me.unit?.facing??0,aloft:ie?.aloft??0,opacity:1,faded:new Map,make:l(()=>xe.clone(),"make"),drawn:[],original:xe};Se.drawn=j(Se,S,B),Q(Se),_.set(ee,Se),de()},"setWalker"),placeWalker:l((ee,me,ie,xe=0)=>{let Se=_.get(ee);Se!==void 0&&(Se.at=me,Se.facing=ie,Se.aloft=xe,Se.drawn.forEach((be,qe)=>{let[Ke,lt]=B[qe]??[0,0];be.position.set(me[0]+Ke,me[1],me[2]+lt)}),Q(Se))},"placeWalker"),fadeMarker:l((ee,me)=>{let ie=g.get(ee),xe=Math.min(1,Math.max(0,me));if(!(ie===void 0||xe===(ie.opacity??1))){if(ie.opacity=xe,ie.faded??=new Map,xe===1){Ky(ge(ie.drawn),ie.faded);return}Ql(ge(ie.drawn),xe,ie.faded)}},"fadeMarker"),wake:l((ee,me,ie=[])=>{let xe=A.get(ee);if(me===null){xe?.drawn.forEach(qe=>S.remove(qe)),xe?.shape.dispose(),A.delete(ee);return}let Se=new Ot;Se.setAttribute("position",new Mt(Float32Array.from(ie),3));let be=xe??{at:me,shape:Se,make:l(()=>new vt(be.shape,y),"make"),drawn:[]};xe===void 0?(be.drawn=j(be,S,B),A.set(ee,be)):(xe.shape.dispose(),xe.shape=Se,xe.drawn.forEach(qe=>{qe.geometry=Se})),be.at=me,be.drawn.forEach((qe,Ke)=>{let[lt,je]=B[Ke]??[0,0];qe.position.set(me[0]+lt,me[1],me[2]+je)})},"wake"),puff:l((ee,me,ie=0)=>{let xe=v.get(ee);if(me===null){xe?.drawn.forEach(qe=>S.remove(qe)),v.delete(ee);return}let Se=Number(ee.replace(/\D/g,""))||0,be=xe??{at:me,through:ie,seed:Se,make:l(()=>{let qe=new an;return c0(0,Se).forEach(({shade:Ke})=>qe.add(new vt(E,R[Ke]))),qe},"make"),drawn:[]};xe===void 0&&(be.drawn=j(be,S,B),v.set(ee,be)),be.at=me,be.through=ie,be.drawn.forEach((qe,Ke)=>{let[lt,je]=B[Ke]??[0,0];qe.position.set(me[0]+lt,me[1],me[2]+je)}),pe(be)},"puff"),fadeWalker:l((ee,me)=>{let ie=_.get(ee),xe=Math.min(1,Math.max(0,me));ie===void 0||xe===ie.opacity||(ie.opacity=xe,Ql(ie.drawn,xe,ie.faded))},"fadeWalker"),setYields:l(ee=>{$?.drawn.forEach(me=>P.remove(me)),$=null,D.set(ee)!==null&&($={at:[0,0,0],make:l(()=>D.make(),"make"),drawn:[]},$.drawn=j($,P))},"setYields"),view:l((ee,me,ie=e)=>{let[xe,Se]=ee.focus,[be,qe,Ke]=Od(ee,me),{near:lt,far:je}=Bd(ee.distance);a.position.set(be,qe,Ke),a.lookAt(xe,me,Se),a.far=je*1.2,a.near=Math.max(.1,ee.distance*.02),a.updateProjectionMatrix(),U.near=lt,U.far=je;let St=ee.distance*2.2,ct=h.shadow.camera;h.position.set(xe+30,me+40,Se+20),h.target.position.set(xe,me,Se),ct.left=-St,ct.right=St,ct.top=St,ct.bottom=-St,ct.near=Math.max(.5,db-St*1.6),ct.far=db+St*1.6,ct.updateProjectionMatrix(),O.follow(xe,Se,je*2.2,h.position.clone().sub(h.target.position)),X.follow(xe,Se,je*2.2),O.pastThePoles(ie.v!==null),X.pastThePoles(ie.v!==null),m.clippingPlanes=ie.v===null?b:null,H=ie.v===null;let wt=ub(ee.focus,je,ie),Dt=`${wt.join(";")}${H?" stopped":""}`,ot=ub(ee.focus,Math.min(je,ee.distance*2.2),ie),G=ot.join(";");Dt!==ne&&(Y=wt,ne=Dt,p.forEach(Je=>{Je.drawn.forEach(tt=>o.remove(tt)),Je.drawn=j(Je,o)}),f.forEach(Je=>{Je.drawn.forEach(tt=>o.remove(tt)),Je.drawn=he(Je)}),$!==null&&($.drawn.forEach(Je=>P.remove(Je)),$.drawn=j($,P))),D.lean(ee.pitch),G!==J&&(B=ot,J=G,[...g.values(),..._.values(),...v.values(),...A.values()].forEach(Je=>{Je.drawn.forEach(tt=>S.remove(tt)),Je.drawn=j(Je,S,B)}),_.forEach(Q),v.forEach(pe),_.forEach(Je=>{Je.opacity<1&&Ql(Je.drawn,Je.opacity,Je.faded)}),g.forEach(Je=>{Je.faded!==void 0&&(Je.opacity??1)<1&&Ql(ge(Je.drawn),Je.opacity??1,Je.faded)}))},"view"),stats:l(()=>({drawCalls:r.info.render.calls,triangles:r.info.render.triangles,geometries:r.info.memory.geometries}),"stats"),dispose:l(()=>{p.forEach(({geometry:ee})=>ee.dispose()),p.clear(),f.forEach(({geometry:ee})=>ee.dispose()),f.clear(),m.dispose(),g.forEach(({faded:ee})=>ee!==void 0&&yo(ee)),g.clear(),_.forEach(({faded:ee})=>yo(ee)),_.clear(),v.clear(),A.forEach(({shape:ee})=>ee.dispose()),A.clear(),y.dispose(),E.dispose(),R.forEach(ee=>ee.dispose()),L.dispose(),D.dispose(),O.dispose(),X.dispose(),c.dispose(),u.dispose(),r.dispose()},"dispose")}},"createStage");var Ir=1/Math.sqrt(3),pb=1.5*Ir,PC=l((i,e)=>{let t=-i-e,n=Math.round(i),r=Math.round(e),s=Math.round(t),a=Math.abs(n-i),o=Math.abs(r-e),c=Math.abs(s-t);return a>o&&a>c?n=-r-s:o>c&&(r=-n-s),[n,r]},"roundAxial"),IC=l(({height:i,width:e,wrapsY:t})=>{let n=l((r,s)=>[r+.5+(s&1)*.5,Ir+s*pb],"centre");return{topologyId:"hex-odd-r",centre:n,outline:l((r,s)=>{let[a,o]=n(r,s);return[[a,o-Ir],[a+.5,o-Ir/2],[a+.5,o+Ir/2],[a,o+Ir],[a-.5,o+Ir/2],[a-.5,o-Ir/2]]},"outline"),tileAt:l((r,s)=>{let a=r-.5,o=s-Ir,[c,u]=PC(a-o*Math.sqrt(3)/3,o*2*Math.sqrt(3)/3);return[c+(u-(u&1))/2,u]},"tileAt"),period:l(()=>({u:e,v:t?i*pb:null}),"period")}},"hexOddRLayout"),mb=IC;var LC=l(({height:i,width:e,wrapsY:t})=>({topologyId:"square",centre:l((n,r)=>[n+.5,r+.5],"centre"),outline:l((n,r)=>[[n,r],[n+1,r],[n+1,r+1],[n,r+1]],"outline"),tileAt:l((n,r)=>[Math.floor(n),Math.floor(r)],"tileAt"),period:l(()=>({u:e,v:t?i:null}),"period")}),"squareLayout"),gb=LC;var Qi=Math.SQRT2/2,DC=l(({height:i,width:e,wrapsY:t})=>{let n=l((r,s)=>[(2*r+(s&1)+1)*Qi,(s+1)*Qi],"centre");return{topologyId:"staggered-iso",centre:n,outline:l((r,s)=>{let[a,o]=n(r,s);return[[a,o-Qi],[a+Qi,o],[a,o+Qi],[a-Qi,o]]},"outline"),tileAt:l((r,s)=>{let a=r/Qi,o=s/Qi,c=Math.floor((a+o)/2-1+.5),u=Math.floor((o-a)/2+.5),h=c+u;return[Math.floor((c-u)/2),h]},"tileAt"),period:l(()=>({u:e*2*Qi,v:t?i*Qi:null}),"period")}},"staggeredIsoLayout"),xb=DC;var _b={square:gb,"staggered-iso":xb,"hex-odd-r":mb},NC=l(i=>{if(!Object.prototype.hasOwnProperty.call(_b,i.topologyId))throw new Error(`No ground layout for the ${i.topologyId} grid.`);if(i.wrapsY&&i.topologyId!=="square"&&i.height%2!==0)throw new Error(`The ${i.topologyId} grid can't wrap over the poles with an odd number of rows (${i.height}).`);return _b[i.topologyId](i)},"groundLayoutFor"),yb=NC;var rc=l(i=>{let e=i/1.2;if(e>=1)return 0;let t=1-e;return t*t*t*t*(4*e+1)},"weight");var Gd=.65,F0=l(i=>{let e=l(t=>{let n=parseInt(i.slice(t,t+2),16)/255;return n<=.04045?n/12.92:((n+.055)/1.055)**2.4},"channel");return[e(1),e(3),e(5)]},"linear"),Lr=.22,Vd=.12,O0={low:.2,high:.5},bb=l((i,e,t,n,r,s,a,o,c)=>{let u=s-t,h=a-n,p=u*u+h*h,f=p===0?0:Math.max(0,Math.min(1,((i-t)*u+(e-n)*h)/p)),m=rc(Math.hypot(i-t-u*f,e-n-h*f)),x=1-f;return m===0?-1/0:m*m*(r+(o-r)*(1-x*x*x)+c)},"halfRidge"),sc=l((i,e,t,n)=>{let r=Math.imul(i,374761393)+Math.imul(e,668265263)+Math.imul(t,2246822519)+Math.imul(n,3266489917)|0;return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296},"chance"),UC=l((i,e,t)=>({u:(sc(i,e,t,1)*2-1)*Lr,v:(sc(i,e,t,2)*2-1)*Lr,scale:.75+sc(i,e,t,3)*.5}),"peakOf"),FC=l(({layout:i,ranges:e=!0,seed:t=1,source:n})=>{let{width:r,height:s,wrapsY:a}=n,o=i.period(),c=Wn([ji({cell:.7,period:o,seed:t}),ji({cell:.35,period:o,seed:t+1}),ji({cell:.17,period:o,seed:t+2})]),u=Wn([ji({cell:.45,period:o,seed:t+3}),ji({cell:.22,period:o,seed:t+4})]),h=l((B,J)=>1-2*Math.abs(u(B,J)),"ridged"),p=ji({cell:.8,period:o,seed:t+5}),f=ji({cell:.8,period:o,seed:t+6}),m={flat:null,rolling:"rolling",ridged:"ridged",peaked:"ridged"},x=[],b=[],g=[],_=[],v=[],E=l((B,J)=>{let H=(B%r+r)%r;return!a&&(J<0||J>=s)?null:(J%s+s)%s*r+H},"index"),M=l(B=>{let J=new Array(r*s).fill(1/0),H=[];B.forEach(($,j)=>{$&&(J[j]=0,H.push([j%r,Math.floor(j/r)]))});for(let[$,j]of H){let he=J[j*r+$]??1/0;he>=Ki.reach||n.neighbours($,j).forEach(([ge,Q])=>{let pe=Q*r+ge;(J[pe]??1/0)>he+1&&(J[pe]=he+1,H.push([ge,Q]))})}return J},"distancesFromLand"),R=l((B,J)=>{let H=n.terrainAt(B,J);return`${H}${H!=="Unknown"&&n.waterAt(B,J)?" water":""}`},"readAs"),A=l(B=>{if(B!==void 0&&b.length>0&&B.every(([le,de])=>{let ue=E(le,de);return ue===null||b[ue]===R(le,de)}))return[];let J=[],H=[],$=[];for(let le=0;le<s;le++)for(let de=0;de<r;de++){let ue=n.terrainAt(de,le);J.push(ue),H.push(ue!=="Unknown"&&n.waterAt(de,le)),$.push(Zs(ue))}let j=M(J.map((le,de)=>le!=="Unknown"&&!H[de])),he=J.map((le,de)=>`${le}${H[de]?" water":""}`),ge=[];he.forEach((le,de)=>{b[de]!==le&&ge.push([de%r,Math.floor(de/r)])}),b=he,x=$.map((le,de)=>{let ue=le===bd,ee=de%r,me=Math.floor(de/r),ie=UC(ee,me,t);if(!H[de])return{relief:le.relief,colour:F0(le.colour),surface:In.indexOf(le.surface),water:!1,unknown:ue,peak:ie};let xe=Math.min(j[de]??1/0,Ki.reach),Se=Ki.shore+(Ki.deep-Ki.shore)*Math.max(0,xe-1)/Math.max(1,Ki.reach-1);return{relief:{...le.relief,base:Se},colour:F0(le.colour),surface:In.indexOf("sand"),water:!0,unknown:ue,peak:ie}});let Q=v,pe=new Map(ge.map(([le,de])=>[`${le},${de}`,[le,de]]));return v=x.map(({relief:le,unknown:de},ue)=>!de&&!H[ue]&&le.shape==="peaked"),ge.some(([le,de])=>{let ue=de*r+le;return v[ue]===!0||Q[ue]===!0})&&([g,_]=X()),ge.forEach(([le,de])=>{let ue=de*r+le;v[ue]!==!0&&Q[ue]!==!0||n.neighbours(le,de).forEach(([ee,me])=>{let ie=E(ee,me);ie!==null&&v[ie]===!0&&pe.set(`${ee},${me}`,[ee,me])})}),[...pe.values()]},"refresh"),y=l(B=>{let[J,H]=i.centre(0,B);return Math.max(...i.outline(0,B).map(([$,j])=>Math.hypot($-J,j-H)))},"cornerOf"),S=l((B,J)=>{let[H,$]=i.centre(0,B),j=[];for(let he=-8;he<=8;he++)for(let ge=-6;ge<=6;ge++){let[Q,pe]=i.centre(ge,B+he);Math.hypot(Q-H,pe-$)<J+1e-9&&j.push([ge,he])}return j},"offsetsWithin"),L=l((B,J,H,$)=>{if(r>=6&&(!a||s>=6)){let le=l((ee,me)=>{let ie=(ee%me+me)%me;return ie*2<me?ie:ie-me},"nearest"),de=le(H-B,r),ue=a?le($-J,s):$-J;return de===0&&ue===0?[]:[[de,ue]]}let j=l((le,de)=>{let ue=(le%de+de)%de;return ue===0?[0]:[ue,ue-de]},"copies"),[he,ge]=i.centre(B,J),Q=j(H-B,r).flatMap(le=>(a?j($-J,s):[$-J]).flatMap(de=>{if(le===0&&de===0)return[];let[ue,ee]=i.centre(B+le,J+de);return[[le,de,Math.hypot(ue-he,ee-ge)]]})),pe=Math.min(...Q.map(([,,le])=>le));return Q.filter(([,,le])=>le<=pe+1e-9).map(([le,de])=>[le,de])},"stepsTo"),P=Math.max(...[0,1].flatMap(B=>{let[J,H]=i.centre(0,B);return n.neighbours(0,B).flatMap(([$,j])=>L(0,B,$,j).map(([he,ge])=>{let[Q,pe]=i.centre(he,B+ge);return Math.hypot(Q-J,pe-H)}))}),1),D=[0,1].map(B=>{let[J,H]=i.centre(0,B);return S(B,P+Lr*Math.SQRT2+Vd+1.2+Math.max(y(0),y(1))).flatMap(([$,j])=>{let[he,ge]=i.centre($,B+j);return[$,j,he-J,ge-H]})}),O=l((B,J,H,$,j,he)=>{let ge=j-H,Q=he-$,pe=ge*ge+Q*Q,le=pe===0?0:Math.max(0,Math.min(1,((B-H)*ge+(J-$)*Q)/pe));return Math.hypot(B-H-ge*le,J-$-Q*le)},"toSegment"),X=l(()=>{let B=x.map(()=>[]),J=x.map(()=>[]),H=Math.max(y(0),y(1));return e?(x.forEach(($,j)=>{if(v[j]!==!0)return;let he=j%r,ge=Math.floor(j/r),[Q,pe]=i.centre(he,ge),le=new Map;n.neighbours(he,ge).forEach(([de,ue])=>{let ee=E(de,ue);ee!==null&&v[ee]===!0&&L(he,ge,de,ue).forEach(([me,ie])=>le.set(`${me},${ie}`,[me,ie,ee]))}),le.forEach(([de,ue,ee])=>{let me=x[ee];if(me===void 0||ue<0||ue===0&&de<0)return;let[ie,xe]=i.centre(he+de,ge+ue),{peak:Se,relief:be}=$,{peak:qe,relief:Ke}=me,lt=Se.u,je=Se.v,St=ie-Q+qe.u,ct=xe-pe+qe.v,wt=be.base*Gd*Se.scale,Dt=Ke.base*Gd*qe.scale,ot=Math.hypot(St-lt,ct-je)||1,G=16+(ue+2)*5+(de+2),Je=(sc(he,ge,t,G)*2-1)*Vd,tt=O0.low+(O0.high-O0.low)*sc(he,ge,t,G+32),at=(lt+St)/2-(ct-je)/ot*Je,ye=(je+ct)/2+(St-lt)/ot*Je,gt=Math.max(Math.hypot(lt-at,je-ye),Math.hypot(St-at,ct-ye))+1.2,ze={au:lt,av:je,ah:wt,mu:at,mv:ye,mh:tt*Math.min(wt,Dt),bu:St,bv:ct,bh:Dt,roughness:(be.roughness+Ke.roughness)/2,cu:at,cv:ye,reach:gt*gt},We=(Math.sqrt(ze.reach)+H)**2,I=D[ge&1]??[];for(let w=0;w<I.length;w+=4){let q=I[w+2],fe=I[w+3];if((q-at)**2+(fe-ye)**2>=We||Math.min(O(q,fe,lt,je,at,ye),O(q,fe,at,ye,St,ct))>=1.2+H)continue;let ae=E(he+I[w],ge+I[w+1]);ae!==null&&(B[ae]?.push(ze),J[ae]?.push(q,fe))}})}),[B,J]):[B,J]},"ranges"),U=l(B=>{let[J,H]=i.centre(0,B),$=Math.max(...i.outline(0,B).map(([he,ge])=>Math.hypot(he-J,ge-H))),j=[];for(let he=-6;he<=6;he++)for(let ge=-4;ge<=4;ge++){let[Q,pe]=i.centre(ge,B+he);Math.hypot(Q-J,pe-H)<1.2+$+Lr*Math.SQRT2+1e-9&&j.push([ge,he])}return j},"offsetsFor"),Y=[U(0),U(1)],ne=l((B,J)=>{let[H,$]=i.tileAt(B,J),j=E(H,$),he=j===null?null:x[j]??null;if(he===null||he.unknown)return{height:0,colour:F0(bd.colour),surfaces:In.map(()=>0),shore:0,unseen:!0};let ge=null,Q=null,pe=l(wt=>wt==="rolling"?ge??=c(B,J):Q??=h(B,J),"noiseHere"),le=0,de=0,ue=0,ee=0,me=In.map(()=>0),ie=0,xe=0,Se=0,be=0,qe=0,Ke=B+Lr*p(B,J),lt=J+Lr*f(B,J);(Y[$&1]??[]).forEach(([wt,Dt])=>{let ot=H+wt,G=$+Dt,Je=E(ot,G);if(Je===null)return;let tt=x[Je];if(tt===void 0)return;let[at,ye]=i.centre(ot,G),{relief:gt,colour:ze,peak:We,surface:I}=tt,w=rc(Math.hypot(B-at,J-ye)),q=gt.shape==="peaked"?rc(Math.hypot(B-at-We.u,J-ye-We.v)):0,fe=rc(Math.hypot(Ke-at,lt-ye))**3;if(w>0){let ae=m[gt.shape],Me=ae===null?0:gt.roughness*pe(ae);gt.shape==="peaked"?de+=w*(gt.base*(1-Gd)+Me*.5):de+=w*(gt.base+Me),le+=w}if(q>0){let ae=gt.roughness*pe("ridged");ue+=q*q*(gt.base*Gd*We.scale+ae*.5)}ee+=fe,tt.unknown||(me[I]=(me[I]??0)+fe,ie+=fe,xe+=tt.water?fe:0),Se+=fe*ze[0],be+=fe*ze[1],qe+=fe*ze[2]});let je=j===null?[]:g[j]??[],St=j===null?[]:_[j]??[],ct=ue;if(je.length>0){let[wt,Dt]=i.centre(H,$);je.forEach((ot,G)=>{let Je=B-wt+(St[G*2]??0),tt=J-Dt+(St[G*2+1]??0);if((Je-ot.cu)**2+(tt-ot.cv)**2>=ot.reach)return;let at=ot.roughness*pe("ridged")*.5;ct=Math.max(ct,bb(Je,tt,ot.au,ot.av,ot.ah,ot.mu,ot.mv,ot.mh,at),bb(Je,tt,ot.bu,ot.bv,ot.bh,ot.mu,ot.mv,ot.mh,at))})}return{height:(le>0?de/le:0)+ct,colour:ee>0?[Se/ee,be/ee,qe/ee]:he.colour,surfaces:ie>0?me.map(wt=>wt/ie):In.map((wt,Dt)=>Dt===he.surface?1:0),shore:ie>0?xe/ie:he.water?1:0,unseen:!1}},"sample");return A(),{sample:ne,height:l((B,J)=>ne(B,J).height,"height"),refresh:A}},"createRelief"),vb=FC;var Mb=l((i,e,{size:t=16,perUnit:n=8}={})=>{let{u:r,v:s}=i.period(),a=s??Math.max(...i.outline(0,e-1).map(([,p])=>p),...i.outline(1,e-1).map(([,p])=>p)),o=Math.max(1,Math.round(r/t)),c=Math.max(1,Math.round(a/t)),u=Math.max(2,Math.round(r/o*n)),h=Math.max(2,Math.round(a/c*n));return{chunksU:o,chunksV:c,stepsU:u,stepsV:h,spacingU:r/o/u,spacingV:a/c/h}},"chunkGrid"),Sb=l((i,e,t,n)=>{let{stepsU:r,stepsV:s,spacingU:a,spacingV:o}=i,c=t*r,u=n*s,h=l((L,P)=>[L*a,P*o],"at"),p=r+3,f=new Float64Array(p*(s+3)),m=(r+1)*(s+1),x=new Float32Array(m*3),b=new Uint8Array(m*4),g=new Uint8Array(m*4),_=new Uint8Array(m),v=new Float32Array(m);for(let L=-1;L<=s+1;L++)for(let P=-1;P<=r+1;P++){let D=e.sample(...h(c+P,u+L)),{height:O,colour:X}=D;if(f[(L+1)*p+(P+1)]=O,P>=0&&P<=r&&L>=0&&L<=s){let U=L*(r+1)+P;x.set(X,U*3),D.surfaces.forEach((Y,ne)=>{(ne<4?b:g)[U*4+ne%4]=Math.round(Y*255)}),_[U]=Math.round(D.shore*255),v[U]=D.unseen?1:0}}let E=l((L,P)=>f[(P+1)*p+(L+1)]??0,"height"),M=new Float32Array(m*3),R=new Float32Array(m*3),[A,y]=h(c,u);for(let L=0;L<=s;L++)for(let P=0;P<=r;P++){let D=L*(r+1)+P,[O,X]=h(c+P,u+L),U=(E(P+1,L)-E(P-1,L))/(2*a),Y=(E(P,L+1)-E(P,L-1))/(2*o),ne=Math.hypot(U,1,Y);M[D*3]=O-A,M[D*3+1]=E(P,L),M[D*3+2]=X-y,R[D*3]=-U/ne,R[D*3+1]=1/ne,R[D*3+2]=-Y/ne}let S=new Uint32Array(r*s*6);for(let L=0;L<s;L++)for(let P=0;P<r;P++){let D=L*(r+1)+P,O=D+1,X=D+r+1,U=X+1,Y=(L*r+P)*6;S.set([D,X,O,O,X,U],Y)}return{u:A,v:y,positions:M,normals:R,colours:x,surfacesA:b,surfacesB:g,shore:_,unseen:v,indices:S}},"buildChunk"),B0=l((i,e,t,n)=>{let r=i.stepsU*i.spacingU,s=i.stepsV*i.spacingV,a=e.period().v!==null,o=new Set;return t.forEach(([c,u])=>{let[h,p]=e.centre(c,u);for(let f=Math.floor((h-n)/r);f<=Math.floor((h+n)/r);f++)for(let m=Math.floor((p-n)/s);m<=Math.floor((p+n)/s);m++){if(!a&&(m<0||m>=i.chunksV))continue;let x=(f%i.chunksU+i.chunksU)%i.chunksU,b=a?(m%i.chunksV+i.chunksV)%i.chunksV:m;o.add(`${x},${b}`)}}),[...o].map(c=>c.split(",").map(Number))},"chunksNear");var $n=l((i,e,t,n,r)=>({kind:i,count:e,size:t,colour:n,detail:r}),"plant"),wb={Forest:{plants:[$n("conifer",8,[.95,1.4],"#2c5230","#4a3424")],conifers:[.15,.95],canopy:"woods"},Jungle:{plants:[$n("broadleaf",7,[1.05,1.55],"#2b6a2a","#4d3a26"),$n("palm",2,[.9,1.2],"#3f8a34","#6b5236")],canopy:"woods"},Swamp:{plants:[$n("reeds",7,[.8,1.2],"#7a8a4a","#5a6a38"),$n("deadTree",2,[.8,1.1],"#4a4036","#4a4036")],canopy:"swamp"},Grassland:{plants:[$n("bush",2,[.8,1.2],"#4e7a32","#4e7a32")]},Plains:{plants:[$n("shrub",3,[.7,1.1],"#7a7a3a","#6a5a36")]},Tundra:{plants:[$n("scrub",4,[.7,1.1],"#6a6a4e","#5a5444")]},Hills:{plants:[$n("shrub",2,[.8,1.1],"#5e6e36","#5e5036"),$n("rock",1,[.8,1.2],"#7d756a","#7d756a")]},Mountains:{plants:[$n("rock",3,[.9,1.4],"#77706a","#77706a")]},Desert:{plants:[$n("rock",2,[.7,1.1],"#a8936a","#a8936a"),$n("cactus",1,[.8,1.1],"#5a7a3e","#5a7a3e")]}},wo=l(i=>Object.prototype.hasOwnProperty.call(wb,i)?wb[i]:null,"growthOf");var Eb=["Ocean"],OC=["Mountains"],BC=["Mine","Fortress","Airbase"],kC=["River"],_n=l((i,e)=>(i.improvements??[]).some(({_:t})=>t===e),"has"),zC=["Irrigation","Farmland","Fortress","Airbase"],Ab=l(i=>i.city||zC.some(e=>_n(i,e))?null:wo(i.terrain?._??"Unknown")?.canopy??null,"woodsOf"),GC=l((i,e)=>{if(i.city){let f=i.city;return{road:null,railroad:null,irrigation:null,mine:!1,fortress:!1,airbase:!1,pollution:!1,specials:[],hut:!1,terrain:i.terrain?._??"Unknown",vegetation:!1,woods:[],paths:[],city:Cy(p0(String(f.id??f.name??"")),f.growth?.size??1,e.filter(({tile:m})=>_n(m,"Road")&&(_n(i,"Road")||_n(m,"Railroad"))).map(({offset:m})=>m),e.filter(({tile:m})=>Eb.includes(m.terrain?._??"")).map(({offset:m})=>m)),suburbs:[],beside:[]}}let t=_n(i,"Road"),n=_n(i,"Railroad"),r=t?e.filter(f=>_n(f.tile,"Road")).map(({offset:f})=>f):[],s=t?e.filter(f=>!!f.tile.city||_n(f.tile,"Railroad")).map(({offset:f})=>f):[],a=l((f,m)=>f[0]===m[0]&&f[1]===m[1],"same"),o=r.length===0&&s.length===0,c={road:t?{joins:r.filter(f=>!n||!s.some(m=>a(m,f))),alone:o&&!n}:null,railroad:t&&n?{joins:s,alone:o}:null,irrigation:_n(i,"Farmland")?"farmland":_n(i,"Irrigation")?"irrigation":null,mine:_n(i,"Mine"),fortress:_n(i,"Fortress"),airbase:_n(i,"Airbase"),pollution:_n(i,"Pollution"),specials:(i.terrain?.features??[]).map(({_:f})=>f).filter(f=>!kC.includes(f)).map(f=>[i.terrain._,f]),hut:i.goodyHut!==null&&i.goodyHut!==void 0,terrain:i.terrain?._??"Unknown",vegetation:wo(i.terrain?._??"Unknown")!==null,woods:[],paths:[],city:null,suburbs:[],beside:[]},u=Ab(i),h=i.terrain?._??"Unknown";return i.isWater!==!0&&!Eb.includes(h)&&h!=="Unknown"&&!OC.includes(h)&&!BC.some(f=>_n(i,f))&&(c.suburbs=e.flatMap(({offset:f,tile:{city:m}})=>{let x=m?Iy(m.growth?.size??1):0;return m&&x>0?[{seed:p0(String(m.id??m.name??"")),steps:x,city:f}]:[]}).sort((f,m)=>f.seed-m.seed||f.city[0]-m.city[0]||f.city[1]-m.city[1])),c.suburbs.length>0&&(c.beside=e.filter(({tile:{city:f}})=>!!f).map(({offset:f})=>f)),u!==null&&(c.woods=e.filter(f=>Ab(f.tile)===u).map(({offset:f})=>f)),(u!==null||c.suburbs.length>0)&&(c.paths=e.filter(f=>!!f.tile.city||_n(f.tile,"Road")).map(({offset:f})=>f)),c.road===null&&c.irrigation===null&&!c.mine&&!c.fortress&&!c.airbase&&!c.pollution&&c.specials.length===0&&!c.hut&&!c.vegetation&&c.suburbs.length===0?null:c},"overlayFor"),Tb=GC;var Ut=l((i,e,t,n)=>({shape:i,colour:e,count:t,...n===void 0?{}:{detail:n}}),"look"),Cb={Coal:Ut("rocks","#26262a",4),Gold:Ut("rocks","#d8b13a",3),Gems:Ut("rocks","#59c2d6",4,"#b05ad0"),Iron:Ut("rocks","#8a5a44",4),Wheat:Ut("crop","#d9b84a",5,"#a88a2c"),Spice:Ut("crop","#c0452e",4,"#5d7a2a"),Wine:Ut("crop","#6a2c5e",4,"#5d7a2a"),Silk:Ut("crop","#e9e2cf",3,"#4f7a34"),Fruit:Ut("crop","#e08a2a",4,"#3f7a2a"),Horse:Ut("animal","#7a4e2a",2,"#3a2a1c"),Buffalo:Ut("animal","#4a3424",3,"#2a1e16"),Game:Ut("animal","#a9835a",2,"#5a4430"),"Tundra:Game":Ut("animal","#8f7e66",2,"#e8e2d6"),Furs:Ut("animal","#b0602a",2,"#f0e8dc"),Ivory:Ut("animal","#8a8580",1,"#f2ead8"),Seal:Ut("animal","#6e7072",2,"#4a4c4e"),Pheasant:Ut("bird","#8a3a22",2,"#3d6a3a"),Fish:Ut("fish","#b8c4cc",5),Whales:Ut("whale","#3a4048",1),Oil:Ut("derrick","#222224",1,"#121214"),Oasis:Ut("oasis","#3f7a32",3,"#3f86a8"),Peat:Ut("peat","#4a3624",4),Shield:Ut("logs","#7a5532",4,"#c9a47a")},VC=Ut("cairn","#9a9690",5),Rb=l((i,e)=>{let t=l(n=>Object.prototype.hasOwnProperty.call(Cb,n)?Cb[n]:void 0,"own");return t(`${i}:${e}`)??t(e)??VC},"specialLook");var X0=l(()=>({positions:[],normals:[],colours:[]}),"soup"),Cn={field:.01,road:.014,ballast:.016,rail:.02,smear:.024},Ao=.06,Pb="#8c7a58",Ib="#5f5953",HC="#a9abae",WC="#5e432b",XC="#4f87b0",qC="#7da33f",YC=["#c2b448","#8fae3e"],Lb="#9d968a",$C="#4a4c50",V0="#6b4a2e",ZC="#7a6a58",JC="#b89a5a",KC="#c9b48e",Db="#34322a",Tn=new Wi(1,1,1),To=new Xi(.5,.5,1,8),q0=new Tr(.5,1,8),Vb=new Tr(.5,1,4),Eo=new is(.5,8,6),ac=new Xi(.5,.5,1,4,1,!0),oc=new Tr(.5,1,5,1,!0),Hd=new is(.5,5,3),k0={mine:[3,.72],hut:[11,.64],special:l(i=>[i+1,.72],"special")},jC=.05,Hb=.22,Nb=72,li=l((i,e)=>{let t=Math.imul(i^Math.imul(e+1,2654435761),2246822507);return t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,(t>>>0)/4294967296},"fraction"),Y0=.05,Ub=new Map,Wd=l(i=>{let e=Ub.get(i);if(e===void 0){let{r:t,g:n,b:r}=new Be(i);e=[t,n,r],Ub.set(i,e)}return e},"colourOf"),Fb=new WeakMap,QC=l(i=>{let e=Fb.get(i);if(e===void 0){let t=i.index===null?i:i.toNonIndexed();e={positions:new Float32Array(t.getAttribute("position").array),normals:new Float32Array(t.getAttribute("normal").array)},Fb.set(i,e),t!==i&&t.dispose()}return e},"trianglesOf"),eR=new bt,tR=new Ze,nR=new W,iR=new Sn,rR=new kn,sR=new W,Ct,Wb,Bt,K0=class K0{constructor(e,t){V(this,Ct);this.lines=[];this.runs=[];this.past=[];this.taken=[];this.grown=[];this.soup=e,this.place=t}ground(e,t,n=!1){let r=this.place.heightAt(e,t);return n?Math.max(0,r):r}strip(e,t,n,r,s){let a=Wd(r),o=Math.hypot(t[0]-e[0],t[1]-e[1]);if(o===0)return;let c=Math.max(1,Math.ceil(o/Ao)),u=Math.max(1,Math.ceil(n/Ao)),h=[-(t[1]-e[1])/o*n,(t[0]-e[0])/o*n],p=l((f,m)=>[e[0]+(t[0]-e[0])*f+h[0]*(m-.5),e[1]+(t[1]-e[1])*f+h[1]*(m-.5)],"at");for(let f=0;f<c;f++)for(let m=0;m<u;m++){let[x,b]=p(f/c,(m+1)/u),[g,_]=p((f+1)/c,(m+1)/u),[v,E]=p(f/c,m/u),[M,R]=p((f+1)/c,m/u);C(this,Ct,Bt).call(this,x,b,s,a),C(this,Ct,Bt).call(this,g,_,s,a),C(this,Ct,Bt).call(this,v,E,s,a),C(this,Ct,Bt).call(this,g,_,s,a),C(this,Ct,Bt).call(this,M,R,s,a),C(this,Ct,Bt).call(this,v,E,s,a)}}ribbon(e,t,n,r,s){let a=Wd(n),o=e.map((c,u)=>{let h=e[u-1]??c,p=e[u+1]??c,[f,m]=s?.[u]??[p[0]-h[0],p[1]-h[1]],x=Math.hypot(f,m);return x===0?[0,0]:[-m/x*t,f/x*t]});for(let c=0;c+1<e.length;c++){let u=e[c],h=e[c+1],p=o[c],f=o[c+1],m=Math.hypot(h[0]-u[0],h[1]-u[1]);if(m===0)continue;let x=Math.max(1,Math.ceil(m/Ao)),b=Math.max(1,Math.ceil(t/Ao)),g=l((_,v)=>[u[0]+(h[0]-u[0])*_+(p[0]+(f[0]-p[0])*_)*(v-.5),u[1]+(h[1]-u[1])*_+(p[1]+(f[1]-p[1])*_)*(v-.5)],"at");for(let _=0;_<x;_++)for(let v=0;v<b;v++){let[E,M]=g(_/x,(v+1)/b),[R,A]=g((_+1)/x,(v+1)/b),[y,S]=g(_/x,v/b),[L,P]=g((_+1)/x,v/b);C(this,Ct,Bt).call(this,E,M,r,a),C(this,Ct,Bt).call(this,R,A,r,a),C(this,Ct,Bt).call(this,y,S,r,a),C(this,Ct,Bt).call(this,R,A,r,a),C(this,Ct,Bt).call(this,L,P,r,a),C(this,Ct,Bt).call(this,y,S,r,a)}}}disc(e,t,n,r,s=12){let a=Wd(n),[o,c]=e,u=Math.max(1,Math.ceil(t/Ao)),h=l((p,f)=>{let m=f/s*Math.PI*2,x=p/u*t;return[o+Math.cos(m)*x,c+Math.sin(m)*x]},"at");for(let p=0;p<u;p++)for(let f=0;f<s;f++){let m=h(p+1,f),x=h(p+1,f+1);if(p===0)C(this,Ct,Bt).call(this,o,c,r,a),C(this,Ct,Bt).call(this,...x,r,a),C(this,Ct,Bt).call(this,...m,r,a);else{let b=h(p,f),g=h(p,f+1);C(this,Ct,Bt).call(this,...b,r,a),C(this,Ct,Bt).call(this,...g,r,a),C(this,Ct,Bt).call(this,...m,r,a),C(this,Ct,Bt).call(this,...g,r,a),C(this,Ct,Bt).call(this,...x,r,a),C(this,Ct,Bt).call(this,...m,r,a)}}}solid(e,t,n,r,s=[0,0,0]){let{positions:a,normals:o}=QC(e),c=eR.compose(nR.set(...t),iR.setFromEuler(rR.set(...s)),sR.set(...n)),u=c.elements,h=tR.getNormalMatrix(c).elements,[p,f,m]=Wd(r),x=this.soup;for(let b=0;b<a.length;b+=3){let g=a[b],_=a[b+1],v=a[b+2],E=o[b],M=o[b+1],R=o[b+2],A=h[0]*E+h[3]*M+h[6]*R,y=h[1]*E+h[4]*M+h[7]*R,S=h[2]*E+h[5]*M+h[8]*R,L=Math.hypot(A,y,S)||1;x.positions.push(u[0]*g+u[4]*_+u[8]*v+u[12],u[1]*g+u[5]*_+u[9]*v+u[13],u[2]*g+u[6]*_+u[10]*v+u[14]),x.normals.push(A/L,y/L,S/L),x.colours.push(p,f,m)}}spot(e,t){let n=li(this.place.seed,e)*Math.PI*2,[r,s]=this.place.centre;return[r+Math.cos(n)*t*this.place.radius,s+Math.sin(n)*t*this.place.radius]}clearance(e,t,n){let[r,s]=this.place.centre,a=Math.hypot(e-r,t-s)-Hb-n;return this.lines.forEach(([o,c])=>{a=Math.min(a,MR(e,t,o,c)-jC-n)}),this.taken.forEach(([o,c,u])=>{a=Math.min(a,Math.hypot(e-o,t-c)-u-n)}),a}hasRoom(e,t,n){return this.clearance(e,t,n)>=0}claim(e,t,n){let r=li(this.place.seed,e)*Math.PI*2,[s,a]=this.place.centre,o=[s,a],c=-1/0;for(let u of[t,t*.88,t*1.1])for(let h=0;h<Nb;h++){let p=r+h/Nb*Math.PI*2,f=[s+Math.cos(p)*u*this.place.radius,a+Math.sin(p)*u*this.place.radius],m=this.clearance(f[0],f[1],n);if(m>=0)return this.taken.push([f[0],f[1],n]),f;m>c&&(o=f,c=m)}return this.taken.push([o[0],o[1],n]),o}};Ct=new WeakSet,Wb=l(function(e,t){let n=Y0,r=(this.place.heightAt(e+n,t)-this.place.heightAt(e-n,t))/(2*n),s=(this.place.heightAt(e,t+n)-this.place.heightAt(e,t-n))/(2*n),a=Math.hypot(r,1,s);return[-r/a,1/a,-s/a]},"#normal"),Bt=l(function(e,t,n,r){this.soup.positions.push(e,this.ground(e,t)+n,t),this.soup.normals.push(...C(this,Ct,Wb).call(this,e,t)),this.soup.colours.push(...r)},"#point"),l(K0,"Layer");var H0=K0,qd=l((i,e)=>{let[t,n]=i.centre,[r,s]=i.toward(e);return[(t+r)/2,(n+s)/2]},"halfway"),$0=l(i=>i.alone||i.joins.length>0,"drawn"),aR=.09,oR=8,W0=l(([i,e])=>300+(i+3)*7+(e+3),"wayIndex"),Yd=l((i,e)=>{let[t,n]=i.centre,[r,s]=qd(i,e),a=r-t,o=s-n,c=Math.hypot(a,o);if(c===0)return{points:[[t,n]],ways:[[0,0]]};let u=(li(i.seed,W0(e))*2-1)*aR*c/(4/9),h=[-o/c,a/c],p=[t+a/3+h[0]*u,n+o/3+h[1]*u],f=[t+a*2/3,n+o*2/3],m=Math.max(oR,Math.ceil(c*1.02/Ao)),x=Array.from({length:m+1},(b,g)=>g/m);return{points:x.map(b=>{let g=(1-b)**3,_=3*(1-b)**2*b,v=3*(1-b)*b**2,E=b**3;return[g*t+_*p[0]+v*f[0]+E*r,g*n+_*p[1]+v*f[1]+E*s]}),ways:x.map(b=>{let g=3*(1-b)**2,_=6*(1-b)*b,v=3*b**2,E=g*(p[0]-t)+_*(f[0]-p[0])+v*(r-f[0]),M=g*(p[1]-n)+_*(f[1]-p[1])+v*(s-f[1]),R=Math.hypot(E,M);return R===0?[a/c,o/c]:[E/R,M/R]})}},"roadHalf"),lR=l((i,e)=>{let{place:t}=i;$0(e)&&(e.joins.forEach(n=>{let{points:r,ways:s}=Yd(t,n);i.ribbon(r,.07,Pb,Cn.road,s)}),i.disc(t.centre,e.alone?.09:.035,Pb,Cn.road))},"road"),cR=l((i,e)=>{if(!$0(e))return;let{place:t}=i;(e.alone?[[t.centre[0]+.12,t.centre[1]],[t.centre[0]-.12,t.centre[1]]]:e.joins.map(r=>qd(t,r))).forEach(r=>{let[s,a]=t.centre,o=Math.hypot(r[0]-s,r[1]-a),c=o===0?[0,0]:[-(r[1]-a)/o*.025,(r[0]-s)/o*.025];i.strip(t.centre,r,.1,Ib,Cn.ballast);for(let u=.1;u<1;u+=.2){let h=[s+(r[0]-s)*u,a+(r[1]-a)*u];i.strip([h[0]+c[0]*1.8,h[1]+c[1]*1.8],[h[0]-c[0]*1.8,h[1]-c[1]*1.8],.014,WC,Cn.ballast+.002)}[1,-1].forEach(u=>i.strip([s+c[0]*u,a+c[1]*u],[r[0]+c[0]*u,r[1]+c[1]*u],.01,HC,Cn.rail))}),i.disc(t.centre,.05,Ib,Cn.ballast)},"railroad"),z0=.04,uR=l((i,e,t,n,r)=>{let s=r.filter(c=>Math.min(...c.map(([,u])=>u))-Lt<t+n/2&&Math.max(...c.map(([,u])=>u))+Lt>t-n/2).map(c=>[Math.min(...c.map(([u])=>u))-Lt,Math.max(...c.map(([u])=>u))+Lt]).sort((c,u)=>c[0]-u[0]),a=[],o=i;return s.forEach(([c,u])=>{c-o>=z0&&a.push([o,Math.min(c,e)]),o=Math.max(o,u)}),e-o>=z0&&a.push([o,e]),a.filter(([c,u])=>u-c>=z0)},"rowAround"),hR=l((i,e,t)=>{let{centre:n,inner:r}=i.place,s=e==="farmland"?6:4,a=r*.9,o=a*2/s,c=l((u,h,p,f)=>uR(n[0]-a,n[0]+a,u,h,t).forEach(([m,x])=>i.strip([m,u],[x,u],h,p,f)),"across");for(let u=0;u<s;u++)c(n[1]-a+o*(u+.5),o*.8,e==="farmland"?YC[u%2]:qC,Cn.field),u>0&&c(n[1]-a+o*u,.016,XC,Cn.field+.001)},"fields"),Ob=["#9c5a3c","#7d4a36","#6f6a64","#8b6b4a"],Bb="#a39a88",dR="#c4b8a2",fR=.045,kb=.86,pR=l((i,e)=>{let{place:t}=i,[n,r]=t.centre,{plaza:s,streets:a,lots:o}=Ry(t,e,[n,r+ra]);i.disc(s.at,s.radius,Bb,Cn.road,16),a.forEach(([c,u])=>i.strip(c,u,ql,Bb,Cn.road)),o.forEach(c=>Xb(i,c))},"city"),Xb=l((i,e)=>{let{at:[t,n],width:r,facing:s,storeys:a}=e,o=[[t,n],...po(e)].map(([h,p])=>i.ground(h,p)),c=Math.min(...o)-.005,u=Math.max(...o)+fR*a;i.solid(Tn,[t,(c+u)/2,n],[r*kb,u-c,r*kb],dR,[0,s,0]),i.solid(Vb,[t,u+r*.2,n],[r*Math.SQRT2,r*.4,r*Math.SQRT2],Ob[Math.floor(e.roof*Ob.length)],[0,s+Math.PI/4,0])},"house"),mR=l((i,e)=>{if(e.suburbs.length===0)return[];let{place:t}=i,n=l((o,c)=>o[0]===c[0]&&o[1]===c[1],"same"),r=l(o=>{let[c,u]=t.toward(o);return[c,u+ra]},"standOf"),s={runs:[...i.runs],lines:[...i.past],lanes:e.beside.filter(o=>![...e.road?.joins??[],...e.railroad?.joins??[]].some(c=>n(c,o))).map(o=>[[t.centre[0],t.centre[1]],r(o)]),stands:e.beside.map(r),taken:i.taken,ground:l((o,c)=>t.heightAt(o,c),"ground")};return e.suburbs.flatMap(o=>Ly(t,o,{...s,others:e.beside.filter(c=>!n(c,o.city)).map(c=>t.toward(c))})).map(o=>(Xb(i,o),i.taken.push([o.at[0],o.at[1],o.width/2*Math.SQRT2]),po(o)))},"suburbs"),gR=l((i,[e,t])=>{let n=i.ground(e,t);i.solid(Tn,[e-.02,n+.05,t],[.01,.11,.01],V0,[0,0,-.3]),i.solid(Tn,[e+.02,n+.05,t],[.01,.11,.01],V0,[0,0,.3]),i.solid(To,[e,n+.1,t],[.05,.008,.05],"#3a3a3a",[Math.PI/2,0,0]),[[.07,.03],[-.05,.06]].forEach(([r,s])=>{let a=e+r,o=t+s;i.solid(q0,[a,i.ground(a,o)+.02,o],[.07,.04,.07],ZC)})},"mine"),xR=l(i=>{let[e,t]=i.place.centre,n=i.place.radius*.62,r=i.ground(e,t);[[0,-n,n*2,.025],[0,n,n*2,.025],[-n,0,.025,n*2],[n,0,.025,n*2]].forEach(([s,a,o,c])=>{let u=e+s,h=t+a;i.solid(Tn,[u,Math.max(r,i.ground(u,h))+.02,h],[o,.05,c],Lb)}),[[-n,-n],[n,-n],[-n,n],[n,n]].forEach(([s,a])=>{let o=e+s,c=t+a;i.solid(To,[o,i.ground(o,c)+.035,c],[.045,.07,.045],Lb)})},"fortress"),_R=l(i=>{let[e,t]=i.place.centre,n=i.place.radius*.75,[r,s]=i.claim(5,.6,.08);i.strip([e-n,t+.12],[e+n,t+.12],.12,$C,Cn.road+.002),i.strip([e-n*.9,t+.12],[e+n*.9,t+.12],.008,"#e8e8e8",Cn.road+.004),i.solid(Tn,[r,i.ground(r,s)+.03,s],[.12,.06,.08],"#8a9096")},"airbase"),yR=l(i=>{let e=i.place.radius;i.disc(i.place.centre,e*.55,Db,Cn.smear,14),i.disc(i.spot(7,.5),e*.25,Db,Cn.smear+.001)},"pollution"),bR=l((i,e,t,n)=>{let r=e.detail??e.colour,s=l((o,c)=>[t[0]+(li(i.place.seed,n*31+o*2)-.5)*c,t[1]+(li(i.place.seed,n*31+o*2+1)-.5)*c],"jitter"),a=e.shape==="fish"||e.shape==="whale";for(let o=0;o<e.count;o++){let[c,u]=e.count===1?[t[0],t[1]]:s(o,.1),h=i.ground(c,u,a),p=li(i.place.seed,n*31+o+17)*Math.PI*2;switch(e.shape){case"rocks":i.solid(Eo,[c,h+.012,u],[.05,.035,.045],o%2===1?r:e.colour,[0,p,0]);break;case"crop":i.solid(To,[c,h+.02,u],[.008,.04,.008],r),i.solid(Eo,[c,h+.05,u],[.045,.04,.045],e.colour);break;case"animal":{let f=e.count===1?1.5:1;i.solid(Tn,[c,h+.04*f,u],[.035*f,.03*f,.07*f],e.colour,[0,p,0]),i.solid(Tn,[c+Math.sin(p)*.04*f,h+.055*f,u+Math.cos(p)*.04*f],[.022*f,.024*f,.03*f],r,[0,p,0]),i.solid(Tn,[c,h+.013*f,u],[.03*f,.026*f,.055*f],r,[0,p,0]);break}case"bird":i.solid(Eo,[c,h+.02,u],[.03,.025,.04],e.colour,[0,p,0]),i.solid(Tn,[c-Math.sin(p)*.03,h+.025,u-Math.cos(p)*.03],[.008,.006,.04],r,[.4,p,0]);break;case"fish":i.solid(Eo,[c,h+.006,u],[.012,.01,.035],e.colour,[0,p,0]);break;case"whale":i.solid(Eo,[c,h,u],[.07,.05,.2],e.colour,[0,p,0]),i.solid(Tn,[c-Math.sin(p)*.11,h+.02,u-Math.cos(p)*.11],[.08,.006,.03],e.colour,[0,p,0]);break;case"derrick":i.solid(Tn,[c,h+.008,u],[.08,.016,.08],r),i.solid(Vb,[c,h+.1,u],[.06,.18,.06],e.colour,[0,Math.PI/4,0]);break;case"oasis":o===0&&i.disc([c,u],.07,r,Cn.field+.002);{let[f,m]=s(o+5,.1),x=i.ground(f,m);i.solid(To,[f,x+.06,m],[.012,.12,.012],V0),i.solid(q0,[f,x+.125,m],[.09,.03,.09],e.colour)}break;case"peat":case"logs":i.solid(e.shape==="logs"?To:Tn,[c,h+.012,u],e.shape==="logs"?[.022,.09,.022]:[.05,.02,.035],o%2===1&&e.detail!==void 0?e.detail:e.colour,e.shape==="logs"?[0,p,Math.PI/2]:[0,p,0]);break;default:i.solid(Eo,[t[0],i.ground(t[0],t[1])+.012+o*.018,t[1]],[.05-o*.007,.025,.05-o*.007],e.colour)}}},"special"),vR=l((i,e)=>{[0,1,2].forEach(t=>{let n=t/3*Math.PI*2+li(i.place.seed,12)*Math.PI,r=e[0]+Math.cos(n)*.06,s=e[1]+Math.sin(n)*.06,a=i.ground(r,s);i.solid(To,[r,a+.02,s],[.05,.04,.05],KC),i.solid(q0,[r,a+.055,s],[.065,.035,.065],JC)})},"hut"),qb={conifer:.06,broadleaf:.07,palm:.06,deadTree:.05,bush:.035,shrub:.03,scrub:.03,reeds:.03,rock:.04,cactus:.03},Yb=l((i,e,t,n,r,s,a)=>{let o=i.ground(n,r),{colour:c,detail:u}=e;switch(t){case"conifer":i.solid(ac,[n,o+.025*s,r],[.016*s,.05*s,.016*s],u),i.solid(oc,[n,o+.09*s,r],[.11*s,.12*s,.11*s],c),i.solid(oc,[n,o+.16*s,r],[.08*s,.1*s,.08*s],c);break;case"broadleaf":i.solid(ac,[n,o+.04*s,r],[.018*s,.08*s,.018*s],u),i.solid(Hd,[n,o+.12*s,r],[.13*s,.11*s,.13*s],c,[0,a,0]);break;case"palm":i.solid(ac,[n,o+.08*s,r],[.012*s,.16*s,.012*s],u,[.12,a,0]),i.solid(oc,[n+.01*s,o+.165*s,r],[.15*s,.03*s,.15*s],c,[0,a,0]);break;case"deadTree":i.solid(ac,[n,o+.06*s,r],[.014*s,.12*s,.014*s],u),i.solid(Tn,[n+.02*s,o+.09*s,r],[.006*s,.05*s,.006*s],u,[0,a,-.7]);break;case"bush":i.solid(Hd,[n,o+.02*s,r],[.06*s,.045*s,.06*s],c,[0,a,0]);break;case"shrub":i.solid(oc,[n,o+.025*s,r],[.05*s,.05*s,.05*s],c,[0,a,0]),i.solid(oc,[n+.02*s,o+.018*s,r+.01*s],[.035*s,.036*s,.035*s],c,[0,a,0]);break;case"scrub":i.solid(Hd,[n,o+.008*s,r],[.05*s,.02*s,.05*s],c,[0,a,0]);break;case"reeds":[-1,0,1].forEach(h=>i.solid(Tn,[n+h*.008*s,o+.035*s,r],[.005,.07*s,.005],h===0?c:u,[0,a,h*.18]));break;case"rock":i.solid(Hd,[n,o+.012*s,r],[.07*s,.04*s,.06*s],c,[0,a,0]);break;default:i.solid(ac,[n,o+.05*s,r],[.018*s,.1*s,.018*s],c),i.solid(Tn,[n+.015*s,o+.06*s,r],[.025*s,.01*s,.01*s],c,[0,a,0])}},"grow"),MR=l((i,e,t,n)=>{let r=n[0]-t[0],s=n[1]-t[1],a=r*r+s*s,o=a===0?0:Math.max(0,Math.min(1,((i-t[0])*r+(e-t[1])*s)/a));return Math.hypot(i-(t[0]+r*o),e-(t[1]+s*o))},"distanceTo"),SR=l((i,e)=>{let t=wo(e.terrain);if(t===null)return;let{centre:n,radius:r,seed:s,latitude:a}=i.place;t.plants.forEach((o,c)=>{for(let u=0;u<o.count;u++){let h=1e3+c*97+u*7,p=o.size[0]+(o.size[1]-o.size[0])*li(s,h),f=t.conifers,m=f!==void 0&&li(s,h+1)>=f[0]+(f[1]-f[0])*a?"broadleaf":o.kind,x=qb[m]*p;for(let b=0;b<6;b++){let g=li(s,h+2+b*2)*Math.PI*2,_=Math.sqrt(li(s,h+3+b*2))*r*.92,v=n[0]+Math.cos(g)*_,E=n[1]+Math.sin(g)*_;if(i.hasRoom(v,E,x)){Yb(i,o,m,v,E,p,g),i.taken.push([v,E,x]),i.grown.push([v,E,m]);break}}}})},"plants"),G0=.26,zb=.3,wR=.15,Gb=.5,Xd=[.9,1.3],la=l((i,e,t)=>li(Math.imul(i,73856093)^Math.imul(e,19349663)^1540483477,t),"pointFraction"),ER=l((i,e,t)=>{let{centre:n,outline:r,owns:s,around:a,period:o,toward:c,latitude:u}=e,h=Math.max(1,Math.round(o.u/G0)),p=o.u/h,f=o.v===null?null:Math.max(1,Math.round(o.v/G0)),m=o.v===null||f===null?G0:o.v/f,x=r.map(([y])=>y),b=r.map(([,y])=>y),[g,_]=[Math.floor(Math.min(...x)/p)-1,Math.ceil(Math.max(...x)/p)],[v,E]=[Math.floor(Math.min(...b)/m)-1,Math.ceil(Math.max(...b)/m)],M=a.filter(([y,S])=>!i.woods.some(([L,P])=>L===y&&P===S)).map(y=>{let[S,L]=c(y),P=Math.hypot(S-n[0],L-n[1]);return{mu:S,mv:L,length:P}}),R=t.plants.reduce((y,{count:S})=>y+S,0),A=[];for(let y=v;y<=E;y++)for(let S=g;S<=_;S++){let L=(S%h+h)%h,P=f===null?y:(y%f+f)%f,D=(S+.5+(la(L,P,0)*2-1)*zb)*p,O=(y+.5+(la(L,P,1)*2-1)*zb)*m;if(!s(D,O))continue;let X=M.reduce((H,{mu:$,mv:j,length:he})=>{let ge=he/2-((D-n[0])*($-n[0])+(O-n[1])*(j-n[1]))/he;return Math.min(H,Math.max(0,ge)/wR)},1);if(la(L,P,2)>=Gb+(1-Gb)*X)continue;let U=la(L,P,3)*R,Y=t.plants[0];for(let H of t.plants)if(Y=H,U-=H.count,U<0)break;let ne=t.conifers,B=ne!==void 0&&la(L,P,4)>=ne[0]+(ne[1]-ne[0])*u?"broadleaf":Y.kind,J=Y.size[0]+(Y.size[1]-Y.size[0])*la(L,P,5);A.push({u:D,v:O,kind:B,plant:Y,room:qb[B]*J*Xd[1],size:J*(Xd[0]+(Xd[1]-Xd[0])*X),facing:la(L,P,6)*Math.PI*2})}return A},"woodsPlants"),AR=l((i,e)=>{let{centre:t,around:n,toward:r}=i.place,s=Math.max(...n.map(o=>{let[c,u]=r(o);return Math.hypot(c-t[0],u-t[1])})),a=e.paths.map(o=>r(o));a.forEach((o,c)=>a.slice(c+1).forEach(u=>{Math.hypot(u[0]-o[0],u[1]-o[1])<=s+1e-6&&(i.lines.push([o,u]),i.past.push([o,u]))}))},"pathsPast"),TR=l((i,e,t)=>{let{heightAt:n}=i.place;ER(e,i.place,t).forEach(({u:r,v:s,kind:a,plant:o,size:c,room:u,facing:h})=>{a!=="reeds"&&n(r,s)<0||i.hasRoom(r,s,u)&&(Yb(i,o,a,r,s,c,h),i.grown.push([r,s,a]))})},"woods"),Z0=l((i,e,t)=>{let n=new H0(t,e),{centre:r,radius:s}=e;if(i.city!==null)return pR(n,i.city),{taken:n.taken,lines:n.lines,grown:n.grown};if([i.road,i.railroad].forEach(c=>{c!==null&&$0(c)&&(c.joins.forEach(u=>{if(c===i.road){let h=Yd(e,u).points;h.slice(1).forEach((p,f)=>n.lines.push([h[f],p])),n.runs.push({key:W0(u),points:h});return}n.lines.push([r,qd(e,u)]),n.runs.push({key:W0(u)+100,points:[r,qd(e,u)]})}),c.alone&&n.lines.push([r,r]))}),i.fortress){let c=s*.62,u=[[-c,-c],[c,-c],[c,c],[-c,c]].map(([h,p])=>[r[0]+h,r[1]+p]);u.forEach((h,p)=>n.lines.push([h,u[(p+1)%4]]))}if(i.airbase){let c=s*.75;n.lines.push([[r[0]-c,r[1]+.12],[r[0]+c,r[1]+.12]])}i.road!==null&&lR(n,i.road),i.railroad!==null&&cR(n,i.railroad),i.front===!0&&n.taken.push([r[0],r[1]+ra,Hb]),i.mine&&gR(n,n.claim(...k0.mine,.1)),i.fortress&&xR(n),i.airbase&&_R(n),i.pollution&&yR(n),i.specials.forEach(([c,u],h)=>bR(n,Rb(c,u),n.claim(...k0.special(h),.1),h+1)),i.hut&&vR(n,n.claim(...k0.hut,.13)),AR(n,i);let a=mR(n,i);i.irrigation!==null&&hR(n,i.irrigation,a);let o=wo(i.terrain);return o!==null&&i.irrigation===null&&!i.fortress&&!i.airbase&&(o.canopy!==void 0?TR(n,i,o):SR(n,i)),{taken:n.taken,lines:n.lines,grown:n.grown}},"layOverlay"),CR=l((i,e,t)=>{let n=X0();return t.forEach(({overlay:r,place:s})=>Z0(r,s,n)),J0(i,e,n)},"overlayMesh"),J0=l((i,e,t)=>{let n=new Float32Array(t.positions);for(let r=0;r<n.length;r+=3)n[r]=n[r]-i,n[r+2]=n[r+2]-e;return{u:i,v:e,positions:n,normals:new Float32Array(t.normals),colours:new Float32Array(t.colours)}},"meshOf"),$b=CR;var Zb=l((i,e)=>Math.imul(i,73856093)^Math.imul(e,19349663),"squareSeed"),ds,$t,Pi,Co,hc,Zn,Jn,tn,Ro,ca,fs,ua,ps,ms,dc,fc,et,Q0,eg,tg,Jb,Kb,ng,lc,ig,$d,cc,Zd,uc,rg=class rg{constructor(e){V(this,et);V(this,ds);V(this,$t);V(this,Pi,[]);V(this,Co);V(this,hc);V(this,Zn);V(this,Jn,new Set);V(this,tn,null);V(this,Ro,null);V(this,ca,new Map);V(this,fs,new Map);V(this,ua,l(()=>{},"#keptCity"));V(this,ps,!0);V(this,ms,[0,0]);V(this,dc);V(this,fc);z(this,Zn,e);let t=e.topology(),n=e.width(),r=e.height(),s=t.wrapsY();this.layout=yb({width:n,height:r,topologyId:e.topologyId(),wrapsY:s}),z(this,ds,vb({layout:this.layout,source:{width:n,height:r,wrapsY:s,terrainAt:l((f,m)=>e.get(f,m).terrain._,"terrainAt"),waterAt:l((f,m)=>e.get(f,m).isWater,"waterAt"),neighbours:l((f,m)=>t.directions().map(x=>t.neighbour(f,m,x)).filter(x=>x!==null),"neighbours")}})),z(this,$t,Mb(this.layout,r));let[a,o]=this.layout.centre(0,0),c=Math.max(...this.layout.outline(0,0).map(([f,m])=>Math.hypot(f-a,m-o))),u=Math.max(...t.directions().map(f=>t.offset(f,0,0)).map(([f,m])=>{let[x,b]=this.layout.centre(f,m);return Math.hypot(x-a,b-o)}));z(this,Co,1.2+c+Lr*Math.SQRT2+Math.max((Ki.reach-1)*u,u/2+Lr*Math.SQRT2+Vd)),z(this,hc,c+Y0+Math.max(d(this,$t).spacingU,d(this,$t).spacingV));let h=this.layout.outline(0,0),p=h.flatMap(([f,m],x)=>{let[b,g]=h[(x+1)%h.length],_=Math.hypot(b-f,g-m);return _===0?[]:[{away:Math.abs((b-f)*(o-m)-(g-m)*(a-f))/_,normal:[(g-m)/_,(f-b)/_]}]});z(this,dc,Math.min(...p.map(({away:f})=>f))),z(this,fc,Math.min(...p.map(({away:f,normal:[m,x]})=>f/(Math.abs(m)+Math.abs(x)))))}surfaceAt(e,t,n=new Map){let{spacingU:r,spacingV:s}=d(this,$t),a=Math.floor(e/r),o=Math.floor(t/s),c=e/r-a,u=t/s-o,h=l((b,g)=>{let _=`${b},${g}`,v=n.get(_);return v===void 0&&(v=d(this,ds).height(b*r,g*s),n.set(_,v)),v},"at"),p=h(a,o),f=h(a+1,o),m=h(a,o+1);if(c+u<=1)return p+(f-p)*c+(m-p)*u;let x=h(a+1,o+1);return x+(m-x)*(1-c)+(f-x)*(1-u)}ground(){let{chunksU:e,chunksV:t,stepsU:n,stepsV:r,spacingU:s,spacingV:a}=d(this,$t);return{columns:e*n,rows:t*r,spacingU:s,spacingV:a,wrapsV:this.layout.period().v!==null}}extentV(){return d(this,$t).chunksV*d(this,$t).stepsV*d(this,$t).spacingV}heightAt(e,t){return d(this,ds).height(e,t)}queueAll(e,t){let{chunksU:n,chunksV:r}=d(this,$t),s=[];for(let a=0;a<r;a++)for(let o=0;o<n;o++)s.push(`${o},${a}`);z(this,Pi,C(this,et,uc).call(this,s,e,t)),z(this,ms,[e,t]),s.forEach(a=>d(this,Jn).add(a)),C(this,et,tg).call(this)}changed(e,t,n,r=!1){if(e.length===0&&!r)return[];z(this,ms,[t,n]),C(this,et,Q0).call(this,e.length===0?[...C(this,et,cc).call(this).values()].flat():C(this,et,Zd).call(this,e));let s=d(this,ds).refresh(r?void 0:e);if(s.length===0)return s;let a=B0(d(this,$t),this.layout,s,d(this,Co)).map(([o,c])=>`${o},${c}`);return C(this,et,tg).call(this,B0(d(this,$t),this.layout,s,d(this,Co)+d(this,hc)).map(([o,c])=>`${o},${c}`)),z(this,Pi,C(this,et,uc).call(this,[...new Set([...d(this,Pi),...a])],t,n)),s}showTowns(e,t,n){if(e===d(this,ps))return;let r=[...C(this,et,cc).call(this).values()].flat().filter(([s,a])=>C(this,et,eg).call(this,s,a));z(this,ps,e),z(this,ms,[t,n]),C(this,et,Q0).call(this,C(this,et,Zd).call(this,r))}refocus(e,t){z(this,Pi,C(this,et,uc).call(this,d(this,Pi),e,t)),z(this,ms,[e,t])}pending(){return d(this,Pi).length}overlaysPending(){return d(this,Jn).size+(d(this,tn)===null||d(this,Jn).has(d(this,tn).key)?0:1)}build(e,t){let n=performance.now(),r=l(()=>t!==null&&performance.now()-n>=t,"spent");for(;d(this,Pi).length>0;){if(r())return;let a=d(this,Pi).shift(),[o,c]=a.split(",").map(Number);e.setChunk(o,c,Sb(d(this,$t),d(this,ds),o,c)),d(this,Jn).add(a)}let s=!1;for(;d(this,Jn).size>0||d(this,tn)!==null;){if(d(this,tn)!==null&&d(this,Jn).has(d(this,tn).key)&&z(this,tn,null),d(this,tn)===null){if(s&&r())return;let x=C(this,et,uc).call(this,[...d(this,Jn)],...d(this,ms))[0],b=C(this,et,cc).call(this).get(x)??[],g=C(this,et,Kb).call(this,x,b);if(d(this,Jn).delete(x),g!==null){let[_,v]=x.split(",").map(Number);b.forEach(([E,M],R)=>d(this,ca).set(`${E},${M}`,g.signatures[R])),e.setOverlay(_,v,g.mesh),s=!0;continue}z(this,tn,{key:x,squares:b,done:0,laid:X0(),signatures:[],heights:new Map,keep:!0})}let a=d(this,tn);for(;a.done<a.squares.length;){let[x,b]=a.squares[a.done],g=C(this,et,ig).call(this,x,b,a.heights);if(a.signatures.push(d(this,ca).get(`${x},${b}`)),a.done++,g!==null&&Z0(g.overlay,g.place,a.laid),a.done<a.squares.length&&r())return}let[o,c]=a.key.split(",").map(Number),{stepsU:u,stepsV:h,spacingU:p,spacingV:f}=d(this,$t),m=a.laid.positions.length===0?null:J0(o*u*p,c*h*f,a.laid);if(z(this,tn,null),a.keep){let x={signatures:a.signatures,mesh:m};d(this,fs).set(a.key,C(this,et,Zd).call(this,a.squares).some(([b,g])=>C(this,et,eg).call(this,b,g))?{...d(this,fs).get(a.key),[d(this,ps)?"shown":"hidden"]:x}:{shown:x,hidden:x})}e.setOverlay(o,c,m),s=!0}}keepCities(e){z(this,ua,e)}roadPath(e,t,n,r){let s=d(this,Zn).topology(),a=l((M,R,A,y)=>{let S=s.directions().find(L=>{let P=s.neighbour(M,R,L);return P!==null&&P[0]===A&&P[1]===y});return S===void 0?null:s.offset(S,M,R)},"offsetTo"),o=a(e,t,n,r),c=a(n,r,e,t);if(o===null||c===null)return null;let u=l((M,R,A)=>{let y=C(this,et,lc).call(this,M,R),S=l(P=>P!==null&&P.joins.some(([D,O])=>D===A[0]&&O===A[1]),"joins"),L=this.layout.centre(M,R);if(S(y?.road??null))return Yd({centre:L,toward:l(([P,D])=>this.layout.centre(M+P,R+D),"toward"),seed:Zb(M,R)},A).points;if(S(y?.railroad??null)){let[P,D]=this.layout.centre(M+A[0],R+A[1]);return[[L[0],L[1]],[(L[0]+P)/2,(L[1]+D)/2]]}return null},"half"),h=u(e,t,o),p=u(n,r,c);if(h===null&&p===null)return null;let f=this.layout.centre(e,t),m=this.layout.centre(n,r),x=this.layout.centre(e+o[0],t+o[1]),b=this.layout.centre(n+c[0],r+c[1]),g=[(f[0]+x[0])/2,(f[1]+x[1])/2],_=[(m[0]+b[0])/2,(m[1]+b[1])/2],v=[_[0]-g[0],_[1]-g[1]];return[...(h??[f,g]).map(([M,R])=>[M+v[0],R+v[1]]),...(p??[m,_]).slice(0,-1).reverse()].map(([M,R])=>[M-m[0],R-m[1]])}overlayOf(e,t){let{stepsU:n,stepsV:r,spacingU:s,spacingV:a}=d(this,$t),o=new Map,c=(C(this,et,cc).call(this).get(`${e},${t}`)??[]).flatMap(([u,h])=>C(this,et,ig).call(this,u,h,o)??[]);return c.length===0?null:$b(e*n*s,t*r*a,c)}overlayKeyOf(e,t){return C(this,et,$d).call(this,e,t)}};ds=new WeakMap,$t=new WeakMap,Pi=new WeakMap,Co=new WeakMap,hc=new WeakMap,Zn=new WeakMap,Jn=new WeakMap,tn=new WeakMap,Ro=new WeakMap,ca=new WeakMap,fs=new WeakMap,ua=new WeakMap,ps=new WeakMap,ms=new WeakMap,dc=new WeakMap,fc=new WeakMap,et=new WeakSet,Q0=l(function(e){e.forEach(([t,n])=>{let r=C(this,et,$d).call(this,t,n);if(d(this,Jn).has(r)||d(this,tn)?.key===r&&!C(this,et,Jb).call(this,d(this,tn),t,n))return;JSON.stringify(C(this,et,lc).call(this,t,n))!==(d(this,ca).get(`${t},${n}`)??"null")&&d(this,Jn).add(r)})},"#layAgain"),eg=l(function(e,t){return!!d(this,Zn).get(e,t).city||!!d(this,ua).call(this,e,t)},"#townAt"),tg=l(function(e){let t=e===void 0?null:new Set(e);t===null?d(this,fs).clear():t.forEach(n=>d(this,fs).delete(n)),d(this,tn)!==null&&(t===null||t.has(d(this,tn).key))&&(d(this,tn).keep=!1)},"#landChanged"),Jb=l(function(e,t,n){return e.squares.slice(0,e.done).some(([r,s])=>r===t&&s===n)},"#reached"),Kb=l(function(e,t){let n=d(this,fs).get(e);if(n===void 0)return null;let r=t.map(([s,a])=>JSON.stringify(C(this,et,lc).call(this,s,a)));return[n.shown,n.hidden].find(s=>s!==void 0&&s.signatures.length===r.length&&s.signatures.every((a,o)=>a===r[o]))??null},"#madeAs"),ng=l(function(e,t){let n=d(this,Zn).get(e,t),r=d(this,ps)?d(this,ua).call(this,e,t):null;return r===void 0?n:{...n,city:r}},"#shownAt"),lc=l(function(e,t){let n=d(this,Zn).topology(),r=Tb(C(this,et,ng).call(this,e,t),n.directions().flatMap(a=>{let o=n.neighbour(e,t,a);return o===null?[]:[{offset:n.offset(a,e,t),tile:C(this,et,ng).call(this,o[0],o[1])}]})),s=d(this,ua).call(this,e,t);return r!==null&&!d(this,ps)&&(s===void 0?d(this,Zn).get(e,t).city:s)?{...r,front:!0}:r},"#overlayAt"),ig=l(function(e,t,n){let r=C(this,et,lc).call(this,e,t);if(d(this,ca).set(`${e},${t}`,JSON.stringify(r)),r===null)return null;let[s,a]=this.layout.centre(e,t),o=d(this,Zn).topology();return{overlay:r,place:{centre:[s,a],toward:l(([c,u])=>this.layout.centre(e+c,t+u),"toward"),radius:d(this,dc),inner:d(this,fc),heightAt:l((c,u)=>this.surfaceAt(c,u,n),"heightAt"),seed:Zb(e,t),latitude:Math.min(1,Math.abs(2*a/this.extentV()-1)),outline:this.layout.outline(e,t),owns:l((c,u)=>{let[h,p]=this.layout.tileAt(c,u);return h===e&&p===t},"owns"),around:o.directions().filter(c=>o.neighbour(e,t,c)!==null).map(c=>o.offset(c,e,t)),period:this.layout.period()}}},"#square"),$d=l(function(e,t){let{chunksU:n,chunksV:r,stepsU:s,stepsV:a,spacingU:o,spacingV:c}=d(this,$t),[u,h]=this.layout.centre(e,t),p=Math.floor(u/(s*o)),f=Math.floor(h/(a*c));return`${Math.min(n-1,Math.max(0,p))},${Math.min(r-1,Math.max(0,f))}`},"#chunkOf"),cc=l(function(){if(d(this,Ro)===null){let e=new Map;for(let t=0;t<d(this,Zn).height();t++)for(let n=0;n<d(this,Zn).width();n++){let r=C(this,et,$d).call(this,n,t);e.set(r,[...e.get(r)??[],[n,t]])}z(this,Ro,e)}return d(this,Ro)},"#chunksOfSquares"),Zd=l(function(e){let t=d(this,Zn).topology(),n=new Map;return e.forEach(([r,s])=>[[r,s],...t.directions().map(a=>t.neighbour(r,s,a)).filter(a=>a!==null)].forEach(a=>n.set(a.join(),a))),[...n.values()]},"#besides"),uc=l(function(e,t,n){let{stepsU:r,stepsV:s,spacingU:a,spacingV:o}=d(this,$t),c=r*a,u=s*o,{u:h,v:p}=this.layout.period(),f=l((x,b)=>Math.abs(b===null?x:x-b*Math.round(x/b)),"round"),m=l(x=>{let[b,g]=x.split(",").map(Number);return Math.hypot(f((b+.5)*c-t,h),f((g+.5)*u-n,p))},"distance");return[...e].sort((x,b)=>m(x)-m(b))},"#nearestFirst"),l(rg,"Land");var j0=rg,jb=j0;var RR=l(()=>typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches===!0,"prefersReducedMotion"),Ii=RR;var Qb=l((i,e,t=100)=>{let n=i.filter(({time:o})=>e-o<=t);if(n.length<2)return{x:0,y:0};let r=n[0],s=n[n.length-1],a=s.time-r.time;return a<=0?{x:0,y:0}:{x:(s.x-r.x)/a,y:(s.y-r.y)/a}},"releaseVelocity");var PR=8,IR=.92,LR=.02,ev=3,DR=50,NR=8,UR=10,tv=250,pc,mc,Po,Io,ha,gs,sg=class sg{constructor({pointerId:e,clientX:t,clientY:n,timeStamp:r}){V(this,pc);V(this,mc);V(this,Po);V(this,Io);V(this,ha,!1);V(this,gs);this.pointerId=e,z(this,pc,t),z(this,mc,n),z(this,Po,t),z(this,Io,n),z(this,gs,[{x:t,y:n,time:r}])}dragging(){return d(this,ha)}move({pointerId:e,clientX:t,clientY:n,timeStamp:r}){if(e!==this.pointerId||!d(this,ha)&&Math.hypot(t-d(this,pc),n-d(this,mc))<PR)return null;let s=!d(this,ha),a=d(this,Po)-t,o=d(this,Io)-n;return z(this,ha,!0),z(this,Po,t),z(this,Io,n),d(this,gs).push({x:t,y:n,time:r}),d(this,gs).length>20&&d(this,gs).shift(),{dx:a,dy:o,started:s}}releaseVelocity(e){return Qb(d(this,gs),e)}};pc=new WeakMap,mc=new WeakMap,Po=new WeakMap,Io=new WeakMap,ha=new WeakMap,gs=new WeakMap,l(sg,"Press");var Jd=sg,er,gc,ag=class ag{constructor(e){V(this,er,null);V(this,gc);z(this,gc,e)}start(e){this.stop();let t=Math.hypot(e.x,e.y),n=t>ev?ev/t:1,r=e.x*n,s=e.y*n,a=null,o=l(c=>{let u=a===null?16:Math.min(c-a,64);if(a=c,Math.hypot(r,s)<LR){z(this,er,null);return}d(this,gc).call(this,-r*u,-s*u);let h=Math.pow(IR,u/16);r*=h,s*=h,z(this,er,window.requestAnimationFrame(o))},"step");z(this,er,window.requestAnimationFrame(o))}gliding(){return d(this,er)!==null}stop(){d(this,er)!==null&&(window.cancelAnimationFrame(d(this,er)),z(this,er,null))}};er=new WeakMap,gc=new WeakMap,l(ag,"Glide");var Kd=ag,da,xc,_c,Lo,og=class og{constructor(){V(this,da,0);V(this,xc,0);V(this,_c,-1/0);V(this,Lo,0)}turned(e,t){let n=e.deltaMode===0,r=e.deltaY;if(r===0||e.ctrlKey&&t!==null&&e.timeStamp-t<=tv)return 0;let s=Math.sign(r),a=e.timeStamp-d(this,_c)>tv||s!==d(this,xc);if(z(this,_c,e.timeStamp),z(this,xc,s),a&&(z(this,da,0),z(this,Lo,0)),n&&!e.ctrlKey&&d(this,Lo)>=UR)return 0;if(!a&&n){if(z(this,da,d(this,da)+r),Math.abs(d(this,da))<(e.ctrlKey?NR:DR))return 0;z(this,da,0)}return n&&!e.ctrlKey&&z(this,Lo,d(this,Lo)+1),r<0?1:-1}};da=new WeakMap,xc=new WeakMap,_c=new WeakMap,Lo=new WeakMap,l(og,"WheelTurn");var jd=og;var FR=350,OR=.006,nv=.004,tr,cn,Rn,Do,nr,Li,nf,ui,hi,xs,No,Kn,_s,Ne,ci,Qd,ef,iv,cg,Dr,ug,rv,Nr,sv,av,ov,lv,yc,cv,uv,hv,tf,hg=class hg{constructor(e,t,n=null){V(this,Ne);V(this,tr);V(this,cn);V(this,Rn,null);V(this,Do,[0,0]);V(this,nr,null);V(this,Li);V(this,nf,new jd);V(this,ui,new Map);V(this,hi,null);V(this,xs,null);V(this,No,[]);V(this,Kn);V(this,_s,null);z(this,tr,e),z(this,cn,t),z(this,Kn,n),z(this,Li,new Kd((r,s)=>{let[a,o]=C(this,Ne,iv).call(this);C(this,Ne,ug).call(this,[a,o],[a-r,o-s])})),C(this,Ne,ci).call(this,"pointerdown",r=>C(this,Ne,rv).call(this,r)),C(this,Ne,ci).call(this,"pointermove",r=>C(this,Ne,av).call(this,r)),C(this,Ne,ci).call(this,"pointerup",r=>C(this,Ne,ov).call(this,r)),C(this,Ne,ci).call(this,"pointercancel",r=>C(this,Ne,lv).call(this,r)),C(this,Ne,ci).call(this,"wheel",r=>C(this,Ne,uv).call(this,r),{passive:!1}),C(this,Ne,ci).call(this,"gesturestart",r=>C(this,Ne,tf).call(this,r,"start"),{passive:!1}),C(this,Ne,ci).call(this,"gesturechange",r=>C(this,Ne,tf).call(this,r,"change"),{passive:!1}),C(this,Ne,ci).call(this,"gestureend",r=>C(this,Ne,tf).call(this,r,"end"),{passive:!1}),C(this,Ne,ci).call(this,"contextmenu",r=>C(this,Ne,sv).call(this,r)),C(this,Ne,ci).call(this,"pointerleave",()=>d(this,Kn)?.hover(null)),C(this,Ne,ci).call(this,"touchstart",r=>r.preventDefault(),{passive:!1})}dragging(){return d(this,Rn)?.dragging()===!0||d(this,nr)!==null}moving(){return this.dragging()||d(this,hi)!==null||d(this,Li).gliding()}dispose(){d(this,Li).stop(),C(this,Ne,Nr).call(this),d(this,No).forEach(([e,t,n])=>d(this,tr).removeEventListener(e,t,n)),z(this,No,[])}};tr=new WeakMap,cn=new WeakMap,Rn=new WeakMap,Do=new WeakMap,nr=new WeakMap,Li=new WeakMap,nf=new WeakMap,ui=new WeakMap,hi=new WeakMap,xs=new WeakMap,No=new WeakMap,Kn=new WeakMap,_s=new WeakMap,Ne=new WeakSet,ci=l(function(e,t,n){d(this,tr).addEventListener(e,t,n),d(this,No).push([e,t,n])},"#listen"),Qd=l(function(){return{width:d(this,tr).clientWidth||1,height:d(this,tr).clientHeight||1}},"#box"),ef=l(function([e,t]){let{width:n,height:r}=C(this,Ne,Qd).call(this);return[e/n*2-1,1-t/r*2]},"#screen"),iv=l(function(){let{width:e,height:t}=C(this,Ne,Qd).call(this);return[e/2,t/2]},"#middle"),cg=l(function(){let{width:e,height:t}=C(this,Ne,Qd).call(this);return e/t},"#aspect"),Dr=l(function(e){let t=d(this,tr).getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]},"#at"),ug=l(function(e,t){d(this,cn).setOrbit(eb(d(this,cn).orbit(),d(this,cn).lookHeight(),C(this,Ne,ef).call(this,e),C(this,Ne,ef).call(this,t),C(this,Ne,cg).call(this)))},"#pan"),rv=l(function(e){if(d(this,Li).stop(),d(this,Kn)?.hover(null),e.pointerType==="touch"&&(d(this,ui).set(e.pointerId,C(this,Ne,Dr).call(this,e)),d(this,ui).size===2)){z(this,Rn,null),C(this,Ne,Nr).call(this),z(this,hi,C(this,Ne,yc).call(this));return}if(e.isPrimary&&e.button!==2){if(d(this,tr).setPointerCapture?.(e.pointerId),e.button===1||e.button===0&&e.altKey){e.preventDefault(),z(this,nr,{pointerId:e.pointerId,x:e.clientX,y:e.clientY});return}if(e.button===0){let t=new Jd(e),[n,r]=C(this,Ne,Dr).call(this,e),{clientX:s,clientY:a}=e;z(this,Rn,t),z(this,Do,[n,r]),C(this,Ne,Nr).call(this),z(this,_s,window.setTimeout(()=>{z(this,_s,null),d(this,Rn)===t&&!t.dragging()&&d(this,Kn)?.menu(n,r,s,a,!0)===!0&&z(this,Rn,null)},FR))}}},"#down"),Nr=l(function(){d(this,_s)!==null&&(window.clearTimeout(d(this,_s)),z(this,_s,null))},"#stopHold"),sv=l(function(e){if(d(this,Kn)===null||!d(this,Kn).menuOnRightClick()||(e.preventDefault(),d(this,Kn).menuOpen()))return;let[t,n]=C(this,Ne,Dr).call(this,e);d(this,Kn).menu(t,n,e.clientX,e.clientY,!1)&&(C(this,Ne,Nr).call(this),z(this,Rn,null))},"#rightClick"),av=l(function(e){if(d(this,ui).has(e.pointerId)&&(d(this,ui).set(e.pointerId,C(this,Ne,Dr).call(this,e)),d(this,hi)!==null)){C(this,Ne,cv).call(this);return}let t=d(this,nr);if(t!==null&&t.pointerId===e.pointerId){let s=d(this,cn).orbit();d(this,cn).setOrbit(sa({...s,yaw:s.yaw-(e.clientX-t.x)*OR,pitch:s.pitch+(e.clientY-t.y)*nv})),t.x=e.clientX,t.y=e.clientY;return}let n=d(this,Rn);if(n===null){if(e.pointerType==="mouse"&&e.buttons===0&&!d(this,Li).gliding()){let[s,a]=C(this,Ne,Dr).call(this,e);d(this,Kn)?.hover({x:s,y:a,clientX:e.clientX,clientY:e.clientY})}return}if(n.move(e)===null)return;C(this,Ne,Nr).call(this);let r=C(this,Ne,Dr).call(this,e);C(this,Ne,ug).call(this,d(this,Do),r),z(this,Do,r)},"#move"),ov=l(function(e){if(d(this,ui).delete(e.pointerId),d(this,hi)!==null){z(this,hi,d(this,ui).size<2?null:C(this,Ne,yc).call(this));return}if(d(this,nr)?.pointerId===e.pointerId){z(this,nr,null);return}let t=d(this,Rn);if(!(t===null||t.pointerId!==e.pointerId)){if(z(this,Rn,null),C(this,Ne,Nr).call(this),!t.dragging()){let[n,r]=C(this,Ne,Dr).call(this,e);d(this,Kn)?.click(n,r,e.clientX,e.clientY);return}Ii()||d(this,Li).start(t.releaseVelocity(e.timeStamp))}},"#up"),lv=l(function(e){d(this,ui).delete(e.pointerId),d(this,hi)!==null&&z(this,hi,d(this,ui).size<2?null:C(this,Ne,yc).call(this)),d(this,Rn)?.pointerId===e.pointerId&&(z(this,Rn,null),C(this,Ne,Nr).call(this)),d(this,nr)?.pointerId===e.pointerId&&z(this,nr,null)},"#cancel"),yc=l(function(){let[e,t]=[...d(this,ui).values()];return e===void 0||t===void 0?null:{distance:Math.max(1,Math.hypot(t[0]-e[0],t[1]-e[1])),angle:Math.atan2(t[1]-e[1],t[0]-e[0]),middleY:(e[1]+t[1])/2,orbit:d(this,cn).orbit()}},"#measurePair"),cv=l(function(){let e=d(this,hi),t=C(this,Ne,yc).call(this);e===null||t===null||d(this,cn).setOrbit(sa({...e.orbit,distance:e.orbit.distance*(e.distance/t.distance),yaw:e.orbit.yaw-(t.angle-e.angle),pitch:e.orbit.pitch+(t.middleY-e.middleY)*nv}))},"#twoFingers"),uv=l(function(e){e.preventDefault();let t=d(this,nf).turned(e,d(this,xs)?.at??null);t!==0&&(d(this,Li).stop(),C(this,Ne,hv).call(this,t,C(this,Ne,Dr).call(this,e)))},"#wheelTurned"),hv=l(function(e,t){let n=d(this,cn).orbit(),r=vo(n,e),s=bo(n,d(this,cn).lookHeight(),C(this,Ne,ef).call(this,t),C(this,Ne,cg).call(this));if(s===null||r.distance===n.distance){d(this,cn).setOrbit(r);return}let a=1-r.distance/n.distance;d(this,cn).setOrbit({...r,focus:[n.focus[0]+(s[0]-n.focus[0])*a,n.focus[1]+(s[1]-n.focus[1])*a]})},"#zoomAbout"),tf=l(function(e,t){if(e.preventDefault(),d(this,hi)!==null){z(this,xs,null);return}if(t==="end"){z(this,xs,null);return}if(t==="start"){d(this,Li).stop(),z(this,Rn,null),C(this,Ne,Nr).call(this),z(this,xs,{orbit:d(this,cn).orbit(),at:e.timeStamp});return}let n=d(this,xs);n!==null&&(n.at=e.timeStamp,d(this,cn).setOrbit(sa({...n.orbit,distance:n.orbit.distance/Math.max(.05,e.scale),yaw:n.orbit.yaw-e.rotation*Math.PI/180})))},"#safari"),l(hg,"CameraInput");var lg=hg,dv=lg;var BR=["#9a9a9a","#4a4a4a"],bc=l(i=>{let e=i.civilization?.attributes?.find(t=>t.name==="colors")?.value;return!Array.isArray(e)||typeof e[0]!="string"?BR:[e[0],typeof e[1]=="string"?e[1]:e[0]]},"coloursOf"),dg=l((i,e)=>i.find(t=>t.id===e)??[...i].sort((t,n)=>(n.defence?.value??0)-(t.defence?.value??0))[0]??null,"unitOnTop"),kR=l(i=>{let{current:e,max:t}=i.hitPoints??{current:0,max:0};return t>0&&e<t?Math.max(0,e/t):null},"healthOf"),zR=l((i,e,t,n={},r=()=>0,s=1)=>{let a=i.units??[],o=dg(a,e),c=o!==null&&o.id===e,u=t&&i.city?{name:n.cityName?.(i.city)??i.city.name,size:i.city.growth?.size??1,colours:bc(i.city.player),walled:i.city.walled===!0,disorder:i.city.civilDisorderDeclared===!0}:null,h=o!==null&&(t||c)?{id:o.id,type:o._,kinds:o.__??[],colours:bc(o.player),count:a.length,active:c,busy:o.busy!==null&&o.busy!==void 0,fortified:(o.improvements??[]).some(({_:p})=>p==="Fortified"),veteran:(o.improvements??[]).some(({_:p})=>p==="Veteran"),health:kR(o),status:(o.busy?n.unitStatus?.(o):null)||null,facing:r(o),size:s}:null;return u===null&&h===null?null:{city:u,unit:h,inCity:!!i.city}},"markerFor"),fg=zR;var xv={step:250,ramp:100,most:2e3},_v={step:125,ramp:50,most:1e3},yv=l(i=>({step:i.step/2,ramp:i.ramp/2,most:i.most/2}),"quicker"),GR=50,fv=.3,pv=1,VR=.05,HR=.02,pg=l((i,e)=>i.x===e.x&&i.y===e.y,"sameSquare"),mv=l((i,e)=>{let{started:t,from:n,speed:r,rising:s,rise:a,top:o,going:c,stopping:u,fall:h,to:p}=i,f=Math.max(0,e-t);if(f<s)return{along:n+r*f+a*f*f/2,speed:r+a*f};let m=n+(r+o)/2*s;if(f<s+c)return{along:m+o*(f-s),speed:o};let x=m+o*c,b=f-s-c;return b<u?{along:x+o*b-h*b*b/2,speed:o-h*b}:{along:p,speed:0}},"motionAt"),vc=l(i=>i.started+i.rising+i.going+i.stopping,"motionEnds"),gv=l((i,e,t,n,r)=>{let s=Math.max(0,n-e),a=Math.max(1,r.ramp),o=Math.max(1/r.step,r.most>a*2?s/(r.most-a):0),c=o/a;if(s<=0)return{started:i,from:n,speed:0,rising:0,rise:0,top:0,going:0,stopping:0,fall:0,to:n};if(t*t/(2*c)>=s){let g=2*s/t;return{started:i,from:e,speed:t,rising:0,rise:0,top:t,going:0,stopping:g,fall:t/g,to:n}}let u=Math.min(o,Math.sqrt(c*s+t*t/2)),h=Math.abs(u-t)/c,p=u>=t?c:-c,f=u/c,m=(t+u)/2*h,x=u*f/2,b=Math.max(0,(s-m-x)/u);return{started:i,from:e,speed:t,rising:h,rise:p,top:u,going:b,stopping:f,fall:c,to:n}},"plan"),Uo=l((i,e,t)=>t===null?i:i+t*Math.round((e-i)/t),"nearest"),Mc=l((i,e)=>i[0]===e[0]&&i[1]===e[1]?null:Math.atan2(e[0]-i[0],e[1]-i[1]),"wayOf"),mg=l(i=>i*i*(3-2*i),"eased"),Fo=l((i,e,t)=>{let n=e-i-Math.PI*2*Math.round((e-i)/(Math.PI*2));return i+n*t},"turnTowards"),Oo,yn,di,Ec,Ac,it,bv,vv,xg,_g,Mv,yg,rf,Sc,wc,bg,fa,vg=class vg{constructor(e){V(this,it);V(this,Oo);V(this,yn,new Map);V(this,di,new Map);V(this,Ec,[]);V(this,Ac,0);z(this,Oo,e)}walking(e){return d(this,di).has(e)}size(){return d(this,yn).size}step(e,t,n,r,s,a,o,c=!1){let u=d(this,di).get(e),h=u===void 0?void 0:d(this,yn).get(u),p=h===void 0?r:C(this,it,rf).call(this,h,a),f=h===void 0?0:C(this,it,wc).call(this,h,C(this,it,Sc).call(this,h,a)),m=[...d(this,yn).values()].find(x=>x!==h&&(c||!x.flies)&&C(this,it,bv).call(this,x,t,n,a)&&C(this,it,Mv).call(this,C(this,it,rf).call(this,x,x.stepped),h===void 0?r:C(this,it,rf).call(this,h,x.stepped))&&fv*Math.abs(mg(C(this,it,wc).call(this,x,C(this,it,Sc).call(this,x,a)))-mg(f))<HR);if(m!==void 0)return h!==void 0&&C(this,it,_g).call(this,h,e),m.units.push(e),d(this,di).set(e,m.id),m.id;if(h!==void 0&&pg(h.squares[h.squares.length-1],t)){if(h.units.length>1){let x={...h,id:`walk-${++_i(this,Ac)._}`,units:h.units.filter(b=>b!==e),points:[...h.points],squares:[...h.squares]};d(this,yn).set(x.id,x),x.units.forEach(b=>d(this,di).set(b,x.id)),h.units=[e]}return C(this,it,xg).call(this,h,n,s,a,o,c),h.id}return h!==void 0&&C(this,it,_g).call(this,h,e),C(this,it,vv).call(this,e,t,n,p,s,a,o,{flies:c,climbed:f})}at(e){let t=[],n=[];return d(this,yn).forEach(r=>{let s=C(this,it,fa).call(this,r,e);if(e>=vc(r.motion)){n.push(s),C(this,it,yg).call(this,r);return}t.push(s)}),{going:t,ended:n}}dropped(){return d(this,Ec).splice(0)}endsAt(e){let t=d(this,di).get(e),n=t===void 0?void 0:d(this,yn).get(t);return n===void 0?null:vc(n.motion)}nextEnd(){let e=null;return d(this,yn).forEach(t=>{let n=vc(t.motion);e=e===null?n:Math.min(e,n)}),e}endWhere(e,t){let n=[];return d(this,yn).forEach(r=>{e(r.units)&&(n.push(C(this,it,fa).call(this,r,Math.max(t,vc(r.motion)))),C(this,it,yg).call(this,r))}),n}endAll(e){let t=[...d(this,yn).values()].map(n=>C(this,it,fa).call(this,n,Math.max(e,vc(n.motion))));return d(this,yn).clear(),d(this,di).clear(),t}};Oo=new WeakMap,yn=new WeakMap,di=new WeakMap,Ec=new WeakMap,Ac=new WeakMap,it=new WeakSet,bv=l(function(e,t,n,r){let s=e.squares.length-1;return s>0&&r-e.stepped<=GR&&pg(e.squares[s-1],t)&&pg(e.squares[s],n)},"#justMade"),vv=l(function(e,t,n,r,s,a,o,{flies:c,climbed:u}){let h=`walk-${++_i(this,Ac)._}`,p={id:h,units:[e],from:t,points:[r],squares:[t],stepped:a,motion:gv(a,0,0,0,o),turned:null,flies:c,flown:0,climb:{from:u,at:0}};return d(this,yn).set(h,p),d(this,di).set(e,h),C(this,it,xg).call(this,p,n,s,a,o,c),h},"#setOff"),xg=l(function(e,t,n,r,s,a){let{u:o,v:c}=d(this,Oo),u=e.points[e.points.length-1],h=u.middle??u.at,{along:p,speed:f}=mv(e.motion,r),m=Math.max(0,Math.floor(p)-1),x=e.points.length>1?C(this,it,fa).call(this,e,r).facing:null,b=e.points.length-1,g=p-(b-1),_=C(this,it,Sc).call(this,e,r);e.points.length>1&&(e.climb={from:C(this,it,wc).call(this,e,_),at:e.flown+_}),e.flies=a,u.middle!==void 0&&g*Math.hypot(u.middle[0]-u.at[0],u.middle[1]-u.at[1])<.01&&(e.points[b]={at:u.middle,lift:0,middle:u.middle,...u.via===void 0?{}:{via:u.via}}),e.points.splice(0,m),e.squares.splice(0,m),e.flown+=m,e.points.push({at:[Uo(n.at[0],u.at[0],o),Uo(n.at[1],u.at[1],c)],lift:n.lift,...n.middle===void 0?{}:{middle:[Uo(n.middle[0],h[0],o),Uo(n.middle[1],h[1],c)]},...n.via===void 0?{}:{via:n.via}}),e.squares.push(t),e.stepped=r,e.motion=gv(r,p-m,f,e.points.length-1,s),e.turned=null,x!==null&&(e.turned={offset:Fo(0,x-C(this,it,fa).call(this,e,r).facing,1),at:r,over:s.step/2})},"#goOn"),_g=l(function(e,t){e.units=e.units.filter(n=>n!==t),d(this,di).delete(t),e.units.length===0&&(d(this,yn).delete(e.id),d(this,Ec).push(e.id))},"#leave"),Mv=l(function(e,t){let{u:n,v:r}=d(this,Oo);return Math.hypot(Uo(e.at[0],t.at[0],n)-t.at[0],Uo(e.at[1],t.at[1],r)-t.at[1])<VR},"#beside"),yg=l(function(e){d(this,yn).delete(e.id),e.units.forEach(t=>d(this,di).delete(t))},"#end"),rf=l(function(e,t){let{at:n,lift:r}=C(this,it,fa).call(this,e,t);return{at:n,lift:r}},"#drawn"),Sc=l(function(e,t){return Math.min(e.points.length-1,Math.max(0,mv(e.motion,t).along))},"#along"),wc=l(function(e,t){return e.flies?Math.max(0,Math.min(1,e.climb.from+(e.flown+t-e.climb.at)/pv,(e.points.length-1-t)/pv)):0},"#climbed"),bg=l(function(e,t,n){let r=e.points[t],s=e.points[t+1]??r,a=l(g=>g.middle??g.at,"middle");if(s.via===void 0||s.via.length===0)return{at:[r.at[0]+(s.at[0]-r.at[0])*n,r.at[1]+(s.at[1]-r.at[1])*n],way:s===r?null:Mc(a(r),a(s))};let[o,c]=a(s),u=[r.at,...s.via.map(([g,_])=>[o+g,c+_]),s.at],h=u.slice(1).map((g,_)=>Math.hypot(g[0]-u[_][0],g[1]-u[_][1])),p=h.reduce((g,_)=>g+_,0),f=Mc(a(r),a(s)),m=u.slice(1).map((g,_)=>Mc(u[_],g)??f??0),x=u.map((g,_)=>{let v=m[_-1],E=m[_];return v===void 0?E:E===void 0?v:Fo(v,E,.5)}),b=Math.min(1,Math.max(0,n))*p;for(let g=0;g<h.length;g++){let _=h[g],v=u[g],E=u[g+1];if(b<=_||g===h.length-1){let M=_===0?0:Math.min(1,b/_);return{at:[v[0]+(E[0]-v[0])*M,v[1]+(E[1]-v[1])*M],way:Fo(x[g],x[g+1],M)}}b-=_}return{at:[s.at[0],s.at[1]],way:Mc(a(r),a(s))}},"#stepAt"),fa=l(function(e,t){let{points:n,squares:r,turned:s}=e,a=n.length-1,o=C(this,it,Sc).call(this,e,t),c=Math.min(a-1,Math.floor(o)),u=o-c,h=n[c],p=n[c+1]??h,{at:f,way:m}=C(this,it,bg).call(this,e,c,u),x=l((M,R)=>M<0||M>=a?null:C(this,it,bg).call(this,e,M,R).way,"way"),b=l(M=>{let R=x(M,1),A=x(M+1,0);return R===null||A===null?null:Fo(0,A-R,1)},"turnAt"),g=m??0,_=Mc(h.middle??h.at,p.middle??p.at),v=(()=>{if(u>.75){let M=b(c);if(M!==null)return g+M*(u-.75)*2;if(c===a-1&&_!==null)return Fo(g,_,(u-.75)*4)}else if(u<.25){let M=b(c-1);if(M!==null)return g-M*(.5-u*2);if(c===0&&_!==null)return Fo(_,g,u*4)}return g})(),E=s!==null&&t-s.at<s.over?v+s.offset*(1-Math.max(0,t-s.at)/s.over):v;return{id:e.id,units:[...e.units],at:f,lift:h.lift+(p.lift-h.lift)*u,aloft:fv*mg(C(this,it,wc).call(this,e,o)),facing:E,from:e.from,before:r[a-1]??r[a],to:r[a]}},"#walker"),l(vg,"Walks");var gg=vg,Sv=gg;var WR=l(({kind:i,start:e,duration:t},n)=>{let r=t<=0?1:Math.min(1,Math.max(0,(n-e)/t));return i==="in"?r:1-r},"fadeAt"),ir,sf,Sg=class Sg{constructor(){V(this,ir,new Map);V(this,sf,0)}size(){return d(this,ir).size}add(e,t,n=500){let r=`fade-${++_i(this,sf)._}`;return d(this,ir).set(r,{id:r,kind:e,start:t,duration:n}),r}at(e){let t=[],n=[];return d(this,ir).forEach((r,s)=>{if(e>=r.start+r.duration){n.push(s),d(this,ir).delete(s);return}t.push({id:s,kind:r.kind,opacity:WR(r,e)})}),{going:t,ended:n}}end(e){d(this,ir).delete(e)}endAll(){let e=[...d(this,ir).keys()];return d(this,ir).clear(),e}};ir=new WeakMap,sf=new WeakMap,l(Sg,"Fades");var Mg=Sg,wv=Mg;var rr,Ag=class Ag{constructor(){V(this,rr,new Map)}size(){return d(this,rr).size}trail(e,t,n){let r=d(this,rr).get(e),[s,a]=r?.points??[];if(r===void 0||s===void 0||a===void 0||n-a.time>=1200){d(this,rr).set(e,{points:[{at:t,time:n},{at:t,time:n}]});return}s.at=t,s.time=n;let o=t[0]-a.at[0],c=t[1]-a.at[1],u=Math.hypot(o,c),h=Math.floor(u/.04),[p,f]=a.at,m=a.time;r.points.splice(1,0,...Array.from({length:h},(x,b)=>{let g=(h-b)*.04/u;return{at:[p+o*g,f+c*g],time:m+(n-m)*g}}))}at(e){let t=[],n=[];return d(this,rr).forEach((r,s)=>{if(r.points=r.points.filter(({time:a})=>e-a<1200),r.points.length===0){d(this,rr).delete(s),n.push(s);return}t.push({id:s,points:r.points.map(({at:a,time:o})=>({at:a,age:Math.max(0,e-o)}))})}),{going:t,gone:n}}endAll(){let e=[...d(this,rr).keys()];return d(this,rr).clear(),e}};rr=new WeakMap,l(Ag,"Wakes");var Eg=Ag,wg={start:.03,by:.17,over:.5},XR=.016,qR=.004,Ev=l(i=>{let[e]=i,t=[];if(e===void 0)return t;let n=i.map((a,o)=>{let c=i[o-1]??a,u=i[o+1]??a,h=c.at[0]-u.at[0],p=c.at[1]-u.at[1],f=Math.hypot(h,p);return f===0?null:[-p/f,h/f]}),r=i.reduce((a,o,c)=>{let u=i[c-1];return a.push(u===void 0?0:a[c-1]+Math.hypot(o.at[0]-u.at[0],o.at[1]-u.at[1])),a},[]),s=l((a,o)=>{let c=i[a],u=n[a],h=Math.min(1,c.age/1200);if(u==null)return null;let p=wg.start+wg.by*Math.min(1,r[a]/wg.over),f=XR*(1-h),m=[c.at[0]-e.at[0]+u[0]*p*o,c.at[1]-e.at[1]+u[1]*p*o];return[[m[0]-u[0]*f/2,m[1]-u[1]*f/2],[m[0]+u[0]*f/2,m[1]+u[1]*f/2]]},"edges");for(let a=0;a+1<i.length;a++)[1,-1].forEach(o=>{let c=s(a,o),u=s(a+1,o);if(c===null||u===null)return;let[h,p]=c,[f,m]=u;[h,f,p,p,f,m].forEach(([x,b])=>t.push(x,qR,b))});return t},"wakeShape"),Av=Eg;var Dg={reach:200,back:300,fade:600},Tv=l(i=>({reach:i.reach/2,back:i.back/2,fade:i.fade/2}),"quickerBattle"),Ng=.45,Tc=l(i=>i.start+i.pace.reach,"blowAt"),Tg=l(i=>Tc(i)+(i.won?Math.max(i.pace.back,i.pace.fade):i.pace.fade),"battleEnds"),Cg=l(i=>Math.min(1,Math.max(0,i)),"clamp"),YR=l(i=>i*i,"easeIn"),$R=l(i=>i*i*(3-2*i),"easeInOut"),ZR=l((i,e)=>{let{reach:t,back:n,fade:r}=i.pace,s=e-Tc(i),a=1-Cg(r<=0?1:s/r);return s<0?{reach:YR(Cg(t<=0?1:(e-i.start)/t)),attacker:1,fallen:1}:i.won?{reach:1-$R(Cg(n<=0?1:s/n)),attacker:1,fallen:a}:{reach:1,attacker:a,fallen:0}},"battleAt"),Rg=l((i,e)=>i.x===e.x&&i.y===e.y,"sameSquare"),JR=l((i,e)=>i.attacker===e.attacker||i.attacker===e.defender,"waitsFor"),nn,sr,af,ar,Ig,Lg,Cv,Ug=class Ug{constructor(){V(this,ar);V(this,nn,[]);V(this,sr,new Set);V(this,af,0)}size(){return d(this,nn).length}attacking(e){return d(this,nn).some(t=>t.attacker===e)}fighting(e){return d(this,nn).some(t=>t.attacker===e||t.defender===e)}awaitingBlow(e){return d(this,nn).find(t=>!d(this,sr).has(t.id)&&Rg(t.defenderSquare,e))??null}add(e,t,n,r=t){let s={...e,id:`battle-${++_i(this,af)._}`,start:C(this,ar,Ig).call(this,e,n,d(this,nn),Math.max(t,r)),notBefore:r,pace:n};return d(this,nn).push(s),s}at(e){let t=[],n=[],r=[],s=new Set;return d(this,nn).forEach(a=>{if(e>=Tc(a)&&!d(this,sr).has(a.id)&&(d(this,sr).add(a.id),n.push(a)),e>=Tg(a)){r.push(a);return}t.push(...C(this,ar,Cv).call(this,a,e,s))}),C(this,ar,Lg).call(this,r),{going:t,struck:n,ended:r}}endWhere(e,t){let n=d(this,nn).filter(e),r=d(this,nn).filter((a,o)=>n.includes(a)||!d(this,sr).has(a.id)&&n.some(c=>d(this,nn).indexOf(c)>o&&Rg(c.defenderSquare,a.defenderSquare))),s=r.filter(a=>!d(this,sr).has(a.id));return s.forEach(a=>d(this,sr).add(a.id)),C(this,ar,Lg).call(this,r),r.length>0&&d(this,nn).forEach((a,o)=>{a.start>t&&(a.start=C(this,ar,Ig).call(this,a,a.pace,d(this,nn).slice(0,o),Math.max(t,a.notBefore)))}),{struck:s,ended:r}}busyUntil(e){return d(this,nn).filter(({attacker:t})=>e.includes(t)).reduce((t,n)=>Math.max(t??0,Tg(n)),null)}endAll(e){return this.endWhere(()=>!0,e)}};nn=new WeakMap,sr=new WeakMap,af=new WeakMap,ar=new WeakSet,Ig=l(function(e,t,n,r){return n.reduce((s,a)=>JR(a,e)?Math.max(s,Tg(a)):Rg(a.defenderSquare,e.defenderSquare)?Math.max(s,Tc(a)-t.reach):s,r)},"#startOf"),Lg=l(function(e){e.length!==0&&(z(this,nn,d(this,nn).filter(t=>!e.includes(t))),e.forEach(t=>d(this,sr).delete(t.id)))},"#take"),Cv=l(function(e,t,n){let{reach:r,attacker:s,fallen:a}=ZR(e,t),{from:o,edge:c,fallsAt:u}=e,h=[],p=!n.has(e.attacker);return n.add(e.attacker),s>0&&p&&h.push({id:e.id,battle:e.id,unit:e.attacker,fallen:!1,at:[o.at[0]+(c[0]-o.at[0])*r,o.at[1]+(c[1]-o.at[1])*r],lift:o.lift*(1-r),facing:e.facing,opacity:s}),e.won&&t>=Tc(e)&&a>0&&h.push({id:`${e.id}-fallen`,battle:e.id,unit:e.defender,fallen:!0,at:[u.at[0],u.at[1]],lift:u.lift,facing:e.defenderFacing,opacity:a}),h},"#fighters"),l(Ug,"Battles");var Pg=Ug,Rv=Pg;var KR=1,jR=.04,QR=12,e2=l((i,e,t,n,r,{water:s=0,ceiling:a=KR}={})=>{let{from:o,direction:c}=R0(i,e,t,n),[u,h,p]=o,[f,m,x]=c;if(m>-1e-6)return null;let b=l(y=>[u+f*y,h+m*y,p+x*y],"at"),g=l(y=>{let[S,L,P]=b(y);return L-Math.max(s,r(S,P))},"above"),_=Math.max(0,(h-a)/-m),v=(h-s)/-m,E=jR/Math.max(1e-6,Math.hypot(f,x)),M=_;for(let y=_;;y=Math.min(v,y+E)){if(g(y)<=0){let S=M,L=y;for(let O=0;O<QR;O++){let X=(S+L)/2;g(X)>0?S=X:L=X}let[P,,D]=b(L);return[P,D]}if(y>=v)break;M=y}let[R,,A]=b(v);return[R,A]},"pickGround"),Pv=e2;var of=4,ys,Cc,pa,ma,Dn,Bo,bs,Ur,Rc,Pc,Ic,Di,lf,Iv,Og,Bg=class Bg{constructor(e,t,n,r,s){V(this,Di);V(this,ys);V(this,Cc);V(this,pa);V(this,ma);V(this,Dn);V(this,Bo);V(this,bs);V(this,Ur);V(this,Rc);V(this,Pc);V(this,Ic,l(e=>{let t=d(this,ys).getBoundingClientRect(),n=t.width>0?(e.clientX-t.left)/t.width:0,r=t.height>0?(e.clientY-t.top)/t.height:0;d(this,Pc).call(this,n*d(this,Dn),r*d(this,Bo))},"#click"));z(this,ys,e),z(this,pa,t),z(this,ma,n),z(this,Dn,t.period().u),z(this,Bo,r),z(this,Pc,s),z(this,Ur,document.createElement("canvas"));let{v:a}=t.period();z(this,bs,a),z(this,Rc,[[0,0],[-d(this,Dn),0],...a===null?[]:[[0,-a],[-d(this,Dn),-a]]]);let o=Math.max(1,Math.round(d(this,Dn)*of)),c=Math.max(1,Math.round(d(this,Bo)*of));[e,d(this,Ur)].forEach(u=>{u.width=o,u.height=c}),z(this,Cc,e.getContext("2d")),e.addEventListener("click",d(this,Ic))}dispose(){d(this,ys).removeEventListener("click",d(this,Ic))}redraw(){let e=d(this,Ur).getContext("2d");if(e===null)return;let t=d(this,ma).width(),n=d(this,ma).height(),r=[];e.fillStyle="#000000",e.fillRect(0,0,d(this,Ur).width,d(this,Ur).height);for(let s=0;s<n;s++)for(let a=0;a<t;a++){let o=d(this,ma).get(a,s),c=o.terrain?._??"Unknown";if(c==="Unknown")continue;e.fillStyle=Zs(c).colour,d(this,Rc).forEach(([p,f])=>{C(this,Di,Iv).call(this,e,a,s,p,f),e.fill()});let[u,h]=d(this,pa).centre(a,s);if(o.city)r.push([u,h,bc(o.city.player)[0],2.2]);else if((o.units??[]).length>0){let p=dg(o.units,null);p!==null&&r.push([u,h,bc(p.player)[0],1.4])}}r.forEach(([s,a,o,c])=>C(this,Di,Og).call(this,s,a).forEach(([u,h])=>{e.fillStyle="#000000",e.fillRect(u-c-.5,h-c-.5,c*2+1,c*2+1),e.fillStyle=o,e.fillRect(u-c,h-c,c*2,c*2)}))}show(e,t){let n=d(this,Cc);if(n===null)return;if(n.clearRect(0,0,d(this,ys).width,d(this,ys).height),n.drawImage(d(this,Ur),0,0),t!==null){let[h,p]=d(this,pa).centre(t.x,t.y);n.fillStyle="#ffffff",C(this,Di,Og).call(this,h,p).forEach(([f,m])=>n.fillRect(f-2,m-2,4,4))}if(e===null||e.length<3)return;n.strokeStyle="#ffffff",n.lineWidth=1;let r=d(this,bs),s=Math.min(...e.map(([h])=>h)),a=Math.min(...e.map(([,h])=>h)),o=-d(this,Dn)*Math.floor(s/d(this,Dn)),c=r===null?0:-r*Math.floor(a/r);(r===null?[0]:[-r,0,r]).forEach(h=>[-d(this,Dn),0,d(this,Dn)].forEach(p=>{n.beginPath(),e.forEach(([f,m],x)=>{let[b,g]=C(this,Di,lf).call(this,f+o+p,m+c+h);x===0?n.moveTo(b,g):n.lineTo(b,g)}),n.closePath(),n.stroke()}))}};ys=new WeakMap,Cc=new WeakMap,pa=new WeakMap,ma=new WeakMap,Dn=new WeakMap,Bo=new WeakMap,bs=new WeakMap,Ur=new WeakMap,Rc=new WeakMap,Pc=new WeakMap,Ic=new WeakMap,Di=new WeakSet,lf=l(function(e,t){return[e*of,t*of]},"#px"),Iv=l(function(e,t,n,r=0,s=0){e.beginPath(),d(this,pa).outline(t,n).forEach(([a,o],c)=>{let[u,h]=C(this,Di,lf).call(this,a+r,o+s);c===0?e.moveTo(u,h):e.lineTo(u,h)}),e.closePath()},"#outline"),Og=l(function(e,t){return(d(this,bs)===null?[0]:[-d(this,bs),0,d(this,bs)]).flatMap(r=>[-d(this,Dn),0,d(this,Dn)].map(s=>C(this,Di,lf).call(this,e+s,t+r)))},"#everywhere"),l(Bg,"Minimap3D");var Fg=Bg,Lv=Fg;var t2=l(i=>Object.entries(i.reduce((e,t)=>(e[t._]=(e[t._]??0)+t.value,e),{})).map(([e,t])=>({_:e,value:Math.floor(t)})).filter(({value:e})=>e>0),"netTileYields"),Dv=l(i=>{let e=t2(i).sort((n,r)=>n._.charCodeAt(0)-r._.charCodeAt(0)).flatMap(({_:n,value:r})=>Array.from({length:r},()=>n)),t=Math.min(6,Math.max(2,Math.ceil(e.length/2)));return{columns:t,icons:e.slice(0,t*2).map((n,r)=>({_:n,column:r%t,row:Math.floor(r/t)}))}},"tileYieldGrid");var Nv=l((i,e)=>(i.squareYieldsApplied?void 0:e?.squareYields?.find(({x:t,y:n})=>t===i.x&&n===i.y)?.yields)??i.yields??[],"squareYields"),Uv=l(i=>i.city??i.workedBy??null,"squareCity");var n2=.9,i2=l(i=>{let{columns:e,icons:t}=Dv(i),n=Math.min(e,t.length),r=Math.ceil(t.length/e);return{columns:e,slots:t.map(({_:s,column:a,row:o})=>({_:s,right:a-(n-1)/2,up:(r-1)/2-o}))}},"yieldSlots"),r2=l((i,e)=>n2*e/Math.hypot(i,2),"yieldIconSize"),Fv=l((i,e)=>{let[t,n]=i.centre(0,0);return Math.min(...e.edgeDirections().map(r=>{let[s,a]=e.offset(r,0,0),[o,c]=i.centre(s,a);return Math.hypot(o-t,c-n)}))},"innerOf"),Ov=l(({at:i,yields:e},t)=>{let{columns:n,slots:r}=i2(e);return r.length===0?null:{at:i,size:r2(n,t),slots:r}},"laidYields"),Bv=l(i=>{let e=[...i],t=e.reduce((a,{slots:o})=>a+o.length,0),n={count:t,anchors:new Float32Array(t*3),slots:new Float32Array(t*2),sizes:new Float32Array(t),cells:new Float32Array(t),names:[]},r=new Map,s=0;return e.forEach(({at:a,size:o,slots:c})=>{c.forEach(({_:u,right:h,up:p})=>{let f=r.get(u);f===void 0&&(f=n.names.push(u)-1,r.set(u,f)),n.anchors[s*3]=a[0],n.anchors[s*3+1]=a[1],n.anchors[s*3+2]=a[2],n.slots[s*2]=h,n.slots[s*2+1]=p,n.sizes[s]=o,n.cells[s]=f,s++})}),n},"yieldMesh");var s2=10,a2=4e3,zv=l(i=>i-Math.PI*2*Math.round(i/(Math.PI*2)),"shortTurn"),o2=350,l2=2e3,c2=8,Gv=l(i=>({...i,...i.hitPoints?{hitPoints:{...i.hitPoints}}:{},...i.defence?{defence:{...i.defence}}:{},...i.improvements?{improvements:[...i.improvements]}:{}}),"keptUnit"),u2=l(i=>i&&{...i,...i.growth?{growth:{...i.growth}}:{}},"keptCity"),h2=500,d2=.25,f2=400,Xt,Bc,kc,Xe,At,_a,zc,Gc,pt,Rt,Nn,Go,Vc,ya,Es,Vo,Hc,Wc,jn,Ho,fi,rn,Ui,ba,va,Un,Fr,pi,As,Wo,Xo,Zt,Qn,Ts,or,Or,lr,Br,Xc,Cs,Rs,ei,Ma,qo,mi,ti,gi,cr,ur,qc,Yc,$c,hr,Ps,kr,ni,Yo,$o,zr,Gr,Sa,Is,wa,Zo,Fi,Zc,Oi,Ls,Jc,Ea,dr,Aa,Ta,Kc,jc,Jo,Qc,Ko,eu,jo,Qo,Ca,N,zg,Vv,Hv,ko,Gg,vs,Wv,Xv,zo,cf,Vg,Hg,Ms,Wg,uf,Xg,Lc,qg,Yg,qv,Yv,hf,Dc,$g,$v,df,Zv,Jv,Kv,ff,jv,Zg,Qv,ga,pf,eM,tM,nM,mf,xa,Nc,iM,rM,sM,Jg,Ss,aM,Kg,Uc,ws,Fc,oM,lM,jg,Ni,cM,uM,hM,dM,Oc,Qg,fM,pM,ex,kt,mM,gM,tx,nx=class nx{constructor(e,t=fb){V(this,N);V(this,Xt);V(this,Bc);V(this,kc,[]);V(this,Xe);V(this,At);V(this,_a,null);V(this,zc,0);V(this,Gc,"");V(this,pt);V(this,Rt,null);V(this,Nn,null);V(this,Go);V(this,Vc);V(this,ya);V(this,Es,null);V(this,Vo,null);V(this,Hc);V(this,Wc,!1);V(this,jn);V(this,Ho);V(this,fi,new Map);V(this,rn);V(this,Ui,new Map);V(this,ba,new Map);V(this,va,new Map);V(this,Un,new Map);V(this,Fr,new Set);V(this,pi,new Map);V(this,As,0);V(this,Wo,new Map);V(this,Xo,new Map);V(this,Zt,new Rv);V(this,Qn,new wv);V(this,Ts,new Av);V(this,or,new Map);V(this,Or,new Map);V(this,lr,new Map);V(this,Br,new Map);V(this,Xc,!1);V(this,Cs,new Map);V(this,Rs,null);V(this,ei,new Map);V(this,Ma,new Map);V(this,qo,new Set);V(this,mi,new Set);V(this,ti);V(this,gi,null);V(this,cr,null);V(this,ur,null);V(this,qc,l(()=>{C(this,N,ga).call(this)&&z(this,ur,null),C(this,N,pf).call(this)},"#pressed"));V(this,Yc,l(e=>{let t=e.target;e.ctrlKey||e.metaKey||e.altKey||["Shift","Control","Alt","Meta","CapsLock"].includes(e.key)||t!==null&&(t.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(t.tagName))||C(this,N,pf).call(this)},"#keyed"));V(this,$c);V(this,hr,null);V(this,Ps,null);V(this,kr);V(this,ni,l(()=>{let e=d(this,Ps);e!==null&&(e.timer!==null&&window.clearTimeout(e.timer),z(this,Ps,null),document.removeEventListener("keydown",d(this,ni),!0),e.open&&d(this,jn).endTooltip(d(this,Xt)))},"#endHover"));V(this,Yo,null);V(this,$o,!0);V(this,zr,new Map);V(this,Gr,null);V(this,Sa,new Map);V(this,Is,new Map);V(this,wa,[]);V(this,Zo,0);V(this,Fi,null);V(this,Zc,null);V(this,Oi,!0);V(this,Ls);V(this,Jc,l(()=>{},"#stopUnitSize"));V(this,Ea,!1);V(this,dr,!0);V(this,Aa,!1);V(this,Ta,new Map);V(this,Kc);V(this,jc,l(()=>{},"#stopArtChanged"));V(this,Jo,!1);V(this,Qc);V(this,Ko);V(this,eu,"");V(this,jo,l(()=>C(this,N,tx).call(this),"#resizeHandler"));V(this,Qo,null);V(this,Ca,!1);z(this,Xt,e.mapCanvas),z(this,Bc,e.coveredBy),z(this,Qc,e.art),z(this,Ho,{cityName:e.cityName,unitStatus:e.unitStatus}),z(this,Ls,e.unitSize?.get()??1),z(this,Ko,e.art.id()),this.world=e.world,z(this,Xe,new jb(e.world)),d(this,Xe).keepCities((r,s)=>{let a=`${r},${s}`;for(let o of d(this,ei).values())if(o.square===a)return o.city}),z(this,rn,new Sv(d(this,Xe).layout.period())),z(this,ti,e.walks),z(this,Kc,Fv(d(this,Xe).layout,e.world.topology())),z(this,wa,e.world.tiles()),z(this,Zo,d(this,wa).length),z(this,Vc,e.cameraDistance),z(this,Hc,e.lockVerticalEdges);let n=e.cameraDistance.get();z(this,pt,C(this,N,Uc).call(this,{...jy(d(this,Xe).layout.centre(0,0)),...n===null?{}:{distance:n}})),z(this,ya,d(this,pt).distance),this.portal=new _x(e,{centre:l(()=>C(this,N,aM).call(this),"centre"),centreOn:l((r,s)=>C(this,N,tM).call(this,r,s),"centreOn"),changed:l(()=>C(this,N,kt).call(this),"changed"),visible:l((r,s,a)=>C(this,N,xa).call(this,r,s,a),"visible")}),z(this,At,t(e.mapCanvas,{period:d(this,Xe).layout.period(),ground:d(this,Xe).ground(),yieldIcon:e.yieldIcon})),e.minimapCanvas!==null&&z(this,Yo,new Lv(e.minimapCanvas,d(this,Xe).layout,e.world,d(this,Xe).extentV(),(r,s)=>{z(this,ur,null),C(this,N,Fc).call(this,{...d(this,Rt)?.to??d(this,pt),focus:[r,s]})})),e.debug&&e.mapCanvas.parentElement&&(z(this,_a,C(this,N,mM).call(this,e.mapCanvas.parentElement)),window.civMap3DView=this),d(this,Xe).queueAll(...C(this,N,Ss).call(this)),C(this,N,Oc).call(this),this.portal.on("activate-unit",r=>e.activateUnit(r)),z(this,jn,e.squares),z(this,kr,e.playerId),z(this,$c,e.transport),z(this,Go,new dv(e.mapCanvas,{orbit:l(()=>d(this,pt),"orbit"),lookHeight:l(()=>d(this,Nn)??0,"lookHeight"),setOrbit:l(r=>this.setOrbit(r),"setOrbit")},{click:l((r,s)=>C(this,N,iM).call(this,r,s),"click"),menu:l((r,s,a,o,c)=>C(this,N,rM).call(this,r,s,a,o,c),"menu"),menuOnRightClick:l(()=>d(this,jn).menuOnRightClick(),"menuOnRightClick"),menuOpen:l(()=>d(this,jn).menuOpen(),"menuOpen"),hover:l(r=>C(this,N,sM).call(this,r),"hover")})),window.addEventListener("resize",d(this,jo)),document.addEventListener("keydown",d(this,Yc),!0),e.mapCanvas.addEventListener("pointerdown",d(this,qc),!0),typeof ResizeObserver<"u"&&e.mapCanvas.parentElement&&(z(this,Qo,new ResizeObserver(d(this,jo))),d(this,Qo).observe(e.mapCanvas.parentElement)),C(this,N,tx).call(this),C(this,N,kt).call(this),z(this,Jc,e.unitSize?.onChange(()=>{let r=e.unitSize?.get()??1;r!==d(this,Ls)&&!d(this,Ca)&&(z(this,Ls,r),C(this,N,Oc).call(this),C(this,N,kt).call(this))})??(()=>{})),z(this,jc,e.artChanged?.(()=>{d(this,Ca)||(z(this,dr,!0),C(this,N,kt).call(this))})??(()=>{}))}land(){return d(this,Xe)}orbit(){return d(this,pt)}moving(){return d(this,Rt)!==null||d(this,Go).moving()}setOrbit(e){d(this,ni).call(this),z(this,Rt,null),z(this,pt,C(this,N,Uc).call(this,e)),C(this,N,kt).call(this)}activeUnit(){return{unit:d(this,Fi),pendingTile:d(this,Zc)}}centre(e){this.portal.setCenter(e.x,e.y)}turnBy(e){let t=d(this,Rt)?.to??d(this,pt);C(this,N,Fc).call(this,{...t,yaw:t.yaw+e*T0},C(this,N,zg).call(this)+e*T0)}heading(){return{turn:(d(this,Rt)?.to??d(this,pt)).yaw,directions:yx(d(this,Xe).layout,this.world.topology())}}faceNorth(){C(this,N,Fc).call(this,{...d(this,Rt)?.to??d(this,pt),yaw:0},zv(-d(this,pt).yaw))}debugViewModes(){return[]}dispose(){C(this,N,ex).call(this,!0),z(this,Ca,!0),d(this,rn).endAll(0),d(this,Zt).endAll(0),d(this,Qn).endAll(),d(this,lr).clear(),d(this,Br).clear(),d(this,Cs).clear(),z(this,Rs,null),d(this,or).clear(),d(this,Or).clear(),d(this,ei).clear(),d(this,Ma).clear(),d(this,mi).clear(),d(this,Un).clear(),d(this,Fr).clear(),d(this,pi).clear(),document.removeEventListener("keydown",d(this,Yc),!0),d(this,Xt).removeEventListener("pointerdown",d(this,qc),!0),d(this,Jc).call(this),d(this,jc).call(this),d(this,ni).call(this),d(this,Go).dispose(),d(this,Yo)?.dispose(),window.removeEventListener("resize",d(this,jo)),d(this,Qo)?.disconnect(),d(this,Gr)!==null&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(d(this,Gr)),z(this,Gr,null),d(this,_a)?.remove(),d(this,At).dispose();let e=window;e.civMap3DView===this&&delete e.civMap3DView}endPicking(){let e=d(this,hr);e!==null&&(z(this,hr,null),d(this,Xt).classList.remove("picking-tile"),e.window?.close())}flush(){C(this,N,jg).call(this),C(this,N,kt).call(this)}mapEvent(e){if(e.kind==="moved"){C(this,N,Hv).call(this,e.unit,e.from,e.to),C(this,N,mf).call(this,e.unit.id,e.from,e.to);return}C(this,N,mf).call(this,e.attacker.id,e.attacker.tile,e.defender.tile),C(this,N,mf).call(this,e.defender.id,e.defender.tile,e.attacker.tile),C(this,N,Vv).call(this,e)}measureCovered(){let e=d(this,Xt).getBoundingClientRect();z(this,kc,d(this,Bc).map(t=>{let n=t.getBoundingClientRect(),r=t.parentElement?.getBoundingClientRect()??n;return{left:Math.max(n.left,r.left,e.left)-e.left,top:Math.max(n.top,r.top,e.top)-e.top,right:Math.min(n.right,r.right,e.right)-e.left,bottom:Math.min(n.bottom,r.bottom,e.bottom)-e.top}}).filter(({left:t,top:n,right:r,bottom:s})=>r>t&&s>n))}pickTile(e,t,n){this.endPicking();let r={accept:e,onPick:t,window:null};z(this,hr,r),d(this,Xt).classList.add("picking-tile"),r.window=d(this,jn).prompt(n,()=>{d(this,hr)===r&&(z(this,hr,null),d(this,Xt).classList.remove("picking-tile"))})}picking(){return d(this,hr)!==null}queueTile(e){let t=`${e.x},${e.y}`;d(this,Sa).set(t,e),d(this,Wo).set(t,++_i(this,As)._)}redrawArt(){let e=d(this,Qc).id();return e===d(this,Ko)?"unchanged":(z(this,Ko,e),z(this,dr,!0),"redrawn")}releaseTiles(){let e=d(this,Xc)&&C(this,N,df).call(this);e&&d(this,Sa).size>0&&d(this,Rs)===null&&z(this,Rs,new Set([...d(this,Or).keys(),...d(this,Ui).keys()])),d(this,Sa).forEach((t,n)=>{let r=d(this,Wo).get(n)??0;e&&!d(this,Cs).has(n)&&d(this,Cs).set(n,d(this,or).get(n)??{units:[],shown:null,ringed:!1,inCity:!1}),d(this,Is).set(n,t),d(this,Xo).set(n,r),d(this,ei).forEach(s=>{s.square===n&&r>s.after&&(s.patched=!0)})}),d(this,Sa).clear(),d(this,Wo).clear(),d(this,Is).size>0&&C(this,N,kt).call(this)}setActiveUnit(e,t){let n=d(this,Fi)?.tile;if(z(this,Fi,e),z(this,Zc,t??null),C(this,N,ga).call(this)&&C(this,N,eM).call(this)&&C(this,N,pf).call(this),C(this,N,ga).call(this)){C(this,N,kt).call(this);return}z(this,ur,null);let r=d(this,cr);z(this,gi,e?.id??null),z(this,cr,e?.tile??null),[n,r,e?.tile].forEach(s=>{s&&C(this,N,Ni).call(this,s.x,s.y)}),C(this,N,kt).call(this)}setWaiting(e){z(this,Jo,e),e&&d(this,ni).call(this)}showActiveUnit(e){d(this,Oi)||(z(this,Oi,!0),d(this,Xe).showTowns(!0,...C(this,N,Ss).call(this)),C(this,N,Oc).call(this),C(this,N,kt).call(this))}shown(){return{units:d(this,Oi),yields:d(this,Ea),waiting:d(this,Jo)}}tilesPending(){return d(this,Is).size}toggleUnits(){z(this,Oi,!d(this,Oi)),d(this,Xe).showTowns(d(this,Oi),...C(this,N,Ss).call(this)),C(this,N,Oc).call(this),C(this,N,kt).call(this)}toggleYields(){z(this,Ea,!d(this,Ea)),z(this,dr,!0),C(this,N,kt).call(this)}zoomBy(e){d(this,ni).call(this),z(this,pt,vo(d(this,pt),e)),d(this,Rt)!==null&&(d(this,Rt).from=vo(d(this,Rt).from,e),d(this,Rt).to=vo(d(this,Rt).to,e)),C(this,N,kt).call(this)}};Xt=new WeakMap,Bc=new WeakMap,kc=new WeakMap,Xe=new WeakMap,At=new WeakMap,_a=new WeakMap,zc=new WeakMap,Gc=new WeakMap,pt=new WeakMap,Rt=new WeakMap,Nn=new WeakMap,Go=new WeakMap,Vc=new WeakMap,ya=new WeakMap,Es=new WeakMap,Vo=new WeakMap,Hc=new WeakMap,Wc=new WeakMap,jn=new WeakMap,Ho=new WeakMap,fi=new WeakMap,rn=new WeakMap,Ui=new WeakMap,ba=new WeakMap,va=new WeakMap,Un=new WeakMap,Fr=new WeakMap,pi=new WeakMap,As=new WeakMap,Wo=new WeakMap,Xo=new WeakMap,Zt=new WeakMap,Qn=new WeakMap,Ts=new WeakMap,or=new WeakMap,Or=new WeakMap,lr=new WeakMap,Br=new WeakMap,Xc=new WeakMap,Cs=new WeakMap,Rs=new WeakMap,ei=new WeakMap,Ma=new WeakMap,qo=new WeakMap,mi=new WeakMap,ti=new WeakMap,gi=new WeakMap,cr=new WeakMap,ur=new WeakMap,qc=new WeakMap,Yc=new WeakMap,$c=new WeakMap,hr=new WeakMap,Ps=new WeakMap,kr=new WeakMap,ni=new WeakMap,Yo=new WeakMap,$o=new WeakMap,zr=new WeakMap,Gr=new WeakMap,Sa=new WeakMap,Is=new WeakMap,wa=new WeakMap,Zo=new WeakMap,Fi=new WeakMap,Zc=new WeakMap,Oi=new WeakMap,Ls=new WeakMap,Jc=new WeakMap,Ea=new WeakMap,dr=new WeakMap,Aa=new WeakMap,Ta=new WeakMap,Kc=new WeakMap,jc=new WeakMap,Jo=new WeakMap,Qc=new WeakMap,Ko=new WeakMap,eu=new WeakMap,jo=new WeakMap,Qo=new WeakMap,Ca=new WeakMap,N=new WeakSet,zg=l(function(){let e=d(this,Rt);return e===null?0:e.turn*(1-e.drawn)},"#turnLeft"),Vv=l(function({attacker:e,defender:t,winner:n}){let r=d(this,ti)?.speed()??"normal",s=performance.now();if(typeof requestAnimationFrame!="function"||Ii()||r==="off"||e.player!==d(this,kr)&&t.player!==d(this,kr)&&!(d(this,ti)?.rivals()??!0)||!C(this,N,xa).call(this,e.tile.x,e.tile.y,-.5)&&!C(this,N,xa).call(this,t.tile.x,t.tile.y,-.5))return;let a=this.world.get(e.tile.x,e.tile.y).units.find(({id:y})=>y===e.id),o=`${t.tile.x},${t.tile.y}`,c=this.world.get(t.tile.x,t.tile.y),u=[...d(this,ei).values()].filter(({square:y,patched:S})=>y===o&&!S).at(-1),h=u===void 0?c.units.filter(({id:y})=>!d(this,mi).has(y)).map(Gv):u.units.filter(({id:y})=>!(u.won&&y===u.defender));if(d(this,mi).has(e.id)||!h.some(({id:y})=>y===t.id))return;let p=d(this,Zt).busyUntil([e.id,t.id]);p!==null&&p-s>l2&&C(this,N,Dc).call(this,d(this,Zt).endWhere(y=>y.attacker===e.id||y.attacker===t.id,s)),C(this,N,Gg).call(this,e.id);let[f,m]=d(this,Xe).layout.centre(e.tile.x,e.tile.y),[x,b]=d(this,Xe).layout.centre(t.tile.x,t.tile.y),{u:g,v:_}=d(this,Xe).layout.period(),v=l((y,S)=>S===null?y:y-S*Math.round(y/S),"short"),E=v(x-f,g),M=v(b-m,_),R=`${e.tile.x},${e.tile.y}`,A=d(this,Zt).add({attacker:e.id,defender:t.id,attackerSquare:e.tile,defenderSquare:t.tile,won:n==="attacker",from:C(this,N,ko).call(this,e.tile),edge:[f+E*Ng,m+M*Ng],fallsAt:C(this,N,ko).call(this,t.tile),facing:d(this,fi).get(e.id)??Math.atan2(E,M),defenderFacing:d(this,fi).get(t.id)??Math.atan2(-E,-M)},s,r==="fast"?Tv(Dg):Dg,d(this,rn).endsAt(e.id)??s);d(this,ei).set(A.id,{square:o,city:u?.city??u2(c.city),units:h,after:d(this,As),won:n==="attacker",defender:t.id,patched:!1}),a!==void 0&&d(this,Ui).set(e.id,a),[e.id,t.id].forEach(y=>d(this,pi).set(y,{squares:[R,o],after:d(this,As)})),C(this,N,Ni).call(this,e.tile.x,e.tile.y),C(this,N,Ni).call(this,t.tile.x,t.tile.y),C(this,N,kt).call(this)},"#fight"),Hv=l(function(e,t,n){let r=d(this,ti)?.speed()??"normal";if(e.id===d(this,gi)&&z(this,cr,n),typeof requestAnimationFrame!="function"||Ii()||r==="off")return;if(e.player!==d(this,kr)&&d(this,Zt).attacking(e.id)){d(this,pi).set(e.id,{squares:[`${t.x},${t.y}`,`${n.x},${n.y}`],after:d(this,As)});return}C(this,N,Dc).call(this,d(this,Zt).endWhere(({attacker:p,defender:f})=>p===e.id||f===e.id,performance.now()));let s=d(this,rn).walking(e.id),a=this.world.get(t.x,t.y).units.find(({id:p})=>p===e.id)??(C(this,N,vs).call(this,e.id)?d(this,Ui).get(e.id):void 0),o=e.player===d(this,kr);if(a===void 0||!o&&!s&&(!(d(this,ti)?.rivals()??!0)||!C(this,N,xa).call(this,t.x,t.y,-.5)&&!C(this,N,xa).call(this,n.x,n.y,-.5)))return;let c=o?xv:_v;d(this,Ui).set(e.id,a),d(this,pi).set(e.id,{squares:[`${t.x},${t.y}`,`${n.x},${n.y}`],after:d(this,As)}),C(this,N,Gg).call(this,e.id);let u=Pd(Jl(a._,a.__??[])),h=u?void 0:d(this,Xe).roadPath(t.x,t.y,n.x,n.y)?.slice(1,-1);d(this,rn).step(e.id,t,n,C(this,N,ko).call(this,t),{...C(this,N,ko).call(this,n),...h===void 0?{}:{via:h}},performance.now(),r==="fast"?yv(c):c,u),C(this,N,kt).call(this)},"#walk"),ko=l(function({x:e,y:t},n=!!this.world.get(e,t).city){let[r,s]=d(this,Xe).layout.centre(e,t),a=Math.max(0,d(this,Xe).surfaceAt(r,s)),o=[r,s+(n?ra:0)];return{at:o,lift:a-Math.max(0,d(this,Xe).surfaceAt(...o)),middle:[r,s]}},"#standing"),Gg=l(function(e){d(this,Fr).delete(e)&&d(this,Un).forEach((t,n)=>{let r=t.units.filter(s=>s!==e);if(r.length!==t.units.length){if(r.length===0){d(this,Un).delete(n),C(this,N,Ms).call(this,n);return}d(this,Un).set(n,{...t,units:r})}})},"#stepsOn"),vs=l(function(e){return d(this,rn).walking(e)||d(this,Fr).has(e)||d(this,Zt).attacking(e)||d(this,mi).has(e)},"#leftOff"),Wv=l(function(e){if(d(this,rn).dropped().forEach(r=>C(this,N,Ms).call(this,r)),d(this,Un).forEach(r=>C(this,N,zo).call(this,r)),d(this,rn).size()===0)return;if(Ii()||(d(this,ti)?.speed()??"normal")==="off"){C(this,N,Lc).call(this,d(this,rn).endAll(e));return}let{going:t,ended:n}=d(this,rn).at(e);C(this,N,Lc).call(this,n),t.forEach(r=>{C(this,N,zo).call(this,r)!==null&&r.units.some(a=>{let o=d(this,Ui).get(a);return o!==void 0&&Jl(o._,o.__??[]).shape==="ship"})&&d(this,Ts).trail(r.id,r.at,e)})},"#placeWalkers"),Xv=l(function(e){if(d(this,Ts).size()===0)return;if(Ii()||(d(this,ti)?.speed()??"normal")==="off"){d(this,Ts).endAll().forEach(r=>d(this,At).wake(r,null));return}let{going:t,gone:n}=d(this,Ts).at(e);n.forEach(r=>d(this,At).wake(r,null)),t.forEach(({id:r,points:s})=>{let[a]=s;if(a===void 0){d(this,At).wake(r,null);return}let[o,c]=C(this,N,Vg).call(this,a.at);d(this,At).wake(r,[o,0,c],Ev(s))})},"#placeWakes"),zo=l(function(e){let t=C(this,N,Wg).call(this,e.units);return C(this,N,cf).call(this,e,t),t},"#drawWalker"),cf=l(function({id:e,at:t,lift:n,facing:r,aloft:s=0},a,o=1){let c=a===null?null:JSON.stringify(a);c!==(d(this,va).get(e)??null)&&(d(this,At).setWalker(e,a),c===null?d(this,va).delete(e):d(this,va).set(e,c)),a!==null&&(d(this,At).placeWalker(e,C(this,N,Hg).call(this,t,n),r,s),d(this,At).fadeWalker(e,o))},"#drawFigure"),Vg=l(function(e){let{u:t,v:n}=d(this,Xe).layout.period(),r=l((s,a)=>a===null?s:(s%a+a)%a,"within");return[r(e[0],t),r(e[1],n)]},"#wrapped"),Hg=l(function(e,t){let[n,r]=C(this,N,Vg).call(this,e);return[n,Math.max(0,d(this,Xe).surfaceAt(n,r))+t,r]},"#onLand"),Ms=l(function(e){d(this,va).delete(e)&&d(this,At).setWalker(e,null)},"#takeAway"),Wg=l(function(e){let t=e.flatMap(n=>{let r=d(this,Ui).get(n);return r===void 0?[]:[r]});return C(this,N,uf).call(this,t)},"#walkerMarker"),uf=l(function(e,t=d(this,gi)){return fg({city:null,units:e},t,d(this,Oi),d(this,Ho),()=>0,d(this,Ls))},"#unitsMarker"),Xg=l(function({units:e}){return e.some(t=>d(this,pi).has(t))},"#awaitsPatch"),Lc=l(function(e){let t=new Set;e.forEach(n=>{let r={...n,units:n.units.filter(s=>!d(this,Zt).attacking(s))};if(r.units.length>0&&C(this,N,Xg).call(this,r)){d(this,Un).set(r.id,r),r.units.forEach(s=>d(this,Fr).add(s)),C(this,N,zo).call(this,r);return}C(this,N,Ms).call(this,n.id),n.units.forEach(s=>d(this,Fr).delete(s)),C(this,N,qg).call(this,n.units,t)}),C(this,N,Yg).call(this,t)},"#walksEnded"),qg=l(function(e,t){e.forEach(n=>{C(this,N,vs).call(this,n)&&!d(this,mi).has(n)||(d(this,ba).get(n)?.forEach(r=>t.add(r)),d(this,ba).delete(n),d(this,Ui).delete(n))})},"#release"),Yg=l(function(e){let t=d(this,gi);t!==null&&t!==(d(this,Fi)?.id??null)&&!d(this,rn).walking(t)&&!d(this,Zt).attacking(t)&&C(this,N,Qv).call(this,e),e.forEach(n=>{let[r,s]=n.split(",").map(Number);C(this,N,Ni).call(this,r,s)})},"#released"),qv=l(function(e){let t=new Set;if(d(this,Zt).size()===0){C(this,N,hf).call(this,t);return}if(Ii()||(d(this,ti)?.speed()??"normal")==="off"){C(this,N,Dc).call(this,d(this,Zt).endAll(e)),C(this,N,hf).call(this,t);return}let{going:n,struck:r,ended:s}=d(this,Zt).at(e);r.forEach(a=>C(this,N,$g).call(this,a,!0)),n.forEach(a=>{if(!a.fallen&&d(this,rn).walking(a.unit)){C(this,N,Ms).call(this,a.id);return}C(this,N,jv).call(this,a)&&t.add(C(this,N,Yv).call(this,a))}),C(this,N,Zg).call(this,s),C(this,N,hf).call(this,t)},"#placeBattles"),Yv=l(function({battle:e,at:t,lift:n,opacity:r}){let s=`${e}-puff`;return d(this,qo).add(s),d(this,At).puff(s,C(this,N,Hg).call(this,t,n),1-r),s},"#puff"),hf=l(function(e){d(this,qo).forEach(t=>{e.has(t)||(d(this,qo).delete(t),d(this,At).puff(t,null))})},"#puffsOver"),Dc=l(function({struck:e,ended:t}){e.forEach(n=>C(this,N,$g).call(this,n,!1)),C(this,N,Zg).call(this,t)},"#battlesOver"),$g=l(function(e,t){let{square:n,units:r}=d(this,ei).get(e.id)??{square:"",units:[]},{x:s,y:a}=e.defenderSquare,o=[...d(this,ei).entries()].find(([p,f])=>p!==e.id&&f.square===n)?.[1],c=new Set((o?.units??this.world.get(s,a).units).map(({id:p})=>p)),u=e.won?e.defender:e.attacker,h=r.filter(({id:p})=>e.won&&p===e.defender||!c.has(p)&&!C(this,N,vs).call(this,p));d(this,ei).delete(e.id),d(this,Xe).changed([[s,a]],...C(this,N,Ss).call(this)),d(this,pi).has(u)&&d(this,mi).add(u),t&&e.won&&h.length>0&&d(this,Ma).set(e.id,h),C(this,N,Ni).call(this,s,a)},"#blow"),$v=l(function(e,t,{shown:n,ringed:r,inCity:s}){if((d(this,or).get(e)?.units??[]).forEach(({id:a})=>{d(this,Or).get(a)===e&&d(this,Or).delete(a)}),t.length===0?d(this,or).delete(e):d(this,or).set(e,{units:t.map(Gv),shown:n,ringed:r,inCity:s}),t.forEach(({id:a})=>d(this,Or).set(a,e)),d(this,lr).size>0){let a=[...d(this,lr).entries()].filter(([,o])=>o.units.some(c=>t.some(({id:u})=>u===c.id))).map(([o])=>o);a.forEach(o=>d(this,Qn).end(o)),C(this,N,ff).call(this,a)}},"#drawnOn"),df=l(function(){return typeof requestAnimationFrame=="function"&&!Ii()&&(d(this,ti)?.speed()??"normal")!=="off"},"#fadesShown"),Zv=l(function(e){return d(this,Or).has(e)||C(this,N,vs).call(this,e)},"#drawnAnywhere"),Jv=l(function(e,t){let n=[],r=[];if(e.forEach((c,u)=>{let h=c.units.filter(({id:f})=>!C(this,N,Zv).call(this,f)),p=d(this,or).get(u)?.shown??null;c.shown!==null&&h.some(({id:f})=>f===c.shown)&&n.push([u,c,h]),c.units.length===0&&p!==null&&!t.has(p)&&r.push([u,p])}),n.length+r.length===0||n.length+r.length>c2)return;let s=l(([c])=>{let[u,h]=c.split(",").map(Number);return C(this,N,xa).call(this,u,h,0)},"onScreen"),a=performance.now(),o=(d(this,ti)?.speed()??"normal")==="fast"?500/2:500;n.filter(s).forEach(([c,u,h])=>{let[p,f]=c.split(",").map(Number);d(this,lr).set(d(this,Qn).add("out",a,o),{units:[...h.filter(({id:m})=>m===u.shown),...h.filter(({id:m})=>m!==u.shown)],shown:u.ringed?u.shown:null,at:C(this,N,ko).call(this,{x:p,y:f},u.inCity),facing:u.shown===null?0:d(this,fi).get(u.shown)??0})}),r.filter(s).forEach(([c,u])=>{d(this,Br).set(d(this,Qn).add("in",a,o),{key:c,unit:u}),d(this,At).fadeMarker(c,0)}),C(this,N,kt).call(this)},"#fadeChanged"),Kv=l(function(e){if(d(this,Qn).size()===0)return;if(!C(this,N,df).call(this)){C(this,N,ff).call(this,d(this,Qn).endAll());return}let{going:t,ended:n}=d(this,Qn).at(e),r=[];t.forEach(({id:s,opacity:a})=>{let o=d(this,lr).get(s),c=d(this,Br).get(s);if(o!==void 0){let u=C(this,N,uf).call(this,o.units,o.shown);if(u===null){d(this,Qn).end(s),r.push(s);return}C(this,N,cf).call(this,{id:s,at:[o.at.at[0],o.at.at[1]],lift:o.at.lift,facing:o.facing},u,a);return}if(c!==void 0){if((d(this,or).get(c.key)?.shown??null)!==c.unit){d(this,Qn).end(s),r.push(s);return}d(this,At).fadeMarker(c.key,a)}}),C(this,N,ff).call(this,[...n,...r])},"#placeFades"),ff=l(function(e){e.forEach(t=>{let n=d(this,Br).get(t);d(this,lr).delete(t)&&C(this,N,Ms).call(this,t),n!==void 0&&(d(this,Br).delete(t),[...d(this,Br).values()].some(({key:r})=>r===n.key)||d(this,At).fadeMarker(n.key,1))})},"#fadesOver"),jv=l(function(e){let t=d(this,Ma).get(e.battle);if(e.fallen&&t===void 0)return!1;let n=e.fallen?C(this,N,uf).call(this,t):C(this,N,Wg).call(this,[e.unit]);return C(this,N,cf).call(this,e,n,e.opacity),n!==null&&(e.fallen||e.opacity<1)},"#drawFighter"),Zg=l(function(e){if(e.length===0)return;let t=new Set;e.forEach(n=>{let{id:r,attacker:s,won:a,from:o,attackerSquare:c,facing:u}=n;if(C(this,N,Ms).call(this,`${r}-fallen`),d(this,Ma).delete(r),d(this,ei).delete(r)&&d(this,Xe).changed([[n.defenderSquare.x,n.defenderSquare.y]],...C(this,N,Ss).call(this)),d(this,pi).has(s)&&!C(this,N,vs).call(this,s))if(!a)d(this,mi).add(s);else{let h={id:r,units:[s],at:[o.at[0],o.at[1]],lift:o.lift,aloft:0,facing:u,from:c,before:c,to:c};d(this,Un).set(r,h),d(this,Fr).add(s),C(this,N,zo).call(this,h);return}C(this,N,Ms).call(this,r),C(this,N,qg).call(this,[s],t)}),C(this,N,Yg).call(this,t)},"#battlesEnded"),Qv=l(function(e){let t=d(this,Fi);[d(this,cr),t?.tile].forEach(r=>{r&&e.add(`${r.x},${r.y}`)}),z(this,gi,t?.id??null),z(this,cr,t?.tile??null),d(this,Un).forEach(r=>C(this,N,zo).call(this,r));let n=d(this,ur);n!==null&&(z(this,ur,null),C(this,N,Kg).call(this,n.x,n.y))},"#caughtUp"),ga=l(function(){let e=d(this,gi);return e!==null&&e!==(d(this,Fi)?.id??null)&&(d(this,rn).walking(e)||d(this,Zt).attacking(e))},"#holding"),pf=l(function(){let e=d(this,gi);e===null||!C(this,N,ga).call(this)||(C(this,N,Lc).call(this,d(this,rn).endWhere(t=>t.includes(e),performance.now())),C(this,N,Dc).call(this,d(this,Zt).endWhere(({attacker:t})=>t===e,performance.now())),C(this,N,kt).call(this))},"#hurry"),eM=l(function(){let e=d(this,cr),t=e===null?void 0:this.world.get(e.x,e.y).units.find(({id:n})=>n===d(this,gi));return t!==void 0&&t.active!==!1&&(t.moves?.value??0)>0},"#ringedOffered"),tM=l(function(e,t){if(C(this,N,ga).call(this)){z(this,ur,{x:e,y:t});return}C(this,N,Kg).call(this,e,t)},"#centreSoon"),nM=l(function(e){if(d(this,pi).forEach(({squares:n,after:r},s)=>{n.some(a=>(e.get(a)??0)>r)&&(d(this,pi).delete(s),d(this,mi).delete(s))}),d(this,Un).size===0)return;let t=[...d(this,Un).values()].filter(n=>!C(this,N,Xg).call(this,n));t.forEach(n=>d(this,Un).delete(n.id)),C(this,N,Lc).call(this,t)},"#patched"),mf=l(function(e,t,n){let[r,s]=d(this,Xe).layout.centre(t.x,t.y),[a,o]=d(this,Xe).layout.centre(n.x,n.y),{u:c,v:u}=d(this,Xe).layout.period(),h=l((m,x)=>x===null?m:m-x*Math.round(m/x),"short"),p=h(a-r,c),f=h(o-s,u);p===0&&f===0||(d(this,fi).delete(e),d(this,fi).set(e,Math.round(Math.atan2(p,f)*1e3)/1e3),d(this,fi).size>a2&&d(this,fi).delete(d(this,fi).keys().next().value),[t,n].forEach(({x:m,y:x})=>C(this,N,Ni).call(this,m,x)),C(this,N,kt).call(this))},"#face"),xa=l(function(e,t,n){let r=d(this,Xt).clientWidth,s=d(this,Xt).clientHeight;if(r<=0||s<=0)return!1;let a=d(this,ur),o=a===null?d(this,Rt)?.to??d(this,pt):{...d(this,Rt)?.to??d(this,pt),focus:d(this,Xe).layout.centre(a.x,a.y)},[c,u]=d(this,Xe).layout.centre(e,t),{u:h,v:p}=C(this,N,ws).call(this),[f,m]=o.focus,x=l((S,L,P)=>P===null?S:S+P*Math.round((L-S)/P),"nearest"),b=[x(c,f,h),Math.max(0,d(this,Xe).heightAt(c,u)),x(u,m,p)],g=r/s,_=d(this,Nn)??0,v=C0(o,_,b,g),E=C0(o,_,[b[0]+Math.cos(o.yaw),b[1],b[2]+Math.sin(o.yaw)],g);if(v===null||E===null)return!1;let M=(v[0]+1)/2*r,R=(1-v[1])/2*s,A=Math.abs(E[0]-v[0])*(r/2),y=(n+.5)*A;return M>=y&&M<=r-y&&R>=y&&R<=s-y&&!d(this,kc).some(({left:S,top:L,right:P,bottom:D})=>M>=S-A/2&&M<=P+A/2&&R>=L-A/2&&R<=D+A/2)},"#visible"),Nc=l(function(e,t){let n=d(this,Xt).clientWidth,r=d(this,Xt).clientHeight;if(n<=0||r<=0)return null;let s=Pv(d(this,pt),d(this,Nn)??0,[e/n*2-1,1-t/r*2],n/r,(p,f)=>d(this,Xe).heightAt(p,f));if(s===null)return null;let[a,o]=d(this,Xe).layout.tileAt(...s),c=this.world.width(),u=this.world.height();return!(C(this,N,ws).call(this).v!==null)&&(o<0||o>=u)?null:this.world.get((a%c+c)%c,(o%u+u)%u)},"#tileAt"),iM=l(function(e,t){let n=C(this,N,Nc).call(this,e,t);n!==null&&this.portal.emit("tile-clicked",n.x,n.y);let r=d(this,hr);if(r!==null){n!==null&&r.accept(n)&&(this.endPicking(),r.onPick(n));return}n!==null&&d(this,jn).click(this.portal,n)},"#clicked"),rM=l(function(e,t,n,r,s){let a=d(this,Fi),o=C(this,N,Nc).call(this,e,t);return a===null||o===null?!1:(this.endPicking(),d(this,jn).menu(this.portal,n,r,a,o,d(this,$c),s),!0)},"#menu"),sM=l(function(e){let t=e===null||d(this,Jo)||d(this,jn).menuOpen()?null:C(this,N,Nc).call(this,e.x,e.y),n=d(this,Ps);if(t===null||e===null){d(this,ni).call(this);return}let r=`${t.x},${t.y}`;if(n!==null&&n.key===r){Object.assign(n,{canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY});return}d(this,ni).call(this);let s={key:r,x:t.x,y:t.y,canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY,timer:null,open:!1};s.timer=window.setTimeout(()=>{s.timer=null,C(this,N,Jg).call(this,s)},f2),z(this,Ps,s),document.addEventListener("keydown",d(this,ni),!0)},"#hovered"),Jg=l(function(e){let t=typeof document.elementFromPoint!="function"||document.elementFromPoint(e.clientX,e.clientY)===d(this,Xt),n=t?C(this,N,Nc).call(this,e.canvasX,e.canvasY):null;if(n===null||`${n.x},${n.y}`!==e.key){d(this,ni).call(this);return}let r=d(this,jn).tooltip(d(this,Xt),n,d(this,kr),{left:e.clientX-10,top:e.clientY-10,bottom:e.clientY+10});!r&&e.open&&d(this,jn).endTooltip(d(this,Xt)),e.open=r},"#showHover"),Ss=l(function(){return[...d(this,pt).focus]},"#focus"),aM=l(function(){let[e,t]=d(this,Xe).layout.tileAt(...d(this,pt).focus),n=this.world.width(),r=this.world.height();return{x:(e%n+n)%n,y:C(this,N,ws).call(this).v===null?Math.min(r-1,Math.max(0,t)):(t%r+r)%r}},"#centreSquare"),Kg=l(function(e,t){let[n,r]=d(this,Xe).layout.centre(e,t),[s,a]=(d(this,Rt)?.to??d(this,pt)).focus;if(n===s&&r===a)return;let o={...d(this,Rt)?.to??d(this,pt),focus:[n,r]},{u:c,v:u}=C(this,N,ws).call(this),h=l((x,b)=>b===null?x:x-b*Math.round(x/b),"short"),[p,f]=d(this,pt).focus,m=Math.hypot(h(n-p,c),h(r-f,u));if(!d(this,Wc)||m>d(this,pt).distance*1.5){z(this,Wc,!0),this.setOrbit(o);return}C(this,N,Fc).call(this,o)},"#centreOn"),Uc=l(function(e){return tb(sa(e),C(this,N,ws).call(this),d(this,Xe).extentV())},"#settle"),ws=l(function(){let e=d(this,Xe).layout.period();return this.portal?.lockVerticalEdges()??d(this,Hc)?{u:e.u,v:null}:e},"#period"),Fc=l(function(e,t=C(this,N,zg).call(this)+zv(e.yaw-(d(this,Rt)?.to??d(this,pt)).yaw)){d(this,ni).call(this),typeof requestAnimationFrame!="function"||Ii()?(z(this,Rt,null),z(this,pt,C(this,N,Uc).call(this,e))):z(this,Rt,{from:d(this,pt),to:e,started:null,turn:t,drawn:0}),C(this,N,kt).call(this)},"#moveTo"),oM=l(function(e){let t=d(this,Rt);if(t===null)return!1;t.started??=e;let n=Math.min(1,(e-t.started)/o2);return t.drawn=n*n*(3-2*n),z(this,pt,C(this,N,Uc).call(this,nb(t.from,t.to,n,C(this,N,ws).call(this),t.turn))),n>=1&&z(this,Rt,null),n<1},"#moveCamera"),lM=l(function(e){let[t,n]=d(this,pt).focus,r=Math.max(0,d(this,Xe).heightAt(t,n));return!e||d(this,Nn)===null||Ii()?(z(this,Nn,r),!1):(z(this,Nn,d(this,Nn)+(r-d(this,Nn))*d2),Math.abs(r-d(this,Nn))<.002?(z(this,Nn,r),!1):!0)},"#followHeight"),jg=l(function(){let e=[...d(this,Is).values()].map(({x:h,y:p})=>[h,p]),t=this.world.tiles(),n=t!==d(this,wa)||t.length!==d(this,Zo);z(this,wa,t),z(this,Zo,t.length),d(this,Is).clear();let r=C(this,N,uM).call(this,d(this,Xe).changed(e,...C(this,N,Ss).call(this),n)),s=new Set(e.map(([h,p])=>`${h},${p}`)),a=new Map([...s].map(h=>[h,d(this,Xo).get(h)??0]));d(this,Xo).clear();let o=d(this,Cs),c=d(this,Rs);z(this,Cs,new Map),z(this,Rs,null),d(this,lr).forEach(({units:[h]})=>{h!==void 0&&c?.add(h.id)}),e.forEach(([h,p])=>C(this,N,Ni).call(this,h,p)),r.forEach(([h,p])=>{let f=`${h},${p}`;!n&&!s.has(f)&&d(this,zr).has(f)&&C(this,N,Ni).call(this,h,p)}),C(this,N,cM).call(this,e,r);let u=d(this,Ps);u!==null&&u.open&&e.some(([h,p])=>h===u.x&&p===u.y)&&C(this,N,Jg).call(this,u),(e.length>0||n)&&z(this,$o,!0),n&&(z(this,dr,!0),d(this,zr).forEach((h,p)=>{let[f,m]=p.split(",").map(Number);C(this,N,Ni).call(this,f,m)})),c!==null&&C(this,N,df).call(this)&&!(n&&s.size*2>=t.length)&&C(this,N,Jv).call(this,o,c),e.length>0&&C(this,N,nM).call(this,a)},"#takeTiles"),Ni=l(function(e,t){let n=`${e},${t}`,r=this.world.get(e,t),s=d(this,Zt).awaitingBlow({x:e,y:t}),a=s===null?void 0:d(this,ei).get(s.id),o=a===void 0?r.units:[...a.units,...r.units.filter(({id:g})=>!a.units.some(_=>_.id===g))];r.units.filter(({id:g})=>C(this,N,vs).call(this,g)&&!d(this,mi).has(g)).forEach(g=>{let _=d(this,ba).get(g.id)??new Set;_.add(n),d(this,ba).set(g.id,_),d(this,Ui).set(g.id,g)});let u=o.filter(({id:g})=>!C(this,N,vs).call(this,g)),h=fg(a===void 0&&u.length===r.units.length?r:{city:a===void 0?r.city:a.city,units:u},d(this,gi),d(this,Oi),d(this,Ho),g=>d(this,fi).get(g.id)??0,d(this,Ls));C(this,N,$v).call(this,n,u,{shown:h?.unit?.id??null,ringed:h?.unit?.active===!0,inCity:(h?.unit??null)!==null&&h?.inCity===!0});let[p,f]=d(this,Xe).layout.centre(e,t),m=[p,Math.max(0,d(this,Xe).surfaceAt(p,f)),f],x=h===null?null:JSON.stringify([h,m]);x!==(d(this,zr).get(n)??null)&&(d(this,At).setMarker(n,m,h),C(this,N,dM).call(this,n,x))},"#mark"),cM=l(function(e,t){e.length===0&&t.length===0||(e.forEach(([n,r])=>d(this,Ta).delete(`${n},${r}`)),t.forEach(([n,r])=>d(this,Ta).delete(`${n},${r}`)),z(this,dr,!0))},"#yieldsChanged"),uM=l(function(e){let t=this.world.topology(),n=new Map;return e.forEach(([r,s])=>{n.set(`${r},${s}`,[r,s]),t.directions().forEach(a=>{let o=t.neighbour(r,s,a);o!==null&&n.set(`${o[0]},${o[1]}`,o)})}),[...n.values()]},"#besides"),hM=l(function(){if(!d(this,Ea)){d(this,Aa)&&(d(this,At).setYields(null),z(this,Aa,!1));return}if(!d(this,dr)&&d(this,Aa))return;let e=[];this.world.tiles().forEach(t=>{let n=`${t.x},${t.y}`,r=Nv(t,Uv(t)),s=d(this,Ta).get(n);if(s===void 0||s.of!==r){let[a,o]=d(this,Xe).layout.centre(t.x,t.y);s={of:r,laid:r.length===0?null:Ov({at:[a,Math.max(0,d(this,Xe).surfaceAt(a,o)),o],yields:r},d(this,Kc))},d(this,Ta).set(n,s)}s.laid!==null&&e.push(s.laid)}),d(this,At).setYields(Bv(e)),z(this,dr,!1),z(this,Aa,!0)},"#showYields"),dM=l(function(e,t){t===null?d(this,zr).delete(e):d(this,zr).set(e,t)},"#remember"),Oc=l(function(){let e=new Set(d(this,zr).keys());this.world.tiles().forEach(({x:t,y:n})=>e.add(`${t},${n}`)),e.forEach(t=>{let[n,r]=t.split(",").map(Number);C(this,N,Ni).call(this,n,r)})},"#markAll"),Qg=l(function(e){let t=performance.now(),n=C(this,N,oM).call(this,t),[r,s]=C(this,N,Ss).call(this);C(this,N,jg).call(this),C(this,N,Wv).call(this,t),C(this,N,Xv).call(this,t),C(this,N,qv).call(this,t),C(this,N,Kv).call(this,t),`${r},${s}`!==d(this,Gc)&&(z(this,Gc,`${r},${s}`),d(this,Xe).refocus(r,s)),d(this,Xe).build(d(this,At),e);let a=C(this,N,lM).call(this,e!==null);C(this,N,hM).call(this),d(this,At).view(d(this,pt),d(this,Nn)??0,C(this,N,ws).call(this)),d(this,At).render(),C(this,N,fM).call(this),C(this,N,ex).call(this),z(this,zc,performance.now()-t),z(this,Xc,!0),C(this,N,gM).call(this),(d(this,Xe).pending()>0||d(this,Xe).overlaysPending()>0||d(this,rn).size()>0||d(this,Zt).size()>0||d(this,Qn).size()>0||d(this,Ts).size()>0||n||a)&&C(this,N,kt).call(this)},"#frameDrawn"),fM=l(function(){let e=d(this,Yo);if(e===null)return;d(this,$o)&&(z(this,$o,!1),e.redraw());let t=C(this,N,ga).call(this)?d(this,cr):d(this,Fi)?.tile??null;e.show(C(this,N,pM).call(this),t===null?null:{x:t.x,y:t.y})},"#showMinimap"),pM=l(function(){let e=d(this,Xt).clientWidth,t=d(this,Xt).clientHeight;if(e<=0||t<=0)return null;let n=e/t,r=d(this,Nn)??0,s=Bd(d(this,pt).distance).far,[a,o]=d(this,pt).focus,c=l((h,p)=>{for(let f=p;f>=-1;f-=.05){let m=bo(d(this,pt),r,[h,f],n);if(m!==null){let x=Math.hypot(m[0]-a,m[1]-o),b=x>s?s/x:1;return[a+(m[0]-a)*b,o+(m[1]-o)*b]}}return null},"corner"),u=[c(-1,-1),c(1,-1),c(1,1),c(-1,1)];return u.every(h=>h!==null)?u:null},"#patch"),ex=l(function(e=!1){let t=(e?d(this,Rt)?.to??d(this,pt):d(this,pt)).distance,n=l(()=>{d(this,Es)!==null&&clearTimeout(d(this,Es)),z(this,Es,null),z(this,Vo,null)},"stop"),r=l(()=>{n(),z(this,ya,t),d(this,Vc).set(t)},"keep");if(e){n(),t!==d(this,ya)&&r();return}if(d(this,Rt)!==null||t===d(this,ya)){n();return}d(this,Es)!==null&&t===d(this,Vo)||(n(),z(this,Vo,t),z(this,Es,setTimeout(r,h2)))},"#keepDistance"),kt=l(function(){if(!d(this,Ca)){if(typeof requestAnimationFrame!="function"){C(this,N,Qg).call(this,null);return}d(this,Gr)===null&&z(this,Gr,requestAnimationFrame(()=>{z(this,Gr,null),C(this,N,Qg).call(this,s2)}))}},"#draw"),mM=l(function(e){let t=document.createElement("pre");return t.className="map3d-stats",t.setAttribute("aria-hidden","true"),Object.assign(t.style,{background:"var(--ui-overlay-bg, rgba(0, 0, 0, 0.6))",color:"var(--ui-overlay-fg, #fff)",font:"12px/1.4 monospace",left:"0.5rem",margin:"0",padding:"0.25rem 0.5rem",pointerEvents:"none",position:"absolute",bottom:"0.5rem"}),e.append(t),t},"#statsOverlay"),gM=l(function(){if(d(this,_a)===null)return;let{drawCalls:e,triangles:t,geometries:n}=d(this,At).stats();d(this,_a).textContent=[`frame ${d(this,zc).toFixed(1)} ms`,`draw calls ${e}`,`triangles ${t.toLocaleString()}`,`geometries ${n}`,`chunks waiting ${d(this,Xe).pending()}`].join(`
`)},"#showStats"),tx=l(function(){let e=d(this,Xt).parentElement,t=e?.offsetWidth??0,n=e?.offsetHeight??0,r=window.devicePixelRatio||1,s=`${t}\xD7${n}@${r}`;t===0||n===0||s===d(this,eu)||(z(this,eu,s),d(this,At).resize(t,n,r),this.measureCovered(),d(this,At).render())},"#resize"),l(nx,"MapView3D");var kg=nx,xM=kg;var p2={createMapView3D:l(i=>new xM(i),"createMapView3D")};globalThis[mx]=p2;})();
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
