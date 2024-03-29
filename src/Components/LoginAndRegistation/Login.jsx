import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const [error,setError] = useState('')



    const { loginAccount } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    
    const from =location.state?.from.pathname




    const handleLogIn = (event) => {

        event.preventDefault()
        setError('')

        
        const form = event.target
        // const name = form.name?.value
        
        // const email = form.email.value
        // const password = form.password.value

        loginAccount(email, password)
            .then(result => {
                console.log(result)
                event.target.reset()
                navigate(from || '/')

            })
            .catch(error => {
                console.log(error.message)
                setError('Password Not Match')
            })


    }


    const handleEmail = (e) => {
        setEmailError('')
        const inputEmail = e.target.value
        setEmail(inputEmail)

        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(inputEmail)) {
            setEmailError('Please Give Me Provide Email')
        }
        else {
            setEmailError('')
        }




    }

    const handlePassword = (e) => {

        const inputPassword = e.target.value

        setPassword(inputPassword)
        if (!/(?=.*[A-Z])(?=.*?[0-9]).{6}/.test(inputPassword)) {
            setPasswordError(`Minimum Six characters, 
            at least Capital 
            letter and one number`)
        }

        else {
            setPasswordError('')

        }



    }

    return (
        <form onSubmit={handleLogIn} className="hero min-h-screen mx-auto bg-base-200">
            <div className="hero-content flex-col  mb-10 ">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Please Login</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input className={`input input-bordered${email ? emailError ? "border border-red-800 " : '' : ''}`} value={email} onChange={handleEmail} name='email' type="text" placeholder="email" required />
                        </div>
                        {
                            email && <p className='text-sm text-red-700'><small>{emailError}</small></p>

                        }                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input className={`input input-bordered${password ? passwordError ? "border border-red-800 " : '' : ''}`} onChange={handlePassword} value={password} name='password' type="password" placeholder="password" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>


                        {password && <p className='text-sm text-red-700'><small>{passwordError}</small></p>
                        }

                        <div className="form-control mt-6">
                            <button disabled={passwordError || emailError} className="btn btn-black text-white">Login</button>
                        </div>
                        <p><small>Dont you have Account? <Link state={location.state} to='/registation'>Register</Link></small></p>
                        {/* <p className='text-red-400'><small>{error}</small></p> */}

                    <div>
                        <p className='font-semibold text-red-500'><small>{error}</small></p>
                    </div>

                    </div>
                </div>
            </div>
        </form>
    );
};

export default Login;