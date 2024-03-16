import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/LoginComponent";
import Dashboard from "./pages/DashboardComponent/index";
import AddVehicleDetails from "./pages/AddVehicleDetails"
import UpdatePersonalDetails from "./pages/UpdatePersonalDetails"
import Footer from "./components/Footer";
import Home from "./pages/index"
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStateProvider } from './GlobalStateContext'
import SignUpComponent from "./pages/SignUpComponent";
import ProductDetailsComponent from "./pages/ProductDetailsComponent";
import CartComponent from "./pages/CartComponent"
import ForgotPassword from "./pages/ForgotPassword";
import OrderDetailsComponent from "./pages/OrderDetailsComponent";
import ProductsByCategory from "./pages/ProductsByCategory";

function App() {
  return (
    <>
      <GlobalStateProvider>
        <Router>
          <Routes>
          <Route path='/' element={<Home />} exact />
            <Route path='/login' element={<Login />} exact />
            <Route path='/signup' element={<SignUpComponent />} exact />
            <Route path='/dashboard' element={<Dashboard />} exact />
            <Route path='/addvehicledetails/:id' element={<AddVehicleDetails />} exact />
            <Route path='/updatepersonaldetails/:id' element={<UpdatePersonalDetails />} exact />
            <Route path='/productdetails/:id' element={<ProductDetailsComponent />} exact />
            <Route path='/getProductsByCategory/:categoryName' element={<ProductsByCategory />} exact />
            <Route path='/cart' element={<CartComponent />} exact />
            <Route path='/changepassword' element={< ForgotPassword/>} exact />
            <Route path='/payment-success/' element={< OrderDetailsComponent/>} exact />
          </Routes>
        </Router>
        <Footer />
      </GlobalStateProvider>
    </>

  );
};

export default App;