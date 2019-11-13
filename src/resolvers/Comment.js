const Comment = {
  author(parent, args, ctx, info) {
    return ctx.data.users.find(user => user.id === parent.author);
  },
  post(parent, args, ctx, info) {
    return ctx.data.posts.find(post => post.id === parent.post);
  }
};

export default Comment;
