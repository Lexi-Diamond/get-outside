import logo from "./logo.svg";
import "./App.css";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
        {/* <Header /> */}
        <Routes>
          {/* <Route
            path='/'
            element={<Homepage />}
          /> */}
          {/* <Route
                path="/login"
                element={<Login />}
              /> */}
          <Route
                path="/signup"
                element={<Signup />}
              />
          {/* <Route
                path='/profile'
                element={<Profile />}
              /> */}
        </Routes>
        {/* <Footer /> */}
    </Router>
  );
}

export default App;
