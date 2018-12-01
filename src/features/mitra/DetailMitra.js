import React from 'react';
import { Button, Text, View } from 'react-native';

class DetailMitra extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Detail Mitra',
        }
    };
    state = {  }
    render() { 
        return ( 
            <View>
                <Text>Detail Mitra</Text>
            </View>
         );
    }
}
 
export default DetailMitra;