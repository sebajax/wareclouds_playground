export default function makeListarClouderById({ clouderModel }) {
  return async function listarClouderById({ clouderId }) {
    return clouderModel.listarClouderById(clouderId);
  };
}
