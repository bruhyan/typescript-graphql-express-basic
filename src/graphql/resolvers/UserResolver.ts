import { IResolvers } from 'graphql-tools'
import { AuthenticationResponse, MutationRegisterArgs, QueryLoginArgs } from '../generated'

// business logic is placed here? or in service classes.
export const UserResolvers: IResolvers = {
  Query: {
    async login (_: void, args: QueryLoginArgs): Promise<AuthenticationResponse> { //underscore paramter is placeholder for parent. Full signature for a resolver function is (parent, args, context, info) => {}
      return {
        token: "tokenz"
      }
    }
  },
  Mutation: {
    async register (_: void, args: MutationRegisterArgs): Promise<AuthenticationResponse> {
      return {
        token: "tokenz"
      }
    }
  }
}