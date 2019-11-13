import uuid from "uuid/v4";

const Mutation = {
  createUser(parent, args, ctx, info) {
    console.log({ args });
    const isEmailTaken = ctx.data.users.some(
      user => user.email.toLowerCase() === args.data.email.toLowerCase()
    );

    if (isEmailTaken) throw new Error("Email taken");

    const user = {
      id: uuid(),
      ...args.data
    };

    ctx.data.users.push(user);

    return user;
  },
  deleteUser(parent, args, ctx, info) {
    const isUserExisting = ctx.data.users.some(user => user.id === args.id);

    if (!isUserExisting) throw new Error("Can not delete user");

    let deletedUser = {};

    ctx.data.users = ctx.data.users.filter(user => {
      if (user.id === args.id) {
        deletedUser = user;
      }

      return user.id !== args.id;
    });

    ctx.data.posts = ctx.data.posts.filter(post => {
      const isPostCreatedByUser = post.author === args.id;

      if (isPostCreatedByUser) {
        ctx.data.comments = ctx.data.comments.filter(
          comment => comment.post !== post.id
        );
      }

      return !isPostCreatedByUser;
    });

    ctx.data.comments = ctx.data.comments.filter(
      comment => comment.author !== args.id
    );

    return deletedUser;
  },
  createPost(parent, args, ctx, info) {
    const isUserExisting = ctx.data.users.some(
      user => user.id === args.data.author
    );

    if (!isUserExisting) throw new Error("User does not exist");

    const post = {
      id: uuid(),
      ...args.data
    };

    ctx.data.posts.push(post);

    return post;
  },
  deletePost(parent, args, ctx, info) {
    const isPostExisting = ctx.data.posts.some(post => post.id === args.id);

    if (!isPostExisting) throw new Error("Post does not exist");

    let deletedPost = {};

    ctx.data.posts = ctx.data.posts.filter(post => {
      if (post.id === args.id) deletedPost = post;

      return post.id !== args.id;
    });
    ctx.data.comments = ctx.data.comments.filter(
      comment => comment.post !== args.id
    );

    return deletedPost;
  },
  createComment(parent, args, ctx, info) {
    const isUserExisting = ctx.data.users.some(
      user => user.id === args.data.author
    );
    const isPostExisting = ctx.data.posts.some(
      post => post.id === args.data.post
    );
    const isPostPublished = ctx.data.posts.some(
      post => post.published === true
    );

    if (!isUserExisting) throw new Error("User not found");
    if (!isPostExisting) throw new Error("Post not found");
    if (!isPostPublished) throw new Error("Post not published yet");

    const comment = {
      id: uuid(),
      ...args.data
    };

    ctx.data.comments.push(comment);

    return comment;
  },
  deleteComment(parent, args, ctx, info) {
    const isCommentExisting = ctx.data.comments.some(
      comment => comment.id === args.id
    );

    if (!isCommentExisting) throw new Error("Comment does not exist");

    let deletedComment = {};

    ctx.data.comments = ctx.data.comments.filter(comment => {
      if (comment.id === args.id) deletedComment = comment;

      return comment.id !== args.id;
    });

    return deletedComment;
  }
};

export default Mutation;
