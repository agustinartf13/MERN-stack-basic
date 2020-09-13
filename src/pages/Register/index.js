import React from 'react';
import { RegisterBg } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';
import './register.scss';

const Register = () => {
    return (

        <div className="main-page">
            <div className="left">
                <img className="bg-register" src={RegisterBg} alt="imageBg"/>
            </div>
            <div className="right">
                <p className="title-register">Register</p>
                <Input label="Full Name" placeholder="Full Name"></Input>
                <Gap height={20}/>
                <Input label="Email" placeholder="@example.com"></Input>
                <Gap height={20}/>
                <Input label="Password" placeholder="Password"></Input>
                <Gap height={50}></Gap>
                <Button title="Register"></Button>
                <Gap height={100}/>
                <Link title="Halaman Login"/>
            </div>
        </div>
    )
}

export default Register