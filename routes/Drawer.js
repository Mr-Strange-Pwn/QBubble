import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import AuthStack from './AuthStack'
import SideBar from '../components/common/SideBar'
import HomeStack from './HomeStack'
const Drawer = () => {

    const Drawer = createDrawerNavigator()

    return (
        <Drawer.Navigator initialRouteName="login" drawerContent={(props) => <SideBar {...props} />}>
            <Drawer.Screen name="Auth" component={AuthStack} />
            <Drawer.Screen name="Home" component={HomeStack} />
        </Drawer.Navigator>
    )
}

export default Drawer