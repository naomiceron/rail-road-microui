import { Box } from "@chakra-ui/react";
import React from "react";
import Destinations from "./components/Destinations";
import Receivers from "./components/Receivers";

const App = () => (
  <Box margin="1.2rem">
    <Box>REMOTE1</Box>
    <Box>
      <Destinations />
      <Receivers />
    </Box>
  </Box>
);

export default App;
