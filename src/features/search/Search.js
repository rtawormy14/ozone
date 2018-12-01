import React from 'react';
import { Button, Text, View } from 'react-native';

class Search extends React.Component {
    state = {  }
    render() { 
        return ( 
            <View>
                <Text>Find Mitra</Text>
                <Button title="detail mitra"
                    onPress={() => this.props.navigation.navigate('DetailMitra')}
                ></Button>
            </View>
         );
    }
}
 
export default Search;