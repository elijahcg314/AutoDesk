// Check if AWS is loaded correctly
if (typeof AWS === "undefined") {
    console.error("AWS SDK is not defined. Please make sure the AWS SDK is loaded properly.");
} else {
    console.log("AWS SDK loaded successfully");
}

// Initialize the AWS SDK (Make sure to replace with your own configuration)
AWS.config.update({
    region: 'us-east-1', // Replace with your AWS region
    accessKeyId: 'YOUR_ACCESS_KEY', // Replace with your AWS Access Key
    secretAccessKey: 'YOUR_SECRET_KEY' // Replace with your AWS Secret Key
});

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

// Function to open the AppStream page in a new tab
function openAppStreamPage() {
    const appStreamWindow = window.open("https://appstream2.us-east-1.aws.amazon.com", "_blank");

    if (appStreamWindow) {
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
