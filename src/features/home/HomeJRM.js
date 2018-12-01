import React from 'react';
import { Button, Text, View } from 'react-native';

class HomeJRM extends React.Component {
    state = {  }
    render() { 
        return ( 
            <View>
                <Text>Home JRM</Text>
                <Button title="Kunjungan"
                    onPress={() => this.props.navigation.navigate('Kunjungan')}
                ></Button>
                <Button title="Cari UMKM"
                    onPress={() => this.props.navigation.navigate('Search')}
                ></Button>
                <Button title="Tambah UMKM"
                    onPress={() => this.props.navigation.navigate('UmkmForm')}
                ></Button>
                <Button title="Registrasi Mitra"
                    onPress={() => this.props.navigation.navigate('RegisterMitra')}
                ></Button>
                <Button title="Mitra yang Dikelola"
                    onPress={() => this.props.navigation.navigate('Mitra')}
                ></Button>
                <Button title="Notifikasi"
                    onPress={() => this.props.navigation.navigate('Notifikasi')}
                ></Button>
            </View>
         );
    }
}
 
export default HomeJRM;