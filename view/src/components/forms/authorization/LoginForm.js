import React, { useState, useContext } from 'react'
import { authorized } from '../../../context/AuthContext';
import { useHistory } from 'react-router-dom'
import image from "./img/img.jpg"



function LoginForm() {

    const { ServerLogin } = useContext(authorized)
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const body = { name, password }


    const history = useHistory();
    const LoginUser = async (e) => {

        e.preventDefault();
        await ServerLogin(body);
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










{/* 
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <form className="box">
                                <h1>Login</h1>
                                <p className="text-muted"> Please enter your login and password!</p> 
                                <input type="text" name="" placeholder="Username"/> 
                                <input type="password" name="" placeholder="Password"/>
                                     <a className="forgot text-muted" href="#">Forgot password?</a> <input type="submit" name="" value="Login" href="#"/>
                                <div className="col-md-12">
                                    <ul className="social-network social-circle">
                                        <li><a href="#" className="icoFacebook" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#" className="icoTwitter" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#" className="icoGoogle" title="Google +"><i className="fab fa-google-plus"></i></a></li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
 */}







        </div>





    )
}

export default LoginForm
