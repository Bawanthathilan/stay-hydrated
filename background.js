chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "testAlarm") {
        chrome.notifications.create('test', {
            type: 'basic',
            iconUrl: 'icon128.png',
            title: 'Drink Water',
            message: 'Hey stay hydrated !',
            priority: 2
        });
    }
});