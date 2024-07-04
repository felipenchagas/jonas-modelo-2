document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        console.log('8 seconds passed');
        var messageOuter = document.getElementById('whatswidget-conversation-message-outer');
        messageOuter.style.display = 'block';
        setTimeout(function() {
            messageOuter.classList.add('show');
        }, 100); // Slight delay to trigger CSS transition
    }, 8000); // 8000 milliseconds = 6 seconds
});
