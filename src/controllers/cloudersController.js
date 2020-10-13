// Module Imports
import crypto from 'crypto';
import {
  listarClouders,
  guardarClouder,
  listarClouder,
} from '../use-cases/clouders';

function createHmac(token, rawBody) {
  const hash = crypto
    .createHmac('sha256', token)
    .update(rawBody)
    .digest('base64')
    .trim();
  return (hash);
}

// Lista todo los clouders existentes en BD
async function makeListarClouders(req, res) {
  try {
    const clouders = await listarClouders();
    console.log(clouders);
    return res.status(200).json(clouders);
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
}

// Almacenamos un clouder en la BD
async function makeGuardarClouder(req, res) {
  try {
    const clouder = req.body;
    console.log(clouder);
    const newClouder = await guardarClouder({ clouder });
    return res.status(200).json(newClouder);
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
}

// Listar un clouder por nombre
async function makeListarClouder(req, res) {
  try {
    const clouderName = req.body;
    console.log(clouderName);
    const clouder = await listarClouder({ clouderName });
    console.log('Que tiene clouder', clouder);
    return res.status(200).json(clouder);
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
}

async function makeHmac256(req, res) {
  console.log(req.rawBody);
  const token = 'cualquiercosa';
  const hmac = createHmac(token, req.rawBody);
  console.log(hmac);
  return res.status(200).json(req.body);
}

export default {
  makeListarClouders,
  makeGuardarClouder,
  makeListarClouder,
  makeHmac256,
};
