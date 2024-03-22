import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Signup from "./pages/register/Signup";
import Signin from "./pages/signin/Signin";
// import {DarkModeContext} from './context/darkModeContext';
function App() {
  // const {darkMode} = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div className={`app ${darkMode ? "dark-theme" : ""}`}>
        {/* <Navbar /> */}
        <div style={{ with: "100%" }}>
          <Outlet />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      // element: <Home />
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
      path: "/client",
      element: <Layout />,
      children: [
        {
          path: "/client/dashboard",
          // element: <Dashboard />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
