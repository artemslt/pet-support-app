(self.webpackChunkpet_support_app=self.webpackChunkpet_support_app||[]).push([[774],{5774:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return tt}});var r,o,i,l=t(8861),a=t(9439),c=t(168),s=t(4313),u=t(4874),d=s.default.button(r||(r=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 0;\n  font-size: ","px;\n  font-family: ",";\n  font-weight: ",";\n  color: ",";\n  border: none;\n  margin-left: auto;\n  position: absolute;\n  right: 0;\n  bottom: -100px;\n  background-color: transparent;\n  &:hover {\n    cursor: pointer;\n  }\n  "," {\n    position: static;\n  }\n"])),(function(n){return n.theme.fontSizes[3]}),(function(n){return n.theme.fonts[1]}),(function(n){return n.theme.fontWeights[1]}),(function(n){return n.theme.colors.mainBlack}),(0,u.up)("tablet")),p=s.default.div(o||(o=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  margin-left: 12px;\n  background-color: ",";\n"])),(function(n){return n.theme.colors.mainAccent})),f=t(2791),h=["title","titleId"];function m(){return m=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},m.apply(this,arguments)}function x(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function g(n,e){var t=n.title,r=n.titleId,o=x(n,h);return f.createElement("svg",m({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},o),t?f.createElement("title",{id:r},t):null,i||(i=f.createElement("path",{d:"M12 20V12M12 12V4M12 12H20M12 12H4",stroke:"white",strokeWidth:2,strokeLinecap:"round"})))}var b,v,j,y,w,k,C,O=f.forwardRef(g),Z=(t.p,t(184)),S=function(n){var e=n.onClick;return(0,Z.jsxs)(d,{type:"button",onClick:e,children:["Add pet",(0,Z.jsx)(p,{children:(0,Z.jsx)(O,{})})]})},_=t(1087),E=s.default.nav(b||(b=(0,c.Z)(["\n  position: relative;\n  display: flex;\n  flex-wrap: wrap-reverse;\n  flex-direction: row-reverse;\n  justify-content: flex-end;\n  margin-bottom: 16px;\n  "," {\n    justify-content: flex-end;\n    flex-direction: row;\n  }\n\n  "," {\n    flex-wrap: nowrap;\n    align-items: center;\n    flex-direction: row;\n    justify-content: flex-start;\n    margin-bottom: 60px;\n  }\n"])),(0,u.up)("tablet"),(0,u.up)("pc")),A=s.default.div(v||(v=(0,c.Z)(["\n  display: flex;\n  flex-wrap: wrap-reverse;\n  flex-direction: row-reverse;\n  max-width: 500px;\n  justify-content: flex-end;\n\n  "," {\n    max-width: 100%;\n  }\n"])),(0,u.up)("pc")),z=(0,s.default)(_.OL)(j||(j=(0,c.Z)(["\n  height: 35px;\n  padding: 8px 28px;\n  border-radius: 40px;\n  border: 2px solid #f59256;\n  background: ",";\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  font-family: ",";\n  font-size: ",";\n  line-height: 17px;\n  margin-bottom: 12px;\n  margin-right: 9px;\n  cursor: pointer;\n\n  &.active {\n    color: ",";\n    background-color: ",";\n  }\n  "," {\n    margin-bottom: 0;\n  }\n"])),(function(n){return n.theme.colors.mainWhite}),(function(n){return n.theme.fonts[1]}),(function(n){return n.theme.fontSizes[1]}),(function(n){return n.theme.colors.mainWhite}),(function(n){return n.theme.colors.mainAccent}),(0,u.up)("pc")),F=t(6299),N=s.default.button(y||(y=(0,c.Z)(["\n  position: fixed;\n  z-index: 1;\n  opacity: 0.9;\n  right: 20px;\n  top: 455px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  border: transparent;\n  background-color: ",";\n  cursor: pointer;\n"])),(function(n){return n.theme.colors.mainAccent})),M=s.default.p(w||(w=(0,c.Z)(["\n  font-size: ","px;\n  font-family: ",";\n  font-weight: 500;\n  color: ",";\n"])),(function(n){return n.theme.fontSizes[0]}),(function(n){return n.theme.fonts[1]}),(function(n){return n.theme.colors.mainWhite})),I=function(n){var e=n.onClick;return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(N,{type:"button",onClick:e,children:[(0,Z.jsx)(O,{}),(0,Z.jsx)(M,{children:"Add pet"})]})})},W=t(9434),B=t(7863),L=t(5861),T=t(4687),P=t.n(T),V=t(5705),D=t(9085),R=t(9529),q=t(1912),H=t(6727),U=H.Ry().shape({typeOfNotice:H.Z_().required(),title:H.Z_().min(2,"Title should be 2 characters minimum.").max(48,"Title should be 48 characters maximum.").required("Title is required field"),name:H.Z_().min(2,"Name should be 2 characters minimum.").max(16,"Name should be 16 characters maximum.").required("Name is required field"),date:H.Z_("Date must be in format dd.MM.yyyy").required("Date is required field"),breed:H.Z_().min(2,"Breed should be 2 characters minimum.").max(40,"Name should be 40 characters maximum.").required("Breed is required field")}),G=H.Ry().shape({sex:H.Z_().required(),location:H.Z_().matches(/^([\u0410-\u042f\u0430-\u044f\u0401\u0451\u0407\u0457\u0406\u0456\u0404\u0454\u0490\u0491'),\s]+|[a-zA-Z\s]+){2,}$/,"Location must be in format: City, Region").required("Location is required field"),price:H.Z_().matches(/^(?!0\d)(\d+|\d*\.\d*[1-9]\d*)$/g,"Must contain only numbers").required(),img:H.Z_().required(),comment:H.Z_().min(10,"Comment should be 10 characters minimum.").max(100,"Comment should be 100 characters maximum.").required("Comment is required field")}),$=t(463),K=t(9513),J=t.n(K),Q=(t(8639),t(1330)),Y=["title","titleId"];function X(){return X=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},X.apply(this,arguments)}function nn(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function en(n,e){var t=n.title,r=n.titleId,o=nn(n,Y);return f.createElement("svg",X({width:54,height:54,viewBox:"0 0 54 54",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},o),t?f.createElement("title",{id:r},t):null,k||(k=f.createElement("g",{filter:"url(#filter0_ii_200_964)"},f.createElement("path",{d:"M34.7735 0C33.6689 0 32.7735 0.89543 32.7735 2V5.51869C32.7735 6.62326 33.6689 7.51869 34.7735 7.51869H41.0308L30.1466 18.2628C27.0926 16.2988 23.4522 15.159 19.5435 15.159C8.75052 15.159 1.75751e-10 23.8531 1.75751e-10 34.5786C-4.5283e-05 45.3042 8.75052 54 19.5435 54C30.3365 54 39.0854 45.3042 39.0854 34.5786C39.0854 30.5018 37.8218 26.7185 35.6619 23.5946L46.3633 12.9601V19.0938C46.3633 20.1983 47.2587 21.0938 48.3633 21.0938H51.9293C53.0339 21.0938 53.9292 20.1988 53.9313 19.0942C53.9416 13.6212 53.9888 7.46148 53.9983 1.99917C54.0002 0.894746 53.1048 0 52.0003 0H34.7735ZM19.5435 22.9759C25.9924 22.9759 31.2193 28.1701 31.2193 34.5786C31.2193 40.9872 25.9924 46.1831 19.5435 46.1831C13.0947 46.1831 7.866 40.9872 7.866 34.5786C7.866 28.1701 13.0946 22.9759 19.5435 22.9759Z",fill:"#23C2EF"}))),C||(C=f.createElement("defs",null,f.createElement("filter",{id:"filter0_ii_200_964",x:-1,y:-3,width:54.9983,height:59,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},f.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),f.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),f.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),f.createElement("feOffset",{dy:-3}),f.createElement("feGaussianBlur",{stdDeviation:2}),f.createElement("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),f.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),f.createElement("feBlend",{mode:"normal",in2:"shape",result:"effect1_innerShadow_200_964"}),f.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),f.createElement("feOffset",{dx:-1,dy:2}),f.createElement("feGaussianBlur",{stdDeviation:1.5}),f.createElement("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),f.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.57 0"}),f.createElement("feBlend",{mode:"normal",in2:"effect1_innerShadow_200_964",result:"effect2_innerShadow_200_964"})))))}var tn,rn=f.forwardRef(en),on=(t.p,["title","titleId"]);function ln(){return ln=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},ln.apply(this,arguments)}function an(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function cn(n,e){var t=n.title,r=n.titleId,o=an(n,on);return f.createElement("svg",ln({width:40,height:60,viewBox:"0 0 40 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},o),t?f.createElement("title",{id:r},t):null,tn||(tn=f.createElement("path",{d:"M20 0C9.35683 0 0.726929 8.6299 0.726929 19.2731C0.726929 28.0863 6.64583 35.5192 14.7239 37.8147C15.6458 38.0767 16.3297 38.8896 16.3297 39.848V42.401C16.3297 43.5056 15.4343 44.401 14.3297 44.401H10.0639C8.95936 44.401 8.06393 45.2964 8.06393 46.401V49.738C8.06393 50.8426 8.95936 51.738 10.0639 51.738H14.3296C15.4342 51.738 16.3296 52.6334 16.3296 53.738V58C16.3296 59.1046 17.2251 60 18.3296 60H21.6666C22.7712 60 23.6666 59.1046 23.6666 58V53.738C23.6666 52.6334 24.5621 51.738 25.6666 51.738H29.9323C31.0369 51.738 31.9323 50.8426 31.9323 49.738V46.401C31.9323 45.2964 31.0369 44.401 29.9323 44.401H25.6667C24.5621 44.401 23.6667 43.5056 23.6667 42.401V38.197C32.5557 36.4836 39.2731 28.6619 39.2731 19.2731C39.2731 8.6299 30.6432 0 20 0ZM20 7.6639C26.4116 7.6639 31.6092 12.8615 31.6092 19.2731C31.6092 25.6847 26.4116 30.8823 20 30.8823C13.5884 30.8823 8.39083 25.6847 8.39083 19.2731C8.39083 12.8615 13.5885 7.6639 20 7.6639Z",fill:"#FF8787"})))}var sn,un,dn,pn,fn,hn,mn,xn,gn,bn,vn,jn,yn,wn,kn,Cn,On,Zn,Sn,_n,En,An,zn,Fn,Nn,Mn,In,Wn,Bn,Ln,Tn,Pn,Vn,Dn,Rn,qn,Hn=f.forwardRef(cn),Un=(t.p,t(8893)),Gn=t(9460),$n=s.default.div(sn||(sn=(0,c.Z)(["\n  position: relative;\n  width: 280px;\n\n  padding-top: 40px;\n  padding-bottom: 40px;\n  padding-left: 18px;\n  padding-right: 18px;\n\n  "," {\n    padding: 40px 80px;\n    width: 608px;\n  }\n  "," {\n  }\n"])),(0,u.up)("tablet"),(0,u.up)("pc")),Kn=s.default.h2(un||(un=(0,c.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: 24px;\n  line-height: calc(33 / 24);\n  color: ",";\n  text-align: center;\n  margin-bottom: 20px;\n\n  "," {\n    font-size: 36px;\n    line-height: calc(49 / 36);\n    margin-bottom: 20px;\n  }\n"])),(function(n){return n.theme.fonts[1]}),(function(n){return n.theme.fontWeights[1]}),(function(n){return n.theme.colors.mainBlack}),(0,u.up)("tablet")),Jn=(0,s.default)(Q.r)(dn||(dn=(0,c.Z)([""]))),Qn=s.default.button(pn||(pn=(0,c.Z)(["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 34px;\n  height: 34px;\n  right: 20px;\n  top: 20px;\n  background-color: ",";\n  backdrop-filter: blur(2px);\n  border-radius: 80%;\n  border: none;\n  cursor: pointer;\n  &:hover {\n    transition: cubic-bezier(0.075, 0.82, 0.165, 1);\n    background-color: ",";\n  }\n  &:hover "," {\n    transition: cubic-bezier(0.075, 0.82, 0.165, 1);\n    fill: ",";\n  }\n  "," {\n    right: 24px;\n    top: 24px;\n    width: 44px;\n    height: 44px;\n  }\n"])),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.mainAccent}),Jn,(function(n){return n.theme.colors.mainWhite}),(0,u.up)("tablet")),Yn=s.default.p(fn||(fn=(0,c.Z)(["\n  font-size: 16px;\n  line-height: 22px;\n  margin-bottom: 20px;\n  "," {\n    font-size: 20px;\n    line-height: calc(27 / 20);\n    margin-bottom: 28px;\n  }\n"])),(0,u.up)("tablet")),Xn=s.default.p(hn||(hn=(0,c.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: 18px;\n  line-height: calc(26 / 18);\n  margin-bottom: 8px;\n\n  color: ",";\n  "," {\n    font-size: 24px;\n    line-height: calc(26 / 24);\n\n    margin-bottom: 12px;\n  }\n  &:nth-last-child() {\n    margin-bottom: 8;\n  }\n\n  & > span {\n    color: ",";\n  }\n\n  & > p {\n    margin-top: 28px;\n  }\n"])),(function(n){return n.theme.fonts[1]}),(function(n){return n.theme.fontWeights[1]}),(function(n){return n.theme.colors.mainBlack}),(0,u.up)("tablet"),(function(n){return n.theme.colors.mainAccent})),ne=(0,s.default)(V.l0)(mn||(mn=(0,c.Z)(["\n  text-align: left;\n"]))),ee=(0,s.default)(V.gN)(xn||(xn=(0,c.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: 14px;\n  line-height: calc(19 / 14);\n  width: 240px;\n  height: 40px;\n  padding: 0px 14px;\n  color: ",";\n  background: ",";\n  border: 1px solid ",";\n  border-radius: 40px;\n\n  outline: none;\n\n  &:nth-last-child(1) {\n    margin-bottom: 8px;\n  }\n\n  "," {\n    padding: 0 16px;\n    font-size: 16px;\n    line-height: calc(26 / 16);\n    padding: 14px 16px;\n    width: 448px;\n  }\n\n  &:hover {\n    border-color: ",";\n    cursor: pointer;\n  }\n  &:focus {\n    border-color: ",";\n  }\n\n  &::placeholder {\n    color: ",";\n  }\n"])),(function(n){return n.theme.fonts[1]}),(function(n){return n.theme.fontWeights[0]}),(function(n){return n.theme.colors.grayText}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.formInputAccnt}),(0,u.up)("tablet"),(function(n){return n.theme.colors.mainAccent}),(function(n){return n.theme.colors.activeAccent}),(function(n){return n.theme.colors.mainBlack})),te=(0,s.default)(V.Bc)(gn||(gn=(0,c.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.activeAccent})),re=(0,s.default)(J())(bn||(bn=(0,c.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: 14px;\n  line-height: calc(19 / 14);\n  width: 240px;\n  padding: 8.7px 8px;\n  color: ",";\n  background: ",";\n  border: 1px solid ",";\n  border-radius: 40px;\n  cursor: pointer;\n  margin-top: 8px;\n  "," {\n    font-size: 16px;\n    line-height: calc(26 / 16);\n    padding: 7.9px 16px;\n    width: 448px;\n    margin-top: 12px;\n  }\n  outline: none;\n  &:hover,\n  &:focus {\n    border-color: ",";\n  }\n"])),(function(n){return n.theme.fonts[1]}),(function(n){return n.theme.fontWeights[0]}),(function(n){return n.theme.colors.grayText}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.formInputAccnt}),(0,u.up)("tablet"),(function(n){return n.theme.colors.activeAccent})),oe=s.default.div(vn||(vn=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 40px;\n  gap: 12px;\n\n  "," {\n    flex-direction: row-reverse;\n  }\n"])),(0,u.up)("tablet")),ie=s.default.button(jn||(jn=(0,c.Z)(["\n  background: ",";\n  width: 240px;\n  height: 40px;\n  border-radius: 40px;\n  border: 2px solid #f59256;\n\n  font-size: ","px;\n\n  transition: ",";\n\n  "," {\n    width: 180px;\n    height: 44px;\n    margin-bottom: 0px;\n    margin-right: 24px;\n\n    font-size: ","px;\n    &:first-child {\n      margin-right: 0px;\n    }\n  }\n  cursor: pointer;\n  &:hover {\n    background: ",";\n    color: ",";\n  }\n  &.active {\n    background: ",";\n    color: ",";\n\n    &:hover {\n      color: ",";\n      background: ",";\n    }\n  }\n\n  &[name='next'],\n  &[name='back'] {\n    background-color: ",";\n    color: ",";\n  }\n\n  &[name='next']:hover,\n  &[name='next']:focus {\n    background-color: ",";\n    color: ",";\n  }\n\n  &[name='next']:disabled,\n  &[name='back']:disabled {\n    opacity: 0.5;\n\n    &:hover {\n      background-color: ",";\n      color: ",";\n      opacity: 0.5;\n    }\n  }\n"])),(function(n){return n.theme.colors.mainWhite}),(function(n){return n.theme.fontSizes[2]}),(function(n){return n.theme.btnAnimationTransition}),(0,u.up)("tablet"),(function(n){return n.theme.fontSizes[4]}),(function(n){return n.theme.colors.mainAccent}),(function(n){return n.theme.colors.mainWhite}),(function(n){return n.theme.colors.mainAccent}),(function(n){return n.theme.colors.mainWhite}),(function(n){return n.theme.colors.mainBlack}),(function(n){return n.theme.colors.mainWhite}),(function(n){return n.theme.colors.mainAccent}),(function(n){return n.theme.colors.mainWhite}),(function(n){return n.theme.colors.mainWhite}),(function(n){return n.theme.colors.mainBlack}),(function(n){return n.theme.colors.mainAccent}),(function(n){return n.theme.colors.mainWhite})),le=s.default.div(yn||(yn=(0,c.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 32px;\n"]))),ae=s.default.label(wn||(wn=(0,c.Z)(["\n  /* height: 35px; */\n  padding: 8px 28px;\n  border-radius: 40px;\n  border: 2px solid #f59256;\n  /* background: ","; */\n  /* color: black; */\n\n  font-weight: ",";\n  font-size: ","px;\n  font-family: ",";\n  line-height: calc(19 / 14);\n\n  cursor: pointer;\n  transition: ",";\n\n  &:hover,\n  &:focus {\n    color: ",";\n    background-color: ",";\n  }\n  "," {\n    font-size: 20px;\n  }\n"])),(function(n){return n.theme.colors.mainWhite}),(function(n){return n.theme.fontWeights[1]}),(function(n){return n.theme.fontSizes[1]}),(function(n){return n.theme.fonts[1]}),(function(n){return n.theme.btnAnimationTransition}),(function(n){return n.theme.colors.mainWhite}),(function(n){return n.theme.colors.mainAccent}),(0,u.up)("tablet")),ce=(0,s.default)(V.gN)(kn||(kn=(0,c.Z)(["\n  /* \u041f\u0440\u0438\u0445\u043e\u0432\u0430\u0442\u0438 \u0447\u0435\u043a\u0431\u043e\u043a\u0441!! */\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  position: absolute;\n\n  &:checked + label {\n    background-color: #f59256;\n    color: #fff;\n  }\n"]))),se=(0,s.default)($.ZP)(Cn||(Cn=(0,c.Z)(["\n  .Select_Notice__control {\n    width: 240px;\n    margin-top: 8px;\n    padding: 0 14px;\n\n    font-family: ",";\n    font-weight: ",";\n    font-size: 14px;\n    line-height: calc(19 / 14);\n\n    color: ",";\n    background: ",";\n    border: 1px solid ",";\n    border-radius: 40px;\n\n    cursor: pointer;\n\n    "," {\n      padding-top: 0 16px;\n      font-size: 16px;\n      line-height: calc(26 / 16);\n      padding: 2px 8px;\n      width: 448px;\n    }\n    .Select_Notice__control {\n      height: 10px;\n      width: 100%;\n      border: 1px solid #a1a1a1;\n      border-radius: 0;\n      cursor: pointer;\n    }\n  }\n  .Select_Notice__control--is-focused {\n    border-color: transparent;\n    box-shadow: 0 0 0 1px ",";\n    outline: none;\n  }\n  .Select_Notice__menu {\n    font-family: ",";\n    font-weight: ",";\n    color: ",";\n    background: ",";\n    cursor: pointer;\n  }\n  .Select_Notice__control:hover {\n    border-color: ",";\n    cursor: pointer;\n  }\n  .Select_Notice__control:focus {\n    border-color: ",";\n  }\n"])),(function(n){return n.theme.fonts[1]}),(function(n){return n.theme.fontWeights[0]}),(function(n){return n.theme.colors.grayText}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.formInputAccnt}),(0,u.up)("tablet"),(function(n){return n.theme.colors.mainAccent}),(function(n){return n.theme.fonts[1]}),(function(n){return n.theme.fontWeights[0]}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.mainAccent}),(function(n){return n.theme.colors.activeAccent})),ue=(0,s.default)(V.gN)(On||(On=(0,c.Z)(["\n  /* \u041f\u0440\u0438\u0445\u043e\u0432\u0430\u0442\u0438 \u0447\u0435\u043a\u0431\u043e\u043a\u0441!! */\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  position: absolute;\n\n  &:checked + label {\n    color: #f59256;\n  }\n"]))),de=s.default.div(Zn||(Zn=(0,c.Z)(["\n  display: flex;\n  gap: 39px;\n"]))),pe=s.default.p(Sn||(Sn=(0,c.Z)(["\n  font-size: ","px;\n"])),(function(n){return n.theme.fontSizes[3]})),fe=(0,s.default)(Hn)(_n||(_n=(0,c.Z)(["\n  width: 26px;\n  height: 46px;\n\n  "," {\n    width: 39px;\n    height: 60px;\n  }\n"])),(0,u.up)("tablet")),he=(0,s.default)(rn)(En||(En=(0,c.Z)(["\n  width: 36px;\n  height: 36px;\n  "," {\n    width: 54px;\n    height: 54px;\n  }\n"])),(0,u.up)("tablet")),me=s.default.label(An||(An=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n\n  margin-bottom: 32px;\n"]))),xe=(0,s.default)(V.gN)(zn||(zn=(0,c.Z)(["\n  resize: none;\n\n  font-family: ",";\n  font-weight: ",";\n  font-size: 14px;\n  line-height: calc(19 / 14);\n\n  width: 240px;\n  height: 137px;\n  padding: 16px 14px;\n\n  color: ",";\n  background: ",";\n  border: 1px solid ",";\n  border-radius: 40px;\n\n  outline: none;\n\n  "," {\n    padding: 0 16px;\n    font-size: 16px;\n    line-height: calc(26 / 16);\n    padding: 14px 16px;\n    width: 448px;\n    height: 159px;\n  }\n  "," {\n    height: 191px;\n  }\n\n  &:hover {\n    border-color: ",";\n    cursor: pointer;\n  }\n  &:focus {\n    border-color: ",";\n  }\n\n  &::placeholder {\n    color: ",";\n    height: 100%;\n  }\n"])),(function(n){return n.theme.fonts[1]}),(function(n){return n.theme.fontWeights[0]}),(function(n){return n.theme.colors.grayText}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.formInputAccnt}),(0,u.up)("tablet"),(0,u.up)("pc"),(function(n){return n.theme.colors.mainAccent}),(function(n){return n.theme.colors.activeAccent}),(function(n){return n.theme.colors.mainBlack})),ge=s.default.label(Fn||(Fn=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 116px;\n  height: 116px;\n\n  background: #fdf7f2;\n  border-radius: 20px;\n  cursor: pointer;\n\n  "," {\n    width: 140px;\n    height: 140px;\n  }\n\n  &.show_img {\n    display: none;\n  }\n"])),(0,u.up)("tablet")),be=(0,s.default)(V.gN)(Nn||(Nn=(0,c.Z)(["\n  display: none; ;\n"]))),ve=(0,s.default)(Un.r)(Mn||(Mn=(0,c.Z)(["\n  position: absolute;\n  stroke: #111111;\n"]))),je=s.default.div(In||(In=(0,c.Z)(["\n  margin-top: 20px;\n  position: relative;\n\n  width: 116px;\n  height: 116px;\n\n  "," {\n    width: 140px;\n    height: 140px;\n  }\n"])),(0,u.up)("tablet")),ye=s.default.img(Wn||(Wn=(0,c.Z)(["\n  width: 116px;\n  height: 116px;\n\n  background: #fdf7f2;\n  border-radius: 20px;\n\n  object-fit: cover;\n  "," {\n    width: 140px;\n    height: 140px;\n  }\n"])),(0,u.up)("tablet")),we=(0,s.default)(Gn.r)(Bn||(Bn=(0,c.Z)(["\n  fill: ",";\n  width: 18px;\n  height: 18px;\n\n  &:hover,\n  &:focus {\n    fill: ",";\n  }\n"])),(function(n){return n.theme.colors.mainAccent}),(function(n){return n.theme.colors.mainWhite})),ke=s.default.button(Ln||(Ln=(0,c.Z)(["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  border-color: ",";\n  top: -17px;\n  right: -17px;\n\n  width: 34px;\n  height: 34px;\n\n  background-color: ",";\n\n  border-radius: 80%;\n  border: none;\n  cursor: pointer;\n  transition: ",";\n\n  "," {\n    width: 44px;\n    height: 44px;\n    top: -22px;\n    right: -22px;\n  }\n\n  &:hover {\n    background-color: ",";\n  }\n\n  &:hover "," {\n    fill: ",";\n  }\n"])),(function(n){return n.theme.colors.mainAccent}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.btnAnimationTransition}),(0,u.up)("tablet"),(function(n){return n.theme.colors.mainAccent}),Jn,(function(n){return n.theme.colors.mainWhite})),Ce=s.default.div(Tn||(Tn=(0,c.Z)(["\n  position: relative;\n  width: 208px;\n  height: 208px;\n  border-radius: 20px;\n  width: 116px;\n  height: 116px;\n  "," {\n    width: 140px;\n    height: 140px;\n  }\n"])),(0,u.up)("tablet")),Oe=t(3433),Ze=t(6218),Se=t(6426),_e=function(n){var e=n.onChange,t=n.value,r=n.onFocus,o=[].concat((0,Oe.Z)(Ze.M),(0,Oe.Z)(Ze.I)).map((function(n){return n.breed})).filter((function(n){var e=n.match(/^([a-zA-Z\u0430-\u044f\u0410-\u042f\u0451\u0401\s]+)$/);return null===e?null:e})).map((function(n){return{value:n,label:n}}));return(0,Z.jsx)(se,{options:o,classNamePrefix:"Select_Notice",value:function(n,e){return n?n.find((function(n){return n.value===e})):""}(o,t),maxMenuHeight:150,onChange:function(n){e(n)},onFocus:function(){return r(!0)},placeholder:"Type breed",components:{NoOptionsMessage:Se.P}})},Ee=function(n){var e=n.setStep,t=n.isValid,r=n.dirty,o=n.handleReset,i=n.setFieldValue,l=n.values,c=n.errors,s=n.setImgUrl,u=n.setFile,d=n.startDate,p=n.setStartDate,h=n.onToggleModal,m=(0,f.useState)(!1),x=(0,a.Z)(m,2),g=x[0],b=x[1],v=(0,W.v9)((function(n){return n.isInput.toggle}));return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(Yn,{children:["You can sell or give your pets, or inform others about lost pets"," "]}),(0,Z.jsxs)(le,{role:"group",children:[(0,Z.jsx)(ce,{type:"radio",name:"typeOfNotice",value:"lost-found",id:"lost-found"}),(0,Z.jsx)(ae,{htmlFor:"lost-found",children:(0,Z.jsx)("span",{children:"lost/found"})}),(0,Z.jsx)(ce,{type:"radio",name:"typeOfNotice",value:"for-free",id:"for-free"}),(0,Z.jsx)(ae,{htmlFor:"for-free",children:(0,Z.jsx)("span",{children:"in good hands"})}),(0,Z.jsx)(ce,{type:"radio",name:"typeOfNotice",value:"sell",id:"sell",checked:"sell"===l.typeOfNotice,onChange:function(){return i("typeOfNotice","sell")}}),(0,Z.jsx)(ae,{htmlFor:"sell",children:(0,Z.jsx)("span",{children:"sell"})})]}),(0,Z.jsxs)("label",{children:[(0,Z.jsxs)(Xn,{children:["Tittle of ad ",(0,Z.jsx)("span",{children:"*"})]}),(0,Z.jsx)(ee,{name:"title",placeholder:"Type name"}),(0,Z.jsx)(te,{name:"title",component:"div"})]}),(0,Z.jsxs)("label",{children:[(0,Z.jsxs)(Xn,{children:["Name pet ",(0,Z.jsx)("span",{children:"*"})]}),(0,Z.jsx)(ee,{name:"name",placeholder:"Type name pet"}),(0,Z.jsx)(te,{name:"name",component:"div"})]}),(0,Z.jsxs)("label",{children:[(0,Z.jsxs)(Xn,{children:["Date of birth ",(0,Z.jsx)("span",{children:"*"})]}),(0,Z.jsx)(re,{selected:d,dateFormat:"dd.MM.yyyy",name:"date",placeholderText:"00.00.0000",onChange:function(n){p(n),i("date",n.toLocaleString().slice(0,10))},minDate:new Date("December 17, 1900 03:24:00"),maxDate:new Date,showDisabledMonthNavigation:!0,shouldCloseOnSelect:!0}),(0,Z.jsx)(te,{name:"date",component:"div"})]}),(0,Z.jsxs)("label",{children:[(0,Z.jsxs)(Xn,{children:["Breed ",(0,Z.jsx)("span",{children:"*"})]}),v?(0,Z.jsxs)(Z.Fragment,{children:[" ",(0,Z.jsx)(_e,{onChange:function(n){return i("breed",n.value)},value:l.breed,onFocus:b}),g?(0,Z.jsx)("div",{className:"error",children:c.breed}):null]}):(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(ee,{name:"breed",placeholder:"Type breed"}),(0,Z.jsx)(te,{name:"breed",component:"div"})]})]}),(0,Z.jsxs)(oe,{children:[(0,Z.jsx)(ie,{name:"next",disabled:!t||!r,onClick:function(){return e(!1)},type:"button",children:"Next"}),(0,Z.jsx)(ie,{type:"button",onClick:function(){o(),s(""),u(null),h()},children:"Cancel"})]})]})},Ae=function(n){var e=n.setStep,t=n.values,r=n.isValid,o=n.dirty,i=n.setFieldValue,l=n.imgUrl,a=n.setImgUrl,c=t.typeOfNotice;return(0,f.useEffect)((function(){"sell"!==c&&i("price",1)}),[c,i]),(0,Z.jsxs)("div",{children:[(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(Xn,{children:["The sex",(0,Z.jsx)("span",{children:"*"}),":"]}),(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(de,{role:"group",children:[(0,Z.jsx)(ue,{type:"radio",name:"sex",value:"male",id:"male"}),(0,Z.jsxs)(me,{htmlFor:"male",children:[(0,Z.jsx)(he,{}),(0,Z.jsx)(pe,{children:"Male"})]}),(0,Z.jsx)(ue,{type:"radio",name:"sex",value:"female",id:"female"}),(0,Z.jsxs)(me,{htmlFor:"female",children:[(0,Z.jsx)(fe,{}),(0,Z.jsx)(pe,{children:"Female"})]})]})}),(0,Z.jsx)(te,{name:"sex",component:"div"})]}),(0,Z.jsxs)("label",{children:[(0,Z.jsxs)(Xn,{children:["Location",(0,Z.jsx)("span",{children:"*"}),":"]}),(0,Z.jsx)(ee,{name:"location",placeholder:"Type location"}),(0,Z.jsx)(te,{name:"location",component:"div"})]}),"sell"===t.typeOfNotice&&(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)("label",{children:[(0,Z.jsxs)(Xn,{children:["Price",(0,Z.jsx)("span",{children:"*"}),":"]}),(0,Z.jsx)(ee,{name:"price",placeholder:"Type price"}),(0,Z.jsx)(te,{name:"price",component:"div"})]})}),(0,Z.jsxs)("div",{children:[(0,Z.jsxs)(Xn,{children:["Load the pet\u2019s image:",(0,Z.jsx)("span",{children:"*"})]}),(0,Z.jsx)("div",{children:(0,Z.jsxs)(Ce,{children:[(0,Z.jsxs)(ge,{className:l?"show_img":"",children:[!l&&(0,Z.jsx)(be,{name:"img",type:"file",value:l||"",accept:"image/png, image/jpeg"}),(0,Z.jsx)(ve,{}),(0,Z.jsx)(te,{name:"img",component:"div"})]}),l&&(0,Z.jsxs)(je,{children:[(0,Z.jsx)(ye,{src:l,alt:"",width:"60"}),(0,Z.jsx)(ke,{onClick:function(){return a(null)},children:(0,Z.jsx)(we,{})})]})]})})]}),(0,Z.jsxs)("label",{children:[(0,Z.jsx)(Xn,{children:(0,Z.jsxs)("p",{children:["Comments ",(0,Z.jsx)("span",{children:"*"})]})}),(0,Z.jsx)(xe,{component:"textarea",name:"comment",placeholder:"Type comment"}),(0,Z.jsx)(te,{name:"comment",component:"div"})]}),(0,Z.jsxs)(oe,{children:[(0,Z.jsx)(ie,{type:"submit",disabled:!(r&&o),children:"Done"}),(0,Z.jsx)(ie,{type:"button",name:"back",disabled:!r||!o,onClick:function(){return e(!0)},children:"Back"})]})]})},ze=function(n){var e=n.onToggleModal,t=(0,f.useState)(!0),r=(0,a.Z)(t,2),o=r[0],i=r[1],l=(0,f.useState)(null),c=(0,a.Z)(l,2),s=c[0],u=c[1],d=(0,f.useState)(null),p=(0,a.Z)(d,2),h=p[0],m=p[1],x=(0,f.useState)(),g=(0,a.Z)(x,2),b=g[0],v=g[1],j=(0,W.I0)(),y=new FileReader;y.onloadend=function(){u(y.result)};var w=function(n){if(n.target.files&&n.target.files.length>0){var e=n.target.files[0],t=e.size;return Number(t)>3e6?(console.log("ERROR"),D.Am.error("Photo must be no larger than 2.8 megabytes")):(m(e),y.readAsDataURL(e))}};function k(){return(k=(0,L.Z)(P().mark((function n(e){var t;return P().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,q.Z.post("https://pet-support-backend-v8vc.onrender.com/api/notices/notice",e,{headers:{"Content-Type":"multipart/form-data"}});case 3:t=n.sent,D.Am.success("New Notice created successfully"),console.log("responce",t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}return(0,Z.jsxs)($n,{children:[(0,Z.jsx)(Qn,{onClick:function(n){e(n),j((0,R.cp)())},children:(0,Z.jsx)(Jn,{})}),(0,Z.jsx)(Kn,{children:"Add pet"}),(0,Z.jsx)(V.J9,{initialValues:{typeOfNotice:"sell",title:"",name:"",date:"",breed:"",sex:"male",location:"",price:"",img:"",comment:""},validationSchema:o?U:G,onSubmit:function(n,t){var r=t.resetForm;!function(n){k.apply(this,arguments)}({category:n.typeOfNotice,title:n.title,name:n.name,date:n.date,breed:n.breed,sex:n.sex,location:n.location,price:n.price,image:h,comments:n.comment}),console.log("AddPet",n),u(""),r(),e()},children:function(n){var t=n.values,r=n.isValid,l=n.dirty,a=n.handleReset,c=n.setFieldValue,d=n.errors,p=n.isSubmitting;return(0,Z.jsx)(ne,{onChange:w,children:o?(0,Z.jsx)(Ee,{setStep:i,isValid:r,dirty:l,handleReset:a,values:t,errors:d,setImgUrl:u,isSubmitting:p,setFieldValue:c,setFile:m,onToggleModal:e,startDate:b,setStartDate:v}):(0,Z.jsx)(Ae,{setStep:i,values:t,isValid:r,dirty:l,setFieldValue:c,imgUrl:s,setImgUrl:u})})}})]})},Fe=t(1153),Ne=function(){var n=(0,F.G)((0,u.only)("mobile")),e=(0,F.G)((0,u.up)("tablet")),t=(0,W.v9)(B.Qb),r=(0,f.useState)(!1),o=(0,a.Z)(r,2),i=o[0],l=o[1];return(0,Z.jsxs)(E,{children:[(0,Z.jsx)(Fe.t,{onClose:function(){return l(!1)},open:i,children:(0,Z.jsx)(ze,{onToggleModal:function(n){l(!1)}})}),(0,Z.jsxs)(A,{children:[(0,Z.jsx)(z,{to:"sell",children:"sell"}),(0,Z.jsx)(z,{to:"lost-found",children:"lost/found"}),(0,Z.jsx)(z,{to:"for-free",children:"in good hands"}),t?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(z,{to:"for-free",children:"favorite ads"}),(0,Z.jsx)(z,{to:"for-free",children:"my ads"})]}):null]}),n&&(0,Z.jsx)(I,{onClick:function(n){return l(!0)}}),e&&(0,Z.jsx)(S,{onClick:function(n){return l(!0)}})]})},Me=s.default.div(Pn||(Pn=(0,c.Z)(["\n  position: relative;\n  display: inline-flex;\n  text-align: center;\n  margin-bottom: 28px;\n  "," {\n    margin-bottom: 40px;\n  }\n"])),(0,u.up)("tablet")),Ie=s.default.input(Vn||(Vn=(0,c.Z)(["\n  height: 40px;\n  width: 280px;\n  font-family: ",";\n  font-size: ","px;\n  font-weight: ",";\n  color: ",";\n  outline: transparent;\n  padding: 9px 12px;\n  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);\n  border: transparent;\n  border-radius: 20px;\n  "," {\n    width: 608px;\n    height: 44px;\n    padding: 10px 20px;\n    font-size: ","px;\n    border-radius: 40px;\n  }\n"])),(function(n){return n.theme.fonts[0]}),(function(n){return n.theme.fontSizes[2]}),(function(n){return n.theme.fontWeights[1]}),(function(n){return n.theme.colors.inputText}),(0,u.up)("tablet"),(function(n){return n.theme.fontSizes[4]})),We=s.default.button(Dn||(Dn=(0,c.Z)(["\n  position: absolute;\n  padding: 0;\n  right: 12px;\n  top: 10px;\n  border: transparent;\n  background: transparent;\n  cursor: pointer;\n"]))),Be=["title","titleId"];function Le(){return Le=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Le.apply(this,arguments)}function Te(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function Pe(n,e){var t=n.title,r=n.titleId,o=Te(n,Be);return f.createElement("svg",Le({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},o),t?f.createElement("title",{id:r},t):null,Rn||(Rn=f.createElement("g",{clipPath:"url(#clip0_120_565)"},f.createElement("path",{d:"M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z",fill:"#111111"}))),qn||(qn=f.createElement("defs",null,f.createElement("clipPath",{id:"clip0_120_565"},f.createElement("rect",{width:24,height:24,fill:"white"})))))}var Ve,De,Re,qe=f.forwardRef(Pe),He=(t.p,["title","titleId"]);function Ue(){return Ue=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Ue.apply(this,arguments)}function Ge(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function $e(n,e){var t=n.title,r=n.titleId,o=Ge(n,He);return f.createElement("svg",Ue({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},o),t?f.createElement("title",{id:r},t):null,Ve||(Ve=f.createElement("path",{d:"M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z",stroke:"#111111",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),De||(De=f.createElement("path",{d:"M15 9L9 15",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Re||(Re=f.createElement("path",{d:"M9 9L15 15",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}var Ke,Je=f.forwardRef($e),Qe=(t.p,t(5639)),Ye=function(){var n=(0,f.useState)(""),e=(0,a.Z)(n,2),t=e[0],r=e[1],o=(0,W.I0)();return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(Me,{children:[(0,Z.jsx)(Ie,{placeholder:"Search",type:"text",name:"filter",value:t,onChange:function(n){r(n.target.value),o((0,Qe.K)(n.target.value))}}),(0,Z.jsx)(We,{type:"button",onClick:function(n){n.preventDefault(),r(""),o((0,Qe.K)(""))},children:t.length>0?(0,Z.jsx)(Je,{}):(0,Z.jsx)(qe,{})})]})})},Xe=s.default.h1(Ke||(Ke=(0,c.Z)(["\n  font-size: 24px;\n  font-family: ",";\n  text-align: center;\n  margin-top: 42px;\n  margin-bottom: 28px;\n  "," {\n    font-size: 48px;\n    margin-top: 90px;\n    margin-bottom: 40px;\n  }\n  "," {\n    margin-top: 60px;\n    margin-bottom: 40px;\n  }\n"])),(function(n){return n.theme.fonts[1]}),(0,u.up)("tablet"),(0,u.up)("pc")),nt=function(n){var e=n.text;return(0,Z.jsx)(Xe,{children:e})},et=t(7689),tt=function(){return(0,Z.jsxs)(l.W,{style:{textAlign:"center",paddingBottom:100},children:[(0,Z.jsx)(nt,{text:"Find your favorite pet"}),(0,Z.jsx)(Ye,{}),(0,Z.jsx)(Ne,{}),(0,Z.jsx)(et.j3,{})]})}},3129:function(n,e,t){var r=t(7424).default,o=t(2791),i=o.useState,l=o.useEffect,a=o.useMemo;e.createUseBreakpoint=function(n){var e=n.theme;return function(n){var t=i(null),o=r(t,2),c=o[0],s=o[1],u=n({theme:e()}),d=a((function(){return"undefined"!==typeof window&&window.matchMedia(u.replace(/^@media\s*/,""))}),[u]);return l((function(){var n=function(n){s(n.matches)};return s(d.matches),d.addEventListener?(d.addEventListener("change",n),function(){d.removeEventListener("change",n)}):(d.addListener(n),function(){d.removeListener(n)})}),[d]),c}}},6299:function(n,e,t){var r=t(4313).useTheme,o=t(3129).createUseBreakpoint;e.G=o({theme:r})}}]);
//# sourceMappingURL=774.bba4a54c.chunk.js.map