// script.js

document.getElementById("consent-button").addEventListener("click", function() {
  console.log("Consent button clicked");

  // Simulate loading cookies after consent
  loadCookies();

  // Display the iframe once consent is given
  document.getElementById("iframe").style.display = "block";
  document.getElementById("iframe").src = "https://signin.aws.amazon.com";  // Change to the actual URL you want to load

  // Optionally, inject cookies before loading the iframe
  console.log("Iframe displayed");
});

function loadCookies() {
  // Simulating setting cookies after consent
  const cookies = [
    { name: "JSESSIONID", value: "123456" },
    { name: "aws-prism-private-beta-allowlisted", value: "true" },
    { name: "aws-userInfo-signed", value: "userInfoValue" }
    // Add all your cookies here
  ];

  cookies.forEach(cookie => {
    document.cookie = `${cookie.name}=${cookie.value}; path=/; domain=yourdomain.com`; // Set cookies on the same domain
    console.log(`Cookie set: ${cookie.name}`);
  });
}
