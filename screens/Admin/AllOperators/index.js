import React from "react"
import {SafeAreaView, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native'
//styles import
import styles from './styles'
//react native vector icons
import Icon from 'react-native-vector-icons/AntDesign'

class AllOperators extends React.Component{
    logout = ()=>{
        this.props.navigation.navigate("Login")
    }
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <TouchableOpacity onPress={this.logout} style={{left:'90%'}}>
                    <Icon name="logout" color="red" size={25} />
                </TouchableOpacity>


                <View style={styles.supervisorCard}>
                    <Text style={styles.supervisorName}>Shahid Khan</Text>
                    <View style={styles.icons}>
                    <TouchableOpacity>
                        <Icon name="delete" size={25} color="#FFFFFF"/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="edit" size={25} color="#FFFFFF"/>
                    </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

export default AllOperators