import { BrowserRouter, Routes, Route  } from "react-router-dom";
import App from "./App";
import Electronics from "./components/electronics/Electronics";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <App></App>
            <Routes>
                <Route path="/electronics" element={<Electronics/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;