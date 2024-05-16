import { Stack, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect } from "react";
import browser from "webextension-polyfill";
function App() {
    const [po, setPos] = React.useState({ x: 0, y: 0 });
    const [result, setResult] = React.useState("");
    useEffect(() => {
        const mouseDownHandler = (event: MouseEvent) => {
            document.addEventListener("mouseup", mouseUpHandler);
        };

        const mouseUpHandler = (event: MouseEvent) => {
            var x = event.clientX;
            var y = event.clientY;
            setPos({ x, y });

            var selectedText = getSelectedText();
            if(selectedText=="") {
                setResult("");
                return;
            }
            if (selectedText) {
                browser.runtime.sendMessage({ action: "generate", payload: selectedText });
                setResult("Loading...");
            }
            // document.removeEventListener("mouseup", mouseUpHandler);
        };

        const getSelectedText = () => {
            var selectedText = "";
            var selection = window.getSelection();
            if (selection) {
                selectedText = selection.toString();
            }
            return selectedText;
        };

        document.addEventListener("mousedown", mouseDownHandler);

        browser.runtime.onMessage.addListener((msg: any, sender, response) => {
            switch (msg.action) {
                case "show":
                    setResult(msg.payload);
                    break;
                case "error":
                    console.log(msg.payload);
                    break;
                default:
                    console.log("Unknown action", msg.action);
                    break;
            }
            // return true;
        });

        return () => {
            document.removeEventListener("mousedown", mouseDownHandler);
        };
    }, []);

    return (
        <>
            {result && (
                <Stack
                    bg={useColorModeValue("white", "gray.800")}
                    boxShadow={"lg"}
                    p={5}
                    top={`${po.y - 100}px`}
                    left={`${po.x - 90}px`}
                    rounded={"xl"}
                    width={"fit-content"}
                    align={"center"}
                    pos={"absolute"}
                    zIndex={1000}
                    // _after={{
                    //     content: `""`,
                    //     w: 0,
                    //     h: 0,
                    //     borderLeft: "solid transparent",
                    //     borderLeftWidth: 16,
                    //     borderRight: "solid transparent",
                    //     borderRightWidth: 16,
                    //     borderTop: "solid",
                    //     borderTopWidth: 16,
                    //     borderTopColor: useColorModeValue("white", "gray.800"),
                    //     pos: "absolute",
                    //     bottom: "-16px",
                    //     left: "50%",
                    //     transform: "translateX(-50%)",
                    // }}
                >
                    <Text>{result}</Text>
                </Stack>
            )}
        </>
    );
}

export default App;
