function getPosts() {
    const endpoint = `https://www.googleapis.com/blogger/v3/blogs/889477318756356783/posts?key=AIzaSyDAvALRCSwko8N6rcblVhnRTTS7uK7Bhp4`;
    const params = new URLSearchParams(window.location.href);
    const killer = params.get('killer');
    console.log(killer)

    fetch(`${endpoint}&labels=oi`)
        .then(res => res.json())
        .then(console.log)
        .catch(console.error) 
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('fetching posts...')
    getPosts();
})