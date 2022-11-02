import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './SignUp.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    if (user) {
        navigate('/shop')
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value)
    }

    const handleCreateUser = event => {
        event.preventDefault()
        if (password !== confirmPassword) {
            setError("password didn't match")
            return;
        }
        if (password.length < 6) {
            setError('password should contain at least six character as long.')
            return;
        }
        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className='form-container'>
            <div>
                <form onSubmit={handleCreateUser}>
                    <h2 className='form-title'>Sign Up</h2>
                    <div className="input-group">
                        <label htmlFor="">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="">confirm password</label>
                        <input onBlur={handleConfirmPassword} type="password" name="confirm-password" id="" required />
                        <p style={{ color: 'red' }}>{error}</p>
                    </div>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p className='text'>
                    Already have an account? <Link className='link' to='/login'>Login</Link>
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

export default SignUp;