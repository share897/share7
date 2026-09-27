chrome.runtime.onInstalled.addListener(()=>chrome.storage.local.get('aurelia_init').then(x=>x.aurelia_init||chrome.storage.local.set({aurelia_init:Date.now()})));
