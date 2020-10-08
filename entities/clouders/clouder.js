export default function builMakeClouder() {
  return function makeClouder({
    nombre,
    telefono,
  } = {}) {
    if (!nombre) {
      throw new Error('Nombre no puede ser vacio');
    }
    if (!telefono) {
      throw new Error('Telefono no puede ser vacio');
    }
    return Object.freeze({
      getNombre: () => nombre,
      getTelefono: () => telefono,
    });
  };
}
