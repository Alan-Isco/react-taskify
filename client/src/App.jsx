import { useContext } from "react";
import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { AuthContext } from "./context/authContext";
import { DarkModeContext } from "./context/darkModeContext";
import ClientDashboard from "./pages/clientDashboard/ClientDashboard";
import Signup from "./pages/register/Signup";
import Signin from "./pages/signin/Signin";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  const Layout = () => {
    return (
      <div className={`app ${darkMode ? "dark-theme" : ""}`}>
        <Navbar />
        <div style={{ with: "100%" }}>
          <Outlet />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/signin" />;
    }
    return children;
  };
  const router = createBrowserRouter([
    {
      path: "/",
      // element: <ClientDashboard />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/users",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/users/client/dashboard",
          element: <ClientDashboard />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
