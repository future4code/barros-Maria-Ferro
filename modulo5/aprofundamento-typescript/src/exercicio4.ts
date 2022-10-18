type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// Para transpilar esse arquivo, eu executaria o comando tsc exercicio4.ts;
// Se estivesse dentro de uma pasta src, eu faria tsc ./src/exercicio4.ts;
// O comando tsc transpila todos os arquivos encontrados com a extensão .ts, mas também podemos executar a transpilação de mais que um arquivo de uma vez, adicionado o nome dos arquivos com um espaço após o tsc.