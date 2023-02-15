import { Routes, Route, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import RentList from "./features/rentInfo/rentList";
import SingleRentPage from "./features/rentInfo/singleRentPage";
import AddRentForm from "./features/rentInfo/addRentForm";
import ErrorPage from "./components/errPage";
import TenantList from "./features/tenantInfo/tenantList";
import SingleTenantPage from "./features/tenantInfo/singleTenantPage";
import AddTenantForm from "./features/tenantInfo/addTenantForm";
// const router = createBrowserRouter([
//   { path: "/", element: <RentList />, errorElement: <ErrorPage /> },
// ]);

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<RentList />}></Route>
        <Route path="/rentInfo/:rentId" element={<SingleRentPage />}></Route>
        <Route path="/addRent" element={<AddRentForm />}></Route>
        <Route path="/tenants" element={<TenantList />}></Route>
        <Route path="/tenants/:tenantId" element={<SingleTenantPage />}></Route>
        <Route path="/addTenant" element={<AddTenantForm />}></Route>

        {/* handle error routes */}
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
