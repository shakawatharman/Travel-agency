import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './Login.css';

const Login = () => {
    const history = useHistory();
  const location = useLocation();
  const redirect_url = location.state?.from || "/home";

    const {signInWithGoogle} = useAuth();
   
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then((result) => {
            history.push(redirect_url);
          });
    }

    return (
        <div className="container my-5">
          
            <div className="row justify-content-center">
                <div className="border border-primary bg-white col-6">
                    <div className="login-area text-center">
                        <h3 className="mb-5">Please Login</h3>
                        <button onClick={handleGoogleSignIn} className="mt-5 mb-2"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/24px-Google_%22G%22_Logo.svg.png" alt="" /> Continue with Google</button>

                        <p>Don't have an account? <a href="https://google.com">Create an account</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;