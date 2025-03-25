document.getElementById("consentButton").addEventListener("click", function() {
    console.log("Consent button clicked");

    // Fetch cookies from cookies.json
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

            // Once cookies are set, show the iframe
            const iframe = document.getElementById("appstreamIframe");
            iframe.style.display = "block";  // Show the iframe
            document.querySelector(".consent-btn").style.display = "none";  // Hide the consent button
        })
        .catch(err => {
            console.error("Error loading cookies:", err);
        });
});
