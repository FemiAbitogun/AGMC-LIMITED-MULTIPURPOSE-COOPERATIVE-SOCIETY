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
import AdmissionToUnitTable from '../tables/AdmissionToUnitTable'

import EditMonthlySuscriber from '../editForms/marketing/monthly/EditMonthTable'
import EditAdmissionTable from '../editForms/marketing/admission/EditAdmissionTable'
import EditDailyTable from '../editForms/marketing/daily/EditDailyTable'
import Home from '../account/Home'

import Finance from '../../components/pages/Finance'

//pages
import Marketing from '../pages/Marketing'
import Authorization from '../pages/Authorization'
import FinanceTable from '../tables/financeTable/FinanceTable'
import EditFinanceTable from '../editForms/finance/EditFinanceTable'


import AdmissionToUnitContext from '../../context/marketing/AdmissionToUnitContext'
import DailyContributionProvider from '../../context/marketing/DailyContribution'
import DailyContributionTable from '../tables/DailyContributionTable'
import MonthlySuscriberDetail from '../tables/details/monthlySuscriber/MonthlySuscriberDetail'
import FinanceDetail from '../tables/details/financeDataDetails/FinanceDetail'
import AdmissionToUnitDetails from '../tables/details/monthlySuscriber/AdmissionToUnitDetails'


function Routes() {
    const { auth } = useContext(authorized);

    return (
        <div>
            <BrowserRouter>

                <Route exact path="/" component={LoginForm} />


                <Switch>


                    {
                        auth && (

                            (auth.user.roleName === "admin" || auth.user.roleName === "hdf" || auth.user.roleName === "hdm" || auth.user.roleName === "user") ?
                                <>
                                    <Route exact path="/home" component={Home} />
                                    <Route path="/monthly" component={MonthlyForm} />
                                    <Route path="/dailyContributionTable">
                                        <DailyContributionProvider>
                                            <DailyContributionTable />
                                        </DailyContributionProvider>
                                    </Route>
                                    <Route path="/daily" component={DailyContribution} />
                                    <Route path="/monthlySuscriberTable" component={MonthlyContributionTable} />


                                    <Route path="/marketing">
                                        <Marketing></Marketing>
                                    </Route>

                                    <Route path="/monthlySubscriber/Details/:id">
                                        <MonthlySuscriberDetail />
                                    </Route>

                                    <Route path="/financeDetails/:id">
                                        <FinanceDetail />
                                    </Route>

                                    <Route path="/admissionToUnitDetails/:id">
                                        <AdmissionToUnitContext>
                                            <AdmissionToUnitDetails />
                                        </AdmissionToUnitContext>
                                    </Route>

                              

                                    {

                                        (auth.user.roleName === "admin" || auth.user.roleName === "hdf" || auth.user.roleName === "hdm") && (
                                            <>
                                                <Route path="/finance" component={Finance} />
                                                <Route path="/admission" component={AdmissionIntoUnit} />
                                                <Route path="/financeTable" component={FinanceTable} />
                                                <Route path="/createUser" component={CreateNewUserForm} />
                                                <Route path="/userList" component={AuthenticatedUserTable} />



                                                <Route path="/admissionToUnitTable">
                                                    <AdmissionToUnitContext>
                                                        <AdmissionToUnitTable />
                                                    </AdmissionToUnitContext>
                                                </Route>


                                                <Route path="/editMonthly/edit/:id">
                                                    <EditMonthlySuscriber />
                                                </Route>

                                                <Route path="/editAdmission/edit/:id">
                                                    <EditAdmissionTable />
                                                </Route>

                                                <Route path="/editDaily/edit/:id">
                                                    <EditDailyTable />
                                                </Route>
                                                <Route path="/editFinance/edit/:id">
                                                    <EditFinanceTable />
                                                </Route>

                                                {auth.user.roleName === "admin" && (<Route path="/authorizationPage">
                                                    <Authorization></Authorization>
                                                </Route>)}

                                            </>
                                        )

                                    }



                                </> : <LoginForm />

                        )

                    }




                </Switch>

            </BrowserRouter>


        </div>
    )
}

export default Routes
