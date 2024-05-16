import { ChangeEventHandler, useEffect, useState } from "react";
import "./App.css";
import browser from "webextension-polyfill";
import { Flex, Box, FormControl, FormLabel, Input, Stack, Button, useColorModeValue, Select, Text } from "@chakra-ui/react";

function App() {
    const [selectedOption, setSelectedOption] = useState("GPT");
    const [apiKey, setApiKey] = useState("");

    const handleOptionChange = (e: any) => {
        setSelectedOption(e.target.value);
    };

    const handleInputChange = (e: any) => {
        setApiKey(e.target.value);
    };

    const handleSearch = () => {
        browser.runtime.sendMessage({ action: "processApiKey", payload: apiKey });
    };

    useEffect(() => {
        browser.storage.local.get("apiKey").then((res) => {
            setApiKey(res.apiKey);
        });
    }, []);

    return (
        <>
            <Flex align={"center"} justify={"center"} bg={useColorModeValue("gray.50", "gray.800")}>
                <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")} boxShadow={"lg"} p={2}>
                    <Stack spacing={3}>
                        {apiKey ? (
                          <>
                                <Text>Api key added</Text>

                          </>
                        ) : (
                            <>
                                <FormControl id="email">
                                    <Select value={selectedOption} onChange={handleOptionChange}>
                                        <option value="GPT">GPT</option>
                                        <option value="Gemini">Gemini</option>
                                    </Select>
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel>Api Key</FormLabel>
                                    <Input value={apiKey} onChange={handleInputChange} />
                                </FormControl>
                                <Stack spacing={10}>
                            <Button
                                onClick={handleSearch}
                                bg={"blue.400"}
                                color={"white"}
                                _hover={{
                                    bg: "blue.500",
                                }}
                            >
                                Add Api key
                            </Button>
                        </Stack>
                            </>
                        )}

                       
                    </Stack>
                </Box>
            </Flex>
        </>
    );
}

export default App;
