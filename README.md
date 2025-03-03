# Visão geral do projeto

_“Nossos animais de estimação têm uma vida tão curta para passar conosco, e ainda assim, passam a maior parte do tempo esperando que voltemos para casa todos os dias. É impressionante o quanto de amor e alegria eles trazem para nossas vidas, e o quanto nos tornamos mais próximos uns dos outros por causa deles.” -John Grogan._

## Motivação
Uma organização sem fins lucrativos de bem-estar animal tem como objetivo a prevenção da crueldade contra os animais, fornecer abrigo, cuidar de animais perdidos e abandonados. Todo o trabalho é realizado sem nenhum tipo de contribuição  do governo, as pessoas realizam as ações de maneira voluntária e por meio de doações e auxílio financeiro.

Por este motivo o projeto **Fur-riends**, um **site para auxilar a busca e informações para quem deseja ajudar.**

## O que faz
Reúne informações e algumas das atividades que são praticadas por uma organização sem fins lucrativos de bem-estar animal, disponibilizando contatos atualizados de instituições da região de Curitiba para conhecer mais sobre cada trabalho realizado e entrar em contato para ajudar.

## Como foi criado
Foram realizadas buscas e web-scraping de dados para contruir um dicionário em Python com as informações necessárias e realizada a conversão para JSON utilizando a biblioteca do pandas. Depois de orgarnizar as informações foi criado um servidor com Node.js e criadas as rotas necessárias, primeiramente testando as requisições com o Postman.
Em seguida foram utilizados middlewares, Express e EJS para renderizar os dados no html, e posteriormente foram estilizados com CSS e JavaScript.

## Desafios
Um dos maiores desafio foi a parte de estilização e responsividade utilizando CSS. Esta foi a parte que levou maior tempo com pesquisas e testes. Mas através das buscas foi possível realizar os refinamentos e focando também na experiência do usuário. 

## O que aprendi
Aprendi que é possível buscar dados utilizando Python e realizar a conversão com pandas e disponibilizar para um servidor backend node e express. Embora seja possível e mais apropriado o uso do Flask para a situação, preferi utilizar as habilidades e conhecimentos com JavaScript e Node para este projeto.

## Atualizações
Melhorias front-end e novas funcionalidades que possam contribuir para a causa do projeto.
