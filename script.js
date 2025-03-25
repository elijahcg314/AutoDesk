// Wait for the document to load fully
document.addEventListener('DOMContentLoaded', function() {
    // Check if AWS SDK has been loaded
    if (typeof AWS === 'undefined') {
        console.error('AWS SDK is not loaded');
        return; // Exit early if AWS is not loaded
    }

    // Initialize AWS SDK (for example, AWS Cognito)
    AWS.config.update({
        region: 'us-east-1', // Your AWS Region
        credentials: new AWS.CognitoIdentityCredentials({
            IdentityPoolId: 'your-identity-pool-id' // Replace with your Identity Pool ID
        })
    });

    // Example function to authenticate
    const cognito = new AWS.CognitoIdentityServiceProvider();

    function authenticate() {
        const params = {
            ClientId: 'your-client-id', // Your Cognito App Client ID
            Username: 'test@example.com', // Username
            Password: 'password123', // Password
        };

        cognito.initiateAuth(params, function(err, data) {
            if (err) {
                console.error('Authentication failed:', err);
            } else {
                console.log('Authentication success:', data);
            }
        });
    }

    // Add event listener to button
    const authorizeBtn = document.getElementById('authorizeBtn');
    if (authorizeBtn) {
        authorizeBtn.addEventListener('click', authenticate);
    }
});
