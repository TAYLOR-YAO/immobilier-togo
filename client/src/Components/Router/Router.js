
import React from "react";
import {Switch, Route} from "react-router-dom";

import LendingPage from "../LendingPage/LendingPage";

import RegisterHouse from "../RegisterHouses/RegisterHouse";
import TestFile from "../Test_file"


const Router =()=>(
    <Switch>
        <Route exact path="/" component={LendingPage} />
        <Route exact path="/poster-immobiliers" component={RegisterHouse} />
        <Route exact path="/test" component={TestFile} />


    </Switch>
)
export default Router;

