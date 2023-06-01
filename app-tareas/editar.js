const editar = function (titulo, nuevoEstado) {
    const tareas = this.tareas;
    const tarea = tareas.find((t) => t.titulo === titulo);
    if (tarea) {
      tarea.estado = nuevoEstado;
      escribirJSON(tareas);
      return `Se editó el estado de ${titulo} a ${nuevoEstado} correctamente`;
    } else {
      return `No se encontró la tarea ${titulo}`;
    }
}
module.exports = editar;