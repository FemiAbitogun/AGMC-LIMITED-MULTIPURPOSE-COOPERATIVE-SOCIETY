import React from 'react'
import Home from '../Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MonthlyForm from '../marketing/MonthlyForm'
import DailyContribution from '../marketing/DailyContribution'
import AdmissionIntoUnit from '../marketing/AdmissionIntoUnit'
import Navbar from '../Navbar'


function Routes() {
    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route  path="/MonthlyFormcontribution" component={MonthlyForm}/>
                    <Route path="/DailyContribution" component={DailyContribution}/>
                    <Route path="/AdmissionIntoUnit" component={AdmissionIntoUnit}/>
                </Switch>
            </BrowserRouter>

        </div>
    )
}

export default Routes
