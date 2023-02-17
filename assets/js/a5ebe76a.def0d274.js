"use strict";(self.webpackChunkdev_docs=self.webpackChunkdev_docs||[]).push([[630],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>d});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),p=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return t?n.createElement(g,s(s({ref:a},c),{},{components:t})):n.createElement(g,s({ref:a},c))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6120:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=t(7462),r=(t(7294),t(3905));t(8209);const o={slug:"/design-patterns/creational/singleton",title:"Singleton Pattern",sidebar_position:0,tags:["design-patterns"]},s="Singleton",i={unversionedId:"design-patterns/creational/singleton-pattern",id:"design-patterns/creational/singleton-pattern",title:"Singleton Pattern",description:"Defini\xe7\xe3o:",source:"@site/docs/design-patterns/creational/singleton-pattern.md",sourceDirName:"design-patterns/creational",slug:"/design-patterns/creational/singleton",permalink:"/my-notes/design-patterns/creational/singleton",draft:!1,editUrl:"https://github.com/carolpinheiro/my-notes/edit/main/docs/design-patterns/creational/singleton-pattern.md",tags:[{label:"design-patterns",permalink:"/my-notes/tags/design-patterns"}],version:"current",lastUpdatedBy:"Carol Pinheiro",lastUpdatedAt:1672837640,formattedLastUpdatedAt:"Jan 4, 2023",sidebarPosition:0,frontMatter:{slug:"/design-patterns/creational/singleton",title:"Singleton Pattern",sidebar_position:0,tags:["design-patterns"]},sidebar:"docs",previous:{title:"Introdu\xe7\xe3o Cloud Computing",permalink:"/my-notes/AWS/intro/cloud-computing"},next:{title:"Regra dos Hooks",permalink:"/my-notes/react/rule-of-hooks"}},l={},p=[{value:"Principal problema que ele apresenta",id:"principal-problema-que-ele-apresenta",level:2},{value:"Principais problemas que ele se prop\xf5e e resolver",id:"principais-problemas-que-ele-se-prop\xf5e-e-resolver",level:2},{value:"<strong>Garantir que uma classe apenas tenha uma \xfanica inst\xe2ncia</strong>",id:"garantir-que-uma-classe-apenas-tenha-uma-\xfanica-inst\xe2ncia",level:3},{value:"Prov\xe9m um ponto de acesso global para a inst\xe2ncia",id:"prov\xe9m-um-ponto-de-acesso-global-para-a-inst\xe2ncia",level:3},{value:"Observa\xe7\xf5es",id:"observa\xe7\xf5es",level:2},{value:"Links interessantes",id:"links-interessantes",level:2}],c={toc:p};function u(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"singleton"},"Singleton"),(0,r.kt)("p",null,"Defini\xe7\xe3o:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Garantir que uma classe tenha somente uma inst\xe2ncia no programa e fornecer um ponto de acesso global para a mesma.")),(0,r.kt)("h2",{id:"principal-problema-que-ele-apresenta"},"Principal problema que ele apresenta"),(0,r.kt)("p",null,"O singleton acaba ferindo o princ\xedpio da responsabilidade \xfanica, porque algumas pessoas discutem que o fato de ele controlar seu pr\xf3prio ciclo de vida (fora o que j\xe1 fazem por default)."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"principais-problemas-que-ele-se-prop\xf5e-e-resolver"},"Principais problemas que ele se prop\xf5e e resolver"),(0,r.kt)("h3",{id:"garantir-que-uma-classe-apenas-tenha-uma-\xfanica-inst\xe2ncia"},(0,r.kt)("strong",{parentName:"h3"},"Garantir que uma classe apenas tenha uma \xfanica inst\xe2ncia")),(0,r.kt)("p",null,"Ou seja, garantir que o acesso a algum recurso (ex - banco de dados) seja mais controlado, ou seja, ao inv\xe9s de termos v\xe1rias inst\xe2ncias do mesmo objeto, temos apenas um e ele controla a disponibiliza\xe7\xe3o desse recurso."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Isso \xe9 imposs\xedvel de ser realizado se a classe ainda pode ser instanciada atrav\xe9s do ",(0,r.kt)("inlineCode",{parentName:"p"},"constructor"),", por isso sempre deixamos ele como privado nessas situa\xe7\xf5es e criamos um m\xe9todo que cheque se precisamos criar uma inst\xe2ncia ou reutilizar uma j\xe1 existente.")),(0,r.kt)("h3",{id:"prov\xe9m-um-ponto-de-acesso-global-para-a-inst\xe2ncia"},"Prov\xe9m um ponto de acesso global para a inst\xe2ncia"),(0,r.kt)("p",null,"Em qualquer parte do projeto (independentemente do arquivo) essa propriedade deve poder ser acessada."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 Em JS, cada vez que fazemos um import, \xe9 uma esp\xe9cie de singleton pq n\xe3o estamos criando novas inst\xe2ncias, apenas referenciando uma j\xe1 existente.")),(0,r.kt)("p",null,"Ele tamb\xe9m previne que o c\xf3digo possa ser sobrescrito por outra implementa\xe7\xe3o, visto que teremos sempre apenas uma inst\xe2ncia do objeto. Caso queiramos sobrescrever algum comportamento pr\xe9-definido, precisamos fazer com que o singleton espere isso."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"observa\xe7\xf5es"},"Observa\xe7\xf5es"),(0,r.kt)("p",null,"Com esse padr\xe3o, temos algo chamado ",(0,r.kt)("inlineCode",{parentName:"p"},"lazy initialization")," que basicamente \xe9 criar o objeto/inst\xe2ncia apenas quando ele \xe9 necess\xe1rio e n\xe3o quando o programa inicia."),(0,r.kt)("p",null,"\xc9 mais dif\xedcil usar esse padr\xe3o em linguagens que permitem multi threads, muito porque se torna complexo evitar que sejam criadas inst\xe2ncias em cada thread."),(0,r.kt)("p",null,"Uma das recomenda\xe7\xf5es de quando usar esse padr\xe3o \xe9 tamb\xe9m quando voc\xea precisa usar uma vari\xe1vel de ambiente em v\xe1rias partes importante do programa, porque elas podem ser sobrescritas mas o singleton n\xe3o."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"links-interessantes"},"Links interessantes"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://refactoring.guru/design-patterns/singleton"},"[Refactoring Guru] Singleton")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=x9h8MgAvi_I&list=PLbIBj8vQhvm0VY5YrMrafWaQY2EnJ3j8H&index=4"},"[Ot\xe1vio Miranda] ","*",(0,r.kt)("strong",{parentName:"a"},"*","Singleton Teoria - Padr\xf5es de Projeto - Parte 4/45","*","*"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/137975/what-are-drawbacks-or-disadvantages-of-singleton-pattern"},"[StackOverflow] Discuss\xe3o sobre como singleton pode ferir o princ\xedpio da responsabilidade \xfanica")))}u.isMDXComponent=!0},8209:(e,a,t)=>{t(7294)}}]);