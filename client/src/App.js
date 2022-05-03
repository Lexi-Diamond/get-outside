import React  from 'react';
// import Homepage from './pages/Homepage';
// import Login from './pages/Login';
// import Profile from './pages/Profile';
// import Header from './components/header';
// import Footer from './components/footer';
import SignUp from './pages/Signup';
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
                element={<SignUp />}
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
