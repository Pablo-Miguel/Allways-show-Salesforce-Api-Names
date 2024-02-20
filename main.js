const getCurrentTab = async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab;
};

console.log(await getCurrentTab());

const log = async (...arguments) => {
  const tab = await getCurrentTab();

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (...arguments) => {
            console.log("[from extension]", ...arguments);
        },
        args: arguments
  });
};