import { GraphQLClient } from 'graphql-hooks'
import { createClient } from 'graphql-ws'

const client = new GraphQLClient({
  url: 'http://localhost:8000/graphql',
  subscriptionClient: createClient({
    url: 'ws://localhost:8000/graphql'
    /* additional config options */
  })
})

export default client;