Conversor de Unidades Físicas e Técnicas

Este projeto é um conversor de unidades desenvolvido em JavaScript puro, com foco em correção conceitual, rigor físico e clareza de contexto. O objetivo não é maximizar o número de conversões disponíveis, mas garantir que todas as conversões implementadas sejam fisicamente válidas, bem definidas e explicitamente contextualizadas.

O projeto foi finalizado com escopo controlado e decisões técnicas conscientes, priorizando qualidade, legibilidade e confiabilidade.

────────────────────────────────

Objetivos do Projeto

Criar um conversor de unidades confiável para uso educacional e técnico.
Evitar conversões fisicamente ou dimensionalmente inválidas.
Separar corretamente sistemas de unidades distintos, como SI e IEC.
Fornecer contexto explícito quando uma conversão depende de hipóteses físicas.
Servir como projeto de estudo, referência técnica e item de portfólio.

────────────────────────────────

Estrutura do Projeto

O projeto é composto por três arquivos no mesmo diretório:

index.html
Responsável pela estrutura da interface e pela organização das seções.

style.css
Responsável pela estilização visual e comportamento de layout.

script.js
Responsável por toda a lógica de conversão, validações físicas, histórico, navegação e comportamento interativo.

────────────────────────────────

Navegação

A interface possui um menu de navegação superior que permite acesso direto às principais seções do projeto, sem necessidade de rolagem excessiva.

Seções disponíveis:

Início
Conversor de Unidades
Escala
Histórico
Sobre o Projeto
Fontes e Referências

A navegação é feita por âncoras internas com rolagem suave.

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

Conversões diretas entre candela, lúmen e lux não são realizadas, pois dependem de geometria, distribuição espacial e área iluminada.

Radioatividade:

Radioatividade (atividade): becquerel, curie.
Radioatividade (dose): gray, sievert.

Unidades regionais e contextuais:

Unidades agrárias como tarefa e alqueire, com contexto explícito.
Unidade de massa regional arroba, com valor definido.
Velocidade Mach com hipótese física explicitada.

────────────────────────────────

Escala

O projeto inclui uma calculadora de escala geográfica integrada, acessível diretamente pelo menu de navegação.

Validações aplicadas:

Escala maior que zero.
Distâncias maiores que zero.
Bloqueio de resultados fisicamente inválidos.

────────────────────────────────

Decisões Conceituais Importantes

Não são realizadas conversões entre grandezas incompatíveis.
Lux, lúmen e candela não são convertidos diretamente entre si.
Mach é tratado como razão adimensional, com referência ao nível do mar a 15 °C.
Temperaturas negativas em Kelvin são bloqueadas.
Torque é tratado como grandeza distinta de força.
Unidades de dados seguem rigorosamente suas bases (SI decimal e IEC binário).

Algumas funcionalidades informativas, como Dimensões Físicas, foram deliberadamente excluídas por não serem necessárias ao objetivo principal do projeto.

────────────────────────────────

Validações Implementadas

Bloqueio de valores fisicamente impossíveis.
Mensagens de erro visuais claras.
Prevenção de conversões silenciosamente inválidas.
Validação de entradas antes do cálculo.

────────────────────────────────

Funcionalidades de Interface

Menu de navegação com acesso direto às seções.
Rolagem suave entre seções.
Alternância entre notação decimal e notação científica.
Histórico de conversões.
Restauração de conversões ao clicar no histórico.
Interface limpa, direta e sem dependências externas.

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

Abrir o arquivo index.html em um navegador moderno.
Selecionar a categoria desejada.
Escolher a unidade de origem e a unidade de destino.
Inserir o valor a ser convertido.
Visualizar o resultado respeitando as validações físicas.

────────────────────────────────

Tecnologias Utilizadas

HTML5.
CSS3.
JavaScript puro (Vanilla JavaScript).

Não são utilizados frameworks ou bibliotecas externas.

────────────────────────────────

Estado do Projeto

O projeto encontra-se finalizado.
O escopo está fechado.
Novas funcionalidades só devem ser adicionadas se houver justificativa física e técnica clara.

────────────────────────────────

Observação Final

Este conversor prioriza coerência física, clareza conceitual e honestidade técnica. A escolha consciente de não implementar determinadas conversões ou funcionalidades faz parte do projeto e reforça sua confiabilidade.

O objetivo não é ser o maior conversor possível, mas um conversor correto.
