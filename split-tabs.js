chrome.browserAction.onClicked.addListener(tab => {
  chrome.windows.get(tab.windowId, {populate:true}, current => {
    const [first, ...tabs] = current.tabs.slice(tab.index);
    chrome.windows.create({tabId: first.id}, win => {
      tabs.forEach(t => chrome.tabs.move(t.id, {windowId: win.id, index: -1}));
    });
  });
});
