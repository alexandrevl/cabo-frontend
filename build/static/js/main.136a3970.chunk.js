(this.webpackJsonpcabo=this.webpackJsonpcabo||[]).push([[0],{114:function(e,t){},172:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),c=a.n(r),m=(a(84),a(3)),i=(a(85),a(11),a(67)),s=a.n(i),o=a(177),u=a(174),E=a(175),d=a(176),b=l.a.createContext(),g=l.a.createContext(),f=l.a.createContext(),v=l.a.createContext(),h=a(68),x=a.n(h),j=a(23),O=a(39),p=a(40),w=a(180),y=a(14);function N(){var e=Object(n.useContext)(g),t=Object(n.useContext)(b),a=Object(n.useState)(!1),r=Object(m.a)(a,2),c=r[0],i=r[1],s=Object(n.useState)(!1),o=Object(m.a)(s,2),f=o[0],v=o[1],h=Object(n.useState)(""),N=Object(m.a)(h,2),S=N[0],C=N[1],A=Object(n.useState)(""),M=Object(m.a)(A,2),_=M[0],I=M[1];t.on("superChat",(function(e){var t=e.name,a=e.team,n=e.value;1===a&&(C("".concat(t,": + ").concat(n)),i(!0),setTimeout((function(){i(!1)}),3e3)),2===a&&(I("".concat(t,": + ").concat(n)),v(!0),setTimeout((function(){v(!1)}),3e3))}));var k=Object(n.useState)(3e4),P=Object(m.a)(k,1)[0];return e?l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement(u.a,{fluid:!0},l.a.createElement(E.a,null,l.a.createElement(d.a,{xs:!0,lg:"5"},l.a.createElement(w.a,{style:{height:"30px"},max:e.team1.MAX_LIFE},l.a.createElement(w.a,{variant:"danger",max:e.team1.MAX_LIFE,now:e.team1.MAX_LIFE-e.team1.life,key:1}),l.a.createElement(w.a,{variant:"warning",animated:!0,max:e.team1.MAX_LIFE,now:e.team1.life,key:2}))),l.a.createElement(d.a,{xs:!0,lg:"2"},l.a.createElement("img",{src:x.a,width:"45vw",alt:"VS"})),l.a.createElement(d.a,{xs:!0,lg:"5"},l.a.createElement(w.a,{style:{height:"30px"},max:e.team2.MAX_LIFE},l.a.createElement(w.a,{variant:"warning",animated:!0,now:e.team2.life,max:e.team2.MAX_LIFE,key:1}),l.a.createElement(w.a,{variant:"danger",max:e.team2.MAX_LIFE,now:e.team2.MAX_LIFE-e.team2.life,key:2})))),l.a.createElement(E.a,null,l.a.createElement(d.a,{xs:!0,lg:"3"},l.a.createElement(w.a,{style:{height:"8px"},max:e.team1.MAX_ENERGY},l.a.createElement(w.a,{animated:!0,max:e.team1.MAX_ENERGY,now:e.team1.status.energy,key:2}))),l.a.createElement(d.a,{xs:!0,lg:"6"}),l.a.createElement(d.a,{xs:!0,lg:"3"},l.a.createElement(w.a,{style:{height:"8px",direction:"rtl"},max:e.team2.MAX_ENERGY},l.a.createElement(w.a,{animated:!0,max:e.team2.MAX_ENERGY,now:e.team2.status.energy,style:{direction:"rtl"},key:1})))),l.a.createElement(E.a,null,l.a.createElement(d.a,{xs:!0,lg:"2",className:"text-left"},l.a.createElement("h3",{style:{color:"#995cf1"}},e.team1.name," (",e.team1.qnt,")")),l.a.createElement(d.a,{xs:!0,lg:"3",className:"text-right"},function(){for(var t=[],a=0,n=0;n<e.team1.roundsWon;n++)t.push(l.a.createElement(j.a,{icon:O.a,color:"lime"})),++a;for(var r=a;r<e.winRounds;r++)t.push(l.a.createElement(j.a,{icon:p.a,color:"lime"}));return t}()),l.a.createElement(d.a,{xs:!0,lg:"2",className:"text-center"},l.a.createElement("h4",null,e.winner?"FINAL":e.round>0?"Round "+e.round:0===e.round?"":void 0)),l.a.createElement(d.a,{xs:!0,lg:"3",className:"text-left"},function(){for(var t=[],a=0,n=0;n<e.team2.roundsWon;n++)t.push(l.a.createElement(j.a,{icon:O.a,color:"lime"})),++a;for(var r=a;r<e.winRounds;r++)t.push(l.a.createElement(j.a,{icon:p.a,color:"lime"}));return t}()),l.a.createElement(d.a,{xs:!0,lg:"2",className:"text-right"},l.a.createElement("h3",{style:{color:"#f0555b"}},e.team2.name," (",e.team2.qnt,")"))),l.a.createElement(E.a,null,l.a.createElement(d.a,{xs:!0,lg:"2",className:"text-left"},l.a.createElement(y.Animated,{animationOut:"zoomOut",animationOutDuration:P,isVisible:c},l.a.createElement("h4",{style:{color:"yellow"}},S))),l.a.createElement(d.a,{xs:!0,lg:"3",className:"text-right"}),l.a.createElement(d.a,{xs:!0,lg:"2",className:"text-center"}),l.a.createElement(d.a,{xs:!0,lg:"3",className:"text-left"}),l.a.createElement(d.a,{xs:!0,lg:"2",className:"text-right"},l.a.createElement(y.Animated,{animationOut:"zoomOut",animationOutDuration:P,isVisible:f},l.a.createElement("h4",{style:{color:"yellow"}},_)))))):"Alow"}var S=a(178),C=a(70),A=a.n(C);function M(){var e=Object(n.useContext)(b),t=Object(n.useState)(!1),a=Object(m.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(!1),s=Object(m.a)(i,2),o=s[0],u=s[1];return Object(n.useEffect)((function(){e.on("endGame",(function(e){console.log("EndGame",e),u(e.name),c(!0)}))})),l.a.createElement("div",null,l.a.createElement(S.a,{show:r,onHide:function(){c(!1)},animation:!1,size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0},l.a.createElement(S.a.Header,{closeButton:!0},l.a.createElement(S.a.Title,{id:"contained-modal-title-vcenter"},l.a.createElement("div",{className:"text-center"},"Time Vencedor"))),l.a.createElement(S.a.Body,null,l.a.createElement("div",{className:"text-center"},l.a.createElement("img",{src:A.a,width:"400vw",alt:"VS"}),l.a.createElement("br",null),l.a.createElement("h1",null,o))),l.a.createElement(S.a.Footer,null)))}var _=a(179);function I(){var e=Object(n.useContext)(g),t=Object(n.useContext)(b),a=Object(n.useState)(!1),r=Object(m.a)(a,2),c=r[0],i=r[1],s=Object(n.useState)(!1),u=Object(m.a)(s,2),E=u[0],d=u[1];function f(){t.emit("nextBattle")}return Object(n.useEffect)((function(){e.roundDisabled?i(!0):i(!1),e.waiting?d(!0):d(!1)}),[e.roundDisabled,e.waiting]),l.a.createElement("div",null,c?E?l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{animation:"border",variant:"white",style:{width:"3rem",height:"3rem"}},l.a.createElement("span",{className:"sr-only"},"Loading...")),l.a.createElement("h3",null,"Configurando sistema")):"":l.a.createElement(_.a,{variant:"success",size:"lg",onClick:f,disabled:c},"Iniciar round ",e.round+1))}function k(){var e=Object(n.useContext)(g),t=Object(n.useState)("Coletar jogadores"),a=Object(m.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)("info"),s=Object(m.a)(i,2),o=s[0],u=s[1],E=Object(n.useContext)(b);return l.a.createElement("div",null,l.a.createElement(_.a,{variant:o,size:"lg",onClick:function(){e.gettingPlayers?E.emit("stopGetPlayers"):(E.emit("getPlayers"),u("danger"),c("Parar de coletar jogadores"))}},r))}var P={"\ud83d\udc7d":"alien.svg","\ud83d\udc51":"crown.svg","\ud83d\udc7b":"ghost.svg","\ud83c\udf47":"grapes.svg","\ud83c\udf54":"hamburguer.svg","\ud83d\udc8b":"kiss.svg","\ud83d\udc4c":"ok_hand.svg","\ud83d\udca9":"pile_of_poo.svg","\ud83c\udf4d":"pineapple.svg","\ud83c\udf57":"poutlry_leg.svg","\u2764\ufe0f":"red_heart.svg","\ud83d\udc8d":"ring.svg","\ud83e\udd16":"robot_face.svg","\ud83d\udc80":"skull.svg","\ud83d\ude0d":"smiling_face_with_heart_eyes.svg","\ud83d\ude0e":"smiling_face_with_sunglasses.svg","\ud83c\udf53":"strawberry.svg","\ud83d\udc4d":"thumbs_up.svg","\ud83c\udf49":"watermelon.svg"};function D(e){function t(e){return"img/emojis/"+P[e]}return e.battle.isPlay?l.a.createElement("div",null,l.a.createElement(u.a,{fluid:!0},l.a.createElement(E.a,null,l.a.createElement(d.a,null,l.a.createElement("img",{src:t(e.powers.attack.displayEmoji),width:"45vw",alt:"img1"})),l.a.createElement(d.a,{className:"text-center align-middle"},l.a.createElement("h3",null,"Ataque"))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(E.a,null,l.a.createElement(d.a,null,l.a.createElement("img",{src:t(e.powers.energy.displayEmoji),width:"45vw",alt:"img1"})),l.a.createElement(d.a,{className:"text-center align-middle"},l.a.createElement("h3",null,"Mana"))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(E.a,null,l.a.createElement(d.a,{className:"text-center align-middle"},l.a.createElement("img",{src:t(e.powers.defense.displayEmoji),width:"45vw",alt:"img1"})),l.a.createElement(d.a,{className:"text-center align-middle"},l.a.createElement("h3",null,"Defesa"))))):l.a.createElement("div",null)}var L=a(72),z=a.n(L),F=a(73),V=a.n(F),X=a(74),R=a.n(X),T=a(75),q=a.n(T);function G(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(!0),s=Object(m.a)(i,2),o=s[0],b=s[1],g=Object(n.useState)(),f=Object(m.a)(g,2),v=f[0],h=f[1],x=Object(n.useState)(),j=Object(m.a)(x,2),O=j[0],p=j[1],w=Object(n.useState)("zoomInUp"),N=Object(m.a)(w,2),S=N[0],C=N[1],A=Object(n.useState)(3e4),M=Object(m.a)(A,1)[0];return Object(n.useEffect)((function(){if(o!==e.battle.id){c(!0),b(e.battle.id),1===e.team.id?(h(l.a.createElement("img",{src:V.a,width:"450vw",alt:"Ataque"})),p(l.a.createElement("img",{src:q.a,width:"450vw",alt:"Defesa"}))):(h(l.a.createElement("img",{src:z.a,width:"450vw",alt:"Ataque"})),p(l.a.createElement("img",{src:R.a,width:"450vw",alt:"Defesa"})));var t=["zoomInDown","zoomInUp","backInDown","backInUp","flip","jackInTheBox"];C(t[(a=0,n=t.length-1,Math.ceil(a)===Math.floor(n)?a:(a=Math.ceil(a),n=Math.floor(n),Math.floor(Math.random()*(n-a+1))+a))])}var a,n;setTimeout((function(){c(!1)}),3e3)}),[o,e]),e.battle.isPlay?l.a.createElement("div",null,l.a.createElement(u.a,{fuild:!0},l.a.createElement(E.a,null,l.a.createElement(d.a,null,l.a.createElement(y.Animated,{animationOut:"zoomOut",animationIn:S,animationInDuration:800,animationOutDuration:M,isVisible:r},l.a.createElement("h1",null,v,l.a.createElement("br",null),e.team.status.hitPoints)))),l.a.createElement(E.a,null,l.a.createElement(d.a,null,l.a.createElement(y.Animated,{animationOut:"zoomOut",animationIn:S,animationInDuration:800,animationOutDuration:M,isVisible:r},l.a.createElement("h1",null,O,l.a.createElement("br",null),Math.floor(e.team.powers.defense.value/2))))),l.a.createElement(E.a,null,l.a.createElement(d.a,null)))):l.a.createElement("div",null)}var B=a(76),U=a.n(B);function W(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){var t=null,a=["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b"];e.team&&(console.log(e.team),t=e.team.map((function(e){var t,n,r=a[(t=0,n=a.length-1,Math.ceil(t)===Math.floor(n)?t:(t=Math.ceil(t),n=Math.floor(n),Math.floor(Math.random()*(n-t+1))+t))],c=20;return e.isChatSponsor&&(c=30,r="yellow"),l.a.createElement("span",{style:{color:r,fontSize:c,height:"100%"}},e.name,","," ")}))),console.log(t),c(t)}),[e,e.team]),l.a.createElement(u.a,null,l.a.createElement(E.a,null,l.a.createElement(d.a,null,l.a.createElement("b",null,r))))}function Y(){var e=Object(n.useRef)(),t=Object(n.useContext)(b),a=Object(n.useContext)(g),r=Object(n.useState)(!1),c=Object(m.a)(r,2),i=c[0],s=c[1],o=Object(n.useState)(!1),h=Object(m.a)(o,2),x=h[0],j=h[1],O=Object(n.useState)(!1),p=Object(m.a)(O,2),w=p[0],N=p[1],S=Object(n.useContext)(f),C=Object(n.useContext)(v),A=new Audio("./mp3/ko.mp3");return e.current=!1,t.on("result",(function(e){j(e)})),Object(n.useEffect)((function(){s(!1),a.round>0&&!a.battle.isPlay&&!e.current?(e.current=!0,N(!0),setTimeout((function(){A.volume=.5,A.play()}),1500)):e.current=!1}),[a.round,a.battle.isPlay]),a.battle.isPlay?l.a.createElement("div",null,l.a.createElement(u.a,{fluid:!0,className:"h-100"},l.a.createElement(E.a,{className:"justify-content-md-center"},l.a.createElement(d.a,{xs:!0,lg:"1",className:"text-center align-middle"},l.a.createElement(D,{powers:a.team1.powers,battle:a.battle})),l.a.createElement(d.a,{xs:!0,lg:"5",className:"text-center align-middle"},l.a.createElement(G,{team:a.team1,battle:a.battle})),l.a.createElement(d.a,{xs:!0,lg:"5",className:"text-center align-middle"},l.a.createElement(G,{team:a.team2,battle:a.battle})),l.a.createElement(d.a,{xs:!0,lg:"1",className:"text-center align-middle"},l.a.createElement(D,{powers:a.team2.powers,battle:a.battle})))),l.a.createElement(M,{gameSettings:a})):a.teamsChoosed?l.a.createElement("div",null,l.a.createElement(u.a,{fluid:!0,className:"h-100"},l.a.createElement(E.a,{className:"justify-content-md-center h-100"},l.a.createElement(d.a,{xs:!0,lg:"5",className:"text-center align-middle"},!w&&l.a.createElement(W,{team:S})),l.a.createElement(d.a,{xs:!0,lg:"2",className:"text-center align-middle"},a.round>0?(setTimeout((function(){s(!0),N(!1)}),5e3),l.a.createElement(l.a.Fragment,null,l.a.createElement(y.Animated,{animationIn:"zoomInUp",animationInDuration:3e3,isVisible:!0},l.a.createElement("img",{src:U.a,width:"100%",alt:"KO"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h1",{className:"display-2"},x.name)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),i?l.a.createElement(I,null):"")):l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(I,null))),l.a.createElement(d.a,{xs:!0,lg:"5",className:"text-center align-middle"},!w&&l.a.createElement(W,{team:C})))),l.a.createElement(M,{gameSettings:a})):l.a.createElement("div",null,l.a.createElement(u.a,{fluid:!0,className:"h-100"},l.a.createElement(E.a,{className:"justify-content-md-center h-100"},l.a.createElement(d.a,{xs:!0,lg:"5",className:"text-center align-middle"},l.a.createElement(W,{team:S})),l.a.createElement(d.a,{xs:!0,lg:"2",className:"text-center align-middle"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(k,null)),l.a.createElement(d.a,{xs:!0,lg:"5",className:"text-center align-middle"},l.a.createElement(W,{team:C})))))}function H(){return Object(n.useContext)(g).idLive.length<1?"...":l.a.createElement(Y,null)}var J=a(77),K=a.n(J);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement((function(){var e=Object(n.useState)(null),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),i=Object(m.a)(c,2),h=i[0],x=i[1],j=Object(n.useState)(null),O=Object(m.a)(j,2),p=O[0],w=O[1],y=Object(n.useState)(null),S=Object(m.a)(y,2),C=S[0],A=S[1],M=Object(n.useState)(!1),_=Object(m.a)(M,2),I=_[0],k=_[1],P=Object(n.useState)(!0),D=Object(m.a)(P,2),L=D[0],z=D[1];return Object(n.useEffect)((function(){var e=window.location.pathname.split("/")[1],t="https://localhost:21266?idLive="+e;window.location.hostname.includes("mrguinas")&&(t="https://multistreamer.xyz:21266?idLive="+e),console.log(t);var a=s()(t);r(a),a.on("gameSettings",(function(e){z(!1),console.log(e),x(e),k(!0)})),a.on("youtubeOff",(function(){z(!0),k(!1)})),a.on("team1",(function(e){w(e)})),a.on("team2",(function(e){A(e)}))}),[]),I&&!L?h.winner?l.a.createElement("div",{className:"App"},l.a.createElement(g.Provider,{value:h},l.a.createElement(f.Provider,{value:p},l.a.createElement(v.Provider,{value:C},l.a.createElement(b.Provider,{value:a},l.a.createElement(N,{gameSettings:h}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(u.a,{fluid:!0},l.a.createElement(E.a,{className:"justify-content-md-center"},l.a.createElement(d.a,null,l.a.createElement("img",{src:K.a,width:"600vw",alt:"VS"}))),l.a.createElement("br",null),l.a.createElement(E.a,{className:"justify-content-md-center"},l.a.createElement(d.a,null,l.a.createElement("h1",null,l.a.createElement("b",null,function(){return"O "+this.state.gameSettings.winner+" VENCEU"}())))))))))):l.a.createElement("div",{className:"App"},l.a.createElement(g.Provider,{value:h},l.a.createElement(f.Provider,{value:p},l.a.createElement(v.Provider,{value:C},l.a.createElement(b.Provider,{value:a},l.a.createElement(N,{gameSettings:h}),l.a.createElement(u.a,{fluid:!0,className:"h-100"},l.a.createElement(E.a,{className:"justify-content-md-center"},l.a.createElement(d.a,null)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(E.a,{className:"justify-content-md-center"},l.a.createElement(d.a,null,l.a.createElement(H,null))))))))):l.a.createElement(u.a,{fluid:!0,className:"align-middle h-100"},l.a.createElement(E.a,{className:"justify-content-md-center align-middle h-100"},l.a.createElement(d.a,{className:"text-center align-middle h-100"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),L?"Uso indevido":l.a.createElement(o.a,{animation:"border",variant:"dark",style:{width:"8rem",height:"8rem"}},l.a.createElement("span",{className:"sr-only"},"Loading...")))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},68:function(e,t,a){e.exports=a.p+"static/media/vs.2433496f.png"},70:function(e,t,a){e.exports=a.p+"static/media/trophy.d9db92ab.gif"},72:function(e,t,a){e.exports=a.p+"static/media/CaboAtaquePragas.23937534.png"},73:function(e,t,a){e.exports=a.p+"static/media/CaboAtaqueVermes.b79e156d.png"},74:function(e,t,a){e.exports=a.p+"static/media/CaboDefesaVermes.6f164161.png"},75:function(e,t,a){e.exports=a.p+"static/media/CaboDefesaPragas.dada4542.png"},76:function(e,t,a){e.exports=a.p+"static/media/ko.6aedb4f5.png"},77:function(e,t,a){e.exports=a.p+"static/media/victory.59d065af.gif"},79:function(e,t,a){e.exports=a(172)},84:function(e,t,a){},85:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.136a3970.chunk.js.map