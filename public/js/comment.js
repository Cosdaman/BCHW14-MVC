let commentEl = $('#commentContent');

$('#submitComment').click(async () => {
    commentContent = commentEl.val().trim();
    console.log(commentContent)
    console.log('submit comment button')

    if (commentContent) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({ commentContent }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to sign up.');
        }
    }
})
