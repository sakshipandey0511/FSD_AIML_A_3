import { BrowserRouter, Routes,Route } from "react-router-dom"
import Stopwatch from "./components/stopwatch"
import Counter from "./components/Counter"
import Admin from "./components/Admin"
import User from "./components/User"
import Login from "./components/Login"
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/User" element={<User />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/mycart" element={<h1>My Cart Page</h1>} />
        <Route path="/myorders" element={<h1>My Orders Page</h1>} />
        <Route path="/settings" element={<h1>Settings Page</h1>} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App