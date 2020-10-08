// Module Imports
import chai from 'chai';
import { listarClouders } from '../../services/clouders';
// Mocks
import guardarClouderRequest from '../../mocks/clouders/request/guardarClouder_request.json';
import guardarClouderResponse from '../../mocks/clouders/response/guardarClouder_response.json';

chai.should();

// TEST #listarClouders()
describe('#listarClouders()', () => {
  it('Deberia retornar todos los clouders que estan en la BD actualmente', async () => {
    const clouders = await listarClouders();
    console.log('Ver que tiene clouders - ', clouders);
  });
});