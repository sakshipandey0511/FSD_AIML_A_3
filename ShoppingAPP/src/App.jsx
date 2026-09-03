import Navbar from "./Navbar.jsx";
import Header from "./Header.jsx";
import Home from "./Home.jsx";
import Footer from "./Footer.jsx";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Navbar />
      
      <Home />
      <Footer />
    </div>
  );
};

export default App;