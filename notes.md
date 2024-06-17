##### 17/06/2024

Curso de TypeScript parte 1: evoluindo seu JavaScript

@01-Porque usar TypeScript? 

@@01
Apresentação

[00:00] Olá pessoal! Boas-vindas ao curso de TypeScript parte 1: Evoluindo seu JavaScript da Alura. Eu sou Flávio Almeida e tenho uma aplicação de negociações em bolsa de valores. É uma aplicação web que permite que cadastremos uma data, uma quantidade, um valor de uma negociação e que possamos exibir no futuro em uma lista e que o usuário possa verificar o que foi cadastrado.
[00:19] Olhando essa aplicação a primeira coisa que passa na nossa cabeça é que é uma aplicação web, ela foi escrita em HTML, CSS e Java Script. Bom, é quase verdade, vem comigo. Se olhamos o código fonte da nossa aplicação, vemos que claramente não foi escrito essa aplicação em Java Script, essa aplicação foi escrita na linguagem TypeScript, uma linguagem criada pela Microsoft que é um Superset do ECMAScript.

[00:47] Um Superset significa que tudo, total conhecimento que você tenha de Java Script é utilizado pela linguagem TypeScript, porém a linguagem TypeScript adiciona tipagem estática e outros recursos da linguagem para tornar o nosso código menos sujeito a defeitos, menos sujeito a bugs e tornar a experiência do desenvolvedor uma experiência mais primorosa.

[01:14] Neste treinamento que vamos ver são os fundamentos da linguagem em TypeScript, vamos começar do básico e vai avançando, vamos comparar um código escrito em JavaScript comparado com o código escrito em TypeScript para entender as vantagens que O TypeScript nos traz em uma aplicação real que se evoluída através de módulos.

[01:38] Temos este primeiro de fundamento, temos o segundo módulo, vai ter o terceiro módulo e vamos evoluindo gradativamente, criando novos problemas, trabalhando com novas complexidades para que você domine ainda mais, sinta-se seguro, melhor dizendo, na linguagem de TypeScript e verificar se você pode trazê-lo ou não para dentro dos seus projetos pessoais.

[02:01] Uma coisa importante destacar é que frameworks do mercado, como angular, utilizam o TypeScript como padrão, como linguagem padrão do desenvolvimento. Inclusive, você pode integrar o TypeScript com o React, até mesmo o Vue Js.

[02:16] O TypeScript está no coletivo imaginário dos desenvolvedores e este curso visa desmistificar essa linguagem mostrando os benefícios de maneira gradativa. Vamos para o próximo vídeo onde vou falar sobre os requisitos de infraestrutura para que possamos concluir este curso sem problema nenhum. Vejo vocês no próximo vídeo.

@@02
Infraestrutura do projeto

[00:00] Pessoal, vamos falar um pouco sobre infraestrutura. Qual é a infraestrutura mínima que você precisa ter para conseguir realizar esse curso sem problema nenhum? A primeira coisa, Visual Studio Code. Se você usa o Windows tem versão para Windows, se você usa Linux tem versão para Linux e se usa Mac tem versão para Mac.
[00:18] Por que vou usar o Visual Studio Code? Uma coisa importante para você lembrar é que o TypeScript foi criado pela Microsoft, Visual Studio Code foi criado pela Microsoft. Você já espera logo de cara uma integração perfeita entre Visual Studio Code e o TypeScript, a linguagem TypeScript e o compilador do TypeScript que vamos ver mais à frente do treinamento. É esse que eu sugiro, é esse que você provavelmente vai ganhar o suporte no Fórum.

[00:48] Segundo, você precisa ter o Node.js instalado na sua máquina. Na minha máquina eu uso o Node.js versão 10210, eu só atualizo a versão do Node quando é necessário, se tem alguma feature que me interessa. O Node tem a versão 12 e a versão 14. A homologada para este curso é a versão 10, mas não há problema nenhum para você com a versão 12 e se você for para versão 14 é só testar e ver se está tudo ok.

[01:20] Isso aqui é bem importante porque sem o Node.js o compilador do TypeScript que vamos precisar utilizar não funciona, o servidor web que vou disponibilizar no projeto inicial deste curso não vai funcionar, essa aqui é condição sine qua non para que possamos continuar o treinamento, a instalação no Node.

[01:43] E outra coisa é o Chrome. Eu vou utilizar o Chrome, sinta-se à vontade para usar outro navegador, mas se você utilizar o Chrome você terá uma paridade visual comigo. Se você usa o Visual Studio Code, se você usa o Chrome, se você está usando a mesma versão no Node que a minha vamos ter uma paridade em tudo, as chances de acontecer algum problema com a infraestrutura são muito reduzidas.

[02:08] É isso que precisamos, não precisamos de mais nada. Precisamos de um navegador Chrome, Node.js e o Visual Studio Code. No próximo vídeo vamos fazer o download do projeto inicial do curso e vou mostrar para vocês como esse projeto inicial é organizado e porquê temos um projeto inicial.

@@03
Preparando o ambiente

Você pode ir acompanhando o passo a passo do desenvolvimento do nosso projeto e, caso deseje, você pode baixar o projeto do curso ou acessar os arquivos do GitHub.
Bons estudos!

https://github.com/alura-cursos/typescript-curso-1/archive/refs/heads/arquivos-iniciais.zip

https://github.com/alura-cursos/typescript-curso-1/tree/arquivos-iniciais

@@04
Visão geral do projeto

[00:00] Vamos começar os trabalhos. Eu tenho o projeto baixado descompactado na pasta "typescript-curso1", eu vou abrir o Visual Studio Code que é o editor de texto que eu recomendo a vocês utilizarem porque tem uma integração perfeita com o TypeScript.
[00:16] Eu vou clicar em "Open", se você usa o Windows vai ter a opção "Open Folder", clicando aqui eu vou na pasta do curso e clico "Open". Antes de eu falar sobre a pasta, sobre a estrutura dos arquivos, a primeira coisa que você vai fazer é o seguinte: você vai no seu Visual Studio Code, vai abrir o "Terminal", esse terminal é aberto dentro da pasta do projeto da raiz e precisamos baixar os módulos da nossa aplicação.

[00:48] "Flávio, eu não escrevi código nenhum. Que aplicação é essa?" É que esse projeto traz com ele um servidor http para que possamos compartilhar nossos projetos feitos em JavaScript, em TypeScript com o navegador. É utilizado o sistema de modos vigentes dos navegadores que é do sistema de modos ECMAScript 6.

[01:10] Não tem nada de TypeScript aqui só vamos passar aqui pela questão de infraestrutura. Você vai está dentro da pasta e vai escrever o comando: npm install tendo a certeza que você tem o Node.js da parte de infraestrutura da versão necessitada, necessária.

[01:28] Eu baixei o projeto e os módulos. A primeira coisa que você vai olhar é o seguinte: existe uma pasta dentro do nosso projeto que é "dist", de distribution, de distribuição. Se você olhar dentro dessa pasta "dist" vemos um arquivo html com uma única página que vamos trabalhar durante todo o projeto de negociação.

[01:53] Uma coisa importante para entendermos é que é esta pasta "dist" que vai ser compartilhada com o nosso navegador. Tudo que estiver dentro dessa pasta "dist" será acessível através do nosso navegador por meio de um servidor web.

[02:11] Como eu faço para compartilhar essa pasta "dist" como o meu navegador? Eu vou chegar dentro aqui do meu "package.json", vocês verão que há um script chamado server. Vou escrever aqui no meu terminal npm run server. Quando eu executo esse comando o navegador padrão do meu sistema operacional já é aberto automaticamente e os arquivos da pasta "dist" estão sendo compartilhados.

[02:40] Podemos até olhar pelo terminal que o Index, o Bootstrap, o Favicon estão todos sendo compartilhados com o meu navegador, todos na porta 3000. Uma grande sacada desta estrutura é que qualquer alteração que você fizer nos arquivos do projeto vai se refletir automaticamente no navegador.

[03:03] Por exemplo, se eu diminuo aqui a minha tela, tudo isso foi pensado para ter a comodidade de que você só se preocupe em escrever o código TypeScript e não se preocupe com a infraestrutura nenhuma.

[03:16] Eu vou dar um exemplo. Vou abrir o meu Index, onde está aqui Negociações eu vou colocar um XYZNegociações e vou salvar. Quando eu salvo automaticamente, vemos que o browser tem refresh, ou seja, podemos trabalhar, se você tem dois monitores, tranquilamente com dois monitores e qualquer alteração que você fizer automaticamente o navegador vai refletir essa alteração ou se você trabalha com um monitor apenas você pode dividir a sua tela desta maneira.

[03:48] O importante aqui é: que isso é uma página html escrita com Bootstrap bem simples, tem uma data, uma quantidade, um valor, um botão incluir e toda vez que quisermos trabalhar, acessar essa página da nossa aplicação, vou para o terminal, abro o terminal, fecho meu navegador que eu parei, vou executar o npm run serverque vai automaticamente abrir aqui o meu navegador servindo o Index.html da minha aplicação.

[04:19] O importante é entender que a pasta "dist" é o conteúdo que está dentro desta pasta, acessível no servidor. Agora que já entendemos como esse projeto inicial está estruturado vamos partir para a materialização do domínio de negociação, do modelo de negociação que é o assunto do próximo vídeo.

@@05
Entendendo o carregamento de módulos

[00:00] Vamos abrir o projeto de novo para revisarmos. "Open" ou "Open Folder" > "Desktop > typescript-curso1", consigo ver a pasta do meu projeto, vou abrir o terminal, "New Terminal", vou executar meu comando npm run server que agora vai automaticamente abrir meu navegador. Se por acaso não abriu no seu você digita localhost 3000 temos que enviar nossa página aqui de negociação.
[00:34] Antes de cairmos dentro da parte de negociação quero fazer aqui uma introdução rápida com vocês. Caso vocês não tenham feito outro curso na Alura sobre sistema nativo módulo ECMAScript 6, como esse funciona porque vamos usar aqui ao longo do treinamento. É bem relâmpago e bem light.

[00:51] Vamos voltar para a nossa pasta. A primeira coisa que eu quero que vocês entendam é o seguinte, quando trabalhamos com sistema de módulos nativos do navegador, vamos importar um único módulo que é um script de JavaScript, um único módulo em Index html e é o navegador que vai ler esse módulo e vai descobrir o que ele necessita para funcionar e vai baixar para nós automaticamente outros módulos.

[01:19] Removendo a responsabilidade de ter que colocar vários scripts da nossa página e ter que lembrar a ordem de dependência entre eles. Isso é muito interessante. Podemos fazer isso nativamente no navegador.

[01:34] Como vamos fazer isso? Vamos lá dentro da pasts "js", dentro dela, clicamos em js/models ele vai estar com a seta para baixo, eu vou clicar com o botão direito, "New File", eu vou criar o App app.js. Cuidado na hora de criar porque ele não pode ficar dentro da pasta models, tenha a certeza que ele é filho direto da pasta js.

[01:57] Criei este humilde módulo porque não vamos falar script, porque trabalhando no sistema de módulos todo arquivo .js chamamos de módulo. Vou colocar aqui aquele humilde alert que aprendemos no curso de lógica de programação, coloquei o alert, vou voltar para o Index html e vou fazer isso uma única vez. Vou colocar aqui a tag <script type="module" src=>, para dizer que não é um script é um módulo.

[02:28] Onde está esta função? É só lembrarmos que a pasta "dist" é compartilhada na raiz do meu navegador quando eu abro o localhost 3000. Tenho que colocar a subpasta <script type="module" src="js/app.js"></script>. Vou fechar a tag script, vou salvar.

[02:49] Salvei, vou voltar ao navegador e automaticamente ele já recarregou e já me mostrou o alerta provando que a função está sendo carregada pelo sistema de módulos do ECMAScript. Então importei o módulo principal da aplicação e é dentro dele que toda a aplicação vai ser inicializada e por aí vai. Agora que entendemos isso vamos partir para a modelagem da nossa negociação que é o que interessa.

@@06
Importando módulo nativo do ECMAScript

Você está trabalhando em um projeto front-end e quer utilizar os módulos ECMAScript para uma maior organização do seu projeto. Qual a forma correta de importar um módulo a partir de um arquivo HTML?


Alternativa correta
<script module="app/app.js"></script>
 
Alternativa correta
<script module src="app/app.js"></script>
 
Alternativa correta
<script type="module" src="app/app.js"></script>
 
Alternativa correta! O atributo type="module" indica para o navegador que o arquivo a carregado deve ser tratado com um módulo e não um script.
Alternativa correta
<script type="script" src="app/app.js"></script>

@@07
Negociação, modelagem e regras

[00:00] Chegou a hora de materializarmos, modelarmos a nossa classe Negociação. Quando falamos em modelagem dizemos que a negociação é um modelo, por quê? Ela é um modelo de algo que existe no mundo real.
[00:13] Se formos para o mundo real, para o mundo da bolsa de valores, sabemos que uma negociação possui regras. Por exemplo, uma negociação não pode ser modificada depois de criada, obrigatoriamente tem que ter uma data, quantidade e valor, o volume de uma negociação calculado multiplicando-se a quantidade negociada do dia pelo valor negociado.

[00:33] Todas essas regras que existem no mundo real têm que ser materializadas no meu código, no meu modelo de negociação para que ela se aproxime o mais perto no real. Inclusive, no nome de métodos de propriedade que fique escrito em alto nível para quem leia o código entenda de que domínio se trata e no nosso caso é um domínio de negociação.

[00:55] Não vamos começar a escrever em TypeScript, se você está ansioso para isto. Vamos escrever primeiro em JavaScript para ver se a linguagem JavaScript consegue atender a todas essas especificações. A primeira coisa que vou fazer, vou lá em "App", vou tirar esse alert daqui e todos os modelos que vamos criar da nossa aplicação ficarão dentro da pasta models. Aqui dentro eu vou clicar com o botão direito do mouse, "New File", vou criar negociacao.js.

[01:28] Vou modelar este arquivo usando classes do ECMAScript, vou dizer que: class Negociacao {}. Que vai ter uma quantidade, uma data e um valor.

[01:45] E eles não podem ser modificados depois que uma instância de negociação é criada. Já vou lançar um melhor da linguagem JavaScript, criando atributos privados, atributos que quando eu defina em uma classe eu só consigo definir os valores deles através do construtor ou por métodos da própria classe. Se alguém fora da classe tentar alterar essas propriedades, não vai conseguir.

[02:12] Para fazer isso eu uso tralha, ‘#’, data, vai ter uma propriedade, um atributo de classe, tralha quantidade, tralha valor, class Negociacao { #data; #quantidade; #valor; }. Eu estou escrevendo no que tem de mais moderno em JavaScript para podermos comparar depois com a linguagem em JavaScript e ver o que o JavaScript nos traz de benefício. [02:32] Agora eu preciso, no momento que estou criando uma negociação, passar a data, quantidade e valor. Sabemos que fazemos isso através de um construtor, vou receber uma data, uma quantidade e vou receber um valor constructor(data, quantidade, valor) { }.

[02:43] E aqui vou dizer constructor(data, quantidade, valor) { this.#data = data; this.#quantidade = quantidade; this.#valor = valor; }.

[03:02] Fiz isso e vamos testar se realmente essa função é possível modificar a data, a quantidade e o valor. Para isto eu preciso criar uma instância dessa negociação em "App" porque esse é o primeiro módulo da minha aplicação, que vai executar o meu código.

[03:18 ] Para que eu possa criar uma instância de negociação eu preciso importar o módulo negociação em App. Para que a negociação seja exportável eu preciso na definição da minha classe colocar este comando export class Negociacao.

[03:35] Salvei, fui lá para "App" e vou fazer: import {}. Eu quero importar a minha negociação. Vou importar essa negociação porque eu quero usar essa classe que é o módulo negociação.js. Se o App está dentro de js, eu preciso fazer: import { Negociacao } from './models/negociacao.js';.

[04:07] Vou salvar, vou voltar ao navegador para mostrar para vocês. Vou abrir o console, o navegador, você clica em "F12" ou usa o comando "Shift + C". Se eu vier na aba Network e a recarrego, você vai ver que o App foi carregado e como eu fiz o import de negociação, ele também carregou o módulo da negociação sem eu precisar explicitar dentro do Index.html. Só bastou eu colocar o App que o navegador vai resolver isso tudo para mim.

[04:40] Agora que tenho minha negociação importada eu vou criar uma instância de negociação, vou dizer: const negociacao = new Negociacao(), vou passar aqui com a ordem dos parâmetros do construtor que são data, quantidade e valor, vou passar new date(), a quantidade que eu vou passar é 10 e o valor que eu vou passar é 100. const negociacao = new Negociacao(new Date(), 10, 100);

[05:10] Passei para o meu construtor e vou fazer um console.log da negociação para vermos. console.log(negociacao);. Vou tentar negociacao.quantidade = 1000;, tentar alterar. E vou dá um outro console.log(negociacao) para podermos ver o resultado.

[05:36] Vou salvar, vou voltar no navegador, vou olhar na aba do console. Quando eu vejo aqui, olha só, ele criou com a data, com a quantidade e com o valor. A quantidade continua 10, não mudou. O que meu JavaScript fez foi adicionar dinamicamente uma propriedade quantidade de mesmo nome dinamicamente com esse valor que eu coloquei.

[06:06] Não consegui alterar o valor original, mas também eu consegui adicionar essa propriedade aqui quantidade dinamicamente na minha instância da classe negociação. Não parece que o JavaScript está nos ajudando a não alterar a propriedade da classe negociação.

[06:29] O que precisamos agora é implementar os getters para que eu possa ler cada negociação. A data, se eu quiser só ler a data, se eu ler a quantidade, se eu quiser o volume eu preciso criar esses getters para que eu possa imprimir aqui e também ver o resultado antes de fazermos uma grande revelação.

@@08
Diferenciando escopos de módulos

Ao trabalhar com módulos, é importante nos atentarmos com a diferença de escopo que eles possuem em relação aos arquivos JavaScript convencionais. Dito isso, qual das alternativas abaixo é verdadeira sobre o escopo de um módulo?

Alternativa correta
Módulos do ECMAScript não existem na verdade, tudo é considerado um script.
 
Alternativa correta
Tudo o que for declarado dentro de um módulo estará confinado nesse módulo, a menos que a pessoa desenvolvedora decida exportar uma ou mais funcionalidades.
 
Alternativa correta! Uma das principais formas de fazer isso é exportando dados com a palavra-chave export e importando esses dados com a palavra-chave import.
Alternativa correta
Tudo que for declarado dentro de um módulo é automaticamente visível para outros módulos.
 
Alternativa correta
Tudo o que for declarado dentro de um módulo, mesmo que queiramos dar visibilidade, não é passível de importação por outros módulos.

@@09
Criando classes no ES2015

No paradigma da Orientação a Objetos, criamos a representação de algo do mundo real em nosso programa através de modelos, e esses modelos são definidos através de classes.
Qual dos códigos abaixo você utilizaria para criar uma classe Pessoa de acordo com o ECMAScript 2015?

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
 
Alternativa correta! A classe está definindo suas propriedades nome e idade através de um construtor.
Alternativa correta
class Pessoa {
    Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
 
Alternativa correta
class Pessoa {
    nome;
    idade;
}

@@10
Finalizando o modelo de negociação

[00:00] Vimos que é possível, no mundo JavaScript, com a linguagem mais moderna do JavaScript, criar atributos privados de uma classe, e nela eu posso atribuir valores através do construtor ou através de métodos “acessadores”.
[00:18] Vimos que é possível alterar quantidade, mas não é aquela quantidade privada da minha instância de negociação, é que o JavaScript como é uma linguagem dinâmica adicionou a propriedade quantidade dinamicamente nesse objeto, ele não tem relação nenhuma com a quantidade que está internamente na classe.

[00:39] Isso pode te confundir um pouco. Vamos ver se depois temos alguma coisa melhor para que isso não aconteça, mas o mais importante é entendermos aqui que a quantidade que está encapsulada em negociação ainda não é modificada, não está sendo modificada.

[00:55] Para terminar vou criar getters, somente leitura para quem quiser ler a data, a quantidade e o valor individualmente. Porque se eu fizer agora assim, chegar agora e colocar negociacao.data, se eu salvo e volto no meu navegador vai dar undefined, por a data ser privada, eu não tenho acesso a ela. Preciso criar alguém que me retorne essa data. Nem se eu fizer isso: negociacao.#data, vai dar erro de sintaxe.

[01:32] Como eu crio um getter? Eu vou chegar na minha classe de JavaScript, vou criar get data() {}, essa função vai me retornar return this.#data;. Eu vou criar get quantidade() {} que vai me retornar return this.#quantidade; }. Porque o get, assim como o método tem a acesso, sabe acessar os atributos privados da minha classe. Então get valor() {} e vou retornar return this.#valor;.

[02:11] Fiz isso, vou salvar. Volto em "App", quando eu crio o get eu consigo acessar a propriedade como se o get fosse uma propriedade classe, como se não fosse o método. O get é como se fosse o método, mas ele me dá um acesso como se fosse uma propriedade de classe. Fazendo isso agora tem que ser capaz. Salvei, vou voltar no navegador, recarregar.

[02:38] Eu consigo ver, ler a data. Está legal, eu consigo criar uma negociação, essa negociação se eu tenho de mudar as propriedades privadas dela eu não consigo, eu não criei nenhum método na minha classe que me permita fazer essa alteração.

[02:55] Contudo eu consigo a ler a data, eu consigo ler a quantidade e se eu tentar fazer isso aqui também não vai rolar. Se eu tentar fazer negociacao.data = Flavio;, quando executo o meu código, não dá, porque é get, eu não posso atribuir nada a um get, só ler.

[03:20] Está faltando o nosso volume. O volume vou criar como get: get volume(] { return this.#quantidade * this.#valor; }. Quantidade vezes valor. Salvei, vou voltar em App, eu quero imprimir o volume, como é um get eu acesso como se fosse uma propriedade ele tem que imprimir para mim 1000.

[03:55] Salvei, volto para o navegador, crio meu console, dou refresh e está lá 1000. Será que conseguimos materializar tudo bonito? É isso que vou mostrar para vocês no próximo vídeo. A coisa não está 100% e vamos ver que não é por nossa culpa, é por uma questão da limitação da linguagem JavaScript.

@@11
Motivação do TypeScript

[00:00] Tudo é muito bonito, tudo está rodando, mas será que conseguimos mesmo implementar essas regras das especificações de uma negociação escrevendo nosso código em JavaScript da maneira que nós fizemos?
[00:15] Vamos primeiro checar. Uma negociação não pode ser modificada depois de criada. Vimos que quando eu adiciono aqui uma propriedade privada da minha classe e eu coloco um get que tem um nome igual ao da minha propriedade eu não consigo chegar no meu código.

[00:35] Se eu fizer negociacao.quantidade = 10; este código não vai funcionar. Eu vou salvar, vou voltar para o navegador e quando olho lá ele gera essa mensagem de erro dizendo que eu não posso atribuir nada a um get. Não modifiquei a quantidade, parece que está tudo ok.

[00:57] Não está. Primeiro: na hora que estou escrevendo meu código será que nada me impede de eu chegar agora e dizer que quantidade é igual a 10 e eu só vou saber que eu cometi um erro em runtime, significa que eu só vou saber que meu código não funcionou depois que eu estou rodando.

[01:17] Mas é tarde demais. Imagina se esse código vai para a produção ou vai até para um ambiente de homologação, um ambiente de testes. Você vai rodar, vai estar com problema, você vai ter que voltar, alterar seu código, colocar de novo no ambiente de testes ou de produção.

[01:34] Segundo: nada me impede de eu adicionar agora, chegar aqui em negociação e eu colocar quantidad = 10;, comi um "e". Vocês sabem o que vai acontecer, o JavaScript vai criar dinamicamente nessa instância a propriedade quantidade. E se o programador pegar onda, se ele chamar de quantidade e ele quiser fazer console.log(negociacao.quantidad); e ele quer ver o resultado, ele vai fazer isso daqui.

[02:13] Volto lá para o navegador, vou recarregar, tem que fazer refresh nos arquivos do JavaScript. Ele vai ver que o código dele rodou, funcionou, mas ele não está considerando a quantidade lá da negociação. Ele colocou por engano essa propriedade e está considerando em todo o código essa propriedade adicionada dinamicamente.

[02:37] Isso não está legal, isso vai gerar problema. E mais ainda exige essa regra que diz que uma negociação obrigatoriamente tem uma data, uma quantidade e um valor. Vamos voltar para o nosso código e olha o que eu vou fazer, removi isso aqui.

[02:52] Agora vou colocar uma data new Date() e esqueci de colocar a quantidade. E agora vou pedir para ele calcular negociação, o volume para mim. const negociacao = new Negociacao(new Date() ); console.log(negociacao.volume);

[03:14] Salvo, vou lá no navegador, vou fazer um refresh e “NaN, not a number. Porque o meu código na hora que estou desenvolvendo está passando, não tem nenhuma indicação visual que eu cometi um erro, ninguém me obriga a passar esses parâmetros para o construtor da minha classe negociação e eu só vou saber que meu código está com problema em runtime, quando meu código está rodando no navegador.

[03:44] E isso é muito tarde, queremos falar rápido, queremos descobrir se o nosso código está com defeito no momento em que estamos desenvolvendo. É aí que entra a linguagem TypeScript.

[03:56] A linguagem TypeScript é um Superset do ECMAScript, significa que tudo que tem em JavaScript tem em TypeScript e o TypeScript nos traz mais coisas que, inclusive vamos ver no próximo vídeo, nos ajuda a capturar erro em tempo desenvolvimento e não em runtime.

[04:16] Ou seja, eu não vou ter que testar a minha aplicação: escrevo o código, vou para o navegador e recarrego para saber se ela está funcionando ou não. Eu quero saber no momento que eu estou desenvolvendo.

[04:27] "Como o TypeScript faz isso, Flávio? Como o TypeScript entra no nosso código, como eu configuro isso?" Isso vamos ver agora nos próximos vídeos.

@@12
Faça como eu fiz

Chegou a hora de você seguir todos os passos realizados por mim durante esta aula. Caso já tenha feito, excelente. Se ainda não, é importante que você execute o que foi visto nos vídeos para poder continuar com a próxima aula.

Continue com os seus estudos, e se houver dúvidas, não hesite em recorrer ao nosso fórum!

@@13
O que aprendemos?

Nesta aula, aprendemos sobre:
Introdução ao projeto e sua estrutura;
Um pouco sobre módulos do ECMASCRIPT;
Modelagem de uma Negociação em JavaScript;
Buracos em nossa modelagem por limitações da linguagem JavaScript.

