import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MonthlyForm from '../marketing/MonthlyForm'
import DailyContribution from '../marketing/DailyContribution'
import AdmissionIntoUnit from '../marketing/AdmissionIntoUnit'
import LoginForm from '../forms/authorization/LoginForm'
import { authorized } from '../../context/AuthContext'
import CreateNewUserForm from '../forms/authorization/CreateNewUserForm'
import AuthenticatedUserTable from '../tables/AuthenticatedUserTable'
import MonthlyContributionTable from '../tables/MonthlyContributionTable'

import EditMonthlySuscriber from '../editForms/marketing/monthly/EditMonthTable'
import EditAdmissionTable from '../editForms/marketing/admission/EditAdmissionTable'
import EditDailyTable from '../editForms/marketing/daily/EditDailyTable'
import Home from '../account/Home'

//pages
import Marketing from '../pages/Marketing'
import Authorization from '../pages/Authorization'



function Routes() {
    const { auth } = useContext(authorized);


    return (
        <div>
            <BrowserRouter>
                {/* {auth && <Navbar />} */}

                <Switch>


                    <Route exact path="/" component={LoginForm} />
                    <Route path="/Home" component={Home} />

                    {/* <Route path="/createUser" component={CreateNewUserForm} /> */}


                    {
                        auth !== "" ?
                            <>

                                <Route path="/daily" component={DailyContribution} />
                                <Route path="/admission" component={AdmissionIntoUnit} />
                                <Route path="/monthly" component={MonthlyForm} />
                                <Route path="/createUser" component={CreateNewUserForm} />
                                <Route path="/userList" component={AuthenticatedUserTable} />
                                <Route path="/monthlySuscriberTable" component={MonthlyContributionTable} />

                                <Route path="/editMonthly/edit/:id">
                                    <EditMonthlySuscriber />
                                </Route>

                                <Route path="/editAdmission/edit/:id">
                                    <EditAdmissionTable />
                                </Route>

                                <Route path="/editDaily/edit/:id">
                                    <EditDailyTable />
                                </Route>

                                {/* pages */}

                                <Route path="/marketing">
                                    <Marketing></Marketing>
                                </Route>

                                <Route path="/authorizationPage">
                                   <Authorization></Authorization>
                                </Route>


                            </> : <LoginForm />
                    }




                </Switch>

            </BrowserRouter>


        </div>
    )
}

export default Routes
