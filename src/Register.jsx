import React, {useState} from 'react';

export default function Register(props) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({email});
    }
    return(
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className='register-form' onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <input type="text" name="name" id="name" value={email} onChange={(e) => setName(e.target.value)} placeholder="your full name"/>

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="youremail@mail.com"/>

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="**********"/>
                <button type="submit">Register</button>
            </form>
            <button className='link-btn' onClick={() => props.onFormSwitch('login')}>Already have an account? Login here</button>
        </div>

    );
} 