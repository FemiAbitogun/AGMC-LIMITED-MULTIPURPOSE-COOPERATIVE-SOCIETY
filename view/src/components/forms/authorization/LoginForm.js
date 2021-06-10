import React, { useState, useContext, useEffect } from 'react'
import { authorized } from '../../../context/AuthContext';
import { useHistory } from 'react-router-dom'
import './Login.css'



function LoginForm() {

    const { auth, sendLoginUser } = useContext(authorized)
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const body = { name, password }


    const history = useHistory();
    const LoginUser = async (e) => {

        e.preventDefault();
        await sendLoginUser(body);
        history.push('/Home')

    }





    return (
        <div>
            <div className="mail_overlay" >
                <div className="contact-form">
                    <form>
                        <div className="form-input">
                            <input type="text" placeholder="Name" onChange={(e) => {
                                setName(e.target.value);
                            }} required />
                            <input type="text" placeholder="Password" onChange={(e) => {
                                setPassword(e.target.value);
                            }} required />

                            <span>
                                <button type="button" onClick={(e) => { LoginUser(e) }} className="button submit">LOGIN</button>
                            </span>

                        </div>

                    </form>
                </div>
            </div>



        </div>
    )
}

export default LoginForm
