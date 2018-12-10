import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flexGrow: 1, 
        backgroundColor: '#f0f0f0',
    },
    formContainer: {
        flexGrow : 1,
        padding: 20,
    },
    formLayout: {
        flexGrow : 9,
    },
    buttonLayout: {
        flexGrow : 1,
    },

    listContainer :{
        flexGrow : 1,
    },
    listTitle :{
        height : 50,
        flexDirection:'row',
        alignItems:'center',
    },
    titleText:{
        fontSize : 16,
        color: '#333',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingLeft : 10,
    }, 
    listContent :{
    },
    separatorDate :{
        height : 30,
        backgroundColor : '#bcbcbc',
        padding : 5,
        paddingLeft : 20,
    },
    separatorDateText :{
        
    },
    labelContainer : {
        height : 30,
        paddingTop : 5,
        paddingBottom : 5,
    },
    label:{
        color: '#000',
        textAlign: 'justify',
        fontWeight: '400',
    }, 
    inputContainer:{
        marginBottom : 10,
        height:50,
    },
    inputIconContainer:{
        marginBottom : 10,
        padding : 5,
        height:50,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor : '#fff',
        borderRadius: 5,
        borderWidth:1,
        borderColor: '#ccc',
    },
    pickerContainer :{
        marginBottom : 10,
        height:50,
        flex : 1,
        justifyContent: 'flex-start',
        backgroundColor : '#fff',
        borderRadius: 5,
        borderWidth:1,
        borderColor: '#ccc',
    },
    iconContainer :{
        width:50,
        alignItems:'center',
        padding:5,
        
    },
    icon: {
        height:40,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },

    input:{
        padding:5,
        height: 40,
        marginBottom: 10,
        backgroundColor : '#fff',
        borderRadius: 5,
    },
    inputAreaContainer:{
        marginBottom : 10,
    },
    inputArea:{
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 5,
        borderWidth:1,
        borderColor: '#ccc',
    },
    buttonPrimary:{
        backgroundColor: '#00bb33',
        paddingVertical: 15,
        borderRadius: 5,
    },
    buttonSecondary:{
        backgroundColor: '#ff9000',
        padding: 10,
        alignSelf :'flex-start',
        borderRadius: 5,
    },
    
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }, 
    link :{
        color : '#0000EE',
        textAlign: 'center',
        textAlignVertical: "center",
        padding : 10,
    }
});