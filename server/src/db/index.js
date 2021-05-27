//create models for db

const low = require('lowdb'); // Tiny local JSON database for small projects 🦉
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('server/src/db/db.json');
const db = low(adapter);

const createPetModel = require('./pet');
const createUserModel = require('./user');

module.exports = {
    models: {
        Pet: createPetModel(db),
        User: createUserModel(db),
    },
    db
};  