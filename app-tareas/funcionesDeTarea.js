const { readFileSync } = require("fs");
const path = require("path");
require('colors');

const leerJSON = () =>
  JSON.parse(readFileSync(path.join(__dirname, "tareas.json"), "utf-8"));

module.exports = {
  tareas: leerJSON(),
  listar: function (tareas = this.tareas) {
    tareas.forEach(({ titulo, estado }, index) => {
      let estadoColor =
        estado === 'pendiente'
          ? estado.blue
          : estado === 'en progreso'
            ? estado.yellow
            : estado === 'terminada'
              ? estado.green
              : estado;
      console.log(`${index + 1}-. ${titulo} -----> ${estadoColor}`);
    });
  },
  filtrar: require('./filtrar'),
  agregar: require('./agregar'),
  eliminar: require('./eliminar'),
  editar: require('./editar'),
  mensajeError: require('./mensajeError')
};
