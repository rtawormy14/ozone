import React from 'react';
import { Button, Text, View } from 'react-native';

class DetailUmkm extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Detail UMKM',
        }
    };

    state = {  }
    render() { 
        return ( 
            <View>
                <Text>Detail UMKM</Text>
            </View>
         );
    }
}
 
export default DetailUmkm;