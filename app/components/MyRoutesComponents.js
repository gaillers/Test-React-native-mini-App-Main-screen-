import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native';


import Login from '../pages/Login'
import Creats from '../pages/Creats'





export default class MyRoutesComponents extends Component {
    render () {
        return (
            <Router>
                <Stack key="root" hideNavBar={true}>
                  <Scene key="login" component={Login} title="Login" />
                  <Scene key="Creats" component={Creats} title="Creats" initial={true} />
                </Stack>
            </Router>
        )
    }
}