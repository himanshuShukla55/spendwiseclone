import { Link } from "react-router-dom/dist";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Reducers/AuthReducer/action";
import "./Navbar.css";

export const Navbar = () => {
  const state = useSelector((store) => store.authState);
  const dispatch = useDispatch();
  console.log(state);

  const logot = () => {
    logout(dispatch);
  };

  return (
    <header>
      <nav>
        <ul className="nav-bar">
          <li className="logo">
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "30px",
              }}
              to="/"
            >
              SpendWise
            </Link>
          </li>
          <input type="checkbox" id="check" />
          <span className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/budget">Budget</Link>
            </li>
            <li>
              {state.isAuth ? (
                <Link onClick={logot}>Logout</Link>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
            <li>
              {state.isAuth ? (
                <Link>Welcome {state.name}</Link>
              ) : (
                <Link to="/signup">SignUp</Link>
              )}
            </li>

            <label htmlFor="check" className="close-menu">
              <i className="fas fa-times"></i>
            </label>
          </span>
          <label htmlFor="check" className="open-menu">
            <i className="fas fa-bars"></i>
          </label>
        </ul>
      </nav>
    </header>
  );
};
