// Module Imports
import mongoose from 'mongoose';
import makeClouderDb from './cloudersDb';

// Module Consts
const { Schema } = mongoose;

const clouderSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  telefono: String,
});

const Clouders = mongoose.model('Clouders', clouderSchema);

const CloudersDB = makeClouderDb({ Clouders });
export default CloudersDB;
