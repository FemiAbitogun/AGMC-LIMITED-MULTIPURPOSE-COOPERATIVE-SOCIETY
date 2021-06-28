import React, { useState, createContext } from 'react'

export const formContextRef1 = createContext("");

function Referee1(props) {

    const [referee1Image, setReferee1Image] = useState("");
    const [referee1FullName, setReferee1FullName] = useState([]);
    const [referee1HomeAddress, setReferee1HomeAddress] =  useState([]);
    const [referee1WorkAddress, setReferee1WorkAddress] =  useState([]);
    const [referee1Business, setReferee1Business] =  useState([]);
    const [referee1Email, setReferee1Email] =  useState([]);
    const [referee1Religion, setReferee1Religion] =  useState([]);
    const [referee1Phone, setReferee1Phone] =  useState([]);
    const [referee1Relationship, setReferee1Relationship] =  useState([]);





    return (
        <div>

            <div className="mt-4 mb-4"> <h5>Referee 1 Details</h5></div>

            <div className="row container">
                <div className="col-sm-4">
                    <input type="file" onChange={function (e) {
                        setReferee1Image(e.target.files[0]);
                    }} className="form-control" />
                </div>
            </div>



            <div className="row mt-4 container form-group" >

                <div className="col-xs-4 mb-3">
                    <input type="text" placeholder="Full Name" className="form-control" required onChange={(e) => { setReferee1FullName(e.target.value) }} />

                </div>

                <div className="col-xs-4 mb-3">
                    <input type="text" placeholder="Home Address" className="form-control" required onChange={(e) => { setReferee1HomeAddress(e.target.value) }} />
                </div>


                <div className="col-xs-4 mb-3">
                    <input type="text" placeholder="Work Address" className="form-control" required onChange={(e) => { setReferee1WorkAddress(e.target.value) }} />
                </div>

            </div>



            <div className="row container">

                <div className="col-xs-3 mb-3">
                    <input type="text" placeholder="Business" className="form-control" required onChange={(e) => { setReferee1Business(e.target.value) }} />
                </div>


                <div className="col-xs-3 mb-3">
                    <input type="text" placeholder="Email" className="form-control" required onChange={(e) => { setReferee1Email(e.target.value) }} />
                </div>



                <div className="col-xs-3 mb-3">
                    <input type="text" placeholder="Religion" className="form-control" required onChange={(e) => { setReferee1Religion(e.target.value) }} />
                </div>


                <div className="col-xs-3 mb-3">
                    <input type="text" placeholder="Phone" className="form-control" required onChange={(e) => { setReferee1Phone(e.target.value) }} />
                </div>

            </div>


            <div className="container row">
                <div className="col-xs-5 mb-3">
                    <input type="text" placeholder="Relationship" className="form-control" required onChange={(e) => { setReferee1Relationship(e.target.value) }} />
                </div>
            </div>






            <formContextRef1.Provider value={{
                referee1Image, referee1FullName,
                referee1HomeAddress,
                referee1WorkAddress,
                referee1Business,
                referee1Email,
                referee1Religion,
                referee1Phone,
                referee1Relationship
            }}>
                {props.children}
            </formContextRef1.Provider>



        </div>
    )
}

export default Referee1
