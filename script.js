document.getElementById("consentButton").addEventListener("click", function() {
    console.log("Consent button clicked");

    // Fetch cookies from the cookies.json file
    fetch("cookies.json")
        .then(response => response.json())
        .then(cookies => {
            console.log("Cookies loaded:", cookies);

            // Inject cookies into the document
            cookies.forEach(cookie => {
                try {
                    document.cookie = `${cookie.name}=${cookie.value}; domain=${cookie.domain}; path=${cookie.path}; secure=${cookie.secure}; samesite=${cookie.sameSite || 'None'};`;
                    console.log(`Cookie set: ${cookie.name}`);
                } catch (error) {
                    console.error("Error setting cookie:", error);
                }
            });

            // Open the authentication page in a new tab
            const authUrl = "https://signin.aws.amazon.com/oauth?redirect_uri=https%3A%2F%2Fappstream2.us-east-1.aws.amazon.com%2F&client_id=arn%3Aaws%3Aiam%3A%3A015428540659%3Auser%2Fportal-appstream&response_type=code&scope=openid";
            window.open(authUrl, "_blank");
            console.log("Redirecting to AWS login...");
        })
        .catch(err => {
            console.error("Error loading cookies:", err);
        });
});
