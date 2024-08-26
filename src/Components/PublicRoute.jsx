import {useAuth} from "../Contexts/AuthContexts.jsx";
import {Navigate} from "react-router-dom";

const PublicRoute = (Component) => {
    return props => {
        const {currentUser} = useAuth();
        // console.log(currentUser);
        if(!currentUser){
            return <Component {...props} />
        } else{
            return <Navigate to={'/'}/>
        }
    } ;
};

export default PublicRoute;