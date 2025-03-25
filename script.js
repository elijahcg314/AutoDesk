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

            // Once cookies are injected, show the iframe
            const iframe = document.getElementById("appstreamIframe");
            iframe.src = "https://appstream2.us-east-1.aws.amazon.com/#/multi-stack";
            iframe.style.display = "block"; // Show iframe
            console.log("Iframe displayed"); // Debugging: Ensure iframe is shown
            document.querySelector(".consent-btn").style.display = "none"; // Hide consent button
        })
        .catch(err => {
            console.error("Error loading cookies:", err); // Debugging: Check if cookies are loading correctly
        });
});
