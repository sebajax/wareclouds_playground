export default function makeClouderDb({ Clouders }) {
  async function findAll() {
    const allClouders = await Clouders.find();
    return allClouders;
  }
  async function findById({ clouderId }) {
    const clouder = await Clouders.find({ _id: clouderId });
    return clouder;
  }
  async function insert({ clouder }) {
    const newClouder = new Clouders(clouder);
    return newClouder.save();
  }
  return Object.freeze({
    findAll,
    findById,
    insert,
  });
}
