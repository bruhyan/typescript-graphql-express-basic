import { IResolvers } from 'graphql-tools'
import { merge } from 'lodash' // run 'npm install --save lodash' and 'npm install -D @types/lodash' to access merge function and its types
import { UserResolvers } from './resolvers/UserResolver'

// a resolver map is used to combine all the different resolvers under /resolvers to a single point of access --> to be used by graphql server
const resolverMap: IResolvers = merge(UserResolvers)
export default resolverMap