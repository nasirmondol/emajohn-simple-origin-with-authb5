import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const location = useLocation();

    const from = location.state?.from?.pathname || ('/')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = event =>{
        setEmail(event.target.value)
    }

    const handlePasswordBlur = event =>{
        setPassword(event.target.value)
    }

    if(user){
        navigate(from, {replace: true})
    }

    const handleSignInUser = event =>{
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='form-container'>
            <div>
                <form onSubmit={handleSignInUser}>
                    <h2 className='form-title'>Login</h2>
                    <div className="input-group">
                        <label htmlFor="">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                        <p style={{color: 'red'}}>{error?.message}</p>
                        {
                            loading && <p>Loading...</p>
                        }
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p className='text'>
                    New to Ema-john? <Link className='link' to='/signup'>Create a new account</Link>
                </p>
                <div className='or-container'>------------    or    ------------</div>
                <div className='img-text'>
                    <img width={22} height={12} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png" alt="" />
                    <Link className='link'>Continue with Google</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;