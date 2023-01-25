---
slug: /react/useId
title: UseId Hook
sidebar_position: 0
tags:
  - react
  - react hooks
  - frontend
---

# UseId

Alguns atributos de acessibilidade (como a propriedade htmlFor em labels), precisam possuir ids únicos para serem referenciados e assim auxiliar leitores de tela a fornecerem as informações corretas.

A ideia do hook useId é gerar esse id para o componente e independentemente de quantas vezes aquele componente seja reutilizado na página, ele se mantém único. Tudo isso se deve ao fato que o React consegue ter a informação de quantas vezes aquele componente foi renderizado.

## Observações

Evitar utilizar ele como keys, pois o React indica que isso deve ser baseado totalmente nos seus dados.

## Referências

[The Joy of React](https://courses.joshwcomeau.com/)

[React Beta Docs](https://beta.reactjs.org/reference/react/useId)
