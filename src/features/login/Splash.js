import React, { Component } from 'react'
import { View, Text,Image, TouchableOpacity,KeyboardAvoidingView, Alert, Button ,StyleSheet ,StatusBar} from 'react-native';
import { NavigationActions,StackActions } from 'react-navigation';

export default class Splash extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header : null,
        }
      };


    resetNavigation(targetRoute) {
        // const resetAction = StackActions.reset({
        //   index: ,
        //   key : null,
        //   actions: [
        //     NavigationActions.navigate({ routeName: targetRoute }),
        //   ],
        // });
        this.props.navigation.navigate(targetRoute);
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.props.navigation.navigate('Login');
        }, 1000);
    }
    
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <StatusBar
                        translucent={false}
                        backgroundColor="#ff9000"
                        barStyle="light-content"
                    />
                <View style={styles.rowContainer}>
                    <View style={styles.logoContainer}>
                        <Image  style={styles.logoOzone} source={require('../../assets/images/ozone_logo.jpeg')} />
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Ozone</Text>
                    </View>
                </View> 
                <View style={styles.bniContainer}>
                    <Image resizeMode="contain" style={styles.logoBNI} source={require('../../assets/images/bni_logo.png')} />
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
    rowContainer : {
            flex:2
    },
    logoContainer : {
        flex:5,
        flexDirection:'row', 
        alignItems:'flex-end', 
        justifyContent:'center',
    },
    logoOzone: {
        width: 200,
        height: 200,
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
    bniContainer :{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'flex-end' 
    },
    logoBNI: {
        position: 'absolute',
        width: 100,
        height: 50
    },
});
