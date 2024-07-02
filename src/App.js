import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./Components/part/Navbar";
import Home from "./Components/Pages/Home";
import Footer from "./Components/part/Footer";
import CounsellorTeam from "./Components/Pages/CounsellorTeam";

function App() {
  return (
    <BrowserRouter>

    <Navbar/>
    <Routes>
      <Route element={<Home/>}  path="/"/>
      <Route element={<CounsellorTeam/>}  path="/CounsellorTeam"/>

    </Routes>
    {/* <Footer/> */}

    </BrowserRouter>
  );
}

export default App;
