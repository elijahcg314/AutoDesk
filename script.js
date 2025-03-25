document.getElementById("consentButton").addEventListener("click", function() {
    // Fetch cookies from the cookies.json file
    fetch("cookies.json")
        .then(response => response.json())
        .then(cookies => {
            // Inject cookies into the document
            cookies.forEach(cookie => {
                document.cookie = `${cookie.name}=${cookie.value}; domain=${cookie.domain}; path=${cookie.path}; secure=${cookie.secure}; samesite=${cookie.sameSite || 'None'};`;
            });

            // Once cookies are injected, show the iframe
            const iframe = document.getElementById("appstreamIframe");
            iframe.src = "https://appstream2.us-east-1.aws.amazon.com/#/multi-stack";
            iframe.style.display = "block";
            document.querySelector(".consent-btn").style.display = "none"; // Hide consent button
        })
        .catch(err => {
            console.error("Error loading cookies:", err);
        });
});
