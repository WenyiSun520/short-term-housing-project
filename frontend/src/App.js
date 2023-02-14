
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RentList from "./features/rentInfo/rentlist";
import SingleRentPage from "./features/rentInfo/singleRent";


function App() {
  return(
   <>
    <Navbar />
     <Routes>
    <Route path="/" element={<RentList />}></Route>
    <Route path="/rentInfo/:rentId" element={<SingleRentPage />}></Route>
    </Routes>
    </>

  )
}

export default App;
