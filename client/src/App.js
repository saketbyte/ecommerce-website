import { Box } from "@mui/material";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/home/Home";
import DataProvider from "./context/DataProvider";

import { BrowserRouter, Routes } from "react-router-dom";
import DetailView from "./components/details/DetailView";

function App() {
  return (
    <DataProvider>
      <Header />
      {/* ONly those components are kept inside Browser router which will not appear or change in new page */}
      {/* And the components which I want to switch must be wrapped by Routes */}
      <BrowserRouter>
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Home />
            <DetailView />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
