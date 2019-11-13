const Query = {
  users(parent, args, ctx, info) {
    if (args.name)
      return ctx.data.users.filter(user =>
        user.name.toLowerCase().includes(args.name.toLowerCase())
      );
    return ctx.data.users;
  },
  posts(parent, args, ctx, info) {
    console.log({ parent, ctx, info });
    if (args.query)
      return ctx.data.posts.filter(post =>
        post.title.toLowerCase().includes(args.query.toLowerCase())
      );
    return ctx.data.posts;
  },
  comments(parent, args, ctx, info) {
    return ctx.data.comments;
  },
  user() {
    return {
      id: "jljcxcxjs878",
      name: "Jawad",
      email: "jawad.sefiani@hotmail.com",
      age: 23
    };
  },
  post() {
    return {
      id: "jljslqjs878",
      title: "How set up a Node project",
      body: "First install the necessary dependencies...",
      published: true
    };
  }
};

export default Query;
