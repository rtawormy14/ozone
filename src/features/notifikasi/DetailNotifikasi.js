import React from 'react';
import { Button, Text, View } from 'react-native';

class DetailNotifikasi extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Detail Notifikasi',
        }
    };
    state = {  }
    render() { 
        return ( 
            <View>
                <Text>Detail Notifikasi </Text>
            </View>
         );
    }
}
 
export default DetailNotifikasi;