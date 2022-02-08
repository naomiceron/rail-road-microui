import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import "../src/styles/App.css";
import InputBox from "./components/InputBox";
import DestinationsBox from "./components/DestinationsBox";
import ReceiversBox from "./components/ReceiversBox";
//import DestinationsTable from "./components/DestinationsTable";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  // const outputFun = (props) => {
  return (
    <div className="App">
      <div>
        <h1> Train Sort </h1>
      </div>
      <DestinationsBox />
      <ReceiversBox />
      <InputBox />
    </div>
  );
  // };
}
export default App;
