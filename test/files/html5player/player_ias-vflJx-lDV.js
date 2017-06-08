var _yt_player={};(function(g){var window=this;var ba,da,fa,ka,ia,la,na,oa,ta,Ca,Da,Ga,Ia,Ja,Ra,Sa,Ta,Za,bb,cb,db,fb,lb,qb,ub,xb,Db,Ab,Fb,Gb,Bb,Hb,Kb,Nb,Pb,Sb,Vb,Zb,Ub,$b,bc,dc,gc,jc,lc,kc,mc,nc,oc,pc,rc,sc,Cc,Ec,Bc,xc,Hc,Jc,Gc,Kc,Lc,Mc,Nc,Oc,Pc,Qc,Sc,Tc,Uc,Wc,Vc,Xc,$c,ad,cd,ed,fd,gd,id,jd,md,ld,qd,sd,vd,xd,yd,Ad,Qd,Td,ce,le,me,Xd,Ed,se,xe,Be,Ce,De,Fe,Ge,Ie,Ee,Le,Oe,Te,Pe,Ye,Xe,Re,Ke,af,bf,cf,df,ef,ff,gf,hf,lf,kf,mf,nf,pf,uf,vf,wf,zf,Bf,Cf,Df,Gf,If,Lf,Hf,Jf,xf,Ef,Rf,Of,Mf,Nf,Sf,Qf,Pf,Wf,Xf,Yf,Zf,$f,dg,cg,fg,ig,jg,qg,rg,sg,tg,vg,xg,yg,Cg,Dg,Fg,
Mg,Ng,Og,Pg,Qg,Sg,Tg,Ug,Zg,dh,eh,ih,nh,qh,rh,sh,th,uh,wh,yh,Fh,Gh,Hh,Jh,Lh,Mh,Nh,Oh,Sh,Th,Uh,Xh,Yh,Zh,ai,ei,hi,ii,ji,ki,mi,li,ni,ti,pi,vi,yi,xi,wi,zi,Ai,Bi,Ci,Di,Ei,Fi,Gi,Hi,Ii,Ji,Li,Ki,Mi,Oi,Ni,Pi,Ri,Si,Qi,Ti,Vi,Xi,Ui,Zi,Yi,aj,bj,cj,dj,ej,fj,gj,hj,kj,lj,rj,tj,oj,pj,nj,qj,uj,zj,yj,xj,ij,mj,Aj,Bj,Ej,Fj,Gj,Lj,Cj,Mj,Dj,Nj,Oj,Pj,Rj,Sj,Tj,Wj,Xj,Vj,Yj,Zj,ak,bk,Uj,ck,dk,hk,gk,ik,ek,jk,kk,mk,lk,nk,ok,pk,qk,rk,sk,tk,uk,vk,wk,xk,Ak,zk,Ck,Ek,Gk,Hk,Ik,Sk,Ok,Lk,Zk,Uk,Qk,Rk,Bk,bl,hl,il,Vk,Tk,ll,ml,kl,nl,ol,fl,
Xk,pl,ql,rl,sl,ul,vl,tl,wl,xl,Bl,Cl,Dl,Fl,Gl,Kl,Hl,Nl,yl,Pl,Ol,Ql,Rl,Tl,Yl,Ul,bm,cm,fm,dm,gm,hm,im,lm,km,jm,mm,nm,tm,pm,um,xm,ym,zm,Am,Bm,Dm,Cm,Fm,Hm,Jm,Km,Mm,Lm,Nm,Om,Qm,Tm,an,bn,dn,Um,Xm,en,fn,hn,$m,gn,Wm,mn,pn,qn,sn,tn,un,rn,wn,xn,yn,Cn,En,zn,An,Bn,Gn,Hn,Fn,Jn,Mn,Ln,Nn,Rn,Sn,Tn,Wn,Yn,Zn,bo,$n,ao,co,fo,go,ho,io,jo,lo,mo,no,oo,ro,so,uo,Ao,Eo,Fo,Jo,Oo,Po,Ro,So,Uo,Qo,Vo,Wo,Xo,$o,Yo,dp,Zo,ep,bp,fp,hp,ip,gp,jp,kp,lp,mp,np,op,pp,rp,sp,qp,Bp,up,Ep,tp,Fp,Hp,Ap,zp,yp,Jp,Ip,Kp,Lp,Np,Pp,Qp,Rp,Sp,Tp,Up,Yp,
$p,Vp,bq,Zp,eq,dq,Wp,cq,fq,hq,Op,aq,gq,jq,iq,Xp,Mp,Gp,wp,lq,oq,qq,rq,sq,tq,wq,xq,yq,zq,Aq,Bq,Dq,Eq,Fq,Gq,Hq,Jq,Lq,Mq,Nq,Iq,Kq,Qq,Pq,Sq,Tq,cr,dr,er,gr,hr,ir,jr,lr,mr,nr,or,pr,rr,sr,tr,ur,wr,yr,Ar,Ir,Kr,Lr,Nr,Qr,Rr,Tr,Xr,Vr,Wr,Sr,$r,bs,cs,ds,fs,gs,Zr,hs,ns,ms,os,rs,ts,us,zs,xs,ys,Bs,As,Cs,Hs,Js,Ks,Ms,Ns,Os,Qs,Ss,Ys,Zs,$s,et,jt,ht,lt,kt,pt,qt,rt,Gt,Ht,Ft,Qt,Pt,Tt,Ut,Vt,$t,bu,au,eu,nu,pu,ru,qu,tu,uu,vu,wu,xu,Cu,zu,Eu,Bu,Du,Ku,Mu,Nu,Ou,Qu,Vu,Wu,Xu,Yu,Zu,bv,ev,gv,kv,hv,jv,lv,qv,rv,pv,tv,vv,wv,yv,zv,uv,
Av,xv,Fv,Gv,Ev,Hv,Bv,Dv,Iv,Jv,Kv,Mv,Nv,Lv,Ov,Pv,Qv,Rv,Tv,Uv,yu,Vv,Wv,Xv,dw,hw,kw,iw,lw,mw,nw,ow,rw,pw,uw,vw,ww,yw,xw,zw,Aw,Bw,Cw,tw,qw,Dw,Gw,Hw,Ew,Lw,Kw,Mw,Nw,Ow,Pw,Qw,Rw,Sw,Tw,Uw,Vw,Ww,Xw,Yw,$w,bx,cx,dx,ex,fx,gx,hx,ix,kx,S,jx,lx,nx,ox,px,sx,ux,wx,xx,yx,zx,Ax,Bx,Cx,Dx,Ex,Fx,Gx,Hx,Ix,Kx,Nx,Jx,Lx,Rx,Sx,Px,Mx,Tx,Ux,Ox,Qx,Vx,Wx,Xx,Yx,Zx,by,cy,dy,ey,fy,gy,hy,iy,jy,ky,ly,my,ny,qy,oy,sy,ty,uy,vy,wy,yy,py,ry,zy,Ay,By,Cy,Dy,Ey,Fy,Gy,Hy,Iy,Jy,Ly,Py,Qy,Ry,Sy,Ty,Uy,Vy,Wy,Xy,Zy,Yy,$y,az,gz,lz,dz,hz,jz,iz,bz,nz,
pz,oz,cz,ez,fz,mz,kz,qz,rz,sz,tz,uz,vz,wz,xz,yz,Az,Cz,Dz,Ez,Fz,Hz,Jz,Kz,Lz,Iz,Gz,Nz,Oz,Pz,Qz,Rz,Sz,Uz,Vz,Wz,Xz,Zz,$z,aA,bA,cA,eA,dA,fA,gA,hA,iA,jA,kA,lA,mA,nA,oA,sA,tA,pA,qA,rA,vA,wA,xA,yA,zA,AA,BA,CA,FA,EA,DA,IA,KA,JA,PA,NA,QA,RA,SA,TA,UA,VA,WA,MA,LA,YA,$A,aB,bB,ZA,eB,gB,fB,jB,lB,kB,mB,nB,oB,qB,pB,rB,sB,tB,uB,wB,xB,yB,zB,AB,BB,CB,vB,DB,EB,FB,GB,HB,IB,MB,NB,LB,UB,WB,iC,hC,gC,fC,TB,Ny,pC,qC,vC,uC,wC,xC,yC,zC,BC,CC,DC,FC,HC,ZC,$C,aD,bD,cD,dD,eD,gD,SC,XC,VC,lD,mD,YC,oD,qD,rD,sD,tD,uD,vD,xD,wD,yD,zD,
AD,DD,FD,ED,HD,GD,CD,ID,BD,JD,KD,LD,MD,ND,QD,SD,VD,cE,dE,eE,gE,fE,hE,iE,jE,kE,oE,FE,IE,wE,JE,sE,NE,EE,vE,DE,yE,xE,AE,RE,CE,GE,tE,HE,TE,lE,pE,nE,SE,UE,fF,gF,hF,iF,kF,lF,oF,qF,rF,tF,uF,vF,wF,mF,xF,aF,bF,cF,$E,BF,CF,DF,YE,dF,FF,IF,KF,LF,MF,NF,OF,PF,SF,TF,VF,WF,XF,YF,ZF,aG,bG,dG,fG,gG,hG,iG,jG,lG,GF,nG,pG,qG,rG,sG,tG,uG,wG,xG,oG,yG,AG,zG,BG,CG,DG,EG,FG,IG,JG,KG,HG,GG,LG,MG,NG,OG,WG,XG,YG,ZG,QG,RG,SG,TG,UG,$G,aH,cH,dH,fH,gH,hH,iH,jH,kH,lH,mH,nH,pH,qH,rH,sH,tH,uH,vH,wH,oH,xH,yH,zH,BH,CH,DH,EH,FH,GH,AH,
IH,HH,KH,JH,LH,MH,NH,OH,PH,QH,RH,SH,UH,WH,XH,YH,VH,ZH,$H,aI,cI,dI,bI,fI,gI,hI,iI,eI,jI,lI,kI,mI,nI,oI,pI,qI,sI,rI,vI,yI,zI,AI,BI,uI,CI,DI,tI,EI,FI,GI,HI,xI,wI,II,JI,KI,LI,MI,NI,OI,PI,UI,VI,WI,TI,YI,QI,ZI,RI,SI,$I,XI,aJ,bJ,cJ,dJ,fJ,eJ,gJ,hJ,jJ,iJ,kJ,lJ,mJ,nJ,oJ,pJ,rJ,tJ,wJ,xJ,yJ,BJ,CJ,FJ,EJ,GJ,HJ,IJ,KJ,LJ,JJ,NJ,zJ,AJ,OJ,PJ,qJ,MJ,QJ,sJ,vJ,RJ,SJ,TJ,UJ,VJ,WJ,XJ,YJ,ZJ,aK,$J,bK,cK,eK,dK,gK,hK,iK,jK,kK,mK,nK,pK,oK,qK,rK,sK,tK,uK,vK,wK,xK,yK,zK,BK,AK,CK,EK,MK,JK,GK,OK,QK,TK,SK,DK,IK,$K,YK,ZK,eL,UK,hL,fL,
oL,qL,rL,sL,aL,tL,bL,iL,HK,pL,vL,jL,wL,XK,xL,dL,VK,AL,BL,CL,KK,gL,DL,zL,LK,EL,WK,nL,mL,FL,FK,yL,GL,lL,kL,RK,HL,KL,QL,UL,$L,fM,mM,qM,rM,sM,tM,uM,wM,xM,yM,zM,AM,BM,CM,DM,EM,FM,GM,IM,JM,HM,NM,OM,MM,QM,KM,RM,SM,LM,UM,WM,XM,YM,ZM,VM,$M,aN,bN,cN,eN,dN,fN,gN,hN,iN,jN,kN,lN,mN,nN,oN,qN,tN,uN,vN,wN,xN,yN,zN,AN,GN,BN,DN,JN,KN,IN,HN,MN,NN,ON,PN,CN,QN,LN,SN,UN,VN,YN,$N,ZN,bO,cO,dO,eO,aO,fO,jO,kO,lO,oO,mO,nO,pO,qO,rO,sO,tO,uO,vO,xO,zO,AO,yO,CO,BO,GO,FO,HO,KO,IO,MO,EO,DO,NO,OO,QO,RO,PO,SO,UO,VO,XO,WO,YO,ZO,aP,
bP,$O,cP,gP,fP,hP,iP,jP,kP,mP,nP,pP,qP,rP,sP,oP,uP,wP,yP,xP,AP,zP,BP,CP,DP,FP,EP,GP,HP,IP,JP,KP,LP,MP,NP,QP,OP,PP,SP,WP,YP,cQ,dQ,gQ,hQ,iQ,jQ,kQ,nQ,oQ,mQ,lQ,pQ,rQ,qQ,sQ,tQ,vQ,xQ,uQ,zQ,BQ,AQ,CQ,yQ,DQ,EQ,FQ,GQ,HQ,IQ,JQ,KQ,LQ,MQ,NQ,OQ,PQ,QQ,SQ,RQ,UQ,TQ,VQ,WQ,XQ,YQ,bR,$Q,ZQ,aR,eR,dR,fR,gR,kR,mR,nR,lR,pR,qR,rR,sR,oR,uR,yR,tR,BR,CR,DR,wR,ER,vR,GR,AR,xR,FR,HR,zR,IR,MR,NR,OR,PR,QR,RR,SR,UR,TR,VR,WR,XR,YR,ZR,$R,aS,bS,cS,dS,eS,fS,hS,gS,iS,jS,kS,lS,nS,mS,qS,pS,sS,rS,tS,vS,RP,xS,wS,uS,yS,hR,AS,ES,CS,DS,FS,GS,
zS,HS,IS,NS,KS,JS,RS,TS,US,YS,XS,PS,WS,ZS,VS,aT,$S,bT,dT,LS,MS,hT,gT,QS,mT,nT,OS,pT,ML,qT,rT,fT,eT,uT,vT,lT,wT,yT,AT,kT,xT,BT,DT,CT,ET,GT,HT,IT,tT,sT,JT,aM,KT,mx,LT,jT,NT,OT,cM,PT,zT,QT,RT,ST,TT,oT,UT,VT,WT,ZT,bU,cU,dU,hU,eU,iU,nU,rU,oU,qU,uU,xU,yU,CU,EU,DU,GU,JU,LU,KU,HU,OU,QU,aa,ha,ea,ga,ap,za,Aa;ba=function(a){return function(){return aa[a].apply(this,arguments)}};
g.ca=function(a,b){return aa[a]=b};
da=function(){da=function(){};
ea.Symbol||(ea.Symbol=fa)};
fa=function(a){return"jscomp_symbol_"+(a||"")+ga++};
ka=function(){da();var a=ea.Symbol.iterator;a||(a=ea.Symbol.iterator=ea.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ha(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ia(this)}});
ka=function(){}};
ia=function(a){var b=0;return la(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})};
la=function(a){ka();a={next:a};a[ea.Symbol.iterator]=function(){return this};
return a};
g.ma=function(a){ka();var b=a[window.Symbol.iterator];return b?b.call(a):ia(a)};
g.p=function(a,b){function c(){}
c.prototype=b.prototype;a.ea=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]};
na=function(a,b){if(b){for(var c=ea,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ha(c,d,{configurable:!0,writable:!0,value:f})}};
oa=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.t=function(a){return void 0!==a};
g.u=function(a){return"string"==typeof a};
g.pa=function(a){return"number"==typeof a};
g.x=function(a,b,c){a=a.split(".");c=c||g.w;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&g.t(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}};
g.y=function(a,b){for(var c=a.split("."),d=b||g.w,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d};
g.qa=function(){};
g.sa=function(a){a.Zb=void 0;a.getInstance=function(){return a.Zb?a.Zb:a.Zb=new a}};
ta=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};
g.ua=function(a){return"array"==ta(a)};
g.va=function(a){var b=ta(a);return"array"==b||"object"==b&&"number"==typeof a.length};
g.wa=function(a){return"function"==ta(a)};
g.ya=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};
g.Ba=function(a){return a[za]||(a[za]=++Aa)};
Ca=function(a,b,c){return a.call.apply(a.bind,arguments)};
Da=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};
g.A=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g.A=Ca:g.A=Da;return g.A.apply(null,arguments)};
g.B=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};
g.Ea=function(a,b){for(var c in b)a[c]=b[c]};
g.Fa=function(a,b,c){g.x(a,b,c)};
g.C=function(a,b){function c(){}
c.prototype=b.prototype;a.ea=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.CK=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};
Ga=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ga);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};
g.Ha=function(a,b){return 0==a.lastIndexOf(b,0)};
Ia=function(a){return/^[\s\xa0]*$/.test(a)};
Ja=function(a){return(0,window.decodeURIComponent)(a.replace(/\+/g," "))};
Ra=function(a){if(!Ka.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(La,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Ma,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Na,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Oa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Pa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Qa,"&#0;"));return a};
Sa=function(a,b){a.length>b&&(a=a.substring(0,b-3)+"...");return a};
Ta=function(a,b){return-1!=a.toLowerCase().indexOf(b.toLowerCase())};
g.Va=function(a,b){var c=g.t(void 0)?a.toFixed(void 0):String(a),d=c.indexOf(".");-1==d&&(d=c.length);return Ua("0",Math.max(0,b-d))+c};
g.Wa=function(a){return null==a?"":String(a)};
g.Xa=function(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^(0,g.F)()).toString(36)};
g.$a=function(a,b){for(var c=0,d=Ya(String(a)).split("."),e=Ya(String(b)).split("."),f=Math.max(d.length,e.length),k=0;0==c&&k<f;k++){var l=d[k]||"",m=e[k]||"";do{l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];m=/(\d*)(\D*)(.*)/.exec(m)||["","","",""];if(0==l[0].length&&0==m[0].length)break;c=Za(0==l[1].length?0:(0,window.parseInt)(l[1],10),0==m[1].length?0:(0,window.parseInt)(m[1],10))||Za(0==l[2].length,0==m[2].length)||Za(l[2],m[2]);l=l[3];m=m[3]}while(0==c)}return c};
Za=function(a,b){return a<b?-1:a>b?1:0};
g.ab=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};
bb=function(a){var b=Number(a);return 0==b&&Ia(a)?window.NaN:b};
cb=function(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})};
db=function(a){var b=g.u(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})};
g.eb=function(a){return a[a.length-1]};
fb=function(a,b){var c=0;(0,g.G)(a,function(a,e,f){b.call(void 0,a,e,f)&&++c},void 0);
return c};
g.jb=function(a,b,c){b=g.ib(a,b,c);return 0>b?null:g.u(a)?a.charAt(b):a[b]};
g.ib=function(a,b,c){for(var d=a.length,e=g.u(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};
lb=function(a,b){var c=g.kb(a,b,void 0);return 0>c?null:g.u(a)?a.charAt(c):a[c]};
g.kb=function(a,b,c){for(var d=g.u(a)?a.split(""):a,e=a.length-1;0<=e;e--)if(e in d&&b.call(c,d[e],e,a))return e;return-1};
g.ob=function(a,b){return 0<=(0,g.nb)(a,b)};
g.pb=function(a){return 0==a.length};
qb=function(a){if(!g.ua(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0};
g.rb=function(a,b){g.ob(a,b)||a.push(b)};
g.tb=function(a,b){var c=(0,g.nb)(a,b),d;(d=0<=c)&&g.sb(a,c);return d};
g.sb=function(a,b){Array.prototype.splice.call(a,b,1)};
ub=function(a,b){var c=g.ib(a,b,void 0);0<=c&&g.sb(a,c)};
g.vb=function(a){return Array.prototype.concat.apply([],arguments)};
g.wb=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};
xb=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(g.va(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var k=0;k<f;k++)a[e+k]=d[k]}else a.push(d)}};
g.zb=function(a,b,c,d){Array.prototype.splice.apply(a,g.yb(arguments,1))};
g.yb=function(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)};
g.Cb=function(a,b,c){return Ab(a,c||Bb,!1,b)};
Db=function(a,b){return Ab(a,b,!0,void 0,void 0)};
Ab=function(a,b,c,d,e){for(var f=0,k=a.length,l;f<k;){var m=f+k>>1,n;c?n=b.call(e,a[m],m,a):n=b(d,a[m]);0<n?f=m+1:(k=m,l=!n)}return l?f:~f};
g.Eb=function(a,b){a.sort(b||Bb)};
Fb=function(a,b,c){var d=c||Bb;g.Eb(a,function(a,c){return d(b(a),b(c))})};
Gb=function(a,b){Fb(a,function(a){return a[b]},void 0)};
g.Ib=function(a,b){if(!g.va(a)||!g.va(b)||a.length!=b.length)return!1;for(var c=a.length,d=Hb,e=0;e<c;e++)if(!d(a[e],b[e]))return!1;return!0};
Bb=function(a,b){return a>b?1:a<b?-1:0};
Hb=function(a,b){return a===b};
g.Jb=function(a,b,c){var d={};(0,g.G)(a,function(e,f){d[b.call(c,e,f,a)]=e});
return d};
Kb=function(a){for(var b=[],c=0;c<a;c++)b[c]=0;return b};
g.Lb=function(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(g.ua(d))for(var e=0;e<d.length;e+=8192)for(var f=g.Lb.apply(null,g.yb(d,e,e+8192)),k=0;k<f.length;k++)b.push(f[k]);else b.push(d)}return b};
g.Mb=function(a){for(var b=[],c=0,d=0;d<a.length;d++){for(var e=a.charCodeAt(d);255<e;)b[c++]=e&255,e>>=8;b[c++]=e}return b};
Nb=function(a){return(0,g.H)(a,function(a){a=a.toString(16);return 1<a.length?a:"0"+a}).join("")};
Pb=function(a){return-1!=g.Ob.indexOf(a)};
g.Qb=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};
g.Rb=function(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d};
Sb=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1};
g.Tb=function(a){var b=0,c;for(c in a)b++;return b};
Vb=function(a,b){return Ub(a,b)};
g.Wb=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};
g.Xb=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b};
g.Yb=function(a,b){for(var c=g.va(b),d=c?b:arguments,c=c?0:1;c<d.length&&(a=a[d[c]],g.t(a));c++);return a};
Zb=function(a,b){return null!==a&&b in a};
Ub=function(a,b){for(var c in a)if(a[c]==b)return!0;return!1};
$b=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};
bc=function(a){var b=ac;return(a=$b(b,a,void 0))&&b[a]};
g.cc=function(a){for(var b in a)return!1;return!0};
dc=function(a,b,c){return null!==a&&b in a?a[b]:c};
g.ec=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
gc=function(a){var b=ta(a);if("object"==b||"array"==b){if(g.wa(a.clone))return a.clone();var b="array"==b?[]:{},c;for(c in a)b[c]=gc(a[c]);return b}return a};
g.ic=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<hc.length;f++)c=hc[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
jc=function(a){var b=arguments.length;if(1==b&&g.ua(arguments[0]))return jc.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};
lc=function(){return Pb("Safari")&&!(kc()||Pb("Coast")||Pb("Opera")||Pb("Edge")||Pb("Silk")||Pb("Android"))};
kc=function(){return(Pb("Chrome")||Pb("CriOS"))&&!Pb("Edge")};
mc=function(){return Pb("iPhone")&&!Pb("iPod")&&!Pb("iPad")};
nc=function(){return mc()||Pb("iPad")||Pb("iPod")};
oc=function(a){oc[" "](a);return a};
pc=function(a,b){try{return oc(a[b]),!0}catch(c){}return!1};
rc=function(a,b){var c=qc;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};
sc=function(){var a=g.w.document;return a?a.documentMode:void 0};
g.uc=function(a){return rc(a,function(){return 0<=g.$a(tc,a)})};
g.wc=function(a){return Number(vc)>=a};
g.Ac=function(a,b){g.va(a);xc();for(var c=b?yc:zc,d=[],e=0;e<a.length;e+=3){var f=a[e],k=e+1<a.length,l=k?a[e+1]:0,m=e+2<a.length,n=m?a[e+2]:0,q=f>>2,f=(f&3)<<4|l>>4,l=(l&15)<<2|n>>6,n=n&63;m||(n=64,k||(l=64));d.push(c[q],c[f],c[l],c[n])}return d.join("")};
Cc=function(a){var b=[];Bc(a,function(a){b.push(a)});
return b};
Ec=function(a){!g.Dc||g.uc("10");var b=new window.Uint8Array(Math.ceil(3*a.length/4)),c=0;Bc(a,function(a){b[c++]=a});
return b.subarray(0,c)};
Bc=function(a,b){function c(b){for(;d<a.length;){var c=a.charAt(d++),e=Fc[c];if(null!=e)return e;if(!Ia(c))throw Error("Unknown base64 encoding at char: "+c);}return b}
xc();for(var d=0;;){var e=c(-1),f=c(0),k=c(64),l=c(64);if(64===l&&-1===e)break;b(e<<2|f>>4);64!=k&&(b(f<<4&240|k>>2),64!=l&&b(k<<6&192|l))}};
xc=function(){if(!zc){zc={};Fc={};yc={};for(var a=0;65>a;a++)zc[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),Fc[zc[a]]=a,yc[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),62<=a&&(Fc["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};
Hc=function(a,b,c){this.o=null;this.D=this.G=this.g=this.B=this.A=0;this.C=!1;a&&Gc(this,a,b,c)};
Jc=function(a,b,c){if(Ic.length){var d=Ic.pop();a&&Gc(d,a,b,c);return d}return new Hc(a,b,c)};
Gc=function(a,b,c,d){b=b.constructor===window.Uint8Array?b:b.constructor===window.ArrayBuffer?new window.Uint8Array(b):b.constructor===Array?new window.Uint8Array(b):b.constructor===String?Ec(b):new window.Uint8Array(0);a.o=b;a.A=g.t(c)?c:0;a.B=g.t(d)?a.A+d:a.o.length;a.g=a.A};
Kc=function(a){var b=a.o;var c=b[a.g+0];var d=c&127;if(128>c)return a.g+=1,d;c=b[a.g+1];d|=(c&127)<<7;if(128>c)return a.g+=2,d;c=b[a.g+2];d|=(c&127)<<14;if(128>c)return a.g+=3,d;c=b[a.g+3];d|=(c&127)<<21;if(128>c)return a.g+=4,d;c=b[a.g+4];d|=(c&15)<<28;if(128>c)return a.g+=5,d>>>0;a.g+=10;return d};
Lc=function(a,b,c){this.g=Jc(a,b,c);this.o=this.A=-1;this.B=!1};
Mc=function(a){var b=a.g;if(b.g==b.B||a.getError())return!1;var b=Kc(a.g),c=b&7;if(0!=c&&5!=c&&1!=c&&2!=c&&3!=c&&4!=c)return a.B=!0,!1;a.A=b>>>3;a.o=c;return!0};
Nc=function(a){switch(a.o){case 0:if(0!=a.o)Nc(a);else{for(a=a.g;a.o[a.g]&128;)a.g++;a.g++}break;case 1:1!=a.o?Nc(a):(a=a.g,a.g+=8);break;case 2:if(2!=a.o)Nc(a);else{var b=Kc(a.g);a=a.g;a.g+=b}break;case 5:5!=a.o?Nc(a):(a=a.g,a.g+=4);break;case 3:b=[a.A];do{if(!Mc(a)){a.B=!0;break}if(3==a.o)b.push(a.A);else if(4==a.o&&a.A!=b.pop()){a.B=!0;break}}while(0<b.length)}};
Oc=function(a){var b=Kc(a.g);a=a.g;for(var c,d,e=a.o,f=a.g,b=f+b,k=[],l="";f<b;){var m=e[f++];if(128>m)k.push(m);else if(192>m)continue;else if(224>m)d=e[f++],k.push((m&31)<<6|d&63);else if(240>m)d=e[f++],c=e[f++],k.push((m&15)<<12|(d&63)<<6|c&63);else if(248>m){d=e[f++];c=e[f++];var n=e[f++];c=(m&7)<<18|(d&63)<<12|(c&63)<<6|n&63;c-=65536;k.push((c>>10&1023)+55296,(c&1023)+56320)}8192<=k.length&&(l+=String.fromCharCode.apply(null,k),k.length=0)}l+=String.fromCharCode.apply(null,k);a.g=f;return l};
Pc=function(a){var b=Kc(a.g);a=a.g;if(0>b||a.g+b>a.o.length)a.C=!0,b=new window.Uint8Array(0);else{var c=a.o.subarray(a.g,a.g+b);a.g+=b;b=c}return b};
Qc=function(){};
Sc=function(a,b){if(b<a.B){var c=b+a.C;var d=a.o[c];return d===Rc?a.o[c]=[]:d}d=a.A[b];return d===Rc?a.A[b]=[]:d};
Tc=function(a){if(null==a||a instanceof window.Uint8Array)return a;if(g.u(a))return Ec(a);ta(a);return null};
Uc=function(a,b,c){b<a.B?a.o[b+a.C]=c:a.A[b]=c};
Wc=function(a){if(a.g)for(var b in a.g){var c=a.g[b];if(g.ua(c))for(var d=0;d<c.length;d++)c[d]&&Vc(c[d]);else c&&Vc(c)}};
Vc=function(a){Wc(a);return a.o};
Xc=function(a){var b;if(g.ua(a)){for(var c=Array(a.length),d=0;d<a.length;d++)null!=(b=a[d])&&(c[d]="object"==typeof b?Xc(b):b);return c}if(Yc&&a instanceof window.Uint8Array)return new window.Uint8Array(a);c={};for(d in a)null!=(b=a[d])&&(c[d]="object"==typeof b?Xc(b):b);return c};
$c=function(){this.g="";this.o=Zc};
ad=function(a){return a instanceof $c&&a.constructor===$c&&a.o===Zc?a.g:"type_error:Const"};
cd=function(a){var b=new $c;b.g=a;return b};
ed=function(){this.g="";this.o=dd};
fd=function(a){a instanceof ed&&a.constructor===ed&&a.o===dd||ta(a)};
gd=function(a){var b=new ed;b.g=a;return b};
id=function(){this.g="";this.o=hd};
jd=function(a){if(a instanceof id&&a.constructor===id&&a.o===hd)return a.g;ta(a);return"type_error:SafeUrl"};
md=function(a){if(a instanceof id)return a;a=a.ug?a.rg():String(a);kd.test(a)||(a="about:invalid#zClosurez");return ld(a)};
ld=function(a){var b=new id;b.g=a;return b};
g.od=function(){this.g="";this.A=nd;this.o=null};
g.pd=function(a){if(a instanceof g.od&&a.constructor===g.od&&a.A===nd)return a.g;ta(a);return"type_error:SafeHtml"};
qd=function(a,b){var c=new g.od;c.g=a;c.o=b;return c};
g.rd=function(a,b){var c=b instanceof id?b:md(b);a.href=jd(c)};
sd=function(a,b){return qd(b,null)};
g.td=function(a,b,c){return Math.min(Math.max(a,b),c)};
g.ud=function(a,b){var c=a%b;return 0>c*b?c+b:c};
vd=function(a,b,c){return a+c*(b-a)};
xd=function(a){return wd(arguments,function(a,c){return a+c},0)};
yd=function(a){return xd.apply(null,arguments)/arguments.length};
g.zd=function(a,b){this.x=g.t(a)?a:0;this.y=g.t(b)?b:0};
Ad=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.Bd=function(a,b){return new g.zd(a.x-b.x,a.y-b.y)};
g.Cd=function(a,b){this.width=a;this.height=b};
g.Dd=function(a,b){return a==b?!0:a&&b?a.width==b.width&&a.height==b.height:!1};
g.Hd=function(a){return a?new Ed(g.Fd(a)):Gd||(Gd=new Ed)};
g.Id=function(a){return g.u(a)?window.document.getElementById(a):a};
g.Kd=function(a,b){var c=b||window.document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):g.Jd(window.document,"*",a,b)};
g.Ld=function(a,b){var c=b||window.document;if(c.getElementsByClassName)c=c.getElementsByClassName(a)[0];else var c=window.document,d=b||c,c=d.querySelectorAll&&d.querySelector&&a?d.querySelector(""+(a?"."+a:"")):g.Jd(c,"*",a,b)[0]||null;return c||null};
g.Jd=function(a,b,c,d){a=d||a;var e=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(e||c))return a.querySelectorAll(e+(c?"."+c:""));if(c&&a.getElementsByClassName){d=a.getElementsByClassName(c);if(e){a={};for(var f=b=0,k;k=d[f];f++)e==k.nodeName&&(a[b++]=k);a.length=b;return a}return d}d=a.getElementsByTagName(e||"*");if(c){a={};for(f=b=0;k=d[f];f++)e=k.className,"function"==typeof e.split&&g.ob(e.split(/\s+/),c)&&(a[b++]=k);a.length=b;return a}return d};
g.Nd=function(a,b){g.Qb(b,function(b,d){b&&b.ug&&(b=b.rg());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Md.hasOwnProperty(d)?a.setAttribute(Md[d],b):g.Ha(d,"aria-")||g.Ha(d,"data-")?a.setAttribute(d,b):a[d]=b})};
g.Pd=function(a){a=a.document;a=g.Od(a)?a.documentElement:a.body;return new g.Cd(a.clientWidth,a.clientHeight)};
g.Rd=function(a){var b=Qd(a);a=a.parentWindow||a.defaultView;return g.Dc&&g.uc("10")&&a.pageYOffset!=b.scrollTop?new g.zd(b.scrollLeft,b.scrollTop):new g.zd(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)};
Qd=function(a){return a.scrollingElement?a.scrollingElement:!g.Sd&&g.Od(a)?a.documentElement:a.body||a.documentElement};
Td=function(a){return a?a.parentWindow||a.defaultView:window};
g.Wd=function(a,b,c){var d=arguments,e=window.document,f=String(d[0]),k=d[1];if(!Ud&&k&&(k.name||k.type)){f=["<",f];k.name&&f.push(' name="',Ra(k.name),'"');if(k.type){f.push(' type="',Ra(k.type),'"');var l={};g.ic(l,k);delete l.type;k=l}f.push(">");f=f.join("")}f=e.createElement(f);k&&(g.u(k)?f.className=k:g.ua(k)?f.className=k.join(" "):g.Nd(f,k));2<d.length&&g.Vd(e,f,d,2);return f};
g.Vd=function(a,b,c,d){function e(c){c&&b.appendChild(g.u(c)?a.createTextNode(c):c)}
for(;d<c.length;d++){var f=c[d];!g.va(f)||g.ya(f)&&0<f.nodeType?e(f):(0,g.G)(Xd(f)?g.wb(f):f,e)}};
g.Yd=function(a){return window.document.createElement(String(a))};
g.Zd=function(a){return window.document.createTextNode(String(a))};
g.Od=function(a){return"CSS1Compat"==a.compatMode};
g.$d=function(a,b){a.appendChild(b)};
g.ae=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
g.be=function(a,b){b.parentNode&&b.parentNode.insertBefore(a,b.nextSibling)};
ce=function(a,b,c){a.insertBefore(b,a.childNodes[c]||null)};
g.de=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};
g.ge=function(a){return ee&&void 0!=a.children?a.children:(0,g.fe)(a.childNodes,function(a){return 1==a.nodeType})};
g.ie=function(a){var b;if(he&&!(g.Dc&&g.uc("9")&&!g.uc("10")&&g.w.SVGElement&&a instanceof g.w.SVGElement)&&(b=a.parentElement))return b;b=a.parentNode;return g.ya(b)&&1==b.nodeType?b:null};
g.je=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};
g.Fd=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
g.ke=function(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else g.ae(a),a.appendChild(g.Fd(a).createTextNode(String(b)))};
g.ne=function(a){var b;if((b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!le(a)||me(a)):le(a)&&me(a))&&g.Dc){var c;!g.wa(a.getBoundingClientRect)||g.Dc&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a};
le=function(a){return g.Dc&&!g.uc("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")};
me=function(a){a=a.tabIndex;return g.pa(a)&&0<=a&&32768>a};
Xd=function(a){if(a&&"number"==typeof a.length){if(g.ya(a))return"function"==typeof a.item||"string"==typeof a.item;if(g.wa(a))return"function"==typeof a.item}return!1};
g.pe=function(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return g.oe(a,function(a){return(!e||a.nodeName==e)&&(!c||g.u(a.className)&&g.ob(a.className.split(/\s+/),c))},!0,d)};
g.qe=function(a,b){return g.pe(a,null,b,void 0)};
g.oe=function(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null};
Ed=function(a){this.g=a||g.w.document||window.document};
g.re=function(a){a=a.g;return a.parentWindow||a.defaultView};
se=function(a){for(var b=[],c=a=Td(a.ownerDocument);c!=a.top;c=c.parent)if(c.frameElement)b.push(c.frameElement);else break;return b};
g.I=function(){this.kb=this.kb;this.fb=this.fb};
g.J=function(a,b){g.te(a,g.B(g.ue,b))};
g.te=function(a,b){a.kb?g.t(void 0)?b.call(void 0):b():(a.fb||(a.fb=[]),a.fb.push(g.t(void 0)?(0,g.A)(b,void 0):b))};
g.ue=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.ve=function(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];g.va(d)?g.ve.apply(null,d):g.ue(d)}};
g.we=function(a,b){this.type=a;this.currentTarget=this.target=b;this.g=!1;this.At=!0};
xe=function(a,b){g.we.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.o=this.state=null;a&&this.init(a,b)};
g.ze=function(a){return!(!a||!a[g.ye])};
Be=function(a,b,c,d,e){this.listener=a;this.g=null;this.src=b;this.type=c;this.capture=!!d;this.ij=e;this.key=++Ae;this.Gg=this.Ci=!1};
Ce=function(a){a.Gg=!0;a.listener=null;a.g=null;a.src=null;a.ij=null};
De=function(a){this.src=a;this.listeners={};this.g=0};
Fe=function(a,b,c,d,e,f){var k=b.toString();b=a.listeners[k];b||(b=a.listeners[k]=[],a.g++);var l=Ee(b,c,e,f);-1<l?(a=b[l],d||(a.Ci=!1)):(a=new Be(c,a.src,k,!!e,f),a.Ci=d,b.push(a));return a};
Ge=function(a,b){var c=b.type;if(!(c in a.listeners))return!1;var d=g.tb(a.listeners[c],b);d&&(Ce(b),0==a.listeners[c].length&&(delete a.listeners[c],a.g--));return d};
g.He=function(a){var b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Ce(d[e]);delete a.listeners[c];a.g--}};
Ie=function(a,b,c,d,e){a=a.listeners[b.toString()];b=-1;a&&(b=Ee(a,c,d,e));return-1<b?a[b]:null};
Ee=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Gg&&f.listener==b&&f.capture==!!c&&f.ij==d)return e}return-1};
g.Je=function(a,b,c,d,e){if(g.ua(b)){for(var f=0;f<b.length;f++)g.Je(a,b[f],c,d,e);return null}c=Ke(c);return g.ze(a)?a.ga(b,c,d,e):Le(a,b,c,!1,d,e)};
Le=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var k=!!e,l=g.Me(a);l||(a[Ne]=l=new De(a));c=Fe(l,b,c,d,e,f);if(c.g)return c;d=Oe();c.g=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,k);else if(a.attachEvent)a.attachEvent(Pe(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");Qe++;return c};
Oe=function(){var a=Re,b=Se?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b};
Te=function(a,b,c,d,e){if(g.ua(b)){for(var f=0;f<b.length;f++)Te(a,b[f],c,d,e);return null}c=Ke(c);return g.ze(a)?Fe(a.Cd,String(b),c,!0,d,e):Le(a,b,c,!0,d,e)};
g.Ue=function(a,b,c,d,e){if(g.ua(b))for(var f=0;f<b.length;f++)g.Ue(a,b[f],c,d,e);else c=Ke(c),g.ze(a)?a.Qa(b,c,d,e):a&&(a=g.Me(a))&&(b=Ie(a,b,c,!!d,e))&&g.Ve(b)};
g.Ve=function(a){if(g.pa(a)||!a||a.Gg)return!1;var b=a.src;if(g.ze(b))return Ge(b.Cd,a);var c=a.type,d=a.g;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent&&b.detachEvent(Pe(c),d);Qe--;(c=g.Me(b))?(Ge(c,a),0==c.g&&(c.src=null,b[Ne]=null)):Ce(a);return!0};
Pe=function(a){return a in We?We[a]:We[a]="on"+a};
Ye=function(a,b,c,d){var e=!0;if(a=g.Me(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.Gg&&(f=Xe(f,d),e=e&&!1!==f)}return e};
Xe=function(a,b){var c=a.listener,d=a.ij||a.src;a.Ci&&g.Ve(a);return c.call(d,b)};
Re=function(a,b){if(a.Gg)return!0;if(!Se){var c=b||g.y("window.event"),d=new xe(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(m){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);for(var k=a.type,l=c.length-1;!d.g&&0<=l;l--)d.currentTarget=c[l],f=Ye(c[l],k,!0,d),e=e&&f;for(l=0;!d.g&&l<c.length;l++)d.currentTarget=c[l],f=Ye(c[l],k,!1,d),e=e&&f}return e}return Xe(a,new xe(b,this))};
g.Me=function(a){a=a[Ne];return a instanceof De?a:null};
Ke=function(a){if(g.wa(a))return a;a[Ze]||(a[Ze]=function(b){return a.handleEvent(b)});
return a[Ze]};
g.$e=function(){g.I.call(this);this.Cd=new De(this);this.fa=this;this.L=null};
af=function(a,b,c,d){b=a.Cd.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var k=b[f];if(k&&!k.Gg&&k.capture==c){var l=k.listener,m=k.ij||k.src;k.Ci&&Ge(a.Cd,k);e=!1!==l.call(m,d)&&e}}return e&&0!=d.At};
bf=function(a,b,c){this.C=c;this.A=a;this.B=b;this.o=0;this.g=null};
cf=function(a,b){a.B(b);a.o<a.C&&(a.o++,b.next=a.g,a.g=b)};
df=function(a){return function(){return a}};
ef=function(a){var b=b||0;return function(){return a.apply(this,Array.prototype.slice.call(arguments,0,b))}};
ff=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};
gf=function(a){var b=a;return function(){if(b){var a=b;b=null;a()}}};
hf=function(a){g.w.setTimeout(function(){throw a;},0)};
lf=function(a,b){var c=a;b&&(c=(0,g.A)(a,b));!g.wa(g.w.setImmediate)||g.w.Window&&g.w.Window.prototype&&!Pb("Edge")&&g.w.Window.prototype.setImmediate==g.w.setImmediate?(jf||(jf=kf()),jf(c)):g.w.setImmediate(c)};
kf=function(){var a=g.w.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!Pb("Presto")&&(a=function(){var a=window.document.createElement("IFRAME");a.style.display="none";a.src="";window.document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=(0,g.A)(function(a){if(("*"==d||
a.origin==d)&&a.data==c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!Pb("Trident")&&!Pb("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(g.t(c.next)){c=c.next;var a=c.Oo;c.Oo=null;a()}};
return function(a){d.next={Oo:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof window.document&&"onreadystatechange"in window.document.createElement("SCRIPT")?function(a){var b=window.document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
window.document.documentElement.appendChild(b)}:function(a){g.w.setTimeout(a,0)}};
mf=function(){this.o=this.g=null};
nf=function(){this.next=this.scope=this.g=null};
g.tf=function(a,b){of||pf();qf||(of(),qf=!0);var c=rf,d=sf.get();d.set(a,b);c.o?c.o.next=d:c.g=d;c.o=d};
pf=function(){if(-1!=String(g.w.Promise).indexOf("[native code]")){var a=g.w.Promise.resolve(void 0);of=function(){a.then(uf)}}else of=function(){lf(uf)}};
uf=function(){for(var a;a=rf.remove();){try{a.g.call(a.scope)}catch(b){hf(b)}cf(sf,a)}qf=!1};
vf=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0};
wf=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
g.yf=function(a,b){this.g=0;this.G=void 0;this.B=this.o=this.A=null;this.C=this.D=!1;if(a!=g.qa)try{var c=this;a.call(b,function(a){xf(c,2,a)},function(a){xf(c,3,a)})}catch(d){xf(this,3,d)}};
zf=function(){this.next=this.context=this.o=this.B=this.g=null;this.A=!1};
Bf=function(a,b,c){var d=Af.get();d.B=a;d.o=b;d.context=c;return d};
Cf=function(a){if(a instanceof g.yf)return a;var b=new g.yf(g.qa);xf(b,2,a);return b};
Df=function(a){return new g.yf(function(b,c){c(a)})};
g.Ff=function(a,b,c){Ef(a,b,c,null)||g.tf(g.B(b,a))};
Gf=function(a){return new g.yf(function(b,c){a.length||b(void 0);for(var d=0,e;d<a.length;d++)e=a[d],g.Ff(e,b,c)})};
If=function(a,b){var c=Bf(b,b,void 0);c.A=!0;Hf(a,c);return a};
g.Kf=function(a,b){return Jf(a,null,b,void 0)};
Lf=function(a,b){if(0==a.g)if(a.A){var c=a.A;if(c.o){for(var d=0,e=null,f=null,k=c.o;k&&(k.A||(d++,k.g==a&&(e=k),!(e&&1<d)));k=k.next)e||(f=k);e&&(0==c.g&&1==d?Lf(c,b):(f?(d=f,d.next==c.B&&(c.B=d),d.next=d.next.next):Mf(c),Nf(c,e,3,b)))}a.A=null}else xf(a,3,b)};
Hf=function(a,b){a.o||2!=a.g&&3!=a.g||Of(a);a.B?a.B.next=b:a.o=b;a.B=b};
Jf=function(a,b,c,d){var e=Bf(null,null,null);e.g=new g.yf(function(a,k){e.B=b?function(c){try{var e=b.call(d,c);a(e)}catch(n){k(n)}}:a;
e.o=c?function(b){try{var e=c.call(d,b);!g.t(e)&&b instanceof Pf?k(b):a(e)}catch(n){k(n)}}:k});
e.g.A=a;Hf(a,e);return e.g};
xf=function(a,b,c){0==a.g&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.g=1,Ef(c,a.K,a.L,a)||(a.G=c,a.g=b,a.A=null,Of(a),3!=b||c instanceof Pf||Qf(a,c)))};
Ef=function(a,b,c,d){if(a instanceof g.yf)return Hf(a,Bf(b||g.qa,c||null,d)),!0;if(wf(a))return a.then(b,c,d),!0;if(g.ya(a))try{var e=a.then;if(g.wa(e))return Rf(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1};
Rf=function(a,b,c,d,e){function f(a){l||(l=!0,d.call(e,a))}
function k(a){l||(l=!0,c.call(e,a))}
var l=!1;try{b.call(a,k,f)}catch(m){f(m)}};
Of=function(a){a.D||(a.D=!0,g.tf(a.H,a))};
Mf=function(a){var b=null;a.o&&(b=a.o,a.o=b.next,b.next=null);a.o||(a.B=null);return b};
Nf=function(a,b,c,d){if(3==c&&b.o&&!b.A)for(;a&&a.C;a=a.A)a.C=!1;if(b.g)b.g.A=null,Sf(b,c,d);else try{b.A?b.B.call(b.context):Sf(b,c,d)}catch(e){Tf.call(null,e)}cf(Af,b)};
Sf=function(a,b,c){2==b?a.B.call(a.context,c):a.o&&a.o.call(a.context,c)};
Qf=function(a,b){a.C=!0;g.tf(function(){a.C&&Tf.call(null,b)})};
Pf=function(a){Ga.call(this,a)};
g.Uf=function(a,b){g.$e.call(this);this.o=a||1;this.g=b||g.w;this.A=(0,g.A)(this.Zw,this);this.B=(0,g.F)()};
g.Vf=function(a,b,c){if(g.wa(a))c&&(a=(0,g.A)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.A)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.w.setTimeout(a,b||0)};
Wf=function(){var a=null;return g.Kf(new g.yf(function(b,c){a=g.Vf(function(){b("NO_BID")},1E3);
-1==a&&c(Error("Failed to schedule timer."))}),function(b){g.w.clearTimeout(a);
throw b;})};
Xf=function(){return Math.round((0,g.F)()/1E3)};
Yf=function(a){var b=window.performance&&window.performance.timing&&window.performance.timing.domLoading&&0<window.performance.timing.domLoading?Math.round(window.performance.timing.domLoading/1E3):null;return null!=b?b:null!=a?a:Xf()};
Zf=function(){this.o=-1};
$f=function(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))};
g.bg=function(a){try{return g.w.JSON.parse(a)}catch(d){var b=d}a=String(a);if($f(a))try{var c=eval("("+a+")");b&&ag("Invalid JSON: "+a,b);return c}catch(d){}throw Error("Invalid JSON string: "+a);};
g.eg=function(a){var b=[];cg(new dg,a,b);return b.join("")};
dg=function(){};
cg=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(g.ua(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),cg(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),fg(d,c),c.push(":"),cg(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":fg(b,c);break;case "number":c.push((0,window.isFinite)(b)&&
!(0,window.isNaN)(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
fg=function(a,b){b.push('"',a.replace(gg,function(a){var b=hg[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),hg[a]=b);return b}),'"')};
ig=function(a){this.g=a||{cookie:""}};
jg=function(a){a=(a.g.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Ya(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
g.kg=function(a,b,c,d,e,f,k){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);f&&(l+="?"+f);k&&(l+="#"+k);return l};
g.mg=function(a){return a.match(lg)};
g.ng=function(a){return a?(0,window.decodeURI)(a):a};
g.og=function(a){return g.ng(g.mg(a)[3]||null)};
g.pg=function(a){return Number(g.mg(a)[4]||null)||null};
qg=function(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null;if(0<=e){var k=c[d].substring(0,e);f=c[d].substring(e+1)}else k=c[d];b(k,f?Ja(f):"")}};
rg=function(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
sg=function(a,b,c){if(g.ua(b))for(var d=0;d<b.length;d++)sg(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+(0,window.encodeURIComponent)(String(b))))};
tg=function(a,b){for(var c=[],d=b||0;d<a.length;d+=2)sg(a[d],a[d+1],c);return c.join("&")};
g.ug=function(a){var b=[],c;for(c in a)sg(c,a[c],b);return b.join("&")};
vg=function(a,b){var c=2==arguments.length?tg(arguments[1],0):tg(arguments,1);return rg(a,c)};
g.wg=function(a,b){var c=g.ug(b);return rg(a,c)};
xg=function(a,b,c){c=null!=c?"="+(0,window.encodeURIComponent)(String(c)):"";return rg(a,b+c)};
yg=function(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1};
g.Bg=function(a,b){for(var c=a.search(zg),d=0,e,f=[];0<=(e=yg(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.substr(d));return f.join("").replace(Ag,"$1")};
Cg=function(){this.g={};return this};
Dg=function(a,b){a.g.eb=dc(a.g,"eb",0)|b};
g.Eg=function(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d};
Fg=function(a,b,c){b instanceof g.zd?(a.left+=b.x,a.right+=b.x,a.top+=b.y,a.bottom+=b.y):(a.left+=b,a.right+=b,g.pa(c)&&(a.top+=c,a.bottom+=c));return a};
g.Gg=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
g.Hg=function(a){return new g.Eg(a.top,a.left+a.width,a.top+a.height,a.left)};
g.Ig=function(a,b){return a==b?!0:a&&b?a.left==b.left&&a.width==b.width&&a.top==b.top&&a.height==b.height:!1};
g.Jg=function(a,b){var c=Math.max(a.left,b.left),d=Math.min(a.left+a.width,b.left+b.width);if(c<=d){var e=Math.max(a.top,b.top),f=Math.min(a.top+a.height,b.top+b.height);if(e<=f)return a.left=c,a.top=e,a.width=d-c,a.height=f-e,!0}return!1};
g.Kg=function(a){return new g.Cd(a.width,a.height)};
g.Lg=function(a){return new g.zd(a.left,a.top)};
Mg=function(){this.g={};this.o=0};
Ng=function(a,b){this.C=a;this.A=!0;this.g=b};
Og=function(a,b){Ng.call(this,String(a),b);this.B=a;this.g=!!b};
Pg=function(a,b){Ng.call(this,a,b)};
Qg=function(a){if(a.match(/^-?[0-9]+\.-?[0-9]+\.-?[0-9]+\.-?[0-9]+$/)){a=a.split(".");var b=Number(a[0]),c=Number(a[1]);return new Pg("",new g.Gg(c,b,Number(a[3])-c,Number(a[2])-b))}return new Pg("",new g.Gg(0,0,0,0))};
Sg=function(){Rg||(Rg=new Mg);return Rg};
Tg=function(a,b){a.g[b.C]=b};
g.Vg=function(a,b,c){if(g.u(b))(b=Ug(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=Ug(c,d);f&&(c.style[f]=e)}};
Ug=function(a,b){var c=Wg[b];if(!c){var d=cb(b),c=d;void 0===a.style[d]&&(d=(g.Sd?"Webkit":g.Xg?"Moz":g.Dc?"ms":g.Yg?"O":null)+db(d),void 0!==a.style[d]&&(c=d));Wg[b]=c}return c};
Zg=function(a,b){var c=a.style[cb(b)];return"undefined"!==typeof c?c:a.style[Ug(a,b)]||""};
g.$g=function(a,b){var c=g.Fd(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""};
g.ah=function(a,b){return g.$g(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]};
g.ch=function(a,b,c){if(b instanceof g.zd){var d=b.x;b=b.y}else d=b,b=c;a.style.left=g.bh(d,!1);a.style.top=g.bh(b,!1)};
dh=function(a){return new g.zd(a.offsetLeft,a.offsetTop)};
eh=function(a){try{var b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}g.Dc&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b};
g.fh=function(a){if(g.Dc&&!g.wc(8))return a.offsetParent;var b=g.Fd(a),c=g.ah(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=g.ah(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null};
g.hh=function(a){for(var b=new g.Eg(0,window.Infinity,window.Infinity,0),c=g.Hd(a),d=c.g.body,e=c.g.documentElement,f=Qd(c.g);a=g.fh(a);)if(!(g.Dc&&0==a.clientWidth||g.Sd&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=g.ah(a,"overflow")){var k=g.gh(a),l=new g.zd(a.clientLeft,a.clientTop);k.x+=l.x;k.y+=l.y;b.top=Math.max(b.top,k.y);b.right=Math.min(b.right,k.x+a.clientWidth);b.bottom=Math.min(b.bottom,k.y+a.clientHeight);b.left=Math.max(b.left,k.x)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,
d);b.top=Math.max(b.top,f);c=g.Pd(g.re(c)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null};
g.gh=function(a){var b=g.Fd(a),c=new g.zd(0,0);var d=b?g.Fd(b):window.document;d=!g.Dc||g.wc(9)||g.Od(g.Hd(d).g)?d.documentElement:d.body;if(a==d)return c;a=eh(a);b=g.Rd(g.Hd(b).g);c.x=a.left+b.x;c.y=a.top+b.y;return c};
g.jh=function(a,b){var c=new g.zd(0,0),d=Td(g.Fd(a));if(!pc(d,"parent"))return c;var e=a;do{var f=d==b?g.gh(e):ih(e);c.x+=f.x;c.y+=f.y}while(d&&d!=b&&d!=d.parent&&(e=d.frameElement)&&(d=d.parent));return c};
g.lh=function(a,b){var c=g.kh(a),d=g.kh(b);return new g.zd(c.x-d.x,c.y-d.y)};
ih=function(a){a=eh(a);return new g.zd(a.left,a.top)};
g.kh=function(a){if(1==a.nodeType)return ih(a);a=a.changedTouches?a.changedTouches[0]:a;return new g.zd(a.clientX,a.clientY)};
g.mh=function(a,b,c){if(b instanceof g.Cd)c=b.height,b=b.width;else if(void 0==c)throw Error("missing height argument");a.style.width=g.bh(b,!0);a.style.height=g.bh(c,!0)};
g.bh=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.oh=function(a){var b=nh;if("none"!=g.ah(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a};
nh=function(a){var b=a.offsetWidth,c=a.offsetHeight,d=g.Sd&&!b&&!c;return g.t(b)&&!d||!a.getBoundingClientRect?new g.Cd(b,c):(a=eh(a),new g.Cd(a.right-a.left,a.bottom-a.top))};
g.ph=function(a,b){a.style.display=b?"":"none"};
qh=function(a){var b=new g.Gg(-Number.MAX_VALUE/2,-Number.MAX_VALUE/2,Number.MAX_VALUE,Number.MAX_VALUE),c=new g.Gg(0,0,0,0);if(!a||0==a.length)return c;for(var d=0;d<a.length;d++)if(!g.Jg(b,a[d]))return c;return b};
rh=function(a,b){var c=a.getBoundingClientRect(),d=g.jh(a,b);return new g.Gg(Math.round(d.x),Math.round(d.y),Math.round(c.right-c.left),Math.round(c.bottom-c.top))};
sh=function(a,b,c){if(b&&c){a:{var d=Math.max(b.left,c.left);var e=Math.min(b.left+b.width,c.left+c.width);if(d<=e){var f=Math.max(b.top,c.top),k=Math.min(b.top+b.height,c.top+c.height);if(f<=k){d=new g.Gg(d,f,e-d,k-f);break a}}d=null}e=d?d.height*d.width:0;f=d?b.height*b.width:0;d=d&&f?Math.round(e/f*100):0;Tg(a,new Ng("vp",d));d&&0<d?(e=g.Hg(b),f=g.Hg(c),e=e.top>=f.top&&e.top<f.bottom):e=!1;Tg(a,new Og(512,e));d&&0<d?(e=g.Hg(b),f=g.Hg(c),e=e.bottom<=f.bottom&&e.bottom>f.top):e=!1;Tg(a,new Og(1024,
e));d&&0<d?(e=g.Hg(b),f=g.Hg(c),e=e.left>=f.left&&e.left<f.right):e=!1;Tg(a,new Og(2048,e));d&&0<d?(b=g.Hg(b),c=g.Hg(c),c=b.right<=c.right&&b.right>c.left):c=!1;Tg(a,new Og(4096,c))}};
th=function(a,b){var c=0;g.Yb(Td(),"ima","video","client","tagged")&&(c=1);var d=null;a&&(d=a());if(d){var e=d;d=Sg();d.g={};var f=new Og(32,!0);f.A=!1;Tg(d,f);f=Td().document;f=f.webkitVisibilityState||f.mozVisibilityState||f.visibilityState||f.msVisibilityState||"";Tg(d,new Og(64,"hidden"!=f.toLowerCase().substring(f.length-6)?!0:!1));try{var k=Td().top;try{var l=!!k.location.href||""===k.location.href}catch(r){l=!1}if(l){var m=se(e);var n=m&&0!=m.length?"1":"0"}else n="2"}catch(r){n="2"}Tg(d,new Og(256,
"2"==n));Tg(d,new Og(128,"1"==n));m=l=Td().top;"2"==n&&(m=Td());k=rh(e,m);Tg(d,new Pg("er",k));try{var q=m.document&&!m.document.body?null:g.Pd(m||window)}catch(r){q=null}q?(m=g.Rd(g.Hd(m.document).g),Tg(d,new Og(16384,!!m)),q=m?new g.Gg(m.x,m.y,q.width,q.height):null):q=null;Tg(d,new Pg("vi",q));if(q&&"1"==n){n=se(e);e=[];for(m=0;m<n.length;m++)(f=rh(n[m],l))&&e.push(f);e.push(q);q=qh(e)}sh(d,k,q);d.o&&(n=Xf()-d.o,Tg(d,new Ng("ts",n)));d.o=Xf()}else d=Sg(),d.g={},d.o=Xf(),Tg(d,new Og(32,!1));this.A=
d;this.g=new Cg;this.g.set("ve",4);c&&Dg(this.g,1);g.Yb(Td(),"ima","video","client","crossdomainTag")&&Dg(this.g,4);g.Yb(Td(),"ima","video","client","sdkTag")&&Dg(this.g,8);g.Yb(Td(),"ima","video","client","jsTag")&&Dg(this.g,2);b&&dc(b,"fullscreen",!1)&&Dg(this.g,16);this.o=d=null;if(c&&(c=g.Yb(Td(),"ima","video","client"),c.getEData)){this.o=c.getEData();if(c=g.Yb(Td(),"ima","video","client","getLastSnapshotFromTop"))if(n=c())this.o.extendWithDataFromTopIframe(n.tagstamp,n.playstamp,n.lactstamp),
c=this.A,d=n.er,n=n.vi,d&&n&&(d=Qg(d).getValue(),n=Qg(n).getValue(),e=null,dc(c.g,"er",null)&&(e=dc(c.g,"er",null).getValue(),e.top+=d.top,e.left+=d.left,Tg(c,new Pg("er",e))),dc(c.g,"vi",null)&&(q=dc(c.g,"vi",null).getValue(),q.top+=d.top,q.left+=d.left,l=[],l.push(q),l.push(d),l.push(n),d=qh(l),sh(c,e,d),Tg(c,new Pg("vi",n))));a:{if(this.o){if(this.o.getTagLoadTimestamp){d=this.o.getTagLoadTimestamp();break a}if(this.o.getTimeSinceTagLoadSeconds){d=this.o.getTimeSinceTagLoadSeconds();break a}}d=
null}}this.g.set("td",Xf()-Yf(d))};
uh=function(a,b){try{var c=new th(a,b),d=[],e=Number(c.g.get("eb"));c.g.remove("eb");var f,k=c.g,l=[],m;for(m in k.g)l.push(m+k.g[m]);(f=l.join("_"))&&d.push(f);if(c.o){var n=c.o.serialize();n&&d.push(n)}var q,r=c.A;f=e;k=[];f||(f=0);for(var v in r.g){var D=r.g[v];if(D instanceof Og)D.getValue()&&(f|=D.B);else{var E,z=r.g[v];(E=z.A?z.o():"")&&k.push(v+E)}}k.push("eb"+String(f));(q=k.join("_"))&&d.push(q);c.g.set("eb",e);return d.join("_")}catch(R){return"tle;"+Sa(R.name,12)+";"+Sa(R.message,40)}};
g.vh=function(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);return a?(0,window.parseInt)(a[1],10):0};
wh=function(a){return!!window.document.currentScript&&(-1!=window.document.currentScript.src.indexOf("?"+a)||-1!=window.document.currentScript.src.indexOf("&"+a))};
g.xh=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null};
yh=function(a,b){var c=new window.XMLHttpRequest;c.onreadystatechange=function(){4==c.readyState&&200==c.status&&b(!0)};
c.onerror=function(){b(!1)};
try{c.open("GET",a,!0),c.send()}catch(d){b(!1)}};
g.Eh=function(a){if(a>=zh.length)g.Ah();else{var b=zh[a],c="chrome-extension://"+b+g.Bh;0<=Ch.indexOf(b)?yh(c,function(d){d?(window.chrome.cast=window.chrome.cast||{},window.chrome.cast.extensionId=b,g.Dh(c,g.Ah)):g.Eh(a+1)}):g.Dh(c,function(){g.Eh(a+1)})}};
g.Dh=function(a,b,c){var d=window.document.createElement("script");d.onerror=b;c&&(d.onload=c);d.src=a;(window.document.head||window.document.documentElement).appendChild(d)};
g.Ah=function(){var a=g.xh();a&&a(!1,"No cast extension found")};
Fh=function(a,b,c,d){if(d)c=a+("&"+b+"="+c);else{var e="&"+b+"=",f=a.indexOf(e);0>f?c=a+e+c:(f+=e.length,e=a.indexOf("&",f),c=0<=e?a.substring(0,f)+c+a.substring(e):a.substring(0,f)+c)}return 2E3<c.length?g.t(void 0)?Fh(a,b,void 0,d):a:c};
Gh=function(a){try{return!!a&&null!=a.location.href&&pc(a,"foo")}catch(b){return!1}};
Hh=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};
Jh=function(){var a=Ih;if(!a)return"";var b=/.*[&#?]google_debug(=[^&]*)?(&.*)?$/;try{var c=b.exec((0,window.decodeURIComponent)(a));if(c)return c[1]&&1<c[1].length?c[1].substring(1):"true"}catch(d){}return""};
Lh=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,Kh?d:d?d.capture||!1:!1):a.attachEvent&&a.attachEvent("on"+b,c)};
Mh=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,Kh?void 0:!1):a.detachEvent&&a.detachEvent("on"+b,c)};
Nh=function(a){a=a||g.w;var b=a.context;if(!b)try{b=a.parent.context}catch(c){}try{if(b&&"pageViewId"in b&&"canonicalUrl"in b)return b}catch(c){}return null};
Oh=function(a,b,c){a.google_image_requests||(a.google_image_requests=[]);var d=a.document.createElement("img");if(c){var e=function(a){c(a);Mh(d,"load",e);Mh(d,"error",e)};
Lh(d,"load",e);Lh(d,"error",e)}d.src=b;a.google_image_requests.push(d)};
Sh=function(){if(Ph&&!Gh(Qh)){var a="."+Rh.domain;try{for(;2<a.split(".").length&&!Gh(Qh);)Rh.domain=a=a.substr(a.indexOf(".")+1),Qh=window.parent}catch(b){}Gh(Qh)||(Qh=window)}return Qh};
Th=function(){this.g=!0};
Uh=function(){return{visible:1,hidden:2,prerender:3,preview:4}[Rh.webkitVisibilityState||Rh.mozVisibilityState||Rh.visibilityState||""]||0};
Xh=function(){var a=K&&K.document;Vh.e=-1;Vh.i=6;Vh.n=7;Vh.t=8;if(!Wh){var b=[];Hh(Vh,function(a,c){b[a+1]=c});
var c=b.join("");Wh=(c=a&&a[c])&&(0,g.A)(c,a)}return Wh};
Yh=function(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")};
Zh=function(a){return(a=a.exec(g.Ob))?a[1]:""};
ai=function(a){return 0<=g.$a($h,a)};
ei=function(){return g.Dc&&9>tc||g.Xg||bi&&ci&&ai("6.0.1")?!1:0<=g.$a(di,"11")};
hi=function(a){a=a||!1;var b=fi&&0<=g.$a(gi,9),c=ci&&g.uc(601);return!a&&(b||c)};
ii=function(){this.g=0;this.C=!1;this.o=-1;this.D=0;this.qd=!1};
ji=function(a,b){this.g=a;this.o=b};
ki=function(a,b,c){this.url=a;this.sq=!!c;this.depth=g.pa(void 0)?void 0:null};
mi=function(a){a=a?a:li();for(var b=new ki(g.w.location.href,g.w,!1),c=a.length-1,d=c;0<=d;--d){var e=a[d];if(e.url&&!e.sq){b=e;break}}d=null;e=a.length&&a[c].url;0!=b.depth&&e&&(d=a[c]);return new ji(b,d)};
li=function(){var a=g.w,b=[],c=null;do{var d=a;if(Gh(d)){var e=d.location.href;c=d.document&&d.document.referrer||null}else e=c,c=null;b.push(new ki(e||"",d));try{a=d.parent}catch(f){a=null}}while(a&&d!=a);a=0;for(d=b.length-1;a<=d;++a)b[a].depth=d-a;d=g.w;if(d.location&&d.location.ancestorOrigins&&d.location.ancestorOrigins.length==b.length-1)for(a=1;a<b.length;++a)e=b[a],e.url||(e.url=d.location.ancestorOrigins[a-1]||"",e.sq=!0);return b};
ni=function(a,b){var c=a||K;null!==c&&c.top!=c&&(c=c.top);try{return c.document&&!c.document.body?new g.Cd(-1,-1):b?(new g.Cd(c.innerWidth,c.innerHeight)).round():g.Pd(c||window).round()}catch(d){return new g.Cd(-12245933,-12245933)}};
ti=function(a){var b=0<=oi?pi()-oi:-1,c=qi?pi()-ri:-1,d=0<=si?pi()-si:-1;if(79463068==a)return 500;if(947190538==a){a=[4E3];var e=[250,1E3]}else if(947190541==a)a=[4E3],e=[100,1E3];else{if(947190542==a)return 100;if(79463069==a)return 200;a=[2E3,4E3];e=[250,500,1E3]}var f=b;-1!=c&&c<b&&(f=c);for(var k,b=0;b<a.length;++b)if(f<a[b]){k=e[b];break}void 0===k&&(k=e[a.length]);return-1!=d&&1500<d&&4E3>d?500:k};
pi=function(){return(new Date).getTime()-ui};
vi=function(){var a=g.Wd("DIV");a.style.cssText="position:relative;left:0px;top:0px;width:0;height:0;";return a};
yi=function(a){return wi(a,function(a,c){return!(!pc(c,"style")||!c.style||"none"!==Zg(c,"display"))},function(a){return a},!1)?!0:xi(a)};
xi=function(a){var b=!g.Dc||g.uc(8);return wi(a,function(a,d){var c=pc(d,"style")&&d.style&&Zg(d,"visibility");return{hidden:"hidden"===c,visible:b&&"visible"===c}},function(a){return a.hidden||a.visible},{hidden:!1,
visible:!1}).hidden};
wi=function(a,b,c,d){if(!a)return d;d=zi(a,b,c,d);if(!d.done)try{var e=g.Fd(a),f=e&&Td(e);return wi(f&&f.frameElement,b,c,d.value)}catch(k){}return d.value};
zi=function(a,b,c,d){if(!a)return{value:d,done:!1};d=b(d,a);var e=c(d,a);return!e&&pc(a,"parentElement")?zi(g.ie(a),b,c,d):{done:e,value:d}};
Ai=function(a){return new g.Eg(a.top,a.right,a.bottom,a.left)};
Bi=function(a){return null!=a&&0<=a&&1>=a};
Ci=function(){ii.call(this);this.A=!1;this.volume=void 0;this.paused=!1;this.B=-1};
Di=function(a){return Bi(a.volume)&&.1<=a.volume};
Ei=function(){this.Ea=[0,0,0,0,0];this.ba=[0,0,0,0,0];this.oa=[0,0,0,0,0];this.L=this.X=0;this.wa=this.B=-1;this.Ma=1E3};
Fi=function(a,b,c){for(;0<=b&&4>=b;b++)a[b]+=c};
Gi=function(a){var b=-1;1<=a?b=0:.75<=a?b=1:.5<=a?b=2:.3<=a?b=3:0<a&&(b=4);return b};
Hi=function(a,b,c){c=void 0===c?{}:c;this.error=a;this.context=b.context;this.line=b.line||-1;this.msg=b.message||"";this.file=b.file||"";this.id=b.id||"jserror";this.meta=c};
Ii=function(a,b,c,d,e){this.D=c||4E3;this.A=a||"&";this.G=b||",$";this.B=g.t(d)?d:"trn";this.K=e||null;this.C=!1;this.o={};this.H=0;this.g=[]};
Ji=function(a,b){var c={};c[a]=b;return[c]};
Li=function(a,b,c,d,e){var f=[];Hh(a,function(a,l){var k=Ki(a,b,c,d,e);k&&f.push(l+"="+k)});
return f.join(b)};
Ki=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],k=0;k<a.length;k++)f.push(Ki(a[k],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?(0,window.encodeURIComponent)(Li(a,b,c,d,e+1)):"...";return(0,window.encodeURIComponent)(String(a))};
Mi=function(a,b,c,d){a.g.push(b);a.o[b]=Ji(c,d)};
Oi=function(a,b,c,d){b=b+"//"+c+d;var e=Ni(a)-d.length-0;if(0>e)return"";a.g.sort(function(a,b){return a-b});
d=null;c="";for(var f=0;f<a.g.length;f++)for(var k=a.g[f],l=a.o[k],m=0;m<l.length;m++){if(!e){d=null==d?k:d;break}var n=Li(l[m],a.A,a.G);if(n){n=c+n;if(e>=n.length){e-=n.length;b+=n;c=a.A;break}else a.C&&(c=e,n[c-1]==a.A&&--c,b+=n.substr(0,c),c=a.A,e=0);d=null==d?k:d}}f="";a.B&&null!=d&&(f=c+a.B+"="+(a.K||d));return b+f+""};
Ni=function(a){if(!a.B)return a.D;var b=1,c;for(c in a.o)b=c.length>b?c.length:b;return a.D-a.B.length-b-a.A.length-1};
Pi=function(a,b,c,d){if(Math.random()<(d||a.g))try{if(c instanceof Ii)var e=c;else e=new Ii,Hh(c,function(a,b){var c=e,d=c.H++,f=Ji(b,a);c.g.push(d);c.o[d]=f});
var f=Oi(e,a.B,a.o,a.A+b+"&");f&&Oh(g.w,f)}catch(k){}};
Ri=function(a,b){var c=Qi();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random()};
Si=function(a,b){this.events=[];this.o=b||g.w;var c=null;b&&(b.google_js_reporting_queue=b.google_js_reporting_queue||[],this.events=b.google_js_reporting_queue,c=b.google_measure_js_timing);a:{try{var d=(this.o||g.w).top.location.hash;if(d){var e=d.match(/\bdeid=([\d,]+)/);var f=e&&e[1]||"";break a}}catch(k){}f=""}f=f.indexOf&&0<=f.indexOf("1337");this.g=(this.g=null!=c?c:Math.random()<a)||f;c=this.o.performance;this.A=!!(c&&c.mark&&c.clearMarks&&f)};
Qi=function(){var a=g.w.performance;return a&&a.now?a.now():(0,g.F)()};
Ti=function(a,b,c,d){this.B=a;this.D=b;this.A=c;this.C=this.o;this.g=void 0===d?null:d};
Vi=function(a,b,c,d,e){try{if(a.g&&a.g.g){var f=a.g.start(b.toString(),3);var k=c();a.g.end(f)}else k=c()}catch(m){c=a.A;try{a.g&&f&&a.g.cp(f);var l=Ui(m);c=(e||a.C).call(a,b,l,void 0,d)}catch(n){a.o(217,n)}if(!c)throw m;}return k};
Xi=function(a,b,c,d){var e=Wi;return function(f){for(var k=[],l=0;l<arguments.length;++l)k[l-0]=arguments[l];return Vi(e,a,function(){return b.apply(c,k)},d,void 0)}};
Ui=function(a){return new Yi(Zi(a),a.fileName,a.lineNumber)};
Zi=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b};
Yi=function(a,b,c){Hi.call(this,Error(a),{message:a,file:void 0===b?"":b,line:void 0===c?-1:c})};
aj=function(a,b){return Vi(Wi,a,b,void 0,$i)};
bj=function(a,b,c,d){return Xi(a,b,c,d)};
cj=function(a,b){Wi.o(a,b,void 0,void 0)};
dj=function(a,b){this.A=null;this.G=a;this.K=b||1;this.o="u"};
ej=function(a,b){var c=b.right-b.left,d=b.bottom-b.top,e=Math.floor(c/2),f=Math.floor(d/2);switch(a.K){case 4:return a.G?(e=Math.floor(.3*c),f=Math.floor(.3*d),[new g.zd(e,f),new g.zd(c-e,f),new g.zd(e,d-f),new g.zd(c-e,d-f)]):[new g.zd(e,0),new g.zd(0,f),new g.zd(e,d-1),new g.zd(c-1,f)];case 3:return[new g.zd(c-1,0),new g.zd(e,f),new g.zd(0,d-1)];default:return[new g.zd(e,f)]}};
fj=function(a,b){try{var c=b||a.A.getBoundingClientRect()}catch(e){c=new g.Eg(0,0,0,0)}var d=ej(a,c);(0,g.G)(d,function(a){a.x+=c.left;a.y+=c.top});
return d};
gj=function(a,b){dj.call(this,a,b);this.g=[];this.H=!1;this.B=-1;this.C=this.D=0};
hj=function(a,b,c){this.snapshot=a;this.o=b;this.g=c};
kj=function(a){if(a.A&&a.H){var b=fj(a);(0,g.G)(b,function(a,b){this.g[b]&&ij(this.g[b],a)},a)}};
lj=function(a){(0,g.G)(a.g,function(a){a.remove()});
a.g=[];a.o="d"};
rj=function(a){var b=(0,g.F)(),c=a.D?b-a.D:0,d=-1,e=(0,g.H)(a.g,function(a){return mj(a,b)});
4==a.g.length?d=a.G?nj(e):oj(e):3==a.g.length?d=pj(e):1==a.g.length&&(d=[-1,0,1,2,3,5][mj(a.g[0],b)+1]);a.C=d==a.B?a.C+c:0;c=new hj(d,a.B,c);a.B=d;a.D=b;qj(a,d);kj(a);return c};
tj=function(a){var b=Kb(g.Tb(sj));(0,g.G)(a,function(a){0<=a&&++b[a]});
return b};
oj=function(a){a=tj(a);return 4==a[4]?6:3<=a[4]?5:0<a[4]?4:4==a[2]?2:4==a[1]?1:4==a[0]?0:3};
pj=function(a){var b=tj(a);return 4==a[0]&&4==a[2]?6:4==a[1]?5:0<b[4]?4:3==b[2]?2:3==b[1]?1:3==b[0]?0:3};
nj=function(a){a=tj(a);return 3<=a[4]?5:2==a[4]?8:0<a[4]?7:4==a[2]?2:4==a[1]?1:4==a[0]?0:3};
qj=function(a,b){if(0==b&&uj(a))a.o="n";else switch(b){case -1:a.o="d";break;case 0:a.o="l";break;case 1:a.o="f";break;case 2:a.o="c";break;case 3:case 4:case 5:case 6:a.o="r"}};
uj=function(a){return"n"==a.o?!0:"l"==a.o&&3E3<=a.C};
zj=function(a,b,c,d){this.g=null;this.D=a;this.Ca="e"==a?String(c)+"~"+String(d):"";this.o=[];this.A=-1;this.C=0;this.B=Kb(g.Tb(vj));this.L=Kb(g.Tb(sj));"e"==this.D&&(wj[this.Ca]=(0,g.A)(this.K,this));g.Dc?(a=b.createElement("div"),a.innerHTML='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" style="opacity:0;-ms-filter:\'progid:DXImageTransform.Microsoft.Alpha(opacity=0)\';filter:alpha(opacity=0)"><param name="movie" value="'+xj(this,!0)+'"></param><param name="allowscriptaccess" value="always"></param><param name="wmode" value="transparent"></param></object>',
a=a.firstChild,a.id=String(Math.random())):a=yj(this,b);a.width=1;a.height=1;a.style.zIndex=-999999;this.g=a};
yj=function(a,b){function c(a,c,d){var e=b.createElement("param");e.name=c;e.value=d;a.appendChild(e)}
var d=xj(a),e=b.createElement("object");e.type="application/x-shockwave-flash";e.data=d;c(e,"movie",d);c(e,"allowscriptaccess","always");c(e,"wmode","opaque");e.style.visibility="hidden";e.style.opacity=0;return e};
xj=function(a,b){var c=vg("//pagead2.googlesyndication.com/osd/hbe.swf","id",a.Ca);b&&(c=vg(c,"delay","1"));return c};
ij=function(a,b){a.g&&!Ad(b,dh(a.g))&&g.ch(a.g,b)};
mj=function(a,b){if("e"==a.D){var c=null;try{c=a.g.it()}catch(f){}null===c?(c=0,0<a.A&&(c=2)):c=c?3:4;++a.L[c+1];a.A=c}else{var d=Number(b),c=null;try{c=a.g.fc()}catch(f){}var e=c;Aj(a,e,d);c=a.o[a.o.length-1];if(null===e){if(e=d=0,0<a.A||g.pa(c.bk))e=d=2}else null===c.bk||c.timeMs>=d?(d=10<=e?4:0,e=0):e>c.bk?(c=(e-c.bk)/(d-c.timeMs)*1E3,d=10<=c?4:3,c=0==c?1:1>c?3:4>c?4:23>c?6:26>c?8:9,6==a.C&&6==c&&(c=7),e=c):e=d=1;6==a.C&&(--a.B[6],4==e||8==e?++a.B[5]:++a.B[7]);++a.B[e];a.A=d;a.C=e}return a.A};
Aj=function(a,b,c){var d=c-1E3,e=a.o.length;(0,g.G)(a.o,function(a,b){a.timeMs<=d&&(e=Math.min(e,b+1))});
var f=a.o.length-e;0<f&&a.o.splice(e,f);a.o.unshift({bk:b,timeMs:c})};
Bj=function(a,b){dj.call(this,a,b);this.g=[];this.D=!1;this.C=0;this.B=-1};
Ej=function(a,b){var c=b.getBoundingClientRect();var d="DIV"==b.tagName||"INS"==b.tagName,e=g.Fd(b),f=!0,k=a.g;if(d){var l=vi();c=ej(a,c);ce(b,l,0);(0,g.G)(c,function(a){var b=new Cj(e);k.push(b);var c;if(c=f)if(b.g){b.g.style.position="absolute";Dj(b,a);a=!0;try{l.appendChild(b.g)}catch(r){a=!1}c=a}else c=!1;f=c})}else c=fj(a,c),(0,g.G)(c,function(a){var c=new Cj(e);
k.push(c);var d;if(d=f)if(c.g&&b.parentNode){c.g.style.position="fixed";Dj(c,a);a=!0;try{g.be(c.g,b)}catch(r){a=!1}d=a}else d=!1;f=d});
f?(a.A=b,a.D=!d):((0,g.G)(k,function(a){a.remove()}),a.g=[]);
return f};
Fj=function(a){if(a.A&&a.D){var b=fj(a);(0,g.G)(b,function(a,b){this.g[b]&&Dj(this.g[b],a)},a)}};
Gj=function(a){(0,g.G)(a.g,function(a){a.remove()});
a.g=[]};
Lj=function(a){var b=(0,g.F)(),c=a.C?b-a.C:0,d=fb(a.g,function(a){return a.isVisible(b)}),d=4==a.g.length?a.G?Hj[d]:Ij[d]:3==a.g.length?Jj[d]:1==a.g.length?Kj[d]:-1,c=new hj(d,a.B,c);
a.B=d;a.C=b;Fj(a);return c};
Cj=function(a){this.g=null;this.A=this.o=0;Mj(this,a)};
Mj=function(a,b){var c=b.createElement("iframe");c.srcdoc="";c.frameBorder=0;c.style.width="1px";c.style.height="1px";c.style.opacity="0";c.style.zIndex=-999999;a.g=c;var d=Xi(245,a.B,a,void 0);c.addEventListener("load",bj(244,function(){c.contentWindow.requestAnimationFrame(d)}))};
Dj=function(a,b){a.g&&!Ad(b,dh(a.g))&&g.ch(a.g,b)};
Nj=function(a,b,c,d){c=Xi(d,c,void 0,void 0);Lh(a,b,c,{capture:void 0});return c};
Oj=function(){};
Pj=function(){this.G=!1;this.H=void 0;this.o=!Gh(K.top);var a=li();this.domain=0<a.length&&null!=a[a.length-1]&&null!=a[a.length-1].url?g.og(a[a.length-1].url)||"":"";this.A=this.K=this.C=this.g=null;this.O=0;this.B=!1;this.D=new g.Eg(0,0,0,0);this.L=0;this.bb="geo";this.Bp=new Th};
Rj=function(a,b,c){this.position=Qj.clone();this.Sb=0;this.nm=this.aj();this.jm=-2;this.uG=(0,g.F)();this.Zt=-1;this.Ze=b;this.Df=-1!=b;this.lk=null;this.opacity=-1;this.tt=c;this.du=this.pm=g.qa;this.Wd=this.element=a;this.ag=this.Wb=null;this.Sh=1;this.Mn=this.Xe=this.Vi=!1;this.bl=1;this.xn=!0;this.Hd=!1;this.qw=Pj.getInstance().O++;this.domain=null;this.gm=0;this.Hb=this.ql();this.Yt=-1;this.mk=new g.Eg(0,0,0,0);this.Bp=new Th};
Sj=function(a,b){return null===a||null===b?Qj.clone():new g.Eg(Math.max(a.top,b.top),Math.min(a.right,b.right),Math.min(a.bottom,b.bottom),Math.max(a.left,b.left))};
Tj=function(a,b,c,d,e){if(a.Df){var f=K.innerWidth,k=K.innerHeight,l=new g.Eg(Math.round(K.mozInnerScreenY),Math.round(K.mozInnerScreenX+f),Math.round(K.mozInnerScreenY+k),Math.round(K.mozInnerScreenX));c=new g.Eg(K.screenY+d,K.screenX+c.width,K.screenY+c.height,K.screenX);e||(d=new g.Eg(l.top-c.top,l.right-c.left,l.bottom-c.top,l.left-c.left),d.top>a.position.top?a.position=d:(a.position.right=a.position.left+f,a.position.bottom=a.position.top+k),a.Sb=f*k);a.he(l,c,b,e,!0,!0)}};
Wj=function(a,b,c){var d;if(a.Df&&(d=Xh())){c||Uj(a,K,!0);if(a.qd()||a.Mn){d=Vj(a,d);var e=!0}else{e=Math.floor((a.position.left+a.position.right)/2);var f=Math.floor((a.position.top+a.position.bottom)/2),k=g.Rd(window.document);d=d(e-k.x,f-k.y)?.5:0;e=!1}a.he(a.position,d,b,c,!0,e)}};
Xj=function(a,b,c){if(c(b))return b;for(;;){var d=Math.floor((a+b)/2);if(d==a||d==b)return a;c(d)?a=d:b=d}};
Vj=function(a,b){var c=g.Rd(window.document),d=a.bl,e=Math.floor(a.position.left-c.x)+1,f=Math.floor(a.position.top-c.y)+1,k=Math.floor(a.position.right-c.x)-d,l=Math.floor(a.position.bottom-c.y)-d,c=(l-f)*(k-e);if(f>l||e>k)return 0;var d=!!b(e,f),m=!!b(k,l);if(d&&m)return 1;var n=!!b(k,f),q=!!b(e,l);if(d)l=Xj(f,l,function(a){return!!b(e,a)}),k=Xj(e,k,function(a){return!!b(a,f)});
else if(n)l=Xj(f,l,function(a){return!!b(k,a)}),e=Xj(k,e,function(a){return!!b(a,f)});
else if(q)f=Xj(l,f,function(a){return!!b(e,a)}),k=Xj(e,k,function(a){return!!b(a,l)});
else if(m)f=Xj(l,f,function(a){return!!b(k,a)}),e=Xj(k,e,function(a){return!!b(a,l)});
else{var r=Math.floor((e+k)/2),v=Math.floor((f+l)/2);if(!b(r,v))return 0;f=Xj(v,f,function(a){return!!b(r,a)});
l=Xj(v,l,function(a){return!!b(r,a)});
e=Xj(r,e,function(a){return!!b(a,v)});
k=Xj(r,k,function(a){return!!b(a,v)})}return(l-f)*(k-e)/c};
Yj=function(a,b,c,d,e){a.Df&&(d||Uj(a,K,e),a.he(a.position,c,b,d,!1,!0))};
Zj=function(a,b,c){if(a.Df){var d=c?a.Hb.g:a.gm,e;if(e=a.mk){e=a.mk;var f=new g.Eg(0,0,0,0);e=!(e==f||e&&f&&e.top==f.top&&e.right==f.right&&e.bottom==f.bottom&&e.left==f.left)}e&&(d=Fg(a.mk.clone(),a.position.left,a.position.top));a.he(a.position,d,b,c,!0,!0)}};
ak=function(a,b){a.bb=b.create(K,a.Bp);a.bb.B(a.Wd)};
bk=function(a,b,c){if(a.Df&&a.bb){var d=Sh(),e=Pj.getInstance();Uj(a,d,e.o);d=a.bb.g();e=d.o()||d.A();a.he(a.position,d.g(),b,c,!0,e)}};
Uj=function(a,b,c,d){if(d)a.position=d;else{b=c?b:b.top;try{var e=Qj.clone(),f=new g.zd(0,0);if(a.Wd){var k=1==a.tt;!c&&k&&yi(a.Wd)||(e=a.Wd.getBoundingClientRect());f=g.jh(a.Wd,b)}var l=f.x,m=f.y;a.position=new g.Eg(Math.round(m),Math.round(l+(e.right-e.left)),Math.round(m+(e.bottom-e.top)),Math.round(l))}catch(n){a.position=Qj.clone()}}a.Sb=(a.position.bottom-a.position.top)*(a.position.right-a.position.left)};
ck=function(a,b){var c=Math.pow(10,b);return Math.floor(a*c)/c};
dk=function(a){a.bb||a.Wb&&lj(a.Wb)};
hk=function(a,b){var c=!1,d=a.Wd;b.document&&b.document.body&&12==a.tt&&(d=b.document.body);if(null===d)return!1;aj(152,function(){var e=new b.IntersectionObserver(function(c){try{ek(b,c,a)}catch(k){try{e.unobserve(d),cj("osd_adblock::nioc",k)}catch(l){}}},fk);
e.observe(d);gk(d);c=!0});
return c};
gk=function(a){if(a&&(a=a.style)){var b=a.opacity;a.opacity=.98;a.opacity=.99;a.opacity=b}};
ik=function(a,b){var c=!1;aj(151,function(){var d=Nh(b).IK(function(c){try{ek(b,c,a)}catch(f){try{d(),cj("osd_adblock::aioc",f)}catch(k){}}});
c=!0});
return c};
ek=function(a,b,c){if(!b||!b.length||0>=b.length)var d=null;else{d=b[0];for(var e=1;e<b.length;e++)b[e].time>d.time&&(d=b[e])}d&&(b=Ai(d.boundingClientRect),e=Ai(d.intersectionRect),c.Hb.g=g.td(d.intersectionRect.width*d.intersectionRect.height/(d.boundingClientRect.width*d.boundingClientRect.height),0,1),c.gm=c.Hb.g,Uj(c,a,!0,b),a=Sj(b,e),c.mk=0>=c.Sb||a.top>=a.bottom||a.left>=a.right?new g.Eg(0,0,0,0):Fg(a,-b.left,-b.top))};
jk=function(a,b,c,d){d&&(a.du=d);switch(c){case "nio":return hk(a,b);case "aio":return ik(a,b);case "swf":return a.bi();case "raf":return a.vn();case "geo":case "xde":case "iem":return!0}return!1};
kk=function(){var a={};this.A=(a.vs=[1,0],a.vw=[0,1],a.am=[2,2],a.a=[4,4],a.f=[8,8],a.bm=[16,16],a.b=[32,32],a.avw=[0,64],a.cm=[128,128],a.pv=[256,256],a.gdr=[0,512],a.p=[0,1024],a.r=[0,2048],a.m=[0,4096],a.um=[0,8192],a.ef=[0,16384],a.s=[0,32768],a);this.o={};for(var b in this.A)0<this.A[b][1]&&(this.o[b]=0);this.B=0};
mk=function(a){return lk(a,g.Xb(a.A))};
lk=function(a,b){var c=0,d;for(d in a.o)g.ob(b,d)&&1==a.o[d]&&(c+=a.A[d][1],a.o[d]=2);return c};
nk=function(a){var b=0,c;for(c in a.o){var d=a.o[c];if(1==d||2==d)b+=a.A[c][1]}return b};
ok=function(){this.g=[]};
pk=function(a){this.g=this.o=0;this.A=a};
qk=function(){Ei.call(this);this.Fa=this.W=this.fa=this.da=this.aa=this.o=0;this.C=-1;this.D=this.K=this.H=this.G=this.la=this.za=this.O=0;this.ha=[0,0,0,0,0];this.A=this.g=-1;this.T=this.fb=0;this.Ma=2E3;this.kb=new pk(32);this.La=new pk(32);this.Ka=new pk(32)};
rk=function(a,b,c){var d=a.Fa;qi||c||-1==a.C||(d+=b-a.C);return d};
sk=function(a,b,c,d){Rj.call(this,b,c,d);this.la=0;this.B={};this.o=new kk;this.Eo={};this.Hg=this.Xb="";this.Bb=!1;this.A=[];this.Va=this.ou=this.pu=this.D=!1;this.ie=void 0;this.C=-1;this.kb=void 0;this.ha=!1;this.X=this.T=0;this.ba=1;this.da=-1;this.za=this.Ma=!1;this.tf=this.wb=0;this.Ea=!1;this.Wa=this.Xa=-1;this.aa=this.O=this.g=0;this.Cb=this.fb=-1;this.Ya=0;this.Ua=[0,0,0,0,0];this.H=this.Fa=this.oa=0;this.K=-1;this.Ka=0;this.W=!1;this.wa=null;this.La=this.mu=!1;this.fa=g.qa;this.L=[this.aj()];
this.ib=!1;this.Mn=!0;this.bl=2;b=Pj.getInstance();Uj(this,a,b.o);this.G={};this.G.pause="p";this.G.resume="r";this.G.skip="s";this.G.mute="m";this.G.unmute="um";this.G.exitfullscreen="ef"};
tk=function(a,b,c){a.mu=!0;a.B={};a.B.firstquartile=!1;a.B.midpoint=!1;a.B.thirdquartile=!1;a.B.complete=!1;a.B.pause=!1;a.B.skip=!1;a.B.viewable_impression=!1;a.la=0;c||(a.md().C=b)};
uk=function(a){return g.t(a)?Number(a)?ck(a,3):0:a};
vk=function(a,b){if(-1==a.Ze)return 0;var c=b-a.Ze||1,d=1E4;g.t(a.C)&&-1!=a.C&&(d=Math.max(d,a.C/3));return c>d?1:c};
wk=function(a,b,c){return 15E3<=b?!0:a.Ma?c?!0:-1!=a.C?b>=a.C/2:-1!=a.da?b>=a.da:!1:!1};
xk=function(a,b){for(var c=a.A,d=df({JG:0,mj:void 0}),e=c.length;e<b+1;)c.push(d()),e++;a.A[b]={viewableArea:ck(a.Hb.g,2),instantaneousState:a.o.B}};
Ak=function(a,b){var c=a.Eo[b];if(null!=c)return c;a:if(g.ob(yk,b))c=!0;else{c=a.B[b];if(g.t(c)&&(a.B[b]=!0,!c)){c=!0;break a}c=!1}c=zk(a,c,c);"fully_viewable_audible_half_duration_impression"==b&&(c.std="csm",c.ic=lk(a.o,["gdr"]));return c};
zk=function(a,b,c){if(a.Xe)return{"if":0};var d=a.position.clone();d.round();var e=(0,g.H)(a.A,function(a){return 100*a.JG|0}),f=Pj.getInstance(),k=a.md(),l={};
a.ib&&(l.avms="raf");l["if"]=f.o?1:void 0;l.sdk=a.ie?a.ie:void 0;l.t=a.uG;l.p=[d.top,d.left,d.bottom,d.right];l.tos=k.Ea;l.mtos=k.ba;l.mcvt=k.X;l.ps=void 0;l.pt=e;l.vht=rk(k,pi(),!!a.D);l.mut=k.za;l.a=uk(a.Hb.volume);l.mv=uk(k.A);l.fs=a.Hd?1:0;l.ft=k.fb;l.at=k.la;l.as=.1<=k.g?1:0;l.atos=k.ha;l.uac=a.wb;l.vpt=k.o;"nio"==f.bb&&(l.nio=1,l.avms="nio");l.gmm="4";l.gdr=wk(a,k.o,!0)?1:0;a.Mn&&(l.efpf=a.bl);a.Wb&&(l.swf=a.Wb.getStatus(),l.px=a.Sh,l.avms="swf");0<a.Ka&&(l.nnut=a.Ka);l.tcm=a.ba;l.nmt=a.Fa;
l.bt=a.H;l.pst=a.K;l.vpaid=a.kb;l.dur=a.C;l.vmtime=a.T;l.is=a.o.B;1<=a.A.length&&(l.i0=a.A[0].mj);2<=a.A.length&&(l.i1=a.A[1].mj);3<=a.A.length&&(l.i2=a.A[2].mj);4<=a.A.length&&(l.i3=a.A[3].mj);l.cs=nk(a.o);b&&(l.ic=mk(a.o),l.dvpt=k.aa,l.dvs=k.fa,l.dfvs=k.W,l.davs=k.K,l.dafvs=k.D,c&&(k.aa=0,k.fa=0,k.W=0,k.K=0,k.D=0),a.Ye()&&(l.dtos=k.da,l.dav=k.H,l.dtoss=a.la+1,c&&(k.da=0,k.H=0,a.la++)),l.dat=k.G,l.dft=k.T,c&&(k.G=0,k.T=0));f.A&&(l.ps=[f.A.width,f.A.height]);f.g&&(l.bs=[f.g.width,f.g.height]);f.C&&
(l.scs=[f.C.width,f.C.height]);l.dom=f.domain;a.Vi&&(l.fmf="1",l.px=a.Sh);a.tf&&(l.vds=a.tf);a.g&&(l.vmer=a.g);a.O&&(l.vmmk=a.O);a.aa&&(l.vmiec=a.aa);a.bb&&(l.avms=a.bb.A(),g.ic(l,a.bb.o()));"exc"==f.bb&&(l.femt=a.fb,l.femvt=a.Cb,l.emc=a.Ya,l.emb=a.Ua,l.emuc=a.oa,l.avms="exc");Bk()?(l.c=ck(a.Hb.g,2),l.ss=ck(Ck(a),2)):l.tth=pi()-Dk;l.mc=ck(k.wa,2);l.nc=ck(k.B,2);l.mv=uk(k.A);l.nv=uk(k.g);l.lte=ck(a.jm,2);b=a.L[a.L.length-1];l.qmtos=b.ba;l.qnc=ck(b.B,2);l.qmv=uk(b.A);l.qnv=uk(b.g);l.qas=.1<=b.g?1:0;
l.qi=a.Xb;null!==a.wa&&(l.nvat=a.wa?1:0);l.avms||(l.avms="geo");l.psm=k.kb.g;l.psv=k.kb.getValue();l.psfv=k.La.getValue();l.psa=k.Ka.getValue();return l};
Ck=function(a){if(a.Hd)return 1;var b=K.screen.width*K.screen.height;return 0>=b?-1:Math.min(a.Sb*a.Hb.g/b,1)};
Ek=function(a){var b=[],c=[];g.Qb(a,function(a,e){if(!(e in Object.prototype)&&"undefined"!=typeof a){g.ua(a)&&(a=a.join(","));var d=[e,"=",a].join("");switch(e){case "r":case "tt":case "error":case "mtos":case "tos":case "p":case "bs":case "aio":case "nio":case "swf":case "iem":b.unshift(d);break;case "req":case "url":case "referrer":case "iframe_loc":c.push(d);break;default:b.push(d)}}});
return b.concat(c)};
g.Fk=function(a,b,c){g.I.call(this);this.B=null!=c?(0,g.A)(a,c):a;this.A=b;this.o=(0,g.A)(this.aF,this);this.g=[]};
Gk=function(a){a.Jf=g.Vf(a.o,a.A);a.B.apply(null,a.g)};
Hk=function(){return Pb("iPad")||Pb("Android")&&!Pb("Mobile")||Pb("Silk")};
Ik=function(){var a=Pj.getInstance().bb;return"nio"==a||"aio"==a};
Sk=function(){if(!Jk){Jk=!0;var a=g.w.requestAnimationFrame||g.w.webkitRequestAnimationFrame||g.w.mozRequestAnimationFrame||g.w.oRequestAnimationFrame||g.w.msRequestAnimationFrame;if(!Kk&&!Ik()){if(a){var b=Xi(136,Lk,void 0,void 0);var c=function(){a(function(){K.setTimeout(b,0)})}}else c=Lk;
Mk=new g.Fk(Xi(137,c,void 0,void 0),100);c=(0,g.A)(Mk.sg,Mk);Kk=Nj(K,"scroll",c,138)}if(!Nk&&!Ik()){if(a){var d=Xi(139,Ok,void 0,void 0);c=function(){a(function(){K.setTimeout(d,0)})}}else c=Ok;
Pk=new g.Fk(Xi(140,c,void 0,void 0),100);c=(0,g.A)(Pk.sg,Pk);Nk=Nj(K,"resize",c,141)}Qk();Rk()}};
Ok=function(){Tk(!1);Lk()};
Lk=function(){Uk(Vk(),!1)};
Zk=function(){var a=Pj.getInstance();Wk&&!a.B&&"exc"!=a.bb&&(a.g=ni(K,Wk));var b=new Xk;switch(a.bb){case "xde":var c=Yk;Tk(!1);var d=Pj.getInstance(),e=d.K,a=e.height-c;0>=a&&(a=e.height,c=0);d.g=new g.Cd(e.width,a);a=new Xk;a.A=d.g;a.g=e;a.B=c;return a;case "geo":a:{a=a.g;b=new Xk;b.A=a;if(null!=a&&-1!=a.width&&-1!=a.height&&-12245933!=a.width&&-12245933!=a.height){var f=Pj.getInstance();if(f.B)c=f.D;else try{var f=Wk,k=K||K,k=k.top,d=a||ni(k,f),e=g.Rd(g.Hd(k.document).g),c=-1==d.width||-12245933==
d.width?new g.Eg(d.width,d.width,d.width,d.width):new g.Eg(e.y,e.x+d.width,e.y+d.height,e.x)}catch(l){c=b;break a}b.o=c}c=b}return c;default:return b}};
Uk=function(a,b,c){if(!$k)if(window.clearTimeout(al),al=null,aj("osd::debugRemoveZombies",function(){for(var b=a.length-1;0<=b;b--);}),0==a.length)b||bl();
else{var d=Zk(),e=Pj.getInstance();try{var f=pi();if(null!=Oj.getInstance().g)for(var k=0;k<a.length;k++)bk(a[k],f,b);else switch(e.bb){case "exc":for(k=0;k<a.length;k++)Zj(a[k],f,b);break;case "nis":for(k=0;k<a.length;k++)g.t(c)?a[k].hk(c):a[k].Eq(f);break;case "gsv":for(k=0;k<a.length;k++)g.t(c)?a[k].Xp(c):a[k].Dq(f);break;case "aio":case "nio":for(k=0;k<a.length;k++)Zj(a[k],f,b);break;case "xde":if(d.g)for(k=0;k<a.length;k++)Tj(a[k],f,d.g,d.B,b);break;case "iem":for(k=0;k<a.length;k++)Wj(a[k],
f,b);break;case "swf":(0,g.G)(a,function(a){if(b){if(a.Wb){var c=a.Wb;3<=c.B&&(c.B=3);a.Hb.g=0}}else if(a.Wb&&"d"!=a.Wb.getStatus()){var c=rj(a.Wb),d=[0,0,0,0,0,.01,.5,1,.01,.3],e=d[c.snapshot+1];a.Hb.g=d[c.o+1];a.he(a.position,e,a.Ze+c.g,!1,!0,!1);a.Ye()&&1!=a.Dd()&&!a.xn&&a.Wb&&lj(a.Wb);(c=2==c.snapshot||uj(a.Wb))||(c=a.Wb,c="f"==c.o&&3E3<=c.C);c&&(a.du(a),a.xn=!1,a.Wb&&lj(a.Wb))}});
break;case "raf":(0,g.G)(a,function(a){if(b)a.ag&&(a.ag.B=3,a.Hb.g=0);else if(a.ag){var c=Lj(a.ag),d=[0,0,0,0,0,.01,.5,1,.01,.3],e=d[c.snapshot+1];a.Hb.g=d[c.o+1];a.he(a.position,e,a.Ze+c.g,!1,!0,!1);a.Ye()&&1!=a.Dd()&&!a.xn&&a.ag&&Gj(a.ag)}});
break;case "geo":if(d.o)for(k=0;k<a.length;k++)Yj(a[k],f,d.o,b,e.o)}++cl}finally{b?(0,g.G)(a,function(a){a.Hb.g=0}):bl()}}};
Qk=function(){var a=Rk,b;Rh.mozVisibilityState?b="mozvisibilitychange":Rh.webkitVisibilityState?b="webkitvisibilitychange":Rh.visibilityState&&(b="visibilitychange");b&&(dl=dl||Nj(Rh,b,a,142))};
Rk=function(){var a=Bk(),b=pi();a?(qi||(ri=b,(0,g.G)(el,function(a){var c=a.md();c.Fa=rk(c,b,!!a.D)})),qi=!0,Tk(!0)):(qi=!1,Dk=b,(0,g.G)(el,function(a){a.Df&&(a.md().C=b)}));
Uk(Vk(),!a)};
Bk=function(){if(fl())return!0;var a=Uh(),b=1===a,a=0===a;return Pj.getInstance(),b||a};
bl=function(){K&&(al=K.setTimeout(bj(143,function(){Uk(Vk(),!1)}),ti(Pj.getInstance().H)))};
hl=function(a){return null!=a&&(0,g.gl)(el,function(b){return b.element==a})};
il=function(a){return g.jb(el,function(b){return b.Xb==a})};
Vk=function(){return 0==el.length?jl:0==jl.length?el:g.vb(jl,el)};
Tk=function(a){var b=Pj.getInstance();b.g=b.B?(new g.Cd(b.D.Ed(),b.D.getHeight())).round():ni(K,Wk);if(!a){b.K=K&&K.outerWidth?new g.Cd(K.outerWidth,K.outerHeight):new g.Cd(-12245933,-12245933);a=K;null!==a&&a.top!=a&&(a=a.top);var c=0,d=0,e=Pj.getInstance().g;try{var f=a.document,k=f.body,l=f.documentElement;if("CSS1Compat"==f.compatMode&&l.scrollHeight)c=l.scrollHeight!=e.height?l.scrollHeight:l.offsetHeight,d=l.scrollWidth!=e.width?l.scrollWidth:l.offsetWidth;else{var m=l.scrollHeight,n=l.scrollWidth,
q=l.offsetHeight,r=l.offsetWidth;l.clientHeight!=q&&(m=k.scrollHeight,n=k.scrollWidth,q=k.offsetHeight,r=k.offsetWidth);m>e.height?m>q?(c=m,d=n):(c=q,d=r):m<q?(c=m,d=n):(c=q,d=r)}var v=new g.Cd(d,c)}catch(D){v=new g.Cd(-12245933,-12245933)}b.A=v}};
ll=function(a,b,c){if(a=kl(a,"swf",b,c))Pj.getInstance().bb="swf",Pj.getInstance().bb="swf",(0,g.G)(b,function(a){a.Wb||c(a)});
return a};
ml=function(){var a=kl(K,"raf",Vk());a&&(Pj.getInstance().bb="raf");return a};
kl=function(a,b,c,d){var e=!1;(0,g.G)(c,function(c){jk(c,a,b,d)&&(e=!0)});
return e};
nl=function(a){var b=[];(0,g.G)(a,function(a){hl(a.element)||(el.push(a),b.push(a))})};
ol=function(a){var b=[];(0,g.G)(a,function(a){null==g.jb(el,function(b){return b.element==a.element&&b.Hg==a.Hg})&&(el.push(a),b.push(a))})};
fl=function(){return(0,g.gl)(Vk(),function(a){return a.Hd})};
Xk=function(){this.g=this.A=null;this.B=0;this.o=null};
pl=function(a){var b=[];g.Qb(a,function(a,d){d in Object.prototype||"undefined"==typeof a||(g.ua(a)&&(a=a.join(",")),b.push([d,"=",a].join("")))});
return b.join("&")};
ql=function(){var a=g.Ob;return a?(0,g.gl)("AppleTV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;OMI/".split(";"),function(b){return Ta(a,b)})?!0:Ta(a,"Presto")&&Ta(a,"Linux")&&!Ta(a,"X11")&&!Ta(a,"Android")&&!Ta(a,"Mobi"):!1};
rl=function(a){if(!a)return"";var b=a.document,c=[];c.push("url="+(0,window.encodeURIComponent)(a.location.href.substring(0,512)));b&&b.referrer&&c.push("referrer="+(0,window.encodeURIComponent)(b.referrer.substring(0,512)));return c.join("&")};
sl=function(a){return function(b){return!g.t(b[a])&&g.t(0)?0:b[a]}};
ul=function(){var a=[0,2,4];return function(b){b=b.tos;if(g.ua(b)){for(var c=Array(b.length),d=0;d<b.length;d++)c[d]=0<d?c[d-1]+b[d]:b[d];return g.t(a)?tl(c,a):c}}};
vl=function(a,b){return function(c){c=c[a];if(g.ua(c))return tl(c,b)}};
tl=function(a,b){return(0,g.fe)(a,function(a,d){return g.ob(b,d)})};
wl=function(){this.A=this.D=!1;this.g={};this.g.start=this.Rx;this.g.firstquartile=this.Fx;this.g.midpoint=this.Kx;this.g.thirdquartile=this.Sx;this.g.complete=this.Bx;this.g.pause=this.Nx;this.g.resume=this.Px;this.g.skip=this.Qx;this.g.viewable_impression=this.Ux;this.g.mute=this.Lx;this.g.unmute=this.Tx;this.g.fullscreen=this.Gx;this.g.exitfullscreen=this.Ex;this.g.fully_viewable_audible_half_duration_impression=this.Hx;this.g.measurable_impression=this.Jx;this.g.abandon=this.Ax;this.g.engagedview=
this.Dx;this.g.impression=this.Ix;this.g.creativeview=this.Cx;this.g.progress=this.Ox;this.o={};this.o.overlay_resize=this.Mx;this.o.abandon=this.Nl;this.o.close=this.Nl;this.o.collapse=this.Nl;Pj.getInstance().L=3};
xl=function(a,b,c){c||(b=-1);return new sk(K,a,b,7)};
Bl=function(a,b){if(!a.Bb){var c=Ak(a,"start"),c=yl(c,zl),d=Al||K,e=[];e.push("v=588v");e.push("r="+b);var f=0;"swf"==Pj.getInstance().bb&&(f=1);e.push("efm="+f);e.push(c);e.push(rl(d));Oh(K,("//pagead2.googlesyndication.com/pagead/gen_204?id=lidarvf&"+e.join("&")).substring(0,2E3),void 0);a.Bb=!0}};
Cl=function(a,b,c,d){Uk([a],!Bk(),d);xk(a,c);b=Ak(a,b);if(4!=c){d=a.L;a=a.aj;for(var e=d.length;e<c+1;)d.push(a()),e++}return b};
Dl=function(a,b,c){var d=a.md();d.Fa=rk(d,pi(),!!a.D);d=!Bk();Uk([a],d,c);a.D=!0;return Ak(a,b)};
Fl=function(a,b,c){if(!b.mu){"i"!=El&&($k=!1);var d=Oj.getInstance();null!=d.g&&ak(b,null!=d.g?d.g:null);jk(b,K,Pj.getInstance().bb,function(b){return a.fq(b)});
d=g.t(c)?c.opt_nativeTime:void 0;si=d=g.pa(d)?d:pi();b.Df=!0;var e=Bk();tk(b,d,e);Uk([b],!e,c)}};
Gl=function(a,b){if(g.u(b)){if(1==a)var c=el;else if(2==a)c=jl;else return;var d=g.ib(c,function(c){return c.Dd()!=a?!1:c.Xb==b});
0<=d&&(dk(c[d]),g.sb(c,d))}};
Kl=function(a,b,c){var d=g.jb(el,function(a){return a.element==c});
null!==d&&d.Xb!=b&&(Gl(1,d.Xb),d=null);d||(d=Hl(a,c),d.Xb=b,d.ie="h");return d};
Hl=function(a,b){var c=xl(b,pi(),!1);c.pm=(0,g.A)(a.gj,a);Pj.getInstance().H=79463069;ol([c]);Sk();return c};
Nl=function(a,b){var c=$b(Ll,function(b){return b==a}),c={sv:"588",
cb:"j",e:Ml[c]},d=Ak(b,a);g.ic(c,d);b.Eo[a]=d;return 2==b.Dd()?Ek(c).join("&"):yl(c,zl)};
yl=function(a,b,c,d,e){var f={};if(g.t(a))if(null!=b)for(var k in b){var l=b[k];k in Object.prototype||null!=l&&(g.wa(l)?f[k]=l(a):f[k]=a[l])}else g.ic(f,a);g.t(c)&&g.ic(f,c);a=pl(f);0!=a.length&&g.t(d)&&g.t(e)&&(e=e(a),a+="&"+d+"="+e);return a};
Pl=function(a,b){var c={sv:"588",cb:"j"};c.nas=el.length;c.msg=a;if(g.t(b)){var d=Ol(b);d&&(c.e=Ml[d])}return c};
Ol=function(a){var b=a.toLowerCase();return $b(Ll,function(a){return a==b})};
Ql=function(a,b){var c=a[b];g.t(c)&&(a[b]=Math.floor(1E3*c))};
Rl=function(a){return!a||"function"!==typeof a||0>String(Function.prototype.toString).indexOf("[native code]")?!1:0<=String(a).indexOf("[native code]")&&!0||!1};
Tl=function(a){return!!(1<<a&Sl)};
Yl=function(){try{Ul()}catch(d){}var a="a=1&b="+Sl+"&",b=[],c=99;(0,g.G)(Vl,function(a,c){var d=!1;try{d=a(K)}catch(k){}b[c/32>>>0]|=d<<c%32});
(0,g.G)(b,function(b,e){a+=String.fromCharCode(c+e)+"="+(b>>>0).toString(16)+"&"});
c=105;(0,g.G)(Wl,function(b){var d="false";try{d=b(K)}catch(f){}a+=String.fromCharCode(c++)+"="+d+"&"});
(0,g.G)(Xl,function(b){var d="";try{var f=b(K),d=g.Ac(g.Mb(f),!0)}catch(k){}a+=String.fromCharCode(c++)+"="+d+"&"});
return a.slice(0,-1)};
Ul=function(){if(!Zl){var a=function(){$l=!0;K.document.removeEventListener("webdriver-evaluate",a,!0)};
K.document.addEventListener("webdriver-evaluate",a,!0);var b=function(){am=!0;K.document.removeEventListener("webdriver-evaluate-response",b,!0)};
K.document.addEventListener("webdriver-evaluate-response",b,!0);Zl=!0}};
bm=function(){this.o=64;this.g=Array(4);this.C=Array(this.o);this.B=this.A=0;this.reset()};
cm=function(a,b,c){c||(c=0);var d=Array(16);if(g.u(b))for(var e=0;16>e;++e)d[e]=b.charCodeAt(c++)|b.charCodeAt(c++)<<8|b.charCodeAt(c++)<<16|b.charCodeAt(c++)<<24;else for(e=0;16>e;++e)d[e]=b[c++]|b[c++]<<8|b[c++]<<16|b[c++]<<24;b=a.g[0];c=a.g[1];var e=a.g[2],f=a.g[3];var k=b+(f^c&(e^f))+d[0]+3614090360&4294967295;b=c+(k<<7&4294967295|k>>>25);k=f+(e^b&(c^e))+d[1]+3905402710&4294967295;f=b+(k<<12&4294967295|k>>>20);k=e+(c^f&(b^c))+d[2]+606105819&4294967295;e=f+(k<<17&4294967295|k>>>15);k=c+(b^e&(f^
b))+d[3]+3250441966&4294967295;c=e+(k<<22&4294967295|k>>>10);k=b+(f^c&(e^f))+d[4]+4118548399&4294967295;b=c+(k<<7&4294967295|k>>>25);k=f+(e^b&(c^e))+d[5]+1200080426&4294967295;f=b+(k<<12&4294967295|k>>>20);k=e+(c^f&(b^c))+d[6]+2821735955&4294967295;e=f+(k<<17&4294967295|k>>>15);k=c+(b^e&(f^b))+d[7]+4249261313&4294967295;c=e+(k<<22&4294967295|k>>>10);k=b+(f^c&(e^f))+d[8]+1770035416&4294967295;b=c+(k<<7&4294967295|k>>>25);k=f+(e^b&(c^e))+d[9]+2336552879&4294967295;f=b+(k<<12&4294967295|k>>>20);k=e+
(c^f&(b^c))+d[10]+4294925233&4294967295;e=f+(k<<17&4294967295|k>>>15);k=c+(b^e&(f^b))+d[11]+2304563134&4294967295;c=e+(k<<22&4294967295|k>>>10);k=b+(f^c&(e^f))+d[12]+1804603682&4294967295;b=c+(k<<7&4294967295|k>>>25);k=f+(e^b&(c^e))+d[13]+4254626195&4294967295;f=b+(k<<12&4294967295|k>>>20);k=e+(c^f&(b^c))+d[14]+2792965006&4294967295;e=f+(k<<17&4294967295|k>>>15);k=c+(b^e&(f^b))+d[15]+1236535329&4294967295;c=e+(k<<22&4294967295|k>>>10);k=b+(e^f&(c^e))+d[1]+4129170786&4294967295;b=c+(k<<5&4294967295|
k>>>27);k=f+(c^e&(b^c))+d[6]+3225465664&4294967295;f=b+(k<<9&4294967295|k>>>23);k=e+(b^c&(f^b))+d[11]+643717713&4294967295;e=f+(k<<14&4294967295|k>>>18);k=c+(f^b&(e^f))+d[0]+3921069994&4294967295;c=e+(k<<20&4294967295|k>>>12);k=b+(e^f&(c^e))+d[5]+3593408605&4294967295;b=c+(k<<5&4294967295|k>>>27);k=f+(c^e&(b^c))+d[10]+38016083&4294967295;f=b+(k<<9&4294967295|k>>>23);k=e+(b^c&(f^b))+d[15]+3634488961&4294967295;e=f+(k<<14&4294967295|k>>>18);k=c+(f^b&(e^f))+d[4]+3889429448&4294967295;c=e+(k<<20&4294967295|
k>>>12);k=b+(e^f&(c^e))+d[9]+568446438&4294967295;b=c+(k<<5&4294967295|k>>>27);k=f+(c^e&(b^c))+d[14]+3275163606&4294967295;f=b+(k<<9&4294967295|k>>>23);k=e+(b^c&(f^b))+d[3]+4107603335&4294967295;e=f+(k<<14&4294967295|k>>>18);k=c+(f^b&(e^f))+d[8]+1163531501&4294967295;c=e+(k<<20&4294967295|k>>>12);k=b+(e^f&(c^e))+d[13]+2850285829&4294967295;b=c+(k<<5&4294967295|k>>>27);k=f+(c^e&(b^c))+d[2]+4243563512&4294967295;f=b+(k<<9&4294967295|k>>>23);k=e+(b^c&(f^b))+d[7]+1735328473&4294967295;e=f+(k<<14&4294967295|
k>>>18);k=c+(f^b&(e^f))+d[12]+2368359562&4294967295;c=e+(k<<20&4294967295|k>>>12);k=b+(c^e^f)+d[5]+4294588738&4294967295;b=c+(k<<4&4294967295|k>>>28);k=f+(b^c^e)+d[8]+2272392833&4294967295;f=b+(k<<11&4294967295|k>>>21);k=e+(f^b^c)+d[11]+1839030562&4294967295;e=f+(k<<16&4294967295|k>>>16);k=c+(e^f^b)+d[14]+4259657740&4294967295;c=e+(k<<23&4294967295|k>>>9);k=b+(c^e^f)+d[1]+2763975236&4294967295;b=c+(k<<4&4294967295|k>>>28);k=f+(b^c^e)+d[4]+1272893353&4294967295;f=b+(k<<11&4294967295|k>>>21);k=e+(f^
b^c)+d[7]+4139469664&4294967295;e=f+(k<<16&4294967295|k>>>16);k=c+(e^f^b)+d[10]+3200236656&4294967295;c=e+(k<<23&4294967295|k>>>9);k=b+(c^e^f)+d[13]+681279174&4294967295;b=c+(k<<4&4294967295|k>>>28);k=f+(b^c^e)+d[0]+3936430074&4294967295;f=b+(k<<11&4294967295|k>>>21);k=e+(f^b^c)+d[3]+3572445317&4294967295;e=f+(k<<16&4294967295|k>>>16);k=c+(e^f^b)+d[6]+76029189&4294967295;c=e+(k<<23&4294967295|k>>>9);k=b+(c^e^f)+d[9]+3654602809&4294967295;b=c+(k<<4&4294967295|k>>>28);k=f+(b^c^e)+d[12]+3873151461&4294967295;
f=b+(k<<11&4294967295|k>>>21);k=e+(f^b^c)+d[15]+530742520&4294967295;e=f+(k<<16&4294967295|k>>>16);k=c+(e^f^b)+d[2]+3299628645&4294967295;c=e+(k<<23&4294967295|k>>>9);k=b+(e^(c|~f))+d[0]+4096336452&4294967295;b=c+(k<<6&4294967295|k>>>26);k=f+(c^(b|~e))+d[7]+1126891415&4294967295;f=b+(k<<10&4294967295|k>>>22);k=e+(b^(f|~c))+d[14]+2878612391&4294967295;e=f+(k<<15&4294967295|k>>>17);k=c+(f^(e|~b))+d[5]+4237533241&4294967295;c=e+(k<<21&4294967295|k>>>11);k=b+(e^(c|~f))+d[12]+1700485571&4294967295;b=c+
(k<<6&4294967295|k>>>26);k=f+(c^(b|~e))+d[3]+2399980690&4294967295;f=b+(k<<10&4294967295|k>>>22);k=e+(b^(f|~c))+d[10]+4293915773&4294967295;e=f+(k<<15&4294967295|k>>>17);k=c+(f^(e|~b))+d[1]+2240044497&4294967295;c=e+(k<<21&4294967295|k>>>11);k=b+(e^(c|~f))+d[8]+1873313359&4294967295;b=c+(k<<6&4294967295|k>>>26);k=f+(c^(b|~e))+d[15]+4264355552&4294967295;f=b+(k<<10&4294967295|k>>>22);k=e+(b^(f|~c))+d[6]+2734768916&4294967295;e=f+(k<<15&4294967295|k>>>17);k=c+(f^(e|~b))+d[13]+1309151649&4294967295;
c=e+(k<<21&4294967295|k>>>11);k=b+(e^(c|~f))+d[4]+4149444226&4294967295;b=c+(k<<6&4294967295|k>>>26);k=f+(c^(b|~e))+d[11]+3174756917&4294967295;f=b+(k<<10&4294967295|k>>>22);k=e+(b^(f|~c))+d[2]+718787259&4294967295;e=f+(k<<15&4294967295|k>>>17);k=c+(f^(e|~b))+d[9]+3951481745&4294967295;a.g[0]=a.g[0]+b&4294967295;a.g[1]=a.g[1]+(e+(k<<21&4294967295|k>>>11))&4294967295;a.g[2]=a.g[2]+e&4294967295;a.g[3]=a.g[3]+f&4294967295};
fm=function(a){var b=a||li();a=b.length-1;var c=mi(b),b=c.g,d=c.o,c=[];d?(b&&c.push(dm(a,[d.url,2],0,[b.url,0],b.depth)),c.push(dm(a,[d.url,2],0))):b.url&&(c.push(dm(a,void 0,void 0,[b.url,0],b.depth)),(d=(d=em.exec(b.url))&&d[0]||"")&&c.push(dm(a,[d,1],b.depth)));c.push(dm(a));return c};
dm=function(a,b,c,d,e){a=[a];if(g.t(b)&&g.t(c)){for(var f=0;f<c;f++)a.push("");a.push(b)}if(g.t(d)&&g.t(e)){b=e-a.length+1;for(f=0;f<b;f++)a.push("");a.push(d)}return a};
gm=function(){var a=fm();return(0,g.H)(a,function(a){return Ki(a)})};
hm=function(){wl.call(this);this.B=void 0;this.C=null};
im=function(a,b,c,d){d=xl(null,d,!0);d.ie=c;d.pm=(0,g.A)(a.gj,a);nl([d]);d.Xb=b;return d};
lm=function(a,b,c){var d=g.jb(el,(0,g.A)(function(a){return a.element?jm(a.element,c)==b&&a.Hg==c:!1},a));
null!==d&&d.Xb!=b&&(Gl(1,d.Xb),d=void 0);if(d)return d;d=km(c);if(d=g.jb(d,(0,g.A)(function(a){return jm(a,c)==b},a)))return d=Hl(a,d),d.ie="as",d.Xb=b,d.Hg=c,d};
km=function(a){var b=K.document,c=g.Lb((0,g.H)(["embed","object"],function(a){return g.wb(b.getElementsByTagName(a))})),d="metricID"+a;
return c=(0,g.fe)(c,function(a){if(!a||!g.ya(a)||1!=a.nodeType||!g.wa(a.getBoundingClientRect))return!1;var b=a.getBoundingClientRect();return 0!=b.width&&0!=b.height&&a[d]&&g.wa(a[d])?!0:!1})};
jm=function(a,b){var c="metricID"+b;if(!a||!a[c]||!g.wa(a[c]))return null;try{var d=a[c]()}catch(e){return null}return d.queryID};
mm=function(a,b){var c=Pj.getInstance();switch(a.ie){case "h":var d=g.y("exc"==c.bb?"ima.bridge.triggerExternalActivityEvent":"ima.common.triggerExternalActivityEvent");break;case "m":d=g.y("ima.common.triggerExternalActivityEvent");break;case "n":d=g.y("ima.bridge.triggerExternalActivityEvent");break;case "as":var e="triggerExternalActivityEvent"+a.Hg;a.element&&g.wa(a.element[e])&&(d=function(b,c,d){a.element[e](d)});
break;default:return a.tf|=4,!1}if(g.wa(d)){c=Nl(b,a);try{return d(a.Xb,c,b),!0}catch(f){a.tf|=2}}else a.tf|=1;return!1};
nm=function(a){return g.Rb(g.ec(a||{}),function(a,c){return"qmtos"==c||"qnc"==c||"qmv"==c||"qnv"==c?!1:!0})};
tm=function(a,b,c){var d={};d.viewability=c?yl(b,zl):yl(nm(b),zl);c=Sl=(new Date).getTime();var e=Tl(5);c=($l?!e:e)?c|2:c&-3;e=Tl(2);c=(am?!e:e)?c|8:c&-9;c={s1:(c>>>0).toString(16)};a.C||(a.C=Yl());d.moatInit=a.C;d.moatViewability=yl(b,om,c,"h",pm("kArwaWEsTs"));d.integralAdsViewability=yl(b,qm,{},"h",pm("b96YPMzfnx"));d.doubleVerifyViewability=yl(b,rm,{},"h",pm("yb8Wev6QDg"));d.googleViewability=yl(b,sm);return d};
pm=function(a){return function(b){var c=new bm;c.update(b+a);return Nb(c.digest()).slice(-8)}};
um=function(a,b,c){a=Pj.getInstance();if(a.G!=b){a.G=b;var d=(0,g.gl)(el,function(a){return a.La});
(0,g.G)(el,function(a){b||d||(a.Ze=c);a.W=b;a.La=!1})}};
xm=function(a,b,c){var d=hm.getInstance(),e={};g.ic(e,{opt_adElement:void 0,opt_fullscreen:void 0},c||{});if(e.opt_bounds)a=tm(d,Pl("ol",a),!1);else{b:{if(Ol(a)){if(vm){e=Pl("ue",a);break b}b=d.cj(b,e);if(!b){e=Pl("nf",a);break b}if(!d.D){d.D=!0;try{var f=pi(),k=Pj.getInstance();oi=f;c=f=K;for(var l=0;f&&f!=f.parent;)f=f.parent,l++,Gh(f)&&(c=f);Al=c;Tk(!1);var m=Pj.getInstance();K.screen&&(m.C=new g.Cd(K.screen.width,K.screen.height));if("nis"!=k.bb&&"gsv"!=k.bb){var n=K.document;if(n.body&&n.body.getBoundingClientRect)if((0,g.A)(d.Il,
d),Oj.getInstance(),!k.o&&hi()&&ml())Sk();else if(k.o&&"exc"!=k.bb){if(k.B){var q=Pj.getInstance();ok.getInstance();q.B=!1}var r;if(r=null!=K.IntersectionObserver){var v=kl(K,"nio",Vk());v&&(Pj.getInstance().bb="nio");r=v}if(r)Sk();else if(hi()&&ml())Sk();else{if(g.Xg&&g.pa(K.screenX)&&g.pa(K.mozInnerScreenX)&&g.pa(K.outerWidth)){var D=K.navigator.userAgent,E=D.indexOf("Firefox/");if(0<=E){var z=Math.floor(D.substr(E+8))||-1;var R=D.indexOf("Mac OS X 10."),k=-1;0<=R&&(k=Number(D.substr(R+12,1))||
-1);var V=0<k?-1:D.indexOf("Windows NT "),R=-1;0<=V&&(R={"6.0":0,"6.1":1,"6.2":2}[D.substr(V+11,3)]||-1);D=148;5<=k?D=4<=z?108:3<=z?127:108:0<=R&&(16==z||17==z||18==z)&&(D=[[146,146,146],[148,147,148],[131,130,136]][R][z-16]);var xa=D}else xa=null;null!==xa&&(Yk=xa,Pj.getInstance().bb="xde");var ra=!0}else ra=!1;if(ra)Sk();else{if(g.Dc&&g.uc(8)&&g.wa(Xh())){Pj.getInstance().bb="iem";var Y=!0}else Y=!1;Y?Sk():ei()&&ll(K,el,(0,g.A)(d.fq,d))?Sk():d.Il("i")}}}else Sk();else vm=!0}}catch(fc){throw el=
[],jl=[],fc;}}"i"==El&&(b.Xe=!0,d.nn(b));ra=e.opt_fullscreen;g.t(ra)&&(b.Hd=!!ra);Ta(g.Ob,"CrKey")||Ta(g.Ob,"PlayStation")||Ta(g.Ob,"Roku")||ql()||Ta(g.Ob,"Xbox")?xa=!1:(ra=Pj.getInstance().bb,xa=K&&K.g||"nis"===ra||"gsv"===ra?!1:0===Uh());xa&&(Bl(b,"pvu"),d.Il("pvu"));ra=a.toLowerCase();!xa&&g.ob(wm,ra)&&(Fl(d,b,e),d.bq(b));(xa=b.G[ra])&&b.o.g(xa);var gb;1==b.Dd()?gb=d.g[ra]:2==b.Dd()&&(gb=d.o[ra]);if(gb&&(e=gb.call(d,b,e),g.t(e))){gb=Pl(void 0,ra);g.ic(gb,e);e=gb;break b}}e=void 0}a=tm(d,e,"firstquartile"==
a||"midpoint"==a||"thirdquartile"==a||"complete"==a||"skip"==a||"abandon"==a?!0:!1)}return a};
ym=function(a,b){var c=g.y("ima.common.triggerViewabilityMeasurementUpdate");if(g.wa(c)){var d={},e=Pj.getInstance();d.insideIframe=e.o;d.unmeasurable=b.Xe;d.position=b.position;d.coverage=b.Hb.g;d.documentSize=e.A;d.viewportSize=e.g;d.nativeVolume=a.B;c(b.Xb,d)}};
zm=function(a){hm.getInstance();var b=ok.getInstance();g.rb(b.g,a)};
Am=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a)throw Error("Invalid URI scheme in origin");var c="",d=b.indexOf(":");if(-1!=d){var e=b.substring(d+
1),b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
Bm=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;q=n=0}
function b(a){for(var b=k,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];for(var d=e[1],f=e[2],l=e[3],m=e[4],n,q,c=0;80>c;c++)40>c?20>c?(n=l^d&(f^l),q=1518500249):(n=d^f^l,q=1859775393):60>c?(n=d&f|l&(d|f),q=2400959708):(n=d^f^l,q=3395469782),n=((a<<5|a>>>27)&4294967295)+n+m+q+b[c]&4294967295,m=l,l=f,f=(d<<30|d>>>2)&4294967295,d=a,a=n;e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=e[2]+f&4294967295;
e[3]=e[3]+l&4294967295;e[4]=e[4]+m&4294967295}
function c(a,c){if("string"===typeof a){a=(0,window.unescape)((0,window.encodeURIComponent)(a));for(var d=[],e=0,k=a.length;e<k;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==n)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,q+=64;for(;d<c;)if(f[n++]=a[d++],q++,64==n)for(n=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,q+=64}
function d(){var a=[],d=8*q;56>n?c(l,56-n):c(l,64-(n-56));for(var k=63;56<=k;k--)f[k]=d&255,d>>>=8;b(f);for(k=d=0;5>k;k++)for(var m=24;0<=m;m-=8)a[d++]=e[k]>>m&255;return a}
for(var e=[],f=[],k=[],l=[128],m=1;64>m;++m)l[m]=0;var n,q;a();return{reset:a,update:c,digest:d,Fw:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}};
Dm=function(a,b,c){var d=[],e=[];if(1==(g.ua(c)?2:1))return e=[b,a],(0,g.G)(d,function(a){e.push(a)}),Cm(e.join(" "));
var f=[],k=[];(0,g.G)(c,function(a){k.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=g.pb(f)?[c,b,a]:[f.join(":"),c,b,a];(0,g.G)(d,function(a){e.push(a)});
a=Cm(e.join(" "));a=[c,a];g.pb(k)||a.push(k.join(""));return a.join("_")};
Cm=function(a){var b=Bm();b.update(a);return b.Fw().toLowerCase()};
g.Em=function(a){var b=Am(String(g.w.location.href)),c=g.w.__OVERRIDE_SID;null==c&&(c=(new ig(window.document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.w.__SAPISID:g.w.__APISID,null==b&&(b=(new ig(window.document)).get(c?"SAPISID":"APISID")),b)){var c=c?"SAPISIDHASH":"APISIDHASH",d=String(g.w.location.href);return d&&b&&c?[c,Dm(Am(d),b,a||null)].join(" "):null}return null};
Fm=function(){};
Hm=function(a){if(a instanceof Fm)return a;if("function"==typeof a.Ad)return a.Ad(!1);if(g.va(a)){var b=0,c=new Fm;c.next=function(){for(;;){if(b>=a.length)throw Gm;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
g.Im=function(a,b,c){if(g.va(a))try{(0,g.G)(a,b,c)}catch(d){if(d!==Gm)throw d;}else{a=Hm(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==Gm)throw d;}}};
Jm=function(a){if(g.va(a))return g.wb(a);a=Hm(a);var b=[];g.Im(a,function(a){b.push(a)});
return b};
Km=function(a,b){this.o={};this.g=[];this.sf=this.Aa=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof Km?(c=a.Tc(),d=a.ub()):(c=g.Xb(a),d=g.Wb(a));for(var e=0;e<c.length;e++)this.set(c[e],d[e])}};
Mm=function(a){var b,c;if(a.Aa!=a.g.length){for(b=c=0;c<a.g.length;){var d=a.g[c];Lm(a.o,d)&&(a.g[b++]=d);c++}a.g.length=b}if(a.Aa!=a.g.length){var e={};for(b=c=0;c<a.g.length;)d=a.g[c],Lm(e,d)||(a.g[b++]=d,e[d]=1),c++;a.g.length=b}};
Lm=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
Nm=function(a){if(a.ub&&"function"==typeof a.ub)return a.ub();if(g.u(a))return a.split("");if(g.va(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return g.Wb(a)};
Om=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(g.va(a)||g.u(a))(0,g.G)(a,b,void 0);else{if(a.Tc&&"function"==typeof a.Tc)var c=a.Tc();else if(a.ub&&"function"==typeof a.ub)c=void 0;else if(g.va(a)||g.u(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=g.Xb(a);for(var d=Nm(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}};
g.Pm=function(a,b){this.g=this.H=this.B="";this.C=null;this.D=this.o="";this.G=!1;var c;a instanceof g.Pm?(this.G=g.t(b)?b:a.G,Qm(this,a.B),this.H=a.H,g.Rm(this,a.g),g.Sm(this,a.C),this.o=a.o,Tm(this,a.A.clone()),this.D=a.D):a&&(c=g.mg(String(a)))?(this.G=!!b,Qm(this,c[1]||"",!0),this.H=Um(c[2]||""),g.Rm(this,c[3]||"",!0),g.Sm(this,c[4]),this.o=Um(c[5]||"",!0),Tm(this,c[6]||"",!0),this.D=Um(c[7]||"")):(this.G=!!b,this.A=new g.Vm(null,0,this.G))};
Qm=function(a,b,c){a.B=c?Um(b,!0):b;a.B&&(a.B=a.B.replace(/:$/,""))};
g.Rm=function(a,b,c){a.g=c?Um(b,!0):b;return a};
g.Sm=function(a,b){if(b){b=Number(b);if((0,window.isNaN)(b)||0>b)throw Error("Bad port number "+b);a.C=b}else a.C=null;return a};
Tm=function(a,b,c){b instanceof g.Vm?(a.A=b,Wm(a.A,a.G)):(c||(b=Xm(b,Ym)),a.A=new g.Vm(b,0,a.G))};
g.Zm=function(a,b,c){a.A.set(b,c);return a};
an=function(a,b,c){g.ua(c)||(c=[String(c)]);$m(a.A,b,c)};
bn=function(a){g.Zm(a,"zx",g.Xa());return a};
g.cn=function(a){return a instanceof g.Pm?a.clone():new g.Pm(a,void 0)};
dn=function(a,b,c,d){var e=new g.Pm(null,void 0);a&&Qm(e,a);b&&g.Rm(e,b);c&&g.Sm(e,c);d&&(e.o=d);return e};
Um=function(a,b){return a?b?(0,window.decodeURI)(a.replace(/%25/g,"%2525")):(0,window.decodeURIComponent)(a):""};
Xm=function(a,b,c){return g.u(a)?(a=(0,window.encodeURI)(a).replace(b,en),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null};
en=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)};
g.Vm=function(a,b,c){this.Aa=this.g=null;this.o=a||null;this.A=!!c};
fn=function(a){a.g||(a.g=new Km,a.Aa=0,a.o&&qg(a.o,function(b,c){var d=Ja(b);fn(a);a.o=null;var d=gn(a,d),e=a.g.get(d);e||a.g.set(d,e=[]);e.push(c);a.Aa=a.Aa+1}))};
hn=function(a,b){fn(a);b=gn(a,b);return Lm(a.g.o,b)};
$m=function(a,b,c){a.remove(b);0<c.length&&(a.o=null,a.g.set(gn(a,b),g.wb(c)),a.Aa=a.Aa+c.length)};
gn=function(a,b){var c=String(b);a.A&&(c=c.toLowerCase());return c};
Wm=function(a,b){b&&!a.A&&(fn(a),a.o=null,a.g.forEach(function(a,b){var c=b.toLowerCase();b!=c&&(this.remove(b),$m(this,c,a))},a));
a.A=b};
g.jn=function(a){g.I.call(this);this.o=a;this.g={}};
g.ln=function(a,b,c,d,e,f){g.ua(c)||(c&&(kn[0]=c.toString()),c=kn);for(var k=0;k<c.length;k++){var l=g.Je(b,c[k],d||a.handleEvent,e||!1,f||a.o||a);if(!l)break;a.g[l.key]=l}return a};
mn=function(a){g.Qb(a.g,function(a,c){this.g.hasOwnProperty(c)&&g.Ve(a)},a);
a.g={}};
g.on=function(a,b){return a.replace(nn,function(a,d){try{var c=dc(b,d);if(null==c)return a;c=c.toString();if(""==c||!Ia(g.Wa(c)))return(0,window.encodeURIComponent)(c).replace(/%2C/g,",")}catch(f){}return a})};
pn=function(a){g.we.call(this,a)};
qn=function(a){this.g=a};
sn=function(){var a=rn();a:{if(Zb(a.g,"disableExperiments")&&(a=a.g.disableExperiments,"boolean"==typeof a))break a;a=!1}return a};
tn=function(a){if(Zb(a.g,"forceExperimentIds")){a=a.g.forceExperimentIds;var b=[],c=0;g.ua(a)&&(0,g.G)(a,function(a){g.pa(a)&&(b[c++]=a)});
return b}return null};
un=function(){this.o=null;try{fm(void 0)}catch(a){}};
rn=function(){var a=vn;if(null==a.o){var b={},c=(new g.Pm(Td().location.href)).A;if(hn(c,"tcnfp"))try{b=g.bg(c.get("tcnfp"))}catch(d){}a.o=new qn(b)}return a.o};
wn=function(a,b,c,d){this.Ca=a;this.g=g.td(c||0,0,1);this.o=null!=d?d:!0};
xn=function(a){this.Ca=a;this.o=new Km;this.ye=this.g=null};
yn=function(a){var b=Math.random(),c=0,d=a.o.ub();(0,g.G)(d,function(a){c+=a.g},a);
var e=1<c?c:1;a.g=null;for(var f=0,k=0;k<d.length;++k)if(f+=d[k].g,f/e>=b){a.g=d[k];break}};
Cn=function(){this.o=null!=g.w.G_testRunner;this.g=new Km;vn.g()||(zn(this,"GvnExternalLayer",31061774,.01),zn(this,"GvnExternalLayer",31061775,.01),zn(this,"GvnExternalLayer",41351088,.01),zn(this,"GvnExternalLayer",41351089,.01),zn(this,"GvnExternalLayer",420706008,.05),zn(this,"GvnExternalLayer",420706009,.05),zn(this,"GvnExternalLayer",420706024,.01),zn(this,"GvnExternalLayer",420706025,.01),zn(this,"GvnExternalLayer",420706029,.01),zn(this,"GvnExternalLayer",41351073,.01),zn(this,"GvnExternalLayer",
41351074,.01),zn(this,"GvnExternalLayer",41351075,.01),zn(this,"GvnExternalLayer",634360101,0),zn(this,"GvnExternalLayer",634360102,0),zn(this,"GvnExternalLayer",21592080,.1),zn(this,"GvnExternalLayer",21592081,.1),zn(this,"GvnExternalLayer",21592082,.01),zn(this,"GvnExternalLayer",413051059,.05),zn(this,"GvnExternalLayer",413051060,.05),zn(this,"GvnExternalLayer",324123E3,.05),zn(this,"GvnExternalLayer",324123001,.05),zn(this,"GvnExternalLayer",420706068,.01),zn(this,"GvnExternalLayer",420706069,
.01),zn(this,"GvnExternalLayer",324123020,.01),zn(this,"GvnExternalLayer",324123021,.01),zn(this,"GvnExternalLayer",420706081,.01),zn(this,"GvnExternalLayer",420706082,.01),hi(!1)&&(Gh(K.top)?(zn(this,"ActiveViewExternalLayer",509445010,.01),zn(this,"ActiveViewExternalLayer",509445011,.01)):(zn(this,"ActiveViewExternalLayer",509445012,.01),zn(this,"ActiveViewExternalLayer",509445013,.01))));An(this);var a=rn();a=tn(a);null!=a&&(this.o=!1,Bn(this,a.map(String)))};
En=function(){Dn||(Dn=new Cn);return Dn};
zn=function(a,b,c,d){Ia(g.Wa(b))||(0,window.isNaN)(c)||0>=c||(c=new wn(c,0,d),Fn(a,b).o.set(c.getId(),c))};
An=function(a){sn()||(0,g.G)(a.g.ub(),function(a){yn(a)},a)};
Bn=function(a,b){(0,g.G)(b,function(a){var b=Number(a);a="FORCED_PUB_EXP_LAYER_"+a;(0,window.isNaN)(b)||0>=b||Ia(g.Wa(a))||(Fn(this,a).g=new wn(b,0,0,!0))},a)};
Gn=function(a,b){return a.o?!1:(0,g.gl)(a.g.ub(),function(a){return!!a.g&&a.g.getId()==b})};
Hn=function(){var a=En();if(a.o)return"";var b=[];(0,g.G)(a.g.ub(),function(a){(a=a.g)&&a.o&&b.push(a.getId())});
return b.sort().join(",")};
Fn=function(a,b){var c=a.g.get(b);null==c&&(c=new xn(b),a.g.set(b,c));return c};
Jn=function(){var a=[],b=En();(0,g.G)(In,function(c){(c=(c=Fn(b,c))?c.g:null)&&a.push(c.getId())});
return a};
Mn=function(a){try{var b=(new g.Pm(a)).g,b=b.replace(/^www./i,"");return(0,g.gl)(Kn,function(a){return Ln(a,b)})}catch(c){return!1}};
Ln=function(a,b){if(Ia(g.Wa(b)))return!1;a=a.toLowerCase();b=b.toLowerCase();return"*."==a.substr(0,2)?(a=a.substr(2),a.length>b.length?!1:b.substr(-a.length)==a&&(b.length==a.length||"."==b.charAt(b.length-a.length-1))):a==b};
Nn=function(a,b){return(new RegExp("^https?://([a-z0-9-]{1,63}\\.)*("+b.join("|").replace(/\./g,"\\.")+")(:[0-9]+)?([/?#]|$)","i")).test(a)};
Rn=function(a){try{a:{var b=a,c=void 0,d=b.length-11-2;if(!(-1==b.indexOf("URL_SIGNALS")||2048<=d||!c&&!window.Goog_AdSense_Lidar_getUrlSignalsArray))for(var c=c||window.Goog_AdSense_Lidar_getUrlSignalsArray(),d={},e=0;e<c.length;++e){d.URL_SIGNALS=c[e];var f=g.on(b,d);if(2048>f.length){a=f;break a}}a=b}}catch(n){}try{f=a;b=!1;Nn(f,On)?b=!1:null!=f&&Mn(f)?b=!0:"https:"==window.location.protocol&&(Nn(f,Pn)||vn.g())&&(b=!0);if(b){var k=new g.Pm(f);"https"==k.B?a=f:(Qm(k,"https"),a=k.toString())}else a=
f;var l=En(),m=!vn.g()||Gn(l,41351089),k=!1;vn.g()||!Gn(En(),634360102)||(k=!0);Qn.hG(a,m,k)}catch(n){}};
g.Un=function(a,b,c){g.pa(a)?(this.date=Sn(a,b||0,c||1),Tn(this,c||1)):g.ya(a)?(this.date=Sn(a.getFullYear(),a.getMonth(),a.getDate()),Tn(this,a.getDate())):(this.date=new Date((0,g.F)()),a=this.date.getDate(),this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),Tn(this,a))};
Sn=function(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b};
g.Vn=function(a){a=a.getTimezoneOffset();if(0==a)a="Z";else{var b=Math.abs(a)/60,c=Math.floor(b),b=60*(b-c);a=(0<a?"-":"+")+g.Va(c,2)+":"+g.Va(b,2)}return a};
Tn=function(a,b){a.getDate()!=b&&a.date.setUTCHours(a.date.getUTCHours()+(a.getDate()<b?1:-1))};
Wn=function(){this.g=null;this.A="";this.o=null};
Yn=function(){var a="h."+Xn.A;null!=Xn.o&&(a+="/n."+Xn.o,null!=Xn.g&&(a+="/"+Xn.g));return a};
Zn=function(){this.g=.01>Math.random();this.o=Math.floor(4503599627370496*Math.random())};
bo=function(a,b,c){if(a.g||c){b=b||{};b.lid=43;b.sdkv=Yn();c=Hn();Ia(g.Wa(c))||(b.e=c);b=$n(a,b);var d=new g.Pm("http://pagead2.googlesyndication.com/pagead/gen_204");g.Qb(b,function(a,b){g.Zm(d,b,null!=a?"boolean"==typeof a?a?"t":"f":""+a:"")},a);
a=ao();Qm(d,a.B);Rn(d.toString())}};
$n=function(a,b){b.id="ima_html5";var c=ao();b.c=a.o;b.domain=c.g;return b};
ao=function(){var a=Td(),b=window.document;return new g.Pm(a.parent==a?a.location.href:b.referrer)};
co=function(){g.$e.call(this);this.g=new Km;this.o=null;this.A=new g.jn(this);g.J(this,this.A);this.C=null;this.B=-1};
fo=function(){null!=eo||(eo=new co);return eo};
go=function(){fo().dispatchEvent(new pn("measurable_impression"))};
ho=function(){fo().dispatchEvent(new pn("viewable_impression"))};
io=function(){fo().dispatchEvent(new pn("externalActivityEvent"))};
jo=function(){g.$e.call(this);this.g=null;this.B=new g.jn(this);g.J(this,this.B);this.G=new Km;this.D=new Km;this.o=!1;this.A=null};
lo=function(){null!=ko||(ko=new jo);return ko};
mo=function(a){if(g.wa(window.Goog_AdSense_Lidar_getUrlSignalsArray)){var b={};b.pageSignals=window.Goog_AdSense_Lidar_getUrlSignalsArray();a.g.send("activityMonitor","pageSignals",b)}};
no=function(){if(!(g.w.ima&&g.w.ima.video&&g.w.ima.video.client&&g.w.ima.video.client.tagged)){g.x("ima.video.client.sdkTag",!0,void 0);var a=g.w.document,b=a.createElement("script"),c=a.location.protocol;"http:"!=c&&"https:"!=c&&(c="");b.src=c+"//s0.2mdn.net/instream/video/client.js";b.async=!0;b.type="text/javascript";a=a.getElementsByTagName("script")[0];a.parentNode.insertBefore(b,a)}};
oo=function(a,b,c){var d=b?a.D.get(b):vn.A;a={};null!=c&&(a.fullscreen=c);c="";try{c=uh(function(){return d},a)}catch(e){c="sdktle;"+Sa(e.name,12)+";"+Sa(e.message,40)}return c};
g.po=function(a){this.g="number"==typeof a?0<a?1:0>a?-1:null:null==a?null:a?-1:1};
g.qo=function(a,b){var c=a.o(b);return-1==(0==c?a.g:c)?"rtl":"ltr"};
ro=function(){throw Error("Do not instantiate directly");};
so=function(){ro.call(this)};
uo=function(a,b){var c="key_"+a+":"+b,d=to[c];if(void 0===d||0>d)to[c]=0;else if(0==d)throw Error('Encountered two active delegates with the same priority ("'+a+":"+b+'").');};
g.vo=function(a){if(a.classList)return a.classList;a=a.className;return g.u(a)&&a.match(/\S+/g)||[]};
g.wo=function(a,b){return a.classList?a.classList.contains(b):g.ob(g.vo(a),b)};
g.L=function(a,b){a.classList?a.classList.add(b):g.wo(a,b)||(a.className+=0<a.className.length?" "+b:b)};
g.xo=function(a,b){if(a.classList)(0,g.G)(b,function(b){g.L(a,b)});
else{var c={};(0,g.G)(g.vo(a),function(a){c[a]=!0});
(0,g.G)(b,function(a){c[a]=!0});
a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}};
g.M=function(a,b){a.classList?a.classList.remove(b):g.wo(a,b)&&(a.className=(0,g.fe)(g.vo(a),function(a){return a!=b}).join(" "))};
g.yo=function(a,b){a.classList?(0,g.G)(b,function(b){g.M(a,b)}):a.className=(0,g.fe)(g.vo(a),function(a){return!g.ob(b,a)}).join(" ")};
g.N=function(a,b,c){c?g.L(a,b):g.M(a,b)};
g.zo=function(a,b){var c=!g.wo(a,b);g.N(a,b,c)};
Ao=function(){if(!g.Dc)return!1;try{return new window.ActiveXObject("MSXML2.DOMDocument"),!0}catch(a){return!1}};
g.Co=function(a){if("undefined"!=typeof window.DOMParser)return(new window.DOMParser).parseFromString(a,"application/xml");if(Bo){var b=new window.ActiveXObject("MSXML2.DOMDocument");b.resolveExternals=!1;b.validateOnParse=!1;try{b.setProperty("ProhibitDTD",!0),b.setProperty("MaxXMLSize",2048),b.setProperty("MaxElementDepth",256)}catch(c){}b.loadXML(a);return b}throw Error("Your browser does not support loading xml documents");};
g.Do=function(a,b,c){g.I.call(this);this.Ca=null;this.A=!1;this.C=a;this.B=c;this.g=b||window;this.o=(0,g.A)(this.ax,this)};
Eo=function(a){a=a.g;return a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||null};
Fo=function(a){a=a.g;return a.cancelAnimationFrame||a.cancelRequestAnimationFrame||a.webkitCancelRequestAnimationFrame||a.mozCancelRequestAnimationFrame||a.oCancelRequestAnimationFrame||a.msCancelRequestAnimationFrame||null};
g.O=function(a,b,c){g.I.call(this);this.g=a;this.B=b||0;this.o=c;this.A=(0,g.A)(this.Sp,this)};
g.Go=function(a){a.stop();a.Sp()};
g.Ho=function(a){a.isActive()&&g.Go(a)};
g.Ko=function(){g.Io||(g.Io=new g.O(function(){Jo()},20));
var a=g.Io;a.isActive()||a.start()};
Jo=function(){var a=(0,g.F)();g.Qb(g.Lo,function(b){b.hC(a)});
g.cc(g.Lo)||g.Ko()};
g.Mo=function(){};
g.No=function(a){g.$e.call(this);this.W=a||g.Hd();this.Ca=null;this.Mf=!1;this.o=null;this.C=void 0;this.D=this.H=this.K=null};
Oo=function(a,b){a.H&&(0,g.G)(a.H,b,void 0)};
Po=function(){};
Ro=function(a){var b;(b=a.g)||(b={},Qo(a)&&(b[0]=!0,b[1]=!0),b=a.g=b);return b};
So=function(){};
Uo=function(a){return(a=Qo(a))?new window.ActiveXObject(a):new window.XMLHttpRequest};
Qo=function(a){if(!a.o&&"undefined"==typeof window.XMLHttpRequest&&"undefined"!=typeof window.ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new window.ActiveXObject(d),a.o=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.o};
Vo=function(a){g.$e.call(this);this.headers=new Km;this.O=a||null;this.o=!1;this.K=this.g=null;this.ba="";this.B=0;this.C="";this.A=this.X=this.G=this.T=!1;this.H=0;this.D=null;this.da="";this.aa=this.W=!1};
Wo=function(a){return g.Dc&&g.uc(9)&&g.pa(a.timeout)&&g.t(a.ontimeout)};
Xo=function(a){return"content-type"==a.toLowerCase()};
$o=function(a,b){a.o=!1;a.g&&(a.A=!0,a.g.abort(),a.A=!1);a.C=b;a.B=5;Yo(a);Zo(a)};
Yo=function(a){a.T||(a.T=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))};
dp=function(a){if(a.o&&"undefined"!=typeof ap)if(a.K[1]&&4==bp(a)&&2==a.getStatus())a.getStatus();else if(a.G&&4==bp(a))g.Vf(a.Vp,0,a);else if(a.dispatchEvent("readystatechange"),4==bp(a)){a.getStatus();a.o=!1;try{var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=g.mg(String(a.ba))[1]||null;if(!f&&g.w.self&&g.w.self.location)var k=g.w.self.location.protocol,f=k.substr(0,k.length-1);
e=!cp.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");else{a.B=6;try{var l=2<bp(a)?a.g.statusText:""}catch(m){l=""}a.C=l+" ["+a.getStatus()+"]";Yo(a)}}finally{Zo(a)}}};
Zo=function(a,b){if(a.g){ep(a);var c=a.g,d=a.K[0]?g.qa:null;a.g=null;a.K=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}};
ep=function(a){a.g&&a.aa&&(a.g.ontimeout=null);g.pa(a.D)&&(g.w.clearTimeout(a.D),a.D=null)};
bp=function(a){return a.g?a.g.readyState:0};
fp=function(a){try{return a.g?a.g.responseText:""}catch(b){return""}};
hp=function(a){this.g=new Km;a&&gp(this,a)};
ip=function(a){var b=typeof a;return"object"==b&&a||"function"==b?"o"+g.Ba(a):b.substr(0,1)+a};
gp=function(a,b){for(var c=Nm(b),d=c.length,e=0;e<d;e++){var f=c[e];a.g.set(ip(f),f)}};
jp=function(){this.g=(0,g.F)()};
kp=function(a,b){this.g=a;this.o=b};
lp=function(a,b,c,d,e,f,k,l){this.g=a;this.G=b;this.A=c;this.C=d;this.B=e;this.D=f;this.o=k;this.H=l};
mp=function(a,b){if(0==b)return a.g;if(1==b)return a.o;var c=vd(a.g,a.A,b),d=vd(a.A,a.B,b),e=vd(a.B,a.o,b),c=vd(c,d,b),d=vd(d,e,b);return vd(c,d,b)};
np=function(a,b){var c=(b-a.g)/(a.o-a.g);if(0>=c)return 0;if(1<=c)return 1;for(var d=0,e=1,f=0,k=0;8>k;k++){var f=mp(a,c),l=(mp(a,c+1E-6)-f)/1E-6;if(1E-6>Math.abs(f-b))return c;if(1E-6>Math.abs(l))break;else f<b?d=c:e=c,c-=(f-b)/l}for(k=0;1E-6<Math.abs(f-b)&&8>k;k++)f<b?(d=c,c=(c+e)/2):(e=c,c=(c+d)/2),f=mp(a,c);return c};
op=function(a,b,c,d){this.B=a;this.C=b;this.g=this.A=a;this.D=c||0;this.G=d||2};
pp=function(a,b,c,d,e){this.g=a;this.A=c;this.H=d;this.G=e||1;this.C=45E3;this.B=new g.jn(this);a=this.o=new g.Uf;a.o=250;a.od&&a.enabled?(a.stop(),a.start()):a.od&&a.stop()};
rp=function(a,b,c){a.tg=1;a.Ue=bn(b.clone());a.Wf=c;a.D=!0;qp(a,null)};
sp=function(a,b,c,d,e){a.tg=1;a.Ue=bn(b.clone());a.Wf=null;a.D=c;e&&(a.Bt=!1);qp(a,d)};
qp=function(a,b){a.Zh=(0,g.F)();tp(a);a.mf=a.Ue.clone();an(a.mf,"t",a.G);a.ji=0;a.dc=a.g.Yk(a.g.ci()?b:null);0<a.Al&&(a.Oj=new g.Fk((0,g.A)(a.ru,a,a.dc),a.Al));a.B.ga(a.dc,"readystatechange",a.SF);var c=a.Kf?g.ec(a.Kf):{};a.Wf?(a.jk="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.dc.send(a.mf,a.jk,a.Wf,c)):(a.jk="GET",a.Bt&&!g.Sd&&(c.Connection="close"),a.dc.send(a.mf,a.jk,null,c));a.g.Ld(1)};
Bp=function(a,b,c){for(var d=!0;!a.zf&&a.ji<c.length;){var e=up(a,c);if(e==vp){4==b&&(a.Lf=4,wp(),d=!1);break}else if(e==xp){a.Lf=4;wp();d=!1;break}else yp(a,e)}4==b&&0==c.length&&(a.Lf=1,wp(),d=!1);a.Nd=a.Nd&&d;d||(zp(a),Ap(a))};
up=function(a,b){var c=a.ji,d=b.indexOf("\n",c);if(-1==d)return vp;c=Number(b.substring(c,d));if((0,window.isNaN)(c))return xp;d+=1;if(d+c>b.length)return vp;var e=b.substr(d,c);a.ji=d+c;return e};
Ep=function(a,b){a.Zh=(0,g.F)();tp(a);var c=b?window.location.hostname:"";a.mf=a.Ue.clone();g.Zm(a.mf,"DOMAIN",c);g.Zm(a.mf,"t",a.G);try{a.Od=new window.ActiveXObject("htmlfile")}catch(n){zp(a);a.Lf=7;wp();Ap(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var k=c.charAt(f);if("<"==k)e+="\\x3c";else if(">"==k)e+="\\x3e";else{var l=k;if(l in Cp)k=Cp[l];else if(l in Dp)k=Cp[l]=Dp[l];else{var m=l.charCodeAt(0);if(31<m&&127>m)k=l;else{if(256>m){if(k="\\x",16>m||256<m)k+="0"}else k=
"\\u",4096>m&&(k+="0");k+=m.toString(16).toUpperCase()}k=Cp[l]=k}e+=k}}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=sd(cd("b/12014412"),d);a.Od.open();a.Od.write(g.pd(c));a.Od.close();a.Od.parentWindow.m=(0,g.A)(a.gF,a);a.Od.parentWindow.d=(0,g.A)(a.Ns,a,!0);a.Od.parentWindow.rpcClose=(0,g.A)(a.Ns,a,!1);c=a.Od.createElement("DIV");a.Od.parentWindow.document.body.appendChild(c);d=md(a.mf.toString());d=Ra(jd(d));d=sd(cd("b/12014412"),'<iframe src="'+d+'"></iframe>');c.innerHTML=
g.pd(d);a.g.Ld(1)};
tp=function(a){a.On=(0,g.F)()+a.C;Fp(a,a.C)};
Fp=function(a,b){if(null!=a.Qg)throw Error("WatchDog timer not null");a.Qg=Gp((0,g.A)(a.qF,a),b)};
Hp=function(a){a.Qg&&(g.w.clearTimeout(a.Qg),a.Qg=null)};
Ap=function(a){a.g.Tp()||a.zf||a.g.Hj(a)};
zp=function(a){Hp(a);g.ue(a.Oj);a.Oj=null;a.o.stop();mn(a.B);if(a.dc){var b=a.dc;a.dc=null;b.abort();b.dispose()}a.Od&&(a.Od=null)};
yp=function(a,b){try{a.g.Hs(a,b),a.g.Ld(4)}catch(c){}};
Jp=function(a,b,c,d,e){if(0==d)c(!1);else{var f=e||0;d--;Ip(a,b,function(e){e?c(!0):g.w.setTimeout(function(){Jp(a,b,c,d,f)},f)})}};
Ip=function(a,b,c){var d=new window.Image;d.onload=function(){try{Kp(d),c(!0)}catch(e){}};
d.onerror=function(){try{Kp(d),c(!1)}catch(e){}};
d.onabort=function(){try{Kp(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{Kp(d),c(!1)}catch(e){}};
g.w.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a};
Kp=function(a){a.onload=null;a.onerror=null;a.onabort=null;a.ontimeout=null};
Lp=function(a){this.g=a;this.o=new kp};
Np=function(a){var b=Mp(a.g,a.eh,"/mail/images/cleardot.gif");bn(b);Jp(b.toString(),5E3,(0,g.A)(a.zw,a),3,2E3);a.Ld(1)};
Pp=function(a){var b=a.g.L;if(null!=b)wp(),b?(wp(),Op(a.g,a,!1)):(wp(),Op(a.g,a,!0));else if(a.bd=new pp(a,0,void 0,void 0,void 0),a.bd.Kf=a.xl,b=a.g,b=Mp(b,b.ci()?a.vh:null,a.zl),wp(),!g.Dc||g.wc(10))an(b,"TYPE","xmlhttp"),sp(a.bd,b,!1,a.vh,!1);else{an(b,"TYPE","html");var c=a.bd;a=!!a.vh;c.tg=3;c.Ue=bn(b.clone());Ep(c,a)}};
Qp=function(a,b,c,d){this.H=a||null;this.g=1;this.o=[];this.B=[];this.C=new kp;this.K=b||null;this.L=null!=c?c:null;this.D=d||!1};
Rp=function(a,b){this.g=a;this.map=b;this.context=null};
Sp=function(a){g.we.call(this,"statevent",a)};
Tp=function(a,b){g.we.call(this,"timingevent",a);this.size=b};
Up=function(a){g.we.call(this,"serverreachability",a)};
Yp=function(a){Vp(a);if(3==a.g){var b=a.Th++,c=a.Xi.clone();g.Zm(c,"SID",a.A);g.Zm(c,"RID",b);g.Zm(c,"TYPE","terminate");Wp(a,c);b=new pp(a,0,a.A,b,void 0);b.tg=2;b.Ue=bn(c.clone());(new window.Image).src=b.Ue;b.Zh=(0,g.F)();tp(b)}Xp(a)};
$p=function(a){a.Lw(1,0);a.Xi=Mp(a,null,a.wl);Zp(a)};
Vp=function(a){a.Qe&&(a.Qe.abort(),a.Qe=null);a.Ib&&(a.Ib.cancel(),a.Ib=null);a.re&&(g.w.clearTimeout(a.re),a.re=null);aq(a);a.Jc&&(a.Jc.cancel(),a.Jc=null);a.Re&&(g.w.clearTimeout(a.Re),a.Re=null)};
bq=function(a,b){if(0==a.g)throw Error("Invalid operation: sending map when state is closed");a.o.push(new Rp(a.XB++,b));2!=a.g&&3!=a.g||Zp(a)};
Zp=function(a){a.Jc||a.Re||(a.Re=Gp((0,g.A)(a.Ls,a),0),a.oh=0)};
eq=function(a,b){if(1==a.g){if(!b){a.Th=Math.floor(1E5*Math.random());var c=a.Th++,d=new pp(a,0,"",c,void 0);d.Kf=null;var e=cq(a),f=a.Xi.clone();g.Zm(f,"RID",c);a.H&&g.Zm(f,"CVER",a.H);Wp(a,f);rp(d,f,e);a.Jc=d;a.g=2}}else 3==a.g&&(b?dq(a,b):0==a.o.length||a.Jc||dq(a))};
dq=function(a,b){if(b)if(6<a.Af){a.o=a.B.concat(a.o);a.B.length=0;var c=a.Th-1;var d=cq(a)}else c=b.H,d=b.Wf;else c=a.Th++,d=cq(a);var e=a.Xi.clone();g.Zm(e,"SID",a.A);g.Zm(e,"RID",c);g.Zm(e,"AID",a.xg);Wp(a,e);c=new pp(a,0,a.A,c,a.oh+1);c.Kf=null;c.setTimeout(Math.round(1E4)+Math.round(1E4*Math.random()));a.Jc=c;rp(c,e,d)};
Wp=function(a,b){if(a.hc){var c=a.hc.Hp(a);c&&g.Qb(c,function(a,c){g.Zm(b,c,a)})}};
cq=function(a){var b=Math.min(a.o.length,1E3),c=["count="+b];if(6<a.Af&&0<b){var d=a.o[0].g;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.o[e].g,k=a.o[e].map,f=6>=a.Af?e:f-d;try{g.Qb(k,function(a,b){c.push("req"+f+"_"+b+"="+(0,window.encodeURIComponent)(a))})}catch(l){c.push("req"+f+"_type="+(0,window.encodeURIComponent)("_badmap"))}}a.B=a.B.concat(a.o.splice(0,b));
return c.join("&")};
fq=function(a){a.Ib||a.re||(a.G=1,a.re=Gp((0,g.A)(a.Ks,a),0),a.lg=0)};
hq=function(a){if(a.Ib||a.re||3<=a.lg)return!1;a.G++;a.re=Gp((0,g.A)(a.Ks,a),gq(a,a.lg));a.lg++;return!0};
Op=function(a,b,c){a.ik=c;a.Fd=b.ue;a.D||$p(a)};
aq=function(a){null!=a.Cf&&(g.w.clearTimeout(a.Cf),a.Cf=null)};
gq=function(a,b){var c=5E3+Math.floor(1E4*Math.random());a.isActive()||(c*=2);return c*b};
jq=function(a,b){if(2==b||9==b){var c=null;a.hc&&(c=null);var d=(0,g.A)(a.sG,a);c||(c=new g.Pm("//www.google.com/images/cleardot.gif"),bn(c));Ip(c.toString(),1E4,d)}else wp();iq(a,b)};
iq=function(a,b){a.g=0;a.hc&&a.hc.So(a,b);Xp(a);Vp(a)};
Xp=function(a){a.g=0;a.Fd=-1;if(a.hc)if(0==a.B.length&&0==a.o.length)a.hc.Uk(a);else{var b=g.wb(a.B),c=g.wb(a.o);a.B.length=0;a.o.length=0;a.hc.Uk(a,b,c)}};
Mp=function(a,b,c){var d=g.cn(c);if(""!=d.g)b&&g.Rm(d,b+"."+d.g),g.Sm(d,d.C);else var e=window.location,d=dn(e.protocol,b?b+"."+e.hostname:e.hostname,e.port,c);a.lh&&g.Qb(a.lh,function(a,b){g.Zm(d,b,a)});
g.Zm(d,"VER",a.Af);Wp(a,d);return d};
Gp=function(a,b){if(!g.wa(a))throw Error("Fn must not be null and must be a function");return g.w.setTimeout(function(){a()},b)};
wp=function(){kq.dispatchEvent(new Sp(kq))};
lq=function(){};
g.mq=function(a,b,c,d,e,f){a=a.clone();b=b.clone();var k=0;if(d||0!=c)c&4?a.x-=b.width+(d?d.right:0):c&2?a.x-=b.width/2:d&&(a.x+=d.left),c&1?a.y-=b.height+(d?d.bottom:0):d&&(a.y+=d.top);if(f){if(e){k=a;c=b;d=0;65==(f&65)&&(k.x<e.left||k.x>=e.right)&&(f&=-2);132==(f&132)&&(k.y<e.top||k.y>=e.bottom)&&(f&=-5);k.x<e.left&&f&1&&(k.x=e.left,d|=1);if(f&16){var l=k.x;k.x<e.left&&(k.x=e.left,d|=4);k.x+c.width>e.right&&(c.width=Math.min(e.right-k.x,l+c.width-e.left),c.width=Math.max(c.width,0),d|=4)}k.x+c.width>
e.right&&f&1&&(k.x=Math.max(e.right-c.width,e.left),d|=1);f&2&&(d|=(k.x<e.left?16:0)|(k.x+c.width>e.right?32:0));k.y<e.top&&f&4&&(k.y=e.top,d|=2);f&32&&(l=k.y,k.y<e.top&&(k.y=e.top,d|=8),k.y+c.height>e.bottom&&(c.height=Math.min(e.bottom-k.y,l+c.height-e.top),c.height=Math.max(c.height,0),d|=8));k.y+c.height>e.bottom&&f&4&&(k.y=Math.max(e.bottom-c.height,e.top),d|=2);f&8&&(d|=(k.y<e.top?64:0)|(k.y+c.height>e.bottom?128:0));e=d}else e=256;k=e}e=new g.Gg(0,0,0,0);e.left=a.x;e.top=a.y;e.width=b.width;
e.height=b.height;return{rect:e,status:k}};
g.nq=function(a){g.I.call(this);this.Mc=1;this.A=[];this.B=0;this.g=[];this.o={};this.C=!!a};
oq=function(a,b,c){g.tf(function(){a.apply(b,c)})};
g.pq=function(a){this.g=a};
qq=function(a){this.g=a};
rq=function(a){this.data=a};
sq=function(a){return!g.t(a)||a instanceof rq?a:new rq(a)};
tq=function(a){this.g=a};
g.uq=function(a){var b=a.creation;a=a.expiration;return!!a&&a<(0,g.F)()||!!b&&b>(0,g.F)()};
g.vq=function(a){this.g=a};
wq=function(){};
xq=function(){};
yq=function(a){this.g=a};
zq=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.g=a};
Aq=function(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.g=a};
Bq=function(a,b){this.o=a;this.g=b+"::"};
g.Cq=function(a){var b=new zq;return b.isAvailable()?a?new Bq(b,a):b:null};
Dq=function(a,b){this.Mc=a;this.g=b};
Eq=function(a){this.g=[];if(a)a:{if(a instanceof Eq){var b=a.Tc();a=a.ub();if(0>=this.Sc()){for(var c=this.g,d=0;d<b.length;d++)c.push(new Dq(b[d],a[d]));break a}}else b=g.Xb(a),a=g.Wb(a);for(d=0;d<b.length;d++)Fq(this,b[d],a[d])}};
Fq=function(a,b,c){var d=a.g;d.push(new Dq(b,c));b=d.length-1;a=a.g;for(c=a[b];0<b;)if(d=b-1>>1,a[d].Mc>c.Mc)a[b]=a[d],b=d;else break;a[b]=c};
Gq=function(){Eq.call(this)};
Hq=function(a,b){this.C=[];this.T=a;this.O=b||null;this.B=this.g=!1;this.A=void 0;this.K=this.W=this.G=!1;this.D=0;this.o=null;this.H=0};
Jq=function(a,b,c){a.g=!0;a.A=c;a.B=!b;Iq(a)};
Lq=function(a){if(a.g){if(!a.K)throw new Kq;a.K=!1}};
Mq=function(a,b,c){a.C.push([b,c,void 0]);a.g&&Iq(a)};
Nq=function(a){return(0,g.gl)(a.C,function(a){return g.wa(a[1])})};
Iq=function(a){if(a.D&&a.g&&Nq(a)){var b=a.D,c=Oq[b];c&&(g.w.clearTimeout(c.Ca),delete Oq[b]);a.D=0}a.o&&(a.o.H--,delete a.o);for(var b=a.A,d=c=!1;a.C.length&&!a.G;){var e=a.C.shift(),f=e[0],k=e[1],e=e[2];if(f=a.B?k:f)try{var l=f.call(e||a.O,b);g.t(l)&&(a.B=a.B&&(l==b||a.isError(l)),a.A=b=l);if(wf(b)||"function"===typeof g.w.Promise&&b instanceof g.w.Promise)d=!0,a.G=!0}catch(m){b=m,a.B=!0,Nq(a)||(c=!0)}}a.A=b;d&&(l=(0,g.A)(a.L,a,!0),d=(0,g.A)(a.L,a,!1),b instanceof Hq?(Mq(b,l,d),b.W=!0):b.then(l,
d));c&&(b=new Pq(b),Oq[b.Ca]=b,a.D=b.Ca)};
Kq=function(){Ga.call(this)};
Qq=function(){Ga.call(this)};
Pq=function(a){this.Ca=g.w.setTimeout((0,g.A)(this.o,this),0);this.g=a};
Sq=function(a){var b=a;a=Rq;this.g=null;b||(b=[]);this.C=-1;this.o=b;a:{if(this.o.length){var b=this.o.length-1,c=this.o[b];if(c&&"object"==typeof c&&!g.ua(c)&&!(Yc&&c instanceof window.Uint8Array)){this.B=b- -1;this.A=c;break a}}this.B=Number.MAX_VALUE}if(a)for(b=0;b<a.length;b++)c=a[b],c<this.B?(c+=-1,this.o[c]=this.o[c]||Rc):this.A[c]=this.A[c]||Rc};
Tq=function(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}};
g.Vq=function(a){Tq(g.Uq,arguments)};
g.P=function(a,b){return a in g.Uq?g.Uq[a]:b};
g.Q=function(a,b,c){b=void 0===b?{}:b;a=(a=a in Wq?Wq[a]:c)||"";c={};for(var d in b)c.Lj=d,a=a.replace(new RegExp("\\$"+c.Lj,"gi"),function(a){return function(){return b[a.Lj]}}(c)),c={Lj:c.Lj};
return a};
g.Xq=function(a){Tq(Wq,arguments)};
g.Yq=function(){g.Xq({YTP_TRANSLATE_MENU_ITEM:"Translate captions",YTP_CONTRIBUTE_MENU_ITEM:"Add subtitles/CC",YTP_ASR_SETTINGS_LABEL:"Automatic Captions",YTP_LANGUAGE_OFF:"Off",YTP_FONT_FAMILY:"Font family",YTP_FONT_SIZE:"Font size",YTP_FONT_COLOR:"Font color",YTP_FONT_OPACITY:"Font opacity",YTP_BACKGROUND_COLOR:"Background color",YTP_BACKGROUND_OPACITY:"Background opacity",YTP_WINDOW_COLOR:"Window color",YTP_WINDOW_OPACITY:"Window opacity",YTP_COLOR_WHITE:"White",YTP_COLOR_YELLOW:"Yellow",YTP_COLOR_GREEN:"Green",
YTP_COLOR_CYAN:"Cyan",YTP_COLOR_BLUE:"Blue",YTP_COLOR_MAGENTA:"Magenta",YTP_COLOR_RED:"Red",YTP_COLOR_BLACK:"Black",YTP_FONT_FAMILY_MONO_SERIF:"Monospaced Serif",YTP_FONT_FAMILY_PROP_SERIF:"Proportional Serif",YTP_FONT_FAMILY_MONO_SANS:"Monospaced Sans-Serif",YTP_FONT_FAMILY_PROP_SANS:"Proportional Sans-Serif",YTP_FONT_FAMILY_CASUAL:"Casual",YTP_FONT_FAMILY_CURSIVE:"Cursive",YTP_FONT_FAMILY_SMALL_CAPS:"Small Capitals",YTP_CHAR_EDGE_STYLE:"Character edge style",YTP_EDGE_STYLE_NONE:"None",YTP_EDGE_STYLE_RAISED:"Raised",
YTP_EDGE_STYLE_DEPRESSED:"Depressed",YTP_EDGE_STYLE_OUTLINE:"Outline",YTP_EDGE_STYLE_DROP_SHADOW:"Drop Shadow",YTP_CLICK_FOR_SETTINGS:"Click $GEAR_ICON for settings"})};
g.$q=function(){return g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-cast-desktop-on"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},J:[{F:"path",Da:!0,P:{d:"M7,24 L7,27 L10,27 C10,25.34 8.66,24 7,24 L7,24 Z M7,20 L7,22 C9.76,22 12,24.24 12,27 L14,27 C14,23.13 10.87,20 7,20 L7,20 Z M25,13 L11,13 L11,14.63 C14.96,15.91 18.09,19.04 19.37,23 L25,23 L25,13 L25,13 Z M7,16 L7,18 C11.97,18 16,22.03 16,27 L18,27 C18,20.92 13.07,16 7,16 L7,16 Z M27,9 L9,9 C7.9,9 7,9.9 7,11 L7,14 L9,14 L9,11 L27,11 L27,25 L20,25 L20,27 L27,27 C28.1,27 29,26.1 29,25 L29,11 C29,9.9 28.1,9 27,9 L27,9 Z",
fill:"#fff"}}]}};
g.ar=function(){return g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-chevron-back"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 32 32",width:"100%"},J:[{F:"path",P:{d:"M 19.41,20.09 14.83,15.5 19.41,10.91 18,9.5 l -6,6 6,6 z",fill:"#fff"}}]}};
g.br=function(){return g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-chevron-forward"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 32 32",width:"100%"},J:[{F:"path",P:{d:"m 12.59,20.34 4.58,-4.59 -4.58,-4.59 1.41,-1.41 6,6 -6,6 z",fill:"#fff"}}]}};
cr=function(){return g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-clip-clear"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 14 14",width:"100%"},J:[{F:"path",P:{d:"M14,14 L14,0 L0,0 L0,14 L14,14 Z"}},{F:"path",P:{d:"M7.15,8.35 L9.25,10.45 L10.65,9.05 L8.55,6.95 L10.7,4.8 L9.3,3.4 L7.15,5.55 L5,3.4 L3.6,4.8 L5.75,6.95 L3.65,9.05 L5.05,10.45 L7.15,8.35 Z",fill:"#fff"}}]}};
dr=function(){return g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-clip-end"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 14 14",width:"100%"},J:[{F:"path",Da:!0,P:{d:"M2,14 L5,11 L5,3 L2,0 L9,0 L9,14 L2,14 L2,14 Z",fill:"#eaeaea"}}]}};
er=function(){return g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-clip-start"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 14 14",width:"100%"},J:[{F:"path",Da:!0,P:{d:"M12,14 L9,11 L9,3 L12,0 L5,0 L5,14 L12,14 Z",fill:"#eaeaea"}}]}};
g.fr=function(){return g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-close"]}:{F:"svg",P:{height:"100%",viewBox:"0 0 24 24",width:"100%"},J:[{F:"path",P:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",fill:"#fff"}}]}};
gr=function(){return g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-closed-captioning"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},J:[{F:"path",Da:!0,P:{d:"M11,11 C9.89,11 9,11.9 9,13 L9,23 C9,24.1 9.89,25 11,25 L25,25 C26.1,25 27,24.1 27,23 L27,13 C27,11.9 26.1,11 25,11 L11,11 Z M17,17 L15.5,17 L15.5,16.5 L13.5,16.5 L13.5,19.5 L15.5,19.5 L15.5,19 L17,19 L17,20 C17,20.55 16.55,21 16,21 L13,21 C12.45,21 12,20.55 12,20 L12,16 C12,15.45 12.45,15 13,15 L16,15 C16.55,15 17,15.45 17,16 L17,17 L17,17 Z M24,17 L22.5,17 L22.5,16.5 L20.5,16.5 L20.5,19.5 L22.5,19.5 L22.5,19 L24,19 L24,20 C24,20.55 23.55,21 23,21 L20,21 C19.45,21 19,20.55 19,20 L19,16 C19,15.45 19.45,15 20,15 L23,15 C23.55,15 24,15.45 24,16 L24,17 L24,17 Z",
fill:"#fff"}}]}};
hr=function(){return g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-forward-five-seconds"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},J:[{F:"path",Da:!0,M:"ytp-svg-fill",P:{d:"m 10,19 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 h -2 c 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 0,-3.3 2.7,-6 6,-6 v 4 l 5,-5 -5,-5 v 4 c -4.4,0 -8,3.6 -8,8 z m 6.7,.9 .2,-2.2 h 2.4 v .7 h -1.7 l -0.1,.9 c 0,0 .1,0 .1,-0.1 0,-0.1 .1,0 .1,-0.1 0,-0.1 .1,0 .2,0 h .2 c .2,0 .4,0 .5,.1 .1,.1 .3,.2 .4,.3 .1,.1 .2,.3 .3,.5 .1,.2 .1,.4 .1,.6 0,.2 0,.4 -0.1,.5 -0.1,.1 -0.1,.3 -0.3,.5 -0.2,.2 -0.3,.2 -0.5,.3 C 18.3,22 18.1,22 17.9,22 17.7,22 17.5,22 17.4,21.9 17.3,21.8 17.1,21.8 16.9,21.7 16.7,21.6 16.7,21.5 16.6,21.3 16.5,21.1 16.5,21 16.5,20.8 h .8 c 0,.2 .1,.3 .2,.4 .1,.1 .2,.1 .4,.1 .1,0 .2,0 .3,-0.1 L 18.4,21 c 0,0 .1,-0.2 .1,-0.3 v -0.6 l -0.1,-0.2 -0.2,-0.2 c 0,0 -0.2,-0.1 -0.3,-0.1 h -0.2 c 0,0 -0.1,0 -0.2,.1 -0.1,.1 -0.1,0 -0.1,.1 0,.1 -0.1,.1 -0.1,.1 h -0.6 z"}}]}};
ir=function(){return g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-link"]}:{F:"svg",P:{height:"100%",viewBox:"0 0 36 36",width:"100%"},J:[{F:"path",P:{d:"M5.85 18.0c0.0-2.56 2.08-4.65 4.65-4.65h6.0V10.5H10.5c-4.14 .0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5h6.0v-2.85H10.5c-2.56 .0-4.65-2.08-4.65-4.65zM12.0 19.5h12.0v-3.0H12.0v3.0zm13.5-9.0h-6.0v2.85h6.0c2.56 .0 4.65 2.08 4.65 4.65s-2.08 4.65-4.65 4.65h-6.0V25.5h6.0c4.14 .0 7.5-3.36 7.5-7.5s-3.36-7.5-7.5-7.5z",fill:"#fff"}}]}};
jr=function(){return g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-next"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},J:[{F:"path",Da:!0,M:"ytp-svg-fill",P:{d:"M 12,24 20.5,18 12,12 V 24 z M 22,12 v 12 h 2 V 12 h -2 z"}}]}};
g.kr=function(){return g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-notifications-active"]}:{F:"svg",P:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},J:[{F:"path",P:{d:"M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"}}]}};
lr=function(){return g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-pause"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},J:[{F:"path",Da:!0,M:"ytp-svg-fill",P:{d:"M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"}}]}};
mr=function(){return g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-play"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},J:[{F:"path",Da:!0,M:"ytp-svg-fill",P:{d:"M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"}}]}};
nr=function(){return g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-prev"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},J:[{F:"path",Da:!0,M:"ytp-svg-fill",P:{d:"m 12,12 h 2 v 12 h -2 z m 3.5,6 8.5,6 V 12 z"}}]}};
or=function(){return g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-replay"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},J:[{F:"path",Da:!0,M:"ytp-svg-fill",P:{d:"M17,9 C12,9 8,13 8,18 C8,23 12,27 17,27 C19.5,27 21.82,25.95 23.45,24.26 L22.04,22.85 C20.77,24.17 19,25 17,25 C13,25 10,21.86 10,18 C10,14.13 13.13,11 17,11 C20.86,11 24,14 24,18 L21,18 L25,22 L29,18 L26,18 C26,13 22,9 17,9 Z"}}]}};
pr=function(){return g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-rewind-five-seconds"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},J:[{F:"path",Da:!0,M:"ytp-svg-fill",P:{d:"M 18,11 V 7 l -5,5 5,5 v -4 c 3.3,0 6,2.7 6,6 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 h -2 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 0,-4.4 -3.6,-8 -8,-8 z m -1.3,8.9 .2,-2.2 h 2.4 v .7 h -1.7 l -0.1,.9 c 0,0 .1,0 .1,-0.1 0,-0.1 .1,0 .1,-0.1 0,-0.1 .1,0 .2,0 h .2 c .2,0 .4,0 .5,.1 .1,.1 .3,.2 .4,.3 .1,.1 .2,.3 .3,.5 .1,.2 .1,.4 .1,.6 0,.2 0,.4 -0.1,.5 -0.1,.1 -0.1,.3 -0.3,.5 -0.2,.2 -0.3,.2 -0.4,.3 C 18.5,22 18.2,22 18,22 17.8,22 17.6,22 17.5,21.9 17.4,21.8 17.2,21.8 17,21.7 16.8,21.6 16.8,21.5 16.7,21.3 16.6,21.1 16.6,21 16.6,20.8 h .8 c 0,.2 .1,.3 .2,.4 .1,.1 .2,.1 .4,.1 .1,0 .2,0 .3,-0.1 L 18.5,21 c 0,0 .1,-0.2 .1,-0.3 v -0.6 l -0.1,-0.2 -0.2,-0.2 c 0,0 -0.2,-0.1 -0.3,-0.1 h -0.2 c 0,0 -0.1,0 -0.2,.1 -0.1,.1 -0.1,0 -0.1,.1 0,.1 -0.1,.1 -0.1,.1 h -0.7 z"}}]}};
g.qr=function(){return g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-settings"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},J:[{F:"path",Da:!0,P:{d:"m 23.94,18.78 c .03,-0.25 .05,-0.51 .05,-0.78 0,-0.27 -0.02,-0.52 -0.05,-0.78 l 1.68,-1.32 c .15,-0.12 .19,-0.33 .09,-0.51 l -1.6,-2.76 c -0.09,-0.17 -0.31,-0.24 -0.48,-0.17 l -1.99,.8 c -0.41,-0.32 -0.86,-0.58 -1.35,-0.78 l -0.30,-2.12 c -0.02,-0.19 -0.19,-0.33 -0.39,-0.33 l -3.2,0 c -0.2,0 -0.36,.14 -0.39,.33 l -0.30,2.12 c -0.48,.2 -0.93,.47 -1.35,.78 l -1.99,-0.8 c -0.18,-0.07 -0.39,0 -0.48,.17 l -1.6,2.76 c -0.10,.17 -0.05,.39 .09,.51 l 1.68,1.32 c -0.03,.25 -0.05,.52 -0.05,.78 0,.26 .02,.52 .05,.78 l -1.68,1.32 c -0.15,.12 -0.19,.33 -0.09,.51 l 1.6,2.76 c .09,.17 .31,.24 .48,.17 l 1.99,-0.8 c .41,.32 .86,.58 1.35,.78 l .30,2.12 c .02,.19 .19,.33 .39,.33 l 3.2,0 c .2,0 .36,-0.14 .39,-0.33 l .30,-2.12 c .48,-0.2 .93,-0.47 1.35,-0.78 l 1.99,.8 c .18,.07 .39,0 .48,-0.17 l 1.6,-2.76 c .09,-0.17 .05,-0.39 -0.09,-0.51 l -1.68,-1.32 0,0 z m -5.94,2.01 c -1.54,0 -2.8,-1.25 -2.8,-2.8 0,-1.54 1.25,-2.8 2.8,-2.8 1.54,0 2.8,1.25 2.8,2.8 0,1.54 -1.25,2.8 -2.8,2.8 l 0,0 z",
fill:"#fff"}}]}};
rr=function(){return g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-stop"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},J:[{F:"path",Da:!0,M:"ytp-svg-fill",P:{d:"M 12,25 19,25 19,11 12,11 z M 19,25 26,25 26,11 19,11 z"}}]}};
sr=function(){return g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-volume-high"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},J:[{F:"path",Da:!0,P:{d:"M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 Z M19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z",fill:"#fff"}}]}};
tr=function(){return g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-volume-low"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},J:[{F:"path",Da:!0,P:{d:"M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 Z",fill:"#fff"}}]}};
ur=function(){return g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-volume-muted"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},J:[{F:"path",Da:!0,M:"ytp-svg-fill",P:{d:"m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z"}}]}};
wr=function(a){a=a.split("");vr.lB(a,1);vr.nu(a,47);vr.KS(a,24);vr.lB(a,3);vr.nu(a,49);vr.KS(a,54);vr.lB(a,1);return a.join("")};
g.xr=function(a,b){var c=g.y("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=g.P("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),g.Vq("ERRORS",c))};
yr=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.xr(b)}}:a};
Ar=function(){if(!zr)return null;var a=zr();return"open"in a?a:null};
g.Br=function(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
g.Cr=function(a){window.clearInterval(a)};
g.Dr=function(a){window.clearTimeout(a)};
g.Er=function(a,b){g.wa(a)&&(a=yr(a));return window.setInterval(a,b)};
g.Fr=function(a,b){g.wa(a)&&(a=yr(a));return window.setTimeout(a,b)};
g.Gr=function(a){a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=Ja(e[0]||""),e=Ja(e[1]||"");f in b?g.ua(b[f])?xb(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b};
g.Hr=function(a){"?"==a.charAt(0)&&(a=a.substr(1));return g.Gr(a)};
Ir=function(a,b,c){var d=a.split("#",2);a=d[0];var d=1<d.length?"#"+d[1]:"",e=a.split("?",2);a=e[0];var e=g.Hr(e[1]||""),f;for(f in b)if(c||!Zb(e,f))e[f]=b[f];return g.wg(a,e)+d};
g.Jr=function(a,b){return Ir(a,b||{},!1)};
Kr=function(){if(!a)var a=window.document.location.href;a=g.mg(a)[1]||null;return null!==a&&"https"==a};
Lr=function(a){if(!b)var b=window.location.href;var c=g.mg(a)[1]||null,d=g.og(a);c&&d?(a=g.mg(a),b=g.mg(b),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?g.og(b)==d&&g.pg(b)==g.pg(a):!0;return a};
g.Mr=function(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),g.Hr(1<a.length?a[1]:a[0])):{}};
Nr=function(a){a=a.split(",");return a=a.map(function(a){return g.Hr(a)})};
g.Or=function(a,b){return Ir(a,b||{},!0)};
Qr=function(a,b){b=void 0===b?{}:b;var c=Lr(a),d;for(d in Pr){var e=g.P(Pr[d]),f;if((f=e)&&!(f=c)){var k=a;f=d;var l=g.P("CORS_HEADER_WHITELIST")||{};f=(k=g.og(k))?(l=l[k])?g.ob(l,f):!1:!0}f&&(b[d]=e)}return b};
Rr=function(a,b){var c=g.P("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.EK&&(!g.og(a)||b.withCredentials||g.og(a)==window.document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.qb&&b.qb[c])};
g.Ur=function(a,b){var c=b.format||"JSON";b.FK&&(a=window.document.location.protocol+"//"+window.document.location.hostname+(window.document.location.port?":"+window.document.location.port:"")+a);var d=g.P("XSRF_FIELD_NAME",void 0),e=g.P("XSRF_TOKEN",void 0),f=b.Yb;f&&(f[d]&&delete f[d],a=g.Or(a,f));var k=b.postBody||"",f=b.qb;Rr(a,b)&&(f||(f={}),f[d]=e);f&&g.u(k)&&(d=g.Hr(k),g.ic(d,f),k=b.Ws&&"JSON"==b.Ws?JSON.stringify(d):g.ug(d));var l=!1,m,n=Sr(a,function(a){if(!l){l=!0;m&&g.Dr(m);var d=g.Br(a),
e=null;if(d||400<=a.status&&500>a.status)e=Tr(c,a,b.DK);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==(0,window.parseInt)(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||g.w;d?b.nb&&b.nb.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.Nc&&b.Nc.call(f,a,e)}},b.method,k,b.headers,b.responseType,b.withCredentials);
b.oc&&0<b.timeout&&(m=g.Fr(function(){l||(l=!0,n.abort(),g.Dr(m),b.oc.call(b.context||g.w,n))},b.timeout));
return n};
Tr=function(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Vr(b):null)d={},(0,g.G)(b.getElementsByTagName("*"),function(a){d[a.tagName]=Wr(a)})}c&&Xr(d);
return d};
Xr=function(a){if(g.ya(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);c?a[b]=sd(cd("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):Xr(a[b])}};
Vr=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
Wr=function(a){var b="";(0,g.G)(a.childNodes,function(a){b+=a.nodeValue});
return b};
g.Yr=function(a,b){b.method="POST";b.qb||(b.qb={});g.Ur(a,b)};
Sr=function(a,b,c,d,e,f,k){function l(){4==(m&&"readyState"in m?m.readyState:0)&&b&&yr(b)(m)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var m=Ar();if(!m)return null;"onloadend"in m?m.addEventListener("loadend",l,!1):m.onreadystatechange=l;m.open(c,a,!0);f&&(m.responseType=f);k&&(m.withCredentials=!0);c="POST"==c;if(e=Qr(a,e))for(var n in e)m.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(c=!1);c&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");m.send(d);return m};
$r=function(){return Zr("android")&&Zr("chrome")&&!(Zr("trident/")||Zr("edge/"))};
g.as=function(){return Zr("cobalt")};
bs=function(){return Zr("(ps3; leanback shell)")||Zr("ps3")&&g.as()};
cs=function(){return Zr("(ps4; leanback shell)")||Zr("ps4")&&g.as()};
ds=function(){var a=/WebKit\/([0-9]+)/.exec(g.Ob);return!!(a&&600<=(0,window.parseInt)(a[1],10))};
fs=function(){return g.es&&Zr("crkey")};
gs=function(){return Zr("iemobile")||Zr("windows phone")&&Zr("edge")};
Zr=function(a){var b=g.Ob;return b?0<=b.toLowerCase().indexOf(a):!1};
g.is=function(a,b,c){a&&(c&&!g.as()?a&&(a=g.Wd("IFRAME",{src:'javascript:"data:text/html,<body><img src=\\"'+a+'\\"></body>"',style:"display:none"}),g.Fd(a).body.appendChild(a)):g.P("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?Sr(a,b):hs(a,b))};
hs=function(a,b){var c=new window.Image,d=""+js++;ks[d]=c;c.onload=c.onerror=function(){b&&ks[d]&&b();delete ks[d]};
c.src=a};
g.ls=function(a){return g.P("EXPERIMENT_FLAGS",{})[a]};
ns=function(a,b){var c=g.ec(b);return new g.yf(function(b,e){c.nb=function(a){g.Br(a)?b(a):e(new ms("Request failed, status="+a.status,"net.badstatus",a))};
c.onError=function(a){e(new ms("Unknown request error","net.unknown",a))};
c.oc=function(a){e(new ms("Request timed out","net.timeout",a))};
g.Ur(a,c)})};
ms=function(a,b,c){Ga.call(this,a+", errorCode="+b);this.errorCode=b;this.g=c;this.name="PromiseAjaxError"};
os=function(a,b,c,d){function e(d,l,m){return g.Kf(d,function(d){return 0>=l||403===d.g.status?Df(new ms("Request retried too many times","net.retryexhausted",d.g)):f(m).then(function(){return e(ns(a,b),l-1,Math.pow(2,c-l+1)*m)})})}
function f(a){return new g.yf(function(b){(0,window.setTimeout)(b,a)})}
return e(ns(a,b),c-1,d)};
rs=function(a){Ga.call(this,a.message||a.description||a.name);this.A=a instanceof ps&&a.errorCode==qs.TIMEOUT;this.o=a instanceof Pf};
ts=function(){Ga.call(this,"Biscotti ID is missing from server")};
us=function(a,b){this.o=a;this.g=b};
zs=function(){var a=g.P("PLAYER_CONFIG",void 0);if(a&&"1"==a.privembed)return Df(Error("Biscotti ID is not available in private embed mode"));vs||(vs=g.Kf(ns("//googleads.g.doubleclick.net/pagead/id",ws).then(xs),function(a){return ys(2,a)}));
return vs};
xs=function(a){a=a.responseText;if(!g.Ha(a,")]}'"))throw new ts;a=JSON.parse(a.substr(4));if((g.Yb(window,"settings","experiments","flags","html5_serverside_ignore_biscotti_id_on_retry")||g.P("EXP_HTML5_SERVERSIDE_IGNORE_BISCOTTI_ID_ON_RETRY",!1)||g.ls("html5_serverside_ignore_biscotti_id_on_retry"))&&1<(a.type||1))throw new ts;a=a.id;As(a);vs=new us(a);Bs(18E5,2);return a};
ys=function(a,b){var c=new rs(b);As("");vs=new us(void 0,c);0<a&&Bs(12E4,a-1);throw c;};
Bs=function(a,b){g.Fr(function(){g.Kf(ns("//googleads.g.doubleclick.net/pagead/id",ws).then(xs,function(a){return ys(b,a)}),g.qa)},a)};
As=function(a){g.x("yt.ads.biscotti.lastId_",a,void 0)};
Cs=function(){try{var a=g.y("yt.ads.biscotti.getId_");return a?a():zs()}catch(b){return Df(b)}};
g.Es=function(a){return Ds[a]||(Ds[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))};
g.Fs=function(a,b){return a?a.dataset?a.dataset[g.Es(b)]:a.getAttribute("data-"+b):null};
g.Gs=function(a,b,c){a&&(a.dataset?a.dataset[g.Es(b)]=String(c):a.setAttribute("data-"+b,c))};
Hs=function(a,b){var c;(0,g.gl)(a,function(a){c=b[a];return!!c});
return c};
Js=function(a,b){if(a in b)return b[a];var c=Is+a.charAt(0).toUpperCase()+a.substr(1);if(c in b)return b[c]};
Ks=function(){return!!Hs(["fullscreenEnabled","webkitFullscreenEnabled","mozFullScreenEnabled","msFullscreenEnabled"],window.document)};
g.Ls=function(){var a=Hs(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],window.document);return a?a:null};
Ms=function(a){var b;Ks()?g.Ls()==a&&(b=window.document):b=a;b&&(a=Hs(["exitFullscreen","webkitExitFullscreen","mozCancelFullScreen","msExitFullscreen"],b))&&a.call(b)};
Ns=function(){var a=window.document;return g.jb(["fullscreenerror","webkitfullscreenerror","mozfullscreenerror","MSFullscreenError"],function(b){return"on"+b.toLowerCase()in a})};
Os=function(a){return g.jb(["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"],function(b){return"on"+b.toLowerCase()in a})};
Qs=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Ps||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?
b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}};
Ss=function(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in window.document?"mouseleave"!=b||"onmouseenter"in window.document?"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return $b(Rs,function(e){return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})};
g.Us=function(a,b,c,d){d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Ss(a,b,c,d);if(e)return e;var e=++Ts.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in window.document);var k=f?function(d){d=new Qs(d);if(!g.oe(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Qs(b);
b.currentTarget=a;return c.call(a,b)};
k=yr(k);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,k,d)):a.attachEvent("on"+b,k);Rs[e]=[a,b,c,k,d];return e};
g.Vs=function(a){a&&("string"==typeof a&&(a=[a]),(0,g.G)(a,function(a){if(a in Rs){var b=Rs[a],d=b[0],e=b[1],f=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete Rs[a]}}))};
g.Ws=function(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a};
g.Xs=function(a){a=a||window.event;return a.keyCode?a.keyCode:a.which};
Ys=function(a){a=a||window.event;var b=a.pageX,c=a.pageY;window.document.body&&window.document.documentElement&&(g.pa(b)||(b=a.clientX+window.document.body.scrollLeft+window.document.documentElement.scrollLeft),g.pa(c)||(c=a.clientY+window.document.body.scrollTop+window.document.documentElement.scrollTop));return new g.zd(b,c)};
Zs=function(a){a=a||window.event;var b=a.relatedTarget;b||("mouseover"==a.type?b=a.fromElement:"mouseout"==a.type&&(b=a.toElement));return b};
$s=function(a){a=a||window.event;return a.path&&a.path.length?a.path[0]:g.Ws(a)};
g.at=function(a){a=a||window.event;return!1===a.returnValue||a.pq&&a.pq()};
g.bt=function(a,b,c){var d;return d=g.Us(a,b,function(){g.Vs(d);c.apply(a,arguments)},!1)};
g.ct=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
g.dt=function(a){g.I.call(this);this.W=[];this.Bb=a||this};
et=function(a,b,c,d){for(var e=0;e<c.length;e++)a.N(b,c[e],d)};
g.ft=function(a){for(;a.W.length;){var b=a.W.pop();b.target.removeEventListener(b.name,b.Ei)}};
g.gt=function(){g.I.call(this);this.ba=new g.nq;g.J(this,this.ba)};
g.it=function(a,b,c,d){g.gt.call(this);this.A=!!b;this.D=a;this.K=c||a;this.H=!!d;this.g=new g.dt(this);g.J(this,this.g);this.C=this.G=null;this.B=this.o=!1;b&&(g.Sd&&a.setAttribute("draggable","true"),a.style.touchAction="none");ht(this)};
jt=function(a,b,c){a.g.N(a.K,b,c,void 0,!a.A)};
ht=function(a){a.C=null;a.G=null;jt(a,kt("over"),a.Lq);jt(a,"touchstart",a.tm);a.A&&jt(a,kt("down"),a.RB)};
lt=function(a,b){for(var c=0;c<b.changedTouches.length;c++){var d=b.changedTouches[c];if(d.identifier==a.G)return d}return null};
kt=function(a){return window.navigator.msPointerEnabled?"MSPointer"+a.charAt(0).toUpperCase()+a.substr(1):"mouse"+a};
pt=function(a){a=a||{};this.url=a.url||"";this.urlV9As2=a.url_v9as2||"";this.args=a.args||g.ec(mt);this.assets=a.assets||{};this.attrs=a.attrs||g.ec(nt);this.params=a.params||g.ec(ot);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
qt=function(a){a instanceof pt||(a=new pt(a));return a};
rt=function(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&g.is(c.data.follow_on_url)}};
g.tt=function(a,b,c){this.o=a;this.B=b;this.A=c;this.g=void 0};
g.zt=function(a,b,c){var d=g.ut();if(d){var e=d.subscribe(a,function(){var d=arguments;var k=function(){g.vt[e]&&b.apply(c||window,d)};
try{wt[a]?k():g.Fr(k,0)}catch(l){g.xr(l)}},c);
g.vt[e]=!0;g.xt[a]||(g.xt[a]=[]);g.xt[a].push(e);return e}return 0};
g.At=function(a){var b=g.ut();b&&(g.pa(a)?a=[a]:g.u(a)&&(a=[(0,window.parseInt)(a,10)]),(0,g.G)(a,function(a){b.unsubscribeByKey(a);delete g.vt[a]}))};
g.ut=function(){return g.y("ytPubsubPubsubInstance")};
g.Bt=function(a,b){var c=g.ut();return c?c.publish.apply(c,arguments):!1};
g.Ct=function(a,b){wt[a]=!0;var c=g.ut();c&&c.publish.apply(c,arguments);wt[a]=!1};
g.It=function(a,b){Dt[a.endpoint]=b;if(a.Ni){var c=a.Ni;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);Et[a.Ni.token]=d;c=Ft(a.endpoint,a.Ni.token)}else c=Ft(a.endpoint);c.push(a.Vs);d=Number(g.ls("web_logging_max_batch")||0)||20;c.length>=d?Gt():Ht()};
Gt=function(){g.Dr(Jt);if(!g.cc(Kt)){for(var a in Kt){var b=Lt[a];if(!b){var c=Dt[a];if(!c)continue;b=new c;Lt[a]=b}var c=void 0,d=a,e=b,f=Mt[d],k=Nt[d]||{};Nt[d]=k;b=Math.round((0,g.Ot)());for(c in Kt[d]){var l=e.o();l[f]=Ft(d,c);k.dispatchedEventCount=k.dispatchedEventCount||0;k.dispatchedEventCount+=l[f].length;l.requestTimeMs=b;var m=Et[c];if(m)a:{var n=l,q=c;if(m.videoId)var r="VIDEO";else if(m.playlistId)r="PLAYLIST";else break a;n.credentialTransferTokenTargetId=m;n.context=n.context||{};n.context.user=
n.context.user||{};n.context.user.credentialTransferTokens=[{token:q,scope:r}]}delete Et[c];e.A(d,l,{})}c=k;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete Kt[a]}g.cc(Kt)||Ht()}};
Ht=function(){g.Dr(Jt);Jt=g.Fr(Gt,g.P("LOGGING_BATCH_TIMEOUT",1E4))};
Ft=function(a,b){b||(b="");Kt[a]=Kt[a]||{};Kt[a][b]=Kt[a][b]||[];return Kt[a][b]};
Qt=function(){if(null==g.y("_lact",window)){var a=(0,window.parseInt)(g.P("LACT"),10),a=(0,window.isFinite)(a)?(0,g.F)()-Math.max(a,0):-1;g.x("_lact",a,window);g.x("_fact",a,window);-1==a&&Pt();g.Us(window.document,"keydown",Pt);g.Us(window.document,"keyup",Pt);g.Us(window.document,"mousedown",Pt);g.Us(window.document,"mouseup",Pt);g.zt("page-mouse",Pt);g.zt("page-scroll",Pt);g.zt("page-resize",Pt)}};
Pt=function(){null==g.y("_lact",window)&&(Qt(),g.y("_lact",window));var a=(0,g.F)();g.x("_lact",a,window);-1==g.y("_fact",window)&&g.x("_fact",a,window);g.Bt("USER_ACTIVE")};
g.Rt=function(){var a=g.y("_lact",window);return null==a?-1:Math.max((0,g.F)()-a,0)};
g.St=function(a,b,c,d){var e={};e.eventTimeMs=Math.round(d||(0,g.Ot)());e[a]=b;e.context={lastActivityMs:String(g.Rt())};g.It({endpoint:"log_event",Vs:e,Ni:void 0},c)};
Tt=function(a){a={client:{hl:a.Ul,gl:a.Tl,clientName:a.Sl,clientVersion:a.innertubeContextClientVersion}};g.P("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:g.P("DELEGATED_SESSION_ID")});return a};
Ut=function(){return{apiaryHost:g.P("APIARY_HOST",void 0),Jk:g.P("APIARY_HOST_FIRSTPARTY",void 0),gapiHintOverride:!!g.P("GAPI_HINT_OVERRIDE",void 0),gapiHintParams:g.P("GAPI_HINT_PARAMS",void 0),innertubeApiKey:g.P("INNERTUBE_API_KEY",void 0),innertubeApiVersion:g.P("INNERTUBE_API_VERSION",void 0),Sl:g.P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:g.P("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Ul:g.P("INNERTUBE_CONTEXT_HL",void 0),Tl:g.P("INNERTUBE_CONTEXT_GL",void 0),xhrApiaryHost:g.P("XHR_APIARY_HOST",
void 0)||"",lj:g.P("INNERTUBE_HOST_OVERRIDE",void 0)||""}};
Vt=function(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b};
g.Wt=function(a){this.g=a||Ut()};
g.Xt=function(){return!!g.y("yt.scheduler.instance")};
g.Yt=function(a,b,c){(0,window.isNaN)(c)&&(c=void 0);var d=g.y("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),window.NaN):g.Fr(a,c||0)};
g.Zt=function(a){if(!(0,window.isNaN)(a)){var b=g.y("yt.scheduler.instance.cancelJob");b?b(a):g.Dr(a)}};
$t=function(a){var b=g.y("yt.scheduler.instance.setPriorityThreshold");b&&b(a)};
bu=function(a,b){var c=Object.keys(a).join("");au("info_"+c+"_"+b)||(a.clientActionNonce=b,g.St("latencyActionInfo",a,g.Wt))};
au=function(a){cu[a]=cu[a]||{count:0};var b=cu[a];b.count++;b.time=(0,g.Ot)();du||(du=g.Yt(eu,0,5E3));if(10<b.count){if(11==b.count){var b=Error("CSI data exceeded logging limit with key: "+a),c=void 0,d=void 0,c=void 0===c?"ERROR":c,d=void 0===d?!1:d;a={name:g.P("INNERTUBE_CONTEXT_CLIENT_NAME",1),version:g.P("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0)};c=void 0===c?"ERROR":c;d=window&&window.yterr||(void 0===d?!1:d)||!1;if(b&&d&&!(5<=fu)){var d=b.stacktrace,e=b.columnNumber;var f=g.y("window.location.href");
if(g.u(b))b={message:b,name:"Unknown error",lineNumber:"Not available",fileName:f,stack:"Not available"};else{var k=!1;try{var l=b.lineNumber||b.line||"Not available"}catch(r){l="Not available",k=!0}try{var m=b.fileName||b.filename||b.sourceURL||g.w.$googDebugFname||f}catch(r){m="Not available",k=!0}b=!k&&b.lineNumber&&b.fileName&&b.stack&&b.message&&b.name?b:{message:b.message||"Not available",name:b.name||"UnknownError",lineNumber:l,fileName:m,stack:b.stack||"Not available"}}d=d||b.stack;l=b.lineNumber.toString();
(0,window.isNaN)(l)||(0,window.isNaN)(e)||(l=l+":"+e);if(!(gu[b.message]||0<=d.indexOf("/YouTubeCenter.js")||0<=d.indexOf("/mytube.js"))){m=b.fileName;l={Yb:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,1E3),line:l,level:c},qb:{url:g.P("PAGE_NAME",window.location.href),file:m},method:"POST"};d&&(l.qb.stack=d);for(var n in a)l.qb["client."+n]=a[n];if(n=g.P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var q in n)l.qb[q]=n[q];g.Ur("/error_204",l);gu[b.message]=!0;fu++}}}return!0}return!1};
eu=function(){var a=(0,g.Ot)(),b;for(b in cu)6E4<a-cu[b].time&&delete cu[b];du=0};
g.ju=function(a,b,c){var d=c&&0<c?c:0;c=d?(0,g.F)()+1E3*d:0;if((d=d?g.hu:iu)&&window.JSON){g.u(b)||(b=JSON.stringify(b,void 0));try{d.set(a,b,c)}catch(e){d.remove(a)}}};
g.ku=function(a){if(!iu&&!g.hu||!window.JSON)return null;try{var b=iu.get(a)}catch(c){}if(!g.u(b))try{b=g.hu.get(a)}catch(c){}if(!g.u(b))return null;try{b=JSON.parse(b,void 0)}catch(c){}return b};
g.lu=function(a){try{iu&&iu.remove(a),g.hu&&g.hu.remove(a)}catch(b){}};
g.mu=function(){var a=g.P("client-screen-nonce",void 0);a||(a=g.P("EVENT_ID",void 0));return a};
nu=function(a,b){this.action=a;this.params=b||{}};
pu=function(a){this.app=this.name=this.id="";this.type="REMOTE_CONTROL";this.avatar=this.username="";this.A=!1;this.capabilities=new hp;this.experiments=new hp;this.theme="u";new Km;this.g=this.o="";if(a){this.id=a.id||a.name;this.name=a.name;this.app=a.app;this.type=a.type||"REMOTE_CONTROL";this.username=a.user||"";this.avatar=a.userAvatarUri||"";this.theme=a.theme||"u";var b=a.capabilities||"";this.capabilities.clear();gp(this.capabilities,(0,g.fe)(b.split(","),g.B(Vb,ou)));b=a.experiments||"";
this.experiments.clear();gp(this.experiments,b.split(","));this.o=a.remoteControllerUrl||"";this.g=a.localChannelEncryptionKey||""}};
ru=function(a,b){g.I.call(this);this.o=new g.O(this.C,0,this);g.J(this,this.o);this.A=this.g=0;if(g.wa(a))b&&(a=(0,g.A)(a,b));else if(a&&g.wa(a.handleEvent))a=(0,g.A)(a.handleEvent,a);else throw Error("Invalid listener argument");this.B=a;qu(this)};
qu=function(a){a.o.stop();a.g=5E3+2E4*Math.random()};
tu=function(a,b,c){this.O=a;this.D=b;this.A=new g.nq;this.o=new ru(this.SG,this);this.g=this.ye=null;this.L=!1;this.C=null;this.K="";this.H=this.B=0;this.G=[];this.T=c||!1};
uu=function(a){return{firstTestResults:[""],secondTestResults:!a.g.ik,sessionId:a.g.A,arrayId:a.g.xg}};
vu=function(a,b){a.H=b||0;a.o.stop();a.g&&(3==a.g.g&&eq(a.g),Yp(a.g));a.H=0};
wu=function(a){return!!a.g&&3==a.g.g};
xu=function(a,b){(a.D.loungeIdToken=b)||a.o.stop()};
Cu=function(){var a=yu;zu();Au.push(a);Bu(Au)};
g.Fu=function(a,b){zu();var c=Au,d=Du(a,String(b));g.pb(c)?Eu(d):(Bu(c),(0,g.G)(c,function(a){a(d)}))};
zu=function(){Au||(Au=g.y("yt.mdx.remote.debug.handlers_")||[],g.x("yt.mdx.remote.debug.handlers_",Au,void 0))};
Eu=function(a){var b=(Gu+1)%50;Gu=b;Hu[b]=a;Iu||(Iu=49==b)};
Bu=function(a){var b=Hu;if(b[0]){var c=Gu,d=Iu?c:-1;do{var d=(d+1)%50,e=b[d];(0,g.G)(a,function(a){a(e)})}while(d!=c);
Hu=Array(50);Gu=-1;Iu=!1}};
Du=function(a,b){var c=((0,g.F)()-Ju)/1E3;c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")};
Ku=function(a){a=a||{};this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""};
g.Lu=function(a,b){return!!b&&(a.id==b||a.uuid==b)};
Mu=function(a){return{name:a.name,screenId:a.id,loungeToken:a.token,dialId:a.uuid}};
Nu=function(a){return new Ku(a)};
Ou=function(a){return g.ua(a)?(0,g.H)(a,Nu):[]};
g.Pu=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"};
Qu=function(a){return g.ua(a)?"["+g.H(a,g.Pu).join(",")+"]":"null"};
g.Ru=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)})};
g.Su=function(a,b){return g.jb(a,function(a){return a||b?!a!=!b?!1:a.id==b.id:!0})};
g.Tu=function(a,b){return g.jb(a,function(a){return g.Lu(a,b)})};
g.Uu=function(a){g.gt.call(this);this.G=a;this.g=[]};
Vu=function(a,b){var c=a.get(b.uuid)||a.get(b.id);if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.g.push(b);return!0};
Wu=function(a,b){var c=a.g.length!=b.length;a.g=(0,g.fe)(a.g,function(a){return!!g.Su(b,a)});
for(var d=0,e=b.length;d<e;d++)c=Vu(a,b[d])||c;return c};
Xu=function(a,b){var c=a.g.length;a.g=(0,g.fe)(a.g,function(a){return!(a||b?!a!=!b?0:a.id==b.id:1)});
return a.g.length<c};
Yu=function(a,b,c,d){g.gt.call(this);this.G=a;this.D=b;this.B=c;this.C=d;this.A=0;this.g=null;this.o=window.NaN};
g.dv=function(){var a=Zu(),b=g.$u();if(g.av()){var c=a,d=g.Cb(c,b,void 0);0>d&&g.zb(c,-(d+1),0,b)}a=bv(a);if(g.pb(a))try{cv.remove("remote_sid","/","youtube.com")}catch(e){}else try{cv.set("remote_sid",a.join(","),-1,"/","youtube.com")}catch(e){}};
Zu=function(){var a=g.ku("yt-remote-connected-devices")||[];g.Eb(a);return a};
bv=function(a){if(g.pb(a))return[];var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return(0,g.H)(a,function(a,b){return 0==b?a:a.substring(c.length)})};
ev=function(a){g.ju("yt-remote-connected-devices",a,86400)};
g.$u=function(){if(fv)return fv;var a=g.ku("yt-remote-device-id");a||(a=g.Ru(),g.ju("yt-remote-device-id",a,31536E3));for(var b=Zu(),c=1,d=a;g.ob(b,d);)c++,d=a+"#"+c;return fv=d};
gv=function(){return g.ku("yt-remote-session-browser-channel")};
g.av=function(){return g.ku("yt-remote-session-screen-id")};
kv=function(a){5<a.length&&(a=a.slice(a.length-5));var b=(0,g.H)(hv(),function(a){return a.loungeToken}),c=(0,g.H)(a,function(a){return a.loungeToken});
(0,g.iv)(c,function(a){return!g.ob(b,a)})&&jv();
g.ju("yt-remote-local-screens",a,31536E3)};
hv=function(){return g.ku("yt-remote-local-screens")||[]};
jv=function(){g.ju("yt-remote-lounge-token-expiration",!0,86400)};
lv=function(a,b){g.ju("yt-remote-session-browser-channel",a);g.ju("yt-remote-session-screen-id",b);var c=Zu(),d=g.$u();g.ob(c,d)||c.push(d);ev(c);g.dv()};
g.mv=function(a){a||(g.lu("yt-remote-session-screen-id"),g.lu("yt-remote-session-video-id"));g.dv();a=Zu();g.tb(a,g.$u());ev(a)};
g.ov=function(){if(!nv){var a=g.Cq();a&&(nv=new g.pq(a))}return nv?!!nv.get("yt-remote-use-staging-server"):!1};
qv=function(a){g.Uu.call(this,"LocalScreenService");this.A=a;this.o=window.NaN;pv(this);this.info("Initializing with "+Qu(this.g))};
rv=function(a){if(a.g.length){var b=(0,g.H)(a.g,function(a){return a.id}),c=a.A.Hf("/pairing/get_lounge_token_batch");
a.A.Pn(c,{screen_ids:b.join(",")},(0,g.A)(a.kx,a),(0,g.A)(a.jx,a))}};
pv=function(a){var b=Ou(hv()),b=(0,g.fe)(b,function(a){return!a.uuid});
return Wu(a,b)};
tv=function(a,b){kv((0,g.H)(a.g,Mu));b&&jv()};
vv=function(a,b){g.gt.call(this);this.D=b;for(var c=g.ku("yt-remote-online-screen-ids")||"",c=c?c.split(","):[],d={},e=this.D(),f=0,k=e.length;f<k;++f){var l=e[f].id;d[l]=g.ob(c,l)}this.g=d;this.C=a;this.A=this.B=window.NaN;this.o=null;uv("Initialized with "+g.eg(this.g))};
wv=function(a,b,c){var d=a.C.Hf("/pairing/get_screen_availability");a.C.Pn(d,{lounge_token:b.token},(0,g.A)(function(a){a=a.screens||[];for(var d=0,e=a.length;d<e;++d)if(a[d].loungeToken==b.token){c("online"==a[d].status);return}c(!1)},a),(0,g.A)(function(){c(!1)},a))};
yv=function(a,b){a:if(g.Tb(b)!=g.Tb(a.g))var c=!1;else{c=g.Xb(b);for(var d=0,e=c.length;d<e;++d)if(!a.g[c[d]]){c=!1;break a}c=!0}c||(uv("Updated online screens: "+g.eg(a.g)),a.g=b,a.U("screenChange"));xv(a)};
zv=function(a){(0,window.isNaN)(a.A)||g.Dr(a.A);a.A=g.Fr((0,g.A)(a.kn,a),0<a.B&&a.B<(0,g.F)()?2E4:1E4)};
uv=function(a){g.Fu("OnlineScreenService",a)};
Av=function(a){var b={};(0,g.G)(a.D(),function(a){a.token?b[a.token]=a.id:this.Db("Requesting availability of screen w/o lounge token.")});
return b};
xv=function(a){a=g.Xb(g.Rb(a.g,function(a){return a}));
g.Eb(a);a.length?g.ju("yt-remote-online-screen-ids",a.join(","),60):g.lu("yt-remote-online-screen-ids")};
g.Cv=function(a){g.Uu.call(this,"ScreenService");this.D=a;this.o=this.A=null;this.B=[];this.C={};Bv(this)};
Fv=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);c||(c=a.C[b]);var k=a.Vc();if(k=(c?g.Tu(k,c):null)||g.Tu(k,b)){k.uuid=b;var l=Dv(a,k);wv(a.o,l,function(a){e(a?l:null)})}else c?Ev(a,c,(0,g.A)(function(a){var f=Dv(this,new Ku({name:d,
screenId:c,loungeToken:a,dialId:b||""}));wv(this.o,f,function(a){e(a?f:null)})},a),f):e(null)};
Gv=function(a,b){for(var c=0,d=a.g.length;c<d;++c)if(a.g[c].name==b)return a.g[c];return null};
Ev=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);var e={qb:{screen_ids:b},method:"POST",context:a,nb:function(a,e){var f=e&&e.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.Ur(a.D.Hf("/pairing/get_lounge_token_batch"),e)};
Hv=function(a){a.g=a.A.Vc();var b=a.C,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.g.length;b<d;++b){var e=a.g[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+Qu(a.g))};
Bv=function(a){Iv(a);a.A=new qv(a.D);a.A.subscribe("screenChange",(0,g.A)(a.xx,a));Hv(a);a.B=Ou(g.ku("yt-remote-automatic-screen-cache")||[]);Iv(a);a.info("Initializing automatic screens: "+Qu(a.B));a.o=new vv(a.D,(0,g.A)(a.Vc,a,!0));a.o.subscribe("screenChange",(0,g.A)(function(){this.U("onlineScreenChange")},a))};
Dv=function(a,b){var c=a.get(b.id);c?(c.uuid=b.uuid,b=c):((c=g.Tu(a.B,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.B.push(b),g.ju("yt-remote-automatic-screen-cache",(0,g.H)(a.B,Mu)));Iv(a);a.C[b.uuid]=b.id;g.ju("yt-remote-device-id-map",a.C,31536E3);return b};
Iv=function(a){a.C=g.ku("yt-remote-device-id-map")||{}};
Jv=function(a,b,c){g.gt.call(this);this.T=c;this.K=a;this.o=b;this.A=null};
Kv=function(a,b){g.Fu(a.T,b)};
Mv=function(a,b){Jv.call(this,a,b,"CastSession");this.g=null;this.B=0;this.D=(0,g.A)(this.bH,this);this.C=(0,g.A)(this.AF,this);this.B=g.Fr((0,g.A)(function(){Lv(this,null)},this),12E4)};
Nv=function(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+g.eg(void 0));var b={type:"getMdxSessionStatus"};a.g?a.g.sendMessage("urn:x-cast:com.google.youtube.mdx",b,g.qa,(0,g.A)(function(){Kv(this,"Failed to send message: getMdxSessionStatus.")},a)):Kv(a,"Sending yt message without session: "+g.eg(b))};
Lv=function(a,b){g.Dr(a.B);if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.A||a.A.id!=b){var c=(0,g.A)(a.Ij,a),d=(0,g.A)(a.Zc,a);a.Mp(b,c,d,5)}}else a.Zc(Error("Waiting for session status timed out."))};
Ov=function(a,b){Jv.call(this,a,b,"DialSession");this.B=this.H=null;this.L="";this.C=null;this.G=g.qa;this.D=window.NaN;this.O=(0,g.A)(this.eH,this);this.g=g.qa};
Pv=function(a){a.g=a.K.yu(a.L,a.o.label,a.o.friendlyName,(0,g.A)(function(a){this.g=g.qa;this.Ij(a)},a),(0,g.A)(function(a){this.g=g.qa;
this.Zc(a)},a))};
Qv=function(a){var b={};b.pairingCode=a.L;if(a.C){var c=a.C.currentTime||0;b.v=a.C.videoId;b.t=c}g.ov()&&(b.env_useStageMdx=1);return g.ug(b)};
Rv=function(a,b){Jv.call(this,a,b,"ManualSession");this.g=g.Fr((0,g.A)(this.yg,this,null),150)};
g.Sv=function(a,b){g.gt.call(this);this.o=a;this.D=b||"233637DE";this.g=null;this.C=!1;this.A=[];this.B=(0,g.A)(this.sE,this)};
Tv=function(a,b){return b?g.jb(a.A,function(a){return g.Lu(b,a.label)},a):null};
Uv=function(a){g.Fu("Controller",a)};
yu=function(a){window.chrome&&window.chrome.cast&&window.chrome.cast.logMessage&&window.chrome.cast.logMessage(a)};
Vv=function(a){return a.C||!!a.A.length||!!a.g};
Wv=function(a,b,c){b!=a.g&&(g.ue(a.g),(a.g=b)?(c?a.U("yt-remote-cast2-receiver-resumed",b.o):a.U("yt-remote-cast2-receiver-selected",b.o),b.subscribe("sessionScreen",(0,g.A)(a.Js,a,b)),b.A?a.U("yt-remote-cast2-session-change",b.A):c&&a.g.yg(null)):a.U("yt-remote-cast2-session-change",null))};
Xv=function(a){var b=a.o.xu(),c=a.g&&a.g.o;a=(0,g.H)(b,function(a){c&&g.Lu(a,c.label)&&(c=null);var b=a.uuid?a.uuid:a.id,d=Tv(this,a);d?(d.label=b,d.friendlyName=a.name):(d=new window.chrome.cast.Receiver(b,a.name),d.receiverType=window.chrome.cast.ReceiverType.CUSTOM);return d},a);
c&&(c.receiverType!=window.chrome.cast.ReceiverType.CUSTOM&&(c=new window.chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=window.chrome.cast.ReceiverType.CUSTOM),a.push(c));return a};
g.Yv=function(a){this.index=-1;this.videoId=this.listId="";this.volume=this.g=-1;this.muted=!1;this.audioTrackId=null;this.A=this.H=0;this.o=null;this.hasNext=this.Yd=!1;this.L=this.K=this.B=this.D=0;this.C=window.NaN;this.G=!1;this.reset(a)};
g.Zv=function(a){a.audioTrackId=null;a.o=null;a.g=-1;a.Yd=!1;a.hasNext=!1;a.H=0;a.A=(0,g.F)();a.D=0;a.B=0;a.K=0;a.L=0;a.C=window.NaN;a.G=!1};
g.$v=function(a,b){a.H=b;a.A=(0,g.F)()};
g.aw=function(a){switch(a.g){case 1:return((0,g.F)()-a.A)/1E3+a.H;case -1E3:return 0}return a.H};
g.bw=function(a,b,c){var d=a.videoId;a.videoId=b;a.index=c;b!=d&&g.Zv(a)};
g.cw=function(a){var b={};b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.g;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=gc(a.o);b.hasPrevious=a.Yd;b.hasNext=a.hasNext;b.playerTime=a.H;b.playerTimeAt=a.A;b.seekableStart=a.D;b.seekableEnd=a.B;b.duration=a.K;b.loadedTime=a.L;b.liveIngestionTime=a.C;return b};
dw=function(a,b,c){this.name=a;this.id=b;this.isDefault=c};
g.ew=function(a){this.languageCode=a.languageCode;this.languageName=a.languageName||null;this.g=a.languageOriginal||null;this.id=a.id||null;this.isDefault=a.is_default||!1};
g.fw=function(a){a=void 0===a?{}:a;this.O=a.formats||"";this.A=a.format||1;if(1==this.A)for(var b=this.O.split(","),c=0;c<b.length;c++){var d=(0,window.parseInt)(b[c],10);(0,window.isNaN)(d)||(this.A=Math.max(d,this.A))}this.o=a.languageCode||"";this.D=a.languageName;this.B=a.kind||"";this.C=a.name;this.Ca=a.id;this.T=a.is_servable;this.H=a.is_translateable;this.K=a.url||null;this.G=a.vss_id||"";this.g=null;a.translationLanguage&&(this.g=new g.ew(a.translationLanguage))};
g.gw=function(a){var b=a.D||"",c=[b];"asr"==a.B&&-1==b.indexOf("(")&&c.push(" ("+g.Q("YTP_ASR_SETTINGS_LABEL")+")");a.C&&c.push(" - "+a.C);a.g&&c.push(" >> "+a.g.languageName);return c.join("")};
hw=function(a,b){this.id=a;this.Ub=b;this.captionTracks=[];this.nh=this.Zk=this.g=null;this.No="UNKNOWN"};
g.jw=function(a,b,c){g.gt.call(this);this.C=window.NaN;this.W=!1;this.L=this.K=this.O=this.T=window.NaN;this.X=[];this.B=this.G=this.A=this.Oa=this.g=null;this.Ea=a;this.X.push(g.Us(window,"beforeunload",(0,g.A)(this.bx,this)));this.o=[];this.Oa=new g.Yv;this.da=b.id;this.g=iw(this,c);this.g.subscribe("handlerOpened",this.BC,this);this.g.subscribe("handlerClosed",this.yC,this);this.g.subscribe("handlerError",this.zC,this);this.g.subscribe("handlerMessage",this.AC,this);xu(this.g,b.token);this.subscribe("remoteQueueChange",
function(){var a=this.Oa.videoId;g.av()&&g.ju("yt-remote-session-video-id",a)},this)};
kw=function(a){g.Fu("conn",a)};
iw=function(a,b){return new tu(a.Ea.Hf("/bc"),b)};
lw=function(a,b){a.U("proxyStateChange",b)};
mw=function(a){a.C=g.Fr((0,g.A)(function(){kw("Connecting timeout");this.D(1)},a),2E4)};
nw=function(a){g.Dr(a.C);a.C=window.NaN};
ow=function(a){g.Dr(a.T);a.T=window.NaN};
rw=function(a){pw(a);a.O=g.Fr((0,g.A)(function(){qw(this,"getNowPlaying")},a),2E4)};
pw=function(a){g.Dr(a.O);a.O=window.NaN};
uw=function(a,b){b&&(nw(a),ow(a));b==(wu(a.g)&&(0,window.isNaN)(a.C))?b&&(lw(a,1),qw(a,"getSubtitlesTrack")):b?(a.aa()&&a.Oa.reset(),lw(a,1),qw(a,"getNowPlaying"),tw(a)):a.D(1)};
vw=function(a,b){var c=b.params.videoId;delete b.params.videoId;c==a.Oa.videoId&&(g.cc(b.params)?a.Oa.o=null:a.Oa.o=b.params,a.U("remotePlayerChange"))};
ww=function(a,b){var c=b.params.videoId||b.params.video_id,d=(0,window.parseInt)(b.params.currentIndex,10);a.Oa.listId=b.params.listId||a.Oa.listId;g.bw(a.Oa,c,d);a.U("remoteQueueChange")};
yw=function(a,b){b.params=b.params||{};ww(a,b);xw(a,b);a.U("autoplayDismissed")};
xw=function(a,b){var c=(0,window.parseInt)(b.params.currentTime||b.params.current_time,10);g.$v(a.Oa,(0,window.isNaN)(c)?0:c);c=(0,window.parseInt)(b.params.state,10);c=(0,window.isNaN)(c)?-1:c;-1==c&&-1E3==a.Oa.g&&(c=-1E3);a.Oa.g=c;c=Number(b.params.loadedTime);a.Oa.L=(0,window.isNaN)(c)?0:c;c=Number(b.params.duration);a.Oa.K=(0,window.isNaN)(c)?0:c;var c=a.Oa,d=Number(b.params.liveIngestionTime);c.C=d;c.G=(0,window.isNaN)(d)?!1:!0;var c=a.Oa,d=Number(b.params.seekableStartTime),e=Number(b.params.seekableEndTime);
c.D=(0,window.isNaN)(d)?0:d;c.B=(0,window.isNaN)(e)?0:e;1==a.Oa.g?rw(a):pw(a);a.U("remotePlayerChange")};
zw=function(a,b){if(-1E3!=a.Oa.g){var c=1083;switch((0,window.parseInt)(b.params.adState,10)){case 1:c=1081;break;case 2:c=1082}a.Oa.g=c;a.U("remotePlayerChange")}};
Aw=function(a,b){var c="true"==b.params.muted;a.Oa.volume=(0,window.parseInt)(b.params.volume,10);a.Oa.muted=c;a.U("remotePlayerChange")};
Bw=function(a,b){a.G=b.params.videoId;a.U("nowAutoplaying",(0,window.parseInt)(b.params.timeout,10))};
Cw=function(a,b){var c="true"==b.params.hasNext;a.Oa.Yd="true"==b.params.hasPrevious;a.Oa.hasNext=c;a.U("previousNextChange")};
tw=function(a){g.Dr(a.L);a.L=g.Fr((0,g.A)(a.D,a,1),864E5)};
qw=function(a,b,c){c?kw("Sending: action="+b+", params="+g.eg(c)):kw("Sending: action="+b);a.g.sendMessage(b,c)};
Dw=function(a,b){this.g=a||0;this.spatialAudioType=b||0};
Gw=function(a,b,c,d,e,f,k,l,m,n,q){this.width=a;this.height=b;this.quality=f||Ew(a,b);this.o=g.Fw[this.quality];this.isAccelerated=!!k;this.fps=c||0;this.stereoLayout=!e||null!=d&&0!=d&&1!=d?0:e;this.projectionType=d?2==d&&2==e?3:d:0;(a=l)||(a=this.fps,b=this.projectionType,c=g.Fw[this.quality],a=0==c?g.Q("YTP_AUTO"):c+(2==b||3==b||4==b?"s":"p")+(55<a?"60":49<a?"50":39<a?"48":""));this.qualityLabel=a;this.g=m||"";this.primaries=n||"";this.A=!1!==q};
Hw=function(a){return"smpte2084"==a.g||"arib-std-b67"==a.g};
Ew=function(a,b){for(var c=Math.max(a,b),d=Math.min(a,b),e=Iw[0],f=0;f<Iw.length;f++){var k=Iw[f],l=g.Fw[k];if(c>=Math.floor(16*l/9)*Gw.prototype.B||d>=l*Gw.prototype.B)return e;e=k}return"tiny"};
Lw=function(a,b,c,d,e,f,k,l){this.id=a;this.o=0<=b.indexOf("/mp4")?1:0<=b.indexOf("/webm")?2:0<=b.indexOf("/x-flv")?3:0<=b.indexOf("/vtt")?4:0;this.mimeType=b;this.g=k||0;this.B=l||0;this.audio=c||null;this.video=d||null;this.Ub=e||null;this.ec=f||null;this.A=Jw[Kw(this)]||""};
Kw=function(a){return a.id.split(";",1)[0]};
Mw=function(a){return"9"==a.A||"("==a.A||"9h"==a.A||"(h"==a.A};
Nw=function(a){return"9h"==a.A||"(h"==a.A};
Ow=function(a){return!(a.audio&&a.video)};
Pw=function(a){return 0<=a.indexOf("opus")||0<=a.indexOf("vorbis")||0<=a.indexOf("mp4a")};
Qw=function(a){return 0<=a.indexOf("vp9")||0<=a.indexOf("vp8")||0<=a.indexOf("avc1")};
Rw=function(a,b,c,d,e,f,k){var l=new Dw;b in g.Fw||(b="small");d&&e?(e=(0,window.parseInt)(e,10),d=(0,window.parseInt)(d,10)):(e=g.Fw[b],d=Math.round(16*e/9));b=new Gw(d,e,0,null,void 0,b,f,void 0,void 0,void 0,k);a=(0,window.unescape)(a.replace(/&quot;/g,'"'));return new Lw(c,a,l,b)};
Sw=function(a,b){this.experimentIds=a?a.split(","):[];this.flags=g.Gr(b||"");var c={};(0,g.G)(this.experimentIds,function(a){c[a]=!0});
this.experiments=c;this.A=!!c["9414740"]};
Tw=function(a,b){this.g=a;this.o=!!b;this.A=!1};
Uw=function(a){this.jd=a};
Vw=function(a,b,c){this.o=a||0;this.g=b||0;this.A=c};
Ww=function(a,b){return a.o==b.o&&a.g==b.g&&a.A==b.A};
Xw=function(a,b,c){return new Vw(g.Fw[a]||0,g.Fw[b]||0,c)};
Yw=function(a){var b=g.Fw.auto;return a.o==b&&a.g==b};
$w=function(a,b){if(b.A&&Yw(b))return Zw;if(b.A||Yw(a))return b;if(a.A||Yw(b))return a;var c=a.o&&b.o?Math.max(a.o,b.o):a.o||b.o,d=a.g&&b.g?Math.min(a.g,b.g):a.g||b.g,c=Math.min(c,d);return c==a.o&&d==a.g?a:new Vw(c,d,!1)};
g.ax=function(a){var b=a.g||a.o;return bc(function(a){return g.Fw[a]==b})||"auto"};
bx=function(a,b){var c=g.Fw[b];return a.o<=c&&(!a.g||a.g>=c)};
cx=function(){var a=g.ku("yt-player-volume")||{},b=a.volume;return{volume:(0,window.isNaN)(b)?100:g.td(Math.floor(b),0,100),muted:!!a.muted}};
dx=function(a){g.ju("yt-player-bandwidth",a,2592E3)};
ex=function(){return g.ku("yt-player-quality")||"auto"};
fx=function(a){g.ju("yt-player-watch-later-pending",a)};
gx=function(){return g.ku("yt-player-performance-cap")||0};
hx=function(a,b,c){if(g.ya(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}};
ix=function(a,b,c){g.u(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return hx(a)};
kx=function(a,b){g.I.call(this);this.app=a;this.g=!0;this.o=null;this.B={};this.A={};this.C={};this.D=new window.Set;this.playerType=b;S(this,"cueVideoById",this.Oq);S(this,"loadVideoById",this.gz);S(this,"cueVideoByUrl",this.Vy);S(this,"loadVideoByUrl",this.hz);S(this,"playVideo",this.jc);S(this,"pauseVideo",this.ac);S(this,"stopVideo",this.ze);S(this,"clearVideo",this.Ty);S(this,"getVideoBytesLoaded",this.az);S(this,"getVideoBytesTotal",this.bz);S(this,"getVideoLoadedFraction",this.ym);S(this,"getVideoStartBytes",
this.cz);S(this,"cuePlaylist",this.Uy);S(this,"loadPlaylist",this.fz);S(this,"nextVideo",this.Cg);S(this,"previousVideo",this.Gh);S(this,"playVideoAt",this.Sq);S(this,"setShuffle",this.setShuffle);S(this,"setLoop",this.jz);S(this,"getPlaylist",this.ce);S(this,"getPlaylistIndex",this.Qq);S(this,"getPlaylistId",this.getPlaylistId);S(this,"loadModule",this.Fh);S(this,"unloadModule",this.tj);S(this,"setOption",this.Ac);S(this,"getOption",this.Jb);S(this,"getOptions",this.Qf);S(this,"mute",this.mute);
S(this,"unMute",this.Ae);S(this,"isMuted",this.zc);S(this,"setVolume",this.setVolume);S(this,"getVolume",this.getVolume);S(this,"seekTo",this.Kb);S(this,"getPlayerState",this.Eh);S(this,"getPlaybackRate",this.Vb);S(this,"setPlaybackRate",this.de);S(this,"getAvailablePlaybackRates",this.Bg);S(this,"getPlaybackQuality",this.Dh);S(this,"setPlaybackQuality",this.Hh);S(this,"getAvailableQualityLevels",this.xm);S(this,"getCurrentTime",this.getCurrentTime);S(this,"getDuration",this.getDuration);S(this,"addEventListener",
this.addEventListener);S(this,"removeEventListener",this.removeEventListener);S(this,"getVideoUrl",this.getVideoUrl);S(this,"getDebugText",this.Ch);S(this,"getVideoEmbedCode",this.Rq);S(this,"getVideoData",this.ca);S(this,"addCueRange",this.Nq);S(this,"removeCueRange",this.Tq);S(this,"setSize",this.setSize);S(this,"getApiInterface",this.Wy);S(this,"destroy",this.destroy);S(this,"showVideoInfo",this.Wq);S(this,"hideVideoInfo",this.dz);S(this,"getMediaReferenceTime",this.Yy);jx(this,"getInternalApiInterface",
this.Xy);jx(this,"getAdState",this.Pq);jx(this,"isNotServable",this.ez);jx(this,"getUpdatedConfigurationData",this.Zy);jx(this,"sendAbandonmentPing",this.iz);jx(this,"setAutonav",this.Uq);jx(this,"setAutonavState",this.Vq);jx(this,"startInteractionLogging",this.kz);jx(this,"channelSubscribed",this.Ry);jx(this,"channelUnsubscribed",this.Sy)};
S=function(a,b,c){a.B[b]=(0,g.A)(function(){lx(this,b);return c.apply(this,arguments)},a)};
jx=function(a,b,c){a.A[b]=(0,g.A)(function(){lx(this,b);return c.apply(this,arguments)},a)};
lx=function(a,b){var c=a.app.V;c.experiments.g("web_player_api_logging")&&!a.D.has(b)&&(a.D.add(b),c={callerUrl:c.W,methodName:b},a.app.V.experiments.g("web_player_gel_logging_killswitch")||a.app.aa.U("onLogToGel",{payload_name:"webPlayerApiCalled",payload:c}))};
nx=function(a,b,c){b=g.td(Math.floor(b),0,100);(0,window.isFinite)(b)&&mx(a.app,{volume:b,muted:a.zc()},c)};
ox=function(a,b){mx(a.app,{muted:!0,volume:a.getVolume()},b)};
px=function(a,b){mx(a.app,{muted:!1,volume:Math.max(5,a.getVolume())},b)};
g.rx=function(a,b,c){this.start=a;this.end=b;this.A=qx++;a=c||{};this.Ca=a.id||"";this.B=a.priority||7;this.active=!0;this.visible=a.visible||!1;this.style=a.style||"ytp-ad-progress";this.namespace=a.namespace||"";this.color="";a.color&&(b=a.color.toString(16),this.color="#"+Array(7-b.length).join("0")+b);this.g=null;this.tooltip=a.tooltip;this.visible=this.visible;this.style=this.style;this.start=this.start};
sx=function(a){switch(a.style){case "ytp-chapter-marker":return 8;case "ytp-ad-progress":return 6;case "ytp-time-marker":return Number.POSITIVE_INFINITY;default:return 0}};
g.tx=function(a,b){return a.start-b.start||a.B-b.B||a.A-b.A};
ux=function(a,b,c,d,e,f,k,l){this.duration=c;this.endTime=b+c;this.ingestionTime=d;this.ya=a;this.sourceURL=e;this.startTime=b;this.o=k||0;this.range=f||null;this.g=l||!1};
g.vx=function(){this.segments=[]};
wx=function(a,b){if(b>a.Mb())a.segments=[];else{var c=g.ib(a.segments,function(a){return a.ya>=b},a);
0<c&&a.segments.splice(0,c)}};
xx=function(a,b,c,d,e){this.data=a;this.offset=b;this.size=c;this.type=d;this.o=e?0:8;this.g=this.offset+this.o};
yx=function(a){var b=a.data.getInt32(a.offset+a.o);a.o+=4;return b};
zx=function(a){var b=a.data.getUint32(a.offset+a.o);a.o+=4;return b};
Ax=function(a){var b=a.data,c=a.offset+a.o,b=4294967296*b.getUint32(c)+b.getUint32(c+4);a.o+=8;return b};
Bx=function(a){var b=[];do{var c=a.data.getUint8(a.offset+a.o);b.push(c);a.o++}while(0!=c);b.pop()};
Cx=function(a){this.data=new window.DataView(new window.ArrayBuffer(a));this.g=0};
Dx=function(a,b){a.data.setInt32(a.g,b);a.g+=4};
Ex=function(a,b){for(var c=0;c+4<=b.size;)Dx(a,b.data.getUint32(b.offset+c)),c+=4;for(;c<b.size;)a.data.setUint8(a.g++,b.data.getUint8(b.offset+c++))};
Fx=function(a,b,c){this.Ee=a;this.durationSecs=b;this.context=c};
Gx=function(a){this.g=a;this.o=(0,window.parseInt)(this.g["Sequence-Number"],10)||0;this.ingestionTime=((0,window.parseInt)(this.g["Ingestion-Walltime-Us"],10)||0)/1E6;this.A=(((0,window.parseInt)(this.g["First-Frame-Time-Us"],10)||0)+((0,window.parseInt)(this.g["First-Frame-Uncertainty-Us"],10)||0))/1E6;this.G=((0,window.parseInt)(this.g["Target-Duration-Us"],10)||0)/1E6;this.D="T"==this.g["Overlayed-With-Slate"];this.C="T"==this.g["Stream-Finished"];this.B="T"==this.g.Streamable};
Hx=function(a,b,c){this.o=a||0;this.yaw=b||0;this.A=c;this.g=c.getUint32(4)};
Ix=function(a){var b={};a=a.split("\r\n");for(var c=0;c<a.length;c++){if(0==a[c].length)return b;var d=a[c].match(/([^:]+):\s+([\S\s]+)/);null!=d&&(b[d[1]]=d[2])}return null};
Kx=function(a,b){var c=Jx(a.data,a.g,1952868452),d=Jx(a.data,a.g,1953658222),e=yx(c);yx(c);e&2&&yx(c);var c=e&8?yx(c):0,f=yx(d),k=f&1,e=f&4,l=f&256,m=f&512,n=f&1024,f=f&2048,q=zx(d);k&&yx(d);e&&yx(d);for(var r=k=0;r<q;r++){var v=l?yx(d):c;m&&yx(d);e&&0==r||!n||yx(d);f&&yx(d);k+=v}return k/b};
Nx=function(a){a=new window.DataView(a.buffer,a.byteOffset,a.byteLength);return(a=Lx(a,1836476516))?Mx(a):window.NaN};
Jx=function(a,b,c){for(;Ox(a,b);){var d=Px(a,b);if(d.type==c)return d;b+=d.size}return null};
Lx=function(a,b){for(var c=0;Ox(a,c);){var d=Px(a,c);if(d.type==b)return d;c=Qx(d.type)?c+8:c+d.size}return null};
Rx=function(a,b){if(a.data.getUint8(a.g)){var c=a.data,d=a.g+4;c.setUint32(d,Math.floor(b/4294967296));c.setUint32(d+4,b&4294967295)}else a.data.setUint32(a.g+4,b)};
Sx=function(a){if(a.data.getUint8(a.g)){var b=a.data;a=a.g+4;b=4294967296*b.getUint32(a)+b.getUint32(a+4)}else b=a.data.getUint32(a.g+4);return b};
Px=function(a,b){var c=a.getUint32(b),d=a.getUint32(b+4);return new xx(a,b,c,d)};
Mx=function(a){var b=a.data.getUint8(a.g)?20:12;return a.data.getUint32(a.g+b)};
Tx=function(a){return a.data.getUint32(a.g+8)};
Ux=function(a){var b=a.data.getUint8(a.g);a.data.getUint16(a.g+(0==b?22:30));return a.data.getUint32(a.g+(0==b?28:36))};
Ox=function(a,b){if(8>a.byteLength-b)return!1;var c=a.getUint32(b);if(8>c||a.byteLength-b<c)return!1;c=a.getUint32(b+4);if(1635148593==c||1635148611==c||1937126244==c||1936995172==c)return!0;for(c=4;8>c;c++){var d=a.getInt8(b+c);if(97>d||122<d)return!1}return!0};
Qx=function(a){return 1836019558==a||1836019574==a||1835297121==a||1835626086==a||1937007212==a||1953653094==a||1953653099==a};
Vx=function(a){var b=Lx(a,1937011556);if(!b)return null;b=Jx(a,b.g+8,1635148593);if(!b)return null;var c=Jx(a,b.g+78,1936995172),d=Jx(a,b.g+78,1937126244);if(!d)return null;b=null;if(c)switch(c.skip(4),b=c.data.getUint8(c.offset+c.o),c.o+=1,b){default:b=0;break;case 1:b=2;break;case 2:b=1;break;case 3:b=255}c=null;if(d=Jx(a,d.g,1886547818)){var e=Jx(a,d.g,1886546020),f=Jx(a,d.g,2037673328);if(!f&&(f=Jx(a,d.g,1836279920),!f))return null;e&&(yx(e),c=yx(e)/65536,yx(e));a=new window.DataView(f.data.buffer,
f.g,f.size-8);return new Hx(b,c,a)}return null};
Wx=function(a){return(a=Jx(a,0,1836019558))?a.offset+a.size:null};
Xx=function(a,b){for(var c=Jx(a,0,b);c;)a.setUint32(c.offset+4,1936419184),c=Jx(a,c.offset+c.size,b)};
Yx=function(a,b,c,d){d=void 0===d?!1:d;var e=Jx(a,0,1836019558);if(!e)return null;var f=Jx(a,e.g,1835427940),k=Jx(a,e.g,1953653094),l=Jx(a,e.g,1886614376);if(!f||!k)return null;var m=Jx(a,k.g,1952868452),n=Jx(a,k.g,1953658222),q=Jx(a,k.g,1952867444);if(!m||!n||!q)return null;var r=Jx(a,k.g,1935763823),v=Jx(a,k.g,1935763834);if(r){var D=yx(r);var E=yx(r);if(0!=D||1!=E)return null;D=yx(r)}for(var E=Jx(a,k.g,1935828848),k=Jx(a,k.g,1936158820),z=yx(m),R=yx(m),V=z&2,xa=z&1?Ax(m):0,ra=V?yx(m):0,Y=z&8?yx(m):
0,gb=z&16?yx(m):0,fc=z&32?yx(m):0,z=yx(n),Il=z&1,jj=z&4,i2=z&256,m=z&512,j2=z&1024,k2=z&2048,z=yx(n),l2=Il?yx(n):0,m2=jj?yx(n):0,Il=[],EN=[],GA=[],HA=[],FN=0,bd=0,To=0;To<z;To++){var n2=i2?yx(n):Y;m&&Il.push(yx(n));var Jl=fc;jj&&0==To?Jl=m2:j2&&(Jl=yx(n));EN.push(Jl);Jl=k2?yx(n):0;0==To&&(FN=Jl);GA.push(bd+Jl);HA.push(To);bd+=n2}1<=Math.abs(bd-b)&&c({flaw:"segDurMismatch",dts:bd.toFixed(),seg:b.toFixed()});g.Eb(HA,function(a,b){return GA[a]-GA[b]});
c=[];for(bd=0;bd<z;bd++)c[HA[bd]]=bd;bd=V?4:0;fc=16*z;jj=68+bd+q.size+fc+(r?r.size:0)+(v?v.size:0)+(E?E.size:0)+(k?k.size:0)+(l?l.size:0);n=jj-e.size;Y=new Cx(jj+(d?0:e.offset));!d&&e.offset&&Y.Li(a,0,e.offset);Dx(Y,jj);Dx(Y,1836019558);Ex(Y,f);Dx(Y,jj-24-(l?l.size:0));Dx(Y,1953653094);Dx(Y,16+bd);Dx(Y,1952868452);Dx(Y,131072|(V?2:0));Dx(Y,R);V&&Dx(Y,ra);Ex(Y,q);Dx(Y,20+fc);Dx(Y,1953658222);Dx(Y,16781057);Dx(Y,z);Dx(Y,xa+l2+n);for(a=bd=0;a<z;a++)e=c[a],d=Math.round(b*e/z),e=Math.round(b*(e+1)/z)-
d,d=d-bd+FN,Dx(Y,e),Dx(Y,m?Il[a]:gb),Dx(Y,EN[a]),Dx(Y,d),bd+=e;r&&(Dx(Y,r.size),Dx(Y,1935763823),Dx(Y,0),Dx(Y,1),Dx(Y,D+n));v&&Ex(Y,v);E&&Ex(Y,E);k&&Ex(Y,k);l&&Ex(Y,l);return Y.data.buffer};
Zx=function(){var a=g.y("yt.player.utils.videoElement_");a||(a=g.Yd("VIDEO"),g.x("yt.player.utils.videoElement_",a,void 0));return a};
by=function(a){var b=Zx();try{if(b.canPlayType){a=a?$x:ay;for(var c=0;c<a.length;c++)if(b.canPlayType(a[c]))return null}return"fmt.noneavailable"}catch(d){return"html5.missingapi"}};
cy=function(){var a=Zx();try{var b=a.muted;a.muted=!b;return a.muted!=b}catch(c){}return!1};
dy=function(a){a=g.Wd("DIV",{"class":a});window.document.body.appendChild(a);var b="none"==g.$g(a,"display");g.de(a);return b};
ey=function(){this.length=1};
fy=function(){this.buffered=new ey};
gy=function(a,b){if(!a)return-1;for(var c=0;c<a.length;c++)if(a.start(c)<=b&&a.end(c)>=b)return c;return-1};
hy=function(a,b){var c=gy(a,b);return 0<=c?a.end(c):window.NaN};
iy=function(a){return a&&a.length?a.end(a.length-1):window.NaN};
jy=function(){var a=[],b=[];return{start:function(b){return a[b]},
end:function(a){return b[a]},
length:a.length}};
ky=function(a,b){var c=hy(a,b);return 0<=c?c-b:0};
ly=function(a){var b="";if(a)for(var c=0;c<a.length;c++)b+=a.start(c).toFixed(3)+"-"+a.end(c).toFixed(3)+",";return b};
my=function(){};
ny=function(){g.I.call(this);this.o=null;this.D=this.C=!1;this.B=new g.$e;g.J(this,this.B)};
qy=function(a,b){var c="";b&&(oy(a,b),c=b.g);a.gc()&&""==c||(c&&a.gc()!=c&&py(a,c),b&&b.o||a.load(),a.D||(a.addEventListener("volumechange",a.bp),a.D=!0))};
oy=function(a,b){a.o&&null!=b&&b.g==a.o.g||(a.o&&a.o.dispose(),a.o=b)};
sy=function(a){return ky(ry(a),a.getCurrentTime())};
ty=function(a){var b=ry(a);return 0<iy(b)&&a.getDuration()?hy(b,a.getCurrentTime()):0};
uy=function(a){var b=a.getDuration();return window.Infinity==b?1:b?ty(a)/b:0};
vy=function(a){return{vct:a.getCurrentTime().toFixed(3),vd:a.getDuration().toFixed(3),vpl:ly(a.g.played||jy()),vbu:ly(ry(a)),vpa:a.g.paused,vsk:a.g.seeking,ven:a.g.ended,vpr:a.Vb(),vrs:a.g.readyState,vns:a.g.networkState,vec:a.kd(),vvol:a.getVolume()}};
wy=function(a,b,c){g.we.call(this,b,a);this.o=c||null};
yy=function(a){ny.call(this);this.g=a;this.A={}};
py=function(a,b){var c=a.Vb();a.g.src=b;a.de(c)};
ry=function(a){return a.g.buffered||jy()};
zy=function(a,b){this.o=a;this.A=b;this.B=0;Object.defineProperty(this,"timestampOffset",{get:this.NG,set:this.RG});Object.defineProperty(this,"buffered",{get:this.LG})};
Ay=function(){this.length=0};
By=function(a){this.activeSourceBuffers=this.sourceBuffers=[];this.g=a;this.o=window.NaN;this.A=0;Object.defineProperty(this,"duration",{get:this.MG,set:this.QG});Object.defineProperty(this,"readyState",{get:this.OG});this.g.addEventListener("webkitsourceclose",(0,g.A)(this.PG,this),!0)};
Cy=function(a,b){g.I.call(this);this.G=new g.dt(this);g.J(this,this.G);this.o=this.g=null;this.A=window.MediaSource?new window.MediaSource:window.WebKitMediaSource?new window.WebKitMediaSource:new By(a.na());var c=this.A;c=c.BH?c.g.webkitMediaSourceURL:window.URL.createObjectURL(c);this.H=new Tw(c,!0);this.C=this.D=this.B=null;this.O=b;et(this.G,this.A,["sourceopen","webkitsourceopen"],this.L);et(this.G,this.A,["sourceclose","webkitsourceclose"],this.K)};
Dy=function(a){a.C||(a.C=new window.Promise((0,g.A)(function(a){this.B=a},a)));
return a.C};
Ey=function(a){try{return"open"==a.A.readyState}catch(b){return!1}};
Fy=function(a){try{return"closed"==a.A.readyState}catch(b){return!0}};
Gy=function(a){return!!(a.g&&a.g.updating||a.o&&a.o.updating)};
Hy=function(){return!(!window.MediaSource||!window.MediaSource.isTypeSupported)};
Iy=function(a){return a.g?!!a.g.appendBuffer:Hy()};
Jy=function(a){if(/opus/.test(a)&&(g.es&&!ai("38")||fs()))return!1;if(window.MediaSource&&window.MediaSource.isTypeSupported)return window.MediaSource.isTypeSupported(a);if(/webm/.test(a)&&!cs())return!1;'audio/mp4; codecs="mp4a.40.2"'==a&&(a='video/mp4; codecs="avc1.4d401f"');return!!Zx().canPlayType(a)};
g.Ky=function(){this.He=this.Ge=!1;this.B=20971520;this.D=8388608;this.o=window.NaN;this.da=3145728;this.K=62914560;this.fa=10485760;this.Gc=this.Fa=0;this.H=window.NaN;this.Nk=65536;this.Ug=this.wb=2;this.Tg=25;this.G=2097152;this.wf=1048576;this.X=!1;this.O=1800;this.Ea=5;this.Ka=10;this.T=30;this.Xa=1;this.g=1.15;this.A=1.05;this.ne=8;this.ri=!1;this.pe=!0;var a;!(a=Zr("xboxone"))&&(a=ds())&&(a=/WebKit\/([0-9]+)/.exec(g.Ob),a=!(a&&602<=(0,window.parseInt)(a[1],10)));this.Gk=a||$r();this.wa=15;
this.Wa=90;this.Va=!1;this.Ua=this.Wg=!0;this.Bb=g.es&&!0;this.il=!0;this.pi=this.W=!1;this.Vg=.8;this.uf=this.Ke=!1;this.vf=!0;this.ba=0;this.fb=this.sc=!1;this.Fc=25;this.ni=!0;this.Xg=this.Ma=!1;this.L=6;this.Dc=!1;this.oi=this.ib=this.Ya=0;this.Je=!1;this.aa=0;this.la=!1;this.ha=0;this.Ie=!1;this.kb=0;this.Fk=this.Qd=this.Cb=!1;this.La=0;this.oe=this.C=this.Ec=this.Qb=!1;this.za=0;this.bc=this.oa=!1;this.ah=.5;this.bh=2;this.Yg=.8;this.Zg=.2};
Ly=function(a,b){1080<b.video.o&&!a.Ge&&(a.B=36700160,a.D=5242880,a.da=10485760,a.G=4194304,a.Ge=!0);2160<b.video.o&&!a.He&&(a.B=104857600,a.H=13107200,a.He=!0);a.wf=Math.min(a.G,5*b.g)};
Py=function(a,b){var c=new g.Ky;c.Xa=a.experiments.o("html5_throttle_rate")||c.Xa;a.experiments.g("html5_streaming_xhr")&&(c.W=!0);a.experiments.g("html5_streaming_debug")&&(c.W=!0,c.fb=!0);c.ba=a.experiments.o("html5_idle_preload_secs");c.ri=a.experiments.g("html5_use_long_term_bandwidth_estimator");c.L=a.experiments.o("html5_min_buffer_to_resume");c.Ya=a.experiments.o("html5_variability_discount");c.ib=a.experiments.o("html5_variability_no_discount_thresh");c.oi=a.experiments.o("html5_variability_full_discount_thresh");
a.experiments.o("html5_max_av_sync_drift")&&(c.Fc=a.experiments.o("html5_max_av_sync_drift"));var d=a.schedule;d.A.o()==d.policy.D?c.T=10:c.T=a.experiments.o("html5_throttle_burst_secs")||c.T;a.experiments.o("html5_min_secs_between_format_selections")&&(c.ne=a.experiments.o("html5_min_secs_between_format_selections"));c.aa=a.experiments.o("html5_local_max_byterate_lookahead");c.la=a.experiments.g("html5_stop_overlapping_requests");c.Fa=a.experiments.o("html5_min_readbehind_secs");c.Gc=a.experiments.o("html5_min_readbehind_cap_secs");
c.ha=a.experiments.o("html5_min_startup_smooth_target")||c.ha;c.Ie=a.experiments.g("html5_preload_size_excludes_metadata");c.kb=a.experiments.o("html5_max_readahead_bandwidth_cap");c.Cb=a.experiments.g("disable_html5_copy_pre_moof");c.Qd=a.experiments.g("html5_disable_audio_append_cap");c.Fk=a.experiments.g("html5_disable_non_contiguous");c.La=a.experiments.o("html5_post_interrupt_readahead");c.Qb=a.experiments.g("html5_disable_urgent_upgrade_for_quality");c.Ec=a.experiments.g("html5_log_quota_exceeded");
a.experiments.g("html5_always_enable_timeouts")&&(c.Bb=!1);c.Ea=a.experiments.o("html5_repredict_misses")||c.Ea;a.experiments.g("html5_new_fallback")&&(c.C=!0,c.Wa=10);c.oe=a.experiments.g("html5_no_downgrade_with_tbd");c.za=a.experiments.o("html5_observed_downgrade_prop");c.bc=a.experiments.g("html5_enable_subsegment_readahead_v3");c.ah=a.experiments.o("html5_subsegment_readahead_target_buffer_health_secs");c.bh=a.experiments.o("html5_subsegment_readahead_timeout_secs");c.Yg=a.experiments.o("html5_subsegment_readahead_progress_timeout_fraction");
c.Zg=a.experiments.o("html5_subsegment_readahead_tail_margin_secs");if(ds()||a.experiments.g("dash_html5_safari8_workarounds"))c.Va=!0;if(Zr("trident/")||Zr("edge/"))c.o=240;g.Xg&&(c.K=41943040);g.My(a)||!Hy()?(c.B=8388608,c.D=524288,c.wb=5,c.da=2097152,c.G=1048576,c.Ug=1.5,c.Tg=15,c.X=!Hy(),c.pe=!1,c.H=4587520,bs()&&(c.H=786432),c.g*=1.1,c.A*=1.1,c.uf=!0,c.K=c.B,c.fa=c.D):a.isMobile&&(c.g*=1.3,c.A*=1.3);fs()&&(d="CHROMECAST/ANCHOVY"==a.B.cmodel,c.B=20971520,c.D=1572864,d&&(c.H=812500,c.O=1E3));c.il=
a.D;c.pi=!a.experiments.g("disable_fpa_sei_removal")&&Zr("windows nt")&&b.Of();b.rd()&&(a.experiments.g("disable_html5_manifestless_delay")||(c.sc=!0),c.Wg=!1,a.experiments.g("html5_manifestless_always")&&(c.Ua=!1,c.oa=!0));a.isAd()&&(c.L=0);a.experiments.g("html5_streaming_response_mediastream_rewrite_v2")&&b.Ta&&b.Ta.videoInfos.length&&1==b.Ta.videoInfos[0].o&&!g.as()&&(c.W=!0,c.fb=!0);/^re/.test(b.clientPlaybackNonce)&&(c.Je=!0,c.Ma=!0);c.Dc=b.Ve;/^pp/.test(b.clientPlaybackNonce)&&(c.Xg=!0,c.Ma=
!0);a.schedule.policy.A=b.rd()?.5:0;if(d=a.experiments.o("html5_deadzone_multiplier"))c.g*=d,c.A*=d;if(d=a.experiments.o("html5_request_sizing_multiplier"))c.Vg=d;a.experiments.g("html5_strip_emsg")&&(c.Ke=!0);c.o=a.experiments.o("html5_max_buffer_duration")||c.o;c.wa=a.experiments.o("html5_max_buffer_health_for_downgrade")||c.wa;c.Ka=a.experiments.o("html5_min_upgrade_health")||c.Ka;a.experiments.g("disable_html5_streaming_response_timing")&&(c.ni=!1);Ny(a.O,Oy)&&(c.H=window.NaN);return c};
Qy=function(a,b){this.start=a;this.end=b;this.length=b-a+1};
Ry=function(a){a=a.split("-");return 2==a.length&&(a=new Qy((0,window.parseInt)(a[0],10),(0,window.parseInt)(a[1],10)),!(0,window.isNaN)(a.start)&&!(0,window.isNaN)(a.end)&&!(0,window.isNaN)(a.length)&&0<a.length)?a:null};
Sy=function(a,b){return new Qy(a,a+b-1)};
Ty=function(a,b,c,d,e,f,k,l,m){this.ia=b;this.range=c;this.type=a;this.ya=0<=d?d:-1;this.startTime=e||0;this.duration=f||0;this.Ja=k||0;this.Pa=0<=l?l:this.range?this.range.length:window.NaN;this.B=!!m;this.range?(this.o=this.Ja+this.Pa==this.range.length,this.A=this.startTime+this.duration*this.Ja/this.range.length,this.C=this.duration*this.Pa/this.range.length):(this.o=0!=this.Pa,this.A=this.startTime,this.C=this.duration);this.g=this.A+this.C};
Uy=function(a,b,c){var d=!(!b||b.ia!=a.ia||b.type!=a.type||b.ya!=a.ya);return c?d&&(a.range&&b.range?b.range.end==a.range.end:b.range==a.range)&&b.Ja+b.Pa==a.Ja+a.Pa:d};
Vy=function(a){return 1==a.type||2==a.type};
Wy=function(a,b,c){return c||a.ia==b.ia?a.range&&b.range?a.range.start+a.Ja+a.Pa==b.range.start+b.Ja:a.ya==b.ya?a.Ja+a.Pa==b.Ja:a.ya+1==b.ya&&0==b.Ja&&a.o:!1};
Xy=function(a){1==a.length||(0,g.iv)(a,function(a){return!!a.range});
for(var b=1;b<a.length;b++);b=a[a.length-1];return new Qy(a[0].range.start+a[0].Ja,b.range.start+b.Ja+b.Pa-1)};
Zy=function(a){var b="";g.Qb(Yy(a),function(a,d){b+=d+"="+a+","});
return b.slice(0,-1)};
Yy=function(a){var b={};b.itag=Kw(a.ia.info);b.seg=a.ya;a.range&&(b.range=""+(a.range.start+a.Ja)+"-"+(a.range.start+a.Ja+a.Pa-1));b.time=""+a.A.toFixed(1)+"-"+(a.A+a.C).toFixed(1);b.off=a.Ja;return b};
$y=function(a,b){this.o=a;this.g=0;this.A=b||0};
az=function(a){return a.g>=a.o.byteLength};
gz=function(a){var b=new $y(a);if(bz(b)&&cz(b,[408125543,374648427,174,224])&&(b=dz(b),ez(b,30320))){var c=b.A+b.g,d=fz(b,!0),e=b.A+b.g-c+1;e||(e=Math.ceil(Math.log(d+2)/Math.log(2)/7));for(var f=1<<8-e,b=[];b.length<e-1;)b.unshift(d%256),d=Math.floor(d/256);b.unshift(d|f);a.setUint8(c-2,236);for(d=0;d<b.length;d++)a.setUint8(c-1+d,b[d])}};
lz=function(a){var b=new $y(a);bz(b);if(cz(b,[408125543,374648427,174,224]))b=dz(b);else return null;for(var c=a=null;!az(b);){var d=fz(b,!1);if(21432==d)switch(hz(b)){default:a=0;break;case 1:a=1;break;case 3:a=2;break;case 15:a=255}else 30320==d?c=dz(b):iz(b)}if(!c)return null;for(var e,b=null;!az(c);)switch(fz(c,!1)){case 30321:if(3!=hz(c))return null;break;case 30324:jz(c);break;case 30323:b=jz(c);break;case 30325:jz(c);break;case 30322:e=fz(c,!0);e=kz(c,e);e=new window.DataView(e.buffer,e.byteOffset,
e.byteLength);break;default:iz(c)}return e?new Hx(a,b,e):null};
dz=function(a){var b=fz(a,!0),c=a.o.byteOffset+a.g,c=new window.DataView(a.o.buffer,c,Math.min(b,a.o.buffer.byteLength-c)),c=new $y(c,a.A+a.g);a.g+=b;return c};
hz=function(a){for(var b=fz(a,!0),c=mz(a),d=1;d<b;d++)c=256*c+mz(a);return c};
jz=function(a){var b=fz(a,!0),c=0;4==b?c=a.o.getFloat32(a.g):8==b&&(c=a.o.getFloat64(a.g));a.g+=b;return c};
iz=function(a){var b=fz(a,!0);a.g+=b};
bz=function(a){var b=a.g;a.g=0;var c=!1;ez(a,440786851)&&(a.g=0,ez(a,408125543)&&(c=!0));a.g=b;return c};
nz=function(a){var b=a.g;a.g=0;var c=1E6;cz(a,[408125543,357149030,2807729])&&(c=hz(a));a.g=b;return c};
pz=function(a,b){var c=a.g;a.g=0;if(!oz(a)||!ez(a,160))return a.g=c,window.NaN;fz(a,!0);var d=a.g;if(!ez(a,161))return a.g=c,window.NaN;fz(a,!0);mz(a);var e=mz(a)<<8|mz(a);a.g=d;if(!ez(a,155))return a.g=c,window.NaN;d=hz(a);a.g=c;return(e+d)*b/1E9};
oz=function(a){if(bz(a)){if(!ez(a,408125543))return!1;fz(a,!0)}if(!ez(a,524531317))return!1;fz(a,!0);return!0};
cz=function(a,b){for(var c=0;c<b.length;c++){if(!ez(a,b[c]))return!1;c!=b.length-1&&fz(a,!0)}return!0};
ez=function(a,b){if(az(a))return!1;for(;fz(a,!1)!=b;)if(iz(a),az(a))return!1;return!0};
fz=function(a,b){var c=mz(a);if(1==c){for(var d=c=0;7>d;d++)c=256*c+mz(a);return c}for(var d=128,e=0;6>e&&d>c;e++)c=256*c+mz(a),d*=128;return b?c-d:c};
mz=function(a){return a.o.getUint8(a.g++)};
kz=function(a,b){var c=new window.Uint8Array(a.o.buffer,a.o.byteOffset+a.g,b);a.g+=b;return c};
qz=function(a,b,c,d,e){this.info=a;this.g=b;this.range=c;this.A=null;this.o=d;this.Jd=e};
rz=function(a){return a.range?new window.DataView(a.g,a.range.start,a.range.length):new window.DataView(a.g)};
sz=function(a,b){b=Math.min(b,a.info.Pa);var c=Sy(a.range.start,b);return[new qz(new Ty(a.info.type,a.info.ia,a.info.range,a.info.ya,a.info.startTime,a.info.duration,a.info.Ja,b,!1),a.g,c,a.o,a.Jd),new qz(new Ty(a.info.type,a.info.ia,a.info.range,a.info.ya,a.info.startTime,a.info.duration,a.info.Ja+b,a.info.Pa-b,a.info.B),a.g,new Qy(c.end+1,a.range.end),a.o,!1)]};
tz=function(a,b){if(1==a.info.ia.info.o){for(var c=a.info.ia.g,d=new window.DataView(a.g),e=window.NaN,f=window.NaN,k=0;Ox(d,k);){var l=Px(d,k);(0,window.isNaN)(e)&&(1936286840==l.type?e=Tx(l):1836476516==l.type&&(e=Mx(l)));if(1952867444==l.type){!e&&c&&(e=Nx(c));var m=Sx(l);(0,window.isNaN)(f)&&(f=Math.round(b*e)-m);Rx(l,m+f)}k=Qx(l.type)?k+8:k+l.size}return!0}c=new $y(new window.DataView(a.g));e=a.Jd?c:new $y(new window.DataView(a.info.ia.g.buffer));d=b;f=nz(e);e=c.g;c.g=0;if(oz(c)&&ez(c,231))if(k=
fz(c,!0),d=Math.floor(1E9*d/f),Math.ceil(Math.log(d)/Math.log(2)/8)>k)c=!1;else{for(f=k-1;0<=f;f--)c.o.setUint8(c.g+f,d&255),d>>>=8;c.g=e;c=!0}else c=!1;return c};
uz=function(a){var b;if(1==a.info.ia.info.o){for(var c=b=0,d=new window.DataView(a.g);Ox(d,b);){var e=Px(d,b);if(1936286840==e.type)var f=Tx(e),k=Ux(e),c=c+k/f;b=Qx(e.type)?b+8:b+e.size}b=c||window.NaN;if(!(0<=b))a:{b=a.info.ia.g;for(var c=0,d=new window.DataView(a.g),l,e=0;Ox(d,c);){f=Px(d,c);if(1836476516==f.type)l=Mx(f);else if(1836019558==f.type){!l&&b&&(l=Nx(b));if(!l){b=window.NaN;break a}k=Jx(f.data,f.g,1953653094);e+=Kx(k,l)}c=Qx(f.type)?c+8:c+f.size}b=e||window.NaN}}else l=new $y(new window.DataView(a.g)),
b=a.Jd?l:new $y(new window.DataView(a.info.ia.g.buffer)),b=pz(l,nz(b));return b||a.info.C};
vz=function(a){return 1==a.info.ia.info.o?a.A?a.A.D&&!!Jx(new window.DataView(a.g),0,1718909296):!1:bz(new $y(new window.DataView(a.g)))};
wz=function(){this.g=this.fe=this.o=this.A=0};
xz=function(a){a.A=(0,g.Ot)();a.o=0;a.fe=0;a.g=0};
yz=function(a,b){a[b]||(a[b]=new wz);return a[b]};
Az=function(a){return(a=zz.exec(a))?a[0]:""};
Cz=function(a){return Bz.test("https://"+a+"/")};
Dz=function(a){a=new g.Pm(a);Qm(a,window.document.location.protocol);g.Rm(a,window.document.location.hostname);window.document.location.port&&g.Sm(a,window.document.location.port);return a.toString()};
Ez=function(a){a=new g.Pm(a);Qm(a,window.document.location.protocol);return a.toString()};
Fz=function(a){this.B=a;this.C=this.o=this.D="";this.g={};this.A=""};
Hz=function(a){a.A||(a.A=Gz(a));return a.A};
Jz=function(a){Iz(a);return a.C};
Kz=function(a){Iz(a);return Sb(a.g,function(a){return null!==a})};
Lz=function(a,b){Iz(a);if("/videoplayback"!=a.o){var c=a.clone();c.set("playerfallback",""+b);return c}var d=Hz(a),e=new g.Pm(d),c=e.g.match("\\.a1\\.googlevideo\\.com$");e.g.match("\\.googlevideo\\.com$")?(g.Rm(e,"redirector.googlevideo.com"),d=e.toString()):e.g.match("r[1-9].*\\.c\\.youtube\\.com$")?(g.Rm(e,"www.youtube.com"),d=e.toString()):d=Dz(d);d=new Fz(d);b&&d.set("cmo=pf",""+b);c&&d.set("cmo=td","a1.googlevideo.com");return d};
Iz=function(a){if(a.B){if(!Mz.test(a.B))throw Error("Untrusted URL: "+a.B);var b=g.cn(a.B);a.D=b.B;a.C=b.g+(null!=b.C?":"+b.C:"");var c=b.o;if(0==c.indexOf("/videoplayback"))a.o="/videoplayback",c=c.substr(14);else if(0==c.indexOf("/api/manifest/")){var d=c.indexOf("/",14);0<d?(a.o=c.substr(0,d),c=c.substr(d+1)):(a.o=c,c="")}else a.o=c,c="";d=a.g;a.g=Nz(c);g.Ea(a.g,Oz(b.K()));g.Ea(a.g,d);"index.m3u8"==a.g.file&&(delete a.g.file,a.o+="/file/index.m3u8");a.B="";a.A=""}};
Gz=function(a){Iz(a);var b=a.D+(a.D?"://":"//")+a.C+a.o;if(Kz(a)){var c=[];g.Qb(a.g,function(a,b){null!==a&&c.push(b+"="+a)});
b+="?"+c.join("&")}return b};
Nz=function(a){a=a.split("/");var b=0;a[0]||b++;for(var c={};b<a.length;b+=2)a[b]&&Pz(c,a[b],a[b+1]);return c};
Oz=function(a){a=a.split("&");for(var b={},c=0;c<a.length;c++){var d=a[c],e=d.indexOf("=");0<e?Pz(b,d.substr(0,e),d.substr(e+1)):d&&(b[d]="")}return b};
Pz=function(a,b,c){if("cmo"==b){var d;0<=(d=c.indexOf("="))?(b="cmo="+c.substr(0,d),c=c.substr(d+1)):0<=(d=c.indexOf("%3D"))&&(b="cmo="+c.substr(0,d),c=c.substr(d+3))}a[b]=c};
Qz=function(a){this.g=a;this.o={};this.A=""};
Rz=function(a,b){var c=b.indexOf("?");if(0<c){var d=Oz(b.substr(c+1));g.Qb(d,function(a,b){this.set(b,a)},a);
b=b.substr(0,c)}c=Nz(b);g.Qb(c,function(a,b){this.set(b,a)},a)};
g.Tz=function(a){a.A||(a.A=Sz(a));return a.A};
Sz=function(a){var b=Hz(a.g),c=[];g.Qb(a.o,function(a,b){c.push(b+"="+a)});
if(!c.length)return b;var d=c.join("&");a=Kz(a.g)?"&":"?";return b+a+d};
Uz=function(a,b){var c=new Fz(b),d=c.get("req_id");d&&a.set("req_id",d);g.Qb(a.o,function(a,b){c.set(b,null)});
return c};
Vz=function(a){this.C=a.clone();this.D=a;this.o=null;this.A=0;this.B=-1;this.g=0};
Wz=function(a){a.o||(a.o=Lz(a.C,a.A||1));return a.o};
Xz=function(a,b){this.o=a[0].ia.C;this.B=b||"";this.g=a;this.range=this.g[0].range&&0<this.g[0].Pa?Xy(this.g):null;this.A=window.NaN;this.requestId=null};
g.Yz=function(a,b,c,d){if(/http[s]?:\/\//.test(a.B))var e=new Qz(new Fz(a.B));else{var f=a.o;e=f.D;if(b.C){if(b=yz(c,Jz(e)),2<=b.fe||1<=b.g)f=Wz(f),c=yz(c,Jz(f)),c.fe+c.g<=b.fe+b.g&&(e=f)}else 0<f.A&&(e=Wz(f));e=new Qz(e);a.B&&Rz(e,a.B)}(d=d||a.range)&&e.set("range",d.toString());a.requestId&&e.set("req_id",a.requestId);(0,window.isNaN)(a.A)||e.set("headm",a.A.toString());return e};
Zz=function(a){if(a.range)return a.range.length;a=a.g[0];return Math.round(a.C*a.ia.info.g)};
$z=function(a,b,c){this.index=null;this.info=b;this.initRange=c||null;this.g=null;this.B=this.o=!1;this.C=new Vz(a);this.G=null};
aA=function(a,b){a.info&&a.info.video&&4==a.info.video.projectionType&&!a.G&&(1==a.info.o?a.G=Vx(b):2==a.info.o&&(a.G=lz(b)))};
bA=function(a,b,c,d,e,f){f=void 0===f?0:f;$z.call(this,a,b,d);this.index=e||new g.vx;this.A=f;this.K=c;this.H=!0;if(this.D=!c)this.o=!0};
cA=function(a,b,c){this.segments=[];this.o=a;this.A=void 0===b?0:b;this.g=void 0===c?!1:c};
eA=function(a,b,c){b=dA(a,b);return 0<=b&&(c||!a.segments[b].g)};
dA=function(a,b){return g.Cb(a.segments,{ya:b},function(a,b){return a.ya-b.ya})};
fA=function(a,b,c){return new ux(b,c.startTime-(c.ya-b)*a.o,a.o,0,"sq/"+b,void 0,void 0,!0)};
gA=function(a,b,c,d,e){d=void 0===d?!1:d;e=void 0===e?14400:e;bA.call(this,a,b,"",void 0,void 0,c);this.index=new cA(c||0,e,d)};
hA=function(a,b,c,d,e){this.ya=a;this.Ee=b;this.durationSecs=c;this.g=d||window.NaN;this.o=e||window.NaN};
iA=function(a){return a.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2})\:(\d{2})\:(\d{2})\.(\d{3})$/)?a+"Z":a};
jA=function(a,b,c){for(;a;a=a.parentNode)if(a.attributes&&(!c||a.nodeName==c)){var d=a.getAttribute(b);if(d)return d}return""};
kA=function(a,b){for(var c=a;c;c=c.parentNode){var d=c.getElementsByTagName(b);if(0<d.length)return d[0]}return null};
lA=function(a){if(!a)return 0;var b=a.match(/PT(([0-9]*)H)?(([0-9]*)M)?(([0-9.]*)S)?/);return b?3600*(0,window.parseFloat)(b[2]||0)+60*(0,window.parseFloat)(b[4]||0)+(0,window.parseFloat)(b[6]||0):(0,window.parseFloat)(a)};
mA=function(){this.g=[];this.o=null;this.C=0;this.B=[];this.A=!1;this.D=""};
nA=function(a){var b=a.B;a.B=[];return b};
oA=function(){this.B=[];this.g=null;this.o={};this.A={}};
sA=function(a,b,c){var d=[];b=g.ma(b.getElementsByTagName("SegmentTimeline"));for(var e=b.next();!e.done;e=b.next()){var e=e.value,f=e.parentNode.parentNode,k=null;"Period"==f.nodeName?k=pA(a):"AdaptationSet"==f.nodeName?k=qA(a,f.attributes.id?f.attributes.id.value:f.attributes.mimetype.value):"Representation"==f.nodeName&&(k=rA(a,f.attributes.id.value));if(null==k)return;k.update(e,c);xb(d,nA(k))}Fb(d,function(a){return a.Ee});
xb(a.B,d)};
tA=function(a){a.g&&(a.g.g=[]);g.Qb(a.o,function(a){a.g=[]});
g.Qb(a.A,function(a){a.g=[]})};
pA=function(a){a.g||(a.g=new mA);return a.g};
qA=function(a,b){a.o[b]||(a.o[b]=new mA);return a.o[b]};
rA=function(a,b){a.A[b]||(a.A[b]=new mA);return a.A[b]};
g.uA=function(){this.Aa=0;this.g=new window.Float64Array(128);this.o=new window.Float64Array(128);this.B=1;this.A=!1};
vA=function(a){if(a.g.length<a.Aa+1){var b=2*a.g.length,b=b+2,c=a.g;a.g=new window.Float64Array(b+1);var d=a.o;a.o=new window.Float64Array(b+1);for(b=0;b<a.Aa+1;b++)a.g[b]=c[b],a.o[b]=d[b]}};
wA=function(a,b,c,d,e,f){$z.call(this,a,b,c||void 0);this.indexRange=d;this.D=null;this.index=new g.uA;this.A=e;this.lastModified=f};
xA=function(a,b,c,d){for(var e=[];b<=a.index.Mb();b++){var f=a.index,f=Sy(f.wj(b),b+1<f.Aa||f.A?f.g[b+1]-f.g[b]:-1),k=a.index.Id(b),l=a.index.getDuration(b),m=Math.max(0,c-f.start),n=Math.min(f.end+1,c+d)-(f.start+m);e.push(new Ty(3,a,f,b,k,l,m,n,b==a.index.Mb()&&m+n==f.length));if(f.start+m+n>=c+d)break}return new Xz(e)};
yA=function(a,b,c){return a(b,c).then(function(b){var d=!b.responseText||2048<b.responseText.length?"":0==b.responseText.indexOf("https://")?b.responseText:"";return d?yA(a,d,c):b})};
zA=function(a,b){return yA(function(a,b){return os(a,b,4,1E3)},a,b)};
AA=function(a,b,c){a=void 0===a?"":a;b=void 0===b?null:b;c=void 0===c?!1:c;g.gt.call(this);this.X=this.duration=0;this.isLive=this.B=!1;this.K=(0,g.Ot)();this.D=window.Infinity;this.g={};this.aa=a||"";this.G=this.O=0;this.C=null;this.oa=!!b&&b.g("html5_live_nonzero_first_segment_start_time");this.o=!1;this.L=[];this.wa=!!b&&b.g("html5_live_self_init_segments");this.A=null;this.za=c;this.la=!b||!b.g("html5_manifest_without_credentials");this.T=0;this.W=!!b&&b.g("disable_html5_manifest_namespace_redux");
this.fa="";this.H=window.NaN;this.ha=b&&b.g("disable_html5_duration_caching")?window.Infinity:10;this.da=!!b&&b.o("html5_stale_dash_manifest_retry_factor")||1};
BA=function(a){return Sb(a.g,function(a){return!!a.info.video&&2160<=a.info.video.o})};
CA=function(a){return Sb(a.g,function(a){return!!a.info.ec})};
FA=function(a,b,c,d,e){c=void 0===c?0:c;return(void 0===d?0:d)?DA(a,b,e):EA(a,b,c)};
EA=function(a,b,c){c=void 0===c?0:c;var d=new AA;d.duration=c||0;(0,g.G)(a,function(a){var c=IA(a,b,d.duration),e=Ry(a.init),l=Ry(a.index),m=(0,window.parseInt)(a.clen,10),n=JA(a.url,c,a.s);a=(0,window.parseInt)(a.lmt,10);n&&(c=new wA(n,c,e,l,m,a),d.g[c.info.id]=c)});
return d};
DA=function(a,b,c){var d=new AA("",null,!0);(0,g.G)(a,function(a){var e=IA(a,b),k=JA(a.url,e,a.s);a=(0,window.parseInt)(a.target_duration_sec,10);k&&(e=new gA(k,e,a,c&&c.g("html5_manifestless_always")),d.g[e.info.id]=e)});
d.B=!0;d.o=!0;d.isLive=!0;return d};
IA=function(a,b,c){c=void 0===c?0:c;var d=a.type,e=a.itag,f=KA(a),k=null;Qw(d)&&(k=(a.size||"640x360").split("x"),k=new Gw(+k[0],+k[1],+a.fps,+a.projection_type,+a.stereo_layout,void 0,!!a.isAccelerated,a.quality_label,a.eotf,a.primaries,!!a.isAcceleratedUiEnabled),d=LA(d,k));var l=null,m=null;if(Pw(d)){l=0;if("258"==e||"261"==e)l=6;l=new Dw(l,+a.spatial_audio_type);a.name&&(m=new dw(a.name,a.audio_track_id,"1"==a.isDefault))}var e=(0,window.parseInt)(a.bitrate,10)/8,n=(0,window.parseInt)(a.clen,
10);c=c&&n?n/c:0;var q=null;b&&a.drm_families&&(q={},(0,g.G)(a.drm_families.split(","),function(a){q[a]=b[a]}));
return new Lw(f,d,l,k,m,q,e,c)};
KA=function(a){var b=a.itag;a.xtags&&(b=a.itag+";"+a.xtags);return b};
JA=function(a,b,c){c=void 0===c?"":c;var d=new Fz(a);a.match(/https:\/\/yt.akamaized.net/)||d.set("alr","yes");d.set("keepalive","yes");d.set("ratebypass","yes");d.set("mime",(0,window.encodeURIComponent)(b.mimeType.split(";")[0]));c&&d.set("signature",wr(c));return d};
PA=function(a,b){var c=jA(b,"id"),c=c.replace(":",";");"captions"==c&&(c=jA(b,"lang"));var d=jA(b,"mimeType"),e=jA(b,"codecs"),d=e?d+'; codecs="'+e+'"':d,e=(0,window.parseInt)(jA(b,"bandwidth"),10)/8,f=(0,window.parseInt)(kA(b,"BaseURL").getAttribute(MA(a,"contentLength")),10),f=a.duration&&f?f/a.duration:0,k=null;if(Qw(d)){var k=(0,window.parseInt)(jA(b,"width"),10),l=(0,window.parseInt)(jA(b,"height"),10),m=(0,window.parseInt)(jA(b,"frameRate"),10),n=NA(jA(b,MA(a,"projectionType")));a:switch(jA(b,
MA(a,"stereoLayout"))){case "layout_left_right":var q=1;break a;case "layout_top_bottom":q=2;break a;default:q=0}k=new Gw(k,l,m,n,q)}m=l=null;if(Pw(d)){jA(b,"audioSamplingRate");var l=(0,window.parseInt)(jA(b.getElementsByTagName("AudioChannelConfiguration")[0],"value"),10),r,m=jA(b,MA(a,"spatialAudioType"));"spatial_audio_type_ambisonics_5_1"==m?r=1:"spatial_audio_type_ambisonics_quad"==m&&(r=2);l=new Dw(l,r);r=jA(b,"lang")||"und";(m=kA(b,"Role"))?(q=jA(m,"value")||"",Zb(OA,q)?(m=r+"."+OA[q],n="main"==
q,r=jA(b,MA(a,"langName"))||r+" - "+q,m=new dw(r,m,n)):m=null):m=null}n=null;if(r=kA(b,"ContentProtection"))if(g.as())if((n=r.attributes.schemeIdUri)&&"http://youtube.com/drm/2012/10/10"==n.value)for(n={},r=r.firstChild;null!=r;r=r.nextSibling)"yt:SystemURL"==r.nodeName&&(n[r.attributes.type.value]=r.textContent.trim());else n=null;else if((n=r.attributes.schemeIdUri)&&"http://youtube.com/drm/2012/10/10"==n.textContent)for(n={},r=r.firstChild;null!=r;r=r.nextSibling)"SystemURL"==r.localName&&"http://youtube.com/yt/2012/10/10"==
r.namespaceURI&&(n[r.attributes.type.textContent]=r.textContent.trim());else n=null;return new Lw(c,d,l,k,m,n,e,f)};
NA=function(a){switch(a){case "equirectangular":return 2;case "equirectangular_threed_top_bottom":return 3;case "mesh":return 4;case "rectangular":return 1;default:return 0}};
QA=function(a,b){b=void 0===b?"":b;a.G=1;a.K=(0,g.Ot)();return g.Kf(zA(b||a.aa,{format:"RAW",method:"GET",withCredentials:a.la}).then((0,g.A)(a.gx,a)),(0,g.A)(a.ix,a))};
RA=function(a,b,c){var d=a.getAttribute("media"),e=null;c||(a=a.getAttribute("mediaRange"),null!=a&&(0<=(0,window.parseInt)(a.split("-")[1],10)?e=Ry(a):d=d+"?range="+a));return new ux(b.ya,b.Ee,b.durationSecs,b.g,d,e,b.o)};
SA=function(a){return a.isLive&&(0,g.Ot)()-a.K>=a.D};
TA=function(a,b){var c=b||1<=a.da?a.D:a.D*a.da*(1+Math.random());(0,window.isFinite)(c)&&(SA(a)?a.br():(c=Math.max(0,a.K+c-(0,g.Ot)()),a.A||(a.A=new g.O(a.br,c,a),g.J(a,a.A)),a.A.start(c)))};
UA=function(a){if(!(0,window.isNaN)(a.H))return a.H;var b=a.g,c;for(c in b){var d=b[c].index;if(d&&d.Pb()){b=0;for(c=d.te();c<=d.Mb();c++)b+=d.getDuration(c);b/=d.pg();b=.5*Math.round(b/.5);d.pg()>a.ha&&(a.H=b);return b}if(a.isLive&&(d=b[c],d.A))return d.A}return window.NaN};
VA=function(a,b){for(var c in a.g){var d=a.g[c].index;if(d&&d.Pb()){var e=d.Te(b),f=d.Fm(e);if(f)return f+b-d.Id(e)}}return window.NaN};
WA=function(a,b){g.Qb(a.g,function(a){g.Qb(b,function(b,c){var d=a.C;d.D.set(c,b);d.C.set(c,b);d.o&&d.o.set(c,b)})})};
MA=function(a,b){return a.W?"yt:"+b:a.fa+":"+b};
LA=function(a,b){if('video/webm; codecs="vp9.2"'!=a)return a;null===XA&&(XA=window.MediaSource&&window.MediaSource.isTypeSupported&&window.MediaSource.isTypeSupported('video/webm; codecs="vp09.02.51.10.01.09.16"')&&!window.MediaSource.isTypeSupported('video/webm; codecs="vp09.02.51.10.01.09.99"'));XA&&(a='video/webm; codecs="vp09.02.51.10.01.'+("bt2020"==b.primaries?"09":"01")+"."+("smpte2084"==b.g?"16":"arib-std-b67"==b.g?"18":"01")+'"');return a};
YA=function(a,b,c,d){this.g=a;this.o=b;this.C=c;this.B={};this.A=null;this.fairPlayCert="";this.D=!!d&&d.g("edge_nonprefixed_eme")};
$A=function(a){return a.D?!1:!a.A&&!!ZA()&&"com.microsoft.playready"==a.o};
aB=function(a){return"com.microsoft.playready"==a.o};
bB=function(a){return!a.A&&!!ZA()&&"com.apple.fps.1_0"==a.o};
ZA=function(){var a=window.MSMediaKeys;ds()&&!a&&(a=window.WebKitMediaKeys);return a&&a.isTypeSupported?a:null};
eB=function(a){return window.navigator.requestMediaKeySystemAccess?g.es?ai("45"):g.cB||g.Dc?a.g("edge_nonprefixed_eme"):g.dB?ai("47"):!a.g("html5_no_nonprefixed_eme_for_other"):!1};
gB=function(a,b){g.I.call(this);this.A=[];this.o={};this.g={};this.B=null;this.C=b;fB(this,a)};
fB=function(a,b){for(var c in b)for(var d=g.ma(b[c]),e=d.next();!e.done;e=d.next()){e=e.value;if(!e.ec)return;for(var f in e.ec){if(!hB[f])return;for(var k=g.ma(hB[f]),l=k.next();!l.done;l=k.next())l=l.value,a.o[l]=a.o[l]||new YA(f,l,e.ec[f],a.C),a.g[f]=a.g[f]||{},a.g[f][e.mimeType]=!0}}a.A=iB.filter(function(b){return!!a.o[b]})};
jB=function(a,b){function c(a){b.B[a.contentType]=!0}
if(aB(b)){var d=Zx(),e;for(e in a.g[b.g])b.B[e]=!!d.canPlayType(e)}else d=b.A.getConfiguration(),d.audioCapabilities&&d.audioCapabilities.forEach(c),d.videoCapabilities&&d.videoCapabilities.forEach(c)};
lB=function(a){if(ZA()&&ci)a.B(new YA("fairplay","com.apple.fps.1_0","",a.C));else{var b=kB(),c=g.jb(a.A,function(c){var d=a.o[c],f=!1,k=!1,l;for(l in a.g[d.g])b(l,c)&&(d.B[l]=!0,f=f||0==l.indexOf("audio/"),k=k||0==l.indexOf("video/"));return f&&k}),c=c?a.o[c]:null;
a.A=[];a.B(c)}};
kB=function(){var a=ZA();if(a)return function(b,d){return a.isTypeSupported(d,b)};
var b=Zx();return b&&(b.addKey||b.webkitAddKey)?(0,g.A)(b.canPlayType,b):function(){return!1}};
mB=function(){this.g=8192;this.o=17;this.D=13E4;this.G=.5;this.C=.1;this.B=!1;this.T=!0;this.K=!1;this.H=60;this.A=0;this.O=this.L=!1};
nB=function(a){this.C=Math.exp(Math.log(.5)/a);this.A=this.B=0};
oB=function(a,b,c){this.K=0;this.G=a;this.C=b||.5;this.D=c||0;this.H="index";this.A=0;this.B=[]};
qB=function(a,b){pB(a,"value");var c=b*a.A,d=0,e=window.NaN;a.B.some(function(a){d+=a.weight;e=a.value;if(d>=c)return!0});
return e};
pB=function(a,b){a.H!=b&&(a.H=b,Gb(a.B,b))};
rB=function(a){this.B=a;this.A=[]};
sB=function(){this.A=0;this.o=this.G=this.B=this.C=window.NaN;this.D=0;this.L=this.O=this.H=this.K=window.NaN;this.g=""};
tB=function(a){this.policy=a;this.K=this.L=0;this.B=-1;this.G=(0,g.Ot)();this.D=new oB(4,.6);this.H=a.O?new oB(5,.5,.2):new nB(4);this.A=this.policy.B?new nB(this.policy.o):new oB(this.policy.o,.5,this.policy.C);this.C=new rB(this.policy.o);this.g=this.policy.K?new nB(this.policy.H):null;this.o=new oB(30,.5);a=g.ku("yt-player-bandwidth")||{};var b=0<a.byterate?a.byterate:this.policy.D;this.A.g(this.policy.G,b);this.g&&this.g.g(this.policy.G,0<a.ltByterate?a.ltByterate:b);0<a.delay&&this.D.g(1,Math.min(+a.delay,
2));0<a.stall?this.H.g(1,+a.stall):0<a.tailDelay&&this.H.g(1,+a.tailDelay);this.B=(0,g.Ot)()};
uB=function(a,b,c){b=Math.max(b,.05);a.A.g(b,c/b);a.g&&a.g.g(b,c/b);a.G=(0,g.Ot)()};
wB=function(a,b,c){b=Math.max(b,a.policy.g);a.H.g(1,c/b);vB(a)};
xB=function(a){a=a.D.o();a=(0,window.isNaN)(a)?.5:a;return a=Math.min(a,5)};
yB=function(a,b,c){(0,window.isNaN)(c)||(a.K+=c);(0,window.isNaN)(b)||(a.L+=b)};
zB=function(a){return a.H.o()||0};
AB=function(a){var b=a.A.o(),b=0<b?b:1;if(!a.policy.T)return b;a=a.C.o();a=0<a?a:1;return a>2*b?(b+a)/2:b};
BB=function(a){a=a.g.o();return 0<a?a:1};
CB=function(a){var b={};b.delay=xB(a);b.stall=zB(a);b.byterate=AB(a);a.g&&(b.ltByterate=BB(a));return b};
vB=function(a){-1<a.B&&3E4<(0,g.Ot)()-a.B&&(dx(CB(a)),a.B=(0,g.Ot)())};
DB=function(a){return 4E3<=(0,g.Ot)()-a.G};
EB=function(a,b,c){this.videoInfos=a;this.g=b||null;this.audioTracks=[];this.o=c||null;if(this.g){var d={};(0,g.G)(this.g,(0,g.A)(function(a){if(a.Ub&&!d[a.id]){var b=new hw(a.id,a.Ub);d[a.id]=b;this.audioTracks.push(b)}},this))}};
FB=function(a){this.A=a||null;this.o=0;this.g=null};
GB=function(a){var b=new FB;b.o=2;b.g=a;return b};
HB=function(a){var b=new FB;b.o=1;b.g=a;return b};
IB=function(a,b,c){this.A=a;this.g=b;this.D=c;this.B={};this.C=!!g.y("cast.receiver.platform.canDisplayType");this.o=!this.C&&g.y("cast.receiver.platform.getValue")&&window.cast.receiver.platform.getValue("max-video-resolution-vpx")||null};
MB=function(a,b,c){if(2.2!=JB&&by(a.g)||c)return GB();var d={};a=Zx();b=g.ma(b);for(c=b.next();!c.done;c=b.next())if(c=c.value,Kw(c.jd)in KB||"5"==Kw(c.jd)?0:LB(a,c.jd.mimeType)){var e=c.jd.video.quality;d[e]&&2!=d[e].jd.o||(d[e]=c)}var f=[];d.auto&&f.push(d.auto);(0,g.G)(Iw,function(a){(a=d[a])&&f.push(a)});
return HB(f)};
NB=function(){var a=$r()&&!ai(29),b=Zr("google tv")&&Zr("chrome")&&!ai(30);return a||b?!1:!!(window.MediaSource||window.WebKitMediaSource||window.HTMLMediaElement&&window.HTMLMediaElement.prototype.webkitSourceAddId)};
LB=function(a,b){var c=a.canPlayType(b);OB?c=c||PB[b]:2.2==JB?c=c||QB[b]:$r()&&(c=c||RB[b]);return!!c};
g.SB=function(){return!(!LB(Zx(),"application/x-mpegURL")&&!NB())};
UB=function(a,b){var c={},d;for(d in b.g){var e=b.g[d],f=Kw(e.info);("304"!=f&&"266"!=f||b.B)&&TB(a,e.info)&&(c[e.info.A]=c[e.info.A]||[],c[e.info.A].push(e.info))}return c};
WB=function(a,b,c){var d={},e;g.Qb(b,function(a,b){var f=a.filter(function(a){return a.ec?c&&a.ec[c.g]&&c.B[a.mimeType]?"261"!=Kw(a)||Ny(this,VB)?!0:(e||(e=Zx()),!1):!1:!0},this);
f.length&&(d[b]=f)},a);
return d};
iC=function(a,b,c,d,e){function f(a){return!!k[a]}
var k=UB(a,b);CA(b)&&(k=WB(a,k,c));var l=a.A.g("html5_disable_vp9_hdr_enc")?XB:YB;a.g?!Zr("windows nt 5.1")||g.dB&&!a.A.g("html5_prefer_h264_on_xp")?(b.We()||b.xe()||b.Xd())&&ZB&&6>=JB&&(l=$B):l=$B:l=aC;c=bC;d&&(a.g&&(l=$B),c=cC);if(bs()||cs()||Ny(a,VB))c=dC;(b.We()||b.xe()||b.Xd())&&e&&(c=eC.concat(c));b=g.jb(l,f);d=g.jb(c,f);if(!b||!d)return GB();"9"==b&&k.h&&(e=function(a,b){return Math.max(a,b.video.height)},c=wd(k["9"],e,0),wd(k.h,e,0)>1.5*c&&(b="h"));
e=k[b];c=k[d];e=fC(a,e);gC(e,c);return HB(new EB(e,c,hC(a,k,b,d)))};
hC=function(a,b,c,d){var e=a.g?b.h:b[c];b=b.a;c=a.g&&"h"!=c;return e&&b&&(c||"a"!=d)?(e=fC(a,e),gC(e,b),new EB(e,b)):null};
gC=function(a,b){g.Eb(a,function(a,b){return b.video.height*b.video.width-a.video.height*a.video.width||b.g-a.g});
g.Eb(b,function(a,b){return b.g-a.g})};
fC=function(a,b){var c=(0,g.gl)(b,function(a){return 32<a.video.fps});
c&&(b=a.D||Ny(a,jC)?(0,g.fe)(b,function(a){var b;(b=32<a.video.fps)||(a=a.video,b=!(854<a.width||480<a.height));return b}):(0,g.fe)(b,function(a){return!(32<a.video.fps)}));
c&&bs()&&(b=(0,g.fe)(b,function(a){return"299"!=Kw(a)}));
return b};
TB=function(a,b){if("0"==Kw(b)&&!a.g)return!0;var c=b.mimeType;if(b.video&&(Hw(b.video)||"bt2020"==b.video.primaries)&&48!=window.screen.pixelDepth&&!Ny(a,kC)||"338"==Kw(b)&&!(a.A.g("html5_chrome_ambisonics_opus")&&g.es&&ai(53)))return!1;var d={};b.video&&(b.video.width&&(d[lC.name]=b.video.width),b.video.height&&(d[mC.name]=b.video.height),b.video.fps&&(d[jC.name]=b.video.fps),b.video.g&&(d[kC.name]=b.video.g),b.g&&(d[Oy.name]=8*b.g),"("==b.A&&(d[nC.name]="subsample"));b.audio&&b.audio.g&&(d[VB.name]=
b.audio.g);for(var e in oC){var f=oC[e];if(d[f.name]&&!(f==kC&&0<b.mimeType.indexOf("vp09.02")))if(Ny(a,f))if(a.o){if(a.o[f.name]<d[f.name])return!1}else c=c+"; "+f.name+"="+d[f.name];else if(Nw(b)&&f==kC)return!1}!a.A.g("disable_html5_cast_hdcp_filter2")&&a.C&&b.video&&1080<b.video.o&&b.ec&&(c+="; hdcp=2.2");return pC(a,c)};
Ny=function(a,b){if(!(b.name in a.B)){var c=a.B,d=b.name;if(a.o)var e=!!a.o[b.name];else b.video?(e='video/webm; codecs="vp9"',pC(a,e)||(e='video/mp4; codecs="avc1.4d401e"')):(e='audio/webm; codecs="opus"',pC(a,e)||(e='audio/mp4; codecs="mp4a.40.2"')),e=pC(a,e+"; "+b.name+"="+b.valid)&&!pC(a,e+"; "+b.name+"="+b.Nf);c[d]=e}return a.B[b.name]};
pC=function(a,b){return a.C?window.cast.receiver.platform.canDisplayType(b):Jy(b)};
qC=function(){g.gt.call(this);this.Ia={}};
vC=function(a,b,c){var d;(d=a.adformat)||(d=(a=a.attrib)&&Zb(rC,a)&&Zb(sC,a)?sC[a]+"_"+rC[a]:void 0);a=d;if(!a)return null;d=a.match(tC);if(!d||5!=d.length)return null;d=uC(a);return b||c||d?a:null};
uC=function(a){a=a.match(tC);var b=(0,window.parseInt)(a[3],10),c=[7,8,10,5,6];return!(1==(0,window.parseInt)(a[1],10)&&8==b)&&0<=c.indexOf(b)};
wC=function(a,b){return void 0==b?a:"1"==b?!0:!1};
xC=function(a,b,c){for(var d in c)if(c[d]==b)return c[d];return a};
yC=function(a,b){return void 0==b?a:Number(b)};
zC=function(a,b){return void 0==b?a:b.toString()};
BC=function(a,b){if(b){if("fullwidth"==a)return window.Infinity;if("fullheight"==a)return 0}if(a){var c=a.match(AC);if(c){var d=(0,window.parseFloat)(c[2]);if(0<d)return(0,window.parseFloat)(c[1])/d}}return window.NaN};
CC=function(a,b){var c=g.Fw.auto,d=g.Fw[b];return d>g.Fw.medium?new Vw(d,c,!1):d>=c?new Vw(c,d,!1):a};
DC=function(a){return a.docid||a.video_id||a.videoId||a.id};
FC=function(){if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new window.Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];return a}catch(e){}a=Array(16);for(b=0;16>b;b++){for(var c=(0,g.F)(),d=0;d<c%23;d++)a[b]=Math.random();a[b]=Math.floor(256*Math.random())}if(EC)for(b=1,c=0;c<EC.length;c++)a[b%16]=a[b%16]^a[(b-1)%16]/4^EC.charCodeAt(c),b++;return a};
g.GC=function(){return(0,g.H)(FC(),function(a){return(a&15).toString(16)}).join("")};
HC=function(){for(var a=FC(),b=[],c=0;c<a.length;c++)b.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(a[c]&63));return b.join("")};
ZC=function(a){g.I.call(this);a=g.ec(a);this.g="detailpage";this.aa=null;this.Yl=this.Cb=this.ha=!1;this.T={};this.oi=zC("",a.csp_nonce);this.experiments=new Sw(a.fexp,a.fflags);this.forcedExperiments=a.forced_experiments||null;try{var b=window.document.location.toString()}catch(f){b=""}this.Ya=b;var c=this.W=(this.A=IC.test(this.Ya))?zC("",a.loaderUrl):this.Ya,d=this.experiments.g("disable_trusted_ad_domains_player_check");b=JC.test(c);if(d=!d)d=(new RegExp("^(https?:)?//([a-z0-9-]{1,63}\\.)*("+
KC.join("|").replace(/\./g,".")+")(:[0-9]+)?([/?#]|$)","i")).test(c);!b&&d&&(c=Error("isTrustedLoader("+c+") behavior is not consistent"),.01>Math.random()&&g.xr(c,"WARNING"));this.gb=b||d;this.Ke=LC.test(this.W);this.X=(this.qG=(this.Tg=wC(!1,a.ssl_stream))||wC(!1,a.ssl))?"https":"http";this.baseYtUrl=Az(a.BASE_YT_URL)||Az(this.Ya)||this.X+"://www.youtube.com/";"adunit"==a.el?this.g=this.Ke?"adunit":"embedded":"embedded"==a.el||this.gb?this.g=xC(this.g,a.el,MC):a.el&&(this.g="embedded");Qt();b=null;
c=a.ps;d=g.ob(NC,c);!c||d&&!this.gb||(b=c);this.o=b;this.H=(this.Tb=g.ob(NC,this.o))&&"play"!=this.o&&"jamboard"!=this.o;this.Je=!this.H;b={};this.B=(b.c=a.c||"web",b.cver=a.cver||"html5",b.cplayer="UNIPLAYER",b);this.Ka=!(!Zx().defaultPlaybackRate||g.Yg&&!Zr("chrome")||OC||PC||Zr("android")||Zr("silk"));this.isMobile=wC("blazer"==this.o,a.is_html5_mobile_device);this.il=this.experiments.g("uniplayer_dbp")&&this.isMobile&&(!(this.A&&this.experiments.g("disallow_background_check_for_embed"))||$r()&&
ai(54));this.wa="3"==this.C||this.isMobile||wC(!1,a.use_media_volume);this.K=cy();this.WB=QC;this.Qd=(g.RC(this)||"TV_UNPLUGGED_CAST"==this.B.c)&&this.experiments.g("use_rawcc_captions");this.G=wC(!1,a.is_dni);this.Xa=zC("#cc181e",a.dni_color);this.Ec=wC("adunit"!=this.g&&"detailpage"!=this.g&&!this.Tb,this.experiments.g("embed_show_infobar")&&!this.G||a.showinfo);this.vf=wC(!1,a.playsinline);b=this.isMobile&&ZB&&2.3>=JB;c=this.isMobile;c=SC(this)||!b&&wC(c,a.use_native_controls)?"3":"1";this.C="0"!=
a.controls?c:"0";this.useTabletControls=this.isMobile;this.color=xC("red",a.color,TC);this.Rw="3"==this.C||wC(!1,a.modestbranding)&&"red"==this.color;this.la=0==this.W.indexOf(this.baseYtUrl);this.Vg=(c=!this.la&&"detailpage"!=this.g&&!this.H&&!this.Tb)&&(this.G||!this.Rw)&&"1"==this.C;this.Wg="embedded"==this.g&&c&&!this.Ec&&!this.Vg;this.aG=this.ay=b;this.Zg=!PC||g.uc(601)?!0:!1;this.Gk=this.A||!1;this.oa="detailpage"==this.g?"":(this.W||a.post_message_origin||"").substring(0,128);this.widgetReferrer=
zC("",a.widget_referrer);this.ib=(!this.gb||wC(!0,a.enablecastapi))&&"1"==this.C&&!this.isMobile&&("detailpage"==this.g||"embedded"==this.g||"profilepage"==this.g);this.Ea=wC(!1,a.enableunplugged);this.pi=(this.da=wC(!1,a.autoplay))||"detailpage"==this.g;this.Gc=!this.isMobile&&!Zr("nintendo wiiu")&&!Zr("nintendo 3ds")||wC(!1,a.autoplayoverride);b=!1;this.K&&!SC(this)&&this.experiments.g("mweb_muted_autoplay")?fi&&g.uc(602)?b=!0:g.UC&&g.es&&(b=g.UC&&Zr("version/")?57<=(0,window.parseFloat)(/Chrome\/(\d+)/.exec(g.Ob)[1]):
53<=(0,window.parseFloat)(/Chrome\/(\d+)/.exec(g.Ob)[1])):b=!1;this.ne=b;b=("detailpage"==this.g||"adunit"==this.g)&&("blazer"==this.o||"mweb-polymer"==this.o);this.Bb=!wC(!0,a.fs);this.za=!this.Bb&&(b||Ks());this.ni=this.experiments.g("uniplayer_block_pip")&&$r()&&ai(58);this.Fc=wC(!1,a.force_rel)||wC(!this.Tb,a.rel);this.OF="adunit"!=this.g;this.Ua="profilepage"==this.g;this.Dc="blazer"==this.o||"mweb-polymer"==this.o;switch(this.o){case "blogger":b="bl";break;case "gmail":b="gm";break;case "books":b=
"gb";break;case "docs":b="gd";break;case "google-live":b="gl";break;case "play":b="gp";break;case "picasaweb":b="pw";break;default:b="yt"}this.Va=b;this.Lb=zC("",a.authuser);this.QF=(this.experiments.g("embed_show_watchlater_login")&&this.A||!!this.Lb)&&wC(!this.H,a.showwatchlater);this.Ge=wC(!1,a.disablekb);this.He=zC("",a.ecver);this.Fk=this.experiments.g("mweb_autonav")&&VC();this.loop=wC(!1,a.loop);this.pageId=zC("",a.pageid);this.ky=CC(Zw,a.vq);this.ly=zC("",a.playerapiid);this.YB=wC(!0,a.canplaylive);
this.ri=wC(this.Tb,a.ss);(b=a.video_container_override)?(c=b.split("x"),2!=c.length?b=null:(b=(0,window.parseInt)(c[0],10),c=(0,window.parseInt)(c[1],10),b=(0,window.isNaN)(b)||(0,window.isNaN)(c)||0>=b*c?null:new g.Cd(b,c))):b=null;this.ah=b;this.mute=(this.gb||this.Ke)&&wC(!1,a.mute);this.storeUserVolume=!this.mute&&wC("0"!=this.C,a.store_user_volume);this.Me="3"==this.C?3:xC(void 0,a.iv_load_policy,WC);this.Oe=zC("",a.cc_lang_pref);b=xC(2,a.cc_load_policy,WC);"3"==this.C&&2==b&&(b=3);this.Pe=b;
this.Fa=void 0==a.content_v?void 0:a.content_v.toString();this.Nk=void 0==a.framer?void 0:a.framer.toString();this.sc=zC("en_US",a.hl);this.region=zC("US",a.cr);this.hostLanguage=zC("en",a.host_language);this.Qb=wC(!1,a.privembed);this.fa=!this.Qb&&this.experiments.g("player_interaction_logging");this.uf="";this.wb=new window.Set;this.D=wC(!0,a.deviceHasDisplay);this.we=yC(this.we,a.ismb);this.ge(a);this.T=a;this.L=new qC;g.J(this,this.L);this.ba=this.isMobile;b=a;b.innertube_api_key&&b.innertube_api_version&&
this.B.c&&b.innertube_context_client_version&&this.hostLanguage&&this.region||this.experiments.g("disable_innertube_config_reporting")||g.xr(Error("MISSING_INNERTUBE_CONFIG,api_key="+b.innertube_api_key+",api_version="+b.innertube_api_version+",interface="+this.B.c+",context_client_version="+b.innertube_context_client_version+",host_language="+this.hostLanguage+",region="+this.region));var c=zC("",b.apiary_host),d=zC("",b.apiary_host_firstparty),e=zC("",b.xhr_apiary_host);this.experiments.g("disable_html5_apiary_url_validation")||
(Cz(c)||(c=""),Cz(d)||(d=""),Cz(e)||(e=""));this.Ie={apiaryHost:c,Jk:d,gapiHintOverride:wC(!1,b.gapi_hint_override),gapiHintParams:zC("",b.gapi_hint_params),innertubeApiKey:zC("",b.innertube_api_key),innertubeApiVersion:zC("",b.innertube_api_version),Sl:this.B.c,innertubeContextClientVersion:zC("",b.innertube_context_client_version),Ul:this.hostLanguage,Tl:this.region,lj:"",xhrApiaryHost:e};this.Ug=void 0!=window.WebKitPlaybackTargetAvailabilityEvent;this.O=new IB(this.experiments,this.D,XC(this)||
bs()||cs()||/STEAK/.test(this.B.cmodel));b=new mB;g.My(this)&&(b.B=!0,b.G=.1);this.experiments.g("html5_ewma_bandwidth_estimator")&&(b.B=!0);this.experiments.g("html5_pctile_on_tv")&&(b.B=!1);this.experiments.g("html5_disable_aux_bandwidth_estimator")&&(b.T=!1);this.experiments.g("html5_use_long_term_bandwidth_estimator")&&(b.K=!0,b.H=this.experiments.o("html5_long_term_bandwidth_window_size")||b.H);this.experiments.g("html5_elbow_tracking_tweaks")&&(b.L=!0,b.g=2048);this.we&&(b.D=this.we/8);b.C=
this.experiments.o("html5_bandwidth_multisample_width")||b.C;b.o=this.experiments.o("html5_bandwidth_window_size")||b.o;b.O=this.experiments.g("html5_stall_pctile");this.schedule=new tB(b);this.enableSafetyMode=wC(!1,a.enable_safety_mode);this.oe=YC(this)&&"blazer"!=this.o&&"mweb-polymer"!=this.o;this.La=wC(!1,a.send_visitor_id_header)||this.experiments.A;this.Ne=!1;this.wf=Zw};
$C=function(a,b){a.pe=b.get("d",a.pe);a.Xg=b.get("f",a.Xg)};
aD=function(a,b,c){return b.kf&&(a.experiments.g("legacy_autoplay_flag")||"detailpage"!=a.g||c||b.nj)};
bD=function(a){return a.experiments.g("king_crimson_player_redux")&&!a.Tb&&$r()&&ai(55)&&!a.isAd()};
cD=function(a){var b=g.og(a.baseYtUrl);(a=g.pg(a.baseYtUrl))&&(b+=":"+a);return"www.youtube-nocookie.com"==b?"www.youtube.com":b};
dD=function(a){return"gaming"==a.o?"gaming.youtube.com":cD(a)};
eD=function(a,b,c){return a.X+"://i1.ytimg.com/vi/"+b+"/"+(c||"hqdefault.jpg")};
g.fD=function(a,b){return a.baseYtUrl+"timedtext_video?ref=player&v="+b.videoId};
gD=function(a){return"detailpage"==a.g&&"gaming"!=a.o&&!g.RC(a)};
SC=function(a){return PC&&!a.vf||Zr("nintendo wiiu")||Zr("nintendo 3ds")?!0:!1};
g.My=function(a){return fs()||"TV"==a.B.cplatform};
g.hD=function(){return 1<window.devicePixelRatio?window.devicePixelRatio:1};
XC=function(a){return"web"==a.B.c.toLowerCase().substr(0,3)};
g.RC=function(a){return"WEB_UNPLUGGED"==a.B.c};
VC=function(){g.y("yt.mobile.blazer.blazer_config.isMobilePersistentUniplayer");return!1};
g.iD=function(a){return a.D&&g.es&&!OB&&"3"!==a.C?g.UC?a.experiments.g("spherical_on_android_iframe")&&a.A&&g.uc(51):!0:!1};
g.jD=function(a){return a.D&&g.dB&&!OB&&"3"!==a.C?g.UC?a.experiments.g("spherical_on_android_iframe")&&a.A&&g.uc(48):g.uc(38):!1};
lD=function(a){return g.iD(a)||g.jD(a)||(a.D&&g.Yg&&!OB&&"3"!==a.C?g.UC?a.experiments.g("spherical_on_android_iframe")&&a.A&&g.uc(37):g.uc(27):!1)||a.D&&g.kD&&!gs()&&g.uc(11)||a.D&&ci&&a.experiments.g("safari_enable_spherical")};
mD=function(a){return a.experiments.g("disable_html5_ambisonic_audio")||!(lD(a)||a.experiments.g("html5_enable_spherical")||a.experiments.g("html5_enable_spherical3d"))||"embedded"==a.g&&ZB||g.dB&&(!g.uc(47)||!g.uc(52)&&g.uc(51))?!1:window.AudioContext||window.webkitAudioContext?!0:!1};
YC=function(a){return"detailpage"==a.g||"detailpage"==a.aa};
g.nD=function(a,b,c){this.errorCode=a;this.g=b;this.details=c||{}};
oD=function(a){var b;for(b in a){var c=(""+a[b]).replace(/[:,]/g,"_");var d=(d?d+";":"")+b+"."+c}return d||""};
qD=function(a){if(a){var b=[],c;for(c in a)pD.has(c)||b.push(c);b.length&&.01>Math.random()&&g.xr(Error("Unknown house brand player vars: "+b),"WARNING")}};
rD=function(a,b){this.o=a;this.g=b;this.A=0};
sD=function(a){for(var b=[],c=[],d=0,e=a.g.length;d<e;++d){var f=a.g[d];f.bitrate<=a.A?b.push(f):c.push(f)}b.sort(function(a,b){return b.bitrate-a.bitrate});
c.sort(function(a,b){return a.bitrate-b.bitrate});
a.g=b.concat(c)};
tD=function(a,b,c,d,e,f,k,l,m){this.itag=a;this.url=b;this.hp=c;this.width=d;this.height=e;this.bitrate=k;this.fps=f;this.audioItag=l||null;this.g=m||""};
uD=function(a){for(var b={},c=0,d=a.length;c<d;++c){var e=a[c];var f=e.type.match(/codecs="([^"]*)"/);e=new tD(e.itag,e.url,f?f[1]:"",+e.width,+e.height,+e.fps,+e.bitrate,e.audio_itag,e.drm_families);b[e.itag]=e}return b};
vD=function(a,b){this.jd=a;this.B=b;this.o=null};
xD=function(a,b,c){if(!OB&&!ds())return GB();b=uD(b);if(!b)return GB();var d={},d=(d.fairplay="https://youtube.com/api/drm/fps?ek=uninitialized",d),e=[],f=[],k=[],l;for(l in b){var m=b[l];if(m.width){var n=b[m.audioItag];if(n){e.push(m);var q="fairplay"==m.g?d:null;k.push(wD([n],[m],m.itag,m.width,m.height,m.fps,void 0,void 0,q))}}else f.push(m)}q=k.reduce(function(a,b){return!!b.jd.ec&&a},!0)?d:null;
k.push(wD(f,e,"93",0,0,0,"auto",c,q));return MB(a.O,k,bD(a))};
wD=function(a,b,c,d,e,f,k,l,m){var n=new Dw;d=new Gw(d,e,f,null,void 0,k);c=new Lw(c,"application/x-mpegURL",n,d,void 0,m);a=new rD(a,b);a.A=l?l:1369843;return new vD(c,a)};
yD=function(a,b){this.jd=a;this.o=b};
zD=function(a,b,c){var d=[];b=g.ma(b);for(var e=b.next();!e.done;e=b.next()){var f=e.value;if(f.url){e=new Fz(f.url);f.sig?e.set("signature",f.sig):f.s&&e.set("signature",wr(f.s));for(var k in c)e.set(k,c[k]);f=Rw(f.type,f.quality,f.itag,f.width,f.height,!!f.isAccelerated,!!f.isAcceleratedUiEnabled);d.push(new yD(f,e))}}return MB(a.O,d,bD(a))};
AD=function(a){g.gt.call(this);this.B=new Gq;this.o=null;this.H={};this.G=a||""};
DD=function(a,b,c){for(c=BD(a,c);0<=c;){var d=a.g[c];if(d.Pb(Math.floor(b/(d.columns*d.rows)))&&(d=CD(d,b)))return d;c--}return CD(a.g[0],b)};
FD=function(a,b,c){c=BD(a,c);for(var d,e;0<=c;c--)if(d=a.g[c],e=Math.floor(b/(d.columns*d.rows)),!d.Pb(e)){d=a;var f=c,k=f+"-"+e;d.H[k]||(d.H[k]=!0,Fq(d.B,f,{zq:f,Sr:e}))}ED(a)};
ED=function(a){if(!a.o&&!a.B.isEmpty()){var b=a.B.remove(),c=new window.Image;a.G&&(c.crossOrigin=a.G);c.src=GD(a.g[b.zq],b.Sr);c.onload=(0,g.A)(a.L,a,b.zq,b.Sr);a.o=c}};
HD=function(a,b,c,d){this.be={};this.O=a;this.K=b;a=c.split("#");this.G=(0,window.parseInt)(a[0],10);this.D=(0,window.parseInt)(a[1],10);this.o=(0,window.parseInt)(a[2],10);this.columns=(0,window.parseInt)(a[3],10);this.rows=(0,window.parseInt)(a[4],10);this.B=(0,window.parseInt)(a[5],10);this.A=a[6];this.C=a[7];this.L=d};
GD=function(a,b){var c=a.K,c=c.replace("$N",a.A),c=c.replace("$L",a.O.toString()),c=c.replace("$M",b.toString());a.C&&(c=g.wg(c,{sigh:a.C}));return Ez(c)};
CD=function(a,b){var c=Math.floor(b/(a.columns*a.rows)),d=a.columns*a.rows,e=b%d,f=e%a.columns,e=Math.floor(e/a.columns),k=a.Wn()+1-d*c;if(k<a.columns){var l=k;d=1}else l=a.columns,d=k<d?Math.ceil(k/a.columns):a.rows;return{url:GD(a,c),Dw:f,columns:l,Rb:e,rows:d,Tr:a.G*l,Rr:a.D*d}};
ID=function(a,b,c){AD.call(this,c);this.g=this.A(a,b);this.C={};1<this.g.length&&this.g[0].isDefault()&&this.g.splice(0,1)};
BD=function(a,b){var c=a.C[b];if(c)return c;for(var c=a.g.length,d=0;d<c;d++)if(a.g[d].Ed()>=b)return a.C[b]=d;a.C[b]=c-1;return c-1};
JD=function(a,b,c,d){c=c.split("#");c=[c[1],c[2],0,c[3],c[4],-1,c[0],""].join("#");HD.call(this,a,b,c,0);this.g=null;this.H=d?3:0};
KD=function(a,b){this.O=b;ID.call(this,a,0)};
LD=function(a,b){this.jd=a;this.o=b};
MD=function(a){var b=[];(0,g.G)(a,function(a){if(a.url){var c=Rw(a.type,"medium","0");b.push(new LD(c,a.url))}});
return b};
ND=function(a){a=a.url;return 0==a.indexOf("//")?"https:"+a:a};
QD=function(a,b){var c={},d;for(d in OD){var e=b?b+d:d,e=a[e+"_webp"]||a[e];g.PD.test(e)&&(c[OD[d]]=e)}return c};
SD=function(a){var b={};if(!a||!a.thumbnails)return b;var c=null;a=g.ma(a.thumbnails);for(var d=a.next();!d.done;d=a.next()){var d=d.value,e=ND(d);if(g.PD.test(e)){var f=RD[d.width];f&&(b[f]=e);if(!c||c.width<d.width)c=d}}c&&1280<c.width&&(b["maxresdefault.jpg"]=ND(c));return b};
g.TD=function(a,b){this.version=a;this.args=b};
g.UD=function(a,b){this.topic=a;this.g=b};
g.WD=function(a,b){var c=VD();c&&c.publish.call(c,a.toString(),a,b)};
g.$D=function(a,b,c){var d=VD();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,k){var f=g.y("ytPubsub2Pubsub2SkipSubKey");f&&f==e||(f=function(){if(XD[e])try{if(k&&a instanceof g.UD&&a!=d)try{var f=a.g,l=k;if(!l.args||!l.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!f.sf){var q=new f;f.sf=q.version}var r=f.sf}catch(v){}if(!r||l.version!=r)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{k=window.Reflect.construct(f,
g.wb(l.args))}catch(v){throw v.message="yt.pubsub2.Data.deserialize(): "+v.message,v;}}catch(v){throw v.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+v.message,v;}b.call(c||window,k)}catch(v){g.xr(v)}},YD[a.toString()]?g.Xt()?g.Yt(f,1,void 0):g.Fr(f,0):f())});
XD[e]=!0;ZD[a.toString()]||(ZD[a.toString()]=[]);ZD[a.toString()].push(e);return e};
g.aE=function(a){var b=VD();b&&(g.pa(a)&&(a=[a]),(0,g.G)(a,function(a){b.unsubscribeByKey(a);delete XD[a]}))};
VD=function(){return g.y("ytPubsub2Pubsub2Instance")};
cE=function(a,b){var c=g.$D(bE,function(d){a.apply(b,arguments);g.aE(c)},b);
return c};
dE=function(a,b){g.TD.call(this,1,arguments)};
eE=function(a,b){g.TD.call(this,1,arguments);this.g=a};
gE=function(a){this.g=a||window;this.K=this.A=0;if(this.g.performance&&this.g.performance.timing&&this.g.performance.getEntriesByType){a=g.Pd(this.g||window);this.H=new g.Gg(0,0,a.width,a.height);var b;a=[];for(var c=this.g.document.getElementsByTagName("*"),d=0,e=c.length;d<e;d++){var f=c[d];if("IMG"==f.tagName||"IFRAME"==f.tagName)if(b=fE(this,f,f.src)){if("IFRAME"==f.tagName){try{var k=(new gE(f.contentWindow)).A}catch(l){k=0}0<k&&(b.timing=k)}a.push(b)}(b=this.g.getComputedStyle(f)["background-image"])&&
(b=gE.g.exec(b))&&1<b.length&&(b=fE(this,f,b[1]))&&a.push(b)}this.o=a;this.C=this.g.performance.getEntriesByType("resource");this.G=this.g.performance.getEntriesByType("mark");k={};a=0;for(c=this.C.length;a<c;a++)d=this.C[a],k[d.name]=d.responseEnd;a=0;for(c=this.G.length;a<c;a++)d=this.G[a],"mark_iframe_loaded: "==d.name.slice(0,20)&&(k[d.name.slice(20)]=d.startTime);a=0;for(c=this.o.length;a<c;a++)d=this.o[a],d.timing||(d.timing=k[d.url]||0);this.D=hE(this);this.B=iE(this);f=k=0;if(this.B.length)for(c=
a=0,d=this.B.length;c<d;c++)e=this.B[c],f=e.timing-f,0<f&&1>a&&(k+=(1-a)*f),f=e.timing,a=e.progress;this.A=Math.round(k||this.D);this.K=f}};
fE=function(a,b,c){return c&&b.getBoundingClientRect&&(b=b.getBoundingClientRect(),b=new g.Gg(b.left,b.top,b.width,b.height),g.Jg(b,a.H))?new jE(b,c):null};
hE=function(a){var b=a.g,c=b.performance.timing.navigationStart;if("msFirstPaint"in b.performance.timing)var d=b.performance.timing.g-c;else if("chrome"in b&&"loadTimes"in b.chrome){var e=b.chrome.loadTimes(),f=e.firstPaintTime;if(0<f){var k=e.startLoadTime;"requestTime"in e&&(k=e.requestTime);f>=k&&(d=1E3*(f-k))}}if(void 0===d||0>d||12E4<d){d=b.performance.timing.responseStart-c;for(var l={},b=b.document.getElementsByTagName("head")[0].children,c=0,e=b.length;c<e;c++)f=b[c],"SCRIPT"==f.tagName&&
f.src&&!f.async?l[f.src]=!0:"LINK"==f.tagName&&"stylesheet"==f.rel&&f.href&&(l[f.href]=!0);a.C.some(function(a){if(!l[a.name]||"script"!=a.initiatorType&&"link"!=a.initiatorType)return!0;a=a.responseEnd;if(void 0===d||a>d)d=a})}return Math.max(d,0)||0};
iE=function(a){var b={0:0},c=0;var d=a.D;for(var e=0,f=a.o.length;e<f;e++){var k=a.o[e],l=d;k.timing>d&&(l=k.timing);b[l]||(b[l]=0);k=g.Kg(k.region).Sb();b[l]+=k;c+=k}e=g.Kg(a.H).Sb();0<e&&(e=.1*Math.max(e-c,0),d in b||(b[d]=0),b[d]+=e,c+=e);a=[];if(c){for(var m in b)d=new kE((0,window.parseFloat)(m),b[m]),a.push(d);a.sort(function(a,b){return a.timing-b.timing});
e=b=0;for(f=a.length;e<f;e++)d=a[e],b+=d.Sb,d.progress=b/c}return a};
jE=function(a,b){this.region=a;this.url=b};
kE=function(a,b){this.Sb=b;this.timing=a};
oE=function(a){lE(a);mE();nE(!1,a);a||(g.P("TIMING_ACTION")&&g.Vq("PREVIOUS_ACTION",g.P("TIMING_ACTION")),g.Vq("TIMING_ACTION",""))};
FE=function(a,b){a:if(!pE(a)){if(!g.ls("send_empty_timing")){var c=g.P("CSI_SERVICE_NAME","youtube");if(!g.P((a||"")+"TIMING_ACTION",void 0)||!c)break a}g.qE("aa",void 0,a);g.rE("ap",1,a);g.rE("yt_fss","c",a);if(g.ls("enable_csi_abandonment_info")&&!a&&!sE("yt_lt")){var c=g.P("TIMING_INFO",{}),d;for(d in c)g.rE(d,c[d]);g.rE("is_nav",1);(d=g.mu())&&g.rE("csn",d);(d=g.P("PREVIOUS_ACTION",void 0))&&g.rE("pa",d);c=tE();c.p=g.P("CLIENT_PROTOCOL")||"unknown";c.t=g.P("CLIENT_TRANSPORT")||"unknown";uE.now&&
uE.timing?(d=uE.timing.navigationStart+uE.now(),d=Math.round((0,g.F)()-d)):d=null;null!=d&&g.rE("yt_hrd",d);window.navigator&&window.navigator.sendBeacon&&g.rE("ba",1);g.rE("yt_vis",vE());if("cold"==c.yt_lt){d=uE.timing||{};g.ls("cold_load_nav_start_web")&&d.navigationStart&&(g.qE("srt",d.responseStart),1!=c.prerender&&wE("n",d.navigationStart));b:if(d.msFirstPaint)c=Math.max(0,d.msFirstPaint);else{if(c=window.chrome)if(c=c.loadTimes,g.wa(c)){var c=c(),e=1E3*Math.min(c.requestTime||window.Infinity,
c.startLoadTime||window.Infinity),e=window.Infinity===e?0:d.navigationStart-e,c=Math.max(0,Math.round(1E3*c.firstPaintTime+e)||0);break b}c=0}0<c&&g.qE("fpt",c);g.qE("nreqs",d.requestStart,void 0);g.qE("nress",d.responseStart,void 0);g.qE("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(g.qE("nrs",d.redirectStart,void 0),g.qE("nre",d.redirectEnd,void 0));0<d.domainLookupEnd-d.domainLookupStart&&(g.qE("ndnss",d.domainLookupStart,void 0),g.qE("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-
d.connectStart&&(g.qE("ntcps",d.connectStart,void 0),g.qE("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=d.navigationStart&&0<d.connectEnd-d.secureConnectionStart&&(g.qE("nstcps",d.secureConnectionStart,void 0),g.qE("ntcpe",d.connectEnd,void 0));uE.getEntriesByType&&xE();d=g.P("SPEEDINDEX_FOR_ACTIONS",void 0);c=g.P("TIMING_ACTION",void 0);d&&-1<d.indexOf(c)&&(d=(0,g.Ot)(),c=new gE,e=(0,g.Ot)(),0<c.A&&(g.rE("si",c.A),g.qE("vsc",yE(c.K)),g.qE("sics",d),g.qE("sice",e)));d=[];if(window.document.querySelector&&
uE&&uE.getEntriesByName)for(var f in zE)c=zE[f],AE(f,c)&&d.push(c);d.length&&g.rE("rc",d.join(","))}g.ls("csi_on_gel")&&(f={},f.actionType=BE[g.P("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",d=CE(),bu(f,d))}DE(a)}oE(a);g.Vq(a+"TIMING_AFT_KEYS",b);g.Vq(a+"TIMING_ACTION",a);wE("c",void 0,a);g.x("ytglobal.timing"+(a||"")+"ready_",!0,void 0);EE(a)};
g.qE=function(a,b,c){if(!b&&"_"!=a[0]){var d=a;uE.mark&&(g.Ha(d,"mark_")||(d="mark_"+d),c&&(d+=" ("+c+")"),uE.mark(d))}var d=GE(c),e=b||(0,g.Ot)();d[a]&&(d["_"+a]=d["_"+a]||[d[a]],d["_"+a].push(e));d[a]=e;HE(c)["tick_"+a]=b;c||b||(0,g.Ot)();g.ls("csi_on_gel")?(d=CE(c),"_start"==a?au("baseline_"+d)||g.St("latencyActionBaselined",{clientActionNonce:d},g.Wt,b):au("tick_"+a+"_"+d)||g.St("latencyActionTicked",{tickName:a,clientActionNonce:d},g.Wt,b),a=!0):a=!1;a||EE(c)};
IE=function(a){var b="above_the_fold";uE&&uE.measure&&(g.Ha(b,"measure_")||(b="measure_"+b),a?uE.measure(b,a):uE.measure(b))};
wE=function(a,b,c){g.rE("yt_sts",a,c);g.qE("_start",b,c)};
JE=function(a,b){var c=GE(b);return a in c};
g.rE=function(a,b,c){var d=tE(c)[a]=b;HE(c)["info_"+a]=d;if(g.ls("csi_on_gel"))if(a in KE){b={};a=KE[a].split(".");g.ob(LE,a)&&(d=!!d);for(var e=b,f=0;f<a.length-1;f++)e[a[f]]=e[a[f]]||{},e=e[a[f]];b[a[a.length-1]]=d;c=CE(c);bu(b,c)}else g.ob(ME,a)||g.xr(Error("Unknown label "+a+" logged with GEL CSI."))};
sE=function(a){var b=tE(void 0);return a in b};
NE=function(a){var b=GE(a);if(b.aft)return b.aft;a=g.P((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return window.NaN};
EE=function(a){if(!pE(a)){var b=g.P((a||"")+"TIMING_ACTION",void 0),c=GE(a);if(g.y("ytglobal.timing"+(a||"")+"ready_")&&b&&c._start&&(b=NE(a)))if(g.ls("tighter_critical_section")&&!OE&&(g.WD(PE,new dE(Math.round(b-c._start),a)),OE=!0),a)DE(a);else{var b=!0,d=g.P("TIMING_WAIT",[]);if(d.length)for(var e=0,f=d.length;e<f;++e)if(!(d[e]in c)){b=!1;break}b&&DE(a)}}};
vE=function(){switch(Js("visibilityState",window.document)){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3}return-1};
DE=function(a){if(!g.ls("csi_on_gel")){var b=GE(a),c=tE(a),d=b._start,e;for(e in b)if(g.Ha(e,"_")&&g.ua(b[e])){var f=e.slice(1);if(f in QE){var k=(0,g.H)(b[e],function(a){return Math.round(a-d)});
c["all_"+f]=k.join()}delete b[e]}f=!!c.ap;if(k=g.y("ytglobal.timingReportbuilder_")){if(k=k(b,c,a))RE(k,f),oE(a)}else{var l=g.P("CSI_SERVICE_NAME","youtube");k={v:2,s:l,action:g.P((a||"")+"TIMING_ACTION",void 0)};var m=c.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var n=window.location.protocol+g.y("ytplayer.config.assets.js");(n=uE.getEntriesByName?uE.getEntriesByName(n)[0]:null)?c.h5jse=Math.round(c.h5jse-n.responseEnd):delete c.h5jse}b.aft=NE(a);SE(a)&&"youtube"==l&&(g.rE("yt_lt","hot_bg",a),
l=b.vc,n=b.pbs,delete b.aft,c.aft=Math.round(n-l));for(var q in c)"_"!=q.charAt(0)&&(k[q]=c[q]);b.ps=(0,g.Ot)();c={};q=[];for(e in b)"_"!=e.charAt(0)&&(l=Math.round(b[e]-d),c[e]=l,q.push(e+"."+l));k.rt=q.join(",");(b=g.y("ytdebug.logTiming"))&&b(k,c);RE(k,f,a);g.WD(bE,new eE(c.aft+(m||0),a))}}};
yE=function(a){return Math.round(uE.timing.navigationStart+a)};
xE=function(){var a=window.location.protocol,b=uE.getEntriesByType("resource"),c=g.jb(b,function(b){return 0==b.name.indexOf(a+"//fonts.googleapis.com/css?family=")}),b=(0,g.fe)(b,function(b){return 0==b.name.indexOf(a+"//fonts.gstatic.com/s/")}),b=wd(b,function(a,b){return b.duration>a.duration?b:a},{duration:0});
c&&0<c.startTime&&0<c.responseEnd&&(g.qE("wfcs",yE(c.startTime)),g.qE("wfce",yE(c.responseEnd)));b&&0<b.startTime&&0<b.responseEnd&&(g.qE("wffs",yE(b.startTime)),g.qE("wffe",yE(b.responseEnd)))};
AE=function(a,b){var c=window.document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"==e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"==e&&(d=c.href);return d?(c=uE.getEntriesByName(d))&&c[0]&&(c=c[0],d=window.performance.timing.navigationStart,g.qE("rsf_"+b,d+Math.round(c.fetchStart)),g.qE("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&(sE("rc")||g.rE("rc",""),0===c.transferSize))?!0:!1:!1};
RE=function(a,b,c){if(g.ls("debug_csi_data")){var d=g.y("yt.timing.csiData");d||(d=[],g.x("yt.timing.csiData",d,void 0));d.push({page:window.location.href,time:new Date,args:a})}var d="",e;for(e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b)try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||g.is(a,void 0)}catch(f){g.is(a,void 0)}else g.is(a);nE(!0,c)};
CE=function(a){var b=TE(a).nonce;b||(b=HC(),TE(a).nonce=b);return b};
GE=function(a){return TE(a).tick};
tE=function(a){return TE(a).info};
HE=function(a){a=TE(a);"gel"in a||(a.gel={});return a.gel};
TE=function(a){return g.y("ytcsi."+(a||"")+"data_")||lE(a)};
lE=function(a){var b={tick:{},info:{}};g.x("ytcsi."+(a||"")+"data_",b,void 0);return b};
pE=function(a){return!!g.y("yt.timing."+(a||"")+"pingSent_")};
nE=function(a,b){g.x("yt.timing."+(b||"")+"pingSent_",a,void 0)};
SE=function(a){var b=GE(a),c=b.pbr,d=b.vc,b=b.pbs;return c&&d&&b&&c<d&&d<b&&1==tE(a).yt_pvis};
UE=function(a){var b=null,c=a.text;a.bold&&(b=g.Wd("B",null,b||c));a.italics&&(b=g.Wd("I",null,b||c));a.strikethrough&&(b=g.Wd("STRIKE",null,b||c));a.navigationEndpoint&&a.navigationEndpoint.urlEndpoint&&(a=a.navigationEndpoint.urlEndpoint,b=g.Wd("A",{href:a.url},b||c),"TARGET_NEW_WINDOW"==a.target&&(b.target="_blank"));return b||g.Wd("SPAN",null,c)};
g.VE=function(a){if(a.simpleText)return a.simpleText;if(a.simpleText)a=window.document.createTextNode(a.simpleText);else{var b=[];if(a.runs)for(var c=0;c<a.runs.length;c++){var d=a.runs[c];d.text&&b.push(UE(d))}a=1==b.length?b[0]:g.Wd("SPAN",null,b)}b=g.Yd("div");b.appendChild(a);return b.textContent};
g.WE=function(a){g.gt.call(this);this.adModule=!1;this.adaptiveFormats="";this.ec=null;this.allowEmbed=!0;this.qe=this.backgroundable=!1;this.Rd="";this.yi=this.xi=this.wi=!1;this.relativeLoudness=0;this.Io=1;this.watchAjaxToken=this.qf=null;this.author="";this.Td=0;this.wp=this.Fi=!1;this.clientScreenNonce=this.clientPlaybackNonce=this.wn=this.channelPath=this.Gi="";this.contentCheckOk=!1;this.Ud=0;this.enableCardioBeforePlayback=this.enableCardio=!1;this.endSeconds=0;this.bf=!1;this.we=this.vg=
0;this.nj=!1;this.Rs=0;this.isMdxPlayback=this.isLowLatencyLiveStream=this.isLiveDefaultBroadcast=this.isLiveDestination=this.xa=this.yh=this.isListed=this.Wl=this.kf=!1;this.mdxControlMode=null;this.isPharma=!1;this.Zf=0;this.jn="";this.dm=this.uq=this.Zd=!1;this.liveChunkReadahead=window.NaN;this.liveStartWalltime=0;this.im=null;this.Ah=this.lengthSeconds=0;this.playerParams=null;this.paygated=!1;this.profilePicture=void 0;this.racyCheckOk=!1;this.rootVeType=0;this.autonavState=1;this.ai=Zw;this.se=
!1;this.nq=this.startSeconds=0;this.spacecastModule=!1;this.si=null;this.fi=Zw;this.Mg=null;this.hlsFormats=this.rf=this.title="";this.jb=null;this.nk="vvt";this.requiresPurchase=!1;this.clipStart=0;this.clipEnd=window.Infinity;this.Mj=this.wg=this.jh=!1;this.ul="";this.cd=this.ln=this.Pp=0;this.qq=!1;this.Ng={};this.Ol=!1;this.captionTracks=[];this.fh=[];this.Rk=0;this.captionTranslationLanguages=[];this.gh=!1;this.Oi=new hw("und",new dw("Default","und",!0));this.hm=0;this.Ig=this.qt=!1;this.ae=
null;this.yf=[];this.hq=!1;this.eg={};this.Dt=new g.O(this.Et,5E3,this);g.J(this,this.Dt);this.tl=0;this.Qp=!0;this.hg=this.ob=null;this.Ve=!1;this.ad=[];this.xb={};this.keywords={};this.gd={};this.setData(a)};
fF=function(a,b,c){b=b||{};var d={};if(!c)d=a.ob||{};else if(b.player_response)for(d=g.bg(b.player_response)||{},a.ob||(a.ob={}),c=0;c<XE.length;c++){var e=XE[c];e in d&&(a.ob[e]=d[e])}(c=YE(d))?(a.Rd=Ez(c.invideoUrl),a.wi=!!c.adsOnly,a.xi=!!c.allowInPlaceSwitch):(b.iv_invideo_url&&(a.Rd=Ez(b.iv_invideo_url)),a.wi=wC(a.wi,b.iv_ads_only),a.xi=wC(a.xi,b.iv_allow_in_place_switch));b.cta_conversion_urls&&(a.Ho=b.cta_conversion_urls);a.isPharma=wC(a.isPharma,b.is_pharma);a.author=zC(a.author,b.author);
a.Fi=wC(a.Fi,b.cc_asr);c=b.ttsurl;ZE.test(c)?a.Gi=c:c&&(c=Dz(c),ZE.test(c)&&(a.Gi=c));d.captions&&d.captions.playerCaptionsTracklistRenderer?$E(a,d.captions.playerCaptionsTracklistRenderer):(a.Ol=void 0!=b.caption_tracks,b.caption_tracks&&b.caption_audio_tracks&&(aF(a,b.caption_tracks),bF(a,b.caption_audio_tracks),b.default_audio_track_index&&(a.Rk=(0,window.parseInt)(b.default_audio_track_index,10)||0),b.caption_translation_languages&&cF(a,b.caption_translation_languages)),a.gh=wC(a.gh,b.cc_contribute));
a.channelPath=zC(a.channelPath,b.channel_path);a.wn=zC(a.wn,b.short_subscriber_count_text);a.clientPlaybackNonce=zC(a.clientPlaybackNonce,b.cpn);a.subscribed=wC(a.subscribed,b.subscribed);a.PF=yC(a.PF,b.view_count);a.shortViewCount=zC(a.shortViewCount,b.short_view_count_text);a.title=zC(a.title,b.title);a.ypcPreview=zC(a.ypcPreview,b.ypc_preview);a.ypcOrigin=zC(a.ypcOrigin,b.ypc_origin);a.paygated=wC(a.paygated,b.paygated);a.requiresPurchase=wC(a.requiresPurchase,b.requires_purchase);b.keywords&&
(a.keywords=dF(b.keywords));b.rvs&&(a.ee=Nr(b.rvs));a.contentCheckOk=wC(a.contentCheckOk,"1"==b.cco);a.racyCheckOk=wC(a.racyCheckOk,"1"==b.rco);a.oauthToken=zC(a.oauthToken,b.oauth_token);a.visitorData=zC(a.visitorData,b.visitor_data);b.session_data&&(a.Pc=g.Gr(b.session_data));b.endscreen_autoplay_session_data&&(a.Ap=g.Gr(b.endscreen_autoplay_session_data));a.zp=zC(a.zp,b.endscreen_ad_tracking_data);a.qu=wC(a.qu,b.wait_for_vast_info_cards_xml);a.Ff=zC(a.Ff,b.wpid);a.Cn=zC(a.Cn,b.tracking_list||b.tv_list);
(0,g.G)(eF,function(a){a in b&&(this.xb[a]=b[a])},a)};
gF=function(a){return!(!a.Ta||!a.Ta.videoInfos.length)};
hF=function(a){return a.o&&Jy('video/webm; codecs="vp9"')&&Sb(a.g,function(a){return Mw(a.info)})};
iF=function(a){return!NB()||a.wp?!0:!1};
g.jF=function(a){if(!a.hg)return null;var b=g.t(a.hg.latitudeE7)&&g.t(a.hg.longitudeE7)?a.hg.latitudeE7+","+a.hg.longitudeE7:",";return b+=","+(a.hg.clientPermissionState||0)};
kF=function(a){a.ka()||(a.bf=!1,a.U("dataloaded",a.xb))};
lF=function(a,b,c){c&&a.sa&&a.sa.dispose();a.sa=b;g.J(a,b);(a.xe()||a.We()||a.Of()||a.Xd())&&a.ad.push("webgl");a.sa.isLive||(a.xa=!1)};
g.nF=function(a,b){if(a.ka())return GB();a.Ta=null;a.Xf=null;a.Xh=null;var c=b.B,d=c.c,c=c.cmodel;a.Ve=/^rq/.test(a.clientPlaybackNonce)||/^r/.test(a.clientPlaybackNonce)&&/UNPLUGGED/.test(d)||/FUGU/.test(c);iF(a)||b.Yl||!a.spacecastAdaptiveFormats?d=GB():(lF(a,FA(mF(a,a.spacecastAdaptiveFormats),a.ec,a.lengthSeconds,void 0),!0),d=iC(b.O,a.sa,a.ae,!0,!1).then(a.un,void 0,a).then(a.Dp,void 0,a));return d.then(void 0,(0,g.A)(a.Cy,a,b)).then(void 0,(0,g.A)(a.zy,a,b)).then(void 0,(0,g.A)(a.Ay,a,b)).then(void 0,
(0,g.A)(a.Dy,a,b)).then(void 0,(0,g.A)(a.By,a,b))};
oF=function(a,b){var c={cpn:a.clientPlaybackNonce,c:b.B.c,cver:b.B.cver};a.Kj&&(c.ptk=a.Kj,c.oid=a.Ts,c.ptchn=a.Ss,c.pltype=a.Us);return c};
g.pF=function(a){return a.Ba&&a.Ba.ec||null};
qF=function(a){var b=a.ob&&a.ob.paidContentOverlay&&a.ob.paidContentOverlay.paidContentOverlayRenderer||null;return b&&b.text?g.VE(b.text):a.DF};
rF=function(a){var b=a.ob&&a.ob.paidContentOverlay&&a.ob.paidContentOverlay.paidContentOverlayRenderer||null;return b&&b.durationMs?(a=b.durationMs,g.u(a)?bb(a):a):a.Rs};
g.sF=function(a,b){return g.u(a.keywords[b])?a.keywords[b]:null};
tF=function(a){if(!a.jb)if(a.ob&&a.ob.storyboards){var b=a.ob.storyboards;b.playerStoryboardSpecRenderer?a.jb=new ID(b.playerStoryboardSpecRenderer.spec,a.lengthSeconds):b.playerLiveStoryboardSpecRenderer&&a.sa&&(a.jb=new KD(b.playerLiveStoryboardSpecRenderer.spec,a.sa))}else a.xb.storyboard_spec?a.jb=new ID(a.xb.storyboard_spec,a.lengthSeconds):a.xb.live_storyboard_spec&&a.sa&&(a.jb=new KD(a.xb.live_storyboard_spec,a.sa));return a.jb};
uF=function(a,b){if(a.sa&&a.xa){var c=a.sa.g[a.Ba.id];if(!c||!c.index)return null;var d=c.index.Te(b),c=c.index.Id(d);return{sequence:d,elapsed:Math.floor(1E3*(b-c))}}return null};
vF=function(a){return!!(a.hd||a.adaptiveFormats||a.rf||a.Mg||a.spacecastFormatMap||a.spacecastAdaptiveFormats||a.hlsvp)};
wF=function(a){var b=g.ob(a.ad,"ypc");a.ypcPreview&&(b=!1);return a.sd()&&!a.bf&&(vF(a)||g.ob(a.ad,"fresca")||g.ob(a.ad,"heartbeat")||b)};
mF=function(a,b,c){b=Nr(b);var d={};c&&(0,g.G)(c.split(","),function(a){(a=a.match(/^([0-9]+)\/([0-9]+)x([0-9]+)(\/|$)/))&&(d[a[1]]={width:a[2],height:a[3]})});
(0,g.G)(b,function(a){var b=d[a.itag];b&&(a.width=b.width,a.height=b.height)},a);
return b};
xF=function(a){a=Nr(a);var b={};(0,g.G)(a,function(a){var c=a.family;a=a.url;c&&a&&(b[c]=a)});
return b};
aF=function(a,b){for(var c=Nr(b),d=0;d<c.length;d++){var e=c[d],f=e.u;ZE.test(f)&&a.captionTracks.push(new g.fw({is_translateable:wC(!1,e.t),languageCode:e.lc,languageName:e.n,url:f,vss_id:e.v,kind:e.k,format:3}))}};
bF=function(a,b){var c=Nr(b);a.fh=[];(0,g.G)(c,function(a){var b={};g.t(a.aid)&&(b.audioTrackId=a.aid);a.i&&(b.captionTrackIndices=(0,g.H)(a.i.split(","),function(a){return(0,window.parseInt)(a,10)}));
b.hasDefaultTrack=g.t(a.d);b.hasDefaultTrack&&(b.defaultCaptionTrackIndex=(0,window.parseInt)(a.d,10)||void 0);b.hasForcedTrack=g.t(a.f);b.hasForcedTrack&&(b.forcedCaptionTrackIndex=(0,window.parseInt)(a.f,10));b.visibility=yF[(0,window.parseInt)(a.v,10)]||"UNKNOWN";this.fh.push(b)},a)};
cF=function(a,b){for(var c=Nr(b),d=0;d<c.length;d++){var e=c[d];a.captionTranslationLanguages.push(new g.ew({languageCode:e.lc,languageName:e.n}))}};
$E=function(a,b){a.Ol=!0;a.captionTracks=[];b.captionTracks&&(0,g.G)(b.captionTracks,function(a){var b=a.baseUrl;ZE.test(b)&&(a=new g.fw({is_translateable:!!a.isTranslatable,languageCode:a.languageCode,languageName:a.name&&g.VE(a.name),url:b,vss_id:a.vssId,kind:a.kind,format:3}),this.captionTracks.push(a))},a);
a.fh=b.audioTracks||[];a.Rk=b.defaultAudioTrackIndex||0;a.captionTranslationLanguages=b.translationLanguages?(0,g.H)(b.translationLanguages,function(a){return new g.ew({languageCode:a.languageCode,languageName:g.VE(a.languageName)})}):[];
a.gh=!!b.contribute&&!!b.contribute.captionsMetadataRenderer};
g.zF=function(a,b){return!!a.xb[b]};
g.AF=function(a){return a.xa&&!a.qe};
BF=function(a){return a.xa&&a.qe};
CF=function(a){var b=g.ec(a.xb);!a.xa&&0<a.startSeconds&&(b.start=a.startSeconds);return b};
DF=function(a){a.Ta=a.Ta.o};
g.EF=function(a){var b=a.xb.iv_endscreen_url;b||(b=a.ob&&a.ob.endscreen&&a.ob.endscreen.endscreenUrlRenderer&&a.ob.endscreen.endscreenUrlRenderer.url);return b};
YE=function(a){return a&&a.annotations&&(a=a.annotations[0],a.playerAnnotationsUrlsRenderer)?a.playerAnnotationsUrlsRenderer:null};
dF=function(a){var b={};(0,g.G)(a.split(","),function(a){var c=a.split("=");2==c.length?b[c[0]]=c[1]:b[a]=!0});
return b};
FF=function(a,b,c,d){this.videoData=a;this.g=b;this.reason=c;this.o=d};
IF=function(a){this.g=a;this.o=0;this.C=-1;this.O=this.g.xc().volume;this.K=this.g.xc().muted;this.D=window.NaN;this.B=0;this.Ra=[];this.A=GF(this.g);this.L=g.HF(this.g);this.G=this.H=0};
g.JF=function(a){a.A.startTime=a.B;a.A.endTime=a.o;a.Ra.length&&g.eb(a.Ra).isEmpty()?a.Ra[a.Ra.length-1]=a.A:a.Ra.length&&a.A.isEmpty()||a.Ra.push(a.A);var b=g.HF(a.g),c=a.g.g.experiments.o("html5_min_vss_watchtime_to_cut_secs_redux");if(c){var d=b-a.L;var e=a.A;e=(e.endTime-e.startTime)/e.playbackRate;var f=a.g.g.experiments.o("html5_max_vss_watchtime_ratio");e>c&&e>d*f&&(c=g.ec(a.A),a.A.endTime=a.A.startTime+.001,c.startTime=c.endTime-.001,a.Ra.push(c))}a.H+=a.o-a.B;a.A=GF(a.g);a.B=a.o;a.L=b};
KF=function(a){return a.H+a.g.o()-a.B};
LF=function(a){a.Ra.length&&a.o==a.B||g.JF(a);var b=a.Ra;a.Ra=[];return b};
MF=function(a,b,c){c-=a.D;return b==a.o&&.5<c};
NF=function(a,b){if(!a.g.g.experiments.g("segment_volume_reporting"))return!1;var c=a.g.xc().volume,d=c!=a.O,e=a.g.xc().muted;if(e!=a.K)return a.K=e,!0;!d||0<=a.C||(a.O=c,a.C=b);c=b-a.C;return 0<=a.C&&2<c?(a.C=-1,!0):!1};
OF=function(a,b){this.g=b;this.A=!1;this.videoData=a};
PF=function(a,b,c){OF.call(this,b,c);this.B=a};
g.RF=function(a){return(a=QF[a.toString()])?a:"YTP_ERROR_LICENSE"};
SF=function(){this.C=this.g=window.NaN;this.A=this.B=this.o=!1};
TF=function(a,b,c,d){if(d=1<d)a.B=!0;if(a.o)b!=a.g&&(a.o=!1);else if(0<b&&a.g==b)return c-a.C>(d||!a.B?1500:400);a.g=b;a.C=c;return!1};
g.UF=function(a,b){this.o=a||64;this.g=b||null};
VF=function(a,b){return TF(a,b.getCurrentTime(),(0,g.Ot)(),sy(b))};
WF=function(a,b,c){return b==a.o&&c==a.g||b&128&&!c||b&2&&b&16?a:new g.UF(b,c)};
XF=function(a,b){return WF(a,a.o|b)};
YF=function(a,b){return WF(a,a.o&~b)};
ZF=function(a){return WF(a,(a.o|4)&-9)};
g.T=function(a,b){return!!(a.o&b)};
g.$F=function(a,b){return b.o==a.o&&b.g==a.g};
aG=function(a){return g.T(a,8)&&!g.T(a,2)};
bG=function(a){return g.T(a,64)&&!g.T(a,8)&&!g.T(a,4)};
g.cG=function(a){return g.T(a,1)&&!g.T(a,2)};
dG=function(a){return g.T(a,128)?-1:g.T(a,2)?0:g.T(a,1)&&!g.T(a,32)?3:g.T(a,64)?-1:g.T(a,8)?1:g.T(a,4)?2:-1};
g.eG=function(a,b){this.state=a;this.g=b};
fG=function(a,b){return g.T(a.state,b)&&!g.T(a.g,b)?1:!g.T(a.state,b)&&g.T(a.g,b)?-1:0};
gG=function(){this.endTime=this.startTime=-1;this.Sk="-";this.playbackRate=1;this.visibilityState=0;this.Lk="";this.volume=this.connectionType=this.Ne=0;this.muted=!1};
hG=function(a,b,c,d,e,f,k,l,m,n,q,r,v){this.videoData=a;this.g=b;this.xc=c;this.C=d;this.o=e;this.D=f;this.T=k;this.L=l;this.O=m;this.G=n;this.B=q;this.H=r||function(){};
this.A=null;this.K=v||function(){}};
g.HF=function(a){return iG(a)()};
iG=function(a){if(!a.A){var b=g.B(function(a){var b=(0,g.Ot)();a&&631152E6>=b&&(g.xr(Error("invalid yt.global.now value: "+b)),b=(new Date).getTime()+2);return b},a.g.experiments.g("html5_validate_yt_now"));
a.A=g.B(function(a){return Math.round(b()-a)/1E3},b());
a.K()}return a.A};
jG=function(a){var b=a.xc();g.Ea(b,a.videoData.xc());return b};
lG=function(){return window.navigator.connection&&window.navigator.connection.type?kG[window.navigator.connection.type]||kG.other:0};
GF=function(a){var b=new gG;b.Sk=a.xc().cc||"-";b.playbackRate=a.O();var c=a.B();0!=c&&(b.visibilityState=c);a.g.Ne&&(b.Ne=1);c=a.L();c.Ub&&c.Ub.id&&"und"!=c.Ub.id&&(b.Lk=c.Ub.id);b.connectionType=lG();b.volume=a.xc().volume;b.muted=a.xc().muted;return b};
nG=function(a){g.I.call(this);var b=this;this.g=a;this.o={};this.za=1;this.ba=window.NaN;this.A="N";this.D=this.da=this.B=0;this.O=this.ha="";this.aa=0;this.la=-1;this.L=this.T=0;this.X=this.K=!1;this.oa=[];this.G=null;this.H=!1;(a=window.navigator.getBattery?window.navigator.getBattery():null)&&a.then&&a.then(function(a){b.G=a});
this.W=(this.g.g.experiments.o("html5_disable_qoe_percentage")||0)>Math.floor(100*Math.random());this.g.g.experiments.g("html5_qoe_unstarted_in_initialization")&&g.mG(this,0,"vps",["N"])};
g.mG=function(a,b,c,d){var e=a.o[c];e||(e=[],a.o[c]=e);e.push(b.toFixed(3)+":"+d.join(":"))};
pG=function(a,b){b=0<=b?b:g.HF(a.g);var c=a.g.D();if(!(0,window.isNaN)(a.fa)&&!(0,window.isNaN)(c.B)){var d=c.B-a.fa;0<d&&g.mG(a,b,"bwm",[d,(c.G-a.Ea).toFixed(3)])}a.fa=c.B;a.Ea=c.G;(0,window.isNaN)(c.o)||g.mG(a,b,"bwe",[c.o.toFixed(0)]);a.g.videoData.Ve&&c.g&&oG(a,"bwinfo",c.g);(0,window.isNaN)(c.A)||(d=c.A,c.C<d&&(d=c.C),g.mG(a,b,"bh",[d.toFixed(3)]));a.G&&g.mG(a,b,"bat",[a.G.level,a.G.charging?"1":"0"]);d=a.g.B();a.la!=d&&(g.mG(a,b,"vis",[d]),a.la=d);g.mG(a,b,"cmt",[a.g.o().toFixed(3)]);(d=lG())&&
d!=a.aa&&(g.mG(a,b,"conn",[d]),a.aa=d);0<c.D&&g.mG(a,b,"e2el",[c.D,c.K.toFixed(3),c.H.toFixed(3),c.O.toFixed(3),c.L.toFixed(3)]);null!==a.g.videoData.si&&(a.o.acc=[a.g.videoData.si.join(":")])};
qG=function(a){var b={event:"streamingstats"};if(a.g.videoData.Ba){b.fmt=Kw(a.g.videoData.Ba);var c=a.g.videoData.uc;c&&Kw(c)!=b.fmt&&(b.afmt=Kw(c))}b.cpn=a.g.videoData.clientPlaybackNonce;b.ei=a.g.videoData.eventId;b.el=a.g.g.g;b.docid=a.g.videoData.videoId;b.ns=a.g.g.Va;b.fexp=a.g.g.experiments.experimentIds.toString();b.cl=a.g.g.Ma;a.g.videoData.adFormat&&(b.adformat=a.g.videoData.adFormat);a.g.videoData.xa&&(b.live=a.g.videoData.qe?"dvr":"live");b.seq=a.za++;return b};
rG=function(a,b){a.g.g.experiments.g("html5_ajax_qoe_retry")?g.Kf(os(b,{},3,500),g.qa):g.is(b)};
sG=function(a){var b=0,c;for(c in a.o)b+=c.length+wd(a.o[c],function(a,b){return a+b.length},0);
1E3<b&&(new g.O(a.C,0,a)).start()};
tG=function(a,b,c,d){var e=a.g.o();c=[c,e.toFixed(3)];d&&c.push(d);g.mG(a,b,"error",c)};
uG=function(a,b){g.mG(a,g.HF(a.g),"lra",[b]);oG(a,"live-readahead-seconds",b.toString())};
wG=function(a){if(g.T(a,128))return"ER";if(g.T(a,512))return"SU";if(g.T(a,16)||g.T(a,32))return"S";var b=vG[dG(a)];"B"==b&&g.T(a,4)&&(b="PB");return b};
xG=function(a,b){var c=a.o.cat||[];c.push(b);a.o.cat=c};
oG=function(a,b,c,d){var e=a.o.ctmp||[],f=-1!=a.oa.indexOf(b);f||a.oa.push(b);d&&f||(d||(c="t."+g.HF(a.g).toFixed(3)+";"+c),e.push(b+":"+c),a.o.ctmp=e,sG(a))};
yG=function(a,b,c,d){this.L=b;this.segments=[];this.experimentIds=[];this.Zd=this.La=this.O=this.wa=this.Fa=this.ba=this.autoplay=this.autonav=!1;this.ha="yt";this.qf=this.o=this.C=null;this.aa=!1;this.B="watchtime"==c;this.A="playback"==c;this.K="delayplay"==c;this.H="atr"==c;this.Ka="engage"==c;this.Ig=!1;this.Xa=this.H?"/api/stats/"+c:"//"+b.bh+"/api/stats/"+c;d&&(this.O=d.fs,d.rtn&&(this.o=d.rtn),this.B?(this.Cb=d.state,0<d.rti&&(this.C=d.rti)):(this.Ma=d.mos,this.Va=d.volume,d.at&&(this.adType=
d.at)),d.autonav&&(this.autonav=d.autonav),d.inview&&(this.oa=d.inview),d.size&&(this.la=d.size));b.experiments.g("legacy_autoplay_flag")&&(this.autoplay=b.da);this.ib=b.Fa;this.wb=g.ec(b.B);this.ba=b.G;this.Ea=b.oa;this.Bb=b.g;this.experimentIds=b.experiments.experimentIds;this.fb=b.sc;this.ha=b.Va;this.region=b.region;this.Qb=b.Ma?b.Ma.toString():"";this.userAge=b.userAge;this.userGender=b.userGender;this.Ya=g.Rt();this.Ig=b.La;this.D=a.oauthToken||this.D;this.adFormat=a.adFormat;this.autoplay=
aD(this.L,a,this.O);this.autonav=a.nj||this.autonav;this.qf=a.qf;this.clientPlaybackNonce=a.clientPlaybackNonce;this.X=a.vssCredentialsToken;this.kb=a.nk;this.mdxEnvironment=a.mdxEnvironment;this.Td=a.Td;this.Ud=a.Ud;a.Ba&&(this.za=Kw(a.Ba),a.uc&&Kw(a.uc)!=this.za&&(this.W=Kw(a.uc)));this.Zd=a.Zd;this.vg=a.vg;a.xa&&(this.Ua=a.qe?"dvr":"live");this.Ah=a.Ah;this.jf=a.jf;this.playbackId=a.playbackId;this.eventId=a.eventId;this.playlistId=a.Cn||a.playlistId;this.Qj=a.Qj;this.lf=a.lf;this.De=a.De;this.Yj=
a.Yj;this.subscribed=a.subscribed;this.videoId=a.videoId;this.videoMetadata=a.videoMetadata;this.visitorData=a.visitorData;this.osid=a.osid;this.fn=a.fn;this.referrer=a.referrer;this.Yf=a.hn||a.Yf;this.Pg=a.Pg;this.dk=a.dk;this.Ff=a.Ff};
AG=function(a){var b={ns:a.ha,el:a.Bb,cpn:a.clientPlaybackNonce,docid:a.videoId,ver:2,referrer:a.referrer,cmt:a.g(a.Td),plid:a.playbackId,ei:a.eventId,fmt:a.za,fs:a.O?"1":"0",rt:a.g(a.Wa),of:a.fn,adformat:a.adFormat,content_v:a.ib,euri:a.Ea,lact:a.Ya,live:a.Ua,cl:a.Qb,mos:a.Ma,osid:a.osid,state:a.Cb,vm:a.videoMetadata,volume:a.Va};a.subscribed&&(b.subscribed="1");g.Ea(b,a.wb);a.autonav&&(b.autonav="1");if(a.L.experiments.g("legacy_autoplay_flag"))a.autoplay&&(b.autoplay="1");else if(a.autoplay||a.Zd)b.autoplay=
"1";a.ba&&(b.dni="1");a.wa&&(b["final"]="1");a.Zd&&(b.splay="1");a.Ud&&(b.delay=a.Ud);a.fb&&(b.hl=a.fb);a.region&&(b.cr=a.region);g.t(a.userAge)&&a.userGender&&(b.uga=a.userGender+a.userAge);g.t(a.fa)&&(b.len=a.g(a.fa));!a.B&&0<a.experimentIds.length&&(b.fexp=a.experimentIds.toString());null!=a.o&&(b.rtn=a.g(a.o));a.Yf&&(b.feature=a.Yf);a.playlistId&&(b.list=a.playlistId);a.lf&&(b.ctrl=a.lf);a.De&&(b.ytr=a.De);a.Yj&&(b.ssrt="1");a.W&&(b.afmt=a.W);a.da&&(b.lio=a.g(a.da));a.B?(b.idpj=a.vg,b.ldpj=a.Ah,
null!=a.C&&(b.rti=a.g(a.C))):g.t(a.adType)&&(b.at=a.adType);(a.A||a.K)&&a.qf&&(b.tst=a.qf);a.la&&(a.A||a.K)&&(b.size=a.la);null!=a.oa&&(a.A||a.K)&&(b.inview=a.g(a.oa));a.B&&(a.L.experiments.g("segment_volume_reporting")&&(b.volume=zG(a,(0,g.H)(a.segments,function(a){return a.volume})),b.muted=zG(a,(0,g.H)(a.segments,function(a){return a.muted}))),b.st=zG(a,(0,g.H)(a.segments,function(a){return a.startTime})),b.et=zG(a,(0,g.H)(a.segments,function(a){return a.endTime})),(0,g.gl)(a.segments,function(a){return 1!=
a.playbackRate})&&(b.rate=zG(a,(0,g.H)(a.segments,function(a){return a.playbackRate}))));
(0,g.gl)(a.segments,function(a){return 0!=a.visibilityState})&&(b.vis=zG(a,(0,g.H)(a.segments,function(a){return a.visibilityState})));
(0,g.gl)(a.segments,function(a){return 0!=a.connectionType})&&(b.conn=zG(a,(0,g.H)(a.segments,function(a){return a.connectionType})));
(0,g.gl)(a.segments,function(a){return 0!=a.Ne})&&(b.blo=zG(a,(0,g.H)(a.segments,function(a){return a.Ne})));
(0,g.gl)(a.segments,function(a){return"-"!=a.Sk})&&(b.cc=(0,g.H)(a.segments,function(a){return a.Sk}).join(","));
if((0,g.gl)(a.segments,function(a){return!!a.Lk})){var c="au";
a.A&&(c="au_d");b[c]=(0,g.H)(a.segments,function(a){return a.Lk}).join(",")}Kr()&&a.X&&(b.ctt=a.X,b.cttype=a.kb,b.mdx_environment=a.mdxEnvironment);
a.Ka&&(b.etype=g.t(a.G)?a.G:0);a.Pg&&(b.uoo=a.Pg);a.dk&&(b.upt=a.dk);a.Ff&&(b.wpid=a.Ff);return b};
zG=function(a,b){return(0,g.H)(b,a.g).join(",")};
BG=function(a){g.I.call(this);this.g=a;this.o=new nG(a);g.J(this,this.o);this.A=new IF(a);this.D="paused";this.G=window.NaN;this.K=[10,10,10,40];this.L=this.H=0;this.W=this.X=this.T=this.O=this.B=!1;this.C=window.NaN;this.ba=new PF(this.A,this.g.videoData,this.g.g)};
CG=function(a,b,c){var d=g.HF(a.g);c=(0,window.isNaN)(c)?d:c;c=Math.ceil(c);var e=a.K[a.H];a.H+1<a.K.length&&a.H++;c+=e;d=1E3*(c-d);a.G=g.Fr((0,g.A)(a.UC,a,c,b),d);return c};
DG=function(a,b){var c=jG(a.g);g.Ea(c,{state:a.D});c=new yG(a.g.videoData,a.g.g,b,c);c.Td=a.g.o();a.g.videoData.xa||(c.fa=a.g.C());if(a.g.videoData.sa){var d=VA(a.g.videoData.sa,c.Td);d&&(c.da=d-c.Td)}c.Wa=g.HF(a.g);c.segments=[GF(a.g)];return c};
EG=function(a,b){var c=DG(a,"watchtime");c.segments=b;c.Td=a.A.o;return c};
FG=function(a){a.A.update();return EG(a,LF(a.A))};
IG=function(a){a.g.videoData.remarketingUrl&&!a.X&&(GG(a,a.g.videoData.remarketingUrl),a.X=!0);a.g.videoData.ppvRemarketingUrl&&!a.W&&(GG(a,a.g.videoData.ppvRemarketingUrl),a.W=!0);HG(a)};
JG=function(a,b){if(!a.ka()){g.T(b.state,2)?(a.D="paused",0<fG(b,2)&&a.B&&FG(a).send()):g.T(b.state,8)?(a.D="playing",a.B&&(0,window.isNaN)(a.G)&&CG(a,!1)):a.D="paused";var c=a.o,d=b.state,e=g.HF(c.g),f=wG(b.state);if(f!=c.A){if(!(e<c.B)){if("PL"==c.A)c.L+=e-c.B;else if("B"==c.A&&c.K&&(c.K=!1,c.T+=e-c.B,!c.X&&10<=c.T&&180>=c.L)){c.g.H();if(!c.ka()&&!c.W){var k=qG(c);k.qoealert="1";k=g.wg(c.g.g.Yg,k);rG(c,k)}c.X=!0}"B"!=f||"PL"!=c.A&&"PB"!=c.A||(c.K=!0);c.B=e}"B"==f&&"PL"==c.A||c.g.videoData.Ve?pG(c,
e):g.mG(c,e,"cmt",[c.g.o().toFixed(3)]);g.mG(c,e,"vps",[f]);c.A=f;c.B=e}g.T(d,128)&&tG(c,e,d.g.errorCode,d.g.errorDetail);(g.T(d,2)||g.T(d,128))&&c.C(e);g.T(d,8)&&c.g.videoData.Mj&&!c.H&&(c.o.user_intent=[g.HF(c.g).toString()],c.H=!0);sG(c);a.C&&g.T(b.state,128)&&(a.Uj("error-100"),g.Dr(a.C))}};
KG=function(a){a.C=g.Er((0,g.A)(a.Uj,a,"heartbeat"),3E4)};
HG=function(a){a.g.videoData.gd.eventLabel=a.g.g.g;a.g.videoData.gd.playerStyle=a.g.g.o;a.g.videoData.Nj&&(a.g.videoData.gd.feature="pyv");a.g.videoData.gd.vid=a.g.videoData.videoId;a.g.videoData.gd.isAd=!("adunit"!=a.g.g.g&&!a.g.videoData.Nj)};
GG=function(a,b,c){a.g.g.La&&a.g.videoData.visitorData&&Lr(b)?g.Ur(b,{Nc:c,headers:{"X-Goog-Visitor-Id":a.g.videoData.visitorData}}):g.is(b,c)};
LG=function(a,b){kx.call(this,a,b);this.g=!1;S(this,"getPresentingPlayerType",this.Ha);S(this,"addInfoCardXml",this.lz);S(this,"cueVideoByPlayerVars",this.mz);S(this,"loadVideoByPlayerVars",this.Jh);S(this,"preloadVideoByPlayerVars",this.Cm);S(this,"seekBy",this.td);S(this,"updatePlaylist",this.Hz);S(this,"updateLastActiveTime",this.Gz);S(this,"updateVideoData",this.Iz);S(this,"getPlayerResponse",this.getPlayerResponse);S(this,"getStoryboardFormat",this.getStoryboardFormat);S(this,"getProgressState",
this.df);S(this,"getHousebrandProperties",this.pz);S(this,"setPlaybackQualityRange",this.Yq);S(this,"getCurrentPlaylistSequence",this.oz);S(this,"canPlayType",this.zm);S(this,"sendVideoStatsEngageEvent",this.Sf);S(this,"setCardsVisible",this.Kh);S(this,"handleGlobalKeyDown",this.sz);S(this,"getAudioTrack",this.cf);S(this,"setAudioTrack",this.Em);S(this,"getAvailableAudioTracks",this.Am);S(this,"getMaxPlaybackQuality",this.qz);S(this,"setSizeStyle",this.Bz);S(this,"forceFrescaUpdate",this.nz);S(this,
"setAutonav",this.Uq);S(this,"setAutonavState",this.Vq);S(this,"showControls",this.Ez);S(this,"hideControls",this.uz);S(this,"getVisibilityState",this.Ih);S(this,"shouldSendVisibilityState",this.Dz);S(this,"getVideoContentRect",this.Xq);S(this,"setSafetyMode",this.Az);S(this,"setFauxFullscreen",this.xz);S(this,"cancelPlayback",this.Qk);S(this,"getVideoStats",this.Rp);S(this,"updateSubtitlesUserSettings",this.vj);S(this,"getSubtitlesUserSettings",this.Rf);S(this,"resetSubtitlesUserSettings",this.Dm);
S(this,"isFastLoad",this.vz);S(this,"isPeggedToLive",this.isPeggedToLive);S(this,"setMinimized",this.zz);S(this,"getSphericalConfig",this.rz);S(this,"setSphericalConfig",this.Cz);S(this,"setBlackout",this.wz);S(this,"onAdUxClicked",this.Bm);S(this,"toggleSettingsMenu",this.Fz);S(this,"getPlayerSize",this.uj);S(this,"setGlobalCrop",this.yz);S(this,"wakeUpControls",this.KG);S(this,"isMutedByMutedAutoplay",this.iy)};
MG=function(a,b,c){this.V=a;this.g=void 0===b?"":b;this.A=c||null;this.B=!1};
NG=function(a,b){var c=a.V;if(c.Dc&&("detailpage"==c.g||"leanback"==c.g||"embedded"==c.g&&(c.da&&c.Gc||c.experiments.g("html5_playlist_preload")))&&!a.B){a.B=!0;a.V.experiments.g("html5_skip_default_csi_configs")||(g.P("TIMING_ACTION")||g.Vq("TIMING_ACTION",a.V.csiPageType),a.V.Wa&&g.Vq("CSI_SERVICE_NAME",a.V.Wa));if(a.A){var c=a.A.aa;for(d in c)g.qE(d,c[d],a.g);var d=a.A.ba;for(var e in d)g.rE(e,d[e],a.g);e=a.A;e.aa={};e.ba={}}g.rE("yt_pvis",vE(),a.g);g.rE("yt_pt","html5",a.g);b&&!JE("pbs",a.g)&&
a.o("pbs",b);e=a.V;("detailpage"!=e.g||"blazer"==e.o)&&JE("_start",a.g)&&DE(a.g)}};
OG=function(a,b){this.type=a||"";this.id=b||""};
g.PG=function(a){return new OG(a.substr(0,2),a.substr(2))};
g.VG=function(a){g.gt.call(this);this.startSeconds=0;this.Qt=!1;this.Za=0;this.title="";this.af=0;this.Ia=[];this.zh=this.be=!1;this.Pc=this.Ap=this.Yh=null;this.views=0;this.uw=0!=a.fetch;this.Oc=[];this.Za=Math.max(0,a.index||0);this.loop=!!a.loop;this.startSeconds=a.startSeconds||0;this.UB="1"==a.mob;this.title=a.playlist_title||"";this.description=a.playlist_description||"";this.author=a.author||a.playlist_author||"";this.Ng={};a.video_id&&(this.Ia[this.Za]=a);a.api&&("string"==typeof a.api&&
16==a.api.length?a.list="PL"+a.api:a.playlist=a.api);this.rj=0;if(a.list)switch(a.listType){case "user_uploads":QG(this,a.list);break;case "user_favorites":RG(this,a.list);break;case "search":SG(this,a.list);break;default:a.playlist_length&&(this.af=a.playlist_length),this.listId=g.PG(a.list),a.video?(this.Ia=a.video.slice(0),this.be=!0):TG(this)}else if(a.playlist){var b=a.playlist.toString().split(",");0<this.Za&&(this.Ia=[]);(0,g.G)(b,function(a){a&&this.Ia.push({video_id:a})},this);
this.af=this.Ia.length;b=(0,g.H)(this.Ia,function(a){return a.video_id});
UG(this,"/list_ajax?style=json&action_get_templist=1",{video_ids:b.join(",")});this.be=!0}this.setShuffle(!!a.shuffle);a.suggestedQuality&&(this.quality=a.suggestedQuality);this.Ng=QD(a,"playlist_");this.Xt=a.thumbnail_ids?a.thumbnail_ids.split(","):[]};
WG=function(a){return!!(a.playlist||a.list||a.api)};
XG=function(a){var b=a.Za+1;return b>=a.af?0:b};
YG=function(a){var b=a.Za-1;return 0>b?a.af-1:b};
ZG=function(a,b){a.Za=g.td(b,0,a.af-1);a.startSeconds=0};
QG=function(a,b){a.zh||(a.listId=new OG("UU","PLAYER_"+b),UG(a,"/list_ajax?style=json&action_get_user_uploads_by_user=1",{username:b}))};
RG=function(a,b){a.zh||(a.listId=new OG("FL","PLAYER_"+b),UG(a,"/list_ajax?style=json&action_get_favorited_by_user=1",{username:b}))};
SG=function(a,b){if(!a.zh){a.listId=new OG("SR",b);var c={search_query:b};a.UB&&(c.mob="1");UG(a,"/search_ajax?style=json&embeddable=1",c)}};
TG=function(a){if(!a.zh){var b={list:a.listId},c=a.zb();c&&c.videoId&&(b.v=c.videoId);UG(a,"/list_ajax?style=json&action_get_list=1",b)}};
UG=function(a,b,c){a.uw&&g.Ur(g.wg(b,c),{format:"JSON",nb:(0,g.A)(function(a,b){$G(this,b)},a),
onError:(0,g.A)(function(){this.U("error")},a)})};
$G=function(a,b){if(b.video&&b.video.length){a.title=b.title;a.description=b.description;a.views=b.views;a.author=b.author;b.loop&&(a.loop=b.loop);var c=a.zb();a.Ia=[];(0,g.G)(b.video,function(a){a&&(a.video_id=a.encrypted_id,this.Ia.push(a))},a);
a.af=a.Ia.length;b.index?a.Za=b.index:a.mh(c);a.setShuffle(!1);a.zh=!1;a.be=!0;a.rj++;a.Yh&&a.Yh()}};
g.bH=function(a){g.I.call(this);this.ma={};this.La={};this.element=aH(this,a)};
aH=function(a,b,c){c=c||"svg"==b.F;var d=c?window.document.createElementNS("http://www.w3.org/2000/svg",b.F):g.Yd(b.F);var e=b.M;if(e){if(e=cH(a,d,"class",e))dH(a,d,"class",e),a.ma[e]=d}else{var f=b.Z;if(f){for(e=0;e<f.length;e++)a.ma[f[e]]=d;dH(a,d,"class",f.join(" "))}}if(f=b.J)for(var k=0,e=0;e<f.length;e++){var l=f[e];if(l)if(g.u(l))l=cH(a,d,"child",l),null!=l&&d.appendChild(g.Zd(l));else if(l.element)d.appendChild(l.element);else{var m=l,l=aH(a,m,c);d.appendChild(l);m.Da&&(m=g.bH.g(),l.id=m,
l=window.document.createElementNS("http://www.w3.org/2000/svg","use"),l.setAttribute("class","ytp-svg-shadow"),l.setAttributeNS("http://www.w3.org/1999/xlink","href","#"+m),ce(d,l,k++))}}if(b=b.P)for(var n in b)c=b[n],null!=c&&dH(a,d,n,g.u(c)?cH(a,d,n,c):c);return d};
cH=function(a,b,c,d){return"{{"==d.substr(0,2)?(a.La[d]=[b,c],null):d};
dH=function(a,b,c,d){if("child"==c){g.ae(b);if(!g.ua(d)||g.ya(d)&&g.u(d.F))d=[d];c=[];for(var e=0;e<d.length;e++){var f=d[e];if(null!=f)if(!f.nodeType||1!=f.nodeType&&3!=f.nodeType)if(g.ya(f)&&g.u(f.F))c.push(aH(a,f));else if(f.element)c.push(f.element);else if(g.u(f)&&-1!=f.indexOf("\n"))for(var f=f.split("\n"),k=0;k<f.length;k++)0<k&&c.push(g.Yd("BR")),c.push(g.Zd(f[k]));else c.push(g.Zd(f));else c.push(f)}for(a=0;a<c.length;a++)b.appendChild(c[a])}else"style"==c?b.style.cssText=d?d:"":null===d?
b.removeAttribute(c):b.setAttribute(c,d.toString())};
g.eH=function(a,b){a&&(a.style.display=b)};
fH=function(a){var b=Js("requestAnimationFrame",window);return g.Fr(function(){b?b.call(window,a):a()},0)};
gH=function(a){if(window.document.createRange){var b=window.document.createRange();b.selectNodeContents(a);window.getSelection().removeAllRanges();window.getSelection().addRange(b)}};
g.U=function(a){g.bH.call(this,a);this.g=!0;this.aa=[]};
hH=function(a,b,c){this.audio=a;this.video=b;this.reason=c};
iH=function(a){this.g=window.Float32Array?new window.Float32Array(a):Array(a);this.o=a-1};
jH=function(a,b){a.o=(a.o+1)%a.g.length;a.g[a.o]=b};
kH=function(){this.C=new iH(50);this.o=null;this.D=this.B=0;this.g=[];this.A=null};
lH=function(a,b){0!=a.g.length&&(b.D=a.g.length,b.K=wd(a.g,function(a,b){return a+b},0),b.H=g.eb(a.g),b.O=Math.min.apply(Math,a.g),b.L=Math.max.apply(Math,a.g),a.g=[])};
mH=function(a){var b=(0,window.isNaN)(a.liveChunkReadahead)?3:a.liveChunkReadahead;a.yh&&b--;a.isLowLatencyLiveStream||b++;a.sa&&BA(a.sa)&&(b+=2);this.g=Math.max(0,b);this.o=[];this.A=0;this.B=a};
nH=function(a){return(a.B.sa?UA(a.B.sa)||5:5)*a.g};
pH=function(a){this.g=new oH(0,0,null);this.B=8;this.C=[];this.A=this.D=window.NaN;this.K=this.o=this.H=0;this.G=window.NaN;this.L=0;this.O=void 0===a?!0:a};
qH=function(a){return{startTime:a.G/a.o,duration:a.K/a.o}};
rH=function(a){return!(0,window.isNaN)(a.A)&&a.o?a.A/a.o:a.L};
sH=function(a,b,c){var d=b.getUint32(c);b=b.getUint32(c+4);a.g=new oH(b,d,a.g);return 8};
tH=function(a){a.o&&!(0,window.isNaN)(a.D)&&(a.A=Math.floor(a.D*a.o),a.D=window.NaN)};
uH=function(a){return 0==a.g.type||1836019574==a.g.type||1952867444==a.g.type||1936286840==a.g.type||1953653094==a.g.type||1836019558==a.g.type};
vH=function(a,b,c){for(var d=c;d<b.byteLength;d++)a.C.push(b.getUint8(d));return new window.DataView(b.buffer,b.byteOffset,c)};
wH=function(a,b,c){return new xx(b,c,a.g.size,a.g.type,!0)};
oH=function(a,b,c){this.type=a;this.size=b;this.g=c;this.offset=this.version=0};
xH=function(a,b){g.gt.call(this);this.C=0;this.B=a;this.g=[];this.A=null;this.L=b;this.D=this.G=window.NaN;this.W=null;this.aa=(0,g.A)(function(a){this.B.vf&&(this.U("timestamprewrite",a),this.B.vf=!1)},this);
this.X=this.T=this.H=this.o=null;this.O=!1;this.K=null;this.B.fb&&(this.o=new pH(this.B.Ua))};
yH=function(a){return a.g.length?a.g[0]:null};
zH=function(a){return a.g.length?a.g[a.g.length-1]:null};
BH=function(a,b){var c=AH(a,b);(0,g.G)(c,function(b){a.g.push(b)})};
CH=function(a){return(0,g.gl)(a.g,function(a){return a.info.o})};
DH=function(a,b){if(b){var c=g.ib(a.g,function(a){return a.info.o});
-1!=c&&(a.g=g.yb(a.g,0,c+1))}else a.g=[]};
EH=function(a){if(!a.g.length)return 0;for(var b=a.g[0].o.length,c=1;c<a.g.length;c++)a.g[c].g!=a.g[c-1].g&&(b+=a.g[c].o.length);a.A&&(b+=a.A.o.length);return b};
FH=function(a){return(0,g.H)(a.g,function(a){return a.info})};
GH=function(a){return a.o?rH(a.o):a.G||0};
AH=function(a,b){if(!b.verify()||b.info.ia.Xl()){var c=Yy(b.info);c.verification="1";a.U("error",c||{})}b.Jd&&b.info.ia.info.video&&(c=rz(b),aA(b.info.ia,c),2==b.info.ia.info.o&&gz(c));if(HH(a,b)){if(1==b.info.ia.info.o)if(c=rz(b),c=Jx(c,0,1701671783)){0==c.data.getUint32(c.g)&&c.skip(4);Bx(c);Bx(c);zx(c);zx(c);zx(c);zx(c);var d=new window.Uint8Array(new window.ArrayBuffer(c.size-c.o)),e=new window.Uint8Array(c.data.buffer,c.offset+c.o,c.size-c.o);d.set(e);c.o=c.size;c=String.fromCharCode.apply(String,
new window.Uint8Array(d.buffer));c=(c=Ix(c))?new Gx(c):null}else c=null;else c=new $y(rz(b)),d=c.g,c.g=0,e=null,cz(c,[408125543,307544935,29555,26568,17543])&&(e=fz(c,!0),e=String.fromCharCode.apply(String,kz(c,e)),e=(e=Ix(e))?new Gx(e):null),c.g=d,c=e;b.A=c;b.A&&(a.H=b.A,a.O=!!a.o)}a.H&&(c=a.H,b.info.ya=c.o,b.info.B=c.C);b.info.o&&(a.X=b.info);a.B.Ke&&HH(a,b)&&Xx(rz(b),1701671783);if(!a.L.fd()&&(a.T&&!Wy(a.T,b.info,!0)&&(a.o&&a.o.reset(),a.G=window.NaN,a.C=0),a.T=b.info,a.o?((c=!(0,window.isNaN)(a.D))||
(c=a.o,c=!(!(0,window.isNaN)(c.A)||!(0,window.isNaN)(c.D))),c&&(c=a.o,c.D=(0,window.isNaN)(a.D)?(0,window.isNaN)(a.G)?b.info.startTime:a.G:a.D,tH(c),a.D=window.NaN),c=rz(b),d=a.o.process(c),d!=c&&(b.g=d.buffer,b.o=Sy(d.byteOffset,d.byteLength),b.range=b.o)):(c=(0,window.isNaN)(a.D)?(0,window.isNaN)(a.G)?b.info.startTime:a.G:a.D,a.D=window.NaN,a.B.Ua&&!tz(b,c)?(c=Yy(b.info),c.smst=1,a.U("error",c||{})):a.G=c+uz(b)),!b.range.length))return[];if(!a.L.fd()&&a.H)if(b.info.o){a.O=!1;a.K=null;c=a.H;if(a.o)e=
qH(a.o),d=a.o,d.G=window.NaN,d.K=0,d=e.startTime,e=e.duration;else{if(1==b.info.ia.info.o){for(var d=b.info.ia.g,f=e=window.NaN,k=0,l=new window.DataView(b.g);Ox(l,k);){var m=Px(l,k);1936286840==m.type?f=Tx(m):1836476516==m.type?f=Mx(m):1952867444==m.type&&(0,window.isNaN)(e)&&(e=Sx(m));k=Qx(m.type)?k+8:k+m.size}!f&&d&&(f=Nx(d));d=e/f}else d=new $y(rz(b)),e=b.Jd?d:new $y(new window.DataView(b.info.ia.g.buffer)),f=nz(e),e=d.g,d.g=0,oz(d)?ez(d,231)?(f=hz(d)*f/1E9,d.g=e,d=f):(d.g=e,d=window.NaN):(d.g=
e,d=window.NaN);d=d||b.info.A;e=uz(b)}a.U("segmentinfo",IH(c,d,e,!1));if(e=c.g["Cuepoint-Type"]?new Fx((0,window.parseFloat)(c.g["Cuepoint-Playhead-Time-Sec"])||0,(0,window.parseFloat)(c.g["Cuepoint-Total-Duration-Sec"])||0,c.g["Cuepoint-Context"]):null)e.Ee+=d,a.U("cuepoint",e,c.o)}else a.O&&!(0,window.isNaN)(a.o.G)&&(c=IH(a.H,qH(a.o).startTime,a.H.G,!0),a.K=c,a.U("placeholderinfo",c),a.O=!1);if(a.B.Wg&&!a.L.fd()&&(0==b.info.Ja||a.A)&&1==b.info.ia.info.o&&3==b.info.type&&!vz(b)&&b.info.duration&&
!a.B.fb&&(a.C+=1E3*(uz(b)-b.info.duration),a.W&&Math.abs(a.C-a.W.C)>=a.B.Fc))return c=(a.W.C-a.C)/1E3,d=uz(b)+c,e=new window.DataView(b.g),e=(e=Lx(e,1936286840))?Tx(e):window.NaN,(0,window.isNaN)(e)&&(e=b.info.ia.g,f=new window.DataView(b.g),e=(f=Lx(f,1836476516))?Mx(f):e?Nx(e):window.NaN),(e=JH(a,b,d*e))&&e.length&&(f=Yy(b.info),f.fds=d.toFixed(3),f.com=a.C.toFixed(3),a.U("timestamprewrite",f),a.G+=c,a.C+=1E3*c),e?e:KH(a,b);a.B.Va&&a.L.fd()&&(0==b.info.Ja||a.A)&&1==b.info.ia.info.o?(c=b.info.ia.index.ol(b.info.ya),
c=(c=JH(a,b,c))?c:KH(a,b)):c=[b];return c};
IH=function(a,b,c,d){return new ux(a.o,b,c,a.ingestionTime,"sq/"+a.o,void 0,void 0,d)};
HH=function(a,b){return!a.L.fd()&&3==b.info.type&&0==b.info.Ja&&(1==b.info.ia.info.o||2==b.info.ia.info.o)};
KH=function(a,b){if(a.A&&a.A!=b){var c=[a.A,b];a.A=null;return c}return[]};
JH=function(a,b,c){if(a.A){var d=a.A;var e=new window.Uint8Array(d.range.length+b.range.length);e.set(new window.Uint8Array(d.g,d.range.start,d.range.length));e.set(new window.Uint8Array(b.g,b.range.start,b.range.length),d.range.length);d=new window.DataView(e.buffer);Wx(d)}else d=rz(b),d=(e=Wx(d))&&e<d.byteLength?d:null;if(!d)return a.A=b,null;(c=Yx(d,c,a.aa,a.B.Cb))?(d=Wx(d),a.A&&(d-=a.A.range.length,a.A=null),a=sz(b,d),a[0].g=c,a[0].range=Sy(0,c.byteLength),a[0].o=Sy(0,c.byteLength),b=a[0],c=new window.DataView(c),
c=!!Jx(c,0,1836019574),b.Jd=c):a=null;return a};
LH=function(a,b){this.o=a;this.D=this.C=!1;this.length=b?b:0;this.g=0;this.A=[];this.B=null;this.length?1!=this.o.length||this.o[0].Pa||(this.o[0].Pa=this.length):1==this.o.length||(0,g.iv)(this.o,function(a){return!!a.range})};
MH=function(a){var b=a.length-a.g;(0,g.G)(a.A,function(a){b+=a.range.length});
return b};
NH=function(a,b,c,d,e){this.g=a;this.ba=b;this.fa=c;this.da=e;this.T=this.o=window.NaN;this.aa=0;this.A=this.K=this.D=window.NaN;this.X=this.W=this.B=!1;this.C=0;this.G=CB(this.g);this.O=this.L=window.NaN;this.H=d};
OH=function(a){return{rt:(((0,g.F)()-a.o)/1E3).toFixed(2),lb:a.A,pt:a.L.toFixed(2),pb:a.ba,stall:a.C.toFixed(2),elbowTime:((a.T-a.o)/1E3).toFixed(2),elbowBytes:a.aa}};
PH=function(a,b,c){var d=(b-a.D)/1E3,e=c-a.A;if(a.B)!a.H&&0<e&&(.2<d||1024>e?(a.C+=d,.2<d&&uB(a.g,.05,e)):uB(a.g,d,e),a.X=!0);else if(c>=a.g.policy.g){if(!a.H){var f=a.g;f.D.g(1,(b-a.o)/1E3);vB(f)}a.T=b;a.aa=c;a.B=!0}yB(a.g,d,e);a.D=b;a.A=c};
QH=function(a){return a.A>=a.g.policy.g};
RH=function(a){return Math.max(0,((0,g.F)()-a.K)/1E3)};
SH=function(a){var b=a.ba-a.A,b=1E3*(b*a.G.stall+b/a.G.byterate),c=(0,g.F)(),b=QH(a)?b+c:b+Math.max(c,a.o+1E3*a.G.delay);a.O=b};
UH=function(a,b,c,d,e){this.status=0;this.H=this.response=null;this.O=d;this.D=c;this.W=e;this.o=[];this.B=null;this.A=this.g=0;this.Ca=TH++;this.T=window.NaN;this.C=null;a=new window.Request(a,{method:"GET",credentials:"include"});(0,window.fetch)(a).then(yr((0,g.A)(this.RF,this)),yr((0,g.A)(this.xj,this)));(0,g.F)();this.L=this.K=this.G=!1;b()};
WH=function(a){a.L=!0;a.o.push(a.B.subarray(0,a.g));a.g=0;a.B=a.G?null:new window.Uint8Array(VH(a))};
XH=function(a,b){if(b.length+a.g>VH(a)){var c=new window.Uint8Array(a.g+b.length);c.set(a.B,0);a.B=c}a.B.set(b,a.g);a.g+=b.length};
YH=function(a){a.C.read().then(yr((0,g.A)(a.CC,a)),yr((0,g.A)(a.qE,a)));var b=(0,g.F)();a.T=b};
VH=function(a){a=a.ll()||0;return Math.max(16384,.125*a)};
ZH=function(a,b,c,d,e){this.status=0;this.response=null;this.o=this.A=!1;this.g=new window.XMLHttpRequest;this.g.open("GET",a);this.g.responseType="arraybuffer";this.g.withCredentials=!0;this.g.onreadystatechange=(0,g.A)(this.Nz,this);this.B=d;this.D=c;this.C=e;a=yr((0,g.A)(this.Lz,this));this.g.addEventListener("load",a,!1);this.g.addEventListener("error",a,!1);this.g.send();b();this.g.addEventListener("progress",yr((0,g.A)(this.Mz,this)),!1)};
$H=function(a,b,c,d){this.B=a;this.info=b;this.timing=c;this.X=d;this.state=1;this.g=null;this.T=this.cd=this.H=0;this.G=window.NaN;this.D=this.A=this.L=null;this.C=0;this.K=this.o=null;this.O=0;this.W=!1};
aI=function(a){return a.A?Jz(a.A.g):""};
cI=function(a){var b=OH(a.timing);b.shost=aI(a);b.rn=a.H.toString();a.C&&(b.rc=a.C.toString());b.itag=""+Kw(a.info.g[0].ia.info);b.ml=""+ +a.info.g[0].ia.yc();410!=a.C&&500!=a.C&&503!=a.C||(b.isPotentialFormatUnavaliable="true");(a=bI(a))&&(b.action=a);return b};
dI=function(a){var b=OH(a.timing);return{rn:a.H.toString(),rt:b.rt,pt:b.pt,stall:b.stall,elt:b.elbowTime,elb:b.elbowBytes}};
bI=function(a){if(7==a.state&&!eI(a)){var b=fI(a);if(b=0<b.o&&0==b.A)b=a.info.o,b=!(a.H>b.B&&0<b.A);return b?"fastfallback":10<=a.cd?"fallback":"retry"}return""};
fI=function(a){aI(a);return yz(a.X,aI(a))};
gI=function(a){if(a.B.C){if(1==a.state)return!0;a=fI(a);return 20>a.fe&&6>a.g}if(10>a.cd)a=!0;else{var b=a.info.o;a=!(a.H>b.B&&0<b.A)}return a};
hI=function(a,b){a.state=b;if(5<=a.state){var c=a.timing;c.B&&(c.B=!1)}a.L&&a.L(a)};
iI=function(a){return(0,g.iv)(a.info.g,function(a){return 3==a.type})};
eI=function(a){return a.B.C?!0:a.info.g[0].ia.yc()||QH(a.timing)?7==a.state&&("net.timeout"==a.D||"net.connect"==a.D&&204==a.C):!1};
jI=function(a){if(a.g){var b=a.g;a.g=null;b.abort()}a=a.timing;a.B&&(a.B=!1)};
lI=function(a){var b=a.g.ff("content-type"),c=a.g.ll();return(!kI(a)||!b||-1!=b.indexOf("text/plain"))&&(!c||2048>=c)};
kI=function(a){return a.g?a.g.Ut():!1};
mI=function(a){return 2<=a.state&&!!a.o&&!!a.o.A.length};
nI=function(a,b){if(b||kI(a)&&!lI(a)){if(!a.o){var c;kI(a)||(c=a.g.kl());a.o=new LH(a.info.g,c)}for(;a.g.Zl();){c=a.o;for(var d=a.g.Ot(),e=b&&!a.g.Zl(),f=0,k=0,l=g.ma(c.o),m=l.next();!m.done;m=l.next())if(m=m.value,m.range&&f+m.Pa<=c.g)f+=m.Pa;else{var n=c,q=m;if(1==q.type){n.C=!0;var r=!1}else 3==q.type||4==q.type?(q=n.C&&!n.D,n.D=!0,r=q):r=!1;var n=c,v=c.g-f,q=k,D=d,E=r||m.ia.dr(),z=D.length-q;m.range&&(z=Math.min(m.Pa-v,z));r=m.range?m.Ja+v+z==m.range.length:!!e;v=new Ty(m.type,m.ia,m.range,m.ya,
m.startTime,m.duration,m.Ja+v,z,r&&m.B);v.o=r;n.A.push(new qz(v,D.buffer,Sy(D.byteOffset+q,z),Sy(D.byteOffset,D.length),E));n=z;c.g+=n;k+=n;f+=m.Pa;if(k==d.length)break}}}};
oI=function(){this.g=this.o=!1};
pI=function(a,b){this.Ga=b;this.A=[];this.o=new xH(a,b);this.B=this.g=null;this.W=0;this.K=b.info.g;this.L=this.H=!1;this.G=new oI;this.T=0;this.D=b.rd();this.C=-1;this.O=0};
qI=function(a,b){a.A.push(b);a.g=g.eb(b.info.g)};
sI=function(a,b){for(;a.A.length&&6==a.A[0].state;){var c=a.A.shift();rI(a,c);var d=c.timing;a.W=(d.D-d.o)/1E3;a.H||(c=c.info,a.O=Math.max(a.O,Math.max(0,c.g[c.g.length-1].g-b)))}a.A.length&&mI(a.A[0])&&!Vy(a.A[0].info.g[0])&&rI(a,a.A[0])};
rI=function(a,b){if(mI(b)){b.W=!0;var c=b.o,d=c.A;c.A=[];c.B=g.eb(d).info;(0,g.G)(d,a.ba,a)}};
vI=function(a,b){a.Ga.yc();a.O=0;var c=tI(a,b);if(0<=c)return c;a.g=a.Ga.Se(b).g[0];uI(a)&&(a.B=null);a.T=0;return a.g.startTime};
yI=function(a,b){var c=a.o.g.length?zH(a.o).info:a.B;if(b&&c&&!c.o){for(var d=c.ya,c=[],e=g.ma(a.A),f=e.next();!f.done;f=e.next())f=f.value,(0,g.gl)(f.info.g,function(a){return a.ya==d})?c.push(f):wI(a,f);
a.A=c;a.g=a.A.length?g.eb(g.eb(a.A).info.g):null}else xI(a)};
zI=function(a){var b=0;(0,g.G)(a.A,function(a){var c=b;a=a.o&&a.o.length?MH(a.o):Zz(a.info);b=c+a},a);
return b+=EH(a.o)};
AI=function(a,b){var c=!!a.Ga.info.video&&!!a.B&&!a.B.o,d=1<=b&&c;DH(a.o,d);a.H=d;yI(a,2<=b&&c)};
BI=function(a){a.G.o||a.G.start();AI(a,0);uI(a)&&(a.B=null)};
uI=function(a){return!!a.B&&a.B.B};
CI=function(a){var b=[];a.B&&b.push(a.B);b=g.vb(b,FH(a.o));(0,g.G)(a.A,function(a){(0,g.G)(a.info.g,function(c){a.W&&(b=(0,g.fe)(b,function(a){return!(a.ia!=c.ia?0:a.range&&c.range?a.range.start+a.Ja>=c.range.start+c.Ja&&a.range.start+a.Ja+a.Pa<=c.range.start+c.Ja+c.Pa:a.ya==c.ya&&a.Ja>=c.Ja&&a.Ja+a.Pa<=c.Ja+c.Pa)}));
3!=c.type&&4!=c.type||b.push(c)})});
a.g&&!Uy(a.g,g.eb(b),a.g.ia.fd())&&b.push(a.g);return b};
DI=function(a){if(!a.g||!a.g.Pa)return!1;a=CI(a);if(!a.length)return!1;for(var b=1;b<a.length;b++){var c=a[b].A==a[b-1].A&&a[b].g==a[b-1].g&&a[b].ya==a[b-1].ya&&a[b].ia==a[b-1].ia&&a[b-1].Ja+a[b-1].Pa==a[b].Ja;if(!(1E-6>=Math.abs(a[b].A-a[b-1].g)||c))return!1}return!0};
tI=function(a,b){if(DI(a)){a:{var c=CI(a);c=g.ma(c);for(var d=c.next();!d.done;d=c.next())if(d=d.value,d.A<=b&&d.startTime+d.duration>=b){c=d;break a}c=null}if(c)return c.startTime}return window.NaN};
EI=function(a){return(0,g.gl)(a.A,function(a){return 4<=a.state})};
FI=function(a){return!(!a.g||!a.Ga.yc()||a.g.ia==a.Ga)};
GI=function(a){return FI(a)&&a.g.ia.info.g<a.Ga.info.g};
HI=function(a,b,c){return(a=zH(a.o)?zH(a.o).info:a.B)&&!a.B?a.g>b&&a.g<b+c:!1};
xI=function(a){(0,g.G)(a.A,function(a){wI(this,a)},a);
a.A=[];a.g=null};
wI=function(a,b){if(b.W){var c=a.o,d=b.info;c.O=!1;c.K&&(c.U("placeholderrollback",c.K),c.K=null);if(c.o){var e=window.NaN;(0,window.isNaN)(c.D)&&(e=d.g[0].range?d.g[0].A:qH(c.o).startTime);c.o.reset();c.T=c.X;(0,window.isNaN)(e)||(d=c.o,d.D=e,tH(d))}c.H=null}b.dispose()};
II=function(a){return!!a.g&&-1!=a.g.ya&&a.g.ya<a.Ga.index.te()};
JI=function(a){if(a.g){var b=zH(a.o);b&&3==b.info.type&&-1==a.g.ya&&(a.g.ya=b.info.ya)}};
KI=function(a,b){this.g=a;this.o=b;this.A=1};
LI=function(a,b,c,d){d/=a.A;var e=zB(a.g)+1/AB(a.g);var f=Math.max(.9*(d-3),xB(a.g)+a.g.policy.g*e);c=f/e*a.o.Vg/(b+c);c=Math.min(c,d);c=Math.max(a.o.Ug,Math.min(a.o.Tg,c));return Math.min(a.o.G,Math.max(65536,Math.ceil(c*b)))};
MI=function(a,b){var c=a.o.wf;if(a.o.sc)return b;var d=1E-9+xB(a.g)+c*zB(a.g),c=b*Math.min(1,c/(b*d));a.o.Ya&&(d=((qB(a.g.o,.98)||0)-a.o.ib)/(a.o.oi-a.o.ib),d=Math.max(0,Math.min(1,d)),c*=1-a.o.Ya*d);return c};
NI=function(a){return MI(a,AB(a.g))};
OI=function(a){return NI(a)/a.A};
PI=function(a,b,c,d){this.aa=a;this.A=b;this.G=c;this.L=d;this.o=this.T=this.D=null;this.H="i";this.W=-1;this.g=this.B=null;this.C=[];this.ba={};this.X=this.fa=0;this.ha=null;this.O=this.K=!1;this.da=0};
UI=function(a,b,c){"m"==c&&a.D.isLocked()&&!b.isLocked()&&(c="a");a.K=a.K||!1;if("m"==c&&b.isLocked())return a.H=c,QI(a,b),RI(a),SI(a),a.O|=a.o!=a.g,a.o=a.g,new hH(a.B,a.o,c);var d=Ww(a.D,b);if("m"==a.H&&a.D.isLocked()&&d)return null;"r"!=c||d||(a.W=-1);QI(a,b);SI(a);if("r"==c&&a.g==a.o){if(d)return null;a.o=a.g;return new hH(a.B,a.g,c)}a.H=c;TI(a);return null};
VI=function(a){return!!a.X&&(0,g.Ot)()-a.X<=1E3*a.A.Wa};
WI=function(a){return a.D.isLocked()};
TI=function(a){a.o&&a.g&&XI(a,a.o.info)<XI(a,a.g.info)&&(a.K|="r"==a.H,a.K=a.A.Qb?a.K|("v"==a.H&&a.g.info.video.width>a.o.info.video.width):a.K|a.g.info.video.width>1.6*a.o.info.video.width)};
YI=function(a){var b=a.H;a.H="a";a.W=(0,g.Ot)();a.K=!1;return new hH(a.T,a.o,b)};
QI=function(a,b){a.D=b;var c=a.L.videoInfos;if(!WI(a)&&(c=(0,g.fe)(c,function(a){return a.g>this.A.H?!1:this.A.C?4<this.G.g[a.id].C.g?!1:!0:!this.G.g[a.id].B},a),VI(a))){var c=(0,g.fe)(c,function(a){return a.id!=this.ha.id},a),d=(0,g.fe)(c,function(a){a=Kw(a);
return"140"==a||"134"==a||"243"==a});
d.length&&(c=d)}c.length||(c=a.L.videoInfos);d=(0,g.fe)(c,b.B,b);d.length||(d=[c[0]]);d.sort((0,g.A)(function(a,b){return XI(this,a)-XI(this,b)},a));
for(c=1;c<d.length;c++){var e=d[c-1],f=d[c];e.video.width>f.video.width?(g.sb(d,c),c--):XI(a,e)*a.A.g>XI(a,f)&&(g.sb(d,c-1),c--)}c=d[d.length-1];a.C=d;Ly(a.A,c)};
ZI=function(a,b){if(b)a.B=a.G.g[b];else{var c=g.jb(a.L.g,function(a){return!!a.Ub&&a.Ub.isDefault}),c=c||a.L.g[0];
a.B=a.G.g[c.id]}RI(a)};
RI=function(a){if(!a.B.info.Ub&&(a.B=a.G.g[a.L.g[0].id],1<a.L.g.length)){if(a.D.isLocked())var b=240>a.D.g;else{for(b=0;b+1<a.C.length&&"tiny"==a.C[b].video.quality;)b++;var c=OI(a.aa)/a.A.g;b=XI(a,a.B.info)+XI(a,a.C[b])>c}b&&(a.B=a.G.g[a.L.g[1].id])}};
SI=function(a){if(WI(a))a.g=a.G.g[a.C[a.C.length-1].id];else{for(var b=Math.min(a.fa,a.C.length-1),c=OI(a.aa),d=XI(a,a.B.info),e=c/a.A.A-d;0<b&&!(XI(a,a.C[b])<=e);b--);c=c/a.A.g-d;a.A.ri&&(e=a.aa,d=MI(e,BB(e.g))/e.A/a.A.g-d,c=Math.min(c,d));for(;b<a.C.length-1&&!(XI(a,a.C[b+1])>=c);b++);a.g=a.G.g[a.C[b].id];a.fa=b;TI(a)}};
$I=function(a){var b=a.A.A,c=OI(a.aa)/b-XI(a,a.B.info),b=g.kb(a.C,function(a){return XI(this,a)<c},a);
0>b&&(b=0);a.fa=b;a.g=a.G.g[a.C[b].id]};
XI=function(a,b){if(!a.A.aa)return b.g;if(!a.ba[b.id]){var c=a.G.g[b.id].index.Lp(a.da,a.A.aa),c=b.B&&a.o&&a.o.index.Pb()?c||b.B:c||b.g;a.ba[b.id]=c}return a.ba[b.id]};
aJ=function(){this.g=this.o=0;this.A=[]};
bJ=function(a,b){return(a[b]<<24)+(a[b+1]<<16)+(a[b+2]<<8)+a[b+3]};
cJ=function(a,b,c,d){this.o=a;this.D=b;this.C=d;this.B=c;this.g=0};
dJ=function(a,b){this.o=a;this.G=b;this.C=this.B=this.g=null;this.D=this.A=window.NaN};
fJ=function(a,b){var c=yH(b.o);if(!c)return-1;var d=c.A;if(!d||!d.B||!d.A)return-1;var e=b.A.length?b.A[0]:null;if(!(e&&3<=e.state&&7!=e.state&&kI(e))||0!=e.info.A||0>eJ(a,d,c.info))return-1;var f=a.o.Yg/(c.info.ia.info.video.fps||30);a.g=e;a.B=d;a.C=c.info;a.A=f;a.D=(0,g.F)()/1E3;return window.NaN};
eJ=function(a,b,c){b=(0,g.F)()/1E3-(a.G.o()||0)-b.A-a.o.ah;if(0>=b)return-1;var d=c.ia.index;if(!eA(d,c.ya,!0))return-1;var e=d.getDuration(c.ya);c=d.Id(c.ya);a=Math.min(c+b,c+e-a.o.Zg);return a<=c?-1:a};
gJ=function(){this.g=[];this.o=g.tx};
hJ=function(a,b){for(var c=[],d=g.ma(a.g),e=d.next();!e.done&&!(e=e.value,e.contains(b)&&c.push(e),e.start>b);e=d.next());return c};
jJ=function(a){return a.g.slice(iJ(a,0x7ffffffffffff),a.g.length)};
iJ=function(a,b){var c=Db(a.g,function(a){return b-a.start||1});
return 0>c?-(c+1):c};
kJ=function(a,b){for(var c=void 0,d=g.ma(a.g),e=d.next();!e.done;e=d.next())if(e=e.value,e.contains(b)&&(void 0==c||e.end<c)&&(c=e.end),e.start>b&&(void 0==c||e.start<c)){c=e.start;break}return c};
lJ=function(a,b,c,d){g.I.call(this);this.B=window.NaN;this.K=!1;this.H=null;this.L=this.O=this.C=!1;this.aa=a;this.ba=b;this.T=c;this.X=d;this.W=new g.O(this.A,250,this);g.J(this,this.W);this.D=new g.O(this.A,0,this);g.J(this,this.D);this.o=[];this.g=new gJ};
mJ=function(a,b){a.A();var c=a.g;if(1<b.length&&b.length>c.g.length)c.g=c.g.concat(b),c.g.sort(c.o);else for(var d=g.ma(b),e=d.next();!e.done;e=d.next()){var f=e.value;if(!c.g.length||0<c.o(f,c.g[c.g.length-1]))c.g.push(f);else{var e=c.g,k=g.Cb(e,f,c.o);0>k&&g.zb(e,-(k+1),0,f)}}a.B=window.NaN;a.A()};
nJ=function(a,b){var c=[];if(!b.length)return c;for(var d=0;d<b.length;d++){var e=b[d];e.active&&-1==a.o.indexOf(e)&&(a.o.push(e),c.push([1,e]))}return c};
oJ=function(a,b){var c=[];if(!b.length)return c;b.sort(g.tx);for(var d=0;d<b.length;d++){var e=b[d];a.o.splice(a.o.indexOf(e),1);c.push([2,e])}return c};
pJ=function(a,b,c,d,e){g.gt.call(this);this.O=a;this.A=b;this.D=c;this.Xa=e||null;this.g=this.B=null;this.L=new KI(a,b);this.o=null;this.G=new PI(this.L,b,this.D,d);this.ha=this.La=window.NaN;this.Ma=new g.O(this.Yc,void 0,this);this.C=this.Ua=window.NaN;this.T=!1;this.K=window.NaN;this.Wa=0;this.fa=this.H=!1;this.Ya={};this.da="";this.oa=this.wa=0;this.Va=b.pi?new aJ:null;this.Ka=new nB(5);this.Ea=!1;this.ib={};this.Fa="";this.za=window.NaN;this.X=!1;a=this.A;this.W=a.bc&&this.D.o?new dJ(a,this.Ka):
null};
rJ=function(a,b){b=b||a.g&&a.g.g&&a.g.g.startTime||a.C;var c=a.g,d=a.G;if(d.A.aa){var e=d.g&&d.g.index.Te(b)||0;d.da!=e&&(d.ba={},d.da=e,QI(d,d.D))}!WI(d)&&-1<d.W&&(0,g.Ot)()-d.W<1E3*d.A.ne||(d.X&&!VI(d)&&(d.X=0,QI(d,d.D)),RI(d),SI(d),d.O|=d.g!=d.o);d.g.index.Pb()||(d.da=-1);d=d.g;c.Ga!=d&&(c.Ga=d,d.o||qJ(a,c,!1));c=a.B;d=a.G.B;c.Ga!=d&&(c.Ga=d,d.o||qJ(a,c,!1))};
tJ=function(a){0==a.C&&(a.g.Ga.o||qJ(a,a.g,!0),a.B.Ga.o||qJ(a,a.B,!0));a.seek(a.C);sJ(a,"gv")};
g.uJ=function(a,b){var c=a.g.Ga.info.mimeType;b.g=b.A.addSourceBuffer(a.B.Ga.info.mimeType);b.O?b.o=b.A.addSourceBuffer(c):b.o=new fy;a.o=b;a.B.L=!1;a.g.L=!1;a.B.B=null;a.g.B=null;a.resume();Iy(b)&&(b.g.addEventListener("updateend",(0,g.A)(a.Yc,a),!1),b.o.addEventListener("updateend",(0,g.A)(a.Yc,a),!1),b.g.addEventListener("error",(0,g.A)(a.Ej,a,!0),!1),b.o.addEventListener("error",(0,g.A)(a.Ej,a,!1),!1));sJ(a,"msa");g.qE("msa",void 0,"video_to_ad");uE.measure&&uE.getEntriesByName("mark_vta").length&&
uE.measure("measure_vta_to_msa","mark_vta");a.la&&a.aa&&(c=g.y("yt.scheduler.instance.enablePriorityThreshold"))&&c(1);a.Yc();a.Ua=g.Er((0,g.A)(a.Yc,a),1E4)};
wJ=function(a){a.o&&a.o.g&&a.o.g.removeEventListener&&(a.o.g.removeEventListener("updateend",(0,g.A)(a.Yc,a),!1),a.o.o.removeEventListener("updateend",(0,g.A)(a.Yc,a),!1),a.o.g.removeEventListener("error",(0,g.A)(a.Ej,a,!0),!1),a.o.o.removeEventListener("error",(0,g.A)(a.Ej,a,!1),!1));a.o=null;a.H=!0;vJ(a)};
xJ=function(a){a.o&&Fy(a.o)&&wJ(a)};
yJ=function(a,b,c){if(!b.G.o||!c.remove)return!1;if(c.updating)return!0;if(!b.G.g&&c.buffered.length)return a=c.buffered.end(c.buffered.length-1),c.remove(0,a),b.G.g=!0;b.G.reset();a.U("seekelementrequired");return!1};
BJ=function(a,b,c){if(a.H&&(!a.A.ba||!DB(a.O)))return!1;if(a.D.o){if(0<b.A.length&&!a.A.la)return!1;if(b.D)return!(0,window.isNaN)(a.za)}if(!(b.g||a.D.o&&a.A.la&&b.D)){if(!b.Ga.yc())return b.Ga.o||qJ(a,b,!1),!1;vI(b,a.C)}var d=b.A.length+c.A.length;(EI(b)||EI(c)||a.D.isLive&&(!a.A.la||!b.A.length))&&--d;if(2<=d+1)return!1;d=b.g;if(!d)return!0;4==d.type&&d.ia.yc()&&(b.g=g.eb(d.ia.Sj(d)),d=b.g);!d.B&&!d.ia.Uf(d)||d.ia.info.audio&&4==d.type?a=!1:GI(b)&&!a.A.X?a=!0:(!(c=d.B||zI(b)+zI(c)>a.A.da||!!(c.g&&
!c.g.B&&c.g.g<d.g)&&(!a.D.o||c.g.g&&d.g))&&(c=3==d.type)&&(d=d.g,b=zJ(a,b,!0),!WI(a.G)&&0<a.A.T&&(c=((0,g.Ot)()-a.Wa)/1E3,b=Math.min(b,a.A.T+a.A.Xa*c)),b=a.C+b,a.A.La?(c=Math.min(b,AJ(a)+a.A.La),c!=b&&a.zg("mrl","ori."+b+";mod."+c,!0),a=c):a=b,c=d>a),a=c?!1:!0);return a};
CJ=function(a,b,c){if((!a.o||Ey(a.o)||Iy(a.o))&&!a.T&&a.G.K){var d=a.C;a=a.L;c=LI(a,b.Ga.info.g,c.Ga.info.g,0);var e=xB(a.g)+c*zB(a.g)+c/AB(a.g),d=d+Math.max(e,e+a.o.Ka-c/b.Ga.info.g);a:{if(b.A.length){if(b.A[0].info.g[0].startTime<=d)break a;xI(b)}a=b.o;for(c=a.g.length-1;0<=c;c--)a.g[c].info.startTime>d&&a.g.pop();b.A.length?b.g=g.eb(g.eb(b.A).info.g):b.o.g.length?b.g=zH(b.o).info:b.g=b.B;b.g&&d<b.g.startTime&&(b.T=0,b.g=b.Ga.Se(d,!0).g[0])}}};
FJ=function(a,b,c){BJ(a,b,c);var d=b.g;if(b.D)a.Ea=!0,d=b.Ga.Se(window.Infinity),d.A=a.za;else if(b.g.ia.yc()){!GI(b)||a.A.X||a.D.o||(CJ(a,b,c),b.g||vI(b,a.C));var d=b.g,e=d.g-a.C,f=!d.range||0==d.Pa&&0==d.Ja?0:d.range.length-(d.Ja+d.Pa);if(FI(b)){var k=a.A.za?Math.min(zJ(a,b,!0),b.O)*a.A.za:Math.min(a.A.wa,.5*zJ(a,b,!0));var l;if(l=a.A.oe)if(l=!!b.A.length)l=b.A[0].info,l=4==l.g[l.g.length-1].type;k=GI(b)||e<=k&&!l}else k=!1;k&&0==f&&(a.D.o?d.ia=b.Ga:(f=d.startTime+DJ,d.Pa&&(f+=d.duration),vI(b,
f),d=b.g));d.ia.fd()?(c=LI(a.L,d.ia.info.g,c.Ga.info.g,e),e=FI(b),c=d.ia.Tf(d,c),c.range&&1<c.g.length&&(e||a.A.C&&c.o.g?c=d.ia.Tf(d,c.g[0].Pa):(e=c.g[c.g.length-1],f=e.Pa/c.range.length,!e.o&&.4>f&&(c=d.ia.Tf(d,c.range.length-e.Pa)))),d=c):d=d.ia.Lh(d)}else d.ia.fd()?(c=LI(a.L,b.Ga.info.g,c.Ga.info.g,0),d=d.ia.Tf(d,c)):d=d.ia.Lh(d);qI(b,EJ(a,d))};
EJ=function(a,b){if(3==b.g[b.g.length-1].type){a:{var c=a.G;var d=b.g[0].ia;if(d.info.video){if(c.o!=d){c.o=d;c=YI(c);break a}}else c.T=d;c=null}c&&a.U("videoformatchange",c)}c=Zz(b);var d=a.O,e=a.L,f=Math.min(2.5,xB(e.g)),e=NI(e);c=new NH(d,c,c-f*e,a.A.ni&&a.Ea,Vy(b.g[0]));c=new $H(a.A,b,c,a.ib);d=(0,g.A)(a.AE,a);c.L=d;c.start(Math.max(0,b.g[0].A-a.C));b.g[0].ia.info.video&&(d=aI(c))&&(a.Fa=d.substr(0,d.indexOf(".")));return c};
GJ=function(a){if((0,window.isNaN)(a.La)){var b=(0,g.A)(a.Yc,a);a.La=g.Fr(b,0)}};
HJ=function(a){if((0,window.isNaN)(a.ha)){var b=(0,g.A)(function(){this.ha=window.NaN;this.Yc()},a);
a.ha=g.Fr(b,1E3)}};
IJ=function(a){if(a.W){var b=!!a.W.g,c=a.W,d=a.g;c.g?!(c.g.ka()||5<=c.g.state)&&(0,g.F)()/1E3-c.D<c.o.bh&&RH(c.g.timing)<c.A?c=window.NaN:(d=eJ(c,c.B,c.C),c.g=null,c.B=null,c.C=null,c.A=window.NaN,c.D=window.NaN,c=d):c=fJ(c,d);(b||a.W.g)&&a.zg("ssr","ca."+c);if(!c)return!0;0<c&&a.U("seekplayerrequired",c,!0)}if(a.D.B)return!1;if(b=a.T){if(b=0<a.A.ha&&a.g&&a.B){var b=a.L,e=a.g,f=a.B,c=a.A.ha;if(0==e.A.length&&0==f.A.length)b=!0;else{for(var d=0,k=FH(e.o).concat(FH(f.o)),k=g.ma(k),l=k.next();!l.done;l=
k.next())d+=l.value.Pa;e=e.K+f.K;d/=e;b=d>c?!0:e*(c-d)/OI(b)<c}b=!b}b||(b=a.g,b=0<b.A.length&&1==b.o.g.length&&yH(b.o).info.C<b.W)}if(b)return!0;if(!a.fa||!a.A.L||10>a.C||360<a.g.Ga.info.video.o)return!1;b=HI(a.g,a.C,a.A.L)||HI(a.B,a.C,a.A.L);return(0<a.g.A.length||0<a.B.A.length||BJ(a,a.g,a.B)||BJ(a,a.B,a.g))&&b};
KJ=function(a,b,c,d){if(c.updating)return!0;var e=yH(b.o);if(!e)return!1;!b.B||b.B.o||Wy(b.B,e.info)||(b.B=null,Ey(a.o)&&c.abort(),c.g=null);var f=a.D.isLive&&vz(e);a.A.uf&&a.D.B&&0==e.info.Ja&&1==e.info.ia.info.o&&(a.D.o?null!=b.B&&b.B.ia==e.info.ia:null!=c.g&&c.g==e.info.ia.g)&&(Xx(rz(e),1836019574),Xx(rz(e),1718909296),e.Jd=!1);if(!a.D.B||0==e.info.Ja)if(f||a.D.o||e.Jd)c.g=null;else if(e.info.ia.yc(),f=e.info.ia.g,c.g==f?f=!1:(JJ(a,c,f),c.g=f,a.U("initsegment",c.g),f=c.updating),f)return!0;f=zJ(a,
b,!1);f=a.C+f;null!==d&&0<=d&&(f=Math.min(f,d));d=f;if(b.H)d=yH(b.o).range;else if(f=b.o,!f.g.length||f.g[0].info.A>=d)d=null;else{var k;for(k=1;k<f.g.length;k++){var l=f.g[k].g!=f.g[k-1].g;if(f.g[k].info.A>d||l||f.B.Va)break}k--;d=new Qy(f.g[0].Jd?0:f.g[0].range.start,f.g[k].range.end)}if(!d)return!1;f=new window.Uint8Array(e.g,d.start,d.length);if(a.Va&&e.info.ia.info.video&&1==e.info.ia.info.o&&(k=a.Va,0==e.info.Ja&&(k.o=0,k.g=0,k.A.length=0),!((0,window.isNaN)(k.o)||8>f.length))){for(var l=new window.DataView(f.buffer,
f.byteOffset),m=!1;!m;)if(k.o==k.g)a:{var n,m=k,q=f.length;if(m.o+7>=q){for(n=m.o;n<q;n++)m.A.push(l.getUint8(n));m=!0}else{if(0<m.A.length){for(n=0;8>m.A.length;n++)m.A.push(l.getUint8(n));var r=bJ(m.A,0);n=bJ(m.A,4);m.A.length=0}else r=l.getUint32(m.g),n=l.getUint32(m.g+4);if(1836019558==n||1836019574==n||1718909296==n||1936286840==n)m.o+=r,m.g=m.o;else if(1835295092==n)m.o+=r,m.g+=8;else{m.o=window.NaN;m=!0;break a}m=m.g>=q}}else a:if(m=k,q=f.length,m.g+5>=q){for(n=m.g;n<q;n++)m.A.push(l.getUint8(n));
m=!0}else{if(0<m.A.length){for(n=0;6>m.A.length;n++)m.A.push(l.getUint8(n));n=bJ(m.A,0);12==n&&6==m.A[4]&&45==m.A[5]&&l.setUint8(m.g+5,63);m.g+=n+4;m.A.length=0}for(;m.g<m.o&&m.g+5<q;){n=l.getUint32(m.g);if(0>=n){m.o=window.NaN;m=!0;break a}12==n&&6==l.getUint8(m.g+4)&&45==l.getUint8(m.g+5)&&l.setUint8(m.g+5,63);m.g+=n+4}m=m.g>=q}(0,window.isNaN)(k.o)||(k.o-=f.length,k.g-=f.length)}k=!1;3!=e.info.type||1!=e.info.ia.info.o&&2!=e.info.ia.info.o||(k=1==e.info.ia.info.o&&a.A.Gk&&!b.L&&0==e.info.Ja&&0<
e.info.startTime)&&tz(e,0);f=JJ(a,c,f);if(0!=f){if(2!=f)if(e.info.ia.info.video?(l=a.A,l.B=Math.floor(.8*l.B),l.K=Math.floor(.8*l.K)):(l=a.A,l.D=Math.floor(.8*l.D),l.fa=Math.floor(.8*l.fa)),l.o=Math.floor(.8*l.o),1==f&&c.remove&&!c.updating){f=!1;l=c.buffered.length;for(m=0;!f&&m<l;m++)c.buffered.start(m)>e.info.g&&(c.remove(c.buffered.start(m),c.buffered.end(l-1)),f=!0);f||c.remove(0,e.info.startTime-5)}else BI(b);f=!1}else f=!0;if(!f)return!1;b.L=!0;if(k)tz(e,e.info.startTime),c.abort(),c.g=null;
else{f=b.o;for(k=[];f.g.length&&(f.g[0].range.end>d.end?(m=sz(f.g[0],d.end-f.g[0].range.start+1),l=m[0],f.g[0]=m[1]):l=f.g.shift(),k.push(l),l.range.end!=d.end););k.length&&(0,g.G)(k,b.aa,b)}e.Jd&&(c.g=e.info.ia.g,a.U("initsegment",c.g));return!0};
LJ=function(a,b,c){var d=a.D,e=!1,f;for(f in d.g)if(!!d.g[f].info.video==c){var k=d.g[f].index;eA(k,b.ya)||(k.ar(b),e=!0)}e&&a.A.oa&&a.X&&(a.X=!1,a.U("seekplayerrequired",b.startTime+.1,!0))};
JJ=function(a,b,c){try{Iy(a.o)?b.appendBuffer(c):b.append(c)}catch(d){if(11==d.code)return MJ(a,!1,"html5.invalidstate",{updating:""+ +b.updating,mrs:a.o.A.readyState}),2;if(22!=d.code&&0!=d.message.indexOf("Not enough storage"))return g.xr(d),4;a.A.Ec&&a.zg("quex","br."+ly(b.buffered).replace(/,/g,"_"));return 1}return Fy(a.o)?3:0};
NJ=function(a,b){b.o.subscribe("error",a.ED,a);b.o.subscribe("timestamprewrite",a.ID,a);var c=(0,g.A)(a.FD,a,b);b.o.subscribe("placeholderinfo",c,void 0);c=(0,g.A)(a.GD,a,b);b.o.subscribe("placeholderrollback",c,void 0);c=(0,g.A)(a.HD,a,b);b.o.subscribe("segmentinfo",c,void 0);b==a.g&&b.o.subscribe("cuepoint",a.DD,a)};
zJ=function(a,b,c){if(a.A.ba&&a.H)return a.A.ba;var d=b.Ga.info.audio?a.A.D:a.A.B;!a.A.X&&WI(a.G)&&(d=Math.max(d,b.Ga.info.audio?a.A.fa:a.A.K));c&&(d+=a.A.da);c=WI(a.G)?b.g?b.g.ia.info.g:b.Ga.info.g:b.K;d/=c;0<a.A.Fa&&a.o&&Ey(a.o)&&(b=b.Ga.info.video?a.o.o:a.o.g)&&!b.updating&&(c=gy(b.buffered,a.C),0<=c&&(b=a.C-b.buffered.start(c),d+=Math.max(0,Math.min(b-a.A.Fa,a.A.Gc))));0<a.A.o&&(d=Math.min(d,a.A.o));a.A.kb&&!WI(a.G)&&(b=a.G,b=XI(b,g.eb(b.C))+XI(b,b.L.g[0]),c=a.A.kb*(b/NI(a.L)),c<d&&25>c&&a.zg("bwcapped",
"1",!0),c=Math.max(c,25,2.5*a.A.G/b),d=Math.min(d,c));return d};
AJ=function(a){if(!a.Xa)return window.Infinity;for(var b=(0,g.fe)(a.Xa.g.g,function(a){return"ad"==a.namespace}),b=g.ma(b),c=b.next();!c.done;c=b.next())if(c=c.value,c.start/1E3>a.C)return c.start/1E3;
return window.Infinity};
OJ=function(a,b,c){var d=(0,g.A)(a.U,a,"error");a=a.A.Ma?(0,g.A)(a.zg,a,"pathprobe"):null;(new cJ(b,c,a,d)).send()};
PJ=function(a,b,c,d){if(b.Ga.yc())if(d){var e=hy(d.buffered,c),f=window.NaN,k=b.B;k&&(f=hy(d.buffered,k.ia.index.Id(k.ya)));if(e==f&&DI(b))return c;d=tI(b,c);if(0<=d)return d;AI(b,b.Ga.fd()?1:2);b.Ga.info.video&&b.B&&!b.B.o&&!CH(b.o)&&b.Ga.fd()&&(d=b.B,b.o.g.length&&(d=zH(b.o).info),d=b.g||d,d=d.ia.Tf(d,d.range.length-(d.Pa+d.Ja)),qI(b,EJ(a,d)));if((0,window.isNaN)(e))return vI(b,c);vI(b,e+DJ)}else vI(b,c);else b.Ga.o||qJ(a,b,!1),0!=c&&xI(b);return c};
qJ=function(a,b,c){c=b.Ga.Zi(a.A,c);(0,g.G)(c,function(a){if("f"!=a.g[0].ia.info.A){var c=EJ(this,a);!Vy(a.g[a.g.length-1])&&qI(b,c)}},a);
b.Ga.o=!0};
MJ=function(a,b,c,d){a.ka()||(a.U("error",new g.nD(c,b,d)),b&&a.dispose())};
QJ=function(a){var b={lct:a.C.toFixed(3),lsk:a.T,lmf:WI(a.G),lbw:AB(a.O).toFixed(3),lhd:xB(a.O).toFixed(3),lst:(1E9*zB(a.O)).toFixed(3),laa:a.B.B?Zy(a.B.B):"",lva:a.g.B?Zy(a.g.B):"",lar:a.B.g?Zy(a.B.g):"",lvr:a.g.g?Zy(a.g.g):"",lvh:a.Fa};a.o&&!Fy(a.o)&&(b.lab=ly(a.o.g.buffered),b.lvb=ly(a.o.o.buffered));return b};
sJ=function(a,b,c){a.Ya[b]=c?window.performance.timing.navigationStart+c:(0,g.Ot)()};
vJ=function(a){a.B&&AI(a.B,0);a.g&&AI(a.g,0)};
RJ=function(a,b,c){if(!b||!c)return!0;c=-1!=gy(c.buffered,a);var d=zH(b.o)?zH(b.o).info.g>=a:!1,e=b.A.length?b.A[0]:null;a=(b=e?e.info.g[0]:b.g)&&b.startTime<=a;return!!(c||d||a)};
SJ=function(a,b,c){this.url=a;this.interval=b;this.g=c};
TJ=function(a,b){this.message=a;this.number=b;this.g=new op(5E3,2E4,.2)};
UJ=function(a,b,c,d){this.statusCode=a;this.statusMessage=b;this.headers=c;this.message=d};
VJ=function(a){var b=String.fromCharCode.apply(String,a.subarray(0,16384)),c=b.indexOf("\r\n\r\n");if(-1==c)return null;var d=b.indexOf("\r\n"),e=b.slice(0,d).match(/^GLS\/1.\d ([0-9]{1,3}) (\w+)$/);if(null==e)return null;var f=e[1];(0,window.isFinite)(f)&&(f=String(f));f=g.u(f)?/^\s*-?0x/i.test(f)?(0,window.parseInt)(f,16):(0,window.parseInt)(f,10):window.NaN;e=e[2];b=Ix(b.slice(d+2));return null==b?null:new UJ(f,e,b,a.subarray(c+4))};
WJ=function(a,b,c,d,e){g.I.call(this);this.C=a;this.O=b;this.H=c;this.g=d;this.o=e;this.sessionId="";this.A=this.L=this.K=this.D=this.G=null;this.B=new g.dt(this);g.J(this,this.B);this.g?(this.B.N(this.g,"message",this.Sz),this.B.N(this.g,"keystatuseschange",this.Tz)):this.o&&(et(this.B,this.o,["mskeymessage","webkitkeymessage"],this.Cs),et(this.B,this.o,["mskeyerror","webkitkeyerror"],this.Bs),et(this.B,this.o,["mskeyadded","webkitkeyadded"],this.As))};
XJ=function(a){return!(!a.g||!a.g.keyStatuses)};
YJ=function(a,b){this.g=a;this.contentType=(void 0===b?"":b)||null;this.o=this.C=window.NaN;this.A=!1;this.B=[]};
ZJ=function(a,b){g.I.call(this);this.o=a;this.g=b;this.G={};this.B=null;this.C=new g.dt(this);g.J(this,this.C);this.A=this.D=null};
aK=function(a){if(a.g.A)return a.g.A.createMediaKeys().then(yr((0,g.A)(function(a){this.D=a;this.o.setMediaKeys(a)},a)));
$A(a.g)?a.A=new (ZA())(a.g.o):bB(a.g)?(a.A=new (ZA())(a.g.o),a.o.webkitSetMediaKeys(a.A)):$J(a);return null};
$J=function(a){et(a.C,a.o,["keymessage","webkitkeymessage"],a.L);et(a.C,a.o,["keyerror","webkitkeyerror"],a.K);et(a.C,a.o,["keyadded","webkitkeyadded"],a.H)};
bK=function(a,b){var c=b.g;if(a.g.A){var d=a.D.createSession(),c=d.generateRequest(b.contentType,c),d=new WJ(null,null,null,d,null);c.then(null,yr((0,g.A)(d.es,d,"t.g")));return d}if($A(a.g)){for(var d=new window.Uint8Array(270),e=0;135>e;e++)d[2*e]='<PlayReadyCDMData type="LicenseAcquisition"><LicenseAcquisition version="1.0" Proactive="true"></LicenseAcquisition></PlayReadyCDMData>'.charCodeAt(e);c=a.A.createSession("video/mp4",c,d);return new WJ(null,null,null,null,c)}if(bB(a.g)){for(var d=c.subarray(4),
d=String.fromCharCode.apply(null,new window.Uint16Array(d.buffer,d.byteOffset,d.byteLength/2)).match(/ek=([0-9a-f]+)/)[1],e="",f=0;f<d.length;f+=2)e+=String.fromCharCode((0,window.parseInt)(d.substr(f,2),16));for(var f=a.g.fairPlayCert,d=new window.Uint8Array(new window.ArrayBuffer(f.length)),k=0;k<f.length;k++)d[k]=f.charCodeAt(k);for(var f=new window.ArrayBuffer(2*e.length),k=new window.Uint16Array(f),l=0;l<e.length;l++)k[l]=e.charCodeAt(l);e=new window.Uint8Array(f);f=0;l=new window.ArrayBuffer(c.byteLength+
4+e.byteLength+4+d.byteLength);k=new window.Uint8Array(l);l=new window.DataView(l);k.set(c);f+=c.byteLength;l.setUint32(f,e.length,!0);f+=4;k.set(e,f);f+=e.length;l.setUint32(f,d.byteLength,!0);k.set(d,f+4);c=a.A.createSession("video/mp4",k);return new WJ(null,null,null,null,c)}a.o.generateKeyRequest?a.o.generateKeyRequest(a.g.o,c):a.o.webkitGenerateKeyRequest(a.g.o,c);a.B=new WJ(a.o,a.g,c,null,null);return a.B};
cK=function(a,b){var c=a.G[b.sessionId];!c&&a.B&&(c=a.B,a.B=null,c.sessionId=b.sessionId,a.G[b.sessionId]=c);return c};
eK=function(a,b,c,d,e,f,k){f=void 0===f?!1:f;k=void 0===k?!1:k;g.I.call(this);this.B=a;this.o=d;this.o.subscribe("oauthtoken",this.fr,this);this.G={session_id:e};this.X=!!f;this.ba=!!k;this.W=0;a=this.B.C;bB(this.B)&&(a=c.g.subarray(4),a=String.fromCharCode.apply(null,new window.Uint16Array(a.buffer,a.byteOffset,a.byteLength/2)).replace("skd://","https://"));dK(this,a);this.D=this.L=!1;g.qE("drm_gk_s");try{var l=bK(b,c)}catch(m){b="t.g",m instanceof window.DOMException&&(b+=";c."+m.code),this.o.U("licenseerror",
"drm.unavailable",!0,b,"YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK"),l=null}if(this.A=l)b=this.A,l=this.Pz,a=this.Oz,d=this.Rz,b.G=this.Qz,b.D=l,b.K=a,b.L=d,b.A=this,g.J(this,this.A);this.aa=c.B;this.H=[];this.g={};this.O=window.NaN;this.C=c.C||window.NaN};
dK=function(a,b){if(fK.test(b)){for(var c in a.G){var d=c,e=a.G[c];b=xg(g.Bg(b,d),d,e)}a.K=b}else gK(a,"drm.net",!0,"t.x")};
gK=function(a,b,c,d,e){a.ka()||a.o.U("licenseerror",b,c,d,e);c&&a.dispose()};
hK=function(a){if(!a)return{};var b={};(0,g.G)(a.split(";"),function(a){a=a.split(",");2==a.length&&(b[a[1]]={type:a[0],status:"unknown"})});
return b};
iK=function(a){var b={requestedKeyIds:a.aa,cryptoPeriodIndex:a.C};a.A&&(b.keyStatuses=a.g);return b};
jK=function(a){if(!XJ(a.A))return a.H.join(",");var b=[],c;for(c in a.g)b.push.apply(b,[c,a.g[c].type,a.g[c].status]);return b.join(",")};
kK=function(){this.keys=[];this.values=[]};
mK=function(a,b,c,d,e){e=void 0===e?"":e;g.gt.call(this);a&&(a.addKey||a.webkitAddKey)||ZA()||eB(c);this.G=c;this.L=a;this.g=b;this.subscribe("newlicense",this.YD,this);this.subscribe("newsession",this.ZD,this);this.subscribe("sessionready",this.ME,this);this.subscribe("keystatuseschange",this.Uz,this);this.ha=e||g.GC();this.aa=null;this.A=new kK;this.B=this.D=null;this.o=[];this.H="fairplay"==this.g.g?Zw:lK;this.T=new ZJ(a,b);g.J(this,this.T);this.C=null;$A(b)&&(this.C=new ZJ(a,b),g.J(this,this.C));
this.da=2;this.O=new g.dt(this);g.J(this,this.O);this.W=!1;this.X=null;this.K=!1;a=this.L;this.g.A?this.O.N(a,"encrypted",this.bD):et(this.O,a,$A(this.g)?["msneedkey"]:["needkey","webkitneedkey"],this.VD);(a=aK(this.T))?a.then(yr((0,g.A)(this.BD,this)),yr((0,g.A)(this.pC,this))):this.K=!0;this.C&&aK(this.C);this.fa=d};
nK=function(a,b){a.aa=b;a.U("oauthtoken",b)};
pK=function(a,b,c){a.ka()||$A(a.g)==c||a.W&&a.fa||(a.W=!0,a.o.push(b),1<a.o.length||a.K&&oK(a))};
oK=function(a){for(;a.o.length;){var b=a.o[0];if(g.Ib(a.D,b.g))a.o.shift();else{if(a.A.get(b.g))if("fairplay"==a.g.g)a.A.remove(b.g);else{a.o.shift();continue}if("widevine"==a.g.g){a:{var c=b.g;try{for(var d=0,e=new window.DataView(c.buffer);d<e.byteLength-8;){var f=e.getUint32(d);if(1>=f)break;if(1886614376==e.getUint32(d+4)){var k=32;if(0<e.getUint8(d+8))var l=e.getUint32(d+28),k=k+(16*l+4);var m=e.getUint32(d+k-4);try{for(var n,q=new Lc(c.subarray(d+k,d+k+m)),r=new Sq,k=q;Mc(k)&&4!=k.o;)switch(k.A){case 1:var v=
k.g;b:{for(var D,E,z=v,R=0,V=0;4>V;V++)if(E=z.o[z.g++],R|=(E&127)<<7*V,128>E){z.G=R>>>0;z.D=0;break b}E=z.o[z.g++];R|=(E&127)<<28;D=0|(E&127)>>4;if(128>E)z.G=R>>>0,z.D=D>>>0;else{for(V=0;5>V;V++)if(E=z.o[z.g++],D|=(E&127)<<7*V+3,128>E){z.G=R>>>0;z.D=D>>>0;break b}z.C=!0}}var xa=v.G,ra=v.D;if(z=ra&2147483648)xa=~xa+1>>>0,ra=~ra>>>0,0==xa&&(ra=ra+1>>>0);R=4294967296*ra+xa;var Y=z?-R:R;Uc(r,1,Y);break;case 2:z=Y=Pc(k);Sc(r,2).push(z);break;case 3:Y=Oc(k);Uc(r,3,Y);break;case 4:Y=Pc(k);Uc(r,4,Y);break;
case 5:Y=Oc(k);Uc(r,5,Y);break;case 6:Y=Oc(k);Uc(r,6,Y);break;case 7:Y=Kc(k.g);Uc(r,7,Y);break;case 8:Y=Pc(k);Uc(r,8,Y);break;case 9:Y=Kc(k.g);Uc(r,9,Y);break;case 10:Y=Kc(k.g);Uc(r,10,Y);break;default:Nc(k)}n=r;if(null!=n){var gb=n;break a}}catch(fc){}}d+=f}gb=null}catch(fc){gb=null}}if(null!=gb)for(c=Sc(gb,7),null!=c&&(b.C=c),c=Sc(gb,10),null!=c&&0<c&&(b.o=c),c=Sc(gb,2),c=!c.length||c[0]instanceof window.Uint8Array?c:(0,g.H)(c,Tc),c=g.ma(c),d=c.next();!d.done;d=c.next())b.B.push(g.Ac(d.value,!0).replace(/[\.]{1,2}$/,
""));a:{if(!(a.G.g("disable_license_delay")||"widevine"!=a.g.g||b.A||(0,window.isNaN)(b.C)))for(c=g.ma(a.A.values),d=c.next();!d.done;d=c.next())if(1>=Math.abs(d.value.C-b.C)){c=!0;break a}c=!1}if(c){qK(a,b);a.o.shift();continue}}break}}a.o.length&&(b=a.o[0],a.A.get(b.g),gb=new eK(a.g,a.T,b,a,a.ha,a.G.g("html5_use_drm_retry"),a.G.g("html5_enable_ms_playready_hd")),gb.fr(a.aa),"playready"==a.g.g&&a.G.g("playready_on_borg")&&(g.ic(gb.G,{prob:"1"}),dK(gb,gb.K)),a.A.set(b.g,gb))};
qK=function(a,b){a.B&&a.B.dispose();a.D=b.g;a.B=new g.O(function(){a.D=null;a.B=null;b.A=!0;a.o.push(b);1<a.o.length||oK(a)},rK(b.o));
a.B.start()};
rK=function(a){return 1E3*Math.max(0,Math.random()*(((0,window.isNaN)(a)?120:a)-30))};
sK=function(a){var b={};this.A=(b.c1a=(0,g.A)(this.C,this),b.c3a=(0,g.A)(this.D,this),b.c6a=(0,g.A)(this.B,this),b);(this.g=a)&&this.g.dh?this.o=g.Hr(this.g.dh):this.o=[]};
tK=function(a,b){this.V=a;this.g=b};
uK=function(a,b){var c=$w($w(a.V.ky,b.ai),b.fi);"auto"!=ex()||(c=a.V.experiments.g("html5_restore_performance_cap")?$w(c,new Vw(0,gx(),!1)):$w(c,a.V.wf));return c};
vK=function(a,b){var c=ex();if("auto"!=c)var d=Xw("auto",c,!1);else if(g.My(a.V)&&Ny(a.V.O,mC))d=Zw;else{var e,c=!!b.Ta.g;SC(a.V)&&(e=window.screen&&window.screen.width?new g.Cd(window.screen.width,window.screen.height):null);e||(e=a.V.ah?a.V.ah.clone():a.g.Na());(PC||bi||c)&&e.scale(g.hD());c=b.Ta.videoInfos;if(c.length){var f=.85,k=3==c[0].video.projectionType;2!=c[0].video.projectionType||ZB?k&&!ZB&&(f*=.25):f*=.5;for(k=0;k<c.length&&!(d=c[k].video,null===e||d.width*f<e.width&&d.height*f<e.height);k++);
d=Xw("auto",d.quality,!1)}else d=Zw;e=d.g;fs()&&(e=Math.max(e,g.Fw.hd1080));(Zr("armv7")||Zr("android"))&&!g.My(a.V)&&Mw(b.Ta.videoInfos[0])&&(e=Math.min(e,g.Fw.large));e=Math.max(e,g.Fw.medium);a.V.experiments.o("html5_default_quality_cap")&&(e=Math.min(e,a.V.experiments.o("html5_default_quality_cap")));d.g!=e&&(d=new Vw(d.o,e,d.A))}return d};
wK=function(){g.I.call(this);this.A={};this.g={};this.o=new g.O(this.ZF,500,this);g.J(this,this.o)};
xK=function(a,b){return a.g[b]?a.g[b].g.ub():[]};
yK=function(a){this.A=a;this.g=new iH(100);this.o=window.NaN};
zK=function(){var a=Js("visibilityState",window.document);return!(!a||"visible"==a)};
BK=function(a){var b=AK();b&&window.document.addEventListener(b,a,!1)};
AK=function(){if(window.document.visibilityState)var a="visibilitychange";else{if(!window.document[Is+"VisibilityState"])return"";a=Is+"visibilitychange"}return a};
CK=function(a,b,c,d,e,f){g.gt.call(this);this.Wa=new SF;this.H=c;this.wb=d;this.Ie=f;c=(0,g.A)(function(b,c){b!="crn_"+CK.g||!a.experiments.g("use_legacy_ended_cue_range_behavior")&&g.T(this.A,32)||DK(this);e(b,c)},this);
this.D=new lJ((0,g.A)(this.getCurrentTime,this),(0,g.A)(this.Cu,this),(0,g.A)(this.fH,this),c);g.J(this,this.D);this.wa=window.NaN;this.X=this.G=null;this.V=a;this.za=new tK(a,this.wb);this.Ka=!1;this.K=this.B=null;this.fa=[];this.ha=new oI;this.T=new oI;this.oe=this.Fc=this.Je=this.Ea=!1;this.Xa=window.NaN;this.A=new g.UF;this.Ma=[];this.pe=b;this.la=null;this.W=window.NaN;this.oa=new g.dt;g.J(this,this.oa);this.g=new g.WE;this.o=null;this.da=window.NaN;this.C=null;this.ne=this.La=!1;this.Ua=window.NaN;
this.bc=this.sc=this.Ya=this.Va=!1;this.ib=this.Dc=window.NaN;this.uf=a.experiments.g("html5_force_play_on_suspend_event");this.vf=a.experiments.g("html5_force_play_on_suspend_event_limited");this.L=null;this.wf=this.V.experiments.g("html5_playing_event_buffer_underrun");this.aa=new wK;g.J(this,this.aa);this.aa.zn("bufferhealth",(0,g.A)(this.Ip,this));this.aa.zn("bandwidth",(0,g.A)(this.Sw,this));this.aa.zn("networkactivity",(0,g.A)(this.Vw,this),!0);this.aa.start();this.Qd=!1;this.Bb=!0;this.Ec=
this.Qb=!1;this.Fa=1;this.O=null;this.Ge=(0,g.A)(this.oF,this);BK(this.Ge);this.Ke=new g.O(this.gn,0,this);g.J(this,this.Ke);this.He=this.Gc=0};
EK=function(a){g.Xt()?g.Zt(a.Ua):g.Dr(a.Ua)};
MK=function(a,b,c,d){a.fa.length=0;a.ha.reset();a.T.reset();a.wa=window.NaN;a.W=window.NaN;a.La=!1;a.Qb=!1;a.o&&a.o.ze();FK(a);GK(a);HK(a);EK(a);a.aa.clear();a.Ke.stop();a.L=null;a.O=null;g.ue(a.g);if(2==a.pe||LC.test(a.V.W))b.uq=!0;var e=vC(b.xb,a.V.A,a.V.gb);e&&(b.adFormat=e);a.V.ha&&(b.autonavState=a.g.autonavState);a.Bb=0!=d;a.g=b;a.g.subscribe("dataupdated",a.lF,a);a.g.subscribe("dataloaded",a.Zo,a);a.g.subscribe("dataloaderror",a.Sg,a);a.g.subscribe("onStatusFail",a.kF,a);b.endSeconds&&b.endSeconds>
b.startSeconds&&IK(a,b.endSeconds);JK(a,c);a.Va=!1;KK(a,"newdata");LK(a,new g.UF)};
JK=function(a,b){GK(a);if(!a.g.Mg){var c=new hG(a.g,a.V,b,(0,g.A)(a.getDuration,a),(0,g.A)(a.getCurrentTime,a),(0,g.A)(a.Ww,a),(0,g.A)(a.wb.Na,a.wb),(0,g.A)(a.Sn,a),(0,g.A)(a.Cu,a),(0,g.A)(a.sl,a),a.Ie,(0,g.A)(a.hx,a),(0,g.A)(function(){this.H.o("qoes")},a));
a.C=new BG(c)}};
GK=function(a){if(a.C){var b=a.C;if(!b.ka()&&b.B){b.D="paused";var c=FG(b);c.wa=!0;c.send();c=b.o;"PL"==c.A&&(c.A="N");var d=g.HF(c.g);g.mG(c,d,"vps",[c.A]);c.C(d);g.Dr(b.C);b.dispose()}g.ue(a.C);a.C=null}};
OK=function(a){if(a.g.sd())return!0;g.NK(a,"api.invalidparam",void 0,"invalidVideodata.1");return!1};
QK=function(a,b){a.Ea=!!b;if(OK(a)&&!a.ha.o){a.ha.start();if(a.C){var c=a.C.o;c.g.g.experiments.g("html5_qoe_unstarted_in_initialization")?g.HF(c.g):g.mG(c,g.HF(c.g),"vps",["N"]);c.g.videoData.Mj?xG(c,"prefetch"):(c.o.user_intent=["0"],c.H=!0);c.g.videoData.Zf&&(oG(c,"reload",c.g.videoData.jn),oG(c,"reloadcount",c.g.videoData.Zf.toString()));c.g.videoData.yh&&xG(c,"monitor");c.g.videoData.xa&&xG(c,"live");c.g.videoData.Ve&&xG(c,"rqs");c.g.videoData.lf&&oG(c,"ctrl",c.g.videoData.lf,!0);c.g.videoData.De&&
oG(c,"ytp",c.g.videoData.De,!0);if(c.g.videoData.kt){var d=c.g.videoData.kt.replace(/,/g,".");oG(c,"ytrexp",d,!0)}if(!c.g.g.experiments.g("html5_disable_gpu_reporting")){var e=c.g.videoData,d=c.g.g.experiments.g("enable_white_noise"),f=e.Of()||e.We()||e.xe()||e.Xd(),e=0==e.clientPlaybackNonce.indexOf("gp");(d||f||e)&&(d=PK())&&(c.o.gpu=[d])}c.ba=g.Er((0,g.A)(c.C,c),1E4)}a.Zo()}};
TK=function(a){a.o&&qy(a.o);QK(a);OK(a)&&!g.T(a.A,128)&&(a.T.o||(a.T.start(),a.V.experiments.g("html5_suspended_state")?LK(a,XF(XF(a.A,8),1)):(LK(a,XF(a.A,8)),a.g.Pb()||(LK(a,XF(a.A,1)),RK(a,"waiting_videodata")))),SK(a))};
SK=function(a){if(!a.T.g&&a.ha.g&&!g.T(a.A,128)&&!a.fa.length){if(!a.D.C){var b=a.D;b.C=!0;b.A()}if(!UK(a)){a.B&&(b=a.B,a.Je=!!b.aa&&!!b.la);a.T.g||(a.T.g=!0);a.g.xa&&(VK(a,window.Infinity,!0),WK(a,!0),zK()&&(a.ne=!0));if(a.C&&(b=a.C,b.g.videoData.enableCardio&&b.g.videoData.enableCardioBeforePlayback&&(b.Uj("connected"),KG(b)),b.g.videoData.xa)){var b=b.o,c=b.g.videoData.sa;b.g.videoData.rd()&&xG(b,"manifestless");c&&UA(c)&&xG(b,"live-segment-"+UA(c).toFixed(1))}a.U("playbackready",a);JE("pbr",a.H.g)||
(a.H.o("pbr"),g.qE("pbr",void 0,"video_to_ad"))}}};
DK=function(a,b){XK(a);LK(a,0==b?new g.UF:new g.UF(14))};
IK=function(a,b){a.X&&(a.D.G(a.X),a.X=null);a.X=new g.rx(1E3*b,0x7ffffffffffff);a.X.namespace=CK.g;mJ(a.D,[a.X])};
$K=function(a,b,c,d){a.g.Ba=c;a.g.uc=d||c;if(a.C){var e=YK(a),e=new FF(a.g,c,b,e?Kw(e):"");d&&"i"==b&&ZK(a,b,d);d=a.C.o;c=g.HF(d.g);g.mG(d,c,"vfs",[e.g.id,e.o,d.ha,"b"==e.reason?"a":e.reason]);d.ha=e.g.id;e=d.g.T();if(0<e.width&&0<e.height){var e=[Math.round(e.width),Math.round(e.height)],f=g.hD();1<f&&e.push(f);g.mG(d,c,"view",e)}g.mG(d,c,"vps",[d.A]);d.C(c);a.V.experiments.g("html5_report_performance_cap")&&"i"==b&&(d=gx())&&a.Rc("perfCap",""+d)}a.Gc=0;a.U("internalvideoformatchange",a.g,"m"==b)};
YK=function(a){if(!a.g.Ta)return null;var b=$w($w(vK(a.za,a.g),aL(a)),bL(a));return g.jb(a.g.Ta.videoInfos,(0,g.A)(b.B,b))};
ZK=function(a,b,c){a.g.uc=c;if(a.C){var d=a.C.o;c=new FF(a.g,c,b,"");var e=g.HF(d.g);c.g.id!=d.O&&(g.mG(d,e,"afs",[c.g.id,d.O,c.reason]),d.O=c.g.id)}"i"!=b&&a.U("internalaudioformatchange",a.g,"m"==b)};
g.NK=function(a,b,c,d){var e,f;Ub(cL,c)?e=c:c?f=c:e="YTP_ERROR_GENERIC_WITHOUT_LINK";b={errorCode:b,errorDetail:d,message:f||g.Q(e),messageKey:e};LK(a,WF(a.A,128,b));EK(a);HK(a);dL(a)};
eL=function(a,b){a.fa=a.fa.filter(function(a){return b!=a});
a.T.o&&SK(a)};
UK=function(a){var b;(b=!!a.fa.length)||(a=a.D.g.g[0],b=!!a&&-0x8000000000000>=a.start);return b};
hL=function(a,b){a.o&&fL(a);a.V.experiments.g("html5_suspended_state")&&!a.A.isError()&&LK(a,YF(a.A,512));a.o=b;a.o.g.loop=a.Ec;a.o.de(a.Fa);gL(a)};
fL=function(a){a.g&&a.V.experiments.g("new_ended_replay")&&(a.g.startSeconds=a.getCurrentTime());a.K&&(a.K.dispose(),a.K=null);a.B&&(GJ(a.B),a.B.H=!0);a.o&&(a.V.experiments.g("html5_suspended_state")&&a.T.o&&!a.A.isError()&&!g.T(a.A,2)?LK(a,XF(a.A,512)):a.C&&a.ha.o&&g.T(a.A,64)&&!a.g.se&&iL(a),FK(a),g.ft(a.oa),a.o.ze(),a.o=null)};
oL=function(a){if(!g.T(a.A,128))if(a.Qd)a.Qd=!1,jL(a);else if(TK(a),g.T(a.A,64)&&LK(a,XF(a.A,8)),a.T.g&&a.o)if(a.g.Ta){a.V.experiments.g("new_ended_replay")&&g.T(a.A,2)&&VK(a,0,!0);if(a.g.xa){var b=kL(a),c=g.AF(a.g)&&g.T(a.A,4);if(b||c)!c&&a.V.experiments.g("html5_live_pin_to_tail")?VK(a,a.Nb(),!0):VK(a,window.Infinity,!0);lL(a)?WK(a,!0):a.isPeggedToLive()&&VK(a,window.Infinity,!0)}mL(a)?nL(a):a.o.jc()}else b=a.g.xa&&!g.SB()?"html5.unsupportedlive":"fmt.noneavailable",g.NK(a,b,"YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK",
"selectableFormats.1")};
qL=function(a){FK(a);HK(a);pL(a)};
rL=function(a){if(a.g.Ta){var b=aL(a)||Zw;a=(0,g.fe)(a.g.Ta.videoInfos,(0,g.A)(b.B,b));for(var b=[],c={},d=0;d<a.length;d++){var e=a[d].video;c[e.quality]||(b.push(e),c[e.quality]=!0)}a=b}else a=[];return a};
sL=function(a){return $w($w($w(uK(a.za,a.g),vK(a.za,a.g)),aL(a)),bL(a))};
aL=function(a){return a.G?a.G.H:gF(a.g)&&a.g.Ta.g&&CA(a.g.sa)?lK:Zw};
tL=function(a,b,c){if(!a.ka()&&!g.T(a.A,128)&&(c&&(a.g.fi=c),gF(a.g))){"m"==b&&c&&Yw(c)&&(b="a");c=sL(a);if(a.g.Ta.g){if(a.B&&"i"!=b){var d=a.B;if(!d.ka()&&d.g){(c=UI(d.G,c,b))&&d.U("videoformatchange",c);rJ(d);if(WI(d.G)&&"m"==b&&d.G.O||"b"==b)BI(d.g),BI(d.B);GI(d.g)&&CJ(d,d.g,d.B);GJ(d)}}}else{a:if(d=a.g.Xh,c.g){for(var e=0;e<d.length;e++){var f=d[e].jd,k=g.Fw[f.video.quality];if((!c.A||"auto"!=f.video.quality)&&k<=c.g){c=d[e];break a}}c=d[d.length-1]}else c=d[0];a.g.Xf=c;$K(a,b,a.g.Xf.jd)}a.A.Ab()&&
oL(a)}};
g.uL=function(a){WA(a.g.sa,{cpn:a.g.clientPlaybackNonce,c:a.V.B.c,cver:a.V.B.cver});var b=Py(a.V,a.g);a.V.schedule.policy.A=a.g.rd()?.5:0;a.B=new pJ(a.V.schedule,b,a.g.sa,a.g.Ta,a.D);a.B.subscribe("initsegment",a.mD,a);a.B.subscribe("videoformatchange",a.vD,a);a.B.subscribe("audioformatchange",a.uD,a);a.B.subscribe("error",a.Sg,a);a.B.subscribe("ctmp",a.Rc,a);a.B.subscribe("seekelementrequired",a.cG,a);a.B.subscribe("seekplayerrequired",(0,g.A)(function(a,b){VK(this,a,!0,void 0,b)},a));
var b=g.ob(a.fa,"spacecast")||a.Ea,c=a.Sn(),c=c.Ub.isDefault?void 0:c;a.B.initialize(a.g.startSeconds,sL(a),b,c);a.g.probeUrl&&(a.B.da=a.g.probeUrl);if(a.fa.length||a.Ea)a.B.H=!0;a.Ea&&iL(a)};
bL=function(a){var b=a.V.experiments.o("html5_background_quality_cap");a=a.V.experiments.o("html5_background_cap_idle_secs");return!b||"auto"!=ex()||g.Rt()/1E3<a?Zw:zK()?new Vw(0,b,!1):Zw};
iL=function(a){a.V.experiments.g("html5_suspended_state")||JG(a.C,new g.eG(new g.UF(4),a.A))};
HK=function(a){a.B&&(a.B.dispose(),a.B=null);a.K&&(a.K.dispose(),a.K=null)};
pL=function(a){if(a.K)return a.K.H;a.B?a.B.seek(a.getCurrentTime()):g.uL(a);try{a.K=new Cy(a.o,a.V.D)}catch(d){return d.message="window.URL object overwritten by external code",window.setTimeout(function(){throw d;},0),g.NK(a,"html5.missingapi","YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK","updateMs.1"),null}var b=(0,g.A)(a.CD,a),c=(0,g.A)(function(a){g.NK(this,"fmt.unplayable",void 0,"msi.1;ename."+a.name)},a);
a.V.experiments.g("html5_sourceopen_promise")?Dy(a.K).then(b).then(void 0,c):(a.K.B=b,a.K.D=c);return a.K.H};
vL=function(a){return 403==a.details.rc?(a=a.errorCode,"net.badstatus"==a||"manifest.net.retryexhausted"==a):!1};
jL=function(a){!a.g.se&&a.g.Zf||a.Ya||(a.Ya=!0,a.U("signatureexpired"))};
wL=function(a){return"net.retryexhausted"==a.errorCode||"net.badstatus"==a.errorCode&&!!a.details.isPotentialFormatUnavaliable};
XK=function(a,b){if(g.T(a.A,64)&&!b)if(g.T(a.A,8))LK(a,ZF(a.A));else return;a.o&&(g.T(a.A,128)||(b?LK(a,XF(a.A,256)):LK(a,ZF(a.A))),a.o&&a.o.pause())};
xL=function(a){var b=a.V.experiments.g("disable_html5_stopvideo_cancel_requests");XK(a,b);a.B&&(a.B.H=!0,b||vJ(a.B))};
dL=function(a,b){a.o&&(a.o.pause(),FK(a),HK(a),a.g&&(a.g.startSeconds=a.getCurrentTime()),a.W=window.NaN,a.o.ze(),g.T(a.A,128)||(b?LK(a,ZF(a.A)):LK(a,WF(a.A))),a.V.L.remove(a.g.videoId))};
VK=function(a,b,c,d,e){if(!a.o||!a.T.g||!a.o.gc()&&a.V.experiments.g("new_ended_replay"))a.g.startSeconds=b||0;else{if(a.O&&b&&!(0,window.isFinite)(b)&&a.B){if(a.V.experiments.g("html5_use_adaptive_live_readahead")&&a.g.isLowLatencyLiveStream){var f=a.O;if(f.o.length){var k=f.g;1<Math.min.apply(null,f.o)?f.g=Math.max(f.g-1,1):f.g=Math.min(f.g+1,8);if(k=k!=f.g)f.o=[],f.A=0;f=k}else f=!1;f&&a.C&&(f=nH(a.O),uG(a.C.o,f))}a.B.za=Math.max(0,a.O.g-1)}if(b&&!(0,window.isFinite)(b)&&a.g.se&&a.g.rd()&&a.B){var l=
a.B;vJ(l);f=Math.max(GH(l.g.o),GH(l.B.o));k=l.g;k.D=!0;k.C=-1;vI(k,window.Infinity);k.o.D=f;k=l.B;k.D=!0;k.C=-1;vI(k,window.Infinity);k.o.D=f;var k=l.D,m;for(m in k.g)wx(k.g[m].index,window.Infinity);l.A.oa&&(l.X=!0);GJ(l);l=f+.1}l||(l=g.td(b||0,a.Nb(),yL(a,!1,e)));b=a.g.xa&&!g.T(a.A,4)&&lL(a,l);WK(a,b);a.g.startSeconds=l;a.W=l;b=a.Wa;b.g=l;b.o=!0;c?a.Bu():(g.T(a.A,32)||(LK(a,XF(a.A,32)),g.T(a.A,8)&&XK(a,!0),a.U("beginseeking",a)),d&&(a.la||(a.la=new g.O(a.Bu,d,a)),a.la.start()),zL(a,!0));a.X&&l>
a.g.endSeconds&&(a.D.G(a.X),a.X=null);l<yL(a,!1)&&LK(a,YF(a.A,2));a.U("seekto",a,l)}};
AL=function(a){return a.g.xa&&a.g.sa?VA(a.g.sa,a.getCurrentTime()):window.NaN};
BL=function(a){if(!a.o)return 0;if(g.AF(a.g))return 1;if(BF(a.g)){if(a.isPeggedToLive())return 1;var b=a.o,c=ry(b),b=(0<iy(c)&&b.getDuration()?c.end(c.length-1):0)-a.Nb();a=yL(a,!0)-a.Nb();return Math.max(0,Math.min(1,b/a))}return uy(a.o)};
CL=function(a,b){var c={};if(b){a.C?g.Ea(c,AG(DG(a.C,"playback"))):a.g&&(c.cpn=a.g.clientPlaybackNonce);a.o&&g.Ea(c,vy(a.o));a.B&&g.Ea(c,QJ(a.B));if(a.G){for(var d=a.G,e=d.g,e={systemInfo:{flavor:e.g,keySystem:e.o},sessions:[]},d=g.ma(d.A.values),f=d.next();!f.done;f=d.next())e.sessions.push(iK(f.value));c.drm=e}c.state=a.A.o.toString(16);g.T(a.A,128)&&(c.debug_error=a.A.g);UK(a)&&(c.preroll="1");a.g.we&&(c.ismb=a.g.we);a.g.isLowLatencyLiveStream&&(c.lowlatency="1");a.g.xa&&(a.g.sa&&UA(a.g.sa)&&(c.segduration=
UA(a.g.sa)),a.L&&(e=a.L.C,c.lat=e.g[e.o]||0));c.relative_loudness=a.g.relativeLoudness.toFixed(3);if(e=YK(a))c.optimal_format=e.video.qualityLabel;c.user_qual=ex()}c.debug_videoId=a.g.videoId;return c};
KK=function(a,b){a.U("internalvideodatachange",b||"dataupdated",a,a.g)};
gL=function(a){(0,g.G)("loadstart loadeddata loadedmetadata play playing pause ended suspend progress seeking seeked timeupdate durationchange ratechange error waiting abort resize".split(" "),function(a){this.oa.N(this.o,a,this.hH,this)},a);
a.V.Ug&&(a.oa.N(a.o,"webkitplaybacktargetavailabilitychanged",a.eC,a),a.oa.N(a.o,"webkitcurrentplaybacktargetiswirelesschanged",a.fC,a))};
DL=function(a){var b=a.getCurrentTime(),c=a.g;!JE("pbs",a.H.g)&&uE.measure&&uE.getEntriesByName&&(uE.getEntriesByName("mark_nr")[0]?IE("mark_nr"):IE());c.videoId&&a.H.info("docid",c.videoId);c.eventId&&a.H.info("ei",c.eventId);c.clientPlaybackNonce&&a.H.info("cpn",c.clientPlaybackNonce);0<c.startSeconds&&a.H.info("start",c.startSeconds.toString());a.o&&a.o.g.paused&&a.H.info("paused",1);c.Ba?a.H.info("fmt",Kw(c.Ba)):a.H.info("fmt","-1");c.Mj&&a.H.info("yt_pre",a.Je?"2":"1");a.V.ha&&a.H.info("yt_fs",
"1");a.H.info("cmt",b.toFixed(3));if(a.B){b=a.B;window&&window.performance&&window.performance.getEntriesByName&&(c=window.performance.getEntriesByName(b.la),c.length&&(c=c[0],sJ(b,"vri",c.fetchStart),sJ(b,"vdns",c.domainLookupEnd),sJ(b,"vreq",c.requestStart),sJ(b,"fvb",c.responseStart),sJ(b,"vrc",c.responseEnd)),c=window.performance.getEntriesByName(b.aa),c.length&&(c=c[0],sJ(b,"ari",c.fetchStart),sJ(b,"adns",c.domainLookupEnd),sJ(b,"areq",c.requestStart),sJ(b,"avb",c.responseStart),sJ(b,"arc",c.responseEnd)));
var b=b.Ya,d;for(d in b)a.H.o(d,b[d])}};
zL=function(a,b){if(a.o&&a.g){var c=a.getCurrentTime();if(kL(a)&&a.A.Ab())a.V.experiments.g("html5_live_pin_to_tail")?VK(a,a.Nb(),!0):VK(a,window.Infinity,!0);else{if(a.isPeggedToLive()){if(!lL(a,c)){if(a.A.Ab()&&(a.g.yh||g.AF(a.g))){VK(a,window.Infinity,!0);return}a.g.xa&&WK(a,!1)}if(a.V.experiments.g("html5_use_adaptive_live_readahead")&&a.O){var d=a.O,e=a.Ip();d.A++;3>d.A||(d.o.push(e),50<d.o.length&&d.o.shift())}}else a.g.xa&&lL(a,c)&&WK(a,!0);if(a.B&&(d=a.B,d.o)){d.C!=c&&d.resume();if(d.T&&!Fy(d.o)){var e=
d.C<=c&&c<d.C+10,f=0<=gy(d.o.o.buffered,d.C+DJ);e&&f&&(d.T=!1)}d.T||(d.C=c);HJ(d)}5<c&&(a.g.startSeconds=c);(d=g.Xt())?g.Zt(a.Ua):g.Dr(a.Ua);!g.cG(a.A)&&a.o.g.paused||g.T(a.A,128)||(e=(0,g.A)(a.wx,a),a.Ua=0==(a.o.g.played||jy()).length?d?g.Yt(e,1,100):g.Fr(e,100):d?g.Yt(e,1,500):g.Fr(e,500));a.g.Td=c;!b&&a.A.Ab()&&a.C&&(c=a.C,c.A.update(),c.g.videoData.Pb()&&c.g.videoData.Ud&&!c.T&&KF(c.A)>=c.g.videoData.Ud&&(c.B&&c.g.videoData.Ud&&(d=DG(c,"delayplay"),d.Fa=!0,d.send(),c.T=!0),IG(c)),d=c.ba,d.A||
!d.g.Je||d.g.Qb||!d.videoData.lengthSeconds?d=!1:(e=Math.min(.8*d.videoData.lengthSeconds,180),d=KF(d.B)>=e),d&&c.ba.send());a.U("progresssync",a,b)}}};
LK=function(a,b){if(!g.$F(a.A,b)){var c=new g.eG(b,a.A);a.A=b;var d=!a.Ma.length;a.Ma.push(c);if(0<fG(c,1)&&!g.T(c.g,16)&&g.T(a.A,8)&&!g.T(a.A,64)&&a.B){a.B.fa=!0;a.g.Ve&&a.o&&a.Rc("rbinfo","rs."+a.o.g.readyState+";lact."+g.Rt());var e=a.V.experiments.o("html5_nnr_downgrade_count");if(e&&a.o&&5<=sy(a.o)){a.Gc++;var f=a.g.Ba.video.o;a.Gc==e&&360<f&&(e=a.za,e.V.wf=new Vw(0,f-1,!1),e.V.experiments.g("html5_report_performance_cap")&&g.ju("yt-player-performance-cap",f-1,2592E3),tL(a,"b"),a.V.experiments.g("html5_report_performance_cap")&&
a.Rc("perfDowngrade",""+f))}}0>fG(c,8)&&(g.Dr(a.da),a.da=window.NaN,WK(a,!1));0<fG(c,8)&&!a.g.se&&(0,window.isNaN)(a.da)&&(a.da=g.Fr((0,g.A)(a.ws,a),15E3));0<fG(c,32)&&WK(a,!1);g.T(c.state,2)&&BF(a.g)&&(f=a.getCurrentTime(),a.g.lengthSeconds!=f&&(a.g.lengthSeconds=f,KK(a)),zL(a,!0));0<fG(c,2)&&a.mn();a.V.experiments.g("html5_suspend_manifest_on_pause")&&a.g.sa&&a.g.xa&&(0>fG(c,8)?(f=a.g.sa,f.A&&f.A.stop()):0<fG(c,8)&&a.g.sa.resume());0<fG(c,1)&&(a.ib=g.Fr((0,g.A)(a.XF,a),5E3));a.C&&JG(a.C,c);if(d)try{for(d=
0;d<a.Ma.length;d++){var c=a.Ma[d],k=a.D,f=c;if(k.C&&!k.K&&(k.A(),g.T(f.g,16))){var f=k,l=kJ(f.g,Math.max(f.B-2E3,0));null!=l&&0x7ffffffffffff>l&&f.D.start()}a.U("statechange",c)}}finally{a.Ma.length=0}}};
EL=function(a){g.T(a.A,2)||g.T(a.A,32)||(a.W=window.NaN)};
WK=function(a,b){a.g.xa&&a.Ka!=b&&(a.Ka=b)};
nL=function(a){a.V.WB?g.Fr((0,g.A)(function(){this.o.jc()},a),0):a.o.jc()};
mL=function(a){if(!a.o||!a.g.Ta)return!1;if(a.g.Ta.g){var b=pL(a);a.B.resume()}else HK(a),b=a.g.Xf.g();var c=a.o.o;return c&&null!=b&&b.g==c.g?!1:(a.H.o("vta"),g.qE("vta",void 0,"video_to_ad"),qy(a.o,b),FL(a),a.K&&$t(4),g.Dr(a.da),!a.g.se&&aG(a.A)&&(a.da=g.Fr((0,g.A)(a.ws,a),15E3)),!0)};
FL=function(a){if(g.pF(a.g)&&a.o){var b=a.g.ae;if(b){if(a.G)if("fairplay"==b.g)FK(a);else return;var c=a.o.na();a.G=new mK(c,b,a.V.experiments,"widevine"==b.g&&!a.g.xa&&!a.g.Vl,a.g.drmSessionId);a.G.subscribe("newsession",a.XD,a);a.G.subscribe("licenseerror",a.pD,a);a.G.subscribe("qualitychange",a.qD,a);a.G.subscribe("heartbeatparams",a.gH,a);a.G.subscribe("keystatuseschange",(0,g.A)(function(a){this.Rc("keystatuses",jK(a))},a));
nK(a.G,a.g.oauthToken)}else g.NK(a,"fmt.unplayable","YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK","drm.1")}};
FK=function(a){a.G&&(a.G.dispose(),a.G=null)};
yL=function(a,b,c){if(!a.o)return 0;if(!a.g.xa)return a.g.qh();if(b&&(a.isPeggedToLive()||g.AF(a.g)))return a.getCurrentTime();if(a.g.Ta&&a.g.Ta.g){b=a.Nb();var d=a.g.qh();a.O&&!c&&(d-=nH(a.O));return Math.max(d,b)||0}a=a.o.g.seekable||jy();return(1>a.length?window.NaN:a.end(a.length-1))||0};
GL=function(a,b){a.Fa=b;a.o&&a.o.de(b)};
lL=function(a,b){void 0==b&&(b=a.getCurrentTime());var c=b,d=yL(a,!1);if(a.g.sa){var e=a.V.experiments.o("html5_allowable_liveness_drift_chunks")||2;0<e&&!a.Ka&&e--;var f=UA(a.g.sa);e=(0,window.isNaN)(f)?e:e*f}else e=window.NaN;return c>=d-e};
kL=function(a){return a.getCurrentTime()<a.Nb()-15};
RK=function(a,b){a.V.experiments.g("html5_log_rebuffer_reason")&&a.Rc("bufreason","r."+b+";lact."+g.Rt())};
HL=function(a,b){LG.call(this,a,b)};
g.IL=function(a){return a.app.A};
g.JL=function(a){a=g.IL(a).K;return!!a&&a.gr()};
KL=function(a){var b=g.IL(a);a=g.W(a);var c=b.K;return c&&c.hr()?!a.experiments.g("mweb_autonav")||c.isAvailable:g.zF(b.R.ca(),"ypc_module")};
g.LL=function(a,b){3==a.Ha()?a.U("mdxautoplaycancel"):a.U("autonavcancel",b)};
g.W=function(a){return a.app.V};
g.OL=function(a){var b=a.app;a=a.playerType;return 3==ML(b)?g.NL(b.A).G:g.X(b,a).A};
g.PL=function(a){return a.app.G};
QL=function(a){var b=g.NL(g.IL(a));return a.app.X&&!a.isFullscreen()||3==a.Ha()&&b.hasNext()&&b.Yd()||!!a.ce()};
g.RL=function(a){if(Ks())if(a.isFullscreen())Ms(a.getRootNode());else{a=a.getRootNode();var b=Hs(["requestFullscreen","webkitRequestFullscreen","mozRequestFullScreen","msRequestFullscreen"],a);b&&b.call(a)}else a.va("onFullscreenToggled",a.isFullscreen())};
g.SL=function(a){var b={};a=rL(g.X(a.app));a=g.ma(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b[c.quality]=c;return b};
g.TL=function(a){return(a=g.X(a.app))?g.ax(uK(a.za,a.g)):"unknown"};
UL=function(a){a=(a=g.X(a.app))?(a=YK(a))?a.video.o:0:0;return a};
g.VL=function(a){return(a=g.IL(a).B)?a.ir():{}};
g.XL=function(a,b){g.W(a).experiments.g("ui_logging")&&g.WL(a,"controlclicked",{controlClicked:b})};
g.WL=function(a,b,c,d){var e=g.X(a.app);c.event=b;a.isFullscreen()&&(c.fs=1);c.ux=1;e.logEvent(c,d)};
g.YL=function(a){a=g.IL(a).o;return!!a&&a.ki()};
g.ZL=function(a){a=g.IL(a).o;return!!a&&a.Du()};
$L=function(a){a=g.X(a.app);return!!a&&a.bc};
g.bM=function(a,b,c){aM(a.app,b,c||a.playerType)};
g.dM=function(a,b,c){var d=a.app;a=c||a.playerType;if(c=g.X(d,a))c.D.G.apply(c.D,b),a&&ML(d)!=a||cM(d,"cuerangesremoved",b)};
g.eM=function(a,b){var c=a.app,d=a.playerType,e=g.X(c,d);if(e){for(var e=e.D,f=[],k=e.g.g,l=k.length-1;0<=l;l--){var m=k[l];if(m.namespace==b){var n=e.o.indexOf(m);0<=n&&e.o.splice(n,1);var q=e.g,n=q.g,q=g.Cb(n,m,q.o);0<=q&&g.sb(n,q);f.push(m)}}e.A();d&&ML(c)!=d||cM(c,"cuerangesremoved",f)}};
fM=function(a,b){var c=a.app,d=a.playerType;d&&ML(c)!=d||cM(c,"cuerangemarkersupdated",b)};
g.gM=function(a,b){var c=g.X(a.app,a.playerType);c&&eL(c,b)};
g.hM=function(a){a=a.ca().Ba;return!!a&&!Ow(a)&&"application/x-mpegURL"!=a.mimeType};
g.iM=function(a){a=a.ca();return!!(a.adaptiveFormats||a.hlsFormats||a.hd)};
g.jM=function(a,b,c){a=g.PL(a).element;var d=Db(a.children,function(a){a=(0,window.parseInt)(a.getAttribute("data-layer"),10);return c-a||1});
0>d&&(d=-(d+1));ce(a,b,d);b.setAttribute("data-layer",c)};
g.kM=function(a){var b=g.W(a);if(!b.oe)return!1;var c=a.ca();if(!c||3==a.Ha())return!1;b=c.xa&&(!b.experiments.g("allow_live_autoplay")||c.isLiveDefaultBroadcast);return!c.ypcPreview&&!b&&!g.ob(c.ad,"ypc")&&!a.ce()};
mM=function(a,b,c){if(g.W(a).fa){a=a.app.da;g.rb(a.A,b);var d=String(a.H++);b.element.setAttribute("data-visual-id",d);g.lM(a,"onLogClientVeCreated",{id:d,ve_type:c});g.te(b,(0,g.A)(a.G,a,b))}};
g.nM=function(a,b){g.W(a).fa&&a.app.da.click(b)};
g.oM=function(a,b,c){g.W(a).fa&&(a=a.app.da,b=b.element.getAttribute("data-visual-id"),c?g.rb(a.g,b):g.tb(a.g,b),c&&!g.ob(a.o,b)&&(g.lM(a,"onLogVesShown",{ids:[b]}),g.rb(a.o,b)))};
qM=function(){a:{try{var a=window.top.location.href}catch(c){a=2;break a}a=null!=a?a==window.document.location.href?0:1:2}a={dt:pM,flash:di||"0",frm:a};a.u_tz=-(new Date).getTimezoneOffset();try{var b=K.history.length}catch(c){b=0}a.u_his=b;a.u_java=!!K.navigator&&"unknown"!==typeof K.navigator.javaEnabled&&!!K.navigator.javaEnabled&&K.navigator.javaEnabled();K.screen&&(a.u_h=K.screen.height,a.u_w=K.screen.width,a.u_ah=K.screen.availHeight,a.u_aw=K.screen.availWidth,a.u_cd=K.screen.colorDepth);K.navigator&&
K.navigator.plugins&&(a.u_nplug=K.navigator.plugins.length);K.navigator&&K.navigator.mimeTypes&&(a.u_nmime=K.navigator.mimeTypes.length);return a};
rM=function(a){return a.A?"NO_BID":"ERR_BID"};
sM=function(){var a=null;Cs().then(function(b){return a=b},function(b){return a=rM(b)});
return a};
tM=function(){var a=Wf();return If(g.Kf(Gf([Cs(),a]),rM),function(){return a.cancel()})};
uM=function(a){this.g=a;this.o=1};
wM=function(a,b,c){var d=a.g.ca(1),e={AD_BLOCK:a.o++,CA_TYPE:vM?"flash":"image",CPN:d.clientPlaybackNonce,LACT:g.Rt(),VIS:a.g.Ih()},f=qM();Object.keys(f).forEach(function(a){e[a.toUpperCase()]=f[a].toString()});
null!=c&&(e.BISCOTTI_ID=c);a=g.on(b,e).split("?");if(2!=a.length)return Df(Error("Invalid AdBreakInfo URL"));b=g.ma(a);a=b.next().value;b=b.next().value;return ns(a,{format:"RAW",method:"POST",qb:g.Hr(b),timeout:2E3,withCredentials:!0})};
xM=function(a){this.X=a||{};this.adFormat=null};
yM=function(a,b){return a.X[b]?a.X[b]:[]};
zM=function(a,b,c,d){g.rx.call(this,a,b,{id:c,priority:2,visible:!0});this.o=d||!1};
AM=function(a){a=a.impressionUrls;var b={};null!=a&&(b.impression=a);xM.call(this,b)};
BM=function(a){xM.call(this);this.g=a};
CM=function(a,b){this.g=a;this.o=b.length;this.adBreakLengthSeconds=wd(b,function(a,b){return a+b},0);
this.adBreakRemainingLengthSeconds=wd(b,function(b,d,e){return b+(e>a?d:0)},0)};
DM=function(a){this.R=a;this.g={}};
EM=function(a,b){return wd(b,function(a,b){if(!b.mimeType||!b.maxBitrate||!b.uri||1E3<b.maxBitrate)return a;b.mimeType in this.g||(this.g[b.mimeType]=this.R.zm(b.mimeType));return this.g[b.mimeType]?a?b.delivery!=a.delivery?"STREAMING"==b.delivery?b:a:a.maxBitrate>b.maxBitrate?a:b:b:a},null,a)};
FM=function(a,b){var c;if(c=a.pings){var d={};d.impression=c.impressionPings||[];d.error=c.errorPings||[];d.mute=c.mutePings||[];d.unmute=c.unmutePings||[];d.pause=c.pausePings||[];d.rewind=c.rewindPings||[];d.resume=c.resumePings||[];d.skip=c.skipPings||[];d.close=c.closePings||[];d.progress=c.progressPings||[];d.clickthrough=c.clickthroughPings||[];d.fullscreen=c.fullscreenPings||[];d.active_view_viewable=c.activeViewViewablePings||[];d.active_view_measurable=c.activeViewMeasurablePings||[];d.active_view_fully_viewable_audible_half_duration=
c.activeViewFullyViewableAudibleHalfDurationPings||[];d.end_fullscreen=c.endFullscreenPings||[];d.channel_clickthrough=c.channelClickthroughPings||[];d.abandon=c.abandonPings||[];d.start=c.startPings||[];d.first_quartile=c.firstQuartilePings||[];d.midpoint=c.secondQuartilePings||[];d.third_quartile=c.thirdQuartilePings||[];d.complete=c.completePings||[];c=d}else c={};xM.call(this,c);this.K=new CM(0,[]);this.L=this.D=this.B=null;this.G=!1;this.ba=b;this.H=[];this.g={};this.o=a;this.T=this.C=null;this.A=
0;this.O=this.W=null;0<this.o.skipOffsetMilliseconds&&(this.C=this.o.skipOffsetMilliseconds);this.g=g.Hr(this.o.playerVars||"");null!=this.o.external?(this.H=this.o.external.mediaFiles||[],null!=this.o.external.durationMilliseconds&&(this.A=this.o.external.durationMilliseconds/1E3,this.g.length_seconds=this.A.toString()),(c=EM(this.ba,this.H))?(d=c.mimeType,this.g.url_encoded_third_party_media="url="+(0,window.encodeURIComponent)(c.uri)+"&type="+(0,window.encodeURIComponent)(d)):this.O=Error("Nonplayable third party ad media file.")):
(this.W=this.g.video_id,this.adFormat=this.g.adformat,this.B=this.g.ucid||null,this.G=wC(this.G,this.g.is_listed),this.T=this.g.title||null,this.A=yC(this.A,this.g.length_seconds));this.D=this.o.clickthroughEndpoint||null;c=g.Q("YTP_VISIT_ADVERTISERS_SITE");(d=this.D)&&c&&(this.L={runs:[{text:c,navigationEndpoint:d}]})};
GM=function(a,b){var c=a.instreamVideoAdRenderer,d=a.clientForecastingAdRenderer,e=a.invideoOverlayAdRenderer;return null!=c&&c.playerVars?new FM(c,b):null!=d?new AM(d):null!=e?new BM(e):null};
IM=function(a,b,c){this.id=b;this.A=a.config&&a.config.adPlacementConfig&&a.config.adPlacementConfig.kind||"AD_PLACEMENT_KIND_UNKNOWN";this.g=[];this.D=[];this.o=[];this.G=[];this.L=c;this.C=a.renderer&&a.renderer.adBreakServiceRenderer&&a.renderer.adBreakServiceRenderer.getAdBreakUrl||"";this.K=a.placementStartPings||[];this.H=a.placementEndPings||[];this.B="AD_PLACEMENT_KIND_START"==this.A?-0x8000000000000:"AD_PLACEMENT_KIND_END"==this.A?0x7ffffffffffff:a.config&&a.config.adPlacementConfig&&a.config.adPlacementConfig.adTimeOffset&&
(0,window.parseInt)(a.config.adPlacementConfig.adTimeOffset.offsetStartMilliseconds,10)||0;HM(this,a)};
JM=function(a){return"AD_PLACEMENT_KIND_MILLISECONDS"==a.A};
HM=function(a,b){var c=0,d;(c=b.renderer)&&c.multipleInstreamVideoAdRenderer&&c.multipleInstreamVideoAdRenderer.renderers?d=c.multipleInstreamVideoAdRenderer.renderers:d=[c];c=d.length;a.g=[];a.D=[];a.o=[];for(var e=0;e<c;e++){var f=GM(d[e],a.L);null!=f&&(f instanceof AM?a.D.push(f):f instanceof FM?f.O?a.G.push(f):a.g.push(f):f instanceof BM&&a.o.push(f))}0<a.o.length&&0<a.g.length&&(g.xr(Error("Linear and overlay ads found in ad break")),a.o=[]);var k=(0,g.H)(a.g,function(a){return a.A});
(0,g.G)(a.g,function(a,b){var c=new CM(b,k);a.K=c})};
NM=function(a){var b={};KM(a,b);LM(b);b.LACT=MM(function(){return g.Rt().toString()});
b.VIS=MM(function(){return a.Ih().toString()});
b.SDKV="h.3.0";b.VOL=MM(function(){return a.getVolume().toString()});
b.VED="";return b};
OM=function(a,b,c){a.YT_ERROR_CODE=MM(df(b.toString()));a.ERROR_MSG=MM(df(c))};
MM=function(a){return{toString:function(){return a()}}};
QM=function(a){var b={};(0,g.G)(PM,function(c){var d=dc(a,c);null!=d&&(b[c]=d.toString())});
return b};
KM=function(a,b){b.AD_CPN=MM(function(){return RM(a,2)});
b.CPN=MM(function(){return RM(a,1)});
b.AD_MT=MM(function(){return SM(a,2)});
b.MT=MM(function(){return SM(a,1)});
b.P_H=MM(function(){return g.PL(a).Na().height.toString()});
b.P_W=MM(function(){return g.PL(a).Na().width.toString()});
b.PV_H=MM(function(){return g.TM(g.PL(a)).height.toString()});
b.PV_W=MM(function(){return g.TM(g.PL(a)).width.toString()})};
RM=function(a,b){var c=a.ca(b);if(c)return c.clientPlaybackNonce;g.xr(Error("Video data is null."),"WARNING");return null};
SM=function(a,b){var c=1E3*a.getCurrentTime(b);return Math.round(Math.max(0,c)).toString()};
LM=function(a){a.CONN=MM(df("0"));a.WT=MM(function(){return Date.now().toString()})};
UM=function(a,b){g.I.call(this);this.D=a;this.o=b;this.B=g.wb(yM(this.D,"progress"));g.Eb(this.B,function(a,b){return a.offsetMilliseconds-b.offsetMilliseconds});
this.A=0;this.g={};this.C={wv:.25,Tv:.5,dw:.75}};
WM=function(a){VM(a,"impression");VM(a,"start")};
XM=function(a,b,c){for(c=void 0===c?!1:c;a.A<a.B.length;){var d=a.B[a.A];if(d.offsetMilliseconds<=1E3*b||c)a.G(d),a.A++;else break}};
YM=function(a,b,c,d){d=void 0===d?!1:d;(b>=c*a.C.wv||d)&&VM(a,"first_quartile");(b>=c*a.C.Tv||d)&&VM(a,"midpoint");(b>=c*a.C.dw||d)&&VM(a,"third_quartile")};
ZM=function(a,b){(0,g.G)(yM(a.D,b),a.G,a);a.g[b]=!0};
VM=function(a,b){a.g.hasOwnProperty(b)||ZM(a,b)};
$M=function(a,b){var c=g.on(b,a.o);if("https:"==window.location.protocol){var d=g.mg(c);c="https"==d[1]?c:g.kg("https",d[2],d[3],d[4],d[5],d[6],d[7])}g.is(c,void 0,Qn.pj(c))};
aN=function(a,b){b=void 0===b?{}:b;this.componentType=a;this.macros=b};
bN=function(a,b,c){this.id=void 0===c?null:c;this.content=a;this.actionType=b};
cN=function(a,b,c){g.gt.call(this);this.A=a;this.g=new UM(b,c);g.J(this,this.g);this.B=[];this.macros=c;this.D=!1};
eN=function(a,b){xb(a.B,b);dN(a,b,1)};
dN=function(a,b,c){0!=b.length&&(b=(0,g.H)(b,function(a){return new bN(a,c)}),a.U("onAdUxUpdate",b))};
fN=function(a,b,c){cN.call(this,a,b,c)};
gN=function(a,b){aN.call(this,"invideo-overlay",b);this.renderer=a};
hN=function(a,b,c){cN.call(this,a,b,c);this.o=b};
iN=function(){aN.call(this,"ad-attribution-bar");this.adPodPositionInfoString=null;this.adPodPosition=0;this.adPodLength=1;this.adBreakLengthSeconds=0;this.adBadgeText=null;this.adBreakRemainingLengthSeconds=0;this.adVideoId=null};
jN=function(a){a=void 0===a?null:a;aN.call(this,"ad-channel-thumbnail");this.channelIconThumbnailUrl=a};
kN=function(a,b){aN.call(this,"skip-button");this.skipAdRenderer=a;this.g=b};
lN=function(a){a=void 0===a?null:a;aN.call(this,"ad-title");this.videoTitle=a};
mN=function(a){a=void 0===a?null:a;aN.call(this,"advertiser-name");this.channelName=a};
nN=function(a){aN.call(this,"visit-advertiser");this.visitAdvertiserLabel=a};
oN=function(a,b){var c=g.P("VALID_SESSION_TEMPDATA_DOMAINS",[]),d=g.og(window.location.href);d&&c.push(d);d=g.og(a);if(g.ob(c,d)||!d&&g.Ha(a,"/"))if(g.ls("autoescape_tempdata_url")&&(c=window.document.createElement("a"),g.rd(c,a),a=c.href),a&&(c=g.mg(a),c=g.kg(null,null,null,null,c[5],c[6],c[7]),d=c.indexOf("#"),c=0>d?c:c.substr(0,d))){if(b.itct||b.ved)b.csn=b.csn||g.mu();c="ST-"+g.ab(c).toString(36);d=b?g.ug(b):"";cv.set(""+c,d,5,"/","youtube.com");b&&(c=b.itct||b.ved,d=g.y("yt.logging.screen.storeParentElement"),
c&&d&&d(new g.tt(c)))}};
g.pN=function(a){var b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;d=d.location;a=g.wg(a,b)+c;a=a instanceof id?a:md(a);d.href=jd(a)};
qN=function(a){(window.ytspf||{}).enabled?window.spf.navigate(a):g.pN(a)};
g.rN=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.P("EVENT_ID");d&&(b.ei||(b.ei=d));b&&oN(a,b);if(c)return!1;qN(a);return!0};
g.sN=function(a,b,c){c&&oN(a,c);window.open(a,b||g.ab(a).toString(36))};
tN=function(a,b,c){cN.call(this,a,b,c);this.o=b;this.C=new g.O(this.lx,15E3,this);g.J(this,this.C)};
uN=function(a,b){a.C.stop();dN(a,a.B,3);a.B=[];a.U(b)};
vN=function(a,b,c){c=g.ec(c);c.FINAL=MM(df("1"));c.SLOT_POS=MM(df("0"));return b instanceof FM?(c.SLOT_POS=MM(df(b.K.g.toString())),new tN(a,b,c)):b instanceof BM?new hN(a,b,c):b instanceof AM?new fN(a,b,c):null};
wN=function(){this.O=g.P("INNERTUBE_CLIENT_NAME",void 0);this.T=g.P("INNERTUBE_CLIENT_VERSION",void 0);this.H="AD_PLACEMENT_KIND_UNKNOWN";this.B=this.G=this.A=this.C=null;this.g="unknown_type";this.K=!0;this.L=this.o=this.D=!1};
xN=function(a){a.C=null;a.A=null;a.G=null;a.B=null;a.H="AD_PLACEMENT_KIND_UNKNOWN";a.g="unknown_type";a.D=!1;a.o=!1};
yN=function(a){if("object"!=ta(a))return null;var b=a.playerAds;if(!g.t(b))return a;if(!g.ua(b)||!b.length)return null;for(var c=0;c<b.length;c++){if(g.t(b[c].adBreakRenderer))return null;var d=b[c].adPlacementRenderer;if(g.t(d)&&"object"!=ta(d))return null}return a};
zN=function(a){if("object"!=ta(a))return null;var b=a.adPlacements;if(!g.t(b))return a;if(!g.ua(b)||!b.length)return null;for(var c=0;c<b.length;c++){if(g.t(b[c].adBreakRenderer))return null;var d=b[c].adPlacementRenderer;if(g.t(d)&&"object"!=ta(d))return null}return a};
AN=function(a,b,c,d,e,f,k,l){g.gt.call(this);this.G=a;this.R=b;this.K=c;this.o=e;a=g.ec(l);a.MIDROLL_POS=JM(e)?MM(df(Math.round(e.B/1E3).toString())):MM(df("0"));this.H=a;this.B=e.g.length;this.D=-1;this.A=this.g=null;this.C=d;d=String(this.o.id);e=1E3*this.R.getCurrentTime()||0;d=new zM(f,k,d,JM(this.o)&&e>=f&&e<=k);f=this.G;k=d.getId();if(k in f.B)g.xr(Error("Cue range IDs must be unique. ID "+k+" already seen."));else{f.G.push(d);if(-0x8000000000000!=d.start){d=[d];e=g.ma(d);for(a=e.next();!a.done;a=
e.next())a.value.namespace="ad";g.bM(f.g,d,void 0)}f.B[k]=this}};
GN=function(a){a.K.fetch(a.o.C).then(function(b){a.ka()||(b=BN(b),b.tq||(CN(a.G,[a.A]),b.isEmpty||(HM(a.o,b.adPlacementRenderer),a.B=a.o.g.length,DN(a))))})};
BN=function(a){var b=null,c={isEmpty:!0,tq:!1,adPlacementRenderer:void 0};try{b=g.bg(a.response)}catch(d){return c}a=yN(b);if(!a)return c;if(a&&a.adThrottled)return c.tq=!0,c;a=a.playerAds;if(!a||!a.length)return c;a=a[0].adPlacementRenderer;if(!a)return c;c.adPlacementRenderer=a;c.isEmpty=!1;return c};
DN=function(a){a.U("b",a);(0,g.G)(a.o.K,a.Pr,a);(0,g.G)(a.o.D,a.GF,a);(0,g.G)(a.o.G,a.dG,a);a.C.o=!1;FE("video_to_ad",["apbs"]);g.pb(a.o.g)?g.pb(a.o.o)?HN(a):IN(a,a.o.o[0]):(JN(a,a.o.g),KN(a))};
JN=function(a,b){b=(0,g.fe)(b,function(a){return a instanceof FM&&!(0<a.H.length)});
(0,g.G)(b,function(a){a=LN(a);this.R.Cm(a,2)},a)};
KN=function(a){a.D++;a.D<a.B&&0<a.B?IN(a,a.o.g[a.D]):HN(a);var b=a.C,c=a.R,d=a.o.A,e=a.D;a=a.B;xN(b);var f=c.ca(1),c=c.ca(2);f&&(b.C=f.clientPlaybackNonce,b.G=f.videoId);c&&(b.A=c.clientPlaybackNonce,b.B=c.videoId);b.H=d;0>=a?xN(b):(b.K?b.g="video_to_ad":e<a?b.g="ad_to_ad":e==a&&(b.g="ad_to_video"),b.L=e+1==a,b.D=!0,b.D&&(g.rE("c",b.O,b.g),g.rE("cver",b.T,b.g),g.rE("yt_pt","html5",b.g),g.rE("yt_pre","2",b.g),g.rE("yt_abt",b.H,b.g),b.C&&g.rE("cpn",b.C,b.g),b.G&&g.rE("docid",b.G,b.g),b.A&&g.rE("ad_cpn",
b.A,b.g),b.B&&g.rE("ad_docid",b.B,b.g)))};
IN=function(a,b){a.g=vN(a.R,b,a.H);g.J(a,a.g);var c=a.g;c.subscribe("onAdUxUpdate",a.gt,a);c.subscribe("d",a.Cj,a);c.subscribe("a",g.B(a.Cj,!0),a);c.subscribe("e",a.Qh,a);c.subscribe("f",a.Qh,a);a.g.Bj()};
HN=function(a,b){a.A=null;(void 0===b?0:b)||(0,g.G)(a.o.H,a.Pr,a);a.U("c",a)};
MN=function(a,b){g.gt.call(this);var c=this;this.g=a;this.L=b;this.K=gf(function(){c.g.ka()||g.gM(c.g,"ad")});
this.o=null;this.B={};this.G=[];this.A=[];this.D=null;this.O=new DM(a);this.H=new g.dt(this);g.J(this,this.H);this.C=new g.dt(this);g.J(this,this.C)};
NN=function(a){if(!a||!a.adPlacements)return null;a=(0,g.H)(a.adPlacements,function(a){return a.adPlacementRenderer});
return(0,g.fe)(a,function(a){return null!=a})};
ON=function(a){for(var b=NM(a.g),c="AD_PLACEMENT_KIND_END"==a.A[a.A.length-1].A?0x8000000000000:0x7ffffffffffff,d=a.A.length-1;0<=d;d--){var e=a.A[d],f=e.B;f>=c?g.xr(Error("AdPlacement "+d+" is not initialized due to tim\n                conflict."),"WARNING"):(c=new AN(a,a.g,a.L,new wN,e,f,c,b),e=a,c.subscribe("onAdUxUpdate",e.ht,e),c.subscribe("g",e.ct,e),c.subscribe("b",e.St,e),c.subscribe("c",e.Zj,e),c=f-1)}};
PN=function(a){a=g.X(a.g.app);return null!=a&&2==a.getPlayerType()};
CN=function(a,b){g.dM(a.g,b,void 0);(0,g.G)(b,function(a){g.tb(this.G,a)},a)};
QN=function(a,b){for(var c in a.B)if(a.B[c]==b){delete a.B[c];break}b.unsubscribe("onAdUxUpdate",a.ht,a);b.unsubscribe("g",a.ct,a);b.unsubscribe("b",a.St,a);b.unsubscribe("c",a.Zj,a);g.ue(b)};
LN=function(a){a=a.g||{};a.autoplay="1";return a};
g.RN=function(a){g.gt.call(this);this.g=a;this.loaded=!1};
SN=function(a){g.RN.call(this,a);this.A="";this.C=new g.dt(this);g.J(this,this.C);this.o=!1};
g.TN=function(a){g.U.call(this,a);this.ba=new g.gt;g.J(this,this.ba)};
UN=function(a,b){g.TN.call(this,a);this.W=b};
VN=function(a,b){a=void 0===a?null:a;b=void 0===b?null:b;if(null==a)return g.xr(Error("Got null or undefined adText object"),"WARNING"),"";var c=g.Wa(a.text);if(!a.isTemplated)return c;if(null==b)return g.xr(Error("Missing required parameters for a templated message"),"WARNING"),c;g.Qb(b,function(a,b){c=c.replace("{"+b+"}",a)});
return c};
g.WN=function(a){var b=Math.abs(Math.floor(a)),c=Math.floor(b/86400),d=Math.floor(b%86400/3600),e=Math.floor(b%3600/60),b=Math.floor(b%60),f="";0<c&&(f+=c+":",10>d&&(f+="0"));if(0<c||0<d)f+=d+":",10>e&&(f+="0");f+=e+":";10>b&&(f+="0");f+=b;return 0<=a?f:"-"+f};
g.XN=function(a){return(!g.pa(a.button)||0==a.button)&&!a.shiftKey&&!a.altKey&&!a.metaKey&&!a.ctrlKey};
YN=function(a){UN.call(this,{F:"div",M:"ytp-ad-attribution-bar"},["ad-attribution-bar","visit-advertiser"]);this.B=a;this.C=this.D=null;this.o=new g.TN({F:"div",M:"ytp-ad-attribution",J:[{F:"div",M:"ytp-ad-attribution-text"},{F:"div",M:"ytp-ad-attribution-icon",J:[{F:"svg",P:{fill:"#fff",height:"100%",version:"1.1",viewBox:"0 0 48 48",width:"100%"},J:[{F:"path",P:{d:"M0 0h48v48H0z",fill:"none"}},{F:"path",P:{d:"M22 34h4V22h-4v12zm2-30C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z"}}]}]}]});
g.J(this,this.o);this.o.ga("click",this.aC,this);this.o.hide();this.o.ra(this.ma["ytp-ad-attribution-bar"]);this.A=new g.TN({F:"div",M:"ytp-ad-visit-advertiser",J:[{F:"div",M:"ytp-ad-visit-advertiser-text",J:["{{visitAdvertiserText}}"]},{F:"div",M:"ytp-ad-visit-advertiser-icon",J:[{F:"svg",P:{fill:"#fff",height:"100%",version:"1.1",viewBox:"0 0 48 48",width:"100%"},J:[{F:"path",P:{d:"M0 0h48v48H0z",fill:"none"}},{F:"path",P:{d:"M38 38H10V10h14V6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V24h-4v14zM28 6v4h7.17L15.51 29.66l2.83 2.83L38 12.83V20h4V6H28z"}}]}]}]});
g.J(this,this.A);this.A.ga("click",this.pF,this);this.A.hide();this.A.ra(this.ma["ytp-ad-attribution-bar"]);this.G=this.o.ma["ytp-ad-attribution-text"];this.hide()};
$N=function(a,b){(0,g.G)(a,function(a){return ZN(a,b)})};
ZN=function(a,b){a.loggingUrls&&(0,g.G)(a.loggingUrls,function(a){if(a.baseUrl){a=g.on(a.baseUrl,b);if("https:"==window.location.protocol){var c=g.mg(a);a="https"==c[1]?a:g.kg("https",c[2],c[3],c[4],c[5],c[6],c[7])}g.is(a,void 0,Qn.pj(a))}});
a.urlEndpoint&&a.urlEndpoint.url&&g.sN(a.urlEndpoint.url)};
bO=function(a){UN.call(this,{F:"div",M:"ytp-ad-overlay-slot",J:[{F:"div",M:"ytp-ad-overlay-container"}]},["invideo-overlay"]);this.L=a;this.H=[];this.o=this.K=null;this.G={};a=this.ma["ytp-ad-overlay-container"];this.C=new aO(a,"ytp-overlay-ad-dimmed");g.J(this,this.C);this.N(a,"mouseover",this.C.SD,this.C);this.N(a,"mouseout",this.C.PD,this.C);var b=new g.TN({F:"div",M:"ytp-ad-text-overlay",J:[{F:"div",M:"ytp-ad-close-container",J:[{F:"button",M:"ytp-ad-close-button",J:[g.fr()]}]},{F:"div",M:"ytp-ad-overlay-title",
J:["{{title}}"]},{F:"div",M:"ytp-ad-overlay-desc",J:["{{description}}"]},{F:"div",M:"ytp-ad-overlay-link",J:["{{displayUrl}}"]},{F:"div",M:"ytp-ad-overlay-attribution",J:["{{attribution}}"]}]});this.N(b.ma["ytp-ad-overlay-title"],"click",this.Rh);this.N(b.ma["ytp-ad-overlay-link"],"click",this.Rh);this.N(b.ma["ytp-ad-close-container"],"click",this.Um);this.N(b.ma["ytp-ad-overlay-attribution"],"click",this.Ym);b.hide();this.D=b;g.J(this,this.D);this.D.ra(a);b=new g.TN({F:"div",M:"ytp-ad-text-overlay",
J:[{F:"div",M:"ytp-ad-close-container",J:[{F:"button",M:"ytp-ad-close-button",J:[g.fr()]}]},{F:"div",M:"ytp-ad-overlay-text-image",J:[{F:"img",P:{src:"{{imageUrl}}"}}]},{F:"div",M:"ytp-ad-overlay-title",J:["{{title}}"]},{F:"div",M:"ytp-ad-overlay-desc",J:["{{description}}"]},{F:"div",M:"ytp-ad-overlay-link",J:["{{displayUrl}}"]},{F:"div",M:"ytp-ad-overlay-attribution",J:["{{attribution}}"]}]});this.N(b.ma["ytp-ad-overlay-title"],"click",this.Rh);this.N(b.ma["ytp-ad-overlay-link"],"click",this.Rh);
this.N(b.ma["ytp-ad-close-container"],"click",this.Um);this.N(b.ma["ytp-ad-overlay-attribution"],"click",this.Ym);this.N(b.ma["ytp-ad-overlay-text-image"],"click",this.ZE);b.hide();this.A=b;g.J(this,this.A);this.A.ra(a);b=new g.TN({F:"div",M:"ytp-ad-image-overlay",J:[{F:"div",M:"ytp-ad-close-container",J:[{F:"button",M:"ytp-ad-close-button",J:[g.fr()]}]},{F:"div",M:"ytp-ad-overlay-image",J:[{F:"img",P:{src:"{{imageUrl}}",width:"{{width}}",height:"{{height}}"}}]},{F:"div",M:"ytp-ad-overlay-attribution",
J:["{{attribution}}"]}]});this.N(b.ma["ytp-ad-overlay-image"],"click",this.Rh);this.N(b.ma["ytp-ad-close-container"],"click",this.Um);this.N(b.ma["ytp-ad-overlay-attribution"],"click",this.Ym);b.hide();this.B=b;g.J(this,this.B);this.B.ra(a);this.hide()};
cO=function(a){a.D.hide();a.A.hide();a.B.hide()};
dO=function(a,b){g.ph(b.ma["ytp-ad-overlay-attribution"],null!=a.o.attributionText);b.pa("attribution",VN(a.o.attributionText))};
eO=function(a,b){var c=a.L.getRootNode();g.N(c,"ytp-ad-overlay-open",b);g.N(c,"ytp-ad-overlay-closed",!b)};
aO=function(a,b){g.I.call(this);this.C=a;this.o=!1;this.B=b;this.D=!1;this.g=new g.O(this.Ko,15E3,this);g.J(this,this.g);this.A=new g.O(this.Ko,6E3,this);g.J(this,this.A)};
fO=function(a,b){(a=g.Id(a))&&a.style&&(g.ph(a,b),g.N(a,"hid",!b))};
g.gO=function(a){(0,g.G)(arguments,function(a){!g.va(a)||a instanceof window.Element?fO(a,!0):(0,g.G)(a,function(a){g.gO(a)})})};
g.hO=function(a){(0,g.G)(arguments,function(a){!g.va(a)||a instanceof window.Element?fO(a,!1):(0,g.G)(a,function(a){g.hO(a)})})};
g.iO=function(a,b,c,d){g.I.call(this);this.o=a;c||a.hide();this.B=null==d?b:d;this.g=null;this.A=new g.O(this.fk,0,this);g.J(this,this.A)};
jO=function(a,b){var c=a.o.element;b?c.setAttribute("aria-hidden",!0):c.removeAttribute("aria-hidden")};
kO=function(a){UN.call(this,{F:"div",M:"ytp-ad-skip-slot"},["skip-button"]);this.R=a;this.K=!1;this.T=-1;this.L={};this.o=null;this.A=0;this.C=new g.TN({F:"div",M:"ytp-ad-preskip-container",J:[{F:"div",M:"ytp-ad-preskip-button",J:[{F:"div",M:"ytp-ad-preskip-text",J:["{{preskipText}}"]},{F:"div",M:"ytp-ad-preskip-image",J:[{F:"img",P:{src:"{{preskipTextImage}}"}}]}]}]});g.J(this,this.C);this.C.ra(this.element);this.B=this.G=null;this.H=new g.iO(this.C,500,!1);g.J(this,this.H);this.D=new g.TN({F:"div",
M:"ytp-ad-skip-container",J:[{F:"button",Z:["ytp-ad-skip-button","ytp-button"],J:[{F:"span",J:["{{skipText}}"]},{F:"div",M:"ytp-ad-skip-icon",J:[jr()]}]}]});g.J(this,this.D);this.D.ra(this.element);this.O=new g.iO(this.D,500,!1);g.J(this,this.O);this.D.ga("click",this.RE,this);this.N(this.R,"presentingplayerstatechange",this.PB);this.hide()};
lO=function(a){a.B&&(a.Qa(a.B),a.B=null)};
oO=function(a){g.dt.call(this);this.g=a;this.D=mO(this);this.A={};this.o=new g.TN({F:"div",Z:["video-ads","ytp-ad-module"]});g.J(this,this.o);g.jM(this.g,this.o.element,5);this.N(this.g,"videoplayerreset",this.C);this.N(this.g,"onAdUxUpdate",this.B);a=new YN(this.g);nO(this,a);a.ra(this.o.element);a=new kO(this.g);nO(this,a);a.ra(this.o.element);a=new bO(this.g);nO(this,a);a.ra(this.o.element)};
mO=function(a){function b(a){return{toString:function(){return a()}}}
var c=a.g;a={};a.AD_MT=b(function(){return Math.round(Math.max(0,1E3*c.getCurrentTime(2))).toString()});
a.MT=b(function(){return Math.round(Math.max(0,1E3*c.getCurrentTime(1))).toString()});
a.P_H=b(function(){return c.uj().height.toString()});
a.PV_H=a.P_H;a.P_W=b(function(){return c.uj().width.toString()});
a.PV_W=a.P_W;a.CONN="0";a.WT=b(function(){return Date.now().toString()});
a.LACT=b(function(){return g.Rt().toString()});
a.VIS=b(function(){return c.Ih().toString()});
a.VOL=b(function(){return c.getVolume().toString()});
return a};
nO=function(a,b){g.J(a,b);(0,g.G)(b.W,function(a){Zb(this.A,a)?g.xr(Error("Ad UI component already registered: "+a),"WARNING"):this.A[a]=b},a)};
pO=function(a){SN.call(this,a);this.logEvent=this.A="ad";this.B=null;var b=g.W(a);XC(b)&&!g.RC(b)&&g.J(this,new oO(a))};
qO=function(a,b){this.o=a;this.g=b};
rO=function(a,b){return a.o+b*a.getLength()};
sO=function(a,b,c){if(!a.getLength())return null!=c?c:window.Infinity;a=(b-a.o)/a.getLength();return g.td(a,0,1)};
tO=function(){this.o=this.position=this.B=this.g=this.C=this.A=this.width=window.NaN};
uO=function(a,b,c,d,e){var f=b.Rr/b.rows,k=Math.min(c/(b.Tr/b.columns),d/f),l=b.Tr*k,m=b.Rr*k,l=Math.floor(l/b.columns)*b.columns,m=Math.floor(m/b.rows)*b.rows,n=l/b.columns,q=m/b.rows,r=-b.Dw*n,v=-b.Rb*q;e&&45>=f&&(q-=1/k);n-=2/k;a=a.style;a.width=n+"px";a.height=q+"px";e||(d=(d-q)/2,c=(c-n)/2,a.marginTop=Math.floor(d)+"px",a.marginBottom=Math.ceil(d)+"px",a.marginLeft=Math.floor(c)+"px",a.marginRight=Math.ceil(c)+"px");a.background="url("+b.url+") "+r+"px "+v+"px/"+l+"px "+m+"px";if(e)return new g.Cd(n,
q)};
vO=function(a,b,c){g.I.call(this);window._exportCheck=g.Fa;this.da=b;this.ha=c;this.G=this.T=this.H=this.o=this.W=this.X=this.O=this.B=this.K=this.g=null;this.ba={};this.aa={};this.fa=null;this.R=a;this.D=this.C=this.L=this.A=null};
g.wO=function(a){var b=g.W(a.R);if("leanback"==b.g||b.Tb||!b.Fc&&!b.Ua)return!1;var c=a.R.Ha();if(2==c)return!1;if(3==c)return b.experiments.g("desktop_enable_autoplay");if(b.experiments.g("allow_live_autoplay"))return!0;a=a.R.ca();return b.Fk&&!a.ee?!1:!!a&&!a.xa};
xO=function(a){var b=a.R.ca(1).getPlayerResponse();if(b){a=b.adPlacements;b=b.playerAds;if(a)for(var c=0;c<a.length;c++)if(a[c].adPlacementRenderer)return!0;if(b)for(c=0;c<b.length;c++)if(b[c].adBreakRenderer)return!0}return!1};
zO=function(a,b,c,d){try{var e="ytmod.player."+b,f=g.y(e);if(d){if(f){var k=a.da,l=f._version;if(l&&l!=k)g.x(e,null,void 0);else return f._version=k,new f(a.R)}"creatorendscreen"==b?yO(a,"annotations_module",c):yO(a,b,c)}else g.gM(a.R,b)}catch(m){g.gM(a.R,b),g.xr(m)}return null};
AO=function(a,b){a.g&&(b||a.g.Bc())&&(g.ue(a.g),a.g=null);a.K&&(b||a.K.Bc())&&(g.ue(a.K),a.K=null);a.B&&(b||a.B.Bc())&&(g.ue(a.B),a.B=null);a.O&&(b||a.O.Bc())&&(g.ue(a.O),a.O=null);a.X&&(b||a.X.Bc())&&(g.ue(a.X),a.X=null);a.W&&(b||a.W.Bc())&&(g.ue(a.W),a.W=null);a.o&&(b||a.o.Bc())&&(g.ue(a.o),a.o=null);a.H&&(b||a.H.Bc())&&(g.ue(a.H),a.H=null);a.T&&(b||a.T.Bc())&&(g.ue(a.T),a.T=null);a.G&&(b||a.G.Bc())&&(g.ue(a.G),a.G=null);a.L&&(b||a.L.Bc())&&(g.ue(a.L),a.L=null);a.C&&(b||a.C.Bc())&&(g.ue(a.C),a.C=
null);a.A&&(b||a.A.Bc())&&(g.ue(a.A),a.A=null)};
g.NL=function(a){return g.W(a.R).ib?a.L:null};
yO=function(a,b,c){if(a.da){for(var d=a.da+b+".js",e=window.document.getElementsByTagName("SCRIPT"),f=!1,k,l=0;l<e.length;l++){var m=e[l];m.src==d&&(k=m)}k||(k=g.Yd("SCRIPT"),f=!0);var n=(0,g.A)(function(){this.ka()||c.call(this)},a),q=(0,g.A)(function(){this.ka()||g.gM(this.R,b)},a);
k.onload=g.B(function(a){lf(n);a&&a()},k.onload);
k.onerror=g.B(function(a){lf(q);a&&a()},k.onerror);
k.onreadystatechange=g.B(function(a){switch(k.readyState){case "loaded":case "complete":lf(n,this)}a&&a()},k.onreadystatechange);
f&&((e=g.W(a.R).oi)&&k.setAttribute("nonce",e),k.src=d,d=window.document.getElementsByTagName("HEAD")[0]||window.document.body,d.insertBefore(k,d.firstChild),g.te(a,function(){k.parentNode&&k.parentNode.removeChild(k);g.x("ytmod.player."+b,null,void 0);"annotations_module"==b&&g.x("ytmod.player.creatorendscreen",null,void 0)}))}};
CO=function(a){var b=a.V,c=["html5-video-player"];b.G&&c.push("ytp-dni");g.U.call(this,{F:"div",Z:c,P:{tabindex:-1,id:a.ba.attrs.id},J:[{F:"div",M:"html5-video-container",P:{"data-layer":0}}]});g.Gs(this.element,"version",a.ba.assets.js);this.app=a;this.containerElement=this.ma["html5-video-container"];this.X=!!this.containerElement;this.B=new g.Gg(0,0,0,0);this.o=null;this.D=new g.Gg(0,0,0,0);this.H=this.O=this.L=window.NaN;this.W=!1;this.G=window.NaN;this.K=!1;this.C=null;this.addEventListener=
(0,g.A)(this.element.addEventListener,this.element);this.removeEventListener=(0,g.A)(this.element.removeEventListener,this.element);this.dispatchEvent=function(){};
gD(b)&&"blazer"!=b.o&&"mweb-polymer"!=b.o&&window.matchMedia&&(this.T="desktop-polymer"==b.o?[{query:window.matchMedia("(max-width: 656px)"),size:new g.Cd(426,240)},{query:window.matchMedia("(max-width: 856px)"),size:new g.Cd(640,360)},{query:window.matchMedia("(max-width: 999px)"),size:new g.Cd(854,480)},{query:window.matchMedia("(min-width: 1720px) and (min-height: 980px)"),size:new g.Cd(1280,720)},{query:window.matchMedia("(min-width: 1294px) and (min-height: 630px)"),size:new g.Cd(854,480)},{query:window.matchMedia("(min-width: 1000px)"),
size:new g.Cd(640,360)}]:[{query:window.matchMedia("(max-width: 656px)"),size:new g.Cd(426,240)},{query:window.matchMedia("(min-width: 1720px) and (min-height: 980px)"),size:new g.Cd(1280,720)},{query:window.matchMedia("(min-width: 1294px) and (min-height: 630px)"),size:new g.Cd(854,480)},{query:window.matchMedia("(min-width: 657px)"),size:new g.Cd(640,360)}]);this.A=null;g.Xq({YTP_ADVERTISEMENT:"Advertisement",YTP_AD_BADGE:"Ad",YTP_AD_NOTIFICATION:"Ad in $X_SECONDSs",YTP_AD_POD_POSITION:"$AD_INDEX of $ADS_COUNT",
YTP_AIRPLAY:"AirPlay",YTP_AUDIO_TRACK_TITLE:"Audio track",YTP_AUTO:"Auto",YTP_AUTO_WITH_QUALITY_2:"Auto ($VIDEO_QUALITY)",YTP_CAN_SKIP_AD_SOON:"You can skip to video in $TIME_REMAINING",YTP_CARDS_BUTTON_ARIA_LABEL:"Show cards",YTP_CHANGE_QUALITY_WITH_QUALITY_2:"Change quality ($VIDEO_QUALITY)",YTP_COPY_DEBUG_INFO:"Copy debug info",YTP_COPY_VIDEO_URL:"Copy video URL",YTP_COPY_VIDEO_URL_AT_TIME:"Copy video URL at current time",YTP_DRAWER_CLOSE_BUTTON_ARIA_LABEL:"Hide cards",YTP_DRAWER_HEADER_TEXT_2:"More info",
YTP_DRAWER_POLL_PERCENT:"$PERCENT%",YTP_DRAWER_POLL_SIGNIN_TITLE:"Want to vote?",YTP_DRAWER_POLL_TITLE_ARIA_LABEL:"$POLL_TITLE - Sign in to vote.",YTP_GET_DEBUG_INFO:"Get debug info",YTP_GET_VIDEO_URL:"Get video URL",YTP_GET_VIDEO_URL_AT_TIME:"Get video URL at current time",YTP_GET_EMBED:"Get embed code",YTP_DECREASE_PLAYBACK_SPEED:"Decrease playback speed",YTP_PLAYBACK_SPEED_CHANGED:"Speed is $RATE",YTP_DEFAULT_VIEW:"Default view",YTP_EMBED_COPY:"Copy embed code",YTP_ERROR_GENERIC_WITHOUT_LINK:"An error occurred. Please try again later.",
YTP_ERROR_GENERIC_WITH_LINK_AND_CPN:"An error occurred. Please try again later. (Playback ID: $CPN) $BEGIN_LINKLearn More$END_LINK",YTP_EXIT_FULLSCREEN:"Exit full screen",YTP_FULLSCREEN_GENERIC_ERROR:"Full screen is unavailable. $BEGIN_LINKLearn More$END_LINK",YTP_FULLSCREEN_UNSUPPORTED_ERROR:"Your browser doesn't support full screen. $BEGIN_LINKLearn More$END_LINK",YTP_VOLUME_UNSUPPORTED_ERROR:"Your browser doesn't support changing the volume. $BEGIN_LINKLearn More$END_LINK",YTP_FEATURED:"Featured",
YTP_FULLSCREEN:"Full screen",YTP_INCREASE_PLAYBACK_SPEED:"Increase playback speed",YTP_INVIDEO_PROMOTION_ARIA_LABEL:"Promotion",YTP_GOTO_LIVE_TOOLTIP:"Skip ahead to live broadcast.",YTP_KEYBOARD_SHORTCUTS:"Keyboard shortcuts",YTP_LIVE:"Live",YTP_LIVE_NOW:"LIVE NOW",YTP_LOOP:"Loop",YTP_MIX:"Mix",YTP_MORE:"More",YTP_MORE_VIDEOS:"More videos",YTP_MDX_TITLE:"Play on",YTP_MDX_TOOLTIP:"Play on TV",YTP_MDX_MY_COMPUTER:"This computer",YTP_MDX_CAST_SELECTOR:"Cast...",YTP_MUTE:"Mute",YTP_NEXT:"Next",YTP_NEXT_VIDEO_IN:"Next video in $TIME_LEFT",
YTP_NORMAL_SPEED:"Normal",YTP_ON:"On",YTP_OFF:"Off",YTP_OPTIONS:"Options",YTP_PLAY_ALL:"Play all",YTP_PLAY_PAUSE:"Toggle play/pause",YTP_PREVIOUS:"Previous",YTP_PLAYBACK_STALLED_AT_START:"If playback doesn't begin shortly, try restarting your device.",YTP_MISSING_FORMATS:"Missing options?",YTP_PLAYLIST:"Playlist",YTP_PLAYLIST_UP_NEXT:"Up Next",YTP_QUALITY_TITLE:"Quality",YTP_SUGGESTED_VIDEOS:"Suggested videos",YTP_REPLAY:"Replay",YTP_TROUBLESHOOT_ISSUE:"Troubleshoot playback issue",YTP_SEEK_BACK:"Seek back 10 seconds",
YTP_SEEK_FORWARD:"Seek forward 10 seconds",YTP_SEEK_PERCENT:"Seek to 0%-90%.",YTP_SETTINGS:"Settings",YTP_SHARE:"Share",YTP_SHARE_LINK:"Share link",YTP_SHARE_WITH_PLAYLIST_2:"Include playlist",YTP_SHOW_VIDEO_INFO:"Stats for nerds",YTP_SIGN_IN:"Sign in",YTP_SPHERICAL_CONTROL:"Spherical video control. Use the arrow keys to pan the video.",YTP_SKIP_AD:"Skip Ad",YTP_SPEED_TITLE:"Speed",YTP_ST_COLLAPSE:"Collapse",YTP_ST_EXPAND:"Expand",YTP_SUBSCRIBE:"Subscribe",YTP_SUBSCRIBED:"Subscribed",YTP_SUBTITLES:"Subtitles/CC",
YTP_SUBTITLES_TOOLTIP:"Subtitles/closed captions",YTP_SUBTITLES_OFF:"Subtitles/closed captions off",YTP_SUBTITLES_ON:"Subtitles/closed captions on",YTP_TAP_TO_UNMUTE:"Tap to unmute",YTP_THREED_SHORT:"3D",YTP_THREED_VIEWMODE_2D:"2D",YTP_THREED_VIEWMODE_ANAGLYPH:"Anaglyph",YTP_THEATER_MODE:"Theater mode",YTP_TOGGLE_FULLSCREEN:"Toggle fullscreen.",YTP_TOGGLE_MUTE:"Toggle mute",YTP_UNMUTE:"Unmute",YTP_UNSUBSCRIBE:"Unsubscribe",YTP_URL_NAVIGATE:"Watch on YouTube.com",YTP_URL_NAVIGATE_TO:"Watch on $WEBSITE",
YTP_WATCH_ALL:"Watch entire video",YTP_WATCH_LATER:"Watch Later",YTP_WATCH_LATER_2:"Watch later",YTP_WATCH_LATER_AS_2:"Watch later as $USER_NAME",YTP_ADDED_TO_WATCH_LATER_AS:"Added as $USER_NAME",YTP_WEBGL_3D_ANAGLYPH:"Anaglyph",YTP_WEBGL_3D_2D:"2D",YTP_SUBSCRIBE_AS:"Subscribe as $USER_NAME",YTP_LIKE_AS:"Like as $USER_NAME",YTP_DISLIKE_AS:"Dislike as $USER_NAME",YTP_WATCH_NEXT:"Watch next",YTP_PLAY:"Play",YTP_WATERMARK:"Watermark",YTP_ERROR_STREAMING_UNAVAILABLE:"Video playback is unavailable right now because this video has been downloaded for offline viewing.",
YTP_ERROR_LICENSE:"Sorry, there was an error licensing this video.",YTP_ERROR_VIDEO_NOT_FOUND:"This video can not be found.",YTP_ERROR_ALREADY_PINNED_ON_A_DEVICE:"This video has already been downloaded on the maximum number of devices allowed by the copyright holder. Before you can play the video here, it needs to be unpinned on another device.",YTP_ERROR_CANNOT_ACTIVATE_RENTAL:"An error occurred when activating your rental. Please reload this page or try again later.",YTP_ERROR_PURCHASE_NOT_FOUND:"This video requires payment.",
YTP_ERROR_PURCHASE_REFUNDED:"This video's purchase has been refunded.",YTP_ERROR_STOPPED_BY_ANOTHER_PLAYBACK:"Your account is playing this video in another location. Please reload this page to resume watching.",YTP_ERROR_TOO_MANY_STREAMS_PER_USER:"Playback stopped because too many videos belonging to the same account are playing.",YTP_ERROR_TOO_MANY_STREAMS_PER_ENTITLEMENT:"Playback stopped because this video has been played on too many devices.",YTP_ERROR_STREAMING_DEVICES_QUOTA_PER_24H_EXCEEDED:"Too many devices/IP addresses have been used over the 24 hour period.",
YTP_ERROR_UNUSUAL_ACTIVITY:"Due to unusual account activity, this video is not currently available.",YTP_ERROR_STREAM_LICENSE_NOT_FOUND:"Video playback interrupted. Please try again.",YTP_ERROR_NOT_SIGNED_IN:"Please sign in to resume watching.",YTP_CLOSE:"Close",YTP_EXPAND:"Expand",YTP_ANNOTATIONS:"Annotations",YTP_DONE:"Done",YTP_SHARE_THIS_PLAYLIST:"Share this playlist",YTP_SEEK_SLIDER:"Seek slider",YTP_PAUSE:"Pause",YTP_AUTOPLAY:"Autoplay",YTP_AUTOPLAY_COUNTDOWN_2:"Next video in $SECONDS_LEFT",
YTP_AUTOPLAY_NEXT:"Play next video",YTP_AUTOPLAY_PAUSED:"Busy? We've paused autoplay.",YTP_AUTOPLAY_PAUSED_2:"Autoplay is paused.",YTP_AUTOPLAY_PAUSED_3:"Autoplay is paused",YTP_AUTOPLAY_CANCEL:"Cancel autoplay",YTP_WATCH_VIDEO_OR_PLAYLIST:"Watch $TITLE",YTP_CANCEL:"Cancel",YTP_ON_GOOGLE_PLUS:"On Google+",YTP_STILL_THERE:"Are you still there? If so, please click the button below to continue watching the playlist.",YTP_DISMISS:"OK",YTP_RESET:"Reset",YTP_STOP:"Stop live playback",YTP_LIKE:"Like",YTP_DISLIKE:"Dislike",
YTP_SCREENREADER_VOLUME_SETTING:"volume",YTP_SCREENREADER_VOLUME_MUTED:"muted",YTP_SCREENREADER_VOLUME_MUTE:"mute",YTP_SCREENREADER_VOLUME_UNMUTE:"unmute",YTP_SCREENREADER_CONTROL_TOGGLE:"toggle",YTP_SAMPLE_SUBTITLES:"Captions look like this",YTP_HTML5_PROTECTED_FLASH_FALLBACK:"To watch this video, install the latest Flash Player, or try a different browser. $BEGIN_LINKGet Flash Player$END_LINK.",YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK:"This video format is not supported.",YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK_WITH_LINK:"Your browser does not currently recognize any of the video formats available. $BEGIN_LINKClick here to visit our frequently asked questions about HTML5 video.$END_LINK",
YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK_FLASH:"The Adobe Flash Player is required for video playback. $BEGIN_LINKGet the latest Flash Player$END_LINK.",YTP_ERROR_CAST_SESSION_DEVICE_MISMATCHED:"The device in the cast session doesn't match the requested one.",YTP_ERROR_CAST_SESSION_VIDEO_MISMATCHED:"The video in the cast session doesn't match the requested one.",YTP_ERROR_CAST_TOKEN_EXPIRED:"Cast session was expired. Please refresh.",YTP_ERROR_CAST_TOKEN_FAILED:"Cast session not available. Please refresh or try again later.",
YTP_ERROR_CAST_TOKEN_MALFORMED:"Invalid cast session. Please refresh or try again later.",YTP_ERROR_GEO_FAILURE:"This video isn't available in your country.",YTP_ERROR_INVALID_DRM_MESSAGE:"The DRM system specific message is invalid.",YTP_ERROR_RENTAL_EXPIRED:"This video's rental has expired.",YTP_ERROR_RETRYABLE_ERROR:"There was a temporary server error. Please try again later.",YTP_ERROR_SERVER_ERROR:"There was an internal server error. Please try again later.",YTP_ERROR_STREAMING_NOT_ALLOWED:"Playback not allowed because this video is pinned on another device.",
YTP_ERROR_UNSUPPORTED_DEVICE:"Playback isn't supported on this device.",YTP_ERROR_VIDEO_FORBIDDEN:"Access to this video is forbidden.",YTP_ERROR_FORMAT_UNAVALIABLE:"This video isn't avaliable at the selected quality. Please try again later.",YTP_MDX_STATUS_CONNECTED_2:"Connected to $RECEIVER_NAME",YTP_MDX_STATUS_ERROR_2:"Error on $RECEIVER_NAME",YTP_MDX_STATUS_PLAYING_2:"Playing on $RECEIVER_NAME",YTP_MDX_PLAYER_ERROR:"This video is not available for remote playback.",YTP_MDX_PLAYER_RECONNECT_TIME:"Please check your Internet connection. Retrying in $FORMATTED_TIME...",
YTP_MDX_PLAYER_RECONNECT_BUTTON:"Reconnect",YTP_DEVICE_FALLBACK:"Sorry, this video is not available on this device.",YTP_AD_INTERRUPT_MESSAGE:"Your video will play after this ad.",YTP_VISIT_ADVERTISERS_SITE:"Visit advertiser's site",YTP_PROGRESS_LABEL_2:"$PLAY_PROGRESS of $DURATION",YTP_PLAYLIST_NAME:"Playlist: $PLAYLIST_NAME",YTP_PLAYLIST_POSITION:"$CURRENT_POSITION/$PLAYLIST_LENGTH",YTP_SHARE_PANEL_ERROR:"An error occurred while retrieving sharing information. Please try again later.",YTP_PLAYLIST_AUTHOR_AND_POSITION:"by $AUTHOR \u2022 $CURRENT_POSITION/$PLAYLIST_LENGTH",
YTP_PLAYER_NORMAL:"YouTube Video Player",YTP_PLAYER_FULLSCREEN:"YouTube Video Player in Fullscreen",YTP_SPONSORED:"Sponsored",YTP_SPONSORED_PRODUCT_INFO:"You are seeing this product because we think it is relevant to the video. Google may be compensated by the merchant.",YTP_SPONSORED_PRODUCT_BADGE:"Shop",YTP_AD_SETTINGS_INFO:"Visit Google's $BEGIN_FORMATAd Settings$END_FORMAT to learn more about how ads are targeted or to opt out of personalized ads.",YTP_PIP:"Picture in Picture",YTP_AUTO_TRANSLATE:"Auto-translate",
YTP_SWITCH_CAMERA:"Switch camera",YTP_MULTICAM_INDEX:"Viewing $CAMERA_INDEX of $CAMERA_COUNT",YTP_MORE_CAMERAS_AVAILABLE:"More cameras available",YTP_VIDEO_SUBTITLES_OVERRIDE:"Video Override",YTP_VIDEO_SUBTITLES_OVERRIDE_DESC:"Allow for a different caption style if specified by the video."});BO(this);this.N(a.g,"mutedautoplaychange",this.zH)};
BO=function(a){var b=a.app.g,c=(0,g.A)(a.Vx,a),d=(0,g.A)(a.yH,a),e=(0,g.A)(a.xH,a),f=(0,g.A)(a.vx,a);b.addEventListener("initializingmode",c);b.addEventListener("videoplayerreset",d);b.addEventListener("videodatachange",e);b.addEventListener("presentingplayerstatechange",f);g.te(a,function(){b.removeEventListener("initializingmode",c);b.removeEventListener("videoplayerreset",d);b.removeEventListener("videodatachange",e);b.removeEventListener("presentingplayerstatechange",f)})};
GO=function(a,b){a.o=b;a.W=!1;if(!a.o.parentNode)try{ce(a.containerElement,a.o,0)}catch(c){throw Error("videoElement_: "+!!a.o+", containerElement: "+!!a.containerElement+", containerElement.childNodes: "+!(!a.containerElement||!a.containerElement.childNodes)+", containerInitiallyTruthy: "+a.X+", isDisposed: "+a.ka());}a.A&&(a.A.disconnect(),a.A=null);!a.app.V.experiments.g("no_detect_bad_extensions2")&&window.MutationObserver&&(a.A=new window.MutationObserver((0,g.A)(function(a){for(var b=0;b<a.length;b++){var c=
a[b];"style"==c.attributeName&&"100%"==c.target.style.height&&(window.console.warn("Detected an extension setting the video size to an invalid height, which hides video playback. Restoring the original height..."),this.D=new g.Gg(0,0,0,0),DO(this))}},a)),a.A.observe(a.o,{attributes:!0}));
a.D=new g.Gg(0,0,0,0);DO(a);EO(a);FO(a)};
FO=function(a){g.L(a.o,"video-stream");g.L(a.o,"html5-main-video");var b=a.app.V;b.Bb&&a.o.setAttribute("data-no-fullscreen",!0);b.vf&&(a.o.setAttribute("webkit-playsinline",""),a.o.setAttribute("playsinline",""));b.ay&&a.o&&a.N(a.o,"click",a.o.play,a.o)};
HO=function(a,b){if(a.o){var c=a.app.V;OB&&(a.o.setAttribute("x-webkit-airplay","allow"),b.title?a.o.setAttribute("title",b.title):a.o.removeAttribute("title"));a.o.setAttribute("controlslist","nodownload");c.aG&&b.videoId&&(a.o.poster=b.yb(c,"default.jpg"))}c=g.sF(b,"yt:bgcolor");a.containerElement.style.backgroundColor=c?c:"";a.L=BC(g.sF(b,"yt:stretch"));a.O=BC(g.sF(b,"yt:crop"),!0);a.app.V.experiments.g("use_legacy_crop_resize")||a.ke()};
g.JO=function(a){var b=a.app.V.experiments.g("html5_aspect_from_adaptive_format");if(b){var c=g.X(a.app);if((c=c?c.g:null)&&c.Ta&&c.Ta.g)return b=c.Ta.videoInfos[0],IO(b.video.width,b.video.height)}return(a=a.o)?IO(a.videoWidth,a.videoHeight):b?16/9:window.NaN};
g.TM=function(a,b){var c=a.Na(),d=KO(a,c,g.JO(a),b);return new g.Gg((c.width-d.width)/2,(c.height-d.height)/2,d.width,d.height)};
KO=function(a,b,c,d){(0,window.isNaN)(a.L)||(c=a.L);var e=c;(0,window.isNaN)(a.H)?(0,window.isNaN)(a.O)||(e=a.O):e=a.H;a=IO(b.width,b.height);(0,window.isFinite)(e)||(e=Math.max(c,a));var f;e>a?f={width:b.width,height:b.width/e,aspectRatio:e}:e<a?f={width:b.height*e,height:b.height,aspectRatio:e}:f={width:b.width,height:b.height,aspectRatio:a};d||(0,window.isNaN)(c)||(c>e?f.width=f.height*c:c<e&&(f.height=f.width/c),f.aspectRatio=c);return f};
IO=function(a,b){return 1>Math.abs(LO*b-a)||1>Math.abs(LO/a-b)?LO:a/b};
MO=function(a){return 1==a.app.O?!1:(a=g.OL(a.app.g))&&!g.T(a,2)&&!bG(a)};
EO=function(a){var b="3"==a.app.V.C&&!a.W&&MO(a)&&!a.app.oa;a.o.controls=b;a.o.tabIndex=b?0:-1};
DO=function(a){var b=g.JO(a),c=a.Na(),d=1,e=!1,f=KO(a,c,b),k=gs();if(MO(a)){var l=(0,window.isNaN)(b);OB&&!g.uc(601)?b=f.aspectRatio:l=l||"3"==a.app.V.C;l?l=new g.Gg(0,0,c.width,c.height):(d=f.aspectRatio/b,l=new g.Gg((c.width-f.width/d)/2,(c.height-f.height)/2,f.width/d,f.height),1==d&&ci&&(b=l.width-c.height*b,0<b&&(l.width+=b,l.height+=b)));k&&(a.o.style.display="");a.K=!0}else b=-c.height,OB?b*=window.devicePixelRatio:g.kD&&(b-=window.screen.height),l=new g.Gg(0,b,c.width,c.height),k&&(a.o.style.display=
"none"),a.K=!1;g.Ig(a.D,l)||(a.D=l,g.RC(a.app.V)?(a.o.style.setProperty("width",l.width+"px","important"),a.o.style.setProperty("height",l.height+"px","important")):g.mh(a.o,g.Kg(l)),g.ch(a.o,g.Lg(l)),e=!0);c=new g.Gg((c.width-f.width)/2,(c.height-f.height)/2,f.width,f.height);g.Ig(a.B,c)||(a.B=c,e=!0);g.Vg(a.o,"transform",1==d?"":"scaleX("+d+")");return e};
NO=function(a,b,c,d){g.gt.call(this);this.A=a;this.X=(0,g.A)(b,null);this.o=0;this.G=!1;this.C=new g.zd(window.NaN,window.NaN);this.g=new g.dt(this);g.J(this,this.g);b=d?4E3:3E3;this.K=new g.O(g.B(this.Eb,1,!1),b,this);g.J(this,this.K);this.L=new g.O(g.B(this.Eb,2,!1),b,this);g.J(this,this.L);this.T=new g.O(g.B(this.Eb,512,!1),0,this);g.J(this,this.T);this.W=c&&0<c.yf.length?5E3:3E3;d||(this.B=this.g.N(a,"mouseover",this.Xn),this.g.N(a,"mousemove",this.uH),this.g.N(a,"mouseleave",this.SB));g.Xg?this.g.N(a,
"keypress",this.ny):this.g.N(a,"focusin",this.Mw);this.D=this.g.N(a,"mousedown",this.Lu);this.H=this.g.N(a,"touchstart",this.Nu,void 0,!0);this.aa=null;this.Eb(640,!0)};
OO=function(a){a.Eb(4,!1);a.O&&(a.g.Qa(a.O),a.O=null,a.B=a.g.N(a.A,"mouseover",a.Xn));a.B&&(a.g.Qa(a.B),a.B=a.g.N(a.A,"mouseover",a.Xn))};
QO=function(a,b){g.U.call(this,{F:"canvas",M:"ytp-tv-static"});this.A=this.element.getContext("2d");this.height=this.width=window.NaN;this.L=null;this.H=this.K=this.C=this.B=0;this.D=-75;this.o=new g.Do(this.O,void 0,this);g.J(this,this.o);this.G=new g.O(this.o.th,75,this.o);g.J(this,this.G);PO(this,a,b)};
RO=function(a){for(var b=Math.floor(.6*a),c=b;c<a;++c){for(var d=!1,e=2;e<Math.sqrt(c);e++){if(!(c%e)){d=!1;break}d=!0}if(d)return c}return b};
PO=function(a,b,c){if(b&&c){a.width=a.element.width=b;a.height=a.element.height=c;var d=g.Yd("CANVAS");d.width=b;d.height=c;for(var e=d.getContext("2d"),f=e.getImageData(0,0,b,c),k=b*c,l=0;l<k;l++){var m=4*l;f.data[m]=f.data[m+1]=f.data[m+2]=Math.floor(35*Math.random());f.data[m+3]=255}e.putImageData(f,0,0);a.L=d;a.K=RO(b);a.H=RO(c/10);a.A.scale(1.5,1.5);a.A.fillStyle="rgba(255, 255, 255, 0.02)"}};
SO=function(){return{F:"div",M:"ytp-spinner-dots",J:[{F:"div",Z:["ytp-spinner-dot","ytp-spinner-dot-0"]},{F:"div",Z:["ytp-spinner-dot","ytp-spinner-dot-1"]},{F:"div",Z:["ytp-spinner-dot","ytp-spinner-dot-2"]},{F:"div",Z:["ytp-spinner-dot","ytp-spinner-dot-3"]},{F:"div",Z:["ytp-spinner-dot","ytp-spinner-dot-4"]},{F:"div",Z:["ytp-spinner-dot","ytp-spinner-dot-5"]},{F:"div",Z:["ytp-spinner-dot","ytp-spinner-dot-6"]},{F:"div",Z:["ytp-spinner-dot","ytp-spinner-dot-7"]}]}};
g.TO=function(a,b,c,d){if((void 0===c||!c)&&g.XN(a))return g.ct(a),!0;b.ac();a=a.currentTarget.getAttribute("href");g.rN(a,d,!0);return!1};
UO=function(a,b,c){if(gD(g.W(b))&&2!=b.Ha()){if(g.XN(c))return b.isFullscreen()&&g.RL(b),g.ct(c),!0}else{var d=g.XN(c);d&&b.ac();g.rN(a,void 0,!0);d&&(g.sN(a),g.ct(c))}return!1};
VO=function(a){var b=!g.W(a).Bb&&3!=a.Ha();return a.isFullscreen()||b};
XO=function(a){g.U.call(this,{F:"div",Z:["ytp-error"],P:{role:"alert"},J:[{F:"div",M:"ytp-error-content",J:[{F:"div",M:"ytp-error-content-wrap",J:["{{content}}"]}]}]});this.o=a;this.B=[];try{this.A=new QO(1,1),g.J(this,this.A),this.A.ra(this.element,0)}catch(b){}WO(this,g.PL(this.o).Na())};
WO=function(a,b){YO(a,function(a){PO(a,b.width,b.height)})};
YO=function(a,b){if(a.A)try{b.call(a,a.A)}catch(c){a.A.dispose(),a.A=null}};
ZO=function(a,b,c,d,e){e||(e=g.W(a.o).A);a=d?{CPN:a.o.ca().clientPlaybackNonce}:null;b=g.Q(b,a).split(/\$(BEGIN|END)_LINK/);return{F:"span",J:[b[0],{F:"br"},{F:"a",P:{href:c,target:e?"_blank":null},J:[b[2]]},b[4]]}};
aP=function(a,b,c){$O("add_to_watch_later_list",a,b,c)};
bP=function(a,b,c){$O("delete_from_watch_later_list",a,b,c)};
$O=function(a,b,c,d){a=c?c+"playlist_video_ajax?action_"+a+"=1":"/playlist_video_ajax?action_"+a+"=1";c={feature:b.feature||null,authuser:b.Lb||null,pageid:b.pageId||null};var e={video_ids:b.videoIds||null,source_playlist_id:b.sourcePlaylistId||null,full_list_id:b.fullListId||null,delete_from_playlists:b.HK||null,add_to_playlists:b.BK||null,plid:g.P("PLAYBACK_ID")||null};g.Ur(a,{method:"POST",Yb:c,qb:e,context:b.context,onError:b.onError,nb:function(a,c){var d=c.result;d&&d.actions&&rt(d.actions);
b.nb.call(this,a,c)},
Nc:b.Nc,withCredentials:!!d})};
cP=function(){this.g=[];this.o=[];this.A=[]};
gP=function(a,b,c){c=g.Yd(c?"AUDIO":"VIDEO");g.Ea(c,dP);g.Us(c,"loadeddata",(0,g.A)(c.o,c));PC&&6<=eP&&g.Us(c,"webkitbeginfullscreen",(0,g.A)(c.play,c));a.o.push(c);b?a.A.push(c):fP(a,c);return c};
fP=function(a,b){g.ob(a.o,b)&&!g.ob(a.g,b)&&(b.src||b.load(),g.tb(a.A,b)||a.g.push(b))};
hP=function(){g.U.call(this,{F:"div",M:"ytp-sparkline"})};
iP=function(a,b){for(var c=a.element.children.length;c<b.length;c++){var d=g.Yd("SPAN");d.style.width=100/b.length+"%";a.element.appendChild(d)}d=Math.max.apply(Math,b)||1;for(c=0;c<b.length;c++)a.element.children[c].style.height=b[c]/d*100+"%";for(;a.element.children.length>b.length;)g.de(a.element.lastChild)};
jP=function(a){var b={F:"button",Z:["html5-video-info-panel-close","ytp-button"],P:{title:"close"},J:["[x]"]};g.U.call(this,{F:"div",M:"html5-video-info-panel",J:[b,{F:"div",M:"html5-video-info-panel-content",J:[{F:"div",J:[{F:"div",J:["Video ID:"]},{F:"span",J:["{{video_id}}"]}]},{F:"div",J:[{F:"div",J:["Dimensions:"]},{F:"span",J:["{{dimensions}}"]}]},{F:"div",J:[{F:"div",J:["Resolution:"]},{F:"span",J:["{{resolution}}"]}]},{F:"div",J:[{F:"div",J:["Optimal Resolution:"]},{F:"span",J:["{{optimal_resolution}}"]}]},
{F:"div",J:[{F:"div",J:["Volume:"]},{F:"span",J:["{{volume}}"]}]},{F:"div",J:[{F:"div",J:["Stream Host:"]},{F:"span",J:["{{stream_host}}"]}]},{F:"div",J:[{F:"div",J:["Stream Type:"]},{F:"span",J:["{{stream_type}}"]}]},{F:"div",P:{style:"{{cpn_style}}"},J:[{F:"div",J:["CPN:"]},{F:"span",P:{style:"font-family:monospace"},J:["{{cpn}}"]}]},{F:"div",J:[{F:"div",J:["Mime Type:"]},{F:"span",J:["{{mime}}"]}]},{F:"div",J:[{F:"div",J:["DASH:"]},{F:"span",J:["{{dash}}"]}]},{F:"div",P:{style:"{{shader_info_style}}"},
J:[{F:"div",J:["Shader Info:"]},{F:"span",J:["{{shader_info}}"]}]},{F:"div",P:{style:"{{color_style}}"},J:[{F:"div",J:["Color:"]},{F:"span",J:["{{color}}"]}]},{F:"div",P:{style:"{{drm_style}}"},J:[{F:"div",J:["Protected:"]},{F:"span",J:["{{drm}}"]}]},{F:"div",J:[{F:"div",J:["Connection Speed:"]},{F:"span",J:[{F:"span",J:["{{bandwidth_sparkline}}"]},{F:"span",J:["{{bandwidth_kbps}}"]}]}]},{F:"div",J:[{F:"div",J:["Buffer Health:"]},{F:"span",J:[{F:"span",J:["{{buffer_health_sparkline}}"]},{F:"span",
J:["{{buffer_health_seconds}}"]}]}]},{F:"div",J:[{F:"div",J:["Network Activity:"]},{F:"span",J:[{F:"span",J:["{{network_activity_sparkline}}"]},{F:"span",J:["{{network_activity_bytes}}"]}]}]},{F:"div",P:{style:"{{live_latency_style}}"},J:[{F:"div",J:["Live Latency:"]},{F:"span",J:[{F:"span",J:["{{live_latency_sparkline}}"]},{F:"span",J:["{{live_latency_message}}"]}]}]},{F:"div",J:[{F:"div",J:["Dropped Frames:"]},{F:"span",J:["{{dropped_frames}}"]}]},{F:"div",P:{style:"{{sequence_number_style}}"},
J:[{F:"div",J:["Sequence Number:"]},{F:"span",J:["{{sequence_number}}"]}]}]}]});b&&this.N(this.ma["html5-video-info-panel-close"],"click",this.hide);this.A=new hP;g.J(this,this.A);this.pa("bandwidth_sparkline",this.A);this.C=new hP;g.J(this,this.C);this.pa("live_latency_sparkline",this.C);this.B=new hP;g.J(this,this.B);this.pa("buffer_health_sparkline",this.B);this.D=new hP;g.J(this,this.D);this.pa("network_activity_sparkline",this.D);this.G=new g.O(this.H,500,this);g.J(this,this.G);this.o=a};
kP=function(a,b){g.I.call(this);this.A=a||window.NaN;this.g=b||null;this.o=[]};
g.lP=function(a){return WG(a)?(a.fetch=0,new g.VG(a)):new g.WE(a)};
mP=function(a){this.o=null;for(var b=[],c=0;100>=c;c++)b.push(c/100);b={threshold:b};(this.g=window.IntersectionObserver?new window.IntersectionObserver((0,g.A)(this.A,this),b):null)&&this.g.observe(a)};
nP=function(a){g.U.call(this,{F:"div",M:"ytp-bezel",P:{role:"status","aria-label":"{{label}}"},J:[{F:"div",M:"ytp-bezel-icon",J:["{{icon}}"]}]});this.A=new g.O(this.show,10,this);g.J(this,this.A);this.o=new g.O(this.hide,500,this);g.J(this,this.o);this.R=a;this.hide()};
pP=function(a,b){if(b)g.T(g.OL(a.R),64)||oP(a,mr(),g.Q("YTP_PLAY"));else{var c=a.R.ca();c.xa&&!c.qe?oP(a,rr(),g.Q("YTP_STOP")):oP(a,lr(),g.Q("YTP_PAUSE"))}};
qP=function(a,b,c){0>=b?(c=ur(),b=g.Q("YTP_SCREENREADER_VOLUME_MUTED")):(c=c?tr():sr(),b=Math.floor(b)+"% "+g.Q("YTP_SCREENREADER_VOLUME_SETTING"));oP(a,c,b)};
rP=function(a,b,c){c=c?g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-fast-rewind"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},J:[{F:"path",Da:!0,M:"ytp-svg-fill",P:{d:"M 17,24 V 12 l -8.5,6 8.5,6 z m .5,-6 8.5,6 V 12 l -8.5,6 z"}}]}:g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-fast-forward"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},J:[{F:"path",Da:!0,M:"ytp-svg-fill",P:{d:"M 10,24 18.5,18 10,12 V 24 z M 19,12 V 24 L 27.5,18 19,12 z"}}]};b=g.Q("YTP_PLAYBACK_SPEED_CHANGED",
{RATE:b});oP(a,c,b)};
sP=function(a){oP(a,nr(),g.Q("YTP_PREVIOUS"))};
oP=function(a,b,c){a.pa("label",void 0===c?"":c);a.pa("icon",b);g.Ho(a.o);a.A.start()};
g.tP=function(a,b){b=b||{F:"div",M:"ytp-thumbnail-overlay"};g.U.call(this,b);this.A=new g.iO(this,250);g.J(this,this.A);this.o=a};
uP=function(a){g.tP.call(this,a,{F:"div",Z:["ytp-thumbnail-overlay","ytp-cued-thumbnail-overlay"],J:[{F:"div",M:"ytp-thumbnail-overlay-image"}]});this.C=new g.dt(this);g.J(this,this.C);this.D=this.ma["ytp-thumbnail-overlay-image"];this.B=new g.O(this.wr,0,this);g.J(this,this.B);this.wr();this.N(a,"presentingplayerstatechange",this.NA);this.N(a,"ypcStateChanged",this.BF);"detailpage"==g.W(a).g&&this.N(a,"videoplayerreset",this.MA)};
wP=function(a,b,c){var d=bG(c),e=!g.W(b).experiments.g("disable_new_pause_state3");b=g.T(c,2)&&!KL(b)&&(!e||!g.vP(b.app));d||b?a.show():(a.hide(),g.T(c,1)||a.stop())};
yP=function(a){var b=["ytp-large-play-button","ytp-button"],c=g.W(a);c.G&&c.Xa?c=[{F:"div",M:"ytp-large-play-button-circle",P:{style:"background-color: "+c.Xa}},g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-dni-large-play-button"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"4 -6 60 60",width:"100%"},J:[{F:"path",P:{d:"m 26.96,13.67 18.37,9.62 -18.37,9.55 -0.00,-19.17 z",fill:"#fff"}}]}]:c.ba&&!c.Tb?c=[g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-large-play-button-hover"]}:{F:"svg",P:{height:"100%",version:"1.1",
viewBox:"0 0 68 48",width:"100%"},J:[{F:"path",M:"ytp-large-play-button-bg",P:{d:"m .66,37.62 c 0,0 .66,4.70 2.70,6.77 2.58,2.71 5.98,2.63 7.49,2.91 5.43,.52 23.10,.68 23.12,.68 .00,-1.3e-5 14.29,-0.02 23.81,-0.71 1.32,-0.15 4.22,-0.17 6.81,-2.89 2.03,-2.07 2.70,-6.77 2.70,-6.77 0,0 .67,-5.52 .67,-11.04 l 0,-5.17 c 0,-5.52 -0.67,-11.04 -0.67,-11.04 0,0 -0.66,-4.70 -2.70,-6.77 C 62.03,.86 59.13,.84 57.80,.69 48.28,0 34.00,0 34.00,0 33.97,0 19.69,0 10.18,.69 8.85,.84 5.95,.86 3.36,3.58 1.32,5.65 .66,10.35 .66,10.35 c 0,0 -0.55,4.50 -0.66,9.45 l 0,8.36 c .10,4.94 .66,9.45 .66,9.45 z",
fill:"#cc181e"}},{F:"path",P:{d:"m 26.96,13.67 18.37,9.62 -18.37,9.55 -0.00,-19.17 z",fill:"#fff"}},{F:"path",P:{d:"M 45.02,23.46 45.32,23.28 26.96,13.67 43.32,24.34 45.02,23.46 z",fill:"#ccc"}}]}]:(c.isMobile&&b.push("ytp-touch-device"),c=[c.Tb?g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-house-brand-large-play-button"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 60 60",width:"100%"},J:[{F:"path",M:"ytp-large-play-button-bg",P:{"clip-rule":"evenodd",d:"M59.6,1.35c0.26,.5,.4,1.13,.4,1.9v53.5c0,.76-0.13,1.4-0.4,1.9c-0.5,.9-1.45,1.35-2.85,1.35H3.25c-1.4,0-2.33-0.43-2.8-1.3C0.15,58.16,0,57.51,0,56.75V3.25c0-0.83,.16-1.5,.5-2C1,.41,1.91,0,3.25,0h53.5C58.15,0,59.1,.45,59.6,1.35z M21,41.65l22.7-11.8L21,18V41.65z",
fill:"#1f1f1f","fill-rule":"evenodd"}},{F:"path",P:{d:"M21,41.65 L21,18 L43.7,29.85 L21,41.65 Z",fill:"#fff"}}]}:g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-large-play-button"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 68 48",width:"100%"},J:[{F:"path",M:"ytp-large-play-button-bg",P:{d:"m .66,37.62 c 0,0 .66,4.70 2.70,6.77 2.58,2.71 5.98,2.63 7.49,2.91 5.43,.52 23.10,.68 23.12,.68 .00,-1.3e-5 14.29,-0.02 23.81,-0.71 1.32,-0.15 4.22,-0.17 6.81,-2.89 2.03,-2.07 2.70,-6.77 2.70,-6.77 0,0 .67,-5.52 .67,-11.04 l 0,-5.17 c 0,-5.52 -0.67,-11.04 -0.67,-11.04 0,0 -0.66,-4.70 -2.70,-6.77 C 62.03,.86 59.13,.84 57.80,.69 48.28,0 34.00,0 34.00,0 33.97,0 19.69,0 10.18,.69 8.85,.84 5.95,.86 3.36,3.58 1.32,5.65 .66,10.35 .66,10.35 c 0,0 -0.55,4.50 -0.66,9.45 l 0,8.36 c .10,4.94 .66,9.45 .66,9.45 z",
fill:"#1f1f1e","fill-opacity":"0.81"}},{F:"path",P:{d:"m 26.96,13.67 18.37,9.62 -18.37,9.55 -0.00,-19.17 z",fill:"#fff"}},{F:"path",P:{d:"M 45.02,23.46 45.32,23.28 26.96,13.67 43.32,24.34 45.02,23.46 z",fill:"#ccc"}}]}]);g.U.call(this,{F:"button",Z:b,P:{"aria-label":"{{label}}"},J:c});this.o=a;this.B=!1;this.A=new g.iO(this,250);g.J(this,this.A);this.N(a,"presentingplayerstatechange",this.C);xP(this,g.OL(a))};
xP=function(a,b){if(g.W(a.o).OF&&!a.B){wP(a.A,a.o,b);var c=(c=a.o.ca())&&c.title?g.Q("YTP_WATCH_VIDEO_OR_PLAYLIST",{TITLE:c.title}):g.Q("YTP_PLAY");a.pa("label",c)}else a.hide()};
AP=function(a,b){g.dt.call(this);this.R=a;this.A=b;this.o=new window.Set;this.g=window.navigator.mediaSession;zP(this,"play",function(){pP(b,!0);a.jc()});
zP(this,"pause",function(){pP(b,!1);a.ac()});
zP(this,"seekbackward",function(){oP(b,pr());a.td(-5*a.Vb())});
zP(this,"seekforward",function(){oP(b,hr());a.td(5*a.Vb())});
this.N(a,"videodatachange",this.C);this.N(a,"presentingplayerstatechange",this.B);this.C()};
zP=function(a,b,c){a.g.setActionHandler(b,c?(0,g.A)(c,a):null);a.o.add(b)};
BP=function(a){g.U.call(this,{F:"div",M:"ytp-paid-content-overlay",P:{"aria-live":"assertive","aria-atomic":"true"}});this.K=new g.U({F:"div",Z:["ytp-button","ytp-paid-content-overlay-text"]});g.J(this,this.K);this.K.ra(this.element);this.R=a;this.A=null;this.G=!1;this.C=new g.iO(this.K,250,!1,100);g.J(this,this.C);this.D=this.o=null;this.B={};this.H=0;this.N(a,"videodatachange",this.T);this.N(a,"presentingplayerstatechange",this.O)};
CP=function(a,b){var c=qF(b),d=rF(b);a.o?b.videoId&&b.videoId!=a.A&&(g.Ho(a.o),a.A=b.videoId,c=a.B[b.videoId]||0,a.G=!!d&&3E3>c):c&&d&&(a.o=new g.O(a.L,d,a),g.J(a,a.o),g.ke(g.Ld("ytp-paid-content-overlay-text",a.element),c))};
DP=function(a,b){a.o&&g.T(b,8)&&a.G&&(a.G=!1,a.C.show(),a.H=(0,g.F)(),a.o.start())};
FP=function(a){g.U.call(this,{F:"div",M:"ytp-spinner",J:[SO(),{F:"div",M:"ytp-spinner-message",J:[g.Q("YTP_PLAYBACK_STALLED_AT_START")]}]});this.B=this.ma["ytp-spinner-message"];this.A=a;this.o=new g.O(this.show,500,this);g.J(this,this.o);this.N(a,"presentingplayerstatechange",this.C);this.N(a,"onFrescaStateChange",this.D);this.N(a,"playbackstalledatstart",this.G);EP(this,g.OL(a))};
EP=function(a,b){if(g.T(b,128))var c=0;else!(c=g.T(b,16))&&(c=g.T(b,1))&&(c=g.IL(a.A).G,c=!(c&&c.loaded));c?a.o.start():a.hide()};
GP=function(a,b,c,d){d=void 0===d?!1:d;g.TN.call(this,b);this.R=a;this.da=d;this.L=null;this.K=new g.dt(this);g.J(this,this.K);this.O=new g.iO(this,c,!0);g.J(this,this.O);this.C=null};
HP=function(a){a.C&&(window.document.activeElement&&g.je(a.element,window.document.activeElement)&&(g.ne(a.C),a.C.focus()),a.C.removeAttribute("aria-expanded"),a.C=null);g.ft(a.K);a.L=null};
IP=function(a){return a.g&&3!=a.O.g};
JP=function(a){var b=g.W(a).experiments.B(),c=[],d=[];"none"!=b&&(c.push("ytp-unmute-animated"),d.push({F:"div",Z:["ytp-unmute-box"]}),"expand"==b?c.push("ytp-unmute-expand"):"shrink"==b&&c.push("ytp-unmute-shrink"));GP.call(this,a,{F:"div",Z:["ytp-unmute","ytp-popup"].concat(c),J:[{F:"div",M:"ytp-unmute-inner",J:[{F:"div",Z:["ytp-unmute-icon"],J:[g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-volume-muted-dark"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},J:[{F:"path",Da:!0,
M:"ytp-svg-fill",P:{d:"m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z"}}]}]},
{F:"div",Z:["ytp-unmute-text"],J:[g.Q("YTP_TAP_TO_UNMUTE")]}].concat(d)}]},100);this.o=a;this.A=!1;this.N(a,"mutedautoplaychange",this.B,this);this.ga("click",this.onClick,this);this.rb(a.app.oa)};
KP=function(a){g.dt.call(this);g.Yq();var b=g.W(a),c=g.PL(a);this.g=a;this.wb=!1;this.T=null;this.Ea=!1;var d=new uP(a);g.J(this,d);g.jM(a,d.element,5);var e=new FP(a);g.J(this,e);g.jM(a,e.element,5);this.G=new nP(a);g.J(this,this.G);g.jM(a,this.G.element,5);this.ba=new yP(a);g.J(this,this.ba);this.ba.ra(d.element);var f=a.ca();this.B=new NO(c,(0,g.A)(this.FA,this),f,b.useTabletControls);g.J(this,this.B);this.B.subscribe("autohideupdate",this.Zm,this);var k=new BP(a);g.J(this,k);g.jM(a,k.element,
5);this.aa=new JP(a);g.J(this,this.aa);g.jM(this.g,this.aa.element,3);this.Xa=!1;this.N(a,"mutedautoplaychange",this.GA);this.la=new g.O(this.tr,200,this);g.J(this,this.la);this.Fa=f.videoId;this.D=null;this.O=!1;this.Wa=null;this.za=[];f=a.getRootNode();f.setAttribute("aria-label",g.Q("YTP_PLAYER_NORMAL"));switch(b.color){case "white":g.L(f,"ytp-color-white")}!g.W(a).experiments.g("disable_mediasession2")&&"mediaSession"in window.navigator&&!window.navigator.mediaSession.metadata&&window.navigator.mediaSession.setActionHandler&&
(f=new AP(a,this.G),g.J(this,f));this.N(a,"appresize",this.Md);this.N(a,"presentingplayerstatechange",this.mE);this.N(a,"videodatachange",this.sr);this.N(a,"videoplayerreset",this.kE);this.N(a,"autonavvisibility",this.ig,this);this.N(a,"minimized",this.Fe,this);this.N(a,"onFrescaStateChange",this.Fe,this);this.N(c,"click",this.EE,this);this.N(c,"dblclick",this.FE,this);b.za&&(this.N(c,"gesturechange",this.GE,this),this.N(c,"gestureend",this.HE,this));this.Ya=[c.containerElement,e.element,d.element,
this.G.element,this.ba.element]};
LP=function(a,b){if(!b)return!1;var c=a.g.app.D.na();if(c&&g.je(c,b))return c.controls;for(c=0;c<a.Ya.length;c++)if(g.je(a.Ya[c],b))return!1;return g.wo(b,"ytp-player-content")||g.wo(b,"html5-endscreen")||b==a.g.getRootNode()?!1:!0};
MP=function(a,b,c){a.g.isFullscreen()?c<1-b&&g.RL(a.g):c>1+b&&g.RL(a.g)};
NP=function(a){g.TN.call(this,{F:"div",M:"ytp-ad-persistent-progress-bar-container",J:[{F:"div",M:"ytp-ad-persistent-progress-bar"}]});this.A=a;this.D=this.ma["ytp-ad-persistent-progress-bar"];this.o=null;this.N(a,"presentingplayerstatechange",this.C);this.hide();this.C()};
QP=function(a,b){var c={F:"button",Z:["ytp-button","ytp-cards-button"],P:{"aria-label":g.Q("YTP_CARDS_BUTTON_ARIA_LABEL"),"aria-owns":"iv-drawer","aria-haspopup":!0},J:[{F:"span",M:"ytp-cards-button-icon-default",J:[g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-info-card"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},J:[{F:"path",Da:!0,M:"ytp-svg-fill",P:{d:"M18,8 C12.47,8 8,12.47 8,18 C8,23.52 12.47,28 18,28 C23.52,28 28,23.52 28,18 C28,12.47 23.52,8 18,8 L18,8 Z M17,16 L19,16 L19,24 L17,24 L17,16 Z M17,12 L19,12 L19,14 L17,14 L17,12 Z"}}]}]},
{F:"span",M:"ytp-cards-button-icon-shopping",J:[g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-shopping-card"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},J:[{F:"path",M:"ytp-svg-shadow",P:{d:"M 27.99,18 A 9.99,9.99 0 1 1 8.00,18 9.99,9.99 0 1 1 27.99,18 z"}},{F:"path",M:"ytp-svg-fill",P:{d:"M 18,8 C 12.47,8 8,12.47 8,18 8,23.52 12.47,28 18,28 23.52,28 28,23.52 28,18 28,12.47 23.52,8 18,8 z m -4.68,4 4.53,0 c .35,0 .70,.14 .93,.37 l 5.84,5.84 c .23,.23 .37,.58 .37,.93 0,.35 -0.13,.67 -0.37,.90 L 20.06,24.62 C 19.82,24.86 19.51,25 19.15,25 c -0.35,0 -0.70,-0.14 -0.93,-0.37 L 12.37,18.78 C 12.13,18.54 12,18.20 12,17.84 L 12,13.31 C 12,12.59 12.59,12 13.31,12 z m .96,1.31 c -0.53,0 -0.96,.42 -0.96,.96 0,.53 .42,.96 .96,.96 .53,0 .96,-0.42 .96,-0.96 0,-0.53 -0.42,-0.96 -0.96,-0.96 z",
"fill-opacity":"1"}},{F:"path",M:"ytp-svg-shadow-fill",P:{d:"M 24.61,18.22 18.76,12.37 C 18.53,12.14 18.20,12 17.85,12 H 13.30 C 12.58,12 12,12.58 12,13.30 V 17.85 c 0,.35 .14,.68 .38,.92 l 5.84,5.85 c .23,.23 .55,.37 .91,.37 .35,0 .68,-0.14 .91,-0.38 L 24.61,20.06 C 24.85,19.83 25,19.50 25,19.15 25,18.79 24.85,18.46 24.61,18.22 z M 14.27,15.25 c -0.53,0 -0.97,-0.43 -0.97,-0.97 0,-0.53 .43,-0.97 .97,-0.97 .53,0 .97,.43 .97,.97 0,.53 -0.43,.97 -0.97,.97 z",fill:"#000","fill-opacity":"0.15"}}]}]}]};
g.U.call(this,c);this.R=a;this.B=b;this.o=null;this.A=new g.iO(this,250,!0,100);g.J(this,this.A);this.hide();this.ga("click",this.C);this.ga("mouseover",this.D);OP(this,!0);c=new PP(a,this);g.J(this,c);g.jM(a,c.element,6)};
OP=function(a,b){b?a.o=RP(a.B.o,a.element):(a.o(),a.o=null)};
PP=function(a,b){g.U.call(this,{F:"div",M:"ytp-cards-teaser",J:[{F:"div",M:"ytp-cards-teaser-box"},{F:"div",M:"ytp-cards-teaser-text",J:[{F:"span",M:"ytp-cards-teaser-label",J:["{{text}}"]}]}]});this.R=a;this.C=new g.iO(this,250,!1,250);g.J(this,this.C);this.G=b;this.o=null;this.K=new g.O(this.UD,300,this);this.H=new g.O(this.RD,2E3,this);this.L=new g.po(null);this.D=[];this.B=this.A=null;this.N(b.element,"mouseover",this.ur);this.N(b.element,"mouseout",this.hf);this.N(a,"cardsteasershow",this.YE);
this.N(a,"cardsteaserhide",this.Oh);this.N(a,"cardstatechange",this.fu);this.N(a,"presentingplayerstatechange",this.fu);this.ga("click",this.IA);this.ga("mouseenter",this.HA)};
SP=function(a,b){a.pa("text",b.teaserText);a.element.setAttribute("dir",g.qo(a.L,b.teaserText));a.C.show();a.A=new g.O(function(){g.L(this.R.getRootNode(),"ytp-cards-teaser-shown")},0,a);
a.A.start();OP(a.G,!1);a.o=new g.O(a.Oh,580+b.durationMs,a);a.o.start();a.D.push(a.ga("mouseover",a.ur,a));a.D.push(a.ga("mouseout",a.hf,a))};
g.UP=function(a,b,c,d){g.TN.call(this,a);this.priority=b;c&&g.TP(this,c);d&&this.Fb(d)};
g.VP=function(a,b,c){a=void 0===a?{}:a;b=void 0===b?[]:b;c=void 0===c?!1:c;b.push("ytp-menuitem");"role"in a||(a.role="menuitem");c||"tabindex"in a||(a.tabindex=0);return{F:c?"a":"div",Z:b,P:a,J:[{F:"div",M:"ytp-menuitem-label",J:["{{label}}"]},{F:"div",M:"ytp-menuitem-content",J:["{{content}}"]}]}};
g.TP=function(a,b){a.pa("label",b)};
WP=function(a,b,c,d,e){var f={F:"div",M:"ytp-panel"};if(c){var k="ytp-panel-title";var l={F:"div",M:"ytp-panel-header",J:[{F:"button",Z:["ytp-button",k],J:[c]}]};if(e){var m="ytp-panel-options";l.J.push({F:"button",Z:["ytp-button",m],J:[d]})}f.J=[l]}g.TN.call(this,f);this.W=b;b.ra(this.element);this.fa=!1;c&&(this.N(this.ma[k],"click",this.la),this.fa=!0,e&&this.N(this.ma[m],"click",e));b.subscribe("size-change",this.ha,this);this.N(a,"fullscreentoggled",this.ha)};
g.XP=function(a,b,c,d,e){b=new g.TN({F:"div",M:"ytp-panel-menu",P:{role:"menu",id:void 0===b?null:b}});WP.call(this,a,b,c,d,e);this.D=b;g.J(this,this.D);this.Ia=[]};
g.ZP=function(a,b,c){if(void 0===c?0:c)a.Ia.push(b),a.D.element.appendChild(b.element);else{c=g.Cb(a.Ia,b,YP);if(0<=c)return;c=~c;g.zb(a.Ia,c,0,b);ce(a.D.element,b.element,c)}b.subscribe("size-change",a.X,a);a.D.U("size-change")};
g.$P=function(a,b){b.unsubscribe("size-change",a.X,a);a.ka()||(g.tb(a.Ia,b),a.D.element.removeChild(b.element),a.D.U("size-change"))};
g.aQ=function(a){for(var b=g.ma(a.Ia),c=b.next();!c.done;c=b.next())c.value.unsubscribe("size-change",a.X,a);a.Ia=[];g.ae(a.D.element);a.D.U("size-change")};
YP=function(a,b){return b.priority-a.priority};
g.bQ=function(a,b){GP.call(this,a,{F:"div",Z:["ytp-popup",b||null]},100,!0);this.o=[];this.size=new g.Cd(0,0);this.D=this.G=null;this.T=this.W=0;this.ga("keydown",this.ZA)};
cQ=function(a){g.mh(a.element,a.W||"100%",a.T||"100%");var b=a.o[a.o.length-1];b.element.style.width="";b.element.style.height="";b.element.style.maxWidth="100%";b.element.style.maxHeight="100%";b.W.element.style.height="";var c=g.oh(b.element);c.width+=1;c.height+=1;b.element.style.width=c.width+"px";b.element.style.height=c.height+"px";b.element.style.maxWidth="";b.element.style.maxHeight="";var d=0;b.fa&&(d=g.oh(b.ma["ytp-panel-header"]).height);b.W.element.style.height=c.height-d+"px";a.size=
c};
g.eQ=function(a,b){var c=a.o[a.o.length-1];a.o.push(b);dQ(a,c,b)};
g.fQ=function(a){var b=a.o.pop(),c=a.o[0];a.o=[c];dQ(a,b,c,!0)};
dQ=function(a,b,c,d){gQ(a);!g.wo(c.element,"ytp-panel-animate-back")&&g.wo(c.element,"ytp-panel-animate-forward");b&&(b.unsubscribe("size-change",a.gi,a),b.unsubscribe("back",a.xd,a));c.subscribe("size-change",a.gi,a);c.subscribe("back",a.xd,a);if(a.g){g.L(c.element,d?"ytp-panel-animate-back":"ytp-panel-animate-forward");c.ra(a.element);c.focus();a.element.scrollLeft=0;a.element.scrollTop=0;var e=a.size;cQ(a);g.mh(a.element,e);a.G=new g.O(g.B(a.pG,b,c,d),20,a);a.G.start()}else c.ra(a.element),b&&
b.detach()};
gQ=function(a){a.G&&g.Go(a.G);a.D&&g.Go(a.D)};
hQ=function(a){var b=g.VP({"aria-haspopup":!0});g.UP.call(this,b,a);this.ga("keydown",this.o)};
iQ=function(a,b){a.element.setAttribute("aria-haspopup",b)};
jQ=function(a,b){var c=g.VP({role:"menuitemcheckbox","aria-checked":!1});g.UP.call(this,c,b,a,{F:"div",M:"ytp-menuitem-toggle-checkbox"});this.o=!1;this.ga("click",this.K)};
kQ=function(a,b){a.o=b;a.element.setAttribute("aria-checked",a.o)};
nQ=function(a,b,c){g.XP.call(this,a);this.R=a;this.O=b;this.L=c;this.B=new hQ(8);g.J(this,this.B);g.ZP(this,this.B,!0);this.B.ga("click",this.jD,this);mM(a,this.B,28659);this.A=new hQ(7);g.J(this,this.A);g.ZP(this,this.A,!0);this.A.ga("click",this.iD,this);mM(a,this.A,28660);this.o=new hQ(6);g.J(this,this.o);g.ZP(this,this.o,!0);this.o.ga("click",this.gD,this);mM(a,this.o,28658);this.G=new jQ(g.Q("YTP_LOOP"),5);g.J(this,this.G);g.ZP(this,this.G,!0);this.G.ga("click",this.yD,this);mM(a,this.G,28661);
this.T=new g.UP(g.VP({href:"{{href}}",target:"_blank"},void 0,!0),4,g.Q("YTP_TROUBLESHOOT_ISSUE"));g.J(this,this.T);g.ZP(this,this.T,!0);this.T.ga("click",this.yE,this);this.K=new hQ(3);g.J(this,this.K);g.ZP(this,this.K,!0);this.K.ga("click",this.fD,this);b=new g.UP(g.VP(),2,g.Q("YTP_SHOW_VIDEO_INFO"));g.J(this,b);g.ZP(this,b,!0);b.ga("click",this.PE,this);this.H=new g.TN({F:"div",Z:["ytp-copytext","ytp-no-contextmenu"],P:{draggable:!1,tabindex:1},J:["{{text}}"]});g.J(this,this.H);this.H.ga("click",
this.OC,this);this.da=new WP(a,this.H);g.J(this,this.da);this.C=null;b=window.document.queryCommandSupported&&window.document.queryCommandSupported("copy");g.es&&g.uc(43)&&(b=!0);g.dB&&!g.uc(41)&&(b=!1);b&&(this.C=new g.U({F:"textarea",M:"ytp-html5-clipboard"}),g.J(this,this.C),this.C.ra(this.element));this.N(a,"loopchange",this.xD);this.N(a,"videodatachange",this.KA);lQ(this);mQ(this,this.R.ca())};
oQ=function(a,b){if(a.C){a.C.element.value=b;a.C.element.select();try{var c=window.document.execCommand("copy")}catch(d){}}c?a.L.sb():(a.H.Fb(b,"text"),g.eQ(a.L,a.da),gH(a.H.element),a.C&&(a.C=null,lQ(a)));return c};
mQ=function(a,b){var c=g.W(a.R),d=2!=a.R.Ha()||b.isListed,d=!c.H&&!!b.videoId&&d;"play"!=c.o?c="https://support.google.com/youtube/?p=report_playback":(c={contact_type:"playbackissue",html5:1,plid:b.playbackId,ei:b.eventId,v:b.videoId,p:"movies_playback"},b.Ba&&(c.fmt=Kw(b.Ba)),b.clientPlaybackNonce&&(c.cpn=b.clientPlaybackNonce),b.jf&&(c.partnerid=b.jf),c=g.wg("//support.google.com/googleplay/",c));a.o.rb(d&&b.allowEmbed);a.B.rb(d);a.A.rb(d&&!b.xa);a.T.Fb(c,"href")};
lQ=function(a){var b=!!a.C;g.TP(a.K,g.Q(b?"YTP_COPY_DEBUG_INFO":"YTP_GET_DEBUG_INFO"));iQ(a.K,!b);g.TP(a.o,g.Q(b?"YTP_EMBED_COPY":"YTP_GET_EMBED"));iQ(a.o,!b);g.TP(a.B,g.Q(b?"YTP_COPY_VIDEO_URL":"YTP_GET_VIDEO_URL"));iQ(a.B,!b);g.TP(a.A,g.Q(b?"YTP_COPY_VIDEO_URL_AT_TIME":"YTP_GET_VIDEO_URL_AT_TIME"));iQ(a.A,!b)};
pQ=function(a,b){g.oM(a.R,a.o,b);g.oM(a.R,a.B,b);g.oM(a.R,a.A,b);g.oM(a.R,a.G,b)};
rQ=function(a,b){g.bQ.call(this,a);this.A=a;this.X=b;this.B=new g.dt(this);g.J(this,this.B);this.H=null;mM(a,this,28656);g.L(this.element,"ytp-contextmenu");g.W(a).G&&g.L(this.element,"ytp-dni");qQ(this);this.hide()};
qQ=function(a){g.ft(a.B);"gvn"!=g.W(a.A).o&&a.B.N(g.PL(a.A),"contextmenu",a.NC)};
sQ=function(a){a.A.isFullscreen()?g.jM(a.A,a.element,10):a.ra(window.document.body)};
tQ=function(a,b,c,d,e,f){g.dt.call(this);this.g=a;this.G=c;this.C=d;this.o=e;this.D=f;this.B=new g.O(g.B(this.yr,!1),1E3,this);g.J(this,this.B);this.A="";a=g.B(this.sn,!1);this.N(b,"mousedown",a);this.N(c.element,"mousedown",a);this.N(b,"keydown",this.cq);this.N(c.element,"keydown",this.cq);this.N(b,"keyup",this.eq);this.N(c.element,"keyup",this.eq)};
vQ=function(a,b,c){var d=!1,e=g.W(a.g);if(!e.Ge){switch(b){case 80:c&&(sP(a.o),a.g.Gh(),d=!0);break;case 78:c&&(oP(a.o,jr(),g.Q("YTP_NEXT")),a.g.Cg(),d=!0);break;case 74:a.g.Lc()&&(oP(a.o,g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-rewind-ten-seconds"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},J:[{F:"path",Da:!0,M:"ytp-svg-fill",P:{d:"M 18,11 V 7 l -5,5 5,5 v -4 c 3.3,0 6,2.7 6,6 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 h -2 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 0,-4.4 -3.6,-8 -8,-8 z M 16.9,22 H 16 V 18.7 L 15,19 v -0.7 l 1.8,-0.6 h .1 V 22 z m 4.3,-1.8 c 0,.3 0,.6 -0.1,.8 l -0.3,.6 c 0,0 -0.3,.3 -0.5,.3 -0.2,0 -0.4,.1 -0.6,.1 -0.2,0 -0.4,0 -0.6,-0.1 -0.2,-0.1 -0.3,-0.2 -0.5,-0.3 -0.2,-0.1 -0.2,-0.3 -0.3,-0.6 -0.1,-0.3 -0.1,-0.5 -0.1,-0.8 v -0.7 c 0,-0.3 0,-0.6 .1,-0.8 l .3,-0.6 c 0,0 .3,-0.3 .5,-0.3 .2,0 .4,-0.1 .6,-0.1 .2,0 .4,0 .6,.1 .2,.1 .3,.2 .5,.3 .2,.1 .2,.3 .3,.6 .1,.3 .1,.5 .1,.8 v .7 z m -0.9,-0.8 v -0.5 c 0,0 -0.1,-0.2 -0.1,-0.3 0,-0.1 -0.1,-0.1 -0.2,-0.2 -0.1,-0.1 -0.2,-0.1 -0.3,-0.1 -0.1,0 -0.2,0 -0.3,.1 l -0.2,.2 c 0,0 -0.1,.2 -0.1,.3 v 2 c 0,0 .1,.2 .1,.3 0,.1 .1,.1 .2,.2 .1,.1 .2,.1 .3,.1 .1,0 .2,0 .3,-0.1 l .2,-0.2 c 0,0 .1,-0.2 .1,-0.3 v -1.5 z"}}]}),
a.g.td(-10*a.g.Vb()),d=!0);break;case 76:a.g.Lc()&&(oP(a.o,g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-forward-ten-seconds"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},J:[{F:"path",Da:!0,M:"ytp-svg-fill",P:{d:"m 10,19 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 h -2 c 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 0,-3.3 2.7,-6 6,-6 v 4 l 5,-5 -5,-5 v 4 c -4.4,0 -8,3.6 -8,8 z m 6.8,3 H 16 V 18.7 L 15,19 v -0.7 l 1.8,-0.6 h .1 V 22 z m 4.3,-1.8 c 0,.3 0,.6 -0.1,.8 l -0.3,.6 c 0,0 -0.3,.3 -0.5,.3 C 20,21.9 19.8,22 19.6,22 19.4,22 19.2,22 19,21.9 18.8,21.8 18.7,21.7 18.5,21.6 18.3,21.5 18.3,21.3 18.2,21 18.1,20.7 18.1,20.5 18.1,20.2 v -0.7 c 0,-0.3 0,-0.6 .1,-0.8 l .3,-0.6 c 0,0 .3,-0.3 .5,-0.3 .2,0 .4,-0.1 .6,-0.1 .2,0 .4,0 .6,.1 .2,.1 .3,.2 .5,.3 .2,.1 .2,.3 .3,.6 .1,.3 .1,.5 .1,.8 v .7 z m -0.8,-0.8 v -0.5 c 0,0 -0.1,-0.2 -0.1,-0.3 0,-0.1 -0.1,-0.1 -0.2,-0.2 -0.1,-0.1 -0.2,-0.1 -0.3,-0.1 -0.1,0 -0.2,0 -0.3,.1 l -0.2,.2 c 0,0 -0.1,.2 -0.1,.3 v 2 c 0,0 .1,.2 .1,.3 0,.1 .1,.1 .2,.2 .1,.1 .2,.1 .3,.1 .1,0 .2,0 .3,-0.1 l .2,-0.2 c 0,0 .1,-0.2 .1,-0.3 v -1.5 z"}}]}),
a.g.td(10*a.g.Vb()),d=!0);break;case 77:a.g.zc()?(a.g.Ae(),qP(a.o,a.g.getVolume(),!1)):(a.g.mute(),qP(a.o,0,!0));d=!0;break;case 75:d=!aG(g.OL(a.g));pP(a.o,d);d?a.g.jc():a.g.ac();d=!0;break;case 190:if(c){if(e.Ka)for(b=a.g.Bg(),c=a.g.Vb(),e=0;e<b.length-1;e++)b[e]==c&&(d=b[e+1],a.g.de(d,!0),rP(a.o,d,!1),d=!0)}else a.g.Lc()&&(uQ(a,1),d=!0);break;case 188:if(c){if(e.Ka)for(b=a.g.Bg(),c=a.g.Vb(),e=b.length-1;1<=e;e--)b[e]==c&&(d=b[e-1],a.g.de(d,!0),rP(a.o,d,!0),d=!0)}else a.g.Lc()&&(uQ(a,-1),d=!0);break;
case 70:VO(a.g)&&(g.RL(a.g),d=!0)}d&&a.C.Eb(2,!0)}return d};
xQ=function(a,b,c,d){if(g.IL(a.g).g){for(var e=a.g.Rf(),f,k=0;k<g.wQ.length;k++){var l=g.wQ[k];if(l.option==b){f=l.options;break}}for(var m,k=0;k<f.length;k++)f[k].option==e[b]&&(m=k);if(d)if(c){if(0==m)return!1}else if(m==f.length-1)return!1;d={};d[b]=f[(m+(c?f.length-1:1))%f.length].option;a.g.vj(d);a.yr(!0);a.B.start();return!0}return!1};
uQ=function(a,b){a.g.Lc();if(g.T(g.OL(a.g),4)){var c=a.g.ca().Ba;c&&(c=c.video)&&a.g.td(b/(c.fps||30))}};
zQ=function(a,b){g.U.call(this,{F:"div",M:"ytp-pause-overlay",J:[{F:"div",M:"ytp-suggestions"}]});this.o=a;this.da=b;this.B=new g.dt(this);g.J(this,this.B);this.K=new g.iO(this,250,!1,100);g.J(this,this.K);var c=g.W(a);this.D=[];this.A=[];this.G=0;this.fa=c.A&&!c.G;this.X=!1;this.T=new g.U({F:"button",Z:["ytp-button","ytp-previous"],P:{"aria-label":g.Q("YTP_PREVIOUS")},J:[g.ar()]});g.J(this,this.T);this.T.ra(this.element);this.T.ga("click",this.bB,this);c=g.es||g.Yg?{style:"will-change: opacity"}:
null;this.ba=new yQ((0,g.A)(this.ju,this));g.J(this,this.ba);this.W=this.C=0;this.O=this.ma["ytp-suggestions"];for(var d=0;16>d;d++){var e=new g.U({F:"a",M:"ytp-suggestion-link",P:{href:"{{link}}",target:"_blank"},J:[{F:"div",M:"ytp-suggestion-image"},{F:"div",M:"ytp-suggestion-overlay",P:c,J:[{F:"div",M:"ytp-suggestion-title",J:["{{title}}"]},{F:"div",M:"ytp-suggestion-author",J:["{{author_and_views}}"]},{F:"div",M:"ytp-suggestion-duration",J:["{{duration}}"]}]}]});g.J(this,e);e.ra(this.O);var f=
e.ma["ytp-suggestion-link"];g.Vg(f,"transitionDelay",d/20+"s");this.B.N(f,"click",g.B(this.IC,d));this.D.push(e)}this.L=new g.U({F:"button",Z:["ytp-button","ytp-next"],P:{"aria-label":g.Q("YTP_NEXT")},J:[g.br()]});g.J(this,this.L);this.L.ra(this.element);this.L.ga("click",this.aB,this);c=new g.U({F:"button",Z:["ytp-button","ytp-collapse"],P:{"aria-label":g.Q("YTP_CLOSE")},J:[g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-small-close"]}:{F:"svg",P:{height:"100%",viewBox:"0 0 16 16",width:"100%"},J:[{F:"path",
P:{d:"M13 4L12 3 8 7 4 3 3 4 7 8 3 12 4 13 8 9 12 13 13 12 9 8z",fill:"#fff"}}]}]});g.J(this,c);c.ra(this.element);c.ga("click",this.EC,this);this.H=new g.U({F:"button",Z:["ytp-button","ytp-expand"],J:[g.Q("YTP_MORE_VIDEOS")]});g.J(this,this.H);this.H.ra(this.element);this.H.ga("click",this.GC,this);this.B.N(this.o,"appresize",this.Mm);this.B.N(this.o,"fullscreentoggled",this.cB);this.B.N(this.o,"presentingplayerstatechange",this.dB);this.B.N(this.o,"videodatachange",this.eB);this.Mm(g.PL(this.o).Na())};
BQ=function(a,b){var c=g.td(b,a.G-a.A.length*(a.W+8),0);a.ba.start(a.C,c,1E3);a.C=c;AQ(a)};
AQ=function(a){var b=a.C,c=a.G-a.A.length*(a.W+8);g.N(a.element,"ytp-scroll-min",0<=b);g.N(a.element,"ytp-scroll-max",b<=c)};
CQ=function(a){for(var b=g.W(a.o),c=0;c<a.A.length;c++){var d=a.A[c].zb(),e=a.D[c],f=d.shortViewCount?d.author+" \u2022 "+d.shortViewCount:d.author;e.element.style.display="";e.update({author_and_views:f,duration:d.lengthSeconds?g.WN(d.lengthSeconds):0,link:d.dj(b),title:d.title});e=e.ma["ytp-suggestion-image"];d=d.yb(b);e.style.backgroundImage=d?"url("+d+")":""}for(;c<a.D.length;c++)a.D[c].element.style.display="none";AQ(a)};
yQ=function(a){g.I.call(this);this.C=a;this.B=new lp(0,0,.4,0,.2,1,1,1);this.o=new g.Do(this.A,window,this);g.J(this,this.o)};
DQ=function(a,b,c){var d=b.zb(c),e=g.W(a),f=d.yb(e,"default.jpg");g.U.call(this,{F:"a",Z:["ytp-video-menu-item","ytp-button"],P:{role:"menuitemradio","aria-label":d.title,href:e.getVideoUrl(d.videoId,b.listId?b.listId.toString():null)},J:[{F:"div",M:"ytp-video-menu-item-index",J:[""+(c+1)]},{F:"div",M:"ytp-video-menu-item-now-playing",J:["\u25b6"]},{F:"div",M:"ytp-video-menu-item-thumbnail",P:{style:f?"background-image: url("+f+");":null}},{F:"div",M:"ytp-video-menu-item-title",J:[d.title]},{F:"div",
M:"ytp-video-menu-item-author",J:[d.author]}]});this.o=a;this.Za=c;this.ga("click",this.A)};
EQ=function(a){GP.call(this,a,{F:"div",M:"ytp-playlist-menu",P:{role:"dialog",id:"ytp_playlist_menu"},J:[{F:"div",M:"ytp-playlist-menu-header",J:[{F:"div",M:"ytp-playlist-menu-title",J:[{F:"a",M:"ytp-playlist-menu-title-name",P:{href:"{{playlisturl}}"},J:["{{title}}"]},{F:"button",Z:["ytp-playlist-menu-close","ytp-button"],P:{"aria-label":g.Q("YTP_CLOSE")},J:[g.fr()]}]},{F:"div",M:"ytp-playlist-menu-subtitle",J:["{{subtitle}}"]}]},{F:"div",M:"ytp-playlist-menu-items",P:{role:"menu"}}]},250);this.N(this.ma["ytp-playlist-menu-close"],
"click",this.sb);this.N(this.ma["ytp-playlist-menu-title-name"],"click",this.bF);this.A=a;this.B=this.H=this.o=null;this.Ia=this.ma["ytp-playlist-menu-items"];this.G=new g.dt(this);g.J(this,this.G);this.D=[];this.hide()};
FQ=function(a,b){if(a.o!=b)if(a.o&&a.o.unsubscribe("shuffle",a.Rj,a),a.o=b,a.H=null,b){b.subscribe("shuffle",a.Rj,a);var c=b.author;a.update({title:b.title,subtitle:g.Q(c?"YTP_PLAYLIST_AUTHOR_AND_POSITION":"YTP_PLAYLIST_POSITION",{AUTHOR:c,CURRENT_POSITION:b.Za+1,PLAYLIST_LENGTH:b.getLength()}),playlisturl:a.A.getVideoUrl(!0)});a.Rj()}else a.g&&a.hide();else a.o&&a.Rj()};
GQ=function(a,b,c){var d={F:"button",Z:["ytp-playlist-menu-button","ytp-button"],P:{title:"{{title}}","aria-owns":"ytp_playlist_menu","aria-haspopup":!0,"aria-label":g.Q("YTP_PLAYLIST")},J:[{F:"div",M:"ytp-playlist-menu-button-icon",J:[g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-playlist"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},J:[{F:"path",Da:!0,P:{d:"m 22.53,21.42 0,6.85 5.66,-3.42 -5.66,-3.42 0,0 z m -11.33,0 9.06,0 0,2.28 -9.06,0 0,-2.28 0,0 z m 0,-9.14 13.6,0 0,2.28 -13.6,0 0,-2.28 0,0 z m 0,4.57 13.6,0 0,2.28 -13.6,0 0,-2.28 0,0 z",
fill:"#fff"}}]}]},{F:"div",M:"ytp-playlist-menu-button-text",J:["{{text}}"]}]};g.U.call(this,d);this.B=a;this.o=null;this.C=b.o;this.N(a,"videodatachange",this.D);this.N(a,"onPlaylistUpdate",this.D);this.N(a,"presentingplayerstatechange",this.A);this.N(a,"appresize",this.A);this.hide();this.D();g.te(this,RP(this.C,this.element));this.ga("click",(0,g.A)(c.pf,c,this.element,!1))};
HQ=function(a,b){g.U.call(this,{F:"button",Z:["ytp-replay-button","ytp-button"],P:{title:g.Q("YTP_REPLAY")},J:[or()]});this.o=a;this.N(a,"presentingplayerstatechange",this.B);this.ga("click",this.A,this);var c=g.OL(a);this.rb(g.T(c,2));RP(b.o,this.element)};
IQ=function(a,b){var c={F:"div",M:"ytp-share-panel",P:{id:"ytp-share-panel",role:"dialog","aria-labelledby":"ytp-share-panel-title"},J:[{F:"button",Z:["ytp-share-panel-close","ytp-button"],P:{title:g.Q("YTP_CLOSE")},J:[g.fr()]},{F:"div",M:"ytp-share-panel-inner-content",J:[{F:"div",M:"ytp-share-panel-title",P:{id:"ytp-share-panel-title"},J:[g.Q("YTP_SHARE")]},{F:"a",Z:["ytp-share-panel-link","ytp-no-contextmenu"],P:{href:"{{link}}",target:"_blank",title:g.Q("YTP_SHARE_LINK"),"aria-label":g.Q("YTP_SHARE_LINK")},
J:["{{linkText}}"]},{F:"label",M:"ytp-share-panel-include-playlist",J:[{F:"input",M:"ytp-share-panel-include-playlist-checkbox",P:{type:"checkbox",checked:!0}},g.Q("YTP_SHARE_WITH_PLAYLIST_2")]},{F:"div",M:"ytp-share-panel-loading-spinner",J:[SO()]},{F:"div",M:"ytp-share-panel-service-buttons",J:["{{buttons}}"]},{F:"div",M:"ytp-share-panel-error",J:[g.Q("YTP_SHARE_PANEL_ERROR")]}]}]};GP.call(this,a,c,250);this.o=a;this.A=b.o;this.B=[];this.T=this.ma["ytp-share-panel-inner-content"];this.G=this.ma["ytp-share-panel-close"];
this.N(this.G,"click",this.sb);g.te(this,RP(this.A,this.G));this.H=this.ma["ytp-share-panel-include-playlist-checkbox"];this.N(this.H,"click",this.Hr);this.D=this.ma["ytp-share-panel-link"];g.te(this,RP(this.A,this.D));this.ga("click",this.hE);this.N(a,"videoplayerreset",this.hide);this.N(a,"fullscreentoggled",this.uB);this.hide()};
JQ=function(a){switch(a){case "facebook":return g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-share-facebook"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 38 38",width:"100%"},J:[{F:"rect",P:{fill:"#fff",height:"34",width:"34",x:"2",y:"2"}},{F:"path",P:{d:"M 34.2,0 3.8,0 C 1.70,0 .01,1.70 .01,3.8 L 0,34.2 C 0,36.29 1.70,38 3.8,38 l 30.4,0 C 36.29,38 38,36.29 38,34.2 L 38,3.8 C 38,1.70 36.29,0 34.2,0 l 0,0 z m -1.9,3.8 0,5.7 -3.8,0 c -1.04,0 -1.9,.84 -1.9,1.9 l 0,3.8 5.7,0 0,5.7 -5.7,0 0,13.3 -5.7,0 0,-13.3 -3.8,0 0,-5.7 3.8,0 0,-4.75 c 0,-3.67 2.97,-6.65 6.65,-6.65 l 4.75,0 z",
fill:"#39579b"}}]};case "googleplus":return g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-share-googleplus"]}:{F:"svg",P:{height:"100%",version:"1.0",viewBox:"0 0 38 38",width:"100%"},J:[{F:"rect",P:{fill:"#fff",height:"34",width:"34",x:"2",y:"2"}},{F:"path",P:{d:"M34.3,0H3.7C1.7,0,0,1.7,0,3.7v30.5c0,2,1.7,3.7,3.7,3.7h30.5c2,0,3.7-1.7,3.7-3.7V3.7C38,1.7,36.3,0,34.3,0z M13.3,28.5c-5.2,0-9.5-4.3-9.5-9.5c0-5.2,4.3-9.5,9.5-9.5c2.6,0,4.7,.9,6.4,2.5l-2.7,2.7c-1-0.9-2.2-1.4-3.6-1.4 c-3.1,0-5.6,2.6-5.6,5.7s2.5,5.7,5.6,5.7c2.8,0,4.7-1.6,5.1-3.8h-5.1v-3.6h8.9c0.1,.6,.2,1.3,.2,2C22.4,24.6,18.8,28.5,13.3,28.5 z M34.2,19.6H31v3.2h-2.2v-3.2h-3.2v-2.2h3.2v-3.2H31v3.2h3.2V19.6z",
fill:"#dc4537"}}]};case "twitter":return g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-share-twitter"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 38 38",width:"100%"},J:[{F:"rect",P:{fill:"#fff",height:"34",width:"34",x:"2",y:"2"}},{F:"path",P:{d:"M 34.2,0 3.8,0 C 1.70,0 .01,1.70 .01,3.8 L 0,34.2 C 0,36.29 1.70,38 3.8,38 l 30.4,0 C 36.29,38 38,36.29 38,34.2 L 38,3.8 C 38,1.70 36.29,0 34.2,0 l 0,0 z M 29.84,13.92 C 29.72,22.70 24.12,28.71 15.74,29.08 12.28,29.24 9.78,28.12 7.6,26.75 c 2.55,.40 5.71,-0.60 7.41,-2.06 -2.50,-0.24 -3.98,-1.52 -4.68,-3.56 .72,.12 1.48,.09 2.17,-0.05 -2.26,-0.76 -3.86,-2.15 -3.95,-5.07 .63,.28 1.29,.56 2.17,.60 C 9.03,15.64 7.79,12.13 9.21,9.80 c 2.50,2.75 5.52,4.99 10.47,5.30 -1.24,-5.31 5.81,-8.19 8.74,-4.62 1.24,-0.23 2.26,-0.71 3.23,-1.22 -0.39,1.23 -1.17,2.09 -2.11,2.79 1.03,-0.14 1.95,-0.38 2.73,-0.77 -0.47,.99 -1.53,1.9 -2.45,2.66 l 0,0 z",
fill:"#01abf0"}}]};default:return null}};
KQ=function(a){for(var b=g.ma(a.B),c=b.next();!c.done;c=b.next())c=c.value,c.detach(),g.ue(c);a.B=[]};
LQ=function(a,b,c,d){g.U.call(this,{F:"button",Z:["ytp-button","ytp-share-button"],P:{title:g.Q("YTP_SHARE"),"aria-haspopup":!0,"aria-owns":"ytp-share-panel"},J:[{F:"div",M:"ytp-share-icon",J:["{{icon}}"]},{F:"div",M:"ytp-share-title",J:["{{share}}"]}]});this.o=a;this.A=d;this.H=c;mM(a,this,28664);this.ga("click",this.G);this.N(a,"videodatachange",this.C);this.N(a,"appresize",this.C);this.C();g.te(this,RP(b.o,this.element))};
MQ=function(a,b){g.U.call(this,{F:"button",Z:["ytp-airplay-button","ytp-button"],P:{title:g.Q("YTP_AIRPLAY")},J:["{{icon}}"]});this.o=a;this.ga("click",this.B);this.N(a,"airplayactivechange",this.A);this.N(a,"airplayavailabilitychange",this.A);this.A();g.te(this,RP(b.o,this.element))};
NQ=function(a,b){g.TN.call(this,{F:"div",M:"ytp-storyboard",J:[{F:"div",M:"ytp-storyboard-filmstrip",J:[{F:"div",M:"ytp-storyboard-thumbnail"}]},{F:"div",M:"ytp-storyboard-lens",J:[{F:"div",M:"ytp-storyboard-lens-thumbnail"},{F:"div",M:"ytp-storyboard-lens-timestamp-wrapper",J:[{F:"span",M:"ytp-storyboard-lens-timestamp"}]}]}]});this.o=a;this.da=b.o;this.T=new g.Fk(this.PA,250,this);g.J(this,this.T);this.K=g.PL(a).Na().width;this.A=this.ma["ytp-storyboard-filmstrip"];this.fa=this.ma["ytp-storyboard-lens"];
this.ha=this.ma["ytp-storyboard-lens-thumbnail"];this.la=this.ma["ytp-storyboard-lens-timestamp"];this.X=this.ma["ytp-storyboard-thumbnail"];g.de(this.X);this.L=0;this.W=!1;this.O=this.C=this.B=window.NaN;this.jb=this.D=null;this.G=new g.dt(this);g.J(this,this.G);this.H=new g.iO(this,100);g.J(this,this.H);this.N(this.o,"appresize",this.OA);this.N(this.o,"presentingplayerstatechange",this.QA)};
OQ=function(a,b){var c=!!a.jb;c&&a.jb.unsubscribe("l",a.gk,a);a.jb=b&&tF(b);a.W=!!b&&b.xa;a.jb?(c||(a.G.N(a.o,"videodatachange",a.RA),a.G.N(a.o,"progresssync",a.zj),a.G.N(a.o,"videoplayerreset",a.zj)),a.jb.subscribe("l",a.gk,a),a.O=window.NaN,a.B=window.NaN,a.C=window.NaN,a.zj(),a.H.show(200)):(c&&g.ft(a.G),a.T.stop(),g.Zt(a.L),a.H.hide(),a.H.stop())};
PQ=function(a,b,c,d){var e=a.X.cloneNode(!1);a=DD(a.jb,b,c);uO(e,a,c,d);return e};
QQ=function(a){g.U.call(this,{F:"div",M:"ytp-storyboard-framepreview",J:[{F:"div",M:"ytp-storyboard-framepreview-img"}]});this.D=this.ma["ytp-storyboard-framepreview-img"];this.o=a;this.jb=null;this.C=window.NaN;this.A=new g.dt(this);g.J(this,this.A);this.B=new g.iO(this,100);g.J(this,this.B);this.N(this.o,"presentingplayerstatechange",this.UA)};
SQ=function(a,b){var c=!!a.jb;a.jb=b&&tF(b);a.jb?(c||(a.A.N(a.o,"videodatachange",a.WA),a.A.N(a.o,"progresssync",a.VA),a.A.N(a.o,"appresize",a.TA)),a.C=window.NaN,RQ(a),a.B.show(200)):(c&&g.ft(a.A),a.B.hide(),a.B.stop())};
RQ=function(a){var b=a.o.getCurrentTime(),c=g.PL(a.o).Na(),d=BD(a.jb,c.width),b=a.jb.g[d].qk(b);b!=a.C&&(a.C=b,FD(a.jb,b,c.width),b=DD(a.jb,b,c.width),uO(a.D,b,c.width,c.height))};
UQ=function(a,b){g.U.call(this,{F:"button",Z:["ytp-fullscreen-button","ytp-button"],P:{title:"{{title}}"},J:["{{icon}}"]});this.A=a;this.D=b;this.o=null;this.B=RP(b.o,this.element);this.C=new g.O(this.Aw,2E3,this);g.J(this,this.C);this.N(a,"fullscreentoggled",this.Kt);this.N(a,"presentingplayerstatechange",this.xr);this.ga("click",this.XA);if(Ks()){var c=g.PL(this.A);this.N(c,Ns(),this.rs);this.N(c,Os(window.document),this.YA)}g.W(a).za||TQ(this);this.xr();this.Kt(a.isFullscreen())};
TQ=function(a){if(!a.o){var b=g.Q(null!=Hs(["requestFullscreen","webkitRequestFullscreen","mozRequestFullScreen","msRequestFullscreen"],window.document.body)?"YTP_FULLSCREEN_GENERIC_ERROR":"YTP_FULLSCREEN_UNSUPPORTED_ERROR").split(/\$(BEGIN|END)_LINK/);a.o=new GP(a.A,{F:"div",Z:["ytp-popup","ytp-generic-popup"],P:{role:"alert",tabindex:0},J:[b[0],{F:"a",P:{href:"https://support.google.com/youtube/answer/6276924",target:"_blank"},J:[b[2]]},b[4]]},100,!0);a.o.hide();g.J(a,a.o);a.o.subscribe("show",
(0,g.A)(a.D.fl,a.D,a.o));g.jM(a.A,a.o.element,5);a.element.setAttribute("aria-disabled",!0);a.element.setAttribute("aria-haspopup",!0);a.B();a.B=null}};
VQ=function(a){var b={F:"div",M:"ytp-multicam-menu",P:{role:"dialog"},J:[{F:"div",M:"ytp-multicam-menu-header",J:[{F:"div",M:"ytp-multicam-menu-title",J:[g.Q("YTP_SWITCH_CAMERA"),{F:"button",Z:["ytp-multicam-menu-close","ytp-button"],P:{"aria-label":g.Q("YTP_CLOSE")},J:[g.fr()]}]}]},{F:"div",M:"ytp-multicam-menu-items"}]};GP.call(this,a,b,250);this.B=new g.dt(this);g.J(this,this.B);this.N(this.ma["ytp-multicam-menu-close"],"click",this.sb);this.o=a;this.Ia=this.ma["ytp-multicam-menu-items"];this.A=
[];this.hide()};
WQ=function(a,b,c){g.U.call(this,{F:"button",Z:["ytp-multicam-button","ytp-button"],P:{title:g.Q("YTP_SWITCH_CAMERA"),"aria-haspopup":!0,"data-preview":"{{preview}}","data-tooltip-text":"{{text}}"},J:[g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-switch-camera"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},J:[{F:"path",Da:!0,P:{d:"M 26,10 22.83,10 21,8 15,8 13.17,10 10,10 c -1.1,0 -2,.9 -2,2 l 0,12 c 0,1.1 .9,2 2,2 l 16,0 c 1.1,0 2,-0.9 2,-2 l 0,-12 c 0,-1.1 -0.9,-2 -2,-2 l 0,0 z m -5,11.5 0,-2.5 -6,0 0,2.5 -3.5,-3.5 3.5,-3.5 0,2.5 6,0 0,-2.5 3.5,3.5 -3.5,3.5 0,0 z",
fill:"#fff"}}]}]});this.o=a;this.C=!1;this.A=b.o;this.D=new g.O(this.H,400,this);g.J(this,this.D);this.ga("click",(0,g.A)(c.pf,c,this.element,!1));this.N(a,"presentingplayerstatechange",g.B(this.B,!1));this.N(a,"videodatachange",this.G);this.B(!0);g.te(this,RP(this.A,this.element))};
XQ=function(){g.I.call(this);this.A=null;this.C=this.g=0;this.B=new g.Do(this.o,null,this);g.J(this,this.B)};
YQ=function(a,b){if("path"==b.F)return b.P.d;if(b.J)for(var c=0;c<b.J.length;c++){var d=b.J[c];if(d&&!g.u(d)&&(d=YQ(a,d)))return d}};
bR=function(a,b,c){c=YQ(a,c);var d=b.getElementsByTagName("path")[0],e=d.getAttribute("d");if(d.getAttribute("id")){var f=g.bH.g();b=b.getElementsByTagName("use");for(var k=0;k<b.length;k++)b[k].setAttributeNS("http://www.w3.org/1999/xlink","href","#"+f);d.setAttribute("id",f)}var l=ZQ(e),m=ZQ(c);$Q(a,function(a){d.setAttribute("d",aR(l,m,a))},200)};
$Q=function(a,b,c){a.A=b;a.C=(0,g.Ot)();a.g=c;a.o()};
ZQ=function(a){var b=[];a=a.match(cR);for(var c=0;c<a.length;c++){var d=(0,window.parseFloat)(a[c]);b.push((0,window.isNaN)(d)?a[c]:d)}return b};
aR=function(a,b,c){var d,e="";for(d=0;d<a.length;d++)var f=a[d],e=g.pa(f)?e+(f+(b[d]-f)*c):e+f;return e};
eR=function(a,b){var c=g.W(a);g.U.call(this,{F:"button",Z:["ytp-mute-button","ytp-button"],P:c.K?{title:"{{title}}"}:{"aria-disabled":!0,"aria-haspopup":!0},J:["{{icon}}"]});this.pa("icon",ur());this.o=a;this.fa=b.o;this.K=this.O=this.L=this.W=window.NaN;this.G=[];this.D=[];this.H=this.B=!1;g.W(this.o).ba||(this.A=new g.bH({F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},J:[{F:"defs",J:[{F:"clipPath",P:{id:"ytp-svg-volume-animation-mask"},J:[{F:"path",P:{d:"m 14.35,-0.14 -5.86,5.86 20.73,20.78 5.86,-5.91 z"}},
{F:"path",P:{d:"M 7.07,6.87 -1.11,15.33 19.61,36.11 27.80,27.60 z"}},{F:"path",M:"ytp-svg-volume-animation-mover",P:{d:"M 9.09,5.20 6.47,7.88 26.82,28.77 29.66,25.99 z"}}]},{F:"clipPath",P:{id:"ytp-svg-volume-animation-slash-mask"},J:[{F:"path",M:"ytp-svg-volume-animation-mover",P:{d:"m -11.45,-15.55 -4.44,4.51 20.45,20.94 4.55,-4.66 z"}}]}]},{F:"path",Da:!0,Z:["ytp-svg-fill","ytp-svg-volume-animation-speaker"],P:{"clip-path":"url(#ytp-svg-volume-animation-mask)",d:"M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 Z",
fill:"#fff"}},{F:"path",Da:!0,Z:["ytp-svg-fill","ytp-svg-volume-animation-hider"],P:{"clip-path":"url(#ytp-svg-volume-animation-slash-mask)",d:"M 9.25,9 7.98,10.27 24.71,27 l 1.27,-1.27 Z",fill:"#fff"}}]}),g.J(this,this.A),this.X=this.A.ma["ytp-svg-volume-animation-speaker"],this.oa=this.X.getAttribute("d"),this.G=g.Kd("ytp-svg-volume-animation-mover",this.A.element),this.D=g.Kd("ytp-svg-volume-animation-hider",this.A.element));this.C=null;this.ba=new XQ;g.J(this,this.ba);this.T=new XQ;g.J(this,this.T);
this.ga("click",this.la);this.N(a,"appresize",this.tc);this.N(a,"onVolumeChange",this.ha);var d=null;c.K?g.te(this,RP(b.o,this.element)):(c=g.Q("YTP_VOLUME_UNSUPPORTED_ERROR").split(/\$(BEGIN|END)_LINK/),d=new GP(a,{F:"span",Z:["ytp-popup","ytp-generic-popup"],P:{tabindex:0},J:[c[0],{F:"a",P:{href:"https://support.google.com/youtube/?p=noaudio",target:"_blank"},J:[c[2]]},c[4]]},100,!0),g.J(this,d),d.hide(),d.subscribe("show",(0,g.A)(b.fl,b,d)),g.jM(a,d.element,5));this.da=d;mM(a,this,28662);this.tc(g.PL(a).Na());
dR(this,a.getVolume(),a.zc())};
dR=function(a,b,c){var d=c?0:b/100,e=g.W(a.o);if(e.ba)d=0==d?ur():0<d&&.5>d?tr():sr(),d!=a.C&&(a.pa("icon",d),a.C=d);else{b=0==d?1:50<b?1:0;if(a.L!=b){var f=a.W;(0,window.isNaN)(f)?fR(a,b):$Q(a.ba,(0,g.A)(function(a){fR(this,f+(this.L-f)*a)},a),250);
a.L=b}d=0==d?1:0;if(a.K!=d){var k=a.O;(0,window.isNaN)(k)?gR(a,d):$Q(a.T,(0,g.A)(function(a){gR(this,k+(this.K-k)*a)},a),250);
a.K=d}}e.K&&(a.pa("title",c?g.Q("YTP_UNMUTE"):g.Q("YTP_MUTE")),hR(a.fa))};
fR=function(a,b){a.W=b;var c=a.oa;b&&(c+=aR(iR,jR,b));a.X.setAttribute("d",c)};
gR=function(a,b){a.O=b;for(var c=20*b,d=0;d<a.G.length;d++)a.G[d].setAttribute("transform","translate("+c+", "+c+")");var e;1==b?e=ur():e=a.A;for(c=0;c<a.D.length;c++)a.D[c].style.display=0==b?"none":"";e!=a.C&&(a.pa("icon",e),a.C=e)};
kR=function(a,b){g.U.call(this,{F:"button",Z:["ytp-pip-button","ytp-button"],P:{title:g.Q("YTP_PIP")},J:[g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-pip"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},J:[{F:"path",Da:!0,P:{d:"M25,17 L17,17 L17,23 L25,23 L25,17 L25,17 Z M29,25 L29,10.98 C29,9.88 28.1,9 27,9 L9,9 C7.9,9 7,9.88 7,10.98 L7,25 C7,26.1 7.9,27 9,27 L27,27 C28.1,27 29,26.1 29,25 L29,25 Z M27,25.02 L9,25.02 L9,10.97 L27,10.97 L27,25.02 L27,25.02 Z",fill:"#fff"}}]}]});
this.o=a;this.ga("click",this.A);g.te(this,RP(b.o,this.element))};
mR=function(a,b){g.U.call(this,{F:"button",Z:["ytp-play-button","ytp-button"],P:{title:"{{title}}","aria-label":"{{label}}"},J:["{{icon}}"]});this.o=a;this.A=null;this.C=b.o;this.B=null;this.D=new XQ;g.J(this,this.D);this.N(a,"fullscreentoggled",this.G);this.N(a,"presentingplayerstatechange",this.H);this.N(a,"videodatachange",this.G);lR(this,g.OL(a));this.ga("click",this.K,this)};
nR=function(a){switch(a){case 1:return mr();case 2:return lr();case 3:return or();case 4:return rr();default:return null}};
lR=function(a,b){var c=g.AF(a.o.ca()),d=!1;if(aG(b))var e=c?4:2;else g.T(b,2)?(e=3,d=c):e=1;a.element.disabled=d;if(a.A!=e){switch(e){case 2:var f=g.Q("YTP_PAUSE");break;case 3:f=g.Q("YTP_REPLAY");break;case 1:f=g.Q("YTP_PLAY");break;case 4:f=g.Q("YTP_STOP")}3==e?(a.B||(a.B=RP(a.C,a.element)),a.update({title:f,label:null,icon:nR(e)})):(a.B&&(a.B(),a.B=null),a.update({title:null,label:f}),(c=nR(e))&&a.A&&3!=a.A&&!g.W(a.o).ba?bR(a.D,a.element,c):a.pa("icon",c));hR(a.C);a.A=e}};
pR=function(a,b,c){if(c){var d="ytp-next-button";var e=jr()}else d="ytp-prev-button",e=nr();g.U.call(this,{F:"a",Z:[d,"ytp-button"],P:{title:"{{title}}",href:"{{url}}","data-preview":"{{preview}}","data-tooltip-text":"{{text}}","data-duration":"{{duration}}","aria-disabled":"{{disabled}}","data-next":"{{next}}","data-prev":"{{prev}}"},J:[e]});this.o=a;this.O=b.o;this.B=c;this.A=this.H=null;this.L=!1;this.G=this.K=this.C=null;this.D=!1;this.N(a,"fullscreentoggled",this.Dg);this.N(a,"videodatachange",
this.Dg);this.N(a,"onPlaylistUpdate",this.Dg);this.B||this.N(a,"appresize",this.tc);this.N(a,"mdxpreviousnextchange",function(){oR(this);this.tc()});
this.Dg()};
qR=function(a){a.A&&a.A.unsubscribe("shuffle",a.Dg,a)};
rR=function(a){return!!a.A&&!a.B&&3<=a.o.getCurrentTime()&&2!=a.o.Ha()};
sR=function(a){var b=g.NL(g.IL(a.o));return b?a.B?b.hasNext():b.Yd():!1};
oR=function(a){var b={duration:null,preview:null,text:null,title:null,url:null},c=g.W(a.o),d=QL(a.o),e=a.B&&g.kM(a.o),f=sR(a);if(a.D)b.title=g.Q("YTP_REPLAY");else if(d){var k=null;a.A&&(k=a.A.zb(a.B?XG(a.A):YG(a.A)));if(k){if(k.videoId){var l=a.A.listId;b.url=c.getVideoUrl(k.videoId,l?l.toString():void 0)}b.text=k.title;b.duration=k.lengthSeconds?g.WN(k.lengthSeconds):null;b.preview=k.yb(c,"mqdefault.jpg")}b.title=g.Q(a.B?"YTP_NEXT":"YTP_PREVIOUS")}else e&&(a.H.ee&&a.H.ee.length&&(k=g.lP(a.H.ee[0]),
b.url=k.dj(c),b.text=k.title,b.duration=k instanceof g.WE?g.WN(k.lengthSeconds):null,b.preview=k.yb(c,"mqdefault.jpg")),b.title=g.Q("YTP_NEXT"));b.disabled=!e&&!d&&!f;a.update(b);a.L=!!b.url;e||d||a.D||f?a.C||(a.C=RP(a.O,a.element),a.K=a.ga("click",a.gB,a)):a.C&&(a.C(),a.C=null,a.Qa(a.K),a.K=null);hR(a.O)};
uR=function(a,b){g.TN.call(this,{F:"div",M:"ytp-progress-bar-container",P:{"aria-disabled":!0},J:[{F:"div",M:"ytp-progress-bar",P:{tabindex:0,role:"slider","aria-label":g.Q("YTP_SEEK_SLIDER"),"aria-valuemin":"{{ariamin}}","aria-valuemax":"{{ariamax}}","aria-valuenow":"{{arianow}}","aria-valuetext":"{{arianowtext}}"},J:[{F:"div",M:"ytp-progress-bar-padding"},{F:"div",M:"ytp-progress-list",J:[{F:"div",Z:["ytp-play-progress","ytp-swatch-background-color"]},{F:"div",M:"ytp-load-progress"},{F:"div",M:"ytp-hover-progress"},
{F:"div",M:"ytp-clip-start-exclude"},{F:"div",M:"ytp-clip-end-exclude"},{F:"div",M:"ytp-ad-progress-list"},{F:"div",M:"ytp-marker-crenellation-list"},{F:"div",M:"ytp-marker-progress-list"}]},{F:"div",M:"ytp-scrubber-container",J:[{F:"div",Z:["ytp-scrubber-button","ytp-swatch-background-color"],J:[{F:"div",M:"ytp-scrubber-pull-indicator"}]}]}]},{F:"div",M:"ytp-bound-time-left",J:["{{boundTimeLeft}}"]},{F:"div",M:"ytp-bound-time-right",J:["{{boundTimeRight}}"]},{F:"div",M:"ytp-clip-start",P:{title:g.Q("YTP_WATCH_ALL")},
J:["{{clipstarticon}}"]},{F:"div",M:"ytp-clip-end",P:{title:g.Q("YTP_WATCH_ALL")},J:["{{clipendicon}}"]}]});this.pa("clipstarticon",er());this.pa("clipendicon",dr());this.A=a;this.Ka=b.o;this.Ma=!1;this.C=this.bc=0;this.X=1;this.Cb=this.H=0;this.D=window.NaN;this.Ya=!1;this.L=this.da=0;this.sc=this.ma["ytp-ad-progress-list"];this.Dc=this.ma["ytp-marker-progress-list"];this.Xa=this.ma["ytp-marker-crenellation-list"];this.W={};this.oa={};this.O=window.Infinity;var c=b.o;this.fa=this.ma["ytp-clip-end"];
g.te(this,RP(c,this.fa));this.wa=new g.it(this.fa,!0);g.J(this,this.wa);this.wa.subscribe("hoverstart",this.Br,this);this.wa.subscribe("hoverend",this.Ar,this);this.N(this.fa,"click",this.Aj);this.Wa=this.ma["ytp-clip-end-exclude"];this.Ec=this.ma["ytp-clip-start-exclude"];this.T=0;this.ha=this.ma["ytp-clip-start"];g.te(this,RP(c,this.ha));this.za=new g.it(this.ha,!0);g.J(this,this.za);this.za.subscribe("hoverstart",this.Br,this);this.za.subscribe("hoverend",this.Ar,this);this.N(this.ha,"click",this.Aj);
this.wb=this.ma["ytp-load-progress"];this.la=0;this.Fc=this.ma["ytp-play-progress"];this.Ua=this.ma["ytp-hover-progress"];this.G=0;this.Bb=this.ma["ytp-progress-bar"];this.B=null;this.Qb=this.ma["ytp-scrubber-button"];this.Gc=this.ma["ytp-scrubber-container"];this.Ea=new g.zd;this.ib=new tO;this.o=new qO(0,0);this.K=this.Fa=!1;this.Va=null;this.N(a,"presentingplayerstatechange",this.iB);this.N(a,"videodatachange",this.zr);this.N(a,"videoplayerreset",this.tx);this.N(a,"cuerangesadded",this.Er);this.N(a,
"cuerangesremoved",this.rB);this.N(a,"cuerangemarkersupdated",this.Er);this.N(a,"onPlaybackQualityChange",this.jB);tR(this,a.ca(),!0)};
yR=function(a){if(a.C){var b=a.A.df(),c=new qO(b.seekableStart,b.seekableEnd),d=sO(c,b.loaded,0),b=sO(c,b.current,0),e=a.o.o!=c.o||a.o.g!=c.g;a.o=c;vR(a,b,d);e&&wR(a);xR(a)}};
tR=function(a,b,c){c=void 0===c?!1:c;var d=!!b&&b.sd();a.Fa=d&&b.qe;zR(a,a.A.Lc());c&&(d?(c=b.clipEnd,a.T=b.clipStart,a.O=c,AR(a),vR(a,a.G,a.la)):a.Aj(),b=a.Ka,1==b.o&&b.Gd());yR(a)};
BR=function(a){return!!a&&a.sd()&&!!a.Ba&&a.Ba.video.isAccelerated&&a.Ba.video.A};
CR=function(a,b){a.Ya=b;g.N(a.wb,"ytp-fast-load",b)};
DR=function(a,b,c,d){b=g.td(b,0,a.K?60:40);a.H=b;var e=a.X,f=Math.max(a.o.getLength()/a.C,1);a.X=b/(a.K?60:40)*(f-1)+1;b=a.C*a.X;a.L=g.td(d*b-c,0,b-a.C);e!=a.X&&wR(a)};
wR=function(a){var b=ER(a),c=-b.A/b.g,d=(-b.A+b.width)/b.g,e=g.ge(a.Xa),f=0;if(a.H>.2*(a.K?60:40))for(var k=c*(a.o.getLength()/60),l=d*(a.o.getLength()/60),k=Math.ceil(k);k<l;k++){var m=e[f];m||(m=g.Yd("DIV"),a.Xa.appendChild(m));f++;m.className=0==k%60?"ytp-60m-progress":0==k%30?"ytp-30m-progress":0==k%15?"ytp-15m-progress":"ytp-1m-progress";var n=(60*k/a.o.getLength()-c)*b.g;m.style.left=n+"px"}b=a.Fa?a.o.g:0;a.update({boundTimeLeft:g.WN(rO(a.o,c)-b),boundTimeRight:g.WN(rO(a.o,d)-b)});for(c=e.length-
1;c>=f;c--)g.de(e[c]);a.element.style.height=a.H+(a.K?8:5)+"px";a.U("height-change",a.H);a.Qb.style.height=a.H+(a.K?20:13)+"px";for(var q in a.W)FR(a,a.W[q],a.oa[q]);AR(a);vR(a,a.G,a.la)};
ER=function(a){var b=a.Ea.x,c=a.C*a.X,b=g.td(b,0,a.C);a.ib.update(b,a.C,-a.L,-(c-a.L-a.C));return a.ib};
vR=function(a,b,c){a.G=b;a.la=c;var d=ER(a),e=a.o.g,f=rO(a.o,a.G);a.update({ariamin:Math.floor(a.o.o),ariamax:Math.floor(e),arianow:Math.floor(f),arianowtext:g.Q("YTP_PROGRESS_LABEL_2",{PLAY_PROGRESS:g.WN(f),DURATION:g.WN(e)})});var e=sO(a.o,a.T,0),k=sO(a.o,a.O,1),f=g.td(b,e,k);c=a.Ya?1:g.td(c,e,k);k=b*d.g+d.A;a.Qb.style.display=0<=k&&b<=d.width?"":"none";g.Vg(a.Gc,"transform","translateX("+k+"px)");GR(a,a.Fc,d,e,f);GR(a,a.wb,d,e,c)};
GR=function(a,b,c,d,e,f){b.style.left=Math.max(d*c.g+c.A,0)+"px";d=Math.min((e-d)*c.g+c.A,c.width);(void 0===f?0:f)||g.W(a.A).isMobile?(b.style.width=d+"px",Zg(b,"transform")):g.Vg(b,"transform","scalex("+(c.width?d/c.width:0)+")")};
AR=function(a){var b=a.T>a.o.o,c=0<a.o.g&&a.O<a.o.g;g.N(a.element,"ytp-clip-start-enabled",b);g.N(a.element,"ytp-clip-end-enabled",c);b=b?sO(a.o,a.T,0):0;c=c?sO(a.o,a.O,1):1;a.ha.style.left=Math.round(1E3*b)/10+"%";a.fa.style.left=Math.round(1E3*c)/10+"%";a.Ec.style.width=Math.round(1E3*b)/10+"%";a.Wa.style.left=Math.round(1E3*c)/10+"%";a.Wa.style.width=Math.round(1E3*(1-c))/10+"%"};
xR=function(a){var b=ER(a);GR(a,a.Ua,b,a.G,b.o);g.N(a.Ua,"ytp-hover-progress-light",b.o>a.G)};
FR=function(a,b,c){var d=ER(a),e=sO(a.o,b.start/1E3,0),f=sx(b)/d.width;switch(b.style){case "ytp-chapter-marker":var k=e+f/2;e-=f/2;break;default:k=sO(a.o,b.end/1E3,1),f!=Number.POSITIVE_INFINITY&&(e=g.td(e,0,k-f)),k=Math.min(k,e+f),b.color&&(c.style.background=b.color)}GR(a,c,d,e,k,!0);c.className=b.style};
HR=function(a,b){var c=b.getId();a.W[c]==b&&(g.de(a.oa[c]),delete a.W[c],delete a.oa[c])};
zR=function(a,b){b?a.B||(a.element.removeAttribute("aria-disabled"),a.B=new g.it(a.Bb,!0),a.B.subscribe("hovermove",a.oB,a),a.B.subscribe("hoverend",a.nB,a),a.B.subscribe("dragstart",a.mB,a),a.B.subscribe("dragmove",a.qB,a),a.B.subscribe("dragend",a.pB,a),a.Va=a.ga("keydown",a.kB)):a.B&&(a.element.setAttribute("aria-disabled",!0),a.Qa(a.Va),a.B.cancel(),a.B.dispose(),a.B=null)};
IR=function(a,b){jQ.call(this,g.Q("YTP_ANNOTATIONS"),5);this.B=b;this.R=a;this.A=!1;this.N(a,"videodatachange",this.C);this.N(a,"onApiChange",this.C);this.subscribe("select",this.D,this);this.C()};
g.JR=function(a,b,c,d,e,f){var k=g.VP({"aria-haspopup":!0});g.UP.call(this,k,b,a);this.A=d;this.H=!1;this.D=null;this.o={};this.C=new g.XP(c,void 0,a,e,f);g.J(this,this.C);this.ga("keydown",this.sB);this.ga("click",this.open)};
g.KR=function(a,b){if(a.D){var c=a.o[a.D];c.element.getAttribute("aria-checked");c.element.removeAttribute("aria-checked")}a.o[b].element.setAttribute("aria-checked",!0);a.Fb(a.Kd(b));a.D=b};
g.LR=function(a,b){g.aQ(a.C);for(var c={},d=!1,e=0;e<b.length;e++){var f=b[e],k=a.o[f],l=f==a.D;l&&(d=!0);k&&k.priority==-e?(g.TP(a.o[f],a.Kd(f,!0)),delete a.o[f]):(k=new g.UP({F:"div",Z:["ytp-menuitem"],P:{tabindex:0,role:"menuitemradio","aria-checked":l?!0:null},J:[{F:"div",Z:["ytp-menuitem-label"],J:["{{label}}"]}]},-e,a.Kd(f,!0)),k.ga("click",(0,g.A)(a.tB,a,f)));c[f]=k;g.ZP(a.C,k,!0)}d||(a.D=null);for(var m in a.o)a.o[m].dispose();a.o=c};
MR=function(a,b){g.JR.call(this,g.Q("YTP_AUDIO_TRACK_TITLE"),2,a,b);this.R=a;this.K=new g.U({F:"div",J:[{F:"span",J:[g.Q("YTP_AUDIO_TRACK_TITLE")]},{F:"span",M:"ytp-menuitem-label-count",J:["{{content}}"]}]});g.TP(this,this.K);this.L={};this.N(a,"videodatachange",this.G);this.N(a,"onPlaybackAudioChange",this.G);this.G()};
NR=function(a,b){jQ.call(this,g.Q("YTP_AUTOPLAY"),6);this.D=b;this.R=a;this.B=!1;this.A=[];this.N(a,"presentingplayerstatechange",this.C);this.subscribe("select",this.H,this);this.C()};
OR=function(a,b){g.JR.call(this,g.Q("YTP_QUALITY_TITLE"),1,a,b);g.L(this.C.element,"ytp-quality-menu");this.R=a;this.L={};this.K="unknown";this.G=0;this.T=g.W(a).experiments.g("html5_dim_superoptimal_formats");this.N(a,"videodatachange",this.B);this.N(a,"videoplayerreset",this.B);this.N(a,"onPlaybackQualityChange",this.O);this.B()};
PR=function(a,b,c){var d=a.L[b],e=g.Fw[b];var f=d?d.qualityLabel:e?e+"p":g.Q("YTP_AUTO");a.T&&a.G&&e>a.G&&(c=c||[],c.push("ytp-quality-superoptimal"));a={F:"span",Z:c,J:[]};d&&d.isAccelerated&&d.A&&a.J.push({F:"div",M:"ytp-menuitem-badge-container",J:[{F:"svg",P:{fill:"#00838f",height:"11px",viewBox:"0 0 48 48",width:"11px"},J:[{F:"path",P:{d:"M0 0v48h48V0H0zm10.6 30.64L4 24.05l6.69-6.69 6.6 6.59-6.69 6.69zM24 44l-6.7-6.7 13.35-13.35-13.32-13.28L24 4l20 20-20 20z"}},{F:"path",P:{d:"M 24,44 44,24 24,4 17.33,10.67 30.65,23.95 17.3,37.3 z M 10.6,30.64 17.29,23.95 10.69,17.36 4,24.05 z",
fill:"#fff"}}]}]});a.J.push(f);var k;"highres"==b?k="8K":"hd2880"==b?k="5K":"hd2160"==b?k="4K":0==b.indexOf("hd")&&(k="HD");k&&(a.J.push(" "),a.J.push({F:"sup",M:"ytp-swatch-color",J:[k]}));return a};
QR=function(a,b,c){g.U.call(this,{F:"button",Z:["ytp-button","ytp-settings-button"],P:{"aria-haspopup":!0,"aria-owns":"ytp-main-menu-id",title:g.Q("YTP_SETTINGS")},J:[g.qr()]});this.A=c;this.R=a;this.B=!0;this.ga("click",this.C);this.N(a,"onPlaybackQualityChange",this.o);this.N(a,"settingsmenutoggle",this.C);this.N(a,"videodatachange",this.o);this.N(a,"webglsettingschanged",this.o);this.N(a,"appresize",this.tc);g.te(this,RP(b.o,this.element));this.o();this.tc(g.PL(a).Na())};
RR=function(a,b){a.B=!!b;a.tc(g.PL(a.R).Na())};
SR=function(a,b){g.JR.call(this,g.Q("YTP_SPEED_TITLE"),4,a,b);this.R=a;this.B=null;this.N(a,"presentingplayerstatechange",this.Ir);this.Ir()};
UR=function(a,b,c,d){var e=g.Q("YTP_VIDEO_SUBTITLES_OVERRIDE"),f=new g.XP(b,void 0,e);g.JR.call(this,TR(d),a,b,c,e,function(){return g.eQ(c,f)});
g.L(this.element,"ytp-subtitles-options-menu-item");this.L=d.option.toString();this.O=g.Jb(d.options,this.T,this);this.K=f;g.J(this,this.K);a=new g.UP({F:"div",M:"ytp-menuitemtitle",J:[g.Q("YTP_VIDEO_SUBTITLES_OVERRIDE_DESC")]},0);g.J(this,a);g.ZP(this.K,a,!0);this.G=new g.UP({F:"div",M:"ytp-menuitem",P:{role:"menuitemradio",tabindex:0},J:[{F:"div",M:"ytp-menuitem-label",J:[g.Q("YTP_ON")]}]},-1);g.J(this,this.G);g.ZP(this.K,this.G,!0);this.N(this.G.element,"click",g.B(this.W,!0));this.B=new g.UP({F:"div",
M:"ytp-menuitem",P:{role:"menuitemradio",tabindex:0},J:[{F:"div",M:"ytp-menuitem-label",J:[g.Q("YTP_OFF")]}]},-2);g.J(this,this.B);g.ZP(this.K,this.B,!0);this.N(this.B.element,"click",g.B(this.W,!1));g.LR(this,(0,g.H)(d.options,this.T))};
TR=function(a){return(a.message?g.Q(a.message):a.text)||""};
VR=function(a,b){g.XP.call(this,a,void 0,g.Q("YTP_OPTIONS"));this.o={};for(var c=0;c<g.wQ.length;c++){var d=g.wQ[c],e=new UR(-c,a,b,d);g.J(this,e);e.subscribe("settingChange",this.A,this);this.o[d.option.toString()]=e;g.ZP(this,e,!0)}c=new g.UP(g.VP(),-g.wQ.length,g.Q("YTP_RESET"));g.J(this,c);c.ga("click",(0,g.A)(this.A,this,"reset",!0));g.ZP(this,c,!0)};
WR=function(a,b){for(var c in b){var d=a.o[c];if(d){var e=b[c].toString(),f=!!b[c+"Override"];d.o[e]&&(g.KR(d,e),d.G.element.setAttribute("aria-checked",!f),d.B.element.setAttribute("aria-checked",f))}}};
XR=function(a,b){g.JR.call(this,g.Q("YTP_AUTO_TRANSLATE"),0,a,b);this.B={}};
YR=function(a,b){var c=new VR(a,b);g.JR.call(this,g.Q("YTP_SUBTITLES"),3,a,b,g.Q("YTP_OPTIONS"),function(){return g.eQ(b,c)});
this.R=a;this.B={};this.O=new g.O(g.B(this.Lr,!1),3E3,this);g.J(this,this.O);this.K=new g.U({F:"div",J:[{F:"span",J:[g.Q("YTP_SUBTITLES")]},{F:"span",M:"ytp-menuitem-label-count",J:["{{content}}"]}]});g.J(this,this.K);g.TP(this,this.K);this.G=new XR(a,b);g.J(this,this.G);this.G.subscribe("select",this.CB,this);this.L=c;g.J(this,this.L);this.L.subscribe("settingChange",this.BB,this);this.N(a,"videodatachange",this.Ph);this.N(a,"onApiChange",this.Ph);this.N(a,"onCaptionsTrackListChanged",this.Ph);this.N(a,
"captionschanged",this.Ph);this.Ph()};
ZR=function(a){g.bQ.call(this,a,"ytp-settings-menu");this.A=a;this.B=new g.XP(a);g.J(this,this.B);this.H=null;this.X=!1;this.hide();g.eQ(this,this.B)};
$R=function(a){if(!a.X){a.X=!0;var b=new OR(a.A,a);g.J(a,b);b=new YR(a.A,a);g.J(a,b);b=new IR(a.A,a);g.J(a,b);g.W(a.A).Ka&&(b=new SR(a.A,a),g.J(a,b));g.W(a.A).oe&&(b=new NR(a.A,a),g.J(a,b));b=new MR(a.A,a);g.J(a,b);RR(a.H,a.B.Ia.length)}};
aS=function(a,b){g.ZP(a.B,b);RR(a.H,a.B.Ia.length)};
bS=function(a,b){a.g&&1>=a.B.Ia.length&&a.hide();g.$P(a.B,b);RR(a.H,a.B.Ia.length)};
cS=function(a,b,c){g.U.call(this,{F:"button",Z:["ytp-remote-button","ytp-button"],P:{title:g.Q("YTP_MDX_TOOLTIP"),"aria-haspopup":!0},J:["{{icon}}"]});this.R=a;this.B=c;this.A=null;this.N(a,"onMdxReceiversChange",this.o);this.N(a,"presentingplayerstatechange",this.o);this.N(a,"appresize",this.o);this.o();this.ga("click",this.C,this);g.te(this,RP(b.o,this.element))};
dS=function(a,b){g.U.call(this,{F:"button",Z:["ytp-size-button","ytp-button"],P:{title:"{{title}}"},J:["{{icon}}"]});this.o=a;this.C=b.o;this.B=null;this.D=new XQ;g.J(this,this.D);this.N(a,"sizestylechange",this.A);this.N(a,"fullscreentoggled",this.A);this.N(a,"presentingplayerstatechange",this.A);this.A();this.ga("click",this.G);g.te(this,RP(this.C,this.element))};
eS=function(a,b){g.U.call(this,{F:"button",Z:["ytp-subtitles-button","ytp-button"],P:{"aria-pressed":"{{pressed}}",title:g.Q("YTP_SUBTITLES_TOOLTIP")},J:[gr()]});this.A=a;this.N(a,"videodatachange",this.o);this.N(a,"appresize",this.o);this.N(a,"onApiChange",this.o);this.N(a,"onCaptionsTrackListChanged",this.o);this.N(a,"captionschanged",this.o);this.o();this.ga("click",this.B);g.te(this,RP(b.o,this.element))};
fS=function(a,b){g.U.call(this,{F:"div",Z:["ytp-time-display","notranslate"],J:[{F:"span",M:"ytp-time-current",J:["{{currenttime}}"]},{F:"span",M:"ytp-time-separator",J:[" / "]},{F:"span",M:"ytp-time-duration",J:["{{duration}}"]}]});this.D=new g.U({F:"button",Z:["ytp-live-badge","ytp-button"],P:{disabled:!0},J:[g.Q("YTP_LIVE")]});g.J(this,this.D);this.D.ra(this.element);this.o=a;this.L=b.o;this.A=null;this.G=this.B=!1;this.K=this.H=null;this.ga("click",this.O);this.N(a,"presentingplayerstatechange",
this.C);this.N(a,"appresize",this.C);this.N(a,"videodatachange",this.T);var c=a.ca();c&&(this.B=c.xa,g.N(this.element,"ytp-live",this.B));this.C()};
hS=function(a,b,c){g.U.call(this,{F:"div",M:"ytp-volume-panel",P:{role:"slider","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"{{valuenow}}","aria-valuetext":"{{valuetext}}",tabindex:0},J:[{F:"div",M:"ytp-volume-slider",J:[{F:"div",M:"ytp-volume-slider-handle"}]}]});this.o=a;this.G=b;this.T=c;this.L=!1;this.H=b.Xc();this.X=this.C=0;this.W=this.ma["ytp-volume-slider"];this.ba=this.ma["ytp-volume-slider-handle"];this.K=new g.it(this.W,!0);g.J(this,this.K);this.K.subscribe("dragstart",this.UE,
this);this.K.subscribe("dragmove",this.TE,this);this.K.subscribe("dragend",this.SE,this);this.O=null;this.A=this.B=this.D=!1;this.N(a,"onVolumeChange",this.FB);this.N(a,"appresize",this.tc);this.N(a,"fullscreentoggled",this.DB);this.N(a,"onShowControls",this.Yo);this.N(a,"onHideControls",this.Yo);this.N(this.element,"keydown",this.VE);this.N(this.element,"focus",g.B(this.Nr,!0));this.N(this.element,"blur",g.B(this.Nr,!1));this.tc(g.PL(a).Na());gS(this,a.getVolume(),a.zc())};
gS=function(a,b,c){var d=Math.floor(b),e=d+"% "+g.Q("YTP_SCREENREADER_VOLUME_SETTING")+(c?" "+g.Q("YTP_SCREENREADER_VOLUME_MUTED"):"");c=c?0:b/100;a.pa("valuenow",d);a.pa("valuetext",e);a.ba.style.left=(a.H?60:40)*c+"px";a.C=b};
iS=function(a,b,c,d,e){var f=a.B||a.D||a.A||a.L;a.B=b;a.D=c;a.A=d;a.L=e;b=a.B||a.D||a.A||a.L;f!=b&&(b?a.O=a.N(a.element,"wheel",a.EB):(a.Qa(a.O),a.O=null),g.N(a.T,"ytp-volume-slider-active",b))};
jS=function(a,b){var c=g.W(a),d=dD(c);0==d.indexOf("www.")&&(d=d.substring(4));var e=["ytp-youtube-button","ytp-button","yt-uix-sessionlink"];(c="gaming"==c.o)&&e.push("ytp-youtube-gaming-button");g.U.call(this,{F:"a",Z:e,P:{href:"{{url}}",target:"_blank",title:g.Q("YTP_URL_NAVIGATE_TO",{WEBSITE:d}),"data-sessionlink":"feature=player-button"},J:[c?g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-logo-gaming"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 98 36",width:"100%"},J:[{F:"path",Da:!0,M:"ytp-svg-fill",
P:{d:"M19.40,22.92 L19.40,22.08 C18.87,22.71 18.42,23.03 17.93,23.03 C17.50,23.03 17.20,22.82 17.05,22.44 C16.96,22.21 16.89,21.85 16.89,21.32 L16.89,15.23 L18.29,15.23 L18.29,21.47 C18.33,21.69 18.41,21.76 18.59,21.76 C18.86,21.76 19.10,21.52 19.40,21.09 L19.40,15.23 L20.80,15.23 L20.80,22.92 L19.40,22.92 Z M15.41,15.91 C15.04,15.39 14.45,15.17 13.86,15.17 C13.19,15.17 12.69,15.39 12.31,15.91 C12.02,16.30 11.87,16.93 11.87,17.75 L11.87,20.48 C11.87,21.30 12.01,21.86 12.29,22.25 C12.67,22.77 13.27,23.05 13.86,23.05 C14.45,23.05 15.07,22.77 15.44,22.25 C15.73,21.86 15.86,21.30 15.86,20.48 L15.86,17.74 C15.86,16.92 15.70,16.30 15.41,15.91 L15.41,15.91 Z M14.45,20.63 C14.53,21.40 14.30,21.77 13.86,21.77 C13.43,21.77 13.20,21.40 13.27,20.63 L13.27,17.59 C13.20,16.83 13.43,16.47 13.86,16.47 C14.30,16.47 14.53,16.83 14.45,17.59 L14.45,20.63 Z M10.32,22.92 L8.84,22.92 L8.84,18.73 C8.84,18.73 7.31,13.60 7,12.64 L8.55,12.64 L9.58,16.65 L10.61,12.64 L12.16,12.64 L10.32,18.73 L10.32,22.92 Z"}},
{F:"path",Z:["ytp-svg-fill","ytp-svg-fill-logo-tube-text"],P:{d:"M23,12 L43,12 L43,24 L23,24 Z",fill:"none"}},{F:"path",Da:!0,Z:["ytp-svg-fill","ytp-svg-fill-logo-tube-lozenge"],P:{d:"M42.90,11.22 C42.06,10.32 41.12,10.32 40.69,10.26 C37.60,10.03 32.97,10.03 32.97,10.03 C32.96,10.03 28.34,10.03 25.25,10.26 C24.82,10.32 23.88,10.32 23.04,11.22 C22.38,11.91 22.16,13.47 22.16,13.47 C22.16,13.47 21.94,15.30 21.94,17.13 L21.94,18.85 C21.94,20.68 22.16,22.51 22.16,22.51 C22.16,22.51 22.38,24.07 23.04,24.76 C23.88,25.66 24.98,25.63 25.47,25.73 C27.24,25.90 32.97,25.96 32.97,25.96 C32.97,25.96 37.60,25.95 40.69,25.72 C41.12,25.67 42.06,25.66 42.90,24.76 C43.56,24.07 43.77,22.51 43.77,22.51 C43.77,22.51 43.99,20.68 43.99,18.85 L43.99,17.13 C43.99,15.30 43.77,13.47 43.77,13.47 C43.77,13.47 43.56,11.91 42.90,11.22 L42.90,11.22 Z M25.31,22.92 L25.31,14.16 L23.76,14.16 L23.76,12.72 L28.41,12.71 L28.41,14.16 L26.79,14.16 L26.79,22.92 L25.31,22.92 Z M30.70,22.92 L30.70,22.08 C30.17,22.71 29.72,23.03 29.23,23.03 C28.79,23.03 28.50,22.82 28.35,22.44 C28.25,22.21 28.19,21.85 28.19,21.32 L28.19,15.30 L29.59,15.30 L29.59,21.47 C29.63,21.69 29.71,21.76 29.89,21.76 C30.16,21.76 30.40,21.52 30.70,21.09 L30.70,15.30 L32.10,15.30 L32.10,22.92 L30.70,22.92 Z M37.05,22.16 C36.87,22.72 36.48,23.02 35.95,23.02 C35.48,23.02 34.95,22.72 34.50,22.15 L34.50,22.92 L32.98,22.92 L32.98,12.71 L34.50,12.71 L34.50,16.04 C34.93,15.49 35.46,15.18 35.95,15.18 C36.48,15.18 36.84,15.50 37.02,16.07 C37.11,16.37 37.20,16.87 37.20,17.59 L37.20,20.63 C37.20,21.34 37.14,21.83 37.05,22.16 L37.05,22.16 Z M40.73,21.21 C40.75,21.14 40.74,20.81 40.74,20.25 L42.15,20.25 L42.15,20.47 C42.15,20.91 42.11,21.23 42.10,21.37 C42.05,21.67 41.95,21.95 41.79,22.19 C41.42,22.74 40.87,23.02 40.17,23.02 C39.47,23.02 38.94,22.76 38.55,22.24 C38.27,21.86 38.09,21.29 38.09,20.48 L38.09,17.82 C38.09,17.00 38.25,16.37 38.54,15.99 C38.92,15.47 39.45,15.19 40.14,15.19 C40.81,15.19 41.34,15.47 41.71,15.99 C41.99,16.37 42.15,16.97 42.15,17.78 L42.15,19.34 L39.49,19.34 L39.49,20.71 C39.48,21.41 39.68,21.76 40.14,21.76 C40.47,21.76 40.66,21.58 40.73,21.21 L40.73,21.21 Z M40.12,16.45 C39.68,16.45 39.49,16.64 39.49,17.36 L39.49,18.20 L40.74,18.20 L40.74,17.37 C40.74,16.66 40.57,16.45 40.12,16.45 L40.12,16.45 Z M34.54,16.80 L34.54,21.42 C34.76,21.65 35.02,21.76 35.24,21.76 C35.62,21.76 35.80,21.47 35.80,20.71 L35.80,17.44 C35.80,16.67 35.62,16.45 35.24,16.45 C35.02,16.45 34.76,16.57 34.54,16.80 L34.54,16.80 Z",
fill:"#fff"}},{F:"g",Da:!0,M:"ytp-svg-fill",J:[{F:"path",P:{d:"M50.85,16.34 C50.14,16.34 49.78,16.77 49.72,17.30 C49.61,18.30 49.61,19.64 49.72,20.65 C49.78,21.18 50.14,21.61 50.85,21.61 C51.55,21.61 52.03,21.21 52.03,20.67 L52.03,20.16 C52.03,20.09 51.98,20.04 51.91,20.04 L51.12,20.04 C50.99,20.04 50.89,19.93 50.89,19.80 L50.89,18.66 C50.89,18.53 50.99,18.42 51.12,18.42 L53.39,18.42 C53.52,18.42 53.63,18.53 53.63,18.66 L53.63,20.67 C53.63,22.11 52.45,23.30 50.85,23.30 C49.25,23.30 48.25,22.09 48.08,20.65 C47.97,19.64 47.97,18.30 48.08,17.30 C48.25,15.86 49.25,14.65 50.85,14.65 C52.46,14.65 53.63,15.79 53.63,17.39 C53.63,17.52 53.52,17.63 53.39,17.63 L52.23,17.63 C52.10,17.63 52.01,17.52 52.00,17.39 C51.95,16.77 51.52,16.34 50.85,16.34"}},
{F:"path",P:{d:"M57.57,19.76 C57.55,19.86 57.60,19.90 57.67,19.90 L58.74,19.90 C58.81,19.90 58.85,19.86 58.83,19.76 L58.27,16.89 C58.26,16.85 58.25,16.84 58.21,16.84 L58.19,16.84 C58.16,16.84 58.14,16.85 58.13,16.89 L57.57,19.76 Z M56.80,22.98 C56.78,23.09 56.69,23.16 56.58,23.16 L55.36,23.16 C55.17,23.16 55.10,23.03 55.13,22.93 L57.21,14.96 C57.24,14.85 57.33,14.78 57.43,14.78 L58.99,14.78 C59.10,14.78 59.19,14.85 59.21,14.96 L61.29,22.93 C61.31,23.03 61.24,23.16 61.06,23.16 L59.83,23.16 C59.73,23.16 59.65,23.09 59.61,22.98 L59.25,21.75 C59.23,21.66 59.18,21.57 59.08,21.57 L57.31,21.57 C57.20,21.57 57.15,21.64 57.13,21.75 L56.80,22.98 Z"}},
{F:"path",P:{d:"M65.75,17.32 C65.78,17.44 65.92,17.44 65.96,17.32 L66.61,14.99 C66.64,14.84 66.73,14.78 66.85,14.78 L68.46,14.78 C68.59,14.78 68.69,14.89 68.69,15.02 L68.69,22.93 C68.69,23.06 68.59,23.16 68.46,23.16 L67.32,23.16 C67.19,23.16 67.09,23.06 67.09,22.93 L67.09,18.18 C67.09,18.12 67.02,18.11 66.99,18.17 L66.45,19.97 C66.40,20.11 66.33,20.17 66.20,20.17 L65.51,20.17 C65.39,20.17 65.32,20.11 65.27,19.97 L64.71,18.17 C64.69,18.11 64.62,18.12 64.62,18.18 L64.62,22.93 C64.62,23.06 64.51,23.16 64.38,23.16 L63.24,23.16 C63.12,23.16 63.01,23.06 63.01,22.93 L63.01,15.02 C63.01,14.89 63.12,14.78 63.24,14.78 L64.85,14.78 C64.98,14.78 65.06,14.84 65.10,14.99 L65.75,17.32 Z"}},
{F:"path",P:{d:"M72.68,16.52 C72.68,16.45 72.63,16.40 72.56,16.40 L71.39,16.40 C71.27,16.40 71.16,16.29 71.16,16.16 L71.16,15.02 C71.16,14.89 71.27,14.78 71.39,14.78 L75.59,14.78 C75.72,14.78 75.82,14.89 75.82,15.02 L75.82,16.16 C75.82,16.29 75.72,16.40 75.59,16.40 L74.42,16.40 C74.35,16.40 74.31,16.45 74.31,16.52 L74.31,21.43 C74.31,21.50 74.35,21.55 74.42,21.55 L75.70,21.55 C75.83,21.55 75.94,21.66 75.94,21.79 L75.94,22.93 C75.94,23.06 75.83,23.16 75.70,23.16 L71.28,23.16 C71.15,23.16 71.05,23.06 71.05,22.93 L71.05,21.79 C71.05,21.66 71.15,21.55 71.28,21.55 L72.56,21.55 C72.63,21.55 72.68,21.50 72.68,21.43 L72.68,16.52 Z"}},
{F:"path",P:{d:"M83.53,22.93 C83.53,23.06 83.42,23.16 83.30,23.16 L81.92,23.16 C81.72,23.16 81.64,23.06 81.61,22.96 L80.02,18.76 C80.00,18.69 79.92,18.71 79.92,18.78 L79.92,22.93 C79.92,23.06 79.81,23.16 79.69,23.16 L78.52,23.16 C78.39,23.16 78.29,23.06 78.29,22.93 L78.29,15.02 C78.29,14.89 78.39,14.78 78.52,14.78 L79.91,14.78 C80.08,14.78 80.16,14.89 80.20,15.00 L81.79,19.55 C81.82,19.62 81.90,19.60 81.90,19.52 L81.90,15.02 C81.90,14.89 82.00,14.78 82.13,14.78 L83.30,14.78 C83.42,14.78 83.53,14.89 83.53,15.02 L83.53,22.93 Z"}},
{F:"path",P:{d:"M88.59,16.34 C87.88,16.34 87.52,16.77 87.46,17.30 C87.35,18.30 87.35,19.64 87.46,20.65 C87.52,21.18 87.88,21.61 88.59,21.61 C89.29,21.61 89.77,21.21 89.77,20.67 L89.77,20.16 C89.77,20.09 89.72,20.04 89.65,20.04 L88.86,20.04 C88.73,20.04 88.63,19.93 88.63,19.80 L88.63,18.66 C88.63,18.53 88.73,18.42 88.86,18.42 L91.13,18.42 C91.26,18.42 91.37,18.53 91.37,18.66 L91.37,20.67 C91.37,22.11 90.19,23.30 88.59,23.30 C86.99,23.30 85.99,22.09 85.82,20.65 C85.71,19.64 85.71,18.30 85.82,17.30 C85.99,15.86 86.99,14.65 88.59,14.65 C90.20,14.65 91.37,15.79 91.37,17.39 C91.37,17.52 91.26,17.63 91.13,17.63 L89.97,17.63 C89.84,17.63 89.75,17.52 89.74,17.39 C89.69,16.77 89.26,16.34 88.59,16.34"}}]}]}:
g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-logo"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 51 36",width:"100%"},J:[{F:"path",Da:!0,M:"ytp-svg-fill",P:{d:"M19.40,22.92 L19.40,22.08 C18.87,22.71 18.42,23.03 17.93,23.03 C17.50,23.03 17.20,22.82 17.05,22.44 C16.96,22.21 16.89,21.85 16.89,21.32 L16.89,15.23 L18.29,15.23 L18.29,21.47 C18.33,21.69 18.41,21.76 18.59,21.76 C18.86,21.76 19.10,21.52 19.40,21.09 L19.40,15.23 L20.80,15.23 L20.80,22.92 L19.40,22.92 Z M15.41,15.91 C15.04,15.39 14.45,15.17 13.86,15.17 C13.19,15.17 12.69,15.39 12.31,15.91 C12.02,16.30 11.87,16.93 11.87,17.75 L11.87,20.48 C11.87,21.30 12.01,21.86 12.29,22.25 C12.67,22.77 13.27,23.05 13.86,23.05 C14.45,23.05 15.07,22.77 15.44,22.25 C15.73,21.86 15.86,21.30 15.86,20.48 L15.86,17.74 C15.86,16.92 15.70,16.30 15.41,15.91 L15.41,15.91 Z M14.45,20.63 C14.53,21.40 14.30,21.77 13.86,21.77 C13.43,21.77 13.20,21.40 13.27,20.63 L13.27,17.59 C13.20,16.83 13.43,16.47 13.86,16.47 C14.30,16.47 14.53,16.83 14.45,17.59 L14.45,20.63 Z M10.32,22.92 L8.84,22.92 L8.84,18.73 C8.84,18.73 7.31,13.60 7,12.64 L8.55,12.64 L9.58,16.65 L10.61,12.64 L12.16,12.64 L10.32,18.73 L10.32,22.92 Z"}},
{F:"path",Z:["ytp-svg-fill","ytp-svg-fill-logo-tube-text"],P:{d:"M23,12 L43,12 L43,24 L23,24 Z",fill:"none"}},{F:"path",Da:!0,Z:["ytp-svg-fill","ytp-svg-fill-logo-tube-lozenge"],P:{d:"M42.90,11.22 C42.06,10.32 41.12,10.32 40.69,10.26 C37.60,10.03 32.97,10.03 32.97,10.03 C32.96,10.03 28.34,10.03 25.25,10.26 C24.82,10.32 23.88,10.32 23.04,11.22 C22.38,11.91 22.16,13.47 22.16,13.47 C22.16,13.47 21.94,15.30 21.94,17.13 L21.94,18.85 C21.94,20.68 22.16,22.51 22.16,22.51 C22.16,22.51 22.38,24.07 23.04,24.76 C23.88,25.66 24.98,25.63 25.47,25.73 C27.24,25.90 32.97,25.96 32.97,25.96 C32.97,25.96 37.60,25.95 40.69,25.72 C41.12,25.67 42.06,25.66 42.90,24.76 C43.56,24.07 43.77,22.51 43.77,22.51 C43.77,22.51 43.99,20.68 43.99,18.85 L43.99,17.13 C43.99,15.30 43.77,13.47 43.77,13.47 C43.77,13.47 43.56,11.91 42.90,11.22 L42.90,11.22 Z M25.31,22.92 L25.31,14.16 L23.76,14.16 L23.76,12.72 L28.41,12.71 L28.41,14.16 L26.79,14.16 L26.79,22.92 L25.31,22.92 Z M30.70,22.92 L30.70,22.08 C30.17,22.71 29.72,23.03 29.23,23.03 C28.79,23.03 28.50,22.82 28.35,22.44 C28.25,22.21 28.19,21.85 28.19,21.32 L28.19,15.30 L29.59,15.30 L29.59,21.47 C29.63,21.69 29.71,21.76 29.89,21.76 C30.16,21.76 30.40,21.52 30.70,21.09 L30.70,15.30 L32.10,15.30 L32.10,22.92 L30.70,22.92 Z M37.05,22.16 C36.87,22.72 36.48,23.02 35.95,23.02 C35.48,23.02 34.95,22.72 34.50,22.15 L34.50,22.92 L32.98,22.92 L32.98,12.71 L34.50,12.71 L34.50,16.04 C34.93,15.49 35.46,15.18 35.95,15.18 C36.48,15.18 36.84,15.50 37.02,16.07 C37.11,16.37 37.20,16.87 37.20,17.59 L37.20,20.63 C37.20,21.34 37.14,21.83 37.05,22.16 L37.05,22.16 Z M40.73,21.21 C40.75,21.14 40.74,20.81 40.74,20.25 L42.15,20.25 L42.15,20.47 C42.15,20.91 42.11,21.23 42.10,21.37 C42.05,21.67 41.95,21.95 41.79,22.19 C41.42,22.74 40.87,23.02 40.17,23.02 C39.47,23.02 38.94,22.76 38.55,22.24 C38.27,21.86 38.09,21.29 38.09,20.48 L38.09,17.82 C38.09,17.00 38.25,16.37 38.54,15.99 C38.92,15.47 39.45,15.19 40.14,15.19 C40.81,15.19 41.34,15.47 41.71,15.99 C41.99,16.37 42.15,16.97 42.15,17.78 L42.15,19.34 L39.49,19.34 L39.49,20.71 C39.48,21.41 39.68,21.76 40.14,21.76 C40.47,21.76 40.66,21.58 40.73,21.21 L40.73,21.21 Z M40.12,16.45 C39.68,16.45 39.49,16.64 39.49,17.36 L39.49,18.20 L40.74,18.20 L40.74,17.37 C40.74,16.66 40.57,16.45 40.12,16.45 L40.12,16.45 Z M34.54,16.80 L34.54,21.42 C34.76,21.65 35.02,21.76 35.24,21.76 C35.62,21.76 35.80,21.47 35.80,20.71 L35.80,17.44 C35.80,16.67 35.62,16.45 35.24,16.45 C35.02,16.45 34.76,16.57 34.54,16.80 L34.54,16.80 Z",
fill:"#fff"}}]}]});this.o=a;mM(a,this,28666);this.ga("click",this.D);this.N(a,"videodatachange",this.C);this.C();g.te(this,RP(b.o,this.element))};
kS=function(a,b,c){g.dt.call(this);var d=g.W(a);this.R=a;this.A=b;this.ba=window.NaN;this.X=null;this.O=c;this.O.subscribe("autohideupdate",this.Kr,this);c=!bG(g.OL(a));var e=new g.U({F:"div",M:"ytp-gradient-bottom"});g.J(this,e);g.jM(a,e.element,9);this.L=new g.iO(e,250,c,100);g.J(this,this.L);this.o=new g.U({F:"div",M:"ytp-chrome-bottom",J:[{F:"div",M:"ytp-chrome-controls"}]});g.J(this,this.o);g.jM(a,this.o.element,9);this.K=new g.iO(this.o,250,c,100);g.J(this,this.K);c=this.o.element.children[0];
d.G&&(c.style.background=d.Xa);this.g=new ZR(a);g.J(this,this.g);g.jM(a,this.g.element,7);this.g.subscribe("show",this.IG,this);this.g.subscribe("show",(0,g.A)(b.mG,b,this.g));this.B=new uR(a,b);g.J(this,this.B);this.B.ra(this.o.element,0);e=new NQ(a,b);g.J(this,e);g.jM(a,e.element,5);this.B.subscribe("height-change",e.SA,e);e=new QQ(a);g.J(this,e);g.jM(a,e.element,5);e=new g.bH({F:"div",M:"ytp-left-controls"});g.J(this,e);e.ra(c);var f=new pR(a,b,!1);g.J(this,f);f.ra(e.element);f=new mR(a,b);g.J(this,
f);f.ra(e.element);f=new pR(a,b,!0);g.J(this,f);f.ra(e.element);var k=new g.U({F:"span"});g.J(this,k);k.ra(e.element);if(!d.wa&&(this.C=new eR(a,b),g.J(this,this.C),this.C.ra(k.element),d.K)){f=new hS(a,b,this.o.element);g.J(this,f);f.ra(k.element);k=new g.it(k.element);g.J(this,k);var l=(0,g.A)(f.Lt,f,!0);k.subscribe("hoverstart",l);k=new g.it(e.element);g.J(this,k);f=(0,g.A)(f.Lt,f,!1);k.subscribe("hoverend",f)}this.T=new fS(a,b);g.J(this,this.T);this.T.ra(e.element);e=new g.bH({F:"div",M:"ytp-right-controls"});
g.J(this,e);e.ra(c);c=new eS(a,b);g.J(this,c);c.ra(e.element);c=new QR(a,b,this.g);g.J(this,c);this.g.H=c;c.ra(e.element);c=new VQ(a);g.J(this,c);g.jM(a,c.element,6);c.subscribe("show",(0,g.A)(b.dl,b,c));c=new WQ(a,b,c);g.J(this,c);c.ra(e.element);d.Vg&&(this.D=new jS(a,b),g.J(this,this.D),this.D.ra(e.element));c=new dS(a,b);g.J(this,c);c.ra(e.element);d.ib&&(c=new cS(a,b,this.g),g.J(this,c),c.ra(e.element));d.Ug&&(d=new MQ(a,b),g.J(this,d),d.ra(e.element));d=Zx();d.webkitSetPresentationMode&&g.wa(d.webkitSupportsPresentationMode)&&
d.webkitSupportsPresentationMode("picture-in-picture")&&(d=new kR(a,b),g.J(this,d),d.ra(e.element));this.aa=new UQ(a,b);g.J(this,this.aa);this.aa.ra(e.element);this.G=new g.Do(this.lD,null,this);g.J(this,this.G);this.H=null;this.N(a,"appresize",this.Rm);this.N(a,"fullscreentoggled",this.Rm);this.N(a,"presentingplayerstatechange",this.Kn);this.Rm()};
lS=function(a,b){if(bG(g.OL(a.R))||b){if(b){a.K.hide();a.L.hide();if(a.C){var c=a.C;c.H=!1;g.oM(c.o,c,c.B&&!1)}a.D&&(c=a.D,c.B=!1,g.oM(c.o,c,c.A&&!1));a.A.o.ng(a.na())}}else b||(a.K.show(),a.L.show(),a.C&&(c=a.C,c.H=!0,g.oM(c.o,c,c.B&&!0)),a.D&&(c=a.D,c.B=!0,g.oM(c.o,c,c.A&&!0)),a.Kr())};
nS=function(a){var b=g.PL(a.R).Na().width;return Math.max(b-2*mS(a),100)};
mS=function(a){var b=a.A.Xc();return 12*(g.W(a.R).G?0:b?2:1)};
g.oS=function(a,b,c,d,e,f,k,l,m,n,q,r){f&&(a=a.charAt(0)+a.substring(1).toLowerCase(),c=c.charAt(0)+c.substring(1).toLowerCase());if("0"===b||"-1"===b)b=null;if("0"===d||"-1"===d)d=null;if(q){c=g.W(r).g;q={href:q,"aria-label":a,tabindex:"-1"};if("embedded"==c||"profilepage"==c)q.target="_blank";g.U.call(this,{F:"div",Z:["ytp-button","ytp-sb"],J:[{F:"a",M:"ytp-sb-subscribe",P:q,J:[{F:"div",M:"ytp-sb-text",J:[{F:"div",M:"ytp-sb-icon"},a]},b?{F:"div",M:"ytp-sb-count",J:[b]}:""]}]});this.ga("click",function(a){a.stopPropagation()});
f&&g.L(this.element,"ytp-sb-classic")}else{g.U.call(this,{F:"div",Z:["ytp-button","ytp-sb"],J:[{F:"div",M:"ytp-sb-subscribe",P:{tabindex:"-1","aria-label":a},J:[{F:"div",M:"ytp-sb-text",J:[{F:"div",M:"ytp-sb-icon"},a]},b?{F:"div",M:"ytp-sb-count",J:[b]}:""]},{F:"div",M:"ytp-sb-unsubscribe",P:{tabindex:"-1","aria-label":c},J:[{F:"div",M:"ytp-sb-text",J:[{F:"div",M:"ytp-sb-icon"},c]},d?{F:"div",M:"ytp-sb-count",J:[d]}:""]}]});var v=this;this.o=k;this.R=r;var D=this.ma["ytp-sb-subscribe"],E=this.ma["ytp-sb-unsubscribe"];
f&&g.L(this.element,"ytp-sb-classic");if(e){l&&g.L(this.element,"ytp-sb-subscribed");a=g.W(r);var z=null;"gaming"==a.o&&(z="gaming_channels");if(m){var R=a.baseYtUrl+"subscription_ajax";var V=function(){return{method:"POST",Yb:{action_create_subscription_to_channel:1,c:v.o},qb:{feature:m,silo_name:z},withCredentials:!0}};
var xa=function(){return{method:"POST",Yb:{action_remove_subscriptions:1},qb:{c:v.o,silo_name:z},withCredentials:!0}}}else if(n)R="/subscription_service",V=function(){return{method:"POST",
Yb:{action_subscribe:1},qb:{channel_ids:v.o,itct:n}}},xa=function(){return{method:"POST",
Yb:{action_unsubscribe:1},qb:{channel_ids:v.o,itct:n}}};
else return;var ra=function(a){a.stopPropagation();g.Ur(R,V());r.va("SUBSCRIBE");E.focus();E.removeAttribute("aria-hidden");D.setAttribute("aria-hidden",!0)},Y=function(a){a.stopPropagation();
g.Ur(R,xa());r.va("UNSUBSCRIBE");D.focus();D.removeAttribute("aria-hidden");E.setAttribute("aria-hidden",!0)};
this.N(D,"click",ra);this.N(E,"click",Y);this.N(D,"keypress",function(a){13==a.keyCode&&ra(a)});
this.N(E,"keypress",function(a){13==a.keyCode&&Y(a)});
var gb=(0,g.A)(this.A,this),fc=(0,g.A)(this.B,this);r.addEventListener("SUBSCRIBE",gb);r.addEventListener("UNSUBSCRIBE",fc);g.te(this,function(){r.removeEventListener("SUBSCRIBE",gb);r.removeEventListener("UNSUBSCRIBE",fc)})}else g.L(D,"ytp-sb-disabled"),g.L(E,"ytp-sb-disabled")}};
qS=function(a){var b=new g.U({F:"a",M:"ytp-title-channel-logo",P:{href:"{{channelLink}}",target:"_blank"}});g.U.call(this,{F:"div",M:"ytp-title",J:[{F:"div",M:"ytp-title-channel",J:[b,{F:"div",M:"ytp-title-channel-popup",J:[{F:"div",M:"ytp-title-channel-heading",J:[{F:"h2",M:"ytp-title-channel-text",J:[{F:"a",P:{href:"{{popupChannelLink}}",target:"_blank"},J:["{{popupChannelName}}"]}]},{F:"h3",M:"ytp-title-channel-subtext",J:["{{subscriberCount}}"]}]}]}]},{F:"div",M:"ytp-title-text",J:[{F:"a",Z:["ytp-title-link",
"yt-uix-sessionlink"],P:{target:"_blank",href:"{{url}}","data-sessionlink":"feature=player-title"},J:["{{title}}"]},{F:"div",M:"ytp-title-subtext",J:[{F:"a",M:"ytp-title-channel-name",P:{href:"{{channelLink}}",target:"_blank"},J:["{{channelName}}"]},{F:"span",M:"ytp-title-view-count",J:["{{viewCount}}"]}]}]}]});g.J(this,b);this.o=a;this.A=null;this.X=this.ma["ytp-title-link"];this.G=this.ma["ytp-title-channel"];this.D=b;this.L=this.ma["ytp-title-channel-popup"];this.B=null;this.C=!1;this.T=this.W=
this.O=null;mM(a,this,23851);mM(a,b,36925);this.N(a,"videodatachange",this.H);this.N(a,"videoplayerreset",this.H);g.W(a).experiments.g("embed_author_metadata")&&pS(this);this.H()};
pS=function(a){var b=new g.U({F:"div",M:"ytp-title-beacon"});g.J(a,b);b.ra(a.G,0);var b=a.o.ca(),c=new g.oS(g.Q("YTP_SUBSCRIBE"),null,g.Q("YTP_SUBSCRIBED"),null,!0,!1,b.hi,!1,"embed_title",null,null,a.o);a.B=c;g.J(a,c);c.ra(a.L);mM(a.o,c,36926);var d=new g.U({F:"button",Z:["ytp-button","ytp-title-notifications"],J:[{F:"div",M:"ytp-title-notifications-on",J:[g.kr()]},{F:"div",M:"ytp-title-notifications-off",J:[g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-notifications-inactive"]}:{F:"svg",P:{fill:"#fff",
height:"24px",viewBox:"0 0 24 24",width:"24px"},J:[{F:"path",P:{d:"M18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"}}]}]}]});g.J(a,d);d.ra(a.L);mM(a.o,d,36927);a.N(a.o,"SUBSCRIBE",function(){g.L(a.element,"ytp-subscribed")});
a.N(a.o,"UNSUBSCRIBE",function(){a.C=!1;g.M(a.element,"ytp-subscribed");g.M(a.element,"ytp-notifications-enabled")});
a.N(a.G,"mouseenter",function(){a.K.stop();var b=a.o.getRootNode();g.L(b,"ytp-title-channel-expanded");g.M(b,"ytp-title-channel-collapsed");g.oM(a.o,c,!0);g.oM(a.o,d,!0)});
a.N(a.G,"mouseleave",function(){a.K.start();g.oM(a.o,c,!1);g.oM(a.o,d,!1)});
a.N(c.element,"click",function(){g.nM(a.o,c)});
a.N(d.element,"click",function(){g.nM(a.o,d);g.Ur("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",qb:{channel_id:a.T,receive_all_updates:!a.C}});a.C=!a.C;g.N(a.element,"ytp-notifications-enabled",a.C)});
a.K=new g.O(function(){var b=a.o.getRootNode();g.M(b,"ytp-title-channel-expanded");g.L(b,"ytp-title-channel-collapsed")},1E3);
g.J(a,a.K)};
sS=function(a){var b=a.o.ca(),c=b.videoId&&(2==a.o.Ha()||g.W(a.o).experiments.g("embed_author_metadata")),d=a.o.getRootNode();c&&b.videoId==a.O?(g.L(d,"ytp-title-extra-info"),g.oM(a.o,a.D,!0)):(g.M(d,"ytp-title-extra-info"),g.oM(a.o,a.D,!1),c&&(b.author&&b.channelPath&&b.profilePicture?rS(a,b.videoId,b.hi,b.author,b.channelPath,b.profilePicture,b.wn):b.videoId!=a.W&&(c=g.W(a.o),d={video_id:b.videoId,html5:1,page_subscribe:0},c.Lb&&(d.authuser=c.Lb),c.pageId&&(d.pageid=c.pageId),c=g.wg(c.baseYtUrl+
"get_video_metadata",d),g.Ur(c,{method:"GET",nb:(0,g.A)(a.da,a,b.videoId),withCredentials:!0}),a.W=b.videoId)))};
rS=function(a,b,c,d,e,f,k){e=g.W(a.o).X+"://"+cD(g.W(a.o))+e;a.D.element.style.backgroundImage="url("+f+")";a.B&&(a.B.o=c);a.D.pa("channelLink",e);a.pa("channelLink",e);a.pa("channelName",d);a.pa("popupChannelLink",e);a.pa("popupChannelName",d);a.pa("subscriberCount",k);a.T=c;a.O=b;sS(a)};
tS=function(a,b){var c=g.PL(a).Na();g.U.call(this,{F:"div",J:[{F:"div",M:"ytp-tooltip-bg",J:[{F:"div",M:"ytp-tooltip-duration",J:["{{duration}}"]}]},{F:"div",M:"ytp-tooltip-text-wrapper",J:[{F:"div",M:"ytp-tooltip-image"},{F:"div",M:"ytp-tooltip-title",J:["{{title}}"]},{F:"span",M:"ytp-tooltip-text",J:["{{text}}"]}]}]});this.T=a;this.oa=b;this.fa=g.W(a).isMobile;this.H=this.ma["ytp-tooltip-bg"];this.wa=this.ma["ytp-tooltip-image"];this.la=(0,g.A)(this.QD,this);this.W=(0,g.A)(this.TD,this);this.X=
(0,g.A)(this.Gd,this);this.A=null;this.K=new g.iO(this,100);g.J(this,this.K);this.o=null;this.O=!1;this.B=null;this.C=window.NaN;this.G="";this.ha=c.width;this.L=!0;this.D=1;this.ba=new g.O(this.uy,250,this);g.J(this,this.ba);this.da=new g.O(this.Gd,5E3,this);g.J(this,this.da)};
vS=function(a,b){if(null!=a.o)if(b)switch(a.o){case 3:case 2:uS(a);a.K.show();break;default:a.K.show()}else a.K.hide();a.L=b};
RP=function(a,b){if(a.fa)return g.qa;b.addEventListener("mouseover",a.W);return(0,g.A)(function(){this.A==b&&this.Gd();b.removeEventListener("mouseover",this.W)},a)};
xS=function(a,b,c){if(a.o)if(3==a.o)a.Gd();else return;wS(a,b,3,c)};
wS=function(a,b,c,d){(0,window.isNaN)(a.C)||(a.C=window.NaN,a.H.style.background="");a.A=b;a.O=!!d;d?a.G=d:(a.G=b.getAttribute("title"),b.removeAttribute("title"));a.element.className="ytp-tooltip";if(b=b.getAttribute("data-tooltip-image"))a.wa.style.backgroundImage="url("+b+")";g.N(a.element,"ytp-tooltip-image-enabled",!!b);a.o=c;a.T.addEventListener("appresize",a.X);a.L&&(uS(a),a.K.show(0))};
uS=function(a){var b=a.A.getAttribute("data-tooltip-text");if(b&&!a.O){a.pa("text",b);var c=a.A.getAttribute("data-duration");a.update({title:a.G,duration:c});var d=a.A.getAttribute("data-preview"),e=160*a.D,f=90*a.D,k=160*a.D,l=90*a.D;a.H.style.width=e+"px";a.H.style.height=f+"px";a.H.style.backgroundImage=d?"url("+d+")":"";a.H.style.backgroundPosition=(e-k)/2+"px "+(f-l)/2+"px";a.H.style.backgroundSize=k+"px "+l+"px";g.xo(a.element,["ytp-text-detail","ytp-preview"]);g.N(a.element,"ytp-has-duration",
!!c)}else a.pa("text",a.G),g.yo(a.element,["ytp-text-detail","ytp-preview","ytp-has-duration"]);3==a.o?a.element.setAttribute("role","status"):a.element.removeAttribute("role");yS(a,!!b)};
yS=function(a,b,c){a.element.style.maxWidth=b?"":Math.min(a.ha,200*a.D)+"px";zS(a.oa,a.element,a.A,c,1==a.o);a.element.style.top?g.L(a.element,"ytp-bottom"):a.element.style.bottom&&g.L(a.element,"ytp-top");3==a.o&&a.da.start()};
hR=function(a){a.A&&!a.O&&a.A.hasAttribute("title")&&(a.G=a.A.getAttribute("title"),a.A.removeAttribute("title"),a.L&&uS(a))};
AS=function(a,b){g.N(a.element,"ytp-preview",0<=b);if(!(0>b||b==a.C)){a.C=b;var c=160*a.D,d=160*a.D,e=DD(a.B,a.C,c);uO(a.H,e,c,d,!0);a.ba.start()}};
g.BS=function(a,b,c,d,e){d=d||375;e=e||440;var f=window.document.location.protocol+"//"+window.document.domain+"/post_login";b&&(f=vg(f,"mode",b));b=vg("/signin?context=popup","next",f);c&&(b=vg(b,"feature",c));if(c=window.open(b,"loginPopup","width="+d+",height="+e+",resizable=yes,scrollbars=yes",!0))b=g.zt("LOGGED_IN",function(b){g.At(g.P("LOGGED_IN_PUBSUB_KEY",void 0));g.Vq("LOGGED_IN",!0);a(b)}),g.Vq("LOGGED_IN_PUBSUB_KEY",b),c.moveTo((window.screen.width-d)/2,(window.screen.height-e)/2)};
ES=function(a,b,c){g.U.call(this,{F:"button",Z:["ytp-watch-later-button","ytp-button"],P:{title:"{{title}}","data-tooltip-image":"{{image}}"},J:[{F:"div",M:"ytp-watch-later-icon",J:["{{icon}}"]},{F:"div",M:"ytp-watch-later-title",J:["{{watch_later}}"]}]});this.o=a;this.H=b.o;this.G=c;g.L(c,"ytp-watch-later-button-visible");this.D=null;this.B=this.A=!1;mM(a,this,28665);this.ga("click",this.GB,this);this.N(a,"videoplayerreset",this.HB);this.N(a,"appresize",this.tc);this.tc(g.PL(a).Na());a=g.W(this.o);
c=g.ku("yt-player-watch-later-pending");a.experiments.g("embed_show_watchlater_login")&&a.A&&c?(fx(),CS(this,c.videoId)):DS(this,2);g.te(this,RP(b.o,this.element))};
CS=function(a,b){if(!a.B){a.B=!0;DS(a,3);var c=g.W(a.o);(a.A?bP:aP)({videoIds:b,Lb:c.Lb,pageId:c.pageId,onError:a.sF,nb:a.A?a.tF:a.rF,context:a},c.baseYtUrl,!0)}};
DS=function(a,b,c){if(b!=a.D){switch(b){case 3:var d=SO();break;case 1:d=g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-watch-later-added"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},J:[{F:"path",Da:!0,M:"ytp-svg-fill",P:{d:"M15.03,26 L7,17.91 L9.83,15.05 L14.94,20.19 L25.07,10 L28,12.94 L15.03,26 Z"}}]};break;case 2:d=g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-watch-later"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},J:[{F:"path",Da:!0,M:"ytp-svg-fill",
P:{d:"M18,8 C12.47,8 8,12.47 8,18 C8,23.52 12.47,28 18,28 C23.52,28 28,23.52 28,18 C28,12.47 23.52,8 18,8 L18,8 Z M16,19.02 L16,12.00 L18,12.00 L18,17.86 L23.10,20.81 L22.10,22.54 L16,19.02 Z"}}]};break;case 4:d=g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-alert"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},J:[{F:"path",Da:!0,M:"ytp-svg-fill",P:{d:"M21,7.91 L19.60,20.91 L16.39,20.91 L15,7.91 L21,7.91 Z M18,27.91 C16.61,27.91 15.5,26.79 15.5,25.41 C15.5,24.03 16.61,22.91 18,22.91 C19.38,22.91 20.5,24.03 20.5,25.41 C20.5,26.79 19.38,27.91 18,27.91 Z"}}]}}a.pa("icon",
d);a.D=b}c?a.update({title:c,image:null}):(b=g.W(a.o),b.userDisplayName?(c={USER_NAME:b.userDisplayName},a.update({title:a.A?g.Q("YTP_ADDED_TO_WATCH_LATER_AS",c):g.Q("YTP_WATCH_LATER_AS_2",c),image:b.userDisplayImage})):a.update({title:g.Q("YTP_WATCH_LATER"),image:null}));hR(a.H)};
FS=function(a){g.U.call(this,{F:"a",Z:["ytp-watermark","yt-uix-sessionlink"],P:{target:"_blank",href:"{{url}}","aria-label":g.Q("YTP_URL_NAVIGATE_TO",{WEBSITE:dD(g.W(a))}),"data-sessionlink":"feature=player-watermark"},J:[g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-watermark"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 77 34",width:"100%"},J:[{F:"path",Da:!0,M:"ytp-svg-fill",P:{d:"m 26.81,26.92 0,-1.67 c -1.06,1.25 -1.96,1.89 -2.94,1.89 -0.86,0 -1.46,-0.41 -1.76,-1.17 -0.18,-0.46 -0.31,-1.18 -0.31,-2.23 l 0,-12.18 2.80,0 0,12.48 c .06,.42 .24,.58 .59,.58 .53,0 1.02,-0.48 1.61,-1.34 l 0,-11.72 2.80,0 0,15.38 -2.80,0 0,0 z M 18.83,12.91 c -0.74,-1.05 -1.91,-1.48 -3.10,-1.48 -1.33,0 -2.35,.43 -3.10,1.48 -0.57,.77 -0.88,2.02 -0.88,3.66 l -0.00,5.46 c 0,1.63 .27,2.76 .84,3.53 .74,1.04 1.95,1.60 3.13,1.60 1.18,0 2.41,-0.55 3.16,-1.60 .56,-0.76 .82,-1.89 .82,-3.53 l 0,-5.48 c 0,-1.64 -0.32,-2.87 -0.88,-3.65 l 0,0 0,0 z m -1.91,9.44 c .14,1.52 -0.31,2.27 -1.18,2.27 -0.87,0 -1.32,-0.75 -1.18,-2.27 l 0,-6.09 c -0.14,-1.52 .31,-2.23 1.18,-2.23 .87,0 1.33,.71 1.18,2.23 l -0.00,6.09 0,0 z m -8.27,4.56 -2.95,0 0,-8.37 c 0,0 -3.06,-10.27 -3.69,-12.18 l 3.10,0 2.07,8.02 2.06,-8.02 3.10,0 -3.69,12.18 0,8.37 0,0 z"}},
{F:"path",Z:["ytp-svg-fill","ytp-svg-fill-logo-tube-text"],P:{d:"m 34,5.07 40,0 0,24 -40,0 z",fill:"none"}},{F:"path",Da:!0,Z:["ytp-svg-fill","ytp-svg-fill-logo-tube-lozenge"],P:{d:"M 73.80,3.53 C 72.12,1.72 70.24,1.72 69.38,1.61 63.21,1.15 53.95,1.15 53.95,1.15 c -0.01,0 -9.27,0 -15.44,.45 -0.86,.10 -2.74,.11 -4.41,1.91 -1.32,1.37 -1.75,4.49 -1.75,4.49 0,0 -0.44,3.66 -0.44,7.32 l 0,3.43 c 0,3.66 .44,7.32 .44,7.32 0,0 .43,3.11 1.75,4.49 1.67,1.80 3.88,1.74 4.86,1.93 C 42.48,32.89 53.94,33 53.94,33 c 0,0 9.26,-0.01 15.43,-0.47 .86,-0.10 2.74,-0.11 4.41,-1.91 1.32,-1.37 1.75,-4.49 1.75,-4.49 0,0 .44,-3.66 .44,-7.32 l 0,-3.43 c 0,-3.66 -0.44,-7.32 -0.44,-7.32 0,0 -0.43,-3.11 -1.75,-4.49 l 0,0 0,0 z m -35.17,23.39 0,-17.51 -3.10,0 0,-2.89 9.30,-0.00 0,2.89 -3.24,0 0,17.51 -2.95,0 0,0 z m 10.78,0 0,-1.67 c -1.06,1.25 -1.96,1.89 -2.94,1.89 -0.86,0 -1.46,-0.41 -1.76,-1.17 -0.18,-0.46 -0.31,-1.18 -0.31,-2.23 l 0,-12.03 2.80,0 0,12.33 c .06,.42 .24,.58 .59,.58 .53,0 1.02,-0.48 1.61,-1.34 l 0,-11.57 2.80,0 0,15.23 -2.80,0 0,0 z m 12.70,-1.52 c -0.35,1.13 -1.13,1.71 -2.19,1.71 -0.95,0 -2.01,-0.58 -2.90,-1.72 l -0.00,1.53 -3.02,0 0,-20.40 3.02,0 -0.00,6.65 c .86,-1.09 1.92,-1.71 2.91,-1.71 1.06,0 1.78,.63 2.13,1.77 .17,.61 .35,1.59 .35,3.03 l 0,6.09 c 0,1.40 -0.11,2.40 -0.29,3.04 l 0,0 0,0 z m 7.36,-1.89 c .02,-0.15 .02,-0.80 .02,-1.91 l 2.80,0 0,.43 c 0,.88 -0.07,1.51 -0.09,1.79 -0.09,.61 -0.30,1.16 -0.62,1.65 -0.73,1.10 -1.83,1.64 -3.23,1.64 -1.39,0 -2.46,-0.51 -3.23,-1.55 -0.56,-0.76 -0.93,-1.89 -0.93,-3.51 l 0,-5.33 c 0,-1.62 .33,-2.88 .89,-3.65 .77,-1.04 1.83,-1.59 3.20,-1.59 1.34,0 2.40,.55 3.15,1.59 .55,.76 .86,1.95 .86,3.58 l 10e-4,3.11 -5.32,0 0,2.73 c -0.00,1.40 .37,2.11 1.29,2.11 .65,0 1.04,-0.36 1.19,-1.10 l 0,0 0,0 z m -1.21,-9.51 c -0.89,0 -1.27,.38 -1.27,1.81 l 0,1.68 2.51,-0.00 0,-1.66 c 0,-1.40 -0.35,-1.83 -1.23,-1.83 l 0,0 0,0 z m -11.16,.69 -0.00,9.23 c .44,.46 .95,.69 1.39,.69 .77,0 1.11,-0.58 1.11,-2.10 l 0,-6.54 c 0,-1.52 -0.34,-1.97 -1.11,-1.97 -0.44,0 -0.94,.23 -1.39,.69 l 0,0 0,0 z",
fill:"#fff"}}]}]});this.A=a;this.o=null;this.N(a,"videodatachange",this.B);this.N(a,"presentingplayerstatechange",this.D);a=g.OL(a);this.rb(!g.T(a,2));this.B()};
GS=function(a){KP.call(this,a);var b=g.W(a),c=g.PL(a),d=g.W(this.g),e=d.ba;if(dy("ytp-normal-css-loaded")){var f=dy("ytp-sprite-mode-css-loaded");e!=f&&g.xr(Error("Player sprite mode mismatch. playerInSpriteMode: "+e+", spriteModeCssServed: "+f+", isMobile: "+d.isMobile),"WARNING")}this.X=null;this.H=[];d=new g.U({F:"div",M:"ytp-gradient-top"});g.J(this,d);g.jM(a,d.element,1);this.Va=new g.iO(d,250,!0,100);g.J(this,this.Va);this.C=new g.U({F:"div",M:"ytp-chrome-top"});g.J(this,this.C);g.jM(a,this.C.element,
1);this.Ua=new g.iO(this.C,250,!0,100);g.J(this,this.Ua);this.oa=[];this.o=new tS(a,this);g.J(this,this.o);g.jM(a,this.o.element,5);!b.experiments.g("related_on_pause_killswitch")&&b.A&&b.Fc&&(this.ib=new zQ(a,this),g.J(this,this.ib),g.jM(a,this.ib.element,5));this.K=new QP(a,this);g.J(this,this.K);g.jM(a,this.K.element,2);d=new EQ(a);g.J(this,d);g.jM(a,d.element,6);d.subscribe("show",(0,g.A)(this.dl,this,d));this.oa.push(d);d=new GQ(a,this,d);g.J(this,d);d.ra(this.C.element);this.La=new qS(a);g.J(this,
this.La);this.La.ra(this.C.element);d=new g.bH({F:"div",M:"ytp-chrome-top-buttons"});g.J(this,d);d.ra(this.C.element);b.experiments.g("embed_show_top_buttons")&&b.A&&g.L(d.element,"ytp-chrome-top-show-buttons");b.QF&&(this.wa=new ES(a,this,this.C.element),g.J(this,this.wa),this.wa.ra(d.element));e=new IQ(a,this);g.J(this,e);g.jM(a,e.element,6);e.subscribe("show",(0,g.A)(this.dl,this,e));this.oa.push(e);this.Ma=new LQ(a,this,e,this.C.element);g.J(this,this.Ma);this.Ma.ra(d.element);(this.A="1"==b.C?
new kS(a,this,this.B):null)&&g.J(this,this.A);"3"==b.C&&(d=new HQ(a,this),g.J(this,d),g.jM(a,d.element,9));this.L=new rQ(a,this);g.J(this,this.L);this.L.subscribe("show",this.vr,this);this.Ka=!1;b.Wg&&(d=new FS(a),g.J(this,d),g.jM(a,d.element,8));d=new NP(a);g.J(this,d);g.jM(a,d.element,5);this.fa=new g.U({F:"div",P:{tabindex:0}});this.fa.ga("focus",this.Nw,this);g.J(this,this.fa);this.da=new g.U({F:"div",P:{tabindex:0}});this.da.ga("focus",this.Ow,this);g.J(this,this.da);(this.ha=b.useTabletControls?
null:new tQ(a,c,this.L,this.B,this.G,(0,g.A)(this.Qi,this)))&&g.J(this,this.ha);this.N(a,"fullscreentoggled",this.JA);this.N(a,"offlineslatestatechange",this.bE,this);this.N(a,"cardstatechange",this.Fe,this)};
zS=function(a,b,c,d,e){b.style.left="";b.style.top="";b.style.bottom="";var f=g.oh(b);e=e||a.A&&g.je(a.A.na(),c);if(null==d||!e){var k=g.oh(c);var l=g.lh(c,a.g.getRootNode())}d=(null==d?l.x+k.width/2:d)-f.width/2;e?(k=mS(a.A),l=nS(a.A),c=g.PL(a.g).Na().height,d=g.td(d,k,k+l-f.width),f=c-(a.A.A.Xc()?72:50)-f.height):g.je(a.C.element,c)?(k=g.PL(a.g).Na().width,d=g.td(d,12,k-f.width-12),f=a.Xc()?69:48,"gvn"==g.W(a.g).o&&(f+=20)):(a=g.PL(a.g).Na(),d=g.td(d,12,a.width-f.width-12),f=l.y>(a.height-k.height)/
2?l.y-f.height-12:l.y+k.height+12);b.style.top=f+"px";b.style.left=d+"px"};
HS=function(a,b,c){b=c?b.lastElementChild:b.firstElementChild;for(var d=null;b;){if("none"!=g.$g(b,"display")&&"true"!=b.getAttribute("aria-hidden")){var e=void 0;0<=b.tabIndex?e=b:e=HS(a,b,c);e&&(d?c?e.tabIndex>d.tabIndex&&(d=e):e.tabIndex<d.tabIndex&&(d=e):d=e)}b=c?b.previousElementSibling:b.nextElementSibling}return d};
IS=function(a){this.K=a;this.D=null;this.A=[];this.o=[];this.C=[];this.H=1;this.g=[];this.B=!1};
g.lM=function(a,b,c){a.B?a.C.push({type:b,data:c}):a.K.U(b,c)};
NS=function(a,b){g.I.call(this);var c=this;this.ba=qt(b);var d=this.ba.args||{};this.V=new ZC(d);g.J(this,this.V);this.V.experiments.g("legacy_autoplay_flag")||"detailpage"!=this.V.g||(d.autoplay="1");this.Gc=wC("detailpage"==this.V.g&&"blazer"!=this.V.o,d.enablesizebutton);this.Ka=wC(!1,d.player_wide);this.X=this.V.gb&&wC(!1,d.external_list);this.Ea=(this.Dc=this.V.gb&&wC(!1,d.external_play_video))&&this.V.experiments.g("player_unified_fullscreen_transitions");this.T=new g.dt(this);g.J(this,this.T);
ag=function(a,b){g.xr(b,"WARNING")};
this.Ua=null;this.W=new g.nq;this.aa=new g.nq;this.da=new IS(this.aa);this.da.pause();this.g=new HL(this);g.J(this,this.g);this.K=new HL(this,1);g.J(this,this.K);this.G=new CO(this);g.J(this,this.G);this.O=1;this.Wa={};this.L=this.V.storeUserVolume?cx():{volume:100,muted:this.V.mute};this.R=this.V.gb?new LG(this,1):new kx(this,1);g.J(this,this.R);this.D=null;this.Va={};d={};this.wb=(d.internalAbandon=this.mC,d.internalvideodatachange=this.lC,d.playbackready=this.nC,d.playbackstarted=this.oC,d.statechange=
this.Ky,d.signatureexpired=this.QE,d);this.A=JS(this);g.J(this,this.A);this.H=new MG(this.V,"",this.A);this.o=KS(this);d={};this.Fc=(d.airplayactivechange=this.cC,d.airplayavailabilitychange=this.dC,d.beginseeking=this.uC,d.endseeking=this.cD,d.internalAbandon=this.nD,d.internalaudioformatchange=this.qC,d.internalvideodatachange=this.wm,d.internalvideoformatchange=this.mF,d.liveviewshift=this.sD,d.playbackstalledatstart=this.WE,d.progresssync=this.Ny,d.seekto=this.Oy,d.onLoadProgress=this.tD,d.onVideoProgress=
this.Qy,d.playbackready=this.jE,d.statechange=this.Qs,d.connectionissue=this.LC,d.newelementrequired=this.WD,d.heartbeatparams=this.Ly,d.videoelementevent=this.Py,d);this.C=null;this.wa=new kP(5,function(a){a!=g.X(c,a.getPlayerType())&&a.dispose()});
g.J(this,this.wa);this.Bb=this.Cb=-1;this.Ya=new g.O(this.G.ke,16,this.G);g.J(this,this.Ya);this.ib=!1;this.fa=!0;this.za=this.Ma=this.B=null;this.Qb=!1;this.bc=this.Ec=null;this.Xa=this.ha=0;this.oa=this.La=!1;this.Fa=this.la=null;this.T.N(this.g,"crn_appapi",this.jC);this.T.N(this.g,"crx_appapi",this.kC);this.T.N(this.g,"crn_appad",this.ds);this.T.N(this.g,"crx_appad",this.ds);this.T.N(this.g,"presentingplayerstatechange",this.My);this.T.N(this.g,"resize",this.BE);this.G.ra(g.Id(a));this.sc=this.V.experiments.g("html5_enable_embedded_player_visibility_signals")&&
this.V.A?new mP(this.G.element):null;g.J(this,this.sc);g.Zq=this.V.ba;LS(this);this.H.o("fs");MS(this);this.Fa=new GS(this.g);this.A.D=this.Fa;this.Fa.init();g.XL(this.K,"init")};
KS=function(a){var b=new CK(a.V,1,a.H,a.G,(0,g.A)(a.W.U,a.W),(0,g.A)(a.Bh,a));GL(b,a.V.A?1:OS(a,g.ku("yt-player-playback-rate")||1));PS(a,b,a.wb);return b};
JS=function(a){var b="",c=a.ba.assets.js||"";0==c.indexOf("//")&&(c=a.V.X+":"+c);"/base.js"==c.substr(-8)&&(b=c.substr(0,c.length-8)+"/");b=new vO(a.g,b,a);c={};a=(c.loaded=(0,g.A)(a.LD,a),c.unloaded=(0,g.A)(a.MD,a),c.destroyed=(0,g.A)(a.Xm,a),c);b.fa=a;return b};
RS=function(a,b){a.Ua||(a.Ua=new jP(a),g.J(a,a.Ua),g.jM(a.g,a.Ua.element,5));a.Ua.rb(b);QS(a)&&g.NL(a.A).hA()};
TS=function(a){var b=SS.getTag(!0,!a.V.D);a.D=new yy(b);a.C&&hL(a.C,a.D);try{if(a.V.wa)a.za&&a.T.Qa(a.za),a.za=a.T.N(a.D,"volumechange",a.JD);else{a.D.setVolume(a.L.volume/100);var c=a.D,d=a.L.muted;cy();c.g.muted=d}}catch(e){b="setvolume.1;emsg."+(e.message&&e.message.replace(/[;:,]/g,"_"));g.NK(a.o,"html5.missingapi","YTP_ERROR_UNSUPPORTED_DEVICE",b);return}GO(a.G,b);try{qy(a.D)}catch(e){b="activate.1;emsg."+(e.message&&e.message.replace(/[;:,]/g,"_")),g.NK(a.o,"html5.missingapi","YTP_ERROR_UNSUPPORTED_DEVICE",
b)}};
US=function(a){if(a.D){a.za&&(a.T.Qa(a.za),a.za=null);a.C&&fL(a.C);var b=a.G;b.o&&(g.de(b.o),b.o=null);SS.releaseTag(a.D.na());a.D=null}};
YS=function(a,b){var c=g.X(a,b);c||(c=VS(a,b),WS(a,c));XS(a,c)};
XS=function(a,b){if(a.C!=b){var c=null;a.C&&(c=a.C.A,AO(a.A),cM(a,"cuerangesremoved",a.C.D.g.g||[]),ZS(a));WS(a,b);a.C=b;a.D&&hL(b,a.D);PS(a,b,a.Fc);a.wm("newdata",b,b.g);a.V.experiments.g("disable_new_presenting_state_change")||!c||g.$F(c,b.A)||a.Qs(new g.eG(b.A,c));b.ha.g&&a.wm("dataloaded",b,b.g);b.g.Ba&&a.g.va("onPlaybackQualityChange",b.g.Ba.video.quality);cM(a,"cuerangesadded",a.C.D.g.g||[]);aG(b.A)&&oL(b)}};
PS=function(a,b,c){for(var d in c)b.subscribe(d,c[d],a)};
WS=function(a,b){if(b!=a.o){var c=b.getPlayerType();a.Va[c]=b}};
ZS=function(a){fL(a.C);var b=a.C,c=a.Fc,d;for(d in c)b.unsubscribe(d,c[d],a);b=a.C;b!=a.o&&(c=b.getPlayerType(),a.Va[c]==b&&delete a.Va[c]);a.C=null};
g.X=function(a,b){return b?1==b?a.o:a.Va[b]||null:a.C};
VS=function(a,b){if(2==b){var c=g.ec(a.V.T);a.V.experiments.g("legacy_autoplay_flag")&&(c.autoplay="1");c.eventid=$S(a).eventId;c.content_v=$S(a).videoId;c=new ZC(c);c.g="adunit";c=new CK(c,2,new MG(c,""),a.G,(0,g.A)(a.W.U,a.W),(0,g.A)(a.Bh,a))}else c=new CK(a.V,b,a.H,a.G,(0,g.A)(a.W.U,a.W),(0,g.A)(a.Bh,a));return c};
aT=function(a){var b=a.A;if(!b.A)try{xO(b)?(b.A=new pO(b.ha.K),b.A.create()):g.gM(b.R,"ad")}catch(c){g.gM(b.R,"ad"),g.xr(c)}b.rp();b.mp();b.tp();b.vp();b.up();b.qp();b.kp();b.lp();b.pp();b.np();b.Xk();b.sp();a.g.U("videoready",$S(a))};
$S=function(a){return a.C.g};
bT=function(a,b){var c=g.X(a,b);return(c=c?c.o:null)?uy(c):0};
g.cT=function(a,b,c){(a=g.X(a,void 0===c?1:c))&&DK(a,b)};
dT=function(a){var b=a.o.g;return a.V.experiments.g("legacy_autoplay_flag")?a.V.pi:b.kf};
LS=function(a){var b=new g.WE(a.ba.args);g.av()&&b.ad.push("remote");b.sd()&&(MK(a.o,b,(0,g.A)(a.xc,a)),dT(a)&&(a.V.Gc||a.V.ne)&&QK(a.o))};
MS=function(a){var b=a.G,c=b.app.V;c.Zg||b.Yn("tag-pool-enabled");c.Tb&&b.Yn("house-brand");"gvn"==c.o&&(b.Yn("ytp-gvn"),b.element.style.backgroundColor="transparent");c.la&&(b.G=g.zt("yt-dom-content-change",b.ke,b));b.N(window,"resize",b.ke,b);b=a.R;b.o=a.G.element;for(var d in b.B)b.o[d]=b.B[d];for(d in b.A)b.o[d]=b.A[d];(d=Os(a.G.element))&&a.T.N(a.G,d,a.eD);a.T.N(window,"resize",a.CE);b=a.ba.args;TS(a);d=a.o.g;a.g.va("onVolumeChange",a.L);if(b&&WG(b))if((c=gD(a.V))&&!a.X&&(b.fetch=0),eT(a,b),
c&&!a.X)fT(a);else if(!d.sd())a.B.onReady((0,g.A)(a.cn,a));if(b=a.ba.args.jsapicallback)g.wa(b)||(b=g.y(b)),b&&(0,g.A)(b,g.w,a.V.ly);XS(a,a.o);g.T(a.o.A,128)||(b=by(a.V.D),"fmt.noneavailable"==b?g.NK(a.o,"html5.missingapi","YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK","nocodecs.1"):"html5.missingapi"==b?g.NK(a.o,b,"YTP_ERROR_UNSUPPORTED_DEVICE","nocanplaymedia.1"):d&&d.sd()&&dT(a)&&(a.V.Gc||a.V.ne)?gT(a):"leanback"!=a.V.g&&hT(a))};
hT=function(a){a.g.U("initializingmode");g.iT(a,2);a.A.Xk()};
gT=function(a){if(g.T(a.o.A,128))return!1;dT(a)&&a.V.ne&&(SS.hasTags(void 0)&&a.oa?(mx(a,{muted:!1,volume:a.L.volume},!1),jT(a,!1)):SS.hasTags(void 0)||a.L.muted||(mx(a,{muted:!0,volume:a.L.volume},!1),jT(a,!0)));kT(a,1,a.o.g.videoId);a.g.U("initializingmode");XS(a,a.o);g.iT(a,3);var b;if(!(b=!a.V.Zg||VC()&&!a.Qb)){if(b=a.la)b=a.D,b=!!b&&b==a.la.g;b=b&&a.Qb}b&&(US(a),TS(a),hL(a.o,a.D));TK(a.o);if(g.T(a.o.A,128))return!1;lT(a,3);return a.Qb=!0};
QS=function(a){a=g.NL(a.A);return!!a&&a.loaded};
mT=function(a,b){if(a.C==a.o&&a.C.Ec!=b){var c=a.C;c.Ec=b;c.o&&(c.o.g.loop=b);a.g.U("loopchange",b)}};
nT=function(a,b,c){(0,window.isNaN)(b)||(b=OS(a,b),a.o.Fa!=b&&(GL(a.o,b),c&&!a.V.A&&g.ju("yt-player-playback-rate",b),a.g.va("onPlaybackRateChange",b)))};
OS=function(a,b){var c=1,c=a.g.Bg();return c=1>b?g.jb(c,function(a){return a>=b}):lb(c,function(a){return a<=b})};
pT=function(a,b){var c=CL(a.o,b);a.C&&a.C!=a.o&&(c=oT(c,CL(a.C,b),"ad_"));if(b&&a.D){c["0sz"]=0==g.oh(a.D.g).Sb();c.op=Zg(a.D.g,"opacity");var d=dh(a.D.g).y+g.oh(a.D.g).height;c.yof=0>=d;c.dis=Zg(a.D.g,"display")}(d=b?PK():null)&&(c.gpu=d);c.cgr=!0;c.debug_playbackQuality=a.K.Dh();c.debug_date=(new Date).toString();delete c.uga;delete c.q;(d=a.A.G)&&(c=oT(c,d.Fu(),"fresca_"));return JSON.stringify(c,null,2)};
ML=function(a){return 1==a.O?1:QS(a)?3:g.X(a).getPlayerType()};
qT=function(a,b){return 3==ML(a)?dG(g.NL(a.A).G):2==b?a.Bb:a.Cb};
rT=function(a){var b=a.A.A;b&&b.o&&b.destroy();mT(a,!1);a.Wa={};a=a.H;b=a.A;b.aa={};b.ba={};a.B=!1};
fT=function(a){var b=sT();if(b)if(!b.list)a.Ii();else if(a.B&&a.B.listId.toString()==b.list)if(0<=b.index){var c=b.video;a.g.isFullscreen()&&((c=c[a.B.Za])&&c.encrypted_id!=a.B.zb().videoId||(b.index=a.B.Za));$G(a.B,b);a.Ma&&tT(a,a.Ma)}else a.Ma=null};
eT=function(a,b){a.B&&(a.B.unsubscribe("error",a.Ii,a),g.ue(a.B),a.B=null);b&&(a.X&&(b.fetch=0),a.B=new g.VG(b),a.B.subscribe("error",a.Ii,a))};
uT=function(a,b,c,d){b in a.Wa||(c=new g.rx(c,d,{id:b,priority:1}),c.namespace="appad",mJ(a.o.D,[c]),a.Wa[b]=c)};
vT=function(a,b,c){c={label:c};a.V.experiments.g("send_pyv_ad_mt_and_abandon_pings")&&(a=1E3*a.getCurrentTime(),c.ad_mt=Math.round(Math.max(0,a)).toString());return g.Or(b,c)};
g.iT=function(a,b){b!=a.O&&(2==b&&(lT(a,-1),lT(a,5)),a.O=b,a.g.U("appstatechange",b))};
lT=function(a,b){a.C&&2==a.C.getPlayerType()?a.Bb!=b&&(a.Bb=b,a.g.va("onAdStateChange",b)):a.Cb!=b&&(a.Cb=b,a.g.va("onStateChange",b))};
wT=function(a,b,c,d,e){c=0!=c;if(e=g.X(a,e))2==a.O&&gT(a),VK(e,b,c,d)};
yT=function(a,b,c,d,e){a.V.Tb&&qD(b);a.V.experiments.g("legacy_autoplay_flag")||"detailpage"!=a.V.g||(b.autoplay="1");var f=new g.WE(b);d||(b&&WG(b)?(gD(a.V)&&!a.X&&(b.fetch=0),eT(a,b)):a.B&&eT(a,null),a.X=wC(!1,b.external_list),gD(a.V)&&!a.X&&fT(a));return xT(a,f,c,e)};
AT=function(a,b,c,d){a.wa.get(c+b.videoId)||(b.Mj=!0,d?(d=g.X(a,c),zT(a,c)):d=VS(a,c),MK(d,b,(0,g.A)(a.xc,a)),QK(d,!0),a.wa.set(c+b.videoId,d))};
kT=function(a,b,c){var d=b+c;if(c=a.wa.get(d)){a.wa.remove(d);if(c==g.X(a,b))return c;if(1==c.getPlayerType()){c.g.autonavState=a.o.g.autonavState;b=a.o;var d=a.wb;for(e in d)b.unsubscribe(e,d[e],a);var e=a.o.Fa;a.o.dispose();a.o=c;GL(a.o,e);PS(a,c,a.wb);rT(a)}else(e=g.X(a,b))&&e.dispose();a.C.getPlayerType()==c.getPlayerType()?XS(a,c):WS(a,c)}return c};
xT=function(a,b,c,d){JE("_start",a.H.g)||(wE("p",void 0,a.H.g),a.H.info("srt",0));var e=kT(a,c||a.C.getPlayerType(),b.videoId);if(!e){e=g.X(a,c);if(!e)return!1;a.Ya.stop();zT(a,c);MK(e,b,(0,g.A)(a.xc,a),d)}if(!OK(e))return!1;a.ib&&(e.Ya=!1,a.ib=!1);if(e==a.o)return g.iT(a,1),gT(a);TK(e);return!0};
BT=function(a,b,c){c=g.X(a,c);b&&c==a.o&&(c.g.Zd=!0)};
DT=function(a,b,c){a.V.Tb&&qD(b);if(b&&WG(b))if(a.fa=!0,eT(a,b),(b=a.B.zb())&&b.sd())CT(a,b,c);else a.B.onReady((0,g.A)(a.cn,a));else c||(c=ML(a)),1==c&&a.Ii(),CT(a,new g.WE(b),c)};
CT=function(a,b,c){var d=g.X(a,c);d&&(zT(a,c),MK(d,b,(0,g.A)(a.xc,a)),d.V.ge(b.xb),d==a.o&&(g.iT(a,1),hT(a)))};
g.FT=function(a,b,c,d,e,f){if(!b&&!d)throw Error("Playback source is invalid");a.g.isFullscreen()&&!a.Ea||!YC(a.V)?(c=a.H,f=c.A,f.aa={},f.ba={},c.B=!1,a.H.reset(),b={video_id:b},e&&(b.autoplay="1"),d?(b.list=d,a.fa=!1,ET(a,b,void 0,void 0,void 0)):yT(a,b,1)):(c=c||{},c.lact=g.Rt(),c.vis=a.Bh(),a.Dc||"gaming"==a.V.o?a.g.va("onPlayVideo",{videoId:b,sessionData:c,listId:d}):(d=f&&$S(a).isLiveDestination?a.V.W:a.V.getVideoUrl(b,d),e=g.y("yt.player.exports.navigate"),a.V.experiments.g("legacy_navigate_with_player")?
(e(d,c,!0),qN(d)):e(d,c)))};
ET=function(a,b,c,d,e){if(g.ya(b)&&!g.ua(b)){c="playlist list listType index startSeconds suggestedQuality".split(" ");d={};for(e=0;e<c.length;e++){var f=c[e];b[f]&&(d[f]=b[f])}b=d}else c={index:c,startSeconds:d,suggestedQuality:e},g.u(b)&&16==b.length?c.list="PL"+b:c.playlist=b,b=c;eT(a,b);a.B.onReady((0,g.A)(a.cn,a))};
g.vP=function(a){if(a.g.app.oa)return!1;if(3==ML(a))return!0;gD(a.V)&&!a.X&&fT(a);return!(!a.B||!a.B.hasNext())};
GT=function(a,b){a.o.g.autonavState=b;a.g.U("autonavchange",b)};
HT=function(a,b,c){var d=g.X(a,1).g.ee;g.kM(a.g)&&d?(d=g.H(d,g.lP),b=d[0],d=c?b.Ap:b.Pc,g.FT(a,b.zb().videoId,d,b.getPlaylistId(),c)):!a.X||a.g.isFullscreen()&&!a.Ea?3==ML(a)?g.NL(a.A).fA():a.B&&(gD(a.V)&&!a.g.isFullscreen()?tT(a,"yt.www.watch.lists.next"):(a.B.hasNext(b)&&ZG(a.B,XG(a.B)),a.B.be?xT(a,a.B.zb(void 0,c),1):a.fa=!1)):a.g.va("onPlaylistNext")};
IT=function(a,b){!a.X||a.g.isFullscreen()&&!a.Ea?3==ML(a)?g.NL(a.A).gA():a.B&&(gD(a.V)&&!a.g.isFullscreen()?tT(a,"yt.www.watch.lists.prev"):(a.B.Yd(b)&&ZG(a.B,YG(a.B)),a.B.be?xT(a,a.B.zb(),1):a.fa=!1)):a.g.va("onPlaylistPrevious")};
tT=function(a,b){var c=g.y(b);if(c){var d=sT();d&&d.list&&c();a.Ma=null}else a.Ma=b};
sT=function(){var a=g.y("yt.www.watch.lists.getState");return a?a():null};
JT=function(a,b,c,d,e,f){b={id:b};"chapter"==f?(b.style="ytp-chapter-marker",b.visible=!0):(0,window.isNaN)(e)||("ad"==f?b.style="ytp-ad-progress":(b.style="ytp-time-marker",b.color=e),b.visible=!0);c=new g.rx(1E3*c,1E3*d,b);c.namespace="appapi";aM(a,[c],1);return!0};
aM=function(a,b,c){var d=g.X(a,c);d&&(mJ(d.D,b),c&&ML(a)!=c||cM(a,"cuerangesadded",b))};
KT=function(a){var b=(0,g.Ot)(),c=a.getCurrentTime();return b-Math.max(1E3*(c-$S(a).startSeconds),0)};
mx=function(a,b,c){a.V.K&&(a.L=b,b.muted||jT(a,!1),c&&a.V.storeUserVolume&&!a.V.wa&&(c={volume:Math.floor(b.volume),muted:b.muted},c.unstorable||(g.ju("yt-player-volume",c),g.ju("yt-player-volume",c,2592E3))),LT(a),c=g.es&&!a.D.gc(),!a.V.wa||c)&&(b=g.ec(b),a.V.storeUserVolume||(b.unstorable=!0),a.g.va("onVolumeChange",b))};
LT=function(a){var b=$S(a);b.yi||(a.D.setVolume(a.L.volume*(a.V.wa?1:b.Io)/100),b=a.D,a=a.L.muted,cy(),b.g.muted=a)};
jT=function(a,b){b!=a.oa&&(a.oa=b,a.g.U("mutedautoplaychange",b))};
NT=function(a,b){var c=window.screen&&window.screen.orientation;if(a.V.experiments.g("lock_fullscreen2")&&c&&c.lock&&(!g.es||!g.MT))if(b){var d=0==c.type.indexOf("portrait"),e=g.JO(a.G),f=d;1>e?f=!0:1<e&&(f=!1);if(!a.La||f!=d){if(c=c.lock(f?"portrait":"landscape"))c["catch"](g.qa);a.La=!0}}else a.La&&(a.La=!1,c.unlock())};
OT=function(a,b){var c=!!b,d=!!a.Xa!=c;a.Xa=b;a.V.experiments.g("legacy_player_fullscreen_order")?d&&(a.H.o("fsc"),a.V.ha=c,a.G.ke()):(a.V.ha=c,a.G.ke(),d&&a.H.o("fsc"));d&&(a.g.U("fullscreentoggled",c),d=a.o.g,c={fullscreen:c,videoId:d.ypcOrigin||d.videoId,time:a.getCurrentTime()},a.K.getPlaylistId()&&(c.listId=a.K.getPlaylistId()),a.g.va("onFullscreenChange",c))};
cM=function(a,b,c){a.g.U(b,c);var d=g.My(a.V)||g.RC(a.V);if(c&&d){switch(b){case "cuerangemarkersupdated":var e="onCueRangeMarkersUpdated";break;case "cuerangesadded":e="onCueRangesAdded";break;case "cuerangesremoved":e="onCueRangesRemoved"}e&&a.g.va(e,c)}};
PT=function(a,b){var c=g.X(a,b);c&&(2==a.O?gT(a):!a.V.experiments.g("disable_reload_on_error")&&gD(a.V)&&c.A.isError()?window.location.reload():!a.V.experiments.g("new_ended_replay")&&g.T(c.A,2)?wT(a,0):oL(c))};
zT=function(a,b){g.aE(a.ha);a.ha=0;var c=g.X(a,b);if(c&&1!=a.O&&2!=a.O){AO(a.A);if(1==b){var d=a.A.A;d&&d.o&&d.destroy()}dL(c);cM(a,"cuerangesremoved",a.C.D.g.g||[]);c.D.reset()}};
QT=function(a,b,c,d,e){c=0!=c;var f=g.X(a,e);if(!f||2!=f.getPlayerType()&&!g.AF(f.g))3==ML(a)?g.NL(a.A).Mh("control_seek",b,c):wT(a,b,c,d,e)};
RT=function(a,b,c){a.Gc=b;a.Ka=c;a.g.U("sizestylechange",b,c);a.G.ke()};
ST=function(a,b,c){if(!a.ib){c&&(US(a),TS(a));a.ib=!0;c=g.X(a);c.Ya=!0;c.Rc("reloading","reason."+b);c=$S(a);var d={};d.video_id=c.videoId;c.xa||(d.start=g.X(a).getCurrentTime(),d.resume="1");c.je&&(d.vvt=c.je);c.vssCredentialsToken&&(d.vss_credentials_token=c.vssCredentialsToken,d.vss_credentials_token_type=c.nk);c.oauthToken&&(d.oauth_token=c.oauthToken);d.autoplay=1;d.reload_count=c.Zf+1;d.reload_reason=b;c.Pg&&(d.unplugged_partner_opt_out=c.Pg);yT(a,d)}};
TT=function(a){var b=a.V.Ne;$S(a).yi||b?(a=a.D,a.C=!0,cy(),a.g.muted=!0):(a.D.C=!1,mx(a,a.L))};
oT=function(a,b,c){for(var d in b)a[c+d]=b[d];return a};
UT=function(){};
VT=function(a,b,c){return a[b]=a[b]||c};
WT=function(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b};
ZT=function(){var a;if((a=Object.create)&&XT.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a};
bU=function(){var a=$T.href;if(aU.dpo)var b=aU.h;else{b=aU.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=(0,window.decodeURIComponent)(a[2])}catch(e){}}return b};
cU=function(a){var b=VT(aU,"PQ",[]);aU.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)};
dU=function(a){return VT(VT(aU,"H",ZT()),a,ZT())};
hU=function(a,b,c){b&&0<b.length&&(b=eU(b),c&&0<c.length&&(b+="___"+eU(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=VT(fU,"_p",ZT()),VT(b,c,ZT())[a]=(new Date).getTime(),b=gU.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))};
eU=function(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")};
iU=function(a){throw Error("Bad hint"+(a?": "+a:""));};
nU=function(a,b,c,d){var e=a.split(";"),f=e.shift(),k=jU[f],l=null;k?l=k(e,b,c,d):iU("no hint processor for: "+f);l||iU("failed to generate load url");b=l;c=b.match(kU);(d=b.match(lU))&&1===d.length&&mU.test(b)&&c&&1===c.length||iU("failed sanity: "+a);return l};
rU=function(a,b,c,d){function e(a){return(0,window.encodeURIComponent)(a).replace(/%2C/g,",")}
a=oU(a);pU.test(c)||iU("invalid_callback");b=qU(b);d=d&&d.length?qU(d):null;return[(0,window.encodeURIComponent)(a.FF).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.Do?"/am="+e(a.Do):"",a.zt?"/rs="+e(a.zt):"",a.Uu?"/t="+e(a.Uu):"","/cb=",e(c)].join("")};
oU=function(a){"/"!==a.charAt(0)&&iU("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))iU("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),k=(0,window.decodeURIComponent)(f[0]),l=(0,window.decodeURIComponent)(f[1]);2==f.length&&k&&l&&(a[k]=a[k]||l)}b="/"+c.join("/");sU.test(b)||iU("invalid_prefix");c=0;for(d=tU.length;c<d;++c)tU[c].test(b)&&iU("invalid_prefix");
c=uU(a,"k",!0);d=uU(a,"am");e=uU(a,"rs");a=uU(a,"t");return{FF:b,version:c,Do:d,zt:e,Uu:a}};
qU=function(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");vU.test(e)&&b.push(e)}return b.join(",")};
uU=function(a,b,c){a=a[b];!a&&c&&iU("missing: "+b);if(a){if(wU.test(a))return a;iU("invalid: "+b)}return null};
xU=function(){var a=bU();if(!a)throw Error("Bad hint");return a};
yU=function(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c};
CU=function(){var a=aU.nonce;if(void 0!==a)return a&&a===String(a)&&a.match(zU)?a:aU.nonce=null;var b=VT(aU,"us",[]);if(!b||!b.length)return aU.nonce=null;for(var c=AU.getElementsByTagName(BU),d=0,e=c.length;d<e;++d){var f=c[d];if(f.src&&(a=String(f.nonce||f.getAttribute("nonce")||"")||null)){for(var k=0,l=b.length;k<l&&b[k]!==f.src;++k);if(k!==l&&a&&a===String(a)&&a.match(zU))return aU.nonce=a}}return null};
EU=function(a){if("loading"!=AU.readyState)DU(a);else{var b=CU(),c="";null!==b&&(c=' nonce="'+b+'"');AU.write("<"+BU+' src="'+(0,window.encodeURI)(a)+'"'+c+"></"+BU+">")}};
DU=function(a){var b=AU.createElement(BU);b.setAttribute("src",a);a=CU();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=AU.getElementsByTagName(BU)[0])?a.parentNode.insertBefore(b,a):(AU.head||AU.body||AU.documentElement).appendChild(b)};
GU=function(a,b){var c=b&&b._c;if(c)for(var d=0;d<FU.length;d++){var e=FU[d][0],f=FU[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}};
JU=function(a,b,c){HU(function(){var c=b===bU()?VT(IU,"_",ZT()):ZT();c=VT(dU(b),"_",c);a(c)},c)};
LU=function(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);GU(a,c);var d=a?a.split(":"):[],e=c.h||xU(),f=VT(aU,"ah",ZT());if(f["::"]&&d.length){for(var k=[],l=null;l=d.shift();){var m=l.split("."),m=f[l]||f[m[1]&&"ns:"+m[0]||""]||e,n=k.length&&k[k.length-1]||null,q=n;n&&n.hint==m||(q={hint:m,features:[]},k.push(q));q.features.push(l)}var r=k.length;if(1<r){var v=c.callback;v&&(c.callback=function(){0==--r&&v()})}for(;d=k.shift();)KU(d.features,c,d.hint)}else KU(d||[],c,e)};
KU=function(a,b,c){function d(a,b){if(r)return 0;MU.clearTimeout(q);v.push.apply(v,E);var d=((IU||{}).config||{}).update;d?d(f):f&&VT(aU,"cu",[]).push(f);if(b){hU("me0",a,D);try{JU(b,c,n)}finally{hU("me1",a,D)}}return 1}
a=WT(a)||[];var e=b.callback,f=b.config,k=b.timeout,l=b.ontimeout,m=b.onerror,n=void 0;"function"==typeof m&&(n=m);var q=null,r=!1;if(k&&!l||!k&&l)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var m=VT(dU(c),"r",[]).sort(),v=VT(dU(c),"L",[]).sort(),D=[].concat(m);0<k&&(q=MU.setTimeout(function(){r=!0;l()},k));
var E=yU(a,v);if(E.length){var E=yU(a,m),z=VT(aU,"CP",[]),R=z.length;z[R]=function(a){function b(){var a=z[R+1];a&&a()}
function c(b){z[R]=null;d(E,a)&&cU(function(){e&&e();b()})}
if(!a)return 0;hU("ml1",E,D);0<R&&z[R-1]?z[R]=function(){c(b)}:c(b)};
if(E.length){var V="loaded_"+aU.I++;IU[V]=function(a){z[R](a);IU[V]=null};
a=nU(c,E,"gapi."+V,m);m.push.apply(m,E);hU("ml0",E,D);b.sync||MU.___gapisync?EU(a):DU(a)}else z[R](UT)}else d(E)&&e&&e()};
HU=function(a,b){if(aU.hee&&0<aU.hel)try{return a()}catch(c){b&&b(c),aU.hel--,LU("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}};
g.PU=function(a){this.g=a||Ut();NU||(NU=OU(this.g))};
OU=function(a){return(new g.yf(function(b){try{var c={gapiHintOverride:a.gapiHintOverride,_c:{jsl:{h:a.gapiHintParams}},callback:b};b=c;b=void 0===b?{}:b;g.wa(b)&&(b={callback:b});b._c&&b._c.jsl&&b._c.jsl.h||g.ic(b,{_c:{jsl:{h:g.P("GAPI_HINT_PARAMS",void 0)}}});c=b;if(c.gapiHintOverride||g.P("GAPI_HINT_OVERRIDE")){var d=g.Mr(window.document.location.href).gapi_jsh;d&&g.ic(c,{_c:{jsl:{h:d}}})}LU("client",c)}catch(e){g.xr(e)}})).then(function(){})};
QU=function(a,b,c,d){var e={path:Vt(a.g.innertubeApiVersion,b,c),headers:{"X-Goog-Visitor-Id":g.P("VISITOR_DATA")},method:"POST",body:g.eg(c)},f=(0,g.A)(a.B,a);NU.then(function(){f();g.y("gapi.client.request")(e).execute(d||g.qa)})};
aa=[];ha="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
ea="undefined"!=typeof window&&window===this?this:"undefined"!=typeof window.global&&null!=window.global?window.global:this;ga=0;
na("String.prototype.startsWith",function(a){return a?a:function(a,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.startsWith must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");var b=this+"";a+="";for(var e=b.length,f=a.length,k=Math.max(0,Math.min(c|0,b.length)),l=0;l<f&&k<e;)if(b[k++]!=a[l++])return!1;return l>=f}});
na("Array.prototype.fill",function(a){return a?a:function(a,c,d){var b=this.length||0;0>c&&(c=Math.max(0,b+c));if(null==d||d>b)d=b;d=Number(d);0>d&&(d=Math.max(0,b+d));for(c=Number(c||0);c<d;c++)this[c]=a;return this}});
na("Promise",function(a){function b(a){this.g=0;this.A=void 0;this.o=[];var b=this.B();try{a(b.resolve,b.reject)}catch(m){b.reject(m)}}
function c(){this.g=null}
function d(a){return a instanceof b?a:new b(function(b){b(a)})}
if(a)return a;c.prototype.o=function(a){null==this.g&&(this.g=[],this.B());this.g.push(a)};
c.prototype.B=function(){var a=this;this.A(function(){a.D()})};
var e=ea.setTimeout;c.prototype.A=function(a){e(a,0)};
c.prototype.D=function(){for(;this.g&&this.g.length;){var a=this.g;this.g=[];for(var b=0;b<a.length;++b){var c=a[b];delete a[b];try{c()}catch(n){this.C(n)}}}this.g=null};
c.prototype.C=function(a){this.A(function(){throw a;})};
b.prototype.B=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}
var b=this,c=!1;return{resolve:a(this.L),reject:a(this.C)}};
b.prototype.L=function(a){if(a===this)this.C(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.O(a);else{a:switch(typeof a){case "object":var c=null!=a;break a;case "function":c=!0;break a;default:c=!1}c?this.K(a):this.D(a)}};
b.prototype.K=function(a){var b=void 0;try{b=a.then}catch(m){this.C(m);return}"function"==typeof b?this.T(b,a):this.D(a)};
b.prototype.C=function(a){this.G(2,a)};
b.prototype.D=function(a){this.G(1,a)};
b.prototype.G=function(a,b){if(0!=this.g)throw Error("Cannot settle("+a+", "+b|"): Promise already settled in state"+this.g);this.g=a;this.A=b;this.H()};
b.prototype.H=function(){if(null!=this.o){for(var a=this.o,b=0;b<a.length;++b)a[b].call(),a[b]=null;this.o=null}};
var f=new c;b.prototype.O=function(a){var b=this.B();a.Di(b.resolve,b.reject)};
b.prototype.T=function(a,b){var c=this.B();try{a.call(b,c.resolve,c.reject)}catch(n){c.reject(n)}};
b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(z){f(z)}}:b}
var e,f,k=new b(function(a,b){e=a;f=b});
this.Di(d(a,e),d(c,f));return k};
b.prototype["catch"]=function(a){return this.then(void 0,a)};
b.prototype.Di=function(a,b){function c(){switch(d.g){case 1:a(d.A);break;case 2:b(d.A);break;default:throw Error("Unexpected state: "+d.g);}}
var d=this;null==this.o?f.o(c):this.o.push(function(){f.o(c)})};
b.resolve=d;b.reject=function(a){return new b(function(b,c){c(a)})};
b.race=function(a){return new b(function(b,c){for(var e=g.ma(a),f=e.next();!f.done;f=e.next())d(f.value).Di(b,c)})};
b.all=function(a){var c=g.ma(a),e=c.next();return e.done?d([]):new b(function(a,b){function f(b){return function(c){k[b]=c;l--;0==l&&a(k)}}
var k=[],l=0;do k.push(void 0),l++,d(e.value).Di(f(k.length-1),b),e=c.next();while(!e.done)})};
return b});
na("WeakMap",function(a){function b(a){this.Ca=(f+=Math.random()+1).toString();if(a){da();ka();a=g.ma(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(a){oa(a,e)||ha(a,e,{value:{}})}
function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(n){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random().toString().substring(2);d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!oa(a,e))throw Error("WeakMap key fail: "+a);a[e][this.Ca]=b;return this};
b.prototype.get=function(a){return oa(a,e)?a[e][this.Ca]:void 0};
b.prototype.has=function(a){return oa(a,e)&&oa(a[e],this.Ca)};
b.prototype["delete"]=function(a){return oa(a,e)&&oa(a[e],this.Ca)?delete a[e][this.Ca]:!1};
return b});
na("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.g;return la(function(){if(c){for(;c.head!=a.g;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++k,f.set(b,c)):c="p_"+b;var d=a.o[c];if(d&&oa(a.o,c))for(var e=0;e<d.length;e++){var l=d[e];if(b!==b&&l.key!==l.key||b===l.key)return{id:c,list:d,index:e,wc:l}}return{id:c,list:d,index:-1,wc:void 0}}
function e(a){this.o={};this.g=b();this.size=0;if(a){a=g.ma(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(g.ma([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(r){return!1}}())return a;
da();ka();var f=new window.WeakMap;e.prototype.set=function(a,b){var c=d(this,a);c.list||(c.list=this.o[c.id]=[]);c.wc?c.wc.value=b:(c.wc={next:this.g,previous:this.g.previous,head:this.g,key:a,value:b},c.list.push(c.wc),this.g.previous.next=c.wc,this.g.previous=c.wc,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.wc&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.o[a.id],a.wc.previous.next=a.wc.next,a.wc.next.previous=a.wc.previous,a.wc.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.o={};this.g=this.g.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).wc};
e.prototype.get=function(a){return(a=d(this,a).wc)&&a.value};
e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
e.prototype.keys=function(){return c(this,function(a){return a.key})};
e.prototype.values=function(){return c(this,function(a){return a.value})};
e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[window.Symbol.iterator]=e.prototype.entries;var k=0;return e});
na("Set",function(a){function b(a){this.g=new window.Map;if(a){a=g.ma(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.g.size}
if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(g.ma([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=b||f.value[1]!=b)return!1;f=e.next();return f.done||f.value[0]==b||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(k){return!1}}())return a;
da();ka();b.prototype.add=function(a){this.g.set(a,a);this.size=this.g.size;return this};
b.prototype["delete"]=function(a){a=this.g["delete"](a);this.size=this.g.size;return a};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(a){return this.g.has(a)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[window.Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.g.forEach(function(d){return a.call(b,d,d,c)})};
return b});
na("Reflect.apply",function(a){if(a)return a;var b=Function.prototype.apply;return function(a,d,e){return b.call(a,d,e)}});
var RU="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b};
na("Reflect.construct",function(a){return a?a:function(a,c,d){void 0===d&&(d=a);d=RU(d.prototype||Object.prototype);return window.Reflect.apply(a,d,c)||d}});
na("Math.log2",function(a){return a?a:function(a){return Math.log(a)/Math.LN2}});
ap=ap||{};g.w=this;za="closure_uid_"+(1E9*Math.random()>>>0);Aa=0;g.F=Date.now||function(){return+new Date};g.C(Ga,Error);Ga.prototype.name="CustomError";var Gd;var Ya=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},La=/&/g,Ma=/</g,Na=/>/g,Oa=/"/g,Pa=/'/g,Qa=/\x00/g,Ka=/[\x00&<>"']/,Dp={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},Cp={"'":"\\'"},Ua=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};var wd;g.nb=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(g.u(a))return g.u(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
g.SU=Array.prototype.lastIndexOf?function(a,b,c){return Array.prototype.lastIndexOf.call(a,b,null==c?a.length-1:c)}:function(a,b,c){c=null==c?a.length-1:c;
0>c&&(c=Math.max(0,a.length+c));if(g.u(a))return g.u(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
g.G=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.u(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
g.fe=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,k=g.u(a)?a.split(""):a,l=0;l<d;l++)if(l in k){var m=k[l];
b.call(c,m,l,a)&&(e[f++]=m)}return e};
g.H=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=g.u(a)?a.split(""):a,k=0;k<d;k++)k in f&&(e[k]=b.call(c,f[k],k,a));
return e};
wd=Array.prototype.reduce?function(a,b,c,d){d&&(b=(0,g.A)(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;
(0,g.G)(a,function(c,k){e=b.call(d,e,c,k,a)});
return e};
g.gl=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.u(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
g.iv=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.u(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};a:{var TU=g.w.navigator;if(TU){var UU=TU.userAgent;if(UU){g.Ob=UU;break a}}g.Ob=""};var hc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");oc[" "]=g.qa;var VU,bi,WU,XU,YU,fi,ZU;g.Yg=Pb("Opera");g.Dc=Pb("Trident")||Pb("MSIE");g.cB=Pb("Edge");g.kD=g.cB||g.Dc;g.Xg=Pb("Gecko")&&!(Ta(g.Ob,"WebKit")&&!Pb("Edge"))&&!(Pb("Trident")||Pb("MSIE"))&&!Pb("Edge");g.Sd=Ta(g.Ob,"WebKit")&&!Pb("Edge");VU=g.Sd&&Pb("Mobile");bi=Pb("Macintosh");g.MT=Pb("Windows");g.UC=Pb("Android");WU=mc();XU=Pb("iPad");YU=Pb("iPod");fi=nc();
a:{var $U="",aV=function(){var a=g.Ob;if(g.Xg)return/rv\:([^\);]+)(\)|;)/.exec(a);if(g.cB)return/Edge\/([\d\.]+)/.exec(a);if(g.Dc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(g.Sd)return/WebKit\/(\S+)/.exec(a);if(g.Yg)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
aV&&($U=aV?aV[1]:"");if(g.Dc){var bV=sc();if(null!=bV&&bV>(0,window.parseFloat)($U)){ZU=String(bV);break a}}ZU=$U}var tc=ZU,qc={},cV;var dV=g.w.document;cV=dV&&g.Dc?sc()||("CSS1Compat"==dV.compatMode?(0,window.parseInt)(tc,10):5):void 0;var vc=cV;var PC,OC,QC,ci;g.dB=Pb("Firefox");PC=mc()||Pb("iPod");OC=Pb("iPad");QC=Pb("Android")&&!(kc()||Pb("Firefox")||Pb("Opera")||Pb("Silk"));g.es=kc();ci=lc()&&!nc();var zc=null,Fc=null,yc=null;var Ic=[];Hc.prototype.clone=function(){return Jc(this.o,this.A,this.B-this.A)};
Hc.prototype.clear=function(){this.o=null;this.g=this.B=this.A=0;this.C=!1};
Hc.prototype.reset=function(){this.g=this.A};
Hc.prototype.getError=function(){return this.C||0>this.g||this.g>this.B};Lc.prototype.getError=function(){return this.B||this.g.getError()};
Lc.prototype.reset=function(){this.g.reset();this.o=this.A=-1};var Yc="function"==typeof window.Uint8Array,Rc=[];Qc.prototype.toString=function(){Wc(this);return this.o.toString()};
Qc.prototype.getExtension=function(a){if(this.A){this.g||(this.g={});var b=a.A;if(a.B){if(a.o())return this.g[b]||(this.g[b]=(0,g.H)(this.A[b]||[],function(b){return new a.g(b)})),this.g[b]}else if(a.o())return!this.g[b]&&this.A[b]&&(this.g[b]=new a.g(this.A[b])),this.g[b];
return this.A[b]}};
Qc.prototype.clone=function(){return new this.constructor(Xc(Vc(this)))};window.console&&"function"===typeof window.console.log&&(0,g.A)(window.console.log,window.console);var Ud,ee,he;Ud=!g.Dc||g.wc(9);ee=!g.Xg&&!g.Dc||g.Dc&&g.wc(9)||g.Xg&&g.uc("1.9.1");g.eV=g.Dc&&!g.uc("9");he=g.Dc||g.Yg||g.Sd;$c.prototype.ug=!0;$c.prototype.rg=function(){return this.g};
$c.prototype.toString=function(){return"Const{"+this.g+"}"};
var Zc={};cd("");var fV=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"),gV=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]"),hV=/^http:\/\/.*/,iV=/\s+/,jV=/[\d\u06f0-\u06f9]/;ed.prototype.ug=!0;ed.prototype.rg=function(){return this.g};
ed.prototype.Ql=!0;ed.prototype.nl=function(){return 1};
var dd={};id.prototype.ug=!0;id.prototype.rg=function(){return this.g};
id.prototype.Ql=!0;id.prototype.nl=function(){return 1};
var kd=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,hd={};ld("about:blank");g.od.prototype.Ql=!0;g.od.prototype.nl=function(){return this.o};
g.od.prototype.ug=!0;g.od.prototype.rg=function(){return this.g};
var nd={};qd("<!DOCTYPE html>",0);qd("",0);qd("<br>",0);g.h=g.zd.prototype;g.h.clone=function(){return new g.zd(this.x,this.y)};
g.h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
g.h.scale=function(a,b){var c=g.pa(b)?b:a;this.x*=a;this.y*=c;return this};g.h=g.Cd.prototype;g.h.clone=function(){return new g.Cd(this.width,this.height)};
g.h.Sb=function(){return this.width*this.height};
g.h.aspectRatio=function(){return this.width/this.height};
g.h.isEmpty=function(){return!this.Sb()};
g.h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.h.scale=function(a,b){var c=g.pa(b)?b:a;this.width*=a;this.height*=c;return this};var Md={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};g.h=Ed.prototype;g.h.na=function(a){return g.u(a)?this.g.getElementById(a):a};
g.h.getElementsByTagName=function(a,b){return(b||this.g).getElementsByTagName(String(a))};
g.h.createElement=function(a){return this.g.createElement(String(a))};
g.h.appendChild=g.$d;g.h.canHaveChildren=function(a){if(1!=a.nodeType)return!1;switch(a.tagName){case "APPLET":case "AREA":case "BASE":case "BR":case "COL":case "COMMAND":case "EMBED":case "FRAME":case "HR":case "IMG":case "INPUT":case "IFRAME":case "ISINDEX":case "KEYGEN":case "LINK":case "NOFRAMES":case "NOSCRIPT":case "META":case "OBJECT":case "PARAM":case "SCRIPT":case "SOURCE":case "STYLE":case "TRACK":case "WBR":return!1}return!0};
g.h.removeNode=g.de;g.h.contains=g.je;var Se=!g.Dc||g.wc(9),kV=g.Dc&&!g.uc("9");!g.Sd||g.uc("528");g.Xg&&g.uc("1.9b")||g.Dc&&g.uc("8")||g.Yg&&g.uc("9.5")||g.Sd&&g.uc("528");g.Xg&&!g.uc("8")||g.Dc&&g.uc("9");g.I.prototype.kb=!1;g.I.prototype.ka=function(){return this.kb};
g.I.prototype.dispose=function(){this.kb||(this.kb=!0,this.Y())};
g.I.prototype.Y=function(){if(this.fb)for(;this.fb.length;)this.fb.shift()()};g.we.prototype.stopPropagation=function(){this.g=!0};
g.we.prototype.preventDefault=function(){this.At=!1};g.C(xe,g.we);
xe.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?g.Xg&&(pc(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:
d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.o=a;a.defaultPrevented&&this.preventDefault()};
xe.prototype.stopPropagation=function(){xe.ea.stopPropagation.call(this);this.o.stopPropagation?this.o.stopPropagation():this.o.cancelBubble=!0};
xe.prototype.preventDefault=function(){xe.ea.preventDefault.call(this);var a=this.o;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,kV)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Ae;g.ye="closure_listenable_"+(1E6*Math.random()|0);Ae=0;De.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Ee(e,b,c,d);return-1<b?(Ce(e[b]),g.sb(e,b),0==e.length&&(delete this.listeners[a],this.g--),!0):!1};var Ne="closure_lm_"+(1E6*Math.random()|0),We={},Qe=0,Ze="__closure_events_fn_"+(1E9*Math.random()>>>0);g.C(g.$e,g.I);g.$e.prototype[g.ye]=!0;g.h=g.$e.prototype;g.h.tn=function(a){this.L=a};
g.h.addEventListener=function(a,b,c,d){g.Je(this,a,b,c,d)};
g.h.removeEventListener=function(a,b,c,d){g.Ue(this,a,b,c,d)};
g.h.dispatchEvent=function(a){var b=this.L;if(b){var c=[];for(var d=1;b;b=b.L)c.push(b),++d}b=this.fa;d=a.type||a;if(g.u(a))a=new g.we(a,b);else if(a instanceof g.we)a.target=a.target||b;else{var e=a;a=new g.we(d,b);g.ic(a,e)}var e=!0;if(c)for(var f=c.length-1;!a.g&&0<=f;f--){var k=a.currentTarget=c[f];e=af(k,d,!0,a)&&e}a.g||(k=a.currentTarget=b,e=af(k,d,!0,a)&&e,a.g||(e=af(k,d,!1,a)&&e));if(c)for(f=0;!a.g&&f<c.length;f++)k=a.currentTarget=c[f],e=af(k,d,!1,a)&&e;return e};
g.h.Y=function(){g.$e.ea.Y.call(this);this.Cd&&g.He(this.Cd);this.L=null};
g.h.ga=function(a,b,c,d){return Fe(this.Cd,String(a),b,!1,c,d)};
g.h.Qa=function(a,b,c,d){return this.Cd.remove(String(a),b,c,d)};bf.prototype.get=function(){if(0<this.o){this.o--;var a=this.g;this.g=a.next;a.next=null}else a=this.A();return a};var jf;var sf=new bf(function(){return new nf},function(a){a.reset()},100);
mf.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.o=null),a.next=null);return a};
nf.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
nf.prototype.reset=function(){this.next=this.scope=this.g=null};var of,qf=!1,rf=new mf;zf.prototype.reset=function(){this.context=this.o=this.B=this.g=null;this.A=!1};
var Af=new bf(function(){return new zf},function(a){a.reset()},100);
g.yf.prototype.then=function(a,b,c){return Jf(this,g.wa(a)?a:null,g.wa(b)?b:null,c)};
vf(g.yf);g.yf.prototype.cancel=function(a){0==this.g&&g.tf(function(){var b=new Pf(a);Lf(this,b)},this)};
g.yf.prototype.K=function(a){this.g=0;xf(this,2,a)};
g.yf.prototype.L=function(a){this.g=0;xf(this,3,a)};
g.yf.prototype.H=function(){for(var a;a=Mf(this);)Nf(this,a,this.g,this.G);this.D=!1};
var Tf=hf;g.C(Pf,Ga);Pf.prototype.name="cancel";g.C(g.Uf,g.$e);g.h=g.Uf.prototype;g.h.enabled=!1;g.h.od=null;g.h.Zw=function(){if(this.enabled){var a=(0,g.F)()-this.B;0<a&&a<.8*this.o?this.od=this.g.setTimeout(this.A,this.o-a):(this.od&&(this.g.clearTimeout(this.od),this.od=null),this.dispatchEvent("tick"),this.enabled&&(this.od=this.g.setTimeout(this.A,this.o),this.B=(0,g.F)()))}};
g.h.start=function(){this.enabled=!0;this.od||(this.od=this.g.setTimeout(this.A,this.o),this.B=(0,g.F)())};
g.h.stop=function(){this.enabled=!1;this.od&&(this.g.clearTimeout(this.od),this.od=null)};
g.h.Y=function(){g.Uf.ea.Y.call(this);this.stop();delete this.g};var ag=g.qa,hg={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},gg=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;var lV={};g.h=ig.prototype;g.h.isEnabled=function(){return window.navigator.cookieEnabled};
g.h.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');g.t(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date((0,g.F)()+1E3*c)).toUTCString();this.g.cookie=a+"="+b+e+d+c+f};
g.h.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ya(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.h.remove=function(a,b,c){var d=g.t(this.get(a));this.set(a,"",0,b,c);return d};
g.h.Tc=function(){return jg(this).keys};
g.h.ub=function(){return jg(this).values};
g.h.isEmpty=function(){return!this.g.cookie};
g.h.Sc=function(){return this.g.cookie?(this.g.cookie||"").split(";").length:0};
g.h.clear=function(){for(var a=jg(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
var cv=new ig("undefined"==typeof window.document?null:window.document);cv.o=3950;var lg=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,zg=/#|$/,Ag=/[?&]($|#)/;Cg.prototype.remove=function(a){var b=this.g;a in b&&delete b[a]};
Cg.prototype.set=function(a,b){this.g[a]=b};
Cg.prototype.get=function(a){return dc(this.g,a,null)};g.h=g.Eg.prototype;g.h.Ed=function(){return this.right-this.left};
g.h.getHeight=function(){return this.bottom-this.top};
g.h.clone=function(){return new g.Eg(this.top,this.right,this.bottom,this.left)};
g.h.contains=function(a){return this&&a?a instanceof g.Eg?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};
g.h.expand=function(a,b,c,d){g.ya(a)?(this.top-=a.top,this.right+=a.right,this.bottom+=a.bottom,this.left-=a.left):(this.top-=a,this.right+=Number(b),this.bottom+=Number(c),this.left-=Number(d));return this};
g.h.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
g.h.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
g.h.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};
g.h.scale=function(a,b){var c=g.pa(b)?b:a;this.left*=a;this.right*=a;this.top*=c;this.bottom*=c;return this};g.h=g.Gg.prototype;g.h.clone=function(){return new g.Gg(this.left,this.top,this.width,this.height)};
g.h.contains=function(a){return a instanceof g.zd?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.h.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.h.scale=function(a,b){var c=g.pa(b)?b:a;this.left*=a;this.width*=a;this.top*=c;this.height*=c;return this};var Rg=null;Ng.prototype.getValue=function(){return this.g};
Ng.prototype.o=function(){return String(this.g)};
g.C(Og,Ng);Og.prototype.o=function(){return this.g?"1":"0"};
g.C(Pg,Ng);Pg.prototype.o=function(){return this.g?Math.round(this.g.top)+"."+Math.round(this.g.left)+"."+(Math.round(this.g.top)+Math.round(this.g.height))+"."+(Math.round(this.g.left)+Math.round(this.g.width)):""};var Wg={};new g.Uf(200);var Ch,nV,zh;g.Bh=wh("loadGamesSDK")?"/cast_game_sender.js":"/cast_sender.js";g.mV=wh("loadCastFramework")||wh("loadCastApplicationFramework");Ch=["boadgeojelhgndaghljhdicfkmllpafd","dliochdbjfkdbacpmhlcpmleaejidimm","enhhojjnijigcajfphajepfemndkmdlo","fmfcbgogabcbclcofgocippekhfcmgfj"];nV=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","fjhoaacokmgbjemoflkofnenfaiekifl"];zh=50<=g.vh()?nV.concat(Ch):Ch.concat(nV);var Rh=window.document,K=window;var em=/https?:\/\/[^\/]+/;var Kh=function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});
g.w.addEventListener("test",null,b)}catch(c){}return a}();var Ph=!!window.google_async_iframe_id,Qh=Ph&&window.parent||window;var oV=[0,2,1],pV=null;window.document.addEventListener&&window.document.addEventListener("mousedown",function(a){pV=a},!0);
window.mb=function(a){if(a){var b;if(b=window.event||pV){var c;(c=b.which?1<<oV[b.which-1]:b.button)&&b.shiftKey&&(c|=8);c&&b.altKey&&(c|=16);c&&b.ctrlKey&&(c|=32);b=c}else b=null;b&&(window.css?(0,window.css)(a.id,"mb",b,void 0,void 0):a&&(a.href=Fh(a.href,"mb",b,void 0)))}};Th.prototype.enable=function(){this.g=!0};
Th.prototype.isEnabled=function(){return this.g};
Th.prototype.reset=function(){this.g=!0};var Vh={},Wh=null;Vh.le=0;Vh.nt=2;Vh.Fr=3;Vh.Po=5;Vh.me=1;Vh.om=4;var qV=!1,rV="";
(function(){if(window.navigator.plugins&&window.navigator.plugins.length){var a=window.navigator.plugins["Shockwave Flash"];if(a&&(qV=!0,a.description)){rV=Yh(a.description);return}if(window.navigator.plugins["Shockwave Flash 2.0"]){qV=!0;rV="2.0.0.11";return}}if(window.navigator.mimeTypes&&window.navigator.mimeTypes.length&&(a=window.navigator.mimeTypes["application/x-shockwave-flash"],qV=!(!a||!a.enabledPlugin))){rV=Yh(a.enabledPlugin.description);return}try{var b=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");qV=
!0;rV=Yh(b.GetVariable("$version"));return}catch(c){}try{b=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");qV=!0;rV="6.0.21";return}catch(c){}try{b=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"),qV=!0,rV=Yh(b.GetVariable("$version"))}catch(c){}})();
var vM=qV,di=rV;var gi=function(){if(g.MT){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(g.Ob))?a[1]:"0"}return bi?(a=/10[_.][0-9_.]+/,(a=a.exec(g.Ob))?a[0].replace(/_/g,"."):"10"):g.UC?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(g.Ob))?a[1]:""):WU||XU||YU?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(g.Ob))?a[1].replace(/_/g,"."):""):""}();var $h=function(){if(g.dB)return Zh(/Firefox\/([0-9.]+)/);if(g.Dc||g.cB||g.Yg)return tc;if(g.es)return nc()?Zh(/CriOS\/([0-9.]+)/):Zh(/Chrome\/([0-9.]+)/);if(ci&&!nc())return Zh(/Version\/([0-9.]+)/);if(PC||OC){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(g.Ob);if(a)return a[1]+"."+a[2]}else if(QC)return(a=Zh(/Android\s+([0-9.]+)/))?a:Zh(/Version\/([0-9.]+)/);return""}();var sV={currentTime:1,duration:2,isVpaid:4,volume:8,isYouTube:16,isPlaying:32},Ll={aw:"start",xv:"firstquartile",Lv:"midpoint",ew:"thirdquartile",cv:"complete",Kv:"metric",PAUSE:"pause",Rv:"resume",Xv:"skip",hw:"viewable_impression",Mv:"mute",gw:"unmute",zv:"fullscreen",vv:"exitfullscreen",Av:"fully_viewable_audible_half_duration_impression",Jv:"measurable_impression",Vu:"abandon",rv:"engagedview",Fv:"impression",kv:"creativeview",Gv:"loaded",yJ:"progress",CLOSE:"close",eI:"collapse",nJ:"overlay_resize",
oJ:"overlay_unmeasurable_impression",pJ:"overlay_unviewable_impression",rJ:"overlay_viewable_immediate_impression",qJ:"overlay_viewable_end_of_session_impression"},wm="start firstquartile midpoint thirdquartile resume loaded".split(" "),yk=["abandon"],Ml={UNKNOWN:-1,aw:0,xv:1,Lv:2,ew:3,cv:4,Kv:5,PAUSE:6,Rv:7,Xv:8,hw:9,Mv:10,gw:11,zv:12,vv:13,Av:14,Jv:15,Vu:16,rv:17,Fv:18,kv:19,Gv:20};ii.prototype.isVisible=function(){return this.qd?.3<=this.g:.5<=this.g};var Dk=0,ui=(new Date).getTime(),oi=-1,qi=!1,ri=-1,si=-1;g.C(Ci,ii);Ei.prototype.update=function(a,b,c,d,e,f){e=Gi(c.g);var k=Gi(b.g),k=-1==e||-1==k?-1:Math.max(e,k);e=d?k:e;this.B=-1!=this.B?Math.min(this.B,b.g):b.g;f&&(this.wa=Math.max(this.wa,b.g));-1!=e&&(this.Ea[e]+=a);Fi(this.oa,e,a);f=this.ba;for(var k=this.oa,l=[0,0,0,0,0],m=0;4>=m;m++)l[m]=Math.max(f[m],k[m]);this.ba=l;f=this.oa;k=Gi(b.g);for(l=0;4>=l;++l)if(l<k||b.C||-1==k)f[l]=0;if(d||c.qd!=b.qd?c.isVisible()&&b.isVisible():c.isVisible())this.L+=a,this.X=Math.max(this.X,this.L);b.isVisible()||(this.L=0);
return e};
Ei.prototype.Ye=function(){return this.X>=this.Ma};g.h=Si.prototype;g.h.Or=function(){this.events!=this.o.google_js_reporting_queue&&(this.events.length=0,this.A&&(0,g.G)(this.events,this.cp,this));this.g=!1};
g.h.TF=function(a){this.g&&this.events.push(a)};
g.h.cp=function(a){if(a&&this.A){var b=this.o.performance;b.clearMarks("goog_"+a.uniqueId+"_start");b.clearMarks("goog_"+a.uniqueId+"_end")}};
g.h.start=function(a,b){if(!this.g)return null;var c=new Ri(a,b);this.A&&this.o.performance.mark("goog_"+c.uniqueId+"_start");return c};
g.h.end=function(a){this.g&&(a.duration=Qi()-a.value,this.A&&this.o.performance.mark("goog_"+a.uniqueId+"_end"),this.TF(a))};Ti.prototype.o=function(a,b,c,d,e){e=e||this.D;try{var f=new Ii;f.C=!0;Mi(f,1,"context",a);b.error&&b.meta&&b.id||(b=Ui(b));b.msg&&Mi(f,2,"msg",b.msg.substring(0,512));b.file&&Mi(f,3,"file",b.file);0<b.line&&Mi(f,4,"line",b.line);var k=b.meta||{};if(d)try{d(k)}catch(m){}b=[k];f.g.push(5);f.o[5]=b;var l=mi();l.o&&Mi(f,6,"top",l.o.url||"");Mi(f,7,"url",l.g.url||"");Pi(this.B,e,f,c)}catch(m){try{Pi(this.B,e,{context:"ecmserr",rctx:a,msg:Zi(m),url:l.g.url},c)}catch(n){}}return this.A};
g.p(Yi,Hi);var Wi,tV=Sh(),uV=new Si(1,tV);Wi=new Ti(new function(){this.B="http:"===K.location.protocol?"http:":"https:";this.o="pagead2.googlesyndication.com";this.A="/pagead/gen_204?id=";this.g=.01},"jserror",!0,uV);
"complete"==tV.document.readyState?tV.google_measure_js_timing||uV.Or():uV.g&&Lh(tV,"load",function(){tV.google_measure_js_timing||uV.Or()});
var $i=Wi.o;dj.prototype.getStatus=function(){return this.o};
g.C(gj,dj);gj.prototype.bi=function(a,b){if(!(a&&a.getBoundingClientRect&&0<=g.$a(di,"11")&&b)||g.Dc&&9>tc||0<this.g.length)return!1;try{var c=a.getBoundingClientRect()}catch(m){return!1}var d="DIV"==a.tagName||"INS"==a.tagName,e=g.Fd(a),f=[];if(d){var k=vi();c=ej(this,c);(0,g.G)(c,function(a,c){var d=new zj("e",e,b,String(c));this.g.push(d);f.push((0,g.A)(d.H,d,k,a))},this);
ce(a,k,0)}else c=fj(this,c),(0,g.G)(c,function(c,d){var k=new zj("e",e,b,String(d));this.g.push(k);f.push((0,g.A)(k.G,k,a,c))},this);
var l=!0;(0,g.G)(f,function(a){l=l&&a()});
l?(this.o="l",this.A=a,this.H=!d):((0,g.G)(this.g,function(a){a.remove()}),this.g=[]);
return l};
var sj={jK:-1,LOADING:0,yv:1,jv:2,QI:3,VISIBLE:4},vj={LOADING:0,yv:1,jv:2,dK:3,iJ:4,hK:5,iK:6,gK:7,jJ:8,cK:9},wj={};zj.prototype.H=function(a,b){if(!this.g)return!1;this.g.style.position="absolute";ij(this,b);var c=!0;try{a.appendChild(this.g)}catch(d){c=!1}return c};
zj.prototype.G=function(a,b){if(!this.g||!a.parentNode)return!1;this.g.style.position="fixed";ij(this,b);var c=!0;try{g.be(this.g,a)}catch(d){c=!1}return c};
zj.prototype.remove=function(){if(this.g)try{g.de(this.g)}catch(a){}this.g=null};
zj.prototype.K=function(a){this.A=a?3:4};
g.x("gteh",bj(145,function(a,b){var c=wj[a];g.wa(c)&&c(b)}),void 0);
g.C(Bj,dj);var Hj=[3,7,8,5,5],Ij=[3,4,4,5,6],Jj=[3,4,5,6],Kj=[3,5];Cj.prototype.B=function(a){this.g&&this.g.contentWindow&&(this.g.contentWindow.requestAnimationFrame(Xi(245,this.B,this,void 0)),this.o||(this.o=(0,g.F)()-a),this.A=a)};
Cj.prototype.isVisible=function(a){return 50>a-this.o-this.A};
Cj.prototype.remove=function(){try{g.de(this.g)}catch(a){}this.g=null};if(Rh&&Rh.URL){var Ih=Rh.URL,vV=!(Ih&&0<Jh().length);Wi.A=vV};g.sa(Oj);g.sa(Pj);var Qj=new g.Eg(0,0,0,0),fk={threshold:[0,.3,.5,.75,1]};g.h=Rj.prototype;g.h.aj=function(){return new Ei};
g.h.md=function(){return this.nm};
g.h.Eq=g.qa;g.h.Dq=g.qa;g.h.Xp=g.qa;g.h.hk=g.qa;
g.h.he=function(a,b,c,d,e,f,k){var l=k||{};k=this.Op(c,l);l=this.Pk(a,b,d,l);g.pa(b)||(this.lk=new g.Cd(b.right-b.left,b.bottom-b.top));e=e&&this.Hb.g>=(this.qd()?.3:.5);this.Jn(k,l,e,f);this.Ze=c;0<l.g&&-1===this.Yt&&(this.Yt=c);-1==this.Zt&&this.Ye()&&(this.Zt=c);if(-2==this.jm)try{a:{var m=g.pa(b)?null:b;if(a&&a!=Qj&&0!=this.Sb){if(!m){if(!this.lk){var n=-1;break a}m=new g.Eg(0,this.lk.width,this.lk.height,0)}n=m.Ed&&0<m.Ed()&&m.getHeight&&0<m.getHeight()?this.hh(a,m):-1}else n=-1}this.jm=n}catch(q){cj(207,
q)}this.Hb=l;d&&(this.Hb.g=0);this.pm(this)};
g.h.Jn=function(a,b,c,d){this.md().update(a,b,this.Hb,c,this.qd()?.3:.5,d)};
g.h.ql=function(){return new ii};
g.h.Pk=function(a,b,c){var d=this.ql();d.C=c;c=Uh();d.o=0==c?-1:1==c?0:1;if(g.pa(b))d.g=this.hh(b);else{var e=b;d.g=this.hh(a,e)}(a=e||null)?(a=(a.bottom-a.top)*(a.right-a.left),a=0<a?Math.min(this.Sb*d.g/a,1):0):a=0;d.D=a;d.qd=this.qd();return d};
g.h.Op=function(a){if(-1==this.Ze)return 0;a=a-this.Ze||1;return 1E4<a?1:a};
g.h.hh=function(a,b){if(g.pa(a))return a;if(b){var c=Sj(a,b);return 0>=this.Sb||0>=c.Ed()||0>=c.getHeight()?0:(c.bottom-c.top)*(c.right-c.left)/this.Sb}return 0};
g.h.qd=function(){return!1};
g.h.bi=function(a){if(this.Wb)return!0;if(this.Vi)return!1;var b=this.qd();this.Sh=b?4:a||1;if(!this.Wd||!ei())return this.Vi=!0,!1;a=new gj(b,this.Sh);(b=a.bi(this.Wd,String(this.qw)))?this.Wb=a:this.Vi=!0;return b};
g.h.Dd=function(){return 0};
g.h.Ye=function(){return this.nm.Ye()};
g.h.vn=function(a){if(!this.Wd)return!1;var b=this.qd();a=a||1;b&&(a=4);var b=new Bj(b,a),c=Ej(b,this.Wd);c&&(this.Sh=a,this.ag=b);return c};kk.prototype.g=function(a){var b=this.A[a],c=b[1];this.B+=b[0];0<c&&0==this.o[a]&&(this.o[a]=1)};g.sa(ok);pk.prototype.getValue=function(){return this.o};
pk.prototype.update=function(a,b){a>=this.A||(this.g&1<<a&&!b?this.o&=~(1<<a):this.g&1<<a||!b||(this.o|=1<<a),this.g|=1<<a)};g.p(qk,Ei);
qk.prototype.update=function(a,b,c,d,e,f){if(b.paused)return-1;d=Ei.prototype.update.call(this,a,b,c,d,e,f);e=Gi(e);e=-1!=d&&d<=e;f=Di(b)&&Di(c);Bi(b.volume)&&(this.g=-1!=this.g?Math.min(this.g,b.volume):b.volume,this.A=Math.max(this.A,b.volume));e&&(this.da+=a,this.fa+=a);this.o+=a;this.aa+=a;c.A&&(this.fb+=a,this.T+=a);0==d&&(this.W+=a);f&&(this.la+=a,this.G+=a,Fi(this.ha,d,a),0==d&&(this.D+=a),e?(this.H+=a,this.K+=a):this.O+=a,this.za=Math.max(this.O,this.za));if(e||!Di(b))this.O=0;a=Math.floor(b.B/
1E3);this.kb.update(a,b.isVisible());this.La.update(a,1<=b.g);this.Ka.update(a,Di(b));return d};g.C(sk,Rj);g.h=sk.prototype;g.h.vn=function(a){Pj.getInstance();var b=ok.getInstance(),c=g.ob(b.g,509445011);return g.ob(b.g,509445013)||c?(this.ib=!0,sk.ea.vn.call(this,a||3)):!1};
g.h.bi=function(a){return sk.ea.bi.call(this,a||3)};
g.h.Eq=function(a){if(!this.Ea||1E3<a-this.Xa){var b=g.y("ima.bridge.getNativeViewability");g.wa(b)&&(b(this.Xb,(0,g.A)(this.qx,this)),this.Ea=!0,this.Xa=a)}};
g.h.Dq=function(a){var b=Pj.getInstance();a-this.Wa>ti(b.H)&&(a=g.y("ima.admob.getViewability"),g.wa(a)&&a(this.Xb))};
g.h.qx=function(a){this.Ea=!1;this.W&&(this.La=!0);g.cc(a)&&this.Ka++;this.hk(a)};
g.h.Xp=function(a){this.Wa=pi();this.hk(a)};
g.h.hk=function(a){var b=a.opt_nativeViewBounds||{},c=a.opt_nativeViewVisibleBounds||{},d=a.opt_nativeTime||-1,e=a.opt_nativeVolume,f=a.opt_nativeViewAttached;a=a.opt_nativeViewHidden;void 0!==f&&(this.wa=!!f);b=new g.Eg(b.top||0,b.left+b.width||0,b.top+b.height||0,b.left||0);c=a?Qj.clone():new g.Eg(c.top||0,c.left+c.width||0,c.top+c.height||0,c.left||0);f=void 0;"n"==this.ie&&(f={},f.volume=e);this.Sb=(b.bottom-b.top)*(b.right-b.left);this.position=b;this.he(b,c,d,!1,!0,!0,f)};
g.h.he=function(a,b,c,d,e,f,k){var l=this.fa(this)||{};g.ic(l,k||{});this.C=l.duration||this.C;this.kb=l.isVpaid||this.kb;this.ha=f;sk.ea.he.call(this,a,b,c,d,e,f,l)};
g.h.Jn=function(a,b,c,d){sk.ea.Jn.call(this,a,b,c,d);this.L[this.L.length-1].update(a,b,this.Hb,c,this.qd()?.3:.5,d);this.za=Di(this.Hb)&&Di(b);-1==this.da&&this.Ma&&(this.da=this.md().o);this.o.B=0;a=this.Hb;b=this.Ye();.5<=a.g&&this.o.g("vs");b&&this.o.g("vw");Bi(a.volume)&&this.o.g("am");this.za&&this.o.g("a");this.Hd&&this.o.g("f");-1!=a.o&&(this.o.g("bm"),1==a.o&&this.o.g("b"));this.za&&b&&this.o.g("avw");this.ha&&this.o.g("cm");this.ha&&0<a.g&&this.o.g("pv");wk(this,this.md().o,!0)&&this.o.g("gdr")};
g.h.aj=function(){return new qk};
g.h.md=function(){return this.nm};
g.h.ql=function(){return new Ci};
g.h.Pk=function(a,b,c,d){a=sk.ea.Pk.call(this,a,b,c,d);a.A=this.Hd;a.paused=this.D;a.volume=d.volume;Bi(a.volume)||(this.wb++,b=this.Hb,Bi(b.volume)&&(a.volume=b.volume));d=d.currentTime;a.B=g.t(d)&&0<=d?d:-1;return a};
g.h.Op=function(a,b){var c=g.t(b.currentTime)?b.currentTime:this.T,d=vk(this,a),e=c-this.T,f=b.isYouTube,k=g.t(b.isPlaying)?b.isPlaying:!0,l=0;2!=this.ba?(0<=e?(this.X+=d,this.H+=Math.max(d-e,0),l=Math.min(e,this.X)):this.Fa+=Math.abs(e),0!=e&&(this.X=0),-1==this.K&&0<e&&(this.K=0<=si?pi()-si:-1)):(k||this.D||(this.H+=d),-1==this.K&&k&&(this.K=0<=si?pi()-si:-1));this.T=c;if(f){if(1==this.ba)return l;if(2==this.ba)return k?d:0}return vk(this,a)};
g.h.hh=function(a,b){return this.W?0:this.Hd?1:sk.ea.hh.call(this,a,b)};
g.h.Dd=function(){return 1};g.wV=!g.Dc&&!lc();g.C(g.Fk,g.I);g.h=g.Fk.prototype;g.h.Jg=!1;g.h.Wh=0;g.h.Jf=null;g.h.sg=function(a){this.g=arguments;this.Jf||this.Wh?this.Jg=!0:Gk(this)};
g.h.stop=function(){this.Jf&&(g.w.clearTimeout(this.Jf),this.Jf=null,this.Jg=!1,this.g=[])};
g.h.pause=function(){this.Wh++};
g.h.resume=function(){this.Wh--;this.Wh||!this.Jg||this.Jf||(this.Jg=!1,Gk(this))};
g.h.Y=function(){g.Fk.ea.Y.call(this);this.stop()};
g.h.aF=function(){this.Jf=null;this.Jg&&!this.Wh&&(this.Jg=!1,Gk(this))};var Kk=null,Mk=null,Nk=null,Pk=null,dl=null,Jk=!1,el=[],jl=[],$k=!1,al=null,Yk=0,Wk=Hk()||!Hk()&&(Pb("iPod")||Pb("iPhone")||Pb("Android")||Pb("IEMobile")),cl=0;var Al=null,El="",vm=!1;var zl={sv:"sv",cb:"cb",e:"e",nas:"nas",msg:"msg","if":"if",sdk:"sdk",p:"p",tos:"tos",mtos:"mtos",mcvt:"mcvt",ps:"ps",scs:"scs",bs:"bs",pt:"pt",vht:"vht",mut:"mut",a:"a",ft:"ft",dft:"dft",at:"at",dat:"dat",as:"as",vpt:"vpt",gmm:"gmm",std:"std",efpf:"efpf",swf:"swf",nio:"nio",px:"px",nnut:"nnut",vmer:"vmer",vmmk:"vmmk",vmiec:"vmiec",nmt:"nmt",tcm:"tcm",bt:"bt",pst:"pst",vpaid:"vpaid",dur:"dur",vmtime:"vmtime",dtos:"dtos",dtoss:"dtoss",dvs:"dvs",dfvs:"dfvs",dvpt:"dvpt",fmf:"fmf",vds:"vds",is:"is",i0:"i0",
i1:"i1",i2:"i2",i3:"i3",ic:"ic",cs:"cs",c:"c",mc:"mc",nc:"nc",mv:"mv",nv:"nv",qmt:"qmtos",qnc:"qnc",qmv:"qmv",qnv:"qnv",raf:"raf",rafc:"rafc",lte:"lte",tth:"tth",femt:"femt",femvt:"femvt",emc:"emc",emuc:"emuc",emb:"emb",avms:"avms",nvat:"nvat",qi:"qi",psm:"psm",psv:"psv",psfv:"psfv",psa:"psa"},om={c:sl("c"),at:"at",atos:vl("atos",[0,2,4]),ta:function(a,b){return function(c){if(!g.t(c[a]))return b}}("tth","1"),
a:"a",dur:"dur",p:"p",tos:ul(),j:"dom",mtos:vl("mtos",[0,2,4]),gmm:"gmm",gdr:"gdr",ss:sl("ss"),vsv:df("w2"),t:"t"},sm={atos:"atos",avt:vl("atos",[2]),davs:"davs",dafvs:"dafvs",dav:"dav",ss:sl("ss"),t:"t"},qm={a:"a",tos:ul(),at:"at",c:sl("c"),mtos:vl("mtos",[0,2,4]),dur:"dur",fs:"fs",p:"p",vpt:"vpt",vsv:df("ias_w2"),dom:"dom",gmm:"gmm",gdr:"gdr",t:"t"},rm={tos:ul(),at:"at",c:sl("c"),mtos:vl("mtos",[0,2,4]),p:"p",vpt:"vpt",vsv:df("dv_w4"),gmm:"gmm",gdr:"gdr",dom:"dom",t:"t",mv:"mv",qmpt:vl("qmtos",
[0,2,4]),qvs:function(a,b){return function(c){var d=c[a];if(g.pa(d))return(0,g.H)(b,function(a){return 0<d&&d>=a?1:0})}}("qnc",[1,
.5,0]),qmv:"qmv",qa:"qas",a:"a"};g.h=wl.prototype;g.h.cj=function(){};
g.h.bq=g.qa;g.h.lt=g.qa;g.h.mt=g.qa;g.h.Wo=g.qa;g.h.Fo=g.qa;g.h.Il=function(a){window.clearTimeout(al);al=null;El=a;$k=!0};
g.h.fq=function(a){a&&(a.Xe=!0,1==a.Dd()?Bl(a,"fp"):2==a.Dd()&&this.lt(a),this.nn(a))};
g.h.Rx=function(a){xk(a,0);return Ak(a,"start")};
g.h.Ox=function(a,b){Uk([a],!Bk(),b);return Ak(a,"progress")};
g.h.Fx=function(a,b){return Cl(a,"firstquartile",1,b)};
g.h.Kx=function(a,b){a.Ma=!0;return Cl(a,"midpoint",2,b)};
g.h.Sx=function(a,b){return Cl(a,"thirdquartile",3,b)};
g.h.Bx=function(a,b){var c=Cl(a,"complete",4,b);a.Hd=!1;Gl(1,a.Xb);return c};
g.h.Nx=function(a,b){return Dl(a,"pause",b)};
g.h.Ax=function(a,b){return Dl(a,"abandon",b)};
g.h.Px=function(a,b){var c=Bk();a.D&&!c&&(a.md().C=pi());Uk([a],!c,b);a.D=!1;return Ak(a,"resume")};
g.h.Ux=function(a){return Ak(a,"viewable_impression")};
g.h.Qx=function(a,b){var c=!Bk();Uk([a],c,b);c=Ak(a,"skip");a.Hd=!1;Gl(1,a.Xb);return c};
g.h.Lx=function(a,b){Uk([a],!Bk(),b);return Ak(a,"mute")};
g.h.Tx=function(a,b){Uk([a],!Bk(),b);return Ak(a,"unmute")};
g.h.Gx=function(a,b){a.Hd=!0;Uk([a],!Bk(),b);return Ak(a,"fullscreen")};
g.h.Ex=function(a,b){a.Hd=!1;Uk([a],!Bk(),b);return Ak(a,"exitfullscreen")};
g.h.Hx=function(a){return Ak(a,"fully_viewable_audible_half_duration_impression")};
g.h.Jx=function(a){return Ak(a,"measurable_impression")};
g.h.Dx=function(a){return Ak(a,"engagedview")};
g.h.Ix=function(a){return Ak(a,"impression")};
g.h.Cx=function(a){return Ak(a,"creativeview")};
g.h.Mx=function(a,b){Uk([a],!Bk(),b);return a.o()};
g.h.Nl=function(a,b){Uk([a],!Bk(),b);Gl(2,a.Xb);return a.o()};
g.h.gj=function(a){a.Ye()&&!a.pu&&this.mt(a);1==a.Dd()&&this.Wo(a)};
g.h.nn=g.qa;var Sl=(new Date).getTime(),Zl=!1,$l=!1,am=!1,Vl=[function(a){return!(!a.chrome||!a.chrome.webstore)},
function(a){return!!a.document.documentMode},
function(a){return!!a.document.fonts.ready},
function(){return Tl(0)},
function(a){return!!a.ActiveXObject},
function(a){return!!a.chrome},
function(a){return!!a.navigator.serviceWorker},
function(a){return!!a.opera},
function(a){return!!a.sidebar},
function(){return!+"\v1"},
function(){return Tl(1)},
function(a){return!a.ActiveXObject},
function(a){return"-ms-ime-align"in a.document.documentElement.style},
function(a){return"-ms-scroll-limit"in a.document.documentElement.style},
function(a){return"-webkit-font-feature-settings"in a.document.body.style},
function(){return Tl(2)},
function(a){return"ActiveXObject"in a},
function(a){return"MozAppearance"in a.document.documentElement.style},
function(a){return"_phantom"in a},
function(a){return"callPhantom"in a},
function(a){return"content"in a.document.createElement("template")},
function(a){return"getEntriesByType"in a.performance},
function(){return Tl(3)},
function(a){return"image-rendering"in a.document.body.style},
function(a){return"object-fit"in a.document.body.style},
function(a){return"open"in a.document.createElement("details")},
function(a){return"orientation"in a.screen},
function(a){return"performance"in a},
function(a){return"shape-image-threshold"in a.document.body.style},
function(){return Tl(4)},
function(a){return"srcset"in a.document.createElement("img")},
function(){return $l},
function(){return am},
function(){return Tl(5)},
function(a){a=a.document.createElement("div");a.style.width="1px";a.style.width="-webkit-min-content";a.style.width="min-content";return"1px"!=a.style.width},
function(a){a=a.document.createElement("div");a.style.width="1px";a.style.width="calc(1px - 1px)";a.style.width="-webkit-calc(1px - 1px)";return"1px"!=a.style.width},
function(){var a=!1;eval('var DummyFunction1 = function(x){ "use strict"; var a = 12; b = a + x*35; }');try{(0,window.DummyFunction1)()}catch(b){a=!0}return a},
function(){var a=!1;try{(0,window.DummyFunction2)()}catch(b){a=!0}return a},
function(){return!1},
function(){return Tl(6)},
function(a){var b=a.document.createElement("canvas");b.width=b.height=1;b=b.getContext("2d");b.globalCompositeOperation="multiply";b.fillStyle="rgb(0,255,255)";b.fillRect(0,0,1,1);b.fill();b.fillStyle="rgb(255,255,0)";b.fillRect(0,0,1,1);b.fill();b=b.getImageData(0,0,1,1).data;return b[0]==b[2]&&b[1]==b[3]||Rl(a.navigator.vibrate)},
function(a){a=a.document.createElement("canvas");a.width=a.height=1;a=a.getContext("2d");a.globalCompositeOperation="multiply";a.fillStyle="rgb(0,255,255)";a.fillRect(0,0,1,1);a.fill();a.fillStyle="rgb(255,255,0)";a.fillRect(0,0,1,1);a.fill();a=a.getImageData(0,0,1,1).data;return a[0]==a[2]&&a[1]==a[3]},
function(a){a=a.document.createElement("div");return Rl(a.matches)},
function(a){a=a.document.createElement("input");a.setAttribute("type","range");return"text"!==a.type},
function(a){return a.CSS.supports("image-rendering","pixelated")},
function(a){return a.CSS.supports("object-fit","contain")},
function(){return Tl(7)},
function(a){return a.CSS.supports("object-fit","inherit")},
function(a){return a.CSS.supports("shape-image-threshold","0.9")},
function(a){return a.CSS.supports("word-break","keep-all")},
function(){return eval("1 == [for (item of [1,2,3]) item][0]")},
function(a){return Rl(a.CSS.supports)},
function(){return Rl(window.Intl.Collator)},
function(a){return Rl(a.document.createElement("dialog").show)},
function(){return Tl(8)},
function(a){return Rl(a.document.createElement("div").animate([{transform:"scale(1)",Jw:"ease-in"},{transform:"scale(1.3)",Jw:"ease-in"}],{duration:1300,GK:1}).reverse)},
function(a){return Rl(a.document.createElement("div").animate)},
function(a){return Rl(a.document.documentElement.webkitRequestFullScreen)},
function(a){return Rl(a.navigator.getBattery)},
function(a){return Rl(a.navigator.permissions.query)},
function(){return!1},
function(){return Tl(9)},
function(){return Rl(window.webkitRequestAnimationFrame)},
function(a){return Rl(a.BroadcastChannel.call)},
function(a){return Rl(a.FontFace)},
function(a){return Rl(a.Gamepad)},
function(){return Tl(10)},
function(a){return Rl(a.MutationEvent)},
function(a){return Rl(a.MutationObserver)},
function(a){return Rl(a.crypto.getRandomValues)},
function(a){return Rl(a.document.body.createShadowRoot)},
function(a){return Rl(a.document.body.webkitCreateShadowRoot)},
function(a){return Rl(a.fetch)},
function(){return Tl(11)},
function(a){return Rl(a.navigator.serviceWorker.register)},
function(a){return Rl(a.navigator.webkitGetGamepads)},
function(a){return Rl(a.speechSynthesis.speak)},
function(a){return Rl(a.webkitRTCPeerConnection)},
function(a){return a.CSS.supports("--fake-var","0")},
function(){return Tl(12)},
function(a){return a.CSS.supports("cursor","grab")},
function(a){return a.CSS.supports("cursor","zoom-in")},
function(a){return a.CSS.supports("image-orientation","270deg")},
function(){return Tl(13)},
function(a){return a.CSS.supports("position","sticky")},
function(a){return void 0===a.document.createElement("style").scoped},
function(a){return a.performance.getEntriesByType("resource")instanceof Array},
function(){return"undefined"==typeof window.InstallTrigger},
function(){return"object"==typeof(new window.Intl.Collator).resolvedOptions()},
function(a){return"boolean"==typeof a.navigator.onLine},
function(){return Tl(14)},
function(a){return"undefined"==typeof a.navigator.JK},
function(a){return"number"==typeof a.performance.now()},
function(){return 0==(new window.Uint16Array(1))[0]},
function(a){return-1==a.ActiveXObject.toString().indexOf("native")},
function(a){return-1==Object.prototype.toString.call(a.HTMLElement).indexOf("Constructor")}],Wl=[function(a){a=a.document.createElement("div");
var b=null,c=["{45EA75A0-A269-11D1-B5BF-0000F8051515}","{3AF36230-A269-11D1-B5BF-0000F8051515}","{89820200-ECBD-11CF-8B85-00AA005B4383}"];try{a.style.behavior="url(#default#clientcaps)"}catch(e){}for(var d=0;d<c.length;d++){try{b=a.getComponentVersion(c[d],"componentid").replace(/,/g,".")}catch(e){}if(b)return b.split(".")[0]}return!1},
function(){return(new Date).getTimezoneOffset()},
function(a){return(a.innerWidth||a.document.documentElement.clientWidth||a.document.body.clientWidth)/(a.innerHeight||a.document.documentElement.clientHeight||a.document.body.clientHeight)},
function(a){return(a.outerWidth||a.document&&a.document.body&&a.document.body.offsetWidth)/(a.outerHeight||a.document&&a.document.body&&a.document.body.offsetHeight)},
function(a){return a.screen.availWidth/a.screen.availHeight},
function(a){return a.screen.width/a.screen.height}],Xl=[function(a){return a.navigator.userAgent},
function(a){return a.navigator.platform},
function(a){return a.navigator.vendor}];g.C(bm,Zf);bm.prototype.reset=function(){this.g[0]=1732584193;this.g[1]=4023233417;this.g[2]=2562383102;this.g[3]=271733878;this.B=this.A=0};
bm.prototype.update=function(a,b){g.t(b)||(b=a.length);for(var c=b-this.o,d=this.C,e=this.A,f=0;f<b;){if(0==e)for(;f<=c;)cm(this,a,f),f+=this.o;if(g.u(a))for(;f<b;){if(d[e++]=a.charCodeAt(f++),e==this.o){cm(this,d);e=0;break}}else for(;f<b;)if(d[e++]=a[f++],e==this.o){cm(this,d);e=0;break}}this.A=e;this.B+=b};
bm.prototype.digest=function(){var a=Array((56>this.A?this.o:2*this.o)-this.A);a[0]=128;for(var b=1;b<a.length-8;++b)a[b]=0;for(var c=8*this.B,b=a.length-8;b<a.length;++b)a[b]=c&255,c/=256;this.update(a);a=Array(16);for(b=c=0;4>b;++b)for(var d=0;32>d;d+=8)a[c++]=this.g[b]>>>d&255;return a};g.C(hm,wl);g.sa(hm);g.h=hm.prototype;g.h.cj=function(a,b){switch(Pj.getInstance().bb){case "nis":var c=il(a);c||(c=im(this,a,"n",b.opt_nativeTime||-1),c.W=Pj.getInstance().G);break;case "gsv":(c=il(a))||(c=im(this,a,"m",b.opt_nativeTime||-1));break;case "exc":(c=il(a))||(c=im(this,a,"h",-1));break;default:b.opt_adElement?c=Kl(this,a,b.opt_adElement):(c=lm(this,a,b.opt_sdkID||""))||(c=il(a)||void 0)}c&&c.fa==g.qa&&(c.fa=(0,g.A)(this.Fo,this));return c};
g.h.Fo=function(a){var b=Pj.getInstance();a.g=0;a.aa=0;if("as"==a.ie)if(b="getVideoMetadata"+a.Hg,g.wa(a.element[b]))try{var c=a.element[b]()}catch(e){a.g|=4}else a.g|=2;else if("h"==a.ie||"n"==a.ie)if(b=g.y("exc"==b.bb||"nis"==b.bb?"ima.bridge.getVideoMetadata":"ima.common.getVideoMetadata"),g.wa(b))try{c=b(a.Xb)}catch(e){a.g|=4}else a.g|=2;else a.g|=1;a.g||(g.t(c)?null===c?a.g|=16:g.cc(c)?a.g|=32:null!=c.errorCode&&(a.aa=c.errorCode,a.g|=64):a.g|=8);null!=c||(c={});b=c;a.O=0;for(var d in sV)null==
b[d]&&(a.O|=sV[d]);Ql(b,"currentTime");Ql(b,"duration");Bi(c.volume)&&Bi(this.B)&&(c.volume*=this.B);return c};
g.h.mt=function(a){mm(a,"viewable_impression")&&(a.pu=!0)};
g.h.Wo=function(a){wk(a,a.md().ha[0])&&!a.Va&&mm(a,"fully_viewable_audible_half_duration_impression")&&(a.Va=!0)};
g.h.bq=function(a){a.ou||a.Xe||this.A||!mm(a,"measurable_impression")||(a.ou=!0)};
g.h.lt=function(a){!a.g&&a.Xe&&mm(a,"overlay_unmeasurable_impression")&&(a.g=!0)};
g.h.gj=function(a){this.A?ym(this,a):hm.ea.gj.call(this,a)};
g.h.nn=function(a){this.A&&1==a.Dd()&&ym(this,a)};
g.x("Goog_AdSense_Lidar_sendVastEvent",bj(193,xm,void 0,function(){return{v:"588","if":Pj.getInstance().o?"1":"0",nas:String(el.length)}}),void 0);
g.x("Goog_AdSense_Lidar_getViewability",bj(194,function(a,b){var c=hm.getInstance();var d={};g.ic(d,{opt_adElement:void 0,opt_fullscreen:void 0},b||{});if(d.opt_bounds)c=tm(c,Pl("ol"),!1);else{if(vm)d=Pl("ue");else if(d=c.cj(a,d)){var e=Pl();g.ic(e,zk(d,!0,!1));d=e}else d=Pl("nf");c=tm(c,d,!0)}return c}),void 0);
g.x("Goog_AdSense_Lidar_getUrlSignalsArray",bj(195,function(){return gm()}),void 0);
g.x("Goog_AdSense_Lidar_getUrlSignalsList",bj(196,function(){return g.eg(gm())}),void 0);
g.x("Goog_AdSense_Lidar_addExperimentId",Xi(249,zm,void 0,void 0),void 0);var pM=(new Date).getTime();var Gm="StopIteration"in g.w?g.w.StopIteration:{message:"StopIteration",stack:""};Fm.prototype.next=function(){throw Gm;};
Fm.prototype.Ad=function(){return this};g.h=Km.prototype;g.h.Sc=function(){return this.Aa};
g.h.ub=function(){Mm(this);for(var a=[],b=0;b<this.g.length;b++)a.push(this.o[this.g[b]]);return a};
g.h.Tc=function(){Mm(this);return this.g.concat()};
g.h.isEmpty=function(){return 0==this.Aa};
g.h.clear=function(){this.o={};this.sf=this.Aa=this.g.length=0};
g.h.remove=function(a){return Lm(this.o,a)?(delete this.o[a],this.Aa--,this.sf++,this.g.length>2*this.Aa&&Mm(this),!0):!1};
g.h.get=function(a,b){return Lm(this.o,a)?this.o[a]:b};
g.h.set=function(a,b){Lm(this.o,a)||(this.Aa++,this.g.push(a),this.sf++);this.o[a]=b};
g.h.forEach=function(a,b){for(var c=this.Tc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.h.clone=function(){return new Km(this)};
g.h.Ad=function(a){Mm(this);var b=0,c=this.sf,d=this,e=new Fm;e.next=function(){if(c!=d.sf)throw Error("The map has changed since the iterator was created");if(b>=d.g.length)throw Gm;var e=d.g[b++];return a?e:d.o[e]};
return e};g.Pm.prototype.toString=function(){var a=[],b=this.B;b&&a.push(Xm(b,xV,!0),":");var c=this.g;if(c||"file"==b)a.push("//"),(b=this.H)&&a.push(Xm(b,xV,!0),"@"),a.push((0,window.encodeURIComponent)(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.C,null!=c&&a.push(":",String(c));if(c=this.o)this.g&&"/"!=c.charAt(0)&&a.push("/"),a.push(Xm(c,"/"==c.charAt(0)?yV:zV,!0));(c=this.A.toString())&&a.push("?",c);(c=this.D)&&a.push("#",Xm(c,AV));return a.join("")};
g.Pm.prototype.resolve=function(a){var b=this.clone(),c=!!a.B;c?Qm(b,a.B):c=!!a.H;c?b.H=a.H:c=!!a.g;c?g.Rm(b,a.g):c=null!=a.C;var d=a.o;if(c)g.Sm(b,a.C);else if(c=!!a.o){if("/"!=d.charAt(0))if(this.g&&!this.o)d="/"+d;else{var e=b.o.lastIndexOf("/");-1!=e&&(d=b.o.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){for(var d=g.Ha(e,"/"),e=e.split("/"),f=[],k=0;k<e.length;){var l=e[k++];"."==l?d&&k==e.length&&f.push(""):".."==l?((1<f.length||1==f.length&&""!=
f[0])&&f.pop(),d&&k==e.length&&f.push("")):(f.push(l),d=!0)}d=f.join("/")}else d=e}c?b.o=d:c=""!==a.A.toString();c?Tm(b,a.A.clone()):c=!!a.D;c&&(b.D=a.D);return b};
g.Pm.prototype.clone=function(){return new g.Pm(this)};
g.Pm.prototype.K=function(){return this.A.toString()};
var xV=/[#\/\?@]/g,zV=/[\#\?:]/g,yV=/[\#\?]/g,Ym=/[\#\?@]/g,AV=/#/g;g.h=g.Vm.prototype;g.h.Sc=function(){fn(this);return this.Aa};
g.h.remove=function(a){fn(this);a=gn(this,a);return Lm(this.g.o,a)?(this.o=null,this.Aa=this.Aa-this.g.get(a).length,this.g.remove(a)):!1};
g.h.clear=function(){this.g=this.o=null;this.Aa=0};
g.h.isEmpty=function(){fn(this);return 0==this.Aa};
g.h.forEach=function(a,b){fn(this);this.g.forEach(function(c,d){(0,g.G)(c,function(c){a.call(b,c,d,this)},this)},this)};
g.h.Tc=function(){fn(this);for(var a=this.g.ub(),b=this.g.Tc(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
g.h.ub=function(a){fn(this);var b=[];if(g.u(a))hn(this,a)&&(b=g.vb(b,this.g.get(gn(this,a))));else{a=this.g.ub();for(var c=0;c<a.length;c++)b=g.vb(b,a[c])}return b};
g.h.set=function(a,b){fn(this);this.o=null;a=gn(this,a);hn(this,a)&&(this.Aa=this.Aa-this.g.get(a).length);this.g.set(a,[b]);this.Aa=this.Aa+1;return this};
g.h.get=function(a,b){var c=a?this.ub(a):[];return 0<c.length?String(c[0]):b};
g.h.toString=function(){if(this.o)return this.o;if(!this.g)return"";for(var a=[],b=this.g.Tc(),c=0;c<b.length;c++)for(var d=b[c],e=(0,window.encodeURIComponent)(String(d)),d=this.ub(d),f=0;f<d.length;f++){var k=e;""!==d[f]&&(k+="="+(0,window.encodeURIComponent)(String(d[f])));a.push(k)}return this.o=a.join("&")};
g.h.clone=function(){var a=new g.Vm;a.o=this.o;this.g&&(a.g=this.g.clone(),a.Aa=this.Aa);return a};var Qn={Dv:5E3,Ev:15E3,Pv:"://secure-...imrworldwide.com/ ://cdn.imrworldwide.com/ ://aksecure.imrworldwide.com/ ://[^.]*.moatads.com ://youtube[0-9]+.moatpixel.com ://pm.adsafeprotected.com/youtube ://pm.test-adsafeprotected.com/youtube ://e[0-9]+.yt.srs.doubleverify.com www.google.com/pagead/sul www.google.com/pagead/xsul www.youtube.com/pagead/sul www.youtube.com/pagead/psul www.youtube.com/pagead/slav".split(" "),Qv:/\bocr\b/,Wk:0,Ce:{},hG:function(a,b,c){a&&(Qn.pj(a)?Qn.iG(a,b):Qn.gG(a,b,c))},
pj:function(a){return Ia(g.Wa(a))?!1:0<=a.indexOf("://pagead2.googlesyndication.com/pagead/gen_204?id=yt3p&sr=1&")||(new g.Pm(a)).D.match(Qn.Qv)?!0:null!=g.jb(Qn.Pv,function(b){return null!=a.match(b)})},
iG:function(a,b){if(a&&(a=Qn.Uw(a),!Ia(a))){var c='javascript:"<body><img src=\\""+'+a+'+"\\"></body>"';b?Qn.rq(function(b){Qn.Ft(b?c:'javascript:"<body><object data=\\""+'+a+'+"\\" width=1 height=1 style=\\"visibility:hidden;\\"></body>"')}):Qn.Ft(c)}},
Ft:function(a){var b=g.Wd("IFRAME",{src:a,style:"display:none"});a=g.Fd(b).body;var c=g.Vf(function(){g.Ve(d);g.de(b)},Qn.Ev);
var d=Te(b,["load","error"],function(){g.Vf(function(){g.w.clearTimeout(c);g.de(b)},Qn.Dv)});
a.appendChild(b)},
rq:function(a,b){var c=Qn.Ce.imageLoadingEnabled;if(null!=c)a(c);else{var d=!1,c=function(b,c){delete Qn.Ce[c];d||(d=!0,null!=Qn.Ce.imageLoadingEnabled||(Qn.Ce.imageLoadingEnabled=b),a(b))};
b?b(c):Qn.vy(c)}},
vy:function(a){var b=new window.Image,c=""+Qn.Wk++;Qn.Ce[c]=b;b.onload=function(){(0,window.clearTimeout)(d);a(!0,c)};
var d=(0,window.setTimeout)(function(){a(!1,c)},300);
b.src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="},
fG:function(a){if(a){var b=g.Yd("OBJECT");b.data=a;b.width="1";b.height="1";b.style.visibility="hidden";var c=""+Qn.Wk++;Qn.Ce[c]=b;b.onload=b.onerror=function(){delete Qn.Ce[c]};
window.document.body.appendChild(b)}},
Gt:function(a){if(a){var b=new window.Image,c=""+Qn.Wk++;Qn.Ce[c]=b;b.onload=b.onerror=function(){delete Qn.Ce[c]};
b.src=a}},
gG:function(a,b,c){if(a){if(c)try{if(g.w.navigator&&g.w.navigator.sendBeacon&&g.w.navigator.sendBeacon(a,""))return}catch(d){}b?Qn.rq(function(b){b?Qn.Gt(a):Qn.fG(a)}):Qn.Gt(a)}},
Uw:function(a){var b=jd(md(a));if("about:invalid#zClosurez"===b)return"";b instanceof g.od?a=b:(a=null,b.Ql&&(a=b.nl()),b=Ra(b.ug?b.rg():String(b)),a=qd(b,a));a=g.pd(a);return(0,window.encodeURIComponent)(String(g.eg(a)))}};g.C(g.jn,g.I);var kn=[];g.jn.prototype.ga=function(a,b,c,d){return g.ln(this,a,b,c,d)};
g.jn.prototype.Qa=function(a,b,c,d,e){if(g.ua(b))for(var f=0;f<b.length;f++)this.Qa(a,b[f],c,d,e);else c=c||this.handleEvent,e=e||this.o||this,c=Ke(c),d=!!d,b=g.ze(a)?Ie(a.Cd,String(b),c,d,e):a?(a=g.Me(a))?Ie(a,b,c,d,e):null:null,b&&(g.Ve(b),delete this.g[b.key]);return this};
g.jn.prototype.Y=function(){g.jn.ea.Y.call(this);mn(this)};
g.jn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};var nn=/(?:\[|%5B)([a-zA-Z0-9_]+)(?:\]|%5D)/g;g.C(pn,g.we);un.prototype.g=function(){return!1};
un.prototype.getPlayerType=function(){return""};
var vn=new un;wn.prototype.getId=function(){return this.Ca};xn.prototype.getId=function(){return this.Ca};var In=["ActiveViewExternalLayer"],Dn=null;var Kn=["*.youtu.be","*.youtube.com"],Pn="ad.doubleclick.net bid.g.doubleclick.net corp.google.com ggpht.com google.co.uk google.com googleads.g.doubleclick.net googleads4.g.doubleclick.net googleadservices.com googlesyndication.com googleusercontent.com gstatic.com gvt1.com prod.google.com pubads.g.doubleclick.net s0.2mdn.net static.doubleclick.net static.doubleclick.net surveys.g.doubleclick.net youtube.com ytimg.com".split(" "),On=["c.googlesyndication.com"];var BV;
BV={uv:["BC","AD"],tv:["Before Christ","Anno Domini"],Nv:"JFMAMJJASOND".split(""),Yv:"JFMAMJJASOND".split(""),ko:"January February March April May June July August September October November December".split(" "),ro:"January February March April May June July August September October November December".split(" "),oo:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),so:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Co:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),uo:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
po:"Sun Mon Tue Wed Thu Fri Sat".split(" "),to:"Sun Mon Tue Wed Thu Fri Sat".split(" "),eJ:"SMTWTFS".split(""),Zv:"SMTWTFS".split(""),Uv:["Q1","Q2","Q3","Q4"],Ov:["1st quarter","2nd quarter","3rd quarter","4th quarter"],ao:["AM","PM"],tk:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],Ao:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],ov:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],uk:6,iw:[5,6],vk:5};g.CV=BV;g.CV=BV;g.h=g.Un.prototype;g.h.Si=g.CV.uk;g.h.Ui=g.CV.vk;g.h.clone=function(){var a=new g.Un(this.date);a.Si=this.Si;a.Ui=this.Ui;return a};
g.h.getFullYear=function(){return this.date.getFullYear()};
g.h.getMonth=function(){return this.date.getMonth()};
g.h.getDate=function(){return this.date.getDate()};
g.h.getTime=function(){return this.date.getTime()};
g.h.getDay=function(){return this.date.getDay()};
g.h.getUTCFullYear=function(){return this.date.getUTCFullYear()};
g.h.getUTCMonth=function(){return this.date.getUTCMonth()};
g.h.getUTCDate=function(){return this.date.getUTCDate()};
g.h.getUTCHours=function(){return this.date.getUTCHours()};
g.h.getUTCMinutes=function(){return this.date.getUTCMinutes()};
g.h.getTimezoneOffset=function(){return this.date.getTimezoneOffset()};
g.h.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
g.h.ej=function(a,b){return[this.getFullYear(),g.Va(this.getMonth()+1,2),g.Va(this.getDate(),2)].join(a?"-":"")+(b?g.Vn(this):"")};
g.h.toString=function(){return this.ej()};
g.h.valueOf=function(){return this.date.valueOf()};var Xn=new Wn;Wn.prototype.clear=function(){this.g=null;this.A="";this.o=null};g.sa(Zn);Zn.prototype.isLoggingEnabled=function(){return this.g};g.C(co,g.$e);var eo=null;co.prototype.destroy=function(){this.A.Qa(this.o,"activityMonitor",this.D);this.o=null};
co.prototype.D=function(a){var b=a.o;switch(a.A){case "appStateChanged":um(hm.getInstance(),b.appState,b.nativeTime);break;case "externalActivityEvent":io();break;case "measurableImpression":go();break;case "viewableImpression":ho();break;case "engagementData":b=b.engagementString;fo().C=b;fo().B=(0,g.F)();break;case "viewability":a=b.eventId;window.clearTimeout(a);var c=this.g.get(a);c&&(this.g.remove(a),c(b.viewabilityData));break;case "viewabilityMeasurement":var d=hm.getInstance(),e=b.queryId,
b=b.viewabilityData;a=Pj.getInstance();if("exc"==a.bb){d.B=b.nativeVolume;var c=b.coverage||0,f=b.unmeasurable,d=d.cj(e,{});-1==d.fb&&(d.fb=pi(),d.Cb=d.md().o);d.oa+=f?1:0;d.Ya++;d.Ua[Gi(c)]++;e=b.insideIframe;g.t(e)&&0==e&&(a.o=!1);d.Xe=f||d.Xe;b.position&&Uj(d,K,a.o,new g.Eg(b.position.top,b.position.right,b.position.bottom,b.position.left));b.documentSize&&(a.A=new g.Cd(b.documentSize.width,b.documentSize.height));b.viewportSize&&(a.g=new g.Cd(b.viewportSize.width,b.viewportSize.height));d.Hb.g=
g.td(c,0,1);d.gm=d.Hb.g}break;case "engagement":a=b.eventId,window.clearTimeout(a),c=this.g.get(a),Zn.getInstance().isLoggingEnabled()&&(f=-1,this.G&&(f=(0,g.F)()-this.G),d=!1,c||(d=!0),Zb(b,"loggingId")&&bo(Zn.getInstance(),{step:"receivedResponse",time:(0,g.F)(),timeout:d,logid:b.loggingId,timediff:f})),c&&(this.g.remove(a),c(b.engagementString))}};
g.x("ima.bridge.getNativeViewability",function(a,b){fo();b({})},void 0);
g.x("ima.bridge.getVideoMetadata",function(){var a=(fo(),null);return g.wa(a)?a():{}},void 0);
g.x("ima.bridge.triggerViewEvent",ho,void 0);g.x("ima.bridge.triggerMeasurableEvent",go,void 0);g.x("ima.bridge.triggerExternalActivityEvent",io,void 0);g.C(jo,g.$e);var ko=null;jo.prototype.destroy=function(){this.B.Qa(this.g,"activityMonitor",this.C);this.o=!1;this.G.clear()};
jo.prototype.Y=function(){this.destroy();jo.ea.Y.call(this)};
jo.prototype.init=function(a){if(!this.o){if(this.g=a||null)this.B.ga(this.g,"activityMonitor",this.C),mo(this);no();vn.g()||(hm.getInstance().A=!0);this.A=(g.wa(null),null);this.o=!0;a=Jn();(0,g.G)(a,function(a){zm(a)})}};
jo.prototype.C=function(a){var b=a.o,c=b.queryId,d={};d.eventId=b.eventId;switch(a.A){case "getPageSignals":mo(this);break;case "reportVastEvent":a=b.vastEvent;var e=b.osdId,f={};f.opt_fullscreen=b.isFullscreen;b.isOverlay&&(f.opt_bounds=b.overlayBounds);if(this.o)if(this.A)c=this.A(a,c,f);else{b=f||{};if(e=e?this.D.get(e):vn.A){if(null==b.opt_fullscreen){if(null==e)f=!1;else if((WU&&!XU||Ta(g.Ob,"iPod"))&&null!=e.webkitDisplayingFullscreen)f=e.webkitDisplayingFullscreen;else{var f=window.screen.availWidth||
window.screen.width,k=window.screen.availHeight||window.screen.height;var l=g.wa(e.getBoundingClientRect)&&g.je(g.Fd(e),e)?e.getBoundingClientRect():{left:e.offsetLeft,top:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight};f=0>=f-l.width&&42>=k-l.height}b.opt_fullscreen=f}null!=b.opt_adElement||(b.opt_adElement=e)}c=aj("lidar::handlevast_html5",g.B(xm,a,c,b))||{}}else c={};d.viewabilityData=c;this.g.send("activityMonitor","viewability",d);break;case "fetchAdTagUrl":c={},c.eventId=b.eventId,e=
b.osdId,d=null,Zb(b,"isFullscreen")&&(d=b.isFullscreen),Zb(b,"loggingId")&&(a=b.loggingId,c.loggingId=a,bo(Zn.getInstance(),{step:"beforeLookup",logid:a,time:(0,g.F)()},!0)),c.engagementString=oo(this,e,d),this.g.send("activityMonitor","engagement",c)}};
g.x("ima.common.getVideoMetadata",function(a){a=lo().G.get(a);return g.wa(a)?a():{}},void 0);
g.x("ima.common.triggerViewEvent",function(a,b){var c={};c.queryId=a;c.viewabilityString=b;var d=lo().g;d?d.send("activityMonitor","viewableImpression",c):lo().dispatchEvent(new pn("viewable_impression"))},void 0);
g.x("ima.common.triggerViewabilityMeasurementUpdate",function(a,b){var c=lo().g,d={};d.queryId=a;d.viewabilityData=b;c&&c.send("activityMonitor","viewabilityMeasurement",d)},void 0);
g.x("ima.common.triggerMeasurableEvent",function(a,b){var c={};c.queryId=a;c.viewabilityString=b;var d=lo().g;d?d.send("activityMonitor","measurableImpression",c):lo().dispatchEvent(new pn("measurable_impression"))},void 0);
g.x("ima.common.triggerExternalActivityEvent",function(a,b,c){var d={};d.queryId=a;d.viewabilityString=b;d.eventName=c;(a=lo().g)?a.send("activityMonitor","externalActivityEvent",d):lo().dispatchEvent(new pn("externalActivityEvent"))},void 0);
g.x("ima.common.updateEngagementDetectionValue",function(a){var b=lo().g;if(b){var c={};c.engagementString=a;b.send("activityMonitor","engagementData",c)}},void 0);
lo();g.Dc&&g.uc(8);g.po.prototype.o=function(a){var b=0,c=0,d=!1;a=a.split(iV);for(var e=0;e<a.length;e++){var f=a[e];gV.test(f)?(b++,c++):hV.test(f)?d=!0:fV.test(f)?c++:jV.test(f)&&(d=!0)}return 0==c?d?1:0:.4<b/c?-1:1};ro.prototype.g=null;ro.prototype.toString=function(){return this.content};
g.C(so,ro);(function(a){function b(a){this.content=a}
b.prototype=a.prototype;return function(a,d){var c=new b(String(a));void 0!==d&&(c.g=d);return c}})(so);
var to={};(function(a){function b(a){this.content=a}
b.prototype=a.prototype;return function(a,d){var c=String(a);if(!c)return"";c=new b(c);void 0!==d&&(c.g=d);return c}})(so);var DV=g.Dc?gd(ad(cd('javascript:""'))):gd(ad(cd("about:blank")));fd(DV);var EV=g.Dc?gd(ad(cd('javascript:""'))):gd(ad(cd("javascript:undefined")));fd(EV);uo("a","");uo("a","fixedDirectionality");uo("a","redesign2014q4");uo("b","");uo("b","redesign2014q4");uo("b","forcedlinebreak");var Bo=g.Dc&&Ao();g.C(g.Do,g.I);g.h=g.Do.prototype;g.h.start=function(){this.stop();this.A=!1;var a=Eo(this),b=Fo(this);a&&!b&&this.g.mozRequestAnimationFrame?(this.Ca=g.Je(this.g,"MozBeforePaint",this.o),this.g.mozRequestAnimationFrame(null),this.A=!0):this.Ca=a&&b?a.call(this.g,this.o):this.g.setTimeout(ef(this.o),20)};
g.h.th=function(){this.isActive()||this.start()};
g.h.stop=function(){if(this.isActive()){var a=Eo(this),b=Fo(this);a&&!b&&this.g.mozRequestAnimationFrame?g.Ve(this.Ca):a&&b?b.call(this.g,this.Ca):this.g.clearTimeout(this.Ca)}this.Ca=null};
g.h.isActive=function(){return null!=this.Ca};
g.h.ax=function(){this.A&&this.Ca&&g.Ve(this.Ca);this.Ca=null;this.C.call(this.B,(0,g.F)())};
g.h.Y=function(){this.stop();g.Do.ea.Y.call(this)};g.C(g.O,g.I);g.h=g.O.prototype;g.h.Ca=0;g.h.Y=function(){g.O.ea.Y.call(this);this.stop();delete this.g;delete this.o};
g.h.start=function(a){this.stop();this.Ca=g.Vf(this.A,g.t(a)?a:this.B)};
g.h.Wc=function(a){this.isActive()||this.start(a)};
g.h.stop=function(){this.isActive()&&g.w.clearTimeout(this.Ca);this.Ca=0};
g.h.isActive=function(){return 0!=this.Ca};
g.h.Sp=function(){this.Ca=0;this.g&&this.g.call(this.o)};g.Lo={};g.Io=null;g.sa(g.Mo);g.Mo.prototype.g=0;g.C(g.No,g.$e);g.h=g.No.prototype;g.h.ey=g.Mo.getInstance();g.h.getId=function(){return this.Ca||(this.Ca=":"+(this.ey.g++).toString(36))};
g.h.na=function(){return this.o};
g.h.tn=function(a){if(this.K&&this.K!=a)throw Error("Method not supported");g.No.ea.tn.call(this,a)};
g.h.Bl=ba(0);g.h.kh=function(){Oo(this,function(a){a.Mf&&a.kh()});
this.C&&mn(this.C);this.Mf=!1};
g.h.Y=function(){this.Mf&&this.kh();this.C&&(this.C.dispose(),delete this.C);Oo(this,function(a){a.dispose()});
this.o&&g.de(this.o);this.K=this.o=this.D=this.H=null;g.No.ea.Y.call(this)};
g.h.ph=ba(1);g.h.removeChild=function(a,b){if(a){var c=g.u(a)?a:a.getId();a=this.D&&c?dc(this.D,c)||null:null;if(c&&a){var d=this.D;c in d&&delete d[c];g.tb(this.H,a);b&&(a.kh(),a.o&&g.de(a.o));c=a;if(null==c)throw Error("Unable to set parent component");c.K=null;g.No.ea.tn.call(c,null)}}if(!a)throw Error("Child is not in parent component");return a};gd(ad(cd("https://imasdk.googleapis.com/flash/sdkloader/flashinhtml.swf")));gd(ad(cd("http://imasdk.googleapis.com/flash/sdkloader/flashinhtml.swf")));gd(ad(cd("https://imasdk.googleapis.com/flash/sdkloader/flashinhtml.swf")));gd(ad(cd("http://imasdk.googleapis.com/flash/sdkloader/flashinhtml.swf")));Po.prototype.g=null;var FV;g.C(So,Po);FV=new So;g.C(Vo,g.$e);Vo.prototype.ye=null;var cp=/^https?$/i,GV=["POST","PUT"];g.h=Vo.prototype;
g.h.send=function(a,b,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.ba+"; newUri="+a);b=b?b.toUpperCase():"GET";this.ba=a;this.C="";this.B=0;this.T=!1;this.o=!0;this.g=this.O?Uo(this.O):Uo(FV);this.K=this.O?Ro(this.O):Ro(FV);this.g.onreadystatechange=(0,g.A)(this.Vp,this);try{this.getStatus(),this.X=!0,this.g.open(b,String(a),!0),this.X=!1}catch(f){this.getStatus();$o(this,f);return}a=c||"";var e=this.headers.clone();d&&Om(d,function(a,b){e.set(b,a)});
d=g.jb(e.Tc(),Xo);c=g.w.FormData&&a instanceof g.w.FormData;!g.ob(GV,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.g.setRequestHeader(b,a)},this);
this.da&&(this.g.responseType=this.da);"withCredentials"in this.g&&this.g.withCredentials!==this.W&&(this.g.withCredentials=this.W);try{ep(this),0<this.H&&(this.aa=Wo(this.g),this.getStatus(),this.aa?(this.g.timeout=this.H,this.g.ontimeout=(0,g.A)(this.Wp,this)):this.D=g.Vf(this.Wp,this.H,this)),this.getStatus(),this.G=!0,this.g.send(a),this.G=!1}catch(f){this.getStatus(),$o(this,f)}};
g.h.Wp=function(){"undefined"!=typeof ap&&this.g&&(this.C="Timed out after "+this.H+"ms, aborting",this.B=8,this.getStatus(),this.dispatchEvent("timeout"),this.abort(8))};
g.h.abort=function(a){this.g&&this.o&&(this.getStatus(),this.o=!1,this.A=!0,this.g.abort(),this.A=!1,this.B=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Zo(this))};
g.h.Y=function(){this.g&&(this.o&&(this.o=!1,this.A=!0,this.g.abort(),this.A=!1),Zo(this,!0));Vo.ea.Y.call(this)};
g.h.Vp=function(){this.ka()||(this.X||this.G||this.A?dp(this):this.rE())};
g.h.rE=function(){dp(this)};
g.h.isActive=function(){return!!this.g};
g.h.getStatus=function(){try{return 2<bp(this)?this.g.status:-1}catch(a){return-1}};g.h=hp.prototype;g.h.Sc=function(){return this.g.Sc()};
g.h.remove=function(a){return this.g.remove(ip(a))};
g.h.clear=function(){this.g.clear()};
g.h.isEmpty=function(){return this.g.isEmpty()};
g.h.contains=function(a){a=ip(a);return Lm(this.g.o,a)};
g.h.ub=function(){return this.g.ub()};
g.h.clone=function(){return new hp(this)};
g.h.Ad=function(){return this.g.Ad(!1)};new Km;var HV=[];g.x("onYouTubeIframeAPIReady",function(){(0,g.G)(HV,function(a){a()});
qb(HV)},window);new jp;jp.prototype.set=function(a){this.g=a};
jp.prototype.reset=function(){this.set((0,g.F)())};
jp.prototype.get=function(){return this.g};jc("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));kp.prototype.stringify=function(a){return g.w.JSON.stringify(a,this.g)};
kp.prototype.parse=function(a){return g.w.JSON.parse(a,this.o)};lp.prototype.clone=function(){return new lp(this.g,this.G,this.A,this.C,this.B,this.D,this.o,this.H)};op.prototype.o=0;op.prototype.reset=function(){this.g=this.A=this.B;this.o=0};
op.prototype.getValue=function(){return this.A};g.h=pp.prototype;g.h.Kf=null;g.h.Nd=!1;g.h.Qg=null;g.h.On=null;g.h.Zh=null;g.h.tg=null;g.h.Ue=null;g.h.mf=null;g.h.Wf=null;g.h.dc=null;g.h.ji=0;g.h.Od=null;g.h.jk=null;g.h.Lf=null;g.h.wh=-1;g.h.Bt=!0;g.h.zf=!1;g.h.Al=0;g.h.Oj=null;var xp={},vp={};g.h=pp.prototype;g.h.setTimeout=function(a){this.C=a};
g.h.SF=function(a){a=a.target;var b=this.Oj;b&&3==bp(a)?b.sg():this.ru(a)};
g.h.ru=function(a){try{if(a==this.dc)a:{var b=bp(this.dc),c=this.dc.B,d=this.dc.getStatus();if(g.Dc&&!g.wc(10)||g.Sd&&!g.uc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.Yg&&!fp(this.dc))break a;this.zf||4!=b||7==c||(8==c||0>=d?this.g.Ld(3):this.g.Ld(2));Hp(this);var e=this.dc.getStatus();this.wh=e;var f=fp(this.dc);(this.Nd=200==e)?(4==b&&zp(this),this.D?(Bp(this,b,f),g.Yg&&this.Nd&&3==b&&(this.B.ga(this.o,"tick",this.IF),this.o.start())):yp(this,f),this.Nd&&!this.zf&&(4==b?this.g.Hj(this):(this.Nd=
!1,tp(this)))):(this.Lf=400==e&&0<f.indexOf("Unknown SID")?3:0,wp(),zp(this),Ap(this))}}catch(k){}finally{}};
g.h.IF=function(){var a=bp(this.dc),b=fp(this.dc);this.ji<b.length&&(Hp(this),Bp(this,a,b),this.Nd&&4!=a&&tp(this))};
g.h.gF=function(a){Gp((0,g.A)(this.fF,this,a),0)};
g.h.fF=function(a){this.zf||(Hp(this),yp(this,a),tp(this))};
g.h.Ns=function(a){Gp((0,g.A)(this.eF,this,a),0)};
g.h.eF=function(a){this.zf||(zp(this),this.Nd=a,this.g.Hj(this),this.g.Ld(4))};
g.h.cancel=function(){this.zf=!0;zp(this)};
g.h.qF=function(){this.Qg=null;var a=(0,g.F)();0<=a-this.On?(2!=this.tg&&this.g.Ld(3),zp(this),this.Lf=2,wp(),Ap(this)):Fp(this,this.On-a)};g.h=Lp.prototype;g.h.xl=null;g.h.bd=null;g.h.Pj=!1;g.h.Up=null;g.h.Ti=null;g.h.yl=null;g.h.zl=null;g.h.pd=null;g.h.ue=-1;g.h.vh=null;g.h.eh=null;g.h.connect=function(a){this.zl=a;a=Mp(this.g,null,this.zl);wp();this.Up=(0,g.F)();var b=this.g.K;null!=b?(this.vh=b[0],(this.eh=b[1])?(this.pd=1,Np(this)):(this.pd=2,Pp(this))):(an(a,"MODE","init"),this.bd=new pp(this,0,void 0,void 0,void 0),this.bd.Kf=this.xl,sp(this.bd,a,!1,null,!0),this.pd=0)};
g.h.zw=function(a){if(a)this.pd=2,Pp(this);else{wp();var b=this.g;b.Fd=b.Qe.ue;jq(b,9)}a&&this.Ld(2)};
g.h.Yk=function(a){return this.g.Yk(a)};
g.h.abort=function(){this.bd&&(this.bd.cancel(),this.bd=null);this.ue=-1};
g.h.Tp=function(){return!1};
g.h.Hs=function(a,b){this.ue=a.wh;if(0==this.pd)if(b){try{var c=this.o.parse(b)}catch(d){c=this.g;c.Fd=this.ue;jq(c,2);return}this.vh=c[0];this.eh=c[1]}else c=this.g,c.Fd=this.ue,jq(c,2);else if(2==this.pd)if(this.Pj)wp(),this.yl=(0,g.F)();else if("11111"==b){if(wp(),this.Pj=!0,this.Ti=(0,g.F)(),c=this.Ti-this.Up,!g.Dc||g.wc(10)||500>c)this.ue=200,this.bd.cancel(),wp(),Op(this.g,this,!0)}else wp(),this.Ti=this.yl=(0,g.F)(),this.Pj=!1};
g.h.Hj=function(){this.ue=this.bd.wh;if(this.bd.Nd)0==this.pd?this.eh?(this.pd=1,Np(this)):(this.pd=2,Pp(this)):2==this.pd&&((!g.Dc||g.wc(10)?!this.Pj:200>this.yl-this.Ti)?(wp(),Op(this.g,this,!1)):(wp(),Op(this.g,this,!0)));else{0==this.pd?wp():2==this.pd&&wp();var a=this.g;a.Fd=this.ue;jq(a,2)}};
g.h.ci=function(){return this.g.ci()};
g.h.isActive=function(){return this.g.isActive()};
g.h.Ld=function(a){this.g.Ld(a)};g.h=Qp.prototype;g.h.lh=null;g.h.Jc=null;g.h.Ib=null;g.h.wl=null;g.h.Xi=null;g.h.Lo=null;g.h.fj=null;g.h.Th=0;g.h.XB=0;g.h.hc=null;g.h.Re=null;g.h.re=null;g.h.Cf=null;g.h.Qe=null;g.h.ik=null;g.h.xg=-1;g.h.yq=-1;g.h.Fd=-1;g.h.oh=0;g.h.lg=0;g.h.Af=8;var kq=new g.$e;g.C(Sp,g.we);g.C(Tp,g.we);g.C(Up,g.we);g.h=Qp.prototype;g.h.connect=function(a,b,c,d,e){wp();this.wl=b;this.lh=c||{};d&&g.t(e)&&(this.lh.OSID=d,this.lh.OAID=e);this.D?(Gp((0,g.A)(this.jp,this,a),100),$p(this)):this.jp(a)};
g.h.jp=function(a){this.Qe=new Lp(this);this.Qe.xl=null;this.Qe.o=this.C;this.Qe.connect(a)};
g.h.Tp=function(){return 0==this.g};
g.h.Ls=function(a){this.Re=null;eq(this,a)};
g.h.Ks=function(){this.re=null;this.Ib=new pp(this,0,this.A,"rpc",this.G);this.Ib.Kf=null;this.Ib.Al=0;var a=this.Lo.clone();g.Zm(a,"RID","rpc");g.Zm(a,"SID",this.A);g.Zm(a,"CI",this.ik?"0":"1");g.Zm(a,"AID",this.xg);Wp(this,a);if(!g.Dc||g.wc(10))g.Zm(a,"TYPE","xmlhttp"),sp(this.Ib,a,!0,this.fj,!1);else{g.Zm(a,"TYPE","html");var b=this.Ib,c=!!this.fj;b.tg=3;b.Ue=bn(a.clone());Ep(b,c)}};
g.h.Hs=function(a,b){if(0!=this.g&&(this.Ib==a||this.Jc==a))if(this.Fd=a.wh,this.Jc==a&&3==this.g)if(7<this.Af){try{var c=this.C.parse(b)}catch(f){c=null}if(g.ua(c)&&3==c.length)if(0==c[0])a:{if(!this.re){if(this.Ib)if(this.Ib.Zh+3E3<this.Jc.Zh)aq(this),this.Ib.cancel(),this.Ib=null;else break a;hq(this);wp()}}else this.yq=c[1],0<this.yq-this.xg&&37500>c[2]&&this.ik&&0==this.lg&&!this.Cf&&(this.Cf=Gp((0,g.A)(this.sC,this),6E3));else jq(this,11)}else b!=lV.jI.g&&jq(this,11);else if(this.Ib==a&&aq(this),
!Ia(b)){c=this.C.parse(b);g.ua(c);for(var d=0;d<c.length;d++){var e=c[d];this.xg=e[0];e=e[1];2==this.g?"c"==e[0]?(this.A=e[1],this.fj=e[2],e=e[3],null!=e?this.Af=e:this.Af=6,this.g=3,this.hc&&this.hc.Uo(this),this.Lo=Mp(this,this.ci()?this.fj:null,this.wl),fq(this)):"stop"==e[0]&&jq(this,7):3==this.g&&("stop"==e[0]?jq(this,7):"noop"!=e[0]&&this.hc&&this.hc.To(this,e),this.lg=0)}}};
g.h.sC=function(){null!=this.Cf&&(this.Cf=null,this.Ib.cancel(),this.Ib=null,hq(this),wp())};
g.h.Hj=function(a){if(this.Ib==a){aq(this);this.Ib=null;var b=2}else if(this.Jc==a)this.Jc=null,b=1;else return;this.Fd=a.wh;if(0!=this.g)if(a.Nd)1==b?((0,g.F)(),kq.dispatchEvent(new Tp(kq,a.Wf?a.Wf.length:0)),Zp(this),this.B.length=0):fq(this);else{var c=a.Lf,d;if(!(d=3==c||7==c||0==c&&0<this.Fd)){if(d=1==b)this.Jc||this.Re||1==this.g||2<=this.oh?d=!1:(this.Re=Gp((0,g.A)(this.Ls,this,a),gq(this,this.oh)),this.oh++,d=!0);d=!(d||2==b&&hq(this))}if(d)switch(c){case 1:jq(this,5);break;case 4:jq(this,
10);break;case 3:jq(this,6);break;case 7:jq(this,12);break;default:jq(this,2)}}};
g.h.Lw=function(a){if(!g.ob(arguments,this.g))throw Error("Unexpected channel state: "+this.g);};
g.h.sG=function(a){a?wp():(wp(),iq(this,8))};
g.h.Yk=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new Vo;a.W=!1;return a};
g.h.isActive=function(){return!!this.hc&&this.hc.isActive(this)};
g.h.Ld=function(){kq.dispatchEvent(new Up(kq))};
g.h.ci=function(){return!(!g.Dc||g.wc(10))};
g.h=lq.prototype;g.h.Uo=function(){};
g.h.To=function(){};
g.h.So=function(){};
g.h.Uk=function(){};
g.h.Hp=function(){return{}};
g.h.isActive=function(){return!0};g.C(g.nq,g.I);g.h=g.nq.prototype;g.h.subscribe=function(a,b,c){var d=this.o[a];d||(d=this.o[a]=[]);var e=this.Mc;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.Mc=e+3;d.push(e);return e};
g.h.unsubscribe=function(a,b,c){if(a=this.o[a]){var d=this.g;if(a=g.jb(a,function(a){return d[a+1]==b&&d[a+2]==c}))return this.Qc(a)}return!1};
g.h.Qc=function(a){var b=this.g[a];if(b){var c=this.o[b];0!=this.B?(this.A.push(a),this.g[a+1]=g.qa):(c&&g.tb(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
g.h.U=function(a,b){var c=this.o[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.C)for(e=0;e<c.length;e++){var k=c[e];oq(this.g[k+1],this.g[k+2],d)}else{this.B++;try{for(e=0,f=c.length;e<f;e++)k=c[e],this.g[k+1].apply(this.g[k+2],d)}finally{if(this.B--,0<this.A.length&&0==this.B)for(;k=this.A.pop();)this.Qc(k)}}return 0!=e}return!1};
g.h.clear=function(a){if(a){var b=this.o[a];b&&((0,g.G)(b,this.Qc,this),delete this.o[a])}else this.g.length=0,this.o={}};
g.h.Sc=function(a){if(a){var b=this.o[a];return b?b.length:0}a=0;for(b in this.o)a+=this.Sc(b);return a};
g.h.Y=function(){g.nq.ea.Y.call(this);this.clear();this.A.length=0};g.pq.prototype.set=function(a,b){g.t(b)?this.g.set(a,g.eg(b)):this.g.remove(a)};
g.pq.prototype.get=function(a){try{var b=this.g.get(a)}catch(c){return}if(null!==b)try{return g.bg(b)}catch(c){throw"Storage: Invalid value was encountered";}};
g.pq.prototype.remove=function(a){this.g.remove(a)};g.C(qq,g.pq);qq.prototype.set=function(a,b){qq.ea.set.call(this,a,sq(b))};
qq.prototype.o=function(a){a=qq.ea.get.call(this,a);if(!g.t(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
qq.prototype.get=function(a){if(a=this.o(a)){if(a=a.data,!g.t(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};g.C(tq,qq);tq.prototype.set=function(a,b,c){if(b=sq(b)){if(c){if(c<(0,g.F)()){tq.prototype.remove.call(this,a);return}b.expiration=c}b.creation=(0,g.F)()}tq.ea.set.call(this,a,b)};
tq.prototype.o=function(a,b){var c=tq.ea.o.call(this,a);if(c)if(!b&&g.uq(c))tq.prototype.remove.call(this,a);else return c};g.C(g.vq,tq);g.C(xq,wq);xq.prototype.Sc=function(){var a=0;g.Im(this.Ad(!0),function(){a++});
return a};
xq.prototype.clear=function(){var a=Jm(this.Ad(!0)),b=this;(0,g.G)(a,function(a){b.remove(a)})};g.C(yq,xq);g.h=yq.prototype;g.h.isAvailable=function(){if(!this.g)return!1;try{return this.g.setItem("__sak","1"),this.g.removeItem("__sak"),!0}catch(a){return!1}};
g.h.set=function(a,b){try{this.g.setItem(a,b)}catch(c){if(0==this.g.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.h.get=function(a){a=this.g.getItem(a);if(!g.u(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.g.removeItem(a)};
g.h.Sc=function(){return this.g.length};
g.h.Ad=function(a){var b=0,c=this.g,d=new Fm;d.next=function(){if(b>=c.length)throw Gm;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!g.u(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.h.clear=function(){this.g.clear()};
g.h.key=function(a){return this.g.key(a)};g.C(zq,yq);g.C(Aq,yq);g.C(Bq,xq);Bq.prototype.set=function(a,b){this.o.set(this.g+a,b)};
Bq.prototype.get=function(a){return this.o.get(this.g+a)};
Bq.prototype.remove=function(a){this.o.remove(this.g+a)};
Bq.prototype.Ad=function(a){var b=this.o.Ad(!0),c=this,d=new Fm;d.next=function(){for(var d=b.next();d.substr(0,c.g.length)!=c.g;)d=b.next();return a?d.substr(c.g.length):c.o.get(d)};
return d};Dq.prototype.getValue=function(){return this.g};
Dq.prototype.clone=function(){return new Dq(this.Mc,this.g)};g.h=Eq.prototype;g.h.remove=function(){var a=this.g,b=a.length,c=a[0];if(!(0>=b)){if(1==b)qb(a);else{a[0]=a.pop();for(var a=0,b=this.g,d=b.length,e=b[a];a<d>>1;){var f=2*a+1,k=2*a+2,f=k<d&&b[k].Mc<b[f].Mc?k:f;if(b[f].Mc>e.Mc)break;b[a]=b[f];a=f}b[a]=e}return c.getValue()}};
g.h.ub=function(){for(var a=this.g,b=[],c=a.length,d=0;d<c;d++)b.push(a[d].getValue());return b};
g.h.Tc=function(){for(var a=this.g,b=[],c=a.length,d=0;d<c;d++)b.push(a[d].Mc);return b};
g.h.clone=function(){return new Eq(this)};
g.h.Sc=function(){return this.g.length};
g.h.isEmpty=function(){return g.pb(this.g)};
g.h.clear=function(){qb(this.g)};g.C(Gq,Eq);/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
Hq.prototype.cancel=function(a){if(this.g)this.A instanceof Hq&&this.A.cancel();else{if(this.o){var b=this.o;delete this.o;a?b.cancel(a):(b.H--,0>=b.H&&b.cancel())}this.T?this.T.call(this.O,this):this.K=!0;this.g||(a=new Qq,Lq(this),Jq(this,!1,a))}};
Hq.prototype.L=function(a,b){this.G=!1;Jq(this,a,b)};
Hq.prototype.Ei=function(a){Lq(this);Jq(this,!0,a)};
Hq.prototype.then=function(a,b,c){var d,e,f=new g.yf(function(a,b){d=a;e=b});
Mq(this,d,function(a){a instanceof Qq?f.cancel():e(a)});
return f.then(a,b,c)};
vf(Hq);Hq.prototype.isError=function(a){return a instanceof Error};
g.C(Kq,Ga);Kq.prototype.message="Deferred has already fired";Kq.prototype.name="AlreadyCalledError";g.C(Qq,Ga);Qq.prototype.message="Deferred was canceled";Qq.prototype.name="CanceledError";Pq.prototype.o=function(){delete Oq[this.Ca];throw this.g;};
var Oq={};g.C(Sq,Qc);var Rq=[2];g.Ot=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};g.Uq=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};g.x("yt.config_",g.Uq,void 0);var Wq=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};g.x("yt.msgs_",Wq,void 0);g.Zq=void 0;var vr={nu:function(a){a.reverse()},
lB:function(a,b){a.splice(0,b)},
KS:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b]=c}};var IV,Bz,zz,JV,ZE,fK,IC,KV,Mz,LC,JC;IV=/^https?:\/\/([^.]*\.moatads\.com\/|e[0-9]+\.yt\.srs\.doubleverify\.com|pagead2\.googlesyndication\.com\/pagead\/gen_204\?id=yt3p&sr=1&|pm\.adsafeprotected\.com\/youtube|pm\.test-adsafeprotected\.com\/youtube|youtube[0-9]+\.moatpixel\.com\/)/;Bz=/^https?:\/\/([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|borg\.google\.com|googleapis\.com|prod\.google\.com|sandbox\.google\.com|staging\-www\.sandbox\.googleapis\.com)(:[0-9]+)?\//;zz=/^http:\/\/0\.[a-z0-9\-_]+\.[a-z0-9\-_]+\.l2gfe\.[a-z0-9_]+\.([a-z]{2}|i)\.borg\.google\.com(:[0-9]+)?\/|^https?:\/\/((?:uytfe\.corp|dev-uytfe\.corp|uytfe\.sandbox)\.google\.com\/|([-\w]*www[-\w]*\.|[-\w]*web[-\w]*\.|[-\w]*canary[-\w]*\.|[-\w]*dev[-\w]*\.|[-\w]{1,3}\.)+youtube(education|-nocookie)?\.com\/|([a-z]+\.)?[a-z0-9\-]{1,63}\.([a-z]{3}|i)\.corp\.google\.com(:[0-9]+)?\/|(docs|drive)\.google\.com\/(a\/[^/\\%]+\/|)|[A-Za-z0-9]+(-v6)?\.prod\.google\.com(:[0-9]+)?\/|m?web-ppg\.corp\.google\.com\/|play\.google\.com\/)/;
JV=/^https?:\/\/(www\.google\.com\/pagead\/sul|www\.google\.com\/pagead\/xsul|www\.youtube\.com\/pagead\/psul|www\.youtube\.com\/pagead\/slav|www\.youtube\.com\/pagead\/sul)/;ZE=/^https?:\/\/([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|docs\.google\.com|drive\.google\.com|prod\.google\.com|sandbox\.google\.com|plus\.google\.com|mail\.google\.com|youtube\.com|youtubeeducation\.com)(:[0-9]+)?\//;fK=/^https?:\/\/([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|borg\.google\.com|prod\.google\.com|sandbox\.google\.com|youtube\.com)(:[0-9]+)?\//;
IC=/^https?:\/\/([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|borg\.google\.com|prod\.google\.com|video\.google\.com|youtube\.com|youtube\.googleapis\.com|youtube\-nocookie\.com|youtubeeducation\.com)(:[0-9]+)?\/\/*embed(\/+|\?|#|$)/;g.PD=/^((http(s)?):)?\/\/((((lh[3-6](-tt|-d[a-g,z])?\.((ggpht)|(googleusercontent)|(google)))|(([1-4]\.bp\.blogspot)|(bp[0-3]\.blogger))|((((cp|ci|gp)[3-6])|(ap[1-2]))\.(ggpht|googleusercontent))|(gm[1-4]\.ggpht)|(((yt[3-4])|(sp[1-3]))\.(ggpht|googleusercontent)))\.com)|(dp[3-6]\.googleusercontent\.cn)|(dp4\.googleusercontent\.com)|(photos\-image\-(dev|qa)(-auth)?\.corp\.google\.com)|((dev|dev2|dev3|qa|qa2|qa3|qa-red|qa-blue|canary)[-.]lighthouse\.sandbox\.google\.com\/image)|(image\-dev\-lighthouse(-auth)?\.sandbox\.google\.com(\/image)?))\/|^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|borg\.google\.com|docs\.google\.com|drive\.google\.com|googleplex\.com|play\.google\.com|prod\.google\.com|sandbox\.google\.com|plus\.google\.com|video\.google\.com|youtube\.com|ytimg\.com)(:[0-9]+)?\/|s2\.googleusercontent\.com\/s2\/favicons\?|yt[3-4]\.ggpht\.com\/)/;
KV=/^https?.*#ocr$|^https?:\/\/(aksecure\.imrworldwide\.com\/|cdn\.imrworldwide\.com\/|secure\-..\.imrworldwide\.com\/)/;g.LV=/^https?:\/\/(googleads\.g\.doubleclick\.net\/(aclk|pagead\/conversion)|www\.google\.com\/(aclk|pagead\/conversion)|www\.googleadservices\.com\/(aclk|pagead\/(aclk|conversion)))/;Mz=/^((http(s)?):)?\/\/((((lh[3-6](-tt|-d[a-g,z])?\.((ggpht)|(googleusercontent)|(google)))|(([1-4]\.bp\.blogspot)|(bp[0-3]\.blogger))|((((cp|ci|gp)[3-6])|(ap[1-2]))\.(ggpht|googleusercontent))|(gm[1-4]\.ggpht)|(((yt[3-4])|(sp[1-3]))\.(ggpht|googleusercontent)))\.com)|(dp[3-6]\.googleusercontent\.cn)|(dp4\.googleusercontent\.com)|(photos\-image\-(dev|qa)(-auth)?\.corp\.google\.com)|((dev|dev2|dev3|qa|qa2|qa3|qa-red|qa-blue|canary)[-.]lighthouse\.sandbox\.google\.com\/image)|(image\-dev\-lighthouse(-auth)?\.sandbox\.google\.com(\/image)?))\/|^https?:\/\/([A-Za-z0-9-]{1,63}\.)*(ba\.l\.google\.com|c\.googlesyndication\.com|corp\.google\.com|borg\.google\.com|docs\.google\.com|drive\.google\.com|googleplex\.com|googlevideo\.com|play\.google\.com|prod\.google\.com|sandbox\.google\.com|plus\.google\.com|mail\.google\.com|ed\.video\.google\.com|vp\.video\.l\.google\.com|youtube\.com|youtubeeducation\.com|xfx7\.com|yt\.akamaized\.net)(:[0-9]+)?\//;
LC=/^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(imasdk\.googleapis\.com|2mdn\.net|googlesyndication\.com|corp\.google\.com|borg\.google\.com|googleads\.g\.doubleclick\.net|prod\.google\.com|static\.doubleclick\.net|static\.googleadsserving\.cn|studioapi\.doubleclick\.net|youtube\.com|youtube\.googleapis\.com|youtube\-nocookie\.com|youtubeeducation\.com|ytimg\.com)(:[0-9]+)?\/|lightbox-(demos|builder)\.appspot\.com\/|s[01](qa)?\.2mdn\.net\/ads\/richmedia\/studio\/mu\/templates\/tetris|tpc\.googlesyndication\.com\/safeframe\/|www\.gstatic\.com\/doubleclick\/studio\/innovation\/h5\/layouts\/tetris|www\.gstatic\.com\/doubleclick\/studio\/innovation\/ytplayer)/;
JC=/^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(imasdk\.googleapis\.com|corp\.google\.com|borg\.google\.com|docs\.google\.com|drive\.google\.com|googleads\.g\.doubleclick\.net|googleplex\.com|play\.google\.com|prod\.google\.com|sandbox\.google\.com|photos\.google\.com|picasaweb\.google\.com|get\.google\.com|lh2\.google\.com|plus\.google\.com|spaces\.google\.com|books\.googleusercontent\.com|blogger\.com|mail\.google\.com|play\-books\-internal\-sandbox\.googleusercontent\.com|talkgadget\.google\.com|survey\.g\.doubleclick\.net|youtube\.com|youtube\.googleapis\.com|youtube\-nocookie\.com|youtubeeducation\.com|vevo\.com|jamboard\.google\.com)(:[0-9]+)?\/|(www\.|encrypted\.)?google\.(cat|com(\.(a[fgiru]|b[dhnorz]|c[ouy]|do|e[cgt]|fj|g[hit]|hk|jm|kh|kw|l[bcy]|m[mtxy]|n[afgip]|om|p[aeghkry]|qa|s[abglv]|t[jnrw]|ua|uy|vc|vn))?|a[cdelmstz]|c[acdfghilmnvz]|b[aefgijsty]|ee|es|d[ejkmz]|g[aefglmpry]|f[imr]|i[emoqrst]|h[nrtu]|k[giz]|je|jo|m[degklnsuvw]|l[aiktuv]|n[eloru]|p[lnst]|s[cehikmnort]|r[osuw]|us|t[dgklmnot]|ws|vg|vu|co\.(ao|bw|ck|cr|i[dln]|jp|ke|kr|ls|ma|mz|nz|th|tz|u[gkz]|ve|vi|z[amw]))\/(search|webhp)\?|24e12c4a-a-95274a9c-s-sites\.googlegroups\.com\/a\/google\.com\/flash-api-test-harness\/apiharness\.swf|lightbox-(demos|builder)\.appspot\.com\/|s0\.2mdn\.net\/instream\/html5\/native\/|s[01](qa)?\.2mdn\.net\/ads\/richmedia\/studio\/mu\/templates\/tetris|tpc\.googlesyndication\.com\/safeframe\/|www\.gstatic\.com\/doubleclick\/studio\/innovation\/h5\/layouts\/tetris)/;(0,g.F)();var zr=g.t(window.XMLHttpRequest)?function(){return new window.XMLHttpRequest}:g.t(window.ActiveXObject)?function(){return new window.ActiveXObject("Microsoft.XMLHTTP")}:null;var Pr={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};var OB=PC||OC;var ks={},js=0;var qs={MH:"net.badstatus",GJ:"net.retryexhausted",TIMEOUT:"net.timeout",UNKNOWN:"net.unknown"};g.p(ms,Ga);var ps=ms;g.p(rs,Ga);rs.prototype.name="BiscottiError";g.p(ts,Ga);ts.prototype.name="BiscottiMissingError";us.prototype.then=function(a,b,c){try{if(g.t(this.o))return a?Cf(a.call(c,this.o)):Cf(this.o);if(g.t(this.g)){if(!b)return Df(this.g);var d=b.call(c,this.g);return!g.t(d)&&this.g.o?Df(this.g):Cf(d)}throw Error("Invalid Result state");}catch(e){return Df(e)}};
vf(us);var ws={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},vs=null;var Ds={};var MV,Is;MV=0;Is=g.Sd?"webkit":g.Xg?"moz":g.Dc?"ms":g.Yg?"o":"";g.NV=g.y("ytDomDomGetNextId")||function(){return++MV};
g.x("ytDomDomGetNextId",g.NV,void 0);var Ps={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};Qs.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Qs.prototype.pq=function(){return this.event?!1===this.event.returnValue:!1};
Qs.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Qs.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Rs=g.y("ytEventsEventsListeners")||{};g.x("ytEventsEventsListeners",Rs,void 0);var Ts=g.y("ytEventsEventsCounter")||{count:0};g.x("ytEventsEventsCounter",Ts,void 0);var OV=ff(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});g.p(g.dt,g.I);g.dt.prototype.N=function(a,b,c,d,e){c=yr((0,g.A)(c,d||this.Bb));c={target:a,name:b,Ei:c};var f;e&&OV()&&(f={passive:!0});a.addEventListener(b,c.Ei,f);this.W.push(c);return c};
g.dt.prototype.Qa=function(a){for(var b=0;b<this.W.length;b++)if(this.W[b]==a){this.W.splice(b,1);a.target.removeEventListener(a.name,a.Ei);break}};
g.dt.prototype.Y=function(){g.ft(this);g.I.prototype.Y.call(this)};g.C(g.gt,g.I);g.gt.prototype.subscribe=function(a,b,c){return this.ka()?0:this.ba.subscribe(a,b,c)};
g.gt.prototype.unsubscribe=function(a,b,c){return this.ka()?!1:this.ba.unsubscribe(a,b,c)};
g.gt.prototype.Qc=function(a){return this.ka()?!1:this.ba.Qc(a)};
g.gt.prototype.U=function(a,b){return this.ka()?!1:this.ba.U.apply(this.ba,arguments)};g.p(g.it,g.gt);g.h=g.it.prototype;g.h.cancel=function(){this.B&&(this.B=!1,this.U("dragend",0,0,null));this.o&&(this.o=!1,this.U("hoverend",0,0,null),g.ft(this.g),ht(this))};
g.h.Lq=function(a){g.ft(this.g);jt(this,kt("move"),this.Jq);jt(this,kt("out"),this.Kq);jt(this,"touchstart",this.tm);this.A&&jt(this,kt("down"),this.sm);var b=g.Ws(a);a=Ys(a);this.o=!0;this.U("hoverstart",a.x,a.y,b);this.U("hovermove",a.x,a.y,b)};
g.h.Jq=function(a){var b=g.Ws(a);a=Ys(a);if(this.C){var c=this.C;this.C=null;if(Zs(c)==b&&Ad(Ys(c),a))return}this.U("hovermove",a.x,a.y,b)};
g.h.Kq=function(a){var b=Ys(a),c=Zs(a);c&&g.je(this.D,c)?(this.C=a,this.U("hovermove",b.x,b.y,c)):(g.ft(this.g),ht(this),this.o=!1,this.U("hoverend",b.x,b.y,c))};
g.h.RB=function(a){this.Lq(a);this.sm(a)};
g.h.sm=function(a){if(!g.pa(a.button)||0==a.button){g.ft(this.g);this.g.N(window.document,kt("move"),this.QB);this.g.N(window.document,kt("up"),this.Iy);var b=g.Ws(a);if(g.Sd)jt(this,"dragstart",this.Hw);else if(g.ct(a),(g.kD||g.Xg)&&b)a:{for(var c=b;c;){if(g.ne(c)||"-1"===c.getAttribute("tabindex")){c.focus();break a}c=c.parentElement}window.document.activeElement.blur()}this.B=!0;a=Ys(a);this.U("dragstart",a.x,a.y,b);this.U("dragmove",a.x,a.y,b)}};
g.h.Hw=function(a){g.ct(a)};
g.h.QB=function(a){var b=g.Ws(a);b==window.document&&(b=null);a=Ys(a);this.U("hovermove",a.x,a.y,b);this.U("dragmove",a.x,a.y,b)};
g.h.Iy=function(a){g.ft(this.g);this.B=!1;var b=$s(a),c=g.Ws(a);a=Ys(a);b&&g.je(this.D,b)?(jt(this,kt("move"),this.Jq),jt(this,kt("out"),this.Kq),jt(this,kt("down"),this.sm),jt(this,"touchstart",this.tm),this.U("dragend",a.x,a.y,c)):(ht(this),this.o=!1,this.U("dragend",a.x,a.y,c),this.U("hoverend",a.x,a.y,c))};
g.h.tm=function(a){var b=a.changedTouches[0];b&&(g.ft(this.g),jt(this,"touchmove",this.Jy),jt(this,"touchend",this.Mq),jt(this,"touchcancel",this.Mq),this.G=b.identifier,a=g.Ws(a),this.o||(this.o=!0,this.U("hoverstart",b.pageX,b.pageY,a)),this.U("hovermove",b.pageX,b.pageY,a),this.A&&(this.B=!0,this.U("dragstart",b.pageX,b.pageY,a),this.U("dragmove",b.pageX,b.pageY,a)))};
g.h.Jy=function(a){var b=lt(this,a);b&&(this.A&&g.ct(a),a=g.Ws(a),this.U("hovermove",b.pageX,b.pageY,a),this.A&&this.U("dragmove",b.pageX,b.pageY,a))};
g.h.Mq=function(a){var b=lt(this,a);if(b){g.ft(this.g);ht(this);this.o=!1;var c=g.Ws(a);this.A&&(this.H||g.ct(a),this.B=!1,this.U("dragend",b.pageX,b.pageY,c));this.U("hoverend",b.pageX,b.pageY,c)}};
g.h.Y=function(){this.A&&(g.Sd&&this.D.removeAttribute("draggable"),this.D.style.touchAction="");g.ft(this.g);g.gt.prototype.Y.call(this)};var mt={enablejsapi:1},nt={},ot={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};pt.prototype.clone=function(){var a=new pt,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==ta(c)?a[b]=g.ec(c):a[b]=c}return a};var fu=0,gu={};var ou={JH:"atp",QJ:"ska",CJ:"que",dJ:"mus",PJ:"sus"};var PV=g.y("ytPubsubPubsubInstance")||new g.nq;g.nq.prototype.subscribe=g.nq.prototype.subscribe;g.nq.prototype.unsubscribeByKey=g.nq.prototype.Qc;g.nq.prototype.publish=g.nq.prototype.U;g.nq.prototype.clear=g.nq.prototype.clear;g.x("ytPubsubPubsubInstance",PV,void 0);g.vt=g.y("ytPubsubPubsubSubscribedKeys")||{};g.x("ytPubsubPubsubSubscribedKeys",g.vt,void 0);g.xt=g.y("ytPubsubPubsubTopicToKeys")||{};g.x("ytPubsubPubsubTopicToKeys",g.xt,void 0);var wt=g.y("ytPubsubPubsubIsSynchronous")||{};
g.x("ytPubsubPubsubIsSynchronous",wt,void 0);var Mt={log_event:"events",log_interaction:"interactions"},QV=Object.create(null);QV.log_event="GENERIC_EVENT_LOGGING";QV.log_interaction="INTERACTION_LOGGING";var Lt={},Dt={},Jt=0,Kt=g.y("ytLoggingTransportLogPayloadsQueue_")||{};g.x("ytLoggingTransportLogPayloadsQueue_",Kt,void 0);var Et=g.y("ytLoggingTransportTokensToCttTargetIds_")||{};g.x("ytLoggingTransportTokensToCttTargetIds_",Et,void 0);var Nt=g.y("ytLoggingTransportDispatchedStats_")||{};g.x("ytLoggingTransportDispatchedStats_",Nt,void 0);
var RV=g.y("ytLoggingTransportCapturedTime_")||{};g.x("ytytLoggingTransportCapturedTime_",RV,void 0);var SV=Pt;g.Wt.prototype.o=function(){return{context:Tt(this.g)}};
g.Wt.prototype.A=function(a,b,c){!g.P("VISITOR_DATA")&&.01>Math.random()&&g.xr(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var d={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":g.P("VISITOR_DATA","")},qb:b,Ws:"JSON",oc:c.oc,nb:function(a,b){c.nb&&c.nb(b)},
onError:function(a,b){if(c.onError)c.onError(b)},
timeout:c.timeout,withCredentials:!0},e=g.Em([]);e&&(d.headers.Authorization=e,d.headers["X-Goog-AuthUser"]=g.P("SESSION_INDEX",0));var f=this.g.xhrApiaryHost;f&&!f.startsWith("http")&&(f="//"+f);g.ls("youtubei_for_web")&&(f="");var k=this.g.lj;k&&(f=k);e&&!f&&(d.headers["x-origin"]=window.location.origin);g.Yr(""+f+Vt(this.g.innertubeApiVersion,a,b)+"?alt=json&key="+this.g.innertubeApiKey,d)};var cu=g.y("ytLoggingLatencyUsageStats_")||{};g.x("ytLoggingLatencyUsageStats_",cu,void 0);var du=0;var TV;TV=new zq;g.hu=TV.isAvailable()?new g.vq(TV):null;var iu,UV=new Aq;iu=UV.isAvailable()?new g.vq(UV):null;pu.prototype.Li=function(){var a=new pu({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,theme:this.theme,capabilities:this.capabilities.ub().join(","),experiments:this.experiments.ub().join(",")});a.A=this.A;a.o=this.o;a.g=this.g;return a};g.C(ru,g.I);ru.prototype.C=function(){500<this.g&&24E4>2*this.g&&(this.g*=2);this.B();this.A&&this.start()};
ru.prototype.start=function(){this.o.Wc(this.g);this.A=(0,g.F)()+this.g};
ru.prototype.stop=function(){this.o.stop();this.A=0};
ru.prototype.isActive=function(){return this.o.isActive()};g.C(tu,lq);g.h=tu.prototype;g.h.subscribe=function(a,b,c){return this.A.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.A.unsubscribe(a,b,c)};
g.h.Qc=function(a){return this.A.Qc(a)};
g.h.U=function(a,b){return this.A.U.apply(this.A,arguments)};
g.h.dispose=function(){this.L||(this.L=!0,g.ue(this.A),vu(this),g.ue(this.o),this.o=null)};
g.h.ka=function(){return this.L};
g.h.connect=function(a,b,c){if(!this.g||2!=this.g.g){this.K="";this.o.stop();this.C=a||null;this.B=b||0;a=this.O+"/test";b=this.O+"/bind";var d=new Qp("1",c?c.firstTestResults:null,c?c.secondTestResults:null,this.T),e=this.g;e&&(e.hc=null);d.hc=this;this.g=d;e?this.g.connect(a,b,this.D,e.A,e.xg):c?this.g.connect(a,b,this.D,c.sessionId,c.arrayId):this.g.connect(a,b,this.D)}};
g.h.sendMessage=function(a,b){var c={_sc:a};b&&g.ic(c,b);this.o.isActive()||2==(this.g?this.g.g:0)?this.G.push(c):wu(this)&&bq(this.g,c)};
g.h.Uo=function(){qu(this.o);this.C=null;this.B=0;if(this.G.length){var a=this.G;this.G=[];for(var b=0,c=a.length;b<c;++b)bq(this.g,a[b])}this.U("handlerOpened")};
g.h.So=function(a,b){var c=2==b&&401==this.g.Fd;if(4!=b&&!c){if(6==b||410==this.g.Fd)c=this.o,c.o.stop(),c.g=500;this.o.start()}this.U("handlerError",b)};
g.h.Uk=function(a,b,c){if(!this.o.isActive())this.U("handlerClosed");else if(c)for(a=0,b=c.length;a<b;++a){var d=c[a].map;d&&this.G.push(d)}};
g.h.Hp=function(){var a={v:2};this.K&&(a.gsessionid=this.K);0!=this.B&&(a.ui=""+this.B);0!=this.H&&(a.ui=""+this.H);this.C&&g.ic(a,this.C);return a};
g.h.To=function(a,b){"S"==b[0]?this.K=b[1]:"gracefulReconnect"==b[0]?(qu(this.o),this.o.start(),Yp(this.g)):this.U("handlerMessage",new nu(b[0],b[1]))};
g.h.SG=function(){this.o.isActive();var a=this.g,b=0;a.Ib&&b++;a.Jc&&b++;0!=b?this.o.start():this.connect(this.C,this.B)};var Ju=(0,g.F)(),Au=null,Hu=Array(50),Gu=-1,Iu=!1;g.C(g.Uu,g.gt);g.Uu.prototype.Vc=function(){return this.g};
g.Uu.prototype.contains=function(a){return!!g.Su(this.g,a)};
g.Uu.prototype.get=function(a){return a?g.Tu(this.g,a):null};
g.Uu.prototype.info=function(a){g.Fu(this.G,a)};g.C(Yu,g.gt);var VV=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.h=Yu.prototype;g.h.start=function(){!this.g&&(0,window.isNaN)(this.o)&&this.wu()};
g.h.stop=function(){this.g&&(this.g.abort(),this.g=null);(0,window.isNaN)(this.o)||(g.Dr(this.o),this.o=window.NaN)};
g.h.Y=function(){this.stop();Yu.ea.Y.call(this)};
g.h.wu=function(){this.o=window.NaN;this.g=g.Ur(this.G.Hf("/pairing/get_screen"),{method:"POST",qb:{pairing_code:this.D},timeout:5E3,nb:(0,g.A)(this.XG,this),onError:(0,g.A)(this.WG,this),oc:(0,g.A)(this.YG,this)})};
g.h.XG=function(a,b){this.g=null;var c=b.screen||{};c.dialId=this.B;c.name=this.C;this.U("pairingComplete",new Ku(c))};
g.h.WG=function(a){this.g=null;a.status&&404==a.status?this.A>=VV.length?this.U("pairingFailed",Error("DIAL polling timed out")):(a=VV[this.A],this.o=g.Fr((0,g.A)(this.wu,this),a),this.A++):this.U("pairingFailed",Error("Server error "+a.status))};
g.h.YG=function(){this.g=null;this.U("pairingFailed",Error("Server not responding"))};var nv,fv="";g.C(qv,g.Uu);g.h=qv.prototype;g.h.start=function(){pv(this)&&this.U("screenChange");!g.ku("yt-remote-lounge-token-expiration")&&rv(this);g.Dr(this.o);this.o=g.Fr((0,g.A)(this.start,this),1E4)};
g.h.pk=function(a,b){pv(this);Vu(this,a);tv(this,!1);this.U("screenChange");b(a);a.token||rv(this)};
g.h.remove=function(a,b){var c=pv(this);Xu(this,a)&&(tv(this,!1),c=!0);b(a);c&&this.U("screenChange")};
g.h.ek=function(a,b,c,d){var e=pv(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,tv(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.U("screenChange")};
g.h.Y=function(){g.Dr(this.o);qv.ea.Y.call(this)};
g.h.kx=function(a){pv(this);var b=this.g.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}tv(this,!b);b&&g.Fu(this.G,"Missed "+b+" lounge tokens.")};
g.h.jx=function(a){g.Fu(this.G,"Requesting lounge tokens failed: "+a)};g.C(vv,g.gt);g.h=vv.prototype;g.h.start=function(){var a=(0,window.parseInt)(g.ku("yt-remote-fast-check-period")||"0",10);(this.B=(0,g.F)()-144E5<a?0:a)?zv(this):(this.B=(0,g.F)()+3E5,g.ju("yt-remote-fast-check-period",this.B),this.kn())};
g.h.isEmpty=function(){return g.cc(this.g)};
g.h.update=function(){uv("Updating availability on schedule.");var a=this.D(),b=g.Rb(this.g,function(b,d){return b&&!!g.Tu(a,d)},this);
yv(this,b)};
g.h.Y=function(){g.Dr(this.A);this.A=window.NaN;this.o&&(this.o.abort(),this.o=null);vv.ea.Y.call(this)};
g.h.kn=function(){g.Dr(this.A);this.A=window.NaN;this.o&&this.o.abort();var a=Av(this);if(g.Tb(a)){var b=this.C.Hf("/pairing/get_screen_availability");this.o=this.C.Pn(b,{lounge_token:g.Xb(a).join(",")},(0,g.A)(this.KE,this,a),(0,g.A)(this.JE,this))}else yv(this,{}),zv(this)};
g.h.KE=function(a,b){this.o=null;var c=g.Xb(Av(this));if(g.Ib(c,g.Xb(a))){for(var c=b.screens||[],d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;yv(this,d);zv(this)}else this.Db("Changing Screen set during request."),this.kn()};
g.h.JE=function(a){this.Db("Screen availability failed: "+a);this.o=null;zv(this)};
g.h.Db=function(a){g.Fu("OnlineScreenService",a)};g.C(g.Cv,g.Uu);g.h=g.Cv.prototype;g.h.start=function(){this.A.start();this.o.start();this.g.length&&(this.U("screenChange"),this.o.isEmpty()||this.U("onlineScreenChange"))};
g.h.pk=function(a,b,c){this.A.pk(a,b,c)};
g.h.remove=function(a,b,c){this.A.remove(a,b,c);this.o.update()};
g.h.ek=function(a,b,c,d){this.A.contains(a)?this.A.ek(a,b,c,d):(a="Updating name of unknown screen: "+a.name,g.Fu(this.G,a),d(Error(a)))};
g.h.Vc=function(a){return a?this.g:g.vb(this.g,(0,g.fe)(this.B,function(a){return!this.contains(a)},this))};
g.h.xu=function(){return(0,g.fe)(this.Vc(!0),function(a){return!!this.o.g[a.id]},this)};
g.h.yu=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new Yu(this.D,a,b,c);f.subscribe("pairingComplete",(0,g.A)(function(a){g.ue(f);d(Dv(this,a))},this));
f.subscribe("pairingFailed",function(a){g.ue(f);e(a)});
f.start();return(0,g.A)(f.stop,f)};
g.h.aH=function(a,b,c,d){g.Ur(this.D.Hf("/pairing/get_screen"),{method:"POST",qb:{pairing_code:a},timeout:5E3,nb:(0,g.A)(function(a,d){var e=new Ku(d.screen||{});if(!e.name||Gv(this,e.name)){a:{var f=e.name;for(var m=2,n=b(f,m);Gv(this,n);){m++;if(20<m)break a;n=b(f,m)}f=n}e.name=f}c(Dv(this,e))},this),
onError:(0,g.A)(function(a){d(Error("pairing request failed: "+a.status))},this),
oc:(0,g.A)(function(){d(Error("pairing request timed out."))},this)})};
g.h.Y=function(){g.ue(this.A);g.ue(this.o);g.Cv.ea.Y.call(this)};
g.h.xx=function(){Hv(this);this.U("screenChange");this.o.update()};
g.Cv.prototype.dispose=g.Cv.prototype.dispose;g.C(Jv,g.gt);g.h=Jv.prototype;g.h.Ij=function(a){this.A=a;this.U("sessionScreen",this.A)};
g.h.Zc=function(a){this.ka()||(a&&Kv(this,""+a),this.A=null,this.U("sessionScreen",null))};
g.h.info=function(a){g.Fu(this.T,a)};
g.h.Au=function(){return null};
g.h.qn=function(a){var b=this.o;a?(b.displayStatus=new window.chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;window.chrome.cast.setReceiverDisplayStatus(b,(0,g.A)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.A)(function(){Kv(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.Y=function(){this.qn("");Jv.ea.Y.call(this)};g.C(Mv,Jv);g.h=Mv.prototype;g.h.pn=function(a){if(this.g){if(this.g==a)return;Kv(this,"Overriding cast sesison with new session object");this.g.removeUpdateListener(this.D);this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.C)}this.g=a;this.g.addUpdateListener(this.D);this.g.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.C);Nv(this)};
g.h.yg=function(a){this.info("launchWithParams no-op for Cast: "+g.eg(a))};
g.h.stop=function(){this.g?this.g.stop((0,g.A)(function(){this.Zc()},this),(0,g.A)(function(){this.Zc(Error("Failed to stop receiver app."))},this)):this.Zc(Error("Stopping cast device witout session."))};
g.h.qn=g.qa;g.h.Y=function(){this.info("disposeInternal");g.Dr(this.B);this.B=0;this.g&&(this.g.removeUpdateListener(this.D),this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.C));this.g=null;Mv.ea.Y.call(this)};
g.h.AF=function(a,b){if(!this.ka())if(b){a:{var c;if(g.w.JSON)try{var d=c=g.w.JSON.parse(b);break a}catch(e){}d=c=g.bg(b)}if(d)switch(c=""+d.type,d=d.data||{},this.info("onYoutubeMessage_: "+c+" "+g.eg(d)),c){case "mdxSessionStatus":Lv(this,d.screenId);break;default:Kv(this,"Unknown youtube message: "+c)}else Kv(this,"Unable to parse message.")}else Kv(this,"No data in message.")};
g.h.Mp=function(a,b,c,d){Fv(this.K,this.o.label,a,this.o.friendlyName,(0,g.A)(function(e){e?b(e):0<=d?(Kv(this,"Screen "+a+" appears to be offline. "+d+" retries left."),g.Fr((0,g.A)(this.Mp,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.Au=function(){return this.g};
g.h.bH=function(a){this.ka()||a||(Kv(this,"Cast session died."),this.Zc())};g.C(Ov,Jv);g.h=Ov.prototype;g.h.pn=function(a){this.B=a;this.B.addUpdateListener(this.O)};
g.h.yg=function(a){this.C=a;this.G()};
g.h.stop=function(){this.g();this.g=g.qa;g.Dr(this.D);this.B?this.B.stop((0,g.A)(this.Zc,this,null),(0,g.A)(this.Zc,this,"Failed to stop DIAL device.")):this.Zc()};
g.h.Y=function(){this.g();this.g=g.qa;g.Dr(this.D);this.B&&this.B.removeUpdateListener(this.O);this.B=null;Ov.ea.Y.call(this)};
g.h.eH=function(a){this.ka()||a||(Kv(this,"DIAL session died."),this.g(),this.g=g.qa,this.Zc())};
g.h.Rl=function(a){this.L=g.Ru();if(this.C){var b=new window.chrome.cast.DialLaunchResponse(!0,Qv(this));a(b);Pv(this)}else this.G=(0,g.A)(function(){g.Dr(this.D);this.G=g.qa;this.D=window.NaN;var b=new window.chrome.cast.DialLaunchResponse(!0,Qv(this));a(b);Pv(this)},this),this.D=g.Fr((0,g.A)(function(){this.G()},this),100)};
g.h.gy=function(a,b){Fv(this.K,this.H.receiver.label,a,this.o.friendlyName,(0,g.A)(function(a){a&&a.token?(this.Ij(a),b(new window.chrome.cast.DialLaunchResponse(!1))):this.Rl(b)},this),(0,g.A)(function(a){Kv(this,"Failed to get DIAL screen: "+a);
this.Rl(b)},this))};g.C(Rv,Jv);Rv.prototype.stop=function(){this.Zc()};
Rv.prototype.pn=g.qa;Rv.prototype.yg=function(){g.Dr(this.g);this.g=window.NaN;var a=g.Tu(this.K.Vc(),this.o.label);a?this.Ij(a):this.Zc(Error("No such screen"))};
Rv.prototype.Y=function(){g.Dr(this.g);this.g=window.NaN;Rv.ea.Y.call(this)};g.C(g.Sv,g.gt);g.h=g.Sv.prototype;
g.h.init=function(a,b){window.chrome.cast.timeout.requestSession=3E4;var c=new window.chrome.cast.SessionRequest(this.D);c.dialRequest=new window.chrome.cast.DialRequest("YouTube");var d=window.chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?window.chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:window.chrome.cast.DefaultActionPolicy.CREATE_SESSION,c=new window.chrome.cast.ApiConfig(c,(0,g.A)(this.Is,this),(0,g.A)(this.wE,this),d,e);c.customDialLaunchCallback=(0,g.A)(this.WC,this);window.chrome.cast.initialize(c,
(0,g.A)(function(){this.ka()||(window.chrome.cast.addReceiverActionListener(this.B),Cu(),this.o.subscribe("onlineScreenChange",(0,g.A)(this.zu,this)),this.A=Xv(this),window.chrome.cast.setCustomReceivers(this.A,g.qa,(0,g.A)(function(a){this.Db("Failed to set initial custom receivers: "+g.eg(a))},this)),this.U("yt-remote-cast2-availability-change",Vv(this)),b(!0))},this),(0,g.A)(function(a){this.Db("Failed to initialize API: "+g.eg(a));
b(!1)},this))};
g.h.kG=function(a,b){Uv("Setting connected screen ID: "+a+" -> "+b);if(this.g){var c=this.g.A;if(!a||c&&c.id!=a)Uv("Unsetting old screen status: "+this.g.o.friendlyName),Wv(this,null)}if(a&&b){if(!this.g){c=g.Tu(this.o.Vc(),a);if(!c){Uv("setConnectedScreenStatus: Unknown screen.");return}var d=Tv(this,c);d||(Uv("setConnectedScreenStatus: Connected receiver not custom..."),d=new window.chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=window.chrome.cast.ReceiverType.CUSTOM,this.A.push(d),
window.chrome.cast.setCustomReceivers(this.A,g.qa,(0,g.A)(function(a){this.Db("Failed to set initial custom receivers: "+g.eg(a))},this)));
Uv("setConnectedScreenStatus: new active receiver: "+d.friendlyName);Wv(this,new Rv(this.o,d),!0)}this.g.qn(b)}else Uv("setConnectedScreenStatus: no screen.")};
g.h.lG=function(a){this.ka()?this.Db("Setting connection data on disposed cast v2"):this.g?this.g.yg(a):this.Db("Setting connection data without a session")};
g.h.dH=function(){this.ka()?this.Db("Stopping session on disposed cast v2"):this.g?(this.g.stop(),Wv(this,null)):Uv("Stopping non-existing session")};
g.h.requestSession=function(){window.chrome.cast.requestSession((0,g.A)(this.Is,this),(0,g.A)(this.NE,this))};
g.h.Y=function(){this.o.unsubscribe("onlineScreenChange",(0,g.A)(this.zu,this));window.chrome&&window.chrome.cast&&window.chrome.cast.removeReceiverActionListener(this.B);var a=yu,b=g.y("yt.mdx.remote.debug.handlers_");g.tb(b||[],a);g.ue(this.g);g.Sv.ea.Y.call(this)};
g.h.Db=function(a){g.Fu("Controller",a)};
g.h.Js=function(a,b){this.g==a&&(b||Wv(this,null),this.U("yt-remote-cast2-session-change",b))};
g.h.sE=function(a,b){if(!this.ka())if(a)switch(a.friendlyName=window.chrome.cast.unescape(a.friendlyName),Uv("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case window.chrome.cast.ReceiverAction.CAST:if(this.g)if(this.g.o.label!=a.label)Uv("onReceiverAction_: Stopping active receiver: "+this.g.o.friendlyName),this.g.stop();else{Uv("onReceiverAction_: Casting to active receiver.");this.g.A&&this.U("yt-remote-cast2-session-change",this.g.A);break}switch(a.receiverType){case window.chrome.cast.ReceiverType.CUSTOM:Wv(this,
new Rv(this.o,a));break;case window.chrome.cast.ReceiverType.DIAL:Wv(this,new Ov(this.o,a));break;case window.chrome.cast.ReceiverType.CAST:Wv(this,new Mv(this.o,a));break;default:this.Db("Unknown receiver type: "+a.receiverType)}break;case window.chrome.cast.ReceiverAction.STOP:this.g&&this.g.o.label==a.label?this.g.stop():this.Db("Stopping receiver w/o session: "+a.friendlyName)}else this.Db("onReceiverAction_ called without receiver.")};
g.h.WC=function(a){if(this.ka())return window.Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=window.chrome.cast.ReceiverType.DIAL&&(this.Db("Not DIAL receiver: "+b.friendlyName),b.receiverType=window.chrome.cast.ReceiverType.DIAL);var c=this.g?this.g.o:null;if(!c||c.label!=b.label)return this.Db("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),window.Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=window.chrome.cast.ReceiverType.DIAL){if(this.g.A)return Uv("Reselecting dial screen."),
this.U("yt-remote-cast2-session-change",this.g.A),window.Promise.resolve(new window.chrome.cast.DialLaunchResponse(!1));this.Db('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);Wv(this,new Ov(this.o,b))}b=this.g;b.H=a;return b.H.appState==window.chrome.cast.DialAppState.RUNNING?new window.Promise((0,g.A)(b.gy,b,(b.H.extraData||{}).screenId||null)):new window.Promise((0,g.A)(b.Rl,b))};
g.h.Is=function(a){if(!this.ka()){Uv("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=window.chrome.cast.ReceiverType.CUSTOM){if(!this.g)if(b.receiverType==window.chrome.cast.ReceiverType.CAST)Uv("Got resumed cast session before resumed mdx connection."),b.friendlyName=window.chrome.cast.unescape(b.friendlyName),Wv(this,new Mv(this.o,b),!0);else{this.Db("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.g.o,d=g.Tu(this.o.Vc(),c.label);
d&&g.Lu(d,b.label)&&c.receiverType!=window.chrome.cast.ReceiverType.CAST&&b.receiverType==window.chrome.cast.ReceiverType.CAST&&(Uv("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.ue(this.g),this.g=new Mv(this.o,b),this.g.subscribe("sessionScreen",(0,g.A)(this.Js,this,this.g)),this.g.yg(null));this.g.pn(a)}}};
g.h.cH=function(){return this.g?this.g.Au():null};
g.h.NE=function(a){this.ka()||(this.Db("Failed to estabilish a session: "+g.eg(a)),a.code!=window.chrome.cast.ErrorCode.CANCEL&&Wv(this,null))};
g.h.wE=function(a){Uv("Receiver availability updated: "+a);if(!this.ka()){var b=Vv(this);this.C=a==window.chrome.cast.ReceiverAvailability.AVAILABLE;Vv(this)!=b&&this.U("yt-remote-cast2-availability-change",Vv(this))}};
g.h.zu=function(){this.ka()||(this.A=Xv(this),Uv("Updating custom receivers: "+g.eg(this.A)),window.chrome.cast.setCustomReceivers(this.A,g.qa,(0,g.A)(function(){this.Db("Failed to set custom receivers.")},this)),this.U("yt-remote-cast2-availability-change",Vv(this)))};
g.Sv.prototype.setLaunchParams=g.Sv.prototype.lG;g.Sv.prototype.setConnectedScreenStatus=g.Sv.prototype.kG;g.Sv.prototype.stopSession=g.Sv.prototype.dH;g.Sv.prototype.getCastSession=g.Sv.prototype.cH;g.Sv.prototype.requestSession=g.Sv.prototype.requestSession;g.Sv.prototype.init=g.Sv.prototype.init;g.Sv.prototype.dispose=g.Sv.prototype.dispose;g.Yv.prototype.reset=function(a){this.listId="";this.index=-1;this.videoId="";g.Zv(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.g=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.o=a.trackData,this.Yd=a.hasPrevious,this.hasNext=a.hasNext,this.H=a.playerTime,this.A=a.playerTimeAt,this.D=a.seekableStart,this.B=a.seekableEnd,this.K=a.duration,this.L=a.loadedTime,this.C=a.liveIngestionTime,this.G=
!(0,window.isNaN)(this.C))};
g.Yv.prototype.Ab=function(){return 1==this.g};
g.Yv.prototype.getDuration=function(){return this.G?this.K+((0,g.F)()-this.A)/1E3:this.K};
g.Yv.prototype.clone=function(){return new g.Yv(g.cw(this))};dw.prototype.o=function(){return this.name};
dw.prototype.getId=function(){return this.id};
dw.prototype.g=function(){return this.isDefault};
dw.prototype.toString=function(){return this.name};
dw.prototype.getName=dw.prototype.o;dw.prototype.getId=dw.prototype.getId;dw.prototype.getIsDefault=dw.prototype.g;g.ew.prototype.toString=function(){return this.languageCode+"_"+this.languageName+"_"+this.g+"_"+this.id+"_"+this.isDefault};g.fw.prototype.toString=function(){return this.o+": "+g.gw(this)+" - "+this.G};
g.fw.prototype.L=ba(2);g.fw.prototype.sd=function(){return!(!this.o||this.g&&!this.g.languageCode)};hw.prototype.o=function(){return this.Ub};
hw.prototype.toString=function(){return this.Ub.name};
hw.prototype.getLanguageInfo=hw.prototype.o;g.C(g.jw,g.gt);g.h=g.jw.prototype;g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.index,f=b.currentTime||0;5>=f&&(f=0);var k={videoId:d,currentTime:f};c&&(k.listId=c);g.t(e)&&(k.currentIndex=e);c&&(this.Oa.listId=c);this.Oa.videoId=d;this.Oa.index=e||0;this.Oa.state=3;g.$v(this.Oa,f);this.B="UNSUPPORTED";kw("Connecting with setPlaylist and params: "+g.eg(k));this.g.connect({method:"setPlaylist",params:g.eg(k)},a,gv())}else kw("Connecting without params"),this.g.connect({},a,gv());mw(this)};
g.h.dispose=function(){this.ka()||(this.U("beforeDispose"),lw(this,3));g.jw.ea.dispose.call(this)};
g.h.Y=function(){nw(this);pw(this);ow(this);g.Dr(this.K);this.K=window.NaN;g.Dr(this.L);this.L=window.NaN;this.A=null;g.Vs(this.X);this.X.length=0;this.g.dispose();g.jw.ea.Y.call(this);this.B=this.G=this.o=this.Oa=this.g=null};
g.h.bx=function(){this.D(2)};
g.h.BC=function(){kw("Channel opened");this.W&&(this.W=!1,ow(this),this.T=g.Fr((0,g.A)(function(){kw("Timing out waiting for a screen.");this.D(1)},this),15E3));
lv(uu(this.g),this.da)};
g.h.yC=function(){kw("Channel closed");(0,window.isNaN)(this.C)?g.mv(!0):g.mv();this.dispose()};
g.h.zC=function(a){g.mv();(0,window.isNaN)(this.H())?(kw("Channel error: "+a+" without reconnection"),this.dispose()):(this.W=!0,kw("Channel error: "+a+" with reconnection in "+this.H()+" ms"),lw(this,2))};
g.h.AC=function(a){a.params?kw("Received: action="+a.action+", params="+g.eg(a.params)):kw("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=g.bg(a.params.devices);this.o=(0,g.H)(a,function(a){return new pu(a)});
a=!!g.jb(this.o,function(a){return"LOUNGE_SCREEN"==a.type});
uw(this,a);break;case "loungeScreenDisconnected":ub(this.o,function(a){return"LOUNGE_SCREEN"==a.type});
uw(this,!1);break;case "remoteConnected":var b=new pu(g.bg(a.params.device));g.jb(this.o,function(a){return b?a.id==b.id:!1})||g.rb(this.o,b);
break;case "remoteDisconnected":b=new pu(g.bg(a.params.device));ub(this.o,function(a){return b?a.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":ww(this,a);break;case "nowPlaying":yw(this,a);break;case "onStateChange":xw(this,a);break;case "onAdStateChange":zw(this,a);break;case "onVolumeChanged":Aw(this,a);break;case "onSubtitlesTrackChanged":vw(this,a);break;case "nowAutoplaying":Bw(this,a);break;case "autoplayDismissed":this.U("autoplayDismissed");break;case "autoplayUpNext":this.G=a.params.videoId||null;this.U("autoplayUpNext",this.G);break;case "onAutoplayModeChanged":this.B=
a.params.autoplayMode;this.U("autoplayModeChange",this.B);"DISABLED"==this.B&&this.U("autoplayDismissed");break;case "onHasPreviousNextChanged":Cw(this,a);break;default:kw("Unrecognized action: "+a.action)}};
g.h.YF=function(){if(this.A){var a=this.A;this.A=null;this.Oa.videoId!=a&&qw(this,"getNowPlaying")}};
g.jw.prototype.subscribe=g.jw.prototype.subscribe;g.jw.prototype.unsubscribeByKey=g.jw.prototype.Qc;g.jw.prototype.oa=function(){var a=3;this.ka()||(a=0,(0,window.isNaN)(this.H())?wu(this.g)&&(0,window.isNaN)(this.C)&&(a=1):a=2);return a};
g.jw.prototype.getProxyState=g.jw.prototype.oa;g.jw.prototype.D=function(a){kw("Disconnecting with "+a);nw(this);this.U("beforeDisconnect",a);1==a&&g.mv();vu(this.g,a);this.dispose()};
g.jw.prototype.disconnect=g.jw.prototype.D;g.jw.prototype.la=function(){var a=this.Oa;this.A&&(a=this.Oa.clone(),g.bw(a,this.A,a.index));return g.cw(a)};
g.jw.prototype.getPlayerContextData=g.jw.prototype.la;
g.jw.prototype.za=function(a){var b=new g.Yv(a);b.videoId&&b.videoId!=this.Oa.videoId&&(this.A=b.videoId,g.Dr(this.K),this.K=g.Fr((0,g.A)(this.YF,this),5E3));var c=[];this.Oa.listId==b.listId&&this.Oa.videoId==b.videoId&&this.Oa.index==b.index||c.push("remoteQueueChange");this.Oa.g==b.g&&this.Oa.volume==b.volume&&this.Oa.muted==b.muted&&g.aw(this.Oa)==g.aw(b)&&g.eg(this.Oa.o)==g.eg(b.o)||c.push("remotePlayerChange");this.Oa.reset(a);(0,g.G)(c,function(a){this.U(a)},this)};
g.jw.prototype.setPlayerContextData=g.jw.prototype.za;g.jw.prototype.aa=function(){var a=this.g.D.id,b=g.jb(this.o,function(b){return"REMOTE_CONTROL"==b.type&&b.id!=a});
return b?b.id:""};
g.jw.prototype.getOtherConnectedRemoteId=g.jw.prototype.aa;g.jw.prototype.H=function(){var a=this.g;return a.o.isActive()?a.o.A-(0,g.F)():window.NaN};
g.jw.prototype.getReconnectTimeout=g.jw.prototype.H;g.jw.prototype.fa=function(){return this.B||"UNSUPPORTED"};
g.jw.prototype.getAutoplayMode=g.jw.prototype.fa;g.jw.prototype.ha=function(){return this.G||""};
g.jw.prototype.getAutoplayVideoId=g.jw.prototype.ha;g.jw.prototype.Fa=function(){if(!(0,window.isNaN)(this.H())){var a=this.g.o;g.Go(a.o);a.start()}};
g.jw.prototype.reconnect=g.jw.prototype.Fa;g.jw.prototype.wa=function(a,b){qw(this,a,b);tw(this)};
g.jw.prototype.sendMessage=g.jw.prototype.wa;g.Cv.prototype.$_st=g.Cv.prototype.start;g.Cv.prototype.$_gspc=g.Cv.prototype.aH;g.Cv.prototype.$_gsppc=g.Cv.prototype.yu;g.Cv.prototype.$_c=g.Cv.prototype.contains;g.Cv.prototype.$_g=g.Cv.prototype.get;g.Cv.prototype.$_a=g.Cv.prototype.pk;g.Cv.prototype.$_un=g.Cv.prototype.ek;g.Cv.prototype.$_r=g.Cv.prototype.remove;g.Cv.prototype.$_gs=g.Cv.prototype.Vc;g.Cv.prototype.$_gos=g.Cv.prototype.xu;g.Cv.prototype.$_s=g.Cv.prototype.subscribe;g.Cv.prototype.$_ubk=g.Cv.prototype.Qc;var LO=16/9,WV=[.25,.5,.75,1,1.25,1.5,2];var Jw={0:"f",160:"h",133:"h",134:"h",135:"h",136:"h",137:"h",264:"h",266:"h",138:"h",298:"h",299:"h",304:"h",140:"a",327:"sa",258:"m",161:"H",142:"H",143:"H",144:"H",222:"H",223:"H",145:"H",224:"H",225:"H",146:"H",226:"H",147:"H",149:"A",261:"M",278:"9",242:"9",243:"9",244:"9",247:"9",248:"9",271:"9",313:"9",272:"9",302:"9",303:"9",308:"9",315:"9",330:"9h",331:"9h",332:"9h",333:"9h",334:"9h",335:"9h",336:"9h",337:"9h",171:"v",338:"so",250:"o",251:"o",194:"*",195:"*",220:"*",221:"*",196:"*",197:"*",
198:"V",279:"(",280:"(",273:"(",274:"(",275:"(",276:"(",314:"(",277:"(",362:"(h",363:"(h",364:"(h",365:"(h",366:"(h",367:"(h",368:"(h"};var lC={name:"width",video:!0,valid:640,Nf:99999},mC={name:"height",video:!0,valid:360,Nf:99999},jC={name:"framerate",video:!0,valid:30,Nf:9999},Oy={name:"bitrate",video:!0,valid:3E5,Nf:2E9},kC={name:"eotf",video:!0,valid:"bt709",Nf:"catavision"},VB={name:"channels",video:!1,valid:2,Nf:99},nC={name:"cryptoblockformat",video:!0,valid:"subsample",Nf:"invalidformat"},oC={uK:lC,BI:mC,uI:jC,NH:Oy,pI:kC,bI:VB,gI:nC};var ac={IH:"auto",aK:"tiny",VI:"light",RJ:"small",bJ:"medium",SI:"large",AI:"hd720",wI:"hd1080",xI:"hd1440",yI:"hd2160",zI:"hd2880",EI:"highres",UNKNOWN:"unknown"};var XV;XV={};g.Fw=(XV.auto=0,XV.tiny=144,XV.light=144,XV.small=240,XV.medium=360,XV.large=480,XV.hd720=720,XV.hd1080=1080,XV.hd1440=1440,XV.hd2160=2160,XV.hd2880=2880,XV.highres=4320,XV);var Iw="highres hd2880 hd2160 hd1440 hd1080 hd720 large medium small tiny".split(" ");Gw.prototype.B=1.3;Sw.prototype.g=function(a){return"true"==this.flags[a]};
Sw.prototype.o=function(a){return(0,window.parseFloat)(this.flags[a])||0};
Sw.prototype.B=function(){return this.flags.mweb_muted_autoplay_animation?this.flags.mweb_muted_autoplay_animation.toString():""};Tw.prototype.dispose=function(){if(!this.A){if(this.o)try{window.URL.revokeObjectURL(this.g)}catch(a){}this.A=!0}};
Tw.prototype.ka=function(){return this.A};var KB={52:!0,53:!0,54:!0,55:!0,60:!0,79:!0,87:!0};Uw.prototype.g=function(){return null};
Uw.prototype.A=function(){return!1};var lK=Xw("auto","large",!1),Zw=Xw("auto","auto",!1);Vw.prototype.isLocked=function(){return this.A&&!!this.o&&this.o==this.g};
Vw.prototype.B=function(a){return a.video?bx(this,a.video.quality):!1};var YV={},ZV=(YV["api.invalidparam"]=2,YV.auth=150,YV["drm.auth"]=150,YV["heartbeat.net"]=150,YV["heartbeat.servererror"]=150,YV["heartbeat.stop"]=150,YV["html5.unsupportedads"]=5,YV["fmt.noneavailable"]=5,YV["fmt.decode"]=5,YV["fmt.unplayable"]=5,YV["html5.missingapi"]=5,YV["html5.unsupportedlive"]=5,YV["drm.unavailable"]=5,YV);g.p(kx,g.I);g.h=kx.prototype;g.h.Wy=function(){return g.Xb(this.B)};
g.h.Xy=function(){return g.Xb(this.A)};
g.h.na=function(){return this.o};
g.h.addEventListener=function(a,b){if(g.u(b)){var c=function(){g.y(b).apply(window,arguments)};
this.C[b]=c}else c=b;this.app.aa.subscribe(a,c)};
g.h.removeEventListener=function(a,b){if(g.u(b)){var c=this.C[b],d=this.C;b in d&&delete d[b];b=c}this.app.aa.unsubscribe(a,b)};
g.h.Eh=function(){return qT(this.app)};
g.h.Kb=function(a,b){this.g&&BT(this.app,!0,this.playerType);QT(this.app,a,b,void 0,this.playerType)};
g.h.getCurrentTime=function(){return this.app.getCurrentTime(this.playerType)};
g.h.Yy=function(){var a=g.X(this.app,this.playerType);if(!a)return 0;a=AL(a);return(0,window.isNaN)(a)?this.getCurrentTime():a};
g.h.getDuration=function(){return this.app.getDuration(this.playerType)};
g.h.getVolume=function(){return this.app.L.volume};
g.h.setVolume=function(a){nx(this,a)};
g.h.zc=function(){return this.app.L.muted};
g.h.mute=function(){ox(this)};
g.h.Ae=function(){px(this)};
g.h.jc=function(){this.g&&BT(this.app,!0,this.playerType);var a=ML(this.app);2==a?(a=this.app.A.A)&&a.kr("control_play"):3==a?g.NL(this.app.A).Mh("control_play"):PT(this.app,this.playerType)};
g.h.ac=function(){var a=ML(this.app);2==a?(a=this.app.A.A)&&a.kr("control_pause"):3==a?g.NL(this.app.A).Mh("control_pause"):(a=g.X(this.app,this.playerType))&&XK(a)};
g.h.ze=function(){var a=this.app;a.V.la&&(a.g.isFullscreen()&&!a.V.experiments.g("player_external_control_on_classic_desktop")&&g.RL(a.g),a.g.U("pageTransition"));var b=a.o.g,b=new g.WE({video_id:b.videoId,oauth_token:b.oauthToken});CT(a,b,1)};
g.h.Ty=function(){};
g.h.Vb=function(){return g.X(this.app,1).Fa};
g.h.de=function(a){nT(this.app,a)};
g.h.Bg=function(){return this.app.V.Ka?WV:[1]};
g.h.Dh=function(){var a=g.X(this.app,this.playerType);if(a){var b="unknown";a.g.Ba&&(b=a.g.Ba.video.quality,!a.V.experiments.g("disable_video_quality_from_size")&&"auto"==b&&a.o&&(a=a.o?a.o.na():null)&&0<a.videoHeight&&(b=Ew(a.videoWidth,a.videoHeight)))}else b="unknown";return b};
g.h.Hh=function(a){if(!this.app.V.isMobile){var b=g.X(this.app,this.playerType);b&&tL(b,"p",Xw(a,a,!0))}};
g.h.xm=function(){var a=g.X(this.app,this.playerType);return a?(a=(0,g.H)(rL(a),function(a){return a.quality}),a.length&&("auto"==a[0]&&a.shift(),a=a.concat(["auto"])),a):[]};
g.h.az=function(){return this.ym()};
g.h.bz=function(){return 1};
g.h.ym=function(){return bT(this.app)};
g.h.cz=function(){return 0};
g.h.setSize=function(){this.app.G.ke()};
g.h.Uq=function(a){GT(this.app,a?2:1)};
g.h.Vq=function(a){GT(this.app,a)};
g.h.Ry=function(){this.app.g.va("SUBSCRIBE")};
g.h.Sy=function(){this.app.g.va("UNSUBSCRIBE")};
g.h.Fh=function(a){"captions"==a&&(a=this.app.A.g)&&!a.loaded&&a.load()};
g.h.tj=function(a){"captions"==a&&(a=this.app.A.g)&&a.loaded&&a.EG()};
g.h.gz=function(a,b,c){a=hx(a,b,c);a=yT(this.app,a,this.playerType);this.g&&BT(this.app,a,this.playerType)};
g.h.Oq=function(a,b,c){a=hx(a,b,c);DT(this.app,a,this.playerType)};
g.h.hz=function(a,b,c){a=ix(a,b,c);b=yT(this.app,a,this.playerType);this.g&&BT(this.app,b,this.playerType);b=this.app;(a=(new g.Pm(a.mediaContentUrl)).A)&&$C(b.V,a)};
g.h.Vy=function(a,b,c){b=ix(a,b,c);DT(this.app,b,this.playerType);a=this.app;(b=(new g.Pm(b.mediaContentUrl)).A)&&$C(a.V,b)};
g.h.getVideoUrl=function(){var a=this.app.V;if(a.H)return"";var b=this.app.o.g,c=void 0;b.xa||(c=Math.floor(this.app.getCurrentTime(1)));return a.getVideoUrl(b.videoId,this.getPlaylistId()||void 0,c)};
g.h.Ch=function(){return pT(this.app)};
g.h.Rq=function(){var a=this.app.V;if(a.H)var b="";else{var c=this.app.o.g.videoId;b=this.app.G.Na();var d=this.getPlaylistId()||void 0,c="https://"+dD(a)+"/embed/"+c;d&&(c=g.wg(c,{list:d}));d=!a.experiments.g("enable_responsive_embed_snippet");a.experiments.g("embed_snippet_includes_version")&&(c=g.wg(c,{ecver:d?"1":"2"}));a=b.width;b=b.height;d?(d=Ra(c),b='<iframe width="'+a+'" height="'+b+'" src="'+d+'" frameborder="0" allowfullscreen></iframe>'):(d=Math.round(360*a/b),b='<div style="position:relative;height:0;padding-bottom:'+
Math.round(1E4*b/a)/100+'%"><iframe src="'+Ra(c)+'" style="position:absolute;width:100%;height:100%;left:0" width="'+d+'" height="360" frameborder="0" allowfullscreen></iframe></div>')}return b};
g.h.Nq=function(a,b,c){return JT(this.app,a,b,c)};
g.h.Tq=function(a){a:{for(var b=this.app,c=b.o.D.g.g||[],d=0;d<c.length;d++){var e=c[d];if(e.getId()==a){b.o.D.G(e);cM(b,"cuerangesremoved",[e]);a=!0;break a}}a=!1}return a};
g.h.fz=function(a,b,c,d){var e=this.app;e.fa=!1;ET(e,a,b,c,d);this.g&&BT(this.app,!0,this.playerType)};
g.h.Uy=function(a,b,c,d){var e=this.app;e.fa=!0;ET(e,a,b,c,d)};
g.h.Cg=function(){HT(this.app);this.g&&BT(this.app,!0,this.playerType)};
g.h.Gh=function(){IT(this.app);this.g&&BT(this.app,!0,this.playerType)};
g.h.Sq=function(a){var b=this.app;!b.X||b.g.isFullscreen()&&!b.Ea?b.B&&(b.B.be?xT(b,b.B.zb(a),1):b.fa=!1,ZG(b.B,a)):b.g.va("onPlaylistIndex",a);this.g&&BT(this.app,!0,this.playerType)};
g.h.setShuffle=function(a){var b=this.app.B;b&&b.setShuffle(a)};
g.h.jz=function(a){var b=this.app.B;b&&(b.loop=a)};
g.h.ce=function(){var a=this.app.B;if(!a)return null;for(var b=[],c=0;c<a.getLength();c++){var d=a.zb(c);d&&b.push(d.videoId)}return b};
g.h.Qq=function(){var a=this.app.B;return a?a.Za:-1};
g.h.getPlaylistId=function(){var a=this.app.B;return a&&a.listId?a.listId.toString():null};
g.h.Ac=function(a,b,c){if(!b)return null;var d=this.app.A;return"captions"==a?(a=d.g)&&a.Hm(b,c):null};
g.h.Jb=function(a,b,c){return this.Ac(a,b,c)};
g.h.Qf=function(a){var b=this.app.A;return"captions"==a?(b=b.g)&&b.iA():a?null:(a=[],b.g&&a.push("captions"),a)};
g.h.ca=function(){var a={},b=g.X(this.app,this.playerType);if(b&&(b=b.g,a.video_id=b.videoId,a.author=b.author,a.title=b.title,b.Ba)){a.video_quality=b.Ba.video.quality;var b=b.Ba.video,c=[];32<b.fps&&c.push("hfr");Hw(b)&&c.push("hdr");"bt2020"==b.primaries&&c.push("wcg");a.video_quality_features=c}(b=this.getPlaylistId())&&(a.list=b);return a};
g.h.Wq=function(){RS(this.app,!0)};
g.h.dz=function(){RS(this.app,!1)};
g.h.Pq=function(){var a=this.app.A.A;return a?a.Iu():-1};
g.h.ez=function(a){if(a!=this.app.ba.args.video_id)return!1;a=(a=g.X(this.app,1))?a.A:null;return!(!a||!g.T(a,128)||5!=ZV[a.g.errorCode])};
g.h.Zy=function(){var a=this.app.ba.clone();g.Ea(a.args,CF(this.app.o.g));return a};
g.h.kz=function(){this.app.V.fa&&this.app.da.resume()};
g.h.destroy=function(){this.app.dispose()};
g.h.iz=function(){var a=g.X(this.app);a&&!g.T(a.A,128)&&(a.U("internalAbandon"),GK(a),EK(a))};
g.h.Y=function(){if(this.o){for(var a in this.B)this.o[a]=null;for(a in this.A)this.o[a]=null;this.o=null}this.C=null;g.I.prototype.Y.call(this)};var qx=1;g.rx.prototype.getId=function(){return this.Ca};
g.rx.prototype.getId=g.rx.prototype.getId;g.rx.prototype.contains=function(a,b){return a>=this.start&&(a<this.end||a==this.end&&this.start==this.end)&&(null==b||a<b&&b<=this.end)};g.$V={NONE:0,RAISED:1,DEPRESSED:2,Bo:3,DROP_SHADOW:4};g.aW={Ek:"#fff",jw:"#ff0",Bv:"#0f0",lv:"#0ff",Xu:"#00f",Iv:"#f0f",no:"#f00",sk:"#080808"};g.bW={co:0,jo:1,mo:2,ho:3,zk:4,CASUAL:5,CURSIVE:6,Ck:7};g.h=g.vx.prototype;g.h.ar=function(a){this.segments.push(a)};
g.h.getDuration=function(a){return(a=this.Ef(a))?a.duration:0};
g.h.ol=function(a){return this.getDuration(a)};
g.h.te=function(){return this.segments.length?this.segments[0].ya:-1};
g.h.Fm=function(a){return(a=this.Ef(a))?a.ingestionTime:window.NaN};
g.h.Mb=function(){return this.segments.length?this.segments[this.segments.length-1].ya:-1};
g.h.Yi=function(){var a=this.segments[this.segments.length-1];return a?a.endTime:window.NaN};
g.h.Nb=function(){return this.segments[0].startTime};
g.h.pg=function(){return this.segments.length};
g.h.wj=function(){return 0};
g.h.Te=function(a){return(a=this.Ri(a))?a.ya:-1};
g.h.Np=function(a){return(a=this.Ef(a))?a.sourceURL:""};
g.h.Id=function(a){return(a=this.Ef(a))?a.startTime:0};
g.h.bj=ba(4);g.h.Pb=function(){return 0<this.segments.length};
g.h.Ef=function(a){a=g.Cb(this.segments,new ux(a,0,0,0,""),function(a,c){return a.ya-c.ya});
return 0<=a?this.segments[a]:null};
g.h.Ri=function(a){a=g.Cb(this.segments,{startTime:a},function(a,c){return a.startTime-c.startTime});
return 0<=a?this.segments[a]:this.segments[Math.max(0,-a-2)]};
g.h.Lp=function(){return 0};xx.prototype.skip=function(a){this.o+=a};Cx.prototype.Li=function(a,b,c){(new window.Uint8Array(this.data.buffer,this.g,c)).set(new window.Uint8Array(a.buffer,b+a.byteOffset,c));this.g+=c};var cW=Mx;var JB,ZB;var dW=g.Ob,dW=dW.toLowerCase();if(-1!=dW.indexOf("android")){var eW=dW.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(eW)JB=Number(eW[1]);else{var fW={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},gW=dW.match("("+g.Xb(fW).join("|")+")");JB=gW?fW[gW[0]]:0}}else JB=void 0;ZB=0<=JB;var $x=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],ay=['audio/mp4; codecs="mp4a.40.2"'];ey.prototype.start=function(){return 0};
ey.prototype.end=function(){return window.Infinity};g.h=fy.prototype;g.h.addEventListener=function(){};
g.h.removeEventListener=function(){};
g.h.dispatchEvent=function(){return!1};
g.h.abort=function(){};
g.h.remove=function(){};
g.h.appendBuffer=function(){};var eP,hW;var iW=g.Ob,jW=iW.match(/\((iPad|iPhone|iPod)( Simulator)?;/);if(!jW||2>jW.length)eP=void 0;else{var kW=iW.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d+_\d)[_ ]/);eP=kW&&6==kW.length?Number(kW[5].replace("_",".")):0}(hW=0<=eP)&&0<=g.Ob.search("Safari")&&g.Ob.search("Version");var lW=hW&&4>eP?.1:0,dP=new my;my.prototype.g=null;my.prototype.getDuration=function(){return this.duration||0};
my.prototype.getCurrentTime=function(){return this.currentTime||0};
my.prototype.o=function(){this.hasAttribute("controls")&&this.setAttribute("controls","true")};g.C(ny,g.I);g.h=ny.prototype;g.h.jc=function(){this.g.ended&&this.Kb(0);!this.gc()&&this.o&&(py(this,this.o.g),this.o.o||this.load());this.play();hW&&7<=eP&&g.bt(this,"playing",(0,g.A)(function(){g.Fr((0,g.A)(this.Gp,this,this.getCurrentTime(),0),500)},this))};
g.h.Gp=function(a,b){this.g.paused||this.getCurrentTime()>a||10<b||(this.play(),g.Fr((0,g.A)(this.Gp,this,this.getCurrentTime(),b+1),500))};
g.h.Kb=function(a){0<this.g.readyState&&(hW&&4>eP&&(a=Math.max(.1,a)),this.g.currentTime=a)};
g.h.ze=function(){this.gc()&&(OB&&0<this.getCurrentTime()&&this.Kb(0),this.g.removeAttribute("src"),this.load(),oy(this,null))};
g.h.addEventListener=function(a,b){this.B.ga(a,b,!1,this);if(!this.A[a]){var c=(0,g.A)(this.AH,this);this.g.addEventListener(a,c);this.A[a]=c}};
g.h.removeEventListener=function(a,b){this.B.Qa(a,b,!1,this)};
g.h.dispatchEvent=function(a){return this.B.dispatchEvent(a)};
g.h.bp=function(){this.C&&!this.g.muted&&(cy(),this.g.muted=!0)};
g.h.Y=function(){this.D&&this.removeEventListener("volumechange",this.bp);ny.ea.Y.call(this)};g.p(wy,g.we);wy.prototype.preventDefault=function(){g.we.prototype.preventDefault.call(this);this.o&&this.o.preventDefault()};
wy.prototype.stopPropagation=function(){g.we.prototype.stopPropagation.call(this);this.o&&this.o.stopPropagation()};g.C(yy,ny);g.h=yy.prototype;g.h.na=function(){return this.g};
g.h.gc=function(){return this.g.src};
g.h.Vb=function(){try{return 0<=this.g.playbackRate?this.g.playbackRate:1}catch(a){return 1}};
g.h.de=function(a){this.Vb()!=a&&(this.g.playbackRate=a);return a};
g.h.zm=function(a,b){return this.g.canPlayType(a,b)};
g.h.getCurrentTime=function(){return this.g.currentTime};
g.h.getDuration=function(){return this.g.duration};
g.h.load=function(){var a=this.g.playbackRate;this.g.load();this.g.playbackRate=a};
g.h.pause=function(){this.g.pause()};
g.h.play=function(){var a=this.g.play();a&&a.then&&a.then(void 0,function(a){1E-4>Math.random()&&g.xr(a)})};
g.h.kd=function(){return this.g.error?this.g.error.code:null};
g.h.setSize=function(a){return g.mh(this.g,a)};
g.h.getVolume=function(){return this.g.volume};
g.h.setVolume=function(a){cy();this.g.volume=a};
g.h.AH=function(a){this.dispatchEvent(new wy(this,a.type,a))};
g.h.setAttribute=function(a,b){this.g.setAttribute(a,b)};
g.h.removeAttribute=function(a){this.g.removeAttribute(a)};
g.h.hasAttribute=function(a){return this.g.hasAttribute(a)};
g.h.Y=function(){for(var a in this.A)this.g.removeEventListener(a,this.A[a]);yy.ea.Y.call(this)};g.h=zy.prototype;g.h.append=function(a){this.o.webkitSourceAppend(this.A,a)};
g.h.abort=function(){this.o.webkitSourceAbort(this.A)};
g.h.LG=function(){return this.o.webkitSourceState==this.o.SOURCE_CLOSED?new Ay:this.o.webkitSourceBuffered(this.A)};
g.h.NG=function(){return this.B};
g.h.RG=function(a){this.B=a;this.o.webkitSourceTimestampOffset(this.A,a)};g.h=By.prototype;g.h.addEventListener=function(a,b,c){this.g.addEventListener(a,b,c)};
g.h.removeEventListener=function(a,b,c){this.g.removeEventListener(a,b,c)};
g.h.BH=function(){return this.g.webkitMediaSourceURL};
g.h.addSourceBuffer=function(a){var b=(this.A++).toString();this.g.webkitSourceAddId(b,a);a=new zy(this.g,b);this.sourceBuffers.push(a);return a};
g.h.removeSourceBuffer=function(a){for(var b=0;b<this.sourceBuffers.length;b++)if(a===this.sourceBuffers[b]){this.g.webkitSourceRemoveId(a.A);for(a=b+1;a<this.sourceBuffers.length;a++)this.sourceBuffers[a-1]=this.sourceBuffers[a];this.sourceBuffers.pop();break}};
g.h.OG=function(){switch(this.g.webkitSourceState){case this.g.SOURCE_CLOSED:return"closed";case this.g.SOURCE_OPEN:return"open";case this.g.SOURCE_ENDED:return"ended"}return""};
g.h.endOfStream=function(){this.g.webkitSourceEndOfStream(this.g.EOS_NO_ERROR)};
g.h.PG=function(){qb(this.sourceBuffers)};
g.h.MG=function(){return this.o};
g.h.QG=function(a){this.o=a;this.g.webkitSourceSetDuration&&this.g.webkitSourceSetDuration(a)};g.C(Cy,g.I);Cy.prototype.L=function(){if(!this.ka()&&Ey(this))try{this.B&&(this.B(this),this.B=null)}catch(a){this.D&&this.D(a)}};
Cy.prototype.K=function(){this.dispose()};Qy.prototype.toString=function(){return this.start+"-"+(null==this.end?"":this.end)};qz.prototype.verify=function(){if(this.info.Pa!=this.range.length)return!1;if(1==this.info.ia.info.o){if(8>this.info.Pa||4==this.info.type)return!0;var a=rz(this),b=a.getUint32(0,!1),a=a.getUint32(4,!1);if(2==this.info.type)return b==this.info.Pa&&1936286840==a;if(3==this.info.type&&0==this.info.Ja)return 1836019558==a||1936286840==a||1937013104==a||1718909296==a||1701671783==a||1936419184==a}else if(2==this.info.ia.info.o){if(4>this.info.Pa||4==this.info.type)return!0;b=rz(this).getUint32(0,!1);
if(3==this.info.type&&0==this.info.Ja)return 524531317==b||440786851==b}return!0};var KC=["2mdn.net"];Fz.prototype.set=function(a,b){this.g[a]!==b&&(this.g[a]=b,this.A="")};
Fz.prototype.get=function(a){Iz(this);return this.g[a]||null};
Fz.prototype.clone=function(){var a=new Fz(this.B);a.D=this.D;a.o=this.o;a.C=this.C;a.g=g.ec(this.g);a.A=this.A;return a};Qz.prototype.set=function(a,b){this.g.get(a);this.o[a]=b;this.A=""};
Qz.prototype.get=function(a){return this.o[a]||this.g.get(a)};var mW=0;g.h=$z.prototype;g.h.fd=function(){};
g.h.rd=function(){};
g.h.Xl=function(){return!1};
g.h.yc=function(){return!!this.g&&!!this.index&&this.index.Pb()};
g.h.Uf=function(){};
g.h.dr=function(){return!1};
g.h.Zi=function(){};
g.h.Tf=function(){};
g.h.Lh=function(){};
g.h.Se=function(){};
g.h.Ll=function(){};
g.h.xt=function(a){return[a]};
g.h.Sj=function(a){return[a]};g.p(bA,$z);g.h=bA.prototype;g.h.fd=function(){return!1};
g.h.rd=function(){return!1};
g.h.dr=function(){return this.D};
g.h.Zi=function(){return this.D?[]:[new Xz([new Ty(1,this,this.initRange)],this.K)]};
g.h.Tf=function(){};
g.h.Lh=function(a){this.Uf(a);return this.Mi(a.o?a.ya+1:a.ya,!1)};
g.h.Se=function(a,b){b=void 0===b?!1:b;var c=this.index.Te(a);b&&(c=Math.min(this.index.Mb(),c+1));return this.Mi(c,!0)};
g.h.Ll=function(a){this.g=new window.Uint8Array(rz(a).buffer)};
g.h.Xl=function(){return!1};
g.h.Uf=function(a){return 0==a.Pa?!0:this.index.Mb()>a.ya&&this.index.te()<=a.ya+1};
g.h.update=function(a,b,c){var d=this.index;if(0!=a.length)if(a=g.wb(a),0==d.segments.length)d.segments=a;else{var e=d.segments.length?g.eb(d.segments).endTime:0,f=a[0].ya-d.Mb();1<f&&qb(d.segments);for(f=0<f?0:-f+1;f<a.length;f++){var k=a[f];k.startTime=e;k.endTime=k.startTime+k.duration;e+=a[f].duration;d.segments.push(a[f])}}wx(this.index,c);this.H=b};
g.h.yc=function(){return this.D?!0:$z.prototype.yc.call(this)};
g.h.Mi=function(a,b){var c=this.index.Np(a),d=this.index.Id(a),e=this.index.getDuration(a),f;b?e=f=0:f=0<this.info.g?this.info.g*e:1E3;return new Xz([new Ty(3,this,null,a,d,e,0,f,a==this.index.Mb()&&!this.H&&0<f)],c)};g.p(cA,g.vx);g.h=cA.prototype;g.h.te=function(){return this.g?this.segments.length?this.Ri(this.Nb()).ya:-1:g.vx.prototype.te.call(this)};
g.h.Nb=function(){return this.g?this.segments.length?Math.max(g.eb(this.segments).endTime-this.A,0):0:g.vx.prototype.Nb.call(this)};
g.h.pg=function(){return this.g?this.segments.length?this.Mb()-this.te()+1:0:g.vx.prototype.pg.call(this)};
g.h.ar=function(a){var b=dA(this,a.ya);0<=b?this.segments[b]=a:this.segments.splice(-(b+1),0,a)};
g.h.Ri=function(a){if(!this.g)return g.vx.prototype.Ri.call(this,a);if(!this.segments.length)return null;var b=g.Cb(this.segments,{startTime:a},function(a,b){return a.startTime-b.startTime}),c=this.segments[0<=b?b:Math.max(-(b+2),0)];
return c.startTime+c.duration>a&&c.startTime<=a?c:-1==b?fA(this,c.ya-Math.ceil((c.startTime-a)/this.o),c):fA(this,c.ya+Math.ceil((a-c.endTime)/this.o),c)};
g.h.Ef=function(a){if(!this.g)return g.vx.prototype.Ef.call(this,a);if(!this.segments.length)return null;var b=dA(this,a);return 0<=b?this.segments[b]:fA(this,a,this.segments[Math.max(-(b+2),0)])};g.p(gA,bA);g.h=gA.prototype;g.h.rd=function(){return!0};
g.h.yc=function(){return!0};
g.h.Uf=function(){return!0};
g.h.Zi=function(){return[]};
g.h.Se=function(a,b){return g.pa(a)&&!(0,window.isFinite)(a)?new Xz([new Ty(3,this,null,-1,void 0,this.A,void 0,this.A*this.info.g)],""):bA.prototype.Se.call(this,a,b)};
g.h.Mi=function(a,b){if(eA(this.index,a))return bA.prototype.Mi.call(this,a,b);var c=this.index.Id(a);return new Xz([new Ty(3,this,null,a,c,void 0,void 0,this.A*this.info.g)],0<=a?"sq/"+a:"")};mA.prototype.update=function(a,b){var c=void 0;this.o&&(c=this.o);var d=new mA,e=a.getElementsByTagName("S");if(e.length){var f=+jA(a,"timescale")||1,k=(+e[0].getAttribute("t")||0)/f,l=+jA(a,"startNumber")||0;var m=k;var n=+jA(a,"presentationTimeOffset")||0;m=c?c.Ee+c.durationSecs:b?m-n/f:0;n=Date.parse(iA(jA(a,"yt:segmentIngestTime")))/1E3;d.A="SegmentTemplate"==a.parentNode.tagName;d.A&&(d.D=jA(a,"media"));var q=c?l-c.ya:1;d.C=0<q?0:-q+1;e=g.ma(e);for(q=e.next();!q.done;q=e.next())for(var q=q.value,
r=+q.getAttribute("d")/f,v=(+q.getAttribute("yt:sid")||0)/f,D=+q.getAttribute("r")||0,E=0;E<=D;E++)if(c&&l<=c.ya)l++;else{var z=new hA(l,m,r,n+v,k);d.g.push(z);var R=z.Ee,V=q.getAttribute("yt:cuepointTimeOffset"),z=q.getAttribute("yt:cuepointDuration");V&&z?(R=+V/f+R,z=+z/f,V=q.getAttribute("yt:cuepointContext")||null,z=new Fx(R,z,V)):z=null;z&&d.B.push(z);l++;m+=r;k+=r;n+=r+v}d.g.length&&(d.o=g.eb(d.g))}this.C=d.C;this.o=d.o||this.o;xb(this.g,d.g);xb(this.B,d.B);this.A=d.A;this.D=d.D};
mA.prototype.G=function(a,b,c,d){for(var e=this.D.split("$$"),f=0;f<e.length;f++)e[f]=e[f].replace("$RepresentationID$",a),e[f]=e[f].replace("$Number$",c.toString()),e[f]=e[f].replace("$Bandwidth$",b.toString()),e[f]=e[f].replace("$Time$",d.toString());return e.join("$")};g.h=g.uA.prototype;g.h.wj=function(a){return this.g[a]};
g.h.Id=function(a){return this.o[a]/this.B};
g.h.bj=ba(3);g.h.Fm=function(){return window.NaN};
g.h.getDuration=function(a){a=this.ol(a);return 0<=a?a/this.B:-1};
g.h.ol=function(a){return a+1<this.Aa||this.A?this.o[a+1]-this.o[a]:-1};
g.h.te=function(){return 0};
g.h.Mb=function(){return this.Aa-1};
g.h.Yi=function(){return this.A?this.o[this.Aa]/this.B:window.NaN};
g.h.Nb=function(){return 0};
g.h.pg=function(){return this.Aa};
g.h.Np=function(){return""};
g.h.Te=function(a){a=g.Cb(this.o.subarray(0,this.Aa),a*this.B);return 0<=a?a:Math.max(0,-a-2)};
g.h.Pb=function(){return 0<=this.Mb()};
g.h.Lp=function(a,b){if(a>=this.Mb())return 0;for(var c=0,d=this.Id(a)+b,e=a;e<this.Mb()&&d>this.Id(e);e++)c=Math.max(c,(e+1<this.Aa||this.A?this.g[e+1]-this.g[e]:-1)/this.getDuration(e));return c};
g.h.cap=function(a,b){vA(this);this.A=!0;this.o[this.Aa]=b;this.g[this.Aa]=a};g.p(wA,$z);g.h=wA.prototype;g.h.Zi=function(a,b){var c=new Ty(1,this,this.initRange),d=new Ty(2,this,this.indexRange),e=[],f=[c];Wy(c,d)?f.push(d):(e.push(new Xz([d])),b=!1);(0,window.isNaN)(this.A)&&(b=!1);var c=f[f.length-1],d=c.range.end-f[0].range.start+1,k=0;if(b){var k=a.Nk,l=this.info.video?2:a.wb;0<l&&(k=Math.floor(Math.max(k,l*this.info.g)));k=Math.min(a.G,k,this.A);k=a.Ie?Math.min(k,this.A-d):k-d}0<k&&f.push(new Ty(4,this,Sy(c.range.end+1,k)));e.push(new Xz(f));return e};
g.h.Ll=function(a){if(1==a.info.type){if(this.g)return;if(a.g.slice)var b=new window.Uint8Array(a.g.slice(a.range.start,a.range.end+1));else b=new window.Uint8Array(a.g,a.range.start,a.range.end+1),b=new window.Uint8Array(b);this.g=b}else if(2==a.info.type){if(this.D||0<=this.index.Mb())return;if(1==this.info.o){b=this.index;var c=rz(a),d=a.info.range.start;a=0;var e=c.getUint32(0,!1),f=c.getUint8(a+8);a+=12;var k=c.getUint32(a+4,!1);b.B=k;a+=8;0==f?(f=c.getUint32(a,!1),k=c.getUint32(a+4,!1),a+=8):
(f=4294967296*c.getUint32(a,!1)+c.getUint32(a+4,!1),k=4294967296*c.getUint32(a+8,!1)+c.getUint32(a+12,!1),a+=16);b.g[0]=k+(e+d);b.o[0]=f;b.A=!0;d=c.getUint16(a+2,!1);a+=4;for(e=0;e<d;e++){f=c.getUint32(a,!1);k=c.getUint32(a+4,!1);a+=12;var l=b;l.Aa++;vA(l);l.g[l.Aa]=l.g[l.Aa-1]+f;l.o[l.Aa]=l.o[l.Aa-1]+k}}else this.D=rz(a)}if(2==this.info.o&&this.g&&this.D){a=new window.DataView(this.g.buffer);b=this.index;k=this.D;c=this.indexRange.end;a=new $y(a);if(ez(a,440786851)&&(iz(a),ez(a,408125543)&&(e=a,
f=e.g,d=fz(e,!0),e.g=f,a=dz(a),e=a.A+a.g,ez(a,357149030)))){a=dz(a);for(var l=1E6,m=1E9,f=0;!az(a);){var n=fz(a,!1);2807729==n?l=hz(a):2807730==n?m=hz(a):17545==n?f=jz(a):iz(a)}b.B=m/l;a=new $y(k);if(ez(a,475249515)){a=dz(a);k=!0;for(l=!1;ez(a,187);){m=dz(a);if(ez(m,179))if(n=hz(m),ez(m,183)){for(var m=dz(m),q=e;ez(m,241);)q=hz(m)+e;m=[q,n]}else m=null;else m=null;q=m;k&&c==q[0]&&(l=!0);k=!1;l&&(q[0]+=1);m=b;n=q[0];q=q[1];vA(m);m.g[m.Aa]=n;m.o[m.Aa]=q;m.Aa++}b.cap(d+e,f)}}this.D=null}};
g.h.xt=function(a){for(var b=this.Sj(a.info),c=[],d=a.Jd,e=0;e<b.length;e++)c.push(new qz(b[e],a.g,Sy(b[e].range.start+b[e].Ja-a.info.range.start+a.range.start,b[e].Pa),a.o,d)),d=!1;return c};
g.h.Sj=function(a){for(var b=0;b<this.index.Mb()&&a.range.start>=this.index.wj(b+1);)b++;return xA(this,b,a.range.start,a.range.length).g};
g.h.Uf=function(a){return this.yc()?!0:(0,window.isNaN)(this.A)?!1:a.range.end+1<this.A};
g.h.Tf=function(a,b){this.Uf(a);if(!this.yc()){var c=Sy(a.range.end+1,b);c.end+1>this.A&&(c=new Qy(c.start,this.A-1));return new Xz([new Ty(4,a.ia,c)])}4==a.type&&(c=this.Sj(a),a=c[c.length-1]);var c=0,d=a.range.start+a.Ja+a.Pa;3==a.type&&(c=a.ya,d==a.range.end+1&&(c+=1));return xA(this,c,d,b)};
g.h.Lh=function(){return null};
g.h.Se=function(a,b){var c=this.index.Te(a);b&&(c=Math.min(this.index.Mb(),c+1));return xA(this,c,this.index.wj(c),0)};
g.h.Xl=function(){var a;if(a=this.yc()&&!(0,window.isNaN)(this.A))a=this.index,a=(a.A?a.g[a.Aa]:-1)!=this.A;return a};
g.h.fd=function(){return!0};
g.h.rd=function(){return!1};g.p(AA,g.gt);g.h=AA.prototype;g.h.We=function(){return Sb(this.g,function(a){return a.info.video?2==a.info.video.projectionType:!1})};
g.h.xe=function(){return Sb(this.g,function(a){return a.info.video?3==a.info.video.projectionType:!1})};
g.h.Xd=function(){return Sb(this.g,function(a){return a.info.video?4==a.info.video.projectionType:!1})};
g.h.Of=function(){return Sb(this.g,function(a){return a.info.video?1==a.info.video.stereoLayout:!1})};
g.h.EF=function(a){var b=a.getElementsByTagName("Representation");if(0<a.getElementsByTagName("SegmentList").length||0<a.getElementsByTagName("SegmentTemplate").length){this.B=!0;this.C||(this.C=new oA);sA(this.C,a,this.oa);this.U("refresh");for(a=0;a<b.length;a++){var c=PA(this,b[a]),d=this.isLive&&1==c.o&&this.wa;if(!this.g[c.id]){var e=JA(kA(b[a],"BaseURL").textContent,c),f=kA(b[a],"Initialization"),k=jA(f,"sourceURL"),f=Ry(jA(f,"range"));d&&(k="",f=void 0);this.g[c.id]=new bA(e,c,k,null===f?void 0:
f)}c=this.g[c.id];e=jA(b[a],"id","AdaptationSet");e=""!=e?e:jA(b[a],"mimetype","AdaptationSet");k=this.C;e=k.A[c.info.id]||k.o[e]||k.g||null;k=e.g;if(e.A)for(d=[],k=g.ma(k),f=k.next();!f.done;f=k.next()){var f=f.value,l=e.G(c.info.id,8*c.info.g,f.ya,f.Ee);d.push(new ux(f.ya,f.Ee,f.durationSecs,f.g,l,null,f.o))}else{e=g.yb(kA(b[a],"SegmentList").getElementsByTagName("SegmentURL"),e.C);f=[];for(l=0;l<e.length;l++)f.push(RA(e[l],k[l],d));d=f}c.update(d,this.isLive,this.X)}tA(this.C);return!0}this.duration=
lA(jA(a,"mediaPresentationDuration"));a:{for(a=0;a<b.length;a++){k=b[a];c=PA(this,k);e=kA(k,"BaseURL");d=JA(e.textContent,c);f=kA(k,"SegmentBase");k=Ry(f.attributes.indexRange.value);f=Ry(f.getElementsByTagName("Initialization")[0].attributes.range.value);e=(0,window.parseInt)(e.getAttribute(MA(this,"contentLength")),10);c=new wA(d,c,f,k,e,window.NaN);if(!c){b=!1;break a}this.g[c.info.id]=c}b=!0}return b};
g.h.Tw=function(a){return this.C?g.yb(this.C.B,a):this.L.length?g.yb(this.L,a):[]};
g.h.gx=function(a){if(this.ka())return this;this.O=a.status;a=a.responseText;a=(new window.DOMParser).parseFromString(a,"text/xml").getElementsByTagName("MPD")[0];this.D=1E3*lA(jA(a,"minimumUpdatePeriod"))||window.Infinity;if(!this.W){var b;a:{for(b=0;b<a.attributes.length;b++)if("http://youtube.com/yt/2012/10/10"==a.attributes[b].value){b=a.attributes[b].name.split(":")[1];break a}b=""}this.fa=b}this.isLive=window.Infinity>this.D&&this.za;this.X=(0,window.parseInt)(jA(a,MA(this,"earliestMediaSequence")),
10)||0;if(b=Date.parse(iA(jA(a,MA(this,"mpdResponseTime")))))this.T=((0,g.F)()-b)/1E3;a=this.isLive&&0>=a.getElementsByTagName("SegmentTimeline").length?!1:(0,g.iv)(a.getElementsByTagName("Period"),this.EF,this);this.G=2;this.U("loaded");TA(this,a);return this};
g.h.ix=function(a){this.O=a.g.status;this.G=3;this.U("loaderror");return Df(a.g)};
g.h.br=function(){if(1!=this.G&&!this.ka()){var a=this.aa;a:{var b=this.g;for(var c in b){var d=b[c].index;if(d&&d.Pb()){b=d.Mb()+1;break a}}b=0}a=g.wg(a,{start_seq:b.toString()});QA(this,a)}};
g.h.resume=function(){TA(this,!0)};
g.h.qh=function(){var a=this.g,b=window.NaN,c;for(c in a){var d=a[c].index;d&&d.Pb()&&((0,window.isNaN)(b)||d.Yi()<b)&&(b=d.Yi())}return Math.floor(b)};
g.h.Nb=function(){var a=this.g,b;for(b in a){var c=a[b].index;if(c&&c.Pb())return c.Nb()}return 0};
g.h.Kz=function(){return this.T};
var XA=null,OA={commentary:1,alternate:2,dub:3,main:4};var nW={},hB=(nW.playready=["com.youtube.playready","com.microsoft.playready"],nW.widevine=["com.widevine.alpha"],nW),iB=g.vb(hB.widevine,hB.playready);g.p(gB,g.I);
gB.prototype.D=function(){if(!this.ka())if(0==this.A.length)this.B(null);else{var a=this.A.shift(),b=this.o[a],c={initDataTypes:["cenc","webm"],audioCapabilities:[],videoCapabilities:[]};aB(b)&&(c.initDataTypes=["keyids","cenc"]);for(var d in this.g[b.g]){var e=0==d.indexOf("audio/"),f=e?c.audioCapabilities:c.videoCapabilities;this.C.g("html5_widevine_robustness_strings")&&"widevine"==b.g?e?f.push({contentType:d,robustness:"SW_SECURE_CRYPTO"}):(f.push({contentType:d,robustness:"HW_DECODE_ALL"}),f.push({contentType:d,
robustness:"SW_SECURE_DECODE"})):f.push({contentType:d})}window.navigator.requestMediaKeySystemAccess(a,[c]).then(yr((0,g.A)(this.G,this,b)),yr((0,g.A)(this.D,this)))}};
gB.prototype.G=function(a,b){this.ka()||(a.A=b,jB(this,a),this.B(a))};var TC={no:"red",Ek:"white"};nB.prototype.g=function(a,b){var c=Math.pow(this.C,a);this.A=b*(1-c)+c*this.A;this.B+=a};
nB.prototype.o=function(){return this.A/(1-Math.pow(this.C,this.B))};oB.prototype.g=function(a,b){pB(this,"index");this.B.push({index:this.K++,weight:a,value:b});this.A+=a;for(pB(this,"index");this.A>this.G;){var c=this.A-this.G,d=this.B[0];d.weight<=c?(this.A-=d.weight,this.B.shift()):(this.A-=c,d.weight-=c)}};
oB.prototype.o=function(){return this.D?(qB(this,this.C-this.D)+qB(this,this.C)+qB(this,this.C+this.D))/3:qB(this,this.C)};rB.prototype.g=function(a,b){this.A.push(b);this.A.length>this.B&&this.A.shift()};
rB.prototype.o=function(){return yd.apply(null,this.A)};var MC={EH:"adunit",kI:"detailpage",nI:"editpage",oI:"embedded",TI:"leanback",wJ:"previewpage",xJ:"profilepage",kK:"unplugged"};FB.prototype.then=function(a,b,c){return this.A?this.A.then(a,b,c):1==this.o&&a?(a=a.call(c,this.g),wf(a)?a:HB(a)):2==this.o&&b?(a=b.call(c,this.g),wf(a)?a:GB(a)):this};
vf(FB);FB.prototype.getValue=function(){return this.g};var YB="9h 9 h 8 (h ( H *".split(" "),XB="9h 9 h 8 ( H *".split(" "),$B="h98H(*".split(""),bC="oMavAV".split(""),eC=["so","sa"],dC="moMavAV".split(""),cC="aoMvAV".split(""),aC=["f"],QB={'video/mp4; codecs="avc1.42001E, mp4a.40.2"':"maybe"},RB={"application/x-mpegURL":"maybe"},PB={"application/x-mpegURL":"maybe"};var WC={WI:1,XI:2,YI:3};g.C(qC,g.gt);qC.prototype.remove=function(a){var b=this.get(a);delete this.Ia[a];return b};
qC.prototype.get=function(a){return this.Ia[a]||null};
qC.prototype.isEmpty=function(){return g.cc(this.Ia)};var rC={"ad-trueview-indisplay-pv":6,"ad-trueview-insearch":7},sC={"ad-trueview-indisplay-pv":2,"ad-trueview-insearch":2},tC=/^(\d*)_((\d*)_?(\d*))$/;var AC=/^([0-9\.]+)\:([0-9\.]+)$/;var EC=(0,g.F)().toString();var NC="blogger books docs google-live play picasaweb gmail jamboard".split(" ");g.p(ZC,g.I);
ZC.prototype.ge=function(a){var b=vC(a,this.A,this.gb),c=!0;b&&(this.T.adformat=a.adformat,uC(b)||(this.aa="adunit"==this.g?this.aa:this.g,this.g="adunit",c=!1));c&&this.aa&&(this.g=this.aa,this.aa=null);if(b=a.video_id&&a.video_id!=this.uf)this.uf=a.video_id;if(a.adpings||b)this.Hk=a.adpings?g.Hr(a.adpings):null;this.Je?(c=a.videostats_playback_base_url&&a.videostats_playback_base_url.split("/")[2]||"s.youtube.com",this.experiments.g("www_for_videostats")&&"s.youtube.com"==c&&(c="www.youtube.com")):
c="video.google.com";this.bh=c;this.Yg="//"+this.bh+"/api/stats/qoe";if(a.feature||b)this.Yf=c=a.feature,this.T.feature=c;if(a.referrer||b)this.referrer=b=a.referrer,this.T.referrer=b;for(var d in oW)b=oW[d],c=a[b],void 0!=c&&(this.B[b]=c);!this.Ma&&a.cl&&(this.Ma=+a.cl);this.userAge=yC(this.userAge,a.user_age);this.userDisplayImage=zC(this.userDisplayImage,a.user_display_image);g.PD.test(this.userDisplayImage)||(this.userDisplayImage="");this.userDisplayName=zC(this.userDisplayName,a.user_display_name);
this.userGender=zC(this.userGender,a.user_gender);this.bc=zC(this.bc,a.eventid);this.csiPageType=zC(this.csiPageType,a.csi_page_type);this.Wa=zC(this.Wa,a.csi_service_name);this.Dc=wC(this.Dc,a.enablecsi);a.enabled_engage_types&&(this.wb=new window.Set(a.enabled_engage_types.split(",")))};
ZC.prototype.getVideoUrl=function(a,b,c,d,e){b={list:b};c&&(e?b.time_continue=c:b.t=c);c=dD(this);d&&"www.youtube.com"==c?d="https://youtu.be/"+a:g.RC(this)?(d="https://"+c+"/fire",b.v=a):(d=this.X+"://"+c+"/watch",b.v=a,OB&&(a=g.y("yt.ads.biscotti.lastId_")||"")&&(b.ebc=a));return g.wg(d,b)};
ZC.prototype.isAd=function(){return"adunit"==this.g};
var oW={OH:"cbrand",PH:"cbr",QH:"cbrver",KI:"c",NI:"cver",MI:"ctheme",LI:"cplayer",cJ:"cmodel",fJ:"cnetwork",lJ:"cos",mJ:"cosver",tJ:"cplatform"};var pD=new window.Set("BASE_URL BASE_YT_URL abd allow_embed authuser autoplay captions_load_policy cc_load_policy cc3_module dash dashmpd docid el enable_cardio enablecastapi enablepostapi fmt_list fmt_stream_map hl hlsdvr hlsrange hlsvp html5 iurl iurlhq iurlmq length_seconds live_playback nohtml5 origin override_hl partnerid plid postid ps public rel reload_count reload_reason reportabuseurl resume start status streaminglib_load_policy streaminglib_preroll t timestamp title token ttsurl use_native_controls url_encoded_fmt_stream_map video_id videoid wmode".split(" "));g.p(vD,Uw);
vD.prototype.g=function(){if(!this.o||this.o.ka()){var a=this.B;sD(a);for(var b=["#EXTM3U","#EXT-X-INDEPENDENT-SEGMENTS"],c={},d=0,e=a.o.length;d<e;++d){var f=a.o[d];c[f.itag]=f;b.push('#EXT-X-MEDIA:TYPE=AUDIO,NAME="audio",DEFAULT=YES,AUTOSELECT=YES,GROUP-ID="'+f.itag.toString()+'",URI="'+f.url+'"')}d=0;for(e=a.g.length;d<e;++d){var k=a.g[d];f=c[k.audioItag];b.push("#EXT-X-STREAM-INF:BANDWIDTH="+(k.bitrate+f.bitrate)+',CODECS="'+(k.hp+","+f.hp)+'",RESOLUTION='+(k.width+"x"+k.height)+',AUDIO="'+f.itag.toString()+
'",CLOSED-CAPTIONS=NONE');b.push(k.url)}a="data:application/x-mpegurl;charset=utf-8,"+(0,window.encodeURIComponent)(b.join("\n"));this.o=new Tw(a)}return this.o};g.p(yD,Uw);yD.prototype.g=function(){return new Tw(Hz(this.o))};
yD.prototype.A=function(){this.o=Lz(this.o,1);return!0};g.C(AD,g.gt);AD.prototype.L=function(a,b){this.o=this.o.onload=null;var c=this.g[a];c.be[b]=!0;ED(this);var d=c.columns*c.rows;var e=b*d;c=Math.min(e+d-1,c.pl()-1);e=[e,c];this.U("l",e[0],e[1])};
AD.prototype.Y=function(){this.o&&(this.o=this.o.onload=null);AD.ea.Y.call(this)};g.h=HD.prototype;g.h.Ed=function(){return this.G};
g.h.getHeight=function(){return this.D};
g.h.pl=function(){return this.o};
g.h.isDefault=function(){return-1!=this.A.indexOf("default")};
g.h.Pb=function(a){return!!this.be[a]};
g.h.qk=function(a){var b=this.pl()-1;return g.td(0==this.B?Math.round(a*this.o/this.L):Math.round(1E3*a/this.B),0,b)};
g.h.Wn=function(){return this.o-1};
g.h.Ju=function(){return this.o?0:-1};
g.h.Ku=function(){};g.C(ID,AD);ID.prototype.A=function(a,b){for(var c=[],d=a.split("|"),e=d[0],f=1;f<d.length;f++){var k=this.D(f-1,e,d[f],b);180>k.getHeight()&&c.push(k)}return c};
ID.prototype.D=function(a,b,c,d){return new HD(a,b,c,d)};
ID.prototype.K=function(){};g.C(JD,HD);g.h=JD.prototype;g.h.pl=function(){return this.g?this.g.pg():-1};
g.h.qk=function(a){var b=this.rows*this.columns*this.H,c=-1,d=-1,e=this.g;e&&(c=e.Mb(),d=e.Te(a));return d>c-b?-1:d};
g.h.Wn=function(){return this.g?this.g.Mb():-1};
g.h.Ju=function(){return this.g?this.g.te():-1};
g.h.Ku=function(a){this.g=a?a.index:null};g.C(KD,ID);KD.prototype.A=function(a,b){return KD.ea.A.call(this,"$N|"+a,b)};
KD.prototype.D=function(a,b,c){return new JD(a,b,c,this.O.isLive)};
KD.prototype.K=function(a){for(var b=0;b<this.g.length;b++)this.g[b].Ku(a)};g.p(LD,Uw);LD.prototype.g=function(){return new Tw(this.o)};var OD={iurl:"default.jpg",iurlmq:"mqdefault.jpg",iurlhq:"hqdefault.jpg",iurlsd:"sddefault.jpg",iurlpop1:"pop1.jpg",iurlpop2:"pop2.jpg",iurlhq720:"hq720.jpg",iurlmaxres:"maxresdefault.jpg"},RD={120:"default.jpg",320:"mqdefault.jpg",480:"hqdefault.jpg",560:"pop1.jpg",640:"sddefault.jpg",854:"pop2.jpg",1280:"hq720.jpg"};g.UD.prototype.toString=function(){return this.topic};var pW=g.y("ytPubsub2Pubsub2Instance")||new g.nq;g.nq.prototype.subscribe=g.nq.prototype.subscribe;g.nq.prototype.unsubscribeByKey=g.nq.prototype.Qc;g.nq.prototype.publish=g.nq.prototype.U;g.nq.prototype.clear=g.nq.prototype.clear;g.x("ytPubsub2Pubsub2Instance",pW,void 0);var XD=g.y("ytPubsub2Pubsub2SubscribedKeys")||{};g.x("ytPubsub2Pubsub2SubscribedKeys",XD,void 0);var ZD=g.y("ytPubsub2Pubsub2TopicToKeys")||{};g.x("ytPubsub2Pubsub2TopicToKeys",ZD,void 0);var YD=g.y("ytPubsub2Pubsub2IsAsync")||{};
g.x("ytPubsub2Pubsub2IsAsync",YD,void 0);g.x("ytPubsub2Pubsub2SkipSubKey",null,void 0);var uE=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};g.C(dE,g.TD);g.C(eE,g.TD);var PE=new g.UD("aft-recorded",dE),bE=new g.UD("timing-sent",eE);jE.prototype.toString=function(){return this.region.toString()+": "+this.timing+" => "+this.url};
kE.prototype.toString=function(){return["progress",this.progress,"timing",this.timing,"area",this.Sb].join(": ")};
gE.o=.1;gE.g=/url\(["']?(http[^'"\)]+)['"]?\)/i;gE.A="mark_iframe_loaded: ";gE.B=20;var QE={vc:!0},zE={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'link[rel="import"][name="desktop_polymer_selective_initialization_home"]':"dpsihh",'link[rel="import"][name="desktop_polymer_selective_initialization_watch"]':"dpsiwh",'script[name="mobile_polymer/mobile_polymer"]':"mpj",
'link[rel="import"][name="mobile_polymer"]':"mph",'script[name="player-plasma-phone/base"]':"mpppj",'script[name="player-plasma-tablet/base"]':"mpptj",'link[rel="stylesheet"][name="mobile-polymer-player"]':"mppc","#player_css":"mbpc","#player_js":"mbpj"},KE={ad_at:"adType",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",is_nav:"isNavigation",yt_lt:"loadType",yt_ad:"isMonetized",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",yt_vis:"isVisible",docid:"videoId",plid:"videoId",fmt:"playerInfo.itag"},
ME="ap c cver ei yt_fss yt_li GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid ad_allowed ad_cpn ad_docid ba c cmt cver ncnp nr p pa paused pc prerender psc rc srt st start vpil vpni vps yt_abt yt_ad_an yt_eil yt_fn yt_fs yt_hrd yt_li yt_pft yt_pl yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),BE={ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",browse:"LATENCY_ACTION_BROWSE",channels:"LATENCY_ACTION_CHANNELS","channel.analytics":"LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",
"channel.videos":"LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",embed:"LATENCY_ACTION_EMBED",home:"LATENCY_ACTION_HOME",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",results:"LATENCY_ACTION_RESULTS",search:"LATENCY_ACTION_RESULTS",video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",watch:"LATENCY_ACTION_WATCH","watch,watch7":"LATENCY_ACTION_WATCH","watch,watch7_html5":"LATENCY_ACTION_WATCH","watch,watch7ad":"LATENCY_ACTION_WATCH","watch,watch7ad_html5":"LATENCY_ACTION_WATCH","video.analytics":"LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",
"video.comments":"LATENCY_ACTION_CREATOR_VIDEO_COMMENTS"},LE=["isNavigation","isMonetized","prerollAllowed","isRedSubscriber","isVisible"],OE=!1,mE=(0,g.A)(uE.clearResourceTimings||uE.webkitClearResourceTimings||uE.mozClearResourceTimings||uE.msClearResourceTimings||uE.oClearResourceTimings||g.qa,uE);var yF={0:"UNKNOWN",1:"OFF",2:"ON",3:"FORCED_ON"},qW={},rW=(qW.ALWAYS=1,qW.BY_REQUEST=3,qW),eF,XE;g.p(g.WE,g.gt);g.h=g.WE.prototype;g.h.ge=function(a,b){b?(this.setData(a),wF(this)&&kF(this)):(fF(this,a,!0),this.U("dataupdated"))};
g.h.setData=function(a){a=a||{};a.player_response&&(this.ob=g.bg(a.player_response));this.qe="1"!=a.hlsdvr?!1:NB()?!0:OC&&5>eP?!1:!0;this.rw=a.ad_query_id;this.adSafetyReason=a.encoded_ad_safety_reason;this.tw=a.agcid;this.yi="1"==a.infringe||"1"==a.muted;this.Jo=a.authkey;this.Lb=a.authuser;this.clientPlaybackNonce||(this.clientPlaybackNonce=a.cpn||HC());this.enableCardio=wC(this.enableCardio,a.enable_cardio);this.enableCardioBeforePlayback=wC(this.enableCardioBeforePlayback,a.enable_cardio_before_playback);
this.endSeconds=yC(this.endSeconds,a.end||a.endSeconds);this.kj=zC(this.kj,a.itct);this.Wl=wC(this.Wl,a.noiba);this.yh="1"==a.livemonitor;this.xa="1"==a.live_playback||!!a.fresca_preroll||!!a.heartbeat_preroll;this.isLiveDestination=wC(this.isLiveDestination,a.is_live_destination);this.isLiveDefaultBroadcast="1"==a.live_default_broadcast;this.isLowLatencyLiveStream="1"==a.is_low_latency_live_stream;this.isMdxPlayback=wC(this.isMdxPlayback,a.mdx);a.mdx_control_mode&&(this.mdxControlMode=bb(a.mdx_control_mode));
this.Zf=yC(this.Zf,a.reload_count);this.jn=zC(this.jn,a.reload_reason);this.dm=wC(this.dm,a.utpsa);this.cycToken=a.cyc;this.au=a.tkn;this.Ng="1"==a.innertube_thumbnail&&this.ob.videoDetails.thumbnail?SD(this.ob.videoDetails.thumbnail):QD(a);this.je=zC(this.je,a.vvt);this.mdxEnvironment=zC(this.mdxEnvironment,a.mdx_environment);this.ZB=a.osig;this.Ss=a.ptchn;this.Ts=a.oid;this.Kj=a.ptk;this.Us=a.pltype;this.playbackId=a.plid;this.eventId=a.eventid;this.osid=a.osid;this.videoMetadata=a.vm;this.fn=a.of;
this.dk=a.upt;this.playlistId=zC(this.playlistId,a.list);this.Zs=a.pyv_view_beacon_url;this.LF=a.pyv_quartile25_beacon_url;this.MF=a.pyv_quartile50_beacon_url;this.NF=a.pyv_quartile75_beacon_url;this.KF=a.pyv_quartile100_beacon_url;a.remarketing_url&&(this.remarketingUrl=a.remarketing_url);a.ppv_remarketing_url&&(this.ppvRemarketingUrl=a.ppv_remarketing_url);this.Qj=a.sdetail;!this.hn&&a.session_data&&(this.hn=g.Gr(a.session_data).feature);this.isFling=1==yC(this.isFling?1:0,a.is_fling);this.vnd=
yC(this.vnd,a.vnd);this.jl=zC(this.jl,a.force_ads_url);this.lf=zC(this.lf,a.ctrl);this.De=zC(this.De,a.ytr);this.ip=a.ytrcc;this.kt=a.ytrexp;this.ai=CC(this.ai,a.vq);this.fi=CC(this.fi,a.suggestedQuality);this.Yj=wC(this.Yj,a.ssrt);this.videoId=DC(a)||this.videoId;this.vssCredentialsToken=zC(this.vssCredentialsToken,a.vss_credentials_token);this.nk=zC(this.nk,a.vss_credentials_token_type);this.ypcGid=zC(this.ypcGid,a.ypc_gid);this.heartbeatToken=zC(this.heartbeatToken,a.heartbeat_token);this.heartbeatInterval=
yC(this.heartbeatInterval,a.heartbeat_interval);this.heartbeatRetries=yC(this.heartbeatRetries,a.heartbeat_retries);this.heartbeatSoftFail=wC(this.heartbeatSoftFail,a.heartbeat_soft_fail);this.Vl=wC(this.Vl,a.ithb);this.oq=wC(this.oq,a.strpro);a.serialized_ad_break_renderers&&(this.adModule=!0,this.ad.push("ad"));a.adaptive_fmts&&(this.adaptiveFormats=a.adaptive_fmts);this.ob&&this.ob.attestation&&this.ob.attestation.playerAttestationRenderer?this.dh=this.ob.attestation.playerAttestationRenderer.challenge:
void 0!=a.atc&&(this.dh=a.atc);a.license_info&&(this.ec=xF(a.license_info));a.allow_embed&&(this.allowEmbed="1"==a.allow_embed);a.backgroundable&&(this.backgroundable="1"==a.backgroundable);a.autonav&&(this.nj="1"==a.autonav);a.autoplay&&(this.kf="1"==a.autoplay);if(a.iv_load_policy)this.Me=xC(this.Me,a.iv_load_policy,WC);else{var b=YE(this.ob);b&&b.loadPolicy&&(this.Me=rW[b.loadPolicy])}a.cc_lang_pref&&(this.Oe=zC(a.cc_lang_pref,this.Oe));a.cc_load_policy&&(this.Pe=xC(this.Pe,a.cc_load_policy,WC));
"0"==a.dash&&(this.wp=!0);if(a.dashmpd){this.hd=g.wg(a.dashmpd,{cpn:this.clientPlaybackNonce});var b=/\/s\/([0-9A-F.]+)/,c=b.exec(this.hd);c&&(c=wr(c[1]),this.hd=this.hd.replace(b,"/signature/"+c))}a.delay&&(this.Ud=bb(a.delay));a.drm_session_id&&(this.drmSessionId=a.drm_session_id);void 0!=a.end&&(this.clipEnd=a.end);a.fair_play_cert&&window.atob&&(this.fairPlayCert=(0,window.atob)(a.fair_play_cert));a.fmt_list&&(this.fmtList=a.fmt_list);a.fresca_preroll&&this.ad.push("fresca");a.heartbeat_preroll&&
this.ad.push("heartbeat");a.idpj&&(this.vg=bb(a.idpj));a.ismb&&(this.we=bb(a.ismb));a.is_listed&&(this.isListed=wC(this.isListed,a.is_listed));a.paid_content_overlay_duration_ms&&(this.Rs=bb(a.paid_content_overlay_duration_ms));a.paid_content_overlay_text&&(this.DF=a.paid_content_overlay_text);a.url_encoded_fmt_stream_map&&(this.rf=a.url_encoded_fmt_stream_map);a.hls_formats&&(this.hlsFormats=a.hls_formats);a.hlsvp&&(this.hlsvp=a.hlsvp);a.length_seconds&&(this.lengthSeconds=bb(a.length_seconds));
a.live_chunk_readahead&&(this.liveChunkReadahead=yC(this.liveChunkReadahead,a.live_chunk_readahead));a.live_start_walltime&&(this.liveStartWalltime=bb(a.live_start_walltime));a.live_manifest_duration&&(this.im=bb(a.live_manifest_duration));a.ldpj&&(this.Ah=bb(a.ldpj));a.player_params&&(this.playerParams=a.player_params);a.relative_loudness&&(this.relativeLoudness=bb(a.relative_loudness),this.Io=Math.min(1,Math.pow(10,-this.relativeLoudness/20)));a.partnerid&&(this.jf=bb(a.partnerid));a.probe_url&&
(this.probeUrl=Ez(g.wg(a.probe_url,{cpn:this.clientPlaybackNonce})));a.profile_picture&&(this.profilePicture=zC(a.profile_picture,this.profilePicture));a.pyv_billable_url&&g.LV.test(a.pyv_billable_url)&&(this.Nj=a.pyv_billable_url);a.pyv_conv_url&&g.LV.test(a.pyv_conv_url)&&(this.Fg=a.pyv_conv_url);a.video_masthead_ad_quartile_urls&&(b=a.video_masthead_ad_quartile_urls,this.qm=b.quartile_0_url,this.Gq=b.quartile_25_url,this.Hq=b.quartile_50_url,this.Iq=b.quartile_75_url,this.Fq=b.quartile_100_url);
"1"==a.spacecast_playback&&(this.ad.push("spacecast"),this.spacecastModule=!0,this.eg.HF=!0);a.spacecast_addrs&&(this.spacecastModule=!0,b={},b.addresses=a.spacecast_addrs.split(","),b.probe=!0,a.spacecast_query_params&&(b.applianceQueryParams=a.spacecast_query_params),this.eg.init=b);0<this.startSeconds||(this.nq=this.startSeconds=yC(this.startSeconds,a.start||a.startSeconds));void 0==a.start||"1"==a.resume||this.xa||(this.clipStart=a.start);a.two_stage_token&&(this.qf=a.two_stage_token);a.url_encoded_third_party_media&&
(this.Mg=Nr(a.url_encoded_third_party_media));a.watch_ajax_token&&(this.watchAjaxToken=a.watch_ajax_token);a.ypc_module&&this.ad.push("ypc");a.ypc_clickwrap_module&&this.ad.push("ypc_clickwrap");this.hi=zC(this.hi,a.ucid);(0,g.G)("baseUrl uid oeid ieid ppe engaged subscribed".split(" "),function(b){a[b]&&(this.gd[b]=a[b])},this);
this.gd.focEnabled=wC(this.gd.focEnabled,a.focEnabled);this.gd.rmktEnabled=wC(this.gd.rmktEnabled,a.rmktEnabled);this.xb=a;fF(this,a,!1);iF(this)||(this.adaptiveFormats&&!this.xa?(lF(this,FA(mF(this,this.adaptiveFormats),this.ec,this.lengthSeconds,void 0)),CA(this.sa)&&(this.wg=!0)):this.hd&&(this.jh=!0));a.adpings&&(this.Hk=a.adpings?g.Hr(a.adpings):null);a.feature&&(this.Yf=a.feature);a.referrer&&(this.referrer=a.referrer);a.multifeed_metadata_list&&(this.yf=Nr(a.multifeed_metadata_list));this.clientScreenNonce=
zC(this.clientScreenNonce,a.csn);this.rootVeType=yC(this.rootVeType,a.root_ve_type);a.unplugged_location_info&&(this.hg=a.unplugged_location_info);a.unplugged_partner_opt_out&&(this.Pg=zC("",a.unplugged_partner_opt_out));this.xh=zC(this.xh,a.internal_ip_override);this.innertubez=zC(this.innertubez,a.innertubez)};
g.h.Lc=function(){return!this.xa||this.qe};
g.h.oy=function(a){(this.ae=a)&&"fairplay"==this.ae.g&&(this.ae.fairPlayCert=this.fairPlayCert);kF(this)};
g.h.rd=function(){return!(!this.sa||!this.sa.o)};
g.h.SC=function(a){this.ka()||(lF(this,a),this.xa&&this.sa.subscribe("refresh",this.os,this),g.qE("mrc"),CA(this.sa)&&(this.wg=!0),kF(this))};
g.h.RC=function(a){this.ka()||(this.bf=!1,this.U("dataloaderror",new g.nD("manifest.net.retryexhausted",!0,{backend:"manifest",rc:a.status})))};
g.h.os=function(){this.ka()||(this.sa.isLive||this.sa.unsubscribe("refresh",this.os,this),this.Xo())};
g.h.Xo=function(){var a=this.sa.Tw(this.hm);0<a.length&&(this.U("cuepointupdated",a),this.hm+=a.length)};
g.h.Cy=function(a){if(this.spacecastFormatMap){var b=mF(this,this.spacecastFormatMap);return zD(a,b,oF(this,a)).then(this.Wj,void 0,this).then(this.Dp,void 0,this)}return GB()};
g.h.zy=function(a){var b=iF(this)||a.Yl;if(this.sa&&!b){if(!a.D){var b=this.sa,c=this.xa;if(!b.g["0"]){var d=new Gw(0,0,0,void 0,void 0,"auto"),d=new Lw("0","",void 0,d);b.g["0"]=c?new bA(new Fz("http://www.youtube.com/videoplayback"),d,"fake"):new wA(new Fz("http://www.youtube.com/videoplayback"),d,new Qy(0,0),new Qy(0,0),0,window.NaN)}}return iC(a.O,this.sa,this.ae,!1,mD(a)).then(this.un,void 0,this)}return GB()};
g.h.Ay=function(a){if(this.hlsFormats){var b=mF(this,this.hlsFormats);return xD(a,b,this.we).then(this.Wj,void 0,this)}return GB()};
g.h.Dy=function(a){if(this.Mg&&this.uq){var b=MD(this.Mg);a=MB(a.O,b,bD(a)).then(this.Wj,void 0,this)}else a=GB();return a};
g.h.By=function(a){var b=mF(this,this.rf,this.fmtList);if(this.hlsvp){var c=this.hlsvp,d=this.we,e={cpn:this.clientPlaybackNonce};-1==c.indexOf("/ibw/")&&(e.ibw=d?String(d):"1369843");c={url:g.wg(c,e),type:"application/x-mpegURL",quality:"auto",itag:"93"};b.push(c)}return zD(a,b,oF(this,a)).then(this.Wj,void 0,this)};
g.h.un=function(a){this.Ta=a;this.Ve=this.Ve||/^r/.test(this.clientPlaybackNonce)&&!!this.Ta.videoInfos.length&&1080<this.Ta.videoInfos[0].video.o;a=this.Ta?this.Ta.audioTracks:[];a=a.concat(this.Oi);for(var b=0;b<this.fh.length;b++)for(var c=this.fh[b],d=0;d<a.length;d++){var e=a[d],f=e.Ub.id==c.audioTrackId;if(e.Ub.isDefault&&b==this.Rk||f){if(c.captionTrackIndices)for(f=0;f<c.captionTrackIndices.length;f++)e.captionTracks[f]=this.captionTracks[c.captionTrackIndices[f]];g.t(c.defaultCaptionTrackIndex)&&
(e.Zk=this.captionTracks[c.defaultCaptionTrackIndex]);g.t(c.forcedCaptionTrackIndex)&&(e.nh=this.captionTracks[c.forcedCaptionTrackIndex]);e.No=c.visibility||"UNKNOWN"}}};
g.h.Wj=function(a){this.Xh=a;this.un(new EB((0,g.H)(this.Xh,function(a){return a.jd})))};
g.h.Dp=function(){var a=wd(this.Ta.videoInfos,function(a,c){return c.video.isAccelerated&&(!a||a.height<c.video.height)?c.video:a},null);
a&&(this.fi=this.ai=a=Xw(a.quality,a.quality,!0))};
g.h.xc=function(){var a={};this.Ba&&(a.fmt=Kw(this.Ba),this.uc&&Kw(this.uc)!=Kw(this.Ba)&&(a.afmt=Kw(this.uc)));a.plid=this.playbackId;a.ei=this.eventId;a.list=this.playlistId;a.cpn=this.clientPlaybackNonce;this.videoId&&(a.v=this.videoId);this.yi&&(a.infringe=1);this.Zd&&(a.splay=1);this.xa&&(a.live=this.qe?"dvr":"live");this.kf&&(a.autoplay=1);this.Qj&&(a.sdetail=this.Qj);this.jf&&(a.partnerid=this.jf);this.osid&&(a.osid=this.osid);return a};
g.h.getStoryboardFormat=function(){if(this.ob&&this.ob.storyboards){var a=this.ob.storyboards;return(a=a.playerStoryboardSpecRenderer||a.playerLiveStoryboardSpecRenderer)&&a.spec||null}return this.xb.storyboard_spec||this.xb.live_storyboard_spec};
g.h.qh=function(){return this.sa&&!(0,window.isNaN)(this.sa.qh())?this.sa.qh():this.lengthSeconds};
g.h.Nb=function(){return this.sa&&!(0,window.isNaN)(this.sa.Nb())?this.sa.Nb():0};
g.h.sd=function(){return!this.ka()&&!(!this.videoId&&!this.Mg)};
g.h.Pb=function(){return wF(this)&&!this.jh&&!this.wg};
g.h.Et=function(){var a={format:"RAW",method:"GET",withCredentials:this.qt};this.Ig&&this.visitorData&&(a.headers={"X-Goog-Visitor-Id":this.visitorData});0<this.tl&&(a.timeout=this.tl);var b=this.ul;0<this.cd&&(b=g.Jr(b,{playerretry:this.cd}));this.Qp?yA(ns,b,a).then(yr(this.ts),yr(this.hD),this):(a.context=this,a.nb=this.ts,a.onError=this.Kl,g.Ur(b,a));g.qE("vir");g.qE("vir",void 0,"video_to_ad");this.Pp=(0,g.Ot)()};
g.h.yb=function(a,b){if(30==this.jf){var c=this.Ng["default.jpg"];return c?c:this.videoId?g.wg("//docs.google.com/vt",{id:this.videoId,authuser:this.Lb,authkey:this.Jo}):"//docs.google.com/images/doclist/cleardot.gif"}b||(b="hqdefault.jpg");return(c=this.Ng[b])||a.H||"pop1.jpg"==b||"pop2.jpg"==b||"sddefault.jpg"==b||"hq720.jpg"==b||"maxresdefault.jpg"==b?c:eD(a,this.videoId,b)};
g.h.ts=function(a){if(!this.ka()){var b=a.responseText;if(b){this.bf=!1;var c=g.Hr(b);this.qq&&qD(c);"fail"==c.status?this.U("onStatusFail",c):(g.qE("virc"),g.qE("virc",void 0,"video_to_ad"),(0,g.G)(g.sW,function(a){a in this.xb&&(c[a]=this.xb[a])},this),this.setData(c),wF(this)?kF(this):this.U("dataloaderror",new g.nD("manifest.net.retryexhausted",!0,{successButUnplayable:"1"})))}else this.Kl(a)}};
g.h.hD=function(a){this.Kl(a.g)};
g.h.Kl=function(a){if(!this.ka()){var b=a?a.status:-1;a=this.cd>=this.ln||400==b;var c=200<b?"manifest.net.badstatus":"manifest.net.connect",d=(((0,g.Ot)()-this.Pp)/1E3).toFixed(3),b={backend:"gvi",rc:b,rt:d};a&&this.ln?(c="manifest.net.retryexhausted",b.urllen=this.ul.length):a||(this.cd++,this.Dt.start());this.U("dataloaderror",new g.nD(c,a,b))}};
g.h.getPlayerResponse=function(){return this.ob};
g.h.getPlaylistId=function(){return null};
g.h.zb=function(){return this};
g.h.dj=function(a){return a.getVideoUrl(this.videoId)};
g.h.We=function(){return!!this.sa&&this.sa.We()};
g.h.xe=function(){return!!this.sa&&this.sa.xe()};
g.h.Xd=function(){return!!this.sa&&this.sa.Xd()};
g.h.Of=function(){return!!this.sa&&this.sa.Of()};
g.sW="ypc_buy_url ypc_full_video_message ypc_item_thumbnail ypc_item_title ypc_item_url ypc_module ypc_offer_button_text ypc_offer_description ypc_offer_headline ypc_offer_id ypc_offer_type ypc_overlay_timeout ypc_preview ypc_signin_message ypc_vid".split(" ");eF="author cc_asr cc_load_policy iv_load_policy iv_new_window keywords oauth_token requires_purchase rvs subscribed title ttsurl ypc_buy_url ypc_full_video_length ypc_item_thumbnail ypc_item_title ypc_item_url ypc_offer_button_text ypc_offer_description ypc_offer_headline ypc_offer_id ypc_preview ypc_price_string ypc_video_rental_bar_text".split(" ");
XE=["annotations","captions","storyboard"];IF.prototype.update=function(){var a=this.g.o()||0,b=g.HF(this.g);if(a!=this.o||MF(this,a,b)){if(a<this.o||a-this.o>b-this.D+2||MF(this,a,b)||NF(this,b))g.JF(this),this.B=a;this.D=b;this.o=a}};OF.prototype.o=function(){return{ps:this.g.o,el:this.g.g}};
OF.prototype.send=function(){if(!this.A){var a=this.o();a=g.wg(this.g.baseYtUrl+"set_awesome",a);this.g.La&&this.videoData.visitorData&&Lr(a)?g.Ur(a,{headers:{"X-Goog-Visitor-Id":this.videoData.visitorData}}):g.is(a);this.A=!0}};g.C(PF,OF);
PF.prototype.o=function(){var a=PF.ea.o.call(this);g.Ea(a,this.g.B);g.Ea(a,{html5:"1",video_id:this.videoData.videoId,eurl:this.g.oa,framer:this.g.Nk,list:this.videoData.Cn||this.videoData.playlistId,w:g.td(this.videoData.Td/this.videoData.lengthSeconds,0,1),l:this.videoData.lengthSeconds,plid:this.videoData.playbackId,ei:this.videoData.eventId,access_token:this.videoData.oauthToken,tpmt:KF(this.B),cpn:this.videoData.clientPlaybackNonce,feature:this.videoData.Yf});this.videoData.adFormat&&(a.adformat=
this.videoData.adFormat);var b;(b=(b=this.videoData.referrer)?b.slice(0,128):"")&&(a.referrer=b);if(this.g.experiments.g("legacy_autoplay_flag")?this.g.da:this.videoData.kf)a.autoplay="1";this.g.Lb&&(a.authuser=this.g.Lb);this.g.pageId&&(a.pageid=this.g.pageId);this.videoData.Zd&&(a.splay="1");this.videoData.subscribed&&(a.subscribed=this.videoData.subscribed);g.Ea(a,PF.ea.o.call(this));g.Ea(a,this.g.B);return a};var cL={FH:"YTP_ERROR_ALREADY_PINNED_ON_A_DEVICE",AUTHENTICATION_EXPIRED:"ERROR_AUTHENTICATION_EXPIRED",GH:"ERROR_AUTHENTICATION_MALFORMED",HH:"ERROR_AUTHENTICATION_MISSING",LH:"ERROR_BAD_REQUEST",SH:"YTP_ERROR_CANNOT_ACTIVATE_RENTAL",ZH:"ERROR_CGI_PARAMS_MALFORMED",aI:"ERROR_CGI_PARAMS_MISSING",lI:"YTP_DEVICE_FALLBACK",qI:"YTP_ERROR_LICENSE",rI:"YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK_FLASH",tI:"YTP_ERROR_FORMAT_UNAVALIABLE",vI:"YTP_ERROR_GEO_FAILURE",GI:"YTP_ERROR_GENERIC_WITHOUT_LINK",II:"YTP_HTML5_PROTECTED_FLASH_FALLBACK",
HI:"YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK",OI:"YTP_ERROR_INVALID_DRM_MESSAGE",UI:"LEARN_MORE",hJ:"YTP_ERROR_NOT_SIGNED_IN",AJ:"YTP_ERROR_PURCHASE_NOT_FOUND",BJ:"YTP_ERROR_PURCHASE_REFUNDED",EJ:"YTP_ERROR_RENTAL_EXPIRED",UH:"YTP_ERROR_CAST_SESSION_DEVICE_MISMATCHED",VH:"YTP_ERROR_CAST_SESSION_VIDEO_MISMATCHED",XH:"YTP_ERROR_CAST_TOKEN_FAILED",WH:"YTP_ERROR_CAST_TOKEN_EXPIRED",YH:"YTP_ERROR_CAST_TOKEN_MALFORMED",JJ:"YTP_ERROR_SERVER_ERROR",TJ:"YTP_ERROR_STOPPED_BY_ANOTHER_PLAYBACK",XJ:"YTP_ERROR_STREAM_LICENSE_NOT_FOUND",
UJ:"YTP_ERROR_STREAMING_DEVICES_QUOTA_PER_24H_EXCEEDED",VJ:"YTP_ERROR_STREAMING_NOT_ALLOWED",WJ:"YTP_ERROR_STREAMING_UNAVAILABLE",FJ:"YTP_ERROR_RETRYABLE_ERROR",fK:"YTP_ERROR_TOO_MANY_STREAMS_PER_USER",eK:"YTP_ERROR_TOO_MANY_STREAMS_PER_ENTITLEMENT",lK:"YTP_ERROR_UNSUPPORTED_DEVICE",mK:"YTP_ERROR_UNUSUAL_ACTIVITY",nK:"YTP_ERROR_VIDEO_FORBIDDEN",oK:"YTP_ERROR_VIDEO_NOT_FOUND"},QF={300:"YTP_ERROR_STREAMING_DEVICES_QUOTA_PER_24H_EXCEEDED",301:"YTP_ERROR_ALREADY_PINNED_ON_A_DEVICE",303:"YTP_ERROR_STOPPED_BY_ANOTHER_PLAYBACK",
304:"YTP_ERROR_TOO_MANY_STREAMS_PER_USER",305:"YTP_ERROR_TOO_MANY_STREAMS_PER_ENTITLEMENT",400:"YTP_ERROR_VIDEO_NOT_FOUND",401:"YTP_ERROR_GEO_FAILURE",402:"YTP_ERROR_STREAMING_NOT_ALLOWED",403:"YTP_ERROR_UNSUPPORTED_DEVICE",405:"YTP_ERROR_VIDEO_FORBIDDEN",500:"YTP_ERROR_PURCHASE_NOT_FOUND",501:"YTP_ERROR_RENTAL_EXPIRED",502:"YTP_ERROR_PURCHASE_REFUNDED",5E3:"ERROR_BAD_REQUEST",5001:"ERROR_CGI_PARAMS_MISSING",5002:"ERROR_CGI_PARAMS_MALFORMED",5100:"ERROR_AUTHENTICATION_MISSING",5101:"ERROR_AUTHENTICATION_MALFORMED",
5102:"ERROR_AUTHENTICATION_EXPIRED",5200:"YTP_ERROR_CAST_TOKEN_MALFORMED",5201:"YTP_ERROR_CAST_TOKEN_EXPIRED",5202:"YTP_ERROR_CAST_TOKEN_FAILED",5203:"YTP_ERROR_CAST_SESSION_VIDEO_MISMATCHED",5204:"YTP_ERROR_CAST_SESSION_DEVICE_MISMATCHED",6E3:"YTP_ERROR_INVALID_DRM_MESSAGE",7E3:"YTP_ERROR_SERVER_ERROR",8E3:"YTP_ERROR_RETRYABLE_ERROR"};var PK=ff(function(){var a="";try{var b=g.Yd("CANVAS").getContext("webgl");b&&(b.getExtension("WEBGL_debug_renderer_info"),a=b.getParameter(37446),a=a.replace(/[ :]/g,"_"))}catch(c){}return a});g.UF.prototype.Ab=function(){return g.T(this,8)&&!g.T(this,64)&&!g.T(this,2)};
g.UF.prototype.isError=function(){return g.T(this,128)};gG.prototype.isEmpty=function(){return this.endTime==this.startTime};var kG={other:1,none:2,wifi:3,cellular:7};g.p(nG,g.I);
nG.prototype.C=function(a){if(!this.ka()&&(a=0<=a?a:g.HF(this.g),"PL"==this.A&&(!g.cc(this.o)||a>=this.B+30)&&(g.mG(this,a,"vps",[this.A]),this.B=a),!g.cc(this.o)&&!this.W)){pG(this,a);var b=a,c=this.g.G(),d=c.droppedVideoFrames,e=d-this.da;if(d>c.totalVideoFrames||5E3<e)this.onError("html5.badframedropcount","df."+d+";tf."+c.totalVideoFrames);else 0<e&&g.mG(this,b,"df",[e]);this.da=d;!this.g.g.experiments.g("disable_webgl_reporting")&&0<this.D&&(g.mG(this,a,"glf",[this.D]),this.D=0);a=qG(this);g.ic(a,
this.g.g.B);a=g.wg(this.g.g.Yg,a);for(var f in this.o)null==this.o[f]?g.xr(Error("Stats report key has invalid value: "+f),"WARNING"):a+="&"+f+"="+this.o[f].join(",");rG(this,a);this.o={}}};
nG.prototype.wa=function(){this.g.videoData.ae&&xG(this,"drm-"+this.g.videoData.ae.g)};
nG.prototype.onError=function(a,b){var c=g.HF(this.g);tG(this,c,a,b);pG(this,c);sG(this)};
nG.prototype.Y=function(){g.I.prototype.Y.call(this);g.Cr(this.ba)};
var tW={},vG=(tW[5]="N",tW[-1]="N",tW[3]="B",tW[0]="EN",tW[2]="PA",tW[1]="PL",tW);yG.prototype.send=function(a){if(!this.aa){var b=AG(this),b=g.wg(this.Xa,b);if(this.H)this.T&&(a={method:"POST",qb:{atr:this.T}},this.Ig&&this.visitorData&&(a.headers={"X-Goog-Visitor-Id":this.visitorData}),g.Ur(b,a));else{if(this.H)var c=null;else{c=this.D&&Kr();var d=this.Ig&&!!this.visitorData;if(c||d){var e={};c&&(e.Authorization="Bearer "+this.D);d&&(e["X-Goog-Visitor-Id"]=this.visitorData);c={headers:e,withCredentials:!0,Nc:a}}else c=null}c?g.Ur(b,c):g.is(b,a)}this.aa=!0}};
yG.prototype.g=function(a){void 0==a&&(a=window.NaN);return(1*a.toFixed(3)).toString()};g.C(BG,g.I);g.h=BG.prototype;g.h.UC=function(a,b){if(!this.ka()){this.G=window.NaN;this.A.update();var c=LF(this.A),d=EG(this,c);b&&(d.C=a);var e=400<this.L;!(1<c.length)&&c[0].isEmpty()||e||(d.o=CG(this,!0,a));d.send();this.L++}};
g.h.onError=function(a,b){if(!this.ka())this.o.onError(a,b)};
g.h.Uj=function(a){var b=this.g.g,c=this.g.videoData,d={ns:b.Va,el:b.g,eurl:b.oa,fmt:c.Ba?Kw(c.Ba):0,html5:1,list:c.playlistId,plid:c.playbackId,cpn:c.clientPlaybackNonce,ei:c.eventId,ps:b.o,noflv:1,st:this.g.o(),video_id:c.videoId,metric:a};if(b.experiments.g("legacy_autoplay_flag")?b.da:c.kf)d.autoplay="1";"heartbeat"==a&&(d.tpmt=KF(this.A));g.Ea(d,b.B);GG(this,g.wg("//www.youtube.com/live_204",d))};
g.h.ye=function(){};
g.h.Y=function(){BG.ea.Y.call(this);g.Dr(this.G);this.G=window.NaN;var a=this.A;g.Cr(a.G);a.G=window.NaN};g.p(LG,kx);g.h=LG.prototype;g.h.Ha=function(){return ML(this.app)};
g.h.Nq=function(a,b,c,d,e){return JT(this.app,a,b,c,d,e)};
g.h.lz=function(a,b,c){var d=this.app.V.L;b={Hi:b,Dn:c};if(!d.Ia[a]&&(b.Hi||b.Dn)){c=d.Ia;var e=b;Object.isFrozen&&!Object.isFrozen(b)&&(e=Object.create(b),Object.freeze(e));c[a]=e;d.U("vast_info_card_add",a)}};
g.h.mz=function(a,b){DT(this.app,a,b||this.playerType)};
g.h.Eh=function(a){return qT(this.app,a)};
g.h.Jh=function(a,b,c,d){yT(this.app,a,c||this.playerType,b,d)};
g.h.Cm=function(a,b,c){var d=this.app;b=b||this.playerType||1;c=c||!1;d.wa.get(b+DC(a))||(a=new g.WE(a),AT(d,a,b,c))};
g.h.Cg=function(a,b){HT(this.app,a,b)};
g.h.Gh=function(a){IT(this.app,a)};
g.h.td=function(a,b,c){QT(this.app,this.app.getCurrentTime()+a,b,c,this.playerType)};
g.h.Hz=function(a){if(a){var b=this.getPlaylistId();if(!b||b==a.list){var c=a.video;(b=this.app.B)?this.app.K.isFullscreen()&&((c=c[b.Za])&&c.encrypted_id!=b.zb().videoId||(a.index=b.Za)):eT(this.app,{list:a.list,index:a.index,playlist_length:c.length});$G(this.app.B,a);this.va("onPlaylistUpdate")}}else a=this.app,fT(a),a.g.va("onPlaylistUpdate")};
g.h.Gz=function(){SV()};
g.h.Iz=function(a,b){var c=g.X(this.app,this.playerType||1);c&&c.g.ge(a,b)};
g.h.getPlayerResponse=function(){var a=g.X(this.app,this.playerType);return a?a.g.getPlayerResponse():null};
g.h.getStoryboardFormat=function(){return $S(this.app).getStoryboardFormat()};
g.h.pz=function(){var a=this.app.V;return{Tb:a.Tb,gb:a.gb}};
g.h.ca=function(){var a=kx.prototype.ca.call(this),b=g.X(this.app,this.playerType);b&&(b=b.g,a.backgroundable=b.backgroundable,a.cpn=b.clientPlaybackNonce,a.isLive=b.xa,a.itct=b.kj,a.paidContentOverlayText=qF(b),a.paidContentOverlayDurationMs=rF(b));return a};
g.h.getCurrentTime=function(a){return a?this.app.getCurrentTime(a):kx.prototype.getCurrentTime.call(this)};
g.h.getDuration=function(a){return a?this.app.getDuration(a):kx.prototype.getDuration.call(this)};
g.h.df=function(){if(3==this.Ha())return g.NL(this.app.A).eA();var a=$S(this.app),b=g.X(this.app),c=this.app.Lc(),d=a.clipEnd,a=a.clipStart,e=this.getCurrentTime(),f=this.getDuration(),k=AL(b),l=b.isPeggedToLive(),m=g.X(this.app,void 0),n;m?(m.o&&(n=ty(m.o)),n=0<=n?n:m.getCurrentTime()):n=0;return{allowSeeking:c,clipEnd:d,clipStart:a,current:e,displayedStart:-1,duration:f,ingestionTime:k,isPeggedToLive:l,loaded:n,seekableEnd:yL(b,!0),seekableStart:b.Nb()}};
g.h.ym=function(a){return bT(this.app,a)};
g.h.zm=function(a){return!!Zx().canPlayType(a)};
g.h.Yq=function(a,b){var c=g.X(this.app,this.playerType);if(c){b=b||a;var d=Xw(a,b,!0);g.ju("yt-player-quality",b,2592E3);tL(c,"m",d)}};
g.h.oz=function(){return uF($S(this.app),this.app.getCurrentTime())};
g.h.Sf=function(a){var b=this.app,c=g.X(b,this.playerType);c&&b.V.wb.has(a.toString())&&c.C&&(b=DG(c.C,"engage"),b.G=a,b.send(void 0))};
g.h.Kh=function(a,b,c){var d=this.app.A.o;d&&d.ki()&&d.Un(a,b,c)};
g.h.sz=function(a,b){var c=this.app.A.D;c&&c.ha&&vQ(c.ha,a,b)};
g.h.cf=function(){var a=g.X(this.app,this.playerType);return a?a.Sn():$S(this.app).Oi};
g.h.Em=function(a){3==this.Ha()&&g.NL(this.app.A).Mh("control_set_audio_track",a);var b=g.X(this.app,this.playerType),c;if(c=b)if(c=!b.ka()&&!g.T(b.A,128)&&!!b.g.Ta.g){c=b.B;if(c.ka())a=!0;else{var d=c.G;a=a.id;d.H="m";d.B=d.G.g[a];d.T=d.B;c.U("audioformatchange",new hH(d.T,d.o,d.H));c.o&&!c.o.g.remove?a=!1:(rJ(c),BI(c.g),BI(c.B),GJ(c),a=!0)}c=!a}c&&(qL(b),oL(b))};
g.h.Am=function(){var a=g.X(this.app,this.playerType);return a.g.Ta?a.g.Ta.audioTracks:[]};
g.h.qz=function(){var a=g.X(this.app,this.playerType);return a&&a.g.Ba?g.ax(vK(a.za,a.g)):"unknown"};
g.h.Bz=function(a,b){RT(this.app,a,b)};
g.h.nz=function(){var a=this.app.A.G;a&&a.Qw()};
g.h.Ez=function(){var a=this.app.A.D;a&&(a.Ea=!1,a.Fe())};
g.h.uz=function(){var a=this.app.A.D;a&&(a.Ea=!0,a.Fe())};
g.h.Ih=function(){return this.app.Bh()};
g.h.Dz=function(){return!0};
g.h.Xq=function(a){a=g.TM(this.app.G,a);return{left:a.left,top:a.top,width:a.width,height:a.height}};
g.h.Az=function(a){this.app.V.enableSafetyMode=a};
g.h.xz=function(a){Ks();OT(this.app,a?2:0)};
g.h.Qk=function(){var a=this.app.A.A;a&&a.o&&a.destroy();(a=g.X(this.app))&&xL(a);(a=this.app.A.K)&&a.hy()&&g.LL(this.app.K,!0)};
g.h.ze=function(){var a=this.app.V;!a.experiments.g("disable_new_pause_state3")&&gD(a)&&"blazer"!=a.o?this.Qk():kx.prototype.ze.call(this)};
g.h.Rp=function(){return CL(g.X(this.app,this.playerType),!0)};
g.h.vj=function(a){this.app.A.g.Ln(a,!0)};
g.h.Rf=function(){var a=this.app.A.g;return a?a.rl():null};
g.h.Dm=function(){this.app.A.g.vt()};
g.h.vz=function(){var a=g.X(this.app,this.playerType);if(!a)return!1;a=a.g;return!!a&&a.sd()&&!!a.Ba&&a.Ba.video.isAccelerated&&a.Ba.video.A};
g.h.isPeggedToLive=function(){return this.app.isPeggedToLive()};
g.h.zz=function(a){var b=this.app;b.V.Cb=a;b.g.U("minimized")};
g.h.Ch=function(a){return pT(this.app,a)};
g.h.rz=function(){var a=this.app.A.B;if(!a)return{};a=a.ir();return"Spherical"!=a.shader&&"Spherical3D"!=a.shader?{}:{yaw:g.ud(180*(a.yaw||0)/Math.PI,360),pitch:180*(a.pitch||0)/Math.PI}};
g.h.Cz=function(a){var b=this.app.A.B;if(b){var c={shader:"Spherical"};g.pa(a.yaw)&&!(0,window.isNaN)(a.yaw)&&(c.yaw=g.ud(a.yaw,360)*Math.PI/180);g.pa(a.pitch)&&!(0,window.isNaN)(a.pitch)&&(c.pitch=g.td(a.pitch,-90,90)*Math.PI/180);b.jr(c)}};
g.h.wz=function(a){var b=this.app;b.V.Ne=a;b.C&&(a=b.C,a.C&&g.JF(a.C.A),b.V.K&&TT(b))};
g.h.U=function(a,b){for(var c=1;c<arguments.length;++c);this.app.V.gb&&("videodatachange"==a||"audiotrackchanged"==a||"resize"==a||"cardstatechange"==a)&&this.app.aa.U.apply(this.app.aa,arguments);this.app.W.U.apply(this.app.W,arguments)};
g.h.va=function(a,b){this.app.aa.U.apply(this.app.aa,arguments);this.app.W.U.apply(this.app.W,arguments)};
g.h.Bm=function(a){this.U("aduxclicked",a)};
g.h.Fz=function(){this.va("settingsmenutoggle")};
g.h.setVolume=function(a,b){nx(this,a,b)};
g.h.mute=function(a){ox(this,a)};
g.h.Ae=function(a){px(this,a)};
g.h.iy=function(){return this.app.oa};
g.h.Fh=function(a){if("annotations_module"==a){var b=this.app.A.o;b&&!b.loaded&&b.load()}kx.prototype.Fh.call(this,a)};
g.h.tj=function(a){if("annotations_module"==a){var b=this.app.A.o;b&&b.loaded&&b.unload()}kx.prototype.tj.call(this,a)};
g.h.Ac=function(a,b,c){if(!b)return null;var d=this.app.A;switch(a){case "ad":return(a=d.A)&&a.D&&a.D(b,c);case "remote":return(a=g.NL(d))&&a.dA(b,c);case "unplugged":return(a=g.W(d.R).Ea?d.C:null)&&a.A(b,c);case "spacecast":return(c=d.W)&&c.C(b);case "annotations_module":return(a=d.o)&&a.iH(b,c);case "creatorendscreen":return(a=d.H)&&a.aa(b,c)}return kx.prototype.Ac.call(this,a,b,c)};
g.h.Qf=function(a){var b=this.app.A;switch(a){case "ad":return(b=b.A)&&b.G&&"addata adstate breakscount displaystate getContentVideoData loadedadbreaks midrollfreqcap".split(" ");case "remote":return g.NL(b)&&["casting","receivers","currentReceiver","quickCast"];case "annotations_module":return(b=b.o)&&b.jH();case "unplugged":return(g.W(b.R).Ea?b.C:null)&&["settingsMenuShown","hideSettingsMenu","showSettingsMenu","toggleSettingsMenu"]}return a?kx.prototype.Qf.call(this,a):(a=kx.prototype.Qf.call(this),
b.A&&a.push("ad"),g.NL(b)&&a.push("remote"),b.o&&a.push("annotations_module"),b.H&&a.push("creatorendscreen"),g.W(b.R).Ea&&b.C&&a.push("unplugged"),a)};
g.h.uj=function(){var a=this.app.G.Na();return{width:a.width,height:a.height}};
g.h.yz=function(a){var b=this.app.G;b.H=BC(a,!0);b.ke()};
g.h.KG=function(){var a=this.app.A.D;a&&a.B.Eb(2,!0)};MG.prototype.reset=function(){oE(this.g)};
MG.prototype.o=function(a,b){g.qE(a,b,this.g)};
MG.prototype.info=function(a,b){g.rE(a,b,this.g)};OG.prototype.toString=function(){return this.type+this.id};g.C(g.VG,g.gt);g.h=g.VG.prototype;g.h.hasNext=function(a){return this.loop||!!a||this.Za+1<this.af};
g.h.Yd=function(a){return this.loop||!!a||0<=this.Za-1};
g.h.zb=function(a,b){var c=void 0!=a?a:this.Za,c=this.Ia&&c in this.Ia?this.Ia[this.Oc[c]]:null,d=null;c&&(b&&(c.autoplay="1"),d=new g.WE(c),d.startSeconds=this.startSeconds||d.clipStart||0,this.listId&&(d.playlistId=this.listId.toString()));return d};
g.h.setShuffle=function(a){this.Qt=a;a=this.Oc&&null!=this.Oc[this.Za]?this.Oc[this.Za]:this.Za;this.Oc=[];for(var b=0;b<this.Ia.length;b++)this.Oc.push(b);this.Za=a;this.rj++;if(this.Qt){a=this.Oc[this.Za];for(b=1;b<this.Oc.length;b++){var c=Math.floor(Math.random()*(b+1)),d=this.Oc[b];this.Oc[b]=this.Oc[c];this.Oc[c]=d}for(b=0;b<this.Oc.length;b++)this.Oc[b]==a&&(this.Za=b);this.rj++}this.U("shuffle")};
g.h.yb=function(a,b){b=b||"hqdefault.jpg";var c=this.Ng[b];if(c||a.H||"sddefault.jpg"==b||"hq720.jpg"==b||"maxresdefault.jpg"==b)return c;if(this.Xt.length)return eD(a,this.Xt[0],b)};
g.h.getLength=function(){return this.af};
g.h.mh=function(a){if(a&&(a=a.videoId,!this.Ia[this.Za]||this.Ia[this.Za].video_id!=a))for(var b=0;b<this.Ia.length;b++)if(this.Ia[b].video_id==a){this.Za=b;break}};
g.h.onReady=function(a){this.Yh=a;this.be&&g.Fr(this.Yh,0)};
g.h.getPlaylistId=function(){return this.listId?this.listId.toString():null};
g.h.dj=function(a){return a.getVideoUrl(this.zb().videoId,this.getPlaylistId())};
g.h.Y=function(){this.Yh=null;g.ve(this.Ia);g.VG.ea.Y.call(this)};g.C(g.bH,g.I);g.h=g.bH.prototype;g.h.ra=function(a,b){g.t(b)?ce(a,this.element,b):a.appendChild(this.element)};
g.h.detach=function(){g.de(this.element)};
g.h.update=function(a){for(var b in a)this.pa(b,a[b])};
g.h.pa=function(a,b){var c=this.La["{{"+a+"}}"];c&&dH(this,c[0],c[1],b)};
g.h.Y=function(){this.ma={};this.La={};this.detach();g.bH.ea.Y.call(this)};
g.bH.o=1;g.bH.g=function(){return"ytp-svg-"+g.bH.o++};g.C(g.U,g.bH);g.h=g.U.prototype;g.h.Fb=function(a,b){this.pa(b||"content",a)};
g.h.show=function(){this.g||(g.eH(this.element,""),this.g=!0)};
g.h.hide=function(){this.g&&(g.eH(this.element,"none"),this.g=!1)};
g.h.rb=function(a){a?this.show():this.hide()};
g.h.ga=function(a,b,c){return this.N(this.element,a,b,c)};
g.h.N=function(a,b,c,d){c=(0,g.A)(c,d||this);d={target:a,type:b,listener:c};this.aa.push(d);a.addEventListener(b,c);return d};
g.h.Qa=function(a){for(var b=0;b<this.aa.length;b++)if(this.aa[b]==a){a=this.aa.splice(b,1)[0];a.target.removeEventListener(a.type,a.listener);break}};
g.h.focus=function(){g.ne(this.element);this.element.focus()};
g.h.Y=function(){for(;this.aa.length;){var a=this.aa.pop();a.target.removeEventListener(a.type,a.listener)}g.U.ea.Y.call(this)};iH.prototype.forEach=function(a){for(var b=this.o+1;b<this.g.length;b++)a(this.g[b]||0);for(b=0;b<=this.o;b++)a(this.g[b]||0)};
iH.prototype.ub=function(){var a=[];this.forEach((0,g.A)(a.push,a));return a};
iH.prototype.clear=function(){for(var a=this.g.length,b=0;b<a;b++)this.g[b]=0;this.o=this.g.length-1};pH.prototype.reset=function(){this.L=rH(this);this.G=window.NaN;this.K=0;this.g=new oH(0,0,null);this.B=8;this.C=[];this.A=this.D=window.NaN;this.o=this.H=0};
pH.prototype.process=function(a){if(this.C.length){if(uH(this)&&this.C.length+a.byteLength<this.B)return vH(this,a,0);var b=this.C.length,c=new window.Uint8Array(b+a.byteLength);c.set(this.C,0);c.set(new window.Uint8Array(a.buffer,a.byteOffset,a.byteLength),b);this.C=[];a=new window.DataView(c.buffer)}for(b=0;b<a.byteLength;){var c=a.byteLength-b,d=window.NaN;if(uH(this)){if(c<this.B)return vH(this,a,b);switch(this.g.type){case 0:case 1836019574:case 1836019558:d=sH(this,a,b);break;case 1953653094:c=
a;d=b;this.H||(this.H=Kx(wH(this,c,d),this.o));d=sH(this,c,d);break;case 1836476516:this.o=cW(wH(this,a,b));tH(this);d=this.g.size-8;break;case 1952867444:c=a;d=b;(0,window.isNaN)(this.A)||((0,window.isNaN)(this.G)&&(this.G=this.A),this.O&&Rx(wH(this,c,d),this.A),this.A+=this.H,this.K+=this.H);d=this.g.size-8;break;case 1936286840:c=wH(this,a,b),d=Ux(c),this.o=Tx(c),tH(this),this.H=d,d=this.g.size-8}}else d=Math.min(this.B,c);this.g.offset+=d;this.B-=d;b+=d;if(0==this.B){for(;0!=this.g.type&&this.g.offset==
this.g.size&&this.g.g;)this.g.g.offset+=this.g.size,this.g=this.g.g;switch(this.g.type){case 0:case 1836019574:case 1836019558:case 1953653094:this.B=8;break;default:this.B=this.g.size-8}}}return a};g.p(xH,g.gt);var TH=0;g.h=UH.prototype;g.h.RF=function(a){this.status=a.status;a.ok?(this.C=a.body.getReader(),this.D?(this.H=a.headers,this.W(),this.B=new window.Uint8Array(VH(this)),YH(this)):this.C.cancel("Cancelling")):this.xj()};
g.h.CC=function(a){if(this.D)if((0,g.F)(),a.done)this.C=null,this.xj();else{a=a.value;this.D({timeStamp:(0,g.F)(),loaded:this.A});this.A+=a.length;var b=a.length>=Math.max(VH(this)/2,16384),c=a.length+this.g>VH(this);this.L?((b||c)&&0!==this.g&&WH(this),b?this.o.push(a):XH(this,a)):(XH(this,a),16384<=this.A&&WH(this));YH(this)}};
g.h.xj=function(){this.D&&(this.G=!0,this.O())};
g.h.qE=function(){this.K=!0;this.xj()};
g.h.ff=function(a){return this.H.get(a)};
g.h.iq=function(){return!!this.H};
g.h.kl=function(){return this.A};
g.h.ll=function(){return+this.ff("content-length")};
g.h.gq=function(){return 200<=this.status&&300>this.status&&!!this.A};
g.h.Zl=function(){return!!this.o.length||this.G&&0<this.g};
g.h.Ot=function(){this.o.length||WH(this);return this.o.shift()};
g.h.Zq=function(){this.o.length||WH(this);return this.o[0]};
g.h.abort=function(){this.C&&this.C.cancel("Cancelling");this.O=this.D=null};
g.h.Ut=function(){return!0};
g.h.jt=function(){return this.K};g.h=ZH.prototype;g.h.Lz=function(a){if(!this.o){this.status=this.g.status;try{this.response=this.g.response}catch(b){}this.A=!0;this.B(a)}};
g.h.Nz=function(){2==this.g.readyState&&this.C()};
g.h.Mz=function(a){this.o||(this.status=this.g.status,this.D(a))};
g.h.iq=function(){return 2<=this.g.readyState};
g.h.ff=function(a){try{return this.g.getResponseHeader(a)}catch(b){return g.xr(b),""}};
g.h.ll=function(){return+this.ff("content-length")};
g.h.kl=function(){return this.response.byteLength};
g.h.gq=function(){return 200<=this.status&&300>this.status&&!!this.response&&!!this.response.byteLength};
g.h.Zl=function(){return this.A&&!!this.response&&!!this.response.byteLength};
g.h.Ot=function(){var a=this.response;this.response=null;return new window.Uint8Array(a)};
g.h.Zq=function(){return new window.Uint8Array(this.response)};
g.h.abort=function(){this.o=!0;this.g.abort()};
g.h.Ut=function(){return!1};
g.h.jt=function(){return!1};g.h=$H.prototype;g.h.kd=function(){return this.D};
g.h.start=function(a){var b=1==this.state,c=bI(this);1==this.state||5==this.state||c&&gI(this);hI(this,2);if("fallback"==c||"fastfallback"==c)c=this.info.o,this.H<=c.B||(c.A++,c.B=mW-1),this.cd=0;else if("retry"==c){this.cd++;b=1E4*(.5+Math.random());1==this.cd&&(b=2E3);g.Fr((0,g.A)(this.Gm,this,a),b);return}c=0;this.B.C&&1<this.info.o.g&&(c=1E3*Math.pow(1.6,this.info.o.g-1));b&&!c?this.Gm(a):g.Fr((0,g.A)(this.Gm,this,a),c)};
g.h.Gm=function(a){if(!this.ka()){this.H=mW++;if(this.o){var b=this.info,c=this.o.g;this.K=b.range?new Qy(b.range.start+c,b.range.end):Sy(c,this.o.length);this.A=g.Yz(this.info,this.B,this.X,this.K)}else this.K=this.info.range,this.A=g.Yz(this.info,this.B,this.X);this.A.set("rn",this.H.toString());this.cd&&this.A.set("playerretry",this.cd.toString());0<=a&&this.A.set("rbuf",(1E3*a).toFixed().toString());a=g.Tz(this.A);try{var d=(0,g.A)(this.wF,this),e=(0,g.A)(this.zF,this),f=(0,g.A)(this.yF,this),
k=(0,g.A)(this.xF,this);this.g=this.B.W&&"function"==typeof window.fetch&&window.ReadableStream&&iI(this)?new UH(a,e,f,d,k):new ZH(a,e,f,d,k)}catch(l){this.D="net.ssl",hI(this,7)}0<this.B.O&&(this.G=g.Fr((0,g.A)(this.ot,this),this.B.O))}};
g.h.zF=function(){this.T=0;var a=fI(this);(0,g.Ot)();a.o+=1;a=this.timing;a.o=(0,g.F)();a.D=a.o;a.K=a.o;a.A=0;a.W=!1;a.X=!1;a.C=0;a.G=CB(a.g);SH(a);a.L=(a.O-a.o)/1E3};
g.h.yF=function(a){if(!this.ka()){this.C=this.g.status;nI(this,!1);var b=this.timing,c=a.timeStamp;a=a.loaded;c=c>b.o&&4E12>c?c:(0,g.F)();b.K=c;50>c-b.D&&(QH(b)||!b.g.policy.L)||PH(b,c,a);b=this.timing;b.A>b.fa&&b.A>b.g.policy.g&&4>this.state?hI(this,4):kI(this)&&mI(this)&&hI(this,Math.max(3,this.state))}};
g.h.xF=function(){if(!this.ka()&&!this.O&&this.g.iq()&&this.g.ff("X-Walltime-Ms")){var a=(0,window.parseInt)(this.g.ff("X-Walltime-Ms"),10);this.O=((0,g.F)()-a)/1E3}};
g.h.wF=function(){var a=this.g;if(!this.ka()){this.G&&(g.Dr(this.G),this.G=window.NaN);this.C=a.status;var b=!1;if(400<=a.status)b=!0,this.D="net.badstatus";else if(a.gq()){var c="";lI(this)&&(c=a.Zq(),2048<c.length?c="":(c=String.fromCharCode.apply(String,c),c=Mz.test(c)?c:""));if(c){xz(fI(this));var a=this.info,d=this.A,e=a.o;d.g===e.D&&(e.D=Uz(d,c));d.g===e.o&&(e.o=Uz(d,c));a.requestId=d.get("req_id");hI(this,5)}else if(c=a.kl(),(d=!!this.K&&this.K.length)&&d!=c||a.jt())b=!0,this.D="net.closed";
else{nI(this,!0);e=iI(this)?this.g.ff("X-Bandwidth-Est"):0;a=this.timing;d=(0,g.F)();e=e?(0,window.parseInt)(e,10):0;if(!a.W){a.W=!0;d=d>a.o&&4E12>d?d:(0,g.F)();a.K=d;PH(a,d,c);a.H&&e?uB(a.g,a.A/e,a.A):(e=(d-a.o)/1E3,(e<=a.g.policy.A||!a.g.policy.A)&&!a.X&&QH(a)&&uB(a.g,e,c),QH(a)&&wB(a.g,c,a.C));var c=a.g,d=(d-a.o)/1E3,e=a.L,f=a.da;c.C.g(d,a.A/d);c.G=(0,g.Ot)();f||c.o.g(1,d-e);a.B&&(a.B=!1)}xz(fI(this));this.info.o.g=0;hI(this,6)}}else b=!0,this.D="net.connect";b&&(gI(this),(0,g.F)(),"net.connect"==
this.D?(b=fI(this),b.fe+=1):(b=fI(this),b.g+=1),this.info.o.g+=1,hI(this,7))}};
g.h.ot=function(){this.G=window.NaN;if(!(this.ka()||this.B.Bb&&this.g&&QH(this.timing)&&"quic"==this.g.ff("client-protocol"))){var a=(0,g.F)(),b=!1;if(QH(this.timing)){var c=this.timing.O;SH(this.timing);this.timing.O-c>=.8*this.B.O?(this.T++,b=this.T>=this.B.Ea):this.T=0}else b=this.timing,b=5E3<a-(b.o+1E3*b.G.delay);if(b){b=this.timing;a=a>b.o&&4E12>a?a:(0,g.F)();c=(a-b.o)/1E3;if(!b.H)if(QH(b))b.C+=(a-b.D)/1E3,wB(b.g,b.ba,b.C);else{var d=b.g;d.D.g(1,c);vB(d);b.T=a}var d=b.g,e=b.L,f=b.da;d.C.g(c,
b.A/c);d.G=(0,g.Ot)();f||d.o.g(1,c-e);yB(b.g,(a-b.D)/1E3,0);b=fI(this);b.fe+=1;this.info.o.g+=1;jI(this);this.D="net.timeout";hI(this,7)}else this.G=g.Fr((0,g.A)(this.ot,this),this.B.O)}};
g.h.ka=function(){return-1==this.state};
g.h.dispose=function(){Vy(this.info.g[0])&&6!=this.state&&(this.info.g[0].ia.o=!1);hI(this,-1);this.L=null;jI(this);g.Dr(this.G);this.G=window.NaN};
$H.DEBUG=!1;oI.prototype.start=function(){this.o=!0};
oI.prototype.reset=function(){this.g=this.o=!1};pI.prototype.ba=function(a){switch(a.info.type){case 1:case 2:this.X(a);break;case 4:var b=a.info.ia.xt(a);a=a.info;var c=this.g;c&&c.ia==a.ia&&c.type==a.type&&(a.range&&c.range?c.range.start==a.range.start&&c.range.end==a.range.end:c.range==a.range)&&c.ya==a.ya&&c.Ja==a.Ja&&c.Pa==a.Pa&&(this.g=g.eb(b).info);(0,g.G)(b,this.ba,this);break;case 3:BH(this.o,a)}};
pI.prototype.X=function(a){if(1==a.info.type){var b=rz(a);if(Mw(a.info.ia.info)&&!Nw(a.info.ia.info)){var c=new $y(b);bz(c);ez(c,408125543);c=dz(c);ez(c,374648427);c=dz(c);ez(c,174);c=dz(c);ez(c,224);c=dz(c);if(ez(c,21936)){var d=c.A+c.g,c=fz(c,!0);b.setUint8(d-2,236);b.setUint8(d-1,128|c+1)}}a.info.ia.info.video&&aA(a.info.ia,b);2==a.info.ia.info.o&&a.info.ia.info.video&&gz(b)}a.info.ia.Ll(a)};
pI.prototype.aa=function(a){this.B=a=a.info;this.H&&this.B.o&&(this.H=!1);a.ia.info.g>=this.K&&(this.K=a.ia.info.g)};
pI.prototype.getDuration=function(){return this.Ga.index.Yi()};cJ.prototype.send=function(){g.Ur(this.o,{format:"RAW",responseType:"arraybuffer",timeout:1E4,Nc:this.A,oc:this.A,context:this});this.g=(0,g.Ot)()};
cJ.prototype.A=function(a){var b={rc:a.status,lb:a.response?a.response.byteLength:0,rt:(((0,g.Ot)()-this.g)/1E3).toFixed(3),shost:g.og(this.o),trigger:this.D};204==a.status||a.response?this.B&&this.B(oD(b)):this.C(new g.nD("pathprobe.net",!1,b))};g.C(lJ,g.I);lJ.prototype.G=function(a){for(var b=arguments.length-1;0<=b;b--){var c=arguments[b];if(c){var d=this.o.indexOf(c);0<=d&&this.o.splice(d,1);var e=this.g,d=e.g,c=g.Cb(d,c,e.o);0<=c&&g.sb(d,c)}}this.A()};
lJ.prototype.reset=function(){this.C=this.K=!1;this.D.stop();this.g.g=[];this.o=[];this.A();this.H=null};
lJ.prototype.A=function(){this.L=!0;if(!this.O){for(var a=3;this.L&&a;){this.L=!1;this.O=!0;if(this.C&&!this.K){this.D.stop();var b=this.T();g.T(b,32)&&this.W.start();for(var c=g.T(this.T(),2)?0x8000000000000:1E3*this.aa(),d=g.T(b,2),e=[],f=[],k=0;k<this.o.length;k++){var l=this.o[k];l.active&&(d?0x8000000000000>l.end:!l.contains(c))&&f.push(l)}e=e.concat(oJ(this,f));if(d)b=hJ(this.g,0x7ffffffffffff),b=b.concat(jJ(this.g));else if(this.B<=c&&b.Ab()&&!g.T(b,16)&&!g.T(b,32)){b=this.g;d=c;f=[];for(k=
iJ(b,this.B);k<b.g.length&&!(l=b.g[k],(l.end<=d||l.contains(d))&&f.push(l),l.start>d);++k);b=f}else b=hJ(this.g,c);e=e.concat(nJ(this,b));this.B=c;!this.K&&this.H&&(this.H=null);c=e;for(e=0;e<c.length;e++)b=c[e],d=b[1],1==b[0]?(d.g&&d.g.U("onEnter",d),this.X("crn_"+d.namespace,d)):(d.g&&d.g.U("onExit",d),this.X("crx_"+d.namespace,d))}this.O=!1;a--}this.T().Ab()&&(a=kJ(this.g,this.B),null!=a&&0x7ffffffffffff>a&&(a=(a-this.B)/this.ba(),this.D.start(a)))}};
lJ.prototype.Y=function(){this.H=this.g=this.o=null;lJ.ea.Y.call(this)};g.p(pJ,g.gt);g.h=pJ.prototype;g.h.initialize=function(a,b,c,d){a=a||0;var e=this.G;d=d&&d.id;e.H="i";"auto"!=ex()&&(e.H="s");QI(e,b);ZI(e,d);e.T=e.B;$I(e);e.o=e.g;b=YI(e);this.B=new pI(this.A,b.audio);this.g=new pI(this.A,b.video);NJ(this,this.B);NJ(this,this.g);this.g.o.W=this.B.o;this.U("videoformatchange",b);this.X=this.g.D;this.C=a;c?(this.H=!0,HJ(this)):tJ(this)};
g.h.resume=function(){if(this.H||this.fa)this.fa=this.H=!1};
g.h.AE=function(a){if(!this.ka()&&3<=a.state){var b=a.info.g[0].ia,c=!this.la&&b.info.video,d=!this.aa&&b.info.audio,e=Math.max(0,a.info.g[0].A-this.C);this.A.Dc&&5<=a.state&&this.zg("rqs",oD(dI(a)));if(5==a.state)c?sJ(this,"vrr"):d&&sJ(this,"arr"),a.start(e);else if(6==a.state||this.A.W&&3<=a.state&&!(5<=a.state)){c?(this.la=a.A?g.Tz(a.A):"",$t(4)):d&&(this.aa=a.A?g.Tz(a.A):"");b=b.info.video?this.g:this.B;this.D.o&&(b.D=!1,a.O&&this.Ka.g(1,a.O));if(e=Vy(a.info.g[0]))e=a.info,e=!!Vy(e.g[e.g.length-
1]);e&&(0,g.G)(a.o.A,b.X,b);this.Yc()}else if(4==a.state)this.Yc(),c&&$t(4);else if(7==a.state&&gI(a)){if(c=b.info.video&&(0<a.cd||this.A.C&&1<b.C.g||410==a.C||500==a.C||503==a.C)&&this.A.Wa&&!VI(this.G),d=cI(a),c&&(d.stun="1"),MJ(this,!1,a.kd(),d),!this.ka()){if(c){var d=this.G,f=b.info;VI(d);d.ha=f;d.X=(0,g.Ot)();d.W=-1;QI(d,d.D)}if(eI(a)||c){b=b.info.video?this.g:this.B;for(e=0;e<b.A.length&&a!==b.A[e];e++);if(e==b.A.length)wI(b,a);else{for(;e<b.A.length;)wI(b,b.A.pop());3==a.info.g[0].type?(a.o&&
a.o.B?(a=a.o.B,a=new Ty(a.type,a.ia,a.range,a.ya,a.startTime+a.duration,0,a.Ja+a.Pa,0,!1)):(a=a.info.g[0],a=new Ty(a.type,a.ia,a.range,a.ya,a.startTime,0,a.Ja,0,!1)),b.g=a):b.g=null}this.Yc()}else a.start(e),this.A.Xg&&!gI(a)&&(a="https://www.youtube.com/generate_204?cpn="+(b.C.C.get("cpn")||"")+"&rn="+mW++,OJ(this,a,"error"))}}else Vy(a.info.g[0])?(b.B=!0,this.Yc()):MJ(this,!0,"net.retryexhausted",cI(a))}};
g.h.Yc=function(){this.La=window.NaN;this.Ma.stop();xJ(this);if(this.o&&Ey(this.o)&&!Gy(this.o))if(this.D.isLive)(0,window.isNaN)(this.K)?(this.K=this.C+3600,this.o.A.duration=this.K):this.K<=this.C+1800&&(this.K=Math.max(this.K+1800,this.C+3600),this.o.A.duration=this.K);else{var a=Math.max(this.B.getDuration(),this.g.getDuration());(!(0,window.isFinite)(this.K)||this.K!=a)&&0<a&&(this.K=this.o.A.duration=a)}if(!this.ka())if(SA(this.D)&&3==this.D.G)MJ(this,!0,"manifest.net.retryexhausted",{rc:this.D.O.toString()});
else if(this.D.isLive&&(II(this.g)||II(this.B)))this.U("seekplayerrequired",window.Infinity);else if("prerender"==window.document.webkitVisibilityState)HJ(this);else if(xJ(this),sI(this.g,this.C),!this.ka()&&(sI(this.B,this.C),!this.ka())){if(this.D.o){JI(this.g);JI(this.B);var b=-1!=this.g.C,a=-1!=this.B.C;if(!b||!a)if(b=!b&&yH(this.g.o),a=!a&&yH(this.B.o),b||a){var a=b?this.g:this.B,b=b?this.B:this.g,c=yH(a.o).info.ya;if(-1!=b.C&&b.C!=c){var d=b.C;AI(a,0);vI(a,window.Infinity);a.g.ya=d-1;MJ(this,
!1,"qoe.avsync",{start:"1",target:b.C,actual:c})}else a.C=c}(a=yH(this.g.o))&&a.A&&(this.Ea=yH(this.g.o).A.B)}this.B.Ga.o&&this.g.Ga.o||(!this.H||DB(this.O)?tJ(this):HJ(this));if(this.o&&!yJ(this,this.B,this.o.g)&&!yJ(this,this.g,this.o.o)&&!IJ(this)&&((a=KJ(this,this.g,this.o.o,null))&&!this.wa&&(this.wa=(0,g.F)(),sJ(this,"vda"),g.qE("vda",void 0,"video_to_ad"),this.oa&&$t(4)),!Fy(this.o))){b=hy(this.o.o.buffered,this.C+DJ);if(!(0,window.isNaN)(b)||uI(this.g)||!this.o.g.buffered.length){if(uI(this.g)||
this.A.Qd)b=window.NaN;b=KJ(this,this.B,this.o.g,b);a=a||b;b&&!this.oa&&(this.oa=(0,g.F)(),sJ(this,"ada"),g.qE("ada",void 0,"video_to_ad"),this.wa&&$t(4))}uI(this.g)&&uI(this.B)&&Ey(this.o)&&!Gy(this.o)&&(b=this.o,Ey(b)&&b.A.endOfStream(),b=this.O,dx(CB(b)),b.B=(0,g.Ot)());a&&!Iy(this.o)&&GJ(this)}rJ(this);this.g.Ga.B||this.B.Ga.B?MJ(this,!0,"net.retryexhausted",{metadata:"1",video:this.g.Ga.B?"1":"0",audio:this.B.Ga.B?"1":"0"}):(BJ(this,this.g,this.B)&&FJ(this,this.g,this.B),BJ(this,this.B,this.g)&&
FJ(this,this.B,this.g),this.A.pe&&this.da&&!this.H&&DB(this.O)&&(OJ(this,this.da,"cms"),this.da="",this.A.Je&&(a=Hz(Lz(this.B.Ga.C.C,0)),OJ(this,a,"redir"),OJ(this,a.replace("redirector.googlevideo.com","www.youtube.com"),"www-redir"))),this.D.B&&HJ(this),this.W&&(a=this.W,a.g?(a=1E3*(a.A-RH(a.g.timing)),a=0>=a?0:a+1):a=window.NaN,(0,window.isNaN)(a)||this.Ma.Wc(a)))}};
g.h.Ej=function(a){a=(a=a?this.B:this.g)&&a.B;MJ(this,!0,"fmt.unplayable",a?Yy(a):void 0)};
g.h.ED=function(a){MJ(this,!0,"fmt.unparseable",a)};
g.h.ID=function(a){MJ(this,!1,"qoe.avsync",a)};
g.h.FD=function(a,b){this.D.o&&LJ(this,b,a==this.g)};
g.h.GD=function(a,b){if(this.D.o){var c=this.D,d=a==this.g,e;for(e in c.g)if(!!c.g[e].info.video==d){var f=c.g[e].index,k=dA(f,b.ya);0<=k&&f.segments.splice(k,1)}}};
g.h.HD=function(a,b){this.D.o&&LJ(this,b,a==this.g)};
g.h.DD=function(a,b){if(this.g.Ga.index.Mb()<=b){var c=this.D;c.L.push(a);c.U("cuepointsadded")}};
g.h.seek=function(a){if(!this.ka()&&!this.g.D&&!this.B.D){xJ(this);this.Wa=(0,g.Ot)();rJ(this,a);var b=PJ(this,this.g,a,this.o&&this.o.o),c=PJ(this,this.B,b,this.o&&this.o.g);this.C=Math.max(a,b,c);this.T=!0;this.D.o&&this.A.oa&&!eA(this.g.Ga.index,this.g.g.ya)&&(this.X=!0);GJ(this)}};
g.h.Y=function(){wJ(this);this.B&&(xI(this.B),xI(this.g));g.Cr(this.Ua);g.Dr(this.ha);this.Ma.dispose();g.gt.prototype.Y.call(this)};
g.h.Jz=function(){return this.Ka.o()||0};
g.h.zg=function(a,b,c){this.U("ctmp",a,b,void 0===c?!1:c)};
var DJ=2/24;g.p(WJ,g.I);g.h=WJ.prototype;g.h.Sz=function(a){this.G.call(this.A,new window.Uint8Array(a.message))};
g.h.Tz=function(){this.L.call(this.A,this.g.keyStatuses)};
g.h.es=function(a,b){g.xr(b);var c=a;b instanceof window.DOMException&&(c+=";n."+b.name+";m."+b.message);this.D.call(this.A,c)};
g.h.Cs=function(a){this.G.call(this.A,a.message)};
g.h.Bs=function(a){if(this.o){var b=this.o.error.code;a=this.o.error.systemCode}else b=a.errorCode&&a.errorCode.code,a=a.systemCode;this.D.call(this.A,";c."+b+";sc."+a)};
g.h.As=function(){this.K.call(this.A)};
g.h.update=function(a){if(this.g)return this.g.update(a).then(null,yr((0,g.A)(this.es,this,"t.u")));this.o?this.o.update(a):this.C.addKey?this.C.addKey(this.O.o,a,this.H,this.sessionId):this.C.webkitAddKey(this.O.o,a,this.H,this.sessionId);return HB()};
g.h.Y=function(){this.g&&this.g.close();this.C=null;g.I.prototype.Y.call(this)};g.p(ZJ,g.I);ZJ.prototype.L=function(a){var b=cK(this,a);b&&b.Cs(a)};
ZJ.prototype.K=function(a){var b=cK(this,a);b&&b.Bs(a)};
ZJ.prototype.H=function(a){(a=cK(this,a))&&a.As()};
ZJ.prototype.Y=function(){this.o=null;g.I.prototype.Y.call(this)};g.p(eK,g.I);g.h=eK.prototype;g.h.fr=function(a){this.T=a};
g.h.Qz=function(a){if(!this.ka()){this.L||(g.qE("drm_gk_f"),this.L=!0,this.o.U("newsession",this));if(aB(this.B)){for(var b="",c=0;c<a.length;c+=2)b+=String.fromCharCode(a[c]);a=(new window.DOMParser).parseFromString(b,"text/xml").querySelector("Challenge");a=new window.Uint8Array(Cc(a.childNodes[0].data))}if(bB(this.B))for(b=g.Ac(a),a=new window.Uint8Array(new window.ArrayBuffer(b.length)),c=0;c<b.length;c++)a[c]=b.charCodeAt(c);a=new TJ(a,++this.W);this.Ht(a)}};
g.h.Oz=function(){this.ka()||this.D||(this.o.U("sessionready"),this.D=!0)};
g.h.Rz=function(a){var b=this;this.ka()||(a.forEach(function(a,d){var c=aB(b.B)?d:a,f=g.Ac(new window.Uint8Array(aB(b.B)?a:d),!0).replace(/[\.]{1,2}$/,"");b.g[f]?b.g[f].status=c:b.g[f]={type:"",status:c}}),this.o.U("keystatuseschange",this))};
g.h.Ht=function(a){g.qE("drm_net_s");a={format:"RAW",method:"POST",postBody:a.message,responseType:"arraybuffer",withCredentials:!0,timeout:3E4,nb:(0,g.A)(this.rD,this,a),onError:(0,g.A)(this.us,this,a)};var b=this.K;if(this.T)var c=this.T,b=xg(g.Bg(b,"access_token"),"access_token",c);g.Ur(b,a)};
g.h.rD=function(a,b){if(!this.ka())if(0!=b.status&&b.response){g.qE("drm_net_r");var c=new window.Uint8Array(b.response);if(c=VJ(c))if(0!=c.statusCode)gK(this,"drm.auth",!0,"t.f;c."+c.statusCode,g.RF(c.statusCode));else{g.qE("drm_kr_s");var d=null,e=c.headers["Heartbeat-Url"];e&&(d=new SJ(e,(0,window.parseInt)(c.headers["Heartbeat-Interval-Secs"],10)||60,(0,window.parseInt)(c.headers["Heartbeat-Num-Retries"],10)||4));d&&this.o.U("newlicense",d);!(d=c.headers["Authorized-Format-Types"])||aB(this.B)&&
!this.ba||(this.H=d.split(","),XJ(this.A)||this.o.U("keystatuseschange",this));c.headers["Key-Ids"]&&(this.g=hK(c.headers["Key-Ids"]));bB(this.B)&&(c.message=new window.Uint8Array(Cc(String.fromCharCode.apply(null,c.message))));this.A.update(c.message).then(function(){g.qE("drm_kr_f")});
this.D&&(this.O=(0,g.Ot)())}else gK(this,"drm.net",!0,"t.p","YTP_ERROR_SERVER_ERROR")}else this.us(a,b)};
g.h.Pz=function(a){this.ka()||gK(this,"drm.keyerror",!0,"t.s"+a)};
g.h.us=function(a,b){var c=!1;if(3<=a.g.o||this.X&&36E4<(0,g.Ot)()-this.O){var d="drm.net.retryexhausted";c=!0}else d=b.status?"drm.net.badstatus":"drm.net.connect";gK(this,d,c,"t.r;c."+b.status);if(this.X&&this.D?0:!c&&this.W==a.number)d=a.g.getValue(),d=new g.O((0,g.A)(this.Ht,this,a),d),g.J(this,d),d.start(),d=a.g,d.g=Math.min(d.C,d.g*d.G),d.A=Math.min(d.C,d.g+(d.D?Math.round(d.D*(Math.random()-.5)*2*d.g):0)),d.o++};
g.h.Y=function(){this.o=null;g.I.prototype.Y.call(this)};kK.prototype.get=function(a){a=this.mh(a);return-1!=a?this.values[a]:null};
kK.prototype.remove=function(a){a=this.mh(a);-1!=a&&(this.keys.splice(a,1),this.values.splice(a,1))};
kK.prototype.set=function(a,b){var c=this.mh(a);-1!=c?this.values[c]=b:(this.keys.push(a),this.values.push(b))};
kK.prototype.mh=function(a){return g.kb(this.keys,function(b){return g.Ib(a,b)})};g.p(mK,g.gt);g.h=mK.prototype;g.h.bD=function(a){a=new YJ(new window.Uint8Array(a.initData),a.initDataType);pK(this,a,!0)};
g.h.VD=function(a){pK(this,new YJ(a.initData,a.contentType),!0)};
g.h.BD=function(){this.ka()||(this.K=!0,oK(this))};
g.h.pC=function(a){if(!this.ka()){g.xr(a);var b="t.a";a instanceof window.DOMException&&(b+=";n."+a.name+";m."+a.message);this.U("licenseerror","drm.unavailable",!0,b,"YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK")}};
g.h.YD=function(a){this.ka()||!a||this.X||(this.X=a,this.U("heartbeatparams",a))};
g.h.ZD=function(){this.ka()||(this.o.shift(),oK(this))};
g.h.ME=function(){if($A(this.g)&&(this.da--,0==this.da)){var a=this.C;a.o.msSetMediaKeys(a.A)}};
g.h.Uz=function(a){if(!this.ka()){var b=[];if(XJ(a.A))for(var c in a.g)"usable"==a.g[c].status&&b.push(a.g[c].type);else b=a.H;a=g.ob(b,"UHD2")?"highres":g.ob(b,"UHD1")?"hd2160":g.ob(b,"HD")?"hd1080":g.ob(b,"HD720")?"hd720":"large";bx(this.H,a)||(this.H=Xw("auto",a,!1),this.U("qualitychange"))}};
g.h.Y=function(){this.g.A&&this.L.setMediaKeys(null);this.L=null;this.o=[];for(var a=g.ma(this.A.values),b=a.next();!b.done;b=a.next())b.value.dispose();a=this.A;a.keys=[];a.values=[];this.B&&(this.B.dispose(),this.B=null);this.D=null;g.gt.prototype.Y.call(this)};sK.prototype.C=function(){var a=g.y("yt.abuse.botguardInitialized");return a&&a()?(a=g.y("yt.abuse.invokeBotguard")())?"r1a="+a:null:null};
sK.prototype.D=function(a){return"r3a="+Math.floor(this.g.lengthSeconds%bb(a.c3a))};
sK.prototype.B=function(a){a=bb(a.c);var b=g.y("yt.abuse.dclkstatus.checkDclkStatus")();return"r6a="+(a^b)};g.C(wK,g.I);g.h=wK.prototype;g.h.start=function(){this.o.start()};
g.h.stop=function(){this.o.stop()};
g.h.zn=function(a,b,c){this.A[a]=b;this.g[a]=new yK(!!c)};
g.h.clear=function(){for(var a in this.g)this.g[a].clear()};
g.h.ZF=function(){for(var a in this.A)this.g[a].update(this.A[a]());this.o.start()};
yK.prototype.update=function(a){this.A?(jH(this.g,a-this.o||0),this.o=a):jH(this.g,a)};
yK.prototype.clear=function(){this.g.clear();this.o=0};g.C(CK,g.gt);CK.o=2;CK.B=5;CK.C=5;CK.g="endcr";CK.A=96;g.h=CK.prototype;g.h.Y=function(){g.Dr(this.da);g.Cr(this.Xa);g.Dr(this.ib);var a=AK();a&&window.document.removeEventListener(a,this.Ge,!1);GK(this);HK(this);EK(this);fL(this);g.ve(this.la,this.g);this.X=null;this.Va=!1};
g.h.Zo=function(){if(this.g.Pb())g.T(this.A,128)||(this.g.Pb(),this.Bb=this.ha.g=!0,4!=this.pe&&(this.fa=g.wb(this.g.ad)),g.nF(this.g,this.V).then(this.Ep,this.Ep,this));else{var a=this.g;if(a.xa&&a.adaptiveFormats&&!a.hq&&(g.AF(a)||this.V.experiments.g("html5_manifestless_always"))){var a=this.g,b=this.V.experiments;if(!iF(a)){a.hq=!0;var c=FA(mF(a,a.adaptiveFormats),a.ec,a.lengthSeconds,!0,b);!b.g("html5_manifestless_vp9")&&hF(c)||a.Ol?c.dispose():(a.jh=!1,lF(a,c),c.subscribe("cuepointsadded",a.Xo,
a),CA(a.sa)&&(a.wg=!0));kF(a)}}else if(this.g.jh)a=this.g,b=this.V.experiments,a.bf=!0,a.jh=!1,Mz.test(a.hd)||g.xr(Error("DASH MPD Origin invalid: "+a.hd),"WARNING"),c=a.hd,c=g.wg(c,{mpd_version:b.o("dash_manifest_version")||4}),!a.isLowLatencyLiveStream&&b.g("html5_live_disable_dg_pacing")&&(c=g.wg(c,{pacing:0})),QA(new AA(c,b,a.xa),c).then(a.SC,a.RC,a),g.qE("mrs");else if(this.g.wg)this.C&&(a=this.C.o,xG(a,"protected"),a.g.videoData.ae?a.wa():a.g.videoData.subscribe("dataloaded",a.wa,a)),a=this.g,
b=this.V.O,c=this.V.experiments,CA(a.sa),b=new gB(UB(b,a.sa),c),g.J(a,b),a.wg=!1,a.bf=!0,a=(0,g.A)(a.oy,a),b.B=a,eB(b.C)?b.D():lB(b);else if(!this.g.bf&&this.Bb){a:{var b=this.V,a=this.g,d=this.wb.Na(),e=this.Ie(),f=this.V.ha;switch(a.jf){case 38:b=a.videoId.indexOf(":");a=g.wg("//play.google.com/books/volumes/"+a.videoId.slice(0,b)+"/content/media",{aid:a.videoId.slice(b+1),sig:a.ZB});break a;case 30:c="https://docs.google.com/get_video_info";b.experiments.g("restore_nonsense_docs_behavior")&&b.baseYtUrl!=
ZC.prototype.baseYtUrl&&(c=b.baseYtUrl+"get_video_info");a=g.wg(c,{docid:a.videoId,authuser:a.Lb,authkey:a.Jo,eurl:b.oa});break a;case 33:a=g.wg("//google-liveplayer.appspot.com/get_video_info",{key:a.videoId});break a;default:c={html5:"1",video_id:a.videoId,cpn:a.clientPlaybackNonce,eurl:b.oa,ps:b.o,el:b.g,hl:b.sc,list:a.playlistId,agcid:a.tw,aqi:a.rw,sts:17316,lact:g.Rt()},g.Ea(c,b.B),b.He&&(c.ecver=b.He),b.forcedExperiments&&(c.forced_experiments=b.forcedExperiments),a.je?(c.vvt=a.je,a.mdxEnvironment&&
(c.mdx_environment=a.mdxEnvironment)):a.oauthToken&&(c.access_token=a.oauthToken),a.adFormat&&(c.adformat=a.adFormat),b.Oe&&(c.cc_lang_pref=b.Oe),b.Pe&&2!=b.Pe&&(c.cc_load_policy=b.Pe),b.mute&&(c.mute=b.mute),a.Me&&2!=b.Me&&(c.iv_load_policy=a.Me),a.kj&&(c.itct=a.kj),aD(b,a,f)&&(c.autoplay="1"),a.nj&&(c.autonav="1"),a.Wl&&(c.noiba="1"),a.isMdxPlayback&&(c.mdx="1",c.ytr=a.De),a.mdxControlMode&&(c.mdx_control_mode=a.mdxControlMode),a.ip&&(c.ytrcc=a.ip),a.dm&&(c.utpsa="1"),a.isFling&&(c.is_fling="1"),
a.vnd&&(c.vnd=a.vnd),a.jl&&(c.force_ad_param_ad_type="video_ad",c.force_ad_param_url=a.jl,c.force_ad_param_break_type="1",c.force_ad_param_offset_value=0),d.width&&(c.width=d.width),d.height&&(c.height=d.height),a.Zd&&(c.splay="1"),a.ypcPreview&&(c.ypc_preview="1"),b.Fa&&(c.content_v=b.Fa),a.yh&&(c.livemonitor=1),b.Lb&&(c.authuser=b.Lb),b.pageId&&(c.pageid=b.pageId),b.bc&&(c.ei=b.bc),b.Tg&&(c.ssl_stream="1"),b.A&&(c.iframe="1"),a.qf&&(c.tst=a.qf),a.contentCheckOk&&(c.cco="1"),a.racyCheckOk&&(c.rco=
"1"),b.gb&&a.liveStartWalltime&&(c.live_start_walltime=a.liveStartWalltime),b.gb&&a.im&&(c.live_manifest_duration=a.im),b.gb&&a.playerParams&&(c.player_params=a.playerParams),b.gb&&a.cycToken&&(c.cyc=a.cycToken),b.gb&&a.au&&(c.tkn=a.au),0!=e&&(c.vis=e),b.enableSafetyMode&&(c.enable_safety_mode="1"),b.widgetReferrer&&(c.widget_referrer=b.widgetReferrer.substring(0,128)),(d=b.T.embedding_app)&&(c.embedding_app=d),(d=b.T.developer_api_key)&&(c.developer_api_key=d),(d=g.jF(a))&&(c.uloc=d),a.xh&&(c.internalipoverride=
a.xh),a.innertubez&&(c.innertubez=a.innertubez),a.oq&&(c.strpro="1"),b.gb&&a.Ff&&(c.wpid=a.Ff),a=g.wg(b.baseYtUrl+"get_video_info",c)}}b=2;this.V.isAd()&&(b=0);c=this.g;d=this.V.La;e=this.V.experiments;f=this.V.Tb;c.ka()||(c.ul=a,c.ln=b,c.Ig=!!d,c.qq=!!f,e&&(c.qt=!e.g("disable_gvi_cors"),c.tl=e.o("html5_get_video_info_timeout_ms")||0,c.Qp=e.g("html5_get_video_info_promiseajax")),c.bf=!0,c.Et())}}};
g.h.Ep=function(){if(gF(this.g)){if(this.g.xa){this.L=new kH;this.O=new mH(this.g);if(this.C){var a=nH(this.O);uG(this.C.o,a)}VK(this,yL(this,!1),!0)}this.g.Ta.g&&g.uL(this);tL(this,"i");this.L&&(this.g.rd()?(a=(0,g.A)(this.B.Jz,this.B),this.L.A=a):this.g.sa&&(a=(0,g.A)(this.g.sa.Kz,this.g.sa),this.L.A=a))}this.Ea&&mL(this);a=this.g;a.endSeconds&&a.endSeconds>a.startSeconds&&IK(this,a.endSeconds);KK(this,"dataloaded");this.T.o?SK(this):this.V.experiments.g("html5_suspended_state")&&this.Ea&&LK(this,
XF(XF(this.A,512),1))};
g.h.logEvent=function(a,b){if(this.C){var c=this.C,d={};d.rt=g.HF(c.g).toFixed(3);g.Ea(d,jG(c.g));var e=c.g.g,f=c.g.videoData,k={ns:e.Va,html5:"1",el:e.g,ps:e.o,fexp:e.experiments.experimentIds.join(",")||void 0,feature:f.hn||e.Yf||void 0,ctrl:f.lf||void 0,ytr:f.De||void 0,list:f.playlistId,d:e.pe,f:e.Xg};if(e.experiments.g("legacy_autoplay_flag")?e.da:f.kf)k.autoplay="1";f.subscribed&&(k.subscribed=f.subscribed);g.Ea(d,k);delete d.fexp;g.Ea(d,a);d=g.Or(c.g.g.baseYtUrl+"player_204",d);GG(c,d,b)}};
g.h.isPeggedToLive=function(){return this.Ka};
g.h.fH=function(){return this.A};
g.h.getPlayerType=function(){return this.pe};
g.h.Sn=function(){var a=this.g,b=a.uc;if(!b)return a.Oi;var c=g.jb(this.g.Ta?this.g.Ta.audioTracks:[],function(a){return a.id==b.id});
return c?c:a.Oi};
g.h.oF=function(){this.V.experiments.o("html5_background_quality_cap")&&this.B&&tL(this,"v");this.V.il&&!this.g.backgroundable&&this.o&&(zK()&&this.o.o?(this.Rc("bgmobile","suspend"),dL(this,!0)):mL(this)&&this.Rc("bgmobile","resume"))};
g.h.CD=function(a){if(this.oe)this.Fc=!0;else{var b=this.getDuration();!b&&this.g.rd()&&(b=3600);a.A.duration=b;g.uJ(this.B,a)}};
g.h.mD=function(a){if(this.G){var b=this.G;if($A(b.g)){for(var c=new window.Uint8Array(0),d=new window.DataView(a.buffer,a.byteOffset,a.length),e=0;e<a.length-8;){var f=d.getUint32(e);if(1>=f)break;var k=d.getUint32(e+4);if(1836019574==k)e+=8;else{if(1886614376==k){var k=a.subarray(e,e+f),l=new window.Uint8Array(c.length+k.length);l.set(c);l.set(k,c.length);c=l}e+=f}}a=c;0!=a.length&&pK(b,new YJ(a),!1)}}};
g.h.vD=function(a){$K(this,a.reason,a.video.info,a.audio.info);var b=tF(this.g);b&&b.K(a.video);this.L&&(this.L.o=a.audio.index)};
g.h.uD=function(a){ZK(this,a.reason,a.audio.info)};
g.h.Sg=function(a){if("html5.invalidstate"==a.errorCode&&this.o){var b=this.o.kd();a.details.merr=b?b.toString():"0"}b=/^pp/.test(this.g.clientPlaybackNonce);vL(a)?g.T(this.A,4)?(this.Qd=!0,HK(this)):jL(this):wL(a)&&this.g.Ta.o?(this.Rc("highrepfallback","1",!0),DF(this.g),qL(this),oL(this)):a.g?(b=this.B?this.B.G.D:null,b=wL(a)&&b&&b.isLocked()?"YTP_ERROR_FORMAT_UNAVALIABLE":void 0,g.NK(this,a.errorCode,b,oD(a.details))):this.C&&(this.C.onError(a.errorCode,oD(a.details)),b&&"manifest.net.connect"==
a.errorCode&&(a="https://www.youtube.com/generate_204?cpn="+this.g.clientPlaybackNonce+"&t="+(0,g.Ot)(),(new cJ(a,"manifest",(0,g.A)(function(a){this.Rc("pathprobe",a)},this),(0,g.A)(function(a){this.onError(a.errorCode,oD(a.details))},this.C))).send()))};
g.h.Bu=function(){if(!(0,window.isNaN)(this.W)&&this.o){var a=this.getDuration(),b=this.V.experiments.g("legacy_html5_seek_end")?Math.floor(a):yL(this,!1);!this.g.xa&&this.W>=b?(this.W=a,this.U("endseeking",this),XK(this,!0),DK(this)):(this.B&&this.B.seek(this.W),(!this.g.xa||1<=this.o.g.readyState)&&this.o.Kb(this.W),this.B&&!g.T(this.A,2)&&LK(this,XF(this.A,16)))}this.la&&(this.la.dispose(),this.la=null);g.T(this.A,32)&&(LK(this,XF(YF(this.A,32),16)),this.U("endseeking",this))};
g.h.getCurrentTime=function(){if(!(0,window.isNaN)(this.W))return this.W;var a=0;this.o&&1<=this.o.g.readyState?a=this.o.getCurrentTime():this.g&&(a=this.V.experiments.g("new_ended_replay")?this.g.startSeconds||0:this.g.Td||this.g.startSeconds||0);this.V.experiments.g("new_ended_replay")&&(a=g.td(a,this.Nb(),yL(this,!1)));return a};
g.h.getDuration=function(){return this.g.lengthSeconds?this.g.lengthSeconds:yL(this,!1)?yL(this,!1):0};
g.h.Ww=function(){var a=new sB;if(this.B){var b=this.V.schedule;a.B=b.K;a.G=b.L;a.o=AB(b);a.g="d."+xB(b).toFixed(2)+";st."+(1E9*zB(b)).toFixed(2)+";bw."+b.A.o().toFixed(0)+";abw."+b.C.o().toFixed(0)+";v50."+qB(b.o,.5).toFixed(2)+";v92."+qB(b.o,.92).toFixed(2)+";v96."+qB(b.o,.96).toFixed(2)+";v98."+qB(b.o,.98).toFixed(2);b.g&&(a.g+=";ltbw."+b.g.o().toFixed(0));b=this.B;b.o&&!Fy(b.o)&&(a.A=uI(b.g)?b.g.B.g:ky(b.o.o.buffered,b.C),a.C=uI(b.B)?b.B.B.g:ky(b.o.g.buffered,b.C));a.o=NI(b.L)}else this.o&&(a.A=
sy(this.o));this.L&&lH(this.L,a);return a};
g.h.lF=function(){this.G&&nK(this.G,this.g.oauthToken);KK(this)};
g.h.kF=function(a){g.NK(this,"auth",(0,window.unescape)(a.reason),a.errordetail||"sec."+a.errorcode)};
g.h.hH=function(a){var b=a.target.gc();if(this.o&&this.o.gc()&&this.o.gc()==b){var c=!1;switch(a.type){case "error":if(!this.Qb&&(4==this.o.kd()||3==this.o.kd()||2==this.o.kd())){this.Qb=!0;if(a=this.V.experiments.g("html5_progressive_signature_reload"))a=this.g,a=(a.Xf&&+g.Mr(a.Xf.g().g).expire)<Date.now()/1E3+1800;this.C&&(c={e:3==this.o.kd()?"decode":2==this.o.kd()?"network":"unplayable"},this.K&&(c.msopened=""+ +!!this.K.g),a&&(c.stale="1"),this.C.onError("qoe.restart",oD(c)));if(a){jL(this);
return}if(Zr("philips"))try{window.close()}catch(n){}this.gn();return}break;case "durationchange":var d=this.o.getDuration();(!this.K||(0,window.isFinite)(d)&&0<d)&&1!=d&&this.g.lengthSeconds!=d&&(this.g.lengthSeconds=d,KK(this));break;case "ratechange":this.B&&(this.B.L.A=Math.max(1,this.o.Vb()));d=this.D;d.C=!0;d.A();break;case "loadedmetadata":this.g.startSeconds&&(0<(this.o.g.seekable||jy()).length?this.V.experiments.g("new_ended_replay")?VK(this,this.g.startSeconds,!0):this.o.g.currentTime=this.g.startSeconds:
(this.wa=this.g.startSeconds,XK(this,!0)));case "loadstart":g.Cr(this.Xa);this.Vk()||(this.Xa=g.Er((0,g.A)(this.Vk,this),100));break;case "progress":this.wa&&this.o&&(d=this.o.g.seekable||jy(),d.length&&d.end(0)>this.wa&&(this.o.g.currentTime=this.wa,this.wa=window.NaN,this.Cb=this.oa.N(this.o,"canplay",this.TC,this)));case "suspend":zL(this);this.U("onLoadProgress",this,BL(this));g.T(this.A,8)&&(this.uf?c=!0:this.vf&&((0,window.isNaN)(this.Dc)||this.Dc+1<this.o.getCurrentTime())&&(c=!0,this.Dc=this.o.getCurrentTime()));
break;case "seeked":EL(this);break;case "seeking":d=this.V.experiments.g("disable_html5_videoplayer_seeking_time")?this.o.getCurrentTime():this.getCurrentTime();this.B&&this.B.seek(d);var e=this.Wa;e.g=d;e.o=!0;break;case "playing":this.H.o("plev");g.qE("plev",void 0,"video_to_ad");this.ne&&(this.ne=!1,lL(this)||VK(this,window.Infinity,!0));g.Dr(this.ib);this.ib=window.NaN;break;case "timeupdate":d=this.o&&!this.o.getCurrentTime();e=this.o&&0==this.o.g.readyState;if(d&&(!this.La||e))return;this.La|=
!!this.o.getCurrentTime();this.Vk();EL(this);zL(this);if(!this.o||this.o.gc()!=b)return;this.U("onVideoProgress",this,this.o.getCurrentTime());this.L&&this.Ka&&(d=this.L,e=this.o.getCurrentTime(),!d.o||e>=d.B&&e<d.D||(e=d.o.Te(e),-1!=e&&(d.B=d.o.Id(e),d.D=d.B+d.o.getDuration(e),e=(0,g.F)()/1E3-d.o.Fm(e),d.A&&(e-=d.A()),jH(d.C,e),d.g.push(e))));break;case "waiting":if(0<(this.o.g.played||jy()).length&&0==ry(this.o).length&&0<this.o.getCurrentTime()&&5>this.o.getCurrentTime()&&this.B)return;break;case "resize":this.g.Ba&&
"auto"==this.g.Ba.video.quality&&this.U("internalvideoformatchange",this.g,!1)}if(this.o&&this.o.gc()==b){this.U("videoelementevent",a);a:{var b=this.A,f=this.Wa,k=this.wf,l=this.V.experiments.g("html5_timeupdate_readystate_check");if(!g.T(b,128)){var d=b.o,e=b.g,m=a.target;if(!g.T(b,64)||"ended"!=a.type&&"pause"!=a.type)if("pause"==a.type&&m.g.ended||"ended"==a.type&&(m.g.ended||1>Math.abs(m.getCurrentTime()-m.getDuration())))0<m.g.networkState&&m.gc()&&(d=14,e=null);else if("pause"==a.type)g.T(b,
256)?(d^=256)||(d=64):g.T(b,32)||g.T(b,2)||g.T(b,4)||(d=4,g.T(b,1)&&g.T(b,8)&&(d|=1),e=null);else if("playing"==a.type)d=8,e=null,g.T(b,32)&&(d|=32),k&&g.T(b,1)&&VF(f,m)&&(d|=1);else if("error"==a.type){b:{if(2==m.kd())f="progressive.net.retryexhausted";else if(3==m.kd())f="fmt.decode";else if(4==m.kd())f="fmt.unplayable";else{m=null;break b}l="mediaElem.1";m.g.error&&m.g.error.message&&(l+=";msg."+(m.g.error?m.g.error.message:""));.001>Math.random()&&(l+=";gpu."+PK());m={errorCode:f,errorDetail:l,
message:g.Q("YTP_ERROR_GENERIC_WITHOUT_LINK"),messageKey:"YTP_ERROR_GENERIC_WITHOUT_LINK"}}m&&(e=m,d|=128)}else if("progress"==a.type)aG(b)&&VF(f,m)&&(d|=1);else if("seeked"==a.type)d&=-17;else if("seeking"==a.type)d|=16,0>=sy(m)&&(d|=1),d&=-3;else if("waiting"==a.type)g.T(b,2)||(d|=1);else if("timeupdate"==a.type)k=2<m.g.readyState,f.A|=k,g.T(b,16)||g.T(b,4)||(VF(f,m)?d|=1:l&&!k&&f.A||(d&=-2)),1<m.g.readyState&&0<m.getCurrentTime()&&(d&=-65);else break a;b=WF(b,d,e)}}!g.T(this.A,1)&&g.T(b,1)&&RK(this,
"evt_"+a.type);LK(this,b);c&&this.o.play()}}};
g.h.eC=function(a){a="available"==a.o.availability;a!=this.sc&&(this.sc=a,this.U("airplayavailabilitychange"))};
g.h.fC=function(){var a=!!this.o.g.webkitCurrentPlaybackTargetIsWireless;a!=this.bc&&(function(){this.V.Yl=a}.apply(this),this.bc=a)&&(g.nF(this.g,this.V),tL(this,"m"));
this.U("airplayactivechange")};
g.h.Vk=function(){var a=this.o;a&&this.La&&!this.g.se&&!JE("vfp",this.H.g)&&2<=a.g.readyState&&!a.g.ended&&0<iy(ry(a))&&this.H.o("vfp");if((a=this.o)&&!this.g.se&&0<a.getDuration()&&(!JE("pbp",this.H.g)&&a.g.paused&&2<=a.g.readyState&&0<iy(ry(a))&&this.H.o("pbp"),0<a.getCurrentTime())){g.Cr(this.Xa);g.Dr(this.da);this.da=window.NaN;this.g.se=!0;DL(this);if(this.C){a=this.C;if(!a.B){var b=DG(a,"playback");a.K=[10+a.g.videoData.vg,10,10,40+a.g.videoData.Ah-a.g.videoData.vg,40];var c=a.A;g.Cr(c.G);c.G=
window.NaN;c.G=g.Er((0,g.A)(c.update,c),100);c.D=g.HF(c.g);c.A=GF(c.g);b.o=CG(a,!0);b.La=!0;b.send();a.g.videoData.Kj&&(b=a.g.g,c=a.g.videoData,b=g.wg(b.baseYtUrl+"ptracking",{html5:"1",video_id:c.videoId,cpn:c.clientPlaybackNonce,plid:c.playbackId,ei:c.eventId,ptk:c.Kj,oid:c.Ts,ptchn:c.Ss,pltype:c.Us,content_v:b.Fa}),GG(a,b));a.g.videoData.enableCardio&&(a.Uj("playback"),a.C||KG(a));a.g.videoData.Ud||IG(a);a.B=!0;a=a.A;a.o=a.g.o();a.D=g.HF(a.g);!(0==a.B&&5>a.o)&&2<a.o-a.B&&(a.B=a.o)}g.Fr((0,g.A)(this.mn,
this),4500)}this.U("playbackstarted");g.Xt()&&((a=g.y("yt.scheduler.instance.clearPriorityThreshold"))?a():$t(0));return!0}return!1};
g.h.TC=function(){this.Cb&&(this.oa.Qa(this.Cb),delete this.Cb,this.o.jc())};
g.h.wx=function(){if(this.o){var a=this.getCurrentTime();if(g.T(this.A,8)&&TF(this.Wa,a,(0,g.Ot)(),sy(this.o))){var b=this.getDuration();!this.g.xa&&b&&1.1>Math.abs(b-a)?this.o.g.loop?VK(this,0,!0):DK(this):(g.cG(this.A)||RK(this,"progress_fix"),LK(this,XF(this.A,1)))}else g.T(this.A,4)&&g.cG(this.A)&&5<sy(this.o)&&LK(this,YF(this.A,1));zL(this)}};
g.h.Sw=function(){return this.B?NI(this.B.L):AB(this.V.schedule)};
g.h.Ip=function(){return this.o?sy(this.o):0};
g.h.Vw=function(){return this.V.schedule.K};
g.h.XF=function(){var a;if(a=g.T(this.A,1)&&this.B){a=this.B;var b=this.getCurrentTime();a=!(!a.o||Fy(a.o)||Gy(a.o)||RJ(b,a.g,a.o.o)&&RJ(b,a.B,a.o.g))}a&&(a=QJ(this.B),this.Rc("reseek",oD({cur:a.lct,vb:a.lvb,ab:a.lab})),VK(this,this.getCurrentTime(),!0))};
g.h.hx=function(){this.g.xa||this.U("connectionissue")};
g.h.cG=function(){this.o.Kb(this.o.getCurrentTime()+.1)};
g.h.XD=function(a){var b={};g.Ea(b,this.V.B);b.cpn=this.g.clientPlaybackNonce;this.g.je&&(b.vvt=this.g.je,this.g.mdxEnvironment&&(b.mdx_environment=this.g.mdxEnvironment));this.V.Lb&&(b.authuser=this.V.Lb);this.V.pageId&&(b.pageid=this.V.pageId);g.ic(a.G,b);dK(a,a.K)};
g.h.pD=function(a,b,c,d){d=g.t(d)?d:"YTP_ERROR_LICENSE";c=c.substr(0,256);"drm.keyerror"==a&&1<this.G.A.keys.length&&96>this.He&&!this.V.experiments.g("html5_disable_drm_reload")&&(a="drm.sessionlimitexhausted",b=!1);if(b)g.NK(this,a,d,c);else if(this.C)this.C.onError(a,c);"drm.sessionlimitexhausted"==a&&(this.He++,this.gn())};
g.h.qD=function(){tL(this,"r");KK(this)};
g.h.gH=function(a){this.U("heartbeatparams",a)};
g.h.ws=function(){if(!this.g.se&&this.o){var a="0";0<this.o.g.readyState&&5<=sy(this.o)&&this.g.Ta.g&&(LK(this,XF(this.A,1)),RK(this,"load_soft_timeout"),this.U("playbackstalledatstart"),a="1");this.C&&(a={preroll:""+ +UK(this),restartmsg:a},this.B&&g.Ea(a,QJ(this.B)),this.o&&g.Ea(a,vy(this.o)),this.C.onError("qoe.start15s",oD(a)));this.U("loadsofttimeout")}};
g.h.mn=function(){if(!this.Va){var a=new sK(this.g);if("c1a"in a.o){var b=g.y("yt.abuse.botguardInitialized");b=!(b&&b())}else b=!1;if(b)g.Fr((0,g.A)(this.mn,this),4500);else{if(a.g&&a.g.dh){b=[a.g.dh];for(d in a.A)if(a.o[d]&&a.A[d]){var c=a.A[d](a.o);c&&b.push(c)}var d=b.join("&")}else d=null;d&&this.C&&(a=this.C,a.O||(b=DG(a,"atr"),b.T=d,b.send(),a.O=!0),this.Va=!0)}}};
g.h.Nb=function(){return this.g.Nb()};
g.h.Cu=function(){return this.Fa};
g.h.sl=function(){if(this.o)a:{var a=this.o;var b={};if(a.g){if(a.g.getVideoPlaybackQuality){a=a.g.getVideoPlaybackQuality();break a}a.g.webkitDecodedFrameCount&&(b.totalVideoFrames=a.g.webkitDecodedFrameCount,b.droppedVideoFrames=a.g.webkitDroppedFrameCount)}a=b}else a={};return a};
g.h.gn=function(){this.o&&(this.K?qL(this):(this.g.Xf&&this.g.Xf.A(this.V.experiments),this.o.ze()),oL(this))};
g.h.Rc=function(a,b,c){if(this.C){var d=this.C;d.ka()||oG(d.o,a,b,c)}};g.p(HL,LG);g.h=HL.prototype;g.h.getPlayerType=function(){return this.playerType};
g.h.getRootNode=function(){return g.PL(this).element};
g.h.ce=function(){return this.app.B};
g.h.ca=function(a){return(a=g.X(this.app,a||this.playerType))&&a.g};
g.h.isFullscreen=function(){return this.app.V.ha};
g.h.jc=function(a){3==this.Ha()?g.NL(this.app.A).Mh("control_play"):PT(this.app,a)};
g.h.ze=function(a){xL(g.X(this.app,a))};
g.h.addEventListener=function(a,b){this.app.W.subscribe(a,b)};
g.h.removeEventListener=function(a,b){this.app.W.unsubscribe(a,b)};
g.h.Hh=function(a){this.Yq(a,a)};
g.h.Ch=function(a){return pT(this.app,a)};
g.h.getVideoUrl=function(a,b,c,d){var e=this.Ha(),f=2==e;if(d&&f||3==e)f=!1,e=1;d=this.ca(e);if(!d)return"";var k;a||d.xa||(k=Math.floor(this.getCurrentTime(e)));return this.app.V.getVideoUrl(d.videoId,f?void 0:this.getPlaylistId()||void 0,k,b,c)};
g.h.Kh=function(a,b,c){var d=g.IL(this).o;d&&d.Un(a,b,c)};
g.h.Lc=function(){var a=g.X(this.app,1);if(!a)return!1;var b=a.g;return b.sd()&&!g.AF(b)&&2!=this.Ha()&&(!UK(a)||3==this.Ha())};
g.h.Sf=function(a,b){var c=this.app,d=g.X(c,this.playerType);d&&c.V.wb.has(a.toString())?d.C?(c=DG(d.C,"engage"),c.G=a,c.send(b)):b&&b():b&&b()};
g.h.de=function(a,b){nT(this.app,a,b)};
g.h.setVolume=function(a){a=g.td(a,0,100);mx(this.app,{volume:a,muted:this.zc()},!0)};
g.h.mute=function(){mx(this.app,{muted:!0,volume:this.getVolume()},!0)};
g.h.Ae=function(){mx(this.app,{muted:!1,volume:Math.max(5,this.getVolume())},!0)};uM.prototype.fetch=function(a){var b=this;if(!/\[BISCOTTI_ID\]/.test(a))return wM(this,a);var c=1===this.o;c&&this.g.app.H.o("a_bid_s");var d=sM();return null!=d?(c&&this.g.app.H.o("a_bid_f"),wM(this,a,d)):tM().then(function(d){c&&b.g.app.H.o("a_bid_f");return wM(b,a,d)})};g.p(zM,g.rx);g.p(AM,xM);g.p(BM,xM);g.p(FM,xM);FM.prototype.isListed=function(){return this.G};
FM.prototype.isSkippable=function(){return null!=this.C};var PM=["CPN","MIDROLL_POS","SDKV","SLOT_POS"];g.p(UM,g.I);UM.prototype.H=function(a){a.baseUrl&&$M(this,a.baseUrl)};
UM.prototype.G=function(a){(a=a.baseUrl)&&$M(this,a)};g.p(cN,g.gt);g.h=cN.prototype;g.h.getDuration=function(){return this.A.getDuration(2)};
g.h.Dl=function(){VM(this.g,"pause")};
g.h.El=function(){this.D||this.Gl();var a=this.g;a.g.hasOwnProperty("pause")&&VM(a,"resume")};
g.h.Ml=function(){var a=this.g;XM(a,0,!0);YM(a,0,0,!0);VM(a,"complete")};
g.h.Cl=function(){ZM(this.g,"abandon")};
g.h.Fl=function(){ZM(this.g,"skip")};
g.h.Gl=function(){WM(this.g);this.D=!0};
g.h.hj=function(a){var b=this.g;OM(b.o,3,"There was an error playing the video ad. Error code: "+a);VM(b,"error")};
g.h.dispose=function(){dN(this,this.B,3);this.B=[];g.gt.prototype.dispose.call(this)};g.p(fN,cN);fN.prototype.Bj=function(){WM(this.g)};
fN.prototype.Hl=function(){};g.p(gN,aN);g.p(hN,cN);hN.prototype.Bj=function(){var a=new gN(this.o.g,QM(this.macros));eN(this,[a])};
hN.prototype.Hl=function(){};g.p(iN,aN);g.p(jN,aN);g.p(kN,aN);g.p(lN,aN);g.p(mN,aN);g.p(nN,aN);g.p(tN,cN);g.h=tN.prototype;g.h.yw=function(a){if((a=g.bg(a.response))&&a.items&&a.items.length){a=a.items[0].snippet;if(a){var b=a.title;var c=g.Yb(a,"thumbnails","default","url")}(a=this.o.T)&&b&&c?c=[new lN(a),new jN(c),new mN(b)]:(g.xr(Error("Channel metadata contains null for "+(a?b?"channel icon thumbnail.":"channel name.":"video title."))),c=[]);eN(this,c)}};
g.h.Bj=function(){var a=LN(this.o);this.A.Jh(a,!0,2);this.C.start()};
g.h.Dl=function(){cN.prototype.Dl.call(this);this.U("e",2)};
g.h.El=function(){cN.prototype.El.call(this);this.U("f",1)};
g.h.Gl=function(){cN.prototype.Gl.call(this);this.C.stop();this.A.zc()&&VM(this.g,this.A.zc()?"mute":"unmute");this.U("f",1);if(this.o.isListed()&&this.o.B){var a=g.wg("https://www.googleapis.com/youtube/v3/channels",{id:this.o.B,part:"snippet",fields:"items/snippet/title,items/snippet/thumbnails/default/url",key:"AIzaSyA-dlBUjVQeuc4a6ZN4RkNUYDFddrVLxrA"}),b={timeout:2E3,method:"GET"};b.nb=(0,g.A)(this.yw,this);g.Ur(a,b)}a=new iN;a.adBadgeText=g.Q("YTP_AD_BADGE");b=this.o.K;1<b.o&&(a.adPodPositionInfoString=
g.Q("YTP_AD_POD_POSITION",{AD_INDEX:b.g+1,ADS_COUNT:b.o}));a.adBreakLengthSeconds=b.adBreakLengthSeconds;a.adBreakRemainingLengthSeconds=b.adBreakRemainingLengthSeconds;a.adPodPosition=b.g+1;a.adPodLength=b.o;if(b=this.o.W)a.adVideoId=b;a=[a];(b=this.o.L)&&a.push(new nN(b));if(this.o.isSkippable()){b=this.o.o;b=b.playerOverlay&&b.playerOverlay.instreamAdPlayerOverlayRenderer&&b.playerOverlay.instreamAdPlayerOverlayRenderer.skipOrPreviewRenderer&&b.playerOverlay.instreamAdPlayerOverlayRenderer.skipOrPreviewRenderer.skipAdRenderer;
if(null==b){var b={preskipRenderer:{}},c=b.preskipRenderer,d=this.A.ca(1),e={},f={},k={},l=g.Q("YTP_CAN_SKIP_AD_SOON",{NEW_LINE:"\n",TIME_REMAINING:"{TIME_REMAINING}"});k.text=l;k.isTemplated=!0;f.countdownSeconds=5;f.templatedAdText=k;e.templatedCountdown=f;e.thumbnail={};f={};f.url=eD(g.W(this.A),d.videoId,"mqdefault.jpg");f.width=320;f.height=180;e.thumbnail.thumbnail={thumbnails:[f]};c.adPreviewRenderer=e;b.skippableRenderer={};c=b.skippableRenderer;d={message:{}};d.message.text=g.Q("YTP_SKIP_AD");
c.skipButtonRenderer=d}c=this.o;a.push(new kN(b,null!=c.C?c.C:0))}eN(this,a)};
g.h.Ml=function(){cN.prototype.Ml.call(this);uN(this,"d")};
g.h.Cl=function(){cN.prototype.Cl.call(this);uN(this,"a")};
g.h.Fl=function(){cN.prototype.Fl.call(this);uN(this,"d")};
g.h.hj=function(a){cN.prototype.hj.call(this,a);uN(this,"d")};
g.h.lx=function(){this.hj("net.timeout")};
g.h.Hl=function(a){switch(a){case "ad-channel-thumbnail":case "advertiser-name":a=g.W(this.A).X+"://"+cD(g.W(this.A))+"/channel/"+this.o.B;g.sN(a);break;case "ad-title":this.A.ac();g.sN(this.A.getVideoUrl());break;case "visit-advertiser":this.A.ac();if(a=this.o.D){var b=this.g,c=a.loggingUrls||null;c&&(0,g.G)(c,b.H,b);a.urlEndpoint&&a.urlEndpoint.url&&g.sN(a.urlEndpoint.url)}ZM(this.g,"clickthrough");break;case "skip-button":this.Fl()}};g.p(AN,g.gt);g.h=AN.prototype;g.h.Cj=function(a){a=void 0===a?!1:a;this.Qh(0);var b=this.g;b.unsubscribe("onAdUxUpdate",this.gt,this);b.unsubscribe("d",this.Cj,this);b.unsubscribe("a",g.B(this.Cj,!0),this);b.unsubscribe("e",this.Qh,this);b.unsubscribe("f",this.Qh,this);g.ue(this.g);this.g=null;a?HN(this,a):KN(this)};
g.h.Qh=function(a){this.U("g",a)};
g.h.gt=function(a){this.U("onAdUxUpdate",a)};
g.h.GF=function(a){a=vN(this.R,a,this.H);a.Bj();g.ue(a)};
g.h.dG=function(a){a=vN(this.R,a,this.H);var b=a.g;OM(b.o,0,"No playable media files can be selected");VM(b,"error");g.ue(a)};
g.h.Pr=function(a){(a=a.baseUrl)&&g.is(a,void 0,Qn.pj(a))};g.p(MN,g.gt);g.h=MN.prototype;g.h.init=function(){var a=this,b=this.g.ca().getPlayerResponse()||{};zN(b);this.H.N(this.g,"applicationplayerstatechange",this.JB);b=NN(b);null!=b&&(this.A=(0,g.H)(b,function(a,b){var c=new IM(a,b,this.O);return g.P("SERVED_VIA_SPF_HISTORY")&&Ia(g.Wa(c.C))?null:c},this));
(0,g.fe)(this.A,function(a){return null!=a});
g.Eb(this.A,function(a,b){return a.B-b.B});
0<this.A.length&&ON(this);this.H.N(this.g,"crn_ad",this.Tm,this);this.H.N(this.g,"crx_ad",this.KB,this);var c=this.G.filter(function(a){return-0x8000000000000==a.start});
g.pb(c)?(b=g.W(this.g),g.RC(b)||"TV_UNPLUGGED_CAST"==b.B.c||(this.G.forEach(function(a){a.o=!1}),this.gu()),this.K()):g.tf(function(){a.ka()||(0,g.G)(c,a.Tm,a)});
g.tf(this.gu,this)};
g.h.Y=function(){g.ft(this.H);g.Qb(this.B,function(a){QN(this,a)},this);
this.Zj();this.G=[];this.A=[];this.D=null;this.B={};g.gt.prototype.Y.call(this)};
g.h.Tm=function(a){if(!a.o){this.D=null;var b=g.OL(this.g);if(g.T(b,32)||g.T(b,16))this.D=a;else if(b=a.getId(),b in this.B){var b=this.B[b],c=(0,window.parseInt)(a.getId(),10);b.A=a;"AD_PLACEMENT_KIND_START"!=b.o.A&&b.o.C?GN(b):(0,window.isNaN)(c)||"ytp-ad-fadeout"==a.style||(b.A=a,CN(b.G,[b.A]),DN(b))}}};
g.h.KB=function(a){a.o&&(a.o=!1);a==this.D&&(this.D=null)};
g.h.St=function(a){this.o&&this.Zj();this.o=a;0<a.o.g.length&&(this.C.N(this.g,"presentingplayerstatechange",this.MB),this.C.N(this.g,"internalAbandon",this.IB),this.C.N(this.g,"aduxclicked",this.bC),this.C.N(this.g,"progresssync",this.NB),this.C.N(this.g,"onVolumeChange",this.OB),this.C.N(this.g,"fullscreentoggled",this.LB),g.xo(this.g.getRootNode(),["ad-showing","ad-interrupting"]),YS(this.g.app,2))};
g.h.Zj=function(){var a=!!this.o&&!!this.o.B&&PN(this);this.o&&QN(this,this.o);this.o=null;if(a){g.ft(this.C);a=this.g;if(2==ML(a.app)){var a=a.app,b=g.X(a,2);b&&(b!=a.o?XS(a,a.o):ZS(a))}g.yo(this.g.getRootNode(),["ad-showing","ad-interrupting"])}this.K()};
g.h.MB=function(a){if(this.o){var b=this.o;null!=b.g&&(a=a.state,g.T(a,2)?(a=b.C,a.o=!1,a.L?FE("ad_to_video",["pbresume"]):FE("ad_to_ad",["apbs"]),b.g.Ml()):a.Ab()?(a=b.C,a.D&&!a.o&&(a.K=!1,a.o=!0,"ad_to_video"!=a.g&&g.qE("apbs",void 0,a.g)),b.g.El()):g.T(a,4)?b.g.Dl():a.isError()&&b.g.hj(a.g.errorCode))}};
g.h.JB=function(a){0>fG(a,16)&&this.D&&this.Tm(this.D)};
g.h.NB=function(){if(PN(this)&&this.o){var a=this.g.getCurrentTime(2),b=this.o.g;if(b.D){var c=b.g,b=b.getDuration();0<b&&(XM(c,a),YM(c,a,b))}}};
g.h.IB=function(){if(this.o){var a=this.o;null!=a.g&&a.g.Cl()}};
g.h.bC=function(a){if(this.o){var b=this.o;null!=b.g&&b.g.Hl(a)}};
g.h.OB=function(){if(2==this.g.Ha()&&this.o){var a=this.o.g;VM(a.g,a.A.zc()?"mute":"unmute")}};
g.h.LB=function(a){this.o&&VM(this.o.g.g,a?"fullscreen":"end_fullscreen")};
g.h.gu=function(){var a=this.G.filter(function(a){return-0x8000000000000!=a.start});
fM(this.g,a)};
g.h.ct=function(a){var b=this.g.app;1==a&&(b.H.o("vr"),b.ha||(b.ha=cE(b.ms,b)),DL(b.C),NG(b.H,KT(b)));var c=b.V;("leanback"==c.g&&c.gb||g.RC(c))&&b.g.va("onAdStateChange",a)};
g.h.ht=function(a){this.g.va("onAdUxUpdate",a)};g.C(g.RN,g.gt);g.h=g.RN.prototype;g.h.load=function(){this.loaded=!0};
g.h.unload=function(){this.loaded=!1};
g.h.Bc=function(){return!0};
g.h.Y=function(){this.loaded&&this.unload();g.RN.ea.Y.call(this)};
g.h.Fu=function(){return{}};g.C(SN,g.RN);g.h=SN.prototype;g.h.Iu=function(){return-1};
g.h.create=function(){this.o||(g.L(this.g.getRootNode(),this.A+"-created"),this.C.N(this.g,"crn_"+this.A,this.PC),this.C.N(this.g,"crx_"+this.A,this.QC),this.o=!0)};
g.h.destroy=function(){g.M(this.g.getRootNode(),this.A+"-created");g.ft(this.C);this.o=!1;this.U("destroyed",this.A)};
g.h.PC=function(){};
g.h.QC=function(){};
g.h.Y=function(){this.o&&this.destroy();SN.ea.Y.call(this)};g.C(g.TN,g.U);g.TN.prototype.subscribe=function(a,b,c){return this.ba.subscribe(a,b,c)};
g.TN.prototype.unsubscribe=function(a,b,c){return this.ba.unsubscribe(a,b,c)};
g.TN.prototype.Qc=function(a){return this.ba.Qc(a)};
g.TN.prototype.U=function(a,b){return this.ba.U.apply(this.ba,arguments)};g.p(UN,g.TN);UN.prototype.init=function(){};
UN.prototype.clear=function(){};
UN.prototype.getImageUrl=function(a){a=void 0===a?null:a;return null==a||(a=a.thumbnail,null==a||null==a.thumbnails||g.pb(a.thumbnails)||null==a.thumbnails[0].url)?"":g.Wa(a.thumbnails[0].url)};g.p(YN,UN);g.h=YN.prototype;g.h.init=function(a){"ad-attribution-bar"==a.componentType?(this.o.hide(),this.D=a.adBadgeText,this.C||(this.C=this.N(this.B,"progresssync",this.Qr)),g.N(this.element,"ytp-ad-clickable",!1),this.Qr(),this.o.show(),this.show()):"visit-advertiser"==a.componentType&&a.visitAdvertiserLabel&&(a=g.Wa(g.VE(a.visitAdvertiserLabel)),this.A.rb(!Ia(a)),this.A.update({visitAdvertiserText:a}),this.show())};
g.h.clear=function(){this.hide();this.o.hide();this.A.hide();this.Qa(this.C);this.C=null};
g.h.aC=function(){};
g.h.pF=function(a){g.ct(a);this.B.Bm("visit-advertiser")};
g.h.Qr=function(){var a=this.B.getDuration(2),b=this.B.getCurrentTime(2),a=g.WN(a-b),b=this.D||"";this.G&&g.ke(this.G,b?b+" \u00b7 "+a:a)};g.p(bO,UN);g.h=bO.prototype;
g.h.init=function(a,b){if("invideo-overlay"==a.componentType){this.o=a.renderer;this.H=this.o.onClickCommands||[];this.G=b;var c;if(c=this.o.contentSupportedRenderer)if(c=this.o.contentSupportedRenderer,cO(this),c.textOverlayAdContentRenderer){c=c.textOverlayAdContentRenderer;var d=VN(c.title),e=VN(c.description);Ia(d)||Ia(e)?c=!1:(this.D.pa("title",VN(c.title)),this.D.pa("description",VN(c.description)),this.D.pa("displayUrl",VN(c.displayUrl)),c.navigationEndpoint&&xb(this.H,c.navigationEndpoint),
dO(this,this.D),this.D.show(),c=!0)}else if(c.enhancedTextOverlayAdContentRenderer)c=c.enhancedTextOverlayAdContentRenderer,d=VN(c.title),e=VN(c.description),Ia(d)||Ia(e)?c=!1:(this.A.pa("title",VN(c.title)),this.A.pa("description",VN(c.description)),this.A.pa("displayUrl",VN(c.displayUrl)),this.A.pa("imageUrl",this.getImageUrl(c.image)),c.navigationEndpoint&&xb(this.H,c.navigationEndpoint),this.K=c.imageNavigationEndpoint||null,dO(this,this.A),this.A.show(),c=!0);else if(c.imageOverlayAdContentRenderer){c=
c.imageOverlayAdContentRenderer;b:{d=c.image;d=void 0===d?null:d;if(null!=d&&(d=d.thumbnail,null!=d&&null!=d.thumbnails&&!g.pb(d.thumbnails)&&null!=d.thumbnails[0].width&&null!=d.thumbnails[0].height)){d=new g.Cd(d.thumbnails[0].width||0,d.thumbnails[0].height||0);break b}d=new g.Cd(0,0)}0==d.width||0==d.height?c=!1:(this.B.pa("imageUrl",this.getImageUrl(c.image)),this.B.pa("width",d.width),this.B.pa("height",d.height),c.navigationEndpoint&&xb(this.H,c.navigationEndpoint),g.Vg(this.B.ma["ytp-ad-image-overlay"],
"max-width",d.width+"px"),dO(this,this.B),this.B.show(),c=!0)}else c=!1;c&&(this.C.start(),this.show(),eO(this,!0),$N(this.o&&this.o.impressionCommands?this.o.impressionCommands:[],this.G))}};
g.h.clear=function(){cO(this);this.hide();eO(this,!1);this.C.reset()};
g.h.Rh=function(){$N(this.H,this.G)};
g.h.ZE=function(){this.K&&ZN(this.K,this.G)};
g.h.Um=function(){this.hide();eO(this,!1);this.C.reset();a:{if(this.o&&this.o.closeButton&&this.o.closeButton.buttonRenderer){var a=this.o.closeButton.buttonRenderer;if(a.serviceEndpoint){a=[a.serviceEndpoint];break a}}a=[]}$N(a,this.G)};
g.h.Ym=function(){var a=this.o&&this.o.attributionEndpoint?this.o.attributionEndpoint:null;null!=a&&ZN(a,this.G)};
g.p(aO,g.I);g.h=aO.prototype;g.h.reset=function(){this.D=!1;this.g.stop();this.A.stop();this.o=!1;g.M(this.C,this.B)};
g.h.start=function(){this.reset();this.g.start()};
g.h.SD=function(){this.o&&(this.o=!1,g.M(this.C,this.B));this.A.stop();this.g.stop()};
g.h.PD=function(){this.D?this.A.start():this.g.start()};
g.h.Ko=function(){this.o||(this.o=!0,g.L(this.C,this.B),this.D=!0)};g.C(g.iO,g.I);g.h=g.iO.prototype;g.h.show=function(a){1!=this.g&&2!=this.g&&(3==this.g&&this.fk(),4==this.g?(this.o.show(),this.g=null,this.A.stop()):this.o.g||(jO(this,!0),this.g=1,a?this.A.start(a):this.fk()))};
g.h.hide=function(){3!=this.g&&(1==this.g||2==this.g?(this.o.hide(),this.g=null,this.A.stop()):this.o.g&&(jO(this,!0),this.g=3,this.A.start(this.B)))};
g.h.fk=function(){switch(this.g){case 1:this.o.show();this.g=2;this.A.start(10);break;case 2:jO(this,!1);this.g=null;break;case 3:this.o.hide();jO(this,!1);this.g=4;this.A.start(0);break;case 4:this.g=null}};
g.h.stop=function(){for(;null!=this.g&&4!=this.g;)this.A.stop(),this.fk()};
g.h.Y=function(){this.o.ka()||this.o.element.removeAttribute("aria-hidden");g.iO.ea.Y.call(this)};g.p(kO,UN);g.h=kO.prototype;
g.h.init=function(a,b){if("skip-button"==a.componentType){this.L=b;this.o=a.skipAdRenderer;this.K=!1;this.A=a.g;if((0,window.isNaN)(this.A)||0>this.A)this.A=5E3;var c=this.o&&this.o.preskipRenderer&&this.o.preskipRenderer.adPreviewRenderer||{};g.cc(c)&&g.xr(Error("AdPreviewRenderer was not set in player response."),"ERROR");c.staticPreview?this.G=c.staticPreview:c.templatedCountdown&&(this.G=c.templatedCountdown.templatedAdText||null);c.thumbnail&&(c=this.getImageUrl(c.thumbnail),this.C.pa("preskipTextImage",
c));c=this.o&&this.o.skippableRenderer&&this.o.skippableRenderer.skipButtonRenderer||{};g.cc(c)&&g.xr(Error("SkipButtonRenderer was not set in player response."),"ERROR");c.message&&(c=VN(c.message),0===c.length&&(c=g.Q("YTP_SKIP_AD")),this.D.pa("skipText",c));this.B||(this.B=this.N(this.R,"progresssync",this.iu));this.H.show();this.iu();this.show()}};
g.h.PB=function(a){0<fG(a,2)&&(lO(this),this.hide())};
g.h.clear=function(){lO(this);this.O.hide();this.H.hide();this.hide()};
g.h.RE=function(a){g.ct(a);this.K&&(this.R.Bm("skip-button"),$N(this.o&&this.o.skippableRenderer&&this.o.skippableRenderer.skipButtonRenderer&&this.o.skippableRenderer.skipButtonRenderer.onClickCommands||[],this.L))};
g.h.iu=function(){var a=1E3*this.R.getCurrentTime(2);a>=this.A?(lO(this),this.H.hide(),this.O.show(),this.K=!0,$N(this.o&&this.o.skippableRenderer&&this.o.skippableRenderer.impressionCommands||[],this.L)):(a=Math.max(0,Math.ceil((this.A-a)/1E3)),a!=this.T&&(this.G&&this.C.pa("preskipText",VN(this.G,{TIME_REMAINING:a})),this.T=a))};g.p(oO,g.dt);oO.prototype.B=function(a){null!=a&&(0,g.G)(a,(0,g.A)(function(a){if(a instanceof bN){var b=a.content;if(null!=b){var d=dc(this.A,b.componentType,null),e=b.macros?b.macros:{};if(d)switch(a.actionType){case 1:a={};g.ic(a,e,this.D);d.init(b,a);break;case 3:d.clear(b)}}}},this))};
oO.prototype.C=function(){g.Qb(this.A,function(a){a.clear(null)})};g.p(pO,SN);g.h=pO.prototype;g.h.create=function(){var a=this.g.ca().getPlayerResponse()||{};zN(a)&&(SN.prototype.create.call(this),this.B=new MN(this.g,new uM(this.g)),this.B.init())};
g.h.destroy=function(){SN.prototype.destroy.call(this);var a=this.B;this.B=null;a.dispose()};
g.h.Bc=function(){return!1};
g.h.rA=function(){var a=this.B,b=a.g.ca(2);return b?b.isListed&&!g.RC(g.W(a.g)):!1};
g.h.kr=function(a){var b=this.B;switch(a){case "control_play":PN(b)&&oL(g.X(b.g.app));break;case "control_pause":PN(b)&&XK(g.X(b.g.app))}};
g.h.Iu=function(){return-1};var uW=[2,5];var vW=!1,wW=!1;g.zt("showCompanionAdLoaded",function(){if(wW){var a=g.y("window.google_show_companion_ad");var b=g.y("yt.www.watch.ads.getGlobals");g.wa(a)&&g.wa(b)?(b=b(),b=!(!b||!b.length)):b=!1;b?a():wW=!0;wW=!1}});
g.zt("watchAdsInit",function(){if(vW){vW=!1;var a=g.y("yt.www.watch.ads.loadAfc");g.wa(a)?a():vW=!0}});qO.prototype.getLength=function(){return this.g-this.o};tO.prototype.update=function(a,b,c,d){this.width=b;this.A=c;this.C=d;this.g=b-c-d;this.B=g.td(a-c,0,this.g);this.position=this.B+c;this.o=this.B/this.g};new function(a,b){this.o=a;this.g=g.pa(b)?b:null;if(g.ob(uW,this.o)){if(!g.pa(this.g)||0>this.g)throw Error("Must have valid offset");}else if(null!==this.g)throw Error("Must not have offset");}(1);g.x("yt.www.ads.eventcache.getLastCompanionData",function(){return null},void 0);
g.x("yt.www.ads.eventcache.getLastPlaShelfData",function(){return null},void 0);g.C(vO,g.I);g.h=vO.prototype;g.h.rp=function(){if(!this.g){var a=this.rp;if("lb3"==g.W(this.R).o)var b=!1;else b=this.R.ca(),b=b.Gi||b.captionTracks.length||b.xa&&b.sa&&null!=b.sa.g.en?!0:!1;(a=zO(this,"captions",a,b))&&!this.g&&(this.g=a,this.R.va("onApiChange"))}};
g.h.mp=function(){this.K=this.K||zO(this,"endscreen",this.mp,g.wO(this))};
g.h.tp=function(){var a;if(!(a=this.B)){a=this.tp;var b=g.W(this.R).experiments;var c=g.as()&&(Zr("ps4 vr")||Zr("ps4 pro vr")),d=c&&b.g("enable_spherical_ps4"),c=c&&b.g("enable_mesh_ps4"),e=b.g("enable_mesh_cobalt"),f=b.g("enable_spherical_kabuki"),k=this.R.ca(),l=lD(g.W(this.R));b=k.Xd()?c||e||l:k.We()?l||d||!1||f||b.g("html5_enable_spherical"):k.xe()?l||d||!1||b.g("html5_enable_spherical3d"):k.Of()?l||b.g("html5_enable_anaglyph3d"):l&&(b.g("enable_webgl_noop")||b.g("enable_white_noise"));a=zO(this,
"webgl",a,b)}this.B=a};
g.h.vp=function(){this.O=this.O||zO(this,"ypc",this.vp,g.zF(this.R.ca(),"ypc_module"))};
g.h.up=function(){this.X=this.X||zO(this,"ypc_clickwrap",this.up,g.zF(this.R.ca(),"ypc_clickwrap_module"))};
g.h.qp=function(){this.W=this.W||zO(this,"spacecast",this.qp,this.R.ca().spacecastModule)};
g.h.pp=function(){this.T=this.T||zO(this,"heartbeat",this.pp,g.zF(this.R.ca(),"ypc_license_checker_module"))};
g.h.kp=function(){if(!this.o){var a=this.kp;var b=g.W(this.R);if("3"==b.C)b=!1;else if(b.L.isEmpty()&&"annotation-editor"!=b.o&&"live-dashboard"!=b.o){var c=this.R.ca();b=b.experiments.g("disable_new_iv_module_create_logic")?g.zF(c,"iv3_module"):!!c.Rd}else b=!0;if(this.o=zO(this,"annotations_module",a,b)){var a=this.o,d;for(d in this.fa)a.subscribe(d,this.fa[d]);this.R.va("onApiChange")}}};
g.h.np=function(){this.G=this.G||zO(this,"fresca",this.np,g.zF(this.R.ca(),"fresca_module"))};
g.h.Xk=function(){this.L||(this.L=zO(this,"remote",this.Xk,g.W(this.R).ib))&&this.L.create()};
g.h.sp=function(){this.C||(this.C=zO(this,"unplugged",this.sp,g.W(this.R).Ea))&&this.C.init()};
g.h.lp=function(){if(!this.H){var a=this.lp;var b=g.W(this.R);"3"==b.C?b=!1:"creator-endscreen-editor"==b.o?b=!0:(b=this.R.ca(),b=!!b&&!!g.EF(b));(this.H=zO(this,"creatorendscreen",a,b))&&this.R.va("onApiChange")}};
g.h.Y=function(){vO.ea.Y.call(this);AO(this,!0)};g.C(CO,g.U);CO.B="(max-width: 656px)";CO.A="(min-width: 657px)";CO.o="(min-width: 1294px) and (min-height: 630px)";CO.g="(min-width: 1720px) and (min-height: 980px)";g.h=CO.prototype;g.h.Vx=function(){this.D=new g.Gg(0,0,0,0);this.B=new g.Gg(0,0,0,0)};
g.h.Yn=function(a){g.xo(this.element,arguments)};
g.h.ke=function(){if(this.o){var a=this.Na();if(!a.isEmpty()){var b=!g.Dd(a,g.Kg(this.B)),c=DO(this);b&&(this.B.width=a.width,this.B.height=a.height);a=this.app.V;(c||b||a.la)&&this.app.g.U("resize",this.Na())}}};
g.h.xH=function(a,b){HO(this,b)};
g.h.yH=function(a){a.g&&HO(this,a.g)};
g.h.Na=function(){var a=this.app.V,b=g.Ls()==this.element;if(b&&$r())return new g.Cd(window.outerWidth,window.outerHeight);if(b||a.Gk){if(window.matchMedia){a="(width: "+window.innerWidth+"px) and (height: "+window.innerHeight+"px)";this.C&&this.C.media==a||(this.C=window.matchMedia(a));var c=this.C&&this.C.matches}if(c)return new g.Cd(window.innerWidth,window.innerHeight)}else if(this.T&&!this.app.Ka)for(a=0;a<this.T.length;a++)if(b=this.T[a],b.query.matches)return new g.Cd(b.size.width,b.size.height);
return new g.Cd(this.element.clientWidth,this.element.clientHeight)};
g.h.vx=function(){this.o&&EO(this);(this.app.V.experiments.g("player_state_change_resize_killswitch")||MO(this)!=this.K)&&this.ke()};
g.h.zH=function(){EO(this)};
g.h.Y=function(){this.A&&(this.A.disconnect(),this.A=null);this.G&&g.At(this.G);this.o=null;CO.ea.Y.call(this)};g.C(NO,g.gt);g.h=NO.prototype;g.h.uH=function(a){a=Ys(a);if(!Ad(a,this.C)){var b=2;this.G&&(b|=8);this.C=a;this.Eb(b,!0)}};
g.h.SB=function(){this.G&&this.Eb(8,!0);this.Eb(2,!1)};
g.h.Xn=function(a){var b=Ys(a);Ad(b,this.C)||(this.C=b,(a=g.Ws(a))&&this.X(a)&&(this.Eb(4,!0),this.g.Qa(this.B),this.B=this.g.N(this.A,"mouseover",this.Mu),this.O=this.g.N(this.A,"mouseout",this.Mu)))};
g.h.Mu=function(a){a=Zs(a);a&&this.X(a)||(this.C=new g.zd(window.NaN,window.NaN),OO(this))};
g.h.ny=function(){this.Eb(1,!0)};
g.h.Mw=function(a){a=g.Ws(a);a instanceof window.Element&&!(0<a.tabIndex)||this.Eb(1,!0)};
g.h.Lu=function(){this.G=!0;this.g.Qa(this.D);this.D=this.g.N(window.document,"mouseup",this.vH)};
g.h.vH=function(){this.G=!1;this.Eb(8,!1);this.g.Qa(this.D);this.D=this.g.N(this.A,"mousedown",this.Lu)};
g.h.Nu=function(a){if(a=a.changedTouches[0])this.aa=a.identifier,this.g.Qa(this.H),this.H=this.g.N(this.A,"touchend",this.wH,void 0,!0),this.Eb(1024,!0)};
g.h.wH=function(a){for(var b,c=0;c<a.changedTouches.length;c++){var d=a.changedTouches[c];if(d.identifier==this.aa){b=d;break}}b&&(this.g.Qa(this.H),this.H=this.g.N(this.A,"touchstart",this.Nu,void 0,!0),this.Eb(1024,!1))};
g.h.Eb=function(a,b){var c=!this.o;b?(this.o|=a,a&1&&this.K.start(),a&2&&this.L.start()):(this.o&=~a,a&1&&this.K.stop(),a&2&&this.L.stop(),a&512&&this.T.stop());this.o&512&&!(this.o&128)&&this.T.Wc(this.W);var d=!this.o;c!=d&&this.U("autohideupdate",d)};g.C(QO,g.U);QO.prototype.show=function(){QO.ea.show.call(this);this.O()};
QO.prototype.O=function(){var a=1-1/1.5;this.B=(this.B+this.K)%(this.width*a);this.C=(this.C+this.H)%(this.height*a);this.A.drawImage(this.L,-1*this.B,-1*this.C);this.A.fillRect(0,this.D,this.width,75);this.D=(this.D+75+7)%this.height-75;this.o.isActive()||this.G.Wc()};
QO.prototype.hide=function(){this.o.stop();this.G.stop();QO.ea.hide.call(this)};g.C(XO,g.U);var xW=/<a\s+href=["']([^"']+)["'](?:\s+target=["']([^"']+)["'])?>([^<>]+)<\/a>/;XO.prototype.show=function(){XO.ea.show.call(this);YO(this,function(a){a.show()})};
XO.prototype.hide=function(){XO.ea.hide.call(this);YO(this,function(a){a.hide()})};
XO.prototype.C=function(a){if(g.TO(a,this.o,!gD(g.W(this.o)))){a={as3:!1,html5:!0,player:!0,cpn:this.o.ca().clientPlaybackNonce};var b=this.o;b.va("onFeedbackArticleRequest",{articleId:3037019,helpContext:"player_error",productData:a});b.isFullscreen()&&g.RL(b)}};g.sa(cP);var SS=g.y("yt.player.utils.VideoTagPool.instance")||cP.getInstance();g.x("yt.player.utils.VideoTagPool.instance",SS,void 0);g.h=cP.prototype;g.h.Cp=function(a){if(!(this.g.length>=a)){a-=this.g.length;for(var b=0;b<a;b++)gP(this)}};
g.h.Yw=function(a,b){if(this.g.length)return this.g.pop();var c=gP(this,a,b);a||g.tb(this.g,c);return c};
g.h.UF=function(a){if(a&&g.ob(this.o,a)){a.src&&(OB&&0<a.readyState&&(a.currentTime=Math.max(lW,0)),a.removeAttribute("src"),a.load(),a.g&&a.g.o&&(a.g&&a.g.dispose(),a.g=null));for(var b in Rs)Rs[b][0]==a&&g.Vs(b);g.tb(this.o,a);g.tb(this.A,a)}};
g.h.Wx=function(a){return this.g.length>=(a||1)};
g.h.pw=function(){for(var a=this.A.length-1;0<=a;a--)fP(this,this.A[a]);this.g.length==this.o.length&&4<=this.g.length||(4>this.o.length?this.Cp(4):(this.g=[],(0,g.G)(this.o,function(a){fP(this,a)},this)))};
cP.prototype.fillPool=cP.prototype.Cp;cP.prototype.getTag=cP.prototype.Yw;cP.prototype.releaseTag=cP.prototype.UF;cP.prototype.hasTags=cP.prototype.Wx;cP.prototype.activateTags=cP.prototype.pw;g.C(hP,g.U);g.C(jP,g.U);jP.prototype.show=function(){jP.ea.show.call(this);this.H()};
jP.prototype.hide=function(){jP.ea.hide.call(this);this.G.stop()};
jP.prototype.H=function(){var a=g.X(this.o),b=$S(this.o),c=this.o.g,d=c.app.D.na(),e=this.o.V,f=a.sl(),k=xK(a.aa,"bandwidth"),l=8*g.eb(k)/1024,m=xK(a.aa,"networkactivity"),n=g.eb(m)/1024,q=b.xa;var r=this.o;r=(r=r.o&&r.o.L)?r.C.ub():[0];var v=g.eb(r),D=xK(a.aa,"bufferhealth"),E=g.eb(D),v=120<v||0>v?"Uncertain":v.toFixed(1)+" s, "+(b.isLowLatencyLiveStream?"Optimized for Low Latency":"Optimized for Smooth Streaming");if(a.G){var z=a.G.g;z=z.g+" / "+z.o;Ww(lK,aL(a))&&(z+=", SD only")}else z="";var R=
g.hD(),V=uF(b,a.getCurrentTime()),V=V?V.sequence:window.NaN,c=g.VL(c).infopanel,xa=b.videoId,ra=b.clientPlaybackNonce,Y=b.clientPlaybackNonce?"":"display:none",f=f.totalVideoFrames?""+(f.droppedVideoFrames||0)+"/"+f.totalVideoFrames:"-",gb=a.B?a.B.Fa:"",fc;a:{if(b.rf&&(fc=b.rf.match(/url=(https?)/))&&2==fc.length){fc=fc[1];break a}fc=""}d={video_id:xa,cpn:ra,cpn_style:Y,mime:"",dash:"no",dropped_frames:f,stream_host:gb,stream_type:fc||e.X,dimensions:d.clientWidth+" x "+d.clientHeight+(1<R?" * "+R:
""),resolution:d.videoWidth+" x "+d.videoHeight,volume:Math.round(this.o.K.getVolume())+"%",bandwidth_kbps:l.toFixed(0)+" Kbps",buffer_health_seconds:E.toFixed(1)+" s",live_latency_style:q?"":"display:none",live_latency_message:v,drm_style:z?"":"display:none",drm:z,sequence_number:V,sequence_number_style:"display:none",network_activity_bytes:n.toFixed(0)+" KB",shader_info:c,shader_info_style:c?"":"display:none"};b.Ba&&(e=Ow(b.Ba)?"yes":"no",e+=" ("+Kw(b.Ba),b.uc&&Ow(b.Ba)&&(e+="/"+Kw(b.uc)),d.dash=
e+")",d.mime=b.Ba.mimeType,e=b.Ba.video.fps,1<e&&(d.resolution+="@"+e),b.Ba.video.g||b.Ba.video.primaries?(e=b.Ba.video.g||"unknown","smpte2084"==e?e+=" (PQ)":"arib-std-b67"==e&&(e+=" (HLG)"),d.color=e+" / "+(b.Ba.video.primaries||"unknown"),d.color_style=""):d.color_style="display:none");(a=YK(a))&&a.video&&(d.optimal_resolution=a.video.width+" x "+a.video.height,1<a.video.fps&&(d.optimal_resolution+="@"+a.video.fps));iP(this.A,k);iP(this.D,m);iP(this.C,r);iP(this.B,D);this.update(d);this.G.start()};g.C(kP,g.I);kP.prototype.get=function(a){var b=g.jb(this.o,function(b){return b[0]==a});
return b?b[1]:null};
kP.prototype.set=function(a,b){this.remove(a,!0);for(this.o.push([a,b]);this.o.length>this.A;){var c=this.o.shift();this.g&&this.g(c[1])}};
kP.prototype.remove=function(a,b){if(b&&this.g){var c=this.get(a);if(c)this.g(c);else return}ub(this.o,function(b){return b[0]==a})};
kP.prototype.Y=function(){this.g&&(0,g.G)(this.o,function(a){this.g(a[1])},this)};g.C(mP,g.I);mP.prototype.A=function(a){this.o=a[a.length-1].intersectionRatio};
mP.prototype.Y=function(){mP.ea.Y.call(this);this.o=null;this.g&&this.g.disconnect()};g.yW=ff(function(){var a=g.w.AudioContext||g.w.webkitAudioContext;try{return new a}catch(b){return b.name}});g.p(nP,g.U);nP.prototype.show=function(){g.U.prototype.show.call(this);this.o.Wc()};
nP.prototype.hide=function(){this.A.stop();g.U.prototype.hide.call(this)};g.p(g.tP,g.U);g.p(uP,g.tP);g.h=uP.prototype;g.h.show=function(){this.g||(this.C.N(this.o,"videodatachange",this.B.Wc,this.B),this.C.N(this.o,"videoplayerreset",this.B.Wc,this.B));g.tP.prototype.show.call(this)};
g.h.hide=function(){this.C&&g.ft(this.C);g.tP.prototype.hide.call(this)};
g.h.NA=function(a){var b=g.W(this.o);b.experiments.g("disable_new_pause_state3")&&gD(b)&&(a=bG(a.state)&&!bG(a.g)||QL(this.o)&&g.T(a.state,2),g.Vg(this.element,"transition-delay",a?"2s":""));this.B.Wc()};
g.h.BF=function(){this.B.Wc()};
g.h.MA=function(){this.element.style.backgroundImage=""};
g.h.wr=function(){var a=g.OL(this.o);3==this.o.Ha()&&(a.Ab()||g.T(a,4))?this.A.show():g.IL(this.o).O&&g.IL(this.o).O.oG()?this.A.show():wP(this.A,this.o,a);this.g&&3!=this.A.g&&this.HG(this.o.ce(),this.o.ca())};
g.h.HG=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];for(var c=g.W(this.o),d,b=g.ma(b),e=b.next();!e.done;e=b.next())if(e=e.value,!(!e||e instanceof g.WE&&!e.videoId)){d=g.PL(this.o).Na();var f=g.hD(),k=d.width*f,f=d.height*f;if(1280<k||720<f)if(d=e.yb(c,"maxresdefault.jpg"))break;if(c.experiments.g("enable_popular_thumbnail_size_serving_for_embeds")){if(854<k||480<f)if(d=e.yb(c,"hq720.jpg")||e.yb(c,"maxresdefault.jpg"))break;if(640<k||360<f)if(d=e.yb(c,"pop2.jpg"))break;
if(560<k||315<f)if(d=e.yb(c,"sddefault.jpg"))break;if(480<k||270<f)if(d=e.yb(c,"pop1.jpg"))break}if(640<k||480<f)if(d=e.yb(c,"maxresdefault.jpg"))break;if(c.experiments.g("enable_embed_quality_improvement")){if(480<k||360<f)if(d=e.yb(c,"sddefault.jpg"))break;if(320<k||180<f)if(d=e.yb(c,"hqdefault.jpg"))break;if(120<k||90<f)if(d=e.yb(c,"mqdefault.jpg"))break}if(320<k||180<f)if(d=e.yb(c,"sddefault.jpg")||e.yb(c,"hqdefault.jpg")||e.yb(c,"mqdefault.jpg"))break;if(d=e.yb(c,"default.jpg"))break}this.D.style.backgroundImage=
d?"url("+d+")":""};g.p(yP,g.U);yP.prototype.C=function(a){var b=g.W(this.o);b.experiments.g("disable_new_pause_state3")&&gD(b)&&g.Vg(this.element,"transition-delay",bG(a.state)&&!bG(a.g)?"2s":"");xP(this,a.state)};g.p(AP,g.dt);AP.prototype.C=function(){this.B();var a=g.W(this.R),b=this.R.ca(),c=[];a.H||c.push({src:b.yb(a,"mqdefault.jpg"),sizes:"320x180"});this.g.metadata=new window.MediaMetadata({title:b.title,artist:b.author,artwork:c});a=QL(this.R);this.o.has("nexttrack")!=a&&(c=b=null,a&&(b=(0,g.A)(function(){oP(this.A,jr(),g.Q("YTP_NEXT"));this.R.Cg()},this),c=(0,g.A)(function(){sP(this.A);
this.R.Gh()},this)),zP(this,"nexttrack",b),zP(this,"previoustrack",c))};
AP.prototype.B=function(){var a=g.OL(this.R);a=a.isError()?"none":aG(a)?"playing":"paused";this.g.playbackState=a};
AP.prototype.Y=function(){this.g.playbackState="none";this.g.metadata=null;for(var a=g.ma(this.o),b=a.next();!b.done;b=a.next())zP(this,b.value,null);g.dt.prototype.Y.call(this)};g.p(BP,g.U);BP.prototype.T=function(a,b){CP(this,b);this.D&&DP(this,this.D)};
BP.prototype.O=function(a){var b=this.R.ca();this.A!=b.videoId&&CP(this,b);this.o&&DP(this,a.state);this.D=a.state};
BP.prototype.L=function(){this.C.hide();this.A&&(this.B[this.A]=(this.B[this.A]||0)+((0,g.F)()-this.H));this.H=0};g.p(FP,g.U);FP.prototype.hide=function(){this.o.stop();this.B.style.display="none";g.U.prototype.hide.call(this)};
FP.prototype.C=function(a){EP(this,a.state)};
FP.prototype.D=function(){EP(this,g.OL(this.A))};
FP.prototype.G=function(){this.B.style.display="block"};g.p(GP,g.TN);g.h=GP.prototype;g.h.show=function(){var a=IP(this);g.TN.prototype.show.call(this);this.da&&(this.K.N(window,"blur",this.sb),this.K.N(window.document,"click",this.hB));a||this.U("show",!0)};
g.h.hide=function(){var a=IP(this);g.TN.prototype.hide.call(this);HP(this);a&&this.U("show",!1)};
g.h.ud=function(a,b){this.C=a;this.O.show();b?(this.L||(this.L=this.K.N(this.R,"appresize",this.Go)),this.Go()):this.L&&(this.K.Qa(this.L),this.L=null);a&&(a.getAttribute("aria-haspopup"),a.setAttribute("aria-expanded",!0),window.document.activeElement&&g.je(a,window.document.activeElement)&&this.focus())};
g.h.Go=function(){zS(g.IL(this.R).D,this.element,this.C)};
g.h.sb=function(){var a=IP(this);HP(this);this.O.hide();a&&this.U("show",!1)};
g.h.pf=function(a,b){IP(this)?this.sb():this.ud(a,b)};
g.h.hB=function(a){var b=$s(a);b&&(g.je(this.element,b)||this.C&&g.je(this.C,b)||!g.XN(a))||this.sb()};g.p(JP,GP);JP.prototype.B=function(a){a?(this.A||(this.A=!0,g.WL(this.o,"mutedAutoplayImpression",{})),this.ud()):this.sb()};
JP.prototype.onClick=function(){g.WL(this.o,"mutedAutoplayClick",{videoPlayedSeconds:this.o.getCurrentTime()-this.o.ca().nq});this.o.Ae()};g.p(KP,g.dt);g.h=KP.prototype;g.h.init=function(){var a=g.OL(this.g);this.Vj(a);this.ig();this.Md()};
g.h.sr=function(a,b){if(this.Fa!=b.videoId){this.Fa=b.videoId;var c=this.B;c.W=b&&0<b.yf.length?5E3:3E3;c.Eb(512,!0);this.ig()}};
g.h.kE=function(){this.sr(0,this.g.ca())};
g.h.Kg=function(){var a=g.YL(this.g)&&g.ZL(this.g);(a=this.Ea||a)||(a=g.IL(this.g).G,a=!!a&&a.Xz());return a||this.Xa||this.g.app.V.Cb};
g.h.Fe=function(){var a=!this.Kg();g.N(this.g.getRootNode(),"ytp-menu-shown",!a);var b=this.ba,a=!a;(b.B=a)?b.hide():wP(b.A,b.o,g.OL(b.o))};
g.h.FA=function(a){if(!g.je(this.g.getRootNode(),a))return!1;for(;a&&!g.ne(a);)a=a==this.g.getRootNode()?null:g.ie(a);return!!a};
g.h.Zm=function(a){var b=this.g.getRootNode();g.N(b,"ytp-autohide",a);a&&(this.O=!1,g.M(b,"ytp-touch-mode"));b=this.g;a=!a;b.va("onVideoAreaChange");b.va(a?"onShowControls":"onHideControls")};
g.h.IE=function(a){if(bG(g.OL(this.g))&&!g.W(this.g).Qb){var b=this.g.ca();b.videoId&&this.g.Cm(CF(b))}this.B.o||LP(this,$s(a))||IP(this.aa)||(g.OL(this.g),g.ct(a));this.O=!0;g.L(this.g.getRootNode(),"ytp-touch-mode");this.B.Eb(2,!0)};
g.h.EE=function(a){g.XN(a)&&IP(this.aa)?(this.aa.onClick(),2==this.g.Ha()&&this.g.jc()):LP(this,$s(a))||(this.B.Eb(2,!0),g.XN(a)&&(this.Qi()?g.ct(a):(a=g.OL(this.g),g.T(a,2)&&KL(this.g)||pP(this.G,!aG(a)),g.W(this.g).za&&!bG(a)?this.la.isActive()?(this.G.hide(),this.la.stop()):this.la.start():this.tr())))};
g.h.tr=function(){var a=g.OL(this.g);g.T(a,2)&&KL(this.g)||(aG(a)?this.g.ac():(this.g.jc(),window.document.activeElement==this.ba.element&&this.g.getRootNode().focus()))};
g.h.FE=function(a){LP(this,$s(a))||3!=this.g.Ha()&&g.RL(this.g)};
g.h.GE=function(a){MP(this,.3,a.scale);g.ct(a)};
g.h.HE=function(a){MP(this,.1,a.scale)};
g.h.Md=function(){var a=this.Xc(),b=g.PL(this.g).Na(),c=this.g.isFullscreen(),d=this.g.getRootNode();g.W(this.g).experiments.g("autohide_resize_killswitch")||g.es&&OO(this.B);g.N(d,"ytp-fullscreen",c);g.N(d,"ytp-small-mode",!a&&(480>b.width||270>b.height));g.N(d,"ytp-big-mode",a);this.D&&WO(this.D,b)};
g.h.mE=function(a){this.Vj(a.state);this.ig()};
g.h.ig=function(){var a=2==this.g.Ha(),b=!0;a&&(b=g.IL(this.g).A.rA());var c=g.W(this.g),d=c.experiments.g("embed_show_infobar_on_playback")&&c.A&&!c.G&&5==this.g.app.O,a=!!this.Fa&&!g.JL(this.g)&&(a?b:c.Ec||this.g.isFullscreen()||d);this.T!=a&&(this.T=a,g.N(this.g.getRootNode(),"ytp-hide-info-bar",!a))};
g.h.Vj=function(a){var b=bG(a);b!=this.Cb&&(this.Cb=b,this.Wa&&this.Qa(this.Wa),this.Wa=this.N(g.PL(this.g),"touchstart",this.IE,void 0,b));var c;(c=a.Ab()&&!g.T(a,32))||(c=g.IL(this.g).T,c=!!c&&c.Zz());this.B.Eb(128,!c);c=3==this.g.Ha();this.B.Eb(256,c);c=this.g.getRootNode();if(g.T(a,2))var d=["ended-mode"];else d=[],g.T(a,8)?d.push("playing-mode"):g.T(a,4)&&d.push("paused-mode"),g.T(a,1)&&!g.T(a,32)&&d.push("buffering-mode"),g.T(a,32)&&d.push("seeking-mode"),g.T(a,64)&&d.push("unstarted-mode");
g.Ib(this.za,d)||(g.yo(c,this.za),this.za=d,g.xo(c,d));d=g.W(this.g);var e=g.T(a,2);g.N(c,"ytp-hide-controls",("3"==d.C?!e:"1"!=d.C)||b);g.N(c,"ytp-native-controls","3"==d.C&&!b&&!e);if(g.T(a,128)){this.D||(this.D=new XO(this.g),g.J(this,this.D),this.D.ra(c),g.jM(this.g,this.D.element,5));b=this.D;a=a.g;for(c=0;c<b.B.length;c++)b.Qa(b.B[c]);b.B=[];c=a.messageKey;d=g.W(b.o);if("YTP_ERROR_GENERIC_WITHOUT_LINK"!=c||d.Tb)if("YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK_FLASH"==c||"YTP_HTML5_PROTECTED_FLASH_FALLBACK"==
c)b.Fb(ZO(b,c,"https://get.adobe.com/flashplayer/",!1,!0));else if("YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK"!=c||d.Tb){a=a.message.split(xW);c=[];for(d=0;d<a.length;d+=3){e=a[d++].split("\n");c.push(e[0]);for(var f=1;f<e.length;f++)c.push({F:"br"}),c.push(e[f]);d<a.length&&c.push({F:"a",P:{href:a[d],target:a[d+1]},J:[a[d+2]]})}b.Fb({F:"span",J:c})}else b.Fb(ZO(b,"YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK_WITH_LINK","//"+cD(d)+"/html5"));else if(b.Fb(ZO(b,"YTP_ERROR_GENERIC_WITH_LINK_AND_CPN","//support.google.com/youtube/?p=player_error1",
!0)),d.la&&!d.A)for(a=(0,g.A)(b.C,b),d=b.element.getElementsByTagName("a"),e=0;e<d.length;e++)c=b.N(d[e],"click",a),b.B.push(c);this.D.show()}else this.D&&(this.D.dispose(),this.D=null)};
g.h.Qi=function(){return g.YL(this.g)&&g.ZL(this.g)?(this.g.Kh(!1,!1),!0):g.JL(this.g)?(g.LL(this.g,!0),!0):!1};
g.h.GA=function(a){this.Xa=a;this.Fe()};
g.h.Xc=function(){return!1};g.C(NP,g.TN);NP.prototype.B=function(){var a=this.A.df(),a=sO(new qO(a.seekableStart,a.seekableEnd),a.current,0);this.D.style.width=100*a+"%"};
NP.prototype.C=function(){g.RC(g.W(this.A))||(2==this.A.Ha()?this.o||(this.show(),this.o=this.N(this.A,"progresssync",this.B),this.B()):this.o&&(this.hide(),this.Qa(this.o),this.o=null))};g.p(QP,g.U);QP.prototype.Y=function(){this.o&&this.o();g.U.prototype.Y.call(this)};
QP.prototype.D=function(){g.Bt("iv-button-mouseover")};
QP.prototype.C=function(a){g.YL(this.R);var b=g.wo(this.R.getRootNode(),"ytp-cards-teaser-shown");g.Bt("iv-teaser-clicked",b);a=0==a.screenX&&0==a.screenY;this.R.Kh(!g.ZL(this.R),a,"YOUTUBE_DRAWER_MANUAL_OPEN")};
g.p(PP,g.U);g.h=PP.prototype;g.h.fu=function(){g.YL(this.R)&&g.ZL(this.R)&&this.g&&3!=this.C.g&&this.Oh()};
g.h.IA=function(){this.Oh();g.Bt("iv-teaser-clicked",!!this.o);this.R.Kh(!0,!1,"YOUTUBE_DRAWER_MANUAL_OPEN")};
g.h.HA=function(){g.Bt("iv-teaser-mouseover");this.o&&this.o.stop()};
g.h.YE=function(a){this.o||!a||g.ZL(this.R)||this.A&&this.A.isActive()||(SP(this,a),g.Bt("iv-teaser-shown"))};
g.h.ur=function(){this.H.stop();this.o&&this.o.isActive()&&this.K.start()};
g.h.hf=function(){this.K.stop();this.o&&!this.o.isActive()&&this.H.start()};
g.h.UD=function(){this.o&&this.o.stop()};
g.h.RD=function(){this.Oh()};
g.h.Oh=function(){!this.o||this.B&&this.B.isActive()||(this.C.hide(),g.M(this.R.getRootNode(),"ytp-cards-teaser-shown"),this.B=new g.O(function(){for(var a=g.ma(this.D),b=a.next();!b.done;b=a.next())this.Qa(b.value);this.D=[];this.o&&(this.o.dispose(),this.o=null);OP(this.G,!0)},330,this),this.B.start())};
g.h.Y=function(){var a=this.R.getRootNode();a&&g.M(a,"ytp-cards-teaser-shown");g.ve(this.A,this.B,this.o);g.U.prototype.Y.call(this)};g.p(g.UP,g.TN);g.UP.prototype.pa=function(a,b){g.TN.prototype.pa.call(this,a,b);this.U("size-change")};g.p(WP,g.TN);WP.prototype.ha=function(){this.U("size-change")};
WP.prototype.focus=function(){this.W.focus()};
WP.prototype.la=function(){this.U("back")};g.p(g.XP,WP);g.XP.prototype.X=function(){this.D.U("size-change")};
g.XP.prototype.focus=function(){for(var a=0,b=0;b<this.Ia.length;b++)if("true"==this.Ia[b].element.getAttribute("aria-checked")){a=b;break}this.Ia[a].focus()};g.p(g.bQ,GP);g.h=g.bQ.prototype;g.h.show=function(){GP.prototype.show.call(this);this.gi()};
g.h.hide=function(){GP.prototype.hide.call(this);1<this.o.length&&g.fQ(this)};
g.h.gi=function(){gQ(this);this.g&&(cQ(this),g.mh(this.element,this.size))};
g.h.xd=function(){var a=this.o.pop();dQ(this,a,this.o[this.o.length-1],!0)};
g.h.pG=function(a,b,c){this.G.dispose();this.G=null;g.L(this.element,"ytp-popup-animating");c?(g.L(a.element,"ytp-panel-animate-forward"),g.M(b.element,"ytp-panel-animate-back")):(g.L(a.element,"ytp-panel-animate-back"),g.M(b.element,"ytp-panel-animate-forward"));g.mh(this.element,this.size);this.D=new g.O(g.B(this.gC,a,b),250,this);this.D.start()};
g.h.gC=function(a){g.M(this.element,"ytp-popup-animating");a.detach();g.yo(a.element,["ytp-panel-animate-back","ytp-panel-animate-forward"]);this.D.dispose();this.D=null};
g.h.ZA=function(a){if(!g.at(a))switch(g.Xs(a)){case 27:this.sb();g.ct(a);break;case 37:1<this.o.length&&this.xd();g.ct(a);break;case 39:g.ct(a)}};
g.h.focus=function(){this.o[this.o.length-1].focus()};
g.h.Y=function(){GP.prototype.Y.call(this);this.G&&this.G.dispose();this.D&&this.D.dispose()};g.p(hQ,g.UP);hQ.prototype.o=function(a){g.at(a)||39!=g.Xs(a)||(this.element.click(),g.ct(a))};g.p(jQ,g.UP);jQ.prototype.K=function(){kQ(this,!this.o);this.U("select",this.o)};
jQ.prototype.getValue=function(){return this.o};g.p(nQ,g.XP);g.h=nQ.prototype;g.h.OC=function(){gH(this.H.element)};
g.h.fD=function(){oQ(this,this.R.Ch(!0))&&oP(this.O.G,{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},J:[{F:"path",P:{d:"M13.5 24.3L7.2 18.0l-2.1 2.1L13.5 28.5 31.5 10.5l-2.1-2.1L13.5 24.3z",fill:"#fff"}}]})};
g.h.gD=function(){oQ(this,this.R.Rq())&&oP(this.O.G,g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-code"]}:{F:"svg",P:{height:"100%",viewBox:"0 0 36 36",width:"100%"},J:[{F:"path",P:{d:"M14.1 24.9L7.2 18.0l6.9-6.9L12.0 9.0l-9.0 9.0 9.0 9.0 2.1-2.1zm7.8 .0l6.9-6.9-6.9-6.9L24.0 9.0l9.0 9.0-9.0 9.0-2.1-2.1z",fill:"#fff"}}]});g.nM(this.R,this.o)};
g.h.jD=function(){oQ(this,this.R.getVideoUrl(!0,!0))&&oP(this.O.G,ir());g.nM(this.R,this.B)};
g.h.iD=function(){oQ(this,this.R.getVideoUrl(!1,!0))&&oP(this.O.G,ir());g.nM(this.R,this.A)};
g.h.xD=function(a){kQ(this.G,a)};
g.h.yD=function(){var a=this.G.getValue();mT(this.R.app,a);this.L.sb();g.nM(this.R,this.G)};
g.h.yE=function(a){var b=g.X(this.R.app);b&&b.Sg(new g.nD("feedback",!1,{gpu:PK()}));if(g.TO(a,this.R,!gD(g.W(this.R)))){a=this.R;var b=b={as3:!1,html5:!0,player:!0},c=a.Rp();c.debug_error&&(b.player_error=c.debug_error.errorCode,b.player_error_details=c.debug_error.errorDetail);b.debug_text=a.Ch(!0);a.va("onFeedbackStartRequest",b);a.isFullscreen()&&g.RL(a)}this.L.sb()};
g.h.PE=function(){this.R.Wq();this.L.sb()};
g.h.KA=function(a,b){mQ(this,b)};g.p(rQ,g.bQ);g.h=rQ.prototype;g.h.show=function(){this.H||(this.H=new nQ(this.A,this.X,this),g.J(this,this.H),g.eQ(this,this.H));g.bQ.prototype.show.call(this);g.oM(this.A,this,!0);pQ(this.H,!0)};
g.h.hide=function(){qQ(this);g.bQ.prototype.hide.call(this);g.oM(this.A,this,!1);this.H&&pQ(this.H,!1)};
g.h.NC=function(a){var b=$s(a);this.g||b&&(g.pe(b,"a")||g.qe(b,"ytp-no-contextmenu"))||(g.ct(a),sQ(this),this.element.style.left="",this.element.style.top="",a=Ys(a),a.x++,a.y++,this.ud(),b=g.hh(window.document.body),a=g.mq(a,this.size,0,void 0,b,5),g.ch(this.element,g.Lg(a.rect)),g.ft(this.B),this.B.N(window.document,"contextmenu",this.YC),this.B.N(this.A,"fullscreentoggled",this.LA),this.B.N(this.A,"pageTransition",this.eE))};
g.h.YC=function(a){g.at(a)||g.je(this.element,$s(a))||this.sb()};
g.h.LA=function(){this.sb();sQ(this)};
g.h.eE=function(){this.sb()};var zW,AW;zW=[{option:g.aW.Ek,message:"YTP_COLOR_WHITE"},{option:g.aW.jw,message:"YTP_COLOR_YELLOW"},{option:g.aW.Bv,message:"YTP_COLOR_GREEN"},{option:g.aW.lv,message:"YTP_COLOR_CYAN"},{option:g.aW.Xu,message:"YTP_COLOR_BLUE"},{option:g.aW.Iv,message:"YTP_COLOR_MAGENTA"},{option:g.aW.no,message:"YTP_COLOR_RED"},{option:g.aW.sk,message:"YTP_COLOR_BLACK"}];AW=[{option:0,text:"0%"},{option:.25,text:"25%"},{option:.5,text:"50%"},{option:.75,text:"75%"},{option:1,text:"100%"}];
g.wQ=[{option:"fontFamily",message:"YTP_FONT_FAMILY",options:[{option:g.bW.jo,message:"YTP_FONT_FAMILY_MONO_SERIF"},{option:g.bW.mo,message:"YTP_FONT_FAMILY_PROP_SERIF"},{option:g.bW.ho,message:"YTP_FONT_FAMILY_MONO_SANS"},{option:g.bW.zk,message:"YTP_FONT_FAMILY_PROP_SANS"},{option:g.bW.CASUAL,message:"YTP_FONT_FAMILY_CASUAL"},{option:g.bW.CURSIVE,message:"YTP_FONT_FAMILY_CURSIVE"},{option:g.bW.Ck,message:"YTP_FONT_FAMILY_SMALL_CAPS"}]},{option:"color",message:"YTP_FONT_COLOR",options:zW},{option:"fontSizeIncrement",
message:"YTP_FONT_SIZE",options:[{option:-2,text:"50%"},{option:-1,text:"75%"},{option:0,text:"100%"},{option:1,text:"150%"},{option:2,text:"200%"},{option:3,text:"300%"},{option:4,text:"400%"}]},{option:"background",message:"YTP_BACKGROUND_COLOR",options:zW},{option:"backgroundOpacity",message:"YTP_BACKGROUND_OPACITY",options:AW},{option:"windowColor",message:"YTP_WINDOW_COLOR",options:zW},{option:"windowOpacity",message:"YTP_WINDOW_OPACITY",options:AW},{option:"charEdgeStyle",message:"YTP_CHAR_EDGE_STYLE",
options:[{option:g.$V.NONE,message:"YTP_EDGE_STYLE_NONE"},{option:g.$V.DROP_SHADOW,message:"YTP_EDGE_STYLE_DROP_SHADOW"},{option:g.$V.RAISED,message:"YTP_EDGE_STYLE_RAISED"},{option:g.$V.DEPRESSED,message:"YTP_EDGE_STYLE_DEPRESSED"},{option:g.$V.Bo,message:"YTP_EDGE_STYLE_OUTLINE"}]},{option:"textOpacity",message:"YTP_FONT_OPACITY",options:[{option:.25,text:"25%"},{option:.5,text:"50%"},{option:.75,text:"75%"},{option:1,text:"100%"}]}];g.p(tQ,g.dt);g.h=tQ.prototype;
g.h.cq=function(a){var b=!1,c=g.Xs(a),d=$s(a),e=!a.altKey&&!a.ctrlKey&&!a.metaKey,f=!1,k=!1,l=g.W(this.g);g.at(a)?(e=!1,k=!0):l.Ge&&(e=!1);if(9==c)b=!0;else{if(d)switch(c){case 32:case 13:if("BUTTON"==d.tagName||"A"==d.tagName||"INPUT"==d.tagName)b=!0,e=!1;else if(e){var m=d.getAttribute("role");!m||"option"!=m&&"button"!=m&&0!=m.indexOf("menuitem")||(b=!0,d.click(),f=!0)}break;case 37:case 39:case 36:case 35:b="slider"==d.getAttribute("role");break;case 38:case 40:m=d.getAttribute("role"),d=38==
c?d.previousSibling:d.nextSibling,"slider"==m?b=!0:e&&("option"==m?(d&&"option"==d.getAttribute("role")&&d.focus(),f=b=!0):m&&0==m.indexOf("menuitem")&&(d&&d.hasAttribute("role")&&0==d.getAttribute("role").indexOf("menuitem")&&d.focus(),f=b=!0))}if((d=g.IL(this.g).B)&&e&&!f&&d.B&&d.B.g)switch(c){case 65:case 68:case 87:case 83:case 107:case 221:case 109:case 219:f=d.B.Yp(c)}l.Tb||!e||f||(f=String.fromCharCode(c).toLowerCase(),this.A+=f,0=="awesome".indexOf(this.A)?(f=!0,7==this.A.length&&g.zo(this.g.getRootNode(),
"ytp-color-party")):(this.A=f,f=0=="awesome".indexOf(this.A)));if(e&&!f){switch(c){case 32:k=!aG(g.OL(this.g));pP(this.o,k);k?this.g.jc():this.g.ac();k=f=!0;break;case 37:this.g.Lc()&&(oP(this.o,pr()),this.g.td(-5*this.g.Vb()),k=f=!0);break;case 39:this.g.Lc()&&(oP(this.o,hr()),this.g.td(5*this.g.Vb()),k=f=!0);break;case 38:k=Math.min(this.g.getVolume()+5,100);qP(this.o,k,!1);this.g.setVolume(k);k=f=!0;break;case 40:k=Math.max(this.g.getVolume()-5,0);qP(this.o,k,!0);this.g.setVolume(k);k=f=!0;break;
case 27:this.D()&&(k=f=!0);break;case 36:this.g.Kb(0);k=f=!0;break;case 35:this.g.Kb(window.Infinity),k=f=!0}if("3"!=l.C)switch(c){case 67:g.IL(this.g).g&&(k=this.g.Jb("captions","track"),(f=g.IL(this.g).g)&&f.bu(),f=this.o,k=k&&k.displayName?g.Q("YTP_SUBTITLES_OFF"):g.Q("YTP_SUBTITLES_ON"),oP(f,gr(),k),k=f=!0);break;case 79:xQ(this,"textOpacity")&&(f=!0);break;case 87:xQ(this,"windowOpacity")&&(f=!0);break;case 187:xQ(this,"fontSizeIncrement",!1,!0)&&(f=!0);break;case 189:xQ(this,"fontSizeIncrement",
!0,!0)&&(f=!0)}var n;48<=c&&57>=c?n=c-48:96<=c&&105>=c&&(n=c-96);null!=n&&(k=this.g.df(),this.g.Kb(n/10*(k.seekableEnd-k.seekableStart)+k.seekableStart),k=f=!0)}}b&&this.sn(!0);(b||k)&&this.C.Eb(2,!0);(f||e&&vQ(this,c,a.shiftKey))&&g.ct(a);l.gb&&(a={keyCode:g.Xs(a),altKey:a.altKey,ctrlKey:a.ctrlKey,metaKey:a.metaKey,shiftKey:a.shiftKey,handled:g.at(a),fullscreen:this.g.isFullscreen()},this.g.va("onKeyPress",a))};
g.h.eq=function(a){a=g.Xs(a);var b=g.IL(this.g).B;b&&b.B&&b.B.g&&b.B.aq(a);9==a&&this.sn(!0)};
g.h.sn=function(a){g.N(this.g.getRootNode(),"ytp-probably-keyboard-focus",a);g.N(this.G.element,"ytp-probably-keyboard-focus",a)};
g.h.yr=function(a){g.IL(this.g).g&&this.g.Ac("captions","sampleSubtitles",a)};
g.h.Y=function(){g.Ho(this.B);g.dt.prototype.Y.call(this)};g.p(zQ,g.U);g.h=zQ.prototype;g.h.hide=function(){g.M(this.o.getRootNode(),"ytp-expand-pause-overlay");g.U.prototype.hide.call(this)};
g.h.EC=function(){this.X=!0;g.M(this.o.getRootNode(),"ytp-expand-pause-overlay");this.H.focus()};
g.h.GC=function(){this.X=!1;g.L(this.o.getRootNode(),"ytp-expand-pause-overlay")};
g.h.aB=function(){BQ(this,this.C-this.G)};
g.h.bB=function(){BQ(this,this.C+this.G)};
g.h.IC=function(a,b){if(g.TO(b,this.o,this.fa)){var c=this.A[a],d=c.zb().videoId,e=c.getPlaylistId();g.FT(this.o.app,d,c.Pc,e,void 0,void 0)}};
g.h.cB=function(){this.Mm(g.PL(this.o).Na())};
g.h.dB=function(a){g.T(a.state,1)||g.T(a.state,16)||g.T(a.state,32)||(g.T(a.state,4)&&!g.T(a.state,2)?this.A.length&&(this.X||(g.L(this.o.getRootNode(),"ytp-expand-pause-overlay"),AQ(this)),this.K.show()):this.K.hide())};
g.h.Mm=function(a){var b=16/9,c=this.da.Xc();a=a.width-(c?136:68);for(var c=Math.ceil(a/(c?320:192)),c=(a-8*c)/c,b=Math.floor(c/b),d=0;d<this.D.length;d++){var e=this.D[d].ma["ytp-suggestion-image"];e.style.width=c+"px";e.style.height=b+"px"}this.O.style.height=b+"px";this.W=c;this.G=a;this.C=0;this.ju(0);AQ(this)};
g.h.eB=function(){var a=this.o.ca();a.ee?(a=(0,g.fe)(a.ee,function(a){return a&&!a.list}),this.A=(0,g.H)(a,function(a){return g.lP(a)})):this.A.length=0;
CQ(this)};
g.h.ju=function(a){this.O.scrollLeft=-a};
g.p(yQ,g.I);yQ.prototype.start=function(a,b,c){this.g=a;this.H=b;this.D=c;this.G=(0,g.Ot)();this.A()};
yQ.prototype.A=function(){var a=(0,g.Ot)()-this.G,b=this.B;a=np(b,a/this.D);if(0==a)b=b.G;else if(1==a)b=b.H;else var c=vd(b.G,b.C,a),d=vd(b.C,b.D,a),b=vd(b.D,b.H,a),c=vd(c,d,a),d=vd(d,b,a),b=vd(c,d,a);b=g.td(b,0,1);this.C((this.H-this.g)*b+this.g);1>b&&this.o.start()};g.p(DQ,g.U);DQ.prototype.A=function(a){g.TO(a,this.o)&&this.o.Sq(this.Za)};g.p(EQ,GP);g.h=EQ.prototype;g.h.show=function(){GP.prototype.show.call(this);this.G.N(this.A,"videodatachange",this.Nm);this.G.N(this.A,"onPlaylistUpdate",this.Nm);this.Nm()};
g.h.hide=function(){GP.prototype.hide.call(this);g.ft(this.G);FQ(this,null)};
g.h.Nm=function(){FQ(this,this.A.ce())};
g.h.Rj=function(){var a=this.o.rj;if(a==this.H)this.B.element.setAttribute("aria-checked",!1),this.B=this.D[this.o.Za];else{for(var b=g.ma(this.D),c=b.next();!c.done;c=b.next())c.value.dispose();b=this.o.getLength();this.D=[];for(c=0;c<b;c++){var d=new DQ(this.A,this.o,c);this.D.push(d);d.ra(this.Ia)}this.B=this.D[this.o.Za];this.H=a}this.B.element.setAttribute("aria-checked",!0)};
g.h.bF=function(a){var b=this.A.getVideoUrl(!0);UO(b,this.A,a)};
g.h.focus=function(){this.B.focus()};
g.h.Y=function(){this.hide();GP.prototype.Y.call(this)};g.p(GQ,g.U);GQ.prototype.A=function(){g.N(this.element,"ytp-playlist-menu-button-tiny",400>g.PL(this.B).Na().width);this.o&&2!=this.B.Ha()?(this.update({text:g.Q("YTP_PLAYLIST_POSITION",{CURRENT_POSITION:this.o.Za+1,PLAYLIST_LENGTH:this.o.getLength()}),title:g.Q("YTP_PLAYLIST_NAME",{PLAYLIST_NAME:this.o.title})}),this.g||(this.show(),hR(this.C))):this.g&&(this.hide(),hR(this.C))};
GQ.prototype.D=function(){this.o&&this.o.unsubscribe("shuffle",this.A,this);(this.o=this.B.ce())&&this.o.subscribe("shuffle",this.A,this);this.A()};g.p(HQ,g.U);HQ.prototype.B=function(a){this.rb(g.T(a.state,2))};
HQ.prototype.A=function(){g.OL(this.o);this.o.jc()};g.p(IQ,GP);g.h=IQ.prototype;g.h.hE=function(a){a=$s(a);g.je(this.T,a)||g.je(this.G,a)||this.pf()};
g.h.sb=function(){GP.prototype.sb.call(this);this.A.ng(this.element)};
g.h.show=function(){var a=this.g;GP.prototype.show.call(this);this.Hr();a||this.o.va("onSharePanelOpened")};
g.h.Hr=function(){g.L(this.element,"ytp-share-panel-loading");g.M(this.element,"ytp-share-panel-fail");var a=this.o.ca(),b=this.o.getPlaylistId(),c=b&&this.H.checked;g.N(this.element,"ytp-share-panel-has-playlist",!!b);var d={action_get_share_info:1,feature:"player_embedded",video_id:a.videoId},e=g.W(this.o);e.Lb&&(d.authuser=e.Lb);e.pageId&&(d.pageid=e.pageId);c&&(d.list=b);g.Ur(g.W(this.o).baseYtUrl+"share_ajax",{method:"GET",onError:(0,g.A)(this.Gr,this),nb:(0,g.A)(function(a,b){if(b){if(b.actions&&
rt(b.actions),!this.ka()){g.M(this.element,"ytp-share-panel-loading");KQ(this);for(var c=b.links,d=0,e=0;e<c.length&&3>d;e++){var f=c[e],k=JQ(f.img);k&&(k=new g.U({F:"a",Z:["ytp-share-panel-service-button","ytp-button"],P:{href:f.url,target:"_blank",title:f.sname},J:[k]}),k.ga("click",g.B(this.LE,f.url)),g.te(k,RP(this.A,k.element)),this.B.push(k),d++)}c=new g.U({F:"a",Z:["ytp-share-panel-service-button","ytp-button"],J:[{F:"span",M:"ytp-share-panel-service-button-more",J:[g.Zq?{F:"div",Z:["ytp-icon",
"ytp-icon-share-more"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 38 38",width:"100%"},J:[{F:"rect",P:{fill:"#fff",height:"34",width:"34",x:"2",y:"2"}},{F:"path",P:{d:"M 34.2,0 3.8,0 C 1.70,0 .01,1.70 .01,3.8 L 0,34.2 C 0,36.29 1.70,38 3.8,38 l 30.4,0 C 36.29,38 38,36.29 38,34.2 L 38,3.8 C 38,1.70 36.29,0 34.2,0 Z m -5.7,21.85 c 1.57,0 2.85,-1.27 2.85,-2.85 0,-1.57 -1.27,-2.85 -2.85,-2.85 -1.57,0 -2.85,1.27 -2.85,2.85 0,1.57 1.27,2.85 2.85,2.85 z m -9.5,0 c 1.57,0 2.85,-1.27 2.85,-2.85 0,-1.57 -1.27,-2.85 -2.85,-2.85 -1.57,0 -2.85,1.27 -2.85,2.85 0,1.57 1.27,2.85 2.85,2.85 z m -9.5,0 c 1.57,0 2.85,-1.27 2.85,-2.85 0,-1.57 -1.27,-2.85 -2.85,-2.85 -1.57,0 -2.85,1.27 -2.85,2.85 0,1.57 1.27,2.85 2.85,2.85 z",
fill:"#4e4e4f","fill-rule":"evenodd"}}]}]}],P:{href:b.more,target:"_blank",title:g.Q("YTP_MORE")}});c.ga("click",(0,g.A)(this.ND,this,b.more));g.te(c,RP(this.A,c.element));this.B.push(c);this.pa("buttons",this.B)}}else this.Gr()},this),
Yb:d,withCredentials:!0});a=e.getVideoUrl(a.videoId,c?b:void 0,void 0,!0);this.pa("link",a);this.pa("linkText",a);gH(this.D)};
g.h.Gr=function(){g.M(this.element,"ytp-share-panel-loading");g.L(this.element,"ytp-share-panel-fail")};
g.h.LE=function(a,b){if(g.XN(b)){var c=void 0,c=void 0===c?{}:c;c.target=c.target||"YouTube";c.width=c.width||"600";c.height=c.height||"600";var d=c;d||(d={});var c=window;var e=a instanceof id?a:md("undefined"!=typeof a.href?a.href:String(a));var f=d.target||a.target,k=[];for(l in d)switch(l){case "width":case "height":case "top":case "left":k.push(l+"="+d[l]);break;case "target":case "noreferrer":break;default:k.push(l+"="+(d[l]?1:0))}var l=k.join(",");nc()&&c.navigator&&c.navigator.standalone&&
f&&"_self"!=f?(l=c.document.createElement("A"),g.rd(l,e),l.setAttribute("target",f),d.noreferrer&&l.setAttribute("rel","noreferrer"),e=window.document.createEvent("MouseEvent"),e.initMouseEvent("click",!0,!0,c,1),l.dispatchEvent(e),c={}):d.noreferrer?(c=c.open("",f,l),e=jd(e),c&&(g.kD&&-1!=e.indexOf(";")&&(e="'"+e.replace(/'/g,"%27")+"'"),c.opener=null,e=sd(cd("b/12014412, meta tag with sanitized URL"),'<META HTTP-EQUIV="refresh" content="0; url='+Ra(e)+'">'),c.document.write(g.pd(e)),c.document.close())):
c=c.open(jd(e),f,l);c&&(c.opener||(c.opener=window),c.focus());g.ct(b)}};
g.h.ND=function(a,b){UO(a,this.o,b)&&this.o.va("SHARE_CLICKED")};
g.h.uB=function(a){!a&&IP(this)&&this.pf()};
g.h.focus=function(){this.D.focus()};
g.h.Y=function(){GP.prototype.Y.call(this);KQ(this)};g.p(LQ,g.U);LQ.prototype.G=function(){this.H.pf(this.element,!1);g.nM(this.o,this)};
LQ.prototype.C=function(){var a=g.W(this.o);this.pa("icon",a.experiments.g("embed_new_share_icon")&&a.A?g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-ios-share"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"-6 -6 36 36",width:"100%"},J:[{F:"path",Da:!0,M:"ytp-svg-fill",P:{d:"M16 5l-1.42 1.42-1.59-1.59V16h-1.98V4.83L9.42 6.42 8 5l4-4 4 4zm4 5v11c0 1.1-0.9 2-2 2H6c-1.11 0-2-0.9-2-2V10c0-1.11.89-2 2-2h3v2H6v11h12V10h-3V8h3c1.1 0 2 .89 2 2z"}}]}:g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-sharrow"]}:{F:"svg",
P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},J:[{F:"path",Da:!0,M:"ytp-svg-fill",P:{d:"m 20.20,14.19 0,-4.45 7.79,7.79 -7.79,7.79 0,-4.56 C 16.27,20.69 12.10,21.81 9.34,24.76 8.80,25.13 7.60,27.29 8.12,25.65 9.08,21.32 11.80,17.18 15.98,15.38 c 1.33,-0.60 2.76,-0.98 4.21,-1.19 z"}}]});var a=a.ri&&2!=this.o.Ha(),b=g.PL(this.o).Na().width;this.B=!!this.o.ca().videoId&&300<=b&&!a;g.N(this.A,"ytp-share-button-visible",this.B);a=480<b;b=g.W(this.o);b.experiments.g("enable_share_button_title")&&
b.A&&(g.N(this.A,"ytp-show-share-title",a),this.pa("share",a?g.Q("YTP_SHARE"):""));g.oM(this.o,this,this.B&&this.D)};
LQ.prototype.Y=function(){g.U.prototype.Y.call(this);g.M(this.A,"ytp-share-button-visible")};g.p(MQ,g.U);MQ.prototype.B=function(){var a=g.X(this.o.app);a&&a.o.g.webkitShowPlaybackTargetPicker()};
MQ.prototype.A=function(){var a=g.X(this.o.app);this.rb(!!a&&a.sc);this.pa("icon",$L(this.o)?g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-airplay-on"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},J:[{F:"path",Da:!0,P:{d:"M11,13 L25,13 L25,21 L11,21 L11,13 Z M12,28 L24,28 L18,22 L12,28 Z M27,9 L9,9 C7.9,9 7,9.9 7,11 L7,23 C7,24.1 7.9,25 9,25 L13,25 L13,23 L9,23 L9,11 L27,11 L27,23 L23,23 L23,25 L27,25 C28.1,25 29,24.1 29,23 L29,11 C29,9.9 28.1,9 27,9 L27,9 Z",fill:"#fff"}}]}:
g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-airplay-off"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},J:[{F:"path",Da:!0,M:"ytp-svg-fill",P:{d:"M12,28 L24,28 L18,22 L12,28 Z M27,9 L9,9 C7.9,9 7,9.9 7,11 L7,23 C7,24.1 7.9,25 9,25 L13,25 L13,23 L9,23 L9,11 L27,11 L27,23 L23,23 L23,25 L27,25 C28.1,25 29,24.1 29,23 L29,11 C29,9.9 28.1,9 27,9 L27,9 Z"}}]})};g.p(NQ,g.TN);g.h=NQ.prototype;g.h.QA=function(a){g.T(a.state,32)?OQ(this,this.o.ca()):this.H.hide()};
g.h.zj=function(){var a=this.o.df(),b=a.current,c=BD(this.jb,141),b=this.jb.g[c].qk(b);b!=this.O&&(c=DD(this.jb,b,141),this.D=uO(this.ha,c,141,141,!0),g.ch(this.fa,(this.K-this.D.width)/2),this.O=b);g.ke(this.la,g.WN(this.W?a.current-a.seekableEnd:a.current));g.Zt(this.L);a=(0,g.A)(this.gk,this);this.L=g.Yt(a,1,void 0);this.T.sg()};
g.h.RA=function(a,b){OQ(this,b)};
g.h.gk=function(){g.ph(this.A,!1);g.Zt(this.L);var a=Math.round(.5*this.D.width),b=Math.round(.5*this.D.height),c=this.o.df(),d=c.current/(c.seekableEnd-c.seekableStart),c=this.jb.g[0].Ju(),e=this.jb.g[0].Wn(),d=a*(e-c+1)*d-this.K/2,f=Math.floor(d/a)+c,e=Math.min(f+Math.min(20,Math.ceil(this.K/a)),e),f=Math.max(f,c),k;if(this.C>=f&&this.B<=e){for(k=this.C;k>e;k--)g.de(this.A.children[k-this.B]);for(k=f-1;k>=this.B;k--)g.de(this.A.children[k-this.B]);for(k=this.B-1;k>=f;k--)this.A.insertBefore(PQ(this,
k,a,b),this.A.firstChild);k=this.C+1}else g.ae(this.A),k=f;for(;k<=e;k++){var l=PQ(this,k,a,b);this.A.appendChild(l)}for(k=f;k<=e;k++)g.Vg(this.A.children[k-f],"transform","translatex("+(-d+(k-c)*a)+"px)");this.B=f;this.C=e;g.ph(this.A,!0)};
g.h.PA=function(){for(var a=this.B;a<=this.C;a++)FD(this.jb,a,this.D.width)};
g.h.OA=function(){var a=g.PL(this.o).Na();this.K!=a.width&&(this.K=a.width,this.jb&&(this.zj(),this.gk()))};
g.h.SA=function(a){this.element.style.g=a+"px"};
g.h.show=function(){g.TN.prototype.show.call(this);vS(this.da,!1)};
g.h.hide=function(){this.jb&&OQ(this,null);g.TN.prototype.hide.call(this);vS(this.da,!0)};
g.h.Y=function(){OQ(this,null);g.TN.prototype.Y.call(this)};
NQ.g=200;g.p(QQ,g.U);g.h=QQ.prototype;g.h.UA=function(a){g.T(a.state,32)?SQ(this,this.o.ca()):this.g&&(g.T(a.state,16)||g.T(a.state,1))||this.B.hide()};
g.h.WA=function(a,b){SQ(this,b)};
g.h.VA=function(){var a=g.OL(this.o);(g.T(a,32)||g.T(a,16))&&RQ(this)};
g.h.TA=function(){this.C=window.NaN;RQ(this)};
g.h.hide=function(){this.jb&&SQ(this,null);g.U.prototype.hide.call(this)};g.p(UQ,g.U);g.h=UQ.prototype;g.h.XA=function(){g.W(this.A).za?(g.XL(this.A,this.A.isFullscreen()?"fullscreen_exit":"fullscreen_enter"),g.RL(this.A)):this.o.pf(this.element,!0)};
g.h.rs=function(){TQ(this);this.o.ud(this.element,!0)};
g.h.YA=function(){g.Ls()==this.A.getRootNode()?this.C.start():(this.C.stop(),this.o&&this.o.hide())};
g.h.Aw=function(){if(window.screen&&window.outerWidth&&window.outerHeight){var a=.9*window.screen.width,b=.9*window.screen.height,c=Math.max(window.outerWidth,window.innerWidth),d=Math.max(window.outerHeight,window.innerHeight);if(c>d!=a>b)var e=c,c=d,d=e;a>c&&b>d&&this.rs()}};
g.h.xr=function(){this.rb(VO(this.A))};
g.h.Kt=function(a){if(a){var b=g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-full-screen-close"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},J:[{F:"g",M:"ytp-fullscreen-button-corner-2",J:[{F:"path",Da:!0,M:"ytp-svg-fill",P:{d:"m 14,14 -4,0 0,2 6,0 0,-6 -2,0 0,4 0,0 z"}}]},{F:"g",M:"ytp-fullscreen-button-corner-3",J:[{F:"path",Da:!0,M:"ytp-svg-fill",P:{d:"m 22,14 0,-4 -2,0 0,6 6,0 0,-2 -4,0 0,0 z"}}]},{F:"g",M:"ytp-fullscreen-button-corner-0",J:[{F:"path",Da:!0,M:"ytp-svg-fill",
P:{d:"m 20,26 2,0 0,-4 4,0 0,-2 -6,0 0,6 0,0 z"}}]},{F:"g",M:"ytp-fullscreen-button-corner-1",J:[{F:"path",Da:!0,M:"ytp-svg-fill",P:{d:"m 10,22 4,0 0,4 2,0 0,-6 -6,0 0,2 0,0 z"}}]}]};a=g.Q("YTP_EXIT_FULLSCREEN");window.document.activeElement==this.element&&this.A.getRootNode().focus()}else b=g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-full-screen"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},J:[{F:"g",M:"ytp-fullscreen-button-corner-0",J:[{F:"path",Da:!0,M:"ytp-svg-fill",
P:{d:"m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z"}}]},{F:"g",M:"ytp-fullscreen-button-corner-1",J:[{F:"path",Da:!0,M:"ytp-svg-fill",P:{d:"m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z"}}]},{F:"g",M:"ytp-fullscreen-button-corner-2",J:[{F:"path",Da:!0,M:"ytp-svg-fill",P:{d:"m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z"}}]},{F:"g",M:"ytp-fullscreen-button-corner-3",J:[{F:"path",Da:!0,M:"ytp-svg-fill",P:{d:"M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z"}}]}]},a=g.Q("YTP_FULLSCREEN");this.pa("icon",
b);this.pa("title",this.o?null:a);hR(this.D.o)};
g.h.Y=function(){this.o||(this.B(),this.B=null);g.U.prototype.Y.call(this)};g.p(VQ,GP);g.h=VQ.prototype;g.h.show=function(){var a=this.g;GP.prototype.show.call(this);a||(this.B.N(this.o,"presentingplayerstatechange",this.Lm),this.B.N(this.o,"videodatachange",this.Lm),this.Lm())};
g.h.hide=function(){this.B&&(g.ft(this.B),GP.prototype.hide.call(this))};
g.h.Lm=function(){var a=this.o.ca(),b=a.yf,c;for(c=0;c<b.length;c++){var d=this.A[c];d||(d=new g.U({F:"button",Z:["ytp-multicam-menu-item","ytp-button"],P:{"aria-checked":"{{selected}}","data-id":"{{videoId}}"},J:[{F:"div",M:"ytp-multicam-menu-item-title",J:["{{cameraName}}"]}]}),d.ga("click",g.B(this.HC,c),this),d.ra(this.Ia),this.A[c]=d);var e=b[c],f=e.id;if(f!=d.element.getAttribute("data-id")){var k=e.thumbnail_url;!k&&f&&(k=eD(g.W(this.o),f,"default.jpg"));d.element.style.backgroundImage=k?"url("+
k+")":""}d.update({cameraName:e.title,videoId:f,selected:f==a.videoId?!0:null})}for(;c<this.A.length;)this.A.pop().dispose();c=g.OL(this.o);a=b.length||!a.Pb();aG(c)||g.T(c,4)||a||!IP(this)||this.pf()};
g.h.HC=function(a){this.o.ca();var b=this.o;a=this.o.ca().yf[a];var c=g.X(b.app,1).g,d=b.getCurrentTime();a.id==c.videoId?g.X(b.app)!=g.X(b.app,1)&&(YS(b.app,1),c.xa||b.Kb(d)):(YS(b.app,4),yT(b.app,{videoId:a.id,title:c.title,start:c.xa?null:d,multifeed_metadata_list:c.xb.multifeed_metadata_list},4))};
g.h.focus=function(){for(var a=this.o.ca(),b=a.yf,c=0;c<b.length;c++)if(b[c].id==a.videoId){this.A[c].focus();break}};
g.h.Y=function(){g.ve(this.A);GP.prototype.Y.call(this)};g.p(WQ,g.U);WQ.prototype.G=function(a){this.B("newdata"==a)};
WQ.prototype.B=function(a){var b=this.o.ca(),c=b.yf,d=g.OL(this.o),d=(aG(d)||g.T(d,4))&&0<c.length;this.rb(d);a&&(this.C=!0);if(d){this.C&&this.D.Wc();a=null;for(var d="",e=0;e<c.length;e++)if(c[e].id==b.videoId){a=c[e].title;d=g.Q("YTP_MULTICAM_INDEX",{CAMERA_INDEX:e+1,CAMERA_COUNT:c.length})+"\n";break}this.update({text:d+a,preview:b.yb(g.W(this.o),"default.jpg")});hR(this.A)}else this.D.stop()};
WQ.prototype.H=function(){xS(this.A,this.element,g.Q("YTP_MORE_CAMERAS_AVAILABLE"));this.C=!1};g.C(XQ,g.I);var BW=new lp(0,0,.4,0,.2,1,1,1);XQ.prototype.o=function(){var a=(0,g.Ot)()-this.C,a=a<this.g?a/this.g:1;this.A(mp(BW,a));1>a&&this.B.start()};
var cR=/[0-9.-]+|[^0-9.-]+/g;g.p(eR,g.U);eR.prototype.tc=function(a){this.B=300<=a.width;this.rb(this.B);g.oM(this.o,this,this.B&&this.H)};
eR.prototype.la=function(){g.W(this.o).K?this.o.zc()?(g.XL(this.o,"unmute"),this.o.Ae()):(g.XL(this.o,"mute"),this.o.mute()):this.da.pf(this.element,!0);g.nM(this.o,this)};
eR.prototype.ha=function(a){dR(this,a.volume,a.muted)};
var iR=["M",19,",",11.29," C",21.89,",",12.15," ",24,",",14.83," ",24,",",18," C",24,",",21.17," ",21.89,",",23.85," ",19,",",24.71," L",19,",",24.77," C",21.89,",",23.85," ",24,",",21.17," ",24,",",18," C",24,",",14.83," ",21.89,",",12.15," ",19,",",11.29," L",19,",",11.29," Z"],jR=["M",19,",",11.29," C",21.89,",",12.15," ",24,",",14.83," ",24,",",18," C",24,",",21.17," ",21.89,",",23.85," ",19,",",24.71," L",19,",",26.77," C",23.01,",",25.86," ",26,",",22.28," ",26,",",18," C",26,",",13.72," ",
23.01,",",10.14," ",19,",",9.23," L",19,",",11.29," Z"];g.p(kR,g.U);kR.prototype.A=function(){var a=g.X(this.o.app);a&&(a=a.o,a.g.webkitSetPresentationMode("picture-in-picture"==a.g.webkitPresentationMode?"inline":"picture-in-picture"))};g.p(mR,g.U);mR.prototype.H=function(a){lR(this,a.state)};
mR.prototype.G=function(){g.N(this.element,"ytp-play-button-playlist",QL(this.o))};
mR.prototype.K=function(){2==this.A?g.XL(this.o,"pause"):3==this.A?g.XL(this.o,"replay"):1==this.A?g.XL(this.o,"play"):4==this.A&&g.XL(this.o,"stop");aG(g.OL(this.o))?this.o.ac():this.o.jc()};
mR.prototype.Y=function(){this.B&&this.B();g.U.prototype.Y.call(this)};g.p(pR,g.U);g.h=pR.prototype;g.h.Dg=function(){qR(this);this.G&&(this.Qa(this.G),this.G=null);this.H=this.o.ca(1);if(this.A=this.o.ce())this.A.subscribe("shuffle",this.Dg,this),this.G=this.N(this.o,"progresssync",this.fB);this.D=rR(this);oR(this);this.tc(g.PL(this.o).Na())};
g.h.tc=function(a){a=void 0===a?g.PL(this.o).Na():a;var b=QL(this.o)||this.B&&g.kM(this.o)||sR(this);this.rb(b&&(this.B||400<=a.width))};
g.h.gB=function(a){g.XL(this.o,this.B?"next":"previous");var b=!0;this.L?b=g.TO(a,this.o):g.ct(a);b&&(this.B?this.o.Cg(!0):this.D?this.o.Kb(0):this.o.Gh(!0))};
g.h.fB=function(){var a=rR(this);a!=this.D&&(this.D=a,oR(this))};
g.h.Y=function(){this.C&&(this.C(),this.C=null);qR(this);g.U.prototype.Y.call(this)};g.p(uR,g.TN);g.h=uR.prototype;g.h.kB=function(a){if(!g.at(a)){var b=!1;switch(g.Xs(a)){case 36:this.A.Kb(0);b=!0;break;case 35:this.A.Kb(window.Infinity);b=!0;break;case 34:this.A.td(-60);b=!0;break;case 33:this.A.td(60);b=!0;break;case 38:this.A.td(5);b=!0;break;case 40:this.A.td(-5),b=!0}b&&g.ct(a)}};
g.h.zr=function(a,b){tR(this,b,"newdata"==a)};
g.h.tx=function(){this.zr("newdata",this.A.ca())};
g.h.jB=function(){BR(this.A.ca())?g.OL(this.A).Ab()&&CR(this,!0):CR(this,!1)};
g.h.iB=function(a){0<fG(a,64)||!BR(this.A.ca())?CR(this,!1):aG(a.state)&&0>fG(a,64)&&CR(this,!0);this.B&&!g.T(a.state,32)&&3!=this.A.Ha()&&this.B.cancel()};
g.h.oB=function(a,b,c){var d=g.gh(this.element),e=ER(this).g,f=c?c.getAttribute("data-tooltip"):void 0;f&&(a=sO(this.o,Number(c.getAttribute("data-position")),0)*e+g.gh(this.Bb).x);this.Ea.x=a-d.x;this.Ea.y=b-d.y;c=ER(this);a=rO(this.o,c.o);b=this.Ka;c=c.position+this.bc;d=f||g.WN(this.Fa?a-this.o.g:a);f=!!f;b.fa||(3==b.o&&b.Gd(),1!=b.o&&(b.element.className="ytp-tooltip ytp-bottom",b.o=1,b.L&&b.K.show(),b.B=tF(b.T.ca()),b.B&&b.B.subscribe("l",b.Mr,b)),b.update({text:d,title:""}),g.N(b.element,"ytp-text-detail",
!!f),d=-1,b.B&&(d=BD(b.B,160*b.D),d=b.B.g[d].qk(a)),AS(b,d),yS(b,!!f,c));g.N(this.A.getRootNode(),"ytp-progress-bar-hover",!g.T(g.OL(this.A),64));xR(this)};
g.h.nB=function(){var a=this.Ka;1==a.o&&a.Gd();g.M(this.A.getRootNode(),"ytp-progress-bar-hover")};
g.h.mB=function(a,b){g.Cr(this.D);this.D=window.NaN;this.Cb=b;this.A.Kb(rO(this.o,ER(this).o),!1);g.L(this.element,"ytp-drag");(this.Ma=aG(g.OL(this.A)))&&this.A.ac()};
g.h.pB=function(){this.da=0;g.M(this.element,"ytp-pull-ui");g.M(this.element,"ytp-pulling");if(0<this.H){var a=(0,g.Ot)(),b=this.H,c=ER(this).position;g.Cr(this.D);this.D=fH((0,g.A)(this.Dr,this,a,b,c))}if(g.T(g.OL(this.A),32)||3==this.A.Ha())this.A.Kb(rO(this.o,ER(this).o)),g.M(this.element,"ytp-drag"),this.Ma&&!g.T(g.OL(this.A),2)&&this.A.jc()};
g.h.Dr=function(a,b,c){var d=1-Math.pow(1-((0,g.Ot)()-a)/200,3),e=c+d*(this.G*this.C-c);if(0>d||1<d)d=1;DR(this,(1-d)*b,e,this.G);this.D=1>d?fH((0,g.A)(this.Dr,this,a,b,c)):window.NaN};
g.h.qB=function(a,b){var c=!1,d=!1,e=ER(this);3600<=this.o.getLength()&&(DR(this,this.Cb-b-10,e.position,e.o),d=!0,c=this.H>.1*(this.K?60:40),e=ER(this));g.N(this.element,"ytp-pull-ui",d);c&&g.L(this.element,"ytp-pulling");c=0;e.A&&0>=e.position?c=-1:e.C&&e.position>=e.width&&(c=1);(0,window.isNaN)(this.D)||c&&c==this.da||g.Dr(this.D);c&&(this.D=fH((0,g.A)(this.Cr,this,(0,g.Ot)(),this.L)));this.da=c;this.A.Kb(rO(this.o,e.o),!1)};
g.h.Cr=function(a,b){if(this.da){var c=this.C*(this.X-1);this.L=g.td(b+this.da*((0,g.Ot)()-a)*.3,0,c);wR(this);this.A.Kb(rO(this.o,ER(this).o),!1);0<this.L&&this.L<c&&(this.D=fH((0,g.A)(this.Cr,this,a,b)))}};
g.h.Br=function(){this.pa("clipstarticon",cr());this.pa("clipendicon",cr());g.L(this.element,"ytp-clip-hover")};
g.h.Ar=function(){this.pa("clipstarticon",er());this.pa("clipendicon",dr());g.M(this.element,"ytp-clip-hover")};
g.h.Aj=function(){this.T=0;this.O=window.Infinity;AR(this);vR(this,this.G,this.la)};
g.h.Er=function(a){a=g.ma(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,b.visible){var c=b.getId();if(!this.W[c]){var d=g.Yd("DIV");b.tooltip&&(d.setAttribute("data-tooltip",b.tooltip),d.setAttribute("data-position",b.start/1E3));this.W[c]=b;this.oa[c]=d;FR(this,b,d);"ytp-chapter-marker"==b.style?this.Dc.appendChild(d):this.sc.appendChild(d)}}else HR(this,b)};
g.h.rB=function(a){a=g.ma(a);for(var b=a.next();!b.done;b=a.next())HR(this,b.value)};
g.h.Y=function(){g.Dr(this.D);this.D=window.NaN;zR(this,!1);g.TN.prototype.Y.call(this)};g.p(IR,jQ);IR.prototype.C=function(){g.IL(this.R).o&&3!=this.R.Ha()?this.A||(aS(this.B,this),this.A=!0):this.A&&(bS(this.B,this),this.A=!1);var a=g.IL(this.R).o;kQ(this,!!a&&a.loaded)};
IR.prototype.D=function(a){a?this.R.Fh("annotations_module"):this.R.tj("annotations_module")};
IR.prototype.Y=function(){this.A&&bS(this.B,this);jQ.prototype.Y.call(this)};g.p(g.JR,g.UP);g.h=g.JR.prototype;g.h.open=function(){g.eQ(this.A,this.C)};
g.h.enable=function(a){this.H?a||(this.H=!1,this.Eg(!1)):a&&(this.H=!0,this.Eg(!0))};
g.h.Eg=function(a){a?aS(this.A,this):bS(this.A,this)};
g.h.kc=function(a){this.U("select",a)};
g.h.tB=function(a){"true"!=this.o[a].element.getAttribute("aria-disabled")&&this.kc(a)};
g.h.Kd=function(a){return a.toString()};
g.h.sB=function(a){g.at(a)||39!=g.Xs(a)||(this.open(),g.ct(a))};
g.h.Y=function(){this.H&&bS(this.A,this);g.UP.prototype.Y.call(this);for(var a in this.o)this.o[a].dispose()};g.p(MR,g.JR);MR.prototype.G=function(){var a=this.R.Am();1<a.length?(g.LR(this,(0,g.H)(a,this.B)),this.L=g.Jb(a,this.B,this),this.K.Fb(a.length?" ("+a.length+")":""),this.U("size-change"),g.KR(this,this.B(this.R.cf())),this.enable(!0)):this.enable(!1)};
MR.prototype.kc=function(a){g.JR.prototype.kc.call(this,a);this.R.Em(this.L[a]);this.A.xd()};
MR.prototype.B=function(a){return a.toString()};g.p(NR,jQ);NR.prototype.C=function(){var a=this.R.Ha();if(2!=a&&3!=a&&g.kM(this.R))this.B||(aS(this.D,this),this.B=!0,this.A.push(this.N(this.R,"videodatachange",this.C)),this.A.push(this.N(this.R,"videoplayerreset",this.C)),this.A.push(this.N(this.R,"onPlaylistUpdate",this.C)),this.A.push(this.N(this.R,"autonavchange",this.G)),this.G(this.R.ca().autonavState));else if(this.B){bS(this.D,this);this.B=!1;for(var a=g.ma(this.A),b=a.next();!b.done;b=a.next())this.Qa(b.value)}};
NR.prototype.G=function(a){kQ(this,1!=a)};
NR.prototype.H=function(a){this.R.app.g.va("onAutonavChangeRequest",1!=(a?2:1))};
NR.prototype.Y=function(){this.B&&bS(this.D,this);jQ.prototype.Y.call(this)};g.p(OR,g.JR);OR.prototype.B=function(){var a=this.R.Ha();if(2!=a&&3!=a&&(this.G=UL(this.R),this.L=g.SL(this.R),a=this.R.xm(),g.hM(this.R)&&g.iM(this.R)&&a.unshift("missing-qualities"),g.LR(this,a),a.length)){this.O();this.enable(!0);return}this.enable(!1)};
OR.prototype.O=function(){var a=g.TL(this.R);this.o[a]&&(this.K=this.R.Dh(),g.KR(this,a),"auto"==a&&this.Fb(this.Kd(a)),UL(this.R)!=this.G&&this.B())};
OR.prototype.kc=function(a){"missing-qualities"!=a&&(g.JR.prototype.kc.call(this,a),this.R.Hh(a),this.A.sb())};
OR.prototype.Kd=function(a,b){b=void 0===b?!1:b;if("missing-qualities"==a)return{F:"a",P:{href:"https://support.google.com/youtube/?p=missing_quality",target:"_blank"},J:[g.Q("YTP_MISSING_FORMATS")]};var c={F:"div",J:[PR(this,a)]},d=g.TL(this.R);b||"auto"!=d||"auto"!=a||(c.J.push(" "),c.J.push(PR(this,this.K,["ytp-menu-label-secondary"])));return c};g.p(QR,g.U);QR.prototype.tc=function(a){this.rb(this.B&&400<=a.width)};
QR.prototype.C=function(){g.XL(this.R,"settings");if(this.A.g)this.A.sb();else{var a=g.IL(this.R).g;a&&!a.loaded&&(a.Hm("tracklist",{includeAsr:!0}).length||a.load());this.A.ud(this.element)}};
QR.prototype.o=function(){var a=this.R.Ha(),b=2!=a&&3!=a,c=g.VL(this.R),d=b&&!!g.IL(this.R).B,a=d&&1==c.displayMode,c=d&&2==c.displayMode,b=(d=a||c)||!b?null:this.R.Dh();g.N(this.element,"ytp-hd-quality-badge","hd720"==b||"hd1080"==b||"hd1440"==b);g.N(this.element,"ytp-4k-quality-badge","hd2160"==b);g.N(this.element,"ytp-5k-quality-badge","hd2880"==b);g.N(this.element,"ytp-8k-quality-badge","highres"==b);g.N(this.element,"ytp-3d-badge-grey",d&&a);g.N(this.element,"ytp-3d-badge",d&&c)};g.p(SR,g.JR);g.h=SR.prototype;g.h.Om=function(a){return a.toString()};
g.h.Kd=function(a){return"1"==a?g.Q("YTP_NORMAL_SPEED"):a.toString()};
g.h.Ir=function(){var a=this.R.Ha();this.enable(2!=a&&3!=a)};
g.h.Eg=function(a){g.JR.prototype.Eg.call(this,a);a?(this.B=this.N(this.R,"onPlaybackRateChange",this.vB),g.LR(this,(0,g.H)(this.R.Bg(),this.Om)),g.KR(this,this.Om(this.R.Vb()))):(this.Qa(this.B),this.B=null)};
g.h.vB=function(a){g.KR(this,this.Om(a))};
g.h.kc=function(a){g.JR.prototype.kc.call(this,a);this.R.de((0,window.parseFloat)(a),!0);this.A.xd()};g.p(UR,g.JR);UR.prototype.T=function(a){return a.option.toString()};
UR.prototype.Kd=function(a){return TR(this.O[a])};
UR.prototype.kc=function(a){g.JR.prototype.kc.call(this,a);this.U("settingChange",this.L,this.O[a].option)};
UR.prototype.W=function(a){this.U("settingChange",this.L+"Override",!a);this.A.xd()};g.p(VR,g.XP);VR.prototype.A=function(a,b){this.U("settingChange",a,b)};g.p(XR,g.JR);XR.prototype.G=function(a){return a.languageCode};
XR.prototype.Kd=function(a){return this.B[a].languageName||""};
XR.prototype.kc=function(a){this.U("select",a);g.fQ(this.A)};g.p(YR,g.JR);g.h=YR.prototype;g.h.Sm=function(a){return g.cc(a)?"__off__":a.displayName};
g.h.Kd=function(a){return"__off__"==a?g.Q("YTP_LANGUAGE_OFF"):"__translate__"==a?g.Q("YTP_AUTO_TRANSLATE"):"__contribute__"==a?g.Q("YTP_CONTRIBUTE_MENU_ITEM"):("__off__"==a?{}:this.B[a]).displayName};
g.h.kc=function(a){"__translate__"==a?this.G.open():"__contribute__"==a?(this.R.ac(),this.R.isFullscreen()&&g.RL(this.R),a=g.fD(g.W(this.R),this.R.ca()),g.sN(a)):(this.R.Ac("captions","track","__off__"==a?{}:this.B[a]),g.JR.prototype.kc.call(this,a),this.A.xd())};
g.h.Ph=function(){var a=-1!=this.R.Qf().indexOf("captions"),b=this.R.ca().gh;if(a||b){if(a){var c=this.R.Jb("captions","track");var d=this.R.Jb("captions","tracklist",{includeAsr:!0});var e=this.R.Jb("captions","translationLanguages");this.B=g.Jb(d,this.Sm,this);var f=(0,g.H)(d,this.Sm);if(e.length){var k=this.G;var l=e;k.B=g.Jb(l,k.G,k);g.LR(k,(0,g.H)(l,k.G));f.push("__translate__")}k=this.Sm(c)}else this.B={},f=[],k="__off__";f.unshift("__off__");this.B.__off__={};b&&f.unshift("__contribute__");
this.B[k]||(this.B[k]=c,f.push(k));g.LR(this,f);g.KR(this,k);a?(WR(this.L,this.R.Rf()),this.K.Fb(d.length?" ("+d.length+")":""),this.U("size-change"),a&&e.length&&this.o.__translate__.element.setAttribute("aria-disabled",!!g.cc(c))):(this.K.Fb(""),this.U("size-change"));this.enable(!0)}else this.enable(!1)};
g.h.Lr=function(a){this.R.Ac("captions","sampleSubtitles",a)};
g.h.CB=function(a){var b=this.R.Jb("captions","track"),b=g.ec(b);b.translationLanguage=this.G.B[a];this.R.Ac("captions","track",b)};
g.h.BB=function(a,b){if("reset"==a)this.R.Dm();else{var c={};c[a]=b;this.R.vj(c)}this.Lr(!0);this.O.start();WR(this.L,this.R.Rf())};
g.h.Y=function(){g.Ho(this.O);g.JR.prototype.Y.call(this)};g.p(ZR,g.bQ);ZR.prototype.ud=function(a){$R(this);0<this.B.Ia.length&&g.bQ.prototype.ud.call(this,a)};
ZR.prototype.show=function(){g.bQ.prototype.show.call(this);g.L(this.A.getRootNode(),"ytp-settings-shown")};
ZR.prototype.hide=function(){g.bQ.prototype.hide.call(this);g.M(this.A.getRootNode(),"ytp-settings-shown")};g.p(cS,g.U);
cS.prototype.o=function(){var a=!1;-1!=this.R.Qf().indexOf("remote")&&(a=1<this.R.Jb("remote","receivers").length);this.rb(a&&400<=g.PL(this.R).Na().width);var b=1;a&&this.R.Jb("remote","casting")&&(b=2);if(this.A!=b){this.A=b;switch(b){case 1:this.pa("icon",g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-cast-desktop-off"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},J:[{F:"path",Da:!0,P:{d:"M27,9 L9,9 C7.9,9 7,9.9 7,11 L7,14 L9,14 L9,11 L27,11 L27,25 L20,25 L20,27 L27,27 C28.1,27 29,26.1 29,25 L29,11 C29,9.9 28.1,9 27,9 L27,9 Z M7,24 L7,27 L10,27 C10,25.34 8.66,24 7,24 L7,24 Z M7,20 L7,22 C9.76,22 12,24.24 12,27 L14,27 C14,23.13 10.87,20 7,20 L7,20 Z M7,16 L7,18 C11.97,18 16,22.03 16,27 L18,27 C18,20.92 13.07,16 7,16 L7,16 Z",fill:"#fff"}}]});
break;case 2:this.pa("icon",g.$q())}g.N(this.element,"ytp-remote-button-active",!!this.R.Jb("remote","casting"))}};
cS.prototype.C=function(){g.XL(this.R,"remote");if(this.R.Jb("remote","quickCast"))this.R.Ac("remote","quickCast",!0);else{var a=this.B,b=this.element;if(IP(a))a.sb();else{$R(a);a:{var c=g.ma(a.B.Ia);for(var d=c.next();!d.done;d=c.next())if(d=d.value,0==d.priority){c=d;break a}c=null}c&&(c.open(),a.ud(b));a.ud(b)}}};g.p(dS,g.U);dS.prototype.G=function(){g.XL(this.o,this.o.app.Ka?"size_small":"size_large");var a=this.o.app,b=!a.Ka;a.V.experiments.g("player_legacy_set_size_style")&&RT(a,!0,b);a.g.va("SIZE_CLICKED",b)};
dS.prototype.A=function(){this.rb(this.o.app.Gc&&!this.o.isFullscreen()&&3!=this.o.Ha());if(this.g){var a=this.o.app.Ka;if(this.B!=a){var b=a?g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-default-view"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},J:[{F:"path",Da:!0,P:{d:"m 26,13 0,10 -16,0 0,-10 z m -14,2 12,0 0,6 -12,0 0,-6 z",fill:"#fff","fill-rule":"evenodd"}}]}:g.Zq?{F:"div",Z:["ytp-icon","ytp-icon-theater-mode"]}:{F:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",
width:"100%"},J:[{F:"path",Da:!0,P:{d:"m 28,11 0,14 -20,0 0,-14 z m -18,2 16,0 0,10 -16,0 0,-10 z",fill:"#fff","fill-rule":"evenodd"}}]};g.W(this.o).ba||null==this.B?this.pa("icon",b):bR(this.D,this.element,b);a=(this.B=a)?g.Q("YTP_DEFAULT_VIEW"):g.Q("YTP_THEATER_MODE");this.pa("title",a);hR(this.C)}}};g.p(eS,g.U);eS.prototype.B=function(){g.XL(this.A,"subtitles");var a=g.IL(this.A).g;a&&a.bu()};
eS.prototype.o=function(){var a=!!g.IL(this.A).g;this.rb(a&&300<=g.PL(this.A).Na().width);a&&this.pa("pressed",!!this.A.Jb("captions","track").displayName)};g.p(fS,g.U);
fS.prototype.C=function(){var a=g.PL(this.o).Na().width,b=350<=a&&(!this.B||!g.T(g.OL(this.o),64));this.rb(b);g.N(this.element,"ytp-time-display-allow-autohide",b&&400>a);a=this.o.df();b&&(b=g.WN(a.current),this.H!=b&&(this.pa("currenttime",b),this.H=b),b=g.WN(a.duration),this.K!=b&&(this.pa("duration",b),this.K=b));this.B&&(a=a.isPeggedToLive,this.G!=a&&(this.G=a,this.C(),b=this.D.element,(b.disabled=a)?this.A&&(this.A(),this.A=null,b.removeAttribute("title")):(b.title=g.Q("YTP_GOTO_LIVE_TOOLTIP"),this.A=
RP(this.L,this.D.element))))};
fS.prototype.T=function(a,b){this.B=b.xa;g.N(this.element,"ytp-live",this.B);this.C()};
fS.prototype.O=function(a){a.target==this.D.element?(g.XL(this.o,"live"),this.o.Kb(window.Infinity),this.o.jc()):g.XL(this.o,"time")};
fS.prototype.Y=function(){this.A&&this.A();g.U.prototype.Y.call(this)};g.p(hS,g.U);g.h=hS.prototype;g.h.DB=function(){var a=this.G.Xc();this.H!=a&&(this.H=a,gS(this,this.o.getVolume(),this.o.zc()))};
g.h.tc=function(a){this.rb(350<=a.width)};
g.h.VE=function(a){if(!g.at(a)){var b=g.Xs(a),c=null;37==b?c=this.C-5:39==b?c=this.C+5:36==b?c=0:35==b&&(c=100);null!=c&&(c=g.td(c,0,100),0==c?this.o.mute():(this.o.zc()&&this.o.Ae(),this.o.setVolume(c)),g.ct(a))}};
g.h.EB=function(a){var b=a.deltaX||-a.deltaY;a.deltaMode?this.o.setVolume(this.C+(0>b?-10:10)):this.o.setVolume(this.C+g.td(b/10,-10,10));g.ct(a)};
g.h.UE=function(){g.XL(this.o,"volume");iS(this,this.B,!0,this.A,this.G.O);this.X=this.C;this.o.zc()&&this.o.Ae()};
g.h.TE=function(a){a-=g.gh(this.W).x;this.o.setVolume(100*g.td(a/(this.H?78:52),0,1))};
g.h.SE=function(){iS(this,this.B,!1,this.A,this.G.O);0==this.C&&(this.o.mute(),this.o.setVolume(this.X))};
g.h.FB=function(a){gS(this,a.volume,a.muted)};
g.h.Yo=function(){iS(this,this.B,this.D,this.A,this.G.O)};
g.h.Nr=function(a){iS(this,this.B,this.D,a,this.G.O)};
g.h.Lt=function(a){g.N(this.element,"ytp-volume-control-hover",a);iS(this,a,this.D,this.A,this.G.O)};
g.h.Y=function(){g.U.prototype.Y.call(this);g.M(this.T,"ytp-volume-slider-active")};g.p(jS,g.U);jS.prototype.C=function(){this.A=!!this.o.ca().videoId;this.rb(this.A);g.oM(this.o,this,this.A&&this.B);if(this.A){var a=this.o.getVideoUrl(!0,!1,!1,!0);this.pa("url",a)}};
jS.prototype.D=function(a){g.XL(this.o,"youtube");var b=this.o.getVideoUrl(!g.XN(a),!1,!0,!0);UO(b,this.o,a);g.nM(this.o,this)};g.p(kS,g.dt);g.h=kS.prototype;g.h.Qm=function(){var a=this.B;yR(a);var b=a.A.getCurrentTime();(b<a.T||b>a.O)&&a.Aj();this.T.C()};
g.h.Kr=function(){this.Kn();!this.O.o||this.Qm()};
g.h.lD=function(){this.Qm();this.G.start()};
g.h.Kn=function(){var a;if(a=!g.W(this.R).isMobile){a=this.B;var b=2*a.C*g.hD();a=300>1E3*a.o.getLength()/a.A.Vb()/b}a=a&&g.OL(this.R).Ab()&&!!window.requestAnimationFrame;b=!a;this.O.o||(a=b=!1);b?this.H||(this.H=this.N(this.R,"progresssync",this.Qm)):this.H&&(this.Qa(this.H),this.H=null);a?this.G.isActive()||this.G.start():this.G.stop()};
g.h.IG=function(a){vS(this.A.o,!a)};
g.h.Rm=function(){var a=this.A.Xc(),b=g.PL(this.R).Na(),c=mS(this),d=Math.max(b.width-2*c,100);if(this.ba!=b.width||this.X!=a){this.ba=b.width;this.X=a;var e=nS(this);this.o.element.style.width=e+"px";this.o.element.style.left=c+"px";var f=this.B;f.bc=c;f.C=e;f.K=a;wR(f);this.A.o.ha=e}c=this.g;b=Math.min(413*(a?1.5:1),Math.round(.82*(b.height-(this.A.Xc()?72:50))));c.W=Math.min(570*(a?1.5:1),d);c.T=b;c.gi();this.Kn()};
g.h.na=function(){return this.o.element};g.p(g.oS,g.U);g.oS.prototype.A=function(){g.L(this.element,"ytp-sb-subscribed")};
g.oS.prototype.B=function(){g.M(this.element,"ytp-sb-subscribed")};g.p(qS,g.U);qS.prototype.ba=function(a){g.XL(this.o,"title");g.nM(this.o,this);var b=this.o.getVideoUrl(!g.XN(a),!1,!0);UO(b,this.o,a)};
qS.prototype.da=function(a,b,c){var d=c.user_info;if(d){b=d.channel_logo_url||d.image_url;c=d.channel_title||d.username;var e=d.channel_url,f=d.channel_external_id,d=d.subscriber_count;b&&e&&c&&g.PD.test(b)&&rS(this,a,f,c,e,b,d)}};
qS.prototype.H=function(){sS(this);var a=this.o.ca();this.pa("title",a.title);this.B&&(this.B.o=a.hi);var b=g.W(this.o);if(b.experiments.g("embed_view_count")){var c=a.shortViewCount;g.N(this.o.getRootNode(),"ytp-show-title-view-count",!!c);this.pa("viewCount",c)}!b.H&&a.videoId?(this.pa("url",this.o.getVideoUrl(!0)),this.A||(this.A=this.N(this.X,"click",this.ba))):this.A&&(this.pa("url",null),this.Qa(this.A),this.A=null)};g.p(tS,g.U);g.h=tS.prototype;g.h.TD=function(a){3==this.o&&this.Gd();a=a.currentTarget;this.o||(a.removeEventListener("mouseover",this.W),a.addEventListener("mouseout",this.la),wS(this,a,2))};
g.h.QD=function(a){(a=Zs(a))&&g.je(this.A,a)||this.Gd()};
g.h.Mr=function(a,b){if(a<=this.C&&this.C<=b){var c=this.C;this.C=window.NaN;AS(this,c)}};
g.h.uy=function(){FD(this.B,this.C,160*this.D)};
g.h.Gd=function(){switch(this.o){case 2:this.A.removeEventListener("mouseout",this.la),this.A.addEventListener("mouseover",this.W);case 3:3==this.o&&this.da.stop();this.T.removeEventListener("appresize",this.X);this.O||this.A.setAttribute("title",this.G);this.G="";this.A=null;break;case 1:this.B&&(this.B.unsubscribe("l",this.Mr,this),this.B=null),this.T.removeEventListener("videoready",this.X),this.ba.stop()}this.o=null;this.L&&this.K.hide()};
g.h.ng=function(a){if(this.A)for(var b=0;b<arguments.length;b++)g.je(arguments[b],this.A)&&this.Gd()};
g.h.Y=function(){null!=this.o&&this.Gd();g.U.prototype.Y.call(this)};g.x("yt.pubsub.publish",g.Bt,void 0);g.p(ES,g.U);g.h=ES.prototype;g.h.tc=function(a){this.C=300<=a.width;this.rb(this.C);a=480<a.width;var b=g.W(this.o);b.experiments.g("enable_watch_later_button_title")&&b.A&&(g.N(this.G,"ytp-show-watch-later-title",a),this.pa("watch_later",a?g.Q("YTP_WATCH_LATER"):""));g.oM(this.o,this,this.C&&this.K)};
g.h.rF=function(){this.A=!0;this.B=!1;DS(this,1);g.W(this.o).isMobile&&xS(this.H,this.element);g.W(this.o).gb&&this.o.va("WATCH_LATER_VIDEO_ADDED")};
g.h.GB=function(){g.XL(this.o,"watchlater");g.nM(this.o,this);var a=this.o.ca().videoId;g.W(this.o).Lb?CS(this,a):g.BS(function(){fx({videoId:a});window.location.reload()},null,"wl_button",800,600)};
g.h.sF=function(a,b){this.B=!1;var c=g.Q("YTP_ERROR_GENERIC_WITHOUT_LINK");b&&(c=b.errors&&b.errors.length?b.errors[0]:b.error_message);DS(this,4,c);g.W(this.o).gb&&this.o.va("WATCH_LATER_ERROR",c)};
g.h.tF=function(){this.B=this.A=!1;DS(this,2);g.W(this.o).gb&&this.o.va("WATCH_LATER_VIDEO_REMOVED")};
g.h.HB=function(){this.B=this.A=!1;DS(this,2)};
g.h.Y=function(){g.U.prototype.Y.call(this);g.M(this.G,"ytp-watch-later-button-visible")};g.p(FS,g.U);FS.prototype.D=function(a){this.rb(!g.T(a.state,2))};
FS.prototype.B=function(){if(this.A.ca().videoId){var a=this.A.getVideoUrl(!0,!1,!1,!0);this.pa("url",a);this.o||(this.o=this.ga("click",this.C))}else this.o&&(this.pa("url",null),this.Qa(this.o),this.o=null)};
FS.prototype.C=function(a){var b=this.A.getVideoUrl(!g.XN(a),!1,!0,!0);UO(b,this.A,a)};g.p(GS,KP);g.h=GS.prototype;g.h.dl=function(a,b){b?this.X=a:this.X=null;this.Fe()};
g.h.fl=function(a,b){if(b)this.H.push(a);else for(var c=this.H.length;0<=c;c--)if(this.H[c]==a){this.H.splice(c,1);break}this.B.Eb(64,0<this.H.length)};
g.h.Kg=function(){g.YL(this.g)&&g.ZL(this.g);return!!this.X||KP.prototype.Kg.call(this)};
g.h.Fe=function(){var a=!this.Kg(),b=a&&g.YL(this.g)&&!g.T(g.OL(this.g),2);a?(this.Ua.show(),this.Va.show()):(this.Ua.hide(),this.Va.hide(),this.o.ng(this.C.element,this.K.element));b?this.K.A.show():this.K.A.hide();g.N(this.C.element,"ytp-cards-available",b);this.A&&lS(this.A,!a);KP.prototype.Fe.call(this)};
g.h.Zm=function(a){a&&(this.o.ng(this.C.element,this.K.element),this.A&&this.o.ng(this.A.na()));KP.prototype.Zm.call(this,a)};
g.h.JA=function(a){var b=this.g.getRootNode();a?b.parentElement?(b.setAttribute("aria-label",g.Q("YTP_PLAYER_FULLSCREEN")),b.parentElement.insertBefore(this.fa.element,b),b.parentElement.insertBefore(this.da.element,b.nextSibling)):g.xr(Error("Player not in DOM.")):(b.setAttribute("aria-label",g.Q("YTP_PLAYER_NORMAL")),this.fa.detach(),this.da.detach());this.Md();this.ig()};
g.h.Xc=function(){return this.g.isFullscreen()};
g.h.Md=function(){var a=this.Xc();this.o.D=a?1.5:1;g.N(this.L.element,"ytp-big-mode",a);KP.prototype.Md.call(this)};
g.h.ig=function(){KP.prototype.ig.call(this);g.oM(this.g,this.La,!!this.T);var a=this.Ma,b=!!this.T;a.D=b;g.oM(a.o,a,a.B&&b);this.wa&&(a=this.wa,b=!!this.T,a.K=b,g.oM(a.o,a,a.C&&b));if(!this.T)for(this.o.ng(this.C.element,this.K.element),a=0;a<this.oa.length;a++)b=this.oa[a],IP(b)&&b.sb()};
g.h.Vj=function(a){this.A&&lS(this.A,this.Kg());KP.prototype.Vj.call(this,a)};
g.h.bE=function(){this.B.Eb(128,!1)};
g.h.Qi=function(){return this.L.g?(this.L.sb(),!0):this.H.length?(this.H[this.H.length-1].sb(),!0):this.X?(this.X.sb(),!0):KP.prototype.Qi.call(this)};
g.h.mG=function(a,b){this.wb=b;this.fl(a,b);this.vr()};
g.h.vr=function(){var a=this.wb||IP(this.L);this.Ka!=a&&(this.Ka=a,this.g.va("onAutonavPauseRequest",this.Ka))};
g.h.Nw=function(){HS(this,this.g.getRootNode(),!0).focus()};
g.h.Ow=function(){HS(this,this.g.getRootNode(),!1).focus()};IS.prototype.click=function(a){a=a.element.getAttribute("data-visual-id");g.lM(this,"onLogVeClicked",{id:a})};
IS.prototype.G=function(a){var b=a.element.getAttribute("data-visual-id");g.tb(this.A,a);g.tb(this.o,b);g.tb(this.g,b);a.element.removeAttribute("data-visual-id")};
IS.prototype.pause=function(){this.B=!0};
IS.prototype.resume=function(){this.B=!1;for(var a=g.ma(this.C),b=a.next();!b.done;b=a.next())b=b.value,g.lM(this,b.type,b.data);this.C.length=0};g.p(NS,g.I);g.h=NS.prototype;g.h.nC=function(){QS(this)||g.iT(this,5)};
g.h.jE=function(a){QS(this)||(LT(this),aG(a.A)&&PT(this))};
g.h.xc=function(){var a=this.C?this.C.sl():{},b=this.A,c={};b.g&&g.Ea(c,b.g.jA());g.Ea(a,c);this.A.A&&g.Ea(a,null);a.fs=this.g.isFullscreen();a.volume=Math.round(this.K.getVolume());a.mos=this.K.zc()?1:0;this.V.experiments.g("html5_enable_embedded_player_visibility_signals")&&this.V.A&&(this.sc&&(b=this.sc,b=null==b.o?null:Math.round(100*b.o)/100,null!=b&&(a.inview=b)),b=this.G.Na(),0<b.height&&0<b.width&&(b=[Math.round(b.height),Math.round(b.width)],c=g.hD(),1<c&&b.push(c),a.size=b.join(":")));return a};
g.h.getCurrentTime=function(a){return 3==ML(this)?g.NL(this.A).getCurrentTime():(a=g.X(this,a))?a.getCurrentTime():0};
g.h.getDuration=function(a){return(a=g.X(this,a))?a.getDuration():0};
g.h.Py=function(a){switch(a.type){case "loadedmetadata":JE("fvb",this.H.g)||this.H.o("fvb");g.qE("fvb",void 0,"video_to_ad");this.Ya.start();break;case "loadstart":JE("gv",this.H.g)||this.H.o("gv");g.qE("gv",void 0,"video_to_ad");break;case "progress":case "timeupdate":!JE("l2s",this.H.g)&&2<=iy(ry(a.target))&&this.H.o("l2s");break;case "playing":g.kD&&this.Ya.start();var b=this.A.B;a="none"==Zg(this.D.g,"display")||0==g.oh(this.D.g).Sb();b=!MO(this.G)||b||!this.V.D||this.V.Ne;a&&!b&&(this.C.Rc("hidden",
"1",!0),$S(this).Zf||ST(this,"hidden",!0))}};
g.h.tD=function(a,b){this.g.va("onLoadProgress",b)};
g.h.WE=function(){this.g.U("playbackstalledatstart")};
g.h.Qy=function(a,b){this.g.va("onVideoProgress",b)};
g.h.Ny=function(){this.K.U("progresssync")};
g.h.Ky=function(a){!this.V.experiments.g("disable_live_head_slowdown")&&0<fG(a,1)&&!g.T(a.state,64)&&this.o.g.xa&&lL(this.o)&&1<this.g.Vb()&&nT(this,1,!0);var b;if(b=0<fG(a,2))this.B&&("embedded"==this.V.g||this.g.isFullscreen()&&!this.Ea)&&g.vP(this)?(HT(this,!1,!this.V.experiments.g("legacy_autoplay_flag")),b=!0):b=!1,b=!b;b&&(b=this.o.o)&&Ms(b.g);g.T(a.state,128)&&(b=a.state,zT(this),b=b.g,this.g.va("onError",ZV[b.errorCode]||5),this.g.va("onDetailedError",b));a.state.Ab()&&!g.cG(a.state)&&(b=
$S(this),g.rE("cpn",b.clientPlaybackNonce,"ad_to_video"),b.videoId&&g.rE("docid",b.videoId,"ad_to_video"),b.playbackId&&g.rE("plid",b.playbackId,"ad_to_video"),g.qE("pbresume",void 0,"ad_to_video"));this.g.U("applicationplayerstatechange",a)};
g.h.Qs=function(a){3!=ML(this)&&(!g.T(a.state,32)&&0>fG(a,16)&&(!g.T(a.state,8)||g.T(a.state,64)||this.D.g.ended||g.T(a.state,2)||PT(this)),this.g.U("presentingplayerstatechange",a))};
g.h.My=function(a){lT(this,dG(a.state))};
g.h.lC=function(a){"newdata"==a&&rT(this)};
g.h.qC=function(){this.g.va("onPlaybackAudioChange",this.g.cf().Ub.name)};
g.h.mF=function(a){a==this.C.g&&this.g.va("onPlaybackQualityChange",a.Ba.video.quality)};
g.h.wm=function(a,b,c){if("newdata"==a)AO(this.A),this.g.U("videoplayerreset",b);else{if(!this.D)return;if("dataloaded"==a)if(b.V.ge(c.xb),this.C==this.o){if(this.V.experiments.g("disable_sap_error_check")||!this.o.A.isError()){var d=QS(this),e=this.o.g;if(!vF(e)||d||gF(this.o.g))e.Pb(),d&&g.iT(this,6),aT(this),d||(e=this.A.A)&&!e.o&&xO(this.A)&&this.A.A.create();else{var d=e.xa&&!g.SB()?"html5.unsupportedlive":"fmt.noneavailable",f="YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK";(!XC(this.V)||VU||gs()?
0:g.Dc||e.ec&&ci)&&(f=e.ec?"YTP_HTML5_PROTECTED_FLASH_FALLBACK":"YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK_FLASH");g.NK(this.o,d,f,"nosupported.1;f18."+ +(0<=e.rf.indexOf("itag=18"))+";f43."+ +(0<=e.rf.indexOf("itag=43")))}}}else aT(this);1==b.getPlayerType()&&(this.V.K&&TT(this),$S(this).xa&&!this.V.YB&&g.NK(this.o,"html5.unsupportedlive","YTP_DEVICE_FALLBACK",void 0),c.Pb()&&(c.Nj||c.qm||c.gd.focEnabled||c.gd.rmktEnabled||$S(this).Hk)&&(e=$S(this),uT(this,"part2viewed",1,0x8000000000000),uT(this,
"engagedview",Math.max(1,1E3*e.Ud),0x8000000000000),e.xa||(e=1E3*e.lengthSeconds,uT(this,"videoplaytime25",.25*e,e),uT(this,"videoplaytime50",.5*e,e),uT(this,"videoplaytime75",.75*e,e),uT(this,"videoplaytime100",e,0x8000000000000),uT(this,"conversionview",e,0x8000000000000))));this.g.U("videodatachange",a,c,b.getPlayerType())}this.V.gb&&this.g.va("onVideoDataChange",{type:a,playertype:b.getPlayerType()});a=c.clientScreenNonce;c=c.rootVeType;!this.V.experiments.g("player_change_screen_killswitch")&&
a&&c&&(b=this.da,a!=b.D&&(b.D=a,g.lM(b,"onScreenChanged",{csn:a,root_ve_type:c}),b.g.length&&g.lM(b,"onLogVesShown",{ids:b.g}),b.o=g.wb(b.g)))};
g.h.Ii=function(){eT(this,null);this.g.va("onPlaylistUpdate")};
g.h.ds=function(a){var b=a.getId(),c=this.o.g;if("part2viewed"==b)c.Zs&&g.is(c.Zs),c.qm&&g.is(c.qm);else if("conversionview"==b){var d=this.o;d.C&&HG(d.C)}else"engagedview"==b&&g.is(c.Nj);c.Fg&&(d=vT(this,c.Fg,a.getId()),g.is(d));switch(b){case "videoplaytime25":c.Gq&&g.is(c.Gq);g.is(c.LF);break;case "videoplaytime50":c.Hq&&g.is(c.Hq);g.is(c.MF);break;case "videoplaytime75":c.Iq&&g.is(c.Iq);g.is(c.NF);break;case "videoplaytime100":c.Fq&&g.is(c.Fq),g.is(c.KF)}(b=$S(this).Hk)&&b[a.getId()]&&(c=b[a.getId()],
g.is(c,void 0,IV.test(c)||JV.test(c)||KV.test(c)),b=b[a.getId()+"gaia"],g.is(b,void 0,IV.test(b)||JV.test(b)||KV.test(b)));this.o.D.G(a)};
g.h.isPeggedToLive=function(){return this.o.isPeggedToLive()};
g.h.Oy=function(a,b){var c=a.g;if(1==this.O||2==this.O)c.startSeconds=b;2==this.O?gT(this):this.g.U("seekto",b)};
g.h.cC=function(){this.g.U("airplayactivechange")};
g.h.dC=function(){this.g.U("airplayavailabilitychange")};
g.h.uC=function(){this.g.U("beginseeking")};
g.h.cD=function(){this.g.U("endseeking")};
g.h.cn=function(){var a=this.B.zb(),b=$S(this);b.kf||!this.fa?(b=b.Zd,a=xT(this,a),b&&BT(this,a)):a&&CT(this,a);this.g.va("onPlaylistUpdate")};
g.h.jC=function(a){this.g.va("onCueRangeEnter",a.getId())};
g.h.kC=function(a){this.g.va("onCueRangeExit",a.getId())};
g.h.oC=function(){this.ha||(this.ha=cE(this.ms,this));NG(this.H,KT(this));if(this.V.experiments.g("html5_playlist_preload")&&g.vP(this)){var a=this.B.zb(XG(this.B));a&&AT(this,a,1,!1)}};
g.h.mC=function(){var a=this.o.g,b=this.o.D.g.g||[],c=this.Wa.videoplaytime100;this.V.experiments.g("send_pyv_ad_mt_and_abandon_pings")&&a.Fg&&0<=b.indexOf(c)&&(a=vT(this,a.Fg,"video_abandon"),g.is(a))};
g.h.nD=function(){this.K.U("internalAbandon")};
g.h.ms=function(a){a=a.g;if(!(0,window.isNaN)(a)&&0<a&&this.o){var b=this.o;b.C&&0<a&&(b.C.o.o.aft=[a])}};
g.h.LD=function(){this.Xm()};
g.h.MD=function(){this.Xm()};
g.h.Xm=function(){this.V.gb&&this.C?this.g.va("onApiChange",this.C.getPlayerType()):this.g.va("onApiChange")};
g.h.JD=function(){var a={volume:g.td(Math.floor(100*this.D.getVolume()),0,100),muted:this.D.g.muted};a.muted||jT(this,!1);this.L=g.ec(a);this.g.va("onVolumeChange",a)};
g.h.eD=function(){var a=g.Ls();OT(this,a==this.G.element?1:0);NT(this,!!a&&g.je(this.G.element,a))};
g.h.CE=function(){2!=this.Xa&&OT(this,g.Ls()==this.G.element?1:0);this.V.ni&&$S(this)&&!$S(this).backgroundable&&this.D&&.33>window.outerHeight*window.outerWidth/(window.screen.width*window.screen.height)&&Ms(this.D.g)};
g.h.sD=function(a){3!=ML(this)&&this.g.U("liveviewshift",a)};
g.h.BE=function(a){var b=g.TM(this.G);g.Ig(this.Ec,b)||(this.Ec=b,this.C&&tL(this.C,"r"),!this.V.experiments.g("disable_app_resize")&&this.o&&this.o!=this.C&&tL(this.o,"r"),1==this.Xa&&this.La&&NT(this,!0));this.bc&&g.Dd(this.bc,a)||(this.g.U("appresize",a),this.bc=a)};
g.h.Lc=function(){return this.K.Lc()};
g.h.QE=function(){ST(this,"signature")};
g.h.WD=function(){US(this);TS(this)};
g.h.LC=function(){this.g.va("CONNECTION_ISSUE")};
g.h.Ly=function(a){this.g.U("heartbeatparams",a)};
g.h.Bh=function(){var a=this.g.isFullscreen()||SC(this.V),b=this.g.app.V.Cb;return $L(this.g)?4:zK()?3:a?2:b?1:0};
g.h.Y=function(){this.o.dispose();US(this);g.ve(g.Wb(this.Va),this.B);g.aE(this.ha);this.ha=0;this.Fa&&this.Fa.dispose();g.I.prototype.Y.call(this)};
var CW={};g.x("yt.player.Application.create",function(a,b){try{var c=g.u(a)?a:"player"+g.Ba(a);if(CW[c]){try{CW[c].dispose()}catch(e){g.xr(e)}CW[c]=null}var d=new NS(a,b);g.te(d,function(){CW[c]=null});
return CW[c]=d}catch(e){throw g.xr(e),e.stack;}},void 0);
var DW=g.y("ytcsi.tick");DW&&DW("pe");/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var MU=window,AU=window.document,$T=MU.location,XT=/\[native code\]/,IU=VT(MU,"gapi",{});var aU;aU=VT(MU,"___jsl",ZT());VT(aU,"I",0);VT(aU,"hel",10);var gU=VT(aU,"perf",ZT());VT(gU,"g",ZT());var fU=VT(gU,"i",ZT());VT(gU,"r",[]);ZT();ZT();var jU=ZT(),FU=[];FU.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?aU[b]=VT(aU,b,[]).concat(c):VT(aU,b,c)}if(b=a.u)a=VT(aU,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var sU=/^(\/[a-zA-Z0-9_\-]+)+$/,tU=[/\/amp\//,/\/amp$/,/^\/amp$/],wU=/^[a-zA-Z0-9\-_\.,!]+$/,pU=/^gapi\.loaded_[0-9]+$/,vU=/^[a-zA-Z0-9,._-]+$/,mU=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,lU=/\/cb=/g,kU=/\/\//g;jU.m=function(a,b,c,d){(a=a[0])||iU("missing_hint");return"https://apis.google.com"+rU(a,b,c,d)};
var BU=(0,window.decodeURI)("%73cript"),zU=/^[-+_0-9\/A-Za-z]+={0,2}$/;IU.load=function(a,b){return HU(function(){return LU(a,b)})};g.PU.prototype.B=function(){var a=g.y("gapi.config.update");a("googleapis.config/auth/useFirstPartyAuth",!0);a("googleapis.config/auth/useFirstPartyAuthV2",!0);var b=this.g.apiaryHost;Ia(g.Wa(b))||a("googleapis.config/root",(-1==b.indexOf("://")?"//":"")+b);b=this.g.Jk;Ia(g.Wa(b))||a("googleapis.config/root-1p",(-1==b.indexOf("://")?"//":"")+b);b=g.P("SESSION_INDEX");a("googleapis.config/sessionIndex",b);g.y("gapi.client.setApiKey")(this.g.innertubeApiKey)};
g.PU.prototype.o=function(){return{context:Tt(this.g)}};
g.PU.prototype.A=function(a,b,c){var d,e=!1;0<c.timeout&&(d=g.Fr(function(){e||(e=!0,c.oc&&c.oc())},c.timeout));
QU(this,a,b,function(a){if(!e)if(e=!0,d&&g.Dr(d),a)c.nb&&c.nb(a);else if(c.onError)c.onError()})};
var NU=null;})(_yt_player);
