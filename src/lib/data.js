
const users = [
    {
        id: 1,
        name: "Jhon"
    },
    {
        id: 1,
        name: "Jane"
    },
];

const posts = [
    {
        id: 1,
        title: "Post 1",
        body: "This is a random text from a post",
        userId: 1
    },
    {
        id: 2,
        title: "Post 1",
        body: "This is a random text from a post",
        userId: 2,
    },
    {
        id: 3,
        title: "Post 1",
        body: "This is a random text from a post",
        userId: 3,
    },
    {
        id: 4,
        title: "Post 1",
        body: "This is a random text from a post",
        userId: 4,
    },
];


export const getPosts = async () => {
    return posts;
}

export const getPost = async (id) => {
    const post = posts.find((post) => post.id === parseInt(id));
    return post;
    
}

export const getUser = async (id) => {
    return users.find((user) => user.id === parseInt(id));
}