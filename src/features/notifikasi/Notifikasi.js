import React from 'react';
import { Button, Text, View } from 'react-native';

class Notifikasi extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Notifikasi',
        }
    };

    state = {  }
    render() { 
        return ( 
            <View>
                <Text>List Notifikasi</Text>
                <Button title="detail Notifikasi"
                    onPress={() => this.props.navigation.navigate('DetailNotifikasi')}
                ></Button>
            </View>
         );
    }
}
 
export default Notifikasi;