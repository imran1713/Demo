import '../styles/global.css';
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Quiz from "./pages/Quiz.jsx";
import Result from "./pages/Result.jsx";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {

  return (
    <div
        className={'App'}
    >
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="/result" element={<Result />} />
                </Routes>
            </Layout>

        </Router>
    </div>
  );
}

export default App
