const { writeFileSync, readFileSync } = require("fs");
const Tarea = require("./Tarea");
const path = require("path");
require('colors');


const leerJSON = () =>
  JSON.parse(readFileSync(path.join(__dirname, "tareas.json"), "utf-8"));
const escribirJSON = (tareas) =>
  writeFileSync(path.join(__dirname, "tareas.json"),
    JSON.stringify(tareas, null, 3),"utf-8");

const filtrar = function(estado) {
    const estadoFiltrado = estado.toLowerCase();
    const tareasFiltradas = this.tareas.filter(
      (tarea) => tarea.estado.toLowerCase() === estadoFiltrado
    );
    this.listar(tareasFiltradas);
  }
module.exports = filtrar