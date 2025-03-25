// Function to set cookies
function setCookies(cookies) {
    cookies.forEach(cookie => {
        try {
            document.cookie = `${cookie.name}=${cookie.value}; domain=${cookie.domain}; path=${cookie.path}; secure=${cookie.secure}; samesite=${cookie.sameSite || 'None'};`;
            console.log(`Cookie set: ${cookie.name}`);
        } catch (error) {
            console.error("Error setting cookie:", error);
        }
    });
}

// Function to open the AppStream page
function openAppStreamPage() {
    // Open the URL in a new window or tab
    const appStreamWindow = window.open("https://appstream2.us-east-1.aws.amazon.com", "_blank");

    if (appStreamWindow) {
        // You can call any additional code for tracking or handling interactions here
        console.log("AppStream page opened successfully");
    } else {
        console.error("Failed to open new window/tab.");
    }
}

// Consent button event listener
document.getElementById("consentButton").addEventListener("click", function() {
    console.log("Consent button clicked");

    // Load cookies from cookies.json (adjust this to your use case)
    fetch("cookies.json")
        .then(response => response.json())
        .then(cookies => {
            console.log("Cookies loaded:", cookies);

            // Set cookies before opening the AppStream page
            setCookies(cookies);

            // Open AppStream page in a new window/tab
            openAppStreamPage();
        })
        .catch(err => {
            console.error("Error loading cookies:", err);
        });
});
