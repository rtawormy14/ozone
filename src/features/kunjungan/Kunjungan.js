import React from 'react';
import { Button, Text, View } from 'react-native';

class Kunjungan extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Catatan Kunjungan',
        }
    };

    state = {  }
    render() { 
        return ( 
            <View>
                <Text>List Kunjungan</Text>
                <Button title="Catat Kunjungan Baru"
                    onPress={() => this.props.navigation.navigate('KunjunganForm')}
                ></Button>
                <Button title="Detail UMKM"
                    onPress={() => this.props.navigation.navigate('DetailUmkm')}
                ></Button>
            </View>
         );
    }
}
 
export default Kunjungan;