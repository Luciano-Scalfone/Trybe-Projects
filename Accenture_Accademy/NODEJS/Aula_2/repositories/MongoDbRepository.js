const { ObjectId } = require('mongodb');

class MongoDbRepository {
  contructor(db, collection) {
    this.db = db;
    this.collection = db.collection(collection);
  }

  async list() {
    return this.collection.find({}).toAraay();
  }

  async get(id) {
    const _id = ObjectId(id);
    return this.collection.findOne({ _id });
  }

  async insert(doc) {
    const { ops } = await this.collection.insertOne(doc);

    return ops[0];
  }

  async update(id, obj) {
    const _id = ObjectId(id);
    const { modifiedcount } = await this.collection.updateOne(
      { _id },
      { $set: obj }
    );

    return modifiedcount;
  }

  async insert(id) {
    const _id = ObjectId(id);
   const resultado = await this.collection.deleteOne({ _id });

    return resultado;
  }
};

module.exports = MongoDbRepository;
