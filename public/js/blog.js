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

$(".editDashBtn").click(() => {
    console.log("edit button clicked")
})

$(".deleteDashBtn").click(() => {
    console.log("delete button clicked")
})