let state = {
    notesPage: [{ title: 'GreenLand', id: 1, messages: ['super film', 'normal film'] },
    { title: 'A man called Otto', id: 2, messages: ['very interesting', 'good film'] },
    { title: 'Totally killer', id: 3, messages: ['super film'] },
    { title: 'The sea of trees', id: 4, messages: ['I`ll look later', 'good film',] },
    { title: 'J.Edgar', id: 5, messages: ['bad film'] }],

    profilePage: {
        posts: []
    },


}

export default state;

export let addPost = (postMessage) => {
    let newPost = {
        id: 1,
        message: postMessage,
        likesCount: 0,
    }

    state.profilePage.posts.push(newPost);
}