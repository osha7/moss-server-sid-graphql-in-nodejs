const { gql } = require('apollo-server');

//fields in the type aren't always going to be in the schema...it's not always one for one
// schema: models
const typeDefs = gql`
    type User {
        id: ID! 
        username: String!
    }

    type Pet {
        id: ID!
        createdAt: String!
        name: String!
        type: String!
        img: String
    }

    input PetInput {
        id: ID
        name: String
        type: String
    }

    input NewPetInput {
        name: String!
        type: String!
        img: String
    }

    type Query {
        pets(input: PetInput): [Pet]!
        pet(input: PetInput): Pet
    }

    type Mutation {
        newPet(input: NewPetInput!): Pet!
    }
`;

module.exports = typeDefs

// type: ID 9line 7 and 11), even though in the schema.json the id is specified as 'string', ID -> unique identifier

//  type Mutation {
//     newPet(input: NewPetInput!): Pet!  <<--this is saying that if resolver did return (no errors happened) it better return the Pet, if an error did happen, than throw the error
// }

// argumennts 
// type Query {
//     pets(type: String!): [Pet]! // ! -> you have to pass a type
// }
//

// query is the only thing REQUIRED on a schema
