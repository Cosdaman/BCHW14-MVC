let blogTitleEl = $('#blogTitle');
let blogContentEl = $('#blogContents');

$('#createBlog').click(async () => {
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

$('#editBlog').click(async () => {
    console.log('edit blog click')
    let blogId = $('#editBlog').data('id')
    let blogTitle = blogTitleEl.val().trim();
    let blogContent = blogContentEl.val().trim();

    if (blogTitle && blogContent) {
        const response = await fetch(`/api/blog/${blogId}`, {
            method: 'PUT',
            body: JSON.stringify({ blogTitle, blogContent }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace(`/blog/${blogId}`);
        } else {
            alert('failed to add comment');
        }
    }
})

