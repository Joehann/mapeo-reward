import {createBrowserRouter} from "react-router-dom";
import {Layout} from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import {LoginPage} from "./pages/Login";
import {CreatePartnerPage} from "./pages/CreatePartner";
import {CreateDealPage} from "./pages/CreateDeal";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {index: true, element: <Dashboard/>},
            {path: '/login', element: <LoginPage/>},
            {path: '/create-partner', element: <CreatePartnerPage/>},
            {path: '/create-deal', element: <CreateDealPage/>}
        ],
    },
]);