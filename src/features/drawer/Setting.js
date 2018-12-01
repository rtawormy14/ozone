import React from 'react';
import { Button, Text, View } from 'react-native';

class Setting extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Pengaturan',
        }
    };
    state = {  }
    render() { 
        return ( 
            <View>
                <Text>Pengaturan</Text>
            </View>
         );
    }
}
 
export default Setting;