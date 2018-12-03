
import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

class FloatingButton extends React.Component {
    state = {  }
    render() { 
        return ( 
            <TouchableOpacity
                style={styles.floatTouchableOpacity}
                onPress={this.props.onPress}
            >
            <Text style={styles.floatIcon}>+</Text>
            </TouchableOpacity>
         );
    }
}

class CustomButton extends React.Component {
    state = {  }
    render() { 
        return ( 
            <TouchableOpacity
                style={this.props.style}
                onPress={this.props.onPress}
            >
            <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}
 

export {
    FloatingButton,
    CustomButton
}
export default CustomButton;

const styles = StyleSheet.create({

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

    floatTouchableOpacity: { 
        position: 'absolute', 
        width: 56, 
        height: 56, 
        alignItems: 'center', 
        justifyContent: 'center',  
        bottom: 20, 
        right : 20,
        backgroundColor: '#00bb33', 
        borderRadius: 30, 
        elevation: 8 
    }, 
    floatIcon: { 
        fontSize: 40, 
        color: 'white' 
    }
})