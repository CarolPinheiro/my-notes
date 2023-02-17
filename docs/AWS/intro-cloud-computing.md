---
slug: /AWS/intro/cloud-computing
title: Introdução Cloud Computing
sidebar_position: 0
tags:
  - cloud computing
  - AWS
  - intro
---

# Cloud Computing

## Características e vantagens

- Agilidade - Velocidade para poder subir as coisas, acompanhar as mudanças do time sem o trabalho relacionado a ter um hardware em mãos.
- Manutenção - A responsabilidade de dar manutenção na infra (energia, ar condicionado etc) sai da sua responsabilidade e reduz custos.
- Confiabilidade - Você tem um time focado apenas em garantir que esse sistema esteja de pé.
- Segurança - Além de possuir as ferramentas de segurança fornecidas pela própria plataforma, você recebe também a questão da segurança física a infra contratada (isso entra manutenção, proteção física contra agentes externos, etc).
- Performance - Você tem as melhores máquinas rodando pra sua infraestrutura (contudo você paga por isso), então pagando ele sempre pode te garantir a melhor infraestrutura na hora.
- Escalabilidade - Esse fator depende que a sua aplicação esteja bem arquitetada, se não vai ser irrelevante. Mas caso sim, ele permite que você aumente e diminua seu poder computacional conforme a necessidade (exemplo - black friday), sem precisar gastar em um hardware que você não vai usar no potencial máximo durante grande parte do ano.
- Custo - Pagar sobre demanda, contudo ele pode se tornar um problema dependendo de como a arquitetura está estruturada. Esse fator pode ser um limitador dependendo do produto, mas também auxilia quando unimos com a escalabilidade e elasticidade (aumentar e diminuir conforme a necessidade).
- Elasticidade - Capacidade de aumentar e diminuir a infra conforme a necessidade. Contudo não é infinito, sem planejamento pode começar a esbarrar nas limitações físicas da AWS pro momento, o famoso hard limit.

> 💡 Soft Limit - Limitações que a AWS impõe, mas você pode abrir um ticket e pedir mais. É um controle de segurança.

> 💡 Hard Limit - Limitação de a AWS não poder provisionar o que você precisa do momento (seja porque esgotou, o que é raro ou simplesmente porque você não se planejou e não tem no momento).

## Tipos de Cloud:

- IaaS (Infra as a Service) - Você tem alguém disponibilizando a infraestrutura pra você no mercado.
- PaaS (Platform as a Service) - Você tem uma plataforma onde você pode executar seus códigos, sem saber o que está rolando por trás (ex - Heroku)
- FaaS (Function as a Service) - Você cria códigos granulares, onde você pode programar serviços específicos (ex mandar um e-mail) como funções a serem disparadas conforme a necessidade.

## Deployment Models:

- Private Cloud - Cloud interno e privado, onde apenas pessoas daquela empresa podem ter acesso e utilizar.
- Public Cloud - Qualquer um pode usar, sem limitações de acesso a contratar o serviço.
- Hybrid Cloud - Você pode ser cloud public e private coexistindo.
- Multicloud - Você pode rodar todos os seus serviços em todos os clouds, sem criar dependência com nenhum. Não é muito utilizado atualmente.
- Community - Empresas se reunem pra construir uma cloud que todas podem utilizar, mistura public cloud com private.
