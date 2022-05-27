import React from "react"
import {SafeAreaView, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native'
//styles import
import styles from './styles'
//react native vector icons
import Icon from 'react-native-vector-icons/AntDesign'

class ViewOrder extends React.Component{
    logout = ()=>{
        this.props.navigation.navigate("Login")
    }
    GotoAssagnScreen(){
        this.props.navigation.navigate('Assignorder')
    }
    render(){
        return(
            <SafeAreaView style={styles.container}>
                
                <View style={styles.OrderCard}>
                    <View style={styles.OrderTitleFull}>
                        <Icon name="user" color="white" size={25}/>
                    <Text style={styles.OrderTitleText}>Operator Name</Text>
                      
                    
                    </View>
                    
                  
                   
                </View>


                <View style={styles.OrderCard}>
                    <View style={styles.OrderTitleFull}>
                    <Icon name="user" color="white" size={25}/>

                    <Text style={styles.OrderTitleText}>Operator Name</Text>
                      
                    
                    </View>
                    
                  
                   
                </View>
            </SafeAreaView>
        )
    }
}

export default ViewOrder