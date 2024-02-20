const SALESFORCE_URL_DOMAINS = ["lightning.force.com/lightning/r/"];

const getCurrentTab = async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    return tab;
};

const getCurrentTabUrlAndIsSalesforce = async (callback) => {
    const tab = await getCurrentTab();
    const isSalesforce = SALESFORCE_URL_DOMAINS.some((domain) => tab?.url.includes(domain));
    if (isSalesforce) {
        callback(tab);
    }
};

chrome.tabs.onActivated.addListener(async (activeInfo) => {
    getCurrentTabUrlAndIsSalesforce((tab) => {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ["content.js"]
        });
    });
});

chrome.tabs.onUpdated.addListener(async (tabId, info) => {
    if (info.status === "complete") {
        getCurrentTabUrlAndIsSalesforce((tab) => {
            console.log("onUpdated", tab);
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                files: ["content.js"]
            });
        });
    }
});
