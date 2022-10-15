import './App.css';
import AppNavbar from './Components/NavBar/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Screens/home';
import Statistics from './Screens/statistics';
import Explore from './Screens/explore';
import Settings from './Screens/settings';
import SignIn from './Screens/login';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={< SignIn />}></Route>
        <Route path="/" element={< AppNavbar />}>
          <Route path="/" element={< Home />}> </Route>
          <Route path="explore" element={< Explore />}>  </Route>
          <Route path="statistics" element={< Statistics />}>  </Route>
          <Route path="settings" element={< Settings />}>  </Route>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
