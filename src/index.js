import { GraphQLServer } from "graphql-yoga";

import data from "./data";
import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
import Post from "./resolvers/Post";
// import User from "./resolvers/User";
// import Comment from "./resolvers/Comment";

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql", // ? PATH relative to the ROOT of your app
  resolvers: {
    Query,
    Mutation,
    // User,
    Post
    // Comment
  },
  context: {
    data: data
  }
});

server.start(() => {
  console.log("The server is running!!");
});
