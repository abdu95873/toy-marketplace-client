import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg"
import { AuthContext } from "../../../Providers/AuthProviders";



const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="navbar bg-base-100 my-8">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/alltoys">All Toys</Link></li>
                    <li><Link to="/mytoys">My Toys</Link></li>
                    <li><Link to="/addtoys">Add Toys</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                        
                    </ul>

                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl"><div><img className="w-16" src={logo} alt="logo" /> <small>KID TOYS</small> </div> </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/alltoys">All Toys</Link></li>
                    <li><Link to="/mytoys">My Toys</Link></li>
                    <li><Link to="/addtoys">Add Toys</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
               
            </div>
            <div className="navbar-end d-flex">

{user &&

    <span className="d-inline-block">



        <img className='mt-2' disabled style={{ fontSize: '2rem', pointerEvents: 'none', height: '40px', borderRadius: '50px', width: '40px' }} src={user.photoURL} alt="img" />


    </span>
}


{
    user ?

        <button onClick={handleLogOut} className="btn btn-error mx-3">LogOut</button> :
        <Link to="/login">
            <button className="btn btn-primary mx-3">Login</button>
        </Link>
}

{
    user ?
        <></> :
        <Link to="/register">
            <button className="btn btn-accent">Register</button>

        </Link>
}
</div>

        </div>
    );
};

export default Navbar;