import React from 'react'

function Index(){

    return(
        <div>
            <h1>Login Page</h1>
            <h3>Enter in your login details</h3>    
            <form>
                <label>
                    <p>Email</p>
                    <input type="text" name="email" value="" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="text" name="password" value="" />
                </label>
                <div>
                    <input type="submit" name="login-submit" value="Log In" />
                </div>
            </form>
        </div>
    );
}

export default Index