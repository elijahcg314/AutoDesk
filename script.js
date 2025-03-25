// Function to authenticate and make a request to AWS AppStream
function authenticateWithCookies() {
  fetch('https://appstream2.us-east-1.aws.amazon.com', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // You can add other necessary headers here
    },
    credentials: 'include'  // This sends cookies with the request
  })
  .then(response => {
    if (response.ok) {
      return response.json();  // Parse JSON response
    } else {
      throw new Error('Authentication failed or invalid response');
    }
  })
  .then(data => {
    console.log('Authenticated successfully', data);
    // Handle successful response here
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

// Run the authentication function when the page loads
window.onload = () => {
  authenticateWithCookies();
};
