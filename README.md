# Carteira de Investimentos

**Descrição:**
Front-end da aplicação da carteira de investimentos. Desenvolvido com o auxílio do Google Gemini, utilizando como base o template inicial do projeto login-page da desenvolvedora e YouTuber Fernanda Kipper.

**Tecnologias:**
* Angular com TypeScript
* Node.js

**Instalação:**
1. Clone este repositório: `https://github.com/CarlosNazario2010/carteira-investimentos-frontend.git`
2. Instale as dependências: `npm install`   

**Execução:**
`ng serve`

**A aplicação roda em:** 
`localhost:4200`

**Tela Home:**
Tela inicial da aplicação. Possui os botões Login para entrar no sistema e SignUp para realizar o cadastro.
![Tela Home da aplicação](/src/telasApp/TelaHome.png)


**Tela SignUp:**
Tela de cadastro de usuários. É necessário informar nome, CPF, email e senha. A aplicação valida os dados e informa em caso de erros.
![Tela SignUp da aplicação](/src/telasApp/TelaSignUp.png)


**Tela Login:**
Tela de login do usuário. É necessário informar CPF e senha. A aplicação valida os dados e informa em caso de erros.
![Tela Login da aplicação](/src/telasApp/TelaLoginComCadastroRealizadoComSucesso.png)


**Tela Gerenciar Carteira:**
Tela para gerenciar o status da carteira. Caso o usuário consiga se logar com sucesso na aplicação o botão Recarregar Carteira fica disponivel
![Tela GeranciarCarteira da aplicação](/src/telasApp/TelaGerenciarCarteiraComLoginRealizadoComSucesso.png)

Ao clicar no botão Gerenciar Carteira, caso o usuário ainda não possua uma carteira, o botão Criar Carteira fica habilitado
![Tela GerenciarCarteira da aplicação](/src/telasApp/TelaGerenciarCarteiraComInformeQueOClienteNaoPossuiCarteira.png)

Ao criar a Carteira o botão Ir para o Dashboar fica habilitado. Caso o usuário, ao se logar na aplicação, ja possuir uma carteira, terá o botão Ir para o Dashboard  habilitado ao clicar no botão Recarregar Carteira (nesse caso o botão Criar Carteira jamais é habilitado)
![Tela GerenciarCarteira da aplicação](/src/telasApp/TelaGerenciarCarteiraComInformeDeCarteiraCriadaComSucesso.png)


**Tela Dashboard:**
Tela principal da aplicação, onde o usuário pode consultar sua carteira. Ela possui  botões na parte superior que chamam as funcionalidade conforme a imagem a seguir.
![Tela Dashboard da aplicação](/src/telasApp/TelaDashboardIncial.png)


**Tela Adicionar/Remover Saldo:**
Tela que permite a adicionar ou remover saldo na carteira, necessário para a compra de ativos. Caso o usuário tente remover um saldo maior que possui (tentar ficar com saldo negativo) a aplicação lançará uma mensagem de erro. O saldo sera atualizado na tela de dashboard do usuário
![Tela Adicionar/Remover da aplicação](src/telasApp/TelaAdicionarRemoverSaldo.png)


**Tela de Dashboard (com o saldo atualizado):**
A tela de dashboard do usuário sera atualizada com  o valor de saldo informado.
![Tela Dashboard da aplicação](/src/telasApp/TelaDashboardComOSaldoAtualizado.png)


**Tela Comprar Ativo:**
Permite comprar ativos. É necessário informar ticker, quantidade, preço e tipo do ativo. A aplicação valida os dados e integra-se com a API da B3 para obter informações sobre os ativos. Tipos permitidos: ACAO, FII, BDR e ETF
![Tela ComprarAtivo da aplicação](/src/telasApp/TelaComprarAtivos.png)


**Tela Comprar Ativo (mensagem de sucesso):**
Caso o usuário faca a compra corretamente a aplicação vai informar uma mensagem de compra realizada com sucesso
![Tela CompraAtivo da aplicação](/src/telasApp/TelaComCompraFeitaComSucesso.png)


**Tela de Dashboard (atualizado com a compra do ativo):**
A tela de dashboard do usuário vai ser atualizada com o ativo comprado. Varias informacoes do ativo podem ser visualizadas conforme a tela a seguir. Inclusive os valores informados pela API externa da Brapi implmentada no backend da aplicação
![Tela Dashboard da aplicação](/src/telasApp/TelaDashboardComACompraRealizada.png)


**Tela de Compra (nova compra mesmo ativo):**
Tela de compra novamente, agora com uma nova compra de um ativo que ja existe na carteira
![Tela ComprarAtivo da aplicação](/src/telasApp/TelaCompraComNovaCompraAtivoExistente.png)


**Tela de Dashboard (apos a compra de um ativo existente na carteira):**
Tela de Dashboard apos a compra de um ativo que ja existe na carteira. Nesse caso a quantidade de ativos da carteira é atualizada com um novo preco medio para este ativo. Todos os demais dados tambem sao atualizados conforme a nova compra
![Tela Dashboard da aplicação](/src/telasApp/TelaDashboardComNovaCompraMesmoAtivo.png)


**Tela de Compra (nova compra de um ativo não existente na carteira):**
Tela de compra novamente, agora realizando a compra de um ativo ainda não existente na carteira
![Tela ComprarAtivo da aplicação](/src/telasApp/TelaCompraComNovaCompraAtivoNaoExistente.png)


**Tela de Dashboard (apos a compra de um ativo não existente na carteira):**
Tela de dashboard apos a compra de uma ativo ainda não existente na carteira. Nesse caso a lista de ativos aumentara com a adicao de um novo ativo. Todos os outros indicadores serao atualizados conforme a compra do novo ativo
![Tela Dashboard da aplicação](/src/telasApp/TelaDashboardComNovaCompraAtivoDiferente.png)

**Tela de Vender Ativo:**
Tela que permite a venda de ativos. Possui os campos a serem preenchidos: Ticker, Quantidade, Preco de Venda e Tipo. A exemplo da Compra de Ativos, caso algum dado invalido for inserido (ou se tentar vender um ativo que não se possui, ou em quantidade insuficiente), a aplicação lancara uma mensagem de erro 
![Tela VendarAtivo da aplicação](/src/telasApp/TelaVendaAtivo.png)

**Tela de Dashboard (apos a venda de algum ativo):**
Tela de dashboard novamente, com a atualizacao apos a venda do ativo
![Tela Dashboard da aplicação](/src/telasApp/TelaDashboardComAVendaRealizada.png)

**Tela de Ativos Comprados:**
Tela que informa os ativos que ja foram comprados para a carteira
![Tela AtivosComprados da aplicação](/src/telasApp/TelaAtivosComprados.png)

**Tela de Ativos Vendidos:**
Tela que informa os ativos que ja foram vendidos na carteira
![Tela AtivosVendidos da aplicação](/src/telasApp/TelaAtivosVendidos.png)
