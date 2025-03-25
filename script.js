document.getElementById('consent-btn').addEventListener('click', () => {
    // Inject cookies when consent is given
    injectCookies();

    // Show the iframe and load the website
    document.getElementById('iframe-container').style.display = 'block';
    document.getElementById('appstream-iframe').src = "https://appstream2.us-east-1.aws.amazon.com";
});
