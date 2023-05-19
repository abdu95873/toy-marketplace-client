import { useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import setTitle from "../../hooks/useTitle";


const Login = () => {
    setTitle('Login');

    const { signIn, googleLogin } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.email.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error));

    }


    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                Navigate(from, { replace: true })


            })
            .catch(error => {
                console.log(error);

            })

    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">

                            <input className="btn btn-primary" type="submit" value="Login"></input>
                        </div>
                    </form>
                    <p className="my-4 text-center">
                        New to Kid Toys! <Link to="/signup" className="text-red-600 my-4 text-center">SignUp</Link>
                    </p>

                    <div className="flex justify-center items-center my-5 space-x-1">
                        <h5>Login with ....   </h5> 
                        

                        <button className='btn btn-circle' onClick={handleGoogleLogin}>G</button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Login;