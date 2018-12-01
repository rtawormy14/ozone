import React from 'react';
import { Button, Text, View } from 'react-native';

class Register extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Registrasi',
        }
    };

    state = {  }
    render() { 
        return ( 
            <View>
                <Text>Registrasi</Text>
            </View>
         );
    }
}
 
export default Register;