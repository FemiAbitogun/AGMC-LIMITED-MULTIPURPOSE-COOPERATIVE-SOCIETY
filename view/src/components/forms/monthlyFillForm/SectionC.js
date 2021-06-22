import React, { useState, createContext } from 'react'

export const formContextC = createContext("");



function SectionC(props) {


    // usestate
    const [BVN, setBVN] = useState("");
    const [bankName, setBankName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [meansOfIdentification, setMeansOfIdentification] = useState("");
    const [idCardNo, setIdCardNo] = useState("");




    /** functions............. */
    function _setBVN(value) { setBVN(value) }
    function _setBankName(value) { setBankName(value) }
    function _setAccountNumber(value) { setAccountNumber(value) }

    function _setMeansOfIdentification(value) { setMeansOfIdentification(value) }
    function _setIdCardNo(value) { setIdCardNo(value) }











    return (
        <div>


            {/* BANK DETAIL*/}
            <div className="row mt-4 container form-group" >

                <div className="col-xs-4">
                    <h5>Bank Details</h5>
                </div>

                <div className="col-xs-4 mb-3">
                    <input type="text" placeholder="BVN" className="form-control" required onChange={(e) => { _setBVN(e.target.value) }} />

                </div>

                <div className="col-xs-4">
                    <input type="text" placeholder="Bank Name" className="form-control" required onChange={(e) => { _setBankName(e.target.value) }} />
                </div>

            </div>

            <div className="row  mt-3 container">

                <div className="col-6">
                    <input type="text" placeholder="Account Number" className="form-control" required onChange={(e) => { _setAccountNumber(e.target.value) }} />
                </div>
            </div>





            {/*  means of identification*/}
            <div className="row mt-4 container form-group" >


                <div className="col-4 ">
                    <h5>Means of Identification</h5>
                </div>

                <div className="col-xs-2">
                    <input type="radio" name="identification"  onClick={(e) => { _setMeansOfIdentification("National ID") }} /> <span> National ID</span>
                </div>

                <div className="col-xs-2">
                    <input type="radio" name="identification"  onClick={(e) => { _setMeansOfIdentification("Voters' Card") }} /> <span>Voters' Card</span>
                </div>

                <div className="col-xs-2">
                    <input type="radio" name="identification"  onClick={(e) => { _setMeansOfIdentification("Drivers License") }} /><span>Drivers License</span>

                </div>

                <div className="col-xs-2">
                    <input type="radio" name="identification"  onClick={(e) => { _setMeansOfIdentification("International Passport") }} /><span>International Passport</span>

                </div>
            </div>






            {/* id card number */}
            <div className="row  mt-3 container">

                <div className="col-6">
                    <input type="text" placeholder="CARD NO" className="form-control" required
                        onChange={(e) => { _setIdCardNo(e.target.value) }} />
                </div>
            </div>


            <formContextC.Provider value={{
                BVN, bankName, accountNumber, meansOfIdentification, idCardNo
            }}>
                {props.children}
            </formContextC.Provider>






        </div>





    )
}

export default SectionC
