import React from 'react';
import { Button, Text, View } from 'react-native';

class KunjunganForm extends React.Component {
    state = {  }
    render() { 
        return ( 
            <View>
                <Text>Form Catat Kunjungan</Text>
                <Button title="Simpan"></Button>
            </View>
         );
    }
}
 
export default KunjunganForm;