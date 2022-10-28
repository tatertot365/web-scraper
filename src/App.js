import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"
import Dogs from "./pages/navbar/Dogs"
import Cats from "./pages/Cats"
import Sheeps from "./pages/Sheeps"
import Goats from "./pages/Goats"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Dogs />} />
        <Route path='/cats' element={Cats} />
        <Route path='/sheeps' element={Sheeps} />
        <Route path='/goats' element={Goats} />
      </Routes>
    </Router>
  );
}

export default App;
