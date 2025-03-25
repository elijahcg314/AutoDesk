document.getElementById('consentButton').addEventListener('click', function() {
    // Log the consent button click
    console.log("Consent button clicked");

    // Inject cookies into the page
    cookies.forEach(cookie => {
        document.cookie = `${cookie.name}=${cookie.value}; path=${cookie.path}; domain=${cookie.domain}; secure=${cookie.secure ? 'Secure' : ''}; SameSite=${cookie.sameSite || 'Lax'}`;
        console.log(`Cookie set: ${cookie.name}`);
    });

    // Load iframe content
    const iframe = document.getElementById('appstreamIframe');
    iframe.style.display = 'block'; // Show iframe after consent

    console.log("Iframe displayed");
});
