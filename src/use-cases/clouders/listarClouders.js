export default function makeListarClouders({ CloudersDB }) {
  return async function listarClouders() {
    return CloudersDB.findAll();
  };
}
