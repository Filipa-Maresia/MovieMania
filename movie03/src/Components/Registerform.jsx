import { useState } from 'react';

function RegisterForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
            }),
            redirect: "follow",
        };

        try {
            const response = await fetch("http://localhost:5173/register", requestOptions);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='register' style={{ margin: '50px' }}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit} style={{ width: '500px' }}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input className="form-control" type="text" id="name" required value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input className="form-control" type="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input className="form-control" type="password" id="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
}

export default RegisterForm;
