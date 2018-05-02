chrome.commands.onCommand.addListener(function (command) {
    if (command !== 'jump-homepage') return;
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'window.location.href = `//${window.location.hostname}`'}
        );
    });
});
