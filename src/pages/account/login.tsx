import React from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
    onLogin: () => void;
  }
const Login: React.FC = () => {
    const navigate = useNavigate()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // Prevent default form submission behavior
        event.preventDefault();

        // Perform any authentication logic here

        // After successful authentication, navigate to a different page
        
       navigate('/admindashboard')
    };
    return (
        <div className='login-container'>
            <form onSubmit={handleSubmit}>
                <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                <h1 className="h3 mb-3 fw-normal">Login</h1>

                <div className="form-floating">
                    <input type="text" id="UserName" name="UserName" className="form-control" placeholder="Username" required />
                    <label htmlFor="UserName">Username</label>
                </div>
                <div className="form-floating">
                    <input type="password" id="Password" name="Password" className="form-control" placeholder="Password" required />
                    <label htmlFor="Password">Password</label>
                </div>

                <div className="form-check text-start my-3">
                    <input className="form-check-input" type="checkbox" id="RememberMe" name="RememberMe" />
                    <label className="form-check-label" htmlFor="RememberMe">
                        Remember me
                    </label>
                </div>

                <button type="submit" className="btn btn-primary w-100 py-2">Sign in</button>

                <div className="mt-2">
                    <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
                </div>
            </form>

            <div className="external-login-container mt-3">
                <p>Or login using:</p>
                <form action="/Account/ExternalRegisterOrLogin" method="get" className="text-center">
                    <input type="hidden" name="provider" value="Google" />
                    <button type="submit" className="btn btn-outline-danger">
                        <i className="fab fa-google"></i> Google
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
