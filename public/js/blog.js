let commentEl = $('#commentContent');

$('#submitComment').click(async () => {
    let commentContent = commentEl.val().trim();

    if (commentContent) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({ commentContent }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('failed to add comment');
        }
    }
})

$(".editDashBtn").click(async () => {
    console.log("edit button clicked");
    let blogID = $(".editDashBtn").data('id');
    console.log(blogID);
    const response = await fetch('/api/blog', {
        method: 'PUT',
        body: JSON.stringify({}),
        headers: { 'Content-Type': 'application/json' },
    });
})

$(".deleteDashBtn").click(async () => {
    console.log("delete button clicked")
    let blogID = $(".deleteDashBtn").data('id')
    console.log(blogID)
    const response = await fetch(`/api/blog/${blogID}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('failed to add comment');
    }
})