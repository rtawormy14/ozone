import React, { Component } from 'react'
import { View, Text,Image, TextInput, TouchableOpacity,KeyboardAvoidingView, Alert, Button ,StyleSheet ,StatusBar} from 'react-native';
import { NavigationActions,StackActions } from 'react-navigation';

export default class Login extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header : null,
        }
      };

    resetNavigation(targetRoute) {
        // const resetAction = StackActions.reset({
        //   index: 0,
        //   key : null,
        //   actions: [
        //     NavigationActions.navigate(targetRoute),
        //   ],
        // });
        this.props.navigation.navigate(targetRoute);
    }

    onLoginSuccess = () => {
        console.log("asdf")
        this.resetNavigation('Home');
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.loginContainer}>
                </View>
                <View style={styles.loginContainer}>
                    <View style={styles.logoContainer}>
                        <Image  style={styles.logoOzone} source={require('../../assets/images/ozone_logo.jpeg')} />
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Ozone</Text>
                    </View>
                    
                </View>
                <View style={styles.formContainer}>
                    <View style={styles.formContainer}>
                        <StatusBar barStyle="light-content"/>
                        <View style={styles.labelContainer}>
                            <Text style={styles.label}>Email</Text>
                        </View>
                        <TextInput style = {styles.input} 
                                    autoCapitalize="none" 
                                    onSubmitEditing={() => this.passwordInput.focus()} 
                                    autoCorrect={false} 
                                    keyboardType='email-address' 
                                    returnKeyType="next" 
                                    placeholder='Email' 
                                    placeholderTextColor='#ABABAB'/>
                        <View style={styles.labelContainer}>
                            <Text style={styles.label}>Password</Text>
                        </View>
                            <TextInput style = {styles.input}   
                                    returnKeyType="go" ref={(input)=> this.passwordInput = input} 
                                    placeholder='Password' 
                                    placeholderTextColor='#ABABAB' 
                                    secureTextEntry/>
                            <View style={styles.labelContainer}>
                        </View>
                            <TouchableOpacity style={styles.buttonContainer} 
                                onPress={()=> this.props.navigation.navigate('Home')}
                            >
                                <Text  style={styles.buttonText}>LOGIN</Text>
                            </TouchableOpacity> 
                        <View style={styles.formContainer}>
                            <TouchableOpacity
                                onPress={()=> console.log('lupa password')}
                            >
                                <Text  style={{color: '#fff',textAlign: 'center'}}>Lupa Password?</Text>
                            </TouchableOpacity> 
                        </View>
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
        backgroundColor: '#ff9000',
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logoContainer : {
        flex:5,
        flexDirection:'row', 
        alignItems:'flex-end', 
        justifyContent:'center',
    },
    logoOzone: {
        width: 150,
        height: 150,
        borderRadius:100,
        alignItems : 'center',
        justifyContent:'center',
    },
    titleContainer : {
        flex:1,
        flexDirection:'row', 
        alignItems:'flex-start', 
        justifyContent:'center'
    },
    title:{
        fontSize:36, 
        fontWeight:'bold', 
        color:'#FFF'
    },
    formContainer: {
        padding: 20,
        flexGrow : 1,
    },
    contentContainer: {
        padding: 20,
        flexGrow : 1,
    },
    input:{
        height: 40,
        backgroundColor: '#FFF',
        marginBottom: 10,
        padding: 10,
        color: '#333'
    },
    buttonContainer:{
        backgroundColor: '#00bb33',
        paddingVertical: 15
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }, 
    loginButton:{
        backgroundColor:  '#00bb33',
        color: '#fff'
    },
    labelContainer : {
        height : 30,
        paddingTop : 5,
        paddingBottom : 5,
    },
    label:{
        color: '#FFF',
        textAlign: 'justify',
        fontWeight: '400',
    }, 
});
