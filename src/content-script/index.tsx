import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";

const index = document.createElement("div");
index.id = "extension-root";

const body = document.querySelector("body");
if (body) {
    body.prepend(index);
}

ReactDOM.createRoot(index).render(
    <React.StrictMode>
        <ChakraProvider>
            <App />
        </ChakraProvider>
    </React.StrictMode>,
);
