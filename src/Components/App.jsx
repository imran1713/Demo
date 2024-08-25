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

function App() {

  return (
    <div
        className={'App'}
    >
        <Router>
            <AuthProvider>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <PrivateRoute path="/quiz" >
                            <Quiz/>
                        </PrivateRoute>
                        <PrivateRoute path="/result" >
                            <Result />
                        </PrivateRoute>
                    </Routes>
                </Layout>

            </AuthProvider>

        </Router>
    </div>
  );
}

export default App
