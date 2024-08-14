const express = require("express"); // Importando o express
const app = express(); // Instanciando o express (criando sua aplicação)

/**
 * **********Definição das Rotas para os recursos da aplicação**********
 *
 * Uma Rota é um caminho para um mdado recurso da aplicação, dentro da Web.
 * Os métodos GET, POST, PUT e DELETE são os métodos HTTP que a aplicação pode executar para acessar os recursos da Web
 * O Express permite que você defina rotas para os recursos da Web, usando métodos como GET, POST, PUT e DELETE.
 *
 *
 */

/**
 * ***********OBSERVAÇÃO***********
 * Um GET para "\" é ativado assim que você escreve o endereço da aplicação no navegador.
 * A aplicação, através do Express, deverá processar essda requisição enviando para o navegado a ṕrimeira página da aplicação.
 * A chamada para a função/método 'app.get' deverá ser respondida por uma função que receberá, deste método, dois objetos:
 * Request: objeto que contém informações sobre a requisição HTTP que foi feita para a aplicação.
 * Response: objeto que contém informações sobre a resposta HTTP que será enviada para o navegador.
 *
 * No código abaixo, os objetos serão recebidos através dos parâmetros 'req' e 'res'
 * Se não quiser usar os dois parâmetros, substitua o que você não quer usar por '_'.
 */

app.get('/',(req,res) => {
  console.log('aiiiiiinn padre',req.body);
    res.send('eu sei que vc olha pra mim quando eu danço feito uma macaca, toda arregaçada, TODA ARREGAÇADA, ARREGAÇADA');
});

const port = 3000; //define uma constante com o valor da porta TCP da aplicacao (3000)
app.listen(port, ()=>{
   console.log(`Servidor executando`);
 });