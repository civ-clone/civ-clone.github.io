"use strict";(()=>{var zg=Object.create;var $c=Object.defineProperty;var kg=Object.getOwnPropertyDescriptor;var Vg=Object.getOwnPropertyNames;var Gg=Object.getPrototypeOf,Hg=Object.prototype.hasOwnProperty;var Rf=s=>{throw TypeError(s)};var l=(s,t)=>$c(s,"name",{value:t,configurable:!0});var Wg=(s,t)=>()=>{try{return t||s((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};var Xg=(s,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Vg(t))!Hg.call(s,i)&&i!==e&&$c(s,i,{get:()=>t[i],enumerable:!(n=kg(t,i))||n.enumerable});return s};var qg=(s,t,e)=>(e=s!=null?zg(Gg(s)):{},Xg(t||!s||!s.__esModule?$c(e,"default",{value:s,enumerable:!0}):e,s));var Kc=(s,t,e)=>t.has(s)||Rf("Cannot "+e);var y=(s,t,e)=>(Kc(s,t,"read from private field"),e?e.call(s):t.get(s)),rt=(s,t,e)=>t.has(s)?Rf("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(s):t.set(s,e),Y=(s,t,e,n)=>(Kc(s,t,"write to private field"),n?n.call(s,e):t.set(s,e),e),K=(s,t,e)=>(Kc(s,t,"access private method"),e);var If=Wg(is=>{"use strict";var Bn,Ai=is&&is.__classPrivateFieldGet||function(s,t,e,n){if(e==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?s!==t||!n:!t.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?n:e==="a"?n.call(s):n?n.value:t.get(s)};Object.defineProperty(is,"__esModule",{value:!0}),is.EventEmitter=void 0;var Qc=class Qc{constructor(){Bn.set(this,{})}on(t,e){t in Ai(this,Bn,"f")||(Ai(this,Bn,"f")[t]=[]),Ai(this,Bn,"f")[t].push(e)}once(t,e){let n=l((...i)=>{e(...i),this.off(t,n)},"i");this.on(t,n)}off(t,e){if(!(t in Ai(this,Bn,"f")))return;let n=Ai(this,Bn,"f")[t].indexOf(e);n!==-1&&Ai(this,Bn,"f")[t].splice(n,1)}emit(t,...e){t in Ai(this,Bn,"f")&&Ai(this,Bn,"f")[t].forEach((n=>n(...e)))}};l(Qc,"i");var ho=Qc;is.EventEmitter=ho,Bn=new WeakMap,is.default=ho});var Pf="civMap3D";var Lf=qg(If());var Ci,zn,Ls,th=class th extends Lf.EventEmitter{constructor(e,n){super();rt(this,Ci);rt(this,zn);rt(this,Ls);Y(this,zn,e),Y(this,Ls,e.lockVerticalEdges),Y(this,Ci,n)}center(){return y(this,Ci).centre()}isVisible(e,n,i=0){return y(this,Ci).visible(e,n,i)}lockVerticalEdges(){return y(this,Ls)}nativeTileSize(){return y(this,zn).art.nativeTileSize()}openCity(e){let{cityOpener:n}=y(this,zn);return n.opens(e,this)?(n.open(e,this),!0):!1}playerId(){return y(this,zn).playerId}render(){y(this,Ci).changed()}scale(){return y(this,zn).art.scale()}setCenter(e,n){y(this,Ci).centreOn(e,n)}setLockVerticalEdges(e){Y(this,Ls,e)}setZoom(){}transport(){return y(this,zn).transport}zoom(){return y(this,zn).art.zoom()}};Ci=new WeakMap,zn=new WeakMap,Ls=new WeakMap,l(th,"MapPortal3D");var jc=th,Df=jc;var ap=0,Ih=1,op=2;var ma=1,Il=2,hr=3,Gi=0,Ze=1,Wn=2,ds=0,ur=1,Lh=2,Dh=3,Nh=4,lp=5;var fs=100,cp=101,hp=102,up=103,dp=104,fp=200,pp=201,mp=202,gp=203,Uh=204,Fh=205,_p=206,xp=207,vp=208,yp=209,Mp=210,bp=211,Sp=212,wp=213,Ep=214,Oo=0,Bo=1,zo=2,js=3,ko=4,Vo=5,Go=6,Ho=7,Oh=0,Tp=1,Ap=2,Xn=0,Bh=1,zh=2,kh=3,ga=4,Vh=5,Gh=6,Hh=7;var Wh=300,ps=301,dr=302,Ll=303,Dl=304,ls=1e3,xn=1001,Wo=1002,Le=1003,Cp=1004;var _a=1005;var De=1006,Nl=1007;var mi=1008;var Qe=1009,Xh=1010,qh=1011,fr=1012,Ul=1013,Ln=1014,Dn=1015,ln=1016,Fl=1017,Ol=1018,ms=1020,Yh=35902,Zh=35899,Jh=1021,$h=1022,Nn=1023,hi=1026,gi=1027,Kh=1028,Bl=1029,qn=1030,zl=1031;var kl=1033,xa=33776,va=33777,ya=33778,Ma=33779,Vl=35840,Gl=35841,Hl=35842,Wl=35843,Xl=36196,ql=37492,Yl=37496,Zl=37488,Jl=37489,ba=37490,$l=37491,Kl=37808,Ql=37809,jl=37810,tc=37811,ec=37812,nc=37813,ic=37814,sc=37815,rc=37816,ac=37817,oc=37818,lc=37819,cc=37820,hc=37821,uc=36492,dc=36494,fc=36495,pc=36283,mc=36284,Sa=36285,gc=36286;var qr=2300,Xo=2301,Uo=2302,wh=2303,Eh=2400,Th=2401,Ah=2402;var Rp=3200;var _c=0,Pp=1,_i="",Ue="srgb",Yr="srgb-linear",Zr="linear",ie="srgb";var Fo=7680;var Ip=519,Lp=512,Dp=513,Np=514,Qh=515,Up=516,Fp=517,jh=518,tu=519,eu=35044;var nu="300 es",vn=2e3,tr=2001;function Yg(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}l(Yg,"arrayNeedsUint32");function Zg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}l(Zg,"isTypedArray");function Jr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}l(Jr,"createElementNS");function Op(){let s=Jr("canvas");return s.style.display="block",s}l(Op,"createCanvasElement");var Nf={},er=null;function $r(...s){let t="THREE."+s.shift();er?er("log",t,...s):console.log(t,...s)}l($r,"log");function Bp(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}l(Bp,"enhanceLogMessage");function Ft(...s){s=Bp(s);let t="THREE."+s.shift();if(er)er("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}l(Ft,"warn");function Bt(...s){s=Bp(s);let t="THREE."+s.shift();if(er)er("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}l(Bt,"error");function Wr(...s){let t=s.join(" ");t in Nf||(Nf[t]=!0,Ft(...s))}l(Wr,"warnOnce");function zp(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}l(r,"probe"),setTimeout(r,e)})}l(zp,"probeAsync");var kp={[Oo]:Oo,[zo]:Go,[ko]:ko,[js]:Vo,[Bo]:Bo,[Go]:zo,[Ho]:Ho,[Vo]:js},ou=class ou{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}};l(ou,"EventDispatcher");var Vn=ou,ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var eh=Math.PI/180,qo=180/Math.PI;function gs(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[s&255]+ke[s>>8&255]+ke[s>>16&255]+ke[s>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}l(gs,"generateUUID");function Qt(s,t,e){return Math.max(t,Math.min(e,s))}l(Qt,"clamp");function Jg(s,t){return(s%t+t)%t}l(Jg,"euclideanModulo");function nh(s,t,e){return(1-e)*s+e*t}l(nh,"lerp");function Vp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}l(Vp,"floorPowerOfTwo");function xc(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}l(xc,"getNormalizationScale");function Gp(s,t){if(t.constructor===Float32Array)return s;let e=xc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}l(Gp,"denormalize");function Hp(s,t){if(t.constructor===Float32Array)return s;let e=xc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}l(Hp,"normalize");var ml=class ml{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};l(ml,"Vector2"),ml.prototype.isVector2=!0;var Ot=ml,lu=class lu{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],h=n[i+1],u=n[i+2],p=n[i+3],d=r[a+0],g=r[a+1],x=r[a+2],S=r[a+3];if(p!==S||c!==d||h!==g||u!==x){let _=c*d+h*g+u*x+p*S;_<0&&(d=-d,g=-g,x=-x,S=-S,_=-_);let m=1-o;if(_<.9995){let E=Math.acos(_),R=Math.sin(E);m=Math.sin(m*E)/R,o=Math.sin(o*E)/R,c=c*m+d*o,h=h*m+g*o,u=u*m+x*o,p=p*m+S*o}else{c=c*m+d*o,h=h*m+g*o,u=u*m+x*o,p=p*m+S*o;let E=1/Math.sqrt(c*c+h*h+u*u+p*p);c*=E,h*=E,u*=E,p*=E}}t[e]=c,t[e+1]=h,t[e+2]=u,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],c=n[i+1],h=n[i+2],u=n[i+3],p=r[a],d=r[a+1],g=r[a+2],x=r[a+3];return t[e]=o*x+u*p+c*g-h*d,t[e+1]=c*x+u*d+h*p-o*g,t[e+2]=h*x+u*g+o*d-c*p,t[e+3]=u*x-o*p-c*d-h*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,h=o(n/2),u=o(i/2),p=o(r/2),d=c(n/2),g=c(i/2),x=c(r/2);switch(a){case"XYZ":this._x=d*u*p+h*g*x,this._y=h*g*p-d*u*x,this._z=h*u*x+d*g*p,this._w=h*u*p-d*g*x;break;case"YXZ":this._x=d*u*p+h*g*x,this._y=h*g*p-d*u*x,this._z=h*u*x-d*g*p,this._w=h*u*p+d*g*x;break;case"ZXY":this._x=d*u*p-h*g*x,this._y=h*g*p+d*u*x,this._z=h*u*x+d*g*p,this._w=h*u*p-d*g*x;break;case"ZYX":this._x=d*u*p-h*g*x,this._y=h*g*p+d*u*x,this._z=h*u*x-d*g*p,this._w=h*u*p+d*g*x;break;case"YZX":this._x=d*u*p+h*g*x,this._y=h*g*p+d*u*x,this._z=h*u*x-d*g*p,this._w=h*u*p-d*g*x;break;case"XZY":this._x=d*u*p-h*g*x,this._y=h*g*p-d*u*x,this._z=h*u*x+d*g*p,this._w=h*u*p+d*g*x;break;default:Ft("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],h=e[2],u=e[6],p=e[10],d=n+o+p;if(d>0){let g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(u-c)*g,this._y=(r-h)*g,this._z=(a-i)*g}else if(n>o&&n>p){let g=2*Math.sqrt(1+n-o-p);this._w=(u-c)/g,this._x=.25*g,this._y=(i+a)/g,this._z=(r+h)/g}else if(o>p){let g=2*Math.sqrt(1+o-n-p);this._w=(r-h)/g,this._x=(i+a)/g,this._y=.25*g,this._z=(c+u)/g}else{let g=2*Math.sqrt(1+p-n-o);this._w=(a-i)/g,this._x=(r+h)/g,this._y=(c+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,h=e._z,u=e._w;return this._x=n*u+a*o+i*h-r*c,this._y=i*u+a*c+r*o-n*h,this._z=r*u+a*h+n*c-i*o,this._w=a*u-n*o-i*c-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let h=Math.acos(o),u=Math.sin(h);c=Math.sin(c*h)/u,e=Math.sin(e*h)/u,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};l(lu,"Quaternion");var Gn=lu,gl=class gl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,h=2*(a*i-o*n),u=2*(o*e-r*i),p=2*(r*n-a*e);return this.x=e+c*h+a*p-o*u,this.y=n+c*u+o*h-r*p,this.z=i+c*p+r*u-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ih.copy(this).projectOnVector(t),this.sub(ih)}reflect(t){return this.sub(ih.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};l(gl,"Vector3"),gl.prototype.isVector3=!0;var H=gl,ih=new H,Uf=new Gn,_l=class _l{constructor(t,e,n,i,r,a,o,c,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,h)}set(t,e,n,i,r,a,o,c,h){let u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],u=n[4],p=n[7],d=n[2],g=n[5],x=n[8],S=i[0],_=i[3],m=i[6],E=i[1],R=i[4],T=i[7],C=i[2],w=i[5],f=i[8];return r[0]=a*S+o*E+c*C,r[3]=a*_+o*R+c*w,r[6]=a*m+o*T+c*f,r[1]=h*S+u*E+p*C,r[4]=h*_+u*R+p*w,r[7]=h*m+u*T+p*f,r[2]=d*S+g*E+x*C,r[5]=d*_+g*R+x*w,r[8]=d*m+g*T+x*f,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8];return e*a*u-e*o*h-n*r*u+n*o*c+i*r*h-i*a*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8],p=u*a-o*h,d=o*c-u*r,g=h*r-a*c,x=e*p+n*d+i*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/x;return t[0]=p*S,t[1]=(i*h-u*n)*S,t[2]=(o*n-i*a)*S,t[3]=d*S,t[4]=(u*e-i*c)*S,t[5]=(i*r-o*e)*S,t[6]=g*S,t[7]=(n*c-h*e)*S,t[8]=(a*e-n*r)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*o)+a+t,-i*h,i*c,-i*(-h*a+c*o)+o+e,0,0,1),this}scale(t,e){return Wr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(sh.makeScale(t,e)),this}rotate(t){return Wr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(sh.makeRotation(-t)),this}translate(t,e){return Wr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(sh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};l(_l,"Matrix3"),_l.prototype.isMatrix3=!0;var Vt=_l,sh=new Vt,Ff=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Of=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $g(){let s={enabled:!0,workingColorSpace:Yr,spaces:{},convert:l(function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ie&&(i.r=ci(i.r),i.g=ci(i.g),i.b=ci(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ie&&(i.r=Qs(i.r),i.g=Qs(i.g),i.b=Qs(i.b))),i},"convert"),workingToColorSpace:l(function(i,r){return this.convert(i,this.workingColorSpace,r)},"workingToColorSpace"),colorSpaceToWorking:l(function(i,r){return this.convert(i,r,this.workingColorSpace)},"colorSpaceToWorking"),getPrimaries:l(function(i){return this.spaces[i].primaries},"getPrimaries"),getTransfer:l(function(i){return i===_i?Zr:this.spaces[i].transfer},"getTransfer"),getToneMappingMode:l(function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},"getToneMappingMode"),getLuminanceCoefficients:l(function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},"getLuminanceCoefficients"),define:l(function(i){Object.assign(this.spaces,i)},"define"),_getMatrix:l(function(i,r,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},"_getMatrix"),_getDrawingBufferColorSpace:l(function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},"_getDrawingBufferColorSpace"),_getUnpackColorSpace:l(function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},"_getUnpackColorSpace")},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Yr]:{primaries:t,whitePoint:n,transfer:Zr,toXYZ:Ff,fromXYZ:Of,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:n,transfer:ie,toXYZ:Ff,fromXYZ:Of,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),s}l($g,"createColorManagement");var Kt=$g();function ci(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}l(ci,"SRGBToLinear");function Qs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}l(Qs,"LinearToSRGB");var Ds,cu=class cu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ds===void 0&&(Ds=Jr("canvas")),Ds.width=t.width,Ds.height=t.height;let i=Ds.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Ds}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Jr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ci(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ci(e[n]/255)*255):e[n]=ci(e[n]);return{data:e,width:t.width,height:t.height}}else return Ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}};l(cu,"ImageUtils");var Yo=cu,Kg=0,hu=class hu{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=gs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(rh(i[a].image)):r.push(rh(i[a]))}else r=rh(i);n.url=r}return e||(t.images[this.uuid]=n),n}};l(hu,"TextureSource");var nr=hu;function rh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Yo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ft("Texture: Unable to serialize Texture."),{})}l(rh,"serializeImage");var Qg=0,ah=new H,$s=class $s extends Vn{constructor(t=$s.DEFAULT_IMAGE,e=$s.DEFAULT_MAPPING,n=xn,i=xn,r=De,a=mi,o=Nn,c=Qe,h=$s.DEFAULT_ANISOTROPY,u=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=gs(),this.name="",this.source=new nr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ah).x}get height(){return this.source.getSize(ah).y}get depth(){return this.source.getSize(ah).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ft(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Ft(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ls:t.x=t.x-Math.floor(t.x);break;case xn:t.x=t.x<0?0:1;break;case Wo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ls:t.y=t.y-Math.floor(t.y);break;case xn:t.y=t.y<0?0:1;break;case Wo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};l($s,"Texture");var Ye=$s;Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Wh;Ye.DEFAULT_ANISOTROPY=1;var xl=class xl{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,h=c[0],u=c[4],p=c[8],d=c[1],g=c[5],x=c[9],S=c[2],_=c[6],m=c[10];if(Math.abs(u-d)<.01&&Math.abs(p-S)<.01&&Math.abs(x-_)<.01){if(Math.abs(u+d)<.1&&Math.abs(p+S)<.1&&Math.abs(x+_)<.1&&Math.abs(h+g+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(h+1)/2,T=(g+1)/2,C=(m+1)/2,w=(u+d)/4,f=(p+S)/4,M=(x+_)/4;return R>T&&R>C?R<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(R),i=w/n,r=f/n):T>C?T<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(T),n=w/i,r=M/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=f/r,i=M/r),this.set(n,i,r,e),this}let E=Math.sqrt((_-x)*(_-x)+(p-S)*(p-S)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(_-x)/E,this.y=(p-S)/E,this.z=(d-u)/E,this.w=Math.acos((h+g+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};l(xl,"Vector4"),xl.prototype.isVector4=!0;var me=xl,uu=class uu extends Vn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:De,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Ye({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:De,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new nr(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};l(uu,"RenderTarget");var Zo=uu,du=class du extends Zo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}};l(du,"WebGLRenderTarget");var rn=du,fu=class fu extends Ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Le,this.minFilter=Le,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};l(fu,"DataArrayTexture");var Kr=fu;var pu=class pu extends Ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Le,this.minFilter=Le,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};l(pu,"Data3DTexture");var Jo=pu;var Xr=class Xr{constructor(t,e,n,i,r,a,o,c,h,u,p,d,g,x,S,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,h,u,p,d,g,x,S,_)}set(t,e,n,i,r,a,o,c,h,u,p,d,g,x,S,_){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=h,m[6]=u,m[10]=p,m[14]=d,m[3]=g,m[7]=x,m[11]=S,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xr().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Ns.setFromMatrixColumn(t,0).length(),r=1/Ns.setFromMatrixColumn(t,1).length(),a=1/Ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),h=Math.sin(i),u=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let d=a*u,g=a*p,x=o*u,S=o*p;e[0]=c*u,e[4]=-c*p,e[8]=h,e[1]=g+x*h,e[5]=d-S*h,e[9]=-o*c,e[2]=S-d*h,e[6]=x+g*h,e[10]=a*c}else if(t.order==="YXZ"){let d=c*u,g=c*p,x=h*u,S=h*p;e[0]=d+S*o,e[4]=x*o-g,e[8]=a*h,e[1]=a*p,e[5]=a*u,e[9]=-o,e[2]=g*o-x,e[6]=S+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*u,g=c*p,x=h*u,S=h*p;e[0]=d-S*o,e[4]=-a*p,e[8]=x+g*o,e[1]=g+x*o,e[5]=a*u,e[9]=S-d*o,e[2]=-a*h,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*u,g=a*p,x=o*u,S=o*p;e[0]=c*u,e[4]=x*h-g,e[8]=d*h+S,e[1]=c*p,e[5]=S*h+d,e[9]=g*h-x,e[2]=-h,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,g=a*h,x=o*c,S=o*h;e[0]=c*u,e[4]=S-d*p,e[8]=x*p+g,e[1]=p,e[5]=a*u,e[9]=-o*u,e[2]=-h*u,e[6]=g*p+x,e[10]=d-S*p}else if(t.order==="XZY"){let d=a*c,g=a*h,x=o*c,S=o*h;e[0]=c*u,e[4]=-p,e[8]=h*u,e[1]=d*p+S,e[5]=a*u,e[9]=g*p-x,e[2]=x*p-g,e[6]=o*u,e[10]=S*p+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jg,t,t0)}lookAt(t,e,n){let i=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),Ri.crossVectors(n,nn),Ri.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),Ri.crossVectors(n,nn)),Ri.normalize(),uo.crossVectors(nn,Ri),i[0]=Ri.x,i[4]=uo.x,i[8]=nn.x,i[1]=Ri.y,i[5]=uo.y,i[9]=nn.y,i[2]=Ri.z,i[6]=uo.z,i[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],h=n[12],u=n[1],p=n[5],d=n[9],g=n[13],x=n[2],S=n[6],_=n[10],m=n[14],E=n[3],R=n[7],T=n[11],C=n[15],w=i[0],f=i[4],M=i[8],N=i[12],P=i[1],D=i[5],F=i[9],B=i[13],I=i[2],z=i[6],Z=i[10],G=i[14],st=i[3],q=i[7],et=i[11],it=i[15];return r[0]=a*w+o*P+c*I+h*st,r[4]=a*f+o*D+c*z+h*q,r[8]=a*M+o*F+c*Z+h*et,r[12]=a*N+o*B+c*G+h*it,r[1]=u*w+p*P+d*I+g*st,r[5]=u*f+p*D+d*z+g*q,r[9]=u*M+p*F+d*Z+g*et,r[13]=u*N+p*B+d*G+g*it,r[2]=x*w+S*P+_*I+m*st,r[6]=x*f+S*D+_*z+m*q,r[10]=x*M+S*F+_*Z+m*et,r[14]=x*N+S*B+_*G+m*it,r[3]=E*w+R*P+T*I+C*st,r[7]=E*f+R*D+T*z+C*q,r[11]=E*M+R*F+T*Z+C*et,r[15]=E*N+R*B+T*G+C*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],h=t[13],u=t[2],p=t[6],d=t[10],g=t[14],x=t[3],S=t[7],_=t[11],m=t[15],E=c*g-h*d,R=o*g-h*p,T=o*d-c*p,C=a*g-h*u,w=a*d-c*u,f=a*p-o*u;return e*(S*E-_*R+m*T)-n*(x*E-_*C+m*w)+i*(x*R-S*C+m*f)-r*(x*T-S*w+_*f)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],c=t[2],h=t[6],u=t[10];return e*(a*u-o*h)-n*(r*u-o*c)+i*(r*h-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8],p=t[9],d=t[10],g=t[11],x=t[12],S=t[13],_=t[14],m=t[15],E=e*o-n*a,R=e*c-i*a,T=e*h-r*a,C=n*c-i*o,w=n*h-r*o,f=i*h-r*c,M=u*S-p*x,N=u*_-d*x,P=u*m-g*x,D=p*_-d*S,F=p*m-g*S,B=d*m-g*_,I=E*B-R*F+T*D+C*P-w*N+f*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/I;return t[0]=(o*B-c*F+h*D)*z,t[1]=(i*F-n*B-r*D)*z,t[2]=(S*f-_*w+m*C)*z,t[3]=(d*w-p*f-g*C)*z,t[4]=(c*P-a*B-h*N)*z,t[5]=(e*B-i*P+r*N)*z,t[6]=(_*T-x*f-m*R)*z,t[7]=(u*f-d*T+g*R)*z,t[8]=(a*F-o*P+h*M)*z,t[9]=(n*P-e*F-r*M)*z,t[10]=(x*w-S*T+m*E)*z,t[11]=(p*T-u*w-g*E)*z,t[12]=(o*N-a*D-c*M)*z,t[13]=(e*D-n*N+i*M)*z,t[14]=(S*R-x*C-_*E)*z,t[15]=(u*C-p*R+d*E)*z,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,h=r*a,u=r*o;return this.set(h*a+n,h*o-i*c,h*c+i*o,0,h*o+i*c,u*o+n,u*c-i*a,0,h*c-i*o,u*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,h=r+r,u=a+a,p=o+o,d=r*h,g=r*u,x=r*p,S=a*u,_=a*p,m=o*p,E=c*h,R=c*u,T=c*p,C=n.x,w=n.y,f=n.z;return i[0]=(1-(S+m))*C,i[1]=(g+T)*C,i[2]=(x-R)*C,i[3]=0,i[4]=(g-T)*w,i[5]=(1-(d+m))*w,i[6]=(_+E)*w,i[7]=0,i[8]=(x+R)*f,i[9]=(_-E)*f,i[10]=(1-(d+S))*f,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ns.set(i[0],i[1],i[2]).length(),o=Ns.set(i[4],i[5],i[6]).length(),c=Ns.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Cn.copy(this);let h=1/a,u=1/o,p=1/c;return Cn.elements[0]*=h,Cn.elements[1]*=h,Cn.elements[2]*=h,Cn.elements[4]*=u,Cn.elements[5]*=u,Cn.elements[6]*=u,Cn.elements[8]*=p,Cn.elements[9]*=p,Cn.elements[10]*=p,e.setFromRotationMatrix(Cn),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,i,r,a,o=vn,c=!1){let h=this.elements,u=2*r/(e-t),p=2*r/(n-i),d=(e+t)/(e-t),g=(n+i)/(n-i),x,S;if(c)x=r/(a-r),S=a*r/(a-r);else if(o===vn)x=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===tr)x=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=d,h[12]=0,h[1]=0,h[5]=p,h[9]=g,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=S,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=vn,c=!1){let h=this.elements,u=2/(e-t),p=2/(n-i),d=-(e+t)/(e-t),g=-(n+i)/(n-i),x,S;if(c)x=1/(a-r),S=a/(a-r);else if(o===vn)x=-2/(a-r),S=-(a+r)/(a-r);else if(o===tr)x=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=0,h[12]=d,h[1]=0,h[5]=p,h[9]=0,h[13]=g,h[2]=0,h[6]=0,h[10]=x,h[14]=S,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};l(Xr,"Matrix4"),Xr.prototype.isMatrix4=!0;var ue=Xr,Ns=new H,Cn=new ue,jg=new H(0,0,0),t0=new H(1,1,1),Ri=new H,uo=new H,nn=new H,Bf=new ue,zf=new Gn,vl=class vl{constructor(t=0,e=0,n=0,i=vl.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],h=i[5],u=i[9],p=i[2],d=i[6],g=i[10];switch(e){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,g),this._y=0);break;default:Ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zf.setFromEuler(this),this.setFromQuaternion(zf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};l(vl,"Euler");var ui=vl;ui.DEFAULT_ORDER="XYZ";var mu=class mu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}};l(mu,"Layers");var Qr=mu,e0=0,kf=new H,Us=new Gn,ni=new ue,fo=new H,Or=new H,n0=new H,i0=new Gn,Vf=new H(1,0,0),Gf=new H(0,1,0),Hf=new H(0,0,1),Wf={type:"added"},s0={type:"removed"},Fs={type:"childadded",child:null},oh={type:"childremoved",child:null},Ks=class Ks extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ks.DEFAULT_UP.clone();let t=new H,e=new ui,n=new Gn,i=new H(1,1,1);function r(){n.setFromEuler(e,!1)}l(r,"onRotationChange");function a(){e.setFromQuaternion(n,void 0,!1)}l(a,"onQuaternionChange"),e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ue},normalMatrix:{value:new Vt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=Ks.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ks.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.multiply(Us),this}rotateOnWorldAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.premultiply(Us),this}rotateX(t){return this.rotateOnAxis(Vf,t)}rotateY(t){return this.rotateOnAxis(Gf,t)}rotateZ(t){return this.rotateOnAxis(Hf,t)}translateOnAxis(t,e){return kf.copy(t).applyQuaternion(this.quaternion),this.position.add(kf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vf,t)}translateY(t){return this.translateOnAxis(Gf,t)}translateZ(t){return this.translateOnAxis(Hf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fo.copy(t):fo.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(Or,fo,this.up):ni.lookAt(fo,Or,this.up),this.quaternion.setFromRotationMatrix(ni),i&&(ni.extractRotation(i.matrixWorld),Us.setFromRotationMatrix(ni),this.quaternion.premultiply(Us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Bt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wf),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(s0),oh.child=t,this.dispatchEvent(oh),oh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wf),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,t,n0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,i0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(l(r,"serialize"),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let p=c[h];r(t.shapes,p)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),h=a(t.textures),u=a(t.images),p=a(t.shapes),d=a(t.skeletons),g=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),g.length>0&&(n.animations=g),x.length>0&&(n.nodes=x)}return n.object=i,n;function a(o){let c=[];for(let h in o){let u=o[h];delete u.metadata,c.push(u)}return c}l(a,"extractFromCache")}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};l(Ks,"Object3D");var Fe=Ks;Fe.DEFAULT_UP=new H(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gu=class gu extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}};l(gu,"Group");var $e=gu,r0={type:"move"},_u=class _u{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let S of t.hand.values()){let _=e.getJointPose(S,n),m=this._getHandJoint(h,S);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}let u=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],d=u.position.distanceTo(p.position),g=.02,x=.005;h.inputState.pinching&&d>g+x?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=g-x&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(r0)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new $e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};l(_u,"WebXRController");var ir=_u,Wp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},po={h:0,s:0,l:0};function lh(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}l(lh,"hue2rgb");var xu=class xu{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Kt.workingColorSpace){if(t=Jg(t,1),e=Qt(e,0,1),n=Qt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=lh(a,r,t+1/3),this.g=lh(a,r,t),this.b=lh(a,r,t-1/3)}return Kt.colorSpaceToWorking(this,i),this}setStyle(t,e=Ue){function n(r){r!==void 0&&parseFloat(r)<1&&Ft("Color: Alpha component of "+t+" will be ignored.")}l(n,"handleAlpha");let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ft("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ft("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){let n=Wp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ft("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ci(t.r),this.g=ci(t.g),this.b=ci(t.b),this}copyLinearToSRGB(t){return this.r=Qs(t.r),this.g=Qs(t.g),this.b=Qs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return Kt.workingToColorSpace(Ve.copy(this),t),Math.round(Qt(Ve.r*255,0,255))*65536+Math.round(Qt(Ve.g*255,0,255))*256+Math.round(Qt(Ve.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.workingToColorSpace(Ve.copy(this),e);let n=Ve.r,i=Ve.g,r=Ve.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,h,u=(o+a)/2;if(o===a)c=0,h=0;else{let p=a-o;switch(h=u<=.5?p/(a+o):p/(2-a-o),a){case n:c=(i-r)/p+(i<r?6:0);break;case i:c=(r-n)/p+2;break;case r:c=(n-i)/p+4;break}c/=6}return t.h=c,t.s=h,t.l=u,t}getRGB(t,e=Kt.workingColorSpace){return Kt.workingToColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=Ue){Kt.workingToColorSpace(Ve.copy(this),t);let e=Ve.r,n=Ve.g,i=Ve.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Pi),this.setHSL(Pi.h+t,Pi.s+e,Pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pi),t.getHSL(po);let n=nh(Pi.h,po.h,e),i=nh(Pi.s,po.s,e),r=nh(Pi.l,po.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};l(xu,"Color");var Ut=xu,Ve=new Ut;Ut.NAMES=Wp;var yl=class yl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=e,this.far=n}clone(){return new yl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}};l(yl,"Fog");var jr=yl,vu=class vu extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}};l(vu,"Scene");var ta=vu,Rn=new H,ii=new H,ch=new H,si=new H,Os=new H,Bs=new H,Xf=new H,hh=new H,uh=new H,dh=new H,fh=new me,ph=new me,mh=new me,Ni=class Ni{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Rn.subVectors(t,e),i.cross(Rn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Rn.subVectors(i,e),ii.subVectors(n,e),ch.subVectors(t,e);let a=Rn.dot(Rn),o=Rn.dot(ii),c=Rn.dot(ch),h=ii.dot(ii),u=ii.dot(ch),p=a*h-o*o;if(p===0)return r.set(0,0,0),null;let d=1/p,g=(h*c-o*u)*d,x=(a*u-o*c)*d;return r.set(1-g-x,x,g)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,si.x),c.addScaledVector(a,si.y),c.addScaledVector(o,si.z),c)}static getInterpolatedAttribute(t,e,n,i,r,a){return fh.setScalar(0),ph.setScalar(0),mh.setScalar(0),fh.fromBufferAttribute(t,e),ph.fromBufferAttribute(t,n),mh.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(fh,r.x),a.addScaledVector(ph,r.y),a.addScaledVector(mh,r.z),a}static isFrontFacing(t,e,n,i){return Rn.subVectors(n,e),ii.subVectors(t,e),Rn.cross(ii).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Rn.cross(ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ni.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ni.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Ni.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Ni.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ni.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;Os.subVectors(i,n),Bs.subVectors(r,n),hh.subVectors(t,n);let c=Os.dot(hh),h=Bs.dot(hh);if(c<=0&&h<=0)return e.copy(n);uh.subVectors(t,i);let u=Os.dot(uh),p=Bs.dot(uh);if(u>=0&&p<=u)return e.copy(i);let d=c*p-u*h;if(d<=0&&c>=0&&u<=0&&c-u>0)return a=c/(c-u),e.copy(n).addScaledVector(Os,a);dh.subVectors(t,r);let g=Os.dot(dh),x=Bs.dot(dh);if(x>=0&&g<=x)return e.copy(r);let S=g*h-c*x;if(S<=0&&h>=0&&x<=0)return o=h/(h-x),e.copy(n).addScaledVector(Bs,o);let _=u*x-g*p;if(_<=0&&p-u>=0&&g-x>=0)return Xf.subVectors(r,i),o=(p-u)/(p-u+(g-x)),e.copy(i).addScaledVector(Xf,o);let m=1/(_+S+d);return a=S*m,o=d*m,e.copy(n).addScaledVector(Os,a).addScaledVector(Bs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}};l(Ni,"Triangle");var oi=Ni,yu=class yu{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Pn):Pn.fromBufferAttribute(r,a),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mo.copy(n.boundingBox)),mo.applyMatrix4(t.matrixWorld),this.union(mo)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Br),go.subVectors(this.max,Br),zs.subVectors(t.a,Br),ks.subVectors(t.b,Br),Vs.subVectors(t.c,Br),Ii.subVectors(ks,zs),Li.subVectors(Vs,ks),ss.subVectors(zs,Vs);let e=[0,-Ii.z,Ii.y,0,-Li.z,Li.y,0,-ss.z,ss.y,Ii.z,0,-Ii.x,Li.z,0,-Li.x,ss.z,0,-ss.x,-Ii.y,Ii.x,0,-Li.y,Li.x,0,-ss.y,ss.x,0];return!gh(e,zs,ks,Vs,go)||(e=[1,0,0,0,1,0,0,0,1],!gh(e,zs,ks,Vs,go))?!1:(_o.crossVectors(Ii,Li),e=[_o.x,_o.y,_o.z],gh(e,zs,ks,Vs,go))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}};l(yu,"Box3");var Fi=yu,ri=[new H,new H,new H,new H,new H,new H,new H,new H],Pn=new H,mo=new Fi,zs=new H,ks=new H,Vs=new H,Ii=new H,Li=new H,ss=new H,Br=new H,go=new H,_o=new H,rs=new H;function gh(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){rs.fromArray(s,r);let o=i.x*Math.abs(rs.x)+i.y*Math.abs(rs.y)+i.z*Math.abs(rs.z),c=t.dot(rs),h=e.dot(rs),u=n.dot(rs);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>o)return!1}return!0}l(gh,"satForAxes");var li=a0();function a0(){let s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){let h=c-127;h<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):h<-14?(n[c]=1024>>-h-14,n[c|256]=1024>>-h-14|32768,i[c]=-h-1,i[c|256]=-h-1):h<=15?(n[c]=h+15<<10,n[c|256]=h+15<<10|32768,i[c]=13,i[c|256]=13):h<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let h=c<<13,u=0;for(;(h&8388608)===0;)h<<=1,u-=8388608;h&=-8388609,u+=947912704,r[c]=h|u}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}l(a0,"_generateTables");function o0(s){Math.abs(s)>65504&&Ft("DataUtils.toHalfFloat(): Value out of range."),s=Qt(s,-65504,65504),li.floatView[0]=s;let t=li.uint32View[0],e=t>>23&511;return li.baseTable[e]+((t&8388607)>>li.shiftTable[e])}l(o0,"toHalfFloat");function l0(s){let t=s>>10;return li.uint32View[0]=li.mantissaTable[li.offsetTable[t]+(s&1023)]+li.exponentTable[t],li.floatView[0]}l(l0,"fromHalfFloat");var Mu=class Mu{static toHalfFloat(t){return o0(t)}static fromHalfFloat(t){return l0(t)}};l(Mu,"DataUtils");var Hn=Mu,be=new H,xo=new Ot,c0=0,bu=class bu extends Vn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:c0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=eu,this.updateRanges=[],this.gpuType=Dn,this.version=0,this._normalizationScale=t!==void 0?xc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xo.fromBufferAttribute(this,e),xo.applyMatrix3(t),this.setXY(e,xo.x,xo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Gp(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Hp(t,this.array)}};l(bu,"BufferAttribute");var Ge=bu;var Su=class Su extends Ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}};l(Su,"Uint16BufferAttribute");var ea=Su;var wu=class wu extends Ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}};l(wu,"Uint32BufferAttribute");var na=wu;var Eu=class Eu extends Ge{constructor(t,e,n){super(new Float32Array(t),e,n)}};l(Eu,"Float32BufferAttribute");var ye=Eu,h0=new Fi,zr=new H,_h=new H,Tu=class Tu{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):h0.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zr.subVectors(t,this.center);let e=zr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(zr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_h.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zr.copy(t.center).add(_h)),this.expandByPoint(zr.copy(t.center).sub(_h))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}};l(Tu,"Sphere");var sr=Tu,u0=0,_n=new ue,xh=new Fe,Gs=new H,sn=new Fi,kr=new Fi,Ie=new H,Ml=class Ml extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yg(t)?na:ea)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return xh.lookAt(t),xh.updateMatrix(),this.applyMatrix4(xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ye(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];kr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ie.addVectors(sn.min,kr.min),sn.expandByPoint(Ie),Ie.addVectors(sn.max,kr.max),sn.expandByPoint(Ie)):(sn.expandByPoint(kr.min),sn.expandByPoint(kr.max))}sn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Ie.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ie));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)Ie.fromBufferAttribute(o,h),c&&(Gs.fromBufferAttribute(t,h),Ie.add(Gs)),i=Math.max(i,n.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ge(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],h=new Uint8Array(n.count);for(let N=0;N<n.count;N++)o[N]=new H,c[N]=new H;let u=new H,p=new H,d=new H,g=new Ot,x=new Ot,S=new Ot,_=new H,m=new H;function E(N,P,D){h[N]=h[P]=h[D]=1,u.fromBufferAttribute(n,N),p.fromBufferAttribute(n,P),d.fromBufferAttribute(n,D),g.fromBufferAttribute(r,N),x.fromBufferAttribute(r,P),S.fromBufferAttribute(r,D),p.sub(u),d.sub(u),x.sub(g),S.sub(g);let F=1/(x.x*S.y-S.x*x.y);isFinite(F)&&(_.copy(p).multiplyScalar(S.y).addScaledVector(d,-x.y).multiplyScalar(F),m.copy(d).multiplyScalar(x.x).addScaledVector(p,-S.x).multiplyScalar(F),o[N].add(_),o[P].add(_),o[D].add(_),c[N].add(m),c[P].add(m),c[D].add(m))}l(E,"handleTriangle");let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let N=0,P=R.length;N<P;++N){let D=R[N],F=D.start,B=D.count;for(let I=F,z=F+B;I<z;I+=3)E(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let T=new H,C=new H,w=new H,f=new H;function M(N){w.fromBufferAttribute(i,N),f.copy(w);let P=o[N];T.copy(P),T.sub(w.multiplyScalar(w.dot(P))).normalize(),C.crossVectors(f,P);let F=C.dot(c[N])<0?-1:1;a.setXYZW(N,T.x,T.y,T.z,F)}l(M,"handleVertex");for(let N=0,P=n.count;N<P;++N)h[N]&&M(N);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,g=n.count;d<g;d++)n.setXYZ(d,0,0,0);let i=new H,r=new H,a=new H,o=new H,c=new H,h=new H,u=new H,p=new H;if(t)for(let d=0,g=t.count;d<g;d+=3){let x=t.getX(d+0),S=t.getX(d+1),_=t.getX(d+2);i.fromBufferAttribute(e,x),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,_),u.subVectors(a,r),p.subVectors(i,r),u.cross(p),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,S),h.fromBufferAttribute(n,_),o.add(u),c.add(u),h.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(_,h.x,h.y,h.z)}else for(let d=0,g=e.count;d<g;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),p.subVectors(i,r),u.cross(p),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(o,c){let h=o.array,u=o.itemSize,p=o.normalized,d=new h.constructor(c.length*u),g=0,x=0;for(let S=0,_=c.length;S<_;S++){o.isInterleavedBufferAttribute?g=c[S]*o.data.stride+o.offset:g=c[S]*u;for(let m=0;m<u;m++)d[x++]=h[g++]}return new Ge(d,u,p)}if(l(t,"convertBufferAttribute"),this.index===null)return Ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new Ml,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],h=t(c,n);e.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let c=[],h=r[o];for(let u=0,p=h.length;u<p;u++){let d=h[u],g=t(d,n);c.push(g)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let h=n[c];t.data.attributes[c]=h.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],u=[];for(let p=0,d=h.length;p<d;p++){let g=h[p];u.push(g.toJSON(t.data))}u.length>0&&(i[c]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let h in i){let u=i[h];this.setAttribute(h,u.clone(e))}let r=t.morphAttributes;for(let h in r){let u=[],p=r[h];for(let d=0,g=p.length;d<g;d++)u.push(p[d].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,u=a.length;h<u;h++){let p=a[h];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};l(Ml,"BufferGeometry");var Ke=Ml,Au=class Au{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=eu,this.updateRanges=[],this.version=0,this.uuid=gs()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=qf(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=qf(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};l(Au,"InterleavedBuffer");var $o=Au;function qf(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=gs()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}l(qf,"getArrayKey");var Xe=new H,bl=class bl{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i,this._normalizationScale=t!==void 0?xc(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){$r("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Ge(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new bl(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){$r("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Gp(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Hp(t,this.data.array)}};l(bl,"InterleavedBufferAttribute");var ia=bl,vh=new H,d0=new H,f0=new Vt,Cu=class Cu{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=vh.subVectors(n,e).cross(d0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(vh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||f0.getNormalMatrix(t),i=this.coplanarPoint(vh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}};l(Cu,"Plane");var In=Cu,p0=0,Ru=class Ru extends Vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=gs(),this.name="",this.type="Material",this.blending=ur,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uh,this.blendDst=Fh,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ip,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fo,this.stencilZFail=Fo,this.stencilZPass=Fo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ft(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Ft(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(l(i,"extractFromCache"),e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ut().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new In().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ot().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ot().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};l(Ru,"Material");var di=Ru,Pu=class Pu extends di{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}};l(Pu,"SpriteMaterial");var rr=Pu,Hs,Vr=new H,Ws=new H,Xs=new H,qs=new Ot,Gr=new Ot,Xp=new ue,vo=new H,Hr=new H,yo=new H,Yf=new Ot,yh=new Ot,Zf=new Ot,Iu=class Iu extends Fe{constructor(t=new rr){if(super(),this.isSprite=!0,this.type="Sprite",Hs===void 0){Hs=new Ke;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new $o(e,5);Hs.setIndex([0,1,2,0,2,3]),Hs.setAttribute("position",new ia(n,3,0,!1)),Hs.setAttribute("uv",new ia(n,2,3,!1))}this.geometry=Hs,this.material=t,this.center=new Ot(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Bt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ws.setFromMatrixScale(this.matrixWorld),Xp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Xs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ws.multiplyScalar(-Xs.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Mo(vo.set(-.5,-.5,0),Xs,a,Ws,i,r),Mo(Hr.set(.5,-.5,0),Xs,a,Ws,i,r),Mo(yo.set(.5,.5,0),Xs,a,Ws,i,r),Yf.set(0,0),yh.set(1,0),Zf.set(1,1);let o=t.ray.intersectTriangle(vo,Hr,yo,!1,Vr);if(o===null&&(Mo(Hr.set(-.5,.5,0),Xs,a,Ws,i,r),yh.set(0,1),o=t.ray.intersectTriangle(vo,yo,Hr,!1,Vr),o===null))return;let c=t.ray.origin.distanceTo(Vr);c<t.near||c>t.far||e.push({distance:c,point:Vr.clone(),uv:oi.getInterpolation(Vr,vo,Hr,yo,Yf,yh,Zf,new Ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};l(Iu,"Sprite");var ar=Iu;function Mo(s,t,e,n,i,r){qs.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Gr.x=r*qs.x-i*qs.y,Gr.y=i*qs.x+r*qs.y):Gr.copy(qs),s.copy(t),s.x+=Gr.x,s.y+=Gr.y,s.applyMatrix4(Xp)}l(Mo,"transformVertex");var ai=new H,Mh=new H,bo=new H,So=new H,Lu=class Lu{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ai.copy(this.origin).addScaledVector(this.direction,e),ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Mh.copy(t).add(e).multiplyScalar(.5),bo.copy(e).sub(t).normalize(),So.copy(this.origin).sub(Mh);let r=t.distanceTo(e)*.5,a=-this.direction.dot(bo),o=So.dot(this.direction),c=-So.dot(bo),h=So.lengthSq(),u=Math.abs(1-a*a),p,d,g,x;if(u>0)if(p=a*c-o,d=a*o-c,x=r*u,p>=0)if(d>=-x)if(d<=x){let S=1/u;p*=S,d*=S,g=p*(p+a*d+2*o)+d*(a*p+d+2*c)+h}else d=r,p=Math.max(0,-(a*d+o)),g=-p*p+d*(d+2*c)+h;else d=-r,p=Math.max(0,-(a*d+o)),g=-p*p+d*(d+2*c)+h;else d<=-x?(p=Math.max(0,-(-a*r+o)),d=p>0?-r:Math.min(Math.max(-r,-c),r),g=-p*p+d*(d+2*c)+h):d<=x?(p=0,d=Math.min(Math.max(-r,-c),r),g=d*(d+2*c)+h):(p=Math.max(0,-(a*r+o)),d=p>0?r:Math.min(Math.max(-r,-c),r),g=-p*p+d*(d+2*c)+h);else d=a>0?-r:r,p=Math.max(0,-(a*d+o)),g=-p*p+d*(d+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(Mh).addScaledVector(bo,d),g}intersectSphere(t,e){if(t.radius<0)return null;ai.subVectors(t.center,this.origin);let n=ai.dot(this.direction),i=ai.dot(ai)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c,h=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,i=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,i=(t.min.x-d.x)*h),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),p>=0?(o=(t.min.z-d.z)*p,c=(t.max.z-d.z)*p):(o=(t.max.z-d.z)*p,c=(t.min.z-d.z)*p),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ai)!==null}intersectTriangle(t,e,n,i,r){let a=this.origin,o=this.direction,c=o.x,h=o.y,u=o.z,p=t.x-a.x,d=t.y-a.y,g=t.z-a.z,x=e.x-a.x,S=e.y-a.y,_=e.z-a.z,m=n.x-a.x,E=n.y-a.y,R=n.z-a.z,T=Math.abs(c),C=Math.abs(h),w=Math.abs(u),f,M,N,P,D,F,B,I,z,Z,G,st;if(T>=C&&T>=w?(N=c,F=p,z=x,st=m,c>=0?(f=h,M=u,P=d,D=g,B=S,I=_,Z=E,G=R):(f=u,M=h,P=g,D=d,B=_,I=S,Z=R,G=E)):C>=w?(N=h,F=d,z=S,st=E,h>=0?(f=u,M=c,P=g,D=p,B=_,I=x,Z=R,G=m):(f=c,M=u,P=p,D=g,B=x,I=_,Z=m,G=R)):(N=u,F=g,z=_,st=R,u>=0?(f=c,M=h,P=p,D=d,B=x,I=S,Z=m,G=E):(f=h,M=c,P=d,D=p,B=S,I=x,Z=E,G=m)),N===0)return null;let q=f/N,et=M/N,it=1/N,wt=P-q*F,zt=D-et*F,Q=B-q*z,vt=I-et*z,Et=Z-q*st,It=G-et*st,yt=Et*vt-It*Q,kt=wt*It-zt*Et,de=Q*zt-vt*wt;if(i){if(yt<0||kt<0||de<0)return null}else if((yt<0||kt<0||de<0)&&(yt>0||kt>0||de>0))return null;let Dt=yt+kt+de;if(Dt===0)return null;let Zt=it*(yt*F+kt*z+de*st);return(Dt>0?Zt<0:Zt>0)?null:this.at(Zt/Dt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};l(Lu,"Ray");var Ko=Lu,Du=class Du extends di{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=Oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};l(Du,"MeshBasicMaterial");var Qo=Du,Jf=new ue,as=new Ko,wo=new sr,$f=new H,Eo=new H,To=new H,Ao=new H,bh=new H,Co=new H,Kf=new H,Ro=new H,Nu=class Nu extends Fe{constructor(t=new Ke,e=new Qo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){Co.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let u=o[c],p=r[c];u!==0&&(bh.fromBufferAttribute(p,t),a?Co.addScaledVector(bh,u):Co.addScaledVector(bh.sub(e),u))}e.add(Co)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(r),as.copy(t.ray).recast(t.near),!(wo.containsPoint(as.origin)===!1&&(as.intersectSphere(wo,$f)===null||as.origin.distanceToSquared($f)>(t.far-t.near)**2))&&(Jf.copy(r).invert(),as.copy(t.ray).applyMatrix4(Jf),!(n.boundingBox!==null&&as.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,as)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,d=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,S=d.length;x<S;x++){let _=d[x],m=a[_.materialIndex],E=Math.max(_.start,g.start),R=Math.min(o.count,Math.min(_.start+_.count,g.start+g.count));for(let T=E,C=R;T<C;T+=3){let w=o.getX(T),f=o.getX(T+1),M=o.getX(T+2);i=Po(this,m,t,n,h,u,p,w,f,M),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=_.materialIndex,e.push(i))}}else{let x=Math.max(0,g.start),S=Math.min(o.count,g.start+g.count);for(let _=x,m=S;_<m;_+=3){let E=o.getX(_),R=o.getX(_+1),T=o.getX(_+2);i=Po(this,a,t,n,h,u,p,E,R,T),i&&(i.faceIndex=Math.floor(_/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,S=d.length;x<S;x++){let _=d[x],m=a[_.materialIndex],E=Math.max(_.start,g.start),R=Math.min(c.count,Math.min(_.start+_.count,g.start+g.count));for(let T=E,C=R;T<C;T+=3){let w=T,f=T+1,M=T+2;i=Po(this,m,t,n,h,u,p,w,f,M),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=_.materialIndex,e.push(i))}}else{let x=Math.max(0,g.start),S=Math.min(c.count,g.start+g.count);for(let _=x,m=S;_<m;_+=3){let E=_,R=_+1,T=_+2;i=Po(this,a,t,n,h,u,p,E,R,T),i&&(i.faceIndex=Math.floor(_/3),e.push(i))}}}};l(Nu,"Mesh");var oe=Nu;function m0(s,t,e,n,i,r,a,o){let c;if(t.side===Ze?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===Gi,o),c===null)return null;Ro.copy(o),Ro.applyMatrix4(s.matrixWorld);let h=e.ray.origin.distanceTo(Ro);return h<e.near||h>e.far?null:{distance:h,point:Ro.clone(),object:s}}l(m0,"checkIntersection$1");function Po(s,t,e,n,i,r,a,o,c,h){s.getVertexPosition(o,Eo),s.getVertexPosition(c,To),s.getVertexPosition(h,Ao);let u=m0(s,t,e,n,Eo,To,Ao,Kf);if(u){let p=new H;oi.getBarycoord(Kf,Eo,To,Ao,p),i&&(u.uv=oi.getInterpolatedAttribute(i,o,c,h,p,new Ot)),r&&(u.uv1=oi.getInterpolatedAttribute(r,o,c,h,p,new Ot)),a&&(u.normal=oi.getInterpolatedAttribute(a,o,c,h,p,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:c,c:h,normal:new H,materialIndex:0};oi.getNormal(Eo,To,Ao,d.normal),u.face=d,u.barycoord=p}return u}l(Po,"checkGeometryIntersection");var Uu=class Uu extends Ye{constructor(t=null,e=1,n=1,i,r,a,o,c,h=Le,u=Le,p,d){super(null,a,o,c,h,u,i,r,p,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};l(Uu,"DataTexture");var or=Uu;var os=new sr,g0=new Ot(.5,.5),Io=new H,Fu=class Fu{constructor(t=new In,e=new In,n=new In,i=new In,r=new In,a=new In){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vn,n=!1){let i=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],h=r[3],u=r[4],p=r[5],d=r[6],g=r[7],x=r[8],S=r[9],_=r[10],m=r[11],E=r[12],R=r[13],T=r[14],C=r[15];if(i[0].setComponents(h-a,g-u,m-x,C-E).normalize(),i[1].setComponents(h+a,g+u,m+x,C+E).normalize(),i[2].setComponents(h+o,g+p,m+S,C+R).normalize(),i[3].setComponents(h-o,g-p,m-S,C-R).normalize(),n)i[4].setComponents(c,d,_,T).normalize(),i[5].setComponents(h-c,g-d,m-_,C-T).normalize();else if(i[4].setComponents(h-c,g-d,m-_,C-T).normalize(),e===vn)i[5].setComponents(h+c,g+d,m+_,C+T).normalize();else if(e===tr)i[5].setComponents(c,d,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(t){os.center.set(0,0,0);let e=g0.distanceTo(t.center);return os.radius=.7071067811865476+e,os.applyMatrix4(t.matrixWorld),this.intersectsSphere(os)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Io.x=i.normal.x>0?t.max.x:t.min.x,Io.y=i.normal.y>0?t.max.y:t.min.y,Io.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Io)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};l(Fu,"Frustum");var Oi=Fu,Qf=new ue,Sl=class Sl{constructor(){this.coordinateSystem=vn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let r=e[i];Qf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Oi),n[i].setFromProjectionMatrix(Qf,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new Oi),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new Sl().copy(this)}};l(Sl,"FrustumArray");var jo=Sl;var Ou=class Ou extends Ye{constructor(t=[],e=ps,n,i,r,a,o,c,h,u){super(t,e,n,i,r,a,o,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};l(Ou,"CubeTexture");var sa=Ou,Bu=class Bu extends Ye{constructor(t,e,n,i,r,a,o,c,h){super(t,e,n,i,r,a,o,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};l(Bu,"CanvasTexture");var ra=Bu;var zu=class zu extends Ye{constructor(t,e,n=Ln,i,r,a,o=Le,c=Le,h,u=hi,p=1){if(u!==hi&&u!==gi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:p};super(d,i,r,a,o,c,u,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new nr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}};l(zu,"DepthTexture");var fi=zu,ku=class ku extends fi{constructor(t,e=Ln,n=ps,i,r,a=Le,o=Le,c,h=hi){let u={width:t,height:t,depth:1},p=[u,u,u,u,u,u];super(t,t,e,n,i,r,a,o,c,h),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}};l(ku,"CubeDepthTexture");var aa=ku,Vu=class Vu extends Ye{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};l(Vu,"ExternalTexture");var oa=Vu,wl=class wl extends Ke{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],h=[],u=[],p=[],d=0,g=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,i,a,2),x("x","z","y",1,-1,t,n,-e,i,a,3),x("x","y","z",1,-1,t,e,n,i,r,4),x("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ye(h,3)),this.setAttribute("normal",new ye(u,3)),this.setAttribute("uv",new ye(p,2));function x(S,_,m,E,R,T,C,w,f,M,N){let P=T/f,D=C/M,F=T/2,B=C/2,I=w/2,z=f+1,Z=M+1,G=0,st=0,q=new H;for(let et=0;et<Z;et++){let it=et*D-B;for(let wt=0;wt<z;wt++){let zt=wt*P-F;q[S]=zt*E,q[_]=it*R,q[m]=I,h.push(q.x,q.y,q.z),q[S]=0,q[_]=0,q[m]=w>0?1:-1,u.push(q.x,q.y,q.z),p.push(wt/f),p.push(1-et/M),G+=1}}for(let et=0;et<M;et++)for(let it=0;it<f;it++){let wt=d+it+z*et,zt=d+it+z*(et+1),Q=d+(it+1)+z*(et+1),vt=d+(it+1)+z*et;c.push(wt,zt,vt),c.push(zt,Q,vt),st+=6}o.addGroup(g,st,N),g+=st,d+=G}l(x,"buildPlane")}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};l(wl,"BoxGeometry");var pi=wl;var El=class El extends Ke{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let h=this;i=Math.floor(i),r=Math.floor(r);let u=[],p=[],d=[],g=[],x=0,S=[],_=n/2,m=0;E(),a===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(u),this.setAttribute("position",new ye(p,3)),this.setAttribute("normal",new ye(d,3)),this.setAttribute("uv",new ye(g,2));function E(){let T=new H,C=new H,w=0,f=(e-t)/n;for(let M=0;M<=r;M++){let N=[],P=M/r,D=P*(e-t)+t;for(let F=0;F<=i;F++){let B=F/i,I=B*c+o,z=Math.sin(I),Z=Math.cos(I);C.x=D*z,C.y=-P*n+_,C.z=D*Z,p.push(C.x,C.y,C.z),T.set(z,f,Z).normalize(),d.push(T.x,T.y,T.z),g.push(B,1-P),N.push(x++)}S.push(N)}for(let M=0;M<i;M++)for(let N=0;N<r;N++){let P=S[N][M],D=S[N+1][M],F=S[N+1][M+1],B=S[N][M+1];(t>0||N!==0)&&(u.push(P,D,B),w+=3),(e>0||N!==r-1)&&(u.push(D,F,B),w+=3)}h.addGroup(m,w,0),m+=w}l(E,"generateTorso");function R(T){let C=x,w=new Ot,f=new H,M=0,N=T===!0?t:e,P=T===!0?1:-1;for(let F=1;F<=i;F++)p.push(0,_*P,0),d.push(0,P,0),g.push(.5,.5),x++;let D=x;for(let F=0;F<=i;F++){let I=F/i*c+o,z=Math.cos(I),Z=Math.sin(I);f.x=N*Z,f.y=_*P,f.z=N*z,p.push(f.x,f.y,f.z),d.push(0,P,0),w.x=z*.5+.5,w.y=Z*.5*P+.5,g.push(w.x,w.y),x++}for(let F=0;F<i;F++){let B=C+F,I=D+F;T===!0?u.push(I,I+1,B):u.push(I+1,I,B),M+=3}h.addGroup(m,M,T===!0?1:2),m+=M}l(R,"generateCap")}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new El(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};l(El,"CylinderGeometry");var cs=El,Tl=class Tl extends cs{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Tl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};l(Tl,"ConeGeometry");var hs=Tl;var Al=class Al extends Ke{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),h=o+1,u=c+1,p=t/o,d=e/c,g=[],x=[],S=[],_=[];for(let m=0;m<u;m++){let E=m*d-a;for(let R=0;R<h;R++){let T=R*p-r;x.push(T,-E,0),S.push(0,0,1),_.push(R/o),_.push(1-m/c)}}for(let m=0;m<c;m++)for(let E=0;E<o;E++){let R=E+h*m,T=E+h*(m+1),C=E+1+h*(m+1),w=E+1+h*m;g.push(R,T,w),g.push(T,C,w)}this.setIndex(g),this.setAttribute("position",new ye(x,3)),this.setAttribute("normal",new ye(S,3)),this.setAttribute("uv",new ye(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Al(t.width,t.height,t.widthSegments,t.heightSegments)}};l(Al,"PlaneGeometry");var Bi=Al;var Cl=class Cl extends Ke{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),h=0,u=[],p=new H,d=new H,g=[],x=[],S=[],_=[];for(let m=0;m<=n;m++){let E=[],R=m/n,T=a+R*o,C=t*Math.cos(T),w=Math.sqrt(t*t-C*C),f=0;m===0&&a===0?f=.5/e:m===n&&c===Math.PI&&(f=-.5/e);for(let M=0;M<=e;M++){let N=M/e,P=i+N*r;p.x=-w*Math.cos(P),p.y=C,p.z=w*Math.sin(P),x.push(p.x,p.y,p.z),d.copy(p).normalize(),S.push(d.x,d.y,d.z),_.push(N+f,1-R),E.push(h++)}u.push(E)}for(let m=0;m<n;m++)for(let E=0;E<e;E++){let R=u[m][E+1],T=u[m][E],C=u[m+1][E],w=u[m+1][E+1];(m!==0||a>0)&&g.push(R,T,w),(m!==n-1||c<Math.PI)&&g.push(T,C,w)}this.setIndex(g),this.setAttribute("position",new ye(x,3)),this.setAttribute("normal",new ye(S,3)),this.setAttribute("uv",new ye(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};l(Cl,"SphereGeometry");var la=Cl;var Rl=class Rl extends Ke{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let c=[],h=[],u=[],p=[],d=new H,g=new H,x=new H;for(let S=0;S<=n;S++){let _=a+S/n*o;for(let m=0;m<=i;m++){let E=m/i*r;g.x=(t+e*Math.cos(_))*Math.cos(E),g.y=(t+e*Math.cos(_))*Math.sin(E),g.z=e*Math.sin(_),h.push(g.x,g.y,g.z),d.x=t*Math.cos(E),d.y=t*Math.sin(E),x.subVectors(g,d).normalize(),u.push(x.x,x.y,x.z),p.push(m/i),p.push(S/n)}}for(let S=1;S<=n;S++)for(let _=1;_<=i;_++){let m=(i+1)*S+_-1,E=(i+1)*(S-1)+_-1,R=(i+1)*(S-1)+_,T=(i+1)*S+_;c.push(m,E,T),c.push(E,R,T)}this.setIndex(c),this.setAttribute("position",new ye(h,3)),this.setAttribute("normal",new ye(u,3)),this.setAttribute("uv",new ye(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};l(Rl,"TorusGeometry");var lr=Rl;function _s(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(jf(i))i.isRenderTargetTexture?(Ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(jf(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}l(_s,"cloneUniforms");function He(s){let t={};for(let e=0;e<s.length;e++){let n=_s(s[e]);for(let i in n)t[i]=n[i]}return t}l(He,"mergeUniforms");function jf(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}l(jf,"isThreeObject");function _0(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}l(_0,"cloneUniformsGroups");function iu(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}l(iu,"getUnlitUniformColorSpace");var wa={clone:_s,merge:He},x0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,v0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Gu=class Gu extends di{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=x0,this.fragmentShader=v0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_s(t.uniforms),this.uniformsGroups=_0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Ut().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ot().fromArray(i.value);break;case"v3":this.uniforms[n].value=new H().fromArray(i.value);break;case"v4":this.uniforms[n].value=new me().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Vt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ue().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}};l(Gu,"ShaderMaterial");var an=Gu,Hu=class Hu extends an{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};l(Hu,"RawShaderMaterial");var tl=Hu,Wu=class Wu extends di{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_c,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};l(Wu,"MeshStandardMaterial");var us=Wu;var Xu=class Xu extends di{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}};l(Xu,"MeshDepthMaterial");var el=Xu,qu=class qu extends di{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};l(qu,"MeshDistanceMaterial");var nl=qu;function Ys(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}l(Ys,"convertArray");function Lo(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}l(Lo,"hasTangents");var Yu=class Yu{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}};l(Yu,"Interpolant");var zi=Yu,Zu=class Zu extends zi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Eh,endingEnd:Eh}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Th:r=t,o=2*e-n;break;case Ah:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Th:a=t,c=2*n-e;break;case Ah:a=1,c=n+i[1]-i[0];break;default:a=t-1,c=e}let h=(n-e)*.5,u=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,u=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,g=this._weightNext,x=(n-e)/(i-e),S=x*x,_=S*x,m=-d*_+2*d*S-d*x,E=(1+d)*_+(-1.5-2*d)*S+(-.5+d)*x+1,R=(-1-g)*_+(1.5+g)*S+.5*x,T=g*_-g*S;for(let C=0;C!==o;++C)r[C]=m*a[u+C]+E*a[h+C]+R*a[c+C]+T*a[p+C];return r}};l(Zu,"CubicInterpolant");var il=Zu,Ju=class Ju extends zi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,u=(n-e)/(i-e),p=1-u;for(let d=0;d!==o;++d)r[d]=a[h+d]*p+a[c+d]*u;return r}};l(Ju,"LinearInterpolant");var sl=Ju,$u=class $u extends zi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}};l($u,"DiscreteInterpolant");var rl=$u,Ku=class Ku extends zi{interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,u=this.inTangents,p=this.outTangents;if(!u||!p){let x=(n-e)/(i-e),S=1-x;for(let _=0;_!==o;++_)r[_]=a[h+_]*S+a[c+_]*x;return r}let d=o*2,g=t-1;for(let x=0;x!==o;++x){let S=a[h+x],_=a[c+x],m=g*d+x*2,E=p[m],R=p[m+1],T=t*d+x*2,C=u[T],w=u[T+1],f=M0(n,e,E,C,i);r[x]=qp(f,S,R,w,_)}return r}};l(Ku,"BezierInterpolant");var al=Ku;function qp(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}l(qp,"cubicBezier");function y0(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}l(y0,"cubicBezierSlope");function M0(s,t,e,n,i){let r=(s-t)/(i-t);for(let a=0;a<8;a++){let o=qp(r,t,e,n,i)-s;if(Math.abs(o)<1e-10)break;let c=y0(r,t,e,n,i);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}l(M0,"solveBezierParameter");var Qu=class Qu{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ys(e,this.TimeBufferType),this.values=Ys(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ys(t.times,Array),values:Ys(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Lo(t.settings)&&(n.settings={inTangents:Ys(t.settings.inTangents,Array),outTangents:Ys(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new rl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new sl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new il(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new al(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case qr:e=this.InterpolantFactoryMethodDiscrete;break;case Xo:e=this.InterpolantFactoryMethodLinear;break;case Uo:e=this.InterpolantFactoryMethodSmooth;break;case wh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ft("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qr;case this.InterpolantFactoryMethodLinear:return Xo;case this.InterpolantFactoryMethodSmooth:return Uo;case this.InterpolantFactoryMethodBezier:return wh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;Lo(this.settings)&&(tp(this.settings.inTangents,t),tp(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Lo(this.settings)&&(ep(this.settings.inTangents,t),ep(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Bt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Bt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Bt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Bt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(i!==void 0&&Zg(i))for(let o=0,c=i.length;o!==c;++o){let h=i[o];if(isNaN(h)){Bt("KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Uo,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,h=t[o],u=t[o+1];if(h!==u&&(o!==1||h!==t[0]))if(i)c=!0;else{let p=o*n,d=p-n,g=p+n;for(let x=0;x!==n;++x){let S=e[p+x];if(S!==e[d+x]||S!==e[g+x]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let p=o*n,d=a*n;for(let g=0;g!==n;++g)e[d+g]=e[p+g]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,h=0;h!==n;++h)e[c+h]=e[o+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Lo(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};l(Qu,"KeyframeTrack");var on=Qu;function tp(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}l(tp,"shiftTangentTimes");function ep(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}l(ep,"scaleTangentTimes");on.prototype.ValueTypeName="";on.prototype.TimeBufferType=Float32Array;on.prototype.ValueBufferType=Float32Array;on.prototype.DefaultInterpolation=Xo;var ju=class ju extends on{constructor(t,e,n){super(t,e,n)}};l(ju,"BooleanKeyframeTrack");var ki=ju;ki.prototype.ValueTypeName="bool";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=qr;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var td=class td extends on{constructor(t,e,n,i){super(t,e,n,i)}};l(td,"ColorKeyframeTrack");var ol=td;ol.prototype.ValueTypeName="color";var ed=class ed extends on{constructor(t,e,n,i){super(t,e,n,i)}};l(ed,"NumberKeyframeTrack");var ll=ed;ll.prototype.ValueTypeName="number";var nd=class nd extends zi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(i-e),h=t*o;for(let u=h+o;h!==u;h+=4)Gn.slerpFlat(r,0,a,h-o,a,h,c);return r}};l(nd,"QuaternionLinearInterpolant");var cl=nd,id=class id extends on{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new cl(this.times,this.values,this.getValueSize(),t)}};l(id,"QuaternionKeyframeTrack");var ca=id;ca.prototype.ValueTypeName="quaternion";ca.prototype.InterpolantFactoryMethodSmooth=void 0;var sd=class sd extends on{constructor(t,e,n){super(t,e,n)}};l(sd,"StringKeyframeTrack");var Vi=sd;Vi.prototype.ValueTypeName="string";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=qr;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var rd=class rd extends on{constructor(t,e,n,i){super(t,e,n,i)}};l(rd,"VectorKeyframeTrack");var hl=rd;hl.prototype.ValueTypeName="vector";var ad=class ad{constructor(t,e,n){let i=this,r=!1,a=0,o=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,p){return h.push(u,p),this},this.removeHandler=function(u){let p=h.indexOf(u);return p!==-1&&h.splice(p,2),this},this.getHandler=function(u){for(let p=0,d=h.length;p<d;p+=2){let g=h[p],x=h[p+1];if(g.global&&(g.lastIndex=0),g.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}};l(ad,"LoadingManager");var ul=ad,Yp=new ul,od=class od{constructor(t){this.manager=t!==void 0?t:Yp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};l(od,"Loader");var dl=od;dl.DEFAULT_MATERIAL_NAME="__DEFAULT";var ld=class ld extends Fe{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};l(ld,"Light");var ha=ld,cd=class cd extends ha{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}};l(cd,"HemisphereLight");var ua=cd,Sh=new ue,np=new H,ip=new H,hd=class hd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.mapType=Qe,this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oi,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;np.setFromMatrixPosition(t.matrixWorld),e.position.copy(np),ip.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ip),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Sh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Sh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,c=i?i.x/r.x:0,h=i?i.y/r.y:0;t.coordinateSystem===tr||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+h,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+h,0,0,.5,.5,0,0,0,1),e.multiply(Sh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};l(hd,"LightShadow");var fl=hd,Do=new H,No=new Gn,kn=new H,ud=class ud extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Do,No,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Do,No,kn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Do,No,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Do,No,kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};l(ud,"Camera");var da=ud,Di=new H,sp=new Ot,rp=new Ot,dd=class dd extends da{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=qo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(eh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qo*2*Math.atan(Math.tan(eh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Di.x,Di.y).multiplyScalar(-t/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-t/Di.z)}getViewSize(t,e){return this.getViewBounds(t,sp,rp),e.subVectors(rp,sp)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(eh*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/h,i*=a.width/c,n*=a.height/h}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};l(dd,"PerspectiveCamera");var qe=dd;var fd=class fd extends da{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};l(fd,"OrthographicCamera");var fa=fd,pd=class pd extends fl{constructor(){super(new fa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};l(pd,"DirectionalLightShadow");var Ch=pd,md=class md extends ha{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new Ch}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};l(md,"DirectionalLight");var pa=md;var Zs=-90,Js=1,gd=class gd extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new qe(Zs,Js,t,e);i.layers=this.layers,this.add(i);let r=new qe(Zs,Js,t,e);r.layers=this.layers,this.add(r);let a=new qe(Zs,Js,t,e);a.layers=this.layers,this.add(a);let o=new qe(Zs,Js,t,e);o.layers=this.layers,this.add(o);let c=new qe(Zs,Js,t,e);c.layers=this.layers,this.add(c);let h=new qe(Zs,Js,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(let h of e)this.remove(h);if(t===vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,h,u]=this.children,p=t.getRenderTarget(),d=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let S=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let _=!1;t.isWebGLRenderer===!0?_=t.state.buffers.depth.getReversed():_=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,i),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.mipmapsAutoUpdate=S,t.setRenderTarget(n,5,i),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(p,d,g),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}};l(gd,"CubeCamera");var cr=gd,_d=class _d extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};l(_d,"ArrayCamera");var pl=_d;var su="\\[\\]\\.:\\/",b0=new RegExp("["+su+"]","g"),ru="[^"+su+"]",S0="[^"+su.replace("\\.","")+"]",w0=/((?:WC+[\/:])*)/.source.replace("WC",ru),E0=/(WCOD+)?/.source.replace("WCOD",S0),T0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ru),A0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ru),C0=new RegExp("^"+w0+E0+T0+A0+"$"),R0=["material","materials","bones","map"],xd=class xd{constructor(t,e,n){let i=n||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}};l(xd,"Composite");var Rh=xd,Ui=class Ui{constructor(t,e,n){this.path=e,this.parsedPath=n||Ui.parseTrackName(e),this.node=Ui.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Ui.Composite(t,e,n):new Ui(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(b0,"")}static parseTrackName(t){let e=C0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);R0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=l(function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},"searchNodeSubtree"),i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=Ui.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ft("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Bt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Bt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Bt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Bt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){Bt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[i];if(a===void 0){let h=e.nodeName;Bt("PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};l(Ui,"PropertyBinding");var he=Ui;he.Composite=Rh;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gb=new Float32Array(1);var Pl=class Pl{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};l(Pl,"Matrix2"),Pl.prototype.isMatrix2=!0;var Ph=Pl;function au(s,t,e,n){let i=P0(n);switch(e){case Jh:return s*t;case Kh:return s*t/i.components*i.byteLength;case Bl:return s*t/i.components*i.byteLength;case qn:return s*t*2/i.components*i.byteLength;case zl:return s*t*2/i.components*i.byteLength;case $h:return s*t*3/i.components*i.byteLength;case Nn:return s*t*4/i.components*i.byteLength;case kl:return s*t*4/i.components*i.byteLength;case xa:case va:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ya:case Ma:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Gl:case Wl:return Math.max(s,16)*Math.max(t,8)/4;case Vl:case Hl:return Math.max(s,8)*Math.max(t,8)/2;case Xl:case ql:case Zl:case Jl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Yl:case ba:case $l:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Kl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ql:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case jl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case tc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ec:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case nc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ic:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case sc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case rc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ac:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case oc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case lc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case cc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case hc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case uc:case dc:case fc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case pc:case mc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Sa:case gc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}l(au,"getByteLength");function P0(s){switch(s){case Qe:case Xh:return{byteLength:1,components:1};case fr:case qh:case ln:return{byteLength:2,components:1};case Fl:case Ol:return{byteLength:2,components:4};case Ln:case Ul:case Dn:return{byteLength:4,components:1};case Yh:case Zh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}l(P0,"getTextureTypeByteLength");typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function mm(){let s=null,t=!1,e=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),e(r,a)}return l(i,"onAnimationFrame"),{start:l(function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},"start"),stop:l(function(){s!==null&&s.cancelAnimationFrame(n),t=!1},"stop"),setAnimationLoop:l(function(r){e=r},"setAnimationLoop"),setContext:l(function(r){s=r},"setContext")}}l(mm,"WebGLAnimation");function L0(s){let t=new WeakMap;function e(o,c){let h=o.array,u=o.usage,p=h.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,h,u),o.onUploadCallback();let g;if(h instanceof Float32Array)g=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)g=s.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?g=s.HALF_FLOAT:g=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=s.SHORT;else if(h instanceof Uint32Array)g=s.UNSIGNED_INT;else if(h instanceof Int32Array)g=s.INT;else if(h instanceof Int8Array)g=s.BYTE;else if(h instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:p}}l(e,"createBuffer");function n(o,c,h){let u=c.array,p=c.updateRanges;if(s.bindBuffer(h,o),p.length===0)s.bufferSubData(h,0,u);else{p.sort((g,x)=>g.start-x.start);let d=0;for(let g=1;g<p.length;g++){let x=p[d],S=p[g];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++d,p[d]=S)}p.length=d+1;for(let g=0,x=p.length;g<x;g++){let S=p[g];s.bufferSubData(h,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}l(n,"updateBuffer");function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}l(i,"get");function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}l(r,"remove");function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,e(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,c),h.version=o.version}}return l(a,"update"),{get:i,remove:r,update:a}}l(L0,"WebGLAttributes");var D0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,N0=`#ifdef USE_ALPHAHASH
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
#endif`,U0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,F0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,B0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,z0=`#ifdef USE_AOMAP
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
#endif`,k0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,V0=`#ifdef USE_BATCHING
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
#endif`,G0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,H0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,W0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,X0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,q0=`#ifdef USE_IRIDESCENCE
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
#endif`,Y0=`#ifdef USE_BUMPMAP
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
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,J0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,j0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,t_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,e_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,n_=`#define PI 3.141592653589793
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
} // validated`,i_=`vec3 transformedNormal = objectNormal;
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
#endif`,s_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,r_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,a_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,l_="gl_FragColor = linearToOutputTexel( gl_FragColor );",c_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,h_=`#ifdef USE_ENVMAP
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
#endif`,u_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,d_=`#ifdef USE_ENVMAP
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
#endif`,f_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,p_=`#ifdef USE_ENVMAP
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
#endif`,m_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,g_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,__=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,x_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,v_=`#ifdef USE_GRADIENTMAP
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
}`,y_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,M_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,b_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,S_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,w_=`#ifdef USE_ENVMAP
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
#endif`,E_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,T_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,A_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,C_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,R_=`PhysicalMaterial material;
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
#endif`,P_=`uniform sampler2D dfgLUT;
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
}`,I_=`
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
#endif`,L_=`#if defined( RE_IndirectDiffuse )
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
#endif`,D_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,N_=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,U_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,F_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,z_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,k_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,V_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,G_=`#if defined( USE_POINTS_UV )
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
#endif`,H_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,W_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,X_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,q_=`#if defined( USE_MORPHCOLORS )
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
#endif`,Y_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z_=`#ifdef USE_MORPHTARGETS
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
#endif`,J_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,K_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Q_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ex=`#ifdef USE_NORMALMAP
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
#endif`,nx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ix=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ax=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ox=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ux=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,px=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_x=`float getShadowMask() {
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
}`,xx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vx=`#ifdef USE_SKINNING
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
#endif`,yx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mx=`#ifdef USE_SKINNING
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
#endif`,bx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ex=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tx=`#ifdef USE_TRANSMISSION
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
#endif`,Ax=`#ifdef USE_TRANSMISSION
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
#endif`,Cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ix=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Lx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dx=`uniform sampler2D t2D;
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
}`,Nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ux=`uniform float backgroundBlurriness;
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
}`,Fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ox=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bx=`#include <common>
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
}`,zx=`#if DEPTH_PACKING == 3200
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
}`,kx=`#define DISTANCE
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
}`,Vx=`#define DISTANCE
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
}`,Gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wx=`uniform float scale;
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
}`,Xx=`uniform vec3 diffuse;
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
}`,qx=`#include <common>
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
}`,Yx=`uniform vec3 diffuse;
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
}`,Zx=`#define LAMBERT
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
}`,Jx=`#define LAMBERT
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
}`,$x=`#define MATCAP
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
}`,Kx=`#define MATCAP
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
}`,Qx=`#define NORMAL
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
}`,jx=`#define NORMAL
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
}`,tv=`#define PHONG
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
}`,ev=`#define PHONG
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
}`,nv=`#define STANDARD
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
}`,iv=`#define STANDARD
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
}`,sv=`#define TOON
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
}`,rv=`#define TOON
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
}`,av=`uniform float size;
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
}`,ov=`uniform vec3 diffuse;
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
}`,lv=`#include <common>
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
}`,cv=`uniform vec3 color;
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
}`,hv=`uniform float rotation;
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
}`,uv=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:D0,alphahash_pars_fragment:N0,alphamap_fragment:U0,alphamap_pars_fragment:F0,alphatest_fragment:O0,alphatest_pars_fragment:B0,aomap_fragment:z0,aomap_pars_fragment:k0,batching_pars_vertex:V0,batching_vertex:G0,begin_vertex:H0,beginnormal_vertex:W0,bsdfs:X0,iridescence_fragment:q0,bumpmap_pars_fragment:Y0,clipping_planes_fragment:Z0,clipping_planes_pars_fragment:J0,clipping_planes_pars_vertex:$0,clipping_planes_vertex:K0,color_fragment:Q0,color_pars_fragment:j0,color_pars_vertex:t_,color_vertex:e_,common:n_,defaultnormal_vertex:i_,displacementmap_pars_vertex:s_,displacementmap_vertex:r_,emissivemap_fragment:a_,emissivemap_pars_fragment:o_,colorspace_fragment:l_,colorspace_pars_fragment:c_,envmap_fragment:h_,envmap_common_pars_fragment:u_,envmap_pars_fragment:d_,envmap_pars_vertex:f_,envmap_physical_pars_fragment:w_,envmap_vertex:p_,fog_vertex:m_,fog_pars_vertex:g_,fog_fragment:__,fog_pars_fragment:x_,gradientmap_pars_fragment:v_,lightmap_pars_fragment:y_,lights_lambert_fragment:M_,lights_lambert_pars_fragment:b_,lights_pars_begin:S_,lights_toon_fragment:E_,lights_toon_pars_fragment:T_,lights_phong_fragment:A_,lights_phong_pars_fragment:C_,lights_physical_fragment:R_,lights_physical_pars_fragment:P_,lights_fragment_begin:I_,lights_fragment_maps:L_,lights_fragment_end:D_,lightprobes_pars_fragment:N_,logdepthbuf_fragment:U_,logdepthbuf_pars_fragment:F_,logdepthbuf_pars_vertex:O_,logdepthbuf_vertex:B_,map_fragment:z_,map_pars_fragment:k_,map_particle_fragment:V_,map_particle_pars_fragment:G_,metalnessmap_fragment:H_,metalnessmap_pars_fragment:W_,morphinstance_vertex:X_,morphcolor_vertex:q_,morphnormal_vertex:Y_,morphtarget_pars_vertex:Z_,morphtarget_vertex:J_,normal_fragment_begin:$_,normal_fragment_maps:K_,normal_pars_fragment:Q_,normal_pars_vertex:j_,normal_vertex:tx,normalmap_pars_fragment:ex,clearcoat_normal_fragment_begin:nx,clearcoat_normal_fragment_maps:ix,clearcoat_pars_fragment:sx,iridescence_pars_fragment:rx,opaque_fragment:ax,packing:ox,premultiplied_alpha_fragment:lx,project_vertex:cx,dithering_fragment:hx,dithering_pars_fragment:ux,roughnessmap_fragment:dx,roughnessmap_pars_fragment:fx,shadowmap_pars_fragment:px,shadowmap_pars_vertex:mx,shadowmap_vertex:gx,shadowmask_pars_fragment:_x,skinbase_vertex:xx,skinning_pars_vertex:vx,skinning_vertex:yx,skinnormal_vertex:Mx,specularmap_fragment:bx,specularmap_pars_fragment:Sx,tonemapping_fragment:wx,tonemapping_pars_fragment:Ex,transmission_fragment:Tx,transmission_pars_fragment:Ax,uv_pars_fragment:Cx,uv_pars_vertex:Rx,uv_vertex:Px,worldpos_vertex:Ix,background_vert:Lx,background_frag:Dx,backgroundCube_vert:Nx,backgroundCube_frag:Ux,cube_vert:Fx,cube_frag:Ox,depth_vert:Bx,depth_frag:zx,distance_vert:kx,distance_frag:Vx,equirect_vert:Gx,equirect_frag:Hx,linedashed_vert:Wx,linedashed_frag:Xx,meshbasic_vert:qx,meshbasic_frag:Yx,meshlambert_vert:Zx,meshlambert_frag:Jx,meshmatcap_vert:$x,meshmatcap_frag:Kx,meshnormal_vert:Qx,meshnormal_frag:jx,meshphong_vert:tv,meshphong_frag:ev,meshphysical_vert:nv,meshphysical_frag:iv,meshtoon_vert:sv,meshtoon_frag:rv,points_vert:av,points_frag:ov,shadow_vert:lv,shadow_frag:cv,sprite_vert:hv,sprite_frag:uv},xt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Zn={basic:{uniforms:He([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:He([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:He([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:He([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:He([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:He([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:He([xt.points,xt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:He([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:He([xt.common,xt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:He([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:He([xt.sprite,xt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distance:{uniforms:He([xt.common,xt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distance_vert,fragmentShader:Yt.distance_frag},shadow:{uniforms:He([xt.lights,xt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Zn.physical={uniforms:He([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Vt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var vc={r:0,b:0,g:0},dv=new ue,gm=new Vt;gm.set(-1,0,0,0,1,0,0,0,1);function fv(s,t,e,n,i,r){let a=new Ut(0),o=i===!0?0:1,c,h,u=null,p=0,d=null;function g(E){let R=E.isScene===!0?E.background:null;if(R&&R.isTexture){let T=E.backgroundBlurriness>0;R=t.get(R,T)}return R}l(g,"getBackground");function x(E){let R=!1,T=g(E);T===null?_(a,o):T&&T.isColor&&(_(T,1),R=!0);let C=s.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}l(x,"render");function S(E,R){let T=g(R);T&&T.isCubeTexture?(h===void 0&&(h=new oe(new pi(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:_s(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,w,f){this.matrixWorld.copyPosition(f.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:l(function(){return this.uniforms.envMap.value},"get")}),n.update(h)),h.material.uniforms.envMap.value=T,h.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(dv.makeRotationFromEuler(R.backgroundRotation)).transpose(),T.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(gm),h.material.toneMapped=Kt.getTransfer(T.colorSpace)!==ie,(u!==T||p!==T.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=T,p=T.version,d=s.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new oe(new Bi(2,2),new an({name:"BackgroundMaterial",uniforms:_s(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:l(function(){return this.uniforms.t2D.value},"get")}),n.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(T.colorSpace)!==ie,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||p!==T.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=T,p=T.version,d=s.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}l(S,"addToRenderList");function _(E,R){E.getRGB(vc,iu(s)),e.buffers.color.setClear(vc.r,vc.g,vc.b,R,r)}l(_,"setClear");function m(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return l(m,"dispose"),{getClearColor:l(function(){return a},"getClearColor"),setClearColor:l(function(E,R=1){a.set(E),o=R,_(a,o)},"setClearColor"),getClearAlpha:l(function(){return o},"getClearAlpha"),setClearAlpha:l(function(E){o=E,_(a,o)},"setClearAlpha"),render:x,addToRenderList:S,dispose:m}}l(fv,"WebGLBackground");function pv(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(D,F,B,I,z){let Z=!1,G=p(D,I,B,F);r!==G&&(r=G,h(r.object)),Z=g(D,I,B,z),Z&&x(D,I,B,z),z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,T(D,F,B,I),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}l(o,"setup");function c(){return s.createVertexArray()}l(c,"createVertexArrayObject");function h(D){return s.bindVertexArray(D)}l(h,"bindVertexArrayObject");function u(D){return s.deleteVertexArray(D)}l(u,"deleteVertexArrayObject");function p(D,F,B,I){let z=I.wireframe===!0,Z=n[F.id];Z===void 0&&(Z={},n[F.id]=Z);let G=D.isInstancedMesh===!0?D.id:0,st=Z[G];st===void 0&&(st={},Z[G]=st);let q=st[B.id];q===void 0&&(q={},st[B.id]=q);let et=q[z];return et===void 0&&(et=d(c()),q[z]=et),et}l(p,"getBindingState");function d(D){let F=[],B=[],I=[];for(let z=0;z<e;z++)F[z]=0,B[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:B,attributeDivisors:I,object:D,attributes:{},index:null}}l(d,"createBindingState");function g(D,F,B,I){let z=r.attributes,Z=F.attributes,G=0,st=B.getAttributes();for(let q in st)if(st[q].location>=0){let it=z[q],wt=Z[q];if(wt===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(wt=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(wt=D.instanceColor)),it===void 0||it.attribute!==wt||wt&&it.data!==wt.data)return!0;G++}return r.attributesNum!==G||r.index!==I}l(g,"needsUpdate");function x(D,F,B,I){let z={},Z=F.attributes,G=0,st=B.getAttributes();for(let q in st)if(st[q].location>=0){let it=Z[q];it===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(it=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(it=D.instanceColor));let wt={};wt.attribute=it,it&&it.data&&(wt.data=it.data),z[q]=wt,G++}r.attributes=z,r.attributesNum=G,r.index=I}l(x,"saveCache");function S(){let D=r.newAttributes;for(let F=0,B=D.length;F<B;F++)D[F]=0}l(S,"initAttributes");function _(D){m(D,0)}l(_,"enableAttribute");function m(D,F){let B=r.newAttributes,I=r.enabledAttributes,z=r.attributeDivisors;B[D]=1,I[D]===0&&(s.enableVertexAttribArray(D),I[D]=1),z[D]!==F&&(s.vertexAttribDivisor(D,F),z[D]=F)}l(m,"enableAttributeAndDivisor");function E(){let D=r.newAttributes,F=r.enabledAttributes;for(let B=0,I=F.length;B<I;B++)F[B]!==D[B]&&(s.disableVertexAttribArray(B),F[B]=0)}l(E,"disableUnusedAttributes");function R(D,F,B,I,z,Z,G){G===!0?s.vertexAttribIPointer(D,F,B,z,Z):s.vertexAttribPointer(D,F,B,I,z,Z)}l(R,"vertexAttribPointer");function T(D,F,B,I){S();let z=I.attributes,Z=B.getAttributes(),G=F.defaultAttributeValues;for(let st in Z){let q=Z[st];if(q.location>=0){let et=z[st];if(et===void 0&&(st==="instanceMatrix"&&D.instanceMatrix&&(et=D.instanceMatrix),st==="instanceColor"&&D.instanceColor&&(et=D.instanceColor)),et!==void 0){let it=et.normalized,wt=et.itemSize,zt=t.get(et);if(zt===void 0)continue;let Q=zt.buffer,vt=zt.type,Et=zt.bytesPerElement,It=vt===s.INT||vt===s.UNSIGNED_INT||et.gpuType===Ul;if(et.isInterleavedBufferAttribute){let yt=et.data,kt=yt.isInterleavedBuffer===!0?yt.stride:yt.itemSize,de=et.offset;if(yt.isInstancedInterleavedBuffer||yt.isInstancedBufferAttribute){for(let Dt=0;Dt<q.locationSize;Dt++)m(q.location+Dt,yt.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Dt=0;Dt<q.locationSize;Dt++)_(q.location+Dt);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let Dt=0;Dt<q.locationSize;Dt++)R(q.location+Dt,wt/q.locationSize,vt,it,kt*Et,(de+wt/q.locationSize*Dt)*Et,It)}else{if(et.isInstancedBufferAttribute){for(let yt=0;yt<q.locationSize;yt++)m(q.location+yt,et.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let yt=0;yt<q.locationSize;yt++)_(q.location+yt);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let yt=0;yt<q.locationSize;yt++)R(q.location+yt,wt/q.locationSize,vt,it,wt*Et,wt/q.locationSize*yt*Et,It)}}else if(G!==void 0){let it=G[st];if(it!==void 0)switch(it.length){case 2:s.vertexAttrib2fv(q.location,it);break;case 3:s.vertexAttrib3fv(q.location,it);break;case 4:s.vertexAttrib4fv(q.location,it);break;default:s.vertexAttrib1fv(q.location,it)}}}}E()}l(T,"setupVertexAttributes");function C(){N();for(let D in n){let F=n[D];for(let B in F){let I=F[B];for(let z in I){let Z=I[z];for(let G in Z)u(Z[G].object),delete Z[G];delete I[z]}}delete n[D]}}l(C,"dispose");function w(D){if(n[D.id]===void 0)return;let F=n[D.id];for(let B in F){let I=F[B];for(let z in I){let Z=I[z];for(let G in Z)u(Z[G].object),delete Z[G];delete I[z]}}delete n[D.id]}l(w,"releaseStatesOfGeometry");function f(D){for(let F in n){let B=n[F];for(let I in B){let z=B[I];if(z[D.id]===void 0)continue;let Z=z[D.id];for(let G in Z)u(Z[G].object),delete Z[G];delete z[D.id]}}}l(f,"releaseStatesOfProgram");function M(D){for(let F in n){let B=n[F],I=D.isInstancedMesh===!0?D.id:0,z=B[I];if(z!==void 0){for(let Z in z){let G=z[Z];for(let st in G)u(G[st].object),delete G[st];delete z[Z]}delete B[I],Object.keys(B).length===0&&delete n[F]}}}l(M,"releaseStatesOfObject");function N(){P(),a=!0,r!==i&&(r=i,h(r.object))}l(N,"reset");function P(){i.geometry=null,i.program=null,i.wireframe=!1}return l(P,"resetDefaultState"),{setup:o,reset:N,resetDefaultState:P,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfObject:M,releaseStatesOfProgram:f,initAttributes:S,enableAttribute:_,disableUnusedAttributes:E}}l(pv,"WebGLBindingStates");function mv(s,t,e){let n;function i(c){n=c}l(i,"setMode");function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}l(r,"render");function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}l(a,"renderInstances");function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}l(o,"renderMultiDraw"),this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}l(mv,"WebGLBufferRenderer");function gv(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let f=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(f.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}l(r,"getMaxAnisotropy");function a(f){return!(f!==Nn&&n.convert(f)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}l(a,"textureFormatReadable");function o(f){let M=f===ln&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(f!==Qe&&f!==Dn&&!M&&n.convert(f)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}l(o,"textureTypeReadable");function c(f){if(f==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";f="mediump"}return f==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}l(c,"getMaxPrecision");let h=e.precision!==void 0?e.precision:"highp",u=c(h);u!==h&&(Ft("WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&p===!1;e.reversedDepthBuffer===!0&&p===!1&&Ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&p===!0&&Ft("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let g=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),R=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:g,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:E,maxVaryings:R,maxFragmentUniforms:T,maxSamples:C,samples:w}}l(gv,"WebGLCapabilities");function _v(s){let t=this,e=null,n=0,i=!1,r=!1,a=new In,o=new Vt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){let g=p.length!==0||d||n!==0||i;return i=d,n=p.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){e=u(p,d,0)},this.setState=function(p,d,g){let x=p.clippingPlanes,S=p.clipIntersection,_=p.clipShadows,m=s.get(p);if(!i||x===null||x.length===0||r&&!_)r?u(null):h();else{let E=r?0:n,R=E*4,T=m.clippingState||null;c.value=T,T=u(x,d,R,g);for(let C=0;C!==R;++C)T[C]=e[C];m.clippingState=T,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=E}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}l(h,"resetGlobalState");function u(p,d,g,x){let S=p!==null?p.length:0,_=null;if(S!==0){if(_=c.value,x!==!0||_===null){let m=g+S*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(_===null||_.length<m)&&(_=new Float32Array(m));for(let R=0,T=g;R!==S;++R,T+=4)a.copy(p[R]).applyMatrix4(E,o),a.normal.toArray(_,T),_[T+3]=a.constant}c.value=_,c.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,_}l(u,"projectPlanes")}l(_v,"WebGLClipping");var Rd=class Rd extends rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new sa(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new pi(5,5,5),r=new an({name:"CubemapFromEquirect",uniforms:_s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:ds});r.uniforms.tEquirect.value=e;let a=new oe(i,r),o=e.minFilter;return e.minFilter===mi&&(e.minFilter=De),new cr(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}};l(Rd,"WebGLCubeRenderTarget");var Aa=Rd,Zp=256,xv=3,vv=20,_m=256,xm=16,yv=3,Mv=new H,bv=new Ut,Sc=class Sc{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new cr(1,10,null),this._boxMesh=new oe(new pi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:a=256,position:o=Mv}=r,c=this._renderer;this._setSize(a);let h=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let p=c.autoClear,d=c.autoClearColor,g=c.autoClearDepth,x=c.autoClearStencil,S=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,S===null&&(t.background=c.getClearColor(bv));let _=new cr(n,i,u);return _.position.copy(o),_.update(c,t),c.autoClear=p,c.autoClearColor=d,c.autoClearDepth=g,c.autoClearStencil=x,t.background=S,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(h,e)),this._applyPMREM(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$p(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Zp,Vp(t))}_fromTexture(t,e){t.mapping===ps||t.mapping===dr?this._setSize(t.image.length===0?Zp:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Jp(t,!1,!1),n=Math.log2(t)-xv;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Jp(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ps||t.mapping===dr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kp()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=$p()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Sv(),this._integrationMaterial=wv());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/xm);for(let a=0;a<=n;a++){let o=Sc.lodToRoughness(a,n);if(a>n-yv)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let c=o>0?Math.log2(e)+.5*Math.log2(6/(_m*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=c,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Ev());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}};l(Sc,"PMREMGenerator");var Mc=Sc;function Jp(s,t,e){return new Aa(s,{minFilter:mi,generateMipmaps:t,type:ln,colorSpace:Yr,depthBuffer:e})}l(Jp,"_createRenderTarget");function Ca(s,t,e){return new an({name:s,uniforms:t,vertexShader:Yt.cube_vert,fragmentShader:e,side:Ze,blending:ds,depthTest:!1,depthWrite:!1})}l(Ca,"_getMaterial");function Sv(){return Ca("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${_m}u

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
	`)}l(Sv,"_getGGXMaterial");function wv(){return Ca("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:xm}},`

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
	`)}l(wv,"_getIntegrationMaterial");function Ev(){return Ca("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${vv}
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
	`)}l(Ev,"_getBlurMaterial");function $p(){return Ca("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}l($p,"_getEquirectMaterial");function Kp(){return Ca("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}l(Kp,"_getCubemapMaterial");function Tv(s){let t=new WeakMap,e=new WeakMap,n=null;function i(d,g=!1){return d==null?null:g?a(d):r(d)}l(i,"get");function r(d){if(d&&d.isTexture){let g=d.mapping;if(g===Ll||g===Dl)if(t.has(d)){let x=t.get(d).texture;return o(x,d.mapping)}else{let x=d.image;if(x&&x.height>0){let S=new Aa(x.height);return S.fromEquirectangularTexture(s,d),t.set(d,S),d.addEventListener("dispose",h),o(S.texture,d.mapping)}else return null}}return d}l(r,"getCube");function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let g=d.mapping,x=g===Ll||g===Dl,S=g===ps||g===dr;if(x||S){let _=e.get(d),m=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new Mc(s)),_=x?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{let E=d.image;return x&&E&&E.height>0||S&&E&&c(E)?(n===null&&(n=new Mc(s)),_=x?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",u),_.texture):null}}}return d}l(a,"getPMREM");function o(d,g){return g===Ll?d.mapping=ps:g===Dl&&(d.mapping=dr),d}l(o,"mapTextureMapping");function c(d){let g=0,x=6;for(let S=0;S<x;S++)d[S]!==void 0&&g++;return g===x}l(c,"isCubeTextureComplete");function h(d){let g=d.target;g.removeEventListener("dispose",h);let x=t.get(g);x!==void 0&&(t.delete(g),x.dispose())}l(h,"onCubemapDispose");function u(d){let g=d.target;g.removeEventListener("dispose",u);let x=e.get(g);x!==void 0&&(e.delete(g),x.dispose())}l(u,"onPMREMDispose");function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return l(p,"dispose"),{get:i,dispose:p}}l(Tv,"WebGLEnvironments");function Av(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return l(e,"getExtension"),{has:l(function(n){return e(n)!==null},"has"),init:l(function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},"init"),get:l(function(n){let i=e(n);return i===null&&Wr("WebGLRenderer: "+n+" extension not supported."),i},"get")}}l(Av,"WebGLExtensions");function Cv(s,t,e,n){let i={},r=new WeakMap,a=new FinalizationRegistry(x=>delete i[x]);function o(x){c(x.target)}l(o,"onGeometryDispose");function c(x){x.index!==null&&t.remove(x.index);for(let _ in x.attributes)t.remove(x.attributes[_]);x.removeEventListener("dispose",o),delete i[x.id],a.unregister(x);let S=r.get(x);S&&(t.remove(S),r.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,e.memory.geometries--}l(c,"destroyGeometry");function h(x,S){return i[S.id]!==void 0||(S.addEventListener("dispose",o),i[S.id]=new WeakRef(S),a.register(S,S.id,S),e.memory.geometries++),S}l(h,"get");function u(x){let S=x.attributes;for(let _ in S)t.update(S[_],s.ARRAY_BUFFER)}l(u,"update");function p(x){let S=x.index,_=x.attributes.position,m=0;if(_===void 0)return;let E=S!==null?S.array.length:_.array.length/3-1,R=_.count>=65535?na:ea,T=new R(Math.ceil(E/3)*6,1),C=T.array;if(S!==null){let f=S.array;m=S.version;for(let M=0,N=0;M<E;M+=3){let P=f[M+0],D=f[M+1],F=f[M+2];C[N++]=P,C[N++]=D,C[N++]=D,C[N++]=F,C[N++]=F,C[N++]=P}}else{m=_.version;for(let f=0,M=0;f<E;f+=3){let N=f+0,P=f+1,D=f+2;C[M++]=N,C[M++]=P,C[M++]=P,C[M++]=D,C[M++]=D,C[M++]=N}}T.version=m;let w=r.get(x);w&&t.remove(w),r.set(x,T)}l(p,"updateWireframeAttribute");function d(x){let S=r.get(x);if(S){let _=x.index;_!==null&&S.version<_.version&&p(x)}else p(x);return r.get(x)}l(d,"getWireframeAttribute");function g(){for(let x in i){let S=i[x].deref();S!==void 0&&c(S)}}return l(g,"dispose"),{get:h,update:u,getWireframeAttribute:d,dispose:g}}l(Cv,"WebGLGeometries");function Rv(s,t,e){let n;function i(p){n=p}l(i,"setMode");let r,a;function o(p){r=p.type,a=p.bytesPerElement}l(o,"setIndex");function c(p,d){s.drawElements(n,d,r,p*a),e.update(d,n,1)}l(c,"render");function h(p,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,p*a,g),e.update(d,n,g))}l(h,"renderInstances");function u(p,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,g);let S=0;for(let _=0;_<g;_++)S+=d[_];e.update(S,n,1)}l(u,"renderMultiDraw"),this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=u}l(Rv,"WebGLIndexedBufferRenderer");function Pv(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:Bt("WebGLInfo: Unknown draw mode:",a);break}}l(n,"update");function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return l(i,"reset"),{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}l(Pv,"WebGLInfo");function Iv(s,t,e){let n=new WeakMap,i=new me;function r(a,o,c){let h=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==p){let P=function(){M.dispose(),n.delete(o),o.removeEventListener("dispose",P)};var g=P;l(P,"disposeTexture"),d!==void 0&&d.texture.dispose();let x=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],R=o.morphAttributes.color||[],T=0;x===!0&&(T=1),S===!0&&(T=2),_===!0&&(T=3);let C=o.attributes.position.count*T,w=1;C>t.maxTextureSize&&(w=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);let f=new Float32Array(C*w*4*p),M=new Kr(f,C,w,p);M.type=Dn,M.needsUpdate=!0;let N=T*4;for(let D=0;D<p;D++){let F=m[D],B=E[D],I=R[D],z=C*w*4*D;for(let Z=0;Z<F.count;Z++){let G=Z*N;x===!0&&(i.fromBufferAttribute(F,Z),f[z+G+0]=i.x,f[z+G+1]=i.y,f[z+G+2]=i.z,f[z+G+3]=0),S===!0&&(i.fromBufferAttribute(B,Z),f[z+G+4]=i.x,f[z+G+5]=i.y,f[z+G+6]=i.z,f[z+G+7]=0),_===!0&&(i.fromBufferAttribute(I,Z),f[z+G+8]=i.x,f[z+G+9]=i.y,f[z+G+10]=i.z,f[z+G+11]=I.itemSize===4?i.w:1)}}d={count:p,texture:M,size:new Ot(C,w)},n.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let x=0;for(let _=0;_<h.length;_++)x+=h[_];let S=o.morphTargetsRelative?1:1-x;c.getUniforms().setValue(s,"morphTargetBaseInfluence",S),c.getUniforms().setValue(s,"morphTargetInfluences",h)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return l(r,"update"),{update:r}}l(Iv,"WebGLMorphtargets");function Lv(s,t,e,n,i){let r=new WeakMap;function a(h){let u=i.render.frame,p=h.geometry,d=t.get(h,p);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),r.get(h)!==u&&(e.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,s.ARRAY_BUFFER),r.set(h,u))),h.isSkinnedMesh){let g=h.skeleton;r.get(g)!==u&&(g.update(),r.set(g,u))}return d}l(a,"update");function o(){r=new WeakMap}l(o,"dispose");function c(h){let u=h.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return l(c,"onInstancedMeshDispose"),{update:a,dispose:o}}l(Lv,"WebGLObjects");var Dv={[Bh]:"LINEAR_TONE_MAPPING",[zh]:"REINHARD_TONE_MAPPING",[kh]:"CINEON_TONE_MAPPING",[ga]:"ACES_FILMIC_TONE_MAPPING",[Gh]:"AGX_TONE_MAPPING",[Hh]:"NEUTRAL_TONE_MAPPING",[Vh]:"CUSTOM_TONE_MAPPING"};function Nv(s,t,e,n,i,r){let a=new rn(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,h=null,u=new Ke;u.setAttribute("position",new ye([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new ye([0,2,0,0,2,0],2));let p=new tl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new oe(u,p),g=new fa(-1,1,1,-1,0,1),x=null,S=null,_=!1,m,E=null,R=[],T=!1;this.setSize=function(C,w){a.setSize(C,w),o!==null&&o.setSize(C,w),c!==null&&c.setSize(C,w);for(let f=0;f<R.length;f++){let M=R[f];M.setSize&&M.setSize(C,w)}},this.setEffects=function(C){R=C,T=R.length>0&&R[0].isRenderPass===!0;let w=a.width,f=a.height;R.length>0&&o===null&&(o=new rn(w,f,{type:ln,depthBuffer:!1,stencilBuffer:!1}),c=new rn(w,f,{type:ln,depthBuffer:!1,stencilBuffer:!1}));let M=i===!0&&R.some(N=>N.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&h===null&&(h=new fi(w,f),r===!0&&(h.format=gi,h.type=ms)),a.dispose(),a.depthTexture=M?h:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let N=0;N<R.length;N++){let P=R[N];P.setSize&&P.setSize(w,f),M&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(h)}},this.begin=function(C,w){if(_||C.toneMapping===Xn&&R.length===0)return!1;if(E=w,w!==null){let f=w.width,M=w.height;(a.width!==f||a.height!==M)&&this.setSize(f,M)}return T===!1&&C.setRenderTarget(a),m=C.toneMapping,C.toneMapping=Xn,!0},this.hasRenderPass=function(){return T},this.end=function(C,w){C.toneMapping=m,_=!0;let f=a,M=o;for(let N=0;N<R.length;N++){let P=R[N];P.enabled!==!1&&(P.render(C,M,f,w),P.needsSwap!==!1&&(f=M,M=M===o?c:o))}if(x!==C.outputColorSpace||S!==C.toneMapping){x=C.outputColorSpace,S=C.toneMapping,p.defines={},Kt.getTransfer(x)===ie&&(p.defines.SRGB_TRANSFER="");let N=Dv[S];N&&(p.defines[N]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=f.texture,C.setRenderTarget(E),C.render(d,g),E=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),p.dispose()}}l(Nv,"WebGLOutput");var vm=new Ye,ym=new fi(1,1),Mm=new aa(1),bm=new Kr,Sm=new Jo,wm=new sa,Qp=[],jp=[],tm=new Float32Array(16),em=new Float32Array(9),nm=new Float32Array(4);function mr(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Qp[i];if(r===void 0&&(r=new Float32Array(i),Qp[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}l(mr,"flatten");function Ee(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}l(Ee,"arraysEqual");function Te(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}l(Te,"copyArray");function wc(s,t){let e=jp[t];e===void 0&&(e=new Int32Array(t),jp[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}l(wc,"allocTexUnits");function Uv(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}l(Uv,"setValueV1f");function Fv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2fv(this.addr,t),Te(e,t)}}l(Fv,"setValueV2f");function Ov(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;s.uniform3fv(this.addr,t),Te(e,t)}}l(Ov,"setValueV3f");function Bv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4fv(this.addr,t),Te(e,t)}}l(Bv,"setValueV4f");function zv(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;nm.set(n),s.uniformMatrix2fv(this.addr,!1,nm),Te(e,n)}}l(zv,"setValueM2");function kv(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;em.set(n),s.uniformMatrix3fv(this.addr,!1,em),Te(e,n)}}l(kv,"setValueM3");function Vv(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;tm.set(n),s.uniformMatrix4fv(this.addr,!1,tm),Te(e,n)}}l(Vv,"setValueM4");function Gv(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}l(Gv,"setValueV1i");function Hv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2iv(this.addr,t),Te(e,t)}}l(Hv,"setValueV2i");function Wv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;s.uniform3iv(this.addr,t),Te(e,t)}}l(Wv,"setValueV3i");function Xv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4iv(this.addr,t),Te(e,t)}}l(Xv,"setValueV4i");function qv(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}l(qv,"setValueV1ui");function Yv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2uiv(this.addr,t),Te(e,t)}}l(Yv,"setValueV2ui");function Zv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;s.uniform3uiv(this.addr,t),Te(e,t)}}l(Zv,"setValueV3ui");function Jv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4uiv(this.addr,t),Te(e,t)}}l(Jv,"setValueV4ui");function Ec(s){return s.version===0&&(s.compareFunction=tu,s.needsUpdate=!0),s}l(Ec,"initShadowTexture");function $v(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Ec(ym):r=vm,e.setTexture2D(t||r,i)}l($v,"setValueT1");function Kv(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Sm,i)}l(Kv,"setValueT3D1");function Qv(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Ec(Mm):r=wm,e.setTextureCube(t||r,i)}l(Qv,"setValueT6");function jv(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||bm,i)}l(jv,"setValueT2DArray1");function ty(s){switch(s){case 5126:return Uv;case 35664:return Fv;case 35665:return Ov;case 35666:return Bv;case 35674:return zv;case 35675:return kv;case 35676:return Vv;case 5124:case 35670:return Gv;case 35667:case 35671:return Hv;case 35668:case 35672:return Wv;case 35669:case 35673:return Xv;case 5125:return qv;case 36294:return Yv;case 36295:return Zv;case 36296:return Jv;case 35678:case 36198:case 36298:case 36306:case 35682:return $v;case 35679:case 36299:case 36307:return Kv;case 35680:case 36300:case 36308:case 36293:return Qv;case 36289:case 36303:case 36311:case 36292:return jv}}l(ty,"getSingularSetter");function ey(s,t){s.uniform1fv(this.addr,t)}l(ey,"setValueV1fArray");function ny(s,t){let e=mr(t,this.size,2);s.uniform2fv(this.addr,e)}l(ny,"setValueV2fArray");function iy(s,t){let e=mr(t,this.size,3);s.uniform3fv(this.addr,e)}l(iy,"setValueV3fArray");function sy(s,t){let e=mr(t,this.size,4);s.uniform4fv(this.addr,e)}l(sy,"setValueV4fArray");function ry(s,t){let e=mr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}l(ry,"setValueM2Array");function ay(s,t){let e=mr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}l(ay,"setValueM3Array");function oy(s,t){let e=mr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}l(oy,"setValueM4Array");function ly(s,t){s.uniform1iv(this.addr,t)}l(ly,"setValueV1iArray");function cy(s,t){s.uniform2iv(this.addr,t)}l(cy,"setValueV2iArray");function hy(s,t){s.uniform3iv(this.addr,t)}l(hy,"setValueV3iArray");function uy(s,t){s.uniform4iv(this.addr,t)}l(uy,"setValueV4iArray");function dy(s,t){s.uniform1uiv(this.addr,t)}l(dy,"setValueV1uiArray");function fy(s,t){s.uniform2uiv(this.addr,t)}l(fy,"setValueV2uiArray");function py(s,t){s.uniform3uiv(this.addr,t)}l(py,"setValueV3uiArray");function my(s,t){s.uniform4uiv(this.addr,t)}l(my,"setValueV4uiArray");function gy(s,t,e){let n=this.cache,i=t.length,r=wc(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Ec(ym):a=vm;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}l(gy,"setValueT1Array");function _y(s,t,e){let n=this.cache,i=t.length,r=wc(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Sm,r[a])}l(_y,"setValueT3DArray");function xy(s,t,e){let n=this.cache,i=t.length,r=wc(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=Ec(Mm):a=wm;for(let o=0;o!==i;++o)e.setTextureCube(t[o]||a,r[o])}l(xy,"setValueT6Array");function vy(s,t,e){let n=this.cache,i=t.length,r=wc(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||bm,r[a])}l(vy,"setValueT2DArrayArray");function yy(s){switch(s){case 5126:return ey;case 35664:return ny;case 35665:return iy;case 35666:return sy;case 35674:return ry;case 35675:return ay;case 35676:return oy;case 5124:case 35670:return ly;case 35667:case 35671:return cy;case 35668:case 35672:return hy;case 35669:case 35673:return uy;case 5125:return dy;case 36294:return fy;case 36295:return py;case 36296:return my;case 35678:case 36198:case 36298:case 36306:case 35682:return gy;case 35679:case 36299:case 36307:return _y;case 35680:case 36300:case 36308:case 36293:return xy;case 36289:case 36303:case 36311:case 36292:return vy}}l(yy,"getPureArraySetter");var Pd=class Pd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ty(e.type)}};l(Pd,"SingleUniform");var Md=Pd,Id=class Id{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=yy(e.type)}};l(Id,"PureArrayUniform");var bd=Id,Ld=class Ld{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}};l(Ld,"StructuredUniform");var Sd=Ld,vd=/(\w+)(\])?(\[|\.)?/g;function im(s,t){s.seq.push(t),s.map[t.id]=t}l(im,"addUniform");function My(s,t,e){let n=s.name,i=n.length;for(vd.lastIndex=0;;){let r=vd.exec(n),a=vd.lastIndex,o=r[1],c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===i){im(e,h===void 0?new Md(o,s,t):new bd(o,s,t));break}else{let p=e.map[o];p===void 0&&(p=new Sd(o),im(e,p)),e=p}}}l(My,"parseUniform");var Dd=class Dd{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);My(o,c,this)}let i=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};l(Dd,"WebGLUniforms");var pr=Dd;function sm(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}l(sm,"WebGLShader");var by=37297,Sy=0;function wy(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}l(wy,"handleSource");var rm=new Vt;function Ey(s){Kt._getMatrix(rm,Kt.workingColorSpace,s);let t=`mat3( ${rm.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(s)){case Zr:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return Ft("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}l(Ey,"getEncodingComponents");function am(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+wy(s.getShaderSource(t),o)}else return r}l(am,"getShaderErrors");function Ty(s,t){let e=Ey(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}l(Ty,"getTexelEncodingFunction");var Ay={[Bh]:"Linear",[zh]:"Reinhard",[kh]:"Cineon",[ga]:"ACESFilmic",[Gh]:"AgX",[Hh]:"Neutral",[Vh]:"Custom"};function Cy(s,t){let e=Ay[t];return e===void 0?(Ft("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}l(Cy,"getToneMappingFunction");var yc=new H;function Ry(){Kt.getLuminanceCoefficients(yc);let s=yc.x.toFixed(4),t=yc.y.toFixed(4),e=yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}l(Ry,"getLuminanceFunction");function Py(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ta).join(`
`)}l(Py,"generateVertexExtensions");function Iy(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}l(Iy,"generateDefines");function Ly(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}l(Ly,"fetchAttributeLocations");function Ta(s){return s!==""}l(Ta,"filterEmptyLine");function om(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}l(om,"replaceLightNums");function lm(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}l(lm,"replaceClippingPlaneNums");var Dy=/^[ \t]*#include +<([\w\d./]+)>/gm;function wd(s){return s.replace(Dy,Ny)}l(wd,"resolveIncludes");function Ny(s,t){let e=Yt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return wd(e)}l(Ny,"includeReplacer");var Uy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cm(s){return s.replace(Uy,Fy)}l(cm,"unrollLoops");function Fy(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}l(Fy,"loopReplacer");function hm(s){let t=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}l(hm,"generatePrecision");var Oy={[ma]:"SHADOWMAP_TYPE_PCF",[hr]:"SHADOWMAP_TYPE_VSM"};function By(s){return Oy[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}l(By,"generateShadowMapTypeDefine");var zy={[dr]:"ENVMAP_MODE_REFRACTION"};function ky(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":zy[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}l(ky,"generateEnvMapModeDefine");var Vy={[Oh]:"ENVMAP_BLENDING_MULTIPLY",[Tp]:"ENVMAP_BLENDING_MIX",[Ap]:"ENVMAP_BLENDING_ADD"};function Gy(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Vy[s.combine]||"ENVMAP_BLENDING_NONE"}l(Gy,"generateEnvMapBlendingDefine");function Hy(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=By(e),h=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=ky(e),p=Gy(e),d=Py(e),g=Iy(r),x=i.createProgram(),S,_,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ta).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ta).join(`
`),_.length>0&&(_+=`
`)):(S=[hm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ta).join(`
`),_=[hm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+p:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Xn?Cy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,Ty("linearToOutputTexel",e.outputColorSpace),Ry(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ta).join(`
`)),a=wd(a),a=om(a,e),a=lm(a,e),o=wd(o),o=om(o,e),o=lm(o,e),a=cm(a),o=cm(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,S=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",e.glslVersion===nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let E=m+S+a,R=m+_+o,T=sm(i,i.VERTEX_SHADER,E),C=sm(i,i.FRAGMENT_SHADER,R);i.attachShader(x,T),i.attachShader(x,C),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function w(P){if(s.debug.checkShaderErrors){let D=i.getProgramInfoLog(x)||"",F=i.getShaderInfoLog(T)||"",B=i.getShaderInfoLog(C)||"",I=D.trim(),z=F.trim(),Z=B.trim(),G=!0,st=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,T,C);else{let q=am(i,T,"vertex"),et=am(i,C,"fragment");Bt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+q+`
`+et)}else I!==""?Ft("WebGLProgram: Program Info Log:",I):(z===""||Z==="")&&(st=!1);st&&(P.diagnostics={runnable:G,programLog:I,vertexShader:{log:z,prefix:S},fragmentShader:{log:Z,prefix:_}})}i.deleteShader(T),i.deleteShader(C),f=new pr(i,x),M=Ly(i,x)}l(w,"onFirstUse");let f;this.getUniforms=function(){return f===void 0&&w(this),f};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=i.getProgramParameter(x,by)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Sy++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=C,this}l(Hy,"WebGLProgram");var Wy=0,Nd=class Nd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Td(t),e.set(t,n)),n}};l(Nd,"WebGLShaderCache");var Ed=Nd,Ud=class Ud{constructor(t){this.id=Wy++,this.code=t,this.usedTimes=0}};l(Ud,"WebGLShaderStage");var Td=Ud;function Xy(s){return s===qn||s===ba||s===Sa}l(Xy,"isPackedRGFormat");function qy(s,t,e,n,i,r){let a=new Qr,o=new Ed,c=new Set,h=[],u=new Map,p=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(f){return c.add(f),f===0?"uv":`uv${f}`}l(g,"getChannel");function x(f,M,N,P,D,F){let B=P.fog,I=D.geometry,z=f.isMeshStandardMaterial||f.isMeshLambertMaterial||f.isMeshPhongMaterial?P.environment:null,Z=f.isMeshStandardMaterial||f.isMeshLambertMaterial&&!f.envMap||f.isMeshPhongMaterial&&!f.envMap,G=t.get(f.envMap||z,Z),st=d[f.type],q=n.precision;f.precision!==null&&(q=n.getMaxPrecision(f.precision),q!==f.precision&&Ft("WebGLProgram.getParameters:",f.precision,"not supported, using",q,"instead."));let et=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,it=et!==void 0?et.length:0,wt=0;I.morphAttributes.position!==void 0&&(wt=1),I.morphAttributes.normal!==void 0&&(wt=2),I.morphAttributes.color!==void 0&&(wt=3);let zt,Q,vt,Et;if(st){let Mt=Zn[st];zt=Mt.vertexShader,Q=Mt.fragmentShader}else{zt=f.vertexShader,Q=f.fragmentShader;let Mt=o.getVertexShaderStage(f),se=o.getFragmentShaderStage(f);o.update(f,Mt,se),vt=Mt.id,Et=se.id}let It=s.getRenderTarget(),yt=s.state.buffers.depth.getReversed(),kt=D.isInstancedMesh===!0,de=D.isBatchedMesh===!0,Dt=!!f.map,Zt=!!f.matcap,te=!!G,Xt=te&&G.isPMREMTexture===!0,xe=!!f.aoMap,ge=!!f.lightMap,Se=!!f.bumpMap&&f.wireframe===!1,re=!!f.normalMap,en=!!f.displacementMap,Ce=!!f.emissiveMap,fn=!!f.metalnessMap,pn=!!f.roughnessMap,mn=f.anisotropy>0,O=f.clearcoat>0,gn=f.diffuseRoughness>0,fe=f.dispersion>0,pe=f.retroreflectivity>0,_t=f.iridescence>0,we=f.sheen>0,Nt=f.transmission>0,Gt=mn&&!!f.anisotropyMap,A=O&&!!f.clearcoatMap,v=O&&!!f.clearcoatNormalMap,V=O&&!!f.clearcoatRoughnessMap,at=gn&&!!f.diffuseRoughnessMap,nt=_t&&!!f.iridescenceMap,ht=_t&&!!f.iridescenceThicknessMap,mt=we&&!!f.sheenColorMap,$=we&&!!f.sheenRoughnessMap,j=!!f.specularMap,dt=!!f.specularColorMap,L=!!f.specularIntensityMap,tt=Nt&&!!f.transmissionMap,J=Nt&&!!f.thicknessMap,ft=!!f.gradientMap,lt=!!f.alphaMap,ut=f.alphaTest>0,Pt=!!f.alphaHash,qt=!!f.extensions,ot=Xn;f.toneMapped&&(It===null||It.isXRRenderTarget===!0)&&(ot=s.toneMapping);let Lt=Xt?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Wt={shaderID:st,shaderType:f.type,shaderName:f.name,vertexShader:zt,fragmentShader:Q,defines:f.defines,customVertexShaderID:vt,customFragmentShaderID:Et,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:q,batching:de,batchingColor:de&&D._colorsTexture!==null,instancing:kt,instancingColor:kt&&D.instanceColor!==null,instancingMorph:kt&&D.morphTexture!==null,outputColorSpace:It===null?s.outputColorSpace:It.isXRRenderTarget===!0?It.texture.colorSpace:Kt.workingColorSpace,alphaToCoverage:!!f.alphaToCoverage,map:Dt,matcap:Zt,envMap:te,envMapMode:te&&G.mapping,envMapPMREM:Xt,envMapMaxLod:Xt?Lt.length-1:null,envMapSize:Xt?Lt[0].width:null,aoMap:xe,lightMap:ge,bumpMap:Se,normalMap:re,displacementMap:en,emissiveMap:Ce,normalMapObjectSpace:re&&f.normalMapType===Pp,normalMapTangentSpace:re&&f.normalMapType===_c,packedNormalMap:re&&f.normalMapType===_c&&Xy(f.normalMap.format),metalnessMap:fn,roughnessMap:pn,anisotropy:mn,anisotropyMap:Gt,clearcoat:O,clearcoatMap:A,clearcoatNormalMap:v,clearcoatRoughnessMap:V,diffuseRoughness:gn,diffuseRoughnessMap:at,dispersion:fe,retroreflection:pe,iridescence:_t,iridescenceMap:nt,iridescenceThicknessMap:ht,sheen:we,sheenColorMap:mt,sheenRoughnessMap:$,specularMap:j,specularColorMap:dt,specularIntensityMap:L,transmission:Nt,transmissionMap:tt,thicknessMap:J,gradientMap:ft,opaque:f.transparent===!1&&f.blending===ur&&f.alphaToCoverage===!1,alphaMap:lt,alphaTest:ut,alphaHash:Pt,combine:f.combine,mapUv:Dt&&g(f.map.channel),aoMapUv:xe&&g(f.aoMap.channel),lightMapUv:ge&&g(f.lightMap.channel),bumpMapUv:Se&&g(f.bumpMap.channel),normalMapUv:re&&g(f.normalMap.channel),displacementMapUv:en&&g(f.displacementMap.channel),emissiveMapUv:Ce&&g(f.emissiveMap.channel),metalnessMapUv:fn&&g(f.metalnessMap.channel),roughnessMapUv:pn&&g(f.roughnessMap.channel),anisotropyMapUv:Gt&&g(f.anisotropyMap.channel),clearcoatMapUv:A&&g(f.clearcoatMap.channel),clearcoatNormalMapUv:v&&g(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&g(f.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:at&&g(f.diffuseRoughnessMap.channel),iridescenceMapUv:nt&&g(f.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&g(f.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&g(f.sheenColorMap.channel),sheenRoughnessMapUv:$&&g(f.sheenRoughnessMap.channel),specularMapUv:j&&g(f.specularMap.channel),specularColorMapUv:dt&&g(f.specularColorMap.channel),specularIntensityMapUv:L&&g(f.specularIntensityMap.channel),transmissionMapUv:tt&&g(f.transmissionMap.channel),thicknessMapUv:J&&g(f.thicknessMap.channel),alphaMapUv:lt&&g(f.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(re||mn),vertexNormals:!!I.attributes.normal,vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(Dt||lt),fog:!!B,useFog:f.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:f.wireframe===!1&&(f.flatShading===!0||I.attributes.normal===void 0&&re===!1&&(f.isMeshLambertMaterial||f.isMeshPhongMaterial||f.isMeshStandardMaterial||f.isMeshPhysicalMaterial)),sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:yt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:wt,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:F.filter(Mt=>Mt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:f.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:ot,decodeVideoTexture:Dt&&f.map.isVideoTexture===!0&&Kt.getTransfer(f.map.colorSpace)===ie,decodeVideoTextureEmissive:Ce&&f.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(f.emissiveMap.colorSpace)===ie,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===Wn,flipSided:f.side===Ze,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:qt&&f.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&f.extensions.multiDraw===!0||de)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return Wt.vertexUv1s=c.has(1),Wt.vertexUv2s=c.has(2),Wt.vertexUv3s=c.has(3),c.clear(),Wt}l(x,"getParameters");function S(f){let M=[];if(f.shaderID?M.push(f.shaderID):(M.push(f.customVertexShaderID),M.push(f.customFragmentShaderID)),f.defines!==void 0)for(let N in f.defines)M.push(N),M.push(f.defines[N]);return f.isRawShaderMaterial===!1&&(_(M,f),m(M,f),M.push(s.outputColorSpace)),M.push(f.customProgramCacheKey),M.join()}l(S,"getProgramCacheKey");function _(f,M){f.push(M.precision),f.push(M.outputColorSpace),f.push(M.envMapMode),f.push(M.envMapPMREM),f.push(M.envMapMaxLod),f.push(M.envMapSize),f.push(M.mapUv),f.push(M.alphaMapUv),f.push(M.lightMapUv),f.push(M.aoMapUv),f.push(M.bumpMapUv),f.push(M.normalMapUv),f.push(M.displacementMapUv),f.push(M.emissiveMapUv),f.push(M.metalnessMapUv),f.push(M.roughnessMapUv),f.push(M.anisotropyMapUv),f.push(M.clearcoatMapUv),f.push(M.clearcoatNormalMapUv),f.push(M.clearcoatRoughnessMapUv),f.push(M.diffuseRoughnessMapUv),f.push(M.iridescenceMapUv),f.push(M.iridescenceThicknessMapUv),f.push(M.sheenColorMapUv),f.push(M.sheenRoughnessMapUv),f.push(M.specularMapUv),f.push(M.specularColorMapUv),f.push(M.specularIntensityMapUv),f.push(M.transmissionMapUv),f.push(M.thicknessMapUv),f.push(M.combine),f.push(M.fogExp2),f.push(M.sizeAttenuation),f.push(M.morphTargetsCount),f.push(M.numSunLights),f.push(M.numDirLights),f.push(M.numPointLights),f.push(M.numSpotLights),f.push(M.numSpotLightMaps),f.push(M.numHemiLights),f.push(M.numRectAreaLights),f.push(M.numSunLightShadows),f.push(M.numDirLightShadows),f.push(M.numPointLightShadows),f.push(M.numSpotLightShadows),f.push(M.numSpotLightShadowsWithMaps),f.push(M.numLightProbes),f.push(M.numLightProbeGrids),f.push(M.shadowMapType),f.push(M.toneMapping),f.push(M.numClippingPlanes),f.push(M.numClipIntersection),f.push(M.depthPacking)}l(_,"getProgramCacheKeyParameters");function m(f,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),f.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),f.push(a.mask)}l(m,"getProgramCacheKeyBooleans");function E(f){let M=d[f.type],N;if(M){let P=Zn[M];N=wa.clone(P.uniforms)}else N=f.uniforms;return N}l(E,"getUniforms");function R(f,M){let N=u.get(M);return N!==void 0?++N.usedTimes:(N=new Hy(s,M,f,i),h.push(N),u.set(M,N)),N}l(R,"acquireProgram");function T(f){if(--f.usedTimes===0){let M=h.indexOf(f);h[M]=h[h.length-1],h.pop(),u.delete(f.cacheKey),f.destroy()}}l(T,"releaseProgram");function C(f){o.remove(f)}l(C,"releaseShaderCache");function w(){o.dispose()}return l(w,"dispose"),{getParameters:x,getProgramCacheKey:S,getUniforms:E,acquireProgram:R,releaseProgram:T,releaseShaderCache:C,programs:h,dispose:w}}l(qy,"WebGLPrograms");function Yy(){let s=new WeakMap;function t(a){return s.has(a)}l(t,"has");function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}l(e,"get");function n(a){s.delete(a)}l(n,"remove");function i(a,o,c){s.get(a)[o]=c}l(i,"update");function r(){s=new WeakMap}return l(r,"dispose"),{has:t,get:e,remove:n,update:i,dispose:r}}l(Yy,"WebGLProperties");function Zy(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}l(Zy,"painterSortStable");function um(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}l(um,"reversePainterSortStable");function dm(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}l(r,"init");function a(d){let g=0;return d.isInstancedMesh&&(g+=2),d.isSkinnedMesh&&(g+=1),g}l(a,"materialVariant");function o(d,g,x,S,_,m){let E=s[t];return E===void 0?(E={id:d.id,object:d,geometry:g,material:x,materialVariant:a(d),groupOrder:S,renderOrder:d.renderOrder,z:_,group:m},s[t]=E):(E.id=d.id,E.object=d,E.geometry=g,E.material=x,E.materialVariant=a(d),E.groupOrder=S,E.renderOrder=d.renderOrder,E.z=_,E.group=m),t++,E}l(o,"getNextRenderItem");function c(d,g,x,S,_,m,E){E.reversedDepth===!0&&(_=-_);let R=o(d,g,x,S,_,m);x.transmission>0?n.push(R):x.transparent===!0?i.push(R):e.push(R)}l(c,"push");function h(d,g,x,S,_,m){let E=o(d,g,x,S,_,m);x.transmission>0?n.unshift(E):x.transparent===!0?i.unshift(E):e.unshift(E)}l(h,"unshift");function u(d,g){e.length>1&&e.sort(d||Zy),n.length>1&&n.sort(g||um),i.length>1&&i.sort(g||um)}l(u,"sort");function p(){for(let d=t,g=s.length;d<g;d++){let x=s[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return l(p,"finish"),{opaque:e,transmissive:n,transparent:i,init:r,push:c,unshift:h,finish:p,sort:u}}l(dm,"WebGLRenderList");function Jy(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new dm,s.set(n,[a])):i>=r.length?(a=new dm,r.push(a)):a=r[i],a}l(t,"get");function e(){s=new WeakMap}return l(e,"dispose"),{get:t,dispose:e}}l(Jy,"WebGLRenderLists");function $y(){let s={};return{get:l(function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new H,color:new Ut};break;case"SpotLight":e={position:new H,direction:new H,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new H,halfWidth:new H,halfHeight:new H};break}return s[t.id]=e,e},"get")}}l($y,"UniformsCache");function Ky(){let s={};return{get:l(function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e},"get")}}l(Ky,"ShadowUniformsCache");var Qy=0;function jy(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}l(jy,"shadowCastingAndTexturingLightsFirst");function tM(s){let t=new $y,e=Ky(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new H);let i=new H,r=new ue,a=new ue;function o(h){let u=0,p=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let g=0,x=0,S=0,_=0,m=0,E=0,R=0,T=0,C=0,w=0,f=0,M=0,N=0,P=0;h.sort(jy);for(let F=0,B=h.length;F<B;F++){let I=h[F],z=I.color,Z=I.intensity,G=I.distance,st=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===qn?st=I.shadow.map.texture:st=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=z.r*Z,p+=z.g*Z,d+=z.b*Z;else if(I.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(I.sh.coefficients[q],Z);P++}else if(I.isSunLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let et=I.shadow,it=e.get(I);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),n.sunShadow[x]=it,n.sunShadowMap[x]=st;let wt=et.getViewportCount();for(let zt=0;zt<wt;zt++)n.sunShadowMatrix[S+zt]=et.getMatrix(zt),n.sunShadowCascade[S+zt]=et._cascadeData[zt];S+=wt,x++}n.sun[g]=q,g++}else if(I.isDirectionalLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let et=I.shadow,it=e.get(I);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,n.directionalShadow[_]=it,n.directionalShadowMap[_]=st,n.directionalShadowMatrix[_]=I.shadow.matrix,C++}n.directional[_]=q,_++}else if(I.isSpotLight){let q=t.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(z).multiplyScalar(Z),q.distance=G,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,n.spot[E]=q;let et=I.shadow;if(I.map&&(n.spotLightMap[M]=I.map,M++,et.updateMatrices(I),I.castShadow&&N++),n.spotLightMatrix[E]=et.matrix,I.castShadow){let it=e.get(I);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,n.spotShadow[E]=it,n.spotShadowMap[E]=st,f++}E++}else if(I.isRectAreaLight){let q=t.get(I);q.color.copy(z).multiplyScalar(Z),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),n.rectArea[R]=q,R++}else if(I.isPointLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){let et=I.shadow,it=e.get(I);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,it.shadowCameraNear=et.camera.near,it.shadowCameraFar=et.camera.far,n.pointShadow[m]=it,n.pointShadowMap[m]=st,n.pointShadowMatrix[m]=I.shadow.matrix,w++}n.point[m]=q,m++}else if(I.isHemisphereLight){let q=t.get(I);q.skyColor.copy(I.color).multiplyScalar(Z),q.groundColor.copy(I.groundColor).multiplyScalar(Z),n.hemi[T]=q,T++}}R>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=d;let D=n.hash;(D.sunLength!==g||D.directionalLength!==_||D.pointLength!==m||D.spotLength!==E||D.rectAreaLength!==R||D.hemiLength!==T||D.numSunShadows!==x||D.numDirectionalShadows!==C||D.numPointShadows!==w||D.numSpotShadows!==f||D.numSpotMaps!==M||D.numLightProbes!==P)&&(n.sun.length=g,n.directional.length=_,n.spot.length=E,n.rectArea.length=R,n.point.length=m,n.hemi.length=T,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=f,n.spotShadowMap.length=f,n.spotLightMatrix.length=f+M-N,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=P,D.sunLength=g,D.directionalLength=_,D.pointLength=m,D.spotLength=E,D.rectAreaLength=R,D.hemiLength=T,D.numSunShadows=x,D.numDirectionalShadows=C,D.numPointShadows=w,D.numSpotShadows=f,D.numSpotMaps=M,D.numLightProbes=P,n.version=Qy++)}l(o,"setup");function c(h,u){let p=0,d=0,g=0,x=0,S=0,_=0,m=u.matrixWorldInverse;for(let E=0,R=h.length;E<R;E++){let T=h[E];if(T.isSunLight){let C=n.sun[p];C.direction.setFromMatrixPosition(T.matrixWorld),C.direction.transformDirection(m),p++}else if(T.isDirectionalLight){let C=n.directional[d];C.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),C.direction.sub(i),C.direction.transformDirection(m),d++}else if(T.isSpotLight){let C=n.spot[x];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),C.direction.sub(i),C.direction.transformDirection(m),x++}else if(T.isRectAreaLight){let C=n.rectArea[S];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(m),a.identity(),r.copy(T.matrixWorld),r.premultiply(m),a.extractRotation(r),C.halfWidth.set(T.width*.5,0,0),C.halfHeight.set(0,T.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),S++}else if(T.isPointLight){let C=n.point[g];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(m),g++}else if(T.isHemisphereLight){let C=n.hemi[_];C.direction.setFromMatrixPosition(T.matrixWorld),C.direction.transformDirection(m),_++}}}return l(c,"setupView"),{setup:o,setupView:c,state:n}}l(tM,"WebGLLights");function fm(s){let t=new tM(s),e=[],n=[],i=[];function r(p){u.camera=p,e.length=0,n.length=0,i.length=0}l(r,"init");function a(p){p.isLightProbeGrid?i.push(p):e.push(p)}l(a,"pushLight");function o(p){n.push(p)}l(o,"pushShadow");function c(){t.setup(e),i.sort((p,d)=>p.priority-d.priority||p.id-d.id)}l(c,"setupLights");function h(p){t.setupView(e,p)}l(h,"setupLightsView");let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o}}l(fm,"WebGLRenderState");function eM(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new fm(s),t.set(i,[o])):r>=a.length?(o=new fm(s),a.push(o)):o=a[r],o}l(e,"get");function n(){t=new WeakMap}return l(n,"dispose"),{get:e,dispose:n}}l(eM,"WebGLRenderStates");var nM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iM=`uniform sampler2D shadow_pass;
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
}`,sM=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],rM=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],pm=new ue,Ea=new H,yd=new H;function aM(s,t,e){let n=new Oi,i=new Ot,r=new Ot,a=new me,o=new el,c=new nl,h={},u=e.maxTextureSize,p={[Gi]:Ze,[Ze]:Gi,[Wn]:Wn},d=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:nM,fragmentShader:iM}),g=d.clone();g.defines.HORIZONTAL_PASS=1;let x=new Ke;x.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new oe(x,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ma;let m=this.type;this.render=function(w,f,M){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||w.length===0)return;this.type===Il&&(Ft("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ma);let N=s.getRenderTarget(),P=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),F=s.state;F.setBlending(ds),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let B=m!==this.type;B&&f.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(z=>z.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,z=w.length;I<z;I++){let Z=w[I],G=Z.shadow;if(G===void 0){Ft("WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let st=G.getFrameExtents();i.multiply(st),r.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/st.x),i.x=r.x*st.x,G.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/st.y),i.y=r.y*st.y,G.mapSize.y=r.y));let q=s.state.buffers.depth.getReversed();if(G.camera._reversedDepth=q,G.map===null||B===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===hr){if(Z.isPointLight){Ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new rn(i.x,i.y,{format:qn,type:ln,minFilter:De,magFilter:De,generateMipmaps:!1}),G.map.texture.name=Z.name+".shadowMap",G.map.depthTexture=new fi(i.x,i.y,Dn),G.map.depthTexture.name=Z.name+".shadowMapDepth",G.map.depthTexture.format=hi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Le,G.map.depthTexture.magFilter=Le}else Z.isPointLight?(G.map=new Aa(i.x),G.map.depthTexture=new aa(i.x,Ln)):(G.map=new rn(i.x,i.y),G.map.depthTexture=new fi(i.x,i.y,Ln)),G.map.depthTexture.name=Z.name+".shadowMap",G.map.depthTexture.format=hi,this.type===ma?(G.map.depthTexture.compareFunction=q?jh:Qh,G.map.depthTexture.minFilter=De,G.map.depthTexture.magFilter=De):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Le,G.map.depthTexture.magFilter=Le);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==i.x||G.map.height!==i.y)&&G.map.setSize(i.x,i.y);let et=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();Z.isPointLight!==!0&&G.updateMatrices(Z,M);let it=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:M.layers;for(let wt=0;wt<et;wt++){let zt=G.getCamera(wt);if(Z.isPointLight){let Q=G.camera,vt=G.matrix,Et=Z.distance||Q.far;Et!==Q.far&&(Q.far=Et,Q.updateProjectionMatrix()),Ea.setFromMatrixPosition(Z.matrixWorld),Q.position.copy(Ea),yd.copy(Q.position),yd.add(sM[wt]),Q.up.copy(rM[wt]),Q.lookAt(yd),Q.updateMatrixWorld(),vt.makeTranslation(-Ea.x,-Ea.y,-Ea.z),pm.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),G._frustum.setFromProjectionMatrix(pm,Q.coordinateSystem,Q.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)s.setRenderTarget(G.map,wt),s.clear();else{wt===0&&(s.setRenderTarget(G.map),s.clear());let Q=G.getViewport(wt);a.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),F.viewport(a)}n=G.getFrustum(wt),T(f,M,zt,Z,it,this.type)}G.isPointLightShadow!==!0&&this.type===hr&&E(G,M),G.needsUpdate=!1}m=this.type,_.needsUpdate=!1,s.setRenderTarget(N,P,D)};function E(w,f){let M=t.update(S);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,g.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),w.mapPass===null?w.mapPass=new rn(i.x,i.y,{format:qn,type:ln}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(f,null,M,d,S,null),g.uniforms.shadow_pass.value=w.mapPass.texture,g.uniforms.resolution.value.set(w.map.width,w.map.height),g.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(f,null,M,g,S,null)}l(E,"VSMPass");function R(w,f,M,N){let P=null,D=M.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)P=D;else if(P=M.isPointLight===!0?c:o,s.localClippingEnabled&&f.clipShadows===!0&&Array.isArray(f.clippingPlanes)&&f.clippingPlanes.length!==0||f.displacementMap&&f.displacementScale!==0||f.alphaMap&&f.alphaTest>0||f.map&&f.alphaTest>0||f.alphaToCoverage===!0){let F=P.uuid,B=f.uuid,I=h[F];I===void 0&&(I={},h[F]=I);let z=I[B];z===void 0&&(z=P.clone(),I[B]=z,f.addEventListener("dispose",C)),P=z}if(P.visible=f.visible,P.wireframe=f.wireframe,N===hr?P.side=f.shadowSide!==null?f.shadowSide:f.side:P.side=f.shadowSide!==null?f.shadowSide:p[f.side],P.alphaMap=f.alphaMap,P.alphaTest=f.alphaToCoverage===!0?.5:f.alphaTest,P.map=f.map,P.clipShadows=f.clipShadows,P.clippingPlanes=f.clippingPlanes,P.clipIntersection=f.clipIntersection,P.displacementMap=f.displacementMap,P.displacementScale=f.displacementScale,P.displacementBias=f.displacementBias,P.wireframeLinewidth=f.wireframeLinewidth,P.linewidth=f.linewidth,M.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let F=s.properties.get(P);F.light=M}return P}l(R,"getDepthMaterial");function T(w,f,M,N,P,D){if(w.visible===!1)return;if(w.layers.test(P)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&D===hr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,w.matrixWorld);let I=t.update(w),z=w.material;if(Array.isArray(z)){let Z=I.groups;for(let G=0,st=Z.length;G<st;G++){let q=Z[G],et=z[q.materialIndex];if(et&&et.visible){let it=R(w,et,N,D);w.onBeforeShadow(s,w,f,M,I,it,q),s.renderBufferDirect(M,null,I,it,w,q),w.onAfterShadow(s,w,f,M,I,it,q)}}}else if(z.visible){let Z=R(w,z,N,D);w.onBeforeShadow(s,w,f,M,I,Z,null),s.renderBufferDirect(M,null,I,Z,w,null),w.onAfterShadow(s,w,f,M,I,Z,null)}}let B=w.children;for(let I=0,z=B.length;I<z;I++)T(B[I],f,M,N,P,D)}l(T,"renderObject");function C(w){w.target.removeEventListener("dispose",C);for(let M in h){let N=h[M],P=w.target.uuid;P in N&&(N[P].dispose(),delete N[P])}}l(C,"onMaterialDispose")}l(aM,"WebGLShadowMap");function oM(s,t){function e(){let L=!1,tt=new me,J=null,ft=new me(0,0,0,0);return{setMask:l(function(lt){J!==lt&&!L&&(s.colorMask(lt,lt,lt,lt),J=lt)},"setMask"),setLocked:l(function(lt){L=lt},"setLocked"),setClear:l(function(lt,ut,Pt,qt,ot){ot===!0&&(lt*=qt,ut*=qt,Pt*=qt),tt.set(lt,ut,Pt,qt),ft.equals(tt)===!1&&(s.clearColor(lt,ut,Pt,qt),ft.copy(tt))},"setClear"),reset:l(function(){L=!1,J=null,ft.set(-1,0,0,0)},"reset")}}l(e,"ColorBuffer");function n(){let L=!1,tt=!1,J=null,ft=null,lt=null;return{setReversed:l(function(ut){if(tt!==ut){let Pt=t.get("EXT_clip_control");ut?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),tt=ut;let qt=lt;lt=null,this.setClear(qt)}},"setReversed"),getReversed:l(function(){return tt},"getReversed"),setTest:l(function(ut){ut?yt(s.DEPTH_TEST):kt(s.DEPTH_TEST)},"setTest"),setMask:l(function(ut){J!==ut&&!L&&(s.depthMask(ut),J=ut)},"setMask"),setFunc:l(function(ut){if(tt&&(ut=kp[ut]),ft!==ut){switch(ut){case Oo:s.depthFunc(s.NEVER);break;case Bo:s.depthFunc(s.ALWAYS);break;case zo:s.depthFunc(s.LESS);break;case js:s.depthFunc(s.LEQUAL);break;case ko:s.depthFunc(s.EQUAL);break;case Vo:s.depthFunc(s.GEQUAL);break;case Go:s.depthFunc(s.GREATER);break;case Ho:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ft=ut}},"setFunc"),setLocked:l(function(ut){L=ut},"setLocked"),setClear:l(function(ut){lt!==ut&&(lt=ut,tt&&(ut=1-ut),s.clearDepth(ut))},"setClear"),reset:l(function(){L=!1,J=null,ft=null,lt=null,tt=!1},"reset")}}l(n,"DepthBuffer");function i(){let L=!1,tt=null,J=null,ft=null,lt=null,ut=null,Pt=null,qt=null,ot=null;return{setTest:l(function(Lt){L||(Lt?yt(s.STENCIL_TEST):kt(s.STENCIL_TEST))},"setTest"),setMask:l(function(Lt){tt!==Lt&&!L&&(s.stencilMask(Lt),tt=Lt)},"setMask"),setFunc:l(function(Lt,Wt,Mt){(J!==Lt||ft!==Wt||lt!==Mt)&&(s.stencilFunc(Lt,Wt,Mt),J=Lt,ft=Wt,lt=Mt)},"setFunc"),setOp:l(function(Lt,Wt,Mt){(ut!==Lt||Pt!==Wt||qt!==Mt)&&(s.stencilOp(Lt,Wt,Mt),ut=Lt,Pt=Wt,qt=Mt)},"setOp"),setLocked:l(function(Lt){L=Lt},"setLocked"),setClear:l(function(Lt){ot!==Lt&&(s.clearStencil(Lt),ot=Lt)},"setClear"),reset:l(function(){L=!1,tt=null,J=null,ft=null,lt=null,ut=null,Pt=null,qt=null,ot=null},"reset")}}l(i,"StencilBuffer");let r=new e,a=new n,o=new i,c={},h=new WeakMap,u={},p={},d={},g=new WeakMap,x=[],S=null,_=!1,m=null,E=null,R=null,T=null,C=null,w=null,f=null,M=new Ut(0,0,0),N=0,P=!1,D=null,F=null,B=null,I=null,z=null,Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,st=0,q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(q)[1]),G=st>=1):q.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),G=st>=2);let et=null,it={},wt=s.getParameter(s.SCISSOR_BOX),zt=s.getParameter(s.VIEWPORT),Q=new me().fromArray(wt),vt=new me().fromArray(zt);function Et(L,tt,J,ft){let lt=new Uint8Array(4),ut=s.createTexture();s.bindTexture(L,ut),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Pt=0;Pt<J;Pt++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(tt,0,s.RGBA,1,1,ft,0,s.RGBA,s.UNSIGNED_BYTE,lt):s.texImage2D(tt+Pt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,lt);return ut}l(Et,"createTexture");let It={};It[s.TEXTURE_2D]=Et(s.TEXTURE_2D,s.TEXTURE_2D,1),It[s.TEXTURE_CUBE_MAP]=Et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),It[s.TEXTURE_2D_ARRAY]=Et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),It[s.TEXTURE_3D]=Et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),yt(s.DEPTH_TEST),a.setFunc(js),Se(!1),re(Ih),yt(s.CULL_FACE),xe(ds);function yt(L){u[L]!==!0&&(s.enable(L),u[L]=!0)}l(yt,"enable");function kt(L){u[L]!==!1&&(s.disable(L),u[L]=!1)}l(kt,"disable");function de(L,tt){return d[L]!==tt?(s.bindFramebuffer(L,tt),d[L]=tt,L===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=tt),L===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=tt),!0):!1}l(de,"bindFramebuffer");function Dt(L,tt){let J=x,ft=!1;if(L){J=g.get(tt),J===void 0&&(J=[],g.set(tt,J));let lt=L.textures;if(J.length!==lt.length||J[0]!==s.COLOR_ATTACHMENT0){for(let ut=0,Pt=lt.length;ut<Pt;ut++)J[ut]=s.COLOR_ATTACHMENT0+ut;J.length=lt.length,ft=!0}}else J[0]!==s.BACK&&(J[0]=s.BACK,ft=!0);ft&&s.drawBuffers(J)}l(Dt,"drawBuffers");function Zt(L){return S!==L?(s.useProgram(L),S=L,!0):!1}l(Zt,"useProgram");let te={[fs]:s.FUNC_ADD,[cp]:s.FUNC_SUBTRACT,[hp]:s.FUNC_REVERSE_SUBTRACT};te[up]=s.MIN,te[dp]=s.MAX;let Xt={[fp]:s.ZERO,[pp]:s.ONE,[mp]:s.SRC_COLOR,[Uh]:s.SRC_ALPHA,[Mp]:s.SRC_ALPHA_SATURATE,[vp]:s.DST_COLOR,[_p]:s.DST_ALPHA,[gp]:s.ONE_MINUS_SRC_COLOR,[Fh]:s.ONE_MINUS_SRC_ALPHA,[yp]:s.ONE_MINUS_DST_COLOR,[xp]:s.ONE_MINUS_DST_ALPHA,[bp]:s.CONSTANT_COLOR,[Sp]:s.ONE_MINUS_CONSTANT_COLOR,[wp]:s.CONSTANT_ALPHA,[Ep]:s.ONE_MINUS_CONSTANT_ALPHA};function xe(L,tt,J,ft,lt,ut,Pt,qt,ot,Lt){if(L===ds){_===!0&&(kt(s.BLEND),_=!1);return}if(_===!1&&(yt(s.BLEND),_=!0),L!==lp){if(L!==m||Lt!==P){if((E!==fs||C!==fs)&&(s.blendEquation(s.FUNC_ADD),E=fs,C=fs),Lt)switch(L){case ur:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lh:s.blendFunc(s.ONE,s.ONE);break;case Dh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Bt("WebGLState: Invalid blending: ",L);break}else switch(L){case ur:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lh:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Dh:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nh:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",L);break}R=null,T=null,w=null,f=null,M.set(0,0,0),N=0,m=L,P=Lt}return}lt=lt||tt,ut=ut||J,Pt=Pt||ft,(tt!==E||lt!==C)&&(s.blendEquationSeparate(te[tt],te[lt]),E=tt,C=lt),(J!==R||ft!==T||ut!==w||Pt!==f)&&(s.blendFuncSeparate(Xt[J],Xt[ft],Xt[ut],Xt[Pt]),R=J,T=ft,w=ut,f=Pt),(qt.equals(M)===!1||ot!==N)&&(s.blendColor(qt.r,qt.g,qt.b,ot),M.copy(qt),N=ot),m=L,P=!1}l(xe,"setBlending");function ge(L,tt){L.side===Wn?kt(s.CULL_FACE):yt(s.CULL_FACE);let J=L.side===Ze;tt&&(J=!J),Se(J),L.blending===ur&&L.transparent===!1?xe(ds):xe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let ft=L.stencilWrite;o.setTest(ft),ft&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ce(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?yt(s.SAMPLE_ALPHA_TO_COVERAGE):kt(s.SAMPLE_ALPHA_TO_COVERAGE)}l(ge,"setMaterial");function Se(L){D!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),D=L)}l(Se,"setFlipSided");function re(L){L!==ap?(yt(s.CULL_FACE),L!==F&&(L===Ih?s.cullFace(s.BACK):L===op?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):kt(s.CULL_FACE),F=L}l(re,"setCullFace");function en(L){L!==B&&(G&&s.lineWidth(L),B=L)}l(en,"setLineWidth");function Ce(L,tt,J){L?(yt(s.POLYGON_OFFSET_FILL),(I!==tt||z!==J)&&(I=tt,z=J,a.getReversed()&&(tt=-tt,J=-J),s.polygonOffset(tt,J))):kt(s.POLYGON_OFFSET_FILL)}l(Ce,"setPolygonOffset");function fn(L){L?yt(s.SCISSOR_TEST):kt(s.SCISSOR_TEST)}l(fn,"setScissorTest");function pn(L){L===void 0&&(L=s.TEXTURE0+Z-1),et!==L&&(s.activeTexture(L),et=L)}l(pn,"activeTexture");function mn(L,tt,J){J===void 0&&(et===null?J=s.TEXTURE0+Z-1:J=et);let ft=it[J];ft===void 0&&(ft={type:void 0,texture:void 0},it[J]=ft),(ft.type!==L||ft.texture!==tt)&&(et!==J&&(s.activeTexture(J),et=J),s.bindTexture(L,tt||It[L]),ft.type=L,ft.texture=tt)}l(mn,"bindTexture");function O(){let L=it[et];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}l(O,"unbindTexture");function gn(){try{s.compressedTexImage2D(...arguments)}catch(L){Bt("WebGLState:",L)}}l(gn,"compressedTexImage2D");function fe(){try{s.compressedTexImage3D(...arguments)}catch(L){Bt("WebGLState:",L)}}l(fe,"compressedTexImage3D");function pe(){try{s.texSubImage2D(...arguments)}catch(L){Bt("WebGLState:",L)}}l(pe,"texSubImage2D");function _t(){try{s.texSubImage3D(...arguments)}catch(L){Bt("WebGLState:",L)}}l(_t,"texSubImage3D");function we(){try{s.compressedTexSubImage2D(...arguments)}catch(L){Bt("WebGLState:",L)}}l(we,"compressedTexSubImage2D");function Nt(){try{s.compressedTexSubImage3D(...arguments)}catch(L){Bt("WebGLState:",L)}}l(Nt,"compressedTexSubImage3D");function Gt(){try{s.texStorage2D(...arguments)}catch(L){Bt("WebGLState:",L)}}l(Gt,"texStorage2D");function A(){try{s.texStorage3D(...arguments)}catch(L){Bt("WebGLState:",L)}}l(A,"texStorage3D");function v(){try{s.texImage2D(...arguments)}catch(L){Bt("WebGLState:",L)}}l(v,"texImage2D");function V(){try{s.texImage3D(...arguments)}catch(L){Bt("WebGLState:",L)}}l(V,"texImage3D");function at(L){return p[L]!==void 0?p[L]:s.getParameter(L)}l(at,"getParameter");function nt(L,tt){p[L]!==tt&&(s.pixelStorei(L,tt),p[L]=tt)}l(nt,"pixelStorei");function ht(L){Q.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Q.copy(L))}l(ht,"scissor");function mt(L){vt.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),vt.copy(L))}l(mt,"viewport");function $(L,tt){let J=h.get(tt);J===void 0&&(J=new WeakMap,h.set(tt,J));let ft=J.get(L);ft===void 0&&(ft=s.getUniformBlockIndex(tt,L.name),s.uniformBlockBinding(tt,ft,ft),J.set(L,ft))}l($,"updateUBOMapping");function j(L,tt,J){let lt=h.get(tt).get(L);c[lt]!==J&&(s.bindBufferBase(s.UNIFORM_BUFFER,lt,J),c[lt]=J)}l(j,"uniformBlockBinding");function dt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),u={},p={},et=null,it={},d={},c={},g=new WeakMap,x=[],S=null,_=!1,m=null,E=null,R=null,T=null,C=null,w=null,f=null,M=new Ut(0,0,0),N=0,P=!1,D=null,F=null,B=null,I=null,z=null,Q.set(0,0,s.canvas.width,s.canvas.height),vt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return l(dt,"reset"),{buffers:{color:r,depth:a,stencil:o},enable:yt,disable:kt,bindFramebuffer:de,drawBuffers:Dt,useProgram:Zt,setBlending:xe,setMaterial:ge,setFlipSided:Se,setCullFace:re,setLineWidth:en,setPolygonOffset:Ce,setScissorTest:fn,activeTexture:pn,bindTexture:mn,unbindTexture:O,compressedTexImage2D:gn,compressedTexImage3D:fe,texImage2D:v,texImage3D:V,pixelStorei:nt,getParameter:at,updateUBOMapping:$,uniformBlockBinding:j,texStorage2D:Gt,texStorage3D:A,texSubImage2D:pe,texSubImage3D:_t,compressedTexSubImage2D:we,compressedTexSubImage3D:Nt,scissor:ht,viewport:mt,reset:dt}}l(oM,"WebGLState");function lM(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ot,u=new WeakMap,p=new Set,d,g=new WeakMap,x=new Set,S=new FinalizationRegistry(A=>x.delete(A)),_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,v){return _?new OffscreenCanvas(A,v):Jr("canvas")}l(m,"createCanvas");function E(A,v,V){let at=1,nt=Gt(A);if((nt.width>V||nt.height>V)&&(at=V/Math.max(nt.width,nt.height)),at<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ht=Math.floor(at*nt.width),mt=Math.floor(at*nt.height);d===void 0&&(d=m(ht,mt));let $=v?m(ht,mt):d;return $.width=ht,$.height=mt,$.getContext("2d").drawImage(A,0,0,ht,mt),Ft("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+ht+"x"+mt+")."),$}else return"data"in A&&Ft("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),A;return A}l(E,"resizeImage");function R(A){return A.generateMipmaps}l(R,"textureNeedsGenerateMipmaps");function T(A){s.generateMipmap(A)}l(T,"generateMipmap");function C(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}l(C,"getTargetType");function w(A,v,V,at,nt,ht=!1){if(A!==null){if(s[A]!==void 0)return s[A];Ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let mt;at&&(mt=t.get("EXT_texture_norm16"),mt||Ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=v;if(v===s.RED&&(V===s.FLOAT&&($=s.R32F),V===s.HALF_FLOAT&&($=s.R16F),V===s.UNSIGNED_BYTE&&($=s.R8),V===s.UNSIGNED_SHORT&&mt&&($=mt.R16_EXT),V===s.SHORT&&mt&&($=mt.R16_SNORM_EXT)),v===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&($=s.R8UI),V===s.UNSIGNED_SHORT&&($=s.R16UI),V===s.UNSIGNED_INT&&($=s.R32UI),V===s.BYTE&&($=s.R8I),V===s.SHORT&&($=s.R16I),V===s.INT&&($=s.R32I)),v===s.RG&&(V===s.FLOAT&&($=s.RG32F),V===s.HALF_FLOAT&&($=s.RG16F),V===s.UNSIGNED_BYTE&&($=s.RG8),V===s.UNSIGNED_SHORT&&mt&&($=mt.RG16_EXT),V===s.SHORT&&mt&&($=mt.RG16_SNORM_EXT)),v===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&($=s.RG8UI),V===s.UNSIGNED_SHORT&&($=s.RG16UI),V===s.UNSIGNED_INT&&($=s.RG32UI),V===s.BYTE&&($=s.RG8I),V===s.SHORT&&($=s.RG16I),V===s.INT&&($=s.RG32I)),v===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&($=s.RGB8UI),V===s.UNSIGNED_SHORT&&($=s.RGB16UI),V===s.UNSIGNED_INT&&($=s.RGB32UI),V===s.BYTE&&($=s.RGB8I),V===s.SHORT&&($=s.RGB16I),V===s.INT&&($=s.RGB32I)),v===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&($=s.RGBA8UI),V===s.UNSIGNED_SHORT&&($=s.RGBA16UI),V===s.UNSIGNED_INT&&($=s.RGBA32UI),V===s.BYTE&&($=s.RGBA8I),V===s.SHORT&&($=s.RGBA16I),V===s.INT&&($=s.RGBA32I)),v===s.RGB&&(V===s.UNSIGNED_SHORT&&mt&&($=mt.RGB16_EXT),V===s.SHORT&&mt&&($=mt.RGB16_SNORM_EXT),V===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),V===s.UNSIGNED_INT_10F_11F_11F_REV&&($=s.R11F_G11F_B10F)),v===s.RGBA){let j=ht?Zr:Kt.getTransfer(nt);V===s.FLOAT&&($=s.RGBA32F),V===s.HALF_FLOAT&&($=s.RGBA16F),V===s.UNSIGNED_BYTE&&($=j===ie?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT&&mt&&($=mt.RGBA16_EXT),V===s.SHORT&&mt&&($=mt.RGBA16_SNORM_EXT),V===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&t.get("EXT_color_buffer_float"),$}l(w,"getInternalFormat");function f(A,v){let V;return A?v===null||v===Ln||v===ms?V=s.DEPTH24_STENCIL8:v===Dn?V=s.DEPTH32F_STENCIL8:v===fr&&(V=s.DEPTH24_STENCIL8,Ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ln||v===ms?V=s.DEPTH_COMPONENT24:v===Dn?V=s.DEPTH_COMPONENT32F:v===fr&&(V=s.DEPTH_COMPONENT16),V}l(f,"getInternalDepthFormat");function M(A,v){return R(A)===!0||A.isFramebufferTexture&&A.minFilter!==Le&&A.minFilter!==De?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}l(M,"getMipLevels");function N(A){let v=new WeakRef(A);n.get(A).__ref=v,x.add(v),S.register(A,v,v)}l(N,"track");function P(A){let v=n.get(A).__ref;v!==void 0&&(x.delete(v),S.unregister(v))}l(P,"untrack");function D(A){B(A.target)}l(D,"onTextureDispose");function F(A){I(A.target)}l(F,"onRenderTargetDispose");function B(A){A.removeEventListener("dispose",D),P(A),Z(A),A.isVideoTexture&&u.delete(A),A.isHTMLTexture&&p.delete(A)}l(B,"destroyTexture");function I(A){A.removeEventListener("dispose",F),P(A),st(A)}l(I,"destroyRenderTarget");function z(){for(let A of x){let v=A.deref();v!==void 0&&(v.isRenderTarget===!0?I(v):B(v))}x.clear(),p.clear()}l(z,"dispose");function Z(A){let v=n.get(A);if(v.__webglInit===void 0)return;let V=A.source,at=g.get(V);if(at){let nt=at[v.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&G(A),Object.keys(at).length===0&&g.delete(V)}n.remove(A)}l(Z,"deallocateTexture");function G(A){let v=n.get(A);s.deleteTexture(v.__webglTexture);let V=A.source,at=g.get(V);delete at[v.__cacheKey],a.memory.textures--}l(G,"deleteTexture");function st(A){let v=n.get(A);v.__depthDisposeCallback&&v.__depthDisposeCallback();let V=A.depthTexture;if(V&&V.renderTarget===A&&B(V),A.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(v.__webglFramebuffer[nt]))for(let ht=0;ht<v.__webglFramebuffer[nt].length;ht++)s.deleteFramebuffer(v.__webglFramebuffer[nt][ht]);else s.deleteFramebuffer(v.__webglFramebuffer[nt]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[nt])}else{if(Array.isArray(v.__webglFramebuffer))for(let nt=0;nt<v.__webglFramebuffer.length;nt++)s.deleteFramebuffer(v.__webglFramebuffer[nt]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let nt=0;nt<v.__webglColorRenderbuffer.length;nt++)v.__webglColorRenderbuffer[nt]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[nt]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let at=A.textures;for(let nt=0,ht=at.length;nt<ht;nt++){let mt=n.get(at[nt]);mt.__webglTexture&&(s.deleteTexture(mt.__webglTexture),a.memory.textures--),n.remove(at[nt])}n.remove(A)}l(st,"deallocateRenderTarget");let q=0;function et(){q=0}l(et,"resetTextureUnits");function it(){return q}l(it,"getTextureUnits");function wt(A){q=A}l(wt,"setTextureUnits");function zt(){let A=q;return A>=i.maxTextures&&Ft("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+i.maxTextures),q+=1,A}l(zt,"allocateTextureUnit");function Q(A){let v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.mipmapsAutoUpdate),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}l(Q,"getTextureCacheKey");function vt(A,v){let V=n.get(A);if(A.isVideoTexture&&we(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&V.__version!==A.version){let at=A.image;if(at===null)Ft("WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)Ft("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(V,A,v);return}}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+v)}l(vt,"setTexture2D");function Et(A,v){let V=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){ge(V,A,v);return}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+v)}l(Et,"setTexture2DArray");function It(A,v){let V=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){ge(V,A,v);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+v)}l(It,"setTexture3D");function yt(A,v){let V=n.get(A);if(A.version>0&&V.__version!==A.version){Se(V,A,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+v)}l(yt,"setTextureCube");let kt={[ls]:s.REPEAT,[xn]:s.CLAMP_TO_EDGE,[Wo]:s.MIRRORED_REPEAT},de={[Le]:s.NEAREST,[Cp]:s.NEAREST_MIPMAP_NEAREST,[_a]:s.NEAREST_MIPMAP_LINEAR,[De]:s.LINEAR,[Nl]:s.LINEAR_MIPMAP_NEAREST,[mi]:s.LINEAR_MIPMAP_LINEAR},Dt={[Lp]:s.NEVER,[tu]:s.ALWAYS,[Dp]:s.LESS,[Qh]:s.LEQUAL,[Np]:s.EQUAL,[jh]:s.GEQUAL,[Up]:s.GREATER,[Fp]:s.NOTEQUAL};function Zt(A,v){if(v.type===Dn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===De||v.magFilter===Nl||v.magFilter===_a||v.magFilter===mi||v.minFilter===De||v.minFilter===Nl||v.minFilter===_a||v.minFilter===mi)&&Ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,kt[v.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,kt[v.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,kt[v.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,de[v.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,de[v.minFilter]),v.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,Dt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Le||v.minFilter!==_a&&v.minFilter!==mi||v.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}l(Zt,"setTextureParameters");function te(A,v){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",D),N(v));let at=v.source,nt=g.get(at);nt===void 0&&(nt={},g.set(at,nt));let ht=Q(v);if(ht!==A.__cacheKey){nt[ht]===void 0&&(nt[ht]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,V=!0),nt[ht].usedTimes++;let mt=nt[A.__cacheKey];mt!==void 0&&(nt[A.__cacheKey].usedTimes--,mt.usedTimes===0&&G(v)),A.__cacheKey=ht,A.__webglTexture=nt[ht].texture}return V}l(te,"initTexture");function Xt(A,v,V){return Math.floor(Math.floor(A/V)/v)}l(Xt,"getRow");function xe(A,v,V,at){let ht=A.updateRanges;if(ht.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,V,at,v.data);else{ht.sort((L,tt)=>L.start-tt.start);let mt=0;for(let L=1;L<ht.length;L++){let tt=ht[mt],J=ht[L],ft=tt.start+tt.count,lt=Xt(J.start,v.width,4),ut=Xt(tt.start,v.width,4);J.start<=ft+1&&lt===ut&&Xt(J.start+J.count-1,v.width,4)===lt?tt.count=Math.max(tt.count,J.start+J.count-tt.start):(++mt,ht[mt]=J)}ht.length=mt+1;let $=e.getParameter(s.UNPACK_ROW_LENGTH),j=e.getParameter(s.UNPACK_SKIP_PIXELS),dt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let L=0,tt=ht.length;L<tt;L++){let J=ht[L],ft=Math.floor(J.start/4),lt=Math.ceil(J.count/4),ut=ft%v.width,Pt=Math.floor(ft/v.width),qt=lt,ot=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,ut),e.pixelStorei(s.UNPACK_SKIP_ROWS,Pt),e.texSubImage2D(s.TEXTURE_2D,0,ut,Pt,qt,ot,V,at,v.data)}A.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,$),e.pixelStorei(s.UNPACK_SKIP_PIXELS,j),e.pixelStorei(s.UNPACK_SKIP_ROWS,dt)}}l(xe,"updateTexture");function ge(A,v,V){let at=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(at=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(at=s.TEXTURE_3D);let nt=te(A,v),ht=v.source;e.bindTexture(at,A.__webglTexture,s.TEXTURE0+V);let mt=n.get(ht);if(ht.version!==mt.__version||nt===!0){if(e.activeTexture(s.TEXTURE0+V),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let ot=Kt.getPrimaries(Kt.workingColorSpace),Lt=v.colorSpace===_i?null:Kt.getPrimaries(v.colorSpace),Wt=v.colorSpace===_i||ot===Lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt)}e.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment);let j=E(v.image,!1,i.maxTextureSize);j=Nt(v,j);let dt=r.convert(v.format,v.colorSpace),L=r.convert(v.type),tt=w(v.internalFormat,dt,L,v.normalized,v.colorSpace,v.isVideoTexture);Zt(at,v);let J,ft=v.mipmaps,lt=v.isVideoTexture!==!0,ut=mt.__version===void 0||nt===!0,Pt=ht.dataReady,qt=M(v,j);if(v.isDepthTexture)tt=f(v.format===gi,v.type),ut&&(lt?e.texStorage2D(s.TEXTURE_2D,1,tt,j.width,j.height):e.texImage2D(s.TEXTURE_2D,0,tt,j.width,j.height,0,dt,L,null));else if(v.isDataTexture)if(ft.length>0){lt&&ut&&e.texStorage2D(s.TEXTURE_2D,qt,tt,ft[0].width,ft[0].height);for(let ot=0,Lt=ft.length;ot<Lt;ot++)J=ft[ot],lt?Pt&&e.texSubImage2D(s.TEXTURE_2D,ot,0,0,J.width,J.height,dt,L,J.data):e.texImage2D(s.TEXTURE_2D,ot,tt,J.width,J.height,0,dt,L,J.data);v.generateMipmaps=!1}else lt?(ut&&e.texStorage2D(s.TEXTURE_2D,qt,tt,j.width,j.height),Pt&&xe(v,j,dt,L)):e.texImage2D(s.TEXTURE_2D,0,tt,j.width,j.height,0,dt,L,j.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){lt&&ut&&e.texStorage3D(s.TEXTURE_2D_ARRAY,qt,tt,ft[0].width,ft[0].height,j.depth);for(let ot=0,Lt=ft.length;ot<Lt;ot++)if(J=ft[ot],v.format!==Nn)if(dt!==null)if(lt){if(Pt)if(v.layerUpdates.size>0){let Wt=au(J.width,J.height,v.format,v.type);for(let Mt of v.layerUpdates){let se=J.data.subarray(Mt*Wt/J.data.BYTES_PER_ELEMENT,(Mt+1)*Wt/J.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,Mt,J.width,J.height,1,dt,se)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,0,J.width,J.height,j.depth,dt,J.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ot,tt,J.width,J.height,j.depth,0,J.data,0,0);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?Pt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,0,J.width,J.height,j.depth,dt,L,J.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ot,tt,J.width,J.height,j.depth,0,dt,L,J.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{lt&&ut&&e.texStorage2D(s.TEXTURE_2D,qt,tt,ft[0].width,ft[0].height);for(let ot=0,Lt=ft.length;ot<Lt;ot++)J=ft[ot],v.format!==Nn?dt!==null?lt?Pt&&e.compressedTexSubImage2D(s.TEXTURE_2D,ot,0,0,J.width,J.height,dt,J.data):e.compressedTexImage2D(s.TEXTURE_2D,ot,tt,J.width,J.height,0,J.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?Pt&&e.texSubImage2D(s.TEXTURE_2D,ot,0,0,J.width,J.height,dt,L,J.data):e.texImage2D(s.TEXTURE_2D,ot,tt,J.width,J.height,0,dt,L,J.data)}else if(v.isDataArrayTexture)if(lt){if(ut&&e.texStorage3D(s.TEXTURE_2D_ARRAY,qt,tt,j.width,j.height,j.depth),Pt)if(v.layerUpdates.size>0){let ot=au(j.width,j.height,v.format,v.type);for(let Lt of v.layerUpdates){let Wt=j.data.subarray(Lt*ot/j.data.BYTES_PER_ELEMENT,(Lt+1)*ot/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Lt,j.width,j.height,1,dt,L,Wt)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,dt,L,j.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,tt,j.width,j.height,j.depth,0,dt,L,j.data);else if(v.isData3DTexture)lt?(ut&&e.texStorage3D(s.TEXTURE_3D,qt,tt,j.width,j.height,j.depth),Pt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,dt,L,j.data)):e.texImage3D(s.TEXTURE_3D,0,tt,j.width,j.height,j.depth,0,dt,L,j.data);else if(v.isFramebufferTexture){if(ut)if(lt)e.texStorage2D(s.TEXTURE_2D,qt,tt,j.width,j.height);else{let ot=j.width,Lt=j.height;for(let Wt=0;Wt<qt;Wt++)e.texImage2D(s.TEXTURE_2D,Wt,tt,ot,Lt,0,dt,L,null),ot>>=1,Lt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in s){let ot=s.canvas;if(ot.hasAttribute("layoutsubtree")||ot.setAttribute("layoutsubtree","true"),j.parentNode!==ot){ot.appendChild(j),p.add(v),ot.onpaint=Lt=>{let Wt=Lt.changedElements;for(let Mt of p)Wt.includes(Mt.image)&&(Mt.needsUpdate=!0)},ot.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,j);else{let Wt=s.RGBA,Mt=s.RGBA,se=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Wt,Mt,se,j)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ft.length>0){if(lt&&ut){let ot=Gt(ft[0]);e.texStorage2D(s.TEXTURE_2D,qt,tt,ot.width,ot.height)}for(let ot=0,Lt=ft.length;ot<Lt;ot++)J=ft[ot],lt?Pt&&e.texSubImage2D(s.TEXTURE_2D,ot,0,0,dt,L,J):e.texImage2D(s.TEXTURE_2D,ot,tt,dt,L,J);v.generateMipmaps=!1}else if(lt){if(ut){let ot=Gt(j);e.texStorage2D(s.TEXTURE_2D,qt,tt,ot.width,ot.height)}Pt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,dt,L,j)}else e.texImage2D(s.TEXTURE_2D,0,tt,dt,L,j);R(v)&&v.mipmapsAutoUpdate===!0&&T(at),mt.__version=ht.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}l(ge,"uploadTexture");function Se(A,v,V){if(v.image.length!==6)return;let at=te(A,v),nt=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+V);let ht=n.get(nt);if(nt.version!==ht.__version||at===!0){e.activeTexture(s.TEXTURE0+V);let mt=Kt.getPrimaries(Kt.workingColorSpace),$=v.colorSpace===_i?null:Kt.getPrimaries(v.colorSpace),j=v.colorSpace===_i||mt===$?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let dt=v.isCompressedTexture||v.image[0].isCompressedTexture,L=v.image[0]&&v.image[0].isDataTexture,tt=[];for(let Mt=0;Mt<6;Mt++)!dt&&!L?tt[Mt]=E(v.image[Mt],!0,i.maxCubemapSize):tt[Mt]=L?v.image[Mt].image:v.image[Mt],tt[Mt]=Nt(v,tt[Mt]);let J=tt[0],ft=r.convert(v.format,v.colorSpace),lt=r.convert(v.type),ut=w(v.internalFormat,ft,lt,v.normalized,v.colorSpace),Pt=v.isVideoTexture!==!0,qt=ht.__version===void 0||at===!0,ot=nt.dataReady,Lt=M(v,J);Zt(s.TEXTURE_CUBE_MAP,v);let Wt;if(v.isDepthTexture){if(ut=f(v.format===gi,v.type),qt)if(Pt)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,ut,J.width,J.height);else for(let Mt=0;Mt<6;Mt++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ut,J.width,J.height,0,ft,lt,null)}else if(dt){Pt&&qt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Lt,ut,J.width,J.height);for(let Mt=0;Mt<6;Mt++){Wt=tt[Mt].mipmaps;for(let se=0;se<Wt.length;se++){let Re=Wt[se];v.format!==Nn?ft!==null?Pt?ot&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,se,0,0,Re.width,Re.height,ft,Re.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,se,ut,Re.width,Re.height,0,Re.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,se,0,0,Re.width,Re.height,ft,lt,Re.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,se,ut,Re.width,Re.height,0,ft,lt,Re.data)}}}else{if(Wt=v.mipmaps,Pt&&qt){Wt.length>0&&Lt++;let Mt=Gt(tt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Lt,ut,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(L){Pt?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,tt[Mt].width,tt[Mt].height,ft,lt,tt[Mt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ut,tt[Mt].width,tt[Mt].height,0,ft,lt,tt[Mt].data);for(let se=0;se<Wt.length;se++){let Ei=Wt[se].image[Mt].image;Pt?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,se+1,0,0,Ei.width,Ei.height,ft,lt,Ei.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,se+1,ut,Ei.width,Ei.height,0,ft,lt,Ei.data)}}else{Pt?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,ft,lt,tt[Mt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ut,ft,lt,tt[Mt]);for(let se=0;se<Wt.length;se++){let Re=Wt[se];Pt?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,se+1,0,0,ft,lt,Re.image[Mt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,se+1,ut,ft,lt,Re.image[Mt])}}}R(v)&&v.mipmapsAutoUpdate===!0&&T(s.TEXTURE_CUBE_MAP),ht.__version=nt.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}l(Se,"uploadCubeTexture");function re(A,v,V,at,nt,ht){let mt=r.convert(V.format,V.colorSpace),$=r.convert(V.type),j=w(V.internalFormat,mt,$,V.normalized,V.colorSpace),dt=n.get(v),L=n.get(V);if(L.__renderTarget=v,!dt.__hasExternalTextures){let tt=Math.max(1,v.width>>ht),J=Math.max(1,v.height>>ht);nt===s.TEXTURE_3D||nt===s.TEXTURE_2D_ARRAY?e.texImage3D(nt,ht,j,tt,J,v.depth,0,mt,$,null):e.texImage2D(nt,ht,j,tt,J,0,mt,$,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),_t(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,at,nt,L.__webglTexture,0,pe(v)):(nt===s.TEXTURE_2D||nt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,at,nt,L.__webglTexture,ht),e.bindFramebuffer(s.FRAMEBUFFER,null)}l(re,"setupFrameBufferTexture");function en(A,v,V){if(s.bindRenderbuffer(s.RENDERBUFFER,A),v.depthBuffer){let at=v.depthTexture,nt=at&&at.isDepthTexture?at.type:null,ht=f(v.stencilBuffer,nt),mt=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;_t(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pe(v),ht,v.width,v.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,pe(v),ht,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,ht,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,mt,s.RENDERBUFFER,A)}else{let at=v.textures;for(let nt=0;nt<at.length;nt++){let ht=at[nt],mt=r.convert(ht.format,ht.colorSpace),$=r.convert(ht.type),j=w(ht.internalFormat,mt,$,ht.normalized,ht.colorSpace);_t(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pe(v),j,v.width,v.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,pe(v),j,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,j,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}l(en,"setupRenderBufferStorage");function Ce(A,v,V){let at=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let nt=n.get(v.depthTexture);nt.__renderTarget=v;let ht=at?v.depthTexture.image[0]:v.depthTexture.image;(!nt.__webglTexture||ht.width!==v.width||ht.height!==v.height)&&(ht.width=v.width,ht.height=v.height,v.depthTexture.needsUpdate=!0),at?yt(v.depthTexture,0):vt(v.depthTexture,0);let mt=nt.__webglTexture,$=pe(v),j=at?s.TEXTURE_CUBE_MAP_POSITIVE_X+V:s.TEXTURE_2D,dt=v.depthTexture.format===gi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(v.depthTexture.format===hi)_t(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,dt,j,mt,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,dt,j,mt,0);else if(v.depthTexture.format===gi)_t(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,dt,j,mt,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,dt,j,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}l(Ce,"setupDepthTexture");function fn(A){let v=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){let at=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),at){let nt=l(()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,at.removeEventListener("dispose",nt)},"disposeEvent");at.addEventListener("dispose",nt),v.__depthDisposeCallback=nt}v.__boundDepthTexture=at}if(A.depthTexture&&!v.__autoAllocateDepthBuffer)if(V)for(let at=0;at<6;at++)Ce(v.__webglFramebuffer[at],A,at);else A.texture.mipmaps.length>0?Ce(v.__webglFramebuffer[0],A,0):Ce(v.__webglFramebuffer,A,0);else if(V){v.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[at]),v.__webglDepthbuffer[at]===void 0)v.__webglDepthbuffer[at]=s.createRenderbuffer(),en(v.__webglDepthbuffer[at],A,!1);else{let nt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=v.__webglDepthbuffer[at];s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,ht)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),en(v.__webglDepthbuffer,A,!1);else{let nt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,ht)}e.bindFramebuffer(s.FRAMEBUFFER,null)}l(fn,"setupDepthRenderbuffer");function pn(A,v,V){let at=n.get(A);v!==void 0&&re(at.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&fn(A)}l(pn,"rebindTextures");function mn(A){let v=A.texture,V=n.get(A),at=n.get(v);A.addEventListener("dispose",F),N(A);let nt=A.textures,ht=A.isWebGLCubeRenderTarget===!0,mt=nt.length>1;if(mt||(at.__webglTexture===void 0&&(at.__webglTexture=s.createTexture()),at.__version=v.version,a.memory.textures++),ht){V.__webglFramebuffer=[];for(let $=0;$<6;$++)if(v.mipmaps.length>0){V.__webglFramebuffer[$]=[];for(let j=0;j<v.mipmaps.length;j++)V.__webglFramebuffer[$][j]=s.createFramebuffer()}else V.__webglFramebuffer[$]=s.createFramebuffer()}else{if(v.mipmaps.length>0){V.__webglFramebuffer=[];for(let $=0;$<v.mipmaps.length;$++)V.__webglFramebuffer[$]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(mt)for(let $=0,j=nt.length;$<j;$++){let dt=n.get(nt[$]);dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&_t(A)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let $=0;$<nt.length;$++){let j=nt[$];V.__webglColorRenderbuffer[$]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[$]);let dt=r.convert(j.format,j.colorSpace),L=r.convert(j.type),tt=w(j.internalFormat,dt,L,j.normalized,j.colorSpace,A.isXRRenderTarget===!0),J=pe(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,J,tt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$,s.RENDERBUFFER,V.__webglColorRenderbuffer[$])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),en(V.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ht){e.bindTexture(s.TEXTURE_CUBE_MAP,at.__webglTexture),Zt(s.TEXTURE_CUBE_MAP,v);for(let $=0;$<6;$++)if(v.mipmaps.length>0)for(let j=0;j<v.mipmaps.length;j++)re(V.__webglFramebuffer[$][j],A,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,j);else re(V.__webglFramebuffer[$],A,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);R(v)?T(s.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}else if(mt){for(let $=0,j=nt.length;$<j;$++){let dt=nt[$],L=n.get(dt),tt=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(tt=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(tt,L.__webglTexture),Zt(tt,dt),re(V.__webglFramebuffer,A,dt,s.COLOR_ATTACHMENT0+$,tt,0),R(dt)&&T(tt)}e.unbindTexture()}else{let $=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&($=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture($,at.__webglTexture),Zt($,v),v.mipmaps.length>0)for(let j=0;j<v.mipmaps.length;j++)re(V.__webglFramebuffer[j],A,v,s.COLOR_ATTACHMENT0,$,j);else re(V.__webglFramebuffer,A,v,s.COLOR_ATTACHMENT0,$,0);R(v)?T($):v.mipmaps.length>0&&s.texParameteri($,s.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&fn(A)}l(mn,"setupRenderTarget");function O(A){let v=A.textures;for(let V=0,at=v.length;V<at;V++){let nt=v[V];if(R(nt)&&nt.mipmapsAutoUpdate===!0){let ht=C(A),mt=n.get(nt).__webglTexture;e.bindTexture(ht,mt),T(ht),e.unbindTexture()}}}l(O,"updateRenderTargetMipmap");let gn=[];function fe(A){if(A.samples>0){if(_t(A)===!1){let v=A.textures,V=A.width,at=A.height,nt=s.COLOR_BUFFER_BIT,ht=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=n.get(A),$=v.length>1;if($)for(let dt=0;dt<v.length;dt++)e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let dt=0;dt<v.length;dt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(nt|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(nt|=s.STENCIL_BUFFER_BIT)),$){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,mt.__webglColorRenderbuffer[dt]);let L=n.get(v[dt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,L,0)}s.blitFramebuffer(0,0,V,at,0,0,V,at,nt,s.NEAREST),c===!0&&(gn.length=0,gn.push(s.COLOR_ATTACHMENT0+dt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&gn.push(ht),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,gn))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),$)for(let dt=0;dt<v.length;dt++){e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,mt.__webglColorRenderbuffer[dt]);let L=n.get(v[dt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,L,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let v=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}l(fe,"updateMultisampleRenderTarget");function pe(A){return Math.min(i.maxSamples,A.samples)}l(pe,"getRenderTargetSamples");function _t(A){let v=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}l(_t,"useMultisampledRTT");function we(A){let v=a.render.frame;u.get(A)!==v&&(u.set(A,v),A.update())}l(we,"updateVideoTexture");function Nt(A,v){let V=A.colorSpace,at=A.format,nt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==Yr&&V!==_i&&(Kt.getTransfer(V)===ie?(at!==Nn||nt!==Qe)&&Ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",V)),v}l(Nt,"verifyColorSpace");function Gt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(h.width=A.naturalWidth||A.width,h.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(h.width=A.displayWidth,h.height=A.displayHeight):(h.width=A.width,h.height=A.height),h}l(Gt,"getDimensions"),this.allocateTextureUnit=zt,this.resetTextureUnits=et,this.getTextureUnits=it,this.setTextureUnits=wt,this.setTexture2D=vt,this.setTexture2DArray=Et,this.setTexture3D=It,this.setTextureCube=yt,this.rebindTextures=pn,this.setupRenderTarget=mn,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=fn,this.setupFrameBufferTexture=re,this.useMultisampledRTT=_t,this.dispose=z}l(lM,"WebGLTextures");function cM(s,t){function e(n,i=_i){let r,a=Kt.getTransfer(i);if(n===Qe)return s.UNSIGNED_BYTE;if(n===Fl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ol)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Yh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Zh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xh)return s.BYTE;if(n===qh)return s.SHORT;if(n===fr)return s.UNSIGNED_SHORT;if(n===Ul)return s.INT;if(n===Ln)return s.UNSIGNED_INT;if(n===Dn)return s.FLOAT;if(n===ln)return s.HALF_FLOAT;if(n===Jh)return s.ALPHA;if(n===$h)return s.RGB;if(n===Nn)return s.RGBA;if(n===hi)return s.DEPTH_COMPONENT;if(n===gi)return s.DEPTH_STENCIL;if(n===Kh)return s.RED;if(n===Bl)return s.RED_INTEGER;if(n===qn)return s.RG;if(n===zl)return s.RG_INTEGER;if(n===kl)return s.RGBA_INTEGER;if(n===xa||n===va||n===ya||n===Ma)if(a===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vl||n===Gl||n===Hl||n===Wl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Vl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Gl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xl||n===ql||n===Yl||n===Zl||n===Jl||n===ba||n===$l)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xl||n===ql)return a===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Yl)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Zl)return r.COMPRESSED_R11_EAC;if(n===Jl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ba)return r.COMPRESSED_RG11_EAC;if(n===$l)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Kl||n===Ql||n===jl||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===ac||n===oc||n===lc||n===cc||n===hc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Kl)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ql)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===jl)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===tc)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ec)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nc)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ic)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sc)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rc)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ac)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oc)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lc)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cc)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hc)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===uc||n===dc||n===fc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===uc)return a===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pc||n===mc||n===Sa||n===gc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===pc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===mc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ms?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return l(e,"convert"),{convert:e}}l(cM,"WebGLUtils");var hM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uM=`
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

}`,Fd=class Fd{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new oa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new an({vertexShader:hM,fragmentShader:uM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new oe(new Bi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};l(Fd,"WebXRDepthSensing");var Ad=Fd,Od=class Od extends Vn{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,h=null,u=null,p=null,d=null,g=null,x=null,S=typeof XRWebGLBinding<"u",_=new Ad,m={},E=e.getContextAttributes(),R=null,T=null,C=[],w=[],f=new Ot,M=null,N=null,P=new qe;P.viewport=new me;let D=new qe;D.viewport=new me;let F=[P,D],B=new pl,I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let vt=C[Q];return vt===void 0&&(vt=new ir,C[Q]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(Q){let vt=C[Q];return vt===void 0&&(vt=new ir,C[Q]=vt),vt.getGripSpace()},this.getHand=function(Q){let vt=C[Q];return vt===void 0&&(vt=new ir,C[Q]=vt),vt.getHandSpace()};function Z(Q){let vt=w.indexOf(Q.inputSource);if(vt===-1)return;let Et=C[vt];Et!==void 0&&(Et.update(Q.inputSource,Q.frame,h||a),Et.dispatchEvent({type:Q.type,data:Q.inputSource}))}l(Z,"onSessionEvent");function G(){i.removeEventListener("select",Z),i.removeEventListener("selectstart",Z),i.removeEventListener("selectend",Z),i.removeEventListener("squeeze",Z),i.removeEventListener("squeezestart",Z),i.removeEventListener("squeezeend",Z),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",st);for(let Q=0;Q<C.length;Q++){let vt=w[Q];vt!==null&&(w[Q]=null,C[Q].disconnect(vt))}I=null,z=null,_.reset();for(let Q in m)delete m[Q];if(t.setRenderTarget(R),g=null,d=null,p=null,i=null,T=null,zt.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(f.width,f.height,!1),N!==null){let Q=N.camera;Q.fov=N.fov,Q.zoom=N.zoom,Q.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}l(G,"onSessionEnd"),this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(Q){h=Q},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return p===null&&S&&(p=new XRWebGLBinding(i,e)),p},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(R=t.getRenderTarget(),i.addEventListener("select",Z),i.addEventListener("selectstart",Z),i.addEventListener("selectend",Z),i.addEventListener("squeeze",Z),i.addEventListener("squeezestart",Z),i.addEventListener("squeezeend",Z),i.addEventListener("end",G),i.addEventListener("inputsourceschange",st),E.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(f),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,It=null,yt=null;E.depth&&(yt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Et=E.stencil?gi:hi,It=E.stencil?ms:Ln);let kt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};p=this.getBinding(),d=p.createProjectionLayer(kt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new rn(d.textureWidth,d.textureHeight,{format:Nn,type:Qe,depthTexture:new fi(d.textureWidth,d.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Et={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(i,e,Et),i.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),T=new rn(g.framebufferWidth,g.framebufferHeight,{format:Nn,type:Qe,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await i.requestReferenceSpace(o),zt.setContext(i),zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function st(Q){for(let vt=0;vt<Q.removed.length;vt++){let Et=Q.removed[vt],It=w.indexOf(Et);It>=0&&(w[It]=null,C[It].disconnect(Et))}for(let vt=0;vt<Q.added.length;vt++){let Et=Q.added[vt],It=w.indexOf(Et);if(It===-1){for(let kt=0;kt<C.length;kt++)if(kt>=w.length){w.push(Et),It=kt;break}else if(w[kt]===null){w[kt]=Et,It=kt;break}if(It===-1)break}let yt=C[It];yt&&yt.connect(Et)}}l(st,"onInputSourcesChange");function q(Q,vt){vt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(vt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}l(q,"updateCamera"),this.updateCamera=function(Q){if(i===null)return;let vt=Q.near,Et=Q.far;_.texture!==null&&(_.depthNear>0&&(vt=_.depthNear),_.depthFar>0&&(Et=_.depthFar)),B.near=D.near=P.near=vt,B.far=D.far=P.far=Et,(I!==B.near||z!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),I=B.near,z=B.far),B.layers.mask=Q.layers.mask|6,P.layers.mask=B.layers.mask&-5,D.layers.mask=B.layers.mask&-3;let It=Q.parent,yt=B.cameras;q(B,It);for(let kt=0;kt<yt.length;kt++)q(yt[kt],It);B.projectionMatrix.copy(P.projectionMatrix),B.projectionMatrixInverse.copy(P.projectionMatrixInverse),N===null&&Q.isPerspectiveCamera&&(N={camera:Q,fov:Q.fov,zoom:Q.zoom}),et(Q,B,It)};function et(Q,vt,Et){Et===null?Q.matrix.copy(vt.matrixWorld):(Q.matrix.copy(Et.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(vt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(vt.projectionMatrix),Q.projectionMatrixInverse.copy(vt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=qo*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}l(et,"updateUserCamera"),this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&g===null))return c},this.setFoveation=function(Q){c=Q,d!==null&&(d.fixedFoveation=Q),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=Q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(B)},this.getCameraTexture=function(Q){return m[Q]};let it=null;function wt(Q,vt){if(u=vt.getViewerPose(h||a),x=vt,u!==null){let Et=u.views;g!==null&&(t.setRenderTargetFramebuffer(T,g.framebuffer),t.setRenderTarget(T));let It=!1;Et.length!==B.cameras.length&&(B.cameras.length=0,It=!0);for(let Dt=0;Dt<Et.length;Dt++){let Zt=Et[Dt],te=null;if(g!==null)te=g.getViewport(Zt);else{let xe=p.getViewSubImage(d,Zt);te=xe.viewport,Dt===0&&(t.setRenderTargetTextures(T,xe.colorTexture,xe.depthStencilTexture),t.setRenderTarget(T))}let Xt=F[Dt];Xt===void 0&&(Xt=new qe,Xt.layers.enable(Dt),Xt.viewport=new me,F[Dt]=Xt),Xt.matrix.fromArray(Zt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(Zt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(te.x,te.y,te.width,te.height),Dt===0&&(B.matrix.copy(Xt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),It===!0&&B.cameras.push(Xt)}let yt=i.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&S){p=n.getBinding();let Dt=p.getDepthInformation(Et[0]);Dt&&Dt.isValid&&Dt.texture&&_.init(Dt,i.renderState)}if(yt&&yt.includes("camera-access")&&S){t.state.unbindTexture(),p=n.getBinding();for(let Dt=0;Dt<Et.length;Dt++){let Zt=Et[Dt].camera;if(Zt){let te=m[Zt];te||(te=new oa,m[Zt]=te);let Xt=p.getCameraImage(Zt);te.sourceTexture=Xt}}}}for(let Et=0;Et<C.length;Et++){let It=w[Et],yt=C[Et];It!==null&&yt!==void 0&&yt.update(It,vt,h||a)}it&&it(Q,vt),vt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:vt}),x=null}l(wt,"onAnimationFrame");let zt=new mm;zt.setAnimationLoop(wt),this.setAnimationLoop=function(Q){it=Q},this.dispose=function(){}}};l(Od,"WebXRManager");var Cd=Od,dM=new ue,Em=new Vt;Em.set(-1,0,0,0,1,0,0,0,1);function fM(s,t){function e(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}l(e,"refreshTransformUniform");function n(_,m){m.color.getRGB(_.fogColor.value,iu(s)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}l(n,"refreshFogUniforms");function i(_,m,E,R,T){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(_,m):m.isMeshLambertMaterial?(r(_,m),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(_,m),p(_,m)):m.isMeshPhongMaterial?(r(_,m),u(_,m),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(_,m),d(_,m),m.isMeshPhysicalMaterial&&g(_,m,T)):m.isMeshMatcapMaterial?(r(_,m),x(_,m)):m.isMeshDepthMaterial?r(_,m):m.isMeshDistanceMaterial?(r(_,m),S(_,m)):m.isMeshNormalMaterial?r(_,m):m.isLineBasicMaterial?(a(_,m),m.isLineDashedMaterial&&o(_,m)):m.isPointsMaterial?c(_,m,E,R):m.isSpriteMaterial?h(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}l(i,"refreshMaterialUniforms");function r(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,e(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,e(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===Ze&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,e(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===Ze&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,e(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,e(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);let E=t.get(m),R=E.envMap,T=E.envMapRotation;R&&(_.envMap.value=R,_.envMapRotation.value.setFromMatrix4(dM.makeRotationFromEuler(T)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(Em),_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,_.aoMapTransform))}l(r,"refreshUniformsCommon");function a(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,e(m.map,_.mapTransform))}l(a,"refreshUniformsLine");function o(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}l(o,"refreshUniformsDash");function c(_,m,E,R){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*E,_.scale.value=R*.5,m.map&&(_.map.value=m.map,e(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}l(c,"refreshUniformsPoints");function h(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,e(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}l(h,"refreshUniformsSprites");function u(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}l(u,"refreshUniformsPhong");function p(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}l(p,"refreshUniformsToon");function d(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}l(d,"refreshUniformsStandard");function g(_,m,E){_.ior.value=m.ior,m.diffuseRoughness>0&&(_.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(_.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,_.diffuseRoughnessMapTransform))),m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ze&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.retroreflectivity>0&&(_.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,_.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=E.texture,_.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,_.specularIntensityMapTransform))}l(g,"refreshUniformsPhysical");function x(_,m){m.matcap&&(_.matcap.value=m.matcap)}l(x,"refreshUniformsMatcap");function S(_,m){let E=t.get(m).light;_.referencePosition.value.setFromMatrixPosition(E.matrixWorld),_.nearDistance.value=E.shadow.camera.near,_.farDistance.value=E.shadow.camera.far}return l(S,"refreshUniformsDistance"),{refreshFogUniforms:n,refreshMaterialUniforms:i}}l(fM,"WebGLMaterials");function pM(s,t,e,n){let i={},r={};function a(E,R){let T=R.program;n.uniformBlockBinding(E,T,i[E.id])}l(a,"bind");function o(E,R){let T=i[E.id];T===void 0&&(x(E),T=c(E),i[E.id]=T,E.addEventListener("dispose",_));let C=R.program;n.updateUBOMapping(E,C);let w=t.render.frame;r[E.id]!==w&&(h(E),r[E.id]=w)}l(o,"update");function c(E){let R=s.createBuffer(),T=E.__size,C=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,T,C),s.bindBuffer(s.UNIFORM_BUFFER,null),R}l(c,"createBuffer");function h(E){let R=i[E.id],T=E.uniforms,C=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let w=0,f=T.length;w<f;w++){let M=T[w];if(Array.isArray(M))for(let N=0,P=M.length;N<P;N++)u(M[N],w,N,C);else u(M,w,0,C)}s.bindBuffer(s.UNIFORM_BUFFER,null)}l(h,"updateBufferData");function u(E,R,T,C){if(d(E,R,T,C)===!0){let w=E.__offset,f=E.value;if(Array.isArray(f)){let M=0;for(let N=0;N<f.length;N++){let P=f[N],D=S(P,!0);p(P,E.__data,M),M+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else p(f,E.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,w,E.__data)}}l(u,"updateUniform");function p(E,R,T){typeof E=="number"||typeof E=="boolean"?R[T]=E:E.isMatrix3?(R[T]=E.elements[0],R[T+1]=E.elements[1],R[T+2]=E.elements[2],R[T+3]=0,R[T+4]=E.elements[3],R[T+5]=E.elements[4],R[T+6]=E.elements[5],R[T+7]=0,R[T+8]=E.elements[6],R[T+9]=E.elements[7],R[T+10]=E.elements[8],R[T+11]=0):ArrayBuffer.isView(E)?R.set(E.subarray(0,R.length-T),T):E.toArray(R,T)}l(p,"writeUniformValue");function d(E,R,T,C){let w=E.value,f=R+"_"+T;if(Array.isArray(w)){C[f]===void 0&&(C[f]=[]);let M=C[f],N=!1;for(let P=0;P<w.length;P++)g(w[P],M,P)===!0&&(N=!0);return N}return g(w,C,f)}l(d,"hasUniformChanged");function g(E,R,T){if(R[T]===void 0)return typeof E=="number"||typeof E=="boolean"?R[T]=E:ArrayBuffer.isView(E)?R[T]=E.slice():R[T]=E.clone(),!0;{let C=R[T];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return R[T]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(C.equals(E)===!1)return C.copy(E),!0}}return!1}l(g,"hasValueChanged");function x(E){let R=E.uniforms,T=0,C=16;for(let f=0,M=R.length;f<M;f++){let N=Array.isArray(R[f])?R[f]:[R[f]];for(let P=0,D=N.length;P<D;P++){let F=N[P],B=Array.isArray(F.value)?F.value:[F.value],I=Array.isArray(R[f])||Array.isArray(F.value),z=T;for(let G=0,st=B.length;G<st;G++){let q=B[G],et=S(q,I),it=T%C,wt=it%et.boundary,zt=it+wt;T+=wt,zt!==0&&C-zt<et.storage&&(T+=C-zt),G===0&&(z=T),T+=et.storage}let Z=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new Z((T-z)/Float32Array.BYTES_PER_ELEMENT),F.__offset=z}}let w=T%C;return w>0&&(T+=C-w),E.__size=T,E.__cache={},this}l(x,"prepareUniformsGroup");function S(E,R){let T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=16,T.storage=48):E.isMatrix4?(T.boundary=16,T.storage=64):E.isTexture?Ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(T.boundary=16,T.storage=E.byteLength):Ft("WebGLRenderer: Unsupported uniform value type.",E),R===!0&&(T.boundary=16,T.storage=Math.ceil(T.storage/16)*16),T}l(S,"getUniformSize");function _(E){let R=E.target;R.removeEventListener("dispose",_),s.deleteBuffer(i[R.id]),delete i[R.id],delete r[R.id]}l(_,"onUniformsGroupsDispose");function m(){for(let E in i)s.deleteBuffer(i[E]);i={},r={}}return l(m,"dispose"),{bind:a,update:o,dispose:m}}l(pM,"WebGLUniformsGroups");var mM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yn=null;function gM(){return Yn===null&&(Yn=new or(mM,16,16,qn,ln),Yn.name="DFG_LUT",Yn.minFilter=De,Yn.magFilter=De,Yn.wrapS=xn,Yn.wrapT=xn,Yn.generateMipmaps=!1,Yn.needsUpdate=!0),Yn}l(gM,"getDFGLUT");var Bd=class Bd{constructor(t={}){let{canvas:e=Op(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:g=Qe}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let S=g,_=new Set([kl,zl,Bl]),m=new Set([Qe,Ln,fr,ms,Fl,Ol]),E=new Uint32Array(4),R=new Int32Array(4),T={textures:[],min:[],max:[],resolution:[]},C=null,w=null,f=[],M=[],N=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,D=!1,F=null,B=null,I=null,z=null;this._outputColorSpace=Ue;let Z=0,G=0,st=null,q=-1,et=null,it=new me,wt=new me,zt=null,Q=new Ut(0),vt=0,Et=e.width,It=e.height,yt=1,kt=null,de=null,Dt=new me(0,0,Et,It),Zt=new me(0,0,Et,It),te=!1,Xt=new Oi,xe=new jo,ge=!1,Se=!1,re=new ue,en=new H,Ce=new me,fn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},pn=!1;function mn(){return st===null?yt:1}l(mn,"getTargetPixelRatio");let O=n;function gn(b,U){return e.getContext(b,U)}l(gn,"getContext");let fe,pe,_t,we,Nt,Gt,A,v,V,at,nt,ht,mt,$,j,dt,L,tt,J,ft,lt,ut,Pt;try{let b={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Lt,!1),e.addEventListener("webglcontextrestored",Wt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),O===null){let U="webgl2";if(O=gn(U,b),O===null)throw gn(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}qt()}catch(b){throw e.removeEventListener("webglcontextlost",Lt,!1),e.removeEventListener("webglcontextrestored",Wt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),Bt("WebGLRenderer: "+b.message),b}function qt(){fe=new Av(O),fe.init(),lt=new cM(O,fe),pe=new gv(O,fe,t,lt),_t=new oM(O,fe),pe.reversedDepthBuffer&&d&&_t.buffers.depth.setReversed(!0),B=O.createFramebuffer(),I=O.createFramebuffer(),z=O.createFramebuffer(),we=new Pv(O),Nt=new Yy,Gt=new lM(O,fe,_t,Nt,pe,lt,we),A=new Tv(P),v=new L0(O),ut=new pv(O,v),V=new Cv(O,v,we,ut),at=new Lv(O,V,v,ut,we),tt=new Iv(O,pe,Gt),j=new _v(Nt),nt=new qy(P,A,fe,pe,ut,j),ht=new fM(P,Nt),mt=new Jy,$=new eM(fe),L=new fv(P,A,_t,at,x,c),dt=new aM(P,at,pe),Pt=new pM(O,we,pe,_t),J=new mv(O,fe,we),ft=new Rv(O,fe,we),we.programs=nt.programs,P.capabilities=pe,P.extensions=fe,P.properties=Nt,P.renderLists=mt,P.shadowMap=dt,P.state=_t,P.info=we}l(qt,"initGLContext"),S!==Qe&&(N=new Nv(S,e.width,e.height,o,i,r));let ot=new Cd(P,O);this.xr=ot,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let b=fe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=fe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return yt},this.setPixelRatio=function(b){b!==void 0&&(yt=b,this.setSize(Et,It,!1))},this.getSize=function(b){return b.set(Et,It)},this.setSize=function(b,U,X=!0){if(ot.isPresenting){Ft("WebGLRenderer: Can't change size while VR device is presenting.");return}Et=b,It=U,e.width=Math.floor(b*yt),e.height=Math.floor(U*yt),X===!0&&(e.style.width=b+"px",e.style.height=U+"px"),N!==null&&N.setSize(e.width,e.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(Et*yt,It*yt).floor()},this.setDrawingBufferSize=function(b,U,X){Et=b,It=U,yt=X,e.width=Math.floor(b*X),e.height=Math.floor(U*X),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(S===Qe){Bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){Ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(it)},this.getViewport=function(b){return b.copy(Dt)},this.setViewport=function(b,U,X,k){b.isVector4?Dt.set(b.x,b.y,b.z,b.w):Dt.set(b,U,X,k),_t.viewport(it.copy(Dt).multiplyScalar(mn()).round())},this.getScissor=function(b){return b.copy(Zt)},this.setScissor=function(b,U,X,k){b.isVector4?Zt.set(b.x,b.y,b.z,b.w):Zt.set(b,U,X,k),_t.scissor(wt.copy(Zt).multiplyScalar(mn()).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(b){_t.setScissorTest(te=b)},this.setOpaqueSort=function(b){kt=b},this.setTransparentSort=function(b){de=b},this.getClearColor=function(b){return b.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,X=!0){let k=0;if(b){let W=!1;if(st!==null){let gt=st.texture.format;W=_.has(gt)}if(W){let gt=st.texture.type,Tt=m.has(gt),pt=L.getClearColor(),bt=L.getClearAlpha(),Rt=pt.r,Ht=pt.g,Jt=pt.b;Tt?(E[0]=Rt,E[1]=Ht,E[2]=Jt,E[3]=bt,O.clearBufferuiv(O.COLOR,0,E)):(R[0]=Rt,R[1]=Ht,R[2]=Jt,R[3]=bt,O.clearBufferiv(O.COLOR,0,R))}else k|=O.COLOR_BUFFER_BIT}U&&(k|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(k|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&O.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),F=b},this.dispose=function(){e.removeEventListener("webglcontextlost",Lt,!1),e.removeEventListener("webglcontextrestored",Wt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),L.dispose(),mt.dispose(),$.dispose(),Gt.dispose(),Nt.dispose(),A.dispose(),at.dispose(),V.dispose(),ut.dispose(),Pt.dispose(),nt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",vf),ot.removeEventListener("sessionend",yf),ts.stop()};function Lt(b){b.preventDefault(),$r("WebGLRenderer: Context Lost."),D=!0}l(Lt,"onContextLost");function Wt(){$r("WebGLRenderer: Context Restored."),D=!1;let b=we.autoReset,U=dt.enabled,X=dt.autoUpdate,k=dt.needsUpdate,W=dt.type;qt(),we.autoReset=b,dt.enabled=U,dt.autoUpdate=X,dt.needsUpdate=k,dt.type=W}l(Wt,"onContextRestore");function Mt(b){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}l(Mt,"onContextCreationError");function se(b){let U=b.target;U.removeEventListener("dispose",se),Re(U)}l(se,"onMaterialDispose");function Re(b){Ei(b),Nt.remove(b)}l(Re,"deallocateMaterial");function Ei(b){let U=Nt.get(b).programs;U!==void 0&&(U.forEach(function(X){nt.releaseProgram(X)}),b.isShaderMaterial&&nt.releaseShaderCache(b))}l(Ei,"releaseMaterialProgramReferences"),this.renderBufferDirect=function(b,U,X,k,W,gt){U===null&&(U=fn);let Tt=W.isMesh&&W.matrixWorld.determinantAffine()<0,pt=Fg(b,U,X,k,W);_t.setMaterial(k,Tt);let bt=X.index,Rt=1;if(k.wireframe===!0){if(bt=V.getWireframeAttribute(X),bt===void 0)return;Rt=2}let Ht=X.drawRange,Jt=X.attributes.position,At=Ht.start*Rt,$t=(Ht.start+Ht.count)*Rt;gt!==null&&(At=Math.max(At,gt.start*Rt),$t=Math.min($t,(gt.start+gt.count)*Rt)),bt!==null?(At=Math.max(At,0),$t=Math.min($t,bt.count)):Jt!=null&&(At=Math.max(At,0),$t=Math.min($t,Jt.count));let Me=$t-At;if(Me<0||Me===1/0)return;ut.setup(W,k,pt,X,bt);let ce,ae=J;if(bt!==null&&(ce=v.get(bt),ae=ft,ae.setIndex(ce)),W.isMesh)k.wireframe===!0?(_t.setLineWidth(k.wireframeLinewidth*mn()),ae.setMode(O.LINES)):ae.setMode(O.TRIANGLES);else if(W.isLine){let Be=k.linewidth;Be===void 0&&(Be=1),_t.setLineWidth(Be*mn()),W.isLineSegments?ae.setMode(O.LINES):W.isLineLoop?ae.setMode(O.LINE_LOOP):ae.setMode(O.LINE_STRIP)}else W.isPoints?ae.setMode(O.POINTS):W.isSprite&&ae.setMode(O.TRIANGLES);if(W.isBatchedMesh)if(fe.get("WEBGL_multi_draw"))ae.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Be=W._multiDrawStarts,Ct=W._multiDrawCounts,We=W._multiDrawCount,ee=bt?v.get(bt).bytesPerElement:1,es=Nt.get(k).currentProgram.getUniforms();for(let ze=0;ze<We;ze++)es.setValue(O,"_gl_DrawID",ze),ae.render(Be[ze]/ee,Ct[ze])}else if(W.isInstancedMesh)ae.renderInstances(At,Me,W.count);else if(X.isInstancedBufferGeometry){let Be=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ct=Math.min(X.instanceCount,Be);ae.renderInstances(At,Me,Ct)}else ae.render(At,Me)};function xf(b,U,X,k){F!==null&&b.isNodeMaterial&&F.setObject(k,b),ge===!0&&j.setState(b,X,!1),b.transparent===!0&&b.side===Wn&&b.forceSinglePass===!1?(b.side=Ze,b.needsUpdate=!0,Fr(b,U,k),b.side=Gi,b.needsUpdate=!0,Fr(b,U,k),b.side=Wn):Fr(b,U,k)}l(xf,"prepareMaterial"),this.compile=function(b,U,X=null){X===null&&(X=b),F!==null&&F.renderStart(b,U,X),w=$.get(X),w.init(U),M.push(w),X.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),b!==X&&b.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),w.setupLights(),F!==null&&F.updateLights(w.state.lightsArray),Se=this.localClippingEnabled,ge=j.init(this.clippingPlanes,Se),ge===!0&&j.setGlobalState(this.clippingPlanes,U),F!==null&&dt.render(w.state.shadowsArray,X,U);let k=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let gt=W.material;if(gt)if(Array.isArray(gt))for(let Tt=0;Tt<gt.length;Tt++){let pt=gt[Tt];xf(pt,X,U,W),k.add(pt)}else xf(gt,X,U,W),k.add(gt)}),w=M.pop(),F!==null&&F.renderEnd(),k},this.compileAsync=function(b,U,X=null){let k=this.compile(b,U,X);return new Promise(W=>{function gt(){if(k.forEach(function(Tt){let bt=Nt.get(Tt).currentProgram;(bt===void 0||bt.isReady())&&k.delete(Tt)}),k.size===0){W(b);return}setTimeout(gt,10)}l(gt,"checkMaterialsReady"),fe.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Zc=null;function Ng(b){Zc&&Zc(b)}l(Ng,"onAnimationFrame");function vf(){ts.stop()}l(vf,"onXRSessionStart");function yf(){ts.start()}l(yf,"onXRSessionEnd");let ts=new mm;ts.setAnimationLoop(Ng),typeof self<"u"&&ts.setContext(self),this.setAnimationLoop=function(b){Zc=b,ot.setAnimationLoop(b),b===null?ts.stop():ts.start()},ot.addEventListener("sessionstart",vf),ot.addEventListener("sessionend",yf),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;F!==null&&F.renderStart(b,U);let X=ot.enabled===!0&&ot.isPresenting===!0,k=N!==null&&(st===null||X)&&N.begin(P,st);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(U),U=ot.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,U,st),w=$.get(b,M.length),w.init(U),w.state.textureUnits=Gt.getTextureUnits(),M.push(w),re.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?xe.setFromArrayCamera(U):Xt.setFromProjectionMatrix(re,vn,U.reversedDepth),Se=this.localClippingEnabled,ge=j.init(this.clippingPlanes,Se),C=mt.get(b,f.length),C.init(),f.push(C),this.info.render.frame++,ot.enabled===!0&&ot.isPresenting===!0){let Tt=P.xr.getDepthSensingMesh();Tt!==null&&Jc(Tt,U,-1/0,P.sortObjects)}Jc(b,U,0,P.sortObjects),C.finish(),F!==null&&F.updateLights(w.state.lightsArray),P.sortObjects===!0&&C.sort(kt,de),pn=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,pn&&L.addToRenderList(C,b),this.info.autoReset===!0&&this.info.reset(),ge===!0&&j.beginShadows();let W=w.state.shadowsArray;if(dt.render(W,b,U),ge===!0&&j.endShadows(),(k&&N.hasRenderPass())===!1){let Tt=C.opaque,pt=C.transmissive;if(w.setupLights(),U.isArrayCamera){let bt=U.cameras;if(pt.length>0)for(let Rt=0,Ht=bt.length;Rt<Ht;Rt++){let Jt=bt[Rt];bf(Tt,pt,b,Jt)}pn&&L.render(b);for(let Rt=0,Ht=bt.length;Rt<Ht;Rt++){let Jt=bt[Rt];Mf(C,b,Jt,Jt.viewport)}}else pt.length>0&&bf(Tt,pt,b,U),pn&&L.render(b),Mf(C,b,U)}st!==null&&G===0&&(Gt.updateMultisampleRenderTarget(st),Gt.updateRenderTargetMipmap(st)),k&&N.end(P),b.isScene===!0&&b.onAfterRender(P,b,U),ut.resetDefaultState(),q=-1,et=null,M.pop(),M.length>0?(w=M[M.length-1],Gt.setTextureUnits(w.state.textureUnits),ge===!0&&j.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,f.pop(),f.length>0?C=f[f.length-1]:C=null,F!==null&&F.renderEnd()};function Jc(b,U,X,k){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){let Tt=U.isArrayCamera?xe:Xt;if(!b.frustumCulled||b.intersectsFrustum(Tt)){k&&Ce.setFromMatrixPosition(b.matrixWorld).applyMatrix4(re);let pt=at.update(b),bt=b.material;bt.visible&&C.push(b,pt,bt,X,Ce.z,null,U)}}else if(b.isMesh||b.isLine||b.isPoints){let Tt=U.isArrayCamera?xe:Xt;if(!b.frustumCulled||b.intersectsFrustum(Tt)){let pt=at.update(b),bt=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ce.copy(b.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Ce.copy(pt.boundingSphere.center)),Ce.applyMatrix4(b.matrixWorld).applyMatrix4(re)),Array.isArray(bt)){let Rt=pt.groups;for(let Ht=0,Jt=Rt.length;Ht<Jt;Ht++){let At=Rt[Ht],$t=bt[At.materialIndex];$t&&$t.visible&&C.push(b,pt,$t,X,Ce.z,At,U)}}else bt.visible&&C.push(b,pt,bt,X,Ce.z,null,U)}}}let gt=b.children;for(let Tt=0,pt=gt.length;Tt<pt;Tt++)Jc(gt[Tt],U,X,k)}l(Jc,"projectObject");function Mf(b,U,X,k){let{opaque:W,transmissive:gt,transparent:Tt}=b;w.setupLightsView(X),ge===!0&&j.setGlobalState(P.clippingPlanes,X),k&&_t.viewport(it.copy(k)),W.length>0&&lo(W,U,X),gt.length>0&&lo(gt,U,X),Tt.length>0&&lo(Tt,U,X),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}l(Mf,"renderScene");function bf(b,U,X,k){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[k.id]===void 0){let At=fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[k.id]=new rn(1,1,{generateMipmaps:!0,type:At?ln:Qe,minFilter:mi,samples:Math.max(4,pe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Kt.workingColorSpace})}let gt=w.state.transmissionRenderTarget[k.id],Tt=k.viewport||it;gt.setSize(Tt.z*P.transmissionResolutionScale,Tt.w*P.transmissionResolutionScale);let pt=P.getRenderTarget(),bt=P.getActiveCubeFace(),Rt=P.getActiveMipmapLevel();P.setRenderTarget(gt),P.getClearColor(Q),vt=P.getClearAlpha(),vt<1&&P.setClearColor(16777215,.5),P.clear(),pn&&L.render(X);let Ht=P.toneMapping;P.toneMapping=Xn;let Jt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),w.setupLightsView(k),ge===!0&&j.setGlobalState(P.clippingPlanes,k),lo(b,X,k),Gt.updateMultisampleRenderTarget(gt),Gt.updateRenderTargetMipmap(gt),fe.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let $t=0,Me=U.length;$t<Me;$t++){let ce=U[$t],{object:ae,geometry:Be,material:Ct,group:We}=ce;if(Ct.side===Wn&&ae.layers.test(k.layers)){let ee=Ct.side;Ct.side=Ze,Ct.needsUpdate=!0,Sf(ae,X,k,Be,Ct,We),Ct.side=ee,Ct.needsUpdate=!0,At=!0}}At===!0&&(Gt.updateMultisampleRenderTarget(gt),Gt.updateRenderTargetMipmap(gt))}P.setRenderTarget(pt,bt,Rt),P.setClearColor(Q,vt),Jt!==void 0&&(k.viewport=Jt),P.toneMapping=Ht}l(bf,"renderTransmissionPass");function lo(b,U,X){let k=U.isScene===!0?U.overrideMaterial:null;for(let W=0,gt=b.length;W<gt;W++){let Tt=b[W],{object:pt,geometry:bt,group:Rt}=Tt,Ht=Tt.material;Ht.allowOverride===!0&&k!==null&&(Ht=k),pt.layers.test(X.layers)&&Sf(pt,U,X,bt,Ht,Rt)}}l(lo,"renderObjects");function Sf(b,U,X,k,W,gt){F!==null&&W.isNodeMaterial&&F.setObject(b,W),b.onBeforeRender(P,U,X,k,W,gt),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(P,U,X,k,b,gt),W.transparent===!0&&W.side===Wn&&W.forceSinglePass===!1?(W.side=Ze,W.needsUpdate=!0,P.renderBufferDirect(X,U,k,W,b,gt),W.side=Gi,W.needsUpdate=!0,P.renderBufferDirect(X,U,k,W,b,gt),W.side=Wn):P.renderBufferDirect(X,U,k,W,b,gt),b.onAfterRender(P,U,X,k,W,gt)}l(Sf,"renderObject");function wf(b){let U=0;for(let X of b)X.texture!==null&&U++;return U}l(wf,"countLightProbeGrids");function Fr(b,U,X){U.isScene!==!0&&(U=fn);let k=Nt.get(b),W=w.state.lights,gt=w.state.shadowsArray,Tt=W.state.version,pt=nt.getParameters(b,W.state,gt,U,X,w.state.lightProbeGridArray),bt=nt.getProgramCacheKey(pt),Rt=k.programs;k.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,k.fog=U.fog;let Ht=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;k.envMap=A.get(b.envMap||k.environment,Ht),k.envMapRotation=k.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Rt===void 0&&(b.addEventListener("dispose",se),Rt=new Map,k.programs=Rt,k.programVariants=new Map);let Jt=Rt.get(bt);if(Jt!==void 0){if(k.currentProgram===Jt&&k.lightsStateVersion===Tt)return Tf(b,pt),Jt}else pt.uniforms=nt.getUniforms(b),F!==null&&b.isNodeMaterial&&F.build(b,X,pt),b.onBeforeCompile(pt,P),Jt=nt.acquireProgram(pt,bt),Rt.set(bt,Jt),k.uniforms=pt.uniforms;let At=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(At.clippingPlanes=j.uniform),Tf(b,pt),k.needsLights=Bg(b),k.lightsStateVersion=Tt,k.needsLights&&(At.ambientLightColor.value=W.state.ambient,At.lightProbe.value=W.state.probe,At.sunLights.value=W.state.sun,At.sunLightShadows.value=W.state.sunShadow,At.directionalLights.value=W.state.directional,At.directionalLightShadows.value=W.state.directionalShadow,At.spotLights.value=W.state.spot,At.spotLightShadows.value=W.state.spotShadow,At.rectAreaLights.value=W.state.rectArea,At.ltc_1.value=W.state.rectAreaLTC1,At.ltc_2.value=W.state.rectAreaLTC2,At.pointLights.value=W.state.point,At.pointLightShadows.value=W.state.pointShadow,At.hemisphereLights.value=W.state.hemi,At.sunShadowMatrix.value=W.state.sunShadowMatrix,At.sunShadowCascade.value=W.state.sunShadowCascade,At.directionalShadowMatrix.value=W.state.directionalShadowMatrix,At.spotLightMatrix.value=W.state.spotLightMatrix,At.spotLightMap.value=W.state.spotLightMap,At.pointShadowMatrix.value=W.state.pointShadowMatrix),k.numLightProbeGrids=wf(w.state.lightProbeGridArray),k.currentProgram=Jt,k.uniformsList=null,Jt}l(Fr,"getProgram");function Ug(b,U,X,k,W){let gt=Nt.get(b),Tt=gt.currentProgram.id+","+k+","+W,pt=gt.programVariants.get(Tt);return pt===void 0?(pt=Fr(b,U,X),gt.programVariants.set(Tt,pt)):(gt.currentProgram=pt,gt.uniformsList=null,gt.outputColorSpace=k,gt.toneMapping=W),pt}l(Ug,"getProgramVariant");function Ef(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=pr.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}l(Ef,"getUniformList");function Tf(b,U){let X=Nt.get(b);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}l(Tf,"updateCommonMaterialProperties");function Fg(b,U,X,k,W){U.isScene!==!0&&(U=fn),Gt.resetTextureUnits();let gt=U.fog,Tt=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?U.environment:null,pt=st===null?P.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Kt.workingColorSpace,bt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Rt=A.get(k.envMap||Tt,bt),Ht=k.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Jt=!!X.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),At=!!X.morphAttributes.position,$t=!!X.morphAttributes.normal,Me=!!X.morphAttributes.color,ce=Xn;k.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ce=P.toneMapping);let ae=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Be=ae!==void 0?ae.length:0,Ct=Nt.get(k),We=w.state.lights;if(ge===!0&&(Se===!0||b!==et)){let _e=b===et&&k.id===q;j.setState(k,b,_e)}let ee=!1,es=!1;k.version===Ct.__version?Ct.needsLights&&Ct.lightsStateVersion!==We.state.version||W.isBatchedMesh&&Ct.batching===!1||!W.isBatchedMesh&&Ct.batching===!0||W.isBatchedMesh&&Ct.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Ct.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Ct.instancing===!1||!W.isInstancedMesh&&Ct.instancing===!0||W.isSkinnedMesh&&Ct.skinning===!1||!W.isSkinnedMesh&&Ct.skinning===!0||W.isInstancedMesh&&Ct.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ct.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ct.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ct.instancingMorph===!1&&W.morphTexture!==null||Ct.envMap!==Rt||k.fog===!0&&Ct.fog!==gt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==j.numPlanes||Ct.numIntersection!==j.numIntersection)||Ct.vertexAlphas!==Ht||Ct.vertexTangents!==Jt||Ct.morphTargets!==At||Ct.morphNormals!==$t||Ct.morphColors!==Me||Ct.morphTargetsCount!==Be||Ct.numLightProbeGrids!==wf(w.state.lightProbeGridArray)?ee=!0:(Ct.outputColorSpace!==pt||Ct.toneMapping!==ce)&&(es=!0):(ee=!0,Ct.__version=k.version);let ze=Ct.currentProgram;(ee===!0||es===!0)&&(ze=es===!0?Ug(k,U,W,pt,ce):Fr(k,U,W),F&&k.isNodeMaterial&&F.onUpdateProgram(k,ze,Ct));let co=!1,Ti=!1,ns=!1,jt=ze.getUniforms(),Ne=Ct.uniforms;if(_t.useProgram(ze.program)&&(co=!0,Ti=!0,ns=!0),k.id!==q&&(q=k.id,Ti=!0),co||et!==b){_t.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),jt.setValue(O,"projectionMatrix",b.projectionMatrix),jt.setValue(O,"viewMatrix",b.matrixWorldInverse);let Pe=jt.map.cameraPosition;Pe!==void 0&&Pe.setValue(O,en.setFromMatrixPosition(b.matrixWorld)),pe.logarithmicDepthBuffer&&jt.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&jt.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),et!==b&&(et=b,Ti=!0,ns=!0)}if(Ct.needsLights&&(We.state.sunShadowMap.length>0&&jt.setValue(O,"sunShadowMap",We.state.sunShadowMap,Gt),We.state.directionalShadowMap.length>0&&jt.setValue(O,"directionalShadowMap",We.state.directionalShadowMap,Gt),We.state.spotShadowMap.length>0&&jt.setValue(O,"spotShadowMap",We.state.spotShadowMap,Gt),We.state.pointShadowMap.length>0&&jt.setValue(O,"pointShadowMap",We.state.pointShadowMap,Gt)),W.isSkinnedMesh){jt.setOptional(O,W,"bindMatrix"),jt.setOptional(O,W,"bindMatrixInverse");let _e=W.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),jt.setValue(O,"boneTexture",_e.boneTexture,Gt))}W.isBatchedMesh&&(jt.setOptional(O,W,"batchingTexture"),jt.setValue(O,"batchingTexture",W._matricesTexture,Gt),jt.setOptional(O,W,"batchingIdTexture"),jt.setValue(O,"batchingIdTexture",W._indirectTexture,Gt),jt.setOptional(O,W,"batchingColorTexture"),W._colorsTexture!==null&&jt.setValue(O,"batchingColorTexture",W._colorsTexture,Gt));let An=X.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&tt.update(W,X,ze),(Ti||Ct.receiveShadow!==W.receiveShadow)&&(Ct.receiveShadow=W.receiveShadow,jt.setValue(O,"receiveShadow",W.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&U.environment!==null&&(Ne.envMapIntensity.value=U.environmentIntensity),Ne.dfgLUT!==void 0&&(Ne.dfgLUT.value=gM()),Ti){if(jt.setValue(O,"toneMappingExposure",P.toneMappingExposure),Ct.needsLights&&Og(Ne,ns),gt&&k.fog===!0&&ht.refreshFogUniforms(Ne,gt),ht.refreshMaterialUniforms(Ne,k,yt,It,w.state.transmissionRenderTarget[b.id]),Ct.needsLights&&Ct.numLightProbeGrids>0){let _e=T,Pe=0;for(let ei of w.state.lightProbeGridArray)ei.texture!==null&&(_e.textures[Pe]=ei.texture,_e.min[Pe]=ei.boundingBox.min,_e.max[Pe]=ei.boundingBox.max,_e.resolution[Pe]=ei.resolution,Pe++);for(let ei in _e)_e[ei].length=Pe;Ne.probesSH.value=_e.textures,Ne.probesMin.value=_e.min,Ne.probesMax.value=_e.max,Ne.probesResolution.value=_e.resolution}pr.upload(O,Ef(Ct),Ne,Gt)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(pr.upload(O,Ef(Ct),Ne,Gt),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&jt.setValue(O,"center",W.center),jt.setValue(O,"modelViewMatrix",W.modelViewMatrix),jt.setValue(O,"normalMatrix",W.normalMatrix),jt.setValue(O,"modelMatrix",W.matrixWorld),k.uniformsGroups!==void 0){let _e=k.uniformsGroups;for(let Pe=0,ei=_e.length;Pe<ei;Pe++){let Cf=_e[Pe];Pt.update(Cf,ze),Pt.bind(Cf,ze)}}return ze}l(Fg,"setProgram");function Og(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.sunLights.needsUpdate=U,b.sunLightShadows.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}l(Og,"markUniformsLightsNeedsUpdate");function Bg(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}l(Bg,"materialNeedsLights"),this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(b,U,X){let k=Nt.get(b);k.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Nt.get(b.texture).__webglTexture=U,Nt.get(b.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:X,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){let X=Nt.get(b);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,X=0){st=b,Z=U,G=X;let k=null,W=!1,gt=!1;if(b){let pt=Nt.get(b);if(pt.__useDefaultFramebuffer!==void 0){_t.bindFramebuffer(O.FRAMEBUFFER,pt.__webglFramebuffer),it.copy(b.viewport),wt.copy(b.scissor),zt=b.scissorTest,_t.viewport(it),_t.scissor(wt),_t.setScissorTest(zt),q=-1;return}else if(pt.__webglFramebuffer===void 0)Gt.setupRenderTarget(b);else if(pt.__hasExternalTextures)Gt.rebindTextures(b,Nt.get(b.texture).__webglTexture,Nt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Ht=b.depthTexture;if(pt.__boundDepthTexture!==Ht){if(Ht!==null&&Nt.has(Ht)&&(b.width!==Ht.image.width||b.height!==Ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Gt.setupDepthRenderbuffer(b)}}let bt=b.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(gt=!0);let Rt=Nt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Rt[U])?k=Rt[U][X]:k=Rt[U],W=!0):b.samples>0&&Gt.useMultisampledRTT(b)===!1?k=Nt.get(b).__webglMultisampledFramebuffer:Array.isArray(Rt)?k=Rt[X]:k=Rt,it.copy(b.viewport),wt.copy(b.scissor),zt=b.scissorTest}else it.copy(Dt).multiplyScalar(yt).floor(),wt.copy(Zt).multiplyScalar(yt).floor(),zt=te;if(X!==0&&(k=B),_t.bindFramebuffer(O.FRAMEBUFFER,k)&&_t.drawBuffers(b,k),_t.viewport(it),_t.scissor(wt),_t.setScissorTest(zt),W){let pt=Nt.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,pt.__webglTexture,X)}else if(gt){let pt=U;for(let bt=0;bt<b.textures.length;bt++){let Rt=Nt.get(b.textures[bt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+bt,Rt.__webglTexture,X,pt)}}else if(b!==null&&X!==0){let pt=Nt.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,pt.__webglTexture,X)}q=-1};function Af(b){let U=Nt.get(b);return(U.__readFormat!==b.format||U.__readType!==b.type)&&(U.__readFormat=b.format,U.__readType=b.type,U.__formatReadable=pe.textureFormatReadable(b.format),U.__typeReadable=pe.textureTypeReadable(b.type)),U}l(Af,"getReadableState"),this.readRenderTargetPixels=function(b,U,X,k,W,gt,Tt,pt=0){if(!(b&&b.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Nt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Tt!==void 0&&(bt=bt[Tt],Array.isArray(bt)&&(bt=bt[0])),bt){_t.bindFramebuffer(O.FRAMEBUFFER,bt);try{let Rt=b.textures[pt],Ht=Rt.format,Jt=Rt.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+pt);let At=Af(Rt);if(At.__formatReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(At.__typeReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-k&&X>=0&&X<=b.height-W&&O.readPixels(U,X,k,W,lt.convert(Ht),lt.convert(Jt),gt)}finally{let Rt=st!==null?Nt.get(st).__webglFramebuffer:null;_t.bindFramebuffer(O.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(b,U,X,k,W,gt,Tt,pt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=Nt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Tt!==void 0&&(bt=bt[Tt],Array.isArray(bt)&&(bt=bt[0])),bt)if(U>=0&&U<=b.width-k&&X>=0&&X<=b.height-W){_t.bindFramebuffer(O.FRAMEBUFFER,bt);let Rt=b.textures[pt],Ht=Rt.format,Jt=Rt.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+pt);let At=Af(Rt);if(At.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(At.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $t=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,$t),O.bufferData(O.PIXEL_PACK_BUFFER,gt.byteLength,O.STREAM_READ),O.readPixels(U,X,k,W,lt.convert(Ht),lt.convert(Jt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Me=st!==null?Nt.get(st).__webglFramebuffer:null;_t.bindFramebuffer(O.FRAMEBUFFER,Me);let ce=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await zp(O,ce,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,$t),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,gt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer($t),O.deleteSync(ce),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,X=0){let k=Math.pow(2,-X),W=Math.floor(b.image.width*k),gt=Math.floor(b.image.height*k),Tt=U!==null?U.x:0,pt=U!==null?U.y:0;Gt.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,X,0,0,Tt,pt,W,gt),_t.unbindTexture()},this.copyTextureToTexture=function(b,U,X=null,k=null,W=0,gt=0){let Tt,pt,bt,Rt,Ht,Jt,At,$t,Me,ce=b.isCompressedTexture?b.mipmaps[gt]:b.image;if(X!==null)Tt=X.max.x-X.min.x,pt=X.max.y-X.min.y,bt=X.isBox3?X.max.z-X.min.z:1,Rt=X.min.x,Ht=X.min.y,Jt=X.isBox3?X.min.z:0;else{let jt=Math.pow(2,-W);Tt=Math.floor(ce.width*jt),pt=Math.floor(ce.height*jt),b.isDataArrayTexture?bt=ce.depth:b.isData3DTexture?bt=Math.floor(ce.depth*jt):bt=1,Rt=0,Ht=0,Jt=0}k!==null?(At=k.x,$t=k.y,Me=k.z):(At=0,$t=0,Me=0);let ae=lt.convert(U.format),Be=lt.convert(U.type),Ct;U.isData3DTexture?(Gt.setTexture3D(U,0),Ct=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Gt.setTexture2DArray(U,0),Ct=O.TEXTURE_2D_ARRAY):(Gt.setTexture2D(U,0),Ct=O.TEXTURE_2D),_t.activeTexture(O.TEXTURE0),_t.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),_t.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),_t.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);let We=_t.getParameter(O.UNPACK_ROW_LENGTH),ee=_t.getParameter(O.UNPACK_IMAGE_HEIGHT),es=_t.getParameter(O.UNPACK_SKIP_PIXELS),ze=_t.getParameter(O.UNPACK_SKIP_ROWS),co=_t.getParameter(O.UNPACK_SKIP_IMAGES);_t.pixelStorei(O.UNPACK_ROW_LENGTH,ce.width),_t.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ce.height),_t.pixelStorei(O.UNPACK_SKIP_PIXELS,Rt),_t.pixelStorei(O.UNPACK_SKIP_ROWS,Ht),_t.pixelStorei(O.UNPACK_SKIP_IMAGES,Jt);let Ti=b.isDataArrayTexture||b.isData3DTexture,ns=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){let jt=Nt.get(b),Ne=Nt.get(U),An=Nt.get(jt.__renderTarget),_e=Nt.get(Ne.__renderTarget);_t.bindFramebuffer(O.READ_FRAMEBUFFER,An.__webglFramebuffer),_t.bindFramebuffer(O.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Pe=0;Pe<bt;Pe++)Ti&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Nt.get(b).__webglTexture,W,Jt+Pe),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Nt.get(U).__webglTexture,gt,Me+Pe)),O.blitFramebuffer(Rt,Ht,Rt+Tt,Ht+pt,At,$t,At+Tt,$t+pt,O.DEPTH_BUFFER_BIT,O.NEAREST);_t.bindFramebuffer(O.READ_FRAMEBUFFER,null),_t.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||Nt.has(b)){let jt=Nt.get(b),Ne=Nt.get(U);_t.bindFramebuffer(O.READ_FRAMEBUFFER,I),_t.bindFramebuffer(O.DRAW_FRAMEBUFFER,z);for(let An=0;An<bt;An++)Ti?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,jt.__webglTexture,W,Jt+An):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,jt.__webglTexture,W),ns?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ne.__webglTexture,gt,Me+An):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ne.__webglTexture,gt),W!==0?O.blitFramebuffer(Rt,Ht,Rt+Tt,Ht+pt,At,$t,At+Tt,$t+pt,O.COLOR_BUFFER_BIT,O.NEAREST):ns?O.copyTexSubImage3D(Ct,gt,At,$t,Me+An,Rt,Ht,Tt,pt):O.copyTexSubImage2D(Ct,gt,At,$t,Rt,Ht,Tt,pt);_t.bindFramebuffer(O.READ_FRAMEBUFFER,null),_t.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ns?b.isDataTexture||b.isData3DTexture?O.texSubImage3D(Ct,gt,At,$t,Me,Tt,pt,bt,ae,Be,ce.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(Ct,gt,At,$t,Me,Tt,pt,bt,ae,ce.data):O.texSubImage3D(Ct,gt,At,$t,Me,Tt,pt,bt,ae,Be,ce):b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,gt,At,$t,Tt,pt,ae,Be,ce.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,gt,At,$t,ce.width,ce.height,ae,ce.data):O.texSubImage2D(O.TEXTURE_2D,gt,At,$t,Tt,pt,ae,Be,ce);_t.pixelStorei(O.UNPACK_ROW_LENGTH,We),_t.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ee),_t.pixelStorei(O.UNPACK_SKIP_PIXELS,es),_t.pixelStorei(O.UNPACK_SKIP_ROWS,ze),_t.pixelStorei(O.UNPACK_SKIP_IMAGES,co),gt===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&O.generateMipmap(Ct),_t.unbindTexture()},this.initRenderTarget=function(b){Nt.get(b).__webglFramebuffer===void 0&&Gt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Gt.setTextureCube(b,0):b.isData3DTexture?Gt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Gt.setTexture2DArray(b,0):Gt.setTexture2D(b,0),_t.unbindTexture()},this.resetState=function(){Z=0,G=0,st=null,_t.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}};l(Bd,"WebGLRenderer");var bc=Bd;var Ac=.22,_M="#b5ab98",Am="#8d8577",Tm="#fff4b0",xs,vs,zd=class zd{constructor(){rt(this,xs,new Map);rt(this,vs,new Map);this.geometries={base:new cs(.1,.12,.035,20),body:new hs(.07,Ac*.75,16),head:new la(.045,16,12),pole:new cs(.006,.006,.2,6),pennant:new pi(.11,.06,.006),ring:new lr(.16,.018,8,32),pointer:new hs(.09,.18,4),building:new pi(1,1,1),roof:new hs(.75,.5,4),wall:new lr(.36,.025,6,24)}}material(t,e=!1){let n=`${t}${e?" glow":""}`,i=y(this,xs).get(n);return i===void 0&&(i=new us({color:new Ut(t),roughness:.75,metalness:.05,...e?{emissive:new Ut(t),emissiveIntensity:.6}:{}}),y(this,xs).set(n,i)),i}label(t,e,n){let i=`${t}\0${e}\0${n}`,r=y(this,vs).get(i);if(r===void 0){let a=document.createElement("canvas"),o=a.getContext("2d"),c="600 28px system-ui, sans-serif",h=40;o!==null&&(o.font=c,a.width=Math.ceil(o.measureText(t).width)+24,a.height=h,o.font=c,o.fillStyle=e,o.beginPath(),o.roundRect?.(0,0,a.width,h,10),o.fill(),o.fillStyle=n,o.textBaseline="middle",o.fillText(t,12,h/2+1));let u=new ra(a);u.colorSpace=Ue,r=new rr({map:u,sizeAttenuation:!1,depthTest:!1,transparent:!0}),y(this,vs).set(i,r)}return r}dispose(){Object.values(this.geometries).forEach(t=>t.dispose()),y(this,xs).forEach(t=>t.dispose()),y(this,vs).forEach(t=>{t.map?.dispose(),t.dispose()}),y(this,xs).clear(),y(this,vs).clear()}};xs=new WeakMap,vs=new WeakMap,l(zd,"MarkerKit");var Cc=zd,Cm=l(s=>{let{r:t,g:e,b:n}=new Ut(s);return .2126*t+.7152*e+.0722*n>.35?"#111111":"#ffffff"},"textOn"),Ra=l((s,t,e,n)=>(s.position.set(t,e,n),s),"place"),Tc=l((s,t)=>{let e=t*2654435761;for(let n=0;n<s.length;n++)e=Math.imul(e^s.charCodeAt(n),2246822519);return(e>>>0)%1e4/1e4},"fractionOf"),xM=l((s,t)=>{let e=new $e,{building:n,roof:i,wall:r}=s.geometries,a=s.material(_M),o=s.material(t.colours[0]),c=Math.min(12,2+Math.ceil(t.size/2));for(let d=0;d<c;d++){let g=d/c*Math.PI*2+Tc(t.name,1)*6,x=d===0?0:.12+Tc(t.name,d+2)*.18,S=.07+Tc(t.name,d+20)*.05,_=(d===0?.13:.05)+Tc(t.name,d+40)*.05,m=Math.cos(g)*x,E=Math.sin(g)*x,R=new oe(n,a),T=new oe(i,o);R.scale.set(S,_,S),R.position.set(m,_/2,E),T.scale.set(S,S*.8,S),T.position.set(m,_+S*.2,E),T.rotation.y=Math.PI/4,e.add(R,T)}if(t.walled){let d=new oe(r,s.material(Am));d.rotation.x=Math.PI/2,d.position.y=.02,d.scale.set(1,1,2.5),e.add(d)}let h=new ar(s.label(`${t.name}  ${t.size}${t.disorder?" !":""}`,t.colours[0],Cm(t.colours[0]))),u=h.material.map,p=u&&"width"in u.image?u.image.width/u.image.height:4;return h.scale.set(.03*p,.03,1),h.center.set(.5,0),h.position.y=.36,h.renderOrder=2,e.add(h),e},"drawCity"),vM=l((s,t)=>{let e=new $e,{base:n,body:i,head:r,pole:a,pennant:o,ring:c}=s.geometries,h=s.material(t.colours[0]),u=s.material(t.colours[1]);if(e.add(Ra(new oe(n,u),0,.0175,0)),e.add(Ra(new oe(i,h),0,.035+Ac*.75/2,0)),e.add(Ra(new oe(r,t.busy?u:h),0,Ac,0)),t.count>1){e.add(Ra(new oe(a,s.material(Am)),.1,.13,0)),e.add(Ra(new oe(o,h),.155,.2,0));let p=new ar(s.label(String(t.count),t.colours[0],Cm(t.colours[0])));p.scale.set(.022,.022,1),p.center.set(.5,0),p.position.set(.155,.24,0),p.renderOrder=2,e.add(p)}if(t.active){let p=new oe(c,s.material(Tm,!0)),d=new oe(s.geometries.pointer,s.material(Tm,!0));p.rotation.x=Math.PI/2,p.position.y=.01,d.rotation.x=Math.PI,d.position.y=Ac+.22,e.add(p,d)}return e},"drawUnit"),Rm=l((s,t)=>{let e=new $e;if(t.city!==null&&e.add(xM(s,t.city)),t.unit!==null){let n=vM(s,t.unit);t.city!==null&&(n.position.z=.22),e.add(n)}return e},"drawMarker");var Hi=l(s=>s*Math.PI/180,"degrees"),yM=Hi(25),MM=Hi(80),bM=5,SM=90,wM=1.12,Pa=Hi(40),Pm=Hi(45),EM={above:{yaw:0,pitch:Hi(80)},classic:{yaw:0,pitch:Hi(55)},isometric:{yaw:Hi(45),pitch:Hi(30)}};var Im=l(s=>({focus:s,...EM.classic,distance:24}),"defaultOrbit"),kd=l((s,t,e)=>Math.min(e,Math.max(t,s)),"clamp"),Lm=l(s=>{let t=Math.PI*2;return(s%t+t)%t},"normaliseYaw"),ys=l(s=>({...s,yaw:Lm(s.yaw),pitch:kd(s.pitch,yM,MM),distance:kd(s.distance,bM,SM)}),"clampOrbit"),_r=l((s,t)=>ys({...s,distance:s.distance/wM**t}),"zoomed"),Rc=l(({yaw:s,pitch:t})=>{let e=Math.sin(s),n=Math.cos(s),i=Math.sin(t),r=Math.cos(t);return{forward:[e*r,-i,-n*r],right:[n,0,e],up:[e*i,r,-n*i]}},"basis"),Pc=l((s,t)=>{let{forward:e}=Rc(s),[n,i]=s.focus;return[n-e[0]*s.distance,t-e[1]*s.distance,i-e[2]*s.distance]},"eye"),Vd=l((s,t,[e,n,i],r)=>{let{forward:a,right:o,up:c}=Rc(s),h=Pc(s,t),u=[e-h[0],n-h[1],i-h[2]],p=l(x=>(u[0]??0)*x[0]+(u[1]??0)*x[1]+(u[2]??0)*x[2],"dot"),d=p(a),g=Math.tan(Pa/2);return d<=1e-6?null:[p(o)/(d*g*r),p(c)/(d*g)]},"toScreen"),Gd=l((s,t,[e,n],i)=>{let{forward:r,right:a,up:o}=Rc(s),c=Math.tan(Pa/2);return{from:Pc(s,t),direction:[0,1,2].map(h=>(r[h]??0)+e*c*i*(a[h]??0)+n*c*(o[h]??0))}},"rayThrough"),gr=l((s,t,e,n,i=t)=>{let{from:r,direction:a}=Gd(s,t,e,n);if(a[1]>-1e-6)return null;let o=(i-r[1])/a[1];return o<=0?null:[r[0]+a[0]*o,r[2]+a[2]*o]},"groundAt"),Dm=l((s,t,e,n,i)=>{let r=gr(s,t,e,i),a=gr(s,t,n,i);if(r!==null&&a!==null)return{...s,focus:[s.focus[0]+r[0]-a[0],s.focus[1]+r[1]-a[1]]};let o=(e[0]-n[0])*i,c=(e[1]-n[1])/Math.sin(s.pitch),h=s.distance*Math.tan(Pa/2),{right:u}=Rc(s),p=[Math.sin(s.yaw),-Math.cos(s.yaw)];return{...s,focus:[s.focus[0]+(o*u[0]+c*(p[0]??0))*h,s.focus[1]+(o*u[2]+c*(p[1]??0))*h]}},"panned"),Nm=l((s,t,e)=>{let n=l((a,o)=>(a%o+o)%o,"wrap"),[i,r]=s.focus;return{...s,yaw:Lm(s.yaw),focus:[n(i,t.u),t.v===null?kd(r,0,e):n(r,t.v)]}},"settled"),Um=l((s,t,e,n)=>{let i=l((o,c)=>c===null?o:o-c*Math.round(o/c),"short"),r=Math.PI*2,a=e*e*(3-2*e);return{focus:[s.focus[0]+i(t.focus[0]-s.focus[0],n.u)*a,s.focus[1]+i(t.focus[1]-s.focus[1],n.v)*a],yaw:s.yaw+i(t.yaw-s.yaw,r)*a,pitch:s.pitch+(t.pitch-s.pitch)*a,distance:s.distance+(t.distance-s.distance)*a}},"between"),Ic=l(s=>({near:s*1.2,far:s*3.5}),"sightFor");var TM=new Ut("#3f8a8c"),AM=new Ut("#173a52"),CM=new Ut("#e8eeee"),Fm=`
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
`,RM=`
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
`,Ms,yn,cn,Wd=class Wd{constructor(t,e){rt(this,Ms);rt(this,yn);rt(this,cn);Y(this,Ms,t),Y(this,yn,new Uint16Array(t.columns*t.rows*2));for(let i=0;i<y(this,yn).length;i+=2)y(this,yn)[i]=Hn.toHalfFloat(0),y(this,yn)[i+1]=Hn.toHalfFloat(1);Y(this,cn,new or(y(this,yn),t.columns,t.rows,qn,ln)),y(this,cn).wrapS=ls,y(this,cn).wrapT=t.wrapsV?ls:xn,y(this,cn).magFilter=De,y(this,cn).minFilter=De,y(this,cn).needsUpdate=!0;let n=new an({uniforms:wa.merge([xt.fog,{ground:{value:null},cell:{value:new Ot},size:{value:new Ot},shallow:{value:TM.clone()},deep:{value:AM.clone()},foam:{value:CM.clone()},sky:{value:e.clone()},sunDirection:{value:new H(.5,.7,.4).normalize()},sunColour:{value:new Ut("#fff0d8")},extentV:{value:0},wrapsV:{value:!1}}]),vertexShader:Fm,fragmentShader:RM,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=y(this,cn),n.uniforms.cell.value.set(t.spacingU,t.spacingV),n.uniforms.size.value.set(t.columns,t.rows),n.uniforms.extentV.value=t.rows*t.spacingV,n.uniforms.wrapsV.value=t.wrapsV,this.mesh=new oe(new Bi(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=1}setChunk(t){let{columns:e,rows:n,spacingU:i,spacingV:r}=y(this,Ms),a=Math.round(t.u/i),o=Math.round(t.v/r),c=t.positions.length/3;for(let h=0;h<c;h++){let u=a+Math.round((t.positions[h*3]??0)/i),p=o+Math.round((t.positions[h*3+2]??0)/r);if(u>=0&&u<e&&p>=0&&p<n){let d=(p*e+u)*2;y(this,yn)[d]=Hn.toHalfFloat(t.positions[h*3+1]??0),y(this,yn)[d+1]=Hn.toHalfFloat(t.unseen[h]??0)}}y(this,cn).needsUpdate=!0}height(t,e){return Hn.fromHalfFloat(y(this,yn)[(e*y(this,Ms).columns+t)*2]??0)}unseen(t,e){return Hn.fromHalfFloat(y(this,yn)[(e*y(this,Ms).columns+t)*2+1]??0)>.5}texture(){return y(this,cn)}follow(t,e,n,i){this.mesh.position.set(t,0,e),this.mesh.scale.set(n,n,1),this.mesh.material.uniforms.sunDirection.value.copy(i).normalize()}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),y(this,cn).dispose()}};Ms=new WeakMap,yn=new WeakMap,cn=new WeakMap,l(Wd,"Water");var Hd=Wd,Om=Hd,PM=`
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
`,IM=.18,Xd=class Xd{constructor(t,e){let n=new an({uniforms:wa.merge([xt.fog,{ground:{value:null},cell:{value:new Ot},size:{value:new Ot},extent:{value:new Ot},wrapsV:{value:!1}}]),vertexShader:Fm,fragmentShader:PM,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=t,n.uniforms.cell.value.set(e.spacingU,e.spacingV),n.uniforms.size.value.set(e.columns,e.rows),n.uniforms.extent.value.set(e.columns*e.spacingU,e.rows*e.spacingV),n.uniforms.wrapsV.value=e.wrapsV,this.mesh=new oe(new Bi(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=2}follow(t,e,n){this.mesh.position.set(t,IM,e),this.mesh.scale.set(n,n,1)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}};l(Xd,"Clouds");var Lc=Xd;var qd=10466244,LM=14082796,DM=5984576,NM=16773336,Bm=l((s,t,e)=>{let n=l((i,r)=>{if(r===null)return[0];let a=[];for(let o=Math.floor((i-t)/r);o*r<=i+t;o++)a.push(o*r);return a},"along");return n(s[0],e.u).flatMap(i=>n(s[1],e.v).map(r=>[i,r]))},"copiesNear"),zm=2048,km=Math.hypot(30,40,20),Vm=l((s,{period:t,ground:e})=>{let n=new bc({antialias:!0,canvas:s}),i=new ta,r=new qe(Pa*180/Math.PI,1,.1,400),a=new $e,o=new us({roughness:.92,vertexColors:!0}),c=new pa(NM,2.6),h=new Map,u=new Map,p=new $e,d=new Cc,g=new Om(e,new Ut(qd)),x=new Lc(g.texture(),e),S=new jr(qd,30,110),_=[[0,0]],m="0,0",E=[[0,0]],R="0,0";n.outputColorSpace=Ue,n.toneMapping=ga,n.shadowMap.enabled=!0,n.shadowMap.type=Il,i.background=new Ut(qd),i.fog=S,i.add(new ua(LM,DM,.9)),i.add(a),i.add(p),i.add(g.mesh),i.add(x.mesh),c.position.set(30,40,20),c.castShadow=!0,c.shadow.mapSize.set(zm,zm),c.shadow.bias=-4e-4,c.shadow.normalBias=.02,i.add(c),i.add(c.target);let T=l((w,f,M=_)=>M.map(([N,P])=>{let D=w.make();return D.position.set(w.at[0]+N,w.at[1],w.at[2]+P),f.add(D),D}),"copiesOf");return{render:l(()=>n.render(i,r),"render"),resize:l((w,f,M)=>{n.setPixelRatio(M),n.setSize(w,f,!1),r.aspect=f>0?w/f:1,r.updateProjectionMatrix()},"resize"),setChunk:l((w,f,M)=>{let N=`${w},${f}`,P=new Ke;P.setAttribute("position",new Ge(M.positions,3)),P.setAttribute("normal",new Ge(M.normals,3)),P.setAttribute("color",new Ge(M.colours,3)),P.setIndex(new Ge(M.indices,1)),P.computeBoundingSphere();let D=h.get(N);D!==void 0&&(D.drawn.forEach(B=>a.remove(B)),D.geometry.dispose());let F={geometry:P,at:[M.u,0,M.v],make:l(()=>{let B=new oe(P,o);return B.castShadow=!0,B.receiveShadow=!0,B},"make"),drawn:[]};F.drawn=T(F,a),h.set(N,F),g.setChunk(M)},"setChunk"),setMarker:l((w,f,M)=>{if(u.get(w)?.drawn.forEach(F=>p.remove(F)),u.delete(w),M===null)return;let P=Rm(d,M);P.traverse(F=>{F.castShadow=F instanceof oe});let D={at:f,make:l(()=>P.clone(),"make"),drawn:[]};D.drawn=T(D,p,E),u.set(w,D)},"setMarker"),view:l((w,f)=>{let[M,N]=w.focus,[P,D,F]=Pc(w,f),{near:B,far:I}=Ic(w.distance);r.position.set(P,D,F),r.lookAt(M,f,N),r.far=I*1.2,r.updateProjectionMatrix(),S.near=B,S.far=I;let z=w.distance*2.2,Z=c.shadow.camera;c.position.set(M+30,f+40,N+20),c.target.position.set(M,f,N),Z.left=-z,Z.right=z,Z.top=z,Z.bottom=-z,Z.near=Math.max(.5,km-z*1.6),Z.far=km+z*1.6,Z.updateProjectionMatrix(),g.follow(M,N,I*2.2,c.position.clone().sub(c.target.position)),x.follow(M,N,I*2.2);let G=Bm(w.focus,I,t),st=G.join(";"),q=Bm(w.focus,Math.min(I,w.distance*2.2),t),et=q.join(";");st!==m&&(_=G,m=st,h.forEach(it=>{it.drawn.forEach(wt=>a.remove(wt)),it.drawn=T(it,a)})),et!==R&&(E=q,R=et,u.forEach(it=>{it.drawn.forEach(wt=>p.remove(wt)),it.drawn=T(it,p,E)}))},"view"),stats:l(()=>({drawCalls:n.info.render.calls,triangles:n.info.render.triangles,geometries:n.info.memory.geometries}),"stats"),dispose:l(()=>{h.forEach(({geometry:w})=>w.dispose()),h.clear(),u.clear(),d.dispose(),g.dispose(),x.dispose(),o.dispose(),n.dispose()},"dispose")}},"createStage");var xi=1/Math.sqrt(3),Gm=1.5*xi,UM=l((s,t)=>{let e=-s-t,n=Math.round(s),i=Math.round(t),r=Math.round(e),a=Math.abs(n-s),o=Math.abs(i-t),c=Math.abs(r-e);return a>o&&a>c?n=-i-r:o>c&&(i=-n-r),[n,i]},"roundAxial"),FM=l(({height:s,width:t,wrapsY:e})=>{let n=l((i,r)=>[i+.5+(r&1)*.5,xi+r*Gm],"centre");return{topologyId:"hex-odd-r",centre:n,outline:l((i,r)=>{let[a,o]=n(i,r);return[[a,o-xi],[a+.5,o-xi/2],[a+.5,o+xi/2],[a,o+xi],[a-.5,o+xi/2],[a-.5,o-xi/2]]},"outline"),tileAt:l((i,r)=>{let a=i-.5,o=r-xi,[c,h]=UM(a-o*Math.sqrt(3)/3,o*2*Math.sqrt(3)/3);return[c+(h-(h&1))/2,h]},"tileAt"),period:l(()=>({u:t,v:e?s*Gm:null}),"period")}},"hexOddRLayout"),Hm=FM;var OM=l(({height:s,width:t,wrapsY:e})=>({topologyId:"square",centre:l((n,i)=>[n+.5,i+.5],"centre"),outline:l((n,i)=>[[n,i],[n+1,i],[n+1,i+1],[n,i+1]],"outline"),tileAt:l((n,i)=>[Math.floor(n),Math.floor(i)],"tileAt"),period:l(()=>({u:t,v:e?s:null}),"period")}),"squareLayout"),Wm=OM;var Jn=Math.SQRT2/2,BM=l(({height:s,width:t,wrapsY:e})=>{let n=l((i,r)=>[(2*i+(r&1)+1)*Jn,(r+1)*Jn],"centre");return{topologyId:"staggered-iso",centre:n,outline:l((i,r)=>{let[a,o]=n(i,r);return[[a,o-Jn],[a+Jn,o],[a,o+Jn],[a-Jn,o]]},"outline"),tileAt:l((i,r)=>{let a=i/Jn,o=r/Jn,c=Math.floor((a+o)/2-1+.5),h=Math.floor((o-a)/2+.5),u=c+h;return[Math.floor((c-h)/2),u]},"tileAt"),period:l(()=>({u:t*2*Jn,v:e?s*Jn:null}),"period")}},"staggeredIsoLayout"),Xm=BM;var qm={square:Wm,"staggered-iso":Xm,"hex-odd-r":Hm},zM=l(s=>{if(!Object.prototype.hasOwnProperty.call(qm,s.topologyId))throw new Error(`No ground layout for the ${s.topologyId} grid.`);if(s.wrapsY&&s.topologyId!=="square"&&s.height%2!==0)throw new Error(`The ${s.topologyId} grid can't wrap over the poles with an odd number of rows (${s.height}).`);return qm[s.topologyId](s)},"groundLayoutFor"),Ym=zM;var Dc=l(s=>{let t=s/1.2;if(t>=1)return 0;let e=1-t;return e*e*e*e*(4*t+1)},"weight");var kM=l((s,t,e)=>{let n=Math.imul(s,374761393)+Math.imul(t,668265263)+Math.imul(e,1442695041)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296},"hash"),Zm=l(s=>s*s*s*(s*(s*6-15)+10),"fade"),Wi=l(({cell:s,period:t,seed:e})=>{let n=Math.max(1,Math.round(t.u/s)),i=t.u/n,r=t.v===null?null:Math.max(1,Math.round(t.v/s)),a=t.v===null||r===null?s:t.v/r,o=l(u=>(u%n+n)%n,"wrapU"),c=l(u=>r===null?u:(u%r+r)%r,"wrapV"),h=l((u,p,d,g)=>{let x=Math.floor(kM(u,p,e)*16)*(Math.PI/8);return Math.cos(x)*d+Math.sin(x)*g},"slope");return(u,p)=>{let d=u/i,g=p/a,x=Math.floor(d),S=Math.floor(g),_=d-x,m=g-S,E=Zm(_),R=Zm(m),T=o(x),C=o(x+1),w=c(S),f=c(S+1),M=h(T,w,_,m)+(h(C,w,_-1,m)-h(T,w,_,m))*E,N=h(T,f,_,m-1)+(h(C,f,_-1,m-1)-h(T,f,_,m-1))*E;return Math.max(-1,Math.min(1,(M+(N-M)*R)*1.4))}},"periodicNoise"),Yd=l(s=>{let t=s.map((n,i)=>.5**i),e=t.reduce((n,i)=>n+i,0);return(n,i)=>s.reduce((r,a,o)=>r+a(n,i)*(t[o]??0),0)/e},"fractalNoise");var $n={shore:-.03,deep:-.15,reach:3},Nc={relief:{base:0,roughness:0,shape:"flat"},colour:"#1b1f24"},$m={relief:{base:.03,roughness:.015,shape:"rolling"},colour:"#6b8746"},Jm={Ocean:{relief:{base:$n.deep,roughness:.003,shape:"rolling"},colour:"#33505f"},Grassland:$m,Plains:{relief:{base:.025,roughness:.01,shape:"rolling"},colour:"#99935a"},Desert:{relief:{base:.025,roughness:.025,shape:"rolling"},colour:"#c4ab78"},Tundra:{relief:{base:.035,roughness:.015,shape:"rolling"},colour:"#8a8d78"},Arctic:{relief:{base:.05,roughness:.02,shape:"rolling"},colour:"#dfe6ea"},Glacier:{relief:{base:.08,roughness:.03,shape:"rolling"},colour:"#e7eff3"},Forest:{relief:{base:.04,roughness:.02,shape:"rolling"},colour:"#40583a"},Jungle:{relief:{base:.03,roughness:.02,shape:"rolling"},colour:"#355a36"},Swamp:{relief:{base:.005,roughness:.004,shape:"flat"},colour:"#4f5b3d"},River:{relief:{base:.012,roughness:.006,shape:"rolling"},colour:"#5d7c4f"},Hills:{relief:{base:.12,roughness:.04,shape:"ridged"},colour:"#7b7650"},Mountains:{relief:{base:.35,roughness:.08,shape:"peaked"},colour:"#77726a"}},Uc=l(s=>s==="Unknown"?Nc:(Object.prototype.hasOwnProperty.call(Jm,s)?Jm[s]:void 0)??$m,"terrainEntry");var Km=.65,Zd=l(s=>{let t=l(e=>{let n=parseInt(s.slice(e,e+2),16)/255;return n<=.04045?n/12.92:((n+.055)/1.055)**2.4},"channel");return[t(1),t(3),t(5)]},"linear"),bs=.22,Jd=l((s,t,e,n)=>{let i=Math.imul(s,374761393)+Math.imul(t,668265263)+Math.imul(e,2246822519)+Math.imul(n,3266489917)|0;return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967296},"chance"),VM=l((s,t,e)=>({u:(Jd(s,t,e,1)*2-1)*bs,v:(Jd(s,t,e,2)*2-1)*bs,scale:.75+Jd(s,t,e,3)*.5}),"peakOf"),GM=l(({layout:s,seed:t=1,source:e})=>{let{width:n,height:i,wrapsY:r}=e,a=s.period(),o=Yd([Wi({cell:.7,period:a,seed:t}),Wi({cell:.35,period:a,seed:t+1}),Wi({cell:.17,period:a,seed:t+2})]),c=Yd([Wi({cell:.45,period:a,seed:t+3}),Wi({cell:.22,period:a,seed:t+4})]),h=l((w,f)=>1-2*Math.abs(c(w,f)),"ridged"),u=Wi({cell:.8,period:a,seed:t+5}),p=Wi({cell:.8,period:a,seed:t+6}),d={flat:null,rolling:"rolling",ridged:"ridged",peaked:"ridged"},g=[],x=[],S=l((w,f)=>{let M=(w%n+n)%n;return!r&&(f<0||f>=i)?null:(f%i+i)%i*n+M},"index"),_=l(w=>{let f=new Array(n*i).fill(1/0),M=[];w.forEach((N,P)=>{N&&(f[P]=0,M.push([P%n,Math.floor(P/n)]))});for(let[N,P]of M){let D=f[P*n+N]??1/0;D>=$n.reach||e.neighbours(N,P).forEach(([F,B])=>{let I=B*n+F;(f[I]??1/0)>D+1&&(f[I]=D+1,M.push([F,B]))})}return f},"distancesFromLand"),m=l((w,f)=>{let M=e.terrainAt(w,f);return`${M}${M!=="Unknown"&&e.waterAt(w,f)?" water":""}`},"readAs"),E=l(w=>{if(w!==void 0&&x.length>0&&w.every(([B,I])=>{let z=S(B,I);return z===null||x[z]===m(B,I)}))return[];let f=[],M=[],N=[];for(let B=0;B<i;B++)for(let I=0;I<n;I++){let z=e.terrainAt(I,B);f.push(z),M.push(z!=="Unknown"&&e.waterAt(I,B)),N.push(Uc(z))}let P=_(f.map((B,I)=>B!=="Unknown"&&!M[I])),D=f.map((B,I)=>`${B}${M[I]?" water":""}`),F=[];return D.forEach((B,I)=>{x[I]!==B&&F.push([I%n,Math.floor(I/n)])}),x=D,g=N.map((B,I)=>{let z=B===Nc,Z=I%n,G=Math.floor(I/n),st=VM(Z,G,t);if(!M[I])return{relief:B.relief,colour:Zd(B.colour),unknown:z,peak:st};let q=Math.min(P[I]??1/0,$n.reach),et=$n.shore+($n.deep-$n.shore)*Math.max(0,q-1)/Math.max(1,$n.reach-1);return{relief:{...B.relief,base:et},colour:Zd(B.colour),unknown:z,peak:st}}),F},"refresh"),R=l(w=>{let[f,M]=s.centre(0,w),N=Math.max(...s.outline(0,w).map(([D,F])=>Math.hypot(D-f,F-M))),P=[];for(let D=-6;D<=6;D++)for(let F=-4;F<=4;F++){let[B,I]=s.centre(F,w+D);Math.hypot(B-f,I-M)<1.2+N+bs*Math.SQRT2+1e-9&&P.push([F,D])}return P},"offsetsFor"),T=[R(0),R(1)],C=l((w,f)=>{let[M,N]=s.tileAt(w,f),P=S(M,N),D=P===null?null:g[P]??null;if(D===null||D.unknown)return{height:0,colour:Zd(Nc.colour),unseen:!0};let F=null,B=null,I=l(Q=>Q==="rolling"?F??=o(w,f):B??=h(w,f),"noiseHere"),z=0,Z=0,G=0,st=0,q=0,et=0,it=0,wt=w+bs*u(w,f),zt=f+bs*p(w,f);return(T[N&1]??[]).forEach(([Q,vt])=>{let Et=M+Q,It=N+vt,yt=S(Et,It);if(yt===null)return;let kt=g[yt];if(kt===void 0)return;let[de,Dt]=s.centre(Et,It),{relief:Zt,colour:te,peak:Xt}=kt,xe=Dc(Math.hypot(w-de,f-Dt)),ge=Zt.shape==="peaked"?Dc(Math.hypot(w-de-Xt.u,f-Dt-Xt.v)):0,Se=Dc(Math.hypot(wt-de,zt-Dt))**3;if(xe>0){let re=d[Zt.shape],en=re===null?0:Zt.roughness*I(re);Zt.shape==="peaked"?Z+=xe*(Zt.base*(1-Km)+en*.5):Z+=xe*(Zt.base+en),z+=xe}if(ge>0){let re=Zt.roughness*I("ridged");G+=ge*ge*(Zt.base*Km*Xt.scale+re*.5)}st+=Se,q+=Se*te[0],et+=Se*te[1],it+=Se*te[2]}),{height:(z>0?Z/z:0)+G,colour:st>0?[q/st,et/st,it/st]:D.colour,unseen:!1}},"sample");return E(),{sample:C,height:l((w,f)=>C(w,f).height,"height"),refresh:E}},"createRelief"),Qm=GM;var jm=l((s,t,{size:e=16,perUnit:n=8}={})=>{let{u:i,v:r}=s.period(),a=r??Math.max(...s.outline(0,t-1).map(([,p])=>p),...s.outline(1,t-1).map(([,p])=>p)),o=Math.max(1,Math.round(i/e)),c=Math.max(1,Math.round(a/e)),h=Math.max(2,Math.round(i/o*n)),u=Math.max(2,Math.round(a/c*n));return{chunksU:o,chunksV:c,stepsU:h,stepsV:u,spacingU:i/o/h,spacingV:a/c/u}},"chunkGrid"),tg=l((s,t,e,n)=>{let{stepsU:i,stepsV:r,spacingU:a,spacingV:o}=s,c=e*i,h=n*r,u=l((w,f)=>[w*a,f*o],"at"),p=i+3,d=new Float64Array(p*(r+3)),g=(i+1)*(r+1),x=new Float32Array(g*3),S=new Float32Array(g);for(let w=-1;w<=r+1;w++)for(let f=-1;f<=i+1;f++){let M=t.sample(...u(c+f,h+w)),{height:N,colour:P}=M;d[(w+1)*p+(f+1)]=N,f>=0&&f<=i&&w>=0&&w<=r&&(x.set(P,(w*(i+1)+f)*3),S[w*(i+1)+f]=M.unseen?1:0)}let _=l((w,f)=>d[(f+1)*p+(w+1)]??0,"height"),m=new Float32Array(g*3),E=new Float32Array(g*3),[R,T]=u(c,h);for(let w=0;w<=r;w++)for(let f=0;f<=i;f++){let M=w*(i+1)+f,[N,P]=u(c+f,h+w),D=(_(f+1,w)-_(f-1,w))/(2*a),F=(_(f,w+1)-_(f,w-1))/(2*o),B=Math.hypot(D,1,F);m[M*3]=N-R,m[M*3+1]=_(f,w),m[M*3+2]=P-T,E[M*3]=-D/B,E[M*3+1]=1/B,E[M*3+2]=-F/B}let C=new Uint32Array(i*r*6);for(let w=0;w<r;w++)for(let f=0;f<i;f++){let M=w*(i+1)+f,N=M+1,P=M+i+1,D=P+1,F=(w*i+f)*6;C.set([M,P,N,N,P,D],F)}return{u:R,v:T,positions:m,normals:E,colours:x,unseen:S,indices:C}},"buildChunk"),eg=l((s,t,e,n)=>{let i=s.stepsU*s.spacingU,r=s.stepsV*s.spacingV,a=t.period().v!==null,o=new Set;return e.forEach(([c,h])=>{let[u,p]=t.centre(c,h);for(let d=Math.floor((u-n)/i);d<=Math.floor((u+n)/i);d++)for(let g=Math.floor((p-n)/r);g<=Math.floor((p+n)/r);g++){if(!a&&(g<0||g>=s.chunksV))continue;let x=(d%s.chunksU+s.chunksU)%s.chunksU,S=a?(g%s.chunksV+s.chunksV)%s.chunksV:g;o.add(`${x},${S}`)}}),[...o].map(c=>c.split(",").map(Number))},"chunksNear");var Ss,Mn,Un,Ia,xr,Fc,Qd=class Qd{constructor(t){rt(this,xr);rt(this,Ss);rt(this,Mn);rt(this,Un,[]);rt(this,Ia);let e=t.topology(),n=t.width(),i=t.height(),r=e.wrapsY();this.layout=Ym({width:n,height:i,topologyId:t.topologyId(),wrapsY:r}),Y(this,Ss,Qm({layout:this.layout,source:{width:n,height:i,wrapsY:r,terrainAt:l((u,p)=>t.get(u,p).terrain._,"terrainAt"),waterAt:l((u,p)=>t.get(u,p).isWater,"waterAt"),neighbours:l((u,p)=>e.directions().map(d=>e.neighbour(u,p,d)).filter(d=>d!==null),"neighbours")}})),Y(this,Mn,jm(this.layout,i));let[a,o]=this.layout.centre(0,0),c=Math.max(...this.layout.outline(0,0).map(([u,p])=>Math.hypot(u-a,p-o))),h=Math.max(...e.directions().map(u=>e.offset(u,0,0)).map(([u,p])=>{let[d,g]=this.layout.centre(u,p);return Math.hypot(d-a,g-o)}));Y(this,Ia,1.2+c+bs*Math.SQRT2+($n.reach-1)*h)}ground(){let{chunksU:t,chunksV:e,stepsU:n,stepsV:i,spacingU:r,spacingV:a}=y(this,Mn);return{columns:t*n,rows:e*i,spacingU:r,spacingV:a,wrapsV:this.layout.period().v!==null}}extentV(){return y(this,Mn).chunksV*y(this,Mn).stepsV*y(this,Mn).spacingV}heightAt(t,e){return y(this,Ss).height(t,e)}queueAll(t,e){let{chunksU:n,chunksV:i}=y(this,Mn),r=[];for(let a=0;a<i;a++)for(let o=0;o<n;o++)r.push(`${o},${a}`);Y(this,Un,K(this,xr,Fc).call(this,r,t,e))}changed(t,e,n,i=!1){if(t.length===0&&!i)return;let r=y(this,Ss).refresh(i?void 0:t);if(r.length===0)return;let a=eg(y(this,Mn),this.layout,r,y(this,Ia)).map(([o,c])=>`${o},${c}`);Y(this,Un,K(this,xr,Fc).call(this,[...new Set([...y(this,Un),...a])],e,n))}refocus(t,e){Y(this,Un,K(this,xr,Fc).call(this,y(this,Un),t,e))}pending(){return y(this,Un).length}build(t,e){let n=performance.now();for(;y(this,Un).length>0;){if(e!==null&&performance.now()-n>=e)return;let[i,r]=y(this,Un).shift().split(",").map(Number);t.setChunk(i,r,tg(y(this,Mn),y(this,Ss),i,r))}}};Ss=new WeakMap,Mn=new WeakMap,Un=new WeakMap,Ia=new WeakMap,xr=new WeakSet,Fc=l(function(t,e,n){let{stepsU:i,stepsV:r,spacingU:a,spacingV:o}=y(this,Mn),c=i*a,h=r*o,{u,v:p}=this.layout.period(),d=l((x,S)=>Math.abs(S===null?x:x-S*Math.round(x/S)),"round"),g=l(x=>{let[S,_]=x.split(",").map(Number);return Math.hypot(d((S+.5)*c-e,u),d((_+.5)*h-n,p))},"distance");return[...t].sort((x,S)=>g(x)-g(S))},"#nearestFirst"),l(Qd,"Land");var Kd=Qd,ng=Kd;var HM=l(()=>typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches===!0,"prefersReducedMotion"),La=HM;var ig=l((s,t,e=100)=>{let n=s.filter(({time:o})=>t-o<=e);if(n.length<2)return{x:0,y:0};let i=n[0],r=n[n.length-1],a=r.time-i.time;return a<=0?{x:0,y:0}:{x:(r.x-i.x)/a,y:(r.y-i.y)/a}},"releaseVelocity");var WM=8,XM=.92,qM=.02,sg=3,YM=50,ZM=8,JM=10,rg=250,Da,Na,vr,yr,ws,Xi,jd=class jd{constructor({pointerId:t,clientX:e,clientY:n,timeStamp:i}){rt(this,Da);rt(this,Na);rt(this,vr);rt(this,yr);rt(this,ws,!1);rt(this,Xi);this.pointerId=t,Y(this,Da,e),Y(this,Na,n),Y(this,vr,e),Y(this,yr,n),Y(this,Xi,[{x:e,y:n,time:i}])}dragging(){return y(this,ws)}move({pointerId:t,clientX:e,clientY:n,timeStamp:i}){if(t!==this.pointerId||!y(this,ws)&&Math.hypot(e-y(this,Da),n-y(this,Na))<WM)return null;let r=!y(this,ws),a=y(this,vr)-e,o=y(this,yr)-n;return Y(this,ws,!0),Y(this,vr,e),Y(this,yr,n),y(this,Xi).push({x:e,y:n,time:i}),y(this,Xi).length>20&&y(this,Xi).shift(),{dx:a,dy:o,started:r}}releaseVelocity(t){return ig(y(this,Xi),t)}};Da=new WeakMap,Na=new WeakMap,vr=new WeakMap,yr=new WeakMap,ws=new WeakMap,Xi=new WeakMap,l(jd,"Press");var Oc=jd,Kn,Ua,tf=class tf{constructor(t){rt(this,Kn,null);rt(this,Ua);Y(this,Ua,t)}start(t){this.stop();let e=Math.hypot(t.x,t.y),n=e>sg?sg/e:1,i=t.x*n,r=t.y*n,a=null,o=l(c=>{let h=a===null?16:Math.min(c-a,64);if(a=c,Math.hypot(i,r)<qM){Y(this,Kn,null);return}y(this,Ua).call(this,-i*h,-r*h);let u=Math.pow(XM,h/16);i*=u,r*=u,Y(this,Kn,window.requestAnimationFrame(o))},"step");Y(this,Kn,window.requestAnimationFrame(o))}gliding(){return y(this,Kn)!==null}stop(){y(this,Kn)!==null&&(window.cancelAnimationFrame(y(this,Kn)),Y(this,Kn,null))}};Kn=new WeakMap,Ua=new WeakMap,l(tf,"Glide");var Bc=tf,Es,Fa,Oa,Mr,ef=class ef{constructor(){rt(this,Es,0);rt(this,Fa,0);rt(this,Oa,-1/0);rt(this,Mr,0)}turned(t,e){let n=t.deltaMode===0,i=t.deltaY;if(i===0||t.ctrlKey&&e!==null&&t.timeStamp-e<=rg)return 0;let r=Math.sign(i),a=t.timeStamp-y(this,Oa)>rg||r!==y(this,Fa);if(Y(this,Oa,t.timeStamp),Y(this,Fa,r),a&&(Y(this,Es,0),Y(this,Mr,0)),n&&!t.ctrlKey&&y(this,Mr)>=JM)return 0;if(!a&&n){if(Y(this,Es,y(this,Es)+i),Math.abs(y(this,Es))<(t.ctrlKey?ZM:YM))return 0;Y(this,Es,0)}return n&&!t.ctrlKey&&Y(this,Mr,y(this,Mr)+1),i<0?1:-1}};Es=new WeakMap,Fa=new WeakMap,Oa=new WeakMap,Mr=new WeakMap,l(ef,"WheelTurn");var zc=ef;var $M=350,KM=.006,ag=.004,Qn,Oe,Je,br,jn,Fn,Hc,Sn,wn,qi,Sr,hn,Yi,St,bn,kc,Vc,og,sf,vi,rf,lg,yi,cg,hg,ug,dg,Ba,fg,pg,mg,Gc,af=class af{constructor(t,e,n=null){rt(this,St);rt(this,Qn);rt(this,Oe);rt(this,Je,null);rt(this,br,[0,0]);rt(this,jn,null);rt(this,Fn);rt(this,Hc,new zc);rt(this,Sn,new Map);rt(this,wn,null);rt(this,qi,null);rt(this,Sr,[]);rt(this,hn);rt(this,Yi,null);Y(this,Qn,t),Y(this,Oe,e),Y(this,hn,n),Y(this,Fn,new Bc((i,r)=>{let[a,o]=K(this,St,og).call(this);K(this,St,rf).call(this,[a,o],[a-i,o-r])})),K(this,St,bn).call(this,"pointerdown",i=>K(this,St,lg).call(this,i)),K(this,St,bn).call(this,"pointermove",i=>K(this,St,hg).call(this,i)),K(this,St,bn).call(this,"pointerup",i=>K(this,St,ug).call(this,i)),K(this,St,bn).call(this,"pointercancel",i=>K(this,St,dg).call(this,i)),K(this,St,bn).call(this,"wheel",i=>K(this,St,pg).call(this,i),{passive:!1}),K(this,St,bn).call(this,"gesturestart",i=>K(this,St,Gc).call(this,i,"start"),{passive:!1}),K(this,St,bn).call(this,"gesturechange",i=>K(this,St,Gc).call(this,i,"change"),{passive:!1}),K(this,St,bn).call(this,"gestureend",i=>K(this,St,Gc).call(this,i,"end"),{passive:!1}),K(this,St,bn).call(this,"contextmenu",i=>K(this,St,cg).call(this,i)),K(this,St,bn).call(this,"pointerleave",()=>y(this,hn)?.hover(null)),K(this,St,bn).call(this,"touchstart",i=>i.preventDefault(),{passive:!1})}dragging(){return y(this,Je)?.dragging()===!0||y(this,jn)!==null}moving(){return this.dragging()||y(this,wn)!==null||y(this,Fn).gliding()}dispose(){y(this,Fn).stop(),K(this,St,yi).call(this),y(this,Sr).forEach(([t,e,n])=>y(this,Qn).removeEventListener(t,e,n)),Y(this,Sr,[])}};Qn=new WeakMap,Oe=new WeakMap,Je=new WeakMap,br=new WeakMap,jn=new WeakMap,Fn=new WeakMap,Hc=new WeakMap,Sn=new WeakMap,wn=new WeakMap,qi=new WeakMap,Sr=new WeakMap,hn=new WeakMap,Yi=new WeakMap,St=new WeakSet,bn=l(function(t,e,n){y(this,Qn).addEventListener(t,e,n),y(this,Sr).push([t,e,n])},"#listen"),kc=l(function(){return{width:y(this,Qn).clientWidth||1,height:y(this,Qn).clientHeight||1}},"#box"),Vc=l(function([t,e]){let{width:n,height:i}=K(this,St,kc).call(this);return[t/n*2-1,1-e/i*2]},"#screen"),og=l(function(){let{width:t,height:e}=K(this,St,kc).call(this);return[t/2,e/2]},"#middle"),sf=l(function(){let{width:t,height:e}=K(this,St,kc).call(this);return t/e},"#aspect"),vi=l(function(t){let e=y(this,Qn).getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]},"#at"),rf=l(function(t,e){y(this,Oe).setOrbit(Dm(y(this,Oe).orbit(),y(this,Oe).lookHeight(),K(this,St,Vc).call(this,t),K(this,St,Vc).call(this,e),K(this,St,sf).call(this)))},"#pan"),lg=l(function(t){if(y(this,Fn).stop(),y(this,hn)?.hover(null),t.pointerType==="touch"&&(y(this,Sn).set(t.pointerId,K(this,St,vi).call(this,t)),y(this,Sn).size===2)){Y(this,Je,null),K(this,St,yi).call(this),Y(this,wn,K(this,St,Ba).call(this));return}if(t.isPrimary&&t.button!==2){if(y(this,Qn).setPointerCapture?.(t.pointerId),t.button===1||t.button===0&&t.altKey){t.preventDefault(),Y(this,jn,{pointerId:t.pointerId,x:t.clientX,y:t.clientY});return}if(t.button===0){let e=new Oc(t),[n,i]=K(this,St,vi).call(this,t),{clientX:r,clientY:a}=t;Y(this,Je,e),Y(this,br,[n,i]),K(this,St,yi).call(this),Y(this,Yi,window.setTimeout(()=>{Y(this,Yi,null),y(this,Je)===e&&!e.dragging()&&y(this,hn)?.menu(n,i,r,a,!0)===!0&&Y(this,Je,null)},$M))}}},"#down"),yi=l(function(){y(this,Yi)!==null&&(window.clearTimeout(y(this,Yi)),Y(this,Yi,null))},"#stopHold"),cg=l(function(t){if(y(this,hn)===null||!y(this,hn).menuOnRightClick()||(t.preventDefault(),y(this,hn).menuOpen()))return;let[e,n]=K(this,St,vi).call(this,t);y(this,hn).menu(e,n,t.clientX,t.clientY,!1)&&(K(this,St,yi).call(this),Y(this,Je,null))},"#rightClick"),hg=l(function(t){if(y(this,Sn).has(t.pointerId)&&(y(this,Sn).set(t.pointerId,K(this,St,vi).call(this,t)),y(this,wn)!==null)){K(this,St,fg).call(this);return}let e=y(this,jn);if(e!==null&&e.pointerId===t.pointerId){let r=y(this,Oe).orbit();y(this,Oe).setOrbit(ys({...r,yaw:r.yaw-(t.clientX-e.x)*KM,pitch:r.pitch+(t.clientY-e.y)*ag})),e.x=t.clientX,e.y=t.clientY;return}let n=y(this,Je);if(n===null){if(t.pointerType==="mouse"&&t.buttons===0&&!y(this,Fn).gliding()){let[r,a]=K(this,St,vi).call(this,t);y(this,hn)?.hover({x:r,y:a,clientX:t.clientX,clientY:t.clientY})}return}if(n.move(t)===null)return;K(this,St,yi).call(this);let i=K(this,St,vi).call(this,t);K(this,St,rf).call(this,y(this,br),i),Y(this,br,i)},"#move"),ug=l(function(t){if(y(this,Sn).delete(t.pointerId),y(this,wn)!==null){Y(this,wn,y(this,Sn).size<2?null:K(this,St,Ba).call(this));return}if(y(this,jn)?.pointerId===t.pointerId){Y(this,jn,null);return}let e=y(this,Je);if(!(e===null||e.pointerId!==t.pointerId)){if(Y(this,Je,null),K(this,St,yi).call(this),!e.dragging()){let[n,i]=K(this,St,vi).call(this,t);y(this,hn)?.click(n,i,t.clientX,t.clientY);return}La()||y(this,Fn).start(e.releaseVelocity(t.timeStamp))}},"#up"),dg=l(function(t){y(this,Sn).delete(t.pointerId),y(this,wn)!==null&&Y(this,wn,y(this,Sn).size<2?null:K(this,St,Ba).call(this)),y(this,Je)?.pointerId===t.pointerId&&(Y(this,Je,null),K(this,St,yi).call(this)),y(this,jn)?.pointerId===t.pointerId&&Y(this,jn,null)},"#cancel"),Ba=l(function(){let[t,e]=[...y(this,Sn).values()];return t===void 0||e===void 0?null:{distance:Math.max(1,Math.hypot(e[0]-t[0],e[1]-t[1])),angle:Math.atan2(e[1]-t[1],e[0]-t[0]),middleY:(t[1]+e[1])/2,orbit:y(this,Oe).orbit()}},"#measurePair"),fg=l(function(){let t=y(this,wn),e=K(this,St,Ba).call(this);t===null||e===null||y(this,Oe).setOrbit(ys({...t.orbit,distance:t.orbit.distance*(t.distance/e.distance),yaw:t.orbit.yaw-(e.angle-t.angle),pitch:t.orbit.pitch+(e.middleY-t.middleY)*ag}))},"#twoFingers"),pg=l(function(t){t.preventDefault();let e=y(this,Hc).turned(t,y(this,qi)?.at??null);e!==0&&(y(this,Fn).stop(),K(this,St,mg).call(this,e,K(this,St,vi).call(this,t)))},"#wheelTurned"),mg=l(function(t,e){let n=y(this,Oe).orbit(),i=_r(n,t),r=gr(n,y(this,Oe).lookHeight(),K(this,St,Vc).call(this,e),K(this,St,sf).call(this));if(r===null||i.distance===n.distance){y(this,Oe).setOrbit(i);return}let a=1-i.distance/n.distance;y(this,Oe).setOrbit({...i,focus:[n.focus[0]+(r[0]-n.focus[0])*a,n.focus[1]+(r[1]-n.focus[1])*a]})},"#zoomAbout"),Gc=l(function(t,e){if(t.preventDefault(),y(this,wn)!==null){Y(this,qi,null);return}if(e==="end"){Y(this,qi,null);return}if(e==="start"){y(this,Fn).stop(),Y(this,Je,null),K(this,St,yi).call(this),Y(this,qi,{orbit:y(this,Oe).orbit(),at:t.timeStamp});return}let n=y(this,qi);n!==null&&(n.at=t.timeStamp,y(this,Oe).setOrbit(ys({...n.orbit,distance:n.orbit.distance/Math.max(.05,t.scale),yaw:n.orbit.yaw-t.rotation*Math.PI/180})))},"#safari"),l(af,"CameraInput");var nf=af,gg=nf;var QM=["#9a9a9a","#4a4a4a"],za=l(s=>{let t=s.civilization?.attributes?.find(e=>e.name==="colors")?.value;return!Array.isArray(t)||typeof t[0]!="string"?QM:[t[0],typeof t[1]=="string"?t[1]:t[0]]},"coloursOf"),of=l((s,t)=>s.find(e=>e.id===t)??[...s].sort((e,n)=>(n.defence?.value??0)-(e.defence?.value??0))[0]??null,"unitOnTop"),jM=l((s,t,e,n={})=>{let i=s.units??[],r=of(i,t),a=r!==null&&r.id===t,o=e&&s.city?{name:n.cityName?.(s.city)??s.city.name,size:s.city.growth?.size??1,colours:za(s.city.player),walled:s.city.walled===!0,disorder:s.city.civilDisorderDeclared===!0}:null,c=r!==null&&(e||a)?{type:r._,colours:za(r.player),count:i.length,active:a,busy:r.busy!==null&&r.busy!==void 0}:null;return o===null&&c===null?null:{city:o,unit:c}},"markerFor"),_g=jM;var tb=1,eb=.04,nb=12,ib=l((s,t,e,n,i,{water:r=0,ceiling:a=tb}={})=>{let{from:o,direction:c}=Gd(s,t,e,n),[h,u,p]=o,[d,g,x]=c;if(g>-1e-6)return null;let S=l(f=>[h+d*f,u+g*f,p+x*f],"at"),_=l(f=>{let[M,N,P]=S(f);return N-Math.max(r,i(M,P))},"above"),m=Math.max(0,(u-a)/-g),E=(u-r)/-g,R=eb/Math.max(1e-6,Math.hypot(d,x)),T=m;for(let f=m;;f=Math.min(E,f+R)){if(_(f)<=0){let M=T,N=f;for(let F=0;F<nb;F++){let B=(M+N)/2;_(B)>0?M=B:N=B}let[P,,D]=S(N);return[P,D]}if(f>=E)break;T=f}let[C,,w]=S(E);return[C,w]},"pickGround"),xg=ib;var Wc=4,Zi,ka,Ts,As,je,wr,Ji,Mi,Va,Ga,Ha,On,Xc,vg,cf,hf=class hf{constructor(t,e,n,i,r){rt(this,On);rt(this,Zi);rt(this,ka);rt(this,Ts);rt(this,As);rt(this,je);rt(this,wr);rt(this,Ji);rt(this,Mi);rt(this,Va);rt(this,Ga);rt(this,Ha,l(t=>{let e=y(this,Zi).getBoundingClientRect(),n=e.width>0?(t.clientX-e.left)/e.width:0,i=e.height>0?(t.clientY-e.top)/e.height:0;y(this,Ga).call(this,n*y(this,je),i*y(this,wr))},"#click"));Y(this,Zi,t),Y(this,Ts,e),Y(this,As,n),Y(this,je,e.period().u),Y(this,wr,i),Y(this,Ga,r),Y(this,Mi,document.createElement("canvas"));let{v:a}=e.period();Y(this,Ji,a),Y(this,Va,[[0,0],[-y(this,je),0],...a===null?[]:[[0,-a],[-y(this,je),-a]]]);let o=Math.max(1,Math.round(y(this,je)*Wc)),c=Math.max(1,Math.round(y(this,wr)*Wc));[t,y(this,Mi)].forEach(h=>{h.width=o,h.height=c}),Y(this,ka,t.getContext("2d")),t.addEventListener("click",y(this,Ha))}dispose(){y(this,Zi).removeEventListener("click",y(this,Ha))}redraw(){let t=y(this,Mi).getContext("2d");if(t===null)return;let e=y(this,As).width(),n=y(this,As).height(),i=[];t.fillStyle="#000000",t.fillRect(0,0,y(this,Mi).width,y(this,Mi).height);for(let r=0;r<n;r++)for(let a=0;a<e;a++){let o=y(this,As).get(a,r),c=o.terrain?._??"Unknown";if(c==="Unknown")continue;t.fillStyle=Uc(c).colour,y(this,Va).forEach(([p,d])=>{K(this,On,vg).call(this,t,a,r,p,d),t.fill()});let[h,u]=y(this,Ts).centre(a,r);if(o.city)i.push([h,u,za(o.city.player)[0],2.2]);else if((o.units??[]).length>0){let p=of(o.units,null);p!==null&&i.push([h,u,za(p.player)[0],1.4])}}i.forEach(([r,a,o,c])=>K(this,On,cf).call(this,r,a).forEach(([h,u])=>{t.fillStyle="#000000",t.fillRect(h-c-.5,u-c-.5,c*2+1,c*2+1),t.fillStyle=o,t.fillRect(h-c,u-c,c*2,c*2)}))}show(t,e){let n=y(this,ka);if(n===null)return;if(n.clearRect(0,0,y(this,Zi).width,y(this,Zi).height),n.drawImage(y(this,Mi),0,0),e!==null){let[u,p]=y(this,Ts).centre(e.x,e.y);n.fillStyle="#ffffff",K(this,On,cf).call(this,u,p).forEach(([d,g])=>n.fillRect(d-2,g-2,4,4))}if(t===null||t.length<3)return;n.strokeStyle="#ffffff",n.lineWidth=1;let i=y(this,Ji),r=Math.min(...t.map(([u])=>u)),a=Math.min(...t.map(([,u])=>u)),o=-y(this,je)*Math.floor(r/y(this,je)),c=i===null?0:-i*Math.floor(a/i);(i===null?[0]:[-i,0,i]).forEach(u=>[-y(this,je),0,y(this,je)].forEach(p=>{n.beginPath(),t.forEach(([d,g],x)=>{let[S,_]=K(this,On,Xc).call(this,d+o+p,g+c+u);x===0?n.moveTo(S,_):n.lineTo(S,_)}),n.closePath(),n.stroke()}))}};Zi=new WeakMap,ka=new WeakMap,Ts=new WeakMap,As=new WeakMap,je=new WeakMap,wr=new WeakMap,Ji=new WeakMap,Mi=new WeakMap,Va=new WeakMap,Ga=new WeakMap,Ha=new WeakMap,On=new WeakSet,Xc=l(function(t,e){return[t*Wc,e*Wc]},"#px"),vg=l(function(t,e,n,i=0,r=0){t.beginPath(),y(this,Ts).outline(e,n).forEach(([a,o],c)=>{let[h,u]=K(this,On,Xc).call(this,a+i,o+r);c===0?t.moveTo(h,u):t.lineTo(h,u)}),t.closePath()},"#outline"),cf=l(function(t,e){return(y(this,Ji)===null?[0]:[-y(this,Ji),0,y(this,Ji)]).flatMap(i=>[-y(this,je),0,y(this,je)].map(r=>K(this,On,Xc).call(this,t+r,e+i)))},"#everywhere"),l(hf,"Minimap3D");var lf=hf,yg=lf;var sb=10,rb=350,ab=500,ob=.25,lb=400,Ae,Za,Ja,le,Tn,Rs,$a,Ka,ne,ve,tn,Er,Qa,Ps,$i,Tr,ja,to,un,eo,no,ti,Ki,io,dn,Ar,Cr,Qi,bi,Rr,ji,Is,Pr,Si,so,wi,Ir,Lr,ro,Dr,ao,Nr,Ur,oo,ct,Mg,Wa,bg,Sg,wg,df,qc,Eg,Tg,Xa,Cs,qa,Ag,Cg,ff,Ya,Yc,pf,Rg,Pg,mf,En,Ig,Lg,gf,_f=class _f{constructor(t,e=Vm){rt(this,ct);rt(this,Ae);rt(this,Za);rt(this,Ja,[]);rt(this,le);rt(this,Tn);rt(this,Rs,null);rt(this,$a,0);rt(this,Ka,"");rt(this,ne);rt(this,ve,null);rt(this,tn,null);rt(this,Er);rt(this,Qa);rt(this,Ps);rt(this,$i,null);rt(this,Tr,null);rt(this,ja);rt(this,to,!1);rt(this,un);rt(this,eo);rt(this,no);rt(this,ti,null);rt(this,Ki,null);rt(this,io);rt(this,dn,l(()=>{let t=y(this,Ki);t!==null&&(t.timer!==null&&window.clearTimeout(t.timer),Y(this,Ki,null),document.removeEventListener("keydown",y(this,dn),!0),t.open&&y(this,un).endTooltip(y(this,Ae)))},"#endHover"));rt(this,Ar,null);rt(this,Cr,!0);rt(this,Qi,new Map);rt(this,bi,null);rt(this,Rr,new Map);rt(this,ji,new Map);rt(this,Is,[]);rt(this,Pr,0);rt(this,Si,null);rt(this,so,null);rt(this,wi,!0);rt(this,Ir,!1);rt(this,Lr,!1);rt(this,ro);rt(this,Dr);rt(this,ao,"");rt(this,Nr,l(()=>K(this,ct,gf).call(this),"#resizeHandler"));rt(this,Ur,null);rt(this,oo,!1);Y(this,Ae,t.mapCanvas),Y(this,Za,t.coveredBy),Y(this,ro,t.art),Y(this,eo,{cityName:t.cityName}),Y(this,Dr,t.art.id()),this.world=t.world,Y(this,le,new ng(t.world)),Y(this,Is,t.world.tiles()),Y(this,Pr,y(this,Is).length),Y(this,Qa,t.cameraDistance),Y(this,ja,t.lockVerticalEdges);let n=t.cameraDistance.get();Y(this,ne,K(this,ct,Xa).call(this,{...Im(y(this,le).layout.centre(0,0)),...n===null?{}:{distance:n}})),Y(this,Ps,y(this,ne).distance),this.portal=new Df(t,{centre:l(()=>K(this,ct,Eg).call(this),"centre"),centreOn:l((i,r)=>K(this,ct,Tg).call(this,i,r),"centreOn"),changed:l(()=>K(this,ct,En).call(this),"changed"),visible:l((i,r,a)=>K(this,ct,Mg).call(this,i,r,a),"visible")}),Y(this,Tn,e(t.mapCanvas,{period:y(this,le).layout.period(),ground:y(this,le).ground()})),t.minimapCanvas!==null&&Y(this,Ar,new yg(t.minimapCanvas,y(this,le).layout,t.world,y(this,le).extentV(),(i,r)=>K(this,ct,qa).call(this,{...y(this,ve)?.to??y(this,ne),focus:[i,r]}))),t.debug&&t.mapCanvas.parentElement&&(Y(this,Rs,K(this,ct,Ig).call(this,t.mapCanvas.parentElement)),window.civMap3DView=this),y(this,le).queueAll(...K(this,ct,qc).call(this)),K(this,ct,Yc).call(this),this.portal.on("activate-unit",i=>t.activateUnit(i)),Y(this,un,t.squares),Y(this,io,t.playerId),Y(this,no,t.transport),Y(this,Er,new gg(t.mapCanvas,{orbit:l(()=>y(this,ne),"orbit"),lookHeight:l(()=>y(this,tn)??0,"lookHeight"),setOrbit:l(i=>this.setOrbit(i),"setOrbit")},{click:l((i,r)=>K(this,ct,bg).call(this,i,r),"click"),menu:l((i,r,a,o,c)=>K(this,ct,Sg).call(this,i,r,a,o,c),"menu"),menuOnRightClick:l(()=>y(this,un).menuOnRightClick(),"menuOnRightClick"),menuOpen:l(()=>y(this,un).menuOpen(),"menuOpen"),hover:l(i=>K(this,ct,wg).call(this,i),"hover")})),window.addEventListener("resize",y(this,Nr)),typeof ResizeObserver<"u"&&t.mapCanvas.parentElement&&(Y(this,Ur,new ResizeObserver(y(this,Nr))),y(this,Ur).observe(t.mapCanvas.parentElement)),K(this,ct,gf).call(this),K(this,ct,En).call(this)}land(){return y(this,le)}orbit(){return y(this,ne)}moving(){return y(this,ve)!==null||y(this,Er).moving()}setOrbit(t){y(this,dn).call(this),Y(this,ve,null),Y(this,ne,K(this,ct,Xa).call(this,t)),K(this,ct,En).call(this)}activeUnit(){return{unit:y(this,Si),pendingTile:y(this,so)}}centre(t){this.portal.setCenter(t.x,t.y)}turnBy(t){let e=y(this,ve)?.to??y(this,ne);K(this,ct,qa).call(this,{...e,yaw:e.yaw+t*Pm})}faceNorth(){K(this,ct,qa).call(this,{...y(this,ve)?.to??y(this,ne),yaw:0})}debugViewModes(){return[]}dispose(){K(this,ct,mf).call(this,!0),Y(this,oo,!0),y(this,dn).call(this),y(this,Er).dispose(),y(this,Ar)?.dispose(),window.removeEventListener("resize",y(this,Nr)),y(this,Ur)?.disconnect(),y(this,bi)!==null&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(y(this,bi)),Y(this,bi,null),y(this,Rs)?.remove(),y(this,Tn).dispose();let t=window;t.civMap3DView===this&&delete t.civMap3DView}endPicking(){let t=y(this,ti);t!==null&&(Y(this,ti,null),y(this,Ae).classList.remove("picking-tile"),t.window?.close())}flush(){K(this,ct,ff).call(this),K(this,ct,En).call(this)}mapEvent(t){}measureCovered(){let t=y(this,Ae).getBoundingClientRect();Y(this,Ja,y(this,Za).map(e=>{let n=e.getBoundingClientRect(),i=e.parentElement?.getBoundingClientRect()??n;return{left:Math.max(n.left,i.left,t.left)-t.left,top:Math.max(n.top,i.top,t.top)-t.top,right:Math.min(n.right,i.right,t.right)-t.left,bottom:Math.min(n.bottom,i.bottom,t.bottom)-t.top}}).filter(({left:e,top:n,right:i,bottom:r})=>i>e&&r>n))}pickTile(t,e,n){this.endPicking();let i={accept:t,onPick:e,window:null};Y(this,ti,i),y(this,Ae).classList.add("picking-tile"),i.window=y(this,un).prompt(n,()=>{y(this,ti)===i&&(Y(this,ti,null),y(this,Ae).classList.remove("picking-tile"))})}picking(){return y(this,ti)!==null}queueTile(t){y(this,Rr).set(`${t.x},${t.y}`,t)}redrawArt(){let t=y(this,ro).id();return t===y(this,Dr)?"unchanged":(Y(this,Dr,t),"redrawn")}releaseTiles(){y(this,Rr).forEach((t,e)=>y(this,ji).set(e,t)),y(this,Rr).clear(),y(this,ji).size>0&&K(this,ct,En).call(this)}setActiveUnit(t,e){let n=y(this,Si)?.tile;Y(this,Si,t),Y(this,so,e??null),[n,t?.tile].forEach(i=>{i&&K(this,ct,Ya).call(this,i.x,i.y)}),K(this,ct,En).call(this)}setWaiting(t){Y(this,Lr,t),t&&y(this,dn).call(this)}showActiveUnit(t){y(this,wi)||(Y(this,wi,!0),K(this,ct,Yc).call(this),K(this,ct,En).call(this))}shown(){return{units:y(this,wi),yields:y(this,Ir),waiting:y(this,Lr)}}tilesPending(){return y(this,ji).size}toggleUnits(){Y(this,wi,!y(this,wi)),K(this,ct,Yc).call(this),K(this,ct,En).call(this)}toggleYields(){Y(this,Ir,!y(this,Ir))}zoomBy(t){y(this,dn).call(this),Y(this,ne,_r(y(this,ne),t)),y(this,ve)!==null&&(y(this,ve).from=_r(y(this,ve).from,t),y(this,ve).to=_r(y(this,ve).to,t)),K(this,ct,En).call(this)}};Ae=new WeakMap,Za=new WeakMap,Ja=new WeakMap,le=new WeakMap,Tn=new WeakMap,Rs=new WeakMap,$a=new WeakMap,Ka=new WeakMap,ne=new WeakMap,ve=new WeakMap,tn=new WeakMap,Er=new WeakMap,Qa=new WeakMap,Ps=new WeakMap,$i=new WeakMap,Tr=new WeakMap,ja=new WeakMap,to=new WeakMap,un=new WeakMap,eo=new WeakMap,no=new WeakMap,ti=new WeakMap,Ki=new WeakMap,io=new WeakMap,dn=new WeakMap,Ar=new WeakMap,Cr=new WeakMap,Qi=new WeakMap,bi=new WeakMap,Rr=new WeakMap,ji=new WeakMap,Is=new WeakMap,Pr=new WeakMap,Si=new WeakMap,so=new WeakMap,wi=new WeakMap,Ir=new WeakMap,Lr=new WeakMap,ro=new WeakMap,Dr=new WeakMap,ao=new WeakMap,Nr=new WeakMap,Ur=new WeakMap,oo=new WeakMap,ct=new WeakSet,Mg=l(function(t,e,n){let i=y(this,Ae).clientWidth,r=y(this,Ae).clientHeight;if(i<=0||r<=0)return!1;let a=y(this,ve)?.to??y(this,ne),[o,c]=y(this,le).layout.centre(t,e),{u:h,v:u}=K(this,ct,Cs).call(this),[p,d]=a.focus,g=l((f,M,N)=>N===null?f:f+N*Math.round((M-f)/N),"nearest"),x=[g(o,p,h),Math.max(0,y(this,le).heightAt(o,c)),g(c,d,u)],S=i/r,_=y(this,tn)??0,m=Vd(a,_,x,S),E=Vd(a,_,[x[0]+Math.cos(a.yaw),x[1],x[2]+Math.sin(a.yaw)],S);if(m===null||E===null)return!1;let R=(m[0]+1)/2*i,T=(1-m[1])/2*r,C=Math.abs(E[0]-m[0])*(i/2),w=(n+.5)*C;return R>=w&&R<=i-w&&T>=w&&T<=r-w&&!y(this,Ja).some(({left:f,top:M,right:N,bottom:P})=>R>=f-C/2&&R<=N+C/2&&T>=M-C/2&&T<=P+C/2)},"#visible"),Wa=l(function(t,e){let n=y(this,Ae).clientWidth,i=y(this,Ae).clientHeight;if(n<=0||i<=0)return null;let r=xg(y(this,ne),y(this,tn)??0,[t/n*2-1,1-e/i*2],n/i,(p,d)=>y(this,le).heightAt(p,d));if(r===null)return null;let[a,o]=y(this,le).layout.tileAt(...r),c=this.world.width(),h=this.world.height();return!(K(this,ct,Cs).call(this).v!==null)&&(o<0||o>=h)?null:this.world.get((a%c+c)%c,(o%h+h)%h)},"#tileAt"),bg=l(function(t,e){let n=K(this,ct,Wa).call(this,t,e);n!==null&&this.portal.emit("tile-clicked",n.x,n.y);let i=y(this,ti);if(i!==null){n!==null&&i.accept(n)&&(this.endPicking(),i.onPick(n));return}n!==null&&y(this,un).click(this.portal,n)},"#clicked"),Sg=l(function(t,e,n,i,r){let a=y(this,Si),o=K(this,ct,Wa).call(this,t,e);return a===null||o===null?!1:(this.endPicking(),y(this,un).menu(this.portal,n,i,a,o,y(this,no),r),!0)},"#menu"),wg=l(function(t){let e=t===null||y(this,Lr)||y(this,un).menuOpen()?null:K(this,ct,Wa).call(this,t.x,t.y),n=y(this,Ki);if(e===null||t===null){y(this,dn).call(this);return}let i=`${e.x},${e.y}`;if(n!==null&&n.key===i){Object.assign(n,{canvasX:t.x,canvasY:t.y,clientX:t.clientX,clientY:t.clientY});return}y(this,dn).call(this);let r={key:i,x:e.x,y:e.y,canvasX:t.x,canvasY:t.y,clientX:t.clientX,clientY:t.clientY,timer:null,open:!1};r.timer=window.setTimeout(()=>{r.timer=null,K(this,ct,df).call(this,r)},lb),Y(this,Ki,r),document.addEventListener("keydown",y(this,dn),!0)},"#hovered"),df=l(function(t){let e=typeof document.elementFromPoint!="function"||document.elementFromPoint(t.clientX,t.clientY)===y(this,Ae),n=e?K(this,ct,Wa).call(this,t.canvasX,t.canvasY):null;if(n===null||`${n.x},${n.y}`!==t.key){y(this,dn).call(this);return}let i=y(this,un).tooltip(y(this,Ae),n,y(this,io),{left:t.clientX-10,top:t.clientY-10,bottom:t.clientY+10});!i&&t.open&&y(this,un).endTooltip(y(this,Ae)),t.open=i},"#showHover"),qc=l(function(){return[...y(this,ne).focus]},"#focus"),Eg=l(function(){let[t,e]=y(this,le).layout.tileAt(...y(this,ne).focus),n=this.world.width(),i=this.world.height();return{x:(t%n+n)%n,y:K(this,ct,Cs).call(this).v===null?Math.min(i-1,Math.max(0,e)):(e%i+i)%i}},"#centreSquare"),Tg=l(function(t,e){let[n,i]=y(this,le).layout.centre(t,e),[r,a]=(y(this,ve)?.to??y(this,ne)).focus;if(n===r&&i===a)return;let o={...y(this,ve)?.to??y(this,ne),focus:[n,i]},{u:c,v:h}=K(this,ct,Cs).call(this),u=l((x,S)=>S===null?x:x-S*Math.round(x/S),"short"),[p,d]=y(this,ne).focus,g=Math.hypot(u(n-p,c),u(i-d,h));if(!y(this,to)||g>y(this,ne).distance*1.5){Y(this,to,!0),this.setOrbit(o);return}K(this,ct,qa).call(this,o)},"#centreOn"),Xa=l(function(t){return Nm(ys(t),K(this,ct,Cs).call(this),y(this,le).extentV())},"#settle"),Cs=l(function(){let t=y(this,le).layout.period();return this.portal?.lockVerticalEdges()??y(this,ja)?{u:t.u,v:null}:t},"#period"),qa=l(function(t){y(this,dn).call(this),typeof requestAnimationFrame!="function"||La()?(Y(this,ve,null),Y(this,ne,K(this,ct,Xa).call(this,t))):Y(this,ve,{from:y(this,ne),to:t,started:null}),K(this,ct,En).call(this)},"#moveTo"),Ag=l(function(t){let e=y(this,ve);if(e===null)return!1;e.started??=t;let n=Math.min(1,(t-e.started)/rb);return Y(this,ne,K(this,ct,Xa).call(this,Um(e.from,e.to,n,K(this,ct,Cs).call(this)))),n>=1&&Y(this,ve,null),n<1},"#moveCamera"),Cg=l(function(t){let[e,n]=y(this,ne).focus,i=Math.max(0,y(this,le).heightAt(e,n));return!t||y(this,tn)===null||La()?(Y(this,tn,i),!1):(Y(this,tn,y(this,tn)+(i-y(this,tn))*ob),Math.abs(i-y(this,tn))<.002?(Y(this,tn,i),!1):!0)},"#followHeight"),ff=l(function(){let t=[...y(this,ji).values()].map(({x:r,y:a})=>[r,a]),e=this.world.tiles(),n=e!==y(this,Is)||e.length!==y(this,Pr);Y(this,Is,e),Y(this,Pr,e.length),y(this,ji).clear(),y(this,le).changed(t,...K(this,ct,qc).call(this),n),t.forEach(([r,a])=>K(this,ct,Ya).call(this,r,a));let i=y(this,Ki);i!==null&&i.open&&t.some(([r,a])=>r===i.x&&a===i.y)&&K(this,ct,df).call(this,i),(t.length>0||n)&&Y(this,Cr,!0),n&&y(this,Qi).forEach((r,a)=>{let[o,c]=a.split(",").map(Number);K(this,ct,Ya).call(this,o,c)})},"#takeTiles"),Ya=l(function(t,e){let n=`${t},${e}`,i=_g(this.world.get(t,e),y(this,Si)?.id??null,y(this,wi),y(this,eo)),[r,a]=y(this,le).layout.centre(t,e),o=[r,Math.max(0,y(this,le).heightAt(r,a)),a],c=i===null?null:JSON.stringify([i,o]);c!==(y(this,Qi).get(n)??null)&&(y(this,Tn).setMarker(n,o,i),c===null?y(this,Qi).delete(n):y(this,Qi).set(n,c))},"#mark"),Yc=l(function(){let t=new Set(y(this,Qi).keys());this.world.tiles().forEach(({x:e,y:n})=>t.add(`${e},${n}`)),t.forEach(e=>{let[n,i]=e.split(",").map(Number);K(this,ct,Ya).call(this,n,i)})},"#markAll"),pf=l(function(t){let e=performance.now(),n=K(this,ct,Ag).call(this,e),[i,r]=K(this,ct,qc).call(this);K(this,ct,ff).call(this),`${i},${r}`!==y(this,Ka)&&(Y(this,Ka,`${i},${r}`),y(this,le).refocus(i,r)),y(this,le).build(y(this,Tn),t);let a=K(this,ct,Cg).call(this,t!==null);y(this,Tn).view(y(this,ne),y(this,tn)??0),y(this,Tn).render(),K(this,ct,Rg).call(this),K(this,ct,mf).call(this),Y(this,$a,performance.now()-e),K(this,ct,Lg).call(this),(y(this,le).pending()>0||n||a)&&K(this,ct,En).call(this)},"#frameDrawn"),Rg=l(function(){let t=y(this,Ar);if(t===null)return;y(this,Cr)&&(Y(this,Cr,!1),t.redraw());let e=y(this,Si)?.tile??null;t.show(K(this,ct,Pg).call(this),e===null?null:{x:e.x,y:e.y})},"#showMinimap"),Pg=l(function(){let t=y(this,Ae).clientWidth,e=y(this,Ae).clientHeight;if(t<=0||e<=0)return null;let n=t/e,i=y(this,tn)??0,r=Ic(y(this,ne).distance).far,[a,o]=y(this,ne).focus,c=l((u,p)=>{for(let d=p;d>=-1;d-=.05){let g=gr(y(this,ne),i,[u,d],n);if(g!==null){let x=Math.hypot(g[0]-a,g[1]-o),S=x>r?r/x:1;return[a+(g[0]-a)*S,o+(g[1]-o)*S]}}return null},"corner"),h=[c(-1,-1),c(1,-1),c(1,1),c(-1,1)];return h.every(u=>u!==null)?h:null},"#patch"),mf=l(function(t=!1){let e=(t?y(this,ve)?.to??y(this,ne):y(this,ne)).distance,n=l(()=>{y(this,$i)!==null&&clearTimeout(y(this,$i)),Y(this,$i,null),Y(this,Tr,null)},"stop"),i=l(()=>{n(),Y(this,Ps,e),y(this,Qa).set(e)},"keep");if(t){n(),e!==y(this,Ps)&&i();return}if(y(this,ve)!==null||e===y(this,Ps)){n();return}y(this,$i)!==null&&e===y(this,Tr)||(n(),Y(this,Tr,e),Y(this,$i,setTimeout(i,ab)))},"#keepDistance"),En=l(function(){if(!y(this,oo)){if(typeof requestAnimationFrame!="function"){K(this,ct,pf).call(this,null);return}y(this,bi)===null&&Y(this,bi,requestAnimationFrame(()=>{Y(this,bi,null),K(this,ct,pf).call(this,sb)}))}},"#draw"),Ig=l(function(t){let e=document.createElement("pre");return e.className="map3d-stats",e.setAttribute("aria-hidden","true"),Object.assign(e.style,{background:"var(--ui-overlay-bg, rgba(0, 0, 0, 0.6))",color:"var(--ui-overlay-fg, #fff)",font:"12px/1.4 monospace",left:"0.5rem",margin:"0",padding:"0.25rem 0.5rem",pointerEvents:"none",position:"absolute",bottom:"0.5rem"}),t.append(e),e},"#statsOverlay"),Lg=l(function(){if(y(this,Rs)===null)return;let{drawCalls:t,triangles:e,geometries:n}=y(this,Tn).stats();y(this,Rs).textContent=[`frame ${y(this,$a).toFixed(1)} ms`,`draw calls ${t}`,`triangles ${e.toLocaleString()}`,`geometries ${n}`,`chunks waiting ${y(this,le).pending()}`].join(`
`)},"#showStats"),gf=l(function(){let t=y(this,Ae).parentElement,e=t?.offsetWidth??0,n=t?.offsetHeight??0,i=window.devicePixelRatio||1,r=`${e}\xD7${n}@${i}`;e===0||n===0||r===y(this,ao)||(Y(this,ao,r),y(this,Tn).resize(e,n,i),this.measureCovered(),y(this,Tn).render())},"#resize"),l(_f,"MapView3D");var uf=_f,Dg=uf;var cb={createMapView3D:l(s=>new Dg(s),"createMapView3D")};globalThis[Pf]=cb;})();
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
