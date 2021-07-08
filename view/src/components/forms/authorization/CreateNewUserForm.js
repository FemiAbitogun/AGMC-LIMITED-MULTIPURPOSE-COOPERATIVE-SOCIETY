import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Login.css'
import { sendCreateUser } from '../../../api/authentication/createNewUser'

function CreateNewUserForm() {



    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [roleName, setRoleName] = useState('');

    const body = {
        name, password, roleName
    }

    const history = useHistory();
    const CreateUser = async (e) => {
        e.preventDefault();

        if (body.name === "" || body.password === "" || body.roleName === "") {
            return
        }

        sendCreateUser(body);
        history.push('/Home')


    }



    function Cancel(e) {

        history.push('/Home')
    }


    return (
        <div>


            <div className="mail_overlay" >
                <div className="contact-form">
                    <form onSubmit={ (e)=>{CreateUser(e)}}>
                        <div className="form-input">
                            <input type="text" placeholder="Name" onChange={(e) => {
                                setName(e.target.value);
                            }} required="required" />
                            <input type="text" placeholder="Password" onChange={(e) => {
                                setPassword(e.target.value);
                            }} required="required" />
                            <input type="text" placeholder="Role Name" onChange={(e) => {
                                setRoleName(e.target.value);
                            }} required="required" />
                            <span>
                                <button type="submit"  className="button submit">CREATE</button>
                            </span>

                            <span>
                                <button type="submit" onClick={(e) => { Cancel(e) }} className="button submit">CANCEL</button>
                            </span>

                        </div>

                    </form>
                </div>
            </div>


        </div>
    )
}

export default CreateNewUserForm
