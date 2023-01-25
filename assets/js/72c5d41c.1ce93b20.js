"use strict";(self.webpackChunkdev_docs=self.webpackChunkdev_docs||[]).push([[706],{3905:(e,o,t)=>{t.d(o,{Zo:()=>p,kt:()=>m});var r=t(7294);function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function n(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?n(Object(t),!0).forEach((function(o){a(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,r,a=function(e,o){if(null==e)return{};var t,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],o.indexOf(t)>=0||(a[t]=e[t]);return a}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var o=r.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):s(s({},o),e)),t},p=function(e){var o=c(e.components);return r.createElement(l.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},d=r.forwardRef((function(e,o){var t=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||n;return t?r.createElement(f,s(s({ref:o},p),{},{components:t})):r.createElement(f,s({ref:o},p))}));function m(e,o){var t=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var n=t.length,s=new Array(n);s[0]=d;var i={};for(var l in o)hasOwnProperty.call(o,l)&&(i[l]=o[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<n;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},507:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));t(8209);const n={slug:"/react/rule-of-hooks",title:"Regra dos Hooks",sidebar_position:0,tags:["react","frontend"]},s="Rules of Hooks",i={unversionedId:"react/rule-of-hooks",id:"react/rule-of-hooks",title:"Regra dos Hooks",description:"Com a cria\xe7\xe3o dos Hooks para o React, foram criadas juntas algumas regras que s\xe3o necess\xe1rias para que a lib consiga se comportar de maneira consistente. Entre elas est\xe3o:",source:"@site/docs/react/rule-of-hooks.md",sourceDirName:"react",slug:"/react/rule-of-hooks",permalink:"/my-notes/react/rule-of-hooks",draft:!1,editUrl:"https://github.com/carolpinheiro/my-notes/edit/main/docs/react/rule-of-hooks.md",tags:[{label:"react",permalink:"/my-notes/tags/react"},{label:"frontend",permalink:"/my-notes/tags/frontend"}],version:"current",lastUpdatedBy:"Carol Pinheiro",lastUpdatedAt:1674687503,formattedLastUpdatedAt:"Jan 25, 2023",sidebarPosition:0,frontMatter:{slug:"/react/rule-of-hooks",title:"Regra dos Hooks",sidebar_position:0,tags:["react","frontend"]},sidebar:"docs",previous:{title:"Singleton Pattern",permalink:"/my-notes/design-patterns/creational/singleton"},next:{title:"UseId Hook",permalink:"/my-notes/react/useId"}},l={},c=[{value:"Refer\xeancias",id:"refer\xeancias",level:2}],p={toc:c};function u(e){let{components:o,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rules-of-hooks"},"Rules of Hooks"),(0,a.kt)("p",null,"Com a cria\xe7\xe3o dos Hooks para o React, foram criadas juntas algumas regras que s\xe3o necess\xe1rias para que a lib consiga se comportar de maneira consistente. Entre elas est\xe3o:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Apenas utilizar hooks dentro de fun\xe7\xf5es React"),(0,a.kt)("li",{parentName:"ol"},"Sempre devemos chamar nossos hooks no topo do componente, e devemos evitar que a utiliza\xe7\xe3o deles seja condicional.")),(0,a.kt)("p",null,"Em resumo, o React utiliza a ordem de renderiza\xe7\xe3o para identificar os Hooks, e assim (por exemplo), entender qual useState voc\xea quer alterar o valor quando solicita isso dentro do c\xf3digo ao apertar um bot\xe3o."),(0,a.kt)("p",null,"Sendo assim, se por exemplo tornamos condicional a utiliza\xe7\xe3o de um hook, isso cria um problema que podemos destrinchar no exemplo abaixo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"if(condicao) {\n     const [a, setA] = React.useState(2)\n}\nconst [b, setB] = React.useState(4)\n")),(0,a.kt)("p",null,"Imaginemos que em uma renderiza\xe7\xe3o, a condi\xe7\xe3o do if resulta em um valor ",(0,a.kt)("inlineCode",{parentName:"p"},"truthy")," e isso faz com que o useState seja executado. Contudo em outra renderiza\xe7\xe3o, o valor do if se torna ",(0,a.kt)("inlineCode",{parentName:"p"},"falsy")," e por isso a n\xe3o pode ser lido."),(0,a.kt)("p",null,"Isso gera um problema enorme, porque como o react se baseia na ordem dos hooks, ao alterarmos essa ordem na renderiza\xe7\xe3o ele pode acabar interpretando que o valor 4 (que inferimos a constante ",(0,a.kt)("inlineCode",{parentName:"p"},"b"),") na verdade \xe9 para a constante ",(0,a.kt)("inlineCode",{parentName:"p"},"a")," (que era o primeiro hook anteriormente)."),(0,a.kt)("p",null,"Por isso, devemos sempre evitar envolver em condicionais os hooks."),(0,a.kt)("h2",{id:"refer\xeancias"},"Refer\xeancias"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-rules.html"},"React Docs")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://courses.joshwcomeau.com/joy-of-react/03-hooks/02-rules-of-hooks"},"The joy of react")))}u.isMDXComponent=!0},8209:(e,o,t)=>{t(7294)}}]);