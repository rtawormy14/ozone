import React, { Component } from 'react'
import { View, Text,Image, TextInput, TouchableOpacity,KeyboardAvoidingView, Alert, Button ,StyleSheet ,StatusBar} from 'react-native';

export default class Login extends Component {


    static navigationOptions = ({ navigation }) => {
        return {
            header : null,
        }
      };

    render() {
        return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.loginContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('../../assets/images/bni_logo.png')} />
                  
                    </View>
               <View style={styles.formContainer}>
                    <View style={styles.formContainer}>
                        <StatusBar barStyle="light-content"/>
                        <TextInput style = {styles.input} 
                                    autoCapitalize="none" 
                                    onSubmitEditing={() => this.passwordInput.focus()} 
                                    autoCorrect={false} 
                                    keyboardType='email-address' 
                                    returnKeyType="next" 
                                    placeholder='Email or Mobile Num' 
                                    placeholderTextColor='rgba(225,225,225,0.7)'/>

                        <TextInput style = {styles.input}   
                                returnKeyType="go" ref={(input)=> this.passwordInput = input} 
                                placeholder='Password' 
                                placeholderTextColor='rgba(225,225,225,0.7)' 
                                secureTextEntry/>
                        {/*   <Button onPress={onButtonPress} title = 'Login' style={styles.loginButton} /> */}
                    <TouchableOpacity style={styles.buttonContainer} 
                        onPress={() => this.props.navigation.push('Home')}
                    >
                            <Text  style={styles.buttonText}>LOGIN</Text>
                        </TouchableOpacity> 
                    </View>
               </View>
               
         
            </KeyboardAvoidingView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    },
    title:{
        color: "#FFF",
        marginTop: 120,
        width: 180,
        textAlign: 'center',
        opacity: 0.9
    },
    formContainer: {
        padding: 20
       },
    input:{
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
    buttonContainer:{
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }, 
    loginButton:{
        backgroundColor:  '#2980b6',
        color: '#fff'
    }
});
