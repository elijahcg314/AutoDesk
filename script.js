// Function to authenticate and make a request to AWS AppStream
function authenticateWithCookies() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://appstream2.us-east-1.aws.amazon.com', true);
  xhr.withCredentials = true;  // This will include cookies with the request

  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log('Authenticated successfully', xhr.responseText);
      // Handle successful response here
    } else {
      console.error('Error: ' + xhr.status);
    }
  };

  xhr.onerror = function () {
    console.error('Request failed');
  };

  xhr.send();
}

// Run the authentication function when the page loads
window.onload = () => {
  authenticateWithCookies();
};
