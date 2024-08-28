import '../styles/global.css';
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Quiz from "./pages/Quiz.jsx";
import Result from "./pages/Result.jsx";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {AuthProvider} from "../Contexts/AuthContexts.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import PublicRoute from "./PublicRoute.jsx";

function App() {
    const PrivateQuiz = PrivateRoute(Quiz);
    const PrivateResult = PrivateRoute(Result);
    const PublicLogin = PublicRoute(Login);
    const PublicSignup = PublicRoute(Signup);

    return (
    <div
        className={'App'}
    >
        <Router>
            <AuthProvider>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<PublicLogin />} />
                        <Route path="/signup" element={<PublicSignup />} />
                        <Route path="/quiz/:id" element={<PrivateQuiz />} />
                        <Route path="/result/:id" element={<PrivateResult />} />
                    </Routes>
                </Layout>

            </AuthProvider>

        </Router>
    </div>
    );
}

export default App
