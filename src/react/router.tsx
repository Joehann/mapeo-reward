import {createBrowserRouter} from "react-router-dom";
import {Layout} from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import {LoginPage} from "./pages/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {index: true, element: <Dashboard/>},
            {path:'/login', element: <LoginPage/>}
        ],
    },
]);