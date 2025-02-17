import {RouterProvider} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import {router} from "./react/router.tsx";

function App() {
    return <RouterProvider router={router}/>
}

export default App
