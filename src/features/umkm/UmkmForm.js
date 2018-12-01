import React from 'react';
import { Button, Text, View } from 'react-native';

class UmkmForm extends React.Component {
    state = {  }
    render() { 
        return ( 
            <View>
                <Text>Form tambah UMKM</Text>
                <Button title="simpan"
                    onPress={() => this.props.navigation.goBack()}
                ></Button>
            </View>
         );
    }
}
 
export default UmkmForm;