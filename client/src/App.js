import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  // createHttpLink,
} from '@apollo/client';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
// import Profile from './pages/Profile';
// import Header from './components/header';
// import Footer from './components/footer';
import SignUp from './pages/Signup';

// Construct our main GraphQL API endpoint
// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  // link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route
            path='/'
            element={<Homepage />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
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
    </ApolloProvider>
  );
}

export default App;
