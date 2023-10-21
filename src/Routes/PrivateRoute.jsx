import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom/dist";

export const PrivateRoute = ({children}) => {
    const state=useSelector(store=>store.authState)

    if(state.isAuth && state.name){
  return children
    }else{
      return <Navigate to='/login'/>
    }

};
