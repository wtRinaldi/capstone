import React, {useEffect} from 'react';

function Login(props) {
    useEffect(() => {
        document.title = 'Little Lemon - Log in to your account'
    }, [])
    return (
        <div>Log In page</div>
    );
}

export default Login;