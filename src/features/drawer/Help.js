import React from 'react';
import { Button, Text, View } from 'react-native';

class Help extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Bantuan',
        }
    };
    state = {  }
    render() { 
        return ( 
            <View>
                <Text>Form Catat Kunjungan</Text>
            <Button title="Bantuan"
            />
            </View>
         );
    }
}
 
export default Help;