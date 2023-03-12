import { BrowserRouter } from "react-router-dom";
import App from "./App";

const RouteSwitch = () => {
    return (
        <BrowserRouter basename="/shop-frontend">
            <App></App>
        </BrowserRouter>
    )
}

export default RouteSwitch;