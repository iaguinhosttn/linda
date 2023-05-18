
const readline = require('readline-sync');


let nome, sobrenome, idade, assento, origem, destino, valor;


let mapaAssentos = [];


let assentosOcupados = 0;
const TOTAL_ASSENTOS = 24;


function exibirMenu() {
  console.log("- - - - - - - - - - - - - - - - - - -");
  console.log('\n*** MENU ***');
  console.log('1 - Comprar Passagem');
  console.log('2 - Consultar Voos');
  console.log('3 - Exibir Mapa de Assentos');
  console.log('4 - Emitir Ticket');
  console.log('0 - Encerrar Programa');
  console.log("- - - - - - - - - - - - - - - - - - -");
}


function comprarPassagem() {
  console.log('\n*** Comprar Passagem ***');

  nome = readline.question('Nome: ');
  sobrenome = readline.question('Sobrenome: ');
  idade = parseInt(readline.question('Idade: '));
  assento = readline.question('Assento (ex: A1): ').toUpperCase();
  origem = readline.question('Origem: ').toUpperCase();
  destino = readline.question('Destino: ').toUpperCase();

  if (!mapaAssentos[assento] && assento.match(/^[AB][1-9]|1[0-2]$/)) {

    mapaAssentos[assento] = 'X';
    assentosOcupados++;

   
    if (idade < 18) {
      valor = 50;
    } else if (idade >= 60) {
      valor = 100;
    } else {
      valor = 75;
    }

    
    console.log('\n*** Resumo da Compra ***');
    console.log(`Nome: ${nome} ${sobrenome}`);
    console.log(`Idade: ${idade}`);
    console.log(`Assento: ${assento}`);
    console.log(`Origem: ${origem}`);
    console.log(`Destino: ${destino}`);
    console.log(`Valor: R$ ${valor.toFixed(2)}`);
  } else {
    console.log('\nAssento inválido ou ocupado!');
  }
}


function consultarVoos() {
  console.log('\n*** Consultar Voos ***');
  console.log('Voos disponíveis:');
  console.log('1. São Paulo (GRU) -> Rio de Janeiro (GIG) - 09:00');
  console.log('2. Braislia (GIG) -> China (GRU) - 15:00');
  console.log('3. São Paulo (GRU) -> India (CNF) - 16:00');
  console.log('4. Belo Horizonte (CNF) -> Australia (GRU) - 17:00');
}


function exibirMapaAssentos() {
  console.log('\n*** Mapa de Assentos ***');

  
  for (let i = 1; i <= 12; i++) {
    let linhaA = `A${i}: ${mapaAssentos['A' + i] || '-'}`;
    let linhaB = `B${i}: ${mapaAssentos['B' + i] || '-'}`;
    console.log(`${linhaA}\t\t${linhaB}`);
  }

  
  console.log(`\nAssentos Disponíveis: ${TOTAL_ASSENTOS - assentosOcupados}`);
  console.log(`Assentos Ocupados: ${assentosOcupados}`);
}


function emitirTicket() {
  console.log('\n*** Emitir Ticket ***');

  
  if (!nome) {
    console.log('Nenhuma passagem vendida!');
    return;
  }

  
  console.log('===============================');
  console.log('      Companhia Aérea XYZ      ');
  console.log('===============================');
  console.log(`Nome: ${nome} ${sobrenome}`);
  console.log(`Idade: ${idade}`);
  console.log(`Assento: ${assento}`);
  console.log(`Origem: ${origem}`);
  console.log(`Destino: ${destino}`);
  console.log(`Valor: R$ ${valor.toFixed(2)}`);
  console.log('===============================');
}


let opcao;
do {
  exibirMenu();
  opcao = parseInt(readline.question('Opção: '));
  switch (opcao) {
    case 1:
      comprarPassagem();
      break;
    case 2:
      consultarVoos();
      break;
    case 3:
      exibirMapaAssentos();
      break;
    case 4:
      emitirTicket();
      break;
    case 0:
      console.log('\nPrograma encerrado!');
      break;
    default:
      console.log('\nOpção inválida!');
  }
} while (opcao !== 0);