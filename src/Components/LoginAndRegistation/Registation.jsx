import React, { useContext } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Registation = () => {
    const { createAccount, userName, auth } = useContext(AuthContext)
    const location = useLocation()
    // console.log(location);

    const navigate = useNavigate()

    const handleRegister = (event) => {
        console.log('this is register');
        event.preventDefault()

        const from = location.state?.from.pathname


        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        createAccount(email, password)
            .then(result => {
                const logged = result.user
                userName(name)
                navigate(from)

            })
            .catch(error => {
                console.log(error.message)
            })

    }






    return (
        <form onSubmit={handleRegister} className="hero min-h-screen mx-auto bg-base-200">
            <div className="hero-content flex-col my-10">
                <div className="text-center">
                    <h1 className="text-3xl  font-bold">Please Register</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input name='confirmPass' type="password" placeholder="Confirm Password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button  className="btn btn-black">Register</button>
                        </div>
                        <p><small>Already have an account? <Link to='/login'>Login</Link></small></p>
                        {/* <p className='text-red-400'>{error}</p> */}

                    </div>
                </div>
            </div>
        </form>
    );
};

export default Registation;