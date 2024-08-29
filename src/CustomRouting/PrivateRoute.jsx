import {useAuth} from "../Contexts/AuthContexts.jsx";
import {Navigate} from "react-router-dom";

const PrivateRoute = (Component) => {
    return (...props) => {
        const {currentUser} = useAuth();
        // console.log(auth);
        if(currentUser) {
            return <Component {...props} />
        } else{
            return <Navigate to={'/login'}/>
        }
    } ;
};

export default PrivateRoute;