import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import LoginPage from "./screens/superadmin/LoginPage";
import AdminLogin from "./screens/admin/AdminLogin";
import Dashboard from "./screens/superadmin/Dashboard";
import AdminDashboard from "./screens/admin/AdminDashboard";
import FoodBooking from "./screens/foodbooking/FoodBooking";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<LoginPage/>} path='/loginpage'/>
          <Route element={<AdminLogin/>} path='/adminlogin'/>  
          <Route element={<Dashboard/>} path='/dashboard/*'/>
          <Route element={<AdminDashboard/>} path='/admindashboard/*'/>  
          <Route element={<FoodBooking/>} path="/foodbooking" />       
        </Routes>
      </Router>
    </div>
  );
}

export default App;
