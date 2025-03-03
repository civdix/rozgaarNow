import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import ErrorPage from "./components/Errorpage";
import Dashboard from "./components/Dashboard";
import ContactUs from "./components/ContactUs";
function App() {
  try {
    const router = createBrowserRouter([
      {
        path: "/",
        element: (
          <>
            <Navbar />
            <Home />
          </>
        ),
      },
      {
        path: "/JobPortal",
        element: (
          <>
            <Navbar />
            <Home />
          </>
        ),
      },
      {
        path: "/About",
        element: (
          <>
            <Navbar />
            <About />
          </>
        ),
      },
      {
        path: "/SignUp",
        element: (
          <>
            <Navbar />
            <Signup />
          </>
        ),
      },
      {
        path: "/Login",
        element: (
          <>
            <Navbar />
            <Login />
          </>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <>
            <Navbar />
            <Dashboard />
          </>
        ),
      },
      {
        path: "/ContactUs",
        element: (
          <>
            <Navbar />
            <ContactUs />
          </>
        ),
      },
      {
        path: "Services",
        element: (
          <>
            <Navbar />
            <Services />
          </>
        ),
      },
      {
        path: "*",
        element: (
          <>
            <Navbar />
            <ErrorPage />
          </>
        ),
      },
    ]);

    return <RouterProvider router={router} />;
  } catch (e) {
    console.error("Error in App Component:", e);
  }
}

export default App;
