import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
//screens
import Login from '../screens/Login/index'
import AssignOrder from '../screens/Supervisor/AssignOrder'
import AssignedOrdersToOperator from '../screens/Operator/AssignedOrdersToOperator'
//Navigators
import AdminTopNavigator from './AdminTopNavigator'
import SupervisorTopNavigator from './SupervisorTopNavigator'
import ViewOrder from '../screens/Supervisor/Vieworder'


const Stack = createStackNavigator()

const Routes = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />

                <Stack.Screen options={{headerTitle:"Admin", headerTitleAlign:'center', 
                headerTitleStyle:{color:'#5FA7C0'}, 
                headerShadowVisible:false, 
                headerTintColor:'white'}}  name="AdminHome" component={AdminTopNavigator} />

                <Stack.Screen options={{headerTitle:"Supervisor", headerTitleAlign:'center', 
                headerTitleStyle:{color:'#5FA7C0'}, 
                headerShadowVisible:false, 
                headerTintColor:'white'}} 
                name="SupervisorHome" component={SupervisorTopNavigator} />


                <Stack.Screen options={{headerTitle:"Order", headerTitleAlign:'center', 
                headerTitleStyle:{color:'#5FA7C0'}, 
                headerShadowVisible:false, 
               }} 
                name="VieworderBySupervisor" component={ViewOrder} />



                <Stack.Screen options={{headerTitle:"Assign Order", headerTitleAlign:'center', 
                headerTitleStyle:{color:'#5FA7C0'}, headerTintColor:'#5FA7C0'}} 
                 name="Assignorder" component={AssignOrder} />

                <Stack.Screen options={{headerTitle:"Assigned Orders", headerTitleAlign:'center', 
                headerTitleStyle:{color:'#5FA7C0'}, headerTintColor:'#5FA7C0'}} 
                 name="AssignedOrdersToOperator" component={AssignedOrdersToOperator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes