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
        <form className="">


            <div className="mail_overlay" >
                <div className="contact-form">
                    <div onSubmit={(e) => { CreateUser(e) }}>
                        <div className="form-input">
                            <input type="text" placeholder="Name | Email" onChange={(e) => {
                                setName(e.target.value);
                            }} required="required" />
                            <input type="text" placeholder="Password" onChange={(e) => {
                                setPassword(e.target.value);
                            }} required="required" />
                            <div className="dropdown m-4">
                                <button className="button btn btn-dark fw-bold dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Role
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li className="dropdown-item" onClick={(e) => {
                                        setRoleName("admin");
                                    }}>Admin</li>

                                    <li className="dropdown-item" onClick={(e) => {
                                        setRoleName("user");
                                    }}>User</li>
                                    <li className="dropdown-item" onClick={(e) => {
                                        setRoleName("hdf");
                                    }}>Head Finance</li>

                                    <li className="dropdown-item" onClick={(e) => {
                                        setRoleName("hdm");
                                    }}>Head Marketing</li>
                                </ul>
                            </div>
                            <input type="text" placeholder="Role Name" value={roleName}
                                readOnly />










                            <span>
                                <button type="submit" onClick={(e) => { CreateUser(e) }} className="button submit">CREATE</button>
                            </span>

                            <span>
                                <button type="submit" onClick={(e) => { Cancel(e) }} className="button submit">CANCEL</button>
                            </span>

                        </div>

                    </div>
                </div>
            </div>


        </form >
    )
}

export default CreateNewUserForm
