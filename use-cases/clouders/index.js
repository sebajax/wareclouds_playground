// Module Imports
import makeListarClouders from './listarClouders';
import makeGuardarClouder from './guardarClouder';
import makeListarClouder from './listarClouder';
import makeListarClouderById from './listarClouderById';
import CloudersDB from '../../data-access/clouders';

const listarClouder = makeListarClouder({ CloudersDB });
const guardarClouder = makeGuardarClouder({ CloudersDB });
const listarClouders = makeListarClouders({ CloudersDB });
const listarClouderById = makeListarClouderById({ CloudersDB });

const clouderService = Object.freeze({
  listarClouders,
  guardarClouder,
  listarClouder,
  listarClouderById,
});

export default clouderService;
export {
  listarClouders,
  guardarClouder,
  listarClouder,
  listarClouderById,
};
