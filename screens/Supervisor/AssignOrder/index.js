import React from 'react'
import {SafeAreaView, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native'
//styles import
import styles from './styles'
//react native vector icons
import Icon from 'react-native-vector-icons/AntDesign'
//dropdown
import {Dropdown} from 'react-native-element-dropdown';

const data = [
    { label: 'Sunday', value: '1' },
    { label: 'Monday', value: '2' },
    { label: 'Tuesday', value: '3' },
    { label: 'Wednesday', value: '4' },
    { label: 'Thursday', value: '5' },
    { label: 'Friday', value: '6' },
    { label: 'Saturday', value: '7' },
  ];

  const OperatorsData = [
    { label: 'Khan', value: '1' },
    { label: 'Sultan', value: '2' },
    { label: 'Jahanzeb', value: '3' },
    { label: 'Zaman Khan', value: '4' },
    { label: 'Jamal Khan', value: '5' },
    { label: 'Jandad Khan', value: '6' },
    { label: 'Noor Zaman', value: '7' },
  ];

class AssignOrder extends React.Component{

    state = {
        FromDay:null,
        ToDay:null,
        operator:null
    }

    render(){
        return(
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <ScrollView>
            <SafeAreaView style={styles.container}>

            <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={OperatorsData}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select Operator"
        searchPlaceholder="Search..."
        value={this.state.operator}
        onChange={item => {
          this.setState({operator:item.value});
        }}
      />
                
        <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="From Day"
        searchPlaceholder="Search..."
        value={this.state.FromDay}
        onChange={item => {
          this.setState({FromDay:item.value});
        }}
      />

        <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="To Day"
        searchPlaceholder="Search..."
        value={this.state.ToDay}
        onChange={item => {
          this.setState({ToDay:item.value});
        }}
      />

    <TextInput style={styles.WorkPartToBeAssignedField} placeholderTextColor="#929292" placeholder="Work to be assigned"/>
    <TouchableOpacity style={styles.AssignButton}>
                    <Text style={styles.AssignButtonText}>Assign</Text>
            </TouchableOpacity>
            </SafeAreaView>
            </ScrollView>
            </TouchableWithoutFeedback>
        )
    }
}

export default AssignOrder