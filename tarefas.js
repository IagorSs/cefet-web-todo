class Tarefa {
  #listaTarefas = document.getElementById('lista-tarefas');

  constructor(nome, categoria, realizada=false) {
    this.nome = nome;
    this.categoria = categoria;
    this.realizada = realizada;
  }

  adicionaNaPagina() {
    const itemTarefa = document.createElement('li');
    itemTarefa.classList.add('item-tarefa');
    itemTarefa.classList.add(`categoria-${this.categoria}`);
    itemTarefa.innerText = this.nome;

    if(this.realizada) itemTarefa.classList.add('marcado');

    this.#listaTarefas.appendChild(itemTarefa);
  }
}

const tarefas = [
  new Tarefa('Comprar leite', 'compras'),
  new Tarefa('Escutar chimbinha', 'lazer', true)
];

const listaTarefas = document.getElementById('lista-tarefas');
listaTarefas.innerHTML = "";

tarefas.forEach(item => item.adicionaNaPagina());
