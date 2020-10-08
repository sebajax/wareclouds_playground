// Module Imports
import mongoose from 'mongoose';

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

async function listarClouders() {
  return Clouders.find({});
}

async function listarClouder({ clouderName }) {
  console.log('model', clouderName);
  return Clouders.find({ nombre: clouderName });
}

async function listarClouderById({ clouderId }) {
  return Clouders.findById(clouderId);
}

async function guardarClouder({ clouder }) {
  const newClouder = new Clouders(clouder);
  return newClouder.save();
}

export default { listarClouders, guardarClouder, listarClouder };
