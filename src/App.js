import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./Components/part/Navbar";
import Home from "./Components/Pages/Home";
import Footer from "./Components/part/Footer";
import CounsellorTeam from "./Components/Pages/CounsellorTeam";
import FacultyAdvisor from "./Components/Pages/FacultyAdvisor";
import StudentExperience from "./Components/Pages/StudentExperience";
import UGTeam from "./Components/Pages/UGTeam";
import Festival from "./Components/Pages/Festival";

function App() {
  return (
    <BrowserRouter>

    <Navbar/>
    <Routes>
      <Route element={<Home/>}  path="/"/>
      <Route element={<FacultyAdvisor/>}  path="/FacultyAdvisor"/>
      <Route element={<StudentExperience/>}  path="/StudentExperience"/>
      <Route element={<UGTeam/>}  path="/UGTeam"/>
      <Route element={<Festival/>}  path="/festival"/>


      <Route element={<CounsellorTeam/>}  path="/CounsellorTeam"/>

    </Routes>
    <Footer/>

    </BrowserRouter>
  );
}

export default App;
