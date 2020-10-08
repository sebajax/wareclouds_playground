import chai from 'chai';
import { listarClouders } from '../../services/clouders';

chai.should();

// TEST #listarClouders()
describe('#listarClouders()', () => {
  it('Deberia retornar todos los clouders que estan en la BD actualmente', async () => {
    const clouders = await listarClouders();
    console.log('Ver que tiene clouders - ', clouders);
  });
});
