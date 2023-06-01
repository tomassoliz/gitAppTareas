
const { writeFileSync, readFileSync } = require("fs");

const path = require("path");



const leerJSON = () =>
JSON.parse(readFileSync(path.join(__dirname, "tareas.json"), "utf-8"));
const escribirJSON = (tareas) =>
writeFileSync(path.join(__dirname, "tareas.json"),
JSON.stringify(tareas, null, 3),"utf-8");

const eliminar =  function (titulo) {
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
module.exports = eliminar
