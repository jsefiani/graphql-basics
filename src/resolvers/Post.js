const Post = {
  author(parent, args, ctx, info) {
    return ctx.data.users.find(user => user.id === parent.author);
  },
  comments(parent, args, ctx, info) {
    return ctx.data.comments.filter(comment => comment.post === parent.id);
  }
},

export default Post