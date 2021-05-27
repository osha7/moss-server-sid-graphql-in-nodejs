const nanoid = require("nanoid");

const createPetModel = (db) => {
    return {
        findMany(filter) {
            return db.get('pet')
            .filter(filter)
            .value()
        },

        findOne(filter) {
            return db.get('pet')
            
        }
    };
};

module.exports = createPetModel 