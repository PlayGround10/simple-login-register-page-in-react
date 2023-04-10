import React, {useState} from 'react';

export default function Login(props) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({email});
    }
    return(
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="youremail@mail.com"/>

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="**********"/>
                <button type="submit">Login</button>
            </form>
            <button className='link-btn' onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here</button>
        </div>

    );
}