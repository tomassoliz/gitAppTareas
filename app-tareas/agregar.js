const { writeFileSync } = require("fs");
const Tarea = require("./Tarea");
const path = require("path");

const escribirJSON = (tareas) =>
  writeFileSync(path.join(__dirname, "tareas.json"),
    JSON.stringify(tareas, null, 3), "utf-8");

const agregar = function (titulo) {
  const tareas = this.tareas;
  let tarea = new Tarea(titulo);
  tareas.push(tarea);
  escribirJSON(tareas);
  return `Se agregó "${titulo}" correctamente`;
}

module.exports = agregar