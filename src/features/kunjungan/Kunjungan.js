import React from 'react';
import { Button, Text, View } from 'react-native';

class Kunjungan extends React.Component {
    state = {  }
    render() { 
        return ( 
            <View>
                <Text>List Kunjungan</Text>
                <Button title="Catat Kunjungan Baru"
                    onPress={() => this.props.navigation.navigate('KunjunganForm')}
                ></Button>
            </View>
         );
    }
}
 
export default Kunjungan;