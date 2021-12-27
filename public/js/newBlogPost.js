let blogTitleEl = $('#blogTitle');
let blogContentEl = $('#blogContents');

$('#createBlog').click(async () => {
    console.log('create clicked')
    let blogTitle = blogTitleEl.val().trim();
    let blogContent = blogContentEl.val().trim();

    if (blogTitle && blogContent) {
        const response = await fetch('/api/blog/new', {
            method: 'POST',
            body: JSON.stringify({ blogTitle, blogContent }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard/');
        } else {
            alert('failed to add comment');
        }
    }
})



