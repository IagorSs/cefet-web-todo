class Tarefa {
  constructor(nome, categoria, realizada=false) {
    this.nome = nome;
    this.categoria = categoria;
    this.realizada = realizada;
  }
}

const tarefas = [
  new Tarefa('Comprar leite', 'compras'),
  new Tarefa('Escutar chimbinha', 'lazer', true)
];
