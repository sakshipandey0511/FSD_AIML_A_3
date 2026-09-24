import Navbar from "./Navbar.jsx";
import Header from "./Header.jsx";
import Home from "./Home.jsx";
import Footer from "./Footer.jsx";
import "./App.css";
import (BroswerRouter, Routes, Route)from "react-router-dom"
const App = () => {
  return (
    <div>
      <BroswerRouter>
      <Routes>
        <Route path="/"element={<UserLayout/>}>
        <Route index element={<itemstore/>}/>
        <Route path="/mycart"element={<h1>MY CART</h1>}/>
        <Route path="/myorders"element={<h1>MY Orders</h1>}/>
        <Route path="/settings"element={<h1>Settings</h1>}/>
        <Route path="/profile"element={<h1>MY Profile</h1>}/>
        <Route path="/logout"element={<h1>Logout</h1>}/>
         <Route path="*"element={<h1>404 Error Page </h1>}/>
       </Route>
      </Routes>
      </BrowserRouter>
     
    </div>
    
  );
};

export default App;