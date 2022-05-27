import React from "react"
import {SafeAreaView, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native'
//styles import
import styles from './styles'
//react native vector icons
import Icon from 'react-native-vector-icons/AntDesign'

class AllOrders extends React.Component{
    logout = ()=>{
        this.props.navigation.navigate("Login")
    }
    render(){
        return(
            <SafeAreaView style={styles.container}>
                 <TouchableOpacity onPress={this.logout} style={{left:'90%'}}>
                    <Icon name="logout" color="red" size={25} />
                </TouchableOpacity>
                <View style={styles.OrderCard}>
                    <View style={styles.OrderTitleFull}>
                    <Text style={styles.OrderTitleText}>Order Title </Text>
                      
                    
                    </View>
        
                    <Text style={styles.OrderDescription}>Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense</Text>
        
                    
                </View>
            </SafeAreaView>
        )
    }
}

export default AllOrders