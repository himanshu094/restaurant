import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import RestaurantInterface from "./screens/restaurant/RestaurantInterface";
import DisplayAllRestaurant from "./screens/restaurant/DisplayAllRestaurant";
import CategoryInterface from "./screens/category/CategoryInterface";
import DisplayAllCategory from "./screens/category/DisplayAllCategory";
import FoodItemInterface from "./screens/fooditem/FoodItemInterface";
import DisplayAllFoodItem from "./screens/fooditem/DisplayAllFoodItem";
import TableBookingInterface from "./screens/tablebooking/TableBookingInterface";
import DisplayAllTable from "./screens/tablebooking/DisplayAllTable";
import LoginPage from "./screens/superadmin/LoginPage";
import WaiterInterface from "./screens/waiter/WaiterInterface";
import Dashboard from "./screens/superadmin/Dashboard";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<CategoryInterface/>} path='/c1'/>
          <Route element={<DisplayAllCategory/>} path='/c2'/>
          <Route element={<FoodItemInterface/>} path='/f1'/>
          <Route element={<DisplayAllFoodItem/>} path='/f2'/>
          <Route element={<TableBookingInterface/>} path='/t1'/>
          <Route element={<DisplayAllTable/>} path='/t2'/>
          <Route element={<LoginPage/>} path='/loginpage'/>  
          <Route element={<WaiterInterface/>} path='/w1'/> 
          <Route element={<Dashboard/>} path='/dashboard/*'/>          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
