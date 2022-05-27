import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFFFFF',
        flex:1,
        paddingRight:'5%',
        paddingLeft:'5%',
        paddingTop:'5%'
    },

    supervisorCard:{
        width:'100%',
        height:60,
        backgroundColor:'#5FA7C0',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft:'5%',
        paddingRight:'5%'
    },

    supervisorName:{
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    },

    icons:{
        flexDirection:'row',
        width:'20%',
        justifyContent:'space-between'
    }
})

export default styles