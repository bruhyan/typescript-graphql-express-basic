// Allow for import .graphql files in your app.
// Run 'npm install --save graphql-import-node'
import 'graphql-import-node' 
import { makeExecutableSchema } from 'graphql-tools'
import { GraphQLSchema } from 'graphql'

import resolvers from './resolversMap'
// User schema
import * as userTypeDef from './schemas/user.gql'
// A required schema for merging
import * as emptyTypeDef from './schemas/empty.gql'


// similar to resolversMap, this is to combine all schemas into a single point of access --> to be used by graphql server
const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: [emptyTypeDef, userTypeDef], //note that your empty type def must be first in the array for extension to work
    resolvers
})

export default schema