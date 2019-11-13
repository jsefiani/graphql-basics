let users = [
  {
    id: "1",
    name: "Jawad",
    email: "johny@hotmail.com",
    age: 23
  },
  {
    id: "2",
    name: "Nawal",
    email: "john.doe@hotmail.com",
    age: 22
  },
  {
    id: "3",
    name: "Anis",
    email: "ann.lemmens@hotmail.com",
    age: 17
  }
];

let posts = [
  {
    id: "1",
    title: "Hello world",
    body: "This is a 'Hello world' blog post!",
    published: true,
    author: "1"
  },
  {
    id: "2",
    title: "Learning React",
    body: "This is a 'Hello world' blog post!",
    published: true,
    author: "1"
  },
  {
    id: "3",
    title: "10 Javascript questions that will make you go crazy!",
    body: "This is a 'Hello world' blog post!",
    published: true,
    author: "1"
  }
];

let comments = [
  {
    id: "102",
    description: "Funny post!",
    author: "2",
    post: "2"
  },
  {
    id: "103",
    description: "Jow jow!",
    author: "2",
    post: "2"
  },
  {
    id: "104",
    description: "Shit!",
    author: "2",
    post: "2"
  },
  {
    id: "105",
    description: "Fucking crazy!!",
    author: "2",
    post: "2"
  }
];

const data = {
  users,
  posts,
  comments
};

export default data;
