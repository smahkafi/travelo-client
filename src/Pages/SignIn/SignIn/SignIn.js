// import { faGoogle } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope, faUnlock } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import SignInimg from '../../../images/SignIn/login.jpg';


const SignIn = () => {
    const { allContext } = useAuth();
    const { setUser, signInUsingGoogle, handleSignIn, setError, } = allContext;

    const location = useLocation();
    const history = useHistory();
    const redirect = location?.state?.from || '/home';


    const handleGoogleSignIn = (e) => {
        e.preventDefault()
        signInUsingGoogle()
            .then(result => {
                console.log(result);
                setUser(result.user)
                history.push(redirect)
            })
    }

    return (
        <div className="container my-5 pb-3">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <div className="img">
                        <img className="img-fluid w-75" src={SignInimg} alt="" />
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 align-self-center">
                    <h2 className="text-primary text-center">Sign In</h2>
                    <p className="text-center mb-5">
                        It's Simple To Google Sign In
                    </p>
                    
                    <p className="text-danger">{setError}</p>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        handleSignIn()
                            .then(result => {
                                const user = result.user
                                setUser(user);
                                setError('');
                                history.push(redirect)
                            })
                            .catch(error => {
                                setError(error.message)
                            })
                    }} className="text-center">
                        <div className="mt-5">
                            <Button onClick={handleGoogleSignIn} type="submit" className="btn btn-primary  m-2"> 
                            {/* <FontAwesomeIcon icon={faGoogle} />  */}
                            Google Sign In</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;