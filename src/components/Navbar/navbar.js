import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';

const Navbar = () => {
    const {user, logout}=useContext(UserContext)

    return (
        <nav>
            <Link to={"/home"}>Home</Link>
            <Link to={"/cart"}>Cart</Link>
            <Link to={"/register"}>Register</Link>
            <Link to={"/login"}>Login</Link>
            {
                user&&
                <span>
                    <h2>
                        {user.username}
                    </h2>
                </span>
            }
            {
                user
                && <button onClick={logout}>Logout</button>
            }
           
        </nav>
    );
}

export default Navbar;
