import { useContext } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import { AuthContext } from "./context/authContext";
import { DarkModeContext } from "./context/darkModeContext";
import ClientDashboard from "./pages/clientDashboard/ClientDashboard";
import FreelancerDashboard from "./pages/freelancerDashboard/FreelancerDashboard";
import Home from "./pages/home/Home";
import Posts from "./pages/posts/Posts";
import Signup from "./pages/register/Signup";
import Signin from "./pages/signin/Signin";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div className={`app ${darkMode ? "dark-theme" : ""}`}>
          <Navbar />
          <div style={{ with: "100%" }}>
            <Outlet />
          </div>
        </div>
      </QueryClientProvider>
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
      element: <Home />,
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
        {
          path: "/users/freelancer/dashboard",
          element: <FreelancerDashboard />,
        },
        {
          path: "/users/freelancer/client-posts",
          element: <Posts />,
        },
        {
          path: "/users/profile",
          element: <Profile />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
