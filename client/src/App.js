import { Box } from "@mui/material";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/home/Home";
import DataProvider from "./context/DataProvider";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header></Header>
        <Box style={{ marginTop: 54 }}>
          <Home />
        </Box>
      </DataProvider>
    </div>
  );
}

export default App;
