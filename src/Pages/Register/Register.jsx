import { Link, NavLink } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Register = () => {
    // const [error, setError] = useState([]);

    const { createUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        const confrimPassword = form.get('confirmPassword')
        console.log(name, email, password, confrimPassword);

        // Create User
        createUser(email, password)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.error(error)
            });

        // if (password !== confrimPassword) {
        //     setError("Paassword Dontb Match")
        //     return
        // }
    }
    return (
        <div>
            <Navber></Navber>

            <div className="card bg-base-100 max-w-lg shrink-0 shadow-2xl mt-12 mx-auto p-12">

                <h2 className="text-3xl text-center mb-10 ">Please Register......!</h2>

                <hr />
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" className="input input-bordered" name="name" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder=" Email" className="input input-bordered" name="email" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder=" Password" className="input input-bordered" name="password" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="password" placeholder="  Confirm Password" className="input input-bordered" name="confirmPassword" required />
                    </div>
                    <div className="flex gap-2 mt-4">
                        <input type="checkbox" name="checkbox" className="checkbox" />
                        <p>Accept <Link className="font-semibold">Terms & Conditions</Link></p>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <div>
                        <p className="mt-4">already Have An Account ? <NavLink className='text-green-500 font-bold' to="/login">Login</NavLink> </p>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Register;