import { BrowserRouter, Routes, Route  } from "react-router-dom";
import App from "./App";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <App></App>
            <Routes>
                <Route path="/electronics" element={<Electronics></Electronics>}></Route>
            </Routes>
        </BrowserRouter>
    )
}