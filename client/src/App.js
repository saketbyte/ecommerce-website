import { Box } from "@mui/material";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Box style={{ marginTop: 54 }}>
        <Home />
      </Box>
    </div>
  );
}

export default App;
