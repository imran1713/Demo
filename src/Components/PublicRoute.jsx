import {useAuth} from "../Contexts/AuthContexts.jsx";
import {Navigate} from "react-router-dom";

const PublicRoute = (Component) => {
    return props => {
        const {currentUser} = useAuth();


        if(!currentUser){
            // console.log(currentUser);
            return <Component {...props} />

        } else{
            return <Navigate to={'/'}/>
        }
    } ;
};

export default PublicRoute;