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
    let blogID = $(".editDashBtn").data('id')
    document.location.replace(`/dashboard/edit/${blogID}`);
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