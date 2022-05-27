import React from 'react'
import {View, Text} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
//styles import
import styles from './styles'
//screen imports
import AddOperator from '../screens/Admin/AddOperator'
import AllOperators from '../screens/Admin/AllOperators'
import AddSupervisor from '../screens/Admin/AddSupervisor'
import AllSupervisors from '../screens/Admin/AllSupervisors'



const Tab = createMaterialTopTabNavigator()

const Supervisor = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen 
            options={ ({route}) => ({
                tabBarLabel:({focused}) => {
                    if (focused) {
                      return(
                        <View>
                        <Text style={styles.skyText}>All supervisors</Text>
                        </View>
                      )
                    }else{
                        return(
                            <View>
                                <Text style={styles.UpcomingEventsBarBlackText}>All supervisors</Text>
                            </View>
                        )
                    }
                }}) }
             name="AllSupervisors" 
             component={AllSupervisors} />
            <Tab.Screen 
            options={ ({route}) => ({
                tabBarLabel:({focused}) => {
                    if (focused) {
                      return(
                        <View>
                        <Text style={styles.skyText}>Add supervisors</Text>
                        </View>
                      )
                    }else{
                        return(
                            <View>
                                <Text style={styles.UpcomingEventsBarBlackText}>Add supervisors</Text>
                            </View>
                        )
                    }
                }}) }
            name="AddSupervisor" 
            component={AddSupervisor} />
        </Tab.Navigator>
    )
}

const Operator = () => {
    return(
        <Tab.Navigator options={{
            indicatorStyle: {
              width: 0, height: 0, elevation: 0,      
          }
          }}>
            <Tab.Screen
            options={ ({route}) => ({
                tabBarLabel:({focused}) => {
                    if (focused) {
                      return(
                        <View>
                        <Text style={styles.skyText}>All operators</Text>
                        </View>
                      )
                    }else{
                        return(
                            <View>
                                <Text style={styles.UpcomingEventsBarBlackText}>All operators</Text>
                            </View>
                        )
                    }
                }}) }
             name="AllOperators"
             component={AllOperators} />
            <Tab.Screen 
            options={ ({route}) => ({
                tabBarLabel:({focused}) => {
                    if (focused) {
                      return(
                        <View>
                        <Text style={styles.skyText}>Add operators</Text>
                        </View>
                      )
                    }else{
                        return(
                            <View>
                                <Text style={styles.UpcomingEventsBarBlackText}>Add operators</Text>
                            </View>
                        )
                    }
                }}) }
            name="AddOperator" 
            component={AddOperator} />
        </Tab.Navigator>
    )
}


const AdminTopNavigator = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen 
             options={ ({route}) => ({
                tabBarLabel:({focused}) => {
                    if (focused) {
                      return(
                        <View style={styles.SkyTabBar}>
                        <Text style={styles.UpcomingEventsBarText}>Supervisor</Text>
                        </View>
                      )
                    }else{
                        return(
                            <View style={styles.TabarWithNoSkyButton}>
                                <Text style={styles.UpcomingEventsBarBlackText}>Supervisor</Text>
                            </View>
                        )
                    }
                }}) }
             name="Supervisor" 
             component={Supervisor} />

            <Tab.Screen 
            options={ ({route}) => ({
                tabBarLabel:({focused}) => {
                    if (focused) {
                      return(
                        <View style={styles.SkyTabBar}>
                        <Text style={styles.UpcomingEventsBarText}>Operator</Text>
                        </View>
                      )
                    }else{
                        return(
                            <View style={styles.TabarWithNoSkyButton}>
                                <Text style={styles.UpcomingEventsBarBlackText}>Operator</Text>
                            </View>
                        )
                    }
                }}) }
            name="Operator" 
            component={Operator} />
        </Tab.Navigator>
    )
}

export default AdminTopNavigator