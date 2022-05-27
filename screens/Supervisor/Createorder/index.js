import React from 'react'
import {SafeAreaView, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Button, Keyboard,ScrollView} from 'react-native'
//styles import
import styles from './styles'
//react native vector icons
import Icon from 'react-native-vector-icons/AntDesign'
//date picker
import DatePicker from 'react-native-date-picker'

class CreateOrder extends React.Component{
    state = {
        date:new Date(),
        open:false
    }
    render(){
        return(
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <ScrollView>
            <SafeAreaView style={styles.container}>
                
                <View style={styles.OrderInfo}>
                    <Text style={styles.CreateOrderText}>Create Order</Text>
                </View>
                <View style={styles.EnteringData}>
                <TextInput style={styles.OrderTitle} placeholderTextColor="#929292" placeholder="Order Title"/>
                <TextInput style={styles.Companyname} placeholderTextColor="#929292" placeholder="Company"/>
                <TextInput style={styles.Companyname} multiline={true} placeholderTextColor="#929292" placeholder="Description"/>
                {/* datapicker starts */}
                <TouchableOpacity onPress={() => this.setState({open:true})} style={styles.LoginButton}>
                    <Text style={styles.CreateOrderButtonText}>Select Date</Text>
                </TouchableOpacity>
                <DatePicker
                    modal
                    open={this.state.open}
                    date={this.state.date}
                    onConfirm={(date) => {
                    this.setState({open:false})
                    this.setState({date:date})
                    }}
                    onCancel={() => {
                    this.setState({open:false})
                    }}
                    />
                {/* datapicker ends */}
            <TouchableOpacity style={styles.CreateOrderButton}>
                    <Text style={styles.CreateOrderButtonText}>Create Order</Text>
            </TouchableOpacity>
                </View>
            </SafeAreaView>
            </ScrollView>
            </TouchableWithoutFeedback>
        )
    }
}

export default CreateOrder