chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    console.log("Login request detected:", details.url);
    chrome.storage.local.set({ lastLoginURL: details.url });
  },
  { urls: ["*://accounts.google.com/o/saml2/initsso*"] },
  ["requestBody"]
);

chrome.webRequest.onCompleted.addListener(
  function (details) {
    console.log("Redirected to:", details.url);
    chrome.storage.local.set({ lastRedirectURL: details.url });
  },
  { urls: ["*://appstream2.us-east-1.aws.amazon.com/*"] }
);
