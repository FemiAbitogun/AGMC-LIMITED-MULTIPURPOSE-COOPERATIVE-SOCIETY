import React, { useState, useContext, useEffect } from 'react'
import { authorized } from '../../../context/AuthContext';
import { useHistory } from 'react-router-dom'
import './Login.css'
import image from "./img/img.jpg"



function LoginForm() {

    const { sendLoginUser } = useContext(authorized)
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

            <form>


                <div className="mail_overlay"
                >
                    <div className="contact-form" style={{ backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "contain" }}
                    >


                        <div>
                            <div className="form-input">
                                <input type="text" placeholder="Name" onChange={(e) => {
                                    setName(e.target.value);
                                }} required />



                                <input type="password" placeholder="Password" onChange={(e) => {
                                    setPassword(e.target.value);
                                }} required />

                                <span>
                                    <button type="button" onClick={(e) => { LoginUser(e) }} className="button submit">LOGIN</button>
                                </span>

                            </div>

                        </div>
                    </div>
                </div>



            </form>


        </div>





    )
}

export default LoginForm
