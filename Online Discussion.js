// Function to handle posting a user's thought
function postThought() {
    const userPost = document.getElementById('userPost').value.trim();  // Get user input
    
    if (userPost === "") {
        alert("Please enter a thought before posting.");
        return;
    }

    // Create new message container for user post
    const newMessage = document.createElement('div');
    newMessage.classList.add('discussion-message');
    newMessage.innerHTML = `<strong>You:</strong> ${userPost}`;
    document.getElementById('discussionArea').appendChild(newMessage);
    
    // Clear input field
    document.getElementById('userPost').value = "";

    // Add a generic auto-response
    setTimeout(() => {
        const responseMessage = document.createElement('div');
        responseMessage.classList.add('discussion-message');
        responseMessage.innerHTML = `<strong>Support:</strong> Thank you for sharing. You're not alone in this. We're here for you.`;
        document.getElementById('discussionArea').appendChild(responseMessage);
    }, 1000); // Auto-response after 1 second
}
