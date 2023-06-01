const filtrar = function(estado) {
    const estadoFiltrado = estado.toLowerCase();
    const tareasFiltradas = this.tareas.filter(
      (tarea) => tarea.estado.toLowerCase() === estadoFiltrado
    );
    this.listar(tareasFiltradas);
  }
module.exports = filtrar