"use strict";(self.webpackChunkpet_support_app=self.webpackChunkpet_support_app||[]).push([[252],{8430:function(n,e,t){t.d(e,{$:function(){return o}});var i,r=t(168),o=t(4313).default.div(i||(i=(0,r.Z)(["\n  margin-top: 60px;\n  margin-bottom: 100px;\n  border: 16px solid peachpuff;\n  border-top: 16px orange solid;\n  border-radius: 50%;\n  height: 120px;\n  width: 120px;\n  animation: spin 2s linear infinite;\n\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"])))},7252:function(n,e,t){t.r(e),t.d(e,{default:function(){return hn}});var i,r,o,l,a,p,d,s,c,h,u,x,f,g,m,b,w,v,j,y=t(9439),k=t(2791),O=t(9434),Z=t(1087),C=t(168),L=t(4313),E=L.default.li(i||(i=(0,C.Z)(["\n  width: 100%;\n  border: 1px solid $border-color;\n  box-sizing: border-box;\n  margin-bottom: 40px;\n  :last-child {\n    margin-bottom: 0px;\n  }\n  @media screen and (min-width: 768px) {\n    width: 336px;\n    margin-bottom: 60px;\n    margin-right: 30px;\n    width: calc(100% / 2 - 30px);\n    :nth-child(2n) {\n      margin-right: 0px;\n    }\n  }\n  @media screen and (min-width: 1280px) {\n    width: 395px;\n    width: calc(100% / 3 - 30px);\n    :nth-child(2n) {\n      margin-right: 30px;\n    }\n    :nth-child(3n) {\n      margin-right: 0px;\n    }\n  }\n"]))),_=L.default.div(r||(r=(0,C.Z)(["\n  width: 200px;\n  height: 4px;\n  background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);\n  border-radius: 40px;\n  margin-bottom: 4px;\n  @media screen and (min-width: 768px) {\n    width: 280px;\n    height: 8px;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 340px;\n  }\n"]))),z=L.default.h3(o||(o=(0,C.Z)(["\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 33px;\n  letter-spacing: -0.01em;\n  color: #111111;\n  margin-bottom: 16px;\n  height: 66px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]))),P=L.default.p(l||(l=(0,C.Z)(["\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 22px;\n  color: #111321;\n  margin-bottom: 20px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  // white-space: normal;\n  display: -webkit-box;\n  -webkit-line-clamp: 7;\n  -webkit-box-orient: vertical;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 40px;\n    -webkit-line-clamp: 6;\n  }\n  @media screen and (min-width: 1280px) {\n    margin-bottom: 40px;\n    -webkit-line-clamp: 5;\n  }\n"]))),S=L.default.div(a||(a=(0,C.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),I=L.default.p(p||(p=(0,C.Z)(["\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 22px;\n  color: rgba(17, 17, 17, 0.6);\n"]))),M=L.default.a(d||(d=(0,C.Z)(["\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 22px;\n  text-align: right;\n  text-decoration-line: underline;\n  color: #f59256;\n"]))),W=t(184),q=function(n){var e=n.title,t=n.url,i=n.description,r=n.date;return(0,W.jsxs)(E,{children:[(0,W.jsx)(_,{}),(0,W.jsx)(z,{children:e}),(0,W.jsx)(P,{children:i}),(0,W.jsxs)(S,{children:[(0,W.jsx)(I,{children:r}),(0,W.jsx)(M,{href:t,target:"_blank",children:"Read more"})]})]})},D=L.default.ul(s||(s=(0,C.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  height: 100%;\n  margin-top: 40px;\n  margin-bottom: 100px;\n  @media screen and (min-width: 768px) {\n    margin-top: 60px;\n    margin-right: -20px;\n  }\n"]))),R=function(n){var e=n.news;return(0,W.jsx)(D,{children:e.length?e.sort((function(n,e){return n.date>e.date?-1:0})).map((function(n){var e=n._id,t=n.title,i=n.url,r=n.description,o=n.date;return(0,W.jsx)(q,{title:t,url:i,description:r,date:new Date(o).toLocaleDateString().split(".").join("/")},e)})):(0,W.jsx)("b",{children:"There is no news with this title"})})},$=t(9776),B=(0,L.createGlobalStyle)(c||(c=(0,C.Z)(["\nul, button {\n  margin: 0;\n  padding: 0;\n}\nul {\n  list-style: none;\n}\nlabel {\n  border: 1px solid transparent;\n}\ninput {\n  border: 1px solid transparent;\n}\n\ninput:hover, input:focus {\n  outline: none;\n }\n"]))),T=L.default.div(h||(h=(0,C.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  padding-top: 42px;\n  background-color: #fdf7f2;\n  // background-color: #F59256;\n  // padding-left: 20px;\n  // padding-right: 20px;\n  @media screen and (min-width: 768px) {\n    padding-top: 90px;\n  } ;\n"]))),F=L.default.h1(u||(u=(0,C.Z)(["\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 33px;\n  text-align: center;\n  color: #111111;\n  margin-bottom: 28px;\n  @media screen and (min-width: 768px) {\n    font-size: 48px;\n    line-height: 66px;\n    margin-bottom: 40px;\n  } ;\n"]))),G=L.default.label(x||(x=(0,C.Z)(["\n  position: relative;\n  width: 100%;\n  max-width: 608px;\n  background: #ffffff;\n  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);\n  border-radius: 20px;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 22px;\n  display: flex;\n  align-items: center;\n  letter-spacing: 0.04em;\n  padding: 9px 12px;\n  color: #535353;\n  :hover,\n  :focus {\n    border: 1px solid rgba(245, 146, 86, 0.5);\n  }\n"]))),H=L.default.input(f||(f=(0,C.Z)(["\n  width: 95%;\n"]))),N=L.default.div(g||(g=(0,C.Z)(["\n  position: absolute;\n  top: 8px;\n  right: 10px;\n  cursor: pointer;\n"]))),V=L.default.button(m||(m=(0,C.Z)(["\n  position: absolute;\n  top: 8px;\n  right: 10px;\n  // border-radius: 32px;\n  border: none;\n  // outline: none;\n  background-color: transparent;\n  cursor: pointer;\n  // fill: black;\n  // :hover {\n  //   fill: orange;\n  // }\n"]))),A=L.default.b(b||(b=(0,C.Z)(["\nmargin-top: 40px;\n@media screen and (min-width: 768px) {\n  80px;\n}"]))),J=t(8430),K=function(n){return n.news.items},Q=function(n){return n.news.isLoading},U=function(n){return n.news.error},X=["title","titleId"];function Y(){return Y=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Y.apply(this,arguments)}function nn(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},o=Object.keys(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}function en(n,e){var t=n.title,i=n.titleId,r=nn(n,X);return k.createElement("svg",Y({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":i},r),t?k.createElement("title",{id:i},t):null,w||(w=k.createElement("path",{d:"M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z",stroke:"#111111",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),v||(v=k.createElement("path",{d:"M15 9L9 15",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),j||(j=k.createElement("path",{d:"M9 9L15 15",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}var tn,rn,on=k.forwardRef(en),ln=(t.p,["title","titleId"]);function an(){return an=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},an.apply(this,arguments)}function pn(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},o=Object.keys(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}function dn(n,e){var t=n.title,i=n.titleId,r=pn(n,ln);return k.createElement("svg",an({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":i},r),t?k.createElement("title",{id:i},t):null,tn||(tn=k.createElement("g",{clipPath:"url(#clip0_2436_508)"},k.createElement("path",{d:"M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z",fill:"#111111"}))),rn||(rn=k.createElement("defs",null,k.createElement("clipPath",{id:"clip0_2436_508"},k.createElement("rect",{width:24,height:24,fill:"white"})))))}var sn=k.forwardRef(dn),cn=(t.p,t(8861)),hn=function(){var n=(0,O.I0)(),e=(0,Z.lr)(),t=(0,y.Z)(e,2),i=t[0],r=t[1],o=(0,O.v9)(U),l=(0,O.v9)(Q),a=(0,O.v9)(K),p=i.get("query")||"",d=a.length&&a.filter((function(n){return n.title.toLowerCase().includes(p.toLowerCase())}));(0,k.useEffect)((function(){n((0,$.a)())}),[n]);return(0,W.jsx)(cn.W,{children:(0,W.jsxs)(T,{children:[(0,W.jsx)(B,{}),(0,W.jsx)(F,{children:"News"}),(0,W.jsxs)(G,{children:[(0,W.jsx)(H,{value:p,name:"search",placeholder:"Search",type:"text",onChange:function(n){r({query:n.target.value})}}),p?(0,W.jsx)(V,{type:"submit",onClick:function(n){n.preventDefault(),r({query:""})},children:(0,W.jsx)(on,{})}):(0,W.jsx)(N,{children:(0,W.jsx)(sn,{})})]}),l&&!o&&(0,W.jsx)(J.$,{}),!d&&!l&&(0,W.jsx)(A,{children:"Sorry, there is no news at this moment. Try again later."}),!l&&d&&(0,W.jsx)(R,{news:d})]})})}}}]);
//# sourceMappingURL=252.fb069aa0.chunk.js.map