import React from 'react';
import { Button, Text, View } from 'react-native';

class RegisterMitra extends React.Component {
    state = {  }
    render() { 
        return ( 
            <View>
                <Text>Registrasi</Text>
                <Button title="Simpan"
                    onPress={() => this.props.navigation.goBack()}
                ></Button>
            </View>
         );
    }
}
 
export default RegisterMitra;