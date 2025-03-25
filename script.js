document.getElementById('consent-button').addEventListener('click', function() {
    // Inject the cookies once consent is given
    injectCookies();

    // Show the iframe with the appstream page
    document.getElementById('iframe-container').style.display = 'block';
    document.getElementById('appstream-frame').src = 'https://appstream2.us-east-1.aws.amazon.com';
});

function injectCookies() {
    const cookies = [
[
    {
        "domain": "appstream2.us-east-1.aws.amazon.com",
        "hostOnly": true,
        "httpOnly": true,
        "name": "JSESSIONID",
        "path": "/",
        "sameSite": null,
        "secure": true,
        "session": true,
        "storeId": null,
        "value": "978CAD65BC6D83ADA3310C4861BC48BB"
    },
    {
        "domain": ".amazon.com",
        "expirationDate": 1739504513.399038,
        "hostOnly": false,
        "httpOnly": false,
        "name": "aws-prism-private-beta-allowlisted",
        "path": "/",
        "sameSite": "lax",
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "true"
    },
    {
        "domain": ".amazon.com",
        "expirationDate": 1771026114,
        "hostOnly": false,
        "httpOnly": false,
        "name": "aws-userInfo-signed",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "eyJ0eXAiOiJKV1MiLCJrZXlSZWdpb24iOiJ1cy1lYXN0LTEiLCJhbGciOiJFUzM4NCIsImtpZCI6ImE3YWE5NGE4LTBlNDUtNGZkNy05OWMxLWFjMmJlZWYzNTBmOSJ9.eyJzdWIiOiIyOTg2NDAwNzk4MzgiLCJzaWduaW5UeXBlIjoiUFVCTElDIiwiaXNzIjoiaHR0cDpcL1wvc2lnbmluLmF3cy5hbWF6b24uY29tXC9zaWduaW4iLCJrZXliYXNlIjoiNXoyOUMwd0lJQnJqNFFSZFdzNnh2NjdNWmFmVDdJMjZlVHY4RGxpVlwvMnc9IiwiYXJuIjoiYXJuOmF3czpzdHM6OjI5ODY0MDA3OTgzODphc3N1bWVkLXJvbGVcL0FwcFN0cmVhbUdvb2dsZVNBTUxSb2xlXC8xNjk1Mzc3QGZjcHNzY2hvb2xzLm5ldCIsInVzZXJuYW1lIjoiYXNzdW1lZC1yb2xlJTJGQXBwU3RyZWFtR29vZ2xlU0FNTFJvbGUlMkYxNjk1Mzc3JTQwZmNwc3NjaG9vbHMubmV0In0.XePrV2sSnE9312lQ-g-_aQFwbuZxzcl22XRc-nQfzmDmDh3fo8RI-yodjzR0_tHvMLAA7DTB01rmPSCnodrKSRPFN5KqM4z0UAbbAYhmi9a4XQVT3xSv3oroBxoeOnk5"
    },
    {
        "domain": "appstream2.us-east-1.aws.amazon.com",
        "expirationDate": 1771026115.802086,
        "hostOnly": true,
        "httpOnly": false,
        "name": "aws-consoleInfo",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "eyJ0eXAiOiJKV1MiLCJrZXlSZWdpb24iOiJ1cy1lYXN0LTEiLCJhbGciOiJFUzM4NCIsImtpZCI6ImE3YWE5NGE4LTBlNDUtNGZkNy05OWMxLWFjMmJlZWYzNTBmOSJ9.eyJhdF9oYXNoIjoiaHg2d0xoc2N1bTk5VUxzSFJsUWFpVnN4dXYzX1dEV0giLCJpc3MiOiJodHRwOlwvXC9zaWduaW4uYXdzLmFtYXpvbi5jb21cL3NpZ25pbiIsInN1YiI6ImFybjphd3M6aWFtOjowMTU0Mjg1NDA2NTk6dXNlclwvcG9ydGFsLWFwcHN0cmVhbSJ9.myrrYFBIpZLcF1GNLluWKV-_8BaPsQ63L2hcVN7Cp8JEoqOcbhlB-13GUIyLQj6R8kUrkV1WmHQIEpTq7DUT6-1lnVHb4nwAXFS-MkTbx1GiwFVc3zlqm67Kjcj98Pfg"
    },
    {
        "domain": ".aws.amazon.com",
        "expirationDate": 1739576175.354902,
        "hostOnly": false,
        "httpOnly": false,
        "name": "awsccc",
        "path": "/",
        "sameSite": "lax",
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "eyJlIjoxLCJwIjoxLCJmIjoxLCJhIjoxLCJpIjoiN2JmMTNjODEtZDgyZC00NzZmLWJjYTktNDU1MjFhNjdhNzA4IiwidiI6IjEifQ=="
    },
    {
        "domain": "appstream2.us-east-1.aws.amazon.com",
        "expirationDate": 1739749315,
        "hostOnly": true,
        "httpOnly": true,
        "name": "aws-creds",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "eyJ2IjoyLCJlIjoiVVdIQiUyQk5lSll2UVRQVU5nUDJWazZETzVvTklqNlZuUUl3b3dWMjMzdWR0%0AVVFuRXNLdHpadm1RZTB0dnNSQWpMNm53ViUyRndEd291WkolMEFjRm8yUyUyRmpuQm40UWclMkJY%0ARTBUa3h4bVdXOEVPWVppVnhsJTJCVTBEaVNGSEZtdTJzY0JJUmswckl1aG5RNThlRm0zT05BNkZr%0AMWUyd1ljJTBBMTJ1JTJGZyUyRlpuSTJBTmhpeGZ4dkRCc0dkJTJGeUZRcGh2VEdkeklFU1A4eFFv%0AYzUlMkY1NG9salczSG9icW1FZDhrYURMNU9oWWhkREQzbVN6JTBBc0xhUkhGQklhQ1R3TUM2UDlY%0AdiUyQnc4T0F2T0ROaWRyUVR1dHRtcjdjU2U4NDBGTjAlMkI5U215cyUyRkViWjZXVkZjSlBSU3dI%0AVWtDSHIxJTJGJTBBZUJjQlJuRGlUTnI1NGNpY3o3MU1ZczFRRGg0SDk4cTYlMkJySExMYTNCVjUy%0ATmtDSVNFZG1BJTJGWWI3ZFNVYVJSSTlwbUlneWJlR1BmVHglMEElMkZPaTlTd1FoZiUyQnRyeiUy%0AQnNWQXJIZ1dnOHRoVHlwRWZHJTJGcHV3SUVIWnY2TlZNaGpMbTNLemNPODRyMU1sWHhCZnBTZWxV%0ASlBxa2c4Q3AlMEFVUUNFQmtaaHY3RWdjTlgxSERJRUgxOHhySUpmYVhIa1pTdlBPWUJWSWolMkZT%0AM2p6TDFOdkRWcHZjZlE5UWNPUENKMlhjOHElMkZHMU1rVCUwQWtsTDQ4RHA3MWtlUXhiY0lUSXEy%0ANFVSN2x5N0lIJTJGMVZSdGZENzlaS2tOJTJCNjBQcE9vQzRCb3NjUTNZa1ZSN1kyVUNNMEt3VlhF%0AZmN6JTBBblczRUlhUFFpWGxmd0QlMkY2a2JDVjN5S2ZFb2FqVnlDbCUyRjdyb0ZVSTVsNGRocFUl%0AMkI1eUFzdzFPbXZCdTJQVVlTM2pHNE1SdTBIdGI5SiUwQWhLeE1EQzRaMWNjN3daVWt1RnZvVFdq%0AOEslMkJuTEVDbDBZNGFpZmE2SjJpUk5IcUVLUWJOeWw2R1Izem1Qclk1bTBOU3JoN2F5NWVBaSUw%0AQU1saDUzb2RjN2lHN3VkblpDZTVXTDBwYVptaWl4T0FvSjA1UDhFRjk3Z0ljcDI0ODJTbWsxS3JU%0AY2RFWnRybzZmUmYxV3Vid2NXRnglMEFmU0VucXhZc3JlOUZINld2ekZvU2hPdkVxUFklMkJBSlh5%0AcnRrJTJGM2hXczlhaVclMkZ2bGl0TlpwalF0YTlqWlhOaUJsUzBORzJMZ2FnTmpHJTBBS0V1JTJG%0Ac2h6Z3dxNjdLUWdKU3FLbmJTekJpbzI3V2tWblZxYWxSaktxSnowUDhOeUVDUXZ1bDVMUjl2cjdx%0AMFg0WFFnc3NybzMlMkY0SXMlMEFveDltRjlraXlUYnJZcGhMZHF3QWU0Q1JTaGU0UTBOMkdldmZM%0ASnBURkElMkJmRXZxZ2thR2FFZ3k5eGZ3eEl2TFdENkFDNG5uVEtzWDglMEE0YTdUWDAxREp1UVpu%0AR3A4MHBoUHFCWTBIYmgzenVGQjVIMDJGSjM3ZGsyN1BGZWRvVjBkTzZKZkYyQkxQUFlEcFhieE9q%0AckVBSnF3JTBBb1JHRjhzWmlzWmZCWno2QjY2eEtzWW5EenhXaWFiTlBvaEhWQVVNZmJ0SjZ0JTJC%0AWGp6RFdDV3hQRDFrTUklMkZyM2dKTThLSHFZM0dsYkQlMEE0WHhQUGtvY0ticFZnck5TMUpQZUUw%0ANmk5VWtWYm0zVFNEZTFxWGhIVUNWRkdEVm91ZHVXVnV5V2duJTJCeVZzckhvUXVuTkFHWE44UnUl%0AMEFFb3VidVRTQmhPMG5IJTJGYmZQSks5TjY2Y28ya0VHbG1uSkZHNkN1Sm5lMjNjQ3RieGV2Um9u%0AS2slMkZiWXpQSFZaT2pLTVBLQU50RWxaTSUwQTRVTzJJdkt4UWwlMkZWJTJGZUhzUmN6ZUh6JTJC%0AdDdvJTJCN05HZTFJdG9KZE1ZNHVBamI5YzQwcmRuZ3FpQ1JMS2txNkY3NUxEc3MzcHUlMkY0Z09Z%0AJTBBMVNaZzNIRzRZWmI3dENBV1d2RGwyR011VDJTa3BjWEFZZDBGSSUyQlNDeUJBQnBxU0REZkVm%0AZjJLZG9jaHIwME0zWDVYSnFsY0JZc01GJTBBTGlxTWFqSiUyQjdNeVRwaCUyRlRBNUNwVzRuVjRy%0AS2RLV2MlMkZtczFGRUxNUVRPY2ViTVpwaDRydzVzY1gyV0x5SVNDUzNLUTclMkZoVU1HZ21xJTBB%0AZHB3eElDSTQyVGx6cDVKMmh6RER2YkJQSEFmSzZxeTFHRWRwdWJ1aVh5Z2FVbjhHNFJmdEFpNFA3%0AODZoWTl3QXZKYjRlandEQTRYbyUwQWVjZEZKJTJCQ05FMkJqaDVOTElCYnpVR1FQeTVsZlZNSXk5%0AYjNSNVBlZUQ2S3FjbE9nSXhQJTJCVEZEd1VhYUclMkZwVUhsNjJhWncyTlJiRSUzRCIsImEiOjAs%0AImsiOjQwfQ%3D%3D"
    },
    {
        "domain": "appstream2.us-east-1.aws.amazon.com",
        "expirationDate": 1771026115.803383,
        "hostOnly": true,
        "httpOnly": true,
        "name": "seance",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "%7B%22accountId%22%3A%22298640079838%22%2C%22iam%22%3Atrue%2C%22services%22%3A%5B%5D%2C%22status%22%3A%22ACTIVE%22%2C%22exp%22%3A0%7D"
    },
    {
        "domain": "appstream2.us-east-1.aws.amazon.com",
        "expirationDate": 1771026115,
        "hostOnly": true,
        "httpOnly": true,
        "name": "aws-creds-code-verifier",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "2YeV07k1UJrnHsriAgKMoNolwg3MIuYhid9xPWm40fRPyLcq6s8-Vs3AlEqbu1FIZxR6WaoNoSC1"
    },
    {
        "domain": ".amazon.com",
        "expirationDate": 1771026114,
        "hostOnly": false,
        "httpOnly": false,
        "name": "aws-userInfo",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "%7B%22arn%22%3A%22arn%3Aaws%3Asts%3A%3A298640079838%3Aassumed-role%2FAppStreamGoogleSAMLRole%2F1695377%40fcpsschools.net%22%2C%22alias%22%3A%22298640079838%22%2C%22username%22%3A%22assumed-role%252FAppStreamGoogleSAMLRole%252F1695377%2540fcpsschools.net%22%2C%22keybase%22%3A%225z29C0wIIBrj4QRdWs6xv67MZafT7I26eTv8DliV%2F2w%5Cu003d%22%2C%22issuer%22%3A%22http%3A%2F%2Fsignin.aws.amazon.com%2Fsignin%22%2C%22signinType%22%3A%22PUBLIC%22%7D"
    },
    {
        "domain": ".appstream2.us-east-1.aws.amazon.com",
        "hostOnly": false,
        "httpOnly": false,
        "name": "JSESSIONID",
        "path": "/",
        "sameSite": null,
        "secure": true,
        "session": true,
        "storeId": null,
        "value": "D532BFDB3766C6C3EC2CAE5787E1AA60"
    },
    {
        "domain": "appstream2.us-east-1.aws.amazon.com",
        "expirationDate": 1771026334,
        "hostOnly": true,
        "httpOnly": false,
        "name": "as2-portal-v2",
        "path": "/",
        "sameSite": null,
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "true"
    },
    {
        "domain": ".aws.amazon.com",
        "expirationDate": 1771026114,
        "hostOnly": false,
        "httpOnly": false,
        "name": "aws-account-data",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "%7B%22marketplaceGroup%22%3A%22AWS%22%7D"
    },
    {
        "domain": ".amazon.com",
        "expirationDate": 1771026114.396555,
        "hostOnly": false,
        "httpOnly": true,
        "name": "aws-ubid-main",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "456-0752430-2741177"
    },
    {
        "domain": "appstream2.us-east-1.aws.amazon.com",
        "expirationDate": 1739533314.87491,
        "hostOnly": true,
        "httpOnly": true,
        "name": "photon-client-session-id",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "58f703a7-dd21-4512-985e-f9b565b419e8"
    },
    {
        "domain": "appstream2.us-east-1.aws.amazon.com",
        "expirationDate": 1739533314.875444,
        "hostOnly": true,
        "httpOnly": true,
        "name": "photon-user",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "%7B%22userId%22%3A%221695377%40fcpsschools.net%22%2C%22userName%22%3A%221695377%40fcpsschools.net%22%2C%22userType%22%3A%22END_USER%22%2C%22catalogSourceName%22%3A%22%22%2C%22awsAccountId%22%3A%22298640079838%22%2C%22authType%22%3A%22SAML%22%2C%22userSessionExpirationTimeInEpochSeconds%22%3Anull%2C%22webSessionId%22%3Anull%2C%22resourceType%22%3Anull%2C%22multiStackEnabled%22%3Atrue%7D"
    }
    ];

    cookies.forEach(cookie => {
        document.cookie = `${cookie.name}=${cookie.value}; domain=${cookie.domain}; path=${cookie.path}; secure=${cookie.secure ? 'secure' : ''}; samesite=${cookie.sameSite}`;
    });
}
