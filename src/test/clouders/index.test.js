// Module Imports
import chai from 'chai';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import config from '../../config/mongodb.config';

chai.should();

// memory mongo server
let mongoServer;

// TEST before after clouders
describe('UsuariosController API', () => {
  before(async () => {
    mongoServer = new MongoMemoryServer();
    const mongoUri = await mongoServer.getUri();
    await mongoose.connect(mongoUri, config.OPTIONS);
  });
  after(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });
});
