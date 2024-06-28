import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./Components/part/Navbar";
import Home from "./Components/Pages/Home";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route element={<Home/>}  path="/"/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
