import {createBrowserRouter} from "react-router-dom";
import {Layout} from "./components/Layout";
import Dashboard from "./pages/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {index: true, element: <Dashboard/>}
        ],
    },
]);