class Tarefa {
  static #listaTarefas = document.getElementById('lista-tarefas');

  constructor(nome, categoria, realizada=false) {
    this.nome = nome;
    this.categoria = categoria;
    this.realizada = realizada;
  }

  adicionaNaPagina(retido=false) {
    const itemTarefa = document.createElement('li');
    itemTarefa.classList.add('item-tarefa');
    itemTarefa.classList.add(`categoria-${this.categoria}`);
    itemTarefa.innerText = this.nome;
    
    if(this.realizada) itemTarefa.classList.add('marcado');
    if(retido) itemTarefa.classList.add(`retido-no-filtro`);

    Tarefa.#listaTarefas.appendChild(itemTarefa);
  }
}

const tarefas = [
  new Tarefa('Comprar leite', 'compras'),
  new Tarefa('Escutar chimbinha', 'lazer', true)
];

const listaTarefas = document.getElementById('lista-tarefas');
const resetListaTarefas = () => listaTarefas.innerHTML = "";

resetListaTarefas();
tarefas.forEach(item => item.adicionaNaPagina());

const incluirNovaTarefa = document.getElementById('incluir-nova-tarefa');
const novaTarefaNome = document.getElementById('nova-tarefa-nome');
const novaTarefaCategoria = document.getElementById('nova-tarefa-categoria');

incluirNovaTarefa.addEventListener('click', () => {
  const tarefa = new Tarefa(novaTarefaNome.value, novaTarefaCategoria.value);
  tarefas.push(tarefa);

  tarefa.adicionaNaPagina();

  novaTarefaNome.value = "";
  novaTarefaNome.focus();
});

const filtroDeCategoria = document.getElementById('filtro-de-categoria');
filtroDeCategoria.addEventListener('change', ({ target: { value } }) => {
  resetListaTarefas();

  tarefas.forEach(tarefa => {
    const isRetido = value !== '' ? tarefa.categoria !== value : false;

    tarefa.adicionaNaPagina(isRetido);
  });
})
