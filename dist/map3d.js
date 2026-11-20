"use strict";(()=>{var gb=Object.create;var Wd=Object.defineProperty;var xb=Object.getOwnPropertyDescriptor;var _b=Object.getOwnPropertyNames;var vb=Object.getPrototypeOf,yb=Object.prototype.hasOwnProperty;var Cg=i=>{throw TypeError(i)};var l=(i,e)=>Wd(i,"name",{value:e,configurable:!0});var bb=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var Mb=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of _b(e))!yb.call(i,s)&&s!==t&&Wd(i,s,{get:()=>e[s],enumerable:!(n=xb(e,s))||n.enumerable});return i};var Sb=(i,e,t)=>(t=i!=null?gb(vb(i)):{},Mb(e||!i||!i.__esModule?Wd(t,"default",{value:i,enumerable:!0}):t,i));var Xd=(i,e,t)=>e.has(i)||Cg("Cannot "+t);var d=(i,e,t)=>(Xd(i,e,"read from private field"),t?t.call(i):e.get(i)),W=(i,e,t)=>e.has(i)?Cg("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t),z=(i,e,t,n)=>(Xd(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t),T=(i,e,t)=>(Xd(i,e,"access private method"),t);var fi=(i,e,t,n)=>({set _(s){z(i,e,s,t)},get _(){return d(i,e,n)}});var Pg=bb(Rr=>{"use strict";var Ni,Gs=Rr&&Rr.__classPrivateFieldGet||function(i,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?i!==e||!n:!e.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(i):n?n.value:e.get(i)};Object.defineProperty(Rr,"__esModule",{value:!0}),Rr.EventEmitter=void 0;var qd=class qd{constructor(){Ni.set(this,{})}on(e,t){e in Gs(this,Ni,"f")||(Gs(this,Ni,"f")[e]=[]),Gs(this,Ni,"f")[e].push(t)}once(e,t){let n=l((...s)=>{t(...s),this.off(e,n)},"i");this.on(e,n)}off(e,t){if(!(e in Gs(this,Ni,"f")))return;let n=Gs(this,Ni,"f")[e].indexOf(t);n!==-1&&Gs(this,Ni,"f")[e].splice(n,1)}emit(e,...t){e in Gs(this,Ni,"f")&&Gs(this,Ni,"f")[e].forEach((n=>n(...t)))}};l(qd,"i");var Nc=qd;Rr.EventEmitter=Nc,Ni=new WeakMap,Rr.default=Nc});var Rg="civMap3D";var Ig=Sb(Pg());var Vs,Ui,xa,$d=class $d extends Ig.EventEmitter{constructor(t,n){super();W(this,Vs);W(this,Ui);W(this,xa);z(this,Ui,t),z(this,xa,t.lockVerticalEdges),z(this,Vs,n)}center(){return d(this,Vs).centre()}isVisible(t,n,s=0){return d(this,Vs).visible(t,n,s)}lockVerticalEdges(){return d(this,xa)}nativeTileSize(){return d(this,Ui).art.nativeTileSize()}openCity(t){let{cityOpener:n}=d(this,Ui);return n.opens(t,this)?(n.open(t,this),!0):!1}playerId(){return d(this,Ui).playerId}render(){d(this,Vs).changed()}scale(){return d(this,Ui).art.scale()}setCenter(t,n){d(this,Vs).centreOn(t,n)}setLockVerticalEdges(t){z(this,xa,t)}setZoom(){}transport(){return d(this,Ui).transport}zoom(){return d(this,Ui).art.zoom()}};Vs=new WeakMap,Ui=new WeakMap,xa=new WeakMap,l($d,"MapPortal3D");var Yd=$d,Lg=Yd;var wb=l((i,e)=>{let[t,n]=i.centre(0,0);return Object.fromEntries(e.directions().map(s=>{let[r,a]=e.offset(s,0,0),[o,c]=i.centre(r,a);return[s,[o-t,c-n]]}))},"groundDirections"),Dg=wb;var ax=0,Af=1,ox=2;var ml=1,nh=2,Ya=3,rr=0,Sn=1,Wi=2,Ur=0,$a=1,Tf=2,Cf=3,Rf=4,lx=5;var Fr=100,cx=101,ux=102,hx=103,dx=104,fx=200,px=201,mx=202,gx=203,Pf=204,If=205,xx=206,_x=207,vx=208,yx=209,bx=210,Mx=211,Sx=212,wx=213,Ex=214,au=0,ou=1,lu=2,Ba=3,cu=4,uu=5,hu=6,du=7,Lf=0,Ax=1,Tx=2,Xi=0,Df=1,Nf=2,Uf=3,gl=4,Ff=5,Of=6,Bf=7;var kf=300,Or=301,Za=302,ih=303,sh=304,Oi=1e3,jn=1001,fu=1002,zt=1003,Cx=1004;var xl=1005;var Gt=1006,rh=1007;var On=1008;var un=1009,zf=1010,Gf=1011,Ja=1012,ah=1013,_i=1014,vi=1015,Bn=1016,oh=1017,lh=1018,Br=1020,Vf=35902,Hf=35899,Wf=1021,Xf=1022,kn=1023,bs=1026,As=1027,qf=1028,ch=1029,qi=1030,uh=1031;var hh=1033,_l=33776,vl=33777,yl=33778,bl=33779,dh=35840,fh=35841,ph=35842,mh=35843,gh=36196,xh=37492,_h=37496,vh=37488,yh=37489,Ml=37490,bh=37491,Mh=37808,Sh=37809,wh=37810,Eh=37811,Ah=37812,Th=37813,Ch=37814,Rh=37815,Ph=37816,Ih=37817,Lh=37818,Dh=37819,Nh=37820,Uh=37821,Fh=36492,Oh=36494,Bh=36495,kh=36283,zh=36284,Sl=36285,Gh=36286;var Yo=2300,pu=2301,su=2302,vf=2303,yf=2400,bf=2401,Mf=2402;var Rx=3200;var Vh=0,Px=1,yi="",kt="srgb",$o="srgb-linear",Zo="linear",gt="srgb";var ru=7680;var Ix=519,Lx=512,Dx=513,Nx=514,Yf=515,Ux=516,Fx=517,$f=518,Zf=519,Jf=35044;var Kf="300 es",Qn=2e3,ka=2001;function Eb(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}l(Eb,"arrayNeedsUint32");function Ab(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}l(Ab,"isTypedArray");function Jo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}l(Jo,"createElementNS");function Ox(){let i=Jo("canvas");return i.style.display="block",i}l(Ox,"createCanvasElement");var Ng={},za=null;function Ko(...i){let e="THREE."+i.shift();za?za("log",e,...i):console.log(e,...i)}l(Ko,"log");function Bx(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}l(Bx,"enhanceLogMessage");function qe(...i){i=Bx(i);let e="THREE."+i.shift();if(za)za("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}l(qe,"warn");function Ye(...i){i=Bx(i);let e="THREE."+i.shift();if(za)za("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}l(Ye,"error");function Xo(...i){let e=i.join(" ");e in Ng||(Ng[e]=!0,qe(...i))}l(Xo,"warnOnce");function kx(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}l(r,"probe"),setTimeout(r,t)})}l(kx,"probeAsync");var zx={[au]:au,[lu]:hu,[cu]:cu,[Ba]:uu,[ou]:ou,[hu]:lu,[du]:du,[uu]:Ba},np=class np{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}};l(np,"EventDispatcher");var Bi=np,ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Zd=Math.PI/180,mu=180/Math.PI;function kr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}l(kr,"generateUUID");function ot(i,e,t){return Math.max(e,Math.min(t,i))}l(ot,"clamp");function Tb(i,e){return(i%e+e)%e}l(Tb,"euclideanModulo");function Jd(i,e,t){return(1-t)*i+t*e}l(Jd,"lerp");function Gx(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}l(Gx,"floorPowerOfTwo");function Hh(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}l(Hh,"getNormalizationScale");function Vx(i,e){if(e.constructor===Float32Array)return i;let t=Hh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}l(Vx,"denormalize");function Hx(i,e){if(e.constructor===Float32Array)return i;let t=Hh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}l(Hx,"normalize");var Bu=class Bu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};l(Bu,"Vector2"),Bu.prototype.isVector2=!0;var We=Bu,ip=class ip{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],u=n[s+1],h=n[s+2],p=n[s+3],f=r[a+0],m=r[a+1],g=r[a+2],y=r[a+3];if(p!==y||c!==f||u!==m||h!==g){let x=c*f+u*m+h*g+p*y;x<0&&(f=-f,m=-m,g=-g,y=-y,x=-x);let _=1-o;if(x<.9995){let b=Math.acos(x),A=Math.sin(b);_=Math.sin(_*b)/A,o=Math.sin(o*b)/A,c=c*_+f*o,u=u*_+m*o,h=h*_+g*o,p=p*_+y*o}else{c=c*_+f*o,u=u*_+m*o,h=h*_+g*o,p=p*_+y*o;let b=1/Math.sqrt(c*c+u*u+h*h+p*p);c*=b,u*=b,h*=b,p*=b}}e[t]=c,e[t+1]=u,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],u=n[s+2],h=n[s+3],p=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+h*p+c*m-u*f,e[t+1]=c*g+h*f+u*p-o*m,e[t+2]=u*g+h*m+o*f-c*p,e[t+3]=h*g-o*p-c*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(n/2),h=o(s/2),p=o(r/2),f=c(n/2),m=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*h*p+u*m*g,this._y=u*m*p-f*h*g,this._z=u*h*g+f*m*p,this._w=u*h*p-f*m*g;break;case"YXZ":this._x=f*h*p+u*m*g,this._y=u*m*p-f*h*g,this._z=u*h*g-f*m*p,this._w=u*h*p+f*m*g;break;case"ZXY":this._x=f*h*p-u*m*g,this._y=u*m*p+f*h*g,this._z=u*h*g+f*m*p,this._w=u*h*p-f*m*g;break;case"ZYX":this._x=f*h*p-u*m*g,this._y=u*m*p+f*h*g,this._z=u*h*g-f*m*p,this._w=u*h*p+f*m*g;break;case"YZX":this._x=f*h*p+u*m*g,this._y=u*m*p+f*h*g,this._z=u*h*g-f*m*p,this._w=u*h*p-f*m*g;break;case"XZY":this._x=f*h*p-u*m*g,this._y=u*m*p-f*h*g,this._z=u*h*g+f*m*p,this._w=u*h*p+f*m*g;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],u=t[2],h=t[6],p=t[10],f=n+o+p;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-u)*m,this._z=(a-s)*m}else if(n>o&&n>p){let m=2*Math.sqrt(1+n-o-p);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+u)/m}else if(o>p){let m=2*Math.sqrt(1+o-n-p);this._w=(r-u)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+p-n-o);this._w=(a-s)/m,this._x=(r+u)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,u=t._z,h=t._w;return this._x=n*h+a*o+s*u-r*c,this._y=s*h+a*c+r*o-n*u,this._z=r*h+a*u+n*c-s*o,this._w=a*h-n*o-s*c-r*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let u=Math.acos(o),h=Math.sin(u);c=Math.sin(c*u)/h,t=Math.sin(t*u)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};l(ip,"Quaternion");var yn=ip,ku=class ku{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ug.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ug.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*s-o*n),h=2*(o*t-r*s),p=2*(r*n-a*t);return this.x=t+c*u+a*p-o*h,this.y=n+c*h+o*u-r*p,this.z=s+c*p+r*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Kd.copy(this).projectOnVector(e),this.sub(Kd)}reflect(e){return this.sub(Kd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};l(ku,"Vector3"),ku.prototype.isVector3=!0;var X=ku,Kd=new X,Ug=new yn,zu=class zu{constructor(e,t,n,s,r,a,o,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,u)}set(e,t,n,s,r,a,o,c,u){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],h=n[4],p=n[7],f=n[2],m=n[5],g=n[8],y=s[0],x=s[3],_=s[6],b=s[1],A=s[4],S=s[7],R=s[2],C=s[5],v=s[8];return r[0]=a*y+o*b+c*R,r[3]=a*x+o*A+c*C,r[6]=a*_+o*S+c*v,r[1]=u*y+h*b+p*R,r[4]=u*x+h*A+p*C,r[7]=u*_+h*S+p*v,r[2]=f*y+m*b+g*R,r[5]=f*x+m*A+g*C,r[8]=f*_+m*S+g*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8];return t*a*h-t*o*u-n*r*h+n*o*c+s*r*u-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],p=h*a-o*u,f=o*c-h*r,m=u*r-a*c,g=t*p+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=p*y,e[1]=(s*u-h*n)*y,e[2]=(o*n-s*a)*y,e[3]=f*y,e[4]=(h*t-s*c)*y,e[5]=(s*r-o*t)*y,e[6]=m*y,e[7]=(n*c-u*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*a+u*o)+a+e,-s*u,s*c,-s*(-u*a+c*o)+o+t,0,0,1),this}scale(e,t){return Xo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jd.makeScale(e,t)),this}rotate(e){return Xo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jd.makeRotation(-e)),this}translate(e,t){return Xo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};l(zu,"Matrix3"),zu.prototype.isMatrix3=!0;var $e=zu,jd=new $e,Fg=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Og=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cb(){let i={enabled:!0,workingColorSpace:$o,spaces:{},convert:l(function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===gt&&(s.r=ys(s.r),s.g=ys(s.g),s.b=ys(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===gt&&(s.r=Oa(s.r),s.g=Oa(s.g),s.b=Oa(s.b))),s},"convert"),workingToColorSpace:l(function(s,r){return this.convert(s,this.workingColorSpace,r)},"workingToColorSpace"),colorSpaceToWorking:l(function(s,r){return this.convert(s,r,this.workingColorSpace)},"colorSpaceToWorking"),getPrimaries:l(function(s){return this.spaces[s].primaries},"getPrimaries"),getTransfer:l(function(s){return s===yi?Zo:this.spaces[s].transfer},"getTransfer"),getToneMappingMode:l(function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},"getToneMappingMode"),getLuminanceCoefficients:l(function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},"getLuminanceCoefficients"),define:l(function(s){Object.assign(this.spaces,s)},"define"),_getMatrix:l(function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},"_getMatrix"),_getDrawingBufferColorSpace:l(function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},"_getDrawingBufferColorSpace"),_getUnpackColorSpace:l(function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},"_getUnpackColorSpace")},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[$o]:{primaries:e,whitePoint:n,transfer:Zo,toXYZ:Fg,fromXYZ:Og,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:e,whitePoint:n,transfer:gt,toXYZ:Fg,fromXYZ:Og,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}}),i}l(Cb,"createColorManagement");var at=Cb();function ys(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}l(ys,"SRGBToLinear");function Oa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}l(Oa,"LinearToSRGB");var _a,sp=class sp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_a===void 0&&(_a=Jo("canvas")),_a.width=e.width,_a.height=e.height;let s=_a.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=_a}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Jo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ys(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ys(t[n]/255)*255):t[n]=ys(t[n]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};l(sp,"ImageUtils");var gu=sp,Rb=0,rp=class rp{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Rb++}),this.uuid=kr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Qd(s[a].image)):r.push(Qd(s[a]))}else r=Qd(s);n.url=r}return t||(e.images[this.uuid]=n),n}};l(rp,"TextureSource");var Ga=rp;function Qd(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?gu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}l(Qd,"serializeImage");var Pb=0,ef=new X,Ua=class Ua extends Bi{constructor(e=Ua.DEFAULT_IMAGE,t=Ua.DEFAULT_MAPPING,n=jn,s=jn,r=Gt,a=On,o=kn,c=un,u=Ua.DEFAULT_ANISOTROPY,h=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pb++}),this.uuid=kr(),this.name="",this.source=new Ga(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ef).x}get height(){return this.source.getSize(ef).y}get depth(){return this.source.getSize(ef).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oi:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case fu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oi:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case fu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};l(Ua,"Texture");var bn=Ua;bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=kf;bn.DEFAULT_ANISOTROPY=1;var Gu=class Gu{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,u=c[0],h=c[4],p=c[8],f=c[1],m=c[5],g=c[9],y=c[2],x=c[6],_=c[10];if(Math.abs(h-f)<.01&&Math.abs(p-y)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+y)<.1&&Math.abs(g+x)<.1&&Math.abs(u+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(u+1)/2,S=(m+1)/2,R=(_+1)/2,C=(h+f)/4,v=(p+y)/4,w=(g+x)/4;return A>S&&A>R?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=C/n,r=v/n):S>R?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=C/s,r=w/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=v/r,s=w/r),this.set(n,s,r,t),this}let b=Math.sqrt((x-g)*(x-g)+(p-y)*(p-y)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(x-g)/b,this.y=(p-y)/b,this.z=(f-h)/b,this.w=Math.acos((u+m+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};l(Gu,"Vector4"),Gu.prototype.isVector4=!0;var Rt=Gu,ap=class ap extends Bi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new bn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ga(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};l(ap,"RenderTarget");var xu=ap,op=class op extends xu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}};l(op,"WebGLRenderTarget");var Nn=op,lp=class lp extends bn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};l(lp,"DataArrayTexture");var Nr=lp;var cp=class cp extends bn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};l(cp,"Data3DTexture");var _u=cp;var qo=class qo{constructor(e,t,n,s,r,a,o,c,u,h,p,f,m,g,y,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,u,h,p,f,m,g,y,x)}set(e,t,n,s,r,a,o,c,u,h,p,f,m,g,y,x){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=s,_[1]=r,_[5]=a,_[9]=o,_[13]=c,_[2]=u,_[6]=h,_[10]=p,_[14]=f,_[3]=m,_[7]=g,_[11]=y,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qo().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/va.setFromMatrixColumn(e,0).length(),r=1/va.setFromMatrixColumn(e,1).length(),a=1/va.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),u=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let f=a*h,m=a*p,g=o*h,y=o*p;t[0]=c*h,t[4]=-c*p,t[8]=u,t[1]=m+g*u,t[5]=f-y*u,t[9]=-o*c,t[2]=y-f*u,t[6]=g+m*u,t[10]=a*c}else if(e.order==="YXZ"){let f=c*h,m=c*p,g=u*h,y=u*p;t[0]=f+y*o,t[4]=g*o-m,t[8]=a*u,t[1]=a*p,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=y+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*h,m=c*p,g=u*h,y=u*p;t[0]=f-y*o,t[4]=-a*p,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=y-f*o,t[2]=-a*u,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*h,m=a*p,g=o*h,y=o*p;t[0]=c*h,t[4]=g*u-m,t[8]=f*u+y,t[1]=c*p,t[5]=y*u+f,t[9]=m*u-g,t[2]=-u,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,m=a*u,g=o*c,y=o*u;t[0]=c*h,t[4]=y-f*p,t[8]=g*p+m,t[1]=p,t[5]=a*h,t[9]=-o*h,t[2]=-u*h,t[6]=m*p+g,t[10]=f-y*p}else if(e.order==="XZY"){let f=a*c,m=a*u,g=o*c,y=o*u;t[0]=c*h,t[4]=-p,t[8]=u*h,t[1]=f*p+y,t[5]=a*h,t[9]=m*p-g,t[2]=g*p-m,t[6]=o*h,t[10]=y*p+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ib,e,Lb)}lookAt(e,t,n){let s=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Hs.crossVectors(n,Ln),Hs.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Hs.crossVectors(n,Ln)),Hs.normalize(),Uc.crossVectors(Ln,Hs),s[0]=Hs.x,s[4]=Uc.x,s[8]=Ln.x,s[1]=Hs.y,s[5]=Uc.y,s[9]=Ln.y,s[2]=Hs.z,s[6]=Uc.z,s[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],h=n[1],p=n[5],f=n[9],m=n[13],g=n[2],y=n[6],x=n[10],_=n[14],b=n[3],A=n[7],S=n[11],R=n[15],C=s[0],v=s[4],w=s[8],L=s[12],I=s[1],F=s[5],G=s[9],j=s[13],U=s[2],Y=s[6],ie=s[10],O=s[14],Z=s[3],V=s[7],Q=s[11],ne=s[15];return r[0]=a*C+o*I+c*U+u*Z,r[4]=a*v+o*F+c*Y+u*V,r[8]=a*w+o*G+c*ie+u*Q,r[12]=a*L+o*j+c*O+u*ne,r[1]=h*C+p*I+f*U+m*Z,r[5]=h*v+p*F+f*Y+m*V,r[9]=h*w+p*G+f*ie+m*Q,r[13]=h*L+p*j+f*O+m*ne,r[2]=g*C+y*I+x*U+_*Z,r[6]=g*v+y*F+x*Y+_*V,r[10]=g*w+y*G+x*ie+_*Q,r[14]=g*L+y*j+x*O+_*ne,r[3]=b*C+A*I+S*U+R*Z,r[7]=b*v+A*F+S*Y+R*V,r[11]=b*w+A*G+S*ie+R*Q,r[15]=b*L+A*j+S*O+R*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],u=e[13],h=e[2],p=e[6],f=e[10],m=e[14],g=e[3],y=e[7],x=e[11],_=e[15],b=c*m-u*f,A=o*m-u*p,S=o*f-c*p,R=a*m-u*h,C=a*f-c*h,v=a*p-o*h;return t*(y*b-x*A+_*S)-n*(g*b-x*R+_*C)+s*(g*A-y*R+_*v)-r*(g*S-y*C+x*v)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],u=e[6],h=e[10];return t*(a*h-o*u)-n*(r*h-o*c)+s*(r*u-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],p=e[9],f=e[10],m=e[11],g=e[12],y=e[13],x=e[14],_=e[15],b=t*o-n*a,A=t*c-s*a,S=t*u-r*a,R=n*c-s*o,C=n*u-r*o,v=s*u-r*c,w=h*y-p*g,L=h*x-f*g,I=h*_-m*g,F=p*x-f*y,G=p*_-m*y,j=f*_-m*x,U=b*j-A*G+S*F+R*I-C*L+v*w;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Y=1/U;return e[0]=(o*j-c*G+u*F)*Y,e[1]=(s*G-n*j-r*F)*Y,e[2]=(y*v-x*C+_*R)*Y,e[3]=(f*C-p*v-m*R)*Y,e[4]=(c*I-a*j-u*L)*Y,e[5]=(t*j-s*I+r*L)*Y,e[6]=(x*S-g*v-_*A)*Y,e[7]=(h*v-f*S+m*A)*Y,e[8]=(a*G-o*I+u*w)*Y,e[9]=(n*I-t*G-r*w)*Y,e[10]=(g*C-y*S+_*b)*Y,e[11]=(p*S-h*C-m*b)*Y,e[12]=(o*L-a*F-c*w)*Y,e[13]=(t*F-n*L+s*w)*Y,e[14]=(y*A-g*R-x*b)*Y,e[15]=(h*R-p*A+f*b)*Y,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,u=r*a,h=r*o;return this.set(u*a+n,u*o-s*c,u*c+s*o,0,u*o+s*c,h*o+n,h*c-s*a,0,u*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,u=r+r,h=a+a,p=o+o,f=r*u,m=r*h,g=r*p,y=a*h,x=a*p,_=o*p,b=c*u,A=c*h,S=c*p,R=n.x,C=n.y,v=n.z;return s[0]=(1-(y+_))*R,s[1]=(m+S)*R,s[2]=(g-A)*R,s[3]=0,s[4]=(m-S)*C,s[5]=(1-(f+_))*C,s[6]=(x+b)*C,s[7]=0,s[8]=(g+A)*v,s[9]=(x-b)*v,s[10]=(1-(f+y))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=va.set(s[0],s[1],s[2]).length(),o=va.set(s[4],s[5],s[6]).length(),c=va.set(s[8],s[9],s[10]).length();r<0&&(a=-a),pi.copy(this);let u=1/a,h=1/o,p=1/c;return pi.elements[0]*=u,pi.elements[1]*=u,pi.elements[2]*=u,pi.elements[4]*=h,pi.elements[5]*=h,pi.elements[6]*=h,pi.elements[8]*=p,pi.elements[9]*=p,pi.elements[10]*=p,t.setFromRotationMatrix(pi),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=Qn,c=!1){let u=this.elements,h=2*r/(t-e),p=2*r/(n-s),f=(t+e)/(t-e),m=(n+s)/(n-s),g,y;if(c)g=r/(a-r),y=a*r/(a-r);else if(o===Qn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===ka)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=p,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Qn,c=!1){let u=this.elements,h=2/(t-e),p=2/(n-s),f=-(t+e)/(t-e),m=-(n+s)/(n-s),g,y;if(c)g=1/(a-r),y=a/(a-r);else if(o===Qn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===ka)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=p,u[9]=0,u[13]=m,u[2]=0,u[6]=0,u[10]=g,u[14]=y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};l(qo,"Matrix4"),qo.prototype.isMatrix4=!0;var _t=qo,va=new X,pi=new _t,Ib=new X(0,0,0),Lb=new X(1,1,1),Hs=new X,Uc=new X,Ln=new X,Bg=new _t,kg=new yn,Vu=class Vu{constructor(e=0,t=0,n=0,s=Vu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],u=s[5],h=s[9],p=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ot(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bg,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kg.setFromEuler(this),this.setFromQuaternion(kg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};l(Vu,"Euler");var Un=Vu;Un.DEFAULT_ORDER="XYZ";var up=class up{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};l(up,"Layers");var jo=up,Db=0,zg=new X,ya=new yn,fs=new _t,Fc=new X,Bo=new X,Nb=new X,Ub=new yn,Gg=new X(1,0,0),Vg=new X(0,1,0),Hg=new X(0,0,1),Wg={type:"added"},Fb={type:"removed"},ba={type:"childadded",child:null},tf={type:"childremoved",child:null},Fa=class Fa extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Db++}),this.uuid=kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fa.DEFAULT_UP.clone();let e=new X,t=new Un,n=new yn,s=new X(1,1,1);function r(){n.setFromEuler(t,!1)}l(r,"onRotationChange");function a(){t.setFromQuaternion(n,void 0,!1)}l(a,"onQuaternionChange"),t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new $e}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Fa.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fa.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ya.setFromAxisAngle(e,t),this.quaternion.multiply(ya),this}rotateOnWorldAxis(e,t){return ya.setFromAxisAngle(e,t),this.quaternion.premultiply(ya),this}rotateX(e){return this.rotateOnAxis(Gg,e)}rotateY(e){return this.rotateOnAxis(Vg,e)}rotateZ(e){return this.rotateOnAxis(Hg,e)}translateOnAxis(e,t){return zg.copy(e).applyQuaternion(this.quaternion),this.position.add(zg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gg,e)}translateY(e){return this.translateOnAxis(Vg,e)}translateZ(e){return this.translateOnAxis(Hg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fc.copy(e):Fc.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fs.lookAt(Bo,Fc,this.up):fs.lookAt(Fc,Bo,this.up),this.quaternion.setFromRotationMatrix(fs),s&&(fs.extractRotation(s.matrixWorld),ya.setFromRotationMatrix(fs),this.quaternion.premultiply(ya.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wg),ba.child=e,this.dispatchEvent(ba),ba.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fb),tf.child=e,this.dispatchEvent(tf),tf.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fs.multiply(e.parent.matrixWorld)),e.applyMatrix4(fs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wg),ba.child=e,this.dispatchEvent(ba),ba.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,e,Nb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,Ub,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(l(r,"serialize"),this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){let p=c[u];r(e.shapes,p)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),p=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let u in o){let h=o[u];delete h.metadata,c.push(h)}return c}l(a,"extractFromCache")}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};l(Fa,"Object3D");var nn=Fa;nn.DEFAULT_UP=new X(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hp=class hp extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}};l(hp,"Group");var tn=hp,Ob={type:"move"},dp=class dp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(let y of e.hand.values()){let x=t.getJointPose(y,n),_=this._getHandJoint(u,y);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}let h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],f=h.position.distanceTo(p.position),m=.02,g=.005;u.inputState.pinching&&f>m+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ob)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new tn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};l(dp,"WebXRController");var Va=dp,Wx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ws={h:0,s:0,l:0},Oc={h:0,s:0,l:0};function nf(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}l(nf,"hue2rgb");var fp=class fp{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=at.workingColorSpace){if(e=Tb(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=nf(a,r,e+1/3),this.g=nf(a,r,e),this.b=nf(a,r,e-1/3)}return at.colorSpaceToWorking(this,s),this}setStyle(e,t=kt){function n(r){r!==void 0&&parseFloat(r)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}l(n,"handleAlpha");let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){let n=Wx[e.toLowerCase()];return n!==void 0?this.setHex(n,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}copyLinearToSRGB(e){return this.r=Oa(e.r),this.g=Oa(e.g),this.b=Oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return at.workingToColorSpace(cn.copy(this),e),Math.round(ot(cn.r*255,0,255))*65536+Math.round(ot(cn.g*255,0,255))*256+Math.round(ot(cn.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(cn.copy(this),t);let n=cn.r,s=cn.g,r=cn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,u,h=(o+a)/2;if(o===a)c=0,u=0;else{let p=a-o;switch(u=h<=.5?p/(a+o):p/(2-a-o),a){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=kt){at.workingToColorSpace(cn.copy(this),e);let t=cn.r,n=cn.g,s=cn.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ws),this.setHSL(Ws.h+e,Ws.s+t,Ws.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ws),e.getHSL(Oc);let n=Jd(Ws.h,Oc.h,t),s=Jd(Ws.s,Oc.s,t),r=Jd(Ws.l,Oc.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};l(fp,"Color");var ke=fp,cn=new ke;ke.NAMES=Wx;var Hu=class Hu{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ke(e),this.near=t,this.far=n}clone(){return new Hu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}};l(Hu,"Fog");var Qo=Hu,pp=class pp extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}};l(pp,"Scene");var el=pp,mi=new X,ps=new X,sf=new X,ms=new X,Ma=new X,Sa=new X,Xg=new X,rf=new X,af=new X,of=new X,lf=new Rt,cf=new Rt,uf=new Rt,$s=class $s{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),mi.subVectors(e,t),s.cross(mi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){mi.subVectors(s,t),ps.subVectors(n,t),sf.subVectors(e,t);let a=mi.dot(mi),o=mi.dot(ps),c=mi.dot(sf),u=ps.dot(ps),h=ps.dot(sf),p=a*u-o*o;if(p===0)return r.set(0,0,0),null;let f=1/p,m=(u*c-o*h)*f,g=(a*h-o*c)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ms)===null?!1:ms.x>=0&&ms.y>=0&&ms.x+ms.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,ms)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ms.x),c.addScaledVector(a,ms.y),c.addScaledVector(o,ms.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return lf.setScalar(0),cf.setScalar(0),uf.setScalar(0),lf.fromBufferAttribute(e,t),cf.fromBufferAttribute(e,n),uf.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(lf,r.x),a.addScaledVector(cf,r.y),a.addScaledVector(uf,r.z),a}static isFrontFacing(e,t,n,s){return mi.subVectors(n,t),ps.subVectors(e,t),mi.cross(ps).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),ps.subVectors(this.a,this.b),mi.cross(ps).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return $s.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return $s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ma.subVectors(s,n),Sa.subVectors(r,n),rf.subVectors(e,n);let c=Ma.dot(rf),u=Sa.dot(rf);if(c<=0&&u<=0)return t.copy(n);af.subVectors(e,s);let h=Ma.dot(af),p=Sa.dot(af);if(h>=0&&p<=h)return t.copy(s);let f=c*p-h*u;if(f<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(Ma,a);of.subVectors(e,r);let m=Ma.dot(of),g=Sa.dot(of);if(g>=0&&m<=g)return t.copy(r);let y=m*u-c*g;if(y<=0&&u>=0&&g<=0)return o=u/(u-g),t.copy(n).addScaledVector(Sa,o);let x=h*g-m*p;if(x<=0&&p-h>=0&&m-g>=0)return Xg.subVectors(r,s),o=(p-h)/(p-h+(m-g)),t.copy(s).addScaledVector(Xg,o);let _=1/(x+y+f);return a=y*_,o=f*_,t.copy(n).addScaledVector(Ma,a).addScaledVector(Sa,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};l($s,"Triangle");var _s=$s,mp=class mp{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,gi):gi.fromBufferAttribute(r,a),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bc.copy(n.boundingBox)),Bc.applyMatrix4(e.matrixWorld),this.union(Bc)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),kc.subVectors(this.max,ko),wa.subVectors(e.a,ko),Ea.subVectors(e.b,ko),Aa.subVectors(e.c,ko),Xs.subVectors(Ea,wa),qs.subVectors(Aa,Ea),Pr.subVectors(wa,Aa);let t=[0,-Xs.z,Xs.y,0,-qs.z,qs.y,0,-Pr.z,Pr.y,Xs.z,0,-Xs.x,qs.z,0,-qs.x,Pr.z,0,-Pr.x,-Xs.y,Xs.x,0,-qs.y,qs.x,0,-Pr.y,Pr.x,0];return!hf(t,wa,Ea,Aa,kc)||(t=[1,0,0,0,1,0,0,0,1],!hf(t,wa,Ea,Aa,kc))?!1:(zc.crossVectors(Xs,qs),t=[zc.x,zc.y,zc.z],hf(t,wa,Ea,Aa,kc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}};l(mp,"Box3");var Js=mp,gs=[new X,new X,new X,new X,new X,new X,new X,new X],gi=new X,Bc=new Js,wa=new X,Ea=new X,Aa=new X,Xs=new X,qs=new X,Pr=new X,ko=new X,kc=new X,zc=new X,Ir=new X;function hf(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ir.fromArray(i,r);let o=s.x*Math.abs(Ir.x)+s.y*Math.abs(Ir.y)+s.z*Math.abs(Ir.z),c=e.dot(Ir),u=t.dot(Ir),h=n.dot(Ir);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}l(hf,"satForAxes");var vs=Bb();function Bb(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){let u=c-127;u<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):u<-14?(n[c]=1024>>-u-14,n[c|256]=1024>>-u-14|32768,s[c]=-u-1,s[c|256]=-u-1):u<=15?(n[c]=u+15<<10,n[c|256]=u+15<<10|32768,s[c]=13,s[c|256]=13):u<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let u=c<<13,h=0;for(;(u&8388608)===0;)u<<=1,h-=8388608;u&=-8388609,h+=947912704,r[c]=u|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}l(Bb,"_generateTables");function kb(i){Math.abs(i)>65504&&qe("DataUtils.toHalfFloat(): Value out of range."),i=ot(i,-65504,65504),vs.floatView[0]=i;let e=vs.uint32View[0],t=e>>23&511;return vs.baseTable[t]+((e&8388607)>>vs.shiftTable[t])}l(kb,"toHalfFloat");function zb(i){let e=i>>10;return vs.uint32View[0]=vs.mantissaTable[vs.offsetTable[e]+(i&1023)]+vs.exponentTable[e],vs.floatView[0]}l(zb,"fromHalfFloat");var gp=class gp{static toHalfFloat(e){return kb(e)}static fromHalfFloat(e){return zb(e)}};l(gp,"DataUtils");var ki=gp,Bt=new X,Gc=new We,Gb=0,xp=class xp extends Bi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gb++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Jf,this.updateRanges=[],this.gpuType=vi,this.version=0,this._normalizationScale=e!==void 0?Hh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gc.fromBufferAttribute(this,t),Gc.applyMatrix3(e),this.setXY(t,Gc.x,Gc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Vx(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Hx(e,this.array)}};l(xp,"BufferAttribute");var Mt=xp;var _p=class _p extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};l(_p,"Uint16BufferAttribute");var tl=_p;var vp=class vp extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};l(vp,"Uint32BufferAttribute");var nl=vp;var yp=class yp extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}};l(yp,"Float32BufferAttribute");var At=yp,Vb=new Js,zo=new X,df=new X,bp=class bp{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Vb.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zo.subVectors(e,this.center);let t=zo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(zo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(df.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zo.copy(e.center).add(df)),this.expandByPoint(zo.copy(e.center).sub(df))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};l(bp,"Sphere");var Ha=bp,Hb=0,Kn=new _t,ff=new nn,Ta=new X,Dn=new Js,Go=new Js,Zt=new X,Wu=class Wu extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hb++}),this.uuid=kr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Eb(e)?nl:tl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $e().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,n){return Kn.makeTranslation(e,t,n),this.applyMatrix4(Kn),this}scale(e,t,n){return Kn.makeScale(e,t,n),this.applyMatrix4(Kn),this}lookAt(e){return ff.lookAt(e),ff.updateMatrix(),this.applyMatrix4(ff.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ta).negate(),this.translate(Ta.x,Ta.y,Ta.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new At(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Js);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ha);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){let n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Go.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(Dn.min,Go.min),Dn.expandByPoint(Zt),Zt.addVectors(Dn.max,Go.max),Dn.expandByPoint(Zt)):(Dn.expandByPoint(Go.min),Dn.expandByPoint(Go.max))}Dn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Zt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Zt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Zt.fromBufferAttribute(o,u),c&&(Ta.fromBufferAttribute(e,u),Zt.add(Ta)),s=Math.max(s,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Mt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],u=new Uint8Array(n.count);for(let L=0;L<n.count;L++)o[L]=new X,c[L]=new X;let h=new X,p=new X,f=new X,m=new We,g=new We,y=new We,x=new X,_=new X;function b(L,I,F){u[L]=u[I]=u[F]=1,h.fromBufferAttribute(n,L),p.fromBufferAttribute(n,I),f.fromBufferAttribute(n,F),m.fromBufferAttribute(r,L),g.fromBufferAttribute(r,I),y.fromBufferAttribute(r,F),p.sub(h),f.sub(h),g.sub(m),y.sub(m);let G=1/(g.x*y.y-y.x*g.y);isFinite(G)&&(x.copy(p).multiplyScalar(y.y).addScaledVector(f,-g.y).multiplyScalar(G),_.copy(f).multiplyScalar(g.x).addScaledVector(p,-y.x).multiplyScalar(G),o[L].add(x),o[I].add(x),o[F].add(x),c[L].add(_),c[I].add(_),c[F].add(_))}l(b,"handleTriangle");let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let L=0,I=A.length;L<I;++L){let F=A[L],G=F.start,j=F.count;for(let U=G,Y=G+j;U<Y;U+=3)b(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let S=new X,R=new X,C=new X,v=new X;function w(L){C.fromBufferAttribute(s,L),v.copy(C);let I=o[L];S.copy(I),S.sub(C.multiplyScalar(C.dot(I))).normalize(),R.crossVectors(v,I);let G=R.dot(c[L])<0?-1:1;a.setXYZW(L,S.x,S.y,S.z,G)}l(w,"handleVertex");for(let L=0,I=n.count;L<I;++L)u[L]&&w(L);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let s=new X,r=new X,a=new X,o=new X,c=new X,u=new X,h=new X,p=new X;if(e)for(let f=0,m=e.count;f<m;f+=3){let g=e.getX(f+0),y=e.getX(f+1),x=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,x),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,x),o.add(h),c.add(h),u.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(x,u.x,u.y,u.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(o,c){let u=o.array,h=o.itemSize,p=o.normalized,f=new u.constructor(c.length*h),m=0,g=0;for(let y=0,x=c.length;y<x;y++){o.isInterleavedBufferAttribute?m=c[y]*o.data.stride+o.offset:m=c[y]*h;for(let _=0;_<h;_++)f[g++]=u[m++]}return new Mt(f,h,p)}if(l(e,"convertBufferAttribute"),this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Wu,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],u=e(c,n);t.setAttribute(o,u)}let r=this.morphAttributes;for(let o in r){let c=[],u=r[o];for(let h=0,p=u.length;h<p;h++){let f=u[h],m=e(f,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let u=n[c];e.data.attributes[c]=u.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let u=this.morphAttributes[c],h=[];for(let p=0,f=u.length;p<f;p++){let m=u[p];h.push(m.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let u in s){let h=s[u];this.setAttribute(u,h.clone(t))}let r=e.morphAttributes;for(let u in r){let h=[],p=r[u];for(let f=0,m=p.length;f<m;f++)h.push(p[f].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let u=0,h=a.length;u<h;u++){let p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};l(Wu,"BufferGeometry");var Ut=Wu,Mp=class Mp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Jf,this.updateRanges=[],this.version=0,this.uuid=kr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=qg(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=qg(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};l(Mp,"InterleavedBuffer");var il=Mp;function qg(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=kr()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}l(qg,"getArrayKey");var _n=new X,Xu=class Xu{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Hh(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ko("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Xu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ko("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Vx(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Hx(e,this.data.array)}};l(Xu,"InterleavedBufferAttribute");var Wa=Xu,pf=new X,Wb=new X,Xb=new $e,Sp=class Sp{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=pf.subVectors(n,t).cross(Wb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(pf),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Xb.getNormalMatrix(e),s=this.coplanarPoint(pf).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}};l(Sp,"Plane");var An=Sp,qb=0,wp=class wp extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qb++}),this.uuid=kr(),this.name="",this.type="Material",this.blending=$a,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pf,this.blendDst=If,this.blendEquation=Fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Ba,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ix,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ru,this.stencilZFail=ru,this.stencilZPass=ru,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(l(s,"extractFromCache"),t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new An().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new We().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new We().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};l(wp,"Material");var Ms=wp,Ep=class Ep extends Ms{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};l(Ep,"SpriteMaterial");var Ks=Ep,Ca,Vo=new X,Ra=new X,Pa=new X,Ia=new We,Ho=new We,Xx=new _t,Vc=new X,Wo=new X,Hc=new X,Yg=new We,mf=new We,$g=new We,Ap=class Ap extends nn{constructor(e=new Ks){if(super(),this.isSprite=!0,this.type="Sprite",Ca===void 0){Ca=new Ut;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new il(t,5);Ca.setIndex([0,1,2,0,2,3]),Ca.setAttribute("position",new Wa(n,3,0,!1)),Ca.setAttribute("uv",new Wa(n,2,3,!1))}this.geometry=Ca,this.material=e,this.center=new We(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ye('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ra.setFromMatrixScale(this.matrixWorld),Xx.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Pa.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ra.multiplyScalar(-Pa.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Wc(Vc.set(-.5,-.5,0),Pa,a,Ra,s,r),Wc(Wo.set(.5,-.5,0),Pa,a,Ra,s,r),Wc(Hc.set(.5,.5,0),Pa,a,Ra,s,r),Yg.set(0,0),mf.set(1,0),$g.set(1,1);let o=e.ray.intersectTriangle(Vc,Wo,Hc,!1,Vo);if(o===null&&(Wc(Wo.set(-.5,.5,0),Pa,a,Ra,s,r),mf.set(0,1),o=e.ray.intersectTriangle(Vc,Hc,Wo,!1,Vo),o===null))return;let c=e.ray.origin.distanceTo(Vo);c<e.near||c>e.far||t.push({distance:c,point:Vo.clone(),uv:_s.getInterpolation(Vo,Vc,Wo,Hc,Yg,mf,$g,new We),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};l(Ap,"Sprite");var Ss=Ap;function Wc(i,e,t,n,s,r){Ia.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ho.x=r*Ia.x-s*Ia.y,Ho.y=s*Ia.x+r*Ia.y):Ho.copy(Ia),i.copy(e),i.x+=Ho.x,i.y+=Ho.y,i.applyMatrix4(Xx)}l(Wc,"transformVertex");var xs=new X,gf=new X,Xc=new X,qc=new X,Tp=class Tp{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=xs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xs.copy(this.origin).addScaledVector(this.direction,t),xs.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){gf.copy(e).add(t).multiplyScalar(.5),Xc.copy(t).sub(e).normalize(),qc.copy(this.origin).sub(gf);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Xc),o=qc.dot(this.direction),c=-qc.dot(Xc),u=qc.lengthSq(),h=Math.abs(1-a*a),p,f,m,g;if(h>0)if(p=a*c-o,f=a*o-c,g=r*h,p>=0)if(f>=-g)if(f<=g){let y=1/h;p*=y,f*=y,m=p*(p+a*f+2*o)+f*(a*p+f+2*c)+u}else f=r,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*c)+u;else f=-r,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*c)+u;else f<=-g?(p=Math.max(0,-(-a*r+o)),f=p>0?-r:Math.min(Math.max(-r,-c),r),m=-p*p+f*(f+2*c)+u):f<=g?(p=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+u):(p=Math.max(0,-(a*r+o)),f=p>0?r:Math.min(Math.max(-r,-c),r),m=-p*p+f*(f+2*c)+u);else f=a>0?-r:r,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(gf).addScaledVector(Xc,f),m}intersectSphere(e,t){if(e.radius<0)return null;xs.subVectors(e.center,this.origin);let n=xs.dot(this.direction),s=xs.dot(xs)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,s=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,s=(e.min.x-f.x)*u),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(e.min.z-f.z)*p,c=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,c=(e.min.z-f.z)*p),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,xs)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,u=o.y,h=o.z,p=e.x-a.x,f=e.y-a.y,m=e.z-a.z,g=t.x-a.x,y=t.y-a.y,x=t.z-a.z,_=n.x-a.x,b=n.y-a.y,A=n.z-a.z,S=Math.abs(c),R=Math.abs(u),C=Math.abs(h),v,w,L,I,F,G,j,U,Y,ie,O,Z;if(S>=R&&S>=C?(L=c,G=p,Y=g,Z=_,c>=0?(v=u,w=h,I=f,F=m,j=y,U=x,ie=b,O=A):(v=h,w=u,I=m,F=f,j=x,U=y,ie=A,O=b)):R>=C?(L=u,G=f,Y=y,Z=b,u>=0?(v=h,w=c,I=m,F=p,j=x,U=g,ie=A,O=_):(v=c,w=h,I=p,F=m,j=g,U=x,ie=_,O=A)):(L=h,G=m,Y=x,Z=A,h>=0?(v=c,w=u,I=p,F=f,j=g,U=y,ie=_,O=b):(v=u,w=c,I=f,F=p,j=y,U=g,ie=b,O=_)),L===0)return null;let V=v/L,Q=w/L,ne=1/L,de=I-V*G,ge=F-Q*G,ee=j-V*Y,pe=U-Q*Y,ue=ie-V*Z,H=O-Q*Z,J=ue*pe-H*ee,se=de*H-ge*ue,xe=ee*ge-pe*de;if(s){if(J<0||se<0||xe<0)return null}else if((J<0||se<0||xe<0)&&(J>0||se>0||xe>0))return null;let he=J+se+xe;if(he===0)return null;let Re=ne*(J*G+se*Y+xe*Z);return(he>0?Re<0:Re>0)?null:this.at(Re/he,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};l(Tp,"Ray");var vu=Tp,Cp=class Cp extends Ms{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Lf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};l(Cp,"MeshBasicMaterial");var yu=Cp,Zg=new _t,Lr=new vu,Yc=new Ha,Jg=new X,$c=new X,Zc=new X,Jc=new X,xf=new X,Kc=new X,Kg=new X,jc=new X,Rp=class Rp extends nn{constructor(e=new Ut,t=new yu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Kc.set(0,0,0);for(let c=0,u=r.length;c<u;c++){let h=o[c],p=r[c];h!==0&&(xf.fromBufferAttribute(p,e),a?Kc.addScaledVector(xf,h):Kc.addScaledVector(xf.sub(t),h))}t.add(Kc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yc.copy(n.boundingSphere),Yc.applyMatrix4(r),Lr.copy(e.ray).recast(e.near),!(Yc.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(Yc,Jg)===null||Lr.origin.distanceToSquared(Jg)>(e.far-e.near)**2))&&(Zg.copy(r).invert(),Lr.copy(e.ray).applyMatrix4(Zg),!(n.boundingBox!==null&&Lr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Lr)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){let x=f[g],_=a[x.materialIndex],b=Math.max(x.start,m.start),A=Math.min(o.count,Math.min(x.start+x.count,m.start+m.count));for(let S=b,R=A;S<R;S+=3){let C=o.getX(S),v=o.getX(S+1),w=o.getX(S+2);s=Qc(this,_,e,n,u,h,p,C,v,w),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let x=g,_=y;x<_;x+=3){let b=o.getX(x),A=o.getX(x+1),S=o.getX(x+2);s=Qc(this,a,e,n,u,h,p,b,A,S),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){let x=f[g],_=a[x.materialIndex],b=Math.max(x.start,m.start),A=Math.min(c.count,Math.min(x.start+x.count,m.start+m.count));for(let S=b,R=A;S<R;S+=3){let C=S,v=S+1,w=S+2;s=Qc(this,_,e,n,u,h,p,C,v,w),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let x=g,_=y;x<_;x+=3){let b=x,A=x+1,S=x+2;s=Qc(this,a,e,n,u,h,p,b,A,S),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}};l(Rp,"Mesh");var vt=Rp;function Yb(i,e,t,n,s,r,a,o){let c;if(e.side===Sn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===rr,o),c===null)return null;jc.copy(o),jc.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(jc);return u<t.near||u>t.far?null:{distance:u,point:jc.clone(),object:i}}l(Yb,"checkIntersection$1");function Qc(i,e,t,n,s,r,a,o,c,u){i.getVertexPosition(o,$c),i.getVertexPosition(c,Zc),i.getVertexPosition(u,Jc);let h=Yb(i,e,t,n,$c,Zc,Jc,Kg);if(h){let p=new X;_s.getBarycoord(Kg,$c,Zc,Jc,p),s&&(h.uv=_s.getInterpolatedAttribute(s,o,c,u,p,new We)),r&&(h.uv1=_s.getInterpolatedAttribute(r,o,c,u,p,new We)),a&&(h.normal=_s.getInterpolatedAttribute(a,o,c,u,p,new X),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:u,normal:new X,materialIndex:0};_s.getNormal($c,Zc,Jc,f.normal),h.face=f,h.barycoord=p}return h}l(Qc,"checkGeometryIntersection");var Pp=class Pp extends bn{constructor(e=null,t=1,n=1,s,r,a,o,c,u=zt,h=zt,p,f){super(null,a,o,c,u,h,s,r,p,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};l(Pp,"DataTexture");var Xa=Pp;var Ip=class Ip extends Mt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};l(Ip,"InstancedBufferAttribute");var ws=Ip;var Dr=new Ha,$b=new We(.5,.5),eu=new X,Lp=class Lp{constructor(e=new An,t=new An,n=new An,s=new An,r=new An,a=new An){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],u=r[3],h=r[4],p=r[5],f=r[6],m=r[7],g=r[8],y=r[9],x=r[10],_=r[11],b=r[12],A=r[13],S=r[14],R=r[15];if(s[0].setComponents(u-a,m-h,_-g,R-b).normalize(),s[1].setComponents(u+a,m+h,_+g,R+b).normalize(),s[2].setComponents(u+o,m+p,_+y,R+A).normalize(),s[3].setComponents(u-o,m-p,_-y,R-A).normalize(),n)s[4].setComponents(c,f,x,S).normalize(),s[5].setComponents(u-c,m-f,_-x,R-S).normalize();else if(s[4].setComponents(u-c,m-f,_-x,R-S).normalize(),t===Qn)s[5].setComponents(u+c,m+f,_+x,R+S).normalize();else if(t===ka)s[5].setComponents(c,f,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Dr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(e){Dr.center.set(0,0,0);let t=$b.distanceTo(e.center);return Dr.radius=.7071067811865476+t,Dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(eu.x=s.normal.x>0?e.max.x:e.min.x,eu.y=s.normal.y>0?e.max.y:e.min.y,eu.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(eu)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};l(Lp,"Frustum");var js=Lp,jg=new _t,qu=class qu{constructor(){this.coordinateSystem=Qn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];jg.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new js),n[s].setFromProjectionMatrix(jg,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new js),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new qu().copy(this)}};l(qu,"FrustumArray");var bu=qu;var Dp=class Dp extends bn{constructor(e=[],t=Or,n,s,r,a,o,c,u,h){super(e,t,n,s,r,a,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};l(Dp,"CubeTexture");var sl=Dp,Np=class Np extends bn{constructor(e,t,n,s,r,a,o,c,u){super(e,t,n,s,r,a,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};l(Np,"CanvasTexture");var Qs=Np;var Up=class Up extends bn{constructor(e,t,n=_i,s,r,a,o=zt,c=zt,u,h=bs,p=1){if(h!==bs&&h!==As)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:p};super(f,s,r,a,o,c,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ga(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}};l(Up,"DepthTexture");var Es=Up,Fp=class Fp extends Es{constructor(e,t=_i,n=Or,s,r,a=zt,o=zt,c,u=bs){let h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}};l(Fp,"CubeDepthTexture");var rl=Fp,Op=class Op extends bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};l(Op,"ExternalTexture");var al=Op,Yu=class Yu extends Ut{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],u=[],h=[],p=[],f=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new At(u,3)),this.setAttribute("normal",new At(h,3)),this.setAttribute("uv",new At(p,2));function g(y,x,_,b,A,S,R,C,v,w,L){let I=S/v,F=R/w,G=S/2,j=R/2,U=C/2,Y=v+1,ie=w+1,O=0,Z=0,V=new X;for(let Q=0;Q<ie;Q++){let ne=Q*F-j;for(let de=0;de<Y;de++){let ge=de*I-G;V[y]=ge*b,V[x]=ne*A,V[_]=U,u.push(V.x,V.y,V.z),V[y]=0,V[x]=0,V[_]=C>0?1:-1,h.push(V.x,V.y,V.z),p.push(de/v),p.push(1-Q/w),O+=1}}for(let Q=0;Q<w;Q++)for(let ne=0;ne<v;ne++){let de=f+ne+Y*Q,ge=f+ne+Y*(Q+1),ee=f+(ne+1)+Y*(Q+1),pe=f+(ne+1)+Y*Q;c.push(de,ge,pe),c.push(ge,ee,pe),Z+=6}o.addGroup(m,Z,L),m+=Z,f+=O}l(g,"buildPlane")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};l(Yu,"BoxGeometry");var zi=Yu;var $u=class $u extends Ut{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let u=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],f=[],m=[],g=0,y=[],x=n/2,_=0;b(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new At(p,3)),this.setAttribute("normal",new At(f,3)),this.setAttribute("uv",new At(m,2));function b(){let S=new X,R=new X,C=0,v=(t-e)/n;for(let w=0;w<=r;w++){let L=[],I=w/r,F=I*(t-e)+e;for(let G=0;G<=s;G++){let j=G/s,U=j*c+o,Y=Math.sin(U),ie=Math.cos(U);R.x=F*Y,R.y=-I*n+x,R.z=F*ie,p.push(R.x,R.y,R.z),S.set(Y,v,ie).normalize(),f.push(S.x,S.y,S.z),m.push(j,1-I),L.push(g++)}y.push(L)}for(let w=0;w<s;w++)for(let L=0;L<r;L++){let I=y[L][w],F=y[L+1][w],G=y[L+1][w+1],j=y[L][w+1];(e>0||L!==0)&&(h.push(I,F,j),C+=3),(t>0||L!==r-1)&&(h.push(F,G,j),C+=3)}u.addGroup(_,C,0),_+=C}l(b,"generateTorso");function A(S){let R=g,C=new We,v=new X,w=0,L=S===!0?e:t,I=S===!0?1:-1;for(let G=1;G<=s;G++)p.push(0,x*I,0),f.push(0,I,0),m.push(.5,.5),g++;let F=g;for(let G=0;G<=s;G++){let U=G/s*c+o,Y=Math.cos(U),ie=Math.sin(U);v.x=L*ie,v.y=x*I,v.z=L*Y,p.push(v.x,v.y,v.z),f.push(0,I,0),C.x=Y*.5+.5,C.y=ie*.5*I+.5,m.push(C.x,C.y),g++}for(let G=0;G<s;G++){let j=R+G,U=F+G;S===!0?h.push(U,U+1,j):h.push(U+1,U,j),w+=3}u.addGroup(_,w,S===!0?1:2),_+=w}l(A,"generateCap")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $u(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};l($u,"CylinderGeometry");var Gi=$u,Zu=class Zu extends Gi{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Zu(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};l(Zu,"ConeGeometry");var Vi=Zu,Ju=class Ju extends Ut{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),u(n),h(),this.setAttribute("position",new At(r,3)),this.setAttribute("normal",new At(r.slice(),3)),this.setAttribute("uv",new At(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let A=new X,S=new X,R=new X;for(let C=0;C<t.length;C+=3)m(t[C+0],A),m(t[C+1],S),m(t[C+2],R),c(A,S,R,b)}l(o,"subdivide");function c(b,A,S,R){let C=R+1,v=[];for(let w=0;w<=C;w++){v[w]=[];let L=b.clone().lerp(S,w/C),I=A.clone().lerp(S,w/C),F=C-w;for(let G=0;G<=F;G++)G===0&&w===C?v[w][G]=L:v[w][G]=L.clone().lerp(I,G/F)}for(let w=0;w<C;w++)for(let L=0;L<2*(C-w)-1;L++){let I=Math.floor(L/2);L%2===0?(f(v[w][I+1]),f(v[w+1][I]),f(v[w][I])):(f(v[w][I+1]),f(v[w+1][I+1]),f(v[w+1][I]))}}l(c,"subdivideFace");function u(b){let A=new X;for(let S=0;S<r.length;S+=3)A.x=r[S+0],A.y=r[S+1],A.z=r[S+2],A.normalize().multiplyScalar(b),r[S+0]=A.x,r[S+1]=A.y,r[S+2]=A.z}l(u,"applyRadius");function h(){let b=new X;for(let A=0;A<r.length;A+=3){b.x=r[A+0],b.y=r[A+1],b.z=r[A+2];let S=x(b)/2/Math.PI+.5,R=_(b)/Math.PI+.5;a.push(S,1-R)}g(),p()}l(h,"generateUVs");function p(){for(let b=0;b<a.length;b+=6){let A=a[b+0],S=a[b+2],R=a[b+4],C=Math.max(A,S,R),v=Math.min(A,S,R);C>.9&&v<.1&&(A<.2&&(a[b+0]+=1),S<.2&&(a[b+2]+=1),R<.2&&(a[b+4]+=1))}}l(p,"correctSeam");function f(b){r.push(b.x,b.y,b.z)}l(f,"pushVertex");function m(b,A){let S=b*3;A.x=e[S+0],A.y=e[S+1],A.z=e[S+2]}l(m,"getVertexByIndex");function g(){let b=new X,A=new X,S=new X,R=new X,C=new We,v=new We,w=new We;for(let L=0,I=0;L<r.length;L+=9,I+=6){b.set(r[L+0],r[L+1],r[L+2]),A.set(r[L+3],r[L+4],r[L+5]),S.set(r[L+6],r[L+7],r[L+8]),C.set(a[I+0],a[I+1]),v.set(a[I+2],a[I+3]),w.set(a[I+4],a[I+5]),R.copy(b).add(A).add(S).divideScalar(3);let F=x(R);y(C,I+0,b,F),y(v,I+2,A,F),y(w,I+4,S,F)}}l(g,"correctUVs");function y(b,A,S,R){R<0&&b.x===1&&(a[A]=b.x-1),S.x===0&&S.z===0&&(a[A]=R/2/Math.PI+.5)}l(y,"correctUV");function x(b){return Math.atan2(b.z,-b.x)}l(x,"azimuth");function _(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}l(_,"inclination")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ju(e.vertices,e.indices,e.radius,e.detail)}};l(Ju,"PolyhedronGeometry");var Mu=Ju;var Ku=class Ku extends Mu{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ku(e.radius,e.detail)}};l(Ku,"IcosahedronGeometry");var ol=Ku;var ju=class ju extends Ut{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),u=o+1,h=c+1,p=e/o,f=t/c,m=[],g=[],y=[],x=[];for(let _=0;_<h;_++){let b=_*f-a;for(let A=0;A<u;A++){let S=A*p-r;g.push(S,-b,0),y.push(0,0,1),x.push(A/o),x.push(1-_/c)}}for(let _=0;_<c;_++)for(let b=0;b<o;b++){let A=b+u*_,S=b+u*(_+1),R=b+1+u*(_+1),C=b+1+u*_;m.push(A,S,C),m.push(S,R,C)}this.setIndex(m),this.setAttribute("position",new At(g,3)),this.setAttribute("normal",new At(y,3)),this.setAttribute("uv",new At(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ju(e.width,e.height,e.widthSegments,e.heightSegments)}};l(ju,"PlaneGeometry");var Hi=ju;var Qu=class Qu extends Ut{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),u=0,h=[],p=new X,f=new X,m=[],g=[],y=[],x=[];for(let _=0;_<=n;_++){let b=[],A=_/n,S=a+A*o,R=e*Math.cos(S),C=Math.sqrt(e*e-R*R),v=0;_===0&&a===0?v=.5/t:_===n&&c===Math.PI&&(v=-.5/t);for(let w=0;w<=t;w++){let L=w/t,I=s+L*r;p.x=-C*Math.cos(I),p.y=R,p.z=C*Math.sin(I),g.push(p.x,p.y,p.z),f.copy(p).normalize(),y.push(f.x,f.y,f.z),x.push(L+v,1-A),b.push(u++)}h.push(b)}for(let _=0;_<n;_++)for(let b=0;b<t;b++){let A=h[_][b+1],S=h[_][b],R=h[_+1][b],C=h[_+1][b+1];(_!==0||a>0)&&m.push(A,S,C),(_!==n-1||c<Math.PI)&&m.push(S,R,C)}this.setIndex(m),this.setAttribute("position",new At(g,3)),this.setAttribute("normal",new At(y,3)),this.setAttribute("uv",new At(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};l(Qu,"SphereGeometry");var er=Qu;var eh=class eh extends Ut{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],u=[],h=[],p=[],f=new X,m=new X,g=new X;for(let y=0;y<=n;y++){let x=a+y/n*o;for(let _=0;_<=s;_++){let b=_/s*r;m.x=(e+t*Math.cos(x))*Math.cos(b),m.y=(e+t*Math.cos(x))*Math.sin(b),m.z=t*Math.sin(x),u.push(m.x,m.y,m.z),f.x=e*Math.cos(b),f.y=e*Math.sin(b),g.subVectors(m,f).normalize(),h.push(g.x,g.y,g.z),p.push(_/s),p.push(y/n)}}for(let y=1;y<=n;y++)for(let x=1;x<=s;x++){let _=(s+1)*y+x-1,b=(s+1)*(y-1)+x-1,A=(s+1)*(y-1)+x,S=(s+1)*y+x;c.push(_,b,S),c.push(b,A,S)}this.setIndex(c),this.setAttribute("position",new At(u,3)),this.setAttribute("normal",new At(h,3)),this.setAttribute("uv",new At(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};l(eh,"TorusGeometry");var tr=eh;function zr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Qg(s))s.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Qg(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}l(zr,"cloneUniforms");function hn(i){let e={};for(let t=0;t<i.length;t++){let n=zr(i[t]);for(let s in n)e[s]=n[s]}return e}l(hn,"mergeUniforms");function Qg(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}l(Qg,"isThreeObject");function Zb(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}l(Zb,"cloneUniformsGroups");function jf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}l(jf,"getUnlitUniformColorSpace");var Gr={clone:zr,merge:hn},Jb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bp=class Bp extends Ms{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jb,this.fragmentShader=Kb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zr(e.uniforms),this.uniformsGroups=Zb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ke().setHex(s.value);break;case"v2":this.uniforms[n].value=new We().fromArray(s.value);break;case"v3":this.uniforms[n].value=new X().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Rt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new $e().fromArray(s.value);break;case"m4":this.uniforms[n].value=new _t().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}};l(Bp,"ShaderMaterial");var Mn=Bp,kp=class kp extends Mn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};l(kp,"RawShaderMaterial");var Su=kp,zp=class zp extends Ms{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vh,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};l(zp,"MeshStandardMaterial");var xi=zp;var Gp=class Gp extends Ms{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};l(Gp,"MeshDepthMaterial");var wu=Gp,Vp=class Vp extends Ms{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};l(Vp,"MeshDistanceMaterial");var Eu=Vp;function La(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}l(La,"convertArray");function tu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}l(tu,"hasTangents");var Hp=class Hp{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}};l(Hp,"Interpolant");var nr=Hp,Wp=class Wp extends nr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yf,endingEnd:yf}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case bf:r=e,o=2*t-n;break;case Mf:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case bf:a=e,c=2*n-t;break;case Mf:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let u=(n-t)*.5,h=this.valueSize;this._weightPrev=u/(t-o),this._weightNext=u/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=this._offsetPrev,p=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(n-t)/(s-t),y=g*g,x=y*g,_=-f*x+2*f*y-f*g,b=(1+f)*x+(-1.5-2*f)*y+(-.5+f)*g+1,A=(-1-m)*x+(1.5+m)*y+.5*g,S=m*x-m*y;for(let R=0;R!==o;++R)r[R]=_*a[h+R]+b*a[u+R]+A*a[c+R]+S*a[p+R];return r}};l(Wp,"CubicInterpolant");var Au=Wp,Xp=class Xp extends nr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=(n-t)/(s-t),p=1-h;for(let f=0;f!==o;++f)r[f]=a[u+f]*p+a[c+f]*h;return r}};l(Xp,"LinearInterpolant");var Tu=Xp,qp=class qp extends nr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}};l(qp,"DiscreteInterpolant");var Cu=qp,Yp=class Yp extends nr{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let g=(n-t)/(s-t),y=1-g;for(let x=0;x!==o;++x)r[x]=a[u+x]*y+a[c+x]*g;return r}let f=o*2,m=e-1;for(let g=0;g!==o;++g){let y=a[u+g],x=a[c+g],_=m*f+g*2,b=p[_],A=p[_+1],S=e*f+g*2,R=h[S],C=h[S+1],v=Qb(n,t,b,R,s);r[g]=qx(v,y,A,C,x)}return r}};l(Yp,"BezierInterpolant");var Ru=Yp;function qx(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}l(qx,"cubicBezier");function jb(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}l(jb,"cubicBezierSlope");function Qb(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=qx(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=jb(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}l(Qb,"solveBezierParameter");var $p=class $p{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=La(t,this.TimeBufferType),this.values=La(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:La(e.times,Array),values:La(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),tu(e.settings)&&(n.settings={inTangents:La(e.settings.inTangents,Array),outTangents:La(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Cu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Tu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Au(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ru(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Yo:t=this.InterpolantFactoryMethodDiscrete;break;case pu:t=this.InterpolantFactoryMethodLinear;break;case su:t=this.InterpolantFactoryMethodSmooth;break;case vf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return qe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yo;case this.InterpolantFactoryMethodLinear:return pu;case this.InterpolantFactoryMethodSmooth:return su;case this.InterpolantFactoryMethodBezier:return vf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;tu(this.settings)&&(ex(this.settings.inTangents,e),ex(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;tu(this.settings)&&(tx(this.settings.inTangents,e),tx(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ye("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ye("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Ye("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ye("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Ab(s))for(let o=0,c=s.length;o!==c;++o){let u=s[o];if(isNaN(u)){Ye("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===su,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,u=e[o],h=e[o+1];if(u!==h&&(o!==1||u!==e[0]))if(s)c=!0;else{let p=o*n,f=p-n,m=p+n;for(let g=0;g!==n;++g){let y=t[p+g];if(y!==t[f+g]||y!==t[m+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let p=o*n,f=a*n;for(let m=0;m!==n;++m)t[f+m]=t[p+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,u=0;u!==n;++u)t[c+u]=t[o+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,tu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};l($p,"KeyframeTrack");var Fn=$p;function ex(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}l(ex,"shiftTangentTimes");function tx(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}l(tx,"scaleTangentTimes");Fn.prototype.ValueTypeName="";Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=pu;var Zp=class Zp extends Fn{constructor(e,t,n){super(e,t,n)}};l(Zp,"BooleanKeyframeTrack");var ir=Zp;ir.prototype.ValueTypeName="bool";ir.prototype.ValueBufferType=Array;ir.prototype.DefaultInterpolation=Yo;ir.prototype.InterpolantFactoryMethodLinear=void 0;ir.prototype.InterpolantFactoryMethodSmooth=void 0;var Jp=class Jp extends Fn{constructor(e,t,n,s){super(e,t,n,s)}};l(Jp,"ColorKeyframeTrack");var Pu=Jp;Pu.prototype.ValueTypeName="color";var Kp=class Kp extends Fn{constructor(e,t,n,s){super(e,t,n,s)}};l(Kp,"NumberKeyframeTrack");var Iu=Kp;Iu.prototype.ValueTypeName="number";var jp=class jp extends nr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),u=e*o;for(let h=u+o;u!==h;u+=4)yn.slerpFlat(r,0,a,u-o,a,u,c);return r}};l(jp,"QuaternionLinearInterpolant");var Lu=jp,Qp=class Qp extends Fn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Lu(this.times,this.values,this.getValueSize(),e)}};l(Qp,"QuaternionKeyframeTrack");var ll=Qp;ll.prototype.ValueTypeName="quaternion";ll.prototype.InterpolantFactoryMethodSmooth=void 0;var em=class em extends Fn{constructor(e,t,n){super(e,t,n)}};l(em,"StringKeyframeTrack");var sr=em;sr.prototype.ValueTypeName="string";sr.prototype.ValueBufferType=Array;sr.prototype.DefaultInterpolation=Yo;sr.prototype.InterpolantFactoryMethodLinear=void 0;sr.prototype.InterpolantFactoryMethodSmooth=void 0;var tm=class tm extends Fn{constructor(e,t,n,s){super(e,t,n,s)}};l(tm,"VectorKeyframeTrack");var Du=tm;Du.prototype.ValueTypeName="vector";var nm=class nm{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,p){return u.push(h,p),this},this.removeHandler=function(h){let p=u.indexOf(h);return p!==-1&&u.splice(p,2),this},this.getHandler=function(h){for(let p=0,f=u.length;p<f;p+=2){let m=u[p],g=u[p+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}};l(nm,"LoadingManager");var Nu=nm,Yx=new Nu,im=class im{constructor(e){this.manager=e!==void 0?e:Yx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};l(im,"Loader");var Uu=im;Uu.DEFAULT_MATERIAL_NAME="__DEFAULT";var sm=class sm extends nn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};l(sm,"Light");var cl=sm,rm=class rm extends cl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}};l(rm,"HemisphereLight");var ul=rm,_f=new _t,nx=new X,ix=new X,am=class am{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new js,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;nx.setFromMatrixPosition(e.matrixWorld),t.position.copy(nx),ix.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ix),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){_f.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(_f,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,u=s?s.y/r.y:0;e.coordinateSystem===ka||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),t.multiply(_f)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};l(am,"LightShadow");var Fu=am,nu=new X,iu=new yn,Fi=new X,om=class om extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(nu,iu,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nu,iu,Fi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(nu,iu,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nu,iu,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};l(om,"Camera");var hl=om,Ys=new X,sx=new We,rx=new We,lm=class lm extends hl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=mu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mu*2*Math.atan(Math.tan(Zd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ys.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ys.x,Ys.y).multiplyScalar(-e/Ys.z),Ys.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ys.x,Ys.y).multiplyScalar(-e/Ys.z)}getViewSize(e,t){return this.getViewBounds(e,sx,rx),t.subVectors(rx,sx)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zd*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/u,s*=a.width/c,n*=a.height/u}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};l(lm,"PerspectiveCamera");var vn=lm;var cm=class cm extends hl{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};l(cm,"OrthographicCamera");var dl=cm,um=class um extends Fu{constructor(){super(new dl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};l(um,"DirectionalLightShadow");var Sf=um,hm=class hm extends cl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new Sf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};l(hm,"DirectionalLight");var fl=hm;var dm=class dm extends Ut{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};l(dm,"InstancedBufferGeometry");var pl=dm;var Da=-90,Na=1,fm=class fm extends nn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new vn(Da,Na,e,t);s.layers=this.layers,this.add(s);let r=new vn(Da,Na,e,t);r.layers=this.layers,this.add(r);let a=new vn(Da,Na,e,t);a.layers=this.layers,this.add(a);let o=new vn(Da,Na,e,t);o.layers=this.layers,this.add(o);let c=new vn(Da,Na,e,t);c.layers=this.layers,this.add(c);let u=new vn(Da,Na,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let u of t)this.remove(u);if(e===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ka)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,u,h]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}};l(fm,"CubeCamera");var qa=fm,pm=class pm extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};l(pm,"ArrayCamera");var Ou=pm;var Qf="\\[\\]\\.:\\/",eM=new RegExp("["+Qf+"]","g"),ep="[^"+Qf+"]",tM="[^"+Qf.replace("\\.","")+"]",nM=/((?:WC+[\/:])*)/.source.replace("WC",ep),iM=/(WCOD+)?/.source.replace("WCOD",tM),sM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ep),rM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ep),aM=new RegExp("^"+nM+iM+sM+rM+"$"),oM=["material","materials","bones","map"],mm=class mm{constructor(e,t,n){let s=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}};l(mm,"Composite");var wf=mm,Zs=class Zs{constructor(e,t,n){this.path=t,this.parsedPath=n||Zs.parseTrackName(t),this.node=Zs.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Zs.Composite(e,t,n):new Zs(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(eM,"")}static parseTrackName(e){let t=aM.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);oM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=l(function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},"searchNodeSubtree"),s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=Zs.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){Ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let a=e[s];if(a===void 0){let u=t.nodeName;Ye("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};l(Zs,"PropertyBinding");var Et=Zs;Et.Composite=wf;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var YC=new Float32Array(1);var th=class th{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};l(th,"Matrix2"),th.prototype.isMatrix2=!0;var Ef=th;function tp(i,e,t,n){let s=lM(n);switch(t){case Wf:return i*e;case qf:return i*e/s.components*s.byteLength;case ch:return i*e/s.components*s.byteLength;case qi:return i*e*2/s.components*s.byteLength;case uh:return i*e*2/s.components*s.byteLength;case Xf:return i*e*3/s.components*s.byteLength;case kn:return i*e*4/s.components*s.byteLength;case hh:return i*e*4/s.components*s.byteLength;case _l:case vl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case yl:case bl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fh:case mh:return Math.max(i,16)*Math.max(e,8)/4;case dh:case ph:return Math.max(i,8)*Math.max(e,8)/2;case gh:case xh:case vh:case yh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _h:case Ml:case bh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case wh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Th:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ph:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Lh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Dh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Nh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Uh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Fh:case Oh:case Bh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case kh:case zh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Sl:case Gh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}l(tp,"getByteLength");function lM(i){switch(i){case un:case zf:return{byteLength:1,components:1};case Ja:case Gf:case Bn:return{byteLength:2,components:1};case oh:case lh:return{byteLength:2,components:4};case _i:case ah:case vi:return{byteLength:4,components:1};case Vf:case Hf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}l(lM,"getTextureTypeByteLength");typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function m_(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return l(s,"onAnimationFrame"),{start:l(function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},"start"),stop:l(function(){i!==null&&i.cancelAnimationFrame(n),e=!1},"stop"),setAnimationLoop:l(function(r){t=r},"setAnimationLoop"),setContext:l(function(r){i=r},"setContext")}}l(m_,"WebGLAnimation");function pM(i){let e=new WeakMap;function t(o,c){let u=o.array,h=o.usage,p=u.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,u,h),o.onUploadCallback();let m;if(u instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=i.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=i.SHORT;else if(u instanceof Uint32Array)m=i.UNSIGNED_INT;else if(u instanceof Int32Array)m=i.INT;else if(u instanceof Int8Array)m=i.BYTE;else if(u instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}l(t,"createBuffer");function n(o,c,u){let h=c.array,p=c.updateRanges;if(i.bindBuffer(u,o),p.length===0)i.bufferSubData(u,0,h);else{p.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<p.length;m++){let g=p[f],y=p[m];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,p[f]=y)}p.length=f+1;for(let m=0,g=p.length;m<g;m++){let y=p[m];i.bufferSubData(u,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}l(n,"updateBuffer");function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}l(s,"get");function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}l(r,"remove");function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=e.get(o);if(u===void 0)e.set(o,t(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,c),u.version=o.version}}return l(a,"update"),{get:s,remove:r,update:a}}l(pM,"WebGLAttributes");var mM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gM=`#ifdef USE_ALPHAHASH
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
#endif`,xM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_M=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bM=`#ifdef USE_AOMAP
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
#endif`,MM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SM=`#ifdef USE_BATCHING
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
#endif`,wM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,EM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,TM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,CM=`#ifdef USE_IRIDESCENCE
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
#endif`,RM=`#ifdef USE_BUMPMAP
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
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,NM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,UM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,FM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,OM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,BM=`#define PI 3.141592653589793
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
} // validated`,kM=`vec3 transformedNormal = objectNormal;
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
#endif`,zM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,GM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,VM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,WM="gl_FragColor = linearToOutputTexel( gl_FragColor );",XM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qM=`#ifdef USE_ENVMAP
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
#endif`,YM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,$M=`#ifdef USE_ENVMAP
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
#endif`,ZM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JM=`#ifdef USE_ENVMAP
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
#endif`,KM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tS=`#ifdef USE_GRADIENTMAP
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
}`,nS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rS=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,aS=`#ifdef USE_ENVMAP
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
#endif`,oS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hS=`PhysicalMaterial material;
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
#endif`,dS=`uniform sampler2D dfgLUT;
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
}`,fS=`
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
#endif`,pS=`#if defined( RE_IndirectDiffuse )
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
#endif`,mS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gS=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,xS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_S=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,MS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,SS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wS=`#if defined( USE_POINTS_UV )
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
#endif`,ES=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CS=`#if defined( USE_MORPHCOLORS )
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
#endif`,RS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PS=`#ifdef USE_MORPHTARGETS
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
#endif`,IS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,DS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,NS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,US=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,OS=`#ifdef USE_NORMALMAP
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
#endif`,BS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,HS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,WS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,XS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$S=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,QS=`float getShadowMask() {
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
}`,ew=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tw=`#ifdef USE_SKINNING
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
#endif`,nw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iw=`#ifdef USE_SKINNING
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
#endif`,sw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ow=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lw=`#ifdef USE_TRANSMISSION
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
#endif`,cw=`#ifdef USE_TRANSMISSION
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
#endif`,uw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,pw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mw=`uniform sampler2D t2D;
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
}`,gw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xw=`uniform float backgroundBlurriness;
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
}`,_w=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yw=`#include <common>
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
}`,bw=`#if DEPTH_PACKING == 3200
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
}`,Mw=`#define DISTANCE
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
}`,Sw=`#define DISTANCE
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
}`,ww=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ew=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Aw=`uniform float scale;
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
}`,Tw=`uniform vec3 diffuse;
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
}`,Cw=`#include <common>
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
}`,Rw=`uniform vec3 diffuse;
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
}`,Pw=`#define LAMBERT
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
}`,Iw=`#define LAMBERT
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
}`,Lw=`#define MATCAP
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
}`,Dw=`#define MATCAP
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
}`,Nw=`#define NORMAL
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
}`,Uw=`#define NORMAL
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
}`,Fw=`#define PHONG
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
}`,Ow=`#define PHONG
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
}`,Bw=`#define STANDARD
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
}`,kw=`#define STANDARD
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
}`,zw=`#define TOON
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
}`,Gw=`#define TOON
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
}`,Vw=`uniform float size;
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
}`,Hw=`uniform vec3 diffuse;
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
}`,Ww=`#include <common>
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
}`,Xw=`uniform vec3 color;
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
}`,qw=`uniform float rotation;
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
}`,Yw=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:mM,alphahash_pars_fragment:gM,alphamap_fragment:xM,alphamap_pars_fragment:_M,alphatest_fragment:vM,alphatest_pars_fragment:yM,aomap_fragment:bM,aomap_pars_fragment:MM,batching_pars_vertex:SM,batching_vertex:wM,begin_vertex:EM,beginnormal_vertex:AM,bsdfs:TM,iridescence_fragment:CM,bumpmap_pars_fragment:RM,clipping_planes_fragment:PM,clipping_planes_pars_fragment:IM,clipping_planes_pars_vertex:LM,clipping_planes_vertex:DM,color_fragment:NM,color_pars_fragment:UM,color_pars_vertex:FM,color_vertex:OM,common:BM,defaultnormal_vertex:kM,displacementmap_pars_vertex:zM,displacementmap_vertex:GM,emissivemap_fragment:VM,emissivemap_pars_fragment:HM,colorspace_fragment:WM,colorspace_pars_fragment:XM,envmap_fragment:qM,envmap_common_pars_fragment:YM,envmap_pars_fragment:$M,envmap_pars_vertex:ZM,envmap_physical_pars_fragment:aS,envmap_vertex:JM,fog_vertex:KM,fog_pars_vertex:jM,fog_fragment:QM,fog_pars_fragment:eS,gradientmap_pars_fragment:tS,lightmap_pars_fragment:nS,lights_lambert_fragment:iS,lights_lambert_pars_fragment:sS,lights_pars_begin:rS,lights_toon_fragment:oS,lights_toon_pars_fragment:lS,lights_phong_fragment:cS,lights_phong_pars_fragment:uS,lights_physical_fragment:hS,lights_physical_pars_fragment:dS,lights_fragment_begin:fS,lights_fragment_maps:pS,lights_fragment_end:mS,lightprobes_pars_fragment:gS,logdepthbuf_fragment:xS,logdepthbuf_pars_fragment:_S,logdepthbuf_pars_vertex:vS,logdepthbuf_vertex:yS,map_fragment:bS,map_pars_fragment:MS,map_particle_fragment:SS,map_particle_pars_fragment:wS,metalnessmap_fragment:ES,metalnessmap_pars_fragment:AS,morphinstance_vertex:TS,morphcolor_vertex:CS,morphnormal_vertex:RS,morphtarget_pars_vertex:PS,morphtarget_vertex:IS,normal_fragment_begin:LS,normal_fragment_maps:DS,normal_pars_fragment:NS,normal_pars_vertex:US,normal_vertex:FS,normalmap_pars_fragment:OS,clearcoat_normal_fragment_begin:BS,clearcoat_normal_fragment_maps:kS,clearcoat_pars_fragment:zS,iridescence_pars_fragment:GS,opaque_fragment:VS,packing:HS,premultiplied_alpha_fragment:WS,project_vertex:XS,dithering_fragment:qS,dithering_pars_fragment:YS,roughnessmap_fragment:$S,roughnessmap_pars_fragment:ZS,shadowmap_pars_fragment:JS,shadowmap_pars_vertex:KS,shadowmap_vertex:jS,shadowmask_pars_fragment:QS,skinbase_vertex:ew,skinning_pars_vertex:tw,skinning_vertex:nw,skinnormal_vertex:iw,specularmap_fragment:sw,specularmap_pars_fragment:rw,tonemapping_fragment:aw,tonemapping_pars_fragment:ow,transmission_fragment:lw,transmission_pars_fragment:cw,uv_pars_fragment:uw,uv_pars_vertex:hw,uv_vertex:dw,worldpos_vertex:fw,background_vert:pw,background_frag:mw,backgroundCube_vert:gw,backgroundCube_frag:xw,cube_vert:_w,cube_frag:vw,depth_vert:yw,depth_frag:bw,distance_vert:Mw,distance_frag:Sw,equirect_vert:ww,equirect_frag:Ew,linedashed_vert:Aw,linedashed_frag:Tw,meshbasic_vert:Cw,meshbasic_frag:Rw,meshlambert_vert:Pw,meshlambert_frag:Iw,meshmatcap_vert:Lw,meshmatcap_frag:Dw,meshnormal_vert:Nw,meshnormal_frag:Uw,meshphong_vert:Fw,meshphong_frag:Ow,meshphysical_vert:Bw,meshphysical_frag:kw,meshtoon_vert:zw,meshtoon_frag:Gw,points_vert:Vw,points_frag:Hw,shadow_vert:Ww,shadow_frag:Xw,sprite_vert:qw,sprite_frag:Yw},Te={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},$i={basic:{uniforms:hn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:hn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:hn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:hn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:hn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new ke(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:hn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:hn([Te.points,Te.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:hn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:hn([Te.common,Te.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:hn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:hn([Te.sprite,Te.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:hn([Te.common,Te.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:hn([Te.lights,Te.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};$i.physical={uniforms:hn([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new $e},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var Wh={r:0,b:0,g:0},$w=new _t,g_=new $e;g_.set(-1,0,0,0,1,0,0,0,1);function Zw(i,e,t,n,s,r){let a=new ke(0),o=s===!0?0:1,c,u,h=null,p=0,f=null;function m(b){let A=b.isScene===!0?b.background:null;if(A&&A.isTexture){let S=b.backgroundBlurriness>0;A=e.get(A,S)}return A}l(m,"getBackground");function g(b){let A=!1,S=m(b);S===null?x(a,o):S&&S.isColor&&(x(S,1),A=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}l(g,"render");function y(b,A){let S=m(A);S&&S.isCubeTexture?(u===void 0&&(u=new vt(new zi(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:zr($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,C,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:l(function(){return this.uniforms.envMap.value},"get")}),n.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($w.makeRotationFromEuler(A.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(g_),u.material.toneMapped=at.getTransfer(S.colorSpace)!==gt,(h!==S||p!==S.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=S,p=S.version,f=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new vt(new Hi(2,2),new Mn({name:"BackgroundMaterial",uniforms:zr($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:l(function(){return this.uniforms.t2D.value},"get")}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=at.getTransfer(S.colorSpace)!==gt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||p!==S.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,p=S.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}l(y,"addToRenderList");function x(b,A){b.getRGB(Wh,jf(i)),t.buffers.color.setClear(Wh.r,Wh.g,Wh.b,A,r)}l(x,"setClear");function _(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return l(_,"dispose"),{getClearColor:l(function(){return a},"getClearColor"),setClearColor:l(function(b,A=1){a.set(b),o=A,x(a,o)},"setClearColor"),getClearAlpha:l(function(){return o},"getClearAlpha"),setClearAlpha:l(function(b){o=b,x(a,o)},"setClearAlpha"),render:g,addToRenderList:y,dispose:_}}l(Zw,"WebGLBackground");function Jw(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(F,G,j,U,Y){let ie=!1,O=p(F,U,j,G);r!==O&&(r=O,u(r.object)),ie=m(F,U,j,Y),ie&&g(F,U,j,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(ie||a)&&(a=!1,S(F,G,j,U),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}l(o,"setup");function c(){return i.createVertexArray()}l(c,"createVertexArrayObject");function u(F){return i.bindVertexArray(F)}l(u,"bindVertexArrayObject");function h(F){return i.deleteVertexArray(F)}l(h,"deleteVertexArrayObject");function p(F,G,j,U){let Y=U.wireframe===!0,ie=n[G.id];ie===void 0&&(ie={},n[G.id]=ie);let O=F.isInstancedMesh===!0?F.id:0,Z=ie[O];Z===void 0&&(Z={},ie[O]=Z);let V=Z[j.id];V===void 0&&(V={},Z[j.id]=V);let Q=V[Y];return Q===void 0&&(Q=f(c()),V[Y]=Q),Q}l(p,"getBindingState");function f(F){let G=[],j=[],U=[];for(let Y=0;Y<t;Y++)G[Y]=0,j[Y]=0,U[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:j,attributeDivisors:U,object:F,attributes:{},index:null}}l(f,"createBindingState");function m(F,G,j,U){let Y=r.attributes,ie=G.attributes,O=0,Z=j.getAttributes();for(let V in Z)if(Z[V].location>=0){let ne=Y[V],de=ie[V];if(de===void 0&&(V==="instanceMatrix"&&F.instanceMatrix&&(de=F.instanceMatrix),V==="instanceColor"&&F.instanceColor&&(de=F.instanceColor)),ne===void 0||ne.attribute!==de||de&&ne.data!==de.data)return!0;O++}return r.attributesNum!==O||r.index!==U}l(m,"needsUpdate");function g(F,G,j,U){let Y={},ie=G.attributes,O=0,Z=j.getAttributes();for(let V in Z)if(Z[V].location>=0){let ne=ie[V];ne===void 0&&(V==="instanceMatrix"&&F.instanceMatrix&&(ne=F.instanceMatrix),V==="instanceColor"&&F.instanceColor&&(ne=F.instanceColor));let de={};de.attribute=ne,ne&&ne.data&&(de.data=ne.data),Y[V]=de,O++}r.attributes=Y,r.attributesNum=O,r.index=U}l(g,"saveCache");function y(){let F=r.newAttributes;for(let G=0,j=F.length;G<j;G++)F[G]=0}l(y,"initAttributes");function x(F){_(F,0)}l(x,"enableAttribute");function _(F,G){let j=r.newAttributes,U=r.enabledAttributes,Y=r.attributeDivisors;j[F]=1,U[F]===0&&(i.enableVertexAttribArray(F),U[F]=1),Y[F]!==G&&(i.vertexAttribDivisor(F,G),Y[F]=G)}l(_,"enableAttributeAndDivisor");function b(){let F=r.newAttributes,G=r.enabledAttributes;for(let j=0,U=G.length;j<U;j++)G[j]!==F[j]&&(i.disableVertexAttribArray(j),G[j]=0)}l(b,"disableUnusedAttributes");function A(F,G,j,U,Y,ie,O){O===!0?i.vertexAttribIPointer(F,G,j,Y,ie):i.vertexAttribPointer(F,G,j,U,Y,ie)}l(A,"vertexAttribPointer");function S(F,G,j,U){y();let Y=U.attributes,ie=j.getAttributes(),O=G.defaultAttributeValues;for(let Z in ie){let V=ie[Z];if(V.location>=0){let Q=Y[Z];if(Q===void 0&&(Z==="instanceMatrix"&&F.instanceMatrix&&(Q=F.instanceMatrix),Z==="instanceColor"&&F.instanceColor&&(Q=F.instanceColor)),Q!==void 0){let ne=Q.normalized,de=Q.itemSize,ge=e.get(Q);if(ge===void 0)continue;let ee=ge.buffer,pe=ge.type,ue=ge.bytesPerElement,H=pe===i.INT||pe===i.UNSIGNED_INT||Q.gpuType===ah;if(Q.isInterleavedBufferAttribute){let J=Q.data,se=J.isInterleavedBuffer===!0?J.stride:J.itemSize,xe=Q.offset;if(J.isInstancedInterleavedBuffer||J.isInstancedBufferAttribute){for(let he=0;he<V.locationSize;he++)_(V.location+he,J.meshPerAttribute);F.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let he=0;he<V.locationSize;he++)x(V.location+he);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let he=0;he<V.locationSize;he++)A(V.location+he,de/V.locationSize,pe,ne,se*ue,(xe+de/V.locationSize*he)*ue,H)}else{if(Q.isInstancedBufferAttribute){for(let J=0;J<V.locationSize;J++)_(V.location+J,Q.meshPerAttribute);F.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let J=0;J<V.locationSize;J++)x(V.location+J);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let J=0;J<V.locationSize;J++)A(V.location+J,de/V.locationSize,pe,ne,de*ue,de/V.locationSize*J*ue,H)}}else if(O!==void 0){let ne=O[Z];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(V.location,ne);break;case 3:i.vertexAttrib3fv(V.location,ne);break;case 4:i.vertexAttrib4fv(V.location,ne);break;default:i.vertexAttrib1fv(V.location,ne)}}}}b()}l(S,"setupVertexAttributes");function R(){L();for(let F in n){let G=n[F];for(let j in G){let U=G[j];for(let Y in U){let ie=U[Y];for(let O in ie)h(ie[O].object),delete ie[O];delete U[Y]}}delete n[F]}}l(R,"dispose");function C(F){if(n[F.id]===void 0)return;let G=n[F.id];for(let j in G){let U=G[j];for(let Y in U){let ie=U[Y];for(let O in ie)h(ie[O].object),delete ie[O];delete U[Y]}}delete n[F.id]}l(C,"releaseStatesOfGeometry");function v(F){for(let G in n){let j=n[G];for(let U in j){let Y=j[U];if(Y[F.id]===void 0)continue;let ie=Y[F.id];for(let O in ie)h(ie[O].object),delete ie[O];delete Y[F.id]}}}l(v,"releaseStatesOfProgram");function w(F){for(let G in n){let j=n[G],U=F.isInstancedMesh===!0?F.id:0,Y=j[U];if(Y!==void 0){for(let ie in Y){let O=Y[ie];for(let Z in O)h(O[Z].object),delete O[Z];delete Y[ie]}delete j[U],Object.keys(j).length===0&&delete n[G]}}}l(w,"releaseStatesOfObject");function L(){I(),a=!0,r!==s&&(r=s,u(r.object))}l(L,"reset");function I(){s.geometry=null,s.program=null,s.wireframe=!1}return l(I,"resetDefaultState"),{setup:o,reset:L,resetDefaultState:I,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfObject:w,releaseStatesOfProgram:v,initAttributes:y,enableAttribute:x,disableUnusedAttributes:b}}l(Jw,"WebGLBindingStates");function Kw(i,e,t){let n;function s(c){n=c}l(s,"setMode");function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}l(r,"render");function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}l(a,"renderInstances");function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];t.update(f,n,1)}l(o,"renderMultiDraw"),this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}l(Kw,"WebGLBufferRenderer");function jw(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}l(r,"getMaxAnisotropy");function a(v){return!(v!==kn&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}l(a,"textureFormatReadable");function o(v){let w=v===Bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==un&&v!==vi&&!w&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}l(o,"textureTypeReadable");function c(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}l(c,"getMaxPrecision");let u=t.precision!==void 0?t.precision:"highp",h=c(u);h!==u&&(qe("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);let p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&p===!1;t.reversedDepthBuffer===!0&&p===!1&&qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&p===!0&&qe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),C=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:S,maxSamples:R,samples:C}}l(jw,"WebGLCapabilities");function Qw(i){let e=this,t=null,n=0,s=!1,r=!1,a=new An,o=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){let m=p.length!==0||f||n!==0||s;return s=f,n=p.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,f){t=h(p,f,0)},this.setState=function(p,f,m){let g=p.clippingPlanes,y=p.clipIntersection,x=p.clipShadows,_=i.get(p);if(!s||g===null||g.length===0||r&&!x)r?h(null):u();else{let b=r?0:n,A=b*4,S=_.clippingState||null;c.value=S,S=h(g,f,A,m);for(let R=0;R!==A;++R)S[R]=t[R];_.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}l(u,"resetGlobalState");function h(p,f,m,g){let y=p!==null?p.length:0,x=null;if(y!==0){if(x=c.value,g!==!0||x===null){let _=m+y*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(x===null||x.length<_)&&(x=new Float32Array(_));for(let A=0,S=m;A!==y;++A,S+=4)a.copy(p[A]).applyMatrix4(b,o),a.normal.toArray(x,S),x[S+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,x}l(h,"projectPlanes")}l(Qw,"WebGLClipping");var Am=class Am extends Nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new sl(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new zi(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:zr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:Ur});r.uniforms.tEquirect.value=t;let a=new vt(s,r),o=t.minFilter;return t.minFilter===On&&(t.minFilter=Gt),new qa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};l(Am,"WebGLCubeRenderTarget");var Al=Am,$x=256,e1=3,t1=20,x_=256,__=16,n1=3,i1=new X,s1=new ke,$h=class $h{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new qa(1,10,null),this._boxMesh=new vt(new zi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=i1}=r,c=this._renderer;this._setSize(a);let u=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let p=c.autoClear,f=c.autoClearColor,m=c.autoClearDepth,g=c.autoClearStencil,y=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(e.background=c.getClearColor(s1));let x=new qa(n,s,h);return x.position.copy(o),x.update(c,e),c.autoClear=p,c.autoClearColor=f,c.autoClearDepth=m,c.autoClearStencil=g,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(u,t)),this._applyPMREM(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max($x,Gx(e))}_fromTexture(e,t){e.mapping===Or||e.mapping===Za?this._setSize(e.image.length===0?$x:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Zx(e,!1,!1),n=Math.log2(e)-e1;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Zx(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Or||e.mapping===Za?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kx()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Jx()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=r1(),this._integrationMaterial=a1());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/__);for(let a=0;a<=n;a++){let o=$h.lodToRoughness(a,n);if(a>n-n1)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(x_*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=o1());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};l($h,"PMREMGenerator");var qh=$h;function Zx(i,e,t){return new Al(i,{minFilter:On,generateMipmaps:e,type:Bn,colorSpace:$o,depthBuffer:t})}l(Zx,"_createRenderTarget");function Tl(i,e,t){return new Mn({name:i,uniforms:e,vertexShader:et.cube_vert,fragmentShader:t,side:Sn,blending:Ur,depthTest:!1,depthWrite:!1})}l(Tl,"_getMaterial");function r1(){return Tl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${x_}u

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
	`)}l(r1,"_getGGXMaterial");function a1(){return Tl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:__}},`

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
	`)}l(a1,"_getIntegrationMaterial");function o1(){return Tl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${t1}
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
	`)}l(o1,"_getBlurMaterial");function Jx(){return Tl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}l(Jx,"_getEquirectMaterial");function Kx(){return Tl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}l(Kx,"_getCubemapMaterial");function l1(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,m=!1){return f==null?null:m?a(f):r(f)}l(s,"get");function r(f){if(f&&f.isTexture){let m=f.mapping;if(m===ih||m===sh)if(e.has(f)){let g=e.get(f).texture;return o(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let y=new Al(g.height);return y.fromEquirectangularTexture(i,f),e.set(f,y),f.addEventListener("dispose",u),o(y.texture,f.mapping)}else return null}}return f}l(r,"getCube");function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let m=f.mapping,g=m===ih||m===sh,y=m===Or||m===Za;if(g||y){let x=t.get(f),_=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return n===null&&(n=new qh(i)),x=g?n.fromEquirectangular(f,x):n.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,t.set(f,x),x.texture;if(x!==void 0)return x.texture;{let b=f.image;return g&&b&&b.height>0||y&&b&&c(b)?(n===null&&(n=new qh(i)),x=g?n.fromEquirectangular(f):n.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,t.set(f,x),f.addEventListener("dispose",h),x.texture):null}}}return f}l(a,"getPMREM");function o(f,m){return m===ih?f.mapping=Or:m===sh&&(f.mapping=Za),f}l(o,"mapTextureMapping");function c(f){let m=0,g=6;for(let y=0;y<g;y++)f[y]!==void 0&&m++;return m===g}l(c,"isCubeTextureComplete");function u(f){let m=f.target;m.removeEventListener("dispose",u);let g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}l(u,"onCubemapDispose");function h(f){let m=f.target;m.removeEventListener("dispose",h);let g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}l(h,"onPMREMDispose");function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return l(p,"dispose"),{get:s,dispose:p}}l(l1,"WebGLEnvironments");function c1(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return l(t,"getExtension"),{has:l(function(n){return t(n)!==null},"has"),init:l(function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},"init"),get:l(function(n){let s=t(n);return s===null&&Xo("WebGLRenderer: "+n+" extension not supported."),s},"get")}}l(c1,"WebGLExtensions");function u1(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){c(g.target)}l(o,"onGeometryDispose");function c(g){g.index!==null&&e.remove(g.index);for(let x in g.attributes)e.remove(g.attributes[x]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let y=r.get(g);y&&(e.remove(y),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}l(c,"destroyGeometry");function u(g,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}l(u,"get");function h(g){let y=g.attributes;for(let x in y)e.update(y[x],i.ARRAY_BUFFER)}l(h,"update");function p(g){let y=g.index,x=g.attributes.position,_=0;if(x===void 0)return;let b=y!==null?y.array.length:x.array.length/3-1,A=x.count>=65535?nl:tl,S=new A(Math.ceil(b/3)*6,1),R=S.array;if(y!==null){let v=y.array;_=y.version;for(let w=0,L=0;w<b;w+=3){let I=v[w+0],F=v[w+1],G=v[w+2];R[L++]=I,R[L++]=F,R[L++]=F,R[L++]=G,R[L++]=G,R[L++]=I}}else{_=x.version;for(let v=0,w=0;v<b;v+=3){let L=v+0,I=v+1,F=v+2;R[w++]=L,R[w++]=I,R[w++]=I,R[w++]=F,R[w++]=F,R[w++]=L}}S.version=_;let C=r.get(g);C&&e.remove(C),r.set(g,S)}l(p,"updateWireframeAttribute");function f(g){let y=r.get(g);if(y){let x=g.index;x!==null&&y.version<x.version&&p(g)}else p(g);return r.get(g)}l(f,"getWireframeAttribute");function m(){for(let g in s){let y=s[g].deref();y!==void 0&&c(y)}}return l(m,"dispose"),{get:u,update:h,getWireframeAttribute:f,dispose:m}}l(u1,"WebGLGeometries");function h1(i,e,t){let n;function s(p){n=p}l(s,"setMode");let r,a;function o(p){r=p.type,a=p.bytesPerElement}l(o,"setIndex");function c(p,f){i.drawElements(n,f,r,p*a),t.update(f,n,1)}l(c,"render");function u(p,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,p*a,m),t.update(f,n,m))}l(u,"renderInstances");function h(p,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,p,0,m);let y=0;for(let x=0;x<m;x++)y+=f[x];t.update(y,n,1)}l(h,"renderMultiDraw"),this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}l(h1,"WebGLIndexedBufferRenderer");function d1(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ye("WebGLInfo: Unknown draw mode:",a);break}}l(n,"update");function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return l(s,"reset"),{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}l(d1,"WebGLInfo");function f1(i,e,t){let n=new WeakMap,s=new Rt;function r(a,o,c){let u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==p){let I=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",I)};var m=I;l(I,"disposeTexture"),f!==void 0&&f.texture.dispose();let g=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],A=o.morphAttributes.color||[],S=0;g===!0&&(S=1),y===!0&&(S=2),x===!0&&(S=3);let R=o.attributes.position.count*S,C=1;R>e.maxTextureSize&&(C=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);let v=new Float32Array(R*C*4*p),w=new Nr(v,R,C,p);w.type=vi,w.needsUpdate=!0;let L=S*4;for(let F=0;F<p;F++){let G=_[F],j=b[F],U=A[F],Y=R*C*4*F;for(let ie=0;ie<G.count;ie++){let O=ie*L;g===!0&&(s.fromBufferAttribute(G,ie),v[Y+O+0]=s.x,v[Y+O+1]=s.y,v[Y+O+2]=s.z,v[Y+O+3]=0),y===!0&&(s.fromBufferAttribute(j,ie),v[Y+O+4]=s.x,v[Y+O+5]=s.y,v[Y+O+6]=s.z,v[Y+O+7]=0),x===!0&&(s.fromBufferAttribute(U,ie),v[Y+O+8]=s.x,v[Y+O+9]=s.y,v[Y+O+10]=s.z,v[Y+O+11]=U.itemSize===4?s.w:1)}}f={count:p,texture:w,size:new We(R,C)},n.set(o,f),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let x=0;x<u.length;x++)g+=u[x];let y=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",y),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return l(r,"update"),{update:r}}l(f1,"WebGLMorphtargets");function p1(i,e,t,n,s){let r=new WeakMap;function a(u){let h=s.render.frame,p=u.geometry,f=e.get(u,p);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),r.get(u)!==h&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,h))),u.isSkinnedMesh){let m=u.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return f}l(a,"update");function o(){r=new WeakMap}l(o,"dispose");function c(u){let h=u.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return l(c,"onInstancedMeshDispose"),{update:a,dispose:o}}l(p1,"WebGLObjects");var m1={[Df]:"LINEAR_TONE_MAPPING",[Nf]:"REINHARD_TONE_MAPPING",[Uf]:"CINEON_TONE_MAPPING",[gl]:"ACES_FILMIC_TONE_MAPPING",[Of]:"AGX_TONE_MAPPING",[Bf]:"NEUTRAL_TONE_MAPPING",[Ff]:"CUSTOM_TONE_MAPPING"};function g1(i,e,t,n,s,r){let a=new Nn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,u=null,h=new Ut;h.setAttribute("position",new At([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new At([0,2,0,0,2,0],2));let p=new Su({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new vt(h,p),m=new dl(-1,1,1,-1,0,1),g=null,y=null,x=!1,_,b=null,A=[],S=!1;this.setSize=function(R,C){a.setSize(R,C),o!==null&&o.setSize(R,C),c!==null&&c.setSize(R,C);for(let v=0;v<A.length;v++){let w=A[v];w.setSize&&w.setSize(R,C)}},this.setEffects=function(R){A=R,S=A.length>0&&A[0].isRenderPass===!0;let C=a.width,v=a.height;A.length>0&&o===null&&(o=new Nn(C,v,{type:Bn,depthBuffer:!1,stencilBuffer:!1}),c=new Nn(C,v,{type:Bn,depthBuffer:!1,stencilBuffer:!1}));let w=s===!0&&A.some(L=>L.needsDepthTexture===!0);w!==(a.depthTexture!==null)&&(w===!0&&u===null&&(u=new Es(C,v),r===!0&&(u.format=As,u.type=Br)),a.dispose(),a.depthTexture=w?u:null,a.resolveDepthBuffer=w,a.storeMultisampledDepthBuffer=w);for(let L=0;L<A.length;L++){let I=A[L];I.setSize&&I.setSize(C,v),w&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(u)}},this.begin=function(R,C){if(x||R.toneMapping===Xi&&A.length===0)return!1;if(b=C,C!==null){let v=C.width,w=C.height;(a.width!==v||a.height!==w)&&this.setSize(v,w)}return S===!1&&R.setRenderTarget(a),_=R.toneMapping,R.toneMapping=Xi,!0},this.hasRenderPass=function(){return S},this.end=function(R,C){R.toneMapping=_,x=!0;let v=a,w=o;for(let L=0;L<A.length;L++){let I=A[L];I.enabled!==!1&&(I.render(R,w,v,C),I.needsSwap!==!1&&(v=w,w=w===o?c:o))}if(g!==R.outputColorSpace||y!==R.toneMapping){g=R.outputColorSpace,y=R.toneMapping,p.defines={},at.getTransfer(g)===gt&&(p.defines.SRGB_TRANSFER="");let L=m1[y];L&&(p.defines[L]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=v.texture,R.setRenderTarget(b),R.render(f,m),b=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),p.dispose()}}l(g1,"WebGLOutput");var v_=new bn,y_=new Es(1,1),b_=new rl(1),M_=new Nr,S_=new _u,w_=new sl,jx=[],Qx=[],e_=new Float32Array(16),t_=new Float32Array(9),n_=new Float32Array(4);function ja(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=jx[s];if(r===void 0&&(r=new Float32Array(s),jx[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}l(ja,"flatten");function Wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}l(Wt,"arraysEqual");function Xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}l(Xt,"copyArray");function Zh(i,e){let t=Qx[e];t===void 0&&(t=new Int32Array(e),Qx[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}l(Zh,"allocTexUnits");function x1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}l(x1,"setValueV1f");function _1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2fv(this.addr,e),Xt(t,e)}}l(_1,"setValueV2f");function v1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;i.uniform3fv(this.addr,e),Xt(t,e)}}l(v1,"setValueV3f");function y1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4fv(this.addr,e),Xt(t,e)}}l(y1,"setValueV4f");function b1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;n_.set(n),i.uniformMatrix2fv(this.addr,!1,n_),Xt(t,n)}}l(b1,"setValueM2");function M1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;t_.set(n),i.uniformMatrix3fv(this.addr,!1,t_),Xt(t,n)}}l(M1,"setValueM3");function S1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;e_.set(n),i.uniformMatrix4fv(this.addr,!1,e_),Xt(t,n)}}l(S1,"setValueM4");function w1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}l(w1,"setValueV1i");function E1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2iv(this.addr,e),Xt(t,e)}}l(E1,"setValueV2i");function A1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3iv(this.addr,e),Xt(t,e)}}l(A1,"setValueV3i");function T1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4iv(this.addr,e),Xt(t,e)}}l(T1,"setValueV4i");function C1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}l(C1,"setValueV1ui");function R1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2uiv(this.addr,e),Xt(t,e)}}l(R1,"setValueV2ui");function P1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3uiv(this.addr,e),Xt(t,e)}}l(P1,"setValueV3ui");function I1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4uiv(this.addr,e),Xt(t,e)}}l(I1,"setValueV4ui");function Jh(i){return i.version===0&&(i.compareFunction=Zf,i.needsUpdate=!0),i}l(Jh,"initShadowTexture");function L1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Jh(y_):r=v_,t.setTexture2D(e||r,s)}l(L1,"setValueT1");function D1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||S_,s)}l(D1,"setValueT3D1");function N1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Jh(b_):r=w_,t.setTextureCube(e||r,s)}l(N1,"setValueT6");function U1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||M_,s)}l(U1,"setValueT2DArray1");function F1(i){switch(i){case 5126:return x1;case 35664:return _1;case 35665:return v1;case 35666:return y1;case 35674:return b1;case 35675:return M1;case 35676:return S1;case 5124:case 35670:return w1;case 35667:case 35671:return E1;case 35668:case 35672:return A1;case 35669:case 35673:return T1;case 5125:return C1;case 36294:return R1;case 36295:return P1;case 36296:return I1;case 35678:case 36198:case 36298:case 36306:case 35682:return L1;case 35679:case 36299:case 36307:return D1;case 35680:case 36300:case 36308:case 36293:return N1;case 36289:case 36303:case 36311:case 36292:return U1}}l(F1,"getSingularSetter");function O1(i,e){i.uniform1fv(this.addr,e)}l(O1,"setValueV1fArray");function B1(i,e){let t=ja(e,this.size,2);i.uniform2fv(this.addr,t)}l(B1,"setValueV2fArray");function k1(i,e){let t=ja(e,this.size,3);i.uniform3fv(this.addr,t)}l(k1,"setValueV3fArray");function z1(i,e){let t=ja(e,this.size,4);i.uniform4fv(this.addr,t)}l(z1,"setValueV4fArray");function G1(i,e){let t=ja(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}l(G1,"setValueM2Array");function V1(i,e){let t=ja(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}l(V1,"setValueM3Array");function H1(i,e){let t=ja(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}l(H1,"setValueM4Array");function W1(i,e){i.uniform1iv(this.addr,e)}l(W1,"setValueV1iArray");function X1(i,e){i.uniform2iv(this.addr,e)}l(X1,"setValueV2iArray");function q1(i,e){i.uniform3iv(this.addr,e)}l(q1,"setValueV3iArray");function Y1(i,e){i.uniform4iv(this.addr,e)}l(Y1,"setValueV4iArray");function $1(i,e){i.uniform1uiv(this.addr,e)}l($1,"setValueV1uiArray");function Z1(i,e){i.uniform2uiv(this.addr,e)}l(Z1,"setValueV2uiArray");function J1(i,e){i.uniform3uiv(this.addr,e)}l(J1,"setValueV3uiArray");function K1(i,e){i.uniform4uiv(this.addr,e)}l(K1,"setValueV4uiArray");function j1(i,e,t){let n=this.cache,s=e.length,r=Zh(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Jh(y_):a=v_;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}l(j1,"setValueT1Array");function Q1(i,e,t){let n=this.cache,s=e.length,r=Zh(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||S_,r[a])}l(Q1,"setValueT3DArray");function eE(i,e,t){let n=this.cache,s=e.length,r=Zh(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Jh(b_):a=w_;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}l(eE,"setValueT6Array");function tE(i,e,t){let n=this.cache,s=e.length,r=Zh(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||M_,r[a])}l(tE,"setValueT2DArrayArray");function nE(i){switch(i){case 5126:return O1;case 35664:return B1;case 35665:return k1;case 35666:return z1;case 35674:return G1;case 35675:return V1;case 35676:return H1;case 5124:case 35670:return W1;case 35667:case 35671:return X1;case 35668:case 35672:return q1;case 35669:case 35673:return Y1;case 5125:return $1;case 36294:return Z1;case 36295:return J1;case 36296:return K1;case 35678:case 36198:case 36298:case 36306:case 35682:return j1;case 35679:case 36299:case 36307:return Q1;case 35680:case 36300:case 36308:case 36293:return eE;case 36289:case 36303:case 36311:case 36292:return tE}}l(nE,"getPureArraySetter");var Tm=class Tm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=F1(t.type)}};l(Tm,"SingleUniform");var _m=Tm,Cm=class Cm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nE(t.type)}};l(Cm,"PureArrayUniform");var vm=Cm,Rm=class Rm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}};l(Rm,"StructuredUniform");var ym=Rm,gm=/(\w+)(\])?(\[|\.)?/g;function i_(i,e){i.seq.push(e),i.map[e.id]=e}l(i_,"addUniform");function iE(i,e,t){let n=i.name,s=n.length;for(gm.lastIndex=0;;){let r=gm.exec(n),a=gm.lastIndex,o=r[1],c=r[2]==="]",u=r[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===s){i_(t,u===void 0?new _m(o,i,e):new vm(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new ym(o),i_(t,p)),t=p}}}l(iE,"parseUniform");var Pm=class Pm{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);iE(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};l(Pm,"WebGLUniforms");var Ka=Pm;function s_(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}l(s_,"WebGLShader");var sE=37297,rE=0;function aE(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}l(aE,"handleSource");var r_=new $e;function oE(i){at._getMatrix(r_,at.workingColorSpace,i);let e=`mat3( ${r_.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(i)){case Zo:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}l(oE,"getEncodingComponents");function a_(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+aE(i.getShaderSource(e),o)}else return r}l(a_,"getShaderErrors");function lE(i,e){let t=oE(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}l(lE,"getTexelEncodingFunction");var cE={[Df]:"Linear",[Nf]:"Reinhard",[Uf]:"Cineon",[gl]:"ACESFilmic",[Of]:"AgX",[Bf]:"Neutral",[Ff]:"Custom"};function uE(i,e){let t=cE[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}l(uE,"getToneMappingFunction");var Xh=new X;function hE(){at.getLuminanceCoefficients(Xh);let i=Xh.x.toFixed(4),e=Xh.y.toFixed(4),t=Xh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}l(hE,"getLuminanceFunction");function dE(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(El).join(`
`)}l(dE,"generateVertexExtensions");function fE(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}l(fE,"generateDefines");function pE(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}l(pE,"fetchAttributeLocations");function El(i){return i!==""}l(El,"filterEmptyLine");function o_(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}l(o_,"replaceLightNums");function l_(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}l(l_,"replaceClippingPlaneNums");var mE=/^[ \t]*#include +<([\w\d./]+)>/gm;function bm(i){return i.replace(mE,gE)}l(bm,"resolveIncludes");function gE(i,e){let t=et[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return bm(t)}l(gE,"includeReplacer");var xE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function c_(i){return i.replace(xE,_E)}l(c_,"unrollLoops");function _E(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}l(_E,"loopReplacer");function u_(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}l(u_,"generatePrecision");var vE={[ml]:"SHADOWMAP_TYPE_PCF",[Ya]:"SHADOWMAP_TYPE_VSM"};function yE(i){return vE[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}l(yE,"generateShadowMapTypeDefine");var bE={[Za]:"ENVMAP_MODE_REFRACTION"};function ME(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":bE[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}l(ME,"generateEnvMapModeDefine");var SE={[Lf]:"ENVMAP_BLENDING_MULTIPLY",[Ax]:"ENVMAP_BLENDING_MIX",[Tx]:"ENVMAP_BLENDING_ADD"};function wE(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":SE[i.combine]||"ENVMAP_BLENDING_NONE"}l(wE,"generateEnvMapBlendingDefine");function EE(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=yE(t),u=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=ME(t),p=wE(t),f=dE(t),m=fE(r),g=s.createProgram(),y,x,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(El).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(El).join(`
`),x.length>0&&(x+=`
`)):(y=[u_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(El).join(`
`),x=[u_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xi?"#define TONE_MAPPING":"",t.toneMapping!==Xi?et.tonemapping_pars_fragment:"",t.toneMapping!==Xi?uE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,lE("linearToOutputTexel",t.outputColorSpace),hE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(El).join(`
`)),a=bm(a),a=o_(a,t),a=l_(a,t),o=bm(o),o=o_(o,t),o=l_(o,t),a=c_(a),o=c_(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,y=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===Kf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let b=_+y+a,A=_+x+o,S=s_(s,s.VERTEX_SHADER,b),R=s_(s,s.FRAGMENT_SHADER,A);s.attachShader(g,S),s.attachShader(g,R),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function C(I){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(g)||"",G=s.getShaderInfoLog(S)||"",j=s.getShaderInfoLog(R)||"",U=F.trim(),Y=G.trim(),ie=j.trim(),O=!0,Z=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,S,R);else{let V=a_(s,S,"vertex"),Q=a_(s,R,"fragment");Ye("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+V+`
`+Q)}else U!==""?qe("WebGLProgram: Program Info Log:",U):(Y===""||ie==="")&&(Z=!1);Z&&(I.diagnostics={runnable:O,programLog:U,vertexShader:{log:Y,prefix:y},fragmentShader:{log:ie,prefix:x}})}s.deleteShader(S),s.deleteShader(R),v=new Ka(s,g),w=pE(s,g)}l(C,"onFirstUse");let v;this.getUniforms=function(){return v===void 0&&C(this),v};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(g,sE)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rE++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=R,this}l(EE,"WebGLProgram");var AE=0,Im=class Im{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Sm(e),t.set(e,n)),n}};l(Im,"WebGLShaderCache");var Mm=Im,Lm=class Lm{constructor(e){this.id=AE++,this.code=e,this.usedTimes=0}};l(Lm,"WebGLShaderStage");var Sm=Lm;function TE(i){return i===qi||i===Ml||i===Sl}l(TE,"isPackedRGFormat");function CE(i,e,t,n,s,r){let a=new jo,o=new Mm,c=new Set,u=[],h=new Map,p=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}l(m,"getChannel");function g(v,w,L,I,F,G){let j=I.fog,U=F.geometry,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,ie=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,O=e.get(v.envMap||Y,ie),Z=f[v.type],V=n.precision;v.precision!==null&&(V=n.getMaxPrecision(v.precision),V!==v.precision&&qe("WebGLProgram.getParameters:",v.precision,"not supported, using",V,"instead."));let Q=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ne=Q!==void 0?Q.length:0,de=0;U.morphAttributes.position!==void 0&&(de=1),U.morphAttributes.normal!==void 0&&(de=2),U.morphAttributes.color!==void 0&&(de=3);let ge,ee,pe,ue;if(Z){let Pe=$i[Z];ge=Pe.vertexShader,ee=Pe.fragmentShader}else{ge=v.vertexShader,ee=v.fragmentShader;let Pe=o.getVertexShaderStage(v),xt=o.getFragmentShaderStage(v);o.update(v,Pe,xt),pe=Pe.id,ue=xt.id}let H=i.getRenderTarget(),J=i.state.buffers.depth.getReversed(),se=F.isInstancedMesh===!0,xe=F.isBatchedMesh===!0,he=!!v.map,Re=!!v.matcap,Ve=!!O,Fe=Ve&&O.isPMREMTexture===!0,it=!!v.aoMap,ut=!!v.lightMap,mt=!!v.bumpMap&&v.wireframe===!1,Ke=!!v.normalMap,It=!!v.displacementMap,dt=!!v.emissiveMap,yt=!!v.metalnessMap,Ct=!!v.roughnessMap,Oe=v.anisotropy>0,k=v.clearcoat>0,Nt=v.diffuseRoughness>0,lt=v.dispersion>0,tt=v.retroreflectivity>0,_e=v.iridescence>0,ft=v.sheen>0,ze=v.transmission>0,Xe=Oe&&!!v.anisotropyMap,P=k&&!!v.clearcoatMap,M=k&&!!v.clearcoatNormalMap,q=k&&!!v.clearcoatRoughnessMap,fe=Nt&&!!v.diffuseRoughnessMap,oe=_e&&!!v.iridescenceMap,ye=_e&&!!v.iridescenceThicknessMap,Ee=ft&&!!v.sheenColorMap,ae=ft&&!!v.sheenRoughnessMap,le=!!v.specularMap,Me=!!v.specularColorMap,N=!!v.specularIntensityMap,ce=ze&&!!v.transmissionMap,re=ze&&!!v.thicknessMap,Se=!!v.gradientMap,ve=!!v.alphaMap,be=v.alphaTest>0,Ge=!!v.alphaHash,Qe=!!v.extensions,me=Xi;v.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(me=i.toneMapping);let He=Fe?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,je={shaderID:Z,shaderType:v.type,shaderName:v.name,vertexShader:ge,fragmentShader:ee,defines:v.defines,customVertexShaderID:pe,customFragmentShaderID:ue,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:V,batching:xe,batchingColor:xe&&F._colorsTexture!==null,instancing:se,instancingColor:se&&F.instanceColor!==null,instancingMorph:se&&F.morphTexture!==null,outputColorSpace:H===null?i.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:at.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:he,matcap:Re,envMap:Ve,envMapMode:Ve&&O.mapping,envMapPMREM:Fe,envMapMaxLod:Fe?He.length-1:null,envMapSize:Fe?He[0].width:null,aoMap:it,lightMap:ut,bumpMap:mt,normalMap:Ke,displacementMap:It,emissiveMap:dt,normalMapObjectSpace:Ke&&v.normalMapType===Px,normalMapTangentSpace:Ke&&v.normalMapType===Vh,packedNormalMap:Ke&&v.normalMapType===Vh&&TE(v.normalMap.format),metalnessMap:yt,roughnessMap:Ct,anisotropy:Oe,anisotropyMap:Xe,clearcoat:k,clearcoatMap:P,clearcoatNormalMap:M,clearcoatRoughnessMap:q,diffuseRoughness:Nt,diffuseRoughnessMap:fe,dispersion:lt,retroreflection:tt,iridescence:_e,iridescenceMap:oe,iridescenceThicknessMap:ye,sheen:ft,sheenColorMap:Ee,sheenRoughnessMap:ae,specularMap:le,specularColorMap:Me,specularIntensityMap:N,transmission:ze,transmissionMap:ce,thicknessMap:re,gradientMap:Se,opaque:v.transparent===!1&&v.blending===$a&&v.alphaToCoverage===!1,alphaMap:ve,alphaTest:be,alphaHash:Ge,combine:v.combine,mapUv:he&&m(v.map.channel),aoMapUv:it&&m(v.aoMap.channel),lightMapUv:ut&&m(v.lightMap.channel),bumpMapUv:mt&&m(v.bumpMap.channel),normalMapUv:Ke&&m(v.normalMap.channel),displacementMapUv:It&&m(v.displacementMap.channel),emissiveMapUv:dt&&m(v.emissiveMap.channel),metalnessMapUv:yt&&m(v.metalnessMap.channel),roughnessMapUv:Ct&&m(v.roughnessMap.channel),anisotropyMapUv:Xe&&m(v.anisotropyMap.channel),clearcoatMapUv:P&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:M&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&m(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:fe&&m(v.diffuseRoughnessMap.channel),iridescenceMapUv:oe&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:ae&&m(v.sheenRoughnessMap.channel),specularMapUv:le&&m(v.specularMap.channel),specularColorMapUv:Me&&m(v.specularColorMap.channel),specularIntensityMapUv:N&&m(v.specularIntensityMap.channel),transmissionMapUv:ce&&m(v.transmissionMap.channel),thicknessMapUv:re&&m(v.thicknessMap.channel),alphaMapUv:ve&&m(v.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Ke||Oe),vertexNormals:!!U.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!U.attributes.uv&&(he||ve),fog:!!j,useFog:v.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||U.attributes.normal===void 0&&Ke===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:J,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:de,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:G.filter(Pe=>Pe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:me,decodeVideoTexture:he&&v.map.isVideoTexture===!0&&at.getTransfer(v.map.colorSpace)===gt,decodeVideoTextureEmissive:dt&&v.emissiveMap.isVideoTexture===!0&&at.getTransfer(v.emissiveMap.colorSpace)===gt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Wi,flipSided:v.side===Sn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Qe&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&v.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}l(g,"getParameters");function y(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let L in v.defines)w.push(L),w.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(x(w,v),_(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}l(y,"getProgramCacheKey");function x(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapPMREM),v.push(w.envMapMaxLod),v.push(w.envMapSize),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.diffuseRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.numLightProbeGrids),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}l(x,"getProgramCacheKeyParameters");function _(v,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.diffuseRoughness&&a.enable(25),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),v.push(a.mask)}l(_,"getProgramCacheKeyBooleans");function b(v){let w=f[v.type],L;if(w){let I=$i[w];L=Gr.clone(I.uniforms)}else L=v.uniforms;return L}l(b,"getUniforms");function A(v,w){let L=h.get(w);return L!==void 0?++L.usedTimes:(L=new EE(i,w,v,s),u.push(L),h.set(w,L)),L}l(A,"acquireProgram");function S(v){if(--v.usedTimes===0){let w=u.indexOf(v);u[w]=u[u.length-1],u.pop(),h.delete(v.cacheKey),v.destroy()}}l(S,"releaseProgram");function R(v){o.remove(v)}l(R,"releaseShaderCache");function C(){o.dispose()}return l(C,"dispose"),{getParameters:g,getProgramCacheKey:y,getUniforms:b,acquireProgram:A,releaseProgram:S,releaseShaderCache:R,programs:u,dispose:C}}l(CE,"WebGLPrograms");function RE(){let i=new WeakMap;function e(a){return i.has(a)}l(e,"has");function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}l(t,"get");function n(a){i.delete(a)}l(n,"remove");function s(a,o,c){i.get(a)[o]=c}l(s,"update");function r(){i=new WeakMap}return l(r,"dispose"),{has:e,get:t,remove:n,update:s,dispose:r}}l(RE,"WebGLProperties");function PE(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}l(PE,"painterSortStable");function h_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}l(h_,"reversePainterSortStable");function d_(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}l(r,"init");function a(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}l(a,"materialVariant");function o(f,m,g,y,x,_){let b=i[e];return b===void 0?(b={id:f.id,object:f,geometry:m,material:g,materialVariant:a(f),groupOrder:y,renderOrder:f.renderOrder,z:x,group:_},i[e]=b):(b.id=f.id,b.object=f,b.geometry=m,b.material=g,b.materialVariant=a(f),b.groupOrder=y,b.renderOrder=f.renderOrder,b.z=x,b.group=_),e++,b}l(o,"getNextRenderItem");function c(f,m,g,y,x,_,b){b.reversedDepth===!0&&(x=-x);let A=o(f,m,g,y,x,_);g.transmission>0?n.push(A):g.transparent===!0?s.push(A):t.push(A)}l(c,"push");function u(f,m,g,y,x,_){let b=o(f,m,g,y,x,_);g.transmission>0?n.unshift(b):g.transparent===!0?s.unshift(b):t.unshift(b)}l(u,"unshift");function h(f,m){t.length>1&&t.sort(f||PE),n.length>1&&n.sort(m||h_),s.length>1&&s.sort(m||h_)}l(h,"sort");function p(){for(let f=e,m=i.length;f<m;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return l(p,"finish"),{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:u,finish:p,sort:h}}l(d_,"WebGLRenderList");function IE(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new d_,i.set(n,[a])):s>=r.length?(a=new d_,r.push(a)):a=r[s],a}l(e,"get");function t(){i=new WeakMap}return l(t,"dispose"),{get:e,dispose:t}}l(IE,"WebGLRenderLists");function LE(){let i={};return{get:l(function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new X,color:new ke};break;case"SpotLight":t={position:new X,direction:new X,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new X,halfWidth:new X,halfHeight:new X};break}return i[e.id]=t,t},"get")}}l(LE,"UniformsCache");function DE(){let i={};return{get:l(function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t},"get")}}l(DE,"ShadowUniformsCache");var NE=0;function UE(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}l(UE,"shadowCastingAndTexturingLightsFirst");function FE(i){let e=new LE,t=DE(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new X);let s=new X,r=new _t,a=new _t;function o(u){let h=0,p=0,f=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let m=0,g=0,y=0,x=0,_=0,b=0,A=0,S=0,R=0,C=0,v=0,w=0,L=0,I=0;u.sort(UE);for(let G=0,j=u.length;G<j;G++){let U=u[G],Y=U.color,ie=U.intensity,O=U.distance,Z=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===qi?Z=U.shadow.map.texture:Z=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=Y.r*ie,p+=Y.g*ie,f+=Y.b*ie;else if(U.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(U.sh.coefficients[V],ie);I++}else if(U.isSunLight){let V=e.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let Q=U.shadow,ne=t.get(U);ne.shadowIntensity=Q.intensity,ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[g]=ne,n.sunShadowMap[g]=Z;let de=Q.getViewportCount();for(let ge=0;ge<de;ge++)n.sunShadowMatrix[y+ge]=Q.getMatrix(ge),n.sunShadowCascade[y+ge]=Q._cascadeData[ge];y+=de,g++}n.sun[m]=V,m++}else if(U.isDirectionalLight){let V=e.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let Q=U.shadow,ne=t.get(U);ne.shadowIntensity=Q.intensity,ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,n.directionalShadow[x]=ne,n.directionalShadowMap[x]=Z,n.directionalShadowMatrix[x]=U.shadow.matrix,R++}n.directional[x]=V,x++}else if(U.isSpotLight){let V=e.get(U);V.position.setFromMatrixPosition(U.matrixWorld),V.color.copy(Y).multiplyScalar(ie),V.distance=O,V.coneCos=Math.cos(U.angle),V.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),V.decay=U.decay,n.spot[b]=V;let Q=U.shadow;if(U.map&&(n.spotLightMap[w]=U.map,w++,Q.updateMatrices(U),U.castShadow&&L++),n.spotLightMatrix[b]=Q.matrix,U.castShadow){let ne=t.get(U);ne.shadowIntensity=Q.intensity,ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,n.spotShadow[b]=ne,n.spotShadowMap[b]=Z,v++}b++}else if(U.isRectAreaLight){let V=e.get(U);V.color.copy(Y).multiplyScalar(ie),V.halfWidth.set(U.width*.5,0,0),V.halfHeight.set(0,U.height*.5,0),n.rectArea[A]=V,A++}else if(U.isPointLight){let V=e.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity),V.distance=U.distance,V.decay=U.decay,U.castShadow){let Q=U.shadow,ne=t.get(U);ne.shadowIntensity=Q.intensity,ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,ne.shadowCameraNear=Q.camera.near,ne.shadowCameraFar=Q.camera.far,n.pointShadow[_]=ne,n.pointShadowMap[_]=Z,n.pointShadowMatrix[_]=U.shadow.matrix,C++}n.point[_]=V,_++}else if(U.isHemisphereLight){let V=e.get(U);V.skyColor.copy(U.color).multiplyScalar(ie),V.groundColor.copy(U.groundColor).multiplyScalar(ie),n.hemi[S]=V,S++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=f;let F=n.hash;(F.sunLength!==m||F.directionalLength!==x||F.pointLength!==_||F.spotLength!==b||F.rectAreaLength!==A||F.hemiLength!==S||F.numSunShadows!==g||F.numDirectionalShadows!==R||F.numPointShadows!==C||F.numSpotShadows!==v||F.numSpotMaps!==w||F.numLightProbes!==I)&&(n.sun.length=m,n.directional.length=x,n.spot.length=b,n.rectArea.length=A,n.point.length=_,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=C,n.pointShadowMap.length=C,n.pointShadowMatrix.length=C,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+w-L,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=I,F.sunLength=m,F.directionalLength=x,F.pointLength=_,F.spotLength=b,F.rectAreaLength=A,F.hemiLength=S,F.numSunShadows=g,F.numDirectionalShadows=R,F.numPointShadows=C,F.numSpotShadows=v,F.numSpotMaps=w,F.numLightProbes=I,n.version=NE++)}l(o,"setup");function c(u,h){let p=0,f=0,m=0,g=0,y=0,x=0,_=h.matrixWorldInverse;for(let b=0,A=u.length;b<A;b++){let S=u[b];if(S.isSunLight){let R=n.sun[p];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(_),p++}else if(S.isDirectionalLight){let R=n.directional[f];R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(_),f++}else if(S.isSpotLight){let R=n.spot[g];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(_),R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(_),g++}else if(S.isRectAreaLight){let R=n.rectArea[y];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(_),a.identity(),r.copy(S.matrixWorld),r.premultiply(_),a.extractRotation(r),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),y++}else if(S.isPointLight){let R=n.point[m];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(_),m++}else if(S.isHemisphereLight){let R=n.hemi[x];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(_),x++}}}return l(c,"setupView"),{setup:o,setupView:c,state:n}}l(FE,"WebGLLights");function f_(i){let e=new FE(i),t=[],n=[],s=[];function r(p){h.camera=p,t.length=0,n.length=0,s.length=0}l(r,"init");function a(p){p.isLightProbeGrid?s.push(p):t.push(p)}l(a,"pushLight");function o(p){n.push(p)}l(o,"pushShadow");function c(){e.setup(t),s.sort((p,f)=>p.priority-f.priority||p.id-f.id)}l(c,"setupLights");function u(p){e.setupView(t,p)}l(u,"setupLightsView");let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o}}l(f_,"WebGLRenderState");function OE(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new f_(i),e.set(s,[o])):r>=a.length?(o=new f_(i),a.push(o)):o=a[r],o}l(t,"get");function n(){e=new WeakMap}return l(n,"dispose"),{get:t,dispose:n}}l(OE,"WebGLRenderStates");var BE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kE=`uniform sampler2D shadow_pass;
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
}`,zE=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],GE=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],p_=new _t,wl=new X,xm=new X;function VE(i,e,t){let n=new js,s=new We,r=new We,a=new Rt,o=new wu,c=new Eu,u={},h=t.maxTextureSize,p={[rr]:Sn,[Sn]:rr,[Wi]:Wi},f=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:BE,fragmentShader:kE}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new Ut;g.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new vt(g,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ml;let _=this.type;this.render=function(C,v,w){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||C.length===0)return;this.type===nh&&(qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ml);let L=i.getRenderTarget(),I=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Ur),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let j=_!==this.type;j&&v.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(Y=>Y.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,Y=C.length;U<Y;U++){let ie=C[U],O=ie.shadow;if(O===void 0){qe("WebGLShadowMap:",ie,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let Z=O.getFrameExtents();s.multiply(Z),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,O.mapSize.y=r.y));let V=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=V,O.map===null||j===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Ya){if(ie.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Nn(s.x,s.y,{format:qi,type:Bn,minFilter:Gt,magFilter:Gt,generateMipmaps:!1}),O.map.texture.name=ie.name+".shadowMap",O.map.depthTexture=new Es(s.x,s.y,vi),O.map.depthTexture.name=ie.name+".shadowMapDepth",O.map.depthTexture.format=bs,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=zt,O.map.depthTexture.magFilter=zt}else ie.isPointLight?(O.map=new Al(s.x),O.map.depthTexture=new rl(s.x,_i)):(O.map=new Nn(s.x,s.y),O.map.depthTexture=new Es(s.x,s.y,_i)),O.map.depthTexture.name=ie.name+".shadowMap",O.map.depthTexture.format=bs,this.type===ml?(O.map.depthTexture.compareFunction=V?$f:Yf,O.map.depthTexture.minFilter=Gt,O.map.depthTexture.magFilter=Gt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=zt,O.map.depthTexture.magFilter=zt);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let Q=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();ie.isPointLight!==!0&&O.updateMatrices(ie,w);let ne=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:w.layers;for(let de=0;de<Q;de++){let ge=O.getCamera(de);if(ie.isPointLight){let ee=O.camera,pe=O.matrix,ue=ie.distance||ee.far;ue!==ee.far&&(ee.far=ue,ee.updateProjectionMatrix()),wl.setFromMatrixPosition(ie.matrixWorld),ee.position.copy(wl),xm.copy(ee.position),xm.add(zE[de]),ee.up.copy(GE[de]),ee.lookAt(xm),ee.updateMatrixWorld(),pe.makeTranslation(-wl.x,-wl.y,-wl.z),p_.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),O._frustum.setFromProjectionMatrix(p_,ee.coordinateSystem,ee.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,de),i.clear();else{de===0&&(i.setRenderTarget(O.map),i.clear());let ee=O.getViewport(de);a.set(r.x*ee.x,r.y*ee.y,r.x*ee.z,r.y*ee.w),G.viewport(a)}n=O.getFrustum(de),S(v,w,ge,ie,ne,this.type)}O.isPointLightShadow!==!0&&this.type===Ya&&b(O,w),O.needsUpdate=!1}_=this.type,x.needsUpdate=!1,i.setRenderTarget(L,I,F)};function b(C,v){let w=e.update(y);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null?C.mapPass=new Nn(s.x,s.y,{format:qi,type:Bn}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),f.uniforms.shadow_pass.value=C.map.depthTexture,f.uniforms.resolution.value.set(C.map.width,C.map.height),f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(v,null,w,f,y,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value.set(C.map.width,C.map.height),m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(v,null,w,m,y,null)}l(b,"VSMPass");function A(C,v,w,L){let I=null,F=w.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(F!==void 0)I=F;else if(I=w.isPointLight===!0?c:o,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let G=I.uuid,j=v.uuid,U=u[G];U===void 0&&(U={},u[G]=U);let Y=U[j];Y===void 0&&(Y=I.clone(),U[j]=Y,v.addEventListener("dispose",R)),I=Y}if(I.visible=v.visible,I.wireframe=v.wireframe,L===Ya?I.side=v.shadowSide!==null?v.shadowSide:v.side:I.side=v.shadowSide!==null?v.shadowSide:p[v.side],I.alphaMap=v.alphaMap,I.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,I.map=v.map,I.clipShadows=v.clipShadows,I.clippingPlanes=v.clippingPlanes,I.clipIntersection=v.clipIntersection,I.displacementMap=v.displacementMap,I.displacementScale=v.displacementScale,I.displacementBias=v.displacementBias,I.wireframeLinewidth=v.wireframeLinewidth,I.linewidth=v.linewidth,w.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let G=i.properties.get(I);G.light=w}return I}l(A,"getDepthMaterial");function S(C,v,w,L,I,F){if(C.visible===!1)return;if(C.layers.test(I)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&F===Ya)&&(!C.frustumCulled||C.intersectsFrustum(n))){C.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,C.matrixWorld);let U=e.update(C),Y=C.material;if(Array.isArray(Y)){let ie=U.groups;for(let O=0,Z=ie.length;O<Z;O++){let V=ie[O],Q=Y[V.materialIndex];if(Q&&Q.visible){let ne=A(C,Q,L,F);C.onBeforeShadow(i,C,v,w,U,ne,V),i.renderBufferDirect(w,null,U,ne,C,V),C.onAfterShadow(i,C,v,w,U,ne,V)}}}else if(Y.visible){let ie=A(C,Y,L,F);C.onBeforeShadow(i,C,v,w,U,ie,null),i.renderBufferDirect(w,null,U,ie,C,null),C.onAfterShadow(i,C,v,w,U,ie,null)}}let j=C.children;for(let U=0,Y=j.length;U<Y;U++)S(j[U],v,w,L,I,F)}l(S,"renderObject");function R(C){C.target.removeEventListener("dispose",R);for(let w in u){let L=u[w],I=C.target.uuid;I in L&&(L[I].dispose(),delete L[I])}}l(R,"onMaterialDispose")}l(VE,"WebGLShadowMap");function HE(i,e){function t(){let N=!1,ce=new Rt,re=null,Se=new Rt(0,0,0,0);return{setMask:l(function(ve){re!==ve&&!N&&(i.colorMask(ve,ve,ve,ve),re=ve)},"setMask"),setLocked:l(function(ve){N=ve},"setLocked"),setClear:l(function(ve,be,Ge,Qe,me){me===!0&&(ve*=Qe,be*=Qe,Ge*=Qe),ce.set(ve,be,Ge,Qe),Se.equals(ce)===!1&&(i.clearColor(ve,be,Ge,Qe),Se.copy(ce))},"setClear"),reset:l(function(){N=!1,re=null,Se.set(-1,0,0,0)},"reset")}}l(t,"ColorBuffer");function n(){let N=!1,ce=!1,re=null,Se=null,ve=null;return{setReversed:l(function(be){if(ce!==be){let Ge=e.get("EXT_clip_control");be?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),ce=be;let Qe=ve;ve=null,this.setClear(Qe)}},"setReversed"),getReversed:l(function(){return ce},"getReversed"),setTest:l(function(be){be?J(i.DEPTH_TEST):se(i.DEPTH_TEST)},"setTest"),setMask:l(function(be){re!==be&&!N&&(i.depthMask(be),re=be)},"setMask"),setFunc:l(function(be){if(ce&&(be=zx[be]),Se!==be){switch(be){case au:i.depthFunc(i.NEVER);break;case ou:i.depthFunc(i.ALWAYS);break;case lu:i.depthFunc(i.LESS);break;case Ba:i.depthFunc(i.LEQUAL);break;case cu:i.depthFunc(i.EQUAL);break;case uu:i.depthFunc(i.GEQUAL);break;case hu:i.depthFunc(i.GREATER);break;case du:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Se=be}},"setFunc"),setLocked:l(function(be){N=be},"setLocked"),setClear:l(function(be){ve!==be&&(ve=be,ce&&(be=1-be),i.clearDepth(be))},"setClear"),reset:l(function(){N=!1,re=null,Se=null,ve=null,ce=!1},"reset")}}l(n,"DepthBuffer");function s(){let N=!1,ce=null,re=null,Se=null,ve=null,be=null,Ge=null,Qe=null,me=null;return{setTest:l(function(He){N||(He?J(i.STENCIL_TEST):se(i.STENCIL_TEST))},"setTest"),setMask:l(function(He){ce!==He&&!N&&(i.stencilMask(He),ce=He)},"setMask"),setFunc:l(function(He,je,Pe){(re!==He||Se!==je||ve!==Pe)&&(i.stencilFunc(He,je,Pe),re=He,Se=je,ve=Pe)},"setFunc"),setOp:l(function(He,je,Pe){(be!==He||Ge!==je||Qe!==Pe)&&(i.stencilOp(He,je,Pe),be=He,Ge=je,Qe=Pe)},"setOp"),setLocked:l(function(He){N=He},"setLocked"),setClear:l(function(He){me!==He&&(i.clearStencil(He),me=He)},"setClear"),reset:l(function(){N=!1,ce=null,re=null,Se=null,ve=null,be=null,Ge=null,Qe=null,me=null},"reset")}}l(s,"StencilBuffer");let r=new t,a=new n,o=new s,c={},u=new WeakMap,h={},p={},f={},m=new WeakMap,g=[],y=null,x=!1,_=null,b=null,A=null,S=null,R=null,C=null,v=null,w=new ke(0,0,0),L=0,I=!1,F=null,G=null,j=null,U=null,Y=null,ie=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,Z=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),O=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),O=Z>=2);let Q=null,ne={},de=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),ee=new Rt().fromArray(de),pe=new Rt().fromArray(ge);function ue(N,ce,re,Se){let ve=new Uint8Array(4),be=i.createTexture();i.bindTexture(N,be),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ge=0;Ge<re;Ge++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,Se,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(ce+Ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return be}l(ue,"createTexture");let H={};H[i.TEXTURE_2D]=ue(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc(Ba),mt(!1),Ke(Af),J(i.CULL_FACE),it(Ur);function J(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}l(J,"enable");function se(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}l(se,"disable");function xe(N,ce){return f[N]!==ce?(i.bindFramebuffer(N,ce),f[N]=ce,N===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ce),N===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ce),!0):!1}l(xe,"bindFramebuffer");function he(N,ce){let re=g,Se=!1;if(N){re=m.get(ce),re===void 0&&(re=[],m.set(ce,re));let ve=N.textures;if(re.length!==ve.length||re[0]!==i.COLOR_ATTACHMENT0){for(let be=0,Ge=ve.length;be<Ge;be++)re[be]=i.COLOR_ATTACHMENT0+be;re.length=ve.length,Se=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,Se=!0);Se&&i.drawBuffers(re)}l(he,"drawBuffers");function Re(N){return y!==N?(i.useProgram(N),y=N,!0):!1}l(Re,"useProgram");let Ve={[Fr]:i.FUNC_ADD,[cx]:i.FUNC_SUBTRACT,[ux]:i.FUNC_REVERSE_SUBTRACT};Ve[hx]=i.MIN,Ve[dx]=i.MAX;let Fe={[fx]:i.ZERO,[px]:i.ONE,[mx]:i.SRC_COLOR,[Pf]:i.SRC_ALPHA,[bx]:i.SRC_ALPHA_SATURATE,[vx]:i.DST_COLOR,[xx]:i.DST_ALPHA,[gx]:i.ONE_MINUS_SRC_COLOR,[If]:i.ONE_MINUS_SRC_ALPHA,[yx]:i.ONE_MINUS_DST_COLOR,[_x]:i.ONE_MINUS_DST_ALPHA,[Mx]:i.CONSTANT_COLOR,[Sx]:i.ONE_MINUS_CONSTANT_COLOR,[wx]:i.CONSTANT_ALPHA,[Ex]:i.ONE_MINUS_CONSTANT_ALPHA};function it(N,ce,re,Se,ve,be,Ge,Qe,me,He){if(N===Ur){x===!0&&(se(i.BLEND),x=!1);return}if(x===!1&&(J(i.BLEND),x=!0),N!==lx){if(N!==_||He!==I){if((b!==Fr||R!==Fr)&&(i.blendEquation(i.FUNC_ADD),b=Fr,R=Fr),He)switch(N){case $a:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tf:i.blendFunc(i.ONE,i.ONE);break;case Cf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rf:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ye("WebGLState: Invalid blending: ",N);break}else switch(N){case $a:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tf:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Cf:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rf:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",N);break}A=null,S=null,C=null,v=null,w.set(0,0,0),L=0,_=N,I=He}return}ve=ve||ce,be=be||re,Ge=Ge||Se,(ce!==b||ve!==R)&&(i.blendEquationSeparate(Ve[ce],Ve[ve]),b=ce,R=ve),(re!==A||Se!==S||be!==C||Ge!==v)&&(i.blendFuncSeparate(Fe[re],Fe[Se],Fe[be],Fe[Ge]),A=re,S=Se,C=be,v=Ge),(Qe.equals(w)===!1||me!==L)&&(i.blendColor(Qe.r,Qe.g,Qe.b,me),w.copy(Qe),L=me),_=N,I=!1}l(it,"setBlending");function ut(N,ce){N.side===Wi?se(i.CULL_FACE):J(i.CULL_FACE);let re=N.side===Sn;ce&&(re=!re),mt(re),N.blending===$a&&N.transparent===!1?it(Ur):it(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let Se=N.stencilWrite;o.setTest(Se),Se&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),dt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):se(i.SAMPLE_ALPHA_TO_COVERAGE)}l(ut,"setMaterial");function mt(N){F!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),F=N)}l(mt,"setFlipSided");function Ke(N){N!==ax?(J(i.CULL_FACE),N!==G&&(N===Af?i.cullFace(i.BACK):N===ox?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):se(i.CULL_FACE),G=N}l(Ke,"setCullFace");function It(N){N!==j&&(O&&i.lineWidth(N),j=N)}l(It,"setLineWidth");function dt(N,ce,re){N?(J(i.POLYGON_OFFSET_FILL),(U!==ce||Y!==re)&&(U=ce,Y=re,a.getReversed()&&(ce=-ce,re=-re),i.polygonOffset(ce,re))):se(i.POLYGON_OFFSET_FILL)}l(dt,"setPolygonOffset");function yt(N){N?J(i.SCISSOR_TEST):se(i.SCISSOR_TEST)}l(yt,"setScissorTest");function Ct(N){N===void 0&&(N=i.TEXTURE0+ie-1),Q!==N&&(i.activeTexture(N),Q=N)}l(Ct,"activeTexture");function Oe(N,ce,re){re===void 0&&(Q===null?re=i.TEXTURE0+ie-1:re=Q);let Se=ne[re];Se===void 0&&(Se={type:void 0,texture:void 0},ne[re]=Se),(Se.type!==N||Se.texture!==ce)&&(Q!==re&&(i.activeTexture(re),Q=re),i.bindTexture(N,ce||H[N]),Se.type=N,Se.texture=ce)}l(Oe,"bindTexture");function k(){let N=ne[Q];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}l(k,"unbindTexture");function Nt(){try{i.compressedTexImage2D(...arguments)}catch(N){Ye("WebGLState:",N)}}l(Nt,"compressedTexImage2D");function lt(){try{i.compressedTexImage3D(...arguments)}catch(N){Ye("WebGLState:",N)}}l(lt,"compressedTexImage3D");function tt(){try{i.texSubImage2D(...arguments)}catch(N){Ye("WebGLState:",N)}}l(tt,"texSubImage2D");function _e(){try{i.texSubImage3D(...arguments)}catch(N){Ye("WebGLState:",N)}}l(_e,"texSubImage3D");function ft(){try{i.compressedTexSubImage2D(...arguments)}catch(N){Ye("WebGLState:",N)}}l(ft,"compressedTexSubImage2D");function ze(){try{i.compressedTexSubImage3D(...arguments)}catch(N){Ye("WebGLState:",N)}}l(ze,"compressedTexSubImage3D");function Xe(){try{i.texStorage2D(...arguments)}catch(N){Ye("WebGLState:",N)}}l(Xe,"texStorage2D");function P(){try{i.texStorage3D(...arguments)}catch(N){Ye("WebGLState:",N)}}l(P,"texStorage3D");function M(){try{i.texImage2D(...arguments)}catch(N){Ye("WebGLState:",N)}}l(M,"texImage2D");function q(){try{i.texImage3D(...arguments)}catch(N){Ye("WebGLState:",N)}}l(q,"texImage3D");function fe(N){return p[N]!==void 0?p[N]:i.getParameter(N)}l(fe,"getParameter");function oe(N,ce){p[N]!==ce&&(i.pixelStorei(N,ce),p[N]=ce)}l(oe,"pixelStorei");function ye(N){ee.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ee.copy(N))}l(ye,"scissor");function Ee(N){pe.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),pe.copy(N))}l(Ee,"viewport");function ae(N,ce){let re=u.get(ce);re===void 0&&(re=new WeakMap,u.set(ce,re));let Se=re.get(N);Se===void 0&&(Se=i.getUniformBlockIndex(ce,N.name),i.uniformBlockBinding(ce,Se,Se),re.set(N,Se))}l(ae,"updateUBOMapping");function le(N,ce,re){let ve=u.get(ce).get(N);c[ve]!==re&&(i.bindBufferBase(i.UNIFORM_BUFFER,ve,re),c[ve]=re)}l(le,"uniformBlockBinding");function Me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},Q=null,ne={},f={},c={},m=new WeakMap,g=[],y=null,x=!1,_=null,b=null,A=null,S=null,R=null,C=null,v=null,w=new ke(0,0,0),L=0,I=!1,F=null,G=null,j=null,U=null,Y=null,ee.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return l(Me,"reset"),{buffers:{color:r,depth:a,stencil:o},enable:J,disable:se,bindFramebuffer:xe,drawBuffers:he,useProgram:Re,setBlending:it,setMaterial:ut,setFlipSided:mt,setCullFace:Ke,setLineWidth:It,setPolygonOffset:dt,setScissorTest:yt,activeTexture:Ct,bindTexture:Oe,unbindTexture:k,compressedTexImage2D:Nt,compressedTexImage3D:lt,texImage2D:M,texImage3D:q,pixelStorei:oe,getParameter:fe,updateUBOMapping:ae,uniformBlockBinding:le,texStorage2D:Xe,texStorage3D:P,texSubImage2D:tt,texSubImage3D:_e,compressedTexSubImage2D:ft,compressedTexSubImage3D:ze,scissor:ye,viewport:Ee,reset:Me}}l(HE,"WebGLState");function WE(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new We,h=new WeakMap,p=new Set,f,m=new WeakMap,g=new Set,y=new FinalizationRegistry(P=>g.delete(P)),x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,M){return x?new OffscreenCanvas(P,M):Jo("canvas")}l(_,"createCanvas");function b(P,M,q){let fe=1,oe=Xe(P);if((oe.width>q||oe.height>q)&&(fe=q/Math.max(oe.width,oe.height)),fe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ye=Math.floor(fe*oe.width),Ee=Math.floor(fe*oe.height);f===void 0&&(f=_(ye,Ee));let ae=M?_(ye,Ee):f;return ae.width=ye,ae.height=Ee,ae.getContext("2d").drawImage(P,0,0,ye,Ee),qe("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ye+"x"+Ee+")."),ae}else return"data"in P&&qe("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),P;return P}l(b,"resizeImage");function A(P){return P.generateMipmaps}l(A,"textureNeedsGenerateMipmaps");function S(P){i.generateMipmap(P)}l(S,"generateMipmap");function R(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}l(R,"getTargetType");function C(P,M,q,fe,oe,ye=!1){if(P!==null){if(i[P]!==void 0)return i[P];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Ee;fe&&(Ee=e.get("EXT_texture_norm16"),Ee||qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ae=M;if(M===i.RED&&(q===i.FLOAT&&(ae=i.R32F),q===i.HALF_FLOAT&&(ae=i.R16F),q===i.UNSIGNED_BYTE&&(ae=i.R8),q===i.UNSIGNED_SHORT&&Ee&&(ae=Ee.R16_EXT),q===i.SHORT&&Ee&&(ae=Ee.R16_SNORM_EXT)),M===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(ae=i.R8UI),q===i.UNSIGNED_SHORT&&(ae=i.R16UI),q===i.UNSIGNED_INT&&(ae=i.R32UI),q===i.BYTE&&(ae=i.R8I),q===i.SHORT&&(ae=i.R16I),q===i.INT&&(ae=i.R32I)),M===i.RG&&(q===i.FLOAT&&(ae=i.RG32F),q===i.HALF_FLOAT&&(ae=i.RG16F),q===i.UNSIGNED_BYTE&&(ae=i.RG8),q===i.UNSIGNED_SHORT&&Ee&&(ae=Ee.RG16_EXT),q===i.SHORT&&Ee&&(ae=Ee.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(ae=i.RG8UI),q===i.UNSIGNED_SHORT&&(ae=i.RG16UI),q===i.UNSIGNED_INT&&(ae=i.RG32UI),q===i.BYTE&&(ae=i.RG8I),q===i.SHORT&&(ae=i.RG16I),q===i.INT&&(ae=i.RG32I)),M===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(ae=i.RGB8UI),q===i.UNSIGNED_SHORT&&(ae=i.RGB16UI),q===i.UNSIGNED_INT&&(ae=i.RGB32UI),q===i.BYTE&&(ae=i.RGB8I),q===i.SHORT&&(ae=i.RGB16I),q===i.INT&&(ae=i.RGB32I)),M===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(ae=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(ae=i.RGBA16UI),q===i.UNSIGNED_INT&&(ae=i.RGBA32UI),q===i.BYTE&&(ae=i.RGBA8I),q===i.SHORT&&(ae=i.RGBA16I),q===i.INT&&(ae=i.RGBA32I)),M===i.RGB&&(q===i.UNSIGNED_SHORT&&Ee&&(ae=Ee.RGB16_EXT),q===i.SHORT&&Ee&&(ae=Ee.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(ae=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(ae=i.R11F_G11F_B10F)),M===i.RGBA){let le=ye?Zo:at.getTransfer(oe);q===i.FLOAT&&(ae=i.RGBA32F),q===i.HALF_FLOAT&&(ae=i.RGBA16F),q===i.UNSIGNED_BYTE&&(ae=le===gt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&Ee&&(ae=Ee.RGBA16_EXT),q===i.SHORT&&Ee&&(ae=Ee.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(ae=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(ae=i.RGB5_A1)}return(ae===i.R16F||ae===i.R32F||ae===i.RG16F||ae===i.RG32F||ae===i.RGBA16F||ae===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}l(C,"getInternalFormat");function v(P,M){let q;return P?M===null||M===_i||M===Br?q=i.DEPTH24_STENCIL8:M===vi?q=i.DEPTH32F_STENCIL8:M===Ja&&(q=i.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===_i||M===Br?q=i.DEPTH_COMPONENT24:M===vi?q=i.DEPTH_COMPONENT32F:M===Ja&&(q=i.DEPTH_COMPONENT16),q}l(v,"getInternalDepthFormat");function w(P,M){return A(P)===!0||P.isFramebufferTexture&&P.minFilter!==zt&&P.minFilter!==Gt?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}l(w,"getMipLevels");function L(P){let M=new WeakRef(P);n.get(P).__ref=M,g.add(M),y.register(P,M,M)}l(L,"track");function I(P){let M=n.get(P).__ref;M!==void 0&&(g.delete(M),y.unregister(M))}l(I,"untrack");function F(P){j(P.target)}l(F,"onTextureDispose");function G(P){U(P.target)}l(G,"onRenderTargetDispose");function j(P){P.removeEventListener("dispose",F),I(P),ie(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&p.delete(P)}l(j,"destroyTexture");function U(P){P.removeEventListener("dispose",G),I(P),Z(P)}l(U,"destroyRenderTarget");function Y(){for(let P of g){let M=P.deref();M!==void 0&&(M.isRenderTarget===!0?U(M):j(M))}g.clear(),p.clear()}l(Y,"dispose");function ie(P){let M=n.get(P);if(M.__webglInit===void 0)return;let q=P.source,fe=m.get(q);if(fe){let oe=fe[M.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&O(P),Object.keys(fe).length===0&&m.delete(q)}n.remove(P)}l(ie,"deallocateTexture");function O(P){let M=n.get(P);i.deleteTexture(M.__webglTexture);let q=P.source,fe=m.get(q);delete fe[M.__cacheKey],a.memory.textures--}l(O,"deleteTexture");function Z(P){let M=n.get(P);M.__depthDisposeCallback&&M.__depthDisposeCallback();let q=P.depthTexture;if(q&&q.renderTarget===P&&j(q),P.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(M.__webglFramebuffer[oe]))for(let ye=0;ye<M.__webglFramebuffer[oe].length;ye++)i.deleteFramebuffer(M.__webglFramebuffer[oe][ye]);else i.deleteFramebuffer(M.__webglFramebuffer[oe]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[oe])}else{if(Array.isArray(M.__webglFramebuffer))for(let oe=0;oe<M.__webglFramebuffer.length;oe++)i.deleteFramebuffer(M.__webglFramebuffer[oe]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let oe=0;oe<M.__webglColorRenderbuffer.length;oe++)M.__webglColorRenderbuffer[oe]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[oe]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let fe=P.textures;for(let oe=0,ye=fe.length;oe<ye;oe++){let Ee=n.get(fe[oe]);Ee.__webglTexture&&(i.deleteTexture(Ee.__webglTexture),a.memory.textures--),n.remove(fe[oe])}n.remove(P)}l(Z,"deallocateRenderTarget");let V=0;function Q(){V=0}l(Q,"resetTextureUnits");function ne(){return V}l(ne,"getTextureUnits");function de(P){V=P}l(de,"setTextureUnits");function ge(){let P=V;return P>=s.maxTextures&&qe("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,P}l(ge,"allocateTextureUnit");function ee(P){let M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.mipmapsAutoUpdate),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}l(ee,"getTextureCacheKey");function pe(P,M){let q=n.get(P);if(P.isVideoTexture&&ft(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&q.__version!==P.version){let fe=P.image;if(fe===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{ut(q,P,M);return}}else P.isExternalTexture&&(q.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+M)}l(pe,"setTexture2D");function ue(P,M){let q=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){ut(q,P,M);return}else P.isExternalTexture&&(q.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+M)}l(ue,"setTexture2DArray");function H(P,M){let q=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){ut(q,P,M);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+M)}l(H,"setTexture3D");function J(P,M){let q=n.get(P);if(P.version>0&&q.__version!==P.version){mt(q,P,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+M)}l(J,"setTextureCube");let se={[Oi]:i.REPEAT,[jn]:i.CLAMP_TO_EDGE,[fu]:i.MIRRORED_REPEAT},xe={[zt]:i.NEAREST,[Cx]:i.NEAREST_MIPMAP_NEAREST,[xl]:i.NEAREST_MIPMAP_LINEAR,[Gt]:i.LINEAR,[rh]:i.LINEAR_MIPMAP_NEAREST,[On]:i.LINEAR_MIPMAP_LINEAR},he={[Lx]:i.NEVER,[Zf]:i.ALWAYS,[Dx]:i.LESS,[Yf]:i.LEQUAL,[Nx]:i.EQUAL,[$f]:i.GEQUAL,[Ux]:i.GREATER,[Fx]:i.NOTEQUAL};function Re(P,M){if(M.type===vi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Gt||M.magFilter===rh||M.magFilter===xl||M.magFilter===On||M.minFilter===Gt||M.minFilter===rh||M.minFilter===xl||M.minFilter===On)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,se[M.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,se[M.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,se[M.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,xe[M.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,xe[M.minFilter]),M.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,he[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===zt||M.minFilter!==xl&&M.minFilter!==On||M.type===vi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}l(Re,"setTextureParameters");function Ve(P,M){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",F),L(M));let fe=M.source,oe=m.get(fe);oe===void 0&&(oe={},m.set(fe,oe));let ye=ee(M);if(ye!==P.__cacheKey){oe[ye]===void 0&&(oe[ye]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),oe[ye].usedTimes++;let Ee=oe[P.__cacheKey];Ee!==void 0&&(oe[P.__cacheKey].usedTimes--,Ee.usedTimes===0&&O(M)),P.__cacheKey=ye,P.__webglTexture=oe[ye].texture}return q}l(Ve,"initTexture");function Fe(P,M,q){return Math.floor(Math.floor(P/q)/M)}l(Fe,"getRow");function it(P,M,q,fe){let ye=P.updateRanges;if(ye.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,q,fe,M.data);else{ye.sort((N,ce)=>N.start-ce.start);let Ee=0;for(let N=1;N<ye.length;N++){let ce=ye[Ee],re=ye[N],Se=ce.start+ce.count,ve=Fe(re.start,M.width,4),be=Fe(ce.start,M.width,4);re.start<=Se+1&&ve===be&&Fe(re.start+re.count-1,M.width,4)===ve?ce.count=Math.max(ce.count,re.start+re.count-ce.start):(++Ee,ye[Ee]=re)}ye.length=Ee+1;let ae=t.getParameter(i.UNPACK_ROW_LENGTH),le=t.getParameter(i.UNPACK_SKIP_PIXELS),Me=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let N=0,ce=ye.length;N<ce;N++){let re=ye[N],Se=Math.floor(re.start/4),ve=Math.ceil(re.count/4),be=Se%M.width,Ge=Math.floor(Se/M.width),Qe=ve,me=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,be),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ge),t.texSubImage2D(i.TEXTURE_2D,0,be,Ge,Qe,me,q,fe,M.data)}P.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ae),t.pixelStorei(i.UNPACK_SKIP_PIXELS,le),t.pixelStorei(i.UNPACK_SKIP_ROWS,Me)}}l(it,"updateTexture");function ut(P,M,q){let fe=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(fe=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(fe=i.TEXTURE_3D);let oe=Ve(P,M),ye=M.source;t.bindTexture(fe,P.__webglTexture,i.TEXTURE0+q);let Ee=n.get(ye);if(ye.version!==Ee.__version||oe===!0){if(t.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let me=at.getPrimaries(at.workingColorSpace),He=M.colorSpace===yi?null:at.getPrimaries(M.colorSpace),je=M.colorSpace===yi||me===He?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,je)}t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let le=b(M.image,!1,s.maxTextureSize);le=ze(M,le);let Me=r.convert(M.format,M.colorSpace),N=r.convert(M.type),ce=C(M.internalFormat,Me,N,M.normalized,M.colorSpace,M.isVideoTexture);Re(fe,M);let re,Se=M.mipmaps,ve=M.isVideoTexture!==!0,be=Ee.__version===void 0||oe===!0,Ge=ye.dataReady,Qe=w(M,le);if(M.isDepthTexture)ce=v(M.format===As,M.type),be&&(ve?t.texStorage2D(i.TEXTURE_2D,1,ce,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,ce,le.width,le.height,0,Me,N,null));else if(M.isDataTexture)if(Se.length>0){ve&&be&&t.texStorage2D(i.TEXTURE_2D,Qe,ce,Se[0].width,Se[0].height);for(let me=0,He=Se.length;me<He;me++)re=Se[me],ve?Ge&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,re.width,re.height,Me,N,re.data):t.texImage2D(i.TEXTURE_2D,me,ce,re.width,re.height,0,Me,N,re.data);M.generateMipmaps=!1}else ve?(be&&t.texStorage2D(i.TEXTURE_2D,Qe,ce,le.width,le.height),Ge&&it(M,le,Me,N)):t.texImage2D(i.TEXTURE_2D,0,ce,le.width,le.height,0,Me,N,le.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ve&&be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Qe,ce,Se[0].width,Se[0].height,le.depth);for(let me=0,He=Se.length;me<He;me++)if(re=Se[me],M.format!==kn)if(Me!==null)if(ve){if(Ge)if(M.layerUpdates.size>0){let je=tp(re.width,re.height,M.format,M.type);for(let Pe of M.layerUpdates){let xt=re.data.subarray(Pe*je/re.data.BYTES_PER_ELEMENT,(Pe+1)*je/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,Pe,re.width,re.height,1,Me,xt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,re.width,re.height,le.depth,Me,re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,ce,re.width,re.height,le.depth,0,re.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ve?Ge&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,re.width,re.height,le.depth,Me,N,re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,me,ce,re.width,re.height,le.depth,0,Me,N,re.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{ve&&be&&t.texStorage2D(i.TEXTURE_2D,Qe,ce,Se[0].width,Se[0].height);for(let me=0,He=Se.length;me<He;me++)re=Se[me],M.format!==kn?Me!==null?ve?Ge&&t.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,re.width,re.height,Me,re.data):t.compressedTexImage2D(i.TEXTURE_2D,me,ce,re.width,re.height,0,re.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?Ge&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,re.width,re.height,Me,N,re.data):t.texImage2D(i.TEXTURE_2D,me,ce,re.width,re.height,0,Me,N,re.data)}else if(M.isDataArrayTexture)if(ve){if(be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Qe,ce,le.width,le.height,le.depth),Ge)if(M.layerUpdates.size>0){let me=tp(le.width,le.height,M.format,M.type);for(let He of M.layerUpdates){let je=le.data.subarray(He*me/le.data.BYTES_PER_ELEMENT,(He+1)*me/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,He,le.width,le.height,1,Me,N,je)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Me,N,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ce,le.width,le.height,le.depth,0,Me,N,le.data);else if(M.isData3DTexture)ve?(be&&t.texStorage3D(i.TEXTURE_3D,Qe,ce,le.width,le.height,le.depth),Ge&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Me,N,le.data)):t.texImage3D(i.TEXTURE_3D,0,ce,le.width,le.height,le.depth,0,Me,N,le.data);else if(M.isFramebufferTexture){if(be)if(ve)t.texStorage2D(i.TEXTURE_2D,Qe,ce,le.width,le.height);else{let me=le.width,He=le.height;for(let je=0;je<Qe;je++)t.texImage2D(i.TEXTURE_2D,je,ce,me,He,0,Me,N,null),me>>=1,He>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let me=i.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),le.parentNode!==me){me.appendChild(le),p.add(M),me.onpaint=He=>{let je=He.changedElements;for(let Pe of p)je.includes(Pe.image)&&(Pe.needsUpdate=!0)},me.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,le);else{let je=i.RGBA,Pe=i.RGBA,xt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,je,Pe,xt,le)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Se.length>0){if(ve&&be){let me=Xe(Se[0]);t.texStorage2D(i.TEXTURE_2D,Qe,ce,me.width,me.height)}for(let me=0,He=Se.length;me<He;me++)re=Se[me],ve?Ge&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Me,N,re):t.texImage2D(i.TEXTURE_2D,me,ce,Me,N,re);M.generateMipmaps=!1}else if(ve){if(be){let me=Xe(le);t.texStorage2D(i.TEXTURE_2D,Qe,ce,me.width,me.height)}Ge&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,N,le)}else t.texImage2D(i.TEXTURE_2D,0,ce,Me,N,le);A(M)&&M.mipmapsAutoUpdate===!0&&S(fe),Ee.__version=ye.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}l(ut,"uploadTexture");function mt(P,M,q){if(M.image.length!==6)return;let fe=Ve(P,M),oe=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+q);let ye=n.get(oe);if(oe.version!==ye.__version||fe===!0){t.activeTexture(i.TEXTURE0+q);let Ee=at.getPrimaries(at.workingColorSpace),ae=M.colorSpace===yi?null:at.getPrimaries(M.colorSpace),le=M.colorSpace===yi||Ee===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let Me=M.isCompressedTexture||M.image[0].isCompressedTexture,N=M.image[0]&&M.image[0].isDataTexture,ce=[];for(let Pe=0;Pe<6;Pe++)!Me&&!N?ce[Pe]=b(M.image[Pe],!0,s.maxCubemapSize):ce[Pe]=N?M.image[Pe].image:M.image[Pe],ce[Pe]=ze(M,ce[Pe]);let re=ce[0],Se=r.convert(M.format,M.colorSpace),ve=r.convert(M.type),be=C(M.internalFormat,Se,ve,M.normalized,M.colorSpace),Ge=M.isVideoTexture!==!0,Qe=ye.__version===void 0||fe===!0,me=oe.dataReady,He=w(M,re);Re(i.TEXTURE_CUBE_MAP,M);let je;if(M.isDepthTexture){if(be=v(M.format===As,M.type),Qe)if(Ge)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,be,re.width,re.height);else for(let Pe=0;Pe<6;Pe++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,be,re.width,re.height,0,Se,ve,null)}else if(Me){Ge&&Qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,He,be,re.width,re.height);for(let Pe=0;Pe<6;Pe++){je=ce[Pe].mipmaps;for(let xt=0;xt<je.length;xt++){let Yt=je[xt];M.format!==kn?Se!==null?Ge?me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,xt,0,0,Yt.width,Yt.height,Se,Yt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,xt,be,Yt.width,Yt.height,0,Yt.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,xt,0,0,Yt.width,Yt.height,Se,ve,Yt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,xt,be,Yt.width,Yt.height,0,Se,ve,Yt.data)}}}else{if(je=M.mipmaps,Ge&&Qe){je.length>0&&He++;let Pe=Xe(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,He,be,Pe.width,Pe.height)}for(let Pe=0;Pe<6;Pe++)if(N){Ge?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,ce[Pe].width,ce[Pe].height,Se,ve,ce[Pe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,be,ce[Pe].width,ce[Pe].height,0,Se,ve,ce[Pe].data);for(let xt=0;xt<je.length;xt++){let ks=je[xt].image[Pe].image;Ge?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,xt+1,0,0,ks.width,ks.height,Se,ve,ks.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,xt+1,be,ks.width,ks.height,0,Se,ve,ks.data)}}else{Ge?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,Se,ve,ce[Pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,be,Se,ve,ce[Pe]);for(let xt=0;xt<je.length;xt++){let Yt=je[xt];Ge?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,xt+1,0,0,Se,ve,Yt.image[Pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,xt+1,be,Se,ve,Yt.image[Pe])}}}A(M)&&M.mipmapsAutoUpdate===!0&&S(i.TEXTURE_CUBE_MAP),ye.__version=oe.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}l(mt,"uploadCubeTexture");function Ke(P,M,q,fe,oe,ye){let Ee=r.convert(q.format,q.colorSpace),ae=r.convert(q.type),le=C(q.internalFormat,Ee,ae,q.normalized,q.colorSpace),Me=n.get(M),N=n.get(q);if(N.__renderTarget=M,!Me.__hasExternalTextures){let ce=Math.max(1,M.width>>ye),re=Math.max(1,M.height>>ye);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,ye,le,ce,re,M.depth,0,Ee,ae,null):t.texImage2D(oe,ye,le,ce,re,0,Ee,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),_e(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,oe,N.__webglTexture,0,tt(M)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,fe,oe,N.__webglTexture,ye),t.bindFramebuffer(i.FRAMEBUFFER,null)}l(Ke,"setupFrameBufferTexture");function It(P,M,q){if(i.bindRenderbuffer(i.RENDERBUFFER,P),M.depthBuffer){let fe=M.depthTexture,oe=fe&&fe.isDepthTexture?fe.type:null,ye=v(M.stencilBuffer,oe),Ee=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;_e(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt(M),ye,M.width,M.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt(M),ye,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ye,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,P)}else{let fe=M.textures;for(let oe=0;oe<fe.length;oe++){let ye=fe[oe],Ee=r.convert(ye.format,ye.colorSpace),ae=r.convert(ye.type),le=C(ye.internalFormat,Ee,ae,ye.normalized,ye.colorSpace);_e(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt(M),le,M.width,M.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt(M),le,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,le,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}l(It,"setupRenderBufferStorage");function dt(P,M,q){let fe=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let oe=n.get(M.depthTexture);oe.__renderTarget=M;let ye=fe?M.depthTexture.image[0]:M.depthTexture.image;(!oe.__webglTexture||ye.width!==M.width||ye.height!==M.height)&&(ye.width=M.width,ye.height=M.height,M.depthTexture.needsUpdate=!0),fe?J(M.depthTexture,0):pe(M.depthTexture,0);let Ee=oe.__webglTexture,ae=tt(M),le=fe?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,Me=M.depthTexture.format===As?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===bs)_e(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Me,le,Ee,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,Me,le,Ee,0);else if(M.depthTexture.format===As)_e(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Me,le,Ee,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,Me,le,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}l(dt,"setupDepthTexture");function yt(P){let M=n.get(P),q=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){let fe=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),fe){let oe=l(()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,fe.removeEventListener("dispose",oe)},"disposeEvent");fe.addEventListener("dispose",oe),M.__depthDisposeCallback=oe}M.__boundDepthTexture=fe}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if(q)for(let fe=0;fe<6;fe++)dt(M.__webglFramebuffer[fe],P,fe);else P.texture.mipmaps.length>0?dt(M.__webglFramebuffer[0],P,0):dt(M.__webglFramebuffer,P,0);else if(q){M.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[fe]),M.__webglDepthbuffer[fe]===void 0)M.__webglDepthbuffer[fe]=i.createRenderbuffer(),It(M.__webglDepthbuffer[fe],P,!1);else{let oe=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=M.__webglDepthbuffer[fe];i.bindRenderbuffer(i.RENDERBUFFER,ye),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,ye)}}else if(P.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),It(M.__webglDepthbuffer,P,!1);else{let oe=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ye),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,ye)}t.bindFramebuffer(i.FRAMEBUFFER,null)}l(yt,"setupDepthRenderbuffer");function Ct(P,M,q){let fe=n.get(P);M!==void 0&&Ke(fe.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&yt(P)}l(Ct,"rebindTextures");function Oe(P){let M=P.texture,q=n.get(P),fe=n.get(M);P.addEventListener("dispose",G),L(P);let oe=P.textures,ye=P.isWebGLCubeRenderTarget===!0,Ee=oe.length>1;if(Ee||(fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture()),fe.__version=M.version,a.memory.textures++),ye){q.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(M.mipmaps.length>0){q.__webglFramebuffer[ae]=[];for(let le=0;le<M.mipmaps.length;le++)q.__webglFramebuffer[ae][le]=i.createFramebuffer()}else q.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(M.mipmaps.length>0){q.__webglFramebuffer=[];for(let ae=0;ae<M.mipmaps.length;ae++)q.__webglFramebuffer[ae]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let ae=0,le=oe.length;ae<le;ae++){let Me=n.get(oe[ae]);Me.__webglTexture===void 0&&(Me.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&_e(P)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ae=0;ae<oe.length;ae++){let le=oe[ae];q.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[ae]);let Me=r.convert(le.format,le.colorSpace),N=r.convert(le.type),ce=C(le.internalFormat,Me,N,le.normalized,le.colorSpace,P.isXRRenderTarget===!0),re=tt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,re,ce,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,q.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),It(q.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ye){t.bindTexture(i.TEXTURE_CUBE_MAP,fe.__webglTexture),Re(i.TEXTURE_CUBE_MAP,M);for(let ae=0;ae<6;ae++)if(M.mipmaps.length>0)for(let le=0;le<M.mipmaps.length;le++)Ke(q.__webglFramebuffer[ae][le],P,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,le);else Ke(q.__webglFramebuffer[ae],P,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);A(M)?S(i.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}else if(Ee){for(let ae=0,le=oe.length;ae<le;ae++){let Me=oe[ae],N=n.get(Me),ce=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ce=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,N.__webglTexture),Re(ce,Me),Ke(q.__webglFramebuffer,P,Me,i.COLOR_ATTACHMENT0+ae,ce,0),A(Me)&&S(ce)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ae=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,fe.__webglTexture),Re(ae,M),M.mipmaps.length>0)for(let le=0;le<M.mipmaps.length;le++)Ke(q.__webglFramebuffer[le],P,M,i.COLOR_ATTACHMENT0,ae,le);else Ke(q.__webglFramebuffer,P,M,i.COLOR_ATTACHMENT0,ae,0);A(M)?S(ae):M.mipmaps.length>0&&i.texParameteri(ae,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}P.depthBuffer&&yt(P)}l(Oe,"setupRenderTarget");function k(P){let M=P.textures;for(let q=0,fe=M.length;q<fe;q++){let oe=M[q];if(A(oe)&&oe.mipmapsAutoUpdate===!0){let ye=R(P),Ee=n.get(oe).__webglTexture;t.bindTexture(ye,Ee),S(ye),t.unbindTexture()}}}l(k,"updateRenderTargetMipmap");let Nt=[];function lt(P){if(P.samples>0){if(_e(P)===!1){let M=P.textures,q=P.width,fe=P.height,oe=i.COLOR_BUFFER_BIT,ye=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(P),ae=M.length>1;if(ae)for(let Me=0;Me<M.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Me=0;Me<M.length;Me++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Me]);let N=n.get(M[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,N,0)}i.blitFramebuffer(0,0,q,fe,0,0,q,fe,oe,i.NEAREST),c===!0&&(Nt.length=0,Nt.push(i.COLOR_ATTACHMENT0+Me),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&Nt.push(ye),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Nt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let Me=0;Me<M.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Me]);let N=n.get(M[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,N,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&c){let M=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}l(lt,"updateMultisampleRenderTarget");function tt(P){return Math.min(s.maxSamples,P.samples)}l(tt,"getRenderTargetSamples");function _e(P){let M=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}l(_e,"useMultisampledRTT");function ft(P){let M=a.render.frame;h.get(P)!==M&&(h.set(P,M),P.update())}l(ft,"updateVideoTexture");function ze(P,M){let q=P.colorSpace,fe=P.format,oe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||q!==$o&&q!==yi&&(at.getTransfer(q)===gt?(fe!==kn||oe!==un)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",q)),M}l(ze,"verifyColorSpace");function Xe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(u.width=P.naturalWidth||P.width,u.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(u.width=P.displayWidth,u.height=P.displayHeight):(u.width=P.width,u.height=P.height),u}l(Xe,"getDimensions"),this.allocateTextureUnit=ge,this.resetTextureUnits=Q,this.getTextureUnits=ne,this.setTextureUnits=de,this.setTexture2D=pe,this.setTexture2DArray=ue,this.setTexture3D=H,this.setTextureCube=J,this.rebindTextures=Ct,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=Ke,this.useMultisampledRTT=_e,this.dispose=Y}l(WE,"WebGLTextures");function XE(i,e){function t(n,s=yi){let r,a=at.getTransfer(s);if(n===un)return i.UNSIGNED_BYTE;if(n===oh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===lh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===zf)return i.BYTE;if(n===Gf)return i.SHORT;if(n===Ja)return i.UNSIGNED_SHORT;if(n===ah)return i.INT;if(n===_i)return i.UNSIGNED_INT;if(n===vi)return i.FLOAT;if(n===Bn)return i.HALF_FLOAT;if(n===Wf)return i.ALPHA;if(n===Xf)return i.RGB;if(n===kn)return i.RGBA;if(n===bs)return i.DEPTH_COMPONENT;if(n===As)return i.DEPTH_STENCIL;if(n===qf)return i.RED;if(n===ch)return i.RED_INTEGER;if(n===qi)return i.RG;if(n===uh)return i.RG_INTEGER;if(n===hh)return i.RGBA_INTEGER;if(n===_l||n===vl||n===yl||n===bl)if(a===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_l)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_l)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===dh||n===fh||n===ph||n===mh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===dh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ph)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gh||n===xh||n===_h||n===vh||n===yh||n===Ml||n===bh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===gh||n===xh)return a===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_h)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===vh)return r.COMPRESSED_R11_EAC;if(n===yh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ml)return r.COMPRESSED_RG11_EAC;if(n===bh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Mh||n===Sh||n===wh||n===Eh||n===Ah||n===Th||n===Ch||n===Rh||n===Ph||n===Ih||n===Lh||n===Dh||n===Nh||n===Uh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Mh)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sh)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wh)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Eh)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ah)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Th)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ch)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Rh)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ph)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ih)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Lh)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Dh)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nh)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uh)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fh||n===Oh||n===Bh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Fh)return a===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kh||n===zh||n===Sl||n===Gh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===kh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===zh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Br?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return l(t,"convert"),{convert:t}}l(XE,"WebGLUtils");var qE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YE=`
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

}`,Dm=class Dm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new al(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Mn({vertexShader:qE,fragmentShader:YE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vt(new Hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};l(Dm,"WebXRDepthSensing");var wm=Dm,Nm=class Nm extends Bi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,u=null,h=null,p=null,f=null,m=null,g=null,y=typeof XRWebGLBinding<"u",x=new wm,_={},b=t.getContextAttributes(),A=null,S=null,R=[],C=[],v=new We,w=null,L=null,I=new vn;I.viewport=new Rt;let F=new vn;F.viewport=new Rt;let G=[I,F],j=new Ou,U=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let pe=R[ee];return pe===void 0&&(pe=new Va,R[ee]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(ee){let pe=R[ee];return pe===void 0&&(pe=new Va,R[ee]=pe),pe.getGripSpace()},this.getHand=function(ee){let pe=R[ee];return pe===void 0&&(pe=new Va,R[ee]=pe),pe.getHandSpace()};function ie(ee){let pe=C.indexOf(ee.inputSource);if(pe===-1)return;let ue=R[pe];ue!==void 0&&(ue.update(ee.inputSource,ee.frame,u||a),ue.dispatchEvent({type:ee.type,data:ee.inputSource}))}l(ie,"onSessionEvent");function O(){s.removeEventListener("select",ie),s.removeEventListener("selectstart",ie),s.removeEventListener("selectend",ie),s.removeEventListener("squeeze",ie),s.removeEventListener("squeezestart",ie),s.removeEventListener("squeezeend",ie),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",Z);for(let ee=0;ee<R.length;ee++){let pe=C[ee];pe!==null&&(C[ee]=null,R[ee].disconnect(pe))}U=null,Y=null,x.reset();for(let ee in _)delete _[ee];if(e.setRenderTarget(A),m=null,f=null,p=null,s=null,S=null,ge.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(v.width,v.height,!1),L!==null){let ee=L.camera;ee.fov=L.fov,ee.zoom=L.zoom,ee.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}l(O,"onSessionEnd"),this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(ee){u=ee},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p===null&&y&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",ie),s.addEventListener("selectstart",ie),s.addEventListener("selectend",ie),s.addEventListener("squeeze",ie),s.addEventListener("squeezestart",ie),s.addEventListener("squeezeend",ie),s.addEventListener("end",O),s.addEventListener("inputsourceschange",Z),b.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(v),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,H=null,J=null;b.depth&&(J=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=b.stencil?As:bs,H=b.stencil?Br:_i);let se={colorFormat:t.RGBA8,depthFormat:J,scaleFactor:r};p=this.getBinding(),f=p.createProjectionLayer(se),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Nn(f.textureWidth,f.textureHeight,{format:kn,type:un,depthTexture:new Es(f.textureWidth,f.textureHeight,H,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ue={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new Nn(m.framebufferWidth,m.framebufferHeight,{format:kn,type:un,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await s.requestReferenceSpace(o),ge.setContext(s),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(ee){for(let pe=0;pe<ee.removed.length;pe++){let ue=ee.removed[pe],H=C.indexOf(ue);H>=0&&(C[H]=null,R[H].disconnect(ue))}for(let pe=0;pe<ee.added.length;pe++){let ue=ee.added[pe],H=C.indexOf(ue);if(H===-1){for(let se=0;se<R.length;se++)if(se>=C.length){C.push(ue),H=se;break}else if(C[se]===null){C[se]=ue,H=se;break}if(H===-1)break}let J=R[H];J&&J.connect(ue)}}l(Z,"onInputSourcesChange");function V(ee,pe){pe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(pe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}l(V,"updateCamera"),this.updateCamera=function(ee){if(s===null)return;let pe=ee.near,ue=ee.far;x.texture!==null&&(x.depthNear>0&&(pe=x.depthNear),x.depthFar>0&&(ue=x.depthFar)),j.near=F.near=I.near=pe,j.far=F.far=I.far=ue,(U!==j.near||Y!==j.far)&&(s.updateRenderState({depthNear:j.near,depthFar:j.far}),U=j.near,Y=j.far),j.layers.mask=ee.layers.mask|6,I.layers.mask=j.layers.mask&-5,F.layers.mask=j.layers.mask&-3;let H=ee.parent,J=j.cameras;V(j,H);for(let se=0;se<J.length;se++)V(J[se],H);j.projectionMatrix.copy(I.projectionMatrix),j.projectionMatrixInverse.copy(I.projectionMatrixInverse),L===null&&ee.isPerspectiveCamera&&(L={camera:ee,fov:ee.fov,zoom:ee.zoom}),Q(ee,j,H)};function Q(ee,pe,ue){ue===null?ee.matrix.copy(pe.matrixWorld):(ee.matrix.copy(ue.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(pe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(pe.projectionMatrix),ee.projectionMatrixInverse.copy(pe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=mu*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}l(Q,"updateUserCamera"),this.getCamera=function(){return j},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(ee){c=ee,f!==null&&(f.fixedFoveation=ee),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ee)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(j)},this.getCameraTexture=function(ee){return _[ee]};let ne=null;function de(ee,pe){if(h=pe.getViewerPose(u||a),g=pe,h!==null){let ue=h.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let H=!1;ue.length!==j.cameras.length&&(j.cameras.length=0,H=!0);for(let he=0;he<ue.length;he++){let Re=ue[he],Ve=null;if(m!==null)Ve=m.getViewport(Re);else{let it=p.getViewSubImage(f,Re);Ve=it.viewport,he===0&&(e.setRenderTargetTextures(S,it.colorTexture,it.depthStencilTexture),e.setRenderTarget(S))}let Fe=G[he];Fe===void 0&&(Fe=new vn,Fe.layers.enable(he),Fe.viewport=new Rt,G[he]=Fe),Fe.matrix.fromArray(Re.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Re.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),he===0&&(j.matrix.copy(Fe.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),H===!0&&j.cameras.push(Fe)}let J=s.enabledFeatures;if(J&&J.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){p=n.getBinding();let he=p.getDepthInformation(ue[0]);he&&he.isValid&&he.texture&&x.init(he,s.renderState)}if(J&&J.includes("camera-access")&&y){e.state.unbindTexture(),p=n.getBinding();for(let he=0;he<ue.length;he++){let Re=ue[he].camera;if(Re){let Ve=_[Re];Ve||(Ve=new al,_[Re]=Ve);let Fe=p.getCameraImage(Re);Ve.sourceTexture=Fe}}}}for(let ue=0;ue<R.length;ue++){let H=C[ue],J=R[ue];H!==null&&J!==void 0&&J.update(H,pe,u||a)}ne&&ne(ee,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),g=null}l(de,"onAnimationFrame");let ge=new m_;ge.setAnimationLoop(de),this.setAnimationLoop=function(ee){ne=ee},this.dispose=function(){}}};l(Nm,"WebXRManager");var Em=Nm,$E=new _t,E_=new $e;E_.set(-1,0,0,0,1,0,0,0,1);function ZE(i,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}l(t,"refreshTransformUniform");function n(x,_){_.color.getRGB(x.fogColor.value,jf(i)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}l(n,"refreshFogUniforms");function s(x,_,b,A,S){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?r(x,_):_.isMeshLambertMaterial?(r(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(r(x,_),p(x,_)):_.isMeshPhongMaterial?(r(x,_),h(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(r(x,_),f(x,_),_.isMeshPhysicalMaterial&&m(x,_,S)):_.isMeshMatcapMaterial?(r(x,_),g(x,_)):_.isMeshDepthMaterial?r(x,_):_.isMeshDistanceMaterial?(r(x,_),y(x,_)):_.isMeshNormalMaterial?r(x,_):_.isLineBasicMaterial?(a(x,_),_.isLineDashedMaterial&&o(x,_)):_.isPointsMaterial?c(x,_,b,A):_.isSpriteMaterial?u(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}l(s,"refreshMaterialUniforms");function r(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===Sn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===Sn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);let b=e.get(_),A=b.envMap,S=b.envMapRotation;A&&(x.envMap.value=A,x.envMapRotation.value.setFromMatrix4($E.makeRotationFromEuler(S)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(E_),x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}l(r,"refreshUniformsCommon");function a(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}l(a,"refreshUniformsLine");function o(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}l(o,"refreshUniformsDash");function c(x,_,b,A){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*b,x.scale.value=A*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}l(c,"refreshUniformsPoints");function u(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}l(u,"refreshUniformsSprites");function h(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}l(h,"refreshUniformsPhong");function p(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}l(p,"refreshUniformsToon");function f(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}l(f,"refreshUniformsStandard");function m(x,_,b){x.ior.value=_.ior,_.diffuseRoughness>0&&(x.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=_.diffuseRoughnessMap,t(_.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Sn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.retroreflectivity>0&&(x.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=b.texture,x.transmissionSamplerSize.value.set(b.width,b.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}l(m,"refreshUniformsPhysical");function g(x,_){_.matcap&&(x.matcap.value=_.matcap)}l(g,"refreshUniformsMatcap");function y(x,_){let b=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(b.matrixWorld),x.nearDistance.value=b.shadow.camera.near,x.farDistance.value=b.shadow.camera.far}return l(y,"refreshUniformsDistance"),{refreshFogUniforms:n,refreshMaterialUniforms:s}}l(ZE,"WebGLMaterials");function JE(i,e,t,n){let s={},r={};function a(b,A){let S=A.program;n.uniformBlockBinding(b,S,s[b.id])}l(a,"bind");function o(b,A){let S=s[b.id];S===void 0&&(g(b),S=c(b),s[b.id]=S,b.addEventListener("dispose",x));let R=A.program;n.updateUBOMapping(b,R);let C=e.render.frame;r[b.id]!==C&&(u(b),r[b.id]=C)}l(o,"update");function c(b){let A=i.createBuffer(),S=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,S,R),i.bindBuffer(i.UNIFORM_BUFFER,null),A}l(c,"createBuffer");function u(b){let A=s[b.id],S=b.uniforms,R=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let C=0,v=S.length;C<v;C++){let w=S[C];if(Array.isArray(w))for(let L=0,I=w.length;L<I;L++)h(w[L],C,L,R);else h(w,C,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}l(u,"updateBufferData");function h(b,A,S,R){if(f(b,A,S,R)===!0){let C=b.__offset,v=b.value;if(Array.isArray(v)){let w=0;for(let L=0;L<v.length;L++){let I=v[L],F=y(I,!0);p(I,b.__data,w),w+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else p(v,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,C,b.__data)}}l(h,"updateUniform");function p(b,A,S){typeof b=="number"||typeof b=="boolean"?A[S]=b:b.isMatrix3?(A[S]=b.elements[0],A[S+1]=b.elements[1],A[S+2]=b.elements[2],A[S+3]=0,A[S+4]=b.elements[3],A[S+5]=b.elements[4],A[S+6]=b.elements[5],A[S+7]=0,A[S+8]=b.elements[6],A[S+9]=b.elements[7],A[S+10]=b.elements[8],A[S+11]=0):ArrayBuffer.isView(b)?A.set(b.subarray(0,A.length-S),S):b.toArray(A,S)}l(p,"writeUniformValue");function f(b,A,S,R){let C=b.value,v=A+"_"+S;if(Array.isArray(C)){R[v]===void 0&&(R[v]=[]);let w=R[v],L=!1;for(let I=0;I<C.length;I++)m(C[I],w,I)===!0&&(L=!0);return L}return m(C,R,v)}l(f,"hasUniformChanged");function m(b,A,S){if(A[S]===void 0)return typeof b=="number"||typeof b=="boolean"?A[S]=b:ArrayBuffer.isView(b)?A[S]=b.slice():A[S]=b.clone(),!0;{let R=A[S];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return A[S]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(R.equals(b)===!1)return R.copy(b),!0}}return!1}l(m,"hasValueChanged");function g(b){let A=b.uniforms,S=0,R=16;for(let v=0,w=A.length;v<w;v++){let L=Array.isArray(A[v])?A[v]:[A[v]];for(let I=0,F=L.length;I<F;I++){let G=L[I],j=Array.isArray(G.value)?G.value:[G.value],U=Array.isArray(A[v])||Array.isArray(G.value),Y=S;for(let O=0,Z=j.length;O<Z;O++){let V=j[O],Q=y(V,U),ne=S%R,de=ne%Q.boundary,ge=ne+de;S+=de,ge!==0&&R-ge<Q.storage&&(S+=R-ge),O===0&&(Y=S),S+=Q.storage}let ie=G.type==="int"?Int32Array:G.type==="uint"?Uint32Array:Float32Array;G.__data=new ie((S-Y)/Float32Array.BYTES_PER_ELEMENT),G.__offset=Y}}let C=S%R;return C>0&&(S+=R-C),b.__size=S,b.__cache={},this}l(g,"prepareUniformsGroup");function y(b,A){let S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=16,S.storage=48):b.isMatrix4?(S.boundary=16,S.storage=64):b.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(S.boundary=16,S.storage=b.byteLength):qe("WebGLRenderer: Unsupported uniform value type.",b),A===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}l(y,"getUniformSize");function x(b){let A=b.target;A.removeEventListener("dispose",x),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}l(x,"onUniformsGroupsDispose");function _(){for(let b in s)i.deleteBuffer(s[b]);s={},r={}}return l(_,"dispose"),{bind:a,update:o,dispose:_}}l(JE,"WebGLUniformsGroups");var KE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yi=null;function jE(){return Yi===null&&(Yi=new Xa(KE,16,16,qi,Bn),Yi.name="DFG_LUT",Yi.minFilter=Gt,Yi.magFilter=Gt,Yi.wrapS=jn,Yi.wrapT=jn,Yi.generateMipmaps=!1,Yi.needsUpdate=!0),Yi}l(jE,"getDFGLUT");var Um=class Um{constructor(e={}){let{canvas:t=Ox(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:m=un}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=m,x=new Set([hh,uh,ch]),_=new Set([un,_i,Ja,Br,oh,lh]),b=new Uint32Array(4),A=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},R=null,C=null,v=[],w=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,F=!1,G=null,j=null,U=null,Y=null;this._outputColorSpace=kt;let ie=0,O=0,Z=null,V=-1,Q=null,ne=new Rt,de=new Rt,ge=null,ee=new ke(0),pe=0,ue=t.width,H=t.height,J=1,se=null,xe=null,he=new Rt(0,0,ue,H),Re=new Rt(0,0,ue,H),Ve=!1,Fe=new js,it=new bu,ut=!1,mt=!1,Ke=new _t,It=new X,dt=new Rt,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ct=!1;function Oe(){return Z===null?J:1}l(Oe,"getTargetPixelRatio");let k=n;function Nt(E,B){return t.getContext(E,B)}l(Nt,"getContext");let lt,tt,_e,ft,ze,Xe,P,M,q,fe,oe,ye,Ee,ae,le,Me,N,ce,re,Se,ve,be,Ge;try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",He,!1),t.addEventListener("webglcontextrestored",je,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),k===null){let B="webgl2";if(k=Nt(B,E),k===null)throw Nt(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qe()}catch(E){throw t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),Ye("WebGLRenderer: "+E.message),E}function Qe(){lt=new c1(k),lt.init(),ve=new XE(k,lt),tt=new jw(k,lt,e,ve),_e=new HE(k,lt),tt.reversedDepthBuffer&&f&&_e.buffers.depth.setReversed(!0),j=k.createFramebuffer(),U=k.createFramebuffer(),Y=k.createFramebuffer(),ft=new d1(k),ze=new RE,Xe=new WE(k,lt,_e,ze,tt,ve,ft),P=new l1(I),M=new pM(k),be=new Jw(k,M),q=new u1(k,M,ft,be),fe=new p1(k,q,M,be,ft),ce=new f1(k,tt,Xe),le=new Qw(ze),oe=new CE(I,P,lt,tt,be,le),ye=new ZE(I,ze),Ee=new IE,ae=new OE(lt),N=new Zw(I,P,_e,fe,g,c),Me=new VE(I,fe,tt),Ge=new JE(k,ft,tt,_e),re=new Kw(k,lt,ft),Se=new h1(k,lt,ft),ft.programs=oe.programs,I.capabilities=tt,I.extensions=lt,I.properties=ze,I.renderLists=Ee,I.shadowMap=Me,I.state=_e,I.info=ft}l(Qe,"initGLContext"),y!==un&&(L=new g1(y,t.width,t.height,o,s,r));let me=new Em(I,k);this.xr=me,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let E=lt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=lt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(E){E!==void 0&&(J=E,this.setSize(ue,H,!1))},this.getSize=function(E){return E.set(ue,H)},this.setSize=function(E,B,te=!0){if(me.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}ue=E,H=B,t.width=Math.floor(E*J),t.height=Math.floor(B*J),te===!0&&(t.style.width=E+"px",t.style.height=B+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(ue*J,H*J).floor()},this.setDrawingBufferSize=function(E,B,te){ue=E,H=B,J=te,t.width=Math.floor(E*te),t.height=Math.floor(B*te),this.setViewport(0,0,E,B)},this.setEffects=function(E){if(y===un){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let B=0;B<E.length;B++)if(E[B].isOutputPass===!0){qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(ne)},this.getViewport=function(E){return E.copy(he)},this.setViewport=function(E,B,te,$){E.isVector4?he.set(E.x,E.y,E.z,E.w):he.set(E,B,te,$),_e.viewport(ne.copy(he).multiplyScalar(Oe()).round())},this.getScissor=function(E){return E.copy(Re)},this.setScissor=function(E,B,te,$){E.isVector4?Re.set(E.x,E.y,E.z,E.w):Re.set(E,B,te,$),_e.scissor(de.copy(Re).multiplyScalar(Oe()).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(E){_e.setScissorTest(Ve=E)},this.setOpaqueSort=function(E){se=E},this.setTransparentSort=function(E){xe=E},this.getClearColor=function(E){return E.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,te=!0){let $=0;if(E){let K=!1;if(Z!==null){let Ae=Z.texture.format;K=x.has(Ae)}if(K){let Ae=Z.texture.type,De=_.has(Ae),we=N.getClearColor(),Ie=N.getClearAlpha(),Be=we.r,Je=we.g,st=we.b;De?(b[0]=Be,b[1]=Je,b[2]=st,b[3]=Ie,k.clearBufferuiv(k.COLOR,0,b)):(A[0]=Be,A[1]=Je,A[2]=st,A[3]=Ie,k.clearBufferiv(k.COLOR,0,A))}else $|=k.COLOR_BUFFER_BIT}B&&($|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&($|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&k.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),G=E},this.dispose=function(){t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),N.dispose(),Ee.dispose(),ae.dispose(),Xe.dispose(),ze.dispose(),P.dispose(),fe.dispose(),q.dispose(),be.dispose(),Ge.dispose(),oe.dispose(),me.dispose(),me.removeEventListener("sessionstart",_g),me.removeEventListener("sessionend",vg),Ar.stop()};function He(E){E.preventDefault(),Ko("WebGLRenderer: Context Lost."),F=!0}l(He,"onContextLost");function je(){Ko("WebGLRenderer: Context Restored."),F=!1;let E=ft.autoReset,B=Me.enabled,te=Me.autoUpdate,$=Me.needsUpdate,K=Me.type;Qe(),ft.autoReset=E,Me.enabled=B,Me.autoUpdate=te,Me.needsUpdate=$,Me.type=K}l(je,"onContextRestore");function Pe(E){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}l(Pe,"onContextCreationError");function xt(E){let B=E.target;B.removeEventListener("dispose",xt),Yt(B)}l(xt,"onMaterialDispose");function Yt(E){ks(E),ze.remove(E)}l(Yt,"deallocateMaterial");function ks(E){let B=ze.get(E).programs;B!==void 0&&(B.forEach(function(te){oe.releaseProgram(te)}),E.isShaderMaterial&&oe.releaseShaderCache(E))}l(ks,"releaseMaterialProgramReferences"),this.renderBufferDirect=function(E,B,te,$,K,Ae){B===null&&(B=yt);let De=K.isMesh&&K.matrixWorld.determinantAffine()<0,we=fb(E,B,te,$,K);_e.setMaterial($,De);let Ie=te.index,Be=1;if($.wireframe===!0){if(Ie=q.getWireframeAttribute(te),Ie===void 0)return;Be=2}let Je=te.drawRange,st=te.attributes.position,Ne=Je.start*Be,rt=(Je.start+Je.count)*Be;Ae!==null&&(Ne=Math.max(Ne,Ae.start*Be),rt=Math.min(rt,(Ae.start+Ae.count)*Be)),Ie!==null?(Ne=Math.max(Ne,0),rt=Math.min(rt,Ie.count)):st!=null&&(Ne=Math.max(Ne,0),rt=Math.min(rt,st.count));let Ot=rt-Ne;if(Ot<0||Ot===1/0)return;be.setup(K,$,we,te,Ie);let St,bt=re;if(Ie!==null&&(St=M.get(Ie),bt=Se,bt.setIndex(St)),K.isMesh)$.wireframe===!0?(_e.setLineWidth($.wireframeLinewidth*Oe()),bt.setMode(k.LINES)):bt.setMode(k.TRIANGLES);else if(K.isLine){let an=$.linewidth;an===void 0&&(an=1),_e.setLineWidth(an*Oe()),K.isLineSegments?bt.setMode(k.LINES):K.isLineLoop?bt.setMode(k.LINE_LOOP):bt.setMode(k.LINE_STRIP)}else K.isPoints?bt.setMode(k.POINTS):K.isSprite&&bt.setMode(k.TRIANGLES);if(K.isBatchedMesh)if(lt.get("WEBGL_multi_draw"))bt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let an=K._multiDrawStarts,Ue=K._multiDrawCounts,xn=K._multiDrawCount,pt=Ie?M.get(Ie).bytesPerElement:1,Tr=ze.get($).currentProgram.getUniforms();for(let on=0;on<xn;on++)Tr.setValue(k,"_gl_DrawID",on),bt.render(an[on]/pt,Ue[on])}else if(K.isInstancedMesh)bt.renderInstances(Ne,Ot,K.count);else if(te.isInstancedBufferGeometry){let an=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Ue=Math.min(te.instanceCount,an);bt.renderInstances(Ne,Ot,Ue)}else bt.render(Ne,Ot)};function xg(E,B,te,$){G!==null&&E.isNodeMaterial&&G.setObject($,E),ut===!0&&le.setState(E,te,!1),E.transparent===!0&&E.side===Wi&&E.forceSinglePass===!1?(E.side=Sn,E.needsUpdate=!0,Oo(E,B,$),E.side=rr,E.needsUpdate=!0,Oo(E,B,$),E.side=Wi):Oo(E,B,$)}l(xg,"prepareMaterial"),this.compile=function(E,B,te=null){te===null&&(te=E),G!==null&&G.renderStart(E,B,te),C=ae.get(te),C.init(B),w.push(C),te.traverseVisible(function(K){K.isLight&&K.layers.test(B.layers)&&(C.pushLight(K),K.castShadow&&C.pushShadow(K))}),E!==te&&E.traverseVisible(function(K){K.isLight&&K.layers.test(B.layers)&&(C.pushLight(K),K.castShadow&&C.pushShadow(K))}),C.setupLights(),G!==null&&G.updateLights(C.state.lightsArray),mt=this.localClippingEnabled,ut=le.init(this.clippingPlanes,mt),ut===!0&&le.setGlobalState(this.clippingPlanes,B),G!==null&&Me.render(C.state.shadowsArray,te,B);let $=new Set;return E.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Ae=K.material;if(Ae)if(Array.isArray(Ae))for(let De=0;De<Ae.length;De++){let we=Ae[De];xg(we,te,B,K),$.add(we)}else xg(Ae,te,B,K),$.add(Ae)}),C=w.pop(),G!==null&&G.renderEnd(),$},this.compileAsync=function(E,B,te=null){let $=this.compile(E,B,te);return new Promise(K=>{function Ae(){if($.forEach(function(De){let Ie=ze.get(De).currentProgram;(Ie===void 0||Ie.isReady())&&$.delete(De)}),$.size===0){K(E);return}setTimeout(Ae,10)}l(Ae,"checkMaterialsReady"),lt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Vd=null;function hb(E){Vd&&Vd(E)}l(hb,"onAnimationFrame");function _g(){Ar.stop()}l(_g,"onXRSessionStart");function vg(){Ar.start()}l(vg,"onXRSessionEnd");let Ar=new m_;Ar.setAnimationLoop(hb),typeof self<"u"&&Ar.setContext(self),this.setAnimationLoop=function(E){Vd=E,me.setAnimationLoop(E),E===null?Ar.stop():Ar.start()},me.addEventListener("sessionstart",_g),me.addEventListener("sessionend",vg),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;G!==null&&G.renderStart(E,B);let te=me.enabled===!0&&me.isPresenting===!0,$=L!==null&&(Z===null||te)&&L.begin(I,Z);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(me.cameraAutoUpdate===!0&&me.updateCamera(B),B=me.getCamera()),E.isScene===!0&&E.onBeforeRender(I,E,B,Z),C=ae.get(E,w.length),C.init(B),C.state.textureUnits=Xe.getTextureUnits(),w.push(C),Ke.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?it.setFromArrayCamera(B):Fe.setFromProjectionMatrix(Ke,Qn,B.reversedDepth),mt=this.localClippingEnabled,ut=le.init(this.clippingPlanes,mt),R=Ee.get(E,v.length),R.init(),v.push(R),this.info.render.frame++,me.enabled===!0&&me.isPresenting===!0){let De=I.xr.getDepthSensingMesh();De!==null&&Hd(De,B,-1/0,I.sortObjects)}Hd(E,B,0,I.sortObjects),R.finish(),G!==null&&G.updateLights(C.state.lightsArray),I.sortObjects===!0&&R.sort(se,xe),Ct=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,Ct&&N.addToRenderList(R,E),this.info.autoReset===!0&&this.info.reset(),ut===!0&&le.beginShadows();let K=C.state.shadowsArray;if(Me.render(K,E,B),ut===!0&&le.endShadows(),($&&L.hasRenderPass())===!1){let De=R.opaque,we=R.transmissive;if(C.setupLights(),B.isArrayCamera){let Ie=B.cameras;if(we.length>0)for(let Be=0,Je=Ie.length;Be<Je;Be++){let st=Ie[Be];bg(De,we,E,st)}Ct&&N.render(E);for(let Be=0,Je=Ie.length;Be<Je;Be++){let st=Ie[Be];yg(R,E,st,st.viewport)}}else we.length>0&&bg(De,we,E,B),Ct&&N.render(E),yg(R,E,B)}Z!==null&&O===0&&(Xe.updateMultisampleRenderTarget(Z),Xe.updateRenderTargetMipmap(Z)),$&&L.end(I),E.isScene===!0&&E.onAfterRender(I,E,B),be.resetDefaultState(),V=-1,Q=null,w.pop(),w.length>0?(C=w[w.length-1],Xe.setTextureUnits(C.state.textureUnits),ut===!0&&le.setGlobalState(I.clippingPlanes,C.state.camera)):C=null,v.pop(),v.length>0?R=v[v.length-1]:R=null,G!==null&&G.renderEnd()};function Hd(E,B,te,$){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)te=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)C.pushLight(E),E.castShadow&&C.pushShadow(E);else if(E.isSprite){let De=B.isArrayCamera?it:Fe;if(!E.frustumCulled||E.intersectsFrustum(De)){$&&dt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ke);let we=fe.update(E),Ie=E.material;Ie.visible&&R.push(E,we,Ie,te,dt.z,null,B)}}else if(E.isMesh||E.isLine||E.isPoints){let De=B.isArrayCamera?it:Fe;if(!E.frustumCulled||E.intersectsFrustum(De)){let we=fe.update(E),Ie=E.material;if($&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),dt.copy(E.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),dt.copy(we.boundingSphere.center)),dt.applyMatrix4(E.matrixWorld).applyMatrix4(Ke)),Array.isArray(Ie)){let Be=we.groups;for(let Je=0,st=Be.length;Je<st;Je++){let Ne=Be[Je],rt=Ie[Ne.materialIndex];rt&&rt.visible&&R.push(E,we,rt,te,dt.z,Ne,B)}}else Ie.visible&&R.push(E,we,Ie,te,dt.z,null,B)}}}let Ae=E.children;for(let De=0,we=Ae.length;De<we;De++)Hd(Ae[De],B,te,$)}l(Hd,"projectObject");function yg(E,B,te,$){let{opaque:K,transmissive:Ae,transparent:De}=E;C.setupLightsView(te),ut===!0&&le.setGlobalState(I.clippingPlanes,te),$&&_e.viewport(ne.copy($)),K.length>0&&Lc(K,B,te),Ae.length>0&&Lc(Ae,B,te),De.length>0&&Lc(De,B,te),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}l(yg,"renderScene");function bg(E,B,te,$){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[$.id]===void 0){let Ne=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[$.id]=new Nn(1,1,{generateMipmaps:!0,type:Ne?Bn:un,minFilter:On,samples:Math.max(4,tt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:at.workingColorSpace})}let Ae=C.state.transmissionRenderTarget[$.id],De=$.viewport||ne;Ae.setSize(De.z*I.transmissionResolutionScale,De.w*I.transmissionResolutionScale);let we=I.getRenderTarget(),Ie=I.getActiveCubeFace(),Be=I.getActiveMipmapLevel();I.setRenderTarget(Ae),I.getClearColor(ee),pe=I.getClearAlpha(),pe<1&&I.setClearColor(16777215,.5),I.clear(),Ct&&N.render(te);let Je=I.toneMapping;I.toneMapping=Xi;let st=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),C.setupLightsView($),ut===!0&&le.setGlobalState(I.clippingPlanes,$),Lc(E,te,$),Xe.updateMultisampleRenderTarget(Ae),Xe.updateRenderTargetMipmap(Ae),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let rt=0,Ot=B.length;rt<Ot;rt++){let St=B[rt],{object:bt,geometry:an,material:Ue,group:xn}=St;if(Ue.side===Wi&&bt.layers.test($.layers)){let pt=Ue.side;Ue.side=Sn,Ue.needsUpdate=!0,Mg(bt,te,$,an,Ue,xn),Ue.side=pt,Ue.needsUpdate=!0,Ne=!0}}Ne===!0&&(Xe.updateMultisampleRenderTarget(Ae),Xe.updateRenderTargetMipmap(Ae))}I.setRenderTarget(we,Ie,Be),I.setClearColor(ee,pe),st!==void 0&&($.viewport=st),I.toneMapping=Je}l(bg,"renderTransmissionPass");function Lc(E,B,te){let $=B.isScene===!0?B.overrideMaterial:null;for(let K=0,Ae=E.length;K<Ae;K++){let De=E[K],{object:we,geometry:Ie,group:Be}=De,Je=De.material;Je.allowOverride===!0&&$!==null&&(Je=$),we.layers.test(te.layers)&&Mg(we,B,te,Ie,Je,Be)}}l(Lc,"renderObjects");function Mg(E,B,te,$,K,Ae){G!==null&&K.isNodeMaterial&&G.setObject(E,K),E.onBeforeRender(I,B,te,$,K,Ae),E.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),K.onBeforeRender(I,B,te,$,E,Ae),K.transparent===!0&&K.side===Wi&&K.forceSinglePass===!1?(K.side=Sn,K.needsUpdate=!0,I.renderBufferDirect(te,B,$,K,E,Ae),K.side=rr,K.needsUpdate=!0,I.renderBufferDirect(te,B,$,K,E,Ae),K.side=Wi):I.renderBufferDirect(te,B,$,K,E,Ae),E.onAfterRender(I,B,te,$,K,Ae)}l(Mg,"renderObject");function Sg(E){let B=0;for(let te of E)te.texture!==null&&B++;return B}l(Sg,"countLightProbeGrids");function Oo(E,B,te){B.isScene!==!0&&(B=yt);let $=ze.get(E),K=C.state.lights,Ae=C.state.shadowsArray,De=K.state.version,we=oe.getParameters(E,K.state,Ae,B,te,C.state.lightProbeGridArray),Ie=oe.getProgramCacheKey(we),Be=$.programs;$.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?B.environment:null,$.fog=B.fog;let Je=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;$.envMap=P.get(E.envMap||$.environment,Je),$.envMapRotation=$.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Be===void 0&&(E.addEventListener("dispose",xt),Be=new Map,$.programs=Be,$.programVariants=new Map);let st=Be.get(Ie);if(st!==void 0){if($.currentProgram===st&&$.lightsStateVersion===De)return Eg(E,we),st}else we.uniforms=oe.getUniforms(E),G!==null&&E.isNodeMaterial&&G.build(E,te,we),E.onBeforeCompile(we,I),st=oe.acquireProgram(we,Ie),Be.set(Ie,st),$.uniforms=we.uniforms;let Ne=$.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ne.clippingPlanes=le.uniform),Eg(E,we),$.needsLights=mb(E),$.lightsStateVersion=De,$.needsLights&&(Ne.ambientLightColor.value=K.state.ambient,Ne.lightProbe.value=K.state.probe,Ne.sunLights.value=K.state.sun,Ne.sunLightShadows.value=K.state.sunShadow,Ne.directionalLights.value=K.state.directional,Ne.directionalLightShadows.value=K.state.directionalShadow,Ne.spotLights.value=K.state.spot,Ne.spotLightShadows.value=K.state.spotShadow,Ne.rectAreaLights.value=K.state.rectArea,Ne.ltc_1.value=K.state.rectAreaLTC1,Ne.ltc_2.value=K.state.rectAreaLTC2,Ne.pointLights.value=K.state.point,Ne.pointLightShadows.value=K.state.pointShadow,Ne.hemisphereLights.value=K.state.hemi,Ne.sunShadowMatrix.value=K.state.sunShadowMatrix,Ne.sunShadowCascade.value=K.state.sunShadowCascade,Ne.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ne.spotLightMatrix.value=K.state.spotLightMatrix,Ne.spotLightMap.value=K.state.spotLightMap,Ne.pointShadowMatrix.value=K.state.pointShadowMatrix),$.numLightProbeGrids=Sg(C.state.lightProbeGridArray),$.currentProgram=st,$.uniformsList=null,st}l(Oo,"getProgram");function db(E,B,te,$,K){let Ae=ze.get(E),De=Ae.currentProgram.id+","+$+","+K,we=Ae.programVariants.get(De);return we===void 0?(we=Oo(E,B,te),Ae.programVariants.set(De,we)):(Ae.currentProgram=we,Ae.uniformsList=null,Ae.outputColorSpace=$,Ae.toneMapping=K),we}l(db,"getProgramVariant");function wg(E){if(E.uniformsList===null){let B=E.currentProgram.getUniforms();E.uniformsList=Ka.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}l(wg,"getUniformList");function Eg(E,B){let te=ze.get(E);te.outputColorSpace=B.outputColorSpace,te.batching=B.batching,te.batchingColor=B.batchingColor,te.instancing=B.instancing,te.instancingColor=B.instancingColor,te.instancingMorph=B.instancingMorph,te.skinning=B.skinning,te.morphTargets=B.morphTargets,te.morphNormals=B.morphNormals,te.morphColors=B.morphColors,te.morphTargetsCount=B.morphTargetsCount,te.numClippingPlanes=B.numClippingPlanes,te.numIntersection=B.numClipIntersection,te.vertexAlphas=B.vertexAlphas,te.vertexTangents=B.vertexTangents,te.toneMapping=B.toneMapping}l(Eg,"updateCommonMaterialProperties");function fb(E,B,te,$,K){B.isScene!==!0&&(B=yt),Xe.resetTextureUnits();let Ae=B.fog,De=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?B.environment:null,we=Z===null?I.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:at.workingColorSpace,Ie=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Be=P.get($.envMap||De,Ie),Je=$.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,st=!!te.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ne=!!te.morphAttributes.position,rt=!!te.morphAttributes.normal,Ot=!!te.morphAttributes.color,St=Xi;$.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(St=I.toneMapping);let bt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,an=bt!==void 0?bt.length:0,Ue=ze.get($),xn=C.state.lights;if(ut===!0&&(mt===!0||E!==Q)){let Lt=E===Q&&$.id===V;le.setState($,E,Lt)}let pt=!1,Tr=!1;$.version===Ue.__version?Ue.needsLights&&Ue.lightsStateVersion!==xn.state.version||K.isBatchedMesh&&Ue.batching===!1||!K.isBatchedMesh&&Ue.batching===!0||K.isBatchedMesh&&Ue.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Ue.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Ue.instancing===!1||!K.isInstancedMesh&&Ue.instancing===!0||K.isSkinnedMesh&&Ue.skinning===!1||!K.isSkinnedMesh&&Ue.skinning===!0||K.isInstancedMesh&&Ue.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ue.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ue.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ue.instancingMorph===!1&&K.morphTexture!==null||Ue.envMap!==Be||$.fog===!0&&Ue.fog!==Ae||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==le.numPlanes||Ue.numIntersection!==le.numIntersection)||Ue.vertexAlphas!==Je||Ue.vertexTangents!==st||Ue.morphTargets!==Ne||Ue.morphNormals!==rt||Ue.morphColors!==Ot||Ue.morphTargetsCount!==an||Ue.numLightProbeGrids!==Sg(C.state.lightProbeGridArray)?pt=!0:(Ue.outputColorSpace!==we||Ue.toneMapping!==St)&&(Tr=!0):(pt=!0,Ue.__version=$.version);let on=Ue.currentProgram;(pt===!0||Tr===!0)&&(on=Tr===!0?db($,B,K,we,St):Oo($,B,K),G&&$.isNodeMaterial&&G.onUpdateProgram($,on,Ue));let Dc=!1,zs=!1,Cr=!1,ht=on.getUniforms(),en=Ue.uniforms;if(_e.useProgram(on.program)&&(Dc=!0,zs=!0,Cr=!0),$.id!==V&&(V=$.id,zs=!0),Dc||Q!==E){_e.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ht.setValue(k,"projectionMatrix",E.projectionMatrix),ht.setValue(k,"viewMatrix",E.matrixWorldInverse);let $t=ht.map.cameraPosition;$t!==void 0&&$t.setValue(k,It.setFromMatrixPosition(E.matrixWorld)),tt.logarithmicDepthBuffer&&ht.setValue(k,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ht.setValue(k,"isOrthographic",E.isOrthographicCamera===!0),Q!==E&&(Q=E,zs=!0,Cr=!0)}if(Ue.needsLights&&(xn.state.sunShadowMap.length>0&&ht.setValue(k,"sunShadowMap",xn.state.sunShadowMap,Xe),xn.state.directionalShadowMap.length>0&&ht.setValue(k,"directionalShadowMap",xn.state.directionalShadowMap,Xe),xn.state.spotShadowMap.length>0&&ht.setValue(k,"spotShadowMap",xn.state.spotShadowMap,Xe),xn.state.pointShadowMap.length>0&&ht.setValue(k,"pointShadowMap",xn.state.pointShadowMap,Xe)),K.isSkinnedMesh){ht.setOptional(k,K,"bindMatrix"),ht.setOptional(k,K,"bindMatrixInverse");let Lt=K.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),ht.setValue(k,"boneTexture",Lt.boneTexture,Xe))}K.isBatchedMesh&&(ht.setOptional(k,K,"batchingTexture"),ht.setValue(k,"batchingTexture",K._matricesTexture,Xe),ht.setOptional(k,K,"batchingIdTexture"),ht.setValue(k,"batchingIdTexture",K._indirectTexture,Xe),ht.setOptional(k,K,"batchingColorTexture"),K._colorsTexture!==null&&ht.setValue(k,"batchingColorTexture",K._colorsTexture,Xe));let di=te.morphAttributes;if((di.position!==void 0||di.normal!==void 0||di.color!==void 0)&&ce.update(K,te,on),(zs||Ue.receiveShadow!==K.receiveShadow)&&(Ue.receiveShadow=K.receiveShadow,ht.setValue(k,"receiveShadow",K.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&B.environment!==null&&(en.envMapIntensity.value=B.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=jE()),zs){if(ht.setValue(k,"toneMappingExposure",I.toneMappingExposure),Ue.needsLights&&pb(en,Cr),Ae&&$.fog===!0&&ye.refreshFogUniforms(en,Ae),ye.refreshMaterialUniforms(en,$,J,H,C.state.transmissionRenderTarget[E.id]),Ue.needsLights&&Ue.numLightProbeGrids>0){let Lt=S,$t=0;for(let ds of C.state.lightProbeGridArray)ds.texture!==null&&(Lt.textures[$t]=ds.texture,Lt.min[$t]=ds.boundingBox.min,Lt.max[$t]=ds.boundingBox.max,Lt.resolution[$t]=ds.resolution,$t++);for(let ds in Lt)Lt[ds].length=$t;en.probesSH.value=Lt.textures,en.probesMin.value=Lt.min,en.probesMax.value=Lt.max,en.probesResolution.value=Lt.resolution}Ka.upload(k,wg(Ue),en,Xe)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Ka.upload(k,wg(Ue),en,Xe),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ht.setValue(k,"center",K.center),ht.setValue(k,"modelViewMatrix",K.modelViewMatrix),ht.setValue(k,"normalMatrix",K.normalMatrix),ht.setValue(k,"modelMatrix",K.matrixWorld),$.uniformsGroups!==void 0){let Lt=$.uniformsGroups;for(let $t=0,ds=Lt.length;$t<ds;$t++){let Tg=Lt[$t];Ge.update(Tg,on),Ge.bind(Tg,on)}}return on}l(fb,"setProgram");function pb(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.sunLights.needsUpdate=B,E.sunLightShadows.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}l(pb,"markUniformsLightsNeedsUpdate");function mb(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}l(mb,"materialNeedsLights"),this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(E,B,te){let $=ze.get(E);$.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),ze.get(E.texture).__webglTexture=B,ze.get(E.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:te,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){let te=ze.get(E);te.__webglFramebuffer=B,te.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,te=0){Z=E,ie=B,O=te;let $=null,K=!1,Ae=!1;if(E){let we=ze.get(E);if(we.__useDefaultFramebuffer!==void 0){_e.bindFramebuffer(k.FRAMEBUFFER,we.__webglFramebuffer),ne.copy(E.viewport),de.copy(E.scissor),ge=E.scissorTest,_e.viewport(ne),_e.scissor(de),_e.setScissorTest(ge),V=-1;return}else if(we.__webglFramebuffer===void 0)Xe.setupRenderTarget(E);else if(we.__hasExternalTextures)Xe.rebindTextures(E,ze.get(E.texture).__webglTexture,ze.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Je=E.depthTexture;if(we.__boundDepthTexture!==Je){if(Je!==null&&ze.has(Je)&&(E.width!==Je.image.width||E.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Xe.setupDepthRenderbuffer(E)}}let Ie=E.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Ae=!0);let Be=ze.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Be[B])?$=Be[B][te]:$=Be[B],K=!0):E.samples>0&&Xe.useMultisampledRTT(E)===!1?$=ze.get(E).__webglMultisampledFramebuffer:Array.isArray(Be)?$=Be[te]:$=Be,ne.copy(E.viewport),de.copy(E.scissor),ge=E.scissorTest}else ne.copy(he).multiplyScalar(J).floor(),de.copy(Re).multiplyScalar(J).floor(),ge=Ve;if(te!==0&&($=j),_e.bindFramebuffer(k.FRAMEBUFFER,$)&&_e.drawBuffers(E,$),_e.viewport(ne),_e.scissor(de),_e.setScissorTest(ge),K){let we=ze.get(E.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+B,we.__webglTexture,te)}else if(Ae){let we=B;for(let Ie=0;Ie<E.textures.length;Ie++){let Be=ze.get(E.textures[Ie]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ie,Be.__webglTexture,te,we)}}else if(E!==null&&te!==0){let we=ze.get(E.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,we.__webglTexture,te)}V=-1};function Ag(E){let B=ze.get(E);return(B.__readFormat!==E.format||B.__readType!==E.type)&&(B.__readFormat=E.format,B.__readType=E.type,B.__formatReadable=tt.textureFormatReadable(E.format),B.__typeReadable=tt.textureTypeReadable(E.type)),B}l(Ag,"getReadableState"),this.readRenderTargetPixels=function(E,B,te,$,K,Ae,De,we=0){if(!(E&&E.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=ze.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&De!==void 0&&(Ie=Ie[De],Array.isArray(Ie)&&(Ie=Ie[0])),Ie){_e.bindFramebuffer(k.FRAMEBUFFER,Ie);try{let Be=E.textures[we],Je=Be.format,st=Be.type;E.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+we);let Ne=Ag(Be);if(Ne.__formatReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ne.__typeReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-$&&te>=0&&te<=E.height-K&&k.readPixels(B,te,$,K,ve.convert(Je),ve.convert(st),Ae)}finally{let Be=Z!==null?ze.get(Z).__webglFramebuffer:null;_e.bindFramebuffer(k.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(E,B,te,$,K,Ae,De,we=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=ze.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&De!==void 0&&(Ie=Ie[De],Array.isArray(Ie)&&(Ie=Ie[0])),Ie)if(B>=0&&B<=E.width-$&&te>=0&&te<=E.height-K){_e.bindFramebuffer(k.FRAMEBUFFER,Ie);let Be=E.textures[we],Je=Be.format,st=Be.type;E.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+we);let Ne=Ag(Be);if(Ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let rt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,rt),k.bufferData(k.PIXEL_PACK_BUFFER,Ae.byteLength,k.STREAM_READ),k.readPixels(B,te,$,K,ve.convert(Je),ve.convert(st),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let Ot=Z!==null?ze.get(Z).__webglFramebuffer:null;_e.bindFramebuffer(k.FRAMEBUFFER,Ot);let St=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await kx(k,St,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,rt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ae),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(rt),k.deleteSync(St),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,te=0){let $=Math.pow(2,-te),K=Math.floor(E.image.width*$),Ae=Math.floor(E.image.height*$),De=B!==null?B.x:0,we=B!==null?B.y:0;Xe.setTexture2D(E,0),k.copyTexSubImage2D(k.TEXTURE_2D,te,0,0,De,we,K,Ae),_e.unbindTexture()},this.copyTextureToTexture=function(E,B,te=null,$=null,K=0,Ae=0){let De,we,Ie,Be,Je,st,Ne,rt,Ot,St=E.isCompressedTexture?E.mipmaps[Ae]:E.image;if(te!==null)De=te.max.x-te.min.x,we=te.max.y-te.min.y,Ie=te.isBox3?te.max.z-te.min.z:1,Be=te.min.x,Je=te.min.y,st=te.isBox3?te.min.z:0;else{let ht=Math.pow(2,-K);De=Math.floor(St.width*ht),we=Math.floor(St.height*ht),E.isDataArrayTexture?Ie=St.depth:E.isData3DTexture?Ie=Math.floor(St.depth*ht):Ie=1,Be=0,Je=0,st=0}$!==null?(Ne=$.x,rt=$.y,Ot=$.z):(Ne=0,rt=0,Ot=0);let bt=ve.convert(B.format),an=ve.convert(B.type),Ue;B.isData3DTexture?(Xe.setTexture3D(B,0),Ue=k.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Xe.setTexture2DArray(B,0),Ue=k.TEXTURE_2D_ARRAY):(Xe.setTexture2D(B,0),Ue=k.TEXTURE_2D),_e.activeTexture(k.TEXTURE0),_e.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,B.flipY),_e.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),_e.pixelStorei(k.UNPACK_ALIGNMENT,B.unpackAlignment);let xn=_e.getParameter(k.UNPACK_ROW_LENGTH),pt=_e.getParameter(k.UNPACK_IMAGE_HEIGHT),Tr=_e.getParameter(k.UNPACK_SKIP_PIXELS),on=_e.getParameter(k.UNPACK_SKIP_ROWS),Dc=_e.getParameter(k.UNPACK_SKIP_IMAGES);_e.pixelStorei(k.UNPACK_ROW_LENGTH,St.width),_e.pixelStorei(k.UNPACK_IMAGE_HEIGHT,St.height),_e.pixelStorei(k.UNPACK_SKIP_PIXELS,Be),_e.pixelStorei(k.UNPACK_SKIP_ROWS,Je),_e.pixelStorei(k.UNPACK_SKIP_IMAGES,st);let zs=E.isDataArrayTexture||E.isData3DTexture,Cr=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){let ht=ze.get(E),en=ze.get(B),di=ze.get(ht.__renderTarget),Lt=ze.get(en.__renderTarget);_e.bindFramebuffer(k.READ_FRAMEBUFFER,di.__webglFramebuffer),_e.bindFramebuffer(k.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let $t=0;$t<Ie;$t++)zs&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ze.get(E).__webglTexture,K,st+$t),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ze.get(B).__webglTexture,Ae,Ot+$t)),k.blitFramebuffer(Be,Je,Be+De,Je+we,Ne,rt,Ne+De,rt+we,k.DEPTH_BUFFER_BIT,k.NEAREST);_e.bindFramebuffer(k.READ_FRAMEBUFFER,null),_e.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(K!==0||E.isRenderTargetTexture||ze.has(E)){let ht=ze.get(E),en=ze.get(B);_e.bindFramebuffer(k.READ_FRAMEBUFFER,U),_e.bindFramebuffer(k.DRAW_FRAMEBUFFER,Y);for(let di=0;di<Ie;di++)zs?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ht.__webglTexture,K,st+di):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ht.__webglTexture,K),Cr?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,en.__webglTexture,Ae,Ot+di):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,en.__webglTexture,Ae),K!==0?k.blitFramebuffer(Be,Je,Be+De,Je+we,Ne,rt,Ne+De,rt+we,k.COLOR_BUFFER_BIT,k.NEAREST):Cr?k.copyTexSubImage3D(Ue,Ae,Ne,rt,Ot+di,Be,Je,De,we):k.copyTexSubImage2D(Ue,Ae,Ne,rt,Be,Je,De,we);_e.bindFramebuffer(k.READ_FRAMEBUFFER,null),_e.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Cr?E.isDataTexture||E.isData3DTexture?k.texSubImage3D(Ue,Ae,Ne,rt,Ot,De,we,Ie,bt,an,St.data):B.isCompressedArrayTexture?k.compressedTexSubImage3D(Ue,Ae,Ne,rt,Ot,De,we,Ie,bt,St.data):k.texSubImage3D(Ue,Ae,Ne,rt,Ot,De,we,Ie,bt,an,St):E.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ae,Ne,rt,De,we,bt,an,St.data):E.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ae,Ne,rt,St.width,St.height,bt,St.data):k.texSubImage2D(k.TEXTURE_2D,Ae,Ne,rt,De,we,bt,an,St);_e.pixelStorei(k.UNPACK_ROW_LENGTH,xn),_e.pixelStorei(k.UNPACK_IMAGE_HEIGHT,pt),_e.pixelStorei(k.UNPACK_SKIP_PIXELS,Tr),_e.pixelStorei(k.UNPACK_SKIP_ROWS,on),_e.pixelStorei(k.UNPACK_SKIP_IMAGES,Dc),Ae===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&k.generateMipmap(Ue),_e.unbindTexture()},this.initRenderTarget=function(E){ze.get(E).__webglFramebuffer===void 0&&Xe.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Xe.setTextureCube(E,0):E.isData3DTexture?Xe.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Xe.setTexture2DArray(E,0):Xe.setTexture2D(E,0),_e.unbindTexture()},this.resetState=function(){ie=0,O=0,Z=null,_e.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}};l(Um,"WebGLRenderer");var Yh=Um;var A_=l(i=>{let e=Math.min(1,Math.max(0,i))**.5;return 4*e*(1-e)},"swell"),QE=l(i=>1-(1-i)*(1-i),"easeOut"),Kh=l(i=>{let e=Math.sin(i*12.9898)*43758.5453;return e-Math.floor(e)},"share"),Fm=l((i,e=0)=>{let t=Math.min(1,Math.max(0,i)),n=QE(t);return Array.from({length:7},(s,r)=>{if(r===0)return{at:[0,.08+.22*n,0],size:.09*A_(t),shade:0};let a=(r-1)/6*Math.PI*2+(Kh(e+r*7)-.5)*.6,o=(.12+Kh(e+r*13)*.08)*n,c=.05+(.08+Kh(e+r*17)*.1)*n;return{at:[Math.cos(a)*o,c,Math.sin(a)*o],size:(.055+Kh(e+r*19)*.03)*A_(t*1.1),shade:r%2===0?0:1}})},"puffAt");var Tn=["grass","plains","sand","rock","snow","forest","mud","tundra"],Zi={shore:-.03,deep:-.15,reach:3},jh={relief:{base:0,roughness:0,shape:"flat"},colour:"#1b1f24",surface:"grass"},C_={relief:{base:.03,roughness:.015,shape:"rolling"},colour:"#6b8746",surface:"grass"},T_={Ocean:{relief:{base:Zi.deep,roughness:.003,shape:"rolling"},colour:"#33505f",surface:"sand"},Grassland:C_,Plains:{relief:{base:.025,roughness:.01,shape:"rolling"},colour:"#99935a",surface:"plains"},Desert:{relief:{base:.025,roughness:.025,shape:"rolling"},colour:"#c4ab78",surface:"sand"},Tundra:{relief:{base:.035,roughness:.015,shape:"rolling"},colour:"#8a8d78",surface:"tundra"},Arctic:{relief:{base:.05,roughness:.02,shape:"rolling"},colour:"#dfe6ea",surface:"snow"},Glacier:{relief:{base:.08,roughness:.03,shape:"rolling"},colour:"#e7eff3",surface:"snow"},Forest:{relief:{base:.04,roughness:.02,shape:"rolling"},colour:"#40583a",surface:"forest"},Jungle:{relief:{base:.03,roughness:.02,shape:"rolling"},colour:"#355a36",surface:"forest"},Swamp:{relief:{base:.005,roughness:.004,shape:"flat"},colour:"#4f5b3d",surface:"mud"},River:{relief:{base:.012,roughness:.006,shape:"rolling"},colour:"#5d7c4f",surface:"grass"},Hills:{relief:{base:.12,roughness:.04,shape:"ridged"},colour:"#7b7650",surface:"plains"},Mountains:{relief:{base:.35,roughness:.08,shape:"peaked"},colour:"#77726a",surface:"rock"}},Vr=l(i=>i==="Unknown"?jh:(Object.prototype.hasOwnProperty.call(T_,i)?T_[i]:void 0)??C_,"terrainEntry");var eA=l((i,e,t)=>{let n=Math.imul(i,374761393)+Math.imul(e,668265263)+Math.imul(t,1442695041)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296},"hash"),R_=Float64Array.from({length:32},(i,e)=>(e%2===0?Math.cos:Math.sin)(Math.floor(e/2)*(Math.PI/8))),P_=l(i=>i*i*i*(i*(i*6-15)+10),"fade"),Ji=l(({cell:i,period:e,seed:t})=>{let n=Math.max(1,Math.round(e.u/i)),s=e.u/n,r=e.v===null?null:Math.max(1,Math.round(e.v/i)),a=e.v===null||r===null?i:e.v/r,o=l(h=>(h%n+n)%n,"wrapU"),c=l(h=>r===null?h:(h%r+r)%r,"wrapV"),u=l((h,p,f,m)=>{let g=Math.floor(eA(h,p,t)*16)*2;return(R_[g]??0)*f+(R_[g+1]??0)*m},"slope");return(h,p)=>{let f=h/s,m=p/a,g=Math.floor(f),y=Math.floor(m),x=f-g,_=m-y,b=P_(x),A=P_(_),S=o(g),R=o(g+1),C=c(y),v=c(y+1),w=u(S,C,x,_)+(u(R,C,x-1,_)-u(S,C,x,_))*b,L=u(S,v,x,_-1)+(u(R,v,x-1,_-1)-u(S,v,x,_-1))*b;return Math.max(-1,Math.min(1,(w+(L-w)*A)*1.4))}},"periodicNoise"),zn=l(i=>{let e=i.map((n,s)=>.5**s),t=e.reduce((n,s)=>n+s,0);return(n,s)=>i.reduce((r,a,o)=>r+a(n,s)*(e[o]??0),0)/t},"fractalNoise");var ar=128,td=.5,Qh=l(i=>(e,t)=>1-2*Math.abs(i(e,t)),"ridge"),tA={grass:{grain:l(({noise:i})=>zn([i(64,1),i(16,2),i(4,25)]),"grain"),shade:.3,bumps:l(({noise:i})=>zn([i(4,3),i(12,4)]),"bumps"),steep:2.5,rough:.9,roughVaries:.05},plains:{grain:l(({noise:i})=>zn([i(64,5),i(8,6)]),"grain"),shade:.3,bumps:l(({noise:i})=>zn([i(8,7),i(24,8)]),"bumps"),steep:2.2,rough:.92,roughVaries:.04},sand:{grain:l(({noise:i,wave:e,texels:t})=>{let n=e(7,3),s=i(64,9),r=i(32,10);return(a,o)=>.7*n(a+t(6)*s(a,o),o)+.3*r(a,o)},"grain"),shade:.12,bumps:l(({noise:i,wave:e,texels:t})=>{let n=e(7,3),s=i(64,9);return(r,a)=>n(r+t(6)*s(r,a),a)},"bumps"),steep:1.5,rough:.88,roughVaries:.04},rock:{grain:l(({noise:i})=>zn([Qh(i(24,11)),Qh(i(12,12)),i(6,13)]),"grain"),shade:.35,bumps:l(({noise:i})=>zn([Qh(i(24,11)),Qh(i(12,12)),i(6,13)]),"bumps"),steep:2.5,rough:.75,roughVaries:.1},snow:{grain:l(({noise:i})=>i(64,14),"grain"),shade:.06,bumps:l(({noise:i})=>i(32,15),"bumps"),steep:.8,rough:.55,roughVaries:.05},forest:{grain:l(({noise:i})=>zn([i(10,16),i(40,17)]),"grain"),shade:.3,bumps:l(({noise:i})=>i(8,18),"bumps"),steep:2,rough:.9,roughVaries:.05},mud:{grain:l(({noise:i})=>i(48,19),"grain"),shade:.25,bumps:l(({noise:i})=>zn([i(32,20),i(8,21)]),"bumps"),steep:1.2,rough:.65,roughVaries:.25},tundra:{grain:l(({noise:i})=>zn([i(4,22),i(48,23)]),"grain"),shade:.3,bumps:l(({noise:i})=>i(6,24),"bumps"),steep:2,rough:.9,roughVaries:.05}},ed=l(i=>Math.max(0,Math.min(255,Math.round(i*255))),"byte"),nA=l((i=ar,[e,t]=[0,0])=>{let n=new Uint8Array(i*i*4*Tn.length),s={u:i,v:i};return Tn.forEach((r,a)=>{let o=tA[r],c=l((A,S)=>Ji({cell:A*i/ar,period:s,seed:7919*(a+1)+S}),"noise"),u=l((A,S)=>(R,C)=>Math.sin(2*Math.PI*(A*R+S*C)/i),"wave"),h={noise:c,wave:u,texels:l(A=>A*i/ar,"texels")},p=o.grain(h),f=o.bumps(h),m=a*i*i*4,g=new Float32Array(i*i);for(let A=0;A<i;A++)for(let S=0;S<i;S++)g[A*i+S]=f(S+e,A+t);let y=l((A,S)=>g[(S+i)%i*i+(A+i)%i]??0,"height"),x=new Float32Array(i*i),_=0;for(let A=0;A<i;A++)for(let S=0;S<i;S++)x[A*i+S]=p(S+e,A+t),_+=x[A*i+S]??0;let b=_/(i*i);for(let A=0;A<i;A++)for(let S=0;S<i;S++){let R=m+(A*i+S)*4,C=(x[A*i+S]??0)-b,v=(y(S+1,A)-y(S-1,A))/2*(i/ar),w=(y(S,A+1)-y(S,A-1))/2*(i/ar);n[R]=ed(o.shade*C+.5),n[R+1]=ed((1-Math.max(-1,Math.min(1,v*o.steep)))/2),n[R+2]=ed((1-Math.max(-1,Math.min(1,w*o.steep)))/2),n[R+3]=ed(o.rough+o.roughVaries*C)}}),n},"surfaceTextures"),I_=nA;var bi={rockFrom:.97,rockTo:.88,snowAtEquator:.4,snowAtPoles:.26,snowDeepens:.04,snowSlips:.85,snowHolds:.95,wetFrom:.1,wetTo:.4,wetUpTo:.03};var Mi=l(i=>Number.isInteger(i)?`${i}.0`:`${i}`,"number"),L_=`
float coverLatitude(float v, float extent) {
  float down = mod(v, extent);

  return min(1.0, abs(2.0 * down / extent - 1.0));
}

float coverRock(float upright) {
  return 1.0 - smoothstep(${Mi(bi.rockTo)}, ${Mi(bi.rockFrom)}, upright);
}

float coverSnow(float height, float upright, float latitude) {
  float line = ${Mi(bi.snowAtEquator)} + (${Mi(bi.snowAtPoles)} - ${Mi(bi.snowAtEquator)}) * latitude;

  return smoothstep(line, line + ${Mi(bi.snowDeepens)}, height) * smoothstep(${Mi(bi.snowSlips)}, ${Mi(bi.snowHolds)}, upright);
}

float coverWet(float height, float shore) {
  return smoothstep(${Mi(bi.wetFrom)}, ${Mi(bi.wetTo)}, shore) * (1.0 - smoothstep(0.0, ${Mi(bi.wetUpTo)}, height));
}
`;var iA=l(i=>[i.u/Math.max(1,Math.round(i.u/td)),i.v===null?td:i.v/Math.max(1,Math.round(i.v/td))],"surfaceTile"),sA=Tn.map((i,e)=>`vec4 surface${e} = texture(surfaceDetail, vec3(surfaceAt, ${e}.0));
  surface += vSurfaces${e<4?"A":"B"}.${"xyzw"[e%4]} * surface${e};`).join(`
  `),rA=null,aA=l(()=>rA??=I_(),"made"),oA=l((i,e)=>{let t=new Nr(aA(),ar,ar,Tn.length),n=new xi({roughness:.92,vertexColors:!0}),[s,r]=iA(i);return t.format=kn,t.type=un,t.wrapS=Oi,t.wrapT=Oi,t.magFilter=Gt,t.minFilter=On,t.generateMipmaps=!0,t.anisotropy=4,t.colorSpace=yi,t.needsUpdate=!0,n.onBeforeCompile=a=>{a.uniforms.surfaceDetail={value:t},a.uniforms.surfaceTile={value:new We(s,r)},a.uniforms.groundExtent={value:e},a.uniforms.rockColour={value:new ke(Vr("Mountains").colour)},a.uniforms.snowColour={value:new ke(Vr("Glacier").colour)},a.vertexShader=`attribute vec4 surfacesA;
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
${L_}
${a.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
  // Every surface sampled, so their smaller copies are chosen alike across where they meet.
  vec2 surfaceAt = vGround / surfaceTile;
  float surfaceTotal = dot(vSurfacesA, vec4(1.0)) + dot(vSurfacesB, vec4(1.0));
  vec4 surface = vec4(0.0);
  ${sA}
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
  normal = normalize(normal + surfaceTilt - dot(surfaceTilt, normal) * normal);`)}`},n.customProgramCacheKey=()=>"land-surfaces-cover",{material:n,detail:t}},"landMaterial"),D_=oA;function U_(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Ut;c.morphTargetsRelative=o;let u=0;for(let h=0;h<i.length;++h){let p=i[h],f=0,m=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in p.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(p.attributes[g]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in p.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(p.morphAttributes[g].length!==i[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;a[g]===void 0&&(a[g]=[]),a[g].push(p.morphAttributes[g]),m++}if(m!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let g;if(t)g=p.index.count;else if(p.attributes.position!==void 0)g=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(u,g,h),u+=g}}if(t){let h=0,p=[];for(let f=0;f<i.length;++f){let m=i[f].index;for(let g=0;g<m.count;++g)p.push(m.getX(g)+h);h+=i[f].attributes.position.count}c.setIndex(p)}for(let h in r){let p=N_(r[h]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,p)}for(let h in a){let p=a[h][0].length;if(p!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<p;++f){let m=[];for(let y=0;y<a[h].length;++y)m.push(a[h][y][f]);let g=N_(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}l(U_,"mergeGeometries");function N_(i){let e,t,n,s=-1,r=0;for(let u=0;u<i.length;++u){let h=i[u];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Mt(a,t,n),c=0;for(let u=0;u<i.length;++u){let h=i[u];if(h.isInterleavedBufferAttribute){let p=c/t;for(let f=0,m=h.count;f<m;f++)for(let g=0;g<t;g++){let y=h.getComponent(f,g);o.setComponent(f+p,g,y)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}l(N_,"mergeAttributes");var F_="#c79a72",lA="#5a4a3a";var dn="#7a5532",km="#5f6266",O_="#8a8f96",Si="#5d6447",Om="#e8e0cc",z_="#6e4b2f",Hr="#8a8580",B_="#5b3e27",Qa="#7d858c",cA=new X(0,1,0),Ce=new zi(1,1,1),Jt=new Gi(.5,.5,1,10),Wr=new Vi(.5,1,10),eo=new er(.5,10,8),Gm=class Gm{constructor(){this.parts=[]}add(e){return this.parts.push(e),this}addAll(e,t,n=0){let s=Math.cos(n),r=Math.sin(n);return e.parts.forEach(a=>{let[o,c,u]=a.at;this.parts.push({...a,at:[t[0]+o*s+u*r,t[1]+c,t[2]-o*r+u*s],yaw:(a.yaw??0)+n})}),this}};l(Gm,"Parts");var Kt=Gm,uA=l((i,e,t)=>{switch(i){case"ancient":t.add({shape:eo,colour:e[1],at:[0,.172,0],size:[.048,.03,.048]});break;case"medieval":t.add({shape:Wr,colour:km,at:[0,.188,0],size:[.05,.04,.05]});break;case"renaissance":t.add({shape:Ce,colour:"#2a2a2a",at:[0,.178,0],size:[.06,.016,.06]});break;case"industrial":t.add({shape:Jt,colour:e[0],at:[0,.18,0],size:[.046,.022,.046]});break;default:t.add({shape:eo,colour:Si,at:[0,.172,0],size:[.052,.034,.052]})}},"headgear"),hA=l((i,e,t,n)=>{switch(i){case"club":n.add({shape:Jt,colour:dn,at:[.04,.1,.01],size:[.014,.08,.014],turn:[0,0,.5]});break;case"spear":n.add({shape:Jt,colour:dn,at:[.04,.12,0],size:[.006,.2,.006]}),n.add({shape:Wr,colour:km,at:[.04,.23,0],size:[.012,.025,.012]});break;case"pike":n.add({shape:Jt,colour:dn,at:[.04,.15,0],size:[.006,.28,.006]}),n.add({shape:Wr,colour:O_,at:[.04,.3,0],size:[.012,.03,.012]});break;case"sword":n.add({shape:Ce,colour:O_,at:[.045,.12,.012],size:[.008,.07,.004],turn:[.3,0,0]});break;case"bow":n.add({shape:Ce,colour:dn,at:[-.04,.11,.02],size:[.006,.11,.006]});break;case"lance":n.add({shape:Jt,colour:dn,at:[.04,.14,.05],size:[.006,.24,.006],turn:[1.1,0,0]});break;case"musket":case"rifle":n.add({shape:Ce,colour:i==="rifle"?"#3a3a3a":dn,at:[.03,.12,.02],size:[.008,.11,.01],turn:[0,0,.4]});break;case"case":n.add({shape:Ce,colour:"#3b2a1e",at:[.042,.072,.008],size:[.03,.022,.009]});break;case"pack":n.add({shape:Ce,colour:"#7a6a48",at:[0,.115,-.025],size:[.042,.05,.022]}).add({shape:Jt,colour:dn,at:[.042,.1,.012],size:[.006,.19,.006]});break;default:}e==="ancient"&&(i==="spear"||i==="sword")&&n.add({shape:Jt,colour:t[1],at:[-.035,.1,.012],size:[.05,.008,.05],turn:[Math.PI/2,0,.2]})},"carried"),dA={snow:{coat:"#e8eaec",legs:"#d4d7da"},irregular:{coat:"#6a5a40",legs:"#4a4036"}},zm=l((i,e,t,{legs:n=!0,dress:s}={})=>{let r=new Kt,a=s===void 0?void 0:dA[s],o=a?.coat??(i==="modern"?Si:t[0]),c=a?.legs??(i==="ancient"?F_:i==="modern"?Si:lA);return n&&(r.add({shape:Ce,colour:c,at:[-.012,.04,0],size:[.018,.08,.02]}),r.add({shape:Ce,colour:c,at:[.012,.04,0],size:[.018,.08,.02]})),r.add({shape:Ce,colour:o,at:[0,.112,0],size:[.05,.065,.028]}),r.add({shape:Ce,colour:t[1],at:[0,.088,0],size:[.052,.012,.03]}),r.add({shape:Ce,colour:o,at:[-.032,.11,0],size:[.014,.055,.016]}),r.add({shape:Ce,colour:o,at:[.032,.11,0],size:[.014,.055,.016]}),r.add({shape:eo,colour:F_,at:[0,.16,0],size:[.034,.038,.034]}),s==="snow"?r.add({shape:eo,colour:"#f2f3f4",at:[0,.172,-.002],size:[.044,.034,.044]}):s==="irregular"?r.add({shape:eo,colour:t[1],at:[0,.176,0],size:[.042,.016,.042]}):uA(i,t,r),s==="parachute"&&r.add({shape:Ce,colour:"#4d5340",at:[0,.112,-.026],size:[.046,.06,.026]}),hA(e,i,t,r),r},"person"),k_=l(i=>i<=1?[[0,0]]:i===2?[[-.045,0],[.045,.02]]:[[0,-.04],[-.06,.04],[.06,.04]],"formation"),Bm=l((i=z_)=>new Kt().add({shape:Ce,colour:i,at:[0,.09,0],size:[.05,.05,.14]}).add({shape:Ce,colour:i,at:[0,.13,.08],size:[.03,.06,.03],turn:[.5,0,0]}).add({shape:Ce,colour:i,at:[0,.155,.105],size:[.026,.026,.05]}).add({shape:Ce,colour:i,at:[-.017,.035,.05],size:[.012,.07,.012]}).add({shape:Ce,colour:i,at:[.017,.035,.05],size:[.012,.07,.012]}).add({shape:Ce,colour:i,at:[-.017,.035,-.05],size:[.012,.07,.012]}).add({shape:Ce,colour:i,at:[.017,.035,-.05],size:[.012,.07,.012]}),"horse"),fA=l((i,e,t)=>new Kt().addAll(Bm(),[0,0,0]).add({shape:Ce,colour:t[0],at:[0,.118,0],size:[.056,.01,.06]}).addAll(zm(i,e,t,{legs:!1}),[0,.04,0]),"rider"),pA=l(i=>new Kt().add({shape:Ce,colour:Hr,at:[0,.12,0],size:[.09,.08,.17]}).add({shape:Ce,colour:Hr,at:[0,.14,.1],size:[.07,.07,.06]}).add({shape:Jt,colour:Hr,at:[0,.08,.14],size:[.016,.09,.016],turn:[.3,0,0]}).add({shape:Ce,colour:Hr,at:[-.03,.04,.05],size:[.025,.08,.025]}).add({shape:Ce,colour:Hr,at:[.03,.04,.05],size:[.025,.08,.025]}).add({shape:Ce,colour:Hr,at:[-.03,.04,-.05],size:[.025,.08,.025]}).add({shape:Ce,colour:Hr,at:[.03,.04,-.05],size:[.025,.08,.025]}).add({shape:Ce,colour:i[0],at:[0,.18,-.01],size:[.07,.03,.07]}).add({shape:Ce,colour:i[1],at:[0,.2,-.01],size:[.074,.008,.074]}),"elephant"),fn=l((i,e=.05)=>({shape:Jt,colour:dn,at:i,size:[e,.01,e],turn:[0,0,Math.PI/2]}),"wheel"),mA=l((i,e,t)=>{if(e==="chariot")return new Kt().addAll(Bm(),[0,0,.09]).add({shape:Ce,colour:dn,at:[0,.055,-.04],size:[.064,.035,.05]}).add({shape:Ce,colour:i[0],at:[0,.075,-.016],size:[.066,.012,.006]}).add(fn([-.042,.035,-.045],.065)).add(fn([.042,.035,-.045],.065)).addAll(zm(t,"spear",i,{legs:!1}),[0,0,-.045]);let n=new Kt().addAll(Bm(t==="ancient"?"#8a7a64":z_),[0,0,.1]).add({shape:Ce,colour:dn,at:[0,.07,-.06],size:[.07,.04,.1]}).add({shape:Ce,colour:i[0],at:[0,.092,-.06],size:[.072,.008,.102]}).add(fn([-.042,.03,-.03])).add(fn([.042,.03,-.03])).add(fn([-.042,.03,-.09])).add(fn([.042,.03,-.09]));return e==="wagon"?n.add({shape:Jt,colour:Om,at:[0,.1,-.06],size:[.07,.1,.07],turn:[Math.PI/2,0,0]}):n.add({shape:Ce,colour:Om,at:[-.016,.112,-.04],size:[.032,.03,.04]}).add({shape:Ce,colour:i[0],at:[.018,.11,-.08],size:[.03,.026,.036]}).add({shape:Ce,colour:"#8a5a2a",at:[.014,.112,-.035],size:[.026,.03,.03]}),n},"cart"),gA=l((i,e,t)=>{if(i==="ancient"||i==="medieval")return new Kt().add({shape:Ce,colour:dn,at:[0,.04,0],size:[.08,.025,.14]}).add({shape:Ce,colour:dn,at:[0,.09,-.02],size:[.012,.12,.012],turn:[-.7,0,0]}).add({shape:Ce,colour:e[0],at:[0,.055,.05],size:[.082,.012,.03]}).add(fn([-.045,.03,.04],.045)).add(fn([.045,.03,.04],.045)).add(fn([-.045,.03,-.04],.045)).add(fn([.045,.03,-.04],.045));let n=t?.19:i==="renaissance"?.12:.16,s=i==="renaissance"?"#3d3a36":i==="modern"?Si:km;return new Kt().add({shape:Jt,colour:s,at:[0,.07,.04],size:[.024,n,.024],turn:[1.35,0,0]}).add({shape:Ce,colour:i==="modern"?Si:dn,at:[0,.045,-.02],size:[.05,.03,.09]}).add({shape:Ce,colour:e[0],at:[0,.064,-.02],size:[.052,.008,.06]}).add(fn([-.04,.035,0],.07)).add(fn([.04,.035,0],.07))},"siege"),xA=l((i,e,t)=>{if(i==="industrial")return new Kt().add({shape:Ce,colour:Qa,at:[0,.07,-.03],size:[.08,.07,.12]}).add({shape:Ce,colour:e[0],at:[0,.06,.07],size:[.07,.05,.05]}).add(fn([-.045,.025,.06],.045)).add(fn([.045,.025,.06],.045)).add(fn([-.045,.025,-.06],.045)).add(fn([.045,.025,-.06],.045));let n=new Kt().add({shape:Ce,colour:Si,at:[0,.045,0],size:[.1,.05,.17]}).add({shape:Ce,colour:"#2e2e2a",at:[-.055,.028,0],size:[.022,.05,.18]}).add({shape:Ce,colour:"#2e2e2a",at:[.055,.028,0],size:[.022,.05,.18]}).add({shape:Ce,colour:e[0],at:[0,.072,-.05],size:[.08,.006,.04]});return t?n.add({shape:Ce,colour:Si,at:[0,.088,-.01],size:[.07,.035,.08]}).add({shape:Jt,colour:Si,at:[0,.09,.08],size:[.014,.13,.014],turn:[Math.PI/2,0,0]}):n.add({shape:Ce,colour:Si,at:[0,.07,.06],size:[.09,.03,.05],turn:[.4,0,0]}),n},"vehicle"),_A=l((i,e)=>{let t=i.large?1.25:1,n=.3*t,s=.07*t,r=new Kt;switch(i.hull){case"oars":case"sail":{r.add({shape:Ce,colour:B_,at:[0,.03,0],size:[s,.045,n*.8]}).add({shape:Wr,colour:B_,at:[0,.03,n*.45],size:[s,.1,.045],turn:[Math.PI/2,0,0]}).add({shape:Ce,colour:e[0],at:[0,.056,0],size:[s+.004,.008,n*.82]});let a=i.hull==="oars"?1:i.large?3:2;for(let o=0;o<a;o++){let c=(o-(a-1)/2)*.09*t;r.add({shape:Jt,colour:dn,at:[0,.14,c],size:[.008,.2,.008]}).add({shape:Ce,colour:o===0?e[1]:Om,at:[0,.16,c],size:[s*1.3,.09,.005]})}return(i.guns??0)>0&&r.add({shape:Ce,colour:"#1f1f1f",at:[0,.036,0],size:[s+.006,.009,n*.66]}),i.hull==="oars"&&r.add({shape:Ce,colour:dn,at:[-s*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,.4]}).add({shape:Ce,colour:dn,at:[s*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,-.4]}),r}case"submarine":return r.add({shape:Jt,colour:"#33383d",at:[0,.018,0],size:[.05,n,.05],turn:[Math.PI/2,0,0]}).add({shape:Ce,colour:"#33383d",at:[0,.055,.02],size:[.02,.04,.05]}).add({shape:Ce,colour:e[0],at:[0,.078,.02],size:[.022,.006,.052]});case"carrier":return r.add({shape:Ce,colour:Qa,at:[0,.035,0],size:[s*1.1,.05,n*1.15]}).add({shape:Ce,colour:"#55595e",at:[0,.062,0],size:[s*1.5,.008,n*1.2]}).add({shape:Ce,colour:Qa,at:[s*.55,.09,.02],size:[.02,.05,.06]}).add({shape:Ce,colour:e[0],at:[s*.55,.12,.02],size:[.022,.008,.062]});default:return r.add({shape:Ce,colour:i.era==="industrial"?"#4a4a48":Qa,at:[0,.03,0],size:[s,.045,n*.85]}).add({shape:Wr,colour:i.era==="industrial"?"#4a4a48":Qa,at:[0,.03,n*.47],size:[s,.08,.045],turn:[Math.PI/2,0,0]}).add({shape:Ce,colour:Qa,at:[0,.075,-.02],size:[s*.6,.05,n*.3]}).add({shape:Jt,colour:e[0],at:[0,.12,-.03],size:[.022,.05,.022]}).add({shape:Ce,colour:e[1],at:[0,.056,0],size:[s+.004,.006,n*.86]}),[.3,-.34,.14].slice(0,i.guns??0).forEach(a=>{let o=a>0?1:-1;r.add({shape:Ce,colour:"#5f666c",at:[0,.066,n*a],size:[.035,.02,.035]}).add({shape:Jt,colour:"#5f666c",at:[0,.07,n*a+o*.04],size:[.008,.06,.008],turn:[Math.PI/2,0,0]})}),i.missiles&&[-1,1].forEach(a=>r.add({shape:Ce,colour:"#4a5056",at:[a*s*.22,.072,-n*.3],size:[.022,.022,.05],turn:[-.5,0,0]})),r}},"ship"),vA=l((i,e)=>{let t=i.large?1.3:1,n=i.stealth?"#2c3034":i.large?"#6e7378":"#7d8890";return new Kt().add({shape:Jt,colour:n,at:[0,.3,0],size:[.03*t,.2*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:Wr,colour:n,at:[0,.3,.12*t],size:[.03*t,.05*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:Ce,colour:n,at:[0,.3,.01],size:[.26*t,.006,.05*t]}).add({shape:Ce,colour:e[0],at:[0,.304,.01],size:[.06*t,.004,.052*t]}).add({shape:Ce,colour:n,at:[0,.3,-.09*t],size:[.09*t,.005,.03*t]}).add({shape:Ce,colour:e[1],at:[0,.325,-.09*t],size:[.005,.045,.03*t]})},"aircraft"),yA=l(i=>new Kt().add({shape:eo,colour:Si,at:[0,.27,.02],size:[.06,.055,.09]}).add({shape:Ce,colour:Si,at:[0,.275,-.08],size:[.015,.015,.12]}).add({shape:Ce,colour:i[0],at:[0,.3,-.13],size:[.004,.04,.025]}).add({shape:Ce,colour:"#2e2e2e",at:[0,.31,.02],size:[.24,.003,.012]}).add({shape:Ce,colour:"#2e2e2e",at:[0,.31,.02],size:[.012,.003,.24]}),"helicopter"),bA=l((i,e)=>{let t=e?1.4:1;return new Kt().add({shape:Jt,colour:"#d8d8d8",at:[0,.14*t,0],size:[.024*t,.18*t,.024*t]}).add({shape:Wr,colour:e?"#c8a020":i[0],at:[0,.255*t,0],size:[.024*t,.05*t,.024*t]}).add({shape:Ce,colour:i[1],at:[0,.06*t,0],size:[.07*t,.03*t,.004]}).add({shape:Ce,colour:i[1],at:[0,.06*t,0],size:[.004,.03*t,.07*t]})},"missile"),G_=l((i,e)=>{switch(i.shape){case"foot":{let t=new Kt;return k_(i.squad).forEach(([n,s],r)=>t.addAll(zm(i.era,i.gear??"none",e,{dress:i.dress}),[n,0,s],r*.3-.3)),t}case"mounted":{let t=new Kt;return k_(i.squad).forEach(([n,s])=>t.addAll(fA(i.era,i.gear??"none",e),[n*1.4,0,s])),t}case"elephant":return pA(e);case"cart":return mA(e,i.cart??"wagon",i.era);case"siege":return gA(i.era,e,i.large===!0);case"vehicle":return xA(i.era,e,i.large===!0);case"ship":return _A(i,e);case"aircraft":return vA(i,e);case"helicopter":return yA(e);default:return bA(e,i.large===!0)}},"figureParts"),MA=l(({at:i,size:e,turn:t=[0,0,0],yaw:n=0})=>new _t().compose(new X(...i),new yn().setFromAxisAngle(cA,n).multiply(new yn().setFromEuler(new Un(...t))),new X(...e)),"partMatrix"),nd=l(i=>{let e=i.map(n=>{let{shape:s,colour:r}=n,a=s.clone(),o=new ke(r),c=a.getAttribute("position").count,u=new Float32Array(c*3);for(let h=0;h<c;h++)u.set([o.r,o.g,o.b],h*3);return a.applyMatrix4(MA(n)),a.setAttribute("color",new Mt(u,3)),a}),t=U_(e)??new Ut;return e.forEach(n=>n.dispose()),t.computeBoundingBox(),t.computeBoundingSphere(),t},"mergeParts"),V_=l((i,e)=>nd(G_(i,e).parts),"figureGeometry"),SA=new Gi(.19,.2,1,28),wA=new tr(.22,.014,4,32),H_=l((i,e,{fortified:t,scale:n,stand:s,part:r="whole"})=>{let a=i.shape==="ship",o=a?0:s,c=r==="base"?[]:G_(i,e).parts.map(u=>({...u,at:[u.at[0]*n,u.at[1]*n+o,u.at[2]*n],size:[u.size[0]*n,u.size[1]*n,u.size[2]*n]}));return r==="figures"||(a||c.push({shape:SA,colour:e[1],at:[0,s/2,0],size:[1,s,1]}),t&&c.push({shape:wA,colour:"#b5ab98",at:[0,o+.015,0],size:[1,1,2.5],turn:[Math.PI/2,0,0]})),nd(c)},"unitBodyGeometry"),EA=new Vi(.75,.5,4),AA=new tr(.36,.025,6,24),W_=l((i,e,t)=>nd([...i.flatMap(({x:n,z:s,width:r,height:a})=>[{shape:Ce,colour:"#b5ab98",at:[n,a/2,s],size:[r,a,r]},{shape:EA,colour:e,at:[n,a+r*.2,s],size:[r,r*.8,r],turn:[0,Math.PI/4,0]}]),...t?[{shape:AA,colour:"#8d8577",at:[0,.02,0],size:[1,1,2.5],turn:[Math.PI/2,0,0]}]:[]]),"cityGeometry");var sn=l((i,e,t=3)=>({shape:"foot",era:i,gear:e,squad:t}),"foot"),Cl=l((i,e,t=2)=>({shape:"mounted",era:i,gear:e,squad:t}),"mounted"),Gn=l((i,e,t=!1,n=0,s=!1)=>({shape:"ship",era:i,hull:e,squad:1,large:t,guns:n,missiles:s}),"ship"),Rl=l((i,e=!1,t=!1)=>({shape:"aircraft",era:i,squad:1,large:e,stealth:t}),"aircraft"),Vm=l((i,e)=>({shape:"cart",era:i,cart:e,squad:1}),"cart"),X_={Warrior:sn("ancient","club"),Spearman:sn("ancient","spear"),Swordman:sn("ancient","sword"),Archer:sn("ancient","bow"),Horseman:Cl("ancient","spear"),Chariot:Vm("ancient","chariot"),Elephant:{shape:"elephant",era:"ancient",squad:1},Catapult:{shape:"siege",era:"ancient",squad:1},Trireme:Gn("ancient","oars"),Settlers:Vm("ancient","wagon"),Diplomat:sn("ancient","case",1),Caravan:Vm("ancient","goods"),Explorer:sn("ancient","pack",1),Pikeman:sn("medieval","pike"),Knight:Cl("medieval","lance"),Crusader:Cl("medieval","sword"),Fanatic:sn("medieval","sword"),Sail:Gn("medieval","sail"),Musketman:sn("renaissance","musket"),Dragoon:Cl("renaissance","musket"),Cannon:{shape:"siege",era:"renaissance",squad:1},Frigate:Gn("renaissance","sail",!0,1),Galleon:Gn("renaissance","sail",!0),Rifleman:sn("industrial","rifle"),AlpineTrooper:{...sn("industrial","rifle"),dress:"snow"},Partisan:{...sn("industrial","rifle"),dress:"irregular"},Cavalry:Cl("industrial","rifle"),Artillery:{shape:"siege",era:"industrial",squad:1},Engineer:sn("industrial","none",2),Ironclad:Gn("industrial","steam",!1,1),Transport:Gn("industrial","steam",!0),Freight:{shape:"vehicle",era:"industrial",squad:1},Spy:sn("industrial","none",1),MechanizedInfantry:{shape:"vehicle",era:"modern",squad:1},Marine:sn("modern","rifle"),Paratrooper:{...sn("modern","rifle"),dress:"parachute"},Tank:{shape:"vehicle",era:"modern",squad:1,large:!0},Howitzer:{shape:"siege",era:"modern",squad:1,large:!0},Destroyer:Gn("modern","steam",!1,1),Cruiser:Gn("modern","steam",!0,2),MissileCruiser:Gn("modern","steam",!0,1,!0),Battleship:Gn("modern","steam",!0,3),Submarine:Gn("modern","submarine"),Carrier:Gn("modern","carrier",!0),Fighter:Rl("modern"),StealthFighter:Rl("modern",!1,!0),Bomber:Rl("modern",!0),StealthBomber:Rl("modern",!0,!0),Helicopter:{shape:"helicopter",era:"modern",squad:1},CruiseMissile:{shape:"missile",era:"modern",squad:1},Nuclear:{shape:"missile",era:"modern",squad:1,large:!0}},id=l((i,e=[])=>(Object.prototype.hasOwnProperty.call(X_,i)?X_[i]:void 0)??(e.includes("Naval")||e.includes("NavalTransport")?Gn("industrial","steam"):e.includes("Air")?Rl("modern"):sn("ancient","spear")),"unitLook"),sd=l(i=>i.shape==="aircraft"||i.shape==="helicopter"||i.shape==="missile","airborne");var TA=.03,Z_="#fff4b0",CA=.04,rd=.004,Hm=.018,q_=.01,Y_=.022,$_=.03,J_=.03,od=.002,RA="#4caf50",PA="#e0b030",IA="#d04030",LA=256,Xr,wi,qr,Yr,Ei,$r,Ts,no,$m=class $m{constructor(){W(this,Xr,new Map);W(this,wi,new Map);W(this,qr,new Map);W(this,Yr,new Map);W(this,Ei,new Map);W(this,$r,new Map);W(this,Ts,null);W(this,no,0);this.figureMaterial=new xi({vertexColors:!0,roughness:.8,metalness:.05});this.geometries={ring:new tr(.23,.018,8,36)}}material(e,t=!1){let n=`${e}${t?" glow":""}`,s=d(this,Xr).get(n);return s===void 0&&(s=new xi({color:new ke(e),roughness:.75,metalness:.05,...t?{emissive:new ke(e),emissiveIntensity:.6}:{}}),d(this,Xr).set(n,s)),s}body(e,t,n,s=1,r="whole"){let a=JSON.stringify([e,t,n,s,r]),o=d(this,Yr).get(a);return o===void 0&&(o=H_(e,t,{fortified:n,scale:s,stand:TA,part:r}),d(this,Yr).set(a,o)),o}city(e){let t=FA(e),n=JSON.stringify([e.name,t.length,e.colours[0],e.walled]),s=d(this,Ei).get(n);return s===void 0&&(s=W_(t,e.colours[0],e.walled),d(this,Ei).set(n,s)),s}figure(e,t){let n=JSON.stringify([e,t]),s=d(this,qr).get(n);return s===void 0&&(s=V_(e,t),d(this,qr).set(n,s)),s}plain(e){let t=d(this,$r).get(e);return t===void 0&&(t=new Ks({color:new ke(e),sizeAttenuation:!1,depthTest:!1}),d(this,$r).set(e,t)),t}pointer(){if(d(this,Ts)===null){let e=document.createElement("canvas"),t=e.getContext("2d");e.width=32,e.height=32,t!==null&&(t.fillStyle=Z_,t.strokeStyle="#3a3420",t.lineWidth=3,t.beginPath(),t.moveTo(3,5),t.lineTo(29,5),t.lineTo(16,28),t.closePath(),t.fill(),t.stroke());let n=new Qs(e);n.colorSpace=kt,z(this,Ts,new Ks({map:n,sizeAttenuation:!1,depthTest:!1,transparent:!0}))}return d(this,Ts)}label(e,t,n){let s=`${e}\0${t}\0${n}`,r=d(this,wi).get(s);if(r===void 0){let a=document.createElement("canvas"),o=a.getContext("2d"),c="600 28px system-ui, sans-serif",u=40;o!==null&&(o.font=c,a.width=Math.ceil(o.measureText(e).width)+24,a.height=u,o.font=c,o.fillStyle=t,o.beginPath(),o.roundRect?.(0,0,a.width,u,10),o.fill(),o.fillStyle=n,o.textBaseline="middle",o.fillText(e,12,u/2+1));let h=new Qs(a);h.colorSpace=kt,r=new Ks({map:h,sizeAttenuation:!1,depthTest:!1,transparent:!0}),d(this,wi).set(s,r)}return r}get sweepDue(){return d(this,wi).size+d(this,Ei).size>Math.max(LA,d(this,no)*2)}sweep(e){let t=new Set;for(let n of e)n.traverse(s=>{s instanceof vt&&t.add(s.geometry),s instanceof Ss&&t.add(s.material)});d(this,wi).forEach((n,s)=>{t.has(n)||(n.map?.dispose(),n.dispose(),d(this,wi).delete(s))}),d(this,Ei).forEach((n,s)=>{t.has(n)||(n.dispose(),d(this,Ei).delete(s))}),z(this,no,d(this,wi).size+d(this,Ei).size)}dispose(){Object.values(this.geometries).forEach(e=>e.dispose()),d(this,qr).forEach(e=>e.dispose()),d(this,Yr).forEach(e=>e.dispose()),d(this,Ei).forEach(e=>e.dispose()),d(this,Yr).clear(),d(this,Ei).clear(),this.figureMaterial.dispose(),d(this,$r).forEach(e=>e.dispose()),d(this,Ts)?.map?.dispose(),d(this,Ts)?.dispose(),d(this,$r).clear(),z(this,Ts,null),d(this,Xr).forEach(e=>e.dispose()),d(this,wi).forEach(e=>{e.map?.dispose(),e.dispose()}),d(this,Xr).clear(),d(this,wi).clear(),d(this,qr).clear(),z(this,no,0)}};Xr=new WeakMap,wi=new WeakMap,qr=new WeakMap,Yr=new WeakMap,Ei=new WeakMap,$r=new WeakMap,Ts=new WeakMap,no=new WeakMap,l($m,"MarkerKit");var cd=$m,K_=l(i=>{let{r:e,g:t,b:n}=new ke(i);return .2126*e+.7152*t+.0722*n>.35?"#111111":"#ffffff"},"textOn"),to=l((i,e,t,n)=>(i.position.set(e,t,n),i),"place"),ad=l((i,e)=>{let t=e*2654435761;for(let n=0;n<i.length;n++)t=Math.imul(t^i.charCodeAt(n),2246822519);return(t>>>0)%1e4/1e4},"fractionOf"),DA=l(i=>[i.count>1?String(i.count):"",i.status??"",i.veteran?"\u2605":""].filter(e=>e!=="").join(" "),"flagText"),NA=3,UA=4,Pl=l((i,e,t,n,s=NA)=>{let r=new Ss(i);return r.scale.set(e,t,1),r.center.set(.5,-n/t),r.renderOrder=s,r.frustumCulled=!1,r},"badge"),j_=l((i,e,t)=>{let n=i.map?.image,s=n&&n.height>0&&n.width>0?n.width/n.height:1;return Pl(i,e*s,e,t)},"label"),ld=[0,.36,0],FA=l(i=>{let e=Math.min(12,2+Math.ceil(i.size/2));return Array.from({length:e},(t,n)=>{let s=n/e*Math.PI*2+ad(i.name,1)*6,r=n===0?0:.12+ad(i.name,n+2)*.18;return{x:Math.cos(s)*r,z:Math.sin(s)*r,width:.07+ad(i.name,n+20)*.05,height:(n===0?.13:.05)+ad(i.name,n+40)*.05}})},"buildingsOf"),OA=l((i,e)=>{let t=new tn;return t.add(new vt(i.city(e),i.figureMaterial)),t.add(to(j_(i.label(`${e.name}  ${e.size}${e.disorder?" !":""}`,e.colours[0],K_(e.colours[0])),J_,0),...ld)),t},"drawCity"),BA=l((i,e,t=null,n=!1)=>{let s=new tn,{ring:r}=i.geometries,a=id(e.type,e.kinds),o=n&&sd(a),c=i.body(a,e.colours,e.fortified,e.size,o?"figures":"whole"),u=o?new tn:s,h=c.boundingBox?.max.y??.3,p=t?.at??[0,h+CA,0],f=e.health!==null,m=(t?.over??0)+(f?rd+od:0),g=m+q_+od,y=DA(e),x=g+(y===""?0:Y_+od),_=new vt(c,i.figureMaterial);if(_.name=Xm,_.rotation.y=e.facing,u.add(_),o&&(u.name=qm,s.add(new vt(i.body(a,e.colours,e.fortified,e.size,"base"),i.figureMaterial),u)),e.health!==null){let b=Math.max(0,Math.min(1,e.health));if(u.add(to(Pl(i.plain("#202020"),Hm,rd,t?.over??0),...p)),b>0){let A=Pl(i.plain(b>.5?RA:b>.25?PA:IA),Hm*b,rd*.6,(t?.over??0)+rd*.2);A.center.x=1/(2*b),u.add(to(A,...p))}}if(u.add(to(Pl(i.plain(e.colours[0]),Hm,q_,m),...p)),y!==""&&u.add(to(j_(i.label(y,e.colours[0],K_(e.colours[0])),Y_,g),...p)),e.active){let b=new vt(r,i.material(Z_,!0));b.rotation.x=Math.PI/2,b.position.y=.01,s.add(b),u.add(to(Pl(i.pointer(),$_,$_,x,UA),...p))}return s},"drawUnit"),Wm="unit",Xm="figures",qm="aloft",Ym=.26,Q_=l((i,e,t=!1)=>{let n=new tn;if(e.city!==null&&n.add(OA(i,e.city)),e.unit!==null){let s=e.city===null?0:Ym,r=BA(i,e.unit,e.city===null?null:{at:[ld[0],ld[1],ld[2]-s],over:J_+od},t);r.name=Wm,r.position.z=s,n.add(r)}return n},"drawMarker"),Il=new WeakMap,ud=new WeakMap,kA=.5,Ll=l((i,e,t)=>{i.forEach(n=>n.traverse(s=>{if(!(s instanceof vt||s instanceof Ss))return;let r=Il.get(s)??s.material,a=t.get(r);a===void 0&&(a=r.clone(),s instanceof Ss?a.transparent=!0:a.alphaHash=!0,t.set(r,a)),Il.has(s)||(Il.set(s,r),ud.set(s,s.castShadow)),s.material=a,s.castShadow=(ud.get(s)??!1)&&e>=kA})),t.forEach((n,s)=>{n.opacity=s.opacity*e})},"fade"),ev=l((i,e)=>{i.forEach(t=>t.traverse(n=>{let s=Il.get(n);s===void 0||!(n instanceof vt||n instanceof Ss)||(n.material=s,n.castShadow=ud.get(n)??n.castShadow,Il.delete(n),ud.delete(n))})),io(e)},"unfaded"),io=l(i=>{i.forEach(e=>e.dispose()),i.clear()},"unfade");var or=l(i=>i*Math.PI/180,"degrees"),zA=or(25),GA=or(80),VA=5,HA=90,WA=1.12,Dl=or(40),Jm=or(45),XA={above:{yaw:0,pitch:or(80)},classic:{yaw:0,pitch:or(55)},isometric:{yaw:or(45),pitch:or(30)}};var tv=l(i=>({focus:i,...XA.classic,distance:24}),"defaultOrbit"),Zm=l((i,e,t)=>Math.min(t,Math.max(e,i)),"clamp"),nv=l(i=>{let e=Math.PI*2;return(i%e+e)%e},"normaliseYaw"),Zr=l(i=>({...i,yaw:nv(i.yaw),pitch:Zm(i.pitch,zA,GA),distance:Zm(i.distance,VA,HA)}),"clampOrbit"),ro=l((i,e)=>Zr({...i,distance:i.distance/WA**e}),"zoomed"),hd=l(({yaw:i,pitch:e})=>{let t=Math.sin(i),n=Math.cos(i),s=Math.sin(e),r=Math.cos(e);return{forward:[t*r,-s,-n*r],right:[n,0,t],up:[t*s,r,-n*s]}},"basis"),dd=l((i,e)=>{let{forward:t}=hd(i),[n,s]=i.focus;return[n-t[0]*i.distance,e-t[1]*i.distance,s-t[2]*i.distance]},"eye"),Km=l((i,e,[t,n,s],r)=>{let{forward:a,right:o,up:c}=hd(i),u=dd(i,e),h=[t-u[0],n-u[1],s-u[2]],p=l(g=>(h[0]??0)*g[0]+(h[1]??0)*g[1]+(h[2]??0)*g[2],"dot"),f=p(a),m=Math.tan(Dl/2);return f<=1e-6?null:[p(o)/(f*m*r),p(c)/(f*m)]},"toScreen"),jm=l((i,e,[t,n],s)=>{let{forward:r,right:a,up:o}=hd(i),c=Math.tan(Dl/2);return{from:dd(i,e),direction:[0,1,2].map(u=>(r[u]??0)+t*c*s*(a[u]??0)+n*c*(o[u]??0))}},"rayThrough"),so=l((i,e,t,n,s=e)=>{let{from:r,direction:a}=jm(i,e,t,n);if(a[1]>-1e-6)return null;let o=(s-r[1])/a[1];return o<=0?null:[r[0]+a[0]*o,r[2]+a[2]*o]},"groundAt"),iv=l((i,e,t,n,s)=>{let r=so(i,e,t,s),a=so(i,e,n,s);if(r!==null&&a!==null)return{...i,focus:[i.focus[0]+r[0]-a[0],i.focus[1]+r[1]-a[1]]};let o=(t[0]-n[0])*s,c=(t[1]-n[1])/Math.sin(i.pitch),u=i.distance*Math.tan(Dl/2),{right:h}=hd(i),p=[Math.sin(i.yaw),-Math.cos(i.yaw)];return{...i,focus:[i.focus[0]+(o*h[0]+c*(p[0]??0))*u,i.focus[1]+(o*h[2]+c*(p[1]??0))*u]}},"panned"),sv=l((i,e,t)=>{let n=l((a,o)=>(a%o+o)%o,"wrap"),[s,r]=i.focus;return{...i,yaw:nv(i.yaw),focus:[n(s,e.u),e.v===null?Zm(r,0,t):n(r,e.v)]}},"settled"),rv=l((i,e,t,n,s)=>{let r=l((c,u)=>u===null?c:c-u*Math.round(c/u),"short"),a=Math.PI*2,o=t*t*(3-2*t);return{focus:[i.focus[0]+r(e.focus[0]-i.focus[0],n.u)*o,i.focus[1]+r(e.focus[1]-i.focus[1],n.v)*o],yaw:i.yaw+(s??r(e.yaw-i.yaw,a))*o,pitch:i.pitch+(e.pitch-i.pitch)*o,distance:i.distance+(e.distance-i.distance)*o}},"between"),fd=l(i=>({near:i*1.2,far:i*3.5}),"sightFor");var qA=new ke("#3f8a8c"),YA=new ke("#173a52"),$A=new ke("#e8eeee"),av=`
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
`,ZA=`
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
`,lr,ei,Vn,e0=class e0{constructor(e,t){W(this,lr);W(this,ei);W(this,Vn);z(this,lr,e),z(this,ei,new Uint16Array(e.columns*e.rows*2));for(let s=0;s<d(this,ei).length;s+=2)d(this,ei)[s]=ki.toHalfFloat(0),d(this,ei)[s+1]=ki.toHalfFloat(1);z(this,Vn,new Xa(d(this,ei),e.columns,e.rows,qi,Bn)),d(this,Vn).wrapS=Oi,d(this,Vn).wrapT=e.wrapsV?Oi:jn,d(this,Vn).magFilter=Gt,d(this,Vn).minFilter=Gt,d(this,Vn).needsUpdate=!0;let n=new Mn({uniforms:Gr.merge([Te.fog,{ground:{value:null},cell:{value:new We},size:{value:new We},shallow:{value:qA.clone()},deep:{value:YA.clone()},foam:{value:$A.clone()},sky:{value:t.clone()},sunDirection:{value:new X(.5,.7,.4).normalize()},sunColour:{value:new ke("#fff0d8")},extentV:{value:0},wrapsV:{value:!1}}]),vertexShader:av,fragmentShader:ZA,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=d(this,Vn),n.uniforms.cell.value.set(e.spacingU,e.spacingV),n.uniforms.size.value.set(e.columns,e.rows),n.uniforms.extentV.value=e.rows*e.spacingV,n.uniforms.wrapsV.value=e.wrapsV,this.mesh=new vt(new Hi(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=1}setChunk(e){let{columns:t,rows:n,spacingU:s,spacingV:r}=d(this,lr),a=Math.round(e.u/s),o=Math.round(e.v/r),c=e.positions.length/3;for(let u=0;u<c;u++){let h=a+Math.round((e.positions[u*3]??0)/s),p=o+Math.round((e.positions[u*3+2]??0)/r);if(h>=0&&h<t&&p>=0&&p<n){let f=(p*t+h)*2;d(this,ei)[f]=ki.toHalfFloat(e.positions[u*3+1]??0),d(this,ei)[f+1]=ki.toHalfFloat(e.unseen[u]??0)}}d(this,Vn).needsUpdate=!0}height(e,t){return ki.fromHalfFloat(d(this,ei)[(t*d(this,lr).columns+e)*2]??0)}unseen(e,t){return ki.fromHalfFloat(d(this,ei)[(t*d(this,lr).columns+e)*2+1]??0)>.5}texture(){return d(this,Vn)}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=d(this,lr).wrapsV&&e}follow(e,t,n,s){this.mesh.position.set(e,0,t),this.mesh.scale.set(n,n,1),this.mesh.material.uniforms.sunDirection.value.copy(s).normalize()}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),d(this,Vn).dispose()}};lr=new WeakMap,ei=new WeakMap,Vn=new WeakMap,l(e0,"Water");var Qm=e0,ov=Qm,JA=`
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
`,KA=.18,Nl,t0=class t0{constructor(e,t){W(this,Nl);z(this,Nl,t.wrapsV);let n=new Mn({uniforms:Gr.merge([Te.fog,{ground:{value:null},cell:{value:new We},size:{value:new We},extent:{value:new We},wrapsV:{value:!1}}]),vertexShader:av,fragmentShader:JA,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=e,n.uniforms.cell.value.set(t.spacingU,t.spacingV),n.uniforms.size.value.set(t.columns,t.rows),n.uniforms.extent.value.set(t.columns*t.spacingU,t.rows*t.spacingV),n.uniforms.wrapsV.value=t.wrapsV,this.mesh=new vt(new Hi(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=2}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=d(this,Nl)&&e}follow(e,t,n){this.mesh.position.set(e,KA,t),this.mesh.scale.set(n,n,1)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}};Nl=new WeakMap,l(t0,"Clouds");var pd=t0;var jA=.6,QA=.05,Jr=64,lv=.125,eT=`
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
`,tT=`
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
`,cv=l(i=>{let e=Math.max(1,Math.ceil(Math.sqrt(i)));return[e,Math.max(1,Math.ceil(i/e))]},"atlasCells"),nT=l((i,e)=>{let[t]=cv(i.length),n=Jr*(1-2*lv);return i.flatMap((s,r)=>{let a=e(s);if(a===null||a[0]<=0||a[1]<=0)return[];let o=n/Math.max(a[0],a[1]),c=a[0]*o,u=a[1]*o;return[{_:s,x:r%t*Jr+(Jr-c)/2,y:Math.floor(r/t)*Jr+(Jr-u)/2,width:c,height:u}]})},"atlasPlaces"),iT=l(i=>{let{naturalWidth:e,naturalHeight:t,width:n,height:s}=i;return[e??(typeof n=="number"?n:0),t??(typeof s=="number"?s:0)]},"imageSize"),cr,Hn,Ul,Kr,Fl,md,ao,uv,hv,i0=class i0{constructor(e){W(this,ao);W(this,cr,null);W(this,Hn,null);W(this,Ul,"");W(this,Kr);W(this,Fl,new WeakMap);W(this,md,1);z(this,Kr,e),this.material=new Mn({uniforms:Gr.merge([Te.fog,{atlas:{value:null},lean:{value:1},lift:{value:QA},bias:{value:jA},cells:{value:[1,1]},pad:{value:lv}}]),vertexShader:eT,fragmentShader:tT,fog:!0,toneMapped:!1})}lean(e){this.material.uniforms.lean.value=Math.sin(e)}set(e){if(d(this,cr)?.dispose(),z(this,cr,null),e===null||e.count===0)return null;T(this,ao,hv).call(this,e);let t=new pl,n=new Hi(1,1);return t.index=n.index,t.setAttribute("position",n.getAttribute("position")),t.setAttribute("uv",n.getAttribute("uv")),t.setAttribute("anchor",new ws(e.anchors,3)),t.setAttribute("slot",new ws(e.slots,2)),t.setAttribute("size",new ws(e.sizes,1)),t.setAttribute("cell",new ws(e.cells,1)),t.instanceCount=e.count,z(this,cr,t),t}make(){let e=new vt(d(this,cr)??void 0,this.material);return e.frustumCulled=!1,e.castShadow=!1,e.receiveShadow=!1,e}dispose(){d(this,cr)?.dispose(),d(this,Hn)?.dispose(),this.material.dispose()}};cr=new WeakMap,Hn=new WeakMap,Ul=new WeakMap,Kr=new WeakMap,Fl=new WeakMap,md=new WeakMap,ao=new WeakSet,uv=l(function(e){if(e===null)return 0;let t=d(this,Fl).get(e);return t===void 0&&(t=fi(this,md)._++,d(this,Fl).set(e,t)),t},"#imageId"),hv=l(function(e){let t=e.names.map(o=>`${o}:${T(this,ao,uv).call(this,d(this,Kr).call(this,o))}`).join(",");if(t===d(this,Ul)&&d(this,Hn)!==null)return;let[n,s]=cv(e.names.length),r=document.createElement("canvas"),a=r.getContext("2d");r.width=n*Jr,r.height=s*Jr,a!==null&&(a.imageSmoothingEnabled=!1,nT(e.names,o=>{let c=d(this,Kr).call(this,o);return c===null?null:iT(c)}).forEach(({_:o,x:c,y:u,width:h,height:p})=>{let f=d(this,Kr).call(this,o);f!==null&&a.drawImage(f,c,u,h,p)})),d(this,Hn)?.dispose(),z(this,Hn,new Qs(r)),d(this,Hn).colorSpace=kt,d(this,Hn).premultiplyAlpha=!0,d(this,Hn).magFilter=zt,d(this,Hn).minFilter=On,d(this,Hn).generateMipmaps=!0,z(this,Ul,t),this.material.uniforms.atlas.value=d(this,Hn),this.material.uniforms.cells.value=[n,s]},"#drawAtlas"),l(i0,"YieldIcons");var n0=i0,dv=n0;var s0=10466244,sT=14082796,rT=5984576,aT=16773336,fv=l((i,e,t)=>{let n=l((s,r)=>{if(r===null)return[0];let a=[];for(let o=Math.floor((s-e)/r);o*r<=s+e;o++)a.push(o*r);return a},"along");return n(i[0],t.u).flatMap(s=>n(i[1],t.v).map(r=>[s,r]))},"copiesNear"),oT=l(i=>[new An(new X(0,0,1),0),new An(new X(0,0,-1),i)],"polesAt"),lT=l((i,[e,t],n,s,r)=>i.flatMap(([a,o])=>[[a,o],...r&&s!==null&&t>n?[[a,o-s]]:[],...r&&s!==null&&e<0?[[a,o+s]]:[]]),"overlayCopies"),pv=2048,mv=Math.hypot(30,40,20),gv=l((i,{period:e,ground:t,yieldIcon:n})=>{let s=new Yh({antialias:!0,canvas:i}),r=new el,a=new vn(Dl*180/Math.PI,1,.1,400),o=new tn,{material:c,detail:u}=D_(e,t.rows*t.spacingV),h=new fl(aT,2.6),p=new Map,f=new Map,m=new xi({vertexColors:!0,roughness:.9,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,clipShadows:!0}),g=t.rows*t.spacingV,y=oT(g),x=new Map,_=new Map,b=new Map,A=new ol(1,1),S=l(H=>new xi({color:new ke(H),roughness:1,metalness:0,flatShading:!0}),"puffGrey"),R=[S("#d8d5cf"),S("#a9a59d")],C=new tn,v=new cd,w=new tn,L=new dv(n??(()=>null)),I=new ov(t,new ke(s0)),F=new pd(I.texture(),t),G=new Qo(s0,30,110),j=[[0,0]],U="0,0",Y=[[0,0]],ie="0,0",O=!1,Z=null;s.outputColorSpace=kt,s.localClippingEnabled=!0,s.toneMapping=gl,s.shadowMap.enabled=!0,s.shadowMap.type=nh,r.background=new ke(s0),r.fog=G,r.add(new ul(sT,rT,.9)),r.add(o),r.add(C),r.add(w),r.add(I.mesh),r.add(F.mesh),h.position.set(30,40,20),h.castShadow=!0,h.shadow.mapSize.set(pv,pv),h.shadow.bias=-4e-4,h.shadow.normalBias=.02,r.add(h),r.add(h.target);let V=l((H,J,se=j)=>se.map(([xe,he])=>{let Re=H.make();return Re.position.set(H.at[0]+xe,H.at[1],H.at[2]+he),J.add(Re),Re}),"copiesOf"),Q=l(H=>V(H,o,lT(j,H.span,g,e.v,O)),"overlayCopiesOf"),ne=l(H=>H.flatMap(J=>{let se=J.getObjectByName(Wm);return se===void 0?[]:[se]}),"unitParts"),de=l(H=>H.drawn.forEach(J=>{let se=J.getObjectByName(Xm),xe=J.getObjectByName(qm);se!==void 0&&(se.rotation.y=H.facing),xe!==void 0&&(xe.position.y=H.aloft)}),"pose"),ge=l(H=>{let J=Fm(H.through,H.seed);H.drawn.forEach(se=>se.children.forEach((xe,he)=>{let Re=J[he];if(Re===void 0){xe.visible=!1;return}xe.position.set(...Re.at),xe.scale.setScalar(Math.max(Re.size,1e-4)),xe.visible=Re.size>0}))},"shapePuff"),ee=l((H,J=!1)=>{let se=Q_(v,H,J);return se.traverse(xe=>{xe.castShadow=xe instanceof vt}),se},"markerOf"),pe=l(()=>{v.sweepDue&&v.sweep([...x.values(),..._.values()].flatMap(({original:H})=>H===void 0?[]:[H]))},"sweep");return{render:l(()=>s.render(r,a),"render"),resize:l((H,J,se)=>{s.setPixelRatio(se),s.setSize(H,J,!1),a.aspect=J>0?H/J:1,a.updateProjectionMatrix()},"resize"),setChunk:l((H,J,se)=>{let xe=`${H},${J}`,he=new Ut;he.setAttribute("position",new Mt(se.positions,3)),he.setAttribute("normal",new Mt(se.normals,3)),he.setAttribute("color",new Mt(se.colours,3)),he.setAttribute("surfacesA",new Mt(se.surfacesA,4,!0)),he.setAttribute("surfacesB",new Mt(se.surfacesB,4,!0)),he.setAttribute("shore",new Mt(se.shore,1,!0)),he.setIndex(new Mt(se.indices,1)),he.computeBoundingSphere();let Re=p.get(xe);Re!==void 0&&(Re.drawn.forEach(Fe=>o.remove(Fe)),Re.geometry.dispose());let Ve={geometry:he,at:[se.u,0,se.v],make:l(()=>{let Fe=new vt(he,c);return Fe.castShadow=!0,Fe.receiveShadow=!0,Fe},"make"),drawn:[]};Ve.drawn=V(Ve,o),p.set(xe,Ve),I.setChunk(se)},"setChunk"),setOverlay:l((H,J,se)=>{let xe=`${H},${J}`,he=f.get(xe);if(he!==void 0&&(he.drawn.forEach(it=>o.remove(it)),he.geometry.dispose(),f.delete(xe)),se===null)return;let Re=new Ut;Re.setAttribute("position",new Mt(se.positions,3)),Re.setAttribute("normal",new Mt(se.normals,3)),Re.setAttribute("color",new Mt(se.colours,3)),Re.computeBoundingSphere(),Re.computeBoundingBox();let Ve=Re.boundingBox,Fe={geometry:Re,span:[se.v+(Ve?.min.z??0),se.v+(Ve?.max.z??0)],at:[se.u,0,se.v],make:l(()=>{let it=new vt(Re,m);return it.castShadow=!0,it.receiveShadow=!0,it},"make"),drawn:[]};Fe.drawn=Q(Fe),f.set(xe,Fe)},"setOverlay"),setMarker:l((H,J,se)=>{let xe=x.get(H);if(xe?.drawn.forEach(Ve=>C.remove(Ve)),xe?.faded!==void 0&&io(xe.faded),x.delete(H),se===null)return;let he=ee(se),Re={at:J,make:l(()=>he.clone(),"make"),drawn:[],original:he};Re.drawn=V(Re,C,Y),x.set(H,Re),pe()},"setMarker"),setWalker:l((H,J)=>{let se=_.get(H);if(se?.drawn.forEach(Re=>C.remove(Re)),se!==void 0&&io(se.faded),_.delete(H),J===null)return;let xe=ee(J,!0),he={at:se?.at??[0,0,0],facing:se?.facing??J.unit?.facing??0,aloft:se?.aloft??0,opacity:1,faded:new Map,make:l(()=>xe.clone(),"make"),drawn:[],original:xe};he.drawn=V(he,C,Y),de(he),_.set(H,he),pe()},"setWalker"),placeWalker:l((H,J,se,xe=0)=>{let he=_.get(H);he!==void 0&&(he.at=J,he.facing=se,he.aloft=xe,he.drawn.forEach((Re,Ve)=>{let[Fe,it]=Y[Ve]??[0,0];Re.position.set(J[0]+Fe,J[1],J[2]+it)}),de(he))},"placeWalker"),fadeMarker:l((H,J)=>{let se=x.get(H),xe=Math.min(1,Math.max(0,J));if(!(se===void 0||xe===(se.opacity??1))){if(se.opacity=xe,se.faded??=new Map,xe===1){ev(ne(se.drawn),se.faded);return}Ll(ne(se.drawn),xe,se.faded)}},"fadeMarker"),puff:l((H,J,se=0)=>{let xe=b.get(H);if(J===null){xe?.drawn.forEach(Ve=>C.remove(Ve)),b.delete(H);return}let he=Number(H.replace(/\D/g,""))||0,Re=xe??{at:J,through:se,seed:he,make:l(()=>{let Ve=new tn;return Fm(0,he).forEach(({shade:Fe})=>Ve.add(new vt(A,R[Fe]))),Ve},"make"),drawn:[]};xe===void 0&&(Re.drawn=V(Re,C,Y),b.set(H,Re)),Re.at=J,Re.through=se,Re.drawn.forEach((Ve,Fe)=>{let[it,ut]=Y[Fe]??[0,0];Ve.position.set(J[0]+it,J[1],J[2]+ut)}),ge(Re)},"puff"),fadeWalker:l((H,J)=>{let se=_.get(H),xe=Math.min(1,Math.max(0,J));se===void 0||xe===se.opacity||(se.opacity=xe,Ll(se.drawn,xe,se.faded))},"fadeWalker"),setYields:l(H=>{Z?.drawn.forEach(J=>w.remove(J)),Z=null,L.set(H)!==null&&(Z={at:[0,0,0],make:l(()=>L.make(),"make"),drawn:[]},Z.drawn=V(Z,w))},"setYields"),view:l((H,J,se=e)=>{let[xe,he]=H.focus,[Re,Ve,Fe]=dd(H,J),{near:it,far:ut}=fd(H.distance);a.position.set(Re,Ve,Fe),a.lookAt(xe,J,he),a.far=ut*1.2,a.near=Math.max(.1,H.distance*.02),a.updateProjectionMatrix(),G.near=it,G.far=ut;let mt=H.distance*2.2,Ke=h.shadow.camera;h.position.set(xe+30,J+40,he+20),h.target.position.set(xe,J,he),Ke.left=-mt,Ke.right=mt,Ke.top=mt,Ke.bottom=-mt,Ke.near=Math.max(.5,mv-mt*1.6),Ke.far=mv+mt*1.6,Ke.updateProjectionMatrix(),I.follow(xe,he,ut*2.2,h.position.clone().sub(h.target.position)),F.follow(xe,he,ut*2.2),I.pastThePoles(se.v!==null),F.pastThePoles(se.v!==null),m.clippingPlanes=se.v===null?y:null,O=se.v===null;let It=fv(H.focus,ut,se),dt=`${It.join(";")}${O?" stopped":""}`,yt=fv(H.focus,Math.min(ut,H.distance*2.2),se),Ct=yt.join(";");dt!==U&&(j=It,U=dt,p.forEach(Oe=>{Oe.drawn.forEach(k=>o.remove(k)),Oe.drawn=V(Oe,o)}),f.forEach(Oe=>{Oe.drawn.forEach(k=>o.remove(k)),Oe.drawn=Q(Oe)}),Z!==null&&(Z.drawn.forEach(Oe=>w.remove(Oe)),Z.drawn=V(Z,w))),L.lean(H.pitch),Ct!==ie&&(Y=yt,ie=Ct,[...x.values(),..._.values(),...b.values()].forEach(Oe=>{Oe.drawn.forEach(k=>C.remove(k)),Oe.drawn=V(Oe,C,Y)}),_.forEach(de),b.forEach(ge),_.forEach(Oe=>{Oe.opacity<1&&Ll(Oe.drawn,Oe.opacity,Oe.faded)}),x.forEach(Oe=>{Oe.faded!==void 0&&(Oe.opacity??1)<1&&Ll(ne(Oe.drawn),Oe.opacity??1,Oe.faded)}))},"view"),stats:l(()=>({drawCalls:s.info.render.calls,triangles:s.info.render.triangles,geometries:s.info.memory.geometries}),"stats"),dispose:l(()=>{p.forEach(({geometry:H})=>H.dispose()),p.clear(),f.forEach(({geometry:H})=>H.dispose()),f.clear(),m.dispose(),x.forEach(({faded:H})=>H!==void 0&&io(H)),x.clear(),_.forEach(({faded:H})=>io(H)),_.clear(),b.clear(),A.dispose(),R.forEach(H=>H.dispose()),v.dispose(),L.dispose(),I.dispose(),F.dispose(),c.dispose(),u.dispose(),s.dispose()},"dispose")}},"createStage");var Cs=1/Math.sqrt(3),xv=1.5*Cs,cT=l((i,e)=>{let t=-i-e,n=Math.round(i),s=Math.round(e),r=Math.round(t),a=Math.abs(n-i),o=Math.abs(s-e),c=Math.abs(r-t);return a>o&&a>c?n=-s-r:o>c&&(s=-n-r),[n,s]},"roundAxial"),uT=l(({height:i,width:e,wrapsY:t})=>{let n=l((s,r)=>[s+.5+(r&1)*.5,Cs+r*xv],"centre");return{topologyId:"hex-odd-r",centre:n,outline:l((s,r)=>{let[a,o]=n(s,r);return[[a,o-Cs],[a+.5,o-Cs/2],[a+.5,o+Cs/2],[a,o+Cs],[a-.5,o+Cs/2],[a-.5,o-Cs/2]]},"outline"),tileAt:l((s,r)=>{let a=s-.5,o=r-Cs,[c,u]=cT(a-o*Math.sqrt(3)/3,o*2*Math.sqrt(3)/3);return[c+(u-(u&1))/2,u]},"tileAt"),period:l(()=>({u:e,v:t?i*xv:null}),"period")}},"hexOddRLayout"),_v=uT;var hT=l(({height:i,width:e,wrapsY:t})=>({topologyId:"square",centre:l((n,s)=>[n+.5,s+.5],"centre"),outline:l((n,s)=>[[n,s],[n+1,s],[n+1,s+1],[n,s+1]],"outline"),tileAt:l((n,s)=>[Math.floor(n),Math.floor(s)],"tileAt"),period:l(()=>({u:e,v:t?i:null}),"period")}),"squareLayout"),vv=hT;var Ki=Math.SQRT2/2,dT=l(({height:i,width:e,wrapsY:t})=>{let n=l((s,r)=>[(2*s+(r&1)+1)*Ki,(r+1)*Ki],"centre");return{topologyId:"staggered-iso",centre:n,outline:l((s,r)=>{let[a,o]=n(s,r);return[[a,o-Ki],[a+Ki,o],[a,o+Ki],[a-Ki,o]]},"outline"),tileAt:l((s,r)=>{let a=s/Ki,o=r/Ki,c=Math.floor((a+o)/2-1+.5),u=Math.floor((o-a)/2+.5),h=c+u;return[Math.floor((c-u)/2),h]},"tileAt"),period:l(()=>({u:e*2*Ki,v:t?i*Ki:null}),"period")}},"staggeredIsoLayout"),yv=dT;var bv={square:vv,"staggered-iso":yv,"hex-odd-r":_v},fT=l(i=>{if(!Object.prototype.hasOwnProperty.call(bv,i.topologyId))throw new Error(`No ground layout for the ${i.topologyId} grid.`);if(i.wrapsY&&i.topologyId!=="square"&&i.height%2!==0)throw new Error(`The ${i.topologyId} grid can't wrap over the poles with an odd number of rows (${i.height}).`);return bv[i.topologyId](i)},"groundLayoutFor"),Mv=fT;var Ol=l(i=>{let e=i/1.2;if(e>=1)return 0;let t=1-e;return t*t*t*t*(4*e+1)},"weight");var gd=.65,r0=l(i=>{let e=l(t=>{let n=parseInt(i.slice(t,t+2),16)/255;return n<=.04045?n/12.92:((n+.055)/1.055)**2.4},"channel");return[e(1),e(3),e(5)]},"linear"),Rs=.22,xd=.12,a0={low:.2,high:.5},Sv=l((i,e,t,n,s,r,a,o,c)=>{let u=r-t,h=a-n,p=u*u+h*h,f=p===0?0:Math.max(0,Math.min(1,((i-t)*u+(e-n)*h)/p)),m=Ol(Math.hypot(i-t-u*f,e-n-h*f)),g=1-f;return m===0?-1/0:m*m*(s+(o-s)*(1-g*g*g)+c)},"halfRidge"),Bl=l((i,e,t,n)=>{let s=Math.imul(i,374761393)+Math.imul(e,668265263)+Math.imul(t,2246822519)+Math.imul(n,3266489917)|0;return s=Math.imul(s^s>>>13,1274126177),s^=s>>>16,(s>>>0)/4294967296},"chance"),pT=l((i,e,t)=>({u:(Bl(i,e,t,1)*2-1)*Rs,v:(Bl(i,e,t,2)*2-1)*Rs,scale:.75+Bl(i,e,t,3)*.5}),"peakOf"),mT=l(({layout:i,ranges:e=!0,seed:t=1,source:n})=>{let{width:s,height:r,wrapsY:a}=n,o=i.period(),c=zn([Ji({cell:.7,period:o,seed:t}),Ji({cell:.35,period:o,seed:t+1}),Ji({cell:.17,period:o,seed:t+2})]),u=zn([Ji({cell:.45,period:o,seed:t+3}),Ji({cell:.22,period:o,seed:t+4})]),h=l((O,Z)=>1-2*Math.abs(u(O,Z)),"ridged"),p=Ji({cell:.8,period:o,seed:t+5}),f=Ji({cell:.8,period:o,seed:t+6}),m={flat:null,rolling:"rolling",ridged:"ridged",peaked:"ridged"},g=[],y=[],x=[],_=[],b=[],A=l((O,Z)=>{let V=(O%s+s)%s;return!a&&(Z<0||Z>=r)?null:(Z%r+r)%r*s+V},"index"),S=l(O=>{let Z=new Array(s*r).fill(1/0),V=[];O.forEach((Q,ne)=>{Q&&(Z[ne]=0,V.push([ne%s,Math.floor(ne/s)]))});for(let[Q,ne]of V){let de=Z[ne*s+Q]??1/0;de>=Zi.reach||n.neighbours(Q,ne).forEach(([ge,ee])=>{let pe=ee*s+ge;(Z[pe]??1/0)>de+1&&(Z[pe]=de+1,V.push([ge,ee]))})}return Z},"distancesFromLand"),R=l((O,Z)=>{let V=n.terrainAt(O,Z);return`${V}${V!=="Unknown"&&n.waterAt(O,Z)?" water":""}`},"readAs"),C=l(O=>{if(O!==void 0&&y.length>0&&O.every(([ue,H])=>{let J=A(ue,H);return J===null||y[J]===R(ue,H)}))return[];let Z=[],V=[],Q=[];for(let ue=0;ue<r;ue++)for(let H=0;H<s;H++){let J=n.terrainAt(H,ue);Z.push(J),V.push(J!=="Unknown"&&n.waterAt(H,ue)),Q.push(Vr(J))}let ne=S(Z.map((ue,H)=>ue!=="Unknown"&&!V[H])),de=Z.map((ue,H)=>`${ue}${V[H]?" water":""}`),ge=[];de.forEach((ue,H)=>{y[H]!==ue&&ge.push([H%s,Math.floor(H/s)])}),y=de,g=Q.map((ue,H)=>{let J=ue===jh,se=H%s,xe=Math.floor(H/s),he=pT(se,xe,t);if(!V[H])return{relief:ue.relief,colour:r0(ue.colour),surface:Tn.indexOf(ue.surface),water:!1,unknown:J,peak:he};let Re=Math.min(ne[H]??1/0,Zi.reach),Ve=Zi.shore+(Zi.deep-Zi.shore)*Math.max(0,Re-1)/Math.max(1,Zi.reach-1);return{relief:{...ue.relief,base:Ve},colour:r0(ue.colour),surface:Tn.indexOf("sand"),water:!0,unknown:J,peak:he}});let ee=b,pe=new Map(ge.map(([ue,H])=>[`${ue},${H}`,[ue,H]]));return b=g.map(({relief:ue,unknown:H},J)=>!H&&!V[J]&&ue.shape==="peaked"),ge.some(([ue,H])=>{let J=H*s+ue;return b[J]===!0||ee[J]===!0})&&([x,_]=j()),ge.forEach(([ue,H])=>{let J=H*s+ue;b[J]!==!0&&ee[J]!==!0||n.neighbours(ue,H).forEach(([se,xe])=>{let he=A(se,xe);he!==null&&b[he]===!0&&pe.set(`${se},${xe}`,[se,xe])})}),[...pe.values()]},"refresh"),v=l(O=>{let[Z,V]=i.centre(0,O);return Math.max(...i.outline(0,O).map(([Q,ne])=>Math.hypot(Q-Z,ne-V)))},"cornerOf"),w=l((O,Z)=>{let[V,Q]=i.centre(0,O),ne=[];for(let de=-8;de<=8;de++)for(let ge=-6;ge<=6;ge++){let[ee,pe]=i.centre(ge,O+de);Math.hypot(ee-V,pe-Q)<Z+1e-9&&ne.push([ge,de])}return ne},"offsetsWithin"),L=l((O,Z,V,Q)=>{if(s>=6&&(!a||r>=6)){let ue=l((se,xe)=>{let he=(se%xe+xe)%xe;return he*2<xe?he:he-xe},"nearest"),H=ue(V-O,s),J=a?ue(Q-Z,r):Q-Z;return H===0&&J===0?[]:[[H,J]]}let ne=l((ue,H)=>{let J=(ue%H+H)%H;return J===0?[0]:[J,J-H]},"copies"),[de,ge]=i.centre(O,Z),ee=ne(V-O,s).flatMap(ue=>(a?ne(Q-Z,r):[Q-Z]).flatMap(H=>{if(ue===0&&H===0)return[];let[J,se]=i.centre(O+ue,Z+H);return[[ue,H,Math.hypot(J-de,se-ge)]]})),pe=Math.min(...ee.map(([,,ue])=>ue));return ee.filter(([,,ue])=>ue<=pe+1e-9).map(([ue,H])=>[ue,H])},"stepsTo"),I=Math.max(...[0,1].flatMap(O=>{let[Z,V]=i.centre(0,O);return n.neighbours(0,O).flatMap(([Q,ne])=>L(0,O,Q,ne).map(([de,ge])=>{let[ee,pe]=i.centre(de,O+ge);return Math.hypot(ee-Z,pe-V)}))}),1),F=[0,1].map(O=>{let[Z,V]=i.centre(0,O);return w(O,I+Rs*Math.SQRT2+xd+1.2+Math.max(v(0),v(1))).flatMap(([Q,ne])=>{let[de,ge]=i.centre(Q,O+ne);return[Q,ne,de-Z,ge-V]})}),G=l((O,Z,V,Q,ne,de)=>{let ge=ne-V,ee=de-Q,pe=ge*ge+ee*ee,ue=pe===0?0:Math.max(0,Math.min(1,((O-V)*ge+(Z-Q)*ee)/pe));return Math.hypot(O-V-ge*ue,Z-Q-ee*ue)},"toSegment"),j=l(()=>{let O=g.map(()=>[]),Z=g.map(()=>[]),V=Math.max(v(0),v(1));return e?(g.forEach((Q,ne)=>{if(b[ne]!==!0)return;let de=ne%s,ge=Math.floor(ne/s),[ee,pe]=i.centre(de,ge),ue=new Map;n.neighbours(de,ge).forEach(([H,J])=>{let se=A(H,J);se!==null&&b[se]===!0&&L(de,ge,H,J).forEach(([xe,he])=>ue.set(`${xe},${he}`,[xe,he,se]))}),ue.forEach(([H,J,se])=>{let xe=g[se];if(xe===void 0||J<0||J===0&&H<0)return;let[he,Re]=i.centre(de+H,ge+J),{peak:Ve,relief:Fe}=Q,{peak:it,relief:ut}=xe,mt=Ve.u,Ke=Ve.v,It=he-ee+it.u,dt=Re-pe+it.v,yt=Fe.base*gd*Ve.scale,Ct=ut.base*gd*it.scale,Oe=Math.hypot(It-mt,dt-Ke)||1,k=16+(J+2)*5+(H+2),Nt=(Bl(de,ge,t,k)*2-1)*xd,lt=a0.low+(a0.high-a0.low)*Bl(de,ge,t,k+32),tt=(mt+It)/2-(dt-Ke)/Oe*Nt,_e=(Ke+dt)/2+(It-mt)/Oe*Nt,ft=Math.max(Math.hypot(mt-tt,Ke-_e),Math.hypot(It-tt,dt-_e))+1.2,ze={au:mt,av:Ke,ah:yt,mu:tt,mv:_e,mh:lt*Math.min(yt,Ct),bu:It,bv:dt,bh:Ct,roughness:(Fe.roughness+ut.roughness)/2,cu:tt,cv:_e,reach:ft*ft},Xe=(Math.sqrt(ze.reach)+V)**2,P=F[ge&1]??[];for(let M=0;M<P.length;M+=4){let q=P[M+2],fe=P[M+3];if((q-tt)**2+(fe-_e)**2>=Xe||Math.min(G(q,fe,mt,Ke,tt,_e),G(q,fe,tt,_e,It,dt))>=1.2+V)continue;let oe=A(de+P[M],ge+P[M+1]);oe!==null&&(O[oe]?.push(ze),Z[oe]?.push(q,fe))}})}),[O,Z]):[O,Z]},"ranges"),U=l(O=>{let[Z,V]=i.centre(0,O),Q=Math.max(...i.outline(0,O).map(([de,ge])=>Math.hypot(de-Z,ge-V))),ne=[];for(let de=-6;de<=6;de++)for(let ge=-4;ge<=4;ge++){let[ee,pe]=i.centre(ge,O+de);Math.hypot(ee-Z,pe-V)<1.2+Q+Rs*Math.SQRT2+1e-9&&ne.push([ge,de])}return ne},"offsetsFor"),Y=[U(0),U(1)],ie=l((O,Z)=>{let[V,Q]=i.tileAt(O,Z),ne=A(V,Q),de=ne===null?null:g[ne]??null;if(de===null||de.unknown)return{height:0,colour:r0(jh.colour),surfaces:Tn.map(()=>0),shore:0,unseen:!0};let ge=null,ee=null,pe=l(yt=>yt==="rolling"?ge??=c(O,Z):ee??=h(O,Z),"noiseHere"),ue=0,H=0,J=0,se=0,xe=Tn.map(()=>0),he=0,Re=0,Ve=0,Fe=0,it=0,ut=O+Rs*p(O,Z),mt=Z+Rs*f(O,Z);(Y[Q&1]??[]).forEach(([yt,Ct])=>{let Oe=V+yt,k=Q+Ct,Nt=A(Oe,k);if(Nt===null)return;let lt=g[Nt];if(lt===void 0)return;let[tt,_e]=i.centre(Oe,k),{relief:ft,colour:ze,peak:Xe,surface:P}=lt,M=Ol(Math.hypot(O-tt,Z-_e)),q=ft.shape==="peaked"?Ol(Math.hypot(O-tt-Xe.u,Z-_e-Xe.v)):0,fe=Ol(Math.hypot(ut-tt,mt-_e))**3;if(M>0){let oe=m[ft.shape],ye=oe===null?0:ft.roughness*pe(oe);ft.shape==="peaked"?H+=M*(ft.base*(1-gd)+ye*.5):H+=M*(ft.base+ye),ue+=M}if(q>0){let oe=ft.roughness*pe("ridged");J+=q*q*(ft.base*gd*Xe.scale+oe*.5)}se+=fe,lt.unknown||(xe[P]=(xe[P]??0)+fe,he+=fe,Re+=lt.water?fe:0),Ve+=fe*ze[0],Fe+=fe*ze[1],it+=fe*ze[2]});let Ke=ne===null?[]:x[ne]??[],It=ne===null?[]:_[ne]??[],dt=J;if(Ke.length>0){let[yt,Ct]=i.centre(V,Q);Ke.forEach((Oe,k)=>{let Nt=O-yt+(It[k*2]??0),lt=Z-Ct+(It[k*2+1]??0);if((Nt-Oe.cu)**2+(lt-Oe.cv)**2>=Oe.reach)return;let tt=Oe.roughness*pe("ridged")*.5;dt=Math.max(dt,Sv(Nt,lt,Oe.au,Oe.av,Oe.ah,Oe.mu,Oe.mv,Oe.mh,tt),Sv(Nt,lt,Oe.bu,Oe.bv,Oe.bh,Oe.mu,Oe.mv,Oe.mh,tt))})}return{height:(ue>0?H/ue:0)+dt,colour:se>0?[Ve/se,Fe/se,it/se]:de.colour,surfaces:he>0?xe.map(yt=>yt/he):Tn.map((yt,Ct)=>Ct===de.surface?1:0),shore:he>0?Re/he:de.water?1:0,unseen:!1}},"sample");return C(),{sample:ie,height:l((O,Z)=>ie(O,Z).height,"height"),refresh:C}},"createRelief"),wv=mT;var Ev=l((i,e,{size:t=16,perUnit:n=8}={})=>{let{u:s,v:r}=i.period(),a=r??Math.max(...i.outline(0,e-1).map(([,p])=>p),...i.outline(1,e-1).map(([,p])=>p)),o=Math.max(1,Math.round(s/t)),c=Math.max(1,Math.round(a/t)),u=Math.max(2,Math.round(s/o*n)),h=Math.max(2,Math.round(a/c*n));return{chunksU:o,chunksV:c,stepsU:u,stepsV:h,spacingU:s/o/u,spacingV:a/c/h}},"chunkGrid"),Av=l((i,e,t,n)=>{let{stepsU:s,stepsV:r,spacingU:a,spacingV:o}=i,c=t*s,u=n*r,h=l((L,I)=>[L*a,I*o],"at"),p=s+3,f=new Float64Array(p*(r+3)),m=(s+1)*(r+1),g=new Float32Array(m*3),y=new Uint8Array(m*4),x=new Uint8Array(m*4),_=new Uint8Array(m),b=new Float32Array(m);for(let L=-1;L<=r+1;L++)for(let I=-1;I<=s+1;I++){let F=e.sample(...h(c+I,u+L)),{height:G,colour:j}=F;if(f[(L+1)*p+(I+1)]=G,I>=0&&I<=s&&L>=0&&L<=r){let U=L*(s+1)+I;g.set(j,U*3),F.surfaces.forEach((Y,ie)=>{(ie<4?y:x)[U*4+ie%4]=Math.round(Y*255)}),_[U]=Math.round(F.shore*255),b[U]=F.unseen?1:0}}let A=l((L,I)=>f[(I+1)*p+(L+1)]??0,"height"),S=new Float32Array(m*3),R=new Float32Array(m*3),[C,v]=h(c,u);for(let L=0;L<=r;L++)for(let I=0;I<=s;I++){let F=L*(s+1)+I,[G,j]=h(c+I,u+L),U=(A(I+1,L)-A(I-1,L))/(2*a),Y=(A(I,L+1)-A(I,L-1))/(2*o),ie=Math.hypot(U,1,Y);S[F*3]=G-C,S[F*3+1]=A(I,L),S[F*3+2]=j-v,R[F*3]=-U/ie,R[F*3+1]=1/ie,R[F*3+2]=-Y/ie}let w=new Uint32Array(s*r*6);for(let L=0;L<r;L++)for(let I=0;I<s;I++){let F=L*(s+1)+I,G=F+1,j=F+s+1,U=j+1,Y=(L*s+I)*6;w.set([F,j,G,G,j,U],Y)}return{u:C,v,positions:S,normals:R,colours:g,surfacesA:y,surfacesB:x,shore:_,unseen:b,indices:w}},"buildChunk"),Tv=l((i,e,t,n)=>{let s=i.stepsU*i.spacingU,r=i.stepsV*i.spacingV,a=e.period().v!==null,o=new Set;return t.forEach(([c,u])=>{let[h,p]=e.centre(c,u);for(let f=Math.floor((h-n)/s);f<=Math.floor((h+n)/s);f++)for(let m=Math.floor((p-n)/r);m<=Math.floor((p+n)/r);m++){if(!a&&(m<0||m>=i.chunksV))continue;let g=(f%i.chunksU+i.chunksU)%i.chunksU,y=a?(m%i.chunksV+i.chunksV)%i.chunksV:m;o.add(`${g},${y}`)}}),[...o].map(c=>c.split(",").map(Number))},"chunksNear");var Wn=l((i,e,t,n,s)=>({kind:i,count:e,size:t,colour:n,detail:s}),"plant"),Cv={Forest:{plants:[Wn("conifer",8,[.95,1.4],"#2c5230","#4a3424")],conifers:[.15,.95],canopy:"woods"},Jungle:{plants:[Wn("broadleaf",7,[1.05,1.55],"#2b6a2a","#4d3a26"),Wn("palm",2,[.9,1.2],"#3f8a34","#6b5236")],canopy:"woods"},Swamp:{plants:[Wn("reeds",7,[.8,1.2],"#7a8a4a","#5a6a38"),Wn("deadTree",2,[.8,1.1],"#4a4036","#4a4036")],canopy:"swamp"},Grassland:{plants:[Wn("bush",2,[.8,1.2],"#4e7a32","#4e7a32")]},Plains:{plants:[Wn("shrub",3,[.7,1.1],"#7a7a3a","#6a5a36")]},Tundra:{plants:[Wn("scrub",4,[.7,1.1],"#6a6a4e","#5a5444")]},Hills:{plants:[Wn("shrub",2,[.8,1.1],"#5e6e36","#5e5036"),Wn("rock",1,[.8,1.2],"#7d756a","#7d756a")]},Mountains:{plants:[Wn("rock",3,[.9,1.4],"#77706a","#77706a")]},Desert:{plants:[Wn("rock",2,[.7,1.1],"#a8936a","#a8936a"),Wn("cactus",1,[.8,1.1],"#5a7a3e","#5a7a3e")]}},lo=l(i=>Object.prototype.hasOwnProperty.call(Cv,i)?Cv[i]:null,"growthOf");var gT=["River"],ti=l((i,e)=>(i.improvements??[]).some(({_:t})=>t===e),"has"),xT=["Irrigation","Farmland","Fortress","Airbase"],Rv=l(i=>i.city||xT.some(e=>ti(i,e))?null:lo(i.terrain?._??"Unknown")?.canopy??null,"woodsOf"),_T=l((i,e)=>{if(i.city)return null;let t=ti(i,"Road"),n=ti(i,"Railroad"),s=t?e.filter(p=>ti(p.tile,"Road")).map(({offset:p})=>p):[],r=t?e.filter(p=>!!p.tile.city||ti(p.tile,"Railroad")).map(({offset:p})=>p):[],a=l((p,f)=>p[0]===f[0]&&p[1]===f[1],"same"),o=s.length===0&&r.length===0,c={road:t?{joins:s.filter(p=>!n||!r.some(f=>a(f,p))),alone:o&&!n}:null,railroad:t&&n?{joins:r,alone:o}:null,irrigation:ti(i,"Farmland")?"farmland":ti(i,"Irrigation")?"irrigation":null,mine:ti(i,"Mine"),fortress:ti(i,"Fortress"),airbase:ti(i,"Airbase"),pollution:ti(i,"Pollution"),specials:(i.terrain?.features??[]).map(({_:p})=>p).filter(p=>!gT.includes(p)).map(p=>[i.terrain._,p]),hut:i.goodyHut!==null&&i.goodyHut!==void 0,terrain:i.terrain?._??"Unknown",vegetation:lo(i.terrain?._??"Unknown")!==null,woods:[],paths:[]},u=Rv(i);return u!==null&&(c.woods=e.filter(p=>Rv(p.tile)===u).map(({offset:p})=>p),c.paths=e.filter(p=>!!p.tile.city||ti(p.tile,"Road")).map(({offset:p})=>p)),c.road===null&&c.irrigation===null&&!c.mine&&!c.fortress&&!c.airbase&&!c.pollution&&c.specials.length===0&&!c.hut&&!c.vegetation?null:c},"overlayFor"),Pv=_T;var Pt=l((i,e,t,n)=>({shape:i,colour:e,count:t,...n===void 0?{}:{detail:n}}),"look"),Iv={Coal:Pt("rocks","#26262a",4),Gold:Pt("rocks","#d8b13a",3),Gems:Pt("rocks","#59c2d6",4,"#b05ad0"),Iron:Pt("rocks","#8a5a44",4),Wheat:Pt("crop","#d9b84a",5,"#a88a2c"),Spice:Pt("crop","#c0452e",4,"#5d7a2a"),Wine:Pt("crop","#6a2c5e",4,"#5d7a2a"),Silk:Pt("crop","#e9e2cf",3,"#4f7a34"),Fruit:Pt("crop","#e08a2a",4,"#3f7a2a"),Horse:Pt("animal","#7a4e2a",2,"#3a2a1c"),Buffalo:Pt("animal","#4a3424",3,"#2a1e16"),Game:Pt("animal","#a9835a",2,"#5a4430"),"Tundra:Game":Pt("animal","#8f7e66",2,"#e8e2d6"),Furs:Pt("animal","#b0602a",2,"#f0e8dc"),Ivory:Pt("animal","#8a8580",1,"#f2ead8"),Seal:Pt("animal","#6e7072",2,"#4a4c4e"),Pheasant:Pt("bird","#8a3a22",2,"#3d6a3a"),Fish:Pt("fish","#b8c4cc",5),Whales:Pt("whale","#3a4048",1),Oil:Pt("derrick","#222224",1,"#121214"),Oasis:Pt("oasis","#3f7a32",3,"#3f86a8"),Peat:Pt("peat","#4a3624",4),Shield:Pt("logs","#7a5532",4,"#c9a47a")},vT=Pt("cairn","#9a9690",5),Lv=l((i,e)=>{let t=l(n=>Object.prototype.hasOwnProperty.call(Iv,n)?Iv[n]:void 0,"own");return t(`${i}:${e}`)??t(e)??vT},"specialLook");var f0=l(()=>({positions:[],normals:[],colours:[]}),"soup"),Xn={field:.01,road:.014,ballast:.016,rail:.02,smear:.024},o0=.06,Dv="#8c7a58",Nv="#5f5953",yT="#a9abae",bT="#5e432b",MT="#4f87b0",ST="#7da33f",wT=["#c2b448","#8fae3e"],Uv="#9d968a",ET="#4a4c50",h0="#6b4a2e",AT="#7a6a58",TT="#b89a5a",CT="#c9b48e",Fv="#34322a",Cn=new zi(1,1,1),uo=new Gi(.5,.5,1,8),p0=new Vi(.5,1,8),RT=new Vi(.5,1,4),co=new er(.5,8,6),kl=new Gi(.5,.5,1,4,1,!0),zl=new Vi(.5,1,5,1,!0),_d=new er(.5,5,3),l0={mine:[3,.72],hut:[11,.64],special:l(i=>[i+1,.72],"special")},PT=.05,IT=.22,Ov=72,Ai=l((i,e)=>{let t=Math.imul(i^Math.imul(e+1,2654435761),2246822507);return t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,(t>>>0)/4294967296},"fraction"),Bv=new Map,c0=l(i=>{let e=Bv.get(i);if(e===void 0){let{r:t,g:n,b:s}=new ke(i);e=[t,n,s],Bv.set(i,e)}return e},"colourOf"),kv=new WeakMap,LT=l(i=>{let e=kv.get(i);if(e===void 0){let t=i.index===null?i:i.toNonIndexed();e={positions:new Float32Array(t.getAttribute("position").array),normals:new Float32Array(t.getAttribute("normal").array)},kv.set(i,e),t!==i&&t.dispose()}return e},"trianglesOf"),DT=new _t,NT=new $e,UT=new X,FT=new yn,OT=new Un,BT=new X,Vt,Vv,pn,v0=class v0{constructor(e,t){W(this,Vt);this.lines=[];this.taken=[];this.grown=[];this.soup=e,this.place=t}ground(e,t,n=!1){let s=this.place.heightAt(e,t);return n?Math.max(0,s):s}strip(e,t,n,s,r){let a=c0(s),o=Math.hypot(t[0]-e[0],t[1]-e[1]);if(o===0)return;let c=Math.max(1,Math.ceil(o/o0)),u=Math.max(1,Math.ceil(n/o0)),h=[-(t[1]-e[1])/o*n,(t[0]-e[0])/o*n],p=l((f,m)=>[e[0]+(t[0]-e[0])*f+h[0]*(m-.5),e[1]+(t[1]-e[1])*f+h[1]*(m-.5)],"at");for(let f=0;f<c;f++)for(let m=0;m<u;m++){let[g,y]=p(f/c,(m+1)/u),[x,_]=p((f+1)/c,(m+1)/u),[b,A]=p(f/c,m/u),[S,R]=p((f+1)/c,m/u);T(this,Vt,pn).call(this,g,y,r,a),T(this,Vt,pn).call(this,x,_,r,a),T(this,Vt,pn).call(this,b,A,r,a),T(this,Vt,pn).call(this,x,_,r,a),T(this,Vt,pn).call(this,S,R,r,a),T(this,Vt,pn).call(this,b,A,r,a)}}disc(e,t,n,s,r=12){let a=c0(n),[o,c]=e,u=Math.max(1,Math.ceil(t/o0)),h=l((p,f)=>{let m=f/r*Math.PI*2,g=p/u*t;return[o+Math.cos(m)*g,c+Math.sin(m)*g]},"at");for(let p=0;p<u;p++)for(let f=0;f<r;f++){let m=h(p+1,f),g=h(p+1,f+1);if(p===0)T(this,Vt,pn).call(this,o,c,s,a),T(this,Vt,pn).call(this,...g,s,a),T(this,Vt,pn).call(this,...m,s,a);else{let y=h(p,f),x=h(p,f+1);T(this,Vt,pn).call(this,...y,s,a),T(this,Vt,pn).call(this,...x,s,a),T(this,Vt,pn).call(this,...m,s,a),T(this,Vt,pn).call(this,...x,s,a),T(this,Vt,pn).call(this,...g,s,a),T(this,Vt,pn).call(this,...m,s,a)}}}solid(e,t,n,s,r=[0,0,0]){let{positions:a,normals:o}=LT(e),c=DT.compose(UT.set(...t),FT.setFromEuler(OT.set(...r)),BT.set(...n)),u=c.elements,h=NT.getNormalMatrix(c).elements,[p,f,m]=c0(s),g=this.soup;for(let y=0;y<a.length;y+=3){let x=a[y],_=a[y+1],b=a[y+2],A=o[y],S=o[y+1],R=o[y+2],C=h[0]*A+h[3]*S+h[6]*R,v=h[1]*A+h[4]*S+h[7]*R,w=h[2]*A+h[5]*S+h[8]*R,L=Math.hypot(C,v,w)||1;g.positions.push(u[0]*x+u[4]*_+u[8]*b+u[12],u[1]*x+u[5]*_+u[9]*b+u[13],u[2]*x+u[6]*_+u[10]*b+u[14]),g.normals.push(C/L,v/L,w/L),g.colours.push(p,f,m)}}spot(e,t){let n=Ai(this.place.seed,e)*Math.PI*2,[s,r]=this.place.centre;return[s+Math.cos(n)*t*this.place.radius,r+Math.sin(n)*t*this.place.radius]}clearance(e,t,n){let[s,r]=this.place.centre,a=Math.hypot(e-s,t-r)-IT-n;return this.lines.forEach(([o,c])=>{a=Math.min(a,$T(e,t,o,c)-PT-n)}),this.taken.forEach(([o,c,u])=>{a=Math.min(a,Math.hypot(e-o,t-c)-u-n)}),a}hasRoom(e,t,n){return this.clearance(e,t,n)>=0}claim(e,t,n){let s=Ai(this.place.seed,e)*Math.PI*2,[r,a]=this.place.centre,o=[r,a],c=-1/0;for(let u of[t,t*.88,t*1.1])for(let h=0;h<Ov;h++){let p=s+h/Ov*Math.PI*2,f=[r+Math.cos(p)*u*this.place.radius,a+Math.sin(p)*u*this.place.radius],m=this.clearance(f[0],f[1],n);if(m>=0)return this.taken.push([f[0],f[1],n]),f;m>c&&(o=f,c=m)}return this.taken.push([o[0],o[1],n]),o}};Vt=new WeakSet,Vv=l(function(e,t){let s=(this.place.heightAt(e+.05,t)-this.place.heightAt(e-.05,t))/.1,r=(this.place.heightAt(e,t+.05)-this.place.heightAt(e,t-.05))/(2*.05),a=Math.hypot(s,1,r);return[-s/a,1/a,-r/a]},"#normal"),pn=l(function(e,t,n,s){this.soup.positions.push(e,this.ground(e,t)+n,t),this.soup.normals.push(...T(this,Vt,Vv).call(this,e,t)),this.soup.colours.push(...s)},"#point"),l(v0,"Layer");var d0=v0,m0=l((i,e)=>{let[t,n]=i.centre,[s,r]=i.toward(e);return[(t+s)/2,(n+r)/2]},"halfway"),g0=l(i=>i.alone||i.joins.length>0,"drawn"),kT=l((i,e)=>{let{place:t}=i;g0(e)&&(e.joins.forEach(n=>i.strip(t.centre,m0(t,n),.07,Dv,Xn.road)),i.disc(t.centre,e.alone?.09:.035,Dv,Xn.road))},"road"),zT=l((i,e)=>{if(!g0(e))return;let{place:t}=i;(e.alone?[[t.centre[0]+.12,t.centre[1]],[t.centre[0]-.12,t.centre[1]]]:e.joins.map(s=>m0(t,s))).forEach(s=>{let[r,a]=t.centre,o=Math.hypot(s[0]-r,s[1]-a),c=o===0?[0,0]:[-(s[1]-a)/o*.025,(s[0]-r)/o*.025];i.strip(t.centre,s,.1,Nv,Xn.ballast);for(let u=.1;u<1;u+=.2){let h=[r+(s[0]-r)*u,a+(s[1]-a)*u];i.strip([h[0]+c[0]*1.8,h[1]+c[1]*1.8],[h[0]-c[0]*1.8,h[1]-c[1]*1.8],.014,bT,Xn.ballast+.002)}[1,-1].forEach(u=>i.strip([r+c[0]*u,a+c[1]*u],[s[0]+c[0]*u,s[1]+c[1]*u],.01,yT,Xn.rail))}),i.disc(t.centre,.05,Nv,Xn.ballast)},"railroad"),GT=l((i,e)=>{let{centre:t,inner:n}=i.place,s=e==="farmland"?6:4,r=n*.9,a=r*2/s;for(let o=0;o<s;o++){let c=t[1]-r+a*(o+.5),u=e==="farmland"?wT[o%2]:ST;if(i.strip([t[0]-r,c],[t[0]+r,c],a*.8,u,Xn.field),o>0){let h=t[1]-r+a*o;i.strip([t[0]-r,h],[t[0]+r,h],.016,MT,Xn.field+.001)}}},"fields"),VT=l((i,[e,t])=>{let n=i.ground(e,t);i.solid(Cn,[e-.02,n+.05,t],[.01,.11,.01],h0,[0,0,-.3]),i.solid(Cn,[e+.02,n+.05,t],[.01,.11,.01],h0,[0,0,.3]),i.solid(uo,[e,n+.1,t],[.05,.008,.05],"#3a3a3a",[Math.PI/2,0,0]),[[.07,.03],[-.05,.06]].forEach(([s,r])=>{let a=e+s,o=t+r;i.solid(p0,[a,i.ground(a,o)+.02,o],[.07,.04,.07],AT)})},"mine"),HT=l(i=>{let[e,t]=i.place.centre,n=i.place.radius*.62,s=i.ground(e,t);[[0,-n,n*2,.025],[0,n,n*2,.025],[-n,0,.025,n*2],[n,0,.025,n*2]].forEach(([r,a,o,c])=>{let u=e+r,h=t+a;i.solid(Cn,[u,Math.max(s,i.ground(u,h))+.02,h],[o,.05,c],Uv)}),[[-n,-n],[n,-n],[-n,n],[n,n]].forEach(([r,a])=>{let o=e+r,c=t+a;i.solid(uo,[o,i.ground(o,c)+.035,c],[.045,.07,.045],Uv)})},"fortress"),WT=l(i=>{let[e,t]=i.place.centre,n=i.place.radius*.75,[s,r]=i.claim(5,.6,.08);i.strip([e-n,t+.12],[e+n,t+.12],.12,ET,Xn.road+.002),i.strip([e-n*.9,t+.12],[e+n*.9,t+.12],.008,"#e8e8e8",Xn.road+.004),i.solid(Cn,[s,i.ground(s,r)+.03,r],[.12,.06,.08],"#8a9096")},"airbase"),XT=l(i=>{let e=i.place.radius;i.disc(i.place.centre,e*.55,Fv,Xn.smear,14),i.disc(i.spot(7,.5),e*.25,Fv,Xn.smear+.001)},"pollution"),qT=l((i,e,t,n)=>{let s=e.detail??e.colour,r=l((o,c)=>[t[0]+(Ai(i.place.seed,n*31+o*2)-.5)*c,t[1]+(Ai(i.place.seed,n*31+o*2+1)-.5)*c],"jitter"),a=e.shape==="fish"||e.shape==="whale";for(let o=0;o<e.count;o++){let[c,u]=e.count===1?[t[0],t[1]]:r(o,.1),h=i.ground(c,u,a),p=Ai(i.place.seed,n*31+o+17)*Math.PI*2;switch(e.shape){case"rocks":i.solid(co,[c,h+.012,u],[.05,.035,.045],o%2===1?s:e.colour,[0,p,0]);break;case"crop":i.solid(uo,[c,h+.02,u],[.008,.04,.008],s),i.solid(co,[c,h+.05,u],[.045,.04,.045],e.colour);break;case"animal":{let f=e.count===1?1.5:1;i.solid(Cn,[c,h+.04*f,u],[.035*f,.03*f,.07*f],e.colour,[0,p,0]),i.solid(Cn,[c+Math.sin(p)*.04*f,h+.055*f,u+Math.cos(p)*.04*f],[.022*f,.024*f,.03*f],s,[0,p,0]),i.solid(Cn,[c,h+.013*f,u],[.03*f,.026*f,.055*f],s,[0,p,0]);break}case"bird":i.solid(co,[c,h+.02,u],[.03,.025,.04],e.colour,[0,p,0]),i.solid(Cn,[c-Math.sin(p)*.03,h+.025,u-Math.cos(p)*.03],[.008,.006,.04],s,[.4,p,0]);break;case"fish":i.solid(co,[c,h+.006,u],[.012,.01,.035],e.colour,[0,p,0]);break;case"whale":i.solid(co,[c,h,u],[.07,.05,.2],e.colour,[0,p,0]),i.solid(Cn,[c-Math.sin(p)*.11,h+.02,u-Math.cos(p)*.11],[.08,.006,.03],e.colour,[0,p,0]);break;case"derrick":i.solid(Cn,[c,h+.008,u],[.08,.016,.08],s),i.solid(RT,[c,h+.1,u],[.06,.18,.06],e.colour,[0,Math.PI/4,0]);break;case"oasis":o===0&&i.disc([c,u],.07,s,Xn.field+.002);{let[f,m]=r(o+5,.1),g=i.ground(f,m);i.solid(uo,[f,g+.06,m],[.012,.12,.012],h0),i.solid(p0,[f,g+.125,m],[.09,.03,.09],e.colour)}break;case"peat":case"logs":i.solid(e.shape==="logs"?uo:Cn,[c,h+.012,u],e.shape==="logs"?[.022,.09,.022]:[.05,.02,.035],o%2===1&&e.detail!==void 0?e.detail:e.colour,e.shape==="logs"?[0,p,Math.PI/2]:[0,p,0]);break;default:i.solid(co,[t[0],i.ground(t[0],t[1])+.012+o*.018,t[1]],[.05-o*.007,.025,.05-o*.007],e.colour)}}},"special"),YT=l((i,e)=>{[0,1,2].forEach(t=>{let n=t/3*Math.PI*2+Ai(i.place.seed,12)*Math.PI,s=e[0]+Math.cos(n)*.06,r=e[1]+Math.sin(n)*.06,a=i.ground(s,r);i.solid(uo,[s,a+.02,r],[.05,.04,.05],CT),i.solid(p0,[s,a+.055,r],[.065,.035,.065],TT)})},"hut"),Hv={conifer:.06,broadleaf:.07,palm:.06,deadTree:.05,bush:.035,shrub:.03,scrub:.03,reeds:.03,rock:.04,cactus:.03},Wv=l((i,e,t,n,s,r,a)=>{let o=i.ground(n,s),{colour:c,detail:u}=e;switch(t){case"conifer":i.solid(kl,[n,o+.025*r,s],[.016*r,.05*r,.016*r],u),i.solid(zl,[n,o+.09*r,s],[.11*r,.12*r,.11*r],c),i.solid(zl,[n,o+.16*r,s],[.08*r,.1*r,.08*r],c);break;case"broadleaf":i.solid(kl,[n,o+.04*r,s],[.018*r,.08*r,.018*r],u),i.solid(_d,[n,o+.12*r,s],[.13*r,.11*r,.13*r],c,[0,a,0]);break;case"palm":i.solid(kl,[n,o+.08*r,s],[.012*r,.16*r,.012*r],u,[.12,a,0]),i.solid(zl,[n+.01*r,o+.165*r,s],[.15*r,.03*r,.15*r],c,[0,a,0]);break;case"deadTree":i.solid(kl,[n,o+.06*r,s],[.014*r,.12*r,.014*r],u),i.solid(Cn,[n+.02*r,o+.09*r,s],[.006*r,.05*r,.006*r],u,[0,a,-.7]);break;case"bush":i.solid(_d,[n,o+.02*r,s],[.06*r,.045*r,.06*r],c,[0,a,0]);break;case"shrub":i.solid(zl,[n,o+.025*r,s],[.05*r,.05*r,.05*r],c,[0,a,0]),i.solid(zl,[n+.02*r,o+.018*r,s+.01*r],[.035*r,.036*r,.035*r],c,[0,a,0]);break;case"scrub":i.solid(_d,[n,o+.008*r,s],[.05*r,.02*r,.05*r],c,[0,a,0]);break;case"reeds":[-1,0,1].forEach(h=>i.solid(Cn,[n+h*.008*r,o+.035*r,s],[.005,.07*r,.005],h===0?c:u,[0,a,h*.18]));break;case"rock":i.solid(_d,[n,o+.012*r,s],[.07*r,.04*r,.06*r],c,[0,a,0]);break;default:i.solid(kl,[n,o+.05*r,s],[.018*r,.1*r,.018*r],c),i.solid(Cn,[n+.015*r,o+.06*r,s],[.025*r,.01*r,.01*r],c,[0,a,0])}},"grow"),$T=l((i,e,t,n)=>{let s=n[0]-t[0],r=n[1]-t[1],a=s*s+r*r,o=a===0?0:Math.max(0,Math.min(1,((i-t[0])*s+(e-t[1])*r)/a));return Math.hypot(i-(t[0]+s*o),e-(t[1]+r*o))},"distanceTo"),ZT=l((i,e)=>{let t=lo(e.terrain);if(t===null)return;let{centre:n,radius:s,seed:r,latitude:a}=i.place;t.plants.forEach((o,c)=>{for(let u=0;u<o.count;u++){let h=1e3+c*97+u*7,p=o.size[0]+(o.size[1]-o.size[0])*Ai(r,h),f=t.conifers,m=f!==void 0&&Ai(r,h+1)>=f[0]+(f[1]-f[0])*a?"broadleaf":o.kind,g=Hv[m]*p;for(let y=0;y<6;y++){let x=Ai(r,h+2+y*2)*Math.PI*2,_=Math.sqrt(Ai(r,h+3+y*2))*s*.92,b=n[0]+Math.cos(x)*_,A=n[1]+Math.sin(x)*_;if(i.hasRoom(b,A,g)){Wv(i,o,m,b,A,p,x),i.taken.push([b,A,g]),i.grown.push([b,A,m]);break}}}})},"plants"),u0=.26,zv=.3,JT=.15,Gv=.5,vd=[.9,1.3],jr=l((i,e,t)=>Ai(Math.imul(i,73856093)^Math.imul(e,19349663)^1540483477,t),"pointFraction"),KT=l((i,e,t)=>{let{centre:n,outline:s,owns:r,around:a,period:o,toward:c,latitude:u}=e,h=Math.max(1,Math.round(o.u/u0)),p=o.u/h,f=o.v===null?null:Math.max(1,Math.round(o.v/u0)),m=o.v===null||f===null?u0:o.v/f,g=s.map(([v])=>v),y=s.map(([,v])=>v),[x,_]=[Math.floor(Math.min(...g)/p)-1,Math.ceil(Math.max(...g)/p)],[b,A]=[Math.floor(Math.min(...y)/m)-1,Math.ceil(Math.max(...y)/m)],S=a.filter(([v,w])=>!i.woods.some(([L,I])=>L===v&&I===w)).map(v=>{let[w,L]=c(v),I=Math.hypot(w-n[0],L-n[1]);return{mu:w,mv:L,length:I}}),R=t.plants.reduce((v,{count:w})=>v+w,0),C=[];for(let v=b;v<=A;v++)for(let w=x;w<=_;w++){let L=(w%h+h)%h,I=f===null?v:(v%f+f)%f,F=(w+.5+(jr(L,I,0)*2-1)*zv)*p,G=(v+.5+(jr(L,I,1)*2-1)*zv)*m;if(!r(F,G))continue;let j=S.reduce((V,{mu:Q,mv:ne,length:de})=>{let ge=de/2-((F-n[0])*(Q-n[0])+(G-n[1])*(ne-n[1]))/de;return Math.min(V,Math.max(0,ge)/JT)},1);if(jr(L,I,2)>=Gv+(1-Gv)*j)continue;let U=jr(L,I,3)*R,Y=t.plants[0];for(let V of t.plants)if(Y=V,U-=V.count,U<0)break;let ie=t.conifers,O=ie!==void 0&&jr(L,I,4)>=ie[0]+(ie[1]-ie[0])*u?"broadleaf":Y.kind,Z=Y.size[0]+(Y.size[1]-Y.size[0])*jr(L,I,5);C.push({u:F,v:G,kind:O,plant:Y,room:Hv[O]*Z*vd[1],size:Z*(vd[0]+(vd[1]-vd[0])*j),facing:jr(L,I,6)*Math.PI*2})}return C},"woodsPlants"),jT=l((i,e,t)=>{let{centre:n,around:s,toward:r,heightAt:a}=i.place,o=Math.max(...s.map(u=>{let[h,p]=r(u);return Math.hypot(h-n[0],p-n[1])})),c=e.paths.map(u=>r(u));c.forEach((u,h)=>c.slice(h+1).forEach(p=>{Math.hypot(p[0]-u[0],p[1]-u[1])<=o+1e-6&&i.lines.push([u,p])})),KT(e,i.place,t).forEach(({u,v:h,kind:p,plant:f,size:m,room:g,facing:y})=>{p!=="reeds"&&a(u,h)<0||i.hasRoom(u,h,g)&&(Wv(i,f,p,u,h,m,y),i.grown.push([u,h,p]))})},"woods"),x0=l((i,e,t)=>{let n=new d0(t,e),{centre:s,radius:r}=e;if([i.road,i.railroad].forEach(o=>{o!==null&&g0(o)&&(o.joins.forEach(c=>n.lines.push([s,m0(e,c)])),o.alone&&n.lines.push([s,s]))}),i.fortress){let o=r*.62,c=[[-o,-o],[o,-o],[o,o],[-o,o]].map(([u,h])=>[s[0]+u,s[1]+h]);c.forEach((u,h)=>n.lines.push([u,c[(h+1)%4]]))}if(i.airbase){let o=r*.75;n.lines.push([[s[0]-o,s[1]+.12],[s[0]+o,s[1]+.12]])}i.irrigation!==null&&GT(n,i.irrigation),i.road!==null&&kT(n,i.road),i.railroad!==null&&zT(n,i.railroad),i.mine&&VT(n,n.claim(...l0.mine,.1)),i.fortress&&HT(n),i.airbase&&WT(n),i.pollution&&XT(n),i.specials.forEach(([o,c],u)=>qT(n,Lv(o,c),n.claim(...l0.special(u),.1),u+1)),i.hut&&YT(n,n.claim(...l0.hut,.13));let a=lo(i.terrain);return a!==null&&i.irrigation===null&&!i.fortress&&!i.airbase&&(a.canopy!==void 0?jT(n,i,a):ZT(n,i)),{taken:n.taken,lines:n.lines,grown:n.grown}},"layOverlay"),QT=l((i,e,t)=>{let n=f0();return t.forEach(({overlay:s,place:r})=>x0(s,r,n)),_0(i,e,n)},"overlayMesh"),_0=l((i,e,t)=>{let n=new Float32Array(t.positions);for(let s=0;s<n.length;s+=3)n[s]=n[s]-i,n[s+2]=n[s+2]-e;return{u:i,v:e,positions:n,normals:new Float32Array(t.normals),colours:new Float32Array(t.colours)}},"meshOf"),Xv=QT;var ur,mn,Ti,Vl,Ci,qn,wn,ho,Hl,Qr,Wl,Xl,Tt,qv,b0,M0,yd,bd,Yv,Gl,S0=class S0{constructor(e){W(this,Tt);W(this,ur);W(this,mn);W(this,Ti,[]);W(this,Vl);W(this,Ci);W(this,qn,new Set);W(this,wn,null);W(this,ho,null);W(this,Hl,new Map);W(this,Qr,[0,0]);W(this,Wl);W(this,Xl);z(this,Ci,e);let t=e.topology(),n=e.width(),s=e.height(),r=t.wrapsY();this.layout=Mv({width:n,height:s,topologyId:e.topologyId(),wrapsY:r}),z(this,ur,wv({layout:this.layout,source:{width:n,height:s,wrapsY:r,terrainAt:l((f,m)=>e.get(f,m).terrain._,"terrainAt"),waterAt:l((f,m)=>e.get(f,m).isWater,"waterAt"),neighbours:l((f,m)=>t.directions().map(g=>t.neighbour(f,m,g)).filter(g=>g!==null),"neighbours")}})),z(this,mn,Ev(this.layout,s));let[a,o]=this.layout.centre(0,0),c=Math.max(...this.layout.outline(0,0).map(([f,m])=>Math.hypot(f-a,m-o))),u=Math.max(...t.directions().map(f=>t.offset(f,0,0)).map(([f,m])=>{let[g,y]=this.layout.centre(f,m);return Math.hypot(g-a,y-o)}));z(this,Vl,1.2+c+Rs*Math.SQRT2+Math.max((Zi.reach-1)*u,u/2+Rs*Math.SQRT2+xd));let h=this.layout.outline(0,0),p=h.flatMap(([f,m],g)=>{let[y,x]=h[(g+1)%h.length],_=Math.hypot(y-f,x-m);return _===0?[]:[{away:Math.abs((y-f)*(o-m)-(x-m)*(a-f))/_,normal:[(x-m)/_,(f-y)/_]}]});z(this,Wl,Math.min(...p.map(({away:f})=>f))),z(this,Xl,Math.min(...p.map(({away:f,normal:[m,g]})=>f/(Math.abs(m)+Math.abs(g)))))}surfaceAt(e,t,n=new Map){let{spacingU:s,spacingV:r}=d(this,mn),a=Math.floor(e/s),o=Math.floor(t/r),c=e/s-a,u=t/r-o,h=l((y,x)=>{let _=`${y},${x}`,b=n.get(_);return b===void 0&&(b=d(this,ur).height(y*s,x*r),n.set(_,b)),b},"at"),p=h(a,o),f=h(a+1,o),m=h(a,o+1);if(c+u<=1)return p+(f-p)*c+(m-p)*u;let g=h(a+1,o+1);return g+(m-g)*(1-c)+(f-g)*(1-u)}ground(){let{chunksU:e,chunksV:t,stepsU:n,stepsV:s,spacingU:r,spacingV:a}=d(this,mn);return{columns:e*n,rows:t*s,spacingU:r,spacingV:a,wrapsV:this.layout.period().v!==null}}extentV(){return d(this,mn).chunksV*d(this,mn).stepsV*d(this,mn).spacingV}heightAt(e,t){return d(this,ur).height(e,t)}queueAll(e,t){let{chunksU:n,chunksV:s}=d(this,mn),r=[];for(let a=0;a<s;a++)for(let o=0;o<n;o++)r.push(`${o},${a}`);z(this,Ti,T(this,Tt,Gl).call(this,r,e,t)),z(this,Qr,[e,t]),r.forEach(a=>d(this,qn).add(a))}changed(e,t,n,s=!1){if(e.length===0&&!s)return[];z(this,Qr,[t,n]),(e.length===0?[...T(this,Tt,bd).call(this).values()].flat():T(this,Tt,Yv).call(this,e)).forEach(([o,c])=>{let u=T(this,Tt,yd).call(this,o,c);if(d(this,qn).has(u)||d(this,wn)?.key===u&&!T(this,Tt,qv).call(this,d(this,wn),o,c))return;JSON.stringify(T(this,Tt,b0).call(this,o,c))!==(d(this,Hl).get(`${o},${c}`)??"null")&&d(this,qn).add(u)});let r=d(this,ur).refresh(s?void 0:e);if(r.length===0)return r;let a=Tv(d(this,mn),this.layout,r,d(this,Vl)).map(([o,c])=>`${o},${c}`);return z(this,Ti,T(this,Tt,Gl).call(this,[...new Set([...d(this,Ti),...a])],t,n)),r}refocus(e,t){z(this,Ti,T(this,Tt,Gl).call(this,d(this,Ti),e,t)),z(this,Qr,[e,t])}pending(){return d(this,Ti).length}overlaysPending(){return d(this,qn).size+(d(this,wn)===null||d(this,qn).has(d(this,wn).key)?0:1)}build(e,t){let n=performance.now(),s=l(()=>t!==null&&performance.now()-n>=t,"spent");for(;d(this,Ti).length>0;){if(s())return;let r=d(this,Ti).shift(),[a,o]=r.split(",").map(Number);e.setChunk(a,o,Av(d(this,mn),d(this,ur),a,o)),d(this,qn).add(r)}for(;d(this,qn).size>0||d(this,wn)!==null;){if(d(this,wn)!==null&&d(this,qn).has(d(this,wn).key)&&z(this,wn,null),d(this,wn)===null){let f=T(this,Tt,Gl).call(this,[...d(this,qn)],...d(this,Qr))[0];d(this,qn).delete(f),z(this,wn,{key:f,squares:T(this,Tt,bd).call(this).get(f)??[],done:0,laid:f0(),heights:new Map})}let r=d(this,wn);for(;r.done<r.squares.length;){let[f,m]=r.squares[r.done],g=T(this,Tt,M0).call(this,f,m,r.heights);if(r.done++,g!==null&&x0(g.overlay,g.place,r.laid),r.done<r.squares.length&&s())return}let[a,o]=r.key.split(",").map(Number),{stepsU:c,stepsV:u,spacingU:h,spacingV:p}=d(this,mn);z(this,wn,null),e.setOverlay(a,o,r.laid.positions.length===0?null:_0(a*c*h,o*u*p,r.laid))}}overlayOf(e,t){let{stepsU:n,stepsV:s,spacingU:r,spacingV:a}=d(this,mn),o=new Map,c=(T(this,Tt,bd).call(this).get(`${e},${t}`)??[]).flatMap(([u,h])=>T(this,Tt,M0).call(this,u,h,o)??[]);return c.length===0?null:Xv(e*n*r,t*s*a,c)}overlayKeyOf(e,t){return T(this,Tt,yd).call(this,e,t)}};ur=new WeakMap,mn=new WeakMap,Ti=new WeakMap,Vl=new WeakMap,Ci=new WeakMap,qn=new WeakMap,wn=new WeakMap,ho=new WeakMap,Hl=new WeakMap,Qr=new WeakMap,Wl=new WeakMap,Xl=new WeakMap,Tt=new WeakSet,qv=l(function(e,t,n){return e.squares.slice(0,e.done).some(([s,r])=>s===t&&r===n)},"#reached"),b0=l(function(e,t){let n=d(this,Ci).topology();return Pv(d(this,Ci).get(e,t),n.directions().flatMap(s=>{let r=n.neighbour(e,t,s);return r===null?[]:[{offset:n.offset(s,e,t),tile:d(this,Ci).get(r[0],r[1])}]}))},"#overlayAt"),M0=l(function(e,t,n){let s=T(this,Tt,b0).call(this,e,t);if(d(this,Hl).set(`${e},${t}`,JSON.stringify(s)),s===null)return null;let[r,a]=this.layout.centre(e,t),o=d(this,Ci).topology();return{overlay:s,place:{centre:[r,a],toward:l(([c,u])=>this.layout.centre(e+c,t+u),"toward"),radius:d(this,Wl),inner:d(this,Xl),heightAt:l((c,u)=>this.surfaceAt(c,u,n),"heightAt"),seed:Math.imul(e,73856093)^Math.imul(t,19349663),latitude:Math.min(1,Math.abs(2*a/this.extentV()-1)),outline:this.layout.outline(e,t),owns:l((c,u)=>{let[h,p]=this.layout.tileAt(c,u);return h===e&&p===t},"owns"),around:o.directions().filter(c=>o.neighbour(e,t,c)!==null).map(c=>o.offset(c,e,t)),period:this.layout.period()}}},"#square"),yd=l(function(e,t){let{chunksU:n,chunksV:s,stepsU:r,stepsV:a,spacingU:o,spacingV:c}=d(this,mn),[u,h]=this.layout.centre(e,t),p=Math.floor(u/(r*o)),f=Math.floor(h/(a*c));return`${Math.min(n-1,Math.max(0,p))},${Math.min(s-1,Math.max(0,f))}`},"#chunkOf"),bd=l(function(){if(d(this,ho)===null){let e=new Map;for(let t=0;t<d(this,Ci).height();t++)for(let n=0;n<d(this,Ci).width();n++){let s=T(this,Tt,yd).call(this,n,t);e.set(s,[...e.get(s)??[],[n,t]])}z(this,ho,e)}return d(this,ho)},"#chunksOfSquares"),Yv=l(function(e){let t=d(this,Ci).topology(),n=new Map;return e.forEach(([s,r])=>[[s,r],...t.directions().map(a=>t.neighbour(s,r,a)).filter(a=>a!==null)].forEach(a=>n.set(a.join(),a))),[...n.values()]},"#besides"),Gl=l(function(e,t,n){let{stepsU:s,stepsV:r,spacingU:a,spacingV:o}=d(this,mn),c=s*a,u=r*o,{u:h,v:p}=this.layout.period(),f=l((g,y)=>Math.abs(y===null?g:g-y*Math.round(g/y)),"round"),m=l(g=>{let[y,x]=g.split(",").map(Number);return Math.hypot(f((y+.5)*c-t,h),f((x+.5)*u-n,p))},"distance");return[...e].sort((g,y)=>m(g)-m(y))},"#nearestFirst"),l(S0,"Land");var y0=S0,$v=y0;var eC=l(()=>typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches===!0,"prefersReducedMotion"),ji=eC;var Zv=l((i,e,t=100)=>{let n=i.filter(({time:o})=>e-o<=t);if(n.length<2)return{x:0,y:0};let s=n[0],r=n[n.length-1],a=r.time-s.time;return a<=0?{x:0,y:0}:{x:(r.x-s.x)/a,y:(r.y-s.y)/a}},"releaseVelocity");var tC=8,nC=.92,iC=.02,Jv=3,sC=50,rC=8,aC=10,Kv=250,ql,Yl,fo,po,ea,hr,w0=class w0{constructor({pointerId:e,clientX:t,clientY:n,timeStamp:s}){W(this,ql);W(this,Yl);W(this,fo);W(this,po);W(this,ea,!1);W(this,hr);this.pointerId=e,z(this,ql,t),z(this,Yl,n),z(this,fo,t),z(this,po,n),z(this,hr,[{x:t,y:n,time:s}])}dragging(){return d(this,ea)}move({pointerId:e,clientX:t,clientY:n,timeStamp:s}){if(e!==this.pointerId||!d(this,ea)&&Math.hypot(t-d(this,ql),n-d(this,Yl))<tC)return null;let r=!d(this,ea),a=d(this,fo)-t,o=d(this,po)-n;return z(this,ea,!0),z(this,fo,t),z(this,po,n),d(this,hr).push({x:t,y:n,time:s}),d(this,hr).length>20&&d(this,hr).shift(),{dx:a,dy:o,started:r}}releaseVelocity(e){return Zv(d(this,hr),e)}};ql=new WeakMap,Yl=new WeakMap,fo=new WeakMap,po=new WeakMap,ea=new WeakMap,hr=new WeakMap,l(w0,"Press");var Md=w0,Qi,$l,E0=class E0{constructor(e){W(this,Qi,null);W(this,$l);z(this,$l,e)}start(e){this.stop();let t=Math.hypot(e.x,e.y),n=t>Jv?Jv/t:1,s=e.x*n,r=e.y*n,a=null,o=l(c=>{let u=a===null?16:Math.min(c-a,64);if(a=c,Math.hypot(s,r)<iC){z(this,Qi,null);return}d(this,$l).call(this,-s*u,-r*u);let h=Math.pow(nC,u/16);s*=h,r*=h,z(this,Qi,window.requestAnimationFrame(o))},"step");z(this,Qi,window.requestAnimationFrame(o))}gliding(){return d(this,Qi)!==null}stop(){d(this,Qi)!==null&&(window.cancelAnimationFrame(d(this,Qi)),z(this,Qi,null))}};Qi=new WeakMap,$l=new WeakMap,l(E0,"Glide");var Sd=E0,ta,Zl,Jl,mo,A0=class A0{constructor(){W(this,ta,0);W(this,Zl,0);W(this,Jl,-1/0);W(this,mo,0)}turned(e,t){let n=e.deltaMode===0,s=e.deltaY;if(s===0||e.ctrlKey&&t!==null&&e.timeStamp-t<=Kv)return 0;let r=Math.sign(s),a=e.timeStamp-d(this,Jl)>Kv||r!==d(this,Zl);if(z(this,Jl,e.timeStamp),z(this,Zl,r),a&&(z(this,ta,0),z(this,mo,0)),n&&!e.ctrlKey&&d(this,mo)>=aC)return 0;if(!a&&n){if(z(this,ta,d(this,ta)+s),Math.abs(d(this,ta))<(e.ctrlKey?rC:sC))return 0;z(this,ta,0)}return n&&!e.ctrlKey&&z(this,mo,d(this,mo)+1),s<0?1:-1}};ta=new WeakMap,Zl=new WeakMap,Jl=new WeakMap,mo=new WeakMap,l(A0,"WheelTurn");var wd=A0;var oC=350,lC=.006,jv=.004,es,rn,En,go,ts,Ri,Cd,ii,si,dr,xo,Yn,fr,Le,ni,Ed,Ad,Qv,C0,Ps,R0,ey,Is,ty,ny,iy,sy,Kl,ry,ay,oy,Td,P0=class P0{constructor(e,t,n=null){W(this,Le);W(this,es);W(this,rn);W(this,En,null);W(this,go,[0,0]);W(this,ts,null);W(this,Ri);W(this,Cd,new wd);W(this,ii,new Map);W(this,si,null);W(this,dr,null);W(this,xo,[]);W(this,Yn);W(this,fr,null);z(this,es,e),z(this,rn,t),z(this,Yn,n),z(this,Ri,new Sd((s,r)=>{let[a,o]=T(this,Le,Qv).call(this);T(this,Le,R0).call(this,[a,o],[a-s,o-r])})),T(this,Le,ni).call(this,"pointerdown",s=>T(this,Le,ey).call(this,s)),T(this,Le,ni).call(this,"pointermove",s=>T(this,Le,ny).call(this,s)),T(this,Le,ni).call(this,"pointerup",s=>T(this,Le,iy).call(this,s)),T(this,Le,ni).call(this,"pointercancel",s=>T(this,Le,sy).call(this,s)),T(this,Le,ni).call(this,"wheel",s=>T(this,Le,ay).call(this,s),{passive:!1}),T(this,Le,ni).call(this,"gesturestart",s=>T(this,Le,Td).call(this,s,"start"),{passive:!1}),T(this,Le,ni).call(this,"gesturechange",s=>T(this,Le,Td).call(this,s,"change"),{passive:!1}),T(this,Le,ni).call(this,"gestureend",s=>T(this,Le,Td).call(this,s,"end"),{passive:!1}),T(this,Le,ni).call(this,"contextmenu",s=>T(this,Le,ty).call(this,s)),T(this,Le,ni).call(this,"pointerleave",()=>d(this,Yn)?.hover(null)),T(this,Le,ni).call(this,"touchstart",s=>s.preventDefault(),{passive:!1})}dragging(){return d(this,En)?.dragging()===!0||d(this,ts)!==null}moving(){return this.dragging()||d(this,si)!==null||d(this,Ri).gliding()}dispose(){d(this,Ri).stop(),T(this,Le,Is).call(this),d(this,xo).forEach(([e,t,n])=>d(this,es).removeEventListener(e,t,n)),z(this,xo,[])}};es=new WeakMap,rn=new WeakMap,En=new WeakMap,go=new WeakMap,ts=new WeakMap,Ri=new WeakMap,Cd=new WeakMap,ii=new WeakMap,si=new WeakMap,dr=new WeakMap,xo=new WeakMap,Yn=new WeakMap,fr=new WeakMap,Le=new WeakSet,ni=l(function(e,t,n){d(this,es).addEventListener(e,t,n),d(this,xo).push([e,t,n])},"#listen"),Ed=l(function(){return{width:d(this,es).clientWidth||1,height:d(this,es).clientHeight||1}},"#box"),Ad=l(function([e,t]){let{width:n,height:s}=T(this,Le,Ed).call(this);return[e/n*2-1,1-t/s*2]},"#screen"),Qv=l(function(){let{width:e,height:t}=T(this,Le,Ed).call(this);return[e/2,t/2]},"#middle"),C0=l(function(){let{width:e,height:t}=T(this,Le,Ed).call(this);return e/t},"#aspect"),Ps=l(function(e){let t=d(this,es).getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]},"#at"),R0=l(function(e,t){d(this,rn).setOrbit(iv(d(this,rn).orbit(),d(this,rn).lookHeight(),T(this,Le,Ad).call(this,e),T(this,Le,Ad).call(this,t),T(this,Le,C0).call(this)))},"#pan"),ey=l(function(e){if(d(this,Ri).stop(),d(this,Yn)?.hover(null),e.pointerType==="touch"&&(d(this,ii).set(e.pointerId,T(this,Le,Ps).call(this,e)),d(this,ii).size===2)){z(this,En,null),T(this,Le,Is).call(this),z(this,si,T(this,Le,Kl).call(this));return}if(e.isPrimary&&e.button!==2){if(d(this,es).setPointerCapture?.(e.pointerId),e.button===1||e.button===0&&e.altKey){e.preventDefault(),z(this,ts,{pointerId:e.pointerId,x:e.clientX,y:e.clientY});return}if(e.button===0){let t=new Md(e),[n,s]=T(this,Le,Ps).call(this,e),{clientX:r,clientY:a}=e;z(this,En,t),z(this,go,[n,s]),T(this,Le,Is).call(this),z(this,fr,window.setTimeout(()=>{z(this,fr,null),d(this,En)===t&&!t.dragging()&&d(this,Yn)?.menu(n,s,r,a,!0)===!0&&z(this,En,null)},oC))}}},"#down"),Is=l(function(){d(this,fr)!==null&&(window.clearTimeout(d(this,fr)),z(this,fr,null))},"#stopHold"),ty=l(function(e){if(d(this,Yn)===null||!d(this,Yn).menuOnRightClick()||(e.preventDefault(),d(this,Yn).menuOpen()))return;let[t,n]=T(this,Le,Ps).call(this,e);d(this,Yn).menu(t,n,e.clientX,e.clientY,!1)&&(T(this,Le,Is).call(this),z(this,En,null))},"#rightClick"),ny=l(function(e){if(d(this,ii).has(e.pointerId)&&(d(this,ii).set(e.pointerId,T(this,Le,Ps).call(this,e)),d(this,si)!==null)){T(this,Le,ry).call(this);return}let t=d(this,ts);if(t!==null&&t.pointerId===e.pointerId){let r=d(this,rn).orbit();d(this,rn).setOrbit(Zr({...r,yaw:r.yaw-(e.clientX-t.x)*lC,pitch:r.pitch+(e.clientY-t.y)*jv})),t.x=e.clientX,t.y=e.clientY;return}let n=d(this,En);if(n===null){if(e.pointerType==="mouse"&&e.buttons===0&&!d(this,Ri).gliding()){let[r,a]=T(this,Le,Ps).call(this,e);d(this,Yn)?.hover({x:r,y:a,clientX:e.clientX,clientY:e.clientY})}return}if(n.move(e)===null)return;T(this,Le,Is).call(this);let s=T(this,Le,Ps).call(this,e);T(this,Le,R0).call(this,d(this,go),s),z(this,go,s)},"#move"),iy=l(function(e){if(d(this,ii).delete(e.pointerId),d(this,si)!==null){z(this,si,d(this,ii).size<2?null:T(this,Le,Kl).call(this));return}if(d(this,ts)?.pointerId===e.pointerId){z(this,ts,null);return}let t=d(this,En);if(!(t===null||t.pointerId!==e.pointerId)){if(z(this,En,null),T(this,Le,Is).call(this),!t.dragging()){let[n,s]=T(this,Le,Ps).call(this,e);d(this,Yn)?.click(n,s,e.clientX,e.clientY);return}ji()||d(this,Ri).start(t.releaseVelocity(e.timeStamp))}},"#up"),sy=l(function(e){d(this,ii).delete(e.pointerId),d(this,si)!==null&&z(this,si,d(this,ii).size<2?null:T(this,Le,Kl).call(this)),d(this,En)?.pointerId===e.pointerId&&(z(this,En,null),T(this,Le,Is).call(this)),d(this,ts)?.pointerId===e.pointerId&&z(this,ts,null)},"#cancel"),Kl=l(function(){let[e,t]=[...d(this,ii).values()];return e===void 0||t===void 0?null:{distance:Math.max(1,Math.hypot(t[0]-e[0],t[1]-e[1])),angle:Math.atan2(t[1]-e[1],t[0]-e[0]),middleY:(e[1]+t[1])/2,orbit:d(this,rn).orbit()}},"#measurePair"),ry=l(function(){let e=d(this,si),t=T(this,Le,Kl).call(this);e===null||t===null||d(this,rn).setOrbit(Zr({...e.orbit,distance:e.orbit.distance*(e.distance/t.distance),yaw:e.orbit.yaw-(t.angle-e.angle),pitch:e.orbit.pitch+(t.middleY-e.middleY)*jv}))},"#twoFingers"),ay=l(function(e){e.preventDefault();let t=d(this,Cd).turned(e,d(this,dr)?.at??null);t!==0&&(d(this,Ri).stop(),T(this,Le,oy).call(this,t,T(this,Le,Ps).call(this,e)))},"#wheelTurned"),oy=l(function(e,t){let n=d(this,rn).orbit(),s=ro(n,e),r=so(n,d(this,rn).lookHeight(),T(this,Le,Ad).call(this,t),T(this,Le,C0).call(this));if(r===null||s.distance===n.distance){d(this,rn).setOrbit(s);return}let a=1-s.distance/n.distance;d(this,rn).setOrbit({...s,focus:[n.focus[0]+(r[0]-n.focus[0])*a,n.focus[1]+(r[1]-n.focus[1])*a]})},"#zoomAbout"),Td=l(function(e,t){if(e.preventDefault(),d(this,si)!==null){z(this,dr,null);return}if(t==="end"){z(this,dr,null);return}if(t==="start"){d(this,Ri).stop(),z(this,En,null),T(this,Le,Is).call(this),z(this,dr,{orbit:d(this,rn).orbit(),at:e.timeStamp});return}let n=d(this,dr);n!==null&&(n.at=e.timeStamp,d(this,rn).setOrbit(Zr({...n.orbit,distance:n.orbit.distance/Math.max(.05,e.scale),yaw:n.orbit.yaw-e.rotation*Math.PI/180})))},"#safari"),l(P0,"CameraInput");var T0=P0,ly=T0;var cC=["#9a9a9a","#4a4a4a"],jl=l(i=>{let e=i.civilization?.attributes?.find(t=>t.name==="colors")?.value;return!Array.isArray(e)||typeof e[0]!="string"?cC:[e[0],typeof e[1]=="string"?e[1]:e[0]]},"coloursOf"),I0=l((i,e)=>i.find(t=>t.id===e)??[...i].sort((t,n)=>(n.defence?.value??0)-(t.defence?.value??0))[0]??null,"unitOnTop"),uC=l(i=>{let{current:e,max:t}=i.hitPoints??{current:0,max:0};return t>0&&e<t?Math.max(0,e/t):null},"healthOf"),hC=l((i,e,t,n={},s=()=>0,r=1)=>{let a=i.units??[],o=I0(a,e),c=o!==null&&o.id===e,u=t&&i.city?{name:n.cityName?.(i.city)??i.city.name,size:i.city.growth?.size??1,colours:jl(i.city.player),walled:i.city.walled===!0,disorder:i.city.civilDisorderDeclared===!0}:null,h=o!==null&&(t||c)?{id:o.id,type:o._,kinds:o.__??[],colours:jl(o.player),count:a.length,active:c,busy:o.busy!==null&&o.busy!==void 0,fortified:(o.improvements??[]).some(({_:p})=>p==="Fortified"),veteran:(o.improvements??[]).some(({_:p})=>p==="Veteran"),health:uC(o),status:(o.busy?n.unitStatus?.(o):null)||null,facing:s(o),size:r}:null;return u===null&&h===null?null:{city:u,unit:h}},"markerFor"),L0=hC;var fy={step:250,ramp:100,most:2e3},py={step:125,ramp:50,most:1e3},my=l(i=>({step:i.step/2,ramp:i.ramp/2,most:i.most/2}),"quicker"),dC=50,cy=.3,uy=1,fC=.05,pC=.02,D0=l((i,e)=>i.x===e.x&&i.y===e.y,"sameSquare"),hy=l((i,e)=>{let{started:t,from:n,speed:s,rising:r,rise:a,top:o,going:c,stopping:u,fall:h,to:p}=i,f=Math.max(0,e-t);if(f<r)return{along:n+s*f+a*f*f/2,speed:s+a*f};let m=n+(s+o)/2*r;if(f<r+c)return{along:m+o*(f-r),speed:o};let g=m+o*c,y=f-r-c;return y<u?{along:g+o*y-h*y*y/2,speed:o-h*y}:{along:p,speed:0}},"motionAt"),Ql=l(i=>i.started+i.rising+i.going+i.stopping,"motionEnds"),dy=l((i,e,t,n,s)=>{let r=Math.max(0,n-e),a=Math.max(1,s.ramp),o=Math.max(1/s.step,s.most>a*2?r/(s.most-a):0),c=o/a;if(r<=0)return{started:i,from:n,speed:0,rising:0,rise:0,top:0,going:0,stopping:0,fall:0,to:n};if(t*t/(2*c)>=r){let x=2*r/t;return{started:i,from:e,speed:t,rising:0,rise:0,top:t,going:0,stopping:x,fall:t/x,to:n}}let u=Math.min(o,Math.sqrt(c*r+t*t/2)),h=Math.abs(u-t)/c,p=u>=t?c:-c,f=u/c,m=(t+u)/2*h,g=u*f/2,y=Math.max(0,(r-m-g)/u);return{started:i,from:e,speed:t,rising:h,rise:p,top:u,going:y,stopping:f,fall:c,to:n}},"plan"),_o=l((i,e,t)=>t===null?i:i+t*Math.round((e-i)/t),"nearest"),mC=l((i,e)=>i[0]===e[0]&&i[1]===e[1]?null:Math.atan2(e[0]-i[0],e[1]-i[1]),"wayOf"),N0=l(i=>i*i*(3-2*i),"eased"),U0=l((i,e,t)=>{let n=e-i-Math.PI*2*Math.round((e-i)/(Math.PI*2));return i+n*t},"turnTowards"),yo,gn,ri,nc,ic,nt,gy,xy,O0,B0,_y,k0,Rd,ec,tc,vo,z0=class z0{constructor(e){W(this,nt);W(this,yo);W(this,gn,new Map);W(this,ri,new Map);W(this,nc,[]);W(this,ic,0);z(this,yo,e)}walking(e){return d(this,ri).has(e)}size(){return d(this,gn).size}step(e,t,n,s,r,a,o,c=!1){let u=d(this,ri).get(e),h=u===void 0?void 0:d(this,gn).get(u),p=h===void 0?s:T(this,nt,Rd).call(this,h,a),f=h===void 0?0:T(this,nt,tc).call(this,h,T(this,nt,ec).call(this,h,a)),m=[...d(this,gn).values()].find(g=>g!==h&&(c||!g.flies)&&T(this,nt,gy).call(this,g,t,n,a)&&T(this,nt,_y).call(this,T(this,nt,Rd).call(this,g,g.stepped),h===void 0?s:T(this,nt,Rd).call(this,h,g.stepped))&&cy*Math.abs(N0(T(this,nt,tc).call(this,g,T(this,nt,ec).call(this,g,a)))-N0(f))<pC);if(m!==void 0)return h!==void 0&&T(this,nt,B0).call(this,h,e),m.units.push(e),d(this,ri).set(e,m.id),m.id;if(h!==void 0&&D0(h.squares[h.squares.length-1],t)){if(h.units.length>1){let g={...h,id:`walk-${++fi(this,ic)._}`,units:h.units.filter(y=>y!==e),points:[...h.points],squares:[...h.squares]};d(this,gn).set(g.id,g),g.units.forEach(y=>d(this,ri).set(y,g.id)),h.units=[e]}return T(this,nt,O0).call(this,h,n,r,a,o,c),h.id}return h!==void 0&&T(this,nt,B0).call(this,h,e),T(this,nt,xy).call(this,e,t,n,p,r,a,o,{flies:c,climbed:f})}at(e){let t=[],n=[];return d(this,gn).forEach(s=>{let r=T(this,nt,vo).call(this,s,e);if(e>=Ql(s.motion)){n.push(r),T(this,nt,k0).call(this,s);return}t.push(r)}),{going:t,ended:n}}dropped(){return d(this,nc).splice(0)}endsAt(e){let t=d(this,ri).get(e),n=t===void 0?void 0:d(this,gn).get(t);return n===void 0?null:Ql(n.motion)}nextEnd(){let e=null;return d(this,gn).forEach(t=>{let n=Ql(t.motion);e=e===null?n:Math.min(e,n)}),e}endWhere(e,t){let n=[];return d(this,gn).forEach(s=>{e(s.units)&&(n.push(T(this,nt,vo).call(this,s,Math.max(t,Ql(s.motion)))),T(this,nt,k0).call(this,s))}),n}endAll(e){let t=[...d(this,gn).values()].map(n=>T(this,nt,vo).call(this,n,Math.max(e,Ql(n.motion))));return d(this,gn).clear(),d(this,ri).clear(),t}};yo=new WeakMap,gn=new WeakMap,ri=new WeakMap,nc=new WeakMap,ic=new WeakMap,nt=new WeakSet,gy=l(function(e,t,n,s){let r=e.squares.length-1;return r>0&&s-e.stepped<=dC&&D0(e.squares[r-1],t)&&D0(e.squares[r],n)},"#justMade"),xy=l(function(e,t,n,s,r,a,o,{flies:c,climbed:u}){let h=`walk-${++fi(this,ic)._}`,p={id:h,units:[e],from:t,points:[s],squares:[t],stepped:a,motion:dy(a,0,0,0,o),turned:null,flies:c,flown:0,climb:{from:u,at:0}};return d(this,gn).set(h,p),d(this,ri).set(e,h),T(this,nt,O0).call(this,p,n,r,a,o,c),h},"#setOff"),O0=l(function(e,t,n,s,r,a){let{u:o,v:c}=d(this,yo),u=e.points[e.points.length-1],h=u.middle??u.at,{along:p,speed:f}=hy(e.motion,s),m=Math.max(0,Math.floor(p)-1),g=e.points.length>1?T(this,nt,vo).call(this,e,s).facing:null,y=e.points.length-1,x=p-(y-1),_=T(this,nt,ec).call(this,e,s);e.points.length>1&&(e.climb={from:T(this,nt,tc).call(this,e,_),at:e.flown+_}),e.flies=a,u.middle!==void 0&&x*Math.hypot(u.middle[0]-u.at[0],u.middle[1]-u.at[1])<.01&&(e.points[y]={at:u.middle,lift:0,middle:u.middle}),e.points.splice(0,m),e.squares.splice(0,m),e.flown+=m,e.points.push({at:[_o(n.at[0],u.at[0],o),_o(n.at[1],u.at[1],c)],lift:n.lift,...n.middle===void 0?{}:{middle:[_o(n.middle[0],h[0],o),_o(n.middle[1],h[1],c)]}}),e.squares.push(t),e.stepped=s,e.turned=g===null?null:{facing:g,at:s,over:r.step/2},e.motion=dy(s,p-m,f,e.points.length-1,r)},"#goOn"),B0=l(function(e,t){e.units=e.units.filter(n=>n!==t),d(this,ri).delete(t),e.units.length===0&&(d(this,gn).delete(e.id),d(this,nc).push(e.id))},"#leave"),_y=l(function(e,t){let{u:n,v:s}=d(this,yo);return Math.hypot(_o(e.at[0],t.at[0],n)-t.at[0],_o(e.at[1],t.at[1],s)-t.at[1])<fC},"#beside"),k0=l(function(e){d(this,gn).delete(e.id),e.units.forEach(t=>d(this,ri).delete(t))},"#end"),Rd=l(function(e,t){let{at:n,lift:s}=T(this,nt,vo).call(this,e,t);return{at:n,lift:s}},"#drawn"),ec=l(function(e,t){return Math.min(e.points.length-1,Math.max(0,hy(e.motion,t).along))},"#along"),tc=l(function(e,t){return e.flies?Math.max(0,Math.min(1,e.climb.from+(e.flown+t-e.climb.at)/uy,(e.points.length-1-t)/uy)):0},"#climbed"),vo=l(function(e,t){let{points:n,squares:s,turned:r}=e,a=n.length-1,o=T(this,nt,ec).call(this,e,t),c=Math.min(a-1,Math.floor(o)),u=o-c,h=n[c],p=n[c+1]??h,f=[h.at[0]+(p.at[0]-h.at[0])*u,h.at[1]+(p.at[1]-h.at[1])*u],m=l(b=>n[b].middle??n[b].at,"middle"),g=l(b=>b<0||b>=a?null:mC(m(b),m(b+1)),"way"),y=g(c)??0,x=u>.75&&g(c+1)!==null?U0(y,g(c+1),(u-.75)*2):u<.25&&g(c-1)!==null?U0(g(c-1),y,(u+.25)*2):y,_=r!==null&&t-r.at<r.over?U0(r.facing,x,Math.max(0,t-r.at)/r.over):x;return{id:e.id,units:[...e.units],at:f,lift:h.lift+(p.lift-h.lift)*u,aloft:cy*N0(T(this,nt,tc).call(this,e,o)),facing:_,from:e.from,before:s[a-1]??s[a],to:s[a]}},"#walker"),l(z0,"Walks");var F0=z0,vy=F0;var gC=l(({kind:i,start:e,duration:t},n)=>{let s=t<=0?1:Math.min(1,Math.max(0,(n-e)/t));return i==="in"?s:1-s},"fadeAt"),ns,Pd,V0=class V0{constructor(){W(this,ns,new Map);W(this,Pd,0)}size(){return d(this,ns).size}add(e,t,n=500){let s=`fade-${++fi(this,Pd)._}`;return d(this,ns).set(s,{id:s,kind:e,start:t,duration:n}),s}at(e){let t=[],n=[];return d(this,ns).forEach((s,r)=>{if(e>=s.start+s.duration){n.push(r),d(this,ns).delete(r);return}t.push({id:r,kind:s.kind,opacity:gC(s,e)})}),{going:t,ended:n}}end(e){d(this,ns).delete(e)}endAll(){let e=[...d(this,ns).keys()];return d(this,ns).clear(),e}};ns=new WeakMap,Pd=new WeakMap,l(V0,"Fades");var G0=V0,yy=G0;var Z0={reach:200,back:300,fade:600},by=l(i=>({reach:i.reach/2,back:i.back/2,fade:i.fade/2}),"quickerBattle"),J0=.45,sc=l(i=>i.start+i.pace.reach,"blowAt"),H0=l(i=>sc(i)+(i.won?Math.max(i.pace.back,i.pace.fade):i.pace.fade),"battleEnds"),W0=l(i=>Math.min(1,Math.max(0,i)),"clamp"),xC=l(i=>i*i,"easeIn"),_C=l(i=>i*i*(3-2*i),"easeInOut"),vC=l((i,e)=>{let{reach:t,back:n,fade:s}=i.pace,r=e-sc(i),a=1-W0(s<=0?1:r/s);return r<0?{reach:xC(W0(t<=0?1:(e-i.start)/t)),attacker:1,fallen:1}:i.won?{reach:1-_C(W0(n<=0?1:r/n)),attacker:1,fallen:a}:{reach:1,attacker:a,fallen:0}},"battleAt"),X0=l((i,e)=>i.x===e.x&&i.y===e.y,"sameSquare"),yC=l((i,e)=>i.attacker===e.attacker||i.attacker===e.defender,"waitsFor"),jt,is,Id,ss,Y0,$0,My,K0=class K0{constructor(){W(this,ss);W(this,jt,[]);W(this,is,new Set);W(this,Id,0)}size(){return d(this,jt).length}attacking(e){return d(this,jt).some(t=>t.attacker===e)}fighting(e){return d(this,jt).some(t=>t.attacker===e||t.defender===e)}awaitingBlow(e){return d(this,jt).find(t=>!d(this,is).has(t.id)&&X0(t.defenderSquare,e))??null}add(e,t,n,s=t){let r={...e,id:`battle-${++fi(this,Id)._}`,start:T(this,ss,Y0).call(this,e,n,d(this,jt),Math.max(t,s)),notBefore:s,pace:n};return d(this,jt).push(r),r}at(e){let t=[],n=[],s=[],r=new Set;return d(this,jt).forEach(a=>{if(e>=sc(a)&&!d(this,is).has(a.id)&&(d(this,is).add(a.id),n.push(a)),e>=H0(a)){s.push(a);return}t.push(...T(this,ss,My).call(this,a,e,r))}),T(this,ss,$0).call(this,s),{going:t,struck:n,ended:s}}endWhere(e,t){let n=d(this,jt).filter(e),s=d(this,jt).filter((a,o)=>n.includes(a)||!d(this,is).has(a.id)&&n.some(c=>d(this,jt).indexOf(c)>o&&X0(c.defenderSquare,a.defenderSquare))),r=s.filter(a=>!d(this,is).has(a.id));return r.forEach(a=>d(this,is).add(a.id)),T(this,ss,$0).call(this,s),s.length>0&&d(this,jt).forEach((a,o)=>{a.start>t&&(a.start=T(this,ss,Y0).call(this,a,a.pace,d(this,jt).slice(0,o),Math.max(t,a.notBefore)))}),{struck:r,ended:s}}busyUntil(e){return d(this,jt).filter(({attacker:t})=>e.includes(t)).reduce((t,n)=>Math.max(t??0,H0(n)),null)}endAll(e){return this.endWhere(()=>!0,e)}};jt=new WeakMap,is=new WeakMap,Id=new WeakMap,ss=new WeakSet,Y0=l(function(e,t,n,s){return n.reduce((r,a)=>yC(a,e)?Math.max(r,H0(a)):X0(a.defenderSquare,e.defenderSquare)?Math.max(r,sc(a)-t.reach):r,s)},"#startOf"),$0=l(function(e){e.length!==0&&(z(this,jt,d(this,jt).filter(t=>!e.includes(t))),e.forEach(t=>d(this,is).delete(t.id)))},"#take"),My=l(function(e,t,n){let{reach:s,attacker:r,fallen:a}=vC(e,t),{from:o,edge:c,fallsAt:u}=e,h=[],p=!n.has(e.attacker);return n.add(e.attacker),r>0&&p&&h.push({id:e.id,battle:e.id,unit:e.attacker,fallen:!1,at:[o.at[0]+(c[0]-o.at[0])*s,o.at[1]+(c[1]-o.at[1])*s],lift:o.lift*(1-s),facing:e.facing,opacity:r}),e.won&&t>=sc(e)&&a>0&&h.push({id:`${e.id}-fallen`,battle:e.id,unit:e.defender,fallen:!0,at:[u.at[0],u.at[1]],lift:u.lift,facing:e.defenderFacing,opacity:a}),h},"#fighters"),l(K0,"Battles");var q0=K0,Sy=q0;var bC=1,MC=.04,SC=12,wC=l((i,e,t,n,s,{water:r=0,ceiling:a=bC}={})=>{let{from:o,direction:c}=jm(i,e,t,n),[u,h,p]=o,[f,m,g]=c;if(m>-1e-6)return null;let y=l(v=>[u+f*v,h+m*v,p+g*v],"at"),x=l(v=>{let[w,L,I]=y(v);return L-Math.max(r,s(w,I))},"above"),_=Math.max(0,(h-a)/-m),b=(h-r)/-m,A=MC/Math.max(1e-6,Math.hypot(f,g)),S=_;for(let v=_;;v=Math.min(b,v+A)){if(x(v)<=0){let w=S,L=v;for(let G=0;G<SC;G++){let j=(w+L)/2;x(j)>0?w=j:L=j}let[I,,F]=y(L);return[I,F]}if(v>=b)break;S=v}let[R,,C]=y(b);return[R,C]},"pickGround"),wy=wC;var Ld=4,pr,rc,na,ia,Rn,bo,mr,Ls,ac,oc,lc,Pi,Dd,Ey,Q0,eg=class eg{constructor(e,t,n,s,r){W(this,Pi);W(this,pr);W(this,rc);W(this,na);W(this,ia);W(this,Rn);W(this,bo);W(this,mr);W(this,Ls);W(this,ac);W(this,oc);W(this,lc,l(e=>{let t=d(this,pr).getBoundingClientRect(),n=t.width>0?(e.clientX-t.left)/t.width:0,s=t.height>0?(e.clientY-t.top)/t.height:0;d(this,oc).call(this,n*d(this,Rn),s*d(this,bo))},"#click"));z(this,pr,e),z(this,na,t),z(this,ia,n),z(this,Rn,t.period().u),z(this,bo,s),z(this,oc,r),z(this,Ls,document.createElement("canvas"));let{v:a}=t.period();z(this,mr,a),z(this,ac,[[0,0],[-d(this,Rn),0],...a===null?[]:[[0,-a],[-d(this,Rn),-a]]]);let o=Math.max(1,Math.round(d(this,Rn)*Ld)),c=Math.max(1,Math.round(d(this,bo)*Ld));[e,d(this,Ls)].forEach(u=>{u.width=o,u.height=c}),z(this,rc,e.getContext("2d")),e.addEventListener("click",d(this,lc))}dispose(){d(this,pr).removeEventListener("click",d(this,lc))}redraw(){let e=d(this,Ls).getContext("2d");if(e===null)return;let t=d(this,ia).width(),n=d(this,ia).height(),s=[];e.fillStyle="#000000",e.fillRect(0,0,d(this,Ls).width,d(this,Ls).height);for(let r=0;r<n;r++)for(let a=0;a<t;a++){let o=d(this,ia).get(a,r),c=o.terrain?._??"Unknown";if(c==="Unknown")continue;e.fillStyle=Vr(c).colour,d(this,ac).forEach(([p,f])=>{T(this,Pi,Ey).call(this,e,a,r,p,f),e.fill()});let[u,h]=d(this,na).centre(a,r);if(o.city)s.push([u,h,jl(o.city.player)[0],2.2]);else if((o.units??[]).length>0){let p=I0(o.units,null);p!==null&&s.push([u,h,jl(p.player)[0],1.4])}}s.forEach(([r,a,o,c])=>T(this,Pi,Q0).call(this,r,a).forEach(([u,h])=>{e.fillStyle="#000000",e.fillRect(u-c-.5,h-c-.5,c*2+1,c*2+1),e.fillStyle=o,e.fillRect(u-c,h-c,c*2,c*2)}))}show(e,t){let n=d(this,rc);if(n===null)return;if(n.clearRect(0,0,d(this,pr).width,d(this,pr).height),n.drawImage(d(this,Ls),0,0),t!==null){let[h,p]=d(this,na).centre(t.x,t.y);n.fillStyle="#ffffff",T(this,Pi,Q0).call(this,h,p).forEach(([f,m])=>n.fillRect(f-2,m-2,4,4))}if(e===null||e.length<3)return;n.strokeStyle="#ffffff",n.lineWidth=1;let s=d(this,mr),r=Math.min(...e.map(([h])=>h)),a=Math.min(...e.map(([,h])=>h)),o=-d(this,Rn)*Math.floor(r/d(this,Rn)),c=s===null?0:-s*Math.floor(a/s);(s===null?[0]:[-s,0,s]).forEach(h=>[-d(this,Rn),0,d(this,Rn)].forEach(p=>{n.beginPath(),e.forEach(([f,m],g)=>{let[y,x]=T(this,Pi,Dd).call(this,f+o+p,m+c+h);g===0?n.moveTo(y,x):n.lineTo(y,x)}),n.closePath(),n.stroke()}))}};pr=new WeakMap,rc=new WeakMap,na=new WeakMap,ia=new WeakMap,Rn=new WeakMap,bo=new WeakMap,mr=new WeakMap,Ls=new WeakMap,ac=new WeakMap,oc=new WeakMap,lc=new WeakMap,Pi=new WeakSet,Dd=l(function(e,t){return[e*Ld,t*Ld]},"#px"),Ey=l(function(e,t,n,s=0,r=0){e.beginPath(),d(this,na).outline(t,n).forEach(([a,o],c)=>{let[u,h]=T(this,Pi,Dd).call(this,a+s,o+r);c===0?e.moveTo(u,h):e.lineTo(u,h)}),e.closePath()},"#outline"),Q0=l(function(e,t){return(d(this,mr)===null?[0]:[-d(this,mr),0,d(this,mr)]).flatMap(s=>[-d(this,Rn),0,d(this,Rn)].map(r=>T(this,Pi,Dd).call(this,e+r,t+s)))},"#everywhere"),l(eg,"Minimap3D");var j0=eg,Ay=j0;var EC=l(i=>Object.entries(i.reduce((e,t)=>(e[t._]=(e[t._]??0)+t.value,e),{})).map(([e,t])=>({_:e,value:Math.floor(t)})).filter(({value:e})=>e>0),"netTileYields"),Ty=l(i=>{let e=EC(i).sort((n,s)=>n._.charCodeAt(0)-s._.charCodeAt(0)).flatMap(({_:n,value:s})=>Array.from({length:s},()=>n)),t=Math.min(6,Math.max(2,Math.ceil(e.length/2)));return{columns:t,icons:e.slice(0,t*2).map((n,s)=>({_:n,column:s%t,row:Math.floor(s/t)}))}},"tileYieldGrid");var Cy=l((i,e)=>(i.squareYieldsApplied?void 0:e?.squareYields?.find(({x:t,y:n})=>t===i.x&&n===i.y)?.yields)??i.yields??[],"squareYields"),Ry=l(i=>i.city??i.workedBy??null,"squareCity");var AC=.9,TC=l(i=>{let{columns:e,icons:t}=Ty(i),n=Math.min(e,t.length),s=Math.ceil(t.length/e);return{columns:e,slots:t.map(({_:r,column:a,row:o})=>({_:r,right:a-(n-1)/2,up:(s-1)/2-o}))}},"yieldSlots"),CC=l((i,e)=>AC*e/Math.hypot(i,2),"yieldIconSize"),Py=l((i,e)=>{let[t,n]=i.centre(0,0);return Math.min(...e.edgeDirections().map(s=>{let[r,a]=e.offset(s,0,0),[o,c]=i.centre(r,a);return Math.hypot(o-t,c-n)}))},"innerOf"),Iy=l(({at:i,yields:e},t)=>{let{columns:n,slots:s}=TC(e);return s.length===0?null:{at:i,size:CC(n,t),slots:s}},"laidYields"),Ly=l(i=>{let e=[...i],t=e.reduce((a,{slots:o})=>a+o.length,0),n={count:t,anchors:new Float32Array(t*3),slots:new Float32Array(t*2),sizes:new Float32Array(t),cells:new Float32Array(t),names:[]},s=new Map,r=0;return e.forEach(({at:a,size:o,slots:c})=>{c.forEach(({_:u,right:h,up:p})=>{let f=s.get(u);f===void 0&&(f=n.names.push(u)-1,s.set(u,f)),n.anchors[r*3]=a[0],n.anchors[r*3+1]=a[1],n.anchors[r*3+2]=a[2],n.slots[r*2]=h,n.slots[r*2+1]=p,n.sizes[r]=o,n.cells[r]=f,r++})}),n},"yieldMesh");var RC=10,PC=4e3,Ny=l(i=>i-Math.PI*2*Math.round(i/(Math.PI*2)),"shortTurn"),IC=350,LC=2e3,DC=8,Uy=l(i=>({...i,...i.hitPoints?{hitPoints:{...i.hitPoints}}:{},...i.defence?{defence:{...i.defence}}:{},...i.improvements?{improvements:[...i.improvements]}:{}}),"keptUnit"),NC=l(i=>i&&{...i,...i.growth?{growth:{...i.growth}}:{}},"keptCity"),UC=500,FC=.25,OC=400,Ht,mc,gc,Ze,Dt,aa,xc,_c,ct,wt,Pn,wo,vc,oa,vr,Eo,yc,bc,$n,Ao,ai,Qt,rs,la,ca,In,Ds,oi,yr,To,Co,qt,Zn,as,Ns,os,Us,Mc,br,Mr,li,ua,Ro,ci,ui,hi,ls,cs,Sc,wc,Ec,us,Sr,Fs,Jn,Po,Io,Os,Bs,ha,wr,da,Lo,Li,Ac,Di,Er,Tc,fa,hs,pa,ma,Cc,Rc,Do,Pc,No,Ic,Uo,Fo,ga,D,ng,Fy,Oy,Mo,ig,gr,By,So,Nd,xr,sg,Ud,rg,cc,ag,og,ky,zy,Fd,uc,lg,Gy,Od,Vy,Hy,Wy,Bd,Xy,cg,qy,sa,kd,Yy,$y,Zy,zd,ra,hc,Jy,Ky,jy,ug,Gd,Qy,hg,dc,_r,fc,eb,tb,dg,Ii,nb,ib,sb,rb,pc,fg,ab,ob,pg,Ft,lb,cb,mg,gg=class gg{constructor(e,t=gv){W(this,D);W(this,Ht);W(this,mc);W(this,gc,[]);W(this,Ze);W(this,Dt);W(this,aa,null);W(this,xc,0);W(this,_c,"");W(this,ct);W(this,wt,null);W(this,Pn,null);W(this,wo);W(this,vc);W(this,oa);W(this,vr,null);W(this,Eo,null);W(this,yc);W(this,bc,!1);W(this,$n);W(this,Ao);W(this,ai,new Map);W(this,Qt);W(this,rs,new Map);W(this,la,new Map);W(this,ca,new Map);W(this,In,new Map);W(this,Ds,new Set);W(this,oi,new Map);W(this,yr,0);W(this,To,new Map);W(this,Co,new Map);W(this,qt,new Sy);W(this,Zn,new yy);W(this,as,new Map);W(this,Ns,new Map);W(this,os,new Map);W(this,Us,new Map);W(this,Mc,!1);W(this,br,new Map);W(this,Mr,null);W(this,li,new Map);W(this,ua,new Map);W(this,Ro,new Set);W(this,ci,new Set);W(this,ui);W(this,hi,null);W(this,ls,null);W(this,cs,null);W(this,Sc,l(()=>{T(this,D,sa).call(this)&&z(this,cs,null),T(this,D,kd).call(this)},"#pressed"));W(this,wc,l(e=>{let t=e.target;e.ctrlKey||e.metaKey||e.altKey||["Shift","Control","Alt","Meta","CapsLock"].includes(e.key)||t!==null&&(t.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(t.tagName))||T(this,D,kd).call(this)},"#keyed"));W(this,Ec);W(this,us,null);W(this,Sr,null);W(this,Fs);W(this,Jn,l(()=>{let e=d(this,Sr);e!==null&&(e.timer!==null&&window.clearTimeout(e.timer),z(this,Sr,null),document.removeEventListener("keydown",d(this,Jn),!0),e.open&&d(this,$n).endTooltip(d(this,Ht)))},"#endHover"));W(this,Po,null);W(this,Io,!0);W(this,Os,new Map);W(this,Bs,null);W(this,ha,new Map);W(this,wr,new Map);W(this,da,[]);W(this,Lo,0);W(this,Li,null);W(this,Ac,null);W(this,Di,!0);W(this,Er);W(this,Tc,l(()=>{},"#stopUnitSize"));W(this,fa,!1);W(this,hs,!0);W(this,pa,!1);W(this,ma,new Map);W(this,Cc);W(this,Rc,l(()=>{},"#stopArtChanged"));W(this,Do,!1);W(this,Pc);W(this,No);W(this,Ic,"");W(this,Uo,l(()=>T(this,D,mg).call(this),"#resizeHandler"));W(this,Fo,null);W(this,ga,!1);z(this,Ht,e.mapCanvas),z(this,mc,e.coveredBy),z(this,Pc,e.art),z(this,Ao,{cityName:e.cityName,unitStatus:e.unitStatus}),z(this,Er,e.unitSize?.get()??1),z(this,No,e.art.id()),this.world=e.world,z(this,Ze,new $v(e.world)),z(this,Qt,new vy(d(this,Ze).layout.period())),z(this,ui,e.walks),z(this,Cc,Py(d(this,Ze).layout,e.world.topology())),z(this,da,e.world.tiles()),z(this,Lo,d(this,da).length),z(this,vc,e.cameraDistance),z(this,yc,e.lockVerticalEdges);let n=e.cameraDistance.get();z(this,ct,T(this,D,dc).call(this,{...tv(d(this,Ze).layout.centre(0,0)),...n===null?{}:{distance:n}})),z(this,oa,d(this,ct).distance),this.portal=new Lg(e,{centre:l(()=>T(this,D,Qy).call(this),"centre"),centreOn:l((s,r)=>T(this,D,$y).call(this,s,r),"centreOn"),changed:l(()=>T(this,D,Ft).call(this),"changed"),visible:l((s,r,a)=>T(this,D,ra).call(this,s,r,a),"visible")}),z(this,Dt,t(e.mapCanvas,{period:d(this,Ze).layout.period(),ground:d(this,Ze).ground(),yieldIcon:e.yieldIcon})),e.minimapCanvas!==null&&z(this,Po,new Ay(e.minimapCanvas,d(this,Ze).layout,e.world,d(this,Ze).extentV(),(s,r)=>{z(this,cs,null),T(this,D,fc).call(this,{...d(this,wt)?.to??d(this,ct),focus:[s,r]})})),e.debug&&e.mapCanvas.parentElement&&(z(this,aa,T(this,D,lb).call(this,e.mapCanvas.parentElement)),window.civMap3DView=this),d(this,Ze).queueAll(...T(this,D,Gd).call(this)),T(this,D,pc).call(this),this.portal.on("activate-unit",s=>e.activateUnit(s)),z(this,$n,e.squares),z(this,Fs,e.playerId),z(this,Ec,e.transport),z(this,wo,new ly(e.mapCanvas,{orbit:l(()=>d(this,ct),"orbit"),lookHeight:l(()=>d(this,Pn)??0,"lookHeight"),setOrbit:l(s=>this.setOrbit(s),"setOrbit")},{click:l((s,r)=>T(this,D,Jy).call(this,s,r),"click"),menu:l((s,r,a,o,c)=>T(this,D,Ky).call(this,s,r,a,o,c),"menu"),menuOnRightClick:l(()=>d(this,$n).menuOnRightClick(),"menuOnRightClick"),menuOpen:l(()=>d(this,$n).menuOpen(),"menuOpen"),hover:l(s=>T(this,D,jy).call(this,s),"hover")})),window.addEventListener("resize",d(this,Uo)),document.addEventListener("keydown",d(this,wc),!0),e.mapCanvas.addEventListener("pointerdown",d(this,Sc),!0),typeof ResizeObserver<"u"&&e.mapCanvas.parentElement&&(z(this,Fo,new ResizeObserver(d(this,Uo))),d(this,Fo).observe(e.mapCanvas.parentElement)),T(this,D,mg).call(this),T(this,D,Ft).call(this),z(this,Tc,e.unitSize?.onChange(()=>{let s=e.unitSize?.get()??1;s!==d(this,Er)&&!d(this,ga)&&(z(this,Er,s),T(this,D,pc).call(this),T(this,D,Ft).call(this))})??(()=>{})),z(this,Rc,e.artChanged?.(()=>{d(this,ga)||(z(this,hs,!0),T(this,D,Ft).call(this))})??(()=>{}))}land(){return d(this,Ze)}orbit(){return d(this,ct)}moving(){return d(this,wt)!==null||d(this,wo).moving()}setOrbit(e){d(this,Jn).call(this),z(this,wt,null),z(this,ct,T(this,D,dc).call(this,e)),T(this,D,Ft).call(this)}activeUnit(){return{unit:d(this,Li),pendingTile:d(this,Ac)}}centre(e){this.portal.setCenter(e.x,e.y)}turnBy(e){let t=d(this,wt)?.to??d(this,ct);T(this,D,fc).call(this,{...t,yaw:t.yaw+e*Jm},T(this,D,ng).call(this)+e*Jm)}heading(){return{turn:(d(this,wt)?.to??d(this,ct)).yaw,directions:Dg(d(this,Ze).layout,this.world.topology())}}faceNorth(){T(this,D,fc).call(this,{...d(this,wt)?.to??d(this,ct),yaw:0},Ny(-d(this,ct).yaw))}debugViewModes(){return[]}dispose(){T(this,D,pg).call(this,!0),z(this,ga,!0),d(this,Qt).endAll(0),d(this,qt).endAll(0),d(this,Zn).endAll(),d(this,os).clear(),d(this,Us).clear(),d(this,br).clear(),z(this,Mr,null),d(this,as).clear(),d(this,Ns).clear(),d(this,li).clear(),d(this,ua).clear(),d(this,ci).clear(),d(this,In).clear(),d(this,Ds).clear(),d(this,oi).clear(),document.removeEventListener("keydown",d(this,wc),!0),d(this,Ht).removeEventListener("pointerdown",d(this,Sc),!0),d(this,Tc).call(this),d(this,Rc).call(this),d(this,Jn).call(this),d(this,wo).dispose(),d(this,Po)?.dispose(),window.removeEventListener("resize",d(this,Uo)),d(this,Fo)?.disconnect(),d(this,Bs)!==null&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(d(this,Bs)),z(this,Bs,null),d(this,aa)?.remove(),d(this,Dt).dispose();let e=window;e.civMap3DView===this&&delete e.civMap3DView}endPicking(){let e=d(this,us);e!==null&&(z(this,us,null),d(this,Ht).classList.remove("picking-tile"),e.window?.close())}flush(){T(this,D,dg).call(this),T(this,D,Ft).call(this)}mapEvent(e){if(e.kind==="moved"){T(this,D,Oy).call(this,e.unit,e.from,e.to),T(this,D,zd).call(this,e.unit.id,e.from,e.to);return}T(this,D,zd).call(this,e.attacker.id,e.attacker.tile,e.defender.tile),T(this,D,zd).call(this,e.defender.id,e.defender.tile,e.attacker.tile),T(this,D,Fy).call(this,e)}measureCovered(){let e=d(this,Ht).getBoundingClientRect();z(this,gc,d(this,mc).map(t=>{let n=t.getBoundingClientRect(),s=t.parentElement?.getBoundingClientRect()??n;return{left:Math.max(n.left,s.left,e.left)-e.left,top:Math.max(n.top,s.top,e.top)-e.top,right:Math.min(n.right,s.right,e.right)-e.left,bottom:Math.min(n.bottom,s.bottom,e.bottom)-e.top}}).filter(({left:t,top:n,right:s,bottom:r})=>s>t&&r>n))}pickTile(e,t,n){this.endPicking();let s={accept:e,onPick:t,window:null};z(this,us,s),d(this,Ht).classList.add("picking-tile"),s.window=d(this,$n).prompt(n,()=>{d(this,us)===s&&(z(this,us,null),d(this,Ht).classList.remove("picking-tile"))})}picking(){return d(this,us)!==null}queueTile(e){let t=`${e.x},${e.y}`;d(this,ha).set(t,e),d(this,To).set(t,++fi(this,yr)._)}redrawArt(){let e=d(this,Pc).id();return e===d(this,No)?"unchanged":(z(this,No,e),z(this,hs,!0),"redrawn")}releaseTiles(){let e=d(this,Mc)&&T(this,D,Od).call(this);e&&d(this,ha).size>0&&d(this,Mr)===null&&z(this,Mr,new Set([...d(this,Ns).keys(),...d(this,rs).keys()])),d(this,ha).forEach((t,n)=>{let s=d(this,To).get(n)??0;e&&!d(this,br).has(n)&&d(this,br).set(n,d(this,as).get(n)??{units:[],shown:null,ringed:!1,inCity:!1}),d(this,wr).set(n,t),d(this,Co).set(n,s),d(this,li).forEach(r=>{r.square===n&&s>r.after&&(r.patched=!0)})}),d(this,ha).clear(),d(this,To).clear(),d(this,wr).size>0&&T(this,D,Ft).call(this)}setActiveUnit(e,t){let n=d(this,Li)?.tile;if(z(this,Li,e),z(this,Ac,t??null),T(this,D,sa).call(this)&&T(this,D,Yy).call(this)&&T(this,D,kd).call(this),T(this,D,sa).call(this)){T(this,D,Ft).call(this);return}z(this,cs,null);let s=d(this,ls);z(this,hi,e?.id??null),z(this,ls,e?.tile??null),[n,s,e?.tile].forEach(r=>{r&&T(this,D,Ii).call(this,r.x,r.y)}),T(this,D,Ft).call(this)}setWaiting(e){z(this,Do,e),e&&d(this,Jn).call(this)}showActiveUnit(e){d(this,Di)||(z(this,Di,!0),T(this,D,pc).call(this),T(this,D,Ft).call(this))}shown(){return{units:d(this,Di),yields:d(this,fa),waiting:d(this,Do)}}tilesPending(){return d(this,wr).size}toggleUnits(){z(this,Di,!d(this,Di)),T(this,D,pc).call(this),T(this,D,Ft).call(this)}toggleYields(){z(this,fa,!d(this,fa)),z(this,hs,!0),T(this,D,Ft).call(this)}zoomBy(e){d(this,Jn).call(this),z(this,ct,ro(d(this,ct),e)),d(this,wt)!==null&&(d(this,wt).from=ro(d(this,wt).from,e),d(this,wt).to=ro(d(this,wt).to,e)),T(this,D,Ft).call(this)}};Ht=new WeakMap,mc=new WeakMap,gc=new WeakMap,Ze=new WeakMap,Dt=new WeakMap,aa=new WeakMap,xc=new WeakMap,_c=new WeakMap,ct=new WeakMap,wt=new WeakMap,Pn=new WeakMap,wo=new WeakMap,vc=new WeakMap,oa=new WeakMap,vr=new WeakMap,Eo=new WeakMap,yc=new WeakMap,bc=new WeakMap,$n=new WeakMap,Ao=new WeakMap,ai=new WeakMap,Qt=new WeakMap,rs=new WeakMap,la=new WeakMap,ca=new WeakMap,In=new WeakMap,Ds=new WeakMap,oi=new WeakMap,yr=new WeakMap,To=new WeakMap,Co=new WeakMap,qt=new WeakMap,Zn=new WeakMap,as=new WeakMap,Ns=new WeakMap,os=new WeakMap,Us=new WeakMap,Mc=new WeakMap,br=new WeakMap,Mr=new WeakMap,li=new WeakMap,ua=new WeakMap,Ro=new WeakMap,ci=new WeakMap,ui=new WeakMap,hi=new WeakMap,ls=new WeakMap,cs=new WeakMap,Sc=new WeakMap,wc=new WeakMap,Ec=new WeakMap,us=new WeakMap,Sr=new WeakMap,Fs=new WeakMap,Jn=new WeakMap,Po=new WeakMap,Io=new WeakMap,Os=new WeakMap,Bs=new WeakMap,ha=new WeakMap,wr=new WeakMap,da=new WeakMap,Lo=new WeakMap,Li=new WeakMap,Ac=new WeakMap,Di=new WeakMap,Er=new WeakMap,Tc=new WeakMap,fa=new WeakMap,hs=new WeakMap,pa=new WeakMap,ma=new WeakMap,Cc=new WeakMap,Rc=new WeakMap,Do=new WeakMap,Pc=new WeakMap,No=new WeakMap,Ic=new WeakMap,Uo=new WeakMap,Fo=new WeakMap,ga=new WeakMap,D=new WeakSet,ng=l(function(){let e=d(this,wt);return e===null?0:e.turn*(1-e.drawn)},"#turnLeft"),Fy=l(function({attacker:e,defender:t,winner:n}){let s=d(this,ui)?.speed()??"normal",r=performance.now();if(typeof requestAnimationFrame!="function"||ji()||s==="off"||e.player!==d(this,Fs)&&t.player!==d(this,Fs)&&!(d(this,ui)?.rivals()??!0)||!T(this,D,ra).call(this,e.tile.x,e.tile.y,-.5)&&!T(this,D,ra).call(this,t.tile.x,t.tile.y,-.5))return;let a=this.world.get(e.tile.x,e.tile.y).units.find(({id:v})=>v===e.id),o=`${t.tile.x},${t.tile.y}`,c=this.world.get(t.tile.x,t.tile.y),u=[...d(this,li).values()].filter(({square:v,patched:w})=>v===o&&!w).at(-1),h=u===void 0?c.units.filter(({id:v})=>!d(this,ci).has(v)).map(Uy):u.units.filter(({id:v})=>!(u.won&&v===u.defender));if(d(this,ci).has(e.id)||!h.some(({id:v})=>v===t.id))return;let p=d(this,qt).busyUntil([e.id,t.id]);p!==null&&p-r>LC&&T(this,D,uc).call(this,d(this,qt).endWhere(v=>v.attacker===e.id||v.attacker===t.id,r)),T(this,D,ig).call(this,e.id);let[f,m]=d(this,Ze).layout.centre(e.tile.x,e.tile.y),[g,y]=d(this,Ze).layout.centre(t.tile.x,t.tile.y),{u:x,v:_}=d(this,Ze).layout.period(),b=l((v,w)=>w===null?v:v-w*Math.round(v/w),"short"),A=b(g-f,x),S=b(y-m,_),R=`${e.tile.x},${e.tile.y}`,C=d(this,qt).add({attacker:e.id,defender:t.id,attackerSquare:e.tile,defenderSquare:t.tile,won:n==="attacker",from:T(this,D,Mo).call(this,e.tile),edge:[f+A*J0,m+S*J0],fallsAt:T(this,D,Mo).call(this,t.tile),facing:d(this,ai).get(e.id)??Math.atan2(A,S),defenderFacing:d(this,ai).get(t.id)??Math.atan2(-A,-S)},r,s==="fast"?by(Z0):Z0,d(this,Qt).endsAt(e.id)??r);d(this,li).set(C.id,{square:o,city:u?.city??NC(c.city),units:h,after:d(this,yr),won:n==="attacker",defender:t.id,patched:!1}),a!==void 0&&d(this,rs).set(e.id,a),[e.id,t.id].forEach(v=>d(this,oi).set(v,{squares:[R,o],after:d(this,yr)})),T(this,D,Ii).call(this,e.tile.x,e.tile.y),T(this,D,Ii).call(this,t.tile.x,t.tile.y),T(this,D,Ft).call(this)},"#fight"),Oy=l(function(e,t,n){let s=d(this,ui)?.speed()??"normal";if(e.id===d(this,hi)&&z(this,ls,n),typeof requestAnimationFrame!="function"||ji()||s==="off")return;if(e.player!==d(this,Fs)&&d(this,qt).attacking(e.id)){d(this,oi).set(e.id,{squares:[`${t.x},${t.y}`,`${n.x},${n.y}`],after:d(this,yr)});return}T(this,D,uc).call(this,d(this,qt).endWhere(({attacker:u,defender:h})=>u===e.id||h===e.id,performance.now()));let r=d(this,Qt).walking(e.id),a=this.world.get(t.x,t.y).units.find(({id:u})=>u===e.id)??(T(this,D,gr).call(this,e.id)?d(this,rs).get(e.id):void 0),o=e.player===d(this,Fs);if(a===void 0||!o&&!r&&(!(d(this,ui)?.rivals()??!0)||!T(this,D,ra).call(this,t.x,t.y,-.5)&&!T(this,D,ra).call(this,n.x,n.y,-.5)))return;let c=o?fy:py;d(this,rs).set(e.id,a),d(this,oi).set(e.id,{squares:[`${t.x},${t.y}`,`${n.x},${n.y}`],after:d(this,yr)}),T(this,D,ig).call(this,e.id),d(this,Qt).step(e.id,t,n,T(this,D,Mo).call(this,t),T(this,D,Mo).call(this,n),performance.now(),s==="fast"?my(c):c,sd(id(a._,a.__??[]))),T(this,D,Ft).call(this)},"#walk"),Mo=l(function({x:e,y:t},n=d(this,Di)&&!!this.world.get(e,t).city){let[s,r]=d(this,Ze).layout.centre(e,t),a=Math.max(0,d(this,Ze).surfaceAt(s,r)),o=[s,r+(n?Ym:0)];return{at:o,lift:a-Math.max(0,d(this,Ze).surfaceAt(...o)),middle:[s,r]}},"#standing"),ig=l(function(e){d(this,Ds).delete(e)&&d(this,In).forEach((t,n)=>{let s=t.units.filter(r=>r!==e);if(s.length!==t.units.length){if(s.length===0){d(this,In).delete(n),T(this,D,xr).call(this,n);return}d(this,In).set(n,{...t,units:s})}})},"#stepsOn"),gr=l(function(e){return d(this,Qt).walking(e)||d(this,Ds).has(e)||d(this,qt).attacking(e)||d(this,ci).has(e)},"#leftOff"),By=l(function(e){if(d(this,Qt).dropped().forEach(s=>T(this,D,xr).call(this,s)),d(this,In).forEach(s=>T(this,D,So).call(this,s)),d(this,Qt).size()===0)return;if(ji()||(d(this,ui)?.speed()??"normal")==="off"){T(this,D,cc).call(this,d(this,Qt).endAll(e));return}let{going:t,ended:n}=d(this,Qt).at(e);T(this,D,cc).call(this,n),t.forEach(s=>T(this,D,So).call(this,s))},"#placeWalkers"),So=l(function(e){T(this,D,Nd).call(this,e,T(this,D,sg).call(this,e.units))},"#drawWalker"),Nd=l(function({id:e,at:t,lift:n,facing:s,aloft:r=0},a,o=1){let c=a===null?null:JSON.stringify(a),{u,v:h}=d(this,Ze).layout.period(),p=l((g,y)=>y===null?g:(g%y+y)%y,"within");if(c!==(d(this,ca).get(e)??null)&&(d(this,Dt).setWalker(e,a),c===null?d(this,ca).delete(e):d(this,ca).set(e,c)),a===null)return;let f=p(t[0],u),m=p(t[1],h);d(this,Dt).placeWalker(e,[f,Math.max(0,d(this,Ze).surfaceAt(f,m))+n,m],s,r),d(this,Dt).fadeWalker(e,o)},"#drawFigure"),xr=l(function(e){d(this,ca).delete(e)&&d(this,Dt).setWalker(e,null)},"#takeAway"),sg=l(function(e){let t=e.flatMap(n=>{let s=d(this,rs).get(n);return s===void 0?[]:[s]});return T(this,D,Ud).call(this,t)},"#walkerMarker"),Ud=l(function(e,t=d(this,hi)){return L0({city:null,units:e},t,d(this,Di),d(this,Ao),()=>0,d(this,Er))},"#unitsMarker"),rg=l(function({units:e}){return e.some(t=>d(this,oi).has(t))},"#awaitsPatch"),cc=l(function(e){let t=new Set;e.forEach(n=>{let s={...n,units:n.units.filter(r=>!d(this,qt).attacking(r))};if(s.units.length>0&&T(this,D,rg).call(this,s)){d(this,In).set(s.id,s),s.units.forEach(r=>d(this,Ds).add(r)),T(this,D,So).call(this,s);return}T(this,D,xr).call(this,n.id),n.units.forEach(r=>d(this,Ds).delete(r)),T(this,D,ag).call(this,n.units,t)}),T(this,D,og).call(this,t)},"#walksEnded"),ag=l(function(e,t){e.forEach(n=>{T(this,D,gr).call(this,n)&&!d(this,ci).has(n)||(d(this,la).get(n)?.forEach(s=>t.add(s)),d(this,la).delete(n),d(this,rs).delete(n))})},"#release"),og=l(function(e){let t=d(this,hi);t!==null&&t!==(d(this,Li)?.id??null)&&!d(this,Qt).walking(t)&&!d(this,qt).attacking(t)&&T(this,D,qy).call(this,e),e.forEach(n=>{let[s,r]=n.split(",").map(Number);T(this,D,Ii).call(this,s,r)})},"#released"),ky=l(function(e){let t=new Set;if(d(this,qt).size()===0){T(this,D,Fd).call(this,t);return}if(ji()||(d(this,ui)?.speed()??"normal")==="off"){T(this,D,uc).call(this,d(this,qt).endAll(e)),T(this,D,Fd).call(this,t);return}let{going:n,struck:s,ended:r}=d(this,qt).at(e);s.forEach(a=>T(this,D,lg).call(this,a,!0)),n.forEach(a=>{if(!a.fallen&&d(this,Qt).walking(a.unit)){T(this,D,xr).call(this,a.id);return}T(this,D,Xy).call(this,a)&&t.add(T(this,D,zy).call(this,a))}),T(this,D,cg).call(this,r),T(this,D,Fd).call(this,t)},"#placeBattles"),zy=l(function({battle:e,at:t,lift:n,opacity:s}){let r=`${e}-puff`,{u:a,v:o}=d(this,Ze).layout.period(),c=l((p,f)=>f===null?p:(p%f+f)%f,"within"),u=c(t[0],a),h=c(t[1],o);return d(this,Ro).add(r),d(this,Dt).puff(r,[u,Math.max(0,d(this,Ze).surfaceAt(u,h))+n,h],1-s),r},"#puff"),Fd=l(function(e){d(this,Ro).forEach(t=>{e.has(t)||(d(this,Ro).delete(t),d(this,Dt).puff(t,null))})},"#puffsOver"),uc=l(function({struck:e,ended:t}){e.forEach(n=>T(this,D,lg).call(this,n,!1)),T(this,D,cg).call(this,t)},"#battlesOver"),lg=l(function(e,t){let{square:n,units:s}=d(this,li).get(e.id)??{square:"",units:[]},{x:r,y:a}=e.defenderSquare,o=[...d(this,li).entries()].find(([p,f])=>p!==e.id&&f.square===n)?.[1],c=new Set((o?.units??this.world.get(r,a).units).map(({id:p})=>p)),u=e.won?e.defender:e.attacker,h=s.filter(({id:p})=>e.won&&p===e.defender||!c.has(p)&&!T(this,D,gr).call(this,p));d(this,li).delete(e.id),d(this,oi).has(u)&&d(this,ci).add(u),t&&e.won&&h.length>0&&d(this,ua).set(e.id,h),T(this,D,Ii).call(this,r,a)},"#blow"),Gy=l(function(e,t,{shown:n,ringed:s,inCity:r}){if((d(this,as).get(e)?.units??[]).forEach(({id:a})=>{d(this,Ns).get(a)===e&&d(this,Ns).delete(a)}),t.length===0?d(this,as).delete(e):d(this,as).set(e,{units:t.map(Uy),shown:n,ringed:s,inCity:r}),t.forEach(({id:a})=>d(this,Ns).set(a,e)),d(this,os).size>0){let a=[...d(this,os).entries()].filter(([,o])=>o.units.some(c=>t.some(({id:u})=>u===c.id))).map(([o])=>o);a.forEach(o=>d(this,Zn).end(o)),T(this,D,Bd).call(this,a)}},"#drawnOn"),Od=l(function(){return typeof requestAnimationFrame=="function"&&!ji()&&(d(this,ui)?.speed()??"normal")!=="off"},"#fadesShown"),Vy=l(function(e){return d(this,Ns).has(e)||T(this,D,gr).call(this,e)},"#drawnAnywhere"),Hy=l(function(e,t){let n=[],s=[];if(e.forEach((c,u)=>{let h=c.units.filter(({id:f})=>!T(this,D,Vy).call(this,f)),p=d(this,as).get(u)?.shown??null;c.shown!==null&&h.some(({id:f})=>f===c.shown)&&n.push([u,c,h]),c.units.length===0&&p!==null&&!t.has(p)&&s.push([u,p])}),n.length+s.length===0||n.length+s.length>DC)return;let r=l(([c])=>{let[u,h]=c.split(",").map(Number);return T(this,D,ra).call(this,u,h,0)},"onScreen"),a=performance.now(),o=(d(this,ui)?.speed()??"normal")==="fast"?500/2:500;n.filter(r).forEach(([c,u,h])=>{let[p,f]=c.split(",").map(Number);d(this,os).set(d(this,Zn).add("out",a,o),{units:[...h.filter(({id:m})=>m===u.shown),...h.filter(({id:m})=>m!==u.shown)],shown:u.ringed?u.shown:null,at:T(this,D,Mo).call(this,{x:p,y:f},u.inCity),facing:u.shown===null?0:d(this,ai).get(u.shown)??0})}),s.filter(r).forEach(([c,u])=>{d(this,Us).set(d(this,Zn).add("in",a,o),{key:c,unit:u}),d(this,Dt).fadeMarker(c,0)}),T(this,D,Ft).call(this)},"#fadeChanged"),Wy=l(function(e){if(d(this,Zn).size()===0)return;if(!T(this,D,Od).call(this)){T(this,D,Bd).call(this,d(this,Zn).endAll());return}let{going:t,ended:n}=d(this,Zn).at(e),s=[];t.forEach(({id:r,opacity:a})=>{let o=d(this,os).get(r),c=d(this,Us).get(r);if(o!==void 0){let u=T(this,D,Ud).call(this,o.units,o.shown);if(u===null){d(this,Zn).end(r),s.push(r);return}T(this,D,Nd).call(this,{id:r,at:[o.at.at[0],o.at.at[1]],lift:o.at.lift,facing:o.facing},u,a);return}if(c!==void 0){if((d(this,as).get(c.key)?.shown??null)!==c.unit){d(this,Zn).end(r),s.push(r);return}d(this,Dt).fadeMarker(c.key,a)}}),T(this,D,Bd).call(this,[...n,...s])},"#placeFades"),Bd=l(function(e){e.forEach(t=>{let n=d(this,Us).get(t);d(this,os).delete(t)&&T(this,D,xr).call(this,t),n!==void 0&&(d(this,Us).delete(t),[...d(this,Us).values()].some(({key:s})=>s===n.key)||d(this,Dt).fadeMarker(n.key,1))})},"#fadesOver"),Xy=l(function(e){let t=d(this,ua).get(e.battle);if(e.fallen&&t===void 0)return!1;let n=e.fallen?T(this,D,Ud).call(this,t):T(this,D,sg).call(this,[e.unit]);return T(this,D,Nd).call(this,e,n,e.opacity),n!==null&&(e.fallen||e.opacity<1)},"#drawFighter"),cg=l(function(e){if(e.length===0)return;let t=new Set;e.forEach(n=>{let{id:s,attacker:r,won:a,from:o,attackerSquare:c,facing:u}=n;if(T(this,D,xr).call(this,`${s}-fallen`),d(this,ua).delete(s),d(this,li).delete(s),d(this,oi).has(r)&&!T(this,D,gr).call(this,r))if(!a)d(this,ci).add(r);else{let h={id:s,units:[r],at:[o.at[0],o.at[1]],lift:o.lift,aloft:0,facing:u,from:c,before:c,to:c};d(this,In).set(s,h),d(this,Ds).add(r),T(this,D,So).call(this,h);return}T(this,D,xr).call(this,s),T(this,D,ag).call(this,[r],t)}),T(this,D,og).call(this,t)},"#battlesEnded"),qy=l(function(e){let t=d(this,Li);[d(this,ls),t?.tile].forEach(s=>{s&&e.add(`${s.x},${s.y}`)}),z(this,hi,t?.id??null),z(this,ls,t?.tile??null),d(this,In).forEach(s=>T(this,D,So).call(this,s));let n=d(this,cs);n!==null&&(z(this,cs,null),T(this,D,hg).call(this,n.x,n.y))},"#caughtUp"),sa=l(function(){let e=d(this,hi);return e!==null&&e!==(d(this,Li)?.id??null)&&(d(this,Qt).walking(e)||d(this,qt).attacking(e))},"#holding"),kd=l(function(){let e=d(this,hi);e===null||!T(this,D,sa).call(this)||(T(this,D,cc).call(this,d(this,Qt).endWhere(t=>t.includes(e),performance.now())),T(this,D,uc).call(this,d(this,qt).endWhere(({attacker:t})=>t===e,performance.now())),T(this,D,Ft).call(this))},"#hurry"),Yy=l(function(){let e=d(this,ls),t=e===null?void 0:this.world.get(e.x,e.y).units.find(({id:n})=>n===d(this,hi));return t!==void 0&&t.active!==!1&&(t.moves?.value??0)>0},"#ringedOffered"),$y=l(function(e,t){if(T(this,D,sa).call(this)){z(this,cs,{x:e,y:t});return}T(this,D,hg).call(this,e,t)},"#centreSoon"),Zy=l(function(e){if(d(this,oi).forEach(({squares:n,after:s},r)=>{n.some(a=>(e.get(a)??0)>s)&&(d(this,oi).delete(r),d(this,ci).delete(r))}),d(this,In).size===0)return;let t=[...d(this,In).values()].filter(n=>!T(this,D,rg).call(this,n));t.forEach(n=>d(this,In).delete(n.id)),T(this,D,cc).call(this,t)},"#patched"),zd=l(function(e,t,n){let[s,r]=d(this,Ze).layout.centre(t.x,t.y),[a,o]=d(this,Ze).layout.centre(n.x,n.y),{u:c,v:u}=d(this,Ze).layout.period(),h=l((m,g)=>g===null?m:m-g*Math.round(m/g),"short"),p=h(a-s,c),f=h(o-r,u);p===0&&f===0||(d(this,ai).delete(e),d(this,ai).set(e,Math.round(Math.atan2(p,f)*1e3)/1e3),d(this,ai).size>PC&&d(this,ai).delete(d(this,ai).keys().next().value),[t,n].forEach(({x:m,y:g})=>T(this,D,Ii).call(this,m,g)),T(this,D,Ft).call(this))},"#face"),ra=l(function(e,t,n){let s=d(this,Ht).clientWidth,r=d(this,Ht).clientHeight;if(s<=0||r<=0)return!1;let a=d(this,cs),o=a===null?d(this,wt)?.to??d(this,ct):{...d(this,wt)?.to??d(this,ct),focus:d(this,Ze).layout.centre(a.x,a.y)},[c,u]=d(this,Ze).layout.centre(e,t),{u:h,v:p}=T(this,D,_r).call(this),[f,m]=o.focus,g=l((w,L,I)=>I===null?w:w+I*Math.round((L-w)/I),"nearest"),y=[g(c,f,h),Math.max(0,d(this,Ze).heightAt(c,u)),g(u,m,p)],x=s/r,_=d(this,Pn)??0,b=Km(o,_,y,x),A=Km(o,_,[y[0]+Math.cos(o.yaw),y[1],y[2]+Math.sin(o.yaw)],x);if(b===null||A===null)return!1;let S=(b[0]+1)/2*s,R=(1-b[1])/2*r,C=Math.abs(A[0]-b[0])*(s/2),v=(n+.5)*C;return S>=v&&S<=s-v&&R>=v&&R<=r-v&&!d(this,gc).some(({left:w,top:L,right:I,bottom:F})=>S>=w-C/2&&S<=I+C/2&&R>=L-C/2&&R<=F+C/2)},"#visible"),hc=l(function(e,t){let n=d(this,Ht).clientWidth,s=d(this,Ht).clientHeight;if(n<=0||s<=0)return null;let r=wy(d(this,ct),d(this,Pn)??0,[e/n*2-1,1-t/s*2],n/s,(p,f)=>d(this,Ze).heightAt(p,f));if(r===null)return null;let[a,o]=d(this,Ze).layout.tileAt(...r),c=this.world.width(),u=this.world.height();return!(T(this,D,_r).call(this).v!==null)&&(o<0||o>=u)?null:this.world.get((a%c+c)%c,(o%u+u)%u)},"#tileAt"),Jy=l(function(e,t){let n=T(this,D,hc).call(this,e,t);n!==null&&this.portal.emit("tile-clicked",n.x,n.y);let s=d(this,us);if(s!==null){n!==null&&s.accept(n)&&(this.endPicking(),s.onPick(n));return}n!==null&&d(this,$n).click(this.portal,n)},"#clicked"),Ky=l(function(e,t,n,s,r){let a=d(this,Li),o=T(this,D,hc).call(this,e,t);return a===null||o===null?!1:(this.endPicking(),d(this,$n).menu(this.portal,n,s,a,o,d(this,Ec),r),!0)},"#menu"),jy=l(function(e){let t=e===null||d(this,Do)||d(this,$n).menuOpen()?null:T(this,D,hc).call(this,e.x,e.y),n=d(this,Sr);if(t===null||e===null){d(this,Jn).call(this);return}let s=`${t.x},${t.y}`;if(n!==null&&n.key===s){Object.assign(n,{canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY});return}d(this,Jn).call(this);let r={key:s,x:t.x,y:t.y,canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY,timer:null,open:!1};r.timer=window.setTimeout(()=>{r.timer=null,T(this,D,ug).call(this,r)},OC),z(this,Sr,r),document.addEventListener("keydown",d(this,Jn),!0)},"#hovered"),ug=l(function(e){let t=typeof document.elementFromPoint!="function"||document.elementFromPoint(e.clientX,e.clientY)===d(this,Ht),n=t?T(this,D,hc).call(this,e.canvasX,e.canvasY):null;if(n===null||`${n.x},${n.y}`!==e.key){d(this,Jn).call(this);return}let s=d(this,$n).tooltip(d(this,Ht),n,d(this,Fs),{left:e.clientX-10,top:e.clientY-10,bottom:e.clientY+10});!s&&e.open&&d(this,$n).endTooltip(d(this,Ht)),e.open=s},"#showHover"),Gd=l(function(){return[...d(this,ct).focus]},"#focus"),Qy=l(function(){let[e,t]=d(this,Ze).layout.tileAt(...d(this,ct).focus),n=this.world.width(),s=this.world.height();return{x:(e%n+n)%n,y:T(this,D,_r).call(this).v===null?Math.min(s-1,Math.max(0,t)):(t%s+s)%s}},"#centreSquare"),hg=l(function(e,t){let[n,s]=d(this,Ze).layout.centre(e,t),[r,a]=(d(this,wt)?.to??d(this,ct)).focus;if(n===r&&s===a)return;let o={...d(this,wt)?.to??d(this,ct),focus:[n,s]},{u:c,v:u}=T(this,D,_r).call(this),h=l((g,y)=>y===null?g:g-y*Math.round(g/y),"short"),[p,f]=d(this,ct).focus,m=Math.hypot(h(n-p,c),h(s-f,u));if(!d(this,bc)||m>d(this,ct).distance*1.5){z(this,bc,!0),this.setOrbit(o);return}T(this,D,fc).call(this,o)},"#centreOn"),dc=l(function(e){return sv(Zr(e),T(this,D,_r).call(this),d(this,Ze).extentV())},"#settle"),_r=l(function(){let e=d(this,Ze).layout.period();return this.portal?.lockVerticalEdges()??d(this,yc)?{u:e.u,v:null}:e},"#period"),fc=l(function(e,t=T(this,D,ng).call(this)+Ny(e.yaw-(d(this,wt)?.to??d(this,ct)).yaw)){d(this,Jn).call(this),typeof requestAnimationFrame!="function"||ji()?(z(this,wt,null),z(this,ct,T(this,D,dc).call(this,e))):z(this,wt,{from:d(this,ct),to:e,started:null,turn:t,drawn:0}),T(this,D,Ft).call(this)},"#moveTo"),eb=l(function(e){let t=d(this,wt);if(t===null)return!1;t.started??=e;let n=Math.min(1,(e-t.started)/IC);return t.drawn=n*n*(3-2*n),z(this,ct,T(this,D,dc).call(this,rv(t.from,t.to,n,T(this,D,_r).call(this),t.turn))),n>=1&&z(this,wt,null),n<1},"#moveCamera"),tb=l(function(e){let[t,n]=d(this,ct).focus,s=Math.max(0,d(this,Ze).heightAt(t,n));return!e||d(this,Pn)===null||ji()?(z(this,Pn,s),!1):(z(this,Pn,d(this,Pn)+(s-d(this,Pn))*FC),Math.abs(s-d(this,Pn))<.002?(z(this,Pn,s),!1):!0)},"#followHeight"),dg=l(function(){let e=[...d(this,wr).values()].map(({x:h,y:p})=>[h,p]),t=this.world.tiles(),n=t!==d(this,da)||t.length!==d(this,Lo);z(this,da,t),z(this,Lo,t.length),d(this,wr).clear();let s=T(this,D,ib).call(this,d(this,Ze).changed(e,...T(this,D,Gd).call(this),n)),r=new Set(e.map(([h,p])=>`${h},${p}`)),a=new Map([...r].map(h=>[h,d(this,Co).get(h)??0]));d(this,Co).clear();let o=d(this,br),c=d(this,Mr);z(this,br,new Map),z(this,Mr,null),d(this,os).forEach(({units:[h]})=>{h!==void 0&&c?.add(h.id)}),e.forEach(([h,p])=>T(this,D,Ii).call(this,h,p)),s.forEach(([h,p])=>{let f=`${h},${p}`;!n&&!r.has(f)&&d(this,Os).has(f)&&T(this,D,Ii).call(this,h,p)}),T(this,D,nb).call(this,e,s);let u=d(this,Sr);u!==null&&u.open&&e.some(([h,p])=>h===u.x&&p===u.y)&&T(this,D,ug).call(this,u),(e.length>0||n)&&z(this,Io,!0),n&&(z(this,hs,!0),d(this,Os).forEach((h,p)=>{let[f,m]=p.split(",").map(Number);T(this,D,Ii).call(this,f,m)})),c!==null&&T(this,D,Od).call(this)&&!(n&&r.size*2>=t.length)&&T(this,D,Hy).call(this,o,c),e.length>0&&T(this,D,Zy).call(this,a)},"#takeTiles"),Ii=l(function(e,t){let n=`${e},${t}`,s=this.world.get(e,t),r=d(this,qt).awaitingBlow({x:e,y:t}),a=r===null?void 0:d(this,li).get(r.id),o=a===void 0?s.units:[...a.units,...s.units.filter(({id:x})=>!a.units.some(_=>_.id===x))];s.units.filter(({id:x})=>T(this,D,gr).call(this,x)&&!d(this,ci).has(x)).forEach(x=>{let _=d(this,la).get(x.id)??new Set;_.add(n),d(this,la).set(x.id,_),d(this,rs).set(x.id,x)});let u=o.filter(({id:x})=>!T(this,D,gr).call(this,x)),h=L0(a===void 0&&u.length===s.units.length?s:{city:a===void 0?s.city:a.city,units:u},d(this,hi),d(this,Di),d(this,Ao),x=>d(this,ai).get(x.id)??0,d(this,Er));T(this,D,Gy).call(this,n,u,{shown:h?.unit?.id??null,ringed:h?.unit?.active===!0,inCity:(h?.unit??null)!==null&&h?.city!==null});let[p,f]=d(this,Ze).layout.centre(e,t),m=[p,Math.max(0,d(this,Ze).surfaceAt(p,f)),f],g=h===null?null:JSON.stringify([h,m]);g!==(d(this,Os).get(n)??null)&&(d(this,Dt).setMarker(n,m,h),T(this,D,rb).call(this,n,g))},"#mark"),nb=l(function(e,t){e.length===0&&t.length===0||(e.forEach(([n,s])=>d(this,ma).delete(`${n},${s}`)),t.forEach(([n,s])=>d(this,ma).delete(`${n},${s}`)),z(this,hs,!0))},"#yieldsChanged"),ib=l(function(e){let t=this.world.topology(),n=new Map;return e.forEach(([s,r])=>{n.set(`${s},${r}`,[s,r]),t.directions().forEach(a=>{let o=t.neighbour(s,r,a);o!==null&&n.set(`${o[0]},${o[1]}`,o)})}),[...n.values()]},"#besides"),sb=l(function(){if(!d(this,fa)){d(this,pa)&&(d(this,Dt).setYields(null),z(this,pa,!1));return}if(!d(this,hs)&&d(this,pa))return;let e=[];this.world.tiles().forEach(t=>{let n=`${t.x},${t.y}`,s=Cy(t,Ry(t)),r=d(this,ma).get(n);if(r===void 0||r.of!==s){let[a,o]=d(this,Ze).layout.centre(t.x,t.y);r={of:s,laid:s.length===0?null:Iy({at:[a,Math.max(0,d(this,Ze).surfaceAt(a,o)),o],yields:s},d(this,Cc))},d(this,ma).set(n,r)}r.laid!==null&&e.push(r.laid)}),d(this,Dt).setYields(Ly(e)),z(this,hs,!1),z(this,pa,!0)},"#showYields"),rb=l(function(e,t){t===null?d(this,Os).delete(e):d(this,Os).set(e,t)},"#remember"),pc=l(function(){let e=new Set(d(this,Os).keys());this.world.tiles().forEach(({x:t,y:n})=>e.add(`${t},${n}`)),e.forEach(t=>{let[n,s]=t.split(",").map(Number);T(this,D,Ii).call(this,n,s)})},"#markAll"),fg=l(function(e){let t=performance.now(),n=T(this,D,eb).call(this,t),[s,r]=T(this,D,Gd).call(this);T(this,D,dg).call(this),T(this,D,By).call(this,t),T(this,D,ky).call(this,t),T(this,D,Wy).call(this,t),`${s},${r}`!==d(this,_c)&&(z(this,_c,`${s},${r}`),d(this,Ze).refocus(s,r)),d(this,Ze).build(d(this,Dt),e);let a=T(this,D,tb).call(this,e!==null);T(this,D,sb).call(this),d(this,Dt).view(d(this,ct),d(this,Pn)??0,T(this,D,_r).call(this)),d(this,Dt).render(),T(this,D,ab).call(this),T(this,D,pg).call(this),z(this,xc,performance.now()-t),z(this,Mc,!0),T(this,D,cb).call(this),(d(this,Ze).pending()>0||d(this,Ze).overlaysPending()>0||d(this,Qt).size()>0||d(this,qt).size()>0||d(this,Zn).size()>0||n||a)&&T(this,D,Ft).call(this)},"#frameDrawn"),ab=l(function(){let e=d(this,Po);if(e===null)return;d(this,Io)&&(z(this,Io,!1),e.redraw());let t=T(this,D,sa).call(this)?d(this,ls):d(this,Li)?.tile??null;e.show(T(this,D,ob).call(this),t===null?null:{x:t.x,y:t.y})},"#showMinimap"),ob=l(function(){let e=d(this,Ht).clientWidth,t=d(this,Ht).clientHeight;if(e<=0||t<=0)return null;let n=e/t,s=d(this,Pn)??0,r=fd(d(this,ct).distance).far,[a,o]=d(this,ct).focus,c=l((h,p)=>{for(let f=p;f>=-1;f-=.05){let m=so(d(this,ct),s,[h,f],n);if(m!==null){let g=Math.hypot(m[0]-a,m[1]-o),y=g>r?r/g:1;return[a+(m[0]-a)*y,o+(m[1]-o)*y]}}return null},"corner"),u=[c(-1,-1),c(1,-1),c(1,1),c(-1,1)];return u.every(h=>h!==null)?u:null},"#patch"),pg=l(function(e=!1){let t=(e?d(this,wt)?.to??d(this,ct):d(this,ct)).distance,n=l(()=>{d(this,vr)!==null&&clearTimeout(d(this,vr)),z(this,vr,null),z(this,Eo,null)},"stop"),s=l(()=>{n(),z(this,oa,t),d(this,vc).set(t)},"keep");if(e){n(),t!==d(this,oa)&&s();return}if(d(this,wt)!==null||t===d(this,oa)){n();return}d(this,vr)!==null&&t===d(this,Eo)||(n(),z(this,Eo,t),z(this,vr,setTimeout(s,UC)))},"#keepDistance"),Ft=l(function(){if(!d(this,ga)){if(typeof requestAnimationFrame!="function"){T(this,D,fg).call(this,null);return}d(this,Bs)===null&&z(this,Bs,requestAnimationFrame(()=>{z(this,Bs,null),T(this,D,fg).call(this,RC)}))}},"#draw"),lb=l(function(e){let t=document.createElement("pre");return t.className="map3d-stats",t.setAttribute("aria-hidden","true"),Object.assign(t.style,{background:"var(--ui-overlay-bg, rgba(0, 0, 0, 0.6))",color:"var(--ui-overlay-fg, #fff)",font:"12px/1.4 monospace",left:"0.5rem",margin:"0",padding:"0.25rem 0.5rem",pointerEvents:"none",position:"absolute",bottom:"0.5rem"}),e.append(t),t},"#statsOverlay"),cb=l(function(){if(d(this,aa)===null)return;let{drawCalls:e,triangles:t,geometries:n}=d(this,Dt).stats();d(this,aa).textContent=[`frame ${d(this,xc).toFixed(1)} ms`,`draw calls ${e}`,`triangles ${t.toLocaleString()}`,`geometries ${n}`,`chunks waiting ${d(this,Ze).pending()}`].join(`
`)},"#showStats"),mg=l(function(){let e=d(this,Ht).parentElement,t=e?.offsetWidth??0,n=e?.offsetHeight??0,s=window.devicePixelRatio||1,r=`${t}\xD7${n}@${s}`;t===0||n===0||r===d(this,Ic)||(z(this,Ic,r),d(this,Dt).resize(t,n,s),this.measureCovered(),d(this,Dt).render())},"#resize"),l(gg,"MapView3D");var tg=gg,ub=tg;var BC={createMapView3D:l(i=>new ub(i),"createMapView3D")};globalThis[Rg]=BC;})();
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
