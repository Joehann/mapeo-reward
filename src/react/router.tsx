import {createBrowserRouter} from "react-router-dom";
import {Layout} from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import {LoginPage} from "./pages/Login";
import {CreatePartnerPage} from "./pages/CreatePartner";
import {CreateDealPage} from "./pages/CreateDeal";
import {PartnerListPage} from "./pages/PartnerListPage";
import {DealListPage} from "./pages/DealListPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {index: true, element: <Dashboard/>},
            {path: '/login', element: <LoginPage/>},
            {path: '/create-partner', element: <CreatePartnerPage/>},
            {path: '/create-deal', element: <CreateDealPage/>},
            {path: '/partners', element: <PartnerListPage/>},
            {path: '/deals', element: <DealListPage/>},
        ],
    },
]);