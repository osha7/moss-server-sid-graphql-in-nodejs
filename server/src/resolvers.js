// This is the resolvers for your schema
// The resolvers must match the type definitions in your schema

//try not to import at the top of the resolvers,
// instead pass everything in via context(ex: line 16)
// then have complete control in mocking them out

module.exports = {
    Query: {
        pets(_, {input}, ctx) {
            return ctx.models.Pet.findMany()
        },
        pets(_, {input}, ctx) {
            return ctx.models.Pet.findMany().filter(pet => {
                return pet.type === input.type
            })
        },
        
    },
    // Query: {
    //     demo(_, __, {models}) { // _ -> top level resolver (root level resolver), nothing before it /// 2nd arg -> 'arguments' where clients send variables with queries, next arg is contect object
    //         models.Pet.findMany({})
    //     }
    // },
    // Mutation: {

    // },
    // Pet: {
    //     img(pet) {
    //         return pet.type === 'DOG'
    //         ? 'https://placedog.net/300/300'
    //         : 'http://placekitten.com/300/300'
    //     }
    // },
    // User: {
        
    // }
}


// for query of pets (commented out in schema.js):
// Query: {
//     pets(_, {type}, ctx) { //bc that type is required now in the schema query
//         return ctx.models.Pet.findMany()
//     }
// },