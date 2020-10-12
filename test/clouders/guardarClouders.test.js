// Module Imports
import chai, { should } from 'chai';
import { listarClouders } from '../../use-cases/clouders';
// Mocks
import guardarClouderRequest from '../../mocks/clouders/request/guardarClouder_request.json';
import guardarClouderResponse from '../../mocks/clouders/response/guardarClouder_response.json';

chai.should();

// TEST #listarClouders()
describe('#listarClouders()', () => {
  it('Deberia retornar todos los clouders que estan en la BD actualmente', () => {
    //const clouders = await listarClouders();
    //should(clouders).be.a('object');
    console.log('Ver que tiene clouders - ');
  });
});
