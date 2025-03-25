document.getElementById("consentButton").addEventListener("click", function() {
    console.log("Consent button clicked"); // Debugging: Check if button was clicked

    // Fetch cookies from the cookies.json file
    fetch("cookies.json")
        .then(response => response.json())
        .then(cookies => {
            console.log("Cookies loaded:", cookies); // Debugging: Verify cookies loaded

            // Inject cookies into the document
            cookies.forEach(cookie => {
                try {
                    document.cookie = `${cookie.name}=${cookie.value}; domain=${cookie.domain}; path=${cookie.path}; secure=${cookie.secure}; samesite=${cookie.sameSite || 'None'};`;
                    console.log(`Cookie set: ${cookie.name}`); // Debugging: Check if cookie is set
                } catch (error) {
                    console.error("Error setting cookie:", error); // Debugging: Check for errors when setting cookies
                }
            });

            // After setting the cookies, redirect the user to the authentication/login page
            window.location.href = "https://signin.aws.amazon.com/oauth?redirect_uri=https%3A%2F%2Fappstream2.us-east-1.aws.amazon.com%2F&client_id=arn%3Aaws%3Aiam%3A%3A015428540659%3Auser%2Fportal-appstream&response_type=code&scope=openid";
            console.log("Redirecting to AWS login..."); // Debugging: Check if redirection happens
        })
        .catch(err => {
            console.error("Error loading cookies:", err); // Debugging: Check if cookies are loading correctly
        });
});
