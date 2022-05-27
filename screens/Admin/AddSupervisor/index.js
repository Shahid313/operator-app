import React from 'react'
import {SafeAreaView, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native'
//react native vector icons
import Icon from 'react-native-vector-icons/AntDesign'
//importing styles
import styles from './styles'

class AddSupervisor extends React.Component{
    render(){
        return(
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <ScrollView>
            <SafeAreaView style={styles.container}>
                
                <View style={styles.LoginInfo}>
                    <Text style={styles.LoginText}>Add Operator</Text>
                </View>
                <View style={styles.EnteringData}>
                <TextInput style={styles.NameInput} placeholderTextColor="#929292" placeholder="Name"/>
                    <TextInput style={styles.EmailInput} placeholderTextColor="#929292" placeholder="Email"/>
                    
                <View style={styles.PasswordInput}>

                <TextInput placeholderTextColor="#929292" placeholder="Password" style={styles.InputField}/>

            </View>
            <TouchableOpacity style={styles.LoginButton}>
                    <Text style={styles.LoginButtonText}>Add supervisor</Text>
            </TouchableOpacity>
                </View>
            </SafeAreaView>
            </ScrollView>
            </TouchableWithoutFeedback>
        )
    }
}

export default AddSupervisor