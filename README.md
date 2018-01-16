# Plataforma-core

#### Introdução
O módulo do core é responsável por manter a estrutura de entidades comuns de modelo de entidades da plataforma.
As classes são definidas mais no intuito de unificar a estrutura dessas classes e orientar na plataforma quais propriedades estão
sendo usadas e esperadas pelos módulos.
Desta forma, essas classes devem ser importadas para criar uma instância de uma entidade de modelo da plataforma.

### Consultas no DataSet
No dataSet além dos métodos de manutenção de dados, como: ´insert´, ´update´ e ´delete´; está disponível o método de ´queryable´
para permitir a utilização de métodos de de pesquisa como Linq. 
Foi utilizada a biblioteca: linq.js , vide: https://www.npmjs.com/package/linq
Foram realizados exemplos nos testes unitários com jasmine: datasetSpec.js