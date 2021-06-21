import React, { useState, createContext } from 'react'

export const formContextRef2 = createContext("");


function Referee2(props) {

    const [referee2Image, setReferee2Image] = useState([]);
    const [referee2FullName, setReferee2FullName] = useState([]);
    const [referee2HomeAddress, setReferee2HomeAddress] = useState([]);
    const [referee2WorkAddress, setReferee2WorkAddress] = useState([]);
    const [referee2Business, setReferee2Business] = useState([]);
    const [referee2Email, setReferee2Email] = useState([]);
    const [referee2Religion, setReferee2Religion] = useState([]);
    const [referee2Phone, setReferee2Phone] = useState([]);
    const [referee2Relationship, setReferee2Relationship] = useState([]);



    return (
        <div>

            <div className="mt-4 mb-4"> <h5>Referee 2 Details</h5></div>

            <div className="row container">
                <div className="col-sm-4">
                    <input type="file" onChange={function (e) {
                        setReferee2Image(e.target.files[0]);
                    }} className="form-control" />
                </div>
            </div>



            <div className="row mt-4 container form-group" >

                <div className="col-xs-4 mb-3">
                    <input type="text" placeholder="Full Name" className="form-control" required onChange={(e) => { setReferee2FullName(e.target.value) }} />

                </div>

                <div className="col-xs-4 mb-3">
                    <input type="text" placeholder="Home Address" className="form-control" required onChange={(e) => { setReferee2HomeAddress(e.target.value) }} />
                </div>


                <div className="col-xs-4 mb-3">
                    <input type="text" placeholder="Work Address" className="form-control" required onChange={(e) => { setReferee2WorkAddress(e.target.value) }} />
                </div>

            </div>



            <div className="row container">

                <div className="col-xs-3 mb-3">
                    <input type="text" placeholder="Business" className="form-control" required onChange={(e) => { setReferee2Business(e.target.value) }} />
                </div>


                <div className="col-xs-3 mb-3">
                    <input type="text" placeholder="Email" className="form-control" required onChange={(e) => { setReferee2Email(e.target.value) }} />
                </div>



                <div className="col-xs-3 mb-3">
                    <input type="text" placeholder="Religion" className="form-control" required onChange={(e) => { setReferee2Religion(e.target.value) }} />
                </div>


                <div className="col-xs-3 mb-3">
                    <input type="text" placeholder="Phone" className="form-control" required onChange={(e) => { setReferee2Phone(e.target.value) }} />
                </div>

            </div>


            <div className="container row">
                <div className="col-xs-5 mb-3">
                    <input type="text" placeholder="Relationship" className="form-control" required onChange={(e) => { setReferee2Relationship(e.target.value) }} />
                </div>
            </div>






            <formContextRef2.Provider value={{
                referee2Image, 
                referee2FullName,
                referee2HomeAddress,
                referee2WorkAddress,
                referee2Business,
                referee2Email,
                referee2Religion,
                referee2Phone,
                referee2Relationship
            }}>
                {props.children}
            </formContextRef2.Provider>

        </div>
    )
}

export default Referee2
