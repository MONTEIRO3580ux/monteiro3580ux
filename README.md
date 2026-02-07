Conversor de Unidades Físicas e Técnicas

Este projeto é um conversor de unidades desenvolvido em JavaScript puro, com foco em correção conceitual, rigor físico e clareza de contexto. O objetivo principal é evitar conversões fisicamente inválidas ou conceitualmente incorretas, algo comum em muitos conversores genéricos disponíveis online.

O projeto foi pensado tanto como ferramenta educacional quanto como exercício técnico de programação e modelagem de grandezas físicas.

────────────────────────────────

Objetivos do Projeto

Criar um conversor de unidades confiável para uso educacional e técnico.
Garantir que apenas grandezas compatíveis sejam convertidas entre si.
Separar corretamente sistemas de unidades distintos, como SI e IEC.
Fornecer contexto físico explícito quando a conversão depende de hipóteses.
Servir como projeto de estudo e portfólio em física e programação.

────────────────────────────────

Estrutura do Projeto

O projeto é composto por três arquivos localizados no mesmo diretório:

index.html
Arquivo responsável pela estrutura da interface e dos elementos visuais.

style.css
Arquivo responsável pela estilização da interface.

script.js
Arquivo responsável por toda a lógica de conversão, validações físicas, histórico e comportamento da interface.

────────────────────────────────

Categorias Implementadas

Grandezas físicas e técnicas:

Comprimento
Área
Volume
Massa
Tempo
Velocidade
Aceleração
Força
Torque
Energia
Potência
Pressão
Temperatura
Frequência

Dados digitais:

Dados SI (base decimal): kilobyte, megabyte, gigabyte e superiores.
Dados IEC (base binária): kibibyte, mebibyte, gibibyte e superiores.

Iluminação:

Iluminância: lux e foot-candle.

Conversões diretas entre candela, lúmen e lux foram removidas, pois dependem de geometria, distribuição espacial e área iluminada, não sendo conversões diretas válidas.

Radioatividade:

Radioatividade (atividade): becquerel, curie.
Radioatividade (dose): gray, sievert.

Unidades regionais e contextuais:

Unidades agrárias como tarefa e alqueire, com contexto explícito.
Unidade de massa regional arroba, com valor definido.
Velocidade Mach com hipótese física explicitada.

────────────────────────────────

Decisões Conceituais Importantes

Não são realizadas conversões diretas entre lux, lúmen e candela.
Mach é tratado como razão adimensional, com referência ao nível do mar a 15 °C.
Valores negativos de temperatura em Kelvin são bloqueados.
Escalas e distâncias nulas ou negativas são consideradas inválidas.
Torque é tratado como grandeza distinta de força.
Unidades de dados seguem rigorosamente suas bases (10 para SI, 2 para IEC).

Essas decisões foram adotadas para preservar a coerência física e evitar resultados enganosos.

────────────────────────────────

Validações Implementadas

Bloqueio de temperaturas Kelvin negativas.
Bloqueio de escalas ou distâncias menores ou iguais a zero.
Prevenção de conversões fisicamente inválidas.
Exibição visual de erro quando uma validação falha.

────────────────────────────────

Funcionalidades de Interface

Alternância entre notação decimal padrão e notação científica.
Histórico de conversões realizadas.
Restauração de conversões anteriores ao clicar no histórico.
Interface simples, direta e sem dependências externas.

────────────────────────────────

Fontes e Referências Conceituais

Sistema Internacional de Unidades (SI).
Normas IEC e ISO/IEC 80000 para dados digitais.
NIST Reference on Constants, Units, and Uncertainty.
ICRP para grandezas relacionadas à radioatividade.
Fundamentos de física clássica e análise dimensional.

As referências são utilizadas como base conceitual e não como bibliotecas externas.

────────────────────────────────

Como Utilizar

Abra o arquivo index.html em um navegador moderno.
Selecione a categoria de conversão desejada.
Escolha a unidade de origem e a unidade de destino.
Insira o valor a ser convertido.
O resultado será exibido automaticamente, respeitando as validações físicas.

────────────────────────────────

Tecnologias Utilizadas

HTML5.
CSS3.
JavaScript puro (Vanilla JavaScript).

Não são utilizados frameworks ou bibliotecas externas.

────────────────────────────────

Observação Final

Este projeto prioriza correção física e clareza conceitual, mesmo quando isso implica remover conversões que seriam convenientes, porém incorretas. O foco não é oferecer todas as conversões possíveis, mas apenas aquelas que fazem sentido do ponto de vista físico e dimensional.
