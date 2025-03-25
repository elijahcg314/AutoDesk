document.addEventListener('DOMContentLoaded', function() {
    // Ensure the AWS SDK is loaded
    if (typeof AWS === 'undefined') {
        console.error('AWS SDK is not loaded');
        return; // Exit early if AWS is not loaded
    }

    // Configure AWS SDK (using Cognito as an example)
    AWS.config.update({
        region: 'us-east-1', // Your AWS Region
        credentials: new AWS.CognitoIdentityCredentials({
            IdentityPoolId: 'your-identity-pool-id' // Replace with your Identity Pool ID
        })
    });

    // Example Cognito authentication function
    const cognito = new AWS.CognitoIdentityServiceProvider();

    function authenticate() {
        // Make sure to use the correct AuthFlow
        const params = {
            AuthFlow: 'USER_PASSWORD_AUTH', // Correct flow for username/password auth
            ClientId: 'your-client-id', // Your Cognito App Client ID
            AuthParameters: {
                USERNAME: 'test@example.com', // Username
                PASSWORD: 'password123' // Password
            }
        };

        cognito.initiateAuth(params, function(err, data) {
            if (err) {
                console.error('Authentication failed:', err);
            } else {
                console.log('Authentication success:', data);
            }
        });
    }

    // Add event listener to authorize button
    const authorizeBtn = document.getElementById('authorizeBtn');
    if (authorizeBtn) {
        authorizeBtn.addEventListener('click', authenticate);
    }
});
