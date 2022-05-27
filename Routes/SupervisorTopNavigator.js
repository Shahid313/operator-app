import React from 'react'
import {View, Text} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
//styles import
import styles from './styles'
//screen imports
import AllOrders from '../screens/Supervisor/AllOrders'
import CreateOrder from '../screens/Supervisor/Createorder'

const Tab = createMaterialTopTabNavigator()

const SupervisorTopNavigator = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen  options={ ({route}) => ({
                tabBarLabel:({focused}) => {
                    if (focused) {
                      return(
                        <View style={styles.SkyTabBar}>
                        <Text style={styles.UpcomingEventsBarText}>All Orders</Text>
                        </View>
                      )
                    }else{
                        return(
                            <View style={styles.TabarWithNoSkyButton}>
                                <Text style={styles.UpcomingEventsBarBlackText}>All Orders</Text>
                            </View>
                        )
                    }
                }}) }
             name="AllOrders" component={AllOrders} />
            <Tab.Screen 
            options={ ({route}) => ({
                tabBarLabel:({focused}) => {
                    if (focused) {
                      return(
                        <View style={styles.SkyTabBar}>
                        <Text style={styles.UpcomingEventsBarText}>Create Order</Text>
                        </View>
                      )
                    }else{
                        return(
                            <View style={styles.TabarWithNoSkyButton}>
                                <Text style={styles.UpcomingEventsBarBlackText}>Create Order</Text>
                            </View>
                        )
                    }
                }}) }
                name="CreateOrder" component={CreateOrder} />
        </Tab.Navigator>

    )
}

export default SupervisorTopNavigator