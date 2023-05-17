import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg"


const Navbar = () => {

//     const { user, logOut } = useContext(AuthContext);

//   const handleLogOut = ()=>{
//     logOut()
//     .then(result => {
//       const loggedInUser = result.user;
//       console.log(loggedInUser);
//     })
//     .catch(error => {
//       console.log(error);
//     })
//   }

    return (
        <div className="navbar bg-base-100 my-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link>Home</Link></li>
                        <li><Link>All Toys</Link></li>
                        <li><Link>My Toys</Link></li>
                        <li><Link>Add Toys</Link></li>
                        <li><Link>Blog</Link></li>


                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl"><div><img className="w-16" src={logo} alt="logo" /> <small>KID TOYS</small> </div> </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link>Home</Link></li>
                    <li><Link>All Toys</Link></li>
                    <li><Link>My Toys</Link></li>
                    <li><Link>Add Toys</Link></li>
                    <li><Link>Blog</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
                {/* {
                  user ?

                  <button onClick={handleLogOut} className="btn btn-danger">LogOut</button>:
                    <Link to="/login">
                        <button className="btn btn-primary">Login</button>
                    </Link>
                }

                  {
                    user ?
                      <></> :
                      <Link to="/register">
                        <button className="btn btn-accent">Register</button>

                      </Link>
                  } */}
            </div>
        </div>
    );
};

export default Navbar;