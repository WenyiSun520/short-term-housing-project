
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RentList from "./features/rentInfo/rentList";
import SingleRentPage from "./features/rentInfo/singleRent";
import AddRentForm from "./features/rentInfo/addRentForm";
import ErrorPage from "./components/errPage";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<RentList />}></Route>
        <Route path="/rentInfo/:rentId" element={<SingleRentPage />}></Route>
        <Route path="/addRent" element={<AddRentForm />}></Route>
        {/* handle error routes */}
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
