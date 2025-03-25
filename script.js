document.addEventListener('DOMContentLoaded', function () {
    const accessAppStreamBtn = document.getElementById('accessAppStreamBtn');
    const appStreamIframe = document.getElementById('appStreamIframe');

    // Example cookies - Replace these with your actual cookies.
    const cookies = [
        "session_token=your-session-token-here",  // Replace with your actual session token
        "another_cookie_name=another_value",     // Replace with any other necessary cookies
        // Add more cookies if needed
    ];

    // Function to set cookies for the target domain (AppStream)
    function setCookies(cookies) {
        cookies.forEach(cookie => {
            document.cookie = cookie + "; path=/; domain=appstream2.us-east-1.aws.amazon.com; secure; SameSite=None";
        });
    }

    // Function to access AppStream
    accessAppStreamBtn.addEventListener('click', function () {
        // Inject the cookies before showing the iframe
        setCookies(cookies);

        // Set the iframe's src to AppStream's URL to load the authenticated page
        appStreamIframe.src = "https://appstream2.us-east-1.aws.amazon.com";
        appStreamIframe.style.display = "block";  // Make the iframe visible
    });
});
