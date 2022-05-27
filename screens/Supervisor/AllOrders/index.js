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
    GotoAssagnScreen(){
        this.props.navigation.navigate('Assignorder')
    }
    render(){
        return(
            <SafeAreaView style={styles.container}>
                 <TouchableOpacity onPress={this.logout} style={{left:'90%'}}>
                    <Icon name="logout" color="red" size={25} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('VieworderBySupervisor')} style={styles.OrderCard}>
                    <View style={styles.OrderTitleFull}>
                    <Text style={styles.OrderTitleText}>Order Title </Text>
                      
                    
                    </View>
                    
                    <View style={styles.OrderTitleFull}>
                        
                    <Text style={styles.OrderFromText}>Ordered From </Text>
                        <View style={styles.OrderTitleTag}>
                        <Text style={styles.OrderTitle}>Cleaner</Text>
                        </View>
                    </View>
                    <Text style={styles.OrderDescription}>Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it? Lorem ipsum is a dummy text without any sense</Text>
                    <View style={styles.Bottom}>
                    <View style={styles.icons}>
                    <TouchableOpacity>
                        <Icon name="delete" size={25} color="#FFFFFF"/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="edit" size={25} color="#FFFFFF"/>
                    </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => this.GotoAssagnScreen()} style={styles.assignButton}>
                        <Text style={styles.assignButtonText}>Assign</Text>
                    </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

export default AllOrders