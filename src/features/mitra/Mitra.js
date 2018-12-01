import React from 'react';
import { Button, Text, View } from 'react-native';

class Mitra extends React.Component {
    state = {  }
    render() { 
        return ( 
            <View>
                <Text>List Mitra</Text>
                <Button title="detail mitra"
                    onPress={() => this.props.navigation.navigate('DetailMitra')}
                ></Button>
            </View>
         );
    }
}
 
export default Mitra;