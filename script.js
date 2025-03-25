document.addEventListener('DOMContentLoaded', function() {
    const cookieConsentContainer = document.getElementById('cookie-consent-container');
    const acceptCookiesButton = document.getElementById('accept-cookies');

    // Check if cookies have already been accepted
    if (!getCookie('cookies_accepted')) {
        cookieConsentContainer.style.display = 'flex';
    }

    // Event listener for accepting cookies
    acceptCookiesButton.addEventListener('click', function() {
        // Set the cookie and hide the consent container
        setCookie('cookies_accepted', 'true', 365);
        cookieConsentContainer.style.display = 'none';
    });

    // Function to set a cookie
    function setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    }

    // Function to get a cookie value
    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i].trim();
            if (c.indexOf(nameEQ) === 0) {
                return c.substring(nameEQ.length, c.length);
            }
        }
        return null;
    }

    // Fetch cookies from the cookies.json file
    fetch('cookies.json')
        .then(response => response.json())
        .then(cookies => {
            // You can use the cookies data from the JSON here if needed
            console.log(cookies);
        })
        .catch(error => console.error('Error loading cookies.json:', error));
});
