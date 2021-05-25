import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import schema from './graphql/schemasMap'

const PORT = 4105
// Entry point of the server
const app = express()
const server = new ApolloServer({
    schema
})

server.applyMiddleware({app, path: '/graphql'})
app.listen(PORT, () => {
    console.log(`\n GraphQL is running on http://localhost:${PORT}/graphql`)
})