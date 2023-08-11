import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import RestaurantInterface from "./screens/restaurant/RestaurantInterface";
import DisplayAllRestaurant from "./screens/restaurant/DisplayAllRestaurant";
import CategoryInterface from "./screens/category/CategoryInterface";
import DisplayAllCategory from "./screens/category/DisplayAllCategory";
import FoodItemInterface from "./screens/fooditem/FoodItemInterface";
import DisplayAllFoodItem from "./screens/fooditem/DisplayAllFoodItem";
import TableBookingInterface from "./screens/tablebooking/TableBookingInterface";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<RestaurantInterface/>} path='/r1'/>
          <Route element={<DisplayAllRestaurant/>} path='/r2' />
          <Route element={<CategoryInterface/>} path='/c1'/>
          <Route element={<DisplayAllCategory/>} path='/c2'/>
          <Route element={<FoodItemInterface/>} path='/f1'/>
          <Route element={<DisplayAllFoodItem/>} path='/f2'/>
          <Route element={<TableBookingInterface/>} path='/t1'/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
