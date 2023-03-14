import { BrowserRouter } from "react-router-dom";
import App from "./App";

const RouteSwitch = () => {
    return (
        <BrowserRouter basename="/Shop-frontend">
            <App></App>
        </BrowserRouter>
    )
}

export default RouteSwitch;