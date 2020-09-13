import React from 'react';
import { LoginBg } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';

const Login = () => {
    return (
        <div className="main-page">
        <div className="left">
            <img className="bg-register" src={LoginBg} alt="imageBg"/>
        </div>
        <div className="right">
            <p className="title-register">Login</p>
          
            <Input label="Email" placeholder="@example.com"></Input>
            <Gap height={20}/>
            <Input label="Password" placeholder="Password"></Input>
            <Gap height={50}></Gap>
            <Button title="Login"></Button>
            <Gap height={100}/>
            <Link title="Don't have an account ? Please Register"/>
        </div>
    </div>
    )
}

export default Login