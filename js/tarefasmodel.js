let tarefas = [];
let idProximaTarefa = 1;

const PRIORIDADES = Object.freeze({
    BAIXA: 'baixa',
    MEDIA: 'media',
    ALTA: 'alta'
});

const STATUS = Object.freeze({
    TODO: "todo",
    DOING: "doing",
    DONE:   "done"
})

export function getTarefas(){
    return tarefas;
}

export function criarTarefa(tarefa){
    tarefa.id = idProximaTarefa++;
    tarefas.push(tarefa);
    
}