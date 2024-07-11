import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);


    const handleLogin = (e) => {
        e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const email = form.get('email')
        const password = form.get('password')

        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result);

                // Navigate after login
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error)
            })

    }
    return (
        <div>
            <Navber></Navber>

            <div className="card bg-base-100 max-w-lg shrink-0 shadow-2xl mt-12 mx-auto p-12">

                <h2 className="text-3xl text-center mb-10 ">Login Your Account</h2>

                <hr />
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div>
                        <p className="mt-4 ">Dont’t Have An Account ? <NavLink className='text-red-500 font-bold' to="/register"> Register</NavLink> </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;