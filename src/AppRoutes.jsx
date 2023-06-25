import {
    Route,
    BrowserRouter as Router,
    Routes
} from "react-router-dom";

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPages';

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/login" element={LoginPage}></Route>
                <Route exact path="/" element={HomePage}></Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;