const { ObjectId } = require('mongodb');

class MongoDbRepository {
  contructor(db, collection) {
    this.db = db;
    this.collection = db.collection(collection);
  }

  async list(query) {
    return this.collection.find(query).toAraay();
  }

  async get(query = {}, options = {}) {
    return this.collection.findOne(query, options);
  }

  async getById(id) {
    const _id = ObjectId.createFromHexString(id);
    return this.get({ _id });
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
