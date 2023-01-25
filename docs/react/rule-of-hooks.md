---
slug: /react/rule-of-hooks
title: Regra dos Hooks
sidebar_position: 0
tags:
  - react
  - frontend
---

# Rules of Hooks

Com a criação dos Hooks para o React, foram criadas juntas algumas regras que são necessárias para que a lib consiga se comportar de maneira consistente. Entre elas estão:

1. Apenas utilizar hooks dentro de funções React
2. Sempre devemos chamar nossos hooks no topo do componente, e devemos evitar que a utilização deles seja condicional.

Em resumo, o React utiliza a ordem de renderização para identificar os Hooks, e assim (por exemplo), entender qual useState você quer alterar o valor quando solicita isso dentro do código ao apertar um botão.

Sendo assim, se por exemplo tornamos condicional a utilização de um hook, isso cria um problema que podemos destrinchar no exemplo abaixo:

```
if(condicao) {
     const [a, setA] = React.useState(2)
}
const [b, setB] = React.useState(4)
```

Imaginemos que em uma renderização, a condição do if resulta em um valor `truthy` e isso faz com que o useState seja executado. Contudo em outra renderização, o valor do if se torna `falsy` e por isso a não pode ser lido.

Isso gera um problema enorme, porque como o react se baseia na ordem dos hooks, ao alterarmos essa ordem na renderização ele pode acabar interpretando que o valor 4 (que inferimos a constante `b`) na verdade é para a constante `a` (que era o primeiro hook anteriormente).

Por isso, devemos sempre evitar envolver em condicionais os hooks.

## Referências

[React Docs](https://reactjs.org/docs/hooks-rules.html)

[The joy of react](https://courses.joshwcomeau.com/joy-of-react/03-hooks/02-rules-of-hooks)
