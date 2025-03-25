document.getElementById('consent-button').addEventListener('click', function() {
    console.log('Consent button clicked');
    
    // Load the iframe and inject cookies after consent
    loadIframeWithCookies();
});

function loadIframeWithCookies() {
    const iframe = document.getElementById('appstream-frame');
    const cookies = getCookies();  // Retrieve cookies from cookies.js
    
    iframe.style.display = 'block';
    iframe.src = 'https://appstream2.us-east-1.aws.amazon.com';  // Target site
    
    // Wait for iframe to load and inject cookies
    iframe.onload = function() {
        console.log('Iframe displayed');
        
        cookies.forEach(cookie => {
            document.cookie = `${cookie.name}=${cookie.value}; domain=${cookie.domain}; path=${cookie.path}; expires=${cookie.expires}; Secure; HttpOnly`;
            console.log(`Cookie set: ${cookie.name}`);
        });
    };
}

function getCookies() {
    // Here, you would manually specify the cookies you want to inject
    // For this example, we'll use the cookies you mentioned
    return [
        { name: 'JSESSIONID', value: 'some-value', domain: '.example.com', path: '/', expires: '2025-01-01T00:00:00' },
        { name: 'aws-prism-private-beta-allowlisted', value: 'some-value', domain: '.example.com', path: '/', expires: '2025-01-01T00:00:00' },
        { name: 'aws-userInfo-signed', value: 'some-value', domain: '.example.com', path: '/', expires: '2025-01-01T00:00:00' }
        // Add all your cookies here
    ];
}
