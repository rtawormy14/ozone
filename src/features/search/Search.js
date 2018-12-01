import React from 'react';
import { Button, Text, View } from 'react-native';

class Search extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Cari UMKM',
        }
    };
    state = {  }
    render() { 
        return ( 
            <View>
                <Text>Cari UMKM</Text>
                <Button title="detail umkm"
                    onPress={() => this.props.navigation.navigate('DetailUmkm')}
                ></Button>
            </View>
         );
    }
}
 
export default Search;