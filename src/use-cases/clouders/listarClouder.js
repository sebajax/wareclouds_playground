export default function makeListarClouder({ cloudersModel }) {
  return async function listarClouder({ clouderName }) {
    console.log("use_case", clouderName);
    //return cloudersModel.listarClouder({ clouderName });
  };
}
