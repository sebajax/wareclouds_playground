export default function makeGuardarClouder({ cloudersModel }) {
  return async function guardarClouder({ clouder }) {
    console.log('Entre aca y tengo', clouder);
    return cloudersModel.guardarClouder({ clouder });
  };
}
