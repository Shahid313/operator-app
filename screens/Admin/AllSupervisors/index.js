import React from 'react'
import {SafeAreaView, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native'
//styles import
import styles from './styles'
//react native vector icons
import Icon from 'react-native-vector-icons/AntDesign'

class AllSupervisors extends React.Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>
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

export default AllSupervisors