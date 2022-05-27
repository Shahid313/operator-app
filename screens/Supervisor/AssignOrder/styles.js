import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingBottom:'100%',
        backgroundColor:'#FFFFFF',
        paddingRight:'6%',
        paddingLeft:'6%',
        paddingTop:'5%'
    },

    dropdown: {
        marginTop:'6%',
        height: 50,
        borderBottomColor: '#5FA7C0',
        borderBottomWidth: 1,
      },
      icon: {
        marginRight: 5,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
        color:'#5FA7C0'
      },
      iconStyle: {
        width: 20,
        height: 20,
        tintColor:'#5FA7C0'
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },

      WorkPartToBeAssignedField:{
        width:'100%',
        height:48,
        fontSize:17,
        color:'#929292',
        paddingLeft:10,
        marginTop:'6%',
        borderColor:'#5FA7C0',
        borderWidth:1
        
    },

    AssignButton:{
      width:'100%',
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#5FA7C0',
      justifyContent:'center',
      alignItems:'center',
      marginTop:'8%'
  },

  AssignButtonText:{
      color:'#fff',
      fontSize:20
  },
})

export default styles;