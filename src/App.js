import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductList from './components/ProductList';
import CartIcon from './components/CartIcon';
import Cart from './components/Cart';
import Login from './components/Login';
import LoginAPI from './components/LoginAPI';
import Register from './components/Register';
import Logout from './components/Logout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const user = useSelector((state) => state.auth ? state.auth.user : null);

  return (
    <Router>
      <div className="app">
        <header className="bg-dark text-white py-3">
          <div className="container d-flex justify-content-between align-items-center">
            <h1>Rayhan Store</h1>
            <nav>
              <Link to="/" className="text-white mx-3">Products</Link>
              <Link to="/cart" className="text-white">
                <CartIcon />
              </Link>
              {user ? (
                <>
                  <span className="welcome-message text-white mx-3">Welcome, {user.email}!</span>
                  <Logout />
                </>
              ) : (
                <>
                  <Link to="/login" className="text-white mx-3">Login</Link>
                  <Link to="/login-api" className="text-white mx-3">Login with API</Link>
                  <Link to="/register" className="text-white mx-3">Register</Link>
                </>
              )}
            </nav>
          </div>
        </header>
        <main className="container mt-5">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={user ? <Cart /> : <Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login-api" element={<LoginAPI />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
