import React from "react"
import {Text, Image,  SafeAreaView, TouchableOpacity, View, Keyboard, TouchableWithoutFeedback, TextInput, ScrollView} from 'react-native'
import styles from './styles'

 class Login extends React.Component{

    state = {
        showPass:true,
        email:"",
        password:""
    }

    SignIn(){
        if(this.state.email == "theoperator@gmail.com"){
            this.props.navigation.navigate('AssignedOrdersToOperator')

        }else if(this.state.email == "theadmin@gmail.com"){
            this.props.navigation.navigate('AdminHome')

        }else if(this.state.email == "thesupervisor@gmail.com"){
            this.props.navigation.navigate('SupervisorHome')

        }
    }

    render(){
        return(
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <ScrollView>
            <SafeAreaView style={styles.container}>
                
                <View style={styles.LoginInfo}>
                    <Text style={styles.LoginText}>Login</Text>
                    <Text style={styles.EnterEmailText}>Enter your email address and password to access your account</Text>
                </View>
                <View style={styles.EnteringData}>
                    <TextInput style={styles.EmailInput} placeholderTextColor="#929292" onChangeText={(val)=>this.setState({email:val})} placeholder="Email"/>
                    
                <View style={styles.PasswordInput}>
                {this.state.showPass == true ? 
                <TouchableOpacity onPress={() => this.setState({showPass:!(this.state.showPass)})} style={styles.EyeButton}>
                <Image source={require('../../assets/eye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>:
                <TouchableOpacity onPress={() => this.setState({showPass:!(this.state.showPass)})} style={styles.EyeButton}>
                <Image source={require('../../assets/crosseye.png')} style={styles.imageStyle}/>
                </TouchableOpacity>
                }
                

                <TextInput placeholderTextColor="#929292" secureTextEntry={this.state.showPass} onChangeText={(val)=>this.setState({password:val})} placeholder="Password" style={styles.InputField}/>

            </View>
            <TouchableOpacity onPress={() => this.SignIn()} style={styles.LoginButton}>
                    <Text style={styles.LoginButtonText}>Login</Text>
            </TouchableOpacity>
                </View>
            </SafeAreaView>
            </ScrollView>
            </TouchableWithoutFeedback>
        )
    }
}

export default Login