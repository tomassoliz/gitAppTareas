const Tarea = require("./Tarea")
const {escribirJSON} = require('./app-tareas/funcionesDeTarea')
const eliminar = function (titulo) {
    const tareas = this.tareas;
    const index = tareas.findIndex((tarea) => tarea.titulo === titulo);
    if (index !== -1) {
      tareas.splice(index, 1);
      escribirJSON(tareas);
      return `Se eliminó ${titulo} correctamente`;
    } else {
      return `No se encontró la tarea ${titulo}`;
    }
  }
module.exports =eliminar
