import React, { useContext, useEffect } from 'react'
import Home from '../Home'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom'
import MonthlyForm from '../marketing/MonthlyForm'
import DailyContribution from '../marketing/DailyContribution'
import AdmissionIntoUnit from '../marketing/AdmissionIntoUnit'
import LoginForm from '../forms/authorization/LoginForm'
import AuthContext, { authorized } from '../../context/AuthContext'
import Navbar from '../Navbar'
import CreateNewUserForm from '../forms/authorization/CreateNewUserForm'
import AuthenticatedUserTable from '../tables/AuthenticatedUserTable'
import MonthlyContributionTable from '../tables/MonthlyContributionTable'

import EditMonthlySuscriber from '../editForms/marketing/monthly/EditMonthTable'

function Routes() {

    const { auth } = useContext(authorized);
    const history = useHistory();



    return (
        <div>
            <BrowserRouter>
                {auth && <Navbar />}

                <Switch>


                    <Route exact path="/" component={LoginForm} />
                    <Route path="/Home" component={Home} />

                    <Route path="/createUser" component={CreateNewUserForm} />


                    {
                        auth != "" ?
                            <>

                                <Route path="/daily" component={DailyContribution} />
                                <Route path="/admission" component={AdmissionIntoUnit} />
                                <Route path="/monthly" component={MonthlyForm} />
                                <Route path="/createUser" component={CreateNewUserForm} />
                                <Route path="/userList" component={AuthenticatedUserTable} />
                                <Route path="/monthlySuscriberTable" component={MonthlyContributionTable} />

                                <Route path="/edit/monthlySuscriber/:id">
                                    <EditMonthlySuscriber />
                                </Route>

                            </> : <LoginForm />
                    }



                </Switch>

            </BrowserRouter>


        </div>
    )
}

export default Routes
