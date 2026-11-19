"use strict";(()=>{var I_=Object.create;var gh=Object.defineProperty;var L_=Object.getOwnPropertyDescriptor;var D_=Object.getOwnPropertyNames;var N_=Object.getPrototypeOf,U_=Object.prototype.hasOwnProperty;var Em=i=>{throw TypeError(i)};var l=(i,e)=>gh(i,"name",{value:e,configurable:!0});var F_=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var O_=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of D_(e))!U_.call(i,s)&&s!==t&&gh(i,s,{get:()=>e[s],enumerable:!(n=L_(e,s))||n.enumerable});return i};var B_=(i,e,t)=>(t=i!=null?I_(N_(i)):{},O_(e||!i||!i.__esModule?gh(t,"default",{value:i,enumerable:!0}):t,i));var xh=(i,e,t)=>e.has(i)||Em("Cannot "+t);var m=(i,e,t)=>(xh(i,e,"read from private field"),t?t.call(i):e.get(i)),j=(i,e,t)=>e.has(i)?Em("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t),H=(i,e,t,n)=>(xh(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t),G=(i,e,t)=>(xh(i,e,"access private method"),t);var Tm=(i,e,t,n)=>({set _(s){H(i,e,s,t)},get _(){return m(i,e,n)}});var Cm=F_(Hs=>{"use strict";var li,os=Hs&&Hs.__classPrivateFieldGet||function(i,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?i!==e||!n:!e.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(i):n?n.value:e.get(i)};Object.defineProperty(Hs,"__esModule",{value:!0}),Hs.EventEmitter=void 0;var _h=class _h{constructor(){li.set(this,{})}on(e,t){e in os(this,li,"f")||(os(this,li,"f")[e]=[]),os(this,li,"f")[e].push(t)}once(e,t){let n=l((...s)=>{t(...s),this.off(e,n)},"i");this.on(e,n)}off(e,t){if(!(e in os(this,li,"f")))return;let n=os(this,li,"f")[e].indexOf(t);n!==-1&&os(this,li,"f")[e].splice(n,1)}emit(e,...t){e in os(this,li,"f")&&os(this,li,"f")[e].forEach((n=>n(...t)))}};l(_h,"i");var Sl=_h;Hs.EventEmitter=Sl,li=new WeakMap,Hs.default=Sl});var Am="civMap3D";var Rm=B_(Cm());var ls,ci,Er,yh=class yh extends Rm.EventEmitter{constructor(t,n){super();j(this,ls);j(this,ci);j(this,Er);H(this,ci,t),H(this,Er,t.lockVerticalEdges),H(this,ls,n)}center(){return m(this,ls).centre()}isVisible(t,n,s=0){return m(this,ls).visible(t,n,s)}lockVerticalEdges(){return m(this,Er)}nativeTileSize(){return m(this,ci).art.nativeTileSize()}openCity(t){let{cityOpener:n}=m(this,ci);return n.opens(t,this)?(n.open(t,this),!0):!1}playerId(){return m(this,ci).playerId}render(){m(this,ls).changed()}scale(){return m(this,ci).art.scale()}setCenter(t,n){m(this,ls).centreOn(t,n)}setLockVerticalEdges(t){H(this,Er,t)}setZoom(){}transport(){return m(this,ci).transport}zoom(){return m(this,ci).art.zoom()}};ls=new WeakMap,ci=new WeakMap,Er=new WeakMap,l(yh,"MapPortal3D");var vh=yh,Pm=vh;var z_=l((i,e)=>{let[t,n]=i.centre(0,0);return Object.fromEntries(e.directions().map(s=>{let[r,a]=e.offset(s,0,0),[o,c]=i.centre(r,a);return[s,[o-t,c-n]]}))},"groundDirections"),Im=z_;var s0=0,Kh=1,r0=2;var mo=1,Vc=2,na=3,Es=0,xn=1,xi=2,Zs=0,ia=1,Qh=2,jh=3,ed=4,a0=5;var Js=100,o0=101,l0=102,c0=103,u0=104,h0=200,d0=201,f0=202,p0=203,td=204,nd=205,m0=206,g0=207,x0=208,_0=209,v0=210,y0=211,b0=212,M0=213,S0=214,Zl=0,Jl=1,Kl=2,qr=3,Ql=4,jl=5,ec=6,tc=7,id=0,w0=1,E0=2,_i=0,sd=1,rd=2,ad=3,go=4,od=5,ld=6,cd=7;var ud=300,Ks=301,sa=302,Hc=303,Wc=304,$s=1e3,Gn=1001,nc=1002,Ut=1003,T0=1004;var xo=1005;var Xt=1006,Xc=1007;var Kn=1008;var bn=1009,hd=1010,dd=1011,ra=1012,qc=1013,Qn=1014,jn=1015,Pn=1016,Yc=1017,$c=1018,Qs=1020,fd=35902,pd=35899,md=1021,gd=1022,ei=1023,Gi=1026,qi=1027,xd=1028,Zc=1029,vi=1030,Jc=1031;var Kc=1033,_o=33776,vo=33777,yo=33778,bo=33779,Qc=35840,jc=35841,eu=35842,tu=35843,nu=36196,iu=37492,su=37496,ru=37488,au=37489,Mo=37490,ou=37491,lu=37808,cu=37809,uu=37810,hu=37811,du=37812,fu=37813,pu=37814,mu=37815,gu=37816,xu=37817,_u=37818,vu=37819,yu=37820,bu=37821,Mu=36492,Su=36494,wu=36495,Eu=36283,Tu=36284,So=36285,Au=36286;var qa=2300,ic=2301,Yl=2302,Wh=2303,Xh=2400,qh=2401,Yh=2402;var A0=3200;var Cu=0,C0=1,Yi="",Nt="srgb",Ya="srgb-linear",$a="linear",ht="srgb";var $l=7680;var R0=519,P0=512,I0=513,L0=514,_d=515,D0=516,N0=517,vd=518,yd=519,bd=35044;var Md="300 es",Vn=2e3,Yr=2001;function k_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}l(k_,"arrayNeedsUint32");function G_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}l(G_,"isTypedArray");function Za(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}l(Za,"createElementNS");function U0(){let i=Za("canvas");return i.style.display="block",i}l(U0,"createCanvasElement");var Lm={},$r=null;function Ja(...i){let e="THREE."+i.shift();$r?$r("log",e,...i):console.log(e,...i)}l(Ja,"log");function F0(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}l(F0,"enhanceLogMessage");function Ge(...i){i=F0(i);let e="THREE."+i.shift();if($r)$r("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}l(Ge,"warn");function He(...i){i=F0(i);let e="THREE."+i.shift();if($r)$r("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}l(He,"error");function Wa(...i){let e=i.join(" ");e in Lm||(Lm[e]=!0,Ge(...i))}l(Wa,"warnOnce");function O0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}l(r,"probe"),setTimeout(r,t)})}l(O0,"probeAsync");var B0={[Zl]:Zl,[Kl]:ec,[Ql]:Ql,[qr]:jl,[Jl]:Jl,[ec]:Kl,[tc]:tc,[jl]:qr},Ad=class Ad{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}};l(Ad,"EventDispatcher");var hi=Ad,tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var bh=Math.PI/180,sc=180/Math.PI;function js(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}l(js,"generateUUID");function rt(i,e,t){return Math.max(e,Math.min(t,i))}l(rt,"clamp");function V_(i,e){return(i%e+e)%e}l(V_,"euclideanModulo");function Mh(i,e,t){return(1-t)*i+t*e}l(Mh,"lerp");function z0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}l(z0,"floorPowerOfTwo");function Ru(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}l(Ru,"getNormalizationScale");function k0(i,e){if(e.constructor===Float32Array)return i;let t=Ru(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}l(k0,"denormalize");function G0(i,e){if(e.constructor===Float32Array)return i;let t=Ru(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}l(G0,"normalize");var Tc=class Tc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};l(Tc,"Vector2"),Tc.prototype.isVector2=!0;var Ve=Tc,Cd=class Cd{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],u=n[s+1],h=n[s+2],f=n[s+3],d=r[a+0],p=r[a+1],x=r[a+2],y=r[a+3];if(f!==y||c!==d||u!==p||h!==x){let _=c*d+u*p+h*x+f*y;_<0&&(d=-d,p=-p,x=-x,y=-y,_=-_);let g=1-o;if(_<.9995){let S=Math.acos(_),R=Math.sin(S);g=Math.sin(g*S)/R,o=Math.sin(o*S)/R,c=c*g+d*o,u=u*g+p*o,h=h*g+x*o,f=f*g+y*o}else{c=c*g+d*o,u=u*g+p*o,h=h*g+x*o,f=f*g+y*o;let S=1/Math.sqrt(c*c+u*u+h*h+f*f);c*=S,u*=S,h*=S,f*=S}}e[t]=c,e[t+1]=u,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],u=n[s+2],h=n[s+3],f=r[a],d=r[a+1],p=r[a+2],x=r[a+3];return e[t]=o*x+h*f+c*p-u*d,e[t+1]=c*x+h*d+u*f-o*p,e[t+2]=u*x+h*p+o*d-c*f,e[t+3]=h*x-o*f-c*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(n/2),h=o(s/2),f=o(r/2),d=c(n/2),p=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=d*h*f+u*p*x,this._y=u*p*f-d*h*x,this._z=u*h*x+d*p*f,this._w=u*h*f-d*p*x;break;case"YXZ":this._x=d*h*f+u*p*x,this._y=u*p*f-d*h*x,this._z=u*h*x-d*p*f,this._w=u*h*f+d*p*x;break;case"ZXY":this._x=d*h*f-u*p*x,this._y=u*p*f+d*h*x,this._z=u*h*x+d*p*f,this._w=u*h*f-d*p*x;break;case"ZYX":this._x=d*h*f-u*p*x,this._y=u*p*f+d*h*x,this._z=u*h*x-d*p*f,this._w=u*h*f+d*p*x;break;case"YZX":this._x=d*h*f+u*p*x,this._y=u*p*f+d*h*x,this._z=u*h*x-d*p*f,this._w=u*h*f-d*p*x;break;case"XZY":this._x=d*h*f-u*p*x,this._y=u*p*f-d*h*x,this._z=u*h*x+d*p*f,this._w=u*h*f+d*p*x;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],u=t[2],h=t[6],f=t[10],d=n+o+f;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-u)*p,this._z=(a-s)*p}else if(n>o&&n>f){let p=2*Math.sqrt(1+n-o-f);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+u)/p}else if(o>f){let p=2*Math.sqrt(1+o-n-f);this._w=(r-u)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+u)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,u=t._z,h=t._w;return this._x=n*h+a*o+s*u-r*c,this._y=s*h+a*c+r*o-n*u,this._z=r*h+a*u+n*c-s*o,this._w=a*h-n*o-s*c-r*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let u=Math.acos(o),h=Math.sin(u);c=Math.sin(c*u)/h,t=Math.sin(t*u)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};l(Cd,"Quaternion");var pn=Cd,Ac=class Ac{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+c*u+a*f-o*h,this.y=n+c*h+o*u-r*f,this.z=s+c*f+r*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sh.copy(this).projectOnVector(e),this.sub(Sh)}reflect(e){return this.sub(Sh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};l(Ac,"Vector3"),Ac.prototype.isVector3=!0;var W=Ac,Sh=new W,Dm=new pn,Cc=class Cc{constructor(e,t,n,s,r,a,o,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,u)}set(e,t,n,s,r,a,o,c,u){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],h=n[4],f=n[7],d=n[2],p=n[5],x=n[8],y=s[0],_=s[3],g=s[6],S=s[1],R=s[4],E=s[7],C=s[2],T=s[5],v=s[8];return r[0]=a*y+o*S+c*C,r[3]=a*_+o*R+c*T,r[6]=a*g+o*E+c*v,r[1]=u*y+h*S+f*C,r[4]=u*_+h*R+f*T,r[7]=u*g+h*E+f*v,r[2]=d*y+p*S+x*C,r[5]=d*_+p*R+x*T,r[8]=d*g+p*E+x*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8];return t*a*h-t*o*u-n*r*h+n*o*c+s*r*u-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],f=h*a-o*u,d=o*c-h*r,p=u*r-a*c,x=t*f+n*d+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return e[0]=f*y,e[1]=(s*u-h*n)*y,e[2]=(o*n-s*a)*y,e[3]=d*y,e[4]=(h*t-s*c)*y,e[5]=(s*r-o*t)*y,e[6]=p*y,e[7]=(n*c-u*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*a+u*o)+a+e,-s*u,s*c,-s*(-u*a+c*o)+o+t,0,0,1),this}scale(e,t){return Wa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wh.makeScale(e,t)),this}rotate(e){return Wa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wh.makeRotation(-e)),this}translate(e,t){return Wa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};l(Cc,"Matrix3"),Cc.prototype.isMatrix3=!0;var We=Cc,wh=new We,Nm=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Um=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function H_(){let i={enabled:!0,workingColorSpace:Ya,spaces:{},convert:l(function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ht&&(s.r=ki(s.r),s.g=ki(s.g),s.b=ki(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ht&&(s.r=Xr(s.r),s.g=Xr(s.g),s.b=Xr(s.b))),s},"convert"),workingToColorSpace:l(function(s,r){return this.convert(s,this.workingColorSpace,r)},"workingToColorSpace"),colorSpaceToWorking:l(function(s,r){return this.convert(s,r,this.workingColorSpace)},"colorSpaceToWorking"),getPrimaries:l(function(s){return this.spaces[s].primaries},"getPrimaries"),getTransfer:l(function(s){return s===Yi?$a:this.spaces[s].transfer},"getTransfer"),getToneMappingMode:l(function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},"getToneMappingMode"),getLuminanceCoefficients:l(function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},"getLuminanceCoefficients"),define:l(function(s){Object.assign(this.spaces,s)},"define"),_getMatrix:l(function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},"_getMatrix"),_getDrawingBufferColorSpace:l(function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},"_getDrawingBufferColorSpace"),_getUnpackColorSpace:l(function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},"_getUnpackColorSpace")},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ya]:{primaries:e,whitePoint:n,transfer:$a,toXYZ:Nm,fromXYZ:Um,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:Nm,fromXYZ:Um,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),i}l(H_,"createColorManagement");var st=H_();function ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}l(ki,"SRGBToLinear");function Xr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}l(Xr,"LinearToSRGB");var Tr,Rd=class Rd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Tr===void 0&&(Tr=Za("canvas")),Tr.width=e.width,Tr.height=e.height;let s=Tr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Tr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Za("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ki(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ki(t[n]/255)*255):t[n]=ki(t[n]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};l(Rd,"ImageUtils");var rc=Rd,W_=0,Pd=class Pd{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=js(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Eh(s[a].image)):r.push(Eh(s[a]))}else r=Eh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};l(Pd,"TextureSource");var Zr=Pd;function Eh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?rc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}l(Eh,"serializeImage");var X_=0,Th=new W,Hr=class Hr extends hi{constructor(e=Hr.DEFAULT_IMAGE,t=Hr.DEFAULT_MAPPING,n=Gn,s=Gn,r=Xt,a=Kn,o=ei,c=bn,u=Hr.DEFAULT_ANISOTROPY,h=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=js(),this.name="",this.source=new Zr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Th).x}get height(){return this.source.getSize(Th).y}get depth(){return this.source.getSize(Th).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ud)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $s:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case nc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $s:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case nc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};l(Hr,"Texture");var mn=Hr;mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=ud;mn.DEFAULT_ANISOTROPY=1;var Rc=class Rc{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,u=c[0],h=c[4],f=c[8],d=c[1],p=c[5],x=c[9],y=c[2],_=c[6],g=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-y)<.01&&Math.abs(x-_)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+y)<.1&&Math.abs(x+_)<.1&&Math.abs(u+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(u+1)/2,E=(p+1)/2,C=(g+1)/2,T=(h+d)/4,v=(f+y)/4,w=(x+_)/4;return R>E&&R>C?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=T/n,r=v/n):E>C?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=T/s,r=w/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=v/r,s=w/r),this.set(n,s,r,t),this}let S=Math.sqrt((_-x)*(_-x)+(f-y)*(f-y)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(_-x)/S,this.y=(f-y)/S,this.z=(d-h)/S,this.w=Math.acos((u+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};l(Rc,"Vector4"),Rc.prototype.isVector4=!0;var St=Rc,Id=class Id extends hi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new mn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Xt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Zr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};l(Id,"RenderTarget");var ac=Id,Ld=class Ld extends ac{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}};l(Ld,"WebGLRenderTarget");var An=Ld,Dd=class Dd extends mn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};l(Dd,"DataArrayTexture");var Ka=Dd;var Nd=class Nd extends mn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};l(Nd,"Data3DTexture");var oc=Nd;var Xa=class Xa{constructor(e,t,n,s,r,a,o,c,u,h,f,d,p,x,y,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,u,h,f,d,p,x,y,_)}set(e,t,n,s,r,a,o,c,u,h,f,d,p,x,y,_){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=c,g[2]=u,g[6]=h,g[10]=f,g[14]=d,g[3]=p,g[7]=x,g[11]=y,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xa().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ar.setFromMatrixColumn(e,0).length(),r=1/Ar.setFromMatrixColumn(e,1).length(),a=1/Ar.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),u=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=a*h,p=a*f,x=o*h,y=o*f;t[0]=c*h,t[4]=-c*f,t[8]=u,t[1]=p+x*u,t[5]=d-y*u,t[9]=-o*c,t[2]=y-d*u,t[6]=x+p*u,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,p=c*f,x=u*h,y=u*f;t[0]=d+y*o,t[4]=x*o-p,t[8]=a*u,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=p*o-x,t[6]=y+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,p=c*f,x=u*h,y=u*f;t[0]=d-y*o,t[4]=-a*f,t[8]=x+p*o,t[1]=p+x*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*u,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,p=a*f,x=o*h,y=o*f;t[0]=c*h,t[4]=x*u-p,t[8]=d*u+y,t[1]=c*f,t[5]=y*u+d,t[9]=p*u-x,t[2]=-u,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,p=a*u,x=o*c,y=o*u;t[0]=c*h,t[4]=y-d*f,t[8]=x*f+p,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-u*h,t[6]=p*f+x,t[10]=d-y*f}else if(e.order==="XZY"){let d=a*c,p=a*u,x=o*c,y=o*u;t[0]=c*h,t[4]=-f,t[8]=u*h,t[1]=d*f+y,t[5]=a*h,t[9]=p*f-x,t[2]=x*f-p,t[6]=o*h,t[10]=y*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(q_,e,Y_)}lookAt(e,t,n){let s=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),cs.crossVectors(n,En),cs.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),cs.crossVectors(n,En)),cs.normalize(),wl.crossVectors(En,cs),s[0]=cs.x,s[4]=wl.x,s[8]=En.x,s[1]=cs.y,s[5]=wl.y,s[9]=En.y,s[2]=cs.z,s[6]=wl.z,s[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],h=n[1],f=n[5],d=n[9],p=n[13],x=n[2],y=n[6],_=n[10],g=n[14],S=n[3],R=n[7],E=n[11],C=n[15],T=s[0],v=s[4],w=s[8],U=s[12],I=s[1],B=s[5],V=s[9],J=s[13],L=s[2],K=s[6],ie=s[10],D=s[14],z=s[3],F=s[7],k=s[11],Z=s[15];return r[0]=a*T+o*I+c*L+u*z,r[4]=a*v+o*B+c*K+u*F,r[8]=a*w+o*V+c*ie+u*k,r[12]=a*U+o*J+c*D+u*Z,r[1]=h*T+f*I+d*L+p*z,r[5]=h*v+f*B+d*K+p*F,r[9]=h*w+f*V+d*ie+p*k,r[13]=h*U+f*J+d*D+p*Z,r[2]=x*T+y*I+_*L+g*z,r[6]=x*v+y*B+_*K+g*F,r[10]=x*w+y*V+_*ie+g*k,r[14]=x*U+y*J+_*D+g*Z,r[3]=S*T+R*I+E*L+C*z,r[7]=S*v+R*B+E*K+C*F,r[11]=S*w+R*V+E*ie+C*k,r[15]=S*U+R*J+E*D+C*Z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],u=e[13],h=e[2],f=e[6],d=e[10],p=e[14],x=e[3],y=e[7],_=e[11],g=e[15],S=c*p-u*d,R=o*p-u*f,E=o*d-c*f,C=a*p-u*h,T=a*d-c*h,v=a*f-o*h;return t*(y*S-_*R+g*E)-n*(x*S-_*C+g*T)+s*(x*R-y*C+g*v)-r*(x*E-y*T+_*v)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],u=e[6],h=e[10];return t*(a*h-o*u)-n*(r*h-o*c)+s*(r*u-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],f=e[9],d=e[10],p=e[11],x=e[12],y=e[13],_=e[14],g=e[15],S=t*o-n*a,R=t*c-s*a,E=t*u-r*a,C=n*c-s*o,T=n*u-r*o,v=s*u-r*c,w=h*y-f*x,U=h*_-d*x,I=h*g-p*x,B=f*_-d*y,V=f*g-p*y,J=d*g-p*_,L=S*J-R*V+E*B+C*I-T*U+v*w;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let K=1/L;return e[0]=(o*J-c*V+u*B)*K,e[1]=(s*V-n*J-r*B)*K,e[2]=(y*v-_*T+g*C)*K,e[3]=(d*T-f*v-p*C)*K,e[4]=(c*I-a*J-u*U)*K,e[5]=(t*J-s*I+r*U)*K,e[6]=(_*E-x*v-g*R)*K,e[7]=(h*v-d*E+p*R)*K,e[8]=(a*V-o*I+u*w)*K,e[9]=(n*I-t*V-r*w)*K,e[10]=(x*T-y*E+g*S)*K,e[11]=(f*E-h*T-p*S)*K,e[12]=(o*U-a*B-c*w)*K,e[13]=(t*B-n*U+s*w)*K,e[14]=(y*R-x*C-_*S)*K,e[15]=(h*C-f*R+d*S)*K,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,u=r*a,h=r*o;return this.set(u*a+n,u*o-s*c,u*c+s*o,0,u*o+s*c,h*o+n,h*c-s*a,0,u*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,u=r+r,h=a+a,f=o+o,d=r*u,p=r*h,x=r*f,y=a*h,_=a*f,g=o*f,S=c*u,R=c*h,E=c*f,C=n.x,T=n.y,v=n.z;return s[0]=(1-(y+g))*C,s[1]=(p+E)*C,s[2]=(x-R)*C,s[3]=0,s[4]=(p-E)*T,s[5]=(1-(d+g))*T,s[6]=(_+S)*T,s[7]=0,s[8]=(x+R)*v,s[9]=(_-S)*v,s[10]=(1-(d+y))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ar.set(s[0],s[1],s[2]).length(),o=Ar.set(s[4],s[5],s[6]).length(),c=Ar.set(s[8],s[9],s[10]).length();r<0&&(a=-a),$n.copy(this);let u=1/a,h=1/o,f=1/c;return $n.elements[0]*=u,$n.elements[1]*=u,$n.elements[2]*=u,$n.elements[4]*=h,$n.elements[5]*=h,$n.elements[6]*=h,$n.elements[8]*=f,$n.elements[9]*=f,$n.elements[10]*=f,t.setFromRotationMatrix($n),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=Vn,c=!1){let u=this.elements,h=2*r/(t-e),f=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s),x,y;if(c)x=r/(a-r),y=a*r/(a-r);else if(o===Vn)x=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Yr)x=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=f,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=x,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Vn,c=!1){let u=this.elements,h=2/(t-e),f=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s),x,y;if(c)x=1/(a-r),y=a/(a-r);else if(o===Vn)x=-2/(a-r),y=-(a+r)/(a-r);else if(o===Yr)x=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=f,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=x,u[14]=y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};l(Xa,"Matrix4"),Xa.prototype.isMatrix4=!0;var ft=Xa,Ar=new W,$n=new ft,q_=new W(0,0,0),Y_=new W(1,1,1),cs=new W,wl=new W,En=new W,Fm=new ft,Om=new pn,Pc=class Pc{constructor(e=0,t=0,n=0,s=Pc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],u=s[5],h=s[9],f=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fm,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Om.setFromEuler(this),this.setFromQuaternion(Om,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};l(Pc,"Euler");var Cn=Pc;Cn.DEFAULT_ORDER="XYZ";var Ud=class Ud{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};l(Ud,"Layers");var Qa=Ud,$_=0,Bm=new W,Cr=new pn,Di=new ft,El=new W,Oa=new W,Z_=new W,J_=new pn,zm=new W(1,0,0),km=new W(0,1,0),Gm=new W(0,0,1),Vm={type:"added"},K_={type:"removed"},Rr={type:"childadded",child:null},Ah={type:"childremoved",child:null},Wr=class Wr extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wr.DEFAULT_UP.clone();let e=new W,t=new Cn,n=new pn,s=new W(1,1,1);function r(){n.setFromEuler(t,!1)}l(r,"onRotationChange");function a(){t.setFromQuaternion(n,void 0,!1)}l(a,"onQuaternionChange"),t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new We}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Wr.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.premultiply(Cr),this}rotateX(e){return this.rotateOnAxis(zm,e)}rotateY(e){return this.rotateOnAxis(km,e)}rotateZ(e){return this.rotateOnAxis(Gm,e)}translateOnAxis(e,t){return Bm.copy(e).applyQuaternion(this.quaternion),this.position.add(Bm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zm,e)}translateY(e){return this.translateOnAxis(km,e)}translateZ(e){return this.translateOnAxis(Gm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?El.copy(e):El.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(Oa,El,this.up):Di.lookAt(El,Oa,this.up),this.quaternion.setFromRotationMatrix(Di),s&&(Di.extractRotation(s.matrixWorld),Cr.setFromRotationMatrix(Di),this.quaternion.premultiply(Cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(He("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vm),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(K_),Ah.child=e,this.dispatchEvent(Ah),Ah.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vm),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,e,Z_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,J_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(l(r,"serialize"),this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){let f=c[u];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let c=[];for(let u in o){let h=o[u];delete h.metadata,c.push(h)}return c}l(a,"extractFromCache")}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};l(Wr,"Object3D");var Zt=Wr;Zt.DEFAULT_UP=new W(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fd=class Fd extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}};l(Fd,"Group");var fn=Fd,Q_={type:"move"},Od=class Od{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(let y of e.hand.values()){let _=t.getJointPose(y,n),g=this._getHandJoint(u,y);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}let h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,x=.005;u.inputState.pinching&&d>p+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Q_)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new fn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};l(Od,"WebXRController");var Jr=Od,V0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},us={h:0,s:0,l:0},Tl={h:0,s:0,l:0};function Ch(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}l(Ch,"hue2rgb");var Bd=class Bd{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=st.workingColorSpace){if(e=V_(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ch(a,r,e+1/3),this.g=Ch(a,r,e),this.b=Ch(a,r,e-1/3)}return st.colorSpaceToWorking(this,s),this}setStyle(e,t=Nt){function n(r){r!==void 0&&parseFloat(r)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}l(n,"handleAlpha");let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){let n=V0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=Xr(e.r),this.g=Xr(e.g),this.b=Xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return st.workingToColorSpace(nn.copy(this),e),Math.round(rt(nn.r*255,0,255))*65536+Math.round(rt(nn.g*255,0,255))*256+Math.round(rt(nn.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(nn.copy(this),t);let n=nn.r,s=nn.g,r=nn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,u,h=(o+a)/2;if(o===a)c=0,u=0;else{let f=a-o;switch(u=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Nt){st.workingToColorSpace(nn.copy(this),e);let t=nn.r,n=nn.g,s=nn.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(us),this.setHSL(us.h+e,us.s+t,us.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(us),e.getHSL(Tl);let n=Mh(us.h,Tl.h,t),s=Mh(us.s,Tl.s,t),r=Mh(us.l,Tl.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};l(Bd,"Color");var Oe=Bd,nn=new Oe;Oe.NAMES=V0;var Ic=class Ic{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Oe(e),this.near=t,this.far=n}clone(){return new Ic(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}};l(Ic,"Fog");var ja=Ic,zd=class zd extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}};l(zd,"Scene");var eo=zd,Zn=new W,Ni=new W,Rh=new W,Ui=new W,Pr=new W,Ir=new W,Hm=new W,Ph=new W,Ih=new W,Lh=new W,Dh=new St,Nh=new St,Uh=new St,ps=class ps{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Zn.subVectors(e,t),s.cross(Zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Zn.subVectors(s,t),Ni.subVectors(n,t),Rh.subVectors(e,t);let a=Zn.dot(Zn),o=Zn.dot(Ni),c=Zn.dot(Rh),u=Ni.dot(Ni),h=Ni.dot(Rh),f=a*u-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,p=(u*c-o*h)*d,x=(a*h-o*c)*d;return r.set(1-p-x,x,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Ui)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ui.x),c.addScaledVector(a,Ui.y),c.addScaledVector(o,Ui.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Dh.setScalar(0),Nh.setScalar(0),Uh.setScalar(0),Dh.fromBufferAttribute(e,t),Nh.fromBufferAttribute(e,n),Uh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Dh,r.x),a.addScaledVector(Nh,r.y),a.addScaledVector(Uh,r.z),a}static isFrontFacing(e,t,n,s){return Zn.subVectors(n,t),Ni.subVectors(e,t),Zn.cross(Ni).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),Zn.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ps.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ps.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return ps.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return ps.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ps.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Pr.subVectors(s,n),Ir.subVectors(r,n),Ph.subVectors(e,n);let c=Pr.dot(Ph),u=Ir.dot(Ph);if(c<=0&&u<=0)return t.copy(n);Ih.subVectors(e,s);let h=Pr.dot(Ih),f=Ir.dot(Ih);if(h>=0&&f<=h)return t.copy(s);let d=c*f-h*u;if(d<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(Pr,a);Lh.subVectors(e,r);let p=Pr.dot(Lh),x=Ir.dot(Lh);if(x>=0&&p<=x)return t.copy(r);let y=p*u-c*x;if(y<=0&&u>=0&&x<=0)return o=u/(u-x),t.copy(n).addScaledVector(Ir,o);let _=h*x-p*f;if(_<=0&&f-h>=0&&p-x>=0)return Hm.subVectors(r,s),o=(f-h)/(f-h+(p-x)),t.copy(s).addScaledVector(Hm,o);let g=1/(_+y+d);return a=y*g,o=d*g,t.copy(n).addScaledVector(Pr,a).addScaledVector(Ir,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};l(ps,"Triangle");var Bi=ps,kd=class kd{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Jn):Jn.fromBufferAttribute(r,a),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Al.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Al.copy(n.boundingBox)),Al.applyMatrix4(e.matrixWorld),this.union(Al)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ba),Cl.subVectors(this.max,Ba),Lr.subVectors(e.a,Ba),Dr.subVectors(e.b,Ba),Nr.subVectors(e.c,Ba),hs.subVectors(Dr,Lr),ds.subVectors(Nr,Dr),Ws.subVectors(Lr,Nr);let t=[0,-hs.z,hs.y,0,-ds.z,ds.y,0,-Ws.z,Ws.y,hs.z,0,-hs.x,ds.z,0,-ds.x,Ws.z,0,-Ws.x,-hs.y,hs.x,0,-ds.y,ds.x,0,-Ws.y,Ws.x,0];return!Fh(t,Lr,Dr,Nr,Cl)||(t=[1,0,0,0,1,0,0,0,1],!Fh(t,Lr,Dr,Nr,Cl))?!1:(Rl.crossVectors(hs,ds),t=[Rl.x,Rl.y,Rl.z],Fh(t,Lr,Dr,Nr,Cl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}};l(kd,"Box3");var gs=kd,Fi=[new W,new W,new W,new W,new W,new W,new W,new W],Jn=new W,Al=new gs,Lr=new W,Dr=new W,Nr=new W,hs=new W,ds=new W,Ws=new W,Ba=new W,Cl=new W,Rl=new W,Xs=new W;function Fh(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Xs.fromArray(i,r);let o=s.x*Math.abs(Xs.x)+s.y*Math.abs(Xs.y)+s.z*Math.abs(Xs.z),c=e.dot(Xs),u=t.dot(Xs),h=n.dot(Xs);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}l(Fh,"satForAxes");var zi=j_();function j_(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){let u=c-127;u<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):u<-14?(n[c]=1024>>-u-14,n[c|256]=1024>>-u-14|32768,s[c]=-u-1,s[c|256]=-u-1):u<=15?(n[c]=u+15<<10,n[c|256]=u+15<<10|32768,s[c]=13,s[c|256]=13):u<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let u=c<<13,h=0;for(;(u&8388608)===0;)u<<=1,h-=8388608;u&=-8388609,h+=947912704,r[c]=u|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}l(j_,"_generateTables");function ev(i){Math.abs(i)>65504&&Ge("DataUtils.toHalfFloat(): Value out of range."),i=rt(i,-65504,65504),zi.floatView[0]=i;let e=zi.uint32View[0],t=e>>23&511;return zi.baseTable[t]+((e&8388607)>>zi.shiftTable[t])}l(ev,"toHalfFloat");function tv(i){let e=i>>10;return zi.uint32View[0]=zi.mantissaTable[zi.offsetTable[e]+(i&1023)]+zi.exponentTable[e],zi.floatView[0]}l(tv,"fromHalfFloat");var Gd=class Gd{static toHalfFloat(e){return ev(e)}static fromHalfFloat(e){return tv(e)}};l(Gd,"DataUtils");var di=Gd,Dt=new W,Pl=new Ve,nv=0,Vd=class Vd extends hi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=bd,this.updateRanges=[],this.gpuType=jn,this.version=0,this._normalizationScale=e!==void 0?Ru(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Pl.fromBufferAttribute(this,t),Pl.applyMatrix3(e),this.setXY(t,Pl.x,Pl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):k0(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):G0(e,this.array)}};l(Vd,"BufferAttribute");var Mt=Vd;var Hd=class Hd extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};l(Hd,"Uint16BufferAttribute");var to=Hd;var Wd=class Wd extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};l(Wd,"Uint32BufferAttribute");var no=Wd;var Xd=class Xd extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}};l(Xd,"Float32BufferAttribute");var Rt=Xd,iv=new gs,za=new W,Oh=new W,qd=class qd{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):iv.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;za.subVectors(e,this.center);let t=za.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(za,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(za.copy(e.center).add(Oh)),this.expandByPoint(za.copy(e.center).sub(Oh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};l(qd,"Sphere");var Kr=qd,sv=0,kn=new ft,Bh=new Zt,Ur=new W,Tn=new gs,ka=new gs,Wt=new W,Lc=class Lc extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sv++}),this.uuid=js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(k_(e)?no:to)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,n){return kn.makeTranslation(e,t,n),this.applyMatrix4(kn),this}scale(e,t,n){return kn.makeScale(e,t,n),this.applyMatrix4(kn),this}lookAt(e){return Bh.lookAt(e),Bh.updateMatrix(),this.applyMatrix4(Bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Rt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){let n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ka.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(Tn.min,ka.min),Tn.expandByPoint(Wt),Wt.addVectors(Tn.max,ka.max),Tn.expandByPoint(Wt)):(Tn.expandByPoint(ka.min),Tn.expandByPoint(ka.max))}Tn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Wt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Wt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Wt.fromBufferAttribute(o,u),c&&(Ur.fromBufferAttribute(e,u),Wt.add(Ur)),s=Math.max(s,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Mt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],u=new Uint8Array(n.count);for(let U=0;U<n.count;U++)o[U]=new W,c[U]=new W;let h=new W,f=new W,d=new W,p=new Ve,x=new Ve,y=new Ve,_=new W,g=new W;function S(U,I,B){u[U]=u[I]=u[B]=1,h.fromBufferAttribute(n,U),f.fromBufferAttribute(n,I),d.fromBufferAttribute(n,B),p.fromBufferAttribute(r,U),x.fromBufferAttribute(r,I),y.fromBufferAttribute(r,B),f.sub(h),d.sub(h),x.sub(p),y.sub(p);let V=1/(x.x*y.y-y.x*x.y);isFinite(V)&&(_.copy(f).multiplyScalar(y.y).addScaledVector(d,-x.y).multiplyScalar(V),g.copy(d).multiplyScalar(x.x).addScaledVector(f,-y.x).multiplyScalar(V),o[U].add(_),o[I].add(_),o[B].add(_),c[U].add(g),c[I].add(g),c[B].add(g))}l(S,"handleTriangle");let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let U=0,I=R.length;U<I;++U){let B=R[U],V=B.start,J=B.count;for(let L=V,K=V+J;L<K;L+=3)S(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let E=new W,C=new W,T=new W,v=new W;function w(U){T.fromBufferAttribute(s,U),v.copy(T);let I=o[U];E.copy(I),E.sub(T.multiplyScalar(T.dot(I))).normalize(),C.crossVectors(v,I);let V=C.dot(c[U])<0?-1:1;a.setXYZW(U,E.x,E.y,E.z,V)}l(w,"handleVertex");for(let U=0,I=n.count;U<I;++U)u[U]&&w(U);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new W,r=new W,a=new W,o=new W,c=new W,u=new W,h=new W,f=new W;if(e)for(let d=0,p=e.count;d<p;d+=3){let x=e.getX(d+0),y=e.getX(d+1),_=e.getX(d+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,_),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,_),o.add(h),c.add(h),u.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(_,u.x,u.y,u.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,c){let u=o.array,h=o.itemSize,f=o.normalized,d=new u.constructor(c.length*h),p=0,x=0;for(let y=0,_=c.length;y<_;y++){o.isInterleavedBufferAttribute?p=c[y]*o.data.stride+o.offset:p=c[y]*h;for(let g=0;g<h;g++)d[x++]=u[p++]}return new Mt(d,h,f)}if(l(e,"convertBufferAttribute"),this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Lc,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],u=e(c,n);t.setAttribute(o,u)}let r=this.morphAttributes;for(let o in r){let c=[],u=r[o];for(let h=0,f=u.length;h<f;h++){let d=u[h],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let u=n[c];e.data.attributes[c]=u.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let u=this.morphAttributes[c],h=[];for(let f=0,d=u.length;f<d;f++){let p=u[f];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let u in s){let h=s[u];this.setAttribute(u,h.clone(t))}let r=e.morphAttributes;for(let u in r){let h=[],f=r[u];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let u=0,h=a.length;u<h;u++){let f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};l(Lc,"BufferGeometry");var Ft=Lc,Yd=class Yd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=bd,this.updateRanges=[],this.version=0,this.uuid=js()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Wm(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Wm(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};l(Yd,"InterleavedBuffer");var io=Yd;function Wm(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=js()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}l(Wm,"getArrayKey");var hn=new W,Dc=class Dc{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Ru(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ja("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Dc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ja("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):k0(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):G0(e,this.data.array)}};l(Dc,"InterleavedBufferAttribute");var Qr=Dc,zh=new W,rv=new W,av=new We,$d=class $d{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=zh.subVectors(n,t).cross(rv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(zh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||av.getNormalMatrix(e),s=this.coplanarPoint(zh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}};l($d,"Plane");var yn=$d,ov=0,Zd=class Zd extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ov++}),this.uuid=js(),this.name="",this.type="Material",this.blending=ia,this.side=Es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=td,this.blendDst=nd,this.blendEquation=Js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=R0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$l,this.stencilZFail=$l,this.stencilZPass=$l,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(l(s,"extractFromCache"),t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Oe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new yn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ve().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ve().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};l(Zd,"Material");var Vi=Zd,Jd=class Jd extends Vi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};l(Jd,"SpriteMaterial");var xs=Jd,Fr,Ga=new W,Or=new W,Br=new W,zr=new Ve,Va=new Ve,H0=new ft,Il=new W,Ha=new W,Ll=new W,Xm=new Ve,kh=new Ve,qm=new Ve,Kd=class Kd extends Zt{constructor(e=new xs){if(super(),this.isSprite=!0,this.type="Sprite",Fr===void 0){Fr=new Ft;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new io(t,5);Fr.setIndex([0,1,2,0,2,3]),Fr.setAttribute("position",new Qr(n,3,0,!1)),Fr.setAttribute("uv",new Qr(n,2,3,!1))}this.geometry=Fr,this.material=e,this.center=new Ve(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&He('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Or.setFromMatrixScale(this.matrixWorld),H0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Br.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Or.multiplyScalar(-Br.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Dl(Il.set(-.5,-.5,0),Br,a,Or,s,r),Dl(Ha.set(.5,-.5,0),Br,a,Or,s,r),Dl(Ll.set(.5,.5,0),Br,a,Or,s,r),Xm.set(0,0),kh.set(1,0),qm.set(1,1);let o=e.ray.intersectTriangle(Il,Ha,Ll,!1,Ga);if(o===null&&(Dl(Ha.set(-.5,.5,0),Br,a,Or,s,r),kh.set(0,1),o=e.ray.intersectTriangle(Il,Ll,Ha,!1,Ga),o===null))return;let c=e.ray.origin.distanceTo(Ga);c<e.near||c>e.far||t.push({distance:c,point:Ga.clone(),uv:Bi.getInterpolation(Ga,Il,Ha,Ll,Xm,kh,qm,new Ve),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};l(Kd,"Sprite");var jr=Kd;function Dl(i,e,t,n,s,r){zr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Va.x=r*zr.x-s*zr.y,Va.y=s*zr.x+r*zr.y):Va.copy(zr),i.copy(e),i.x+=Va.x,i.y+=Va.y,i.applyMatrix4(H0)}l(Dl,"transformVertex");var Oi=new W,Gh=new W,Nl=new W,Ul=new W,Qd=class Qd{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Gh.copy(e).add(t).multiplyScalar(.5),Nl.copy(t).sub(e).normalize(),Ul.copy(this.origin).sub(Gh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Nl),o=Ul.dot(this.direction),c=-Ul.dot(Nl),u=Ul.lengthSq(),h=Math.abs(1-a*a),f,d,p,x;if(h>0)if(f=a*c-o,d=a*o-c,x=r*h,f>=0)if(d>=-x)if(d<=x){let y=1/h;f*=y,d*=y,p=f*(f+a*d+2*o)+d*(a*f+d+2*c)+u}else d=r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+u;else d=-r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+u;else d<=-x?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-c),r),p=-f*f+d*(d+2*c)+u):d<=x?(f=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+u):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-c),r),p=-f*f+d*(d+2*c)+u);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Gh).addScaledVector(Nl,d),p}intersectSphere(e,t){if(e.radius<0)return null;Oi.subVectors(e.center,this.origin);let n=Oi.dot(this.direction),s=Oi.dot(Oi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(n=(e.min.x-d.x)*u,s=(e.max.x-d.x)*u):(n=(e.max.x-d.x)*u,s=(e.min.x-d.x)*u),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,u=o.y,h=o.z,f=e.x-a.x,d=e.y-a.y,p=e.z-a.z,x=t.x-a.x,y=t.y-a.y,_=t.z-a.z,g=n.x-a.x,S=n.y-a.y,R=n.z-a.z,E=Math.abs(c),C=Math.abs(u),T=Math.abs(h),v,w,U,I,B,V,J,L,K,ie,D,z;if(E>=C&&E>=T?(U=c,V=f,K=x,z=g,c>=0?(v=u,w=h,I=d,B=p,J=y,L=_,ie=S,D=R):(v=h,w=u,I=p,B=d,J=_,L=y,ie=R,D=S)):C>=T?(U=u,V=d,K=y,z=S,u>=0?(v=h,w=c,I=p,B=f,J=_,L=x,ie=R,D=g):(v=c,w=h,I=f,B=p,J=x,L=_,ie=g,D=R)):(U=h,V=p,K=_,z=R,h>=0?(v=c,w=u,I=f,B=d,J=x,L=y,ie=g,D=S):(v=u,w=c,I=d,B=f,J=y,L=x,ie=S,D=g)),U===0)return null;let F=v/U,k=w/U,Z=1/U,se=I-F*V,de=B-k*V,q=J-F*K,he=L-k*K,te=ie-F*z,ae=D-k*z,ce=te*he-ae*q,Ae=se*ae-de*te,qe=q*de-he*se;if(s){if(ce<0||Ae<0||qe<0)return null}else if((ce<0||Ae<0||qe<0)&&(ce>0||Ae>0||qe>0))return null;let Pe=ce+Ae+qe;if(Pe===0)return null;let Ke=Z*(ce*V+Ae*K+qe*z);return(Pe>0?Ke<0:Ke>0)?null:this.at(Ke/Pe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};l(Qd,"Ray");var lc=Qd,jd=class jd extends Vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=id,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};l(jd,"MeshBasicMaterial");var cc=jd,Ym=new ft,qs=new lc,Fl=new Kr,$m=new W,Ol=new W,Bl=new W,zl=new W,Vh=new W,kl=new W,Zm=new W,Gl=new W,ef=class ef extends Zt{constructor(e=new Ft,t=new cc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){kl.set(0,0,0);for(let c=0,u=r.length;c<u;c++){let h=o[c],f=r[c];h!==0&&(Vh.fromBufferAttribute(f,e),a?kl.addScaledVector(Vh,h):kl.addScaledVector(Vh.sub(t),h))}t.add(kl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fl.copy(n.boundingSphere),Fl.applyMatrix4(r),qs.copy(e.ray).recast(e.near),!(Fl.containsPoint(qs.origin)===!1&&(qs.intersectSphere(Fl,$m)===null||qs.origin.distanceToSquared($m)>(e.far-e.near)**2))&&(Ym.copy(r).invert(),qs.copy(e.ray).applyMatrix4(Ym),!(n.boundingBox!==null&&qs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,y=d.length;x<y;x++){let _=d[x],g=a[_.materialIndex],S=Math.max(_.start,p.start),R=Math.min(o.count,Math.min(_.start+_.count,p.start+p.count));for(let E=S,C=R;E<C;E+=3){let T=o.getX(E),v=o.getX(E+1),w=o.getX(E+2);s=Vl(this,g,e,n,u,h,f,T,v,w),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{let x=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let _=x,g=y;_<g;_+=3){let S=o.getX(_),R=o.getX(_+1),E=o.getX(_+2);s=Vl(this,a,e,n,u,h,f,S,R,E),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,y=d.length;x<y;x++){let _=d[x],g=a[_.materialIndex],S=Math.max(_.start,p.start),R=Math.min(c.count,Math.min(_.start+_.count,p.start+p.count));for(let E=S,C=R;E<C;E+=3){let T=E,v=E+1,w=E+2;s=Vl(this,g,e,n,u,h,f,T,v,w),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{let x=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let _=x,g=y;_<g;_+=3){let S=_,R=_+1,E=_+2;s=Vl(this,a,e,n,u,h,f,S,R,E),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}};l(ef,"Mesh");var wt=ef;function lv(i,e,t,n,s,r,a,o){let c;if(e.side===xn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Es,o),c===null)return null;Gl.copy(o),Gl.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(Gl);return u<t.near||u>t.far?null:{distance:u,point:Gl.clone(),object:i}}l(lv,"checkIntersection$1");function Vl(i,e,t,n,s,r,a,o,c,u){i.getVertexPosition(o,Ol),i.getVertexPosition(c,Bl),i.getVertexPosition(u,zl);let h=lv(i,e,t,n,Ol,Bl,zl,Zm);if(h){let f=new W;Bi.getBarycoord(Zm,Ol,Bl,zl,f),s&&(h.uv=Bi.getInterpolatedAttribute(s,o,c,u,f,new Ve)),r&&(h.uv1=Bi.getInterpolatedAttribute(r,o,c,u,f,new Ve)),a&&(h.normal=Bi.getInterpolatedAttribute(a,o,c,u,f,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:u,normal:new W,materialIndex:0};Bi.getNormal(Ol,Bl,zl,d.normal),h.face=d,h.barycoord=f}return h}l(Vl,"checkGeometryIntersection");var tf=class tf extends mn{constructor(e=null,t=1,n=1,s,r,a,o,c,u=Ut,h=Ut,f,d){super(null,a,o,c,u,h,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};l(tf,"DataTexture");var ea=tf;var nf=class nf extends Mt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};l(nf,"InstancedBufferAttribute");var Hi=nf;var Ys=new Kr,cv=new Ve(.5,.5),Hl=new W,sf=class sf{constructor(e=new yn,t=new yn,n=new yn,s=new yn,r=new yn,a=new yn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],u=r[3],h=r[4],f=r[5],d=r[6],p=r[7],x=r[8],y=r[9],_=r[10],g=r[11],S=r[12],R=r[13],E=r[14],C=r[15];if(s[0].setComponents(u-a,p-h,g-x,C-S).normalize(),s[1].setComponents(u+a,p+h,g+x,C+S).normalize(),s[2].setComponents(u+o,p+f,g+y,C+R).normalize(),s[3].setComponents(u-o,p-f,g-y,C-R).normalize(),n)s[4].setComponents(c,d,_,E).normalize(),s[5].setComponents(u-c,p-d,g-_,C-E).normalize();else if(s[4].setComponents(u-c,p-d,g-_,C-E).normalize(),t===Vn)s[5].setComponents(u+c,p+d,g+_,C+E).normalize();else if(t===Yr)s[5].setComponents(c,d,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ys)}intersectsSprite(e){Ys.center.set(0,0,0);let t=cv.distanceTo(e.center);return Ys.radius=.7071067811865476+t,Ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ys)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Hl.x=s.normal.x>0?e.max.x:e.min.x,Hl.y=s.normal.y>0?e.max.y:e.min.y,Hl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Hl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};l(sf,"Frustum");var _s=sf,Jm=new ft,Nc=class Nc{constructor(){this.coordinateSystem=Vn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Jm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new _s),n[s].setFromProjectionMatrix(Jm,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new _s),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new Nc().copy(this)}};l(Nc,"FrustumArray");var uc=Nc;var rf=class rf extends mn{constructor(e=[],t=Ks,n,s,r,a,o,c,u,h){super(e,t,n,s,r,a,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};l(rf,"CubeTexture");var so=rf,af=class af extends mn{constructor(e,t,n,s,r,a,o,c,u){super(e,t,n,s,r,a,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};l(af,"CanvasTexture");var vs=af;var of=class of extends mn{constructor(e,t,n=Qn,s,r,a,o=Ut,c=Ut,u,h=Gi,f=1){if(h!==Gi&&h!==qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,s,r,a,o,c,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}};l(of,"DepthTexture");var Wi=of,lf=class lf extends Wi{constructor(e,t=Qn,n=Ks,s,r,a=Ut,o=Ut,c,u=Gi){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,u),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}};l(lf,"CubeDepthTexture");var ro=lf,cf=class cf extends mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};l(cf,"ExternalTexture");var ao=cf,Uc=class Uc extends Ft{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],u=[],h=[],f=[],d=0,p=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Rt(u,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(f,2));function x(y,_,g,S,R,E,C,T,v,w,U){let I=E/v,B=C/w,V=E/2,J=C/2,L=T/2,K=v+1,ie=w+1,D=0,z=0,F=new W;for(let k=0;k<ie;k++){let Z=k*B-J;for(let se=0;se<K;se++){let de=se*I-V;F[y]=de*S,F[_]=Z*R,F[g]=L,u.push(F.x,F.y,F.z),F[y]=0,F[_]=0,F[g]=T>0?1:-1,h.push(F.x,F.y,F.z),f.push(se/v),f.push(1-k/w),D+=1}}for(let k=0;k<w;k++)for(let Z=0;Z<v;Z++){let se=d+Z+K*k,de=d+Z+K*(k+1),q=d+(Z+1)+K*(k+1),he=d+(Z+1)+K*k;c.push(se,de,he),c.push(de,q,he),z+=6}o.addGroup(p,z,U),p+=z,d+=D}l(x,"buildPlane")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};l(Uc,"BoxGeometry");var fi=Uc;var Fc=class Fc extends Ft{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let u=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],p=[],x=0,y=[],_=n/2,g=0;S(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new Rt(f,3)),this.setAttribute("normal",new Rt(d,3)),this.setAttribute("uv",new Rt(p,2));function S(){let E=new W,C=new W,T=0,v=(t-e)/n;for(let w=0;w<=r;w++){let U=[],I=w/r,B=I*(t-e)+e;for(let V=0;V<=s;V++){let J=V/s,L=J*c+o,K=Math.sin(L),ie=Math.cos(L);C.x=B*K,C.y=-I*n+_,C.z=B*ie,f.push(C.x,C.y,C.z),E.set(K,v,ie).normalize(),d.push(E.x,E.y,E.z),p.push(J,1-I),U.push(x++)}y.push(U)}for(let w=0;w<s;w++)for(let U=0;U<r;U++){let I=y[U][w],B=y[U+1][w],V=y[U+1][w+1],J=y[U][w+1];(e>0||U!==0)&&(h.push(I,B,J),T+=3),(t>0||U!==r-1)&&(h.push(B,V,J),T+=3)}u.addGroup(g,T,0),g+=T}l(S,"generateTorso");function R(E){let C=x,T=new Ve,v=new W,w=0,U=E===!0?e:t,I=E===!0?1:-1;for(let V=1;V<=s;V++)f.push(0,_*I,0),d.push(0,I,0),p.push(.5,.5),x++;let B=x;for(let V=0;V<=s;V++){let L=V/s*c+o,K=Math.cos(L),ie=Math.sin(L);v.x=U*ie,v.y=_*I,v.z=U*K,f.push(v.x,v.y,v.z),d.push(0,I,0),T.x=K*.5+.5,T.y=ie*.5*I+.5,p.push(T.x,T.y),x++}for(let V=0;V<s;V++){let J=C+V,L=B+V;E===!0?h.push(L,L+1,J):h.push(L+1,L,J),w+=3}u.addGroup(g,w,E===!0?1:2),g+=w}l(R,"generateCap")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};l(Fc,"CylinderGeometry");var pi=Fc,Oc=class Oc extends pi{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Oc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};l(Oc,"ConeGeometry");var mi=Oc;var Bc=class Bc extends Ft{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),u=o+1,h=c+1,f=e/o,d=t/c,p=[],x=[],y=[],_=[];for(let g=0;g<h;g++){let S=g*d-a;for(let R=0;R<u;R++){let E=R*f-r;x.push(E,-S,0),y.push(0,0,1),_.push(R/o),_.push(1-g/c)}}for(let g=0;g<c;g++)for(let S=0;S<o;S++){let R=S+u*g,E=S+u*(g+1),C=S+1+u*(g+1),T=S+1+u*g;p.push(R,E,T),p.push(E,C,T)}this.setIndex(p),this.setAttribute("position",new Rt(x,3)),this.setAttribute("normal",new Rt(y,3)),this.setAttribute("uv",new Rt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bc(e.width,e.height,e.widthSegments,e.heightSegments)}};l(Bc,"PlaneGeometry");var gi=Bc;var zc=class zc extends Ft{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),u=0,h=[],f=new W,d=new W,p=[],x=[],y=[],_=[];for(let g=0;g<=n;g++){let S=[],R=g/n,E=a+R*o,C=e*Math.cos(E),T=Math.sqrt(e*e-C*C),v=0;g===0&&a===0?v=.5/t:g===n&&c===Math.PI&&(v=-.5/t);for(let w=0;w<=t;w++){let U=w/t,I=s+U*r;f.x=-T*Math.cos(I),f.y=C,f.z=T*Math.sin(I),x.push(f.x,f.y,f.z),d.copy(f).normalize(),y.push(d.x,d.y,d.z),_.push(U+v,1-R),S.push(u++)}h.push(S)}for(let g=0;g<n;g++)for(let S=0;S<t;S++){let R=h[g][S+1],E=h[g][S],C=h[g+1][S],T=h[g+1][S+1];(g!==0||a>0)&&p.push(R,E,T),(g!==n-1||c<Math.PI)&&p.push(E,C,T)}this.setIndex(p),this.setAttribute("position",new Rt(x,3)),this.setAttribute("normal",new Rt(y,3)),this.setAttribute("uv",new Rt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};l(zc,"SphereGeometry");var ys=zc;var kc=class kc extends Ft{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],u=[],h=[],f=[],d=new W,p=new W,x=new W;for(let y=0;y<=n;y++){let _=a+y/n*o;for(let g=0;g<=s;g++){let S=g/s*r;p.x=(e+t*Math.cos(_))*Math.cos(S),p.y=(e+t*Math.cos(_))*Math.sin(S),p.z=t*Math.sin(_),u.push(p.x,p.y,p.z),d.x=e*Math.cos(S),d.y=e*Math.sin(S),x.subVectors(p,d).normalize(),h.push(x.x,x.y,x.z),f.push(g/s),f.push(y/n)}}for(let y=1;y<=n;y++)for(let _=1;_<=s;_++){let g=(s+1)*y+_-1,S=(s+1)*(y-1)+_-1,R=(s+1)*(y-1)+_,E=(s+1)*y+_;c.push(g,S,E),c.push(S,R,E)}this.setIndex(c),this.setAttribute("position",new Rt(u,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};l(kc,"TorusGeometry");var bs=kc;function er(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Km(s))s.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Km(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}l(er,"cloneUniforms");function sn(i){let e={};for(let t=0;t<i.length;t++){let n=er(i[t]);for(let s in n)e[s]=n[s]}return e}l(sn,"mergeUniforms");function Km(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}l(Km,"isThreeObject");function uv(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}l(uv,"cloneUniformsGroups");function Sd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}l(Sd,"getUnlitUniformColorSpace");var tr={clone:er,merge:sn},hv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,uf=class uf extends Vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hv,this.fragmentShader=dv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=er(e.uniforms),this.uniformsGroups=uv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Oe().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ve().fromArray(s.value);break;case"v3":this.uniforms[n].value=new W().fromArray(s.value);break;case"v4":this.uniforms[n].value=new St().fromArray(s.value);break;case"m3":this.uniforms[n].value=new We().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ft().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}};l(uf,"ShaderMaterial");var gn=uf,hf=class hf extends gn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};l(hf,"RawShaderMaterial");var hc=hf,df=class df extends Vi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cu,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};l(df,"MeshStandardMaterial");var Xi=df;var ff=class ff extends Vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=A0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};l(ff,"MeshDepthMaterial");var dc=ff,pf=class pf extends Vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};l(pf,"MeshDistanceMaterial");var fc=pf;function kr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}l(kr,"convertArray");function Wl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}l(Wl,"hasTangents");var mf=class mf{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}};l(mf,"Interpolant");var Ms=mf,gf=class gf extends Ms{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xh,endingEnd:Xh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case qh:r=e,o=2*t-n;break;case Yh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case qh:a=e,c=2*n-t;break;case Yh:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let u=(n-t)*.5,h=this.valueSize;this._weightPrev=u/(t-o),this._weightNext=u/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,x=(n-t)/(s-t),y=x*x,_=y*x,g=-d*_+2*d*y-d*x,S=(1+d)*_+(-1.5-2*d)*y+(-.5+d)*x+1,R=(-1-p)*_+(1.5+p)*y+.5*x,E=p*_-p*y;for(let C=0;C!==o;++C)r[C]=g*a[h+C]+S*a[u+C]+R*a[c+C]+E*a[f+C];return r}};l(gf,"CubicInterpolant");var pc=gf,xf=class xf extends Ms{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=(n-t)/(s-t),f=1-h;for(let d=0;d!==o;++d)r[d]=a[u+d]*f+a[c+d]*h;return r}};l(xf,"LinearInterpolant");var mc=xf,_f=class _f extends Ms{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}};l(_f,"DiscreteInterpolant");var gc=_f,vf=class vf extends Ms{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let x=(n-t)/(s-t),y=1-x;for(let _=0;_!==o;++_)r[_]=a[u+_]*y+a[c+_]*x;return r}let d=o*2,p=e-1;for(let x=0;x!==o;++x){let y=a[u+x],_=a[c+x],g=p*d+x*2,S=f[g],R=f[g+1],E=e*d+x*2,C=h[E],T=h[E+1],v=pv(n,t,S,C,s);r[x]=W0(v,y,R,T,_)}return r}};l(vf,"BezierInterpolant");var xc=vf;function W0(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}l(W0,"cubicBezier");function fv(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}l(fv,"cubicBezierSlope");function pv(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=W0(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=fv(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}l(pv,"solveBezierParameter");var yf=class yf{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=kr(t,this.TimeBufferType),this.values=kr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:kr(e.times,Array),values:kr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Wl(e.settings)&&(n.settings={inTangents:kr(e.settings.inTangents,Array),outTangents:kr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new gc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new xc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case qa:t=this.InterpolantFactoryMethodDiscrete;break;case ic:t=this.InterpolantFactoryMethodLinear;break;case Yl:t=this.InterpolantFactoryMethodSmooth;break;case Wh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ge("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qa;case this.InterpolantFactoryMethodLinear:return ic;case this.InterpolantFactoryMethodSmooth:return Yl;case this.InterpolantFactoryMethodBezier:return Wh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Wl(this.settings)&&(Qm(this.settings.inTangents,e),Qm(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Wl(this.settings)&&(jm(this.settings.inTangents,e),jm(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(He("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(He("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){He("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){He("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&G_(s))for(let o=0,c=s.length;o!==c;++o){let u=s[o];if(isNaN(u)){He("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Yl,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,u=e[o],h=e[o+1];if(u!==h&&(o!==1||u!==e[0]))if(s)c=!0;else{let f=o*n,d=f-n,p=f+n;for(let x=0;x!==n;++x){let y=t[f+x];if(y!==t[d+x]||y!==t[p+x]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let f=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[f+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,u=0;u!==n;++u)t[c+u]=t[o+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Wl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};l(yf,"KeyframeTrack");var Rn=yf;function Qm(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}l(Qm,"shiftTangentTimes");function jm(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}l(jm,"scaleTangentTimes");Rn.prototype.ValueTypeName="";Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=ic;var bf=class bf extends Rn{constructor(e,t,n){super(e,t,n)}};l(bf,"BooleanKeyframeTrack");var Ss=bf;Ss.prototype.ValueTypeName="bool";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=qa;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Mf=class Mf extends Rn{constructor(e,t,n,s){super(e,t,n,s)}};l(Mf,"ColorKeyframeTrack");var _c=Mf;_c.prototype.ValueTypeName="color";var Sf=class Sf extends Rn{constructor(e,t,n,s){super(e,t,n,s)}};l(Sf,"NumberKeyframeTrack");var vc=Sf;vc.prototype.ValueTypeName="number";var wf=class wf extends Ms{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),u=e*o;for(let h=u+o;u!==h;u+=4)pn.slerpFlat(r,0,a,u-o,a,u,c);return r}};l(wf,"QuaternionLinearInterpolant");var yc=wf,Ef=class Ef extends Rn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new yc(this.times,this.values,this.getValueSize(),e)}};l(Ef,"QuaternionKeyframeTrack");var oo=Ef;oo.prototype.ValueTypeName="quaternion";oo.prototype.InterpolantFactoryMethodSmooth=void 0;var Tf=class Tf extends Rn{constructor(e,t,n){super(e,t,n)}};l(Tf,"StringKeyframeTrack");var ws=Tf;ws.prototype.ValueTypeName="string";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=qa;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;var Af=class Af extends Rn{constructor(e,t,n,s){super(e,t,n,s)}};l(Af,"VectorKeyframeTrack");var bc=Af;bc.prototype.ValueTypeName="vector";var Cf=class Cf{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return u.push(h,f),this},this.removeHandler=function(h){let f=u.indexOf(h);return f!==-1&&u.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=u.length;f<d;f+=2){let p=u[f],x=u[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}};l(Cf,"LoadingManager");var Mc=Cf,X0=new Mc,Rf=class Rf{constructor(e){this.manager=e!==void 0?e:X0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};l(Rf,"Loader");var Sc=Rf;Sc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Pf=class Pf extends Zt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};l(Pf,"Light");var lo=Pf,If=class If extends lo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}};l(If,"HemisphereLight");var co=If,Hh=new ft,e0=new W,t0=new W,Lf=class Lf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _s,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;e0.setFromMatrixPosition(e.matrixWorld),t.position.copy(e0),t0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(t0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Hh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Hh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,u=s?s.y/r.y:0;e.coordinateSystem===Yr||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),t.multiply(Hh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};l(Lf,"LightShadow");var wc=Lf,Xl=new W,ql=new pn,ui=new W,Df=class Df extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xl,ql,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xl,ql,ui.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Xl,ql,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xl,ql,ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};l(Df,"Camera");var uo=Df,fs=new W,n0=new Ve,i0=new Ve,Nf=class Nf extends uo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=sc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(bh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sc*2*Math.atan(Math.tan(bh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fs.x,fs.y).multiplyScalar(-e/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fs.x,fs.y).multiplyScalar(-e/fs.z)}getViewSize(e,t){return this.getViewBounds(e,n0,i0),t.subVectors(i0,n0)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(bh*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/u,s*=a.width/c,n*=a.height/u}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};l(Nf,"PerspectiveCamera");var dn=Nf;var Uf=class Uf extends uo{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};l(Uf,"OrthographicCamera");var ho=Uf,Ff=class Ff extends wc{constructor(){super(new ho(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};l(Ff,"DirectionalLightShadow");var $h=Ff,Of=class Of extends lo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new $h}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};l(Of,"DirectionalLight");var fo=Of;var Bf=class Bf extends Ft{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};l(Bf,"InstancedBufferGeometry");var po=Bf;var Gr=-90,Vr=1,zf=class zf extends Zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new dn(Gr,Vr,e,t);s.layers=this.layers,this.add(s);let r=new dn(Gr,Vr,e,t);r.layers=this.layers,this.add(r);let a=new dn(Gr,Vr,e,t);a.layers=this.layers,this.add(a);let o=new dn(Gr,Vr,e,t);o.layers=this.layers,this.add(o);let c=new dn(Gr,Vr,e,t);c.layers=this.layers,this.add(c);let u=new dn(Gr,Vr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let u of t)this.remove(u);if(e===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,u,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,d,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}};l(zf,"CubeCamera");var ta=zf,kf=class kf extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};l(kf,"ArrayCamera");var Ec=kf;var wd="\\[\\]\\.:\\/",mv=new RegExp("["+wd+"]","g"),Ed="[^"+wd+"]",gv="[^"+wd.replace("\\.","")+"]",xv=/((?:WC+[\/:])*)/.source.replace("WC",Ed),_v=/(WCOD+)?/.source.replace("WCOD",gv),vv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ed),yv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ed),bv=new RegExp("^"+xv+_v+vv+yv+"$"),Mv=["material","materials","bones","map"],Gf=class Gf{constructor(e,t,n){let s=n||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}};l(Gf,"Composite");var Zh=Gf,ms=class ms{constructor(e,t,n){this.path=t,this.parsedPath=n||ms.parseTrackName(t),this.node=ms.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ms.Composite(e,t,n):new ms(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(mv,"")}static parseTrackName(e){let t=bv.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Mv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=l(function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},"searchNodeSubtree"),s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=ms.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ge("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){He("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){He("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){He("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){He("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){He("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let a=e[s];if(a===void 0){let u=t.nodeName;He("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};l(ms,"PropertyBinding");var vt=ms;vt.Composite=Zh;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var VE=new Float32Array(1);var Gc=class Gc{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};l(Gc,"Matrix2"),Gc.prototype.isMatrix2=!0;var Jh=Gc;function Td(i,e,t,n){let s=Sv(n);switch(t){case md:return i*e;case xd:return i*e/s.components*s.byteLength;case Zc:return i*e/s.components*s.byteLength;case vi:return i*e*2/s.components*s.byteLength;case Jc:return i*e*2/s.components*s.byteLength;case gd:return i*e*3/s.components*s.byteLength;case ei:return i*e*4/s.components*s.byteLength;case Kc:return i*e*4/s.components*s.byteLength;case _o:case vo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case yo:case bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jc:case tu:return Math.max(i,16)*Math.max(e,8)/4;case Qc:case eu:return Math.max(i,8)*Math.max(e,8)/2;case nu:case iu:case ru:case au:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case su:case Mo:case ou:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case lu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case uu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case hu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case du:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case fu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case pu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case mu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case gu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case xu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case _u:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case vu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case yu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case bu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Mu:case Su:case wu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Eu:case Tu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case So:case Au:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}l(Td,"getByteLength");function Sv(i){switch(i){case bn:case hd:return{byteLength:1,components:1};case ra:case dd:case Pn:return{byteLength:2,components:1};case Yc:case $c:return{byteLength:2,components:4};case Qn:case qc:case jn:return{byteLength:4,components:1};case fd:case pd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}l(Sv,"getTextureTypeByteLength");typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function fg(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return l(s,"onAnimationFrame"),{start:l(function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},"start"),stop:l(function(){i!==null&&i.cancelAnimationFrame(n),e=!1},"stop"),setAnimationLoop:l(function(r){t=r},"setAnimationLoop"),setContext:l(function(r){i=r},"setContext")}}l(fg,"WebGLAnimation");function Rv(i){let e=new WeakMap;function t(o,c){let u=o.array,h=o.usage,f=u.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,u,h),o.onUploadCallback();let p;if(u instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=i.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=i.SHORT;else if(u instanceof Uint32Array)p=i.UNSIGNED_INT;else if(u instanceof Int32Array)p=i.INT;else if(u instanceof Int8Array)p=i.BYTE;else if(u instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}l(t,"createBuffer");function n(o,c,u){let h=c.array,f=c.updateRanges;if(i.bindBuffer(u,o),f.length===0)i.bufferSubData(u,0,h);else{f.sort((p,x)=>p.start-x.start);let d=0;for(let p=1;p<f.length;p++){let x=f[d],y=f[p];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++d,f[d]=y)}f.length=d+1;for(let p=0,x=f.length;p<x;p++){let y=f[p];i.bufferSubData(u,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}l(n,"updateBuffer");function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}l(s,"get");function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}l(r,"remove");function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=e.get(o);if(u===void 0)e.set(o,t(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,c),u.version=o.version}}return l(a,"update"),{get:s,remove:r,update:a}}l(Rv,"WebGLAttributes");var Pv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Iv=`#ifdef USE_ALPHAHASH
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
#endif`,Lv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fv=`#ifdef USE_AOMAP
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
#endif`,Ov=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bv=`#ifdef USE_BATCHING
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
#endif`,zv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hv=`#ifdef USE_IRIDESCENCE
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
#endif`,Wv=`#ifdef USE_BUMPMAP
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
#endif`,Xv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$v=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Kv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Qv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,jv=`#define PI 3.141592653589793
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
} // validated`,ey=`vec3 transformedNormal = objectNormal;
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
#endif`,ty=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ny=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ry="gl_FragColor = linearToOutputTexel( gl_FragColor );",ay=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,oy=`#ifdef USE_ENVMAP
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
#endif`,ly=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,cy=`#ifdef USE_ENVMAP
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
#endif`,uy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hy=`#ifdef USE_ENVMAP
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
#endif`,dy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,py=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,my=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gy=`#ifdef USE_GRADIENTMAP
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
}`,xy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_y=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,by=`#ifdef USE_ENVMAP
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
#endif`,My=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ey=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ty=`PhysicalMaterial material;
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
#endif`,Ay=`uniform sampler2D dfgLUT;
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
}`,Cy=`
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
#endif`,Ry=`#if defined( RE_IndirectDiffuse )
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
#endif`,Py=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Iy=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Ly=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ny=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Oy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,By=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zy=`#if defined( USE_POINTS_UV )
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
#endif`,ky=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hy=`#if defined( USE_MORPHCOLORS )
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
#endif`,Wy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xy=`#ifdef USE_MORPHTARGETS
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
#endif`,qy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$y=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ky=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qy=`#ifdef USE_NORMALMAP
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
#endif`,jy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ib=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ab=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ob=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ub=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,db=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pb=`float getShadowMask() {
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
}`,mb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gb=`#ifdef USE_SKINNING
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
#endif`,xb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_b=`#ifdef USE_SKINNING
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
#endif`,vb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sb=`#ifdef USE_TRANSMISSION
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
#endif`,wb=`#ifdef USE_TRANSMISSION
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
#endif`,Eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pb=`uniform sampler2D t2D;
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
}`,Ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lb=`uniform float backgroundBlurriness;
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
}`,Db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ub=`#include <common>
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
}`,Fb=`#if DEPTH_PACKING == 3200
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
}`,Ob=`#define DISTANCE
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
}`,Bb=`#define DISTANCE
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
}`,zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gb=`uniform float scale;
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
}`,Vb=`uniform vec3 diffuse;
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
}`,Hb=`#include <common>
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
}`,Wb=`uniform vec3 diffuse;
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
}`,Xb=`#define LAMBERT
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
}`,qb=`#define LAMBERT
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
}`,Yb=`#define MATCAP
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
}`,$b=`#define MATCAP
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
}`,Zb=`#define NORMAL
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
}`,Jb=`#define NORMAL
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
}`,Kb=`#define PHONG
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
}`,Qb=`#define PHONG
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
}`,jb=`#define STANDARD
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
}`,eM=`#define STANDARD
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
}`,tM=`#define TOON
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
}`,nM=`#define TOON
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
}`,iM=`uniform float size;
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
}`,sM=`uniform vec3 diffuse;
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
}`,rM=`#include <common>
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
}`,aM=`uniform vec3 color;
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
}`,oM=`uniform float rotation;
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
}`,lM=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:Pv,alphahash_pars_fragment:Iv,alphamap_fragment:Lv,alphamap_pars_fragment:Dv,alphatest_fragment:Nv,alphatest_pars_fragment:Uv,aomap_fragment:Fv,aomap_pars_fragment:Ov,batching_pars_vertex:Bv,batching_vertex:zv,begin_vertex:kv,beginnormal_vertex:Gv,bsdfs:Vv,iridescence_fragment:Hv,bumpmap_pars_fragment:Wv,clipping_planes_fragment:Xv,clipping_planes_pars_fragment:qv,clipping_planes_pars_vertex:Yv,clipping_planes_vertex:$v,color_fragment:Zv,color_pars_fragment:Jv,color_pars_vertex:Kv,color_vertex:Qv,common:jv,defaultnormal_vertex:ey,displacementmap_pars_vertex:ty,displacementmap_vertex:ny,emissivemap_fragment:iy,emissivemap_pars_fragment:sy,colorspace_fragment:ry,colorspace_pars_fragment:ay,envmap_fragment:oy,envmap_common_pars_fragment:ly,envmap_pars_fragment:cy,envmap_pars_vertex:uy,envmap_physical_pars_fragment:by,envmap_vertex:hy,fog_vertex:dy,fog_pars_vertex:fy,fog_fragment:py,fog_pars_fragment:my,gradientmap_pars_fragment:gy,lightmap_pars_fragment:xy,lights_lambert_fragment:_y,lights_lambert_pars_fragment:vy,lights_pars_begin:yy,lights_toon_fragment:My,lights_toon_pars_fragment:Sy,lights_phong_fragment:wy,lights_phong_pars_fragment:Ey,lights_physical_fragment:Ty,lights_physical_pars_fragment:Ay,lights_fragment_begin:Cy,lights_fragment_maps:Ry,lights_fragment_end:Py,lightprobes_pars_fragment:Iy,logdepthbuf_fragment:Ly,logdepthbuf_pars_fragment:Dy,logdepthbuf_pars_vertex:Ny,logdepthbuf_vertex:Uy,map_fragment:Fy,map_pars_fragment:Oy,map_particle_fragment:By,map_particle_pars_fragment:zy,metalnessmap_fragment:ky,metalnessmap_pars_fragment:Gy,morphinstance_vertex:Vy,morphcolor_vertex:Hy,morphnormal_vertex:Wy,morphtarget_pars_vertex:Xy,morphtarget_vertex:qy,normal_fragment_begin:Yy,normal_fragment_maps:$y,normal_pars_fragment:Zy,normal_pars_vertex:Jy,normal_vertex:Ky,normalmap_pars_fragment:Qy,clearcoat_normal_fragment_begin:jy,clearcoat_normal_fragment_maps:eb,clearcoat_pars_fragment:tb,iridescence_pars_fragment:nb,opaque_fragment:ib,packing:sb,premultiplied_alpha_fragment:rb,project_vertex:ab,dithering_fragment:ob,dithering_pars_fragment:lb,roughnessmap_fragment:cb,roughnessmap_pars_fragment:ub,shadowmap_pars_fragment:hb,shadowmap_pars_vertex:db,shadowmap_vertex:fb,shadowmask_pars_fragment:pb,skinbase_vertex:mb,skinning_pars_vertex:gb,skinning_vertex:xb,skinnormal_vertex:_b,specularmap_fragment:vb,specularmap_pars_fragment:yb,tonemapping_fragment:bb,tonemapping_pars_fragment:Mb,transmission_fragment:Sb,transmission_pars_fragment:wb,uv_pars_fragment:Eb,uv_pars_vertex:Tb,uv_vertex:Ab,worldpos_vertex:Cb,background_vert:Rb,background_frag:Pb,backgroundCube_vert:Ib,backgroundCube_frag:Lb,cube_vert:Db,cube_frag:Nb,depth_vert:Ub,depth_frag:Fb,distance_vert:Ob,distance_frag:Bb,equirect_vert:zb,equirect_frag:kb,linedashed_vert:Gb,linedashed_frag:Vb,meshbasic_vert:Hb,meshbasic_frag:Wb,meshlambert_vert:Xb,meshlambert_frag:qb,meshmatcap_vert:Yb,meshmatcap_frag:$b,meshnormal_vert:Zb,meshnormal_frag:Jb,meshphong_vert:Kb,meshphong_frag:Qb,meshphysical_vert:jb,meshphysical_frag:eM,meshtoon_vert:tM,meshtoon_frag:nM,points_vert:iM,points_frag:sM,shadow_vert:rM,shadow_frag:aM,sprite_vert:oM,sprite_frag:lM},we={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},bi={basic:{uniforms:sn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:sn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Oe(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:sn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:sn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:sn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:sn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:sn([we.points,we.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:sn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:sn([we.common,we.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:sn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:sn([we.sprite,we.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:sn([we.common,we.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:sn([we.lights,we.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};bi.physical={uniforms:sn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var Pu={r:0,b:0,g:0},cM=new ft,pg=new We;pg.set(-1,0,0,0,1,0,0,0,1);function uM(i,e,t,n,s,r){let a=new Oe(0),o=s===!0?0:1,c,u,h=null,f=0,d=null;function p(S){let R=S.isScene===!0?S.background:null;if(R&&R.isTexture){let E=S.backgroundBlurriness>0;R=e.get(R,E)}return R}l(p,"getBackground");function x(S){let R=!1,E=p(S);E===null?_(a,o):E&&E.isColor&&(_(E,1),R=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}l(x,"render");function y(S,R){let E=p(R);E&&E.isCubeTexture?(u===void 0&&(u=new wt(new fi(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:er(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,T,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:l(function(){return this.uniforms.envMap.value},"get")}),n.update(u)),u.material.uniforms.envMap.value=E,u.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(cM.makeRotationFromEuler(R.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(pg),u.material.toneMapped=st.getTransfer(E.colorSpace)!==ht,(h!==E||f!==E.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=E,f=E.version,d=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new wt(new gi(2,2),new gn({name:"BackgroundMaterial",uniforms:er(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:l(function(){return this.uniforms.t2D.value},"get")}),n.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=st.getTransfer(E.colorSpace)!==ht,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||f!==E.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=E,f=E.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}l(y,"addToRenderList");function _(S,R){S.getRGB(Pu,Sd(i)),t.buffers.color.setClear(Pu.r,Pu.g,Pu.b,R,r)}l(_,"setClear");function g(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return l(g,"dispose"),{getClearColor:l(function(){return a},"getClearColor"),setClearColor:l(function(S,R=1){a.set(S),o=R,_(a,o)},"setClearColor"),getClearAlpha:l(function(){return o},"getClearAlpha"),setClearAlpha:l(function(S){o=S,_(a,o)},"setClearAlpha"),render:x,addToRenderList:y,dispose:g}}l(uM,"WebGLBackground");function hM(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(B,V,J,L,K){let ie=!1,D=f(B,L,J,V);r!==D&&(r=D,u(r.object)),ie=p(B,L,J,K),ie&&x(B,L,J,K),K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(ie||a)&&(a=!1,E(B,V,J,L),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}l(o,"setup");function c(){return i.createVertexArray()}l(c,"createVertexArrayObject");function u(B){return i.bindVertexArray(B)}l(u,"bindVertexArrayObject");function h(B){return i.deleteVertexArray(B)}l(h,"deleteVertexArrayObject");function f(B,V,J,L){let K=L.wireframe===!0,ie=n[V.id];ie===void 0&&(ie={},n[V.id]=ie);let D=B.isInstancedMesh===!0?B.id:0,z=ie[D];z===void 0&&(z={},ie[D]=z);let F=z[J.id];F===void 0&&(F={},z[J.id]=F);let k=F[K];return k===void 0&&(k=d(c()),F[K]=k),k}l(f,"getBindingState");function d(B){let V=[],J=[],L=[];for(let K=0;K<t;K++)V[K]=0,J[K]=0,L[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:J,attributeDivisors:L,object:B,attributes:{},index:null}}l(d,"createBindingState");function p(B,V,J,L){let K=r.attributes,ie=V.attributes,D=0,z=J.getAttributes();for(let F in z)if(z[F].location>=0){let Z=K[F],se=ie[F];if(se===void 0&&(F==="instanceMatrix"&&B.instanceMatrix&&(se=B.instanceMatrix),F==="instanceColor"&&B.instanceColor&&(se=B.instanceColor)),Z===void 0||Z.attribute!==se||se&&Z.data!==se.data)return!0;D++}return r.attributesNum!==D||r.index!==L}l(p,"needsUpdate");function x(B,V,J,L){let K={},ie=V.attributes,D=0,z=J.getAttributes();for(let F in z)if(z[F].location>=0){let Z=ie[F];Z===void 0&&(F==="instanceMatrix"&&B.instanceMatrix&&(Z=B.instanceMatrix),F==="instanceColor"&&B.instanceColor&&(Z=B.instanceColor));let se={};se.attribute=Z,Z&&Z.data&&(se.data=Z.data),K[F]=se,D++}r.attributes=K,r.attributesNum=D,r.index=L}l(x,"saveCache");function y(){let B=r.newAttributes;for(let V=0,J=B.length;V<J;V++)B[V]=0}l(y,"initAttributes");function _(B){g(B,0)}l(_,"enableAttribute");function g(B,V){let J=r.newAttributes,L=r.enabledAttributes,K=r.attributeDivisors;J[B]=1,L[B]===0&&(i.enableVertexAttribArray(B),L[B]=1),K[B]!==V&&(i.vertexAttribDivisor(B,V),K[B]=V)}l(g,"enableAttributeAndDivisor");function S(){let B=r.newAttributes,V=r.enabledAttributes;for(let J=0,L=V.length;J<L;J++)V[J]!==B[J]&&(i.disableVertexAttribArray(J),V[J]=0)}l(S,"disableUnusedAttributes");function R(B,V,J,L,K,ie,D){D===!0?i.vertexAttribIPointer(B,V,J,K,ie):i.vertexAttribPointer(B,V,J,L,K,ie)}l(R,"vertexAttribPointer");function E(B,V,J,L){y();let K=L.attributes,ie=J.getAttributes(),D=V.defaultAttributeValues;for(let z in ie){let F=ie[z];if(F.location>=0){let k=K[z];if(k===void 0&&(z==="instanceMatrix"&&B.instanceMatrix&&(k=B.instanceMatrix),z==="instanceColor"&&B.instanceColor&&(k=B.instanceColor)),k!==void 0){let Z=k.normalized,se=k.itemSize,de=e.get(k);if(de===void 0)continue;let q=de.buffer,he=de.type,te=de.bytesPerElement,ae=he===i.INT||he===i.UNSIGNED_INT||k.gpuType===qc;if(k.isInterleavedBufferAttribute){let ce=k.data,Ae=ce.isInterleavedBuffer===!0?ce.stride:ce.itemSize,qe=k.offset;if(ce.isInstancedInterleavedBuffer||ce.isInstancedBufferAttribute){for(let Pe=0;Pe<F.locationSize;Pe++)g(F.location+Pe,ce.meshPerAttribute);B.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Pe=0;Pe<F.locationSize;Pe++)_(F.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,q);for(let Pe=0;Pe<F.locationSize;Pe++)R(F.location+Pe,se/F.locationSize,he,Z,Ae*te,(qe+se/F.locationSize*Pe)*te,ae)}else{if(k.isInstancedBufferAttribute){for(let ce=0;ce<F.locationSize;ce++)g(F.location+ce,k.meshPerAttribute);B.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ce=0;ce<F.locationSize;ce++)_(F.location+ce);i.bindBuffer(i.ARRAY_BUFFER,q);for(let ce=0;ce<F.locationSize;ce++)R(F.location+ce,se/F.locationSize,he,Z,se*te,se/F.locationSize*ce*te,ae)}}else if(D!==void 0){let Z=D[z];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(F.location,Z);break;case 3:i.vertexAttrib3fv(F.location,Z);break;case 4:i.vertexAttrib4fv(F.location,Z);break;default:i.vertexAttrib1fv(F.location,Z)}}}}S()}l(E,"setupVertexAttributes");function C(){U();for(let B in n){let V=n[B];for(let J in V){let L=V[J];for(let K in L){let ie=L[K];for(let D in ie)h(ie[D].object),delete ie[D];delete L[K]}}delete n[B]}}l(C,"dispose");function T(B){if(n[B.id]===void 0)return;let V=n[B.id];for(let J in V){let L=V[J];for(let K in L){let ie=L[K];for(let D in ie)h(ie[D].object),delete ie[D];delete L[K]}}delete n[B.id]}l(T,"releaseStatesOfGeometry");function v(B){for(let V in n){let J=n[V];for(let L in J){let K=J[L];if(K[B.id]===void 0)continue;let ie=K[B.id];for(let D in ie)h(ie[D].object),delete ie[D];delete K[B.id]}}}l(v,"releaseStatesOfProgram");function w(B){for(let V in n){let J=n[V],L=B.isInstancedMesh===!0?B.id:0,K=J[L];if(K!==void 0){for(let ie in K){let D=K[ie];for(let z in D)h(D[z].object),delete D[z];delete K[ie]}delete J[L],Object.keys(J).length===0&&delete n[V]}}}l(w,"releaseStatesOfObject");function U(){I(),a=!0,r!==s&&(r=s,u(r.object))}l(U,"reset");function I(){s.geometry=null,s.program=null,s.wireframe=!1}return l(I,"resetDefaultState"),{setup:o,reset:U,resetDefaultState:I,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfObject:w,releaseStatesOfProgram:v,initAttributes:y,enableAttribute:_,disableUnusedAttributes:S}}l(hM,"WebGLBindingStates");function dM(i,e,t){let n;function s(c){n=c}l(s,"setMode");function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}l(r,"render");function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}l(a,"renderInstances");function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let p=0;p<h;p++)d+=u[p];t.update(d,n,1)}l(o,"renderMultiDraw"),this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}l(dM,"WebGLBufferRenderer");function fM(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}l(r,"getMaxAnisotropy");function a(v){return!(v!==ei&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}l(a,"textureFormatReadable");function o(v){let w=v===Pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==bn&&v!==jn&&!w&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}l(o,"textureTypeReadable");function c(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}l(c,"getMaxPrecision");let u=t.precision!==void 0?t.precision:"highp",h=c(u);h!==u&&(Ge("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Ge("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:S,maxVaryings:R,maxFragmentUniforms:E,maxSamples:C,samples:T}}l(fM,"WebGLCapabilities");function pM(i){let e=this,t=null,n=0,s=!1,r=!1,a=new yn,o=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let p=f.length!==0||d||n!==0||s;return s=d,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,p){let x=f.clippingPlanes,y=f.clipIntersection,_=f.clipShadows,g=i.get(f);if(!s||x===null||x.length===0||r&&!_)r?h(null):u();else{let S=r?0:n,R=S*4,E=g.clippingState||null;c.value=E,E=h(x,d,R,p);for(let C=0;C!==R;++C)E[C]=t[C];g.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}l(u,"resetGlobalState");function h(f,d,p,x){let y=f!==null?f.length:0,_=null;if(y!==0){if(_=c.value,x!==!0||_===null){let g=p+y*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(_===null||_.length<g)&&(_=new Float32Array(g));for(let R=0,E=p;R!==y;++R,E+=4)a.copy(f[R]).applyMatrix4(S,o),a.normal.toArray(_,E),_[E+3]=a.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,_}l(h,"projectPlanes")}l(pM,"WebGLClipping");var Qf=class Qf extends An{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new so(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fi(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:Zs});r.uniforms.tEquirect.value=t;let a=new wt(s,r),o=t.minFilter;return t.minFilter===Kn&&(t.minFilter=Xt),new ta(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};l(Qf,"WebGLCubeRenderTarget");var To=Qf,q0=256,mM=3,gM=20,mg=256,gg=16,xM=3,_M=new W,vM=new Oe,Nu=class Nu{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ta(1,10,null),this._boxMesh=new wt(new fi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=_M}=r,c=this._renderer;this._setSize(a);let u=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=c.autoClear,d=c.autoClearColor,p=c.autoClearDepth,x=c.autoClearStencil,y=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(e.background=c.getClearColor(vM));let _=new ta(n,s,h);return _.position.copy(o),_.update(c,e),c.autoClear=f,c.autoClearColor=d,c.autoClearDepth=p,c.autoClearStencil=x,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(u,t)),this._applyPMREM(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Z0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(q0,z0(e))}_fromTexture(e,t){e.mapping===Ks||e.mapping===sa?this._setSize(e.image.length===0?q0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Y0(e,!1,!1),n=Math.log2(e)-mM;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Y0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ks||e.mapping===sa?(this._cubemapMaterial===null&&(this._cubemapMaterial=Z0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=$0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=yM(),this._integrationMaterial=bM());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/gg);for(let a=0;a<=n;a++){let o=Nu.lodToRoughness(a,n);if(a>n-xM)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(mg*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=MM());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};l(Nu,"PMREMGenerator");var Lu=Nu;function Y0(i,e,t){return new To(i,{minFilter:Kn,generateMipmaps:e,type:Pn,colorSpace:Ya,depthBuffer:t})}l(Y0,"_createRenderTarget");function Ao(i,e,t){return new gn({name:i,uniforms:e,vertexShader:Je.cube_vert,fragmentShader:t,side:xn,blending:Zs,depthTest:!1,depthWrite:!1})}l(Ao,"_getMaterial");function yM(){return Ao("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${mg}u

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
	`)}l(yM,"_getGGXMaterial");function bM(){return Ao("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:gg}},`

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
	`)}l(bM,"_getIntegrationMaterial");function MM(){return Ao("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${gM}
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
	`)}l(MM,"_getBlurMaterial");function $0(){return Ao("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}l($0,"_getEquirectMaterial");function Z0(){return Ao("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}l(Z0,"_getCubemapMaterial");function SM(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,p=!1){return d==null?null:p?a(d):r(d)}l(s,"get");function r(d){if(d&&d.isTexture){let p=d.mapping;if(p===Hc||p===Wc)if(e.has(d)){let x=e.get(d).texture;return o(x,d.mapping)}else{let x=d.image;if(x&&x.height>0){let y=new To(x.height);return y.fromEquirectangularTexture(i,d),e.set(d,y),d.addEventListener("dispose",u),o(y.texture,d.mapping)}else return null}}return d}l(r,"getCube");function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let p=d.mapping,x=p===Hc||p===Wc,y=p===Ks||p===sa;if(x||y){let _=t.get(d),g=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new Lu(i)),_=x?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{let S=d.image;return x&&S&&S.height>0||y&&S&&c(S)?(n===null&&(n=new Lu(i)),_=x?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",h),_.texture):null}}}return d}l(a,"getPMREM");function o(d,p){return p===Hc?d.mapping=Ks:p===Wc&&(d.mapping=sa),d}l(o,"mapTextureMapping");function c(d){let p=0,x=6;for(let y=0;y<x;y++)d[y]!==void 0&&p++;return p===x}l(c,"isCubeTextureComplete");function u(d){let p=d.target;p.removeEventListener("dispose",u);let x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}l(u,"onCubemapDispose");function h(d){let p=d.target;p.removeEventListener("dispose",h);let x=t.get(p);x!==void 0&&(t.delete(p),x.dispose())}l(h,"onPMREMDispose");function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return l(f,"dispose"),{get:s,dispose:f}}l(SM,"WebGLEnvironments");function wM(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return l(t,"getExtension"),{has:l(function(n){return t(n)!==null},"has"),init:l(function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},"init"),get:l(function(n){let s=t(n);return s===null&&Wa("WebGLRenderer: "+n+" extension not supported."),s},"get")}}l(wM,"WebGLExtensions");function EM(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(x=>delete s[x]);function o(x){c(x.target)}l(o,"onGeometryDispose");function c(x){x.index!==null&&e.remove(x.index);for(let _ in x.attributes)e.remove(x.attributes[_]);x.removeEventListener("dispose",o),delete s[x.id],a.unregister(x);let y=r.get(x);y&&(e.remove(y),r.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}l(c,"destroyGeometry");function u(x,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}l(u,"get");function h(x){let y=x.attributes;for(let _ in y)e.update(y[_],i.ARRAY_BUFFER)}l(h,"update");function f(x){let y=x.index,_=x.attributes.position,g=0;if(_===void 0)return;let S=y!==null?y.array.length:_.array.length/3-1,R=_.count>=65535?no:to,E=new R(Math.ceil(S/3)*6,1),C=E.array;if(y!==null){let v=y.array;g=y.version;for(let w=0,U=0;w<S;w+=3){let I=v[w+0],B=v[w+1],V=v[w+2];C[U++]=I,C[U++]=B,C[U++]=B,C[U++]=V,C[U++]=V,C[U++]=I}}else{g=_.version;for(let v=0,w=0;v<S;v+=3){let U=v+0,I=v+1,B=v+2;C[w++]=U,C[w++]=I,C[w++]=I,C[w++]=B,C[w++]=B,C[w++]=U}}E.version=g;let T=r.get(x);T&&e.remove(T),r.set(x,E)}l(f,"updateWireframeAttribute");function d(x){let y=r.get(x);if(y){let _=x.index;_!==null&&y.version<_.version&&f(x)}else f(x);return r.get(x)}l(d,"getWireframeAttribute");function p(){for(let x in s){let y=s[x].deref();y!==void 0&&c(y)}}return l(p,"dispose"),{get:u,update:h,getWireframeAttribute:d,dispose:p}}l(EM,"WebGLGeometries");function TM(i,e,t){let n;function s(f){n=f}l(s,"setMode");let r,a;function o(f){r=f.type,a=f.bytesPerElement}l(o,"setIndex");function c(f,d){i.drawElements(n,d,r,f*a),t.update(d,n,1)}l(c,"render");function u(f,d,p){p!==0&&(i.drawElementsInstanced(n,d,r,f*a,p),t.update(d,n,p))}l(u,"renderInstances");function h(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,p);let y=0;for(let _=0;_<p;_++)y+=d[_];t.update(y,n,1)}l(h,"renderMultiDraw"),this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}l(TM,"WebGLIndexedBufferRenderer");function AM(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:He("WebGLInfo: Unknown draw mode:",a);break}}l(n,"update");function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return l(s,"reset"),{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}l(AM,"WebGLInfo");function CM(i,e,t){let n=new WeakMap,s=new St;function r(a,o,c){let u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==f){let I=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",I)};var p=I;l(I,"disposeTexture"),d!==void 0&&d.texture.dispose();let x=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],R=o.morphAttributes.color||[],E=0;x===!0&&(E=1),y===!0&&(E=2),_===!0&&(E=3);let C=o.attributes.position.count*E,T=1;C>e.maxTextureSize&&(T=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);let v=new Float32Array(C*T*4*f),w=new Ka(v,C,T,f);w.type=jn,w.needsUpdate=!0;let U=E*4;for(let B=0;B<f;B++){let V=g[B],J=S[B],L=R[B],K=C*T*4*B;for(let ie=0;ie<V.count;ie++){let D=ie*U;x===!0&&(s.fromBufferAttribute(V,ie),v[K+D+0]=s.x,v[K+D+1]=s.y,v[K+D+2]=s.z,v[K+D+3]=0),y===!0&&(s.fromBufferAttribute(J,ie),v[K+D+4]=s.x,v[K+D+5]=s.y,v[K+D+6]=s.z,v[K+D+7]=0),_===!0&&(s.fromBufferAttribute(L,ie),v[K+D+8]=s.x,v[K+D+9]=s.y,v[K+D+10]=s.z,v[K+D+11]=L.itemSize===4?s.w:1)}}d={count:f,texture:w,size:new Ve(C,T)},n.set(o,d),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let x=0;for(let _=0;_<u.length;_++)x+=u[_];let y=o.morphTargetsRelative?1:1-x;c.getUniforms().setValue(i,"morphTargetBaseInfluence",y),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return l(r,"update"),{update:r}}l(CM,"WebGLMorphtargets");function RM(i,e,t,n,s){let r=new WeakMap;function a(u){let h=s.render.frame,f=u.geometry,d=e.get(u,f);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),r.get(u)!==h&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,h))),u.isSkinnedMesh){let p=u.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return d}l(a,"update");function o(){r=new WeakMap}l(o,"dispose");function c(u){let h=u.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return l(c,"onInstancedMeshDispose"),{update:a,dispose:o}}l(RM,"WebGLObjects");var PM={[sd]:"LINEAR_TONE_MAPPING",[rd]:"REINHARD_TONE_MAPPING",[ad]:"CINEON_TONE_MAPPING",[go]:"ACES_FILMIC_TONE_MAPPING",[ld]:"AGX_TONE_MAPPING",[cd]:"NEUTRAL_TONE_MAPPING",[od]:"CUSTOM_TONE_MAPPING"};function IM(i,e,t,n,s,r){let a=new An(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,u=null,h=new Ft;h.setAttribute("position",new Rt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Rt([0,2,0,0,2,0],2));let f=new hc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new wt(h,f),p=new ho(-1,1,1,-1,0,1),x=null,y=null,_=!1,g,S=null,R=[],E=!1;this.setSize=function(C,T){a.setSize(C,T),o!==null&&o.setSize(C,T),c!==null&&c.setSize(C,T);for(let v=0;v<R.length;v++){let w=R[v];w.setSize&&w.setSize(C,T)}},this.setEffects=function(C){R=C,E=R.length>0&&R[0].isRenderPass===!0;let T=a.width,v=a.height;R.length>0&&o===null&&(o=new An(T,v,{type:Pn,depthBuffer:!1,stencilBuffer:!1}),c=new An(T,v,{type:Pn,depthBuffer:!1,stencilBuffer:!1}));let w=s===!0&&R.some(U=>U.needsDepthTexture===!0);w!==(a.depthTexture!==null)&&(w===!0&&u===null&&(u=new Wi(T,v),r===!0&&(u.format=qi,u.type=Qs)),a.dispose(),a.depthTexture=w?u:null,a.resolveDepthBuffer=w,a.storeMultisampledDepthBuffer=w);for(let U=0;U<R.length;U++){let I=R[U];I.setSize&&I.setSize(T,v),w&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(u)}},this.begin=function(C,T){if(_||C.toneMapping===_i&&R.length===0)return!1;if(S=T,T!==null){let v=T.width,w=T.height;(a.width!==v||a.height!==w)&&this.setSize(v,w)}return E===!1&&C.setRenderTarget(a),g=C.toneMapping,C.toneMapping=_i,!0},this.hasRenderPass=function(){return E},this.end=function(C,T){C.toneMapping=g,_=!0;let v=a,w=o;for(let U=0;U<R.length;U++){let I=R[U];I.enabled!==!1&&(I.render(C,w,v,T),I.needsSwap!==!1&&(v=w,w=w===o?c:o))}if(x!==C.outputColorSpace||y!==C.toneMapping){x=C.outputColorSpace,y=C.toneMapping,f.defines={},st.getTransfer(x)===ht&&(f.defines.SRGB_TRANSFER="");let U=PM[y];U&&(f.defines[U]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=v.texture,C.setRenderTarget(S),C.render(d,p),S=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),f.dispose()}}l(IM,"WebGLOutput");var xg=new mn,_g=new Wi(1,1),vg=new ro(1),yg=new Ka,bg=new oc,Mg=new so,J0=[],K0=[],Q0=new Float32Array(16),j0=new Float32Array(9),eg=new Float32Array(4);function oa(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=J0[s];if(r===void 0&&(r=new Float32Array(s),J0[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}l(oa,"flatten");function zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}l(zt,"arraysEqual");function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}l(kt,"copyArray");function Uu(i,e){let t=K0[e];t===void 0&&(t=new Int32Array(e),K0[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}l(Uu,"allocTexUnits");function LM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}l(LM,"setValueV1f");function DM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}l(DM,"setValueV2f");function NM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}l(NM,"setValueV3f");function UM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}l(UM,"setValueV4f");function FM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;eg.set(n),i.uniformMatrix2fv(this.addr,!1,eg),kt(t,n)}}l(FM,"setValueM2");function OM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;j0.set(n),i.uniformMatrix3fv(this.addr,!1,j0),kt(t,n)}}l(OM,"setValueM3");function BM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;Q0.set(n),i.uniformMatrix4fv(this.addr,!1,Q0),kt(t,n)}}l(BM,"setValueM4");function zM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}l(zM,"setValueV1i");function kM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}l(kM,"setValueV2i");function GM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}l(GM,"setValueV3i");function VM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}l(VM,"setValueV4i");function HM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}l(HM,"setValueV1ui");function WM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}l(WM,"setValueV2ui");function XM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}l(XM,"setValueV3ui");function qM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}l(qM,"setValueV4ui");function Fu(i){return i.version===0&&(i.compareFunction=yd,i.needsUpdate=!0),i}l(Fu,"initShadowTexture");function YM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Fu(_g):r=xg,t.setTexture2D(e||r,s)}l(YM,"setValueT1");function $M(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||bg,s)}l($M,"setValueT3D1");function ZM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Fu(vg):r=Mg,t.setTextureCube(e||r,s)}l(ZM,"setValueT6");function JM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||yg,s)}l(JM,"setValueT2DArray1");function KM(i){switch(i){case 5126:return LM;case 35664:return DM;case 35665:return NM;case 35666:return UM;case 35674:return FM;case 35675:return OM;case 35676:return BM;case 5124:case 35670:return zM;case 35667:case 35671:return kM;case 35668:case 35672:return GM;case 35669:case 35673:return VM;case 5125:return HM;case 36294:return WM;case 36295:return XM;case 36296:return qM;case 35678:case 36198:case 36298:case 36306:case 35682:return YM;case 35679:case 36299:case 36307:return $M;case 35680:case 36300:case 36308:case 36293:return ZM;case 36289:case 36303:case 36311:case 36292:return JM}}l(KM,"getSingularSetter");function QM(i,e){i.uniform1fv(this.addr,e)}l(QM,"setValueV1fArray");function jM(i,e){let t=oa(e,this.size,2);i.uniform2fv(this.addr,t)}l(jM,"setValueV2fArray");function eS(i,e){let t=oa(e,this.size,3);i.uniform3fv(this.addr,t)}l(eS,"setValueV3fArray");function tS(i,e){let t=oa(e,this.size,4);i.uniform4fv(this.addr,t)}l(tS,"setValueV4fArray");function nS(i,e){let t=oa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}l(nS,"setValueM2Array");function iS(i,e){let t=oa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}l(iS,"setValueM3Array");function sS(i,e){let t=oa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}l(sS,"setValueM4Array");function rS(i,e){i.uniform1iv(this.addr,e)}l(rS,"setValueV1iArray");function aS(i,e){i.uniform2iv(this.addr,e)}l(aS,"setValueV2iArray");function oS(i,e){i.uniform3iv(this.addr,e)}l(oS,"setValueV3iArray");function lS(i,e){i.uniform4iv(this.addr,e)}l(lS,"setValueV4iArray");function cS(i,e){i.uniform1uiv(this.addr,e)}l(cS,"setValueV1uiArray");function uS(i,e){i.uniform2uiv(this.addr,e)}l(uS,"setValueV2uiArray");function hS(i,e){i.uniform3uiv(this.addr,e)}l(hS,"setValueV3uiArray");function dS(i,e){i.uniform4uiv(this.addr,e)}l(dS,"setValueV4uiArray");function fS(i,e,t){let n=this.cache,s=e.length,r=Uu(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Fu(_g):a=xg;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}l(fS,"setValueT1Array");function pS(i,e,t){let n=this.cache,s=e.length,r=Uu(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||bg,r[a])}l(pS,"setValueT3DArray");function mS(i,e,t){let n=this.cache,s=e.length,r=Uu(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Fu(vg):a=Mg;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}l(mS,"setValueT6Array");function gS(i,e,t){let n=this.cache,s=e.length,r=Uu(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||yg,r[a])}l(gS,"setValueT2DArrayArray");function xS(i){switch(i){case 5126:return QM;case 35664:return jM;case 35665:return eS;case 35666:return tS;case 35674:return nS;case 35675:return iS;case 35676:return sS;case 5124:case 35670:return rS;case 35667:case 35671:return aS;case 35668:case 35672:return oS;case 35669:case 35673:return lS;case 5125:return cS;case 36294:return uS;case 36295:return hS;case 36296:return dS;case 35678:case 36198:case 36298:case 36306:case 35682:return fS;case 35679:case 36299:case 36307:return pS;case 35680:case 36300:case 36308:case 36293:return mS;case 36289:case 36303:case 36311:case 36292:return gS}}l(xS,"getPureArraySetter");var jf=class jf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=KM(t.type)}};l(jf,"SingleUniform");var Wf=jf,ep=class ep{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xS(t.type)}};l(ep,"PureArrayUniform");var Xf=ep,tp=class tp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}};l(tp,"StructuredUniform");var qf=tp,Vf=/(\w+)(\])?(\[|\.)?/g;function tg(i,e){i.seq.push(e),i.map[e.id]=e}l(tg,"addUniform");function _S(i,e,t){let n=i.name,s=n.length;for(Vf.lastIndex=0;;){let r=Vf.exec(n),a=Vf.lastIndex,o=r[1],c=r[2]==="]",u=r[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===s){tg(t,u===void 0?new Wf(o,i,e):new Xf(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new qf(o),tg(t,f)),t=f}}}l(_S,"parseUniform");var np=class np{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);_S(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};l(np,"WebGLUniforms");var aa=np;function ng(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}l(ng,"WebGLShader");var vS=37297,yS=0;function bS(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}l(bS,"handleSource");var ig=new We;function MS(i){st._getMatrix(ig,st.workingColorSpace,i);let e=`mat3( ${ig.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(i)){case $a:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}l(MS,"getEncodingComponents");function sg(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+bS(i.getShaderSource(e),o)}else return r}l(sg,"getShaderErrors");function SS(i,e){let t=MS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}l(SS,"getTexelEncodingFunction");var wS={[sd]:"Linear",[rd]:"Reinhard",[ad]:"Cineon",[go]:"ACESFilmic",[ld]:"AgX",[cd]:"Neutral",[od]:"Custom"};function ES(i,e){let t=wS[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}l(ES,"getToneMappingFunction");var Iu=new W;function TS(){st.getLuminanceCoefficients(Iu);let i=Iu.x.toFixed(4),e=Iu.y.toFixed(4),t=Iu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}l(TS,"getLuminanceFunction");function AS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Eo).join(`
`)}l(AS,"generateVertexExtensions");function CS(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}l(CS,"generateDefines");function RS(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}l(RS,"fetchAttributeLocations");function Eo(i){return i!==""}l(Eo,"filterEmptyLine");function rg(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}l(rg,"replaceLightNums");function ag(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}l(ag,"replaceClippingPlaneNums");var PS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yf(i){return i.replace(PS,IS)}l(Yf,"resolveIncludes");function IS(i,e){let t=Je[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Yf(t)}l(IS,"includeReplacer");var LS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function og(i){return i.replace(LS,DS)}l(og,"unrollLoops");function DS(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}l(DS,"loopReplacer");function lg(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}l(lg,"generatePrecision");var NS={[mo]:"SHADOWMAP_TYPE_PCF",[na]:"SHADOWMAP_TYPE_VSM"};function US(i){return NS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}l(US,"generateShadowMapTypeDefine");var FS={[sa]:"ENVMAP_MODE_REFRACTION"};function OS(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":FS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}l(OS,"generateEnvMapModeDefine");var BS={[id]:"ENVMAP_BLENDING_MULTIPLY",[w0]:"ENVMAP_BLENDING_MIX",[E0]:"ENVMAP_BLENDING_ADD"};function zS(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":BS[i.combine]||"ENVMAP_BLENDING_NONE"}l(zS,"generateEnvMapBlendingDefine");function kS(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=US(t),u=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=OS(t),f=zS(t),d=AS(t),p=CS(r),x=s.createProgram(),y,_,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Eo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Eo).join(`
`),_.length>0&&(_+=`
`)):(y=[lg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eo).join(`
`),_=[lg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?Je.tonemapping_pars_fragment:"",t.toneMapping!==_i?ES("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,SS("linearToOutputTexel",t.outputColorSpace),TS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Eo).join(`
`)),a=Yf(a),a=rg(a,t),a=ag(a,t),o=Yf(o),o=rg(o,t),o=ag(o,t),a=og(a),o=og(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,y=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===Md?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Md?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let S=g+y+a,R=g+_+o,E=ng(s,s.VERTEX_SHADER,S),C=ng(s,s.FRAGMENT_SHADER,R);s.attachShader(x,E),s.attachShader(x,C),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(I){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(x)||"",V=s.getShaderInfoLog(E)||"",J=s.getShaderInfoLog(C)||"",L=B.trim(),K=V.trim(),ie=J.trim(),D=!0,z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(D=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,E,C);else{let F=sg(s,E,"vertex"),k=sg(s,C,"fragment");He("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+L+`
`+F+`
`+k)}else L!==""?Ge("WebGLProgram: Program Info Log:",L):(K===""||ie==="")&&(z=!1);z&&(I.diagnostics={runnable:D,programLog:L,vertexShader:{log:K,prefix:y},fragmentShader:{log:ie,prefix:_}})}s.deleteShader(E),s.deleteShader(C),v=new aa(s,x),w=RS(s,x)}l(T,"onFirstUse");let v;this.getUniforms=function(){return v===void 0&&T(this),v};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(x,vS)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yS++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=C,this}l(kS,"WebGLProgram");var GS=0,ip=class ip{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Zf(e),t.set(e,n)),n}};l(ip,"WebGLShaderCache");var $f=ip,sp=class sp{constructor(e){this.id=GS++,this.code=e,this.usedTimes=0}};l(sp,"WebGLShaderStage");var Zf=sp;function VS(i){return i===vi||i===Mo||i===So}l(VS,"isPackedRGFormat");function HS(i,e,t,n,s,r){let a=new Qa,o=new $f,c=new Set,u=[],h=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}l(p,"getChannel");function x(v,w,U,I,B,V){let J=I.fog,L=B.geometry,K=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,ie=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,D=e.get(v.envMap||K,ie),z=d[v.type],F=n.precision;v.precision!==null&&(F=n.getMaxPrecision(v.precision),F!==v.precision&&Ge("WebGLProgram.getParameters:",v.precision,"not supported, using",F,"instead."));let k=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Z=k!==void 0?k.length:0,se=0;L.morphAttributes.position!==void 0&&(se=1),L.morphAttributes.normal!==void 0&&(se=2),L.morphAttributes.color!==void 0&&(se=3);let de,q,he,te;if(z){let Te=bi[z];de=Te.vertexShader,q=Te.fragmentShader}else{de=v.vertexShader,q=v.fragmentShader;let Te=o.getVertexShaderStage(v),dt=o.getFragmentShaderStage(v);o.update(v,Te,dt),he=Te.id,te=dt.id}let ae=i.getRenderTarget(),ce=i.state.buffers.depth.getReversed(),Ae=B.isInstancedMesh===!0,qe=B.isBatchedMesh===!0,Pe=!!v.map,Ke=!!v.matcap,je=!!D,Be=je&&D.isPMREMTexture===!0,ut=!!v.aoMap,xt=!!v.lightMap,_t=!!v.bumpMap&&v.wireframe===!1,et=!!v.normalMap,Pt=!!v.displacementMap,Xe=!!v.emissiveMap,It=!!v.metalnessMap,At=!!v.roughnessMap,Ct=v.anisotropy>0,O=v.clearcoat>0,Bt=v.diffuseRoughness>0,at=v.dispersion>0,tt=v.retroreflectivity>0,me=v.iridescence>0,pt=v.sheen>0,Ue=v.transmission>0,ke=Ct&&!!v.anisotropyMap,A=O&&!!v.clearcoatMap,b=O&&!!v.clearcoatNormalMap,X=O&&!!v.clearcoatRoughnessMap,fe=Bt&&!!v.diffuseRoughnessMap,le=me&&!!v.iridescenceMap,xe=me&&!!v.iridescenceThicknessMap,Me=pt&&!!v.sheenColorMap,ne=pt&&!!v.sheenRoughnessMap,re=!!v.specularMap,ve=!!v.specularColorMap,P=!!v.specularIntensityMap,oe=Ue&&!!v.transmissionMap,ee=Ue&&!!v.thicknessMap,ye=!!v.gradientMap,ge=!!v.alphaMap,_e=v.alphaTest>0,Fe=!!v.alphaHash,Ze=!!v.extensions,pe=_i;v.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(pe=i.toneMapping);let ze=Be?D.isCompressedCubeTexture?D.image[0].mipmaps:D.mipmaps:null,$e={shaderID:z,shaderType:v.type,shaderName:v.name,vertexShader:de,fragmentShader:q,defines:v.defines,customVertexShaderID:he,customFragmentShaderID:te,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:F,batching:qe,batchingColor:qe&&B._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&B.instanceColor!==null,instancingMorph:Ae&&B.morphTexture!==null,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Pe,matcap:Ke,envMap:je,envMapMode:je&&D.mapping,envMapPMREM:Be,envMapMaxLod:Be?ze.length-1:null,envMapSize:Be?ze[0].width:null,aoMap:ut,lightMap:xt,bumpMap:_t,normalMap:et,displacementMap:Pt,emissiveMap:Xe,normalMapObjectSpace:et&&v.normalMapType===C0,normalMapTangentSpace:et&&v.normalMapType===Cu,packedNormalMap:et&&v.normalMapType===Cu&&VS(v.normalMap.format),metalnessMap:It,roughnessMap:At,anisotropy:Ct,anisotropyMap:ke,clearcoat:O,clearcoatMap:A,clearcoatNormalMap:b,clearcoatRoughnessMap:X,diffuseRoughness:Bt,diffuseRoughnessMap:fe,dispersion:at,retroreflection:tt,iridescence:me,iridescenceMap:le,iridescenceThicknessMap:xe,sheen:pt,sheenColorMap:Me,sheenRoughnessMap:ne,specularMap:re,specularColorMap:ve,specularIntensityMap:P,transmission:Ue,transmissionMap:oe,thicknessMap:ee,gradientMap:ye,opaque:v.transparent===!1&&v.blending===ia&&v.alphaToCoverage===!1,alphaMap:ge,alphaTest:_e,alphaHash:Fe,combine:v.combine,mapUv:Pe&&p(v.map.channel),aoMapUv:ut&&p(v.aoMap.channel),lightMapUv:xt&&p(v.lightMap.channel),bumpMapUv:_t&&p(v.bumpMap.channel),normalMapUv:et&&p(v.normalMap.channel),displacementMapUv:Pt&&p(v.displacementMap.channel),emissiveMapUv:Xe&&p(v.emissiveMap.channel),metalnessMapUv:It&&p(v.metalnessMap.channel),roughnessMapUv:At&&p(v.roughnessMap.channel),anisotropyMapUv:ke&&p(v.anisotropyMap.channel),clearcoatMapUv:A&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:b&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&p(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:fe&&p(v.diffuseRoughnessMap.channel),iridescenceMapUv:le&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:ne&&p(v.sheenRoughnessMap.channel),specularMapUv:re&&p(v.specularMap.channel),specularColorMapUv:ve&&p(v.specularColorMap.channel),specularIntensityMapUv:P&&p(v.specularIntensityMap.channel),transmissionMapUv:oe&&p(v.transmissionMap.channel),thicknessMapUv:ee&&p(v.thicknessMap.channel),alphaMapUv:ge&&p(v.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(et||Ct),vertexNormals:!!L.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!L.attributes.uv&&(Pe||ge),fog:!!J,useFog:v.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||L.attributes.normal===void 0&&et===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ce,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:se,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:V.filter(Te=>Te.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:Pe&&v.map.isVideoTexture===!0&&st.getTransfer(v.map.colorSpace)===ht,decodeVideoTextureEmissive:Xe&&v.emissiveMap.isVideoTexture===!0&&st.getTransfer(v.emissiveMap.colorSpace)===ht,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===xi,flipSided:v.side===xn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ze&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&v.extensions.multiDraw===!0||qe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return $e.vertexUv1s=c.has(1),$e.vertexUv2s=c.has(2),$e.vertexUv3s=c.has(3),c.clear(),$e}l(x,"getParameters");function y(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let U in v.defines)w.push(U),w.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(_(w,v),g(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}l(y,"getProgramCacheKey");function _(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapPMREM),v.push(w.envMapMaxLod),v.push(w.envMapSize),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.diffuseRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.numLightProbeGrids),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}l(_,"getProgramCacheKeyParameters");function g(v,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.diffuseRoughness&&a.enable(25),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),v.push(a.mask)}l(g,"getProgramCacheKeyBooleans");function S(v){let w=d[v.type],U;if(w){let I=bi[w];U=tr.clone(I.uniforms)}else U=v.uniforms;return U}l(S,"getUniforms");function R(v,w){let U=h.get(w);return U!==void 0?++U.usedTimes:(U=new kS(i,w,v,s),u.push(U),h.set(w,U)),U}l(R,"acquireProgram");function E(v){if(--v.usedTimes===0){let w=u.indexOf(v);u[w]=u[u.length-1],u.pop(),h.delete(v.cacheKey),v.destroy()}}l(E,"releaseProgram");function C(v){o.remove(v)}l(C,"releaseShaderCache");function T(){o.dispose()}return l(T,"dispose"),{getParameters:x,getProgramCacheKey:y,getUniforms:S,acquireProgram:R,releaseProgram:E,releaseShaderCache:C,programs:u,dispose:T}}l(HS,"WebGLPrograms");function WS(){let i=new WeakMap;function e(a){return i.has(a)}l(e,"has");function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}l(t,"get");function n(a){i.delete(a)}l(n,"remove");function s(a,o,c){i.get(a)[o]=c}l(s,"update");function r(){i=new WeakMap}return l(r,"dispose"),{has:e,get:t,remove:n,update:s,dispose:r}}l(WS,"WebGLProperties");function XS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}l(XS,"painterSortStable");function cg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}l(cg,"reversePainterSortStable");function ug(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}l(r,"init");function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}l(a,"materialVariant");function o(d,p,x,y,_,g){let S=i[e];return S===void 0?(S={id:d.id,object:d,geometry:p,material:x,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:_,group:g},i[e]=S):(S.id=d.id,S.object=d,S.geometry=p,S.material=x,S.materialVariant=a(d),S.groupOrder=y,S.renderOrder=d.renderOrder,S.z=_,S.group=g),e++,S}l(o,"getNextRenderItem");function c(d,p,x,y,_,g,S){S.reversedDepth===!0&&(_=-_);let R=o(d,p,x,y,_,g);x.transmission>0?n.push(R):x.transparent===!0?s.push(R):t.push(R)}l(c,"push");function u(d,p,x,y,_,g){let S=o(d,p,x,y,_,g);x.transmission>0?n.unshift(S):x.transparent===!0?s.unshift(S):t.unshift(S)}l(u,"unshift");function h(d,p){t.length>1&&t.sort(d||XS),n.length>1&&n.sort(p||cg),s.length>1&&s.sort(p||cg)}l(h,"sort");function f(){for(let d=e,p=i.length;d<p;d++){let x=i[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return l(f,"finish"),{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:u,finish:f,sort:h}}l(ug,"WebGLRenderList");function qS(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new ug,i.set(n,[a])):s>=r.length?(a=new ug,r.push(a)):a=r[s],a}l(e,"get");function t(){i=new WeakMap}return l(t,"dispose"),{get:e,dispose:t}}l(qS,"WebGLRenderLists");function YS(){let i={};return{get:l(function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new W,color:new Oe};break;case"SpotLight":t={position:new W,direction:new W,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t},"get")}}l(YS,"UniformsCache");function $S(){let i={};return{get:l(function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t},"get")}}l($S,"ShadowUniformsCache");var ZS=0;function JS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}l(JS,"shadowCastingAndTexturingLightsFirst");function KS(i){let e=new YS,t=$S(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new W);let s=new W,r=new ft,a=new ft;function o(u){let h=0,f=0,d=0;for(let V=0;V<9;V++)n.probe[V].set(0,0,0);let p=0,x=0,y=0,_=0,g=0,S=0,R=0,E=0,C=0,T=0,v=0,w=0,U=0,I=0;u.sort(JS);for(let V=0,J=u.length;V<J;V++){let L=u[V],K=L.color,ie=L.intensity,D=L.distance,z=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===vi?z=L.shadow.map.texture:z=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=K.r*ie,f+=K.g*ie,d+=K.b*ie;else if(L.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(L.sh.coefficients[F],ie);I++}else if(L.isSunLight){let F=e.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let k=L.shadow,Z=t.get(L);Z.shadowIntensity=k.intensity,Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),n.sunShadow[x]=Z,n.sunShadowMap[x]=z;let se=k.getViewportCount();for(let de=0;de<se;de++)n.sunShadowMatrix[y+de]=k.getMatrix(de),n.sunShadowCascade[y+de]=k._cascadeData[de];y+=se,x++}n.sun[p]=F,p++}else if(L.isDirectionalLight){let F=e.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let k=L.shadow,Z=t.get(L);Z.shadowIntensity=k.intensity,Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,n.directionalShadow[_]=Z,n.directionalShadowMap[_]=z,n.directionalShadowMatrix[_]=L.shadow.matrix,C++}n.directional[_]=F,_++}else if(L.isSpotLight){let F=e.get(L);F.position.setFromMatrixPosition(L.matrixWorld),F.color.copy(K).multiplyScalar(ie),F.distance=D,F.coneCos=Math.cos(L.angle),F.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),F.decay=L.decay,n.spot[S]=F;let k=L.shadow;if(L.map&&(n.spotLightMap[w]=L.map,w++,k.updateMatrices(L),L.castShadow&&U++),n.spotLightMatrix[S]=k.matrix,L.castShadow){let Z=t.get(L);Z.shadowIntensity=k.intensity,Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,n.spotShadow[S]=Z,n.spotShadowMap[S]=z,v++}S++}else if(L.isRectAreaLight){let F=e.get(L);F.color.copy(K).multiplyScalar(ie),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),n.rectArea[R]=F,R++}else if(L.isPointLight){let F=e.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity),F.distance=L.distance,F.decay=L.decay,L.castShadow){let k=L.shadow,Z=t.get(L);Z.shadowIntensity=k.intensity,Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,Z.shadowCameraNear=k.camera.near,Z.shadowCameraFar=k.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=L.shadow.matrix,T++}n.point[g]=F,g++}else if(L.isHemisphereLight){let F=e.get(L);F.skyColor.copy(L.color).multiplyScalar(ie),F.groundColor.copy(L.groundColor).multiplyScalar(ie),n.hemi[E]=F,E++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let B=n.hash;(B.sunLength!==p||B.directionalLength!==_||B.pointLength!==g||B.spotLength!==S||B.rectAreaLength!==R||B.hemiLength!==E||B.numSunShadows!==x||B.numDirectionalShadows!==C||B.numPointShadows!==T||B.numSpotShadows!==v||B.numSpotMaps!==w||B.numLightProbes!==I)&&(n.sun.length=p,n.directional.length=_,n.spot.length=S,n.rectArea.length=R,n.point.length=g,n.hemi.length=E,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+w-U,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=I,B.sunLength=p,B.directionalLength=_,B.pointLength=g,B.spotLength=S,B.rectAreaLength=R,B.hemiLength=E,B.numSunShadows=x,B.numDirectionalShadows=C,B.numPointShadows=T,B.numSpotShadows=v,B.numSpotMaps=w,B.numLightProbes=I,n.version=ZS++)}l(o,"setup");function c(u,h){let f=0,d=0,p=0,x=0,y=0,_=0,g=h.matrixWorldInverse;for(let S=0,R=u.length;S<R;S++){let E=u[S];if(E.isSunLight){let C=n.sun[f];C.direction.setFromMatrixPosition(E.matrixWorld),C.direction.transformDirection(g),f++}else if(E.isDirectionalLight){let C=n.directional[d];C.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),d++}else if(E.isSpotLight){let C=n.spot[x];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(g),C.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),x++}else if(E.isRectAreaLight){let C=n.rectArea[y];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(g),a.identity(),r.copy(E.matrixWorld),r.premultiply(g),a.extractRotation(r),C.halfWidth.set(E.width*.5,0,0),C.halfHeight.set(0,E.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),y++}else if(E.isPointLight){let C=n.point[p];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(g),p++}else if(E.isHemisphereLight){let C=n.hemi[_];C.direction.setFromMatrixPosition(E.matrixWorld),C.direction.transformDirection(g),_++}}}return l(c,"setupView"),{setup:o,setupView:c,state:n}}l(KS,"WebGLLights");function hg(i){let e=new KS(i),t=[],n=[],s=[];function r(f){h.camera=f,t.length=0,n.length=0,s.length=0}l(r,"init");function a(f){f.isLightProbeGrid?s.push(f):t.push(f)}l(a,"pushLight");function o(f){n.push(f)}l(o,"pushShadow");function c(){e.setup(t),s.sort((f,d)=>f.priority-d.priority||f.id-d.id)}l(c,"setupLights");function u(f){e.setupView(t,f)}l(u,"setupLightsView");let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o}}l(hg,"WebGLRenderState");function QS(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new hg(i),e.set(s,[o])):r>=a.length?(o=new hg(i),a.push(o)):o=a[r],o}l(t,"get");function n(){e=new WeakMap}return l(n,"dispose"),{get:t,dispose:n}}l(QS,"WebGLRenderStates");var jS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ew=`uniform sampler2D shadow_pass;
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
}`,tw=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],nw=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],dg=new ft,wo=new W,Hf=new W;function iw(i,e,t){let n=new _s,s=new Ve,r=new Ve,a=new St,o=new dc,c=new fc,u={},h=t.maxTextureSize,f={[Es]:xn,[xn]:Es,[xi]:xi},d=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:jS,fragmentShader:ew}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let x=new Ft;x.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new wt(x,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mo;let g=this.type;this.render=function(T,v,w){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||T.length===0)return;this.type===Vc&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=mo);let U=i.getRenderTarget(),I=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Zs),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let J=g!==this.type;J&&v.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(K=>K.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,K=T.length;L<K;L++){let ie=T[L],D=ie.shadow;if(D===void 0){Ge("WebGLShadowMap:",ie,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);let z=D.getFrameExtents();s.multiply(z),r.copy(D.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/z.x),s.x=r.x*z.x,D.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/z.y),s.y=r.y*z.y,D.mapSize.y=r.y));let F=i.state.buffers.depth.getReversed();if(D.camera._reversedDepth=F,D.map===null||J===!0){if(D.map!==null&&(D.map.depthTexture!==null&&(D.map.depthTexture.dispose(),D.map.depthTexture=null),D.map.dispose()),this.type===na){if(ie.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}D.map=new An(s.x,s.y,{format:vi,type:Pn,minFilter:Xt,magFilter:Xt,generateMipmaps:!1}),D.map.texture.name=ie.name+".shadowMap",D.map.depthTexture=new Wi(s.x,s.y,jn),D.map.depthTexture.name=ie.name+".shadowMapDepth",D.map.depthTexture.format=Gi,D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Ut,D.map.depthTexture.magFilter=Ut}else ie.isPointLight?(D.map=new To(s.x),D.map.depthTexture=new ro(s.x,Qn)):(D.map=new An(s.x,s.y),D.map.depthTexture=new Wi(s.x,s.y,Qn)),D.map.depthTexture.name=ie.name+".shadowMap",D.map.depthTexture.format=Gi,this.type===mo?(D.map.depthTexture.compareFunction=F?vd:_d,D.map.depthTexture.minFilter=Xt,D.map.depthTexture.magFilter=Xt):(D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Ut,D.map.depthTexture.magFilter=Ut);D.camera.updateProjectionMatrix()}D.map.isWebGLCubeRenderTarget!==!0&&(D.map.width!==s.x||D.map.height!==s.y)&&D.map.setSize(s.x,s.y);let k=D.map.isWebGLCubeRenderTarget?6:D.getViewportCount();ie.isPointLight!==!0&&D.updateMatrices(ie,w);let Z=(D.camera.layers.mask&4294967294)!==0?D.camera.layers:w.layers;for(let se=0;se<k;se++){let de=D.getCamera(se);if(ie.isPointLight){let q=D.camera,he=D.matrix,te=ie.distance||q.far;te!==q.far&&(q.far=te,q.updateProjectionMatrix()),wo.setFromMatrixPosition(ie.matrixWorld),q.position.copy(wo),Hf.copy(q.position),Hf.add(tw[se]),q.up.copy(nw[se]),q.lookAt(Hf),q.updateMatrixWorld(),he.makeTranslation(-wo.x,-wo.y,-wo.z),dg.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),D._frustum.setFromProjectionMatrix(dg,q.coordinateSystem,q.reversedDepth)}if(D.map.isWebGLCubeRenderTarget)i.setRenderTarget(D.map,se),i.clear();else{se===0&&(i.setRenderTarget(D.map),i.clear());let q=D.getViewport(se);a.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),V.viewport(a)}n=D.getFrustum(se),E(v,w,de,ie,Z,this.type)}D.isPointLightShadow!==!0&&this.type===na&&S(D,w),D.needsUpdate=!1}g=this.type,_.needsUpdate=!1,i.setRenderTarget(U,I,B)};function S(T,v){let w=e.update(y);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new An(s.x,s.y,{format:vi,type:Pn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(v,null,w,d,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(v,null,w,p,y,null)}l(S,"VSMPass");function R(T,v,w,U){let I=null,B=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(B!==void 0)I=B;else if(I=w.isPointLight===!0?c:o,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let V=I.uuid,J=v.uuid,L=u[V];L===void 0&&(L={},u[V]=L);let K=L[J];K===void 0&&(K=I.clone(),L[J]=K,v.addEventListener("dispose",C)),I=K}if(I.visible=v.visible,I.wireframe=v.wireframe,U===na?I.side=v.shadowSide!==null?v.shadowSide:v.side:I.side=v.shadowSide!==null?v.shadowSide:f[v.side],I.alphaMap=v.alphaMap,I.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,I.map=v.map,I.clipShadows=v.clipShadows,I.clippingPlanes=v.clippingPlanes,I.clipIntersection=v.clipIntersection,I.displacementMap=v.displacementMap,I.displacementScale=v.displacementScale,I.displacementBias=v.displacementBias,I.wireframeLinewidth=v.wireframeLinewidth,I.linewidth=v.linewidth,w.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let V=i.properties.get(I);V.light=w}return I}l(R,"getDepthMaterial");function E(T,v,w,U,I,B){if(T.visible===!1)return;if(T.layers.test(I)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&B===na)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);let L=e.update(T),K=T.material;if(Array.isArray(K)){let ie=L.groups;for(let D=0,z=ie.length;D<z;D++){let F=ie[D],k=K[F.materialIndex];if(k&&k.visible){let Z=R(T,k,U,B);T.onBeforeShadow(i,T,v,w,L,Z,F),i.renderBufferDirect(w,null,L,Z,T,F),T.onAfterShadow(i,T,v,w,L,Z,F)}}}else if(K.visible){let ie=R(T,K,U,B);T.onBeforeShadow(i,T,v,w,L,ie,null),i.renderBufferDirect(w,null,L,ie,T,null),T.onAfterShadow(i,T,v,w,L,ie,null)}}let J=T.children;for(let L=0,K=J.length;L<K;L++)E(J[L],v,w,U,I,B)}l(E,"renderObject");function C(T){T.target.removeEventListener("dispose",C);for(let w in u){let U=u[w],I=T.target.uuid;I in U&&(U[I].dispose(),delete U[I])}}l(C,"onMaterialDispose")}l(iw,"WebGLShadowMap");function sw(i,e){function t(){let P=!1,oe=new St,ee=null,ye=new St(0,0,0,0);return{setMask:l(function(ge){ee!==ge&&!P&&(i.colorMask(ge,ge,ge,ge),ee=ge)},"setMask"),setLocked:l(function(ge){P=ge},"setLocked"),setClear:l(function(ge,_e,Fe,Ze,pe){pe===!0&&(ge*=Ze,_e*=Ze,Fe*=Ze),oe.set(ge,_e,Fe,Ze),ye.equals(oe)===!1&&(i.clearColor(ge,_e,Fe,Ze),ye.copy(oe))},"setClear"),reset:l(function(){P=!1,ee=null,ye.set(-1,0,0,0)},"reset")}}l(t,"ColorBuffer");function n(){let P=!1,oe=!1,ee=null,ye=null,ge=null;return{setReversed:l(function(_e){if(oe!==_e){let Fe=e.get("EXT_clip_control");_e?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),oe=_e;let Ze=ge;ge=null,this.setClear(Ze)}},"setReversed"),getReversed:l(function(){return oe},"getReversed"),setTest:l(function(_e){_e?ce(i.DEPTH_TEST):Ae(i.DEPTH_TEST)},"setTest"),setMask:l(function(_e){ee!==_e&&!P&&(i.depthMask(_e),ee=_e)},"setMask"),setFunc:l(function(_e){if(oe&&(_e=B0[_e]),ye!==_e){switch(_e){case Zl:i.depthFunc(i.NEVER);break;case Jl:i.depthFunc(i.ALWAYS);break;case Kl:i.depthFunc(i.LESS);break;case qr:i.depthFunc(i.LEQUAL);break;case Ql:i.depthFunc(i.EQUAL);break;case jl:i.depthFunc(i.GEQUAL);break;case ec:i.depthFunc(i.GREATER);break;case tc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ye=_e}},"setFunc"),setLocked:l(function(_e){P=_e},"setLocked"),setClear:l(function(_e){ge!==_e&&(ge=_e,oe&&(_e=1-_e),i.clearDepth(_e))},"setClear"),reset:l(function(){P=!1,ee=null,ye=null,ge=null,oe=!1},"reset")}}l(n,"DepthBuffer");function s(){let P=!1,oe=null,ee=null,ye=null,ge=null,_e=null,Fe=null,Ze=null,pe=null;return{setTest:l(function(ze){P||(ze?ce(i.STENCIL_TEST):Ae(i.STENCIL_TEST))},"setTest"),setMask:l(function(ze){oe!==ze&&!P&&(i.stencilMask(ze),oe=ze)},"setMask"),setFunc:l(function(ze,$e,Te){(ee!==ze||ye!==$e||ge!==Te)&&(i.stencilFunc(ze,$e,Te),ee=ze,ye=$e,ge=Te)},"setFunc"),setOp:l(function(ze,$e,Te){(_e!==ze||Fe!==$e||Ze!==Te)&&(i.stencilOp(ze,$e,Te),_e=ze,Fe=$e,Ze=Te)},"setOp"),setLocked:l(function(ze){P=ze},"setLocked"),setClear:l(function(ze){pe!==ze&&(i.clearStencil(ze),pe=ze)},"setClear"),reset:l(function(){P=!1,oe=null,ee=null,ye=null,ge=null,_e=null,Fe=null,Ze=null,pe=null},"reset")}}l(s,"StencilBuffer");let r=new t,a=new n,o=new s,c={},u=new WeakMap,h={},f={},d={},p=new WeakMap,x=[],y=null,_=!1,g=null,S=null,R=null,E=null,C=null,T=null,v=null,w=new Oe(0,0,0),U=0,I=!1,B=null,V=null,J=null,L=null,K=null,ie=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,z=0,F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(F)[1]),D=z>=1):F.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),D=z>=2);let k=null,Z={},se=i.getParameter(i.SCISSOR_BOX),de=i.getParameter(i.VIEWPORT),q=new St().fromArray(se),he=new St().fromArray(de);function te(P,oe,ee,ye){let ge=new Uint8Array(4),_e=i.createTexture();i.bindTexture(P,_e),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<ee;Fe++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,ye,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(oe+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return _e}l(te,"createTexture");let ae={};ae[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ce(i.DEPTH_TEST),a.setFunc(qr),_t(!1),et(Kh),ce(i.CULL_FACE),ut(Zs);function ce(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}l(ce,"enable");function Ae(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}l(Ae,"disable");function qe(P,oe){return d[P]!==oe?(i.bindFramebuffer(P,oe),d[P]=oe,P===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=oe),P===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=oe),!0):!1}l(qe,"bindFramebuffer");function Pe(P,oe){let ee=x,ye=!1;if(P){ee=p.get(oe),ee===void 0&&(ee=[],p.set(oe,ee));let ge=P.textures;if(ee.length!==ge.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let _e=0,Fe=ge.length;_e<Fe;_e++)ee[_e]=i.COLOR_ATTACHMENT0+_e;ee.length=ge.length,ye=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,ye=!0);ye&&i.drawBuffers(ee)}l(Pe,"drawBuffers");function Ke(P){return y!==P?(i.useProgram(P),y=P,!0):!1}l(Ke,"useProgram");let je={[Js]:i.FUNC_ADD,[o0]:i.FUNC_SUBTRACT,[l0]:i.FUNC_REVERSE_SUBTRACT};je[c0]=i.MIN,je[u0]=i.MAX;let Be={[h0]:i.ZERO,[d0]:i.ONE,[f0]:i.SRC_COLOR,[td]:i.SRC_ALPHA,[v0]:i.SRC_ALPHA_SATURATE,[x0]:i.DST_COLOR,[m0]:i.DST_ALPHA,[p0]:i.ONE_MINUS_SRC_COLOR,[nd]:i.ONE_MINUS_SRC_ALPHA,[_0]:i.ONE_MINUS_DST_COLOR,[g0]:i.ONE_MINUS_DST_ALPHA,[y0]:i.CONSTANT_COLOR,[b0]:i.ONE_MINUS_CONSTANT_COLOR,[M0]:i.CONSTANT_ALPHA,[S0]:i.ONE_MINUS_CONSTANT_ALPHA};function ut(P,oe,ee,ye,ge,_e,Fe,Ze,pe,ze){if(P===Zs){_===!0&&(Ae(i.BLEND),_=!1);return}if(_===!1&&(ce(i.BLEND),_=!0),P!==a0){if(P!==g||ze!==I){if((S!==Js||C!==Js)&&(i.blendEquation(i.FUNC_ADD),S=Js,C=Js),ze)switch(P){case ia:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qh:i.blendFunc(i.ONE,i.ONE);break;case jh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ed:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:He("WebGLState: Invalid blending: ",P);break}else switch(P){case ia:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case jh:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ed:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",P);break}R=null,E=null,T=null,v=null,w.set(0,0,0),U=0,g=P,I=ze}return}ge=ge||oe,_e=_e||ee,Fe=Fe||ye,(oe!==S||ge!==C)&&(i.blendEquationSeparate(je[oe],je[ge]),S=oe,C=ge),(ee!==R||ye!==E||_e!==T||Fe!==v)&&(i.blendFuncSeparate(Be[ee],Be[ye],Be[_e],Be[Fe]),R=ee,E=ye,T=_e,v=Fe),(Ze.equals(w)===!1||pe!==U)&&(i.blendColor(Ze.r,Ze.g,Ze.b,pe),w.copy(Ze),U=pe),g=P,I=!1}l(ut,"setBlending");function xt(P,oe){P.side===xi?Ae(i.CULL_FACE):ce(i.CULL_FACE);let ee=P.side===xn;oe&&(ee=!ee),_t(ee),P.blending===ia&&P.transparent===!1?ut(Zs):ut(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let ye=P.stencilWrite;o.setTest(ye),ye&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Xe(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):Ae(i.SAMPLE_ALPHA_TO_COVERAGE)}l(xt,"setMaterial");function _t(P){B!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),B=P)}l(_t,"setFlipSided");function et(P){P!==s0?(ce(i.CULL_FACE),P!==V&&(P===Kh?i.cullFace(i.BACK):P===r0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ae(i.CULL_FACE),V=P}l(et,"setCullFace");function Pt(P){P!==J&&(D&&i.lineWidth(P),J=P)}l(Pt,"setLineWidth");function Xe(P,oe,ee){P?(ce(i.POLYGON_OFFSET_FILL),(L!==oe||K!==ee)&&(L=oe,K=ee,a.getReversed()&&(oe=-oe,ee=-ee),i.polygonOffset(oe,ee))):Ae(i.POLYGON_OFFSET_FILL)}l(Xe,"setPolygonOffset");function It(P){P?ce(i.SCISSOR_TEST):Ae(i.SCISSOR_TEST)}l(It,"setScissorTest");function At(P){P===void 0&&(P=i.TEXTURE0+ie-1),k!==P&&(i.activeTexture(P),k=P)}l(At,"activeTexture");function Ct(P,oe,ee){ee===void 0&&(k===null?ee=i.TEXTURE0+ie-1:ee=k);let ye=Z[ee];ye===void 0&&(ye={type:void 0,texture:void 0},Z[ee]=ye),(ye.type!==P||ye.texture!==oe)&&(k!==ee&&(i.activeTexture(ee),k=ee),i.bindTexture(P,oe||ae[P]),ye.type=P,ye.texture=oe)}l(Ct,"bindTexture");function O(){let P=Z[k];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}l(O,"unbindTexture");function Bt(){try{i.compressedTexImage2D(...arguments)}catch(P){He("WebGLState:",P)}}l(Bt,"compressedTexImage2D");function at(){try{i.compressedTexImage3D(...arguments)}catch(P){He("WebGLState:",P)}}l(at,"compressedTexImage3D");function tt(){try{i.texSubImage2D(...arguments)}catch(P){He("WebGLState:",P)}}l(tt,"texSubImage2D");function me(){try{i.texSubImage3D(...arguments)}catch(P){He("WebGLState:",P)}}l(me,"texSubImage3D");function pt(){try{i.compressedTexSubImage2D(...arguments)}catch(P){He("WebGLState:",P)}}l(pt,"compressedTexSubImage2D");function Ue(){try{i.compressedTexSubImage3D(...arguments)}catch(P){He("WebGLState:",P)}}l(Ue,"compressedTexSubImage3D");function ke(){try{i.texStorage2D(...arguments)}catch(P){He("WebGLState:",P)}}l(ke,"texStorage2D");function A(){try{i.texStorage3D(...arguments)}catch(P){He("WebGLState:",P)}}l(A,"texStorage3D");function b(){try{i.texImage2D(...arguments)}catch(P){He("WebGLState:",P)}}l(b,"texImage2D");function X(){try{i.texImage3D(...arguments)}catch(P){He("WebGLState:",P)}}l(X,"texImage3D");function fe(P){return f[P]!==void 0?f[P]:i.getParameter(P)}l(fe,"getParameter");function le(P,oe){f[P]!==oe&&(i.pixelStorei(P,oe),f[P]=oe)}l(le,"pixelStorei");function xe(P){q.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),q.copy(P))}l(xe,"scissor");function Me(P){he.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),he.copy(P))}l(Me,"viewport");function ne(P,oe){let ee=u.get(oe);ee===void 0&&(ee=new WeakMap,u.set(oe,ee));let ye=ee.get(P);ye===void 0&&(ye=i.getUniformBlockIndex(oe,P.name),i.uniformBlockBinding(oe,ye,ye),ee.set(P,ye))}l(ne,"updateUBOMapping");function re(P,oe,ee){let ge=u.get(oe).get(P);c[ge]!==ee&&(i.bindBufferBase(i.UNIFORM_BUFFER,ge,ee),c[ge]=ee)}l(re,"uniformBlockBinding");function ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},k=null,Z={},d={},c={},p=new WeakMap,x=[],y=null,_=!1,g=null,S=null,R=null,E=null,C=null,T=null,v=null,w=new Oe(0,0,0),U=0,I=!1,B=null,V=null,J=null,L=null,K=null,q.set(0,0,i.canvas.width,i.canvas.height),he.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return l(ve,"reset"),{buffers:{color:r,depth:a,stencil:o},enable:ce,disable:Ae,bindFramebuffer:qe,drawBuffers:Pe,useProgram:Ke,setBlending:ut,setMaterial:xt,setFlipSided:_t,setCullFace:et,setLineWidth:Pt,setPolygonOffset:Xe,setScissorTest:It,activeTexture:At,bindTexture:Ct,unbindTexture:O,compressedTexImage2D:Bt,compressedTexImage3D:at,texImage2D:b,texImage3D:X,pixelStorei:le,getParameter:fe,updateUBOMapping:ne,uniformBlockBinding:re,texStorage2D:ke,texStorage3D:A,texSubImage2D:tt,texSubImage3D:me,compressedTexSubImage2D:pt,compressedTexSubImage3D:Ue,scissor:xe,viewport:Me,reset:ve}}l(sw,"WebGLState");function rw(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ve,h=new WeakMap,f=new Set,d,p=new WeakMap,x=new Set,y=new FinalizationRegistry(A=>x.delete(A)),_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,b){return _?new OffscreenCanvas(A,b):Za("canvas")}l(g,"createCanvas");function S(A,b,X){let fe=1,le=ke(A);if((le.width>X||le.height>X)&&(fe=X/Math.max(le.width,le.height)),fe<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let xe=Math.floor(fe*le.width),Me=Math.floor(fe*le.height);d===void 0&&(d=g(xe,Me));let ne=b?g(xe,Me):d;return ne.width=xe,ne.height=Me,ne.getContext("2d").drawImage(A,0,0,xe,Me),Ge("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+xe+"x"+Me+")."),ne}else return"data"in A&&Ge("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),A;return A}l(S,"resizeImage");function R(A){return A.generateMipmaps}l(R,"textureNeedsGenerateMipmaps");function E(A){i.generateMipmap(A)}l(E,"generateMipmap");function C(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}l(C,"getTargetType");function T(A,b,X,fe,le,xe=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Me;fe&&(Me=e.get("EXT_texture_norm16"),Me||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=b;if(b===i.RED&&(X===i.FLOAT&&(ne=i.R32F),X===i.HALF_FLOAT&&(ne=i.R16F),X===i.UNSIGNED_BYTE&&(ne=i.R8),X===i.UNSIGNED_SHORT&&Me&&(ne=Me.R16_EXT),X===i.SHORT&&Me&&(ne=Me.R16_SNORM_EXT)),b===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(ne=i.R8UI),X===i.UNSIGNED_SHORT&&(ne=i.R16UI),X===i.UNSIGNED_INT&&(ne=i.R32UI),X===i.BYTE&&(ne=i.R8I),X===i.SHORT&&(ne=i.R16I),X===i.INT&&(ne=i.R32I)),b===i.RG&&(X===i.FLOAT&&(ne=i.RG32F),X===i.HALF_FLOAT&&(ne=i.RG16F),X===i.UNSIGNED_BYTE&&(ne=i.RG8),X===i.UNSIGNED_SHORT&&Me&&(ne=Me.RG16_EXT),X===i.SHORT&&Me&&(ne=Me.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(ne=i.RG8UI),X===i.UNSIGNED_SHORT&&(ne=i.RG16UI),X===i.UNSIGNED_INT&&(ne=i.RG32UI),X===i.BYTE&&(ne=i.RG8I),X===i.SHORT&&(ne=i.RG16I),X===i.INT&&(ne=i.RG32I)),b===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),X===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),X===i.UNSIGNED_INT&&(ne=i.RGB32UI),X===i.BYTE&&(ne=i.RGB8I),X===i.SHORT&&(ne=i.RGB16I),X===i.INT&&(ne=i.RGB32I)),b===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),X===i.UNSIGNED_INT&&(ne=i.RGBA32UI),X===i.BYTE&&(ne=i.RGBA8I),X===i.SHORT&&(ne=i.RGBA16I),X===i.INT&&(ne=i.RGBA32I)),b===i.RGB&&(X===i.UNSIGNED_SHORT&&Me&&(ne=Me.RGB16_EXT),X===i.SHORT&&Me&&(ne=Me.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(ne=i.R11F_G11F_B10F)),b===i.RGBA){let re=xe?$a:st.getTransfer(le);X===i.FLOAT&&(ne=i.RGBA32F),X===i.HALF_FLOAT&&(ne=i.RGBA16F),X===i.UNSIGNED_BYTE&&(ne=re===ht?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&Me&&(ne=Me.RGBA16_EXT),X===i.SHORT&&Me&&(ne=Me.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}l(T,"getInternalFormat");function v(A,b){let X;return A?b===null||b===Qn||b===Qs?X=i.DEPTH24_STENCIL8:b===jn?X=i.DEPTH32F_STENCIL8:b===ra&&(X=i.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Qn||b===Qs?X=i.DEPTH_COMPONENT24:b===jn?X=i.DEPTH_COMPONENT32F:b===ra&&(X=i.DEPTH_COMPONENT16),X}l(v,"getInternalDepthFormat");function w(A,b){return R(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ut&&A.minFilter!==Xt?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}l(w,"getMipLevels");function U(A){let b=new WeakRef(A);n.get(A).__ref=b,x.add(b),y.register(A,b,b)}l(U,"track");function I(A){let b=n.get(A).__ref;b!==void 0&&(x.delete(b),y.unregister(b))}l(I,"untrack");function B(A){J(A.target)}l(B,"onTextureDispose");function V(A){L(A.target)}l(V,"onRenderTargetDispose");function J(A){A.removeEventListener("dispose",B),I(A),ie(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&f.delete(A)}l(J,"destroyTexture");function L(A){A.removeEventListener("dispose",V),I(A),z(A)}l(L,"destroyRenderTarget");function K(){for(let A of x){let b=A.deref();b!==void 0&&(b.isRenderTarget===!0?L(b):J(b))}x.clear(),f.clear()}l(K,"dispose");function ie(A){let b=n.get(A);if(b.__webglInit===void 0)return;let X=A.source,fe=p.get(X);if(fe){let le=fe[b.__cacheKey];le.usedTimes--,le.usedTimes===0&&D(A),Object.keys(fe).length===0&&p.delete(X)}n.remove(A)}l(ie,"deallocateTexture");function D(A){let b=n.get(A);i.deleteTexture(b.__webglTexture);let X=A.source,fe=p.get(X);delete fe[b.__cacheKey],a.memory.textures--}l(D,"deleteTexture");function z(A){let b=n.get(A);b.__depthDisposeCallback&&b.__depthDisposeCallback();let X=A.depthTexture;if(X&&X.renderTarget===A&&J(X),A.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(b.__webglFramebuffer[le]))for(let xe=0;xe<b.__webglFramebuffer[le].length;xe++)i.deleteFramebuffer(b.__webglFramebuffer[le][xe]);else i.deleteFramebuffer(b.__webglFramebuffer[le]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[le])}else{if(Array.isArray(b.__webglFramebuffer))for(let le=0;le<b.__webglFramebuffer.length;le++)i.deleteFramebuffer(b.__webglFramebuffer[le]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let le=0;le<b.__webglColorRenderbuffer.length;le++)b.__webglColorRenderbuffer[le]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[le]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let fe=A.textures;for(let le=0,xe=fe.length;le<xe;le++){let Me=n.get(fe[le]);Me.__webglTexture&&(i.deleteTexture(Me.__webglTexture),a.memory.textures--),n.remove(fe[le])}n.remove(A)}l(z,"deallocateRenderTarget");let F=0;function k(){F=0}l(k,"resetTextureUnits");function Z(){return F}l(Z,"getTextureUnits");function se(A){F=A}l(se,"setTextureUnits");function de(){let A=F;return A>=s.maxTextures&&Ge("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,A}l(de,"allocateTextureUnit");function q(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.mipmapsAutoUpdate),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}l(q,"getTextureCacheKey");function he(A,b){let X=n.get(A);if(A.isVideoTexture&&pt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&X.__version!==A.version){let fe=A.image;if(fe===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(X,A,b);return}}else A.isExternalTexture&&(X.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+b)}l(he,"setTexture2D");function te(A,b){let X=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&X.__version!==A.version){xt(X,A,b);return}else A.isExternalTexture&&(X.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+b)}l(te,"setTexture2DArray");function ae(A,b){let X=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&X.__version!==A.version){xt(X,A,b);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+b)}l(ae,"setTexture3D");function ce(A,b){let X=n.get(A);if(A.version>0&&X.__version!==A.version){_t(X,A,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+b)}l(ce,"setTextureCube");let Ae={[$s]:i.REPEAT,[Gn]:i.CLAMP_TO_EDGE,[nc]:i.MIRRORED_REPEAT},qe={[Ut]:i.NEAREST,[T0]:i.NEAREST_MIPMAP_NEAREST,[xo]:i.NEAREST_MIPMAP_LINEAR,[Xt]:i.LINEAR,[Xc]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},Pe={[P0]:i.NEVER,[yd]:i.ALWAYS,[I0]:i.LESS,[_d]:i.LEQUAL,[L0]:i.EQUAL,[vd]:i.GEQUAL,[D0]:i.GREATER,[N0]:i.NOTEQUAL};function Ke(A,b){if(b.type===jn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Xt||b.magFilter===Xc||b.magFilter===xo||b.magFilter===Kn||b.minFilter===Xt||b.minFilter===Xc||b.minFilter===xo||b.minFilter===Kn)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Ae[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Ae[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Ae[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,qe[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,qe[b.minFilter]),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Pe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ut||b.minFilter!==xo&&b.minFilter!==Kn||b.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}l(Ke,"setTextureParameters");function je(A,b){let X=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",B),U(b));let fe=b.source,le=p.get(fe);le===void 0&&(le={},p.set(fe,le));let xe=q(b);if(xe!==A.__cacheKey){le[xe]===void 0&&(le[xe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),le[xe].usedTimes++;let Me=le[A.__cacheKey];Me!==void 0&&(le[A.__cacheKey].usedTimes--,Me.usedTimes===0&&D(b)),A.__cacheKey=xe,A.__webglTexture=le[xe].texture}return X}l(je,"initTexture");function Be(A,b,X){return Math.floor(Math.floor(A/X)/b)}l(Be,"getRow");function ut(A,b,X,fe){let xe=A.updateRanges;if(xe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,X,fe,b.data);else{xe.sort((P,oe)=>P.start-oe.start);let Me=0;for(let P=1;P<xe.length;P++){let oe=xe[Me],ee=xe[P],ye=oe.start+oe.count,ge=Be(ee.start,b.width,4),_e=Be(oe.start,b.width,4);ee.start<=ye+1&&ge===_e&&Be(ee.start+ee.count-1,b.width,4)===ge?oe.count=Math.max(oe.count,ee.start+ee.count-oe.start):(++Me,xe[Me]=ee)}xe.length=Me+1;let ne=t.getParameter(i.UNPACK_ROW_LENGTH),re=t.getParameter(i.UNPACK_SKIP_PIXELS),ve=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let P=0,oe=xe.length;P<oe;P++){let ee=xe[P],ye=Math.floor(ee.start/4),ge=Math.ceil(ee.count/4),_e=ye%b.width,Fe=Math.floor(ye/b.width),Ze=ge,pe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(i.UNPACK_SKIP_ROWS,Fe),t.texSubImage2D(i.TEXTURE_2D,0,_e,Fe,Ze,pe,X,fe,b.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ne),t.pixelStorei(i.UNPACK_SKIP_PIXELS,re),t.pixelStorei(i.UNPACK_SKIP_ROWS,ve)}}l(ut,"updateTexture");function xt(A,b,X){let fe=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(fe=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(fe=i.TEXTURE_3D);let le=je(A,b),xe=b.source;t.bindTexture(fe,A.__webglTexture,i.TEXTURE0+X);let Me=n.get(xe);if(xe.version!==Me.__version||le===!0){if(t.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let pe=st.getPrimaries(st.workingColorSpace),ze=b.colorSpace===Yi?null:st.getPrimaries(b.colorSpace),$e=b.colorSpace===Yi||pe===ze?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let re=S(b.image,!1,s.maxTextureSize);re=Ue(b,re);let ve=r.convert(b.format,b.colorSpace),P=r.convert(b.type),oe=T(b.internalFormat,ve,P,b.normalized,b.colorSpace,b.isVideoTexture);Ke(fe,b);let ee,ye=b.mipmaps,ge=b.isVideoTexture!==!0,_e=Me.__version===void 0||le===!0,Fe=xe.dataReady,Ze=w(b,re);if(b.isDepthTexture)oe=v(b.format===qi,b.type),_e&&(ge?t.texStorage2D(i.TEXTURE_2D,1,oe,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,oe,re.width,re.height,0,ve,P,null));else if(b.isDataTexture)if(ye.length>0){ge&&_e&&t.texStorage2D(i.TEXTURE_2D,Ze,oe,ye[0].width,ye[0].height);for(let pe=0,ze=ye.length;pe<ze;pe++)ee=ye[pe],ge?Fe&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,ee.width,ee.height,ve,P,ee.data):t.texImage2D(i.TEXTURE_2D,pe,oe,ee.width,ee.height,0,ve,P,ee.data);b.generateMipmaps=!1}else ge?(_e&&t.texStorage2D(i.TEXTURE_2D,Ze,oe,re.width,re.height),Fe&&ut(b,re,ve,P)):t.texImage2D(i.TEXTURE_2D,0,oe,re.width,re.height,0,ve,P,re.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ge&&_e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ze,oe,ye[0].width,ye[0].height,re.depth);for(let pe=0,ze=ye.length;pe<ze;pe++)if(ee=ye[pe],b.format!==ei)if(ve!==null)if(ge){if(Fe)if(b.layerUpdates.size>0){let $e=Td(ee.width,ee.height,b.format,b.type);for(let Te of b.layerUpdates){let dt=ee.data.subarray(Te*$e/ee.data.BYTES_PER_ELEMENT,(Te+1)*$e/ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,Te,ee.width,ee.height,1,ve,dt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,ee.width,ee.height,re.depth,ve,ee.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pe,oe,ee.width,ee.height,re.depth,0,ee.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ge?Fe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,ee.width,ee.height,re.depth,ve,P,ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,pe,oe,ee.width,ee.height,re.depth,0,ve,P,ee.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{ge&&_e&&t.texStorage2D(i.TEXTURE_2D,Ze,oe,ye[0].width,ye[0].height);for(let pe=0,ze=ye.length;pe<ze;pe++)ee=ye[pe],b.format!==ei?ve!==null?ge?Fe&&t.compressedTexSubImage2D(i.TEXTURE_2D,pe,0,0,ee.width,ee.height,ve,ee.data):t.compressedTexImage2D(i.TEXTURE_2D,pe,oe,ee.width,ee.height,0,ee.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?Fe&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,ee.width,ee.height,ve,P,ee.data):t.texImage2D(i.TEXTURE_2D,pe,oe,ee.width,ee.height,0,ve,P,ee.data)}else if(b.isDataArrayTexture)if(ge){if(_e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ze,oe,re.width,re.height,re.depth),Fe)if(b.layerUpdates.size>0){let pe=Td(re.width,re.height,b.format,b.type);for(let ze of b.layerUpdates){let $e=re.data.subarray(ze*pe/re.data.BYTES_PER_ELEMENT,(ze+1)*pe/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ze,re.width,re.height,1,ve,P,$e)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ve,P,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,oe,re.width,re.height,re.depth,0,ve,P,re.data);else if(b.isData3DTexture)ge?(_e&&t.texStorage3D(i.TEXTURE_3D,Ze,oe,re.width,re.height,re.depth),Fe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ve,P,re.data)):t.texImage3D(i.TEXTURE_3D,0,oe,re.width,re.height,re.depth,0,ve,P,re.data);else if(b.isFramebufferTexture){if(_e)if(ge)t.texStorage2D(i.TEXTURE_2D,Ze,oe,re.width,re.height);else{let pe=re.width,ze=re.height;for(let $e=0;$e<Ze;$e++)t.texImage2D(i.TEXTURE_2D,$e,oe,pe,ze,0,ve,P,null),pe>>=1,ze>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let pe=i.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),re.parentNode!==pe){pe.appendChild(re),f.add(b),pe.onpaint=ze=>{let $e=ze.changedElements;for(let Te of f)$e.includes(Te.image)&&(Te.needsUpdate=!0)},pe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,re);else{let $e=i.RGBA,Te=i.RGBA,dt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,$e,Te,dt,re)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ye.length>0){if(ge&&_e){let pe=ke(ye[0]);t.texStorage2D(i.TEXTURE_2D,Ze,oe,pe.width,pe.height)}for(let pe=0,ze=ye.length;pe<ze;pe++)ee=ye[pe],ge?Fe&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,ve,P,ee):t.texImage2D(i.TEXTURE_2D,pe,oe,ve,P,ee);b.generateMipmaps=!1}else if(ge){if(_e){let pe=ke(re);t.texStorage2D(i.TEXTURE_2D,Ze,oe,pe.width,pe.height)}Fe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,P,re)}else t.texImage2D(i.TEXTURE_2D,0,oe,ve,P,re);R(b)&&b.mipmapsAutoUpdate===!0&&E(fe),Me.__version=xe.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}l(xt,"uploadTexture");function _t(A,b,X){if(b.image.length!==6)return;let fe=je(A,b),le=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+X);let xe=n.get(le);if(le.version!==xe.__version||fe===!0){t.activeTexture(i.TEXTURE0+X);let Me=st.getPrimaries(st.workingColorSpace),ne=b.colorSpace===Yi?null:st.getPrimaries(b.colorSpace),re=b.colorSpace===Yi||Me===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let ve=b.isCompressedTexture||b.image[0].isCompressedTexture,P=b.image[0]&&b.image[0].isDataTexture,oe=[];for(let Te=0;Te<6;Te++)!ve&&!P?oe[Te]=S(b.image[Te],!0,s.maxCubemapSize):oe[Te]=P?b.image[Te].image:b.image[Te],oe[Te]=Ue(b,oe[Te]);let ee=oe[0],ye=r.convert(b.format,b.colorSpace),ge=r.convert(b.type),_e=T(b.internalFormat,ye,ge,b.normalized,b.colorSpace),Fe=b.isVideoTexture!==!0,Ze=xe.__version===void 0||fe===!0,pe=le.dataReady,ze=w(b,ee);Ke(i.TEXTURE_CUBE_MAP,b);let $e;if(b.isDepthTexture){if(_e=v(b.format===qi,b.type),Ze)if(Fe)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,_e,ee.width,ee.height);else for(let Te=0;Te<6;Te++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,_e,ee.width,ee.height,0,ye,ge,null)}else if(ve){Fe&&Ze&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ze,_e,ee.width,ee.height);for(let Te=0;Te<6;Te++){$e=oe[Te].mipmaps;for(let dt=0;dt<$e.length;dt++){let Vt=$e[dt];b.format!==ei?ye!==null?Fe?pe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,dt,0,0,Vt.width,Vt.height,ye,Vt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,dt,_e,Vt.width,Vt.height,0,Vt.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,dt,0,0,Vt.width,Vt.height,ye,ge,Vt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,dt,_e,Vt.width,Vt.height,0,ye,ge,Vt.data)}}}else{if($e=b.mipmaps,Fe&&Ze){$e.length>0&&ze++;let Te=ke(oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ze,_e,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(P){Fe?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,oe[Te].width,oe[Te].height,ye,ge,oe[Te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,_e,oe[Te].width,oe[Te].height,0,ye,ge,oe[Te].data);for(let dt=0;dt<$e.length;dt++){let rs=$e[dt].image[Te].image;Fe?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,dt+1,0,0,rs.width,rs.height,ye,ge,rs.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,dt+1,_e,rs.width,rs.height,0,ye,ge,rs.data)}}else{Fe?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ye,ge,oe[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,_e,ye,ge,oe[Te]);for(let dt=0;dt<$e.length;dt++){let Vt=$e[dt];Fe?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,dt+1,0,0,ye,ge,Vt.image[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,dt+1,_e,ye,ge,Vt.image[Te])}}}R(b)&&b.mipmapsAutoUpdate===!0&&E(i.TEXTURE_CUBE_MAP),xe.__version=le.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}l(_t,"uploadCubeTexture");function et(A,b,X,fe,le,xe){let Me=r.convert(X.format,X.colorSpace),ne=r.convert(X.type),re=T(X.internalFormat,Me,ne,X.normalized,X.colorSpace),ve=n.get(b),P=n.get(X);if(P.__renderTarget=b,!ve.__hasExternalTextures){let oe=Math.max(1,b.width>>xe),ee=Math.max(1,b.height>>xe);le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,xe,re,oe,ee,b.depth,0,Me,ne,null):t.texImage2D(le,xe,re,oe,ee,0,Me,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),me(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,le,P.__webglTexture,0,tt(b)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,fe,le,P.__webglTexture,xe),t.bindFramebuffer(i.FRAMEBUFFER,null)}l(et,"setupFrameBufferTexture");function Pt(A,b,X){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer){let fe=b.depthTexture,le=fe&&fe.isDepthTexture?fe.type:null,xe=v(b.stencilBuffer,le),Me=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;me(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt(b),xe,b.width,b.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt(b),xe,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,xe,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,A)}else{let fe=b.textures;for(let le=0;le<fe.length;le++){let xe=fe[le],Me=r.convert(xe.format,xe.colorSpace),ne=r.convert(xe.type),re=T(xe.internalFormat,Me,ne,xe.normalized,xe.colorSpace);me(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt(b),re,b.width,b.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt(b),re,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,re,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}l(Pt,"setupRenderBufferStorage");function Xe(A,b,X){let fe=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let le=n.get(b.depthTexture);le.__renderTarget=b;let xe=fe?b.depthTexture.image[0]:b.depthTexture.image;(!le.__webglTexture||xe.width!==b.width||xe.height!==b.height)&&(xe.width=b.width,xe.height=b.height,b.depthTexture.needsUpdate=!0),fe?ce(b.depthTexture,0):he(b.depthTexture,0);let Me=le.__webglTexture,ne=tt(b),re=fe?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,ve=b.depthTexture.format===qi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===Gi)me(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,re,Me,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,ve,re,Me,0);else if(b.depthTexture.format===qi)me(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,re,Me,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,ve,re,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}l(Xe,"setupDepthTexture");function It(A){let b=n.get(A),X=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){let fe=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),fe){let le=l(()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,fe.removeEventListener("dispose",le)},"disposeEvent");fe.addEventListener("dispose",le),b.__depthDisposeCallback=le}b.__boundDepthTexture=fe}if(A.depthTexture&&!b.__autoAllocateDepthBuffer)if(X)for(let fe=0;fe<6;fe++)Xe(b.__webglFramebuffer[fe],A,fe);else A.texture.mipmaps.length>0?Xe(b.__webglFramebuffer[0],A,0):Xe(b.__webglFramebuffer,A,0);else if(X){b.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[fe]),b.__webglDepthbuffer[fe]===void 0)b.__webglDepthbuffer[fe]=i.createRenderbuffer(),Pt(b.__webglDepthbuffer[fe],A,!1);else{let le=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=b.__webglDepthbuffer[fe];i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,xe)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Pt(b.__webglDepthbuffer,A,!1);else{let le=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,xe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}l(It,"setupDepthRenderbuffer");function At(A,b,X){let fe=n.get(A);b!==void 0&&et(fe.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&It(A)}l(At,"rebindTextures");function Ct(A){let b=A.texture,X=n.get(A),fe=n.get(b);A.addEventListener("dispose",V),U(A);let le=A.textures,xe=A.isWebGLCubeRenderTarget===!0,Me=le.length>1;if(Me||(fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture()),fe.__version=b.version,a.memory.textures++),xe){X.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(b.mipmaps.length>0){X.__webglFramebuffer[ne]=[];for(let re=0;re<b.mipmaps.length;re++)X.__webglFramebuffer[ne][re]=i.createFramebuffer()}else X.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(b.mipmaps.length>0){X.__webglFramebuffer=[];for(let ne=0;ne<b.mipmaps.length;ne++)X.__webglFramebuffer[ne]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Me)for(let ne=0,re=le.length;ne<re;ne++){let ve=n.get(le[ne]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&me(A)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ne=0;ne<le.length;ne++){let re=le[ne];X.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ne]);let ve=r.convert(re.format,re.colorSpace),P=r.convert(re.type),oe=T(re.internalFormat,ve,P,re.normalized,re.colorSpace,A.isXRRenderTarget===!0),ee=tt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,oe,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,X.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),Pt(X.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xe){t.bindTexture(i.TEXTURE_CUBE_MAP,fe.__webglTexture),Ke(i.TEXTURE_CUBE_MAP,b);for(let ne=0;ne<6;ne++)if(b.mipmaps.length>0)for(let re=0;re<b.mipmaps.length;re++)et(X.__webglFramebuffer[ne][re],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,re);else et(X.__webglFramebuffer[ne],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);R(b)?E(i.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(Me){for(let ne=0,re=le.length;ne<re;ne++){let ve=le[ne],P=n.get(ve),oe=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(oe=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,P.__webglTexture),Ke(oe,ve),et(X.__webglFramebuffer,A,ve,i.COLOR_ATTACHMENT0+ne,oe,0),R(ve)&&E(oe)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ne=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,fe.__webglTexture),Ke(ne,b),b.mipmaps.length>0)for(let re=0;re<b.mipmaps.length;re++)et(X.__webglFramebuffer[re],A,b,i.COLOR_ATTACHMENT0,ne,re);else et(X.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,ne,0);R(b)?E(ne):b.mipmaps.length>0&&i.texParameteri(ne,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&It(A)}l(Ct,"setupRenderTarget");function O(A){let b=A.textures;for(let X=0,fe=b.length;X<fe;X++){let le=b[X];if(R(le)&&le.mipmapsAutoUpdate===!0){let xe=C(A),Me=n.get(le).__webglTexture;t.bindTexture(xe,Me),E(xe),t.unbindTexture()}}}l(O,"updateRenderTargetMipmap");let Bt=[];function at(A){if(A.samples>0){if(me(A)===!1){let b=A.textures,X=A.width,fe=A.height,le=i.COLOR_BUFFER_BIT,xe=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(A),ne=b.length>1;if(ne)for(let ve=0;ve<b.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ve=0;ve<b.length;ve++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);let P=n.get(b[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,P,0)}i.blitFramebuffer(0,0,X,fe,0,0,X,fe,le,i.NEAREST),c===!0&&(Bt.length=0,Bt.push(i.COLOR_ATTACHMENT0+ve),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Bt.push(xe),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Bt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let ve=0;ve<b.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);let P=n.get(b[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,P,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}l(at,"updateMultisampleRenderTarget");function tt(A){return Math.min(s.maxSamples,A.samples)}l(tt,"getRenderTargetSamples");function me(A){let b=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}l(me,"useMultisampledRTT");function pt(A){let b=a.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}l(pt,"updateVideoTexture");function Ue(A,b){let X=A.colorSpace,fe=A.format,le=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||X!==Ya&&X!==Yi&&(st.getTransfer(X)===ht?(fe!==ei||le!==bn)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",X)),b}l(Ue,"verifyColorSpace");function ke(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}l(ke,"getDimensions"),this.allocateTextureUnit=de,this.resetTextureUnits=k,this.getTextureUnits=Z,this.setTextureUnits=se,this.setTexture2D=he,this.setTexture2DArray=te,this.setTexture3D=ae,this.setTextureCube=ce,this.rebindTextures=At,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=et,this.useMultisampledRTT=me,this.dispose=K}l(rw,"WebGLTextures");function aw(i,e){function t(n,s=Yi){let r,a=st.getTransfer(s);if(n===bn)return i.UNSIGNED_BYTE;if(n===Yc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$c)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===hd)return i.BYTE;if(n===dd)return i.SHORT;if(n===ra)return i.UNSIGNED_SHORT;if(n===qc)return i.INT;if(n===Qn)return i.UNSIGNED_INT;if(n===jn)return i.FLOAT;if(n===Pn)return i.HALF_FLOAT;if(n===md)return i.ALPHA;if(n===gd)return i.RGB;if(n===ei)return i.RGBA;if(n===Gi)return i.DEPTH_COMPONENT;if(n===qi)return i.DEPTH_STENCIL;if(n===xd)return i.RED;if(n===Zc)return i.RED_INTEGER;if(n===vi)return i.RG;if(n===Jc)return i.RG_INTEGER;if(n===Kc)return i.RGBA_INTEGER;if(n===_o||n===vo||n===yo||n===bo)if(a===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_o)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_o)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qc||n===jc||n===eu||n===tu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===eu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nu||n===iu||n===su||n===ru||n===au||n===Mo||n===ou)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===nu||n===iu)return a===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===su)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ru)return r.COMPRESSED_R11_EAC;if(n===au)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Mo)return r.COMPRESSED_RG11_EAC;if(n===ou)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===lu||n===cu||n===uu||n===hu||n===du||n===fu||n===pu||n===mu||n===gu||n===xu||n===_u||n===vu||n===yu||n===bu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===lu)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cu)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uu)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hu)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===du)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fu)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pu)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mu)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gu)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xu)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_u)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vu)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yu)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bu)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mu||n===Su||n===wu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Mu)return a===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Su)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Eu||n===Tu||n===So||n===Au)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Eu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Tu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===So)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Au)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return l(t,"convert"),{convert:t}}l(aw,"WebGLUtils");var ow=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lw=`
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

}`,rp=class rp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ao(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new gn({vertexShader:ow,fragmentShader:lw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wt(new gi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};l(rp,"WebXRDepthSensing");var Jf=rp,ap=class ap extends hi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,u=null,h=null,f=null,d=null,p=null,x=null,y=typeof XRWebGLBinding<"u",_=new Jf,g={},S=t.getContextAttributes(),R=null,E=null,C=[],T=[],v=new Ve,w=null,U=null,I=new dn;I.viewport=new St;let B=new dn;B.viewport=new St;let V=[I,B],J=new Ec,L=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let he=C[q];return he===void 0&&(he=new Jr,C[q]=he),he.getTargetRaySpace()},this.getControllerGrip=function(q){let he=C[q];return he===void 0&&(he=new Jr,C[q]=he),he.getGripSpace()},this.getHand=function(q){let he=C[q];return he===void 0&&(he=new Jr,C[q]=he),he.getHandSpace()};function ie(q){let he=T.indexOf(q.inputSource);if(he===-1)return;let te=C[he];te!==void 0&&(te.update(q.inputSource,q.frame,u||a),te.dispatchEvent({type:q.type,data:q.inputSource}))}l(ie,"onSessionEvent");function D(){s.removeEventListener("select",ie),s.removeEventListener("selectstart",ie),s.removeEventListener("selectend",ie),s.removeEventListener("squeeze",ie),s.removeEventListener("squeezestart",ie),s.removeEventListener("squeezeend",ie),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",z);for(let q=0;q<C.length;q++){let he=T[q];he!==null&&(T[q]=null,C[q].disconnect(he))}L=null,K=null,_.reset();for(let q in g)delete g[q];if(e.setRenderTarget(R),p=null,d=null,f=null,s=null,E=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(v.width,v.height,!1),U!==null){let q=U.camera;q.fov=U.fov,q.zoom=U.zoom,q.updateProjectionMatrix(),U=null}n.dispatchEvent({type:"sessionend"})}l(D,"onSessionEnd"),this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",ie),s.addEventListener("selectstart",ie),s.addEventListener("selectend",ie),s.addEventListener("squeeze",ie),s.addEventListener("squeezestart",ie),s.addEventListener("squeezeend",ie),s.addEventListener("end",D),s.addEventListener("inputsourceschange",z),S.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(v),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,ae=null,ce=null;S.depth&&(ce=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=S.stencil?qi:Gi,ae=S.stencil?Qs:Qn);let Ae={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Ae),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new An(d.textureWidth,d.textureHeight,{format:ei,type:bn,depthTexture:new Wi(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let te={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new An(p.framebufferWidth,p.framebufferHeight,{format:ei,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await s.requestReferenceSpace(o),de.setContext(s),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function z(q){for(let he=0;he<q.removed.length;he++){let te=q.removed[he],ae=T.indexOf(te);ae>=0&&(T[ae]=null,C[ae].disconnect(te))}for(let he=0;he<q.added.length;he++){let te=q.added[he],ae=T.indexOf(te);if(ae===-1){for(let Ae=0;Ae<C.length;Ae++)if(Ae>=T.length){T.push(te),ae=Ae;break}else if(T[Ae]===null){T[Ae]=te,ae=Ae;break}if(ae===-1)break}let ce=C[ae];ce&&ce.connect(te)}}l(z,"onInputSourcesChange");function F(q,he){he===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(he.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}l(F,"updateCamera"),this.updateCamera=function(q){if(s===null)return;let he=q.near,te=q.far;_.texture!==null&&(_.depthNear>0&&(he=_.depthNear),_.depthFar>0&&(te=_.depthFar)),J.near=B.near=I.near=he,J.far=B.far=I.far=te,(L!==J.near||K!==J.far)&&(s.updateRenderState({depthNear:J.near,depthFar:J.far}),L=J.near,K=J.far),J.layers.mask=q.layers.mask|6,I.layers.mask=J.layers.mask&-5,B.layers.mask=J.layers.mask&-3;let ae=q.parent,ce=J.cameras;F(J,ae);for(let Ae=0;Ae<ce.length;Ae++)F(ce[Ae],ae);J.projectionMatrix.copy(I.projectionMatrix),J.projectionMatrixInverse.copy(I.projectionMatrixInverse),U===null&&q.isPerspectiveCamera&&(U={camera:q,fov:q.fov,zoom:q.zoom}),k(q,J,ae)};function k(q,he,te){te===null?q.matrix.copy(he.matrixWorld):(q.matrix.copy(te.matrixWorld),q.matrix.invert(),q.matrix.multiply(he.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(he.projectionMatrix),q.projectionMatrixInverse.copy(he.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=sc*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}l(k,"updateUserCamera"),this.getCamera=function(){return J},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(J)},this.getCameraTexture=function(q){return g[q]};let Z=null;function se(q,he){if(h=he.getViewerPose(u||a),x=he,h!==null){let te=h.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let ae=!1;te.length!==J.cameras.length&&(J.cameras.length=0,ae=!0);for(let Pe=0;Pe<te.length;Pe++){let Ke=te[Pe],je=null;if(p!==null)je=p.getViewport(Ke);else{let ut=f.getViewSubImage(d,Ke);je=ut.viewport,Pe===0&&(e.setRenderTargetTextures(E,ut.colorTexture,ut.depthStencilTexture),e.setRenderTarget(E))}let Be=V[Pe];Be===void 0&&(Be=new dn,Be.layers.enable(Pe),Be.viewport=new St,V[Pe]=Be),Be.matrix.fromArray(Ke.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Ke.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(je.x,je.y,je.width,je.height),Pe===0&&(J.matrix.copy(Be.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),ae===!0&&J.cameras.push(Be)}let ce=s.enabledFeatures;if(ce&&ce.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=n.getBinding();let Pe=f.getDepthInformation(te[0]);Pe&&Pe.isValid&&Pe.texture&&_.init(Pe,s.renderState)}if(ce&&ce.includes("camera-access")&&y){e.state.unbindTexture(),f=n.getBinding();for(let Pe=0;Pe<te.length;Pe++){let Ke=te[Pe].camera;if(Ke){let je=g[Ke];je||(je=new ao,g[Ke]=je);let Be=f.getCameraImage(Ke);je.sourceTexture=Be}}}}for(let te=0;te<C.length;te++){let ae=T[te],ce=C[te];ae!==null&&ce!==void 0&&ce.update(ae,he,u||a)}Z&&Z(q,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),x=null}l(se,"onAnimationFrame");let de=new fg;de.setAnimationLoop(se),this.setAnimationLoop=function(q){Z=q},this.dispose=function(){}}};l(ap,"WebXRManager");var Kf=ap,cw=new ft,Sg=new We;Sg.set(-1,0,0,0,1,0,0,0,1);function uw(i,e){function t(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}l(t,"refreshTransformUniform");function n(_,g){g.color.getRGB(_.fogColor.value,Sd(i)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}l(n,"refreshFogUniforms");function s(_,g,S,R,E){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(_,g):g.isMeshLambertMaterial?(r(_,g),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(_,g),f(_,g)):g.isMeshPhongMaterial?(r(_,g),h(_,g),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(_,g),d(_,g),g.isMeshPhysicalMaterial&&p(_,g,E)):g.isMeshMatcapMaterial?(r(_,g),x(_,g)):g.isMeshDepthMaterial?r(_,g):g.isMeshDistanceMaterial?(r(_,g),y(_,g)):g.isMeshNormalMaterial?r(_,g):g.isLineBasicMaterial?(a(_,g),g.isLineDashedMaterial&&o(_,g)):g.isPointsMaterial?c(_,g,S,R):g.isSpriteMaterial?u(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}l(s,"refreshMaterialUniforms");function r(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,t(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===xn&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,t(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===xn&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,t(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,t(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);let S=e.get(g),R=S.envMap,E=S.envMapRotation;R&&(_.envMap.value=R,_.envMapRotation.value.setFromMatrix4(cw.makeRotationFromEuler(E)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(Sg),_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap&&(_.lightMap.value=g.lightMap,_.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,_.lightMapTransform)),g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,_.aoMapTransform))}l(r,"refreshUniformsCommon");function a(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform))}l(a,"refreshUniformsLine");function o(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}l(o,"refreshUniformsDash");function c(_,g,S,R){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*S,_.scale.value=R*.5,g.map&&(_.map.value=g.map,t(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}l(c,"refreshUniformsPoints");function u(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}l(u,"refreshUniformsSprites");function h(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}l(h,"refreshUniformsPhong");function f(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}l(f,"refreshUniformsToon");function d(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,_.roughnessMapTransform)),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)}l(d,"refreshUniformsStandard");function p(_,g,S){_.ior.value=g.ior,g.diffuseRoughness>0&&(_.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(_.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,_.diffuseRoughnessMapTransform))),g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===xn&&_.clearcoatNormalScale.value.negate())),g.dispersion>0&&(_.dispersion.value=g.dispersion),g.retroreflectivity>0&&(_.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,_.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=S.texture,_.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,_.specularIntensityMapTransform))}l(p,"refreshUniformsPhysical");function x(_,g){g.matcap&&(_.matcap.value=g.matcap)}l(x,"refreshUniformsMatcap");function y(_,g){let S=e.get(g).light;_.referencePosition.value.setFromMatrixPosition(S.matrixWorld),_.nearDistance.value=S.shadow.camera.near,_.farDistance.value=S.shadow.camera.far}return l(y,"refreshUniformsDistance"),{refreshFogUniforms:n,refreshMaterialUniforms:s}}l(uw,"WebGLMaterials");function hw(i,e,t,n){let s={},r={};function a(S,R){let E=R.program;n.uniformBlockBinding(S,E,s[S.id])}l(a,"bind");function o(S,R){let E=s[S.id];E===void 0&&(x(S),E=c(S),s[S.id]=E,S.addEventListener("dispose",_));let C=R.program;n.updateUBOMapping(S,C);let T=e.render.frame;r[S.id]!==T&&(u(S),r[S.id]=T)}l(o,"update");function c(S){let R=i.createBuffer(),E=S.__size,C=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,E,C),i.bindBuffer(i.UNIFORM_BUFFER,null),R}l(c,"createBuffer");function u(S){let R=s[S.id],E=S.uniforms,C=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let T=0,v=E.length;T<v;T++){let w=E[T];if(Array.isArray(w))for(let U=0,I=w.length;U<I;U++)h(w[U],T,U,C);else h(w,T,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}l(u,"updateBufferData");function h(S,R,E,C){if(d(S,R,E,C)===!0){let T=S.__offset,v=S.value;if(Array.isArray(v)){let w=0;for(let U=0;U<v.length;U++){let I=v[U],B=y(I,!0);f(I,S.__data,w),w+=B.storage/Float32Array.BYTES_PER_ELEMENT}}else f(v,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,S.__data)}}l(h,"updateUniform");function f(S,R,E){typeof S=="number"||typeof S=="boolean"?R[E]=S:S.isMatrix3?(R[E]=S.elements[0],R[E+1]=S.elements[1],R[E+2]=S.elements[2],R[E+3]=0,R[E+4]=S.elements[3],R[E+5]=S.elements[4],R[E+6]=S.elements[5],R[E+7]=0,R[E+8]=S.elements[6],R[E+9]=S.elements[7],R[E+10]=S.elements[8],R[E+11]=0):ArrayBuffer.isView(S)?R.set(S.subarray(0,R.length-E),E):S.toArray(R,E)}l(f,"writeUniformValue");function d(S,R,E,C){let T=S.value,v=R+"_"+E;if(Array.isArray(T)){C[v]===void 0&&(C[v]=[]);let w=C[v],U=!1;for(let I=0;I<T.length;I++)p(T[I],w,I)===!0&&(U=!0);return U}return p(T,C,v)}l(d,"hasUniformChanged");function p(S,R,E){if(R[E]===void 0)return typeof S=="number"||typeof S=="boolean"?R[E]=S:ArrayBuffer.isView(S)?R[E]=S.slice():R[E]=S.clone(),!0;{let C=R[E];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return R[E]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(C.equals(S)===!1)return C.copy(S),!0}}return!1}l(p,"hasValueChanged");function x(S){let R=S.uniforms,E=0,C=16;for(let v=0,w=R.length;v<w;v++){let U=Array.isArray(R[v])?R[v]:[R[v]];for(let I=0,B=U.length;I<B;I++){let V=U[I],J=Array.isArray(V.value)?V.value:[V.value],L=Array.isArray(R[v])||Array.isArray(V.value),K=E;for(let D=0,z=J.length;D<z;D++){let F=J[D],k=y(F,L),Z=E%C,se=Z%k.boundary,de=Z+se;E+=se,de!==0&&C-de<k.storage&&(E+=C-de),D===0&&(K=E),E+=k.storage}let ie=V.type==="int"?Int32Array:V.type==="uint"?Uint32Array:Float32Array;V.__data=new ie((E-K)/Float32Array.BYTES_PER_ELEMENT),V.__offset=K}}let T=E%C;return T>0&&(E+=C-T),S.__size=E,S.__cache={},this}l(x,"prepareUniformsGroup");function y(S,R){let E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=16,E.storage=48):S.isMatrix4?(E.boundary=16,E.storage=64):S.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(E.boundary=16,E.storage=S.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",S),R===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}l(y,"getUniformSize");function _(S){let R=S.target;R.removeEventListener("dispose",_),i.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}l(_,"onUniformsGroupsDispose");function g(){for(let S in s)i.deleteBuffer(s[S]);s={},r={}}return l(g,"dispose"),{bind:a,update:o,dispose:g}}l(hw,"WebGLUniformsGroups");var dw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),yi=null;function fw(){return yi===null&&(yi=new ea(dw,16,16,vi,Pn),yi.name="DFG_LUT",yi.minFilter=Xt,yi.magFilter=Xt,yi.wrapS=Gn,yi.wrapT=Gn,yi.generateMipmaps=!1,yi.needsUpdate=!0),yi}l(fw,"getDFGLUT");var op=class op{constructor(e={}){let{canvas:t=U0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=bn}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let y=p,_=new Set([Kc,Jc,Zc]),g=new Set([bn,Qn,ra,Qs,Yc,$c]),S=new Uint32Array(4),R=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]},C=null,T=null,v=[],w=[],U=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,B=!1,V=null,J=null,L=null,K=null;this._outputColorSpace=Nt;let ie=0,D=0,z=null,F=-1,k=null,Z=new St,se=new St,de=null,q=new Oe(0),he=0,te=t.width,ae=t.height,ce=1,Ae=null,qe=null,Pe=new St(0,0,te,ae),Ke=new St(0,0,te,ae),je=!1,Be=new _s,ut=new uc,xt=!1,_t=!1,et=new ft,Pt=new W,Xe=new St,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},At=!1;function Ct(){return z===null?ce:1}l(Ct,"getTargetPixelRatio");let O=n;function Bt(M,N){return t.getContext(M,N)}l(Bt,"getContext");let at,tt,me,pt,Ue,ke,A,b,X,fe,le,xe,Me,ne,re,ve,P,oe,ee,ye,ge,_e,Fe;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",ze,!1),t.addEventListener("webglcontextrestored",$e,!1),t.addEventListener("webglcontextcreationerror",Te,!1),O===null){let N="webgl2";if(O=Bt(N,M),O===null)throw Bt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ze()}catch(M){throw t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),He("WebGLRenderer: "+M.message),M}function Ze(){at=new wM(O),at.init(),ge=new aw(O,at),tt=new fM(O,at,e,ge),me=new sw(O,at),tt.reversedDepthBuffer&&d&&me.buffers.depth.setReversed(!0),J=O.createFramebuffer(),L=O.createFramebuffer(),K=O.createFramebuffer(),pt=new AM(O),Ue=new WS,ke=new rw(O,at,me,Ue,tt,ge,pt),A=new SM(I),b=new Rv(O),_e=new hM(O,b),X=new EM(O,b,pt,_e),fe=new RM(O,X,b,_e,pt),oe=new CM(O,tt,ke),re=new pM(Ue),le=new HS(I,A,at,tt,_e,re),xe=new uw(I,Ue),Me=new qS,ne=new QS(at),P=new uM(I,A,me,fe,x,c),ve=new iw(I,fe,tt),Fe=new hw(O,pt,tt,me),ee=new dM(O,at,pt),ye=new TM(O,at,pt),pt.programs=le.programs,I.capabilities=tt,I.extensions=at,I.properties=Ue,I.renderLists=Me,I.shadowMap=ve,I.state=me,I.info=pt}l(Ze,"initGLContext"),y!==bn&&(U=new IM(y,t.width,t.height,o,s,r));let pe=new Kf(I,O);this.xr=pe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let M=at.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=at.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(M){M!==void 0&&(ce=M,this.setSize(te,ae,!1))},this.getSize=function(M){return M.set(te,ae)},this.setSize=function(M,N,Q=!0){if(pe.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}te=M,ae=N,t.width=Math.floor(M*ce),t.height=Math.floor(N*ce),Q===!0&&(t.style.width=M+"px",t.style.height=N+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(te*ce,ae*ce).floor()},this.setDrawingBufferSize=function(M,N,Q){te=M,ae=N,ce=Q,t.width=Math.floor(M*Q),t.height=Math.floor(N*Q),this.setViewport(0,0,M,N)},this.setEffects=function(M){if(y===bn){He("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let N=0;N<M.length;N++)if(M[N].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(Z)},this.getViewport=function(M){return M.copy(Pe)},this.setViewport=function(M,N,Q,Y){M.isVector4?Pe.set(M.x,M.y,M.z,M.w):Pe.set(M,N,Q,Y),me.viewport(Z.copy(Pe).multiplyScalar(Ct()).round())},this.getScissor=function(M){return M.copy(Ke)},this.setScissor=function(M,N,Q,Y){M.isVector4?Ke.set(M.x,M.y,M.z,M.w):Ke.set(M,N,Q,Y),me.scissor(se.copy(Ke).multiplyScalar(Ct()).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(M){me.setScissorTest(je=M)},this.setOpaqueSort=function(M){Ae=M},this.setTransparentSort=function(M){qe=M},this.getClearColor=function(M){return M.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,Q=!0){let Y=0;if(M){let $=!1;if(z!==null){let Se=z.texture.format;$=_.has(Se)}if($){let Se=z.texture.type,Ie=g.has(Se),be=P.getClearColor(),Ce=P.getClearAlpha(),Ne=be.r,Ye=be.g,nt=be.b;Ie?(S[0]=Ne,S[1]=Ye,S[2]=nt,S[3]=Ce,O.clearBufferuiv(O.COLOR,0,S)):(R[0]=Ne,R[1]=Ye,R[2]=nt,R[3]=Ce,O.clearBufferiv(O.COLOR,0,R))}else Y|=O.COLOR_BUFFER_BIT}N&&(Y|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Y|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&O.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),V=M},this.dispose=function(){t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),P.dispose(),Me.dispose(),ne.dispose(),ke.dispose(),Ue.dispose(),A.dispose(),fe.dispose(),X.dispose(),_e.dispose(),Fe.dispose(),le.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",mm),pe.removeEventListener("sessionend",gm),ks.stop()};function ze(M){M.preventDefault(),Ja("WebGLRenderer: Context Lost."),B=!0}l(ze,"onContextLost");function $e(){Ja("WebGLRenderer: Context Restored."),B=!1;let M=pt.autoReset,N=ve.enabled,Q=ve.autoUpdate,Y=ve.needsUpdate,$=ve.type;Ze(),pt.autoReset=M,ve.enabled=N,ve.autoUpdate=Q,ve.needsUpdate=Y,ve.type=$}l($e,"onContextRestore");function Te(M){He("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}l(Te,"onContextCreationError");function dt(M){let N=M.target;N.removeEventListener("dispose",dt),Vt(N)}l(dt,"onMaterialDispose");function Vt(M){rs(M),Ue.remove(M)}l(Vt,"deallocateMaterial");function rs(M){let N=Ue.get(M).programs;N!==void 0&&(N.forEach(function(Q){le.releaseProgram(Q)}),M.isShaderMaterial&&le.releaseShaderCache(M))}l(rs,"releaseMaterialProgramReferences"),this.renderBufferDirect=function(M,N,Q,Y,$,Se){N===null&&(N=It);let Ie=$.isMesh&&$.matrixWorld.determinantAffine()<0,be=C_(M,N,Q,Y,$);me.setMaterial(Y,Ie);let Ce=Q.index,Ne=1;if(Y.wireframe===!0){if(Ce=X.getWireframeAttribute(Q),Ce===void 0)return;Ne=2}let Ye=Q.drawRange,nt=Q.attributes.position,Le=Ye.start*Ne,it=(Ye.start+Ye.count)*Ne;Se!==null&&(Le=Math.max(Le,Se.start*Ne),it=Math.min(it,(Se.start+Se.count)*Ne)),Ce!==null?(Le=Math.max(Le,0),it=Math.min(it,Ce.count)):nt!=null&&(Le=Math.max(Le,0),it=Math.min(it,nt.count));let Lt=it-Le;if(Lt<0||Lt===1/0)return;_e.setup($,Y,be,Q,Ce);let gt,mt=ee;if(Ce!==null&&(gt=b.get(Ce),mt=ye,mt.setIndex(gt)),$.isMesh)Y.wireframe===!0?(me.setLineWidth(Y.wireframeLinewidth*Ct()),mt.setMode(O.LINES)):mt.setMode(O.TRIANGLES);else if($.isLine){let jt=Y.linewidth;jt===void 0&&(jt=1),me.setLineWidth(jt*Ct()),$.isLineSegments?mt.setMode(O.LINES):$.isLineLoop?mt.setMode(O.LINE_LOOP):mt.setMode(O.LINE_STRIP)}else $.isPoints?mt.setMode(O.POINTS):$.isSprite&&mt.setMode(O.TRIANGLES);if($.isBatchedMesh)if(at.get("WEBGL_multi_draw"))mt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let jt=$._multiDrawStarts,De=$._multiDrawCounts,un=$._multiDrawCount,ct=Ce?b.get(Ce).bytesPerElement:1,Gs=Ue.get(Y).currentProgram.getUniforms();for(let en=0;en<un;en++)Gs.setValue(O,"_gl_DrawID",en),mt.render(jt[en]/ct,De[en])}else if($.isInstancedMesh)mt.renderInstances(Le,Lt,$.count);else if(Q.isInstancedBufferGeometry){let jt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,De=Math.min(Q.instanceCount,jt);mt.renderInstances(Le,Lt,De)}else mt.render(Le,Lt)};function pm(M,N,Q,Y){V!==null&&M.isNodeMaterial&&V.setObject(Y,M),xt===!0&&re.setState(M,Q,!1),M.transparent===!0&&M.side===xi&&M.forceSinglePass===!1?(M.side=xn,M.needsUpdate=!0,Fa(M,N,Y),M.side=Es,M.needsUpdate=!0,Fa(M,N,Y),M.side=xi):Fa(M,N,Y)}l(pm,"prepareMaterial"),this.compile=function(M,N,Q=null){Q===null&&(Q=M),V!==null&&V.renderStart(M,N,Q),T=ne.get(Q),T.init(N),w.push(T),Q.traverseVisible(function($){$.isLight&&$.layers.test(N.layers)&&(T.pushLight($),$.castShadow&&T.pushShadow($))}),M!==Q&&M.traverseVisible(function($){$.isLight&&$.layers.test(N.layers)&&(T.pushLight($),$.castShadow&&T.pushShadow($))}),T.setupLights(),V!==null&&V.updateLights(T.state.lightsArray),_t=this.localClippingEnabled,xt=re.init(this.clippingPlanes,_t),xt===!0&&re.setGlobalState(this.clippingPlanes,N),V!==null&&ve.render(T.state.shadowsArray,Q,N);let Y=new Set;return M.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Se=$.material;if(Se)if(Array.isArray(Se))for(let Ie=0;Ie<Se.length;Ie++){let be=Se[Ie];pm(be,Q,N,$),Y.add(be)}else pm(Se,Q,N,$),Y.add(Se)}),T=w.pop(),V!==null&&V.renderEnd(),Y},this.compileAsync=function(M,N,Q=null){let Y=this.compile(M,N,Q);return new Promise($=>{function Se(){if(Y.forEach(function(Ie){let Ce=Ue.get(Ie).currentProgram;(Ce===void 0||Ce.isReady())&&Y.delete(Ie)}),Y.size===0){$(M);return}setTimeout(Se,10)}l(Se,"checkMaterialsReady"),at.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let ph=null;function T_(M){ph&&ph(M)}l(T_,"onAnimationFrame");function mm(){ks.stop()}l(mm,"onXRSessionStart");function gm(){ks.start()}l(gm,"onXRSessionEnd");let ks=new fg;ks.setAnimationLoop(T_),typeof self<"u"&&ks.setContext(self),this.setAnimationLoop=function(M){ph=M,pe.setAnimationLoop(M),M===null?ks.stop():ks.start()},pe.addEventListener("sessionstart",mm),pe.addEventListener("sessionend",gm),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;V!==null&&V.renderStart(M,N);let Q=pe.enabled===!0&&pe.isPresenting===!0,Y=U!==null&&(z===null||Q)&&U.begin(I,z);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(N),N=pe.getCamera()),M.isScene===!0&&M.onBeforeRender(I,M,N,z),T=ne.get(M,w.length),T.init(N),T.state.textureUnits=ke.getTextureUnits(),w.push(T),et.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?ut.setFromArrayCamera(N):Be.setFromProjectionMatrix(et,Vn,N.reversedDepth),_t=this.localClippingEnabled,xt=re.init(this.clippingPlanes,_t),C=Me.get(M,v.length),C.init(),v.push(C),this.info.render.frame++,pe.enabled===!0&&pe.isPresenting===!0){let Ie=I.xr.getDepthSensingMesh();Ie!==null&&mh(Ie,N,-1/0,I.sortObjects)}mh(M,N,0,I.sortObjects),C.finish(),V!==null&&V.updateLights(T.state.lightsArray),I.sortObjects===!0&&C.sort(Ae,qe),At=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,At&&P.addToRenderList(C,M),this.info.autoReset===!0&&this.info.reset(),xt===!0&&re.beginShadows();let $=T.state.shadowsArray;if(ve.render($,M,N),xt===!0&&re.endShadows(),(Y&&U.hasRenderPass())===!1){let Ie=C.opaque,be=C.transmissive;if(T.setupLights(),N.isArrayCamera){let Ce=N.cameras;if(be.length>0)for(let Ne=0,Ye=Ce.length;Ne<Ye;Ne++){let nt=Ce[Ne];_m(Ie,be,M,nt)}At&&P.render(M);for(let Ne=0,Ye=Ce.length;Ne<Ye;Ne++){let nt=Ce[Ne];xm(C,M,nt,nt.viewport)}}else be.length>0&&_m(Ie,be,M,N),At&&P.render(M),xm(C,M,N)}z!==null&&D===0&&(ke.updateMultisampleRenderTarget(z),ke.updateRenderTargetMipmap(z)),Y&&U.end(I),M.isScene===!0&&M.onAfterRender(I,M,N),_e.resetDefaultState(),F=-1,k=null,w.pop(),w.length>0?(T=w[w.length-1],ke.setTextureUnits(T.state.textureUnits),xt===!0&&re.setGlobalState(I.clippingPlanes,T.state.camera)):T=null,v.pop(),v.length>0?C=v[v.length-1]:C=null,V!==null&&V.renderEnd()};function mh(M,N,Q,Y){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)Q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){let Ie=N.isArrayCamera?ut:Be;if(!M.frustumCulled||M.intersectsFrustum(Ie)){Y&&Xe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(et);let be=fe.update(M),Ce=M.material;Ce.visible&&C.push(M,be,Ce,Q,Xe.z,null,N)}}else if(M.isMesh||M.isLine||M.isPoints){let Ie=N.isArrayCamera?ut:Be;if(!M.frustumCulled||M.intersectsFrustum(Ie)){let be=fe.update(M),Ce=M.material;if(Y&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Xe.copy(M.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Xe.copy(be.boundingSphere.center)),Xe.applyMatrix4(M.matrixWorld).applyMatrix4(et)),Array.isArray(Ce)){let Ne=be.groups;for(let Ye=0,nt=Ne.length;Ye<nt;Ye++){let Le=Ne[Ye],it=Ce[Le.materialIndex];it&&it.visible&&C.push(M,be,it,Q,Xe.z,Le,N)}}else Ce.visible&&C.push(M,be,Ce,Q,Xe.z,null,N)}}}let Se=M.children;for(let Ie=0,be=Se.length;Ie<be;Ie++)mh(Se[Ie],N,Q,Y)}l(mh,"projectObject");function xm(M,N,Q,Y){let{opaque:$,transmissive:Se,transparent:Ie}=M;T.setupLightsView(Q),xt===!0&&re.setGlobalState(I.clippingPlanes,Q),Y&&me.viewport(Z.copy(Y)),$.length>0&&bl($,N,Q),Se.length>0&&bl(Se,N,Q),Ie.length>0&&bl(Ie,N,Q),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}l(xm,"renderScene");function _m(M,N,Q,Y){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Y.id]===void 0){let Le=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Y.id]=new An(1,1,{generateMipmaps:!0,type:Le?Pn:bn,minFilter:Kn,samples:Math.max(4,tt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:st.workingColorSpace})}let Se=T.state.transmissionRenderTarget[Y.id],Ie=Y.viewport||Z;Se.setSize(Ie.z*I.transmissionResolutionScale,Ie.w*I.transmissionResolutionScale);let be=I.getRenderTarget(),Ce=I.getActiveCubeFace(),Ne=I.getActiveMipmapLevel();I.setRenderTarget(Se),I.getClearColor(q),he=I.getClearAlpha(),he<1&&I.setClearColor(16777215,.5),I.clear(),At&&P.render(Q);let Ye=I.toneMapping;I.toneMapping=_i;let nt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),T.setupLightsView(Y),xt===!0&&re.setGlobalState(I.clippingPlanes,Y),bl(M,Q,Y),ke.updateMultisampleRenderTarget(Se),ke.updateRenderTargetMipmap(Se),at.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let it=0,Lt=N.length;it<Lt;it++){let gt=N[it],{object:mt,geometry:jt,material:De,group:un}=gt;if(De.side===xi&&mt.layers.test(Y.layers)){let ct=De.side;De.side=xn,De.needsUpdate=!0,vm(mt,Q,Y,jt,De,un),De.side=ct,De.needsUpdate=!0,Le=!0}}Le===!0&&(ke.updateMultisampleRenderTarget(Se),ke.updateRenderTargetMipmap(Se))}I.setRenderTarget(be,Ce,Ne),I.setClearColor(q,he),nt!==void 0&&(Y.viewport=nt),I.toneMapping=Ye}l(_m,"renderTransmissionPass");function bl(M,N,Q){let Y=N.isScene===!0?N.overrideMaterial:null;for(let $=0,Se=M.length;$<Se;$++){let Ie=M[$],{object:be,geometry:Ce,group:Ne}=Ie,Ye=Ie.material;Ye.allowOverride===!0&&Y!==null&&(Ye=Y),be.layers.test(Q.layers)&&vm(be,N,Q,Ce,Ye,Ne)}}l(bl,"renderObjects");function vm(M,N,Q,Y,$,Se){V!==null&&$.isNodeMaterial&&V.setObject(M,$),M.onBeforeRender(I,N,Q,Y,$,Se),M.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),$.onBeforeRender(I,N,Q,Y,M,Se),$.transparent===!0&&$.side===xi&&$.forceSinglePass===!1?($.side=xn,$.needsUpdate=!0,I.renderBufferDirect(Q,N,Y,$,M,Se),$.side=Es,$.needsUpdate=!0,I.renderBufferDirect(Q,N,Y,$,M,Se),$.side=xi):I.renderBufferDirect(Q,N,Y,$,M,Se),M.onAfterRender(I,N,Q,Y,$,Se)}l(vm,"renderObject");function ym(M){let N=0;for(let Q of M)Q.texture!==null&&N++;return N}l(ym,"countLightProbeGrids");function Fa(M,N,Q){N.isScene!==!0&&(N=It);let Y=Ue.get(M),$=T.state.lights,Se=T.state.shadowsArray,Ie=$.state.version,be=le.getParameters(M,$.state,Se,N,Q,T.state.lightProbeGridArray),Ce=le.getProgramCacheKey(be),Ne=Y.programs;Y.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?N.environment:null,Y.fog=N.fog;let Ye=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;Y.envMap=A.get(M.envMap||Y.environment,Ye),Y.envMapRotation=Y.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Ne===void 0&&(M.addEventListener("dispose",dt),Ne=new Map,Y.programs=Ne,Y.programVariants=new Map);let nt=Ne.get(Ce);if(nt!==void 0){if(Y.currentProgram===nt&&Y.lightsStateVersion===Ie)return Mm(M,be),nt}else be.uniforms=le.getUniforms(M),V!==null&&M.isNodeMaterial&&V.build(M,Q,be),M.onBeforeCompile(be,I),nt=le.acquireProgram(be,Ce),Ne.set(Ce,nt),Y.uniforms=be.uniforms;let Le=Y.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Le.clippingPlanes=re.uniform),Mm(M,be),Y.needsLights=P_(M),Y.lightsStateVersion=Ie,Y.needsLights&&(Le.ambientLightColor.value=$.state.ambient,Le.lightProbe.value=$.state.probe,Le.sunLights.value=$.state.sun,Le.sunLightShadows.value=$.state.sunShadow,Le.directionalLights.value=$.state.directional,Le.directionalLightShadows.value=$.state.directionalShadow,Le.spotLights.value=$.state.spot,Le.spotLightShadows.value=$.state.spotShadow,Le.rectAreaLights.value=$.state.rectArea,Le.ltc_1.value=$.state.rectAreaLTC1,Le.ltc_2.value=$.state.rectAreaLTC2,Le.pointLights.value=$.state.point,Le.pointLightShadows.value=$.state.pointShadow,Le.hemisphereLights.value=$.state.hemi,Le.sunShadowMatrix.value=$.state.sunShadowMatrix,Le.sunShadowCascade.value=$.state.sunShadowCascade,Le.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Le.spotLightMatrix.value=$.state.spotLightMatrix,Le.spotLightMap.value=$.state.spotLightMap,Le.pointShadowMatrix.value=$.state.pointShadowMatrix),Y.numLightProbeGrids=ym(T.state.lightProbeGridArray),Y.currentProgram=nt,Y.uniformsList=null,nt}l(Fa,"getProgram");function A_(M,N,Q,Y,$){let Se=Ue.get(M),Ie=Se.currentProgram.id+","+Y+","+$,be=Se.programVariants.get(Ie);return be===void 0?(be=Fa(M,N,Q),Se.programVariants.set(Ie,be)):(Se.currentProgram=be,Se.uniformsList=null,Se.outputColorSpace=Y,Se.toneMapping=$),be}l(A_,"getProgramVariant");function bm(M){if(M.uniformsList===null){let N=M.currentProgram.getUniforms();M.uniformsList=aa.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}l(bm,"getUniformList");function Mm(M,N){let Q=Ue.get(M);Q.outputColorSpace=N.outputColorSpace,Q.batching=N.batching,Q.batchingColor=N.batchingColor,Q.instancing=N.instancing,Q.instancingColor=N.instancingColor,Q.instancingMorph=N.instancingMorph,Q.skinning=N.skinning,Q.morphTargets=N.morphTargets,Q.morphNormals=N.morphNormals,Q.morphColors=N.morphColors,Q.morphTargetsCount=N.morphTargetsCount,Q.numClippingPlanes=N.numClippingPlanes,Q.numIntersection=N.numClipIntersection,Q.vertexAlphas=N.vertexAlphas,Q.vertexTangents=N.vertexTangents,Q.toneMapping=N.toneMapping}l(Mm,"updateCommonMaterialProperties");function C_(M,N,Q,Y,$){N.isScene!==!0&&(N=It),ke.resetTextureUnits();let Se=N.fog,Ie=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?N.environment:null,be=z===null?I.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:st.workingColorSpace,Ce=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Ne=A.get(Y.envMap||Ie,Ce),Ye=Y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,nt=!!Q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Le=!!Q.morphAttributes.position,it=!!Q.morphAttributes.normal,Lt=!!Q.morphAttributes.color,gt=_i;Y.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(gt=I.toneMapping);let mt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,jt=mt!==void 0?mt.length:0,De=Ue.get(Y),un=T.state.lights;if(xt===!0&&(_t===!0||M!==k)){let Tt=M===k&&Y.id===F;re.setState(Y,M,Tt)}let ct=!1,Gs=!1;Y.version===De.__version?De.needsLights&&De.lightsStateVersion!==un.state.version||$.isBatchedMesh&&De.batching===!1||!$.isBatchedMesh&&De.batching===!0||$.isBatchedMesh&&De.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&De.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&De.instancing===!1||!$.isInstancedMesh&&De.instancing===!0||$.isSkinnedMesh&&De.skinning===!1||!$.isSkinnedMesh&&De.skinning===!0||$.isInstancedMesh&&De.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&De.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&De.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&De.instancingMorph===!1&&$.morphTexture!==null||De.envMap!==Ne||Y.fog===!0&&De.fog!==Se||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==re.numPlanes||De.numIntersection!==re.numIntersection)||De.vertexAlphas!==Ye||De.vertexTangents!==nt||De.morphTargets!==Le||De.morphNormals!==it||De.morphColors!==Lt||De.morphTargetsCount!==jt||De.numLightProbeGrids!==ym(T.state.lightProbeGridArray)?ct=!0:(De.outputColorSpace!==be||De.toneMapping!==gt)&&(Gs=!0):(ct=!0,De.__version=Y.version);let en=De.currentProgram;(ct===!0||Gs===!0)&&(en=Gs===!0?A_(Y,N,$,be,gt):Fa(Y,N,$),V&&Y.isNodeMaterial&&V.onUpdateProgram(Y,en,De));let Ml=!1,as=!1,Vs=!1,lt=en.getUniforms(),$t=De.uniforms;if(me.useProgram(en.program)&&(Ml=!0,as=!0,Vs=!0),Y.id!==F&&(F=Y.id,as=!0),Ml||k!==M){me.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),lt.setValue(O,"projectionMatrix",M.projectionMatrix),lt.setValue(O,"viewMatrix",M.matrixWorldInverse);let Ht=lt.map.cameraPosition;Ht!==void 0&&Ht.setValue(O,Pt.setFromMatrixPosition(M.matrixWorld)),tt.logarithmicDepthBuffer&&lt.setValue(O,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&lt.setValue(O,"isOrthographic",M.isOrthographicCamera===!0),k!==M&&(k=M,as=!0,Vs=!0)}if(De.needsLights&&(un.state.sunShadowMap.length>0&&lt.setValue(O,"sunShadowMap",un.state.sunShadowMap,ke),un.state.directionalShadowMap.length>0&&lt.setValue(O,"directionalShadowMap",un.state.directionalShadowMap,ke),un.state.spotShadowMap.length>0&&lt.setValue(O,"spotShadowMap",un.state.spotShadowMap,ke),un.state.pointShadowMap.length>0&&lt.setValue(O,"pointShadowMap",un.state.pointShadowMap,ke)),$.isSkinnedMesh){lt.setOptional(O,$,"bindMatrix"),lt.setOptional(O,$,"bindMatrixInverse");let Tt=$.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),lt.setValue(O,"boneTexture",Tt.boneTexture,ke))}$.isBatchedMesh&&(lt.setOptional(O,$,"batchingTexture"),lt.setValue(O,"batchingTexture",$._matricesTexture,ke),lt.setOptional(O,$,"batchingIdTexture"),lt.setValue(O,"batchingIdTexture",$._indirectTexture,ke),lt.setOptional(O,$,"batchingColorTexture"),$._colorsTexture!==null&&lt.setValue(O,"batchingColorTexture",$._colorsTexture,ke));let Yn=Q.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&oe.update($,Q,en),(as||De.receiveShadow!==$.receiveShadow)&&(De.receiveShadow=$.receiveShadow,lt.setValue(O,"receiveShadow",$.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&N.environment!==null&&($t.envMapIntensity.value=N.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=fw()),as){if(lt.setValue(O,"toneMappingExposure",I.toneMappingExposure),De.needsLights&&R_($t,Vs),Se&&Y.fog===!0&&xe.refreshFogUniforms($t,Se),xe.refreshMaterialUniforms($t,Y,ce,ae,T.state.transmissionRenderTarget[M.id]),De.needsLights&&De.numLightProbeGrids>0){let Tt=E,Ht=0;for(let Li of T.state.lightProbeGridArray)Li.texture!==null&&(Tt.textures[Ht]=Li.texture,Tt.min[Ht]=Li.boundingBox.min,Tt.max[Ht]=Li.boundingBox.max,Tt.resolution[Ht]=Li.resolution,Ht++);for(let Li in Tt)Tt[Li].length=Ht;$t.probesSH.value=Tt.textures,$t.probesMin.value=Tt.min,$t.probesMax.value=Tt.max,$t.probesResolution.value=Tt.resolution}aa.upload(O,bm(De),$t,ke)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(aa.upload(O,bm(De),$t,ke),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&lt.setValue(O,"center",$.center),lt.setValue(O,"modelViewMatrix",$.modelViewMatrix),lt.setValue(O,"normalMatrix",$.normalMatrix),lt.setValue(O,"modelMatrix",$.matrixWorld),Y.uniformsGroups!==void 0){let Tt=Y.uniformsGroups;for(let Ht=0,Li=Tt.length;Ht<Li;Ht++){let wm=Tt[Ht];Fe.update(wm,en),Fe.bind(wm,en)}}return en}l(C_,"setProgram");function R_(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.sunLights.needsUpdate=N,M.sunLightShadows.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}l(R_,"markUniformsLightsNeedsUpdate");function P_(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}l(P_,"materialNeedsLights"),this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(M,N,Q){let Y=Ue.get(M);Y.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),Ue.get(M.texture).__webglTexture=N,Ue.get(M.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){let Q=Ue.get(M);Q.__webglFramebuffer=N,Q.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,Q=0){z=M,ie=N,D=Q;let Y=null,$=!1,Se=!1;if(M){let be=Ue.get(M);if(be.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(O.FRAMEBUFFER,be.__webglFramebuffer),Z.copy(M.viewport),se.copy(M.scissor),de=M.scissorTest,me.viewport(Z),me.scissor(se),me.setScissorTest(de),F=-1;return}else if(be.__webglFramebuffer===void 0)ke.setupRenderTarget(M);else if(be.__hasExternalTextures)ke.rebindTextures(M,Ue.get(M.texture).__webglTexture,Ue.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Ye=M.depthTexture;if(be.__boundDepthTexture!==Ye){if(Ye!==null&&Ue.has(Ye)&&(M.width!==Ye.image.width||M.height!==Ye.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(M)}}let Ce=M.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(Se=!0);let Ne=Ue.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ne[N])?Y=Ne[N][Q]:Y=Ne[N],$=!0):M.samples>0&&ke.useMultisampledRTT(M)===!1?Y=Ue.get(M).__webglMultisampledFramebuffer:Array.isArray(Ne)?Y=Ne[Q]:Y=Ne,Z.copy(M.viewport),se.copy(M.scissor),de=M.scissorTest}else Z.copy(Pe).multiplyScalar(ce).floor(),se.copy(Ke).multiplyScalar(ce).floor(),de=je;if(Q!==0&&(Y=J),me.bindFramebuffer(O.FRAMEBUFFER,Y)&&me.drawBuffers(M,Y),me.viewport(Z),me.scissor(se),me.setScissorTest(de),$){let be=Ue.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,be.__webglTexture,Q)}else if(Se){let be=N;for(let Ce=0;Ce<M.textures.length;Ce++){let Ne=Ue.get(M.textures[Ce]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ce,Ne.__webglTexture,Q,be)}}else if(M!==null&&Q!==0){let be=Ue.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,be.__webglTexture,Q)}F=-1};function Sm(M){let N=Ue.get(M);return(N.__readFormat!==M.format||N.__readType!==M.type)&&(N.__readFormat=M.format,N.__readType=M.type,N.__formatReadable=tt.textureFormatReadable(M.format),N.__typeReadable=tt.textureTypeReadable(M.type)),N}l(Sm,"getReadableState"),this.readRenderTargetPixels=function(M,N,Q,Y,$,Se,Ie,be=0){if(!(M&&M.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Ue.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ce=Ce[Ie],Array.isArray(Ce)&&(Ce=Ce[0])),Ce){me.bindFramebuffer(O.FRAMEBUFFER,Ce);try{let Ne=M.textures[be],Ye=Ne.format,nt=Ne.type;M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+be);let Le=Sm(Ne);if(Le.__formatReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-Y&&Q>=0&&Q<=M.height-$&&O.readPixels(N,Q,Y,$,ge.convert(Ye),ge.convert(nt),Se)}finally{let Ne=z!==null?Ue.get(z).__webglFramebuffer:null;me.bindFramebuffer(O.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(M,N,Q,Y,$,Se,Ie,be=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Ue.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ce=Ce[Ie],Array.isArray(Ce)&&(Ce=Ce[0])),Ce)if(N>=0&&N<=M.width-Y&&Q>=0&&Q<=M.height-$){me.bindFramebuffer(O.FRAMEBUFFER,Ce);let Ne=M.textures[be],Ye=Ne.format,nt=Ne.type;M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+be);let Le=Sm(Ne);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let it=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,it),O.bufferData(O.PIXEL_PACK_BUFFER,Se.byteLength,O.STREAM_READ),O.readPixels(N,Q,Y,$,ge.convert(Ye),ge.convert(nt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Lt=z!==null?Ue.get(z).__webglFramebuffer:null;me.bindFramebuffer(O.FRAMEBUFFER,Lt);let gt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await O0(O,gt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,it),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Se),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(it),O.deleteSync(gt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,Q=0){let Y=Math.pow(2,-Q),$=Math.floor(M.image.width*Y),Se=Math.floor(M.image.height*Y),Ie=N!==null?N.x:0,be=N!==null?N.y:0;ke.setTexture2D(M,0),O.copyTexSubImage2D(O.TEXTURE_2D,Q,0,0,Ie,be,$,Se),me.unbindTexture()},this.copyTextureToTexture=function(M,N,Q=null,Y=null,$=0,Se=0){let Ie,be,Ce,Ne,Ye,nt,Le,it,Lt,gt=M.isCompressedTexture?M.mipmaps[Se]:M.image;if(Q!==null)Ie=Q.max.x-Q.min.x,be=Q.max.y-Q.min.y,Ce=Q.isBox3?Q.max.z-Q.min.z:1,Ne=Q.min.x,Ye=Q.min.y,nt=Q.isBox3?Q.min.z:0;else{let lt=Math.pow(2,-$);Ie=Math.floor(gt.width*lt),be=Math.floor(gt.height*lt),M.isDataArrayTexture?Ce=gt.depth:M.isData3DTexture?Ce=Math.floor(gt.depth*lt):Ce=1,Ne=0,Ye=0,nt=0}Y!==null?(Le=Y.x,it=Y.y,Lt=Y.z):(Le=0,it=0,Lt=0);let mt=ge.convert(N.format),jt=ge.convert(N.type),De;N.isData3DTexture?(ke.setTexture3D(N,0),De=O.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(ke.setTexture2DArray(N,0),De=O.TEXTURE_2D_ARRAY):(ke.setTexture2D(N,0),De=O.TEXTURE_2D),me.activeTexture(O.TEXTURE0),me.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,N.flipY),me.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),me.pixelStorei(O.UNPACK_ALIGNMENT,N.unpackAlignment);let un=me.getParameter(O.UNPACK_ROW_LENGTH),ct=me.getParameter(O.UNPACK_IMAGE_HEIGHT),Gs=me.getParameter(O.UNPACK_SKIP_PIXELS),en=me.getParameter(O.UNPACK_SKIP_ROWS),Ml=me.getParameter(O.UNPACK_SKIP_IMAGES);me.pixelStorei(O.UNPACK_ROW_LENGTH,gt.width),me.pixelStorei(O.UNPACK_IMAGE_HEIGHT,gt.height),me.pixelStorei(O.UNPACK_SKIP_PIXELS,Ne),me.pixelStorei(O.UNPACK_SKIP_ROWS,Ye),me.pixelStorei(O.UNPACK_SKIP_IMAGES,nt);let as=M.isDataArrayTexture||M.isData3DTexture,Vs=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){let lt=Ue.get(M),$t=Ue.get(N),Yn=Ue.get(lt.__renderTarget),Tt=Ue.get($t.__renderTarget);me.bindFramebuffer(O.READ_FRAMEBUFFER,Yn.__webglFramebuffer),me.bindFramebuffer(O.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Ht=0;Ht<Ce;Ht++)as&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ue.get(M).__webglTexture,$,nt+Ht),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ue.get(N).__webglTexture,Se,Lt+Ht)),O.blitFramebuffer(Ne,Ye,Ne+Ie,Ye+be,Le,it,Le+Ie,it+be,O.DEPTH_BUFFER_BIT,O.NEAREST);me.bindFramebuffer(O.READ_FRAMEBUFFER,null),me.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if($!==0||M.isRenderTargetTexture||Ue.has(M)){let lt=Ue.get(M),$t=Ue.get(N);me.bindFramebuffer(O.READ_FRAMEBUFFER,L),me.bindFramebuffer(O.DRAW_FRAMEBUFFER,K);for(let Yn=0;Yn<Ce;Yn++)as?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,lt.__webglTexture,$,nt+Yn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,lt.__webglTexture,$),Vs?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,$t.__webglTexture,Se,Lt+Yn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,$t.__webglTexture,Se),$!==0?O.blitFramebuffer(Ne,Ye,Ne+Ie,Ye+be,Le,it,Le+Ie,it+be,O.COLOR_BUFFER_BIT,O.NEAREST):Vs?O.copyTexSubImage3D(De,Se,Le,it,Lt+Yn,Ne,Ye,Ie,be):O.copyTexSubImage2D(De,Se,Le,it,Ne,Ye,Ie,be);me.bindFramebuffer(O.READ_FRAMEBUFFER,null),me.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Vs?M.isDataTexture||M.isData3DTexture?O.texSubImage3D(De,Se,Le,it,Lt,Ie,be,Ce,mt,jt,gt.data):N.isCompressedArrayTexture?O.compressedTexSubImage3D(De,Se,Le,it,Lt,Ie,be,Ce,mt,gt.data):O.texSubImage3D(De,Se,Le,it,Lt,Ie,be,Ce,mt,jt,gt):M.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Se,Le,it,Ie,be,mt,jt,gt.data):M.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Se,Le,it,gt.width,gt.height,mt,gt.data):O.texSubImage2D(O.TEXTURE_2D,Se,Le,it,Ie,be,mt,jt,gt);me.pixelStorei(O.UNPACK_ROW_LENGTH,un),me.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ct),me.pixelStorei(O.UNPACK_SKIP_PIXELS,Gs),me.pixelStorei(O.UNPACK_SKIP_ROWS,en),me.pixelStorei(O.UNPACK_SKIP_IMAGES,Ml),Se===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&O.generateMipmap(De),me.unbindTexture()},this.initRenderTarget=function(M){Ue.get(M).__webglFramebuffer===void 0&&ke.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?ke.setTextureCube(M,0):M.isData3DTexture?ke.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ke.setTexture2DArray(M,0):ke.setTexture2D(M,0),me.unbindTexture()},this.resetState=function(){ie=0,D=0,z=null,me.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}};l(op,"WebGLRenderer");var Du=op;function Eg(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Ft;c.morphTargetsRelative=o;let u=0;for(let h=0;h<i.length;++h){let f=i[h],d=0,p=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let x in f.attributes){if(!n.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+x+'" attribute exists among all geometries, or in none of them.'),null;r[x]===void 0&&(r[x]=[]),r[x].push(f.attributes[x]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let x in f.morphAttributes){if(!s.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[x].length!==i[0].morphAttributes[x].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+x+'" morph attribute.'),null;a[x]===void 0&&(a[x]=[]),a[x].push(f.morphAttributes[x]),p++}if(p!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let x;if(t)x=f.index.count;else if(f.attributes.position!==void 0)x=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(u,x,h),u+=x}}if(t){let h=0,f=[];for(let d=0;d<i.length;++d){let p=i[d].index;for(let x=0;x<p.count;++x)f.push(p.getX(x)+h);h+=i[d].attributes.position.count}c.setIndex(f)}for(let h in r){let f=wg(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<f;++d){let p=[];for(let y=0;y<a[h].length;++y)p.push(a[h][y][d]);let x=wg(p);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(x)}}}return c}l(Eg,"mergeGeometries");function wg(i){let e,t,n,s=-1,r=0;for(let u=0;u<i.length;++u){let h=i[u];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Mt(a,t,n),c=0;for(let u=0;u<i.length;++u){let h=i[u];if(h.isInterleavedBufferAttribute){let f=c/t;for(let d=0,p=h.count;d<p;d++)for(let x=0;x<t;x++){let y=h.getComponent(d,x);o.setComponent(d+f,x,y)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}l(wg,"mergeAttributes");var Tg="#c79a72",pw="#5a4a3a";var rn="#7a5532",up="#5f6266",Ag="#8a8f96",ti="#5d6447",lp="#e8e0cc",Pg="#6e4b2f",nr="#8a8580",Cg="#5b3e27",la="#7d858c",mw=new W(0,1,0),Ee=new fi(1,1,1),qt=new pi(.5,.5,1,10),ir=new mi(.5,1,10),ca=new ys(.5,10,8),fp=class fp{constructor(){this.parts=[]}add(e){return this.parts.push(e),this}addAll(e,t,n=0){let s=Math.cos(n),r=Math.sin(n);return e.parts.forEach(a=>{let[o,c,u]=a.at;this.parts.push({...a,at:[t[0]+o*s+u*r,t[1]+c,t[2]-o*r+u*s],yaw:(a.yaw??0)+n})}),this}};l(fp,"Parts");var Yt=fp,gw=l((i,e,t)=>{switch(i){case"ancient":t.add({shape:ca,colour:e[1],at:[0,.172,0],size:[.048,.03,.048]});break;case"medieval":t.add({shape:ir,colour:up,at:[0,.188,0],size:[.05,.04,.05]});break;case"renaissance":t.add({shape:Ee,colour:"#2a2a2a",at:[0,.178,0],size:[.06,.016,.06]});break;case"industrial":t.add({shape:qt,colour:e[0],at:[0,.18,0],size:[.046,.022,.046]});break;default:t.add({shape:ca,colour:ti,at:[0,.172,0],size:[.052,.034,.052]})}},"headgear"),xw=l((i,e,t,n)=>{switch(i){case"club":n.add({shape:qt,colour:rn,at:[.04,.1,.01],size:[.014,.08,.014],turn:[0,0,.5]});break;case"spear":n.add({shape:qt,colour:rn,at:[.04,.12,0],size:[.006,.2,.006]}),n.add({shape:ir,colour:up,at:[.04,.23,0],size:[.012,.025,.012]});break;case"pike":n.add({shape:qt,colour:rn,at:[.04,.15,0],size:[.006,.28,.006]}),n.add({shape:ir,colour:Ag,at:[.04,.3,0],size:[.012,.03,.012]});break;case"sword":n.add({shape:Ee,colour:Ag,at:[.045,.12,.012],size:[.008,.07,.004],turn:[.3,0,0]});break;case"bow":n.add({shape:Ee,colour:rn,at:[-.04,.11,.02],size:[.006,.11,.006]});break;case"lance":n.add({shape:qt,colour:rn,at:[.04,.14,.05],size:[.006,.24,.006],turn:[1.1,0,0]});break;case"musket":case"rifle":n.add({shape:Ee,colour:i==="rifle"?"#3a3a3a":rn,at:[.03,.12,.02],size:[.008,.11,.01],turn:[0,0,.4]});break;case"case":n.add({shape:Ee,colour:"#3b2a1e",at:[.042,.072,.008],size:[.03,.022,.009]});break;case"pack":n.add({shape:Ee,colour:"#7a6a48",at:[0,.115,-.025],size:[.042,.05,.022]}).add({shape:qt,colour:rn,at:[.042,.1,.012],size:[.006,.19,.006]});break;default:}e==="ancient"&&(i==="spear"||i==="sword")&&n.add({shape:qt,colour:t[1],at:[-.035,.1,.012],size:[.05,.008,.05],turn:[Math.PI/2,0,.2]})},"carried"),_w={snow:{coat:"#e8eaec",legs:"#d4d7da"},irregular:{coat:"#6a5a40",legs:"#4a4036"}},hp=l((i,e,t,{legs:n=!0,dress:s}={})=>{let r=new Yt,a=s===void 0?void 0:_w[s],o=a?.coat??(i==="modern"?ti:t[0]),c=a?.legs??(i==="ancient"?Tg:i==="modern"?ti:pw);return n&&(r.add({shape:Ee,colour:c,at:[-.012,.04,0],size:[.018,.08,.02]}),r.add({shape:Ee,colour:c,at:[.012,.04,0],size:[.018,.08,.02]})),r.add({shape:Ee,colour:o,at:[0,.112,0],size:[.05,.065,.028]}),r.add({shape:Ee,colour:t[1],at:[0,.088,0],size:[.052,.012,.03]}),r.add({shape:Ee,colour:o,at:[-.032,.11,0],size:[.014,.055,.016]}),r.add({shape:Ee,colour:o,at:[.032,.11,0],size:[.014,.055,.016]}),r.add({shape:ca,colour:Tg,at:[0,.16,0],size:[.034,.038,.034]}),s==="snow"?r.add({shape:ca,colour:"#f2f3f4",at:[0,.172,-.002],size:[.044,.034,.044]}):s==="irregular"?r.add({shape:ca,colour:t[1],at:[0,.176,0],size:[.042,.016,.042]}):gw(i,t,r),s==="parachute"&&r.add({shape:Ee,colour:"#4d5340",at:[0,.112,-.026],size:[.046,.06,.026]}),xw(e,i,t,r),r},"person"),Rg=l(i=>i<=1?[[0,0]]:i===2?[[-.045,0],[.045,.02]]:[[0,-.04],[-.06,.04],[.06,.04]],"formation"),cp=l((i=Pg)=>new Yt().add({shape:Ee,colour:i,at:[0,.09,0],size:[.05,.05,.14]}).add({shape:Ee,colour:i,at:[0,.13,.08],size:[.03,.06,.03],turn:[.5,0,0]}).add({shape:Ee,colour:i,at:[0,.155,.105],size:[.026,.026,.05]}).add({shape:Ee,colour:i,at:[-.017,.035,.05],size:[.012,.07,.012]}).add({shape:Ee,colour:i,at:[.017,.035,.05],size:[.012,.07,.012]}).add({shape:Ee,colour:i,at:[-.017,.035,-.05],size:[.012,.07,.012]}).add({shape:Ee,colour:i,at:[.017,.035,-.05],size:[.012,.07,.012]}),"horse"),vw=l((i,e,t)=>new Yt().addAll(cp(),[0,0,0]).add({shape:Ee,colour:t[0],at:[0,.118,0],size:[.056,.01,.06]}).addAll(hp(i,e,t,{legs:!1}),[0,.04,0]),"rider"),yw=l(i=>new Yt().add({shape:Ee,colour:nr,at:[0,.12,0],size:[.09,.08,.17]}).add({shape:Ee,colour:nr,at:[0,.14,.1],size:[.07,.07,.06]}).add({shape:qt,colour:nr,at:[0,.08,.14],size:[.016,.09,.016],turn:[.3,0,0]}).add({shape:Ee,colour:nr,at:[-.03,.04,.05],size:[.025,.08,.025]}).add({shape:Ee,colour:nr,at:[.03,.04,.05],size:[.025,.08,.025]}).add({shape:Ee,colour:nr,at:[-.03,.04,-.05],size:[.025,.08,.025]}).add({shape:Ee,colour:nr,at:[.03,.04,-.05],size:[.025,.08,.025]}).add({shape:Ee,colour:i[0],at:[0,.18,-.01],size:[.07,.03,.07]}).add({shape:Ee,colour:i[1],at:[0,.2,-.01],size:[.074,.008,.074]}),"elephant"),an=l((i,e=.05)=>({shape:qt,colour:rn,at:i,size:[e,.01,e],turn:[0,0,Math.PI/2]}),"wheel"),bw=l((i,e,t)=>{if(e==="chariot")return new Yt().addAll(cp(),[0,0,.09]).add({shape:Ee,colour:rn,at:[0,.055,-.04],size:[.064,.035,.05]}).add({shape:Ee,colour:i[0],at:[0,.075,-.016],size:[.066,.012,.006]}).add(an([-.042,.035,-.045],.065)).add(an([.042,.035,-.045],.065)).addAll(hp(t,"spear",i,{legs:!1}),[0,0,-.045]);let n=new Yt().addAll(cp(t==="ancient"?"#8a7a64":Pg),[0,0,.1]).add({shape:Ee,colour:rn,at:[0,.07,-.06],size:[.07,.04,.1]}).add({shape:Ee,colour:i[0],at:[0,.092,-.06],size:[.072,.008,.102]}).add(an([-.042,.03,-.03])).add(an([.042,.03,-.03])).add(an([-.042,.03,-.09])).add(an([.042,.03,-.09]));return e==="wagon"?n.add({shape:qt,colour:lp,at:[0,.1,-.06],size:[.07,.1,.07],turn:[Math.PI/2,0,0]}):n.add({shape:Ee,colour:lp,at:[-.016,.112,-.04],size:[.032,.03,.04]}).add({shape:Ee,colour:i[0],at:[.018,.11,-.08],size:[.03,.026,.036]}).add({shape:Ee,colour:"#8a5a2a",at:[.014,.112,-.035],size:[.026,.03,.03]}),n},"cart"),Mw=l((i,e,t)=>{if(i==="ancient"||i==="medieval")return new Yt().add({shape:Ee,colour:rn,at:[0,.04,0],size:[.08,.025,.14]}).add({shape:Ee,colour:rn,at:[0,.09,-.02],size:[.012,.12,.012],turn:[-.7,0,0]}).add({shape:Ee,colour:e[0],at:[0,.055,.05],size:[.082,.012,.03]}).add(an([-.045,.03,.04],.045)).add(an([.045,.03,.04],.045)).add(an([-.045,.03,-.04],.045)).add(an([.045,.03,-.04],.045));let n=t?.19:i==="renaissance"?.12:.16,s=i==="renaissance"?"#3d3a36":i==="modern"?ti:up;return new Yt().add({shape:qt,colour:s,at:[0,.07,.04],size:[.024,n,.024],turn:[1.35,0,0]}).add({shape:Ee,colour:i==="modern"?ti:rn,at:[0,.045,-.02],size:[.05,.03,.09]}).add({shape:Ee,colour:e[0],at:[0,.064,-.02],size:[.052,.008,.06]}).add(an([-.04,.035,0],.07)).add(an([.04,.035,0],.07))},"siege"),Sw=l((i,e,t)=>{if(i==="industrial")return new Yt().add({shape:Ee,colour:la,at:[0,.07,-.03],size:[.08,.07,.12]}).add({shape:Ee,colour:e[0],at:[0,.06,.07],size:[.07,.05,.05]}).add(an([-.045,.025,.06],.045)).add(an([.045,.025,.06],.045)).add(an([-.045,.025,-.06],.045)).add(an([.045,.025,-.06],.045));let n=new Yt().add({shape:Ee,colour:ti,at:[0,.045,0],size:[.1,.05,.17]}).add({shape:Ee,colour:"#2e2e2a",at:[-.055,.028,0],size:[.022,.05,.18]}).add({shape:Ee,colour:"#2e2e2a",at:[.055,.028,0],size:[.022,.05,.18]}).add({shape:Ee,colour:e[0],at:[0,.072,-.05],size:[.08,.006,.04]});return t?n.add({shape:Ee,colour:ti,at:[0,.088,-.01],size:[.07,.035,.08]}).add({shape:qt,colour:ti,at:[0,.09,.08],size:[.014,.13,.014],turn:[Math.PI/2,0,0]}):n.add({shape:Ee,colour:ti,at:[0,.07,.06],size:[.09,.03,.05],turn:[.4,0,0]}),n},"vehicle"),ww=l((i,e)=>{let t=i.large?1.25:1,n=.3*t,s=.07*t,r=new Yt;switch(i.hull){case"oars":case"sail":{r.add({shape:Ee,colour:Cg,at:[0,.03,0],size:[s,.045,n*.8]}).add({shape:ir,colour:Cg,at:[0,.03,n*.45],size:[s,.1,.045],turn:[Math.PI/2,0,0]}).add({shape:Ee,colour:e[0],at:[0,.056,0],size:[s+.004,.008,n*.82]});let a=i.hull==="oars"?1:i.large?3:2;for(let o=0;o<a;o++){let c=(o-(a-1)/2)*.09*t;r.add({shape:qt,colour:rn,at:[0,.14,c],size:[.008,.2,.008]}).add({shape:Ee,colour:o===0?e[1]:lp,at:[0,.16,c],size:[s*1.3,.09,.005]})}return(i.guns??0)>0&&r.add({shape:Ee,colour:"#1f1f1f",at:[0,.036,0],size:[s+.006,.009,n*.66]}),i.hull==="oars"&&r.add({shape:Ee,colour:rn,at:[-s*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,.4]}).add({shape:Ee,colour:rn,at:[s*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,-.4]}),r}case"submarine":return r.add({shape:qt,colour:"#33383d",at:[0,.018,0],size:[.05,n,.05],turn:[Math.PI/2,0,0]}).add({shape:Ee,colour:"#33383d",at:[0,.055,.02],size:[.02,.04,.05]}).add({shape:Ee,colour:e[0],at:[0,.078,.02],size:[.022,.006,.052]});case"carrier":return r.add({shape:Ee,colour:la,at:[0,.035,0],size:[s*1.1,.05,n*1.15]}).add({shape:Ee,colour:"#55595e",at:[0,.062,0],size:[s*1.5,.008,n*1.2]}).add({shape:Ee,colour:la,at:[s*.55,.09,.02],size:[.02,.05,.06]}).add({shape:Ee,colour:e[0],at:[s*.55,.12,.02],size:[.022,.008,.062]});default:return r.add({shape:Ee,colour:i.era==="industrial"?"#4a4a48":la,at:[0,.03,0],size:[s,.045,n*.85]}).add({shape:ir,colour:i.era==="industrial"?"#4a4a48":la,at:[0,.03,n*.47],size:[s,.08,.045],turn:[Math.PI/2,0,0]}).add({shape:Ee,colour:la,at:[0,.075,-.02],size:[s*.6,.05,n*.3]}).add({shape:qt,colour:e[0],at:[0,.12,-.03],size:[.022,.05,.022]}).add({shape:Ee,colour:e[1],at:[0,.056,0],size:[s+.004,.006,n*.86]}),[.3,-.34,.14].slice(0,i.guns??0).forEach(a=>{let o=a>0?1:-1;r.add({shape:Ee,colour:"#5f666c",at:[0,.066,n*a],size:[.035,.02,.035]}).add({shape:qt,colour:"#5f666c",at:[0,.07,n*a+o*.04],size:[.008,.06,.008],turn:[Math.PI/2,0,0]})}),i.missiles&&[-1,1].forEach(a=>r.add({shape:Ee,colour:"#4a5056",at:[a*s*.22,.072,-n*.3],size:[.022,.022,.05],turn:[-.5,0,0]})),r}},"ship"),Ew=l((i,e)=>{let t=i.large?1.3:1,n=i.stealth?"#2c3034":i.large?"#6e7378":"#7d8890";return new Yt().add({shape:qt,colour:n,at:[0,.3,0],size:[.03*t,.2*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:ir,colour:n,at:[0,.3,.12*t],size:[.03*t,.05*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:Ee,colour:n,at:[0,.3,.01],size:[.26*t,.006,.05*t]}).add({shape:Ee,colour:e[0],at:[0,.304,.01],size:[.06*t,.004,.052*t]}).add({shape:Ee,colour:n,at:[0,.3,-.09*t],size:[.09*t,.005,.03*t]}).add({shape:Ee,colour:e[1],at:[0,.325,-.09*t],size:[.005,.045,.03*t]})},"aircraft"),Tw=l(i=>new Yt().add({shape:ca,colour:ti,at:[0,.27,.02],size:[.06,.055,.09]}).add({shape:Ee,colour:ti,at:[0,.275,-.08],size:[.015,.015,.12]}).add({shape:Ee,colour:i[0],at:[0,.3,-.13],size:[.004,.04,.025]}).add({shape:Ee,colour:"#2e2e2e",at:[0,.31,.02],size:[.24,.003,.012]}).add({shape:Ee,colour:"#2e2e2e",at:[0,.31,.02],size:[.012,.003,.24]}),"helicopter"),Aw=l((i,e)=>{let t=e?1.4:1;return new Yt().add({shape:qt,colour:"#d8d8d8",at:[0,.14*t,0],size:[.024*t,.18*t,.024*t]}).add({shape:ir,colour:e?"#c8a020":i[0],at:[0,.255*t,0],size:[.024*t,.05*t,.024*t]}).add({shape:Ee,colour:i[1],at:[0,.06*t,0],size:[.07*t,.03*t,.004]}).add({shape:Ee,colour:i[1],at:[0,.06*t,0],size:[.004,.03*t,.07*t]})},"missile"),Ig=l((i,e)=>{switch(i.shape){case"foot":{let t=new Yt;return Rg(i.squad).forEach(([n,s],r)=>t.addAll(hp(i.era,i.gear??"none",e,{dress:i.dress}),[n,0,s],r*.3-.3)),t}case"mounted":{let t=new Yt;return Rg(i.squad).forEach(([n,s])=>t.addAll(vw(i.era,i.gear??"none",e),[n*1.4,0,s])),t}case"elephant":return yw(e);case"cart":return bw(e,i.cart??"wagon",i.era);case"siege":return Mw(i.era,e,i.large===!0);case"vehicle":return Sw(i.era,e,i.large===!0);case"ship":return ww(i,e);case"aircraft":return Ew(i,e);case"helicopter":return Tw(e);default:return Aw(e,i.large===!0)}},"figureParts"),Cw=l(({at:i,size:e,turn:t=[0,0,0],yaw:n=0})=>new ft().compose(new W(...i),new pn().setFromAxisAngle(mw,n).multiply(new pn().setFromEuler(new Cn(...t))),new W(...e)),"partMatrix"),dp=l(i=>{let e=i.map(n=>{let{shape:s,colour:r}=n,a=s.clone(),o=new Oe(r),c=a.getAttribute("position").count,u=new Float32Array(c*3);for(let h=0;h<c;h++)u.set([o.r,o.g,o.b],h*3);return a.applyMatrix4(Cw(n)),a.setAttribute("color",new Mt(u,3)),a}),t=Eg(e)??new Ft;return e.forEach(n=>n.dispose()),t.computeBoundingBox(),t.computeBoundingSphere(),t},"mergeParts"),Lg=l((i,e)=>dp(Ig(i,e).parts),"figureGeometry"),Rw=new pi(.19,.2,1,28),Pw=new bs(.22,.014,4,32),Dg=l((i,e,{fortified:t,scale:n,stand:s})=>{let r=i.shape==="ship",a=r?0:s,o=Ig(i,e).parts.map(c=>({...c,at:[c.at[0]*n,c.at[1]*n+a,c.at[2]*n],size:[c.size[0]*n,c.size[1]*n,c.size[2]*n]}));return r||o.push({shape:Rw,colour:e[1],at:[0,s/2,0],size:[1,s,1]}),t&&o.push({shape:Pw,colour:"#b5ab98",at:[0,a+.015,0],size:[1,1,2.5],turn:[Math.PI/2,0,0]}),dp(o)},"unitBodyGeometry"),Iw=new mi(.75,.5,4),Lw=new bs(.36,.025,6,24),Ng=l((i,e,t)=>dp([...i.flatMap(({x:n,z:s,width:r,height:a})=>[{shape:Ee,colour:"#b5ab98",at:[n,a/2,s],size:[r,a,r]},{shape:Iw,colour:e,at:[n,a+r*.2,s],size:[r,r*.8,r],turn:[0,Math.PI/4,0]}]),...t?[{shape:Lw,colour:"#8d8577",at:[0,.02,0],size:[1,1,2.5],turn:[Math.PI/2,0,0]}]:[]]),"cityGeometry");var Jt=l((i,e,t=3)=>({shape:"foot",era:i,gear:e,squad:t}),"foot"),Co=l((i,e,t=2)=>({shape:"mounted",era:i,gear:e,squad:t}),"mounted"),In=l((i,e,t=!1,n=0,s=!1)=>({shape:"ship",era:i,hull:e,squad:1,large:t,guns:n,missiles:s}),"ship"),Ro=l((i,e=!1,t=!1)=>({shape:"aircraft",era:i,squad:1,large:e,stealth:t}),"aircraft"),pp=l((i,e)=>({shape:"cart",era:i,cart:e,squad:1}),"cart"),Ug={Warrior:Jt("ancient","club"),Spearman:Jt("ancient","spear"),Swordman:Jt("ancient","sword"),Archer:Jt("ancient","bow"),Horseman:Co("ancient","spear"),Chariot:pp("ancient","chariot"),Elephant:{shape:"elephant",era:"ancient",squad:1},Catapult:{shape:"siege",era:"ancient",squad:1},Trireme:In("ancient","oars"),Settlers:pp("ancient","wagon"),Diplomat:Jt("ancient","case",1),Caravan:pp("ancient","goods"),Explorer:Jt("ancient","pack",1),Pikeman:Jt("medieval","pike"),Knight:Co("medieval","lance"),Crusader:Co("medieval","sword"),Fanatic:Jt("medieval","sword"),Sail:In("medieval","sail"),Musketman:Jt("renaissance","musket"),Dragoon:Co("renaissance","musket"),Cannon:{shape:"siege",era:"renaissance",squad:1},Frigate:In("renaissance","sail",!0,1),Galleon:In("renaissance","sail",!0),Rifleman:Jt("industrial","rifle"),AlpineTrooper:{...Jt("industrial","rifle"),dress:"snow"},Partisan:{...Jt("industrial","rifle"),dress:"irregular"},Cavalry:Co("industrial","rifle"),Artillery:{shape:"siege",era:"industrial",squad:1},Engineer:Jt("industrial","none",2),Ironclad:In("industrial","steam",!1,1),Transport:In("industrial","steam",!0),Freight:{shape:"vehicle",era:"industrial",squad:1},Spy:Jt("industrial","none",1),MechanizedInfantry:{shape:"vehicle",era:"modern",squad:1},Marine:Jt("modern","rifle"),Paratrooper:{...Jt("modern","rifle"),dress:"parachute"},Tank:{shape:"vehicle",era:"modern",squad:1,large:!0},Howitzer:{shape:"siege",era:"modern",squad:1,large:!0},Destroyer:In("modern","steam",!1,1),Cruiser:In("modern","steam",!0,2),MissileCruiser:In("modern","steam",!0,1,!0),Battleship:In("modern","steam",!0,3),Submarine:In("modern","submarine"),Carrier:In("modern","carrier",!0),Fighter:Ro("modern"),StealthFighter:Ro("modern",!1,!0),Bomber:Ro("modern",!0),StealthBomber:Ro("modern",!0,!0),Helicopter:{shape:"helicopter",era:"modern",squad:1},CruiseMissile:{shape:"missile",era:"modern",squad:1},Nuclear:{shape:"missile",era:"modern",squad:1,large:!0}},Fg=l((i,e=[])=>(Object.prototype.hasOwnProperty.call(Ug,i)?Ug[i]:void 0)??(e.includes("Naval")||e.includes("NavalTransport")?In("industrial","steam"):e.includes("Air")?Ro("modern"):Jt("ancient","spear")),"unitLook");var Dw=.03,kg="#fff4b0",Nw=.04,Ou=.004,mp=.018,Og=.01,Bg=.022,zg=.03,Gg=.03,zu=.002,Uw="#4caf50",Fw="#e0b030",Ow="#d04030",Bw=256,sr,ni,rr,ar,ii,or,$i,ha,gp=class gp{constructor(){j(this,sr,new Map);j(this,ni,new Map);j(this,rr,new Map);j(this,ar,new Map);j(this,ii,new Map);j(this,or,new Map);j(this,$i,null);j(this,ha,0);this.figureMaterial=new Xi({vertexColors:!0,roughness:.8,metalness:.05});this.geometries={ring:new bs(.23,.018,8,36)}}material(e,t=!1){let n=`${e}${t?" glow":""}`,s=m(this,sr).get(n);return s===void 0&&(s=new Xi({color:new Oe(e),roughness:.75,metalness:.05,...t?{emissive:new Oe(e),emissiveIntensity:.6}:{}}),m(this,sr).set(n,s)),s}body(e,t,n,s=1){let r=JSON.stringify([e,t,n,s]),a=m(this,ar).get(r);return a===void 0&&(a=Dg(e,t,{fortified:n,scale:s,stand:Dw}),m(this,ar).set(r,a)),a}city(e){let t=Vw(e),n=JSON.stringify([e.name,t.length,e.colours[0],e.walled]),s=m(this,ii).get(n);return s===void 0&&(s=Ng(t,e.colours[0],e.walled),m(this,ii).set(n,s)),s}figure(e,t){let n=JSON.stringify([e,t]),s=m(this,rr).get(n);return s===void 0&&(s=Lg(e,t),m(this,rr).set(n,s)),s}plain(e){let t=m(this,or).get(e);return t===void 0&&(t=new xs({color:new Oe(e),sizeAttenuation:!1,depthTest:!1}),m(this,or).set(e,t)),t}pointer(){if(m(this,$i)===null){let e=document.createElement("canvas"),t=e.getContext("2d");e.width=32,e.height=32,t!==null&&(t.fillStyle=kg,t.strokeStyle="#3a3420",t.lineWidth=3,t.beginPath(),t.moveTo(3,5),t.lineTo(29,5),t.lineTo(16,28),t.closePath(),t.fill(),t.stroke());let n=new vs(e);n.colorSpace=Nt,H(this,$i,new xs({map:n,sizeAttenuation:!1,depthTest:!1,transparent:!0}))}return m(this,$i)}label(e,t,n){let s=`${e}\0${t}\0${n}`,r=m(this,ni).get(s);if(r===void 0){let a=document.createElement("canvas"),o=a.getContext("2d"),c="600 28px system-ui, sans-serif",u=40;o!==null&&(o.font=c,a.width=Math.ceil(o.measureText(e).width)+24,a.height=u,o.font=c,o.fillStyle=t,o.beginPath(),o.roundRect?.(0,0,a.width,u,10),o.fill(),o.fillStyle=n,o.textBaseline="middle",o.fillText(e,12,u/2+1));let h=new vs(a);h.colorSpace=Nt,r=new xs({map:h,sizeAttenuation:!1,depthTest:!1,transparent:!0}),m(this,ni).set(s,r)}return r}get sweepDue(){return m(this,ni).size+m(this,ii).size>Math.max(Bw,m(this,ha)*2)}sweep(e){let t=new Set;for(let n of e)n.traverse(s=>{s instanceof wt&&t.add(s.geometry),s instanceof jr&&t.add(s.material)});m(this,ni).forEach((n,s)=>{t.has(n)||(n.map?.dispose(),n.dispose(),m(this,ni).delete(s))}),m(this,ii).forEach((n,s)=>{t.has(n)||(n.dispose(),m(this,ii).delete(s))}),H(this,ha,m(this,ni).size+m(this,ii).size)}dispose(){Object.values(this.geometries).forEach(e=>e.dispose()),m(this,rr).forEach(e=>e.dispose()),m(this,ar).forEach(e=>e.dispose()),m(this,ii).forEach(e=>e.dispose()),m(this,ar).clear(),m(this,ii).clear(),this.figureMaterial.dispose(),m(this,or).forEach(e=>e.dispose()),m(this,$i)?.map?.dispose(),m(this,$i)?.dispose(),m(this,or).clear(),H(this,$i,null),m(this,sr).forEach(e=>e.dispose()),m(this,ni).forEach(e=>{e.map?.dispose(),e.dispose()}),m(this,sr).clear(),m(this,ni).clear(),m(this,rr).clear(),H(this,ha,0)}};sr=new WeakMap,ni=new WeakMap,rr=new WeakMap,ar=new WeakMap,ii=new WeakMap,or=new WeakMap,$i=new WeakMap,ha=new WeakMap,l(gp,"MarkerKit");var Gu=gp,Vg=l(i=>{let{r:e,g:t,b:n}=new Oe(i);return .2126*e+.7152*t+.0722*n>.35?"#111111":"#ffffff"},"textOn"),ua=l((i,e,t,n)=>(i.position.set(e,t,n),i),"place"),Bu=l((i,e)=>{let t=e*2654435761;for(let n=0;n<i.length;n++)t=Math.imul(t^i.charCodeAt(n),2246822519);return(t>>>0)%1e4/1e4},"fractionOf"),zw=l(i=>[i.count>1?String(i.count):"",i.status??"",i.veteran?"\u2605":""].filter(e=>e!=="").join(" "),"flagText"),kw=3,Gw=4,Po=l((i,e,t,n,s=kw)=>{let r=new jr(i);return r.scale.set(e,t,1),r.center.set(.5,-n/t),r.renderOrder=s,r.frustumCulled=!1,r},"badge"),Hg=l((i,e,t)=>{let n=i.map?.image,s=n&&n.height>0&&n.width>0?n.width/n.height:1;return Po(i,e*s,e,t)},"label"),ku=[0,.36,0],Vw=l(i=>{let e=Math.min(12,2+Math.ceil(i.size/2));return Array.from({length:e},(t,n)=>{let s=n/e*Math.PI*2+Bu(i.name,1)*6,r=n===0?0:.12+Bu(i.name,n+2)*.18;return{x:Math.cos(s)*r,z:Math.sin(s)*r,width:.07+Bu(i.name,n+20)*.05,height:(n===0?.13:.05)+Bu(i.name,n+40)*.05}})},"buildingsOf"),Hw=l((i,e)=>{let t=new fn;return t.add(new wt(i.city(e),i.figureMaterial)),t.add(ua(Hg(i.label(`${e.name}  ${e.size}${e.disorder?" !":""}`,e.colours[0],Vg(e.colours[0])),Gg,0),...ku)),t},"drawCity"),Ww=l((i,e,t=null)=>{let n=new fn,{ring:s}=i.geometries,r=Fg(e.type,e.kinds),a=i.body(r,e.colours,e.fortified,e.size),o=a.boundingBox?.max.y??.3,c=t?.at??[0,o+Nw,0],u=e.health!==null,h=(t?.over??0)+(u?Ou+zu:0),f=h+Og+zu,d=zw(e),p=f+(d===""?0:Bg+zu),x=new wt(a,i.figureMaterial);if(x.rotation.y=e.facing,n.add(x),e.health!==null){let y=Math.max(0,Math.min(1,e.health));if(n.add(ua(Po(i.plain("#202020"),mp,Ou,t?.over??0),...c)),y>0){let _=Po(i.plain(y>.5?Uw:y>.25?Fw:Ow),mp*y,Ou*.6,(t?.over??0)+Ou*.2);_.center.x=1/(2*y),n.add(ua(_,...c))}}if(n.add(ua(Po(i.plain(e.colours[0]),mp,Og,h),...c)),d!==""&&n.add(ua(Hg(i.label(d,e.colours[0],Vg(e.colours[0])),Bg,f),...c)),e.active){let y=new wt(s,i.material(kg,!0));y.rotation.x=Math.PI/2,y.position.y=.01,n.add(y,ua(Po(i.pointer(),zg,zg,p,Gw),...c))}return n},"drawUnit"),Vu="unit",Wg=l((i,e)=>{let t=new fn;if(e.city!==null&&t.add(Hw(i,e.city)),e.unit!==null){let n=e.city===null?0:.26,s=Ww(i,e.unit,e.city===null?null:{at:[ku[0],ku[1],ku[2]-n],over:Gg+zu});s.name=Vu,s.position.z=n,t.add(s)}return t},"drawMarker");var Ts=l(i=>i*Math.PI/180,"degrees"),Xw=Ts(25),qw=Ts(80),Yw=5,$w=90,Zw=1.12,Io=Ts(40),_p=Ts(45),Jw={above:{yaw:0,pitch:Ts(80)},classic:{yaw:0,pitch:Ts(55)},isometric:{yaw:Ts(45),pitch:Ts(30)}};var Xg=l(i=>({focus:i,...Jw.classic,distance:24}),"defaultOrbit"),xp=l((i,e,t)=>Math.min(t,Math.max(e,i)),"clamp"),qg=l(i=>{let e=Math.PI*2;return(i%e+e)%e},"normaliseYaw"),lr=l(i=>({...i,yaw:qg(i.yaw),pitch:xp(i.pitch,Xw,qw),distance:xp(i.distance,Yw,$w)}),"clampOrbit"),fa=l((i,e)=>lr({...i,distance:i.distance/Zw**e}),"zoomed"),Hu=l(({yaw:i,pitch:e})=>{let t=Math.sin(i),n=Math.cos(i),s=Math.sin(e),r=Math.cos(e);return{forward:[t*r,-s,-n*r],right:[n,0,t],up:[t*s,r,-n*s]}},"basis"),Wu=l((i,e)=>{let{forward:t}=Hu(i),[n,s]=i.focus;return[n-t[0]*i.distance,e-t[1]*i.distance,s-t[2]*i.distance]},"eye"),vp=l((i,e,[t,n,s],r)=>{let{forward:a,right:o,up:c}=Hu(i),u=Wu(i,e),h=[t-u[0],n-u[1],s-u[2]],f=l(x=>(h[0]??0)*x[0]+(h[1]??0)*x[1]+(h[2]??0)*x[2],"dot"),d=f(a),p=Math.tan(Io/2);return d<=1e-6?null:[f(o)/(d*p*r),f(c)/(d*p)]},"toScreen"),yp=l((i,e,[t,n],s)=>{let{forward:r,right:a,up:o}=Hu(i),c=Math.tan(Io/2);return{from:Wu(i,e),direction:[0,1,2].map(u=>(r[u]??0)+t*c*s*(a[u]??0)+n*c*(o[u]??0))}},"rayThrough"),da=l((i,e,t,n,s=e)=>{let{from:r,direction:a}=yp(i,e,t,n);if(a[1]>-1e-6)return null;let o=(s-r[1])/a[1];return o<=0?null:[r[0]+a[0]*o,r[2]+a[2]*o]},"groundAt"),Yg=l((i,e,t,n,s)=>{let r=da(i,e,t,s),a=da(i,e,n,s);if(r!==null&&a!==null)return{...i,focus:[i.focus[0]+r[0]-a[0],i.focus[1]+r[1]-a[1]]};let o=(t[0]-n[0])*s,c=(t[1]-n[1])/Math.sin(i.pitch),u=i.distance*Math.tan(Io/2),{right:h}=Hu(i),f=[Math.sin(i.yaw),-Math.cos(i.yaw)];return{...i,focus:[i.focus[0]+(o*h[0]+c*(f[0]??0))*u,i.focus[1]+(o*h[2]+c*(f[1]??0))*u]}},"panned"),$g=l((i,e,t)=>{let n=l((a,o)=>(a%o+o)%o,"wrap"),[s,r]=i.focus;return{...i,yaw:qg(i.yaw),focus:[n(s,e.u),e.v===null?xp(r,0,t):n(r,e.v)]}},"settled"),Zg=l((i,e,t,n,s)=>{let r=l((c,u)=>u===null?c:c-u*Math.round(c/u),"short"),a=Math.PI*2,o=t*t*(3-2*t);return{focus:[i.focus[0]+r(e.focus[0]-i.focus[0],n.u)*o,i.focus[1]+r(e.focus[1]-i.focus[1],n.v)*o],yaw:i.yaw+(s??r(e.yaw-i.yaw,a))*o,pitch:i.pitch+(e.pitch-i.pitch)*o,distance:i.distance+(e.distance-i.distance)*o}},"between"),Xu=l(i=>({near:i*1.2,far:i*3.5}),"sightFor");var Kw=new Oe("#3f8a8c"),Qw=new Oe("#173a52"),jw=new Oe("#e8eeee"),Jg=`
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
`,e1=`
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
`,As,Hn,Ln,Mp=class Mp{constructor(e,t){j(this,As);j(this,Hn);j(this,Ln);H(this,As,e),H(this,Hn,new Uint16Array(e.columns*e.rows*2));for(let s=0;s<m(this,Hn).length;s+=2)m(this,Hn)[s]=di.toHalfFloat(0),m(this,Hn)[s+1]=di.toHalfFloat(1);H(this,Ln,new ea(m(this,Hn),e.columns,e.rows,vi,Pn)),m(this,Ln).wrapS=$s,m(this,Ln).wrapT=e.wrapsV?$s:Gn,m(this,Ln).magFilter=Xt,m(this,Ln).minFilter=Xt,m(this,Ln).needsUpdate=!0;let n=new gn({uniforms:tr.merge([we.fog,{ground:{value:null},cell:{value:new Ve},size:{value:new Ve},shallow:{value:Kw.clone()},deep:{value:Qw.clone()},foam:{value:jw.clone()},sky:{value:t.clone()},sunDirection:{value:new W(.5,.7,.4).normalize()},sunColour:{value:new Oe("#fff0d8")},extentV:{value:0},wrapsV:{value:!1}}]),vertexShader:Jg,fragmentShader:e1,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=m(this,Ln),n.uniforms.cell.value.set(e.spacingU,e.spacingV),n.uniforms.size.value.set(e.columns,e.rows),n.uniforms.extentV.value=e.rows*e.spacingV,n.uniforms.wrapsV.value=e.wrapsV,this.mesh=new wt(new gi(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=1}setChunk(e){let{columns:t,rows:n,spacingU:s,spacingV:r}=m(this,As),a=Math.round(e.u/s),o=Math.round(e.v/r),c=e.positions.length/3;for(let u=0;u<c;u++){let h=a+Math.round((e.positions[u*3]??0)/s),f=o+Math.round((e.positions[u*3+2]??0)/r);if(h>=0&&h<t&&f>=0&&f<n){let d=(f*t+h)*2;m(this,Hn)[d]=di.toHalfFloat(e.positions[u*3+1]??0),m(this,Hn)[d+1]=di.toHalfFloat(e.unseen[u]??0)}}m(this,Ln).needsUpdate=!0}height(e,t){return di.fromHalfFloat(m(this,Hn)[(t*m(this,As).columns+e)*2]??0)}unseen(e,t){return di.fromHalfFloat(m(this,Hn)[(t*m(this,As).columns+e)*2+1]??0)>.5}texture(){return m(this,Ln)}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=m(this,As).wrapsV&&e}follow(e,t,n,s){this.mesh.position.set(e,0,t),this.mesh.scale.set(n,n,1),this.mesh.material.uniforms.sunDirection.value.copy(s).normalize()}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),m(this,Ln).dispose()}};As=new WeakMap,Hn=new WeakMap,Ln=new WeakMap,l(Mp,"Water");var bp=Mp,Kg=bp,t1=`
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
`,n1=.18,Lo,Sp=class Sp{constructor(e,t){j(this,Lo);H(this,Lo,t.wrapsV);let n=new gn({uniforms:tr.merge([we.fog,{ground:{value:null},cell:{value:new Ve},size:{value:new Ve},extent:{value:new Ve},wrapsV:{value:!1}}]),vertexShader:Jg,fragmentShader:t1,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=e,n.uniforms.cell.value.set(t.spacingU,t.spacingV),n.uniforms.size.value.set(t.columns,t.rows),n.uniforms.extent.value.set(t.columns*t.spacingU,t.rows*t.spacingV),n.uniforms.wrapsV.value=t.wrapsV,this.mesh=new wt(new gi(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=2}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=m(this,Lo)&&e}follow(e,t,n){this.mesh.position.set(e,n1,t),this.mesh.scale.set(n,n,1)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}};Lo=new WeakMap,l(Sp,"Clouds");var qu=Sp;var i1=.6,s1=.05,cr=64,Qg=.125,r1=`
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
`,a1=`
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
`,jg=l(i=>{let e=Math.max(1,Math.ceil(Math.sqrt(i)));return[e,Math.max(1,Math.ceil(i/e))]},"atlasCells"),o1=l((i,e)=>{let[t]=jg(i.length),n=cr*(1-2*Qg);return i.flatMap((s,r)=>{let a=e(s);if(a===null||a[0]<=0||a[1]<=0)return[];let o=n/Math.max(a[0],a[1]),c=a[0]*o,u=a[1]*o;return[{_:s,x:r%t*cr+(cr-c)/2,y:Math.floor(r/t)*cr+(cr-u)/2,width:c,height:u}]})},"atlasPlaces"),l1=l(i=>{let{naturalWidth:e,naturalHeight:t,width:n,height:s}=i;return[e??(typeof n=="number"?n:0),t??(typeof s=="number"?s:0)]},"imageSize"),Cs,Dn,Do,ur,No,Yu,pa,ex,tx,Ep=class Ep{constructor(e){j(this,pa);j(this,Cs,null);j(this,Dn,null);j(this,Do,"");j(this,ur);j(this,No,new WeakMap);j(this,Yu,1);H(this,ur,e),this.material=new gn({uniforms:tr.merge([we.fog,{atlas:{value:null},lean:{value:1},lift:{value:s1},bias:{value:i1},cells:{value:[1,1]},pad:{value:Qg}}]),vertexShader:r1,fragmentShader:a1,fog:!0,toneMapped:!1})}lean(e){this.material.uniforms.lean.value=Math.sin(e)}set(e){if(m(this,Cs)?.dispose(),H(this,Cs,null),e===null||e.count===0)return null;G(this,pa,tx).call(this,e);let t=new po,n=new gi(1,1);return t.index=n.index,t.setAttribute("position",n.getAttribute("position")),t.setAttribute("uv",n.getAttribute("uv")),t.setAttribute("anchor",new Hi(e.anchors,3)),t.setAttribute("slot",new Hi(e.slots,2)),t.setAttribute("size",new Hi(e.sizes,1)),t.setAttribute("cell",new Hi(e.cells,1)),t.instanceCount=e.count,H(this,Cs,t),t}make(){let e=new wt(m(this,Cs)??void 0,this.material);return e.frustumCulled=!1,e.castShadow=!1,e.receiveShadow=!1,e}dispose(){m(this,Cs)?.dispose(),m(this,Dn)?.dispose(),this.material.dispose()}};Cs=new WeakMap,Dn=new WeakMap,Do=new WeakMap,ur=new WeakMap,No=new WeakMap,Yu=new WeakMap,pa=new WeakSet,ex=l(function(e){if(e===null)return 0;let t=m(this,No).get(e);return t===void 0&&(t=Tm(this,Yu)._++,m(this,No).set(e,t)),t},"#imageId"),tx=l(function(e){let t=e.names.map(o=>`${o}:${G(this,pa,ex).call(this,m(this,ur).call(this,o))}`).join(",");if(t===m(this,Do)&&m(this,Dn)!==null)return;let[n,s]=jg(e.names.length),r=document.createElement("canvas"),a=r.getContext("2d");r.width=n*cr,r.height=s*cr,a!==null&&(a.imageSmoothingEnabled=!1,o1(e.names,o=>{let c=m(this,ur).call(this,o);return c===null?null:l1(c)}).forEach(({_:o,x:c,y:u,width:h,height:f})=>{let d=m(this,ur).call(this,o);d!==null&&a.drawImage(d,c,u,h,f)})),m(this,Dn)?.dispose(),H(this,Dn,new vs(r)),m(this,Dn).colorSpace=Nt,m(this,Dn).premultiplyAlpha=!0,m(this,Dn).magFilter=Ut,m(this,Dn).minFilter=Kn,m(this,Dn).generateMipmaps=!0,H(this,Do,t),this.material.uniforms.atlas.value=m(this,Dn),this.material.uniforms.cells.value=[n,s]},"#drawAtlas"),l(Ep,"YieldIcons");var wp=Ep,nx=wp;var Cp=l((i,e)=>{if(i===void 0)return null;let t=Math.min(1,Math.max(0,(e-i.started)/h1)),n=1-t*t*(3-2*t);return t>=1?null:[i.from[0]*n,i.from[1]*n,i.from[2]*n]},"slideOffset"),$u=l(i=>{let[e,t,n]=i.unit?.at??[0,0,0];return[i.at[0]+e,i.at[1]+t,i.at[2]+n]},"unitStands"),c1=l((i,e,t)=>i.unit?.id===e?ax(i,t):$u(i),"unitOnMarkerAt"),ax=l((i,e)=>{let[t,n,s]=$u(i),[r,a,o]=Cp(i.slide,e)??[0,0,0];return[t+r,n+a,s+o]},"unitDrawnAt"),u1=l((i,e,t)=>{if(i?.slide===void 0||i.unit===void 0||i.unit.id!==e.unit?.id||Cp(i.slide,t)===null)return;let n=ax(i,t),s=$u(e);return{from:[n[0]-s[0],n[1]-s[1],n[2]-s[2]],started:t}},"carriedSlide"),Tp=l((i,e)=>{if(i.slide===void 0)return!1;let t=Cp(i.slide,e),[n,s,r]=t??[0,0,0],[a,o,c]=i.unit?.at??[0,0,0];return t===null&&delete i.slide,i.drawn.forEach(u=>u.getObjectByName(Vu)?.position.set(a+n,o+s,c+r)),t!==null},"slideAlong"),h1=260,Ap=10466244,d1=14082796,f1=5984576,p1=16773336,ix=l((i,e,t)=>{let n=l((s,r)=>{if(r===null)return[0];let a=[];for(let o=Math.floor((s-e)/r);o*r<=s+e;o++)a.push(o*r);return a},"along");return n(i[0],t.u).flatMap(s=>n(i[1],t.v).map(r=>[s,r]))},"copiesNear"),m1=l(i=>[new yn(new W(0,0,1),0),new yn(new W(0,0,-1),i)],"polesAt"),g1=l((i,[e,t],n,s,r)=>i.flatMap(([a,o])=>[[a,o],...r&&s!==null&&t>n?[[a,o-s]]:[],...r&&s!==null&&e<0?[[a,o+s]]:[]]),"overlayCopies"),sx=2048,rx=Math.hypot(30,40,20),ox=l((i,{period:e,ground:t,yieldIcon:n})=>{let s=new Du({antialias:!0,canvas:i}),r=new eo,a=new dn(Io*180/Math.PI,1,.1,400),o=new fn,c=new Xi({roughness:.92,vertexColors:!0}),u=new fo(p1,2.6),h=new Map,f=new Map,d=new Xi({vertexColors:!0,roughness:.9,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,clipShadows:!0}),p=t.rows*t.spacingV,x=m1(p),y=new Map,_=new Set,g=new fn,S=new Gu,R=new fn,E=new nx(n??(()=>null)),C=new Kg(t,new Oe(Ap)),T=new qu(C.texture(),t),v=new ja(Ap,30,110),w=[[0,0]],U="0,0",I=[[0,0]],B="0,0",V=!1,J=null;s.outputColorSpace=Nt,s.localClippingEnabled=!0,s.toneMapping=go,s.shadowMap.enabled=!0,s.shadowMap.type=Vc,r.background=new Oe(Ap),r.fog=v,r.add(new co(d1,f1,.9)),r.add(o),r.add(g),r.add(R),r.add(C.mesh),r.add(T.mesh),u.position.set(30,40,20),u.castShadow=!0,u.shadow.mapSize.set(sx,sx),u.shadow.bias=-4e-4,u.shadow.normalBias=.02,r.add(u),r.add(u.target);let L=l((z,F,k=w)=>k.map(([Z,se])=>{let de=z.make();return de.position.set(z.at[0]+Z,z.at[1],z.at[2]+se),F.add(de),de}),"copiesOf"),K=l(z=>L(z,o,g1(w,z.span,p,e.v,V)),"overlayCopiesOf"),ie=l(z=>_.forEach(F=>{let k=y.get(F);(k===void 0||!Tp(k,z))&&_.delete(F)}),"slideMarkers");return{render:l(()=>s.render(r,a),"render"),resize:l((z,F,k)=>{s.setPixelRatio(k),s.setSize(z,F,!1),a.aspect=F>0?z/F:1,a.updateProjectionMatrix()},"resize"),setChunk:l((z,F,k)=>{let Z=`${z},${F}`,se=new Ft;se.setAttribute("position",new Mt(k.positions,3)),se.setAttribute("normal",new Mt(k.normals,3)),se.setAttribute("color",new Mt(k.colours,3)),se.setIndex(new Mt(k.indices,1)),se.computeBoundingSphere();let de=h.get(Z);de!==void 0&&(de.drawn.forEach(he=>o.remove(he)),de.geometry.dispose());let q={geometry:se,at:[k.u,0,k.v],make:l(()=>{let he=new wt(se,c);return he.castShadow=!0,he.receiveShadow=!0,he},"make"),drawn:[]};q.drawn=L(q,o),h.set(Z,q),C.setChunk(k)},"setChunk"),setOverlay:l((z,F,k)=>{let Z=`${z},${F}`,se=f.get(Z);if(se!==void 0&&(se.drawn.forEach(te=>o.remove(te)),se.geometry.dispose(),f.delete(Z)),k===null)return;let de=new Ft;de.setAttribute("position",new Mt(k.positions,3)),de.setAttribute("normal",new Mt(k.normals,3)),de.setAttribute("color",new Mt(k.colours,3)),de.computeBoundingSphere(),de.computeBoundingBox();let q=de.boundingBox,he={geometry:de,span:[k.v+(q?.min.z??0),k.v+(q?.max.z??0)],at:[k.u,0,k.v],make:l(()=>{let te=new wt(de,d);return te.castShadow=!0,te.receiveShadow=!0,te},"make"),drawn:[]};he.drawn=K(he),f.set(Z,he)},"setOverlay"),setMarker:l((z,F,k)=>{let Z=y.get(z);if(Z?.drawn.forEach(ae=>g.remove(ae)),y.delete(z),k===null)return;let se=Wg(S,k),de=se.getObjectByName(Vu);se.traverse(ae=>{ae.castShadow=ae instanceof wt});let q={at:F,make:l(()=>se.clone(),"make"),drawn:[],original:se,...k.unit===null||de===void 0?{}:{unit:{id:k.unit.id,at:de.position.toArray()}}},he=performance.now(),te=u1(Z,q,he);te!==void 0&&(q.slide=te),q.drawn=L(q,g,I),y.set(z,q),q.slide!==void 0&&(_.add(z),Tp(q,he)),S.sweepDue&&S.sweep([...y.values()].flatMap(({original:ae})=>ae===void 0?[]:[ae]))},"setMarker"),slideMarker:l((z,F)=>{let k=y.get(z);if(k===void 0)return;let[Z,se,de]=$u(k);k.slide={from:[F[0]-Z,F[1]-se,F[2]-de],started:performance.now()},_.add(z),Tp(k,k.slide.started)},"slideMarker"),markerAt:l((z,F)=>{let k=y.get(z);return k===void 0?null:c1(k,F,performance.now())},"markerAt"),sliding:l(()=>_.size>0,"sliding"),setYields:l(z=>{J?.drawn.forEach(F=>R.remove(F)),J=null,E.set(z)!==null&&(J={at:[0,0,0],make:l(()=>E.make(),"make"),drawn:[]},J.drawn=L(J,R))},"setYields"),view:l((z,F,k=e)=>{let[Z,se]=z.focus,[de,q,he]=Wu(z,F),{near:te,far:ae}=Xu(z.distance);a.position.set(de,q,he),a.lookAt(Z,F,se),a.far=ae*1.2,a.near=Math.max(.1,z.distance*.02),a.updateProjectionMatrix(),v.near=te,v.far=ae;let ce=z.distance*2.2,Ae=u.shadow.camera;u.position.set(Z+30,F+40,se+20),u.target.position.set(Z,F,se),Ae.left=-ce,Ae.right=ce,Ae.top=ce,Ae.bottom=-ce,Ae.near=Math.max(.5,rx-ce*1.6),Ae.far=rx+ce*1.6,Ae.updateProjectionMatrix(),C.follow(Z,se,ae*2.2,u.position.clone().sub(u.target.position)),T.follow(Z,se,ae*2.2),C.pastThePoles(k.v!==null),T.pastThePoles(k.v!==null),d.clippingPlanes=k.v===null?x:null,V=k.v===null;let qe=ix(z.focus,ae,k),Pe=`${qe.join(";")}${V?" stopped":""}`,Ke=ix(z.focus,Math.min(ae,z.distance*2.2),k),je=Ke.join(";");Pe!==U&&(w=qe,U=Pe,h.forEach(Be=>{Be.drawn.forEach(ut=>o.remove(ut)),Be.drawn=L(Be,o)}),f.forEach(Be=>{Be.drawn.forEach(ut=>o.remove(ut)),Be.drawn=K(Be)}),J!==null&&(J.drawn.forEach(Be=>R.remove(Be)),J.drawn=L(J,R))),E.lean(z.pitch),je!==B&&(I=Ke,B=je,y.forEach(Be=>{Be.drawn.forEach(ut=>g.remove(ut)),Be.drawn=L(Be,g,I)})),ie(performance.now())},"view"),stats:l(()=>({drawCalls:s.info.render.calls,triangles:s.info.render.triangles,geometries:s.info.memory.geometries}),"stats"),dispose:l(()=>{h.forEach(({geometry:z})=>z.dispose()),h.clear(),f.forEach(({geometry:z})=>z.dispose()),f.clear(),d.dispose(),y.clear(),S.dispose(),E.dispose(),C.dispose(),T.dispose(),c.dispose(),s.dispose()},"dispose")}},"createStage");var Zi=1/Math.sqrt(3),lx=1.5*Zi,x1=l((i,e)=>{let t=-i-e,n=Math.round(i),s=Math.round(e),r=Math.round(t),a=Math.abs(n-i),o=Math.abs(s-e),c=Math.abs(r-t);return a>o&&a>c?n=-s-r:o>c&&(s=-n-r),[n,s]},"roundAxial"),_1=l(({height:i,width:e,wrapsY:t})=>{let n=l((s,r)=>[s+.5+(r&1)*.5,Zi+r*lx],"centre");return{topologyId:"hex-odd-r",centre:n,outline:l((s,r)=>{let[a,o]=n(s,r);return[[a,o-Zi],[a+.5,o-Zi/2],[a+.5,o+Zi/2],[a,o+Zi],[a-.5,o+Zi/2],[a-.5,o-Zi/2]]},"outline"),tileAt:l((s,r)=>{let a=s-.5,o=r-Zi,[c,u]=x1(a-o*Math.sqrt(3)/3,o*2*Math.sqrt(3)/3);return[c+(u-(u&1))/2,u]},"tileAt"),period:l(()=>({u:e,v:t?i*lx:null}),"period")}},"hexOddRLayout"),cx=_1;var v1=l(({height:i,width:e,wrapsY:t})=>({topologyId:"square",centre:l((n,s)=>[n+.5,s+.5],"centre"),outline:l((n,s)=>[[n,s],[n+1,s],[n+1,s+1],[n,s+1]],"outline"),tileAt:l((n,s)=>[Math.floor(n),Math.floor(s)],"tileAt"),period:l(()=>({u:e,v:t?i:null}),"period")}),"squareLayout"),ux=v1;var Mi=Math.SQRT2/2,y1=l(({height:i,width:e,wrapsY:t})=>{let n=l((s,r)=>[(2*s+(r&1)+1)*Mi,(r+1)*Mi],"centre");return{topologyId:"staggered-iso",centre:n,outline:l((s,r)=>{let[a,o]=n(s,r);return[[a,o-Mi],[a+Mi,o],[a,o+Mi],[a-Mi,o]]},"outline"),tileAt:l((s,r)=>{let a=s/Mi,o=r/Mi,c=Math.floor((a+o)/2-1+.5),u=Math.floor((o-a)/2+.5),h=c+u;return[Math.floor((c-u)/2),h]},"tileAt"),period:l(()=>({u:e*2*Mi,v:t?i*Mi:null}),"period")}},"staggeredIsoLayout"),hx=y1;var dx={square:ux,"staggered-iso":hx,"hex-odd-r":cx},b1=l(i=>{if(!Object.prototype.hasOwnProperty.call(dx,i.topologyId))throw new Error(`No ground layout for the ${i.topologyId} grid.`);if(i.wrapsY&&i.topologyId!=="square"&&i.height%2!==0)throw new Error(`The ${i.topologyId} grid can't wrap over the poles with an odd number of rows (${i.height}).`);return dx[i.topologyId](i)},"groundLayoutFor"),fx=b1;var Uo=l(i=>{let e=i/1.2;if(e>=1)return 0;let t=1-e;return t*t*t*t*(4*e+1)},"weight");var M1=l((i,e,t)=>{let n=Math.imul(i,374761393)+Math.imul(e,668265263)+Math.imul(t,1442695041)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296},"hash"),px=l(i=>i*i*i*(i*(i*6-15)+10),"fade"),Rs=l(({cell:i,period:e,seed:t})=>{let n=Math.max(1,Math.round(e.u/i)),s=e.u/n,r=e.v===null?null:Math.max(1,Math.round(e.v/i)),a=e.v===null||r===null?i:e.v/r,o=l(h=>(h%n+n)%n,"wrapU"),c=l(h=>r===null?h:(h%r+r)%r,"wrapV"),u=l((h,f,d,p)=>{let x=Math.floor(M1(h,f,t)*16)*(Math.PI/8);return Math.cos(x)*d+Math.sin(x)*p},"slope");return(h,f)=>{let d=h/s,p=f/a,x=Math.floor(d),y=Math.floor(p),_=d-x,g=p-y,S=px(_),R=px(g),E=o(x),C=o(x+1),T=c(y),v=c(y+1),w=u(E,T,_,g)+(u(C,T,_-1,g)-u(E,T,_,g))*S,U=u(E,v,_,g-1)+(u(C,v,_-1,g-1)-u(E,v,_,g-1))*S;return Math.max(-1,Math.min(1,(w+(U-w)*R)*1.4))}},"periodicNoise"),Rp=l(i=>{let e=i.map((n,s)=>.5**s),t=e.reduce((n,s)=>n+s,0);return(n,s)=>i.reduce((r,a,o)=>r+a(n,s)*(e[o]??0),0)/t},"fractalNoise");var Si={shore:-.03,deep:-.15,reach:3},Zu={relief:{base:0,roughness:0,shape:"flat"},colour:"#1b1f24"},gx={relief:{base:.03,roughness:.015,shape:"rolling"},colour:"#6b8746"},mx={Ocean:{relief:{base:Si.deep,roughness:.003,shape:"rolling"},colour:"#33505f"},Grassland:gx,Plains:{relief:{base:.025,roughness:.01,shape:"rolling"},colour:"#99935a"},Desert:{relief:{base:.025,roughness:.025,shape:"rolling"},colour:"#c4ab78"},Tundra:{relief:{base:.035,roughness:.015,shape:"rolling"},colour:"#8a8d78"},Arctic:{relief:{base:.05,roughness:.02,shape:"rolling"},colour:"#dfe6ea"},Glacier:{relief:{base:.08,roughness:.03,shape:"rolling"},colour:"#e7eff3"},Forest:{relief:{base:.04,roughness:.02,shape:"rolling"},colour:"#40583a"},Jungle:{relief:{base:.03,roughness:.02,shape:"rolling"},colour:"#355a36"},Swamp:{relief:{base:.005,roughness:.004,shape:"flat"},colour:"#4f5b3d"},River:{relief:{base:.012,roughness:.006,shape:"rolling"},colour:"#5d7c4f"},Hills:{relief:{base:.12,roughness:.04,shape:"ridged"},colour:"#7b7650"},Mountains:{relief:{base:.35,roughness:.08,shape:"peaked"},colour:"#77726a"}},Ju=l(i=>i==="Unknown"?Zu:(Object.prototype.hasOwnProperty.call(mx,i)?mx[i]:void 0)??gx,"terrainEntry");var Ku=.65,Pp=l(i=>{let e=l(t=>{let n=parseInt(i.slice(t,t+2),16)/255;return n<=.04045?n/12.92:((n+.055)/1.055)**2.4},"channel");return[e(1),e(3),e(5)]},"linear"),Ji=.22,Qu=.12,Ip={low:.2,high:.5},xx=l((i,e,t,n,s,r,a,o,c)=>{let u=r-t,h=a-n,f=u*u+h*h,d=f===0?0:Math.max(0,Math.min(1,((i-t)*u+(e-n)*h)/f)),p=Uo(Math.hypot(i-t-u*d,e-n-h*d)),x=1-d;return p===0?-1/0:p*p*(s+(o-s)*(1-x*x*x)+c)},"halfRidge"),Fo=l((i,e,t,n)=>{let s=Math.imul(i,374761393)+Math.imul(e,668265263)+Math.imul(t,2246822519)+Math.imul(n,3266489917)|0;return s=Math.imul(s^s>>>13,1274126177),s^=s>>>16,(s>>>0)/4294967296},"chance"),S1=l((i,e,t)=>({u:(Fo(i,e,t,1)*2-1)*Ji,v:(Fo(i,e,t,2)*2-1)*Ji,scale:.75+Fo(i,e,t,3)*.5}),"peakOf"),w1=l(({layout:i,ranges:e=!0,seed:t=1,source:n})=>{let{width:s,height:r,wrapsY:a}=n,o=i.period(),c=Rp([Rs({cell:.7,period:o,seed:t}),Rs({cell:.35,period:o,seed:t+1}),Rs({cell:.17,period:o,seed:t+2})]),u=Rp([Rs({cell:.45,period:o,seed:t+3}),Rs({cell:.22,period:o,seed:t+4})]),h=l((D,z)=>1-2*Math.abs(u(D,z)),"ridged"),f=Rs({cell:.8,period:o,seed:t+5}),d=Rs({cell:.8,period:o,seed:t+6}),p={flat:null,rolling:"rolling",ridged:"ridged",peaked:"ridged"},x=[],y=[],_=[],g=[],S=[],R=l((D,z)=>{let F=(D%s+s)%s;return!a&&(z<0||z>=r)?null:(z%r+r)%r*s+F},"index"),E=l(D=>{let z=new Array(s*r).fill(1/0),F=[];D.forEach((k,Z)=>{k&&(z[Z]=0,F.push([Z%s,Math.floor(Z/s)]))});for(let[k,Z]of F){let se=z[Z*s+k]??1/0;se>=Si.reach||n.neighbours(k,Z).forEach(([de,q])=>{let he=q*s+de;(z[he]??1/0)>se+1&&(z[he]=se+1,F.push([de,q]))})}return z},"distancesFromLand"),C=l((D,z)=>{let F=n.terrainAt(D,z);return`${F}${F!=="Unknown"&&n.waterAt(D,z)?" water":""}`},"readAs"),T=l(D=>{if(D!==void 0&&y.length>0&&D.every(([te,ae])=>{let ce=R(te,ae);return ce===null||y[ce]===C(te,ae)}))return[];let z=[],F=[],k=[];for(let te=0;te<r;te++)for(let ae=0;ae<s;ae++){let ce=n.terrainAt(ae,te);z.push(ce),F.push(ce!=="Unknown"&&n.waterAt(ae,te)),k.push(Ju(ce))}let Z=E(z.map((te,ae)=>te!=="Unknown"&&!F[ae])),se=z.map((te,ae)=>`${te}${F[ae]?" water":""}`),de=[];se.forEach((te,ae)=>{y[ae]!==te&&de.push([ae%s,Math.floor(ae/s)])}),y=se,x=k.map((te,ae)=>{let ce=te===Zu,Ae=ae%s,qe=Math.floor(ae/s),Pe=S1(Ae,qe,t);if(!F[ae])return{relief:te.relief,colour:Pp(te.colour),unknown:ce,peak:Pe};let Ke=Math.min(Z[ae]??1/0,Si.reach),je=Si.shore+(Si.deep-Si.shore)*Math.max(0,Ke-1)/Math.max(1,Si.reach-1);return{relief:{...te.relief,base:je},colour:Pp(te.colour),unknown:ce,peak:Pe}});let q=S,he=new Map(de.map(([te,ae])=>[`${te},${ae}`,[te,ae]]));return S=x.map(({relief:te,unknown:ae},ce)=>!ae&&!F[ce]&&te.shape==="peaked"),de.some(([te,ae])=>{let ce=ae*s+te;return S[ce]===!0||q[ce]===!0})&&([_,g]=J()),de.forEach(([te,ae])=>{let ce=ae*s+te;S[ce]!==!0&&q[ce]!==!0||n.neighbours(te,ae).forEach(([Ae,qe])=>{let Pe=R(Ae,qe);Pe!==null&&S[Pe]===!0&&he.set(`${Ae},${qe}`,[Ae,qe])})}),[...he.values()]},"refresh"),v=l(D=>{let[z,F]=i.centre(0,D);return Math.max(...i.outline(0,D).map(([k,Z])=>Math.hypot(k-z,Z-F)))},"cornerOf"),w=l((D,z)=>{let[F,k]=i.centre(0,D),Z=[];for(let se=-8;se<=8;se++)for(let de=-6;de<=6;de++){let[q,he]=i.centre(de,D+se);Math.hypot(q-F,he-k)<z+1e-9&&Z.push([de,se])}return Z},"offsetsWithin"),U=l((D,z,F,k)=>{if(s>=6&&(!a||r>=6)){let te=l((Ae,qe)=>{let Pe=(Ae%qe+qe)%qe;return Pe*2<qe?Pe:Pe-qe},"nearest"),ae=te(F-D,s),ce=a?te(k-z,r):k-z;return ae===0&&ce===0?[]:[[ae,ce]]}let Z=l((te,ae)=>{let ce=(te%ae+ae)%ae;return ce===0?[0]:[ce,ce-ae]},"copies"),[se,de]=i.centre(D,z),q=Z(F-D,s).flatMap(te=>(a?Z(k-z,r):[k-z]).flatMap(ae=>{if(te===0&&ae===0)return[];let[ce,Ae]=i.centre(D+te,z+ae);return[[te,ae,Math.hypot(ce-se,Ae-de)]]})),he=Math.min(...q.map(([,,te])=>te));return q.filter(([,,te])=>te<=he+1e-9).map(([te,ae])=>[te,ae])},"stepsTo"),I=Math.max(...[0,1].flatMap(D=>{let[z,F]=i.centre(0,D);return n.neighbours(0,D).flatMap(([k,Z])=>U(0,D,k,Z).map(([se,de])=>{let[q,he]=i.centre(se,D+de);return Math.hypot(q-z,he-F)}))}),1),B=[0,1].map(D=>{let[z,F]=i.centre(0,D);return w(D,I+Ji*Math.SQRT2+Qu+1.2+Math.max(v(0),v(1))).flatMap(([k,Z])=>{let[se,de]=i.centre(k,D+Z);return[k,Z,se-z,de-F]})}),V=l((D,z,F,k,Z,se)=>{let de=Z-F,q=se-k,he=de*de+q*q,te=he===0?0:Math.max(0,Math.min(1,((D-F)*de+(z-k)*q)/he));return Math.hypot(D-F-de*te,z-k-q*te)},"toSegment"),J=l(()=>{let D=x.map(()=>[]),z=x.map(()=>[]),F=Math.max(v(0),v(1));return e?(x.forEach((k,Z)=>{if(S[Z]!==!0)return;let se=Z%s,de=Math.floor(Z/s),[q,he]=i.centre(se,de),te=new Map;n.neighbours(se,de).forEach(([ae,ce])=>{let Ae=R(ae,ce);Ae!==null&&S[Ae]===!0&&U(se,de,ae,ce).forEach(([qe,Pe])=>te.set(`${qe},${Pe}`,[qe,Pe,Ae]))}),te.forEach(([ae,ce,Ae])=>{let qe=x[Ae];if(qe===void 0||ce<0||ce===0&&ae<0)return;let[Pe,Ke]=i.centre(se+ae,de+ce),{peak:je,relief:Be}=k,{peak:ut,relief:xt}=qe,_t=je.u,et=je.v,Pt=Pe-q+ut.u,Xe=Ke-he+ut.v,It=Be.base*Ku*je.scale,At=xt.base*Ku*ut.scale,Ct=Math.hypot(Pt-_t,Xe-et)||1,O=16+(ce+2)*5+(ae+2),Bt=(Fo(se,de,t,O)*2-1)*Qu,at=Ip.low+(Ip.high-Ip.low)*Fo(se,de,t,O+32),tt=(_t+Pt)/2-(Xe-et)/Ct*Bt,me=(et+Xe)/2+(Pt-_t)/Ct*Bt,pt=Math.max(Math.hypot(_t-tt,et-me),Math.hypot(Pt-tt,Xe-me))+1.2,Ue={au:_t,av:et,ah:It,mu:tt,mv:me,mh:at*Math.min(It,At),bu:Pt,bv:Xe,bh:At,roughness:(Be.roughness+xt.roughness)/2,cu:tt,cv:me,reach:pt*pt},ke=(Math.sqrt(Ue.reach)+F)**2,A=B[de&1]??[];for(let b=0;b<A.length;b+=4){let X=A[b+2],fe=A[b+3];if((X-tt)**2+(fe-me)**2>=ke||Math.min(V(X,fe,_t,et,tt,me),V(X,fe,tt,me,Pt,Xe))>=1.2+F)continue;let le=R(se+A[b],de+A[b+1]);le!==null&&(D[le]?.push(Ue),z[le]?.push(X,fe))}})}),[D,z]):[D,z]},"ranges"),L=l(D=>{let[z,F]=i.centre(0,D),k=Math.max(...i.outline(0,D).map(([se,de])=>Math.hypot(se-z,de-F))),Z=[];for(let se=-6;se<=6;se++)for(let de=-4;de<=4;de++){let[q,he]=i.centre(de,D+se);Math.hypot(q-z,he-F)<1.2+k+Ji*Math.SQRT2+1e-9&&Z.push([de,se])}return Z},"offsetsFor"),K=[L(0),L(1)],ie=l((D,z)=>{let[F,k]=i.tileAt(D,z),Z=R(F,k),se=Z===null?null:x[Z]??null;if(se===null||se.unknown)return{height:0,colour:Pp(Zu.colour),unseen:!0};let de=null,q=null,he=l(et=>et==="rolling"?de??=c(D,z):q??=h(D,z),"noiseHere"),te=0,ae=0,ce=0,Ae=0,qe=0,Pe=0,Ke=0,je=D+Ji*f(D,z),Be=z+Ji*d(D,z);(K[k&1]??[]).forEach(([et,Pt])=>{let Xe=F+et,It=k+Pt,At=R(Xe,It);if(At===null)return;let Ct=x[At];if(Ct===void 0)return;let[O,Bt]=i.centre(Xe,It),{relief:at,colour:tt,peak:me}=Ct,pt=Uo(Math.hypot(D-O,z-Bt)),Ue=at.shape==="peaked"?Uo(Math.hypot(D-O-me.u,z-Bt-me.v)):0,ke=Uo(Math.hypot(je-O,Be-Bt))**3;if(pt>0){let A=p[at.shape],b=A===null?0:at.roughness*he(A);at.shape==="peaked"?ae+=pt*(at.base*(1-Ku)+b*.5):ae+=pt*(at.base+b),te+=pt}if(Ue>0){let A=at.roughness*he("ridged");ce+=Ue*Ue*(at.base*Ku*me.scale+A*.5)}Ae+=ke,qe+=ke*tt[0],Pe+=ke*tt[1],Ke+=ke*tt[2]});let ut=Z===null?[]:_[Z]??[],xt=Z===null?[]:g[Z]??[],_t=ce;if(ut.length>0){let[et,Pt]=i.centre(F,k);ut.forEach((Xe,It)=>{let At=D-et+(xt[It*2]??0),Ct=z-Pt+(xt[It*2+1]??0);if((At-Xe.cu)**2+(Ct-Xe.cv)**2>=Xe.reach)return;let O=Xe.roughness*he("ridged")*.5;_t=Math.max(_t,xx(At,Ct,Xe.au,Xe.av,Xe.ah,Xe.mu,Xe.mv,Xe.mh,O),xx(At,Ct,Xe.bu,Xe.bv,Xe.bh,Xe.mu,Xe.mv,Xe.mh,O))})}return{height:(te>0?ae/te:0)+_t,colour:Ae>0?[qe/Ae,Pe/Ae,Ke/Ae]:se.colour,unseen:!1}},"sample");return T(),{sample:ie,height:l((D,z)=>ie(D,z).height,"height"),refresh:T}},"createRelief"),_x=w1;var vx=l((i,e,{size:t=16,perUnit:n=8}={})=>{let{u:s,v:r}=i.period(),a=r??Math.max(...i.outline(0,e-1).map(([,f])=>f),...i.outline(1,e-1).map(([,f])=>f)),o=Math.max(1,Math.round(s/t)),c=Math.max(1,Math.round(a/t)),u=Math.max(2,Math.round(s/o*n)),h=Math.max(2,Math.round(a/c*n));return{chunksU:o,chunksV:c,stepsU:u,stepsV:h,spacingU:s/o/u,spacingV:a/c/h}},"chunkGrid"),yx=l((i,e,t,n)=>{let{stepsU:s,stepsV:r,spacingU:a,spacingV:o}=i,c=t*s,u=n*r,h=l((T,v)=>[T*a,v*o],"at"),f=s+3,d=new Float64Array(f*(r+3)),p=(s+1)*(r+1),x=new Float32Array(p*3),y=new Float32Array(p);for(let T=-1;T<=r+1;T++)for(let v=-1;v<=s+1;v++){let w=e.sample(...h(c+v,u+T)),{height:U,colour:I}=w;d[(T+1)*f+(v+1)]=U,v>=0&&v<=s&&T>=0&&T<=r&&(x.set(I,(T*(s+1)+v)*3),y[T*(s+1)+v]=w.unseen?1:0)}let _=l((T,v)=>d[(v+1)*f+(T+1)]??0,"height"),g=new Float32Array(p*3),S=new Float32Array(p*3),[R,E]=h(c,u);for(let T=0;T<=r;T++)for(let v=0;v<=s;v++){let w=T*(s+1)+v,[U,I]=h(c+v,u+T),B=(_(v+1,T)-_(v-1,T))/(2*a),V=(_(v,T+1)-_(v,T-1))/(2*o),J=Math.hypot(B,1,V);g[w*3]=U-R,g[w*3+1]=_(v,T),g[w*3+2]=I-E,S[w*3]=-B/J,S[w*3+1]=1/J,S[w*3+2]=-V/J}let C=new Uint32Array(s*r*6);for(let T=0;T<r;T++)for(let v=0;v<s;v++){let w=T*(s+1)+v,U=w+1,I=w+s+1,B=I+1,V=(T*s+v)*6;C.set([w,I,U,U,I,B],V)}return{u:R,v:E,positions:g,normals:S,colours:x,unseen:y,indices:C}},"buildChunk"),bx=l((i,e,t,n)=>{let s=i.stepsU*i.spacingU,r=i.stepsV*i.spacingV,a=e.period().v!==null,o=new Set;return t.forEach(([c,u])=>{let[h,f]=e.centre(c,u);for(let d=Math.floor((h-n)/s);d<=Math.floor((h+n)/s);d++)for(let p=Math.floor((f-n)/r);p<=Math.floor((f+n)/r);p++){if(!a&&(p<0||p>=i.chunksV))continue;let x=(d%i.chunksU+i.chunksU)%i.chunksU,y=a?(p%i.chunksV+i.chunksV)%i.chunksV:p;o.add(`${x},${y}`)}}),[...o].map(c=>c.split(",").map(Number))},"chunksNear");var Nn=l((i,e,t,n,s)=>({kind:i,count:e,size:t,colour:n,detail:s}),"plant"),Mx={Forest:{plants:[Nn("conifer",8,[.95,1.4],"#2c5230","#4a3424")],conifers:[.15,.95]},Jungle:{plants:[Nn("broadleaf",7,[1.05,1.55],"#2b6a2a","#4d3a26"),Nn("palm",2,[.9,1.2],"#3f8a34","#6b5236")]},Swamp:{plants:[Nn("reeds",7,[.8,1.2],"#7a8a4a","#5a6a38"),Nn("deadTree",2,[.8,1.1],"#4a4036","#4a4036")]},Grassland:{plants:[Nn("bush",2,[.8,1.2],"#4e7a32","#4e7a32")]},Plains:{plants:[Nn("shrub",3,[.7,1.1],"#7a7a3a","#6a5a36")]},Tundra:{plants:[Nn("scrub",4,[.7,1.1],"#6a6a4e","#5a5444")]},Hills:{plants:[Nn("shrub",2,[.8,1.1],"#5e6e36","#5e5036"),Nn("rock",1,[.8,1.2],"#7d756a","#7d756a")]},Mountains:{plants:[Nn("rock",3,[.9,1.4],"#77706a","#77706a")]},Desert:{plants:[Nn("rock",2,[.7,1.1],"#a8936a","#a8936a"),Nn("cactus",1,[.8,1.1],"#5a7a3e","#5a7a3e")]}},ju=l(i=>Object.prototype.hasOwnProperty.call(Mx,i)?Mx[i]:null,"growthOf");var E1=["River"],wi=l((i,e)=>(i.improvements??[]).some(({_:t})=>t===e),"has"),T1=l((i,e)=>{if(i.city)return null;let t=wi(i,"Road"),n=wi(i,"Railroad"),s=t?e.filter(h=>wi(h.tile,"Road")).map(({offset:h})=>h):[],r=t?e.filter(h=>!!h.tile.city||wi(h.tile,"Railroad")).map(({offset:h})=>h):[],a=l((h,f)=>h[0]===f[0]&&h[1]===f[1],"same"),o=s.length===0&&r.length===0,c={road:t?{joins:s.filter(h=>!n||!r.some(f=>a(f,h))),alone:o&&!n}:null,railroad:t&&n?{joins:r,alone:o}:null,irrigation:wi(i,"Farmland")?"farmland":wi(i,"Irrigation")?"irrigation":null,mine:wi(i,"Mine"),fortress:wi(i,"Fortress"),airbase:wi(i,"Airbase"),pollution:wi(i,"Pollution"),specials:(i.terrain?.features??[]).map(({_:h})=>h).filter(h=>!E1.includes(h)).map(h=>[i.terrain._,h]),hut:i.goodyHut!==null&&i.goodyHut!==void 0,terrain:i.terrain?._??"Unknown",vegetation:ju(i.terrain?._??"Unknown")!==null};return c.road===null&&c.irrigation===null&&!c.mine&&!c.fortress&&!c.airbase&&!c.pollution&&c.specials.length===0&&!c.hut&&!c.vegetation?null:c},"overlayFor"),Sx=T1;var Et=l((i,e,t,n)=>({shape:i,colour:e,count:t,...n===void 0?{}:{detail:n}}),"look"),wx={Coal:Et("rocks","#26262a",4),Gold:Et("rocks","#d8b13a",3),Gems:Et("rocks","#59c2d6",4,"#b05ad0"),Iron:Et("rocks","#8a5a44",4),Wheat:Et("crop","#d9b84a",5,"#a88a2c"),Spice:Et("crop","#c0452e",4,"#5d7a2a"),Wine:Et("crop","#6a2c5e",4,"#5d7a2a"),Silk:Et("crop","#e9e2cf",3,"#4f7a34"),Fruit:Et("crop","#e08a2a",4,"#3f7a2a"),Horse:Et("animal","#7a4e2a",2,"#3a2a1c"),Buffalo:Et("animal","#4a3424",3,"#2a1e16"),Game:Et("animal","#a9835a",2,"#5a4430"),"Tundra:Game":Et("animal","#8f7e66",2,"#e8e2d6"),Furs:Et("animal","#b0602a",2,"#f0e8dc"),Ivory:Et("animal","#8a8580",1,"#f2ead8"),Seal:Et("animal","#6e7072",2,"#4a4c4e"),Pheasant:Et("bird","#8a3a22",2,"#3d6a3a"),Fish:Et("fish","#b8c4cc",5),Whales:Et("whale","#3a4048",1),Oil:Et("derrick","#222224",1,"#121214"),Oasis:Et("oasis","#3f7a32",3,"#3f86a8"),Peat:Et("peat","#4a3624",4),Shield:Et("logs","#7a5532",4,"#c9a47a")},A1=Et("cairn","#9a9690",5),Ex=l((i,e)=>{let t=l(n=>Object.prototype.hasOwnProperty.call(wx,n)?wx[n]:void 0,"own");return t(`${i}:${e}`)??t(e)??A1},"specialLook");var Op=l(()=>({positions:[],normals:[],colours:[]}),"soup"),Un={field:.01,road:.014,ballast:.016,rail:.02,smear:.024},Lp=.06,Tx="#8c7a58",Ax="#5f5953",C1="#a9abae",R1="#5e432b",P1="#4f87b0",I1="#7da33f",L1=["#c2b448","#8fae3e"],Cx="#9d968a",D1="#4a4c50",Up="#6b4a2e",N1="#7a6a58",U1="#b89a5a",F1="#c9b48e",Rx="#34322a",Mn=new fi(1,1,1),xa=new pi(.5,.5,1,8),Bp=new mi(.5,1,8),O1=new mi(.5,1,4),ga=new ys(.5,8,6),Oo=new pi(.5,.5,1,4,1,!0),Bo=new mi(.5,1,5,1,!0),eh=new ys(.5,5,3),Dp={mine:[3,.72],hut:[11,.64],special:l(i=>[i+1,.72],"special")},B1=.05,z1=.22,Px=72,Ei=l((i,e)=>{let t=Math.imul(i^Math.imul(e+1,2654435761),2246822507);return t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,(t>>>0)/4294967296},"fraction"),Ix=new Map,Np=l(i=>{let e=Ix.get(i);if(e===void 0){let{r:t,g:n,b:s}=new Oe(i);e=[t,n,s],Ix.set(i,e)}return e},"colourOf"),Lx=new WeakMap,k1=l(i=>{let e=Lx.get(i);if(e===void 0){let t=i.index===null?i:i.toNonIndexed();e={positions:new Float32Array(t.getAttribute("position").array),normals:new Float32Array(t.getAttribute("normal").array)},Lx.set(i,e),t!==i&&t.dispose()}return e},"trianglesOf"),G1=new ft,V1=new We,H1=new W,W1=new pn,X1=new Cn,q1=new W,Ot,Dx,on,Hp=class Hp{constructor(e,t){j(this,Ot);this.lines=[];this.taken=[];this.soup=e,this.place=t}ground(e,t,n=!1){let s=this.place.heightAt(e,t);return n?Math.max(0,s):s}strip(e,t,n,s,r){let a=Np(s),o=Math.hypot(t[0]-e[0],t[1]-e[1]);if(o===0)return;let c=Math.max(1,Math.ceil(o/Lp)),u=Math.max(1,Math.ceil(n/Lp)),h=[-(t[1]-e[1])/o*n,(t[0]-e[0])/o*n],f=l((d,p)=>[e[0]+(t[0]-e[0])*d+h[0]*(p-.5),e[1]+(t[1]-e[1])*d+h[1]*(p-.5)],"at");for(let d=0;d<c;d++)for(let p=0;p<u;p++){let[x,y]=f(d/c,(p+1)/u),[_,g]=f((d+1)/c,(p+1)/u),[S,R]=f(d/c,p/u),[E,C]=f((d+1)/c,p/u);G(this,Ot,on).call(this,x,y,r,a),G(this,Ot,on).call(this,_,g,r,a),G(this,Ot,on).call(this,S,R,r,a),G(this,Ot,on).call(this,_,g,r,a),G(this,Ot,on).call(this,E,C,r,a),G(this,Ot,on).call(this,S,R,r,a)}}disc(e,t,n,s,r=12){let a=Np(n),[o,c]=e,u=Math.max(1,Math.ceil(t/Lp)),h=l((f,d)=>{let p=d/r*Math.PI*2,x=f/u*t;return[o+Math.cos(p)*x,c+Math.sin(p)*x]},"at");for(let f=0;f<u;f++)for(let d=0;d<r;d++){let p=h(f+1,d),x=h(f+1,d+1);if(f===0)G(this,Ot,on).call(this,o,c,s,a),G(this,Ot,on).call(this,...x,s,a),G(this,Ot,on).call(this,...p,s,a);else{let y=h(f,d),_=h(f,d+1);G(this,Ot,on).call(this,...y,s,a),G(this,Ot,on).call(this,..._,s,a),G(this,Ot,on).call(this,...p,s,a),G(this,Ot,on).call(this,..._,s,a),G(this,Ot,on).call(this,...x,s,a),G(this,Ot,on).call(this,...p,s,a)}}}solid(e,t,n,s,r=[0,0,0]){let{positions:a,normals:o}=k1(e),c=G1.compose(H1.set(...t),W1.setFromEuler(X1.set(...r)),q1.set(...n)),u=c.elements,h=V1.getNormalMatrix(c).elements,[f,d,p]=Np(s),x=this.soup;for(let y=0;y<a.length;y+=3){let _=a[y],g=a[y+1],S=a[y+2],R=o[y],E=o[y+1],C=o[y+2],T=h[0]*R+h[3]*E+h[6]*C,v=h[1]*R+h[4]*E+h[7]*C,w=h[2]*R+h[5]*E+h[8]*C,U=Math.hypot(T,v,w)||1;x.positions.push(u[0]*_+u[4]*g+u[8]*S+u[12],u[1]*_+u[5]*g+u[9]*S+u[13],u[2]*_+u[6]*g+u[10]*S+u[14]),x.normals.push(T/U,v/U,w/U),x.colours.push(f,d,p)}}spot(e,t){let n=Ei(this.place.seed,e)*Math.PI*2,[s,r]=this.place.centre;return[s+Math.cos(n)*t*this.place.radius,r+Math.sin(n)*t*this.place.radius]}clearance(e,t,n){let[s,r]=this.place.centre,a=Math.hypot(e-s,t-r)-z1-n;return this.lines.forEach(([o,c])=>{a=Math.min(a,sE(e,t,o,c)-B1-n)}),this.taken.forEach(([o,c,u])=>{a=Math.min(a,Math.hypot(e-o,t-c)-u-n)}),a}hasRoom(e,t,n){return this.clearance(e,t,n)>=0}claim(e,t,n){let s=Ei(this.place.seed,e)*Math.PI*2,[r,a]=this.place.centre,o=[r,a],c=-1/0;for(let u of[t,t*.88,t*1.1])for(let h=0;h<Px;h++){let f=s+h/Px*Math.PI*2,d=[r+Math.cos(f)*u*this.place.radius,a+Math.sin(f)*u*this.place.radius],p=this.clearance(d[0],d[1],n);if(p>=0)return this.taken.push([d[0],d[1],n]),d;p>c&&(o=d,c=p)}return this.taken.push([o[0],o[1],n]),o}};Ot=new WeakSet,Dx=l(function(e,t){let s=(this.place.heightAt(e+.05,t)-this.place.heightAt(e-.05,t))/.1,r=(this.place.heightAt(e,t+.05)-this.place.heightAt(e,t-.05))/(2*.05),a=Math.hypot(s,1,r);return[-s/a,1/a,-r/a]},"#normal"),on=l(function(e,t,n,s){this.soup.positions.push(e,this.ground(e,t)+n,t),this.soup.normals.push(...G(this,Ot,Dx).call(this,e,t)),this.soup.colours.push(...s)},"#point"),l(Hp,"Layer");var Fp=Hp,zp=l((i,e)=>{let[t,n]=i.centre,[s,r]=i.toward(e);return[(t+s)/2,(n+r)/2]},"halfway"),kp=l(i=>i.alone||i.joins.length>0,"drawn"),Y1=l((i,e)=>{let{place:t}=i;kp(e)&&(e.joins.forEach(n=>i.strip(t.centre,zp(t,n),.07,Tx,Un.road)),i.disc(t.centre,e.alone?.09:.035,Tx,Un.road))},"road"),$1=l((i,e)=>{if(!kp(e))return;let{place:t}=i;(e.alone?[[t.centre[0]+.12,t.centre[1]],[t.centre[0]-.12,t.centre[1]]]:e.joins.map(s=>zp(t,s))).forEach(s=>{let[r,a]=t.centre,o=Math.hypot(s[0]-r,s[1]-a),c=o===0?[0,0]:[-(s[1]-a)/o*.025,(s[0]-r)/o*.025];i.strip(t.centre,s,.1,Ax,Un.ballast);for(let u=.1;u<1;u+=.2){let h=[r+(s[0]-r)*u,a+(s[1]-a)*u];i.strip([h[0]+c[0]*1.8,h[1]+c[1]*1.8],[h[0]-c[0]*1.8,h[1]-c[1]*1.8],.014,R1,Un.ballast+.002)}[1,-1].forEach(u=>i.strip([r+c[0]*u,a+c[1]*u],[s[0]+c[0]*u,s[1]+c[1]*u],.01,C1,Un.rail))}),i.disc(t.centre,.05,Ax,Un.ballast)},"railroad"),Z1=l((i,e)=>{let{centre:t,inner:n}=i.place,s=e==="farmland"?6:4,r=n*.9,a=r*2/s;for(let o=0;o<s;o++){let c=t[1]-r+a*(o+.5),u=e==="farmland"?L1[o%2]:I1;if(i.strip([t[0]-r,c],[t[0]+r,c],a*.8,u,Un.field),o>0){let h=t[1]-r+a*o;i.strip([t[0]-r,h],[t[0]+r,h],.016,P1,Un.field+.001)}}},"fields"),J1=l((i,[e,t])=>{let n=i.ground(e,t);i.solid(Mn,[e-.02,n+.05,t],[.01,.11,.01],Up,[0,0,-.3]),i.solid(Mn,[e+.02,n+.05,t],[.01,.11,.01],Up,[0,0,.3]),i.solid(xa,[e,n+.1,t],[.05,.008,.05],"#3a3a3a",[Math.PI/2,0,0]),[[.07,.03],[-.05,.06]].forEach(([s,r])=>{let a=e+s,o=t+r;i.solid(Bp,[a,i.ground(a,o)+.02,o],[.07,.04,.07],N1)})},"mine"),K1=l(i=>{let[e,t]=i.place.centre,n=i.place.radius*.62,s=i.ground(e,t);[[0,-n,n*2,.025],[0,n,n*2,.025],[-n,0,.025,n*2],[n,0,.025,n*2]].forEach(([r,a,o,c])=>{let u=e+r,h=t+a;i.solid(Mn,[u,Math.max(s,i.ground(u,h))+.02,h],[o,.05,c],Cx)}),[[-n,-n],[n,-n],[-n,n],[n,n]].forEach(([r,a])=>{let o=e+r,c=t+a;i.solid(xa,[o,i.ground(o,c)+.035,c],[.045,.07,.045],Cx)})},"fortress"),Q1=l(i=>{let[e,t]=i.place.centre,n=i.place.radius*.75,[s,r]=i.claim(5,.6,.08);i.strip([e-n,t+.12],[e+n,t+.12],.12,D1,Un.road+.002),i.strip([e-n*.9,t+.12],[e+n*.9,t+.12],.008,"#e8e8e8",Un.road+.004),i.solid(Mn,[s,i.ground(s,r)+.03,r],[.12,.06,.08],"#8a9096")},"airbase"),j1=l(i=>{let e=i.place.radius;i.disc(i.place.centre,e*.55,Rx,Un.smear,14),i.disc(i.spot(7,.5),e*.25,Rx,Un.smear+.001)},"pollution"),eE=l((i,e,t,n)=>{let s=e.detail??e.colour,r=l((o,c)=>[t[0]+(Ei(i.place.seed,n*31+o*2)-.5)*c,t[1]+(Ei(i.place.seed,n*31+o*2+1)-.5)*c],"jitter"),a=e.shape==="fish"||e.shape==="whale";for(let o=0;o<e.count;o++){let[c,u]=e.count===1?[t[0],t[1]]:r(o,.1),h=i.ground(c,u,a),f=Ei(i.place.seed,n*31+o+17)*Math.PI*2;switch(e.shape){case"rocks":i.solid(ga,[c,h+.012,u],[.05,.035,.045],o%2===1?s:e.colour,[0,f,0]);break;case"crop":i.solid(xa,[c,h+.02,u],[.008,.04,.008],s),i.solid(ga,[c,h+.05,u],[.045,.04,.045],e.colour);break;case"animal":{let d=e.count===1?1.5:1;i.solid(Mn,[c,h+.04*d,u],[.035*d,.03*d,.07*d],e.colour,[0,f,0]),i.solid(Mn,[c+Math.sin(f)*.04*d,h+.055*d,u+Math.cos(f)*.04*d],[.022*d,.024*d,.03*d],s,[0,f,0]),i.solid(Mn,[c,h+.013*d,u],[.03*d,.026*d,.055*d],s,[0,f,0]);break}case"bird":i.solid(ga,[c,h+.02,u],[.03,.025,.04],e.colour,[0,f,0]),i.solid(Mn,[c-Math.sin(f)*.03,h+.025,u-Math.cos(f)*.03],[.008,.006,.04],s,[.4,f,0]);break;case"fish":i.solid(ga,[c,h+.006,u],[.012,.01,.035],e.colour,[0,f,0]);break;case"whale":i.solid(ga,[c,h,u],[.07,.05,.2],e.colour,[0,f,0]),i.solid(Mn,[c-Math.sin(f)*.11,h+.02,u-Math.cos(f)*.11],[.08,.006,.03],e.colour,[0,f,0]);break;case"derrick":i.solid(Mn,[c,h+.008,u],[.08,.016,.08],s),i.solid(O1,[c,h+.1,u],[.06,.18,.06],e.colour,[0,Math.PI/4,0]);break;case"oasis":o===0&&i.disc([c,u],.07,s,Un.field+.002);{let[d,p]=r(o+5,.1),x=i.ground(d,p);i.solid(xa,[d,x+.06,p],[.012,.12,.012],Up),i.solid(Bp,[d,x+.125,p],[.09,.03,.09],e.colour)}break;case"peat":case"logs":i.solid(e.shape==="logs"?xa:Mn,[c,h+.012,u],e.shape==="logs"?[.022,.09,.022]:[.05,.02,.035],o%2===1&&e.detail!==void 0?e.detail:e.colour,e.shape==="logs"?[0,f,Math.PI/2]:[0,f,0]);break;default:i.solid(ga,[t[0],i.ground(t[0],t[1])+.012+o*.018,t[1]],[.05-o*.007,.025,.05-o*.007],e.colour)}}},"special"),tE=l((i,e)=>{[0,1,2].forEach(t=>{let n=t/3*Math.PI*2+Ei(i.place.seed,12)*Math.PI,s=e[0]+Math.cos(n)*.06,r=e[1]+Math.sin(n)*.06,a=i.ground(s,r);i.solid(xa,[s,a+.02,r],[.05,.04,.05],F1),i.solid(Bp,[s,a+.055,r],[.065,.035,.065],U1)})},"hut"),nE={conifer:.06,broadleaf:.07,palm:.06,deadTree:.05,bush:.035,shrub:.03,scrub:.03,reeds:.03,rock:.04,cactus:.03},iE=l((i,e,t,n,s,r,a)=>{let o=i.ground(n,s),{colour:c,detail:u}=e;switch(t){case"conifer":i.solid(Oo,[n,o+.025*r,s],[.016*r,.05*r,.016*r],u),i.solid(Bo,[n,o+.09*r,s],[.11*r,.12*r,.11*r],c),i.solid(Bo,[n,o+.16*r,s],[.08*r,.1*r,.08*r],c);break;case"broadleaf":i.solid(Oo,[n,o+.04*r,s],[.018*r,.08*r,.018*r],u),i.solid(eh,[n,o+.12*r,s],[.13*r,.11*r,.13*r],c,[0,a,0]);break;case"palm":i.solid(Oo,[n,o+.08*r,s],[.012*r,.16*r,.012*r],u,[.12,a,0]),i.solid(Bo,[n+.01*r,o+.165*r,s],[.15*r,.03*r,.15*r],c,[0,a,0]);break;case"deadTree":i.solid(Oo,[n,o+.06*r,s],[.014*r,.12*r,.014*r],u),i.solid(Mn,[n+.02*r,o+.09*r,s],[.006*r,.05*r,.006*r],u,[0,a,-.7]);break;case"bush":i.solid(eh,[n,o+.02*r,s],[.06*r,.045*r,.06*r],c,[0,a,0]);break;case"shrub":i.solid(Bo,[n,o+.025*r,s],[.05*r,.05*r,.05*r],c,[0,a,0]),i.solid(Bo,[n+.02*r,o+.018*r,s+.01*r],[.035*r,.036*r,.035*r],c,[0,a,0]);break;case"scrub":i.solid(eh,[n,o+.008*r,s],[.05*r,.02*r,.05*r],c,[0,a,0]);break;case"reeds":[-1,0,1].forEach(h=>i.solid(Mn,[n+h*.008*r,o+.035*r,s],[.005,.07*r,.005],h===0?c:u,[0,a,h*.18]));break;case"rock":i.solid(eh,[n,o+.012*r,s],[.07*r,.04*r,.06*r],c,[0,a,0]);break;default:i.solid(Oo,[n,o+.05*r,s],[.018*r,.1*r,.018*r],c),i.solid(Mn,[n+.015*r,o+.06*r,s],[.025*r,.01*r,.01*r],c,[0,a,0])}},"grow"),sE=l((i,e,t,n)=>{let s=n[0]-t[0],r=n[1]-t[1],a=s*s+r*r,o=a===0?0:Math.max(0,Math.min(1,((i-t[0])*s+(e-t[1])*r)/a));return Math.hypot(i-(t[0]+s*o),e-(t[1]+r*o))},"distanceTo"),rE=l((i,e)=>{let t=ju(e.terrain);if(t===null)return;let{centre:n,radius:s,seed:r,latitude:a}=i.place;t.plants.forEach((o,c)=>{for(let u=0;u<o.count;u++){let h=1e3+c*97+u*7,f=o.size[0]+(o.size[1]-o.size[0])*Ei(r,h),d=t.conifers,p=d!==void 0&&Ei(r,h+1)>=d[0]+(d[1]-d[0])*a?"broadleaf":o.kind,x=nE[p]*f;for(let y=0;y<6;y++){let _=Ei(r,h+2+y*2)*Math.PI*2,g=Math.sqrt(Ei(r,h+3+y*2))*s*.92,S=n[0]+Math.cos(_)*g,R=n[1]+Math.sin(_)*g;if(i.hasRoom(S,R,x)){iE(i,o,p,S,R,f,_),i.taken.push([S,R,x]);break}}}})},"plants"),Gp=l((i,e,t)=>{let n=new Fp(t,e),{centre:s,radius:r}=e;if([i.road,i.railroad].forEach(a=>{a!==null&&kp(a)&&(a.joins.forEach(o=>n.lines.push([s,zp(e,o)])),a.alone&&n.lines.push([s,s]))}),i.fortress){let a=r*.62,o=[[-a,-a],[a,-a],[a,a],[-a,a]].map(([c,u])=>[s[0]+c,s[1]+u]);o.forEach((c,u)=>n.lines.push([c,o[(u+1)%4]]))}if(i.airbase){let a=r*.75;n.lines.push([[s[0]-a,s[1]+.12],[s[0]+a,s[1]+.12]])}return i.irrigation!==null&&Z1(n,i.irrigation),i.road!==null&&Y1(n,i.road),i.railroad!==null&&$1(n,i.railroad),i.mine&&J1(n,n.claim(...Dp.mine,.1)),i.fortress&&K1(n),i.airbase&&Q1(n),i.pollution&&j1(n),i.specials.forEach(([a,o],c)=>eE(n,Ex(a,o),n.claim(...Dp.special(c),.1),c+1)),i.hut&&tE(n,n.claim(...Dp.hut,.13)),i.vegetation&&i.irrigation===null&&!i.fortress&&!i.airbase&&rE(n,i),{taken:n.taken,lines:n.lines}},"layOverlay"),aE=l((i,e,t)=>{let n=Op();return t.forEach(({overlay:s,place:r})=>Gp(s,r,n)),Vp(i,e,n)},"overlayMesh"),Vp=l((i,e,t)=>{let n=new Float32Array(t.positions);for(let s=0;s<n.length;s+=3)n[s]=n[s]-i,n[s+2]=n[s+2]-e;return{u:i,v:e,positions:n,normals:new Float32Array(t.normals),colours:new Float32Array(t.colours)}},"meshOf"),Nx=aE;var Ps,ln,si,ko,Ti,Fn,_n,_a,Go,hr,Vo,Ho,yt,Ux,Xp,qp,th,nh,Fx,zo,Yp=class Yp{constructor(e){j(this,yt);j(this,Ps);j(this,ln);j(this,si,[]);j(this,ko);j(this,Ti);j(this,Fn,new Set);j(this,_n,null);j(this,_a,null);j(this,Go,new Map);j(this,hr,[0,0]);j(this,Vo);j(this,Ho);H(this,Ti,e);let t=e.topology(),n=e.width(),s=e.height(),r=t.wrapsY();this.layout=fx({width:n,height:s,topologyId:e.topologyId(),wrapsY:r}),H(this,Ps,_x({layout:this.layout,source:{width:n,height:s,wrapsY:r,terrainAt:l((d,p)=>e.get(d,p).terrain._,"terrainAt"),waterAt:l((d,p)=>e.get(d,p).isWater,"waterAt"),neighbours:l((d,p)=>t.directions().map(x=>t.neighbour(d,p,x)).filter(x=>x!==null),"neighbours")}})),H(this,ln,vx(this.layout,s));let[a,o]=this.layout.centre(0,0),c=Math.max(...this.layout.outline(0,0).map(([d,p])=>Math.hypot(d-a,p-o))),u=Math.max(...t.directions().map(d=>t.offset(d,0,0)).map(([d,p])=>{let[x,y]=this.layout.centre(d,p);return Math.hypot(x-a,y-o)}));H(this,ko,1.2+c+Ji*Math.SQRT2+Math.max((Si.reach-1)*u,u/2+Ji*Math.SQRT2+Qu));let h=this.layout.outline(0,0),f=h.flatMap(([d,p],x)=>{let[y,_]=h[(x+1)%h.length],g=Math.hypot(y-d,_-p);return g===0?[]:[{away:Math.abs((y-d)*(o-p)-(_-p)*(a-d))/g,normal:[(_-p)/g,(d-y)/g]}]});H(this,Vo,Math.min(...f.map(({away:d})=>d))),H(this,Ho,Math.min(...f.map(({away:d,normal:[p,x]})=>d/(Math.abs(p)+Math.abs(x)))))}surfaceAt(e,t,n=new Map){let{spacingU:s,spacingV:r}=m(this,ln),a=Math.floor(e/s),o=Math.floor(t/r),c=e/s-a,u=t/r-o,h=l((y,_)=>{let g=`${y},${_}`,S=n.get(g);return S===void 0&&(S=m(this,Ps).height(y*s,_*r),n.set(g,S)),S},"at"),f=h(a,o),d=h(a+1,o),p=h(a,o+1);if(c+u<=1)return f+(d-f)*c+(p-f)*u;let x=h(a+1,o+1);return x+(p-x)*(1-c)+(d-x)*(1-u)}ground(){let{chunksU:e,chunksV:t,stepsU:n,stepsV:s,spacingU:r,spacingV:a}=m(this,ln);return{columns:e*n,rows:t*s,spacingU:r,spacingV:a,wrapsV:this.layout.period().v!==null}}extentV(){return m(this,ln).chunksV*m(this,ln).stepsV*m(this,ln).spacingV}heightAt(e,t){return m(this,Ps).height(e,t)}queueAll(e,t){let{chunksU:n,chunksV:s}=m(this,ln),r=[];for(let a=0;a<s;a++)for(let o=0;o<n;o++)r.push(`${o},${a}`);H(this,si,G(this,yt,zo).call(this,r,e,t)),H(this,hr,[e,t]),r.forEach(a=>m(this,Fn).add(a))}changed(e,t,n,s=!1){if(e.length===0&&!s)return[];H(this,hr,[t,n]),(e.length===0?[...G(this,yt,nh).call(this).values()].flat():G(this,yt,Fx).call(this,e)).forEach(([o,c])=>{let u=G(this,yt,th).call(this,o,c);if(m(this,Fn).has(u)||m(this,_n)?.key===u&&!G(this,yt,Ux).call(this,m(this,_n),o,c))return;JSON.stringify(G(this,yt,Xp).call(this,o,c))!==(m(this,Go).get(`${o},${c}`)??"null")&&m(this,Fn).add(u)});let r=m(this,Ps).refresh(s?void 0:e);if(r.length===0)return r;let a=bx(m(this,ln),this.layout,r,m(this,ko)).map(([o,c])=>`${o},${c}`);return H(this,si,G(this,yt,zo).call(this,[...new Set([...m(this,si),...a])],t,n)),r}refocus(e,t){H(this,si,G(this,yt,zo).call(this,m(this,si),e,t)),H(this,hr,[e,t])}pending(){return m(this,si).length}overlaysPending(){return m(this,Fn).size+(m(this,_n)===null||m(this,Fn).has(m(this,_n).key)?0:1)}build(e,t){let n=performance.now(),s=l(()=>t!==null&&performance.now()-n>=t,"spent");for(;m(this,si).length>0;){if(s())return;let r=m(this,si).shift(),[a,o]=r.split(",").map(Number);e.setChunk(a,o,yx(m(this,ln),m(this,Ps),a,o)),m(this,Fn).add(r)}for(;m(this,Fn).size>0||m(this,_n)!==null;){if(m(this,_n)!==null&&m(this,Fn).has(m(this,_n).key)&&H(this,_n,null),m(this,_n)===null){let d=G(this,yt,zo).call(this,[...m(this,Fn)],...m(this,hr))[0];m(this,Fn).delete(d),H(this,_n,{key:d,squares:G(this,yt,nh).call(this).get(d)??[],done:0,laid:Op(),heights:new Map})}let r=m(this,_n);for(;r.done<r.squares.length;){let[d,p]=r.squares[r.done],x=G(this,yt,qp).call(this,d,p,r.heights);if(r.done++,x!==null&&Gp(x.overlay,x.place,r.laid),r.done<r.squares.length&&s())return}let[a,o]=r.key.split(",").map(Number),{stepsU:c,stepsV:u,spacingU:h,spacingV:f}=m(this,ln);H(this,_n,null),e.setOverlay(a,o,r.laid.positions.length===0?null:Vp(a*c*h,o*u*f,r.laid))}}overlayOf(e,t){let{stepsU:n,stepsV:s,spacingU:r,spacingV:a}=m(this,ln),o=new Map,c=(G(this,yt,nh).call(this).get(`${e},${t}`)??[]).flatMap(([u,h])=>G(this,yt,qp).call(this,u,h,o)??[]);return c.length===0?null:Nx(e*n*r,t*s*a,c)}overlayKeyOf(e,t){return G(this,yt,th).call(this,e,t)}};Ps=new WeakMap,ln=new WeakMap,si=new WeakMap,ko=new WeakMap,Ti=new WeakMap,Fn=new WeakMap,_n=new WeakMap,_a=new WeakMap,Go=new WeakMap,hr=new WeakMap,Vo=new WeakMap,Ho=new WeakMap,yt=new WeakSet,Ux=l(function(e,t,n){return e.squares.slice(0,e.done).some(([s,r])=>s===t&&r===n)},"#reached"),Xp=l(function(e,t){let n=m(this,Ti).topology();return Sx(m(this,Ti).get(e,t),n.directions().flatMap(s=>{let r=n.neighbour(e,t,s);return r===null?[]:[{offset:n.offset(s,e,t),tile:m(this,Ti).get(r[0],r[1])}]}))},"#overlayAt"),qp=l(function(e,t,n){let s=G(this,yt,Xp).call(this,e,t);if(m(this,Go).set(`${e},${t}`,JSON.stringify(s)),s===null)return null;let[r,a]=this.layout.centre(e,t);return{overlay:s,place:{centre:[r,a],toward:l(([o,c])=>this.layout.centre(e+o,t+c),"toward"),radius:m(this,Vo),inner:m(this,Ho),heightAt:l((o,c)=>this.surfaceAt(o,c,n),"heightAt"),seed:Math.imul(e,73856093)^Math.imul(t,19349663),latitude:Math.min(1,Math.abs(2*a/this.extentV()-1))}}},"#square"),th=l(function(e,t){let{chunksU:n,chunksV:s,stepsU:r,stepsV:a,spacingU:o,spacingV:c}=m(this,ln),[u,h]=this.layout.centre(e,t),f=Math.floor(u/(r*o)),d=Math.floor(h/(a*c));return`${Math.min(n-1,Math.max(0,f))},${Math.min(s-1,Math.max(0,d))}`},"#chunkOf"),nh=l(function(){if(m(this,_a)===null){let e=new Map;for(let t=0;t<m(this,Ti).height();t++)for(let n=0;n<m(this,Ti).width();n++){let s=G(this,yt,th).call(this,n,t);e.set(s,[...e.get(s)??[],[n,t]])}H(this,_a,e)}return m(this,_a)},"#chunksOfSquares"),Fx=l(function(e){let t=m(this,Ti).topology(),n=new Map;return e.forEach(([s,r])=>[[s,r],...t.directions().map(a=>t.neighbour(s,r,a)).filter(a=>a!==null)].forEach(a=>n.set(a.join(),a))),[...n.values()]},"#besides"),zo=l(function(e,t,n){let{stepsU:s,stepsV:r,spacingU:a,spacingV:o}=m(this,ln),c=s*a,u=r*o,{u:h,v:f}=this.layout.period(),d=l((x,y)=>Math.abs(y===null?x:x-y*Math.round(x/y)),"round"),p=l(x=>{let[y,_]=x.split(",").map(Number);return Math.hypot(d((y+.5)*c-t,h),d((_+.5)*u-n,f))},"distance");return[...e].sort((x,y)=>p(x)-p(y))},"#nearestFirst"),l(Yp,"Land");var Wp=Yp,Ox=Wp;var oE=l(()=>typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches===!0,"prefersReducedMotion"),va=oE;var Bx=l((i,e,t=100)=>{let n=i.filter(({time:o})=>e-o<=t);if(n.length<2)return{x:0,y:0};let s=n[0],r=n[n.length-1],a=r.time-s.time;return a<=0?{x:0,y:0}:{x:(r.x-s.x)/a,y:(r.y-s.y)/a}},"releaseVelocity");var lE=8,cE=.92,uE=.02,zx=3,hE=50,dE=8,fE=10,kx=250,Wo,Xo,ya,ba,dr,Is,$p=class $p{constructor({pointerId:e,clientX:t,clientY:n,timeStamp:s}){j(this,Wo);j(this,Xo);j(this,ya);j(this,ba);j(this,dr,!1);j(this,Is);this.pointerId=e,H(this,Wo,t),H(this,Xo,n),H(this,ya,t),H(this,ba,n),H(this,Is,[{x:t,y:n,time:s}])}dragging(){return m(this,dr)}move({pointerId:e,clientX:t,clientY:n,timeStamp:s}){if(e!==this.pointerId||!m(this,dr)&&Math.hypot(t-m(this,Wo),n-m(this,Xo))<lE)return null;let r=!m(this,dr),a=m(this,ya)-t,o=m(this,ba)-n;return H(this,dr,!0),H(this,ya,t),H(this,ba,n),m(this,Is).push({x:t,y:n,time:s}),m(this,Is).length>20&&m(this,Is).shift(),{dx:a,dy:o,started:r}}releaseVelocity(e){return Bx(m(this,Is),e)}};Wo=new WeakMap,Xo=new WeakMap,ya=new WeakMap,ba=new WeakMap,dr=new WeakMap,Is=new WeakMap,l($p,"Press");var ih=$p,Ai,qo,Zp=class Zp{constructor(e){j(this,Ai,null);j(this,qo);H(this,qo,e)}start(e){this.stop();let t=Math.hypot(e.x,e.y),n=t>zx?zx/t:1,s=e.x*n,r=e.y*n,a=null,o=l(c=>{let u=a===null?16:Math.min(c-a,64);if(a=c,Math.hypot(s,r)<uE){H(this,Ai,null);return}m(this,qo).call(this,-s*u,-r*u);let h=Math.pow(cE,u/16);s*=h,r*=h,H(this,Ai,window.requestAnimationFrame(o))},"step");H(this,Ai,window.requestAnimationFrame(o))}gliding(){return m(this,Ai)!==null}stop(){m(this,Ai)!==null&&(window.cancelAnimationFrame(m(this,Ai)),H(this,Ai,null))}};Ai=new WeakMap,qo=new WeakMap,l(Zp,"Glide");var sh=Zp,fr,Yo,$o,Ma,Jp=class Jp{constructor(){j(this,fr,0);j(this,Yo,0);j(this,$o,-1/0);j(this,Ma,0)}turned(e,t){let n=e.deltaMode===0,s=e.deltaY;if(s===0||e.ctrlKey&&t!==null&&e.timeStamp-t<=kx)return 0;let r=Math.sign(s),a=e.timeStamp-m(this,$o)>kx||r!==m(this,Yo);if(H(this,$o,e.timeStamp),H(this,Yo,r),a&&(H(this,fr,0),H(this,Ma,0)),n&&!e.ctrlKey&&m(this,Ma)>=fE)return 0;if(!a&&n){if(H(this,fr,m(this,fr)+s),Math.abs(m(this,fr))<(e.ctrlKey?dE:hE))return 0;H(this,fr,0)}return n&&!e.ctrlKey&&H(this,Ma,m(this,Ma)+1),s<0?1:-1}};fr=new WeakMap,Yo=new WeakMap,$o=new WeakMap,Ma=new WeakMap,l(Jp,"WheelTurn");var rh=Jp;var pE=350,mE=.006,Gx=.004,Ci,Kt,vn,Sa,Ri,ri,ch,Xn,qn,Ls,wa,On,Ds,Re,Wn,ah,oh,Vx,Qp,Ki,jp,Hx,Qi,Wx,Xx,qx,Yx,Zo,$x,Zx,Jx,lh,em=class em{constructor(e,t,n=null){j(this,Re);j(this,Ci);j(this,Kt);j(this,vn,null);j(this,Sa,[0,0]);j(this,Ri,null);j(this,ri);j(this,ch,new rh);j(this,Xn,new Map);j(this,qn,null);j(this,Ls,null);j(this,wa,[]);j(this,On);j(this,Ds,null);H(this,Ci,e),H(this,Kt,t),H(this,On,n),H(this,ri,new sh((s,r)=>{let[a,o]=G(this,Re,Vx).call(this);G(this,Re,jp).call(this,[a,o],[a-s,o-r])})),G(this,Re,Wn).call(this,"pointerdown",s=>G(this,Re,Hx).call(this,s)),G(this,Re,Wn).call(this,"pointermove",s=>G(this,Re,Xx).call(this,s)),G(this,Re,Wn).call(this,"pointerup",s=>G(this,Re,qx).call(this,s)),G(this,Re,Wn).call(this,"pointercancel",s=>G(this,Re,Yx).call(this,s)),G(this,Re,Wn).call(this,"wheel",s=>G(this,Re,Zx).call(this,s),{passive:!1}),G(this,Re,Wn).call(this,"gesturestart",s=>G(this,Re,lh).call(this,s,"start"),{passive:!1}),G(this,Re,Wn).call(this,"gesturechange",s=>G(this,Re,lh).call(this,s,"change"),{passive:!1}),G(this,Re,Wn).call(this,"gestureend",s=>G(this,Re,lh).call(this,s,"end"),{passive:!1}),G(this,Re,Wn).call(this,"contextmenu",s=>G(this,Re,Wx).call(this,s)),G(this,Re,Wn).call(this,"pointerleave",()=>m(this,On)?.hover(null)),G(this,Re,Wn).call(this,"touchstart",s=>s.preventDefault(),{passive:!1})}dragging(){return m(this,vn)?.dragging()===!0||m(this,Ri)!==null}moving(){return this.dragging()||m(this,qn)!==null||m(this,ri).gliding()}dispose(){m(this,ri).stop(),G(this,Re,Qi).call(this),m(this,wa).forEach(([e,t,n])=>m(this,Ci).removeEventListener(e,t,n)),H(this,wa,[])}};Ci=new WeakMap,Kt=new WeakMap,vn=new WeakMap,Sa=new WeakMap,Ri=new WeakMap,ri=new WeakMap,ch=new WeakMap,Xn=new WeakMap,qn=new WeakMap,Ls=new WeakMap,wa=new WeakMap,On=new WeakMap,Ds=new WeakMap,Re=new WeakSet,Wn=l(function(e,t,n){m(this,Ci).addEventListener(e,t,n),m(this,wa).push([e,t,n])},"#listen"),ah=l(function(){return{width:m(this,Ci).clientWidth||1,height:m(this,Ci).clientHeight||1}},"#box"),oh=l(function([e,t]){let{width:n,height:s}=G(this,Re,ah).call(this);return[e/n*2-1,1-t/s*2]},"#screen"),Vx=l(function(){let{width:e,height:t}=G(this,Re,ah).call(this);return[e/2,t/2]},"#middle"),Qp=l(function(){let{width:e,height:t}=G(this,Re,ah).call(this);return e/t},"#aspect"),Ki=l(function(e){let t=m(this,Ci).getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]},"#at"),jp=l(function(e,t){m(this,Kt).setOrbit(Yg(m(this,Kt).orbit(),m(this,Kt).lookHeight(),G(this,Re,oh).call(this,e),G(this,Re,oh).call(this,t),G(this,Re,Qp).call(this)))},"#pan"),Hx=l(function(e){if(m(this,ri).stop(),m(this,On)?.hover(null),e.pointerType==="touch"&&(m(this,Xn).set(e.pointerId,G(this,Re,Ki).call(this,e)),m(this,Xn).size===2)){H(this,vn,null),G(this,Re,Qi).call(this),H(this,qn,G(this,Re,Zo).call(this));return}if(e.isPrimary&&e.button!==2){if(m(this,Ci).setPointerCapture?.(e.pointerId),e.button===1||e.button===0&&e.altKey){e.preventDefault(),H(this,Ri,{pointerId:e.pointerId,x:e.clientX,y:e.clientY});return}if(e.button===0){let t=new ih(e),[n,s]=G(this,Re,Ki).call(this,e),{clientX:r,clientY:a}=e;H(this,vn,t),H(this,Sa,[n,s]),G(this,Re,Qi).call(this),H(this,Ds,window.setTimeout(()=>{H(this,Ds,null),m(this,vn)===t&&!t.dragging()&&m(this,On)?.menu(n,s,r,a,!0)===!0&&H(this,vn,null)},pE))}}},"#down"),Qi=l(function(){m(this,Ds)!==null&&(window.clearTimeout(m(this,Ds)),H(this,Ds,null))},"#stopHold"),Wx=l(function(e){if(m(this,On)===null||!m(this,On).menuOnRightClick()||(e.preventDefault(),m(this,On).menuOpen()))return;let[t,n]=G(this,Re,Ki).call(this,e);m(this,On).menu(t,n,e.clientX,e.clientY,!1)&&(G(this,Re,Qi).call(this),H(this,vn,null))},"#rightClick"),Xx=l(function(e){if(m(this,Xn).has(e.pointerId)&&(m(this,Xn).set(e.pointerId,G(this,Re,Ki).call(this,e)),m(this,qn)!==null)){G(this,Re,$x).call(this);return}let t=m(this,Ri);if(t!==null&&t.pointerId===e.pointerId){let r=m(this,Kt).orbit();m(this,Kt).setOrbit(lr({...r,yaw:r.yaw-(e.clientX-t.x)*mE,pitch:r.pitch+(e.clientY-t.y)*Gx})),t.x=e.clientX,t.y=e.clientY;return}let n=m(this,vn);if(n===null){if(e.pointerType==="mouse"&&e.buttons===0&&!m(this,ri).gliding()){let[r,a]=G(this,Re,Ki).call(this,e);m(this,On)?.hover({x:r,y:a,clientX:e.clientX,clientY:e.clientY})}return}if(n.move(e)===null)return;G(this,Re,Qi).call(this);let s=G(this,Re,Ki).call(this,e);G(this,Re,jp).call(this,m(this,Sa),s),H(this,Sa,s)},"#move"),qx=l(function(e){if(m(this,Xn).delete(e.pointerId),m(this,qn)!==null){H(this,qn,m(this,Xn).size<2?null:G(this,Re,Zo).call(this));return}if(m(this,Ri)?.pointerId===e.pointerId){H(this,Ri,null);return}let t=m(this,vn);if(!(t===null||t.pointerId!==e.pointerId)){if(H(this,vn,null),G(this,Re,Qi).call(this),!t.dragging()){let[n,s]=G(this,Re,Ki).call(this,e);m(this,On)?.click(n,s,e.clientX,e.clientY);return}va()||m(this,ri).start(t.releaseVelocity(e.timeStamp))}},"#up"),Yx=l(function(e){m(this,Xn).delete(e.pointerId),m(this,qn)!==null&&H(this,qn,m(this,Xn).size<2?null:G(this,Re,Zo).call(this)),m(this,vn)?.pointerId===e.pointerId&&(H(this,vn,null),G(this,Re,Qi).call(this)),m(this,Ri)?.pointerId===e.pointerId&&H(this,Ri,null)},"#cancel"),Zo=l(function(){let[e,t]=[...m(this,Xn).values()];return e===void 0||t===void 0?null:{distance:Math.max(1,Math.hypot(t[0]-e[0],t[1]-e[1])),angle:Math.atan2(t[1]-e[1],t[0]-e[0]),middleY:(e[1]+t[1])/2,orbit:m(this,Kt).orbit()}},"#measurePair"),$x=l(function(){let e=m(this,qn),t=G(this,Re,Zo).call(this);e===null||t===null||m(this,Kt).setOrbit(lr({...e.orbit,distance:e.orbit.distance*(e.distance/t.distance),yaw:e.orbit.yaw-(t.angle-e.angle),pitch:e.orbit.pitch+(t.middleY-e.middleY)*Gx}))},"#twoFingers"),Zx=l(function(e){e.preventDefault();let t=m(this,ch).turned(e,m(this,Ls)?.at??null);t!==0&&(m(this,ri).stop(),G(this,Re,Jx).call(this,t,G(this,Re,Ki).call(this,e)))},"#wheelTurned"),Jx=l(function(e,t){let n=m(this,Kt).orbit(),s=fa(n,e),r=da(n,m(this,Kt).lookHeight(),G(this,Re,oh).call(this,t),G(this,Re,Qp).call(this));if(r===null||s.distance===n.distance){m(this,Kt).setOrbit(s);return}let a=1-s.distance/n.distance;m(this,Kt).setOrbit({...s,focus:[n.focus[0]+(r[0]-n.focus[0])*a,n.focus[1]+(r[1]-n.focus[1])*a]})},"#zoomAbout"),lh=l(function(e,t){if(e.preventDefault(),m(this,qn)!==null){H(this,Ls,null);return}if(t==="end"){H(this,Ls,null);return}if(t==="start"){m(this,ri).stop(),H(this,vn,null),G(this,Re,Qi).call(this),H(this,Ls,{orbit:m(this,Kt).orbit(),at:e.timeStamp});return}let n=m(this,Ls);n!==null&&(n.at=e.timeStamp,m(this,Kt).setOrbit(lr({...n.orbit,distance:n.orbit.distance/Math.max(.05,e.scale),yaw:n.orbit.yaw-e.rotation*Math.PI/180})))},"#safari"),l(em,"CameraInput");var Kp=em,Kx=Kp;var gE=["#9a9a9a","#4a4a4a"],Jo=l(i=>{let e=i.civilization?.attributes?.find(t=>t.name==="colors")?.value;return!Array.isArray(e)||typeof e[0]!="string"?gE:[e[0],typeof e[1]=="string"?e[1]:e[0]]},"coloursOf"),tm=l((i,e)=>i.find(t=>t.id===e)??[...i].sort((t,n)=>(n.defence?.value??0)-(t.defence?.value??0))[0]??null,"unitOnTop"),xE=l(i=>{let{current:e,max:t}=i.hitPoints??{current:0,max:0};return t>0&&e<t?Math.max(0,e/t):null},"healthOf"),_E=l((i,e,t,n={},s=()=>0,r=1)=>{let a=i.units??[],o=tm(a,e),c=o!==null&&o.id===e,u=t&&i.city?{name:n.cityName?.(i.city)??i.city.name,size:i.city.growth?.size??1,colours:Jo(i.city.player),walled:i.city.walled===!0,disorder:i.city.civilDisorderDeclared===!0}:null,h=o!==null&&(t||c)?{id:o.id,type:o._,kinds:o.__??[],colours:Jo(o.player),count:a.length,active:c,busy:o.busy!==null&&o.busy!==void 0,fortified:(o.improvements??[]).some(({_:f})=>f==="Fortified"),veteran:(o.improvements??[]).some(({_:f})=>f==="Veteran"),health:xE(o),status:(o.busy?n.unitStatus?.(o):null)||null,facing:s(o),size:r}:null;return u===null&&h===null?null:{city:u,unit:h}},"markerFor"),Qx=_E;var vE=1,yE=.04,bE=12,ME=l((i,e,t,n,s,{water:r=0,ceiling:a=vE}={})=>{let{from:o,direction:c}=yp(i,e,t,n),[u,h,f]=o,[d,p,x]=c;if(p>-1e-6)return null;let y=l(v=>[u+d*v,h+p*v,f+x*v],"at"),_=l(v=>{let[w,U,I]=y(v);return U-Math.max(r,s(w,I))},"above"),g=Math.max(0,(h-a)/-p),S=(h-r)/-p,R=yE/Math.max(1e-6,Math.hypot(d,x)),E=g;for(let v=g;;v=Math.min(S,v+R)){if(_(v)<=0){let w=E,U=v;for(let V=0;V<bE;V++){let J=(w+U)/2;_(J)>0?w=J:U=J}let[I,,B]=y(U);return[I,B]}if(v>=S)break;E=v}let[C,,T]=y(S);return[C,T]},"pickGround"),jx=ME;var uh=4,Ns,Ko,pr,mr,Sn,Ea,Us,ji,Qo,jo,el,ai,hh,e_,im,sm=class sm{constructor(e,t,n,s,r){j(this,ai);j(this,Ns);j(this,Ko);j(this,pr);j(this,mr);j(this,Sn);j(this,Ea);j(this,Us);j(this,ji);j(this,Qo);j(this,jo);j(this,el,l(e=>{let t=m(this,Ns).getBoundingClientRect(),n=t.width>0?(e.clientX-t.left)/t.width:0,s=t.height>0?(e.clientY-t.top)/t.height:0;m(this,jo).call(this,n*m(this,Sn),s*m(this,Ea))},"#click"));H(this,Ns,e),H(this,pr,t),H(this,mr,n),H(this,Sn,t.period().u),H(this,Ea,s),H(this,jo,r),H(this,ji,document.createElement("canvas"));let{v:a}=t.period();H(this,Us,a),H(this,Qo,[[0,0],[-m(this,Sn),0],...a===null?[]:[[0,-a],[-m(this,Sn),-a]]]);let o=Math.max(1,Math.round(m(this,Sn)*uh)),c=Math.max(1,Math.round(m(this,Ea)*uh));[e,m(this,ji)].forEach(u=>{u.width=o,u.height=c}),H(this,Ko,e.getContext("2d")),e.addEventListener("click",m(this,el))}dispose(){m(this,Ns).removeEventListener("click",m(this,el))}redraw(){let e=m(this,ji).getContext("2d");if(e===null)return;let t=m(this,mr).width(),n=m(this,mr).height(),s=[];e.fillStyle="#000000",e.fillRect(0,0,m(this,ji).width,m(this,ji).height);for(let r=0;r<n;r++)for(let a=0;a<t;a++){let o=m(this,mr).get(a,r),c=o.terrain?._??"Unknown";if(c==="Unknown")continue;e.fillStyle=Ju(c).colour,m(this,Qo).forEach(([f,d])=>{G(this,ai,e_).call(this,e,a,r,f,d),e.fill()});let[u,h]=m(this,pr).centre(a,r);if(o.city)s.push([u,h,Jo(o.city.player)[0],2.2]);else if((o.units??[]).length>0){let f=tm(o.units,null);f!==null&&s.push([u,h,Jo(f.player)[0],1.4])}}s.forEach(([r,a,o,c])=>G(this,ai,im).call(this,r,a).forEach(([u,h])=>{e.fillStyle="#000000",e.fillRect(u-c-.5,h-c-.5,c*2+1,c*2+1),e.fillStyle=o,e.fillRect(u-c,h-c,c*2,c*2)}))}show(e,t){let n=m(this,Ko);if(n===null)return;if(n.clearRect(0,0,m(this,Ns).width,m(this,Ns).height),n.drawImage(m(this,ji),0,0),t!==null){let[h,f]=m(this,pr).centre(t.x,t.y);n.fillStyle="#ffffff",G(this,ai,im).call(this,h,f).forEach(([d,p])=>n.fillRect(d-2,p-2,4,4))}if(e===null||e.length<3)return;n.strokeStyle="#ffffff",n.lineWidth=1;let s=m(this,Us),r=Math.min(...e.map(([h])=>h)),a=Math.min(...e.map(([,h])=>h)),o=-m(this,Sn)*Math.floor(r/m(this,Sn)),c=s===null?0:-s*Math.floor(a/s);(s===null?[0]:[-s,0,s]).forEach(h=>[-m(this,Sn),0,m(this,Sn)].forEach(f=>{n.beginPath(),e.forEach(([d,p],x)=>{let[y,_]=G(this,ai,hh).call(this,d+o+f,p+c+h);x===0?n.moveTo(y,_):n.lineTo(y,_)}),n.closePath(),n.stroke()}))}};Ns=new WeakMap,Ko=new WeakMap,pr=new WeakMap,mr=new WeakMap,Sn=new WeakMap,Ea=new WeakMap,Us=new WeakMap,ji=new WeakMap,Qo=new WeakMap,jo=new WeakMap,el=new WeakMap,ai=new WeakSet,hh=l(function(e,t){return[e*uh,t*uh]},"#px"),e_=l(function(e,t,n,s=0,r=0){e.beginPath(),m(this,pr).outline(t,n).forEach(([a,o],c)=>{let[u,h]=G(this,ai,hh).call(this,a+s,o+r);c===0?e.moveTo(u,h):e.lineTo(u,h)}),e.closePath()},"#outline"),im=l(function(e,t){return(m(this,Us)===null?[0]:[-m(this,Us),0,m(this,Us)]).flatMap(s=>[-m(this,Sn),0,m(this,Sn)].map(r=>G(this,ai,hh).call(this,e+r,t+s)))},"#everywhere"),l(sm,"Minimap3D");var nm=sm,t_=nm;var SE=l(i=>Object.entries(i.reduce((e,t)=>(e[t._]=(e[t._]??0)+t.value,e),{})).map(([e,t])=>({_:e,value:Math.floor(t)})).filter(({value:e})=>e>0),"netTileYields"),n_=l(i=>{let e=SE(i).sort((n,s)=>n._.charCodeAt(0)-s._.charCodeAt(0)).flatMap(({_:n,value:s})=>Array.from({length:s},()=>n)),t=Math.min(6,Math.max(2,Math.ceil(e.length/2)));return{columns:t,icons:e.slice(0,t*2).map((n,s)=>({_:n,column:s%t,row:Math.floor(s/t)}))}},"tileYieldGrid");var i_=l((i,e)=>(i.squareYieldsApplied?void 0:e?.squareYields?.find(({x:t,y:n})=>t===i.x&&n===i.y)?.yields)??i.yields??[],"squareYields"),s_=l(i=>i.city??i.workedBy??null,"squareCity");var wE=.9,EE=l(i=>{let{columns:e,icons:t}=n_(i),n=Math.min(e,t.length),s=Math.ceil(t.length/e);return{columns:e,slots:t.map(({_:r,column:a,row:o})=>({_:r,right:a-(n-1)/2,up:(s-1)/2-o}))}},"yieldSlots"),TE=l((i,e)=>wE*e/Math.hypot(i,2),"yieldIconSize"),r_=l((i,e)=>{let[t,n]=i.centre(0,0);return Math.min(...e.edgeDirections().map(s=>{let[r,a]=e.offset(s,0,0),[o,c]=i.centre(r,a);return Math.hypot(o-t,c-n)}))},"innerOf"),a_=l(({at:i,yields:e},t)=>{let{columns:n,slots:s}=EE(e);return s.length===0?null:{at:i,size:TE(n,t),slots:s}},"laidYields"),o_=l(i=>{let e=[...i],t=e.reduce((a,{slots:o})=>a+o.length,0),n={count:t,anchors:new Float32Array(t*3),slots:new Float32Array(t*2),sizes:new Float32Array(t),cells:new Float32Array(t),names:[]},s=new Map,r=0;return e.forEach(({at:a,size:o,slots:c})=>{c.forEach(({_:u,right:h,up:f})=>{let d=s.get(u);d===void 0&&(d=n.names.push(u)-1,s.set(u,d)),n.anchors[r*3]=a[0],n.anchors[r*3+1]=a[1],n.anchors[r*3+2]=a[2],n.slots[r*2]=h,n.slots[r*2+1]=f,n.sizes[r]=o,n.cells[r]=d,r++})}),n},"yieldMesh");var AE=10,CE=4e3,l_=l(i=>i-Math.PI*2*Math.round(i/(Math.PI*2)),"shortTurn"),RE=350,PE=500,IE=.25,LE=400,Gt,rl,al,Qe,Qt,xr,ol,ll,ot,bt,wn,Ta,cl,_r,Os,Aa,ul,hl,Bn,dl,es,oi,fl,Pi,Bs,pl,zn,Ca,Ra,ts,ns,Pa,zs,vr,Ia,is,ml,ss,yr,gl,br,Ii,Mr,Sr,xl,_l,La,vl,Da,yl,Na,Ua,wr,ue,am,c_,dh,u_,tl,h_,d_,f_,om,fh,p_,m_,nl,Fs,il,g_,x_,lm,gr,__,v_,y_,cm,sl,um,b_,M_,hm,cn,S_,w_,dm,fm=class fm{constructor(e,t=ox){j(this,ue);j(this,Gt);j(this,rl);j(this,al,[]);j(this,Qe);j(this,Qt);j(this,xr,null);j(this,ol,0);j(this,ll,"");j(this,ot);j(this,bt,null);j(this,wn,null);j(this,Ta);j(this,cl);j(this,_r);j(this,Os,null);j(this,Aa,null);j(this,ul);j(this,hl,!1);j(this,Bn);j(this,dl);j(this,es,new Map);j(this,oi,new Map);j(this,fl);j(this,Pi,null);j(this,Bs,null);j(this,pl);j(this,zn,l(()=>{let e=m(this,Bs);e!==null&&(e.timer!==null&&window.clearTimeout(e.timer),H(this,Bs,null),document.removeEventListener("keydown",m(this,zn),!0),e.open&&m(this,Bn).endTooltip(m(this,Gt)))},"#endHover"));j(this,Ca,null);j(this,Ra,!0);j(this,ts,new Map);j(this,ns,null);j(this,Pa,new Map);j(this,zs,new Map);j(this,vr,[]);j(this,Ia,0);j(this,is,null);j(this,ml,null);j(this,ss,!0);j(this,yr);j(this,gl,l(()=>{},"#stopUnitSize"));j(this,br,!1);j(this,Ii,!0);j(this,Mr,!1);j(this,Sr,new Map);j(this,xl);j(this,_l,l(()=>{},"#stopArtChanged"));j(this,La,!1);j(this,vl);j(this,Da);j(this,yl,"");j(this,Na,l(()=>G(this,ue,dm).call(this),"#resizeHandler"));j(this,Ua,null);j(this,wr,!1);H(this,Gt,e.mapCanvas),H(this,rl,e.coveredBy),H(this,vl,e.art),H(this,dl,{cityName:e.cityName,unitStatus:e.unitStatus}),H(this,yr,e.unitSize?.get()??1),H(this,Da,e.art.id()),this.world=e.world,H(this,Qe,new Ox(e.world)),H(this,xl,r_(m(this,Qe).layout,e.world.topology())),H(this,vr,e.world.tiles()),H(this,Ia,m(this,vr).length),H(this,cl,e.cameraDistance),H(this,ul,e.lockVerticalEdges);let n=e.cameraDistance.get();H(this,ot,G(this,ue,nl).call(this,{...Xg(m(this,Qe).layout.centre(0,0)),...n===null?{}:{distance:n}})),H(this,_r,m(this,ot).distance),this.portal=new Pm(e,{centre:l(()=>G(this,ue,p_).call(this),"centre"),centreOn:l((s,r)=>G(this,ue,m_).call(this,s,r),"centreOn"),changed:l(()=>G(this,ue,cn).call(this),"changed"),visible:l((s,r,a)=>G(this,ue,u_).call(this,s,r,a),"visible")}),H(this,Qt,t(e.mapCanvas,{period:m(this,Qe).layout.period(),ground:m(this,Qe).ground(),yieldIcon:e.yieldIcon})),e.minimapCanvas!==null&&H(this,Ca,new t_(e.minimapCanvas,m(this,Qe).layout,e.world,m(this,Qe).extentV(),(s,r)=>G(this,ue,il).call(this,{...m(this,bt)?.to??m(this,ot),focus:[s,r]}))),e.debug&&e.mapCanvas.parentElement&&(H(this,xr,G(this,ue,S_).call(this,e.mapCanvas.parentElement)),window.civMap3DView=this),m(this,Qe).queueAll(...G(this,ue,fh).call(this)),G(this,ue,sl).call(this),this.portal.on("activate-unit",s=>e.activateUnit(s)),H(this,Bn,e.squares),H(this,pl,e.playerId),H(this,fl,e.transport),H(this,Ta,new Kx(e.mapCanvas,{orbit:l(()=>m(this,ot),"orbit"),lookHeight:l(()=>m(this,wn)??0,"lookHeight"),setOrbit:l(s=>this.setOrbit(s),"setOrbit")},{click:l((s,r)=>G(this,ue,h_).call(this,s,r),"click"),menu:l((s,r,a,o,c)=>G(this,ue,d_).call(this,s,r,a,o,c),"menu"),menuOnRightClick:l(()=>m(this,Bn).menuOnRightClick(),"menuOnRightClick"),menuOpen:l(()=>m(this,Bn).menuOpen(),"menuOpen"),hover:l(s=>G(this,ue,f_).call(this,s),"hover")})),window.addEventListener("resize",m(this,Na)),typeof ResizeObserver<"u"&&e.mapCanvas.parentElement&&(H(this,Ua,new ResizeObserver(m(this,Na))),m(this,Ua).observe(e.mapCanvas.parentElement)),G(this,ue,dm).call(this),G(this,ue,cn).call(this),H(this,gl,e.unitSize?.onChange(()=>{let s=e.unitSize?.get()??1;s!==m(this,yr)&&!m(this,wr)&&(H(this,yr,s),G(this,ue,sl).call(this),G(this,ue,cn).call(this))})??(()=>{})),H(this,_l,e.artChanged?.(()=>{m(this,wr)||(H(this,Ii,!0),G(this,ue,cn).call(this))})??(()=>{}))}land(){return m(this,Qe)}orbit(){return m(this,ot)}moving(){return m(this,bt)!==null||m(this,Ta).moving()}setOrbit(e){m(this,zn).call(this),H(this,bt,null),H(this,ot,G(this,ue,nl).call(this,e)),G(this,ue,cn).call(this)}activeUnit(){return{unit:m(this,is),pendingTile:m(this,ml)}}centre(e){this.portal.setCenter(e.x,e.y)}turnBy(e){let t=m(this,bt)?.to??m(this,ot);G(this,ue,il).call(this,{...t,yaw:t.yaw+e*_p},G(this,ue,am).call(this)+e*_p)}heading(){return{turn:(m(this,bt)?.to??m(this,ot)).yaw,directions:Im(m(this,Qe).layout,this.world.topology())}}faceNorth(){G(this,ue,il).call(this,{...m(this,bt)?.to??m(this,ot),yaw:0},l_(-m(this,ot).yaw))}debugViewModes(){return[]}dispose(){G(this,ue,hm).call(this,!0),H(this,wr,!0),m(this,gl).call(this),m(this,_l).call(this),m(this,zn).call(this),m(this,Ta).dispose(),m(this,Ca)?.dispose(),window.removeEventListener("resize",m(this,Na)),m(this,Ua)?.disconnect(),m(this,ns)!==null&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(m(this,ns)),H(this,ns,null),m(this,xr)?.remove(),m(this,Qt).dispose();let e=window;e.civMap3DView===this&&delete e.civMap3DView}endPicking(){let e=m(this,Pi);e!==null&&(H(this,Pi,null),m(this,Gt).classList.remove("picking-tile"),e.window?.close())}flush(){G(this,ue,lm).call(this),G(this,ue,cn).call(this)}mapEvent(e){if(e.kind==="moved"){G(this,ue,c_).call(this,e.unit.id,e.from,e.to),G(this,ue,dh).call(this,e.unit.id,e.from,e.to);return}G(this,ue,dh).call(this,e.attacker.id,e.attacker.tile,e.defender.tile),G(this,ue,dh).call(this,e.defender.id,e.defender.tile,e.attacker.tile)}measureCovered(){let e=m(this,Gt).getBoundingClientRect();H(this,al,m(this,rl).map(t=>{let n=t.getBoundingClientRect(),s=t.parentElement?.getBoundingClientRect()??n;return{left:Math.max(n.left,s.left,e.left)-e.left,top:Math.max(n.top,s.top,e.top)-e.top,right:Math.min(n.right,s.right,e.right)-e.left,bottom:Math.min(n.bottom,s.bottom,e.bottom)-e.top}}).filter(({left:t,top:n,right:s,bottom:r})=>s>t&&r>n))}pickTile(e,t,n){this.endPicking();let s={accept:e,onPick:t,window:null};H(this,Pi,s),m(this,Gt).classList.add("picking-tile"),s.window=m(this,Bn).prompt(n,()=>{m(this,Pi)===s&&(H(this,Pi,null),m(this,Gt).classList.remove("picking-tile"))})}picking(){return m(this,Pi)!==null}queueTile(e){m(this,Pa).set(`${e.x},${e.y}`,e)}redrawArt(){let e=m(this,vl).id();return e===m(this,Da)?"unchanged":(H(this,Da,e),H(this,Ii,!0),"redrawn")}releaseTiles(){m(this,Pa).forEach((e,t)=>m(this,zs).set(t,e)),m(this,Pa).clear(),m(this,zs).size>0&&G(this,ue,cn).call(this)}setActiveUnit(e,t){let n=m(this,is)?.tile;H(this,is,e),H(this,ml,t??null),[n,e?.tile].forEach(s=>{s&&G(this,ue,gr).call(this,s.x,s.y)}),G(this,ue,cn).call(this)}setWaiting(e){H(this,La,e),e&&m(this,zn).call(this)}showActiveUnit(e){m(this,ss)||(H(this,ss,!0),G(this,ue,sl).call(this),G(this,ue,cn).call(this))}shown(){return{units:m(this,ss),yields:m(this,br),waiting:m(this,La)}}tilesPending(){return m(this,zs).size}toggleUnits(){H(this,ss,!m(this,ss)),G(this,ue,sl).call(this),G(this,ue,cn).call(this)}toggleYields(){H(this,br,!m(this,br)),H(this,Ii,!0),G(this,ue,cn).call(this)}zoomBy(e){m(this,zn).call(this),H(this,ot,fa(m(this,ot),e)),m(this,bt)!==null&&(m(this,bt).from=fa(m(this,bt).from,e),m(this,bt).to=fa(m(this,bt).to,e)),G(this,ue,cn).call(this)}};Gt=new WeakMap,rl=new WeakMap,al=new WeakMap,Qe=new WeakMap,Qt=new WeakMap,xr=new WeakMap,ol=new WeakMap,ll=new WeakMap,ot=new WeakMap,bt=new WeakMap,wn=new WeakMap,Ta=new WeakMap,cl=new WeakMap,_r=new WeakMap,Os=new WeakMap,Aa=new WeakMap,ul=new WeakMap,hl=new WeakMap,Bn=new WeakMap,dl=new WeakMap,es=new WeakMap,oi=new WeakMap,fl=new WeakMap,Pi=new WeakMap,Bs=new WeakMap,pl=new WeakMap,zn=new WeakMap,Ca=new WeakMap,Ra=new WeakMap,ts=new WeakMap,ns=new WeakMap,Pa=new WeakMap,zs=new WeakMap,vr=new WeakMap,Ia=new WeakMap,is=new WeakMap,ml=new WeakMap,ss=new WeakMap,yr=new WeakMap,gl=new WeakMap,br=new WeakMap,Ii=new WeakMap,Mr=new WeakMap,Sr=new WeakMap,xl=new WeakMap,_l=new WeakMap,La=new WeakMap,vl=new WeakMap,Da=new WeakMap,yl=new WeakMap,Na=new WeakMap,Ua=new WeakMap,wr=new WeakMap,ue=new WeakSet,am=l(function(){let e=m(this,bt);return e===null?0:e.turn*(1-e.drawn)},"#turnLeft"),c_=l(function(e,t,n){let s=performance.now(),r=m(this,oi).get(e);if(m(this,oi).forEach(({until:_},g)=>{_<s&&m(this,oi).delete(g)}),typeof requestAnimationFrame!="function"||va())return;let[a,o]=m(this,Qe).layout.centre(t.x,t.y),[c,u]=m(this,Qe).layout.centre(n.x,n.y),{u:h,v:f}=m(this,Qe).layout.period(),d=l((_,g)=>g===null?_:_-g*Math.round(_/g),"short"),[p,x,y]=(r!==void 0&&r.until>=s?r.from:null)??m(this,Qt).markerAt(`${t.x},${t.y}`,e)??[a,Math.max(0,m(this,Qe).surfaceAt(a,o)),o];m(this,oi).set(e,{from:[c+d(p-c,h),x,u+d(y-u,f)],to:`${n.x},${n.y}`,until:s+2e3})},"#setOff"),dh=l(function(e,t,n){let[s,r]=m(this,Qe).layout.centre(t.x,t.y),[a,o]=m(this,Qe).layout.centre(n.x,n.y),{u:c,v:u}=m(this,Qe).layout.period(),h=l((p,x)=>x===null?p:p-x*Math.round(p/x),"short"),f=h(a-s,c),d=h(o-r,u);f===0&&d===0||(m(this,es).delete(e),m(this,es).set(e,Math.round(Math.atan2(f,d)*1e3)/1e3),m(this,es).size>CE&&m(this,es).delete(m(this,es).keys().next().value),[t,n].forEach(({x:p,y:x})=>G(this,ue,gr).call(this,p,x)),G(this,ue,cn).call(this))},"#face"),u_=l(function(e,t,n){let s=m(this,Gt).clientWidth,r=m(this,Gt).clientHeight;if(s<=0||r<=0)return!1;let a=m(this,bt)?.to??m(this,ot),[o,c]=m(this,Qe).layout.centre(e,t),{u,v:h}=G(this,ue,Fs).call(this),[f,d]=a.focus,p=l((v,w,U)=>U===null?v:v+U*Math.round((w-v)/U),"nearest"),x=[p(o,f,u),Math.max(0,m(this,Qe).heightAt(o,c)),p(c,d,h)],y=s/r,_=m(this,wn)??0,g=vp(a,_,x,y),S=vp(a,_,[x[0]+Math.cos(a.yaw),x[1],x[2]+Math.sin(a.yaw)],y);if(g===null||S===null)return!1;let R=(g[0]+1)/2*s,E=(1-g[1])/2*r,C=Math.abs(S[0]-g[0])*(s/2),T=(n+.5)*C;return R>=T&&R<=s-T&&E>=T&&E<=r-T&&!m(this,al).some(({left:v,top:w,right:U,bottom:I})=>R>=v-C/2&&R<=U+C/2&&E>=w-C/2&&E<=I+C/2)},"#visible"),tl=l(function(e,t){let n=m(this,Gt).clientWidth,s=m(this,Gt).clientHeight;if(n<=0||s<=0)return null;let r=jx(m(this,ot),m(this,wn)??0,[e/n*2-1,1-t/s*2],n/s,(f,d)=>m(this,Qe).heightAt(f,d));if(r===null)return null;let[a,o]=m(this,Qe).layout.tileAt(...r),c=this.world.width(),u=this.world.height();return!(G(this,ue,Fs).call(this).v!==null)&&(o<0||o>=u)?null:this.world.get((a%c+c)%c,(o%u+u)%u)},"#tileAt"),h_=l(function(e,t){let n=G(this,ue,tl).call(this,e,t);n!==null&&this.portal.emit("tile-clicked",n.x,n.y);let s=m(this,Pi);if(s!==null){n!==null&&s.accept(n)&&(this.endPicking(),s.onPick(n));return}n!==null&&m(this,Bn).click(this.portal,n)},"#clicked"),d_=l(function(e,t,n,s,r){let a=m(this,is),o=G(this,ue,tl).call(this,e,t);return a===null||o===null?!1:(this.endPicking(),m(this,Bn).menu(this.portal,n,s,a,o,m(this,fl),r),!0)},"#menu"),f_=l(function(e){let t=e===null||m(this,La)||m(this,Bn).menuOpen()?null:G(this,ue,tl).call(this,e.x,e.y),n=m(this,Bs);if(t===null||e===null){m(this,zn).call(this);return}let s=`${t.x},${t.y}`;if(n!==null&&n.key===s){Object.assign(n,{canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY});return}m(this,zn).call(this);let r={key:s,x:t.x,y:t.y,canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY,timer:null,open:!1};r.timer=window.setTimeout(()=>{r.timer=null,G(this,ue,om).call(this,r)},LE),H(this,Bs,r),document.addEventListener("keydown",m(this,zn),!0)},"#hovered"),om=l(function(e){let t=typeof document.elementFromPoint!="function"||document.elementFromPoint(e.clientX,e.clientY)===m(this,Gt),n=t?G(this,ue,tl).call(this,e.canvasX,e.canvasY):null;if(n===null||`${n.x},${n.y}`!==e.key){m(this,zn).call(this);return}let s=m(this,Bn).tooltip(m(this,Gt),n,m(this,pl),{left:e.clientX-10,top:e.clientY-10,bottom:e.clientY+10});!s&&e.open&&m(this,Bn).endTooltip(m(this,Gt)),e.open=s},"#showHover"),fh=l(function(){return[...m(this,ot).focus]},"#focus"),p_=l(function(){let[e,t]=m(this,Qe).layout.tileAt(...m(this,ot).focus),n=this.world.width(),s=this.world.height();return{x:(e%n+n)%n,y:G(this,ue,Fs).call(this).v===null?Math.min(s-1,Math.max(0,t)):(t%s+s)%s}},"#centreSquare"),m_=l(function(e,t){let[n,s]=m(this,Qe).layout.centre(e,t),[r,a]=(m(this,bt)?.to??m(this,ot)).focus;if(n===r&&s===a)return;let o={...m(this,bt)?.to??m(this,ot),focus:[n,s]},{u:c,v:u}=G(this,ue,Fs).call(this),h=l((x,y)=>y===null?x:x-y*Math.round(x/y),"short"),[f,d]=m(this,ot).focus,p=Math.hypot(h(n-f,c),h(s-d,u));if(!m(this,hl)||p>m(this,ot).distance*1.5){H(this,hl,!0),this.setOrbit(o);return}G(this,ue,il).call(this,o)},"#centreOn"),nl=l(function(e){return $g(lr(e),G(this,ue,Fs).call(this),m(this,Qe).extentV())},"#settle"),Fs=l(function(){let e=m(this,Qe).layout.period();return this.portal?.lockVerticalEdges()??m(this,ul)?{u:e.u,v:null}:e},"#period"),il=l(function(e,t=G(this,ue,am).call(this)+l_(e.yaw-(m(this,bt)?.to??m(this,ot)).yaw)){m(this,zn).call(this),typeof requestAnimationFrame!="function"||va()?(H(this,bt,null),H(this,ot,G(this,ue,nl).call(this,e))):H(this,bt,{from:m(this,ot),to:e,started:null,turn:t,drawn:0}),G(this,ue,cn).call(this)},"#moveTo"),g_=l(function(e){let t=m(this,bt);if(t===null)return!1;t.started??=e;let n=Math.min(1,(e-t.started)/RE);return t.drawn=n*n*(3-2*n),H(this,ot,G(this,ue,nl).call(this,Zg(t.from,t.to,n,G(this,ue,Fs).call(this),t.turn))),n>=1&&H(this,bt,null),n<1},"#moveCamera"),x_=l(function(e){let[t,n]=m(this,ot).focus,s=Math.max(0,m(this,Qe).heightAt(t,n));return!e||m(this,wn)===null||va()?(H(this,wn,s),!1):(H(this,wn,m(this,wn)+(s-m(this,wn))*IE),Math.abs(s-m(this,wn))<.002?(H(this,wn,s),!1):!0)},"#followHeight"),lm=l(function(){let e=[...m(this,zs).values()].map(({x:o,y:c})=>[o,c]),t=this.world.tiles(),n=t!==m(this,vr)||t.length!==m(this,Ia);H(this,vr,t),H(this,Ia,t.length),m(this,zs).clear();let s=G(this,ue,v_).call(this,m(this,Qe).changed(e,...G(this,ue,fh).call(this),n)),r=new Set(e.map(([o,c])=>`${o},${c}`));e.forEach(([o,c])=>G(this,ue,gr).call(this,o,c)),s.forEach(([o,c])=>{let u=`${o},${c}`;!n&&!r.has(u)&&m(this,ts).has(u)&&G(this,ue,gr).call(this,o,c)}),G(this,ue,__).call(this,e,s);let a=m(this,Bs);a!==null&&a.open&&e.some(([o,c])=>o===a.x&&c===a.y)&&G(this,ue,om).call(this,a),(e.length>0||n)&&H(this,Ra,!0),n&&(H(this,Ii,!0),m(this,ts).forEach((o,c)=>{let[u,h]=c.split(",").map(Number);G(this,ue,gr).call(this,u,h)}))},"#takeTiles"),gr=l(function(e,t){let n=`${e},${t}`,s=Qx(this.world.get(e,t),m(this,is)?.id??null,m(this,ss),m(this,dl),d=>m(this,es).get(d.id)??0,m(this,yr)),[r,a]=m(this,Qe).layout.centre(e,t),o=[r,Math.max(0,m(this,Qe).surfaceAt(r,a)),a],c=s===null?null:JSON.stringify([s,o]),u=c!==(m(this,ts).get(n)??null);if(u&&m(this,Qt).setMarker(n,o,s),m(this,oi).size===0){u&&G(this,ue,cm).call(this,n,c);return}let h=performance.now(),f=new Set((this.world.get(e,t)?.units??[]).map(d=>d.id));m(this,oi).forEach((d,p)=>{if(d.until<h){m(this,oi).delete(p);return}d.to!==n||!f.has(p)||(m(this,oi).delete(p),u&&s?.unit?.id===p&&m(this,Qt).slideMarker(n,d.from))}),u&&G(this,ue,cm).call(this,n,c)},"#mark"),__=l(function(e,t){e.length===0&&t.length===0||(e.forEach(([n,s])=>m(this,Sr).delete(`${n},${s}`)),t.forEach(([n,s])=>m(this,Sr).delete(`${n},${s}`)),H(this,Ii,!0))},"#yieldsChanged"),v_=l(function(e){let t=this.world.topology(),n=new Map;return e.forEach(([s,r])=>{n.set(`${s},${r}`,[s,r]),t.directions().forEach(a=>{let o=t.neighbour(s,r,a);o!==null&&n.set(`${o[0]},${o[1]}`,o)})}),[...n.values()]},"#besides"),y_=l(function(){if(!m(this,br)){m(this,Mr)&&(m(this,Qt).setYields(null),H(this,Mr,!1));return}if(!m(this,Ii)&&m(this,Mr))return;let e=[];this.world.tiles().forEach(t=>{let n=`${t.x},${t.y}`,s=i_(t,s_(t)),r=m(this,Sr).get(n);if(r===void 0||r.of!==s){let[a,o]=m(this,Qe).layout.centre(t.x,t.y);r={of:s,laid:s.length===0?null:a_({at:[a,Math.max(0,m(this,Qe).surfaceAt(a,o)),o],yields:s},m(this,xl))},m(this,Sr).set(n,r)}r.laid!==null&&e.push(r.laid)}),m(this,Qt).setYields(o_(e)),H(this,Ii,!1),H(this,Mr,!0)},"#showYields"),cm=l(function(e,t){t===null?m(this,ts).delete(e):m(this,ts).set(e,t)},"#remember"),sl=l(function(){let e=new Set(m(this,ts).keys());this.world.tiles().forEach(({x:t,y:n})=>e.add(`${t},${n}`)),e.forEach(t=>{let[n,s]=t.split(",").map(Number);G(this,ue,gr).call(this,n,s)})},"#markAll"),um=l(function(e){let t=performance.now(),n=G(this,ue,g_).call(this,t),[s,r]=G(this,ue,fh).call(this);G(this,ue,lm).call(this),`${s},${r}`!==m(this,ll)&&(H(this,ll,`${s},${r}`),m(this,Qe).refocus(s,r)),m(this,Qe).build(m(this,Qt),e);let a=G(this,ue,x_).call(this,e!==null);G(this,ue,y_).call(this),m(this,Qt).view(m(this,ot),m(this,wn)??0,G(this,ue,Fs).call(this)),m(this,Qt).render(),G(this,ue,b_).call(this),G(this,ue,hm).call(this),H(this,ol,performance.now()-t),G(this,ue,w_).call(this),(m(this,Qe).pending()>0||m(this,Qe).overlaysPending()>0||m(this,Qt).sliding()||n||a)&&G(this,ue,cn).call(this)},"#frameDrawn"),b_=l(function(){let e=m(this,Ca);if(e===null)return;m(this,Ra)&&(H(this,Ra,!1),e.redraw());let t=m(this,is)?.tile??null;e.show(G(this,ue,M_).call(this),t===null?null:{x:t.x,y:t.y})},"#showMinimap"),M_=l(function(){let e=m(this,Gt).clientWidth,t=m(this,Gt).clientHeight;if(e<=0||t<=0)return null;let n=e/t,s=m(this,wn)??0,r=Xu(m(this,ot).distance).far,[a,o]=m(this,ot).focus,c=l((h,f)=>{for(let d=f;d>=-1;d-=.05){let p=da(m(this,ot),s,[h,d],n);if(p!==null){let x=Math.hypot(p[0]-a,p[1]-o),y=x>r?r/x:1;return[a+(p[0]-a)*y,o+(p[1]-o)*y]}}return null},"corner"),u=[c(-1,-1),c(1,-1),c(1,1),c(-1,1)];return u.every(h=>h!==null)?u:null},"#patch"),hm=l(function(e=!1){let t=(e?m(this,bt)?.to??m(this,ot):m(this,ot)).distance,n=l(()=>{m(this,Os)!==null&&clearTimeout(m(this,Os)),H(this,Os,null),H(this,Aa,null)},"stop"),s=l(()=>{n(),H(this,_r,t),m(this,cl).set(t)},"keep");if(e){n(),t!==m(this,_r)&&s();return}if(m(this,bt)!==null||t===m(this,_r)){n();return}m(this,Os)!==null&&t===m(this,Aa)||(n(),H(this,Aa,t),H(this,Os,setTimeout(s,PE)))},"#keepDistance"),cn=l(function(){if(!m(this,wr)){if(typeof requestAnimationFrame!="function"){G(this,ue,um).call(this,null);return}m(this,ns)===null&&H(this,ns,requestAnimationFrame(()=>{H(this,ns,null),G(this,ue,um).call(this,AE)}))}},"#draw"),S_=l(function(e){let t=document.createElement("pre");return t.className="map3d-stats",t.setAttribute("aria-hidden","true"),Object.assign(t.style,{background:"var(--ui-overlay-bg, rgba(0, 0, 0, 0.6))",color:"var(--ui-overlay-fg, #fff)",font:"12px/1.4 monospace",left:"0.5rem",margin:"0",padding:"0.25rem 0.5rem",pointerEvents:"none",position:"absolute",bottom:"0.5rem"}),e.append(t),t},"#statsOverlay"),w_=l(function(){if(m(this,xr)===null)return;let{drawCalls:e,triangles:t,geometries:n}=m(this,Qt).stats();m(this,xr).textContent=[`frame ${m(this,ol).toFixed(1)} ms`,`draw calls ${e}`,`triangles ${t.toLocaleString()}`,`geometries ${n}`,`chunks waiting ${m(this,Qe).pending()}`].join(`
`)},"#showStats"),dm=l(function(){let e=m(this,Gt).parentElement,t=e?.offsetWidth??0,n=e?.offsetHeight??0,s=window.devicePixelRatio||1,r=`${t}\xD7${n}@${s}`;t===0||n===0||r===m(this,yl)||(H(this,yl,r),m(this,Qt).resize(t,n,s),this.measureCovered(),m(this,Qt).render())},"#resize"),l(fm,"MapView3D");var rm=fm,E_=rm;var DE={createMapView3D:l(i=>new E_(i),"createMapView3D")};globalThis[Am]=DE;})();
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
