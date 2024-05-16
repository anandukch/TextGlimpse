import browser from "webextension-polyfill";
import runChat from "./llm";

type ResponseCallback = (data: object) => void;
type MessageInterface = {
    action: string;
    payload: string;
};
const sendToCurrentTab = (message: MessageInterface) => {
    browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
        if (tabs && tabs.length > 0) {
            browser.tabs.sendMessage(tabs[0].id as number, message);
        }
    });
};
// var apiKey = browser.storage.local.get("apiKey").then((res) => res.apiKey);
browser.runtime.onMessage.addListener((msg: MessageInterface, sender, response: ResponseCallback) => {
    switch (msg.action) {
        case "generate":
            console.log("Selected text from background", msg);
            browser.storage.local
                .get("apiKey")
                .then((res) => {
                    runChat(res.apiKey, msg.payload)
                        .then((result) => {
                            if (!result || result ==undefined) {
                                sendToCurrentTab({ action: "error", payload: "No response from the server" });
                                return;
                            }
                            sendToCurrentTab({ action: "show", payload: result });
                        })
                        .catch((error) => {
                            sendToCurrentTab({ action: "error", payload: error });
                        });
                })
                .catch((error) => {
                    console.log("Error", error);
                });

            break;
        case "processApiKey":
            // apiKey = msg.payload;
            browser.storage.local.set({ apiKey: msg.payload });
            break;
        default:
            console.log("Unknown action", msg.action);
            break;
    }

    // return true;
});
