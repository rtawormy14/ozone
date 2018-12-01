import React from 'react';
import { Button, Text, View } from 'react-native';

class KunjunganForm extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Catat Kunjungan',
        }
    };

    state = {  }
    render() { 
        return ( 
            <View>
                <Text>Form Catat Kunjungan</Text>
                <Button title="Simpan"
                    onPress={() => this.props.navigation.goBack()}
                ></Button>
            </View>
         );
    }
}
 
export default KunjunganForm;